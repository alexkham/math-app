// 'use client';

// import { useState, useRef, useEffect } from 'react';

// export default function InteractiveScreenshotWrapper({ children }) {
//   const [elements, setElements] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [mode, setMode] = useState('manual');
//   const [customFilename, setCustomFilename] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [status, setStatus] = useState('');
  
//   // Screenshot frame state
//   const [frameVisible, setFrameVisible] = useState(true);
//   const [framePosition, setFramePosition] = useState({ x: 50, y: 100 });
//   const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [isResizing, setIsResizing] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
//   // Control panel state
//   const [panelFolded, setPanelFolded] = useState(false);
//   const [panelPosition, setPanelPosition] = useState({ x: window.innerWidth - 420, y: 20 });
//   const [isPanelDragging, setIsPanelDragging] = useState(false);
//   const [panelDragStart, setPanelDragStart] = useState({ x: 0, y: 0 });
  
//   const containerRef = useRef(null);
//   const frameRef = useRef(null);
//   const currentHighlightedElement = useRef(null);

//   // Scan for all interactive elements
//   useEffect(() => {
//     if (containerRef.current) {
//       const interactiveElements = containerRef.current.querySelectorAll(
//         'input, select, textarea, button, a[href]'
//       );
      
//       const elementData = Array.from(interactiveElements).map((el, index) => {
//         return {
//           index,
//           element: el,
//           type: el.tagName.toLowerCase(),
//           inputType: el.type || '',
//           id: el.id || '',
//           name: el.name || '',
//           className: el.className || '',
//           text: el.textContent?.trim().substring(0, 30) || '',
//           placeholder: el.placeholder || ''
//         };
//       });
      
//       setElements(elementData);
//       setStatus(`Found ${elementData.length} interactive elements`);
//     }
//   }, [children]);

