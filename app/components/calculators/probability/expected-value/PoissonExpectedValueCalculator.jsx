import { useState, useMemo } from 'react';

const PoissonExpectedValueCalculator = () => {
  const [lambda, setLambda] = useState(3);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonLambda, setComparisonLambda] = useState(5);
  const [maxDisplay, setMaxDisplay] = useState(20);

  const handleReset = () => {
    setLambda(3);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
    setMaxDisplay(20);
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

  // Factorial calculation
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // Poisson PMF: P(X = k) = (λ^k * e^(-λ)) / k!
  const poissonPMF = (k, lambda) => {
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  };

  const calculations = useMemo(() => {
    const lambdaVal = typeof lambda === 'string' ? parseFloat(lambda) : lambda;

    if (isNaN(lambdaVal) || lambdaVal <= 0) {
      return {
        isValid: false,
        lambda: lambdaVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate outcomes until cumulative probability > 0.999 or k > maxDisplay
    const outcomes = [];
    let cumulativeProb = 0;
    let k = 0;
    
    while (k <= maxDisplay && cumulativeProb < 0.999) {
      const probability = poissonPMF(k, lambdaVal);
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
      cumulativeProb += probability;
      k++;
    }

    // Calculate expected value: E(X) = λ
    const expectedValue = lambdaVal;

    // Calculate variance: Var(X) = λ
    const variance = lambdaVal;
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      lambda: lambdaVal,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      cumulativeProb,
      shouldShowOutcomes: outcomes.length <= 50,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [lambda, maxDisplay]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonLambda) || comparisonLambda <= 0) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: comparisonLambda
    };
  }, [comparisonLambda]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const lambda = calculations.lambda;

    // Generate contextual examples based on lambda value
    if (lambda < 1) {
      return {
        scenario: "Rare events (low rate)",
        examples: [
          `Average ${lambda.toFixed(2)} events per interval? Very sparse occurrences`,
          `In 100 intervals? Expect total ≈ ${(lambda * 100).toFixed(0)} events`,
          `${(Math.exp(-lambda) * 100).toFixed(1)}% chance of zero events in an interval`
        ]
      };
    } else if (lambda <= 5) {
      return {
        scenario: "Moderate event rate",
        examples: [
          `Average ${lambda.toFixed(1)} events per time period? That's your expected count`,
          `Over 100 periods? Expect total ≈ ${(lambda * 100).toFixed(0)} events`,
          `Typical range per period: ${Math.max(0, Math.round(lambda - calculations.standardDeviation))} to ${Math.round(lambda + calculations.standardDeviation)} events`
        ]
      };
    } else if (lambda <= 15) {
      return {
        scenario: "High event rate",
        examples: [
          `${lambda.toFixed(1)} events per interval on average`,
          `Most intervals have ${Math.max(0, Math.round(lambda - calculations.standardDeviation))}-${Math.round(lambda + calculations.standardDeviation)} events`,
          `Rare to see zero events (only ${(Math.exp(-lambda) * 100).toFixed(2)}% chance)`
        ]
      };
    } else {
      return {
        scenario: "Very high event rate",
        examples: [
          `Average ${lambda.toFixed(1)} events per period - high activity`,
          `Typical variation: ±${calculations.standardDeviation.toFixed(1)} events`,
          `Very predictable: most periods have ${Math.round(lambda - calculations.standardDeviation)}-${Math.round(lambda + calculations.standardDeviation)} events`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Poisson Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average number of events) for a Poisson distribution. 
          Perfect for modeling rare events, arrivals, defects, or any scenario where events occur randomly over time or space.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means you expect {calculations.expectedValue.toFixed(2)} events 
            per time interval on average. For Poisson, the rate parameter λ IS the expected value - they are the same thing!
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
                  <strong>λ</strong> (Rate Parameter / Expected Value)
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="20"
                  step="0.1"
                  value={typeof lambda === 'string' ? 3 : lambda}
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
                  step="0.1"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = λ</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Variance:</span>
                  <span><strong>Var(X) = λ</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Zero events probability:</span>
                  <span>{(Math.exp(-calculations.lambda) * 100).toFixed(2)}%</span>
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
                  <option value="15">First 15 outcomes</option>
                  <option value="20">First 20 outcomes</option>
                  <option value="30">First 30 outcomes</option>
                  <option value="50">First 50 outcomes</option>
                </select>
                <span style={styles.displayNote}>
                  Showing {calculations.outcomes.length} outcomes (≈{(calculations.cumulativeProb * 100).toFixed(1)}% of distribution)
                </span>
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
                {showComparison ? '▼' : '▶'} Compare with Different Rate
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative λ:</label>
                      <input
                        type="number"
                        value={comparisonLambda}
                        onChange={(e) => setComparisonLambda(parseFloat(e.target.value) || 0.1)}
                        style={styles.comparisonInputField}
                        min="0.01"
                        step="0.1"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> λ={calculations.lambda}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)} events
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> λ={comparisonLambda}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)} events
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% higher event rate
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% lower event rate
                          </span>
                        ) : (
                          <span>Same expected value</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {calculations.isValid && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
            <div style={styles.contributionsSection}>
              <h3 style={styles.h3}>Contribution to E(X)</h3>
              <div style={styles.contributionsTable}>
                <div style={styles.contributionsHeader}>
                  <span>k Events</span>
                  <span>Probability</span>
                  <span>Contribution</span>
                </div>
                {calculations.outcomes.map((outcome, index) => (
                  <div key={index} style={styles.contributionsRow}>
                    <span style={styles.contributionValue}>{outcome.value}</span>
                    <span style={styles.contributionProbability}>{outcome.probability.toFixed(6)}</span>
                    <span style={styles.contributionAmount}>{outcome.contribution.toFixed(6)}</span>
                  </div>
                ))}
                <div style={styles.contributionsTotal}>
                  <span><strong>E(X) ≈</strong></span>
                  <span></span>
                  <span><strong>{calculations.contributions.reduce((sum, c) => sum + c.contribution, 0).toFixed(4)}</strong></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - EXPECTED VALUE FOCUS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Expected Value (Average Events per Interval)</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
                <div style={styles.heroFormula}>
                  Formula: E(X) = λ = {calculations.lambda}
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> For Poisson, λ is BOTH the rate parameter AND the expected value. 
                  Expect {calculations.expectedValue.toFixed(2)} events per time period on average.
                </div>
              </div>

              {/* REAL-WORLD EXAMPLES */}
              {realExample && (
                <div style={styles.examplesSection}>
                  <div style={styles.examplesHeader}>
                    <span style={styles.examplesIcon}>📊</span>
                    <span style={styles.examplesTitle}>E(X) in Context: {realExample.scenario}</span>
                  </div>
                  <ul style={styles.examplesList}>
                    {realExample.examples.map((example, index) => (
                      <li key={index} style={styles.exampleItem}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Statistics - Collapsed by default */}
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
                      <span>{calculations.variance.toFixed(4)} (same as E(X)!)</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Standard Deviation:</span>
                      <span>{calculations.standardDeviation.toFixed(4)} (√λ)</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Mode (most likely):</span>
                      <span>{Math.floor(calculations.lambda)} events</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Coefficient of Variation:</span>
                      <span>{(calculations.standardDeviation / calculations.expectedValue).toFixed(4)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs focused on E(X) */}
              <div style={styles.visualization}>
                <div style={styles.tabContainer}>
                  <button
                    onClick={() => setActiveTab('visualization')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'visualization' ? styles.tabActive : {})
                    }}
                  >
                    E(X) Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('calculation')}
                    style={{
                      ...styles.tab,
                      ...(activeTab === 'calculation' ? styles.tabActive : {})
                    }}
                  >
                    How E(X) is Calculated
                  </button>
                  {calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
                    <button
                      onClick={() => setActiveTab('breakdown')}
                      style={{
                        ...styles.tab,
                        ...(activeTab === 'breakdown' ? styles.tabActive : {})
                      }}
                    >
                      Individual Contributions
                    </button>
                  )}
                </div>

                {activeTab === 'visualization' && (
                  <div style={styles.chart}>
                    <VisualizationChart 
                      contributions={calculations.contributions}
                      expectedValue={calculations.expectedValue}
                    />
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value Formula</div>
                      <div style={styles.formulaMain}>E(X) = λ</div>
                      <div style={styles.formulaDescription}>
                        For Poisson distributions, the expected value equals the rate parameter λ. 
                        This is one of the simplest formulas in probability - the parameter IS the expected value!
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameter:</strong> λ = {calculations.lambda} (average rate of events)
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = λ
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Result:</strong> E(X) = {calculations.expectedValue.toFixed(4)} events per interval
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> The Poisson distribution is parameterized by its mean. 
                      If events occur at an average rate of λ per time period, then by definition, the expected number 
                      of events in that period is λ. Simple as that! This makes Poisson one of the easiest distributions 
                      to work with - no complex formula needed, E(X) = λ always.
                    </div>

                    <div style={styles.uniqueProperty}>
                      <div style={styles.uniqueTitle}>✨ Unique Poisson Property</div>
                      <p style={styles.p}>
                        For Poisson: E(X) = Var(X) = λ. The mean equals the variance! This property helps identify 
                        when data follows a Poisson distribution. If your data has mean ≈ variance, Poisson might be a good model.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'breakdown' && calculations.shouldShowOutcomes && calculations.outcomes.length <= 20 && (
                  <div style={styles.chart}>
                    <ContributionsChart contributions={calculations.contributions} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={styles.resultsPlaceholder}>
              <div style={styles.placeholderIcon}>E(X)</div>
              <p style={styles.placeholderText}>
                Enter valid parameter: λ &gt; 0
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Poisson Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average number of events occurring in a fixed interval of time or space. 
              For Poisson, this is simply λ - the rate parameter. If λ = 3, you expect 3 events per interval on average.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Expect {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} events per time interval</li>
              <li style={styles.li}>Standard deviation is √λ = {calculations.isValid ? calculations.standardDeviation.toFixed(2) : '___'}</li>
              <li style={styles.li}>Most intervals have {calculations.isValid ? Math.max(0, Math.round(calculations.expectedValue - calculations.standardDeviation)) : '___'}-{calculations.isValid ? Math.round(calculations.expectedValue + calculations.standardDeviation) : '___'} events</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Phone calls (λ=2.5):</strong> Expect 2.5 calls per hour</li>
              <li style={styles.li}><strong style={styles.liStrong}>Website visits (λ=10):</strong> Expect 10 visits per minute</li>
              <li style={styles.li}><strong style={styles.liStrong}>Defects (λ=0.5):</strong> Expect 0.5 defects per batch</li>
              <li style={styles.li}><strong style={styles.liStrong}>Emails (λ=15):</strong> Expect 15 emails per day</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = λ</h4>
            <p style={styles.p}>
              The Poisson distribution models rare, random events occurring at a constant average rate. 
              The parameter λ represents this rate - the expected number of occurrences. By definition, 
              if the average rate is λ, then the expected value IS λ. No calculation needed - it is built into 
              the definition of the distribution!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Visualization Chart Component
const VisualizationChart = ({ contributions, expectedValue }) => {
  const sortedContributions = [...contributions].sort((a, b) => a.value - b.value);
  const maxProb = Math.max(...sortedContributions.map(c => c.probability));
  const minValue = Math.min(...sortedContributions.map(c => c.value));
  const maxValue = Math.max(...sortedContributions.map(c => c.value));
  const valueRange = maxValue - minValue;
  
  return (
    <div style={styles.distributionChart}>
      <div style={styles.chartTitle}>Probability Distribution with E(X) = {expectedValue.toFixed(2)}</div>
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
                E(X) = λ = {expectedValue.toFixed(2)}
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
        
        <div style={styles.xAxisTitle}>Number of Events</div>
      </div>
    </div>
  );
};

// Contributions Chart Component
const ContributionsChart = ({ contributions }) => {
  const maxAbsContribution = Math.max(...contributions.map(c => Math.abs(c.contribution)));
  
  return (
    <div>
      <div style={styles.contributionsChartTitle}>How Each Outcome Contributes to E(X)</div>
      {contributions.map((contrib, index) => {
        const barWidth = maxAbsContribution > 0 ? (Math.abs(contrib.contribution) / maxAbsContribution) * 100 : 0;
        
        return (
          <div key={index} style={styles.barRow}>
            <div style={styles.barLabel}>
              {contrib.value} events
            </div>
            <div style={styles.barContainer}>
              <div 
                style={{
                  ...styles.bar,
                  ...styles.barPositive,
                  width: `${barWidth}%`
                }}
              >
                <span style={styles.barValue}>+{contrib.contribution.toFixed(4)}</span>
              </div>
            </div>
          </div>
        );
      })}
      <div style={styles.contributionsSummary}>
        Sum of all contributions ≈ E(X) = λ
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
    marginBottom: '20px',
    borderLeft: '4px solid #007bff',
  },
  introText: {
    margin: 0,
    lineHeight: 1.6,
    color: '#333',
  },
  keyInsight: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)',
    border: '2px solid #ffc107',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(255,193,7,0.2)',
  },
  keyInsightIcon: {
    fontSize: '2rem',
    lineHeight: 1,
  },
  keyInsightContent: {
    flex: 1,
    fontSize: '1.05rem',
    lineHeight: 1.6,
    color: '#856404',
  },
  mainLayout: {
    display: 'grid',
    gridTemplateColumns: '450px 1fr',
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
  contributionsSection: {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  contributionsTable: {
    width: '100%',
  },
  contributionsHeader: {
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
  contributionsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '8px 10px',
    borderBottom: '1px solid #e9ecef',
    fontSize: '0.9rem',
  },
  contributionValue: {
    fontWeight: 600,
    color: '#007bff',
  },
  contributionProbability: {
    textAlign: 'center',
    fontFamily: "'Courier New', monospace",
  },
  contributionAmount: {
    textAlign: 'right',
    fontFamily: "'Courier New', monospace",
    fontWeight: 600,
    color: '#28a745',
  },
  contributionsTotal: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: '12px 10px',
    borderTop: '3px solid #007bff',
    marginTop: '8px',
    fontSize: '1rem',
    background: '#e7f3ff',
    fontWeight: 600,
    color: '#007bff',
  },
  heroExpectedValue: {
    background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
    color: 'white',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
  },
  heroLabel: {
    fontSize: '1rem',
    opacity: 0.9,
    marginBottom: '10px',
    fontWeight: 500,
  },
  heroValue: {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: '15px',
    letterSpacing: '-1px',
  },
  heroFormula: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '20px',
    fontFamily: "'Courier New', monospace",
  },
  heroInterpretation: {
    fontSize: '1rem',
    opacity: 0.95,
    padding: '15px',
    background: 'rgba(255,255,255,0.15)',
    borderRadius: '6px',
    lineHeight: 1.6,
  },
  examplesSection: {
    background: '#e7f3ff',
    border: '2px solid #007bff',
    borderRadius: '8px',
    padding: '20px',
  },
  examplesHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  examplesIcon: {
    fontSize: '1.5rem',
  },
  examplesTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#007bff',
  },
  examplesList: {
    margin: 0,
    paddingLeft: '25px',
  },
  exampleItem: {
    marginBottom: '10px',
    lineHeight: 1.6,
    color: '#495057',
    fontSize: '0.95rem',
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
    padding: '20px',
    background: 'white',
  },
  chartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
    textAlign: 'center',
  },
  calculationTab: {
    padding: '20px',
    background: 'white',
  },
  formulaBox: {
    padding: '20px',
    background: '#e7f3ff',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '2px solid #007bff',
  },
  formulaTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#007bff',
    marginBottom: '10px',
  },
  formulaMain: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#007bff',
    marginBottom: '10px',
    fontFamily: "'Courier New', monospace",
  },
  formulaDescription: {
    fontSize: '0.95rem',
    color: '#495057',
    lineHeight: 1.6,
  },
  steps: {
    background: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  stepTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#2c3e50',
  },
  step: {
    display: 'flex',
    gap: '15px',
    padding: '12px 0',
    borderBottom: '1px solid #e9ecef',
  },
  stepNumber: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#007bff',
    minWidth: '30px',
  },
  stepContent: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#333',
  },
  insightBox: {
    padding: '15px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#856404',
    marginBottom: '15px',
  },
  uniqueProperty: {
    padding: '20px',
    background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
    border: '2px solid #28a745',
    borderRadius: '8px',
  },
  uniqueTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#155724',
    marginBottom: '10px',
  },
  contributionsChartTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2c3e50',
    marginBottom: '15px',
  },
  contributionsSummary: {
    marginTop: '15px',
    padding: '12px',
    background: '#e7f3ff',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 600,
    color: '#007bff',
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
    width: '4px',
    background: '#dc3545',
    zIndex: 10,
    boxShadow: '0 0 8px rgba(220,53,69,0.5)',
  },
  sideLabel: {
    position: 'absolute',
    top: '50%',
    right: '-150px',
    transform: 'translateY(-50%)',
    background: '#dc3545',
    color: 'white',
    padding: '8px 14px',
    borderRadius: '6px',
    fontWeight: 700,
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(220,53,69,0.3)',
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
};

export default PoissonExpectedValueCalculator;