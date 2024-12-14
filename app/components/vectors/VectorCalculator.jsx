// // // // import { useState } from 'react';
// // // // import './VectorCalculator.css';

// // // // const VectorCalculator = () => {
// // // //   const [vectors, setVectors] = useState([
// // // //     { id: 'A', x: 0, y: 0 },
// // // //     { id: 'B', x: 0, y: 0 }
// // // //   ]);
// // // //   const [result, setResult] = useState({ x: 0, y: 0 });

// // // //   // Operation handlers
// // // //   const add = () => setResult({
// // // //     x: vectors.reduce((sum, v) => sum + v.x, 0),
// // // //     y: vectors.reduce((sum, v) => sum + v.y, 0)
// // // //   });

// // // //   const subtract = () => {
// // // //     const first = vectors[0];
// // // //     setResult({
// // // //       x: vectors.slice(1).reduce((diff, v) => diff - v.x, first.x),
// // // //       y: vectors.slice(1).reduce((diff, v) => diff - v.y, first.y)
// // // //     });
// // // //   };

// // // //   const scale = () => {
// // // //     const scalar = prompt("Enter scalar value:", "1");
// // // //     if (scalar) {
// // // //       setResult({
// // // //         x: vectors[0].x * Number(scalar),
// // // //         y: vectors[0].y * Number(scalar)
// // // //       });
// // // //     }
// // // //   };

// // // //   const dotProduct = () => setResult({
// // // //     x: vectors[0].x * vectors[1].x + vectors[0].y * vectors[1].y,
// // // //     y: 0
// // // //   });

// // // //   // Vector management
// // // //   const addVector = () => {
// // // //     const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
// // // //     setVectors([...vectors, { id: nextId, x: 0, y: 0 }]);
// // // //   };

// // // //   const removeVector = (id) => {
// // // //     if (vectors.length > 2) setVectors(vectors.filter(v => v.id !== id));
// // // //   };

// // // //   const reset = () => {
// // // //     setVectors([
// // // //       { id: 'A', x: 0, y: 0 },
// // // //       { id: 'B', x: 0, y: 0 }
// // // //     ]);
// // // //     setResult({ x: 0, y: 0 });
// // // //   };

// // // //   return (
// // // //     <div className="calculator">
// // // //       <h2>Vector Calculator</h2>
      
// // // //       <div className="vectors">
// // // //         {vectors.map((vector) => (
// // // //           <div key={vector.id} className="vector">
// // // //             <div className="vector-header">
// // // //               <span>Vector {vector.id}</span>
// // // //               {vectors.length > 2 && (
// // // //                 <button 
// // // //                   className="remove-btn"
// // // //                   onClick={() => removeVector(vector.id)}
// // // //                 >×</button>
// // // //               )}
// // // //             </div>
// // // //             <div className="input-group">
// // // //               <span>(</span>
// // // //               <input
// // // //                 type="number"
// // // //                 value={vector.x}
// // // //                 onChange={(e) => {
// // // //                   const newVectors = vectors.map(v =>
// // // //                     v.id === vector.id ? { ...v, x: Number(e.target.value) } : v
// // // //                   );
// // // //                   setVectors(newVectors);
// // // //                 }}
// // // //               />
// // // //               <input
// // // //                 type="number"
// // // //                 value={vector.y}
// // // //                 onChange={(e) => {
// // // //                   const newVectors = vectors.map(v =>
// // // //                     v.id === vector.id ? { ...v, y: Number(e.target.value) } : v
// // // //                   );
// // // //                   setVectors(newVectors);
// // // //                 }}
// // // //               />
// // // //               <span>)</span>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <button className="add-vector" onClick={addVector}>
// // // //         Add Vector
// // // //       </button>

// // // //       <div className="operations">
// // // //         <div className="op-group">
// // // //           <h3>Unary (A)</h3>
// // // //           <button onClick={() => scale()}>Scale</button>
// // // //         </div>
        
// // // //         <div className="op-group">
// // // //           <h3>Binary (A,B)</h3>
// // // //           <button onClick={dotProduct} disabled={vectors.length < 2}>
// // // //             Dot Product
// // // //           </button>
// // // //         </div>

// // // //         <div className="op-group">
// // // //           <h3>Multi</h3>
// // // //           <button onClick={add}>Add</button>
// // // //           <button onClick={subtract}>Subtract</button>
// // // //           <button onClick={reset} className="reset">Reset</button>
// // // //         </div>
// // // //       </div>

// // // //       <div className="result">
// // // //         <h3>Result</h3>
// // // //         <div className="input-group">
// // // //           <span>(</span>
// // // //           <input readOnly value={result.x} />
// // // //           <input readOnly value={result.y} />
// // // //           <span>)</span>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default VectorCalculator;

