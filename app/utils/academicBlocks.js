


// // // 'use client';
// // // import React from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import ReactDOMServer from 'react-dom/server';

// // // export const renderAcademicBlockHTML = (content, blockType, customWidth = null) => {
// // //  const type = (blockType || 'theorem').toLowerCase();
 
// // //  const styles = {
// // //    // Original themes
// // //    theorem: { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// // //    definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// // //    lemma: { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// // //    example: { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// // //    proof: { border: '1px solid #505050', background: '#fafafa', color: '#505050' },
   
// // //    // Thick left borders
// // //    thick_left_theorem: { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// // //    thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
// // //    thick_left_lemma: { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
// // //    thick_left_example: { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
// // //    thick_left_proof: { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },
   
// // //    // Color themes
// // //    gray: { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// // //    yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' }
// // //  };

// // //  const processAcademicContent = (text) => {
// // //    if (!text) return '';
   
// // //    const lines = text.split(/\r?\n/);
   
// // //    const processLine = (line) => {
// // //      if (!line.trim()) return '<br>';
     
// // //      let processedLine = line;
     
// // //      processedLine = processedLine.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
     
// // //      const isCentered = processedLine.trim().startsWith('<center>') && processedLine.trim().endsWith('</center>');
     
// // //      if (isCentered) {
// // //        processedLine = processedLine.trim().slice(8, -9);
// // //      }
     
// // //      // Process block math
// // //      processedLine = processedLine.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
// // //        const blockMathElement = <BlockMath math={math.trim()} />;
// // //        return ReactDOMServer.renderToString(blockMathElement);
// // //      });
     
// // //      // Process inline math
// // //      processedLine = processedLine.replace(/\$([\s\S]*?)\$/g, (match, math) => {
// // //        const inlineMathElement = <InlineMath math={math.trim()} />;
// // //        return ReactDOMServer.renderToString(inlineMathElement);
// // //      });
     
// // //      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
     
// // //      processedLine = processedLine.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (match, text, sameTab, url) => {
// // //        const cleanUrl = sameTab ? url.substring(1) : url;
// // //        const finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
// // //        return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
// // //      });
     
// // //      processedLine = processedLine.replace(/@\[([^\]]+)\]@/g, 
// // //        '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
// // //      );
     
// // //      if (isCentered) {
// // //        processedLine = `<div style="text-align: center;">${processedLine}</div>`;
// // //      }
     
// // //      return processedLine;
// // //    };
   
// // //    return lines.map(processLine).join('<br>');
// // //  };

// // //  const contentLines = content.trim().split(/\r?\n/);
// // //  const titleRaw = contentLines[0].trim();
// // //  const bodyRaw = contentLines.slice(1).join('\n');

// // //  const titleProcessed = processAcademicContent(titleRaw);
// // //  const bodyProcessed = processAcademicContent(bodyRaw);

// // //  let style;
 
// // //  if (type === 'gray' || type === 'yellow') {
// // //    style = styles[type];
// // //  } else if (type.startsWith('thick_left_')) {
// // //    style = styles[type] || styles.thick_left_theorem;
// // //  } else {
// // //    style = styles[type] || styles.theorem;
// // //  }

// // //  const widthStyle = customWidth ? `width: ${customWidth}; ` : '';
 
// // //  return `
// // //    <div style="margin:20px 0 -20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background}; ${widthStyle}">
// // //      <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${titleProcessed}</div>
// // //      <div style="font-size:1em;">${bodyProcessed}</div>
// // //    </div>
// // //  `.trim();
// // // };


// // 'use client';
// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import ReactDOMServer from 'react-dom/server';

// // export const renderAcademicBlockHTML = (content, blockType, customWidth = null) => {
// //   const type = (blockType || 'theorem').toLowerCase();

// //   const styles = {
// //     // Original themes
// //     theorem:    { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
// //     lemma:      { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
// //     example:    { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
// //     proof:      { border: '1px solid #505050', background: '#fafafa', color: '#505050' },

