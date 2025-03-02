// // // // utils/contentProcessor.js
// // // import React from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import Link from 'next/link';


// // //  const processContent2 = (content) => {
// // //   if (!content) return null;
  
// // //   // First process SVGs
// // //   const svgs = [];
// // //   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
// // //     svgs.push(match);
// // //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// // //   });
  
// // //   // Then process HTML blocks
// // //   const htmlBlocks = [];
// // //   const contentWithHtmlPlaceholders = contentWithPlaceholders.replace(/<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
// // //     // Skip if it's an SVG placeholder
// // //     if (match.includes('__SVG_PLACEHOLDER_')) {
// // //       return match;
// // //     }
// // //     htmlBlocks.push(match);
// // //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// // //   });
  
// // //   // Process tab links 
// // //   const contentWithTabLinks = contentWithHtmlPlaceholders.replace(/#tab:(\w+)#/g, (match) => {
// // //     const tabName = match.match(/#tab:(\w+)#/)[1];
// // //     htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
// // //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// // //   });
  
// // //   const lines = contentWithTabLinks.split('\n');
// // //   let inList = false;
// // //   let currentListItem = [];
// // //   const elements = [];
  
// // //   const processPart = (part, index) => {
// // //     if (!part) return null;
  
// // //     // Process SVG placeholders first
// // //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// // //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// // //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// // //     }
  
// // //     if (part.startsWith('__HTML_PLACEHOLDER_')) {
// // //       const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
// // //       return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
// // //     } else if (part.startsWith('**') && part.endsWith('**')) {
// // //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// // //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// // //      const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
// // //      if (linkMatch) {
// // //        const [, text, sameTab, url] = linkMatch;
// // //        return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
// // //      }
// // //     } else if (part.startsWith('@[') && part.endsWith(']@')) {
// // //       return <span key={`code-${index}`} style={{
// // //         backgroundColor: 'rgba(175, 184, 193, 0.2)',
// // //         padding: '0.2em 0.4em',
// // //         borderRadius: '6px',
// // //         fontFamily: 'ui-monospace, monospace',
// // //         fontSize: '95%',
// // //         color: 'black',
// // //         fontWeight: 300
// // //       }}>{part.slice(2, -2)}</span>;
// // //     }
// // //     return part;
// // //   };
  
// // //   lines.forEach((line, lineIndex) => {
// // //     const tabCount = line.match(/^\t*/)[0].length;
// // //     const trimmedLine = line.replace(/^\t+/, '');
  
// // //     // Updated regex to include SVG placeholders and code blocks
// // //     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g);
// // //     const processedParts = parts.filter(Boolean).map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
// // //     if (trimmedLine.startsWith('- ')) {
// // //       if (inList && currentListItem.length > 0) {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //       }
// // //       inList = true;
// // //       currentListItem.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts.slice(1)}
// // //         </span>
// // //       );
// // //     } else if (inList) {
// // //       if (trimmedLine === '') {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //         inList = false;
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       } else {
// // //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// // //         currentListItem.push(
// // //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //             {processedParts}
// // //           </span>
// // //         );
// // //       }
// // //     } else {
// // //       elements.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts}
// // //         </span>
// // //       );
// // //       if (lineIndex < lines.length - 1) {
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       }
// // //     }
// // //   });
  
// // //   if (inList && currentListItem.length > 0) {
// // //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //   }
  
// // //   const hasListItems = elements.some(el => el.type === 'li');
// // //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // //   };

// // // export const processContent = (content) => {
// // //   if (!content) return null;

// // //   const svgs = [];
// // //   const contentWithPlaceholders = content.replaceAll(/<svg[\s\S]*?<\/svg>/g, (match) => {
// // //     svgs.push(match);
// // //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// // //   });

// // //   const lines = contentWithPlaceholders.split('\n');
// // //   let inList = false;
// // //   let currentListItem = [];
// // //   const elements = [];

// // //   const processPart = (part, index) => {
// // //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// // //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// // //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// // //     } else if (part.startsWith('**') && part.endsWith('**')) {
// // //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// // //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// // //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// // //     } else if (part.startsWith('$') && part.endsWith('$')) {
// // //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// // //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// // //       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       // if (linkMatch) {
// // //       //   const [, text, url] = linkMatch;
// // //       //   return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// // //       // }
// // //       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       // if (linkMatch) {
// // //       //  const [, text, url] = linkMatch;
// // //       //  // Use target="_blank" only if no ! prefix
// // //       //  const isInternalLink = url.startsWith('!');
// // //       //  const cleanUrl = isInternalLink ? url.substring(1) : url;
// // //       //  return <a 
// // //       //    key={`link-${index}`} 
// // //       //    href={cleanUrl}
// // //       //    {...(!isInternalLink && {target: "_blank", rel: "noopener noreferrer"})}
// // //       //  >
// // //       //    {text}
// // //       //  </a>;
// // //       // }
// // //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       if (linkMatch) {
// // //        const [, text, url] = linkMatch;  // extract text and url
// // //        return processContent2(part); // pass full markdown link
// // //       }
// // // //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // // // if (linkMatch) {
// // // //   const [, text, url] = linkMatch;
// // // //   return <a key={`link-${index}`} href={url}>{text}</a>; 
// // // // }
// // //       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       // if (linkMatch) {
// // //       //   const [, text, url] = linkMatch;
// // //       //   return <a key={`link-${index}`} href={url.startsWith('/') ? url : `/${url}`}>{text}</a>;
// // //       // }

