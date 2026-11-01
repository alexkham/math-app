// ===========================================================
// proofDiagrams.js
// Frozen-state SVG strings for demoUnitFrame (Line 1), rendered
// from the same ProofCanvas the live player uses (no second
// renderer). Import from getStaticProps only (react-dom/server).
//
// Default export: a flat map, the same shape as identityDiagrams
// and distributionExplorerDiagrams, keyed `<proofKey>-<phase>`;
// each still is the last scene of that phase:
//
//   proofDiagrams['angleSum-given']   proofDiagrams['angleSum-construct']
//   proofDiagrams['angleSum-alternate']   proofDiagrams['angleSum-conclude']
//
// These keys are the registry's `diagramStates` for a proof view.
// Helpers, for one-off stills:
//   proofStill('angleSum', 2)          → svg string of scene 2
//   proofStillsByPhase('angleSum')     → { given, construct, alternate, conclude }
// ===========================================================

import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PROOFS from './proofs';
import buildScenes from './buildScenes';
import ProofCanvas from './player/ProofCanvas';

const FRAME_STYLE = { background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: '8px' };

export function proofStill(proofKey, step, { width = 420, height = 315, labels = true, measures = false } = {}) {
  const proof = PROOFS[proofKey];
  const scenes = buildScenes(proof);
  return renderToStaticMarkup(
    createElement(ProofCanvas, {
      model: proof.model,
      scenes,
      step: Math.min(step, scenes.length - 1),
      labelCenter: proof.labelCenter,
      labels,
      measures,
      viewBox: proof.viewBox,
      animate: false,
      width,
      height,
      style: FRAME_STYLE
    })
  );
}

export function proofStillsByPhase(proofKey, opts) {
  const scenes = buildScenes(PROOFS[proofKey]);
  const lastOfPhase = {};
  scenes.forEach((s, i) => { lastOfPhase[s.phase] = i; });
  const out = {};
  Object.entries(lastOfPhase).forEach(([phase, i]) => { out[phase] = proofStill(proofKey, i, opts); });
  return out;
}

const proofDiagrams = {};
Object.keys(PROOFS).forEach((proofKey) => {
  Object.entries(proofStillsByPhase(proofKey)).forEach(([phase, svg]) => {
    proofDiagrams[`${proofKey}-${phase}`] = svg;
  });
});

export default proofDiagrams;
