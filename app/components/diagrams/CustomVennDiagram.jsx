// // import React, { useState } from 'react';

// // const CustomVennDiagram = ({
// //   scenario,
// //   width = 600,
// //   height = 500,
// //   backgroundColor = '#ffffff',
// //   showTooltips = false,
// //   tooltipStyle = {
// //     backgroundColor: '#333',
// //     color: '#fff',
// //     padding: '8px 12px',
// //     borderRadius: '4px',
// //     fontSize: '14px',
// //     pointerEvents: 'none',
// //     position: 'absolute',
// //     zIndex: 1000,
// //     whiteSpace: 'nowrap'
// //   }
// // }) => {
  
// //   const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  
// //   const { 
// //     title,
// //     circles,
// //     regions,
// //     settings 
// //   } = scenario;
  
// //   const createPattern = (pattern, color, size, index) => {
// //     const patternId = `pattern-region-${index}`;
    
// //     if (pattern === 'stripes') {
// //       return (
// //         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
// //           <rect width={size} height={size} fill="transparent" />
// //           <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="2" />
// //         </pattern>
// //       );
// //     } else if (pattern === 'dots') {
// //       return (
// //         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
// //           <rect width={size} height={size} fill="transparent" />
// //           <circle cx={size/2} cy={size/2} r={size/4} fill={color} />
// //         </pattern>
// //       );
// //     } else if (pattern === 'grid') {
// //       return (
// //         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
// //           <rect width={size} height={size} fill="transparent" />
// //           <line x1="0" y1="0" x2={size} y2="0" stroke={color} strokeWidth="1" />
// //           <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="1" />
// //         </pattern>
// //       );
// //     } else if (pattern === 'diagonal') {
// //       return (
// //         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
// //           <rect width={size} height={size} fill="transparent" />
// //           <line x1="0" y1="0" x2={size} y2={size} stroke={color} strokeWidth="2" />
// //         </pattern>
// //       );
// //     }
    
// //     return null;
// //   };
  
// //   const handleRegionMouseEnter = (region, event) => {
// //     if (showTooltips && region.tooltip) {
// //       setTooltip({
// //         visible: true,
// //         content: region.tooltip,
// //         x: event.clientX,
// //         y: event.clientY
// //       });
// //     }
// //   };
  
// //   const handleRegionMouseLeave = () => {
// //     if (showTooltips) {
// //       setTooltip({ visible: false, content: '', x: 0, y: 0 });
// //     }
// //   };
  
// //   const handleMouseMove = (event) => {
// //     if (showTooltips && tooltip.visible) {
// //       setTooltip(prev => ({
// //         ...prev,
// //         x: event.clientX,
// //         y: event.clientY
// //       }));
// //     }
// //   };
  
// //   return (
// //     <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
// //       <svg 
// //         width={width} 
// //         height={height}
// //         style={{ backgroundColor }}
// //       >
// //         <defs>
// //           {regions && regions.map((region, index) => 
// //             region.pattern ? createPattern(
// //               region.pattern, 
// //               region.patternColor || '#000', 
// //               region.patternSize || 10, 
// //               index
// //             ) : null
// //           )}
          
// //           {regions && regions.map((region, index) => {
// //             const { include, exclude = [] } = region;
// //             const excludedCircles = circles.filter(c => exclude.includes(c.id));
            
// //             if (excludedCircles.length > 0) {
// //               return (
// //                 <mask id={`mask-region-${index}`} key={`mask-${index}`}>
// //                   <rect x="0" y="0" width={width} height={height} fill="white" />
// //                   {excludedCircles.map((circle, i) => (
// //                     <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} fill="black" />
// //                   ))}
// //                 </mask>
// //               );
// //             }
// //             return null;
// //           })}
          
// //           {regions && regions.map((region, index) => {
// //             const { include } = region;
// //             const clipId = `clip-region-${index}`;
// //             const includedCircles = circles.filter(c => include.includes(c.id));
            
