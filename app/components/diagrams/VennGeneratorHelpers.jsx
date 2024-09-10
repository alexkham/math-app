// import React from 'react';
// import { X, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight } from 'lucide-react';

// export const ResetButton = ({ onClick, isDefault }) => (
//   <button 
//     onClick={onClick} 
//     className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//     title={isDefault ? "Reset to default" : "Clear"}
//   >
//     {isDefault ? <RotateCcw size={16} /> : <X size={16} />}
//   </button>
// );

// export const moveCircle = (circle, setCircle, dx, dy) => {
//   setCircle({
//     ...circle,
//     x: circle.x + dx,
//     y: circle.y + dy
//   });
// };

// export const PositionControls = ({ circle, setCircle, initial }) => (
//   <div className="mt-2">
//     <label className="text-sm font-bold">Position</label>
//     <div className="grid grid-cols-3 gap-2 mt-1">
//       <button onClick={() => moveCircle(circle, setCircle, -10, -10)} className="p-1 bg-gray-200 rounded"><ArrowUpLeft size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, 0, -10)} className="p-1 bg-gray-200 rounded"><ArrowUp size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, 10, -10)} className="p-1 bg-gray-200 rounded"><ArrowUpRight size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, -10, 0)} className="p-1 bg-gray-200 rounded"><ArrowLeft size={16} /></button>
//       <button onClick={() => setCircle({...circle, x: initial.x, y: initial.y})} className="p-1 bg-gray-200 rounded"><RotateCcw size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, 10, 0)} className="p-1 bg-gray-200 rounded"><ArrowRight size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, -10, 10)} className="p-1 bg-gray-200 rounded"><ArrowDownLeft size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, 0, 10)} className="p-1 bg-gray-200 rounded"><ArrowDown size={16} /></button>
//       <button onClick={() => moveCircle(circle, setCircle, 10, 10)} className="p-1 bg-gray-200 rounded"><ArrowDownRight size={16} /></button>
//     </div>
//   </div>
// );



// export const CircleControls = ({ circle, setCircle, label, initial }) => (
//   <div className="flex flex-col space-y-2 p-2 border rounded">
//     <div className="relative">
//       <input
//         type="text"
//         value={circle.label}
//         onChange={(e) => setCircle({...circle, label: e.target.value})}
//         className="border p-1 rounded w-full pr-16"
//         placeholder={`${label} Label`}
//       />
//       <ResetButton onClick={() => setCircle({...circle, label: ''})} />
//       <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="flex flex-col relative">
//         <label className="text-sm">Fill Color</label>
//         <input
//           type="color"
//           value={circle.fillColor.slice(0, 7)}
//           onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
//           className="w-full h-8 border rounded"
//         />
//         <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
//       </div>
//       <div className="flex flex-col relative">
//         <label className="text-sm">Border Color</label>
//         <input
//           type="color"
//           value={circle.borderColor}
//           onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
//           className="w-full h-8 border rounded"
//         />
//         <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
//       </div>
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="flex flex-col relative">
//         <label className="text-sm">Stroke Width</label>
//         <input
//           type="number"
//           value={circle.strokeWidth}
//           onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
//           className="border p-1 rounded w-full pr-16"
//           min="0"
//           max="10"
//         />
//         <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
//       </div>
//       <div className="flex flex-col relative">
//         <label className="text-sm">Radius</label>
//         <input
//           type="number"
//           value={circle.radius}
//           onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
//           className="border p-1 rounded w-full pr-16"
//           min="10"
//           max="100"
//         />
//         <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
//       </div>
//     </div>
//     <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
//   </div>
// );

 


