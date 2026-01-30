// 'use client';

// import React, { useRef, useState, useMemo } from 'react';

// const UnifiedVennDiagram2 = ({
//   // Canvas dimensions
//   width = 500,
//   height = 470,
//   backgroundColor = '#ffffff',
  
//   // Universal set
//   showUniverse = true,
//   universe = {
//     fill: '#f9f9f9',
//     stroke: '#cccccc',
//     strokeWidth: 1,
//     label: 'U',
//     labelPosition: { x: 35, y: 45 },
//     labelFontSize: 18,
//     labelColor: '#666666',
//     margin: 10
//   },
  
//   // Circle definitions - explicit geometry
//   circles = {
//     A: {
//       cx: 180,
//       cy: 200,
//       r: 120,
//       stroke: '#c0392b',
//       strokeWidth: 2,
//       label: 'A',
//       labelPosition: { x: 110, y: 140 }
//     },
//     B: {
//       cx: 320,
//       cy: 200,
//       r: 120,
//       stroke: '#2980b9',
//       strokeWidth: 2,
//       label: 'B',
//       labelPosition: { x: 390, y: 140 }
//     }
//   },
  
//   // Region definitions - explicit declaration of each region with full styling
//   regions = {
//     'outside': {
//       fill: '#f9f9f9',
//       opacity: 1,
//       pattern: 'solid',
//       label: '',
//       labelPosition: { x: 50, y: 380 },
//       tooltip: 'Neither A nor B'
//     },
//     'A-only': {
//       fill: '#e74c3c',
//       opacity: 0.6,
//       pattern: 'solid',
//       label: '',
//       labelPosition: { x: 120, y: 200 },
//       tooltip: 'Elements only in A'
//     },
//     'B-only': {
//       fill: '#3498db',
//       opacity: 0.6,
//       pattern: 'solid',
//       label: '',
//       labelPosition: { x: 380, y: 200 },
//       tooltip: 'Elements only in B'
//     },
//     'A∩B': {
//       fill: '#9b59b6',
//       opacity: 0.8,
//       pattern: 'stripes',
//       stripeColor: '#ffffff',
//       stripeWidth: 3,
//       stripeSpacing: 8,
//       stripeAngle: 45,
//       label: 'A ∩ B',
//       labelPosition: { x: 250, y: 200 },
//       tooltip: 'Elements in both A and B'
//     }
//   },
  
//   // Labels styling
//   labelFontSize = 18,
//   labelFontFamily = 'Arial, sans-serif',
//   labelFontWeight = 'bold',
//   labelColor = '#333333',
  
//   // Circle label styling
//   circleLabelFontSize = 24,
//   circleLabelFontWeight = 'bold',
  
//   // Tooltip
//   showTooltip = true,
  
//   // Legend (inside SVG)
//   showLegend = true,
//   legendPosition = 'bottom',
//   legendItems = [
//     { key: 'A-only', label: 'Only A' },
//     { key: 'B-only', label: 'Only B' },
//     { key: 'A∩B', label: 'Intersection' }
//   ],
  
//   // Hover effects
//   enableHover = true,
//   hoverOpacity = 0.9,
//   dimmedOpacity = 0.2,
  
//   // Container styling
//   className = '',
//   style = {}
// }) => {
//   const containerRef = useRef(null);
//   const [tooltipState, setTooltipState] = useState({
//     visible: false,
//     content: '',
//     x: 0,
//     y: 0
//   });
//   const [highlightedRegion, setHighlightedRegion] = useState(null);
//   const [selectedRegion, setSelectedRegion] = useState(null);
  
//   // Universe rectangle dimensions
//   const universeRect = useMemo(() => {
//     const margin = universe.margin || 10;
//     return {
//       x: margin,
//       y: margin,
//       width: width - margin * 2,
//       height: height - margin * 2 - (showLegend ? 60 : 0)
//     };
//   }, [width, height, universe.margin, showLegend]);
  
//   // Calculate intersection points between two circles
//   const getIntersectionPoints = useMemo(() => {
//     const cA = circles.A;
//     const cB = circles.B;
    
//     const dx = cB.cx - cA.cx;
//     const dy = cB.cy - cA.cy;
//     const d = Math.sqrt(dx * dx + dy * dy);
    
//     if (d > cA.r + cB.r) {
//       return null;
//     }
//     if (d < Math.abs(cA.r - cB.r)) {
//       return null;
//     }
//     if (d === 0 && cA.r === cB.r) {
//       return null;
//     }
    
//     const a = (cA.r * cA.r - cB.r * cB.r + d * d) / (2 * d);
//     const h = Math.sqrt(cA.r * cA.r - a * a);
    
//     const px = cA.cx + (a * dx) / d;
//     const py = cA.cy + (a * dy) / d;
    
//     const p1 = {
//       x: px + (h * dy) / d,
//       y: py - (h * dx) / d
//     };
    
//     const p2 = {
//       x: px - (h * dy) / d,
//       y: py + (h * dx) / d
//     };
    
//     return p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 };
//   }, [circles]);
  
//   // Build SVG path for outside region (U - A - B)
//   const buildOutsidePath = useMemo(() => {
//     const cA = circles.A;
//     const cB = circles.B;
//     const u = universeRect;
    
//     // Rectangle path (clockwise)
//     const rectPath = `M ${u.x} ${u.y} L ${u.x + u.width} ${u.y} L ${u.x + u.width} ${u.y + u.height} L ${u.x} ${u.y + u.height} Z`;
    
//     // Circle A path (counter-clockwise to cut out)
//     const circleAPath = `M ${cA.cx - cA.r} ${cA.cy} A ${cA.r} ${cA.r} 0 1 0 ${cA.cx + cA.r} ${cA.cy} A ${cA.r} ${cA.r} 0 1 0 ${cA.cx - cA.r} ${cA.cy}`;
    
//     // Circle B path (counter-clockwise to cut out)
//     const circleBPath = `M ${cB.cx - cB.r} ${cB.cy} A ${cB.r} ${cB.r} 0 1 0 ${cB.cx + cB.r} ${cB.cy} A ${cB.r} ${cB.r} 0 1 0 ${cB.cx - cB.r} ${cB.cy}`;
    
