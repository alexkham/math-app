// Frozen-state SVGs for the Inner Product tool (Line 1 anchor mesh).
//
// InnerProductWrapper builds its steps with buildVectorScenes(n) — exported
// additively — so this module calls that same function and renders the chosen
// scenes through frozenMatrixSvg.
//
// Defaults are the component's: defaultVecN = 4, so the scene list is
// 1 intro + 4 pair steps + 1 done = 6. The step state is frozen at pair 3 of 4.
//
// The layout is u , v = result, where the result is a 1x1 matrix that fills in
// on the final scene. The running-sum line ("u1v1 + u2v2 + ...", with earned
// terms solid and pending terms greyed) lives in the scene's caption rather
// than in the layout, so it is not part of these stills - the page prose
// carries that information instead.

import { buildVectorScenes } from './InnerProductWrapper';
import frozenMatrixSvg from './frozenMatrixSvg';

const N = 4;
const STEP_J = 2;   // 0-based pair index within the sweep

const scenes = buildVectorScenes(N);

export const sceneIndex = {
  intro: 0,
  step: 1 + STEP_J,
  done: scenes.length - 1,
};

const freeze = (i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCount: scenes.length,
  stepPair: STEP_J + 1,
  titles: Object.fromEntries(Object.entries(sceneIndex).map(([k, i]) => [k, scenes[i].title])),
};

const innerProductDiagrams = {
  intro: freeze(sceneIndex.intro),
  step: freeze(sceneIndex.step),
  done: freeze(sceneIndex.done),
};

export default innerProductDiagrams;
