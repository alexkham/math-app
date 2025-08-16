// // // // import React, { useState } from 'react';

// // // // const FunctionGraphVisualizer = () => {
// // // //   const [functionType, setFunctionType] = useState('polynomial');
// // // //   const [customFunction, setCustomFunction] = useState('x*x');
// // // //   const [xMin, setXMin] = useState(-10);
// // // //   const [xMax, setXMax] = useState(10);
// // // //   const [step, setStep] = useState(0.5);

// // // //   const predefinedFunctions = {
// // // //     polynomial: x => x * x,
// // // //     cubic: x => x * x * x - 3 * x,
// // // //     sine: x => Math.sin(x),
// // // //     cosine: x => Math.cos(x),
// // // //     exponential: x => Math.exp(x/3),
// // // //     logarithmic: x => x > 0 ? Math.log(x) : null,
// // // //     custom: null
// // // //   };

// // // //   const parseCustomFunction = (expr) => {
// // // //     try {
// // // //       let jsExpr = expr.replace(/\^/g, '**');
// // // //       jsExpr = jsExpr.replace(/sin/g, 'Math.sin');
// // // //       jsExpr = jsExpr.replace(/cos/g, 'Math.cos');
// // // //       jsExpr = jsExpr.replace(/log/g, 'Math.log');
// // // //       jsExpr = jsExpr.replace(/exp/g, 'Math.exp');
// // // //       jsExpr = jsExpr.replace(/sqrt/g, 'Math.sqrt');
      
// // // //       return new Function('x', `return ${jsExpr}`);
// // // //     } catch (e) {
// // // //       return x => x * x;
// // // //     }
// // // //   };

// // // //   const generatePoints = () => {
// // // //     const points = [];
// // // //     const currentFunc = functionType === 'custom' 
// // // //       ? parseCustomFunction(customFunction)
// // // //       : predefinedFunctions[functionType];

// // // //     for (let x = xMin; x <= xMax; x += step) {
// // // //       try {
// // // //         const y = currentFunc(x);
// // // //         if (y !== null && isFinite(y)) {
// // // //           points.push({ x: x, y: y });
// // // //         }
// // // //       } catch (e) {
// // // //         // Skip invalid points
// // // //       }
// // // //     }
// // // //     return points;
// // // //   };

// // // //   const points = generatePoints();
  
// // // //   // Calculate bounds for the graph
// // // //   const yValues = points.map(p => p.y);
// // // //   const yMin = Math.min(...yValues);
// // // //   const yMax = Math.max(...yValues);
// // // //   const yRange = yMax - yMin;
// // // //   const padding = yRange * 0.1;

// // // //   // SVG dimensions
// // // //   const width = 800;
// // // //   const height = 600;
// // // //   const margin = { top: 50, right: 50, bottom: 80, left: 80 };
// // // //   const graphWidth = width - margin.left - margin.right;
// // // //   const graphHeight = height - margin.top - margin.bottom;

// // // //   // Scale functions
// // // //   const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * graphWidth;
// // // //   const scaleY = (y) => graphHeight - ((y - (yMin - padding)) / (yMax - yMin + 2 * padding)) * graphHeight;

// // // //   // Generate path string for the curve
// // // //   const pathData = points.map((point, index) => {
// // // //     const x = scaleX(point.x);
// // // //     const y = scaleY(point.y);
// // // //     return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
// // // //   }).join(' ');

// // // //   // Generate grid lines
// // // //   const xGridLines = [];
// // // //   const yGridLines = [];
  
// // // //   const xStep = (xMax - xMin) / 10;
// // // //   const yStep = (yMax - yMin + 2 * padding) / 10;
  
// // // //   for (let i = 0; i <= 10; i++) {
// // // //     const x = xMin + i * xStep;
// // // //     const y = (yMin - padding) + i * yStep;
    
// // // //     xGridLines.push({
// // // //       x1: scaleX(x),
// // // //       y1: 0,
// // // //       x2: scaleX(x),
// // // //       y2: graphHeight,
// // // //       label: x.toFixed(1)
// // // //     });
    
// // // //     yGridLines.push({
// // // //       x1: 0,
// // // //       y1: scaleY(y),
// // // //       x2: graphWidth,
// // // //       y2: scaleY(y),
// // // //       label: y.toFixed(1)
// // // //     });
// // // //   }

// // // //   return (
// // // //     <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // // //       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
// // // //         Function Graph Visualizer
// // // //       </h1>
      
// // // //       {/* Controls */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700 mb-2">Function Type</label>
// // // //           <select 
// // // //             value={functionType} 
// // // //             onChange={(e) => setFunctionType(e.target.value)}
// // // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // // //           >
// // // //             <option value="polynomial">x²</option>
// // // //             <option value="cubic">x³ - 3x</option>
// // // //             <option value="sine">sin(x)</option>
// // // //             <option value="cosine">cos(x)</option>
// // // //             <option value="exponential">e^(x/3)</option>
// // // //             <option value="logarithmic">ln(x)</option>
// // // //             <option value="custom">Custom</option>
// // // //           </select>
// // // //         </div>

// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700 mb-2">X Range</label>
// // // //           <div className="flex gap-2">
// // // //             <input
// // // //               type="number"
// // // //               value={xMin}
// // // //               onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
// // // //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // // //               placeholder="Min"
// // // //             />
// // // //             <input
// // // //               type="number"
// // // //               value={xMax}
// // // //               onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
// // // //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // // //               placeholder="Max"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700 mb-2">Step Size</label>
// // // //           <input
// // // //             type="number"
// // // //             value={step}
// // // //             onChange={(e) => setStep(parseFloat(e.target.value) || 0.1)}
// // // //             min="0.01"
// // // //             max="2"
// // // //             step="0.1"
// // // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Custom Function Input */}
// // // //       {functionType === 'custom' && (
// // // //         <div className="mb-6">
// // // //           <label className="block text-sm font-medium text-gray-700 mb-2">Custom Function</label>
// // // //           <input
// // // //             type="text"
// // // //             value={customFunction}
// // // //             onChange={(e) => setCustomFunction(e.target.value)}
// // // //             placeholder="e.g., x*x + 2*x + 1"
// // // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // // //           />
// // // //         </div>
// // // //       )}

// // // //       {/* Graph */}
// // // //       <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
// // // //         <svg width={width} height={height} className="border">
// // // //           <g transform={`translate(${margin.left}, ${margin.top})`}>
// // // //             {/* Grid lines */}
// // // //             {xGridLines.map((line, i) => (
// // // //               <g key={`x-grid-${i}`}>
// // // //                 <line
// // // //                   x1={line.x1}
// // // //                   y1={line.y1}
// // // //                   x2={line.x2}
// // // //                   y2={line.y2}
// // // //                   stroke="#e5e7eb"
// // // //                   strokeWidth="1"
// // // //                 />
// // // //                 <text
// // // //                   x={line.x1}
// // // //                   y={graphHeight + 20}
// // // //                   textAnchor="middle"
// // // //                   fontSize="12"
// // // //                   fill="#6b7280"
// // // //                 >
// // // //                   {line.label}
// // // //                 </text>
// // // //               </g>
// // // //             ))}
            
// // // //             {yGridLines.map((line, i) => (
// // // //               <g key={`y-grid-${i}`}>
// // // //                 <line
// // // //                   x1={line.x1}
// // // //                   y1={line.y1}
// // // //                   x2={line.x2}
// // // //                   y2={line.y2}
// // // //                   stroke="#e5e7eb"
// // // //                   strokeWidth="1"
// // // //                 />
// // // //                 <text
// // // //                   x={-15}
// // // //                   y={line.y1 + 4}
// // // //                   textAnchor="end"
// // // //                   fontSize="12"
// // // //                   fill="#6b7280"
// // // //                 >
// // // //                   {line.label}
// // // //                 </text>
// // // //               </g>
// // // //             ))}

// // // //             {/* Axes */}
// // // //             <line
// // // //               x1={scaleX(0)}
// // // //               y1={0}
// // // //               x2={scaleX(0)}
// // // //               y2={graphHeight}
// // // //               stroke="#374151"
// // // //               strokeWidth="2"
// // // //             />
// // // //             <line
// // // //               x1={0}
// // // //               y1={scaleY(0)}
// // // //               x2={graphWidth}
// // // //               y2={scaleY(0)}
// // // //               stroke="#374151"
// // // //               strokeWidth="2"
// // // //             />

// // // //             {/* Function curve */}
// // // //             {points.length > 0 && (
// // // //               <path
// // // //                 d={pathData}
// // // //                 fill="none"
// // // //                 stroke="#3b82f6"
// // // //                 strokeWidth="3"
// // // //               />
// // // //             )}

// // // //             {/* Axis labels */}
// // // //             <text
// // // //               x={graphWidth / 2}
// // // //               y={graphHeight + 50}
// // // //               textAnchor="middle"
// // // //               fontSize="16"
// // // //               fill="#374151"
// // // //               fontWeight="bold"
// // // //             >
// // // //               x
// // // //             </text>
// // // //             <text
// // // //               x={-40}
// // // //               y={graphHeight / 2}
// // // //               textAnchor="middle"
// // // //               fontSize="16"
// // // //               fill="#374151"
// // // //               fontWeight="bold"
// // // //               transform={`rotate(-90, -40, ${graphHeight / 2})`}
// // // //             >
// // // //               f(x)
// // // //             </text>
// // // //           </g>
// // // //         </svg>
// // // //       </div>

// // // //       {/* Info */}
// // // //       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// // // //         <p className="text-gray-700">
// // // //           <strong>Function:</strong> {functionType === 'custom' ? customFunction : functionType} | 
// // // //           <strong> Domain:</strong> [{xMin}, {xMax}] | 
// // // //           <strong> Points:</strong> {points.length}
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FunctionGraphVisualizer;