// // //       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       // if (linkMatch) {
// // //       //   const [, text, url] = linkMatch;
// // //       //   return <a key={`link-${index}`} href={url} 
// // //       //     onClick={(e) => {
// // //       //       if (!url.includes('://')) {
// // //       //         e.preventDefault();
// // //       //         window.location.href = url;
// // //       //       }
// // //       //     }}
// // //       //   >{text}</a>;
// // //       // }
// // //     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
// // //       return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
// // //     }
// // //     return part;
// // //   };

// // //   lines.forEach((line, lineIndex) => {
// // //     const tabCount = line.match(/^\t*/)[0].length;
// // //     const trimmedLine = line.replace(/^\t+/, '');
    
// // //     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
// // //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// // //     if (trimmedLine.startsWith('- ')) {
// // //       if (inList && currentListItem.length > 0) {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //       }
// // //       inList = true;
// // //       currentListItem.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts.slice(1)}
// // //         </span>
// // //       );
// // //     } else if (inList) {
// // //       if (trimmedLine === '') {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //         inList = false;
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       } else {
// // //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// // //         currentListItem.push(
// // //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //             {processedParts}
// // //           </span>
// // //         );
// // //       }
// // //     } else {
// // //       elements.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts}
// // //         </span>
// // //       );
// // //       if (lineIndex < lines.length - 1) {
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       }
// // //     }
// // //   });

// // //   if (inList && currentListItem.length > 0) {
// // //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //   }

// // //   const hasListItems = elements.some(el => el.type === 'li');
// // //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // // };


// // // utils/contentProcessor.js
// // // import React from 'react';
// // // import { InlineMath, BlockMath } from 'react-katex';
// // // import 'katex/dist/katex.min.css';
// // // import Link from 'next/link';

// // // // Helper function to safely handle replace operations
// // // const safeReplace = (str, pattern, replacement) => {
// // //   if (typeof str !== 'string') {
// // //     console.warn('Expected string but got:', typeof str);
// // //     return String(str || '');
// // //   }
// // //   return str.replace(pattern, replacement);
// // // };

// // // // Process nested content
// // // const processContent2 = (content) => {
// // //   if (!content || typeof content !== 'string') return null;
  
// // //   // Process SVGs
// // //   const svgs = [];
// // //   let contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// // //     svgs.push(match);
// // //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// // //   });
  
// // //   // Process HTML blocks
// // //   const htmlBlocks = [];
// // //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
// // //     // Skip if it's an SVG placeholder
// // //     if (match.includes('__SVG_PLACEHOLDER_')) {
// // //       return match;
// // //     }
// // //     htmlBlocks.push(match);
// // //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// // //   });
  
// // //   // Process tab links 
// // //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /#tab:(\w+)#/g, (match) => {
// // //     const tabName = match.match(/#tab:(\w+)#/)[1];
// // //     htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
// // //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// // //   });
  
// // //   const lines = contentWithPlaceholders.split('\n');
// // //   let inList = false;
// // //   let currentListItem = [];
// // //   const elements = [];
  
// // //   const processPart = (part, index) => {
// // //     if (!part) return null;
  
// // //     // Process SVG placeholders
// // //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// // //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// // //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// // //     }
  
// // //     if (part.startsWith('__HTML_PLACEHOLDER_')) {
// // //       const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
// // //       return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
// // //     } else if (part.startsWith('**') && part.endsWith('**')) {
// // //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// // //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// // //       const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
// // //       if (linkMatch) {
// // //         const [, text, sameTab, url] = linkMatch;
// // //         return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
// // //       }
// // //     } else if (part.startsWith('@[') && part.endsWith(']@')) {
// // //       return <span key={`code-${index}`} style={{
// // //         backgroundColor: 'rgba(175, 184, 193, 0.2)',
// // //         padding: '0.2em 0.4em',
// // //         borderRadius: '6px',
// // //         fontFamily: 'ui-monospace, monospace',
// // //         fontSize: '95%',
// // //         color: 'black',
// // //         fontWeight: 300
// // //       }}>{part.slice(2, -2)}</span>;
// // //     }
// // //     return part;
// // //   };
  
