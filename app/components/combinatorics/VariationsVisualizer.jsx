
import React, { useState, useEffect } from 'react';

const VariationsVisualizer = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [useColors, setUseColors] = useState(true);
  const [explanations, setExplanations] = useState([]);
  const options = ['A', 'B', 'C', 'D'];
  const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];

  const styles = {
    card: {
      width: '100%',
      maxWidth: '800px',
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
      flex: '0 0 70%',
    },
    explanationContainer: {
      flex: '0 0 30%',
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

  const renderStep1 = () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto'
    }}>
      {options.map((option, index) => (
        <div key={index} style={{
          borderBottom: '1px solid black',
          padding: '5px',
          width: '100%',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {index < step && renderBall(option, colors[index])}
        </div>
      ))}
    </div>
  );

  const renderStep2 = () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '100%',
      maxWidth: '760px',
      margin: '0 auto'
    }}>
      {options.map((firstOption, firstIndex) => (
        <div key={firstIndex} style={{
          borderBottom: '1px solid black',
          padding: '5px',
          width: '100%',
          height: '50px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: '10px',
        }}>
          {options.map((secondOption, secondIndex) => (
            <div key={secondIndex} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              margin: '2px 10px',
              padding: '2px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '40px',
            }}>
              {renderBall(firstOption, colors[firstIndex])}
              {step > secondIndex && renderBall(secondOption, colors[secondIndex])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const reset = () => {
    setStep(0);
    setIsPlaying(false);
    setCurrentStage(1);
    setExplanations([]);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        if (currentStage === 1 && step < options.length) {
          setStep(prevStep => prevStep + 1);
        } else if (currentStage === 1 && step >= options.length) {
          setCurrentStage(2);
          setStep(0);
          addExplanation(2);
        } else if (currentStage === 2 && step < options.length) {
          setStep(prevStep => prevStep + 1);
        } else {
          setIsPlaying(false);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, step, currentStage]);

  const handleNext = () => {
    if (currentStage === 1 && step < options.length) {
      setStep(prevStep => prevStep + 1);
      if (step === 0) addExplanation(1);
    } else if (currentStage === 1 && step >= options.length) {
      setCurrentStage(2);
      setStep(0);
      addExplanation(2);
    } else if (currentStage === 2 && step < options.length) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStage === 2 && step > 0) {
      setStep(prevStep => prevStep - 1);
    } else if (currentStage === 2 && step === 0) {
      setCurrentStage(1);
      setStep(options.length);
      setExplanations(prev => prev.slice(0, -1));
    } else if (currentStage === 1 && step > 0) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const addExplanation = (stage) => {
    const newExplanation = stage === 1
      ? "Step 1: We select the first ball. This represents our first choice."
      : "Step 2: For each chosen first ball, we select one of the 4 balls. As the selections are independent and repetitions allowed, for each type of first ball, there exist 4 different variations.";
    setExplanations(prev => [...prev, newExplanation]);
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>Variations with Repetition (2 of 4)</h2>
        <p style={styles.instructions}>
          Watch as we build variations step by step.<br />
          Each step adds one more item to the variations.
        </p>
      </div>
      <div style={styles.cardContent}>
        <div style={styles.topContainer}>
          <div>
            <button style={styles.button} onClick={handlePrevious} disabled={currentStage === 1 && step === 0}>Previous</button>
            <button style={styles.button} onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button style={styles.button} onClick={handleNext} disabled={currentStage === 2 && step === options.length}>Next</button>
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
        <h3 style={{ margin: '10px 0' }}>Step {currentStage} of 2</h3>
        <div style={styles.contentContainer}>
          <div style={styles.visualizationContainer}>
            {currentStage === 1 ? renderStep1() : renderStep2()}
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

export default VariationsVisualizer;