// const UniverseControls = ({ universe, setUniverse, initial }) => (
//   <div className="flex flex-col space-y-2 p-2 border rounded">
//     <div className="relative">
//       <input
//         type="text"
//         value={universe.label}
//         onChange={(e) => setUniverse({...universe, label: e.target.value})}
//         className="border p-1 rounded w-full pr-16"
//         placeholder="Universe Label"
//       />
//       <ResetButton onClick={() => setUniverse({...universe, label: ''})} />
//       <ResetButton onClick={() => setUniverse({...universe, label: initial.label})} isDefault={true} />
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="flex flex-col relative">
//         <label className="text-sm">Fill Color</label>
//         <input
//           type="color"
//           value={universe.fillColor.slice(0, 7)}
//           onChange={(e) => setUniverse({...universe, fillColor: e.target.value + '80'})}
//           className="w-full h-8 border rounded"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: initial.fillColor})} isDefault={true} />
//       </div>
//       <div className="flex flex-col relative">
//         <label className="text-sm">Border Color</label>
//         <input
//           type="color"
//           value={universe.borderColor}
//           onChange={(e) => setUniverse({...universe, borderColor: e.target.value})}
//           className="w-full h-8 border rounded"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: initial.borderColor})} isDefault={true} />
//       </div>
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="flex flex-col relative">
//         <label className="text-sm">Stroke Width</label>
//         <input
//           type="number"
//           value={universe.strokeWidth}
//           onChange={(e) => setUniverse({...universe, strokeWidth: Number(e.target.value)})}
//           className="border p-1 rounded w-full pr-16"
//           min="0"
//           max="10"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: initial.strokeWidth})} isDefault={true} />
//       </div>
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="flex flex-col relative">
//         <label className="text-sm">Width</label>
//         <input
//           type="number"
//           value={universe.width}
//           onChange={(e) => setUniverse({...universe, width: Number(e.target.value)})}
//           className="border p-1 rounded w-full pr-16"
//           min="200"
//           max="500"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, width: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, width: initial.width})} isDefault={true} />
//       </div>
//       <div className="flex flex-col relative">
//         <label className="text-sm">Height</label>
//         <input
//           type="number"
//           value={universe.height}
//           onChange={(e) => setUniverse({...universe, height: Number(e.target.value)})}
//           className="border p-1 rounded w-full pr-16"
//           min="150"
//           max="400"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, height: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, height: initial.height})} isDefault={true} />
//       </div>
//     </div>
//   </div>
// );

// export default UniverseControls;
import React from 'react';
import { X, RotateCcw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight, ArrowDownLeft, ArrowDownRight } from 'lucide-react';
import styles from './VennGenerator.module.css';

// export const ResetButton = ({ onClick, isDefault }) => (
//   <button 
//     onClick={onClick} 
//     className={styles.resetButton}
//     title={isDefault ? "Reset to default" : "Clear"}
//   >
//     {isDefault ? <RotateCcw size={16} /> : <X size={16} />}
//   </button>
// );


export const ResetButton = ({ onClick, isDefault }) => (
  <span className={styles.resetButtonWrapper}>
    <button 
      onClick={onClick} 
      className={styles.resetButton}
    >
      {isDefault ? <RotateCcw size={16} /> : <X size={16} />}
    </button>
    <span className={styles.tooltip}>
      {isDefault ? "Reset to default" : "Clear"}
    </span>
  </span>
);

export const moveCircle = (circle, setCircle, dx, dy) => {
  setCircle({
    ...circle,
    x: circle.x + dx,
    y: circle.y + dy
  });
};

export const PositionControls = ({ circle, setCircle, initial }) => (
  <div className={styles.positionControls}>
    <label className={styles.label}>Position</label>
    <div className={styles.positionGrid}>
      <button onClick={() => moveCircle(circle, setCircle, -10, -10)} className={styles.positionButton}><ArrowUpLeft size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, 0, -10)} className={styles.positionButton}><ArrowUp size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, 10, -10)} className={styles.positionButton}><ArrowUpRight size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, -10, 0)} className={styles.positionButton}><ArrowLeft size={16} /></button>
      <button onClick={() => setCircle({...circle, x: initial.x, y: initial.y})} className={styles.positionButton}><RotateCcw size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, 10, 0)} className={styles.positionButton}><ArrowRight size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, -10, 10)} className={styles.positionButton}><ArrowDownLeft size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, 0, 10)} className={styles.positionButton}><ArrowDown size={16} /></button>
      <button onClick={() => moveCircle(circle, setCircle, 10, 10)} className={styles.positionButton}><ArrowDownRight size={16} /></button>
    </div>
  </div>
);


