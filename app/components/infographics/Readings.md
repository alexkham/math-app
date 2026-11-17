# Readings

One idea, several readings of it, side by side. Use it for a page's "Interpretation" sections: the same formula read in different ways, a chain of quantities where each is the rate of change of the one before, or equations paired with what they ask and their picture on a number line. Every colour, label and setting comes from data, with defaults.

```jsx
import Readings from '@/app/components/infographics/Readings';

<Readings data={matrixProduct} variant="lenses" />
```

The component is a single file, `Readings.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Interaction](#interaction)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **lenses** (default) | One object explained in several ways (entry, column, row, outer-product views of $AB$) | A list of readings on the left, each with a short tag. The selected reading on the right shows its formula, its explanation and where it helps. |
| **ladder** | A chain where each step is the rate of change of the one above (position → velocity → acceleration → …) | The rungs, with symbol, name, order and meaning, joined by "rate of change" arrows. A worked example sits beside them, and hovering a rung highlights its row in the example. |
| **dictionary** | Equations or forms paired with what they ask and a picture | A three-column table: the algebra, what it asks (with optional cases), and a number line drawing with a caption. |

`variant` selects the layout. An unknown value falls back to `lenses`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'lenses' \| 'ladder' \| 'dictionary'` | `'lenses'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data**. That is, `data.labels`, `data.theme` and `data.options` override the props.

---

## Data shape

Every variant shares the outer object:

```js
{
  header?: { kicker?, title?, lede? },   // omit header to hide it
  note?:    { label, text },             // blue box
  pitfall?: { label, text },             // gold box
  labels?, theme?, options?,
  // + the variant's own fields below
}
```

Every text field goes through `processContent`, so `$…$`, `$$…$$`, `**bold**` and links work everywhere.

`note` and `pitfall` appear under the diagram, side by side when both are given. In `ladder`, the pitfall sits in the side column under the example, and the note goes underneath.

### lenses

```js
readings: [{
  name,          // tab label
  short?,        // one-line tag under the name (hidden on phones)
  title?,        // heading of the pane (default name)
  formula?,      // shown in a blue box; $$…$$ for display maths
  text,          // the explanation
  use?           // shown after "Where it helps"
}],
initial?         // index of the reading shown first (default options.initial)
```

### ladder

```js
rate?,                          // text on the arrows between rungs (default labels.rate)
rungs: [{
  symbol,                       // e.g. "$s''(t)$"
  name,
  order?,                       // shown as "order 2"
  meaning?,
  minor?                        // greyed: a rung that is named but rarely used
}],
example?: {
  label,                        // header of the example box
  rows: [{ rung, name, formula, value }],   // rung = index into rungs, for the hover link
  sayLabel?, say?               // a note under the example
}
```

### dictionary

```js
dictionary: {
  leftLabel?, midLabel?, rightLabel?,   // column headers (default labels.*)
  rows: [{
    algebra,                            // e.g. '$|x - a| = d$'
    reading,                            // what it asks
    cases?: [text, ...],                // bullet list under the reading
    figure?: {
      from, to,                         // range of the number line; integer ticks
      marks?:  [[value, label, 'sol'?], ...],   // dots; 'sol' = gold solution dot
      spans?:  [[from, to, label?], ...],       // blue distance brackets above the line
      interval?: [from, to]                     // a gold stretch on the line
    },
    caption?                            // under the figure
  }]
}
```

---

## Interaction

- **lenses:** click a reading to show it. On phones the list becomes a row of tabs.
- **ladder:** hover a rung to highlight it and its row in the example. Turn this off with `options.hover: false`.
- **dictionary:** no interaction.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `whereItHelps` | `'Where it helps'` | lenses, before `use` |
| `rate` | `'rate of change'` | ladder arrows, when `data.rate` is not given |
| `order` | `'order {n}'` | ladder rung tag |
| `leftLabel`, `midLabel`, `rightLabel` | `'Algebra'`, `'Asks'`, `'Picture'` | dictionary headers, when `dictionary.*Label` is not given |

### `theme` (`DEFAULT_THEME`)

| Key | Default | |
|---|---|---|
| `ink`, `title`, `muted` | `#1e293b`, `#1e3a8a`, `#64748b` | text |
| `line`, `box` | `#e2e8f0`, `#c7cedb` | dividers, box borders |
| `panel`, `soft`, `headBg` | `#ffffff`, `#f8fafc`, `#eff6ff` | backgrounds |
| `navy`, `blue`, `blueSoft` | `#1e3a8a`, `#2563eb`, `#dbeafe` | tabs, accents, note boxes |
| `gold`, `goldBg`, `goldInk` | `#ca8a04`, `#fef3c7`, `#a16207` | pitfall boxes |
| `slate`, `slateBg`, `onDark` | `#475569`, `#f1f5f9`, `#ffffff` | |
| `axis` | `#94a3b8` | number line and ticks (dictionary) |
| `span` | `#2563eb` | distance brackets |
| `interval` | `#ca8a04` | gold stretch |
| `mark`, `markFill` | `#1e3a8a`, `#ffffff` | ordinary dots |
| `solution`, `solutionInk` | `#ca8a04`, `#a16207` | solution dots and their labels |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `initial` | `0` | lenses: index of the reading shown first (`data.initial` overrides it) |
| `hover` | `true` | ladder: hovering a rung highlights it |

---

## Examples

### lenses: `linear-algebra/matrix/operations` → Column and Row Interpretations

