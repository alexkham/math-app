// // import React, { useRef, useEffect } from 'react';
// // import { functionMap } from './functionMap.js';
// // import { themes } from './themes.js';
// // import styles from './FunctionGraphVisualizer.module.css';

// // const GraphCore = ({
// //   functions = ['sin'], // Array of function keys
// //   xRange = [-10, 10],
// //   yRange = [-10, 10],
// //   theme = 'minimal',
// //   width = 800,
// //   height = 600,
// //   xAxisType = 'auto', // 'auto', 'integer', 'pi', 'decimal'
// //   showGrid = true,
// //   showAxes = true,
// //   showLabels = true
// // }) => {
// //   const canvasRef = useRef(null);
  
// //   const currentTheme = themes[theme];

// //   // Determine axis type automatically if set to 'auto'
// //   const getAxisType = () => {
// //     if (xAxisType !== 'auto') return xAxisType;
    
// //     // Auto-detect based on function types
// //     const functionTypes = functions.map(key => functionMap[key]?.type).filter(Boolean);
// //     if (functionTypes.includes('trigonometric')) return 'pi';
// //     return 'integer';
// //   };

// //   const actualAxisType = getAxisType();

// //   // Convert mathematical coordinates to canvas coordinates
// //   const mathToCanvas = (mathX, mathY, canvas) => {
// //     const canvasX = ((mathX - xRange[0]) / (xRange[1] - xRange[0])) * canvas.width;
// //     const canvasY = ((yRange[1] - mathY) / (yRange[1] - yRange[0])) * canvas.height;
// //     return { x: canvasX, y: canvasY };
// //   };

// //   // Generate axis labels based on type
// //   const generateXAxisLabels = () => {
// //     const labels = [];
// //     const range = xRange[1] - xRange[0];
    
// //     if (actualAxisType === 'pi') {
// //       // Generate π-based labels
// //       const piStart = Math.ceil(xRange[0] / Math.PI);
// //       const piEnd = Math.floor(xRange[1] / Math.PI);
      
// //       for (let i = piStart; i <= piEnd; i++) {
// //         const value = i * Math.PI;
// //         if (value >= xRange[0] && value <= xRange[1]) {
// //           let label;
// //           if (i === 0) label = '0';
// //           else if (i === 1) label = 'π';
// //           else if (i === -1) label = '-π';
// //           else if (i > 0) label = `${i}π`;
// //           else label = `${i}π`;
          
// //           labels.push({ value, label });
// //         }
// //       }
      
// //       // Add half-π marks for better resolution
// //       for (let i = piStart * 2; i <= piEnd * 2; i++) {
// //         const value = i * Math.PI / 2;
// //         if (value >= xRange[0] && value <= xRange[1] && i % 2 !== 0) {
// //           let label;
// //           if (i === 1) label = 'π/2';
// //           else if (i === -1) label = '-π/2';
// //           else if (i > 0) label = `${i}π/2`;
// //           else label = `${i}π/2`;
          
// //           labels.push({ value, label, minor: true });
// //         }
// //       }
// //     } else {
// //       // Generate integer-based labels
// //       const step = range > 20 ? 5 : range > 10 ? 2 : 1;
// //       const start = Math.ceil(xRange[0] / step) * step;
// //       const end = Math.floor(xRange[1] / step) * step;
      
// //       for (let i = start; i <= end; i += step) {
// //         if (i >= xRange[0] && i <= xRange[1]) {
// //           labels.push({ value: i, label: i.toString() });
// //         }
// //       }
// //     }
    
// //     return labels.sort((a, b) => a.value - b.value);
// //   };

// //   const generateYAxisLabels = () => {
// //     const labels = [];
// //     const range = yRange[1] - yRange[0];
// //     const step = range > 20 ? 5 : range > 10 ? 2 : 1;
// //     const start = Math.ceil(yRange[0] / step) * step;
// //     const end = Math.floor(yRange[1] / step) * step;
    
// //     for (let i = start; i <= end; i += step) {
// //       if (i >= yRange[0] && i <= yRange[1] && i !== 0) {
// //         labels.push({ value: i, label: i.toString() });
// //       }
// //     }
    
// //     return labels;
// //   };

