import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { renderAcademicBlockHTML } from './academicBlocks';
import { renderMathBlock } from './renderMathBlock'; // ← NEW

// The inline tokeniser. Shared by the top-level line splitter and by the bold
// branch, so nested content is tokenised exactly the same way in both places.
// Order matters: earlier alternatives win on collisions.
const INLINE_TOKEN_PATTERN = /(__SVG_PLACEHOLDER_\d+__|__HTML_PLACEHOLDER_\d+__|__ACADEMIC_PLACEHOLDER_\d+__|@@(?:\[[^\]]*\])?[\s\S]+?@@|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\)|@\[.+?\]@|@table:\[[\s\S]+?\]@|@span\[[^\]]+\]:[^@]+@)/;

// Plain-text segments are rendered as React text, so HTML entities written in
// page content (&apos;, &middot;, &#8722; ...) would print literally. Decode
// them here. Math, code, links and raw-HTML tokens never reach this.
const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', thinsp: '\u2009', ensp: '\u2002', emsp: '\u2003',
  mdash: '\u2014', ndash: '\u2013', hellip: '\u2026', bull: '\u2022', middot: '\u00b7', deg: '\u00b0',
  lsquo: '\u2018', rsquo: '\u2019', ldquo: '\u201c', rdquo: '\u201d', laquo: '\u00ab', raquo: '\u00bb',
  minus: '\u2212', plus: '+', plusmn: '\u00b1', times: '\u00d7', divide: '\u00f7', frasl: '\u2044',
  le: '\u2264', ge: '\u2265', ne: '\u2260', asymp: '\u2248', equiv: '\u2261', sim: '\u223c', prop: '\u221d',
  infin: '\u221e', radic: '\u221a', int: '\u222b', sum: '\u2211', prod: '\u220f', part: '\u2202', nabla: '\u2207',
  prime: '\u2032', Prime: '\u2033', sup1: '\u00b9', sup2: '\u00b2', sup3: '\u00b3', frac12: '\u00bd', frac14: '\u00bc', frac34: '\u00be',
  isin: '\u2208', notin: '\u2209', ni: '\u220b', sub: '\u2282', sup: '\u2283', sube: '\u2286', supe: '\u2287', nsub: '\u2284',
  cap: '\u2229', cup: '\u222a', empty: '\u2205', forall: '\u2200', exist: '\u2203', and: '\u2227', or: '\u2228', not: '\u00ac',
  perp: '\u22a5', parallel: '\u2225', Vert: '\u2016', ang: '\u2220', there4: '\u2234', sdot: '\u22c5', oplus: '\u2295', otimes: '\u2297',
  lfloor: '\u230a', rfloor: '\u230b', lceil: '\u2308', rceil: '\u2309', lang: '\u27e8', rang: '\u27e9',
  larr: '\u2190', rarr: '\u2192', uarr: '\u2191', darr: '\u2193', harr: '\u2194', lArr: '\u21d0', rArr: '\u21d2', hArr: '\u21d4', map: '\u21a6',
  reals: '\u211d', integers: '\u2124', naturals: '\u2115', rationals: '\u211a', complexes: '\u2102',
  alpha: '\u03b1', beta: '\u03b2', gamma: '\u03b3', delta: '\u03b4', epsilon: '\u03b5', zeta: '\u03b6', eta: '\u03b7', theta: '\u03b8',
  iota: '\u03b9', kappa: '\u03ba', lambda: '\u03bb', mu: '\u03bc', nu: '\u03bd', xi: '\u03be', omicron: '\u03bf', pi: '\u03c0',
  rho: '\u03c1', sigma: '\u03c3', sigmaf: '\u03c2', tau: '\u03c4', upsilon: '\u03c5', phi: '\u03c6', chi: '\u03c7', psi: '\u03c8', omega: '\u03c9',
  Alpha: '\u0391', Beta: '\u0392', Gamma: '\u0393', Delta: '\u0394', Epsilon: '\u0395', Zeta: '\u0396', Eta: '\u0397', Theta: '\u0398',
  Iota: '\u0399', Kappa: '\u039a', Lambda: '\u039b', Mu: '\u039c', Nu: '\u039d', Xi: '\u039e', Omicron: '\u039f', Pi: '\u03a0',
  Rho: '\u03a1', Sigma: '\u03a3', Tau: '\u03a4', Upsilon: '\u03a5', Phi: '\u03a6', Chi: '\u03a7', Psi: '\u03a8', Omega: '\u03a9',
  thetasym: '\u03d1', piv: '\u03d6', copy: '\u00a9', reg: '\u00ae', trade: '\u2122', sect: '\u00a7', para: '\u00b6', check: '\u2713', cross: '\u2717',
};

