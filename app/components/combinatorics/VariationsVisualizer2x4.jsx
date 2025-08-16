// import React, { useState, useEffect } from 'react';

// const VariationsVisualizer2x4 = () => {
//   const [step, setStep] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [useColors, setUseColors] = useState(true);
//   const [explanations, setExplanations] = useState([]);
//   const options = ['A', 'B'];
//   const colors = ['#ff9999', '#99ff99'];
//   const cells = 4;

//   const styles = {
//     card: {
//       width: '100%',
//       maxWidth: '800px',
//       margin: '0 auto',
//       backgroundColor: '#ffffff',
//       borderRadius: '8px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     cardHeader: {
//       padding: '16px',
//       borderBottom: '1px solid #e5e7eb',
//       marginBottom: '0px',
//     },
//     cardTitle: {
//       margin: '0',
//       fontSize: '1.5rem',
//       fontWeight: '600',
//     },
//     instructions: {
//       marginTop: '8px',
//       fontSize: '0.975rem',
//       color: 'black',
//       fontWeight: '500',
//     },
//     cardContent: {
//       padding: '16px',
//     },
//     topContainer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '10px',
//     },
//     button: {
//       padding: '6px 12px',
//       backgroundColor: '#3b82f6',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//       fontSize: '0.9rem',
//       margin: '0 2px',
//     },
//     switchContainer: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//     switch: {
//       position: 'relative',
//       display: 'inline-block',
//       width: '36px',
//       height: '20px',
//       marginLeft: '8px',
//     },
//     switchInput: {
//       opacity: 0,
//       width: 0,
//       height: 0,
//     },
//     switchSlider: {
//       position: 'absolute',
//       cursor: 'pointer',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: '#ccc',
//       transition: '.4s',
//       borderRadius: '20px',
//     },
//     switchSliderBefore: {
//       position: 'absolute',
//       content: '""',
//       height: '16px',
//       width: '16px',
//       right: '2px',
//       bottom: '2px',
//       backgroundColor: 'white',
//       transition: '.4s',
//       borderRadius: '50%',
//     },
//     switchSliderChecked: {
//       backgroundColor: '#2196F3',
//     },
//     switchSliderBeforeChecked: {
//       transform: 'translateX(-16px)',
//     },
//     contentContainer: {
//       display: 'flex',
//       marginTop: '10px',
//     },
//     visualizationContainer: {
//       flex: '0 0 70%',
//     },
//     explanationContainer: {
//       flex: '0 0 30%',
//       marginLeft: '20px',
//       fontSize: '0.9rem',
//     },
//   };

//   const renderBall = (letter, color) => (
//     <div style={{
//       width: '30px',
//       height: '30px',
//       borderRadius: '50%',
//       backgroundColor: useColors ? color : '#f0f0f0',
//       color: useColors ? 'transparent' : 'black',
//       border: useColors ? 'none' : '1px solid black',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       margin: '2px',
//       fontWeight: 'bold',
//       fontSize: '0.8rem',
//     }}>
//       {useColors ? '' : letter}
//     </div>
//   );

//   const renderInitialSet = () => (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       {options.map((option, index) => renderBall(option, colors[index]))}
//     </div>
//   );

//   const renderVariations = () => {
//     const variations = [];
//     for (let i = 0; i < Math.pow(2, step); i++) {
//       const variation = [];
//       for (let j = 0; j < cells; j++) {
//         if (j < step) {
//           variation.push((i >> (step - 1 - j)) & 1);
//         } else {
//           variation.push(null);
//         }
//       }
//       variations.push(variation);
//     }

