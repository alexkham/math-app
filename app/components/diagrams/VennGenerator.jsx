// // // // // // // // // // import React, { useState, useRef } from 'react';

// // // // // // // // // // const VennGenerator = () => {
// // // // // // // // // //   const [circle1, setCircle1] = useState({ label: 'Set A', color: '#ff000080' });
// // // // // // // // // //   const [circle2, setCircle2] = useState({ label: 'Set B', color: '#0000ff80' });
// // // // // // // // // //   const [intersectionLabel, setIntersectionLabel] = useState('A ∩ B');
// // // // // // // // // //   const svgRef = useRef(null);

// // // // // // // // // //   const addSymbol = (symbol) => {
// // // // // // // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // // // // // // //   };

// // // // // // // // // //   const downloadSVG = () => {
// // // // // // // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // // // // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // // // // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // // // // // // //     const downloadLink = document.createElement("a");
// // // // // // // // // //     downloadLink.href = svgUrl;
// // // // // // // // // //     downloadLink.download = "venn_diagram.svg";
// // // // // // // // // //     document.body.appendChild(downloadLink);
// // // // // // // // // //     downloadLink.click();
// // // // // // // // // //     document.body.removeChild(downloadLink);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col items-center p-4">
// // // // // // // // // //       <svg ref={svgRef} width="300" height="200" viewBox="0 0 300 200">
// // // // // // // // // //         <circle cx="100" cy="100" r="70" fill={circle1.color} />
// // // // // // // // // //         <circle cx="200" cy="100" r="70" fill={circle2.color} />
// // // // // // // // // //         <text x="50" y="100" textAnchor="middle">{circle1.label}</text>
// // // // // // // // // //         <text x="250" y="100" textAnchor="middle">{circle2.label}</text>
// // // // // // // // // //         <text x="150" y="100" textAnchor="middle">{intersectionLabel}</text>
// // // // // // // // // //       </svg>
// // // // // // // // // //       <div className="mt-4 space-y-2 w-full max-w-md">
// // // // // // // // // //         <div className="flex space-x-2">
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             value={circle1.label}
// // // // // // // // // //             onChange={(e) => setCircle1({...circle1, label: e.target.value})}
// // // // // // // // // //             className="border p-1 rounded flex-grow"
// // // // // // // // // //             placeholder="Set A Label"
// // // // // // // // // //           />
// // // // // // // // // //           <input
// // // // // // // // // //             type="color"
// // // // // // // // // //             value={circle1.color.slice(0, 7)}
// // // // // // // // // //             onChange={(e) => setCircle1({...circle1, color: e.target.value + '80'})}
// // // // // // // // // //             className="w-10 h-10 border rounded"
// // // // // // // // // //           />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="flex space-x-2">
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             value={circle2.label}
// // // // // // // // // //             onChange={(e) => setCircle2({...circle2, label: e.target.value})}
// // // // // // // // // //             className="border p-1 rounded flex-grow"
// // // // // // // // // //             placeholder="Set B Label"
// // // // // // // // // //           />
// // // // // // // // // //           <input
// // // // // // // // // //             type="color"
// // // // // // // // // //             value={circle2.color.slice(0, 7)}
// // // // // // // // // //             onChange={(e) => setCircle2({...circle2, color: e.target.value + '80'})}
// // // // // // // // // //             className="w-10 h-10 border rounded"
// // // // // // // // // //           />
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="flex space-x-2">
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             value={intersectionLabel}
// // // // // // // // // //             onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // // // // // // //             className="border p-1 rounded flex-grow"
// // // // // // // // // //             placeholder="Intersection Label"
// // // // // // // // // //           />
// // // // // // // // // //           <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩</button>
// // // // // // // // // //           <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪</button>
// // // // // // // // // //         </div>
// // // // // // // // // //         <button 
// // // // // // // // // //           onClick={downloadSVG} 
// // // // // // // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // // // // // // //         >
// // // // // // // // // //           Download SVG
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default VennGenerator;
// // // // // // // // // import React, { useState, useRef } from 'react';

// // // // // // // // // const VennGenerator = () => {
// // // // // // // // //   const [circle1, setCircle1] = useState({ label: 'Set A', fillColor: '#ff000080', borderColor: '#ff0000' });
// // // // // // // // //   const [circle2, setCircle2] = useState({ label: 'Set B', fillColor: '#0000ff80', borderColor: '#0000ff' });
// // // // // // // // //   const [intersectionLabel, setIntersectionLabel] = useState('A ∩ B');
// // // // // // // // //   const svgRef = useRef(null);

// // // // // // // // //   const addSymbol = (symbol) => {
// // // // // // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // // // // // //   };

// // // // // // // // //   const downloadSVG = () => {
// // // // // // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // // // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // // // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // // // // // //     const downloadLink = document.createElement("a");
// // // // // // // // //     downloadLink.href = svgUrl;
// // // // // // // // //     downloadLink.download = "venn_diagram.svg";
// // // // // // // // //     document.body.appendChild(downloadLink);
// // // // // // // // //     downloadLink.click();
// // // // // // // // //     document.body.removeChild(downloadLink);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col items-center p-4">
// // // // // // // // //       <svg ref={svgRef} width="300" height="200" viewBox="0 0 300 200">
// // // // // // // // //         <circle cx="100" cy="100" r="70" fill={circle1.fillColor} stroke={circle1.borderColor} strokeWidth="2" />
// // // // // // // // //         <circle cx="200" cy="100" r="70" fill={circle2.fillColor} stroke={circle2.borderColor} strokeWidth="2" />
// // // // // // // // //         <text x="50" y="100" textAnchor="middle">{circle1.label}</text>
// // // // // // // // //         <text x="250" y="100" textAnchor="middle">{circle2.label}</text>
// // // // // // // // //         <text x="150" y="100" textAnchor="middle">{intersectionLabel}</text>
// // // // // // // // //       </svg>
// // // // // // // // //       <div className="mt-4 space-y-2 w-full max-w-md">
// // // // // // // // //         <div className="flex flex-col space-y-2">
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={circle1.label}
// // // // // // // // //             onChange={(e) => setCircle1({...circle1, label: e.target.value})}
// // // // // // // // //             className="border p-1 rounded w-full"
// // // // // // // // //             placeholder="Set A Label"
// // // // // // // // //           />
// // // // // // // // //           <div className="flex space-x-2">
// // // // // // // // //             <div className="flex flex-col">
// // // // // // // // //               <label className="text-sm">Fill Color</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="color"
// // // // // // // // //                 value={circle1.fillColor.slice(0, 7)}
// // // // // // // // //                 onChange={(e) => setCircle1({...circle1, fillColor: e.target.value + '80'})}
// // // // // // // // //                 className="w-full h-8 border rounded"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <div className="flex flex-col">
// // // // // // // // //               <label className="text-sm">Border Color</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="color"
// // // // // // // // //                 value={circle1.borderColor}
// // // // // // // // //                 onChange={(e) => setCircle1({...circle1, borderColor: e.target.value})}
// // // // // // // // //                 className="w-full h-8 border rounded"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex flex-col space-y-2">
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={circle2.label}
// // // // // // // // //             onChange={(e) => setCircle2({...circle2, label: e.target.value})}
// // // // // // // // //             className="border p-1 rounded w-full"
// // // // // // // // //             placeholder="Set B Label"
// // // // // // // // //           />
// // // // // // // // //           <div className="flex space-x-2">
// // // // // // // // //             <div className="flex flex-col">
// // // // // // // // //               <label className="text-sm">Fill Color</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="color"
// // // // // // // // //                 value={circle2.fillColor.slice(0, 7)}
// // // // // // // // //                 onChange={(e) => setCircle2({...circle2, fillColor: e.target.value + '80'})}
// // // // // // // // //                 className="w-full h-8 border rounded"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //             <div className="flex flex-col">
// // // // // // // // //               <label className="text-sm">Border Color</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="color"
// // // // // // // // //                 value={circle2.borderColor}
// // // // // // // // //                 onChange={(e) => setCircle2({...circle2, borderColor: e.target.value})}
// // // // // // // // //                 className="w-full h-8 border rounded"
// // // // // // // // //               />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //         <div className="flex space-x-2">
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             value={intersectionLabel}
// // // // // // // // //             onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // // // // // //             className="border p-1 rounded flex-grow"
// // // // // // // // //             placeholder="Intersection Label"
// // // // // // // // //           />
// // // // // // // // //           <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩</button>
// // // // // // // // //           <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪</button>
// // // // // // // // //         </div>
// // // // // // // // //         <button 
// // // // // // // // //           onClick={downloadSVG} 
// // // // // // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // // // // // //         >
// // // // // // // // //           Download SVG
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default VennGenerator;
// // // // // // // // import React, { useState, useRef } from 'react';

// // // // // // // // const VennGenerator = () => {
// // // // // // // //   const [circle1, setCircle1] = useState({ 
// // // // // // // //     label: 'Set A', 
// // // // // // // //     fillColor: '#ff000080', 
// // // // // // // //     borderColor: '#ff0000',
// // // // // // // //     strokeWidth: 2,
// // // // // // // //     radius: 70
// // // // // // // //   });
// // // // // // // //   const [circle2, setCircle2] = useState({ 
// // // // // // // //     label: 'Set B', 
// // // // // // // //     fillColor: '#0000ff80', 
// // // // // // // //     borderColor: '#0000ff',
// // // // // // // //     strokeWidth: 2,
// // // // // // // //     radius: 70
// // // // // // // //   });
// // // // // // // //   const [intersectionLabel, setIntersectionLabel] = useState('A ∩ B');
// // // // // // // //   const svgRef = useRef(null);

// // // // // // // //   const addSymbol = (symbol) => {
// // // // // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // // // // //   };

// // // // // // // //   const downloadSVG = () => {
// // // // // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // // // // //     const downloadLink = document.createElement("a");
// // // // // // // //     downloadLink.href = svgUrl;
// // // // // // // //     downloadLink.download = "venn_diagram.svg";
// // // // // // // //     document.body.appendChild(downloadLink);
// // // // // // // //     downloadLink.click();
// // // // // // // //     document.body.removeChild(downloadLink);
// // // // // // // //   };

// // // // // // // //   const CircleControls = ({ circle, setCircle, label }) => (
// // // // // // // //     <div className="flex flex-col space-y-2 p-2 border rounded">
// // // // // // // //       <input
// // // // // // // //         type="text"
// // // // // // // //         value={circle.label}
// // // // // // // //         onChange={(e) => setCircle({...circle, label: e.target.value})}
// // // // // // // //         className="border p-1 rounded w-full"
// // // // // // // //         placeholder={`${label} Label`}
// // // // // // // //       />
// // // // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // // // //         <div className="flex flex-col">
// // // // // // // //           <label className="text-sm">Fill Color</label>
// // // // // // // //           <input
// // // // // // // //             type="color"
// // // // // // // //             value={circle.fillColor.slice(0, 7)}
// // // // // // // //             onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
// // // // // // // //             className="w-full h-8 border rounded"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div className="flex flex-col">
// // // // // // // //           <label className="text-sm">Border Color</label>
// // // // // // // //           <input
// // // // // // // //             type="color"
// // // // // // // //             value={circle.borderColor}
// // // // // // // //             onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
// // // // // // // //             className="w-full h-8 border rounded"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // // // //         <div className="flex flex-col">
// // // // // // // //           <label className="text-sm">Stroke Width</label>
// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             value={circle.strokeWidth}
// // // // // // // //             onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
// // // // // // // //             className="border p-1 rounded w-full"
// // // // // // // //             min="0"
// // // // // // // //             max="10"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //         <div className="flex flex-col">
// // // // // // // //           <label className="text-sm">Radius</label>
// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             value={circle.radius}
// // // // // // // //             onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
// // // // // // // //             className="border p-1 rounded w-full"
// // // // // // // //             min="10"
// // // // // // // //             max="100"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col items-center p-4">
// // // // // // // //       <svg ref={svgRef} width="400" height="300" viewBox="0 0 400 300">
// // // // // // // //         <circle 
// // // // // // // //           cx={200 - circle1.radius/2} 
// // // // // // // //           cy="150" 
// // // // // // // //           r={circle1.radius} 
// // // // // // // //           fill={circle1.fillColor} 
// // // // // // // //           stroke={circle1.borderColor} 
// // // // // // // //           strokeWidth={circle1.strokeWidth} 
// // // // // // // //         />
// // // // // // // //         <circle 
// // // // // // // //           cx={200 + circle2.radius/2} 
// // // // // // // //           cy="150" 
// // // // // // // //           r={circle2.radius} 
// // // // // // // //           fill={circle2.fillColor} 
// // // // // // // //           stroke={circle2.borderColor} 
// // // // // // // //           strokeWidth={circle2.strokeWidth} 
// // // // // // // //         />
// // // // // // // //         <text x={200 - circle1.radius} y="150" textAnchor="middle">{circle1.label}</text>
// // // // // // // //         <text x={200 + circle2.radius} y="150" textAnchor="middle">{circle2.label}</text>
// // // // // // // //         <text x="200" y="150" textAnchor="middle">{intersectionLabel}</text>
// // // // // // // //       </svg>
// // // // // // // //       <div className="mt-4 space-y-4 w-full max-w-md">
// // // // // // // //         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" />
// // // // // // // //         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" />
// // // // // // // //         <div className="flex space-x-2">
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             value={intersectionLabel}
// // // // // // // //             onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // // // // //             className="border p-1 rounded flex-grow"
// // // // // // // //             placeholder="Intersection Label"
// // // // // // // //           />
// // // // // // // //           <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩</button>
// // // // // // // //           <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪</button>
// // // // // // // //         </div>
// // // // // // // //         <button 
// // // // // // // //           onClick={downloadSVG} 
// // // // // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // // // // //         >
// // // // // // // //           Download SVG
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default VennGenerator;
// // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // import { X, RotateCcw } from 'lucide-react';

