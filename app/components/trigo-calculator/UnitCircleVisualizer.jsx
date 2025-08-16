// // // // // // // // // import React, { useState, useCallback } from 'react';

// // // // // // // // // const UnitCircleTrigVisualizer = () => {
// // // // // // // // //   const [angle, setAngle] = useState(30);
// // // // // // // // //   const [useRadians, setUseRadians] = useState(false);
// // // // // // // // //   const radius = 100;
// // // // // // // // //   const labelOffset = 25;

// // // // // // // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // // // // // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // // // // // // //   const getCoordinates = (degrees, r = radius) => ({
// // // // // // // // //     x: Math.cos(toRadians(degrees)) * r,
// // // // // // // // //     y: Math.sin(toRadians(degrees)) * r
// // // // // // // // //   });

// // // // // // // // //   const mainAngle = getCoordinates(angle);
// // // // // // // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // // // // // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // // // // // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // // // // // // //   const getLabelPosition = (coords) => {
// // // // // // // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // // // // // // //     const scale = (radius + labelOffset) / distance;
// // // // // // // // //     return {
// // // // // // // // //       x: coords.x * scale,
// // // // // // // // //       y: coords.y * scale
// // // // // // // // //     };
// // // // // // // // //   };

// // // // // // // // //   const mainLabel = getLabelPosition(mainAngle);
// // // // // // // // //   const complementaryLabel = getLabelPosition(complementaryAngle);
// // // // // // // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle);
// // // // // // // // //   const oppositeLabel = getLabelPosition(oppositeAngle);

// // // // // // // // //   const formatAngle = (degrees) => {
// // // // // // // // //     if (useRadians) {
// // // // // // // // //       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
// // // // // // // // //     } else {
// // // // // // // // //       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const Arrow = ({ start, end, color }) => (
// // // // // // // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // // // // // // //   );

// // // // // // // // //   const generateGraphPoints = useCallback(() => {
// // // // // // // // //     const points = [];
// // // // // // // // //     for (let i = 0; i <= 360; i += 5) {
// // // // // // // // //       const radians = toRadians(i);
// // // // // // // // //       points.push(`${i},${50 - Math.sin(radians) * 50}`);
// // // // // // // // //     }
// // // // // // // // //     return points.join(' ');
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg">
// // // // // // // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // // // // // // //       <div className="mb-4 flex items-center justify-between">
// // // // // // // // //         <p className="text-lg font-semibold">Main Angle: {formatAngle(angle)}</p>
// // // // // // // // //         <label className="flex items-center">
// // // // // // // // //           <span className="mr-2">Radians</span>
// // // // // // // // //           <input type="checkbox" checked={useRadians} onChange={(e) => setUseRadians(e.target.checked)} />
// // // // // // // // //         </label>
// // // // // // // // //       </div>
// // // // // // // // //       <input
// // // // // // // // //         type="range"
// // // // // // // // //         min="0"
// // // // // // // // //         max="360"
// // // // // // // // //         value={angle}
// // // // // // // // //         onChange={(e) => setAngle(Number(e.target.value))}
// // // // // // // // //         className="w-full mb-6"
// // // // // // // // //       />
// // // // // // // // //       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
// // // // // // // // //         <svg width="300" height="300" viewBox="-150 -150 300 300">
// // // // // // // // //           <defs>
// // // // // // // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // // // // // // //               refX="0" refY="3.5" orient="auto">
// // // // // // // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // // // // // // //             </marker>
// // // // // // // // //           </defs>
          
// // // // // // // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // // // // // // //           <line x1="-120" y1="0" x2="120" y2="0" stroke="black" />
// // // // // // // // //           <line x1="0" y1="-120" x2="0" y2="120" stroke="black" />
          
// // // // // // // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // // // // // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // // // // // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // // // // // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // // // // // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">θ</text>
// // // // // // // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // // // // // // //             {useRadians ? "π/2-θ" : "90°-θ"}
// // // // // // // // //           </text>
// // // // // // // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // // // // // // //             {useRadians ? "π-θ" : "180°-θ"}
// // // // // // // // //           </text>
// // // // // // // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // // // // // // //             {useRadians ? "θ+π" : "θ+180°"}
// // // // // // // // //           </text>
// // // // // // // // //         </svg>
        
// // // // // // // // //         <svg width="300" height="100" viewBox="0 0 360 100">
// // // // // // // // //           <polyline
// // // // // // // // //             points={generateGraphPoints()}
// // // // // // // // //             fill="none"
// // // // // // // // //             stroke="blue"
// // // // // // // // //             strokeWidth="1"
// // // // // // // // //           />
// // // // // // // // //           <line x1="0" y1="50" x2="360" y2="50" stroke="black" strokeWidth="1" />
// // // // // // // // //           <text x="180" y="95" textAnchor="middle">Angle</text>
// // // // // // // // //           <text x="5" y="10" textAnchor="start">sin(θ)</text>
// // // // // // // // //         </svg>
// // // // // // // // //       </div>
// // // // // // // // //       <div className="mt-4">
// // // // // // // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // // // // // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // // // // // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default UnitCircleTrigVisualizer;

// // // // // // // // import React, { useState, useCallback } from 'react';

// // // // // // // // const UnitCircleTrigVisualizer = () => {
// // // // // // // //   const [angle, setAngle] = useState(30);
// // // // // // // //   const [useRadians, setUseRadians] = useState(false);
// // // // // // // //   const radius = 100;
// // // // // // // //   const labelOffset = 25;
// // // // // // // //   const graphWidth = 360;
// // // // // // // //   const graphHeight = 200;

// // // // // // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // // // // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // // // // // //   const getCoordinates = (degrees, r = radius) => ({
// // // // // // // //     x: Math.cos(toRadians(degrees)) * r,
// // // // // // // //     y: Math.sin(toRadians(degrees)) * r
// // // // // // // //   });

// // // // // // // //   const mainAngle = getCoordinates(angle);
// // // // // // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // // // // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // // // // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // // // // // //   const getLabelPosition = (coords) => {
// // // // // // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // // // // // //     const scale = (radius + labelOffset) / distance;
// // // // // // // //     return {
// // // // // // // //       x: coords.x * scale,
// // // // // // // //       y: coords.y * scale
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   const mainLabel = getLabelPosition(mainAngle);
// // // // // // // //   const complementaryLabel = getLabelPosition(complementaryAngle);
// // // // // // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle);
// // // // // // // //   const oppositeLabel = getLabelPosition(oppositeAngle);

// // // // // // // //   const formatAngle = (degrees) => {
// // // // // // // //     if (useRadians) {
// // // // // // // //       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
// // // // // // // //     } else {
// // // // // // // //       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const Arrow = ({ start, end, color }) => (
// // // // // // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // // // // // //   );

