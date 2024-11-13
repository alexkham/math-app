// // // // // // // // // // // import React from 'react';

// // // // // // // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // // // // // // //   // Calculate percentage and validate inputs
// // // // // // // // // // //   const percentage = Math.min(100, (numerator / denominator) * 100);
// // // // // // // // // // //   const degrees = (percentage / 100) * 360;

// // // // // // // // // // //   // SVG parameters
// // // // // // // // // // //   const size = 200;
// // // // // // // // // // //   const radius = 80;
// // // // // // // // // // //   const center = size / 2;
// // // // // // // // // // //   const strokeWidth = 4;

// // // // // // // // // // //   // Calculate path for filled portion
// // // // // // // // // // //   const getSlicePath = (startAngle, endAngle) => {
// // // // // // // // // // //     const start = polarToCartesian(center, center, radius, endAngle);
// // // // // // // // // // //     const end = polarToCartesian(center, center, radius, startAngle);
// // // // // // // // // // //     const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

// // // // // // // // // // //     return [
// // // // // // // // // // //       'M', center, center,
// // // // // // // // // // //       'L', start.x, start.y,
// // // // // // // // // // //       'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // // // // // // //       'Z'
// // // // // // // // // // //     ].join(' ');
// // // // // // // // // // //   };

// // // // // // // // // // //   // Helper function to convert polar coordinates to cartesian
// // // // // // // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // // // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // // // // // // //     return {
// // // // // // // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // // // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // // // // // // //     };
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex flex-col items-center gap-4">
// // // // // // // // // // //       <div className="text-2xl font-bold">
// // // // // // // // // // //         {numerator} / {denominator}
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <svg width={size} height={size} className="transform -rotate-90">
// // // // // // // // // // //         {/* Background circle */}
// // // // // // // // // // //         <circle
// // // // // // // // // // //           cx={center}
// // // // // // // // // // //           cy={center}
// // // // // // // // // // //           r={radius}
// // // // // // // // // // //           fill="none"
// // // // // // // // // // //           stroke="#e5e7eb"
// // // // // // // // // // //           strokeWidth={strokeWidth}
// // // // // // // // // // //         />
        
// // // // // // // // // // //         {/* Filled portion */}
// // // // // // // // // // //         <path
// // // // // // // // // // //           d={getSlicePath(0, degrees)}
// // // // // // // // // // //           fill="#3b82f6"
// // // // // // // // // // //         />
        
// // // // // // // // // // //         {/* Inner circle for donut effect */}
// // // // // // // // // // //         <circle
// // // // // // // // // // //           cx={center}
// // // // // // // // // // //           cy={center}
// // // // // // // // // // //           r={radius - 30}
// // // // // // // // // // //           fill="white"
// // // // // // // // // // //         />
// // // // // // // // // // //       </svg>
// // // // // // // // // // //       <div className="text-lg text-gray-600">
// // // // // // // // // // //         {Math.round(percentage)}%
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default FractionCircle;

// // // // // // // // // // import React from 'react';

// // // // // // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // // // // // //   // Calculate degrees for the filled portion
// // // // // // // // // //   const degrees = (numerator / denominator) * 360;

// // // // // // // // // //   // SVG parameters
// // // // // // // // // //   const size = 200;
// // // // // // // // // //   const radius = 95;
// // // // // // // // // //   const center = size / 2;

// // // // // // // // // //   // Calculate path for filled portion
// // // // // // // // // //   const getSlicePath = (startAngle, endAngle) => {
// // // // // // // // // //     const start = polarToCartesian(center, center, radius, endAngle);
// // // // // // // // // //     const end = polarToCartesian(center, center, radius, startAngle);
// // // // // // // // // //     const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

// // // // // // // // // //     return [
// // // // // // // // // //       'M', center, center,
// // // // // // // // // //       'L', start.x, start.y,
// // // // // // // // // //       'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // // // // // //       'Z'
// // // // // // // // // //     ].join(' ');
// // // // // // // // // //   };

// // // // // // // // // //   // Helper function to convert polar coordinates to cartesian
// // // // // // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // // // // // //     return {
// // // // // // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // // // // // //     };
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <svg width={size} height={size} className="transform -rotate-90">
// // // // // // // // // //       {/* Background circle */}
// // // // // // // // // //       <circle
// // // // // // // // // //         cx={center}
// // // // // // // // // //         cy={center}
// // // // // // // // // //         r={radius}
// // // // // // // // // //         fill="#e5e7eb"
// // // // // // // // // //       />
      
// // // // // // // // // //       {/* Filled portion */}
// // // // // // // // // //       <path
// // // // // // // // // //         d={getSlicePath(0, degrees)}
// // // // // // // // // //         fill="#3b82f6"
// // // // // // // // // //       />
// // // // // // // // // //     </svg>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default FractionCircle;

// // // // // // // // // import React from 'react';

// // // // // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // // // // //   const size = 200;
// // // // // // // // //   const radius = 95;
// // // // // // // // //   const center = size / 2;

// // // // // // // // //   // Create division lines
// // // // // // // // //   const getDivisionLines = () => {
// // // // // // // // //     const lines = [];
// // // // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // // // // //       const angle = i * angleStep;
// // // // // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // // // // //       const x2 = center + radius * Math.cos(radians);
// // // // // // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // // // // // //       lines.push(
// // // // // // // // //         <line
// // // // // // // // //           key={i}
// // // // // // // // //           x1={center}
// // // // // // // // //           y1={center}
// // // // // // // // //           x2={x2}
// // // // // // // // //           y2={y2}
// // // // // // // // //           stroke="black"
// // // // // // // // //           strokeWidth="2"
// // // // // // // // //         />
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //     return lines;
// // // // // // // // //   };

// // // // // // // // //   // Create filled segments
// // // // // // // // //   const getFilledSegments = () => {
// // // // // // // // //     const segments = [];
// // // // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // // // //     for (let i = 0; i < numerator; i++) {
// // // // // // // // //       const startAngle = i * angleStep;
// // // // // // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // // // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // // // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // // // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // // // // // //       const path = [
// // // // // // // // //         'M', center, center,
// // // // // // // // //         'L', start.x, start.y,
// // // // // // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // // // // //         'Z'
// // // // // // // // //       ].join(' ');
      
// // // // // // // // //       segments.push(
// // // // // // // // //         <path
// // // // // // // // //           key={i}
// // // // // // // // //           d={path}
// // // // // // // // //           fill="#3b82f6"
// // // // // // // // //         />
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //     return segments;
// // // // // // // // //   };

// // // // // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // // // // //     return {
// // // // // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // // // // //     };
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <svg width={size} height={size} className="transform -rotate-90">
// // // // // // // // //       {/* Base circle */}
// // // // // // // // //       <circle
// // // // // // // // //         cx={center}
// // // // // // // // //         cy={center}
// // // // // // // // //         r={radius}
// // // // // // // // //         fill="white"
// // // // // // // // //         stroke="black"
// // // // // // // // //         strokeWidth="2"
// // // // // // // // //       />
      
// // // // // // // // //       {/* Filled segments */}
// // // // // // // // //       {getFilledSegments()}
      
// // // // // // // // //       {/* Division lines */}
// // // // // // // // //       {getDivisionLines()}
// // // // // // // // //     </svg>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default FractionCircle;

// // // // // // // // import React from 'react';

// // // // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // // // //   const size = 200;
// // // // // // // //   const radius = 95;
// // // // // // // //   const center = size / 2;
// // // // // // // //   const labelRadius = radius * 0.7; // Position for numbers

// // // // // // // //   // Create division lines
// // // // // // // //   const getDivisionLines = () => {
// // // // // // // //     const lines = [];
// // // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // // // //       const angle = i * angleStep;
// // // // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // // // //       const x2 = center + radius * Math.cos(radians);
// // // // // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // // // // //       lines.push(
// // // // // // // //         <line
// // // // // // // //           key={i}
// // // // // // // //           x1={center}
// // // // // // // //           y1={center}
// // // // // // // //           x2={x2}
// // // // // // // //           y2={y2}
// // // // // // // //           stroke="black"
// // // // // // // //           strokeWidth="0.5"
// // // // // // // //           strokeOpacity="0.5"
// // // // // // // //         />
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     return lines;
// // // // // // // //   };

// // // // // // // //   // Create segment numbers
// // // // // // // //   const getSegmentNumbers = () => {
// // // // // // // //     const numbers = [];
// // // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // // // //       const angle = i * angleStep + (angleStep / 2); // Center of segment
// // // // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // // // // //       numbers.push(
// // // // // // // //         <text
// // // // // // // //           key={i}
// // // // // // // //           x={x}
// // // // // // // //           y={y}
// // // // // // // //           textAnchor="middle"
// // // // // // // //           dominantBaseline="middle"
// // // // // // // //           className="text-sm font-medium"
// // // // // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // // // // //         >
// // // // // // // //           {i + 1}
// // // // // // // //         </text>
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     return numbers;
// // // // // // // //   };

// // // // // // // //   // Create filled segments
// // // // // // // //   const getFilledSegments = () => {
// // // // // // // //     const segments = [];
// // // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // // //     for (let i = 0; i < numerator; i++) {
// // // // // // // //       const startAngle = i * angleStep;
// // // // // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // // // // //       const path = [
// // // // // // // //         'M', center, center,
// // // // // // // //         'L', start.x, start.y,
// // // // // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // // // //         'Z'
// // // // // // // //       ].join(' ');
      
// // // // // // // //       segments.push(
// // // // // // // //         <path
// // // // // // // //           key={i}
// // // // // // // //           d={path}
// // // // // // // //           fill="#3b82f6"
// // // // // // // //           fillOpacity="0.3"
// // // // // // // //         />
// // // // // // // //       );
// // // // // // // //     }
// // // // // // // //     return segments;
// // // // // // // //   };

// // // // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // // // //     return {
// // // // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <svg width={size} height={size}>
// // // // // // // //       {/* Base circle */}
// // // // // // // //       <circle
// // // // // // // //         cx={center}
// // // // // // // //         cy={center}
// // // // // // // //         r={radius}
// // // // // // // //         fill="white"
// // // // // // // //         stroke="black"
// // // // // // // //         strokeWidth="1"
// // // // // // // //       />
      
// // // // // // // //       {/* Filled segments */}
// // // // // // // //       {getFilledSegments()}
      
// // // // // // // //       {/* Division lines */}
// // // // // // // //       {getDivisionLines()}
      
// // // // // // // //       {/* Segment numbers */}
// // // // // // // //       {getSegmentNumbers()}
// // // // // // // //     </svg>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default FractionCircle;

// // // // // // // import React from 'react';

// // // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // // //   const size = 200;
// // // // // // //   const radius = 95;
// // // // // // //   const center = size / 2;
// // // // // // //   const labelRadius = radius * 0.7;
  
// // // // // // //   // Calculate font size based on denominator
// // // // // // //   const getFontSize = () => {
// // // // // // //     if (denominator <= 25) return 12;
// // // // // // //     if (denominator <= 50) return 8;
// // // // // // //     if (denominator <= 100) return 6;
// // // // // // //     return 4;
// // // // // // //   };

// // // // // // //   const getDivisionLines = () => {
// // // // // // //     const lines = [];
// // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // // //       const angle = i * angleStep;
// // // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // // //       const x2 = center + radius * Math.cos(radians);
// // // // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // // // //       lines.push(
// // // // // // //         <line
// // // // // // //           key={i}
// // // // // // //           x1={center}
// // // // // // //           y1={center}
// // // // // // //           x2={x2}
// // // // // // //           y2={y2}
// // // // // // //           stroke="black"
// // // // // // //           strokeWidth="0.5"
// // // // // // //           strokeOpacity="0.5"
// // // // // // //         />
// // // // // // //       );
// // // // // // //     }
// // // // // // //     return lines;
// // // // // // //   };

// // // // // // //   const getSegmentNumbers = () => {
// // // // // // //     const numbers = [];
// // // // // // //     const angleStep = 360 / denominator;
// // // // // // //     const fontSize = getFontSize();
    
// // // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // // //       const angle = i * angleStep + (angleStep / 2);
// // // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // // // //       numbers.push(
// // // // // // //         <text
// // // // // // //           key={i}
// // // // // // //           x={x}
// // // // // // //           y={y}
// // // // // // //           textAnchor="middle"
// // // // // // //           dominantBaseline="middle"
// // // // // // //           style={{ fontSize: `${fontSize}px` }}
// // // // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // // // //         >
// // // // // // //           {i + 1}
// // // // // // //         </text>
// // // // // // //       );
// // // // // // //     }
// // // // // // //     return numbers;
// // // // // // //   };