// // // // // // // const VennGenerator = () => {
// // // // // // //   const initialCircle1 = { 
// // // // // // //     label: 'Set A', 
// // // // // // //     fillColor: '#ff000080', 
// // // // // // //     borderColor: '#ff0000',
// // // // // // //     strokeWidth: 2,
// // // // // // //     radius: 70
// // // // // // //   };
// // // // // // //   const initialCircle2 = { 
// // // // // // //     label: 'Set B', 
// // // // // // //     fillColor: '#0000ff80', 
// // // // // // //     borderColor: '#0000ff',
// // // // // // //     strokeWidth: 2,
// // // // // // //     radius: 70
// // // // // // //   };
// // // // // // //   const initialIntersectionLabel = 'A ∩ B';

// // // // // // //   const [circle1, setCircle1] = useState(initialCircle1);
// // // // // // //   const [circle2, setCircle2] = useState(initialCircle2);
// // // // // // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // // // // // //   const svgRef = useRef(null);

// // // // // // //   const addSymbol = (symbol) => {
// // // // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // // // //   };

// // // // // // //   const downloadSVG = () => {
// // // // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // // // //     const downloadLink = document.createElement("a");
// // // // // // //     downloadLink.href = svgUrl;
// // // // // // //     downloadLink.download = "venn_diagram.svg";
// // // // // // //     document.body.appendChild(downloadLink);
// // // // // // //     downloadLink.click();
// // // // // // //     document.body.removeChild(downloadLink);
// // // // // // //   };

// // // // // // //   const ResetButton = ({ onClick, isDefault }) => (
// // // // // // //     <button 
// // // // // // //       onClick={onClick} 
// // // // // // //       className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
// // // // // // //       title={isDefault ? "Reset to default" : "Clear"}
// // // // // // //     >
// // // // // // //       {isDefault ? <RotateCcw size={16} /> : <X size={16} />}
// // // // // // //     </button>
// // // // // // //   );

// // // // // // //   const CircleControls = ({ circle, setCircle, label, initial }) => (
// // // // // // //     <div className="flex flex-col space-y-2 p-2 border rounded">
// // // // // // //       <div className="relative">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={circle.label}
// // // // // // //           onChange={(e) => setCircle({...circle, label: e.target.value})}
// // // // // // //           className="border p-1 rounded w-full pr-16"
// // // // // // //           placeholder={`${label} Label`}
// // // // // // //         />
// // // // // // //         <ResetButton onClick={() => setCircle({...circle, label: ''})} />
// // // // // // //         <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
// // // // // // //       </div>
// // // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // // //         <div className="flex flex-col relative">
// // // // // // //           <label className="text-sm">Fill Color</label>
// // // // // // //           <input
// // // // // // //             type="color"
// // // // // // //             value={circle.fillColor.slice(0, 7)}
// // // // // // //             onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
// // // // // // //             className="w-full h-8 border rounded"
// // // // // // //           />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
// // // // // // //         </div>
// // // // // // //         <div className="flex flex-col relative">
// // // // // // //           <label className="text-sm">Border Color</label>
// // // // // // //           <input
// // // // // // //             type="color"
// // // // // // //             value={circle.borderColor}
// // // // // // //             onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
// // // // // // //             className="w-full h-8 border rounded"
// // // // // // //           />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // // //         <div className="flex flex-col relative">
// // // // // // //           <label className="text-sm">Stroke Width</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             value={circle.strokeWidth}
// // // // // // //             onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
// // // // // // //             className="border p-1 rounded w-full pr-16"
// // // // // // //             min="0"
// // // // // // //             max="10"
// // // // // // //           />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
// // // // // // //         </div>
// // // // // // //         <div className="flex flex-col relative">
// // // // // // //           <label className="text-sm">Radius</label>
// // // // // // //           <input
// // // // // // //             type="number"
// // // // // // //             value={circle.radius}
// // // // // // //             onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
// // // // // // //             className="border p-1 rounded w-full pr-16"
// // // // // // //             min="10"
// // // // // // //             max="100"
// // // // // // //           />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
// // // // // // //           <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col items-center p-4">
// // // // // // //       <svg ref={svgRef} width="400" height="300" viewBox="0 0 400 300">
// // // // // // //         <circle 
// // // // // // //           cx={200 - circle1.radius/2} 
// // // // // // //           cy="150" 
// // // // // // //           r={circle1.radius} 
// // // // // // //           fill={circle1.fillColor} 
// // // // // // //           stroke={circle1.borderColor} 
// // // // // // //           strokeWidth={circle1.strokeWidth} 
// // // // // // //         />
// // // // // // //         <circle 
// // // // // // //           cx={200 + circle2.radius/2} 
// // // // // // //           cy="150" 
// // // // // // //           r={circle2.radius} 
// // // // // // //           fill={circle2.fillColor} 
// // // // // // //           stroke={circle2.borderColor} 
// // // // // // //           strokeWidth={circle2.strokeWidth} 
// // // // // // //         />
// // // // // // //         <text x={200 - circle1.radius} y="150" textAnchor="middle">{circle1.label}</text>
// // // // // // //         <text x={200 + circle2.radius} y="150" textAnchor="middle">{circle2.label}</text>
// // // // // // //         <text x="200" y="150" textAnchor="middle">{intersectionLabel}</text>
// // // // // // //       </svg>
// // // // // // //       <div className="mt-4 space-y-4 w-full max-w-md">
// // // // // // //         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // // // // //         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // // // // //         <div className="flex flex-col space-y-2">
// // // // // // //           <div className="relative">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={intersectionLabel}
// // // // // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // // // //               className="border p-1 rounded w-full pr-16"
// // // // // // //               placeholder="Intersection Label"
// // // // // // //             />
// // // // // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // // // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // // // // //           </div>
// // // // // // //           <div className="flex flex-wrap gap-2">
// // // // // // //             <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩ (Intersection)</button>
// // // // // // //             <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪ (Union)</button>
// // // // // // //             <button onClick={() => addSymbol('∖')} className="px-2 py-1 bg-blue-500 text-white rounded">∖ (Difference)</button>
// // // // // // //             <button onClick={() => addSymbol('⊕')} className="px-2 py-1 bg-blue-500 text-white rounded">⊕ (Symmetric Difference)</button>
// // // // // // //             <button onClick={() => addSymbol('ᶜ')} className="px-2 py-1 bg-blue-500 text-white rounded">ᶜ (Complement)</button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //         <button 
// // // // // // //           onClick={downloadSVG} 
// // // // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // // // //         >
// // // // // // //           Download SVG
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default VennGenerator;
// // // // // // import React, { useState, useRef } from 'react';
// // // // // // import { X, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight } from 'lucide-react';

// // // // // // const VennGenerator = () => {
// // // // // //   const initialCircle1 = { 
// // // // // //     label: 'Set A', 
// // // // // //     fillColor: '#ff000080', 
// // // // // //     borderColor: '#ff0000',
// // // // // //     strokeWidth: 2,
// // // // // //     radius: 70,
// // // // // //     x: 100,
// // // // // //     y: 150
// // // // // //   };
// // // // // //   const initialCircle2 = { 
// // // // // //     label: 'Set B', 
// // // // // //     fillColor: '#0000ff80', 
// // // // // //     borderColor: '#0000ff',
// // // // // //     strokeWidth: 2,
// // // // // //     radius: 70,
// // // // // //     x: 300,
// // // // // //     y: 150
// // // // // //   };
// // // // // //   const initialIntersectionLabel = 'A ∩ B';

// // // // // //   const [circle1, setCircle1] = useState(initialCircle1);
// // // // // //   const [circle2, setCircle2] = useState(initialCircle2);
// // // // // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // // // // //   const svgRef = useRef(null);

// // // // // //   const addSymbol = (symbol) => {
// // // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // // //   };

// // // // // //   const downloadSVG = () => {
// // // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // // //     const downloadLink = document.createElement("a");
// // // // // //     downloadLink.href = svgUrl;
// // // // // //     downloadLink.download = "venn_diagram.svg";
// // // // // //     document.body.appendChild(downloadLink);
// // // // // //     downloadLink.click();
// // // // // //     document.body.removeChild(downloadLink);
// // // // // //   };

// // // // // //   const ResetButton = ({ onClick, isDefault }) => (
// // // // // //     <button 
// // // // // //       onClick={onClick} 
// // // // // //       className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
// // // // // //       title={isDefault ? "Reset to default" : "Clear"}
// // // // // //     >
// // // // // //       {isDefault ? <RotateCcw size={16} /> : <X size={16} />}
// // // // // //     </button>
// // // // // //   );

// // // // // //   const moveCircle = (circle, setCircle, dx, dy) => {
// // // // // //     setCircle({
// // // // // //       ...circle,
// // // // // //       x: circle.x + dx,
// // // // // //       y: circle.y + dy
// // // // // //     });
// // // // // //   };

// // // // // //   const PositionControls = ({ circle, setCircle, initial }) => (
// // // // // //     <div className="mt-2">
// // // // // //       <label className="text-sm font-bold">Position</label>
// // // // // //       <div className="grid grid-cols-3 gap-2 mt-1">
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, -10, -10)} className="p-1 bg-gray-200 rounded"><ArrowUpLeft size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, 0, -10)} className="p-1 bg-gray-200 rounded"><ArrowUp size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, 10, -10)} className="p-1 bg-gray-200 rounded"><ArrowUpRight size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, -10, 0)} className="p-1 bg-gray-200 rounded"><ArrowLeft size={16} /></button>
// // // // // //         <button onClick={() => setCircle({...circle, x: initial.x, y: initial.y})} className="p-1 bg-gray-200 rounded"><RotateCcw size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, 10, 0)} className="p-1 bg-gray-200 rounded"><ArrowRight size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, -10, 10)} className="p-1 bg-gray-200 rounded"><ArrowDownLeft size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, 0, 10)} className="p-1 bg-gray-200 rounded"><ArrowDown size={16} /></button>
// // // // // //         <button onClick={() => moveCircle(circle, setCircle, 10, 10)} className="p-1 bg-gray-200 rounded"><ArrowDownRight size={16} /></button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   const CircleControls = ({ circle, setCircle, label, initial }) => (
// // // // // //     <div className="flex flex-col space-y-2 p-2 border rounded">
// // // // // //       <div className="relative">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={circle.label}
// // // // // //           onChange={(e) => setCircle({...circle, label: e.target.value})}
// // // // // //           className="border p-1 rounded w-full pr-16"
// // // // // //           placeholder={`${label} Label`}
// // // // // //         />
// // // // // //         <ResetButton onClick={() => setCircle({...circle, label: ''})} />
// // // // // //         <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
// // // // // //       </div>
// // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // //         <div className="flex flex-col relative">
// // // // // //           <label className="text-sm">Fill Color</label>
// // // // // //           <input
// // // // // //             type="color"
// // // // // //             value={circle.fillColor.slice(0, 7)}
// // // // // //             onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
// // // // // //             className="w-full h-8 border rounded"
// // // // // //           />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
// // // // // //         </div>
// // // // // //         <div className="flex flex-col relative">
// // // // // //           <label className="text-sm">Border Color</label>
// // // // // //           <input
// // // // // //             type="color"
// // // // // //             value={circle.borderColor}
// // // // // //             onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
// // // // // //             className="w-full h-8 border rounded"
// // // // // //           />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <div className="grid grid-cols-2 gap-2">
// // // // // //         <div className="flex flex-col relative">
// // // // // //           <label className="text-sm">Stroke Width</label>
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             value={circle.strokeWidth}
// // // // // //             onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
// // // // // //             className="border p-1 rounded w-full pr-16"
// // // // // //             min="0"
// // // // // //             max="10"
// // // // // //           />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
// // // // // //         </div>
// // // // // //         <div className="flex flex-col relative">
// // // // // //           <label className="text-sm">Radius</label>
// // // // // //           <input
// // // // // //             type="number"
// // // // // //             value={circle.radius}
// // // // // //             onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
// // // // // //             className="border p-1 rounded w-full pr-16"
// // // // // //             min="10"
// // // // // //             max="100"
// // // // // //           />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
// // // // // //           <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="flex flex-col items-center p-4">
// // // // // //       <svg ref={svgRef} width="400" height="300" viewBox="0 0 400 300">
// // // // // //         <circle 
// // // // // //           cx={circle1.x} 
// // // // // //           cy={circle1.y} 
// // // // // //           r={circle1.radius} 
// // // // // //           fill={circle1.fillColor} 
// // // // // //           stroke={circle1.borderColor} 
// // // // // //           strokeWidth={circle1.strokeWidth} 
// // // // // //         />
// // // // // //         <circle 
// // // // // //           cx={circle2.x} 
// // // // // //           cy={circle2.y} 
// // // // // //           r={circle2.radius} 
// // // // // //           fill={circle2.fillColor} 
// // // // // //           stroke={circle2.borderColor} 
// // // // // //           strokeWidth={circle2.strokeWidth} 
// // // // // //         />
// // // // // //         <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // // // // //         <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // // // // //         <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // // // // //       </svg>
// // // // // //       <div className="mt-4 space-y-4 w-full max-w-md">
// // // // // //         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // // // //         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // // // //         <div className="flex flex-col space-y-2">
// // // // // //           <div className="relative">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={intersectionLabel}
// // // // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // // //               className="border p-1 rounded w-full pr-16"
// // // // // //               placeholder="Intersection Label"
// // // // // //             />
// // // // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // // // //           </div>
// // // // // //           <div className="flex flex-wrap gap-2">
// // // // // //             <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩ (Intersection)</button>
// // // // // //             <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪ (Union)</button>
// // // // // //             <button onClick={() => addSymbol('∖')} className="px-2 py-1 bg-blue-500 text-white rounded">∖ (Difference)</button>
// // // // // //             <button onClick={() => addSymbol('⊕')} className="px-2 py-1 bg-blue-500 text-white rounded">⊕ (Symmetric Difference)</button>
// // // // // //             <button onClick={() => addSymbol('ᶜ')} className="px-2 py-1 bg-blue-500 text-white rounded">ᶜ (Complement)</button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <button 
// // // // // //           onClick={downloadSVG} 
// // // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // // //         >
// // // // // //           Download SVG
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default VennGenerator;
// // // // // import React, { useState, useRef } from 'react';
// // // // // import { ResetButton } from './VennGeneratorHelpers';
// // // // // import { CircleControls } from './VennGeneratorHelpers';
// // // // // import UniverseControls from './VennGeneratorHelpers';

