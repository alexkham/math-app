



// // import React, { useState } from 'react';
// // import Link from 'next/link';

// // // #rgb or #rrggbb  ->  rgba(...) string
// // const hexToRgba = (hex, alpha) => {
// //   const h = String(hex).replace('#', '');
// //   const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
// //   const n = parseInt(full, 16);
// //   const r = (n >> 16) & 255;
// //   const g = (n >> 8) & 255;
// //   const b = n & 255;
// //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // };

// // const ExplanationDetails = ({
// //   title = 'How to use',
// //   instructions,
// //   links,
// //   externalLinks,
// //   accent = '#2563eb',     // brilliant blue — single source of truth
// //   cardBg = '#ffffff',
// //   textColor = '#1f2937',
// // }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
// //     console.warn('ExplanationDetails: Missing or invalid instructions prop');
// //     return null;
// //   }

// //   // Derived from `accent` — keep palette one-color simple
// //   const sectionBg     = hexToRgba(accent, 0.07);
// //   const sectionBorder = hexToRgba(accent, 0.18);
// //   const hoverBg       = hexToRgba(accent, 0.14);
// //   const cardBorder    = '#eaeaea';
// //   const instructionText = '#4b5563';

// //   return (
// //     <>
// //       <style>
// //         {`
// //           @media screen and (max-width: 768px) {
// //             details {
// //               width: 250px !important;
// //               padding: 8px 15px !important;
// //               font-size: 12px !important;
// //               height: 50px;
// //               z-index: 100;
// //             }
// //           }
// //         `}
// //       </style>

// //       <div style={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'flex-start',
// //         alignSelf: 'center',
// //         position: 'relative',
// //         marginTop: '-10px',
// //       }}>
// //         <details
// //           open={isOpen}
// //           onToggle={(e) => setIsOpen(e.target.open)}
// //           style={{
// //             backgroundColor: cardBg,
// //             padding: '10px 25px',
// //             borderRadius: '12px',
// //             width: '400px',
// //             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //             fontSize: '0.9rem',
// //             color: textColor,
// //             border: `1px solid ${cardBorder}`,
// //             marginTop: '-5px',
// //             transition: 'all 0.3s ease',
// //             position: 'absolute',
// //             top: 0,
// //             left: '50%',
// //             transform: 'translateX(-50%)',
// //             zIndex: '100',
// //           }}>
// //           <summary style={{
// //             cursor: 'pointer',
// //             fontWeight: '600',
// //             color: accent,
// //             outline: 'none',
// //             listStyle: 'none',
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '8px',
// //             height: '10px',
// //           }}>
// //             <span style={{
// //               backgroundColor: accent,
// //               color: 'white',
// //               width: '22px',
// //               height: '22px',
// //               borderRadius: '50%',
// //               display: 'inline-flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               fontSize: '16px',
// //             }}>?</span>
// //             {title}
// //             <span style={{
// //               marginLeft: 'auto',
// //               fontSize: '18px',
// //               fontWeight: 'bold',
// //               backgroundColor: accent,
// //               color: 'white',
// //               width: '22px',
// //               height: '22px',
// //               borderRadius: '50%',
// //               display: 'inline-flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               lineHeight: '22px',
// //               paddingTop: '1px',
// //             }}>
// //               {isOpen ? '-' : '+'}
// //             </span>
// //           </summary>

// //           {/* Instructions List */}
// //           <ul style={{
// //             listStyle: 'none',
// //             margin: '15px 0 0 0',
// //             padding: '0 0 0 30px',
// //           }}>
// //             {instructions.map((instruction, index) => (
// //               <li
// //                 key={index}
// //                 style={{
// //                   marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// //                   color: instructionText,
// //                   fontWeight: '600',
// //                   fontSize: '14px',
// //                 }}
// //               >
// //                 • {instruction}
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Internal Links Section */}
// //           {links && links.length > 0 && (
// //             <div style={{
// //               backgroundColor: sectionBg,
// //               padding: '15px',
// //               borderRadius: '6px',
// //               marginTop: '15px',
// //             }}>
// //               <h4 style={{
// //                 color: '#1a1a1a',
// //                 fontSize: '16px',
// //                 margin: '0 0 12px 0',
// //                 paddingBottom: '8px',
// //                 borderBottom: `1px solid ${sectionBorder}`,
// //               }}>
// //                 Additional Resources
// //               </h4>
// //               {links.map((link, index) => (
// //                 <Link
// //                   key={index}
// //                   href={link.url}
// //                   style={{
// //                     display: 'block',
// //                     color: accent,
// //                     textDecoration: 'none',
// //                     fontSize: '14px',
// //                     padding: '8px',
// //                     margin: '4px 0',
// //                     borderRadius: '4px',
// //                     transition: 'background-color 0.2s',
// //                   }}
// //                   onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
// //                   onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
// //                 >
// //                   {link.text}
// //                 </Link>
// //               ))}
// //             </div>
// //           )}

