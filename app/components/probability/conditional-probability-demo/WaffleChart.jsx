import React, { useState, useMemo } from 'react';

export default function WaffleChart() {
  const gridSize = 10;
  const totalTiles = gridSize * gridSize;

  // Define areas with their properties
  const [areas, setAreas] = useState([
    { id: 1, name: 'Region A', color: '#93c5fd', probability: 0.15 },
    { id: 2, name: 'Region B', color: '#fca5a5', probability: 0.40 },
    { id: 3, name: 'Region C', color: '#86efac', probability: 0.65 },
    { id: 4, name: 'Region D', color: '#fde047', probability: 0.85 }
  ]);

  const [hoveredTile, setHoveredTile] = useState(null);
  const darkTileColor = '#1e40af'; // Deep blue for the event tiles

  // Generate tiles for each area based on probability
  const generateTilesForArea = (probability, areaId) => {
    const tiles = [];
    const numDark = Math.round(probability * totalTiles);
    
    // Create array with dark and non-dark tiles
    const tileTypes = [
      ...Array(numDark).fill(true),
      ...Array(totalTiles - numDark).fill(false)
    ];
    
    // Shuffle
    for (let i = tileTypes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tileTypes[i], tileTypes[j]] = [tileTypes[j], tileTypes[i]];
    }
    
    // Create tile objects
    for (let i = 0; i < totalTiles; i++) {
      tiles.push({
        id: `${areaId}-${i}`,
        isDark: tileTypes[i],
        areaId: areaId
      });
    }
    
    return tiles;
  };

  const areaGrids = useMemo(() => {
    return areas.map(area => ({
      ...area,
      tiles: generateTilesForArea(area.probability, area.id)
    }));
  }, [areas]);

  const updateAreaProbability = (areaId, newProb) => {
    setAreas(prevAreas => 
      prevAreas.map(area => 
        area.id === areaId ? { ...area, probability: newProb } : area
      )
    );
  };

  // Calculate total dark tiles across all areas
  const actualTotalDark = areaGrids.reduce((sum, area) => 
    sum + area.tiles.filter(t => t.isDark).length, 0
  );

  // Calculate total probability P(Dark Blue)
  const totalProbDarkBlue = actualTotalDark / (totalTiles * areas.length);

  // Each region has equal probability (1/4)
  const probEachRegion = 1 / areas.length;

  // Color square component
  const ColorSquare = ({ color, size = 14 }) => (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '2px',
      display: 'inline-block',
      verticalAlign: 'middle',
      border: '1px solid rgba(0,0,0,0.2)'
    }} />
  );

  return (
    // <div style={{ 
    //   padding: '30px', 
    //   fontFamily: 'system-ui, -apple-system, sans-serif',
    //   maxWidth: '1400px',
    //   margin: '0 auto',
    //   backgroundColor: '#fafafa'
    // }}>
    //   <div style={{ marginBottom: '24px' }}>
    //     {/* <h1 style={{ 
    //       fontSize: '28px', 
    //       fontWeight: 'bold', 
    //       marginBottom: '6px',
    //       color: '#111827'
    //     }}>
    //       Conditional Probability & Distribution
    //     </h1> */}
    //     <p style={{ color: '#6b7280', marginBottom: '0', fontSize: '15px' }}>
    //       Distribution matters: same total, different conditional probabilities
    //     </p>
    //   </div>
     <div style={{ 
      padding: '30px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '1400px',
      margin: '0 auto',
      backgroundColor: '#fafafa'
    }}>
      <div style={{ 
        marginBottom: '24px',
        backgroundColor: '#f0f9ff',
        padding: '16px 20px',
        borderRadius: '8px',
        borderLeft: '4px solid #0ea5e9'
      }}>
        <p style={{ 
          color: '#075985', 
          marginBottom: '0', 
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          This waffle chart demonstrates how conditional probability differs from total probability. 
          While the total probability P(Event) considers all possible outcomes equally, 
          conditional probability P(Event | Condition) restricts our view to specific regions. 
          When you know which region you are in, the likelihood of the event changes dramatically.
        </p>
      </div>

      {/* Single Row Grid Display */}
      <div style={{
        display: 'flex',
        gap: '3px',
        backgroundColor: '#e5e7eb',
        padding: '3px',
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        {areaGrids.map(area => {
          const darkCount = area.tiles.filter(t => t.isDark).length;
          const conditionalProb = darkCount / totalTiles;
          
          return (
            <div 
              key={area.id}
              style={{
                backgroundColor: 'white',
                padding: '0',
                flex: '1'
              }}
            >
              {/* Area label with notation - LIGHT GRAY BACKGROUND */}
              <div style={{
                padding: '8px 12px',
                backgroundColor: '#f3f4f6',
                fontWeight: '600',
                fontSize: '12px',
                color: '#1f2937',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ColorSquare color={area.color} size={14} />
                    {area.name}
                  </span>
                  <span style={{
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {conditionalProb.toFixed(2)}
                  </span>
                </div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span>P(<ColorSquare color={darkTileColor} size={11} /> | {area.name})</span>
                  <span>P(<ColorSquare color={darkTileColor} size={11} /> | <ColorSquare color={area.color} size={11} />)</span>
                </div>
              </div>

              {/* Waffle Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                gap: '1.5px',
                padding: '6px',
                backgroundColor: 'white'
              }}>
                {area.tiles.map(tile => {
                  const isHovered = hoveredTile === tile.id;
                  
                  return (
                    <div
                      key={tile.id}
                      onMouseEnter={() => setHoveredTile(tile.id)}
                      onMouseLeave={() => setHoveredTile(null)}
                      style={{
                        backgroundColor: tile.isDark ? darkTileColor : area.color,
                        aspectRatio: '1/1',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                        zIndex: isHovered ? 10 : 1,
                        position: 'relative',
                        boxShadow: isHovered ? '0 2px 6px rgba(0,0,0,0.2)' : 'none'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls and Statistics in one row */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* Left Column: Controls + Explanation */}
        <div style={{
          flex: '2',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Controls */}
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#111827'
            }}>
              Adjust Distribution
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {areaGrids.map(area => {
                const darkCount = area.tiles.filter(t => t.isDark).length;
                
                return (
                  <div key={area.id}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '6px'
                    }}>
                      <label style={{
                        fontWeight: '600',
                        fontSize: '13px',
                        color: '#374151',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <ColorSquare color={area.color} size={12} />
                        {area.name}
                      </label>
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        {darkCount}/{totalTiles}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={area.probability}
                      onChange={(e) => updateAreaProbability(area.id, parseFloat(e.target.value))}
                      style={{
                        width: '100%',
                        height: '6px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanation - Now under controls */}
          <div style={{
            backgroundColor: '#e0f2fe',
            padding: '16px 20px',
            borderRadius: '8px',
            borderLeft: '4px solid #0ea5e9',
            flex: '1'
          }}>
            <div style={{
              fontSize: '13px',
              lineHeight: '1.6',
              color: '#075985'
            }}>
              <strong>Understanding conditional probability:</strong> Each region has 100 tiles with equal probability P(Region) = 0.25. 
              The <ColorSquare color={darkTileColor} size={13} /> <strong>dark blue tiles</strong> represent the same event across all regions. 
              <strong> P(<ColorSquare color={darkTileColor} size={13} /> | <ColorSquare color={areas[0].color} size={13} />)</strong> = (dark tiles in that region) / 100. 
              The <strong>total probability P(<ColorSquare color={darkTileColor} size={13} />)</strong> is calculated using the law of total probability: 
              sum of P(Region) × P(<ColorSquare color={darkTileColor} size={13} /> | Region) across all regions. 
              Notice how conditional probabilities vary by region—knowing which region you are in changes the likelihood of the event.
            </div>
          </div>
        </div>

        {/* Right Column: Statistics - Total Probability */}
        <div style={{
          flex: '1',
          backgroundColor: '#eff6ff',
          padding: '20px',
          borderRadius: '8px',
          border: '2px solid #3b82f6'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#1e40af',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            Total: P(<ColorSquare color={darkTileColor} size={14} />)
          </h3>

          <div style={{
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '6px',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginBottom: '4px',
              fontWeight: '500'
            }}>
              Total probability:
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: darkTileColor
            }}>
              {totalProbDarkBlue.toFixed(3)}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#9ca3af',
              marginTop: '4px'
            }}>
              {actualTotalDark} of {totalTiles * 4} tiles
            </div>
          </div>

          <div style={{
            backgroundColor: '#fef3c7',
            padding: '10px',
            borderRadius: '6px',
            fontSize: '11px',
            lineHeight: '1.5',
            color: '#78350f',
            fontFamily: 'monospace'
          }}>
            <div style={{ marginBottom: '6px', fontWeight: '600', fontSize: '12px', fontFamily: 'system-ui' }}>
              Law of Total Probability:
            </div>
            {areaGrids.map((area, index) => {
              const darkCount = area.tiles.filter(t => t.isDark).length;
              const conditionalProb = darkCount / totalTiles;
              
              return (
                <div key={area.id} style={{ marginBottom: '3px' }}>
                  {index > 0 && '+ '}P(<ColorSquare color={area.color} size={10} />) · P(<ColorSquare color={darkTileColor} size={10} />|<ColorSquare color={area.color} size={10} />)
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid #fbbf24', marginTop: '6px', paddingTop: '6px' }}>
              = {areas.map((area, index) => {
                const areaData = areaGrids.find(a => a.id === area.id);
                const darkCount = areaData.tiles.filter(t => t.isDark).length;
                const conditionalProb = darkCount / totalTiles;
                return (
                  <span key={area.id}>
                    {index > 0 && ' + '}
                    {probEachRegion.toFixed(2)}·{conditionalProb.toFixed(2)}
                  </span>
                );
              })}
            </div>
            <div style={{ marginTop: '4px', fontWeight: '600', fontSize: '12px' }}>
              = {totalProbDarkBlue.toFixed(3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}