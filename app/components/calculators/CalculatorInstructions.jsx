import React, { useState } from 'react';

export default function CalculatorInstructions({ explanations }) {
  const [activeTab, setActiveTab] = useState(Object.keys(explanations)[0]);

  const tabs = Object.keys(explanations);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #ddd',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{
          display: 'flex',
          gap: '6px',
          padding: '10px',
          background: '#f5f7fa',
          borderBottom: '1px solid #ddd'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                padding: '12px 18px',
                fontSize: '13.5px',
                fontWeight: '500',
                border: 'none',
                background: activeTab === tab ? '#5b8def' : '#ffffff',
                color: activeTab === tab ? '#ffffff' : '#556579',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === tab ? '0 2px 4px rgba(91, 141, 239, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = '#e8edf5';
                  e.target.style.color = '#3d4a5c';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = '#ffffff';
                  e.target.style.color = '#556579';
                }
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{
          padding: '24px 28px',
          fontSize: '14px',
          color: '#2d3748',
          lineHeight: '1.75',
          minHeight: '130px',
          background: '#fafbfd'
        }}>
          {explanations[activeTab].split('\n').map((line, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: line.trim() === '' ? '14px' : '6px'
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}