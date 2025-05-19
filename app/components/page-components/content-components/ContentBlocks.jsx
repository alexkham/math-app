
// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import styles from './ContentBlocks.module.css';
// import { lora700, poppins500 } from '@/app/utils/fonts';

// const createSlug = (text) => {
//   const cleanText = text.replace(/\s*\(.*?\)\s*/g, '').trim();
//   return cleanText.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
// };

// const renderMathContent = (content) => {
//   if (typeof content !== 'string') return content;

//   const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
//   return parts.map((part, index) => {
//     if (part.startsWith('$$') && part.endsWith('$$')) {
//       return <BlockMath key={index} math={part.slice(2, -2)} />;
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       return <InlineMath key={index} math={part.slice(1, -1)} />;
//     } else {
//       return <span key={index}>{part}</span>;
//     }
//   });
// };

// const parseHTMLContent = (content) => {
//   if (typeof content !== 'string') return content;

//   // Check if the content is HTML-like
//   if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
//     return <div dangerouslySetInnerHTML={{ __html: content }} />;
//   }

//   return content;
// };


// // const processContent = (content) => {
// //   const svgs = [];
// //   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });

// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];

// //   const processPart = (part, index) => {
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
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
// //         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// //       }
// //     }
// //     return part;
// //   };

// //   lines.forEach((line, lineIndex) => {
// //     const tabCount = line.match(/^\t*/)[0].length;
// //     const trimmedLine = line.replace(/^\t+/, '');
    
// //     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts.slice(1)}
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

// //   const hasListItems = elements.some(el => el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };

// const processContent = (content) => {
//   const svgs = [];
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
//       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       if (linkMatch) {
//         const [, text, url] = linkMatch;
//         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
//       }
//     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
//       return parseHTMLContent(part);
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

// const ContentBlocks = ({ tocItems }) => {
//   const mainItems = tocItems.filter(item => item.content || item.before || item.after);

//   return (
//     <div className={styles.contentBlocks}>
//       {mainItems.map((item, index) => {
//         const prevItem = mainItems[index - 1];
//         const nextItem = mainItems[index + 1];
//         const prevSlug = prevItem ? createSlug(prevItem.title) : null;
//         const nextSlug = nextItem ? createSlug(nextItem.title) : null;
        
//         const processedContent = item.content ? processContent(item.content) : null;
//         const processedBefore = item.before ? item.before : null;
//         const processedAfter = item.after ? item.after : null;

//         return (
//           <section key={index} id={createSlug(item.title)} className={styles.block}>
//             {processedBefore && (
//               <div 
//                 className={`${styles.beforeContent} ${poppins500.className}`}
//                 dangerouslySetInnerHTML={{ __html: processedBefore }}
//               />
//             )}
//             <br />
//             <br />
            
//             <h2 className={`${styles.blockTitle} ${lora700.className}`}>{renderMathContent(item.title)}</h2>
//             {processedContent && (
//               <div className={`${styles.blockContent} ${poppins500.className}`}>
//                 {processedContent}
//               </div>
//             )}
//             <div className={styles.navigation}>
//               <a href="#toc" className={styles.navButton}>Back to Top</a>
//               {prevSlug && (
//                 <a href={`#${prevSlug}`} className={styles.navButton}>Previous</a>
//               )}
//               {nextSlug && (
//                 <a href={`#${nextSlug}`} className={styles.navButton}>Next</a>
//               )}
//             </div>
//             {processedAfter && (
//               <div 
//                 className={`${styles.afterContent} ${poppins500.className}`}
//                 dangerouslySetInnerHTML={{ __html: processedAfter }}
//               />
//             )}
//           </section>
//         );
//       })}
//     </div>
//   );
// };

// export default ContentBlocks;


import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './ContentBlocks.module.css';
import { lora700, poppins500 } from '@/app/utils/fonts';
import { processContent } from '@/app/utils/contentProcessor';

const createSlug = (text) => {
  const cleanText = text.replace(/\s*\(.*?\)\s*/g, '').trim();
  return cleanText.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
};