//     return (
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'row', 
//         justifyContent: 'flex-start',
//         width: '100%',
//         maxWidth: '760px',
//         margin: '0 auto',
//         overflowX: 'auto'
//       }}>
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginRight: '20px',
//         }}>
//           {[...Array(cells)].map((_, cellIndex) => (
//             <div key={cellIndex} style={{ 
//               fontWeight: 'bold', 
//               marginBottom: '10px',
//               height: '40px',
//               display: 'flex',
//               alignItems: 'center',
//             }}>
//               Cell {cellIndex + 1}
//             </div>
//           ))}
//         </div>
//         {variations.map((variation, varIndex) => (
//           <div key={varIndex} style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: '0 5px',
//           }}>
//             {variation.map((item, itemIndex) => (
//               <div key={itemIndex} style={{ 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center',
//                 margin: '2px 0',
//                 padding: '2px',
//                 border: '1px solid #ccc',
//                 borderRadius: '4px',
//                 height: '40px',
//                 width: '40px',
//               }}>
//                 {item !== null && renderBall(options[item], colors[item])}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const reset = () => {
//     setStep(0);
//     setIsPlaying(false);
//     setExplanations([]);
//   };

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     let timer;
//     if (isPlaying) {
//       timer = setInterval(() => {
//         if (step < cells) {
//           setStep(prevStep => prevStep + 1);
//           addExplanation(step + 1);
//         } else {
//           setIsPlaying(false);
//         }
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isPlaying, step]);

//   const handleNext = () => {
//     if (step < cells) {
//       setStep(prevStep => prevStep + 1);
//       addExplanation(step + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (step > 0) {
//       setStep(prevStep => prevStep - 1);
//       setExplanations(prev => prev.slice(0, -1));
//     }
//   };

//   const addExplanation = (currentStep) => {
//     const newExplanation = `Step ${currentStep}: We select an item for cell ${currentStep}. For each previous variation, we now have 2 new variations.`;
//     setExplanations(prev => [...prev, newExplanation]);
//   };

//   return (
//     <div style={styles.card}>
//       <div style={styles.cardHeader}>
//         <h2 style={styles.cardTitle}>Variations with Repetition (2 items, 4 cells)</h2>
//         <p style={styles.instructions}>
//           Watch as we build variations with 2 items in 4 cells.<br />
//           Each step fills one more cell in the variations.
//         </p>
//       </div>
//       <div style={styles.cardContent}>
//         <div style={styles.topContainer}>
//           <div>
//             <button style={styles.button} onClick={handlePrevious} disabled={step === 0}>Previous</button>
//             <button style={styles.button} onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
//             <button style={styles.button} onClick={handleNext} disabled={step === cells}>Next</button>
//             <button style={styles.button} onClick={reset}>Reset</button>
//           </div>
//           {renderInitialSet()}
//           <div style={styles.switchContainer}>
//             <span>{useColors ? "Use Letters" : "Use Colors"}</span>
//             <label style={styles.switch}>
//               <input
//                 type="checkbox"
//                 checked={useColors}
//                 onChange={() => setUseColors(!useColors)}
//                 style={styles.switchInput}
//               />
//               <span style={{
//                 ...styles.switchSlider,
//                 ...(useColors ? styles.switchSliderChecked : {})
//               }}>
//                 <span style={{
//                   ...styles.switchSliderBefore,
//                   ...(useColors ? styles.switchSliderBeforeChecked : {})
//                 }}></span>
//               </span>
//             </label>
//           </div>
//         </div>
//         <h3 style={{ margin: '10px 0' }}>Step {step} of {cells}</h3>
//         <div style={styles.contentContainer}>
//           <div style={styles.visualizationContainer}>
//             {renderVariations()}
//           </div>
//           <div style={styles.explanationContainer}>
//             {explanations.map((explanation, index) => (
//               <p key={index}>{explanation}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VariationsVisualizer2x4;

import React, { useState, useEffect } from 'react';

