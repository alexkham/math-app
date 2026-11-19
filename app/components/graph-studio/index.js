// Graph Studio — public entry
//
// The product in four compartments. Each one only knows the ones above
// it in this list:
//
//   engine/   math, scene document, geometry, canvas + SVG renderers
//             (plain JavaScript; no React, no DOM)
//   themes/   colours and sizes for the graph and for the chrome
//   graph/    <Graph>: the one interactive component
//   shells/   purpose-built hosts around <Graph> (lab now; calculator,
//             explorer, concept tool, lesson embed, illustration later)
//
// Pages import from here.

export { default as Graph } from './graph/Graph.jsx';
export { default as LabShell } from './shells/LabShell.jsx';
export { default as CalculatorShell } from './shells/CalculatorShell.jsx';
export { default as ExpressionList } from './shells/parts/ExpressionList.jsx';
export { default as MathText, Tex, RowMath, plainText } from './shells/parts/MathText.jsx';
export { default as GraphToolbar, toolbarButtonStyle } from './shells/parts/GraphToolbar.jsx';
export { default as FullscreenFrame, useFullscreen } from './shells/parts/FullscreenFrame.jsx';
export { default as ExportModal } from './shells/parts/ExportModal.jsx';
export { default as ModalFrame, modalButtonStyle } from './shells/parts/ModalFrame.jsx';
export { default as OpenSceneModal, readSceneText } from './shells/parts/OpenSceneModal.jsx';
export { default as useSceneHistory } from './shells/parts/useSceneHistory.js';
export { default as MathInput } from './shells/parts/MathInput.jsx';
export { default as ExplorerShell } from './shells/ExplorerShell.jsx';
export { default as ConceptShell } from './shells/ConceptShell.jsx';
export { LAB_CASES } from './shells/labCases.js';

export { getTheme, registerTheme, themeNames, rowColor } from './themes/themes.js';

export {
  createScene, ensureScene, compileScene, rowToTex, computeGeometry, setVariables,
  viewBounds, viewFromBounds, DEFAULT_VIEW, DEFAULT_SETTINGS, SCENE_VERSION,
  renderSVG, drawCanvas, fmtNum, fmtPoint, analyzeFunction, sceneHash, readSceneHash
} from './engine/index.js';

import { sceneToSVG as engineSceneToSVG } from './engine/index.js';
import { getTheme } from './themes/themes.js';

// Scene document → SVG text, in one call. Safe inside getStaticProps:
// no DOM, and the same scene always gives the same text.
//
//   sceneToSVG(scene, { width: 640, height: 420, theme: 'lesson' })
export function sceneToSVG(scene, options = {}) {
  const { theme, ...rest } = options;
  const name = theme || (scene && scene.settings && scene.settings.theme) || 'default';
  return engineSceneToSVG(scene, getTheme(name), rest);
}