//     return `${rectPath} ${circleAPath} ${circleBPath}`;
//   }, [circles, universeRect]);
  
//   // Build SVG path for A-only region
//   const buildAOnlyPath = useMemo(() => {
//     const cA = circles.A;
//     const cB = circles.B;
//     const pts = getIntersectionPoints;
    
//     if (!pts) {
//       return `
//         M ${cA.cx - cA.r} ${cA.cy}
//         A ${cA.r} ${cA.r} 0 1 1 ${cA.cx + cA.r} ${cA.cy}
//         A ${cA.r} ${cA.r} 0 1 1 ${cA.cx - cA.r} ${cA.cy}
//         Z
//       `;
//     }
    
//     return `
//       M ${pts.top.x} ${pts.top.y}
//       A ${cA.r} ${cA.r} 0 1 0 ${pts.bottom.x} ${pts.bottom.y}
//       A ${cB.r} ${cB.r} 0 0 1 ${pts.top.x} ${pts.top.y}
//       Z
//     `;
//   }, [circles, getIntersectionPoints]);
  
//   // Build SVG path for B-only region
//   const buildBOnlyPath = useMemo(() => {
//     const cA = circles.A;
//     const cB = circles.B;
//     const pts = getIntersectionPoints;
    
//     if (!pts) {
//       return `
//         M ${cB.cx - cB.r} ${cB.cy}
//         A ${cB.r} ${cB.r} 0 1 1 ${cB.cx + cB.r} ${cB.cy}
//         A ${cB.r} ${cB.r} 0 1 1 ${cB.cx - cB.r} ${cB.cy}
//         Z
//       `;
//     }
    
//     return `
//       M ${pts.top.x} ${pts.top.y}
//       A ${cB.r} ${cB.r} 0 1 1 ${pts.bottom.x} ${pts.bottom.y}
//       A ${cA.r} ${cA.r} 0 0 0 ${pts.top.x} ${pts.top.y}
//       Z
//     `;
//   }, [circles, getIntersectionPoints]);
  
//   // Build SVG path for intersection region
//   const buildIntersectionPath = useMemo(() => {
//     const cA = circles.A;
//     const cB = circles.B;
//     const pts = getIntersectionPoints;
    
//     if (!pts) {
//       return null;
//     }
    
//     return `
//       M ${pts.top.x} ${pts.top.y}
//       A ${cA.r} ${cA.r} 0 0 1 ${pts.bottom.x} ${pts.bottom.y}
//       A ${cB.r} ${cB.r} 0 0 1 ${pts.top.x} ${pts.top.y}
//       Z
//     `;
//   }, [circles, getIntersectionPoints]);
  
//   // Generate pattern definitions
//   const renderPatternDefs = () => {
//     const patterns = [];
    
//     Object.entries(regions).forEach(([regionKey, regionConfig]) => {
//       const safeKey = regionKey.replace(/[^a-zA-Z0-9]/g, '-');
      
//       if (regionConfig.pattern === 'stripes') {
//         const patternId = `pattern-stripes-${safeKey}`;
//         const stripeWidth = regionConfig.stripeWidth || 3;
//         const stripeSpacing = regionConfig.stripeSpacing || 8;
//         const stripeColor = regionConfig.stripeColor || '#ffffff';
//         const stripeAngle = regionConfig.stripeAngle || 45;
//         const totalSize = stripeWidth + stripeSpacing;
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={totalSize}
//             height={totalSize}
//             patternTransform={`rotate(${stripeAngle})`}
//           >
//             <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
//             <line
//               x1="0"
//               y1={stripeWidth / 2}
//               x2={totalSize}
//               y2={stripeWidth / 2}
//               stroke={stripeColor}
//               strokeWidth={stripeWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'horizontal') {
//         const patternId = `pattern-horizontal-${safeKey}`;
//         const stripeWidth = regionConfig.stripeWidth || 3;
//         const stripeSpacing = regionConfig.stripeSpacing || 8;
//         const stripeColor = regionConfig.stripeColor || '#ffffff';
//         const totalSize = stripeWidth + stripeSpacing;
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={totalSize}
//             height={totalSize}
//           >
//             <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
//             <line
//               x1="0"
//               y1={stripeWidth / 2}
//               x2={totalSize}
//               y2={stripeWidth / 2}
//               stroke={stripeColor}
//               strokeWidth={stripeWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'vertical') {
//         const patternId = `pattern-vertical-${safeKey}`;
//         const stripeWidth = regionConfig.stripeWidth || 3;
//         const stripeSpacing = regionConfig.stripeSpacing || 8;
//         const stripeColor = regionConfig.stripeColor || '#ffffff';
//         const totalSize = stripeWidth + stripeSpacing;
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={totalSize}
//             height={totalSize}
//           >
//             <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
//             <line
//               x1={stripeWidth / 2}
//               y1="0"
//               x2={stripeWidth / 2}
//               y2={totalSize}
//               stroke={stripeColor}
//               strokeWidth={stripeWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'stripes-reverse') {
//         const patternId = `pattern-stripes-reverse-${safeKey}`;
//         const stripeWidth = regionConfig.stripeWidth || 3;
//         const stripeSpacing = regionConfig.stripeSpacing || 8;
//         const stripeColor = regionConfig.stripeColor || '#ffffff';
//         const stripeAngle = regionConfig.stripeAngle || -45;
//         const totalSize = stripeWidth + stripeSpacing;
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={totalSize}
//             height={totalSize}
//             patternTransform={`rotate(${stripeAngle})`}
//           >
//             <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
//             <line
//               x1="0"
//               y1={stripeWidth / 2}
//               x2={totalSize}
//               y2={stripeWidth / 2}
//               stroke={stripeColor}
//               strokeWidth={stripeWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'dots') {
//         const patternId = `pattern-dots-${safeKey}`;
//         const dotRadius = regionConfig.dotRadius || 2;
//         const dotSpacing = regionConfig.dotSpacing || 10;
//         const dotColor = regionConfig.dotColor || '#ffffff';
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={dotSpacing}
//             height={dotSpacing}
//           >
//             <rect width={dotSpacing} height={dotSpacing} fill={regionConfig.fill} />
//             <circle
//               cx={dotSpacing / 2}
//               cy={dotSpacing / 2}
//               r={dotRadius}
//               fill={dotColor}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'crosshatch') {
//         const patternId = `pattern-crosshatch-${safeKey}`;
//         const lineWidth = regionConfig.lineWidth || 1.5;
//         const lineSpacing = regionConfig.lineSpacing || 10;
//         const lineColor = regionConfig.lineColor || '#ffffff';
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={lineSpacing}
//             height={lineSpacing}
//           >
//             <rect width={lineSpacing} height={lineSpacing} fill={regionConfig.fill} />
//             <line
//               x1="0"
//               y1="0"
//               x2={lineSpacing}
//               y2={lineSpacing}
//               stroke={lineColor}
//               strokeWidth={lineWidth}
//             />
//             <line
//               x1={lineSpacing}
//               y1="0"
//               x2="0"
//               y2={lineSpacing}
//               stroke={lineColor}
//               strokeWidth={lineWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'grid') {
//         const patternId = `pattern-grid-${safeKey}`;
//         const lineWidth = regionConfig.lineWidth || 1.5;
//         const lineSpacing = regionConfig.lineSpacing || 12;
//         const lineColor = regionConfig.lineColor || '#ffffff';
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={lineSpacing}
//             height={lineSpacing}
//           >
//             <rect width={lineSpacing} height={lineSpacing} fill={regionConfig.fill} />
//             <line
//               x1="0"
//               y1={lineSpacing / 2}
//               x2={lineSpacing}
//               y2={lineSpacing / 2}
//               stroke={lineColor}
//               strokeWidth={lineWidth}
//             />
//             <line
//               x1={lineSpacing / 2}
//               y1="0"
//               x2={lineSpacing / 2}
//               y2={lineSpacing}
//               stroke={lineColor}
//               strokeWidth={lineWidth}
//             />
//           </pattern>
//         );
//       }
      
