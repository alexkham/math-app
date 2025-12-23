import { useState, useMemo } from 'react';

const NegativeBinomialExpectedValueCalculator = () => {
  const [r, setR] = useState(3);
  const [p, setP] = useState(0.3);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonR, setComparisonR] = useState(5);
  const [comparisonP, setComparisonP] = useState(0.5);

  const handleReset = () => {
    setR(3);
    setP(0.3);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateR = (value) => {
    if (value === '') {
      setR('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        setR(num);
      }
    }
  };

  const updateP = (value) => {
    if (value === '' || value === '.') {
      setP(value);
    } else {
      const num = parseFloat(value);
      if (!isNaN(num)) {
        setP(Math.max(0.0001, Math.min(1, num)));
      }
    }
  };

  // Binomial coefficient: C(n, k)
  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - k + i) / i;
    }
    return result;
  };

  // Negative Binomial PMF: P(X = k) = C(k+r-1, k) * p^r * (1-p)^k
  const negativeBinomialPMF = (k, r, p) => {
    return binomialCoefficient(k + r - 1, k) * Math.pow(p, r) * Math.pow(1 - p, k);
  };

  const calculations = useMemo(() => {
    const rVal = typeof r === 'string' ? parseInt(r) : r;
    const pVal = typeof p === 'string' ? parseFloat(p) : p;

    if (isNaN(rVal) || isNaN(pVal) || rVal <= 0 || pVal <= 0 || pVal > 1) {
      return {
        isValid: false,
        r: rVal,
        p: pVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate outcomes until cumulative probability > 0.999 or k > 100
    const outcomes = [];
    let cumulativeProb = 0;
    let k = 0;
    const maxK = 100;
    
    while (k <= maxK && cumulativeProb < 0.999) {
      const probability = negativeBinomialPMF(k, rVal, pVal);
      outcomes.push({
        value: k,
        probability: probability,
        contribution: k * probability
      });
      cumulativeProb += probability;
      k++;
    }

    // Calculate expected value: E(X) = r(1-p)/p
    const expectedValue = rVal * (1 - pVal) / pVal;

    // Calculate variance: Var(X) = r(1-p) / p^2
    const variance = rVal * (1 - pVal) / Math.pow(pVal, 2);
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      r: rVal,
      p: pVal,
      q: 1 - pVal,
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
  }, [r, p]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonR) || isNaN(comparisonP) || comparisonR <= 0 || comparisonP <= 0 || comparisonP > 1) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: comparisonR * (1 - comparisonP) / comparisonP
    };
  }, [comparisonR, comparisonP]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const r = calculations.r;
    const p = calculations.p;

    // Generate contextual examples based on parameters
    if (r === 1) {
      return {
        scenario: "Geometric case (r=1, waiting for 1st success)",
        examples: [
          `Waiting for ${r} success? Expect ${ev.toFixed(1)} failures before achieving it`,
          `With ${(p * 100).toFixed(0)}% success rate, expect ${(ev + r).toFixed(1)} total trials`,
          `About ${(p * 100).toFixed(0)}% chance of getting ${r} success in first ${r} trials`
        ]
      };
    } else if (p <= 0.2) {
      return {
        scenario: "Low success rate (difficult task)",
        examples: [
          `Need ${r} successes at ${(p * 100).toFixed(0)}% rate? Expect ${ev.toFixed(1)} failures`,
          `Total trials needed: ${(ev + r).toFixed(1)} on average`,
          `Typical range: ${Math.max(r, (ev + r - calculations.standardDeviation)).toFixed(0)} to ${(ev + r + calculations.standardDeviation).toFixed(0)} total trials`
        ]
      };
    } else if (p >= 0.7) {
      return {
        scenario: "High success rate (easy task)",
        examples: [
          `Need ${r} successes at ${(p * 100).toFixed(0)}% rate? Expect only ${ev.toFixed(1)} failures`,
          `Total trials: about ${(ev + r).toFixed(1)} on average`,
          `Very likely to achieve ${r} successes within ${Math.ceil(ev + r + calculations.standardDeviation)} trials`
        ]
      };
    } else {
      return {
        scenario: "Moderate success rate",
        examples: [
          `${(p * 100).toFixed(0)}% success rate, need ${r} successes? Expect ${ev.toFixed(1)} failures`,
          `Total expected trials: ${(ev + r).toFixed(1)}`,
          `Typical range: ${Math.max(r, ev - calculations.standardDeviation).toFixed(0)} to ${(ev + calculations.standardDeviation).toFixed(0)} failures`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Negative Binomial Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average number of failures before r successes) for a negative binomial distribution. 
          Perfect for quality control, sales quotas, or any scenario where you need a certain number of successes.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means on average you will experience {calculations.expectedValue.toFixed(2)} failures 
            before getting your {calculations.r} required successes. Total trials needed: about {(calculations.expectedValue + calculations.r).toFixed(2)}.
          </div>
        </div>
      )}

      <div style={styles.mainLayout}>
        {/* LEFT COLUMN - INPUT */}
        <div style={styles.leftColumn}>
          <div style={styles.inputSection}>
            <div style={styles.inputHeader}>
              <h3 style={styles.h3}>Parameters</h3>
              <button onClick={handleReset} style={styles.resetBtn}>
                Reset
              </button>
            </div>
            
            <div style={styles.parameterGrid}>
              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>r</strong> (Required Successes)
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={typeof r === 'string' ? 3 : r}
                  onChange={(e) => setR(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={r}
                  onChange={(e) => updateR(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(r !== '' && (isNaN(parseInt(r)) || parseInt(r) <= 0) ? styles.inputInvalid : {})
                  }}
                  min="1"
                  step="1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>p</strong> (Success Probability)
                </label>
                <input
                  type="range"
                  min="0.01"
                  max="1"
                  step="0.01"
                  value={typeof p === 'string' ? 0.3 : p}
                  onChange={(e) => setP(parseFloat(e.target.value))}
                  style={styles.slider}
                />
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
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = r(1-p) / p</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Success rate:</span>
                  <span><strong>{(calculations.p * 100).toFixed(1)}%</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Expected total trials:</span>
                  <span><strong>{(calculations.expectedValue + calculations.r).toFixed(2)}</strong></span>
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
                {showComparison ? '▼' : '▶'} Compare with Different Values
              </button>
              {showComparison && (
                <div style={styles.comparisonContent}>
                  <div style={styles.comparisonInputs}>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative r:</label>
                      <input
                        type="number"
                        value={comparisonR}
                        onChange={(e) => setComparisonR(parseInt(e.target.value) || 1)}
                        style={styles.comparisonInputField}
                        min="1"
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative p:</label>
                      <input
                        type="number"
                        value={comparisonP}
                        onChange={(e) => setComparisonP(parseFloat(e.target.value) || 0.01)}
                        style={styles.comparisonInputField}
                        min="0.01"
                        max="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> r={calculations.r}, p={calculations.p}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)} failures
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> r={comparisonR}, p={comparisonP}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)} failures
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% more failures expected
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% fewer failures expected
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
                  <span>k Failures</span>
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

          {calculations.isValid && !calculations.shouldShowOutcomes && (
            <div style={styles.largeRangeNote}>
              <strong>Note:</strong> Distribution extends beyond 50 outcomes. Individual probabilities not all displayed, 
              but E(X) calculation remains accurate.
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - EXPECTED VALUE FOCUS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Expected Value (Failures Before {calculations.r} Successes)</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
                <div style={styles.heroFormula}>
                  Formula: r(1-p)/p = {calculations.r}×{calculations.q.toFixed(2)}/{calculations.p} = {calculations.expectedValue.toFixed(2)}
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> On average, expect {calculations.expectedValue.toFixed(2)} failures before getting {calculations.r} successes
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
                      <span>{calculations.variance.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Standard Deviation:</span>
                      <span>{calculations.standardDeviation.toFixed(4)}</span>
                    </div>
                    <div style={styles.statRow}>
                      <span>Mode (most likely):</span>
                      <span>{calculations.r > 1 ? Math.floor((calculations.r - 1) * (1 - calculations.p) / calculations.p) : 0} failures</span>
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
                    {calculations.shouldShowOutcomes ? (
                      <VisualizationChart 
                        contributions={calculations.contributions}
                        expectedValue={calculations.expectedValue}
                      />
                    ) : (
                      <div style={styles.largeRangeChart}>
                        <p>Distribution has many possible outcomes</p>
                        <div style={styles.summaryStats}>
                          <div><strong>Required successes (r):</strong> {calculations.r}</div>
                          <div><strong>Success probability (p):</strong> {calculations.p}</div>
                          <div><strong>Possible failures:</strong> 0, 1, 2, 3, ... (infinite)</div>
                          <div style={styles.expectedValueHighlight}>
                            Expected Failures E(X) = {calculations.expectedValue.toFixed(4)}
                          </div>
                          <div style={styles.varianceInfo}>
                            Most outcomes fall near E(X) ± σ<br/>
                            Typical range: {Math.max(0, Math.round(calculations.expectedValue - calculations.standardDeviation))} to {Math.round(calculations.expectedValue + calculations.standardDeviation)} failures
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'calculation' && (
                  <div style={styles.calculationTab}>
                    <div style={styles.formulaBox}>
                      <div style={styles.formulaTitle}>Expected Value Formula</div>
                      <div style={styles.formulaMain}>E(X) = r(1 - p) / p</div>
                      <div style={styles.formulaDescription}>
                        For negative binomial distributions, the expected number of failures before r successes 
                        equals r times the failure rate divided by the success rate.
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameters:</strong> r = {calculations.r} successes needed, p = {calculations.p} success rate
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate failure rate:</strong> 1 - p = {calculations.q.toFixed(4)}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = {calculations.r} × {calculations.q.toFixed(4)} / {calculations.p}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>4.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate:</strong> E(X) = {calculations.expectedValue.toFixed(4)} failures
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> Think of it as r independent geometric distributions combined. 
                      Each success requires an average of (1-p)/p failures. Since you need r successes, multiply by r. 
                      For example, if p=0.3 (30% success), each success needs about 2.33 failures, so 3 successes need about 7 failures.
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
                Enter valid parameters: r &gt; 0 and 0 &lt; p ≤ 1
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Negative Binomial Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average number of failures you will experience before achieving 
              r successes. It is the cost in terms of failed attempts to reach your success goal.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Expect {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} failures before {calculations.isValid ? calculations.r : '___'} successes</li>
              <li style={styles.li}>Total trials needed: about {calculations.isValid ? (calculations.expectedValue + calculations.r).toFixed(2) : '___'}</li>
              <li style={styles.li}>Each trial is independent with {calculations.isValid ? (calculations.p * 100).toFixed(0) : '___'}% success rate</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Sales (r=5, p=0.2):</strong> Need 5 sales? Expect 20 rejections</li>
              <li style={styles.li}><strong style={styles.liStrong}>Quality control (r=3, p=0.05):</strong> Find 3 defects? Expect 57 good items</li>
              <li style={styles.li}><strong style={styles.liStrong}>Job interviews (r=2, p=0.3):</strong> Need 2 offers? Expect 4.7 rejections</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = r(1-p) / p</h4>
            <p style={styles.p}>
              This is a generalization of the geometric distribution. For one success (r=1), you expect (1-p)/p failures. 
              For r successes, you need r times as many failures on average. This assumes each trial is independent 
              with constant probability p.
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
        
        <div style={styles.xAxisTitle}>Number of Failures</div>
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
              {contrib.value} failures
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
        Sum of all contributions ≈ E(X)
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
    gridTemplateColumns: '1fr 1fr',
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
  largeRangeNote: {
    padding: '15px',
    background: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#856404',
    lineHeight: 1.6,
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
  largeRangeChart: {
    padding: '40px',
    textAlign: 'center',
  },
  summaryStats: {
    marginTop: '20px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '4px',
    lineHeight: 2,
  },
  expectedValueHighlight: {
    marginTop: '15px',
    padding: '15px',
    background: '#007bff',
    color: 'white',
    borderRadius: '4px',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  varianceInfo: {
    marginTop: '10px',
    fontSize: '0.95rem',
    color: '#495057',
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
    right: '-130px',
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
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '250px',
    gap: '5px',
    overflowX: 'auto',
  },
  barWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '30px',
    maxWidth: '60px',
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

export default NegativeBinomialExpectedValueCalculator;