// // // // // const VennGenerator = () => {
// // // // //   const initialUniverse = {
// // // // //     enabled: false,
// // // // //     label: 'U',
// // // // //     fillColor: '#f0f0f080',
// // // // //     borderColor: '#000000',
// // // // //     strokeWidth: 2,
// // // // //     width: 380,
// // // // //     height: 280
// // // // //   };

// // // // //   const initialCircle1 = { 
// // // // //     label: 'Set A', 
// // // // //     fillColor: '#ff000080', 
// // // // //     borderColor: '#ff0000',
// // // // //     strokeWidth: 2,
// // // // //     radius: 70,
// // // // //     x: 150,
// // // // //     y: 150
// // // // //   };

// // // // //   const initialCircle2 = { 
// // // // //     label: 'Set B', 
// // // // //     fillColor: '#0000ff80', 
// // // // //     borderColor: '#0000ff',
// // // // //     strokeWidth: 2,
// // // // //     radius: 70,
// // // // //     x: 250,
// // // // //     y: 150
// // // // //   };

// // // // //   const initialIntersectionLabel = 'A ∩ B';

// // // // //   const [universe, setUniverse] = useState(initialUniverse);
// // // // //   const [circle1, setCircle1] = useState(initialCircle1);
// // // // //   const [circle2, setCircle2] = useState(initialCircle2);
// // // // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // // // //   const svgRef = useRef(null);

// // // // //   const addSymbol = (symbol) => {
// // // // //     setIntersectionLabel(prev => prev + symbol);
// // // // //   };

// // // // //   const downloadSVG = () => {
// // // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // // //     const downloadLink = document.createElement("a");
// // // // //     downloadLink.href = svgUrl;
// // // // //     downloadLink.download = "venn_diagram.svg";
// // // // //     document.body.appendChild(downloadLink);
// // // // //     downloadLink.click();
// // // // //     document.body.removeChild(downloadLink);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col items-center p-4">
// // // // //       <svg ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// // // // //         {universe.enabled && (
// // // // //           <rect 
// // // // //             x="0" 
// // // // //             y="0" 
// // // // //             width={universe.width} 
// // // // //             height={universe.height} 
// // // // //             fill={universe.fillColor} 
// // // // //             stroke={universe.borderColor} 
// // // // //             strokeWidth={universe.strokeWidth} 
// // // // //           />
// // // // //         )}
// // // // //         <circle 
// // // // //           cx={circle1.x} 
// // // // //           cy={circle1.y} 
// // // // //           r={circle1.radius} 
// // // // //           fill={circle1.fillColor} 
// // // // //           stroke={circle1.borderColor} 
// // // // //           strokeWidth={circle1.strokeWidth} 
// // // // //         />
// // // // //         <circle 
// // // // //           cx={circle2.x} 
// // // // //           cy={circle2.y} 
// // // // //           r={circle2.radius} 
// // // // //           fill={circle2.fillColor} 
// // // // //           stroke={circle2.borderColor} 
// // // // //           strokeWidth={circle2.strokeWidth} 
// // // // //         />
// // // // //         {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// // // // //         <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // // // //         <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // // // //         <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // // // //       </svg>
// // // // //       <div className="mt-4 space-y-4 w-full max-w-md">
// // // // //         <div className="flex items-center space-x-2">
// // // // //           <input
// // // // //             type="checkbox"
// // // // //             checked={universe.enabled}
// // // // //             onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // // //             id="universe-toggle"
// // // // //           />
// // // // //           <label htmlFor="universe-toggle" className="text-sm font-bold">Enable Universe</label>
// // // // //         </div>
// // // // //         {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // // //         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // // //         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // // //         <div className="flex flex-col space-y-2">
// // // // //           <div className="relative">
// // // // //             <input
// // // // //               type="text"
// // // // //               value={intersectionLabel}
// // // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // //               className="border p-1 rounded w-full pr-16"
// // // // //               placeholder="Intersection Label"
// // // // //             />
// // // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // // //           </div>
// // // // //           <div className="flex flex-wrap gap-2">
// // // // //             <button onClick={() => addSymbol('∩')} className="px-2 py-1 bg-blue-500 text-white rounded">∩ (Intersection)</button>
// // // // //             <button onClick={() => addSymbol('∪')} className="px-2 py-1 bg-blue-500 text-white rounded">∪ (Union)</button>
// // // // //             <button onClick={() => addSymbol('∖')} className="px-2 py-1 bg-blue-500 text-white rounded">∖ (Difference)</button>
// // // // //             <button onClick={() => addSymbol('⊕')} className="px-2 py-1 bg-blue-500 text-white rounded">⊕ (Symmetric Difference)</button>
// // // // //             <button onClick={() => addSymbol('ᶜ')} className="px-2 py-1 bg-blue-500 text-white rounded">ᶜ (Complement)</button>
// // // // //           </div>
// // // // //         </div>
// // // // //         <button 
// // // // //           onClick={downloadSVG} 
// // // // //           className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
// // // // //         >
// // // // //           Download SVG
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default VennGenerator;
// // // // import React, { useState, useRef } from 'react';
// // // // import { ResetButton } from './VennGeneratorHelpers';
// // // // import { CircleControls } from './VennGeneratorHelpers';
// // // // import UniverseControls from './VennGeneratorHelpers';
// // // // import styles from './VennGenerator.module.css';

// // // // const VennGenerator = () => {
// // // //   const initialUniverse = {
// // // //     enabled: false,
// // // //     label: 'U',
// // // //     fillColor: '#f0f0f080',
// // // //     borderColor: '#000000',
// // // //     strokeWidth: 2,
// // // //     width: 380,
// // // //     height: 280
// // // //   };

// // // //   const initialCircle1 = { 
// // // //     label: 'Set A', 
// // // //     fillColor: '#ff000080', 
// // // //     borderColor: '#ff0000',
// // // //     strokeWidth: 2,
// // // //     radius: 70,
// // // //     x: 150,
// // // //     y: 150
// // // //   };

// // // //   const initialCircle2 = { 
// // // //     label: 'Set B', 
// // // //     fillColor: '#0000ff80', 
// // // //     borderColor: '#0000ff',
// // // //     strokeWidth: 2,
// // // //     radius: 70,
// // // //     x: 250,
// // // //     y: 150
// // // //   };

// // // //   const initialIntersectionLabel = 'A ∩ B';

// // // //   const [universe, setUniverse] = useState(initialUniverse);
// // // //   const [circle1, setCircle1] = useState(initialCircle1);
// // // //   const [circle2, setCircle2] = useState(initialCircle2);
// // // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // // //   const svgRef = useRef(null);

// // // //   const addSymbol = (symbol) => {
// // // //     setIntersectionLabel(prev => prev + symbol);
// // // //   };

// // // //   const downloadSVG = () => {
// // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // //     const downloadLink = document.createElement("a");
// // // //     downloadLink.href = svgUrl;
// // // //     downloadLink.download = "venn_diagram.svg";
// // // //     document.body.appendChild(downloadLink);
// // // //     downloadLink.click();
// // // //     document.body.removeChild(downloadLink);
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <svg ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// // // //         {universe.enabled && (
// // // //           <rect 
// // // //             x="0" 
// // // //             y="0" 
// // // //             width={universe.width} 
// // // //             height={universe.height} 
// // // //             fill={universe.fillColor} 
// // // //             stroke={universe.borderColor} 
// // // //             strokeWidth={universe.strokeWidth} 
// // // //           />
// // // //         )}
// // // //         <circle 
// // // //           cx={circle1.x} 
// // // //           cy={circle1.y} 
// // // //           r={circle1.radius} 
// // // //           fill={circle1.fillColor} 
// // // //           stroke={circle1.borderColor} 
// // // //           strokeWidth={circle1.strokeWidth} 
// // // //         />
// // // //         <circle 
// // // //           cx={circle2.x} 
// // // //           cy={circle2.y} 
// // // //           r={circle2.radius} 
// // // //           fill={circle2.fillColor} 
// // // //           stroke={circle2.borderColor} 
// // // //           strokeWidth={circle2.strokeWidth} 
// // // //         />
// // // //         {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// // // //         <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // // //         <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // // //         <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // // //       </svg>
// // // //       <div className={styles.controls}>
// // // //         <div className={styles.controlGroup}>
// // // //           <label className={styles.label}>
// // // //             <input
// // // //               type="checkbox"
// // // //               checked={universe.enabled}
// // // //               onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // //               className={styles.checkbox}
// // // //             />
// // // //             Enable Universe
// // // //           </label>
// // // //         </div>
// // // //         {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // //         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // //         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // //         <div className={styles.controlGroup}>
// // // //           <div className="relative">
// // // //             <input
// // // //               type="text"
// // // //               value={intersectionLabel}
// // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // //               className={styles.input}
// // // //               placeholder="Intersection Label"
// // // //             />
// // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // //           </div>
// // // //           <div className="flex flex-wrap gap-2 mt-2">
// // // //             <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// // // //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// // // //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// // // //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// // // //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// // // //           </div>
// // // //         </div>
// // // //         <button 
// // // //           onClick={downloadSVG} 
// // // //           className={styles.downloadButton}
// // // //         >
// // // //           Download SVG
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VennGenerator;

// // // // import React, { useState, useRef } from 'react';
// // // // import { ResetButton } from './VennGeneratorHelpers';
// // // // import { CircleControls } from './VennGeneratorHelpers';
// // // // import UniverseControls from './VennGeneratorHelpers';
// // // // import styles from './VennGenerator.module.css';
// // // // import { Download } from 'lucide-react';

// // // // const VennGenerator = () => {
// // // //   const initialUniverse = {
// // // //     enabled: false,
// // // //     label: 'U',
// // // //     fillColor: '#f0f0f080',
// // // //     borderColor: '#000000',
// // // //     strokeWidth: 2,
// // // //     width: 380,
// // // //     height: 280
// // // //   };

// // // //   const initialCircle1 = { 
// // // //     label: 'Set A', 
// // // //     fillColor: '#ff000080', 
// // // //     borderColor: '#ff0000',
// // // //     strokeWidth: 2,
// // // //     radius: 70,
// // // //     x: 150,
// // // //     y: 150
// // // //   };

// // // //   const initialCircle2 = { 
// // // //     label: 'Set B', 
// // // //     fillColor: '#0000ff80', 
// // // //     borderColor: '#0000ff',
// // // //     strokeWidth: 2,
// // // //     radius: 70,
// // // //     x: 250,
// // // //     y: 150
// // // //   };

// // // //   const initialIntersectionLabel = 'A ∩ B';

// // // //   const [universe, setUniverse] = useState(initialUniverse);
// // // //   const [circle1, setCircle1] = useState(initialCircle1);
// // // //   const [circle2, setCircle2] = useState(initialCircle2);
// // // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // // //   const svgRef = useRef(null);

// // // //   const addSymbol = (symbol) => {
// // // //     setIntersectionLabel(prev => prev + symbol);
// // // //   };

// // // //   const downloadSVG = () => {
// // // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // // //     const svgUrl = URL.createObjectURL(svgBlob);
// // // //     const downloadLink = document.createElement("a");
// // // //     downloadLink.href = svgUrl;
// // // //     downloadLink.download = "venn_diagram.svg";
// // // //     document.body.appendChild(downloadLink);
// // // //     downloadLink.click();
// // // //     document.body.removeChild(downloadLink);
// // // //   };

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.upperContainer}>
// // // //         {/* <div className={styles.controlGroupLeft}>
// // // //           <label className={styles.label}>
// // // //             <input
// // // //               type="checkbox"
// // // //               checked={universe.enabled}
// // // //               onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // //               className={styles.checkbox}
// // // //             />
// // // //             Enable Universe
// // // //           </label>
// // // //           {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // //         </div> */}

// // // //         {/* <div className={styles.controlGroupLeft}>
// // // //         <label className={styles.label} style={{height:'40px'}}>
// // // //             <input
// // // //             type="checkbox"
// // // //             checked={universe.enabled}
// // // //             onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // //             className={styles.checkbox}
// // // //             style={{height:'20px'}}
// // // //             />
// // // //             Enable Universe
// // // //         </label>
// // // //         <div style={{ height: '350px' }} className={styles.universeControlsContainer}>
// // // //             {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // //         </div>
// // // //         </div> */}
// // // // {/* 
// // // // <div className={styles.controlGroupLeft}>
// // // //   <label className={styles.label}>
// // // //     <input
// // // //       type="checkbox"
// // // //       checked={universe.enabled}
// // // //       onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // //       className={styles.checkbox}
// // // //     />
// // // //     Enable Universe
// // // //   </label>
// // // //   <div className={styles.universeControlsContainer}>
// // // //     {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // //   </div>
// // // // </div> */}

