

// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import Link from 'next/link';
// import { renderAcademicBlockHTML } from './academicBlocks';


//  const processContent2 = (content,styles = null) => {
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
    

//     if (part.startsWith('__ACADEMIC_BLOCK__') && part.includes('__TYPE:')) {
//       try {
//         const typeMatch = part.match(/__TYPE:([^_]+)__/);
//         const contentMatch = part.match(/__CONTENT:([^]+)__END__/);
        
//         if (typeMatch && contentMatch) {
//           const blockType = typeMatch[1];
//           const content = contentMatch[1];
//           return <div key={`academic-${index}`} dangerouslySetInnerHTML={{ 
//             __html: renderAcademicBlockHTML(content, blockType) 
//           }} />;
//         }
//       } catch (e) {
//         console.error('Error processing academic block:', e);
//       }
//       return part;
//     }
    
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
//       //  return <a  key={`link-${index}`} href={url} {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
//       return <a key={`link-${index}`} href={url} className={styles?.markdownLink || "markdown-link"} data-markdown-link="true" {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
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
//     else if (part.startsWith('@table:[') && part.endsWith(']@')) {
//       const markdownTable = part.slice(8, -2).trim();
//       const rows = markdownTable.split('\n').map(row => 
//         row.trim().split('|').slice(1, -1).map(cell => cell.trim())
//       );
      
//       return (
//         <table key={`table-${index}`} border="1" cellPadding="6" style={{ borderCollapse: 'collapse', margin: '1em 0' }}>
//           <thead>
//             <tr>{rows[0].map((cell, i) => <th key={`th-${i}`}>{cell}</th>)}</tr>
//           </thead>
//           <tbody>
//             {rows.slice(1).map((row, rowIndex) => (
//               <tr key={`tr-${rowIndex}`}>
//                 {row.map((cell, cellIndex) => <td key={`td-${rowIndex}-${cellIndex}`}>{cell}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//     return part;
//   };
  
//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
  
//     // Updated regex to include SVG placeholders and code blocks
//     // const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/g);
//     // const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@academic\[.+?\]@)/);
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@academic\[[\s\S]+?\]@)/);
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

// export const processContent = (content,styles = null) => {
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
//     if (part.startsWith('@academic[') && part.endsWith(']@')) {
//       const academicContent = part.slice(10, -2);
//       const splitIndex = academicContent.indexOf(':');
//       if (splitIndex > 0) {
//         const blockType = academicContent.substring(0, splitIndex);
//         const content = academicContent.substring(splitIndex + 1);
//         return <div key={`academic-${index}`} dangerouslySetInnerHTML={{ 
//           __html: renderAcademicBlockHTML(content.trim(), blockType.trim()) 
//         }} />;
//       }
//       return part;
//     }

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
//     else if (part.startsWith('@[') && part.endsWith(']@')) {
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
//     else if (part.startsWith('@table:[') && part.endsWith(']@')) {
//       const markdownTable = part.slice(8, -2).trim();
//       const rows = markdownTable.split('\n').map(row => 
//         row.trim().split('|').slice(1, -1).map(cell => cell.trim())
//       );
      
//       return (
//         <table key={`table-${index}`} border="1" cellPadding="6" style={{ borderCollapse: 'collapse', margin: '1em 0' }}>
//           <thead>
//             <tr>{rows[0].map((cell, i) => <th key={`th-${i}`}>{cell}</th>)}</tr>
//           </thead>
//           <tbody>
//             {rows.slice(1).map((row, rowIndex) => (
//               <tr key={`tr-${rowIndex}`}>
//                 {row.map((cell, cellIndex) => <td key={`td-${rowIndex}-${cellIndex}`}>{cell}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
    
//     return part;
//   };

//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
    