// // // // // // // //   const generateGraphPoints = useCallback((func) => {
// // // // // // // //     const points = [];
// // // // // // // //     for (let i = 0; i <= 360; i += 5) {
// // // // // // // //       const x = i;
// // // // // // // //       const y = func(toRadians(i)) * -90 + 100; // Scale and invert
// // // // // // // //       points.push(`${x},${y}`);
// // // // // // // //     }
// // // // // // // //     return points.join(' ');
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg">
// // // // // // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // // // // // //       <div className="mb-4 flex items-center justify-between">
// // // // // // // //         <p className="text-lg font-semibold">Main Angle: {formatAngle(angle)}</p>
// // // // // // // //         <label className="flex items-center">
// // // // // // // //           <span className="mr-2">Radians</span>
// // // // // // // //           <input type="checkbox" checked={useRadians} onChange={(e) => setUseRadians(e.target.checked)} />
// // // // // // // //         </label>
// // // // // // // //       </div>
// // // // // // // //       <input
// // // // // // // //         type="range"
// // // // // // // //         min="0"
// // // // // // // //         max="360"
// // // // // // // //         value={angle}
// // // // // // // //         onChange={(e) => setAngle(Number(e.target.value))}
// // // // // // // //         className="w-full mb-6"
// // // // // // // //       />
// // // // // // // //       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
// // // // // // // //         <svg width="300" height="300" viewBox="-150 -150 300 300">
// // // // // // // //           <defs>
// // // // // // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // // // // // //               refX="0" refY="3.5" orient="auto">
// // // // // // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // // // // // //             </marker>
// // // // // // // //           </defs>
          
// // // // // // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // // // // // //           <line x1="-120" y1="0" x2="120" y2="0" stroke="black" />
// // // // // // // //           <line x1="0" y1="-120" x2="0" y2="120" stroke="black" />
          
// // // // // // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // // // // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // // // // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // // // // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // // // // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">θ</text>
// // // // // // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // // // // // //             {useRadians ? "π/2-θ" : "90°-θ"}
// // // // // // // //           </text>
// // // // // // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // // // // // //             {useRadians ? "π-θ" : "180°-θ"}
// // // // // // // //           </text>
// // // // // // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // // // // // //             {useRadians ? "θ+π" : "θ+180°"}
// // // // // // // //           </text>
// // // // // // // //         </svg>
        
// // // // // // // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
// // // // // // // //           <polyline
// // // // // // // //             points={generateGraphPoints(Math.sin)}
// // // // // // // //             fill="none"
// // // // // // // //             stroke="blue"
// // // // // // // //             strokeWidth="2"
// // // // // // // //           />
// // // // // // // //           <polyline
// // // // // // // //             points={generateGraphPoints(Math.cos)}
// // // // // // // //             fill="none"
// // // // // // // //             stroke="red"
// // // // // // // //             strokeWidth="2"
// // // // // // // //           />
// // // // // // // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // // // // // // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // // // // // // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // // // // // // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // // // // // // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // // // // // // //           {/* Vertical line indicating current angle */}
// // // // // // // //           <line
// // // // // // // //             x1={angle}
// // // // // // // //             y1="0"
// // // // // // // //             x2={angle}
// // // // // // // //             y2={graphHeight}
// // // // // // // //             stroke="green"
// // // // // // // //             strokeWidth="2"
// // // // // // // //           />
          
// // // // // // // //           {/* Points on the curves for current angle */}
// // // // // // // //           <circle
// // // // // // // //             cx={angle}
// // // // // // // //             cy={Math.sin(toRadians(angle)) * -90 + 100}
// // // // // // // //             r="4"
// // // // // // // //             fill="blue"
// // // // // // // //           />
// // // // // // // //           <circle
// // // // // // // //             cx={angle}
// // // // // // // //             cy={Math.cos(toRadians(angle)) * -90 + 100}
// // // // // // // //             r="4"
// // // // // // // //             fill="red"
// // // // // // // //           />
// // // // // // // //         </svg>
// // // // // // // //       </div>
// // // // // // // //       <div className="mt-4">
// // // // // // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // // // // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // // // // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default UnitCircleTrigVisualizer;
// // // // // // // import React, { useState, useCallback } from 'react';

// // // // // // // const UnitCircleTrigVisualizer = () => {
// // // // // // //   const [angle, setAngle] = useState(30);
// // // // // // //   const [inputValue, setInputValue] = useState('30');
// // // // // // //   const [useRadians, setUseRadians] = useState(false);
// // // // // // //   const radius = 100;
// // // // // // //   const labelOffset = 25;
// // // // // // //   const graphWidth = 360;
// // // // // // //   const graphHeight = 200;

// // // // // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // // // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // // // // //   const getCoordinates = (degrees, r = radius) => ({
// // // // // // //     x: Math.cos(toRadians(degrees)) * r,
// // // // // // //     y: Math.sin(toRadians(degrees)) * r
// // // // // // //   });

// // // // // // //   const mainAngle = getCoordinates(angle);
// // // // // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // // // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // // // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // // // // //   const getLabelPosition = (coords) => {
// // // // // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // // // // //     const scale = (radius + labelOffset) / distance;
// // // // // // //     return {
// // // // // // //       x: coords.x * scale,
// // // // // // //       y: coords.y * scale
// // // // // // //     };
// // // // // // //   };

// // // // // // //   const mainLabel = getLabelPosition(mainAngle);
// // // // // // //   const complementaryLabel = getLabelPosition(complementaryAngle);
// // // // // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle);
// // // // // // //   const oppositeLabel = getLabelPosition(oppositeAngle);

// // // // // // //   const handleInputChange = (e) => {
// // // // // // //     setInputValue(e.target.value);
// // // // // // //     let value = parseFloat(e.target.value);
// // // // // // //     if (!isNaN(value)) {
// // // // // // //       if (useRadians) {
// // // // // // //         value = toDegrees(value);
// // // // // // //       }
// // // // // // //       setAngle(((value % 360) + 360) % 360);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSliderChange = (e) => {
// // // // // // //     const value = Number(e.target.value);
// // // // // // //     setAngle(value);
// // // // // // //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// // // // // // //   };

// // // // // // //   const toggleRadians = (e) => {
// // // // // // //     const newUseRadians = e.target.checked;
// // // // // // //     setUseRadians(newUseRadians);
// // // // // // //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// // // // // // //   };

// // // // // // //   const Arrow = ({ start, end, color }) => (
// // // // // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // // // // //   );

// // // // // // //   const generateGraphPoints = useCallback((func) => {
// // // // // // //     const points = [];
// // // // // // //     for (let i = 0; i <= 360; i += 5) {
// // // // // // //       const x = i;
// // // // // // //       const y = func(toRadians(i)) * -90 + 100;
// // // // // // //       points.push(`${x},${y}`);
// // // // // // //     }
// // // // // // //     return points.join(' ');
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg">
// // // // // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // // // // //       <div className="mb-4 flex items-center justify-between">
// // // // // // //         <div className="flex items-center">
// // // // // // //           <p className="text-lg font-semibold mr-4">Angle: </p>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             value={inputValue}
// // // // // // //             onChange={handleInputChange}
// // // // // // //             className="border rounded px-2 py-1 w-20 mr-2"
// // // // // // //           />
// // // // // // //           <span>{useRadians ? "rad" : "°"}</span>
// // // // // // //         </div>
// // // // // // //         <label className="flex items-center">
// // // // // // //           <span className="mr-2">Radians</span>
// // // // // // //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// // // // // // //         </label>
// // // // // // //       </div>
// // // // // // //       <input
// // // // // // //         type="range"
// // // // // // //         min="0"
// // // // // // //         max="360"
// // // // // // //         value={angle}
// // // // // // //         onChange={handleSliderChange}
// // // // // // //         className="w-full mb-6"
// // // // // // //       />
// // // // // // //       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
// // // // // // //         <svg width="300" height="300" viewBox="-150 -150 300 300">
// // // // // // //           <defs>
// // // // // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // // // // //               refX="0" refY="3.5" orient="auto">
// // // // // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // // // // //             </marker>
// // // // // // //           </defs>
          
// // // // // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // // // // //           <line x1="-120" y1="0" x2="120" y2="0" stroke="black" />
// // // // // // //           <line x1="0" y1="-120" x2="0" y2="120" stroke="black" />
          
// // // // // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // // // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // // // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // // // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // // // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">θ</text>
// // // // // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // // // // //             {useRadians ? "π/2-θ" : "90°-θ"}
// // // // // // //           </text>
// // // // // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // // // // //             {useRadians ? "π-θ" : "180°-θ"}
// // // // // // //           </text>
// // // // // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // // // // //             {useRadians ? "θ+π" : "θ+180°"}
// // // // // // //           </text>
// // // // // // //         </svg>
        
// // // // // // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
// // // // // // //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// // // // // // //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// // // // // // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // // // // // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // // // // // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // // // // // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // // // // // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // // // // // //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// // // // // // //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// // // // // // //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// // // // // // //         </svg>
// // // // // // //       </div>
// // // // // // //       <div className="mt-4">
// // // // // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // // // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // // // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default UnitCircleTrigVisualizer;
// // // // // // import React, { useState, useCallback } from 'react';

// // // // // // const UnitCircleTrigVisualizer = () => {
// // // // // //   const [angle, setAngle] = useState(30);
// // // // // //   const [inputValue, setInputValue] = useState('30');
// // // // // //   const [useRadians, setUseRadians] = useState(false);
// // // // // //   const radius = 100;
// // // // // //   const labelOffset = 25;
// // // // // //   const graphWidth = 400;
// // // // // //   const graphHeight = 200;

// // // // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // // // //   const getCoordinates = (degrees, r = radius) => ({
// // // // // //     x: Math.cos(toRadians(degrees)) * r,
// // // // // //     y: Math.sin(toRadians(degrees)) * r
// // // // // //   });

// // // // // //   const mainAngle = getCoordinates(angle);
// // // // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // // // //   const getLabelPosition = (coords, offset) => {
// // // // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // // // //     const scale = (radius + labelOffset + offset) / distance;
// // // // // //     return {
// // // // // //       x: coords.x * scale,
// // // // // //       y: coords.y * scale
// // // // // //     };
// // // // // //   };

// // // // // //   const mainLabel = getLabelPosition(mainAngle, 0);
// // // // // //   const complementaryLabel = getLabelPosition(complementaryAngle, 15);
// // // // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle, 30);
// // // // // //   const oppositeLabel = getLabelPosition(oppositeAngle, 45);

// // // // // //   const handleInputChange = (e) => {
// // // // // //     setInputValue(e.target.value);
// // // // // //     let value = parseFloat(e.target.value);
// // // // // //     if (!isNaN(value)) {
// // // // // //       if (useRadians) {
// // // // // //         value = toDegrees(value);
// // // // // //       }
// // // // // //       setAngle(((value % 360) + 360) % 360);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSliderChange = (e) => {
// // // // // //     const value = Number(e.target.value);
// // // // // //     setAngle(value);
// // // // // //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// // // // // //   };

// // // // // //   const toggleRadians = (e) => {
// // // // // //     const newUseRadians = e.target.checked;
// // // // // //     setUseRadians(newUseRadians);
// // // // // //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// // // // // //   };

// // // // // //   const resetVisualization = () => {
// // // // // //     setAngle(0);
// // // // // //     setInputValue(useRadians ? '0.00' : '0');
// // // // // //   };

// // // // // //   const Arrow = ({ start, end, color }) => (
// // // // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // // // //   );

// // // // // //   const generateGraphPoints = useCallback((func) => {
// // // // // //     const points = [];
// // // // // //     for (let i = 0; i <= 360; i += 5) {
// // // // // //       const x = i;
// // // // // //       const y = func(toRadians(i)) * -90 + 100;
// // // // // //       points.push(`${x},${y}`);
// // // // // //     }
// // // // // //     return points.join(' ');
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg">
// // // // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // // // //       <div className="mb-4 flex items-center justify-between">
// // // // // //         <div className="flex items-center">
// // // // // //           <p className="text-lg font-semibold mr-4">Angle: </p>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             value={inputValue}
// // // // // //             onChange={handleInputChange}
// // // // // //             className="border rounded px-2 py-1 w-20 mr-2"
// // // // // //           />
// // // // // //           <span>{useRadians ? "rad" : "°"}</span>
// // // // // //         </div>
// // // // // //         <label className="flex items-center">
// // // // // //           <span className="mr-2">Radians</span>
// // // // // //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// // // // // //         </label>
// // // // // //         <button
// // // // // //           onClick={resetVisualization}
// // // // // //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // // // // //         >
// // // // // //           Reset
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       <input
// // // // // //         type="range"
// // // // // //         min="0"
// // // // // //         max="360"
// // // // // //         value={angle}
// // // // // //         onChange={handleSliderChange}
// // // // // //         className="w-full mb-6"
// // // // // //       />
// // // // // //       <div className="flex flex-col md:flex-row justify-between items-center mb-4">
// // // // // //         <svg width="300" height="300" viewBox="-150 -150 300 300">
// // // // // //           <defs>
// // // // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // // // //               refX="0" refY="3.5" orient="auto">
// // // // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // // // //             </marker>
// // // // // //           </defs>
          
// // // // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // // // //           <line x1="-120" y1="0" x2="120" y2="0" stroke="black" />
// // // // // //           <line x1="0" y1="-120" x2="0" y2="120" stroke="black" />
          
// // // // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">θ</text>
// // // // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // // // //             {useRadians ? "π/2-θ" : "90°-θ"}
// // // // // //           </text>
// // // // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // // // //             {useRadians ? "π-θ" : "180°-θ"}
// // // // // //           </text>
// // // // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // // // //             {useRadians ? "θ+π" : "θ+180°"}
// // // // // //           </text>
// // // // // //         </svg>
        
// // // // // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
// // // // // //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// // // // // //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// // // // // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // // // // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // // // // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // // // // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // // // // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // // // // //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// // // // // //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// // // // // //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// // // // // //         </svg>
// // // // // //       </div>
// // // // // //       <div className="mt-4">
// // // // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default UnitCircleTrigVisualizer;
// // // // // import React, { useState, useCallback } from 'react';

// // // // // const UnitCircleTrigVisualizer = () => {
// // // // //   const [angle, setAngle] = useState(30);
// // // // //   const [inputValue, setInputValue] = useState('30');
// // // // //   const [useRadians, setUseRadians] = useState(false);
// // // // //   const radius = 120;
// // // // //   const labelOffset = 30;
// // // // //   const graphWidth = 360;
// // // // //   const graphHeight = 200;

// // // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // // //   const getCoordinates = (degrees, r = radius) => ({
// // // // //     x: Math.cos(toRadians(degrees)) * r,
// // // // //     y: Math.sin(toRadians(degrees)) * r
// // // // //   });

// // // // //   const mainAngle = getCoordinates(angle);
// // // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // // //   const getLabelPosition = (coords, offset) => {
// // // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // // //     const scale = (radius + labelOffset + offset) / distance;
// // // // //     return {
// // // // //       x: coords.x * scale,
// // // // //       y: coords.y * scale
// // // // //     };
// // // // //   };

// // // // //   const mainLabel = getLabelPosition(mainAngle, 0);
// // // // //   const complementaryLabel = getLabelPosition(complementaryAngle, 15);
// // // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle, 30);
// // // // //   const oppositeLabel = getLabelPosition(oppositeAngle, 45);

// // // // //   const handleInputChange = (e) => {
// // // // //     setInputValue(e.target.value);
// // // // //     let value = parseFloat(e.target.value);
// // // // //     if (!isNaN(value)) {
// // // // //       if (useRadians) {
// // // // //         value = toDegrees(value);
// // // // //       }
// // // // //       setAngle(((value % 360) + 360) % 360);
// // // // //     }
// // // // //   };

// // // // //   const handleSliderChange = (e) => {
// // // // //     const value = Number(e.target.value);
// // // // //     setAngle(value);
// // // // //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// // // // //   };

// // // // //   const toggleRadians = (e) => {
// // // // //     const newUseRadians = e.target.checked;
// // // // //     setUseRadians(newUseRadians);
// // // // //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// // // // //   };

// // // // //   const resetVisualization = () => {
// // // // //     setAngle(0);
// // // // //     setInputValue(useRadians ? '0.00' : '0');
// // // // //   };

// // // // //   const Arrow = ({ start, end, color }) => (
// // // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // // //   );

// // // // //   const generateGraphPoints = useCallback((func) => {
// // // // //     const points = [];
// // // // //     for (let i = 0; i <= 360; i += 5) {
// // // // //       const x = i;
// // // // //       const y = func(toRadians(i)) * -90 + 100;
// // // // //       points.push(`${x},${y}`);
// // // // //     }
// // // // //     return points.join(' ');
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
// // // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // // //       <div className="mb-4 flex items-center justify-between">
// // // // //         <div className="flex items-center">
// // // // //           <p className="text-lg font-semibold mr-4">Angle: </p>
// // // // //           <input
// // // // //             type="text"
// // // // //             value={inputValue}
// // // // //             onChange={handleInputChange}
// // // // //             className="border rounded px-2 py-1 w-20 mr-2"
// // // // //           />
// // // // //           <span>{useRadians ? "rad" : "°"}</span>
// // // // //         </div>
// // // // //         <label className="flex items-center">
// // // // //           <span className="mr-2">Radians</span>
// // // // //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// // // // //         </label>
// // // // //         <button
// // // // //           onClick={resetVisualization}
// // // // //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // // // //         >
// // // // //           Reset
// // // // //         </button>
// // // // //       </div>
// // // // //       <input
// // // // //         type="range"
// // // // //         min="0"
// // // // //         max="360"
// // // // //         value={angle}
// // // // //         onChange={handleSliderChange}
// // // // //         className="w-full mb-6"
// // // // //       />
// // // // //       <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
// // // // //         <svg width="450" height="450" viewBox="-225 -225 450 450">
// // // // //           <defs>
// // // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // // //               refX="0" refY="3.5" orient="auto">
// // // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // // //             </marker>
// // // // //           </defs>
          
// // // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // // //           <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
// // // // //           <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
// // // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">θ</text>
// // // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // // //             {useRadians ? "π/2-θ" : "90°-θ"}
// // // // //           </text>
// // // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // // //             {useRadians ? "π-θ" : "180°-θ"}
// // // // //           </text>
// // // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // // //             {useRadians ? "θ+π" : "θ+180°"}
// // // // //           </text>
// // // // //         </svg>
        
// // // // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
// // // // //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// // // // //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// // // // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // // // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // // // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // // // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // // // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // // // //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// // // // //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// // // // //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// // // // //         </svg>
// // // // //       </div>
// // // // //       <div className="mt-4">
// // // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default UnitCircleTrigVisualizer;
// // // // import React, { useState, useCallback } from 'react';

// // // // const UnitCircleTrigVisualizer = () => {
// // // //   const [angle, setAngle] = useState(30);
// // // //   const [inputValue, setInputValue] = useState('30');
// // // //   const [useRadians, setUseRadians] = useState(false);
// // // //   const radius = 120;
// // // //   const labelOffset = 30;
// // // //   const graphWidth = 360;
// // // //   const graphHeight = 200;

// // // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // // //   const getCoordinates = (degrees, r = radius) => ({
// // // //     x: Math.cos(toRadians(degrees)) * r,
// // // //     y: Math.sin(toRadians(degrees)) * r
// // // //   });

// // // //   const mainAngle = getCoordinates(angle);
// // // //   const complementaryAngle = getCoordinates(90 - angle);
// // // //   const supplementaryAngle = getCoordinates(180 - angle);
// // // //   const oppositeAngle = getCoordinates(angle + 180);

// // // //   const getLabelPosition = (coords, offset) => {
// // // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // // //     const scale = (radius + labelOffset + offset) / distance;
// // // //     return {
// // // //       x: coords.x * scale,
// // // //       y: coords.y * scale
// // // //     };
// // // //   };

// // // //   const mainLabel = getLabelPosition(mainAngle, 0);
// // // //   const complementaryLabel = getLabelPosition(complementaryAngle, 15);
// // // //   const supplementaryLabel = getLabelPosition(supplementaryAngle, 30);
// // // //   const oppositeLabel = getLabelPosition(oppositeAngle, 45);

// // // //   const formatAngle = (degrees) => {
// // // //     if (useRadians) {
// // // //       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
// // // //     } else {
// // // //       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
// // // //     }
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     setInputValue(e.target.value);
// // // //     let value = parseFloat(e.target.value);
// // // //     if (!isNaN(value)) {
// // // //       if (useRadians) {
// // // //         value = toDegrees(value);
// // // //       }
// // // //       setAngle(((value % 360) + 360) % 360);
// // // //     }
// // // //   };

// // // //   const handleSliderChange = (e) => {
// // // //     const value = Number(e.target.value);
// // // //     setAngle(value);
// // // //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// // // //   };

// // // //   const toggleRadians = (e) => {
// // // //     const newUseRadians = e.target.checked;
// // // //     setUseRadians(newUseRadians);
// // // //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// // // //   };

// // // //   const resetVisualization = () => {
// // // //     setAngle(0);
// // // //     setInputValue(useRadians ? '0.00' : '0');
// // // //   };

// // // //   const Arrow = ({ start, end, color }) => (
// // // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // // //   );

// // // //   const generateGraphPoints = useCallback((func) => {
// // // //     const points = [];
// // // //     for (let i = 0; i <= 360; i += 5) {
// // // //       const x = i;
// // // //       const y = func(toRadians(i)) * -90 + 100;
// // // //       points.push(`${x},${y}`);
// // // //     }
// // // //     return points.join(' ');
// // // //   }, []);

