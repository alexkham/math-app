// Graph Studio — shell part: typeset math
//
// Every place a shell shows math to a reader goes through here, so that
// powers, roots and fractions are set properly and never appear as raw
// keyboard text such as x^(1/3).
//
//   <Tex tex="x^{\\frac{1}{3}}" />          one formula (LaTeX)
//   <RowMath text="y = x^(1/3)" names={names} />   a row as the user typed it
//   <MathText text="Starts at $x = 0$." />   prose with $…$ formulas inside
//
// KaTeX does the typesetting; it works on the server as well.

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { rowToTex } from '../../engine/index.js';

function renderTex(tex, display) {
  try {
    return katex.renderToString(tex, { throwOnError: false, displayMode: !!display, strict: 'ignore' });
  } catch {
    return null;
  }
}

export function Tex(props) {
  const { tex = '', display = false, style } = props;
  const html = renderTex(tex, display);
  if (html === null) return <span style={style}>{tex}</span>;
  return <span style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

// A scene row in typeset form. Falls back to the typed text when the
// row cannot be read (for example while it is half typed).
export function RowMath(props) {
  const { text = '', names, style } = props;
  const tex = rowToTex(text, names);
  if (!tex) return <span style={{ fontFamily: 'ui-monospace, Menlo, Consolas, monospace', ...style }}>{text}</span>;
  return <Tex tex={tex} style={style} />;
}

// Prose with formulas between dollar signs.
export default function MathText(props) {
  const { text = '', style } = props;
  const parts = String(text).split(/\$([^$]+)\$/g);   // odd positions are formulas
  return (
    <span style={style}>
      {parts.map((part, i) => (i % 2 === 1 ? <Tex key={i} tex={part} /> : <React.Fragment key={i}>{part}</React.Fragment>))}
    </span>
  );
}

// The same prose with the formulas reduced to plain words, for labels
// read by screen readers and for titles.
export function plainText(text = '') {
  return String(text).replace(/\$([^$]+)\$/g, (_, f) => f
    .replace(/\\(left|right|operatorname|displaystyle|,|;| )/g, '')   // layout only
    .replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1 over $2')
    .replace(/\\sqrt\{([^{}]*)\}/g, 'square root of $1')
    .replace(/\\lfloor\s*([^\\]*)\\rfloor/g, 'floor of $1')
    .replace(/\\([a-zA-Z]+)/g, '$1 ')                                  // \tan → tan
    .replace(/[{}\\]/g, '').replace(/\s+/g, ' ').replace(/ \(/g, '(').trim());
}
