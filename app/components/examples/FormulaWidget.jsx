

import React  from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './FormulaWidget.module.css';
import { lora700, poppins500 } from '@/app/utils/fonts';
// import Link from 'next/link';
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

  if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return content;
};

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
//     // } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//     //   const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//     //   if (linkMatch) {
//     //     const [, text, url] = linkMatch;
//     //     return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
//     //   }
//   } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//     const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//     if (linkMatch) {
//       const [, text, url] = linkMatch;
//       return <a key={`link-${index}`} href={url}  target="_blank" rel="noopener noreferrer">{text}</a>;
//     }
  

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

const FormulaWidget = ({ data, title = data.name || '' ,type='Formula'}) => {
  const widgetId = React.useId();

  return (
    <div>
      {data.before && (
        <div className={`${styles.beforeContent} ${poppins500.className}`}>
          {processContent(data.before)}
        </div>
      )}
      <div className={styles.widget}>
        <br />
        <br />
        {title.length > 0 && (
          <div className={styles.header}>
            <h4 className={`${styles.title} ${lora700.className}`}>{renderMathContent(title)}</h4>
          </div>
        )}
        <div className={`${styles.content} ${poppins500.className}`}>
          <div className={styles.formulaContainer}>
            <h3 className={styles.formulaTitle}>{type}:</h3>
            <div className={styles.formula}>{processContent(data.formula)}</div>
          </div>
          
          <div className={styles.tabsContainer}>
            {Object.entries(data.fields).map(([field, description], index) => (
              <React.Fragment key={field}>
                <input 
                  type="radio" 
                  name={`tabs-${widgetId}`}
                  id={`tab-${widgetId}-${index}`}
                  className={styles.tabInput}
                  defaultChecked={index === 0}
                />
                <label htmlFor={`tab-${widgetId}-${index}`} className={styles.tabLabel}>
                  {renderMathContent(field)}
                </label>
                <div className={styles.tabContent}>
                  {processContent(description)}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {data.after && (
        <div className={`${styles.afterContent} ${poppins500.className}`}>
          {processContent(data.after)}
        </div>
      )}
    </div>
  );
};

export default FormulaWidget;