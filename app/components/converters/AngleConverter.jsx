
// // // // // // // import { useState } from 'react';

// // // // // // // export default function AngleConverter() {
// // // // // // //   const [degrees, setDegrees] = useState('0');
// // // // // // //   const [radians, setRadians] = useState('0');

// // // // // // //   const handleDegreesChange = (e) => {
// // // // // // //     const value = e.target.value;
// // // // // // //     setDegrees(value);
// // // // // // //     if (value === '' || isNaN(value)) {
// // // // // // //       setRadians('');
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // // // // //     setRadians(rad);
// // // // // // //   };

// // // // // // //   const handleRadiansChange = (e) => {
// // // // // // //     const value = e.target.value;
// // // // // // //     setRadians(value);
// // // // // // //     if (value === '' || isNaN(value)) {
// // // // // // //       setDegrees('');
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // // // // //     setDegrees(deg);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <style jsx>{`
// // // // // // //         .container {
// // // // // // //           display: flex;
// // // // // // //           max-width: 1200px;
// // // // // // //           margin: 40px auto;
// // // // // // //           background: #fff;
// // // // // // //           border-radius: 8px;
// // // // // // //           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// // // // // // //         }

// // // // // // //         .controls {
// // // // // // //           flex: 1;
// // // // // // //           padding: 30px;
// // // // // // //         }

// // // // // // //         .visualization {
// // // // // // //           flex: 1;
// // // // // // //           padding: 30px;
// // // // // // //           border-left: 1px solid #eee;
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           justify-content: center;
// // // // // // //         }

// // // // // // //         h1 {
// // // // // // //           color: #333;
// // // // // // //           font-size: 24px;
// // // // // // //           margin-bottom: 30px;
// // // // // // //         }

// // // // // // //         .input-group {
// // // // // // //           margin-bottom: 20px;
// // // // // // //         }

// // // // // // //         .input-row {
// // // // // // //           display: flex;
// // // // // // //           gap: 10px;
// // // // // // //           margin-bottom: 25px;
// // // // // // //         }

// // // // // // //         label {
// // // // // // //           display: block;
// // // // // // //           margin-bottom: 8px;
// // // // // // //           color: #555;
// // // // // // //           font-size: 14px;
// // // // // // //         }

// // // // // // //         input {
// // // // // // //           flex: 1;
// // // // // // //           padding: 8px 12px;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           border-radius: 4px;
// // // // // // //           font-size: 16px;
// // // // // // //         }

// // // // // // //         input:focus {
// // // // // // //           outline: none;
// // // // // // //           border-color: #007bff;
// // // // // // //           box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
// // // // // // //         }

// // // // // // //         button {
// // // // // // //           background: #f5f5f5;
// // // // // // //           border: 1px solid #ddd;
// // // // // // //           padding: 8px 15px;
// // // // // // //           border-radius: 4px;
// // // // // // //           cursor: pointer;
// // // // // // //           font-size: 14px;
// // // // // // //         }

// // // // // // //         button:hover {
// // // // // // //           background: #e9e9e9;
// // // // // // //         }

// // // // // // //         .explanation {
// // // // // // //           background: #f8f9fa;
// // // // // // //           padding: 20px;
// // // // // // //           border-radius: 4px;
// // // // // // //           margin-top: 20px;
// // // // // // //         }

// // // // // // //         .explanation p {
// // // // // // //           margin: 8px 0;
// // // // // // //           color: #444;
// // // // // // //         }

// // // // // // //         .explanation .formula {
// // // // // // //           font-weight: bold;
// // // // // // //           color: #007bff;
// // // // // // //         }

// // // // // // //         .reference {
// // // // // // //           margin-top: 20px;
// // // // // // //           padding-top: 20px;
// // // // // // //           border-top: 1px solid #eee;
// // // // // // //         }

// // // // // // //         .reference p {
// // // // // // //           color: #666;
// // // // // // //           font-size: 14px;
// // // // // // //           margin: 4px 0;
// // // // // // //         }

// // // // // // //         svg {
// // // // // // //           background: #fff;
// // // // // // //           border: 1px solid #eee;
// // // // // // //           border-radius: 50%;
// // // // // // //         }

// // // // // // //         svg text {
// // // // // // //           font-size: 14px;
// // // // // // //           fill: #333;
// // // // // // //         }
// // // // // // //       `}</style>

// // // // // // //       <div className="container">
// // // // // // //         <div className="controls">
// // // // // // //           <h1>Angle Converter</h1>
          
// // // // // // //           <div className="input-row">
// // // // // // //             <div className="input-group">
// // // // // // //               <label>Degrees (°)</label>
// // // // // // //               <div style={{ display: 'flex', gap: '10px' }}>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   value={degrees}
// // // // // // //                   onChange={handleDegreesChange}
// // // // // // //                   placeholder="Enter degrees"
// // // // // // //                 />
// // // // // // //                 <button onClick={() => setDegrees('0')}>Reset</button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="input-row">
// // // // // // //             <div className="input-group">
// // // // // // //               <label>Radians (rad)</label>
// // // // // // //               <div style={{ display: 'flex', gap: '10px' }}>
// // // // // // //                 <input
// // // // // // //                   type="number"
// // // // // // //                   value={radians}
// // // // // // //                   onChange={handleRadiansChange}
// // // // // // //                   placeholder="Enter radians"
// // // // // // //                 />
// // // // // // //                 <button onClick={() => setRadians('0')}>Reset</button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="explanation">
// // // // // // //             {degrees && !isNaN(degrees) && (
// // // // // // //               <>
// // // // // // //                 <p>Converting from Degrees to Radians:</p>
// // // // // // //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //             {radians && !isNaN(radians) && (
// // // // // // //               <>
// // // // // // //                 <p>Converting from Radians to Degrees:</p>
// // // // // // //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // // // // //               </>
// // // // // // //             )}
// // // // // // //           </div>

// // // // // // //           <div className="reference">
// // // // // // //             <p>π ≈ 3.14159 rad = 180°</p>
// // // // // // //             <p>1 rad ≈ 57.2958°</p>
// // // // // // //             <p>1° = 0.01745 rad</p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="visualization">
// // // // // // //           <svg width="300" height="300">
// // // // // // //             <circle 
// // // // // // //               cx="150" 
// // // // // // //               cy="150" 
// // // // // // //               r="120" 
// // // // // // //               fill="none" 
// // // // // // //               stroke="#eee" 
// // // // // // //               strokeWidth="2"
// // // // // // //             />
// // // // // // //             <path
// // // // // // //               d={`M 150 30 
// // // // // // //                   A 120 120 0 ${Math.abs(parseFloat(degrees || 0)) > 180 ? 1 : 0} 1 
// // // // // // //                   ${150 + 120 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // // //                   ${150 - 120 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // // //                   L 150 150`}
// // // // // // //               fill="none"
// // // // // // //               stroke="#007bff"
// // // // // // //               strokeWidth="2"
// // // // // // //             />
// // // // // // //             <line
// // // // // // //               x1="150"
// // // // // // //               y1="150"
// // // // // // //               x2="150"
// // // // // // //               y2="30"
// // // // // // //               stroke="#007bff"
// // // // // // //               strokeWidth="2"
// // // // // // //             />
// // // // // // //             <line
// // // // // // //               x1="150"
// // // // // // //               y1="150"
// // // // // // //               x2={150 + 120 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // // //               y2={150 - 120 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // // //               stroke="#007bff"
// // // // // // //               strokeWidth="2"
// // // // // // //             />
// // // // // // //             <text
// // // // // // //               x="150"
// // // // // // //               y="150"
// // // // // // //               textAnchor="middle"
// // // // // // //               dy="-10"
// // // // // // //             >
// // // // // // //               {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // // // // //             </text>
// // // // // // //           </svg>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // components/AngleConverter.jsx
// // // // // // import { useState } from 'react';

// // // // // // export default function AngleConverter() {
// // // // // //   const [degrees, setDegrees] = useState('0');
// // // // // //   const [radians, setRadians] = useState('0');
// // // // // //   const [lastChanged, setLastChanged] = useState(null);

// // // // // //   const handleDegreesChange = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setDegrees(value);
// // // // // //     setLastChanged('degrees');
    
// // // // // //     if (value === '' || isNaN(value)) {
// // // // // //       setRadians('');
// // // // // //       return;
// // // // // //     }
// // // // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // // // //     setRadians(rad);
// // // // // //   };

// // // // // //   const handleRadiansChange = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setRadians(value);
// // // // // //     setLastChanged('radians');
    
// // // // // //     if (value === '' || isNaN(value)) {
// // // // // //       setDegrees('');
// // // // // //       return;
// // // // // //     }
// // // // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // // // //     setDegrees(deg);
// // // // // //   };

