// // // // export const renderAcademicBlockHTML = (content, blockType) => {
// // // //     // Base styling for all blocks
// // // //     const baseStyles = {
// // // //       block: "margin: 20px 0; padding: 15px; border-radius: 8px;",
// // // //       header: "font-weight: bold; margin-bottom: 10px;",
// // // //       content: "font-size: 1em;"
// // // //     };
  
// // // //     // Block-specific styles
// // // //     const blockStyles = {
// // // //       theorem: {
// // // //         block: "border: 2px solid #0040a0; background-color: #f8f9ff;",
// // // //         header: "color: #0040a0;",
// // // //         content: ""
// // // //       },
// // // //       definition: {
// // // //         block: "border: 2px solid #006000; background-color: #f0fff0;",
// // // //         header: "color: #006000;",
// // // //         content: ""
// // // //       },
// // // //       lemma: {
// // // //         block: "border: 2px solid #800060; background-color: #fff8ff;",
// // // //         header: "color: #800060;",
// // // //         content: ""
// // // //       },
// // // //       example: {
// // // //         block: "border: 2px solid #404080; border-left: 8px solid #404080; background-color: #f8f8ff;",
// // // //         header: "color: #404080;",
// // // //         content: ""
// // // //       },
// // // //       proof: {
// // // //         block: "border: 1px solid #505050; background-color: #fafafa;",
// // // //         header: "color: #505050;",
// // // //         content: ""
// // // //       }
// // // //     };
  
// // // //     // Get proper style or fallback to default
// // // //     const style = blockStyles[blockType.toLowerCase()] || blockStyles.theorem;
    
// // // //     // Parse content to extract title and body
// // // //     const contentParts = content.split('\n');
// // // //     const title = contentParts[0] || blockType;
// // // //     const body = contentParts.slice(1).join('\n');
    
// // // //     // Generate HTML with inline styles
// // // //     return `
// // // //       <div style="${baseStyles.block} ${style.block}">
// // // //         <div style="${baseStyles.header} ${style.header}">${title}</div>
// // // //         <div style="${baseStyles.content} ${style.content}">${body}</div>
// // // //       </div>
// // // //     `;
// // // //   };


// // // export const renderAcademicBlockHTML = (content, blockType) => {
// // //     // Base styling for all blocks
// // //     const baseStyles = {
// // //       block: "margin: 20px 0; padding: 15px; border-radius: 8px;",
// // //       header: "font-weight: bold; margin-bottom: 10px;",
// // //       content: "font-size: 1em;"
// // //     };
      
// // //     // Block-specific styles
// // //     const blockStyles = {
// // //       theorem: {
// // //         block: "border: 2px solid #0040a0; background-color: #f8f9ff;",
// // //         header: "color: #0040a0;",
// // //         content: ""
// // //       },
// // //       definition: {
// // //         block: "border: 2px solid #006000; background-color: #f0fff0;",
// // //         header: "color: #006000;",
// // //         content: ""
// // //       },
// // //       lemma: {
// // //         block: "border: 2px solid #800060; background-color: #fff8ff;",
// // //         header: "color: #800060;",
// // //         content: ""
// // //       },
// // //       example: {
// // //         block: "border: 2px solid #404080; border-left: 8px solid #404080; background-color: #f8f8ff;",
// // //         header: "color: #404080;",
// // //         content: ""
// // //       },
// // //       proof: {
// // //         block: "border: 1px solid #505050; background-color: #fafafa;",
// // //         header: "color: #505050;",
// // //         content: ""
// // //       }
// // //     };
      
// // //     // Get proper style or fallback to default
// // //     const style = blockStyles[blockType.toLowerCase()] || blockStyles.theorem;
    
// // //     // Return complete HTML string with properly structured content
// // //     return `
// // //       <div style="${baseStyles.block} ${style.block}">
// // //         <div style="${baseStyles.header} ${style.header}">${content.split('\n')[0]}</div>
// // //         <div style="${baseStyles.content} ${style.content}">${content.split('\n').slice(1).join('\n')}</div>
// // //       </div>
// // //     `;
// // //   };


// // export const renderAcademicBlockHTML = (content, blockType) => {
// //     // Get block type or default to theorem
// //     const type = (blockType || 'theorem').toLowerCase();
    
// //     // Define style configurations
// //     const styles = {
// //       theorem: {
// //         borderStyle: '2px solid #0040a0',
// //         bgColor: '#f8f9ff',
// //         headerColor: '#0040a0'
// //       },
// //       definition: {
// //         borderStyle: '2px solid #006000',
// //         bgColor: '#f0fff0',
// //         headerColor: '#006000'
// //       },
// //       lemma: {
// //         borderStyle: '2px solid #800060',
// //         bgColor: '#fff8ff',
// //         headerColor: '#800060'
// //       },
// //       example: {
// //         borderStyle: '2px solid #404080; border-left: 8px solid #404080',
// //         bgColor: '#f8f8ff',
// //         headerColor: '#404080'
// //       },
// //       proof: {
// //         borderStyle: '1px solid #505050',
// //         bgColor: '#fafafa',
// //         headerColor: '#505050'
// //       }
// //     };
    
// //     // Get appropriate style or default to theorem
// //     const style = styles[type] || styles.theorem;
    
// //     // Split content into title and body
// //     const contentParts = content.trim().split('\n');
// //     const title = contentParts[0] || '';
// //     const body = contentParts.slice(1).join('\n');
    
// //     // Return the HTML string with properly escaped content
// //     return `
// //       <div style="margin: 20px 0; padding: 15px; border-radius: 8px; ${style.borderStyle}; background-color: ${style.bgColor};">
// //         <div style="font-weight: bold; margin-bottom: 10px; color: ${style.headerColor};">${title}</div>
// //         <div style="font-size: 1em;">${body}</div>
// //       </div>
// //     `.trim();
// //   };


