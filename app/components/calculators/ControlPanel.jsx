import React, { useState } from 'react';

const styles = {
  panel: {
    maxWidth: '700px',
    margin: '15px auto',
    backgroundColor: '#fff',
    borderRadius: '6px',
    border: '1px solid #ddd',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  },
  header: {
    padding: '12px 15px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  },
  headerTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333'
  },
  arrow: {
    transition: 'transform 0.3s ease'
  },
  content: {
    transition: 'max-height 0.3s ease-out',
    maxHeight: '1000px',
    overflow: 'hidden'
  },
  contentHidden: {
    maxHeight: '0'
  },
  section: {
    borderBottom: '1px solid #ddd'
  },
  sectionHeader: {
    padding: '10px 15px',
    backgroundColor: '#f8f8f8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  },
  sectionContent: {
    padding: '15px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    transition: 'all 0.2s ease'
  },
  buttonActive: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196F3',
    color: '#1976d2'
  }
};

const ControlPanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSections, setOpenSections] = useState({});
  const [activeButtons, setActiveButtons] = useState({});

  const togglePanel = () => setIsOpen(!isOpen);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleButton = (buttonId) => {
    setActiveButtons(prev => ({
      ...prev,
      [buttonId]: !prev[buttonId]
    }));
  };

  const sections = [
    {
      id: 'unions',
      title: 'Unions',
      buttons: [
        { id: 'AuB', label: 'P(A ∪ B)' },
        { id: 'AuNotB', label: 'P(A ∪ B̄)' },
        { id: 'NotAuB', label: 'P(Ā ∪ B)' },
        { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
      ]
    },
    {
      id: 'conditional',
      title: 'Conditional Probabilities',
      buttons: [
        { id: 'AgivenB', label: 'P(A|B)' },
        { id: 'AgivenNotB', label: 'P(A|B̄)' },
        { id: 'BgivenA', label: 'P(B|A)' },
        { id: 'BgivenNotA', label: 'P(B|Ā)' }
      ]
    },
    {
      id: 'independence',
      title: 'Independence Analysis',
      buttons: [
        { id: 'indepTest', label: 'Independence Test' },
        { id: 'correlation', label: 'Correlation Analysis' }
      ]
    },
    {
      id: 'odds',
      title: 'Odds and Ratios',
      buttons: [
        { id: 'oddsA', label: 'Odds of A' },
        { id: 'oddsB', label: 'Odds of B' },
        { id: 'oddsRatio', label: 'Odds Ratio' }
      ]
    }
  ];

  return (
    <div style={styles.panel}>
      <div style={styles.header} onClick={togglePanel}>
        <h3 style={styles.headerTitle}>Probability Calculations</h3>
        <span style={{
          ...styles.arrow,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
        }}>▼</span>
      </div>

      <div style={{
        ...styles.content,
        ...(isOpen ? {} : styles.contentHidden)
      }}>
        {sections.map(section => (
          <div key={section.id} style={styles.section}>
            <div 
              style={styles.sectionHeader} 
              onClick={() => toggleSection(section.id)}
            >
              <span>{section.title}</span>
              <span>{openSections[section.id] ? '−' : '+'}</span>
            </div>
            
            {openSections[section.id] && (
              <div style={styles.sectionContent}>
                {section.buttons.map(button => (
                  <button
                    key={button.id}
                    style={{
                      ...styles.button,
                      ...(activeButtons[button.id] ? styles.buttonActive : {})
                    }}
                    onClick={() => toggleButton(button.id)}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;