const VariationsVisualizer2x4 = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [useColors, setUseColors] = useState(true);
  const [explanations, setExplanations] = useState([]);
  const options = ['A', 'B'];
  const colors = ['#ff9999', '#99ff99'];
  const cells = 4;

  const styles = {
    card: {
      width: '100%',
      maxWidth: '1000px',  // Increased from 800px to 1000px
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardHeader: {
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '0px',
    },
    cardTitle: {
      margin: '0',
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    instructions: {
      marginTop: '8px',
      fontSize: '0.975rem',
      color: 'black',
      fontWeight: '500',
    },
    cardContent: {
      padding: '16px',
    },
    topContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    button: {
      padding: '6px 12px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      fontSize: '0.9rem',
      margin: '0 2px',
    },
    switchContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    switch: {
      position: 'relative',
      display: 'inline-block',
      width: '36px',
      height: '20px',
      marginLeft: '8px',
    },
    switchInput: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    switchSlider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ccc',
      transition: '.4s',
      borderRadius: '20px',
    },
    switchSliderBefore: {
      position: 'absolute',
      content: '""',
      height: '16px',
      width: '16px',
      right: '2px',
      bottom: '2px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
    },
    switchSliderChecked: {
      backgroundColor: '#2196F3',
    },
    switchSliderBeforeChecked: {
      transform: 'translateX(-16px)',
    },
    contentContainer: {
      display: 'flex',
      marginTop: '10px',
    },
    visualizationContainer: {
      flex: '0 0 80%',  // Increased from 70% to 80%
    },
    explanationContainer: {
      flex: '0 0 20%',  // Reduced from 30% to 20%
      marginLeft: '20px',
      fontSize: '0.9rem',
    },
  };

  const renderBall = (letter, color) => (
    <div style={{
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: useColors ? color : '#f0f0f0',
      color: useColors ? 'transparent' : 'black',
      border: useColors ? 'none' : '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2px',
      fontWeight: 'bold',
      fontSize: '0.8rem',
    }}>
      {useColors ? '' : letter}
    </div>
  );

  const renderInitialSet = () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {options.map((option, index) => renderBall(option, colors[index]))}
    </div>
  );

  const renderVariations = () => {
    const variations = [];
    for (let i = 0; i < Math.pow(2, step); i++) {
      const variation = [];
      for (let j = 0; j < cells; j++) {
        if (j < step) {
          variation.push((i >> (step - 1 - j)) & 1);
        } else {
          variation.push(null);
        }
      }
      variations.push(variation);
    }

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        width: '100%',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: '20px',
        }}>
          {[...Array(cells)].map((_, cellIndex) => (
            <div key={cellIndex} style={{ 
              fontWeight: 'bold', 
              marginBottom: '10px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
            }}>
              Cell {cellIndex + 1}
            </div>
          ))}
        </div>
        {variations.map((variation, varIndex) => (
          <div key={varIndex} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 5px',
          }}>
            {variation.map((item, itemIndex) => (
              <div key={itemIndex} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '2px 0',
                padding: '2px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '40px',
                width: '40px',
              }}>
                {item !== null && renderBall(options[item], colors[item])}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const reset = () => {
    setStep(0);
    setIsPlaying(false);
    setExplanations([]);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        if (step < cells) {
          setStep(prevStep => prevStep + 1);
          addExplanation(step + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, step]);

  const handleNext = () => {
    if (step < cells) {
      setStep(prevStep => prevStep + 1);
      addExplanation(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
      setExplanations(prev => prev.slice(0, -1));
    }
  };

  const addExplanation = (currentStep) => {
    const newExplanation = `Step ${currentStep}: We select an item for cell ${currentStep}. For each previous variation, we now have 2 new variations.`;
    setExplanations(prev => [...prev, newExplanation]);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Variations with Repetition (2 items, 4 cells)</h2>
        <p style={styles.instructions}>
          Watch as we build variations with 2 items in 4 cells.<br />
          Each step fills one more cell in the variations.
        </p>
      </div>
      <div style={styles.cardContent}>
        <div style={styles.topContainer}>
          <div>
            <button style={styles.button} onClick={handlePrevious} disabled={step === 0}>Previous</button>
            <button style={styles.button} onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button style={styles.button} onClick={handleNext} disabled={step === cells}>Next</button>
            <button style={styles.button} onClick={reset}>Reset</button>
          </div>
          {renderInitialSet()}
          <div style={styles.switchContainer}>
            <span>{useColors ? "Use Letters" : "Use Colors"}</span>
            <label style={styles.switch}>
              <input
                type="checkbox"
                checked={useColors}
                onChange={() => setUseColors(!useColors)}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.switchSlider,
                ...(useColors ? styles.switchSliderChecked : {})
              }}>
                <span style={{
                  ...styles.switchSliderBefore,
                  ...(useColors ? styles.switchSliderBeforeChecked : {})
                }}></span>
              </span>
            </label>
          </div>
        </div>
        <h3 style={{ margin: '10px 0' }}>Step {step} of {cells}</h3>
        <div style={styles.contentContainer}>
          <div style={styles.visualizationContainer}>
            {renderVariations()}
          </div>
          <div style={styles.explanationContainer}>
            {explanations.map((explanation, index) => (
              <p key={index}>{explanation}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariationsVisualizer2x4;