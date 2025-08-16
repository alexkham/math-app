const probabilityOperations = {
    AuB: {
      label: 'P(A ∪ B)',
      formula: 'P(A ∪ B) = P(A) + P(B) - P(A∩B)',
      explanation: 'Union shows probability of either A or B (or both) occurring. Result represents the chance that at least one of the events happens. Calculated by adding individual probabilities and subtracting intersection to avoid counting overlap twice.',
      calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndB - p.aAndB
    },
    AuNotB: {
      label: 'P(A ∪ B̄)',
      formula: 'P(A ∪ B̄) = P(A) + P(B̄) - P(A∩B̄)',
      explanation: 'Union of A with complement of B. Shows probability of either A occurring or B not occurring (or both). Calculated similarly to regular union but using complement probability for B.',
      calculate: (p) => p.aAndB + p.aAndNotB + p.notAAndNotB - p.aAndNotB
    },
    NotAuB: {
      label: 'P(Ā ∪ B)',
      formula: 'P(Ā ∪ B) = P(Ā) + P(B) - P(Ā∩B)',
      explanation: 'Union of complement of A with B. Shows probability of either A not occurring or B occurring (or both). Calculated using complement probability for A.',
      calculate: (p) => p.notAAndB + p.notAAndNotB + p.aAndB - p.notAAndB
    },
    NotAuNotB: {
      label: 'P(Ā ∪ B̄)',
      formula: 'P(Ā ∪ B̄) = P(Ā) + P(B̄) - P(Ā∩B̄)',
      explanation: 'Union of complements shows probability of either A not occurring or B not occurring (or both). Result represents chance that at least one of the events does not happen.',
      calculate: (p) => p.notAAndB + p.notAAndNotB + p.aAndNotB - p.notAAndNotB
    },
    AgivenB: {
      label: 'P(A|B)',
      formula: 'P(A|B) = P(A∩B)/P(B)',
      explanation: 'Conditional probability shows likelihood of A occurring when B is known to have occurred. Result is the proportion of B cases where A also occurs. Calculated by dividing joint probability by probability of the condition.',
      calculate: (p) => p.aAndB / (p.aAndB + p.notAAndB)
    },
    AgivenNotB: {
      label: 'P(A|B̄)',
      formula: 'P(A|B̄) = P(A∩B̄)/P(B̄)',
      explanation: 'Conditional probability shows likelihood of A occurring when B is known to have not occurred. Result is the proportion of not-B cases where A occurs.',
      calculate: (p) => p.aAndNotB / (p.aAndNotB + p.notAAndNotB)
    },
    BgivenA: {
      label: 'P(B|A)',
      formula: 'P(B|A) = P(A∩B)/P(A)',
      explanation: 'Conditional probability shows likelihood of B occurring when A is known to have occurred. Result is the proportion of A cases where B also occurs.',
      calculate: (p) => p.aAndB / (p.aAndB + p.aAndNotB)
    },
    BgivenNotA: {
      label: 'P(B|Ā)',
      formula: 'P(B|Ā) = P(Ā∩B)/P(Ā)',
      explanation: 'Conditional probability shows likelihood of B occurring when A is known to have not occurred. Result is the proportion of not-A cases where B occurs.',
      calculate: (p) => p.notAAndB / (p.notAAndB + p.notAAndNotB)
    },
    indepTest: {
      label: 'Independence Test',
      formula: 'P(A∩B) = P(A)×P(B) if independent',
      explanation: 'Tests whether events A and B are independent. Compares actual joint probability with expected probability if events were independent. If actual equals expected (or very close), events are independent. Significant difference indicates dependence.',
      calculate: (p) => {
        const pA = p.aAndB + p.aAndNotB;
        const pB = p.aAndB + p.notAAndB;
        return {
          actual: p.aAndB,
          expected: pA * pB
        };
      }
    },
    oddsA: {
      label: 'Odds of A',
      formula: 'Odds(A) = P(A)/P(Ā)',
      explanation: 'Odds represent how much more likely event A is to occur than not occur. Result above 1 means A is more likely to happen than not. Result below 1 means A is less likely to happen than not.',
      calculate: (p) => (p.aAndB + p.aAndNotB) / (p.notAAndB + p.notAAndNotB)
    },
    oddsB: {
      label: 'Odds of B',
      formula: 'Odds(B) = P(B)/P(B̄)',
      explanation: 'Odds represent how much more likely event B is to occur than not occur. Result above 1 means B is more likely to happen than not. Result below 1 means B is less likely to happen than not.',
      calculate: (p) => (p.aAndB + p.notAAndB) / (p.aAndNotB + p.notAAndNotB)
    },
    oddsRatio: {
      label: 'Odds Ratio',
      formula: 'OR = [P(A∩B)×P(Ā∩B̄)]/[P(A∩B̄)×P(Ā∩B)]',
      explanation: 'Odds ratio compares the odds of A occurring in B versus not-B groups. Result above 1 indicates positive association between A and B. Result below 1 indicates negative association.',
      calculate: (p) => (p.aAndB * p.notAAndNotB) / (p.aAndNotB * p.notAAndB)
    }
  };
  
  export default probabilityOperations;