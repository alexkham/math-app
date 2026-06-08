# MatrixComposition v1

A 2D visualizer for **matrix composition**. Two matrices `A` and `B`; the user drags `v` and watches it travel through the pipeline `v → first·v → second·first·v` as the animation parameter `t` sweeps `0 → 1`. The same component renders in two layouts &mdash; **Trail** (single canvas with a breadcrumb path) and **Stages** (three canvases side-by-side, one per pipeline step) &mdash; switchable from a top-bar toggle.

---

## File layout

```
r2-visualizers/
  MatrixComposition.jsx          ← this component (standalone, mc- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`.

---

## v1 layout &mdash; two views, one component

The component renders one of two layouts based on `state.view`:

### Trail view (`view = 'trail'`)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├─────────────────────────────────────────────────────────────────────┤
│  Top bar: composition formula + [AB|BA] toggle + [Stages|Trail]    │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Scenarios    │ Canvas (620×620, square) │ Explanation               │
│ sidebar      │ Readouts: v₀ | Bv | ABv  │ Layer chips               │
│ (3 groups)   │ Animation panel          │ Matrices editor (A, B, AB)│
│              │   two-phase progress     │ Live card (AB vs BA)      │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px. Standard v7 layout.

### Stages view (`view = 'stages'`)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├─────────────────────────────────────────────────────────────────────┤
│  Top bar (same as Trail)                                            │
├──────────────┬──────────────────────────────────────────────────────┤
│ Scenarios    │ ┌──────┬─B→─┬──────┬─A→─┬──────┐                    │
│ sidebar      │ │ v    │    │ Bv   │    │ ABv  │                    │
│ (same as     │ └──────┴────┴──────┴────┴──────┘                    │
│  Trail)      │ Readouts (3-up)                                      │
│              │ Animation panel (same)                               │
│              │ ┌────────┬─────────────┬──────────┐                  │
│              │ │Matrices│ Explanation │ Live     │                  │
│              │ └────────┴─────────────┴──────────┘                  │
│              │ Layer chips                                          │
└──────────────┴──────────────────────────────────────────────────────┘
```

2-col grid `230px / 1fr`. The right column stacks: canvases row → animation → info row (3-col) → chips.

State (matrices, v, t, mode, preset) persists across the toggle. Only the layout changes.

---

## Math

Matrix product:
```
(AB)[i][j] = Σₖ A[i][k] · B[k][j]
A(Bv) = (AB)v   for every vector v
```

Two-phase composition animation (in AB mode, with first = B, second = A):
```
t ∈ [0, 0.5]:  M(t) = interp(2t, B)            — partial B, A not yet
t ∈ [0.5, 1]:  M(t) = interp(2(t−0.5), A) · B  — full B, partial A on top
```

`interp(s, M) = (1−s)·I + s·M`. Smoothly morphs I → M as s goes 0 → 1.

In BA mode, swap A and B: first = A, second = B, ending at `BA`.

Within each phase, applying `M(t)` to a fixed `v` traces a straight line in math coords. The full trail from v₀ through Bv to ABv is therefore a 2-segment polyline with a bend at Bv.

---

## Module sections

```
SECTION 1  Math2D            apply, mul, det, interp, rotMatrix, matEquals,
                             fmt, fmtPair
                             phaseMatrices(t, first, second)
SECTION 2  SVGRender         gridIdentity, morphedGroup (matrix transform wrapper),
                             unitSquare, origin, vectorArrow, ghost,
                             trailPath, altPath
                             svgMatrixTransform(M, geom) helper
SECTION 3  Scenarios         SCENARIOS (9 presets), SCENARIO_GROUPS (3),
                             DEFAULT_LAYERS, ALL_LAYER_DEFS, DEFAULT_LEDE
SECTION 4  Hooks             useCompositionState (owns everything,
                             including animation)
SECTION 5  Component CSS     mc-root scoped vars + both layouts + SVG primitives
SECTION 6  Sub-components    TopBar, TrailCanvas, StageCanvas, Chevron,
                             CanvasCaption, CanvasReadout, AnimationCard,
                             MatricesCard, LiveCard, ExplanationCard,
                             ScenariosPanel, LayerChips, CellInput
SECTION 7  Core + Wrapper    MatrixCompositionCore (headless),
                             MatrixComposition (default export)
