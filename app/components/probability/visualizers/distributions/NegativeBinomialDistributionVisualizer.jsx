import React, { useState, useMemo } from 'react';
import GenericDistributionVisualization from './GenericDistributionVisualizer';

export default function NegativeBinomialDistributionVisalizer({ 
  title = "Negative Binomial Distribution",
  description = "Number of trials until r successes",
  examples = [
    'Number of coin flips until getting 5 heads',
    'Number of sales calls until closing 3 deals',
    'Number of product inspections until finding 10 defects',
    'Number of free throw attempts until making 20 baskets',
    'Number of patients treated until 8 successful recoveries'
  ],
  initialR = 5,
  initialP = 0.3,
  minR = 1,
  maxR = 20,
  minP = 0.01,
  maxP = 0.99,
  stepP = 0.01,
  maxK = 50
}) {
  const [r, setR] = useState(initialR);
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

  const negativeBinomialPMF = (k, r, p) => {
    if (k < r) return 0;
    return binomialCoefficient(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r);
  };

  const pmfData = useMemo(() => {
    const result = [];
    for (let k = r; k <= maxK; k++) {
      result.push({
        x: k,
        probability: negativeBinomialPMF(k, r, p)
      });
    }
    return result;
  }, [r, p, maxK]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    for (let k = r; k <= maxK; k++) {
      cumulative += negativeBinomialPMF(k, r, p);
      result.push({
        x: k,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [r, p, maxK]);

  const statistics = useMemo(() => {
    const mean = r / p;
    const variance = (r * (1 - p)) / (p * p);
    const stdDev = Math.sqrt(variance);
    const mode = r > 1 ? Math.floor((r - 1) * (1 - p) / p) + r : r;
    
    return {
      mean,
      meanFormula: 'E[X] = r/p',
      variance,
      varianceFormula: 'Var(X) = r(1-p)/p²',
      stdDev,
      stdDevFormula: 'σ = √(r(1-p)/p²)',
      mode,
      modeFormula: 'Mode = ⌊(r-1)(1-p)/p⌋ + r'
    };
  }, [r, p]);

  const parameters = useMemo(() => [
    {
      name: 'Target Successes',
      symbol: 'r',
      value: r,
      explanation: 'The number of successes we are waiting to achieve'
    },
    {
      name: 'Success Probability',
      symbol: 'p',
      value: p.toFixed(2),
      explanation: 'The probability of success on each trial'
    },
    {
      name: 'Failure Probability',
      symbol: 'q = 1-p',
      value: (1 - p).toFixed(2),
      explanation: 'The probability of failure on each trial'
    },
    {
      name: 'Expected Trials',
      symbol: 'E[X]',
      value: (r/p).toFixed(2),
      explanation: `Average number of trials needed to get ${r} successes`
    }
  ], [r, p]);

  const properties = useMemo(() => [
    {
      title: `Support: X ∈ {${r}, ${r+1}, ${r+2}, ...}`,
      explanation: `The negative binomial distribution counts the trial number on which the ${r}th success occurs. The minimum value is ${r} (all trials are successes) and it extends to infinity. Values much larger than the mean (${(r/p).toFixed(1)}) become increasingly unlikely.`
    },
    {
      title: 'Fixed Number of Successes',
      explanation: `Unlike the binomial distribution which has a fixed number of trials, the negative binomial has a fixed number of successes (r = ${r}). We keep running trials until we observe exactly ${r} successes, so the number of trials is the random variable.`
    },
    {
      title: 'Generalizes Geometric Distribution',
      explanation: `The geometric distribution is a special case of the negative binomial where r = 1 (waiting for the first success). When r = ${r}, we're waiting for the ${r}th success. As r increases, the distribution becomes more bell-shaped.`
    },
    {
      title: 'Independent Trials',
      explanation: `Each trial must be independent with the same probability of success (${(p * 100).toFixed(1)}%). The outcome of previous trials doesn't affect future trials. We stop counting as soon as we observe the ${r}th success.`
    },
    {
      title: 'Overdispersion vs Poisson',
      explanation: `The negative binomial distribution has variance (${(r * (1-p) / (p*p)).toFixed(2)}) greater than its mean (${(r/p).toFixed(2)}), showing overdispersion. This makes it useful for modeling count data with more variability than a Poisson distribution would predict.`
    }
  ], [r, p]);

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
          Number of Successes (r): {r}
          <input
            type="range"
            min={minR}
            max={maxR}
            step="1"
            value={r}
            onChange={(e) => setR(parseInt(e.target.value))}
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
    return negativeBinomialPMF(k, r, p);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < r) return 0;
    let sum = 0;
    for (let i = r; i <= k; i++) {
      sum += negativeBinomialPMF(i, r, p);
    }
    return sum;
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= r) return 0;
    let sum = 0;
    for (let i = r; i < k; i++) {
      sum += negativeBinomialPMF(i, r, p);
    }
    return sum;
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= r) return 1;
    return 1 - onCalculateStrictLessProbability(k);
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < r) return 1;
    return 1 - onCalculateCumulativeProbability(k);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < r || a < r) return 0;
    const effectiveA = Math.max(a, r);
    const effectiveB = Math.max(b, r);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += negativeBinomialPMF(i, r, p);
    }
    return sum;
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= r || a < r) return 0;
    const effectiveA = Math.max(a + 1, r);
    const effectiveB = Math.max(b - 1, r);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += negativeBinomialPMF(i, r, p);
    }
    return sum;
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= r || a < r) return 0;
    const effectiveA = Math.max(a, r);
    const effectiveB = Math.max(b - 1, r);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += negativeBinomialPMF(i, r, p);
    }
    return sum;
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < r || a < r) return 0;
    const effectiveA = Math.max(a + 1, r);
    const effectiveB = Math.max(b, r);
    if (effectiveA > effectiveB) return 0;
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += negativeBinomialPMF(i, r, p);
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