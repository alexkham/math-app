


'use client';
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import ReactDOMServer from 'react-dom/server';

export const renderAcademicBlockHTML = (content, blockType, customWidth = null) => {
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

 const processAcademicContent = (text) => {
   if (!text) return '';
   
   const lines = text.split(/\r?\n/);
   
   const processLine = (line) => {
     if (!line.trim()) return '<br>';
     
     let processedLine = line;
     
     processedLine = processedLine.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
     
     const isCentered = processedLine.trim().startsWith('<center>') && processedLine.trim().endsWith('</center>');
     
     if (isCentered) {
       processedLine = processedLine.trim().slice(8, -9);
     }
     
     // Process block math
     processedLine = processedLine.replace(/\$\$([\s\S]*?)\$\$/g, (match, math) => {
       const blockMathElement = <BlockMath math={math.trim()} />;
       return ReactDOMServer.renderToString(blockMathElement);
     });
     
     // Process inline math
     processedLine = processedLine.replace(/\$([\s\S]*?)\$/g, (match, math) => {
       const inlineMathElement = <InlineMath math={math.trim()} />;
       return ReactDOMServer.renderToString(inlineMathElement);
     });
     
     processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
     
     processedLine = processedLine.replace(/\[([^\]]+)\]\((!?)([^)]+)\)/g, (match, text, sameTab, url) => {
       const cleanUrl = sameTab ? url.substring(1) : url;
       const finalUrl = sameTab ? (cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`) : url;
       return `<a href="${finalUrl}" ${!sameTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
     });
     
     processedLine = processedLine.replace(/@\[([^\]]+)\]@/g, 
       '<span style="background-color: rgba(175, 184, 193, 0.2); padding: 0.2em 0.4em; border-radius: 6px; font-family: ui-monospace, monospace; font-size: 95%; color: black; font-weight: 300;">$1</span>'
     );
     
     if (isCentered) {
       processedLine = `<div style="text-align: center;">${processedLine}</div>`;
     }
     
     return processedLine;
   };
   
   return lines.map(processLine).join('<br>');
 };

 const contentLines = content.trim().split(/\r?\n/);
 const titleRaw = contentLines[0].trim();
 const bodyRaw = contentLines.slice(1).join('\n');

 const titleProcessed = processAcademicContent(titleRaw);
 const bodyProcessed = processAcademicContent(bodyRaw);

 let style;
 
 if (type === 'gray' || type === 'yellow') {
   style = styles[type];
 } else if (type.startsWith('thick_left_')) {
   style = styles[type] || styles.thick_left_theorem;
 } else {
   style = styles[type] || styles.theorem;
 }

 const widthStyle = customWidth ? `width: ${customWidth}; ` : '';
 
 return `
   <div style="margin:20px 0 -20px 0; padding:15px; border-radius:8px; border:${style.border}; border-left:${style.borderLeft || style.border}; background-color:${style.background}; ${widthStyle}">
     <div style="font-weight:bold; margin-bottom:10px; color:${style.color};">${titleProcessed}</div>
     <div style="font-size:1em;">${bodyProcessed}</div>
   </div>
 `.trim();
};