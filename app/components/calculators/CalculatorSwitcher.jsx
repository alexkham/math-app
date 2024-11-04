// // // import React, { useState } from 'react';
// // // import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
// // // import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

// // // const styles = {
// // //   container: {
// // //     width: '100%',
// // //     maxWidth: '480px',
// // //     margin: '0 auto'
// // //   },
// // //   radioGroup: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '24px',
// // //     padding: '16px',
// // //     background: 'white',
// // //     borderRadius: '7px',
// // //     border: '1px solid #ddd',
// // //     marginBottom: '32px'
// // //   },
// // //   label: {
// // //     position: 'relative',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     cursor: 'pointer'
// // //   },
// // //   hiddenInput: {
// // //     position: 'absolute',
// // //     opacity: 0,
// // //     cursor: 'pointer',
// // //     height: 0,
// // //     width: 0
// // //   },
// // //   radioCircle: {
// // //     width: '16px',
// // //     height: '16px',
// // //     border: '2px solid #ccc',
// // //     borderRadius: '50%',
// // //     transition: 'all 0.2s ease-in-out'
// // //   },
// // //   radioCircleChecked: {
// // //     border: '8px solid #1d6bd8'
// // //   },
// // //   radioText: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px',
// // //     fontWeight: 500,
// // //     color: '#555'
// // //   },
// // //   radioTextChecked: {
// // //     color: '#1d6bd8'
// // //   }
// // // };

// // // const CalculatorSwitcher = ({ children }) => {
// // //   const [activeCalculator, setActiveCalculator] = useState('standard');

// // //   const calculatorOptions = [
// // //     { id: 'standard', label: 'Standard Trigonometry' },
// // //     { id: 'inverse', label: 'Inverse Trigonometry' }
// // //   ];

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.radioGroup}>
// // //         {calculatorOptions.map((option) => (
// // //           <label
// // //             key={option.id}
// // //             style={styles.label}
// // //           >
// // //             <input
// // //               type="radio"
// // //               name="calculator-type"
// // //               value={option.id}
// // //               checked={activeCalculator === option.id}
// // //               onChange={(e) => setActiveCalculator(e.target.value)}
// // //               style={styles.hiddenInput}
// // //             />
// // //             <div 
// // //               style={{
// // //                 ...styles.radioCircle,
// // //                 ...(activeCalculator === option.id ? styles.radioCircleChecked : {})
// // //               }} 
// // //             />
// // //             <span 
// // //               style={{
// // //                 ...styles.radioText,
// // //                 ...(activeCalculator === option.id ? styles.radioTextChecked : {})
// // //               }}
// // //             >
// // //               {option.label}
// // //             </span>
// // //           </label>
// // //         ))}
// // //       </div>

// // //       <div>
// // //         {React.Children.map(children, (child) => {
// // //           if (
// // //             (activeCalculator === 'standard' && child.type === TrigoCalculator) ||
// // //             (activeCalculator === 'inverse' && child.type === InverseTrigoCalculator)
// // //           ) {
// // //             return child;
// // //           }
// // //           return null;
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculatorSwitcher;
// // // import React, { useState } from 'react';
// // // import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
// // // import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';



// // // const styles = {
// // //   container: {
// // //     width: '100%',
// // //     // maxWidth: '480px',
// // //     margin: '0 auto'
// // //   },
// // //   radioGroup: {
// // //     display: 'flex', 
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '24px',
// // //     padding: '16px',
// // //     background: 'white',
// // //     borderRadius: '7px',
// // //     border: '1px solid #ddd',
// // //     marginBottom: '32px'
// // //   },
// // //   label: {
// // //     position: 'relative',
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     cursor: 'pointer'
// // //   },
// // //   hiddenInput: {
// // //     position: 'absolute',
// // //     opacity: 0,
// // //     cursor: 'pointer',
// // //     height: 0,
// // //     width: 0
// // //   },
// // //   radioCircle: {
// // //     width: '16px',
// // //     height: '16px',
// // //     border: '2px solid #ccc',
// // //     borderRadius: '50%',
// // //     transition: 'all 0.2s ease-in-out'
// // //   },
// // //   radioCircleChecked: {
// // //     border: '8px solid #1d6bd8'
// // //   },
// // //   radioText: {
// // //     marginLeft: '8px',
// // //     fontSize: '14px',
// // //     fontWeight: 500,
// // //     color: '#555'
// // //   },
// // //   radioTextChecked: {
// // //     color: '#1d6bd8'
// // //   }
// // // };

