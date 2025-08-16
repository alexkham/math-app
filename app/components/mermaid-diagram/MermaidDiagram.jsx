
// // // // // // // 'use client'
// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import mermaid from 'mermaid';
// // // // // // // import './MermaidDiagram.css'

// // // // // // // const MermaidDiagram = ({ 
// // // // // // //   chartDefinition, 
// // // // // // //   nodeWidth = 50,
// // // // // // //   nodeHeight = 50,
// // // // // // //   fontSize = 24,
// // // // // // //   fontFamily = 'Arial, sans-serif',
// // // // // // //   maxWidth=1000,
// // // // // // //   maxHeight=600
// // // // // // // }) => {
// // // // // // //   const mermaidRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     if (typeof window !== "undefined") {
// // // // // // //       mermaid.initialize({ 
// // // // // // //         startOnLoad: false,
// // // // // // //         theme: 'default',
// // // // // // //         flowchart: {
// // // // // // //           nodeSpacing: 20,
// // // // // // //           rankSpacing: 20,
// // // // // // //           curve: 'basis',
// // // // // // //           useMaxWidth: true,
// // // // // // //         },
// // // // // // //         themeVariables: {
// // // // // // //           fontSize: `${fontSize}px`,
// // // // // // //           fontFamily: fontFamily,
// // // // // // //         }
// // // // // // //       });
      
// // // // // // //       setTimeout(() => {
// // // // // // //         mermaid.init(undefined, mermaidRef.current);

// // // // // // //         // Adjust node sizes after rendering
// // // // // // //         const svgElement = mermaidRef.current.querySelector('svg');
// // // // // // //         if (svgElement) {
// // // // // // //           const nodes = svgElement.querySelectorAll('.node rect, .node circle, .node ellipse, .node polygon');
// // // // // // //           nodes.forEach(node => {
// // // // // // //             node.setAttribute('width', nodeWidth);
// // // // // // //             node.setAttribute('height', nodeHeight);
// // // // // // //           });

// // // // // // //           // Adjust text position
// // // // // // //           const texts = svgElement.querySelectorAll('.node text');
// // // // // // //           texts.forEach(text => {
// // // // // // //             text.setAttribute('font-size', `${fontSize}px`);
// // // // // // //             text.setAttribute('dy', '0.3em'); // Center text vertically
// // // // // // //           });

// // // // // // //           // Adjust the viewBox to fit the new node sizes
// // // // // // //           svgElement.setAttribute('width', '300px');
// // // // // // //           svgElement.setAttribute('height', '300px');
// // // // // // //         }
// // // // // // //       }, 0);
// // // // // // //     }
// // // // // // //   }, [chartDefinition, nodeWidth, nodeHeight, fontSize, fontFamily]);

// // // // // // //   return (
// // // // // // //     <div className="mermaidDiagramContainer" style={{width:`${maxWidth}`}} ref={mermaidRef}>
// // // // // // //       {chartDefinition}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MermaidDiagram;
// // // // // // 'use client'
// // // // // // import React, { useEffect, useRef } from 'react';

// // // // // // const MermaidDiagramClient = ({
// // // // // //   chartDefinition,
// // // // // //   nodeWidth,
// // // // // //   nodeHeight,
// // // // // //   fontSize,
// // // // // //   fontFamily
// // // // // // }) => {
// // // // // //   const mermaidRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     import('mermaid').then((mermaid) => {
// // // // // //       mermaid.default.initialize({
// // // // // //         startOnLoad: false,
// // // // // //         theme: 'default',
// // // // // //         flowchart: {
// // // // // //           nodeSpacing: 20,
// // // // // //           rankSpacing: 20,
// // // // // //           curve: 'basis',
// // // // // //           useMaxWidth: true,
// // // // // //         },
// // // // // //         themeVariables: {
// // // // // //           fontSize: `${fontSize}px`,
// // // // // //           fontFamily: fontFamily,
// // // // // //         }
// // // // // //       });

// // // // // //       mermaid.default.run({
// // // // // //         nodes: [mermaidRef.current]
// // // // // //       }).then(() => {
// // // // // //         // Apply custom styles after rendering
// // // // // //         const svgElement = mermaidRef.current.querySelector('svg');
// // // // // //         if (svgElement) {
// // // // // //           svgElement.style.maxWidth = '100%';
// // // // // //           svgElement.style.height = 'auto';