// // // import React, { useState } from 'react';

// // // const FunctionGraphVisualizer = () => {
// // //   const [functionType, setFunctionType] = useState('polynomial');
// // //   const [customFunction, setCustomFunction] = useState('x*x');
// // //   const [xMin, setXMin] = useState(-10);
// // //   const [xMax, setXMax] = useState(10);
// // //   const [step, setStep] = useState(0.5);

// // //   const predefinedFunctions = {
// // //     polynomial: x => x * x,
// // //     cubic: x => x * x * x - 3 * x,
// // //     sine: x => Math.sin(x),
// // //     cosine: x => Math.cos(x),
// // //     exponential: x => Math.exp(x/3),
// // //     logarithmic: x => x > 0.001 ? Math.log(x) : null,
// // //     custom: null
// // //   };

// // //   const parseCustomFunction = (expr) => {
// // //     try {
// // //       let jsExpr = expr.replace(/\^/g, '**');
// // //       jsExpr = jsExpr.replace(/sin/g, 'Math.sin');
// // //       jsExpr = jsExpr.replace(/cos/g, 'Math.cos');
// // //       jsExpr = jsExpr.replace(/log/g, 'Math.log');
// // //       jsExpr = jsExpr.replace(/exp/g, 'Math.exp');
// // //       jsExpr = jsExpr.replace(/sqrt/g, 'Math.sqrt');
      
// // //       return new Function('x', `return ${jsExpr}`);
// // //     } catch (e) {
// // //       return x => x * x;
// // //     }
// // //   };

// // //   const generatePoints = () => {
// // //     const points = [];
// // //     const currentFunc = functionType === 'custom' 
// // //       ? parseCustomFunction(customFunction)
// // //       : predefinedFunctions[functionType];

// // //     for (let x = xMin; x <= xMax; x += step) {
// // //       try {
// // //         const y = currentFunc(x);
// // //         if (y !== null && isFinite(y) && !isNaN(y)) {
// // //           points.push({ x: x, y: y });
// // //         }
// // //       } catch (e) {
// // //         // Skip invalid points
// // //       }
// // //     }
// // //     return points;
// // //   };

// // //   const points = generatePoints();
  
// // //   // Calculate bounds for the graph
// // //   const yValues = points.map(p => p.y);
// // //   if (yValues.length === 0) return <div>No valid points to display</div>;
  
// // //   const yMin = Math.min(...yValues);
// // //   const yMax = Math.max(...yValues);
// // //   const yRange = yMax - yMin || 1;
// // //   const padding = yRange * 0.1;

// // //   // SVG dimensions
// // //   const width = 800;
// // //   const height = 600;
// // //   const margin = { top: 50, right: 50, bottom: 80, left: 80 };
// // //   const graphWidth = width - margin.left - margin.right;
// // //   const graphHeight = height - margin.top - margin.bottom;

// // //   // Scale functions
// // //   const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * graphWidth;
// // //   const scaleY = (y) => graphHeight - ((y - (yMin - padding)) / (yMax - yMin + 2 * padding)) * graphHeight;

// // //   // Generate path string for the curve
// // //   const pathData = points.map((point, index) => {
// // //     const x = scaleX(point.x);
// // //     const y = scaleY(point.y);
// // //     return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
// // //   }).join(' ');

// // //   // Generate grid lines
// // //   const xGridLines = [];
// // //   const yGridLines = [];
  
// // //   const xStep = (xMax - xMin) / 10;
// // //   const yStep = (yMax - yMin + 2 * padding) / 10;
  
// // //   for (let i = 0; i <= 10; i++) {
// // //     const x = xMin + i * xStep;
// // //     const y = (yMin - padding) + i * yStep;
    
// // //     xGridLines.push({
// // //       x1: scaleX(x),
// // //       y1: 0,
// // //       x2: scaleX(x),
// // //       y2: graphHeight,
// // //       label: x.toFixed(1)
// // //     });
    
// // //     yGridLines.push({
// // //       x1: 0,
// // //       y1: scaleY(y),
// // //       x2: graphWidth,
// // //       y2: scaleY(y),
// // //       label: y.toFixed(1)
// // //     });
// // //   }

// // //   return (
// // //     <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// // //       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
// // //         Function Graph Visualizer
// // //       </h1>
      