```

---

## Scenarios

| group | scenarios |
|---|---|
| `commute`    | `twoRotations` (30°, 60°), `twoScales` (diag), `uniformScaleRotate` (×1.4, 45°) |
| `noncommute` | `shearRotate` (default), `twoPerpShears`, `projectRotate`, `reflectRotate` |
| `reveal`     | `twoReflections` (= rotation), `shearInverse` (= I) |

Each carries `A` and `B` as **factory functions** (return fresh matrices), plus `label, group, tag, title, exTag, body, insight`. Factory pattern allows scenarios to construct matrices from current parameters without storing them.

---

## Hooks

### `useCompositionState(options)`

Single hook owning **everything**: matrices, vector, animation, mode, view, preset, layers. Different from prior tools' split-hook pattern because matrix state and animation state are tightly coupled here (mode changes reset `t` and auto-play; preset changes auto-play).

Returns:
```
{
  // matrices + vector
  A, B, v, preset,
  setA(M),           // clears preset, resets t
  setB(M),           // clears preset, resets t
  setV(newV),        // does NOT clear preset; resets t
  selectPreset(key), // sets A, B from preset; resets t; auto-plays

  // mode / view
  mode,              // 'AB' | 'BA'
  view,              // 'trail' | 'stages'
  setMode(m),        // resets t to 0; auto-plays
  setView(v),        // pure visual; no state reset

  // layers
  layers, setLayers,

  // animation
  t, playing,
  play(), pause(),   // play resumes from current t; resets if t ≈ 1
  stepFwd(), stepBack(),
  setT(newT),        // direct scrub, cancels animation
  resetT(),          // t = 0, cancels animation
  animateTo(target, dur),
  step, duration,
}
```

Behavior summary:
- **Editing a matrix cell** (`setA` / `setB`) clears preset, resets `t = 0`, does **not** auto-play.
- **Selecting a preset** sets both matrices, resets `t = 0`, **auto-plays** to 1.
- **Dragging v** resets `t = 0` (keeps preset).
- **Changing mode** resets `t = 0`, **auto-plays** to 1.
- **Changing view** does nothing else &mdash; pure layout swap.

raf cleanup on unmount. Cubic easing on `animateTo`.

### `phaseMatrices(t, first, second)` &mdash; exported helper

Pure function. Returns `{ Mfirst, Msecond, Mcomposed, tFirst, tSecond }` where:
- `Mfirst = interp(min(2t, 1), first)` &mdash; saturates at t = 0.5
- `Msecond = interp(max(0, 2(t−0.5)), second)`
- `Mcomposed = Msecond · Mfirst`

Used by both `TrailCanvas` and `StageCanvas` for partial-state rendering. Exported for downstream reuse.

---

## Components

| Component | Key props |
|---|---|
| `TopBar` | `mode, view, onModeChange, onViewChange` |
| `TrailCanvas` | `A, B, v, t, mode, layers, geom, onVChange, draggable` |
| `StageCanvas` | `stage ('input'\|'inter'\|'final'), M, v, layers, geom, squareClass, onVChange, draggable` |
| `Chevron` | `matrix, step, kind ('a'\|'b')` |
| `CanvasCaption` | `kind, label, stageTag, altMode` |
| `CanvasReadout` | `kind, label, value, stageTag, altMode` |
| `AnimationCard` | `t, playing, mode, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub, title` |
| `MatricesCard` | `A, B, mode, onAChange, onBChange, step` |
| `LiveCard` | `A, B, v, mode` |
| `ExplanationCard` | `preset, scenarios, override` |
| `ScenariosPanel` | `scenarios, groups, preset, onSelect, visibleScenarios, badge, title` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CellInput` | `value, onCommit, step` |

### Canvas interaction

Both `TrailCanvas` and `StageCanvas` follow the established hit-circle pattern: a transparent `r=14` circle with `data-handle="v"` overlays the v arrow tip. Pointer events on the SVG route to `onVChange` only when the handle is the event target.

- **TrailCanvas**: the handle sits at the *current* `vNow = M_composed(t)·v`. Dragging it resets `t = 0` and sets `v` to the drag position. After the drop, `t = 0` so `vNow = v`. (The mode and matrices are unchanged.)
- **StageCanvas** (input stage only): handle sits at `v`. Only the input canvas is draggable; the other two are read-only computed views.

