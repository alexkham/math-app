// Graph Studio — lesson embed, type 1: the picture
//
// A figure for a lesson page, made at build time from a scene. Nothing
// of the engine reaches the reader: the picture is ready-made SVG.
//
//   <GraphPicture picture={parabola} caption="The parabola $y = \\frac{x^2}{4} - 2$." />
//
// `picture` comes from scenePicture(...) in getStaticProps (see
// lesson-build.js). Other props:
//   caption        text under the picture; LaTeX between $ … $
//   calculatorHref address of a calculator page: adds "Open in Calculator"
//   explorerHref   address of an explorer page: adds "Open in Explorer"
//   maxWidth       widest the figure gets, in px (default: the picture's width)
//   align          'center' (default) | 'left'
//   children       placed over the picture's lower right corner (the
//                  waking-up embed puts its button there)
//
// This file must stay light: React and KaTeX only, nothing from the engine.

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export const FIGURE_LOOK = {
  border: '#e3e9f2', surface: '#ffffff', caption: '#475569', accent: '#2563EB', navy: '#06357A',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// Caption text with $…$ formulas, typeset.
export function captionNodes(text) {
  if (typeof text !== 'string') return text;
  return text.split(/(\$[^$]+\$)/g).map((part, i) => {
    if (part.length > 2 && part.startsWith('$') && part.endsWith('$')) {
      let html = null;
      try { html = katex.renderToString(part.slice(1, -1), { throwOnError: false, strict: 'ignore' }); } catch { html = null; }
      return html ? <span key={i} dangerouslySetInnerHTML={{ __html: html }} /> : <span key={i}>{part}</span>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export function FigureLinks({ picture, calculatorHref, explorerHref }) {
  if (!picture || (!calculatorHref && !explorerHref)) return null;
  const link = { color: FIGURE_LOOK.accent, textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' };
  return (
    <span style={{ display: 'inline-flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
      {calculatorHref && <a href={calculatorHref + picture.hash} style={link}>Open in Calculator →</a>}
      {explorerHref && <a href={explorerHref + picture.hash} style={link}>Open in Explorer →</a>}
    </span>
  );
}

// The framed drawing itself (wide one, and the phone one when there is one).
// `children` are placed over it.
export function PictureFrame({ picture, children }) {
  return (
    <div style={{ position: 'relative', border: `1px solid ${FIGURE_LOOK.border}`, borderRadius: 8, overflow: 'hidden', background: FIGURE_LOOK.surface, lineHeight: 0, aspectRatio: `${picture.width} / ${picture.height}` }}>
      <div className={'gs-figure-svg' + (picture.svgNarrow ? ' gs-figure-wide' : '')} role="img" aria-label={picture.alt} dangerouslySetInnerHTML={{ __html: picture.svg }} />
      {picture.svgNarrow && <div className="gs-figure-svg gs-figure-narrow" role="img" aria-label={picture.alt} dangerouslySetInnerHTML={{ __html: picture.svgNarrow }} />}
      {children}
      <style jsx>{`
        .gs-figure-svg :global(svg) {
          display: block;
          width: 100%;
          height: auto;
        }
        .gs-figure-narrow {
          display: none;
        }
        @media (max-width: 480px) {
          .gs-figure-wide {
            display: none;
          }
          .gs-figure-narrow {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}

export function FigureCaption({ picture, caption, calculatorHref, explorerHref }) {
  const hasLinks = !!(calculatorHref || explorerHref);
  if (!caption && !hasLinks) return null;
  return (
    <figcaption style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5, color: FIGURE_LOOK.caption, textAlign: 'center' }}>
      {caption && <span>{captionNodes(caption)}</span>}
      {caption && hasLinks && ' '}
      <FigureLinks picture={picture} calculatorHref={calculatorHref} explorerHref={explorerHref} />
    </figcaption>
  );
}

export default function GraphPicture(props) {
  const { picture, caption, calculatorHref, explorerHref, maxWidth, align = 'center', children, style } = props;
  if (!picture || !picture.svg) return null;
  return (
    <figure className="gs-figure" style={{ margin: align === 'left' ? '1.25em 0' : '1.25em auto', maxWidth: maxWidth || picture.width, fontFamily: FIGURE_LOOK.font, ...(style || {}) }}>
      <PictureFrame picture={picture}>{children}</PictureFrame>
      <FigureCaption picture={picture} caption={caption} calculatorHref={calculatorHref} explorerHref={explorerHref} />
    </figure>
  );
}