// //   // Draw grid
// //   const drawGrid = (ctx, canvas) => {
// //     if (!showGrid) return;
    
// //     const width = canvas.width;
// //     const height = canvas.height;
    
// //     ctx.strokeStyle = currentTheme.gridColor;
// //     ctx.lineWidth = theme === 'classic' || theme === 'minimal' ? 1 : 0.5;
// //     ctx.beginPath();
    
// //     // Vertical grid lines
// //     const xLabels = generateXAxisLabels();
// //     xLabels.forEach(({ value, minor }) => {
// //       const canvasPos = mathToCanvas(value, 0, canvas);
// //       if (canvasPos.x >= 0 && canvasPos.x <= width) {
// //         ctx.globalAlpha = minor ? 0.3 : 0.6;
// //         ctx.moveTo(canvasPos.x, 0);
// //         ctx.lineTo(canvasPos.x, height);
// //       }
// //     });
    
// //     // Horizontal grid lines
// //     const yLabels = generateYAxisLabels();
// //     yLabels.forEach(({ value }) => {
// //       const canvasPos = mathToCanvas(0, value, canvas);
// //       if (canvasPos.y >= 0 && canvasPos.y <= height) {
// //         ctx.globalAlpha = 0.6;
// //         ctx.moveTo(0, canvasPos.y);
// //         ctx.lineTo(width, canvasPos.y);
// //       }
// //     });
    
// //     ctx.globalAlpha = 1;
// //     ctx.stroke();
// //   };

// //   // Draw axes
// //   const drawAxes = (ctx, canvas) => {
// //     if (!showAxes) return;
    
// //     const width = canvas.width;
// //     const height = canvas.height;
    
// //     ctx.strokeStyle = currentTheme.axisColor;
// //     ctx.lineWidth = theme === 'classic' || theme === 'minimal' ? 2.5 : 2;
// //     ctx.beginPath();
    
// //     // X-axis
// //     const xAxisY = mathToCanvas(0, 0, canvas).y;
// //     if (xAxisY >= 0 && xAxisY <= height) {
// //       ctx.moveTo(0, xAxisY);
// //       ctx.lineTo(width, xAxisY);
// //     }
    
// //     // Y-axis
// //     const yAxisX = mathToCanvas(0, 0, canvas).x;
// //     if (yAxisX >= 0 && yAxisX <= width) {
// //       ctx.moveTo(yAxisX, 0);
// //       ctx.lineTo(yAxisX, height);
// //     }
    
// //     ctx.stroke();
// //   };

// //   // Draw axis labels
// //   const drawLabels = (ctx, canvas) => {
// //     if (!showLabels) return;
    
// //     const width = canvas.width;
// //     const height = canvas.height;
    
// //     ctx.fillStyle = currentTheme.textColor;
// //     ctx.font = '12px Arial';
    
// //     const xAxisY = mathToCanvas(0, 0, canvas).y;
// //     const yAxisX = mathToCanvas(0, 0, canvas).x;
    
// //     // X-axis labels
// //     ctx.textAlign = 'center';
// //     const xLabels = generateXAxisLabels();
// //     xLabels.forEach(({ value, label, minor }) => {
// //       if (minor) return; // Skip minor labels for cleaner look
      
// //       const canvasPos = mathToCanvas(value, 0, canvas);
// //       if (canvasPos.x >= 20 && canvasPos.x <= width - 20) {
// //         const labelY = xAxisY > height - 20 ? height - 5 : xAxisY + 15;
// //         ctx.fillText(label, canvasPos.x, labelY);
// //       }
// //     });
    
// //     // Y-axis labels
// //     ctx.textAlign = 'right';
// //     const yLabels = generateYAxisLabels();
// //     yLabels.forEach(({ value, label }) => {
// //       const canvasPos = mathToCanvas(0, value, canvas);
// //       if (canvasPos.y >= 15 && canvasPos.y <= height - 15) {
// //         const labelX = yAxisX < 30 ? 25 : yAxisX - 5;
// //         ctx.fillText(label, labelX, canvasPos.y + 4);
// //       }
// //     });
// //   };

// //   // Plot a single function
// //   const plotFunction = (ctx, canvas, functionKey, colorOverride) => {
// //     const functionData = functionMap[functionKey];
// //     if (!functionData) return;
    