// // // // <div className={styles.controlGroupLeft}>
// // // //     <br></br>
// // // //     <br></br>
// // // //     <br></br>
   
   
// // // //   <div className={styles.universeToggle}>
// // // //     <label className={styles.label}>
// // // //       <input
// // // //         type="checkbox"
// // // //         checked={universe.enabled}
// // // //         onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // //         className={styles.checkbox}
// // // //       />
// // // //       Enable Universe
// // // //     </label>
// // // //   </div>
// // // //   {universe.enabled && (
// // // //     <div className={styles.universeControlsContainer}>
// // // //       <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
// // // //     </div>
// // // //   )}
// // // // </div>
// // // //         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// // // //           {universe.enabled && (
// // // //             <rect 
// // // //               x="0" 
// // // //               y="0" 
// // // //               width={universe.width} 
// // // //               height={universe.height} 
// // // //               fill={universe.fillColor} 
// // // //               stroke={universe.borderColor} 
// // // //               strokeWidth={universe.strokeWidth} 
// // // //             />
// // // //           )}
// // // //           <circle 
// // // //             cx={circle1.x} 
// // // //             cy={circle1.y} 
// // // //             r={circle1.radius} 
// // // //             fill={circle1.fillColor} 
// // // //             stroke={circle1.borderColor} 
// // // //             strokeWidth={circle1.strokeWidth} 
// // // //           />
// // // //           <circle 
// // // //             cx={circle2.x} 
// // // //             cy={circle2.y} 
// // // //             r={circle2.radius} 
// // // //             fill={circle2.fillColor} 
// // // //             stroke={circle2.borderColor} 
// // // //             strokeWidth={circle2.strokeWidth} 
// // // //           />
// // // //           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// // // //           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // // //           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // // //           <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // // //         </svg>
// // // //         <div className={styles.buttonContainer}>
// // // //           <button 
// // // //             onClick={downloadSVG} 
// // // //             className={styles.downloadButton}
// // // //           >
// // // //             {/* Download SVG */}
// // // //             <Download />
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //       <div className={styles.controls}>
// // // //         <div className={styles.circleControlsContainer}>
// // // //           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // //           <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // //         </div>
// // // //         <div className={styles.intersectionControls}>
// // // //   <label className={styles.intersectionLabel}>Intersection Label:</label>
// // // //   <div className={styles.intersectionInputGroup}>
// // // //     <input
// // // //       type="text"
// // // //       value={intersectionLabel}
// // // //       onChange={(e) => setIntersectionLabel(e.target.value)}
// // // //       className={styles.intersectionInput}
// // // //       placeholder="Intersection Label"
// // // //     />
// // // //     <ResetButton onClick={() => setIntersectionLabel('')} />
// // // //     <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // //   </div>
// // // //   <div className={styles.symbolButtonGroup}>
// // // //     {/* <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩</button>
// // // //     <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪</button>
// // // //     <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖</button>
// // // //     <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕</button>
// // // //     <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ</button> */}
// // // //      <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// // // //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// // // //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// // // //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// // // //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// // // //   </div>
// // // // </div>
// // // //         {/* <div className={styles.controlGroup}>
// // // //           <div className="relative">
// // // //             <input
// // // //               type="text"
// // // //               value={intersectionLabel}
// // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // //               className={styles.input}
// // // //               placeholder="Intersection Label"
// // // //             />
// // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // //           </div>
// // // //           <div className="flex flex-wrap gap-2 mt-2">
// // // //             <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// // // //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// // // //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// // // //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// // // //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// // // //           </div>
// // // //         </div> */}
// // // //       </div>
// // // //     </div>
// // // //   );

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //     <div className={styles.upperContainer}>
// // // // //     <div className={styles.controlGroupLeft}>
// // // // //           <label className={styles.label}>
// // // // //             <input
// // // // //               type="checkbox"
// // // // //               checked={universe.enabled}
// // // // //               onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // // //               className={styles.checkbox}
// // // // //             />
// // // // //             Enable Universe
// // // // //           </label>
// // // // //           {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />}
// // // // //         </div>
// // // // //         {/* {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />} */}
// // // // //       <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// // // // //         {universe.enabled && (
// // // // //           <rect 
// // // // //             x="0" 
// // // // //             y="0" 
// // // // //             width={universe.width} 
// // // // //             height={universe.height} 
// // // // //             fill={universe.fillColor} 
// // // // //             stroke={universe.borderColor} 
// // // // //             strokeWidth={universe.strokeWidth} 
// // // // //           />
// // // // //         )}
// // // // //         <circle 
// // // // //           cx={circle1.x} 
// // // // //           cy={circle1.y} 
// // // // //           r={circle1.radius} 
// // // // //           fill={circle1.fillColor} 
// // // // //           stroke={circle1.borderColor} 
// // // // //           strokeWidth={circle1.strokeWidth} 
// // // // //         />
// // // // //         <circle 
// // // // //           cx={circle2.x} 
// // // // //           cy={circle2.y} 
// // // // //           r={circle2.radius} 
// // // // //           fill={circle2.fillColor} 
// // // // //           stroke={circle2.borderColor} 
// // // // //           strokeWidth={circle2.strokeWidth} 
// // // // //         />
// // // // //         {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// // // // //         <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // // // //         <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // // // //         <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // // // //       </svg>
// // // // //       <div className={styles.buttonContainer} >
// // // // //       <button 
// // // // //           onClick={downloadSVG} 
// // // // //           className={styles.downloadButton}
// // // // //         >
// // // // //           Download SVG
// // // // //           <Download />
// // // // //         </button>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className={styles.controls}>
// // // // //         {/* <div className={styles.controlGroup}>
// // // // //           <label className={styles.label}>
// // // // //             <input
// // // // //               type="checkbox"
// // // // //               checked={universe.enabled}
// // // // //               onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // // // //               className={styles.checkbox}
// // // // //             />
// // // // //             Enable Universe
// // // // //           </label>
// // // // //         </div>
// // // // //         {universe.enabled && <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />} */}
// // // // //         <div className={styles.circleControlsContainer}>
// // // // //           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // // // //           <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // // // //         </div>
// // // // //         <div className={styles.controlGroup}>
// // // // //           <div className="relative">
// // // // //             <input
// // // // //               type="text"
// // // // //               value={intersectionLabel}
// // // // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // // // //               className={styles.input}
// // // // //               placeholder="Intersection Label"
// // // // //             />
// // // // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // // // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // // // //           </div>
// // // // //           <div className="flex flex-wrap gap-2 mt-2">
// // // // //             <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// // // // //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// // // // //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// // // // //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// // // // //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// // // // //           </div>
// // // // //         </div>
// // // // //         {/* <button 
// // // // //           onClick={downloadSVG} 
// // // // //           className={styles.downloadButton}
// // // // //         >
// // // // //           Download SVG
// // // // //         </button> */}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // };

// // // // export default VennGenerator;
// // // import React, { useState, useRef, useMemo } from 'react';
// // // import { ResetButton } from './VennGeneratorHelpers';
// // // import { CircleControls } from './VennGeneratorHelpers';
// // // import UniverseControls from './VennGeneratorHelpers';
// // // import styles from './VennGenerator.module.css';
// // // import { Download } from 'lucide-react';

// // // const VennGenerator = () => {
// // //   const initialUniverse = {
// // //     enabled: false,
// // //     label: 'U',
// // //     fillColor: '#f0f0f080',
// // //     borderColor: '#000000',
// // //     strokeWidth: 2,
// // //     width: 380,
// // //     height: 280
// // //   };

// // //   const initialCircle1 = { 
// // //     label: 'Set A', 
// // //     fillColor: '#ff000080', 
// // //     borderColor: '#ff0000',
// // //     strokeWidth: 2,
// // //     radius: 70,
// // //     x: 150,
// // //     y: 150
// // //   };

// // //   const initialCircle2 = { 
// // //     label: 'Set B', 
// // //     fillColor: '#0000ff80', 
// // //     borderColor: '#0000ff',
// // //     strokeWidth: 2,
// // //     radius: 70,
// // //     x: 250,
// // //     y: 150
// // //   };

// // //   const initialIntersectionLabel = 'A ∩ B';

// // //   const [universe, setUniverse] = useState(initialUniverse);
// // //   const [circle1, setCircle1] = useState(initialCircle1);
// // //   const [circle2, setCircle2] = useState(initialCircle2);
// // //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// // //   const [intersectionColor, setIntersectionColor] = useState('#00ff0080'); // Default semi-transparent green
// // //   const [showIntersection, setShowIntersection] = useState(false);
// // //   const svgRef = useRef(null);

// // //   const addSymbol = (symbol) => {
// // //     setIntersectionLabel(prev => prev + symbol);
// // //   };

// // //   const downloadSVG = () => {
// // //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// // //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// // //     const svgUrl = URL.createObjectURL(svgBlob);
// // //     const downloadLink = document.createElement("a");
// // //     downloadLink.href = svgUrl;
// // //     downloadLink.download = "venn_diagram.svg";
// // //     document.body.appendChild(downloadLink);
// // //     downloadLink.click();
// // //     document.body.removeChild(downloadLink);
// // //   };

// // //   const calculateIntersection = useMemo(() => {
// // //     const dx = circle2.x - circle1.x;
// // //     const dy = circle2.y - circle1.y;
// // //     const d = Math.sqrt(dx * dx + dy * dy);

// // //     if (d > circle1.radius + circle2.radius) return null; // No intersection
// // //     if (d < Math.abs(circle1.radius - circle2.radius)) return null; // One circle is inside the other

// // //     const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
// // //     const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

// // //     const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
// // //     const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

// // //     const x3 = x2 + h * (circle2.y - circle1.y) / d;
// // //     const y3 = y2 - h * (circle2.x - circle1.x) / d;

// // //     const x4 = x2 - h * (circle2.y - circle1.y) / d;
// // //     const y4 = y2 + h * (circle2.x - circle1.x) / d;

// // //     return { x3, y3, x4, y4 };
// // //   }, [circle1, circle2]);

// // //   const intersectionPath = useMemo(() => {
// // //     const intersection = calculateIntersection;
// // //     if (!intersection) return '';

// // //     const { x3, y3, x4, y4 } = intersection;
// // //     const path = `
// // //       M ${x3} ${y3}
// // //       A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// // //       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// // //     `;
// // //     return path;
// // //   }, [calculateIntersection, circle1.radius, circle2.radius]);

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.upperContainer}>
// // //         <div className={styles.controlGroupLeft}>
// // //           <br></br>
// // //           <br></br>
// // //           <br></br>
// // //           <div className={styles.universeToggle}>
// // //             <label className={styles.label}>
// // //               <input
// // //                 type="checkbox"
// // //                 checked={universe.enabled}
// // //                 onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// // //                 className={styles.checkbox}
// // //               />
// // //               Enable Universe
// // //             </label>
// // //           </div>
// // //           {universe.enabled && (
// // //             <div className={styles.universeControlsContainer}>
// // //               <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
// // //             </div>
// // //           )}
// // //         </div>
// // //         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// // //           {universe.enabled && (
// // //             <rect 
// // //               x="0" 
// // //               y="0" 
// // //               width={universe.width} 
// // //               height={universe.height} 
// // //               fill={universe.fillColor} 
// // //               stroke={universe.borderColor} 
// // //               strokeWidth={universe.strokeWidth} 
// // //             />
// // //           )}
// // //           <circle 
// // //             cx={circle1.x} 
// // //             cy={circle1.y} 
// // //             r={circle1.radius} 
// // //             fill={circle1.fillColor} 
// // //             stroke={circle1.borderColor} 
// // //             strokeWidth={circle1.strokeWidth} 
// // //           />
// // //           <circle 
// // //             cx={circle2.x} 
// // //             cy={circle2.y} 
// // //             r={circle2.radius} 
// // //             fill={circle2.fillColor} 
// // //             stroke={circle2.borderColor} 
// // //             strokeWidth={circle2.strokeWidth} 
// // //           />
// // //           {showIntersection && intersectionPath && (
// // //             <path
// // //               d={intersectionPath}
// // //               fill={intersectionColor}
// // //               stroke="none"
// // //             />
// // //           )}
// // //           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// // //           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// // //           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// // //           <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// // //         </svg>
// // //         <div className={styles.buttonContainer}>
// // //           <button 
// // //             onClick={downloadSVG} 
// // //             className={styles.downloadButton}
// // //           >
// // //             <Download />
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <div className={styles.controls}>
// // //         <div className={styles.circleControlsContainer}>
// // //           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// // //           <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// // //         </div>
// // //         <div className={styles.intersectionControls}>
// // //           <label className={styles.intersectionLabel}>Intersection Label:</label>
// // //           <div className={styles.intersectionInputGroup}>
// // //             <input
// // //               type="text"
// // //               value={intersectionLabel}
// // //               onChange={(e) => setIntersectionLabel(e.target.value)}
// // //               className={styles.intersectionInput}
// // //               placeholder="Intersection Label"
// // //             />
// // //             <ResetButton onClick={() => setIntersectionLabel('')} />
// // //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// // //           </div>
// // //           <div className={styles.symbolButtonGroup}>
// // //             <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// // //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// // //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// // //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// // //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// // //           </div>
// // //           <div className={styles.intersectionHighlight}>
// // //             <label>
// // //               <input
// // //                 type="checkbox"
// // //                 checked={showIntersection}
// // //                 onChange={(e) => setShowIntersection(e.target.checked)}
// // //               />
// // //               Highlight Intersection
// // //             </label>
// // //             <input
// // //               type="color"
// // //               value={intersectionColor.slice(0, 7)}
// // //               onChange={(e) => setIntersectionColor(e.target.value + '80')}
// // //               disabled={!showIntersection}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VennGenerator;
// // import React, { useState, useRef, useMemo } from 'react';
// // import { ResetButton } from './VennGeneratorHelpers';
// // import { CircleControls } from './VennGeneratorHelpers';
// // import UniverseControls from './VennGeneratorHelpers';
// // import styles from './VennGenerator.module.css';
// // import { Download } from 'lucide-react';