// // // const CalculatorSwitcher = ({ children }) => {
// // //   const [activeCalculator, setActiveCalculator] = useState('standard');

// // //   const calculatorOptions = [
// // //     { id: 'standard', label: 'Standard Trigonometry' },
// // //     { id: 'inverse', label: 'Inverse Trigonometry' }
// // //   ];

// // //   return (
// // //     <div style={styles.container}>
// // //       <div style={styles.radioGroup}>
// // //         {calculatorOptions.map((option) => (
// // //           <label
// // //             key={option.id}
// // //             style={styles.label}
// // //           >
// // //             <input
// // //               type="radio"
// // //               name="calculator-type"
// // //               value={option.id}
// // //               checked={activeCalculator === option.id}
// // //               onChange={(e) => setActiveCalculator(e.target.value)}
// // //               style={styles.hiddenInput}
// // //             />
// // //             <div 
// // //               style={{
// // //                 ...styles.radioCircle,
// // //                 ...(activeCalculator === option.id ? styles.radioCircleChecked : {})
// // //               }} 
// // //             />
// // //             <span 
// // //               style={{
// // //                 ...styles.radioText,
// // //                 ...(activeCalculator === option.id ? styles.radioTextChecked : {})
// // //               }}
// // //             >
// // //               {option.label}
// // //             </span>
// // //           </label>
// // //         ))}
// // //       </div>

// // //       <div>
// // //         {React.Children.map(children, (child) => {
// // //           if (
// // //             (activeCalculator === 'standard' && child.type.name === 'TrigoCalculator') ||
// // //             (activeCalculator === 'inverse' && child.type.name === 'InverseTrigoCalculator')
// // //           ) {
// // //             return child;
// // //           }
// // //           return null;
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CalculatorSwitcher;
// // // import React, { useState } from 'react';
// // // import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
// // // import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

// // // const styles = {
// // //  container: {
// // //    width: '100%',
// // //    margin: '0'
// // //  },
// // //  radioGroup: {
// // //    display: 'flex', 
// // //    alignItems: 'center',
// // //    justifyContent: 'center',
// // //    gap: '24px',
// // //    padding: '10px',
// // //    width: '500px',
// // //    background: 'white',
// // //    borderRadius: '7px',
// // //    border: '2px solid #ddd',
// // //    margin: '0 auto 0px',
// // //    marginTop:'-10px',
// // //    marginBottom:'-20px'
   
// // //  },
// // //  label: {
// // //    position: 'relative',
// // //    display: 'flex',
// // //    alignItems: 'center',
// // //    cursor: 'pointer',
// // //    fontSize:'30'

// // //  },
// // //  hiddenInput: {
// // //    position: 'absolute',
// // //    opacity: 0,
// // //    cursor: 'pointer',
// // //    height: 0,
// // //    width: 0
// // //  },
// // //  radioCircle: {
// // //    width: '16px',
// // //    height: '16px',
// // //    border: '2px solid #ccc',
// // //    borderRadius: '50%',
// // //    transition: 'all 0.2s ease-in-out'
// // //  },
// // //  radioCircleChecked: {
// // //    border: '8px solid #1d6bd8'
// // //  },
// // //  radioText: {
// // //    marginLeft: '8px',
// // //    fontSize: '16px',
// // //    fontWeight: 700,
// // //    color: '#555'
// // //  },
// // //  radioTextChecked: {
// // //    color: '#1d6bd8'
// // //  }
// // // };

// // // const CalculatorSwitcher = ({ children, scale = 1 }) => {
// // //  const [activeCalculator, setActiveCalculator] = useState('standard');

// // //  const calculatorOptions = [
// // //    { id: 'standard', label: 'Standard Trigonometry' },
// // //    { id: 'inverse', label: 'Inverse Trigonometry' }
// // //  ];