// // // // // // //   const getFilledSegments = () => {
// // // // // // //     const segments = [];
// // // // // // //     const angleStep = 360 / denominator;
    
// // // // // // //     for (let i = 0; i < numerator; i++) {
// // // // // // //       const startAngle = i * angleStep;
// // // // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // // // //       const path = [
// // // // // // //         'M', center, center,
// // // // // // //         'L', start.x, start.y,
// // // // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // // //         'Z'
// // // // // // //       ].join(' ');
      
// // // // // // //       segments.push(
// // // // // // //         <path
// // // // // // //           key={i}
// // // // // // //           d={path}
// // // // // // //           fill="#3b82f6"
// // // // // // //           fillOpacity="0.3"
// // // // // // //         />
// // // // // // //       );
// // // // // // //     }
// // // // // // //     return segments;
// // // // // // //   };

// // // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // // //     return {
// // // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // // //     };
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <svg width={size} height={size}>
// // // // // // //       <circle
// // // // // // //         cx={center}
// // // // // // //         cy={center}
// // // // // // //         r={radius}
// // // // // // //         fill="white"
// // // // // // //         stroke="black"
// // // // // // //         strokeWidth="1"
// // // // // // //       />
// // // // // // //       {getFilledSegments()}
// // // // // // //       {getDivisionLines()}
// // // // // // //       {getSegmentNumbers()}
// // // // // // //     </svg>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default FractionCircle;

// // // // // // import React from 'react';

// // // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // // //   // Scale size based on denominator
// // // // // //   const getSize = () => {
// // // // // //     if (denominator <= 25) return 200;
// // // // // //     if (denominator <= 50) return 300;
// // // // // //     if (denominator <= 100) return 400;
// // // // // //     return 500;
// // // // // //   };
  
// // // // // //   const size = getSize();
// // // // // //   const radius = size * 0.45; // Using 45% of container for circle
// // // // // //   const center = size / 2;
// // // // // //   const labelRadius = radius * 0.7;
  
// // // // // //   // Calculate font size based on denominator
// // // // // //   const getFontSize = () => {
// // // // // //     if (denominator <= 25) return 12;
// // // // // //     if (denominator <= 50) return 10;
// // // // // //     if (denominator <= 100) return 8;
// // // // // //     return 6;
// // // // // //   };

// // // // // //   const getDivisionLines = () => {
// // // // // //     const lines = [];
// // // // // //     const angleStep = 360 / denominator;
    
// // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // //       const angle = i * angleStep;
// // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // //       const x2 = center + radius * Math.cos(radians);
// // // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // // //       lines.push(
// // // // // //         <line
// // // // // //           key={i}
// // // // // //           x1={center}
// // // // // //           y1={center}
// // // // // //           x2={x2}
// // // // // //           y2={y2}
// // // // // //           stroke="black"
// // // // // //           strokeWidth="0.5"
// // // // // //           strokeOpacity="0.5"
// // // // // //         />
// // // // // //       );
// // // // // //     }
// // // // // //     return lines;
// // // // // //   };

// // // // // //   const getSegmentNumbers = () => {
// // // // // //     const numbers = [];
// // // // // //     const angleStep = 360 / denominator;
// // // // // //     const fontSize = getFontSize();
    
// // // // // //     for (let i = 0; i < denominator; i++) {
// // // // // //       const angle = i * angleStep + (angleStep / 2);
// // // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // // //       numbers.push(
// // // // // //         <text
// // // // // //           key={i}
// // // // // //           x={x}
// // // // // //           y={y}
// // // // // //           textAnchor="middle"
// // // // // //           dominantBaseline="middle"
// // // // // //           style={{ fontSize: `${fontSize}px` }}
// // // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // // //         >
// // // // // //           {i + 1}
// // // // // //         </text>
// // // // // //       );
// // // // // //     }
// // // // // //     return numbers;
// // // // // //   };

// // // // // //   const getFilledSegments = () => {
// // // // // //     const segments = [];
// // // // // //     const angleStep = 360 / denominator;
    
// // // // // //     for (let i = 0; i < numerator; i++) {
// // // // // //       const startAngle = i * angleStep;
// // // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // // //       const path = [
// // // // // //         'M', center, center,
// // // // // //         'L', start.x, start.y,
// // // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // // //         'Z'
// // // // // //       ].join(' ');
      
// // // // // //       segments.push(
// // // // // //         <path
// // // // // //           key={i}
// // // // // //           d={path}
// // // // // //           fill="#3b82f6"
// // // // // //           fillOpacity="0.3"
// // // // // //         />
// // // // // //       );
// // // // // //     }
// // // // // //     return segments;
// // // // // //   };

// // // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // // //     return {
// // // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // // //     };
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex items-center justify-center w-full">
// // // // // //       <svg width={size} height={size}>
// // // // // //         <circle
// // // // // //           cx={center}
// // // // // //           cy={center}
// // // // // //           r={radius}
// // // // // //           fill="white"
// // // // // //           stroke="black"
// // // // // //           strokeWidth="1"
// // // // // //         />
// // // // // //         {getFilledSegments()}
// // // // // //         {getDivisionLines()}
// // // // // //         {getSegmentNumbers()}
// // // // // //       </svg>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FractionCircle;

// // // // // import React from 'react';

// // // // // const FractionCircle = ({ numerator, denominator }) => {
// // // // //   const wholeCircles = Math.floor(numerator / denominator);
// // // // //   const remainingNumerator = numerator % denominator;
  
// // // // //   // Scale size based on denominator
// // // // //   const getSize = () => {
// // // // //     if (denominator <= 25) return 200;
// // // // //     if (denominator <= 50) return 300;
// // // // //     if (denominator <= 100) return 400;
// // // // //     return 500;
// // // // //   };
  
// // // // //   const size = getSize();
// // // // //   const radius = size * 0.45;
// // // // //   const center = size / 2;
// // // // //   const labelRadius = radius * 0.7;
  
// // // // //   const getFontSize = () => {
// // // // //     if (denominator <= 25) return 12;
// // // // //     if (denominator <= 50) return 10;
// // // // //     if (denominator <= 100) return 8;
// // // // //     return 6;
// // // // //   };

// // // // //   const getDivisionLines = () => {
// // // // //     const lines = [];
// // // // //     const angleStep = 360 / denominator;
    
// // // // //     for (let i = 0; i < denominator; i++) {
// // // // //       const angle = i * angleStep;
// // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // //       const x2 = center + radius * Math.cos(radians);
// // // // //       const y2 = center + radius * Math.sin(radians);
      