// // // // // //   const handleResetAll = () => {
// // // // // //     setDegrees('0');
// // // // // //     setRadians('0');
// // // // // //     setLastChanged(null);
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <style jsx>{`
// // // // // //         .container {
// // // // // //           display: flex;
// // // // // //           max-width: 1200px;
// // // // // //           margin: 40px auto;
// // // // // //           background: #fff;
// // // // // //           border: 2px solid #2563eb;
// // // // // //           border-radius: 12px;
// // // // // //         }

// // // // // //         .controls {
// // // // // //           flex: 1;
// // // // // //           padding: 40px;
// // // // // //           border-right: 2px solid #2563eb;
// // // // // //         }

// // // // // //         .header {
// // // // // //           display: flex;
// // // // // //           justify-content: space-between;
// // // // // //           align-items: center;
// // // // // //           margin-bottom: 40px;
// // // // // //         }

// // // // // //         h1 {
// // // // // //           color: #1e40af;
// // // // // //           font-size: 28px;
// // // // // //           margin: 0;
// // // // // //         }

// // // // // //         .reset-all {
// // // // // //           background: #2563eb;
// // // // // //           color: white;
// // // // // //           padding: 10px 20px;
// // // // // //           border: none;
// // // // // //           border-radius: 6px;
// // // // // //           cursor: pointer;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         .reset-all:hover {
// // // // // //           background: #1e40af;
// // // // // //         }

// // // // // //         .input-section {
// // // // // //           margin-bottom: 30px;
// // // // // //           border: 1px solid #94a3b8;
// // // // // //           padding: 20px;
// // // // // //           border-radius: 8px;
// // // // // //         }

// // // // // //         .input-row {
// // // // // //           display: flex;
// // // // // //           gap: 10px;
// // // // // //           margin-bottom: 10px;
// // // // // //         }

// // // // // //         label {
// // // // // //           display: block;
// // // // // //           margin-bottom: 10px;
// // // // // //           color: #1e40af;
// // // // // //           font-size: 16px;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         input {
// // // // // //           flex: 1;
// // // // // //           padding: 12px;
// // // // // //           border: 2px solid #94a3b8;
// // // // // //           border-radius: 6px;
// // // // // //           font-size: 16px;
// // // // // //         }

// // // // // //         input:focus {
// // // // // //           outline: none;
// // // // // //           border-color: #2563eb;
// // // // // //         }

// // // // // //         .reset-input {
// // // // // //           background: #e2e8f0;
// // // // // //           border: none;
// // // // // //           padding: 0 15px;
// // // // // //           border-radius: 6px;
// // // // // //           cursor: pointer;
// // // // // //         }

// // // // // //         .reset-input:hover {
// // // // // //           background: #cbd5e1;
// // // // // //         }

// // // // // //         .explanation {
// // // // // //           margin-top: 30px;
// // // // // //           padding: 20px;
// // // // // //           background: #eff6ff;
// // // // // //           border-radius: 8px;
// // // // // //         }

// // // // // //         .formula {
// // // // // //           font-size: 18px;
// // // // // //           color: #1e40af;
// // // // // //           margin: 10px 0;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         .reference {
// // // // // //           margin-top: 30px;
// // // // // //           padding-top: 20px;
// // // // // //           border-top: 2px solid #94a3b8;
// // // // // //         }

// // // // // //         .reference p {
// // // // // //           color: #475569;
// // // // // //           font-size: 16px;
// // // // // //           margin: 8px 0;
// // // // // //         }

// // // // // //         .visualization {
// // // // // //           flex: 1;
// // // // // //           padding: 40px;
// // // // // //           display: flex;
// // // // // //           align-items: flex-start;
// // // // // //           justify-content: center;
// // // // // //         }

// // // // // //         svg {
// // // // // //           border: 2px solid #94a3b8;
// // // // // //           border-radius: 50%;
// // // // // //           padding: 10px;
// // // // // //         }
// // // // // //       `}</style>

// // // // // //       <div className="container">
// // // // // //         <div className="controls">
// // // // // //           <div className="header">
// // // // // //             <h1>Angle Converter</h1>
// // // // // //             <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // // // // //           </div>

// // // // // //           <div className="input-section">
// // // // // //             <label>Degrees (°)</label>
// // // // // //             <div className="input-row">
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={degrees}
// // // // // //                 onChange={handleDegreesChange}
// // // // // //                 placeholder="Enter degrees"
// // // // // //               />
// // // // // //               <button className="reset-input" onClick={() => {
// // // // // //                 setDegrees('0');
// // // // // //                 setRadians('0.000000');
// // // // // //                 setLastChanged('degrees');
// // // // // //               }}>Reset</button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="input-section">
// // // // // //             <label>Radians (rad)</label>
// // // // // //             <div className="input-row">
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 value={radians}
// // // // // //                 onChange={handleRadiansChange}
// // // // // //                 placeholder="Enter radians"
// // // // // //               />
// // // // // //               <button className="reset-input" onClick={() => {
// // // // // //                 setRadians('0');
// // // // // //                 setDegrees('0.000000');
// // // // // //                 setLastChanged('radians');
// // // // // //               }}>Reset</button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // // // // //             <div className="explanation">
// // // // // //               <p>Converting from Degrees to Radians:</p>
// // // // // //               <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // // // // //             <div className="explanation">
// // // // // //               <p>Converting from Radians to Degrees:</p>
// // // // // //               <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="reference">
// // // // // //             <p>Common conversions:</p>
// // // // // //             <p>π ≈ 3.14159 rad = 180°</p>
// // // // // //             <p>1 rad ≈ 57.2958°</p>
// // // // // //             <p>1° = 0.01745 rad</p>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="visualization">
// // // // // //           <svg width="300" height="300">
// // // // // //             <circle 
// // // // // //               cx="150" 
// // // // // //               cy="150" 
// // // // // //               r="120" 
// // // // // //               fill="none" 
// // // // // //               stroke="#94a3b8" 
// // // // // //               strokeWidth="2"
// // // // // //             />
// // // // // //             <path
// // // // // //               d={`M 150 30 
// // // // // //                   A 120 120 0 ${Math.abs(parseFloat(degrees || 0)) > 180 ? 1 : 0} 1 
// // // // // //                   ${150 + 120 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // //                   ${150 - 120 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // //                   L 150 150`}
// // // // // //               fill="none"
// // // // // //               stroke="#2563eb"
// // // // // //               strokeWidth="2"
// // // // // //             />
// // // // // //             <line
// // // // // //               x1="150"
// // // // // //               y1="150"
// // // // // //               x2="150"
// // // // // //               y2="30"
// // // // // //               stroke="#2563eb"
// // // // // //               strokeWidth="2"
// // // // // //             />
// // // // // //             <line
// // // // // //               x1="150"
// // // // // //               y1="150"
// // // // // //               x2={150 + 120 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // //               y2={150 - 120 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // // //               stroke="#2563eb"
// // // // // //               strokeWidth="2"
// // // // // //             />
// // // // // //             <text
// // // // // //               x="150"
// // // // // //               y="140"
// // // // // //               textAnchor="middle"
// // // // // //               fill="#1e40af"
// // // // // //               style={{ fontSize: '16px', fontWeight: 500 }}
// // // // // //             >
// // // // // //               {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // // // //             </text>
// // // // // //           </svg>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // // components/AngleConverter.jsx
// // // // // import { useState } from 'react';

// // // // // export default function AngleConverter() {
// // // // //   const [degrees, setDegrees] = useState('0');
// // // // //   const [radians, setRadians] = useState('0');
// // // // //   const [lastChanged, setLastChanged] = useState(null);

// // // // //   const handleDegreesChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setDegrees(value);
// // // // //     setLastChanged('degrees');
    
// // // // //     if (value === '' || isNaN(value)) {
// // // // //       setRadians('');
// // // // //       return;
// // // // //     }
// // // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // // //     setRadians(rad);
// // // // //   };

// // // // //   const handleRadiansChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setRadians(value);
// // // // //     setLastChanged('radians');
    
// // // // //     if (value === '' || isNaN(value)) {
// // // // //       setDegrees('');
// // // // //       return;
// // // // //     }
// // // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // // //     setDegrees(deg);
// // // // //   };

// // // // //   const handleResetAll = () => {
// // // // //     setDegrees('0');
// // // // //     setRadians('0');
// // // // //     setLastChanged(null);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <style jsx>{`
// // // // //         .container {
// // // // //           display: flex;
// // // // //           max-width: 900px;
// // // // //           margin: 20px auto;
// // // // //           background: #fff;
// // // // //           border: 1px solid #2563eb;
// // // // //           border-radius: 8px;
// // // // //         }

// // // // //         .controls {
// // // // //           flex: 1;
// // // // //           padding: 20px;
// // // // //           border-right: 1px solid #2563eb;
// // // // //         }

// // // // //         .header {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: center;
// // // // //           margin-bottom: 20px;
// // // // //         }

// // // // //         h1 {
// // // // //           color: #1e40af;
// // // // //           font-size: 20px;
// // // // //           margin: 0;
// // // // //         }

// // // // //         .reset-all {
// // // // //           background: #2563eb;
// // // // //           color: white;
// // // // //           padding: 6px 12px;
// // // // //           border: none;
// // // // //           border-radius: 4px;
// // // // //           cursor: pointer;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         .reset-all:hover {
// // // // //           background: #1e40af;
// // // // //         }

// // // // //         .input-section {
// // // // //           margin-bottom: 15px;
// // // // //           border: 1px solid #cbd5e1;
// // // // //           padding: 12px;
// // // // //           border-radius: 4px;
// // // // //         }

// // // // //         .input-row {
// // // // //           display: flex;
// // // // //           gap: 8px;
// // // // //         }

// // // // //         label {
// // // // //           display: block;
// // // // //           margin-bottom: 6px;
// // // // //           color: #1e40af;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         input {
// // // // //           flex: 1;
// // // // //           padding: 6px 8px;
// // // // //           border: 1px solid #cbd5e1;
// // // // //           border-radius: 4px;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         input:focus {
// // // // //           outline: none;
// // // // //           border-color: #2563eb;
// // // // //         }

// // // // //         .reset-input {
// // // // //           background: #e2e8f0;
// // // // //           border: none;
// // // // //           padding: 0 10px;
// // // // //           border-radius: 4px;
// // // // //           cursor: pointer;
// // // // //           font-size: 12px;
// // // // //         }

// // // // //         .reset-input:hover {
// // // // //           background: #cbd5e1;
// // // // //         }

// // // // //         .explanation {
// // // // //           margin-top: 15px;
// // // // //           padding: 12px;
// // // // //           background: #f8fafc;
// // // // //           border-radius: 4px;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         .formula {
// // // // //           color: #1e40af;
// // // // //           margin: 6px 0;
// // // // //           font-weight: 500;
// // // // //         }

// // // // //         .reference {
// // // // //           margin-top: 15px;
// // // // //           padding-top: 15px;
// // // // //           border-top: 1px solid #cbd5e1;
// // // // //         }

// // // // //         .reference p {
// // // // //           color: #64748b;
// // // // //           font-size: 13px;
// // // // //           margin: 4px 0;
// // // // //         }

// // // // //         .visualization {
// // // // //           flex: 1;
// // // // //           padding: 20px;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //         }

