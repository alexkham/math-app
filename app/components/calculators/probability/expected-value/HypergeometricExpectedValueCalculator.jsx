import { useState, useMemo } from 'react';

const HypergeometricExpectedValueCalculator = () => {
  const [N, setN] = useState(50);
  const [K, setK] = useState(20);
  const [n, setNSmall] = useState(10);
  const [activeTab, setActiveTab] = useState('visualization');
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [comparisonN, setComparisonN] = useState(100);
  const [comparisonK, setComparisonK] = useState(30);
  const [comparisonNSmall, setComparisonNSmall] = useState(15);

  const handleReset = () => {
    setN(50);
    setK(20);
    setNSmall(10);
    setActiveTab('visualization');
    setShowAdditionalStats(false);
    setShowComparison(false);
  };

  const updateN = (value) => {
    if (value === '') {
      setN('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        setN(num);
      }
    }
  };

  const updateK = (value) => {
    if (value === '') {
      setK('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 0) {
        setK(num);
      }
    }
  };

  const updateNSmall = (value) => {
    if (value === '') {
      setNSmall('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        setNSmall(num);
      }
    }
  };

  // Binomial coefficient: C(n, k)
  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    // Use symmetry property
    if (k > n - k) k = n - k;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - k + i) / i;
    }
    return result;
  };

  // Hypergeometric PMF: P(X = x) = C(K,x) * C(N-K, n-x) / C(N, n)
  const hypergeometricPMF = (x, N, K, n) => {
    const numerator = binomialCoefficient(K, x) * binomialCoefficient(N - K, n - x);
    const denominator = binomialCoefficient(N, n);
    return numerator / denominator;
  };

  const calculations = useMemo(() => {
    const NVal = typeof N === 'string' ? parseInt(N) : N;
    const KVal = typeof K === 'string' ? parseInt(K) : K;
    const nVal = typeof n === 'string' ? parseInt(n) : n;

    if (isNaN(NVal) || isNaN(KVal) || isNaN(nVal) || 
        NVal <= 0 || KVal < 0 || nVal <= 0 || 
        KVal > NVal || nVal > NVal) {
      return {
        isValid: false,
        N: NVal,
        K: KVal,
        n: nVal,
        outcomes: [],
        expectedValue: 0,
        variance: 0,
        standardDeviation: 0,
        contributions: []
      };
    }

    // Generate all possible outcomes
    const minX = Math.max(0, nVal - (NVal - KVal));
    const maxX = Math.min(nVal, KVal);
    
    const outcomes = [];
    for (let x = minX; x <= maxX; x++) {
      const probability = hypergeometricPMF(x, NVal, KVal, nVal);
      outcomes.push({
        value: x,
        probability: probability,
        contribution: x * probability
      });
    }

    // Calculate expected value: E(X) = n * K / N
    const expectedValue = nVal * KVal / NVal;

    // Calculate variance: Var(X) = n * (K/N) * ((N-K)/N) * ((N-n)/(N-1))
    const p = KVal / NVal;
    const variance = nVal * p * (1 - p) * ((NVal - nVal) / (NVal - 1));
    const standardDeviation = Math.sqrt(variance);

    return {
      isValid: true,
      N: NVal,
      K: KVal,
      n: nVal,
      outcomes,
      expectedValue,
      variance,
      standardDeviation,
      p: p,
      minX: minX,
      maxX: maxX,
      shouldShowOutcomes: outcomes.length <= 50,
      contributions: outcomes.map(o => ({
        value: o.value,
        probability: o.probability,
        contribution: o.contribution
      }))
    };
  }, [N, K, n]);

  const comparisonCalc = useMemo(() => {
    if (isNaN(comparisonN) || isNaN(comparisonK) || isNaN(comparisonNSmall) || 
        comparisonN <= 0 || comparisonK < 0 || comparisonNSmall <= 0 || 
        comparisonK > comparisonN || comparisonNSmall > comparisonN) {
      return { isValid: false, expectedValue: 0 };
    }
    return {
      isValid: true,
      expectedValue: comparisonNSmall * comparisonK / comparisonN
    };
  }, [comparisonN, comparisonK, comparisonNSmall]);

  const getRealExample = () => {
    if (!calculations.isValid) return null;

    const ev = calculations.expectedValue;
    const N = calculations.N;
    const K = calculations.K;
    const n = calculations.n;
    const successRate = (K / N * 100).toFixed(0);

    // Generate contextual examples based on parameters
    if (N <= 100 && n <= 20) {
      return {
        scenario: "Small population sampling",
        examples: [
          `${N} total items, ${K} are successes (${successRate}%). Draw ${n}? Expect ${ev.toFixed(2)} successes`,
          `Like drawing cards without replacement - each draw affects the next`,
          `Typical range: ${Math.max(calculations.minX, Math.round(ev - calculations.standardDeviation))} to ${Math.min(calculations.maxX, Math.round(ev + calculations.standardDeviation))} successes`
        ]
      };
    } else if (K / N < 0.2) {
      return {
        scenario: "Rare items (quality control, defects)",
        examples: [
          `Population ${N}, only ${K} defects (${successRate}%). Sample ${n}? Expect ${ev.toFixed(2)} defects`,
          `Without replacement means each selection changes the odds slightly`,
          `Most likely: ${Math.round(ev)} defects, but could be ${calculations.minX}-${Math.min(calculations.maxX, Math.round(ev + 2*calculations.standardDeviation))}`
        ]
      };
    } else if (K / N > 0.8) {
      return {
        scenario: "High proportion (common items)",
        examples: [
          `${K} out of ${N} are successes (${successRate}%). Draw ${n}? Expect ${ev.toFixed(2)} successes`,
          `Very likely to get ${Math.ceil(ev - calculations.standardDeviation)}-${Math.ceil(ev + calculations.standardDeviation)} successes`,
          `Drawing without replacement from a success-rich population`
        ]
      };
    } else {
      return {
        scenario: "Balanced population",
        examples: [
          `${successRate}% success rate in population of ${N}. Draw ${n}? Expect ${ev.toFixed(2)} successes`,
          `No replacement: odds change with each draw`,
          `Typical outcome: ${Math.max(calculations.minX, Math.round(ev - calculations.standardDeviation))} to ${Math.min(calculations.maxX, Math.round(ev + calculations.standardDeviation))} successes`
        ]
      };
    }
  };

  const realExample = getRealExample();

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>Expected Value Calculator - Hypergeometric Distribution</h2>
      
      <div style={styles.intro}>
        <p style={styles.introText}>
          Calculate the <strong>expected value</strong> (average number of successes) when drawing without replacement from a finite population. 
          Perfect for quality control, card games, lottery analysis, or any sampling scenario where items are not replaced.
        </p>
      </div>

      {/* KEY INSIGHT BOX */}
      {calculations.isValid && (
        <div style={styles.keyInsight}>
          <div style={styles.keyInsightIcon}>💡</div>
          <div style={styles.keyInsightContent}>
            <strong>Key Insight:</strong> E(X) = {calculations.expectedValue.toFixed(2)} means when you draw {calculations.n} items without replacement 
            from a population of {calculations.N} (where {calculations.K} are successes), you expect {calculations.expectedValue.toFixed(2)} successes on average.
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
                  <strong>N</strong> (Population Size)
                </label>
                <input
                  type="range"
                  min="2"
                  max="200"
                  value={typeof N === 'string' ? 50 : N}
                  onChange={(e) => setN(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={N}
                  onChange={(e) => updateN(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(N !== '' && (isNaN(parseInt(N)) || parseInt(N) <= 0) ? styles.inputInvalid : {})
                  }}
                  min="1"
                  step="1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>K</strong> (Success States in Population)
                </label>
                <input
                  type="range"
                  min="0"
                  max={typeof N === 'string' ? 50 : Math.min(N, 200)}
                  value={typeof K === 'string' ? 20 : Math.min(K, typeof N === 'string' ? 50 : N)}
                  onChange={(e) => setK(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={K}
                  onChange={(e) => updateK(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(K !== '' && (isNaN(parseInt(K)) || parseInt(K) < 0 || (N !== '' && parseInt(K) > parseInt(N))) ? styles.inputInvalid : {})
                  }}
                  min="0"
                  step="1"
                />
              </div>

              <div style={styles.parameterItem}>
                <label style={styles.parameterLabel}>
                  <strong>n</strong> (Sample Size)
                </label>
                <input
                  type="range"
                  min="1"
                  max={typeof N === 'string' ? 50 : Math.min(N, 100)}
                  value={typeof n === 'string' ? 10 : Math.min(n, typeof N === 'string' ? 50 : N)}
                  onChange={(e) => setNSmall(parseInt(e.target.value))}
                  style={styles.slider}
                />
                <input
                  type="number"
                  value={n}
                  onChange={(e) => updateNSmall(e.target.value)}
                  style={{
                    ...styles.parameterInput,
                    ...(n !== '' && (isNaN(parseInt(n)) || parseInt(n) <= 0 || (N !== '' && parseInt(n) > parseInt(N))) ? styles.inputInvalid : {})
                  }}
                  min="1"
                  step="1"
                />
              </div>
            </div>

            {calculations.isValid && (
              <div style={styles.infoBox}>
                <div style={styles.infoRow}>
                  <span>Formula:</span>
                  <span><strong>E(X) = n × K / N</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Success rate in population:</span>
                  <span><strong>{(calculations.p * 100).toFixed(1)}%</strong></span>
                </div>
                <div style={styles.infoRow}>
                  <span>Possible outcomes:</span>
                  <span><strong>{calculations.minX} to {calculations.maxX} successes</strong></span>
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
                      <label style={styles.comparisonLabel}>Alternative N:</label>
                      <input
                        type="number"
                        value={comparisonN}
                        onChange={(e) => setComparisonN(parseInt(e.target.value) || 1)}
                        style={styles.comparisonInputField}
                        min="1"
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative K:</label>
                      <input
                        type="number"
                        value={comparisonK}
                        onChange={(e) => setComparisonK(parseInt(e.target.value) || 0)}
                        style={styles.comparisonInputField}
                        min="0"
                      />
                    </div>
                    <div style={styles.comparisonInput}>
                      <label style={styles.comparisonLabel}>Alternative n:</label>
                      <input
                        type="number"
                        value={comparisonNSmall}
                        onChange={(e) => setComparisonNSmall(parseInt(e.target.value) || 1)}
                        style={styles.comparisonInputField}
                        min="1"
                      />
                    </div>
                  </div>
                  {comparisonCalc.isValid && (
                    <div style={styles.comparisonResults}>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonCurrent}>
                          <strong>Current:</strong> N={calculations.N}, K={calculations.K}, n={calculations.n}
                        </span>
                        <span style={styles.comparisonCurrentValue}>
                          E(X) = {calculations.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonRow}>
                        <span style={styles.comparisonAlt}>
                          <strong>Alternative:</strong> N={comparisonN}, K={comparisonK}, n={comparisonNSmall}
                        </span>
                        <span style={styles.comparisonAltValue}>
                          E(X) = {comparisonCalc.expectedValue.toFixed(2)}
                        </span>
                      </div>
                      <div style={styles.comparisonDiff}>
                        {comparisonCalc.expectedValue > calculations.expectedValue ? (
                          <span style={styles.comparisonHigher}>
                            ↑ {((comparisonCalc.expectedValue - calculations.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% more successes expected
                          </span>
                        ) : comparisonCalc.expectedValue < calculations.expectedValue ? (
                          <span style={styles.comparisonLower}>
                            ↓ {((calculations.expectedValue - comparisonCalc.expectedValue) / calculations.expectedValue * 100).toFixed(1)}% fewer successes expected
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
                  <span>x Successes</span>
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
                  <span><strong>E(X) =</strong></span>
                  <span></span>
                  <span><strong>{calculations.expectedValue.toFixed(4)}</strong></span>
                </div>
              </div>
            </div>
          )}

          {calculations.isValid && !calculations.shouldShowOutcomes && (
            <div style={styles.largeRangeNote}>
              <strong>Note:</strong> Distribution has {calculations.outcomes.length} possible outcomes. 
              Individual probabilities not all displayed, but E(X) calculation remains accurate.
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - EXPECTED VALUE FOCUS */}
        <div style={styles.rightColumn}>
          {calculations.isValid ? (
            <>
              {/* HERO: Giant Expected Value Display */}
              <div style={styles.heroExpectedValue}>
                <div style={styles.heroLabel}>Expected Value (Successes in Sample)</div>
                <div style={styles.heroValue}>E(X) = {calculations.expectedValue.toFixed(4)}</div>
                <div style={styles.heroFormula}>
                  Formula: n×K/N = {calculations.n}×{calculations.K}/{calculations.N} = {calculations.expectedValue.toFixed(2)}
                </div>
                <div style={styles.heroInterpretation}>
                  <strong>Interpretation:</strong> Drawing {calculations.n} items without replacement, expect {calculations.expectedValue.toFixed(2)} successes on average
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
                      <span>{Math.floor((calculations.n + 1) * (calculations.K + 1) / (calculations.N + 2))} successes</span>
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
                        <p>Distribution has {calculations.outcomes.length} possible outcomes</p>
                        <div style={styles.summaryStats}>
                          <div><strong>Population (N):</strong> {calculations.N}</div>
                          <div><strong>Successes in population (K):</strong> {calculations.K} ({(calculations.p * 100).toFixed(1)}%)</div>
                          <div><strong>Sample size (n):</strong> {calculations.n}</div>
                          <div style={styles.expectedValueHighlight}>
                            Expected Successes E(X) = {calculations.expectedValue.toFixed(4)}
                          </div>
                          <div style={styles.varianceInfo}>
                            Most outcomes fall near E(X) ± σ<br/>
                            Typical range: [{Math.max(calculations.minX, Math.round(calculations.expectedValue - calculations.standardDeviation))}, {Math.min(calculations.maxX, Math.round(calculations.expectedValue + calculations.standardDeviation))}] successes
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
                      <div style={styles.formulaMain}>E(X) = n × K / N</div>
                      <div style={styles.formulaDescription}>
                        For hypergeometric distributions, the expected number of successes in the sample 
                        equals the sample size times the proportion of successes in the population.
                      </div>
                    </div>
                    
                    <div style={styles.steps}>
                      <div style={styles.stepTitle}>Step-by-Step Calculation:</div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>1.</span>
                        <span style={styles.stepContent}>
                          <strong>Identify parameters:</strong> N = {calculations.N} (population), K = {calculations.K} (successes), n = {calculations.n} (sample)
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>2.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate proportion:</strong> K/N = {calculations.K}/{calculations.N} = {calculations.p.toFixed(4)} ({(calculations.p * 100).toFixed(1)}%)
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>3.</span>
                        <span style={styles.stepContent}>
                          <strong>Apply formula:</strong> E(X) = {calculations.n} × {calculations.p.toFixed(4)}
                        </span>
                      </div>
                      <div style={styles.step}>
                        <span style={styles.stepNumber}>4.</span>
                        <span style={styles.stepContent}>
                          <strong>Calculate:</strong> E(X) = {calculations.expectedValue.toFixed(4)} successes
                        </span>
                      </div>
                    </div>

                    <div style={styles.insightBox}>
                      <strong>Why this works:</strong> If {(calculations.p * 100).toFixed(1)}% of the population are successes, 
                      and you draw {calculations.n} items, you expect about {(calculations.p * 100).toFixed(1)}% of your sample to be successes too. 
                      That is {calculations.n} × {calculations.p.toFixed(2)} = {calculations.expectedValue.toFixed(2)} items. 
                      The key difference from binomial: no replacement means probabilities change slightly with each draw, 
                      but the expected value formula stays simple!
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
                Enter valid parameters: N &gt; 0, 0 ≤ K ≤ N, 0 &lt; n ≤ N
              </p>
            </div>
          )}
        </div>
      </div>

      <div style={styles.explanation}>
        <h3 style={styles.h3}>Understanding Expected Value for Hypergeometric Distribution</h3>
        
        <div style={styles.explainGrid}>
          <div style={styles.explainSection}>
            <h4 style={styles.h4}>What Does E(X) Mean?</h4>
            <p style={styles.p}>
              The expected value E(X) represents the average number of successes you will get when drawing n items 
              without replacement from a population of N items containing K successes. It is the proportion of successes 
              in the population multiplied by your sample size.
            </p>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Interpreting Your Result</h4>
            <p style={styles.p}>
              With E(X) = {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'}, this means:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Expect {calculations.isValid ? calculations.expectedValue.toFixed(2) : '___'} successes in your sample of {calculations.isValid ? calculations.n : '___'}</li>
              <li style={styles.li}>Population has {calculations.isValid ? (calculations.p * 100).toFixed(1) : '___'}% success rate</li>
              <li style={styles.li}>No replacement: each draw changes the remaining population slightly</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Real-World Examples</h4>
            <ul style={styles.ul}>
              <li style={styles.li}><strong style={styles.liStrong}>Card games:</strong> 52 cards, 13 hearts, draw 5? Expect 1.25 hearts</li>
              <li style={styles.li}><strong style={styles.liStrong}>Quality control:</strong> 100 items, 10 defective, sample 20? Expect 2 defects</li>
              <li style={styles.li}><strong style={styles.liStrong}>Lottery:</strong> 50 balls, 20 winning, draw 10? Expect 4 winners</li>
            </ul>
          </div>

          <div style={styles.explainSection}>
            <h4 style={styles.h4}>Why E(X) = n × K / N</h4>
            <p style={styles.p}>
              This formula reflects the simple fact that your sample should reflect the population proportion. 
              If K/N of the population are successes, then K/N of your sample should be successes too. 
              Multiply by n to get the count: n × (K/N) = nK/N. Unlike binomial, there is no replacement, 
              but the expected value is the same - it is the variance that differs!
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
        
        <div style={styles.xAxisTitle}>Number of Successes</div>
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
              {contrib.value} successes
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
        Sum of all contributions = E(X)
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
    gridTemplateColumns: '1fr 1fr 1fr',
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
    fontSize: '0.85rem',
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

export default HypergeometricExpectedValueCalculator;