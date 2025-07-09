


// // // import React from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import ReactDOMServer from 'react-dom/server';

// // // export const renderAcademicBlockHTML = (content, blockType) => {
// // //   const type = (blockType || 'theorem').toLowerCase();
  
// // //   const styles = {
// // //     // Original themes
// // //     theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// // //     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// // //     lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// // //     example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// // //     proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
    
// // //     // Thick left borders
// // //     thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// // //     thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
// // //     thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
// // //     thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
// // //     thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },
    
// // //     // Color themes
// // //     gray: { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// // //     yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' }
// // //   };
  
// // //   const contentLines = content.trim().split(/\r?\n/);
// // //   const titleRaw = contentLines[0].trim();
// // //   const bodyRaw = contentLines.slice(1).join('\n');
  
// // //   // Process math in title
// // //   const titleWithMath = processMathContent(titleRaw);
  
// // //   // Process math in body, keeping line breaks
// // //   const bodyLines = bodyRaw.split('\n');
// // //   const processedBodyLines = bodyLines.map(line => processMathContent(line));
// // //   const bodyWithMath = processedBodyLines.join('<br>');
  
// // //   let style;
  
// // //   // Handle theme selection
// // //   if (type === 'gray' || type === 'yellow') {
// // //     style = styles[type];
// // //   } else if (type.startsWith('thick_left_')) {
// // //     style = styles[type] || styles.thick_left_theorem;
// // //   } else {
// // //     style = styles[type] || styles.theorem;
// // //   }
  
// // //   return `
// // //     <div style="margin:20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
// // //       <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${titleWithMath}</div>
// // //       <div style="font-size:1em;">${bodyWithMath}</div>
// // //     </div>
// // //   `.trim();
// // // };

// // // // Helper function to process math content
// // // function processMathContent(content) {
// // //   if (!content) return '';
  
// // //   // Split content to isolate math expressions
// // //   const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  
// // //   const processedParts = parts.map(part => {
// // //     if (part.startsWith('$$') && part.endsWith('$$')) {
// // //       // Block math
// // //       const math = part.slice(2, -2);
// // //       const blockMathElement = <BlockMath math={math} />;
// // //       return ReactDOMServer.renderToString(blockMathElement);
// // //     } else if (part.startsWith('$') && part.endsWith('$')) {
// // //       // Inline math
// // //       const math = part.slice(1, -1);
// // //       const inlineMathElement = <InlineMath math={math} />;
// // //       return ReactDOMServer.renderToString(inlineMathElement);
// // //     }
// // //     return part;
// // //   });
  
// // //   return processedParts.join('');
// // // }


// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import ReactDOMServer from 'react-dom/server';

// // export const renderAcademicBlockHTML = (content, blockType) => {
// //   const type = (blockType || 'theorem').toLowerCase();
  
// //   const styles = {
// //     // Original themes
// //     theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// //     lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// //     example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// //     proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
    
// //     // Thick left borders
// //     thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //     thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
// //     thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
// //     thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
// //     thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },
    
// //     // Color themes
// //     gray: { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' }
// //   };
  
// //   const contentLines = content.trim().split(/\r?\n/);
// //   const titleRaw = contentLines[0].trim();
// //   const bodyRaw = contentLines.slice(1).join('\n');
  
// //   // Process math in title
// //   const titleWithMath = processMathContent(titleRaw);
  
// //   // Process math in body, keeping line breaks
// //   const bodyLines = bodyRaw.split('\n');
// //   const processedBodyLines = bodyLines.map(line => processMathContent(line));
// //   const bodyWithMath = processedBodyLines.join('<br>');
  
// //   let style;
  
// //   // Handle theme selection
// //   if (type === 'gray' || type === 'yellow') {
// //     style = styles[type];
// //   } else if (type.startsWith('thick_left_')) {
// //     style = styles[type] || styles.thick_left_theorem;
// //   } else {
// //     style = styles[type] || styles.theorem;
// //   }
  
// //   return `
// //     <div style="margin:20px 0 -20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
// //       <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${titleWithMath}</div>
// //       <div style="font-size:1em;">${bodyWithMath}</div>
// //     </div>
// //   `.trim();
// // };

// // // Helper function to process math content
// // function processMathContent(content) {
// //   if (!content) return '';
  