export const decodeEntities = (text) => (typeof text === 'string' && text.indexOf('&') !== -1
  ? text.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, name) => {
      if (name[0] === '#') {
        const code = name[1] === 'x' || name[1] === 'X' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
        return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : m;
      }
      return Object.prototype.hasOwnProperty.call(NAMED_ENTITIES, name) ? NAMED_ENTITIES[name] : m;
    })
  : text);

export const processContent = (content, styles = null) => {
  if (!content) return null;
  
  // Process academic blocks
  // const academicBlocks = [];
  // const contentWithAcademicPlaceholders = content.replace(/@academic\[[\s\S]*?\]@/g, (match) => {
  //   const academicContent = match.slice(10, -2);
  //   // const splitIndex = academicContent.indexOf(':');

  //   // const splitIndex = academicContent.search(/(?<!width):/);

  //   const splitIndex = academicContent.search(/(?<!width)(?<!align):/);

  //   if (splitIndex > 0) {
  //     const beforeColon = academicContent.substring(0, splitIndex);
  //     const blockContent = academicContent.substring(splitIndex + 1);
      
  //     // let blockType = beforeColon;
  //     // let customWidth = null;
      
  //     // if (beforeColon.includes(',width:')) {
  //     //   const parts = beforeColon.split(',width:');
  //     //   blockType = parts[0];
  //     //   customWidth = parts[1];
  //     // }
      
  //     // academicBlocks.push(renderAcademicBlockHTML(blockContent.trim(), blockType.trim(), customWidth));

  //     let blockType = beforeColon;
  //     let customWidth = null;
  //     let customAlign = null;

  //     const parts = beforeColon.split(',');
  //     blockType = parts[0];
  //     parts.slice(1).forEach(p => {
  //       if (p.startsWith('width:')) customWidth = p.slice(6);
  //       if (p.startsWith('align:')) customAlign = p.slice(6);
  //     });

  //     academicBlocks.push(renderAcademicBlockHTML(blockContent.trim(), blockType.trim(), customWidth, customAlign));
  //     return `__ACADEMIC_PLACEHOLDER_${academicBlocks.length - 1}__`;
  //   }
  //   return match;
  // });


  const academicBlocks = [];
const contentWithAcademicPlaceholders = content.replace(/@academic\[[\s\S]*?\]@/g, (match) => {
  const academicContent = match.slice(10, -2);
  const splitIndex = academicContent.search(/(?<!width)(?<!align)(?<!cite)(?<!tags)(?<!number)(?<!linkto)(?<!collapsible)(?<!compact)(?<!aside):/);
  if (splitIndex > 0) {
    const beforeColon = academicContent.substring(0, splitIndex);
    const blockContent = academicContent.substring(splitIndex + 1);

    let blockType = beforeColon;
    let customWidth = null;
    let customAlign = null;
    const customOpts = {};

    const parts = beforeColon.split(',');
    blockType = parts[0];
    parts.slice(1).forEach((p) => {
      const colonIdx = p.indexOf(':');
      if (colonIdx === -1) return;
      const key = p.slice(0, colonIdx).trim();
      const val = p.slice(colonIdx + 1).trim();
      if (key === 'width') customWidth = val;
      else if (key === 'align') customAlign = val;
      else if (key === 'cite') customOpts.cite = val;
      else if (key === 'tags') customOpts.tags = val;
      else if (key === 'number') customOpts.number = val;
      else if (key === 'linkto') customOpts.linkto = val;
      else if (key === 'collapsible') customOpts.collapsible = val === 'true';
      else if (key === 'compact') customOpts.compact = val === 'true';
      else if (key === 'aside') customOpts.aside = val === 'true';
    });

    academicBlocks.push(
      renderAcademicBlockHTML(blockContent.trim(), blockType.trim(), customWidth, customAlign, customOpts)
    );
    return `__ACADEMIC_PLACEHOLDER_${academicBlocks.length - 1}__`;
  }
  return match;
});
  
  // Process SVGs
  const svgs = [];
  const contentWithSvgPlaceholders = contentWithAcademicPlaceholders.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });
  
  // Process HTML blocks
  const htmlBlocks = [];
  const contentWithHtmlPlaceholders = contentWithSvgPlaceholders.replace(/<[^>]+>.*?<\/[^>]+>|<[^/>]+\/>/g, (match) => {
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
    
    // Academic placeholders
    if (part.startsWith('__ACADEMIC_PLACEHOLDER_')) {
      const academicIndex = parseInt(part.match(/__ACADEMIC_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`academic-${index}`} dangerouslySetInnerHTML={{ __html: academicBlocks[academicIndex] }} />;
    }
    
    // SVG placeholders
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    }
  
    // HTML placeholders
    if (part.startsWith('__HTML_PLACEHOLDER_')) {
      const htmlIndex = parseInt(part.match(/__HTML_PLACEHOLDER_(\d+)__/)[1]);
      return <span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlBlocks[htmlIndex] }} />;
    }

    // Styled spans
    if (part.startsWith('@span[') && part.includes(']:') && part.endsWith('@')) {
      const spanMatch = part.match(/@span\[([^\]]+)\]:(.+?)@/);
      if (spanMatch) {
        const [, styles, text] = spanMatch;
        const styleObj = {};
        styles.split(',').forEach(style => {
          const [prop, value] = style.split(':');
          if (prop && value) {
            styleObj[prop.trim()] = value.trim();
          }
        });
        return <span key={`styled-span-${index}`} style={styleObj}>{processContent(text)}</span>;
      }
    }

    // ── NEW: Custom math blocks  @@[variant,width] LaTeX @@  ──
    // Variant defaults to 'F' if omitted. Width: bare number → px,
    // string with units (80%, 40rem) → passed as-is, omitted → fit-content.
    if (part.startsWith('@@') && part.endsWith('@@')) {
      let inner = part.slice(2, -2);
      let variant = 'F';
      let width;
      const cfg = inner.match(/^\[([^\]]*)\]([\s\S]*)/);
      if (cfg) {
        const [variantStr, widthStr] = cfg[1].split(',').map(s => s.trim());
        inner = cfg[2];
        if (variantStr) variant = variantStr;
        if (widthStr) {
          const num = Number(widthStr);
          width = Number.isFinite(num) ? num : widthStr;
        }
      }
      return <React.Fragment key={`math-block-${index}`}>{renderMathBlock(inner.trim(), { variant, width })}</React.Fragment>;
    }
    // ── END NEW ─────────────────────────────────────────────────

    // Block math
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
    }

    // Inline math
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
    }

    // Bold text
    // The inner text is re-tokenised with the same splitter and fed back through
    // processPart, so $math$, links and @[code]@ inside ** ** render instead of
    // printing raw. Before this, the inner text was inserted as a plain string.
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldInner = part.slice(2, -2);
      const boldParts = boldInner
        .split(INLINE_TOKEN_PATTERN)
        .filter(Boolean)
        .map((innerPart, innerIndex) => processPart(innerPart, `${index}-bold-${innerIndex}`));
      return <strong key={`strong-${index}`}>{boldParts}</strong>;
    }

    // Links
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[(.+?)\]\((!)?(.+?)\)/);
      if (linkMatch) {
        const [, text, sameTab, url] = linkMatch;
        return <a key={`link-${index}`} href={url} className={styles?.markdownLink || "markdown-link"} data-markdown-link="true" {...(!sameTab && { target: "_blank", rel: "noopener noreferrer" })}>{decodeEntities(text)}</a>;
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
    
    return decodeEntities(part);
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
  
    // ↓↓↓ ONE ADDITION TO THE SPLIT REGEX (the @@...@@ pattern, placed
    //     before $$...$$ and other patterns so it wins on collisions)
    const parts = trimmedLine.split(INLINE_TOKEN_PATTERN);
    const processedParts = parts.filter(Boolean).map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
  
    if (trimmedLine.startsWith('- ')) {
      // Process the item without its "- " marker, so plain words before the first token are kept.
      const itemParts = trimmedLine.substring(2).split(INLINE_TOKEN_PATTERN).filter(Boolean).map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {itemParts}
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
      const hasBlockPlaceholder = /(__SVG_PLACEHOLDER_\d+__|__ACADEMIC_PLACEHOLDER_\d+__)/.test(trimmedLine);
      if (hasBlockPlaceholder) {
        elements.push(
          <div key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </div>
        );
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
    }
  });
  
  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
  }
  
  const hasListItems = elements.some(el => el?.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};