// // // import { useState } from 'react';
// // // import './VectorCalculator.css';

// // // const VectorCalculator = () => {
// // //   const [vectors, setVectors] = useState([
// // //     { id: 'A', x: '', y: '' },
// // //     { id: 'B', x: '', y: '' }
// // //   ]);
// // //   const [result, setResult] = useState({ x: 0, y: 0 });
// // //   const [showScaleInput, setShowScaleInput] = useState(false);
// // //   const [scaleValue, setScaleValue] = useState('');

// // //   const handleInputChange = (id, field, value) => {
// // //     const numValue = value.replace(/^0+/, '');
// // //     if (/^-?\d*$/.test(numValue)) {
// // //       setVectors(vectors.map(v =>
// // //         v.id === id ? { ...v, [field]: numValue || '0' } : v
// // //       ));
// // //     }
// // //   };

// // //   const add = () => setResult({
// // //     x: vectors.reduce((sum, v) => sum + Number(v.x || 0), 0),
// // //     y: vectors.reduce((sum, v) => sum + Number(v.y || 0), 0)
// // //   });

// // //   const subtract = () => {
// // //     const first = vectors[0];
// // //     setResult({
// // //       x: vectors.slice(1).reduce((diff, v) => diff - Number(v.x || 0), Number(first.x || 0)),
// // //       y: vectors.slice(1).reduce((diff, v) => diff - Number(v.y || 0), Number(first.y || 0))
// // //     });
// // //   };

// // //   const scale = () => {
// // //     if (scaleValue) {
// // //       setResult({
// // //         x: Number(vectors[0].x || 0) * Number(scaleValue),
// // //         y: Number(vectors[0].y || 0) * Number(scaleValue)
// // //       });
// // //       setShowScaleInput(false);
// // //       setScaleValue('');
// // //     }
// // //   };

// // //   const dotProduct = () => setResult({
// // //     x: Number(vectors[0].x || 0) * Number(vectors[1].x || 0) + 
// // //        Number(vectors[0].y || 0) * Number(vectors[1].y || 0),
// // //     y: 0
// // //   });

// // //   const addVector = () => {
// // //     const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
// // //     setVectors([...vectors, { id: nextId, x: '', y: '' }]);
// // //   };

// // //   const removeVector = (id) => {
// // //     if (vectors.length > 2) setVectors(vectors.filter(v => v.id !== id));
// // //   };

// // //   const reset = () => {
// // //     setVectors([
// // //       { id: 'A', x: '', y: '' },
// // //       { id: 'B', x: '', y: '' }
// // //     ]);
// // //     setResult({ x: 0, y: 0 });
// // //     setShowScaleInput(false);
// // //     setScaleValue('');
// // //   };

// // //   return (
// // //     <div className="calculator">
// // //       <h2>Vector Calculator</h2>
      
// // //       <div className="vectors">
// // //         {vectors.map((vector) => (
// // //           <div key={vector.id} className="vector">
// // //             <div className="vector-header">
// // //               <span>Vector {vector.id}</span>
// // //               {vectors.length > 2 && (
// // //                 <button 
// // //                   className="remove-btn"
// // //                   onClick={() => removeVector(vector.id)}
// // //                 >×</button>
// // //               )}
// // //             </div>
// // //             <div className="input-group">
// // //               <span>(</span>
// // //               <input
// // //                 type="text"
// // //                 value={vector.x}
// // //                 onChange={(e) => handleInputChange(vector.id, 'x', e.target.value)}
// // //               />
// // //               <input
// // //                 type="text"
// // //                 value={vector.y}
// // //                 onChange={(e) => handleInputChange(vector.id, 'y', e.target.value)}
// // //               />
// // //               <span>)</span>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <button className="add-vector" onClick={addVector}>
// // //         Add Vector
// // //       </button>

// // //       <div className="operations">
// // //         <div className="op-group">
// // //           <h3>Unary (A)</h3>
// // //           <button onClick={() => setShowScaleInput(true)}>Scale</button>
// // //           {showScaleInput && (
// // //             <div className="scale-input">
// // //               <input
// // //                 type="text"
// // //                 value={scaleValue}
// // //                 onChange={(e) => {
// // //                   const value = e.target.value.replace(/^0+/, '');
// // //                   if (/^-?\d*$/.test(value)) {
// // //                     setScaleValue(value || '0');
// // //                   }
// // //                 }}
// // //                 placeholder="Enter scale factor"
// // //               />
// // //               <button onClick={scale}>Apply</button>
// // //             </div>
// // //           )}
// // //         </div>
        