// //           {/* External Links Section */}
// //           {externalLinks && externalLinks.length > 0 && (
// //             <div style={{
// //               backgroundColor: sectionBg,
// //               padding: '15px',
// //               borderRadius: '6px',
// //               marginTop: '15px',
// //             }}>
// //               <h4 style={{
// //                 color: '#1a1a1a',
// //                 fontSize: '16px',
// //                 margin: '0 0 12px 0',
// //                 paddingBottom: '8px',
// //                 borderBottom: `1px solid ${sectionBorder}`,
// //               }}>
// //                 External Links
// //               </h4>
// //               {externalLinks.map((link, index) => (
// //                 <a
// //                   key={index}
// //                   href={link.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   style={{
// //                     display: 'block',
// //                     color: accent,
// //                     textDecoration: 'none',
// //                     fontSize: '14px',
// //                     padding: '8px',
// //                     margin: '4px 0',
// //                     borderRadius: '4px',
// //                     transition: 'background-color 0.2s',
// //                   }}
// //                   onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
// //                   onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
// //                 >
// //                   {link.text}
// //                 </a>
// //               ))}
// //             </div>
// //           )}
// //         </details>
// //       </div>
// //     </>
// //   );
// // };

// // export default ExplanationDetails;


// import React, { useState } from 'react';
// import Link from 'next/link';
// import { processContent } from '../utils/contentProcessor';

// // #rgb or #rrggbb  ->  rgba(...) string
// const hexToRgba = (hex, alpha) => {
//   const h = String(hex).replace('#', '');
//   const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
//   const n = parseInt(full, 16);
//   const r = (n >> 16) & 255;
//   const g = (n >> 8) & 255;
//   const b = n & 255;
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// const ExplanationDetails = ({
//   title = 'How to use',
//   instructions,
//   links,
//   externalLinks,
//   accent = '#2563eb',     // brilliant blue — single source of truth
//   cardBg = '#ffffff',
//   textColor = '#1f2937',
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
//     console.warn('ExplanationDetails: Missing or invalid instructions prop');
//     return null;
//   }

//   // Derived from `accent` — keep palette one-color simple
//   const sectionBg     = hexToRgba(accent, 0.07);
//   const sectionBorder = hexToRgba(accent, 0.18);
//   const hoverBg       = hexToRgba(accent, 0.14);
//   const cardBorder    = '#eaeaea';
//   const instructionText = '#4b5563';

//   return (
//     <>
//       <style>
//         {`
//           @media screen and (max-width: 768px) {
//             details {
//               width: 250px !important;
//               padding: 8px 15px !important;
//               font-size: 12px !important;
//               height: 50px;
//               z-index: 100;
//             }
//           }
//         `}
//       </style>

//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         alignSelf: 'center',
//         position: 'relative',
//         marginTop: '-10px',
//       }}>
//         <details
//           open={isOpen}
//           onToggle={(e) => setIsOpen(e.target.open)}
//           style={{
//             backgroundColor: cardBg,
//             padding: '10px 25px',
//             borderRadius: '12px',
//             width: '400px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             fontSize: '0.9rem',
//             color: textColor,
//             border: `1px solid ${cardBorder}`,
//             marginTop: '-5px',
//             transition: 'all 0.3s ease',
//             position: 'absolute',
//             top: 0,
//             left: '50%',
//             transform: 'translateX(-50%)',
//             zIndex: '100',
//           }}>
//           <summary style={{
//             cursor: 'pointer',
//             fontWeight: '600',
//             color: accent,
//             outline: 'none',
//             listStyle: 'none',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             height: '10px',
//           }}>
//             <span style={{
//               backgroundColor: accent,
//               color: 'white',
//               width: '22px',
//               height: '22px',
//               borderRadius: '50%',
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '16px',
//             }}>?</span>
//             {processContent(title)}
//             <span style={{
//               marginLeft: 'auto',
//               fontSize: '18px',
//               fontWeight: 'bold',
//               backgroundColor: accent,
//               color: 'white',
//               width: '22px',
//               height: '22px',
//               borderRadius: '50%',
//               display: 'inline-flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               lineHeight: '22px',
//               paddingTop: '1px',
//             }}>
//               {isOpen ? '-' : '+'}
//             </span>
//           </summary>