// // //       {/* Controls */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">Function Type</label>
// // //           <select 
// // //             value={functionType} 
// // //             onChange={(e) => setFunctionType(e.target.value)}
// // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // //           >
// // //             <option value="polynomial">x²</option>
// // //             <option value="cubic">x³ - 3x</option>
// // //             <option value="sine">sin(x)</option>
// // //             <option value="cosine">cos(x)</option>
// // //             <option value="exponential">e^(x/3)</option>
// // //             <option value="logarithmic">ln(x)</option>
// // //             <option value="custom">Custom</option>
// // //           </select>
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">X Range</label>
// // //           <div className="flex gap-2">
// // //             <input
// // //               type="number"
// // //               value={xMin}
// // //               onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
// // //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // //               placeholder="Min"
// // //             />
// // //             <input
// // //               type="number"
// // //               value={xMax}
// // //               onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
// // //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // //               placeholder="Max"
// // //             />
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">Step Size</label>
// // //           <input
// // //             type="number"
// // //             value={step}
// // //             onChange={(e) => setStep(parseFloat(e.target.value) || 0.1)}
// // //             min="0.01"
// // //             max="2"
// // //             step="0.1"
// // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Custom Function Input */}
// // //       {functionType === 'custom' && (
// // //         <div className="mb-6">
// // //           <label className="block text-sm font-medium text-gray-700 mb-2">Custom Function</label>
// // //           <input
// // //             type="text"
// // //             value={customFunction}
// // //             onChange={(e) => setCustomFunction(e.target.value)}
// // //             placeholder="e.g., x*x + 2*x + 1"
// // //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// // //           />
// // //         </div>
// // //       )}

// // //       {/* Graph */}
// // //       <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
// // //         <svg width={width} height={height} className="border">
// // //           <g transform={`translate(${margin.left}, ${margin.top})`}>
// // //             {/* X-axis labels */}
// // //             {xGridLines.map((line, i) => (
// // //               <g key={`x-grid-${i}`}>
// // //                 <line
// // //                   x1={line.x1}
// // //                   y1={line.y1}
// // //                   x2={line.x2}
// // //                   y2={line.y2}
// // //                   stroke="#e5e7eb"
// // //                   strokeWidth="1"
// // //                 />
// // //                 <text
// // //                   x={line.x1}
// // //                   y={scaleY(0) + 20}
// // //                   textAnchor="middle"
// // //                   fontSize="12"
// // //                   fill="#374151"
// // //                   fontWeight="bold"
// // //                 >
// // //                   {line.label}
// // //                 </text>
// // //               </g>
// // //             ))}
            
// // //             {/* Y-axis labels */}
// // //             {yGridLines.map((line, i) => (
// // //               <g key={`y-grid-${i}`}>
// // //                 <line
// // //                   x1={line.x1}
// // //                   y1={line.y1}
// // //                   x2={line.x2}
// // //                   y2={line.y2}
// // //                   stroke="#e5e7eb"
// // //                   strokeWidth="1"
// // //                 />
// // //                 <text
// // //                   x={scaleX(0) - 15}
// // //                   y={line.y1 + 4}
// // //                   textAnchor="end"
// // //                   fontSize="12"
// // //                   fill="#374151"
// // //                   fontWeight="bold"
// // //                 >
// // //                   {line.label}
// // //                 </text>
// // //               </g>
// // //             ))}

// // //             {/* Axes */}
// // //             <line
// // //               x1={scaleX(0)}
// // //               y1={0}
// // //               x2={scaleX(0)}
// // //               y2={graphHeight}
// // //               stroke="#374151"
// // //               strokeWidth="2"
// // //             />
// // //             <line
// // //               x1={0}
// // //               y1={scaleY(0)}
// // //               x2={graphWidth}
// // //               y2={scaleY(0)}
// // //               stroke="#374151"
// // //               strokeWidth="2"
// // //             />

// // //             {/* Function curve */}
// // //             {points.length > 0 && (
// // //               <path
// // //                 d={pathData}
// // //                 fill="none"
// // //                 stroke="#3b82f6"
// // //                 strokeWidth="3"
// // //               />
// // //             )}

// // //             {/* Axis labels */}
// // //             <text
// // //               x={graphWidth / 2}
// // //               y={graphHeight + 50}
// // //               textAnchor="middle"
// // //               fontSize="16"
// // //               fill="#374151"
// // //               fontWeight="bold"
// // //             >
// // //               x
// // //             </text>
// // //             <text
// // //               x={-40}
// // //               y={graphHeight / 2}
// // //               textAnchor="middle"
// // //               fontSize="16"
// // //               fill="#374151"
// // //               fontWeight="bold"
// // //               transform={`rotate(-90, -40, ${graphHeight / 2})`}
// // //             >
// // //               f(x)
// // //             </text>
// // //           </g>
// // //         </svg>
// // //       </div>

// // //       {/* Info */}
// // //       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// // //         <p className="text-gray-700">
// // //           <strong>Function:</strong> {functionType === 'custom' ? customFunction : functionType} | 
// // //           <strong> Domain:</strong> [{xMin}, {xMax}] | 
// // //           <strong> Points:</strong> {points.length}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FunctionGraphVisualizer;


// // import React, { useState } from 'react';

// // const FunctionGraphVisualizer = () => {
// //   const [functionType, setFunctionType] = useState('polynomial');
// //   const [customFunction, setCustomFunction] = useState('x*x');
// //   const [xMin, setXMin] = useState(-10);
// //   const [xMax, setXMax] = useState(10);
// //   const [step, setStep] = useState(0.2);