// //   // Split content to isolate math expressions
// //   const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  
// //   const processedParts = parts.map(part => {
// //     if (part.startsWith('$$') && part.endsWith('$$')) {
// //       // Block math
// //       const math = part.slice(2, -2);
// //       const blockMathElement = <BlockMath math={math} />;
// //       return ReactDOMServer.renderToString(blockMathElement);
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       // Inline math
// //       const math = part.slice(1, -1);
// //       const inlineMathElement = <InlineMath math={math} />;
// //       return ReactDOMServer.renderToString(inlineMathElement);
// //     }
// //     return part;
// //   });
  
// //   return processedParts.join('');
// // }


// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import ReactDOMServer from 'react-dom/server';

// export const renderAcademicBlockHTML = (content, blockType) => {
//   const type = (blockType || 'theorem').toLowerCase();
  
//   const styles = {
//     // Original themes
//     theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
//     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
//     lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
//     example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
//     proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
    
//     // Thick left borders
//     thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
//     thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
//     thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
//     thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
//     thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },
    
//     // Color themes
//     gray: { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
//     yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' }
//   };
  
//   const lines = content.trim().split(/\r?\n/);
//   const title = processMathContent(lines[0] || '');
//   const body = lines.slice(1).map(line => {
//     if (line.trim() === '') return '<br>';
//     return processMathContent(line);
//   }).join('<br>');
  
//   let style;
  
//   if (type === 'gray' || type === 'yellow') {
//     style = styles[type];
//   } else if (type.startsWith('thick_left_')) {
//     style = styles[type] || styles.thick_left_theorem;
//   } else {
//     style = styles[type] || styles.theorem;
//   }
  
//   return `
//     <div style="margin:20px 0 -20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
//       <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${title}</div>
//       <div style="font-size:1em;">${body}</div>
//     </div>
//   `.trim();
// };

// function processMathContent(content) {
//   if (!content) return '';
  
//   const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  
//   const processedParts = parts.map(part => {
//     if (part.startsWith('$$') && part.endsWith('$$')) {
//       const math = part.slice(2, -2);
//       const blockMathElement = <BlockMath math={math} />;
//       return ReactDOMServer.renderToString(blockMathElement);
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       const math = part.slice(1, -1);
//       const inlineMathElement = <InlineMath math={math} />;
//       return ReactDOMServer.renderToString(inlineMathElement);
//     }
//     return part;
//   });
  
//   return processedParts.join('');
// }

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ReactDOMServer from 'react-dom/server';

export const renderAcademicBlockHTML = (content, blockType) => {
  const type = (blockType || 'theorem').toLowerCase();
  
  const styles = {
    // Original themes
    theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
    definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
    lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
    example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
    proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
    
    // Thick left borders
    thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
    thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
    thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
    thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
    thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },
    
    // Color themes
    gray: { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
    yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' }
  };
  
  const contentLines = content.trim().split(/\r?\n/);
  const titleRaw = contentLines[0].trim();
  const bodyRaw = contentLines.slice(1).join('\n');
  
  // Process math in title
  const titleWithMath = processMathContent(titleRaw);
  
  // Process math in body, keeping line breaks
  const bodyWithMath = processMathContent(bodyRaw).replace(/\n/g, '<br>');
  
  let style;
  
  // Handle theme selection
  if (type === 'gray' || type === 'yellow') {
    style = styles[type];
  } else if (type.startsWith('thick_left_')) {
    style = styles[type] || styles.thick_left_theorem;
  } else {
    style = styles[type] || styles.theorem;
  }
  
  return `
    <div style="margin:20px 0 -20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
      <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${titleWithMath}</div>
      <div style="font-size:1em;">${bodyWithMath}</div>
    </div>
  `.trim();
};

// Helper function to process math content
function processMathContent(content) {
  if (!content) return '';
  
  // Split content to isolate math expressions
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
  
  const processedParts = parts.map(part => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // Block math
      const math = part.slice(2, -2);
      const blockMathElement = <BlockMath math={math} />;
      return ReactDOMServer.renderToString(blockMathElement);
    } else if (part.startsWith('$') && part.endsWith('$')) {
      // Inline math
      const math = part.slice(1, -1);
      const inlineMathElement = <InlineMath math={math} />;
      return ReactDOMServer.renderToString(inlineMathElement);
    }
    return part;
  });
  
  return processedParts.join('');
}