// // // //   return (
// // // //     <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
// // // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // // //       <div className="mb-4 flex items-center justify-between">
// // // //         <div className="flex items-center">
// // // //           <p className="text-lg font-semibold mr-4">Angle: </p>
// // // //           <input
// // // //             type="text"
// // // //             value={inputValue}
// // // //             onChange={handleInputChange}
// // // //             className="border rounded px-2 py-1 w-20 mr-2"
// // // //           />
// // // //           <span>{useRadians ? "rad" : "°"}</span>
// // // //         </div>
// // // //         <label className="flex items-center">
// // // //           <span className="mr-2">Radians</span>
// // // //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// // // //         </label>
// // // //         <button
// // // //           onClick={resetVisualization}
// // // //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // // //         >
// // // //           Reset
// // // //         </button>
// // // //       </div>
// // // //       <input
// // // //         type="range"
// // // //         min="0"
// // // //         max="360"
// // // //         value={angle}
// // // //         onChange={handleSliderChange}
// // // //         className="w-full mb-6"
// // // //       />
// // // //       <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
// // // //         <svg width="450" height="450" viewBox="-225 -225 450 450">
// // // //           <defs>
// // // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // // //               refX="0" refY="3.5" orient="auto">
// // // //               <polygon points="0 0, 10 3.5, 0 7" />
// // // //             </marker>
// // // //           </defs>
          
// // // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // // //           <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
// // // //           <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
// // // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">
// // // //             θ={formatAngle(angle)}
// // // //           </text>
// // // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // // //             {useRadians ? "π/2-θ" : "90°-θ"}={formatAngle(90 - angle)}
// // // //           </text>
// // // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // // //             {useRadians ? "π-θ" : "180°-θ"}={formatAngle(180 - angle)}
// // // //           </text>
// // // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // // //             {useRadians ? "θ+π" : "θ+180°"}={formatAngle((angle + 180) % 360)}
// // // //           </text>
// // // //         </svg>
        
// // // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
// // // //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// // // //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// // // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // // //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// // // //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// // // //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// // // //         </svg>
// // // //       </div>
// // // //       <div className="mt-4">
// // // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UnitCircleTrigVisualizer;
// // // import React, { useState, useCallback } from 'react';

// // // const UnitCircleTrigVisualizer = () => {
// // //   const [angle, setAngle] = useState(30);
// // //   const [inputValue, setInputValue] = useState('30');
// // //   const [useRadians, setUseRadians] = useState(false);
// // //   const radius = 120;
// // //   const labelOffset = 30;
// // //   const graphWidth = 360;
// // //   const graphHeight = 200;

// // //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// // //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// // //   const getCoordinates = (degrees, r = radius) => ({
// // //     x: Math.cos(toRadians(degrees)) * r,
// // //     y: Math.sin(toRadians(degrees)) * r
// // //   });

// // //   const mainAngle = getCoordinates(angle);
// // //   const complementaryAngle = getCoordinates(90 - angle);
// // //   const supplementaryAngle = getCoordinates(180 - angle);
// // //   const oppositeAngle = getCoordinates(angle + 180);

// // //   const getLabelPosition = (coords, offset) => {
// // //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// // //     const scale = (radius + labelOffset + offset) / distance;
// // //     return {
// // //       x: coords.x * scale,
// // //       y: coords.y * scale
// // //     };
// // //   };

// // //   const mainLabel = getLabelPosition(mainAngle, 0);
// // //   const complementaryLabel = getLabelPosition(complementaryAngle, 15);
// // //   const supplementaryLabel = getLabelPosition(supplementaryAngle, 30);
// // //   const oppositeLabel = getLabelPosition(oppositeAngle, 45);

// // //   const formatAngle = (degrees) => {
// // //     if (useRadians) {
// // //       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
// // //     } else {
// // //       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
// // //     }
// // //   };

// // //   const handleInputChange = (e) => {
// // //     setInputValue(e.target.value);
// // //     let value = parseFloat(e.target.value);
// // //     if (!isNaN(value)) {
// // //       if (useRadians) {
// // //         value = toDegrees(value);
// // //       }
// // //       setAngle(((value % 360) + 360) % 360);
// // //     }
// // //   };

// // //   const handleSliderChange = (e) => {
// // //     const value = Number(e.target.value);
// // //     setAngle(value);
// // //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// // //   };

// // //   const toggleRadians = (e) => {
// // //     const newUseRadians = e.target.checked;
// // //     setUseRadians(newUseRadians);
// // //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// // //   };

// // //   const resetVisualization = () => {
// // //     setAngle(0);
// // //     setInputValue(useRadians ? '0.00' : '0');
// // //   };

// // //   const changeAngle = (delta) => {
// // //     const newAngle = ((angle + delta) % 360 + 360) % 360;
// // //     setAngle(newAngle);
// // //     setInputValue(useRadians ? toRadians(newAngle).toFixed(2) : newAngle.toFixed(2));
// // //   };

// // //   const Arrow = ({ start, end, color }) => (
// // //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// // //   );

// // //   const generateGraphPoints = useCallback((func) => {
// // //     const points = [];
// // //     for (let i = 0; i <= 360; i += 5) {
// // //       const x = i;
// // //       const y = func(toRadians(i)) * -90 + 100;
// // //       points.push(`${x},${y}`);
// // //     }
// // //     return points.join(' ');
// // //   }, []);

// // //   return (
// // //     <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
// // //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// // //       <div className="mb-4 flex items-center justify-between">
// // //         <div className="flex items-center">
// // //           <p className="text-lg font-semibold mr-4">Angle: </p>
// // //           <button
// // //             onClick={() => changeAngle(-1)}
// // //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
// // //           >
// // //             -
// // //           </button>
// // //           <input
// // //             type="text"
// // //             value={inputValue}
// // //             onChange={handleInputChange}
// // //             className="border-t border-b border-gray-300 px-2 py-1 w-20 text-center"
// // //           />
// // //           <button
// // //             onClick={() => changeAngle(1)}
// // //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
// // //           >
// // //             +
// // //           </button>
// // //           <span className="ml-2">{useRadians ? "rad" : "°"}</span>
// // //         </div>
// // //         <label className="flex items-center">
// // //           <span className="mr-2">Radians</span>
// // //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// // //         </label>
// // //         <button
// // //           onClick={resetVisualization}
// // //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// // //         >
// // //           Reset
// // //         </button>
// // //       </div>
// // //       <input
// // //         type="range"
// // //         min="0"
// // //         max="360"
// // //         value={angle}
// // //         onChange={handleSliderChange}
// // //         className="w-full mb-6"
// // //       />
// // //       <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
// // //         <svg width="450" height="450" viewBox="-225 -225 450 450">
// // //           <defs>
// // //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// // //               refX="0" refY="3.5" orient="auto">
// // //               <polygon points="0 0, 10 3.5, 0 7" />
// // //             </marker>
// // //           </defs>
          
// // //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// // //           <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
// // //           <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
// // //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="blue" />
// // //           <Arrow start={{x: 0, y: 0}} end={complementaryAngle} color="green" />
// // //           <Arrow start={{x: 0, y: 0}} end={supplementaryAngle} color="red" />
// // //           <Arrow start={{x: 0, y: 0}} end={oppositeAngle} color="purple" />
          
