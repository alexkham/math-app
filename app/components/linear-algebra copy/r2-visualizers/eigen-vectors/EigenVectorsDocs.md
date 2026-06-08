# EigenVectors v2

A 2D visualizer for **eigenvectors and eigenvalues** of a 2&times;2 matrix `A`. Drag `v`; watch `Av`. When the two align, `v` is an eigenvector and the alignment factor is &lambda;.

---

## File layout

```
r2-visualizers/
  EigenVectors.jsx          ← this component (standalone, ev- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`.

---

## v2 layout (current)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Scenarios    │ Canvas (620×620, square) │ Explanation               │
│ sidebar      │ Readouts (v, Av)         │ Layer chips               │
│ (4 groups,   │ Animation panel          │ Live card                 │
│ single col)  │                          │ Eigen-structure card      │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px.

**Variation from base v7:** canvas has **no side padding** (canvas-wrap is `padding: 0`) and uses the full 620 col width — i.e. canvas is 620&times;620 instead of the base v7's 532&times;532 (44px side padding). Geometry: `{ size: 600, scale: 50, gridR: 6 }`, SVG scales up slightly into the 620px container.

### Per-column contents

- **Left (sidebar)** — scenarios card, single-column stack across 4 groups
- **Center (canvas col)** — canvas, then 2-up readouts (`v` | `Av`), then animation panel
- **Right (info col)** — explanation, layer chips, live card, eigen-structure card

The animation panel is a **placeholder** — it has working `useAnimState` (step/progress/play/reset/prev/next), but no eigen-specific tick loop is wired yet. Hook up actual sweep behavior when needed; UI is already in place.

---

## Module sections

```
SECTION 1  Math2D            apply, det, trace, fmt, fmtPair,
                             eigenvalues, eigenvector, eigenStructure,
                             alignment, snapToEigen
SECTION 2  SVGRender         grid, lineThroughOrigin, origin,
                             eigLines, dirLines, angleArc, vectors
SECTION 3  Scenarios         SCENARIOS (11 presets), SCENARIO_GROUPS (4 groups),
                             DEFAULT_LAYERS, ALL_LAYER_DEFS, DEFAULT_ANIM_STEPS,
                             DEFAULT_LEDE
SECTION 4  Hooks             useEigenState, useAnimState
SECTION 5  Component CSS     ev-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    EigenCanvas, LayerChips, CanvasReadout,
                             AnimationCard, LiveCard, EigenStructureCard,
                             ExplanationCard, ScenariosPanel
SECTION 7  Core + Wrapper    EigenVectorsCore (headless), EigenVectors (default)
```

---

## Scenario groups

| group | tag | scenarios |
|---|---|---|
| `distinct`  | 2 directions | `diag`, `symmetric`, `reflect`, `triUpper` |
| `repeated`  | every direction (isotropic) | `identity`, `scale2` |
| `defective` | 1 direction | `shear`, `defective2` |
| `complex`   | no real | `rotate30`, `rotate90`, `spiral` |

`eigenStructure(A)` classifies into the same 4 kinds: `distinct | defective | isotropic | complex`. The eigen-structure card and the snap button branch on this.

---

## Hooks

### `useEigenState(options)`

Returns `{ A, preset, layers, v, setA, selectPreset, setLayers, setV, snapV }`.

- `setA(next)` clears `preset` (custom mode).
- `selectPreset(key)` copies preset matrix into `A`.
- `snapV()` snaps `v` to nearest eigendirection via `Math2D.snapToEigen` (no-op for complex case).

### `useAnimState(options)`

Generic placeholder anim state, not tied to any specific tick logic.

Returns `{ step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next }`.

Replace `progress` driver later with a real loop (e.g. sweep `v` around, snap to each eigendirection in turn — matches `DEFAULT_ANIM_STEPS = [Start, Sweep, Snap λ₁, Snap λ₂]`).

---

## Components

