export const themes = {
    light: {
      background: '#fafbfc',
      containerBg: 'white',
      containerBorder: '#f1f5f9',
      titleColor: '#1a202c',
      textColor: '#1e293b',
      descColor: '#64748b',
      numberBg: '#64748b',
      arrowColor: '#cbd5e0',
      formulaBg: '#f1f5f9',
      formulaBorder: '#e2e8f0',
      formulaColor: '#475569',
      nodeTypes: {
        start: { background: '#f9fafb', borderColor: '#d1d5db' },
        process: { background: 'white', borderColor: '#d1d5db' },
        decision: { background: '#fffbeb', borderColor: '#fbbf24', borderRadius: '20px' },
        loop: { background: '#f0f9ff', borderColor: '#0ea5e9' },
        recursive: { background: '#fef3ff', borderColor: '#a855f7' },
        update: { background: '#fef7ff', borderColor: '#c084fc' },
        end: { background: '#f0fdf4', borderColor: '#22c55e' }
      }
    },
    dark: {
      background: '#0f172a',
      containerBg: '#1e293b',
      containerBorder: '#334155',
      titleColor: '#f1f5f9',
      textColor: '#e2e8f0',
      descColor: '#94a3b8',
      numberBg: '#475569',
      arrowColor: '#475569',
      formulaBg: '#334155',
      formulaBorder: '#475569',
      formulaColor: '#cbd5e0',
      nodeTypes: {
        start: { background: '#334155', borderColor: '#475569' },
        process: { background: '#1e293b', borderColor: '#475569' },
        decision: { background: '#451a03', borderColor: '#f59e0b', borderRadius: '20px' },
        loop: { background: '#0c4a6e', borderColor: '#0ea5e9' },
        recursive: { background: '#581c87', borderColor: '#a855f7' },
        update: { background: '#701a75', borderColor: '#c084fc' },
        end: { background: '#14532d', borderColor: '#22c55e' }
      }
    },
    blue: {
      background: '#eff6ff',
      containerBg: 'white',
      containerBorder: '#dbeafe',
      titleColor: '#1e40af',
      textColor: '#1e3a8a',
      descColor: '#3730a3',
      numberBg: '#3b82f6',
      arrowColor: '#93c5fd',
      formulaBg: '#eff6ff',
      formulaBorder: '#bfdbfe',
      formulaColor: '#1d4ed8',
      nodeTypes: {
        start: { background: '#f0f9ff', borderColor: '#93c5fd' },
        process: { background: 'white', borderColor: '#93c5fd' },
        decision: { background: '#fef3c7', borderColor: '#f59e0b', borderRadius: '20px' },
        loop: { background: '#dbeafe', borderColor: '#3b82f6' },
        recursive: { background: '#ede9fe', borderColor: '#8b5cf6' },
        update: { background: '#fae8ff', borderColor: '#c084fc' },
        end: { background: '#dcfce7', borderColor: '#16a34a' }
      }
    }
  };