// // //  return (
// // //    <div style={styles.container}>
// // //      <div style={styles.radioGroup}>
// // //        {calculatorOptions.map((option) => (
// // //          <label
// // //            key={option.id}
// // //            style={styles.label}
// // //          >
// // //            <input
// // //              type="radio"
// // //              name="calculator-type"
// // //              value={option.id}
// // //              checked={activeCalculator === option.id}
// // //              onChange={(e) => setActiveCalculator(e.target.value)}
// // //              style={styles.hiddenInput}
// // //            />
// // //            <div 
// // //              style={{
// // //                ...styles.radioCircle,
// // //                ...(activeCalculator === option.id ? styles.radioCircleChecked : {})
// // //              }} 
// // //            />
// // //            <span 
// // //              style={{
// // //                ...styles.radioText,
// // //                ...(activeCalculator === option.id ? styles.radioTextChecked : {})
// // //              }}
// // //            >
// // //              {option.label}
// // //            </span>
// // //          </label>
// // //        ))}
// // //      </div>

// // //      <div style={{transform: `scale(${scale})`}}>
// // //        {React.Children.map(children, (child) => {
// // //          if (
// // //            (activeCalculator === 'standard' && child.type.name === 'TrigoCalculator') ||
// // //            (activeCalculator === 'inverse' && child.type.name === 'InverseTrigoCalculator')
// // //          ) {
// // //            return child;
// // //          }
// // //          return null;
// // //        })}
// // //      </div>
// // //    </div>
// // //  );
// // // };

// // // export default CalculatorSwitcher;

// // import React, { useState } from 'react';
// // import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
// // import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

// // const styles = {
// //  container: {
// //    width: '100%',
// //    margin: '0'
// //  },
// //  radioGroup: {
// //    display: 'flex',
// //    alignItems: 'center', 
// //    justifyContent: 'center',
// //    gap: '12px',
// //    padding: '8px',
// //    width: '400px',
// //    background: 'white',
// //    borderRadius: '7px',
// //    border: '2px solid #ddd',
// //    margin: '0 auto 0px',
// //    marginTop:'-10px',
// //    marginBottom:'-20px'
// //  },
// //  label: {
// //    position: 'relative',
// //    display: 'flex',
// //    alignItems: 'center',
// //    cursor: 'pointer',
// //    padding: '4px 8px'
// //  },
// //  hiddenInput: {
// //    position: 'absolute',
// //    opacity: 0,
// //    cursor: 'pointer',
// //    height: 0,
// //    width: 0
// //  },
// //  radioText: {
// //    fontSize: '16px',
// //    fontWeight: 700,
// //    color: '#555',
// //    transition: 'all 0.2s ease-in-out'
// //  },
// //  radioTextChecked: {
// //    color: '#1d6bd8'
// //  }
// // };

// // const CalculatorSwitcher = ({ children, scale = 1 }) => {
// //  const [activeCalculator, setActiveCalculator] = useState('standard');

// //  const calculatorOptions = [
// //    { id: 'standard', label: 'Standard Trigonometry' },
// //    { id: 'inverse', label: 'Inverse Trigonometry' }
// //  ];

// //  return (
// //    <div style={styles.container}>
// //      <div style={styles.radioGroup}>
// //        {calculatorOptions.map((option) => (
// //          <label
// //            key={option.id}
// //            style={styles.label}
// //          >
// //            <input
// //              type="radio"
// //              name="calculator-type"
// //              value={option.id}
// //              checked={activeCalculator === option.id}
// //              onChange={(e) => setActiveCalculator(e.target.value)}
// //              style={styles.hiddenInput}
// //            />
// //            <span 
// //              style={{
// //                ...styles.radioText,
// //                ...(activeCalculator === option.id ? styles.radioTextChecked : {})
// //              }}
// //            >
// //              {option.label}
// //            </span>
// //          </label>
// //        ))}
// //      </div>

// //      <div style={{transform: `scale(${scale})`}}>
// //        {React.Children.map(children, (child) => {
// //          if (
// //            (activeCalculator === 'standard' && child.type.name === 'TrigoCalculator') ||
// //            (activeCalculator === 'inverse' && child.type.name === 'InverseTrigoCalculator')
// //          ) {
// //            return child;
// //          }
// //          return null;
// //        })}
// //      </div>
// //    </div>
// //  );
// // };

// // export default CalculatorSwitcher;

// import React, { useState } from 'react';
// import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
// import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