//   // Handle frame and panel dragging
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (isDragging) {
//         setFramePosition({
//           x: e.clientX - dragStart.x,
//           y: e.clientY - dragStart.y
//         });
//       }
//       if (isResizing) {
//         const deltaX = e.clientX - dragStart.x;
//         const deltaY = e.clientY - dragStart.y;
//         setFrameSize(prev => ({
//           width: Math.max(200, prev.width + deltaX),
//           height: Math.max(150, prev.height + deltaY)
//         }));
//         setDragStart({ x: e.clientX, y: e.clientY });
//       }
//       if (isPanelDragging) {
//         setPanelPosition({
//           x: e.clientX - panelDragStart.x,
//           y: e.clientY - panelDragStart.y
//         });
//       }
//     };

//     const handleMouseUp = () => {
//       setIsDragging(false);
//       setIsResizing(false);
//       setIsPanelDragging(false);
//     };

//     if (isDragging || isResizing || isPanelDragging) {
//       document.addEventListener('mousemove', handleMouseMove);
//       document.addEventListener('mouseup', handleMouseUp);
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//         document.removeEventListener('mouseup', handleMouseUp);
//       };
//     }
//   }, [isDragging, isResizing, isPanelDragging, dragStart, panelDragStart]);

//   const getElementLabel = (elementData) => {
//     const parts = [];
//     parts.push(`[${elementData.type}]`);
//     if (elementData.inputType) parts.push(`type="${elementData.inputType}"`);
//     if (elementData.id) parts.push(`#${elementData.id}`);
//     if (elementData.name) parts.push(`name="${elementData.name}"`);
//     if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
//     if (elementData.text) parts.push(`"${elementData.text}"`);
//     return parts.join(' ');
//   };

//   const clearHighlight = () => {
//     if (currentHighlightedElement.current) {
//       currentHighlightedElement.current.style.outline = '';
//       currentHighlightedElement.current.style.outlineOffset = '';
//       currentHighlightedElement.current = null;
//     }
//   };

//   const highlightElement = (elementData) => {
//     clearHighlight();
//     const element = elementData.element;
//     element.style.outline = '5px solid red';
//     element.style.outlineOffset = '2px';
//     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     currentHighlightedElement.current = element;
//   };

//   // Interact with element based on its type
//   const interactWithElement = async (elementData) => {
//     const element = elementData.element;
//     const type = elementData.type;
//     const inputType = elementData.inputType;
    
//     try {
//       if (type === 'button') {
//         element.click();
//         setStatus(`Clicked button: ${elementData.text || elementData.id}`);
//       } else if (type === 'a') {
//         element.click();
//         setStatus(`Clicked link: ${elementData.text || elementData.id}`);
//       } else if (type === 'input') {
//         if (inputType === 'checkbox' || inputType === 'radio') {
//           element.checked = !element.checked;
//           element.dispatchEvent(new Event('change', { bubbles: true }));
//           setStatus(`Toggled ${inputType}: ${elementData.id || elementData.name}`);
//         } else if (inputType === 'number') {
//           element.value = '10';
//           element.dispatchEvent(new Event('input', { bubbles: true }));
//           element.dispatchEvent(new Event('change', { bubbles: true }));
//           setStatus(`Filled number input: ${elementData.id || elementData.name}`);
//         } else {
//           element.value = 'test value';
//           element.dispatchEvent(new Event('input', { bubbles: true }));
//           element.dispatchEvent(new Event('change', { bubbles: true }));
//           setStatus(`Filled input: ${elementData.id || elementData.name}`);
//         }
//       } else if (type === 'select') {
//         if (element.options && element.options.length > 0) {
//           element.selectedIndex = 1;
//           element.dispatchEvent(new Event('change', { bubbles: true }));
//           setStatus(`Selected option in: ${elementData.id || elementData.name}`);
//         }
//       } else if (type === 'textarea') {
//         element.value = 'test content';
//         element.dispatchEvent(new Event('input', { bubbles: true }));
//         element.dispatchEvent(new Event('change', { bubbles: true }));
//         setStatus(`Filled textarea: ${elementData.id || elementData.name}`);
//       }
      
//       // Wait for React to update
//       await new Promise(resolve => setTimeout(resolve, 500));
//       return true;
//     } catch (error) {
//       setStatus(`Error interacting: ${error.message}`);
//       return false;
//     }
//   };

//   const takeScreenshot = async (filename) => {
//     try {
//       setStatus('Capturing screenshot...');
      
//       const domtoimage = (await import('dom-to-image-more')).default;
      
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       if (!frameRef.current) {
//         throw new Error('Screenshot frame not found');
//       }

//       const rect = frameRef.current.getBoundingClientRect();
      
//       const captureArea = document.createElement('div');
//       captureArea.style.position = 'absolute';
//       captureArea.style.left = rect.left + window.scrollX + 'px';
//       captureArea.style.top = rect.top + window.scrollY + 'px';
//       captureArea.style.width = frameSize.width + 'px';
//       captureArea.style.height = frameSize.height + 'px';
//       captureArea.style.overflow = 'hidden';
//       captureArea.style.pointerEvents = 'none';
      
//       const contentClone = containerRef.current.cloneNode(true);
//       captureArea.appendChild(contentClone);
//       document.body.appendChild(captureArea);
      
//       const dataUrl = await domtoimage.toPng(captureArea, {
//         quality: 1,
//         bgcolor: '#ffffff',
//         width: frameSize.width,
//         height: frameSize.height
//       });
      
//       document.body.removeChild(captureArea);
      
//       if (!dataUrl) {
//         throw new Error('Failed to generate screenshot');
//       }
      
//       const link = document.createElement('a');
//       link.download = `${filename}.png`;
//       link.href = dataUrl;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       setStatus(`Screenshot saved: ${filename}.png`);
      
//     } catch (error) {
//       setStatus(`Error: ${error.message}`);
//       console.error('Screenshot error:', error);
//     }
//   };

//   const handleManualInteractAndScreenshot = async () => {
//     if (selectedIndex === null) {
//       setStatus('Please select an element first');
//       return;
//     }
//     if (!customFilename.trim()) {
//       setStatus('Please enter a filename');
//       return;
//     }
    
//     const elementData = elements[selectedIndex];
//     highlightElement(elementData);
//     await interactWithElement(elementData);
//     await takeScreenshot(customFilename);
//     clearHighlight();
//   };

//   const handleAutoProcessAll = async () => {
//     if (elements.length === 0) {
//       setStatus('No elements found');
//       return;
//     }
    
//     setIsProcessing(true);
    
//     for (let i = 0; i < elements.length; i++) {
//       const elementData = elements[i];
//       setStatus(`Processing ${i + 1}/${elements.length}...`);
      
//       highlightElement(elementData);
//       await interactWithElement(elementData);
//       await takeScreenshot(`element_${i}`);
      
//       // Wait before next
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Reload page to reset state
//       window.location.reload();
//       break; // Will continue after reload
//     }
    
//     clearHighlight();
//     setIsProcessing(false);
//     setStatus(`Completed! Processed ${elements.length} elements`);
//   };

//   const handleElementSelect = (index) => {
//     setSelectedIndex(index);
//     if (index !== null) {
//       highlightElement(elements[index]);
//       const elementData = elements[index];
//       const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
//       setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
//     } else {
//       clearHighlight();
//     }
//   };

//   const startDragging = (e) => {
//     if (e.target.classList.contains('resize-handle')) return;
//     setIsDragging(true);
//     setDragStart({
//       x: e.clientX - framePosition.x,
//       y: e.clientY - framePosition.y
//     });
//   };

//   const startResizing = (e) => {
//     e.stopPropagation();
//     setIsResizing(true);
//     setDragStart({ x: e.clientX, y: e.clientY });
//   };

//   const startPanelDragging = (e) => {
//     setIsPanelDragging(true);
//     setPanelDragStart({
//       x: e.clientX - panelPosition.x,
//       y: e.clientY - panelPosition.y
//     });
//   };

//   return (
//     <div>
//       {/* Control Panel */}
//       <div style={{
//         position: 'fixed',
//         left: panelPosition.x + 'px',
//         top: panelPosition.y + 'px',
//         width: '400px',
//         maxHeight: panelFolded ? 'auto' : '80vh',
//         overflowY: panelFolded ? 'visible' : 'auto',
//         background: 'white',
//         border: '2px solid #333',
//         borderRadius: '8px',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//         zIndex: 10000,
//         fontFamily: 'Arial, sans-serif'
//       }}>
//         <div
//           onMouseDown={startPanelDragging}
//           style={{
//             padding: '15px 20px',
//             background: '#007bff',
//             color: 'white',
//             borderRadius: '6px 6px 0 0',
//             cursor: isPanelDragging ? 'grabbing' : 'grab',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             userSelect: 'none'
//           }}
//         >
//           <h3 style={{ margin: 0, fontSize: '18px' }}>🎯 Interactive Screenshot Tool</h3>
//           <button
//             onClick={() => setPanelFolded(!panelFolded)}
//             style={{
//               background: 'rgba(255,255,255,0.2)',
//               border: 'none',
//               color: 'white',
//               padding: '5px 10px',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontSize: '16px',
//               fontWeight: 'bold'
//             }}
//           >
//             {panelFolded ? '▼' : '▲'}
//           </button>
//         </div>
        
//         {!panelFolded && (
//           <div style={{ padding: '20px' }}>
//             <div style={{
//               padding: '10px',
//               background: '#f0f0f0',
//               borderRadius: '4px',
//               marginBottom: '15px',
//               fontSize: '13px'
//             }}>
//               {status || 'Ready'}
//             </div>

//             {/* Frame Controls */}
//             <div style={{ marginBottom: '15px', padding: '15px', background: '#e8f4f8', borderRadius: '4px' }}>
//               <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Screenshot Frame</h4>
//               <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                 <button
//                   onClick={() => setFrameVisible(!frameVisible)}
//                   style={{
//                     flex: 1,
//                     padding: '8px',
//                     background: frameVisible ? '#28a745' : '#dc3545',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                     fontSize: '12px'
//                   }}
//                 >
//                   {frameVisible ? '👁️ Hide Frame' : '👁️ Show Frame'}
//                 </button>
//               </div>
              
//               <div style={{ marginBottom: '10px' }}>
//                 <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Frame Size:
//                 </label>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <div style={{ flex: 1 }}>
//                     <label style={{ fontSize: '11px', color: '#555' }}>Width (px):</label>
//                     <input
//                       type="number"
//                       value={Math.round(frameSize.width)}
//                       onChange={(e) => setFrameSize(prev => ({ ...prev, width: parseInt(e.target.value) || 200 }))}
//                       min="200"
//                       style={{
//                         width: '100%',
//                         padding: '6px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <label style={{ fontSize: '11px', color: '#555' }}>Height (px):</label>
//                     <input
//                       type="number"
//                       value={Math.round(frameSize.height)}
//                       onChange={(e) => setFrameSize(prev => ({ ...prev, height: parseInt(e.target.value) || 150 }))}
//                       min="150"
//                       style={{
//                         width: '100%',
//                         padding: '6px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div style={{ marginBottom: '10px' }}>
//                 <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>
//                   Frame Position:
//                 </label>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <div style={{ flex: 1 }}>
//                     <label style={{ fontSize: '11px', color: '#555' }}>X (px):</label>
//                     <input
//                       type="number"
//                       value={Math.round(framePosition.x)}
//                       onChange={(e) => setFramePosition(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
//                       style={{
//                         width: '100%',
//                         padding: '6px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                   <div style={{ flex: 1 }}>
//                     <label style={{ fontSize: '11px', color: '#555' }}>Y (px):</label>
//                     <input
//                       type="number"
//                       value={Math.round(framePosition.y)}
//                       onChange={(e) => setFramePosition(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
//                       style={{
//                         width: '100%',
//                         padding: '6px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         fontSize: '12px',
//                         boxSizing: 'border-box'
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div style={{ fontSize: '11px', color: '#555', fontStyle: 'italic', marginTop: '8px' }}>
//                 💡 Drag frame to move, resize from corner, or type values above
//               </div>
//             </div>
            
//             {/* Mode Toggle */}
//             <div style={{ marginBottom: '15px' }}>
//               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mode:</label>
//               <div style={{ display: 'flex', gap: '10px' }}>
//                 <button
//                   onClick={() => setMode('manual')}
//                   style={{
//                     flex: 1,
//                     padding: '10px',
//                     background: mode === 'manual' ? '#007bff' : '#e0e0e0',
//                     color: mode === 'manual' ? 'white' : '#333',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                     fontWeight: mode === 'manual' ? 'bold' : 'normal'
//                   }}
//                 >
//                   Manual
//                 </button>
//                 <button
//                   onClick={() => setMode('auto')}
//                   style={{
//                     flex: 1,
//                     padding: '10px',
//                     background: mode === 'auto' ? '#007bff' : '#e0e0e0',
//                     color: mode === 'auto' ? 'white' : '#333',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                     fontWeight: mode === 'auto' ? 'bold' : 'normal'
//                   }}
//                 >
//                   Auto
//                 </button>
//               </div>
//             </div>
            
//             {mode === 'manual' && (
//               <>
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
//                     Select Element ({elements.length} found):
//                   </label>
//                   <select
//                     value={selectedIndex === null ? '' : selectedIndex}
//                     onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
//                     style={{
//                       width: '100%',
//                       padding: '8px',
//                       borderRadius: '4px',
//                       border: '1px solid #ccc',
//                       fontSize: '12px'
//                     }}
//                   >
//                     <option value="">-- Select an element --</option>
//                     {elements.map((el) => (
//                       <option key={el.index} value={el.index}>
//                         {el.index}: {getElementLabel(el)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div style={{ marginBottom: '15px' }}>
//                   <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Filename:</label>
//                   <input
//                     type="text"
//                     value={customFilename}
//                     onChange={(e) => setCustomFilename(e.target.value)}
//                     placeholder="Enter filename"
//                     style={{
//                       width: '100%',
//                       padding: '8px',
//                       borderRadius: '4px',
//                       border: '1px solid #ccc',
//                       fontSize: '13px',
//                       boxSizing: 'border-box'
//                     }}
//                   />
//                 </div>
                
//                 <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                   <button
//                     onClick={handleManualInteractAndScreenshot}
//                     disabled={selectedIndex === null || !customFilename.trim()}
//                     style={{
//                       flex: 1,
//                       padding: '12px',
//                       background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
//                       fontWeight: 'bold'
//                     }}
//                   >
//                     🎯 Interact & Screenshot
//                   </button>
//                 </div>
                
//                 <button
//                   onClick={clearHighlight}
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     background: '#6c757d',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Clear Highlight
//                 </button>
//               </>
//             )}
            
//             {mode === 'auto' && (
//               <>
//                 <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
//                   <p style={{ margin: 0, fontSize: '13px' }}>
//                     <strong>Auto mode</strong> will automatically:
//                     <br />• Interact with each element (click/fill/select)
//                     <br />• Take a screenshot
//                     <br />• Save as element_0.png, element_1.png, etc.
//                     <br />• Process all {elements.length} elements
//                     <br />⚠️ Page will reload between elements to reset state
//                   </p>
//                 </div>
                
//                 <button
//                   onClick={handleAutoProcessAll}
//                   disabled={isProcessing || elements.length === 0}
//                   style={{
//                     width: '100%',
//                     padding: '15px',
//                     background: isProcessing ? '#ccc' : '#28a745',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: isProcessing ? 'not-allowed' : 'pointer',
//                     fontWeight: 'bold',
//                     fontSize: '14px'
//                   }}
//                 >
//                   {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>
      
//       {/* Screenshot Frame */}
//       {frameVisible && (
//         <div
//           ref={frameRef}
//           style={{
//             position: 'fixed',
//             left: framePosition.x + 'px',
//             top: framePosition.y + 'px',
//             width: frameSize.width + 'px',
//             height: frameSize.height + 'px',
//             border: '3px dashed #007bff',
//             background: 'rgba(0, 123, 255, 0.05)',
//             zIndex: 9998,
//             cursor: isDragging ? 'grabbing' : 'grab',
//             boxShadow: '0 0 10px rgba(0,123,255,0.3)',
//             pointerEvents: 'auto'
//           }}
//           onMouseDown={startDragging}
//         >
//           <div style={{
//             position: 'absolute',
//             top: '-30px',
//             left: '0',
//             background: '#007bff',
//             color: 'white',
//             padding: '5px 10px',
//             fontSize: '12px',
//             fontWeight: 'bold',
//             borderRadius: '4px 4px 0 0',
//             pointerEvents: 'none'
//           }}>
//             📸 Screenshot Area ({Math.round(frameSize.width)}×{Math.round(frameSize.height)})
//           </div>
          
//           <div
//             className="resize-handle"
//             onMouseDown={startResizing}
//             style={{
//               position: 'absolute',
//               right: '0',
//               bottom: '0',
//               width: '20px',
//               height: '20px',
//               background: '#007bff',
//               cursor: 'nwse-resize',
//               borderRadius: '0 0 4px 0'
//             }}
//           />
//         </div>
//       )}
      
//       {/* Wrapped Content */}
//       <div ref={containerRef}>
//         {children}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useRef, useEffect } from 'react';

export default function InteractiveScreenshotWrapper({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mode, setMode] = useState('manual');
  const [customFilename, setCustomFilename] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');
  
  // Screenshot frame state
  const [frameVisible, setFrameVisible] = useState(true);
  const [framePosition, setFramePosition] = useState({ x: 50, y: 100 });
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // Control panel state
  const [panelFolded, setPanelFolded] = useState(false);
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 20 });
  const [isPanelDragging, setIsPanelDragging] = useState(false);
  const [panelDragStart, setPanelDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const currentHighlightedElement = useRef(null);

  // Set panel position after mount
  useEffect(() => {
    setPanelPosition({ x: window.innerWidth - 420, y: 20 });
  }, []);

  // Scan for all interactive elements
  useEffect(() => {
    if (containerRef.current) {
      const interactiveElements = containerRef.current.querySelectorAll(
        'input, select, textarea, button, a[href]'
      );
      
      const elementData = Array.from(interactiveElements).map((el, index) => {
        return {
          index,
          element: el,
          type: el.tagName.toLowerCase(),
          inputType: el.type || '',
          id: el.id || '',
          name: el.name || '',
          className: el.className || '',
          text: el.textContent?.trim().substring(0, 30) || '',
          placeholder: el.placeholder || ''
        };
      });
      
      setElements(elementData);
      setStatus(`Found ${elementData.length} interactive elements`);
    }
  }, [children]);

  // Handle frame and panel dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setFramePosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
      if (isResizing) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        setFrameSize(prev => ({
          width: Math.max(200, prev.width + deltaX),
          height: Math.max(150, prev.height + deltaY)
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      }
      if (isPanelDragging) {
        setPanelPosition({
          x: e.clientX - panelDragStart.x,
          y: e.clientY - panelDragStart.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setIsPanelDragging(false);
    };

    if (isDragging || isResizing || isPanelDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, isPanelDragging, dragStart, panelDragStart]);

  const getElementLabel = (elementData) => {
    const parts = [];
    parts.push(`[${elementData.type}]`);
    if (elementData.inputType) parts.push(`type="${elementData.inputType}"`);
    if (elementData.id) parts.push(`#${elementData.id}`);
    if (elementData.name) parts.push(`name="${elementData.name}"`);
    if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
    if (elementData.text) parts.push(`"${elementData.text}"`);
    return parts.join(' ');
  };

  const clearHighlight = () => {
    if (currentHighlightedElement.current) {
      currentHighlightedElement.current.style.outline = '';
      currentHighlightedElement.current.style.outlineOffset = '';
      currentHighlightedElement.current = null;
    }
  };

  const highlightElement = (elementData) => {
    clearHighlight();
    const element = elementData.element;
    element.style.outline = '5px solid red';
    element.style.outlineOffset = '2px';
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    currentHighlightedElement.current = element;
  };

  // Interact with element based on its type
  const interactWithElement = async (elementData) => {
    const element = elementData.element;
    const type = elementData.type;
    const inputType = elementData.inputType;
    
    try {
      if (type === 'button') {
        element.click();
        setStatus(`Clicked button: ${elementData.text || elementData.id}`);
      } else if (type === 'a') {
        element.click();
        setStatus(`Clicked link: ${elementData.text || elementData.id}`);
      } else if (type === 'input') {
        if (inputType === 'checkbox' || inputType === 'radio') {
          element.checked = !element.checked;
          element.dispatchEvent(new Event('change', { bubbles: true }));
          setStatus(`Toggled ${inputType}: ${elementData.id || elementData.name}`);
        } else if (inputType === 'number') {
          element.value = '10';
          element.dispatchEvent(new Event('input', { bubbles: true }));
          element.dispatchEvent(new Event('change', { bubbles: true }));
          setStatus(`Filled number input: ${elementData.id || elementData.name}`);
        } else {
          element.value = 'test value';
          element.dispatchEvent(new Event('input', { bubbles: true }));
          element.dispatchEvent(new Event('change', { bubbles: true }));
          setStatus(`Filled input: ${elementData.id || elementData.name}`);
        }
      } else if (type === 'select') {
        if (element.options && element.options.length > 0) {
          element.selectedIndex = 1;
          element.dispatchEvent(new Event('change', { bubbles: true }));
          setStatus(`Selected option in: ${elementData.id || elementData.name}`);
        }
      } else if (type === 'textarea') {
        element.value = 'test content';
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        setStatus(`Filled textarea: ${elementData.id || elementData.name}`);
      }
      
      // Wait for React to update
      await new Promise(resolve => setTimeout(resolve, 500));
      return true;
    } catch (error) {
      setStatus(`Error interacting: ${error.message}`);
      return false;
    }
  };

  const takeScreenshot = async (filename) => {
    try {
      setStatus('Capturing screenshot...');
      
      const domtoimage = (await import('dom-to-image-more')).default;
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (!frameRef.current) {
        throw new Error('Screenshot frame not found');
      }

      const rect = frameRef.current.getBoundingClientRect();
      
      const captureArea = document.createElement('div');
      captureArea.style.position = 'absolute';
      captureArea.style.left = rect.left + window.scrollX + 'px';
      captureArea.style.top = rect.top + window.scrollY + 'px';
      captureArea.style.width = frameSize.width + 'px';
      captureArea.style.height = frameSize.height + 'px';
      captureArea.style.overflow = 'hidden';
      captureArea.style.pointerEvents = 'none';
      
      const contentClone = containerRef.current.cloneNode(true);
      captureArea.appendChild(contentClone);
      document.body.appendChild(captureArea);
      
      const dataUrl = await domtoimage.toPng(captureArea, {
        quality: 1,
        bgcolor: '#ffffff',
        width: frameSize.width,
        height: frameSize.height
      });
      
      document.body.removeChild(captureArea);
      
      if (!dataUrl) {
        throw new Error('Failed to generate screenshot');
      }
      
      const link = document.createElement('a');
      link.download = `${filename}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus(`Screenshot saved: ${filename}.png`);
      
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error('Screenshot error:', error);
    }
  };

  const handleManualInteractAndScreenshot = async () => {
    if (selectedIndex === null) {
      setStatus('Please select an element first');
      return;
    }
    if (!customFilename.trim()) {
      setStatus('Please enter a filename');
      return;
    }
    
    const elementData = elements[selectedIndex];
    highlightElement(elementData);
    await interactWithElement(elementData);
    await takeScreenshot(customFilename);
    clearHighlight();
  };

  const handleAutoProcessAll = async () => {
    if (elements.length === 0) {
      setStatus('No elements found');
      return;
    }
    
    setIsProcessing(true);
    
    for (let i = 0; i < elements.length; i++) {
      const elementData = elements[i];
      setStatus(`Processing ${i + 1}/${elements.length}...`);
      
      highlightElement(elementData);
      await interactWithElement(elementData);
      await takeScreenshot(`element_${i}`);
      
      // Wait before next
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reload page to reset state
      window.location.reload();
      break; // Will continue after reload
    }
    
    clearHighlight();
    setIsProcessing(false);
    setStatus(`Completed! Processed ${elements.length} elements`);
  };

  const handleElementSelect = (index) => {
    setSelectedIndex(index);
    if (index !== null) {
      highlightElement(elements[index]);
      const elementData = elements[index];
      const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
      setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
    } else {
      clearHighlight();
    }
  };

  const startDragging = (e) => {
    if (e.target.classList.contains('resize-handle')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - framePosition.x,
      y: e.clientY - framePosition.y
    });
  };

  const startResizing = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const startPanelDragging = (e) => {
    setIsPanelDragging(true);
    setPanelDragStart({
      x: e.clientX - panelPosition.x,
      y: e.clientY - panelPosition.y
    });
  };

  return (
    <div>
      {/* Control Panel */}
      <div style={{
        position: 'fixed',
        left: panelPosition.x + 'px',
        top: panelPosition.y + 'px',
        width: '400px',
        maxHeight: panelFolded ? 'auto' : '80vh',
        overflowY: panelFolded ? 'visible' : 'auto',
        background: 'white',
        border: '2px solid #333',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 10000,
        fontFamily: 'Arial, sans-serif'
      }}>
        <div
          onMouseDown={startPanelDragging}
          style={{
            padding: '15px 20px',
            background: '#007bff',
            color: 'white',
            borderRadius: '6px 6px 0 0',
            cursor: isPanelDragging ? 'grabbing' : 'grab',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            userSelect: 'none'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '18px' }}>🎯 Interactive Screenshot Tool</h3>
          <button
            onClick={() => setPanelFolded(!panelFolded)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {panelFolded ? '▼' : '▲'}
          </button>
        </div>
        
        {!panelFolded && (
          <div style={{ padding: '20px' }}>
            <div style={{
              padding: '10px',
              background: '#f0f0f0',
              borderRadius: '4px',
              marginBottom: '15px',
              fontSize: '13px'
            }}>
              {status || 'Ready'}
            </div>

            {/* Frame Controls */}
            <div style={{ marginBottom: '15px', padding: '15px', background: '#e8f4f8', borderRadius: '4px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Screenshot Frame</h4>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <button
                  onClick={() => setFrameVisible(!frameVisible)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    background: frameVisible ? '#28a745' : '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  {frameVisible ? '👁️ Hide Frame' : '👁️ Show Frame'}
                </button>
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>
                  Frame Size:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#555' }}>Width (px):</label>
                    <input
                      type="number"
                      value={Math.round(frameSize.width)}
                      onChange={(e) => setFrameSize(prev => ({ ...prev, width: parseInt(e.target.value) || 200 }))}
                      min="200"
                      style={{
                        width: '100%',
                        padding: '6px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '12px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#555' }}>Height (px):</label>
                    <input
                      type="number"
                      value={Math.round(frameSize.height)}
                      onChange={(e) => setFrameSize(prev => ({ ...prev, height: parseInt(e.target.value) || 150 }))}
                      min="150"
                      style={{
                        width: '100%',
                        padding: '6px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '12px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>
                  Frame Position:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#555' }}>X (px):</label>
                    <input
                      type="number"
                      value={Math.round(framePosition.x)}
                      onChange={(e) => setFramePosition(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
                      style={{
                        width: '100%',
                        padding: '6px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '12px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: '11px', color: '#555' }}>Y (px):</label>
                    <input
                      type="number"
                      value={Math.round(framePosition.y)}
                      onChange={(e) => setFramePosition(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
                      style={{
                        width: '100%',
                        padding: '6px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '12px',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div style={{ fontSize: '11px', color: '#555', fontStyle: 'italic', marginTop: '8px' }}>
                💡 Drag frame to move, resize from corner, or type values above
              </div>
            </div>
            
            {/* Mode Toggle */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mode:</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setMode('manual')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    background: mode === 'manual' ? '#007bff' : '#e0e0e0',
                    color: mode === 'manual' ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: mode === 'manual' ? 'bold' : 'normal'
                  }}
                >
                  Manual
                </button>
                <button
                  onClick={() => setMode('auto')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    background: mode === 'auto' ? '#007bff' : '#e0e0e0',
                    color: mode === 'auto' ? 'white' : '#333',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: mode === 'auto' ? 'bold' : 'normal'
                  }}
                >
                  Auto
                </button>
              </div>
            </div>
            
            {mode === 'manual' && (
              <>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Select Element ({elements.length} found):
                  </label>
                  <select
                    value={selectedIndex === null ? '' : selectedIndex}
                    onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontSize: '12px'
                    }}
                  >
                    <option value="">-- Select an element --</option>
                    {elements.map((el) => (
                      <option key={el.index} value={el.index}>
                        {el.index}: {getElementLabel(el)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Filename:</label>
                  <input
                    type="text"
                    value={customFilename}
                    onChange={(e) => setCustomFilename(e.target.value)}
                    placeholder="Enter filename"
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontSize: '13px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <button
                    onClick={handleManualInteractAndScreenshot}
                    disabled={selectedIndex === null || !customFilename.trim()}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
                      fontWeight: 'bold'
                    }}
                  >
                    🎯 Interact & Screenshot
                  </button>
                </div>
                
                <button
                  onClick={clearHighlight}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Clear Highlight
                </button>
              </>
            )}
            
            {mode === 'auto' && (
              <>
                <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
                  <p style={{ margin: 0, fontSize: '13px' }}>
                    <strong>Auto mode</strong> will automatically:
                    <br />• Interact with each element (click/fill/select)
                    <br />• Take a screenshot
                    <br />• Save as element_0.png, element_1.png, etc.
                    <br />• Process all {elements.length} elements
                    <br />⚠️ Page will reload between elements to reset state
                  </p>
                </div>
                
                <button
                  onClick={handleAutoProcessAll}
                  disabled={isProcessing || elements.length === 0}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: isProcessing ? '#ccc' : '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
                </button>
              </>
            )}
          </div>
        )}
      </div>
      
      {/* Screenshot Frame */}
      {frameVisible && (
        <div
          ref={frameRef}
          style={{
            position: 'fixed',
            left: framePosition.x + 'px',
            top: framePosition.y + 'px',
            width: frameSize.width + 'px',
            height: frameSize.height + 'px',
            border: '3px dashed #007bff',
            background: 'rgba(0, 123, 255, 0.05)',
            zIndex: 9998,
            cursor: isDragging ? 'grabbing' : 'grab',
            boxShadow: '0 0 10px rgba(0,123,255,0.3)',
            pointerEvents: 'auto'
          }}
          onMouseDown={startDragging}
        >
          <div style={{
            position: 'absolute',
            top: '-30px',
            left: '0',
            background: '#007bff',
            color: 'white',
            padding: '5px 10px',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '4px 4px 0 0',
            pointerEvents: 'none'
          }}>
            📸 Screenshot Area ({Math.round(frameSize.width)}×{Math.round(frameSize.height)})
          </div>
          
          <div
            className="resize-handle"
            onMouseDown={startResizing}
            style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              width: '20px',
              height: '20px',
              background: '#007bff',
              cursor: 'nwse-resize',
              borderRadius: '0 0 4px 0'
            }}
          />
        </div>
      )}
      
      {/* Wrapped Content */}
      <div ref={containerRef}>
        {children}
      </div>
    </div>
  );
}