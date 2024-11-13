// import React from 'react';

// const RectangleDisplay = ({ width, height, isFullRect = false, numerator, denominator }) => {
//   const getFontSize = () => {
//     if (denominator <= 25) return 12;
//     if (denominator <= 50) return 10;
//     if (denominator <= 100) return 8;
//     return 6;
//   };

//   const getDivisionLines = () => {
//     if (isFullRect) return null;
//     const lines = [];
//     const divisionWidth = width / denominator;
    
//     for (let i = 1; i < denominator; i++) {
//       const x = i * divisionWidth;
//       lines.push(
//         <line
//           key={i}
//           x1={x}
//           y1={0}
//           x2={x}
//           y2={height}
//           stroke="black"
//           strokeWidth="0.5"
//           strokeOpacity="0.5"
//         />
//       );
//     }
//     return lines;
//   };

//   const getSegmentNumbers = () => {
//     if (isFullRect) return null;
//     const numbers = [];
//     const divisionWidth = width / denominator;
//     const fontSize = getFontSize();
    
//     for (let i = 0; i < denominator; i++) {
//       const x = (i * divisionWidth) + (divisionWidth / 2);
//       numbers.push(
//         <text
//           key={i}
//           x={x}
//           y={height / 2}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={{ fontSize: `${fontSize}px` }}
//         >
//           {i + 1}
//         </text>
//       );
//     }
//     return numbers;
//   };

//   const getFilledSegments = () => {
//     if (isFullRect) return null;
//     const segments = [];
//     const divisionWidth = width / denominator;
    
//     for (let i = 0; i < numerator; i++) {
//       segments.push(
//         <rect
//           key={i}
//           x={i * divisionWidth}
//           y={0}
//           width={divisionWidth}
//           height={height}
//           fill="#3b82f6"
//           fillOpacity="0.3"
//         />
//       );
//     }
//     return segments;
//   };

//   return (
//     <div className="flex flex-col justify-center items-center">
//       {isFullRect && (
//         <div className="text-2xl font-bold text-center mb-2">
//           {numerator} full rectangle{numerator > 1 ? 's' : ''}
//         </div>
//       )}
//       <svg width={width} height={height}>
//         <rect
//           x={0}
//           y={0}
//           width={width}
//           height={height}
//           fill={isFullRect ? "#3b82f6" : "white"}
//           fillOpacity={isFullRect ? 0.3 : 1}
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

// const FractionRectangle = ({ numerator, denominator }) => {
//   const getWidth = () => {
//     if (denominator <= 25) return 400;
//     if (denominator <= 50) return 600;
//     if (denominator <= 100) return 800;
//     return 1000;
//   };

//   const width = getWidth();
//   const height = 100;
//   const wholeRects = Math.floor(numerator / denominator);
//   const remainingNumerator = numerator % denominator;

//   return (
//     <div className="flex flex-row items-center gap-8">
//       {wholeRects > 0 && (
//         <>
//           <RectangleDisplay 
//             width={width} 
//             height={height} 
//             isFullRect={true} 
//             numerator={wholeRects} 
//           />
//           <span className="text-6xl font-bold">+</span>
//         </>
//       )}
//       <RectangleDisplay 
//         width={width} 
//         height={height} 
//         numerator={remainingNumerator} 
//         denominator={denominator} 
//       />
//     </div>
//   );
// };

// export default FractionRectangle;

import React from 'react';

const RectangleDisplay = ({ width, height, isFullRect = false, numerator, denominator }) => {
  const getFontSize = () => {
    if (denominator <= 25) return 12;
    if (denominator <= 50) return 10;
    if (denominator <= 100) return 8;
    return 6;
  };

  const getDivisionLines = () => {
    if (isFullRect) return null;
    const lines = [];
    const divisionWidth = width / denominator;
    
    for (let i = 1; i < denominator; i++) {
      const x = i * divisionWidth;
      lines.push(
        <line
          key={i}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke="black"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
      );
    }
    return lines;
  };

  const getSegmentNumbers = () => {
    if (isFullRect) return null;
    const numbers = [];
    const divisionWidth = width / denominator;
    const fontSize = getFontSize();
    
    for (let i = 0; i < denominator; i++) {
      const x = (i * divisionWidth) + (divisionWidth / 2);
      numbers.push(
        <text
          key={i}
          x={x}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: `${fontSize}px` }}
        >
          {i + 1}
        </text>
      );
    }
    return numbers;
  };

  const getFilledSegments = () => {
    if (isFullRect) return null;
    const segments = [];
    const divisionWidth = width / denominator;
    
    for (let i = 0; i < numerator; i++) {
      segments.push(
        <rect
          key={i}
          x={i * divisionWidth}
          y={0}
          width={divisionWidth}
          height={height}
          fill="#3b82f6"
          fillOpacity="0.3"
        />
      );
    }
    return segments;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isFullRect && (
        <div className="text-2xl font-bold text-center mb-2">
          {numerator} full rectangle{numerator > 1 ? 's' : ''}
        </div>
      )}
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={isFullRect ? "#3b82f6" : "white"}
          fillOpacity={isFullRect ? 0.3 : 1}
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

const FractionRectangle = ({ numerator, denominator }) => {
  // Calculate GCD for fraction normalization
  const calculateGCD = (a, b) => {
    return b === 0 ? a : calculateGCD(b, a % b);
  };

  // Normalize the fraction
  const gcd = calculateGCD(numerator, denominator);
  const normalizedNumerator = numerator / gcd;
  const normalizedDenominator = denominator / gcd;

  const getWidth = () => {
    if (normalizedDenominator <= 25) return 400;
    if (normalizedDenominator <= 50) return 600;
    if (normalizedDenominator <= 100) return 800;
    return 1000;
  };

  const width = getWidth();
  const height = 100;
  const wholeRects = Math.floor(normalizedNumerator / normalizedDenominator);
  const remainingNumerator = normalizedNumerator % normalizedDenominator;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl">
        {numerator}/{denominator} = {normalizedNumerator}/{normalizedDenominator}
      </div>
      <div className="flex flex-row items-center gap-8">
        {wholeRects > 0 && (
          <>
            <RectangleDisplay 
              width={width} 
              height={height} 
              isFullRect={true} 
              numerator={wholeRects} 
            />
            <span className="text-6xl font-bold">+</span>
          </>
        )}
        <RectangleDisplay 
          width={width} 
          height={height} 
          numerator={remainingNumerator} 
          denominator={normalizedDenominator} 
        />
      </div>
    </div>
  );
};

export default FractionRectangle;