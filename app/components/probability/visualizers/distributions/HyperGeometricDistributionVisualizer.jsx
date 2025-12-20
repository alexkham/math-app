import React, { useState, useMemo } from 'react';
import GenericDistributionVisualization from './GenericDistributionVisualizer';

export default function HypergeometricDistributionVisualizer({ 
  title = "Hypergeometric Distribution",
  description = "Sampling without replacement from a finite population",
  examples = [
    'Drawing cards from a deck without replacement (e.g., number of aces in 5 cards)',
    'Quality control: selecting items from a batch without replacement',
    'Lottery: choosing winning numbers from a finite set',
    'Sampling defective items from a production lot',
    'Drawing colored balls from an urn without replacement'
  ],
  initialN = 50,
  initialK = 20,
  initialn = 10,
  minN = 5,
  maxN = 100,
  minK = 1,
  minDraws = 1
}) {
  const [N, setN] = useState(initialN);
  const [K, setK] = useState(initialK);
  const [n, setn] = useState(initialn);

  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  const hypergeometricPMF = (k, N, K, n) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (k < minK || k > maxK) return 0;
    
    const numerator = binomialCoefficient(K, k) * binomialCoefficient(N - K, n - k);
    const denominator = binomialCoefficient(N, n);
    
    return numerator / denominator;
  };

  const pmfData = useMemo(() => {
    const result = [];
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    for (let k = minK; k <= maxK; k++) {
      result.push({
        x: k,
        probability: hypergeometricPMF(k, N, K, n)
      });
    }
    return result;
  }, [N, K, n]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    for (let k = minK; k <= maxK; k++) {
      cumulative += hypergeometricPMF(k, N, K, n);
      result.push({
        x: k,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [N, K, n]);

  const statistics = useMemo(() => {
    const pProp = K / N;
    const mean = n * pProp;
    const variance = n * pProp * (1 - pProp) * ((N - n) / (N - 1));
    const stdDev = Math.sqrt(variance);
    const mode = Math.floor(((n + 1) * (K + 1)) / (N + 2));
    
    return {
      mean,
      meanFormula: 'E[X] = n(K/N)',
      variance,
      varianceFormula: 'Var(X) = n(K/N)(1-K/N)(N-n)/(N-1)',
      stdDev,
      stdDevFormula: 'σ = √Var(X)',
      mode,
      modeFormula: 'Mode = ⌊(n+1)(K+1)/(N+2)⌋'
    };
  }, [N, K, n]);

  const parameters = useMemo(() => [
    {
      name: 'Population Size',
      symbol: 'N',
      value: N,
      explanation: 'Total number of items in the population'
    },
    {
      name: 'Success States',
      symbol: 'K',
      value: K,
      explanation: 'Number of items with the desired characteristic in the population'
    },
    {
      name: 'Number of Draws',
      symbol: 'n',
      value: n,
      explanation: 'Number of items drawn without replacement'
    },
    {
      name: 'Proportion of Successes',
      symbol: 'K/N',
      value: (K/N).toFixed(3),
      explanation: 'Proportion of success items in the population'
    }
  ], [N, K, n]);

  const properties = useMemo(() => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    return [
      {
        title: `Support: X ∈ {${minK}, ${minK+1}, ..., ${maxK}}`,
        explanation: `The number of successes in the sample can range from ${minK} to ${maxK}. The minimum is max(0, n-(N-K)) = ${minK} (occurs when we draw as many failures as possible). The maximum is min(n, K) = ${maxK} (limited by either sample size or total successes available).`
      },
      {
        title: 'Sampling Without Replacement',
        explanation: `Unlike the binomial distribution, each draw changes the composition of the remaining population. After drawing one success, there are only ${K-1} successes left in ${N-1} items. This dependency between trials is the key characteristic of the hypergeometric distribution.`
      },
      {
        title: 'Finite Population Correction',
        explanation: `The variance includes the factor (N-n)/(N-1) = ${((N-n)/(N-1)).toFixed(3)}, called the finite population correction. This accounts for the reduced variability from sampling without replacement. When N is large relative to n, this approaches 1 and the hypergeometric approaches the binomial.`
      },
      {
        title: 'Approximates Binomial Distribution',
        explanation: `When the population is large (N ≥ 10n), the hypergeometric distribution can be approximated by a binomial distribution with p = K/N = ${(K/N).toFixed(3)}. The larger N is relative to n, the better the approximation, because drawing without replacement from a very large population is nearly identical to drawing with replacement.`
      },
      {
        title: 'Symmetric Under Complement',
        explanation: `The distribution of failures (drawing from N-K items) follows the same pattern as successes. If we swap the roles of success and failure, we get P(X=k) = P(n-X = n-k). This symmetry can be useful for computational purposes when k > n/2.`
      }
    ];
  }, [N, K, n]);

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
          Population Size (N): {N}
          <input
            type="range"
            min={Math.max(minN, K, n)}
            max={maxN}
            step="1"
            value={N}
            onChange={(e) => {
              const newN = parseInt(e.target.value);
              setN(newN);
              if (K > newN) setK(newN);
              if (n > newN) setn(newN);
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
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Success States (K): {K}
          <input
            type="range"
            min={minK}
            max={N}
            step="1"
            value={K}
            onChange={(e) => setK(Math.min(parseInt(e.target.value), N))}
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
          Number of Draws (n): {n}
          <input
            type="range"
            min={minDraws}
            max={N}
            step="1"
            value={n}
            onChange={(e) => setn(Math.min(parseInt(e.target.value), N))}
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
    return hypergeometricPMF(k, N, K, n);
  };

  const onCalculateCumulativeProbability = (k) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (k < minK) return 0;
    if (k >= maxK) return 1;
    
    let sum = 0;
    for (let i = minK; i <= k; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateStrictLessProbability = (k) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (k <= minK) return 0;
    if (k > maxK) return 1;
    
    let sum = 0;
    for (let i = minK; i < k; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateGreaterEqualProbability = (k) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (k <= minK) return 1;
    if (k > maxK) return 0;
    
    let sum = 0;
    for (let i = k; i <= maxK; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateStrictGreaterProbability = (k) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (k < minK) return 1;
    if (k >= maxK) return 0;
    
    let sum = 0;
    for (let i = k + 1; i <= maxK; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateRangeProbability = (a, b) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (b < minK || a > maxK) return 0;
    
    const effectiveA = Math.max(a, minK);
    const effectiveB = Math.min(b, maxK);
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (b <= minK || a >= maxK) return 0;
    
    const effectiveA = Math.max(a + 1, minK);
    const effectiveB = Math.min(b - 1, maxK);
    
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (b <= minK || a > maxK) return 0;
    
    const effectiveA = Math.max(a, minK);
    const effectiveB = Math.min(b - 1, maxK);
    
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += hypergeometricPMF(i, N, K, n);
    }
    return sum;
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    const minK = Math.max(0, n - (N - K));
    const maxK = Math.min(n, K);
    
    if (b < minK || a >= maxK) return 0;
    
    const effectiveA = Math.max(a + 1, minK);
    const effectiveB = Math.min(b, maxK);
    
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += hypergeometricPMF(i, N, K, n);
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