// //     // Thick left borders
// //     thick_left_theorem:    { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
// //     thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
// //     thick_left_lemma:      { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
// //     thick_left_example:    { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
// //     thick_left_proof:      { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },

// //     // Color themes
// //     gray:   { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
// //     yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },
// //   };

// //   // Process inline-level markup inside a single line: math, bold, links, code.
// //   // Returns a string of HTML (no <br>, no block wrappers).
// //   const processInline = (line) => {
// //     let out = line;

// //     // Tabs → non-breaking indent
// //     out = out.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

// //     // Block math: $$...$$
// //     out = out.replace(/\$\$([\s\S]*?)\$\$/g, (m, math) =>
// //       ReactDOMServer.renderToString(<BlockMath math={math.trim()} />)
// //     );

// //     // Inline math: $...$
// //     out = out.replace(/\$([\s\S]*?)\$/g, (m, math) =>
// //       ReactDOMServer.renderToString(<InlineMath math={math.trim()} />)
// //     );

// //     // Bold: **...**
// //     out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

// //     // Links: [text](!url) or [text](url)
// //     out = out.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (m, text, sameTab, url) => {
// //       const cleanUrl = sameTab ? url.substring(1) : url;
// //       const finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
// //       return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
// //     });

// //     // Inline code: @[...]@
// //     out = out.replace(
// //       /@\[([^\]]+)\]@/g,
// //       '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
// //     );

// //     return out;
// //   };

// //   // Turn the raw multi-line text into a sequence of <div> blocks.
// //   // Empty lines become a spacer div. Lines wrapped in <center>...</center>
// //   // get text-align:center. No <br> joining — every line is its own block,
// //   // so vertical rhythm is governed by div margins, not by <br> + block-math
// //   // interactions (which were the root cause of the overflow).
// //   const processAcademicContent = (text) => {
// //     if (!text) return '';
// //     const lines = text.split(/\r?\n/);

// //     return lines
// //       .map((rawLine) => {
// //         const trimmed = rawLine.trim();

// //         // Empty line → small vertical spacer
// //         if (!trimmed) {
// //           return '<div style="height: 0.6em;"></div>';
// //         }

// //         // Detect <center>...</center> wrapper
// //         let isCentered = false;
// //         let line = rawLine;
// //         if (trimmed.startsWith('<center>') && trimmed.endsWith('</center>')) {
// //           isCentered = true;
// //           line = trimmed.slice(8, -9);
// //         }

// //         const inner = processInline(line);

// //         // Each line is a block-level div. margin: 0 0 0.5em keeps consistent
// //         // spacing regardless of whether the inner content is text or block math.
// //         const align = isCentered ? 'text-align: center;' : '';
// //         return `<div style="margin: 0 0 0.5em; ${align}">${inner}</div>`;
// //       })
// //       .join('');
// //   };

// //   const contentLines = content.trim().split(/\r?\n/);
// //   const titleRaw = contentLines[0].trim();
// //   const bodyRaw = contentLines.slice(1).join('\n');

// //   const titleProcessed = processInline(titleRaw);
// //   const bodyProcessed = processAcademicContent(bodyRaw);

// //   let style;
// //   if (type === 'gray' || type === 'yellow') {
// //     style = styles[type];
// //   } else if (type.startsWith('thick_left_')) {
// //     style = styles[type] || styles.thick_left_theorem;
// //   } else {
// //     style = styles[type] || styles.theorem;
// //   }

// //   const widthStyle = customWidth ? `width: ${customWidth}; ` : '';