// // // // //         svg {
// // // // //           padding: 5px;
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="container">
// // // // //         <div className="controls">
// // // // //           <div className="header">
// // // // //             <h1>Angle Converter</h1>
// // // // //             <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // // // //           </div>

// // // // //           <div className="input-section">
// // // // //             <label>Degrees (°)</label>
// // // // //             <div className="input-row">
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={degrees}
// // // // //                 onChange={handleDegreesChange}
// // // // //                 placeholder="Enter degrees"
// // // // //               />
// // // // //               <button className="reset-input" onClick={() => {
// // // // //                 setDegrees('0');
// // // // //                 setRadians('0.000000');
// // // // //                 setLastChanged('degrees');
// // // // //               }}>Reset</button>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="input-section">
// // // // //             <label>Radians (rad)</label>
// // // // //             <div className="input-row">
// // // // //               <input
// // // // //                 type="number"
// // // // //                 value={radians}
// // // // //                 onChange={handleRadiansChange}
// // // // //                 placeholder="Enter radians"
// // // // //               />
// // // // //               <button className="reset-input" onClick={() => {
// // // // //                 setRadians('0');
// // // // //                 setDegrees('0.000000');
// // // // //                 setLastChanged('radians');
// // // // //               }}>Reset</button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // // // //             <div className="explanation">
// // // // //               <p>Converting from Degrees to Radians:</p>
// // // // //               <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // // //             </div>
// // // // //           )}

// // // // //           {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // // // //             <div className="explanation">
// // // // //               <p>Converting from Radians to Degrees:</p>
// // // // //               <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="reference">
// // // // //             <p>Common conversions:</p>
// // // // //             <p>π ≈ 3.14159 rad = 180°</p>
// // // // //             <p>1 rad ≈ 57.2958°</p>
// // // // //             <p>1° = 0.01745 rad</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="visualization">
// // // // //           <svg width="220" height="220">
// // // // //             <circle 
// // // // //               cx="110" 
// // // // //               cy="110" 
// // // // //               r="90" 
// // // // //               fill="none" 
// // // // //               stroke="#94a3b8" 
// // // // //               strokeWidth="1"
// // // // //             />
// // // // //             <path
// // // // //               d={`M 110 20 
// // // // //                   A 90 90 0 ${Math.abs(parseFloat(degrees || 0)) > 180 ? 1 : 0} 1 
// // // // //                   ${110 + 90 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                   ${110 - 90 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                   L 110 110`}
// // // // //               fill="none"
// // // // //               stroke="#2563eb"
// // // // //               strokeWidth="1"
// // // // //             />
// // // // //             <line
// // // // //               x1="110"
// // // // //               y1="110"
// // // // //               x2="110"
// // // // //               y2="20"
// // // // //               stroke="#2563eb"
// // // // //               strokeWidth="1"
// // // // //             />
// // // // //             <line
// // // // //               x1="110"
// // // // //               y1="110"
// // // // //               x2={110 + 90 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //               y2={110 - 90 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //               stroke="#2563eb"
// // // // //               strokeWidth="1"
// // // // //             />
// // // // //             <text
// // // // //               x="110"
// // // // //               y="105"
// // // // //               textAnchor="middle"
// // // // //               fill="#1e40af"
// // // // //               style={{ fontSize: '14px' }}
// // // // //             >
// // // // //               {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // // //             </text>
// // // // //           </svg>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // components/AngleConverter.jsx
// // // // // import { useState } from 'react';

// // // // // export default function AngleConverter() {
// // // // //   const [degrees, setDegrees] = useState('0');
// // // // //   const [radians, setRadians] = useState('0');
// // // // //   const [lastChanged, setLastChanged] = useState(null);

// // // // //   const handleDegreesChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setDegrees(value);
// // // // //     setLastChanged('degrees');
// // // // //     if (value === '' || isNaN(value)) {
// // // // //       setRadians('');
// // // // //       return;
// // // // //     }
// // // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // // //     setRadians(rad);
// // // // //   };

// // // // //   const handleRadiansChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setRadians(value);
// // // // //     setLastChanged('radians');
// // // // //     if (value === '' || isNaN(value)) {
// // // // //       setDegrees('');
// // // // //       return;
// // // // //     }
// // // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // // //     setDegrees(deg);
// // // // //   };

// // // // //   const handleResetAll = () => {
// // // // //     setDegrees('0');
// // // // //     setRadians('0');
// // // // //     setLastChanged(null);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <style jsx>{`
// // // // //         .container {
// // // // //           transform: scale(1.1);
// // // // //           transform-origin: top center;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           max-width: 900px;
// // // // //           margin: 22px auto;
// // // // //           background: #fff;
// // // // //           border: 1px solid #2563eb;
// // // // //           border-radius: 8px;
// // // // //         }

// // // // //         .main-content {
// // // // //           display: flex;
// // // // //         }

// // // // //         .controls {
// // // // //           flex: 1;
// // // // //           padding: 20px;
// // // // //           border-right: 1px solid #2563eb;
// // // // //         }

// // // // //         .header {
// // // // //           display: flex;
// // // // //           justify-content: space-between;
// // // // //           align-items: center;
// // // // //           margin-bottom: 20px;
// // // // //         }

// // // // //         h1 {
// // // // //           color: #1e40af;
// // // // //           font-size: 20px;
// // // // //           margin: 0;
// // // // //         }

// // // // //         .reset-all {
// // // // //           background: #2563eb;
// // // // //           color: white;
// // // // //           padding: 6px 12px;
// // // // //           border: none;
// // // // //           border-radius: 4px;
// // // // //           cursor: pointer;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         .reset-all:hover {
// // // // //           background: #1e40af;
// // // // //         }

// // // // //         .input-section {
// // // // //           margin-bottom: 15px;
// // // // //           border: 1px solid #cbd5e1;
// // // // //           padding: 12px;
// // // // //           border-radius: 4px;
// // // // //         }

// // // // //         .input-row {
// // // // //           display: flex;
// // // // //           gap: 8px;
// // // // //         }

// // // // //         label {
// // // // //           display: block;
// // // // //           margin-bottom: 6px;
// // // // //           color: #1e40af;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         input {
// // // // //           flex: 1;
// // // // //           padding: 6px 8px;
// // // // //           border: 1px solid #cbd5e1;
// // // // //           border-radius: 4px;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         input:focus {
// // // // //           outline: none;
// // // // //           border-color: #2563eb;
// // // // //         }

// // // // //         .reset-input {
// // // // //           background: #e2e8f0;
// // // // //           border: none;
// // // // //           padding: 0 10px;
// // // // //           border-radius: 4px;
// // // // //           cursor: pointer;
// // // // //           font-size: 12px;
// // // // //         }

// // // // //         .reset-input:hover {
// // // // //           background: #cbd5e1;
// // // // //         }

// // // // //         .explanation {
// // // // //           margin-top: 15px;
// // // // //           padding: 12px;
// // // // //           background: #f8fafc;
// // // // //           border-radius: 4px;
// // // // //           font-size: 14px;
// // // // //         }

// // // // //         .formula {
// // // // //           color: #1e40af;
// // // // //           margin: 6px 0;
// // // // //           font-weight: 500;
// // // // //         }

// // // // //         .right-section {
// // // // //           flex: 1;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //         }

// // // // //         .visualization {
// // // // //           padding: 20px;
// // // // //           display: flex;
// // // // //           align-items: flex-start;
// // // // //           justify-content: center;
// // // // //           min-height: 220px;
// // // // //         }

// // // // //         .reference {
// // // // //           padding: 15px 20px;
// // // // //           border-top: 1px solid #cbd5e1;
// // // // //         }

// // // // //         .reference p {
// // // // //           color: #64748b;
// // // // //           font-size: 13px;
// // // // //           margin: 4px 0;
// // // // //         }

// // // // //         .bottom-section {
// // // // //           display: flex;
// // // // //           border-top: 1px solid #2563eb;
// // // // //         }

// // // // //         svg {
// // // // //           margin-top: -10px;
// // // // //         }
// // // // //       `}</style>

// // // // //       <div className="container">
// // // // //         <div className="main-content">
// // // // //           <div className="controls">
// // // // //             <div className="header">
// // // // //               <h1>Angle Converter</h1>
// // // // //               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // // // //             </div>

// // // // //             <div className="input-section">
// // // // //               <label>Degrees (°)</label>
// // // // //               <div className="input-row">
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   value={degrees}
// // // // //                   onChange={handleDegreesChange}
// // // // //                   placeholder="Enter degrees"
// // // // //                 />
// // // // //                 <button className="reset-input" onClick={() => {
// // // // //                   setDegrees('0');
// // // // //                   setRadians('0.000000');
// // // // //                   setLastChanged('degrees');
// // // // //                 }}>Reset</button>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="input-section">
// // // // //               <label>Radians (rad)</label>
// // // // //               <div className="input-row">
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   value={radians}
// // // // //                   onChange={handleRadiansChange}
// // // // //                   placeholder="Enter radians"
// // // // //                 />
// // // // //                 <button className="reset-input" onClick={() => {
// // // // //                   setRadians('0');
// // // // //                   setDegrees('0.000000');
// // // // //                   setLastChanged('radians');
// // // // //                 }}>Reset</button>
// // // // //               </div>
// // // // //             </div>

// // // // //             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // // // //               <div className="explanation">
// // // // //                 <p>Converting from Degrees to Radians:</p>
// // // // //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // // //               </div>
// // // // //             )}

