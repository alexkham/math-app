# Reflection v1

A 2D visualizer for **orthogonal reflection** across a line through the origin. Drag `v`; `Rv` is the mirror image — same distance from the line, opposite side.

---

## File layout

```
r2-visualizers/
  Reflection.jsx          ← this component (standalone, rf- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`. Mirrors `Projection.jsx` in structure.

---

## v1 layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Mirror       │ Canvas (620×620, square) │ Explanation               │
│ preset       │ Readouts (v, Rv)         │ Layer chips               │
│ sidebar      │ Animation panel (I → R,  │ Matrix R (auto) + θ slider│
│ (3 groups)   │   half-tick at M = P)    │ Live card + involution    │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px. Canvas full-width (no padding); geometry `{ size: 600, scale: 50, gridR: 6 }`.

### Per-column contents

- **Left** — mirror presets, single column across 3 groups (axes / diagonals / custom angle).
- **Center** — canvas, 2-up readouts (`v` | `Rv`), animation panel with a half-tick at `t = 0.5` (where `M = P`).
- **Right** — explanation, layer chips, reflection-matrix card (auto-computed `R` + θ slider), live card (norms, distance, angle, det/trace, involution check).

The animation panel morphs `M(t) = (1 − t)I + tR` applied to the grid + unit square. Because `R = 2P − I`, the halfway point `M(0.5) = P` is exactly the projection — the half-tick on the progress bar marks this. Selecting a preset auto-replays `t: 0 → 1`.

---

## Math

The mirror is described by a single angle `θ`. Unit direction `u = (cos θ, sin θ)`. Reflection matrix:

```
R = 2 u uᵀ − I = [[cos 2θ,  sin 2θ],
                  [sin 2θ, −cos 2θ]]
```

Properties (invariant under θ): `det R = −1`, `trace R = 0`, `R² = I` (involution), `Rᵀ = R`.

Decomposition: `R = 2P − I` where `P = u uᵀ` is the projection onto the same line. Geometrically: the foot of the perpendicular from `v` to the mirror lies at exactly the midpoint of `v` and `Rv`, and equals `Pv`.

Eigenstructure: `λ = +1` along the mirror direction `u` (fixed), `λ = −1` along the perpendicular `u⊥` (flipped). The two eigendirections are always perpendicular.

---

## Module sections

```
SECTION 1  Math2D            apply, det, trace, interp,
                             reflMatrix(θ), projMatrix(θ), unitFromAngle(θ),
                             fmt, fmtPair
SECTION 2  SVGRender         grid, mirrorLine, labelOnLine, unitSquare,
                             perpThrough (v → mid → Rv with right-angle marker),
                             midpoint, vArrow, rvArrow, origin
SECTION 3  Scenarios         SCENARIOS (7 presets), SCENARIO_GROUPS (3),
                             DEFAULT_LAYERS, ALL_LAYER_DEFS, DEFAULT_LEDE
SECTION 4  Hooks             useReflectionState, useAnimationState
SECTION 5  Component CSS     rf-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    ReflectionCanvas, LayerChips, CanvasReadout,
                             AnimationCard (with half-tick), ReflectionMatrixCard,
                             ExplanationCard, LiveCard, ScenariosPanel
SECTION 7  Core + Wrapper    ReflectionCore (headless),
                             Reflection (default export)
```

---

## Scenarios

| group | scenarios |
|---|---|
| `axes`      | `xAxis` (0°), `yAxis` (90°) |
| `diagonals` | `diag` (45°, y=x), `antiDiag` (135°, y=−x) |
| `custom`    | `deg30`, `deg60`, `deg120` |

Each carries `theta, label, group, tag, title, exTag, body, insight`. Insights mention `R² = I`, composition of two reflections = rotation by `2α`, and the `R = 2P − I` identity.

---

## Hooks

### `useReflectionState(options)`

Returns `{ theta, preset, v, layers, setTheta, selectPreset, setV, setLayers }`.

- `setTheta(rad)` clears `preset` (custom mode).
- `selectPreset(key)` sets `theta` from preset.

### `useAnimationState(options)`

Same shape as the Projection / LinearTransformations hook. Default `initialT = 1` (lands on full reflection; reset/play replays `0 → 1`).

Returns `{ t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT }`.

---

## Components

