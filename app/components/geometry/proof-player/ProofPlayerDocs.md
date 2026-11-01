# ProofPlayer v1

Step-by-step geometric proofs on a draggable SVG canvas, in the same player style as the linear-algebra ScenePlayer tools (MatrixCore / GramSchmidtWrapper).

---

## File layout

```
geometry/proof-player/
  engine/
    math.js              pure helpers: dist, mid, unit, angleGeom, footOf, lineIntersection, area2
    composites.js        triangle / quadrilateral / polygon → primitives with ids T.fill, T.AB, T.angleA
    resolver.js          POINT_TYPES (resolve + drag rule), expand, resolve, dragHandle
  render/
    primitives.jsx       Point, Segment, Line, Polygon, Circle, Angle + PALETTE
    annotations.jsx      Ticks, RightAngle, ParallelArrows
    registry.js          type → component, paint order
  player/
    ProofCanvas.jsx      scene + model → <svg>; interactive or static
    ProofPlayer.jsx      controls + cumulative step log (ScenePlayer behaviour)
    useProofModel.js     live model, drag, validity guard, reset
  ProofPlayerWrapper.jsx card, control panel, proof select, explanations merge
  buildScenes.js         proof → [{ phase, title, formula, canvas: { show, hl } }]
  proofDiagrams.js       frozen SVG map for demoUnitFrame, keyed <proofKey>-<phase> (getStaticProps only)
  styles.js              PP_CSS + inline style tokens
  proofs/
    index.js             registry
    angleSum.js
    isosceles.js
```

Dependencies run one way: `proofs → engine ← render ← player ← wrapper`. Nothing imports upward.

---

## Proof file

```js
export default {
  label, info, hint,
  labelCenter: ['A', 'B', 'C'],      // point labels are pushed away from this centroid
  viewBox: [0, 0, 560, 420],         // optional
  model: { points, params, composites, objects },
  steps: [{ phase, just, title, formula, show: [ids], hl: [ids] }],
  readout: (P) => string,            // optional, under the canvas
  isValid: (P) => boolean            // optional, rejects degenerate drags
}
```

- `show` is cumulative: an id stays visible in every later step.
- `hl` applies to the current step only. When it contains an angle, other angles dim.
- `title`, `formula` are raw HTML. `just` becomes the justification tag.
- Colors are role names (`alpha`, `beta`, `gamma`, `delta`, `hl`, `ink` …) resolved by `PALETTE`.

### Object types

| type | fields | kind |
|---|---|---|
| `point` | (from `model.points`) | free, draggable |
| `midpoint` | `of: [a, b]` | derived |
| `pointAlong` | `from, dir: [a, b], len` | derived |
| `apex` | `base: [a, b], param, drag, minParam` | derived, draggable along the bisector |
| `foot` | `from, to: [a, b]` | derived |
| `intersection` | `of: [a, b, c, d]` | derived |
| `segment`, `line`, `polygon` | `of` | primitive |
| `circle` | `of: [center, through]` | primitive |
| `angle` | `at, from, to, color, label` | primitive |
| `ticks`, `parallel` | `of: [a, b], n` | annotation |
| `rightAngle` | `at, from, to, size` | annotation |

Adding a type: a component in `render/`, a line in `registry.js`, and for a derived point a `POINT_TYPES` entry (`resolve`, optional `drag`).

---

## Wrapper API

```jsx
<ProofPlayerWrapper
  proofKeys={['angleSum']}            // one key hides the selector
  defaultProof="angleSum"
  explanations={{ angleSum: { given: '<div>…</div>', … } }}
  subtitle="…"
  defaultSpeed={1500}
  showDisplayOptions
/>
```

`explanations` is keyed by proof, then by phase. The HTML is appended to the formula of every scene with that phase, as in GramSchmidtWrapper.

---

## Frozen states

```js
import proofDiagrams from '@/app/components/geometry/proof-player/proofDiagrams'
const D = proofDiagrams                          // { 'angleSum-given': svg, 'angleSum-construct': svg, … }
demoUnitFrame({ svg: D['angleSum-given'], caption, text })
```

The default export is a flat map keyed `<proofKey>-<phase>` (the last scene of each phase), the same shape as `identityDiagrams` and `distributionExplorerDiagrams`; those keys are the registry's `diagramStates`. Stills are rendered from `ProofCanvas` through `renderToStaticMarkup`, so they always match the live canvas. `proofStill(key, step)` and `proofStillsByPhase(key)` remain for one-off stills.

---

## Pages

```
pages/geometry/index.jsx                   provisional hub, noindex, follow
pages/geometry/visual-tools/index.jsx      section page (VisualToolsPage, auto-discovered tools), indexed
pages/geometry/visual-tools/[view].jsx     one indexed page per proof, /geometry/visual-tools/<slug>
```

**Above the fold (owner rule 2026-11-01, applies to every proof page):** when the page opens, the canvas and the Back / Play / Next / Reset row must both be on screen without scrolling, on a 1366×650 viewport as well as 1920×1000. The page keeps one `<br/>` after the breadcrumb, the "How to use" block directly under the h1 and the tool 10px under it. Inside the component: one-row top panel (proof, display toggles, hint), `canvasSvg.maxHeight = clamp(220px, 100vh − 440px, 420px)`, canvas and log in two equal columns, no subtitle. Each proof sets a tight `viewBox` around its figure (angleSum: `[20, 50, 520, 350]`) so the scene is not padded with empty canvas. Measured: Reset button bottom at 636/650 and 836/1000.

The URL is flat: no `/proofs` level. `category: 'Proofs'` is the tab and card group on the section page, `subCategory` is the figure (`'Triangle'`, `'Circle'`, …). `buildToolIndexData` reads a `[view].jsx` that sits directly in the section folder, so the views appear on the section page without a folder of their own.

`[view].jsx` follows the layout of every other dynamic visual-tool route (`pages/probability/visual-tools/*/[view].jsx`, `pages/algebra/visual-tools/identities/[view].jsx`): a literal `paths` list in `getStaticPaths`, and in `getStaticProps` one `viewConfig` block per view plus per-view maps keyed by the slug — `unitsByView`, `orderByView`, `EXPLANATIONS`, `INSTRUCTIONS`, `DEMOS`. All page content lives in that file. The linking scripts (`session-docs/scripts/viewmask.py` and the Line 1 / Line 2 / Line 3 passes that import it) read exactly these maps, so do not move content into separate modules.

Scene notes in `EXPLANATIONS` are raw HTML with plain `<a href="#slug">` anchors: the player renders scene text with `dangerouslySetInnerHTML`, not `processContent`. Section prose, instructions and FAQ use the normal `processContent` syntax.

---

## Adding a view

1. `proofs/<proofKey>.js` — the proof definition; add it to `proofs/index.js`. Its phases become `proofDiagrams` keys `<proofKey>-<phase>` automatically.
2. `pages/geometry/visual-tools/[view].jsx`, keyed by the new slug (the slug names the figure, e.g. `isosceles-base-angles`):
   - one line in `getStaticPaths` `paths`
   - a `viewConfig` block: `proofKey`, `title`, `description`, `h1Title`, `url` (`/geometry/visual-tools/<slug>`), `svg` (the card icon: an 80×80 inline SVG drawn for the dark blue card, light fills `#85B7EB` / `#E6F1FB` / `#B5D4F4`, strokes `#185FA5` / `#0C447C`, amber `#FAC775` / `#854F0B` for the highlight, as in `pages/probability/visual-tools/distributions/[view].jsx`), `category: 'Proofs'`, `subCategory` (the figure, e.g. `'Triangle'`), `name`, `keywords`, `sectionsContent`, `faqQuestions`, `schemas` (`webApplication`, `breadcrumb`)
   - entries in `unitsByView`, `orderByView`, `EXPLANATIONS`, `INSTRUCTIONS` (and `DEMOS` once a demo script exists)
   - a `HOW_TO_USE` entry: the long-form how-to-use rendered as the body of the first section (`getting-started`) by `app/components/how-to-use/HowToUseSection.jsx` (ported from calculatematrix: tabs Overview / Figure / Controls / Log / Behavior). Its Overview is `ProofPlayerMockup.jsx` (a static picture of the player built from the player's own parts, `proofKey` prop) with numbered pins from `overview.callouts[].pos`; measure the pin offsets on the rendered mockup frame (the mockup elements carry `data-pin` attributes), x positions inside the canvas column as `calc(25% ± px)`.
   - every phase used in `unitsByView` / `EXPLANATIONS` / `orderByView` must exist in the proof's `steps`; every `#anchor` in `EXPLANATIONS` and `INSTRUCTIONS` must be an `orderByView` anchor
3. `pages/geometry/visual-tools/index.jsx`: nothing to add for the card, it is auto-discovered from the `viewConfig` block (a new `subCategory` opens a new figure group). Update the Proofs category article and the FAQ if they list proofs.
4. Registry (`app/api/db/repositories/visual-tools-registry.json`), when the linking passes reach geometry: a parent entry `geometry-proofs` with `pagePath: pages/geometry/visual-tools/[view].jsx` and `viewEntries`, plus one entry per view `geometry-proofs-<slug>` (`view`, `parent`, `slug: <slug>`, `diagramsModule`, `diagramStates`). `getRelatedTools('geometry-proofs-<slug>')` returns `[]` until then.
