# LinearTransformations v7

A 2D visualizer for **linear transformations** of the plane. A 2&times;2 matrix `A` morphs the grid, unit square, unit circle, and basis vectors. The user scrubs `t` from 0 to 1; `M(t)` interpolates between the identity and `A`.

---

## File layout

```
r2-visualizers/
  LinearTransformations.jsx   ← this component (standalone, lt5- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`.

---

## v7 layout (current)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Scenarios    │ Canvas (620×620, square) │ Explanation               │
│ sidebar      │ Readouts (det, classify) │ Layer chips               │
│ (3 groups,   │ Animation panel          │ Matrix A editor           │
│ single col)  │                          │ Live data                 │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px.

Canvas has **no side padding** (full 620 col width). Geometry: `{ size: 600, scale: 50, gridR: 8 }` — larger `gridR` than other v7 tools so the *transformed* grid still covers the visible region (&plusmn;6 visible).

### Per-column contents

- **Left (sidebar)** — scenarios card, single-column stack across 3 groups
- **Center (canvas col)** — canvas, then 2-up readouts (`det M(t)` | `classify A`), then animation panel (with `t` scrubber)
- **Right (info col)** — explanation (title + body + insight + watch), layer chips, matrix A editor, live data

The animation panel **is fully wired** here (unlike Eigen/ChangeBasis). `useAnimationState` drives `t` with `easeInOutCubic` over `duration` ms. Selecting a scenario auto-plays `t: 0 → 1`.

---

## Module sections

```
SECTION 1  Math2D            apply, det, trace, interp,
                             eigenvalues, eigenvector, rank, kerImg,
                             classify, fmt, fmt2
SECTION 2  SVGRender         grid, samples, circle, square,
                             eigen, kerImg, basis
SECTION 3  Scenarios         SCENARIOS (12 presets), SCENARIO_GROUPS (3),
                             SCENARIO_CUSTOM (used when A is edited),
                             PRESETS (back-compat: key → A matrix)
SECTION 4  Hooks             useTransformState, useAnimationState
SECTION 5  Component CSS     lt5-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    VisualizerCanvas, LayerChips, CellInput,
                             MatrixInput, CanvasReadout, ScenariosPanel,
                             ExplanationCard, LiveDataCard, AnimationCard
SECTION 7  Core + Wrapper    LinearTransformCore (headless),
                             LinearTransform (default export)
```

---

## Scenario groups

| group | tag | scenarios |
|---|---|---|
| `full`  | rank 2 | `identity`, `rot45`, `rot90`, `scale2`, `shearX`, `reflectX`, `reflectDiag`, `twist` |
| `rank1` | rank 1 | `projectX`, `projectDiag`, `rank1` (outer product) |
| `zero`  | rank 0 | `zero` |

Each scenario carries `title`, `tag`, `body`, `insight`, `watch` — the explanation card has 3 sections (body / Insight / What to watch).

`SCENARIO_CUSTOM` is shown when `activeScenario` is `null` (user edited the matrix manually).

---

## Hooks

### `useTransformState(options)`

Returns `{ A, activeScenario, layers, setA, selectScenario, setLayers }`.

- `setA(next)` clears `activeScenario` (custom mode).
- `selectScenario(key)` copies preset matrix; explanation card switches to that scenario's copy.

### `useAnimationState(options)`

raf-driven; cleanup on unmount. Options: `step` (default 0.1), `duration` (ms, default 1600), `initialT` (default 0).

Returns `{ t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT }`.

- `play()` — if `t >= 1`, resets to 0 then animates to 1; otherwise resumes to 1.
- `stepFwd / stepBack` — snap to next/prev `step` multiple.
- `setT(newT)` — cancels any running animation, sets directly.

`LinearTransformCore` watches `activeScenario` and auto-plays `t: 0 → 1` on every scenario change.

---

## Components

| Component | Key props |
|---|---|
| `VisualizerCanvas` | `A, t, layers, size, scale, gridR, showStatus` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `MatrixInput` | `A, onChange, step` |
| `CellInput` | `value, onCommit, step` |
| `CanvasReadout` | `kind, label, value` |
| `ScenariosPanel` | `scenarios, groups, visibleScenarios, activeScenario, onSelect, badge` |
| `ExplanationCard` | `A, activeScenario, scenarios, override` |
| `LiveDataCard` | `A, t` |
| `AnimationCard` | `t, playing, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub` |

