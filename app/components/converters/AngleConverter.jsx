
import { useState } from 'react';

export default function AngleConverter() {
  const [degrees, setDegrees] = useState('0');
  const [radians, setRadians] = useState('0');
  const [lastChanged, setLastChanged] = useState(null);

  const normalizeAngle = (angle) => {
    const rotations = Math.floor(Math.abs(angle) / 360);
    const normalizedAngle = angle % 360;
    return {
      normalizedAngle: normalizedAngle >= 0 ? normalizedAngle : normalizedAngle + 360,
      rotations
    };
  };

  const handleDegreesChange = (e) => {
    const value = e.target.value;
    setDegrees(value);
    setLastChanged('degrees');
    if (value === '' || isNaN(value)) {
      setRadians('');
      return;
    }
    const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
    setRadians(rad);
  };

  const handleRadiansChange = (e) => {
    const value = e.target.value;
    setRadians(value);
    setLastChanged('radians');
    if (value === '' || isNaN(value)) {
      setDegrees('');
      return;
    }
    const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
    setDegrees(deg);
  };

  const handleResetAll = () => {
    setDegrees('0');
    setRadians('0');
    setLastChanged(null);
  };

  const getArcPath = () => {
    const angle = parseFloat(degrees || 0);
    const { normalizedAngle, rotations } = normalizeAngle(angle);
    const centerX = 110;
    const centerY = 110;
    const radius = 90;
    
    const startAngle = -Math.PI/2;
    const endAngle = (normalizedAngle * Math.PI/180) - Math.PI/2;
    
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = normalizedAngle > 180 ? 1 : 0;
    const sweepFlag = angle >= 0 ? 1 : 0;

    return {
      currentPath: `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`,
      rotations
    };
  };

  const { currentPath, rotations } = getArcPath();
  const normalizedValue = (Math.abs(parseFloat(degrees)) % 360).toFixed(1);

  return (
    <>
      <style jsx>{`
        .container {
          transform: scale(1.1);
          transform-origin: top center;
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 22px auto;
          background: #fff;
          border: 1px solid #2563eb;
          border-radius: 8px;
        }

        .main-content {
          display: flex;
        }

        .controls {
          flex: 1;
          padding: 20px;
          border-right: 1px solid #2563eb;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        h1 {
          color: #1e40af;
          font-size: 20px;
          margin: 0;
        }

        .reset-all {
          background: #2563eb;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .reset-all:hover {
          background: #1e40af;
        }

        .input-section {
          margin-bottom: 15px;
          border: 1px solid #cbd5e1;
          padding: 12px;
          border-radius: 4px;
        }

        .input-row {
          display: flex;
          gap: 8px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          color: #1e40af;
          font-size: 14px;
        }

        input {
          flex: 1;
          padding: 6px 8px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          font-size: 14px;
        }

        input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .reset-input {
          background: #e2e8f0;
          border: none;
          padding: 0 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .reset-input:hover {
          background: #cbd5e1;
        }

        .explanation {
          margin-top: 15px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 4px;
          font-size: 14px;
        }

        .formula {
          color: #1e40af;
          margin: 6px 0;
          font-weight: 500;
        }

        .right-section {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .visualization {
          padding: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          min-height: 220px;
        }

        .reference {
          padding: 15px 20px;
          border-top: 1px solid #cbd5e1;
        }

        .reference p {
          color: #64748b;
          font-size: 13px;
          margin: 4px 0;
        }

        svg {
          margin-top: -10px;
        }

        .rotation-text {
          fill: #2563eb;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>

      <div className="container">
        <div className="main-content">
          <div className="controls">
            <div className="header">
              <h1>Angle Converter</h1>
              <button className="reset-all" onClick={handleResetAll}>Reset All</button>
            </div>

            <div className="input-section">
              <label>Degrees (°)</label>
              <div className="input-row">
                <input
                  type="number"
                  value={degrees}
                  onChange={handleDegreesChange}
                  placeholder="Enter degrees"
                />
                <button className="reset-input" onClick={() => {
                  setDegrees('0');
                  setRadians('0.000000');
                  setLastChanged('degrees');
                }}>Reset</button>
              </div>
            </div>

            <div className="input-section">
              <label>Radians (rad)</label>
              <div className="input-row">
                <input
                  type="number"
                  value={radians}
                  onChange={handleRadiansChange}
                  placeholder="Enter radians"
                />
                <button className="reset-input" onClick={() => {
                  setRadians('0');
                  setDegrees('0.000000');
                  setLastChanged('radians');
                }}>Reset</button>
              </div>
            </div>

            {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
              <div className="explanation">
                <p>Converting from Degrees to Radians:</p>
                <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
              </div>
            )}

            {lastChanged === 'radians' && radians && !isNaN(radians) && (
              <div className="explanation">
                <p>Converting from Radians to Degrees:</p>
                <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
              </div>
            )}
          </div>

          <div className="right-section">
            <div className="visualization">
              <svg width="220" height="220">
                {/* Background circle */}
                <circle 
                  cx="110" 
                  cy="110" 
                  r="90" 
                  fill="none" 
                  stroke="#94a3b8" 
                  strokeWidth="1"
                />
                
                {/* Full rotation indicators */}
                {[...Array(rotations)].map((_, i) => (
                  <circle
                    key={i}
                    cx="110"
                    cy="110"
                    r={90 - (i * 8)}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="2 4"
                  />
                ))}
                
                {/* Current angle arc */}
                <path
                  d={currentPath}
                  fill="#e6efff"
                  fillOpacity={rotations > 0 ? 0.5 : 0.8}
                  stroke="#2563eb"
                  strokeWidth="1.5"
                />
                
                {/* Reference line */}
                <line
                  x1="110"
                  y1="110"
                  x2="110"
                  y2="20"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                
                {/* Angle text */}
                <text
                  x="110"
                  y="98"
                  textAnchor="middle"
                  fill="#1e40af"
                  style={{ fontSize: '14px' }}
                >
                  {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
                </text>
                
                {rotations > 0 && (
                  <text
                    x="110"
                    y="115"
                    textAnchor="middle"
                    className="rotation-text"
                  >
                    ({rotations}×360° + {normalizedValue}°)
                  </text>
                )}

                {rotations > 0 && (
                  <text
                    x="110"
                    y="132"
                    textAnchor="middle"
                    className="rotation-text"
                  >
                    {rotations} full rotation{rotations > 1 ? 's' : ''}
                  </text>
                )}
              </svg>
            </div>

            <div className="reference">
              <p>Common conversions:</p>
              <p>π ≈ 3.14159 rad = 180°</p>
              <p>1 rad ≈ 57.2958°</p>
              <p>1° = 0.01745 rad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}