// //   const predefinedFunctions = {
// //     polynomial: x => x * x,
// //     cubic: x => x * x * x - 3 * x,
// //     sine: x => Math.sin(x),
// //     cosine: x => Math.cos(x),
// //     exponential: x => Math.exp(x/3),
// //     logarithmic: x => x > 0.001 ? Math.log(x) : null,
// //     custom: null
// //   };

// //   const parseCustomFunction = (expr) => {
// //     try {
// //       let jsExpr = expr.replace(/\^/g, '**');
// //       jsExpr = jsExpr.replace(/sin/g, 'Math.sin');
// //       jsExpr = jsExpr.replace(/cos/g, 'Math.cos');
// //       jsExpr = jsExpr.replace(/log/g, 'Math.log');
// //       jsExpr = jsExpr.replace(/exp/g, 'Math.exp');
// //       jsExpr = jsExpr.replace(/sqrt/g, 'Math.sqrt');
      
// //       return new Function('x', `return ${jsExpr}`);
// //     } catch (e) {
// //       return x => x * x;
// //     }
// //   };

// //   const generatePoints = () => {
// //     const points = [];
// //     const currentFunc = functionType === 'custom' 
// //       ? parseCustomFunction(customFunction)
// //       : predefinedFunctions[functionType];

// //     for (let x = xMin; x <= xMax; x += step) {
// //       try {
// //         const y = currentFunc(x);
// //         if (y !== null && isFinite(y) && !isNaN(y)) {
// //           points.push({ x: x, y: y });
// //         }
// //       } catch (e) {
// //         // Skip invalid points
// //       }
// //     }
// //     return points;
// //   };

// //   const points = generatePoints();
  
// //   // Calculate bounds for the graph
// //   const yValues = points.map(p => p.y);
// //   if (yValues.length === 0) return <div>No valid points to display</div>;
  
// //   let yMin = Math.min(...yValues);
// //   let yMax = Math.max(...yValues);
  
// //   // For functions like x^2, make sure 0 is included in the y range
// //   if (functionType === 'polynomial' || functionType === 'cubic') {
// //     yMin = Math.min(yMin, 0);
// //   }
  
// //   const yRange = yMax - yMin || 1;
// //   const padding = yRange * 0.05; // Reduce padding

// //   // SVG dimensions
// //   const width = 800;
// //   const height = 600;
// //   const margin = { top: 50, right: 50, bottom: 80, left: 80 };
// //   const graphWidth = width - margin.left - margin.right;
// //   const graphHeight = height - margin.top - margin.bottom;

// //   // Scale functions
// //   const scaleX = (x) => ((x - xMin) / (xMax - xMin)) * graphWidth;
// //   const scaleY = (y) => graphHeight - ((y - (yMin - padding)) / (yMax - yMin + 2 * padding)) * graphHeight;

// //   // Generate path string for the curve
// //   const pathData = points.map((point, index) => {
// //     const x = scaleX(point.x);
// //     const y = scaleY(point.y);
// //     return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
// //   }).join(' ');

// //   // Generate grid lines
// //   const xGridLines = [];
// //   const yGridLines = [];
  
// //   // Better grid spacing
// //   const numGridLines = 10;
// //   const xStep = (xMax - xMin) / numGridLines;
// //   const yStep = (yMax - yMin + 2 * padding) / numGridLines;
  
// //   for (let i = 0; i <= numGridLines; i++) {
// //     const x = xMin + i * xStep;
// //     const y = (yMin - padding) + i * yStep;
    
// //     xGridLines.push({
// //       x1: scaleX(x),
// //       y1: 0,
// //       x2: scaleX(x),
// //       y2: graphHeight,
// //       label: x.toFixed(1)
// //     });
    
// //     yGridLines.push({
// //       x1: 0,
// //       y1: scaleY(y),
// //       x2: graphWidth,
// //       y2: scaleY(y),
// //       label: y.toFixed(1)
// //     });
// //   }

// //   return (
// //     <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
// //       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
// //         Function Graph Visualizer
// //       </h1>
      
// //       {/* Controls */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">Function Type</label>
// //           <select 
// //             value={functionType} 
// //             onChange={(e) => setFunctionType(e.target.value)}
// //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// //           >
// //             <option value="polynomial">x²</option>
// //             <option value="cubic">x³ - 3x</option>
// //             <option value="sine">sin(x)</option>
// //             <option value="cosine">cos(x)</option>
// //             <option value="exponential">e^(x/3)</option>
// //             <option value="logarithmic">ln(x)</option>
// //             <option value="custom">Custom</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">X Range</label>
// //           <div className="flex gap-2">
// //             <input
// //               type="number"
// //               value={xMin}
// //               onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
// //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// //               placeholder="Min"
// //             />
// //             <input
// //               type="number"
// //               value={xMax}
// //               onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
// //               className="w-full p-3 border-2 border-gray-300 rounded-lg"
// //               placeholder="Max"
// //             />
// //           </div>
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">Step Size</label>
// //           <input
// //             type="number"
// //             value={step}
// //             onChange={(e) => setStep(parseFloat(e.target.value) || 0.1)}
// //             min="0.01"
// //             max="2"
// //             step="0.1"
// //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// //           />
// //         </div>
// //       </div>