// // //           <text x={mainLabel.x} y={-mainLabel.y} fill="blue" dominantBaseline="middle" textAnchor="middle">
// // //             θ={formatAngle(angle)}
// // //           </text>
// // //           <text x={complementaryLabel.x} y={-complementaryLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// // //             {useRadians ? "π/2-θ" : "90°-θ"}={formatAngle(90 - angle)}
// // //           </text>
// // //           <text x={supplementaryLabel.x} y={-supplementaryLabel.y} fill="red" dominantBaseline="middle" textAnchor="middle">
// // //             {useRadians ? "π-θ" : "180°-θ"}={formatAngle(180 - angle)}
// // //           </text>
// // //           <text x={oppositeLabel.x} y={-oppositeLabel.y} fill="purple" dominantBaseline="middle" textAnchor="middle">
// // //             {useRadians ? "θ+π" : "θ+180°"}={formatAngle((angle + 180) % 360)}
// // //           </text>
// // //         </svg>
        
// // //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
// // //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// // //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// // //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// // //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// // //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// // //           <text x="5" y="15" fill="blue">sin(θ)</text>
// // //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// // //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// // //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// // //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// // //         </svg>
// // //       </div>
// // //       <div className="mt-4">
// // //         <p className="text-lg font-semibold">Trigonometric Identities:</p>
// // //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // //         <p>sin({useRadians ? "π/2-θ" : "90°-θ"}) = cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// // //         <p>cos({useRadians ? "π/2-θ" : "90°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // //         <p>sin({useRadians ? "π-θ" : "180°-θ"}) = sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// // //         <p>cos({useRadians ? "π-θ" : "180°-θ"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // //         <p>sin({useRadians ? "θ+π" : "θ+180°"}) = -sin(θ) = {(-Math.sin(toRadians(angle))).toFixed(4)}</p>
// // //         <p>cos({useRadians ? "θ+π" : "θ+180°"}) = -cos(θ) = {(-Math.cos(toRadians(angle))).toFixed(4)}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UnitCircleTrigVisualizer;
// // import React, { useState, useCallback } from 'react';

// // const UnitCircleTrigVisualizer = () => {
// //   const [angle, setAngle] = useState(30);
// //   const [inputValue, setInputValue] = useState('30');
// //   const [useRadians, setUseRadians] = useState(false);
// //   const radius = 120;
// //   const labelOffset = 30;
// //   const graphWidth = 360;
// //   const graphHeight = 200;

// //   const toRadians = (degrees) => (degrees * Math.PI) / 180;
// //   const toDegrees = (radians) => (radians * 180) / Math.PI;

// //   const getCoordinates = (degrees, r = radius) => ({
// //     x: Math.cos(toRadians(degrees)) * r,
// //     y: Math.sin(toRadians(degrees)) * r
// //   });

// //   const mainAngle = getCoordinates(angle);

// //   const getLabelPosition = (coords, offset) => {
// //     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
// //     const scale = (radius + labelOffset + offset) / distance;
// //     return {
// //       x: coords.x * scale,
// //       y: coords.y * scale
// //     };
// //   };

// //   const mainLabel = getLabelPosition(mainAngle, 0);

// //   const formatAngle = (degrees) => {
// //     if (useRadians) {
// //       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
// //     } else {
// //       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     setInputValue(e.target.value);
// //     let value = parseFloat(e.target.value);
// //     if (!isNaN(value)) {
// //       if (useRadians) {
// //         value = toDegrees(value);
// //       }
// //       setAngle(((value % 360) + 360) % 360);
// //     }
// //   };

// //   const handleSliderChange = (e) => {
// //     const value = Number(e.target.value);
// //     setAngle(value);
// //     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
// //   };

// //   const toggleRadians = (e) => {
// //     const newUseRadians = e.target.checked;
// //     setUseRadians(newUseRadians);
// //     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
// //   };

// //   const resetVisualization = () => {
// //     setAngle(0);
// //     setInputValue(useRadians ? '0.00' : '0');
// //   };

// //   const changeAngle = (delta) => {
// //     const newAngle = ((angle + delta) % 360 + 360) % 360;
// //     setAngle(newAngle);
// //     setInputValue(useRadians ? toRadians(newAngle).toFixed(2) : newAngle.toFixed(2));
// //   };

// //   const Arrow = ({ start, end, color }) => (
// //     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
// //   );

// //   const generateGraphPoints = useCallback((func) => {
// //     const points = [];
// //     for (let i = 0; i <= 360; i += 5) {
// //       const x = i;
// //       const y = func(toRadians(i)) * -90 + 100;
// //       points.push(`${x},${y}`);
// //     }
// //     return points.join(' ');
// //   }, []);

// //   const describeArc = (x, y, radius, startAngle, endAngle) => {
// //     const start = getCoordinates(startAngle, radius);
// //     const end = getCoordinates(endAngle, radius);
// //     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
// //     return [
// //       "M", start.x, -start.y, 
// //       "A", radius, radius, 0, largeArcFlag, 0, end.x, -end.y
// //     ].join(" ");
// //   };

// //   return (
// //     <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
// //       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
// //       <div className="mb-4 flex items-center justify-between">
// //         <div className="flex items-center">
// //           <p className="text-lg font-semibold mr-4">Angle: </p>
// //           <button
// //             onClick={() => changeAngle(-1)}
// //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
// //           >
// //             -
// //           </button>
// //           <input
// //             type="text"
// //             value={inputValue}
// //             onChange={handleInputChange}
// //             className="border-t border-b border-gray-300 px-2 py-1 w-20 text-center"
// //           />
// //           <button
// //             onClick={() => changeAngle(1)}
// //             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
// //           >
// //             +
// //           </button>
// //           <span className="ml-2">{useRadians ? "rad" : "°"}</span>
// //         </div>
// //         <label className="flex items-center">
// //           <span className="mr-2">Radians</span>
// //           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
// //         </label>
// //         <button
// //           onClick={resetVisualization}
// //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
// //         >
// //           Reset
// //         </button>
// //       </div>
// //       <input
// //         type="range"
// //         min="0"
// //         max="360"
// //         value={angle}
// //         onChange={handleSliderChange}
// //         className="w-full mb-6"
// //       />
// //       <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
// //         <svg width="450" height="450" viewBox="-225 -225 450 450">
// //           <defs>
// //             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
// //               refX="0" refY="3.5" orient="auto">
// //               <polygon points="0 0, 10 3.5, 0 7" />
// //             </marker>
// //           </defs>
          
// //           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
// //           <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
// //           <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
// //           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="green" />
          
// //           {/* Sin line */}
// //           <line x1={mainAngle.x} y1={-mainAngle.y} x2={mainAngle.x} y2="0" stroke="blue" strokeWidth="2" />
          
// //           {/* Cos line */}
// //           <line x1="0" y1="0" x2={mainAngle.x} y2="0" stroke="red" strokeWidth="2" />
          
// //           {/* Arc for θ */}
// //           <path d={describeArc(0, 0, 40, 0, angle)} stroke="green" fill="none" />
          
// //           <text x={mainLabel.x} y={-mainLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
// //             θ={formatAngle(angle)}
// //           </text>
          