// // //   lines.forEach((line, lineIndex) => {
// // //     const tabCount = line.match(/^\t*/)[0].length;
// // //     const trimmedLine = line.replace(/^\t+/, '');
  
// // //     // Split line into parts for processing
// // //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g, 
// // //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
    
// // //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
// // //     if (trimmedLine.startsWith('- ')) {
// // //       if (inList && currentListItem.length > 0) {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //       }
// // //       inList = true;
// // //       currentListItem.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts.slice(trimmedLine.startsWith('- ') ? 1 : 0)}
// // //         </span>
// // //       );
// // //     } else if (inList) {
// // //       if (trimmedLine === '') {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //         inList = false;
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       } else {
// // //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// // //         currentListItem.push(
// // //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //             {processedParts}
// // //           </span>
// // //         );
// // //       }
// // //     } else {
// // //       elements.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts}
// // //         </span>
// // //       );
// // //       if (lineIndex < lines.length - 1) {
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       }
// // //     }
// // //   });
  
// // //   if (inList && currentListItem.length > 0) {
// // //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //   }
  
// // //   const hasListItems = elements.some(el => el && el.type === 'li');
// // //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // // };

// // // export const processContent = (content) => {
// // //   // Type safety check
// // //   if (!content) return null;
// // //   if (typeof content !== 'string') {
// // //     console.warn('processContent received non-string content:', typeof content);
// // //     try {
// // //       content = String(content || '');
// // //     } catch (e) {
// // //       console.error('Failed to convert content to string:', e);
// // //       return null;
// // //     }
// // //   }

// // //   // Process SVGs
// // //   const svgs = [];
// // //   const contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// // //     svgs.push(match);
// // //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// // //   });

// // //   const lines = contentWithPlaceholders.split('\n');
// // //   let inList = false;
// // //   let currentListItem = [];
// // //   const elements = [];

// // //   const processPart = (part, index) => {
// // //     if (!part) return part;
    
// // //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// // //       const svgMatch = part.match(/__SVG_PLACEHOLDER_(\d+)__/);
// // //       if (svgMatch) {
// // //         const svgIndex = parseInt(svgMatch[1]);
// // //         if (svgs[svgIndex]) {
// // //           return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// // //         }
// // //       }
// // //       return part;
// // //     } else if (part.startsWith('**') && part.endsWith('**')) {
// // //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// // //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// // //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// // //     } else if (part.startsWith('$') && part.endsWith('$')) {
// // //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// // //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// // //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // //       if (linkMatch) {
// // //         const [, text, url] = linkMatch;
        
// // //         // Check if this is a special link format that needs nested processing
// // //         if (typeof text === 'string' && typeof url === 'string') {
// // //           try {
// // //             // Check if we need to process this with processContent2
// // //             if (text.includes('**') || text.includes('<svg') || text.includes('@[')) {
// // //               return processContent2(part);
// // //             }
            
// // //             return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// // //           } catch (e) {
// // //             console.error('Error processing link:', e);
// // //             return part;
// // //           }
// // //         }
// // //       }
// // //       return part;
// // //     } else if (typeof part === 'string' && part.trim().startsWith('<') && part.trim().endsWith('>')) {
// // //       return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
// // //     }
// // //     return part;
// // //   };

// // //   lines.forEach((line, lineIndex) => {
// // //     // Guard against non-string lines
// // //     if (typeof line !== 'string') {
// // //       console.warn('Encountered non-string line:', typeof line);
// // //       return;
// // //     }
    
// // //     const tabMatch = line.match(/^\t*/);
// // //     const tabCount = tabMatch ? tabMatch[0].length : 0;
// // //     const trimmedLine = line.replace(/^\t+/, '');
    
// // //     // Split with marker approach for better reliability
// // //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/g, 
// // //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
      