// // const VennGenerator = () => {
// //   const initialUniverse = {
// //     enabled: false,
// //     label: 'U',
// //     fillColor: '#f0f0f080',
// //     borderColor: '#000000',
// //     strokeWidth: 2,
// //     width: 380,
// //     height: 280
// //   };

// //   // const initialCircle1 = { 
// //   //   label: 'Set A', 
// //   //   fillColor: '#ff000080', 
// //   //   borderColor: '#ff0000',
// //   //   strokeWidth: 2,
// //   //   radius: 70,
// //   //   x: 150,
// //   //   y: 150
// //   // };

// //   // const initialCircle2 = { 
// //   //   label: 'Set B', 
// //   //   fillColor: '#0000ff80', 
// //   //   borderColor: '#0000ff',
// //   //   strokeWidth: 2,
// //   //   radius: 70,
// //   //   x: 250,
// //   //   y: 150
// //   // };


// //   const initialCircle1 = { 
// //     label: 'Set A', 
// //     fillColor: 'none',  // Changed from '#ff000080' to 'none'
// //     borderColor: 'black',
// //     strokeWidth: .5,
// //     radius: 70,
// //     x: 150,
// //     y: 150
// //   };
  
// //   const initialCircle2 = { 
// //     label: 'Set B', 
// //     fillColor: 'none',  // Changed from '#0000ff80' to 'none'
// //     borderColor: 'black',
// //     strokeWidth: .5,
// //     radius: 70,
// //     x: 250,
// //     y: 150
// //   };

// //   const initialIntersectionLabel = '';

// //   const [universe, setUniverse] = useState(initialUniverse);
// //   const [circle1, setCircle1] = useState(initialCircle1);
// //   const [circle2, setCircle2] = useState(initialCircle2);
// //   const [intersectionLabel, setIntersectionLabel] = useState(initialIntersectionLabel);
// //   const svgRef = useRef(null);

// //   // const [operations, setOperations] = useState({
// //   //   intersection: { show: false, color: '#00ff0080' },
// //   //   union: { show: false, color: '#ffa50080' },
// //   //   difference: { show: false, color: '#ff00ff80' },
// //   //   symmetricDifference: { show: false, color: '#00ffff80' },
// //   //   complement: { show: false, color: '#ffff0080' },
// //   // });


// //   // const [operations, setOperations] = useState({
// //   //   intersection: { show: false, color: '#00ff0080' },
// //   //   union: { show: false, color: '#ffa50080' },
// //   //   differenceAB: { show: false, color: '#ff00ff80' },
// //   //   differenceBA: { show: false, color: '#ff00ff80' },
// //   //   symmetricDifference: { show: false, color: '#00ffff80' },
// //   //   complement: { show: false, color: '#ffff0080' },
// //   // });

// // const [operations, setOperations] = useState({
// //   intersection: { show: false, color: '#00ff0080', label: 'A ∩ B' },
// //   union: { show: false, color: '#ffa50080', label: 'A ∪ B' },
// //   differenceAB: { show: false, color: '#ff00ff80', label: 'A \\ B' },
// //   differenceBA: { show: false, color: '#ff00ff80', label: 'B \\ A' },
// //   symmetricDifference: { show: false, color: '#00ffff80', label: 'A ⊕ B' },
// //   complement: { show: false, color: '#ffff0080', label: 'A\'' },
// // });

// //   const addSymbol = (symbol) => {
// //     setIntersectionLabel(prev => prev + symbol);
// //   };

// //   const downloadSVG = () => {
// //     const svgData = new XMLSerializer().serializeToString(svgRef.current);
// //     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
// //     const svgUrl = URL.createObjectURL(svgBlob);
// //     const downloadLink = document.createElement("a");
// //     downloadLink.href = svgUrl;
// //     downloadLink.download = "venn_diagram.svg";
// //     document.body.appendChild(downloadLink);
// //     downloadLink.click();
// //     document.body.removeChild(downloadLink);
// //   };

// //   const calculateIntersection = useMemo(() => {
// //     const dx = circle2.x - circle1.x;
// //     const dy = circle2.y - circle1.y;
// //     const d = Math.sqrt(dx * dx + dy * dy);

// //     if (d > circle1.radius + circle2.radius) return null; // No intersection
// //     if (d < Math.abs(circle1.radius - circle2.radius)) return null; // One circle is inside the other

// //     const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
// //     const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

// //     const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
// //     const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

// //     const x3 = x2 + h * (circle2.y - circle1.y) / d;
// //     const y3 = y2 - h * (circle2.x - circle1.x) / d;

// //     const x4 = x2 - h * (circle2.y - circle1.y) / d;
// //     const y4 = y2 + h * (circle2.x - circle1.x) / d;

// //     return { x3, y3, x4, y4 };
// //   }, [circle1, circle2]);

// //   const intersectionPath = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return '';

// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// //       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// //     `;
// //   }, [calculateIntersection, circle1.radius, circle2.radius]);

// //   const unionPath = useMemo(() => {
// //     return `
// //       M ${circle1.x - circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //       M ${circle2.x - circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //     `;
// //   }, [circle1, circle2]);

// //   // const differencePath = useMemo(() => {
// //   //   const intersection = calculateIntersection;
// //   //   if (!intersection) return '';

// //   //   const { x3, y3, x4, y4 } = intersection;
// //   //   return `
// //   //     M ${circle1.x - circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //   //     M ${x3} ${y3}
// //   //     A ${circle2.radius} ${circle2.radius} 0 0 1 ${x4} ${y4}
// //   //     A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
// //   //   `;
// //   // }, [circle1, circle2, calculateIntersection]);

// //   // const differencePathAB = useMemo(() => {
// //   //   const intersection = calculateIntersection;
// //   //   if (!intersection) return `
// //   //     M ${circle1.x - circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //   //   `;
  
// //   //   const { x3, y3, x4, y4 } = intersection;
// //   //   return `
// //   //     M ${x3} ${y3}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${x4} ${y4}
// //   //     A ${circle2.radius} ${circle2.radius} 0 0 0 ${x3} ${y3}
// //   //   `;
// //   // }, [circle1, circle2, calculateIntersection]);
  
// //   // const differencePathBA = useMemo(() => {
// //   //   const intersection = calculateIntersection;
// //   //   if (!intersection) return `
// //   //     M ${circle2.x - circle2.radius} ${circle2.y}
// //   //     A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //   //     A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //   //   `;
  
// //   //   const { x3, y3, x4, y4 } = intersection;
// //   //   return `
// //   //     M ${x3} ${y3}
// //   //     A ${circle2.radius} ${circle2.radius} 0 1 0 ${x4} ${y4}
// //   //     A ${circle1.radius} ${circle1.radius} 0 0 1 ${x3} ${y3}
// //   //   `;
// //   // }, [circle1, circle2, calculateIntersection]);
  
// //   const differencePathAB = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return `
// //       M ${circle1.x - circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //     `;
  
// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle1.radius} ${circle1.radius} 0 1 0 ${x4} ${y4}
// //       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// //     `;
// //   }, [circle1, circle2, calculateIntersection]);
  
// //   // Keep differencePathBA unchanged
// //   const differencePathBA = useMemo(() => {
// //     const intersection = calculateIntersection;
// //     if (!intersection) return `
// //       M ${circle2.x - circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //     `;
  
// //     const { x3, y3, x4, y4 } = intersection;
// //     return `
// //       M ${x3} ${y3}
// //       A ${circle2.radius} ${circle2.radius} 0 1 1 ${x4} ${y4}
// //       A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
// //     `;
// //   }, [circle1, circle2, calculateIntersection]);
  
// //   // const symmetricDifferencePath = useMemo(() => {
// //   //   const intersection = calculateIntersection;
// //   //   if (!intersection) return unionPath;

// //   //   const { x3, y3, x4, y4 } = intersection;
// //   //   return `
// //   //     M ${circle1.x - circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
// //   //     A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
// //   //     M ${circle2.x - circle2.radius} ${circle2.y}
// //   //     A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
// //   //     A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
// //   //     M ${x3} ${y3}
// //   //     A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
// //   //     A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
// //   //   `;
// //   // }, [circle1, circle2, calculateIntersection, unionPath]);

// //   const symmetricDifferencePath = useMemo(() => {
// //     // Simply combine the paths for A\B and B\A
// //     return `${differencePathAB} ${differencePathBA}`;
// //   }, [differencePathAB, differencePathBA]);
 
// //   const complementPath = useMemo(() => {
   
// //     return `
// //       M 0 0
// //       H ${universe.width}
// //       V ${universe.height}
// //       H 0
// //       V 0
// //       M ${circle1.x - circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x + circle1.radius} ${circle1.y}
// //       A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x - circle1.radius} ${circle1.y}
// //     `;
// //   }, [circle1, universe]);

// //   // const toggleOperation = (operation) => {
// //   //   setOperations(prev => ({
// //   //     ...prev,
// //   //     [operation]: { ...prev[operation], show: !prev[operation].show }
// //   //   }));
// //   // };

// //   // const toggleOperation = (operation) => {
// //   //   setOperations(prev => {
// //   //     const newOperations = {
// //   //       ...prev,
// //   //       [operation]: { ...prev[operation], show: !prev[operation].show }
// //   //     };
      
// //   //     // If any operation is being turned on, set circle fills to 'none'
// //   //     if (newOperations[operation].show) {
// //   //       setCircle1(c => ({ ...c, fillColor: 'none' }));
// //   //       setCircle2(c => ({ ...c, fillColor: 'none' }));
// //   //     }
      
// //   //     return newOperations;
// //   //   });
// //   // };
  
// //   // const toggleOperation = (operation) => {
// //   //   setOperations(prev => {
// //   //     const newOperations = { ...prev };
// //   //     Object.keys(newOperations).forEach(key => {
// //   //       if (key === operation) {
// //   //         newOperations[key].show = !newOperations[key].show;
// //   //       } else {
// //   //         newOperations[key].show = false;
// //   //       }
// //   //     });
      
// //   //     const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
// //   //     setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
// //   //     setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
// //   //     return newOperations;
// //   //   });
// //   // };

// //   // const toggleOperation = (operation) => {
// //   //   setOperations(prev => {
// //   //     const newOperations = { ...prev };
// //   //     Object.keys(newOperations).forEach(key => {
// //   //       if (key === operation) {
// //   //         newOperations[key].show = !newOperations[key].show;
// //   //       } else {
// //   //         newOperations[key].show = false;
// //   //       }
// //   //     });
      
// //   //     const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
// //   //     setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
// //   //     setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
// //   //     // Enable universe if complement is selected
// //   //     if (operation === 'complement' && newOperations.complement.show) {
// //   //       setUniverse(prev => ({ ...prev, enabled: true }));
// //   //     }
      
// //   //     return newOperations;
// //   //   });
// //   // };

// //   const toggleOperation = (operation) => {
// //     setOperations(prev => {
// //       const newOperations = { ...prev };
// //       Object.keys(newOperations).forEach(key => {
// //         if (key === operation) {
// //           newOperations[key].show = !newOperations[key].show;
// //         } else {
// //           newOperations[key].show = false;
// //         }
// //       });
      
// //       const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
// //       setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
// //       setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
// //       // Enable universe if complement is selected
// //       if (operation === 'complement' && newOperations.complement.show) {
// //         setUniverse(prev => ({ ...prev, enabled: true }));
// //       }
      
// //       return newOperations;
// //     });
// //   };

// //   const isAnyOperationActive = useMemo(() => {
// //     return Object.values(operations).some(op => op.show);
// //   }, [operations]);


// //   const changeOperationColor = (operation, color) => {
// //     setOperations(prev => ({
// //       ...prev,
// //       [operation]: { ...prev[operation], color: color + '80' }
// //     }));
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.upperContainer}>
// //         <div className={styles.controlGroupLeft}>
// //           <br></br>
// //           <br></br>
// //           <br></br>
// //           <div className={styles.universeToggle}>
// //             <label className={styles.label}>
// //               <input
// //                 type="checkbox"
// //                 checked={universe.enabled}
// //                 onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
// //                 className={styles.checkbox}
// //               />
// //               Enable Universe
// //             </label>
// //           </div>
// //           {universe.enabled && (
// //             <div className={styles.universeControlsContainer}>
// //               <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
// //             </div>
// //           )}
// //         </div>
// //         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
// //           {universe.enabled && (
// //             <rect 
// //               x="0" 
// //               y="0" 
// //               width={universe.width} 
// //               height={universe.height} 
// //               fill={universe.fillColor} 
// //               stroke={universe.borderColor} 
// //               strokeWidth={universe.strokeWidth} 
// //             />
// //           )}
// //           {/* <circle 
// //             cx={circle1.x} 
// //             cy={circle1.y} 
// //             r={circle1.radius} 
// //             fill={circle1.fillColor} 
// //             stroke={circle1.borderColor} 
// //             strokeWidth={circle1.strokeWidth} 
// //           />
// //           <circle 
// //             cx={circle2.x} 
// //             cy={circle2.y} 
// //             r={circle2.radius} 
// //             fill={circle2.fillColor} 
// //             stroke={circle2.borderColor} 
// //             strokeWidth={circle2.strokeWidth} 
// //           /> */}