// // //         <div className="op-group">
// // //           <h3>Binary (A,B)</h3>
// // //           <button onClick={dotProduct} disabled={vectors.length < 2}>
// // //             Dot Product
// // //           </button>
// // //         </div>

// // //         <div className="op-group">
// // //           <h3>Multi</h3>
// // //           <button onClick={add}>Add</button>
// // //           <button onClick={subtract}>Subtract</button>
// // //           <button onClick={reset} className="reset">Reset</button>
// // //         </div>
// // //       </div>

// // //       <div className="result">
// // //         <h3>Result</h3>
// // //         <div className="input-group">
// // //           <span>(</span>
// // //           <input readOnly value={result.x} />
// // //           <input readOnly value={result.y} />
// // //           <span>)</span>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default VectorCalculator;


// // import { useState } from 'react';
// // import ControlPanel2 from '../calculators/ControlPanel2';
// // import './VectorCalculator.css';

// // const VectorCalculator = () => {
// //   const [vectors, setVectors] = useState([{ id: 'A', x: '', y: '' }]);
// //   const [result, setResult] = useState({ x: 0, y: 0 });
// //   const [scaleValue, setScaleValue] = useState('');
  
// //   const handleInputChange = (id, field, value) => {
// //     const numValue = value.replace(/^0+/, '');
// //     if (/^-?\d*$/.test(numValue)) {
// //       setVectors(vectors.map(v =>
// //         v.id === id ? { ...v, [field]: numValue || '0' } : v
// //       ));
// //     }
// //   };

// //   const sections = [
// //     {
// //       id: 'unary',
// //       title: 'Unary Operations',
// //       explanation: 'Operations that work with a single vector (using Vector A)',
// //       buttons: [
// //         { id: 'scale', label: 'Scale Vector' }
// //       ]
// //     },
// //     {
// //       id: 'binary',
// //       title: 'Binary Operations',
// //       explanation: 'Operations requiring exactly two vectors',
// //       buttons: [
// //         { id: 'dotProduct', label: 'Dot Product' }
// //       ],
// //     },
// //     {
// //       id: 'multi',
// //       title: 'Multi-Vector Operations',
// //       explanation: 'Operations that work with any number of vectors',
// //       buttons: [
// //         { id: 'add', label: 'Add All' },
// //         { id: 'subtract', label: 'Subtract from A' }
// //       ]
// //     }
// //   ];

// //   const executeOperation = (ops) => {
// //     if (ops.includes('scale')) {
// //       if (scaleValue) {
// //         setResult({
// //           x: Number(vectors[0].x || 0) * Number(scaleValue),
// //           y: Number(vectors[0].y || 0) * Number(scaleValue)
// //         });
// //       }
// //     }
// //     if (ops.includes('dotProduct') && vectors.length >= 2) {
// //       setResult({
// //         x: Number(vectors[0].x || 0) * Number(vectors[1].x || 0) + 
// //            Number(vectors[0].y || 0) * Number(vectors[1].y || 0),
// //         y: 0
// //       });
// //     }
// //     if (ops.includes('add')) {
// //       setResult({
// //         x: vectors.reduce((sum, v) => sum + Number(v.x || 0), 0),
// //         y: vectors.reduce((sum, v) => sum + Number(v.y || 0), 0)
// //       });
// //     }
// //     if (ops.includes('subtract')) {
// //       const first = vectors[0];
// //       setResult({
// //         x: vectors.slice(1).reduce((diff, v) => diff - Number(v.x || 0), Number(first.x || 0)),
// //         y: vectors.slice(1).reduce((diff, v) => diff - Number(v.y || 0), Number(first.y || 0))
// //       });
// //     }
// //   };

// //   const addVector = () => {
// //     const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
// //     setVectors([...vectors, { id: nextId, x: '', y: '' }]);
// //   };

// //   const removeVector = (id) => {
// //     if (vectors.length > 1) {
// //       setVectors(vectors.filter(v => v.id !== id));
// //     }
// //   };

// //   return (
// //     <div className="calculator">
// //       <div className="vectors">
// //         {vectors.map((vector) => (
// //           <div key={vector.id} className="vector">
// //             <div className="vector-header">
// //               <span>Vector {vector.id}</span>
// //               {vectors.length > 1 && (
// //                 <button 
// //                   className="remove-btn"
// //                   onClick={() => removeVector(vector.id)}
// //                 >×</button>
// //               )}
// //             </div>
// //             <div className="input-group">
// //               <span>(</span>
// //               <input
// //                 type="text"
// //                 value={vector.x}
// //                 onChange={(e) => handleInputChange(vector.id, 'x', e.target.value)}
// //               />
// //               <input
// //                 type="text"
// //                 value={vector.y}
// //                 onChange={(e) => handleInputChange(vector.id, 'y', e.target.value)}
// //               />
// //               <span>)</span>
// //             </div>
// //           </div>
// //         ))}
// //         <button className="add-vector" onClick={addVector}>Add Vector</button>
// //       </div>

