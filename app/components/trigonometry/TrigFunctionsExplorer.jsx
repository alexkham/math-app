
import React, { useState, useMemo } from 'react';
import TrigGraph from './TrigGraph';
import { processContent } from '@/app/utils/contentProcessor';

const FUNCTIONS = ['sin', 'cos', 'tan', 'csc', 'sec', 'cot'];

const defaultExplanations = {
  sin: `**sin(θ)** is the y-coordinate of the point on the unit circle at angle θ. Range: [-1, 1]. Period: 2π. Zeros at integer multiples of π. Maxima at π/2 + 2πk, minima at -π/2 + 2πk.`,
  cos: `**cos(θ)** is the x-coordinate of the point on the unit circle at angle θ. Range: [-1, 1]. Period: 2π. Zeros at π/2 + πk. Maxima at 2πk, minima at π + 2πk.`,
  tan: `**tan(θ) = sin(θ) / cos(θ)**. Period: π. Vertical asymptotes where cos(θ) = 0, i.e. at π/2 + πk. Range: all real numbers. Zeros at integer multiples of π.`,
  csc: `**csc(θ) = 1 / sin(θ)**. Period: 2π. Vertical asymptotes where sin(θ) = 0. Range: (-∞, -1] ∪ [1, ∞). Reciprocal of sin.`,
  sec: `**sec(θ) = 1 / cos(θ)**. Period: 2π. Vertical asymptotes where cos(θ) = 0. Range: (-∞, -1] ∪ [1, ∞). Reciprocal of cos.`,
  cot: `**cot(θ) = cos(θ) / sin(θ)**. Period: π. Vertical asymptotes where sin(θ) = 0, i.e. at πk. Range: all real numbers. Reciprocal of tan.`,
};