//           {/* Instructions List */}
//           <ul style={{
//             listStyle: 'none',
//             margin: '15px 0 0 0',
//             padding: '0 0 0 30px',
//           }}>
//             {instructions.map((instruction, index) => (
//               <li
//                 key={index}
//                 style={{
//                   marginBottom: index !== instructions.length - 1 ? '8px' : 0,
//                   color: instructionText,
//                   fontWeight: '600',
//                   fontSize: '14px',
//                   display: 'flex',
//                   gap: '6px',
//                 }}
//               >
//                 <span aria-hidden='true'>&bull;</span>
//                 <span style={{ flex: 1, minWidth: 0 }}>{processContent(instruction)}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Internal Links Section */}
//           {links && links.length > 0 && (
//             <div style={{
//               backgroundColor: sectionBg,
//               padding: '15px',
//               borderRadius: '6px',
//               marginTop: '15px',
//             }}>
//               <h4 style={{
//                 color: '#1a1a1a',
//                 fontSize: '16px',
//                 margin: '0 0 12px 0',
//                 paddingBottom: '8px',
//                 borderBottom: `1px solid ${sectionBorder}`,
//               }}>
//                 Additional Resources
//               </h4>
//               {links.map((link, index) => (
//                 <Link
//                   key={index}
//                   href={link.url}
//                   style={{
//                     display: 'block',
//                     color: accent,
//                     textDecoration: 'none',
//                     fontSize: '14px',
//                     padding: '8px',
//                     margin: '4px 0',
//                     borderRadius: '4px',
//                     transition: 'background-color 0.2s',
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
//                   onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
//                 >
//                   {processContent(link.text)}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* External Links Section */}
//           {externalLinks && externalLinks.length > 0 && (
//             <div style={{
//               backgroundColor: sectionBg,
//               padding: '15px',
//               borderRadius: '6px',
//               marginTop: '15px',
//             }}>
//               <h4 style={{
//                 color: '#1a1a1a',
//                 fontSize: '16px',
//                 margin: '0 0 12px 0',
//                 paddingBottom: '8px',
//                 borderBottom: `1px solid ${sectionBorder}`,
//               }}>
//                 External Links
//               </h4>
//               {externalLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     display: 'block',
//                     color: accent,
//                     textDecoration: 'none',
//                     fontSize: '14px',
//                     padding: '8px',
//                     margin: '4px 0',
//                     borderRadius: '4px',
//                     transition: 'background-color 0.2s',
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
//                   onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
//                 >
//                   {processContent(link.text)}
//                 </a>
//               ))}
//             </div>
//           )}
//         </details>
//       </div>
//     </>
//   );
// };

// export default ExplanationDetails;


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { processContent } from '../utils/contentProcessor';

