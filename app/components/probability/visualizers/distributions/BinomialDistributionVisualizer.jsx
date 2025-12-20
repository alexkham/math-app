import React, { useState, useMemo } from 'react';
import GenericDistributionVisualization from './GenericDistributionVisualizer';

export default function BinomialDistributionVisualizer({ 
  title = "Binomial Distribution",
  description = "Number of successes in n independent trials",
  examples = [
    'Number of heads in 10 coin flips',
    'Number of defective items in a batch of products',
    'Number of students passing an exam (with fixed pass rate)',
    'Number of successful free throws in basketball',
    'Survey responses with yes/no questions'
  ],
  initialN = 10,
  initialP = 0.5,
  minN = 1,
  maxN = 50,
  minP = 0.01,
  maxP = 0.99,
  stepP = 0.01
}) {
  const [n, setN] = useState(initialN);
  const [p, setP] = useState(initialP);

  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  const binomialPMF = (k, n, p) => {
    if (k < 0 || k > n) return 0;
    return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  };

  const pmfData = useMemo(() => {
    const result = [];
    for (let k = 0; k <= n; k++) {
      result.push({
        x: k,
        probability: binomialPMF(k, n, p)
      });
    }
    return result;
  }, [n, p]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    for (let k = 0; k <= n; k++) {
      cumulative += binomialPMF(k, n, p);
      result.push({
        x: k,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [n, p]);

  const statistics = useMemo(() => {
    const mean = n * p;
    const variance = n * p * (1 - p);
    const stdDev = Math.sqrt(variance);
    const mode = Math.floor((n + 1) * p);
    
    return {
      mean,
      meanFormula: 'E[X] = np',
      variance,
      varianceFormula: 'Var(X) = np(1-p)',
      stdDev,
      stdDevFormula: 'σ = √(np(1-p))',
      mode,
      modeFormula: 'Mode = ⌊(n+1)p⌋'
    };
  }, [n, p]);

  const parameters = useMemo(() => [
    {
      name: 'Number of Trials',
      symbol: 'n',
      value: n,
      explanation: 'The total number of independent trials or experiments'
    },
    {
      name: 'Success Probability',
      symbol: 'p',
      value: p.toFixed(2),
      explanation: 'The probability of success on each individual trial'
    },
    {
      name: 'Failure Probability',
      symbol: 'q = 1-p',
      value: (1 - p).toFixed(2),
      explanation: 'The probability of failure on each trial (complement of p)'
    }
  ], [n, p]);

  const properties = useMemo(() => [
    {
      title: `Support: X ∈ {0, 1, 2, ..., ${n}}`,
      explanation: `The binomial distribution counts the number of successes, so it can take any integer value from 0 (no successes) to ${n} (all trials successful). Each value represents a possible outcome.`
    },
    {
      title: 'Independent Trials',
      explanation: `Each of the ${n} trials must be independent - the outcome of one trial doesn't affect the others. Additionally, each trial must have the same probability of success (${(p * 100).toFixed(1)}%).`
    },
    {
      title: 'Binary Outcomes',
      explanation: `Each trial has exactly two possible outcomes: success (with probability ${p.toFixed(2)}) or failure (with probability ${(1-p).toFixed(2)}). The distribution counts the total number of successes across all trials.`
    },
    {
      title: 'Fixed Number of Trials',
      explanation: `The number of trials (n = ${n}) is predetermined and fixed. This is different from distributions like the geometric distribution where the number of trials is variable.`
    },
    {
      title: 'Approximates Normal Distribution',
      explanation: `When n is large and p is not too close to 0 or 1, the binomial distribution can be approximated by a normal distribution with mean ${(n * p).toFixed(2)} and standard deviation ${Math.sqrt(n * p * (1-p)).toFixed(2)}. Rule of thumb: np ≥ 5 and n(1-p) ≥ 5.`
    }
  ], [n, p]);

  const controls = (
    <>
      <div style={{ marginBottom: '15px' }}>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Number of Trials (n): {n}
          <input
            type="range"
            min={minN}
            max={maxN}
            step="1"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#ddd',
              outline: 'none',
              marginTop: '6px'
            }}
          />
        </label>
      </div>
      <div>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Success Probability (p): {p.toFixed(2)}
          <input
            type="range"
            min={minP}
            max={maxP}
            step={stepP}
            value={p}
            onChange={(e) => setP(parseFloat(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#ddd',
              outline: 'none',
              marginTop: '6px'
            }}
          />
        </label>
      </div>
    </>
  );

  const onCalculatePointProbability = (k) => {
    return binomialPMF(k, n, p);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < 0) return 0;
    if (k >= n) return 1;
    let sum = 0;
    for (let i = 0; i <= k; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= 0) return 0;
    if (k > n) return 1;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= 0) return 1;
    if (k > n) return 0;
    let sum = 0;
    for (let i = k; i <= n; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < 0) return 1;
    if (k >= n) return 0;
    let sum = 0;
    for (let i = k + 1; i <= n; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < 0 || a > n) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.min(b, n);
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= 0 || a >= n) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.min(b - 1, n);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= 0 || a > n) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.min(b - 1, n);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < 0 || a >= n) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.min(b, n);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += binomialPMF(i, n, p);
    }
    return sum;
  };

  const distributionData = {
    title,
    description,
    pmfData,
    cdfData,
    controls,
    parameters,
    statistics,
    properties,
    examples,
    onCalculatePointProbability,
    onCalculateCumulativeProbability,
    onCalculateStrictLessProbability,
    onCalculateGreaterEqualProbability,
    onCalculateStrictGreaterProbability,
    onCalculateRangeProbability,
    onCalculateStrictRangeProbability,
    onCalculateLeftIncRangeProbability,
    onCalculateRightIncRangeProbability
  };

  return <GenericDistributionVisualization distribution={distributionData} />;
}