// //       {/* Custom Function Input */}
// //       {functionType === 'custom' && (
// //         <div className="mb-6">
// //           <label className="block text-sm font-medium text-gray-700 mb-2">Custom Function</label>
// //           <input
// //             type="text"
// //             value={customFunction}
// //             onChange={(e) => setCustomFunction(e.target.value)}
// //             placeholder="e.g., x*x + 2*x + 1"
// //             className="w-full p-3 border-2 border-gray-300 rounded-lg"
// //           />
// //         </div>
// //       )}

// //       {/* Graph */}
// //       <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
// //         <svg width={width} height={height} className="border">
// //           <g transform={`translate(${margin.left}, ${margin.top})`}>
// //             {/* X-axis labels */}
// //             {xGridLines.map((line, i) => (
// //               <g key={`x-grid-${i}`}>
// //                 <line
// //                   x1={line.x1}
// //                   y1={line.y1}
// //                   x2={line.x2}
// //                   y2={line.y2}
// //                   stroke="#e5e7eb"
// //                   strokeWidth="1"
// //                 />
// //                 <text
// //                   x={line.x1}
// //                   y={scaleY(0) + 20}
// //                   textAnchor="middle"
// //                   fontSize="12"
// //                   fill="#374151"
// //                   fontWeight="bold"
// //                 >
// //                   {line.label}
// //                 </text>
// //               </g>
// //             ))}
            
// //             {/* Y-axis labels */}
// //             {yGridLines.map((line, i) => (
// //               <g key={`y-grid-${i}`}>
// //                 <line
// //                   x1={line.x1}
// //                   y1={line.y1}
// //                   x2={line.x2}
// //                   y2={line.y2}
// //                   stroke="#e5e7eb"
// //                   strokeWidth="1"
// //                 />
// //                 <text
// //                   x={scaleX(0) - 15}
// //                   y={line.y1 + 4}
// //                   textAnchor="end"
// //                   fontSize="12"
// //                   fill="#374151"
// //                   fontWeight="bold"
// //                 >
// //                   {line.label}
// //                 </text>
// //               </g>
// //             ))}

// //             {/* Axes */}
// //             <line
// //               x1={scaleX(0)}
// //               y1={0}
// //               x2={scaleX(0)}
// //               y2={graphHeight}
// //               stroke="#374151"
// //               strokeWidth="2"
// //             />
// //             <line
// //               x1={0}
// //               y1={scaleY(0)}
// //               x2={graphWidth}
// //               y2={scaleY(0)}
// //               stroke="#374151"
// //               strokeWidth="2"
// //             />

// //             {/* Function curve */}
// //             {points.length > 0 && (
// //               <path
// //                 d={pathData}
// //                 fill="none"
// //                 stroke="#3b82f6"
// //                 strokeWidth="3"
// //               />
// //             )}

// //             {/* Axis labels */}
// //             <text
// //               x={graphWidth / 2}
// //               y={graphHeight + 50}
// //               textAnchor="middle"
// //               fontSize="16"
// //               fill="#374151"
// //               fontWeight="bold"
// //             >
// //               x
// //             </text>
// //             <text
// //               x={-40}
// //               y={graphHeight / 2}
// //               textAnchor="middle"
// //               fontSize="16"
// //               fill="#374151"
// //               fontWeight="bold"
// //               transform={`rotate(-90, -40, ${graphHeight / 2})`}
// //             >
// //               f(x)
// //             </text>
// //           </g>
// //         </svg>
// //       </div>

// //       {/* Info */}
// //       <div className="mt-4 p-4 bg-gray-50 rounded-lg">
// //         <p className="text-gray-700">
// //           <strong>Function:</strong> {functionType === 'custom' ? customFunction : functionType} | 
// //           <strong> Domain:</strong> [{xMin}, {xMax}] | 
// //           <strong> Points:</strong> {points.length}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FunctionGraphVisualizer;


// 'use client'
// import React, { useEffect, useState, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { Chart, registerables } from 'chart.js';
// import annotationPlugin from 'chartjs-plugin-annotation';

// Chart.register(...registerables, annotationPlugin);

// const FunctionGraphVisualizer = () => {
//     const chartRef = useRef(null);
//     const [functionType, setFunctionType] = useState('polynomial');
//     const [customFunction, setCustomFunction] = useState('x*x');
//     const [xMin, setXMin] = useState(-10);
//     const [xMax, setXMax] = useState(10);
//     const [step, setStep] = useState(0.1);

