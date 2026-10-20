# Hierarchy

Rank between levels: one level takes precedence over, generates, dominates, or is built on another. Five layouts share one data shape.

Use it for rank, not for kinds of things (that's `TaxonomyOutline`) or subsets (containment).

```jsx
import Hierarchy, { DEFAULT_THEME } from './Hierarchy';

<Hierarchy data={data} variant="pyramid" />
```

- The file starts with `'use client'`, which is required for expand, select and tooltip state.
- Class prefix: `hy-`
- Every text field accepts a **string**, which goes through `processContent` (`$math$`, `**bold**`, `@[code]@`, `[label](!/path)`), or a **ReactNode**.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | required | See [Data](#data) |
| `variant` | `'pyramid'` \| `'staircase'` \| `'chain'` \| `'layers'` \| `'derivation'` | `'pyramid'` | An unknown value falls back to `pyramid` |
| `theme` | object | `DEFAULT_THEME` | Partial, merged over the defaults. See [Theme](#theme) |
| `initialOpen` | see below | none | What is open on mount |
| `showToolbar` | boolean | `true` | Expand-all / collapse-all buttons. Inline variants only, and only when at least one level has a `panel` |
| `framed` | boolean | `true` | Bordered frame with padding |
| `className` | string | | Extra class on the wrapper |
| `exportable` | boolean | `true` | PNG / PDF download buttons |
| `exportFormats` | array | `['png', 'pdf']` | Which buttons, in order |
| `fileName` | string | `'hierarchy'` | Download base name, without extension |

### `initialOpen`

| Variant type | Accepts |
|---|---|
| Inline (`pyramid`, `layers`) | `'none'`, `'all'`, or an array of ids |
| Drawer (`staircase`, `chain`, `derivation`) | One id, which is selected on mount. An array uses its first id |

### Export

The download is exactly what's on screen, minus the toolbar, the export buttons and any open tooltip. `chain` and `derivation` export at their full width, even when they're scrolled on screen.

---

## Variants

| Variant | Layout | Order of `levels` | Details open in |
|---|---|---|---|
| `pyramid` | A real pyramid: trapezoid tiers, the apex wins, each tier's top edge meets the bottom edge of the tier above; shades go from navy at the top to light blue at the base, `flag` turns a tier amber | Top → bottom (highest precedence first) | Inline, under the tier |
| `staircase` | Each level is generated from the one below; height = rank | Left → right (lowest first) | Shared drawer |
| `chain` | Strict dominance left to right, with connectors and value bars | Left → right (lowest first) | Shared drawer |
| `layers` | Bands resting on a foundation (the last level) | Top → bottom (foundation last) | Inline, under the band |
| `derivation` | Tree: each child is produced from its parent along an edge | `root` tree | Shared drawer |

**Inline variants:** click a tier or band to toggle its panel. Several can be open at once.

**Drawer variants:** click a card to show its panel in the drawer below. Click it again to clear. Only one shows at a time.

### Automatic emphasis

| Variant | Navy (solid) | Others |
|---|---|---|
| `pyramid` | 1st tier | 2nd tinted, 3rd lighter, 4th+ plain |
| `staircase` | — | Riser height grows with rank |
| `chain` | Last column | Bar height grows with rank |
| `layers` | Last band (foundation) | Bands 1–4 step from white to light blue |
| `derivation` | Root | Leaves (no children) are muted |

`flag: true` gives any level amber treatment.

### Automatic rank labels (when `rank` is omitted)

| Variant | Label |
|---|---|
| `pyramid` | `1st`, `2nd`, `3rd`, … |
| `staircase` | `level 0`, `level 1`, … |
| `chain` | `rank N` … `rank 1` (rightmost is rank 1) |
| `derivation` | `source` (root), `derived` (depth 1), `level N` (deeper) |
| `layers` | none |

---

## Data

```js
{
  levels: [ level, ... ],   // linear variants
  root:   node,             // derivation tree

  axis?:      { top, label, bottom },
  connector?: string,                     // default '≪'
  base?:      { start, middle, end },
  rule?:      { label, text },
  walk?:      [ { text, tip, sep } ],
  notes?:     [ string ],
  legend?:    [ { label, tone } ],
  labels?:    { expandAll, collapseAll, drawerEmpty },
  prefaceLabel?, prefaceTitle?, preface?,          // block above the diagram
  conclusionLabel?, conclusionTitle?, conclusion?, // block below the diagram
}
```

Both shapes work in every variant:

- `levels` passed to `derivation` becomes a single path (each level is the child of the previous one).
- `root` passed to a linear variant is flattened depth-first.

### Top-level fields

| Field | Used by | Shown as |
|---|---|---|
| `axis` | `pyramid` | The scale on the left: an arrow pointing up, `top` and `bottom` labels at the ends, `label` (what is being compared) written along it. The pyramid stays centred. Recommended for every pyramid |
| `axis` | `layers` | `label` only, with an upward arrow ("built on") |
| `connector` | `chain` | The symbol between columns. Default `≪` |
| `base` | `staircase` | Labels under the baseline: `start` (left), `middle`, `end` (right) |
| `rule` | all | A strip with an amber bar under the body: bold `label` and `text` |
| `walk` | all | A worked line, e.g. a step-by-step evaluation. Each step is `{ text, tip }`; `sep: true` renders the step as a small connector word between steps |
| `notes` | all | Muted footnotes |
| `legend` | all | Swatch + label. `tone` is `'accent'`, `'warm'`, `'muted'` or `'dashed'` |
| `labels` | all | Overrides for the UI text. Defaults: `expandAll: 'expand all'`, `collapseAll: 'collapse all'`, `drawerEmpty: 'Select a level for details.'` |
| `prefaceLabel` · `prefaceTitle` · `preface` | all | A neutral bordered block above the diagram: the label sits on the top border line, then a bold title, then the text (`preface` may be an array of paragraphs). Each part is optional; the block is skipped when all three are missing |
| `conclusionLabel` · `conclusionTitle` · `conclusion` | all | The same block below the diagram |

### Level / node fields

| Field | Type | |
|---|---|---|
| `id` | string | Stable key. Needed for `initialOpen`; otherwise the position is used |
| `name` | string | Main label |
| `sub` | string | Secondary line |
| `rank` | string | Badge text; automatic when omitted (see above) |
| `symbol` | string | The math for the level |
| `example` | string | Example value |
| `exampleLabel` | string | Caption above the `example` value (`chain`), e.g. `n = 10` |
| `note` | string | A caveat or a property lost, shown in amber |
| `chips` | `[{ label, tip, flag }]` | Members of the level (`layers`) |
| `edge` | `{ label, tip, flag }` | The operation from the parent (`derivation`), shown on the connector |
| `flag` | boolean | Amber treatment |
| `color` | CSS colour | `pyramid`: fill of this tier. Default: navy at the apex down to light blue at the base |
| `textColor` | CSS colour | `pyramid`: text colour of this tier (the sub line follows it). Default: white on dark tiers, navy on light ones |
| `tip` | `{ rank, symbol, example, note, connector }` | Tooltips on the parts of the level. `connector` is the tooltip on the link *into* this level from the previous one (`staircase`, `chain`) |
| `drawerTitle` | string | Drawer heading. Default `rank · name`, or `symbol` if both are empty |
| `panel` | see below | The expandable details |
| `children` | `[node]` | `derivation` only |

### Which fields each variant shows

| Field | pyramid | staircase | chain | layers | derivation |
|---|:-:|:-:|:-:|:-:|:-:|
| `name` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `sub` | ✓ | ✓ ("from") | ✓ | ✓ | ✓ |
| `rank` | ✓ | ✓ | ✓ | | ✓ |
| `symbol` | ✓ | ✓ (definition) | ✓ (expression) | | ✓ (formula) |
| `example` | | ✓ | ✓ (value) | | |
| `exampleLabel` | | | ✓ | | |
| `note` | | ✓ | ✓ | | |
| `chips` | | | | ✓ | |
| `edge` | | | | | ✓ |
| `panel` | inline | drawer | drawer | inline | drawer |
| `tip.connector` | | ✓ | ✓ | | |

### `panel`

A level with a `panel` gets an expand control. Without one, it isn't clickable.

| Form | Renders |
|---|---|
| string | Processed text |
| ReactNode / array | As is |
| `(rawLevel) => ReactNode` | The function's result |
| `{ text, facts, note, warn, content }` | A structured panel, below |

Structured panel fields, all optional and rendered in this order:

| Field | Shown as |
|---|---|
| `text` | Body text |
| `facts` | `[{ label, value }]` as a row of cells: a small label over a math-font value |
| `note` | Muted line |
| `content` | Any ReactNode (diagram, image, component) |
| `warn` | Amber warning bar |

---

## Theme

Pass a partial object to `theme`; it's merged over the defaults.

```js
export const DEFAULT_THEME = {
  bg:          '#ffffff',  // frame background (also the export background)
  panel:       '#ffffff',  // cards, panels, chips
  panelSoft:   '#eef4ff',  // tinted tier, risers, layer band 3
  panelSofter: '#f8fafc',  // hover / selected fill, layer band 2, leaves
  ink:         '#0f172a',  // body text, tooltip background
  title:       '#1e3a8a',  // navy: apex, foundation, root, baselines, symbols
  titleSoft:   '#bfd0f5',  // secondary text on navy
  titleLine:   '#3b5bb5',  // borders and dividers on navy
  muted:       '#64748b',  // ranks, subs, notes
  line:        '#e2e8f0',  // light dividers, frame
  line2:       '#cbd5e1',  // card borders, connectors
  accent:      '#1d4ed8',  // royal blue: tier bars, card tops, expand control, edges
  indigoSoft:  '#dbe6fd',  // chain bars, last riser, layer band 4
  warm:        '#b45309',  // amber bars (flag, rule, warn)
  warmSoft:    '#fffbeb',  // amber fills
  warmLine:    '#f2d48a',  // amber borders
  warmInk:     '#92400e',  // amber text
  fontSans:    "'Inter', system-ui, sans-serif",
  fontMono:    "'JetBrains Mono', ui-monospace, monospace",
  fontMath:    "'Cambria Math', 'STIX Two Math', 'Times New Roman', serif",
};
```

The key names are the same as v1. Only the values changed, so an existing `theme` override still works.

---

## Responsive

| Variant | Narrow screens |
|---|---|
| `pyramid` | Under 720px, tiers go full width and the symbol drops under the name |
| `staircase` | Under 820px, steps stack vertically with an indent; risers, arrows and the baseline labels hide |
| `chain` | Scrolls horizontally (minimum width 150px per level) |
| `layers` | Under 720px, chips drop under the name |
| `derivation` | Scrolls horizontally (minimum width 900px) |

---

## Examples

### pyramid

```js
const data = {
  axis: { top: 'first', label: 'precedence', bottom: 'last' },
  levels: [
    { id: 'p', name: 'Grouping', sub: 'evaluated before anything outside', symbol: '$(\\ )\\ [\\ ]$',
      panel: { text: 'Whatever sits inside a grouping is one value to the outside.',
               facts: [{ label: 'example', value: '$2(3+4) = 14$' }] } },
    { id: 'e', name: 'Exponents', sub: 'powers and roots', symbol: '$a^n,\\ \\sqrt{a}$' },
    { id: 'm', name: 'Multiplication · Division', sub: 'same rank, left to right', symbol: '$\\times\\ \\div$',
      panel: { text: 'Equal rank: read left to right.', warn: '$8 \\div 2 \\cdot 4 = 16$, not $1$' } },
    { id: 'a', name: 'Addition · Subtraction', sub: 'same rank, left to right', symbol: '$+\\ -$' },
  ],
  rule: { label: 'Rule', text: 'Operations of equal rank are applied left to right.' },
  walk: [
    { text: '$2 + 3 \\cdot 4^2$' }, { text: 'exponent', sep: true },
    { text: '$2 + 3 \\cdot 16$' }, { text: 'product', sep: true },
    { text: '$2 + 48$' }, { text: 'sum', sep: true }, { text: '$50$' },
  ],
};

<Hierarchy data={data} initialOpen={['m']} />
```

### staircase

```js
const data = {
  levels: [
    { id: 'add', name: 'Addition', symbol: '$a + b$', sub: 'from repeated succession', example: '$2 + 3 = 5$' },
    { id: 'mul', name: 'Multiplication', symbol: '$a \\cdot b$', sub: 'from repeated addition', example: '$2 \\cdot 3 = 6$',
      tip: { connector: 'iterate addition $b$ times' } },
    { id: 'pow', name: 'Exponentiation', symbol: '$a^b$', sub: 'from repeated multiplication', example: '$2^3 = 8$',
      note: 'loses commutativity', flag: true, panel: { warn: '$2^3 \\neq 3^2$' } },
  ],
  base: { start: 'simplest', middle: 'each step iterates the one before', end: 'fastest growth' },
};

<Hierarchy data={data} variant="staircase" />
```

### chain

```js
const data = {
  connector: '$\\ll$',
  levels: [
    { symbol: '$\\log n$', name: 'logarithmic', example: '$3.3$', exampleLabel: 'n = 10' },
    { symbol: '$n$', name: 'linear', example: '$10$', exampleLabel: 'n = 10' },
    { symbol: '$n^2$', name: 'quadratic', example: '$100$', exampleLabel: 'n = 10' },
    { symbol: '$2^n$', name: 'exponential', example: '$1024$', exampleLabel: 'n = 10', note: 'intractable', flag: true },
  ],
};

<Hierarchy data={data} variant="chain" />
```

### layers

```js
const data = {
  axis: { label: 'built on' },
  levels: [
    { name: 'Real', sub: '$\\mathbb{R}$ · complete the line', chips: [{ label: '$\\sqrt{2}$' }, { label: '$\\pi$' }] },
    { name: 'Rational', sub: '$\\mathbb{Q}$ · allow division', chips: [{ label: '$\\tfrac12$' }] },
    { name: 'Integer', sub: '$\\mathbb{Z}$ · allow subtraction', chips: [{ label: '$-4$' }, { label: '$7$' }] },
    { name: 'Natural', sub: '$\\mathbb{N}$ · counting', chips: [{ label: '$0$' }, { label: '$1$' }] },
  ],
};

<Hierarchy data={data} variant="layers" />
```

### derivation

```js
const data = {
  root: {
    id: 'pyth', symbol: '$\\sin^2 x + \\cos^2 x = 1$', name: 'Pythagorean identity',
    children: [
      { id: 'tan', symbol: '$\\tan^2 x + 1 = \\sec^2 x$', edge: { label: '÷ cos²x' },
        panel: 'Divide every term by $\\cos^2 x$.' },
      { id: 'cot', symbol: '$1 + \\cot^2 x = \\csc^2 x$', edge: { label: '÷ sin²x' } },
    ],
  },
};

<Hierarchy data={data} variant="derivation" initialOpen="tan" />
```

---

## Changes from v1

- **Visual only.** The data fields, props, theme keys, behaviour and imports are unchanged, so existing pages work without edits.
- **Default colours** moved from indigo to royal blue, navy and slate.
- **Style.** No gradients, shadows or glows. Borders are 1px, corners are 6px, and the tags are square-cornered.
- **Expand control.** It's a small outlined square with a thin plus that fills when open. In `chain` and `derivation` it sits in the card's corner instead of hanging off the bottom edge.
