// Frozen-state SVGs for the Determinant tool (Line 1 anchor mesh).
//
// Built from DeterminantWrapper's two exported scene builders at 3×3 and
// rendered through frozenMatrixSvgFixed.
//
//   intro   — cofactor method: A beside an empty row of terms
//   term    — cofactor method, the middle term: row 1 and column 2 struck,
//             the minor highlighted, the negative sign attached
//   sarrus  — Sarrus's rule, the first upward diagonal: the 3×5 extended
//             matrix with the three entries lit and the term subtracted
//   done    — cofactor method complete, three terms and det A filled
//
// Arrows are not reproduced; the highlights and struck entries carry each
// state. The live tool draws bars around the determinant; the shared freezer
// draws square brackets.

import { buildCofactorScenes, buildSarrusScenes } from './DeterminantWrapper';
import frozenMatrixSvg from './frozenMatrixSvgFixed';

const N = 3;

const cofactor = buildCofactorScenes(N);
const sarrus = buildSarrusScenes();

const firstOf = (scenes, phase) => scenes.findIndex((sc) => sc.phase === phase);

export const sceneIndex = {
  intro: firstOf(cofactor, 'intro'),
  term: firstOf(cofactor, 'term') + 1,          // the middle (negative) term
  sarrus: firstOf(sarrus, 'diag') + 3,          // the first upward diagonal
  done: firstOf(cofactor, 'done'),
};

const freeze = (scenes, i) => {
  const sc = scenes[i];
  return frozenMatrixSvg({ matrices: sc.matrices, layout: sc.layout, highlights: sc.highlights });
};

export const meta = {
  n: N,
  sceneCounts: { cofactor: cofactor.length, sarrus: sarrus.length },
  titles: {
    intro: cofactor[sceneIndex.intro].title,
    term: cofactor[sceneIndex.term].title,
    sarrus: sarrus[sceneIndex.sarrus].title,
    done: cofactor[sceneIndex.done].title,
  },
};

const determinantDiagrams = {
  intro: freeze(cofactor, sceneIndex.intro),
  term: freeze(cofactor, sceneIndex.term),
  sarrus: freeze(sarrus, sceneIndex.sarrus),
  done: freeze(cofactor, sceneIndex.done),
};

export default determinantDiagrams;