// const styles = {
//  container: {
//    width: '100%',
//    margin: '0'
//  },
//  radioGroup: {
//    display: 'flex',
//    alignItems: 'center', 
//    justifyContent: 'center',
//    gap: '2px',
//    padding: '4px',
//    width: '500px',
//    background: 'white',
//    borderRadius: '7px',
//    border: '1px solid #ddd',
//    margin: '0 auto 0px',
//    marginTop:'-10px',
//    marginBottom:'-20px'
//  },
//  label: {
//    position: 'relative',
//    display: 'flex',
//    alignItems: 'center',
//    cursor: 'pointer',
//    padding: '14px 18px',
//    borderRadius: '2px'
//  },
//  hiddenInput: {
//    position: 'absolute',
//    opacity: 0,
//    cursor: 'pointer',
//    height: 0,
//    width: 0
//  },
//  radioText: {
//    fontSize: '14px',
//    fontWeight: 700,
// //    color: '#555',
//    transition: 'all 0.2s ease-in-out'
//  },
//  activeLabel: {
//    background: '#1d6bd8',
//    color: '#f5f5f5'
//  },
//  inactiveLabel: {
//    background: '#f5f5f5',
//    color: '#555'
//  }
// };

// const CalculatorSwitcher = ({ children, scale = 1 }) => {
//  const [activeCalculator, setActiveCalculator] = useState('standard');

//  const calculatorOptions = [
//    { id: 'standard', label: 'Standard Trigonometry Functions' },
//    { id: 'inverse', label: 'Inverse Trigonometry Functions' }
//  ];

//  return (
//    <div style={styles.container}>
//      <div style={styles.radioGroup}>
//        {calculatorOptions.map((option) => (
//          <label
//            key={option.id}
//            style={{
//              ...styles.label,
//              ...(activeCalculator === option.id ? styles.activeLabel : styles.inactiveLabel)
//            }}
//          >
//            <input
//              type="radio"
//              name="calculator-type"
//              value={option.id}
//              checked={activeCalculator === option.id}
//              onChange={(e) => setActiveCalculator(e.target.value)}
//              style={styles.hiddenInput}
//            />
//            <span style={styles.radioText}>
//              {option.label}
//            </span>
//          </label>
//        ))}
//      </div>

//      <div style={{transform: `scale(${scale})`}}>
//        {React.Children.map(children, (child) => {
//          if (
//            (activeCalculator === 'standard' && child.type.name === 'TrigoCalculator') ||
//            (activeCalculator === 'inverse' && child.type.name === 'InverseTrigoCalculator')
//          ) {
//            return child;
//          }
//          return null;
//        })}
//      </div>
//    </div>
//  );
// };

// export default CalculatorSwitcher;

import React, { useState } from 'react';
import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

const styles = {
  container: {
    width: '100%',
    margin: '0'
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '2px',
    padding: '4px',
    width: '500px',
    background: 'white',
    borderRadius: '7px',
    border: '1px solid #ddd',
    margin: '0 auto 0px',
    marginTop: '-10px',
    marginBottom: '-20px'
  },
  label: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '14px 18px',
    borderRadius: '2px'
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0
  },
  radioText: {
    fontSize: '14px',
    fontWeight: 700,
    transition: 'all 0.2s ease-in-out'
  },
  activeLabel: {
    background: '#1d6bd8',
    color: '#f5f5f5'
  },
  inactiveLabel: {
    background: '#f5f5f5',
    color: '#555'
  }
};

const CalculatorSwitcher = ({ standardExplanations, inverseExplanations, scale = 1 }) => {
  const [activeCalculator, setActiveCalculator] = useState('standard');

  const calculatorOptions = [
    { id: 'standard', label: 'Standard Trigonometry Functions' },
    { id: 'inverse', label: 'Inverse Trigonometry Functions' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.radioGroup}>
        {calculatorOptions.map((option) => (
          <label
            key={option.id}
            style={{
              ...styles.label,
              ...(activeCalculator === option.id ? styles.activeLabel : styles.inactiveLabel)
            }}
          >
            <input
              type="radio"
              name="calculator-type"
              value={option.id}
              checked={activeCalculator === option.id}
              onChange={(e) => setActiveCalculator(e.target.value)}
              style={styles.hiddenInput}
            />
            <span style={styles.radioText}>
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <div style={{ transform: `scale(${scale})` }}>
        {activeCalculator === 'standard' ? (
          <TrigoCalculator explanations={standardExplanations} />
        ) : (
          <InverseTrigoCalculator explanations={inverseExplanations} />
        )}
      </div>
    </div>
  );
};

export default CalculatorSwitcher;