// // // // //       lines.push(
// // // // //         <line
// // // // //           key={i}
// // // // //           x1={center}
// // // // //           y1={center}
// // // // //           x2={x2}
// // // // //           y2={y2}
// // // // //           stroke="black"
// // // // //           strokeWidth="0.5"
// // // // //           strokeOpacity="0.5"
// // // // //         />
// // // // //       );
// // // // //     }
// // // // //     return lines;
// // // // //   };

// // // // //   const getSegmentNumbers = () => {
// // // // //     const numbers = [];
// // // // //     const angleStep = 360 / denominator;
// // // // //     const fontSize = getFontSize();
    
// // // // //     for (let i = 0; i < denominator; i++) {
// // // // //       const angle = i * angleStep + (angleStep / 2);
// // // // //       const radians = (angle - 90) * Math.PI / 180;
// // // // //       const x = center + labelRadius * Math.cos(radians);
// // // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // // //       numbers.push(
// // // // //         <text
// // // // //           key={i}
// // // // //           x={x}
// // // // //           y={y}
// // // // //           textAnchor="middle"
// // // // //           dominantBaseline="middle"
// // // // //           style={{ fontSize: `${fontSize}px` }}
// // // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // // //         >
// // // // //           {i + 1}
// // // // //         </text>
// // // // //       );
// // // // //     }
// // // // //     return numbers;
// // // // //   };

// // // // //   const getFilledSegments = () => {
// // // // //     const segments = [];
// // // // //     const angleStep = 360 / denominator;
    
// // // // //     for (let i = 0; i < remainingNumerator; i++) {
// // // // //       const startAngle = i * angleStep;
// // // // //       const endAngle = (i + 1) * angleStep;
      
// // // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // // //       const path = [
// // // // //         'M', center, center,
// // // // //         'L', start.x, start.y,
// // // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // // //         'Z'
// // // // //       ].join(' ');
      
// // // // //       segments.push(
// // // // //         <path
// // // // //           key={i}
// // // // //           d={path}
// // // // //           fill="#3b82f6"
// // // // //           fillOpacity="0.3"
// // // // //         />
// // // // //       );
// // // // //     }
// // // // //     return segments;
// // // // //   };

// // // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // // //     return {
// // // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // // //     };
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col items-center gap-4">
// // // // //       {wholeCircles > 0 && (
// // // // //         <div className="text-xl font-bold text-center">
// // // // //           + {wholeCircles} full circle{wholeCircles > 1 ? 's' : ''}
// // // // //         </div>
// // // // //       )}
// // // // //       <div className="flex items-center justify-center w-full">
// // // // //         <svg width={size} height={size}>
// // // // //           <circle
// // // // //             cx={center}
// // // // //             cy={center}
// // // // //             r={radius}
// // // // //             fill="white"
// // // // //             stroke="black"
// // // // //             strokeWidth="1"
// // // // //           />
// // // // //           {getFilledSegments()}
// // // // //           {getDivisionLines()}
// // // // //           {getSegmentNumbers()}
// // // // //         </svg>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FractionCircle;

// // // // import React from 'react';

// // // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // // //   const radius = size * 0.45;
// // // //   const center = size / 2;
// // // //   const labelRadius = radius * 0.7;
  
// // // //   const getFontSize = () => {
// // // //     if (denominator <= 25) return 12;
// // // //     if (denominator <= 50) return 10;
// // // //     if (denominator <= 100) return 8;
// // // //     return 6;
// // // //   };

// // // //   const getDivisionLines = () => {
// // // //     if (isFullCircle) return null;
    
// // // //     const lines = [];
// // // //     const angleStep = 360 / denominator;
    
// // // //     for (let i = 0; i < denominator; i++) {
// // // //       const angle = i * angleStep;
// // // //       const radians = (angle - 90) * Math.PI / 180;
// // // //       const x2 = center + radius * Math.cos(radians);
// // // //       const y2 = center + radius * Math.sin(radians);
      
// // // //       lines.push(
// // // //         <line
// // // //           key={i}
// // // //           x1={center}
// // // //           y1={center}
// // // //           x2={x2}
// // // //           y2={y2}
// // // //           stroke="black"
// // // //           strokeWidth="0.5"
// // // //           strokeOpacity="0.5"
// // // //         />
// // // //       );
// // // //     }
// // // //     return lines;
// // // //   };

// // // //   const getSegmentNumbers = () => {
// // // //     if (isFullCircle) return null;
    
// // // //     const numbers = [];
// // // //     const angleStep = 360 / denominator;
// // // //     const fontSize = getFontSize();
    
// // // //     for (let i = 0; i < denominator; i++) {
// // // //       const angle = i * angleStep + (angleStep / 2);
// // // //       const radians = (angle - 90) * Math.PI / 180;
// // // //       const x = center + labelRadius * Math.cos(radians);
// // // //       const y = center + labelRadius * Math.sin(radians);
      
// // // //       numbers.push(
// // // //         <text
// // // //           key={i}
// // // //           x={x}
// // // //           y={y}
// // // //           textAnchor="middle"
// // // //           dominantBaseline="middle"
// // // //           style={{ fontSize: `${fontSize}px` }}
// // // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // // //         >
// // // //           {i + 1}
// // // //         </text>
// // // //       );
// // // //     }
// // // //     return numbers;
// // // //   };

// // // //   const getFilledSegments = () => {
// // // //     if (isFullCircle) return null;
    
// // // //     const segments = [];
// // // //     const angleStep = 360 / denominator;
    
// // // //     for (let i = 0; i < numerator; i++) {
// // // //       const startAngle = i * angleStep;
// // // //       const endAngle = (i + 1) * angleStep;
      
// // // //       const start = polarToCartesian(center, center, radius, endAngle);
// // // //       const end = polarToCartesian(center, center, radius, startAngle);
// // // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // // //       const path = [
// // // //         'M', center, center,
// // // //         'L', start.x, start.y,
// // // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // //         'Z'
// // // //       ].join(' ');
      
// // // //       segments.push(
// // // //         <path
// // // //           key={i}
// // // //           d={path}
// // // //           fill="#3b82f6"
// // // //           fillOpacity="0.3"
// // // //         />
// // // //       );
// // // //     }
// // // //     return segments;
// // // //   };

// // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // // //     return {
// // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // //     };
// // // //   };

