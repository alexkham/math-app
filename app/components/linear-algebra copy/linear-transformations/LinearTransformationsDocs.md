# LinearTransform — component documentation

Interactive 2×2 linear-transformation visualizer for React / Next.js. Single-file component (`LinearTransform-v4-2.jsx`).

---

## Table of contents

1. [Quick start](#quick-start)
2. [Architecture overview](#architecture-overview)
3. [Exports](#exports)
4. [Usage modes](#usage-modes)
5. [`LinearTransform` props (full reference)](#lineartransform-props-full-reference)
6. [Sub-component reference](#sub-component-reference)
7. [Hook reference](#hook-reference)
8. [Helper reference](#helper-reference)
9. [Customization recipes](#customization-recipes)
10. [SSR / Next.js notes](#ssr--nextjs-notes)
11. [Known limitations](#known-limitations)

---

## Quick start

```jsx
import LinearTransform from './LinearTransform-v4-2.jsx';

export default function Page() {
  return <LinearTransform />;
}
```

That's it. Renders the full default experience: canvas + animation controls + matrix input + presets + layer toggles + case-aware explanation panel, with a header. No props required.

---

## Architecture overview

```
LinearTransform-v4-2.jsx          (single file)
│
├── Section 1  Math2D             pure math (det, eigen, classify, ...)
├── Section 2  SVGRender          SVG string builders + style CSS
├── Section 3  PRESETS, PRESET_META, DEFAULT_PRESET_KEYS
├── Section 4  defaultExplanations (byPreset, byCharacter, fallback)
├── Section 5  useTransformState, useAnimationState
├── Section 6  COMPONENT_CSS      (one injection covers all sub-components)
├── Section 7  Sub-components     atomic, all accept defaults
│             ├─ VisualizerCanvas
│             ├─ MatrixInput      (with CellInput for safe mid-edit blanks)
│             ├─ PresetsGrid
│             ├─ LayersPanel
│             ├─ AnimationControls
│             └─ ExplanationsPanel
└── Section 8  LinearTransformCore (logic, render-prop)
              LinearTransform     (default UI wrapper, default export)
```

**Two-layer pattern:**
- `LinearTransformCore` owns state via the two hooks and the preset→animate effect. Hands `{ transform, anim }` down through a render-prop. No UI.
- `LinearTransform` (default export) renders the 3-column layout. Every visible piece is replaceable via a slot prop. Falls back to defaults when nothing is passed.

**State split (intentional):**
- `useTransformState` — slow-changing: matrix `A`, `activePreset`, `layers`. Editing `A` directly clears `activePreset`.
- `useAnimationState` — fast-changing: `t`, `playing`, plus actions (`animateTo`, `cancel`, `reset`, `stepFwd`, `stepBack`, `play`, `setT`).

Animation re-renders don't cascade into the matrix/preset/layer panels — they only subscribe to transform state.

---

## Exports

```jsx
import LinearTransform, {
  // Core (logic-only, render-prop)
  LinearTransformCore,

  // Sub-components (atomic use)
  VisualizerCanvas,
  MatrixInput,
  PresetsGrid,
  LayersPanel,
  AnimationControls,
  ExplanationsPanel,

  // Hooks (compose your own UI)
  useTransformState,
  useAnimationState,

  // Helpers (libraries / customization material)
  Math2D,
  SVGRender,
  PRESETS,
  PRESET_META,
  defaultExplanations,
} from './LinearTransform-v4-2.jsx';
```

`LinearTransform` is the default export. Everything else is a named export.

---

## Usage modes

### 1. Default — render everything

```jsx
<LinearTransform />
```

### 2. Slot override — replace one piece, keep the rest

Any slot prop accepts JSX (replaces the default) or `null` (hides it). `undefined` means "use default".

```jsx
<LinearTransform
  explanation={<MyCustomExplanationPanel A={A} />}
/>
```

```jsx
{/* hide the layers card entirely */}
<LinearTransform layersPanel={null} />
```

### 3. Atomization helpers — keep default UI, constrain it

```jsx
{/* Only show rotation-related presets */}
<LinearTransform
  visiblePresets={['identity', 'rot45', 'rot90']}
  enabledLayers={['grid', 'basis', 'eigen']}
/>
```

### 4. Custom layout via render-prop

```jsx
<LinearTransform
  layout={({ transform, anim }) => (
    <div>
      <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
      <AnimationControls
        t={anim.t} playing={anim.playing}
        onPlay={anim.play} onPause={anim.cancel}
        onScrub={anim.setT} onReset={anim.reset}
        onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
      />
    </div>
  )}
/>
```

The header is still rendered above your layout (unless you pass `header={null}`).

### 5. Core directly — no UI at all

```jsx
import { LinearTransformCore, VisualizerCanvas } from './LinearTransform-v4-2.jsx';

<LinearTransformCore initialPreset="rot45" duration={1200}>
  {({ transform, anim }) => (
    <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
  )}
</LinearTransformCore>
```

Use this when you want the wiring (preset→animate effect, hook lifecycle) but reject the default UI completely.

### 6. Atomic — one sub-component, your own state

```jsx
function StaticSnapshot() {
  return (
    <VisualizerCanvas
      A={[[2, 1], [0, 1]]}
      t={1}
      layers={{ grid: true, basis: true, square: true }}
    />
  );
}
```

Any sub-component works in isolation. They all have defaults for every prop.

### 7. Compose with the hooks — your own layout, their state machine

```jsx
import { useTransformState, useAnimationState, VisualizerCanvas, AnimationControls } from './LinearTransform-v4-2.jsx';

function RotationsOnlyPage() {
  const transform = useTransformState({ initialPreset: 'rot45' });
  const anim = useAnimationState({ stops: [0, 0.5, 1], duration: 1000 });

  return (
    <div>
      <MyAngleSlider onChange={(theta) => transform.setA(rotationMatrix(theta))} />
      <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
      <AnimationControls
        t={anim.t} playing={anim.playing}
        onPlay={anim.play} onPause={anim.cancel}
        onScrub={anim.setT} onReset={anim.reset}
        onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
      />
    </div>
  );
}
```

---

## `LinearTransform` props (full reference)

### Header

| Prop       | Type                | Default                                                      | Notes                                                          |
|------------|---------------------|--------------------------------------------------------------|----------------------------------------------------------------|
| `eyebrow`  | HTML string         | `'Linear algebra · Interactive [2D]'` (with dot/pill markup) | Pass `null` to hide. HTML is rendered via `dangerouslySetInnerHTML`. |
| `subtitle` | HTML string         | `'Pick a preset or edit the matrix directly — ...'`          | Pass `null` to hide. Supports `<em>` accent inline.            |
| `header`   | JSX                 | `undefined`                                                  | Full override. When provided, `eyebrow` and `subtitle` are ignored. |

### Core options (forwarded to `LinearTransformCore`)

| Prop            | Type                  | Default                  | Notes                                                  |
|-----------------|-----------------------|--------------------------|--------------------------------------------------------|
| `initialA`      | `number[2][2]`        | `[[1,0],[0,1]]`          | Starting matrix.                                       |
| `initialPreset` | string \| null        | `'identity'`             | Starting preset key. `null` = none active.             |
| `initialLayers` | object                | `DEFAULT_LAYERS`         | Per-layer booleans (see [LayersPanel](#layerspanel)).  |
| `presets`       | object                | `PRESETS`                | Dictionary of `{key: [[a,b],[c,d]]}`. Replace or extend. |
| `stops`         | `number[]`            | `[0, 0.25, 0.5, 0.75, 1]`| Discrete animation stops, 0..1.                        |
| `duration`      | number (ms)           | `600`                    | Per-step animation duration. Play uses `2 × duration`. |
| `initialT`      | number                | `0`                      | Starting animation parameter.                          |

### Slot overrides

Every visible piece can be replaced by passing JSX. Convention: `undefined` → default; JSX → replace; `null` → hide.

| Slot prop       | Default component        |
|-----------------|--------------------------|
| `canvas`        | `VisualizerCanvas`       |
| `matrixInput`   | `MatrixInput`            |
| `presetsGrid`   | `PresetsGrid`            |
| `layersPanel`   | `LayersPanel`            |
| `animationCtrl` | `AnimationControls`      |
| `explanation`   | `ExplanationsPanel`      |

### Atomization helpers

| Prop                  | Type                 | Effect                                                              |
|-----------------------|----------------------|---------------------------------------------------------------------|
| `visiblePresets`      | `string[]`           | Subset of preset keys to render in the default `PresetsGrid`.       |
| `enabledLayers`       | `string[]`           | Subset of layer keys to render in the default `LayersPanel`.        |
| `explanationOverride` | `{ byPreset?, byCharacter?, fallback? }` | Shallow-merged into `defaultExplanations`. Missing keys fall back. |

### Sizing

| Prop                | Default | Notes                                                                              |
|---------------------|---------|------------------------------------------------------------------------------------|
| `controlsMinHeight` | `670`   | Forces the controls column (and explanation panel max-height) to match the canvas column visually. Override if you swap the canvas for a different size. |

### Layout escape hatch

| Prop     | Type                                        |
|----------|---------------------------------------------|
| `layout` | `({ transform, anim }) => ReactNode`        |

When provided, the 3-column grid is bypassed and your function is called inside the outer wrapper (header still renders above).

### Outer styling

| Prop        | Type     | Notes                                                                 |
|-------------|----------|-----------------------------------------------------------------------|
| `className` | string   | Applied to the outer wrapper.                                         |
| `style`     | object   | Spreads onto the outer wrapper. Overrides default bg/border/padding.  |

Default outer style: `max-width: 1400; margin: 24px auto; padding: 24px 32px 28px; background: #eef3fa; border: 1px solid #d8e2ef; border-radius: 10`.

---

## Sub-component reference

### `VisualizerCanvas`

SVG renderer. Pure — given the same props, renders the same SVG. Safe for SSR.

```jsx
<VisualizerCanvas
  A={[[1, 1], [0, 1]]}
  t={1}
  layers={{ grid: true, basis: true, square: true }}
/>
```

| Prop         | Type           | Default                  | Notes                                            |
|--------------|----------------|--------------------------|--------------------------------------------------|
| `A`          | `number[2][2]` | `[[1,0],[0,1]]`          | Target matrix.                                   |
| `t`          | `number`       | `1`                      | Interpolation 0..1 from identity to `A`.         |
| `layers`     | object         | `DEFAULT_LAYERS`         | See [Layer keys](#layer-keys).                   |
| `size`       | `number`       | `600`                    | SVG side length in px.                           |
| `scale`      | `number`       | `42`                     | Pixels per unit.                                 |
| `gridR`      | `number`       | `10`                     | Grid radius in units.                            |
| `showStatus` | `boolean`      | `true`                   | Render the "identity / rotation / singular ..." label in the corner. |
| `style`      | object         | —                        | Spreads onto the `<svg>`.                        |

### `MatrixInput`

Bracketed `[[a,b],[c,d]]` editor with safe mid-edit handling (blanks, `-`, `.` don't fight the controlled input).

```jsx
<MatrixInput A={A} onChange={setA} step={0.5} />
```

| Prop       | Type                          | Default          |
|------------|-------------------------------|------------------|
| `A`        | `number[2][2]`                | `[[1,0],[0,1]]`  |
| `onChange` | `(nextA: number[2][2]) => void` | `() => {}`     |
| `step`     | `number`                      | `0.1`            |

### `PresetsGrid`

```jsx
<PresetsGrid
  visiblePresets={['identity', 'rot45']}
  activePreset={activePreset}
  onSelect={(key) => ...}
/>
```

| Prop             | Type                        | Default                |
|------------------|-----------------------------|------------------------|
| `visiblePresets` | `string[]`                  | `DEFAULT_PRESET_KEYS`  |
| `meta`           | `{[key]: {label, singular}}`| `PRESET_META`          |
| `activePreset`   | `string \| null`            | `null`                 |
| `onSelect`       | `(key: string) => void`     | `() => {}`             |

### `LayersPanel`

```jsx
<LayersPanel
  layers={layers}
  onChange={setLayers}
  enabledLayers={['grid', 'basis', 'eigen']}
/>
```

| Prop            | Type                                | Default       |
|-----------------|-------------------------------------|---------------|
| `layers`        | object                              | `{}`          |
| `onChange`      | `(nextLayers: object) => void`      | `() => {}`    |
| `enabledLayers` | `string[]` \| `undefined`           | `undefined` (all) |
| `layerDefs`     | `{key, label}[]`                    | `ALL_LAYERS`  |

#### Layer keys

```
grid          coordinate grid (transformed)
samples       4×4 lattice of dots
square        unit square (filled, color reflects det sign)
circle        unit circle (dashed)
basis         î and ĵ basis vectors
eigen         real eigenvector directions
kernelImage   ker(A) and im(A) for singular matrices
labels        text labels (î, ĵ, ker A, im A)
```

### `AnimationControls`

```jsx
<AnimationControls
  t={anim.t}
  playing={anim.playing}
  stops={anim.stops}
  onPlay={anim.play}
  onPause={anim.cancel}
  onStepFwd={anim.stepFwd}
  onStepBack={anim.stepBack}
  onReset={anim.reset}
  onScrub={anim.setT}
/>
```

Stateless. All callbacks optional (default `() => {}`).

| Prop           | Type                  | Default          |
|----------------|-----------------------|------------------|
| `t`            | `number`              | `0`              |
| `playing`      | `boolean`             | `false`          |
| `stops`        | `number[]`            | `DEFAULT_STOPS`  |
| `onPlay`       | `() => void`          | noop             |
| `onPause`      | `() => void`          | noop             |
| `onStepFwd`    | `() => void`          | noop             |
| `onStepBack`   | `() => void`          | noop             |
| `onReset`      | `() => void`          | noop             |
| `onScrub`      | `(t: number) => void` | noop             |

### `ExplanationsPanel`

Case-aware. Picks an entry from `byPreset` (if `activePreset` is set) or from `byCharacter` (based on `classify(A)`).

```jsx
<ExplanationsPanel
  A={A}
  activePreset={activePreset}
  override={{ byPreset: { rot45: myCustomRot45Entry } }}
/>
```

| Prop           | Type                                          | Default          |
|----------------|-----------------------------------------------|------------------|
| `A`            | `number[2][2]`                                | `[[1,0],[0,1]]`  |
| `activePreset` | `string \| null`                              | `null`           |
| `override`     | `{ byPreset?, byCharacter?, fallback? }`      | `undefined`      |
| `style`        | object                                        | —                |

---

## Hook reference

### `useTransformState(options?)`

```jsx
const transform = useTransformState({
  initialA: [[1, 0], [0, 1]],
  initialPreset: 'identity',
  initialLayers: DEFAULT_LAYERS,
  presets: PRESETS,
});
```

Returns:

```ts
{
  A: number[2][2];
  activePreset: string | null;
  layers: { [layerKey]: boolean };
  setA: (next: number[2][2]) => void;     // clears activePreset
  selectPreset: (key: string) => void;    // also sets A to presets[key]
  setLayers: (next: object) => void;
}
```

### `useAnimationState(options?)`

```jsx
const anim = useAnimationState({
  stops: [0, 0.25, 0.5, 0.75, 1.0],
  duration: 600,
  initialT: 0,
});
```

Returns:

```ts
{
  t: number;
  playing: boolean;
  stops: number[];
  animateTo: (target: number, duration?: number) => void;
  cancel: () => void;
  reset: () => void;
  stepFwd: () => void;
  stepBack: () => void;
  play: () => void;          // animates t -> 1; if t >= 0.999, resets to 0 first
  setT: (t: number) => void; // cancels any running animation
}
```

`play` runs at `duration * 2` (slower than steps). Steps run at `duration`.

---

## Helper reference

### `Math2D`

```ts
Math2D.apply(M, p)          // [number, number]
Math2D.det(M)               // number
Math2D.trace(M)             // number
Math2D.interp(t, A)         // identity → A interpolation at t
Math2D.eigenvalues(A)       // { type: 'real'|'complex', vals, disc }
Math2D.eigenvector(A, lam)  // unit [x, y] | null
Math2D.classify(A)          // 'identity' | 'rotation' | 'shear' | ...
Math2D.rank(A)              // 0 | 1 | 2
Math2D.singularDirs(A)      // { kerDir, imgDir } unit vectors (rank 1 only)
Math2D.fmt(x)               // round-to-3 string
```

`classify` returns one of:

```
'identity'  'rotation'  'reflection'  'shear'
'uniform scaling'  'uniform scaling + 180°'  'axis stretch'
'orientation-reversing'  'general invertible'
'singular'  'zero map'
```

### `SVGRender`

Pure SVG string builders. Each returns an SVG fragment to be injected via `dangerouslySetInnerHTML` into a `<g>`.

```ts
SVGRender.grid(M, geom)            // geom = { cx, cy, scale, gridR }
SVGRender.samples(M, geom)
SVGRender.circle(M, geom)
SVGRender.square(M, geom)
SVGRender.eigen(M, A, geom)
SVGRender.kernelImage(M, A, showLabels, geom)
SVGRender.basis(M, showLabels, geom)
```

Plus the CSS string `SVG_STYLE_CSS` (injected automatically inside `VisualizerCanvas`).

### `PRESETS`, `PRESET_META`

```js
PRESETS.rot45              // [[0.707, -0.707], [0.707, 0.707]]
PRESET_META.rot45          // { label: 'Rotate 45°', singular: false }
DEFAULT_PRESET_KEYS        // ordered array of all preset keys
```

### `defaultExplanations`

```js
{
  byPreset:    { identity: EX_identity, rot45: EX_rot45, ... },
  byCharacter: { identity: ..., rotation: ..., singular: ..., ... },
  fallback:    EX_fallback,
}
```

Each entry shape:

```ts
{
  title: string,              // HTML
  plain: string,              // HTML
  sections: Array<{
    label?: string,           // section heading
    type?: 'insight' | 'insight-singular' | 'singular-dirs',
    body: (state) => string | string,   // HTML; receives { A, activePreset }
  }>,
}
```

---

## Customization recipes

### Custom presets dictionary

```jsx
const MY_PRESETS = {
  identity: PRESETS.identity,
  doubleRot: [[Math.cos(1), -Math.sin(1)], [Math.sin(1), Math.cos(1)]],
};

<LinearTransform
  presets={MY_PRESETS}
  visiblePresets={['identity', 'doubleRot']}
/>
```

You also need entries in `PRESET_META` for any new keys to render labels:

```jsx
import { PresetsGrid, PRESET_META } from './LinearTransform-v4-2.jsx';

const MY_META = {
  ...PRESET_META,
  doubleRot: { label: 'Rotate 1 rad', singular: false },
};

<LinearTransform
  presets={MY_PRESETS}
  presetsGrid={
    <PresetsGrid
      visiblePresets={['identity', 'doubleRot']}
      meta={MY_META}
      activePreset={/* wire via Core */}
      onSelect={/* wire via Core */}
    />
  }
/>
```

For full wiring, use `LinearTransformCore` directly so you can pass `transform.activePreset` and `transform.selectPreset`.

### Override one explanation entry

```jsx
<LinearTransform
  explanationOverride={{
    byPreset: {
      rot45: {
        title: 'My custom title',
        plain: 'My custom plain-language explanation.',
        sections: [
          { label: 'Computation', body: (s) => `det A = ${Math2D.det(s.A)}` },
        ],
      },
    },
  }}
/>
```

Other entries (`identity`, `rot90`, ...) still fall back to defaults.

### Override the character-based fallback

```jsx
<LinearTransform
  explanationOverride={{
    byCharacter: {
      'general invertible': myEntry,
    },
    fallback: myFallbackEntry,
  }}
/>
```

### Rotation-only page

```jsx
<LinearTransform
  visiblePresets={['identity', 'rot45', 'rot90']}
  enabledLayers={['grid', 'basis', 'circle', 'square']}
  eyebrow="Rotations"
  subtitle="A 2D rotation is a rigid motion: lengths and angles are preserved."
/>
```

### Hide the explanation panel

```jsx
<LinearTransform explanation={null} controlsMinHeight={600} />
```

(Adjust `controlsMinHeight` since the explanation panel no longer contributes to layout balance.)

### Static snapshot (no animation, no controls)

```jsx
<VisualizerCanvas A={[[1, 1], [0, 1]]} t={1} />
```

### Side-by-side comparison

```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
  <VisualizerCanvas A={[[1, 0], [0, 1]]} t={1} showStatus={false} />
  <VisualizerCanvas A={[[1, 1], [0, 1]]} t={1} showStatus={false} />
</div>
```

### Two coupled instances (matrix on left, animation on right)

```jsx
function CoupledDemo() {
  const transform = useTransformState();
  const anim = useAnimationState();
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div>
        <MatrixInput A={transform.A} onChange={transform.setA} />
        <PresetsGrid
          activePreset={transform.activePreset}
          onSelect={transform.selectPreset}
        />
      </div>
      <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
      <AnimationControls
        t={anim.t} playing={anim.playing}
        onPlay={anim.play} onPause={anim.cancel}
        onScrub={anim.setT} onReset={anim.reset}
        onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
      />
    </div>
  );
}
```

Note: the preset→animate effect lives inside `LinearTransformCore`. If you use the hooks directly, replicate it:

```jsx
useEffect(() => {
  if (!transform.activePreset) return;
  anim.setT(0);
  requestAnimationFrame(() => anim.animateTo(1, 1200));
}, [transform.activePreset]);
```

---

## SSR / Next.js notes

- The file starts with `'use client'`. Required for App Router; harmless on Pages Router.
- No `Math.random()` anywhere. No `Date.now()` during render.
- `requestAnimationFrame` and `performance.now()` only run inside event handlers and `useEffect` cleanup — safe under SSR.
- Initial render is deterministic (`t = initialT`, `A = initialA`). No hydration mismatch.
- SVG layer fragments are injected via `dangerouslySetInnerHTML`. The author-controlled HTML is fine — no user input flows into it.
- The component-wide `<style>` block uses `dangerouslySetInnerHTML` to avoid quote-escaping hydration issues.

---

## Known limitations

1. **Kernel/image line vs dot timing.** When a singular preset is active, the ker/im *lines* are drawn from `A` at full strength immediately, while the kernel/image *dots* animate with `t`. Pedagogically intentional ("here's where they'll land"), but visually the lines appear before the dots reach them. Decide at the call site if this matters.

2. **Linear interpolation is geometrically dishonest for rotations.** `interp(t, A)` is a straight-line morph from identity to `A`, not a geodesic. Basis vectors take chords, not arcs. Endpoints are correct; intermediate frames are not "the rotation in progress." A polar-decomposition mode would fix this; not currently implemented.

3. **Step-dots don't align with slider positions.** They sit between the buttons and the slider as a separate indicator row rather than being anchored to the slider track at 0%/25%/50%/75%/100%. Functional but not visually anchored.

4. **`AnimationControls` row overflow on narrow widths.** Below ~480px the slider squeezes. The default `LinearTransform` wrapper stacks to a single column at ≤1260px, but standalone use of `AnimationControls` in a narrow container will need `flex-wrap: wrap` or a different layout.

5. **Layout assumes 600×600 canvas.** `controlsMinHeight` defaults to 670 (canvas 600 + gap 14 + anim strip ~56). If you swap `canvas` for a different size, set `controlsMinHeight` accordingly or the controls column won't visually balance.