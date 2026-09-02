import React, { useState } from 'react';

export default function ConditionalProbabilityVenn() {
  const [selectedCompartment, setSelectedCompartment] = useState(null);
  const [numCompartments, setNumCompartments] = useState(3);
  
  // SVG dimensions
  const width = 650;
  const height = 450;
  const padding = 40;
  const topPadding = 70; // Extra space for labels
  
  // Original sample space dimensions for ellipse calculation
  const originalWidth = width - 2 * padding;
  const originalHeight = height - 2 * padding;
  
  // Sample space rectangle
  const sampleSpace = {
    x: padding,
    y: topPadding,
    width: originalWidth,
    height: originalHeight
  };
  
  // Compartments (vertical divisions)
  const compartments = [];
  const compartmentWidth = sampleSpace.width / numCompartments;
  const compartmentColors = ['#93c5fd', '#fbbf24', '#f87171', '#fb923c'];
  const compartmentNames = ['B₁', 'B₂', 'B₃', 'B₄'];
  
  for (let i = 0; i < numCompartments; i++) {
    compartments.push({
      id: i,
      name: compartmentNames[i],
      color: compartmentColors[i],
      x: sampleSpace.x + i * compartmentWidth,
      y: sampleSpace.y,
      width: compartmentWidth,
      height: sampleSpace.height
    });
  }
  
  // Event A (ellipse that overlaps compartments) - BASED ON ORIGINAL DIMENSIONS
  const maxRx = originalWidth * 0.5;
  const maxRy = originalHeight * 0.5;
  
  const eventA = {
    cx: sampleSpace.x + originalWidth * 0.5,
    cy: sampleSpace.y + originalHeight * 0.5,
    rx: Math.min(originalWidth * 0.45, maxRx),
    ry: Math.min(originalHeight * 0.48, maxRy)
  };
  
  // Calculate actual ellipse-rectangle intersection using geometric integration
  const calculateEllipseRectIntersection = (compartmentId) => {
    const comp = compartments[compartmentId];
    
    // Ellipse equation: ((x - cx)/rx)^2 + ((y - cy)/ry)^2 = 1
    const cx = eventA.cx;
    const cy = eventA.cy;
    const rx = eventA.rx;
    const ry = eventA.ry;
    
    // Rectangle bounds
    const rectLeft = comp.x;
    const rectRight = comp.x + comp.width;
    const rectTop = comp.y;
    const rectBottom = comp.y + comp.height;
    
    // Ellipse bounds
    const ellipseLeft = cx - rx;
    const ellipseRight = cx + rx;
    const ellipseTop = cy - ry;
    const ellipseBottom = cy + ry;
    
    // Check if there's any overlap at all
    if (rectRight <= ellipseLeft || rectLeft >= ellipseRight ||
        rectBottom <= ellipseTop || rectTop >= ellipseBottom) {
      return 0;
    }
    
    // Intersection bounds
    const overlapLeft = Math.max(rectLeft, ellipseLeft);
    const overlapRight = Math.min(rectRight, ellipseRight);
    const overlapTop = Math.max(rectTop, ellipseTop);
    const overlapBottom = Math.min(rectBottom, ellipseBottom);
    
    // Numerical integration using sampling
    const samples = 100;
    let area = 0;
    const dx = (overlapRight - overlapLeft) / samples;
    const dy = (overlapBottom - overlapTop) / samples;
    
    for (let i = 0; i < samples; i++) {
      for (let j = 0; j < samples; j++) {
        const x = overlapLeft + (i + 0.5) * dx;
        const y = overlapTop + (j + 0.5) * dy;
        
        // Check if point is inside ellipse
        const ellipseTest = Math.pow((x - cx) / rx, 2) + Math.pow((y - cy) / ry, 2);
        
        if (ellipseTest <= 1) {
          area += dx * dy;
        }
      }
    }
    
    return area;
  };
  
  // Calculate intersection center for label placement
  const getIntersectionCenter = (compartmentId) => {
    const comp = compartments[compartmentId];
    
    // Find the center of the intersection region
    const cx = eventA.cx;
    const cy = eventA.cy;
    const rx = eventA.rx;
    const ry = eventA.ry;
    
    const rectLeft = comp.x;
    const rectRight = comp.x + comp.width;
    
    const ellipseLeft = cx - rx;
    const ellipseRight = cx + rx;
    
    const overlapLeft = Math.max(rectLeft, ellipseLeft);
    const overlapRight = Math.min(rectRight, ellipseRight);
    
    // Center X is middle of overlap region
    const centerX = (overlapLeft + overlapRight) / 2;
    
    // Center Y is ellipse center (since ellipse is vertically centered)
    const centerY = cy;
    
    return { x: centerX, y: centerY };
  };
  
  // Calculate total sample space area (raw pixels)
  const totalSampleSpaceAreaRaw = sampleSpace.width * sampleSpace.height;
  
  // Calculate intersection areas for each compartment (raw pixels)
  const intersectionAreasRaw = compartments.map((_, i) => calculateEllipseRectIntersection(i));
  
  // Calculate compartment areas (raw pixels)
  const compartmentAreasRaw = compartments.map(comp => comp.width * comp.height);
  
  // NORMALIZE TO CLEAN NUMBERS
  // We want Area(A) = 68 (a clean number)
  const targetAreaA = 68;
  const totalIntersectionRaw = intersectionAreasRaw.reduce((sum, area) => sum + area, 0);
  
  // Scale factor to make total intersection equal to target
  const scaleToTarget = targetAreaA / totalIntersectionRaw;
  
  // Now we need sample space. Since compartments are uniform, each is 1/n of sample space
  // If we want clean numbers, make sample space = 100
  const normalizedSampleSpaceArea = 100;
  
  // Calculate what each compartment area should be
  const normalizedCompartmentArea = normalizedSampleSpaceArea / numCompartments;
  
  // Scale intersections to hit our target total
  const normalizedIntersectionAreas = intersectionAreasRaw.map(area => 
    Math.round(area * scaleToTarget)
  );
  
  // Adjust for rounding - make sure they sum to exactly targetAreaA
  const currentSum = normalizedIntersectionAreas.reduce((sum, a) => sum + a, 0);
  if (currentSum !== targetAreaA) {
    // Adjust the largest one
    const maxIndex = normalizedIntersectionAreas.indexOf(Math.max(...normalizedIntersectionAreas));
    normalizedIntersectionAreas[maxIndex] += (targetAreaA - currentSum);
  }
  
  const normalizedEllipseArea = targetAreaA;
  
  // Calculate probabilities using normalized areas
  const probabilities = compartments.map((comp, i) => {
    // P(Bi) - uniform since compartments are equal
    const pB = normalizedCompartmentArea / normalizedSampleSpaceArea;
    
    // P(A ∩ Bi) - from intersection area
    const pAandB = normalizedIntersectionAreas[i] / normalizedSampleSpaceArea;
    
    // P(A | Bi) = P(A ∩ Bi) / P(Bi)
    const pAgivenB = pB > 0 ? pAandB / pB : 0;
    
    return {
      pB,
      pAandB,
      pAgivenB,
      intersectionArea: normalizedIntersectionAreas[i],
      compartmentArea: normalizedCompartmentArea
    };
  });
  
  // P(A) = sum of all P(A ∩ Bi)
  const totalProbA = probabilities.reduce((sum, prob) => sum + prob.pAandB, 0);
  
  return (
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
          The sample space Ω is partitioned into compartments. Event A (indigo ellipse) overlaps these compartments differently. 
          Click on any compartment to see P(A | Bᵢ) - the probability of A given that specific compartment.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-start'
      }}>
        {/* Left Column: Diagram + Explanation */}
        <div style={{ flex: '1' }}>
          {/* SVG Diagram */}
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '24px'
          }}>
            <svg width={width} height={height} style={{ display: 'block' }}>
              {/* Sample Space */}
              <rect
                x={sampleSpace.x}
                y={sampleSpace.y}
                width={sampleSpace.width}
                height={sampleSpace.height}
                fill="white"
                stroke="#374151"
                strokeWidth="1.5"
              />
              <text
                x={sampleSpace.x + sampleSpace.width - 10}
                y={sampleSpace.y + 20}
                fontSize="18"
                fontWeight="bold"
                fill="#374151"
                textAnchor="end"
              >
                Ω
              </text>
              
              {/* Compartment division lines */}
              {compartments.map((comp, i) => (
                i > 0 && (
                  <line
                    key={`line-${comp.id}`}
                    x1={comp.x}
                    y1={comp.y}
                    x2={comp.x}
                    y2={comp.y + comp.height}
                    stroke="#9ca3af"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                  />
                )
              ))}
              
              {/* Compartment labels */}
              {compartments.map((comp, i) => (
                <text
                  key={`label-${comp.id}`}
                  x={comp.x + comp.width / 2}
                  y={comp.y - 15}
                  fontSize="16"
                  fontWeight="600"
                  fill="#374151"
                  textAnchor="middle"
                  style={{ pointerEvents: 'none' }}
                >
                  {comp.name}
                </text>
              ))}
              
              {/* Event A - full ellipse */}
              {selectedCompartment === null && (
                <ellipse
                  cx={eventA.cx}
                  cy={eventA.cy}
                  rx={eventA.rx}
                  ry={eventA.ry}
                  fill="#6366f1"
                  fillOpacity="0.3"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                />
              )}
              
              {/* Event A - intersection with selected compartment */}
              {selectedCompartment !== null && (
                <g>
                  {/* Full A ellipse (faded) */}
                  <ellipse
                    cx={eventA.cx}
                    cy={eventA.cy}
                    rx={eventA.rx}
                    ry={eventA.ry}
                    fill="#6366f1"
                    fillOpacity="0.1"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Clipped intersection */}
                  <defs>
                    <clipPath id={`clip-${selectedCompartment}`}>
                      <rect
                        x={compartments[selectedCompartment].x}
                        y={compartments[selectedCompartment].y}
                        width={compartments[selectedCompartment].width}
                        height={compartments[selectedCompartment].height}
                      />
                    </clipPath>
                  </defs>
                  
                  <ellipse
                    cx={eventA.cx}
                    cy={eventA.cy}
                    rx={eventA.rx}
                    ry={eventA.ry}
                    fill="#6366f1"
                    fillOpacity="0.6"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                    clipPath={`url(#clip-${selectedCompartment})`}
                  />
                </g>
              )}
              
              {/* Event A label */}
              <text
                x={eventA.cx}
                y={eventA.cy}
                fontSize="24"
                fontWeight="bold"
                fill="#4338ca"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ pointerEvents: 'none' }}
              >
                A
              </text>
              
              {/* Ellipse area label */}
              <g>
                <rect
                  x={eventA.cx - 70}
                  y={eventA.cy - 40}
                  width="140"
                  height="22"
                  fill="white"
                  opacity="0.9"
                  rx="4"
                  style={{ pointerEvents: 'none' }}
                />
                <text
                  x={eventA.cx}
                  y={eventA.cy - 25}
                  fontSize="11"
                  fontWeight="600"
                  fill="#4338ca"
                  textAnchor="middle"
                  style={{ pointerEvents: 'none' }}
                >
                  Area(A) = {normalizedEllipseArea}
                </text>
              </g>
              
              {/* Sample space area label */}
              <g>
                <rect
                  x={sampleSpace.x + 8}
                  y={sampleSpace.y + sampleSpace.height - 32}
                  width="140"
                  height="22"
                  fill="white"
                  opacity="0.9"
                  rx="4"
                  style={{ pointerEvents: 'none' }}
                />
                <text
                  x={sampleSpace.x + 78}
                  y={sampleSpace.y + sampleSpace.height - 17}
                  fontSize="11"
                  fontWeight="600"
                  fill="#374151"
                  textAnchor="middle"
                  style={{ pointerEvents: 'none' }}
                >
                  Area(Ω) = {normalizedSampleSpaceArea}
                </text>
              </g>
              
              {/* Intersection labels P(A∩Bᵢ) - NOW POSITIONED IN INTERSECTION CENTERS */}
              {compartments.map((comp, i) => {
                const prob = probabilities[i];
                const center = getIntersectionCenter(i);
                
                // Offset the label below the center
                const labelX = center.x;
                const labelY = center.y + 35;
                
                return (
                  <g key={`intersection-label-${i}`}>
                    {/* Background rectangle for readability */}
                    <rect
                      x={labelX - 70}
                      y={labelY - 12}
                      width="140"
                      height="24"
                      fill="white"
                      opacity="0.9"
                      rx="4"
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Area and probability label */}
                    <text
                      x={labelX}
                      y={labelY + 4}
                      fontSize="11"
                      fontWeight="600"
                      fill="#1f2937"
                      textAnchor="middle"
                      style={{ pointerEvents: 'none' }}
                    >
                      Area(A∩{comp.name}) = {normalizedIntersectionAreas[i]}
                    </text>
                  </g>
                );
              })}
              
              {/* Clickable compartment areas - placed last so they're on top */}
              {compartments.map((comp, i) => (
                <rect
                  key={`click-${comp.id}`}
                  x={comp.x}
                  y={comp.y}
                  width={comp.width}
                  height={comp.height}
                  fill={selectedCompartment === i ? comp.color : 'transparent'}
                  opacity={selectedCompartment === i ? 0.3 : 0.01}
                  stroke={selectedCompartment === i ? comp.color : 'none'}
                  strokeWidth={selectedCompartment === i ? 3 : 0}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedCompartment(selectedCompartment === i ? null : i)}
                  onMouseEnter={(e) => {
                    if (selectedCompartment !== i) {
                      e.target.style.opacity = 0.25;
                      e.target.style.fill = comp.color;
                      e.target.style.stroke = comp.color;
                      e.target.style.strokeWidth = '2';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCompartment !== i) {
                      e.target.style.opacity = 0.01;
                      e.target.style.fill = 'transparent';
                      e.target.style.stroke = 'none';
                      e.target.style.strokeWidth = '0';
                    }
                  }}
                />
              ))}
            </svg>
            
            {/* Instructions */}
            <div style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#6b7280',
              textAlign: 'center'
            }}>
              Click on any compartment to see the conditional probability
            </div>
          </div>
          
          {/* Detailed Explanation Section */}
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderLeft: '4px solid #6366f1'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#111827'
            }}>
              How This Visualization Works
            </h3>
            
            <div style={{
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#374151'
            }}>
              <p style={{ marginBottom: '14px' }}>
                <strong>Interactive Elements:</strong> The diagram shows a sample space Ω divided into compartments (B₁, B₂, B₃, etc.). 
                Event A is represented by an indigo ellipse that overlaps multiple compartments. When you click on a compartment, 
                the visualization highlights only the portion of A that intersects with that compartment, showing you the 
                region A ∩ Bᵢ.
              </p>
              
              <p style={{ marginBottom: '14px' }}>
                <strong>Conditional Probability Definition:</strong> The conditional probability P(A | Bᵢ) asks: 
                Given that we know event Bᵢ has occurred, what is the probability that A also occurs? 
                This is calculated as P(A | Bᵢ) = P(A ∩ Bᵢ) / P(Bᵢ). When we condition on Bᵢ, we restrict our 
                view to only that compartment, treating it as our new sample space.
              </p>
              
              <p style={{ marginBottom: '14px' }}>
                <strong>Why Probabilities Differ:</strong> Notice how P(A | B₁) ≠ P(A | B₂) ≠ P(A | B₃). 
                This happens because event A overlaps each compartment to different degrees. Compartments where A has 
                more overlap will have higher conditional probabilities. This demonstrates that knowing which compartment 
                we are in (the condition) significantly affects the probability of event A.
              </p>
              
              <p style={{ marginBottom: '0' }}>
                <strong>Law of Total Probability:</strong> The total probability P(A) can be computed by summing 
                the contributions from each compartment: P(A) = P(B₁)·P(A|B₁) + P(B₂)·P(A|B₂) + P(B₃)·P(A|B₃) + ... 
                This formula shows that the overall probability of A is a weighted average of its conditional probabilities 
                across all possible conditions (compartments), where each weight is the probability of that compartment.
              </p>
            </div>
          </div>
        </div>
        
        {/* Middle Column: Total Probability + Settings */}
        <div style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Total Probability */}
          <div style={{
            backgroundColor: '#eef2ff',
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid #6366f1'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#4338ca'
            }}>
              Total Probability
            </h3>
            <div style={{
              backgroundColor: 'white',
              padding: '16px',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '13px',
                color: '#6b7280',
                marginBottom: '6px'
              }}>
                P(A)
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#4f46e5'
              }}>
                {totalProbA.toFixed(2)}
              </div>
            </div>
            
            {/* Calculation breakdown */}
            <div style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#6b7280'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                How Area(A) is calculated:
              </div>
              <div style={{ fontFamily: 'monospace', lineHeight: '1.8' }}>
                {compartments.map((comp, i) => (
                  <div key={i}>
                    Area(A∩{comp.name}) = {normalizedIntersectionAreas[i]}
                  </div>
                ))}
                <div style={{ 
                  borderTop: '1px solid #e5e7eb', 
                  marginTop: '6px', 
                  paddingTop: '6px',
                  fontWeight: '600',
                  color: '#4f46e5'
                }}>
                  Area(A) = {normalizedIntersectionAreas.join(' + ')}
                </div>
                <div style={{ marginTop: '2px', fontWeight: '600', color: '#4f46e5' }}>
                  = {normalizedEllipseArea}
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#6b7280'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                P(A) from total area:
              </div>
              <div style={{ fontFamily: 'monospace', lineHeight: '1.8' }}>
                <div>Area(A) = {normalizedEllipseArea}</div>
                <div>Area(Ω) = {normalizedSampleSpaceArea}</div>
                <div style={{ 
                  borderTop: '1px solid #e5e7eb', 
                  marginTop: '6px', 
                  paddingTop: '6px',
                  fontWeight: '600',
                  color: '#4f46e5'
                }}>
                  P(A) = {normalizedEllipseArea} / {normalizedSampleSpaceArea}
                </div>
                <div style={{ marginTop: '2px', fontWeight: '600', color: '#4f46e5' }}>
                  = {totalProbA.toFixed(2)}
                </div>
              </div>
            </div>
            
            <div style={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '6px',
              fontSize: '11px',
              color: '#6b7280'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: '600', color: '#374151' }}>
                Verification (Law of Total Probability):
              </div>
              <div style={{ fontFamily: 'monospace', lineHeight: '1.6' }}>
                {compartments.map((comp, i) => {
                  const prob = probabilities[i];
                  return (
                    <div key={i}>
                      P({comp.name})·P(A|{comp.name}) = {prob.pB.toFixed(2)}·{prob.pAgivenB.toFixed(2)} = {(prob.pB * prob.pAgivenB).toFixed(2)}
                    </div>
                  );
                })}
                <div style={{ borderTop: '1px solid #e5e7eb', marginTop: '4px', paddingTop: '4px', fontWeight: '600' }}>
                  Sum = {compartments.map((_, i) => (probabilities[i].pB * probabilities[i].pAgivenB).toFixed(2)).join(' + ')}
                </div>
                <div style={{ fontWeight: '600', color: '#4f46e5' }}>
                  = {totalProbA.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          
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
              marginBottom: '12px',
              color: '#111827'
            }}>
              Settings
            </h3>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Number of compartments: {numCompartments}
            </label>
            <input
              type="range"
              min="2"
              max="4"
              step="1"
              value={numCompartments}
              onChange={(e) => {
                setNumCompartments(parseInt(e.target.value));
                setSelectedCompartment(null);
              }}
              style={{
                width: '100%',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        {/* Right Column: Conditional Probabilities */}
        <div style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Conditional Probabilities */}
          <div style={{
            backgroundColor: '#eff6ff',
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid #3b82f6'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#1e40af'
            }}>
              Conditional Probabilities
            </h3>
            
            {compartments.map((comp, i) => {
              const isSelected = selectedCompartment === i;
              const prob = probabilities[i];
              
              return (
                <div
                  key={comp.id}
                  onClick={() => setSelectedCompartment(isSelected ? null : i)}
                  style={{
                    padding: '12px',
                    marginBottom: '8px',
                    backgroundColor: isSelected ? comp.color : 'white',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    border: isSelected ? `2px solid ${comp.color}` : '1px solid #e5e7eb',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      P(A | {comp.name})
                    </span>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      color: isSelected ? '#111827' : '#6b7280'
                    }}>
                      {prob.pAgivenB.toFixed(2)}
                    </span>
                  </div>
                  {(
                    <div style={{
                      fontSize: '11px',
                      color: '#6b7280',
                      fontFamily: 'monospace',
                      marginTop: '8px',
                      paddingTop: '8px',
                      borderTop: '1px solid #e5e7eb',
                      lineHeight: '1.8'
                    }}>
                      <div style={{ fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                        Step 1: Areas
                      </div>
                      <div>Area(A ∩ {comp.name}) = {prob.intersectionArea}</div>
                      <div>Area({comp.name}) = {prob.compartmentArea.toFixed(2)}</div>
                      <div>Area(Ω) = {normalizedSampleSpaceArea}</div>
                      
                      <div style={{ fontWeight: '600', color: '#374151', marginTop: '8px', marginBottom: '4px' }}>
                        Step 2: Convert to probabilities
                      </div>
                      <div>
                        P(A ∩ {comp.name}) = {prob.intersectionArea}/{normalizedSampleSpaceArea} = {prob.pAandB.toFixed(2)}
                      </div>
                      <div>
                        P({comp.name}) = {prob.compartmentArea.toFixed(2)}/{normalizedSampleSpaceArea} = {prob.pB.toFixed(2)}
                      </div>
                      
                      <div style={{ 
                        marginTop: '8px', 
                        paddingTop: '8px', 
                        borderTop: '1px solid #e5e7eb',
                        fontWeight: '600', 
                        color: '#111827' 
                      }}>
                        Step 3: Calculate conditional
                      </div>
                      <div style={{ fontWeight: '600', color: '#111827' }}>
                        P(A|{comp.name}) = P(A∩{comp.name})/P({comp.name})
                      </div>
                      <div style={{ fontWeight: '600', color: '#111827' }}>
                        = {prob.pAandB.toFixed(2)} / {prob.pB.toFixed(2)} = {prob.pAgivenB.toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Law of Total Probability */}
          {selectedCompartment === null && (
            <div style={{
              backgroundColor: '#fef3c7',
              padding: '16px',
              borderRadius: '8px',
              borderLeft: '4px solid #f59e0b'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '700',
                marginBottom: '10px',
                color: '#78350f'
              }}>
                Law of Total Probability
              </h4>
              <div style={{
                fontSize: '12px',
                fontFamily: 'monospace',
                color: '#92400e',
                lineHeight: '1.6'
              }}>
                P(A) = {compartments.map((comp, i) => (
                  <span key={i}>
                    {i > 0 && ' + '}
                    <br />P({comp.name})·P(A|{comp.name})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}