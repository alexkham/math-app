# MathAnimation

Animated math on a canvas, written as data. Two components:

- `MathAnimation`: the player alone, with a Play button and a slider.
- `MathAnimationFrame`: a card around the animation with step explanations that follow it, step buttons and a progress bar with one segment per step.

Last updated 2026-11-14.

## Files in this folder

| File | Role |
|---|---|
| `MathAnimation_v2.jsx` | Engine and plain player (default export), plus `renderFrame` and `evalParams` |
| `MathAnimationFrame_v1.jsx` | The card with explanations (default export) |
| `mathAnimationThemes_v2.js` | `themes`, `DEFAULT_THEME`, `resolveTheme`, `mergeTheme` |
| `mathAnimationScenes_v3.js` | Scene factories with explanation steps, layout helpers, ready-made `scenes` |
| `mathAnimationScenesCombinatorics_v2.js` | `permutationsScene`, `combinationsScene`, ready-made `combinatoricsScenes` |
| `mathAnimationScenes_v2.js` | Older scenes file without steps. Only `/test20` uses it; new pages import v3 |

React only, no other dependencies. Styles are inline, drawing is one `<canvas>`.

## Quick start

```jsx
import MathAnimationFrame from '@/app/components/math-animation/MathAnimationFrame_v1'
import { matrixMultiplyScene } from '@/app/components/math-animation/mathAnimationScenes_v3'

// Build the scene once, outside the component.
const productScene = matrixMultiplyScene({ a: [[2, 0], [1, 3]], b: [[1, 4], [5, 2]] })

export default function Example() {
  return <MathAnimationFrame scene={productScene} title="Matrix product" explanationPosition="bottom" />
}
```

The player alone:

```jsx
import MathAnimation from '@/app/components/math-animation/MathAnimation_v2'
import { scenes } from '@/app/components/math-animation/mathAnimationScenes_v3'

<MathAnimation scene={scenes.derivative} theme="azure" ariaLabel="Secant line turning into the tangent" />
```

## Rules for using it on a page

- Build each scene once, at module level or with `useMemo` keyed on its options. A new scene object restarts the animation, so never call a scene factory inside JSX.
- Never return a scene from `getStaticProps` or `getServerSideProps`: scenes contain functions. Pass plain options (matrices, numbers) and build the scene in the component. A `steps` array of plain `{ at, title, text }` objects may come from `getStaticProps`.
- Keep the explanation in the page or in the steps, not drawn in the canvas. Canvas text is not read by search engines or screen readers. Give every animation an `ariaLabel` (the frame uses `title` if none is given).
- Do not set `height` on matrix and combinatorics scenes; they bring their own.
- Matrix products: keep to matrix × vector or 2×2 · 2×2. See the size guide below. With the step list at the side the canvas is narrower still, so put the explanation at the bottom for a 2×2 · 2×2 product.

## MathAnimationFrame props

| Prop | Default | Meaning |
|---|---|---|
| `scene` | built-in demo | Scene object. Its `steps` are used unless the `steps` prop is given |
| `steps` | `scene.steps` | Explanation steps; replaces the scene's own |
| `title` | none | Heading at the top of the card |
| `explanationPosition` | `'right'` | `'right'`, `'left'`, `'bottom'` or `'top'` |
| `explanationStyle` | `'list'` | `'list'`: all step titles, the current one with its text. `'caption'`: only the current step |
| `explanationWidth` | `240` | Width in px of a side panel |
| `stackBelow` | `640` | Below this card width a side panel moves under the animation and the progress bar gets a row of its own |
| `playback` | `'auto'` | `'auto'` plays through. `'step'` pauses at the end of every step |
| `autoPlay` | `true` | Start playing on mount and when the scene changes |
| `loop` | `false` | Restart at the end |
| `pauseOffscreen` | `true` | Stop advancing while scrolled out of view |
| `theme` | `scene.theme`, then `'sky'` | Canvas theme name or partial theme object |
| `themeOverrides` | none | Partial theme merged last |
| `height` | automatic | Canvas height |
| `renderText` | `(text) => text` | Turns a step's text into what is rendered, for example the site's own text renderer |
| `ui` | see "On this site" | Colours and shape of the card |
| `labels` | English | Text of the controls: `play`, `pause`, `replay`, `previous`, `next`, `timeline`, `step(index, total)` |
| `ariaLabel` | `title` | Accessible label for the canvas |
| `style` | none | Style object merged onto the card |

