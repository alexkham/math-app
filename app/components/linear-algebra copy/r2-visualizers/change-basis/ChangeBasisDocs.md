# ChangeBasis — Component Documentation

Single-component React tool for exploring how a vector's coordinates change under different bases. Drag <span style="color:#0e6e8a">b₁</span>, <span style="color:#5b34c4">b₂</span>, and <span style="color:#b54708">v</span> on one canvas; watch the basis-grid, decomposition, coordinate readouts, and matrix all update live.

```jsx
import ChangeBasis from './changeBasis/ChangeBasis';

export default function Page() {
  return <ChangeBasis />;
}
```

---

## Table of contents

1. [Module layout](#module-layout)
2. [Component hierarchy](#component-hierarchy)
3. [Default visual layout](#default-visual-layout)
4. [Atomization model — overview](#atomization-model--overview)
5. [`<ChangeBasis>` — wrapper props](#changebasis--wrapper-props)
6. [Sub-component props](#sub-component-props)
7. [`useChangeBasisState` hook](#usechangebasisstate-hook)
8. [`useAnimState` hook](#useanimstate-hook)
9. [`Math2D` helpers](#math2d-helpers)
10. [`SCENARIOS` shape](#scenarios-shape)
11. [Atomization recipes](#atomization-recipes)
12. [Styling notes](#styling-notes)

---

## Module layout

The tool is split across two files. **Always import each export from the file that owns it.**

```
changeBasis/
├── ChangeBasis.jsx     ← this component (default export + sub-components)
└── ...
2DCore.jsx              ← shared primitives used by every 2D tool
```

### From `ChangeBasis.jsx`

```
Default export:   ChangeBasis

Named exports:
  Sub-components: BasisCanvas, CoordinatesCard, BasisMatrixCard, AnimationCard
  Wrappers:       ChangeBasisCore
  Hooks:          useChangeBasisState, useAnimState
  Data:           SCENARIOS, SCENARIO_GROUPS,
                  DEFAULT_LAYERS, ALL_LAYER_DEFS,
                  DEFAULT_ANIM_STEPS, CB_GEOM
```

### From `2DCore.jsx`

```
Shared shell:     AppShell, Card
Shared widgets:   LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard
Shared math:      Math2D, SVGRender, projection
Shared hooks:     useDrag
Shared data:      DEFAULT_GEOM
```

If a recipe imports `LayerChips` from `ChangeBasis.jsx`, it's wrong — `LayerChips` is in `2DCore.jsx`.

---

## Component hierarchy

```
ChangeBasis (default export)
└── ChangeBasisCore           ← state via render-prop
    └── useChangeBasisState   ← b1, b2, v, preset, layers
└── useAnimState              ← step, progress, isPlaying  (sibling hook)
```

Two independent hooks live inside the default export:

- `useChangeBasisState` — the basis/vector/preset state.
- `useAnimState` — the animation panel's step/progress/playing state.

They're separate because they have nothing to do with each other; using layout escape gives you access to the basis state via `ctx`, but you must call `useAnimState()` yourself if you want the animation panel wired up (or skip the panel).

State model: **two hooks**. No animation lifecycle for the basis itself (it's drag-driven), and the anim panel is a placeholder UI today — its play/prev/next/reset handlers update step/progress state but no tick loop is wired. Treat it as a slot for future animation behavior.

---

## Default visual layout

The default layout is a three-column grid (1340px max width):

```
┌──────────────────────────────────────────────────────────────┐
│ LEDE (crumb + intro)                                         │
├────────────┬──────────────────────────┬──────────────────────┤
│ Scenarios  │ Canvas (square, 1:1)     │ Explanation          │
│ sidebar    │   ↓                      │ Layer chips          │
│ (cols-1)   │ Readouts row (v, b₁, b₂) │ Coordinates card     │
│            │   ↓                      │ Matrix card          │
│            │ Animation panel          │                      │
└────────────┴──────────────────────────┴──────────────────────┘
   230px            620px                   minmax(360px,1fr)
```

- Scenarios are **single-column stacked** in the sidebar.
- The canvas is square (`aspect-ratio: 1/1`), padded 44px each side inside its 620px column, so the actual SVG renders at ~532×532.
- The canvas SVG viewBox is 600×600 with `scale=50` and `gridRx=gridRy=6`, giving a 12×12 visible grid.
- The layer chips strip lives inside the info column, under the explanation card.
- Right-column fonts are 10% smaller than the rest, via `.r2-info-col`-scoped CSS.

Below 1240px viewport, the three columns collapse into one stacked column.

---

## Atomization model — overview

`ChangeBasis` exposes **four levels of customization**, from least to most invasive. Pick the *highest* level (least invasive) that does what you need.

### Level 1 — Atomization helpers (props on the wrapper, no JSX)

Filter what the default sub-components show. Keep the entire default layout and state machinery.

```jsx
<ChangeBasis
  visibleScenarios={['standard', 'rotated45', 'skewed']}   // hide other presets
  enabledLayers={['grid', 'bgrid']}                         // hide other chips
  explanationOverride={{ byPreset: { standard: {...} } }}   // replace one explanation
/>
```

These never require writing replacement components.

### Level 2 — Slot overrides (replace individual cards with JSX)

Swap one card for your own JSX. State still flows through the wrapper.

```jsx
<ChangeBasis
  explanation={null}                       // hide it entirely
  basisMatrix={<MyOwnMatrixDisplay/>}      // replace with custom
  animation={null}                          // hide the animation panel
/>
```

Slot props: `canvas`, `layerChips`, `explanation`, `coordinates`, `basisMatrix`, `scenariosPanel`, `animation`. Each accepts `undefined` (default), JSX (replace), or `null` (hide).

### Level 3 — Layout escape (rebuild the layout, keep the basis state)

Get the state context, return any JSX tree. The default CSS shell still wraps you, and all sub-components remain importable.

```jsx
<ChangeBasis layout={(ctx) => (
  <YourOwnGrid>
    <BasisCanvas {...ctx} onB1Change={ctx.setB1}/>
    <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v}/>
  </YourOwnGrid>
)}/>
```

The `ctx` argument is the return value of `useChangeBasisState`. **It does not include animation state.** If you want the `<AnimationCard>` in your layout escape, call `useAnimState()` yourself from a parent component and pass its values to the card.

### Level 4 — Full atomic (use the hooks + sub-components directly)

Skip the wrapper entirely. Import only what you need; bring your own state if you want.

```jsx
import {
  useChangeBasisState,
  BasisCanvas, CoordinatesCard, CB_GEOM,
} from './changeBasis/ChangeBasis';

function MyOwnUI() {
  const s = useChangeBasisState();
  return (
    <>
      <BasisCanvas
        b1={s.b1} b2={s.b2} v={s.v} layers={s.layers}
        geom={CB_GEOM}
        onB1Change={s.setB1} onB2Change={s.setB2} onVChange={s.setV}
      />
      <CoordinatesCard b1={s.b1} b2={s.b2} v={s.v}/>
    </>
  );
}
```

Or skip the hook too — just feed sub-components from your own `useState`.

### Cross-cutting: per-handle draggability

A pattern specific to this component: in `<BasisCanvas>`, **each of the three handles is independently draggable** based on whether you pass its callback.

- Pass all three → fully interactive (default behavior in the wrapper).
- Pass only `onB1Change` and `onB2Change` → v is frozen.
- Pass only `onVChange` → basis is frozen; user explores how the same B handles different v's.
- Pass none → fully read-only view.

This applies whether you use the wrapper, slot overrides, layout escape, or full atomic. The wrapper passes all three callbacks by default; override the `canvas` slot to change that without leaving Level 2.

---

## `<ChangeBasis>` — wrapper props

All props are **optional**. The component runs out of the box.

### Header

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lede` | `ReactNode \| undefined` | `undefined` | If set, replaces the entire lede row. Pass `null` to hide. |
| `ledeCrumb` | `string \| null` | `'Linear Algebra · Change of basis'` | HTML string for the crumb. `null` to hide. |
| `ledeBody` | `string \| null` | concept intro | HTML string for the main sentence. `null` to hide. |

### Initial state

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialB1` | `[number, number]` | `[1, 0]` | Starting first basis vector. |
| `initialB2` | `[number, number]` | `[0, 1]` | Starting second basis vector. |
| `initialV` | `[number, number]` | `[2.5, 1.5]` | Starting vector. |
| `initialPreset` | `string \| null` | `'standard'` | Key into `SCENARIOS`. `null` for no active highlight. |
| `initialLayers` | `Layers` | `DEFAULT_LAYERS` | `{ grid, bgrid, decomp, labels }` — all booleans. |
| `scenarios` | `Record<string, Scenario>` | `SCENARIOS` | Custom scenarios dictionary. See [SCENARIOS shape](#scenarios-shape). |

### Slot overrides

| Prop | Default sub-component |
|------|----------------------|
| `layerChips` | `<LayerChips>` |
| `canvas` | `<BasisCanvas>` (with `geom={CB_GEOM}`) |
| `explanation` | `<ExplanationCard>` |
| `coordinates` | `<CoordinatesCard>` |
| `basisMatrix` | `<BasisMatrixCard>` |
| `scenariosPanel` | `<ScenariosPanel>` (with `columns={1}`) |
| `animation` | `<AnimationCard>` |

Each: `undefined` = default, JSX = replace, `null` = hide.

### Atomization helpers

| Prop | Type | Description |
|------|------|-------------|
| `visibleScenarios` | `string[]` | Filter presets shown in `<ScenariosPanel>`. |
| `enabledLayers` | `string[]` | Filter chips shown in `<LayerChips>`. Hidden layers still operate at their initial values. |
| `explanationOverride` | `{ byPreset: Record<string, Scenario> }` | Per-preset override of `title`/`exTag`/`body`. |
| `animSteps` | `Step[]` | Custom labels for the animation panel's step buttons. Default `DEFAULT_ANIM_STEPS`. |

### Layout escape

| Prop | Type | Description |
|------|------|-------------|
| `layout` | `(ctx) => ReactNode` | Receives the [hook return value](#usechangebasisstate-hook). Default CSS shell still wraps output. Does *not* include animation state — call `useAnimState()` yourself if needed. |

### Outer

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Appended to `.r2-root`. |
| `style` | `CSSProperties` | Applied to `.r2-root`. |

---

## Sub-component props

All sub-components are controlled.

### `<BasisCanvas>`  *(from `ChangeBasis.jsx`)*

The SVG canvas with up to three draggable handles.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `b1` | `[number, number]` | `[1, 0]` | First basis vector. |
| `b2` | `[number, number]` | `[0, 1]` | Second basis vector. |
| `v` | `[number, number]` | `[2.5, 1.5]` | The vector being expressed. |
| `layers` | `Layers` | `DEFAULT_LAYERS` | Which layers to render. |
| `geom` | `Geom` | `CB_GEOM` | `{ width, height, scale, gridRx, gridRy }`. |
| `onB1Change` | `(newB1) => void` | `undefined` | If set, makes `b1` tip draggable. |
| `onB2Change` | `(newB2) => void` | `undefined` | If set, makes `b2` tip draggable. |
| `onVChange` | `(newV) => void` | `undefined` | If set, makes `v` tip draggable. |
| `className`, `style` | — | — | Standard. |

**Per-handle draggability** is independent — see the cross-cutting section above.

### `<LayerChips>`  *(from `2DCore.jsx`)*

Layer toggle chip row.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layers` | `Layers` | `{}` | Current state. |
| `onChange` | `(newLayers) => void` | `() => {}` | Called with full next object. |
| `defs` | `LayerDef[]` | `[]` | Definitions to render. Each is `{ key, label, swatch? }`. Pass `ALL_LAYER_DEFS` from `ChangeBasis.jsx` to get the defaults. |
| `enabled` | `string[]` | `undefined` | Filter visible keys. |

### `<CanvasReadout>`  *(from `2DCore.jsx`)*

Small pill showing `label = value`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `kind` | `'v' \| 'b1' \| 'b2' \| 'av' \| 'domain' \| 'codomain'` | `'v'` | Color theme. |
| `label` | `string` | `'v'` | Italic Fraunces label. |
| `sub` | `string \| undefined` | `undefined` | Subscript (e.g. `'1'` for `b₁`). |
| `value` | `string` | `'(0, 0)'` | Value text (typically `Math2D.fmtPair(...)`). |

### `<CoordinatesCard>`  *(from `ChangeBasis.jsx`)*

Standard coords and basis coords side-by-side, plus the decomposition equation and a singular warning when applicable. Pure derivation.

| Prop | Type | Default |
|------|------|---------|
| `b1` | `[number, number]` | `[1, 0]` |
| `b2` | `[number, number]` | `[0, 1]` |
| `v` | `[number, number]` | `[2.5, 1.5]` |

### `<BasisMatrixCard>`  *(from `ChangeBasis.jsx`)*

Shows `B`, `B⁻¹`, `det B`, and an orthogonality classification (orthonormal / orthogonal / oblique / not-a-basis).

| Prop | Type | Default |
|------|------|---------|
| `b1` | `[number, number]` | `[1, 0]` |
| `b2` | `[number, number]` | `[0, 1]` |

### `<ExplanationCard>`  *(from `2DCore.jsx`)*

Per-scenario explanation. Pass `preset={null}` to show a generic "custom configuration" message.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `preset` | `string \| null` | — | Key into `scenarios`. |
| `scenarios` | `Record<string, Scenario>` | `{}` | Source dictionary. |
| `override` | `{ byPreset: Record<string, Scenario> }` | `undefined` | Per-preset override. |
| `argument` | `any` | `undefined` | If a scenario's `title`/`exTag`/`body` is a function, it's called with this. |
| `fallback` | `Scenario` | generic message | Shown when no preset/scenario resolves. |
| `badge` | `string` | `'·'` | (rarely used) |

### `<ScenariosPanel>`  *(from `2DCore.jsx`)*

Grouped preset buttons.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scenarios` | `Record<string, Scenario>` | `{}` | Source dictionary. |
| `groups` | `Group[]` | `[]` | Column groupings. |
| `preset` | `string \| null` | `null` | Active key. |
| `onSelect` | `(key) => void` | `() => {}` | Click handler. |
| `visibleKeys` | `string[]` | `undefined` | Filter visible keys. |
| `columns` | `number` | `groups.length` | Number of grid columns (`1` = sidebar mode used by default). |
| `badge` | `string` | `'01'` | Card badge label. |
| `title` | `string` | `'Scenarios'` | Card title. |
| `renderItem` | `({key,scenario,group,active,onSelect}) => ReactNode` | `undefined` | Per-item render override. |

### `<AnimationCard>`  *(from `ChangeBasis.jsx`)*

The animation panel: header → step buttons → progress bar → controls row (prev / play / next / time / reset).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Step[]` | `DEFAULT_ANIM_STEPS` | `[{ num, label }, ...]` |
| `step` | `number` | `0` | Active step index. |
| `progress` | `number` | `0` | 0…1, drives the progress bar. |
| `isPlaying` | `boolean` | `false` | Toggles the play button label. |
| `duration` | `number` | `1` | Total duration shown in the timer (seconds). |
| `onStep` | `(i) => void` | — | Step button click. |
| `onPlayToggle` | `() => void` | — | Play/pause toggle. |
| `onPrev`, `onNext` | `() => void` | — | Step nav. |
| `onReset` | `() => void` | — | Reset. |

The card renders the UI but does **not** drive any tick loop on its own. You hook your own animation logic to these callbacks. The default wrapper wires it to a placeholder `useAnimState()` — the buttons work but nothing animates yet.

---

## `useChangeBasisState` hook

### Options (all optional)

| Option | Type | Default |
|--------|------|---------|
| `initialB1` | `[number, number]` | `[1, 0]` |
| `initialB2` | `[number, number]` | `[0, 1]` |
| `initialV` | `[number, number]` | `[2.5, 1.5]` |
| `initialPreset` | `string \| null` | `'standard'` |
| `initialLayers` | `Layers` | `DEFAULT_LAYERS` |
| `scenarios` | `Record<string, Scenario>` | `SCENARIOS` |

### Return value

```ts
{
  // State
  b1: [number, number],
  b2: [number, number],
  v:  [number, number],
  preset: string | null,
  layers: Layers,

  // Actions
  setB1: (next: [number, number]) => void,   // clears preset highlight
  setB2: (next: [number, number]) => void,   // clears preset highlight
  setV:  (next: [number, number]) => void,   // does NOT clear preset (v is independent)
  selectPreset: (key: string) => void,       // sets b1, b2, preset (does not touch v)
  setLayers: (next: Layers) => void,
}
```

**Important asymmetry**: `setV` doesn't clear the preset, because `v` is independent of the basis choice. `setB1` and `setB2` do clear it (a custom basis breaks the preset).

---

## `useAnimState` hook

Lightweight state holder for `<AnimationCard>`. Does **not** run any timer — the play button just toggles `isPlaying`.

### Options

| Option | Type | Default |
|--------|------|---------|
| `initialStep` | `number` | `0` |
| `initialProgress` | `number` | `0` |
| `initialPlaying` | `boolean` | `false` |

### Return value

```ts
{
  step: number, progress: number, isPlaying: boolean,
  setStep, setProgress, setIsPlaying,
  playToggle: () => void,
  reset: () => void,
  prev: () => void,
  next: () => void,
}
```

---

## `Math2D` helpers

Pure functions, exported from **`2DCore.jsx`** (not from `ChangeBasis.jsx`).

| Function | Signature | Returns |
|----------|-----------|---------|
| `apply` | `(M, p) => [x, y]` | M·p |
| `det` | `(M) => number` | determinant |
| `inverse` | `(M) => M \| null` | inverse, or `null` if singular |
| `fmt` | `(x) => string` | compact number string |
| `fmtPair` | `([x, y]) => string` | `"(x, y)"` |
| `basisMatrix` | `(b1, b2) => [[b1x, b2x], [b1y, b2y]]` | columns = b1, b2 |
| `coordsInBasis` | `(b1, b2, v) => [c1, c2] \| null` | `B⁻¹·v`, or `null` if singular |
| `orthInfo` | `(b1, b2) => Info` | `{ kind: 'orthonormal' \| 'orthogonal' \| 'oblique' \| 'singular', det, angle? }` |

(Many more helpers exist in `Math2D` — `rank`, `kerImg`, `classify`, `eigenvalues`, `eigenvector`, `eigenStructure`, `alignment`, `snapToEigen`, `rotMatrix`, `interp`, `trace` — not specific to change-of-basis but available.)

---

## `SCENARIOS` shape

```ts
type Scenario = {
  label: string;    // Button text
  b1: [number, number];
  b2: [number, number];
  group: 'natural' | 'nonorth' | 'special' | 'degenerate';
  tag: string;      // Inline tag in button + scenario header

  // ExplanationCard fields:
  title: string | ((arg?) => string);
  exTag: string | ((arg?) => string);
  body:  string | ((arg?) => string);
};

type Group = {
  key: string;
  label: string;
  tag: string;
  color?: string;      // CSS color value
  softBg?: string;
  border?: string;
  gridCols?: number;
};
```

Custom scenarios:

```jsx
const MY_SCENARIOS = {
  ...SCENARIOS,
  myFavorite: {
    label: 'Eigenbasis of [[2,1],[1,2]]',
    b1: [Math.SQRT1_2, Math.SQRT1_2],
    b2: [-Math.SQRT1_2, Math.SQRT1_2],
    group: 'natural',
    tag: 'eigenbasis',
    title: 'Eigenbasis for the symmetric example',
    exTag: 'diagonalizes A',
    body: 'In this basis, the matrix <code>A = [[2,1],[1,2]]</code> becomes diagonal.',
  },
};

<ChangeBasis scenarios={MY_SCENARIOS} initialPreset="myFavorite" />
```

---

## Atomization recipes

### Recipe 1 — Restrict scenarios (Level 1)

Beginner-friendly subset only:

```jsx
<ChangeBasis visibleScenarios={['standard', 'rotated45', 'skewed', 'collinear']} />
```

### Recipe 2 — Render a single scenario, fully locked (Level 1 + 2)

Three flavors, from light to fully static:

**(a) one preset button + chooser visible:**
```jsx
<ChangeBasis visibleScenarios={['rotated30']} />
```

**(b) one preset, no chooser:**
```jsx
<ChangeBasis initialPreset="rotated30" scenariosPanel={null} />
```
User can still drag the handles (which clears the preset highlight internally, but the rest of the UI stays put).

**(c) fully static, read-only:**
```jsx
import { BasisCanvas, DEFAULT_LAYERS, CB_GEOM, SCENARIOS } from './changeBasis/ChangeBasis';

const SC = SCENARIOS.rotated30;

<ChangeBasis
  initialB1={SC.b1}
  initialB2={SC.b2}
  initialPreset="rotated30"
  scenariosPanel={null}
  animation={null}
  canvas={
    <BasisCanvas
      b1={SC.b1} b2={SC.b2} v={[2.5, 1.5]}
      layers={DEFAULT_LAYERS}
      geom={CB_GEOM}
      /* no callbacks → no dragging */
    />
  }
/>
```

### Recipe 3 — Hide chrome but keep behavior (Level 1 + 2)

```jsx
<ChangeBasis
  ledeCrumb={null}
  ledeBody={null}
  layerChips={null}
  scenariosPanel={null}
  animation={null}
/>
```

Result: just canvas + readouts + the three info cards.

### Recipe 4 — Read-only viewer (Level 3)

```jsx
import { BasisCanvas, CoordinatesCard, BasisMatrixCard, CB_GEOM } from './changeBasis/ChangeBasis';

<ChangeBasis layout={(ctx) => (
  <main className="r2-main cb-cols">
    <section className="r2-canvas-col">
      <div className="cb-canvas-wrap">
        <BasisCanvas
          b1={ctx.b1} b2={ctx.b2} v={ctx.v}
          layers={ctx.layers}
          geom={CB_GEOM}
          /* no onB1Change / onB2Change / onVChange = fully read-only */
        />
      </div>
    </section>
    <section className="r2-info-col">
      <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v}/>
      <BasisMatrixCard b1={ctx.b1} b2={ctx.b2}/>
    </section>
  </main>
)}/>
```

### Recipe 5 — Frozen v, draggable basis only (Level 3)

User explores the basis side; `v` stays put for didactic comparison.

```jsx
<ChangeBasis layout={(ctx) => (
  <BasisCanvas
    b1={ctx.b1} b2={ctx.b2} v={ctx.v}
    layers={ctx.layers}
    geom={CB_GEOM}
    onB1Change={ctx.setB1}
    onB2Change={ctx.setB2}
    /* v is frozen — no onVChange */
  />
)}/>
```

### Recipe 6 — Externally controlled state (Level 4)

Drive everything from your own `useState`:

```jsx
import {
  BasisCanvas, CoordinatesCard, BasisMatrixCard,
  DEFAULT_LAYERS, CB_GEOM,
} from './changeBasis/ChangeBasis';

function Controlled() {
  const [b1, setB1] = useState([1, 0]);
  const [b2, setB2] = useState([0.5, 1]);
  const [v, setV]   = useState([2, 1]);

  // Custom action: snap to orthonormal frame
  const snapOrtho = () => {
    const len = Math.hypot(b1[0], b1[1]) || 1;
    setB1([b1[0]/len, b1[1]/len]);
    setB2([-b1[1]/len, b1[0]/len]);
  };

  return (
    <>
      <BasisCanvas
        b1={b1} b2={b2} v={v} layers={DEFAULT_LAYERS}
        geom={CB_GEOM}
        onB1Change={setB1} onB2Change={setB2} onVChange={setV}
      />
      <CoordinatesCard b1={b1} b2={b2} v={v}/>
      <BasisMatrixCard b1={b1} b2={b2}/>
      <button onClick={snapOrtho}>Snap to orthonormal</button>
    </>
  );
}
```

### Recipe 7 — Just the canvas (Level 4)

Drop everything but the visualization:

```jsx
import { BasisCanvas, useChangeBasisState, CB_GEOM } from './changeBasis/ChangeBasis';

function JustCanvas() {
  const s = useChangeBasisState();
  return (
    <BasisCanvas
      b1={s.b1} b2={s.b2} v={s.v} layers={s.layers}
      geom={CB_GEOM}
      onB1Change={s.setB1} onB2Change={s.setB2} onVChange={s.setV}
    />
  );
}
```

### Recipe 8 — Sync with an external matrix view (Level 4)

`B` is a 2×2 matrix — if you already have a matrix editor elsewhere, sync them:

```jsx
function Synced({ matrix, onMatrixChange }) {
  // matrix is [[a, b], [c, d]] with columns being the basis vectors:
  const b1 = [matrix[0][0], matrix[1][0]];
  const b2 = [matrix[0][1], matrix[1][1]];
  const setB1 = ([x, y]) => onMatrixChange([[x, matrix[0][1]], [y, matrix[1][1]]]);
  const setB2 = ([x, y]) => onMatrixChange([[matrix[0][0], x], [matrix[1][0], y]]);

  const [v, setV] = useState([2, 1]);

  return (
    <BasisCanvas
      b1={b1} b2={b2} v={v} layers={DEFAULT_LAYERS}
      geom={CB_GEOM}
      onB1Change={setB1} onB2Change={setB2} onVChange={setV}
    />
  );
}
```

### Recipe 9 — Replace one scenario's explanation (Level 1)

```jsx
<ChangeBasis
  explanationOverride={{
    byPreset: {
      collinear: {
        title: 'Pas une base',
        exTag: 'dépendance linéaire',
        body: 'Les deux vecteurs sont colinéaires. <span class="warn">Pas une base.</span>',
      },
    },
  }}
/>
```

### Recipe 10 — Embed in a smaller, non-default layout (Level 3)

```jsx
<ChangeBasis
  className="my-embed"
  layout={(ctx) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: 480 }}>
      <BasisCanvas
        b1={ctx.b1} b2={ctx.b2} v={ctx.v} layers={ctx.layers}
        geom={CB_GEOM}
        onB1Change={ctx.setB1} onB2Change={ctx.setB2} onVChange={ctx.setV}
      />
      <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v}/>
    </div>
  )}
/>
```

### Recipe 11 — Custom animation step labels (Level 1)

```jsx
<ChangeBasis
  animSteps={[
    { num: '01', label: 'Identity' },
    { num: '02', label: 'Rotate' },
    { num: '03', label: 'Stretch' },
  ]}
/>
```

The animation panel renders three step buttons. To actually animate, replace the `animation` slot with your own component that drives `ctx`-style basis state through some interpolation logic (the default panel is UI only — see [`useAnimState`](#useanimstate-hook)).

---

## Styling notes

- Shared shell CSS lives in `2DCore.jsx` (`SHARED_CSS`), injected by `<AppShell>` via `<style dangerouslySetInnerHTML>`.
- Tool-specific CSS (`TOOL_CSS`) lives in `ChangeBasis.jsx` and is injected as `extraCSS`, after the shared shell — so tool selectors override shared defaults.
- Shared classes are prefixed `r2-`; tool-specific classes are prefixed `cb-`.
- CSS variables scoped to `.r2-root`. The root takes any `className`/`style` you pass on `<ChangeBasis>`.

### Color palette (CSS variables on `.r2-root`)

| Variable | Default | Used for |
|----------|---------|----------|
| `--v` | `#b54708` | vector v |
| `--b1` | `#0e6e8a` | first basis vector |
| `--b2` | `#5b34c4` | second basis vector |
| `--accent` | `#2b5bd7` | UI accents |
| `--eigen` | `#057a55` | eigen-line highlights (other tools) |
| `--warn` | `#a8201d` | singular / error states |
| `--text` / `--text-soft` / `--text-dim` / `--text-faint` | `#0f1729` → `#7989a3` | type scale |
| `--bg` / `--surface` / `--surface-2` | `#f7f9fc` / `#ffffff` / `#f3f6fa` | backgrounds |
| `--border` / `--border-strong` | `#dde3ec` / `#c4cdda` | rules |

### Layer keys

```ts
type Layers = {
  grid: boolean;     // standard background grid
  bgrid: boolean;    // dashed basis-grid
  decomp: boolean;   // dashed decomposition path: origin → c1·b1 → v
  labels: boolean;   // text labels on v, b1, b2
};
```

### Geom shape

```ts
type Geom = {
  width: number;     // SVG viewBox width
  height: number;    // SVG viewBox height
  scale: number;     // SVG units per math unit
  gridRx: number;    // grid extent in math units, x
  gridRy: number;    // grid extent in math units, y
};

// In ChangeBasis.jsx:
const CB_GEOM = { width: 600, height: 600, scale: 50, gridRx: 6, gridRy: 6 };

// In 2DCore.jsx:
const DEFAULT_GEOM = { width: 700, height: 500, scale: 50, gridRx: 7, gridRy: 5 };
```

Use `CB_GEOM` when rendering `<BasisCanvas>` outside the wrapper — `DEFAULT_GEOM` is rectangular and will look wrong in the square canvas slot.

---

## SSR safety

- No `Math.random()` in render or `useState` initializers.
- No `performance.now()`.
- `getBoundingClientRect` only inside pointer event handlers.
- All `dangerouslySetInnerHTML` on static or fully-derived strings.

Safe in Next.js App Router (`'use client'` at top of file).