//       if (regionConfig.pattern === 'checkerboard') {
//         const patternId = `pattern-checkerboard-${safeKey}`;
//         const squareSize = regionConfig.squareSize || 8;
//         const secondaryColor = regionConfig.secondaryColor || '#ffffff';
//         const secondaryOpacity = regionConfig.secondaryOpacity || 0.4;
        
//         patterns.push(
//           <pattern
//             key={patternId}
//             id={patternId}
//             patternUnits="userSpaceOnUse"
//             width={squareSize * 2}
//             height={squareSize * 2}
//           >
//             <rect width={squareSize * 2} height={squareSize * 2} fill={regionConfig.fill} />
//             <rect x="0" y="0" width={squareSize} height={squareSize} fill={secondaryColor} opacity={secondaryOpacity} />
//             <rect x={squareSize} y={squareSize} width={squareSize} height={squareSize} fill={secondaryColor} opacity={secondaryOpacity} />
//           </pattern>
//         );
//       }
//     });
    
//     return patterns;
//   };
  
//   // Get fill value for a region
//   const getRegionFill = (regionKey, regionConfig) => {
//     if (regionConfig.pattern === 'solid' || !regionConfig.pattern) {
//       return regionConfig.fill;
//     }
//     const safeKey = regionKey.replace(/[^a-zA-Z0-9]/g, '-');
//     const patternId = `pattern-${regionConfig.pattern}-${safeKey}`;
//     return `url(#${patternId})`;
//   };
  
//   // Get region opacity based on highlight/selection state
//   const getRegionOpacity = (regionKey, regionConfig) => {
//     const activeRegion = selectedRegion || highlightedRegion;
    
//     if (activeRegion) {
//       if (regionKey === activeRegion) {
//         return hoverOpacity;
//       }
//       return dimmedOpacity;
//     }
    
//     return regionConfig.opacity;
//   };
  
//   // Handle mouse events for tooltip
//   const handleMouseEnter = (regionKey, regionConfig) => (e) => {
//     if (showTooltip && regionConfig.tooltip) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setTooltipState({
//         visible: true,
//         content: regionConfig.tooltip,
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top - 50
//       });
//     }
//   };
  
//   const handleMouseMove = (e) => {
//     if (showTooltip && tooltipState.visible) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setTooltipState(prev => ({
//         ...prev,
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top - 50
//       }));
//     }
//   };
  
//   const handleMouseLeave = () => {
//     if (showTooltip) {
//       setTooltipState(prev => ({ ...prev, visible: false }));
//     }
//   };
  
//   // Render a single region
//   const renderRegion = (regionKey, path) => {
//     const regionConfig = regions[regionKey];
//     if (!regionConfig || !path) return null;
    
//     return (
//       <path
//         key={regionKey}
//         d={path}
//         fill={getRegionFill(regionKey, regionConfig)}
//         opacity={getRegionOpacity(regionKey, regionConfig)}
//         fillRule="evenodd"
//         style={{
//           transition: 'opacity 0.2s ease',
//           cursor: enableHover || showTooltip ? 'pointer' : 'default'
//         }}
//         onMouseEnter={handleMouseEnter(regionKey, regionConfig)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       />
//     );
//   };
  
//   // Render region label
//   const renderRegionLabel = (regionKey) => {
//     const regionConfig = regions[regionKey];
//     if (!regionConfig || !regionConfig.label) return null;
    
//     return (
//       <text
//         key={`label-${regionKey}`}
//         x={regionConfig.labelPosition?.x || 0}
//         y={regionConfig.labelPosition?.y || 0}
//         textAnchor="middle"
//         dominantBaseline="middle"
//         fontSize={labelFontSize}
//         fontFamily={labelFontFamily}
//         fontWeight={labelFontWeight}
//         fill={labelColor}
//         style={{ pointerEvents: 'none' }}
//       >
//         {regionConfig.label}
//       </text>
//     );
//   };
  
//   // Render universe rectangle and label
//   const renderUniverse = () => {
//     if (!showUniverse) return null;
    
//     const u = universeRect;
//     const uConfig = universe;
    
