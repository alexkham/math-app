// import React, { useState } from 'react';
// import VennExplorer from './VennExplorer';
// import VennExplorer2 from './VennExplorer2';

// const VennSelectorFrame = ({ problemsData2 = [], problemsData3 = [] }) => {
//   const [selectedMode, setSelectedMode] = useState(3); // Default to 3 parameters

//   const styles = {
//     container: {
//       width: '100%',
//       minHeight: '100vh'
//     },
//     selector: {
//       display: 'flex',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f8fafc',
//       borderBottom: '1px solid #e2e8f0'
//     },
//     button: {
//       padding: '10px 20px',
//       margin: '0 5px',
//       border: 'none',
//       borderRadius: '6px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       fontWeight: '500'
//     },
//     buttonActive: {
//       backgroundColor: '#2563eb',
//       color: 'white'
//     },
//     buttonInactive: {
//       backgroundColor: 'white',
//       color: '#374151',
//       border: '1px solid #d1d5db'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.selector}>
//         <button
//           onClick={() => setSelectedMode(2)}
//           style={{
//             ...styles.button,
//             ...(selectedMode === 2 ? styles.buttonActive : styles.buttonInactive)
//           }}
//         >
//           2 Parameters
//         </button>
//         <button
//           onClick={() => setSelectedMode(3)}
//           style={{
//             ...styles.button,
//             ...(selectedMode === 3 ? styles.buttonActive : styles.buttonInactive)
//           }}
//         >
//           3 Parameters
//         </button>
//       </div>
      
//       {selectedMode === 2 ? (
//         <VennExplorer2 problemsData={problemsData2} />
//       ) : (
//         <VennExplorer problemsData={problemsData3} />
//       )}
//     </div>
//   );
// };

// export default VennSelectorFrame;


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import VennExplorer from './VennExplorer';
import VennExplorer2 from './VennExplorer2';

const VennSelectorFrame = ({ 
  modes = [],
  defaultMode = 3,
  problemsData2 = [], 
  problemsData3 = [],
  problemsData4 = []
}) => {
  const router = useRouter();
  const { view } = router.query;
  
  const getInitialMode = () => {
    if (view) {
      const found = modes.find(m => m.queryParam === view);
      if (found) return found.mode;
    }
    return defaultMode;
  };

  const [selectedMode, setSelectedMode] = useState(getInitialMode());

  useEffect(() => {
    if (view) {
      const found = modes.find(m => m.queryParam === view);
      if (found) {
        setSelectedMode(found.mode);
      }
    }
  }, [view, modes]);

  const handleModeChange = (queryParam, modeNumber) => {
    setSelectedMode(modeNumber);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, view: queryParam }
    }, undefined, { shallow: true });
  };

  const renderComponent = () => {
    switch(selectedMode) {
      case 2:
        return <VennExplorer2 problemsData={problemsData2} />;
      case 3:
        return <VennExplorer problemsData={problemsData3} />;
      case 4:
        return <VennExplorer problemsData={problemsData4} />;
      default:
        return <VennExplorer problemsData={problemsData3} />;
    }
  };

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
        {modes.map(({ queryParam, mode, label }) => (
          <button
            key={queryParam}
            onClick={() => handleModeChange(queryParam, mode)}
            style={{
              ...styles.button,
              ...(selectedMode === mode ? styles.buttonActive : styles.buttonInactive)
            }}
          >
            {label}
          </button>
        ))}
      </div>
      
      {renderComponent()}
    </div>
  );
};

export default VennSelectorFrame;