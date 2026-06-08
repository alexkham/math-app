# KernelImage v3

A 2D linear-algebra visualizer for the **kernel** and **image** of a 2&times;2 matrix `A`. The user drags `v` on a *domain* canvas; `Av` is tracked on a *codomain* canvas. Layouts make kernel lines, image lines, swarms, trails, and a sweep playback all available.

---

## File layout

```
r2-visualizers/
  KernelImage.jsx          ← this component (standalone, ki- CSS prefix)
```

Self-contained: no imports from `2DCore.jsx`. Carries its own `Math2D`, `SVGRender`, hooks, CSS, and components.

---

## v3 layout (current)

```
┌──────────────────────────────────────────────────────────────────────┐
│  Lede                                                                │
├──────────────────┬─────────────────────┬─────────────────────────────┤
│ DOMAIN canvas    │ Layer chips         │ CODOMAIN canvas             │
│ Domain readout   │ Multiplication      │ Codomain readout            │
│ Left scenarios   │ Explanation         │ Right scenarios             │
│ (full + zero)    │ Properties          │ (rank1 only)                │
│                  │ Sweep playback      │                             │
└──────────────────┴─────────────────────┴─────────────────────────────┘
```

3-col grid `minmax(0,1fr) / minmax(380px,460px) / minmax(0,1fr)`, gap 14px, max-width 1340px.

The scenarios list is **split into two cards**, one under each canvas, partitioned by group (`leftScenarioGroups` / `rightScenarioGroups`). This keeps the tall middle column (multiplication + explanation + properties + sweep) from pushing scenarios below the fold.

### Per-column contents

- **Left col** — domain canvas, `v` readout, scenarios card (groups: `full`, `zero`)
- **Center col** — layer chips, multiplication block, explanation, properties, sweep playback
- **Right col** — codomain canvas, `Av` readout, scenarios card (group: `rank1`)

---

## Module sections

```
SECTION 1  Math2D            apply, det, rank, kerImg, fmt, fmtPair, rotMatrix
SECTION 2  SVGRender         grid, lineThroughOrigin, kerLayer, imgLayer,
                             swarm, trail, vArrow, avArrow, origin, labelOnLine
SECTION 3  Scenarios         SCENARIOS (10 presets), SCENARIO_GROUPS (3 groups),
                             LEFT_SCENARIO_GROUPS, RIGHT_SCENARIO_GROUPS,
                             ROTATE_ANGLES, DEFAULT_LAYERS, ALL_LAYER_DEFS,
                             SWARM_POINTS (seeded RNG, 140 pts)
SECTION 4  Hooks             useKernelImageState, useSweep
SECTION 5  Component CSS     ki-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    DomainCanvas, CodomainCanvas, LayerChips,
                             CanvasCaption, CanvasReadout, MultiplicationBlock,
                             ExplanationCard, PropertiesCard, ScenariosPanel,
                             SweepPlayback, CellInput
SECTION 7  Core + Wrapper    KernelImageCore (headless), KernelImage (default)
```

---

## Scenario groups

| group | tag label | scenarios |
|---|---|---|
| `full`  | rank 2 | `identity`, `rotate` (angular), `shearX`, `mix` |
| `rank1` | rank 1 | `projectX`, `projectDiag`, `project30`, `outer`, `nilpotent` |
| `zero`  | rank 0 | `zero` |

`rotate` is angular — has `isAngular: true` and uses a `<select>` for the rotation angle from `ROTATE_ANGLES = [30, 45, 60, 90, 120, 180, 270]`.

---

## Hooks

### `useKernelImageState(options)`

Returns `{ A, preset, rotateAngle, layers, setA, selectScenario, setRotateAngle, setLayers }`.

- `setA(next)` — also clears `preset` (sets it to `null` to mark as "custom").
- `selectScenario(key, { angle })` — sets `A` from preset; for `rotate`, optional `angle` override.

### `useSweep(A, options)`

Sweeps `v` around a circle and accumulates a `trail`. Resets cleanly when `A` changes. Options: `initialV`, `step` (default π/6), `duration` (ms, default 3600), `maxTrail` (default 120).

Returns `{ v, trail, angle, playing, play, pause, togglePlay, stepFwd, stepBack, reset, scrubDeg, setV, step }`.

- `setV(newV)` cancels sweep, clears trail, marks sweep as uninitialized so next play recomputes the orbit radius from current `|v|`.
- raf-driven; cleanup on unmount and on `A` change.

---

## Components

All have defaults; props are only for overrides.