// //   // Container rules that make this block robust to outer typography changes:
// //   //   - margin: 20px 0 (no negative pull — was margin:20px 0 -20px 0)
// //   //   - line-height set explicitly, not inherited
// //   //   - font-size set explicitly, not inherited
// //   //   - box-sizing: border-box so padding never breaks width math
// //   //   - overflow: visible (default, but explicit) — content can't be clipped
// //   //   - contain: layout — inner layout calc isolated from parent context
// //   //   - display: block so it never gets pulled inline by a parent
// //   return `
// //     <div style="
// //       display: block;
// //       box-sizing: border-box;
// //       margin: 20px 0;
// //       padding: 16px 18px;
// //       border-radius: 8px;
// //       border: ${style.border};
// //       border-left: ${style.borderLeft || style.border};
// //       background-color: ${style.background};
// //       font-size: 1rem;
// //       line-height: 1.6;
// //       overflow: visible;
// //       contain: layout;
// //       ${widthStyle}
// //     ">
// //       <div style="
// //         font-weight: bold;
// //         margin: 0 0 10px;
// //         color: ${style.color};
// //         font-size: 1rem;
// //         line-height: 1.4;
// //       ">${titleProcessed}</div>
// //       <div style="font-size: 1em; line-height: 1.6;">${bodyProcessed}</div>
// //     </div>
// //   `.trim();
// // };



// 'use client';
// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import ReactDOMServer from 'react-dom/server';

// // export const renderAcademicBlockHTML = (content, blockType, customWidth = null) => {
//   export const renderAcademicBlockHTML = (content, blockType, customWidth = null, customAlign = null) => {
//   const type = (blockType || 'theorem').toLowerCase();

//   const styles = {
//     theorem:    { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
//     definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000' },
//     lemma:      { border: '2px solid #800060', background: '#fff8ff', color: '#800060' },
//     example:    { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080' },
//     proof:      { border: '1px solid #505050', background: '#fafafa', color: '#505050' },

//     thick_left_theorem:    { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0' },
//     thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000' },
//     thick_left_lemma:      { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060' },
//     thick_left_example:    { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080' },
//     thick_left_proof:      { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050' },

//     gray:   { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41' },
//     yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404' },
//   };

//   const processInline = (line) => {
//     let out = line;
//     out = out.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
//     out = out.replace(/\$\$([\s\S]*?)\$\$/g, (m, math) =>
//       ReactDOMServer.renderToString(<BlockMath math={math.trim()} />)
//     );
//     out = out.replace(/\$([\s\S]*?)\$/g, (m, math) =>
//       ReactDOMServer.renderToString(<InlineMath math={math.trim()} />)
//     );
//     out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
//     out = out.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (m, text, sameTab, url) => {
//       const cleanUrl = sameTab ? url.substring(1) : url;
//       const finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
//       return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
//     });
//     out = out.replace(
//       /@\[([^\]]+)\]@/g,
//       '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
//     );
//     return out;
//   };

//   const processAcademicContent = (text) => {
//     if (!text) return '';
//     const lines = text.split(/\r?\n/);
//     return lines
//       .map((rawLine) => {
//         const trimmed = rawLine.trim();
//         if (!trimmed) return '<div style="height: 0.6em;"></div>';
//         let isCentered = false;
//         let line = rawLine;
//         if (trimmed.startsWith('<center>') && trimmed.endsWith('</center>')) {
//           isCentered = true;
//           line = trimmed.slice(8, -9);
//         }
//         const inner = processInline(line);
//         const align = isCentered ? 'text-align: center;' : '';
//         return `<div style="margin: 0 0 0.5em; ${align}">${inner}</div>`;
//       })
//       .join('');
//   };

//   const contentLines = content.trim().split(/\r?\n/);
//   const titleRaw = contentLines[0].trim();
//   const bodyRaw = contentLines.slice(1).join('\n');
//   const titleProcessed = processInline(titleRaw);
//   const bodyProcessed = processAcademicContent(bodyRaw);

//   let style;
//   if (type === 'gray' || type === 'yellow') style = styles[type];
//   else if (type.startsWith('thick_left_')) style = styles[type] || styles.thick_left_theorem;
//   else style = styles[type] || styles.theorem;

//   // ─── WIDTH FIX ─────────────────────────────────────────────
//   // display:inline-block + explicit width survives flow-container stretching.
//   // vertical-align:top prevents baseline gap. No customWidth → 100% (full bleed).
//   // const widthRule = customWidth
//   //   ? `width: ${customWidth}; max-width: ${customWidth};`
//   //   : 'width: 100%;';