// //             return (
// //               <clipPath id={clipId} key={clipId}>
// //                 {includedCircles.map((circle, i) => (
// //                   <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} />
// //                 ))}
// //               </clipPath>
// //             );
// //           })}
// //         </defs>
        
// //         {title && (
// //           <text
// //             x={width / 2}
// //             y={title.y || 30}
// //             textAnchor="middle"
// //             fontSize={title.fontSize || 24}
// //             fontWeight={title.fontWeight || 'bold'}
// //             fill={title.color || '#000'}
// //           >
// //             {title.text}
// //           </text>
// //         )}
        
// //         {regions && regions.map((region, index) => {
// //           const { include, exclude = [] } = region;
// //           const includedCircles = circles.filter(c => include.includes(c.id));
          
// //           if (includedCircles.length === 0) return null;
          
// //           const minX = Math.min(...includedCircles.map(c => c.cx - c.r));
// //           const maxX = Math.max(...includedCircles.map(c => c.cx + c.r));
// //           const minY = Math.min(...includedCircles.map(c => c.cy - c.r));
// //           const maxY = Math.max(...includedCircles.map(c => c.cy + c.r));
          
// //           const fillValue = region.pattern 
// //             ? `url(#pattern-region-${index})` 
// //             : (region.fill || 'transparent');
          
// //           const hasMask = exclude.length > 0;
          
// //           return (
// //             <g key={`region-${index}`}>
// //               <rect
// //                 x={minX}
// //                 y={minY}
// //                 width={maxX - minX}
// //                 height={maxY - minY}
// //                 fill={fillValue}
// //                 clipPath={`url(#clip-region-${index})`}
// //                 mask={hasMask ? `url(#mask-region-${index})` : undefined}
// //                 onMouseEnter={(e) => handleRegionMouseEnter(region, e)}
// //                 onMouseLeave={handleRegionMouseLeave}
// //                 onMouseMove={handleMouseMove}
// //                 style={{ cursor: region.tooltip ? 'pointer' : 'default' }}
// //               />
// //             </g>
// //           );
// //         })}
        
// //         {circles && circles.map((circle, index) => {
// //           return (
// //             <g key={circle.id || index}>
// //               <circle
// //                 cx={circle.cx}
// //                 cy={circle.cy}
// //                 r={circle.r}
// //                 fill="none"
// //                 stroke={circle.stroke}
// //                 strokeWidth={circle.strokeWidth}
// //                 pointerEvents="none"
// //               />
// //             </g>
// //           );
// //         })}
        
// //         {circles && circles.map((circle, index) => {
// //           if (!circle.label || !circle.label.text) return null;
          
// //           let labelX = circle.label?.x !== undefined ? circle.label.x : circle.cx;
// //           let labelY = circle.label?.y !== undefined ? circle.label.y : circle.cy;
          
// //           if (circle.label?.offsetX !== undefined) labelX = circle.cx + circle.label.offsetX;
// //           if (circle.label?.offsetY !== undefined) labelY = circle.cy + circle.label.offsetY;
          
// //           return (
// //             <text
// //               key={`circle-label-${index}`}
// //               x={labelX}
// //               y={labelY}
// //               textAnchor="middle"
// //               dominantBaseline="middle"
// //               fontSize={circle.label.fontSize || 18}
// //               fontWeight={circle.label.fontWeight || 'bold'}
// //               fill={circle.label.color || '#333'}
// //               pointerEvents="none"
// //             >
// //               {circle.label.text}
// //             </text>
// //           );
// //         })}
        
// //         {regions && regions.map((region, index) => {
// //           if (!region.label) return null;
          