// //       <ControlPanel2 
// //         sections={sections}
// //         onChange={executeOperation}
// //       />

// //       <div className="result">
// //         <h3>Result</h3>
// //         <div className="input-group">
// //           <span>(</span>
// //           <input readOnly value={result.x} />
// //           <input readOnly value={result.y} />
// //           <span>)</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VectorCalculator;

// import { useState } from 'react';
// import ControlPanel2 from '../calculators/ControlPanel2';
// import './VectorCalculator.css';

// const VectorCalculator = () => {
//   const [vectors, setVectors] = useState([{ id: 'A', x: '', y: '' }]);
//   const [result, setResult] = useState({ x: 0, y: 0 });
//   const [scaleValue, setScaleValue] = useState('');
  
//   const handleInputChange = (id, field, value) => {
//     const numValue = value.replace(/^0+/, '');
//     if (/^-?\d*$/.test(numValue)) {
//       setVectors(vectors.map(v =>
//         v.id === id ? { ...v, [field]: numValue || '0' } : v
//       ));
//     }
//   };

//   const sections = [
//     {
//       id: 'unary',
//       title: 'Unary Operations',
//       explanation: 'Operations that work with a single vector (using Vector A)',
//       buttons: [
//         { id: 'scale', label: 'Scale Vector' }
//       ]
//     },
//     {
//       id: 'binary',
//       title: 'Binary Operations',
//       explanation: 'Operations requiring exactly two vectors',
//       buttons: [
//         { id: 'dotProduct', label: 'Dot Product' }
//       ],
//     },
//     {
//       id: 'multi',
//       title: 'Multi-Vector Operations',
//       explanation: 'Operations that work with any number of vectors',
//       buttons: [
//         { id: 'add', label: 'Add All' },
//         { id: 'subtract', label: 'Subtract from A' }
//       ]
//     }
//   ];

//   const executeOperation = (ops) => {
//     if (ops.includes('scale')) {
//       if (scaleValue) {
//         setResult({
//           x: Number(vectors[0].x || 0) * Number(scaleValue),
//           y: Number(vectors[0].y || 0) * Number(scaleValue)
//         });
//       }
//     }
//     if (ops.includes('dotProduct') && vectors.length >= 2) {
//       setResult({
//         x: Number(vectors[0].x || 0) * Number(vectors[1].x || 0) + 
//            Number(vectors[0].y || 0) * Number(vectors[1].y || 0),
//         y: 0
//       });
//     }
//     if (ops.includes('add')) {
//       setResult({
//         x: vectors.reduce((sum, v) => sum + Number(v.x || 0), 0),
//         y: vectors.reduce((sum, v) => sum + Number(v.y || 0), 0)
//       });
//     }
//     if (ops.includes('subtract')) {
//       const first = vectors[0];
//       setResult({
//         x: vectors.slice(1).reduce((diff, v) => diff - Number(v.x || 0), Number(first.x || 0)),
//         y: vectors.slice(1).reduce((diff, v) => diff - Number(v.y || 0), Number(first.y || 0))
//       });
//     }
//   };

//   const addVector = () => {
//     const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
//     setVectors([...vectors, { id: nextId, x: '', y: '' }]);
//   };

//   const removeVector = (id) => {
//     if (vectors.length > 1) {
//       setVectors(vectors.filter(v => v.id !== id));
//     }
//   };

//   const reset = () => {
//     setVectors([{ id: 'A', x: '', y: '' }]);
//     setResult({ x: 0, y: 0 });
//     setScaleValue('');
//   };

//   return (
//     <div className="calculator">
//       <ControlPanel2 
//         sections={sections}
//         onChange={executeOperation}
//       />