// export const CircleControls = ({ circle, setCircle, label, initial }) => (
//     <div className={styles.controlGroup}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>{label} Label</label>
//         <input
//           type="text"
//           value={circle.label}
//           onChange={(e) => setCircle({...circle, label: e.target.value})}
//           className={styles.input}
//           placeholder={`${label} Label`}
//         />
       
//         <ResetButton onClick={() => setCircle({...circle, label: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
        
//       </div>
//       <div className={styles.colorInputs}>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Fill Color</label>
//           <input
//             type="color"
//             value={circle.fillColor.slice(0, 7)}
//             onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
//             className={styles.colorInput}
//           />
//           <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
//           <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
//         </div>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Border Color</label>
//           <input
//             type="color"
//             value={circle.borderColor}
//             onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
//             className={styles.colorInput}
//           />
//           <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
//           <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
//         </div>
//       </div>
//       <div className={styles.numberInputs}>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Stroke Width</label>
//           <input
//             type="number"
//             value={circle.strokeWidth}
//             onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
//             className={styles.input}
//             min="0"
//             max="10"
//           />
//           <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
//           <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
//         </div>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Radius</label>
//           <input
//             type="number"
//             value={circle.radius}
//             onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
//             className={styles.input}
//             min="10"
//             max="100"
//           />
//           <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
//           <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
//         </div>
//       </div>
//       <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
//     </div>
//   );


// export const CircleControls = ({ circle, setCircle, label, initial }) => (
//     <div className={styles.controlGroup}>
//       <div className={styles.controlGroupContent}>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>{label} Label</label>
//           <input
//             type="text"
//             value={circle.label}
//             onChange={(e) => setCircle({...circle, label: e.target.value})}
//             className={styles.input}
//             placeholder={`${label} Label`}
//           />
//           <ResetButton onClick={() => setCircle({...circle, label: ''})} />
//           <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
//         </div>
//         <div className={styles.colorInputs}>
//           <div className={styles.inputGroup}>
//             <label className={styles.label}>Fill Color</label>
//             <input
//               type="color"
//               value={circle.fillColor.slice(0, 7)}
//               onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
//               className={styles.colorInput}
//             />
//             <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
//             <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
//           </div>
//           <div className={styles.inputGroup}>
//             <label className={styles.label}>Border Color</label>
//             <input
//               type="color"
//               value={circle.borderColor}
//               onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
//               className={styles.colorInput}
//             />
//             <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
//             <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
//           </div>
//         </div>
//         <div className={styles.numberInputs}>
//           <div className={styles.inputGroup}>
//             <label className={styles.label}>Stroke Width</label>
//             <input
//               type="number"
//               value={circle.strokeWidth}
//               onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
//               className={styles.input}
//               min="0"
//               max="10"
//             />
//             <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
//             <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
//           </div>
//           <div className={styles.inputGroup}>
//             <label className={styles.label}>Radius</label>
//             <input
//               type="number"
//               value={circle.radius}
//               onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
//               className={styles.input}
//               min="10"
//               max="100"
//             />
//             <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
//             <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
//           </div>
//         </div>
//       </div>
//       <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
//     </div>
//   );

 
export const CircleControls = ({ circle, setCircle, label, initial }) => (
    <div className={styles.controlGroup}>
      <div className={styles.controlGroupContent}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>{label} Label</label>
          <input
            type="text"
            value={circle.label}
            onChange={(e) => setCircle({...circle, label: e.target.value})}
            className={styles.input}
            placeholder={`${label} Label`}
          />
          <ResetButton onClick={() => setCircle({...circle, label: ''})} />
          <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
        </div>
        <div className={styles.colorInputs}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Fill</label>
            <input
              type="color"
              value={circle.fillColor.slice(0, 7)}
              onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
              className={styles.colorInput}
            />
            <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
            <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Border Color</label>
            <input
              type="color"
              value={circle.borderColor}
              onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
              className={styles.colorInput}
            />
            <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
            <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
          </div>
        </div>
        <div className={styles.numberInputs}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Border Width</label>
            <input
              type="number"
              value={circle.strokeWidth}
              onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
              className={styles.input}
              min="0"
              max="10"
            />
            <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
            <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Radius</label>
            <input
              type="number"
              value={circle.radius}
              onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
              className={styles.input}
              min="10"
              max="100"
            />
            <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
            <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
          </div>
        </div>
      </div>
      <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
    </div>
  );