// // // // //             {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // // // //               <div className="explanation">
// // // // //                 <p>Converting from Radians to Degrees:</p>
// // // // //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           <div className="right-section">
// // // // //             <div className="visualization">
// // // // //               <svg width="220" height="220">
// // // // //                 <circle 
// // // // //                   cx="110" 
// // // // //                   cy="110" 
// // // // //                   r="90" 
// // // // //                   fill="none" 
// // // // //                   stroke="#94a3b8" 
// // // // //                   strokeWidth="1"
// // // // //                 />
// // // // //                 <path
// // // // //                   d={`M 110 20 
// // // // //                       A 90 90 0 ${Math.abs(parseFloat(degrees || 0)) > 180 ? 1 : 0} 1 
// // // // //                       ${110 + 90 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                       ${110 - 90 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                       L 110 110`}
// // // // //                   fill="none"
// // // // //                   stroke="#2563eb"
// // // // //                   strokeWidth="1"
// // // // //                 />
// // // // //                 <line
// // // // //                   x1="110"
// // // // //                   y1="110"
// // // // //                   x2="110"
// // // // //                   y2="20"
// // // // //                   stroke="#2563eb"
// // // // //                   strokeWidth="1"
// // // // //                 />
// // // // //                 <line
// // // // //                   x1="110"
// // // // //                   y1="110"
// // // // //                   x2={110 + 90 * Math.cos(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                   y2={110 - 90 * Math.sin(-parseFloat(degrees || 0) * (Math.PI / 180) + Math.PI/2)}
// // // // //                   stroke="#2563eb"
// // // // //                   strokeWidth="1"
// // // // //                 />
// // // // //                 <text
// // // // //                   x="110"
// // // // //                   y="105"
// // // // //                   textAnchor="middle"
// // // // //                   fill="#1e40af"
// // // // //                   style={{ fontSize: '14px' }}
// // // // //                 >
// // // // //                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // // //                 </text>
// // // // //               </svg>
// // // // //             </div>

// // // // //             <div className="reference">
// // // // //               <p>Common conversions:</p>
// // // // //               <p>π ≈ 3.14159 rad = 180°</p>
// // // // //               <p>1 rad ≈ 57.2958°</p>
// // // // //               <p>1° = 0.01745 rad</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // import { useState } from 'react';

// // // // export default function AngleConverter() {
// // // //   const [degrees, setDegrees] = useState('0');
// // // //   const [radians, setRadians] = useState('0');
// // // //   const [lastChanged, setLastChanged] = useState(null);

// // // //   const handleDegreesChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setDegrees(value);
// // // //     setLastChanged('degrees');
// // // //     if (value === '' || isNaN(value)) {
// // // //       setRadians('');
// // // //       return;
// // // //     }
// // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // //     setRadians(rad);
// // // //   };

// // // //   const handleRadiansChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setRadians(value);
// // // //     setLastChanged('radians');
// // // //     if (value === '' || isNaN(value)) {
// // // //       setDegrees('');
// // // //       return;
// // // //     }
// // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // //     setDegrees(deg);
// // // //   };

// // // //   const handleResetAll = () => {
// // // //     setDegrees('0');
// // // //     setRadians('0');
// // // //     setLastChanged(null);
// // // //   };

// // // //   const describeArc = (x, y, radius, startAngle, endAngle) => {
// // // //     const start = polarToCartesian(x, y, radius, endAngle);
// // // //     const end = polarToCartesian(x, y, radius, startAngle);
// // // //     const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
    
// // // //     return [
// // // //       "M", start.x, start.y,
// // // //       "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
// // // //       "L", x, y
// // // //     ].join(" ");
// // // //   };

// // // //   const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
// // // //     const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
// // // //     return {
// // // //       x: centerX + (radius * Math.cos(angleInRadians)),
// // // //       y: centerY + (radius * Math.sin(angleInRadians))
// // // //     };
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <style jsx>{`
// // // //         .container {
// // // //           transform: scale(1.1);
// // // //           transform-origin: top center;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           max-width: 900px;
// // // //           margin: 22px auto;
// // // //           background: #fff;
// // // //           border: 1px solid #2563eb;
// // // //           border-radius: 8px;
// // // //         }

// // // //         .main-content {
// // // //           display: flex;
// // // //         }

// // // //         .controls {
// // // //           flex: 1;
// // // //           padding: 20px;
// // // //           border-right: 1px solid #2563eb;
// // // //         }

// // // //         .header {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: center;
// // // //           margin-bottom: 20px;
// // // //         }

// // // //         h1 {
// // // //           color: #1e40af;
// // // //           font-size: 20px;
// // // //           margin: 0;
// // // //         }

// // // //         .reset-all {
// // // //           background: #2563eb;
// // // //           color: white;
// // // //           padding: 6px 12px;
// // // //           border: none;
// // // //           border-radius: 4px;
// // // //           cursor: pointer;
// // // //           font-size: 14px;
// // // //         }

// // // //         .reset-all:hover {
// // // //           background: #1e40af;
// // // //         }

// // // //         .input-section {
// // // //           margin-bottom: 15px;
// // // //           border: 1px solid #cbd5e1;
// // // //           padding: 12px;
// // // //           border-radius: 4px;
// // // //         }

// // // //         .input-row {
// // // //           display: flex;
// // // //           gap: 8px;
// // // //         }

// // // //         label {
// // // //           display: block;
// // // //           margin-bottom: 6px;
// // // //           color: #1e40af;
// // // //           font-size: 14px;
// // // //         }

// // // //         input {
// // // //           flex: 1;
// // // //           padding: 6px 8px;
// // // //           border: 1px solid #cbd5e1;
// // // //           border-radius: 4px;
// // // //           font-size: 14px;
// // // //         }

// // // //         input:focus {
// // // //           outline: none;
// // // //           border-color: #2563eb;
// // // //         }

// // // //         .reset-input {
// // // //           background: #e2e8f0;
// // // //           border: none;
// // // //           padding: 0 10px;
// // // //           border-radius: 4px;
// // // //           cursor: pointer;
// // // //           font-size: 12px;
// // // //         }

// // // //         .reset-input:hover {
// // // //           background: #cbd5e1;
// // // //         }

// // // //         .explanation {
// // // //           margin-top: 15px;
// // // //           padding: 12px;
// // // //           background: #f8fafc;
// // // //           border-radius: 4px;
// // // //           font-size: 14px;
// // // //         }

// // // //         .formula {
// // // //           color: #1e40af;
// // // //           margin: 6px 0;
// // // //           font-weight: 500;
// // // //         }

// // // //         .right-section {
// // // //           flex: 1;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //         }

// // // //         .visualization {
// // // //           padding: 20px;
// // // //           display: flex;
// // // //           align-items: flex-start;
// // // //           justify-content: center;
// // // //           min-height: 220px;
// // // //         }

// // // //         .reference {
// // // //           padding: 15px 20px;
// // // //           border-top: 1px solid #cbd5e1;
// // // //         }

// // // //         .reference p {
// // // //           color: #64748b;
// // // //           font-size: 13px;
// // // //           margin: 4px 0;
// // // //         }

// // // //         .bottom-section {
// // // //           display: flex;
// // // //           border-top: 1px solid #2563eb;
// // // //         }

// // // //         svg {
// // // //           margin-top: -10px;
// // // //         }
// // // //       `}</style>

// // // //       <div className="container">
// // // //         <div className="main-content">
// // // //           <div className="controls">
// // // //             <div className="header">
// // // //               <h1>Angle Converter</h1>
// // // //               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // // //             </div>

// // // //             <div className="input-section">
// // // //               <label>Degrees (°)</label>
// // // //               <div className="input-row">
// // // //                 <input
// // // //                   type="number"
// // // //                   value={degrees}
// // // //                   onChange={handleDegreesChange}
// // // //                   placeholder="Enter degrees"
// // // //                 />
// // // //                 <button className="reset-input" onClick={() => {
// // // //                   setDegrees('0');
// // // //                   setRadians('0.000000');
// // // //                   setLastChanged('degrees');
// // // //                 }}>Reset</button>
// // // //               </div>
// // // //             </div>

// // // //             <div className="input-section">
// // // //               <label>Radians (rad)</label>
// // // //               <div className="input-row">
// // // //                 <input
// // // //                   type="number"
// // // //                   value={radians}
// // // //                   onChange={handleRadiansChange}
// // // //                   placeholder="Enter radians"
// // // //                 />
// // // //                 <button className="reset-input" onClick={() => {
// // // //                   setRadians('0');
// // // //                   setDegrees('0.000000');
// // // //                   setLastChanged('radians');
// // // //                 }}>Reset</button>
// // // //               </div>
// // // //             </div>

// // // //             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // // //               <div className="explanation">
// // // //                 <p>Converting from Degrees to Radians:</p>
// // // //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // //               </div>
// // // //             )}

// // // //             {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // // //               <div className="explanation">
// // // //                 <p>Converting from Radians to Degrees:</p>
// // // //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           <div className="right-section">
// // // //             <div className="visualization">
// // // //               <svg width="220" height="220">
// // // //                 {/* Base circle */}
// // // //                 <circle 
// // // //                   cx="110" 
// // // //                   cy="110" 
// // // //                   r="90" 
// // // //                   fill="none" 
// // // //                   stroke="#94a3b8" 
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 {/* Angle arc */}
// // // //                 <path
// // // //                   d={describeArc(110, 110, 90, 0, parseFloat(degrees || 0))}
// // // //                   fill="none"
// // // //                   stroke="#2563eb"
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 {/* Base line (0 degrees) */}
// // // //                 <line
// // // //                   x1="110"
// // // //                   y1="110"
// // // //                   x2="110"
// // // //                   y2="20"
// // // //                   stroke="#2563eb"
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 {/* Moving line */}
// // // //                 <line
// // // //                   x1="110"
// // // //                   y1="110"
// // // //                   x2={110 + 90 * Math.cos((parseFloat(degrees || 0) - 90) * Math.PI / 180)}
// // // //                   y2={110 + 90 * Math.sin((parseFloat(degrees || 0) - 90) * Math.PI / 180)}
// // // //                   stroke="#2563eb"
// // // //                   strokeWidth="1"
// // // //                 />

// // // //                 {/* Angle text */}
// // // //                 <text
// // // //                   x="110"
// // // //                   y="105"
// // // //                   textAnchor="middle"
// // // //                   fill="#1e40af"
// // // //                   style={{ fontSize: '14px' }}
// // // //                 >
// // // //                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // //                 </text>
// // // //               </svg>
// // // //             </div>