//     const predefinedFunctions = {
//         polynomial: { 
//             func: x => x * x, 
//             label: 'f(x) = x²'
//         },
//         cubic: { 
//             func: x => x * x * x - 3 * x, 
//             label: 'f(x) = x³ - 3x'
//         },
//         sine: { 
//             func: x => Math.sin(x), 
//             label: 'f(x) = sin(x)'
//         },
//         cosine: { 
//             func: x => Math.cos(x), 
//             label: 'f(x) = cos(x)'
//         },
//         exponential: { 
//             func: x => Math.exp(x/3), 
//             label: 'f(x) = e^(x/3)'
//         },
//         logarithmic: { 
//             func: x => x > 0 ? Math.log(x) : NaN, 
//             label: 'f(x) = ln(x)'
//         },
//         custom: { 
//             func: null, 
//             label: 'Custom Function'
//         }
//     };

//     const parseCustomFunction = (expr) => {
//         try {
//             let jsExpr = expr.replace(/\^/g, '**');
//             jsExpr = jsExpr.replace(/sin/g, 'Math.sin');
//             jsExpr = jsExpr.replace(/cos/g, 'Math.cos');
//             jsExpr = jsExpr.replace(/log/g, 'Math.log');
//             jsExpr = jsExpr.replace(/exp/g, 'Math.exp');
//             jsExpr = jsExpr.replace(/sqrt/g, 'Math.sqrt');
            
//             return new Function('x', `return ${jsExpr}`);
//         } catch (e) {
//             return x => x * x;
//         }
//     };

//     // Generate data points
//     const generateDataPoints = () => {
//         const dataPoints = [];
        
//         for (let x = xMin; x <= xMax; x += step) {
//             dataPoints.push(parseFloat(x.toFixed(2)));
//         }
        
//         return dataPoints;
//     };

//     const dataPoints = generateDataPoints();
//     const currentFunc = functionType === 'custom' 
//         ? parseCustomFunction(customFunction)
//         : predefinedFunctions[functionType].func;

//     // Prepare chart data
//     const chartData = {
//         labels: dataPoints,
//         datasets: [{
//             label: functionType === 'custom' ? `f(x) = ${customFunction}` : predefinedFunctions[functionType].label,
//             data: dataPoints.map(x => {
//                 try {
//                     const y = currentFunc(x);
//                     return isFinite(y) && !isNaN(y) ? y : null;
//                 } catch (e) {
//                     return null;
//                 }
//             }),
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 2,
//             fill: false,
//             tension: 0.1,
//             pointRadius: 0,
//         }],
//     };

//     const options = {
//         scales: {
//             x: { 
//                 type: 'linear',
//                 title: { display: true, text: 'x' },
//             },
//             y: {
//                 type: 'linear',
//                 title: { display: true, text: 'f(x)' },
//             },
//         },
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top'
//             }
//         }
//     };

//     return (
//         <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//                 Function Graph Visualizer
//             </h1>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Function Type</label>
//                     <select 
//                         value={functionType} 
//                         onChange={(e) => setFunctionType(e.target.value)}
//                         className="w-full p-3 border-2 border-gray-300 rounded-lg"
//                     >
//                         <option value="polynomial">x²</option>
//                         <option value="cubic">x³ - 3x</option>
//                         <option value="sine">sin(x)</option>
//                         <option value="cosine">cos(x)</option>
//                         <option value="exponential">e^(x/3)</option>
//                         <option value="logarithmic">ln(x)</option>
//                         <option value="custom">Custom</option>
//                     </select>
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">X Range</label>
//                     <div className="flex gap-2">
//                         <input
//                             type="number"
//                             value={xMin}
//                             onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
//                             className="w-full p-3 border-2 border-gray-300 rounded-lg"
//                             placeholder="Min"
//                         />
//                         <input
//                             type="number"
//                             value={xMax}
//                             onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
//                             className="w-full p-3 border-2 border-gray-300 rounded-lg"
//                             placeholder="Max"
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Step Size</label>
//                     <input
//                         type="number"
//                         value={step}
//                         onChange={(e) => setStep(parseFloat(e.target.value) || 0.1)}
//                         min="0.01"
//                         max="1"
//                         step="0.01"
//                         className="w-full p-3 border-2 border-gray-300 rounded-lg"
//                     />
//                 </div>
//             </div>

//             {functionType === 'custom' && (
//                 <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Custom Function</label>
//                     <input
//                         type="text"
//                         value={customFunction}
//                         onChange={(e) => setCustomFunction(e.target.value)}
//                         placeholder="e.g., x*x + 2*x + 1"
//                         className="w-full p-3 border-2 border-gray-300 rounded-lg"
//                     />
//                 </div>
//             )}

//             <div style={{ width: '100%', height: '400px' }}>
//                 <Line ref={chartRef} data={chartData} options={options} />
//             </div>