// //           {/* Sin and Cos labels */}
// //           <text x={mainAngle.x + 5} y={-mainAngle.y/2} fill="blue" dominantBaseline="middle" textAnchor="start">
// //             sin(θ)
// //           </text>
// //           <text x={mainAngle.x/2} y="15" fill="red" dominantBaseline="middle" textAnchor="middle">
// //             cos(θ)
// //           </text>
// //         </svg>
        
// //         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
// //           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
// //           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
// //           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
// //           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
// //           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
// //           <text x="5" y="15" fill="blue">sin(θ)</text>
// //           <text x="5" y="30" fill="red">cos(θ)</text>
          
// //           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
// //           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
// //           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
// //         </svg>
// //       </div>
// //       <div className="mt-4">
// //         <p className="text-lg font-semibold">Trigonometric Values:</p>
// //         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
// //         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UnitCircleTrigVisualizer;
// import React, { useState, useCallback } from 'react';

// const UnitCircleTrigVisualizer = () => {
//   const [angle, setAngle] = useState(30);
//   const [inputValue, setInputValue] = useState('30');
//   const [useRadians, setUseRadians] = useState(false);
//   const radius = 120;
//   const labelOffset = 30;
//   const graphWidth = 360;
//   const graphHeight = 200;

//   const toRadians = (degrees) => (degrees * Math.PI) / 180;
//   const toDegrees = (radians) => (radians * 180) / Math.PI;

//   const getCoordinates = (degrees, r = radius) => ({
//     x: Math.cos(toRadians(degrees)) * r,
//     y: Math.sin(toRadians(degrees)) * r
//   });

//   const mainAngle = getCoordinates(angle);

//   const getLabelPosition = (coords, offset) => {
//     const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
//     const scale = (radius + labelOffset + offset) / distance;
//     return {
//       x: coords.x * scale,
//       y: coords.y * scale
//     };
//   };

//   const mainLabel = getLabelPosition(mainAngle, 0);

//   const formatAngle = (degrees) => {
//     if (useRadians) {
//       return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
//     } else {
//       return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     let value = parseFloat(e.target.value);
//     if (!isNaN(value)) {
//       if (useRadians) {
//         value = toDegrees(value);
//       }
//       setAngle(((value % 360) + 360) % 360);
//     }
//   };

//   const handleSliderChange = (e) => {
//     const value = Number(e.target.value);
//     setAngle(value);
//     setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
//   };

//   const toggleRadians = (e) => {
//     const newUseRadians = e.target.checked;
//     setUseRadians(newUseRadians);
//     setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
//   };

//   const resetVisualization = () => {
//     setAngle(0);
//     setInputValue(useRadians ? '0.00' : '0');
//   };

//   const changeAngle = (delta) => {
//     const newAngle = ((angle + delta) % 360 + 360) % 360;
//     setAngle(newAngle);
//     setInputValue(useRadians ? toRadians(newAngle).toFixed(2) : newAngle.toFixed(2));
//   };

//   const Arrow = ({ start, end, color }) => (
//     <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
//   );

//   const generateGraphPoints = useCallback((func) => {
//     const points = [];
//     for (let i = 0; i <= 360; i += 5) {
//       const x = i;
//       const y = func(toRadians(i)) * -90 + 100;
//       points.push(`${x},${y}`);
//     }
//     return points.join(' ');
//   }, []);

//   const describeArc = (x, y, radius, startAngle, endAngle) => {
//     const start = getCoordinates(startAngle, radius);
//     const end = getCoordinates(endAngle, radius);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
//     return [
//       "M", start.x, -start.y, 
//       "A", radius, radius, 0, largeArcFlag, 0, end.x, -end.y
//     ].join(" ");
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
//       <div className="mb-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <p className="text-lg font-semibold mr-4">Angle: </p>
//           <button
//             onClick={() => changeAngle(-1)}
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//           >
//             -
//           </button>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="border-t border-b border-gray-300 px-2 py-1 w-20 text-center"
//           />
//           <button
//             onClick={() => changeAngle(1)}
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//           >
//             +
//           </button>
//           <span className="ml-2">{useRadians ? "rad" : "°"}</span>
//         </div>
//         <label className="flex items-center">
//           <span className="mr-2">Radians</span>
//           <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
//         </label>
//         <button
//           onClick={resetVisualization}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Reset
//         </button>
//       </div>
//       <input
//         type="range"
//         min="0"
//         max="360"
//         value={angle}
//         onChange={handleSliderChange}
//         className="w-full mb-6"
//       />
//       <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
//         <svg width="450" height="450" viewBox="-225 -225 450 450">
//           <defs>
//             <marker id="arrowhead" markerWidth="10" markerHeight="7" 
//               refX="0" refY="3.5" orient="auto">
//               <polygon points="0 0, 10 3.5, 0 7" />
//             </marker>
//           </defs>
          
//           {/* Grid */}
//           <g stroke="lightgray" strokeWidth="0.5">
//             {[-200, -150, -100, -50, 50, 100, 150, 200].map(coord => (
//               <React.Fragment key={coord}>
//                 <line x1={coord} y1="-200" x2={coord} y2="200" />
//                 <line y1={coord} x1="-200" y2={coord} x2="200" />
//               </React.Fragment>
//             ))}
//           </g>
          
//           <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
//           <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
//           <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
//           <Arrow start={{x: 0, y: 0}} end={mainAngle} color="green" />
          
//           {/* Sin line */}
//           <line x1={mainAngle.x} y1={-mainAngle.y} x2={mainAngle.x} y2="0" stroke="blue" strokeWidth="2" />
          
//           {/* Cos line */}
//           <line x1="0" y1="0" x2={mainAngle.x} y2="0" stroke="red" strokeWidth="2" />
          
//           {/* Arc for θ */}
//           <path d={describeArc(0, 0, 40, 0, angle)} stroke="green" fill="none" />
          
//           {/* θ in the center of the arc */}
//           <text 
//             x={getCoordinates(angle/2, 30).x} 
//             y={-getCoordinates(angle/2, 30).y} 
//             fill="green" 
//             dominantBaseline="middle" 
//             textAnchor="middle"
//           >
//             θ
//           </text>
          
//           {/* Angle value at the end of the arrow */}
//           <text x={mainLabel.x} y={-mainLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
//             {formatAngle(angle)}
//           </text>
          
//           {/* Sin and Cos labels */}
//           <text x={mainAngle.x + 5} y={-mainAngle.y/2} fill="blue" dominantBaseline="middle" textAnchor="start">
//             sin(θ)
//           </text>
//           <text x={mainAngle.x/2} y="15" fill="red" dominantBaseline="middle" textAnchor="middle">
//             cos(θ)
//           </text>
//         </svg>
        
//         <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
//           <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
//           <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
//           <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
//           <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
//           <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
//           <text x="5" y="15" fill="blue">sin(θ)</text>
//           <text x="5" y="30" fill="red">cos(θ)</text>
          
//           <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
//           <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
//           <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
//         </svg>
//       </div>
//       <div className="mt-4">
//         <p className="text-lg font-semibold">Trigonometric Values:</p>
//         <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
//         <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
//       </div>
//     </div>
//   );
// };

