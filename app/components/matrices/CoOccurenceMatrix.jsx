// // // // // import React from 'react';

// // // // // const CoOccurrenceMatrix = () => {
// // // // //   const matrices = [
// // // // //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 'Skew-symmetric',
// // // // //     'Upper Triangular', 'Lower Triangular', 'Orthogonal', 'Involutory',
// // // // //     'Nilpotent', 'Toeplitz', 'Circulant', 'Hermitian'
// // // // //   ];

// // // // //   const coOccurrence = [
// // // // //     [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1], // Identity
// // // // //     [0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0], // Zero
// // // // //     [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1], // Scalar
// // // // //     [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1], // Diagonal
// // // // //     [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], // Symmetric
// // // // //     [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], // Skew-symmetric
// // // // //     [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], // Upper Triangular
// // // // //     [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0], // Lower Triangular
// // // // //     [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], // Orthogonal
// // // // //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // Involutory
// // // // //     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0], // Nilpotent
// // // // //     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], // Toeplitz
// // // // //     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1], // Circulant
// // // // //     [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]  // Hermitian
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ padding: '20px' }}>
// // // // //       <div style={{ overflowX: 'auto' }}>
// // // // //         <table style={{ borderCollapse: 'collapse' }}>
// // // // //           <thead>
// // // // //             <tr>
// // // // //               <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}></th>
// // // // //               {matrices.map((matrix, index) => (
// // // // //                 <th 
// // // // //                   key={index} 
// // // // //                   style={{ 
// // // // //                     padding: '10px', 
// // // // //                     borderBottom: '2px solid #ddd',
// // // // //                     transform: 'rotate(-45deg)',
// // // // //                     whiteSpace: 'nowrap',
// // // // //                     verticalAlign: 'bottom',
// // // // //                     height: '150px'
// // // // //                   }}
// // // // //                 >
// // // // //                   {matrix}
// // // // //                 </th>
// // // // //               ))}
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {matrices.map((matrix, i) => (
// // // // //               <tr key={i}>
// // // // //                 <td style={{ 
// // // // //                   padding: '10px', 
// // // // //                   borderBottom: '1px solid #ddd',
// // // // //                   fontWeight: 'bold',
// // // // //                   whiteSpace: 'nowrap'
// // // // //                 }}>
// // // // //                   {matrix}
// // // // //                 </td>
// // // // //                 {coOccurrence[i].map((value, j) => (
// // // // //                   <td 
// // // // //                     key={j}
// // // // //                     style={{
// // // // //                       padding: '10px',
// // // // //                       borderBottom: '1px solid #ddd',
// // // // //                       backgroundColor: value ? '#1e40af' : '#f3f4f6',
// // // // //                       color: value ? 'white' : 'black',
// // // // //                       textAlign: 'center',
// // // // //                       width: '40px',
// // // // //                       height: '40px'
// // // // //                     }}
// // // // //                   >
// // // // //                     {value}
// // // // //                   </td>
// // // // //                 ))}
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CoOccurrenceMatrix;


// // // // import React from 'react';

// // // // const CoOccurrenceMatrix = () => {
// // // //   const matrices = [
// // // //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
// // // //     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
// // // //   ];

// // // //   const coOccurrence = [
// // // //     [1, 0, 1, 1, 1, 0, 1, 1], // Identity
// // // //     [0, 1, 1, 1, 1, 0, 1, 1], // Zero
// // // //     [1, 1, 1, 1, 1, 0, 1, 1], // Scalar
// // // //     [1, 0, 1, 1, 1, 0, 1, 1], // Diagonal
// // // //     [1, 1, 1, 1, 1, 0, 0, 0], // Symmetric
// // // //     [0, 0, 0, 0, 0, 1, 0, 0], // Skew-symmetric
// // // //     [1, 1, 1, 1, 0, 0, 1, 0], // Upper Triangular
// // // //     [1, 1, 1, 1, 0, 0, 0, 1]  // Lower Triangular
// // // //   ];

// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <div style={{ overflowX: 'auto' }}>
// // // //         <table style={{ borderCollapse: 'collapse' }}>
// // // //           <thead>
// // // //             <tr>
// // // //               <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}></th>
// // // //               {matrices.map((matrix, index) => (
// // // //                 <th
// // // //                   key={index}
// // // //                   style={{
// // // //                     padding: '10px',
// // // //                     borderBottom: '2px solid #ddd',
// // // //                     transform: 'rotate(-45deg)',
// // // //                     whiteSpace: 'nowrap',
// // // //                     verticalAlign: 'bottom',
// // // //                     height: '150px'
// // // //                   }}
// // // //                 >
// // // //                   {matrix}
// // // //                 </th>
// // // //               ))}
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {matrices.map((matrix, i) => (
// // // //               <tr key={i}>
// // // //                 <td style={{
// // // //                   padding: '10px',
// // // //                   borderBottom: '1px solid #ddd',
// // // //                   fontWeight: 'bold',
// // // //                   whiteSpace: 'nowrap'
// // // //                 }}>
// // // //                   {matrix}
// // // //                 </td>
// // // //                 {coOccurrence[i].map((value, j) => (
// // // //                   <td
// // // //                     key={j}
// // // //                     style={{
// // // //                       padding: '10px',
// // // //                       borderBottom: '1px solid #ddd',
// // // //                       backgroundColor: value ? '#1e40af' : '#f3f4f6',
// // // //                       color: value ? 'white' : 'black',
// // // //                       textAlign: 'center',
// // // //                       width: '40px',
// // // //                       height: '40px'
// // // //                     }}
// // // //                   >
// // // //                     {value}
// // // //                   </td>
// // // //                 ))}
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CoOccurrenceMatrix;


// // // import React, { useEffect, useState } from 'react';

// // // const CoOccurrenceMatrix = () => {
// // //   const [cellSize, setCellSize] = useState(0);
// // //   const [firstColumnWidth, setFirstColumnWidth] = useState(0);

// // //   const matrices = [
// // //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
// // //     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
// // //   ];

// // //   const matrixDescriptions = [
// // //     "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
// // //     "All elements are 0",
// // //     "Diagonal matrix with same value on main diagonal",
// // //     "Only non-zero elements on main diagonal",
// // //     "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
// // //     "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
// // //     "All elements below main diagonal are 0",
// // //     "All elements above main diagonal are 0"
// // //   ];

// // //   const coOccurrence = [
// // //     [1, 0, 1, 1, 1, 0, 1, 1], // Identity
// // //     [0, 1, 1, 1, 1, 0, 1, 1], // Zero
// // //     [1, 1, 1, 1, 1, 0, 1, 1], // Scalar
// // //     [1, 0, 1, 1, 1, 0, 1, 1], // Diagonal
// // //     [1, 1, 1, 1, 1, 0, 0, 0], // Symmetric
// // //     [0, 0, 0, 0, 0, 1, 0, 0], // Skew-symmetric
// // //     [1, 1, 1, 1, 0, 0, 1, 0], // Upper Triangular
// // //     [1, 1, 1, 1, 0, 0, 0, 1]  // Lower Triangular
// // //   ];

// // //   useEffect(() => {
// // //     const calculateSizes = () => {
// // //       // Get window height and subtract some padding
// // //       const windowHeight = window.innerHeight;
// // //       const padding = 40; // 20px padding top and bottom
// // //       const availableHeight = windowHeight - padding;
      
// // //       // Calculate cell size (height/8 for 8 rows)
// // //       const newCellSize = Math.floor(availableHeight / 8) - 2; // -2 for borders
      
// // //       // Set first column width to be wider to accommodate descriptions
// // //       const newFirstColumnWidth = Math.max(300, newCellSize * 2);
      
// // //       setCellSize(newCellSize);
// // //       setFirstColumnWidth(newFirstColumnWidth);
// // //     };

// // //     calculateSizes();
// // //     window.addEventListener('resize', calculateSizes);
    
// // //     return () => window.removeEventListener('resize', calculateSizes);
// // //   }, []);

// // //   const headerStyle = {
// // //     padding: '10px',
// // //     borderBottom: '2px solid #ddd',
// // //     height: `${cellSize}px`,
// // //     width: `${cellSize}px`,
// // //     transform: 'rotate(-45deg)',
// // //     transformOrigin: 'bottom left',
// // //     whiteSpace: 'nowrap',
// // //     position: 'relative',
// // //     verticalAlign: 'bottom',
// // //     textAlign: 'left'
// // //   };

// // //   const cellStyle = (value) => ({
// // //     width: `${cellSize}px`,
// // //     height: `${cellSize}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     backgroundColor: value ? '#1e40af' : '#f3f4f6',
// // //     color: value ? 'white' : 'black',
// // //     textAlign: 'center'
// // //   });

// // //   const firstColumnStyle = {
// // //     width: `${firstColumnWidth}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     fontWeight: 'bold',
// // //     whiteSpace: 'normal'
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
// // //         <table style={{ borderCollapse: 'collapse' }}>
// // //           <thead>
// // //             <tr>
// // //               <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
// // //               {matrices.map((matrix, index) => (
// // //                 <th key={index} style={headerStyle}>
// // //                   {matrix}
// // //                 </th>
// // //               ))}
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {matrices.map((matrix, i) => (
// // //               <tr key={i}>
// // //                 <td style={firstColumnStyle}>
// // //                   <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
// // //                     {matrix}
// // //                   </div>
// // //                   <div style={{ 
// // //                     fontSize: '0.9em', 
// // //                     fontWeight: 'normal',
// // //                     color: '#666'
// // //                   }}>
// // //                     {matrixDescriptions[i]}
// // //                   </div>
// // //                 </td>
// // //                 {coOccurrence[i].map((value, j) => (
// // //                   <td key={j} style={cellStyle(value)}>
// // //                     {value}
// // //                   </td>
// // //                 ))}
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CoOccurrenceMatrix;


// // // import React, { useEffect, useState } from 'react';

// // // const CoOccurrenceMatrix = () => {
// // //   const [cellSize, setCellSize] = useState(0);
// // //   const [firstColumnWidth, setFirstColumnWidth] = useState(0);

// // //   const matrices = [
// // //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
// // //     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
// // //   ];

// // //   const matrixDescriptions = [
// // //     "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
// // //     "All elements are 0",
// // //     "Diagonal matrix with same value on main diagonal",
// // //     "Only non-zero elements on main diagonal",
// // //     "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
// // //     "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
// // //     "All elements below main diagonal are 0",
// // //     "All elements above main diagonal are 0"
// // //   ];

// // //   // 2: Yes (always), 1: Maybe (can be), 0: No (never)
// // //   const coOccurrence = [
// // //     [2, 0, 1, 2, 1, 0, 1, 1], // Identity
// // //     [0, 2, 1, 1, 1, 0, 1, 1], // Zero
// // //     [1, 1, 2, 2, 1, 0, 1, 1], // Scalar
// // //     [2, 1, 2, 2, 1, 0, 1, 1], // Diagonal
// // //     [1, 1, 1, 1, 2, 0, 0, 0], // Symmetric
// // //     [0, 0, 0, 0, 0, 2, 0, 0], // Skew-symmetric
// // //     [1, 1, 1, 1, 0, 0, 2, 0], // Upper Triangular
// // //     [1, 1, 1, 1, 0, 0, 0, 2]  // Lower Triangular
// // //   ];

// // //   useEffect(() => {
// // //     const calculateSizes = () => {
// // //       const windowHeight = window.innerHeight;
// // //       const padding = 40;
// // //       const availableHeight = windowHeight - padding;
// // //       const newCellSize = Math.floor(availableHeight / 8) - 2;
// // //       const newFirstColumnWidth = Math.max(300, newCellSize * 2);
      
// // //       setCellSize(newCellSize);
// // //       setFirstColumnWidth(newFirstColumnWidth);
// // //     };

// // //     calculateSizes();
// // //     window.addEventListener('resize', calculateSizes);
// // //     return () => window.removeEventListener('resize', calculateSizes);
// // //   }, []);

// // //   const getBackgroundColor = (value) => {
// // //     switch(value) {
// // //       case 2: return '#1e40af'; // Yes - current blue
// // //       case 1: return '#3b82f6'; // Maybe - lighter blue
// // //       case 0: return '#f3f4f6'; // No - light gray
// // //       default: return '#f3f4f6';
// // //     }
// // //   };

// // //   const getText = (value) => {
// // //     switch(value) {
// // //       case 2: return 'Yes';
// // //       case 1: return 'Maybe';
// // //       case 0: return 'No';
// // //       default: return '';
// // //     }
// // //   };

// // //   const cellStyle = (value) => ({
// // //     width: `${cellSize}px`,
// // //     height: `${cellSize}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     backgroundColor: getBackgroundColor(value),
// // //     color: value > 0 ? 'white' : 'black',
// // //     textAlign: 'center'
// // //   });

// // //   const firstColumnStyle = {
// // //     width: `${firstColumnWidth}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     fontWeight: 'bold',
// // //     whiteSpace: 'normal'
// // //   };

// // //   const headerStyle = {
// // //     padding: '10px',
// // //     borderBottom: '2px solid #ddd',
// // //     height: `${cellSize}px`,
// // //     width: `${cellSize}px`,
// // //     transform: 'rotate(-45deg)',
// // //     transformOrigin: 'bottom left',
// // //     whiteSpace: 'nowrap',
// // //     position: 'relative',
// // //     verticalAlign: 'bottom',
// // //     textAlign: 'left'
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
// // //         <table style={{ borderCollapse: 'collapse' }}>
// // //           <thead>
// // //             <tr>
// // //               <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
// // //               {matrices.map((matrix, index) => (
// // //                 <th key={index} style={headerStyle}>
// // //                   {matrix}
// // //                 </th>
// // //               ))}
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {matrices.map((matrix, i) => (
// // //               <tr key={i}>
// // //                 <td style={firstColumnStyle}>
// // //                   <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
// // //                     {matrix}
// // //                   </div>
// // //                   <div style={{ 
// // //                     fontSize: '0.9em', 
// // //                     fontWeight: 'normal',
// // //                     color: '#666'
// // //                   }}>
// // //                     {matrixDescriptions[i]}
// // //                   </div>
// // //                 </td>
// // //                 {coOccurrence[i].map((value, j) => (
// // //                   <td key={j} style={cellStyle(value)}>
// // //                     {getText(value)}
// // //                   </td>
// // //                 ))}
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CoOccurrenceMatrix;


// // // import React, { useEffect, useState } from 'react';

// // // const CoOccurrenceMatrix = () => {
// // //   const [cellSize, setCellSize] = useState(0);
// // //   const [firstColumnWidth, setFirstColumnWidth] = useState(0);

// // //   const matrices = [
// // //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
// // //     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
// // //   ];

// // //   const matrixDescriptions = [
// // //     "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
// // //     "All elements are 0",
// // //     "Diagonal matrix with same value on main diagonal",
// // //     "Only non-zero elements on main diagonal",
// // //     "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
// // //     "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
// // //     "All elements below main diagonal are 0",
// // //     "All elements above main diagonal are 0"
// // //   ];

// // //   // 2: Yes (always), 1: Maybe (can be), 0: No (never)
// // //   const coOccurrence = [
// // //     [2, 0, 1, 2, 1, 0, 1, 1], // Identity
// // //     [0, 2, 1, 1, 1, 0, 1, 1], // Zero
// // //     [1, 1, 2, 2, 1, 0, 1, 1], // Scalar
// // //     [2, 1, 2, 2, 1, 0, 1, 1], // Diagonal
// // //     [1, 1, 1, 1, 2, 0, 0, 0], // Symmetric
// // //     [0, 0, 0, 0, 0, 2, 0, 0], // Skew-symmetric
// // //     [1, 1, 1, 1, 0, 0, 2, 0], // Upper Triangular
// // //     [1, 1, 1, 1, 0, 0, 0, 2]  // Lower Triangular
// // //   ];

// // //   useEffect(() => {
// // //     const calculateSizes = () => {
// // //       const windowHeight = window.innerHeight;
// // //       const padding = 40;
// // //       const availableHeight = windowHeight - padding;
// // //       const newCellSize = Math.floor(availableHeight / 8) - 2;
// // //       const newFirstColumnWidth = Math.max(300, newCellSize * 2);
      
// // //       setCellSize(newCellSize);
// // //       setFirstColumnWidth(newFirstColumnWidth);
// // //     };

// // //     calculateSizes();
// // //     window.addEventListener('resize', calculateSizes);
// // //     return () => window.removeEventListener('resize', calculateSizes);
// // //   }, []);

// // //   const getBackgroundColor = (value) => {
// // //     switch(value) {
// // //       case 2: return '#1e40af'; // Yes - current blue
// // //       case 1: return '#3b82f6'; // Maybe - lighter blue
// // //       case 0: return '#f3f4f6'; // No - light gray
// // //       default: return '#f3f4f6';
// // //     }
// // //   };

// // //   const getText = (value) => {
// // //     switch(value) {
// // //       case 2: return 'Yes';
// // //       case 1: return 'Maybe';
// // //       case 0: return 'No';
// // //       default: return '';
// // //     }
// // //   };

// // //   const cellStyle = (value) => ({
// // //     width: `${cellSize}px`,
// // //     height: `${cellSize}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     backgroundColor: getBackgroundColor(value),
// // //     color: value > 0 ? 'white' : 'black',
// // //     textAlign: 'center'
// // //   });

// // //   const firstColumnStyle = {
// // //     width: `${firstColumnWidth}px`,
// // //     padding: '10px',
// // //     borderBottom: '1px solid #ddd',
// // //     fontWeight: 'bold',
// // //     whiteSpace: 'normal'
// // //   };

// // //   const headerStyle = {
// // //     padding: '10px',
// // //     borderBottom: '2px solid #ddd',
// // //     height: `${cellSize}px`,
// // //     width: `${cellSize}px`,
// // //     transform: 'rotate(-45deg)',
// // //     transformOrigin: 'bottom left',
// // //     whiteSpace: 'nowrap',
// // //     position: 'relative',
// // //     verticalAlign: 'bottom',
// // //     textAlign: 'left'
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
// // //         <table style={{ borderCollapse: 'collapse' }}>
// // //           <thead>
// // //             <tr>
// // //               <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
// // //               {matrices.map((matrix, index) => (
// // //                 <th key={index} style={headerStyle}>
// // //                   {matrix}
// // //                 </th>
// // //               ))}
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {matrices.map((matrix, i) => (
// // //               <tr key={i}>
// // //                 <td style={firstColumnStyle}>
// // //                   <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
// // //                     <a href={`#${matrix.toLowerCase().replaceAll(' ','_')}`} id={matrix} style={{ color: 'inherit', textDecoration: 'none' }}>
// // //                       {matrix}
// // //                     </a>
// // //                   </div>
// // //                   <div style={{ 
// // //                     fontSize: '0.9em', 
// // //                     fontWeight: 'normal',
// // //                     color: '#666'
// // //                   }}>
// // //                     {matrixDescriptions[i]}
// // //                   </div>
// // //                 </td>
// // //                 {coOccurrence[i].map((value, j) => (
// // //                   <td key={j} style={cellStyle(value)}>
// // //                     {getText(value)}
// // //                   </td>
// // //                 ))}
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CoOccurrenceMatrix;

// // import React, { useEffect, useState } from 'react';

// // const CoOccurrenceMatrix = () => {
// //   const [cellSize, setCellSize] = useState(0);
// //   const [firstColumnWidth, setFirstColumnWidth] = useState(0);

// //   const matrices = [
// //     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
// //     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
// //   ];

// //   const matrixDescriptions = [
// //     "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
// //     "All elements are 0",
// //     "Diagonal matrix with same value on main diagonal",
// //     "Only non-zero elements on main diagonal",
// //     "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
// //     "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
// //     "All elements below main diagonal are 0",
// //     "All elements above main diagonal are 0"
// //   ];

// //   const coOccurrence = [
// //     [2, 0, 1, 2, 1, 0, 1, 1], // Identity
// //     [0, 2, 1, 1, 1, 0, 1, 1], // Zero
// //     [1, 1, 2, 2, 1, 0, 1, 1], // Scalar
// //     [2, 1, 2, 2, 1, 0, 1, 1], // Diagonal
// //     [1, 1, 1, 1, 2, 0, 0, 0], // Symmetric
// //     [0, 0, 0, 0, 0, 2, 0, 0], // Skew-symmetric
// //     [1, 1, 1, 1, 0, 0, 2, 0], // Upper Triangular
// //     [1, 1, 1, 1, 0, 0, 0, 2]  // Lower Triangular
// //   ];

// //   useEffect(() => {
// //     const calculateSizes = () => {
// //       const windowHeight = window.innerHeight;
// //       const padding = 40;
// //       const availableHeight = windowHeight - padding;
// //       const newCellSize = Math.floor((availableHeight - 20) / 8);
// //       const newFirstColumnWidth = Math.max(300, newCellSize * 2);
      
// //       setCellSize(newCellSize);
// //       setFirstColumnWidth(newFirstColumnWidth);
// //     };

// //     calculateSizes();
// //     window.addEventListener('resize', calculateSizes);
// //     return () => window.removeEventListener('resize', calculateSizes);
// //   }, []);

// //   const getBackgroundColor = (value) => {
// //     switch(value) {
// //       case 2: return '#1e40af'; // Yes - current blue
// //       case 1: return '#3b82f6'; // Maybe - lighter blue
// //       case 0: return '#f3f4f6'; // No - light gray
// //       default: return '#f3f4f6';
// //     }
// //   };

// //   const getText = (value) => {
// //     switch(value) {
// //       case 2: return 'Yes';
// //       case 1: return 'Maybe';
// //       case 0: return 'No';
// //       default: return '';
// //     }
// //   };

// //   const cellStyle = (value) => ({
// //     width: `${cellSize}px`,
// //     height: `${cellSize}px`,
// //     backgroundColor: getBackgroundColor(value),
// //     color: value > 0 ? 'white' : 'black',
// //     textAlign: 'center',
// //     lineHeight: `${cellSize}px`,
// //     border: '1px solid #ddd'
// //   });

// //   const firstColumnStyle = {
// //     width: `${firstColumnWidth}px`,
// //     padding: '10px',
// //     borderBottom: '1px solid #ddd',
// //     fontWeight: 'bold',
// //     whiteSpace: 'normal'
// //   };

// //   const headerStyle = {
// //     padding: '10px',
// //     borderBottom: '2px solid #ddd',
// //     height: `${cellSize}px`,
// //     width: `${cellSize}px`,
// //     transform: 'rotate(-45deg)',
// //     transformOrigin: 'bottom left',
// //     whiteSpace: 'nowrap',
// //     position: 'relative',
// //     verticalAlign: 'bottom',
// //     textAlign: 'left'
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
// //         <table style={{ borderCollapse: 'collapse' }}>
// //           <thead>
// //             <tr>
// //               <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
// //               {matrices.map((matrix, index) => (
// //                 <th key={index} style={headerStyle}>
// //                   {matrix}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {matrices.map((matrix, i) => (
// //               <tr key={i}>
// //                 <td style={firstColumnStyle}>
// //                   <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
// //                     <a href={`#${matrix.toLowerCase().replaceAll(' ','_')}`} id={matrix} style={{ color: 'inherit', textDecoration: 'none' }}>
// //                       {matrix}
// //                     </a>
// //                   </div>
// //                   <div style={{ 
// //                     fontSize: '0.9em', 
// //                     fontWeight: 'normal',
// //                     color: '#666'
// //                   }}>
// //                     {matrixDescriptions[i]}
// //                   </div>
// //                 </td>
// //                 {coOccurrence[i].map((value, j) => (
// //                   <td key={j} style={cellStyle(value)}>
// //                     {getText(value)}
// //                   </td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoOccurrenceMatrix;


// import React, { useEffect, useState } from 'react';

// const CoOccurrenceMatrix = () => {
//   const [cellSize, setCellSize] = useState(0);
//   const [firstColumnWidth, setFirstColumnWidth] = useState(0);

//   const matrices = [
//     'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
//     'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
//   ];

//   const matrixDescriptions = [
//     "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
//     "All elements are 0",
//     "Diagonal matrix with same value on main diagonal",
//     "Only non-zero elements on main diagonal",
//     "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
//     "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
//     "All elements below main diagonal are 0",
//     "All elements above main diagonal are 0"
//   ];

//   const coOccurrence = [
//     [2, 0, 1, 2, 1, 0, 1, 1], // Identity
//     [0, 2, 1, 1, 1, 0, 1, 1], // Zero
//     [1, 1, 2, 2, 1, 0, 1, 1], // Scalar
//     [2, 1, 2, 2, 1, 0, 1, 1], // Diagonal
//     [1, 1, 1, 1, 2, 0, 0, 0], // Symmetric
//     [0, 0, 0, 0, 0, 2, 0, 0], // Skew-symmetric
//     [1, 1, 1, 1, 0, 0, 2, 0], // Upper Triangular
//     [1, 1, 1, 1, 0, 0, 0, 2]  // Lower Triangular
//   ];

//   useEffect(() => {
//     const calculateSizes = () => {
//       const windowHeight = window.innerHeight;
//       const padding = 40;
//       const availableHeight = windowHeight - padding;
//       const newCellSize = Math.floor(availableHeight / 8);
//       const newFirstColumnWidth = Math.max(300, newCellSize * 2);
      
//       setCellSize(newCellSize);
//       setFirstColumnWidth(newFirstColumnWidth);
//     };

//     calculateSizes();
//     window.addEventListener('resize', calculateSizes);
//     return () => window.removeEventListener('resize', calculateSizes);
//   }, []);

//   const getBackgroundColor = (value) => {
//     switch(value) {
//       case 2: return '#1e40af'; // Yes - current blue
//       case 1: return '#3b82f6'; // Maybe - lighter blue
//       case 0: return '#f3f4f6'; // No - light gray
//       default: return '#f3f4f6';
//     }
//   };

//   const getText = (value) => {
//     switch(value) {
//       case 2: return 'Yes';
//       case 1: return 'Maybe';
//       case 0: return 'No';
//       default: return '';
//     }
//   };

//   const cellStyle = (value) => ({
//     width: `${cellSize}px`,
//     height: `${cellSize}px`,
//     backgroundColor: getBackgroundColor(value),
//     color: value > 0 ? 'white' : 'black',
//     textAlign: 'center',
//     lineHeight: `${cellSize}px`
//   });

//   const firstColumnStyle = {
//     width: `${firstColumnWidth}px`,
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//     fontWeight: 'bold',
//     whiteSpace: 'normal'
//   };

//   const headerStyle = {
//     height: `${cellSize}px`,
//     width: `${cellSize}px`,
//     transform: 'rotate(-45deg)',
//     transformOrigin: 'bottom left',
//     whiteSpace: 'nowrap',
//     position: 'relative',
//     verticalAlign: 'bottom',
//     textAlign: 'left'
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
//         <table style={{ borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
//               {matrices.map((matrix, index) => (
//                 <th key={index} style={headerStyle}>
//                   {matrix}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {matrices.map((matrix, i) => (
//               <tr key={i}>
//                 <td style={firstColumnStyle}>
//                   <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
//                     <a href={`#${matrix.toLowerCase().replaceAll(' ','_')}`} id={matrix} style={{ color: 'inherit', textDecoration: 'none' }}>
//                       {matrix}
//                     </a>
//                   </div>
//                   <div style={{ 
//                     fontSize: '0.9em', 
//                     fontWeight: 'normal',
//                     color: '#666'
//                   }}>
//                     {matrixDescriptions[i]}
//                   </div>
//                 </td>
//                 {coOccurrence[i].map((value, j) => (
//                   <td key={j} style={cellStyle(value)}>
//                     {getText(value)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CoOccurrenceMatrix;


import { color } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const CoOccurrenceMatrix = () => {
  const [cellSize, setCellSize] = useState(0);
  const [firstColumnWidth, setFirstColumnWidth] = useState(0);

  const matrices = [
    'Identity', 'Zero', 'Scalar', 'Diagonal', 'Symmetric', 
    'Skew-symmetric', 'Upper Triangular', 'Lower Triangular'
  ];

  const matrixDescriptions = [
    "Diagonal matrix with all 1's on main diagonal, 0's elsewhere",
    "All elements are 0",
    "Diagonal matrix with same value on main diagonal",
    "Only non-zero elements on main diagonal",
    "Equal to its own transpose (aᵢⱼ = aⱼᵢ)",
    "Negative of its own transpose (aᵢⱼ = -aⱼᵢ)",
    "All elements below main diagonal are 0",
    "All elements above main diagonal are 0"
  ];

  const coOccurrence = [
    [2, 0, 2, 2, 2, 0, 2, 2],  // Identity  
    [0, 2, 2, 2, 2, 2, 2, 2],  // Zero 
    [1, 1, 2, 2, 2, 1, 2, 2],  // Scalar 
    [1, 1, 1, 2, 2, 1, 2, 2],  // Diagonal  
    [1, 1, 1, 1, 2, 1, 1, 1],  // Symmetric  
    [0, 1, 1, 1, 1, 2, 1, 1],  // Skew-Symmetric  
    [1, 1, 1, 1, 1, 1, 2, 1],  // Upper Triangular 
    [1, 1, 1, 1, 1, 1, 1, 2]  // Lower Triangular
  ];

  useEffect(() => {
    const calculateSizes = () => {
      const windowHeight = window.innerHeight;
      const padding = 40;
      const availableHeight = windowHeight - padding;
      const baseSize = Math.floor(availableHeight / 8);
      setCellSize(baseSize);
      setFirstColumnWidth(Math.max(360, baseSize * 2));
    };

    calculateSizes();
    window.addEventListener('resize', calculateSizes);
    return () => window.removeEventListener('resize', calculateSizes);
  }, []);

  const getBackgroundColor = (value) => {
    switch(value) {
      case 2: return '#1e40af';
      case 1: return '#3b82f6';
      case 0: return '#f3f4f6';
      default: return '#f3f4f6';
    }
  };

  const getText = (value) => {
    switch(value) {
      case 2: return 'Yes';
      case 1: return 'May Be';
      case 0: return 'Never';
      default: return '';
    }
  };

  const headerStyle = {
    height: `${cellSize}px`,
    width: `${cellSize}px`,
    transform: 'rotate(-45deg)',
    transformOrigin: 'bottom left',
    whiteSpace: 'nowrap',
    position: 'relative',
    verticalAlign: 'bottom',
    textAlign: 'left'
  };

  const cellStyle = (value) => ({
    height: `${cellSize+10}px`,
    width: `${cellSize+10}px`,
    backgroundColor: getBackgroundColor(value),
    color: value > 0 ? 'white' : 'black',
    textAlign: 'center',
    lineHeight: `${cellSize}px`,
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid #ddd'
  });

  const firstColumnStyle = {
    width: `${firstColumnWidth}px`,
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontWeight: 'bold',
    whiteSpace: 'normal',
    fontSize:'20px',
    color:'#3d68ca'
  };

  return (
    <div style={{ padding: '20px' ,marginTop:'-20px',transform:'scale(0.8)'}}>
      <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', borderLeft: '1px solid #ddd', borderTop: '1px solid #ddd' }}>
          <thead>
            <tr style={{height:'100px',paddingLeft:'50px'}}>
              <th style={{ ...firstColumnStyle, borderBottom: '2px solid #ddd' }}></th>
              {matrices.map((matrix, index) => (
                <th key={index} style={headerStyle}>
                  {matrix}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrices.map((matrix, i) => (
              <tr key={i}>
                <td style={firstColumnStyle}>
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    <a href={`#${matrix.toLowerCase().replaceAll(' ','_')}`} id={matrix} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {matrix}
                    </a>
                  </div>
                  <div style={{ 
                    fontSize: '0.9em', 
                    fontWeight: 'normal',
                    color: '#666'
                  }}>
                    {matrixDescriptions[i]}
                  </div>
                </td>
                {coOccurrence[i].map((value, j) => (
                  <td key={j} style={cellStyle(value)}>
                    {getText(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoOccurrenceMatrix;