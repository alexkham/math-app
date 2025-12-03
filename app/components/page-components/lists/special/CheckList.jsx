'use client';
import { useState } from 'react';

export default function CheckList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Understand probability distributions', checked: true },
    { id: 2, text: 'Calculate expected values', checked: true },
    { id: 3, text: 'Work with binomial distributions', checked: false },
    { id: 4, text: 'Apply normal distribution properties', checked: false },
    { id: 5, text: 'Master conditional probability', checked: false }
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#1e3a8a',
        marginBottom: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        Study Checklist
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((item) => (
          <li key={item.id} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '14px 16px',
            marginBottom: '8px',
            backgroundColor: item.checked ? '#f0f9ff' : '#ffffff',
            border: item.checked ? '1px solid #3b82f6' : '1px solid #e2e8f0',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
          onClick={() => toggleItem(item.id)}
          onMouseEnter={(e) => {
            if (!item.checked) {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }
          }}
          onMouseLeave={(e) => {
            if (!item.checked) {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: item.checked ? '2px solid #3b82f6' : '2px solid #cbd5e1',
              borderRadius: '4px',
              marginRight: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: item.checked ? '#3b82f6' : '#ffffff',
              flexShrink: 0,
              transition: 'all 0.2s ease'
            }}>
              {item.checked && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span style={{
              fontSize: '16px',
              color: item.checked ? '#3b82f6' : '#334155',
              textDecoration: item.checked ? 'line-through' : 'none',
              fontWeight: item.checked ? '400' : '400'
            }}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}