const TrigFunctionsExplorer = ({
  initialFunction = 'sin',
  initialUnit = 'rad',
  initialAngleDeg = 90,
  explanations: explanationsProp,
  explanationsTitle = 'Explanations',
  graphHeight = 360,
  maxWidth = 1252,
}) => {
  const safeInitial = FUNCTIONS.includes(initialFunction) ? initialFunction : 'sin';

  const [func, setFunc] = useState(safeInitial);
  const [unit, setUnit] = useState(initialUnit === 'deg' ? 'deg' : 'rad');
  const [angleDeg, setAngleDeg] = useState(initialAngleDeg);

  const explanations = useMemo(
    () => ({ ...defaultExplanations, ...(explanationsProp || {}) }),
    [explanationsProp]
  );

  const angleRad = (angleDeg * Math.PI) / 180;

  const handleAngleNumberChange = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) return;
    if (unit === 'deg') {
      setAngleDeg(Math.max(-360, Math.min(360, val)));
    } else {
      const deg = (val * 180) / Math.PI;
      setAngleDeg(Math.max(-360, Math.min(360, deg)));
    }
  };

  const formatRad = (v) => {
    const m = v / Math.PI;
    if (Math.abs(m) < 0.01) return '0';
    for (const d of [1, 2, 3, 4, 6]) {
      const n = m * d;
      if (Math.abs(n - Math.round(n)) < 0.01) {
        const r = Math.round(n);
        const sign = r < 0 ? '-' : '';
        const a = Math.abs(r);
        const num = a === 1 ? '' : a;
        if (d === 1) return `${sign}${num}π`;
        return `${sign}${num}π/${d}`;
      }
    }
    return m.toFixed(2) + 'π';
  };

  const angleNumberValue = unit === 'deg' ? angleDeg : angleRad.toFixed(3);

  const presets = unit === 'deg'
    ? [['0°', 0], ['30°', 30], ['45°', 45], ['60°', 60], ['90°', 90], ['180°', 180], ['270°', 270], ['360°', 360]]
    : [['0', 0], ['π/6', 30], ['π/4', 45], ['π/3', 60], ['π/2', 90], ['π', 180], ['3π/2', 270], ['2π', 360]];

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '10px',
      maxWidth: `${maxWidth}px`,
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '5fr 2fr',
      gap: '12px',
      alignItems: 'start',
    },
    graphCard: {
      background: '#ffffff',
      border: '1px solid #bfdbfe',
      borderRadius: '8px',
      padding: '8px',
    },
    controlsCard: {
      background: '#f3f4f6',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '10px',
      marginTop: '10px',
    },
    explanationsCard: {
      background: '#f3f4f6',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '12px',
    },
    explanationsTitle: {
      fontSize: '12px',
      fontWeight: 500,
      color: '#1e40af',
      marginBottom: '8px',
      paddingBottom: '6px',
      borderBottom: '1px solid #d1d5db',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    explanationsBody: {
      fontSize: '13px',
      lineHeight: 1.65,
      color: '#0f172a',
    },
    sectionLabel: {
      fontSize: '11px',
      color: '#1e40af',
      fontWeight: 500,
      marginBottom: '4px',
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    funcGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '3px',
    },
    funcButton: (active) => ({
      padding: '5px 4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      border: `1px solid ${active ? '#1e40af' : '#bfdbfe'}`,
      borderRadius: '4px',
      cursor: 'pointer',
      background: active ? '#1e40af' : '#ffffff',
      color: active ? '#ffffff' : '#1e40af',
    }),
    unitGroup: { display: 'flex', gap: '3px' },
    unitButton: (active) => ({
      padding: '5px 10px',
      fontSize: '12px',
      border: `1px solid ${active ? '#1e40af' : '#bfdbfe'}`,
      borderRadius: '4px',
      cursor: 'pointer',
      background: active ? '#1e40af' : '#ffffff',
      color: active ? '#ffffff' : '#1e40af',
      flex: 1,
    }),
    resultBox: { textAlign: 'right' },
    resultValue: {
      fontFamily: 'monospace',
      fontSize: '13px',
      fontWeight: 500,
      color: '#0f172a',
    },
    angleRow: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto auto',
      gap: '8px',
      alignItems: 'center',
      marginBottom: '8px',
      marginTop: '8px',
    },
    angleLabel: {
      fontSize: '11px',
      color: '#1e40af',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.4px',
    },
    rangeInput: { width: '100%', accentColor: '#1e40af' },
    numberInput: {
      width: '70px',
      padding: '3px 6px',
      fontSize: '12px',
      border: '1px solid #bfdbfe',
      borderRadius: '4px',
      fontFamily: 'monospace',
    },
    unitLabel: {
      fontSize: '12px',
      color: '#475569',
      fontFamily: 'monospace',
      minWidth: '24px',
    },
    presetsRow: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '8px',
      alignItems: 'center',
    },
    presetGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: '3px',
    },
    presetButton: {
      padding: '4px 2px',
      fontSize: '11px',
      border: '1px solid #bfdbfe',
      borderRadius: '4px',
      cursor: 'pointer',
      background: '#ffffff',
      color: '#1e40af',
    },
    topRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
      alignItems: 'end',
      marginBottom: '4px',
    },
  };

  const computeResult = () => {
    const fns = {
      sin: Math.sin, cos: Math.cos, tan: Math.tan,
      csc: (x) => 1 / Math.sin(x),
      sec: (x) => 1 / Math.cos(x),
      cot: (x) => Math.cos(x) / Math.sin(x),
    };
    const v = fns[func](angleRad);
    if (!isFinite(v) || Math.abs(v) > 1e6) return 'undefined';
    return v.toFixed(4);
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>

        <div>
          <div style={styles.graphCard}>
            <TrigGraph
              functionType={func}
              currentAngle={angleRad}
              xUnit={unit}
              height={graphHeight}
            />
          </div>

          <div style={styles.controlsCard}>
            <div style={styles.topRow}>
              <div>
                <div style={styles.sectionLabel}>Function</div>
                <div style={styles.funcGrid}>
                  {FUNCTIONS.map(fn => (
                    <button
                      key={fn}
                      onClick={() => setFunc(fn)}
                      style={styles.funcButton(func === fn)}
                    >
                      {fn}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={styles.sectionLabel}>Unit</div>
                <div style={styles.unitGroup}>
                  <button onClick={() => setUnit('deg')} style={styles.unitButton(unit === 'deg')}>deg</button>
                  <button onClick={() => setUnit('rad')} style={styles.unitButton(unit === 'rad')}>rad</button>
                </div>
              </div>

              <div style={styles.resultBox}>
                <div style={styles.sectionLabel}>Result</div>
                <div style={styles.resultValue}>
                  {func}({unit === 'deg' ? `${angleDeg}°` : formatRad(angleRad)}) = {computeResult()}
                </div>
              </div>
            </div>

            <div style={styles.angleRow}>
              <span style={styles.angleLabel}>Angle</span>
              <input
                type="range"
                min={-360}
                max={360}
                step={1}
                value={angleDeg}
                onChange={(e) => setAngleDeg(parseFloat(e.target.value))}
                style={styles.rangeInput}
              />
              <input
                type="number"
                value={angleNumberValue}
                step={unit === 'deg' ? 1 : 0.01}
                onChange={handleAngleNumberChange}
                style={styles.numberInput}
              />
              <span style={styles.unitLabel}>{unit === 'deg' ? '°' : 'rad'}</span>
            </div>

            <div style={styles.presetsRow}>
              <span style={styles.angleLabel}>Quick</span>
              <div style={styles.presetGrid}>
                {presets.map(([label, deg]) => (
                  <button
                    key={label}
                    onClick={() => setAngleDeg(deg)}
                    style={styles.presetButton}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.explanationsCard}>
          <div style={styles.explanationsTitle}>{explanationsTitle}</div>
          <div style={styles.explanationsBody}>
            {processContent(explanations[func] || '')}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrigFunctionsExplorer;