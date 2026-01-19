// // // // import { useState, useRef, useEffect } from 'react';
// // // // import html2canvas from 'html2canvas';

// // // // export default function ScreenshotWrapper({ children }) {
// // // //   const [elements, setElements] = useState([]);
// // // //   const [selectedIndex, setSelectedIndex] = useState(null);
// // // //   const [mode, setMode] = useState('manual'); // 'manual' or 'auto'
// // // //   const [customFilename, setCustomFilename] = useState('');
// // // //   const [isProcessing, setIsProcessing] = useState(false);
// // // //   const [status, setStatus] = useState('');
// // // //   const containerRef = useRef(null);
// // // //   const currentHighlightedElement = useRef(null);

// // // //   // Scan for all interactive elements when component mounts or children change
// // // //   useEffect(() => {
// // // //     if (containerRef.current) {
// // // //       const interactiveElements = containerRef.current.querySelectorAll(
// // // //         'input, select, textarea, button, a[href]'
// // // //       );
      
// // // //       const elementData = Array.from(interactiveElements).map((el, index) => {
// // // //         return {
// // // //           index,
// // // //           element: el,
// // // //           type: el.tagName.toLowerCase(),
// // // //           id: el.id || '',
// // // //           name: el.name || '',
// // // //           className: el.className || '',
// // // //           text: el.textContent?.trim().substring(0, 30) || '',
// // // //           placeholder: el.placeholder || ''
// // // //         };
// // // //       });
      
// // // //       setElements(elementData);
// // // //       setStatus(`Found ${elementData.length} interactive elements`);
// // // //     }
// // // //   }, [children]);

// // // //   // Get a descriptive label for each element
// // // //   const getElementLabel = (elementData) => {
// // // //     const parts = [];
// // // //     parts.push(`[${elementData.type}]`);
    
// // // //     if (elementData.id) parts.push(`#${elementData.id}`);
// // // //     if (elementData.name) parts.push(`name="${elementData.name}"`);
// // // //     if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
// // // //     if (elementData.text) parts.push(`"${elementData.text}"`);
// // // //     if (elementData.className) parts.push(`.${elementData.className.split(' ')[0]}`);
    
// // // //     return parts.join(' ');
// // // //   };

// // // //   // Clear any existing highlights
// // // //   const clearHighlight = () => {
// // // //     if (currentHighlightedElement.current) {
// // // //       currentHighlightedElement.current.style.outline = '';
// // // //       currentHighlightedElement.current.style.outlineOffset = '';
// // // //       currentHighlightedElement.current = null;
// // // //     }
// // // //   };

// // // //   // Highlight a specific element
// // // //   const highlightElement = (elementData) => {
// // // //     clearHighlight();
    
// // // //     const element = elementData.element;
// // // //     element.style.outline = '5px solid red';
// // // //     element.style.outlineOffset = '2px';
// // // //     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
// // // //     currentHighlightedElement.current = element;
// // // //   };

// // // //   // Take screenshot of entire page
// // // //   const takeScreenshot = async (filename) => {
// // // //     try {
// // // //       setStatus('Capturing screenshot...');
      
// // // //       // Wait a moment for highlight to be visible
// // // //       await new Promise(resolve => setTimeout(resolve, 300));
      
// // // //       const canvas = await html2canvas(document.body, {
// // // //         allowTaint: true,
// // // //         useCORS: true,
// // // //         scrollY: -window.scrollY,
// // // //         scrollX: -window.scrollX,
// // // //         windowWidth: document.documentElement.scrollWidth,
// // // //         windowHeight: document.documentElement.scrollHeight
// // // //       });
      
// // // //       // Convert to blob and download
// // // //       canvas.toBlob((blob) => {
// // // //         const url = URL.createObjectURL(blob);
// // // //         const link = document.createElement('a');
// // // //         link.download = `${filename}.png`;
// // // //         link.href = url;
// // // //         link.click();
// // // //         URL.revokeObjectURL(url);
        
// // // //         setStatus(`Screenshot saved: ${filename}.png`);
// // // //       });
      
// // // //     } catch (error) {
// // // //       setStatus(`Error: ${error.message}`);
// // // //       console.error('Screenshot error:', error);
// // // //     }
// // // //   };

// // // //   // Manual mode: Highlight and screenshot selected element
// // // //   const handleManualScreenshot = async () => {
// // // //     if (selectedIndex === null) {
// // // //       setStatus('Please select an element first');
// // // //       return;
// // // //     }
    
// // // //     if (!customFilename.trim()) {
// // // //       setStatus('Please enter a filename');
// // // //       return;
// // // //     }
    
// // // //     const elementData = elements[selectedIndex];
// // // //     highlightElement(elementData);
// // // //     await takeScreenshot(customFilename);
// // // //     clearHighlight();
// // // //   };

// // // //   // Auto mode: Process all elements automatically
// // // //   const handleAutoProcessAll = async () => {
// // // //     if (elements.length === 0) {
// // // //       setStatus('No elements found');
// // // //       return;
// // // //     }
    
// // // //     setIsProcessing(true);
    
// // // //     for (let i = 0; i < elements.length; i++) {
// // // //       const elementData = elements[i];
// // // //       setStatus(`Processing ${i + 1}/${elements.length}...`);
      
// // // //       highlightElement(elementData);
// // // //       await takeScreenshot(`element_${i}`);
// // // //       await new Promise(resolve => setTimeout(resolve, 500)); // Delay between screenshots
// // // //     }
    
// // // //     clearHighlight();
// // // //     setIsProcessing(false);
// // // //     setStatus(`Completed! Processed ${elements.length} elements`);
// // // //   };

// // // //   // Handle element selection from dropdown
// // // //   const handleElementSelect = (index) => {
// // // //     setSelectedIndex(index);
// // // //     if (index !== null) {
// // // //       highlightElement(elements[index]);
      
// // // //       // Auto-generate filename suggestion based on element
// // // //       const elementData = elements[index];
// // // //       const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
// // // //       setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
// // // //     } else {
// // // //       clearHighlight();
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       {/* Control Panel */}
// // // //       <div style={{
// // // //         position: 'fixed',
// // // //         top: '20px',
// // // //         right: '20px',
// // // //         width: '400px',
// // // //         maxHeight: '80vh',
// // // //         overflowY: 'auto',
// // // //         background: 'white',
// // // //         border: '2px solid #333',
// // // //         borderRadius: '8px',
// // // //         padding: '20px',
// // // //         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
// // // //         zIndex: 9999,
// // // //         fontFamily: 'Arial, sans-serif'
// // // //       }}>
// // // //         <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Screenshot Tool</h3>
        
// // // //         {/* Status */}
// // // //         <div style={{
// // // //           padding: '10px',
// // // //           background: '#f0f0f0',
// // // //           borderRadius: '4px',
// // // //           marginBottom: '15px',
// // // //           fontSize: '13px'
// // // //         }}>
// // // //           {status || 'Ready'}
// // // //         </div>
        
// // // //         {/* Mode Toggle */}
// // // //         <div style={{ marginBottom: '15px' }}>
// // // //           <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // // //             Mode:
// // // //           </label>
// // // //           <div style={{ display: 'flex', gap: '10px' }}>
// // // //             <button
// // // //               onClick={() => setMode('manual')}
// // // //               style={{
// // // //                 flex: 1,
// // // //                 padding: '10px',
// // // //                 background: mode === 'manual' ? '#007bff' : '#e0e0e0',
// // // //                 color: mode === 'manual' ? 'white' : '#333',
// // // //                 border: 'none',
// // // //                 borderRadius: '4px',
// // // //                 cursor: 'pointer',
// // // //                 fontWeight: mode === 'manual' ? 'bold' : 'normal'
// // // //               }}
// // // //             >
// // // //               Manual
// // // //             </button>
// // // //             <button
// // // //               onClick={() => setMode('auto')}
// // // //               style={{
// // // //                 flex: 1,
// // // //                 padding: '10px',
// // // //                 background: mode === 'auto' ? '#007bff' : '#e0e0e0',
// // // //                 color: mode === 'auto' ? 'white' : '#333',
// // // //                 border: 'none',
// // // //                 borderRadius: '4px',
// // // //                 cursor: 'pointer',
// // // //                 fontWeight: mode === 'auto' ? 'bold' : 'normal'
// // // //               }}
// // // //             >
// // // //               Auto
// // // //             </button>
// // // //           </div>
// // // //         </div>
        
// // // //         {/* Manual Mode Controls */}
// // // //         {mode === 'manual' && (
// // // //           <>
// // // //             {/* Element Selection */}
// // // //             <div style={{ marginBottom: '15px' }}>
// // // //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // // //                 Select Element ({elements.length} found):
// // // //               </label>
// // // //               <select
// // // //                 value={selectedIndex === null ? '' : selectedIndex}
// // // //                 onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
// // // //                 style={{
// // // //                   width: '100%',
// // // //                   padding: '8px',
// // // //                   borderRadius: '4px',
// // // //                   border: '1px solid #ccc',
// // // //                   fontSize: '12px'
// // // //                 }}
// // // //               >
// // // //                 <option value="">-- Select an element --</option>
// // // //                 {elements.map((el) => (
// // // //                   <option key={el.index} value={el.index}>
// // // //                     {el.index}: {getElementLabel(el)}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>
// // // //             </div>
            
// // // //             {/* Custom Filename Input */}
// // // //             <div style={{ marginBottom: '15px' }}>
// // // //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // // //                 Filename:
// // // //               </label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={customFilename}
// // // //                 onChange={(e) => setCustomFilename(e.target.value)}
// // // //                 placeholder="Enter filename (without .png)"
// // // //                 style={{
// // // //                   width: '100%',
// // // //                   padding: '8px',
// // // //                   borderRadius: '4px',
// // // //                   border: '1px solid #ccc',
// // // //                   fontSize: '13px',
// // // //                   boxSizing: 'border-box'
// // // //                 }}
// // // //               />
// // // //             </div>
            
// // // //             {/* Manual Action Buttons */}
// // // //             <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
// // // //               <button
// // // //                 onClick={handleManualScreenshot}
// // // //                 disabled={selectedIndex === null || !customFilename.trim()}
// // // //                 style={{
// // // //                   flex: 1,
// // // //                   padding: '12px',
// // // //                   background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
// // // //                   color: 'white',
// // // //                   border: 'none',
// // // //                   borderRadius: '4px',
// // // //                   cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
// // // //                   fontWeight: 'bold'
// // // //                 }}
// // // //               >
// // // //                 📸 Take Screenshot
// // // //               </button>
// // // //             </div>
            
// // // //             <button
// // // //               onClick={clearHighlight}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 padding: '10px',
// // // //                 background: '#6c757d',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 borderRadius: '4px',
// // // //                 cursor: 'pointer'
// // // //               }}
// // // //             >
// // // //               Clear Highlight
// // // //             </button>
// // // //           </>
// // // //         )}
        
// // // //         {/* Auto Mode Controls */}
// // // //         {mode === 'auto' && (
// // // //           <>
// // // //             <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
// // // //               <p style={{ margin: 0, fontSize: '13px' }}>
// // // //                 <strong>Auto mode</strong> will automatically:
// // // //                 <br />• Highlight each element
// // // //                 <br />• Take a screenshot
// // // //                 <br />• Save as element_0.png, element_1.png, etc.
// // // //                 <br />• Process all {elements.length} elements
// // // //               </p>
// // // //             </div>
            
// // // //             <button
// // // //               onClick={handleAutoProcessAll}
// // // //               disabled={isProcessing || elements.length === 0}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 padding: '15px',
// // // //                 background: isProcessing ? '#ccc' : '#28a745',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 borderRadius: '4px',
// // // //                 cursor: isProcessing ? 'not-allowed' : 'pointer',
// // // //                 fontWeight: 'bold',
// // // //                 fontSize: '14px'
// // // //               }}
// // // //             >
// // // //               {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
// // // //             </button>
// // // //           </>
// // // //         )}
        
// // // //         {/* Element List Preview */}
// // // //         <details style={{ marginTop: '20px', fontSize: '12px' }}>
// // // //           <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
// // // //             View All Elements ({elements.length})
// // // //           </summary>
// // // //           <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
// // // //             {elements.map((el) => (
// // // //               <div
// // // //                 key={el.index}
// // // //                 style={{
// // // //                   padding: '5px',
// // // //                   borderBottom: '1px solid #eee',
// // // //                   fontSize: '11px',
// // // //                   background: selectedIndex === el.index ? '#e3f2fd' : 'transparent'
// // // //                 }}
// // // //               >
// // // //                 <strong>{el.index}:</strong> {getElementLabel(el)}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </details>
// // // //       </div>
      
// // // //       {/* Wrapped Content */}
// // // //       <div ref={containerRef}>
// // // //         {children}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import { useState, useRef, useEffect } from 'react';
// // // import html2canvas from 'html2canvas';

// // // export default function ScreenshotWrapper({ children }) {
// // //   const [elements, setElements] = useState([]);
// // //   const [selectedIndex, setSelectedIndex] = useState(null);
// // //   const [mode, setMode] = useState('manual'); // 'manual' or 'auto'
// // //   const [customFilename, setCustomFilename] = useState('');
// // //   const [isProcessing, setIsProcessing] = useState(false);
// // //   const [status, setStatus] = useState('');
// // //   const containerRef = useRef(null);
// // //   const currentHighlightedElement = useRef(null);

// // //   // Scan for all interactive elements when component mounts or children change
// // //   useEffect(() => {
// // //     if (containerRef.current) {
// // //       const interactiveElements = containerRef.current.querySelectorAll(
// // //         'input, select, textarea, button, a[href]'
// // //       );
      
// // //       const elementData = Array.from(interactiveElements).map((el, index) => {
// // //         return {
// // //           index,
// // //           element: el,
// // //           type: el.tagName.toLowerCase(),
// // //           id: el.id || '',
// // //           name: el.name || '',
// // //           className: el.className || '',
// // //           text: el.textContent?.trim().substring(0, 30) || '',
// // //           placeholder: el.placeholder || ''
// // //         };
// // //       });
      
// // //       setElements(elementData);
// // //       setStatus(`Found ${elementData.length} interactive elements`);
// // //     }
// // //   }, [children]);

// // //   // Get a descriptive label for each element
// // //   const getElementLabel = (elementData) => {
// // //     const parts = [];
// // //     parts.push(`[${elementData.type}]`);
    
// // //     if (elementData.id) parts.push(`#${elementData.id}`);
// // //     if (elementData.name) parts.push(`name="${elementData.name}"`);
// // //     if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
// // //     if (elementData.text) parts.push(`"${elementData.text}"`);
// // //     if (elementData.className) parts.push(`.${elementData.className.split(' ')[0]}`);
    
// // //     return parts.join(' ');
// // //   };

// // //   // Clear any existing highlights
// // //   const clearHighlight = () => {
// // //     if (currentHighlightedElement.current) {
// // //       currentHighlightedElement.current.style.outline = '';
// // //       currentHighlightedElement.current.style.outlineOffset = '';
// // //       currentHighlightedElement.current = null;
// // //     }
// // //   };

// // //   // Highlight a specific element
// // //   const highlightElement = (elementData) => {
// // //     clearHighlight();
    
// // //     const element = elementData.element;
// // //     element.style.outline = '5px solid red';
// // //     element.style.outlineOffset = '2px';
// // //     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
// // //     currentHighlightedElement.current = element;
// // //   };

// // //   // Take screenshot of entire page
// // //   const takeScreenshot = async (filename) => {
// // //     try {
// // //       setStatus('Capturing screenshot...');
      
// // //       // Wait a moment for highlight to be visible
// // //       await new Promise(resolve => setTimeout(resolve, 300));
      
// // //       const canvas = await html2canvas(document.body, {
// // //         allowTaint: true,
// // //         useCORS: true,
// // //         scrollY: -window.scrollY,
// // //         scrollX: -window.scrollX,
// // //         windowWidth: document.documentElement.scrollWidth,
// // //         windowHeight: document.documentElement.scrollHeight
// // //       });
      
// // //       // Convert to blob and download
// // //       canvas.toBlob((blob) => {
// // //         if (!blob) {
// // //           setStatus('Error: Failed to create image blob');
// // //           return;
// // //         }
        
// // //         const url = URL.createObjectURL(blob);
// // //         const link = document.createElement('a');
// // //         link.download = `${filename}.png`;
// // //         link.href = url;
// // //         link.click();
// // //         URL.revokeObjectURL(url);
        
// // //         setStatus(`Screenshot saved: ${filename}.png`);
// // //       }, 'image/png');
      
// // //     } catch (error) {
// // //       setStatus(`Error: ${error.message}`);
// // //       console.error('Screenshot error:', error);
// // //     }
// // //   };

// // //   // Manual mode: Highlight and screenshot selected element
// // //   const handleManualScreenshot = async () => {
// // //     if (selectedIndex === null) {
// // //       setStatus('Please select an element first');
// // //       return;
// // //     }
    
// // //     if (!customFilename.trim()) {
// // //       setStatus('Please enter a filename');
// // //       return;
// // //     }
    
// // //     const elementData = elements[selectedIndex];
// // //     highlightElement(elementData);
// // //     await takeScreenshot(customFilename);
// // //     clearHighlight();
// // //   };

// // //   // Auto mode: Process all elements automatically
// // //   const handleAutoProcessAll = async () => {
// // //     if (elements.length === 0) {
// // //       setStatus('No elements found');
// // //       return;
// // //     }
    
// // //     setIsProcessing(true);
    
// // //     for (let i = 0; i < elements.length; i++) {
// // //       const elementData = elements[i];
// // //       setStatus(`Processing ${i + 1}/${elements.length}...`);
      
// // //       highlightElement(elementData);
// // //       await takeScreenshot(`element_${i}`);
// // //       await new Promise(resolve => setTimeout(resolve, 500)); // Delay between screenshots
// // //     }
    
// // //     clearHighlight();
// // //     setIsProcessing(false);
// // //     setStatus(`Completed! Processed ${elements.length} elements`);
// // //   };

// // //   // Handle element selection from dropdown
// // //   const handleElementSelect = (index) => {
// // //     setSelectedIndex(index);
// // //     if (index !== null) {
// // //       highlightElement(elements[index]);
      
// // //       // Auto-generate filename suggestion based on element
// // //       const elementData = elements[index];
// // //       const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
// // //       setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
// // //     } else {
// // //       clearHighlight();
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {/* Control Panel */}
// // //       <div style={{
// // //         position: 'fixed',
// // //         top: '20px',
// // //         right: '20px',
// // //         width: '400px',
// // //         maxHeight: '80vh',
// // //         overflowY: 'auto',
// // //         background: 'white',
// // //         border: '2px solid #333',
// // //         borderRadius: '8px',
// // //         padding: '20px',
// // //         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
// // //         zIndex: 9999,
// // //         fontFamily: 'Arial, sans-serif'
// // //       }}>
// // //         <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Screenshot Tool</h3>
        
// // //         {/* Status */}
// // //         <div style={{
// // //           padding: '10px',
// // //           background: '#f0f0f0',
// // //           borderRadius: '4px',
// // //           marginBottom: '15px',
// // //           fontSize: '13px'
// // //         }}>
// // //           {status || 'Ready'}
// // //         </div>
        
// // //         {/* Mode Toggle */}
// // //         <div style={{ marginBottom: '15px' }}>
// // //           <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // //             Mode:
// // //           </label>
// // //           <div style={{ display: 'flex', gap: '10px' }}>
// // //             <button
// // //               onClick={() => setMode('manual')}
// // //               style={{
// // //                 flex: 1,
// // //                 padding: '10px',
// // //                 background: mode === 'manual' ? '#007bff' : '#e0e0e0',
// // //                 color: mode === 'manual' ? 'white' : '#333',
// // //                 border: 'none',
// // //                 borderRadius: '4px',
// // //                 cursor: 'pointer',
// // //                 fontWeight: mode === 'manual' ? 'bold' : 'normal'
// // //               }}
// // //             >
// // //               Manual
// // //             </button>
// // //             <button
// // //               onClick={() => setMode('auto')}
// // //               style={{
// // //                 flex: 1,
// // //                 padding: '10px',
// // //                 background: mode === 'auto' ? '#007bff' : '#e0e0e0',
// // //                 color: mode === 'auto' ? 'white' : '#333',
// // //                 border: 'none',
// // //                 borderRadius: '4px',
// // //                 cursor: 'pointer',
// // //                 fontWeight: mode === 'auto' ? 'bold' : 'normal'
// // //               }}
// // //             >
// // //               Auto
// // //             </button>
// // //           </div>
// // //         </div>
        
// // //         {/* Manual Mode Controls */}
// // //         {mode === 'manual' && (
// // //           <>
// // //             {/* Element Selection */}
// // //             <div style={{ marginBottom: '15px' }}>
// // //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // //                 Select Element ({elements.length} found):
// // //               </label>
// // //               <select
// // //                 value={selectedIndex === null ? '' : selectedIndex}
// // //                 onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
// // //                 style={{
// // //                   width: '100%',
// // //                   padding: '8px',
// // //                   borderRadius: '4px',
// // //                   border: '1px solid #ccc',
// // //                   fontSize: '12px'
// // //                 }}
// // //               >
// // //                 <option value="">-- Select an element --</option>
// // //                 {elements.map((el) => (
// // //                   <option key={el.index} value={el.index}>
// // //                     {el.index}: {getElementLabel(el)}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>
            
// // //             {/* Custom Filename Input */}
// // //             <div style={{ marginBottom: '15px' }}>
// // //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// // //                 Filename:
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 value={customFilename}
// // //                 onChange={(e) => setCustomFilename(e.target.value)}
// // //                 placeholder="Enter filename (without .png)"
// // //                 style={{
// // //                   width: '100%',
// // //                   padding: '8px',
// // //                   borderRadius: '4px',
// // //                   border: '1px solid #ccc',
// // //                   fontSize: '13px',
// // //                   boxSizing: 'border-box'
// // //                 }}
// // //               />
// // //             </div>
            
// // //             {/* Manual Action Buttons */}
// // //             <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
// // //               <button
// // //                 onClick={handleManualScreenshot}
// // //                 disabled={selectedIndex === null || !customFilename.trim()}
// // //                 style={{
// // //                   flex: 1,
// // //                   padding: '12px',
// // //                   background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
// // //                   color: 'white',
// // //                   border: 'none',
// // //                   borderRadius: '4px',
// // //                   cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
// // //                   fontWeight: 'bold'
// // //                 }}
// // //               >
// // //                 📸 Take Screenshot
// // //               </button>
// // //             </div>
            
// // //             <button
// // //               onClick={clearHighlight}
// // //               style={{
// // //                 width: '100%',
// // //                 padding: '10px',
// // //                 background: '#6c757d',
// // //                 color: 'white',
// // //                 border: 'none',
// // //                 borderRadius: '4px',
// // //                 cursor: 'pointer'
// // //               }}
// // //             >
// // //               Clear Highlight
// // //             </button>
// // //           </>
// // //         )}
        
// // //         {/* Auto Mode Controls */}
// // //         {mode === 'auto' && (
// // //           <>
// // //             <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
// // //               <p style={{ margin: 0, fontSize: '13px' }}>
// // //                 <strong>Auto mode</strong> will automatically:
// // //                 <br />• Highlight each element
// // //                 <br />• Take a screenshot
// // //                 <br />• Save as element_0.png, element_1.png, etc.
// // //                 <br />• Process all {elements.length} elements
// // //               </p>
// // //             </div>
            
// // //             <button
// // //               onClick={handleAutoProcessAll}
// // //               disabled={isProcessing || elements.length === 0}
// // //               style={{
// // //                 width: '100%',
// // //                 padding: '15px',
// // //                 background: isProcessing ? '#ccc' : '#28a745',
// // //                 color: 'white',
// // //                 border: 'none',
// // //                 borderRadius: '4px',
// // //                 cursor: isProcessing ? 'not-allowed' : 'pointer',
// // //                 fontWeight: 'bold',
// // //                 fontSize: '14px'
// // //               }}
// // //             >
// // //               {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
// // //             </button>
// // //           </>
// // //         )}
        
// // //         {/* Element List Preview */}
// // //         <details style={{ marginTop: '20px', fontSize: '12px' }}>
// // //           <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
// // //             View All Elements ({elements.length})
// // //           </summary>
// // //           <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
// // //             {elements.map((el) => (
// // //               <div
// // //                 key={el.index}
// // //                 style={{
// // //                   padding: '5px',
// // //                   borderBottom: '1px solid #eee',
// // //                   fontSize: '11px',
// // //                   background: selectedIndex === el.index ? '#e3f2fd' : 'transparent'
// // //                 }}
// // //               >
// // //                 <strong>{el.index}:</strong> {getElementLabel(el)}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </details>
// // //       </div>
      
