import React, { useState, useMemo } from 'react';
import GenericDistributionExplorer from './GenericDistributionExplorer';

const factorial = (n) => {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const poissonPMF = (k, lambda) => {
  if (k < 0) return 0;
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
};

export default function PoissonDistributionExplorer({
  title = "Poisson Distribution",
  description = "Number of events in a fixed interval",
  examples = [
    'Number of customer arrivals per hour at a store',
    'Number of phone calls received at a call center per minute',
    'Number of defects per manufactured item',
    'Number of emails received per day',
    'Number of radioactive decays per second',
    'Number of accidents at an intersection per month'
  ],
  initialLambda = 3,
  minLambda = 0.1,
  maxLambda = 20,
  stepLambda = 0.1,
  maxK = 30
}) {
  const [lambda, setLambda] = useState(initialLambda);
  const [lambdaText, setLambdaText] = useState(String(initialLambda));
  // Typed λ may go beyond the slider range (students often get λ > 20).
  const maxTypedLambda = 100;

  const handleLambdaText = (text) => {
    setLambdaText(text);
    const v = parseFloat(text);
    if (!isNaN(v) && v >= minLambda && v <= maxTypedLambda) {
      setLambda(v);
    }
  };

  const pmfData = useMemo(() => {
    const result = [];
    const effectiveMax = Math.max(maxK, Math.ceil(lambda + 4 * Math.sqrt(lambda)));
    
    for (let k = 0; k <= effectiveMax; k++) {
      const prob = poissonPMF(k, lambda);
      if (prob < 1e-10 && k > lambda + 10) break;
      result.push({
        x: k,
        probability: prob
      });
    }
    return result;
  }, [lambda, maxK]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    
    for (let i = 0; i < pmfData.length; i++) {
      cumulative += pmfData[i].probability;
      result.push({
        x: pmfData[i].x,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [pmfData]);

  const statistics = useMemo(() => {
    const mean = lambda;
    const variance = lambda;
    const stdDev = Math.sqrt(lambda);
    const mode = Math.floor(lambda);
    
    return {
      mean,
      meanFormula: 'E[X] = λ',
      variance,
      varianceFormula: 'Var(X) = λ',
      stdDev,
      stdDevFormula: 'σ = √λ',
      mode,
      modeFormula: 'Mode = ⌊λ⌋'
    };
  }, [lambda]);

  const parameters = useMemo(() => [
    {
      name: 'Rate Parameter',
      symbol: 'λ',
      value: lambda.toFixed(2),
      explanation: 'Average number of events occurring in the fixed interval'
    },
    {
      name: 'Mean = Variance',
      symbol: 'E[X] = Var(X)',
      value: lambda.toFixed(2),
      explanation: 'Unique property: mean equals variance'
    },
    {
      name: 'Standard Deviation',
      symbol: 'σ',
      value: Math.sqrt(lambda).toFixed(2),
      explanation: 'Measure of spread, equal to √λ'
    }
  ], [lambda]);

  const properties = useMemo(() => [
    {
      title: 'Support: X ∈ {0, 1, 2, 3, ...}',
      explanation: `The Poisson distribution counts the number of events, so it can take any non-negative integer value starting from 0. While theoretically infinite, probabilities become negligible for values much larger than λ = ${lambda.toFixed(1)}. Values beyond ${Math.ceil(lambda + 4 * Math.sqrt(lambda))} have probability < 0.0001.`
    },
    {
      title: 'Mean Equals Variance',
      explanation: `A defining property of the Poisson distribution is that E[X] = Var(X) = λ = ${lambda.toFixed(2)}. This means the average number of events equals the variance. Distributions with variance > mean show overdispersion; variance < mean shows underdispersion. Poisson has neither.`
    },
    {
      title: 'Rare Events Approximation',
      explanation: `The Poisson distribution approximates the binomial distribution when n is large and p is small (np ≈ λ). Rule of thumb: use Poisson when n ≥ 20 and p ≤ 0.05. This makes it ideal for modeling rare events in large populations.`
    },
    {
      title: 'Independent Events',
      explanation: `Events occur independently - one event doesn't affect the probability of another. Events also occur at a constant average rate (λ = ${lambda.toFixed(2)} per interval). The distribution models purely random occurrences over time or space.`
    },
    {
      title: 'Additive Property',
      explanation: `If X ~ Poisson(λ₁) and Y ~ Poisson(λ₂) are independent, then X + Y ~ Poisson(λ₁ + λ₂). This means if you combine two Poisson processes, the result is also Poisson with the sum of the rates. Useful for aggregating counts across multiple sources.`
    },
    {
      title: 'Approximates Normal Distribution',
      explanation: `When λ is large (typically λ ≥ 10), the Poisson distribution can be approximated by a normal distribution with mean = variance = ${lambda.toFixed(2)}. Currently with λ = ${lambda.toFixed(1)}, the ${lambda >= 10 ? 'normal approximation is reasonable' : 'distribution is still skewed'}.`
    }
  ], [lambda]);

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
          Rate Parameter (λ): {lambda.toFixed(1)}
          <input
            type="range"
            min={minLambda}
            max={maxLambda}
            step={stepLambda}
            value={Math.min(lambda, maxLambda)}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              setLambda(v);
              setLambdaText(String(v));
            }}
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
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '10px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Or type λ:
          <input
            type="number"
            min={minLambda}
            max={maxTypedLambda}
            step="any"
            value={lambdaText}
            onChange={(e) => handleLambdaText(e.target.value)}
            style={{
              width: '90px',
              padding: '6px 8px',
              border: '2px solid #ddd',
              borderRadius: '4px',
              fontSize: '13px',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ fontWeight: '400', color: '#7f8c8d' }}>
            ({minLambda} to {maxTypedLambda})
          </span>
        </label>
      </div>
    </>
  );

  // Step-by-step working for the Probability Calculator (rendered by GenericDistributionExplorer).
  const getSteps = (type, x, y) => {
    const L = Number(lambda.toFixed(4));
    const fmt = (p) => (p > 0 && p < 0.0001 ? p.toExponential(4) : p.toFixed(6));
    const term = (i) => (
      <>P(X = {i}) = e<sup>−{L}</sup> · {L}<sup>{i}</sup> / {i}! = {fmt(poissonPMF(i, lambda))}</>
    );
    const sumRange = (from, to) => {
      let total = 0;
      for (let i = from; i <= to; i++) total += poissonPMF(i, lambda);
      return total;
    };
    const sumLines = (from, to) => {
      const lines = [];
      const n = to - from + 1;
      if (n <= 6) {
        for (let i = from; i <= to; i++) lines.push(term(i));
      } else {
        for (let i = from; i < from + 3; i++) lines.push(term(i));
        lines.push(<>… {n - 4} more terms …</>);
        lines.push(term(to));
      }
      return lines;
    };
    const sumBlock = (from, to) => {
      const a = Math.max(from, 0);
      if (a > to) return [<>No whole numbers fall in this range, so the probability is 0.</>];
      return [
        <>Add P(X = x) for x = {a} to {to}:</>,
        ...sumLines(a, to),
        <>Sum = <b>{fmt(Math.min(1, sumRange(a, to)))}</b></>
      ];
    };
    const formula = <>Formula: P(X = k) = e<sup>−λ</sup> · λ<sup>k</sup> / k!, with λ = {L}</>;

    if ([x, y].some((v) => v !== undefined && Math.abs(v) > 1000)) return null;

    switch (type) {
      case 'point':
        if (x < 0) return [formula, <>X cannot be negative, so P(X = {x}) = 0.</>];
        return [formula, term(x)];
      case 'cumulative':
        return [formula, ...sumBlock(0, x)];
      case 'strictless':
        return [formula, <>P(X &lt; {x}) = P(X ≤ {x - 1})</>, ...sumBlock(0, x - 1)];
      case 'greaterequal': {
        if (x <= 0) return [<>X is always ≥ 0, so P(X ≥ {x}) = 1.</>];
        const below = sumRange(0, x - 1);
        return [
          formula,
          <>Use the complement: P(X ≥ {x}) = 1 − P(X ≤ {x - 1})</>,
          ...sumLines(0, x - 1),
          <>P(X ≤ {x - 1}) = {fmt(below)}</>,
          <>1 − {fmt(below)} = <b>{fmt(Math.max(0, 1 - below))}</b></>
        ];
      }
      case 'strictgreater': {
        if (x < 0) return [<>X is always ≥ 0, so P(X &gt; {x}) = 1.</>];
        const below = sumRange(0, x);
        return [
          formula,
          <>Use the complement: P(X &gt; {x}) = 1 − P(X ≤ {x})</>,
          ...sumLines(0, x),
          <>P(X ≤ {x}) = {fmt(below)}</>,
          <>1 − {fmt(below)} = <b>{fmt(Math.max(0, 1 - below))}</b></>
        ];
      }
      case 'range':
        return [formula, ...sumBlock(x, y)];
      case 'strictrange':
        return [formula, <>P({x} &lt; X &lt; {y}) = P({x + 1} ≤ X ≤ {y - 1})</>, ...sumBlock(x + 1, y - 1)];
      case 'leftinc':
        return [formula, <>P({x} ≤ X &lt; {y}) = P({x} ≤ X ≤ {y - 1})</>, ...sumBlock(x, y - 1)];
      case 'rightinc':
        return [formula, <>P({x} &lt; X ≤ {y}) = P({x + 1} ≤ X ≤ {y})</>, ...sumBlock(x + 1, y)];
      default:
        return null;
    }
  };

  const onCalculatePointProbability = (k) => {
    return poissonPMF(k, lambda);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < 0) return 0;
    let sum = 0;
    for (let i = 0; i <= k; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= 0) return 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= 0) return 1;
    return 1 - onCalculateStrictLessProbability(k);
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < 0) return 1;
    return 1 - onCalculateCumulativeProbability(k);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < 0 || a < 0) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.max(b, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= 0 || a < 0) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.max(b - 1, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= 0 || a < 0) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.max(b - 1, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < 0 || a < 0) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.max(b, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
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
    onCalculateRightIncRangeProbability,
    getSteps
  };

  return <GenericDistributionExplorer distribution={distributionData} />;
}