// //           return (
// //             <text
// //               key={`region-label-${index}`}
// //               x={region.label.x}
// //               y={region.label.y}
// //               textAnchor="middle"
// //               dominantBaseline="middle"
// //               fontSize={region.label.fontSize || 14}
// //               fontWeight={region.label.fontWeight || 'normal'}
// //               fill={region.label.color || '#666'}
// //               pointerEvents="none"
// //             >
// //               {region.label.text}
// //             </text>
// //           );
// //         })}
// //       </svg>
      
// //       {showTooltips && tooltip.visible && (
// //         <div
// //           style={{
// //             ...tooltipStyle,
// //             left: `${tooltip.x + 10}px`,
// //             top: `${tooltip.y + 10}px`,
// //           }}
// //         >
// //           {tooltip.content}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CustomVennDiagram;


// import React, { useState } from 'react';

// const CustomVennDiagram = ({
//   scenario,
//   width = 600,
//   height = 500,
//   backgroundColor = '#ffffff',
//   showTooltips = false,
//   tooltipStyle = {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '8px 12px',
//     borderRadius: '4px',
//     fontSize: '14px',
//     pointerEvents: 'none',
//     position: 'absolute',
//     zIndex: 1000,
//     whiteSpace: 'nowrap'
//   }
// }) => {
  
//   const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  
//   const { 
//     title,
//     circles,
//     regions,
//     settings 
//   } = scenario;
  
//   const createPattern = (pattern, color, size, index) => {
//     const patternId = `pattern-region-${index}`;
    
//     if (pattern === 'stripes') {
//       return (
//         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
//           <rect width={size} height={size} fill="transparent" />
//           <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="2" />
//         </pattern>
//       );
//     } else if (pattern === 'dots') {
//       return (
//         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
//           <rect width={size} height={size} fill="transparent" />
//           <circle cx={size/2} cy={size/2} r={size/4} fill={color} />
//         </pattern>
//       );
//     } else if (pattern === 'grid') {
//       return (
//         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
//           <rect width={size} height={size} fill="transparent" />
//           <line x1="0" y1="0" x2={size} y2="0" stroke={color} strokeWidth="1" />
//           <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="1" />
//         </pattern>
//       );
//     } else if (pattern === 'diagonal') {
//       return (
//         <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
//           <rect width={size} height={size} fill="transparent" />
//           <line x1="0" y1="0" x2={size} y2={size} stroke={color} strokeWidth="2" />
//         </pattern>
//       );
//     }
    
//     return null;
//   };
  
//   const handleRegionMouseEnter = (region, event) => {
//     if (showTooltips && region.tooltip) {
//       setTooltip({
//         visible: true,
//         content: region.tooltip,
//         x: event.clientX,
//         y: event.clientY
//       });
//     }
//   };
  
//   const handleRegionMouseLeave = () => {
//     if (showTooltips) {
//       setTooltip({ visible: false, content: '', x: 0, y: 0 });
//     }
//   };
  
//   const handleMouseMove = (event) => {
//     if (showTooltips && tooltip.visible) {
//       setTooltip(prev => ({
//         ...prev,
//         x: event.clientX,
//         y: event.clientY
//       }));
//     }
//   };
  
//   const reversedRegions = regions ? [...regions].reverse() : [];
  
//   return (
//     <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
//       <svg 
//         width={width} 
//         height={height}
//         style={{ backgroundColor }}
//       >
//         <defs>
//           {regions && regions.map((region, index) => 
//             region.pattern ? createPattern(
//               region.pattern, 
//               region.patternColor || '#000', 
//               region.patternSize || 10, 
//               index
//             ) : null
//           )}
          
//           {regions && regions.map((region, index) => {
//             const { include, exclude = [] } = region;
//             const excludedCircles = circles.filter(c => exclude.includes(c.id));
            
//             if (excludedCircles.length > 0) {
//               return (
//                 <mask id={`mask-region-${index}`} key={`mask-${index}`}>
//                   <rect x="0" y="0" width={width} height={height} fill="white" />
//                   {excludedCircles.map((circle, i) => (
//                     <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} fill="black" />
//                   ))}
//                 </mask>
//               );
//             }
//             return null;
//           })}
          