// // // //             <div className="reference">
// // // //               <p>Common conversions:</p>
// // // //               <p>π ≈ 3.14159 rad = 180°</p>
// // // //               <p>1 rad ≈ 57.2958°</p>
// // // //               <p>1° = 0.01745 rad</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // import { useState } from 'react';

// // // // export default function AngleConverter() {
// // // //   const [degrees, setDegrees] = useState('0');
// // // //   const [radians, setRadians] = useState('0');
// // // //   const [lastChanged, setLastChanged] = useState(null);

// // // //   const handleDegreesChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setDegrees(value);
// // // //     setLastChanged('degrees');
// // // //     if (value === '' || isNaN(value)) {
// // // //       setRadians('');
// // // //       return;
// // // //     }
// // // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // // //     setRadians(rad);
// // // //   };

// // // //   const handleRadiansChange = (e) => {
// // // //     const value = e.target.value;
// // // //     setRadians(value);
// // // //     setLastChanged('radians');
// // // //     if (value === '' || isNaN(value)) {
// // // //       setDegrees('');
// // // //       return;
// // // //     }
// // // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // // //     setDegrees(deg);
// // // //   };

// // // //   const handleResetAll = () => {
// // // //     setDegrees('0');
// // // //     setRadians('0');
// // // //     setLastChanged(null);
// // // //   };

// // // //   const getArcPath = () => {
// // // //     const angle = parseFloat(degrees || 0);
// // // //     const startX = 110;
// // // //     const startY = 20; // 110 - 90 (center - radius)
// // // //     const sweepFlag = angle > 0 ? 1 : 0;
// // // //     const absAngle = Math.abs(angle);
// // // //     const largeArcFlag = absAngle > 180 ? 1 : 0;
// // // //     const radians = (angle - 90) * Math.PI / 180;
// // // //     const endX = 110 + 90 * Math.cos(radians);
// // // //     const endY = 110 + 90 * Math.sin(radians);

// // // //     return `M ${startX} ${startY} A 90 90 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} L 110 110`;
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <style jsx>{`
// // // //         .container {
// // // //           transform: scale(1.1);
// // // //           transform-origin: top center;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           max-width: 900px;
// // // //           margin: 22px auto;
// // // //           background: #fff;
// // // //           border: 1px solid #2563eb;
// // // //           border-radius: 8px;
// // // //         }

// // // //         .main-content {
// // // //           display: flex;
// // // //         }

// // // //         .controls {
// // // //           flex: 1;
// // // //           padding: 20px;
// // // //           border-right: 1px solid #2563eb;
// // // //         }

// // // //         .header {
// // // //           display: flex;
// // // //           justify-content: space-between;
// // // //           align-items: center;
// // // //           margin-bottom: 20px;
// // // //         }

// // // //         h1 {
// // // //           color: #1e40af;
// // // //           font-size: 20px;
// // // //           margin: 0;
// // // //         }

// // // //         .reset-all {
// // // //           background: #2563eb;
// // // //           color: white;
// // // //           padding: 6px 12px;
// // // //           border: none;
// // // //           border-radius: 4px;
// // // //           cursor: pointer;
// // // //           font-size: 14px;
// // // //         }

// // // //         .reset-all:hover {
// // // //           background: #1e40af;
// // // //         }

// // // //         .input-section {
// // // //           margin-bottom: 15px;
// // // //           border: 1px solid #cbd5e1;
// // // //           padding: 12px;
// // // //           border-radius: 4px;
// // // //         }

// // // //         .input-row {
// // // //           display: flex;
// // // //           gap: 8px;
// // // //         }

// // // //         label {
// // // //           display: block;
// // // //           margin-bottom: 6px;
// // // //           color: #1e40af;
// // // //           font-size: 14px;
// // // //         }

// // // //         input {
// // // //           flex: 1;
// // // //           padding: 6px 8px;
// // // //           border: 1px solid #cbd5e1;
// // // //           border-radius: 4px;
// // // //           font-size: 14px;
// // // //         }

// // // //         input:focus {
// // // //           outline: none;
// // // //           border-color: #2563eb;
// // // //         }

// // // //         .reset-input {
// // // //           background: #e2e8f0;
// // // //           border: none;
// // // //           padding: 0 10px;
// // // //           border-radius: 4px;
// // // //           cursor: pointer;
// // // //           font-size: 12px;
// // // //         }

// // // //         .reset-input:hover {
// // // //           background: #cbd5e1;
// // // //         }

// // // //         .explanation {
// // // //           margin-top: 15px;
// // // //           padding: 12px;
// // // //           background: #f8fafc;
// // // //           border-radius: 4px;
// // // //           font-size: 14px;
// // // //         }

// // // //         .formula {
// // // //           color: #1e40af;
// // // //           margin: 6px 0;
// // // //           font-weight: 500;
// // // //         }

// // // //         .right-section {
// // // //           flex: 1;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //         }

// // // //         .visualization {
// // // //           padding: 20px;
// // // //           display: flex;
// // // //           align-items: flex-start;
// // // //           justify-content: center;
// // // //           min-height: 220px;
// // // //         }

// // // //         .reference {
// // // //           padding: 15px 20px;
// // // //           border-top: 1px solid #cbd5e1;
// // // //         }

// // // //         .reference p {
// // // //           color: #64748b;
// // // //           font-size: 13px;
// // // //           margin: 4px 0;
// // // //         }

// // // //         svg {
// // // //           margin-top: -10px;
// // // //         }
// // // //       `}</style>

// // // //       <div className="container">
// // // //         <div className="main-content">
// // // //           <div className="controls">
// // // //             <div className="header">
// // // //               <h1>Angle Converter</h1>
// // // //               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // // //             </div>

// // // //             <div className="input-section">
// // // //               <label>Degrees (°)</label>
// // // //               <div className="input-row">
// // // //                 <input
// // // //                   type="number"
// // // //                   value={degrees}
// // // //                   onChange={handleDegreesChange}
// // // //                   placeholder="Enter degrees"
// // // //                 />
// // // //                 <button className="reset-input" onClick={() => {
// // // //                   setDegrees('0');
// // // //                   setRadians('0.000000');
// // // //                   setLastChanged('degrees');
// // // //                 }}>Reset</button>
// // // //               </div>
// // // //             </div>

// // // //             <div className="input-section">
// // // //               <label>Radians (rad)</label>
// // // //               <div className="input-row">
// // // //                 <input
// // // //                   type="number"
// // // //                   value={radians}
// // // //                   onChange={handleRadiansChange}
// // // //                   placeholder="Enter radians"
// // // //                 />
// // // //                 <button className="reset-input" onClick={() => {
// // // //                   setRadians('0');
// // // //                   setDegrees('0.000000');
// // // //                   setLastChanged('radians');
// // // //                 }}>Reset</button>
// // // //               </div>
// // // //             </div>

// // // //             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // // //               <div className="explanation">
// // // //                 <p>Converting from Degrees to Radians:</p>
// // // //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // // //               </div>
// // // //             )}

// // // //             {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // // //               <div className="explanation">
// // // //                 <p>Converting from Radians to Degrees:</p>
// // // //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           <div className="right-section">
// // // //             <div className="visualization">
// // // //               <svg width="220" height="220">
// // // //                 <circle 
// // // //                   cx="110" 
// // // //                   cy="110" 
// // // //                   r="90" 
// // // //                   fill="none" 
// // // //                   stroke="#94a3b8" 
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 <path
// // // //                   d={getArcPath()}
// // // //                   fill="none"
// // // //                   stroke="#2563eb"
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 <line
// // // //                   x1="110"
// // // //                   y1="110"
// // // //                   x2="110"
// // // //                   y2="20"
// // // //                   stroke="#2563eb"
// // // //                   strokeWidth="1"
// // // //                 />
                
// // // //                 <text
// // // //                   x="110"
// // // //                   y="105"
// // // //                   textAnchor="middle"
// // // //                   fill="#1e40af"
// // // //                   style={{ fontSize: '14px' }}
// // // //                 >
// // // //                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // // //                 </text>
// // // //               </svg>
// // // //             </div>

// // // //             <div className="reference">
// // // //               <p>Common conversions:</p>
// // // //               <p>π ≈ 3.14159 rad = 180°</p>
// // // //               <p>1 rad ≈ 57.2958°</p>
// // // //               <p>1° = 0.01745 rad</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // import { useState } from 'react';

// // // export default function AngleConverter() {
// // //   const [degrees, setDegrees] = useState('0');
// // //   const [radians, setRadians] = useState('0');
// // //   const [lastChanged, setLastChanged] = useState(null);

// // //   const handleDegreesChange = (e) => {
// // //     const value = e.target.value;
// // //     setDegrees(value);
// // //     setLastChanged('degrees');
// // //     if (value === '' || isNaN(value)) {
// // //       setRadians('');
// // //       return;
// // //     }
// // //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// // //     setRadians(rad);
// // //   };

// // //   const handleRadiansChange = (e) => {
// // //     const value = e.target.value;
// // //     setRadians(value);
// // //     setLastChanged('radians');
// // //     if (value === '' || isNaN(value)) {
// // //       setDegrees('');
// // //       return;
// // //     }
// // //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// // //     setDegrees(deg);
// // //   };

// // //   const handleResetAll = () => {
// // //     setDegrees('0');
// // //     setRadians('0');
// // //     setLastChanged(null);
// // //   };

// // //   const getArcPath = () => {
// // //     const angle = parseFloat(degrees || 0);
// // //     const centerX = 110;
// // //     const centerY = 110;
// // //     const radius = 90;
    
// // //     // Convert angle to radians and adjust for SVG coordinate system
// // //     const startAngle = -Math.PI/2;  // Start from top (-90 degrees)
// // //     const endAngle = (angle * Math.PI/180) - Math.PI/2;
    