// // //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// // //     if (trimmedLine.startsWith('- ')) {
// // //       if (inList && currentListItem.length > 0) {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //       }
// // //       inList = true;
// // //       currentListItem.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {trimmedLine.startsWith('- ') ? processedParts.slice(1) : processedParts}
// // //         </span>
// // //       );
// // //     } else if (inList) {
// // //       if (trimmedLine === '') {
// // //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //         currentListItem = [];
// // //         inList = false;
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       } else {
// // //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// // //         currentListItem.push(
// // //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //             {processedParts}
// // //           </span>
// // //         );
// // //       }
// // //     } else {
// // //       elements.push(
// // //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// // //           {processedParts}
// // //         </span>
// // //       );
// // //       if (lineIndex < lines.length - 1) {
// // //         elements.push(<br key={`br-${elements.length}`} />);
// // //       }
// // //     }
// // //   });

// // //   if (inList && currentListItem.length > 0) {
// // //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// // //   }

// // //   const hasListItems = elements.some(el => el && el.type === 'li');
// // //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // // };


// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import Link from 'next/link';

// // // Helper function to safely handle replace operations
// // const safeReplace = (str, pattern, replacement) => {
// //   if (typeof str !== 'string') {
// //     console.warn('Expected string but got:', typeof str);
// //     return String(str || '');
// //   }
// //   return str.replace(pattern, replacement);
// // };

// // // Process nested content
// // const processContent2 = (content) => {
// //   if (!content || typeof content !== 'string') return null;
  
// //   // Process SVGs
// //   const svgs = [];
// //   let contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });
  
// //   // Process HTML blocks
// //   const htmlBlocks = [];
// //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
// //     // Skip if it's an SVG placeholder
// //     if (match.includes('__SVG_PLACEHOLDER_')) {
// //       return match;
// //     }
// //     htmlBlocks.push(match);
// //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// //   });
  
// //   // Process tab links 
// //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /#tab:(\w+)#/g, (match) => {
// //     const tabName = match.match(/#tab:(\w+)#/)[1];
// //     htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
// //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// //   });
  
// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];
  
// //   const processPart = (part, index) => {
// //     if (!part) return null;
  
// //     // Process SVG placeholders
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //     }
  
// //     if (part.startsWith('__HTML_PLACEHOLDER_')) {
// //       const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
// //       return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, sameTab, url] = linkMatch;
// //         return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
// //       }
// //     } else if (part.startsWith('@[') && part.endsWith(']@')) {
// //       return <span key={`code-${index}`} style={{
// //         backgroundColor: 'rgba(175, 184, 193, 0.2)',
// //         padding: '0.2em 0.4em',
// //         borderRadius: '6px',
// //         fontFamily: 'ui-monospace, monospace',
// //         fontSize: '95%',
// //         color: 'black',
// //         fontWeight: 300
// //       }}>{part.slice(2, -2)}</span>;
// //     }
// //     return part;
// //   };
  
// //   lines.forEach((line, lineIndex) => {
// //     const tabCount = line.match(/^\t*/)[0].length;
// //     const trimmedLine = line.replace(/^\t+/, '');
    
// //     // Process headings
// //     if (trimmedLine.startsWith('# ')) {
// //       elements.push(<h1 key={`h1-${lineIndex}`}>{processContent2(trimmedLine.substring(2))}</h1>);
// //       return;
// //     } else if (trimmedLine.startsWith('## ')) {
// //       elements.push(<h2 key={`h2-${lineIndex}`}>{processContent2(trimmedLine.substring(3))}</h2>);
// //       return;
// //     }
  
// //     // Split line into parts for processing
// //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g, 
// //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
    
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts.slice(trimmedLine.startsWith('- ') ? 1 : 0)}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });
  
// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }
  
// //   const hasListItems = elements.some(el => el && el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };

// // export const processContent = (content) => {
// //   // Type safety check
// //   if (!content) return null;
// //   if (typeof content !== 'string') {
// //     console.warn('processContent received non-string content:', typeof content);
// //     try {
// //       content = String(content || '');
// //     } catch (e) {
// //       console.error('Failed to convert content to string:', e);
// //       return null;
// //     }
// //   }

// //   // Process SVGs
// //   const svgs = [];
// //   let contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });

// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];

// //   const processPart = (part, index) => {
// //     if (!part) return part;
    
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgMatch = part.match(/__SVG_PLACEHOLDER_(\d+)__/);
// //       if (svgMatch) {
// //         const svgIndex = parseInt(svgMatch[1]);
// //         if (svgs[svgIndex]) {
// //           return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //         }
// //       }
// //       return part;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, url] = linkMatch;
        
// //         // Check if this is a special link format that needs nested processing
// //         if (typeof text === 'string' && typeof url === 'string') {
// //           try {
// //             // Check if we need to process this with processContent2
// //             if (text.includes('**') || text.includes('<svg') || text.includes('@[')) {
// //               return processContent2(part);
// //             }
            
// //             return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// //           } catch (e) {
// //             console.error('Error processing link:', e);
// //             return part;
// //           }
// //         }
// //       }
// //       return part;
// //     } else if (typeof part === 'string' && part.trim().startsWith('<') && part.trim().endsWith('>')) {
// //       return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
// //     }
// //     return part;
// //   };

// //   lines.forEach((line, lineIndex) => {
// //     // Guard against non-string lines
// //     if (typeof line !== 'string') {
// //       console.warn('Encountered non-string line:', typeof line);
// //       return;
// //     }
    
