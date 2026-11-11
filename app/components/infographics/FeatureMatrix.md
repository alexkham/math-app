# FeatureMatrix

Items × features: several objects, types or methods compared on the same features. Each feature has a cell type: text, maths, tag, verdict, number (with a bar), or a small graph. Readers can flip the layout between items as rows and items as columns, hover to trace a row and column, and sort by any number feature. Every colour, label and setting comes from data, with defaults.

```jsx
import FeatureMatrix from '@/app/components/infographics/FeatureMatrix';

<FeatureMatrix data={countingScenarios} />
```

The component is a single file, `FeatureMatrix.jsx`. It exports `CELL_TYPES`, `DEFAULT_LABELS`, `DEFAULT_VERDICTS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

**FeatureMatrix vs the other comparison components:**

- **ConceptCompare:** two or three concepts, with prose-like values.
- **PropertySheet `matrix`:** objects × properties where every cell is a verdict.
- **FeatureMatrix:** any number of items, with columns of mixed types.

---

## Contents

1. [Props](#props)
2. [Data shape](#data-shape)
3. [Cell types](#cell-types)
4. [Interaction](#interaction)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `orient` | `'rows' \| 'columns'` | `'rows'` | Initial layout: items as rows or as columns. `data.orient` wins. |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `verdicts` | object | — | Verdict styles, merged over `DEFAULT_VERDICTS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.verdicts`, `data.theme`, `data.options` and `data.orient` win).

---

## Data shape

```js
{
  header?:   { kicker?, title?, lede? },   // omit header to hide it
  orient?:   'rows' | 'columns',
  features:  [{ id, name, sub?, type, tags?, sortable? }],
  items:     [{ id, name, sub?, values: { [featureId]: value } }],
  footnote?: string,                       // one muted line under the table
  labels?, verdicts?, theme?, options?
}
```

| Field | |
|---|---|
| `features[].name`, `sub` | The heading and a small line under it. |
| `features[].type` | One of `CELL_TYPES`; decides how every value in that feature is drawn. Default `'text'`. |
| `features[].tags` | For `tag` features: a map from value to `{ label?, color?, bg? }`. |
| `features[].sortable` | For `number` features: `false` hides the sort button. |
| `items[].name`, `sub` | The item heading and a small line under it. |
| `items[].values` | One value per feature id. A missing, `null` or `''` value shows `labels.none` (—). |

All text goes through `processContent`, so `$…$`, `**bold**` and links work everywhere. Graph values contain functions, so data with a `graph` feature must live in a JS module, not in JSON or a getStaticProps return value.

---

## Cell types

| Type | Value | Drawn as |
|---|---|---|
| `text` | string | Left-aligned text. |
| `math` | string, e.g. `'$\\dfrac{1}{\\lambda}$'` | Centred, in the maths font, no wrapping. |
| `tag` | string key | A pill, coloured from `feature.tags[value]` or the theme's tag colours. The label is `tags[value].label` or the value itself. |
| `verdict` | `'yes'`, `'no'`, `'partly'` or any key you add to `verdicts` | A round mark. Verdicts in use are listed in a legend. |
| `number` | number, or `{ value, label }` | A bar scaled to the largest value in the feature, and the number (or `label`). |
| `graph` | `{ f, x0, x1, y0?, y1?, color?, fill?, width?, height? }` | A small plot of `f` on `[x0, x1]`, filled down to the axis. `y0`, `y1` default to `min(0, f)` and `max(f)`. |

---

## Interaction

- **Layout toggle:** "Items as rows" / "Items as columns". The table is the same, transposed.
- **Hover a cell:** its row and its column are tinted, and their headings are highlighted. Hovering a heading highlights its row or column.
- **Sort:** each `number` feature has a button next to its heading: ↕ (unsorted) → ↓ (largest first) → ↑ (smallest first) → unsorted. Missing values count as the smallest: last when sorting largest first, first when sorting smallest first.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | |
|---|---|---|
| `orient` | `'Layout'` | Label before the toggle |
| `rows` / `cols` | `'Items as rows'` / `'Items as columns'` | The two toggle buttons |
| `none` | `'—'` | Shown for a missing value |
| `sortAsc` / `sortDesc` | `'sort ascending'` / `'sort descending'` | Screen-reader labels of the sort button |

### `verdicts` (`DEFAULT_VERDICTS`)

```js
{
  yes:    { label: 'Yes',    mark: '✓', color: '#2563eb', bg: '#dbeafe' },
  no:     { label: 'No',     mark: '✕', color: '#475569', bg: '#f1f5f9' },
  partly: { label: 'Partly', mark: '½', color: '#a16207', bg: '#fef3c7' }
}
```

Add your own keys (e.g. `{ depends: { label: 'Depends', mark: '?', color: …, bg: … } }`) and use them as values.

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, headings, numbers |
| `muted` | `#64748b` | Lede, subs, labels, missing values |
| `line` | `#e2e8f0` | Cell borders |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Table and toggle background |
| `soft` | `#f8fafc` | Body background, item headings |
| `headBg` | `#eff6ff` | Feature headings |
| `navy` | `#1e3a8a` | Active toggle |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Kicker, active sort, focus ring |
| `slate` | `#475569` | Toggle text |
| `onDark` | `#ffffff` | Text on the active toggle |
| `hover` / `hoverHead` | `#eff6ff` / `#dbeafe` | Tint of the hovered row and column / their headings |
| `bar` / `barTrack` | `#2563eb` / `#e2e8f0` | Number bars |
| `tagInk` / `tagBg` | `#1e3a8a` / `#eff6ff` | Tags without their own colours |
| `sparkLine` / `sparkFill` / `sparkAxis` | `#1e3a8a` / `#dbeafe` / `#94a3b8` | Graph cells (a graph value's `color` / `fill` override them) |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `orient` | `'rows'` | Initial layout when neither `data.orient` nor the `orient` prop is given |
| `orientToggle` | `true` | Show the layout toggle |
| `hover` | `true` | Row and column highlighting |
| `sortable` | `true` | Sort buttons on number features |
| `legend` | `true` | The verdict legend |
| `sparkWidth` / `sparkHeight` | `110` / `40` | Default size of graph cells, in pixels |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

From the demo (`info_feature_matrix.html`).

### Items as rows: `combinatorics/basics` → Standard Scenarios

```js
const fam = {
  permutation: { label: 'permutation', color: '#1e3a8a', bg: '#dbeafe' },
  combination: { label: 'combination', color: '#a16207', bg: '#fef3c7' }
};

export const countingScenarios = {
  header: { kicker: 'Combinatorics', title: 'Standard Scenarios', lede: 'Ten standard templates: five permutation scenarios and five combination scenarios, each with a known formula.' },
  features: [
    { id: 'family', name: 'Family', type: 'tag', tags: fam },
    { id: 'ordered', name: 'Order matters', type: 'verdict' },
    { id: 'formula', name: 'Count', type: 'math' },
    { id: 'n5', name: 'At $n = 5$, $r = 3$', sub: 'sortable', type: 'number' }
  ],
  items: [
    { id: 'full', name: 'Full permutation', sub: '$n$ distinct items in a row', values: { family: 'permutation', ordered: 'yes', formula: '$n!$', n5: 120 } },
    { id: 'ident', name: 'With identical items', sub: '$n_1, \\ldots, n_k$ identical of each type', values: { family: 'permutation', ordered: 'yes', formula: '$\\dfrac{n!}{n_1!\\, n_2! \\cdots n_k!}$', n5: null } },
    { id: 'partial', name: 'Partial, no repetition', sub: '$r$ chosen from $n$ distinct', values: { family: 'permutation', ordered: 'yes', formula: '$\\dfrac{n!}{(n-r)!}$', n5: 60 } },
    { id: 'rep', name: 'With repetition', sub: '$r$ positions, $n$ choices each', values: { family: 'permutation', ordered: 'yes', formula: '$n^r$', n5: 125 } },
    { id: 'circ', name: 'Circular', sub: '$n$ items in a circle', values: { family: 'permutation', ordered: 'yes', formula: '$(n-1)!$', n5: 24 } },
    { id: 'comb', name: 'Simple combination', sub: 'choose $r$ from $n$', values: { family: 'combination', ordered: 'no', formula: '$\\binom{n}{r}$', n5: 10 } },
    { id: 'part', name: 'Partition into groups', sub: 'labeled groups of sizes $k_1, \\ldots, k_r$', values: { family: 'combination', ordered: 'no', formula: '$\\binom{n}{k_1, \\ldots, k_r}$', n5: null } },
    { id: 'weak', name: 'Weak composition', sub: '$n$ identical into $r$ bins, empty allowed', values: { family: 'combination', ordered: 'no', formula: '$\\binom{n+r-1}{r-1}$', n5: 21 } },
    { id: 'strong', name: 'Strong composition', sub: '$n$ identical into $r$ bins, none empty', values: { family: 'combination', ordered: 'no', formula: '$\\binom{n-1}{r-1}$', n5: 6 } },
    { id: 'cells', name: 'Distribution into cells', sub: '$n$ distinct into $r$ labeled cells', values: { family: 'combination', ordered: 'no', formula: '$r^n$', n5: 243 } }
  ],
  footnote: 'Counts at $n = 5$, $r = 3$ are the formulas evaluated; the two scenarios that need group sizes are left blank.'
};
```

### Items as columns: `probability/distributions/continuous`

```js
export const continuousDistributions = {
  header: { kicker: 'Continuous distributions', title: 'Normal, Exponential, Uniform', lede: 'The same properties for each distribution.' },
  orient: 'columns',
  features: [
    { id: 'shape', name: 'Shape', sub: 'PDF', type: 'graph' },
    { id: 'support', name: 'Support', type: 'math' },
    { id: 'finite', name: 'Finite support', type: 'verdict' },
    { id: 'params', name: 'Parameters', type: 'math' },
    { id: 'mean', name: 'Mean', type: 'math' },
    { id: 'var', name: 'Variance', type: 'math' },
    { id: 'symmetric', name: 'Symmetric', type: 'verdict' },
    { id: 'memoryless', name: 'Memoryless', type: 'verdict' },
    { id: 'models', name: 'Models', type: 'text' }
  ],
  items: [
    { id: 'normal', name: 'Normal', values: {
      shape: { f: (x) => Math.exp(-x * x / 2), x0: -3.2, x1: 3.2 },
      support: '$(-\\infty, \\infty)$', finite: 'no', params: '$\\mu,\\ \\sigma > 0$', mean: '$\\mu$', var: '$\\sigma^2$',
      symmetric: 'yes', memoryless: 'no', models: 'measurements that cluster symmetrically around a central value' } },
    { id: 'exp', name: 'Exponential', values: {
      shape: { f: (x) => Math.exp(-x), x0: 0, x1: 4.5 },
      support: '$[0, \\infty)$', finite: 'no', params: '$\\lambda > 0$', mean: '$\\dfrac{1}{\\lambda}$', var: '$\\dfrac{1}{\\lambda^2}$',
      symmetric: 'no', memoryless: 'yes', models: 'the time between events at a constant average rate' } },
    { id: 'unif', name: 'Uniform', values: {
      shape: { f: (x) => (x >= 0 && x <= 1 ? 1 : 0), x0: -0.4, x1: 1.4, y1: 1.5 },
      support: '$[a, b]$', finite: 'yes', params: '$a < b$', mean: '$\\dfrac{a + b}{2}$', var: '$\\dfrac{(b - a)^2}{12}$',
      symmetric: 'yes', memoryless: 'no', models: 'all values in an interval equally likely' } }
  ]
};
```

### Customised from data

```js
{
  ...countingScenarios,
  labels:   { orient: 'View', rows: 'Scenarios down', cols: 'Scenarios across' },
  verdicts: { yes: { label: 'Ordered', mark: '↔', color: '#1e3a8a', bg: '#e0e7ff' } },
  theme:    { bar: '#ca8a04', barTrack: '#fef3c7', hover: '#f1f5f9' },
  options:  { orientToggle: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj4-diagram"
  id="standard-scenarios"
  title="Standard Scenarios"
  source="/combinatorics/basics"
>
  <FeatureMatrix data={countingScenarios} />
</DiagramFrame>
```

Good homes: overview and "types of" sections that list several items with the same attributes, such as distribution families, counting scenarios, function families, methods with their conditions, and the per-item property tables (e.g. `normalTable`, `exponentialTable`) merged into one.

---

## Authoring tips

- **Take the content from the page:** a bullet list where every item has the same parts (name, condition, formula) or a set of per-item tables gives the features directly.
- **Pick the type per feature, not per cell:** if some values of a feature are formulas, make the whole feature `math`.
- **Orientation:** with many items and few features, use `'rows'`; with few items and many features, `'columns'`. Readers can still flip it.
- **Numbers:** give a concrete setting in the feature name (e.g. "at $n = 5$, $r = 3$") so the values mean something, and leave a value out rather than invent one.
- **Graphs:** pick `x0`, `x1` (and `y1` if needed) so each shape is recognisable at 110 × 40.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\dfrac'`, `'\\infty'`).