// // // // // //           const nodes = svgElement.querySelectorAll('.node rect, .node circle, .node ellipse, .node polygon');
// // // // // //           nodes.forEach(node => {
// // // // // //             node.setAttribute('width', nodeWidth);
// // // // // //             node.setAttribute('height', nodeHeight);
// // // // // //           });

// // // // // //           const texts = svgElement.querySelectorAll('.node text, .edgeLabel text');
// // // // // //           texts.forEach(text => {
// // // // // //             text.setAttribute('font-size', `${fontSize}px`);
// // // // // //             text.setAttribute('font-family', fontFamily);
// // // // // //           });
// // // // // //         }
// // // // // //       });
// // // // // //     });
// // // // // //   }, [chartDefinition, nodeWidth, nodeHeight, fontSize, fontFamily]);

// // // // // //   return <div ref={mermaidRef}>{chartDefinition}</div>;
// // // // // // };

// // // // // // export default MermaidDiagramClient;
// // // // // // 'use client'
// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import dynamic from 'next/dynamic';

// // // // // // const MermaidDiagram = ({
// // // // // //   chartDefinition,
// // // // // //   width = '100%',
// // // // // //   height = 'auto',
// // // // // //   fontSize='24'
// // // // // // }) => {
// // // // // //   const mermaidRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const renderDiagram = async () => {
// // // // // //       const mermaid = (await import('mermaid')).default;
// // // // // //       mermaid.initialize({
// // // // // //         startOnLoad: false,
// // // // // //         theme: 'default',
// // // // // //         flowchart: {
// // // // // //           useMaxWidth: true,
// // // // // //           htmlLabels: true,
// // // // // //           curve: 'basis'
// // // // // //         }
// // // // // //       });

// // // // // //       await mermaid.run({
// // // // // //         nodes: [mermaidRef.current]
// // // // // //       });
// // // // // //     };

// // // // // //     renderDiagram();
// // // // // //   }, [chartDefinition]);

// // // // // //   return (
// // // // // //     <div ref={mermaidRef} style={{ width, height,fontSize }}>
// // // // // //       {chartDefinition}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default dynamic(() => Promise.resolve(MermaidDiagram), { ssr: false });
// // // // // 'use client'
// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import dynamic from 'next/dynamic';

// // // // // const MermaidDiagram = ({
// // // // //   chartDefinition,
// // // // //   width = '100%',
// // // // //   height = 'auto',
// // // // //   fontSize = 24
// // // // // }) => {
// // // // //   const mermaidRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const renderDiagram = async () => {
// // // // //       const mermaid = (await import('mermaid')).default;
// // // // //       mermaid.initialize({
// // // // //         startOnLoad: false,
// // // // //         theme: 'default',
// // // // //         flowchart: {
// // // // //           useMaxWidth: true,
// // // // //           htmlLabels: true,
// // // // //           curve: 'basis'
// // // // //         },
// // // // //         themeVariables: {
// // // // //           fontSize: `${fontSize}px`
// // // // //         }
// // // // //       });

// // // // //       await mermaid.run({
// // // // //         nodes: [mermaidRef.current]
// // // // //       });

// // // // //       // Adjust font size for all text elements after rendering
// // // // //       const svgElement = mermaidRef.current.querySelector('svg');
// // // // //       if (svgElement) {
// // // // //         const textElements = svgElement.querySelectorAll('text');
// // // // //         textElements.forEach(text => {
// // // // //           text.style.fontSize = `${fontSize}px`;
// // // // //         });
// // // // //       }
// // // // //     };

// // // // //     renderDiagram();
// // // // //   }, [chartDefinition, fontSize]);

// // // // //   return (
// // // // //     <div ref={mermaidRef} style={{ width, height }}>
// // // // //       {chartDefinition}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default dynamic(() => Promise.resolve(MermaidDiagram), { ssr: false });
// // // // 'use client'
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import dynamic from 'next/dynamic';

// // // // const MermaidDiagram = ({
// // // //   chartDefinition,
// // // //   width = '100%',
// // // //   height = 'auto',
// // // //   initialFontSize = 24
// // // // }) => {
// // // //   const [fontSize, setFontSize] = useState(initialFontSize);
// // // //   const mermaidRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const renderDiagram = async () => {
// // // //       const mermaid = (await import('mermaid')).default;
// // // //       mermaid.initialize({
// // // //         startOnLoad: false,
// // // //         theme: 'default',
// // // //         flowchart: {
// // // //           useMaxWidth: true,
// // // //           htmlLabels: true,
// // // //           curve: 'basis'
// // // //         }
// // // //       });

// // // //       await mermaid.run({
// // // //         nodes: [mermaidRef.current]
// // // //       });

// // // //       applyFontSize();
// // // //     };

// // // //     renderDiagram();
// // // //   }, [chartDefinition, fontSize]);

// // // //   const applyFontSize = () => {
// // // //     const svgElement = mermaidRef.current.querySelector('svg');
// // // //     if (svgElement) {
// // // //       svgElement.style.fontSize = `${fontSize}px`;
// // // //       const textElements = svgElement.querySelectorAll('text');
// // // //       textElements.forEach(text => {
// // // //         text.setAttribute('font-size', `${fontSize}px`);
// // // //         text.style.fontSize = `${fontSize}px`;
// // // //       });
      
// // // //       const bbox = svgElement.getBBox();
// // // //       svgElement.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);
// // // //     }
// // // //   };

// // // //   const handleFontSizeChange = (event) => {
// // // //     setFontSize(Number(event.target.value));
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <div>
// // // //         <label htmlFor="font-size-control">Font Size: </label>
// // // //         <input
// // // //           id="font-size-control"
// // // //           type="range"
// // // //           min="12"
// // // //           max="48"
// // // //           value={fontSize}
// // // //           onChange={handleFontSizeChange}
// // // //         />
// // // //         <span>{fontSize}px</span>
// // // //       </div>
// // // //       <div ref={mermaidRef} style={{ width, height, overflow: 'auto' }}>
// // // //         {chartDefinition}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default dynamic(() => Promise.resolve(MermaidDiagram), { ssr: false });
// // // 'use client'
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import dynamic from 'next/dynamic';

// // // const MermaidDiagram = ({
// // //   chartDefinition,
// // //   width = '100%',
// // //   height = 'auto',
// // //   initialNodeWidth = 100,
// // //   initialNodeHeight = 50
// // // }) => {
// // //   const [nodeWidth, setNodeWidth] = useState(initialNodeWidth);
// // //   const [nodeHeight, setNodeHeight] = useState(initialNodeHeight);
// // //   const mermaidRef = useRef(null);

// // //   useEffect(() => {
// // //     const renderDiagram = async () => {
// // //       const mermaid = (await import('mermaid')).default;
// // //       mermaid.initialize({
// // //         startOnLoad: false,
// // //         theme: 'default',
// // //         flowchart: {
// // //           useMaxWidth: true,
// // //           htmlLabels: true,
// // //           curve: 'basis'
// // //         }
// // //       });

// // //       await mermaid.run({
// // //         nodes: [mermaidRef.current]
// // //       });

// // //       adjustNodeSize();
// // //     };

// // //     renderDiagram();
// // //   }, [chartDefinition, nodeWidth, nodeHeight]);

// // //   const adjustNodeSize = () => {
// // //     const svgElement = mermaidRef.current.querySelector('svg');
// // //     if (svgElement) {
// // //       const nodes = svgElement.querySelectorAll('.node rect, .node circle, .node ellipse, .node polygon');
// // //       nodes.forEach(node => {
// // //         node.setAttribute('width', nodeWidth);
// // //         node.setAttribute('height', nodeHeight);
// // //       });

// // //       // Adjust text position
// // //       const texts = svgElement.querySelectorAll('.node text');
// // //       texts.forEach(text => {
// // //         text.setAttribute('dy', nodeHeight / 4);
// // //       });

// // //       // Recalculate SVG viewBox
// // //       const bbox = svgElement.getBBox();
// // //       svgElement.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);
// // //     }
// // //   };

// // //   const handleNodeWidthChange = (event) => {
// // //     setNodeWidth(Number(event.target.value));
// // //   };

// // //   const handleNodeHeightChange = (event) => {
// // //     setNodeHeight(Number(event.target.value));
// // //   };

// // //   return (
// // //     <div>
// // //       <div>
// // //         <label htmlFor="node-width-control">Node Width: </label>
// // //         <input
// // //           id="node-width-control"
// // //           type="range"
// // //           min="50"
// // //           max="300"
// // //           value={nodeWidth}
// // //           onChange={handleNodeWidthChange}
// // //         />
// // //         <span>{nodeWidth}px</span>
// // //       </div>
// // //       <div>
// // //         <label htmlFor="node-height-control">Node Height: </label>
// // //         <input
// // //           id="node-height-control"
// // //           type="range"
// // //           min="30"
// // //           max="200"
// // //           value={nodeHeight}
// // //           onChange={handleNodeHeightChange}
// // //         />
// // //         <span>{nodeHeight}px</span>
// // //       </div>
// // //       <div ref={mermaidRef} style={{ width, height, overflow: 'auto' }}>
// // //         {chartDefinition}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default dynamic(() => Promise.resolve(MermaidDiagram), { ssr: false });
// // 'use client'
// // import React, { useState, useEffect, useRef } from 'react';
// // import dynamic from 'next/dynamic';

// // const MermaidDiagram = ({
// //   chartDefinition,
// //   width = '100%',
// //   height = 'auto',
// //   initialFontSize = 24,
// //   initialNodeWidth = 100,
// //   initialNodeHeight = 50
// // }) => {
// //   const [fontSize, setFontSize] = useState(initialFontSize);
// //   const [nodeWidth, setNodeWidth] = useState(initialNodeWidth);
// //   const [nodeHeight, setNodeHeight] = useState(initialNodeHeight);
// //   const mermaidRef = useRef(null);

// //   useEffect(() => {
// //     const renderDiagram = async () => {
// //       const mermaid = (await import('mermaid')).default;
// //       mermaid.initialize({
// //         startOnLoad: false,
// //         theme: 'default',
// //         flowchart: {
// //           useMaxWidth: true,
// //           htmlLabels: true,
// //           curve: 'basis'
// //         }
// //       });

// //       await mermaid.run({
// //         nodes: [mermaidRef.current]
// //       });

// //       adjustDiagram();
// //     };

// //     renderDiagram();
// //   }, [chartDefinition, fontSize, nodeWidth, nodeHeight]);

// //   const adjustDiagram = () => {
// //     const svgElement = mermaidRef.current.querySelector('svg');
// //     if (svgElement) {
// //       // Adjust font size
// //       svgElement.style.fontSize = `${fontSize}px`;
// //       const textElements = svgElement.querySelectorAll('text');
// //       textElements.forEach(text => {
// //         text.setAttribute('font-size', `${fontSize}px`);
// //         text.style.fontSize = `${fontSize}px`;
// //       });

// //       // Adjust node size
// //       const nodes = svgElement.querySelectorAll('.node rect, .node circle, .node ellipse, .node polygon');
// //       nodes.forEach(node => {
// //         node.setAttribute('width', nodeWidth);
// //         node.setAttribute('height', nodeHeight);
// //       });

// //       // Adjust text position
// //       const nodeTexts = svgElement.querySelectorAll('.node text');
// //       nodeTexts.forEach(text => {
// //         text.setAttribute('dy', nodeHeight / 4);
// //       });

// //       // Recalculate SVG viewBox
// //       const bbox = svgElement.getBBox();
// //       svgElement.setAttribute('viewBox', `0 0 ${bbox.width} ${bbox.height}`);
// //     }
// //   };

// //   const handleFontSizeChange = (event) => setFontSize(Number(event.target.value));
// //   const handleNodeWidthChange = (event) => setNodeWidth(Number(event.target.value));
// //   const handleNodeHeightChange = (event) => setNodeHeight(Number(event.target.value));

// //   return (
// //     <div>
// //       <div>
// //         <label htmlFor="font-size-control">Font Size: </label>
// //         <input
// //           id="font-size-control"
// //           type="range"
// //           min="12"
// //           max="48"
// //           value={fontSize}
// //           onChange={handleFontSizeChange}
// //         />
// //         <span>{fontSize}px</span>
// //       </div>
// //       <div>
// //         <label htmlFor="node-width-control">Node Width: </label>
// //         <input
// //           id="node-width-control"
// //           type="range"
// //           min="50"
// //           max="300"
// //           value={nodeWidth}
// //           onChange={handleNodeWidthChange}
// //         />
// //         <span>{nodeWidth}px</span>
// //       </div>
// //       <div>
// //         <label htmlFor="node-height-control">Node Height: </label>
// //         <input
// //           id="node-height-control"
// //           type="range"
// //           min="30"
// //           max="200"
// //           value={nodeHeight}
// //           onChange={handleNodeHeightChange}
// //         />
// //         <span>{nodeHeight}px</span>
// //       </div>
// //       <div ref={mermaidRef} style={{ width, height, overflow: 'auto' }}>
// //         {chartDefinition}
// //       </div>
// //     </div>
// //   );
// // };

// // export default dynamic(() => Promise.resolve(MermaidDiagram), { ssr: false });
// // 'use client'
// // import React, { useEffect, useRef } from 'react';
// // import mermaid from 'mermaid';

// // const MermaidDiagram = ({ chartDefinition, width = '100%', height = 'auto' }) => {
// //   const mermaidRef = useRef(null);

// //   useEffect(() => {
// //     mermaid.initialize({
// //       startOnLoad: false,
// //       theme: 'default',
// //       flowchart: {
// //         nodeSpacing: 30,
// //         rankSpacing: 50,
// //         curve: 'basis'
// //       },
// //       themeVariables: {
// //         fontSize: '24px',
// //         nodeTextSize: '24px'
// //       }
// //     });

// //     mermaid.render('mermaid-diagram', chartDefinition).then(({ svg }) => {
// //       if (mermaidRef.current) {
// //         mermaidRef.current.innerHTML = svg;
// //       }
// //     });
// //   }, [chartDefinition]);

// //   return <div ref={mermaidRef} style={{ width, height }} />;
// // };

// // export default MermaidDiagram;
// 'use client'
// import React, { useEffect, useRef } from 'react';
// import mermaid from 'mermaid';

// mermaid.initialize({
//   startOnLoad: false,
//   theme: 'default',
//   flowchart: {
//     nodeSpacing: 30,
//     rankSpacing: 50,
//     curve: 'basis'
//   },
//   themeVariables: {
//     fontSize: '24px',
//     nodeTextSize: '24px'
//   }
// });

// const MermaidDiagram = ({ chartDefinition, width = '100%', height = 'auto' }) => {
//   const mermaidRef = useRef(null);

//   useEffect(() => {
//     const renderDiagram = async () => {
//       if (mermaidRef.current) {
//         mermaidRef.current.innerHTML = '';
//         const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
//         try {
//           const { svg } = await mermaid.render(id, chartDefinition);
//           mermaidRef.current.innerHTML = svg;
//         } catch (error) {
//           console.error('Mermaid rendering error:', error);
//           mermaidRef.current.innerHTML = 'Error rendering diagram';
//         }
//       }
//     };

//     renderDiagram();
//   }, [chartDefinition]);

//   return <div ref={mermaidRef} style={{ width, height }} />;
// };

// export default MermaidDiagram;
'use client'
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  flowchart: {
    nodeSpacing: 100,
    rankSpacing: 70,
    curve: 'basis'
  }
});

const MermaidDiagram = ({ 
  chartDefinition, 
  width = '100%', 
  height = 'auto',
  scale = 1,
  className = ''
}) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (mermaidRef.current) {
        mermaidRef.current.innerHTML = '';
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        try {
          const { svg } = await mermaid.render(id, chartDefinition);
          mermaidRef.current.innerHTML = svg;
          
          // Apply scaling to the SVG
          const svgElement = mermaidRef.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.transform = `scale(${scale})`;
            svgElement.style.transformOrigin = 'top left';
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          mermaidRef.current.innerHTML = 'Error rendering diagram';
        }
      }
    };

    renderDiagram();
  }, [chartDefinition, scale]);

  return (
    <div 
      ref={mermaidRef} 
      style={{ 
        width, 
        height, 
        overflow: 'auto'
      }}
      className={className}
    />
  );
};

export default MermaidDiagram;