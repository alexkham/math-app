# SpanIndependence v1

A 2D visualizer for **span** and **linear independence** of two vectors. Drag `a` and `b`; the parallelogram they spawn fills with color when independent, collapses to a segment when dependent. A sweep animation rotates `b` around the origin at constant `|b|`, tracing the sine wave of `det = |a|&middot;|b|&middot;sin&phi;`.

---

## File layout

```
r2-visualizers/
  SpanIndependence.jsx          ← this component (standalone, sp- CSS prefix)
```

Self-contained: own `Math2D`, `SVGRender`, hooks, CSS, and components. No imports from `2DCore.jsx`. Mirrors `Projection.jsx` in overall structure but rolls all state (core + sweep) into a single hook.

---

## v1 layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  Lede                                                               │
├──────────────┬──────────────────────────┬───────────────────────────┤
│ Vector       │ Canvas (620×620, square) │ Explanation               │
│ preset       │ Readouts (a, b)          │ Layer chips               │
│ sidebar      │ Animation panel:         │ Vectors editor (a, b)     │
│ (3 groups)   │   progress + zero marks  │ Live card + status strip  │
│              │   + det(φ) sparkline     │                           │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

3-col grid `230px / 620px / minmax(360px, 1fr)`, gap 14px, max-width 1340px. Canvas full-width (no padding); geometry `{ size: 600, scale: 50, gridR: 6 }`.

### Per-column contents

- **Left** — vector presets, single column across 3 groups (independent / dependent / edge cases).
- **Center** — canvas, 2-up readouts (`a` | `b`), animation panel (header + progress bar with zero markers + transport controls + det sparkline).
- **Right** — explanation (title + body + insight), layer chips, vectors editor (two-row a/b cell inputs), live card (norms, angle, det, area, rank + status strip).

The animation rotates `b` around the origin at constant `|b|` while `a` stays fixed. A small dashed "anchor" badge appears next to `a`'s tip while sweeping. The trail (past `b` positions + faded past parallelograms) is rendered behind the current state.

---

## Math

Independence test on `[a b]`:

```
det(a, b) = a₀·b₁ − a₁·b₀
area(a, b) = |det(a, b)|
rank(a, b) = 0  if a = b = 0
             1  if det = 0 and not both zero
             2  if det ≠ 0
```

Equivalences (rank 2): det ≠ 0 ⇔ area > 0 ⇔ vectors point in different directions ⇔ span = &#8477;&sup2;.

Sweep: `b(φ) = |b₀|·(cos(θ₀ + φ), sin(θ₀ + φ))` where `θ₀` is the angle of `b` at sweep start and `|b₀|` the magnitude at sweep start. `det(φ)` traces a sine wave; zero-crossings occur whenever `a` and `b` are parallel or anti-parallel.