//       <div className="vectors">
//         {vectors.map((vector) => (
//           <div key={vector.id} className="vector">
//             <div className="vector-header">
//               <span>Vector {vector.id}</span>
//               {vectors.length > 1 && (
//                 <button 
//                   className="remove-btn"
//                   onClick={() => removeVector(vector.id)}
//                 >×</button>
//               )}
//             </div>
//             <div className="input-group">
//               <span className="vector-bracket">(</span>
//               <input
//                 type="text"
//                 value={vector.x}
//                 onChange={(e) => handleInputChange(vector.id, 'x', e.target.value)}
//               />
//               <input
//                 type="text"
//                 value={vector.y}
//                 onChange={(e) => handleInputChange(vector.id, 'y', e.target.value)}
//               />
//               <span className="vector-bracket">)</span>
//             </div>
//           </div>
//         ))}
//         <div className="vector-controls">
//           <button className="add-vector" onClick={addVector}>Add Vector</button>
//           <button className="reset-btn" onClick={reset}>Reset</button>
//         </div>
//       </div>

//       <div className="result">
//         <h3>Result</h3>
//         <div className="input-group">
//           <span className="vector-bracket">(</span>
//           <input readOnly value={result.x} />
//           <input readOnly value={result.y} />
//           <span className="vector-bracket">)</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VectorCalculator;

import { useState } from 'react';
import GroupedControls from '../calculators/GroupedControls';
import './VectorCalculator.css';

const VectorCalculator = () => {
  const [vectors, setVectors] = useState([{ id: 'A', x: '', y: '' }]);
  const [result, setResult] = useState({ x: 0, y: 0 });
  const [activeOperation, setActiveOperation] = useState(null);
  const [operationParams, setOperationParams] = useState(null);

  const handleInputChange = (id, field, value) => {
    const numValue = value.replace(/^0+/, '');
    if (/^-?\d*$/.test(numValue)) {
      setVectors(vectors.map(v =>
        v.id === id ? { ...v, [field]: numValue || '0' } : v
      ));
    }
  };

  const handleOperation = (type, op, value = null) => {
    setActiveOperation({ type, op });
    setOperationParams(value ? { value } : null);

    switch(op) {
      case 'scale':
        if (value) {
          setResult({
            x: Number(vectors[0].x || 0) * Number(value),
            y: Number(vectors[0].y || 0) * Number(value)
          });
        }
        break;
      case 'dotProduct':
        setResult({
          x: Number(vectors[0].x || 0) * Number(vectors[1].x || 0) + 
             Number(vectors[0].y || 0) * Number(vectors[1].y || 0),
          y: 0
        });
        break;
      case 'add':
        setResult({
          x: vectors.reduce((sum, v) => sum + Number(v.x || 0), 0),
          y: vectors.reduce((sum, v) => sum + Number(v.y || 0), 0)
        });
        break;
      case 'subtract':
        const first = vectors[0];
        setResult({
          x: vectors.slice(1).reduce((diff, v) => diff - Number(v.x || 0), Number(first.x || 0)),
          y: vectors.slice(1).reduce((diff, v) => diff - Number(v.y || 0), Number(first.y || 0))
        });
        break;
    }
  };

  const addVector = () => {
    const nextId = String.fromCharCode('A'.charCodeAt(0) + vectors.length);
    setVectors([...vectors, { id: nextId, x: '', y: '' }]);
  };

  const removeVector = (id) => {
    if (vectors.length > 1) {
      setVectors(vectors.filter(v => v.id !== id));
    }
  };

  const reset = () => {
    setVectors([{ id: 'A', x: '', y: '' }]);
    setResult({ x: 0, y: 0 });
    setActiveOperation(null);
    setOperationParams(null);
  };

  return (
    <div className="calculator">
      <GroupedControls 
        onOperationSelect={handleOperation}
        numVectors={vectors.length}
        activeOperation={activeOperation}
        operationParams={operationParams}
      />

      <div className="vectors">
        {vectors.map((vector) => (
          <div key={vector.id} className="vector">
            <div className="vector-header">
              <span>Vector {vector.id}</span>
              {vectors.length > 1 && (
                <button 
                  className="remove-btn"
                  onClick={() => removeVector(vector.id)}
                >×</button>
              )}
            </div>
            <div className="input-group">
              <span className="vector-bracket">(</span>
              <input
                type="text"
                value={vector.x}
                onChange={(e) => handleInputChange(vector.id, 'x', e.target.value)}
              />
              <input
                type="text"
                value={vector.y}
                onChange={(e) => handleInputChange(vector.id, 'y', e.target.value)}
              />
              <span className="vector-bracket">)</span>
            </div>
          </div>
        ))}
        <div className="vector-controls">
          <button className="add-vector" onClick={addVector}>Add Vector</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="result">
        <h3>Result</h3>
        <div className="input-group">
          <span className="vector-bracket">(</span>
          <input readOnly value={result.x} />
          <input readOnly value={result.y} />
          <span className="vector-bracket">)</span>
        </div>
      </div>
    </div>
  );
};

export default VectorCalculator;