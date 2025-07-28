import React, { useState } from 'react';
import VennExplorer from './VennExplorer';
import VennExplorer2 from './VennExplorer2';

const VennSelectorFrame = ({ problemsData2 = [], problemsData3 = [] }) => {
  const [selectedMode, setSelectedMode] = useState(3); // Default to 3 parameters

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh'
    },
    selector: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e2e8f0'
    },
    button: {
      padding: '10px 20px',
      margin: '0 5px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500'
    },
    buttonActive: {
      backgroundColor: '#2563eb',
      color: 'white'
    },
    buttonInactive: {
      backgroundColor: 'white',
      color: '#374151',
      border: '1px solid #d1d5db'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.selector}>
        <button
          onClick={() => setSelectedMode(2)}
          style={{
            ...styles.button,
            ...(selectedMode === 2 ? styles.buttonActive : styles.buttonInactive)
          }}
        >
          2 Parameters
        </button>
        <button
          onClick={() => setSelectedMode(3)}
          style={{
            ...styles.button,
            ...(selectedMode === 3 ? styles.buttonActive : styles.buttonInactive)
          }}
        >
          3 Parameters
        </button>
      </div>
      
      {selectedMode === 2 ? (
        <VennExplorer2 problemsData={problemsData2} />
      ) : (
        <VennExplorer problemsData={problemsData3} />
      )}
    </div>
  );
};

export default VennSelectorFrame;