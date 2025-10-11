
import React, { useState } from 'react';
import JointProbabilityTable from '../../probability/JointProbabilityTable';
import ControlPanel2 from '../ControlPanel2';
import CalculationsDisplay from '../CalculationsDisplay';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '20px auto',
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
      "controls table"
      "display table"
    `,
    gap: '0px'
  },
  tableArea: {
    gridArea: 'table'
  },
  controlsArea: {
    gridArea: 'controls'
  },
  displayArea: {
    gridArea: 'display',
    display: 'flex',
    flexDirection: 'column'
  },
  calculateButton: {
    padding: '12px 24px',
    backgroundColor: '#2196F3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'center',
    marginTop: '-20px',
    marginBottom: '20px'
  }
};

const initialSections = [
  {
    id: 'selectAll',
    title: 'Select All',
    explanation: 'All available probability calculations',
    buttons: []
  },
  {
    id: 'unions',
    title: 'Unions',
    explanation: 'Union probability operations show the likelihood of either event occurring',
    buttons: [
      { id: 'AuB', label: 'P(A ∪ B)' },
      { id: 'AuNotB', label: 'P(A ∪ B̄)' },
      { id: 'NotAuB', label: 'P(Ā ∪ B)' },
      { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
    ]
  },
  {
    id: 'conditional',
    title: 'Conditional',
    explanation: 'Conditional probabilities show the likelihood of one event given another has occurred',
    buttons: [
      { id: 'AgivenB', label: 'P(A|B)' },
      { id: 'AgivenNotB', label: 'P(A|B̄)' },
      { id: 'BgivenA', label: 'P(B|A)' },
      { id: 'BgivenNotA', label: 'P(B|Ā)' }
    ]
  },
  {
    id: 'independence',
    title: 'Independence',
    explanation: 'Test whether events A and B are independent',
    buttons: [
      { id: 'indepTest', label: 'Independence Test' }
    ]
  },
  {
    id: 'odds',
    title: 'Odds',
    explanation: 'Calculate odds and odds ratios for events',
    buttons: [
      { id: 'oddsA', label: 'Odds of A' },
      { id: 'oddsB', label: 'Odds of B' },
      { id: 'oddsRatio', label: 'Odds Ratio' }
    ]
  }
];

const ProbabilityCalculator = () => {
  const [probabilities, setProbabilities] = useState({
    aAndB: 0.25,
    aAndNotB: 0.25,
    notAAndB: 0.15,
    notAAndNotB: 0.35
  });

  const [selectedOperations, setSelectedOperations] = useState([]);
  const [calculationResults, setCalculationResults] = useState(null);

  const handleProbabilityChange = (newProbabilities) => {
    setProbabilities(newProbabilities);
    setCalculationResults(null);
  };

  const handleOperationsChange = (selected) => {
    setSelectedOperations(selected);
    setCalculationResults(null);
  };

  const calculateResults = () => {
    if (selectedOperations.length === 0) return;

    const p = probabilities;
    const pA = p.aAndB + p.aAndNotB;
    const pB = p.aAndB + p.notAAndB;
    const pNotA = p.notAAndB + p.notAAndNotB;
    const pNotB = p.aAndNotB + p.notAAndNotB;

    const results = selectedOperations.map(op => {
      switch (op) {
        case 'AuB':
          return {
            id: op,
            result: pA + pB - p.aAndB
          };
        case 'AuNotB':
          return {
            id: op,
            result: pA + pNotB - p.aAndNotB
          };
        case 'NotAuB':
          return {
            id: op,
            result: pNotA + pB - p.notAAndB
          };
        case 'NotAuNotB':
          return {
            id: op,
            result: pNotA + pNotB - p.notAAndNotB
          };
        case 'AgivenB':
          return {
            id: op,
            result: p.aAndB / pB
          };
        case 'AgivenNotB':
          return {
            id: op,
            result: p.aAndNotB / pNotB
          };
        case 'BgivenA':
          return {
            id: op,
            result: p.aAndB / pA
          };
        case 'BgivenNotA':
          return {
            id: op,
            result: p.notAAndB / pNotA
          };
        case 'indepTest':
          return {
            id: op,
            result: {
              actual: p.aAndB,
              expected: pA * pB
            }
          };
        case 'oddsA':
          return {
            id: op,
            result: pA / pNotA
          };
        case 'oddsB':
          return {
            id: op,
            result: pB / pNotB
          };
        case 'oddsRatio':
          return {
            id: op,
            result: (p.aAndB * p.notAAndNotB) / (p.aAndNotB * p.notAAndB)
          };
        default:
          return null;
      }
    }).filter(Boolean);

    setCalculationResults(results);
  };

  return (
    <div style={styles.container}>
      <div style={{...styles.controlsArea, transform: 'scale(0.9)'}}>
        <ControlPanel2 
          sections={initialSections}
          onChange={handleOperationsChange}
          title="Probability Calculations"
        />
      </div>

      <div style={{...styles.displayArea, transform: 'scale(0.9)'}}>
        {selectedOperations.length > 0 && (
          <button 
            style={styles.calculateButton}
            onClick={calculateResults}
          >
            Calculate
          </button>
        )}
        
        {calculationResults && (
          <CalculationsDisplay 
            calculationResults={calculationResults}
          />
        )}
      </div>

      <div style={{...styles.tableArea, transform: 'scale(0.9)'}}>
        <JointProbabilityTable 
          probabilities={probabilities}
          onUpdate={handleProbabilityChange}
        />
      </div>
    </div>
  );
};

export default ProbabilityCalculator;
// import React, { useState } from 'react';
// import JointProbabilityTable from '../../probability/JointProbabilityTable';
// import ControlPanel2 from '../ControlPanel2';
// import CalculationsDisplay from '../CalculationsDisplay';

// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '20px auto',
//     display: 'grid',
//     gridTemplateColumns: '50% 50%',
//     gridTemplateRows: 'auto 1fr',
//     gridTemplateAreas: `
//       "table controls"
//       "table display"
//     `,
//     gap: '-50px'
//   },
//   tableArea: {
//     gridArea: 'table'
//   },
//   controlsArea: {
//     gridArea: 'controls'
//   },
//   displayArea: {
//     gridArea: 'display',
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   calculateButton: {
//     padding: '12px 24px',
//     backgroundColor: '#2196F3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     alignSelf: 'center',
//     marginTop: '10px',
//     marginBottom: '20px'
//   }
// };

// const initialSections = [
//   {
//     id: 'selectAll',
//     title: 'Select All',
//     explanation: 'All available probability calculations',
//     buttons: []
//   },
//   {
//     id: 'unions',
//     title: 'Unions',
//     explanation: 'Union probability operations show the likelihood of either event occurring',
//     buttons: [
//       { id: 'AuB', label: 'P(A ∪ B)' },
//       { id: 'AuNotB', label: 'P(A ∪ B̄)' },
//       { id: 'NotAuB', label: 'P(Ā ∪ B)' },
//       { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
//     ]
//   },
//   {
//     id: 'conditional',
//     title: 'Conditional',
//     explanation: 'Conditional probabilities show the likelihood of one event given another has occurred',
//     buttons: [
//       { id: 'AgivenB', label: 'P(A|B)' },
//       { id: 'AgivenNotB', label: 'P(A|B̄)' },
//       { id: 'BgivenA', label: 'P(B|A)' },
//       { id: 'BgivenNotA', label: 'P(B|Ā)' }
//     ]
//   },
//   {
//     id: 'independence',
//     title: 'Independence',
//     explanation: 'Test whether events A and B are independent',
//     buttons: [
//       { id: 'indepTest', label: 'Independence Test' }
//     ]
//   },
//   {
//     id: 'odds',
//     title: 'Odds',
//     explanation: 'Calculate odds and odds ratios for events',
//     buttons: [
//       { id: 'oddsA', label: 'Odds of A' },
//       { id: 'oddsB', label: 'Odds of B' },
//       { id: 'oddsRatio', label: 'Odds Ratio' }
//     ]
//   }
// ];

// const ProbabilityCalculator = () => {
//   const [probabilities, setProbabilities] = useState({
//     aAndB: 0.25,
//     aAndNotB: 0.25,
//     notAAndB: 0.15,
//     notAAndNotB: 0.35
//   });

//   const [selectedOperations, setSelectedOperations] = useState([]);
//   const [calculationResults, setCalculationResults] = useState(null);

//   const handleProbabilityChange = (newProbabilities) => {
//     setProbabilities(newProbabilities);
//     setCalculationResults(null);
//   };

//   const handleOperationsChange = (selected) => {
//     setSelectedOperations(selected);
//     setCalculationResults(null);
//   };

//   const calculateResults = () => {
//     if (selectedOperations.length === 0) return;

//     const p = probabilities;
//     const pA = p.aAndB + p.aAndNotB;
//     const pB = p.aAndB + p.notAAndB;
//     const pNotA = p.notAAndB + p.notAAndNotB;
//     const pNotB = p.aAndNotB + p.notAAndNotB;

//     const results = selectedOperations.map(op => {
//       switch (op) {
//         case 'AuB':
//           return {
//             id: op,
//             result: pA + pB - p.aAndB
//           };
//         case 'AuNotB':
//           return {
//             id: op,
//             result: pA + pNotB - p.aAndNotB
//           };
//         case 'NotAuB':
//           return {
//             id: op,
//             result: pNotA + pB - p.notAAndB
//           };
//         case 'NotAuNotB':
//           return {
//             id: op,
//             result: pNotA + pNotB - p.notAAndNotB
//           };
//         case 'AgivenB':
//           return {
//             id: op,
//             result: p.aAndB / pB
//           };
//         case 'AgivenNotB':
//           return {
//             id: op,
//             result: p.aAndNotB / pNotB
//           };
//         case 'BgivenA':
//           return {
//             id: op,
//             result: p.aAndB / pA
//           };
//         case 'BgivenNotA':
//           return {
//             id: op,
//             result: p.notAAndB / pNotA
//           };
//         case 'indepTest':
//           return {
//             id: op,
//             result: {
//               actual: p.aAndB,
//               expected: pA * pB
//             }
//           };
//         case 'oddsA':
//           return {
//             id: op,
//             result: pA / pNotA
//           };
//         case 'oddsB':
//           return {
//             id: op,
//             result: pB / pNotB
//           };
//         case 'oddsRatio':
//           return {
//             id: op,
//             result: (p.aAndB * p.notAAndNotB) / (p.aAndNotB * p.notAAndB)
//           };
//         default:
//           return null;
//       }
//     }).filter(Boolean);

//     setCalculationResults(results);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={{...styles.tableArea, transform: 'scale(0.9)'}}>
//         <JointProbabilityTable 
//           probabilities={probabilities}
//           onUpdate={handleProbabilityChange}
//         />
//       </div>
      
//       <div style={{...styles.controlsArea, transform: 'scale(0.9)'}}>
//         <ControlPanel2 
//           sections={initialSections}
//           onChange={handleOperationsChange}
//           title="Probability Calculations"
//         />
//       </div>

//       <div style={{...styles.displayArea, transform: 'scale(0.9)'}}>
//         {selectedOperations.length > 0 && (
//           <button 
//             style={styles.calculateButton}
//             onClick={calculateResults}
//           >
//             Calculate
//           </button>
//         )}
        
//         {calculationResults && (
//           <CalculationsDisplay 
//             calculationResults={calculationResults}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProbabilityCalculator;