// // // // // // // // // 'use client'
// // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // import mermaid from 'mermaid';
// // // // // // // // // import './MermaidDiagram.css'

// // // // // // // // // const MermaidDiagram = ({ chartDefinition }) => {
// // // // // // // // //   const mermaidRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Ensure this runs only client-side
// // // // // // // // //     if (typeof window !== "undefined") {
// // // // // // // // //       mermaid.initialize({
// // // // // // // // //         startOnLoad: false,
// // // // // // // // //         theme: 'neutral', // or 'base', 'forest', etc., depending on your preference
// // // // // // // // //         themeVariables: {
// // // // // // // // //           // Custom color configurations
// // // // // // // // //           primaryColor: 'red', // Example: Tomato for primary elements
// // // // // // // // //           primaryBorderColor: 'gray', // Border color for primary elements
// // // // // // // // //           lineColor: '#7155cc', // Color for lines (including arrow lines)
// // // // // // // // //           textColor: 'blue', // Text color
// // // // // // // // //           nodeBackgroundColor: '#5224bf', // Light yellow background for nodes
// // // // // // // // //           clusterBkg: '#f0e68c', // Light khaki background for clusters
// // // // // // // // //           // You might need to adjust secondaryColor or tertiaryColor depending on your diagram
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //       setTimeout(() => {
// // // // // // // // //         mermaid.init(undefined, mermaidRef.current);
// // // // // // // // //       }, 0);
// // // // // // // // //     }
// // // // // // // // //   }, [chartDefinition]);

// // // // // // // // //   return <div className="mermaidDiagramContainer" ref={mermaidRef}>{chartDefinition}</div>;
// // // // // // // // // };

// // // // // // // // // export default MermaidDiagram;
// // // // // // // // 'use client'
// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import mermaid from 'mermaid';
// // // // // // // // import './MermaidDiagram.css'

// // // // // // // // const MermaidDiagram = ({ chartDefinition }) => {
// // // // // // // //     const mermaidRef = useRef(null);
  
// // // // // // // //     // useEffect(() => {
// // // // // // // //     //   if (typeof window !== "undefined") {
// // // // // // // //     //     mermaid.initialize({
// // // // // // // //     //       startOnLoad: false,
// // // // // // // //     //       theme: 'default',
// // // // // // // //     //       themeVariables:{
// // // // // // // //     //         textColor:'blue',
// // // // // // // //     //         fontSize:'50px',
// // // // // // // //     //         lineColor: '#7155cc',

// // // // // // // //     //       }
// // // // // // // //     //     });
// // // // // // // //     //     setTimeout(() => {
// // // // // // // //     //       mermaid.init(undefined, mermaidRef.current);
// // // // // // // //     //     }, 0);
// // // // // // // //     //   }
// // // // // // // //     // }, [chartDefinition]);


// // // // // // // //     // useEffect(() => {
// // // // // // // //     //     if (typeof window !== "undefined") {
// // // // // // // //     //       mermaid.initialize({
// // // // // // // //     //         startOnLoad: false,
// // // // // // // //     //         theme: 'neutral',
// // // // // // // //     //       });
// // // // // // // //     //       setTimeout(() => {
// // // // // // // //     //         mermaid.init(undefined, mermaidRef.current);
      
// // // // // // // //     //         // Adjust SVG size after Mermaid initialization
// // // // // // // //     //         const svgElement = mermaidRef.current.querySelector('svg');
// // // // // // // //     //         if (svgElement) {
// // // // // // // //     //           svgElement.style.width = '100%';
// // // // // // // //     //           svgElement.style.height = 'auto';
// // // // // // // //     //         }
// // // // // // // //     //       }, 0);
// // // // // // // //     //     }
// // // // // // // //     //   }, [chartDefinition]);
      

// // // // // // // //     // useEffect(() => {
// // // // // // // //     //     if (typeof window !== "undefined") {
// // // // // // // //     //       mermaid.initialize({
// // // // // // // //     //         startOnLoad: false,
// // // // // // // //     //         theme: 'base',
// // // // // // // //     //         themeVariables: {
             
// // // // // // // //     //           textColor:'blue',
// // // // // // // //     //           fontSize:"100px",

// // // // // // // //     //         },
// // // // // // // //     //       });
// // // // // // // //     //       setTimeout(() => {
// // // // // // // //     //         mermaid.init(undefined, mermaidRef.current);
// // // // // // // //     //       }, 0);
// // // // // // // //     //     }
// // // // // // // //     //   }, [chartDefinition]);
      
// // // // // // // // // useEffect(() => {
// // // // // // // // //         if (typeof window !== "undefined") {
// // // // // // // // //           mermaid.initialize({
// // // // // // // // //             startOnLoad: false,
// // // // // // // // //             theme: 'neutral',
// // // // // // // // //             themeVariables:{
// // // // // // // // //                 textColor:'blue',
// // // // // // // // //                 fontSize:'100px'
// // // // // // // // //             }
// // // // // // // // //           });
// // // // // // // // //           setTimeout(() => {
// // // // // // // // //             mermaid.init(undefined, mermaidRef.current);
      
// // // // // // // // //             // Example of directly manipulating the SVG to adjust node sizes
// // // // // // // // //             const svgElement = mermaidRef.current.querySelector('svg');
// // // // // // // // //             if (svgElement) {
// // // // // // // // //               const nodes = svgElement.querySelectorAll('.node');
// // // // // // // // //               nodes.forEach(node => {
// // // // // // // // //                 // Directly manipulate node attributes or styles here
// // // // // // // // //                 // For example, adjusting the font size or padding around text
// // // // // // // // //                 const textElements = node.querySelectorAll('text');
// // // // // // // // //                 textElements.forEach(text => {
// // // // // // // // //                   text.style.fontSize = '50px'; // Increase text size
// // // // // // // // //                 });
// // // // // // // // //                 // This is just an illustrative example; specific attributes will vary
// // // // // // // // //               });
// // // // // // // // //             }
// // // // // // // // //           }, 0);
// // // // // // // // //         }
// // // // // // // // //       }, [chartDefinition]);
          
// // // // // // // // useEffect(() => {
// // // // // // // //     if (typeof window !== "undefined") {
// // // // // // // //       mermaid.initialize({ 
// // // // // // // //         startOnLoad: false,
// // // // // // // //         theme:'default',
// // // // // // // //         themeVariables:{
// // // // // // // //             textColor:'blue',
// // // // // // // //             fontSize:'56px',
// // // // // // // //             lineColor: '#7155cc',

// // // // // // // //         }
// // // // // // // //      });
// // // // // // // //       setTimeout(() => {
// // // // // // // //         mermaid.init(undefined, mermaidRef.current);
  
// // // // // // // //         // Adjust font size for all text elements in the SVG
// // // // // // // //         const textElements = mermaidRef.current.querySelectorAll('svg text');
// // // // // // // //         textElements.forEach(text => {
// // // // // // // //           text.style.fontSize = '46px'; // Or any other font size
// // // // // // // //         });
// // // // // // // //       }, 0);
// // // // // // // //     }
// // // // // // // //   }, []);
  
// // // // // // // //     return (
// // // // // // // //       <div className="mermaidDiagramContainer" ref={mermaidRef}>
// // // // // // // //         {chartDefinition}
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };
// // // // // // // //   export default MermaidDiagram;
// // // // // // // 'use client'
// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import mermaid from 'mermaid';
// // // // // // // import './MermaidDiagram.css'

// // // // // // // const MermaidDiagram = ({ 
// // // // // // //   chartDefinition, 
// // // // // // //   maxWidth = '600px', 
// // // // // // //   fontSize = '14px',
// // // // // // //   textColor = 'blue',
// // // // // // //   lineColor = '#7155cc'
// // // // // // // }) => {
// // // // // // //   const mermaidRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     if (typeof window !== "undefined") {
// // // // // // //       mermaid.initialize({ 
// // // // // // //         startOnLoad: false,
// // // // // // //         theme: 'default',
// // // // // // //         themeVariables: {
// // // // // // //           textColor: textColor,
// // // // // // //           fontSize: fontSize,
// // // // // // //           lineColor: lineColor,
// // // // // // //         },
// // // // // // //         flowchart: {
// // // // // // //           useMaxWidth: true,
// // // // // // //           htmlLabels: true,
// // // // // // //           curve: 'basis',
// // // // // // //         },
// // // // // // //       });
      
// // // // // // //       setTimeout(() => {
// // // // // // //         mermaid.init(undefined, mermaidRef.current);

// // // // // // //         // Scale down the SVG
// // // // // // //         const svgElement = mermaidRef.current.querySelector('svg');
// // // // // // //         if (svgElement) {
// // // // // // //           svgElement.style.width = '100%';
// // // // // // //           svgElement.style.height = 'auto';
// // // // // // //           svgElement.style.maxWidth = maxWidth;
// // // // // // //         }

// // // // // // //         // Adjust font size for all text elements in the SVG
// // // // // // //         const textElements = mermaidRef.current.querySelectorAll('svg text');
// // // // // // //         textElements.forEach(text => {
// // // // // // //           text.style.fontSize = fontSize;
// // // // // // //         });
// // // // // // //       }, 0);
// // // // // // //     }
// // // // // // //   }, [chartDefinition, maxWidth, fontSize, textColor, lineColor]);

// // // // // // //   return (
// // // // // // //     <div className="mermaidDiagramContainer" ref={mermaidRef} style={{ maxWidth: maxWidth }}>
// // // // // // //       {chartDefinition}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MermaidDiagram;
// // // // // // 'use client'
// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import mermaid from 'mermaid';
// // // // // // import './MermaidDiagram.css'

// // // // // // const MermaidDiagram = ({ 
// // // // // //   chartDefinition, 
// // // // // //   nodeSpacing = 50,
// // // // // //   rankSpacing = 50,
// // // // // //   fontSize = 14,
// // // // // //   edgeLabelsBackground = 'none',
// // // // // //   diagramPadding = 8
// // // // // // }) => {
// // // // // //   const mermaidRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     if (typeof window !== "undefined") {
// // // // // //       mermaid.initialize({ 
// // // // // //         startOnLoad: false,
// // // // // //         theme: 'default',
// // // // // //         flowchart: {
// // // // // //           nodeSpacing: nodeSpacing,
// // // // // //           rankSpacing: rankSpacing,
// // // // // //           curve: 'basis',
// // // // // //           useMaxWidth: true,
// // // // // //         },
// // // // // //         themeVariables: {
// // // // // //           fontSize: `${fontSize}px`,
// // // // // //           edgeLabelBackground: edgeLabelsBackground,
// // // // // //         },
// // // // // //         gantt: {
// // // // // //           fontSize: fontSize,
// // // // // //         },
// // // // // //         sequence: {
// // // // // //           diagramMarginY: diagramPadding,
// // // // // //           boxMargin: diagramPadding,
// // // // // //           noteMargin: diagramPadding,
// // // // // //           messageMargin: diagramPadding,
// // // // // //         }
// // // // // //       });
      
// // // // // //       setTimeout(() => {
// // // // // //         mermaid.init(undefined, mermaidRef.current);
// // // // // //       }, 0);
// // // // // //     }
// // // // // //   }, [chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

// // // // // //   return (
// // // // // //     <div className="mermaidDiagramContainer" ref={mermaidRef}>
// // // // // //       {chartDefinition}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MermaidDiagram;
// // // // // 'use client'
// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import mermaid from 'mermaid';
// // // // // import './MermaidDiagram.css';

// // // // // const MermaidDiagram = ({ 
// // // // //   chartDefinition, 
// // // // //   nodeSpacing = 50,
// // // // //   rankSpacing = 50,
// // // // //   fontSize = 14,
// // // // //   edgeLabelsBackground = 'none',
// // // // //   diagramPadding = 8
// // // // // }) => {
// // // // //   const mermaidRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     if (typeof window !== "undefined") {
// // // // //       mermaid.initialize({ 
// // // // //         startOnLoad: false,
// // // // //         theme: 'default',
// // // // //         flowchart: {
// // // // //           nodeSpacing: nodeSpacing,
// // // // //           rankSpacing: rankSpacing,
// // // // //           curve: 'basis',
// // // // //           useMaxWidth: true,
// // // // //         },
// // // // //         themeVariables: {
// // // // //           fontSize: `${fontSize}px`,
// // // // //           edgeLabelBackground: edgeLabelsBackground,
// // // // //         },
// // // // //         gantt: {
// // // // //           fontSize: fontSize,
// // // // //         },
// // // // //         sequence: {
// // // // //           diagramMarginY: diagramPadding,
// // // // //           boxMargin: diagramPadding,
// // // // //           noteMargin: diagramPadding,
// // // // //           messageMargin: diagramPadding,
// // // // //         }
// // // // //       });
      
// // // // //       setTimeout(() => {
// // // // //         mermaid.init(undefined, mermaidRef.current);
// // // // //       }, 0);
// // // // //     }
// // // // //   }, [chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

