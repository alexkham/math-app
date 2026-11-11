# CaseGraph

Cases shown on graphs. Either one graph is split into cases (intervals between roots, with their signs), or a grid of small graphs covers every combination of two or more case axes. Both variants are interactive. Every colour, label and setting comes from data, with defaults.

```jsx
import CaseGraph from '@/app/components/infographics/CaseGraph/CaseGraph';

<CaseGraph data={signAnalysis} variant="graph" />
```

The component is a single file, `CaseGraph/CaseGraph.jsx`, with these docs beside it. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

For cases without graphs (substitutions, outcomes, parameter values, a labelled plane), use **SpecialCases**. The two share the outer data shape (`header`, `general`, `note`, `pitfall`, `labels`, `theme`, `options`).

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Interaction](#interaction)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Phones](#phones)
9. [Pages using it](#pages-using-it)
10. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **graph** (default) | One function whose sign changes across intervals | The graph split at its roots, each interval shaded by sign, the solution set marked in gold on the axis. Beside it, a table of intervals with each factor's sign and the product's sign. An optional switch changes the inequality. |
| **grid** | Cases that depend on two or more parameters | Rows × columns of small graphs, one per combination, each with its sign pattern and solution. Any further axis becomes a switch above the grid. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `graph`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'graph' \| 'grid'` | `'graph'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:  { kicker?, title?, lede? },   // omit header to hide it
  general?: { label?, text, say? },       // a box above the graph; label defaults to labels.general
  note?:    { label, text },              // blue note
  pitfall?: { label, text },              // gold note; side by side with the note when both are given
  labels?:  { ... },
  theme?:   { ... },
  options?: { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere. Graph data contains functions, so it must live in a JS module, not in JSON or a getStaticProps return value.

### graph

```js
graph: {
  f: (x) => number,                  // the function
  x0, x1,                            // the visible x-range
  y0, y1,                            // the visible y-range; the curve is clipped outside it
  cuts?: [number],                   // where to split: roots, shown as dashed lines and hollow dots
  cutLabels?: [string],              // labels under the dots (plain text, e.g. '−2'); default String(cut)
  factorsLabel?: string,             // heading of the factors column, e.g. '$(x+2)\\ (x-1)\\ (x-5)$'
  select?: 1 | -1,                   // fixed: mark where f > 0 (1) or f < 0 (-1)
  question?, answer?,                // fixed: the box above the graph
  switch?: {                         // or let the reader choose:
    label?,                          // default labels.switchLabel
    initial?,                        // option id; default the first
    options: [{ id, label, sign: 1 | -1, closed?, question?, answer? }]
  },
  rule?: string                      // a line under the table
},
cases: [{ name, from, to, signs?: [1 | -1] }]   // one per interval; ±Infinity for the ends
```

| Field | |
|---|---|
| `cases[].from`, `to` | The interval. Shading and its sign are taken from `f` at the midpoint of the visible part. |
| `cases[].signs` | The sign of each factor on the interval, shown as + / − chips. Leave out for no chips. |
| `switch.options[].closed` | Draws the root dots filled, for ≤ and ≥. |

### grid

```js
grid: {
  x0, x1, y0, y1,                    // the same ranges for every cell
  axes: [Axis, Axis, …],             // two or more
  layout?: { rows: axisId, cols: axisId },   // default: the first two axes
  cells: { 'optA|optB': Cell },      // keyed by the shape axes' option ids, in axes order
  emptySolutions?: [string]          // solutions shown muted (default ['$\\varnothing$'])
}
```

**Axis**

```js
{ id, name, select?, initial?, options: [{ id, label, sub?, sign? , closed? }] }
```

| Field | |
|---|---|
| `name` | Shown on the axis picker and on the axis's switch. |
| `select` | Marks the axis that picks the inequality: its options carry `sign` (and optionally `closed`). At most one. Every other axis is a shape axis. |
| `options[].label`, `sub` | Heading text and a small line under it. |

**Cell**

```js
{ f, roots?: [{ x, label }], intervals?: [{ from, to }], pattern?, solution? }
```

| Field | |
|---|---|
| `f` | The cell's function. |
| `roots` | Dots on the axis with italic labels (plain text, e.g. `'r₁'`). |
| `intervals` | Where the shading splits; usually at the roots. Default: one interval. |
| `pattern` | The sign pattern under the graph, e.g. `'+  −  +'`. |
| `solution` | A string, or a map from the select axis's option ids to strings. |

A cell is looked up by its **shape axes** only; the select axis decides which part of the graph is marked and which `solution` entry shows. So a cell is written once and serves every inequality.

---

## Interaction

**graph**

- **Hover an interval** on the graph or a row in the table: that interval is highlighted in both, and the others dim.
- **Switch** (if given): changes the question, the answer, the gold solution on the axis and the "in" marks in the table.

**grid**

- **Axis picker** (three or more axes): choose which axis goes on rows and which on columns. Choosing the axis that is on the other slot swaps them. Every remaining axis becomes a switch.
- **Hover a cell:** its row and column headings light up.
- **Click a heading** (or Enter / Space): focus that row or column. The rest dims. Click a row and a column to outline their one shared cell; click again to release. A "Clear focus" link appears while anything is focused.
- **Switches:** set the value of each axis not on the grid.

Nothing changes the height of the card.

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `general` | `'General'` | Label of the general box |
| `interval` / `factors` / `sign` | `'Interval'` / `'Factors'` / `'Sign'` | graph: table headings (`factors` when `factorsLabel` is missing) |
| `inSolution` | `'in'` | graph: the mark on intervals in the solution |
| `positive` / `negative` / `solution` | `'positive'` / `'negative'` / `'solution'` | graph: the key under the graph |
| `switchLabel` | `'Solve'` | graph: switch label when `switch.label` is missing |
| `rows` / `columns` | `'Rows'` / `'Columns'` | grid: axis picker |
| `hint` | `'Hover a cell to see its row and column; click a heading to focus it.'` | grid: line under the grid |
| `clear` | `'Clear focus'` | grid: the reset link |

### `theme` (`DEFAULT_THEME`)

Page:

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, headings |
| `muted` | `#64748b` | Lede, labels, patterns, hint |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background, row headings |
| `headBg` | `#eff6ff` | Column headings, hovered rows and cells |
| `navy` | `#1e3a8a` | General edge, active switch, focused headings |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Note edge, outlined cell, highlighted headings |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Pitfall, answers, solutions, "in" marks |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | Switch text |
| `onDark` | `#ffffff` | Text on navy and on the sign dots |

Graph:

| Key | Default | Used for |
|---|---|---|
| `curve` | `#1e3a8a` | The function |
| `axis` | `#94a3b8` | The x-axis |
| `cut` | `#c7cedb` | Dashed lines at the cuts |
| `positiveFill` / `negativeFill` | `#dbeafe` / `#fef3c7` | Area between curve and axis where f > 0 / f < 0 |
| `solutionLine` | `#ca8a04` | The solution marked on the axis |
| `hoverBand` | `#eff6ff` | Band behind a hovered interval |
| `rootFill` / `rootStroke` / `rootLabel` | `#ffffff` / `#1e3a8a` / `#1e3a8a` | Root dots and their labels |

Sign chips (graph table):

| Key | Default | |
|---|---|---|
| `posChipBg` / `posChipInk` | `#dbeafe` / `#2563eb` | + factor chip |
| `negChipBg` / `negChipInk` | `#f1f5f9` / `#475569` | − factor chip |
| `posDot` / `negDot` | `#2563eb` / `#ca8a04` | The product's sign |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `hover` | `true` | graph: interval ↔ row highlighting; grid: heading highlight |
| `key` | `true` | graph: the colour key |
| `marks` | `true` | graph: the "in" marks |
| `arrow` | `'→'` | graph: between question and answer |
| `focus` | `true` | grid: clickable headings |
| `axisPicker` | `true` | grid: the Rows / Columns picker (shown with three or more axes) |
| `width` / `height` | `420` / `230` | graph: the SVG's coordinate size (it scales to the box) |
| `cellWidth` / `cellHeight` | `200` / `104` | grid: each cell's SVG size |
| `samples` / `cellSamples` | `260` / `120` | Points sampled along the curve |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths and graph labels, with KaTeX.

---

## Examples

From the demo (`info_case_graph.html`).

### graph: `algebra/inequalities/polynomial` → Factored Form and Sign Analysis

```js
export const signAnalysis = {
  header: { kicker: 'Polynomial inequalities', title: 'Factored Form and Sign Analysis', lede: 'The roots split the line into intervals. In each, every factor has one sign, and the product follows.' },
  graph: {
    f: (x) => (x + 2) * (x - 1) * (x - 5),
    x0: -3.2, x1: 6.2, y0: -30, y1: 30,
    cuts: [-2, 1, 5], cutLabels: ['−2', '1', '5'],
    factorsLabel: '$(x+2)\\ (x-1)\\ (x-5)$',
    switch: {
      label: 'Solve',
      options: [
        { id: 'lt', label: '$< 0$', sign: -1, question: '$(x + 2)(x - 1)(x - 5) < 0$', answer: '$(-\\infty, -2) \\cup (1, 5)$' },
        { id: 'gt', label: '$> 0$', sign: 1, question: '$(x + 2)(x - 1)(x - 5) > 0$', answer: '$(-2, 1) \\cup (5, \\infty)$' }
      ]
    },
    rule: 'On any interval between roots, a product is negative exactly when an odd number of its factors are negative.'
  },
  cases: [
    { name: '$(-\\infty, -2)$', from: -Infinity, to: -2, signs: [-1, -1, -1] },
    { name: '$(-2, 1)$', from: -2, to: 1, signs: [1, -1, -1] },
    { name: '$(1, 5)$', from: 1, to: 5, signs: [1, 1, -1] },
    { name: '$(5, \\infty)$', from: 5, to: Infinity, signs: [1, 1, 1] }
  ],
  pitfall: { label: 'Misreading a reversed factor', text: 'Reading $(5 - x)$ in $(x + 2)(x - 1)(5 - x) < 0$ like $(x - 5)$ gives $(-\\infty, -2) \\cup (1, 5)$, but $x = 3$ gives $5 \\cdot 2 \\cdot 2 = 20 > 0$. The factor $5 - x$ is positive left of $5$, so the answer is $(-2, 1) \\cup (5, \\infty)$.' }
};
```

### grid: `algebra/inequalities/quadratic` → Summary of Quadratic Inequality Cases

```js
const r2 = [{ x: -1, label: 'r₁' }, { x: 1, label: 'r₂' }];
const r1 = [{ x: 0, label: 'r' }];
const three = [{ from: -Infinity, to: -1 }, { from: -1, to: 1 }, { from: 1, to: Infinity }];
const two = [{ from: -Infinity, to: 0 }, { from: 0, to: Infinity }];

export const quadraticCases = {
  header: { kicker: 'Quadratic inequalities', title: 'Summary of Quadratic Inequality Cases', lede: 'The discriminant fixes how many intervals there are; the sign of $a$ fixes which way the parabola opens.' },
  general: { label: 'Expression', text: '$ax^2 + bx + c, \\quad \\Delta = b^2 - 4ac$' },
  grid: {
    x0: -1.8, x1: 1.8, y0: -2.4, y1: 2.4,
    axes: [
      { id: 'a', name: '$a$', options: [
        { id: 'up', label: '$a > 0$', sub: 'opens upward' },
        { id: 'down', label: '$a < 0$', sub: 'opens downward' } ] },
      { id: 'd', name: '$\\Delta$', options: [
        { id: 'pos', label: '$\\Delta > 0$', sub: '2 roots, 3 intervals' },
        { id: 'zero', label: '$\\Delta = 0$', sub: '1 repeated root' },
        { id: 'neg', label: '$\\Delta < 0$', sub: 'no real roots' } ] },
      { id: 'ineq', name: 'Inequality', select: true, options: [
        { id: 'gt', label: '$> 0$', sign: 1 },
        { id: 'lt', label: '$< 0$', sign: -1 } ] }
    ],
    layout: { rows: 'a', cols: 'd' },
    cells: {
      'up|pos':    { f: (x) => x * x - 1,  roots: r2, intervals: three, pattern: '+  −  +', solution: { gt: '$(-\\infty, r_1) \\cup (r_2, \\infty)$', lt: '$(r_1, r_2)$' } },
      'up|zero':   { f: (x) => x * x,      roots: r1, intervals: two,   pattern: '+  0  +', solution: { gt: 'all $x \\neq r$', lt: '$\\varnothing$' } },
      'up|neg':    { f: (x) => x * x + 1,                                pattern: '+',       solution: { gt: '$(-\\infty, \\infty)$', lt: '$\\varnothing$' } },
      'down|pos':  { f: (x) => 1 - x * x,  roots: r2, intervals: three, pattern: '−  +  −', solution: { gt: '$(r_1, r_2)$', lt: '$(-\\infty, r_1) \\cup (r_2, \\infty)$' } },
      'down|zero': { f: (x) => -x * x,     roots: r1, intervals: two,   pattern: '−  0  −', solution: { gt: '$\\varnothing$', lt: 'all $x \\neq r$' } },
      'down|neg':  { f: (x) => -x * x - 1,                               pattern: '−',       solution: { gt: '$\\varnothing$', lt: '$(-\\infty, \\infty)$' } }
    }
  },
  note: { label: 'Non-strict', text: 'For $\\geq 0$ or $\\leq 0$, include the roots where the expression equals zero.' }
};
```

The cells are keyed `a|d` (the shape axes, in `axes` order). The `ineq` axis is the select axis, so it never appears in a key; it picks the `solution` entry and the marked part of each graph, whether it is on the grid or on a switch.

### Customised from data

```js
{
  ...quadraticCases,
  labels:  { rows: 'Down', columns: 'Across', hint: '' },
  theme:   { positiveFill: '#e0e7ff', negativeFill: '#fef9c3', solutionLine: '#b45309', curve: '#0f172a' },
  options: { axisPicker: false, cellHeight: 90 }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj9-diagram"
  id="quadratic-inequality-cases"
  title="Summary of Quadratic Inequality Cases"
  source="/algebra/inequalities/quadratic"
>
  <CaseGraph data={quadraticCases} variant="grid" />
</DiagramFrame>
```

How the site places it:
- **The data holds functions, so it cannot go through `getStaticProps`.** It is a module-level `const caseGraphData = …` right after the page's imports, and the frame uses it directly (no prop).
- Beside the page's own text, never instead of it. If the section goes on after the cases, the rest moves into a new field of the section, `afterGraph`, rendered after the frame.
- Everything shown comes from the page: its function, its cut points, its answers. A section that stops before the signs or the solution (for example at the critical points) is not completed by the frame.
- Skip sections that already show the same cases: a table, a demo unit, a FunctionAnalysis or other frame. Tables stay.
- Leave out `rule` when the page paragraph right after the frame says the same thing.
- Site palette: `theme: { title, navy: '#06357A', blue: '#2563EB', gold, goldInk: '#B45309', curve: '#06357A', solutionLine: '#B45309', rootStroke: '#06357A', rootLabel: '#06357A', posDot: '#2563EB', negDot: '#B45309' }`. `related={false}`.

The sign-chart, discriminant and "direction depends on the base" sections named in the first version of these docs were all taken by tables, demo units or other frames by 2026-11-09, so the grid layout is not used on the site yet.

## Phones

- graph: the graph, then the interval table, stack under 680 px. Keep case names short (`'$x < 2$'`), since long names wrap into several lines.
- grid: under 680 px the row-heading column narrows to 58 px (`--cg-rowhead`) and the cell text shrinks, so a 2 × 3 grid fits a 375 px screen without sideways scroll.

## Pages using it

2 frames, placed 2026-11-09. Both use the graph layout.

| Page | Frame | Section |
|---|---|---|
| `/calculus/limits/infinity` | `infinite-limit-sign-sides` | Sign Analysis for Infinite Limits: $\frac{1}{x - 2}$, switch $2^+$ / $2^-$ |
| `/algebra/logarithms/inequalities` | `log-base-below-one-sign-graph` | Base Between Zero and One: $\log_{1/2}(x) - 3$, switch $> 3$ / $< 3$ |

---

## Authoring tips

- **Take the content from the page:** sign-chart paragraphs give the intervals and factor signs; summary tables give the grid's rows, columns, patterns and solutions.
- **Representative functions:** a grid cell needs a function only to show the shape. Pick simple ones ($x^2 - 1$, $x^2$, $x^2 + 1$ and their negatives) and keep the same `x0…y1` for every cell so the shapes compare.
- **Ranges:** choose `y0`, `y1` so the turning points are visible; anything beyond is clipped cleanly.
- **Labels inside graphs** (`cutLabels`, root `label`) are plain SVG text: write `'−2'`, `'r₁'` directly, without `$…$`.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\Delta'`, `'\\varnothing'`).
