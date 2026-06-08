# Projection v1

A 2D visualizer for **orthogonal projection** onto a line through the origin. Drag `v`; the foot of the perpendicular on the line is `Pv`.

---

## File layout

```
r2-visualizers/
  Projection.jsx          ← this component (standalone, pr- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`.

---

## v1 layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Line preset  │ Canvas (620×620, square) │ Explanation               │
│ sidebar      │ Readouts (v, Pv)         │ Layer chips               │
│ (3 groups)   │ Animation panel (I → P)  │ Matrix P (auto) + θ slider│
│              │                          │ Live card + idempotence   │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px. Canvas full-width (no padding); geometry `{ size: 600, scale: 50, gridR: 6 }`.

### Per-column contents

- **Left** — line presets, single column across 3 groups (axes / diagonals / custom angle).
- **Center** — canvas, 2-up readouts (`v` | `Pv`), animation panel.
- **Right** — explanation, layer chips, projection-matrix card (auto-computed P + θ slider), live card (norms, distance, angle, det/trace, idempotence check).

The animation panel morphs `M(t) = (1 − t)I + tP` applied to the grid + unit square. `v` and `Pv` are drawn independently of `t` so the geometry stays meaningful. Selecting a preset auto-replays `t: 0 → 1`.

---

## Math

The line is described by a single angle `θ`. Unit direction `u = (cos θ, sin θ)`. Projection matrix:

```
P = u uᵀ = [[cos²θ,  cosθ sinθ],
            [cosθ sinθ, sin²θ ]]
```

Properties (invariant under θ): `det P = 0`, `trace P = 1`, `P² = P`, `Pᵀ = P`.

`ker P` is the perpendicular line, direction `u⊥ = (−sin θ, cos θ)`. `im P` is the line itself.

---

## Module sections

```
SECTION 1  Math2D            apply, det, trace, interp,
                             projMatrix(θ), unitFromAngle(θ), fmt, fmtPair
SECTION 2  SVGRender         grid, lineThroughOrigin, labelOnLine,
                             unitSquare, dropline (with right-angle marker),
                             vArrow, pvArrow, origin
SECTION 3  Scenarios         SCENARIOS (7 presets), SCENARIO_GROUPS (3),
                             DEFAULT_LAYERS, ALL_LAYER_DEFS, DEFAULT_LEDE
SECTION 4  Hooks             useProjectionState, useAnimationState
SECTION 5  Component CSS     pr-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    ProjectionCanvas, LayerChips, CanvasReadout,
                             AnimationCard, ProjectionMatrixCard,
                             ExplanationCard, LiveCard, ScenariosPanel
SECTION 7  Core + Wrapper    ProjectionCore (headless),
                             Projection (default export)
```

---

## Scenarios

| group | scenarios |
|---|---|
| `axes`      | `xAxis` (0°), `yAxis` (90°) |
| `diagonals` | `diag` (45°, y=x), `antiDiag` (135°, y=−x) |
| `custom`    | `deg30`, `deg60`, `deg120` |

Each carries `theta, label, group, tag, title, exTag, body, insight`.

---

## Hooks

### `useProjectionState(options)`

Returns `{ theta, preset, v, layers, setTheta, selectPreset, setV, setLayers }`.

- `setTheta(rad)` clears `preset` (custom mode).
- `selectPreset(key)` sets `theta` from preset.

### `useAnimationState(options)`

Same shape as the LinearTransformations hook. Default `initialT = 1` (lands on full projection by default; reset/play replays `0 → 1`).

Returns `{ t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT }`.

---

## Components

| Component | Key props |
|---|---|
| `ProjectionCanvas` | `theta, v, t, layers, geom, onVChange, draggable` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CanvasReadout` | `kind, label, value` |
| `AnimationCard` | `t, playing, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub, title` |
| `ProjectionMatrixCard` | `theta, onThetaChange` |
| `ExplanationCard` | `preset, scenarios, override` |
| `LiveCard` | `theta, v` |
| `ScenariosPanel` | `scenarios, groups, preset, onSelect, visibleScenarios, badge, title` |

### Canvas

Per-handle hit pattern: a transparent `r=14` circle with `data-handle="v"` overlays the `v` tip; pointer events fire only on that handle. `onVChange` undefined or `draggable={false}` = read-only.

Layer keys: `grid, line, kernel, square, dropline, labels`. `dropline` draws the perpendicular from `v` to `Pv` with a right-angle marker; suppressed when `v ≈ Pv`. `square` shows the unit square morphed by `M(t)` — collapses to a segment at `t = 1`.

### θ slider

`ProjectionMatrixCard` exposes an integer-degree slider `[0, 180]` driving `theta` via `onThetaChange`. Range is `[0, 180)` because a line has no orientation: `θ` and `θ + π` describe the same line and the same `P`.

### Live card

Reports `|v|`, `|Pv|`, `|v − Pv|` (kernel-side residual), `angle(v, line)` (acute, in degrees), `det P` (always 0), `trace P` (always 1). Idempotence check row is always shown — `P²v = Pv` holds by construction.

---

## Wrapper API

```jsx
<Projection
  // header
  lede ledeCrumb ledeBody

  // core state seeds
  initialTheta={Math.PI / 4}
  initialPreset="diag"
  initialV={[1.5, 1.5]}
  initialLayers={DEFAULT_LAYERS}
  scenarios={SCENARIOS}

  // animation
  step={0.1} duration={1600} initialT={1}

  // slot overrides
  layerChips canvas explanation liveCard scenariosPanel animation matrixCard

  // atomization
  visibleScenarios={['xAxis', 'diag']}
  enabledLayers={['grid','line','kernel']}
  explanationOverride={{ byPreset: { diag: {...} } }}

  // layout escape hatch
  layout={({ state, anim }) => <CustomLayout ... />}

  className style
/>
```

### Headless core

```jsx
<ProjectionCore initialPreset="diag" ...>
  {({ state, anim }) => /* state = { theta, preset, v, layers, setTheta,
                                     selectPreset, setV, setLayers } */}
</ProjectionCore>
```

---

## Atomization recipes

**Single preset, no sidebar**
```jsx
<Projection initialPreset="diag" scenariosPanel={null} matrixCard={null} />
```

**Read-only display**
```jsx
<Projection
  initialPreset="diag"
  canvas={<ProjectionCanvas theta={Math.PI/4} v={v} layers={layers} draggable={false} />}
  matrixCard={null}
  animation={null}
  scenariosPanel={null}
/>
```

**Hide morph animation (always at t = 1)**
```jsx
<Projection initialT={1} animation={null} />
```

**Custom angle only (no presets)**
```jsx
<Projection scenariosPanel={null} initialTheta={Math.PI / 3} />
```

**Custom layout (headless)**
```jsx
<Projection
  layout={({ state, anim }) => (
    <div>
      <ProjectionCanvas theta={state.theta} v={state.v} t={anim.t}
        layers={state.layers} onVChange={state.setV} />
      <ProjectionMatrixCard theta={state.theta} onThetaChange={state.setTheta} />
    </div>
  )}
/>
```

---

## Conventions

- Defaults for every prop; pages render `<Projection />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- SVG inner via `dangerouslySetInnerHTML` (SSR-safe).
- No randomness in `useState` initializers.
- `pr-` CSS prefix; custom props on `.pr-root`.
- Preset selection auto-replays `t: 0 → 1`.
- New version per iteration; never overwrite prior file.