// //     const tabMatch = line.match(/^\t*/);
// //     const tabCount = tabMatch ? tabMatch[0].length : 0;
// //     const trimmedLine = line.replace(/^\t+/, '');

// //     // Process headings
// //     if (trimmedLine.startsWith('# ')) {
// //       elements.push(<h1 key={`h1-${lineIndex}`}>{processContent(trimmedLine.substring(2))}</h1>);
// //       return;
// //     } else if (trimmedLine.startsWith('## ')) {
// //       elements.push(<h2 key={`h2-${lineIndex}`}>{processContent(trimmedLine.substring(3))}</h2>);
// //       return;
// //     }
    
// //     // Split with marker approach for better reliability
// //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/g, 
// //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
      
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {trimmedLine.startsWith('- ') ? processedParts.slice(1) : processedParts}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });

// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }

// //   const hasListItems = elements.some(el => el && el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };


// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import Link from 'next/link';

// // // Helper function to safely handle replace operations
// // const safeReplace = (str, pattern, replacement) => {
// //   if (typeof str !== 'string') {
// //     console.warn('Expected string but got:', typeof str);
// //     return String(str || '');
// //   }
// //   return str.replace(pattern, replacement);
// // };

// // // Process nested content
// // const processContent2 = (content) => {
// //   if (!content || typeof content !== 'string') return null;
  
// //   // Process SVGs
// //   const svgs = [];
// //   let contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });
  
// //   // Process HTML blocks
// //   const htmlBlocks = [];
// //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
// //     // Skip if it's an SVG placeholder
// //     if (match.includes('__SVG_PLACEHOLDER_')) {
// //       return match;
// //     }
// //     htmlBlocks.push(match);
// //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// //   });
  
// //   // Process tab links 
// //   contentWithPlaceholders = safeReplace(contentWithPlaceholders, /#tab:(\w+)#/g, (match) => {
// //     const tabName = match.match(/#tab:(\w+)#/)[1];
// //     htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
// //     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
// //   });
  
// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];
  
// //   const processPart = (part, index) => {
// //     if (!part) return null;
  
// //     // Process SVG placeholders
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //     }
  
// //     if (part.startsWith('__HTML_PLACEHOLDER_')) {
// //       const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
// //       return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, sameTab, url] = linkMatch;
// //         return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
// //       }
// //     } else if (part.startsWith('@[') && part.endsWith(']@')) {
// //       return <span key={`code-${index}`} style={{
// //         backgroundColor: 'rgba(175, 184, 193, 0.2)',
// //         padding: '0.2em 0.4em',
// //         borderRadius: '6px',
// //         fontFamily: 'ui-monospace, monospace',
// //         fontSize: '95%',
// //         color: 'black',
// //         fontWeight: 300
// //       }}>{part.slice(2, -2)}</span>;
// //     }
// //     return part;
// //   };
  
// //   lines.forEach((line, lineIndex) => {
// //     const tabCount = line.match(/^\t*/)[0].length;
// //     const trimmedLine = line.replace(/^\t+/, '');
    
// //     // Process headings
// //     if (trimmedLine.startsWith('# ')) {
// //       elements.push(<h1 key={`h1-${lineIndex}`}>{processContent2(trimmedLine.substring(2))}</h1>);
// //       return;
// //     } else if (trimmedLine.startsWith('## ')) {
// //       elements.push(<h2 key={`h2-${lineIndex}`}>{processContent2(trimmedLine.substring(3))}</h2>);
// //       return;
// //     } else if (trimmedLine.startsWith('### ')) {
// //       elements.push(<h3 key={`h3-${lineIndex}`}>{processContent2(trimmedLine.substring(4))}</h3>);
// //       return;
// //     }
  
// //     // Split line into parts for processing
// //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g, 
// //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
    
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts.slice(trimmedLine.startsWith('- ') ? 1 : 0)}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });
  
// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }
  
// //   const hasListItems = elements.some(el => el && el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };

// // export const processContent = (content) => {
// //   // Type safety check
// //   if (!content) return null;
// //   if (typeof content !== 'string') {
// //     console.warn('processContent received non-string content:', typeof content);
// //     try {
// //       content = String(content || '');
// //     } catch (e) {
// //       console.error('Failed to convert content to string:', e);
// //       return null;
// //     }
// //   }

// //   // Process SVGs
// //   const svgs = [];
// //   let contentWithPlaceholders = safeReplace(content, /<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });

// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];

// //   const processPart = (part, index) => {
// //     if (!part) return part;
    
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgMatch = part.match(/__SVG_PLACEHOLDER_(\d+)__/);
// //       if (svgMatch) {
// //         const svgIndex = parseInt(svgMatch[1]);
// //         if (svgs[svgIndex]) {
// //           return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //         }
// //       }
// //       return part;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, url] = linkMatch;
        
// //         // Check if this is a special link format that needs nested processing
// //         if (typeof text === 'string' && typeof url === 'string') {
// //           try {
// //             // Check if we need to process this with processContent2
// //             if (text.includes('**') || text.includes('<svg') || text.includes('@[')) {
// //               return processContent2(part);
// //             }
            
// //             return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// //           } catch (e) {
// //             console.error('Error processing link:', e);
// //             return part;
// //           }
// //         }
// //       }
// //       return part;
// //     } else if (typeof part === 'string' && part.trim().startsWith('<') && part.trim().endsWith('>')) {
// //       return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
// //     }
// //     return part;
// //   };

// //   lines.forEach((line, lineIndex) => {
// //     // Guard against non-string lines
// //     if (typeof line !== 'string') {
// //       console.warn('Encountered non-string line:', typeof line);
// //       return;
// //     }
    
// //     const tabMatch = line.match(/^\t*/);
// //     const tabCount = tabMatch ? tabMatch[0].length : 0;
// //     const trimmedLine = line.replace(/^\t+/, '');

// //     // Process headings
// //     if (trimmedLine.startsWith('# ')) {
// //       elements.push(<h1 key={`h1-${lineIndex}`}>{processContent(trimmedLine.substring(2))}</h1>);
// //       return;
// //     } else if (trimmedLine.startsWith('## ')) {
// //       elements.push(<h2 key={`h2-${lineIndex}`}>{processContent(trimmedLine.substring(3))}</h2>);
// //       return;
// //     } else if (trimmedLine.startsWith('### ')) {
// //       elements.push(<h3 key={`h3-${lineIndex}`}>{processContent(trimmedLine.substring(4))}</h3>);
// //       return;
// //     }
    
// //     // Split with marker approach for better reliability
// //     const parts = safeReplace(trimmedLine, /(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/g, 
// //       (match) => `\n${match}\n`).split('\n').filter(Boolean);
      
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {trimmedLine.startsWith('- ') ? processedParts.slice(1) : processedParts}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });

// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }

// //   const hasListItems = elements.some(el => el && el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };


// // utils/contentProcessor.js
// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import Link from 'next/link';


//  const processContent2 = (content) => {
//   if (!content) return null;
  
//   // First process SVGs
//   const svgs = [];
//   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
//     svgs.push(match);
//     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
//   });
  
//   // Then process HTML blocks
//   const htmlBlocks = [];
//   const contentWithHtmlPlaceholders = contentWithPlaceholders.replace(/<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
//     // Skip if it's an SVG placeholder
//     if (match.includes('__SVG_PLACEHOLDER_')) {
//       return match;
//     }
//     htmlBlocks.push(match);
//     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
//   });
  
//   // Process tab links 
//   const contentWithTabLinks = contentWithHtmlPlaceholders.replace(/#tab:(\w+)#/g, (match) => {
//     const tabName = match.match(/#tab:(\w+)#/)[1];
//     htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
//     return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
//   });
  
//   const lines = contentWithTabLinks.split('\n');
//   let inList = false;
//   let currentListItem = [];
//   const elements = [];
  
//   const processPart = (part, index) => {
//     if (!part) return null;
  
//     // Process SVG placeholders first
//     if (part.startsWith('__SVG_PLACEHOLDER_')) {
//       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
//       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
//     }
  
//     if (part.startsWith('__HTML_PLACEHOLDER_')) {
//       const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
//       return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
//     } else if (part.startsWith('**') && part.endsWith('**')) {
//       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
//     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//      const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
//      if (linkMatch) {
//        const [, text, sameTab, url] = linkMatch;
//        return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
//      }
//     } else if (part.startsWith('@[') && part.endsWith(']@')) {
//       return <span key={`code-${index}`} style={{
//         backgroundColor: 'rgba(175, 184, 193, 0.2)',
//         padding: '0.2em 0.4em',
//         borderRadius: '6px',
//         fontFamily: 'ui-monospace, monospace',
//         fontSize: '95%',
//         color: 'black',
//         fontWeight: 300
//       }}>{part.slice(2, -2)}</span>;
//     }
//     return part;
//   };
  
//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
  
//     // Updated regex to include SVG placeholders and code blocks
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g);
//     const processedParts = parts.filter(Boolean).map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
//     if (trimmedLine.startsWith('- ')) {
//       if (inList && currentListItem.length > 0) {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//       }
//       inList = true;
//       currentListItem.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts.slice(1)}
//         </span>
//       );
//     } else if (inList) {
//       if (trimmedLine === '') {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//         inList = false;
//         elements.push(<br key={`br-${elements.length}`} />);
//       } else {
//         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
//         currentListItem.push(
//           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//             {processedParts}
//           </span>
//         );
//       }
//     } else {
//       elements.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts}
//         </span>
//       );
//       if (lineIndex < lines.length - 1) {
//         elements.push(<br key={`br-${elements.length}`} />);
//       }
//     }
//   });
  