// // //       {/* Wrapped Content */}
// // //       <div ref={containerRef}>
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import { useState, useRef, useEffect } from 'react';
// // import html2canvas from 'html2canvas';

// // export default function ScreenshotWrapper({ children }) {
// //   const [elements, setElements] = useState([]);
// //   const [selectedIndex, setSelectedIndex] = useState(null);
// //   const [mode, setMode] = useState('manual'); // 'manual' or 'auto'
// //   const [customFilename, setCustomFilename] = useState('');
// //   const [isProcessing, setIsProcessing] = useState(false);
// //   const [status, setStatus] = useState('');
// //   const containerRef = useRef(null);
// //   const currentHighlightedElement = useRef(null);

// //   // Scan for all interactive elements when component mounts or children change
// //   useEffect(() => {
// //     if (containerRef.current) {
// //       const interactiveElements = containerRef.current.querySelectorAll(
// //         'input, select, textarea, button, a[href]'
// //       );
      
// //       const elementData = Array.from(interactiveElements).map((el, index) => {
// //         return {
// //           index,
// //           element: el,
// //           type: el.tagName.toLowerCase(),
// //           id: el.id || '',
// //           name: el.name || '',
// //           className: el.className || '',
// //           text: el.textContent?.trim().substring(0, 30) || '',
// //           placeholder: el.placeholder || ''
// //         };
// //       });
      
// //       setElements(elementData);
// //       setStatus(`Found ${elementData.length} interactive elements`);
// //     }
// //   }, [children]);

// //   // Get a descriptive label for each element
// //   const getElementLabel = (elementData) => {
// //     const parts = [];
// //     parts.push(`[${elementData.type}]`);
    
// //     if (elementData.id) parts.push(`#${elementData.id}`);
// //     if (elementData.name) parts.push(`name="${elementData.name}"`);
// //     if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
// //     if (elementData.text) parts.push(`"${elementData.text}"`);
// //     if (elementData.className) parts.push(`.${elementData.className.split(' ')[0]}`);
    
// //     return parts.join(' ');
// //   };

// //   // Clear any existing highlights
// //   const clearHighlight = () => {
// //     if (currentHighlightedElement.current) {
// //       currentHighlightedElement.current.style.outline = '';
// //       currentHighlightedElement.current.style.outlineOffset = '';
// //       currentHighlightedElement.current = null;
// //     }
// //   };

// //   // Highlight a specific element
// //   const highlightElement = (elementData) => {
// //     clearHighlight();
    
// //     const element = elementData.element;
// //     element.style.outline = '5px solid red';
// //     element.style.outlineOffset = '2px';
// //     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
// //     currentHighlightedElement.current = element;
// //   };

// //   // Take screenshot of entire page
// //   const takeScreenshot = async (filename) => {
// //     try {
// //       setStatus('Capturing screenshot...');
      
// //       // Wait a moment for highlight to be visible
// //       await new Promise(resolve => setTimeout(resolve, 300));
      
// //       const canvas = await html2canvas(document.body, {
// //         allowTaint: false,
// //         useCORS: true,
// //         logging: false,
// //         scale: 2,
// //         backgroundColor: '#ffffff'
// //       });
      
// //       // Use toDataURL instead of toBlob
// //       const dataUrl = canvas.toDataURL('image/png');
      
// //       if (!dataUrl || dataUrl === 'data:,') {
// //         throw new Error('Canvas is empty or failed to generate image');
// //       }
      
// //       const link = document.createElement('a');
// //       link.download = `${filename}.png`;
// //       link.href = dataUrl;
// //       document.body.appendChild(link);
// //       link.click();
// //       document.body.removeChild(link);
      
// //       setStatus(`Screenshot saved: ${filename}.png`);
      
// //     } catch (error) {
// //       setStatus(`Error: ${error.message}`);
// //       console.error('Screenshot error:', error);
// //     }
// //   };

// //   // Manual mode: Highlight and screenshot selected element
// //   const handleManualScreenshot = async () => {
// //     if (selectedIndex === null) {
// //       setStatus('Please select an element first');
// //       return;
// //     }
    
// //     if (!customFilename.trim()) {
// //       setStatus('Please enter a filename');
// //       return;
// //     }
    
// //     const elementData = elements[selectedIndex];
// //     highlightElement(elementData);
// //     await takeScreenshot(customFilename);
// //     clearHighlight();
// //   };

// //   // Auto mode: Process all elements automatically
// //   const handleAutoProcessAll = async () => {
// //     if (elements.length === 0) {
// //       setStatus('No elements found');
// //       return;
// //     }
    
// //     setIsProcessing(true);
    
// //     for (let i = 0; i < elements.length; i++) {
// //       const elementData = elements[i];
// //       setStatus(`Processing ${i + 1}/${elements.length}...`);
      
// //       highlightElement(elementData);
// //       await takeScreenshot(`element_${i}`);
// //       await new Promise(resolve => setTimeout(resolve, 500)); // Delay between screenshots
// //     }
    
// //     clearHighlight();
// //     setIsProcessing(false);
// //     setStatus(`Completed! Processed ${elements.length} elements`);
// //   };

// //   // Handle element selection from dropdown
// //   const handleElementSelect = (index) => {
// //     setSelectedIndex(index);
// //     if (index !== null) {
// //       highlightElement(elements[index]);
      
// //       // Auto-generate filename suggestion based on element
// //       const elementData = elements[index];
// //       const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
// //       setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
// //     } else {
// //       clearHighlight();
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Control Panel */}
// //       <div style={{
// //         position: 'fixed',
// //         top: '20px',
// //         right: '20px',
// //         width: '400px',
// //         maxHeight: '80vh',
// //         overflowY: 'auto',
// //         background: 'white',
// //         border: '2px solid #333',
// //         borderRadius: '8px',
// //         padding: '20px',
// //         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
// //         zIndex: 9999,
// //         fontFamily: 'Arial, sans-serif'
// //       }}>
// //         <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Screenshot Tool</h3>
        