//     // Process headings
//     if (trimmedLine.startsWith('# ')) {
//       elements.push(<h1 key={`h1-${lineIndex}`}>{processContent(trimmedLine.substring(2))}</h1>);
//       return;
//     } else if (trimmedLine.startsWith('## ')) {
//       elements.push(<h2 key={`h2-${lineIndex}`}>{processContent(trimmedLine.substring(3))}</h2>);
//       return;
//     } else if (trimmedLine.startsWith('### ')) {
//       elements.push(<h3 key={`h3-${lineIndex}`}>{processContent(trimmedLine.substring(4))}</h3>);
//       return;
//     }
    
//     // const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
//     // const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@)/);
//     // const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@academic\[.+?\]@)/);
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@academic\[[\s\S]+?\]@)/);
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
import { renderAcademicBlockHTML } from './academicBlocks';

export const processContent = (content, styles = null) => {
  if (!content) return null;
  
  // First process academic blocks (multiline)
  const academicBlocks = [];
  const contentWithAcademicPlaceholders = content.replace(/@academic\[[\s\S]*?\]@/g, (match) => {
    const academicContent = match.slice(10, -2);
    const splitIndex = academicContent.indexOf(':');
    if (splitIndex > 0) {
      const blockType = academicContent.substring(0, splitIndex);
      const blockContent = academicContent.substring(splitIndex + 1);
      academicBlocks.push(renderAcademicBlockHTML(blockContent.trim(), blockType.trim()));
      return `__ACADEMIC_PLACEHOLDER_${academicBlocks.length - 1}__`;
    }
    return match;
  });
  
  // Then process SVGs
  const svgs = [];
  const contentWithSvgPlaceholders = contentWithAcademicPlaceholders.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });
  
  // Then process HTML blocks
  const htmlBlocks = [];
  const contentWithHtmlPlaceholders = contentWithSvgPlaceholders.replace(/<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
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
    
    // Process academic placeholders
    if (part.startsWith('__ACADEMIC_PLACEHOLDER_')) {
      const academicIndex = parseInt(part.match(/__ACADEMIC_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`academic-${index}`} dangerouslySetInnerHTML={{ __html: academicBlocks[academicIndex] }} />;
    }
    
    // Process SVG placeholders
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    }
  
    // Process HTML placeholders
    if (part.startsWith('__HTML_PLACEHOLDER_')) {
      const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
      return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
    }

    // Block math
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
    }

    // Inline math
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
    }

    // Bold text
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    }

    // Links
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
      if (linkMatch) {
        const [, text, sameTab, url] = linkMatch;
        return <a key={`link-${index}`} href={url} className={styles?.markdownLink || "markdown-link"} data-markdown-link="true" {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{text}</a>;
      }
    }

    // Inline code
    if (part.startsWith('@[') && part.endsWith(']@')) {
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

    // Tables
    if (part.startsWith('@table:[') && part.endsWith(']@')) {
      const markdownTable = part.slice(8, -2).trim();
      const rows = markdownTable.split('\n').map(row => 
        row.trim().split('|').slice(1, -1).map(cell => cell.trim())
      );
      
      return (
        <table key={`table-${index}`} border="1" cellPadding="6" style={{ borderCollapse: 'collapse', margin: '1em 0' }}>
          <thead>
            <tr>{rows[0].map((cell, i) => <th key={`th-${i}`}>{cell}</th>)}</tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr key={`tr-${rowIndex}`}>
                {row.map((cell, cellIndex) => <td key={`td-${rowIndex}-${cellIndex}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    
    return part;
  };
  
  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');

    // Handle headings
    if (trimmedLine.startsWith('### ')) {
      elements.push(<h3 key={`h3-${lineIndex}`}>{processContent(trimmedLine.substring(4))}</h3>);
      return;
    } else if (trimmedLine.startsWith('## ')) {
      elements.push(<h2 key={`h2-${lineIndex}`}>{processContent(trimmedLine.substring(3))}</h2>);
      return;
    } else if (trimmedLine.startsWith('# ')) {
      elements.push(<h1 key={`h1-${lineIndex}`}>{processContent(trimmedLine.substring(2))}</h1>);
      return;
    }
  
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|__ACADEMIC_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@table:\[[\s\S]+?\]@)/);
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
  
  const hasListItems = elements.some(el => el?.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};