### Layer keys

`DEFAULT_LAYERS`: `grid, basis, square, circle, kernelImage, labels` on; `eigen, samples` off.

### `MatrixInput` editing

Each cell is a `CellInput` with safe mid-edit string state — accepts intermediate states (`""`, `"-"`, `"."`) without rejecting input, commits on valid parse or blur. Editing any cell calls `transform.setA(next)`, which clears `activeScenario`.

### `LiveDataCard`

Shows: `M(t)` (bracketed matrix), `det M(t)` (live, accent color), `det A`, `trace A`, `eigenvalues` (real list or complex pair), `rank A`.

---

## Wrapper API

```jsx
<LinearTransform
  // header
  lede                                 // JSX override
  ledeCrumb={'...'} ledeBody={'...'}   // HTML strings (null hides)

  // core state seeds
  initialA={[[1,0],[0,1]]}
  initialScenario="identity"
  initialLayers={DEFAULT_LAYERS}
  scenarios={SCENARIOS}

  // animation
  step={0.1} duration={1600} initialT={0}

  // slot overrides (undefined = default, JSX = replace, null = hide)
  canvas layerChips matrixInput scenariosPanel
  explanation liveData animation

  // atomization
  visibleScenarios={['identity', 'rot45']}
  enabledLayers={['grid','basis','square']}
  explanationOverride={{
    byScenario: { identity: { title, tag, body, insight, watch } },
    custom: { ... }
  }}

  // layout escape hatch
  layout={({ transform, anim }) => <CustomLayout ... />}

  className style
/>
```

### Headless core

```jsx
<LinearTransformCore initialA={...} initialScenario="identity" ...>
  {({ transform, anim }) => /* render anything */}
</LinearTransformCore>
```

`transform` = `{ A, activeScenario, layers, setA, selectScenario, setLayers }`.
`anim` = `{ t, playing, ..., play, cancel, reset, stepFwd, stepBack, setT, animateTo }`.

---

## Atomization recipes

**Single scenario, locked**
```jsx
<LinearTransform
  initialScenario="rot45"
  scenariosPanel={null}
  matrixInput={null}
/>
```

**No animation (static A at t=1)**
```jsx
<LinearTransform initialT={1} animation={null} />
```

**Read-only display**
```jsx
<LinearTransform
  initialScenario="shearX"
  matrixInput={null}
  scenariosPanel={null}
  animation={null}
  layerChips={null}
/>
```

**Restricted scenarios + restricted layers**
```jsx
<LinearTransform
  visibleScenarios={['identity', 'rot45', 'shearX', 'projectX', 'zero']}
  enabledLayers={['grid','basis','square','labels']}
/>
```

**Override copy for one scenario**
```jsx
<LinearTransform
  explanationOverride={{
    byScenario: {
      identity: {
        title: 'Start here', tag: 'rank 2',
        body: 'Your custom intro...',
        insight: '...', watch: '...',
      }
    }
  }}
/>
```

**Add a new scenario**
```jsx
import LinearTransform, { SCENARIOS } from './LinearTransformations';

const my = { ...SCENARIOS, mine: {
  A: [[0.9, 0.3], [-0.2, 0.7]], group: 'full', label: 'My matrix',
  title: 'My matrix', tag: 'rank 2 \u00B7 custom',
  body: '...', insight: '...', watch: '...',
} };

<LinearTransform scenarios={my} initialScenario="mine" />
```

**Custom layout (headless)**
```jsx
<LinearTransform
  layout={({ transform, anim }) => (
    <div>
      <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
      <AnimationCard t={anim.t} playing={anim.playing}
        onPlay={anim.play} onPause={anim.cancel}
        onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
        onReset={anim.reset} onScrub={anim.setT} />
    </div>
  )}
/>
```

---

## Conventions

- Defaults for every prop; pages render `<LinearTransform />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- SVG `viewBox` is `0 0 600 600`; canvas DOM is 620&times;620 (SVG scales to fit).
- No randomness in `useState` initializers (SSR-safe).
- `lt5-` CSS prefix throughout (kept from prior versions to avoid churn).
- Scenario click auto-plays `t: 0 → 1` (via `useEffect` on `activeScenario`).
- `useAnimationState` cleans up raf on unmount and on every new `animateTo`.
- New version per iteration; never overwrite prior file.