export const UniverseControls = ({ universe, setUniverse, initial }) => (
    <div>
      {['label', 'fillColor', 'borderColor', 'strokeWidth', 'width', 'height'].map((prop) => (
        <div key={prop} className={styles.inputLine}>
          <label className={styles.label}>{prop.charAt(0).toUpperCase() + prop.slice(1)}</label>
          <div className={styles.inputContainer}>
            <input
              type={prop.includes('Color') ? 'color' : prop === 'label' ? 'text' : 'number'}
              value={prop.includes('Color') ? universe[prop].slice(0, 7) : universe[prop]}
              onChange={(e) => {
                const value = prop.includes('Color') ? e.target.value + '80' : 
                              prop === 'label' ? e.target.value : 
                              Number(e.target.value);
                setUniverse({...universe, [prop]: value});
              }}
              className={prop.includes('Color') ? styles.colorInput : styles.input}
              min={prop === 'strokeWidth' ? 0 : prop === 'width' ? 200 : prop === 'height' ? 150 : undefined}
              max={prop === 'strokeWidth' ? 10 : prop === 'width' ? 500 : prop === 'height' ? 400 : undefined}
            />
            <ResetButton onClick={() => setUniverse({...universe, [prop]: ''})} />
            <ResetButton onClick={() => setUniverse({...universe, [prop]: initial[prop]})} isDefault={true} />
          </div>
        </div>
      ))}
    </div>
  );

//   const UniverseControls = ({ universe, setUniverse, initial }) => (
//     <div className={styles.controlGroup}>
//       <div className={styles.inputLine}>
//         <label className={styles.label}>Universe Label</label>
//         {/* <div className={styles.inputContainer}> */}
//         {/* <label className={styles.label}>Universe Label</label> */}
//         <input
//           type="text"
//           value={universe.label}
//           onChange={(e) => setUniverse({...universe, label: e.target.value})}
//           className={styles.input}
//           placeholder="Universe Label"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, label: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, label: initial.label})} isDefault={true} />
//         {/* </div> */}
//       </div>
//       <div className={styles.inputLine}>
//         <label className={styles.label}>Fill Color</label>
//         <div className={styles.inputContainer}>
//         <input
//           type="color"
//           value={universe.fillColor.slice(0, 7)}
//           onChange={(e) => setUniverse({...universe, fillColor: e.target.value + '80'})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: initial.fillColor})} isDefault={true} />
//         </div>
//       </div>
//       <div className={styles.inputLine}>
//         <label className={styles.label}>Border Color</label>
//         <div className={styles.inputContainer}>
//         <input
//           type="color"
//           value={universe.borderColor}
//           onChange={(e) => setUniverse({...universe, borderColor: e.target.value})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: initial.borderColor})} isDefault={true} />
//        </div>
//       </div>
//       <div className={styles.inputLine}>
//         <label className={styles.label}>Stroke Width</label>
//         <div className={styles.inputContainer}>
//         <input
//           type="number"
//           value={universe.strokeWidth}
//           onChange={(e) => setUniverse({...universe, strokeWidth: Number(e.target.value)})}
//           className={styles.input}
//           min="0"
//           max="10"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: initial.strokeWidth})} isDefault={true} />
//         </div>
//       </div>
//       <div className={styles.inputLine}>
//         <label className={styles.label}>Width</label>
//         <div className={styles.inputContainer}>
//         <input
//           type="number"
//           value={universe.width}
//           onChange={(e) => setUniverse({...universe, width: Number(e.target.value)})}
//           className={styles.input}
//           min="200"
//           max="500"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, width: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, width: initial.width})} isDefault={true} />
//       </div>
//       </div>
//       <div className={styles.inputLine}>
//         {/* <label className={styles.label}>Height</label> */}
//         <div className={styles.inputContainer}>
//         <label className={styles.label}>Height</label>
//         <input
//           type="number"
//           value={universe.height}
//           onChange={(e) => setUniverse({...universe, height: Number(e.target.value)})}
//           className={styles.input}
//           min="150"
//           max="400"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, height: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, height: initial.height})} isDefault={true} />
//       </div>
//       </div>
//     </div>
//   );

//   const UniverseControls = ({ universe, setUniverse, initial }) => (
//     <div className={styles.controlGroup}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Universe Label</label>
//         <input
//           type="text"
//           value={universe.label}
//           onChange={(e) => setUniverse({...universe, label: e.target.value})}
//           className={styles.input}
//           placeholder="Universe Label"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, label: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, label: initial.label})} isDefault={true} />
//       </div>
//       <div className={styles.colorInputs}>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Fill Color</label>
//           <input
//             type="color"
//             value={universe.fillColor.slice(0, 7)}
//             onChange={(e) => setUniverse({...universe, fillColor: e.target.value + '80'})}
//             className={styles.colorInput}
//           />
//           <ResetButton onClick={() => setUniverse({...universe, fillColor: ''})} />
//           <ResetButton onClick={() => setUniverse({...universe, fillColor: initial.fillColor})} isDefault={true} />
//         </div>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Border Color</label>
//           <input
//             type="color"
//             value={universe.borderColor}
//             onChange={(e) => setUniverse({...universe, borderColor: e.target.value})}
//             className={styles.colorInput}
//           />
//           <ResetButton onClick={() => setUniverse({...universe, borderColor: ''})} />
//           <ResetButton onClick={() => setUniverse({...universe, borderColor: initial.borderColor})} isDefault={true} />
//         </div>
//       </div>
//       <div className={styles.numberInputs}>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Stroke Width</label>
//           <input
//             type="number"
//             value={universe.strokeWidth}
//             onChange={(e) => setUniverse({...universe, strokeWidth: Number(e.target.value)})}
//             className={styles.input}
//             min="0"
//             max="10"
//           />
//           <ResetButton onClick={() => setUniverse({...universe, strokeWidth: ''})} />
//           <ResetButton onClick={() => setUniverse({...universe, strokeWidth: initial.strokeWidth})} isDefault={true} />
//         </div>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Width</label>
//           <input
//             type="number"
//             value={universe.width}
//             onChange={(e) => setUniverse({...universe, width: Number(e.target.value)})}
//             className={styles.input}
//             min="200"
//             max="500"
//           />
//           <ResetButton onClick={() => setUniverse({...universe, width: ''})} />
//           <ResetButton onClick={() => setUniverse({...universe, width: initial.width})} isDefault={true} />
//         </div>
//         <div className={styles.inputGroup}>
//           <label className={styles.label}>Height</label>
//           <input
//             type="number"
//             value={universe.height}
//             onChange={(e) => setUniverse({...universe, height: Number(e.target.value)})}
//             className={styles.input}
//             min="150"
//             max="400"
//           />
//           <ResetButton onClick={() => setUniverse({...universe, height: ''})} />
//           <ResetButton onClick={() => setUniverse({...universe, height: initial.height})} isDefault={true} />
//         </div>
//       </div>
//     </div>
//   );