// //     const { func } = functionData;
// //     const color = colorOverride || functionData.color || currentTheme.functionColor;
    
// //     ctx.strokeStyle = color;
// //     ctx.lineWidth = theme === 'classic' || theme === 'minimal' ? 2.5 : 2;
// //     ctx.beginPath();
    
// //     let firstPoint = true;
// //     const step = (xRange[1] - xRange[0]) / (canvas.width * 2); // High resolution
    
// //     for (let x = xRange[0]; x <= xRange[1]; x += step) {
// //       const y = func(x);
      
// //       // Skip invalid points
// //       if (isNaN(y) || !isFinite(y)) {
// //         firstPoint = true;
// //         continue;
// //       }
      
// //       // Skip points outside visible range (with buffer)
// //       const buffer = (yRange[1] - yRange[0]) * 0.1;
// //       if (y < yRange[0] - buffer || y > yRange[1] + buffer) {
// //         firstPoint = true;
// //         continue;
// //       }
      
// //       const canvasPos = mathToCanvas(x, y, canvas);
      
// //       if (firstPoint) {
// //         ctx.moveTo(canvasPos.x, canvasPos.y);
// //         firstPoint = false;
// //       } else {
// //         ctx.lineTo(canvasPos.x, canvasPos.y);
// //       }
// //     }
    
// //     ctx.stroke();
// //   };

// //   // Main drawing function
// //   const draw = () => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
    
// //     const ctx = canvas.getContext('2d');
// //     canvas.width = width;
// //     canvas.height = height;
    
// //     // Clear canvas
// //     ctx.fillStyle = currentTheme.background;
// //     ctx.fillRect(0, 0, width, height);
    
// //     // Draw components in order
// //     drawGrid(ctx, canvas);
// //     drawAxes(ctx, canvas);
// //     drawLabels(ctx, canvas);
    
// //     // Plot all functions
// //     functions.forEach((functionKey, index) => {
// //       // Use different colors for multiple functions if not specified
// //       let color = null;
// //       if (functions.length > 1) {
// //         const colors = [
// //           currentTheme.functionColor,
// //           currentTheme.functionColor2,
// //           currentTheme.functionColor3
// //         ].filter(Boolean);
// //         color = colors[index % colors.length];
// //       }
// //       plotFunction(ctx, canvas, functionKey, color);
// //     });
// //   };

// //   // Redraw when props change
// //   useEffect(() => {
// //     draw();
// //   }, [functions, xRange, yRange, theme, width, height, xAxisType, showGrid, showAxes, showLabels]);

// //   return (
// //     <div className={styles.canvasContainer}>
// //       <canvas
// //         ref={canvasRef}
// //         className={styles.canvas}
// //         style={{ 
// //           border: `2px solid ${currentTheme.inputBorder}`,
// //           borderRadius: '8px'
// //         }}
// //       />
// //     </div>
// //   );
// // };

// // export default GraphCore;


// import React, { useRef, useEffect } from 'react';
// import { functionMap } from './functionMap.js';
// import { themes } from './themes.js';
// import styles from './FunctionGraphVisualizer.module.css';

// const GraphCore = ({
//   functions = ['sin'], // Array of function keys
//   xRange = [-10, 10],
//   yRange = [-10, 10],
//   theme = 'minimal',
//   aspectRatio = 16/9, // width/height ratio
//   xAxisType = 'auto', // 'auto', 'integer', 'pi', 'decimal'
//   showGrid = true,
//   showAxes = true,
//   showLabels = true
// }) => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
  
//   const currentTheme = themes[theme];

//   // Determine axis type automatically if set to 'auto'
//   const getAxisType = () => {
//     if (xAxisType !== 'auto') return xAxisType;
    
//     // Auto-detect based on function types
//     const functionTypes = functions.map(key => functionMap[key]?.type).filter(Boolean);
//     if (functionTypes.includes('trigonometric')) return 'pi';
//     return 'integer';
//   };

//   const actualAxisType = getAxisType();

//   // Get responsive dimensions and scaling factors
//   const getCanvasDimensions = () => {
//     const container = containerRef.current;
//     if (!container) return { width: 800, height: 450, scale: 1 };
    
//     const containerWidth = container.clientWidth;
//     const containerHeight = containerWidth / aspectRatio;
    