```js
const matrixProduct = {
  header: { kicker: 'Matrices', title: 'Matrix Multiplication — Column and Row Interpretations', lede: 'The entry-by-entry formula is the most common way to define matrix multiplication, but other viewpoints often provide sharper insight.' },
  readings: [
    { name: 'Entries', short: 'row times column', title: 'Entry by entry', formula: '$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$',
      text: 'The most common way to define matrix multiplication.' },
    { name: 'Columns', short: '$A$ acts on each column', title: 'Column interpretation', formula: '$$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$',
      text: 'Column $j$ of $AB$ is $A$ times column $j$ of $B$. Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$.',
      use: 'Connects matrix multiplication to linear transformations: $AB$ applies $A$ to each column of $B$ independently.' },
    { name: 'Rows', short: 'each row times $B$', title: 'Row interpretation',
      text: 'Row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.' },
    { name: 'Outer products', short: 'sum of rank-one pieces', title: 'Sum of outer products', formula: '$$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$',
      text: 'Each term is an $m \\times p$ matrix of rank at most one, and their sum is the full product.',
      use: 'Low-rank approximation theory and the analysis of the singular value decomposition.' }
  ]
};
```

### ladder: `calculus/derivatives/higher-order` → Physical Interpretation

```js
const kinematics = {
  header: { kicker: 'Higher-order derivatives', title: 'Physical Interpretation', lede: 'In kinematics, the derivatives of position $s(t)$ have standard names.' },
  rungs: [
    { symbol: "$s(t)$", name: 'position' },
    { symbol: "$s'(t)$", name: 'velocity', order: 1, meaning: 'speed and direction of motion' },
    { symbol: "$s''(t)$", name: 'acceleration', order: 2, meaning: 'force-related quantity in Newton\'s second law' },
    { symbol: "$s'''(t)$", name: 'jerk', order: 3, meaning: 'felt physically as a sudden push or lurch' },
    { symbol: '$s^{(4)}(t)$', name: 'snap (or jounce)', order: 4, minor: true, meaning: 'specialised engineering use' }
  ],
  example: {
    label: '$s(t) = t^3$ at $t = 2$',
    rows: [
      { rung: 0, name: 'position', formula: '$t^3$', value: '$8$' },
      { rung: 1, name: 'velocity', formula: '$3t^2$', value: '$12$' },
      { rung: 2, name: 'acceleration', formula: '$6t$', value: '$12$' }
    ]
  }
};
```

### dictionary: `algebra/equations/absolute-value` → Geometric Interpretation

```js
const absGeometric = {
  header: { kicker: 'Absolute value equations', title: 'Geometric Interpretation', lede: 'Absolute value measures distance on the number line.' },
  dictionary: {
    leftLabel: 'Equation', midLabel: 'Asks', rightLabel: 'On the number line',
    rows: [
      { algebra: '$|x - a| = d$', reading: 'Which points are exactly $d$ units from $a$? Two, one on each side: $x = a \\pm d$.',
        figure: { from: 1, to: 9, marks: [[5, '5'], [2, '2', 'sol'], [8, '8', 'sol']], spans: [[2, 5, '3'], [5, 8, '3']] }, caption: '$|x - 5| = 3$' },
      { algebra: '$|x - a| = |x - b|$', reading: 'Which point is equidistant from $a$ and $b$? Exactly one: the midpoint $x = \\frac{a + b}{2}$.',
        figure: { from: 0, to: 8, marks: [[1, '1'], [7, '7'], [4, '4', 'sol']], spans: [[1, 4, '3'], [4, 7, '3']] }, caption: '$|x - 1| = |x - 7|$' },
      { algebra: '$|x - a| + |x - b| = d$', reading: 'Which points have total distance $d$ to $a$ and $b$? The minimum is $|a - b|$.',
        cases: ['$d < |a - b|$: no solution', '$d = |a - b|$: every point of $[a, b]$', '$d > |a - b|$: two, one beyond each endpoint'],
        figure: { from: 0, to: 8, interval: [2, 6], marks: [[2, 'a'], [6, 'b']] }, caption: '$d = |a - b|$: the whole interval' }
    ]
  },
  note: { label: 'Why it helps', text: 'These readings do not replace the algebraic method, but they check the number and location of solutions before any computation begins.' }
};
```

### Customised from data

```js
{
  ...matrixProduct,
  initial: 1,
  labels: { whereItHelps: 'Used in' },
  theme: { blue: '#0f766e', blueSoft: '#ccfbf1', headBg: '#f0fdfa' }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj9-diagram"
  id="matrix-product-readings"
  title="Column and Row Interpretations"
  source="/linear-algebra/matrix/operations"
>
  <Readings data={matrixProduct} variant="lenses" />
</DiagramFrame>
```

Good homes are sections titled "Interpretation", "Geometric Interpretation", "Physical Interpretation" or "Other Viewpoints", where the page explains one idea in several paragraphs that each start from a different angle.

---

## Authoring tips

- **One reading per paragraph:** each reading on the page becomes one entry. Keep its opening sentence as `text` and put its displayed formula in `formula`.
- **lenses `short`:** a few words that tell the readings apart at a glance ("row times column", "sum of rank-one pieces").
- **ladder `minor`:** mark the rungs the page names but treats as rare, so the main chain stands out.
- **dictionary figures:** choose a range that leaves a tick or two of space around the marks. Use `'sol'` only on the points that answer the question.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\sum'`, `'\\frac'`). Primes are fine in double-quoted strings (`"$s''(t)$"`).