### Layer keys

`DEFAULT_LAYERS`: `grid, unitSquare, ghosts, primaryPath, altPath, labels` &mdash; all on.

- `grid` &mdash; morphed grid at current partial transform
- `unitSquare` &mdash; the morphed unit square (Trail view uses one; Stages view uses three, each color-coded)
- `ghosts` &mdash; v₀ / vMid / vEnd marker circles
- `primaryPath` &mdash; the 2-segment trail of v through the composition (Trail view only; Stages view has no path concept)
- `altPath` &mdash; dashed overlay of the opposite-order path (Trail view only)
- `labels` &mdash; vector labels and ghost text labels

### `TrailCanvas` rendering details

- Morphed grid via SVG `matrix()` transform: `svgMatrixTransform(M, geom)` returns the right `a b c d e f` to apply `M` (math coords) around the canvas center.
- Two-segment trail: solid from v₀ to vNow (firstColor) during phase 1, then solid from v₀ to vMid (firstColor) + solid from vMid to vNow (secondColor) during phase 2. The remainder to vEnd is dashed preview.
- Alt path is always drawn fully (v₀ → altMid → altEnd), dashed throughout, faded. Color-coded by which matrix moves which segment.
- Ghosts: v₀ (orange dashed), vMid (firstColor &mdash; becomes solid with inner dot when t ≥ 0.5), vEnd (secondColor &mdash; faint dashed until t ≈ 1, then solid).

### `StageCanvas` rendering details

- Three separate SVGs, each rendering its own state of grid + unit square + arrow.
- Stage 1 (`input`): identity transform, plain `v` arrow, draggable.
- Stage 2 (`inter`): partial first matrix `Mfirst` applied. Unit square tinted teal (AB mode) or purple (BA mode). Shows a small dashed ghost of v's identity-position with a connector to the transformed position.
- Stage 3 (`final`): full composed matrix `Mcomposed` applied. Unit square tinted indigo (the composition color). Same ghost-with-connector.

### Mode awareness (matters in many places)

| Element | AB mode | BA mode |
|---|---|---|
| Top-bar formula | `A(Bv) = (AB)v` | `B(Av) = (BA)v` |
| First matrix | B | A |
| Second matrix | A | B |
| Inter canvas square tint | teal | purple |
| Inter readout color | teal (Bv) | purple (Av) |
| Chevron 1 pill | B | A |
| Chevron 2 pill | A | B |
| Animation phase tags | "apply B" then "apply A" | "apply A" then "apply B" |
| Animation half-tick label | "M = B" | "M = A" |
| LiveCard highlighted matrix | AB | BA |

The component derives `first`, `second`, `firstLabel`, `secondLabel` from `mode` in the wrapper and passes them down.

### `LiveCard`

Always shows both AB and BA matrices. The one matching current `mode` is the "active" one (indigo, bold); the other is dimmed. Endpoint vectors `ABv` and `BAv` shown side by side. Distance `|ABv − BAv|` shown in red when non-zero. Status strip below: green if A and B commute (matrices equal within ε = 1e-3), red otherwise.

### `AnimationCard`

Two-phase progress bar with a half-tick at t = 0.5 (labeled `M = B` in AB mode, `M = A` in BA mode). Phase bands above the bar name the matrix being applied in each half. Fill gradient flips direction between modes (B→A vs A→B), matching the chevron sequence in Stages view.

---

## Wrapper API

```jsx
<MatrixComposition
  // header
  lede                                  // JSX override of whole lede
  ledeCrumb={'...'}                     // HTML string (null hides)
  ledeBody={'...'}                      // HTML string (null hides)

  // core state seeds
  initialA={[[1,0],[0,1]]}              // override scenario's A
  initialB={[[1,0],[0,1]]}              // override scenario's B
  initialV={[1.5, 1]}
  initialPreset="shearRotate"
  initialMode="AB"                      // or 'BA'
  initialView="trail"                   // or 'stages'
  initialLayers={DEFAULT_LAYERS}
  initialT={0}
  scenarios={SCENARIOS}                 // full map override

  // animation tuning
  duration={2400}                       // ms for t: 0→1
  step={0.1}                            // step size for stepFwd/Back

  // slot overrides (undefined = default, JSX = replace, null = hide)
  topBar                                // entire top bar
  canvas                                // Trail view's single canvas
  stagesCanvases                        // Stages view's whole 3-canvas row
  explanation
  liveCard
  scenariosPanel
  animation
  matricesCard
  layerChips

  // atomization helpers
  visibleScenarios={['shearRotate', 'twoRotations']}
  enabledLayers={['grid', 'unitSquare', 'primaryPath']}
  explanationOverride={{
    byPreset: { shearRotate: { title, exTag, body, insight } }
  }}

  // layout escape hatch
  layout={({ state }) => <CustomLayout state={state} />}

  className style
/>
```