//     // Scale factor based on container size (baseline: 800px width)
//     const scale = Math.max(0.5, Math.min(2, containerWidth / 800));
    
//     return { 
//       width: containerWidth, 
//       height: containerHeight, 
//       scale 
//     };
//   };

//   // Convert mathematical coordinates to canvas coordinates
//   const mathToCanvas = (mathX, mathY, canvas) => {
//     const canvasX = ((mathX - xRange[0]) / (xRange[1] - xRange[0])) * canvas.width;
//     const canvasY = ((yRange[1] - mathY) / (yRange[1] - yRange[0])) * canvas.height;
//     return { x: canvasX, y: canvasY };
//   };

//   // Generate axis labels based on type
//   const generateXAxisLabels = () => {
//     const labels = [];
//     const range = xRange[1] - xRange[0];
    
//     if (actualAxisType === 'pi') {
//       // Generate π-based labels
//       const piStart = Math.ceil(xRange[0] / Math.PI);
//       const piEnd = Math.floor(xRange[1] / Math.PI);
      
//       for (let i = piStart; i <= piEnd; i++) {
//         const value = i * Math.PI;
//         if (value >= xRange[0] && value <= xRange[1]) {
//           let label;
//           if (i === 0) label = '0';
//           else if (i === 1) label = 'π';
//           else if (i === -1) label = '-π';
//           else if (i > 0) label = `${i}π`;
//           else label = `${i}π`;
          
//           labels.push({ value, label });
//         }
//       }
      
//       // Add half-π marks for better resolution
//       for (let i = piStart * 2; i <= piEnd * 2; i++) {
//         const value = i * Math.PI / 2;
//         if (value >= xRange[0] && value <= xRange[1] && i % 2 !== 0) {
//           let label;
//           if (i === 1) label = 'π/2';
//           else if (i === -1) label = '-π/2';
//           else if (i > 0) label = `${i}π/2`;
//           else label = `${i}π/2`;
          
//           labels.push({ value, label, minor: true });
//         }
//       }
//     } else {
//       // Generate integer-based labels
//       const step = range > 20 ? 5 : range > 10 ? 2 : 1;
//       const start = Math.ceil(xRange[0] / step) * step;
//       const end = Math.floor(xRange[1] / step) * step;
      
//       for (let i = start; i <= end; i += step) {
//         if (i >= xRange[0] && i <= xRange[1]) {
//           labels.push({ value: i, label: i.toString() });
//         }
//       }
//     }
    
//     return labels.sort((a, b) => a.value - b.value);
//   };

//   const generateYAxisLabels = () => {
//     const labels = [];
//     const range = yRange[1] - yRange[0];
//     const step = range > 20 ? 5 : range > 10 ? 2 : 1;
//     const start = Math.ceil(yRange[0] / step) * step;
//     const end = Math.floor(yRange[1] / step) * step;
    
//     for (let i = start; i <= end; i += step) {
//       if (i >= yRange[0] && i <= yRange[1] && i !== 0) {
//         labels.push({ value: i, label: i.toString() });
//       }
//     }
    
//     return labels;
//   };

//   // Draw grid
//   const drawGrid = (ctx, canvas, scale) => {
//     if (!showGrid) return;
    
//     const width = canvas.width;
//     const height = canvas.height;
    
//     ctx.strokeStyle = currentTheme.gridColor;
//     ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 1 : 0.5) * scale;
//     ctx.beginPath();
    
//     // Vertical grid lines
//     const xLabels = generateXAxisLabels();
//     xLabels.forEach(({ value, minor }) => {
//       const canvasPos = mathToCanvas(value, 0, canvas);
//       if (canvasPos.x >= 0 && canvasPos.x <= width) {
//         ctx.globalAlpha = minor ? 0.3 : 0.6;
//         ctx.moveTo(canvasPos.x, 0);
//         ctx.lineTo(canvasPos.x, height);
//       }
//     });
    
//     // Horizontal grid lines
//     const yLabels = generateYAxisLabels();
//     yLabels.forEach(({ value }) => {
//       const canvasPos = mathToCanvas(0, value, canvas);
//       if (canvasPos.y >= 0 && canvasPos.y <= height) {
//         ctx.globalAlpha = 0.6;
//         ctx.moveTo(0, canvasPos.y);
//         ctx.lineTo(width, canvasPos.y);
//       }
//     });
    
