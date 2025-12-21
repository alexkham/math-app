import React, { useState, useMemo } from 'react';
import GenericDistributionExplorer from './GenericDistributionExplorer';

export default function GeometricDistributionExplorerer({ 
  title = "Geometric Distribution",
  description = "Number of trials until the first success",
  examples = [
    'Number of coin flips until you get heads',
    'Number of sales calls until you make a sale',
    'Number of rolls of a die until you get a 6',
    'Number of attempts until passing a test',
    'Number of products inspected until finding a defect'
  ],
  initialP = 0.3,
  minP = 0.01,
  maxP = 0.99,
  stepP = 0.01,
  maxK = 30
}) {
  const [p, setP] = useState(initialP);

  const geometricPMF = (k, p) => {
    if (k < 1) return 0;
    return Math.pow(1 - p, k - 1) * p;
  };

  const pmfData = useMemo(() => {
    const result = [];
    for (let k = 1; k <= maxK; k++) {
      result.push({
        x: k,
        probability: geometricPMF(k, p)
      });
    }
    return result;
  }, [p, maxK]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    for (let k = 1; k <= maxK; k++) {
      cumulative += geometricPMF(k, p);
      result.push({
        x: k,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [p, maxK]);

  const statistics = useMemo(() => {
    const mean = 1 / p;
    const variance = (1 - p) / (p * p);
    const stdDev = Math.sqrt(variance);
    const mode = 1;
    
    return {
      mean,
      meanFormula: 'E[X] = 1/p',
      variance,
      varianceFormula: 'Var(X) = (1-p)/p²',
      stdDev,
      stdDevFormula: 'σ = √((1-p)/p²)',
      mode,
      modeFormula: 'Mode = 1'
    };
  }, [p]);

  const parameters = useMemo(() => [
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
      value: (1/p).toFixed(2),
      explanation: 'Average number of trials needed to get first success'
    }
  ], [p]);

  const properties = useMemo(() => [
    {
      title: 'Support: X ∈ {1, 2, 3, ...}',
      explanation: `The geometric distribution models the trial number on which the first success occurs. It starts at 1 (could succeed on first trial) and theoretically extends to infinity, though very large values become extremely unlikely with p = ${p.toFixed(2)}.`
    },
    {
      title: 'Memoryless Property',
      explanation: `The geometric distribution is the only discrete distribution with the memoryless property. This means P(X > n + k | X > n) = P(X > k). In other words, if you've already failed n times, the probability of needing k more trials is the same as if you were starting fresh. Past failures don't affect future probabilities.`
    },
    {
      title: 'Independent Trials',
      explanation: `Each trial must be independent with the same probability of success (${(p * 100).toFixed(1)}%). The outcome of one trial doesn't influence any other trial. We stop as soon as we observe the first success.`
    },
    {
      title: 'Decreasing Probabilities',
      explanation: `The probability decreases geometrically (exponentially) as k increases. Getting the first success on trial 1 has probability ${p.toFixed(3)}, on trial 2 has probability ${(p * (1-p)).toFixed(3)}, and so on. Each subsequent trial is ${(1-p).toFixed(2)} times as likely as the previous one.`
    },
    {
      title: 'Special Case of Negative Binomial',
      explanation: `The geometric distribution is a special case of the negative binomial distribution where r = 1 (we're waiting for exactly 1 success). While negative binomial counts trials until r successes, geometric specifically counts until the first success.`
    }
  ], [p]);

  const controls = (
    <>
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
    return geometricPMF(k, p);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < 1) return 0;
    return 1 - Math.pow(1 - p, k);
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= 1) return 0;
    return 1 - Math.pow(1 - p, k - 1);
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= 1) return 1;
    return Math.pow(1 - p, k - 1);
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < 1) return 1;
    return Math.pow(1 - p, k);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < 1 || a < 1) return 0;
    const effectiveA = Math.max(a, 1);
    const effectiveB = Math.max(b, 1);
    if (effectiveA > effectiveB) return 0;
    return onCalculateCumulativeProbability(effectiveB) - onCalculateCumulativeProbability(effectiveA - 1);
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= 1 || a < 1) return 0;
    const effectiveA = Math.max(a + 1, 1);
    const effectiveB = Math.max(b - 1, 1);
    if (effectiveA > effectiveB) return 0;
    return onCalculateCumulativeProbability(effectiveB) - onCalculateCumulativeProbability(effectiveA - 1);
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= 1 || a < 1) return 0;
    const effectiveA = Math.max(a, 1);
    const effectiveB = Math.max(b - 1, 1);
    if (effectiveA > effectiveB) return 0;
    return onCalculateCumulativeProbability(effectiveB) - onCalculateCumulativeProbability(effectiveA - 1);
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < 1 || a < 1) return 0;
    const effectiveA = Math.max(a + 1, 1);
    const effectiveB = Math.max(b, 1);
    if (effectiveA > effectiveB) return 0;
    return onCalculateCumulativeProbability(effectiveB) - onCalculateCumulativeProbability(effectiveA - 1);
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

  return <GenericDistributionExplorer distribution={distributionData} />;
}