// //         <circle 
// //           cx={circle1.x} 
// //           cy={circle1.y} 
// //           r={circle1.radius} 
// //           fill={isAnyOperationActive ? 'none' : circle1.fillColor}
// //           stroke={circle1.borderColor} 
// //           strokeWidth={circle1.strokeWidth} 
// //         />
// //         <circle 
// //           cx={circle2.x} 
// //           cy={circle2.y} 
// //           r={circle2.radius} 
// //           fill={isAnyOperationActive ? 'none' : circle2.fillColor}
// //           stroke={circle2.borderColor} 
// //           strokeWidth={circle2.strokeWidth} 
// //         />
// //           {operations.intersection.show && (
// //             <path d={intersectionPath} fill={operations.intersection.color} stroke="none" />
// //           )}
// //           {operations.union.show && (
// //             <path d={unionPath} fill={operations.union.color} stroke="none" />
// //           )}
// //           {/* {operations.difference.show && (
// //             <path d={differencePath} fill={operations.difference.color} stroke="none" />
// //           )} */}

// //           {operations.differenceAB.show && (
// //             <path d={differencePathAB} fill={operations.differenceAB.color} stroke="none" />
// //           )}
// //           {operations.differenceBA.show && (
// //             <path d={differencePathBA} fill={operations.differenceBA.color} stroke="none" />
// //           )}
// //           {operations.symmetricDifference.show && (
// //             <path d={symmetricDifferencePath} fill={operations.symmetricDifference.color} stroke="none" />
// //           )}
// //           {operations.complement.show && universe.enabled && (
// //             <path d={complementPath} fill={operations.complement.color} stroke="none" />
// //           )}
// //           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
// //           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
// //           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
// //           <text x={(circle1.x + circle2.x) / 2} y={(circle1.y + circle2.y) / 2} textAnchor="middle">{intersectionLabel}</text>
// //         </svg>
// //         <div className={styles.buttonContainer}>
// //   <button onClick={downloadSVG} className={styles.downloadButton}>
// //     <Download />
// //   </button>
// //   <div className={styles.operationsControls}>
// //     {Object.entries(operations).map(([key, { show, color, label }]) => (
// //       <div key={key} className={styles.operationControl}>
// //         <label className={styles.operationLabel}>
// //           <input
// //             type="checkbox"
// //             checked={show}
// //             onChange={() => toggleOperation(key)}
// //             className={styles.operationCheckbox}
// //           />
// //           {key}
// //         </label>
// //         <div className={styles.operationInputs}>
// //           <input
// //             type="text"
// //             value={label}
// //             onChange={(e) => setOperations(prev => ({
// //               ...prev,
// //               [key]: { ...prev[key], label: e.target.value }
// //             }))}
// //             className={styles.operationInput}
// //             placeholder={key}
// //           />
// //           <input
// //             type="color"
// //             value={color.slice(0, 7)}
// //             onChange={(e) => changeOperationColor(key, e.target.value)}
// //             className={styles.operationColor}
// //           />
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </div>
// //       </div>
// //       <br></br>
      
// //       <div className={styles.controls}>
// //         <div className={styles.circleControlsContainer}>
// //           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
// //           <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
// //         </div>
// //         {/* <div className={styles.intersectionControls}>
// //           <label className={styles.intersectionLabel}>Intersection Label:</label>
// //           <div className={styles.intersectionInputGroup}>
// //             <input
// //               type="text"
// //               value={intersectionLabel}
// //               onChange={(e) => setIntersectionLabel(e.target.value)}
// //               className={styles.intersectionInput}
// //               placeholder="Intersection Label"
// //             />
// //             <ResetButton onClick={() => setIntersectionLabel('')} />
// //             <ResetButton onClick={() => setIntersectionLabel(initialIntersectionLabel)} isDefault={true} />
// //           </div>
// //           <div className={styles.symbolButtonGroup}>
// //             <button onClick={() => addSymbol('∩')} className={styles.symbolButton}>∩ (Intersection)</button>
// //             <button onClick={() => addSymbol('∪')} className={styles.symbolButton}>∪ (Union)</button>
// //             <button onClick={() => addSymbol('∖')} className={styles.symbolButton}>∖ (Difference)</button>
// //             <button onClick={() => addSymbol('⊕')} className={styles.symbolButton}>⊕ (Symmetric Difference)</button>
// //             <button onClick={() => addSymbol('ᶜ')} className={styles.symbolButton}>ᶜ (Complement)</button>
// //           </div> */}
// //           {/* <div className={styles.operationsControls}>
// //             {Object.entries(operations).map(([operation, { show, color }]) => (
// //               <div key={operation} className={styles.operationControl}>
// //                 <label>
// //                   <input
// //                     type="checkbox"
// //                     checked={show}
// //                     onChange={() => toggleOperation(operation)}
// //                   />
// //                   {operation.charAt(0).toUpperCase() + operation.slice(1)}
// //                 </label>
// //                 <input
// //                   type="color"
// //                   value={color.slice(0, 7)}
// //                   onChange={(e) => changeOperationColor(operation, e.target.value)}
// //                   disabled={!show}
// //                 />
// //               </div>
// //             ))}
// //           </div> */}

// //         {/* <div className={styles.operationsControls}>
// //           {Object.entries(operations).map(([operation, { show, color }]) => (
// //             <div key={operation} className={styles.operationControl}>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={show}
// //                   onChange={() => toggleOperation(operation)}
// //                 />
// //                 {operation === 'differenceAB' ? 'A \\ B' :
// //                 operation === 'differenceBA' ? 'B \\ A' :
// //                 operation.charAt(0).toUpperCase() + operation.slice(1)}
// //               </label>
// //               <input
// //                 type="color"
// //                 value={color.slice(0, 7)}
// //                 onChange={(e) => changeOperationColor(operation, e.target.value)}
// //                 disabled={!show}
// //               />
// //             </div>
// //           ))}
// //         </div> */}
// //         {/* </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VennGenerator;
// import React, { useState, useRef, useMemo } from 'react';
// import { ResetButton } from './VennGeneratorHelpers';
// import { CircleControls } from './VennGeneratorHelpers';
// import UniverseControls from './VennGeneratorHelpers';
// import styles from './VennGenerator.module.css';
// import { Download } from 'lucide-react';

// const VennGenerator = () => {
//   const initialUniverse = {
//     enabled: false,
//     label: 'U',
//     fillColor: '#f0f0f080',
//     borderColor: '#000000',
//     strokeWidth: 2,
//     width: 380,
//     height: 280
//   };

//   const initialCircle1 = { 
//     label: 'Set A', 
//     fillColor: 'none',
//     borderColor: 'black',
//     strokeWidth: 0.5,
//     radius: 70,
//     x: 150,
//     y: 150
//   };
  
//   const initialCircle2 = { 
//     label: 'Set B', 
//     fillColor: 'none',
//     borderColor: 'black',
//     strokeWidth: 0.5,
//     radius: 70,
//     x: 250,
//     y: 150
//   };

//   const [universe, setUniverse] = useState(initialUniverse);
//   const [circle1, setCircle1] = useState(initialCircle1);
//   const [circle2, setCircle2] = useState(initialCircle2);
//   const svgRef = useRef(null);

//   const [operations, setOperations] = useState({
//     intersection: { show: false, color: '#00ff0080', label: 'A ∩ B' },
//     union: { show: false, color: '#ffa50080', label: 'A ∪ B' },
//     differenceAB: { show: false, color: '#ff00ff80', label: 'A \\ B' },
//     differenceBA: { show: false, color: '#ff00ff80', label: 'B \\ A' },
//     symmetricDifference: { show: false, color: '#00ffff80', label: 'A ⊕ B' },
//     complement: { show: false, color: '#ffff0080', label: 'A\'' },
//   });

//   const calculateIntersection = useMemo(() => {
//     const dx = circle2.x - circle1.x;
//     const dy = circle2.y - circle1.y;
//     const d = Math.sqrt(dx * dx + dy * dy);

//     if (d > circle1.radius + circle2.radius) return null;
//     if (d < Math.abs(circle1.radius - circle2.radius)) return null;

//     const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
//     const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

//     const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
//     const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

//     const x3 = x2 + h * (circle2.y - circle1.y) / d;
//     const y3 = y2 - h * (circle2.x - circle1.x) / d;

//     const x4 = x2 - h * (circle2.y - circle1.y) / d;
//     const y4 = y2 + h * (circle2.x - circle1.x) / d;

//     return { x3, y3, x4, y4 };
//   }, [circle1, circle2]);

//   const intersectionPath = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return '';

//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
//       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
//     `;
//   }, [calculateIntersection, circle1.radius, circle2.radius]);

//   const unionPath = useMemo(() => {
//     return `
//       M ${circle1.x - circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
//       M ${circle2.x - circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
//     `;
//   }, [circle1, circle2]);

//   const differencePathAB = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return `
//       M ${circle1.x - circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
//     `;
  
//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle1.radius} ${circle1.radius} 0 1 0 ${x4} ${y4}
//       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
//     `;
//   }, [circle1, circle2, calculateIntersection]);
  
//   const differencePathBA = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return `
//       M ${circle2.x - circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
//     `;
  
//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${x4} ${y4}
//       A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
//     `;
//   }, [circle1, circle2, calculateIntersection]);
  
//   const symmetricDifferencePath = useMemo(() => {
//     return `${differencePathAB} ${differencePathBA}`;
//   }, [differencePathAB, differencePathBA]);
 
//   const complementPath = useMemo(() => {
//     return `
//       M 0 0
//       H ${universe.width}
//       V ${universe.height}
//       H 0
//       V 0
//       M ${circle1.x - circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x + circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x - circle1.radius} ${circle1.y}
//     `;
//   }, [circle1, universe]);

//   const toggleOperation = (operation) => {
//     setOperations(prev => {
//       const newOperations = { ...prev };
//       Object.keys(newOperations).forEach(key => {
//         if (key === operation) {
//           newOperations[key].show = !newOperations[key].show;
//         } else {
//           newOperations[key].show = false;
//         }
//       });
      
//       const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
//       setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
//       setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
//       if (operation === 'complement' && newOperations.complement.show) {
//         setUniverse(prev => ({ ...prev, enabled: true }));
//       }
      
//       return newOperations;
//     });
//   };

//   const isAnyOperationActive = useMemo(() => {
//     return Object.values(operations).some(op => op.show);
//   }, [operations]);

//   const changeOperationColor = (operation, color) => {
//     setOperations(prev => ({
//       ...prev,
//       [operation]: { ...prev[operation], color: color + '80' }
//     }));
//   };

//   const downloadSVG = () => {
//     const svgData = new XMLSerializer().serializeToString(svgRef.current);
//     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
//     const svgUrl = URL.createObjectURL(svgBlob);
//     const downloadLink = document.createElement("a");
//     downloadLink.href = svgUrl;
//     downloadLink.download = "venn_diagram.svg";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.upperContainer}>
//         <div className={styles.controlGroupLeft}>
//           <br />
//           <br />
//           <br />
//           <div className={styles.universeToggle}>
//             <label className={styles.label}>
//               <input
//                 type="checkbox"
//                 checked={universe.enabled}
//                 onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
//                 className={styles.checkbox}
//               />
//               Enable Universe
//             </label>
//           </div>
//           {universe.enabled && (
//             <div className={styles.universeControlsContainer}>
//               <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
//             </div>
//           )}
//         </div>
//         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
//           {universe.enabled && (
//             <rect 
//               x="0" 
//               y="0" 
//               width={universe.width} 
//               height={universe.height} 
//               fill={universe.fillColor} 
//               stroke={universe.borderColor} 
//               strokeWidth={universe.strokeWidth} 
//             />
//           )}
//           <circle 
//             cx={circle1.x} 
//             cy={circle1.y} 
//             r={circle1.radius} 
//             fill={isAnyOperationActive ? 'none' : circle1.fillColor}
//             stroke={circle1.borderColor} 
//             strokeWidth={circle1.strokeWidth} 
//           />
//           <circle 
//             cx={circle2.x} 
//             cy={circle2.y} 
//             r={circle2.radius} 
//             fill={isAnyOperationActive ? 'none' : circle2.fillColor}
//             stroke={circle2.borderColor} 
//             strokeWidth={circle2.strokeWidth} 
//           />
//           {operations.intersection.show && (
//             <path d={intersectionPath} fill={operations.intersection.color} stroke="none" />
//           )}
//           {operations.union.show && (
//             <path d={unionPath} fill={operations.union.color} stroke="none" />
//           )}
//           {operations.differenceAB.show && (
//             <path d={differencePathAB} fill={operations.differenceAB.color} stroke="none" />
//           )}
//           {operations.differenceBA.show && (
//             <path d={differencePathBA} fill={operations.differenceBA.color} stroke="none" />
//           )}
//           {operations.symmetricDifference.show && (
//             <path d={symmetricDifferencePath} fill={operations.symmetricDifference.color} stroke="none" />
//           )}
//           {operations.complement.show && universe.enabled && (
//             <path d={complementPath} fill={operations.complement.color} stroke="none" />
//           )}
//           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
//           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
//           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
//           {Object.entries(operations).map(([key, { show, color, label }]) => (
//             show && (
//               <text
//                 key={key}
//                 x={(circle1.x + circle2.x) / 2}
//                 y={(circle1.y + circle2.y) / 2}
//                 textAnchor="middle"
//                 fill="black"
//                 fontSize="14"
//               >
//                 {label}
//               </text>
//             )
//           ))}
//         </svg>
//         <div className={styles.buttonContainer}>
//           <button onClick={downloadSVG} className={styles.downloadButton}>
//             <Download />
//           </button>
//           <div className={styles.operationsControls}>
//             {Object.entries(operations).map(([key, { show, color, label }]) => (
//               <div key={key} className={styles.operationControl}>
//                 <label className={styles.operationLabel}>
//                   <input
//                     type="checkbox"
//                     checked={show}
//                     onChange={() => toggleOperation(key)}
//                     className={styles.operationCheckbox}
//                   />
//                   {key}
//                 </label>
//                 <div className={styles.operationInputs}>
//                   <input
//                     type="text"
//                     value={label}
//                     onChange={(e) => setOperations(prev => ({
//                       ...prev,
//                       [key]: { ...prev[key], label: e.target.value }
//                     }))}
//                     className={styles.operationInput}
//                     placeholder={key}
//                   />
//                   <input
//                     type="color"
//                     value={color.slice(0, 7)}
//                     onChange={(e) => changeOperationColor(key, e.target.value)}
//                     className={styles.operationColor}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <br />
      