// // // //   return (
// // // //     <svg width={size} height={size}>
// // // //       <circle
// // // //         cx={center}
// // // //         cy={center}
// // // //         r={radius}
// // // //         fill={isFullCircle ? "#3b82f6" : "white"}
// // // //         fillOpacity={isFullCircle ? 0.3 : 1}
// // // //         stroke="black"
// // // //         strokeWidth="1"
// // // //       />
// // // //       {getFilledSegments()}
// // // //       {getDivisionLines()}
// // // //       {getSegmentNumbers()}
// // // //     </svg>
// // // //   );
// // // // };

// // // // const FractionCircle = ({ numerator, denominator }) => {
// // // //   const wholeCircles = Math.floor(numerator / denominator);
// // // //   const remainingNumerator = numerator % denominator;
  
// // // //   const getSize = () => {
// // // //     if (denominator <= 25) return 200;
// // // //     if (denominator <= 50) return 300;
// // // //     if (denominator <= 100) return 400;
// // // //     return 500;
// // // //   };
  
// // // //   const size = getSize();

// // // //   return (
// // // //     <div className="flex items-center justify-center gap-8">
// // // //       {wholeCircles > 0 && (
// // // //         <div className="flex flex-col items-center gap-2">
// // // //           <div className="text-xl font-bold text-center">
// // // //             {wholeCircles} full circle{wholeCircles > 1 ? 's' : ''}
// // // //           </div>
// // // //           <CircleDisplay size={size} isFullCircle={true} />
// // // //         </div>
// // // //       )}
      
// // // //       {wholeCircles > 0 && (
// // // //         <div className="text-3xl font-bold">+</div>
// // // //       )}
      
// // // //       {(remainingNumerator > 0 || wholeCircles === 0) && (
// // // //         <CircleDisplay 
// // // //           size={size}
// // // //           numerator={remainingNumerator} 
// // // //           denominator={denominator}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FractionCircle;

// // // import React from 'react';

// // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // //   const radius = size * 0.45;
// // //   const center = size / 2;
// // //   const labelRadius = radius * 0.7;
  
// // //   const getFontSize = () => {
// // //     if (denominator <= 25) return 12;
// // //     if (denominator <= 50) return 10;
// // //     if (denominator <= 100) return 8;
// // //     return 6;
// // //   };

// // //   const getDivisionLines = () => {
// // //     if (isFullCircle) return null;
    
// // //     const lines = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep;
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x2 = center + radius * Math.cos(radians);
// // //       const y2 = center + radius * Math.sin(radians);
      
// // //       lines.push(
// // //         <line
// // //           key={i}
// // //           x1={center}
// // //           y1={center}
// // //           x2={x2}
// // //           y2={y2}
// // //           stroke="black"
// // //           strokeWidth="0.5"
// // //           strokeOpacity="0.5"
// // //         />
// // //       );
// // //     }
// // //     return lines;
// // //   };

// // //   const getSegmentNumbers = () => {
// // //     if (isFullCircle) return null;
    
// // //     const numbers = [];
// // //     const angleStep = 360 / denominator;
// // //     const fontSize = getFontSize();
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep + (angleStep / 2);
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x = center + labelRadius * Math.cos(radians);
// // //       const y = center + labelRadius * Math.sin(radians);
      
// // //       numbers.push(
// // //         <text
// // //           key={i}
// // //           x={x}
// // //           y={y}
// // //           textAnchor="middle"
// // //           dominantBaseline="middle"
// // //           style={{ fontSize: `${fontSize}px` }}
// // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // //         >
// // //           {i + 1}
// // //         </text>
// // //       );
// // //     }
// // //     return numbers;
// // //   };

// // //   const getFilledSegments = () => {
// // //     if (isFullCircle) return null;
    
// // //     const segments = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < numerator; i++) {
// // //       const startAngle = i * angleStep;
// // //       const endAngle = (i + 1) * angleStep;
      
// // //       const start = polarToCartesian(center, center, radius, endAngle);
// // //       const end = polarToCartesian(center, center, radius, startAngle);
// // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // //       const path = [
// // //         'M', center, center,
// // //         'L', start.x, start.y,
// // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // //         'Z'
// // //       ].join(' ');
      
// // //       segments.push(
// // //         <path
// // //           key={i}
// // //           d={path}
// // //           fill="#3b82f6"
// // //           fillOpacity="0.3"
// // //         />
// // //       );
// // //     }
// // //     return segments;
// // //   };

// // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // //     return {
// // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // //       y: centerY + (radius * Math.sin(angleInRadians))
// // //     };
// // //   };

// // //   return (
// // //     <svg width={size} height={size}>
// // //       <circle
// // //         cx={center}
// // //         cy={center}
// // //         r={radius}
// // //         fill={isFullCircle ? "#3b82f6" : "white"}
// // //         fillOpacity={isFullCircle ? 0.3 : 1}
// // //         stroke="black"
// // //         strokeWidth="1"
// // //       />
// // //       {getFilledSegments()}
// // //       {getDivisionLines()}
// // //       {getSegmentNumbers()}
// // //     </svg>
// // //   );
// // // };

// // // const FractionCircle = ({ numerator, denominator }) => {
// // //   const wholeCircles = Math.floor(numerator / denominator);
// // //   const remainingNumerator = numerator % denominator;
  
// // //   const getSize = () => {
// // //     if (denominator <= 25) return 200;
// // //     if (denominator <= 50) return 300;
// // //     if (denominator <= 100) return 400;
// // //     return 500;
// // //   };
  
// // //   const size = getSize();

// // //   if (wholeCircles === 0) {
// // //     return (
// // //       <div className="flex justify-center">
// // //         <CircleDisplay 
// // //           size={size}
// // //           numerator={remainingNumerator} 
// // //           denominator={denominator}
// // //         />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="flex justify-center items-center gap-12">
// // //       <div className="flex flex-col items-center gap-2">
// // //         <div className="text-2xl font-bold text-center">
// // //           {wholeCircles} full circle{wholeCircles > 1 ? 's' : ''}
// // //         </div>
// // //         <CircleDisplay size={size} isFullCircle={true} />
// // //       </div>
      
// // //       <div className="text-6xl font-black">+</div>
      
// // //       {remainingNumerator > 0 && (
// // //         <CircleDisplay 
// // //           size={size}
// // //           numerator={remainingNumerator} 
// // //           denominator={denominator}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FractionCircle;

// // // import React from 'react';

// // // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// // //   const radius = size * 0.45;
// // //   const center = size / 2;
// // //   const labelRadius = radius * 0.7;

// // //   const getFontSize = () => {
// // //     if (denominator <= 25) return 12;
// // //     if (denominator <= 50) return 10;
// // //     if (denominator <= 100) return 8;
// // //     return 6;
// // //   };

// // //   const getDivisionLines = () => {
// // //     if (isFullCircle) return null;
// // //     const lines = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep;
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x2 = center + radius * Math.cos(radians);
// // //       const y2 = center + radius * Math.sin(radians);
      
// // //       lines.push(
// // //         <line
// // //           key={i}
// // //           x1={center}
// // //           y1={center}
// // //           x2={x2}
// // //           y2={y2}
// // //           stroke="black"
// // //           strokeWidth="0.5"
// // //           strokeOpacity="0.5"
// // //         />
// // //       );
// // //     }
// // //     return lines;
// // //   };

// // //   const getSegmentNumbers = () => {
// // //     if (isFullCircle) return null;
// // //     const numbers = [];
// // //     const angleStep = 360 / denominator;
// // //     const fontSize = getFontSize();
    
// // //     for (let i = 0; i < denominator; i++) {
// // //       const angle = i * angleStep + (angleStep / 2);
// // //       const radians = (angle - 90) * Math.PI / 180;
// // //       const x = center + labelRadius * Math.cos(radians);
// // //       const y = center + labelRadius * Math.sin(radians);
      
// // //       numbers.push(
// // //         <text
// // //           key={i}
// // //           x={x}
// // //           y={y}
// // //           textAnchor="middle"
// // //           dominantBaseline="middle"
// // //           style={{ fontSize: `${fontSize}px` }}
// // //           transform={`rotate(${angle}, ${x}, ${y})`}
// // //         >
// // //           {i + 1}
// // //         </text>
// // //       );
// // //     }
// // //     return numbers;
// // //   };

// // //   const getFilledSegments = () => {
// // //     if (isFullCircle) return null;
// // //     const segments = [];
// // //     const angleStep = 360 / denominator;
    
// // //     for (let i = 0; i < numerator; i++) {
// // //       const startAngle = i * angleStep;
// // //       const endAngle = (i + 1) * angleStep;
      
// // //       const start = polarToCartesian(center, center, radius, endAngle);
// // //       const end = polarToCartesian(center, center, radius, startAngle);
// // //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// // //       const path = [
// // //         'M', center, center,
// // //         'L', start.x, start.y,
// // //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // //         'Z'
// // //       ].join(' ');
      
// // //       segments.push(
// // //         <path
// // //           key={i}
// // //           d={path}
// // //           fill="#3b82f6"
// // //           fillOpacity="0.3"
// // //         />
// // //       );
// // //     }
// // //     return segments;
// // //   };

// // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// // //     return {
// // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // //       y: centerY + (radius * Math.sin(angleInRadians))
// // //     };
// // //   };

// // //   return (
// // //     <div>
// // //       {isFullCircle && (
// // //         <div className="text-2xl font-bold text-center mb-2">
// // //           {numerator} full circle{numerator > 1 ? 's' : ''}
// // //         </div>
// // //       )}
// // //       <svg width={size} height={size}>
// // //         <circle
// // //           cx={center}
// // //           cy={center}
// // //           r={radius}
// // //           fill={isFullCircle ? "#3b82f6" : "white"}
// // //           fillOpacity={isFullCircle ? 0.3 : 1}
// // //           stroke="black"
// // //           strokeWidth="1"
// // //         />
// // //         {getFilledSegments()}
// // //         {getDivisionLines()}
// // //         {getSegmentNumbers()}
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // const FractionCircle = ({ numerator, denominator }) => {
// // //   const wholeCircles = Math.floor(numerator / denominator);
// // //   const remainingNumerator = numerator % denominator;
  
// // //   const getSize = () => {
// // //     if (denominator <= 25) return 200;
// // //     if (denominator <= 50) return 300;
// // //     if (denominator <= 100) return 400;
// // //     return 500;
// // //   };
  
// // //   const size = getSize();

// // //   return (
// // //     <div className="flex flex-row items-end">
// // //       {wholeCircles > 0 && (
// // //         <>
// // //           <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// // //           <div className="text-8xl font-black mx-8">+</div>
// // //         </>
// // //       )}
// // //       {(remainingNumerator > 0 || wholeCircles === 0) && (
// // //         <CircleDisplay 
// // //           size={size}
// // //           numerator={remainingNumerator} 
// // //           denominator={denominator}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FractionCircle;

// // import React from 'react';

// // const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
// //   const radius = size * 0.45;
// //   const center = size / 2;
// //   const labelRadius = radius * 0.7;

// //   const getFontSize = () => {
// //     if (denominator <= 25) return 12;
// //     if (denominator <= 50) return 10;
// //     if (denominator <= 100) return 8;
// //     return 6;
// //   };

// //   const getDivisionLines = () => {
// //     if (isFullCircle) return null;
// //     const lines = [];
// //     const angleStep = 360 / denominator;
    
// //     for (let i = 0; i < denominator; i++) {
// //       const angle = i * angleStep;
// //       const radians = (angle - 90) * Math.PI / 180;
// //       const x2 = center + radius * Math.cos(radians);
// //       const y2 = center + radius * Math.sin(radians);
      
// //       lines.push(
// //         <line
// //           key={i}
// //           x1={center}
// //           y1={center}
// //           x2={x2}
// //           y2={y2}
// //           stroke="black"
// //           strokeWidth="0.5"
// //           strokeOpacity="0.5"
// //         />
// //       );
// //     }
// //     return lines;
// //   };

// //   const getSegmentNumbers = () => {
// //     if (isFullCircle) return null;
// //     const numbers = [];
// //     const angleStep = 360 / denominator;
// //     const fontSize = getFontSize();
    
// //     for (let i = 0; i < denominator; i++) {
// //       const angle = i * angleStep + (angleStep / 2);
// //       const radians = (angle - 90) * Math.PI / 180;
// //       const x = center + labelRadius * Math.cos(radians);
// //       const y = center + labelRadius * Math.sin(radians);
      
// //       numbers.push(
// //         <text
// //           key={i}
// //           x={x}
// //           y={y}
// //           textAnchor="middle"
// //           dominantBaseline="middle"
// //           style={{ fontSize: `${fontSize}px` }}
// //           transform={`rotate(${angle}, ${x}, ${y})`}
// //         >
// //           {i + 1}
// //         </text>
// //       );
// //     }
// //     return numbers;
// //   };

