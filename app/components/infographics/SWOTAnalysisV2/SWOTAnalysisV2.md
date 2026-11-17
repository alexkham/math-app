# SWOTAnalysisV2

One thing looked at from four sides: four titled boxes of short points in a 2 × 2 grid, with the thing itself named in the centre. It can also carry a label over each column and beside each row, for a split by two conditions. Every colour, label and setting comes from data, with defaults.

```jsx
import SWOTAnalysisV2 from '@/app/components/infographics/SWOTAnalysisV2/SWOTAnalysisV2';

<SWOTAnalysisV2 data={treeComponents} />
```

The component is a single file, `SWOTAnalysisV2.jsx`. It exports `DEFAULT_THEME`, `DEFAULT_TONES` and `DEFAULT_OPTIONS`.

It is a new version of `SWOTAnalysis.jsx`, which stays as it is and is not used on any page. What changed:

| | `SWOTAnalysis` | `SWOTAnalysisV2` |
|---|---|---|
| Formulas and links in text | shown as raw source | rendered, in titles, items and notes |
| Colours | yellow, pink, light blue, orange | site navy and blue; amber and slate on request |
| Styles | separate `SWOTAnalysis.css` | inside the one `.jsx` file |
| More than one per page | only the first is sized correctly | each works on its own |
| Column and row labels | none | optional |

**SWOTAnalysisV2 vs the other components:**

- **SWOTAnalysisV2:** exactly four parts of the same standing, each with a few short points.
- **Taxonomy:** the kinds of an object, any number of them, split by stated conditions.
- **FeatureMatrix:** several items compared on the same features, as a table.
- **ConceptMap (hub):** one concept and its related concepts in groups, each item a link.

---

## Contents

1. [Two ways to use it](#two-ways-to-use-it)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Interaction](#interaction)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)
9. [Where it is used](#where-it-is-used)

---

## Two ways to use it

There is one layout. What differs is what the four boxes stand for.

| Use | When | What to fill in |
|---|---|---|
| **Four sides of one thing** | A section gives four named groups of short points about one subject: four uses, four parts, four roles, or "what it is / what sets it apart / when it shines / when it is weak" | `center` and four `quadrants` |
| **Two conditions crossed** | A section splits a subject by two yes-or-no conditions, which gives four cases | the same, plus `axes` with the two column labels and the two row labels |

The number of boxes is always four. A section with three or five parts does not fit; do not merge or split parts to reach four.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `tones` | object | — | A partial tone set, merged over `DEFAULT_TONES`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.theme`, `data.tones` and `data.options` win).

---

## Data shape

```js
{
  header?:  { kicker?, title?, lede? },      // omit to hide; the page frame usually carries the title
  center:   { name, sub? },                  // the label in the middle
  axes?:    { cols?: [left, right], rows?: [top, bottom] },
  quadrants: [                               // exactly four, in reading order:
    {                                        //   top-left, top-right, bottom-left, bottom-right
      title,
      label?,                                // small label over the title
      tone?,                                 // a key of the tones
      items: [ string | { text, note? } ],
      say?                                   // a closing line for the box
    }
  ],
  note?:    { label, text },                 // a note under the grid
  theme?, tones?, options?
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and `[label](!/path)` links work everywhere, including titles, labels and axis labels.

| Field | |
|---|---|
| `center.name` | Bold line of the centre label. Keep it short; the label is at most 46% of the grid wide. |
| `center.sub` | Optional smaller second line. |
| `axes.cols` | Two labels, shown over the left and right columns. |
| `axes.rows` | Two labels, shown turned sideways beside the top and bottom rows. Keep each to about 14 characters, or it runs past its row. |
| `quadrants[].label` | Small upper-case label over the title, in the box's tone colour. Good for a symbol (`'$\\mu$'`) or a short tag (`'Quadrant II'`). |
| `quadrants[].tone` | `'a'`, `'b'`, `'c'`, `'d'` or a key you added. Without it the box takes its tone from its position. |
| `quadrants[].items` | A plain string is one line. `{ text, note }` adds a muted second line under it. |
| `quadrants[].say` | A muted closing line at the foot of the box, under a dashed rule. |
| `note` | A box under the grid with a blue left edge: small label, then text. |

Only the first four entries of `quadrants` are drawn.

---

## Interaction

- **Hover a box:** it is outlined in its tone colour and the other three dim.

There is nothing to click. Links inside the text are ordinary links.

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `tones` (`DEFAULT_TONES`)

A tone is the colour of a box's top edge, small label and bullets, and the tint of its heading.

```js
{
  a: { color: '#06357A', bg: '#e8eef7' },   // navy
  b: { color: '#2563EB', bg: '#eff6ff' },   // blue
  c: { color: '#B45309', bg: '#fff6e5' },   // amber
  d: { color: '#475569', bg: '#f1f5f9' }    // slate
}
```

By position the default is `a`, `b`, `b`, `a`: navy and blue on the two diagonals. Amber and slate appear only when a box sets `tone: 'c'` or `tone: 'd'`. Use amber for a box that is a warning or a limit (for example "Limitations"), not for decoration.

Add your own keys, e.g. `tones: { good: { color: '#2563EB', bg: '#dbeafe' } }`, and use them as `quadrants[].tone`.

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#06357A` | Box titles, header title, axis labels |
| `muted` | `#64748b` | Notes under items, closing lines, lede |
| `line` | `#e2e8f0` | Dividers inside boxes |
| `box` | `#c7cedb` | Box and card borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background, closing-line background |
| `navy` | `#06357A` | The centre label |
| `blue` | `#2563EB` | Kicker, note edge and note label |
| `onDark` | `#ffffff` | Text on the centre label |
| `link` | `#2563EB` | Links |
| `shadow` | `rgba(37, 99, 235, .12)` | Shadow of the hovered box and of the centre label |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `hover` | `true` | Hovering a box outlines it and dims the others |
| `bullets` | `true` | Draw a bullet before each item. Turn off when each box holds one sentence or one formula. |
| `counts` | `false` | Show the number of items at the right of each heading |

The fonts are Inter for text and JetBrains Mono for small labels, with KaTeX for maths.

### Phone width

Below 640 px the boxes stack in one column and the centre label moves to the top. The column and row labels are hidden there, because they no longer line up with anything. If the two conditions matter on a phone, repeat them in each box's `label`.

---

## Examples

### Four sides: `probability/tree-diagrams` → Components of a Tree Diagram

```js
const sw_treeComponents = {
  center: { name: 'Tree diagram', sub: 'its structural elements' },
  quadrants: [
    { title: 'Root', items: [ 'The starting point of the process, before any outcomes have occurred.' ] },
    { title: 'Branches', items: [ 'Lines extending from a node.', 'Each represents a possible outcome at a given stage.' ] },
    { title: 'Nodes', items: [ 'Points where branches meet or split.', 'They represent intermediate states of the process.' ] },
    { title: 'Paths', items: [ 'Sequences of connected branches from the root to a terminal node.', 'They represent complete outcome sequences.' ] }
  ],
  note: { label: 'Paths can differ in length', text: 'In a best-of-seven series some paths end after four games and others run to the seventh. Each leaf is still a complete outcome sequence.' }
};
```

### Four sides, with symbols as labels and a second line under an item: `probability/large-numbers-law` → Objects Involved in the Theorem

```js
const sw_llnObjects = {
  center: { name: 'Law of Large Numbers', sub: 'the objects involved' },
  quadrants: [
    { label: '$\\mu$', title: 'Population mean', items: [
      'The true [expected value](!/probability/expected-value) of the underlying distribution.',
      'The fixed value that the sample mean approaches.' ] },
    { label: '$X_1, X_2, \\dots, X_n$', title: 'Random variables', items: [
      'Independent copies of the same underlying [random variable](!/probability/random-variables).',
      'Each is drawn from the identical distribution with mean $\\mu$.' ] },
    { label: '$\\bar X_n$', title: 'Sample mean', items: [
      { text: 'The average of the first $n$ observations.', note: '$\\bar X_n = \\frac{1}{n}\\sum_{i=1}^n X_i$' },
      'Itself a random variable; as $n$ increases it concentrates near $\\mu$.' ] },
    { label: '$n$', title: 'Sample size', items: [
      'The number of observations used to compute the average.',
      'Larger $n$ produces stronger convergence.' ] }
  ],
  note: { label: 'What the theorem describes', text: 'Not how individual observations behave, but how the **sample mean** behaves as the sample size grows.' }
};
```

### Four sides, one box marked as a limit: `functions/graphs` → Graphing Technology

```js
const sw_graphingTechnology = {
  center: { name: 'Graphing technology', sub: 'calculators and software' },
  quadrants: [
    { title: 'Viewing window', items: [ /* … */ ] },
    { title: 'Trace', items: [ /* … */ ] },
    { title: 'Built-in tools', items: [ /* … */ ] },
    { title: 'Limitations', tone: 'c', items: [
      'No true asymptotic behavior, only increasingly steep curves within the finite window.',
      'No holes, unless the software is designed to indicate them.',
      'Rapid oscillations may appear as solid bands.' ] }
  ]
};
```

### Two conditions crossed: `linear-algebra/vector-spaces` → The Four Fundamental Subspaces

```js
const sw_fourSubspaces = {
  center: { name: '$m \\times n$ matrix $A$', sub: 'rank $r$' },
  axes: { cols: ['lives in $\\mathbb{R}^m$', 'lives in $\\mathbb{R}^n$'], rows: ['dimension $r$', 'the remainder'] },
  quadrants: [
    { title: 'Column space', items: [ 'Holds every output $A\\mathbf{x}$.', 'Dimension $r$.' ] },
    { title: 'Row space', items: [ 'Dimension $r$.', 'Orthogonal to the null space.' ] },
    { title: 'Left null space', items: [ 'Dimension $m - r$.', 'Orthogonal to the column space.' ] },
    { title: 'Null space', items: [ 'Holds every input that $A$ sends to zero.', 'Dimension $n - r$.' ] }
  ],
  note: { label: 'Fixed by the rank', text: 'All four dimensions are fixed by the [rank](!/linear-algebra/matrix/rank) $r$, and the two subspaces in each column meet at right angles.' }
};
```

The order matters here: top-left is (first column, first row), top-right is (second column, first row), and so on.

### Two conditions crossed, a formula as each title, no bullets: `algebra/logarithms/properties` → Asymptotic Behavior

```js
const sw_logEnds = {
  center: { name: '$\\log_a(x)$', sub: 'at the two ends of its domain' },
  axes: { cols: ['$a > 1$', '$0 < a < 1$'], rows: ['$x \\to 0^+$', '$x \\to \\infty$'] },
  options: { bullets: false },
  quadrants: [
    { label: 'Plunges downward', title: '$-\\infty$', items: [ '$\\lim_{x \\to 0^+} \\log_a(x) = -\\infty$', 'The graph approaches the $y$-axis without touching it.' ] },
    { label: 'Rises upward', title: '$+\\infty$', tone: 'b', items: [ /* … */ ] },
    { label: 'Increases without bound', title: '$+\\infty$', tone: 'b', items: [ /* … */ ] },
    { label: 'Decreases without bound', title: '$-\\infty$', tone: 'a', items: [ /* … */ ] }
  ],
  note: { label: 'Vertical asymptote', text: 'The line $x = 0$ (the $y$-axis) is a vertical asymptote for every logarithmic function.' }
};
```

Here the tones are set so that boxes with the same value share a colour.

---

## Embedding on a page

Use the same pattern as the other infographics: put the data in a `const` after the imports, and place the component in the section's `content` array, wrapped in the page's `DiagramFrame`.

```jsx
<DiagramFrame
  key={'four-sides-tree-diagram-components'}
  id="tree-diagram-components"
  title="Components of a Tree Diagram"
  source="/probability/tree-diagrams"
  related={false}
>
  <SWOTAnalysisV2 data={sw_treeComponents} />
</DiagramFrame>
```

The frame carries the title, so leave `header` out of the data. Use `header` only where the component stands without a frame.

Place it as the last item of the section, after the text and after any demo unit with its caption. If the section ends with a link pill ("How to …"), place it before the pill.

---

## Authoring tips

- **Read the section first.** Take the four parts from the text. The titles are the text's own headings or bold names; the items are its sentences, cut to one clause each.
- **Exactly four, of the same standing.** A fifth bullet of a different sort (an intro line, a summary) goes in `note`, not in a box. If two of the four overlap, the section does not fit.
- **Short points.** One to four items per box. A box that would hold a paragraph or a derivation does not fit this layout.
- **One point per box is thin.** It still works with `options: { bullets: false }`, but check that the diagram adds something beyond the list it repeats.
- **Centre label:** the subject in two or three words, with an optional caption taken from the section's first sentence.
- **Two conditions crossed:** write the two conditions as the column and row labels and check each box against its column and its row before saving. Keep row labels short.
- **Tones:** leave them alone unless colour carries meaning: amber for a limit or warning, or the same tone for boxes that share a value.
- **Typewriter text** (`$\\texttt{floor}$`) is blank until its web font has loaded. Wait for the fonts before judging a screenshot.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\mu'`, `'\\frac'`), and use double quotes for strings that contain an apostrophe.

---

## Where it is used

27 frames on 24 lesson pages, placed 2026-11-15.

### After a demo unit or the page's own widget (9)

In these sections the frame comes after the demo unit and its caption sentence.

| Page | Section | Use |
|---|---|---|
| `/algebra/inequalities/quadratic` | Solving When the Discriminant Is Negative | two conditions crossed |
| `/complex-numbers/additive-inverse` | Geometric Interpretation | four sides |
| `/functions/properties` | Increasing and Decreasing | two conditions crossed |
| `/functions/transformations` | Combining Transformations | two conditions crossed |
| `/probability/distributions/continuous/exponential` | Probability Density Function (PDF) and Support | four sides |
| `/probability/distributions/continuous/normal` | Probability Density Function (PDF) and Support | four sides |
| `/probability/distributions/continuous/uniform` | Probability Density Function (PDF) and Support | four sides |
| `/probability/variance` | Why Squaring the Distance? | four sides |
| `/trigonometry/graphs` | The General Sinusoidal Form | two conditions crossed |

### On a section that showed text only (18)

| Page | Section | Use |
|---|---|---|
| `/algebra/logarithms/properties` | Asymptotic Behavior | two conditions crossed |
| `/algebra/powers/zero-powers` | $0^0$ in Discrete Mathematics | four sides |
| `/arithmetic/integer-part` | In Calculators and Programming Languages | four sides |
| `/calculus/limits/infinity` | Limits of Exponentials at Infinity | two conditions crossed |
| `/calculus/limits/one-sided` | Applications of One-Sided Limits | four sides |
| `/functions/domain` | Domain from Context | four sides |
| `/functions/graphs` | Graphing Technology | four sides |
| `/linear-algebra/orthogonality` | Why Orthogonality Matters | four sides |
| `/linear-algebra/vector-spaces` | The Four Fundamental Subspaces | two conditions crossed |
| `/probability/distributions/continuous/exponential` | Real-World Examples and Common Applications | four sides |
| `/probability/distributions/continuous/normal` | Real-World Examples and Common Applications | four sides |
| `/probability/distributions/continuous/uniform` | Real-World Examples and Common Applications | four sides |
| `/probability/indicators` | Indicators in Probability Models | four sides |
| `/probability/large-numbers-law` | Objects Involved in the Theorem | four sides |
| `/probability/probability-function` | What Questions It Answers | four sides |
| `/probability/sample-space` | Properties of a Sample Space | four sides |
| `/probability/tree-diagrams` | Components of a Tree Diagram | four sides |
| `/trigonometry/sines-cosines-law` | Applications | four sides |