//       <div className={styles.controls}>
//         <div className={styles.circleControlsContainer}>
//           <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
//          <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VennGenerator;
// import React, { useState, useRef, useMemo } from 'react';
// import { ResetButton } from './VennGeneratorHelpers';
// import { CircleControls } from './VennGeneratorHelpers';
// import UniverseControls from './VennGeneratorHelpers';
// import styles from './VennGenerator.module.css';
// import { Download } from 'lucide-react';

// const VennGenerator = () => {
//   const initialUniverse = {
//     enabled: false,
//     label: 'U',
//     fillColor: '#f0f0f080',
//     borderColor: '#000000',
//     strokeWidth: 2,
//     width: 380,
//     height: 280
//   };

//   const initialCircle1 = { 
//     label: 'Set A', 
//     fillColor: 'none',
//     borderColor: 'black',
//     strokeWidth: 0.5,
//     radius: 70,
//     x: 150,
//     y: 150
//   };
  
//   const initialCircle2 = { 
//     label: 'Set B', 
//     fillColor: 'none',
//     borderColor: 'black',
//     strokeWidth: 0.5,
//     radius: 70,
//     x: 250,
//     y: 150
//   };

//   const [universe, setUniverse] = useState(initialUniverse);
//   const [circle1, setCircle1] = useState(initialCircle1);
//   const [circle2, setCircle2] = useState(initialCircle2);
//   const svgRef = useRef(null);

//   const [operations, setOperations] = useState({
//     intersection: { show: false, color: '#00ff0080', label: 'A ∩ B' },
//     union: { show: false, color: '#ffa50080', label: 'A ∪ B' },
//     differenceAB: { show: false, color: '#ff00ff80', label: 'A \\ B' },
//     differenceBA: { show: false, color: '#ff00ff80', label: 'B \\ A' },
//     symmetricDifference: { show: false, color: '#00ffff80', label: 'A ⊕ B' },
//     // complement: { show: false, color: '#ffff0080', label: 'A\'' },
//     complement: { 
//       show: false, 
//       color: '#ffff0080', 
//       label: 'Aᶜ',
//       set: 'A' // New property to track which set is being complemented
//     },
//   });

//   const calculateIntersection = useMemo(() => {
//     const dx = circle2.x - circle1.x;
//     const dy = circle2.y - circle1.y;
//     const d = Math.sqrt(dx * dx + dy * dy);

//     if (d > circle1.radius + circle2.radius) return null;
//     if (d < Math.abs(circle1.radius - circle2.radius)) return null;

//     const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
//     const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

//     const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
//     const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

//     const x3 = x2 + h * (circle2.y - circle1.y) / d;
//     const y3 = y2 - h * (circle2.x - circle1.x) / d;

//     const x4 = x2 - h * (circle2.y - circle1.y) / d;
//     const y4 = y2 + h * (circle2.x - circle1.x) / d;

//     return { x3, y3, x4, y4 };
//   }, [circle1, circle2]);

//   const intersectionPath = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return '';

//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
//       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
//     `;
//   }, [calculateIntersection, circle1.radius, circle2.radius]);

//   const unionPath = useMemo(() => {
//     return `
//       M ${circle1.x - circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
//       M ${circle2.x - circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
//     `;
//   }, [circle1, circle2]);

//   const differencePathAB = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return `
//       M ${circle1.x - circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
//       A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
//     `;
  
//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle1.radius} ${circle1.radius} 0 1 0 ${x4} ${y4}
//       A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
//     `;
//   }, [circle1, circle2, calculateIntersection]);
  
//   const differencePathBA = useMemo(() => {
//     const intersection = calculateIntersection;
//     if (!intersection) return `
//       M ${circle2.x - circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
//     `;
  
//     const { x3, y3, x4, y4 } = intersection;
//     return `
//       M ${x3} ${y3}
//       A ${circle2.radius} ${circle2.radius} 0 1 1 ${x4} ${y4}
//       A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
//     `;
//   }, [circle1, circle2, calculateIntersection]);
  
//   const symmetricDifferencePath = useMemo(() => {
//     return `${differencePathAB} ${differencePathBA}`;
//   }, [differencePathAB, differencePathBA]);
 
//   // const complementPath = useMemo(() => {
//   //   return `
//   //     M 0 0
//   //     H ${universe.width}
//   //     V ${universe.height}
//   //     H 0
//   //     V 0
//   //     M ${circle1.x - circle1.radius} ${circle1.y}
//   //     A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x + circle1.radius} ${circle1.y}
//   //     A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x - circle1.radius} ${circle1.y}
//   //   `;
//   // }, [circle1, universe]);

//   const complementPath = useMemo(() => {
//     const getSetPath = (set) => {
//       switch(set) {
//         case 'A':
//           return `M ${circle1.x - circle1.radius} ${circle1.y}
//                   A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x + circle1.radius} ${circle1.y}
//                   A ${circle1.radius} ${circle1.radius} 0 1 0 ${circle1.x - circle1.radius} ${circle1.y}`;
//         case 'B':
//           return `M ${circle2.x - circle2.radius} ${circle2.y}
//                   A ${circle2.radius} ${circle2.radius} 0 1 0 ${circle2.x + circle2.radius} ${circle2.y}
//                   A ${circle2.radius} ${circle2.radius} 0 1 0 ${circle2.x - circle2.radius} ${circle2.y}`;
//         case 'A ∪ B':
//           return unionPath;
//         case 'A ∩ B':
//           return intersectionPath;
//         default:
//           return '';
//       }
//     };

//     return `
//       M 0 0
//       H ${universe.width}
//       V ${universe.height}
//       H 0
//       V 0
//       ${getSetPath(operations.complement.set)}
//     `;
//   }, [circle1, circle2, universe, operations.complement.set, unionPath, intersectionPath]);

  
//   // const toggleOperation = (operation) => {
//   //   setOperations(prev => {
//   //     const newOperations = { ...prev };
//   //     Object.keys(newOperations).forEach(key => {
//   //       if (key === operation) {
//   //         newOperations[key].show = !newOperations[key].show;
//   //       } else {
//   //         newOperations[key].show = false;
//   //       }
//   //     });
      
//   //     const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
//   //     setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
//   //     setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
//   //     if (operation === 'complement' && newOperations.complement.show) {
//   //       setUniverse(prev => ({ ...prev, enabled: true }));
//   //     }
      
//   //     return newOperations;
//   //   });
//   // };

//   const toggleOperation = (operation) => {
//     setOperations(prev => {
//       const newOperations = { ...prev };
//       Object.keys(newOperations).forEach(key => {
//         if (key === operation) {
//           newOperations[key].show = !newOperations[key].show;
//         } else {
//           newOperations[key].show = false;
//         }
//       });
      
//       const isAnyOperationActive = Object.values(newOperations).some(op => op.show);
      
//       setCircle1(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle1.fillColor }));
//       setCircle2(c => ({ ...c, fillColor: isAnyOperationActive ? 'none' : initialCircle2.fillColor }));
      
//       if (operation === 'complement' && newOperations.complement.show) {
//         setUniverse(prev => ({ ...prev, enabled: true }));
//       }
      
//       return newOperations;
//     });
//   };
 
//   // const isAnyOperationActive = useMemo(() => {
//   //   return Object.values(operations).some(op => op.show);
//   // }, [operations]);

  

//   const changeOperationColor = (operation, color) => {
//     setOperations(prev => ({
//       ...prev,
//       [operation]: { ...prev[operation], color: color + '80' }
//     }));
//   };

//   const downloadSVG = () => {
//     const svgData = new XMLSerializer().serializeToString(svgRef.current);
//     const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
//     const svgUrl = URL.createObjectURL(svgBlob);
//     const downloadLink = document.createElement("a");
//     downloadLink.href = svgUrl;
//     downloadLink.download = "venn_diagram.svg";
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   };

//   const getLabelPosition = (operation) => {
//     switch (operation) {
//       case 'intersection':
//         return { x: (circle1.x + circle2.x) / 2, y: circle1.y + circle1.radius + 20 };
//       case 'union':
//         return { x: (circle1.x + circle2.x) / 2, y: circle1.y - circle1.radius - 20 };
//       case 'differenceAB':
//         return { x: circle1.x - circle1.radius - 20, y: circle1.y };
//       case 'differenceBA':
//         return { x: circle2.x + circle2.radius + 20, y: circle2.y };
//       case 'symmetricDifference':
//         return { x: (circle1.x + circle2.x) / 2, y: circle2.y + circle2.radius + 40 };
//       case 'complement':
//         return { x: universe.width - 20, y: 20 };
//       default:
//         return { x: 0, y: 0 };
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.upperContainer}>
//         <div className={styles.controlGroupLeft}>
//           <br />
//           <br />
//           <br />
//           <div className={styles.universeToggle}>
//             <label className={styles.label}>
//               <input
//                 type="checkbox"
//                 checked={universe.enabled}
//                 onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
//                 className={styles.checkbox}
//               />
//               Enable Universe
//             </label>
//           </div>
//           {universe.enabled && (
//             <div className={styles.universeControlsContainer}>
//               <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
//             </div>
//           )}
//         </div>
//         <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
//           {universe.enabled && (
//             <rect 
//               x="0" 
//               y="0" 
//               width={universe.width} 
//               height={universe.height} 
//               fill={universe.fillColor} 
//               stroke={universe.borderColor} 
//               strokeWidth={universe.strokeWidth} 
//             />
//           )}
//           <circle 
//             cx={circle1.x} 
//             cy={circle1.y} 
//             r={circle1.radius} 
//             fill={isAnyOperationActive ? 'none' : circle1.fillColor}
//             stroke={circle1.borderColor} 
//             strokeWidth={circle1.strokeWidth} 
//           />
//           <circle 
//             cx={circle2.x} 
//             cy={circle2.y} 
//             r={circle2.radius} 
//             fill={isAnyOperationActive ? 'none' : circle2.fillColor}
//             stroke={circle2.borderColor} 
//             strokeWidth={circle2.strokeWidth} 
//           />
//           {operations.intersection.show && (
//             <path d={intersectionPath} fill={operations.intersection.color} stroke="none" />
//           )}
//           {operations.union.show && (
//             <path d={unionPath} fill={operations.union.color} stroke="none" />
//           )}
//           {operations.differenceAB.show && (
//             <path d={differencePathAB} fill={operations.differenceAB.color} stroke="none" />
//           )}
//           {operations.differenceBA.show && (
//             <path d={differencePathBA} fill={operations.differenceBA.color} stroke="none" />
//           )}
//           {operations.symmetricDifference.show && (
//             <path d={symmetricDifferencePath} fill={operations.symmetricDifference.color} stroke="none" />
//           )}
//           {operations.complement.show && universe.enabled && (
//             <path d={complementPath} fill={operations.complement.color} stroke="none" />
//           )}
//           {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
//           <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
//           <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
//           {Object.entries(operations).map(([key, { show, label }]) => {
//             if (show) {
//               const { x, y } = getLabelPosition(key);
//               return (
//                 <text
//                   key={key}
//                   x={x}
//                   y={y}
//                   textAnchor="middle"
//                   fill="black"
//                   fontSize="14"
//                 >
//                   {label}
//                 </text>
//               );
//             }
//             return null;
//           })}
//         </svg>
//         <div className={styles.buttonContainer}>
//           <button onClick={downloadSVG} className={styles.downloadButton}>
//             <Download />
//           </button>
//           <div className={styles.operationsControls}>
//           {Object.entries(operations).map(([key, { show, color, label }]) => (
//             <div key={key} className={styles.operationControl}>
//               <label className={styles.operationLabel}>
//                 <input
//                   type="checkbox"
//                   checked={show}
//                   onChange={() => toggleOperation(key)}
//                   className={styles.operationCheckbox}
//                 />
//                 {key}
//               </label>
//               <div className={styles.operationInputs}>
//                 <input
//                   type="text"
//                   value={label}
//                   onChange={(e) => setOperations(prev => ({
//                     ...prev,
//                     [key]: { ...prev[key], label: e.target.value }
//                   }))}
//                   className={styles.operationInput}
//                   placeholder={key}
//                 />
//                 <input
//                   type="color"
//                   value={color.slice(0, 7)}
//                   onChange={(e) => changeOperationColor(key, e.target.value)}
//                   className={styles.operationColor}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <br />
    
