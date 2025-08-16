import { useState } from 'react';

// DNFConverter and CNFConverter would be imported from separate files
import DNFConverter from './DNFConverter';
import CNFConverter from './CNFConverter';



function NormalFormsConverter({ dnfExplanations, cnfExplanations }) {
  const [activeTab, setActiveTab] = useState('dnf');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Normal Forms Converter</h1> */}
      
      {/* Tabs */}
      <div style={{ marginBottom: '20px', borderBottom: '2px solid #eee' }}>
        <button
          onClick={() => setActiveTab('dnf')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'dnf' ? '2px solid #4a90e2' : 'none',
            color: activeTab === 'dnf' ? '#4a90e2' : '#666',
            cursor: 'pointer',
            marginBottom: '-2px'
          }}
        >
          DNF Converter
        </button>
        <button
          onClick={() => setActiveTab('cnf')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'cnf' ? '2px solid #4a90e2' : 'none',
            color: activeTab === 'cnf' ? '#4a90e2' : '#666',
            cursor: 'pointer',
            marginBottom: '-2px'
          }}
        >
          CNF Converter
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'dnf' ? 
          <DNFConverter explanations={dnfExplanations} /> : 
          <CNFConverter explanations={cnfExplanations} />
        }
      </div>
    </div>
  );
}

export default NormalFormsConverter;