//           {regions && regions.map((region, index) => {
//             const { include } = region;
//             const clipId = `clip-region-${index}`;
//             const includedCircles = circles.filter(c => include.includes(c.id));
            
//             return (
//               <clipPath id={clipId} key={clipId}>
//                 {includedCircles.map((circle, i) => (
//                   <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} />
//                 ))}
//               </clipPath>
//             );
//           })}
//         </defs>
        
//         {title && (
//           <text
//             x={width / 2}
//             y={title.y || 30}
//             textAnchor="middle"
//             fontSize={title.fontSize || 24}
//             fontWeight={title.fontWeight || 'bold'}
//             fill={title.color || '#000'}
//           >
//             {title.text}
//           </text>
//         )}
        
//         {reversedRegions.map((region, reverseIndex) => {
//           const originalIndex = regions.length - 1 - reverseIndex;
//           const { include, exclude = [] } = region;
//           const includedCircles = circles.filter(c => include.includes(c.id));
          
//           if (includedCircles.length === 0) return null;
          
//           const minX = Math.min(...includedCircles.map(c => c.cx - c.r));
//           const maxX = Math.max(...includedCircles.map(c => c.cx + c.r));
//           const minY = Math.min(...includedCircles.map(c => c.cy - c.r));
//           const maxY = Math.max(...includedCircles.map(c => c.cy + c.r));
          
//           const fillValue = region.pattern 
//             ? `url(#pattern-region-${originalIndex})` 
//             : (region.fill || 'transparent');
          
//           const hasMask = exclude.length > 0;
          
//           return (
//             <g key={`region-${originalIndex}`}>
//               <rect
//                 x={minX}
//                 y={minY}
//                 width={maxX - minX}
//                 height={maxY - minY}
//                 fill={fillValue}
//                 clipPath={`url(#clip-region-${originalIndex})`}
//                 mask={hasMask ? `url(#mask-region-${originalIndex})` : undefined}
//                 onMouseEnter={(e) => handleRegionMouseEnter(region, e)}
//                 onMouseLeave={handleRegionMouseLeave}
//                 onMouseMove={handleMouseMove}
//                 style={{ cursor: region.tooltip ? 'pointer' : 'default' }}
//               />
//             </g>
//           );
//         })}
        
//         {circles && circles.map((circle, index) => {
//           return (
//             <g key={circle.id || index}>
//               <circle
//                 cx={circle.cx}
//                 cy={circle.cy}
//                 r={circle.r}
//                 fill="none"
//                 stroke={circle.stroke}
//                 strokeWidth={circle.strokeWidth}
//                 pointerEvents="none"
//               />
//             </g>
//           );
//         })}
        
//         {circles && circles.map((circle, index) => {
//           if (!circle.label || !circle.label.text) return null;
          
//           let labelX = circle.label?.x !== undefined ? circle.label.x : circle.cx;
//           let labelY = circle.label?.y !== undefined ? circle.label.y : circle.cy;
          
//           if (circle.label?.offsetX !== undefined) labelX = circle.cx + circle.label.offsetX;
//           if (circle.label?.offsetY !== undefined) labelY = circle.cy + circle.label.offsetY;
          
//           return (
//             <text
//               key={`circle-label-${index}`}
//               x={labelX}
//               y={labelY}
//               textAnchor="middle"
//               dominantBaseline="middle"
//               fontSize={circle.label.fontSize || 18}
//               fontWeight={circle.label.fontWeight || 'bold'}
//               fill={circle.label.color || '#333'}
//               pointerEvents="none"
//             >
//               {circle.label.text}
//             </text>
//           );
//         })}
        
//         {regions && regions.map((region, index) => {
//           if (!region.label) return null;
          