//   if (inList && currentListItem.length > 0) {
//     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//   }
  
//   const hasListItems = elements.some(el => el.type === 'li');
//   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
//   };

// export const processContent = (content) => {
//   if (!content) return null;

//   const svgs = [];
//   // const contentWithPlaceholders = content.replaceAll(/<svg[\s\S]*?<\/svg>/g, (match) => {
//   //   svgs.push(match);
//   //   return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
//   // });

//   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
//     svgs.push(match);
//     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
//   });

//   const lines = contentWithPlaceholders.split('\n');
//   let inList = false;
//   let currentListItem = [];
//   const elements = [];

//   const processPart = (part, index) => {
//     if (part.startsWith('__SVG_PLACEHOLDER_')) {
//       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
//       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
//     } else if (part.startsWith('**') && part.endsWith('**')) {
//       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
//     } else if (part.startsWith('$$') && part.endsWith('$$')) {
//       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
//     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       // if (linkMatch) {
//       //   const [, text, url] = linkMatch;
//       //   return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
//       // }
//       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       // if (linkMatch) {
//       //  const [, text, url] = linkMatch;
//       //  // Use target="_blank" only if no ! prefix
//       //  const isInternalLink = url.startsWith('!');
//       //  const cleanUrl = isInternalLink ? url.substring(1) : url;
//       //  return <a 
//       //    key={`link-${index}`} 
//       //    href={cleanUrl}
//       //    {...(!isInternalLink && {target: "_blank", rel: "noopener noreferrer"})}
//       //  >
//       //    {text}
//       //  </a>;
//       // }
//       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       if (linkMatch) {
//        const [, text, url] = linkMatch;  // extract text and url
//        return processContent2(part); // pass full markdown link
//       }
// //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// // if (linkMatch) {
// //   const [, text, url] = linkMatch;
// //   return <a key={`link-${index}`} href={url}>{text}</a>; 
// // }
//       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       // if (linkMatch) {
//       //   const [, text, url] = linkMatch;
//       //   return <a key={`link-${index}`} href={url.startsWith('/') ? url : `/${url}`}>{text}</a>;
//       // }

//       // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       // if (linkMatch) {
//       //   const [, text, url] = linkMatch;
//       //   return <a key={`link-${index}`} href={url} 
//       //     onClick={(e) => {
//       //       if (!url.includes('://')) {
//       //         e.preventDefault();
//       //         window.location.href = url;
//       //       }
//       //     }}
//       //   >{text}</a>;
//       // }
//     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
//       return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
//     }
//     return part;
//   };

//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
    
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
//     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

//     if (trimmedLine.startsWith('- ')) {
//       if (inList && currentListItem.length > 0) {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//       }
//       inList = true;
//       currentListItem.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts.slice(1)}
//         </span>
//       );
//     } else if (inList) {
//       if (trimmedLine === '') {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//         inList = false;
//         elements.push(<br key={`br-${elements.length}`} />);
//       } else {
//         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
//         currentListItem.push(
//           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//             {processedParts}
//           </span>
//         );
//       }
//     } else {
//       elements.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts}
//         </span>
//       );
//       if (lineIndex < lines.length - 1) {
//         elements.push(<br key={`br-${elements.length}`} />);
//       }
//     }
//   });

//   if (inList && currentListItem.length > 0) {
//     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//   }

//   const hasListItems = elements.some(el => el.type === 'li');
//   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// };


