// import React from 'react';
// import { processContent } from '../../utils/contentProcessor';

// /**
//  * NotationSection — Woven (A2) layout.
//  *
//  * Contextual links live inside the content strings and are rendered by
//  * processContent, exactly as in ordinary page content:
//  *     [label](!/path)      internal link, same tab
//  *     $x$ / $$x$$          KaTeX
//  *     **bold**             bold
//  *     @[code]@             inline monospace
//  *
//  * Structural links are props (symbolsHref / parentHref) and are rendered by
//  * the component itself.
//  *
//  * All colours come from the `theme` prop. Defaults are navy.
//  */

// const THEMES = {
//   navy: {
//     ink: '#0b1f3a',
//     accent: '#16345e',
//     steel: '#3d5a80',
//     slate: '#5b7398',
//     mist: '#eef3f9',
//     paper: '#f7f9fc',
//     rule: '#d3deec',
//     warnBorder: '#9c4221',
//     warnBg: '#fdf3ee',
//     warnInk: '#5c3520',
//     crossBorder: '#1f5f5b',
//     crossBg: '#eef6f5',
//     crossInk: '#22453f',
//   },
//   slate: {
//     ink: '#1e293b',
//     accent: '#475569',
//     steel: '#64748b',
//     slate: '#94a3b8',
//     mist: '#f1f5f9',
//     paper: '#f8fafc',
//     rule: '#e2e8f0',
//     warnBorder: '#b45309',
//     warnBg: '#fffbeb',
//     warnInk: '#78350f',
//     crossBorder: '#0f766e',
//     crossBg: '#f0fdfa',
//     crossInk: '#134e4a',
//   },
// };

// const SANS = "'Helvetica Neue', Arial, sans-serif";

// export default function NotationSection({
//   eyebrow = 'Notation',
//   title = '',
//   lead = '',
//   inherited = null,
//   entries = [],
//   symbolsHref = '',
//   symbolsLabel = '',
//   parentHref = '',
//   parentLabel = '',
//   theme = 'navy',
//   symbolColumnWidth = '150px',
//   maxWidth = '100%',
// }) {
//   const t = THEMES[theme] || THEMES.navy;

//   const shellStyle = {
//     maxWidth: maxWidth,
//     border: `1px solid ${t.rule}`,
//     borderTop: `3px solid ${t.accent}`,
//     background: '#ffffff',
//     margin: '24px 0',
//     boxSizing: 'border-box',
//   };

//   const headStyle = { padding: '22px 26px 0' };

//   const eyebrowStyle = {
//     fontFamily: SANS,
//     fontSize: '11px',
//     fontWeight: 700,
//     letterSpacing: '0.16em',
//     textTransform: 'uppercase',
//     color: t.steel,
//     margin: '0 0 6px',
//   };

//   const titleStyle = {
//     fontSize: '25px',
//     fontWeight: 700,
//     color: t.ink,
//     margin: '0 0 10px',
//     letterSpacing: '-0.01em',
//     lineHeight: 1.25,
//   };

//   const leadStyle = {
//     margin: 0,
//     paddingBottom: '18px',
//     color: '#33445c',
//     fontSize: '16.5px',
//     lineHeight: 1.6,
//   };

//   const bodyStyle = { padding: '0 26px' };

//   const inheritedStyle = {
//     margin: '0 0 4px',
//     padding: '10px 14px',
//     background: t.paper,
//     border: `1px solid ${t.rule}`,
//     borderLeft: `3px solid ${t.slate}`,
//     fontSize: '15px',
//     color: t.steel,
//     lineHeight: 1.55,
//   };

//   const rowStyle = (isFirst) => ({
//     display: 'grid',
//     gridTemplateColumns: `${symbolColumnWidth} 1fr`,
//     gap: '18px',
//     padding: '18px 0',
//     borderTop: isFirst ? 'none' : `1px solid ${t.rule}`,
//     alignItems: 'start',
//   });

//   const symStyle = {
//     background: t.mist,
//     borderLeft: `3px solid ${t.accent}`,
//     padding: '9px 10px',
//     textAlign: 'center',
//     fontSize: '18px',
//     color: t.ink,
//     overflowWrap: 'break-word',
//   };