// #rgb or #rrggbb  ->  rgba(...) string
const hexToRgba = (hex, alpha) => {
  const h = String(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Bump the version whenever a rule below changes. Injection under a previously
// used id is skipped, so an unversioned edit silently does nothing.
const CSS_ID = 'explanation-details-styles-v1';

const CSS = `
.xd {
  --xd-ink: #131720;
  --xd-ink-soft: #5a6472;
  --xd-rule: #e3e9ef;
  --xd-hair: rgba(19, 23, 32, 0.06);
  --xd-panel: #f6f7f9;
  --xd-head: #eef0f4;
  --xd-paper: #ffffff;
  --xd-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  width: 100%;
  margin: 0 auto;
  border: 1px solid var(--xd-rule);
  border-radius: 10px;
  background: var(--xd-panel);
  overflow: hidden;
  color: var(--xd-ink);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.45;
}
.xd *, .xd *::before, .xd *::after { box-sizing: border-box; }
.xd > summary {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--xd-head);
  cursor: pointer;
  list-style: none;
  outline: none;
}
.xd > summary::-webkit-details-marker { display: none; }
.xd > summary:hover .xd-title { color: var(--xd-accent); }
.xd > summary:focus-visible { outline: 2px solid var(--xd-accent); outline-offset: -2px; }
.xd-glyph {
  flex: 0 0 auto;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--xd-accent);
  color: #ffffff;
  display: grid;
  place-items: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
}
.xd-title {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--xd-ink-soft);
}
.xd-lede { color: var(--xd-ink-soft); font-size: 12.5px; }
.xd-caret {
  margin-left: auto;
  color: var(--xd-ink-soft);
  font-size: 11px;
  transition: transform 0.18s ease;
}
.xd[open] .xd-caret { transform: rotate(90deg); }
.xd-body { padding: 16px; }
.xd-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 34px;
  counter-reset: xdstep;
}
.xd-steps > li {
  counter-increment: xdstep;
  position: relative;
  padding: 8px 0 8px 30px;
  color: var(--xd-ink-soft);
  font-size: 13px;
  line-height: 1.55;
  border-bottom: 1px solid var(--xd-hair);
}
.xd-steps > li::before {
  content: counter(xdstep, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 9px;
  font-family: var(--xd-mono);
  font-size: 10.5px;
  color: var(--xd-accent);
}
.xd-steps > li p { margin: 0 0 6px; }
.xd-steps > li p:last-child { margin-bottom: 0; }
.xd-steps b, .xd-steps strong { color: var(--xd-ink); font-weight: 600; }
.xd-steps code {
  font-family: var(--xd-mono);
  font-size: 12px;
  background: var(--xd-paper);
  border: 1px solid var(--xd-rule);
  border-radius: 4px;
  padding: 0 4px;
}
@media (max-width: 820px) { .xd-steps { grid-template-columns: 1fr; gap: 0; } }
.xd-links { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--xd-rule); }
.xd-links + .xd-links { margin-top: 10px; }
.xd-links h4 {
  margin: 0 0 8px;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--xd-ink-soft);
}
.xd-links a {
  display: inline-block;
  color: var(--xd-accent);
  text-decoration: none;
  font-size: 13px;
  padding: 5px 9px;
  margin: 0 6px 4px 0;
  border: 1px solid var(--xd-rule);
  border-radius: 5px;
  background: var(--xd-paper);
}
.xd-links a:hover { border-color: var(--xd-accent); background: var(--xd-accent-soft); }`;

function useInjectedStyles() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CSS_ID)) return;
    const tag = document.createElement('style');
    tag.id = CSS_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

const ExplanationDetails = ({
  title = 'How to use',
  lede = '',
  instructions,
  links,
  externalLinks,
  accent = '#2563eb',     // brilliant blue — single source of truth
  cardBg = '#f6f7f9',
  headBg = '#eef0f4',
  textColor = '#131720',
  maxWidth = 1200,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useInjectedStyles();

  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
    console.warn('ExplanationDetails: Missing or invalid instructions prop');
    return null;
  }

  const vars = {
    '--xd-accent': accent,
    '--xd-accent-soft': hexToRgba(accent, 0.08),
    '--xd-panel': cardBg,
    '--xd-head': headBg,
    '--xd-ink': textColor,
    maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth,
  };

  return (
    <details
      className={'xd ' + className}
      style={vars}
      open={isOpen}
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary>
        <span className="xd-glyph" aria-hidden="true">?</span>
        <span className="xd-title">{processContent(title)}</span>
        {lede ? <span className="xd-lede">{processContent(lede)}</span> : null}
        <span className="xd-caret" aria-hidden="true">&#9654;</span>
      </summary>

      <div className="xd-body">
        <ol className="xd-steps">
          {instructions.map((instruction, index) => (
            <li key={index}>{processContent(instruction)}</li>
          ))}
        </ol>

        {links && links.length > 0 && (
          <div className="xd-links">
            <h4>Additional resources</h4>
            {links.map((link, index) => (
              <Link key={index} href={link.url}>{processContent(link.text)}</Link>
            ))}
          </div>
        )}

        {externalLinks && externalLinks.length > 0 && (
          <div className="xd-links">
            <h4>External links</h4>
            {externalLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {processContent(link.text)}
              </a>
            ))}
          </div>
        )}
      </div>
    </details>
  );
};

export default ExplanationDetails;