// // //     // Calculate start and end points
// // //     const startX = centerX + radius * Math.cos(startAngle);
// // //     const startY = centerY + radius * Math.sin(startAngle);
// // //     const endX = centerX + radius * Math.cos(endAngle);
// // //     const endY = centerY + radius * Math.sin(endAngle);
    
// // //     // Determine flags
// // //     const largeArcFlag = Math.abs(angle) > 180 ? 1 : 0;
// // //     const sweepFlag = angle > 0 ? 1 : 0;
    
// // //     return `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`;
// // //   };

// // //   return (
// // //     <>
// // //       <style jsx>{`
// // //         .container {
// // //           transform: scale(1.1);
// // //           transform-origin: top center;
// // //           display: flex;
// // //           flex-direction: column;
// // //           max-width: 900px;
// // //           margin: 22px auto;
// // //           background: #fff;
// // //           border: 1px solid #2563eb;
// // //           border-radius: 8px;
// // //         }

// // //         .main-content {
// // //           display: flex;
// // //         }

// // //         .controls {
// // //           flex: 1;
// // //           padding: 20px;
// // //           border-right: 1px solid #2563eb;
// // //         }

// // //         .header {
// // //           display: flex;
// // //           justify-content: space-between;
// // //           align-items: center;
// // //           margin-bottom: 20px;
// // //         }

// // //         h1 {
// // //           color: #1e40af;
// // //           font-size: 20px;
// // //           margin: 0;
// // //         }

// // //         .reset-all {
// // //           background: #2563eb;
// // //           color: white;
// // //           padding: 6px 12px;
// // //           border: none;
// // //           border-radius: 4px;
// // //           cursor: pointer;
// // //           font-size: 14px;
// // //         }

// // //         .reset-all:hover {
// // //           background: #1e40af;
// // //         }

// // //         .input-section {
// // //           margin-bottom: 15px;
// // //           border: 1px solid #cbd5e1;
// // //           padding: 12px;
// // //           border-radius: 4px;
// // //         }

// // //         .input-row {
// // //           display: flex;
// // //           gap: 8px;
// // //         }

// // //         label {
// // //           display: block;
// // //           margin-bottom: 6px;
// // //           color: #1e40af;
// // //           font-size: 14px;
// // //         }

// // //         input {
// // //           flex: 1;
// // //           padding: 6px 8px;
// // //           border: 1px solid #cbd5e1;
// // //           border-radius: 4px;
// // //           font-size: 14px;
// // //         }

// // //         input:focus {
// // //           outline: none;
// // //           border-color: #2563eb;
// // //         }

// // //         .reset-input {
// // //           background: #e2e8f0;
// // //           border: none;
// // //           padding: 0 10px;
// // //           border-radius: 4px;
// // //           cursor: pointer;
// // //           font-size: 12px;
// // //         }

// // //         .reset-input:hover {
// // //           background: #cbd5e1;
// // //         }

// // //         .explanation {
// // //           margin-top: 15px;
// // //           padding: 12px;
// // //           background: #f8fafc;
// // //           border-radius: 4px;
// // //           font-size: 14px;
// // //         }

// // //         .formula {
// // //           color: #1e40af;
// // //           margin: 6px 0;
// // //           font-weight: 500;
// // //         }

// // //         .right-section {
// // //           flex: 1;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .visualization {
// // //           padding: 20px;
// // //           display: flex;
// // //           align-items: flex-start;
// // //           justify-content: center;
// // //           min-height: 220px;
// // //         }

// // //         .reference {
// // //           padding: 15px 20px;
// // //           border-top: 1px solid #cbd5e1;
// // //         }

// // //         .reference p {
// // //           color: #64748b;
// // //           font-size: 13px;
// // //           margin: 4px 0;
// // //         }

// // //         svg {
// // //           margin-top: -10px;
// // //         }
// // //       `}</style>

// // //       <div className="container">
// // //         <div className="main-content">
// // //           <div className="controls">
// // //             <div className="header">
// // //               <h1>Angle Converter</h1>
// // //               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// // //             </div>

// // //             <div className="input-section">
// // //               <label>Degrees (°)</label>
// // //               <div className="input-row">
// // //                 <input
// // //                   type="number"
// // //                   value={degrees}
// // //                   onChange={handleDegreesChange}
// // //                   placeholder="Enter degrees"
// // //                 />
// // //                 <button className="reset-input" onClick={() => {
// // //                   setDegrees('0');
// // //                   setRadians('0.000000');
// // //                   setLastChanged('degrees');
// // //                 }}>Reset</button>
// // //               </div>
// // //             </div>

// // //             <div className="input-section">
// // //               <label>Radians (rad)</label>
// // //               <div className="input-row">
// // //                 <input
// // //                   type="number"
// // //                   value={radians}
// // //                   onChange={handleRadiansChange}
// // //                   placeholder="Enter radians"
// // //                 />
// // //                 <button className="reset-input" onClick={() => {
// // //                   setRadians('0');
// // //                   setDegrees('0.000000');
// // //                   setLastChanged('radians');
// // //                 }}>Reset</button>
// // //               </div>
// // //             </div>

// // //             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// // //               <div className="explanation">
// // //                 <p>Converting from Degrees to Radians:</p>
// // //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// // //               </div>
// // //             )}

// // //             {lastChanged === 'radians' && radians && !isNaN(radians) && (
// // //               <div className="explanation">
// // //                 <p>Converting from Radians to Degrees:</p>
// // //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// // //               </div>
// // //             )}
// // //           </div>

// // //           <div className="right-section">
// // //             <div className="visualization">
// // //               <svg width="220" height="220">
// // //                 {/* Background circle */}
// // //                 <circle 
// // //                   cx="110" 
// // //                   cy="110" 
// // //                   r="90" 
// // //                   fill="none" 
// // //                   stroke="#94a3b8" 
// // //                   strokeWidth="1"
// // //                 />
                
// // //                 {/* Angle arc */}
// // //                 <path
// // //                   d={getArcPath()}
// // //                   fill="#e6efff"
// // //                   stroke="#2563eb"
// // //                   strokeWidth="1.5"
// // //                 />
                
// // //                 {/* Reference line */}
// // //                 <line
// // //                   x1="110"
// // //                   y1="110"
// // //                   x2="110"
// // //                   y2="20"
// // //                   stroke="#2563eb"
// // //                   strokeWidth="1.5"
// // //                   strokeDasharray="4 2"
// // //                 />
                
// // //                 {/* Angle text */}
// // //                 <text
// // //                   x="110"
// // //                   y="105"
// // //                   textAnchor="middle"
// // //                   fill="#1e40af"
// // //                   style={{ fontSize: '14px' }}
// // //                 >
// // //                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// // //                 </text>
// // //               </svg>
// // //             </div>

// // //             <div className="reference">
// // //               <p>Common conversions:</p>
// // //               <p>π ≈ 3.14159 rad = 180°</p>
// // //               <p>1 rad ≈ 57.2958°</p>
// // //               <p>1° = 0.01745 rad</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // import { useState } from 'react';

// // export default function AngleConverter() {
// //   const [degrees, setDegrees] = useState('0');
// //   const [radians, setRadians] = useState('0');
// //   const [lastChanged, setLastChanged] = useState(null);

// //   const normalizeAngle = (angle) => {
// //     while (angle > 360) {
// //       angle -= 360;
// //     }
// //     while (angle < 0) {
// //       angle += 360;
// //     }
// //     return angle;
// //   };

// //   const handleDegreesChange = (e) => {
// //     const value = e.target.value;
// //     setDegrees(value);
// //     setLastChanged('degrees');
// //     if (value === '' || isNaN(value)) {
// //       setRadians('');
// //       return;
// //     }
// //     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
// //     setRadians(rad);
// //   };

// //   const handleRadiansChange = (e) => {
// //     const value = e.target.value;
// //     setRadians(value);
// //     setLastChanged('radians');
// //     if (value === '' || isNaN(value)) {
// //       setDegrees('');
// //       return;
// //     }
// //     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
// //     setDegrees(deg);
// //   };

// //   const handleResetAll = () => {
// //     setDegrees('0');
// //     setRadians('0');
// //     setLastChanged(null);
// //   };

// //   const getArcPath = () => {
// //     const normalizedAngle = normalizeAngle(parseFloat(degrees || 0));
// //     const centerX = 110;
// //     const centerY = 110;
// //     const radius = 90;
    
// //     const startAngle = -Math.PI/2;
// //     const endAngle = (normalizedAngle * Math.PI/180) - Math.PI/2;
    
// //     const startX = centerX + radius * Math.cos(startAngle);
// //     const startY = centerY + radius * Math.sin(startAngle);
// //     const endX = centerX + radius * Math.cos(endAngle);
// //     const endY = centerY + radius * Math.sin(endAngle);
    
// //     const largeArcFlag = normalizedAngle > 180 ? 1 : 0;
// //     const sweepFlag = normalizedAngle > 0 ? 1 : 0;
    
// //     return `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`;
// //   };

// //   return (
// //     <>
// //       <style jsx>{`
// //         .container {
// //           transform: scale(1.1);
// //           transform-origin: top center;
// //           display: flex;
// //           flex-direction: column;
// //           max-width: 900px;
// //           margin: 22px auto;
// //           background: #fff;
// //           border: 1px solid #2563eb;
// //           border-radius: 8px;
// //         }

// //         .main-content {
// //           display: flex;
// //         }

// //         .controls {
// //           flex: 1;
// //           padding: 20px;
// //           border-right: 1px solid #2563eb;
// //         }

// //         .header {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           margin-bottom: 20px;
// //         }

// //         h1 {
// //           color: #1e40af;
// //           font-size: 20px;
// //           margin: 0;
// //         }

// //         .reset-all {
// //           background: #2563eb;
// //           color: white;
// //           padding: 6px 12px;
// //           border: none;
// //           border-radius: 4px;
// //           cursor: pointer;
// //           font-size: 14px;
// //         }

// //         .reset-all:hover {
// //           background: #1e40af;
// //         }