### Headless core

```jsx
<MatrixCompositionCore initialPreset="shearRotate" ...>
  {({ state }) => /* state = full useCompositionState return value */}
</MatrixCompositionCore>
```

---

## Atomization recipes

**Lock to one view (hide the view toggle)**
```jsx
// Trail-only, no view toggle
<MatrixComposition
  initialView="trail"
  topBar={null}
/>
// or pass a custom top bar with only the mode toggle:
<MatrixComposition
  topBar={<TopBar mode={state.mode} view="trail" onModeChange={state.setMode} onViewChange={() => {}} />}
/>
```
(The second pattern needs the `layout` escape hatch to access `state`. For a static lock, the first works.)

**Single preset, no sidebar**
```jsx
<MatrixComposition
  initialPreset="twoRotations"
  scenariosPanel={null}
/>
```

**Read-only display (no drag, no editing)**
```jsx
<MatrixComposition
  initialPreset="shearRotate"
  initialT={1}
  matricesCard={null}
  animation={null}
  scenariosPanel={null}
  layerChips={null}
  topBar={null}
  canvas={<TrailCanvas A={A} B={B} v={[1.5, 1]} t={1} mode="AB" layers={DEFAULT_LAYERS} draggable={false} />}
/>
```

**Trail-only without alt-path overlay (the cleanest pedagogical canvas)**
```jsx
<MatrixComposition
  initialView="trail"
  enabledLayers={['grid', 'unitSquare', 'ghosts', 'primaryPath', 'labels']}
/>
```

**Stages-only, no animation panel (static snapshot at t = 1)**
```jsx
<MatrixComposition
  initialView="stages"
  initialT={1}
  animation={null}
/>
```

**Commute-only sandbox (no non-commutative or reveal presets)**
```jsx
<MatrixComposition
  visibleScenarios={['twoRotations', 'twoScales', 'uniformScaleRotate']}
  initialPreset="twoRotations"
/>
```

**Override copy for one preset**
```jsx
<MatrixComposition
  explanationOverride={{
    byPreset: {
      shearRotate: {
        title: 'Shear then rotate',
        exTag: 'classic non-commutative',
        body: '<span class="mc-bc">B</span> shears first...',
        insight: 'Order matters because shears and rotations live in different subgroups.',
      }
    }
  }}
/>
```

**Add a new preset**
```jsx
import MatrixComposition, { SCENARIOS, Math2D } from './MatrixComposition';

const my = { ...SCENARIOS, mine: {
  A: () => Math2D.rotMatrix(90),
  B: () => [[2, 0], [0, 0.5]],
  group: 'noncommute', label: 'Quarter turn × stretch', tag: 'custom',
  title: 'Quarter turn × stretch', exTag: 'non-commutative',
  body: 'A custom composition...',
  insight: '...',
} };

<MatrixComposition scenarios={my} initialPreset="mine" />
```

