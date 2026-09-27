// Static SVG diagrams for the arc-sector tool page (Line 1).
// Each diagram freezes ArcSectorExplorer in one of its four preset states by
// rendering the tool's own ArcSectorScene to static markup, so a frozen state
// and the live tool share one code path and cannot drift.
//
// SERVER ONLY: uses react-dom/server. Import from getStaticProps, never from
// component code. Consumed through demoUnitFrame.

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ArcSectorScene, DEFAULT_PRESETS } from './ArcSectorExplorer';

const noop = () => {};

function renderState(key) {
  const p = DEFAULT_PRESETS[key];
  const markup = renderToStaticMarkup(
    React.createElement(ArcSectorScene, {
      theta: p.theta,
      r: p.r,
      oneRad: !!p.oneRad,
      fraction: !!p.fraction,
      onAngleDrag: noop,
    })
  );
  // The scene is sized by CSS (width:100%) with no width/height attributes;
  // give it the intrinsic 780x460 so it cannot collapse to zero inside
  // demoUnitFrame's flex layout, and replace the interaction style.
  return markup
    .replace(/(<svg[^>]*?)style="[^"]*"/, '$1style="display:block;max-width:100%;height:auto"')
    .replace(/<svg /, '<svg width="780" height="460" ');
}

const STATE_KEYS = ['oneRadian', 'arcLength', 'sectorArea', 'radiusOne'];

export default function arcSectorDiagrams() {
  return STATE_KEYS.reduce((acc, key) => {
    acc[key] = renderState(key);
    return acc;
  }, {});
}

export { STATE_KEYS, renderState };
