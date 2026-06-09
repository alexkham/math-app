# `FunctionArithmetic` — Reference

Wrapper component built on `VisualizerCore` for visualizing pointwise arithmetic on two functions:

`(f + g)(x)`, `(f − g)(x)`, `(f · g)(x)`, `(f / g)(x)`

Plots both inputs (faded) and the result (highlighted) on the same graph.

---

## Quick start

```jsx
import FunctionArithmetic from './components/FunctionArithmetic';

export default function Page() {
  return <FunctionArithmetic />;
}
```

Renders with defaults: `f = x²`, `g = sin(x)`, current operation `Sum`.

---

## File structure expected

```
app/
  components/
    FunctionVisualizerCoreImproved.jsx   ← engine, exports VisualizerWithControls
    InfoPanel.jsx                         ← tab panel with processContent
    FunctionArithmetic.jsx                ← this component
```

Imports inside `FunctionArithmetic.jsx`:

```jsx
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';
```

Adjust paths to your tree.

---

## Props

All props are optional.

| Prop              | Type                          | Default          | Purpose                                                  |
|-------------------|-------------------------------|------------------|----------------------------------------------------------|
| `initialF`        | `string`                      | `'quadratic'`    | Key into `families` for the initial `f`                  |
| `initialG`        | `string`                      | `'sine'`         | Key into `families` for the initial `g`                  |
| `initialOp`       | `'sum' \| 'difference' \| 'product' \| 'quotient'` | `'sum'` | Initial operation tab                          |
| `families`        | `object`                      | built-in `BASES` | Override the family map (see shape below)                |
| `visualizerProps` | `object`                      | `{}`             | Forwarded to `VisualizerWithControls`                    |
| `infoPanelProps`  | `object`                      | `{}`             | Forwarded to `InfoPanel`                                 |
| `extraTabs`       | `TabDef[]`                    | `[]`             | Appended to the InfoPanel's explanation tab              |
| `darkMode`        | `boolean`                     | `false`          | Theme toggle                                             |
| `showPicker`      | `boolean`                     | `true`           | Show/hide left family picker                             |
| `showInfoPanel`   | `boolean`                     | `true`           | Show/hide right explanation panel                        |
| `maxWidth`        | `string \| number`            | `'80vw'`         | Outer wrapper cap                                        |
| `onChange`        | `({ fKey, gKey, op }) => void`| —                | Called when f, g, or op changes                          |

If `initialF` or `initialG` is not a key of `families`, it falls back to the first/second family key.

---

## `BASES` (exported)

```jsx
import { BASES } from './components/FunctionArithmetic';
```

A keyed map of base functions. Each entry has the shape:

```js
{
  name: string,        // display name, e.g. 'Quadratic'
  glyph: string,       // SVG path string (viewBox 26×28) for the picker icon
  fn: (x) => number,   // the actual function
  formula: string,     // pure expression body, e.g. 'x²', 'sin(x)', '1/x'
  group?: string,      // optional picker group header, e.g. 'Trigonometric'
}
```

Built-in keys: `linear`, `quadratic`, `cubic`, `reciprocal`, `exponential`, `logarithmic`, `sine`, `cosine`, `absolute`, `sqrt`.

`sine` and `cosine` carry `group: 'Trigonometric'` so the picker renders a section header above them.

### Adding a custom family

```jsx
import FunctionArithmetic, { BASES } from './components/FunctionArithmetic';

const myFamilies = {
  ...BASES,
  tangent: {
    name: 'Tangent',
    group: 'Trigonometric',
    glyph: 'M2,26 Q11,18 12,14 Q13,10 22,2',
    fn: x => Math.tan(x),
    formula: 'tan(x)',
  },
};

<FunctionArithmetic families={myFamilies} />
```

### Restricting families per page

```jsx
<FunctionArithmetic
  families={{
    quadratic: BASES.quadratic,
    sine: BASES.sine,
  }}
  initialF="quadratic"
  initialG="sine"
/>
```

The picker only lists the chosen subset.

---

## Operations (internal, not configurable)

The four operations are defined inside the component as `OPERATIONS`. They are **not currently a prop**. Each operation entry contains:

```js
{
  title:   string,           // 'Sum'
  symbol:  string,           // '+'
  short:   string,           // tab label
  formula: string,           // '(f + g)(x) = f(x) + g(x)'
  tooltip: string,           // shown in the tab tooltip
  body:    string,           // markdown for InfoPanel "General" section
  fn:      (f, g) => x => y, // composes the result function
  notes:   (f, g) => string, // markdown for InfoPanel "Applied to …" section
}
```

### Quotient handling

`(f / g)` returns `NaN` where `|g(x)| < 1e-10` to avoid `±Infinity` artifacts. The component also passes `showAsymptotes={true}` to the engine when the active op is quotient, so vertical asymptote lines render automatically.