Edge cases:
- `a = 0` or `b = 0` → rank 1 (span is the nonzero one's line) — formally still dependent, since one is a trivial multiple of the other (zero scalar).
- `a = b = 0` → rank 0 (span = {0}).

---

## Module sections

```
SECTION 1  Math2D            det, rank2, area, angleBetween, spanDir, fmt, fmtPair
SECTION 2  SVGRender         grid, spanShade, spanLine, lattice, parallelogram,
                             sweepCircle, angleArc, trail, aArrow, aAnchor,
                             bArrow, origin, spanLabel
SECTION 3  Scenarios         SCENARIOS (9 presets), SCENARIO_GROUPS (3),
                             DEFAULT_LAYERS, ALL_LAYER_DEFS, DEFAULT_LEDE
SECTION 4  Hooks             useSpanState (owns core + sweep)
SECTION 5  Component CSS     sp-root scoped vars + layout + SVG primitives
SECTION 6  Sub-components    SpanCanvas, LayerChips, CanvasReadout, VectorsCard,
                             LiveCard, ExplanationCard, ScenariosPanel,
                             AnimationCard, DetSparkline, CellInput
SECTION 7  Core + Wrapper    SpanIndependenceCore (headless),
                             SpanIndependence (default export)
```

---

## Scenarios

| group | scenarios |
|---|---|
| `independent` | `orthogonal` (90°), `oblique60` (60°), `nearAligned15` (15°), `standardBasis` (e&#8321;, e&#8322;) |
| `dependent`   | `bTwoA` (parallel, b = 2a), `bNegA` (anti, b = &minus;1.5a), `sameLine` (det = 0) |
| `edge`        | `aZero` (a = 0), `bZero` (b = 0) |

Each carries `a, b, label, group, tag, title, exTag, body, insight`. The vectors `a` and `b` are stored directly on the scenario (not derived from a single matrix as in prior tools).

---

## Hooks

### `useSpanState(options)`

Single hook for both core state and sweep state, since `b` is manipulated by both user interaction and the animation.

Returns:
```
{
  // core state
  a, b, preset, layers,
  setA, setB, selectPreset, setLayers,
  // sweep state
  phi, trail, playing, sweepActive,
  play, pause, stepFwd, stepBack, resetSweep, scrubDeg,
  step,
}
```

Behavior:
- `setA(next)` / `setB(next)` — clear preset (custom mode) and reset sweep (cancel raf, clear trail, mark uninitialized).
- `selectPreset(key)` — copy `a` and `b` from the preset, reset sweep.
- `play()` — on first call (or after reset), captures `|b|` as orbit radius and `arg(b)` as base angle; sweeps `φ: 0 → 2π`. If `φ` is near 2π, restarts from 0.
- `stepFwd / stepBack` — snap to next/prev `step` multiple of φ (default π/6).
- `scrubDeg(deg)` — direct `φ` set without trail; cancels any running animation.
- `resetSweep()` — cancel raf, clear trail, mark uninitialized, `φ = 0`.
- `sweepActive` — `true` while playing OR while a trail exists. Used by the canvas to show the anchor badge and the sweep circle.

raf cleanup on unmount.

Options: `initialA, initialB, initialPreset, initialLayers, scenarios, step (default π/6), duration (default 3600 ms), maxTrail (default 120)`.

---

## Components

| Component | Key props |
|---|---|
| `SpanCanvas` | `a, b, trail, layers, geom, sweepActive, sweepRadius, onAChange, onBChange, draggable` |
| `LayerChips` | `layers, onChange, enabledLayers, layerDefs` |
| `CanvasReadout` | `kind, label, value` |
| `VectorsCard` | `a, b, onAChange, onBChange, step` |
| `LiveCard` | `a, b` |
| `ExplanationCard` | `preset, scenarios, override` |
| `ScenariosPanel` | `scenarios, groups, preset, onSelect, visibleScenarios, badge, title` |
| `AnimationCard` | `a, b, phi, playing, onPlay, onPause, onStepFwd, onStepBack, onReset, onScrub, title` |
| `DetSparkline` | `a, b, phi, zeros` |
| `CellInput` | `value, onCommit, step` |

### Canvas — two-handle dragging

Each tip has a transparent `r=14` hit circle rendered as React JSX (not in the innerHTML string), with `data-handle="a"` or `data-handle="b"`. The pointer handler reads `e.target.dataset.handle` to route the event to `onAChange` or `onBChange`. Setting either to `undefined` disables that handle; setting `draggable={false}` disables both.

### Layer keys

`DEFAULT_LAYERS`: `grid, parallelogram, lattice, trail, spanLine, labels` — all on by default.

- `grid` — fixed grid, not morphed
- `parallelogram` — `(0, a, a+b, b)` polygon; fill color by sign of det (blue positive, purple negative, gray collapsed)
- `lattice` — dots `c·a + d·b` for `c, d ∈ [−2, 2]`; collapses to a line when dependent
- `trail` — past `b` positions and faded past parallelograms; only visible during/after a sweep
- `spanLine` — dashed red line through origin, only rendered when rank = 1
- `labels` — `a` / `b` text labels + bottom-right "span = &#8477;&sup2;" / "span = line" / "span = {0}"

### Animation card

Three stacked sections:

1. **Header** — title + readout `φ = X°` + `next det = 0 at Y°` (next zero-crossing).
2. **Progress bar** — gradient fill (indigo → red → indigo) up to current φ; vertical red zero-marks at every φ where `det = 0` (recomputed per render based on current `a, b, phi`), each labeled with its angle in degrees.
3. **Transport** — reset / step back / play-pause / step fwd / scrub slider (0–360°) / numeric `φ` readout.
4. **Sparkline** — small SVG: actual `det(φ) = |a|·|b|·sin(initPhase + φ)` curve with positive (indigo) and negative (red) filled lobes, zero-crossings dotted, blue playhead at current φ. Numeric current `det` is displayed above, colored by sign.

The zero-marks and sparkline shape both **adapt to current `a` and `b`** — they reflect actual `det` zeros, not stylized ones. When dependent (det = 0 right now), the playhead sits on a zero mark.

### Live card

Reports `|a|`, `|b|`, `angle(a, b)` (acute, degrees), `det [a b]`, `area of ▱` (= |det|), `rank [a b]`. Below: a status strip colored by rank — green-indigo INDEPENDENT / red DEPENDENT / gray DEGENERATE — with the corresponding span statement.

---

## Wrapper API

```jsx
<SpanIndependence
  // header
  lede                                  // JSX override of whole lede (null hides)
  ledeCrumb={'...'}                     // HTML string for crumb (null hides)
  ledeBody={'...'}                      // HTML string for body  (null hides)

  // core state seeds
  initialA={[2, 1]}
  initialB={[-1, 2]}
  initialPreset="orthogonal"
  initialLayers={DEFAULT_LAYERS}
  scenarios={SCENARIOS}                 // full preset map override

  // animation tuning
  step={Math.PI / 6}                    // step size for φ stepFwd/stepBack
  duration={3600}                       // ms for full 2π sweep
  maxTrail={120}                        // max trail entries

  // slot overrides (undefined = default, JSX = replace, null = hide)
  layerChips
  canvas                                // main SpanCanvas
  explanation
  liveCard
  scenariosPanel
  vectorsCard
  animation                             // AnimationCard

  // atomization helpers
  visibleScenarios={['orthogonal', 'bTwoA']}   // filter preset list
  enabledLayers={['grid','parallelogram']}     // filter chips
  explanationOverride={{
    byPreset: { orthogonal: { title, exTag, body, insight } }
  }}

  // layout escape hatch
  layout={({ state }) => <CustomLayout state={state} />}

  className style
/>
```

### Headless core

```jsx
<SpanIndependenceCore initialA={[2,1]} initialB={[-1,2]} initialPreset="orthogonal" ...>
  {({ state }) => /* state = full useSpanState return value */}
</SpanIndependenceCore>
```

---

## Atomization recipes

**Single preset, no sidebar / no editor / no animation**
```jsx
<SpanIndependence
  initialPreset="orthogonal"
  scenariosPanel={null}
  vectorsCard={null}
  animation={null}
/>
```

**Read-only display (no drag, no editing)**
```jsx
<SpanIndependence
  initialA={[2, 1]} initialB={[-1, 2]}
  canvas={<SpanCanvas a={[2,1]} b={[-1,2]} layers={DEFAULT_LAYERS} draggable={false} />}
  vectorsCard={null}
  animation={null}
  scenariosPanel={null}
/>
```

**Hide the animation panel entirely**
```jsx
<SpanIndependence animation={null} />
```

**Comparison strip: dependent vs independent, side by side, no chrome**
```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
  <SpanIndependence
    initialPreset="orthogonal" scenariosPanel={null} vectorsCard={null}
    animation={null} liveCard={null} layerChips={null} ledeCrumb={null} ledeBody={null}
  />
  <SpanIndependence
    initialPreset="bTwoA" scenariosPanel={null} vectorsCard={null}
    animation={null} liveCard={null} layerChips={null} ledeCrumb={null} ledeBody={null}
  />
</div>
```

**Restricted scenarios + restricted layers**
```jsx
<SpanIndependence
  visibleScenarios={['orthogonal', 'standardBasis', 'bTwoA', 'sameLine']}
  enabledLayers={['grid', 'parallelogram', 'labels']}
/>
```

**Independent-only sandbox (no dependent / edge presets)**
```jsx
<SpanIndependence
  visibleScenarios={['orthogonal', 'oblique60', 'nearAligned15', 'standardBasis']}
  initialPreset="standardBasis"
/>
```

**Override copy for one preset**
```jsx
<SpanIndependence
  explanationOverride={{
    byPreset: {
      orthogonal: {
        title: 'Perpendicular pair',
        exTag: 'angle = 90&deg;',
        body: '<span class="sp-ac">a</span> and <span class="sp-bc">b</span> are perpendicular...',
        insight: 'When the dot product is zero, vectors are orthogonal.',
      }
    }
  }}
/>
```

**Add a new preset**
```jsx
import SpanIndependence, { SCENARIOS } from './SpanIndependence';

const my = { ...SCENARIOS, mine: {
  a: [1, 2], b: [3, 1], group: 'independent', label: 'My pair', tag: 'custom',
  title: 'My vectors', exTag: 'independent · custom',
  body: '...', insight: '...',
} };

<SpanIndependence scenarios={my} initialPreset="mine" />
```

**Drag-only (no sweep, no editor cells)**
```jsx
<SpanIndependence
  animation={null}
  vectorsCard={null}
/>
```

**Editor-only (no canvas drag)**
```jsx
<SpanIndependence
  canvas={
    <SpanCanvas
      a={[2,1]} b={[-1,2]} layers={DEFAULT_LAYERS}
      draggable={false}
    />
  }
/>
```
(`canvas` slot is replaced with a non-draggable copy; the `VectorsCard` cell inputs still drive `state.setA` / `state.setB` because they live outside the canvas slot — but note that since `state.a`/`state.b` updates won't reach the static canvas, this is mostly useful for the headless `layout` recipe below.)

**Custom layout (headless, two-canvas comparison)**
```jsx
<SpanIndependence
  layout={({ state }) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <SpanCanvas
        a={state.a} b={state.b} layers={state.layers}
        trail={state.trail} sweepActive={state.sweepActive}
        onAChange={state.setA} onBChange={state.setB}
      />
      <div>
        <VectorsCard a={state.a} b={state.b}
          onAChange={state.setA} onBChange={state.setB} />
        <LiveCard a={state.a} b={state.b} />
      </div>
    </div>
  )}
/>
```

**Lock `a`, only allow `b` to move**
```jsx
<SpanIndependence
  layout={({ state }) => (
    <SpanCanvas
      a={state.a} b={state.b}
      layers={state.layers} trail={state.trail}
      sweepActive={state.sweepActive}
      onBChange={state.setB}
      /* onAChange omitted → a's handle is non-interactive */
    />
  )}
/>
```

**Sweep playback embedded standalone**
```jsx
<SpanIndependence
  layout={({ state }) => (
    <div>
      <SpanCanvas
        a={state.a} b={state.b} layers={state.layers}
        trail={state.trail} sweepActive={state.sweepActive}
        onAChange={state.setA} onBChange={state.setB}
      />
      <AnimationCard
        a={state.a} b={state.b} phi={state.phi} playing={state.playing}
        onPlay={state.play} onPause={state.pause}
        onStepFwd={state.stepFwd} onStepBack={state.stepBack}
        onReset={state.resetSweep} onScrub={state.scrubDeg}
      />
    </div>
  )}
/>
```

---

## Slot vs `layout` — when to use which

- **Slot props** (`canvas`, `animation`, `scenariosPanel`, etc.) — replace one piece of the default 3-col layout while keeping the rest. Set to `null` to hide; set to JSX to override; leave `undefined` for the default.
- **`layout` prop** — opt out of the default layout entirely. You get the full state context (`{ state }`) and render whatever you want with the exported sub-components. Use this when slot overrides aren't enough — e.g., a multi-canvas comparison, a vertical stack, or embedding the canvas in a larger page layout.

When both are passed, `layout` wins; slot props are ignored.

---

## State context shape (from `state` in `layout` / `SpanIndependenceCore`)

```
{
  // core
  a:       [number, number],
  b:       [number, number],
  preset:  string | null,            // null = custom (user edited)
  layers:  { grid, parallelogram, lattice, trail, spanLine, labels },

  setA(next),                        // clears preset, resets sweep
  setB(next),                        // clears preset, resets sweep
  selectPreset(key),                 // copies a, b from scenarios[key]
  setLayers(next),

  // sweep
  phi:          number,              // radians, 0..2π
  trail:        [{ b: [num, num] }, ...],
  playing:      boolean,
  sweepActive:  boolean,             // playing OR trail present

  play(),                            // raf-animate φ → 2π
  pause(),
  stepFwd(),                         // snap φ to next step
  stepBack(),                        // snap φ to prev step
  resetSweep(),                      // cancel + clear trail + φ = 0
  scrubDeg(deg),                     // direct φ set (no trail entry)

  step: number,                      // φ step size in radians
}
```

---

## Conventions

- Defaults for every prop; pages render `<SpanIndependence />` and nothing else.
- All CSS in `COMPONENT_CSS` string, injected once via `<style dangerouslySetInnerHTML>`.
- All SVG inner content via `dangerouslySetInnerHTML` (SSR-safe).
- No randomness or time-dependent values in `useState` initializers.
- `sp-` CSS prefix throughout; all custom props on `.sp-root`.
- Preset selection resets the sweep (cancel raf, clear trail, `φ = 0`).
- Editing `a` or `b` via drag or the cell inputs also resets the sweep.
- New version per iteration in output dir; no file replaces an older one.