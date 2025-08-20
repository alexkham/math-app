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
  },
  // NEW THEMES WITH PROMINENT BORDERS
  contrast: {
    background: '#ffffff',
    containerBg: '#ffffff',
    containerBorder: '#2d3748',
    titleColor: '#1a202c',
    textColor: '#2d3748',
    descColor: '#4a5568',
    numberBg: '#2d3748',
    arrowColor: '#4a5568',
    formulaBg: '#f7fafc',
    formulaBorder: '#2d3748',
    formulaColor: '#2d3748',
    nodeTypes: {
      start: { background: '#f7fafc', borderColor: '#2d3748' },
      process: { background: '#ffffff', borderColor: '#2d3748' },
      decision: { background: '#fff5f5', borderColor: '#e53e3e', borderRadius: '20px' },
      loop: { background: '#ebf8ff', borderColor: '#3182ce' },
      recursive: { background: '#faf5ff', borderColor: '#805ad5' },
      update: { background: '#f0fff4', borderColor: '#38a169' },
      end: { background: '#f0fff4', borderColor: '#38a169' }
    }
  },
  vivid: {
    background: '#f8fafc',
    containerBg: '#ffffff',
    containerBorder: '#e2e8f0',
    titleColor: '#1a202c',
    textColor: '#2d3748',
    descColor: '#4a5568',
    numberBg: '#667eea',
    arrowColor: '#667eea',
    formulaBg: '#f7fafc',
    formulaBorder: '#4c51bf',
    formulaColor: '#4c51bf',
    nodeTypes: {
      start: { background: '#edf2f7', borderColor: '#4a5568' },
      process: { background: '#ffffff', borderColor: '#4c51bf' },
      decision: { background: '#fef5e7', borderColor: '#ed8936', borderRadius: '20px' },
      loop: { background: '#e6fffa', borderColor: '#319795' },
      recursive: { background: '#faf5ff', borderColor: '#9f7aea' },
      update: { background: '#f0fff4', borderColor: '#48bb78' },
      end: { background: '#f0fff4', borderColor: '#38a169' }
    }
  },
  modern: {
    background: '#f1f5f9',
    containerBg: '#ffffff',
    containerBorder: '#334155',
    titleColor: '#0f172a',
    textColor: '#1e293b',
    descColor: '#475569',
    numberBg: '#0f172a',
    arrowColor: '#64748b',
    formulaBg: '#f8fafc',
    formulaBorder: '#334155',
    formulaColor: '#1e293b',
    nodeTypes: {
      start: { background: '#f8fafc', borderColor: '#475569' },
      process: { background: '#ffffff', borderColor: '#334155' },
      decision: { background: '#fefce8', borderColor: '#ca8a04', borderRadius: '20px' },
      loop: { background: '#eff6ff', borderColor: '#2563eb' },
      recursive: { background: '#fdf4ff', borderColor: '#a21caf' },
      update: { background: '#f0f9ff', borderColor: '#0284c7' },
      end: { background: '#f0fdf4', borderColor: '#16a34a' }
    }
  },
  bold: {
    background: '#fafafa',
    containerBg: '#ffffff',
    containerBorder: '#171717',
    titleColor: '#0a0a0a',
    textColor: '#171717',
    descColor: '#404040',
    numberBg: '#171717',
    arrowColor: '#525252',
    formulaBg: '#f5f5f5',
    formulaBorder: '#262626',
    formulaColor: '#171717',
    nodeTypes: {
      start: { background: '#f5f5f5', borderColor: '#525252' },
      process: { background: '#ffffff', borderColor: '#171717' },
      decision: { background: '#fef2f2', borderColor: '#dc2626', borderRadius: '20px' },
      loop: { background: '#eff6ff', borderColor: '#2563eb' },
      recursive: { background: '#faf5ff', borderColor: '#9333ea' },
      update: { background: '#ecfdf5', borderColor: '#059669' },
      end: { background: '#f0fdf4', borderColor: '#16a34a' }
    }
  },
  neon: {
    background: '#0c0c0c',
    containerBg: '#1a1a1a',
    containerBorder: '#00ff88',
    titleColor: '#00ff88',
    textColor: '#ffffff',
    descColor: '#cccccc',
    numberBg: '#00ff88',
    arrowColor: '#00ff88',
    formulaBg: '#262626',
    formulaBorder: '#00ff88',
    formulaColor: '#00ff88',
    nodeTypes: {
      start: { background: '#1a1a1a', borderColor: '#00ff88' },
      process: { background: '#1a1a1a', borderColor: '#ffffff' },
      decision: { background: '#2d1b1b', borderColor: '#ff4444', borderRadius: '20px' },
      loop: { background: '#1b2d2d', borderColor: '#44aaff' },
      recursive: { background: '#2d1b2d', borderColor: '#aa44ff' },
      update: { background: '#1b1b2d', borderColor: '#4444ff' },
      end: { background: '#1b2d1b', borderColor: '#44ff44' }
    }
  }
};