// // // // //   return (
// // // // //     <div className="mermaidDiagramContainer" ref={mermaidRef}>
// // // // //       {chartDefinition}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MermaidDiagram;
// // // // 'use client'
// // // // import React, { useEffect, useRef } from 'react';
// // // // import mermaid from 'mermaid';
// // // // import './MermaidDiagram.css';

// // // // const MermaidDiagram = ({ 
// // // //   chartDefinition, 
// // // //   nodeSpacing = 50,
// // // //   rankSpacing = 50,
// // // //   fontSize = 14,
// // // //   edgeLabelsBackground = 'none',
// // // //   diagramPadding = 8
// // // // }) => {
// // // //   const mermaidRef = useRef(null);

// // // //   useEffect(() => {
// // // //     if (typeof window !== "undefined") {
// // // //       mermaid.initialize({ 
// // // //         startOnLoad: false,
// // // //         theme: 'default',
// // // //         flowchart: {
// // // //           nodeSpacing: nodeSpacing,
// // // //           rankSpacing: rankSpacing,
// // // //           curve: 'basis',
// // // //           useMaxWidth: true,
// // // //         },
// // // //         themeVariables: {
// // // //           fontSize: `${fontSize}px`,
// // // //           edgeLabelBackground: edgeLabelsBackground,
// // // //         },
// // // //         gantt: {
// // // //           fontSize: fontSize,
// // // //         },
// // // //         sequence: {
// // // //           diagramMarginY: diagramPadding,
// // // //           boxMargin: diagramPadding,
// // // //           noteMargin: diagramPadding,
// // // //           messageMargin: diagramPadding,
// // // //         }
// // // //       });
      
// // // //       setTimeout(() => {
// // // //         mermaid.init(undefined, mermaidRef.current);
// // // //       }, 0);
// // // //     }
// // // //   }, [chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

// // // //   return (
// // // //     <div className="mermaidDiagramContainer" ref={mermaidRef}>
// // // //       {chartDefinition}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MermaidDiagram;
// // // 'use client'
// // // import React, { useEffect, useRef } from 'react';
// // // import mermaid from 'mermaid';
// // // import './MermaidDiagram.css';

// // // const MermaidDiagram = ({ 
// // //   chartDefinition, 
// // //   nodeSpacing = 50,
// // //   rankSpacing = 50,
// // //   fontSize = 14,
// // //   edgeLabelsBackground = 'none',
// // //   diagramPadding = 8
// // // }) => {
// // //   const mermaidRef = useRef(null);

// // //   useEffect(() => {
// // //     if (typeof window !== "undefined") {
// // //       mermaid.initialize({ 
// // //         startOnLoad: false,
// // //         theme: 'default',
// // //         flowchart: {
// // //           nodeSpacing: nodeSpacing,
// // //           rankSpacing: rankSpacing,
// // //           curve: 'basis',
// // //           useMaxWidth: true,
// // //         },
// // //         themeVariables: {
// // //           fontSize: `${fontSize}px`,
// // //           edgeLabelBackground: edgeLabelsBackground,
// // //         },
// // //         gantt: {
// // //           fontSize: fontSize,
// // //         },
// // //         sequence: {
// // //           diagramMarginY: diagramPadding,
// // //           boxMargin: diagramPadding,
// // //           noteMargin: diagramPadding,
// // //           messageMargin: diagramPadding,
// // //         }
// // //       });
      
// // //       setTimeout(() => {
// // //         mermaid.init(undefined, mermaidRef.current);
// // //       }, 0);
// // //     }
// // //   }, [chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

// // //   return (
// // //     <div className="mermaidDiagramContainer" ref={mermaidRef}>
// // //       <div className="mermaid">
// // //         {chartDefinition}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MermaidDiagram;
// // 'use client'
// // import React, { useEffect, useRef, useState } from 'react';
// // import mermaid from 'mermaid';
// // import './MermaidDiagram.css';