//   const readStyle = {
//     fontFamily: SANS,
//     fontSize: '11px',
//     fontWeight: 700,
//     letterSpacing: '0.1em',
//     textTransform: 'uppercase',
//     color: t.steel,
//     margin: '0 0 4px',
//   };

//   const meansStyle = {
//     margin: 0,
//     fontSize: '16.5px',
//     lineHeight: 1.65,
//     color: t.ink,
//   };

//   const subStyle = {
//     margin: '8px 0 0',
//     fontSize: '15.5px',
//     lineHeight: 1.6,
//     color: t.steel,
//   };

//   const subLabelStyle = {
//     fontFamily: SANS,
//     fontSize: '11px',
//     fontWeight: 700,
//     letterSpacing: '0.08em',
//     textTransform: 'uppercase',
//     color: t.steel,
//     marginRight: '8px',
//   };

//   const bandStyle = (kind) => ({
//     margin: '10px 0 0',
//     padding: '9px 13px',
//     background: kind === 'warn' ? t.warnBg : t.crossBg,
//     borderLeft: `3px solid ${kind === 'warn' ? t.warnBorder : t.crossBorder}`,
//     fontSize: '15.5px',
//     lineHeight: 1.6,
//     color: kind === 'warn' ? t.warnInk : t.crossInk,
//   });

//   const bandLabelStyle = (kind) => ({
//     display: 'block',
//     fontFamily: SANS,
//     fontSize: '10.5px',
//     fontWeight: 700,
//     letterSpacing: '0.1em',
//     textTransform: 'uppercase',
//     color: kind === 'warn' ? t.warnBorder : t.crossBorder,
//     marginBottom: '3px',
//   });

//   const footStyle = {
//     marginTop: '22px',
//     borderTop: `1px solid ${t.rule}`,
//     background: t.paper,
//     padding: '14px 26px 16px',
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//     alignItems: 'center',
//   };

//   const pillStyle = (solid) => ({
//     display: 'inline-block',
//     fontFamily: SANS,
//     fontSize: '12.5px',
//     fontWeight: 600,
//     textDecoration: 'none',
//     padding: '7px 13px',
//     borderRadius: '3px',
//     border: `1px solid ${solid ? t.accent : t.rule}`,
//     color: solid ? '#ffffff' : t.steel,
//     background: solid ? t.accent : '#ffffff',
//   });

//   const hasFooter = Boolean(symbolsHref || parentHref);

//   return (
//     <section style={shellStyle}>
//       <div style={headStyle}>
//         {eyebrow ? <p style={eyebrowStyle}>{eyebrow}</p> : null}
//         {title ? <h2 style={titleStyle}>{processContent(title)}</h2> : null}
//         {lead ? <p style={leadStyle}>{processContent(lead)}</p> : null}
//       </div>

//       <div style={bodyStyle}>
//         {inherited ? <p style={inheritedStyle}>{processContent(inherited)}</p> : null}

//         {entries.map((entry, i) => {
//           const key = entry.id || `notation-entry-${i}`;
//           return (
//             <div key={key} id={entry.id || undefined} style={rowStyle(i === 0 && !inherited)}>
//               <div style={symStyle}>{processContent(entry.tex || '')}</div>

//               <div>
//                 {entry.read ? <p style={readStyle}>{entry.read}</p> : null}

//                 {entry.means ? <p style={meansStyle}>{processContent(entry.means)}</p> : null}

//                 {entry.cases ? (
//                   <p style={subStyle}>
//                     <span style={subLabelStyle}>Cases</span>
//                     {processContent(entry.cases)}
//                   </p>
//                 ) : null}

//                 {entry.alsoWritten ? (
//                   <p style={subStyle}>
//                     <span style={subLabelStyle}>Also written</span>
//                     {processContent(entry.alsoWritten)}
//                   </p>
//                 ) : null}

//                 {entry.confusedWith ? (
//                   <div style={bandStyle('warn')}>
//                     <span style={bandLabelStyle('warn')}>
//                       {entry.confusedWithLabel || 'Do not confuse'}
//                     </span>
//                     {processContent(entry.confusedWith)}
//                   </div>
//                 ) : null}