// //         .input-section {
// //           margin-bottom: 15px;
// //           border: 1px solid #cbd5e1;
// //           padding: 12px;
// //           border-radius: 4px;
// //         }

// //         .input-row {
// //           display: flex;
// //           gap: 8px;
// //         }

// //         label {
// //           display: block;
// //           margin-bottom: 6px;
// //           color: #1e40af;
// //           font-size: 14px;
// //         }

// //         input {
// //           flex: 1;
// //           padding: 6px 8px;
// //           border: 1px solid #cbd5e1;
// //           border-radius: 4px;
// //           font-size: 14px;
// //         }

// //         input:focus {
// //           outline: none;
// //           border-color: #2563eb;
// //         }

// //         .reset-input {
// //           background: #e2e8f0;
// //           border: none;
// //           padding: 0 10px;
// //           border-radius: 4px;
// //           cursor: pointer;
// //           font-size: 12px;
// //         }

// //         .reset-input:hover {
// //           background: #cbd5e1;
// //         }

// //         .explanation {
// //           margin-top: 15px;
// //           padding: 12px;
// //           background: #f8fafc;
// //           border-radius: 4px;
// //           font-size: 14px;
// //         }

// //         .formula {
// //           color: #1e40af;
// //           margin: 6px 0;
// //           font-weight: 500;
// //         }