| Component | Key props |
|---|---|
| `EigenCanvas` | `A, v, layers, geom, onVChange, draggable` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CanvasReadout` | `kind, label, value` |
| `AnimationCard` | `steps, step, progress, isPlaying, onStep, onPlayToggle, onPrev, onNext, onReset, duration` |
| `LiveCard` | `A, v` |
| `EigenStructureCard` | `A, onSnap` |
| `ExplanationCard` | `preset, scenarios, override` |
| `ScenariosPanel` | `scenarios, groups, preset, onSelect, visibleScenarios, badge` |

### Geometry

`DEFAULT_GEOM = { size: 600, scale: 50, gridR: 6 }` — 12&times;12 visible tile grid in a 600 viewBox, rendered into a 620px CSS container.

### `EigenCanvas` interaction

Per-handle hit area: the `v` tip is a dedicated `<circle class="ev-tip-hit" data-handle="v">` overlaid on the actual vector head. Pointer events dispatch only when `data-handle === 'v'`. `onVChange` undefined or `draggable={false}` makes the canvas read-only.

### Visual alignment cue

`Math2D.alignment(A, v)` returns `{ aligned, lambda, angleDeg, ... }`. When `aligned === true` (angle &lt; 4&deg;), the `v` and `Av` arrows recolor to amber (`--align: #d97706`) and the live card switches to an "eigenvector" state showing &lambda;.

---

## Wrapper API

```jsx
<EigenVectors
  // header
  lede                                 // JSX override
  ledeCrumb={'...'} ledeBody={'...'}   // HTML strings (null hides)

  // core state seeds
  initialA={[[2,0],[0,0.5]]}
  initialPreset="diag"
  initialLayers={DEFAULT_LAYERS}
  initialV={[2, 1]}
  scenarios={SCENARIOS}

  // animation
  animSteps={DEFAULT_ANIM_STEPS}

  // slot overrides
  layerChips canvas explanation liveCard eigenStructure scenariosPanel animation

  // atomization
  visibleScenarios={['diag', 'symmetric']}
  enabledLayers={['grid','eigLines','labels']}
  explanationOverride={{ byPreset: { diag: {...} } }}

  // layout escape hatch
  layout={(ctx) => <CustomLayout {...ctx} />}

  className style
/>
```

### Headless core

```jsx
<EigenVectorsCore initialA={...} initialPreset="diag" ...>
  {(ctx) => /* ctx = { A, preset, layers, v, setA, selectPreset, setLayers, setV, snapV } */}
</EigenVectorsCore>
```

Note: `useAnimState` is instantiated inside the default wrapper, not inside `EigenVectorsCore`. To use the headless core with animation, instantiate `useAnimState()` yourself in the render-prop body.

---

## Atomization recipes

**Single scenario, no sidebar**
```jsx
<EigenVectors initialPreset="symmetric" scenariosPanel={null} />
```

**Read-only display**
```jsx
<EigenVectors
  initialPreset="reflect"
  canvas={<EigenCanvas A={A} v={v} layers={layers} draggable={false} />}
  scenariosPanel={null}
  animation={null}
  layerChips={null}
/>
```

**Hide animation panel**
```jsx
<EigenVectors animation={null} />
```

**Subset of scenarios**
```jsx
<EigenVectors visibleScenarios={['diag', 'symmetric', 'shear', 'rotate30']} />
```

**Custom anim steps**
```jsx
<EigenVectors animSteps={[
  { num: '01', label: 'Idle' },
  { num: '02', label: 'Rotate' },
  { num: '03', label: 'Lock' },
]} />
```

**Custom layout**
```jsx
<EigenVectors
  layout={(ctx) => (
    <div>
      <EigenCanvas A={ctx.A} v={ctx.v} layers={ctx.layers} onVChange={ctx.setV} />
      <LiveCard A={ctx.A} v={ctx.v} />
    </div>
  )}
/>
```

---

## Conventions

- Defaults everywhere; pages render `<EigenVectors />` and nothing else.
- CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- SVG inner via `dangerouslySetInnerHTML` (SSR-safe).
- No randomness in `useState` initializers.
- `ev-` CSS prefix; custom props on `.ev-root`.
- Snap button auto-disables for complex eigenvalues (label changes to "No real eigenvectors").
- New version per iteration; never overwrite prior file.