// export const CircleControls = ({ circle, setCircle, label, initial }) => (
//   <div className={styles.controlGroup}>
//     <div className={styles.inputGroup}>
//       <input
//         type="text"
//         value={circle.label}
//         onChange={(e) => setCircle({...circle, label: e.target.value})}
//         className={styles.input}
//         placeholder={`${label} Label`}
//       />
//       <ResetButton onClick={() => setCircle({...circle, label: ''})} />
//       <ResetButton onClick={() => setCircle({...circle, label: initial.label})} isDefault={true} />
//     </div>
//     <div className={styles.colorInputs}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Fill Color</label>
//         <input
//           type="color"
//           value={circle.fillColor.slice(0, 7)}
//           onChange={(e) => setCircle({...circle, fillColor: e.target.value + '80'})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setCircle({...circle, fillColor: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, fillColor: initial.fillColor})} isDefault={true} />
//       </div>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Border Color</label>
//         <input
//           type="color"
//           value={circle.borderColor}
//           onChange={(e) => setCircle({...circle, borderColor: e.target.value})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setCircle({...circle, borderColor: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, borderColor: initial.borderColor})} isDefault={true} />
//       </div>
//     </div>
//     <div className={styles.numberInputs}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Stroke Width</label>
//         <input
//           type="number"
//           value={circle.strokeWidth}
//           onChange={(e) => setCircle({...circle, strokeWidth: Number(e.target.value)})}
//           className={styles.input}
//           min="0"
//           max="10"
//         />
//         <ResetButton onClick={() => setCircle({...circle, strokeWidth: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, strokeWidth: initial.strokeWidth})} isDefault={true} />
//       </div>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Radius</label>
//         <input
//           type="number"
//           value={circle.radius}
//           onChange={(e) => setCircle({...circle, radius: Number(e.target.value)})}
//           className={styles.input}
//           min="10"
//           max="100"
//         />
//         <ResetButton onClick={() => setCircle({...circle, radius: ''})} />
//         <ResetButton onClick={() => setCircle({...circle, radius: initial.radius})} isDefault={true} />
//       </div>
//     </div>
//     <PositionControls circle={circle} setCircle={setCircle} initial={initial} />
//   </div>
// );

// const UniverseControls = ({ universe, setUniverse, initial }) => (
//   <div className={styles.controlGroup}>
//     <div className={styles.inputGroup}>
//       <input
//         type="text"
//         value={universe.label}
//         onChange={(e) => setUniverse({...universe, label: e.target.value})}
//         className={styles.input}
//         placeholder="Universe Label"
//       />
//       <ResetButton onClick={() => setUniverse({...universe, label: ''})} />
//       <ResetButton onClick={() => setUniverse({...universe, label: initial.label})} isDefault={true} />
//     </div>
//     <div className={styles.colorInputs}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Fill Color</label>
//         <input
//           type="color"
//           value={universe.fillColor.slice(0, 7)}
//           onChange={(e) => setUniverse({...universe, fillColor: e.target.value + '80'})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, fillColor: initial.fillColor})} isDefault={true} />
//       </div>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Border Color</label>
//         <input
//           type="color"
//           value={universe.borderColor}
//           onChange={(e) => setUniverse({...universe, borderColor: e.target.value})}
//           className={styles.colorInput}
//         />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, borderColor: initial.borderColor})} isDefault={true} />
//       </div>
//     </div>
//     <div className={styles.numberInputs}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Stroke Width</label>
//         <input
//           type="number"
//           value={universe.strokeWidth}
//           onChange={(e) => setUniverse({...universe, strokeWidth: Number(e.target.value)})}
//           className={styles.input}
//           min="0"
//           max="10"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, strokeWidth: initial.strokeWidth})} isDefault={true} />
//       </div>
//     </div>
//     <div className={styles.numberInputs}>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Width</label>
//         <input
//           type="number"
//           value={universe.width}
//           onChange={(e) => setUniverse({...universe, width: Number(e.target.value)})}
//           className={styles.input}
//           min="200"
//           max="500"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, width: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, width: initial.width})} isDefault={true} />
//       </div>
//       <div className={styles.inputGroup}>
//         <label className={styles.label}>Height</label>
//         <input
//           type="number"
//           value={universe.height}
//           onChange={(e) => setUniverse({...universe, height: Number(e.target.value)})}
//           className={styles.input}
//           min="150"
//           max="400"
//         />
//         <ResetButton onClick={() => setUniverse({...universe, height: ''})} />
//         <ResetButton onClick={() => setUniverse({...universe, height: initial.height})} isDefault={true} />
//       </div>
//     </div>
//   </div>
// );

export default UniverseControls;