//     <div className={styles.controls}>
//       <div className={styles.circleControlsContainer}>
//         <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
//         <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
//       </div>
//     </div>

//     <div className={styles.legend}>
//       <h3>Legend</h3>
//       {Object.entries(operations).map(([key, { show, color, label }]) => (
//         show && (
//           <div key={key} className={styles.legendItem}>
//             <div
//               className={styles.legendColor}
//               style={{ backgroundColor: color }}
//             ></div>
//             <span>{label}</span>
//           </div>
//         )
//       ))}
//     </div>
//   </div>
// );
// };

// export default VennGenerator;
import React, { useState, useRef, useMemo } from 'react';
import { Download } from 'lucide-react';
import styles from './VennGenerator.module.css';
import { CircleControls, UniverseControls } from './VennGeneratorHelpers';

const VennGenerator = () => {
  const initialUniverse = {
    enabled: false,
    label: 'U',
    fillColor: '#f0f0f080',
    borderColor: '#000000',
    strokeWidth: 0.3,
    width: 380,
    height: 280
  };

  const initialCircle1 = { 
    label: 'Set A', 
    fillColor: 'none',
    borderColor: 'black',
    strokeWidth: 0.5,
    radius: 70,
    x: 150,
    y: 150
  };
  
  const initialCircle2 = { 
    label: 'Set B', 
    fillColor: 'none',
    borderColor: 'black',
    strokeWidth: 0.5,
    radius: 70,
    x: 250,
    y: 150
  };

  const [universe, setUniverse] = useState(initialUniverse);
  const [circle1, setCircle1] = useState(initialCircle1);
  const [circle2, setCircle2] = useState(initialCircle2);
  const svgRef = useRef(null);

  const [operations, setOperations] = useState({
    intersection: { show: false, color: '#00ff0080', label: 'A ∩ B' },
    union: { show: false, color: '#ffa50080', label: 'A ∪ B' },
    differenceAB: { show: false, color: '#ff00ff80', label: 'A \\ B' },
    differenceBA: { show: false, color: '#ff00ff80', label: 'B \\ A' },
    symmetricDifference: { show: false, color: '#00ffff80', label: 'A ⊕ B' },
    complement: { 
      show: false, 
      color: '#ffff0080', 
      label: '(A)ᶜ',
      set: 'A'
    },
  });

  const calculateIntersection = useMemo(() => {
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d > circle1.radius + circle2.radius) return null;
    if (d < Math.abs(circle1.radius - circle2.radius)) return null;

    const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
    const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

    const x2 = circle1.x + a * (circle2.x - circle1.x) / d;
    const y2 = circle1.y + a * (circle2.y - circle1.y) / d;

    const x3 = x2 + h * (circle2.y - circle1.y) / d;
    const y3 = y2 - h * (circle2.x - circle1.x) / d;

    const x4 = x2 - h * (circle2.y - circle1.y) / d;
    const y4 = y2 + h * (circle2.x - circle1.x) / d;

    return { x3, y3, x4, y4 };
  }, [circle1, circle2]);

  const intersectionPath = useMemo(() => {
    const intersection = calculateIntersection;
    if (!intersection) return '';

    const { x3, y3, x4, y4 } = intersection;
    return `
      M ${x3} ${y3}
      A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
      A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
    `;
  }, [calculateIntersection, circle1.radius, circle2.radius]);

  const unionPath = useMemo(() => {
    return `
      M ${circle1.x - circle1.radius} ${circle1.y}
      A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
      A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
      M ${circle2.x - circle2.radius} ${circle2.y}
      A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
      A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
    `;
  }, [circle1, circle2]);

  const differencePathAB = useMemo(() => {
    const intersection = calculateIntersection;
    if (!intersection) return `
      M ${circle1.x - circle1.radius} ${circle1.y}
      A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
      A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}
    `;
  
    const { x3, y3, x4, y4 } = intersection;
    return `
      M ${x3} ${y3}
      A ${circle1.radius} ${circle1.radius} 0 1 0 ${x4} ${y4}
      A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}
    `;
  }, [circle1, circle2, calculateIntersection]);
  
  const differencePathBA = useMemo(() => {
    const intersection = calculateIntersection;
    if (!intersection) return `
      M ${circle2.x - circle2.radius} ${circle2.y}
      A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
      A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}
    `;
  
    const { x3, y3, x4, y4 } = intersection;
    return `
      M ${x3} ${y3}
      A ${circle2.radius} ${circle2.radius} 0 1 1 ${x4} ${y4}
      A ${circle1.radius} ${circle1.radius} 0 0 0 ${x3} ${y3}
    `;
  }, [circle1, circle2, calculateIntersection]);
  
  const symmetricDifferencePath = useMemo(() => {
    return `${differencePathAB} ${differencePathBA}`;
  }, [differencePathAB, differencePathBA]);

  
  const complementPath = useMemo(() => {
    const intersection = calculateIntersection;
    
    // Fallback values if there's no intersection
    const defaultIntersection = {
      x3: (circle1.x + circle2.x) / 2,
      y3: (circle1.y + circle2.y) / 2,
      x4: (circle1.x + circle2.x) / 2,
      y4: (circle1.y + circle2.y) / 2
    };
  
    const { x3, y3, x4, y4 } = intersection || defaultIntersection;
  
    const getSetPath = (set) => {
      switch(set) {
        case 'A':
          return `M ${circle1.x - circle1.radius} ${circle1.y}
                  A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x + circle1.radius} ${circle1.y}
                  A ${circle1.radius} ${circle1.radius} 0 1 1 ${circle1.x - circle1.radius} ${circle1.y}`;
        case 'B':
          return `M ${circle2.x - circle2.radius} ${circle2.y}
                  A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x + circle2.radius} ${circle2.y}
                  A ${circle2.radius} ${circle2.radius} 0 1 1 ${circle2.x - circle2.radius} ${circle2.y}`;
        case 'A ∪ B':
          return `${getSetPath('A')} ${getSetPath('B')}
                  ${intersection ? `M ${x3} ${y3}
                  A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
                  A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}` : ''}`;
        case 'A ∩ B':
          return intersection ? `M ${x3} ${y3}
                  A ${circle1.radius} ${circle1.radius} 0 0 1 ${x4} ${y4}
                  A ${circle2.radius} ${circle2.radius} 0 0 1 ${x3} ${y3}` : '';
        default:
          return '';
      }
    };
  
    return `
      M 0 0
      H ${universe.width}
      V ${universe.height}
      H 0
      V 0
      Z
      ${getSetPath(operations.complement.set)}
    `;
  }, [circle1, circle2, universe, operations.complement.set, calculateIntersection]);
  
  const toggleOperation = (operation) => {
    setOperations(prev => {
      const newOperations = { ...prev };
      Object.keys(newOperations).forEach(key => {
        if (key === operation) {
          newOperations[key].show = !newOperations[key].show;
        } else {
          newOperations[key].show = false;
        }
      });
      
      if (operation === 'complement' && newOperations.complement.show) {
        setUniverse(prev => ({ ...prev, enabled: true }));
      }
      
      return newOperations;
    });
  };

  const isAnyOperationActive = useMemo(() => {
    return Object.values(operations).some(op => op.show);
  }, [operations]);

  const changeOperationColor = (operation, color) => {
    setOperations(prev => ({
      ...prev,
      [operation]: { ...prev[operation], color: color + '80' }
    }));
  };

  const changeComplementSet = (set) => {
    setOperations(prev => ({
      ...prev,
      complement: { 
        ...prev.complement, 
        set: set,
        label: `(${set})ᶜ`
      }
    }));
  };

  const downloadSVG = () => {
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "venn_diagram.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const getLabelPosition = (operation) => {
    switch (operation) {
      case 'intersection':
        return { x: (circle1.x + circle2.x) / 2, y: circle1.y + circle1.radius + 20 };
      case 'union':
        return { x: (circle1.x + circle2.x) / 2, y: circle1.y - circle1.radius - 20 };
      case 'differenceAB':
        return { x: circle1.x - circle1.radius - 20, y: circle1.y };
      case 'differenceBA':
        return { x: circle2.x + circle2.radius + 20, y: circle2.y };
      case 'symmetricDifference':
        return { x: (circle1.x + circle2.x) / 2, y: circle2.y + circle2.radius + 40 };
      case 'complement':
        return { x: universe.width - 50, y: 20 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div className={styles.container}>
     
      <div className={styles.upperContainer}>
        <div className={styles.controlGroupLeft}>
          <div className={styles.universeToggle}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={universe.enabled}
                onChange={(e) => setUniverse({...universe, enabled: e.target.checked})}
                className={styles.checkbox}
              />
              Enable Universe
            </label>
          </div>
          {universe.enabled && (
            <div className={styles.universeControlsContainer}>
              <UniverseControls universe={universe} setUniverse={setUniverse} initial={initialUniverse} />
            </div>
          )}
        </div>
        <svg className={styles.svg} ref={svgRef} width={universe.width} height={universe.height} viewBox={`0 0 ${universe.width} ${universe.height}`}>
          {universe.enabled && (
            <rect 
              x="0" 
              y="0" 
              width={universe.width} 
              height={universe.height} 
              fill={universe.fillColor} 
              stroke={universe.borderColor} 
              strokeWidth={universe.strokeWidth} 
            />
          )}
          <circle 
            cx={circle1.x} 
            cy={circle1.y} 
            r={circle1.radius} 
            fill={isAnyOperationActive ? 'none' : circle1.fillColor}
            stroke={circle1.borderColor} 
            strokeWidth={circle1.strokeWidth} 
          />
          <circle 
            cx={circle2.x} 
            cy={circle2.y} 
            r={circle2.radius} 
            fill={isAnyOperationActive ? 'none' : circle2.fillColor}
            stroke={circle2.borderColor} 
            strokeWidth={circle2.strokeWidth} 
          />
          {operations.intersection.show && (
            <path d={intersectionPath} fill={operations.intersection.color} stroke="none" />
          )}
          {operations.union.show && (
            <path d={unionPath} fill={operations.union.color} stroke="none" />
          )}
          {operations.differenceAB.show && (
            <path d={differencePathAB} fill={operations.differenceAB.color} stroke="none" />
          )}
          {operations.differenceBA.show && (
            <path d={differencePathBA} fill={operations.differenceBA.color} stroke="none" />
          )}
          {operations.symmetricDifference.show && (
            <path d={symmetricDifferencePath} fill={operations.symmetricDifference.color} stroke="none" />
          )}
          {/* {operations.complement.show && universe.enabled && (
            <path d={complementPath} fill={operations.complement.color} stroke="none" />
          )} */}

{/* {operations.complement.show && universe.enabled && (
  <path 
    d={complementPath} 
    fill={operations.complement.color} 
    fillRule="evenodd"
    stroke="none" 
  />
)} */}

{operations.complement.show && universe.enabled && (
  <path 
    d={complementPath} 
    fill={operations.complement.color} 
    fillRule="evenodd"
    stroke="none" 
  />
)}
          {universe.enabled && <text x="10" y="20" fontSize="14">{universe.label}</text>}
          <text x={circle1.x} y={circle1.y} textAnchor="middle">{circle1.label}</text>
          <text x={circle2.x} y={circle2.y} textAnchor="middle">{circle2.label}</text>
          {Object.entries(operations).map(([key, { show, label }]) => {
            if (show) {
              const { x, y } = getLabelPosition(key);
              return (
                <text
                  key={key}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fill="black"
                  fontSize="14"
                >
                  {label}
                </text>
              );
            }
            return null;
          })}
        </svg>
        <div className={styles.buttonContainer}>
          <button onClick={downloadSVG} className={styles.downloadButton}>
            <Download />
          </button>
          <div className={styles.operationsControls}>
            {Object.entries(operations).map(([key, { show, color, label, set }]) => (
              <div key={key} className={styles.operationControl}>
                <label className={styles.operationLabel}>
                  <input
                    type="checkbox"
                    checked={show}
                    onChange={() => toggleOperation(key)}
                    className={styles.operationCheckbox}
                  />
                  {key}
                </label>
                <div className={styles.operationInputs}>
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => setOperations(prev => ({
                      ...prev,
                      [key]: { ...prev[key], label: e.target.value }
                    }))}
                    className={styles.operationInput}
                    placeholder={key}
                  />
                  <input
                    type="color"
                    value={color.slice(0, 7)}
                    onChange={(e) => changeOperationColor(key, e.target.value)}
                    className={styles.operationColor}
                  />
                  {key === 'complement' && (
                    <select
                      value={set}
                      onChange={(e) => changeComplementSet(e.target.value)}
                      className={styles.complementSelect}
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="A ∪ B">A ∪ B</option>
                      <option value="A ∩ B">A ∩ B</option>
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      
      <div className={styles.controls}>
        <div className={styles.circleControlsContainer}>
          <CircleControls circle={circle1} setCircle={setCircle1} label="Set A" initial={initialCircle1} />
          <CircleControls circle={circle2} setCircle={setCircle2} label="Set B" initial={initialCircle2} />
        </div>
      </div>

      {/* <div className={styles.legend}>
        <h3>Legend</h3>
        {Object.entries(operations).map(([key, { show, color, label }]) => (
          show && (
            <div key={key} className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: color }}
              ></div>
              <span>{label}</span>
            </div>
          )
        ))}
      </div> */}
    </div>
  );
};

export default VennGenerator;