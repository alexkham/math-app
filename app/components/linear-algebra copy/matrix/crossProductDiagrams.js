// Frozen-state SVGs for the Vector Cross Product tool (Line 1 anchor mesh).
//
// Built from CrossProductWrapper's two exported scene builders and rendered
// through frozenMatrixSvg. The shape is fixed (u, v in R^3), so each builder
// yields 1 intro + 3 component steps + 1 done = 5 scenes.
//
// Four stills:
//   intro       — component-method opening scene: u, v as columns, w empty
//   components  — component method frozen at the middle component (w_2),
//                 the step where the cyclic order is easiest to misread
//   determinant — determinant method frozen at the same pivot (j), so the
//                 struck row/column, the minor and the negated sign are visible
//   done        — every component filled
//
// frozenMatrixSvg does not reproduce arrows or bracket types, so the stills
// rely on the cell highlights alone (and draw square brackets around the
// symbolic determinant where the live tool draws bars).

import { buildComponentScenes, buildDeterminantScenes } from './CrossProductWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const STEP = 1;   // 0-based component index frozen (w_2, the j pivot)

const componentScenes = buildComponentScenes();
const determinantScenes = buildDeterminantScenes();

export const sceneIndex = {
  intro: 0,
  components: 1 + STEP,
  determinant: 1 + STEP,
  done: componentScenes.length - 1,
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  sceneCount: componentScenes.length,
  frozenComponent: STEP + 1,
  titles: {
    intro: componentScenes[sceneIndex.intro].title,
    components: componentScenes[sceneIndex.components].title,
    determinant: determinantScenes[sceneIndex.determinant].title,
    done: componentScenes[sceneIndex.done].title,
  },
};

const crossProductDiagrams = {
  intro: freeze(componentScenes, sceneIndex.intro),
  components: freeze(componentScenes, sceneIndex.components),
  determinant: freeze(determinantScenes, sceneIndex.determinant),
  done: freeze(componentScenes, sceneIndex.done),
};

export default crossProductDiagrams;