| Component | Key props |
|---|---|
| `DomainCanvas` | `A, v, trail, layers, geom, swarmPoints, onVChange, draggable` |
| `CodomainCanvas` | `A, v, trail, layers, geom, swarmPoints` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CanvasCaption` | `kind, title, suffix, note` |
| `CanvasReadout` | `kind, label, value` |
| `MultiplicationBlock` | `A, v, onAChange, step` |
| `ExplanationCard` | `A, preset, rotateAngle, scenarios, override` |
| `PropertiesCard` | `A, v` |
| `ScenariosPanel` | `scenarios, groups, **groupKeys**, preset, rotateAngle, onSelect, visibleScenarios, badge` |
| `SweepPlayback` | `angle, playing, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub` |
| `CellInput` | `value, onCommit, step` |

`ScenariosPanel.groupKeys` — array of group keys to render (omit groups not in the list). This is what enables the v3 split: left card passes `groupKeys={['full','zero']}`, right card passes `groupKeys={['rank1']}`.

### Geometry

`DEFAULT_GEOM = { size: 460, scale: 40, gridR: 6 }`. The canvas SVG `viewBox` is `0 0 size size`; CSS sizes the canvas to its container (square via `aspect-ratio: 1/1`).

### `DomainCanvas` interaction

Pointer events on the SVG drive `onVChange`. Pointer capture used. `draggable={false}` disables interaction. `onVChange` undefined = read-only.

---

## Wrapper API

```jsx
<KernelImage
  // header
  lede                                 // JSX override of whole lede
  ledeCrumb={'...'}                    // HTML string (null hides)
  ledeBody={'...'}                     // HTML string (null hides)

  // core state seeds
  initialA={[[1,0],[0,1]]}
  initialPreset="identity"
  initialRotateAngle={45}
  initialLayers={DEFAULT_LAYERS}
  scenarios={SCENARIOS}                // full preset map override

  // sweep options
  initialV={[1.5, 1]}
  step={Math.PI/6}
  duration={3600}
  maxTrail={120}

  // slot overrides (undefined = default, JSX = replace)
  layerChips
  domainCanvas
  codomainCanvas
  multiplication
  explanation
  properties
  leftScenarios                        // entire left scenarios card
  rightScenarios                       // entire right scenarios card
  playback                             // sweep playback

  // atomization helpers
  visibleScenarios={['identity','projectX']}    // filter list
  enabledLayers={['grid','kernel','image']}     // filter chips
  explanationOverride={{ byPreset: { identity: {...} } }}
  leftScenarioGroups={['full','zero']}          // which groups appear left
  rightScenarioGroups={['rank1']}               // which groups appear right

  // layout escape hatch
  layout={(ctx) => <CustomLayout {...ctx} />}

  className style
/>
```

### Headless core

```jsx
<KernelImageCore initialA={...} initialPreset="identity" ...>
  {(ctx) => /* ctx = { A, preset, rotateAngle, layers, v, trail,
                       sweepAngle, sweepPlaying, setA, selectScenario,
                       setRotateAngle, setLayers, setV, sweep } */}
</KernelImageCore>
```

---

## Atomization recipes

**Single scenario, no scenarios panel**
```jsx
<KernelImage
  initialPreset="projectX"
  leftScenarios={null}
  rightScenarios={null}
/>
```

**Read-only display (no drag, no editing, no sweep)**
```jsx
<KernelImage
  initialPreset="rotate"
  initialRotateAngle={45}
  domainCanvas={<DomainCanvas A={A} v={v} layers={layers} draggable={false} />}
  multiplication={null}
  playback={null}
  leftScenarios={null}
  rightScenarios={null}
/>
```

**Override copy for one preset**
```jsx
<KernelImage
  explanationOverride={{
    byPreset: { identity: { title: 'I', tag: '...', body: 'Custom text' } }
  }}
/>
```

**Add a new scenario**
```jsx
import KernelImage, { SCENARIOS } from './KernelImage';

const my = { ...SCENARIOS, myProj: { A: () => [[0.8,0.4],[0.4,0.2]], group: 'rank1',
  label: 'My projection', title: '...', tag: '...', body: '...' } };

<KernelImage scenarios={my} initialPreset="myProj" />
```

**Custom layout (full escape hatch)**
```jsx
<KernelImage
  layout={(ctx) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <DomainCanvas {...ctx} onVChange={ctx.setV} />
      <CodomainCanvas A={ctx.A} v={ctx.v} layers={ctx.layers} />
    </div>
  )}
/>
```

---

## Conventions

- Self-contained: defaults for every prop; pages render `<KernelImage />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- All SVG inner content via `dangerouslySetInnerHTML` (SSR-safe).
- No `Math.random` / `Date.now()` in `useState` initializers; `SWARM_POINTS` is seeded RNG.
- `ki-` CSS prefix throughout; all custom props on `.ki-root`.
- Sweep state resets on `A` change (cancels raf, clears trail, marks uninitialized).
- New version per iteration in output dir; no file replaces an older one.