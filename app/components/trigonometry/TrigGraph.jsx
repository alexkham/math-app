import React, { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

const TrigGraph = ({ functionType, currentValue, currentAngle = Math.PI/6 }) => {
  const [zoomDomain, setZoomDomain] = useState([-2 * Math.PI, 2 * Math.PI]);
  const [rangeDomain, setRangeDomain] = useState([-4, 4]);

  const functionDefinitions = {
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => {
      const val = Math.tan(x);
      return Math.abs(val) > 10 ? null : val;
    },
    csc: (x) => {
      const sinVal = Math.sin(x);
      if (Math.abs(sinVal) < 0.01) return null;
      const val = 1 / sinVal;
      return Math.abs(val) > 10 ? null : val;
    },
    sec: (x) => {
      const cosVal = Math.cos(x);
      if (Math.abs(cosVal) < 0.01) return null;
      const val = 1 / cosVal;
      return Math.abs(val) > 10 ? null : val;
    },
    cot: (x) => {
      const sinVal = Math.sin(x);
      if (Math.abs(sinVal) < 0.01) return null;
      const val = Math.cos(x) / sinVal;
      return Math.abs(val) > 10 ? null : val;
    }
  };

  const asymptotePositions = useMemo(() => {
    if (functionType === 'tan' || functionType === 'sec') {
      return Array.from({ length: 7 }, (_, i) => Math.PI/2 + (i-3) * Math.PI);
    } else if (functionType === 'cot' || functionType === 'csc') {
      return Array.from({ length: 5 }, (_, i) => (i-2) * Math.PI);
    }
    return [];
  }, [functionType]);

  const graphData = useMemo(() => {
    const data = [];
    const step = 0.02;
    const func = functionDefinitions[functionType];
    
    for (let x = zoomDomain[0]; x <= zoomDomain[1]; x += step) {
      const y = func(x);
      data.push({
        x: x,
        xLabel: x.toFixed(2),
        y: y,
        angle: x * (180 / Math.PI), // for tooltip
        isCurrentPoint: Math.abs(x - currentAngle) < 0.05
      });
    }
    return data;
  }, [functionType, zoomDomain, currentAngle]);

  const customTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    
    const data = payload[0].payload;
    const xVal = parseFloat(label);
    const yVal = data.y;
    
    return (
      <div style={{
        backgroundColor: 'white',
        border: '2px solid #1d6bd8',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontSize: '14px'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1d6bd8', marginBottom: '4px' }}>
          {functionType}({xVal.toFixed(3)})
        </div>
        <div>Value: <strong>{yVal?.toFixed(4) || 'undefined'}</strong></div>
        <div>Angle: <strong>{data.angle.toFixed(1)}°</strong></div>
        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
          Radians: {xVal.toFixed(3)}
        </div>
      </div>
    );
  };

  const formatXTick = (value) => {
    const piMultiple = value / Math.PI;
    if (Math.abs(piMultiple) < 0.1) return '0';
    if (Math.abs(piMultiple - 1) < 0.1) return 'π';
    if (Math.abs(piMultiple + 1) < 0.1) return '-π';
    if (Math.abs(piMultiple - 0.5) < 0.1) return 'π/2';
    if (Math.abs(piMultiple + 0.5) < 0.1) return '-π/2';
    if (Math.abs(piMultiple - 2) < 0.1) return '2π';
    if (Math.abs(piMultiple + 2) < 0.1) return '-2π';
    return (piMultiple).toFixed(1) + 'π';
  };

  const zoomIn = () => {
    const range = zoomDomain[1] - zoomDomain[0];
    const center = (zoomDomain[0] + zoomDomain[1]) / 2;
    const newRange = range * 0.7;
    setZoomDomain([center - newRange/2, center + newRange/2]);
  };

  const zoomOut = () => {
    const range = zoomDomain[1] - zoomDomain[0];
    const center = (zoomDomain[0] + zoomDomain[1]) / 2;
    const newRange = Math.min(range * 1.4, 8 * Math.PI);
    setZoomDomain([center - newRange/2, center + newRange/2]);
  };

  const resetZoom = () => {
    setZoomDomain([-2 * Math.PI, 2 * Math.PI]);
    setRangeDomain([-4, 4]);
  };

  return (
    <div style={{
      marginTop: '24px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '6px',
      border: '1px solid #ddd'
    }}>
      {/* Header with controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h4 style={{ margin: 0, color: '#1d6bd8' }}>
          Interactive Graph: {functionType}(x) = {currentValue?.toFixed(4) || 'undefined'}
        </h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={zoomIn} style={{
            padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
            border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
          }}>
            Zoom In
          </button>
          <button onClick={zoomOut} style={{
            padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
            border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
          }}>
            Zoom Out
          </button>
          <button onClick={resetZoom} style={{
            padding: '4px 8px', fontSize: '12px', cursor: 'pointer',
            border: '1px solid #1d6bd8', backgroundColor: 'white', borderRadius: '4px'
          }}>
            Reset
          </button>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        fontSize: '12px',
        color: '#666',
        marginBottom: '12px',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <span style={{ color: '#1d6bd8' }}>● Function curve</span>
        <span style={{ color: '#ff4757' }}>● Current point ({currentAngle.toFixed(3)} rad)</span>
        {asymptotePositions.length > 0 && (
          <span style={{ color: '#ff6b6b' }}>┊ Asymptotes</span>
        )}
        <span style={{ color: '#666' }}>💡 Hover for details, scroll to zoom</span>
      </div>

      {/* Graph */}
      <div style={{ height: '400px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="x" 
              type="number" 
              scale="linear"
              domain={zoomDomain}
              tickFormatter={formatXTick}
              stroke="#666"
            />
            <YAxis 
              domain={rangeDomain}
              stroke="#666"
            />
            <Tooltip content={customTooltip} />
            
            {/* Asymptotes as reference lines */}
            {asymptotePositions.map((pos, idx) => (
              pos >= zoomDomain[0] && pos <= zoomDomain[1] && (
                <ReferenceLine 
                  key={idx} 
                  x={pos} 
                  stroke="#ff6b6b" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
              )
            ))}
            
            {/* Current angle reference line */}
            <ReferenceLine 
              x={currentAngle} 
              stroke="#ff4757" 
              strokeWidth={2}
              strokeDasharray="8 4"
            />
            
            {/* Function line */}
            <Line 
              type="linear" 
              dataKey="y" 
              stroke="#1d6bd8" 
              strokeWidth={3}
              dot={false}
              connectNulls={false}
            />
            
            {/* Highlight current point */}
            <Line 
              type="linear"
              dataKey={(entry) => entry.isCurrentPoint ? entry.y : null}
              stroke="#ff4757"
              strokeWidth={0}
              dot={{ fill: '#ff4757', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        marginTop: '12px',
        fontSize: '12px',
        color: '#666',
        textAlign: 'center'
      }}>
        Current domain: [{formatXTick(zoomDomain[0])} to {formatXTick(zoomDomain[1])}]
      </div>
    </div>
  );
};

export default TrigGraph;