//                 {entry.sameGlyphElsewhere ? (
//                   <div style={bandStyle('cross')}>
//                     <span style={bandLabelStyle('cross')}>
//                       {entry.sameGlyphLabel || 'Same glyph elsewhere'}
//                     </span>
//                     {processContent(entry.sameGlyphElsewhere)}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {hasFooter ? (
//         <div style={footStyle}>
//           {symbolsHref ? (
//             <a href={symbolsHref} style={pillStyle(true)}>
//               {symbolsLabel || 'Symbol index'} &rarr;
//             </a>
//           ) : null}
//           {parentHref ? (
//             <a href={parentHref} style={pillStyle(false)}>
//               &uarr; {parentLabel || 'Shared notation'}
//             </a>
//           ) : null}
//         </div>
//       ) : null}
//     </section>
//   );
// }


import React from 'react';
import { processContent } from '../../../utils/contentProcessor';

/**
 * NotationSection — Woven layout.
 *
 * Place at: app/components/page-components/content-components/NotationSection.jsx
 *
 * Contextual links live inside the content strings and are rendered by
 * processContent, exactly as in ordinary page content:
 *     [label](!/path)      internal link, same tab
 *     $x$ / $$x$$          KaTeX
 *     **bold**             bold
 *     @[code]@             inline monospace
 *
 * Structural links are props (symbolsHref / parentHref) and are rendered by
 * the component itself.
 *
 * Every content field is wrapped in a div, never a p: processContent may
 * return ul, h3, div or BlockMath, which are invalid inside a paragraph.
 *
 * All colours come from the theme prop. Default is navy.
 */

const THEMES = {
  navy: {
    ink: '#0b1f3a',
    accent: '#16345e',
    steel: '#3d5a80',
    slate: '#5b7398',
    mist: '#eef3f9',
    paper: '#f7f9fc',
    rule: '#d3deec',
    warnBorder: '#9c4221',
    warnBg: '#fdf3ee',
    warnInk: '#5c3520',
    crossBorder: '#1f5f5b',
    crossBg: '#eef6f5',
    crossInk: '#22453f',
  },
  slate: {
    ink: '#1e293b',
    accent: '#475569',
    steel: '#64748b',
    slate: '#94a3b8',
    mist: '#f1f5f9',
    paper: '#f8fafc',
    rule: '#e2e8f0',
    warnBorder: '#b45309',
    warnBg: '#fffbeb',
    warnInk: '#78350f',
    crossBorder: '#0f766e',
    crossBg: '#f0fdfa',
    crossInk: '#134e4a',
  },
};

const SANS = "'Helvetica Neue', Arial, sans-serif";

export default function NotationSection({
  eyebrow = 'Notation',
  title = '',
  lead = '',
  inherited = null,
  entries = [],
  symbolsHref = '',
  symbolsLabel = '',
  parentHref = '',
  parentLabel = '',
  theme = 'navy',
  symbolColumnWidth = '150px',
  maxWidth = '100%',
}) {
  const t = THEMES[theme] || THEMES.navy;

  const shellStyle = {
    maxWidth: maxWidth,
    border: `1px solid ${t.rule}`,
    borderTop: `3px solid ${t.accent}`,
    background: '#ffffff',
    margin: '24px 0',
    boxSizing: 'border-box',
  };

  const headStyle = { padding: '22px 26px 0' };

  const eyebrowStyle = {
    fontFamily: SANS,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: t.steel,
    margin: '0 0 6px',
  };

  const titleStyle = {
    fontSize: '25px',
    fontWeight: 700,
    color: t.ink,
    margin: '0 0 10px',
    letterSpacing: '-0.01em',
    lineHeight: 1.25,
  };

  const leadStyle = {
    paddingBottom: '18px',
    color: '#33445c',
    fontSize: '16.5px',
    lineHeight: 1.6,
  };

  const bodyStyle = { padding: '0 26px' };

  const inheritedStyle = {
    marginBottom: '4px',
    padding: '10px 14px',
    background: t.paper,
    border: `1px solid ${t.rule}`,
    borderLeft: `3px solid ${t.slate}`,
    fontSize: '15px',
    color: t.steel,
    lineHeight: 1.55,
  };

  const rowStyle = (isFirst) => ({
    display: 'grid',
    gridTemplateColumns: `${symbolColumnWidth} 1fr`,
    gap: '18px',
    padding: '18px 0',
    borderTop: isFirst ? 'none' : `1px solid ${t.rule}`,
    alignItems: 'start',
  });

  const symStyle = {
    background: t.mist,
    borderLeft: `3px solid ${t.accent}`,
    padding: '9px 10px',
    textAlign: 'center',
    fontSize: '18px',
    color: t.ink,
    overflowWrap: 'break-word',
  };

  const readStyle = {
    fontFamily: SANS,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: t.steel,
    margin: '0 0 4px',
  };

  const meansStyle = {
    fontSize: '16.5px',
    lineHeight: 1.65,
    color: t.ink,
  };

  const subStyle = {
    marginTop: '8px',
    fontSize: '15.5px',
    lineHeight: 1.6,
    color: t.steel,
  };

  const subLabelStyle = {
    fontFamily: SANS,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: t.steel,
    marginRight: '8px',
  };

  const bandStyle = (kind) => ({
    marginTop: '10px',
    padding: '9px 13px',
    background: kind === 'warn' ? t.warnBg : t.crossBg,
    borderLeft: `3px solid ${kind === 'warn' ? t.warnBorder : t.crossBorder}`,
    fontSize: '15.5px',
    lineHeight: 1.6,
    color: kind === 'warn' ? t.warnInk : t.crossInk,
  });

  const bandLabelStyle = (kind) => ({
    display: 'block',
    fontFamily: SANS,
    fontSize: '10.5px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: kind === 'warn' ? t.warnBorder : t.crossBorder,
    marginBottom: '3px',
  });

  const footStyle = {
    marginTop: '22px',
    borderTop: `1px solid ${t.rule}`,
    background: t.paper,
    padding: '14px 26px 16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
  };

  const pillStyle = (solid) => ({
    display: 'inline-block',
    fontFamily: SANS,
    fontSize: '12.5px',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '7px 13px',
    borderRadius: '3px',
    border: `1px solid ${solid ? t.accent : t.rule}`,
    color: solid ? '#ffffff' : t.steel,
    background: solid ? t.accent : '#ffffff',
  });

  const hasFooter = Boolean(symbolsHref || parentHref);

  return (
    <section style={shellStyle}>
      <div style={headStyle}>
        {eyebrow ? <div style={eyebrowStyle}>{eyebrow}</div> : null}
        {title ? <h2 style={titleStyle}>{processContent(title)}</h2> : null}
        {lead ? <div style={leadStyle}>{processContent(lead)}</div> : null}
      </div>

      <div style={bodyStyle}>
        {inherited ? (
          <div style={inheritedStyle}>{processContent(inherited)}</div>
        ) : null}

        {entries.map((entry, i) => {
          const key = entry.id || `notation-entry-${i}`;
          return (
            <div
              key={key}
              id={entry.id || undefined}
              style={rowStyle(i === 0 && !inherited)}
            >
              <div style={symStyle}>{processContent(entry.tex || '')}</div>

              <div>
                {entry.read ? <div style={readStyle}>{entry.read}</div> : null}

                {entry.means ? (
                  <div style={meansStyle}>{processContent(entry.means)}</div>
                ) : null}

                {entry.cases ? (
                  <div style={subStyle}>
                    <span style={subLabelStyle}>Cases</span>
                    {processContent(entry.cases)}
                  </div>
                ) : null}

                {entry.alsoWritten ? (
                  <div style={subStyle}>
                    <span style={subLabelStyle}>Also written</span>
                    {processContent(entry.alsoWritten)}
                  </div>
                ) : null}

                {entry.confusedWith ? (
                  <div style={bandStyle('warn')}>
                    <span style={bandLabelStyle('warn')}>
                      {entry.confusedWithLabel || 'Do not confuse'}
                    </span>
                    {processContent(entry.confusedWith)}
                  </div>
                ) : null}

                {entry.sameGlyphElsewhere ? (
                  <div style={bandStyle('cross')}>
                    <span style={bandLabelStyle('cross')}>
                      {entry.sameGlyphLabel || 'Same glyph elsewhere'}
                    </span>
                    {processContent(entry.sameGlyphElsewhere)}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {hasFooter ? (
        <div style={footStyle}>
          {symbolsHref ? (
            <a href={symbolsHref} style={pillStyle(true)}>
              {symbolsLabel || 'Symbol index'} &rarr;
            </a>
          ) : null}
          {parentHref ? (
            <a href={parentHref} style={pillStyle(false)}>
              &uarr; {parentLabel || 'Shared notation'}
            </a>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}