import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Link from 'next/link';


 const processContent2 = (content) => {
  if (!content) return null;
  
  // First process SVGs
  const svgs = [];
  const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });
  
  // Then process HTML blocks
  const htmlBlocks = [];
  const contentWithHtmlPlaceholders = contentWithPlaceholders.replace(/<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
    // Skip if it's an SVG placeholder
    if (match.includes('__SVG_PLACEHOLDER_')) {
      return match;
    }
    htmlBlocks.push(match);
    return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
  });
  
  // Process tab links 
  const contentWithTabLinks = contentWithHtmlPlaceholders.replace(/#tab:(\w+)#/g, (match) => {
    const tabName = match.match(/#tab:(\w+)#/)[1];
    htmlBlocks.push(`<a href="#tab-${tabName}" class="tab-link">${tabName}</a>`);
    return `__HTML_PLACEHOLDER_${htmlBlocks.length - 1}__`;
  });
  
  const lines = contentWithTabLinks.split('\n');
  let inList = false;
  let currentListItem = [];
  const elements = [];
  
  const processPart = (part, index) => {
    if (!part) return null;
  
    // Process SVG placeholders first
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    }
  
    if (part.startsWith('__HTML_PLACEHOLDER_')) {
      const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
      return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
    } else if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
     const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
     if (linkMatch) {
       const [, text, sameTab, url] = linkMatch;
       return <a key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
     }
    } else if (part.startsWith('@[') && part.endsWith(']@')) {
      return <span key={`code-${index}`} style={{
        backgroundColor: 'rgba(175, 184, 193, 0.2)',
        padding: '0.2em 0.4em',
        borderRadius: '6px',
        fontFamily: 'ui-monospace, monospace',
        fontSize: '95%',
        color: 'black',
        fontWeight: 300
      }}>{part.slice(2, -2)}</span>;
    }
    return part;
  };
  
  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');
  
    // Updated regex to include SVG placeholders and code blocks
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g);
    const processedParts = parts.filter(Boolean).map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
    if (trimmedLine.startsWith('- ')) {
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts.slice(1)}
        </span>
      );
    } else if (inList) {
      if (trimmedLine === '') {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
        inList = false;
        elements.push(<br key={`br-${elements.length}`} />);
      } else {
        currentListItem.push(<br key={`br-${currentListItem.length}`} />);
        currentListItem.push(
          <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </span>
        );
      }
    } else {
      elements.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts}
        </span>
      );
      if (lineIndex < lines.length - 1) {
        elements.push(<br key={`br-${elements.length}`} />);
      }
    }
  });
  
  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
  }
  
  const hasListItems = elements.some(el => el.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
  };

export const processContent = (content) => {
  if (!content) return null;

  const svgs = [];
  // const contentWithPlaceholders = content.replaceAll(/<svg[\s\S]*?<\/svg>/g, (match) => {
  //   svgs.push(match);
  //   return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  // });

  const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });

  const lines = contentWithPlaceholders.split('\n');
  let inList = false;
  let currentListItem = [];
  const elements = [];

  const processPart = (part, index) => {
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    } else if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      // if (linkMatch) {
      //   const [, text, url] = linkMatch;
      //   return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
      // }
      // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      // if (linkMatch) {
      //  const [, text, url] = linkMatch;
      //  // Use target="_blank" only if no ! prefix
      //  const isInternalLink = url.startsWith('!');
      //  const cleanUrl = isInternalLink ? url.substring(1) : url;
      //  return <a 
      //    key={`link-${index}`} 
      //    href={cleanUrl}
      //    {...(!isInternalLink && {target: "_blank", rel: "noopener noreferrer"})}
      //  >
      //    {text}
      //  </a>;
      // }
      const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
       const [, text, url] = linkMatch;  // extract text and url
       return processContent2(part); // pass full markdown link
      }
//       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// if (linkMatch) {
//   const [, text, url] = linkMatch;
//   return <a key={`link-${index}`} href={url}>{text}</a>; 
// }
      // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      // if (linkMatch) {
      //   const [, text, url] = linkMatch;
      //   return <a key={`link-${index}`} href={url.startsWith('/') ? url : `/${url}`}>{text}</a>;
      // }

      // const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      // if (linkMatch) {
      //   const [, text, url] = linkMatch;
      //   return <a key={`link-${index}`} href={url} 
      //     onClick={(e) => {
      //       if (!url.includes('://')) {
      //         e.preventDefault();
      //         window.location.href = url;
      //       }
      //     }}
      //   >{text}</a>;
      // }
    } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
      return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />;
    }
    return part;
  };

  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');
    
    // Process headings
    if (trimmedLine.startsWith('# ')) {
      elements.push(<h1 key={`h1-${lineIndex}`}>{processContent(trimmedLine.substring(2))}</h1>);
      return;
    } else if (trimmedLine.startsWith('## ')) {
      elements.push(<h2 key={`h2-${lineIndex}`}>{processContent(trimmedLine.substring(3))}</h2>);
      return;
    } else if (trimmedLine.startsWith('### ')) {
      elements.push(<h3 key={`h3-${lineIndex}`}>{processContent(trimmedLine.substring(4))}</h3>);
      return;
    }
    
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
    const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

    if (trimmedLine.startsWith('- ')) {
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts.slice(1)}
        </span>
      );
    } else if (inList) {
      if (trimmedLine === '') {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
        inList = false;
        elements.push(<br key={`br-${elements.length}`} />);
      } else {
        currentListItem.push(<br key={`br-${currentListItem.length}`} />);
        currentListItem.push(
          <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </span>
        );
      }
    } else {
      elements.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts}
        </span>
      );
      if (lineIndex < lines.length - 1) {
        elements.push(<br key={`br-${elements.length}`} />);
      }
    }
  });

  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
  }

  const hasListItems = elements.some(el => el.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};