//             <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                 <p className="text-gray-700">
//                     <strong>Function:</strong> {functionType === 'custom' ? customFunction : predefinedFunctions[functionType].label} | 
//                     <strong> Domain:</strong> [{xMin}, {xMax}] | 
//                     <strong> Points:</strong> {dataPoints.length}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default FunctionGraphVisualizer;


'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(...registerables, annotationPlugin);

const FunctionGraphVisualizer = () => {
    const chartRef = useRef(null);
    const [functionType, setFunctionType] = useState('polynomial');
    const [customFunction, setCustomFunction] = useState('x*x');
    const [xMin, setXMin] = useState(-10);
    const [xMax, setXMax] = useState(10);
    const [step, setStep] = useState(0.1);

    const predefinedFunctions = {
        polynomial: { 
            func: x => x * x, 
            label: 'f(x) = x²'
        },
        cubic: { 
            func: x => x * x * x - 3 * x, 
            label: 'f(x) = x³ - 3x'
        },
        sine: { 
            func: x => Math.sin(x), 
            label: 'f(x) = sin(x)'
        },
        cosine: { 
            func: x => Math.cos(x), 
            label: 'f(x) = cos(x)'
        },
        exponential: { 
            func: x => Math.exp(x/3), 
            label: 'f(x) = e^(x/3)'
        },
        logarithmic: { 
            func: x => x > 0 ? Math.log(x) : NaN, 
            label: 'f(x) = ln(x)'
        },
        custom: { 
            func: null, 
            label: 'Custom Function'
        }
    };

    const parseCustomFunction = (expr) => {
        try {
            let jsExpr = expr.replace(/\^/g, '**');
            jsExpr = jsExpr.replace(/sin/g, 'Math.sin');
            jsExpr = jsExpr.replace(/cos/g, 'Math.cos');
            jsExpr = jsExpr.replace(/log/g, 'Math.log');
            jsExpr = jsExpr.replace(/exp/g, 'Math.exp');
            jsExpr = jsExpr.replace(/sqrt/g, 'Math.sqrt');
            
            return new Function('x', `return ${jsExpr}`);
        } catch (e) {
            return x => x * x;
        }
    };

    // Generate data points
    const generateDataPoints = () => {
        const dataPoints = [];
        
        for (let x = xMin; x <= xMax; x += step) {
            dataPoints.push(parseFloat(x.toFixed(2)));
        }
        
        return dataPoints;
    };

    const dataPoints = generateDataPoints();
    const currentFunc = functionType === 'custom' 
        ? parseCustomFunction(customFunction)
        : predefinedFunctions[functionType].func;

    // Prepare chart data
    const chartData = {
        labels: dataPoints,
        datasets: [{
            label: functionType === 'custom' ? `f(x) = ${customFunction}` : predefinedFunctions[functionType].label,
            data: dataPoints.map(x => {
                try {
                    const y = currentFunc(x);
                    return isFinite(y) && !isNaN(y) ? y : null;
                } catch (e) {
                    return null;
                }
            }),
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
            pointRadius: 0,
        }],
    };

    const options = {
        scales: {
            x: { 
                type: 'linear',
                position: 'center',
                title: { display: true, text: 'x' },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    display: true
                }
            },
            y: {
                type: 'linear',
                position: 'center',
                title: { display: true, text: 'f(x)' },
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    display: true
                }
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Function Graph Visualizer
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Function Type</label>
                    <select 
                        value={functionType} 
                        onChange={(e) => setFunctionType(e.target.value)}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg"
                    >
                        <option value="polynomial">x²</option>
                        <option value="cubic">x³ - 3x</option>
                        <option value="sine">sin(x)</option>
                        <option value="cosine">cos(x)</option>
                        <option value="exponential">e^(x/3)</option>
                        <option value="logarithmic">ln(x)</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">X Range</label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            value={xMin}
                            onChange={(e) => setXMin(parseFloat(e.target.value) || -10)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                            placeholder="Min"
                        />
                        <input
                            type="number"
                            value={xMax}
                            onChange={(e) => setXMax(parseFloat(e.target.value) || 10)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg"
                            placeholder="Max"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Step Size</label>
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => setStep(parseFloat(e.target.value) || 0.1)}
                        min="0.01"
                        max="1"
                        step="0.01"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg"
                    />
                </div>
            </div>

            {functionType === 'custom' && (
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Custom Function</label>
                    <input
                        type="text"
                        value={customFunction}
                        onChange={(e) => setCustomFunction(e.target.value)}
                        placeholder="e.g., x*x + 2*x + 1"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg"
                    />
                </div>
            )}

            <div style={{ width: '100%', height: '400px' }}>
                <Line ref={chartRef} data={chartData} options={options} />
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                    <strong>Function:</strong> {functionType === 'custom' ? customFunction : predefinedFunctions[functionType].label} | 
                    <strong> Domain:</strong> [{xMin}, {xMax}] | 
                    <strong> Points:</strong> {dataPoints.length}
                </p>
            </div>
        </div>
    );
};

export default FunctionGraphVisualizer;