// Graph Studio — for lesson pages, at build time
//
// Turns a scene into the data a lesson figure needs. Call it only
// inside getStaticProps: it uses the engine, and Next.js then keeps the
// engine out of what the reader downloads.
//
//   import { scenePicture } from '@/app/components/graph-studio/lesson-build';
//
//   export async function getStaticProps() {
//     return { props: { parabola: scenePicture({ expressions: ['y = x^2/4 - 2'] }, { width: 560, height: 320 }) } };
//   }
//
// The result is plain data (it passes through getStaticProps as is):
//   { svg, svgNarrow, width, height, alt, theme, scene, annotations, rows, sliders, editable, tries, hash }
// and goes to a figure from '@/app/components/graph-studio/lesson':
//   <GraphPicture picture={parabola} caption="…" />
//   <GraphPictureLive picture={parabola} calculatorHref="/…" />
//   <GraphSliders picture={wave} caption="…" />      (a scene with slider rows such as 'a = 2')
//   <GraphTry picture={parabola} caption="…" />     (the reader rewrites the formula)
//   <GraphSteps steps={solving} caption="…" />        (from sceneSteps, below)

import { createScene, compileScene, sceneToSVG, sceneHash, rowToTex, scanDefinitions, sliderRange, setVariables } from './engine/index.js';
import { getTheme } from './themes/themes.js';

// A sentence for readers who cannot see the picture.
function describe(scene) {
  if (scene.authoring && scene.authoring.title) return scene.authoring.title;
  const compiled = compileScene(scene);
  const shown = scene.expressions.filter(e => !e.hidden && e.text && compiled.items.some(it => it.id === e.id));
  if (!shown.length) return 'Coordinate grid';
  return 'Graph of ' + shown.map(e => e.text.trim()).join('; ');
}

// options: { width = 560, height = 320, theme = 'lesson', annotations = [], alt, narrowWidth = 340, editable, tries }
// editable: which row a reader may rewrite in GraphTry (its number from 0, or its id;
// default: the first row that draws something). tries: formulas offered under that figure.
// A second drawing of the same rectangle is made for phones (narrowWidth
// pixels wide), so that the numbers on the axes stay readable there.
// narrowWidth: 0 leaves it out.
export function scenePicture(sceneInput, options = {}) {
  const { width = 560, height = 320, annotations = [], alt } = options;
  const base = createScene(sceneInput);
  const themeName = options.theme || (sceneInput && sceneInput.settings && sceneInput.settings.theme) || 'lesson';
  const scene = { ...base, settings: { ...base.settings, theme: themeName } };
  const text = alt || describe(scene);
  const svg = sceneToSVG(scene, getTheme(themeName), { width, height, annotations, title: text });
  const narrowWidth = options.narrowWidth === undefined ? 340 : options.narrowWidth;
  let svgNarrow = null;
  if (narrowWidth && width > narrowWidth * 1.2) {
    const k = width / narrowWidth;
    const v = scene.view;
    const narrow = { ...scene, view: { ...v, ux: v.ux * k, uy: v.uy * k } };
    svgNarrow = sceneToSVG(narrow, getTheme(themeName), { width: narrowWidth, height: Math.round(height / k), annotations, title: text });
  }
  // typeset forms of the rows, for a legend under the picture
  const names = scanDefinitions(scene.expressions.map(e => e.text));
  const rows = scene.expressions
    .filter(e => !e.hidden && e.lock !== 'hidden-row' && e.text)
    .map(e => ({ id: e.id, text: e.text, tex: rowToTex(e.text, names) }));
  // the scene's sliders, for the figure with sliders
  const compiled = compileScene(scene);
  const sliders = scene.expressions
    .filter(e => compiled.rows[e.id] && compiled.rows[e.id].kind === 'slider' && e.lock !== 'hidden-row')
    .map(e => {
      const info = compiled.rows[e.id];
      const range = sliderRange(e);
      return { id: e.id, name: info.name, tex: rowToTex(info.name, names), value: info.value, min: Math.min(range.min, info.value), max: Math.max(range.max, info.value), step: range.step || 0 };
    });
  // the row a reader may rewrite (figure "try your own"), and formulas offered to try
  const DRAWN = ['curve', 'implicit', 'region', 'parametric', 'polar', 'function', 'point'];
  const visible = scene.expressions.filter(e => !e.hidden && e.lock !== 'hidden-row' && e.text);
  const asked = options.editable;
  const pick = typeof asked === 'number' ? scene.expressions[asked]
    : typeof asked === 'string' ? scene.expressions.find(e => e.id === asked)
    : visible.find(e => compiled.rows[e.id] && DRAWN.includes(compiled.rows[e.id].kind));
  const editable = pick ? { id: pick.id, text: pick.text, tex: rowToTex(pick.text, names) } : null;
  const tries = (options.tries || []).map(t => ({ text: t, tex: rowToTex(t, names) }));
  // through JSON, so that nothing getStaticProps refuses (undefined) is left in
  return JSON.parse(JSON.stringify({
    svg, svgNarrow, width, height, alt: text, theme: themeName,
    scene, annotations, rows, sliders, editable, tries,
    hash: sceneHash(scene)      // '#scene=…', to put after the address of a tool page
  }));
}

// A walk through one scene, one picture per step, for <GraphSteps>.
//
//   sceneSteps(
//     { expressions: ['y = x^2', 'y = x + 2'] },
//     [
//       { text: 'Draw $y = x^2$.', show: [0] },
//       { text: 'Add the line $y = x + 2$.' },
//       { text: 'They cross twice.', annotations: [{ type: 'point', x: 2, y: 4, label: '(2, 4)' }] }
//     ],
//     { width: 560, height: 320 }
//   )
//
// A step may have:
//   text         what is said at this step; LaTeX between $ … $
//   show         which rows are drawn: their numbers from 0, or ids (default: all)
//   set          slider values for this step, e.g. { a: -1 }
//   expressions  other rows altogether, in place of the scene's
//   view         another rectangle, e.g. { cx: 2, cy: 4, ux: 0.01, uy: 0.01 }
//   annotations  marks drawn at this step (points, lines, areas)
//   alt          words for readers who cannot see the picture
// options are those of scenePicture. Every step is a ready-made drawing,
// so the figure needs nothing of the engine in the reader's browser.
export function sceneSteps(sceneInput, steps, options = {}) {
  const { width = 560, height = 320 } = options;
  const input = sceneInput || {};
  const out = (steps || []).map(step => {
    let scene = createScene(step.expressions ? { ...input, expressions: step.expressions } : input);
    if (step.set) scene = setVariables(scene, compileScene(scene), step.set);
    if (step.show) {
      scene = { ...scene, expressions: scene.expressions.map((e, i) => ({ ...e, hidden: !(step.show.includes(i) || step.show.includes(e.id)) })) };
    }
    if (step.view) scene = { ...scene, view: { ...scene.view, ...step.view } };
    const p = scenePicture(scene, { ...options, width, height, annotations: step.annotations || options.annotations || [], alt: step.alt });
    return { text: step.text || '', svg: p.svg, svgNarrow: p.svgNarrow, alt: p.alt, hash: p.hash };
  });
  return { width, height, steps: out };
}