Controls: clicking a step jumps to it and plays; the arrow buttons move one step (back first returns to the start of the current step); the progress bar can be clicked or dragged; with focus on the bar the left and right arrow keys move by step.

The card keeps one height while playing: the panel reserves room for the longest step text.

## MathAnimation props

| Prop | Default | Meaning |
|---|---|---|
| `scene` | built-in demo | Scene object |
| `theme`, `themeOverrides` | `scene.theme`, then `'sky'` | As above |
| `height` | `scene.height`, then `380` | Canvas height. Width is always 100% of the parent |
| `autoPlay`, `loop`, `pauseOffscreen` | `true`, `false`, `true` | As above |
| `controls` | `true` | Show the Play button and the slider |
| `ariaLabel` | `'Math animation'` | Accessible label for the canvas |
| `style` | none | Style object for the wrapper `div` |

## Steps

```js
steps: [
  { at: 0,    title: 'Set up',        text: 'The matrix acts on the vector.' },
  { at: 0.14, title: 'Row 1, pair 1', text: 'Take 1 from row 1 and 5 from the vector.' },
]
```

- `at` is the position on the clock, 0 to 1, where the step begins. A step lasts until the next one starts.
- The first step starts at 0; steps are in increasing order.
- `title` is plain text. `text` goes through `renderText`.
- The frame draws the picture and picks the step from the same clock, so they cannot drift apart. What can go wrong is the data: use the same numbers for `at` as the `start` of the tracks the step describes. Nothing checks this for you.
- The plain player ignores `steps`.

To reword only some steps, map over `scene.steps` and pass the result as the `steps` prop.

## Included scenes

All factories take an options object and return a scene with `steps` built from those options.

| Factory | File | Options (default) |
|---|---|---|
| `matrixMultiplyScene` | scenes v3 | `a` ([[1, -3], [2, 4]]), `b` ([5, 7]), `collapse` (true), `stepMs` (2200), `stepDetail`, `size` (28), `rowGap` (70), `arc` (26) |
| `linearTransformScene` | scenes v3 | `matrix` ([2, 1, -1, 1]), `duration` (7000), `ghost` (true) |
| `derivativeScene` | scenes v3 | `fn`, `a` (1.2), `h0` (2), `domain`, `view`, `duration` (9000) |
| `riemannScene` | scenes v3 | `fn`, `from` (0.5), `to` (3.9), `steps` ([4, 8, 16, 32, 64], the rectangle counts), `domain`, `view`, `duration` (9000) |
| `permutationsScene` | combinatorics | `items` (['A', 'B', 'C']), `stepMs` (1500), `size` (28), `arc` (22) |
| `combinationsScene` | combinatorics | `items` (['A', 'B', 'C', 'D']), `k` (2), `stepMs` (1500), `size` (28), `arc` (22) |

Ready-made with defaults: `scenes.matrixMultiply`, `scenes.linearTransform`, `scenes.derivative`, `scenes.riemann`, `combinatoricsScenes.permutations`, `combinatoricsScenes.combinations`.

Notes:

- `matrixMultiplyScene`: `a` is m × n; `b` is n × p or a flat array for a column vector; a size mismatch throws. Entries are numbers or strings. `collapse` replaces each sum by its value at the end and is skipped when any entry is not a number. `stepDetail` is `'pair'` (one step per product) or `'entry'` (one step per result entry); the default is `'pair'` up to 6 products, otherwise `'entry'`.
- `linearTransformScene`: `matrix` is `[a, b, c, d]`, where i lands on `(a, b)` and j lands on `(c, d)`.
- `permutationsScene`: 2 to 4 items, otherwise it throws. One column per first item.
- `combinationsScene`: throws when there are more than 20 choices to list.

Size guide for matrix products, on a 680px wide canvas:

| Product | Text size shown |
|---|---|
| 2×2 · vector | full, 28px |
| 2×3 · vector, 3×3 · vector | about 25px |
| 2×2 · 2×2 | about 21px |
| 3×3 · 3×3 | about 10px, too small |

## Themes

Canvas themes: `sky` (default), `ice`, `azure`, `paper`, `blueprint` (dark), `slate`.

Each layer overrides the one before: `sky` → the named theme → `scene.themeOverrides` → the `themeOverrides` prop. A single object can still set its own `color`, `width`, `opacity`, `head`, `fillOpacity` or `size`.

A theme holds `colors` (bg, baseGrid, grid, dots, axis, primary, accent, ghost, text, frame), `stroke`, `arrow`, `grid`, `fill`, `point`, `dash`, `font`, `bracket`, `chip` and `motion`. To add a theme, add one entry to `themes` in the themes file, listing only what differs from `sky`:

```js
mint: mergeTheme(sky, { colors: { bg: '#ECFDF5', accent: '#0F766E' } }),
```

## Writing a new scene

A scene is a plain object:

```js
{
  duration: 7000,                        // ms for the whole clock
  height: 380,                           // optional canvas height
  view: { x: [-7, 7], y: [-4, 4], equal: true, pad: [0, 0, 0, 0] },   // plots and geometry, y up
  // or: view: { px: [600, 310], maxScale: 1, shift: (p) => [0, 0] }  // formulas, design pixels, y down
  params: { k: 0 },                      // named values and where they start
  tracks: [{ param: 'k', to: 1, start: 0.5, end: 0.9, ease: 'smooth' }],
  derive: (p) => ({ doubled: p.k * 2 }), // optional computed values
  steps: [{ at: 0, title: 'Start', text: '...' }],
  objects: [{ type: 'vector', to: (p) => [p.k, 0], color: 'accent' }],
}
```

- One clock runs from 0 to 1. Each track moves one parameter between `start` and `end` on that clock; tracks on the same parameter chain in order. `ease` is `linear`, `smooth`, `in`, `out` or `inOut`.
- Objects are redrawn every frame from the parameters. Most properties take a value or a function `(p) => value`; `p.t` is the clock. Objects draw in order; an object with `opacity` 0 is skipped.
- `equal: true` keeps one unit the same length on both axes (geometry); `equal: false` stretches the ranges to fill the canvas inside `pad` (function plots).
- A pixel view is centred and scaled down to fit, never up beyond `maxScale`.
- For a sequence, animate one counter linearly from 0 to the number of steps and let step `k` read its own progress as `clamp(p.q - k, 0, 1)`. The matrix, Riemann and combinatorics scenes all work this way.
- Use theme colour keys (`primary`, `accent`, `ghost`, `axis`, `text`), not fixed colours, so every theme works.
- Put new scenes in a scenes file as a factory function that returns the object, with `steps` whose `at` values match the track `start` values.

Object types (all accept `color` and `opacity`):

| Type | Main properties |
|---|---|
| `baseGrid` | static unit grid |
| `grid` | `matrix`, `extent`, `progress`, `dots` |
| `axes` | `progress`, `ticks` |
| `vector` | `from`, `to`, `matrix`, `label`, `labelOffset`, `head`, `width` |
| `curve` | `fn`, `domain`, `progress`, `samples`, `dashed`, `width` |
| `line` | `from` and `to`, or `through` and `slope`; `extend`, `dashed`, `width` |
| `polygon` | `points`, `matrix`, `closed`, `fill`, `stroke`, `dashed`, `fillOpacity` |
| `point` | `at`, `matrix`, `r`, `scale` |
| `rects` | `fn`, `from`, `to`, `n`, `grow`, `sample` (Riemann rectangles) |
| `area` | `fn`, `from`, `to`, `fillOpacity` |
| `label` | `at`, `text`, `offset`, `font`, `size`, `align` |
| `readout` | `lines` (strings or `{ text, color }`), `corner` |
| `token` | `at`, `text`, `size`, `symbol`, `colorTo`, `blend` (one movable symbol) |
| `chip` | `at`, `text`, `w`, `h` (rounded highlight behind a token) |
| `bracket` | `x`, `y0`, `y1`, `side` |

