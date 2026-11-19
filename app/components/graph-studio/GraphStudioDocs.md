# Graph Studio

The graphing product of learnmathclass.com: one engine, one graph component, and purpose-built hosts ("shells") around it. Everything a graph shows comes from one plain JSON object, the **scene document**.

Status, 2026-11-18: engine (with the analysis of one function), themes, the Graph component, the shared shell parts, the lab shell, the Calculator shell and the Explorer shell are built. 2026-11-19: the five lesson figures (picture, picture that wakes up, graph with sliders, try your own, step by step) are built. The other shells are not built yet (see "Not built yet").

## Folder layout

Each compartment knows only the ones above it in this list.

| Folder | What it holds | React? |
| --- | --- | --- |
| `engine/` | The math and the drawing. `language.js` (typed text → functions), `scene.js` (scene document, compile), `numerics.js` (curve sampler, implicit curves, regions, special points), `geometry.js` (scene + view → pixels), `render.js` (canvas and SVG renderers), `analysis.js` (everything known about one function of x), `texinput.js` (a math editor's LaTeX → plain row text), `scenelink.js` (a scene packed into a link), `index.js` (the only file outsiders import) | No, and no DOM |
| `engine/tests/` | `engine.test.mjs`, run with plain Node | — |
| `themes/` | `themes.js`: colours and sizes for the graph and for the chrome | No |
| `graph/` | `Graph.jsx`: the one interactive component | Yes |
| `shells/` | Hosts around `<Graph>`. Now: `CalculatorShell.jsx`, `ExplorerShell.jsx`, `LabShell.jsx`, `labCases.js`. `shells/parts/` holds the pieces shells share; `ConceptShell.jsx` with its data files in `shells/concepts/`; `shells/explorer/` holds the Explorer's own panels; `shells/embeds/` holds the lesson figures | Yes |
| `index.js` | Public entry for tool pages | — |
| `lesson.js` | Entry for lesson pages: the figures only, without the engine | — |
| `lesson-build.js` | For `getStaticProps` of a lesson page: scene → picture data | — |

Rules: a shell holds no math; the engine imports nothing from the other folders; the Graph component never imports a shell.

## The scene document

```js
{
  version: 1,
  expressions: [
    { id: 'e1', text: 'a = 2', slider: { min: -5, max: 5, step: 0 } },
    { id: 'e2', text: 'f(x) = a sin(x)', color: '#2563EB' },
    { id: 'e3', text: '(p, f(p))', label: 'P', showLabel: true },
    { id: 'e4', text: '(3cos(t), 2sin(t))', param: { min: 0, max: 6.2832 } },
    { id: 'e5', text: 'y > x^2 - 4', hidden: true, lock: 'readonly' }
  ],
  view: { cx: 0, cy: 0, ux: 0.035, uy: 0.035 },
  settings: { grid: true, axes: true, theme: 'default', lockViewport: false },
  authoring: { title: '', steps: [], explanations: {} }
}
```

- `view` is the centre of the picture and the world units per pixel on each axis. Resizing the canvas shows more or less of the plane; it never distorts.
- A row without `color` takes a colour from the theme by its position in the list, so changing the theme recolours it.
- `lock`: `'readonly'` (listed, not editable), `'hidden-row'` (drawn, not listed).
- `createScene(partial)` fills in everything left out; rows may be plain strings.

## What a row can be

| Row text | Read as |
| --- | --- |
| `a = 2` | Slider variable |
| `d = a + b` | Computed constant (value shown) |
| `f(x) = …` | User function; drawn when its letter is x |
| `y = …`, `… = y`, or a bare expression in x | Curve y = f(x) |
| `x = …` | Curve x = g(y) |
| `r = …` in θ | Polar curve |
| `(…, …)` | Point; draggable when a coordinate is a bare slider variable |
| `(…, …)` with t | Parametric curve |
| any other equation in x and y | Implicit curve |
| `<`, `>`, `<=`, `>=`, also chained | Region; dashed boundary when strict |
| bare expression with no letters | Calculation (value shown) |
| any row + `{x > 0}` | Restriction |

Reading rules: a name is one letter with an optional subscript (`a`, `a_1`), so `xy` is x times y and `2x` is 2 times x; `sin2x` is sin(2x); `sin x` is sin(x); `a(x+1)` multiplies when a is a variable; `|x|` is abs(x) (not nested); `ln` is natural, `log` is base 10; `(-8)^(1/3)` is −2. An error stays in its own row; the other rows still draw.

## Showing math to a reader

Math is never shown as keyboard text (`x^(1/3)`). Three parts in `shells/parts/MathText.jsx` do the typesetting with KaTeX:

- `<RowMath text="y = x^(1/3)" names={names} />` — a row as typed, typeset. The LaTeX comes from `rowToTex` in the engine, built from the same tree that is drawn.
- `<MathText text="Starts at $x = 0$." />` — prose with LaTeX between dollar signs (lab case names and notes use this).
- `<Tex tex="…" />` — one LaTeX formula.

In the expression list a row is shown typeset; clicking it (or tabbing to it) opens the math editor on that row, and leaving it typesets the row again. A fraction standing alone or next to + and − is shown without brackets of its own.

## Typing math: the math editor

`shells/parts/MathInput.jsx` is the box math is typed in: in the expression list (calculator, lab) and in the Explorer's expression box.

```jsx
import { MathInput } from '@/app/components/graph-studio';

<MathInput value={text} onChange={setText} names={names} onEnter={…} placeholder="type an expression" />
```

- Math is typed as it is written: `/` builds a fraction, `^` raises, `sqrt` becomes a root sign, `abs` becomes bars, `<=` becomes ≤, `pi` becomes π, `sin`, `ln`… become upright function names.
- The keyboard button inside the box opens an on-screen keyboard with two pages made for this product (numbers and signs; functions and letters) plus letters. On a phone or tablet it opens by itself. It offers only keys the grapher can read.
- `value` and `onChange` are the plain row syntax (`x^2`, `sqrt(x)`), never LaTeX: the scene document stays plain text. The editor (MathLive) works in LaTeX inside; the engine translates both ways — `rowToTex(text, names)` and `texToText(latex)`.
- Every row of the lab cases means exactly the same after text → editor → text (checked in the engine tests).
- MathLive is loaded after the page appears. Until then, and if it cannot load, an ordinary text box is shown and works the same.
- `<ExpressionList input="text" />` keeps the plain text box instead.
- Only the row being edited holds an editor; the others are typeset pictures.

## Controls around a graph (shared parts)

The Graph component has no buttons. Controls live in `shells/parts/` and are built once; a shell only chooses which to show.

| Part | What it gives | Use |
| --- | --- | --- |
| `GraphToolbar.jsx` | Zoom in / out, back to the starting view, same scale on both axes, grid and axes on/off, theme, and the buttons for export and full screen | `<GraphToolbar graphRef scene onSceneChange homeView fullscreen={fs} onExport controls={{ theme: false }}>extra buttons</GraphToolbar>` |
| `FullscreenFrame.jsx` | Full screen for a whole shell, without rebuilding what is inside. Real browser full screen; where the browser refuses, it covers the window instead. Esc leaves | `const fs = useFullscreen();` then `<FullscreenFrame fs={fs}>…</FullscreenFrame>`; read `fs.isFull` to let the graph take the free height |
| `ExportModal.jsx` | One window with three tabs: PNG (as on screen), SVG (choose size and theme, copy or download), Scene (the JSON document, copy or download) | `<ExportModal open onClose graphRef scene fileName />` |
| `MathInput.jsx` | The math editor with its on-screen keyboard | see "Typing math" |
| `SliderControl.jsx` | One slider with play button and limit boxes, for shells that show sliders outside the list (the Explorer's strip) | `<SliderControl value min max playing onChange onRange onPlay label />` |
| `ExpressionList.jsx` | The editable rows, with the look of the approved prototype (sizes and, in the default theme, its exact colours; other themes use their own). `reorder` adds drag-to-move (drag the row number); `colors` adds a colour choice per row (right-click the colour dot). Shells put a yellow hint box above it and give the panel 380 px | `<ExpressionList scene onSceneChange selectedId onSelect reorder colors />` |
| `ModalFrame.jsx` | The frame of every pop-up window: backdrop, title, close, body, buttons. Opens over a full-screen shell too | `<ModalFrame open onClose title footer>…</ModalFrame>` |
| `OpenSceneModal.jsx` | Takes a scene back in from a file or pasted text, and checks it first (`readSceneText`) | `<OpenSceneModal open onClose onOpen={scene => …} />` |
| `useSceneHistory.js` | Undo and redo for a shell's scene. Changes within half a second are one step; moving the view is never a step | `const h = useSceneHistory(scene)` → `h.scene`, `h.set`, `h.undo`, `h.redo`, `h.reset`, `h.canUndo`, `h.canRedo` |
| `MathText.jsx` | Typeset math | see above |

Every control is on by default; `controls={{ zoom: false, … }}` drops one. A lesson embed would show none or one; an illustration shows nothing.

## The Calculator shell

```jsx
import { CalculatorShell } from '@/app/components/graph-studio';

<CalculatorShell defaultScene={scene} height={680} storageKey="my-page" />
```

Expression list on the left (hide it with the button on the graph), graph on the right; on a phone the list goes under the graph. Toolbar: zoom, starting view, equal scale, grid, axes, theme, undo, redo, New, Open, Export, full screen. Ctrl+Z undoes; Ctrl+Y or Ctrl+Shift+Z redoes. The work is kept as a draft in the browser under `storageKey` and brought back after a reload; `storageKey={null}` switches that off. Test page: `pages/test44`.

## The Explorer shell

```jsx
import { ExplorerShell } from '@/app/components/graph-studio';

<ExplorerShell initialExpression="x^3 - 3x" height={820} />
```

One function of x looked at in depth. It replaces the earlier Function Explorer (`app/components/functions/function-explorer`, still in place and untouched) and keeps its layout and look: header with the formula, expression box with the family badge, left rail of switches, Graph / Table / Map views, four tabs of property panels with links, insight cards, status bar. Test page: `pages/test45`.

| Prop | Default | Meaning |
| --- | --- | --- |
| `initialExpression` | `'0.1x^2 - 2'` | `x^2 - 1`, `y = x^2 - 1` and `f(x) = x^2 - 1` are all accepted. Letters other than x are parameters: `a sin(bx) + c` |
| `initialParams` | — | Starting values of parameters: `{ a: 2 }` or `{ a: { value: 2, min: -5, max: 5 } }`. A letter not given starts at 1 on −10 … 10 |
| `analysisRange` | `[-10, 10]` | The stretch of x the properties are worked out on. It does not follow the screen |
| `width`, `height` | `'100%'`, `820` | Size of the shell |
| `theoryBase`, `toolsBase`, `calculusBase`, `calculatorBase` | site paths | Where the links in the panels start |
| `links` | — | Single links to replace, e.g. `{ tools: { domain: '/my/page' } }` |
| `onSearch`, `onSettings`, `onCompare`, `onAnimate` | — | A header or bar button appears for each one given |

**Parameters.** Any letter other than x (and other than e, y, t, r) is a parameter. Each gets a slider in a strip under the expression box, with a play button and editable limits. The graph, the markers, every panel and the insight cards follow the slider; formulas (the function and its derivatives) keep the letter. The strip is absent when the function has no parameters. Values are kept when the expression is edited and the letter stays.

What changed against the earlier explorer:

- The text is read by the Graph Studio language, so `2x`, `sin2x`, `ln`, `|x|` mean the same as in the calculator.
- Formulas are typeset (header, legend, panels), including the derivatives.
- The graph is `<Graph>`: sharp at any zoom, no false lines at asymptotes, wheel and pinch zoom, zoom buttons, the graph fills its area.
- The antiderivative starts at 0 and stops at the nearest break of the function; it no longer changes when the view moves.
- The inverse is the true mirror image in y = x (the curve x = f(y)).
- Horizontal asymptotes are drawn together with the vertical ones.
- Export opens the shared export window (PNG, SVG, scene); full screen is the shared part.
- While the text cannot be read, the panels keep the last readable function, dimmed, instead of failing.
- On a narrow screen the panels go under the graph.

Files: `shells/ExplorerShell.jsx` (state and wiring), `shells/explorer/ExplorerAtoms.jsx` and `ExplorerPanels.jsx` (the layout parts and panels, copied from the earlier explorer), `shells/explorer/explorerTokens.js` (colours, sizes, link addresses).

### Compare

The Compare button of the first row opens a second box, g(x). While it is open:

- g is drawn on the graph in amber, with its own line in the legend, and the points where f and g meet are marked;
- a fifth tab, Compare, shows: where they meet (in the window on show), which is higher on each stretch, both values and their difference at the cursor, and a side-by-side table (formula, family, domain, range, roots, y-intercept, parity, continuity, vertical asymptotes);
- letters of g become sliders like those of f, shared when the letter is the same;
- "Open in Calculator" carries g as a second row;
- while g cannot be read, the last good comparison stays, dimmed.

The × of the g(x) row, or the button again, ends it. `compareWith="x + 2"` opens the Explorer with Compare on. The numbers come from `compareFunctions(f, g, xMin, xMax)` in `engine/analysis.js`: `{ same, crossings: [{ x, y }], intervals: [{ from, to, rel }] }`, `rel` being `above` (f is higher), `below`, `equal` or `undefined`. A pole is a boundary between stretches, not a meeting; a touching point is found as a meeting. The panel is `shells/explorer/ComparePanel.jsx`.

### Animate

The Animate button of the first row sends a point along the graph of f, from the left edge of the window to the right, again and again. The point is the cursor moved by the clock, so everything that follows the mouse follows it: the tangent, the values in the Calculus and Compare panels, the status bar. Its row has play / pause, a slider for where the point is (moving it pauses), a speed button (0.5×, 1×, 2×; one crossing takes 10 s at 1×), the values of x, f(x) and f′(x), and × to close. While the point travels by itself the mouse does not move it. Sliders of letters keep their own play buttons.

## The Concept tool shell

One concept taught with a few sliders and an explanation that follows them. The tool is described by a data file; adding a tool means writing data, not a component. Test page: `pages/test47`.

```jsx
import { ConceptShell } from '@/app/components/graph-studio';
import transformations from '@/app/components/graph-studio/shells/concepts/transformations.js';

<ConceptShell concept={transformations} height={660} />
```

Layout: name, the choice (a parent function, say) and the graph controls on top; the graph on the left with its legend and a strip of the values now applied; on the right the explanation above and the tabs, sliders, speed, Reset and switches below. On a narrow screen the controls come right under the graph and the explanation after them.

What the data file holds:

| Field | What it is |
| --- | --- |
| `title`, `id` | Name of the tool; `id` names exported files |
| `scene` | A scene document. Slider rows carry their limits; rows that only define things are marked `lock: 'hidden-row'`. A row may say how its line is drawn: `width`, `dashed` |
| `legend` | `[{ row, tex }]`: what the legend says for a drawn row (`tex: null` shows the row as typed) |
| `sliders` | `{ a: { label, default, seconds } }`: the sliders shown; `seconds` is one pass over the range at 1× |
| `sections` | The tabs: `[{ id, label, title, formula, hint, sliders: ['a'], general: [lines], notes: [{ when, text }] }]` |
| `choices`, `choiceLabel`, `startChoice` | Things to choose between: `[{ id, label, group, rows: { f: 'f(x) = x^2' }, notes: { a: [cases] }, marks: [...] }]` |
| `toggles` | `[{ id, label, rows: [ids], marks: true, on }]`: switches that show and hide rows or the marks |
| `marks` | Teaching marks placed by the sliders: `[{ type: 'point', x: 'h', y: 'k', label, when }]`, also `vline`, `hline`, `line`, `polygon` |
| `idleText`, `idleTextAll` | Said when a slider is where it started; `{choice}` is the chosen name |
| `derived` | Quantities worked out from the sliders, in order, each may use the ones before: `{ name, value: 'math' }`, `{ name, sum: 'math in j', index: 'j', count: 'n' }`, `{ name, integral: 'f', from: 'a', to: 'b' }` (of a function of the scene) |
| `readouts` | `[{ tex, value, decimals }]`: numbers shown on the graph beside the slider values |
| `about` | `{ label, lines }`: a second page of text beside the explanation |
| `appliedHeading` | The heading over the notes for the state shown (default "Applied to …") |

A section may carry `constants` (`{ p: 0, q: 1 }`) for its rules to use, so tabs can differ by numbers alone. A choice may carry its own `view`. A mark with `repeat: { index: 'j', count: 'n' }` is made once per j, which is how the strips of a Riemann sum are drawn. The rules can call the functions of the scene (`f(a + j dx)`); a function with a hole at one point (sin(x)/x at 0) is given the value its neighbours agree on. `{{S | 4}}` writes a value with four decimals; a line starting with `### ` is a small heading.

Texts: `$…$` is math, `**…**` is bold, a line starting with `- ` is a list item, `{{…}}` is a value worked out from the sliders (`{{2 pi / abs(b)}}`). A rule (`when`) is a piece of math such as `a < 0` or `a != 0 and b != 0`; in a list of cases the first true one is used, and a case without text says nothing. A tab with one slider shows that slider's case; a tab with several lists the sliders that have been moved. Rules, values and marks are read by `engine/concept.js` (`conceptTest`, `conceptValue`, `conceptText`, `conceptCase`, `conceptMarks`), so the shell holds no math.

Sliders play by the clock (0.5×, 1×, 2×, 4×), back and forth over their range. Full screen and export are the shared parts.

Built with it so far:

- Function transformations (`shells/concepts/transformations.js`, test page `pages/test47`), with the ten parent functions and the sentences of the earlier Transformations tool.
- Riemann sums (`shells/concepts/riemann.js`, test page `pages/test48`): bounds a and b, n strips, the four rules as tabs (left, right, midpoint, trapezoid), the sum, the true integral and the error on the graph, eight functions, the earlier tool's explanation and its Concepts page. The true integral is worked out numerically (2000 strips, Simpson). The view does not fit itself to the interval as the earlier tool did; each function opens on its own view.

From the Transformations tool these were left behind: the step-back and step-forward buttons, the picture icons in the function picker, the page's own "About" tab.

## Analysis of one function

```js
import { analyzeFunction } from '@/app/components/graph-studio';

const data = analyzeFunction('(x^2-1)/(x-2)');          // window [-10, 10]
data.family        // 'Rational'
data.domain        // 'ℝ \ {2}'
data.roots         // [-1, 1]
data.asymptotes    // [2]
data.derivTex      // LaTeX of f′, or null when only a numeric derivative exists
data.error         // set when the text cannot be read; nothing else is set then

analyzeFunction('a sin(bx) + c', { params: { a: 2, b: 0.5 } });   // c counts as 1
// .parameters → ['a', 'b', 'c'],  .values → { a: 2, b: 0.5, c: 1 }
```

Also returned: `formula`, `formulaTex`, `fn`, `fnPrime`, `fnDoublePrime`, `derivStr`, `deriv2Str`, `deriv2Tex`, `range`, `parity`, `period`, `symmetryAxis`, `extrema`, `inflections`, `singularities`, `horizAsymptotes`, `yIntercept`, `sign`, `mono`, `concavity`, `bounded`, `bounds`, `continuous`, `endLeft`, `endRight`, `injective`, `xMin`, `xMax`.

Helpers in the engine for drawing from a result: `markersIn(data, xFrom, xTo)` (roots, extrema, inflection points, asymptotes in a stretch; repeated for periodic functions), `antiderivative(data)`, `areaPolygon(data, from, to)`, `integrate(data, a, b)`, `valueAt(data, x)`. For moving a function between tools: `pickFunction(scene, preferId)` (a function of x in a scene, with the sliders it uses) and `functionRows(text, params)` (the rows to send).

The numeric method is the one of the earlier explorer's `buildPipeline`, moved as it was. Derivatives are symbolic through math.js where it knows the functions used (not for `floor`, `ceil`, `round`, `sign`, `min`, `max`), numeric otherwise.

## From one tool to another: a scene in the link

A shell hands its state to another shell through the address alone:

```
/graphing-calculator#scene=eyJlIjpbImYoeCkgPSAwLjF4XjIgLSAyIl0sInciOlswLDAsMC4wMywwLjAzXX0
```

- The part after `#` never reaches the server: no page is built for it, nothing is logged, and static pages keep working.
- It holds the rows (with sliders, ranges, colours, labels), the view, the settings that differ from the defaults, and the title. Row ids and defaults are left out, so a one-function link is about 100 characters.
- What is read from a link is checked (shape, sizes, colours, numbers) before use; a bad link is ignored.
- A link is used once: the receiving shell reads it and removes it from the address, so a reload does not bring it back over later work.

| Shell | Prop | What it adds |
| --- | --- | --- |
| `ExplorerShell` | `calculatorHref="/graphing-calculator"` | An "Open in Calculator" button: the function as the row `f(x) = …`, at the view on screen, in a new tab |
| `CalculatorShell` | `explorerHref="/function-explorer"` | An "Explore" button: the selected row when it is a function of x whose other letters are sliders of the scene, otherwise the first such row; greyed out when there is none. The sliders travel with it |
| both | `linkParam="scene"` | The name used in the address; `null` makes the shell ignore links |

Arriving at the calculator by a link shows the linked scene; the draft that was kept there is one Undo away, and the note above the list says so. Arriving at the explorer opens the first such function of the scene with its sliders (values and limits). "Open in Calculator" sends the function and one slider row per parameter. A row that depends on another row (`g(x) = f(x - 1)`, `y = d x` with `d = a + 1`) cannot be explored on its own.

In code: `sceneHash(scene)` → `'#scene=…'`, `readSceneHash(location.hash)` → a scene or `null` (both exported from the package entry).

This settles decision 13 of the brief (how a link carries the state) in the simplest way that needs no server. Saved scenes with ids (decision 12) are still open; a link to a saved scene could later use the same `#` place.

The Calculator has a "Copy link" button: it puts the address of the page with the whole graph (rows, sliders, view) on the clipboard. `linkParam={null}` takes the button away.

## The Graph component

```jsx
import { Graph } from '@/app/components/graph-studio';

<Graph
  scene={doc} onSceneChange={setDoc}      // controlled; or defaultScene={doc}
  selectedId={id} onSelect={setId}
  interaction={{ pan: true, zoom: true, dragPoints: true, trace: true, select: true }}
  overlays={{ specialPoints: 'selected' }} // or 'none'
  annotations={[{ type: 'vline', x: 2, dashed: true, label: 'x = 2' }]}
  curves={[{ id: 'd', f: x => 2 * x, color: '#475569', width: 1.5, dashed: true }]}   // extra curves given as functions
  onHover={p => …}                         // pointer in world units, null when it leaves
  onViewport={bounds => …}                 // the visible rectangle, when it changes
  theme="lesson"                           // overrides scene.settings.theme
  style={{ width: '100%', height: 420 }}
  ref={graphRef}
/>
```

- Works with no props (an empty grid).
- `ref`: `getSVG({ width?, height?, theme?, withSelection? })`, `getPNG()`, `getView()`, `setView(view | fn)`, `getScene()`, `getBounds()`, `getGeometryStats()`.
- Gestures: drag to move, wheel to zoom about the pointer, Shift + wheel x only, Alt + wheel y only, two-finger pinch, hover for coordinates on a curve, click a curve to select it, click a grey dot to pin its coordinates, drag a point bound to sliders.
- Annotations (world coordinates, drawn by both renderers): `vline`, `hline`, `xBand`, `yBand`, `line` (`{ x, y, slope }`, across the whole picture), `point` (`{ x, y, style: 'hollow' | 'solid', color, radius, label }`), `polygon` (`{ points: [[x, y], …], color, opacity, stroke }`).
- `curves` are for curves that are not rows of the scene (a derivative worked out by the analysis, for instance). `type: 'curveY'` with `g` draws x = g(y).

## Themes

Built in: `default`, `dark`, `lesson` (the site's blue, navy, amber), `projector`. A theme is a plain object; `ui` inside it styles the chrome of the shells.

```js
import { getTheme, registerTheme } from '@/app/components/graph-studio';
getTheme('dark');
getTheme({ base: 'lesson', curveWidth: 3 });
registerTheme('exam', { base: 'default', palette: ['#06357A', '#B45309'] });
```

No violet or indigo in any built-in theme.

## Pictures at build time

```js
import { sceneToSVG } from '@/app/components/graph-studio';

export async function getStaticProps() {
  return { props: { svg: sceneToSVG(scene, { width: 560, height: 320, theme: 'lesson' }) } };
}
```

No DOM is used, and the same scene always gives the same text.

## Figures in a lesson

A lesson gets its graphs as figures. Five kinds are agreed and built.

| # | Kind | What the reader can do | Built |
| --- | --- | --- | --- |
| 1 | Picture | Look | `GraphPicture` |
| 2 | Picture that wakes up | Press a button, then move, zoom, tap a curve for its points; Done puts the picture back | `GraphPictureLive` |
| 3 | Graph with sliders | Move the author's sliders under the graph; Reset puts them back | `GraphSliders` |
| 4 | Try your own | Rewrite the formula in a box under the graph, or press an offered formula; Reset puts the author's back | `GraphTry` |
| 5 | Step by step | Press Next and Back (or a dot) under the picture; each step has its own sentence and picture | `GraphSteps` |

```jsx
import { GraphPicture, GraphPictureLive, GraphSliders, GraphTry, GraphSteps } from '@/app/components/graph-studio/lesson';
import { scenePicture, sceneSteps } from '@/app/components/graph-studio/lesson-build';

export async function getStaticProps() {
  return { props: {
    parabola: scenePicture({ expressions: ['y = x^2/4 - 2'] },
      { width: 560, height: 320, annotations: [{ type: 'point', x: 0, y: -2, label: 'vertex' }] })
  } };
}

<GraphPicture picture={parabola} caption="The parabola $y = rac{x^2}{4} - 2$." />
<GraphPictureLive picture={parabola} caption="…" calculatorHref="/…" explorerHref="/…" />
```

- `scenePicture(scene, { width, height, theme = 'lesson', annotations, alt, narrowWidth = 340 })` runs at build time only and returns plain data: the drawing, a second drawing of the same rectangle for phones (so the numbers on the axes stay readable; shown at 480 px and narrower), the text for readers who cannot see it, the scene, and the link part `#scene=…`.
- Figure props: `picture`, `caption` (LaTeX between `$…$`), `calculatorHref`, `explorerHref` (each adds an "Open in …" link that carries the scene), `maxWidth`, `align` (`'center'` | `'left'`). `GraphPictureLive` also takes `buttonLabel`.
- Weight: a page with figures does not download the engine. It arrives (file `shells/embeds/LiveGraph.jsx`) when a reader first presses "Move and zoom". Import figures from `lesson`, never from the main entry.
- The live graph opens on exactly the rectangle of the picture. Points cannot be dragged in it.
- `GraphSliders` shows one slider for every slider row of the scene (`{ text: 'a = 1.5', slider: { min: -3, max: 3, step: 0 } }`); `only={['a']}` shows some of them. It loads as a picture; the engine is fetched when the figure comes near the screen, and the picture gives way to the live graph at the first move of a slider. The graph does not move or zoom, so a finger on it scrolls the page. The "Open in …" links carry the reader's slider values. Extra props: `only`, `resetLabel`.
- `GraphTry` shows the formula of one row in a box. Which row and which formulas are offered is said at build time: `scenePicture(scene, { editable: 1, tries: ['y = x^3 - 3x', 'y = 1/x'] })` (`editable` is the row's number from 0 or its id; default: the first row that draws something). It loads as a picture with the formula typeset; the math editor and the engine are fetched when the reader presses the box or an offered formula. While the text cannot be read, the last good graph stays and one line says so. The graph does not move or zoom. The "Open in …" links carry the reader's formula. Extra props: `label`, `triesLabel`, `resetLabel`.
- `GraphSteps` takes `steps={sceneSteps(scene, [step, …], options)}`. A step may have `text` (LaTeX between `$…$`), `show` (which rows are drawn: numbers from 0, or ids), `set` (slider values for this step, e.g. `{ a: -1 }`), `expressions` (other rows altogether), `view`, `annotations`, `alt`. Every step is a ready-made drawing, so this figure never downloads the engine. The place of the sentence has the height of the longest one, so nothing moves between steps. The "Open in …" links carry the scene of the step on show. Weight: about 12 KB of drawing per step (plus the phone drawing) inside the page, before compression. Extra prop: `start`.
- Test page: `pages/test46`.

## Lab and tests

- Lab page: `pages/test43` (not tracked by git). It lists 33 hard cases, each with a sentence saying what a correct picture is, and can show the SVG output beside the canvas.
- Engine tests: `node app/components/graph-studio/engine/tests/engine.test.mjs` — 184 checks; exits 1 on failure. A reported bug becomes a new lab case and a new check.

## Known gaps

- Curves that swing far faster than one pixel and are unbounded (tan zoomed out 1000×) are drawn almost flat. Needs the interval method planned for Part 2.
- An implicit curve that only touches zero, such as `(x^2+y^2-1)^2 = 0`, is not drawn. Same remedy.
- The filled area of a region is stepped at 2 px; the boundary line covers the steps, except along a restriction edge that is not straight up or across.
- Nested absolute bars are not supported when typed as `|…|` in plain text; the math editor writes `abs(…)`, which nests.
- Math editor: `sin^2 x`, primes (`f'`), `∞` and `≠` are not read. The on-screen keyboard was not tried on a real phone.
- `sin x^2` is read as (sin x)²; Desmos reads sin(x²). Decision pending.
- Parametric curves default to 0 ≤ t ≤ 2π; Desmos defaults to 0 ≤ t ≤ 1. Decision pending.
- Special points cover curves y = f(x) only.
- Geometry runs on the main thread (measured: 10 curves about 4 ms, 3 implicit curves about 15 ms at 1200 × 800).
- Hover labels and pinned labels are not part of the SVG output. The Explorer's legend is HTML, so it is not in exported pictures either.
- Explorer: `floor(x)` and similar step functions report a run of false roots on the step that lies on the axis (as the earlier explorer did).
- Explorer: derivative formulas come from math.js as it simplifies them; some are correct but not in the shortest form.

## Not built yet

Scenario player, Calculator with graph and Illustration shells; more concept tools (Domain needs axis highlights; the other wrappers after it); a play button for sliders in a lesson figure; in the Explorer: g in the Table and Map views while comparing, the picker for insight cards, a symbolic parent-and-transformations panel (still a static sketch); saved scenes with ids (decision 12 in the brief); "Explore" for a row that depends on another row; Web Worker; axis highlights, secant annotations.