---

## InfoPanel content

The component builds one tab automatically:

```
## <Operation title>
`<formula>`

### General
<op.body>

### Applied to **<f.name>** and **<g.name>**
<op.notes(f, g)>
```

Rendered through `processContent`, so it supports KaTeX `$…$`, bold, lists, code spans.

Use `extraTabs` to add more tabs (passed to `InfoPanel`'s `tabs` prop, appended after the explanation tab):

```jsx
<FunctionArithmetic
  extraTabs={[
    { key: 'examples', label: 'Examples', order: 10,
      content: '## Try these\n- $x^2 + \\sin(x)$\n- $e^x / x$' },
  ]}
/>
```

---

## Layout

```
┌────────┬─────────────────────┬───────────────┐
│        │  header chips       │ InfoPanel     │
│ picker │  [graph 880×600]    │ (explanation) │
│ 220px  │  status strip       ├───────────────┤
│        │                     │ op tabs       │
│        │                     │ op info       │
└────────┴─────────────────────┴───────────────┘
        gap 16   maxWidth 80vw   right col 360
```

The picker has two parts:

1. **`f / g` toggle** at the top — segmented control. Each side shows a colored dot (gray for f, amber for g) and the currently selected family name.
2. **Family list** below — clicking a row sets it as the selection for whichever slot is being edited.

A **Swap** button switches f and g without re-selecting.

The non-editing slot's current family is marked with a small `f` or `g` tag in the list so you can see both selections.

---

## Color conventions

| Curve  | Color     | Style          |
|--------|-----------|----------------|
| f      | `#94a3b8` (gray)  | dashed, thin   |
| g      | `#f59e0b` (amber) | dashed, thin   |
| h      | `#3b82f6` (blue, accent) | solid, thick |

Result is always the highlight; inputs are references.

---

## Forwarding engine props

`visualizerProps` is spread into `VisualizerWithControls`. Use it to:

```jsx
<FunctionArithmetic
  visualizerProps={{
    defaultWidth: 720,
    defaultHeight: 500,
    zoom: 5,
    showRoots: true,        // engine finds zeros of h
    showExtrema: true,
    samples: 800,
  }}
/>
```

The component's own defaults are `defaultWidth: 880, defaultHeight: 600`. Anything in `visualizerProps` overrides them.

`showAsymptotes` is set internally based on the active operation (true for quotient), but `visualizerProps` can override that too.

---

## `onChange`

Fires whenever f, g, or the operation changes:

```jsx
<FunctionArithmetic
  onChange={({ fKey, gKey, op }) => {
    console.log(`f=${fKey}, g=${gKey}, op=${op}`);
  }}
/>
```

Use it to persist state, sync with URL params, or analytics.

---

## Usage patterns

### Single page per operation

```jsx
// app/arithmetic/product/page.jsx
'use client';
import FunctionArithmetic from '../../components/FunctionArithmetic';

export default function ProductPage() {
  return (
    <FunctionArithmetic
      initialOp="product"
      initialF="quadratic"
      initialG="sine"
    />
  );
}
```

### Embedded preview (no picker, no panel)

```jsx
<FunctionArithmetic
  showPicker={false}
  showInfoPanel={false}
  visualizerProps={{ defaultWidth: 500, defaultHeight: 360 }}
  initialF="exponential"
  initialG="cosine"
  initialOp="product"
/>
```

### Dark mode

```jsx
<FunctionArithmetic darkMode />
```

---

## Limitations

- **Operations are not currently overridable via props.** To add custom operations (e.g. `min(f, g)`, `max(f, g)`), edit the `OPERATIONS` object inside the component.
- **No composition.** `(f ∘ g)(x)` is intentionally excluded — it belongs in a separate tool (different concept: chaining inputs vs. combining outputs).
- **`notes(f, g)` are generic.** They mention f and g by name but don't go deep into per-pair behavior (e.g., "sin·cos simplifies to ½·sin(2x)"). Adding pair-specific lore would require either an O(N²) lookup table or a smarter analysis pass.
- **Quotient with both f and g zero** at the same point shows up as undefined (NaN). The component doesn't detect or annotate removable discontinuities.

---

## Tooltip styling

Custom tooltip pattern shared with `FunctionTransformations`:

- CSS injected via `<style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />` to avoid Next.js SSR escaping CSS `content: ''`.
- Hover or focus on a tab → dark pill above the tab with title + description.
- Class prefix `fa-tt-*` (vs. `ft-tt-*` in Transformations) to avoid CSS collisions if both components live on the same page.

---

## Versioning

Save as `FunctionArithmetic.jsx`. Following the project's convention, future revisions become `FunctionArithmetic-v2.jsx`, `-v3.jsx`, etc., without overwriting.