// // const MermaidDiagram = ({ 
// //   chartDefinition, 
// //   nodeSpacing = 50,
// //   rankSpacing = 50,
// //   fontSize = 14,
// //   edgeLabelsBackground = 'none',
// //   diagramPadding = 8
// // }) => {
// //   const mermaidRef = useRef(null);
// //   const [isClient, setIsClient] = useState(false);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   useEffect(() => {
// //     if (isClient && typeof window !== "undefined") {
// //       mermaid.initialize({ 
// //         startOnLoad: false,
// //         theme: 'default',
// //         flowchart: {
// //           nodeSpacing: nodeSpacing,
// //           rankSpacing: rankSpacing,
// //           curve: 'basis',
// //           useMaxWidth: true,
// //         },
// //         themeVariables: {
// //           fontSize: `${fontSize}px`,
// //           edgeLabelBackground: edgeLabelsBackground,
// //         },
// //         gantt: {
// //           fontSize: fontSize,
// //         },
// //         sequence: {
// //           diagramMarginY: diagramPadding,
// //           boxMargin: diagramPadding,
// //           noteMargin: diagramPadding,
// //           messageMargin: diagramPadding,
// //         }
// //       });
      
// //       setTimeout(() => {
// //         mermaid.init(undefined, mermaidRef.current);
// //       }, 0);
// //     }
// //   }, [isClient, chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

// //   return (
// //     <div className="mermaidDiagramContainer" ref={mermaidRef}>
// //       {isClient && (
// //         <div className="mermaid">
// //           {chartDefinition}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MermaidDiagram;

// 'use client'
// import React, { useEffect, useRef, useState } from 'react';
// import mermaid from 'mermaid';
// import './MermaidDiagram.css';

// const MermaidDiagram = ({ 
//   chartDefinition, 
//   nodeSpacing = 50,
//   rankSpacing = 50,
//   fontSize = 14,
//   edgeLabelsBackground = 'none',
//   diagramPadding = 8
// }) => {
//   const mermaidRef = useRef(null);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (isClient && typeof window !== "undefined") {
//       mermaid.initialize({ 
//         startOnLoad: false,
//         theme: 'default',
//         flowchart: {
//           nodeSpacing: nodeSpacing,
//           rankSpacing: rankSpacing,
//           curve: 'basis',
//           useMaxWidth: true,
//         },
//         themeVariables: {
//           fontSize: `${fontSize}px`,
//           edgeLabelBackground: edgeLabelsBackground,
//         },
//         gantt: {
//           fontSize: fontSize,
//         },
//         sequence: {
//           diagramMarginY: diagramPadding,
//           boxMargin: diagramPadding,
//           noteMargin: diagramPadding,
//           messageMargin: diagramPadding,
//         }
//       });

//       setTimeout(() => {
//         mermaid.contentLoaded();
//         mermaid.init(undefined, mermaidRef.current);
//       }, 0);
//     }
//   }, [isClient, chartDefinition, nodeSpacing, rankSpacing, fontSize, edgeLabelsBackground, diagramPadding]);

//   return (
//     <div className="mermaidDiagramContainer" ref={mermaidRef}>
//       {isClient && (
//         <div className="mermaid">
//           {chartDefinition}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MermaidDiagram;
'use client'
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import './MermaidDiagram.css'

const MermaidDiagram = ({ 
  chartDefinition, 
  nodeWidth = 30,
  nodeHeight = 30,
  fontSize = 10,
  fontFamily = 'Arial, sans-serif',
  maxWidth=500
}) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      mermaid.initialize({ 
        startOnLoad: false,
        theme: 'default',
        flowchart: {
          nodeSpacing: 20,
          rankSpacing: 20,
          curve: 'basis',
          useMaxWidth: true,
        },
        themeVariables: {
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
        }
      });
      
      setTimeout(() => {
        mermaid.init(undefined, mermaidRef.current);

        // Adjust node sizes after rendering
        const svgElement = mermaidRef.current.querySelector('svg');
        if (svgElement) {
          const nodes = svgElement.querySelectorAll('.node rect, .node circle, .node ellipse, .node polygon');
          nodes.forEach(node => {
            node.setAttribute('width', nodeWidth);
            node.setAttribute('height', nodeHeight);
          });

          // Adjust text position
          const texts = svgElement.querySelectorAll('.node text');
          texts.forEach(text => {
            text.setAttribute('font-size', `${fontSize}px`);
            text.setAttribute('dy', '0.3em'); // Center text vertically
          });

          // Adjust the viewBox to fit the new node sizes
          svgElement.setAttribute('width', '300px');
          svgElement.setAttribute('height', '300px');
        }
      }, 0);
    }
  }, [chartDefinition, nodeWidth, nodeHeight, fontSize, fontFamily]);

  return (
    <div className="mermaidDiagramContainer" style={{width:`${maxWidth}`}} ref={mermaidRef}>
      {chartDefinition}
    </div>
  );
};

export default MermaidDiagram;