//     ctx.globalAlpha = 1;
//     ctx.stroke();
//   };

//   // Draw axes
//   const drawAxes = (ctx, canvas, scale) => {
//     if (!showAxes) return;
    
//     const width = canvas.width;
//     const height = canvas.height;
    
//     ctx.strokeStyle = currentTheme.axisColor;
//     ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 2.5 : 2) * scale;
//     ctx.beginPath();
    
//     // X-axis
//     const xAxisY = mathToCanvas(0, 0, canvas).y;
//     if (xAxisY >= 0 && xAxisY <= height) {
//       ctx.moveTo(0, xAxisY);
//       ctx.lineTo(width, xAxisY);
//     }
    
//     // Y-axis
//     const yAxisX = mathToCanvas(0, 0, canvas).x;
//     if (yAxisX >= 0 && yAxisX <= width) {
//       ctx.moveTo(yAxisX, 0);
//       ctx.lineTo(yAxisX, height);
//     }
    
//     ctx.stroke();
//   };

//   // Draw axis labels
//   const drawLabels = (ctx, canvas, scale) => {
//     if (!showLabels) return;
    
//     const width = canvas.width;
//     const height = canvas.height;
    
//     ctx.fillStyle = currentTheme.textColor;
//     ctx.font = `${Math.max(10, 12 * scale)}px Arial`;
    
//     const xAxisY = mathToCanvas(0, 0, canvas).y;
//     const yAxisX = mathToCanvas(0, 0, canvas).x;
    
//     // X-axis labels
//     ctx.textAlign = 'center';
//     const xLabels = generateXAxisLabels();
//     xLabels.forEach(({ value, label, minor }) => {
//       if (minor) return; // Skip minor labels for cleaner look
      
//       const canvasPos = mathToCanvas(value, 0, canvas);
//       if (canvasPos.x >= 20 * scale && canvasPos.x <= width - 20 * scale) {
//         const labelY = xAxisY > height - 20 * scale ? height - 5 * scale : xAxisY + 15 * scale;
//         ctx.fillText(label, canvasPos.x, labelY);
//       }
//     });
    
//     // Y-axis labels
//     ctx.textAlign = 'right';
//     const yLabels = generateYAxisLabels();
//     yLabels.forEach(({ value, label }) => {
//       const canvasPos = mathToCanvas(0, value, canvas);
//       if (canvasPos.y >= 15 * scale && canvasPos.y <= height - 15 * scale) {
//         const labelX = yAxisX < 30 * scale ? 25 * scale : yAxisX - 5 * scale;
//         ctx.fillText(label, labelX, canvasPos.y + 4 * scale);
//       }
//     });
//   };

//   // Plot a single function
//   const plotFunction = (ctx, canvas, functionKey, colorOverride, scale) => {
//     const functionData = functionMap[functionKey];
//     if (!functionData) return;
    
//     const { func } = functionData;
//     const color = colorOverride || functionData.color || currentTheme.functionColor;
    
//     ctx.strokeStyle = color;
//     ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 2.5 : 2) * scale;
//     ctx.beginPath();
    
//     let firstPoint = true;
//     const step = (xRange[1] - xRange[0]) / (canvas.width * 2); // High resolution
    
//     for (let x = xRange[0]; x <= xRange[1]; x += step) {
//       const y = func(x);
      
//       // Skip invalid points
//       if (isNaN(y) || !isFinite(y)) {
//         firstPoint = true;
//         continue;
//       }
      
//       // Skip points outside visible range (with buffer)
//       const buffer = (yRange[1] - yRange[0]) * 0.1;
//       if (y < yRange[0] - buffer || y > yRange[1] + buffer) {
//         firstPoint = true;
//         continue;
//       }
      
//       const canvasPos = mathToCanvas(x, y, canvas);
      
//       if (firstPoint) {
//         ctx.moveTo(canvasPos.x, canvasPos.y);
//         firstPoint = false;
//       } else {
//         ctx.lineTo(canvasPos.x, canvasPos.y);
//       }
//     }
    
//     ctx.stroke();
//   };

//   // Main drawing function
//   const draw = () => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;
    