`head` is `chevron`, `triangle`, `dot` or `none`. `matrix` is `[a, b, c, d]`.

Layout helpers for formula scenes, exported from the scenes v3 file: `textWidth(text, size)`, `formatEntry(value)`, `layoutMatrix({ widths, rows, x, cy, rowGap, colGap, pad })`, `layoutProductSum(aWidths, bWidths, size)`.

Lower-level exports of the engine: `renderFrame(ctx, scene, theme, t, width, height)` draws one frame on any 2D canvas context (`theme` must come from `resolveTheme`), and `evalParams(scene, t, defaultEase)` returns the parameter values at clock `t`.

A new kind of object that the existing types cannot draw means a change to the engine file itself.

## Limits

- Only the six scenes above exist. Any other animation needs a new scene written.
- Symbols are single-line text: numbers, letters, signs, parentheses. No fractions, roots, exponents or LaTeX inside the canvas.
- Formula layouts use estimated text widths, not measured ones.
- Wide matrix products shrink to fit instead of wrapping; beyond 2×2 · 2×2 they are too small to read at page width.
- No dragging of points or other interaction inside the canvas.
- Scenes contain functions, so they cannot be stored as JSON.
- The frame has its own copy of the player logic. A fix to the player in the engine file does not reach the frame, and the other way round.
- Step titles are plain text; only the step text goes through `renderText`.
- With the step list at the side, the step text sits inside the step's button, so a link in that text would also jump the animation. With the list above or below, or with the caption style, it does not.

## On this site (math-app)

- **Fonts:** the themes name DM Sans and JetBrains Mono. Both are loaded in `pages/_document.js`.
- **Card colours:** the card defaults are neutral with a blue accent:

  ```js
  { cardBg: '#ffffff', border: '#e2e8f0', borderStrong: '#cbd5e1', text: '#1e293b', textSecondary: '#475569',
    textMuted: '#94a3b8', accent: '#1d4ed8', accentBg: 'rgba(37,99,235,0.1)', radius: 12, controlRadius: 8,
    padding: '16px 20px', font: 'inherit' }
  ```

  Pass the site palette through `ui`, for example `ui={{ accent: '#2563EB', accentBg: 'rgba(37,99,235,0.1)', text: '#06357A' }}`.
- **Step text:** to allow math and links in step text, pass the site's `processContent` as `renderText`.
- **Demo pages:** `/test20` (player alone, 12 demos and a scene-swap check) and `/test21` (frame, 8 demos). Both are gitignored and exist only on the machine where they were made.
- **Not on any lesson or tool page yet.**

## Where the files came from and what was changed

Source: `MathAnimation_v2.zip` and `MathAnimationLesson_v1.zip` (2026-11-11), which also hold the original docs and install instructions. Changes made here since:

| File | Change |
|---|---|
| `MathAnimationFrame_v1.jsx` | Renamed from `MathAnimationLesson`. With the list above or below, the step text sits in one fixed area under the titles. Side lists and captions reserve room for the longest text. On a narrow card the progress bar gets its own row |
| `MathAnimation_v2.jsx` | The scene, theme and loop values are stored in an effect instead of during render, and the button label is reset during render when the scene changes. Behaviour is the same; this satisfies the newer React lint rules |
| `mathAnimationScenes_v3.js` | One comment line carries the new name |
| `mathAnimationScenesCombinatorics_v2.js` | Written here, not from the zips |
| `mathAnimationThemes_v2.js`, `mathAnimationScenes_v2.js` | Unchanged |

A newer zip dropped over these files would undo the changes in the first two rows.

The copy on linearalgebranotes (`components/math-animation/`) has the same engine and frame logic, with that site's fonts and theme colours as defaults.

## Checked and not checked

Checked on the demo pages (2026-11-14): every scene plays to the end; the highlighted step follows the animation; clicking a step and the arrow buttons; pause after each step; all four panel positions and both styles; swapping the scene on a running player; card height steady at 1024px and 375px wide; lint with 0 errors.

Not checked: a production build; dragging the progress bar; the keyboard arrows on the bar; use on a real lesson page.
