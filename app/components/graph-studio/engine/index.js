// Graph Studio — engine
//
// Everything below this folder is plain JavaScript: no React, no DOM.
// It can run in a browser, in Node (tests, build-time pictures) and
// later in a Web Worker.
//
//   scene document ──compileScene──▶ compiled scene
//                  ──computeGeometry──▶ geometry (pixels)
//                  ──drawCanvas / renderSVG──▶ picture
//
// Code outside the engine imports from this file only.

export { RUNTIME, CONSTANTS, FUNCTION_NAMES, classify, scanDefinitions, compileNode, rowToTex, nodeToTex } from './language.js';

export { texToText } from './texinput.js';

export { packScene, unpackScene, sceneHash, readSceneHash } from './scenelink.js';

export { pickFunction, functionRows, numberText } from './analysis.js';
export { conceptValue, conceptTest, conceptNumber, conceptText, conceptCase, conceptMarks, conceptScope } from './concept.js';
export { analyzeFunction, readFunction, valueAt, markersIn, antiderivative, areaPolygon, integrate, compareFunctions } from './analysis.js';

export {
  SCENE_VERSION, DEFAULT_VIEW, DEFAULT_SETTINGS,
  createScene, ensureScene, newRowId, viewBounds, viewFromBounds, sliderRange, setVariables, compileScene
} from './scene.js';

export {
  makeTransform, sampleCurve, sampleExplicitX, sampleExplicitY, sampleParametric,
  contour, regionRuns, explicitSpecialPoints, intersectionsX
} from './numerics.js';

export { computeGeometry } from './geometry.js';

export { drawCanvas, renderSVG, niceStep, fmtNum, fmtPoint } from './render.js';

import { createScene, compileScene } from './scene.js';
import { computeGeometry } from './geometry.js';
import { renderSVG } from './render.js';

// One call from a scene document to an SVG string. `theme` must be a
// complete theme object (see ../themes/themes.js). Pure: the same input
// always gives the same text.
export function sceneToSVG(scene, theme, options = {}) {
  const { width = 640, height = 420, selectedId = null, annotations = [], title = '' } = options;
  const doc = createScene(scene);
  const compiled = compileScene(doc);
  const geometry = computeGeometry(compiled, doc.view, width, height, { selectedId });
  return renderSVG(geometry, theme, { settings: doc.settings, selectedId, annotations, title });
}