// //         .right-section {
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .visualization {
// //           padding: 20px;
// //           display: flex;
// //           align-items: flex-start;
// //           justify-content: center;
// //           min-height: 220px;
// //         }

// //         .reference {
// //           padding: 15px 20px;
// //           border-top: 1px solid #cbd5e1;
// //         }

// //         .reference p {
// //           color: #64748b;
// //           font-size: 13px;
// //           margin: 4px 0;
// //         }

// //         svg {
// //           margin-top: -10px;
// //         }
// //       `}</style>

// //       <div className="container">
// //         <div className="main-content">
// //           <div className="controls">
// //             <div className="header">
// //               <h1>Angle Converter</h1>
// //               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
// //             </div>

// //             <div className="input-section">
// //               <label>Degrees (°)</label>
// //               <div className="input-row">
// //                 <input
// //                   type="number"
// //                   value={degrees}
// //                   onChange={handleDegreesChange}
// //                   placeholder="Enter degrees"
// //                 />
// //                 <button className="reset-input" onClick={() => {
// //                   setDegrees('0');
// //                   setRadians('0.000000');
// //                   setLastChanged('degrees');
// //                 }}>Reset</button>
// //               </div>
// //             </div>

// //             <div className="input-section">
// //               <label>Radians (rad)</label>
// //               <div className="input-row">
// //                 <input
// //                   type="number"
// //                   value={radians}
// //                   onChange={handleRadiansChange}
// //                   placeholder="Enter radians"
// //                 />
// //                 <button className="reset-input" onClick={() => {
// //                   setRadians('0');
// //                   setDegrees('0.000000');
// //                   setLastChanged('radians');
// //                 }}>Reset</button>
// //               </div>
// //             </div>

// //             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
// //               <div className="explanation">
// //                 <p>Converting from Degrees to Radians:</p>
// //                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
// //               </div>
// //             )}

// //             {lastChanged === 'radians' && radians && !isNaN(radians) && (
// //               <div className="explanation">
// //                 <p>Converting from Radians to Degrees:</p>
// //                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
// //               </div>
// //             )}
// //           </div>

// //           <div className="right-section">
// //             <div className="visualization">
// //               <svg width="220" height="220">
// //                 <circle 
// //                   cx="110" 
// //                   cy="110" 
// //                   r="90" 
// //                   fill="none" 
// //                   stroke="#94a3b8" 
// //                   strokeWidth="1"
// //                 />
                
// //                 <path
// //                   d={getArcPath()}
// //                   fill="#e6efff"
// //                   stroke="#2563eb"
// //                   strokeWidth="1.5"
// //                 />
                
// //                 <line
// //                   x1="110"
// //                   y1="110"
// //                   x2="110"
// //                   y2="20"
// //                   stroke="#2563eb"
// //                   strokeWidth="1.5"
// //                   strokeDasharray="4 2"
// //                 />
                
// //                 <text
// //                   x="110"
// //                   y="105"
// //                   textAnchor="middle"
// //                   fill="#1e40af"
// //                   style={{ fontSize: '14px' }}
// //                 >
// //                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
// //                 </text>
// //               </svg>
// //             </div>

// //             <div className="reference">
// //               <p>Common conversions:</p>
// //               <p>π ≈ 3.14159 rad = 180°</p>
// //               <p>1 rad ≈ 57.2958°</p>
// //               <p>1° = 0.01745 rad</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import { useState } from 'react';

// export default function AngleConverter() {
//   const [degrees, setDegrees] = useState('0');
//   const [radians, setRadians] = useState('0');
//   const [lastChanged, setLastChanged] = useState(null);

//   const normalizeAngle = (angle) => {
//     const rotations = Math.floor(Math.abs(angle) / 360);
//     const normalizedAngle = angle % 360;
//     return {
//       normalizedAngle: normalizedAngle >= 0 ? normalizedAngle : normalizedAngle + 360,
//       rotations
//     };
//   };

//   const handleDegreesChange = (e) => {
//     const value = e.target.value;
//     setDegrees(value);
//     setLastChanged('degrees');
//     if (value === '' || isNaN(value)) {
//       setRadians('');
//       return;
//     }
//     const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
//     setRadians(rad);
//   };

//   const handleRadiansChange = (e) => {
//     const value = e.target.value;
//     setRadians(value);
//     setLastChanged('radians');
//     if (value === '' || isNaN(value)) {
//       setDegrees('');
//       return;
//     }
//     const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
//     setDegrees(deg);
//   };

//   const handleResetAll = () => {
//     setDegrees('0');
//     setRadians('0');
//     setLastChanged(null);
//   };

//   const getArcPath = () => {
//     const angle = parseFloat(degrees || 0);
//     const { normalizedAngle, rotations } = normalizeAngle(angle);
//     const centerX = 110;
//     const centerY = 110;
//     const radius = 90;
    
//     const startAngle = -Math.PI/2;
//     const endAngle = (normalizedAngle * Math.PI/180) - Math.PI/2;
    
//     const startX = centerX + radius * Math.cos(startAngle);
//     const startY = centerY + radius * Math.sin(startAngle);
//     const endX = centerX + radius * Math.cos(endAngle);
//     const endY = centerY + radius * Math.sin(endAngle);
    
//     const largeArcFlag = normalizedAngle > 180 ? 1 : 0;
//     const sweepFlag = angle >= 0 ? 1 : 0;

//     return {
//       currentPath: `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`,
//       rotations
//     };
//   };

//   const { currentPath, rotations } = getArcPath();

//   return (
//     <>
//       <style jsx>{`
//         .container {
//           transform: scale(1.1);
//           transform-origin: top center;
//           display: flex;
//           flex-direction: column;
//           max-width: 900px;
//           margin: 22px auto;
//           background: #fff;
//           border: 1px solid #2563eb;
//           border-radius: 8px;
//         }

//         .main-content {
//           display: flex;
//         }

//         .controls {
//           flex: 1;
//           padding: 20px;
//           border-right: 1px solid #2563eb;
//         }

//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 20px;
//         }

//         h1 {
//           color: #1e40af;
//           font-size: 20px;
//           margin: 0;
//         }

//         .reset-all {
//           background: #2563eb;
//           color: white;
//           padding: 6px 12px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           font-size: 14px;
//         }

//         .reset-all:hover {
//           background: #1e40af;
//         }

//         .input-section {
//           margin-bottom: 15px;
//           border: 1px solid #cbd5e1;
//           padding: 12px;
//           border-radius: 4px;
//         }

//         .input-row {
//           display: flex;
//           gap: 8px;
//         }

//         label {
//           display: block;
//           margin-bottom: 6px;
//           color: #1e40af;
//           font-size: 14px;
//         }

//         input {
//           flex: 1;
//           padding: 6px 8px;
//           border: 1px solid #cbd5e1;
//           border-radius: 4px;
//           font-size: 14px;
//         }

//         input:focus {
//           outline: none;
//           border-color: #2563eb;
//         }

//         .reset-input {
//           background: #e2e8f0;
//           border: none;
//           padding: 0 10px;
//           border-radius: 4px;
//           cursor: pointer;
//           font-size: 12px;
//         }

//         .reset-input:hover {
//           background: #cbd5e1;
//         }

//         .explanation {
//           margin-top: 15px;
//           padding: 12px;
//           background: #f8fafc;
//           border-radius: 4px;
//           font-size: 14px;
//         }

//         .formula {
//           color: #1e40af;
//           margin: 6px 0;
//           font-weight: 500;
//         }

//         .right-section {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .visualization {
//           padding: 20px;
//           display: flex;
//           align-items: flex-start;
//           justify-content: center;
//           min-height: 220px;
//         }

//         .reference {
//           padding: 15px 20px;
//           border-top: 1px solid #cbd5e1;
//         }

//         .reference p {
//           color: #64748b;
//           font-size: 13px;
//           margin: 4px 0;
//         }

//         svg {
//           margin-top: -10px;
//         }

//         .rotation-text {
//           fill: #2563eb;
//           font-size: 12px;
//           font-weight: 500;
//         }
//       `}</style>

//       <div className="container">
//         <div className="main-content">
//           <div className="controls">
//             <div className="header">
//               <h1>Angle Converter</h1>
//               <button className="reset-all" onClick={handleResetAll}>Reset All</button>
//             </div>

//             <div className="input-section">
//               <label>Degrees (°)</label>
//               <div className="input-row">
//                 <input
//                   type="number"
//                   value={degrees}
//                   onChange={handleDegreesChange}
//                   placeholder="Enter degrees"
//                 />
//                 <button className="reset-input" onClick={() => {
//                   setDegrees('0');
//                   setRadians('0.000000');
//                   setLastChanged('degrees');
//                 }}>Reset</button>
//               </div>
//             </div>

//             <div className="input-section">
//               <label>Radians (rad)</label>
//               <div className="input-row">
//                 <input
//                   type="number"
//                   value={radians}
//                   onChange={handleRadiansChange}
//                   placeholder="Enter radians"
//                 />
//                 <button className="reset-input" onClick={() => {
//                   setRadians('0');
//                   setDegrees('0.000000');
//                   setLastChanged('radians');
//                 }}>Reset</button>
//               </div>
//             </div>

//             {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
//               <div className="explanation">
//                 <p>Converting from Degrees to Radians:</p>
//                 <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
//               </div>
//             )}

//             {lastChanged === 'radians' && radians && !isNaN(radians) && (
//               <div className="explanation">
//                 <p>Converting from Radians to Degrees:</p>
//                 <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
//               </div>
//             )}
//           </div>

//           <div className="right-section">
//             <div className="visualization">
//               <svg width="220" height="220">
//                 {/* Background circle */}
//                 <circle 
//                   cx="110" 
//                   cy="110" 
//                   r="90" 
//                   fill="none" 
//                   stroke="#94a3b8" 
//                   strokeWidth="1"
//                 />
                
//                 {/* Full rotation indicators */}
//                 {[...Array(rotations)].map((_, i) => (
//                   <circle
//                     key={i}
//                     cx="110"
//                     cy="110"
//                     r={90 - (i * 8)}
//                     fill="none"
//                     stroke="#2563eb"
//                     strokeWidth="1"
//                     strokeOpacity="0.3"
//                     strokeDasharray="2 4"
//                   />
//                 ))}
                
//                 {/* Current angle arc */}
//                 <path
//                   d={currentPath}
//                   fill="#e6efff"
//                   fillOpacity={rotations > 0 ? 0.5 : 0.8}
//                   stroke="#2563eb"
//                   strokeWidth="1.5"
//                 />
                
//                 {/* Reference line */}
//                 <line
//                   x1="110"
//                   y1="110"
//                   x2="110"
//                   y2="20"
//                   stroke="#2563eb"
//                   strokeWidth="1.5"
//                   strokeDasharray="4 2"
//                 />
                
//                 {/* Angle text */}
//                 <text
//                   x="110"
//                   y="105"
//                   textAnchor="middle"
//                   fill="#1e40af"
//                   style={{ fontSize: '14px' }}
//                 >
//                   {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
//                 </text>

//                 {rotations > 0 && (
//                   <text
//                     x="110"
//                     y="130"
//                     textAnchor="middle"
//                     className="rotation-text"
//                   >
//                     ({rotations} full rotation{rotations > 1 ? 's' : ''})
//                   </text>
//                 )}
//               </svg>
//             </div>

//             <div className="reference">
//               <p>Common conversions:</p>
//               <p>π ≈ 3.14159 rad = 180°</p>
//               <p>1 rad ≈ 57.2958°</p>
//               <p>1° = 0.01745 rad</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';

export default function AngleConverter() {
  const [degrees, setDegrees] = useState('0');
  const [radians, setRadians] = useState('0');
  const [lastChanged, setLastChanged] = useState(null);

  const normalizeAngle = (angle) => {
    const rotations = Math.floor(Math.abs(angle) / 360);
    const normalizedAngle = angle % 360;
    return {
      normalizedAngle: normalizedAngle >= 0 ? normalizedAngle : normalizedAngle + 360,
      rotations
    };
  };

  const handleDegreesChange = (e) => {
    const value = e.target.value;
    setDegrees(value);
    setLastChanged('degrees');
    if (value === '' || isNaN(value)) {
      setRadians('');
      return;
    }
    const rad = (parseFloat(value) * Math.PI / 180).toFixed(6);
    setRadians(rad);
  };

  const handleRadiansChange = (e) => {
    const value = e.target.value;
    setRadians(value);
    setLastChanged('radians');
    if (value === '' || isNaN(value)) {
      setDegrees('');
      return;
    }
    const deg = (parseFloat(value) * 180 / Math.PI).toFixed(6);
    setDegrees(deg);
  };

  const handleResetAll = () => {
    setDegrees('0');
    setRadians('0');
    setLastChanged(null);
  };

  const getArcPath = () => {
    const angle = parseFloat(degrees || 0);
    const { normalizedAngle, rotations } = normalizeAngle(angle);
    const centerX = 110;
    const centerY = 110;
    const radius = 90;
    
    const startAngle = -Math.PI/2;
    const endAngle = (normalizedAngle * Math.PI/180) - Math.PI/2;
    
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);
    
    const largeArcFlag = normalizedAngle > 180 ? 1 : 0;
    const sweepFlag = angle >= 0 ? 1 : 0;

    return {
      currentPath: `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY} Z`,
      rotations
    };
  };

  const { currentPath, rotations } = getArcPath();
  const normalizedValue = (Math.abs(parseFloat(degrees)) % 360).toFixed(1);

  return (
    <>
      <style jsx>{`
        .container {
          transform: scale(1.1);
          transform-origin: top center;
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 22px auto;
          background: #fff;
          border: 1px solid #2563eb;
          border-radius: 8px;
        }

        .main-content {
          display: flex;
        }

        .controls {
          flex: 1;
          padding: 20px;
          border-right: 1px solid #2563eb;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        h1 {
          color: #1e40af;
          font-size: 20px;
          margin: 0;
        }

        .reset-all {
          background: #2563eb;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .reset-all:hover {
          background: #1e40af;
        }

        .input-section {
          margin-bottom: 15px;
          border: 1px solid #cbd5e1;
          padding: 12px;
          border-radius: 4px;
        }

        .input-row {
          display: flex;
          gap: 8px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          color: #1e40af;
          font-size: 14px;
        }

        input {
          flex: 1;
          padding: 6px 8px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          font-size: 14px;
        }

        input:focus {
          outline: none;
          border-color: #2563eb;
        }

        .reset-input {
          background: #e2e8f0;
          border: none;
          padding: 0 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }

        .reset-input:hover {
          background: #cbd5e1;
        }

        .explanation {
          margin-top: 15px;
          padding: 12px;
          background: #f8fafc;
          border-radius: 4px;
          font-size: 14px;
        }

        .formula {
          color: #1e40af;
          margin: 6px 0;
          font-weight: 500;
        }

        .right-section {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .visualization {
          padding: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          min-height: 220px;
        }

        .reference {
          padding: 15px 20px;
          border-top: 1px solid #cbd5e1;
        }

        .reference p {
          color: #64748b;
          font-size: 13px;
          margin: 4px 0;
        }

        svg {
          margin-top: -10px;
        }

        .rotation-text {
          fill: #2563eb;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>

      <div className="container">
        <div className="main-content">
          <div className="controls">
            <div className="header">
              <h1>Angle Converter</h1>
              <button className="reset-all" onClick={handleResetAll}>Reset All</button>
            </div>

            <div className="input-section">
              <label>Degrees (°)</label>
              <div className="input-row">
                <input
                  type="number"
                  value={degrees}
                  onChange={handleDegreesChange}
                  placeholder="Enter degrees"
                />
                <button className="reset-input" onClick={() => {
                  setDegrees('0');
                  setRadians('0.000000');
                  setLastChanged('degrees');
                }}>Reset</button>
              </div>
            </div>

            <div className="input-section">
              <label>Radians (rad)</label>
              <div className="input-row">
                <input
                  type="number"
                  value={radians}
                  onChange={handleRadiansChange}
                  placeholder="Enter radians"
                />
                <button className="reset-input" onClick={() => {
                  setRadians('0');
                  setDegrees('0.000000');
                  setLastChanged('radians');
                }}>Reset</button>
              </div>
            </div>

            {lastChanged === 'degrees' && degrees && !isNaN(degrees) && (
              <div className="explanation">
                <p>Converting from Degrees to Radians:</p>
                <p className="formula">{degrees}° × (π/180) = {radians} rad</p>
              </div>
            )}

            {lastChanged === 'radians' && radians && !isNaN(radians) && (
              <div className="explanation">
                <p>Converting from Radians to Degrees:</p>
                <p className="formula">{radians} rad × (180/π) = {degrees}°</p>
              </div>
            )}
          </div>

          <div className="right-section">
            <div className="visualization">
              <svg width="220" height="220">
                {/* Background circle */}
                <circle 
                  cx="110" 
                  cy="110" 
                  r="90" 
                  fill="none" 
                  stroke="#94a3b8" 
                  strokeWidth="1"
                />
                
                {/* Full rotation indicators */}
                {[...Array(rotations)].map((_, i) => (
                  <circle
                    key={i}
                    cx="110"
                    cy="110"
                    r={90 - (i * 8)}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="2 4"
                  />
                ))}
                
                {/* Current angle arc */}
                <path
                  d={currentPath}
                  fill="#e6efff"
                  fillOpacity={rotations > 0 ? 0.5 : 0.8}
                  stroke="#2563eb"
                  strokeWidth="1.5"
                />
                
                {/* Reference line */}
                <line
                  x1="110"
                  y1="110"
                  x2="110"
                  y2="20"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                
                {/* Angle text */}
                <text
                  x="110"
                  y="98"
                  textAnchor="middle"
                  fill="#1e40af"
                  style={{ fontSize: '14px' }}
                >
                  {Math.abs(parseFloat(degrees || 0)).toFixed(1)}°
                </text>
                
                {rotations > 0 && (
                  <text
                    x="110"
                    y="115"
                    textAnchor="middle"
                    className="rotation-text"
                  >
                    ({rotations}×360° + {normalizedValue}°)
                  </text>
                )}

                {rotations > 0 && (
                  <text
                    x="110"
                    y="132"
                    textAnchor="middle"
                    className="rotation-text"
                  >
                    {rotations} full rotation{rotations > 1 ? 's' : ''}
                  </text>
                )}
              </svg>
            </div>

            <div className="reference">
              <p>Common conversions:</p>
              <p>π ≈ 3.14159 rad = 180°</p>
              <p>1 rad ≈ 57.2958°</p>
              <p>1° = 0.01745 rad</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}