//           return (
//             <text
//               key={`region-label-${index}`}
//               x={region.label.x}
//               y={region.label.y}
//               textAnchor="middle"
//               dominantBaseline="middle"
//               fontSize={region.label.fontSize || 14}
//               fontWeight={region.label.fontWeight || 'normal'}
//               fill={region.label.color || '#666'}
//               pointerEvents="none"
//             >
//               {region.label.text}
//             </text>
//           );
//         })}
//       </svg>
      
//       {showTooltips && tooltip.visible && (
//         <div
//           style={{
//             ...tooltipStyle,
//             left: `${tooltip.x + 10}px`,
//             top: `${tooltip.y + 10}px`,
//           }}
//         >
//           {tooltip.content}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomVennDiagram;



import React, { useState } from 'react';

const CustomVennDiagram = ({
  scenario,
  width = 600,
  height = 500,
  backgroundColor = '#ffffff',
  showTooltips = true,
  tooltipStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1000,
    whiteSpace: 'nowrap'
  }
}) => {
  
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
  
  const { 
    title,
    circles,
    regions,
    settings 
  } = scenario;
  
  const createPattern = (pattern, color, size, index) => {
    const patternId = `pattern-region-${index}`;
    
    if (!pattern) return null;
    
    if (pattern === 'stripes') {
      return (
        <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="transparent" />
          <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="2" />
        </pattern>
      );
    } else if (pattern === 'dots') {
      return (
        <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="transparent" />
          <circle cx={size/2} cy={size/2} r={size/4} fill={color} />
        </pattern>
      );
    } else if (pattern === 'grid') {
      return (
        <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="transparent" />
          <line x1="0" y1="0" x2={size} y2="0" stroke={color} strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2={size} stroke={color} strokeWidth="1" />
        </pattern>
      );
    } else if (pattern === 'diagonal') {
      return (
        <pattern id={patternId} key={patternId} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="transparent" />
          <line x1="0" y1="0" x2={size} y2={size} stroke={color} strokeWidth="2" />
        </pattern>
      );
    }
    
    return null;
  };
  
  const isPointInCircle = (x, y, circle) => {
    const dx = x - circle.cx;
    const dy = y - circle.cy;
    return (dx * dx + dy * dy) <= (circle.r * circle.r);
  };
  
  const getRegionAtPoint = (x, y) => {
    const insideCircles = circles.map(circle => isPointInCircle(x, y, circle));
    
    for (let i = 0; i < regions.length; i++) {
      const region = regions[i];
      const { include, exclude = [] } = region;
      
      const isInIncluded = include.every(id => {
        const circleIndex = circles.findIndex(c => c.id === id);
        return insideCircles[circleIndex];
      });
      
      const isInExcluded = exclude.some(id => {
        const circleIndex = circles.findIndex(c => c.id === id);
        return insideCircles[circleIndex];
      });
      
      if (isInIncluded && !isInExcluded) {
        return region;
      }
    }
    
    return null;
  };
  
  const handleSvgMouseMove = (event) => {
    if (!showTooltips) return;
    
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const region = getRegionAtPoint(x, y);
    
    if (region && region.tooltip) {
      setTooltip({
        visible: true,
        content: region.tooltip,
        x: event.clientX,
        y: event.clientY
      });
    } else {
      setTooltip({ visible: false, content: '', x: 0, y: 0 });
    }
  };
  
  const handleSvgMouseLeave = () => {
    if (showTooltips) {
      setTooltip({ visible: false, content: '', x: 0, y: 0 });
    }
  };
  
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <svg 
        width={width} 
        height={height}
        style={{ backgroundColor }}
        onMouseMove={handleSvgMouseMove}
        onMouseLeave={handleSvgMouseLeave}
      >
        <defs>
          {regions && regions.map((region, index) => 
            region.pattern ? createPattern(
              region.pattern, 
              region.patternColor || '#000', 
              region.patternSize || 10, 
              index
            ) : null
          )}
          
          {regions && regions.map((region, index) => {
            const { include, exclude = [] } = region;
            const excludedCircles = circles.filter(c => exclude.includes(c.id));
            
            if (excludedCircles.length > 0) {
              return (
                <mask id={`mask-region-${index}`} key={`mask-${index}`}>
                  <rect x="0" y="0" width={width} height={height} fill="white" />
                  {excludedCircles.map((circle, i) => (
                    <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} fill="black" />
                  ))}
                </mask>
              );
            }
            return null;
          })}
          
          {regions && regions.map((region, index) => {
            const { include } = region;
            const clipId = `clip-region-${index}`;
            const includedCircles = circles.filter(c => include.includes(c.id));
            
            return (
              <clipPath id={clipId} key={clipId}>
                {includedCircles.map((circle, i) => (
                  <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} />
                ))}
              </clipPath>
            );
          })}
        </defs>
        
        {title && (
          <text
            x={width / 2}
            y={title.y || 30}
            textAnchor="middle"
            fontSize={title.fontSize || 24}
            fontWeight={title.fontWeight || 'bold'}
            fill={title.color || '#000'}
          >
            {title.text}
          </text>
        )}
        
        {regions && regions.map((region, index) => {
          const { include, exclude = [] } = region;
          const includedCircles = circles.filter(c => include.includes(c.id));
          
          if (includedCircles.length === 0) return null;
          
          const minX = Math.min(...includedCircles.map(c => c.cx - c.r));
          const maxX = Math.max(...includedCircles.map(c => c.cx + c.r));
          const minY = Math.min(...includedCircles.map(c => c.cy - c.r));
          const maxY = Math.max(...includedCircles.map(c => c.cy + c.r));
          
          const fillValue = region.pattern 
            ? `url(#pattern-region-${index})` 
            : (region.fill || 'transparent');
          
          const hasMask = exclude.length > 0;
          
          return (
            <g key={`region-${index}`}>
              <rect
                x={minX}
                y={minY}
                width={maxX - minX}
                height={maxY - minY}
                fill={fillValue}
                clipPath={`url(#clip-region-${index})`}
                mask={hasMask ? `url(#mask-region-${index})` : undefined}
                pointerEvents="none"
              />
            </g>
          );
        })}
        
        {circles && circles.map((circle, index) => {
          return (
            <g key={circle.id || index}>
              <circle
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill="none"
                stroke={circle.stroke}
                strokeWidth={circle.strokeWidth}
                pointerEvents="none"
              />
            </g>
          );
        })}
        
        {circles && circles.map((circle, index) => {
          if (!circle.label || !circle.label.text) return null;
          
          let labelX = circle.label?.x !== undefined ? circle.label.x : circle.cx;
          let labelY = circle.label?.y !== undefined ? circle.label.y : circle.cy;
          
          if (circle.label?.offsetX !== undefined) labelX = circle.cx + circle.label.offsetX;
          if (circle.label?.offsetY !== undefined) labelY = circle.cy + circle.label.offsetY;
          
          return (
            <text
              key={`circle-label-${index}`}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={circle.label.fontSize || 18}
              fontWeight={circle.label.fontWeight || 'bold'}
              fill={circle.label.color || '#333'}
              pointerEvents="none"
            >
              {circle.label.text}
            </text>
          );
        })}
        
        {regions && regions.map((region, index) => {
          if (!region.label) return null;
          
          return (
            <text
              key={`region-label-${index}`}
              x={region.label.x}
              y={region.label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={region.label.fontSize || 14}
              fontWeight={region.label.fontWeight || 'normal'}
              fill={region.label.color || '#666'}
              pointerEvents="none"
            >
              {region.label.text}
            </text>
          );
        })}
      </svg>
      
      {showTooltips && tooltip.visible && (
        <div
          style={{
            ...tooltipStyle,
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y + 10}px`,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default CustomVennDiagram;