// //   const getFilledSegments = () => {
// //     if (isFullCircle) return null;
// //     const segments = [];
// //     const angleStep = 360 / denominator;
    
// //     for (let i = 0; i < numerator; i++) {
// //       const startAngle = i * angleStep;
// //       const endAngle = (i + 1) * angleStep;
      
// //       const start = polarToCartesian(center, center, radius, endAngle);
// //       const end = polarToCartesian(center, center, radius, startAngle);
// //       const largeArcFlag = angleStep <= 180 ? 0 : 1;

// //       const path = [
// //         'M', center, center,
// //         'L', start.x, start.y,
// //         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// //         'Z'
// //       ].join(' ');
      
// //       segments.push(
// //         <path
// //           key={i}
// //           d={path}
// //           fill="#3b82f6"
// //           fillOpacity="0.3"
// //         />
// //       );
// //     }
// //     return segments;
// //   };

// //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
// //     return {
// //       x: centerX + (radius * Math.cos(angleInRadians)),
// //       y: centerY + (radius * Math.sin(angleInRadians))
// //     };
// //   };

// //   return (
// //     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
// //       {isFullCircle && (
// //         <div className="text-2xl font-bold text-center mb-2" >
// //           {numerator} full circle{numerator > 1 ? 's' : ''}
// //         </div>
// //       )}
// //       <svg width={size} height={size}>
// //         <circle
// //           cx={center}
// //           cy={center}
// //           r={radius}
// //           fill={isFullCircle ? "#3b82f6" : "white"}
// //           fillOpacity={isFullCircle ? 0.3 : 1}
// //           stroke="black"
// //           strokeWidth="1"
// //         />
// //         {getFilledSegments()}
// //         {getDivisionLines()}
// //         {getSegmentNumbers()}
// //       </svg>
// //     </div>
// //   );
// // };

// // const FractionCircle = ({ numerator, denominator }) => {
// //   const getSize = () => {
// //     if (denominator <= 25) return 200;
// //     if (denominator <= 50) return 300;
// //     if (denominator <= 100) return 400;
// //     return 500;
// //   };

// //   const wholeCircles = Math.floor(numerator / denominator);
// //   const remainingNumerator = numerator % denominator;
// //   const size = getSize();

// //   return (
// //     <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
// //       <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
// //       <span style={{ fontSize: '64px', fontWeight: 'bold' }}>+</span>
// //       <CircleDisplay size={size} numerator={remainingNumerator} denominator={denominator} />
// //     </div>
// //   );
// // };

// // export default FractionCircle;

// import React from 'react';

// const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
//   const radius = size * 0.45;
//   const center = size / 2;
//   const labelRadius = radius * 0.7;

//   const getFontSize = () => {
//     if (denominator <= 25) return 12;
//     if (denominator <= 50) return 10;
//     if (denominator <= 100) return 8;
//     return 6;
//   };

//   const getDivisionLines = () => {
//     if (isFullCircle) return null;
//     const lines = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep;
//       const radians = (angle - 90) * Math.PI / 180;
//       const x2 = center + radius * Math.cos(radians);
//       const y2 = center + radius * Math.sin(radians);
      
//       lines.push(
//         <line
//           key={i}
//           x1={center}
//           y1={center}
//           x2={x2}
//           y2={y2}
//           stroke="black"
//           strokeWidth="0.5"
//           strokeOpacity="0.5"
//         />
//       );
//     }
//     return lines;
//   };

//   const getSegmentNumbers = () => {
//     if (isFullCircle) return null;
//     const numbers = [];
//     const angleStep = 360 / denominator;
//     const fontSize = getFontSize();
    
//     for (let i = 0; i < denominator; i++) {
//       const angle = i * angleStep + (angleStep / 2);
//       const radians = (angle - 90) * Math.PI / 180;
//       const x = center + labelRadius * Math.cos(radians);
//       const y = center + labelRadius * Math.sin(radians);
      
//       numbers.push(
//         <text
//           key={i}
//           x={x}
//           y={y}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={{ fontSize: `${fontSize}px` }}
//           transform={`rotate(${angle}, ${x}, ${y})`}
//         >
//           {i + 1}
//         </text>
//       );
//     }
//     return numbers;
//   };

//   const getFilledSegments = () => {
//     if (isFullCircle) return null;
//     const segments = [];
//     const angleStep = 360 / denominator;
    
//     for (let i = 0; i < numerator; i++) {
//       const startAngle = i * angleStep;
//       const endAngle = (i + 1) * angleStep;
      
//       const start = polarToCartesian(center, center, radius, endAngle);
//       const end = polarToCartesian(center, center, radius, startAngle);
//       const largeArcFlag = angleStep <= 180 ? 0 : 1;

//       const path = [
//         'M', center, center,
//         'L', start.x, start.y,
//         'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
//         'Z'
//       ].join(' ');
      
//       segments.push(
//         <path
//           key={i}
//           d={path}
//           fill="#3b82f6"
//           fillOpacity="0.3"
//         />
//       );
//     }
//     return segments;
//   };

//   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
//     return {
//       x: centerX + (radius * Math.cos(angleInRadians)),
//       y: centerY + (radius * Math.sin(angleInRadians))
//     };
//   };

//   return (
//     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
//       {isFullCircle && (
//         <div className="text-2xl font-bold text-center mb-2" >
//           {numerator} full circle{numerator > 1 ? 's' : ''}
//         </div>
//       )}
//       <svg width={size} height={size}>
//         <circle
//           cx={center}
//           cy={center}
//           r={radius}
//           fill={isFullCircle ? "#3b82f6" : "white"}
//           fillOpacity={isFullCircle ? 0.3 : 1}
//           stroke="black"
//           strokeWidth="1"
//         />
//         {getFilledSegments()}
//         {getDivisionLines()}
//         {getSegmentNumbers()}
//       </svg>
//     </div>
//   );
// };

// const FractionCircle = ({ numerator, denominator }) => {
//   // Calculate GCD for fraction normalization
//   const calculateGCD = (a, b) => {
//     return b === 0 ? a : calculateGCD(b, a % b);
//   };

//   // Normalize the fraction
//   const gcd = calculateGCD(numerator, denominator);
//   const normalizedNumerator = numerator / gcd;
//   const normalizedDenominator = denominator / gcd;