//     const { width, height, scale } = getCanvasDimensions();
    
//     // Set canvas size
//     canvas.width = width;
//     canvas.height = height;
    
//     const ctx = canvas.getContext('2d');
    
//     // Clear canvas
//     ctx.fillStyle = currentTheme.background;
//     ctx.fillRect(0, 0, width, height);
    
//     // Draw components in order
//     drawGrid(ctx, canvas, scale);
//     drawAxes(ctx, canvas, scale);
//     drawLabels(ctx, canvas, scale);
    
//     // Plot all functions
//     functions.forEach((functionKey, index) => {
//       // Use different colors for multiple functions if not specified
//       let color = null;
//       if (functions.length > 1) {
//         const colors = [
//           currentTheme.functionColor,
//           currentTheme.functionColor2,
//           currentTheme.functionColor3
//         ].filter(Boolean);
//         color = colors[index % colors.length];
//       }
//       plotFunction(ctx, canvas, functionKey, color, scale);
//     });
//   };

//   // Redraw when props change
//   useEffect(() => {
//     draw();
//   }, [functions, xRange, yRange, theme, aspectRatio, xAxisType, showGrid, showAxes, showLabels]);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setTimeout(draw, 100);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [functions, xRange, yRange, theme, aspectRatio, xAxisType, showGrid, showAxes, showLabels]);

//   return (
//     <div ref={containerRef} className={styles.canvasContainer}>
//       <canvas
//         ref={canvasRef}
//         className={styles.canvas}
//         style={{ 
//           border: `2px solid ${currentTheme.inputBorder}`,
//           borderRadius: '8px'
//         }}
//       />
//     </div>
//   );
// };

// export default GraphCore;



import React, { useRef, useEffect } from 'react';
import { functionMap } from './functionMap.js';
import { themes } from './themes.js';
import styles from './FunctionGraphVisualizer.module.css';