// //         {/* Status */}
// //         <div style={{
// //           padding: '10px',
// //           background: '#f0f0f0',
// //           borderRadius: '4px',
// //           marginBottom: '15px',
// //           fontSize: '13px'
// //         }}>
// //           {status || 'Ready'}
// //         </div>
        
// //         {/* Mode Toggle */}
// //         <div style={{ marginBottom: '15px' }}>
// //           <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// //             Mode:
// //           </label>
// //           <div style={{ display: 'flex', gap: '10px' }}>
// //             <button
// //               onClick={() => setMode('manual')}
// //               style={{
// //                 flex: 1,
// //                 padding: '10px',
// //                 background: mode === 'manual' ? '#007bff' : '#e0e0e0',
// //                 color: mode === 'manual' ? 'white' : '#333',
// //                 border: 'none',
// //                 borderRadius: '4px',
// //                 cursor: 'pointer',
// //                 fontWeight: mode === 'manual' ? 'bold' : 'normal'
// //               }}
// //             >
// //               Manual
// //             </button>
// //             <button
// //               onClick={() => setMode('auto')}
// //               style={{
// //                 flex: 1,
// //                 padding: '10px',
// //                 background: mode === 'auto' ? '#007bff' : '#e0e0e0',
// //                 color: mode === 'auto' ? 'white' : '#333',
// //                 border: 'none',
// //                 borderRadius: '4px',
// //                 cursor: 'pointer',
// //                 fontWeight: mode === 'auto' ? 'bold' : 'normal'
// //               }}
// //             >
// //               Auto
// //             </button>
// //           </div>
// //         </div>
        
// //         {/* Manual Mode Controls */}
// //         {mode === 'manual' && (
// //           <>
// //             {/* Element Selection */}
// //             <div style={{ marginBottom: '15px' }}>
// //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// //                 Select Element ({elements.length} found):
// //               </label>
// //               <select
// //                 value={selectedIndex === null ? '' : selectedIndex}
// //                 onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
// //                 style={{
// //                   width: '100%',
// //                   padding: '8px',
// //                   borderRadius: '4px',
// //                   border: '1px solid #ccc',
// //                   fontSize: '12px'
// //                 }}
// //               >
// //                 <option value="">-- Select an element --</option>
// //                 {elements.map((el) => (
// //                   <option key={el.index} value={el.index}>
// //                     {el.index}: {getElementLabel(el)}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
            
// //             {/* Custom Filename Input */}
// //             <div style={{ marginBottom: '15px' }}>
// //               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
// //                 Filename:
// //               </label>
// //               <input
// //                 type="text"
// //                 value={customFilename}
// //                 onChange={(e) => setCustomFilename(e.target.value)}
// //                 placeholder="Enter filename (without .png)"
// //                 style={{
// //                   width: '100%',
// //                   padding: '8px',
// //                   borderRadius: '4px',
// //                   border: '1px solid #ccc',
// //                   fontSize: '13px',
// //                   boxSizing: 'border-box'
// //                 }}
// //               />
// //             </div>
            
// //             {/* Manual Action Buttons */}
// //             <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
// //               <button
// //                 onClick={handleManualScreenshot}
// //                 disabled={selectedIndex === null || !customFilename.trim()}
// //                 style={{
// //                   flex: 1,
// //                   padding: '12px',
// //                   background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
// //                   color: 'white',
// //                   border: 'none',
// //                   borderRadius: '4px',
// //                   cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
// //                   fontWeight: 'bold'
// //                 }}
// //               >
// //                 📸 Take Screenshot
// //               </button>
// //             </div>
            
// //             <button
// //               onClick={clearHighlight}
// //               style={{
// //                 width: '100%',
// //                 padding: '10px',
// //                 background: '#6c757d',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '4px',
// //                 cursor: 'pointer'
// //               }}
// //             >
// //               Clear Highlight
// //             </button>
// //           </>
// //         )}
        
// //         {/* Auto Mode Controls */}
// //         {mode === 'auto' && (
// //           <>
// //             <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
// //               <p style={{ margin: 0, fontSize: '13px' }}>
// //                 <strong>Auto mode</strong> will automatically:
// //                 <br />• Highlight each element
// //                 <br />• Take a screenshot
// //                 <br />• Save as element_0.png, element_1.png, etc.
// //                 <br />• Process all {elements.length} elements
// //               </p>
// //             </div>
            
// //             <button
// //               onClick={handleAutoProcessAll}
// //               disabled={isProcessing || elements.length === 0}
// //               style={{
// //                 width: '100%',
// //                 padding: '15px',
// //                 background: isProcessing ? '#ccc' : '#28a745',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '4px',
// //                 cursor: isProcessing ? 'not-allowed' : 'pointer',
// //                 fontWeight: 'bold',
// //                 fontSize: '14px'
// //               }}
// //             >
// //               {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
// //             </button>
// //           </>
// //         )}
        
// //         {/* Element List Preview */}
// //         <details style={{ marginTop: '20px', fontSize: '12px' }}>
// //           <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
// //             View All Elements ({elements.length})
// //           </summary>
// //           <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
// //             {elements.map((el) => (
// //               <div
// //                 key={el.index}
// //                 style={{
// //                   padding: '5px',
// //                   borderBottom: '1px solid #eee',
// //                   fontSize: '11px',
// //                   background: selectedIndex === el.index ? '#e3f2fd' : 'transparent'
// //                 }}
// //               >
// //                 <strong>{el.index}:</strong> {getElementLabel(el)}
// //               </div>
// //             ))}
// //           </div>
// //         </details>
// //       </div>
      
// //       {/* Wrapped Content */}
// //       <div ref={containerRef}>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useRef, useEffect } from 'react';
// import domtoimage from 'dom-to-image-more';

// export default function ScreenshotWrapper({ children }) {
//   const [elements, setElements] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [mode, setMode] = useState('manual'); // 'manual' or 'auto'
//   const [customFilename, setCustomFilename] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [status, setStatus] = useState('');
//   const containerRef = useRef(null);
//   const currentHighlightedElement = useRef(null);

//   // Scan for all interactive elements when component mounts or children change
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

//   // Get a descriptive label for each element
//   const getElementLabel = (elementData) => {
//     const parts = [];
//     parts.push(`[${elementData.type}]`);
    
