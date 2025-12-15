'use client';

import React, { useState, useMemo } from 'react';

export default function TwoEventsProbabilityCalculator() {
  const instanceId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  const [mode, setMode] = useState('independent');
  const [pA, setPA] = useState('0.5');
  const [pB, setPB] = useState('0.4');
  const [pBGivenA, setPBGivenA] = useState('0.4');
  const [pAGivenB, setPAGivenB] = useState('0.6');
  const [pIntersection, setPIntersection] = useState('0.2');
  const [pUnion, setPUnion] = useState('0.7');
  
  const [results, setResults] = useState({});
  const [properties, setProperties] = useState({
    independent: false,
    mutuallyExclusive: false
  });

  const [undefinedResults, setUndefinedResults] = useState([]);
  const [calculations, setCalculations] = useState({});
  const [errors, setErrors] = useState([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const validateProbability = (value) => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 1) {
      return null;
    }
    return num;
  };

  const handleReset = () => {
    setPA('0.5');
    setPB('0.4');
    setPBGivenA('0.4');
    setPAGivenB('0.6');
    setPIntersection('0.2');
    setPUnion('0.7');
    setResults({});
    setProperties({ independent: false, mutuallyExclusive: false });
    setUndefinedResults([]);
    setCalculations({});
    setErrors([]);
    setHasCalculated(false);
  };

  const handleCalculate = () => {
    setHasCalculated(true);
    calculateResults();
  };

  const validateAxioms = (probA, probB, pAandB, pAorB) => {
    const axiomErrors = [];

    if (pAandB < 0) {
      axiomErrors.push('Axiom violation: P(A ∩ B) cannot be negative');
    }

    if (pAandB > Math.min(probA, probB) + 0.0001) {
      axiomErrors.push('Axiom violation: P(A ∩ B) cannot exceed min(P(A), P(B))');
    }

    if (pAorB < Math.max(probA, probB) - 0.0001) {
      axiomErrors.push('Axiom violation: P(A ∪ B) cannot be less than max(P(A), P(B))');
    }

    if (pAorB > 1.0001) {
      axiomErrors.push('Axiom violation: P(A ∪ B) cannot exceed 1');
    }

    const expectedUnion = probA + probB - pAandB;
    if (Math.abs(pAorB - expectedUnion) > 0.0001) {
      axiomErrors.push('Axiom violation: Addition rule P(A ∪ B) = P(A) + P(B) - P(A ∩ B) not satisfied');
    }

    const pAnotB = probA - pAandB;
    if (pAnotB < -0.0001) {
      axiomErrors.push('Axiom violation: P(A ∩ B\') would be negative');
    }

    const pBnotA = probB - pAandB;
    if (pBnotA < -0.0001) {
      axiomErrors.push('Axiom violation: P(B ∩ A\') would be negative');
    }

    return axiomErrors;
  };

  const computeAllProbabilities = (probA, probB, pAandB, pAorB) => {
    const newResults = {};
    const newCalculations = {};
    const undefinedList = [];

    newResults.pAandB = pAandB;
    newResults.pAorB = pAorB;

    newResults.pNotA = 1 - probA;
    newCalculations.pNotA = [
      `P(A') = 1 - P(A)`,
      `P(A') = 1 - ${probA}`,
      `P(A') = ${newResults.pNotA.toFixed(4)}`
    ];

    newResults.pNotB = 1 - probB;
    newCalculations.pNotB = [
      `P(B') = 1 - P(B)`,
      `P(B') = 1 - ${probB}`,
      `P(B') = ${newResults.pNotB.toFixed(4)}`
    ];

    if (probB > 0) {
      newResults.pAgivenB = pAandB / probB;
      newCalculations.pAgivenB = [
        `P(A|B) = P(A ∩ B) / P(B)`,
        `P(A|B) = ${pAandB.toFixed(4)} / ${probB}`,
        `P(A|B) = ${newResults.pAgivenB.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(A|B) is undefined because P(B) = 0');
    }

    if (probA > 0) {
      newResults.pBgivenA = pAandB / probA;
      newCalculations.pBgivenA = [
        `P(B|A) = P(A ∩ B) / P(A)`,
        `P(B|A) = ${pAandB.toFixed(4)} / ${probA}`,
        `P(B|A) = ${newResults.pBgivenA.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(B|A) is undefined because P(A) = 0');
    }

    newResults.pNotAandNotB = 1 - pAorB;
    newCalculations.pNotAandNotB = [
      `P(A' ∩ B') = 1 - P(A ∪ B)`,
      `P(A' ∩ B') = 1 - ${pAorB.toFixed(4)}`,
      `P(A' ∩ B') = ${newResults.pNotAandNotB.toFixed(4)}`
    ];

    newResults.pNotAorNotB = 1 - pAandB;
    newCalculations.pNotAorNotB = [
      `P(A' ∪ B') = 1 - P(A ∩ B)`,
      `P(A' ∪ B') = 1 - ${pAandB.toFixed(4)}`,
      `P(A' ∪ B') = ${newResults.pNotAorNotB.toFixed(4)}`
    ];

    newResults.pAnotB = probA - pAandB;
    newCalculations.pAnotB = [
      `P(A ∩ B') = P(A) - P(A ∩ B)`,
      `P(A ∩ B') = ${probA} - ${pAandB.toFixed(4)}`,
      `P(A ∩ B') = ${newResults.pAnotB.toFixed(4)}`
    ];

    newResults.pBnotA = probB - pAandB;
    newCalculations.pBnotA = [
      `P(B ∩ A') = P(B) - P(A ∩ B)`,
      `P(B ∩ A') = ${probB} - ${pAandB.toFixed(4)}`,
      `P(B ∩ A') = ${newResults.pBnotA.toFixed(4)}`
    ];

    return { newResults, newCalculations, undefinedList };
  };

  const calculateResults = () => {
    const newErrors = [];

    const probA = validateProbability(pA);
    const probB = validateProbability(pB);

    if (probA === null) {
      newErrors.push('P(A) must be between 0 and 1');
    }
    if (probB === null) {
      newErrors.push('P(B) must be between 0 and 1');
    }

    if (probA === null || probB === null) {
      setErrors(newErrors);
      setResults({});
      setProperties({ independent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    let pAandB;
    let pAorB;
    const modeCalculations = {};

    if (mode === 'independent') {
      pAandB = probA * probB;
      modeCalculations.pAandB = [
        `P(A ∩ B) = P(A) × P(B) (independent events)`,
        `P(A ∩ B) = ${probA} × ${probB}`,
        `P(A ∩ B) = ${pAandB.toFixed(4)}`
      ];

      pAorB = probA + probB - pAandB;
      modeCalculations.pAorB = [
        `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`,
        `P(A ∪ B) = ${probA} + ${probB} - ${pAandB.toFixed(4)}`,
        `P(A ∪ B) = ${pAorB.toFixed(4)}`
      ];

    } else if (mode === 'conditional') {
      const probBGivenAVal = validateProbability(pBGivenA);
      const probAGivenBVal = validateProbability(pAGivenB);

      if (probBGivenAVal !== null && probAGivenBVal !== null) {
        newErrors.push('Please provide only ONE conditional probability: either P(B|A) or P(A|B), not both');
      }

      if (probBGivenAVal !== null && probAGivenBVal === null) {
        pAandB = probBGivenAVal * probA;
        modeCalculations.pAandB = [
          `P(A ∩ B) = P(B|A) × P(A)`,
          `P(A ∩ B) = ${probBGivenAVal} × ${probA}`,
          `P(A ∩ B) = ${pAandB.toFixed(4)}`
        ];

        pAorB = probA + probB - pAandB;
        modeCalculations.pAorB = [
          `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`,
          `P(A ∪ B) = ${probA} + ${probB} - ${pAandB.toFixed(4)}`,
          `P(A ∪ B) = ${pAorB.toFixed(4)}`
        ];

      } else if (probAGivenBVal !== null && probBGivenAVal === null) {
        pAandB = probAGivenBVal * probB;
        modeCalculations.pAandB = [
          `P(A ∩ B) = P(A|B) × P(B)`,
          `P(A ∩ B) = ${probAGivenBVal} × ${probB}`,
          `P(A ∩ B) = ${pAandB.toFixed(4)}`
        ];

        pAorB = probA + probB - pAandB;
        modeCalculations.pAorB = [
          `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`,
          `P(A ∪ B) = ${probA} + ${probB} - ${pAandB.toFixed(4)}`,
          `P(A ∪ B) = ${pAorB.toFixed(4)}`
        ];

      } else {
        newErrors.push('Please provide either P(B|A) or P(A|B) for conditional probability mode');
        setErrors(newErrors);
        setResults({});
        setProperties({ independent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

    } else if (mode === 'intersection') {
      const probAandBVal = validateProbability(pIntersection);
      
      if (probAandBVal === null) {
        newErrors.push('P(A ∩ B) must be between 0 and 1');
        setErrors(newErrors);
        setResults({});
        setProperties({ independent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pAandB = probAandBVal;
      pAorB = probA + probB - pAandB;
      
      modeCalculations.pAorB = [
        `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`,
        `P(A ∪ B) = ${probA} + ${probB} - ${pAandB}`,
        `P(A ∪ B) = ${pAorB.toFixed(4)}`
      ];

    } else if (mode === 'union') {
      const probAorBVal = validateProbability(pUnion);
      
      if (probAorBVal === null) {
        newErrors.push('P(A ∪ B) must be between 0 and 1');
        setErrors(newErrors);
        setResults({});
        setProperties({ independent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pAorB = probAorBVal;
      pAandB = probA + probB - pAorB;
      
      modeCalculations.pAandB = [
        `P(A ∩ B) = P(A) + P(B) - P(A ∪ B)`,
        `P(A ∩ B) = ${probA} + ${probB} - ${pAorB}`,
        `P(A ∩ B) = ${pAandB.toFixed(4)}`
      ];

    } else if (mode === 'mutuallyExclusive') {
      pAandB = 0;
      modeCalculations.pAandB = [
        `P(A ∩ B) = 0 (mutually exclusive events)`
      ];

      pAorB = probA + probB;
      modeCalculations.pAorB = [
        `P(A ∪ B) = P(A) + P(B) (mutually exclusive)`,
        `P(A ∪ B) = ${probA} + ${probB}`,
        `P(A ∪ B) = ${pAorB.toFixed(4)}`
      ];

    } else {
      newErrors.push('Invalid mode selected');
      setErrors(newErrors);
      setResults({});
      setProperties({ independent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    const axiomErrors = validateAxioms(probA, probB, pAandB, pAorB);
    newErrors.push(...axiomErrors);

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setResults({});
      setProperties({ independent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    const { newResults, newCalculations, undefinedList } = computeAllProbabilities(probA, probB, pAandB, pAorB);

    const allCalculations = { ...modeCalculations, ...newCalculations };

    const newProperties = {
      independent: mode === 'independent',
      mutuallyExclusive: mode === 'mutuallyExclusive'
    };

    setErrors([]);
    setResults(newResults);
    setProperties(newProperties);
    setUndefinedResults(undefinedList);
    setCalculations(allCalculations);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      <div style={{ 
        background: 'linear-gradient(to right, #f1f5f9, #e2e8f0)', 
        padding: '8px 16px', 
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #cbd5e1'
      }}>
        <p style={{ 
          margin: 0, 
          color: '#475569', 
          fontSize: '13px', 
          fontWeight: '500',
          lineHeight: '1.4'
        }}>
          Calculate probabilities for two events A and B with visual Venn diagrams and step-by-step solutions.
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: '#333', fontSize: '15px' }}>
          Calculation Mode
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
          {[
            { value: 'independent', label: 'Independent Events' },
            { value: 'conditional', label: 'Conditional Probability' },
            { value: 'intersection', label: 'Given P(A ∩ B)' },
            { value: 'union', label: 'Given P(A ∪ B)' },
            { value: 'mutuallyExclusive', label: 'Mutually Exclusive' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setMode(option.value)}
              style={{
                padding: '10px 14px',
                border: mode === option.value ? '2px solid #007bff' : '2px solid #e5e7eb',
                borderRadius: '8px',
                background: mode === option.value ? '#e6f2ff' : 'white',
                color: mode === option.value ? '#007bff' : '#4b5563',
                fontWeight: mode === option.value ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '13px'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: '24px', alignItems: 'start' }}>
        
        <div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '20px',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>
              Input Probabilities
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                  P(A) - Probability of Event A
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={pA}
                  onChange={(e) => setPA(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 11px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '15px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                  P(B) - Probability of Event B
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={pB}
                  onChange={(e) => setPB(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 11px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '15px'
                  }}
                />
              </div>

              {mode === 'conditional' && (
                <>
                  <div>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                      P(B|A) - Probability of B given A
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={pBGivenA}
                      onChange={(e) => setPBGivenA(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 11px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '15px'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                      P(A|B) - Probability of A given B (alternative)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={pAGivenB}
                      onChange={(e) => setPAGivenB(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 11px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '15px'
                      }}
                    />
                  </div>
                </>
              )}

              {mode === 'intersection' && (
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(A ∩ B) - Probability of both A and B
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pIntersection}
                    onChange={(e) => setPIntersection(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                </div>
              )}

              {mode === 'union' && (
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(A ∪ B) - Probability of A or B
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pUnion}
                    onChange={(e) => setPUnion(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '18px' }}>
              <button
                onClick={handleCalculate}
                style={{
                  padding: '11px',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.background = '#007bff'}
              >
                Calculate
              </button>
              
              <button
                onClick={handleReset}
                style={{
                  padding: '11px',
                  background: 'white',
                  color: '#6b7280',
                  border: '1px solid #d1d5db',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.borderColor = '#9ca3af';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
              >
                Reset
              </button>
            </div>
          </div>

          {hasCalculated && errors.length === 0 && Object.keys(results).length > 0 && (
            <div style={{ 
              background: '#f9fafb', 
              border: '1px solid #e5e7eb', 
              borderRadius: '12px', 
              padding: '18px'
            }}>
              <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
                Event Properties
              </h2>
              
              <div style={{ display: 'grid', gap: '10px' }}>
                <PropertyRow 
                  label="Independent" 
                  value={properties.independent} 
                  description="P(A ∩ B) = P(A) × P(B)"
                />
                <PropertyRow 
                  label="Mutually Exclusive" 
                  value={properties.mutuallyExclusive} 
                  description="P(A ∩ B) = 0"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          {hasCalculated && errors.length > 0 && (
            <div style={{ 
              background: '#fef2f2', 
              border: '1px solid #fecaca', 
              borderRadius: '8px', 
              padding: '14px',
              marginBottom: '16px'
            }}>
              {errors.map((error, idx) => (
                <div key={idx} style={{ color: '#991b1b', fontSize: '13px', marginBottom: idx < errors.length - 1 ? '6px' : '0' }}>
                  ⚠ {error}
                </div>
              ))}
            </div>
          )}

          {hasCalculated && errors.length === 0 && undefinedResults.length > 0 && (
            <div style={{ 
              background: '#fffbeb', 
              border: '1px solid #fde68a', 
              borderRadius: '8px', 
              padding: '14px',
              marginBottom: '16px'
            }}>
              <div style={{ fontWeight: '600', color: '#92400e', fontSize: '13px', marginBottom: '6px' }}>
                Undefined Probabilities:
              </div>
              {undefinedResults.map((msg, idx) => (
                <div key={idx} style={{ color: '#92400e', fontSize: '13px', marginBottom: idx < undefinedResults.length - 1 ? '4px' : '0' }}>
                  • {msg}
                </div>
              ))}
            </div>
          )}

          {hasCalculated && errors.length === 0 && Object.keys(results).length > 0 && (
            <div>
              <h2 style={{ fontSize: '19px', fontWeight: '600', marginBottom: '14px', color: '#1a1a1a' }}>
                Results
                <span style={{ fontSize: '12px', fontWeight: '400', color: '#6b7280', marginLeft: '8px' }}>
                  (unconditional probability space)
                </span>
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ display: 'grid', gap: '9px' }}>
                  {results.pAandB !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(A ∩ B)"
                      description="Both A and B occur"
                      value={results.pAandB}
                      calculation={calculations.pAandB}
                      diagram={<VennIntersection pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB} instanceId={instanceId} />}
                    />
                  )}
                  
                  {results.pAorB !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(A ∪ B)"
                      description="Either A or B (or both) occurs"
                      value={results.pAorB}
                      calculation={calculations.pAorB}
                      diagram={<VennUnion pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}

                  {results.pAnotB !== undefined && results.pAnotB >= 0 && (
                    <ResultRowWithDiagram 
                      label="P(A ∩ B')"
                      description="A occurs but NOT B"
                      value={results.pAnotB}
                      calculation={calculations.pAnotB}
                      diagram={<VennAnotB pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}

                  {results.pBnotA !== undefined && results.pBnotA >= 0 && (
                    <ResultRowWithDiagram 
                      label="P(B ∩ A')"
                      description="B occurs but NOT A"
                      value={results.pBnotA}
                      calculation={calculations.pBnotA}
                      diagram={<VennBnotA pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}

                  {results.pNotAandNotB !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(A' ∩ B')"
                      description="Neither A nor B occurs"
                      value={results.pNotAandNotB}
                      calculation={calculations.pNotAandNotB}
                      diagram={<VennNeither pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}
                </div>

                <div style={{ display: 'grid', gap: '9px' }}>
                  {results.pAgivenB !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(A|B)"
                      description="A occurs given B occurred"
                      value={results.pAgivenB}
                      calculation={calculations.pAgivenB}
                      diagram={<VennConditionalAgivenB pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}

                  {results.pBgivenA !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(B|A)"
                      description="B occurs given A occurred"
                      value={results.pBgivenA}
                      calculation={calculations.pBgivenA}
                      diagram={<VennConditionalBgivenA pA={parseFloat(pA)} pB={parseFloat(pB)} pAandB={results.pAandB || 0} instanceId={instanceId} />}
                    />
                  )}

                  {results.pNotA !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(A')"
                      description="A does not occur"
                      value={results.pNotA}
                      calculation={calculations.pNotA}
                      diagram={<VennNotA pA={parseFloat(pA)} pB={parseFloat(pB)} instanceId={instanceId} />}
                    />
                  )}

                  {results.pNotB !== undefined && (
                    <ResultRowWithDiagram 
                      label="P(B')"
                      description="B does not occur"
                      value={results.pNotB}
                      calculation={calculations.pNotB}
                      diagram={<VennNotB pA={parseFloat(pA)} pB={parseFloat(pB)} instanceId={instanceId} />}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {!hasCalculated && (
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Ready to Calculate
              </div>
              <div style={{ fontSize: '14px' }}>
                Enter your probabilities and click Calculate to see results
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultRowWithDiagram({ label, description, value, calculation, diagram }) {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <div style={{ 
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '90px 1fr auto auto',
        alignItems: 'center',
        gap: '14px',
        padding: '13px',
        cursor: calculation && calculation.length > 0 ? 'pointer' : 'default'
      }}
      onClick={() => calculation && calculation.length > 0 && setShowSteps(!showSteps)}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {diagram}
        </div>
        
        <div>
          <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '14px', marginBottom: '2px' }}>
            {label}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            {description}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontWeight: '600', fontSize: '17px', color: '#245de1', fontFamily: 'monospace' }}>
            {value.toFixed(4)}
          </span>
          <span style={{ fontSize: '13px', color: '#6b7280', minWidth: '60px', textAlign: 'right' }}>
            ({(value * 100).toFixed(2)}%)
          </span>
        </div>

        {calculation && calculation.length > 0 && (
          <div style={{ fontSize: '11px', color: '#9ca3af' }}>
            {showSteps ? '▼' : '▶'}
          </div>
        )}
      </div>

      {showSteps && calculation && calculation.length > 0 && (
        <div style={{
          background: '#f9fafb',
          padding: '14px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{ fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
            Calculation Steps:
          </div>
          {calculation.map((step, idx) => (
            <div 
              key={idx} 
              style={{ 
                fontFamily: 'monospace', 
                fontSize: '12px', 
                color: '#4b5563',
                marginBottom: idx < calculation.length - 1 ? '3px' : '0',
                paddingLeft: idx > 0 ? '14px' : '0'
              }}
            >
              {step}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PropertyRow({ label, value, description }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '10px 12px',
      background: 'white',
      borderRadius: '6px',
      border: '1px solid #e5e7eb'
    }}>
      <div>
        <div style={{ fontWeight: '500', color: '#374151', marginBottom: '2px', fontSize: '13px' }}>{label}</div>
        <div style={{ fontSize: '11px', color: '#6b7280' }}>{description}</div>
      </div>
      <span style={{ 
        padding: '4px 10px',
        borderRadius: '5px',
        fontSize: '12px',
        fontWeight: '600',
        background: value ? '#dcfce7' : '#fee2e2',
        color: value ? '#166534' : '#991b1b'
      }}>
        {value ? 'Yes' : 'No'}
      </span>
    </div>
  );
}

function VennIntersection({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-intersection-${instanceId}`}>
          <circle cx="30" cy="30" r="22" />
        </clipPath>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="30" r="22" fill="#007bff" opacity="0.7" clipPath={`url(#clip-intersection-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennUnion({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <circle cx="30" cy="30" r="22" fill="#007bff" stroke="#007bff" strokeWidth="1.5" opacity="0.7" />
      <circle cx="60" cy="30" r="22" fill="#007bff" stroke="#007bff" strokeWidth="1.5" opacity="0.7" />
    </svg>
  );
}

function VennAnotB({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-a-not-b-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="60" cy="30" r="22" fill="black" />
        </mask>
      </defs>
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="30" cy="30" r="22" fill="#007bff" opacity="0.7" mask={`url(#mask-a-not-b-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennBnotA({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-b-not-a-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="30" r="22" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="30" r="22" fill="#007bff" opacity="0.7" mask={`url(#mask-b-not-a-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennNeither({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-neither-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="30" r="22" fill="black" />
          <circle cx="60" cy="30" r="22" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.4" rx="4" mask={`url(#mask-neither-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennConditionalAgivenB({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-a-given-b-${instanceId}`}>
          <circle cx="30" cy="30" r="22" />
        </clipPath>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="30" r="22" fill="#99ccff" stroke="#007bff" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="30" r="22" fill="#007bff" opacity="0.8" clipPath={`url(#clip-a-given-b-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="2" />
    </svg>
  );
}

function VennConditionalBgivenA({ pA, pB, pAandB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-b-given-a-${instanceId}`}>
          <circle cx="60" cy="30" r="22" />
        </clipPath>
      </defs>
      <circle cx="30" cy="30" r="22" fill="#99ccff" stroke="#007bff" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="30" cy="30" r="22" fill="#007bff" opacity="0.8" clipPath={`url(#clip-b-given-a-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="2" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennNotA({ pA, pB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-not-a-with-b-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="30" r="22" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.5" rx="4" mask={`url(#mask-not-a-with-b-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennNotB({ pA, pB, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-not-b-with-a-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="60" cy="30" r="22" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.5" rx="4" mask={`url(#mask-not-b-with-a-${instanceId})`} />
      <circle cx="30" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="30" r="22" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}