# Taxonomy

A family of objects split into kinds: what types exist, what defines each one, and how they relate. There are three layouts. Every colour, label and setting comes from data, with defaults.

```jsx
import Taxonomy from '@/app/components/infographics/Taxonomy';

<Taxonomy data={discontinuities} variant="tree" />
```

The component is a single file, `Taxonomy.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

**Taxonomy vs the other components:**

- **Taxonomy:** the *kinds* of an object, and what defines each kind. An overview, not a procedure.
- **DecisionMaker:** a path of questions that leads to an action.
- **SpecialCases:** one rule and what it turns into in particular cases.
- **CaseGraph:** one function split by conditions, and what happens in each case.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Sketches](#sketches)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **tree** (default) | The kinds split by one or two defining conditions | A root, one branch per condition, and the kinds as leaves under their branch, each with its condition, an example and an optional sketch. Hovering a leaf outlines it. |
| **scale** | The kinds are ordered by a number (degree, order, dimension) | A numbered axis with one step per kind: name, sketch, general form, short note. Hovering or clicking a step (or Enter / Space) shows its description and examples underneath. |
| **facets** | The kinds come from several independent criteria | One box per criterion with its kinds. Kinds can link to each other ("converts to", "contains"); hovering a kind highlights it and its links and dims the rest. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `tree`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'tree' \| 'scale' \| 'facets'` | `'tree'` | |
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
  note?:    { label, text },              // blue note under the layout (tree, facets)
  labels?:  { ... },
  theme?:   { ... },
  options?: { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere. Data with sketches contains functions, so it must live in a JS module, not in JSON or a getStaticProps return value.

### tree

```js
tree: {
  root: { name, sub? },
  branches: [{
    condition?,                  // the condition shown in the dashed pill; leave out for no pill
    label?,                      // the word before it, default labels.branchIf ('if')
    leaves: [{ name, condition, example?, sketch? }]
  }]
}
```

Branch widths follow their number of leaves, so the leaves line up in one row. Connectors are drawn from the root to each branch and from each branch to its leaves.

### scale

```js
scale: {
  axisLabel?,                    // small label over the first step, e.g. 'degree'
  initial?,                      // index of the step selected at first (default 0)
  steps: [{
    key,                         // the number in the circle, e.g. '2' or '$n$'
    name,
    form?,                       // general form, in the maths font
    short?,                      // a muted line under the form
    sketch?,
    text?, examples?,            // shown underneath when the step is selected
    open?,                       // dashed circle, for an open-ended last step
    muted?                       // muted name
  }]
}
```

### facets

```js
facets: [{
  label?,                        // small label, e.g. 'Criterion 1'
  criterion,                     // e.g. 'Numerator vs denominator'
  types: [{ id, name, condition, example?, links?: [{ to, label }] }]
}]
```

`links[].to` is the `id` of another type, in any facet. The link is shown as a gold chip with the target's name.

---

## Sketches

A leaf or step can carry a small drawing made of function pieces and marks:

```js
sketch: {
  x0, x1, y0, y1,                          // visible window
  pieces: [{ f, from, to, n?, color? }],   // f sampled n times (default 90) on [from, to]
  holes?: [[x, y]],                        // open circles
  dots?:  [[x, y]],                        // filled gold dots
  vlines?: [x],                            // dashed vertical guides (asymptotes)
  axis?: false,                            // hide the x-axis
  height?                                  // override the default height
}
```

Points where `f` is not finite, or far outside the window, break the line, so asymptotes draw cleanly. Use a larger `n` for fast oscillation (e.g. `sin(1/x)`).

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `branchIf` | `'if'` | tree: the word before each branch condition |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, type names |
| `muted` | `#64748b` | Lede, examples, short notes |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders, the scale axis |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background, sketch background |
| `headBg` | `#eff6ff` | Facet headers, branch pills, highlighted types |
| `navy` | `#1e3a8a` | The root, step circles |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Branch pill border, outlines, note edge |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Link chips |
| `onDark` | `#ffffff` | Text on the root and the selected step |
| `connector` | `#c7cedb` | Tree connectors |
| `shadow` | `rgba(37, 99, 235, .1)` | Shadow of a hovered leaf |
| `sketchCurve` | `#1e3a8a` | Sketch curves and hole outlines (a piece's `color` overrides it) |
| `sketchAxis` | `#cbd5e1` | Sketch x-axis |
| `sketchGuide` | `#94a3b8` | Dashed guides |
| `sketchDot` | `#ca8a04` | Filled dots |
| `sketchHole` | `#ffffff` | Inside of open circles |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `hover` | `true` | Hover effects (outlined leaves, scale steps, linked types) |
| `sketches` | `true` | Draw sketches |
| `sketchHeight` | `58` | tree: sketch height |
| `scaleSketchHeight` | `50` | scale: sketch height |
| `stepMinWidth` | `130` | scale: minimum width of a step, in pixels |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

From the demo (`info_taxonomy.html`).

### tree: `calculus/limits/continuity` → Types of Discontinuities

```js
export const discontinuities = {
  header: { kicker: 'Continuity', title: 'Types of Discontinuities', lede: 'Discontinuities are classified by which condition fails and how.' },
  tree: {
    root: { name: 'Discontinuity at $x = a$', sub: 'one of the continuity conditions fails' },
    branches: [
      { condition: '$\\lim_{x \\to a} f(x)$ exists', leaves: [
        { name: 'Removable', condition: 'The limit exists, but $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$',
          sketch: { x0: -2, x1: 2, y0: -0.4, y1: 2.6, pieces: [{ f: (x) => 0.4 * x * x + 0.6, from: -2, to: 2 }], holes: [[0, 0.6]], dots: [[0, 1.9]] } }
      ] },
      { condition: '$\\lim_{x \\to a} f(x)$ does not exist', leaves: [
        { name: 'Jump', condition: 'Both one-sided limits exist but differ',
          sketch: { x0: -2, x1: 2, y0: -0.4, y1: 2.6, pieces: [{ f: (x) => 0.6 + 0.2 * x, from: -2, to: 0 }, { f: (x) => 1.9 + 0.15 * x, from: 0, to: 2 }], holes: [[0, 0.6]], dots: [[0, 1.9]] } },
        { name: 'Infinite', condition: 'At least one one-sided limit is $\\pm\\infty$',
          sketch: { x0: -2, x1: 2, y0: -3, y1: 3, vlines: [0], pieces: [{ f: (x) => 0.5 / x, from: -2, to: -0.01, n: 160 }, { f: (x) => 0.5 / x, from: 0.01, to: 2, n: 160 }] } },
        { name: 'Oscillating', condition: 'The limit fails to exist due to oscillation',
          sketch: { x0: -1, x1: 1, y0: -1.4, y1: 1.4, pieces: [{ f: (x) => Math.sin(1 / x), from: -1, to: -0.004, n: 900 }, { f: (x) => Math.sin(1 / x), from: 0.004, to: 1, n: 900 }] } }
      ] }
    ]
  },
  note: { label: 'Fixing it', text: 'Each type reveals different information about the function\'s behavior and determines whether the discontinuity can be "fixed."' }
};
```

### scale: `algebra/polynomials` → Classification by Degree

```js
const win = { x0: -2, x1: 2, y0: -1.5, y1: 1.5 };

export const polynomialDegrees = {
  header: { kicker: 'Polynomials', title: 'Classification by Degree', lede: "Polynomials receive names based on their degree. These names provide immediate information about a polynomial's structure." },
  scale: {
    axisLabel: 'degree',
    initial: 2,
    steps: [
      { key: '0', name: 'Constant', form: '$c$', short: 'horizontal line', sketch: { ...win, pieces: [{ f: () => 0.8, from: -2, to: 2 }] },
        text: 'The graph is a horizontal line, and the polynomial has no roots unless it equals zero.', examples: '$5, \\quad -3, \\quad \\frac{1}{2}$' },
      { key: '1', name: 'Linear', form: '$ax + b$', short: 'straight line', sketch: { ...win, pieces: [{ f: (x) => 0.6 * x + 0.2, from: -2, to: 2 }] },
        text: 'The general form is $ax + b$ with $a \\neq 0$. The graph is a straight line with slope $a$, crossing the x-axis exactly once.', examples: '$2x + 3, \\quad -x + 1, \\quad 7x$' },
      { key: '2', name: 'Quadratic', form: '$ax^2 + bx + c$', short: 'parabola', sketch: { ...win, pieces: [{ f: (x) => 0.6 * x * x - 1, from: -2, to: 2 }] },
        text: 'The general form is $ax^2 + bx + c$ with $a \\neq 0$. The graph is a parabola, opening upward when $a > 0$ and downward when $a < 0$.', examples: '$x^2 - 4, \\quad 3x^2 + 2x - 1, \\quad -x^2 + 5$' },
      { key: '3', name: 'Cubic', form: '$ax^3 + \\cdots + d$', short: 'S-shaped', sketch: { ...win, pieces: [{ f: (x) => 0.35 * (x * x * x - 2.5 * x), from: -2, to: 2 }] },
        text: 'The general form is $ax^3 + bx^2 + cx + d$ with $a \\neq 0$. The graph has an S-shaped curve with at most two turning points.', examples: '$x^3 - 1, \\quad 2x^3 - x^2 + 4, \\quad -x^3 + 2x$' },
      { key: '4', name: 'Quartic', form: 'degree $4$', sketch: { ...win, pieces: [{ f: (x) => 0.3 * (x * x * x * x - 4 * x * x) + 0.5, from: -2, to: 2 }] },
        text: 'A quartic polynomial has degree $4$.' },
      { key: '5', name: 'Quintic', form: 'degree $5$', sketch: { ...win, pieces: [{ f: (x) => 0.12 * x * (x * x - 1) * (x * x - 3.2), from: -2, to: 2 }] },
        text: 'A quintic polynomial has degree $5$.' },
      { key: '$n$', name: 'Degree $n$', open: true, muted: true, form: 'named by degree',
        text: 'Beyond degree five, standard names become rare — we simply refer to "a degree $6$ polynomial" or "a degree $10$ polynomial."' }
    ]
  }
};
```

### facets: `arithmetic/fractions` → Types of Fractions

```js
export const fractionTypes = {
  header: { kicker: 'Fractions', title: 'Types of Fractions', lede: 'Fractions are classified according to the relationship between numerator and denominator or according to their structure.' },
  facets: [
    { label: 'Criterion 1', criterion: 'Numerator vs denominator', types: [
      { id: 'proper', name: 'Proper', condition: 'Numerator smaller than the denominator; value less than one.', example: '$\\frac{3}{4}$' },
      { id: 'improper', name: 'Improper', condition: 'Numerator greater than or equal to the denominator; value one or greater.', example: '$\\frac{11}{4}$', links: [{ to: 'mixed', label: 'converts to' }] },
      { id: 'mixed', name: 'Mixed number', condition: 'A whole number with a proper fraction.', example: '$2\\frac{3}{4}$', links: [{ to: 'improper', label: 'converts to' }, { to: 'proper', label: 'contains' }] }
    ] },
    { label: 'Criterion 2', criterion: 'Structure', types: [
      { id: 'unit', name: 'Unit', condition: 'Numerator of exactly one; building blocks for all other fractions.', example: '$\\frac{1}{7}$' },
      { id: 'complex', name: 'Complex', condition: 'Fractions within the numerator, denominator, or both.', example: '$\\dfrac{\\frac{1}{2}}{\\frac{3}{4}}$' },
      { id: 'equiv', name: 'Equivalent', condition: 'Different representations of the same value.', example: '$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6}$' }
    ] }
  ],
  note: { label: 'Three unit fractions, still unproved', text: 'Every $\\frac{4}{n}$ with $n \\ge 2$ checked so far is a sum of three unit fractions, as $\\frac{4}{5} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{20}$.' }
};
```

### Customised from data

```js
{
  ...discontinuities,
  labels:  { branchIf: 'when' },
  theme:   { navy: '#0f172a', connector: '#94a3b8', sketchCurve: '#0f172a', sketchDot: '#b45309' },
  options: { sketchHeight: 70 }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the "Types of…" or "Classification" section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj7-diagram"
  id="discontinuity-types"
  title="Types of Discontinuities"
  source="/calculus/limits/continuity"
>
  <Taxonomy data={discontinuities} variant="tree" />
</DiagramFrame>
```

There are about 63 sections titled "Types of…", "Classification…" or "Kinds of…" across 36 pages, for example types of primes, curves, vectors, random variables, sample spaces, sets, distributions, and permutations and combinations.

---

## Authoring tips

- **Take the content from the page:** "Types of…" sections usually give one bold name and one sentence per kind; the name is `name`, the sentence is `condition`.
- **Which variant:**
  - tree when the page says what the kinds are classified *by* (which condition fails, whether a limit exists);
  - scale when the kinds are numbered (degree 0, 1, 2, …);
  - facets when the page lists kinds by more than one criterion, or kinds that convert into one another.
- **Branches:** keep branch conditions short. They sit in a pill above their leaves.
- **Sketches:** draw only what tells the kinds apart (a hole, a jump, an asymptote). Keep the same window for kinds that should be compared.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\lim'`, `'\\neq'`).