**Side-by-side Trail and Stages of the same state (full headless)**
```jsx
<MatrixComposition
  layout={({ state }) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <TrailCanvas
        A={state.A} B={state.B} v={state.v} t={state.t} mode={state.mode}
        layers={state.layers} onVChange={state.setV}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 1fr 50px 1fr' }}>
        <StageCanvas stage="input" M={[[1,0],[0,1]]} v={state.v} layers={state.layers}
          onVChange={state.setV} draggable />
        <Chevron matrix={state.mode === 'AB' ? 'B' : 'A'} step={1}
          kind={state.mode === 'AB' ? 'b' : 'a'} />
        <StageCanvas stage="inter"
          M={phaseMatrices(state.t, state.mode === 'AB' ? state.B : state.A,
                                    state.mode === 'AB' ? state.A : state.B).Mfirst}
          v={state.v} layers={state.layers}
          squareClass={state.mode === 'AB' ? 'mc-unit-square mc-b-square' : 'mc-unit-square mc-a-square'} />
        <Chevron matrix={state.mode === 'AB' ? 'A' : 'B'} step={2}
          kind={state.mode === 'AB' ? 'a' : 'b'} />
        <StageCanvas stage="final"
          M={phaseMatrices(state.t, state.mode === 'AB' ? state.B : state.A,
                                    state.mode === 'AB' ? state.A : state.B).Mcomposed}
          v={state.v} layers={state.layers}
          squareClass="mc-unit-square mc-final-square" />
      </div>
      <AnimationCard
        t={state.t} playing={state.playing} mode={state.mode}
        onPlay={state.play} onPause={state.pause}
        onStepFwd={state.stepFwd} onStepBack={state.stepBack}
        onReset={state.resetT} onScrub={state.setT}
      />
    </div>
  )}
/>
```

**Just the LiveCard, given matrices and v**
```jsx
<LiveCard A={[[0.707,-0.707],[0.707,0.707]]} B={[[1,0.5],[0,1]]} v={[1.5,1]} mode="AB" />
```

**Just the AnimationCard, headless**
```jsx
<MatrixCompositionCore>
  {({ state }) => (
    <AnimationCard
      t={state.t} playing={state.playing} mode={state.mode}
      onPlay={state.play} onPause={state.pause}
      onStepFwd={state.stepFwd} onStepBack={state.stepBack}
      onReset={state.resetT} onScrub={state.setT}
    />
  )}
</MatrixCompositionCore>
```

---

## Slot vs `layout` &mdash; when to use which

Trail and Stages have **structurally different layouts** (3-col vs 2-col-with-stacked-right). Slot overrides work *within* whichever view is active &mdash; they replace one element in place.

- Want to **hide the canvas in Trail view**? `canvas={null}` works.
- Want to **replace the canvas with a custom one** in Trail view? `canvas={<MyCanvas ... />}` works.
- Want **Trail view with the stages canvas embedded somewhere**? Use `layout` &mdash; you'd be reshaping the structure of the view itself.
- Want a layout that **combines elements from both views** (e.g., Trail's single canvas alongside Stages' three)? `layout` is the only path.

When `layout` is provided, it replaces the entire body (under the lede). Even the top bar is yours to render or omit. Slot props are ignored.

The view toggle remains semantically meaningful even in custom layouts &mdash; `state.view` is whatever the user (or your `initialView`) set it to. You can read it and branch your `layout` function accordingly.

---

## State context shape (from `layout` / `MatrixCompositionCore`)

```
{
  // matrices + vector
  A:       [[num, num], [num, num]],
  B:       [[num, num], [num, num]],
  v:       [num, num],
  preset:  string | null,       // null = custom (user edited matrix directly)

  setA(M),                       // clears preset, resets t
  setB(M),                       // clears preset, resets t
  setV(newV),                    // resets t, keeps preset
  selectPreset(key),             // sets A, B, resets t, auto-plays

  // mode / view
  mode:    'AB' | 'BA',
  view:    'trail' | 'stages',
  setMode(m),                    // resets t, auto-plays
  setView(v),                    // visual only

  // layers
  layers:  { grid, unitSquare, ghosts, primaryPath, altPath, labels },
  setLayers(next),

  // animation
  t:        number,              // 0..1
  playing:  boolean,
  play(), pause(),
  stepFwd(), stepBack(),
  setT(newT),
  resetT(),
  animateTo(target, dur),
  step:     number,
  duration: number,
}
```

---

## Conventions

- Defaults for every prop; pages render `<MatrixComposition />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- All SVG inner content via `dangerouslySetInnerHTML` (SSR-safe).
- No randomness or time-dependent values in `useState` initializers.
- `mc-` CSS prefix throughout; all custom props on `.mc-root`.
- Preset selection resets `t = 0` and **auto-plays** to 1.
- Mode change resets `t = 0` and **auto-plays** to 1.
- Matrix-cell edit resets `t = 0` (no auto-play; user is editing).
- v drag resets `t = 0` (no auto-play).
- View toggle has no side effects on state.
- raf cleanup on unmount.
- New version per iteration in output dir; no file replaces an older one.