//     return (
//       <g>
//         <rect
//           x={u.x}
//           y={u.y}
//           width={u.width}
//           height={u.height}
//           fill="none"
//           stroke={uConfig.stroke || '#cccccc'}
//           strokeWidth={uConfig.strokeWidth || 1}
//         />
//         {uConfig.label && (
//           <text
//             x={uConfig.labelPosition?.x || 35}
//             y={uConfig.labelPosition?.y || 45}
//             fontSize={uConfig.labelFontSize || 18}
//             fontFamily={labelFontFamily}
//             fontWeight="bold"
//             fill={uConfig.labelColor || '#666666'}
//           >
//             {uConfig.label}
//           </text>
//         )}
//       </g>
//     );
//   };
  
//   // Render circle outlines and labels
//   const renderCircleOutlines = () => {
//     return Object.entries(circles).map(([circleKey, circleConfig]) => (
//       <g key={`circle-${circleKey}`}>
//         <circle
//           cx={circleConfig.cx}
//           cy={circleConfig.cy}
//           r={circleConfig.r}
//           fill="none"
//           stroke={circleConfig.stroke}
//           strokeWidth={circleConfig.strokeWidth}
//         />
//         {circleConfig.label && (
//           <text
//             x={circleConfig.labelPosition?.x || circleConfig.cx}
//             y={circleConfig.labelPosition?.y || (circleConfig.cy - circleConfig.r - 10)}
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize={circleLabelFontSize}
//             fontFamily={labelFontFamily}
//             fontWeight={circleLabelFontWeight}
//             fill={circleConfig.stroke}
//           >
//             {circleConfig.label}
//           </text>
//         )}
//       </g>
//     ));
//   };
  
//   // Render tooltip with V-shaped pointer
//   const renderTooltip = () => {
//     if (!showTooltip || !tooltipState.visible) return null;
    
//     const arrowSize = 8;
    
//     return (
//       <div
//         style={{
//           position: 'absolute',
//           left: tooltipState.x,
//           top: tooltipState.y,
//           transform: 'translateX(-50%)',
//           pointerEvents: 'none',
//           zIndex: 1000
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: '#333333',
//             color: '#ffffff',
//             padding: '8px 12px',
//             borderRadius: '4px',
//             fontSize: '14px',
//             fontFamily: 'Arial, sans-serif',
//             whiteSpace: 'nowrap',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
//           }}
//         >
//           {tooltipState.content}
//         </div>
//         <div
//           style={{
//             position: 'absolute',
//             left: '50%',
//             bottom: -arrowSize,
//             transform: 'translateX(-50%)',
//             width: 0,
//             height: 0,
//             borderLeft: `${arrowSize}px solid transparent`,
//             borderRight: `${arrowSize}px solid transparent`,
//             borderTop: `${arrowSize}px solid #333333`
//           }}
//         />
//       </div>
//     );
//   };
  
//   // Calculate legend position
//   const getLegendPosition = () => {
//     if (typeof legendPosition === 'object' && legendPosition.x !== undefined) {
//       return legendPosition;
//     }
    
//     const itemWidth = 100;
//     const itemHeight = 25;
//     const totalWidth = legendItems.length * itemWidth;
//     const padding = 20;
    
//     switch (legendPosition) {
//       case 'top':
//         return { x: (width - totalWidth) / 2, y: padding + 20 };
//       case 'bottom':
//         return { x: (width - totalWidth) / 2, y: height - padding };
//       case 'left':
//         return { x: padding, y: height / 2 - (legendItems.length * itemHeight) / 2 };
//       case 'right':
//         return { x: width - totalWidth - padding, y: height / 2 - (legendItems.length * itemHeight) / 2 };
//       case 'top-left':
//         return { x: padding, y: padding + 20 };
//       case 'top-right':
//         return { x: width - totalWidth - padding, y: padding + 20 };
//       case 'bottom-left':
//         return { x: padding, y: height - padding };
//       case 'bottom-right':
//         return { x: width - totalWidth - padding, y: height - padding };
//       default:
//         return { x: (width - totalWidth) / 2, y: height - padding };
//     }
//   };
  
//   // Render legend inside SVG
//   const renderLegend = () => {
//     if (!showLegend || !legendItems?.length) return null;
    
//     const pos = getLegendPosition();
//     const isVertical = legendPosition === 'left' || legendPosition === 'right';
//     const itemWidth = 100;
//     const itemHeight = 25;
//     const squareSize = 16;
    
//     return (
//       <g transform={`translate(${pos.x}, ${pos.y})`}>
//         {legendItems.map((item, index) => {
//           const regionConfig = regions[item.key];
//           if (!regionConfig) return null;
          
//           const xOffset = isVertical ? 0 : index * itemWidth;
//           const yOffset = isVertical ? index * itemHeight : 0;
          
//           const isHighlighted = highlightedRegion === item.key;
//           const isSelected = selectedRegion === item.key;
          
//           return (
//             <g
//               key={item.key}
//               transform={`translate(${xOffset}, ${yOffset})`}
//               style={{ cursor: 'pointer' }}
//               onMouseEnter={() => setHighlightedRegion(item.key)}
//               onMouseLeave={() => setHighlightedRegion(null)}
//               onClick={() => setSelectedRegion(prev => prev === item.key ? null : item.key)}
//             >
//               {(isHighlighted || isSelected) && (
//                 <rect
//                   x="-4"
//                   y="-4"
//                   width={itemWidth - 8}
//                   height={itemHeight}
//                   fill={isSelected ? '#e0e0e0' : '#f0f0f0'}
//                   rx="3"
//                 />
//               )}
              
//               <rect
//                 x="0"
//                 y="0"
//                 width={squareSize}
//                 height={squareSize}
//                 fill={regionConfig.fill}
//                 opacity={regionConfig.opacity}
//                 stroke="#666666"
//                 strokeWidth="1"
//               />
              
//               <text
//                 x={squareSize + 6}
//                 y={squareSize / 2}
//                 dominantBaseline="middle"
//                 fontSize="13"
//                 fontFamily="Arial, sans-serif"
//                 fill="#333333"
//               >
//                 {item.label}
//               </text>
//             </g>
//           );
//         })}
//       </g>
//     );
//   };
  