// export default UnitCircleTrigVisualizer;
import React, { useState, useCallback } from 'react';

const UnitCircleTrigVisualizer = () => {
  const [angle, setAngle] = useState(30);
  const [inputValue, setInputValue] = useState('30');
  const [useRadians, setUseRadians] = useState(false);
  const radius = 100; // Changed to 100 to represent 1 unit
  const labelOffset = 20;
  const graphWidth = 360;
  const graphHeight = 200;

  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const toDegrees = (radians) => (radians * 180) / Math.PI;

  const getCoordinates = (degrees, r = radius) => ({
    x: Math.cos(toRadians(degrees)) * r,
    y: Math.sin(toRadians(degrees)) * r
  });

  const mainAngle = getCoordinates(angle);

  const getLabelPosition = (coords, offset) => {
    const distance = Math.sqrt(coords.x ** 2 + coords.y ** 2);
    const scale = (radius + labelOffset + offset) / distance;
    return {
      x: coords.x * scale,
      y: coords.y * scale
    };
  };

  const mainLabel = getLabelPosition(mainAngle, 0);

  const formatAngle = (degrees) => {
    if (useRadians) {
      return (toRadians(degrees) % (2 * Math.PI)).toFixed(2) + " rad";
    } else {
      return ((degrees % 360 + 360) % 360).toFixed(2) + "°";
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    let value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      if (useRadians) {
        value = toDegrees(value);
      }
      setAngle(((value % 360) + 360) % 360);
    }
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setAngle(value);
    setInputValue(useRadians ? toRadians(value).toFixed(2) : value.toFixed(2));
  };

  const toggleRadians = (e) => {
    const newUseRadians = e.target.checked;
    setUseRadians(newUseRadians);
    setInputValue(newUseRadians ? toRadians(angle).toFixed(2) : angle.toFixed(2));
  };

  const resetVisualization = () => {
    setAngle(0);
    setInputValue(useRadians ? '0.00' : '0');
  };

  const changeAngle = (delta) => {
    const newAngle = ((angle + delta) % 360 + 360) % 360;
    setAngle(newAngle);
    setInputValue(useRadians ? toRadians(newAngle).toFixed(2) : newAngle.toFixed(2));
  };

  const Arrow = ({ start, end, color }) => (
    <line x1={start.x} y1={-start.y} x2={end.x} y2={-end.y} stroke={color} markerEnd="url(#arrowhead)" />
  );

  const generateGraphPoints = useCallback((func) => {
    const points = [];
    for (let i = 0; i <= 360; i += 5) {
      const x = i;
      const y = func(toRadians(i)) * -90 + 100;
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }, []);

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = getCoordinates(startAngle, radius);
    const end = getCoordinates(endAngle, radius);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, -start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, -end.y
    ].join(" ");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Unit Circle Trigonometric Visualizer</h2>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg font-semibold mr-4">Angle: </p>
          <button
            onClick={() => changeAngle(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            -
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border-t border-b border-gray-300 px-2 py-1 w-20 text-center"
          />
          <button
            onClick={() => changeAngle(1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
          <span className="ml-2">{useRadians ? "rad" : "°"}</span>
        </div>
        <label className="flex items-center">
          <span className="mr-2">Radians</span>
          <input type="checkbox" checked={useRadians} onChange={toggleRadians} />
        </label>
        <button
          onClick={resetVisualization}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={handleSliderChange}
        className="w-full mb-6"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
        <svg width="450" height="450" viewBox="-225 -225 450 450">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          
          {/* Grid */}
          <g stroke="lightgray" strokeWidth="0.5">
            {[-200, -150, -100, -50, 50, 100, 150, 200].map(coord => (
              <React.Fragment key={coord}>
                <line x1={coord} y1="-200" x2={coord} y2="200" />
                <line y1={coord} x1="-200" y2={coord} x2="200" />
              </React.Fragment>
            ))}
          </g>
          
          {/* Unit labels */}
          <text x="102" y="10" fontSize="12">1</text>
          <text x="-110" y="10" fontSize="12">-1</text>
          <text x="5" y="-102" fontSize="12">1</text>
          <text x="5" y="110" fontSize="12">-1</text>
          
          <circle cx="0" cy="0" r={radius} stroke="black" fill="none" />
          
          <line x1="-200" y1="0" x2="200" y2="0" stroke="black" />
          <line x1="0" y1="-200" x2="0" y2="200" stroke="black" />
          
          <Arrow start={{x: 0, y: 0}} end={mainAngle} color="green" />
          
          {/* Sin line */}
          <line x1={mainAngle.x} y1={-mainAngle.y} x2={mainAngle.x} y2="0" stroke="blue" strokeWidth="2" />
          
          {/* Cos line */}
          <line x1="0" y1="0" x2={mainAngle.x} y2="0" stroke="red" strokeWidth="2" />
          
          {/* Arc for θ */}
          <path d={describeArc(0, 0, 40, 0, angle)} stroke="green" fill="none" />
          
          {/* θ in the center of the arc */}
          <text 
            x={getCoordinates(angle/2, 30).x} 
            y={-getCoordinates(angle/2, 30).y} 
            fill="green" 
            dominantBaseline="middle" 
            textAnchor="middle"
          >
            θ
          </text>
          
          {/* Angle value at the end of the arrow */}
          <text x={mainLabel.x} y={-mainLabel.y} fill="green" dominantBaseline="middle" textAnchor="middle">
            {formatAngle(angle)}
          </text>
          
          {/* Sin and Cos labels */}
          <text x={mainAngle.x + 5} y={-mainAngle.y/2} fill="blue" dominantBaseline="middle" textAnchor="start">
            sin(θ)
          </text>
          <text x={mainAngle.x/2} y="15" fill="red" dominantBaseline="middle" textAnchor="middle">
            cos(θ)
          </text>
        </svg>
        
        <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="mt-8 lg:mt-0 lg:ml-24">
          <polyline points={generateGraphPoints(Math.sin)} fill="none" stroke="blue" strokeWidth="2" />
          <polyline points={generateGraphPoints(Math.cos)} fill="none" stroke="red" strokeWidth="2" />
          <line x1="0" y1={graphHeight/2} x2={graphWidth} y2={graphHeight/2} stroke="black" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2={graphHeight} stroke="black" strokeWidth="1" />
          <text x={graphWidth/2} y={graphHeight-5} textAnchor="middle">Angle ({useRadians ? 'radians' : 'degrees'})</text>
          <text x="5" y="15" fill="blue">sin(θ)</text>
          <text x="5" y="30" fill="red">cos(θ)</text>
          
          <line x1={angle} y1="0" x2={angle} y2={graphHeight} stroke="green" strokeWidth="2" />
          
          <circle cx={angle} cy={Math.sin(toRadians(angle)) * -90 + 100} r="4" fill="blue" />
          <circle cx={angle} cy={Math.cos(toRadians(angle)) * -90 + 100} r="4" fill="red" />
        </svg>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Trigonometric Values:</p>
        <p>sin(θ) = {Math.sin(toRadians(angle)).toFixed(4)}</p>
        <p>cos(θ) = {Math.cos(toRadians(angle)).toFixed(4)}</p>
      </div>
    </div>
  );
};

export default UnitCircleTrigVisualizer;