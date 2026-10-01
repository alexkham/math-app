// Static SVG diagrams for the inverse-functions tool page (Line 1).
// Each diagram freezes InverseFunctionExplorer in one of its five preset
// states by rendering the tool's own InverseRestrictionScene to static markup,
// so a frozen state and the live tool share one code path and cannot drift.
//
// SERVER ONLY: uses react-dom/server. Import from getStaticProps, never from
// component code. Consumed through demoUnitFrame.

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { InverseRestrictionScene, DEFAULT_PRESETS, FN, PI } from './InverseFunctionExplorer';

const noop = () => {};

// Resolve a preset into the full scene props, mirroring the component's
// applyPreset/buildInitialState defaults.
function sceneProps(preset, markerId) {
  const fn = FN[preset.fn] ? preset.fn : 'sin';
  const stage = preset.stage || 1;
  let cutA = -PI;
  let cutB = PI;
  if (Array.isArray(preset.cut) && preset.cut.length === 2) {
    [cutA, cutB] = preset.cut;
  } else if (stage >= 3) {
    [cutA, cutB] = FN[fn].principal;
  }
  return {
    fn,
    stage,
    level: typeof preset.level === 'number' ? preset.level : 0.5,
    cutA,
    cutB,
    t: typeof preset.t === 'number' ? preset.t : 0,
    probe: typeof preset.probe === 'number' ? preset.probe : FN[fn].x0,
    onHandleDrag: noop,
    markerId,
  };
}

function renderState(key) {
  const preset = DEFAULT_PRESETS[key];
  const markup = renderToStaticMarkup(
    React.createElement(InverseRestrictionScene, sceneProps(preset, `ifd-arrow-${key}`))
  );
  // demoUnitFrame's normalizeSvg only rewrites an existing style attribute,
  // and the scene's style object carries interaction CSS - replace it outright.
  // The scene sizes itself by CSS (width:100%) and carries no width/height
  // attributes; give it the intrinsic 760x400 so it cannot collapse to zero
  // inside demoUnitFrame's flex layout.
  return markup
    .replace(/(<svg[^>]*?)style="[^"]*"/, '$1style="display:block;max-width:100%;height:auto"')
    .replace(/<svg /, '<svg width="760" height="400" ');
}

const STATE_KEYS = ['lineTestFails', 'arcsin', 'arccos', 'arctan', 'compositionFold'];

export default function inverseFunctionDiagrams() {
  return STATE_KEYS.reduce((acc, key) => {
    acc[key] = renderState(key);
    return acc;
  }, {});
}

export { STATE_KEYS, renderState };