// const widthRule = customWidth
//   ? `width: ${customWidth}; max-width: ${customWidth};`
//   : 'width: 100%;';

// // let marginRule = 'margin: 20px 0;';
// // if (customWidth && customAlign === 'center') marginRule = 'margin: 20px auto;';
// // if (customWidth && customAlign === 'right') marginRule = 'margin: 20px 0 20px auto;';



// let marginRule = customWidth ? 'margin: 20px auto;' : 'margin: 20px 0;';
// if (customWidth && customAlign === 'left') marginRule = 'margin: 20px 0;';
// if (customWidth && customAlign === 'right') marginRule = 'margin: 20px 0 20px auto;';

//   return `
//     <div style="
//       display: block;
//       vertical-align: top;
//       box-sizing: border-box;
//       ${marginRule};
//       padding: 16px 18px;
//       border-radius: 8px;
//       border: ${style.border};
//       border-left: ${style.borderLeft || style.border};
//       background-color: ${style.background};
//       font-size: 1rem;
//       line-height: 1.6;
//       ${widthRule}
//     ">
//       <div style="
//         font-weight: bold;
//         margin: 0 0 10px;
//         color: ${style.color};
//         font-size: 1rem;
//         line-height: 1.4;
//       ">${titleProcessed}</div>
//       <div style="font-size: 1em; line-height: 1.6;">${bodyProcessed}</div>
//     </div>
//   `.trim();
// };



'use client';
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ReactDOMServer from 'react-dom/server';