//   return (
//     <div className={className} style={{ position: 'relative', ...style }}>
//       <div ref={containerRef} style={{ position: 'relative' }}>
//         <svg
//           width={width}
//           height={height}
//           style={{ backgroundColor }}
//         >
//           <defs>
//             {renderPatternDefs()}
//           </defs>
          
//           {/* Outside region (U - A - B) first, as background */}
//           {regions['outside'] && renderRegion('outside', buildOutsidePath)}
          
//           {/* Then the set regions */}
//           {regions['A-only'] && renderRegion('A-only', buildAOnlyPath)}
//           {regions['B-only'] && renderRegion('B-only', buildBOnlyPath)}
//           {regions['A∩B'] && renderRegion('A∩B', buildIntersectionPath)}
          
//           {/* Universe outline on top */}
//           {renderUniverse()}
          
//           {/* Circle outlines */}
//           {renderCircleOutlines()}
          
//           {/* Region labels */}
//           {renderRegionLabel('outside')}
//           {renderRegionLabel('A-only')}
//           {renderRegionLabel('B-only')}
//           {renderRegionLabel('A∩B')}
          
//           {renderLegend()}
//         </svg>
        
//         {renderTooltip()}
//       </div>
//     </div>
//   );
// };

// export default UnifiedVennDiagram2;

'use client';

import React, { useRef, useState, useMemo } from 'react';