// // export const renderAcademicBlockHTML = (content, blockType) => {
// //     // Get block type or default to theorem
// //     const type = (blockType || 'theorem').toLowerCase();
    
// //     // Define style configurations
// //     const styles = {
// //       theorem: {
// //         border: '2px solid #0040a0',
// //         background: '#f8f9ff',
// //         color: '#0040a0'
// //       },
// //       definition: {
// //         border: '2px solid #006000',
// //         background: '#f0fff0',
// //         color: '#006000'
// //       },
// //       lemma: {
// //         border: '2px solid #800060',
// //         background: '#fff8ff',
// //         color: '#800060'
// //       },
// //       example: {
// //         border: '2px solid #404080',
// //         borderLeft: '8px solid #404080',
// //         background: '#f8f8ff',
// //         color: '#404080'
// //       },
// //       proof: {
// //         border: '1px solid #505050',
// //         background: '#fafafa',
// //         color: '#505050'
// //       }
// //     };
    
// //     // Get appropriate style or default to theorem
// //     const style = styles[type] || styles.theorem;
    
// //     // Split content into title and body parts
// //     const contentLines = content.split('\n');
// //     const title = contentLines[0] || '';
// //     const body = contentLines.slice(1).join('\n');
    
// //     // Return the plain HTML string
// //     return `
// //   <div style="margin: 20px 0; padding: 15px; border-radius: 8px; border: ${style.border}; background-color: ${style.background};">
// //     <div style="font-weight: bold; margin-bottom: 10px; color: ${style.color};">${title}</div>
// //     <div style="font-size: 1em;">${body}</div>
// //   </div>`.trim();
// //   };


// // export const renderAcademicBlockHTML = (content, blockType) => {
// //     const type = (blockType || 'theorem').toLowerCase();
  
// //     const styles = {
// //       theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //       definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// //       lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// //       example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// //       proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' }
// //     };
  
// //     const style = styles[type] || styles.theorem;
// //     const contentLines = content.trim().split(/\r?\n/); // Normalize line breaks
// //     const title = contentLines[0].trim();
// //     const body = contentLines.slice(1).join('<br>'); // Use <br> for line breaks in HTML
  
// //     return `
// //       <div style="margin:20px 0; padding:15px; border-radius:8px; border:${style.border}; background-color:${style.background};">
// //         <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${title}</div>
// //         <div style="font-size:1em;">${body}</div>
// //       </div>
// //     `.trim();
// //   };
  


// // export const renderAcademicBlockHTML = (content, blockType) => {
// //   const type = (blockType || 'theorem').toLowerCase();
  
// //   const styles = {
// //     // Original themes
// //     theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// //     lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// //     example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// //     proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
    
// //     // Bootstrap gray theme (secondary)
// //     gray_theorem: { border: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     gray_definition: { border: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     gray_lemma: { border: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     gray_example: { border: '1px solid #6c757d', borderLeft: '5px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     gray_proof: { border: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
    
// //     // Bootstrap yellow theme (warning)
// //     yellow_theorem: { border: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },
// //     yellow_definition: { border: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },
// //     yellow_lemma: { border: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },
// //     yellow_example: { border: '1px solid #ffc107', borderLeft: '5px solid #ffc107', background: '#fff3cd', color: '#856404' },
// //     yellow_proof: { border: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },

// //    // Default types with thick left borders
// // thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// // thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
// // thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
// // thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
// // thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },

// // // Gray theme with thick left border
// // thick_left_gray: { border: '1px solid #6c757d', borderLeft: '10px solid #6c757d', background: '#e2e3e5', color: '#383d41' },

// // // Yellow theme with thick left border
// // thick_left_yellow: { border: '1px solid #ffc107', borderLeft: '10px solid #ffc107', background: '#fff3cd', color: '#856404' }
// //   };
  
// //   // Check if theme prefix is present (gray_ or yellow_)
// //   let styleKey = type;
// //   if (type.startsWith('gray_') || type.startsWith('yellow_')) {
// //     styleKey = type;
// //   } else {
// //     // If no theme prefix, use default styling
// //     styleKey = type;
// //   }
  
// //   const style = styles[styleKey] || styles.theorem;
// //   const contentLines = content.trim().split(/\r?\n/); // Normalize line breaks
// //   const title = contentLines[0].trim();
// //   const body = contentLines.slice(1).join('<br>'); // Use <br> for line breaks in HTML
  
// //   return `
// //     <div style="margin:20px 0; padding:15px; border-radius:8px; border:${style.border}; background-color:${style.background};">
// //       <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${title}</div>
// //       <div style="font-size:1em;">${body}</div>
// //     </div>
// //   `.trim();
// // };

// import { processContent } from "./contentProcessor";
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
  
//   const contentLines = content.trim().split(/\r?\n/);
//   const title = contentLines[0].trim();
//   const body = contentLines.slice(1).join('<br>');
  
//   let style;
  
//   // Handle theme selection
//   if (type === 'gray' || type === 'yellow') {
//     style = styles[type];
//   } else if (type.startsWith('thick_left_')) {
//     style = styles[type] || styles.thick_left_theorem;
//   } else {
//     style = styles[type] || styles.theorem;
//   }
  
//   return `
//     <div style="margin:20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
//       <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${title}</div>
//       <div style="font-size:1em;">${body}</div>
//     </div>
//   `.trim();
// };




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
  const bodyLines = bodyRaw.split('\n');
  const processedBodyLines = bodyLines.map(line => processMathContent(line));
  const bodyWithMath = processedBodyLines.join('<br>');
  
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
    <div style="margin:20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background};">
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