export const renderAcademicBlockHTML = (
  content,
  blockType,
  customWidth = null,
  customAlign = null,
  customOpts = {}
) => {
  const type = (blockType || 'theorem').toLowerCase();

  const {
    cite = null,
    tags = null,
    number = null,
    linkto = null,
    collapsible = false,
    compact = false,
    aside = false,
  } = customOpts;

  const styles = {
    // Original
    theorem:    { border: '2px solid #0040a0', background: '#f8f9ff', color: '#0040a0', label: 'Theorem' },
    definition: { border: '2px solid #006000', background: '#f0fff0', color: '#006000', label: 'Definition' },
    lemma:      { border: '2px solid #800060', background: '#fff8ff', color: '#800060', label: 'Lemma' },
    example:    { border: '2px solid #404080', borderLeft: '8px solid #404080', background: '#f8f8ff', color: '#404080', label: 'Example' },
    proof:      { border: '1px solid #505050', background: '#fafafa', color: '#505050', label: 'Proof' },

    // Thick-left
    thick_left_theorem:    { border: '1px solid #0040a0', borderLeft: '10px solid #0040a0', background: '#f8f9ff', color: '#0040a0', label: 'Theorem' },
    thick_left_definition: { border: '1px solid #006000', borderLeft: '10px solid #006000', background: '#f0fff0', color: '#006000', label: 'Definition' },
    thick_left_lemma:      { border: '1px solid #800060', borderLeft: '10px solid #800060', background: '#fff8ff', color: '#800060', label: 'Lemma' },
    thick_left_example:    { border: '1px solid #404080', borderLeft: '10px solid #404080', background: '#f8f8ff', color: '#404080', label: 'Example' },
    thick_left_proof:      { border: '1px solid #505050', borderLeft: '10px solid #505050', background: '#fafafa', color: '#505050', label: 'Proof' },

    // Color
    gray:   { border: '1px solid #6c757d', borderLeft: '1px solid #6c757d', background: '#e2e3e5', color: '#383d41', label: 'Note' },
    yellow: { border: '1px solid #ffc107', borderLeft: '1px solid #ffc107', background: '#fff3cd', color: '#856404', label: 'Pitfall' },

    // New
    corollary:  { border: '1px solid #7c3aed', borderLeft: '6px solid #7c3aed', background: '#faf5ff', color: '#7c3aed', label: 'Corollary' },
    remark:     { border: 'none', borderLeft: '3px solid #cbd5e1', background: 'transparent', color: '#475569', label: 'Remark', italic: true },
    warning:    { border: '1px solid #dc2626', background: '#fef2f2', color: '#dc2626', label: '⚠ Warning' },
    tip:        { border: '1px solid #0d9488', background: '#f0fdfa', color: '#0d9488', label: '✓ Tip' },
    exercise:   { border: '1px solid #ea580c', background: '#fff7ed', color: '#ea580c', label: 'Exercise' },
    solution:   { border: '1px dashed #ea580c', background: '#fffbf5', color: '#ea580c', label: 'Solution', tightTop: true },
    intuition:  { border: '1px solid #f59e0b', background: '#fffbeb', color: '#b45309', label: '💡 Intuition' },
    recall:     { border: '1px dashed #2563eb', background: '#eff6ff', color: '#2563eb', label: '↩ Recall' },
  };

  const processInline = (line) => {
    let out = line;
    out = out.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    out = out.replace(/\$\$([\s\S]*?)\$\$/g, (m, math) =>
      ReactDOMServer.renderToString(<BlockMath math={math.trim()} />)
    );
    out = out.replace(/\$([\s\S]*?)\$/g, (m, math) =>
      ReactDOMServer.renderToString(<InlineMath math={math.trim()} />)
    );
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (m, text, sameTab, url) => {
      const cleanUrl = sameTab ? url.substring(1) : url;
      const finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
      return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
    });
    out = out.replace(
      /@\[([^\]]+)\]@/g,
      '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
    );
    return out;
  };

  const processAcademicContent = (text) => {
    if (!text) return '';
    const lines = text.split(/\r?\n/);
    return lines
      .map((rawLine) => {
        const trimmed = rawLine.trim();
        if (!trimmed) return '<div style="height: 0.6em;"></div>';
        let isCentered = false;
        let line = rawLine;
        if (trimmed.startsWith('<center>') && trimmed.endsWith('</center>')) {
          isCentered = true;
          line = trimmed.slice(8, -9);
        }
        const inner = processInline(line);
        const align = isCentered ? 'text-align: center;' : '';
        return `<div style="margin: 0 0 0.5em; ${align}">${inner}</div>`;
      })
      .join('');
  };

  // theorem+proof combo
  if (type === 'theorem+proof' || type === 'lemma+proof' || type === 'corollary+proof') {
    const baseType = type.replace('+proof', '');
    const baseStyle = styles[baseType] || styles.theorem;
    const parts = content.split(/^---$/m);
    const statementBlock = parts[0].trim();
    const proofBlock = (parts[1] || '').trim();
    const sLines = statementBlock.split(/\r?\n/);
    const sTitle = processInline(sLines[0].trim());
    const sBody = processAcademicContent(sLines.slice(1).join('\n'));
    const pBody = processAcademicContent(proofBlock);

    return `
      <div style="display:block;box-sizing:border-box;margin:20px 0;border-radius:8px;border:${baseStyle.border};border-left:${baseStyle.borderLeft || baseStyle.border};background:${baseStyle.background};overflow:hidden;width:${customWidth || '100%'};">
        <div style="padding:16px 18px;">
          <div style="font-weight:bold;color:${baseStyle.color};margin-bottom:10px;">${sTitle}</div>
          <div>${sBody}</div>
        </div>
        <div style="padding:14px 18px;background:#fafafa;border-top:1px dashed ${baseStyle.color}40;">
          <div style="font-weight:bold;color:#505050;margin-bottom:6px;font-size:14px;">Proof</div>
          <div style="font-size:14px;">${pBody}</div>
        </div>
      </div>
    `.trim();
  }

  const contentLines = content.trim().split(/\r?\n/);
  const titleRaw = contentLines[0].trim();
  const bodyRaw = contentLines.slice(1).join('\n');
  let titleProcessed = processInline(titleRaw);
  const bodyProcessed = processAcademicContent(bodyRaw);

  let style;
  if (styles[type]) style = styles[type];
  else if (type.startsWith('thick_left_')) style = styles[type] || styles.thick_left_theorem;
  else style = styles.theorem;

  if (number) titleProcessed = `${style.label} ${number} — ${titleProcessed}`;

  if (linkto) {
    titleProcessed = `<a href="${linkto}" style="color:${style.color};text-decoration:none;border-bottom:1px dashed ${style.color};">${titleProcessed} →</a>`;
  }

  let tagsHTML = '';
  if (tags) {
    const tagList = Array.isArray(tags) ? tags : String(tags).split('|');
    tagsHTML = `<div style="margin-bottom:10px;display:flex;gap:6px;flex-wrap:wrap;">${tagList
      .map(
        (t) =>
          `<span style="font-size:11px;background:${style.color}22;color:${style.color};padding:2px 8px;border-radius:10px;font-weight:600;">${t.trim()}</span>`
      )
      .join('')}</div>`;
  }

  let citeHTML = '';
  if (cite) {
    citeHTML = `<div style="margin-top:12px;padding-top:8px;border-top:1px solid ${style.color}40;font-size:13px;color:#64748b;font-style:italic;text-align:right;">— ${cite}</div>`;
  }

  const widthRule = customWidth
    ? `width: ${customWidth}; max-width: ${customWidth};`
    : 'width: 100%;';

  let marginRule = customWidth ? 'margin: 20px auto;' : 'margin: 20px 0;';
  if (customWidth && customAlign === 'left') marginRule = 'margin: 20px 0;';
  if (customWidth && customAlign === 'right') marginRule = 'margin: 20px 0 20px auto;';
  if (style.tightTop) marginRule = marginRule.replace('20px', '4px');

  const padding = compact ? '6px 12px' : '16px 18px';
  const fontSize = compact ? '14px' : '1rem';
  const italicRule = style.italic ? 'font-style: italic;' : '';

  if (aside) {
    return `
      <div style="float:right;width:${customWidth || '40%'};margin:0 0 12px 20px;box-sizing:border-box;padding:12px 16px;border-radius:8px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};font-size:14px;${italicRule}">
        <div style="font-weight:bold;color:${style.color};margin-bottom:6px;">${style.label}: ${titleProcessed}</div>
        ${tagsHTML}
        <div>${bodyProcessed}</div>
        ${citeHTML}
      </div>
    `.trim();
  }

  if (collapsible) {
    return `
      <details style="display:block;box-sizing:border-box;${marginRule}padding:0;border-radius:8px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};${widthRule}">
        <summary style="font-weight:bold;color:${style.color};padding:12px 18px;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;">
          <span>${titleProcessed}</span>
          <span style="font-size:12px;">▼</span>
        </summary>
        <div style="padding:0 18px 16px;">
          ${tagsHTML}
          ${bodyProcessed}
          ${citeHTML}
        </div>
      </details>
    `.trim();
  }

  if (compact) {
    return `
      <div style="display:block;box-sizing:border-box;margin:8px 0;padding:${padding};border-radius:6px;border:${style.border};border-left:${style.borderLeft || style.border};background:${style.background};font-size:${fontSize};${widthRule}${italicRule}">
        <span style="font-weight:bold;color:${style.color};">${titleProcessed}:</span>
        <span>${bodyRaw.split(/\r?\n/).filter(Boolean).map(processInline).join(' ')}</span>
      </div>
    `.trim();
  }

  return `
    <div style="
      display: block;
      box-sizing: border-box;
      ${marginRule}
      padding: ${padding};
      border-radius: 8px;
      border: ${style.border};
      border-left: ${style.borderLeft || style.border};
      background-color: ${style.background};
      font-size: ${fontSize};
      line-height: 1.6;
      ${italicRule}
      ${widthRule}
    ">
      <div style="
        font-weight: bold;
        margin: 0 0 10px;
        color: ${style.color};
        font-size: 1rem;
        line-height: 1.4;
        ${style.italic ? 'font-style: normal;' : ''}
      ">${titleProcessed}</div>
      ${tagsHTML}
      <div style="font-size: 1em; line-height: 1.6;">${bodyProcessed}</div>
      ${citeHTML}
    </div>
  `.trim();
};