//   const getSize = () => {
//     if (normalizedDenominator <= 25) return 200;
//     if (normalizedDenominator <= 50) return 300;
//     if (normalizedDenominator <= 100) return 400;
//     return 500;
//   };

//   const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
//   const remainingNumerator = normalizedNumerator % normalizedDenominator;
//   const size = getSize();

//   return (
//     <div className="flex flex-col items-center gap-4">
//       <div className="text-xl">
//         {numerator}/{denominator} = {normalizedNumerator}/{normalizedDenominator}
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
//         {wholeCircles > 0 && (
//           <>
//             <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
//             <span style={{ fontSize: '64px', fontWeight: 'bold' }}>+</span>
//           </>
//         )}
//         {remainingNumerator > 0 && (
//           <CircleDisplay 
//             size={size} 
//             numerator={remainingNumerator} 
//             denominator={normalizedDenominator} 
//           />
//         )}
//         {remainingNumerator === 0 && !wholeCircles && (
//           <CircleDisplay 
//             size={size} 
//             numerator={0} 
//             denominator={normalizedDenominator} 
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FractionCircle;

import React from 'react';

const CircleDisplay = ({ size, isFullCircle = false, numerator, denominator }) => {
  const radius = size * 0.45;
  const center = size / 2;
  const labelRadius = radius * 0.7;

  const getFontSize = () => {
    if (denominator <= 25) return 12;
    if (denominator <= 50) return 10;
    if (denominator <= 100) return 8;
    return 6;
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const getDivisionLines = () => {
    if (isFullCircle) return null;
    const lines = [];
    const angleStep = 360 / denominator;
    
    for (let i = 0; i < denominator; i++) {
      const angle = i * angleStep;
      const radians = (angle - 90) * Math.PI / 180;
      const x2 = center + radius * Math.cos(radians);
      const y2 = center + radius * Math.sin(radians);
      
      lines.push(
        <line
          key={i}
          x1={center}
          y1={center}
          x2={x2}
          y2={y2}
          stroke="black"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      );
    }
    return lines;
  };

  const getSegmentNumbers = () => {
    if (isFullCircle) return null;
    const numbers = [];
    const angleStep = 360 / denominator;
    const fontSize = getFontSize();
    
    for (let i = 0; i < denominator; i++) {
      const angle = i * angleStep + (angleStep / 2);
      const radians = (angle - 90) * Math.PI / 180;
      const x = center + labelRadius * Math.cos(radians);
      const y = center + labelRadius * Math.sin(radians);
      
      numbers.push(
        <text
          key={i}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: `${fontSize}px` }}
          transform={`rotate(${angle}, ${x}, ${y})`}
        >
          {i + 1}
        </text>
      );
    }
    return numbers;
  };

  const getFilledSegments = () => {
    if (isFullCircle) return null;
    const segments = [];
    const angleStep = 360 / denominator;
    
    for (let i = 0; i < numerator; i++) {
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;
      
      const start = polarToCartesian(center, center, radius, endAngle);
      const end = polarToCartesian(center, center, radius, startAngle);
      const largeArcFlag = angleStep <= 180 ? 0 : 1;

      const path = [
        'M', center, center,
        'L', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        'Z'
      ].join(' ');
      
      segments.push(
        <path
          key={i}
          d={path}
          fill="#3b82f6"
          fillOpacity="0.3"
        />
      );
    }
    return segments;
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {isFullCircle && (
        <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px'}}>
          {numerator} full circle{numerator > 1 ? 's' : ''}
        </div>
      )}
      <svg width={size} height={size}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={isFullCircle ? "#3b82f6" : "white"}
          fillOpacity={isFullCircle ? 0.3 : 1}
          stroke="black"
          strokeWidth="1"
        />
        {getFilledSegments()}
        {getDivisionLines()}
        {getSegmentNumbers()}
      </svg>
    </div>
  );
};

const DataTable = ({ originalNum, originalDenom, normalizedNum, normalizedDenom }) => {
  const decimal = originalNum / originalDenom;
  const percentage = (decimal * 100).toFixed(2);
  
  const tableStyles = {
    width: '100%',
    maxWidth: '600px',
    marginTop: '2rem',
    borderCollapse: 'collapse',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const thStyles = {
    padding: '12px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'uppercase',
    backgroundColor: '#f9fafb',
    color: '#6b7280',
    borderBottom: '1px solid #e5e7eb'
  };

  const tdStyles = {
    padding: '16px 24px',
    fontSize: '14px',
    color: '#111827',
    borderBottom: '1px solid #e5e7eb'
  };

  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <th style={thStyles}>Input Fraction</th>
          <th style={thStyles}>Normalized</th>
          <th style={thStyles}>Decimal</th>
          <th style={thStyles}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={tdStyles}>{originalNum}/{originalDenom}</td>
          <td style={tdStyles}>{normalizedNum}/{normalizedDenom}</td>
          <td style={tdStyles}>{decimal.toFixed(3)}</td>
          <td style={tdStyles}>{percentage}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const FractionCircle = ({ numerator, denominator }) => {
  const calculateGCD = (a, b) => {
    return b === 0 ? Math.abs(a) : calculateGCD(b, a % b);
  };

  const gcd = calculateGCD(numerator, denominator);
  const normalizedNumerator = numerator / gcd;
  const normalizedDenominator = denominator / gcd;

  const getSize = () => {
    if (normalizedDenominator <= 25) return 200;
    if (normalizedDenominator <= 50) return 300;
    if (normalizedDenominator <= 100) return 400;
    return 500;
  };

  const wholeCircles = Math.floor(normalizedNumerator / normalizedDenominator);
  const remainingNumerator = normalizedNumerator % normalizedDenominator;
  const size = getSize();

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem'}}>
        {wholeCircles > 0 && (
          <>
            <CircleDisplay size={size} isFullCircle={true} numerator={wholeCircles} />
            <span style={{fontSize: '64px', fontWeight: 'bold'}}>+</span>
          </>
        )}
        {(remainingNumerator > 0 || (!wholeCircles && remainingNumerator === 0)) && (
          <CircleDisplay 
            size={size} 
            numerator={remainingNumerator} 
            denominator={normalizedDenominator} 
          />
        )}
      </div>
      <DataTable 
        originalNum={numerator}
        originalDenom={denominator}
        normalizedNum={normalizedNumerator}
        normalizedDenom={normalizedDenominator}
      />
    </div>
  );
};

export default FractionCircle;