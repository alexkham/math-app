// Static SVG diagrams for the shift-identities tool page (Line 1).
// Each diagram freezes ShiftIdentityExplorer in one identity state by
// rendering the tool's own ShiftScene (framed page-figure size, 352x264) to
// static markup, so a frozen state and the live tool share one code path.
// States: sin|cos|tan  x  pi|halfPi, all at theta = 35 degrees.
//
// SERVER ONLY: uses react-dom/server. Import from getStaticProps, never from
// component code. Consumed through demoUnitFrame.

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ShiftScene } from './ShiftIdentityExplorer';

const THETA = 35;

export default function shiftIdentityDiagrams() {
  const out = {};
  for (const shift of ['pi', 'halfPi']) {
    for (const fn of ['sin', 'cos', 'tan']) {
      out[`${fn}:${shift}`] = renderToStaticMarkup(
        React.createElement(ShiftScene, { fn, shift, theta: THETA, framed: true })
      );
    }
  }
  return out;
}