const GraphCore = ({
  functions = ['sin'], // Array of function keys
  xRange = [-10, 10],
  yRange = [-10, 10],
  theme = 'minimal',
  aspectRatio = 16/9, // width/height ratio
  xAxisType = 'auto', // 'auto', 'integer', 'pi', 'decimal'
  showGrid = true,
  showAxes = true,
  showLabels = true
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const currentTheme = themes[theme];

  // Determine axis type automatically if set to 'auto'
  const getAxisType = () => {
    if (xAxisType !== 'auto') return xAxisType;
    
    // Auto-detect based on function types
    const functionTypes = functions.map(key => functionMap[key]?.type).filter(Boolean);
    if (functionTypes.includes('trigonometric')) return 'pi';
    return 'integer';
  };

  const actualAxisType = getAxisType();

  // Get responsive dimensions and scaling factors
  const getCanvasDimensions = () => {
    const container = containerRef.current;
    if (!container) return { width: 800, height: 450, scale: 1 };
    
    const containerWidth = container.clientWidth;
    const containerHeight = containerWidth / aspectRatio;
    
    // Scale factor based on container size (baseline: 800px width)
    const scale = Math.max(0.5, Math.min(2, containerWidth / 800));
    
    return { 
      width: containerWidth, 
      height: containerHeight, 
      scale 
    };
  };

  // Convert mathematical coordinates to canvas coordinates
  const mathToCanvas = (mathX, mathY, canvas) => {
    const canvasX = ((mathX - xRange[0]) / (xRange[1] - xRange[0])) * canvas.width;
    const canvasY = ((yRange[1] - mathY) / (yRange[1] - yRange[0])) * canvas.height;
    return { x: canvasX, y: canvasY };
  };

  // Generate axis labels based on type
  const generateXAxisLabels = () => {
    const labels = [];
    const range = xRange[1] - xRange[0];
    
    if (actualAxisType === 'pi') {
      // Generate π-based labels
      const piStart = Math.ceil(xRange[0] / Math.PI);
      const piEnd = Math.floor(xRange[1] / Math.PI);
      
      for (let i = piStart; i <= piEnd; i++) {
        const value = i * Math.PI;
        if (value >= xRange[0] && value <= xRange[1]) {
          let label;
          if (i === 0) label = '0';
          else if (i === 1) label = 'π';
          else if (i === -1) label = '-π';
          else if (i > 0) label = `${i}π`;
          else label = `${i}π`;
          
          labels.push({ value, label });
        }
      }
      
      // Add half-π marks for better resolution
      for (let i = piStart * 2; i <= piEnd * 2; i++) {
        const value = i * Math.PI / 2;
        if (value >= xRange[0] && value <= xRange[1] && i % 2 !== 0) {
          let label;
          if (i === 1) label = 'π/2';
          else if (i === -1) label = '-π/2';
          else if (i > 0) label = `${i}π/2`;
          else label = `${i}π/2`;
          
          labels.push({ value, label, minor: true });
        }
      }
    } else {
      // Generate integer-based labels
      const step = range > 20 ? 5 : range > 10 ? 2 : 1;
      const start = Math.ceil(xRange[0] / step) * step;
      const end = Math.floor(xRange[1] / step) * step;
      
      for (let i = start; i <= end; i += step) {
        if (i >= xRange[0] && i <= xRange[1]) {
          labels.push({ value: i, label: i.toString() });
        }
      }
    }
    
    return labels.sort((a, b) => a.value - b.value);
  };

  const generateYAxisLabels = () => {
    const labels = [];
    const range = yRange[1] - yRange[0];
    const step = range > 20 ? 5 : range > 10 ? 2 : 1;
    const start = Math.ceil(yRange[0] / step) * step;
    const end = Math.floor(yRange[1] / step) * step;
    
    for (let i = start; i <= end; i += step) {
      if (i >= yRange[0] && i <= yRange[1] && i !== 0) {
        labels.push({ value: i, label: i.toString() });
      }
    }
    
    return labels;
  };

  // Draw grid
  const drawGrid = (ctx, canvas, scale) => {
    if (!showGrid) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.strokeStyle = currentTheme.gridColor;
    ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 1 : 0.5) * scale;
    ctx.beginPath();
    
    // Vertical grid lines
    const xLabels = generateXAxisLabels();
    xLabels.forEach(({ value, minor }) => {
      const canvasPos = mathToCanvas(value, 0, canvas);
      if (canvasPos.x >= 0 && canvasPos.x <= width) {
        ctx.globalAlpha = minor ? 0.3 : 0.6;
        ctx.moveTo(canvasPos.x, 0);
        ctx.lineTo(canvasPos.x, height);
      }
    });
    
    // Horizontal grid lines
    const yLabels = generateYAxisLabels();
    yLabels.forEach(({ value }) => {
      const canvasPos = mathToCanvas(0, value, canvas);
      if (canvasPos.y >= 0 && canvasPos.y <= height) {
        ctx.globalAlpha = 0.6;
        ctx.moveTo(0, canvasPos.y);
        ctx.lineTo(width, canvasPos.y);
      }
    });
    
    ctx.globalAlpha = 1;
    ctx.stroke();
  };

  // Draw axes
  const drawAxes = (ctx, canvas, scale) => {
    if (!showAxes) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.strokeStyle = currentTheme.axisColor;
    ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 1.5 : 1) * scale;
    ctx.beginPath();
    
    // X-axis with arrow
    const xAxisY = mathToCanvas(0, 0, canvas).y;
    if (xAxisY >= 0 && xAxisY <= height) {
      ctx.moveTo(0, xAxisY);
      ctx.lineTo(width, xAxisY);
      
      // Right arrow for X-axis
      const arrowSize = 8 * scale;
      ctx.moveTo(width - arrowSize, xAxisY - arrowSize/2);
      ctx.lineTo(width, xAxisY);
      ctx.lineTo(width - arrowSize, xAxisY + arrowSize/2);
    }
    
    // Y-axis with arrow
    const yAxisX = mathToCanvas(0, 0, canvas).x;
    if (yAxisX >= 0 && yAxisX <= width) {
      ctx.moveTo(yAxisX, height);
      ctx.lineTo(yAxisX, 0);
      
      // Up arrow for Y-axis
      const arrowSize = 8 * scale;
      ctx.moveTo(yAxisX - arrowSize/2, arrowSize);
      ctx.lineTo(yAxisX, 0);
      ctx.lineTo(yAxisX + arrowSize/2, arrowSize);
    }
    
    ctx.stroke();
  };

  // Draw axis labels
  const drawLabels = (ctx, canvas, scale) => {
    if (!showLabels) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.fillStyle = currentTheme.textColor;
    ctx.font = `${Math.max(10, 12 * scale)}px Arial`;
    
    const xAxisY = mathToCanvas(0, 0, canvas).y;
    const yAxisX = mathToCanvas(0, 0, canvas).x;
    
    // X-axis labels
    ctx.textAlign = 'center';
    const xLabels = generateXAxisLabels();
    xLabels.forEach(({ value, label, minor }) => {
      if (minor) return; // Skip minor labels for cleaner look
      
      const canvasPos = mathToCanvas(value, 0, canvas);
      if (canvasPos.x >= 20 * scale && canvasPos.x <= width - 20 * scale) {
        const labelY = xAxisY > height - 20 * scale ? height - 5 * scale : xAxisY + 15 * scale;
        // Move zero label to the right by 5px to avoid axis overlap
        const labelX = value === 0 ? canvasPos.x + 5 * scale : canvasPos.x;
        ctx.fillText(label, labelX, labelY);
      }
    });
    
    // Y-axis labels
    ctx.textAlign = 'right';
    const yLabels = generateYAxisLabels();
    yLabels.forEach(({ value, label }) => {
      const canvasPos = mathToCanvas(0, value, canvas);
      if (canvasPos.y >= 15 * scale && canvasPos.y <= height - 15 * scale) {
        const labelX = yAxisX < 30 * scale ? 25 * scale : yAxisX - 8 * scale; // Move labels away from axis
        ctx.fillText(label, labelX, canvasPos.y + 4 * scale);
      }
    });
  };

  // Plot a single function
  const plotFunction = (ctx, canvas, functionKey, colorOverride, scale) => {
    const functionData = functionMap[functionKey];
    if (!functionData) return;
    
    const { func } = functionData;
    const color = colorOverride || functionData.color || currentTheme.functionColor;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = ((theme === 'classic' || theme === 'minimal') ? 2.5 : 2) * scale;
    ctx.beginPath();
    
    let firstPoint = true;
    const step = (xRange[1] - xRange[0]) / (canvas.width * 2); // High resolution
    
    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = func(x);
      
      // Skip invalid points
      if (isNaN(y) || !isFinite(y)) {
        firstPoint = true;
        continue;
      }
      
      // Skip points outside visible range (with buffer)
      const buffer = (yRange[1] - yRange[0]) * 0.1;
      if (y < yRange[0] - buffer || y > yRange[1] + buffer) {
        firstPoint = true;
        continue;
      }
      
      const canvasPos = mathToCanvas(x, y, canvas);
      
      if (firstPoint) {
        ctx.moveTo(canvasPos.x, canvasPos.y);
        firstPoint = false;
      } else {
        ctx.lineTo(canvasPos.x, canvasPos.y);
      }
    }
    
    ctx.stroke();
  };

  // Main drawing function
  const draw = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const { width, height, scale } = getCanvasDimensions();
    
    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = currentTheme.background;
    ctx.fillRect(0, 0, width, height);
    
    // Draw components in order
    drawGrid(ctx, canvas, scale);
    drawAxes(ctx, canvas, scale);
    drawLabels(ctx, canvas, scale);
    
    // Plot all functions
    functions.forEach((functionKey, index) => {
      // Use different colors for multiple functions if not specified
      let color = null;
      if (functions.length > 1) {
        const colors = [
          currentTheme.functionColor,
          currentTheme.functionColor2,
          currentTheme.functionColor3
        ].filter(Boolean);
        color = colors[index % colors.length];
      }
      plotFunction(ctx, canvas, functionKey, color, scale);
    });
  };

  // Redraw when props change
  useEffect(() => {
    draw();
  }, [functions, xRange, yRange, theme, aspectRatio, xAxisType, showGrid, showAxes, showLabels]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setTimeout(draw, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [functions, xRange, yRange, theme, aspectRatio, xAxisType, showGrid, showAxes, showLabels]);

  return (
    <div ref={containerRef} className={styles.canvasContainer}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{ 
          border: `2px solid ${currentTheme.inputBorder}`,
          borderRadius: '8px'
        }}
      />
    </div>
  );
};

export default GraphCore;