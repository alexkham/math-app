'use client';

import React, { useState, useMemo } from 'react';

export default function ThreeEventsProbabilityCalculator() {
  const instanceId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  const [mode, setMode] = useState('independent');
  const [pA, setPA] = useState('0.5');
  const [pB, setPB] = useState('0.4');
  const [pC, setPC] = useState('0.3');
  
  // Conditional probabilities
  const [pABC, setPABC] = useState('0.06');
  const [pUnion, setPUnion] = useState('0.82');
  
  // Pairwise intersections
  const [pAandB, setPAandB] = useState('0.2');
  const [pAandC, setPAandC] = useState('0.15');
  const [pBandC, setPBandC] = useState('0.12');
  
  const [results, setResults] = useState({});
  const [properties, setProperties] = useState({
    mutuallyIndependent: false,
    pairwiseIndependent: false,
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
    setPC('0.3');
    setPABC('0.06');
    setPUnion('0.82');
    setPAandB('0.2');
    setPAandC('0.15');
    setPBandC('0.12');
    setResults({});
    setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
    setUndefinedResults([]);
    setCalculations({});
    setErrors([]);
    setHasCalculated(false);
  };

  const handleCalculate = () => {
    setHasCalculated(true);
    calculateResults();
  };

  const validateAxioms = (probA, probB, probC, pAandB, pAandC, pBandC, pABC, pUnion) => {
    const axiomErrors = [];
    const epsilon = 0.0001;

    // Basic non-negativity
    if (pABC < -epsilon) {
      axiomErrors.push('Axiom violation: P(A∩B∩C) cannot be negative');
    }

    // P(A∩B∩C) cannot exceed any pairwise intersection
    if (pABC > pAandB + epsilon) {
      axiomErrors.push('Axiom violation: P(A∩B∩C) cannot exceed P(A∩B)');
    }
    if (pABC > pAandC + epsilon) {
      axiomErrors.push('Axiom violation: P(A∩B∩C) cannot exceed P(A∩C)');
    }
    if (pABC > pBandC + epsilon) {
      axiomErrors.push('Axiom violation: P(A∩B∩C) cannot exceed P(B∩C)');
    }

    // Pairwise intersections cannot exceed individual probabilities
    if (pAandB > Math.min(probA, probB) + epsilon) {
      axiomErrors.push('Axiom violation: P(A∩B) cannot exceed min(P(A), P(B))');
    }
    if (pAandC > Math.min(probA, probC) + epsilon) {
      axiomErrors.push('Axiom violation: P(A∩C) cannot exceed min(P(A), P(C))');
    }
    if (pBandC > Math.min(probB, probC) + epsilon) {
      axiomErrors.push('Axiom violation: P(B∩C) cannot exceed min(P(B), P(C))');
    }

    // Union bounds
    if (pUnion < Math.max(probA, probB, probC) - epsilon) {
      axiomErrors.push('Axiom violation: P(A∪B∪C) cannot be less than max(P(A), P(B), P(C))');
    }
    if (pUnion > 1 + epsilon) {
      axiomErrors.push('Axiom violation: P(A∪B∪C) cannot exceed 1');
    }

    // Inclusion-exclusion principle
    const expectedUnion = probA + probB + probC - pAandB - pAandC - pBandC + pABC;
    if (Math.abs(pUnion - expectedUnion) > epsilon) {
      axiomErrors.push('Axiom violation: Inclusion-exclusion principle not satisfied');
    }

    // Check if regions would be negative
    const pAonly = probA - pAandB - pAandC + pABC;
    const pBonly = probB - pAandB - pBandC + pABC;
    const pConly = probC - pAandC - pBandC + pABC;
    const pABnotC = pAandB - pABC;
    const pACnotB = pAandC - pABC;
    const pBCnotA = pBandC - pABC;

    if (pAonly < -epsilon) {
      axiomErrors.push('Axiom violation: Region "A only" would be negative');
    }
    if (pBonly < -epsilon) {
      axiomErrors.push('Axiom violation: Region "B only" would be negative');
    }
    if (pConly < -epsilon) {
      axiomErrors.push('Axiom violation: Region "C only" would be negative');
    }
    if (pABnotC < -epsilon) {
      axiomErrors.push('Axiom violation: Region "A∩B but not C" would be negative');
    }
    if (pACnotB < -epsilon) {
      axiomErrors.push('Axiom violation: Region "A∩C but not B" would be negative');
    }
    if (pBCnotA < -epsilon) {
      axiomErrors.push('Axiom violation: Region "B∩C but not A" would be negative');
    }

    return axiomErrors;
  };

  const computeAllProbabilities = (probA, probB, probC, pAandB, pAandC, pBandC, pABC, pUnion) => {
    const newResults = {};
    const newCalculations = {};
    const undefinedList = [];

    // Store basic inputs
    newResults.pABC = pABC;
    newResults.pUnion = pUnion;
    newResults.pAandB = pAandB;
    newResults.pAandC = pAandC;
    newResults.pBandC = pBandC;

    // Complements
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

    newResults.pNotC = 1 - probC;
    newCalculations.pNotC = [
      `P(C') = 1 - P(C)`,
      `P(C') = 1 - ${probC}`,
      `P(C') = ${newResults.pNotC.toFixed(4)}`
    ];

    // Eight regions of Venn diagram
    // Region 1: A only (A ∩ B' ∩ C')
    newResults.pAonly = probA - pAandB - pAandC + pABC;
    newCalculations.pAonly = [
      `P(A ∩ B' ∩ C') = P(A) - P(A∩B) - P(A∩C) + P(A∩B∩C)`,
      `P(A ∩ B' ∩ C') = ${probA} - ${pAandB.toFixed(4)} - ${pAandC.toFixed(4)} + ${pABC.toFixed(4)}`,
      `P(A ∩ B' ∩ C') = ${newResults.pAonly.toFixed(4)}`
    ];

    // Region 2: B only (B ∩ A' ∩ C')
    newResults.pBonly = probB - pAandB - pBandC + pABC;
    newCalculations.pBonly = [
      `P(B ∩ A' ∩ C') = P(B) - P(A∩B) - P(B∩C) + P(A∩B∩C)`,
      `P(B ∩ A' ∩ C') = ${probB} - ${pAandB.toFixed(4)} - ${pBandC.toFixed(4)} + ${pABC.toFixed(4)}`,
      `P(B ∩ A' ∩ C') = ${newResults.pBonly.toFixed(4)}`
    ];

    // Region 3: C only (C ∩ A' ∩ B')
    newResults.pConly = probC - pAandC - pBandC + pABC;
    newCalculations.pConly = [
      `P(C ∩ A' ∩ B') = P(C) - P(A∩C) - P(B∩C) + P(A∩B∩C)`,
      `P(C ∩ A' ∩ B') = ${probC} - ${pAandC.toFixed(4)} - ${pBandC.toFixed(4)} + ${pABC.toFixed(4)}`,
      `P(C ∩ A' ∩ B') = ${newResults.pConly.toFixed(4)}`
    ];

    // Region 4: A and B but not C (A ∩ B ∩ C')
    newResults.pABnotC = pAandB - pABC;
    newCalculations.pABnotC = [
      `P(A ∩ B ∩ C') = P(A∩B) - P(A∩B∩C)`,
      `P(A ∩ B ∩ C') = ${pAandB.toFixed(4)} - ${pABC.toFixed(4)}`,
      `P(A ∩ B ∩ C') = ${newResults.pABnotC.toFixed(4)}`
    ];

    // Region 5: A and C but not B (A ∩ C ∩ B')
    newResults.pACnotB = pAandC - pABC;
    newCalculations.pACnotB = [
      `P(A ∩ C ∩ B') = P(A∩C) - P(A∩B∩C)`,
      `P(A ∩ C ∩ B') = ${pAandC.toFixed(4)} - ${pABC.toFixed(4)}`,
      `P(A ∩ C ∩ B') = ${newResults.pACnotB.toFixed(4)}`
    ];

    // Region 6: B and C but not A (B ∩ C ∩ A')
    newResults.pBCnotA = pBandC - pABC;
    newCalculations.pBCnotA = [
      `P(B ∩ C ∩ A') = P(B∩C) - P(A∩B∩C)`,
      `P(B ∩ C ∩ A') = ${pBandC.toFixed(4)} - ${pABC.toFixed(4)}`,
      `P(B ∩ C ∩ A') = ${newResults.pBCnotA.toFixed(4)}`
    ];

    // Region 8: None (A' ∩ B' ∩ C')
    newResults.pNone = 1 - pUnion;
    newCalculations.pNone = [
      `P(A' ∩ B' ∩ C') = 1 - P(A∪B∪C)`,
      `P(A' ∩ B' ∩ C') = 1 - ${pUnion.toFixed(4)}`,
      `P(A' ∩ B' ∩ C') = ${newResults.pNone.toFixed(4)}`
    ];

    // Additional useful probabilities
    // P(A ∪ B) - at least A or B
    newResults.pAorB = probA + probB - pAandB;
    newCalculations.pAorB = [
      `P(A ∪ B) = P(A) + P(B) - P(A∩B)`,
      `P(A ∪ B) = ${probA} + ${probB} - ${pAandB.toFixed(4)}`,
      `P(A ∪ B) = ${newResults.pAorB.toFixed(4)}`
    ];

    // P(A ∪ C) - at least A or C
    newResults.pAorC = probA + probC - pAandC;
    newCalculations.pAorC = [
      `P(A ∪ C) = P(A) + P(C) - P(A∩C)`,
      `P(A ∪ C) = ${probA} + ${probC} - ${pAandC.toFixed(4)}`,
      `P(A ∪ C) = ${newResults.pAorC.toFixed(4)}`
    ];

    // P(B ∪ C) - at least B or C
    newResults.pBorC = probB + probC - pBandC;
    newCalculations.pBorC = [
      `P(B ∪ C) = P(B) + P(C) - P(B∩C)`,
      `P(B ∪ C) = ${probB} + ${probC} - ${pBandC.toFixed(4)}`,
      `P(B ∪ C) = ${newResults.pBorC.toFixed(4)}`
    ];

    // Conditional probabilities (with checks for zero denominators)
    // P(A|B∩C)
    if (pBandC > 0) {
      newResults.pAgivenBC = pABC / pBandC;
      newCalculations.pAgivenBC = [
        `P(A|B∩C) = P(A∩B∩C) / P(B∩C)`,
        `P(A|B∩C) = ${pABC.toFixed(4)} / ${pBandC.toFixed(4)}`,
        `P(A|B∩C) = ${newResults.pAgivenBC.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(A|B∩C) is undefined because P(B∩C) = 0');
    }

    // P(B|A∩C)
    if (pAandC > 0) {
      newResults.pBgivenAC = pABC / pAandC;
      newCalculations.pBgivenAC = [
        `P(B|A∩C) = P(A∩B∩C) / P(A∩C)`,
        `P(B|A∩C) = ${pABC.toFixed(4)} / ${pAandC.toFixed(4)}`,
        `P(B|A∩C) = ${newResults.pBgivenAC.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(B|A∩C) is undefined because P(A∩C) = 0');
    }

    // P(C|A∩B)
    if (pAandB > 0) {
      newResults.pCgivenAB = pABC / pAandB;
      newCalculations.pCgivenAB = [
        `P(C|A∩B) = P(A∩B∩C) / P(A∩B)`,
        `P(C|A∩B) = ${pABC.toFixed(4)} / ${pAandB.toFixed(4)}`,
        `P(C|A∩B) = ${newResults.pCgivenAB.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(C|A∩B) is undefined because P(A∩B) = 0');
    }

    // Simple conditional probabilities
    // P(A|B)
    if (probB > 0) {
      newResults.pAgivenB = pAandB / probB;
      newCalculations.pAgivenB = [
        `P(A|B) = P(A∩B) / P(B)`,
        `P(A|B) = ${pAandB.toFixed(4)} / ${probB}`,
        `P(A|B) = ${newResults.pAgivenB.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(A|B) is undefined because P(B) = 0');
    }

    // P(A|C)
    if (probC > 0) {
      newResults.pAgivenC = pAandC / probC;
      newCalculations.pAgivenC = [
        `P(A|C) = P(A∩C) / P(C)`,
        `P(A|C) = ${pAandC.toFixed(4)} / ${probC}`,
        `P(A|C) = ${newResults.pAgivenC.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(A|C) is undefined because P(C) = 0');
    }

    // P(B|C)
    if (probC > 0) {
      newResults.pBgivenC = pBandC / probC;
      newCalculations.pBgivenC = [
        `P(B|C) = P(B∩C) / P(C)`,
        `P(B|C) = ${pBandC.toFixed(4)} / ${probC}`,
        `P(B|C) = ${newResults.pBgivenC.toFixed(4)}`
      ];
    } else {
      undefinedList.push('P(B|C) is undefined because P(C) = 0');
    }

    return { newResults, newCalculations, undefinedList };
  };

  const calculateResults = () => {
    const newErrors = [];

    const probA = validateProbability(pA);
    const probB = validateProbability(pB);
    const probC = validateProbability(pC);

    if (probA === null) {
      newErrors.push('P(A) must be between 0 and 1');
    }
    if (probB === null) {
      newErrors.push('P(B) must be between 0 and 1');
    }
    if (probC === null) {
      newErrors.push('P(C) must be between 0 and 1');
    }

    if (probA === null || probB === null || probC === null) {
      setErrors(newErrors);
      setResults({});
      setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    let pAandBVal, pAandCVal, pBandCVal, pABCVal, pUnionVal;
    const modeCalculations = {};

    if (mode === 'independent') {
      // Mutually independent: all probabilities multiply
      pAandBVal = probA * probB;
      pAandCVal = probA * probC;
      pBandCVal = probB * probC;
      pABCVal = probA * probB * probC;

      modeCalculations.pAandB = [
        `P(A∩B) = P(A) × P(B) (independent)`,
        `P(A∩B) = ${probA} × ${probB}`,
        `P(A∩B) = ${pAandBVal.toFixed(4)}`
      ];
      modeCalculations.pAandC = [
        `P(A∩C) = P(A) × P(C) (independent)`,
        `P(A∩C) = ${probA} × ${probC}`,
        `P(A∩C) = ${pAandCVal.toFixed(4)}`
      ];
      modeCalculations.pBandC = [
        `P(B∩C) = P(B) × P(C) (independent)`,
        `P(B∩C) = ${probB} × ${probC}`,
        `P(B∩C) = ${pBandCVal.toFixed(4)}`
      ];
      modeCalculations.pABC = [
        `P(A∩B∩C) = P(A) × P(B) × P(C) (independent)`,
        `P(A∩B∩C) = ${probA} × ${probB} × ${probC}`,
        `P(A∩B∩C) = ${pABCVal.toFixed(4)}`
      ];

      pUnionVal = probA + probB + probC - pAandBVal - pAandCVal - pBandCVal + pABCVal;
      modeCalculations.pUnion = [
        `P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C)`,
        `P(A∪B∪C) = ${probA} + ${probB} + ${probC} - ${pAandBVal.toFixed(4)} - ${pAandCVal.toFixed(4)} - ${pBandCVal.toFixed(4)} + ${pABCVal.toFixed(4)}`,
        `P(A∪B∪C) = ${pUnionVal.toFixed(4)}`
      ];

    } else if (mode === 'mutuallyExclusive') {
      // Mutually exclusive: all intersections are zero
      pAandBVal = 0;
      pAandCVal = 0;
      pBandCVal = 0;
      pABCVal = 0;

      modeCalculations.pAandB = [`P(A∩B) = 0 (mutually exclusive)`];
      modeCalculations.pAandC = [`P(A∩C) = 0 (mutually exclusive)`];
      modeCalculations.pBandC = [`P(B∩C) = 0 (mutually exclusive)`];
      modeCalculations.pABC = [`P(A∩B∩C) = 0 (mutually exclusive)`];

      pUnionVal = probA + probB + probC;
      modeCalculations.pUnion = [
        `P(A∪B∪C) = P(A) + P(B) + P(C) (mutually exclusive)`,
        `P(A∪B∪C) = ${probA} + ${probB} + ${probC}`,
        `P(A∪B∪C) = ${pUnionVal.toFixed(4)}`
      ];

    } else if (mode === 'givenIntersection') {
      // Given P(A∩B∩C)
      const pABCInput = validateProbability(pABC);
      if (pABCInput === null) {
        newErrors.push('P(A∩B∩C) must be between 0 and 1');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pABCVal = pABCInput;

      // Need pairwise intersections to compute union
      const pAandBInput = validateProbability(pAandB);
      const pAandCInput = validateProbability(pAandC);
      const pBandCInput = validateProbability(pBandC);

      if (pAandBInput === null || pAandCInput === null || pBandCInput === null) {
        newErrors.push('All pairwise intersections P(A∩B), P(A∩C), P(B∩C) must be provided and valid');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pAandBVal = pAandBInput;
      pAandCVal = pAandCInput;
      pBandCVal = pBandCInput;

      pUnionVal = probA + probB + probC - pAandBVal - pAandCVal - pBandCVal + pABCVal;
      modeCalculations.pUnion = [
        `P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C)`,
        `P(A∪B∪C) = ${probA} + ${probB} + ${probC} - ${pAandBVal.toFixed(4)} - ${pAandCVal.toFixed(4)} - ${pBandCVal.toFixed(4)} + ${pABCVal.toFixed(4)}`,
        `P(A∪B∪C) = ${pUnionVal.toFixed(4)}`
      ];

    } else if (mode === 'givenUnion') {
      // Given P(A∪B∪C)
      const pUnionInput = validateProbability(pUnion);
      if (pUnionInput === null) {
        newErrors.push('P(A∪B∪C) must be between 0 and 1');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pUnionVal = pUnionInput;

      // Need pairwise intersections to compute triple intersection
      const pAandBInput = validateProbability(pAandB);
      const pAandCInput = validateProbability(pAandC);
      const pBandCInput = validateProbability(pBandC);

      if (pAandBInput === null || pAandCInput === null || pBandCInput === null) {
        newErrors.push('All pairwise intersections P(A∩B), P(A∩C), P(B∩C) must be provided and valid');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pAandBVal = pAandBInput;
      pAandCVal = pAandCInput;
      pBandCVal = pBandCInput;

      // Solve for P(A∩B∩C)
      pABCVal = probA + probB + probC - pAandBVal - pAandCVal - pBandCVal - pUnionVal;
      modeCalculations.pABC = [
        `P(A∩B∩C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) - P(A∪B∪C)`,
        `P(A∩B∩C) = ${probA} + ${probB} + ${probC} - ${pAandBVal.toFixed(4)} - ${pAandCVal.toFixed(4)} - ${pBandCVal.toFixed(4)} - ${pUnionVal.toFixed(4)}`,
        `P(A∩B∩C) = ${pABCVal.toFixed(4)}`
      ];

    } else if (mode === 'givenPairwise') {
      // Given all pairwise intersections
      const pAandBInput = validateProbability(pAandB);
      const pAandCInput = validateProbability(pAandC);
      const pBandCInput = validateProbability(pBandC);

      if (pAandBInput === null || pAandCInput === null || pBandCInput === null) {
        newErrors.push('All pairwise intersections P(A∩B), P(A∩C), P(B∩C) must be provided and valid');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pAandBVal = pAandBInput;
      pAandCVal = pAandCInput;
      pBandCVal = pBandCInput;

      // Need P(A∩B∩C) to compute union
      const pABCInput = validateProbability(pABC);
      if (pABCInput === null) {
        newErrors.push('P(A∩B∩C) must be provided and valid');
        setErrors(newErrors);
        setResults({});
        setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
        setUndefinedResults([]);
        setCalculations({});
        return;
      }

      pABCVal = pABCInput;

      pUnionVal = probA + probB + probC - pAandBVal - pAandCVal - pBandCVal + pABCVal;
      modeCalculations.pUnion = [
        `P(A∪B∪C) = P(A) + P(B) + P(C) - P(A∩B) - P(A∩C) - P(B∩C) + P(A∩B∩C)`,
        `P(A∪B∪C) = ${probA} + ${probB} + ${probC} - ${pAandBVal.toFixed(4)} - ${pAandCVal.toFixed(4)} - ${pBandCVal.toFixed(4)} + ${pABCVal.toFixed(4)}`,
        `P(A∪B∪C) = ${pUnionVal.toFixed(4)}`
      ];

    } else {
      newErrors.push('Invalid mode selected');
      setErrors(newErrors);
      setResults({});
      setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    const axiomErrors = validateAxioms(probA, probB, probC, pAandBVal, pAandCVal, pBandCVal, pABCVal, pUnionVal);
    newErrors.push(...axiomErrors);

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setResults({});
      setProperties({ mutuallyIndependent: false, pairwiseIndependent: false, mutuallyExclusive: false });
      setUndefinedResults([]);
      setCalculations({});
      return;
    }

    const { newResults, newCalculations, undefinedList } = computeAllProbabilities(
      probA, probB, probC, pAandBVal, pAandCVal, pBandCVal, pABCVal, pUnionVal
    );

    const allCalculations = { ...modeCalculations, ...newCalculations };

    // Check independence properties
    const epsilon = 0.0001;
    const mutuallyIndependent = 
      Math.abs(pABCVal - probA * probB * probC) < epsilon &&
      Math.abs(pAandBVal - probA * probB) < epsilon &&
      Math.abs(pAandCVal - probA * probC) < epsilon &&
      Math.abs(pBandCVal - probB * probC) < epsilon;

    const pairwiseIndependent =
      Math.abs(pAandBVal - probA * probB) < epsilon &&
      Math.abs(pAandCVal - probA * probC) < epsilon &&
      Math.abs(pBandCVal - probB * probC) < epsilon;

    const mutuallyExclusive = pABCVal < epsilon;

    const newProperties = {
      mutuallyIndependent,
      pairwiseIndependent,
      mutuallyExclusive
    };

    setErrors([]);
    setResults(newResults);
    setProperties(newProperties);
    setUndefinedResults(undefinedList);
    setCalculations(allCalculations);
  };

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
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
          Calculate probabilities for three events A, B, and C with visual Venn diagrams showing all 8 regions and step-by-step solutions.
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: '#333', fontSize: '15px' }}>
          Calculation Mode
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
          {[
            { value: 'independent', label: 'Mutually Independent' },
            { value: 'mutuallyExclusive', label: 'Mutually Exclusive' },
            { value: 'givenIntersection', label: 'Given P(A∩B∩C)' },
            { value: 'givenUnion', label: 'Given P(A∪B∪C)' },
            { value: 'givenPairwise', label: 'Given Pairwise Intersections' }
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

              <div>
                <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                  P(C) - Probability of Event C
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={pC}
                  onChange={(e) => setPC(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '9px 11px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '15px'
                  }}
                />
              </div>

              {(mode === 'givenIntersection' || mode === 'givenPairwise') && (
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(A∩B∩C) - All three events occur
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pABC}
                    onChange={(e) => setPABC(e.target.value)}
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

              {mode === 'givenUnion' && (
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(A∪B∪C) - At least one event occurs
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

              {(mode === 'givenIntersection' || mode === 'givenUnion' || mode === 'givenPairwise') && (
                <>
                  <div>
                    <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                      P(A∩B) - Events A and B occur
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={pAandB}
                      onChange={(e) => setPAandB(e.target.value)}
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
                      P(A∩C) - Events A and C occur
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={pAandC}
                      onChange={(e) => setPAandC(e.target.value)}
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
                      P(B∩C) - Events B and C occur
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="1"
                      value={pBandC}
                      onChange={(e) => setPBandC(e.target.value)}
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
                  label="Mutually Independent" 
                  value={properties.mutuallyIndependent} 
                  description="All intersections multiply"
                />
                <PropertyRow 
                  label="Pairwise Independent" 
                  value={properties.pairwiseIndependent} 
                  description="Each pair multiplies"
                />
                <PropertyRow 
                  label="Mutually Exclusive" 
                  value={properties.mutuallyExclusive} 
                  description="P(A∩B∩C) = 0"
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
                Results - Eight Venn Diagram Regions
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                {results.pABC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∩B∩C)"
                    description="All three events occur"
                    value={results.pABC}
                    calculation={calculations.pABC}
                    diagram={<VennABC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pABnotC !== undefined && results.pABnotC >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(A∩B∩C')"
                    description="A and B occur, but not C"
                    value={results.pABnotC}
                    calculation={calculations.pABnotC}
                    diagram={<VennABnotC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pACnotB !== undefined && results.pACnotB >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(A∩C∩B')"
                    description="A and C occur, but not B"
                    value={results.pACnotB}
                    calculation={calculations.pACnotB}
                    diagram={<VennACnotB pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pBCnotA !== undefined && results.pBCnotA >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(B∩C∩A')"
                    description="B and C occur, but not A"
                    value={results.pBCnotA}
                    calculation={calculations.pBCnotA}
                    diagram={<VennBCnotA pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAonly !== undefined && results.pAonly >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(A∩B'∩C')"
                    description="Only A occurs"
                    value={results.pAonly}
                    calculation={calculations.pAonly}
                    diagram={<VennAonly pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pBonly !== undefined && results.pBonly >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(B∩A'∩C')"
                    description="Only B occurs"
                    value={results.pBonly}
                    calculation={calculations.pBonly}
                    diagram={<VennBonly pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pConly !== undefined && results.pConly >= 0 && (
                  <ResultRowWithDiagram 
                    label="P(C∩A'∩B')"
                    description="Only C occurs"
                    value={results.pConly}
                    calculation={calculations.pConly}
                    diagram={<VennConly pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pNone !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A'∩B'∩C')"
                    description="None of the events occur"
                    value={results.pNone}
                    calculation={calculations.pNone}
                    diagram={<VennNone pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}
              </div>

              <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a', marginTop: '24px' }}>
                Additional Probabilities
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {results.pUnion !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∪B∪C)"
                    description="At least one event occurs"
                    value={results.pUnion}
                    calculation={calculations.pUnion}
                    diagram={<VennUnion pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAorB !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∪B)"
                    description="At least A or B occurs"
                    value={results.pAorB}
                    calculation={calculations.pAorB}
                    diagram={<VennAorB pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAorC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∪C)"
                    description="At least A or C occurs"
                    value={results.pAorC}
                    calculation={calculations.pAorC}
                    diagram={<VennAorC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pBorC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(B∪C)"
                    description="At least B or C occurs"
                    value={results.pBorC}
                    calculation={calculations.pBorC}
                    diagram={<VennBorC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAandB !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∩B)"
                    description="Both A and B occur"
                    value={results.pAandB}
                    calculation={calculations.pAandB}
                    diagram={<VennAandB pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAandC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A∩C)"
                    description="Both A and C occur"
                    value={results.pAandC}
                    calculation={calculations.pAandC}
                    diagram={<VennAandC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pBandC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(B∩C)"
                    description="Both B and C occur"
                    value={results.pBandC}
                    calculation={calculations.pBandC}
                    diagram={<VennBandC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pAgivenBC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A|B∩C)"
                    description="A given both B and C"
                    value={results.pAgivenBC}
                    calculation={calculations.pAgivenBC}
                    diagram={<VennAgivenBC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pBgivenAC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(B|A∩C)"
                    description="B given both A and C"
                    value={results.pBgivenAC}
                    calculation={calculations.pBgivenAC}
                    diagram={<VennBgivenAC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pCgivenAB !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(C|A∩B)"
                    description="C given both A and B"
                    value={results.pCgivenAB}
                    calculation={calculations.pCgivenAB}
                    diagram={<VennCgivenAB pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pNotA !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(A')"
                    description="A does not occur"
                    value={results.pNotA}
                    calculation={calculations.pNotA}
                    diagram={<VennNotA pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pNotB !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(B')"
                    description="B does not occur"
                    value={results.pNotB}
                    calculation={calculations.pNotB}
                    diagram={<VennNotB pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}

                {results.pNotC !== undefined && (
                  <ResultRowWithDiagram 
                    label="P(C')"
                    description="C does not occur"
                    value={results.pNotC}
                    calculation={calculations.pNotC}
                    diagram={<VennNotC pA={parseFloat(pA)} pB={parseFloat(pB)} pC={parseFloat(pC)} instanceId={instanceId} />}
                  />
                )}
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

// Venn diagram components for 3 circles
// All three events (center region)
function VennABC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-abc-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
        <clipPath id={`clip-abc-2-${instanceId}`}>
          <circle cx="60" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-abc-${instanceId})`} />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-abc-2-${instanceId})`} />
    </svg>
  );
}

// A and B but not C
function VennABnotC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-ab-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
        <mask id={`mask-ab-not-c-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="45" cy="42" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-ab-${instanceId})`} mask={`url(#mask-ab-not-c-${instanceId})`} />
    </svg>
  );
}

// A and C but not B
function VennACnotB({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-ac-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
        <mask id={`mask-ac-not-b-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="60" cy="25" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-ac-${instanceId})`} mask={`url(#mask-ac-not-b-${instanceId})`} />
    </svg>
  );
}

// B and C but not A
function VennBCnotA({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-bc-${instanceId}`}>
          <circle cx="60" cy="25" r="18" />
        </clipPath>
        <mask id={`mask-bc-not-a-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="25" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-bc-${instanceId})`} mask={`url(#mask-bc-not-a-${instanceId})`} />
    </svg>
  );
}

// Only A
function VennAonly({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-a-only-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="60" cy="25" r="18" fill="black" />
          <circle cx="45" cy="42" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="30" cy="25" r="18" fill="#007bff" opacity="0.7" mask={`url(#mask-a-only-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

// Only B
function VennBonly({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-b-only-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="25" r="18" fill="black" />
          <circle cx="45" cy="42" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" mask={`url(#mask-b-only-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

// Only C
function VennConly({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-c-only-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="25" r="18" fill="black" />
          <circle cx="60" cy="25" r="18" fill="black" />
        </mask>
      </defs>
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" mask={`url(#mask-c-only-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// None
function VennNone({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-none-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="25" r="18" fill="black" />
          <circle cx="60" cy="25" r="18" fill="black" />
          <circle cx="45" cy="42" r="18" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.4" rx="4" mask={`url(#mask-none-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// Union - at least one
function VennUnion({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <circle cx="30" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// A or B (pairwise union)
function VennAorB({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <circle cx="30" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// A or C (pairwise union)
function VennAorC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <circle cx="30" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// B or C (pairwise union)
function VennBorC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// A and B (pairwise intersection)
function VennAandB({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-a-and-b-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-a-and-b-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// A and C (pairwise intersection)
function VennAandC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-a-and-c-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-a-and-c-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// B and C (pairwise intersection)
function VennBandC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-b-and-c-${instanceId}`}>
          <circle cx="60" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.7" clipPath={`url(#clip-b-and-c-${instanceId})`} />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// Conditional: A given B∩C
function VennAgivenBC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-a-given-bc-${instanceId}`}>
          <circle cx="60" cy="25" r="18" />
        </clipPath>
        <clipPath id={`clip-a-given-bc-2-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#99ccff" opacity="0.5" clipPath={`url(#clip-a-given-bc-${instanceId})`} />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.8" clipPath={`url(#clip-a-given-bc-2-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
    </svg>
  );
}

// Conditional: B given A∩C
function VennBgivenAC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-b-given-ac-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
        <clipPath id={`clip-b-given-ac-2-${instanceId}`}>
          <circle cx="60" cy="25" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="45" cy="42" r="18" fill="#99ccff" opacity="0.5" clipPath={`url(#clip-b-given-ac-${instanceId})`} />
      <circle cx="45" cy="42" r="18" fill="#007bff" opacity="0.8" clipPath={`url(#clip-b-given-ac-2-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
    </svg>
  );
}

// Conditional: C given A∩B
function VennCgivenAB({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <clipPath id={`clip-c-given-ab-${instanceId}`}>
          <circle cx="30" cy="25" r="18" />
        </clipPath>
        <clipPath id={`clip-c-given-ab-2-${instanceId}`}>
          <circle cx="45" cy="42" r="18" />
        </clipPath>
      </defs>
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="25" r="18" fill="#99ccff" opacity="0.5" clipPath={`url(#clip-c-given-ab-${instanceId})`} />
      <circle cx="60" cy="25" r="18" fill="#007bff" opacity="0.8" clipPath={`url(#clip-c-given-ab-2-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="2" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

// Complement diagrams
function VennNotA({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-not-a-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="30" cy="25" r="18" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.5" rx="4" mask={`url(#mask-not-a-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennNotB({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-not-b-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="60" cy="25" r="18" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.5" rx="4" mask={`url(#mask-not-b-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}

function VennNotC({ pA, pB, pC, instanceId }) {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60">
      <defs>
        <mask id={`mask-not-c-${instanceId}`}>
          <rect x="0" y="0" width="90" height="60" fill="white" />
          <circle cx="45" cy="42" r="18" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="90" height="60" fill="#007bff" opacity="0.5" rx="4" mask={`url(#mask-not-c-${instanceId})`} />
      <circle cx="30" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="60" cy="25" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
      <circle cx="45" cy="42" r="18" fill="none" stroke="#007bff" strokeWidth="1.5" />
    </svg>
  );
}