const UnifiedVennDiagram2 = ({
  // Canvas dimensions
  width = 500,
  height = 470,
  backgroundColor = '#ffffff',
  
  // Universal set
  showUniverse = true,
  universe = {
    fill: '#f9f9f9',
    stroke: '#cccccc',
    strokeWidth: 1,
    label: 'U',
    labelPosition: { x: 35, y: 45 },
    labelFontSize: 18,
    labelColor: '#666666',
    margin: 10
  },
  
  // Circle definitions - explicit geometry
  circles = {
    A: {
      cx: 180,
      cy: 200,
      r: 120,
      stroke: '#c0392b',
      strokeWidth: 1,
      label: 'A',
      labelPosition: { x: 110, y: 140 }
    },
    B: {
      cx: 320,
      cy: 200,
      r: 120,
      stroke: '#2980b9',
      strokeWidth: 1,
      label: 'B',
      labelPosition: { x: 390, y: 140 }
    }
  },
  
  // Region definitions - explicit declaration of each region with full styling
  regions = {
    'outside': {
      fill: '#f9f9f9',
      opacity: 1,
      pattern: 'solid',
      label: '',
      labelPosition: { x: 50, y: 380 },
      tooltip: 'Neither A nor B'
    },
    'A-only': {
      fill: '#e74c3c',
      opacity: 0.6,
      pattern: 'solid',
      label: '',
      labelPosition: { x: 120, y: 200 },
      tooltip: 'Elements only in A'
    },
    'B-only': {
      fill: '#3498db',
      opacity: 0.6,
      pattern: 'solid',
      label: '',
      labelPosition: { x: 380, y: 200 },
      tooltip: 'Elements only in B'
    },
    'A∩B': {
      fill: '#9b59b6',
      opacity: 0.8,
      pattern: 'stripes',
      stripeColor: '#ffffff',
      stripeWidth: 3,
      stripeSpacing: 8,
      stripeAngle: 45,
      label: 'A ∩ B',
      labelPosition: { x: 250, y: 200 },
      tooltip: 'Elements in both A and B'
    }
  },
  
  // Labels styling
  labelFontSize = 18,
  labelFontFamily = 'Arial, sans-serif',
  labelFontWeight = 'bold',
  labelColor = '#333333',
  
  // Circle label styling
  circleLabelFontSize = 24,
  circleLabelFontWeight = 'bold',
  
  // Tooltip
  showTooltip = true,
  
  // Legend (inside SVG)
  showLegend = true,
  legendPosition = 'bottom',
  legendItems = [
    { key: 'A-only', label: 'Only A' },
    { key: 'B-only', label: 'Only B' },
    { key: 'A∩B', label: 'Intersection' }
  ],
  
  // Hover effects
  enableHover = true,
  hoverOpacity = 0.9,
  dimmedOpacity = 0.2,
  
  // Container styling
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);
  const [tooltipState, setTooltipState] = useState({
    visible: false,
    content: '',
    x: 0,
    y: 0
  });
  const [highlightedRegion, setHighlightedRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  // Universe rectangle dimensions
  const universeRect = useMemo(() => {
    const margin = universe.margin || 10;
    return {
      x: margin,
      y: margin,
      width: width - margin * 2,
      height: height - margin * 2 - (showLegend ? 60 : 0)
    };
  }, [width, height, universe.margin, showLegend]);
  
  // Calculate intersection points between two circles
  const getIntersectionPoints = useMemo(() => {
    const cA = circles.A;
    const cB = circles.B;
    
    const dx = cB.cx - cA.cx;
    const dy = cB.cy - cA.cy;
    const d = Math.sqrt(dx * dx + dy * dy);
    
    if (d > cA.r + cB.r) {
      return null;
    }
    if (d < Math.abs(cA.r - cB.r)) {
      return null;
    }
    if (d === 0 && cA.r === cB.r) {
      return null;
    }
    
    const a = (cA.r * cA.r - cB.r * cB.r + d * d) / (2 * d);
    const h = Math.sqrt(cA.r * cA.r - a * a);
    
    const px = cA.cx + (a * dx) / d;
    const py = cA.cy + (a * dy) / d;
    
    const p1 = {
      x: px + (h * dy) / d,
      y: py - (h * dx) / d
    };
    
    const p2 = {
      x: px - (h * dy) / d,
      y: py + (h * dx) / d
    };
    
    return p1.y < p2.y ? { top: p1, bottom: p2 } : { top: p2, bottom: p1 };
  }, [circles]);
  
  // Build SVG path for outside region (U - A - B)
  const buildOutsidePath = useMemo(() => {
    const cA = circles.A;
    const cB = circles.B;
    const u = universeRect;
    
    // Rectangle path (clockwise)
    const rectPath = `M ${u.x} ${u.y} L ${u.x + u.width} ${u.y} L ${u.x + u.width} ${u.y + u.height} L ${u.x} ${u.y + u.height} Z`;
    
    // Circle A path (counter-clockwise to cut out)
    const circleAPath = `M ${cA.cx - cA.r} ${cA.cy} A ${cA.r} ${cA.r} 0 1 0 ${cA.cx + cA.r} ${cA.cy} A ${cA.r} ${cA.r} 0 1 0 ${cA.cx - cA.r} ${cA.cy}`;
    
    // Circle B path (counter-clockwise to cut out)
    const circleBPath = `M ${cB.cx - cB.r} ${cB.cy} A ${cB.r} ${cB.r} 0 1 0 ${cB.cx + cB.r} ${cB.cy} A ${cB.r} ${cB.r} 0 1 0 ${cB.cx - cB.r} ${cB.cy}`;
    
    return `${rectPath} ${circleAPath} ${circleBPath}`;
  }, [circles, universeRect]);
  
  // Build SVG path for A-only region
  const buildAOnlyPath = useMemo(() => {
    const cA = circles.A;
    const cB = circles.B;
    const pts = getIntersectionPoints;
    
    if (!pts) {
      return `
        M ${cA.cx - cA.r} ${cA.cy}
        A ${cA.r} ${cA.r} 0 1 1 ${cA.cx + cA.r} ${cA.cy}
        A ${cA.r} ${cA.r} 0 1 1 ${cA.cx - cA.r} ${cA.cy}
        Z
      `;
    }
    
    return `
      M ${pts.top.x} ${pts.top.y}
      A ${cA.r} ${cA.r} 0 1 0 ${pts.bottom.x} ${pts.bottom.y}
      A ${cB.r} ${cB.r} 0 0 1 ${pts.top.x} ${pts.top.y}
      Z
    `;
  }, [circles, getIntersectionPoints]);
  
  // Build SVG path for B-only region
  const buildBOnlyPath = useMemo(() => {
    const cA = circles.A;
    const cB = circles.B;
    const pts = getIntersectionPoints;
    
    if (!pts) {
      return `
        M ${cB.cx - cB.r} ${cB.cy}
        A ${cB.r} ${cB.r} 0 1 1 ${cB.cx + cB.r} ${cB.cy}
        A ${cB.r} ${cB.r} 0 1 1 ${cB.cx - cB.r} ${cB.cy}
        Z
      `;
    }
    
    return `
      M ${pts.top.x} ${pts.top.y}
      A ${cB.r} ${cB.r} 0 1 1 ${pts.bottom.x} ${pts.bottom.y}
      A ${cA.r} ${cA.r} 0 0 0 ${pts.top.x} ${pts.top.y}
      Z
    `;
  }, [circles, getIntersectionPoints]);
  
  // Build SVG path for intersection region
  const buildIntersectionPath = useMemo(() => {
    const cA = circles.A;
    const cB = circles.B;
    const pts = getIntersectionPoints;
    
    if (!pts) {
      return null;
    }
    
    return `
      M ${pts.top.x} ${pts.top.y}
      A ${cA.r} ${cA.r} 0 0 1 ${pts.bottom.x} ${pts.bottom.y}
      A ${cB.r} ${cB.r} 0 0 1 ${pts.top.x} ${pts.top.y}
      Z
    `;
  }, [circles, getIntersectionPoints]);
  
  // Generate pattern definitions
  const renderPatternDefs = () => {
    const patterns = [];
    
    Object.entries(regions).forEach(([regionKey, regionConfig]) => {
      const safeKey = regionKey.replace(/[^a-zA-Z0-9]/g, '-');
      
      if (regionConfig.pattern === 'stripes') {
        const patternId = `pattern-stripes-${safeKey}`;
        const stripeWidth = regionConfig.stripeWidth || 3;
        const stripeSpacing = regionConfig.stripeSpacing || 8;
        const stripeColor = regionConfig.stripeColor || '#ffffff';
        const stripeAngle = regionConfig.stripeAngle || 45;
        const totalSize = stripeWidth + stripeSpacing;
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={totalSize}
            height={totalSize}
            patternTransform={`rotate(${stripeAngle})`}
          >
            <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
            <line
              x1="0"
              y1={stripeWidth / 2}
              x2={totalSize}
              y2={stripeWidth / 2}
              stroke={stripeColor}
              strokeWidth={stripeWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'horizontal') {
        const patternId = `pattern-horizontal-${safeKey}`;
        const stripeWidth = regionConfig.stripeWidth || 3;
        const stripeSpacing = regionConfig.stripeSpacing || 8;
        const stripeColor = regionConfig.stripeColor || '#ffffff';
        const totalSize = stripeWidth + stripeSpacing;
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={totalSize}
            height={totalSize}
          >
            <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
            <line
              x1="0"
              y1={stripeWidth / 2}
              x2={totalSize}
              y2={stripeWidth / 2}
              stroke={stripeColor}
              strokeWidth={stripeWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'vertical') {
        const patternId = `pattern-vertical-${safeKey}`;
        const stripeWidth = regionConfig.stripeWidth || 3;
        const stripeSpacing = regionConfig.stripeSpacing || 8;
        const stripeColor = regionConfig.stripeColor || '#ffffff';
        const totalSize = stripeWidth + stripeSpacing;
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={totalSize}
            height={totalSize}
          >
            <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
            <line
              x1={stripeWidth / 2}
              y1="0"
              x2={stripeWidth / 2}
              y2={totalSize}
              stroke={stripeColor}
              strokeWidth={stripeWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'stripes-reverse') {
        const patternId = `pattern-stripes-reverse-${safeKey}`;
        const stripeWidth = regionConfig.stripeWidth || 3;
        const stripeSpacing = regionConfig.stripeSpacing || 8;
        const stripeColor = regionConfig.stripeColor || '#ffffff';
        const stripeAngle = regionConfig.stripeAngle || -45;
        const totalSize = stripeWidth + stripeSpacing;
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={totalSize}
            height={totalSize}
            patternTransform={`rotate(${stripeAngle})`}
          >
            <rect width={totalSize} height={totalSize} fill={regionConfig.fill} />
            <line
              x1="0"
              y1={stripeWidth / 2}
              x2={totalSize}
              y2={stripeWidth / 2}
              stroke={stripeColor}
              strokeWidth={stripeWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'dots') {
        const patternId = `pattern-dots-${safeKey}`;
        const dotRadius = regionConfig.dotRadius || 2;
        const dotSpacing = regionConfig.dotSpacing || 10;
        const dotColor = regionConfig.dotColor || '#ffffff';
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={dotSpacing}
            height={dotSpacing}
          >
            <rect width={dotSpacing} height={dotSpacing} fill={regionConfig.fill} />
            <circle
              cx={dotSpacing / 2}
              cy={dotSpacing / 2}
              r={dotRadius}
              fill={dotColor}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'crosshatch') {
        const patternId = `pattern-crosshatch-${safeKey}`;
        const lineWidth = regionConfig.lineWidth || 1.5;
        const lineSpacing = regionConfig.lineSpacing || 10;
        const lineColor = regionConfig.lineColor || '#ffffff';
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={lineSpacing}
            height={lineSpacing}
          >
            <rect width={lineSpacing} height={lineSpacing} fill={regionConfig.fill} />
            <line
              x1="0"
              y1="0"
              x2={lineSpacing}
              y2={lineSpacing}
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
            <line
              x1={lineSpacing}
              y1="0"
              x2="0"
              y2={lineSpacing}
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'grid') {
        const patternId = `pattern-grid-${safeKey}`;
        const lineWidth = regionConfig.lineWidth || 1.5;
        const lineSpacing = regionConfig.lineSpacing || 12;
        const lineColor = regionConfig.lineColor || '#ffffff';
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={lineSpacing}
            height={lineSpacing}
          >
            <rect width={lineSpacing} height={lineSpacing} fill={regionConfig.fill} />
            <line
              x1="0"
              y1={lineSpacing / 2}
              x2={lineSpacing}
              y2={lineSpacing / 2}
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
            <line
              x1={lineSpacing / 2}
              y1="0"
              x2={lineSpacing / 2}
              y2={lineSpacing}
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
          </pattern>
        );
      }
      
      if (regionConfig.pattern === 'checkerboard') {
        const patternId = `pattern-checkerboard-${safeKey}`;
        const squareSize = regionConfig.squareSize || 8;
        const secondaryColor = regionConfig.secondaryColor || '#ffffff';
        const secondaryOpacity = regionConfig.secondaryOpacity || 0.4;
        
        patterns.push(
          <pattern
            key={patternId}
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={squareSize * 2}
            height={squareSize * 2}
          >
            <rect width={squareSize * 2} height={squareSize * 2} fill={regionConfig.fill} />
            <rect x="0" y="0" width={squareSize} height={squareSize} fill={secondaryColor} opacity={secondaryOpacity} />
            <rect x={squareSize} y={squareSize} width={squareSize} height={squareSize} fill={secondaryColor} opacity={secondaryOpacity} />
          </pattern>
        );
      }
    });
    
    return patterns;
  };
  
  // Get fill value for a region
  const getRegionFill = (regionKey, regionConfig) => {
    if (regionConfig.pattern === 'solid' || !regionConfig.pattern) {
      return regionConfig.fill;
    }
    const safeKey = regionKey.replace(/[^a-zA-Z0-9]/g, '-');
    const patternId = `pattern-${regionConfig.pattern}-${safeKey}`;
    return `url(#${patternId})`;
  };
  
  // Get region opacity based on highlight/selection state
  const getRegionOpacity = (regionKey, regionConfig) => {
    const activeRegion = selectedRegion || highlightedRegion;
    
    if (activeRegion) {
      if (regionKey === activeRegion) {
        return hoverOpacity;
      }
      return dimmedOpacity;
    }
    
    return regionConfig.opacity;
  };
  
  // Handle mouse events for tooltip
  const handleMouseEnter = (regionKey, regionConfig) => (e) => {
    if (showTooltip && regionConfig.tooltip) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipState({
        visible: true,
        content: regionConfig.tooltip,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 50
      });
    }
  };
  
  const handleMouseMove = (e) => {
    if (showTooltip && tooltipState.visible) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipState(prev => ({
        ...prev,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 50
      }));
    }
  };
  
  const handleMouseLeave = () => {
    if (showTooltip) {
      setTooltipState(prev => ({ ...prev, visible: false }));
    }
  };
  
  // Render a single region
  const renderRegion = (regionKey, path) => {
    const regionConfig = regions[regionKey];
    if (!regionConfig || !path) return null;
    
    return (
      <path
        key={regionKey}
        d={path}
        fill={getRegionFill(regionKey, regionConfig)}
        opacity={getRegionOpacity(regionKey, regionConfig)}
        fillRule="evenodd"
        style={{
          transition: 'opacity 0.2s ease',
          cursor: enableHover || showTooltip ? 'pointer' : 'default'
        }}
        onMouseEnter={handleMouseEnter(regionKey, regionConfig)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    );
  };
  
  // Render region label
  const renderRegionLabel = (regionKey) => {
    const regionConfig = regions[regionKey];
    if (!regionConfig || !regionConfig.label) return null;
    
    return (
      <text
        key={`label-${regionKey}`}
        x={regionConfig.labelPosition?.x || 0}
        y={regionConfig.labelPosition?.y || 0}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={labelFontSize}
        fontFamily={labelFontFamily}
        fontWeight={labelFontWeight}
        fill={labelColor}
        style={{ pointerEvents: 'none' }}
      >
        {regionConfig.label}
      </text>
    );
  };
  
  // Render universe rectangle and label
  const renderUniverse = () => {
    if (!showUniverse) return null;
    
    const u = universeRect;
    const uConfig = universe;
    
    return (
      <g>
        <rect
          x={u.x}
          y={u.y}
          width={u.width}
          height={u.height}
          fill="none"
          stroke={uConfig.stroke || '#cccccc'}
          strokeWidth={uConfig.strokeWidth || 1}
        />
        {uConfig.label && (
          <text
            x={uConfig.labelPosition?.x || 35}
            y={uConfig.labelPosition?.y || 45}
            fontSize={uConfig.labelFontSize || 18}
            fontFamily={labelFontFamily}
            fontWeight="bold"
            fill={uConfig.labelColor || '#666666'}
          >
            {uConfig.label}
          </text>
        )}
      </g>
    );
  };
  
  // Render circle outlines and labels
  const renderCircleOutlines = () => {
    return Object.entries(circles).map(([circleKey, circleConfig]) => (
      <g key={`circle-${circleKey}`}>
        <circle
          cx={circleConfig.cx}
          cy={circleConfig.cy}
          r={circleConfig.r}
          fill="none"
          stroke={circleConfig.stroke}
          strokeWidth={circleConfig.strokeWidth || 1}
        />
        {circleConfig.label && (
          <text
            x={circleConfig.labelPosition?.x || circleConfig.cx}
            y={circleConfig.labelPosition?.y || (circleConfig.cy - circleConfig.r - 10)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={circleLabelFontSize}
            fontFamily={labelFontFamily}
            fontWeight={circleLabelFontWeight}
            fill={circleConfig.stroke}
          >
            {circleConfig.label}
          </text>
        )}
      </g>
    ));
  };
  
  // Render tooltip with V-shaped pointer
  const renderTooltip = () => {
    if (!showTooltip || !tooltipState.visible) return null;
    
    const arrowSize = 8;
    
    return (
      <div
        style={{
          position: 'absolute',
          left: tooltipState.x,
          top: tooltipState.y,
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          zIndex: 1000
        }}
      >
        <div
          style={{
            backgroundColor: '#333333',
            color: '#ffffff',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
          }}
        >
          {tooltipState.content}
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: -arrowSize,
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: `${arrowSize}px solid transparent`,
            borderRight: `${arrowSize}px solid transparent`,
            borderTop: `${arrowSize}px solid #333333`
          }}
        />
      </div>
    );
  };
  
  // Calculate legend position
  const getLegendPosition = () => {
    if (typeof legendPosition === 'object' && legendPosition.x !== undefined) {
      return legendPosition;
    }
    
    const itemWidth = 100;
    const itemHeight = 25;
    const totalWidth = legendItems.length * itemWidth;
    const padding = 20;
    
    switch (legendPosition) {
      case 'top':
        return { x: (width - totalWidth) / 2, y: padding + 20 };
      case 'bottom':
        return { x: (width - totalWidth) / 2, y: height - padding };
      case 'left':
        return { x: padding, y: height / 2 - (legendItems.length * itemHeight) / 2 };
      case 'right':
        return { x: width - totalWidth - padding, y: height / 2 - (legendItems.length * itemHeight) / 2 };
      case 'top-left':
        return { x: padding, y: padding + 20 };
      case 'top-right':
        return { x: width - totalWidth - padding, y: padding + 20 };
      case 'bottom-left':
        return { x: padding, y: height - padding };
      case 'bottom-right':
        return { x: width - totalWidth - padding, y: height - padding };
      default:
        return { x: (width - totalWidth) / 2, y: height - padding };
    }
  };
  
  // Render legend inside SVG
  const renderLegend = () => {
    if (!showLegend || !legendItems?.length) return null;
    
    const pos = getLegendPosition();
    const isVertical = legendPosition === 'left' || legendPosition === 'right';
    const itemWidth = 100;
    const itemHeight = 25;
    const squareSize = 16;
    
    return (
      <g transform={`translate(${pos.x}, ${pos.y})`}>
        {legendItems.map((item, index) => {
          const regionConfig = regions[item.key];
          if (!regionConfig) return null;
          
          const xOffset = isVertical ? 0 : index * itemWidth;
          const yOffset = isVertical ? index * itemHeight : 0;
          
          const isHighlighted = highlightedRegion === item.key;
          const isSelected = selectedRegion === item.key;
          
          return (
            <g
              key={item.key}
              transform={`translate(${xOffset}, ${yOffset})`}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHighlightedRegion(item.key)}
              onMouseLeave={() => setHighlightedRegion(null)}
              onClick={() => setSelectedRegion(prev => prev === item.key ? null : item.key)}
            >
              {(isHighlighted || isSelected) && (
                <rect
                  x="-4"
                  y="-4"
                  width={itemWidth - 8}
                  height={itemHeight}
                  fill={isSelected ? '#e0e0e0' : '#f0f0f0'}
                  rx="3"
                />
              )}
              
              <rect
                x="0"
                y="0"
                width={squareSize}
                height={squareSize}
                fill={regionConfig.fill}
                opacity={regionConfig.opacity}
                stroke="#666666"
                strokeWidth="1"
              />
              
              <text
                x={squareSize + 6}
                y={squareSize / 2}
                dominantBaseline="middle"
                fontSize="13"
                fontFamily="Arial, sans-serif"
                fill="#333333"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </g>
    );
  };
  
  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      <div ref={containerRef} style={{ position: 'relative' }}>
        <svg
          width={width}
          height={height}
          style={{ backgroundColor }}
        >
          <defs>
            {renderPatternDefs()}
          </defs>
          
          {/* Outside region (U - A - B) first, as background */}
          {regions['outside'] && renderRegion('outside', buildOutsidePath)}
          
          {/* Then the set regions */}
          {regions['A-only'] && renderRegion('A-only', buildAOnlyPath)}
          {regions['B-only'] && renderRegion('B-only', buildBOnlyPath)}
          {regions['A∩B'] && renderRegion('A∩B', buildIntersectionPath)}
          
          {/* Universe outline on top */}
          {renderUniverse()}
          
          {/* Circle outlines */}
          {renderCircleOutlines()}
          
          {/* Region labels */}
          {renderRegionLabel('outside')}
          {renderRegionLabel('A-only')}
          {renderRegionLabel('B-only')}
          {renderRegionLabel('A∩B')}
          
          {renderLegend()}
        </svg>
        
        {renderTooltip()}
      </div>
    </div>
  );
};

export default UnifiedVennDiagram2;