const renderMathContent = (content) => {
  if (typeof content !== 'string') return content;

  const parts = content.split(/(\$\$[\s\S]+?\$\$|\$[\s\S]+?\$)/);
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const parseHTMLContent = (content) => {
  if (typeof content !== 'string') return content;

  // Check if the content is HTML-like
  if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return content;
};

// const processContent = (content) => {
//   // If content is an array, process each item separately and return an array of elements
//   if (Array.isArray(content)) {
//     return content.map((item, index) => {
//       if (typeof item === 'string') {
//         if (item.trim().startsWith('<svg') && item.trim().endsWith('</svg>')) {
//           return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: item }} />;
//         } else if (item.trim().startsWith('<') && item.trim().endsWith('>')) {
//           return <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: item }} />;
//         } else {
//           return processSingleStringContent(item, index);
//         }
//       } else {
//         return item; // If it's already a React element, return as is
//       }
//     });
//   }
  
//   // Otherwise, process it as a single string
//   return processSingleStringContent(content);
// };

const processSingleStringContent = (content, outerIndex = 0) => {
  if (typeof content !== 'string') return content;
  
  const svgs = [];
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
      return <div key={`svg-${outerIndex}-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    } else if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${outerIndex}-${index}`}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${outerIndex}-${index}`} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${outerIndex}-${index}`} math={part.slice(1, -1)} />;
    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        const [, text, url] = linkMatch;
        return <a key={`link-${outerIndex}-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
      }
    } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
      return parseHTMLContent(part);
    }
    return part;
  };

  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');
    
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
    const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

    if (trimmedLine.startsWith('- ')) {
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${outerIndex}-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${outerIndex}-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts.slice(1)}
        </span>
      );
    } else if (inList) {
      if (trimmedLine === '') {
        elements.push(<li key={`li-${outerIndex}-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
        inList = false;
        elements.push(<br key={`br-${outerIndex}-${elements.length}`} />);
      } else {
        currentListItem.push(<br key={`br-${outerIndex}-${currentListItem.length}`} />);
        currentListItem.push(
          <span key={`tab-${outerIndex}-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </span>
        );
      }
    } else {
      elements.push(
        <span key={`tab-${outerIndex}-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts}
        </span>
      );
      if (lineIndex < lines.length - 1) {
        elements.push(<br key={`br-${outerIndex}-${elements.length}`} />);
      }
    }
  });

  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${outerIndex}-${elements.length}`}>{currentListItem}</li>);
  }

  const hasListItems = elements.some(el => el.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};

const ContentBlocks = ({ tocItems, tocReference = "toc" }) => {
  const mainItems = tocItems.filter(item => item.content || item.before || item.after);

  return (
    <div className={styles.contentBlocks}>
      {mainItems.map((item, index) => {
        const prevItem = mainItems[index - 1];
        const nextItem = mainItems[index + 1];
        const prevSlug = prevItem ? createSlug(prevItem.title) : null;
        const nextSlug = nextItem ? createSlug(nextItem.title) : null;
        
        const processedContent = item.content ? processContent(item.content) : null;
        const processedBefore = item.before ? item.before : null;
        const processedAfter = item.after ? item.after : null;

        return (
          <section key={index} id={createSlug(item.title)} className={styles.block}>
            {processedBefore && (
              <div 
                className={`${styles.beforeContent} ${poppins500.className}`}
                dangerouslySetInnerHTML={{ __html: processedBefore }}
              />
            )}
            <br />
            <br />
            
            <h2 className={`${styles.blockTitle} ${lora700.className}`}>{renderMathContent(item.title)}</h2>
            {processedContent && (
              <div className={`${styles.blockContent} ${poppins500.className}`}>
                {processedContent}
              </div>
            )}
            <div className={styles.navigation}>
              <a href={`#${tocReference}`} className={styles.navButton}>Back to Top</a>
              {prevSlug && (
                <a href={`#${prevSlug}`} className={styles.navButton}>Previous</a>
              )}
              {nextSlug && (
                <a href={`#${nextSlug}`} className={styles.navButton}>Next</a>
              )}
            </div>
            {processedAfter && (
              <div 
                className={`${styles.afterContent} ${poppins500.className}`}
                dangerouslySetInnerHTML={{ __html: processedAfter }}
              />
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ContentBlocks;