//     if (elementData.id) parts.push(`#${elementData.id}`);
//     if (elementData.name) parts.push(`name="${elementData.name}"`);
//     if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
//     if (elementData.text) parts.push(`"${elementData.text}"`);
//     if (elementData.className) parts.push(`.${elementData.className.split(' ')[0]}`);
    
//     return parts.join(' ');
//   };

//   // Clear any existing highlights
//   const clearHighlight = () => {
//     if (currentHighlightedElement.current) {
//       currentHighlightedElement.current.style.outline = '';
//       currentHighlightedElement.current.style.outlineOffset = '';
//       currentHighlightedElement.current = null;
//     }
//   };

//   // Highlight a specific element
//   const highlightElement = (elementData) => {
//     clearHighlight();
    
//     const element = elementData.element;
//     element.style.outline = '5px solid red';
//     element.style.outlineOffset = '2px';
//     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
//     currentHighlightedElement.current = element;
//   };

//   // Take screenshot of entire page
//   const takeScreenshot = async (filename) => {
//     try {
//       setStatus('Capturing screenshot...');
      
//       // Wait a moment for highlight to be visible
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       const dataUrl = await domtoimage.toPng(document.body, {
//         quality: 1,
//         bgcolor: '#ffffff'
//       });
      
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

//   // Manual mode: Highlight and screenshot selected element
//   const handleManualScreenshot = async () => {
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
//     await takeScreenshot(customFilename);
//     clearHighlight();
//   };

//   // Auto mode: Process all elements automatically
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
//       await takeScreenshot(`element_${i}`);
//       await new Promise(resolve => setTimeout(resolve, 500)); // Delay between screenshots
//     }
    
//     clearHighlight();
//     setIsProcessing(false);
//     setStatus(`Completed! Processed ${elements.length} elements`);
//   };

//   // Handle element selection from dropdown
//   const handleElementSelect = (index) => {
//     setSelectedIndex(index);
//     if (index !== null) {
//       highlightElement(elements[index]);
      
//       // Auto-generate filename suggestion based on element
//       const elementData = elements[index];
//       const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
//       setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
//     } else {
//       clearHighlight();
//     }
//   };

//   return (
//     <div>
//       {/* Control Panel */}
//       <div style={{
//         position: 'fixed',
//         top: '20px',
//         right: '20px',
//         width: '400px',
//         maxHeight: '80vh',
//         overflowY: 'auto',
//         background: 'white',
//         border: '2px solid #333',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//         zIndex: 9999,
//         fontFamily: 'Arial, sans-serif'
//       }}>
//         <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Screenshot Tool</h3>
        
//         {/* Status */}
//         <div style={{
//           padding: '10px',
//           background: '#f0f0f0',
//           borderRadius: '4px',
//           marginBottom: '15px',
//           fontSize: '13px'
//         }}>
//           {status || 'Ready'}
//         </div>
        
//         {/* Mode Toggle */}
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
//             Mode:
//           </label>
//           <div style={{ display: 'flex', gap: '10px' }}>
//             <button
//               onClick={() => setMode('manual')}
//               style={{
//                 flex: 1,
//                 padding: '10px',
//                 background: mode === 'manual' ? '#007bff' : '#e0e0e0',
//                 color: mode === 'manual' ? 'white' : '#333',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontWeight: mode === 'manual' ? 'bold' : 'normal'
//               }}
//             >
//               Manual
//             </button>
//             <button
//               onClick={() => setMode('auto')}
//               style={{
//                 flex: 1,
//                 padding: '10px',
//                 background: mode === 'auto' ? '#007bff' : '#e0e0e0',
//                 color: mode === 'auto' ? 'white' : '#333',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 fontWeight: mode === 'auto' ? 'bold' : 'normal'
//               }}
//             >
//               Auto
//             </button>
//           </div>
//         </div>
        
//         {/* Manual Mode Controls */}
//         {mode === 'manual' && (
//           <>
//             {/* Element Selection */}
//             <div style={{ marginBottom: '15px' }}>
//               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
//                 Select Element ({elements.length} found):
//               </label>
//               <select
//                 value={selectedIndex === null ? '' : selectedIndex}
//                 onChange={(e) => handleElementSelect(e.target.value === '' ? null : parseInt(e.target.value))}
//                 style={{
//                   width: '100%',
//                   padding: '8px',
//                   borderRadius: '4px',
//                   border: '1px solid #ccc',
//                   fontSize: '12px'
//                 }}
//               >
//                 <option value="">-- Select an element --</option>
//                 {elements.map((el) => (
//                   <option key={el.index} value={el.index}>
//                     {el.index}: {getElementLabel(el)}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             {/* Custom Filename Input */}
//             <div style={{ marginBottom: '15px' }}>
//               <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
//                 Filename:
//               </label>
//               <input
//                 type="text"
//                 value={customFilename}
//                 onChange={(e) => setCustomFilename(e.target.value)}
//                 placeholder="Enter filename (without .png)"
//                 style={{
//                   width: '100%',
//                   padding: '8px',
//                   borderRadius: '4px',
//                   border: '1px solid #ccc',
//                   fontSize: '13px',
//                   boxSizing: 'border-box'
//                 }}
//               />
//             </div>
            
//             {/* Manual Action Buttons */}
//             <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//               <button
//                 onClick={handleManualScreenshot}
//                 disabled={selectedIndex === null || !customFilename.trim()}
//                 style={{
//                   flex: 1,
//                   padding: '12px',
//                   background: selectedIndex !== null && customFilename.trim() ? '#28a745' : '#ccc',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: selectedIndex !== null && customFilename.trim() ? 'pointer' : 'not-allowed',
//                   fontWeight: 'bold'
//                 }}
//               >
//                 📸 Take Screenshot
//               </button>
//             </div>
            
//             <button
//               onClick={clearHighlight}
//               style={{
//                 width: '100%',
//                 padding: '10px',
//                 background: '#6c757d',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer'
//               }}
//             >
//               Clear Highlight
//             </button>
//           </>
//         )}
        
//         {/* Auto Mode Controls */}
//         {mode === 'auto' && (
//           <>
//             <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
//               <p style={{ margin: 0, fontSize: '13px' }}>
//                 <strong>Auto mode</strong> will automatically:
//                 <br />• Highlight each element
//                 <br />• Take a screenshot
//                 <br />• Save as element_0.png, element_1.png, etc.
//                 <br />• Process all {elements.length} elements
//               </p>
//             </div>
            
//             <button
//               onClick={handleAutoProcessAll}
//               disabled={isProcessing || elements.length === 0}
//               style={{
//                 width: '100%',
//                 padding: '15px',
//                 background: isProcessing ? '#ccc' : '#28a745',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: isProcessing ? 'not-allowed' : 'pointer',
//                 fontWeight: 'bold',
//                 fontSize: '14px'
//               }}
//             >
//               {isProcessing ? '⏳ Processing...' : `🚀 Process All ${elements.length} Elements`}
//             </button>
//           </>
//         )}
        
//         {/* Element List Preview */}
//         <details style={{ marginTop: '20px', fontSize: '12px' }}>
//           <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
//             View All Elements ({elements.length})
//           </summary>
//           <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
//             {elements.map((el) => (
//               <div
//                 key={el.index}
//                 style={{
//                   padding: '5px',
//                   borderBottom: '1px solid #eee',
//                   fontSize: '11px',
//                   background: selectedIndex === el.index ? '#e3f2fd' : 'transparent'
//                 }}
//               >
//                 <strong>{el.index}:</strong> {getElementLabel(el)}
//               </div>
//             ))}
//           </div>
//         </details>
//       </div>
      
//       {/* Wrapped Content */}
//       <div ref={containerRef}>
//         {children}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useRef, useEffect } from 'react';

export default function ScreenshotWrapper({ children }) {
  const [elements, setElements] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mode, setMode] = useState('manual'); // 'manual' or 'auto'
  const [customFilename, setCustomFilename] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('');
  const containerRef = useRef(null);
  const currentHighlightedElement = useRef(null);

  // Scan for all interactive elements when component mounts or children change
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

  // Get a descriptive label for each element
  const getElementLabel = (elementData) => {
    const parts = [];
    parts.push(`[${elementData.type}]`);
    
    if (elementData.id) parts.push(`#${elementData.id}`);
    if (elementData.name) parts.push(`name="${elementData.name}"`);
    if (elementData.placeholder) parts.push(`placeholder="${elementData.placeholder}"`);
    if (elementData.text) parts.push(`"${elementData.text}"`);
    if (elementData.className) parts.push(`.${elementData.className.split(' ')[0]}`);
    
    return parts.join(' ');
  };

  // Clear any existing highlights
  const clearHighlight = () => {
    if (currentHighlightedElement.current) {
      currentHighlightedElement.current.style.outline = '';
      currentHighlightedElement.current.style.outlineOffset = '';
      currentHighlightedElement.current = null;
    }
  };

  // Highlight a specific element
  const highlightElement = (elementData) => {
    clearHighlight();
    
    const element = elementData.element;
    element.style.outline = '5px solid red';
    element.style.outlineOffset = '2px';
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    currentHighlightedElement.current = element;
  };

  // Take screenshot of entire page
  const takeScreenshot = async (filename) => {
    try {
      setStatus('Capturing screenshot...');
      
      // Dynamically import dom-to-image only on client side
      const domtoimage = (await import('dom-to-image-more')).default;
      
      // Wait a moment for highlight to be visible
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const dataUrl = await domtoimage.toPng(document.body, {
        quality: 1,
        bgcolor: '#ffffff'
      });
      
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

  // Manual mode: Highlight and screenshot selected element
  const handleManualScreenshot = async () => {
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
    await takeScreenshot(customFilename);
    clearHighlight();
  };

  // Auto mode: Process all elements automatically
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
      await takeScreenshot(`element_${i}`);
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay between screenshots
    }
    
    clearHighlight();
    setIsProcessing(false);
    setStatus(`Completed! Processed ${elements.length} elements`);
  };

  // Handle element selection from dropdown
  const handleElementSelect = (index) => {
    setSelectedIndex(index);
    if (index !== null) {
      highlightElement(elements[index]);
      
      // Auto-generate filename suggestion based on element
      const elementData = elements[index];
      const suggestion = `${elementData.type}_${elementData.id || elementData.name || index}`;
      setCustomFilename(suggestion.replace(/[^a-zA-Z0-9_-]/g, '_'));
    } else {
      clearHighlight();
    }
  };

  return (
    <div>
      {/* Control Panel */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '400px',
        maxHeight: '80vh',
        overflowY: 'auto',
        background: 'white',
        border: '2px solid #333',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif'
      }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Screenshot Tool</h3>
        
        {/* Status */}
        <div style={{
          padding: '10px',
          background: '#f0f0f0',
          borderRadius: '4px',
          marginBottom: '15px',
          fontSize: '13px'
        }}>
          {status || 'Ready'}
        </div>
        
        {/* Mode Toggle */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Mode:
          </label>
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
        
        {/* Manual Mode Controls */}
        {mode === 'manual' && (
          <>
            {/* Element Selection */}
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
            
            {/* Custom Filename Input */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Filename:
              </label>
              <input
                type="text"
                value={customFilename}
                onChange={(e) => setCustomFilename(e.target.value)}
                placeholder="Enter filename (without .png)"
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
            
            {/* Manual Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <button
                onClick={handleManualScreenshot}
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
                📸 Take Screenshot
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
        
        {/* Auto Mode Controls */}
        {mode === 'auto' && (
          <>
            <div style={{ marginBottom: '15px', padding: '15px', background: '#fff3cd', borderRadius: '4px' }}>
              <p style={{ margin: 0, fontSize: '13px' }}>
                <strong>Auto mode</strong> will automatically:
                <br />• Highlight each element
                <br />• Take a screenshot
                <br />• Save as element_0.png, element_1.png, etc.
                <br />• Process all {elements.length} elements
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
        
        {/* Element List Preview */}
        <details style={{ marginTop: '20px', fontSize: '12px' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px' }}>
            View All Elements ({elements.length})
          </summary>
          <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
            {elements.map((el) => (
              <div
                key={el.index}
                style={{
                  padding: '5px',
                  borderBottom: '1px solid #eee',
                  fontSize: '11px',
                  background: selectedIndex === el.index ? '#e3f2fd' : 'transparent'
                }}
              >
                <strong>{el.index}:</strong> {getElementLabel(el)}
              </div>
            ))}
          </div>
        </details>
      </div>
      
      {/* Wrapped Content */}
      <div ref={containerRef}>
        {children}
      </div>
    </div>
  );
}