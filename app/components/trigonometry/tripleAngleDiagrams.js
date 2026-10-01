// Static SVG diagrams for the triple-angle-identities tool page (Line 1).
// Each diagram freezes TripleAngleExplorer by rendering the tool's own
// TripleAngleScene (framed page-figure size, 336x240) to static markup, so a
// frozen state and the live tool share one code path and cannot drift.
// States mirror the double- and half-angle modules:
//   sin.overview, sin.steps[0..4], cos.overview, cos.steps[0..4],
//   tan, csc, sec, cot.
//
// SERVER ONLY: uses react-dom/server. Import from getStaticProps, never from
// component code. Consumed through demoUnitFrame.

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { TripleAngleScene } from './TripleAngleExplorer';

const THETA = 35;

const render = (props) =>
  renderToStaticMarkup(React.createElement(TripleAngleScene, { theta: THETA, framed: true, ...props }));

export default function tripleAngleDiagrams() {
  const out = {};
  for (const fn of ['sin', 'cos']) {
    out[fn] = {
      overview: render({ fn, step: 5 }),
      steps: [1, 2, 3, 4, 5].map((step) => render({ fn, step })),
    };
  }
  for (const fn of ['tan', 'csc', 'sec', 'cot']) out[fn] = render({ fn });
  return out;
}