| Component | Key props |
|---|---|
| `ReflectionCanvas` | `theta, v, t, layers, geom, onVChange, draggable` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CanvasReadout` | `kind, label, value` |
| `AnimationCard` | `t, playing, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub, title` |
| `ReflectionMatrixCard` | `theta, onThetaChange` |
| `ExplanationCard` | `preset, scenarios, override` |
| `LiveCard` | `theta, v` |
| `ScenariosPanel` | `scenarios, groups, preset, onSelect, visibleScenarios, badge, title` |

### Canvas

Per-handle hit pattern: a transparent `r=14` circle with `data-handle="v"` overlays the `v` tip. `onVChange` undefined or `draggable={false}` = read-only.

Layer keys: `grid, mirror, perp, midpoint, square, labels`.
- `perp` — single dashed line from `v` through `Pv` to `Rv`, with a right-angle tick drawn at the midpoint (= where the perpendicular meets the mirror).
- `midpoint` — small purple dot at `Pv`, optionally labeled.
- `square` — unit square morphed by `M(t)`. Fill color flips from blue (positive det) to purple (negative det) as the morph crosses `det = 0` mid-animation.

### Animation card

The progress-bar gradient runs `v-color → mid-color (at 50%) → rv-color` to reinforce the midpoint-equals-projection idea. A vertical tick is rendered at `t = 0.5`. When `t` lands exactly on `0.5` the header gains a small `M = P` annotation.

### θ slider

`ReflectionMatrixCard` exposes an integer-degree slider `[0, 180]`. Range is `[0, 180)` because a mirror line has no orientation: `θ` and `θ + π` describe the same line and the same `R`.

### Live card

Reports `|v|`, `|Rv|` (always = `|v|`), `|v − Rv|` (twice the perpendicular distance to the mirror), `angle(v, mirror)` (acute, in degrees), `det R = −1` (purple/flip color), `trace R = 0`. Involution check row is always shown — `R²v = v` holds by construction.

---

## Wrapper API

```jsx
<Reflection
  // header
  lede ledeCrumb ledeBody

  // core state seeds
  initialTheta={Math.PI / 4}
  initialPreset="diag"
  initialV={[1.5, 2]}
  initialLayers={DEFAULT_LAYERS}
  scenarios={SCENARIOS}

  // animation
  step={0.1} duration={1600} initialT={1}

  // slot overrides
  layerChips canvas explanation liveCard scenariosPanel animation matrixCard

  // atomization
  visibleScenarios={['xAxis', 'diag']}
  enabledLayers={['grid','mirror','midpoint']}
  explanationOverride={{ byPreset: { diag: {...} } }}

  // layout escape hatch
  layout={({ state, anim }) => <CustomLayout ... />}

  className style
/>
```

### Headless core

```jsx
<ReflectionCore initialPreset="diag" ...>
  {({ state, anim }) => /* state = { theta, preset, v, layers, setTheta,
                                     selectPreset, setV, setLayers } */}
</ReflectionCore>
```

---

## Atomization recipes

**Single preset, no sidebar**
```jsx
<Reflection initialPreset="diag" scenariosPanel={null} matrixCard={null} />
```

**Read-only display**
```jsx
<Reflection
  initialPreset="diag"
  canvas={<ReflectionCanvas theta={Math.PI/4} v={v} layers={layers} draggable={false} />}
  matrixCard={null}
  animation={null}
  scenariosPanel={null}
/>
```

**Hide midpoint label / hide perp**
```jsx
<Reflection enabledLayers={['grid','mirror','square','labels']} />
```

**Custom angle only (no presets)**
```jsx
<Reflection scenariosPanel={null} initialTheta={Math.PI / 3} />
```

**Custom layout (headless)**
```jsx
<Reflection
  layout={({ state, anim }) => (
    <div>
      <ReflectionCanvas theta={state.theta} v={state.v} t={anim.t}
        layers={state.layers} onVChange={state.setV} />
      <ReflectionMatrixCard theta={state.theta} onThetaChange={state.setTheta} />
    </div>
  )}
/>
```

---

## Conventions

- Defaults for every prop; pages render `<Reflection />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- SVG inner via `dangerouslySetInnerHTML` (SSR-safe).
- No randomness in `useState` initializers.
- `rf-` CSS prefix; custom props on `.rf-root`.
- Preset selection auto-replays `t: 0 → 1`.
- New version per iteration; never overwrite prior file.