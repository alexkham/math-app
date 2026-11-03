# ConceptCompare

A comparison infographic for two or more related concepts: the same aspects for each, what they share, and when to use which. There are five variants. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import ConceptCompare from '@/app/components/infographics/ConceptCompare';

<ConceptCompare data={dotVsCross} variant="versus" />
```

The component is a single file, `ConceptCompare.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Customisation from data](#customisation-from-data)
5. [Examples](#examples)
6. [Embedding on a page](#embedding-on-a-page)
7. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **versus** (default) | Two concepts, compared aspect by aspect | The two mirrored, with each aspect on the spine between them. Hovering a row highlights it. |
| **table** | Three or more concepts | A table with aspects as rows. Values shared with another column are marked `=`, and clicking a heading (or pressing Enter / Space on it) highlights that column. |
| **when** | The question is which one to use | A list of uses for each, by area, with an optional workflow underneath. |
| **bridge** | One converts into the other | The two sides joined by the formula, with an optional shaded normal curve on each side. |
| **confused** | An often-confused pair | The same aspects in two cards, ending in a gold verdict on what separates them. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `versus`.

`versus`, `bridge` and `confused` use the first two concepts; `when` and `table` use all of them (`when` is laid out for two).

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'versus' \| 'table' \| 'when' \| 'bridge' \| 'confused'` | `'versus'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:   { kicker?, title?, lede? },   // omit header to hide it
  concepts:  Concept[],
  together?: { label?, text },             // blue note at the bottom (versus, table, when, bridge)
  labels?:   { ... },
  theme?:    { ... },
  options?:  { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**`, `@[code]@` and links work everywhere.

### versus, table, confused

```js
concepts: [{ id, name, symbol?, values: { [aspectId]: text } }],
aspects:  [{ id, label, key? }],
aspectsLabel?          // table: heading of the first column (default labels.aspect)
```

| Field | Variant | |
|---|---|---|
| `concepts[].symbol` | versus | Shown next to the name, e.g. `'$\\mathbf{a} \\cdot \\mathbf{b}$'`. |
| `aspects[].key` | confused | Highlights that row and sets its value in the maths font (for the defining formula). |

### confused: the verdict

```js
verdict?: { label?, text, more? }    // label defaults to labels.verdict
```

### when

```js
concepts: [{ id, name, uses: [{ area?, text }] }],
workflow?: { label?, steps: [{ label?, text }] }
```

An item without `area` takes the full width.

### bridge

```js
concepts: [{ id, name, formula?, say?, figure?, forText? }],
bridge:   { label?, formula }
```

| Field | |
|---|---|
| `formula` | The concept's defining expression, in the maths font. |
| `say` | One muted line under it. |
| `figure` | `'left'` or `'right'`, or `{ side, z, label }`: a standard normal curve with the area on that side of `z` shaded. `z` defaults to `1`, `label` to `'z'`. |
| `forText` | Shown after `labels.useFor`. |

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Variant |
|---|---|---|
| `vs` | `'VS'` | versus: the badge on the spine |
| `aspect` | `'Aspect'` | table: the corner heading |
| `together` | `'Together'` | Label of the bottom note when `together.label` is missing |
| `sameHint` | `'shared with another column'` | table: the legend for `=` |
| `focusHint` | `'Click a heading to follow one column'` | table |
| `use` / `for` | `'Use'` / `'for'` | when: "Use *name* for" |
| `useFor` | `'Use for'` | bridge |
| `verdict` | `'Not both'` | confused, when `verdict.label` is missing |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, concept names |
| `muted` | `#64748b` | Lede, labels, shared values |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders, the spine, curve axis |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background, the spine |
| `headBg` | `#eff6ff` | Headers, highlighted row or column, key row |
| `navy` | `#1e3a8a` | First concept's top edge, VS badge, the curve |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Second concept's top edge, notes, bridge, highlighted heading |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | The verdict |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | The `=` marker |
| `areaA` / `areaB` | `#c7d7fe` / `#dbeafe` | bridge: shaded area on the first / second side |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `hover` | `true` | versus: highlights the hovered row |
| `markSame` | `true` | table: marks values shared with another column |
| `columnFocus` | `true` | table: headings can be clicked to highlight a column |
| `hint` | `true` | table: the legend line under the table |
| `verdictMark` | `'≠'` | confused: the glyph in the gold disc |
| `flowArrow` | `'→'` | when: the arrow between workflow steps |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

All from the demo (`info_concept_compare.html`).

### versus: `linear-algebra/vectors/cross-product` → Dot Product vs Cross Product

```js
export const dotVsCross = {
  header: { kicker: 'Vectors', title: 'Dot Product vs Cross Product', lede: 'The two multiplication operations available for vectors occupy complementary niches.' },
  concepts: [
    { id: 'dot', name: 'Dot product', symbol: '$\\mathbf{a} \\cdot \\mathbf{b}$',
      values: { out: 'A number', scope: 'Any $\\mathbb{R}^n$', order: 'Swapping the operands changes nothing', hand: 'Insensitive to handedness', zero: 'Perpendicular: no directional overlap', iso: '$\\cos\\theta$: the projection of one vector onto the other' } },
    { id: 'cross', name: 'Cross product', symbol: '$\\mathbf{a} \\times \\mathbf{b}$',
      values: { out: 'A vector', scope: 'Only $\\mathbb{R}^3$', order: 'Swapping the operands reverses the vector', hand: 'Built on handedness', zero: 'Collinear: no enclosed area', iso: '$\\sin\\theta$: a perpendicular vector whose length records the enclosed area' } }
  ],
  aspects: [
    { id: 'out', label: 'Result' },
    { id: 'scope', label: 'Defined in' },
    { id: 'order', label: 'Order' },
    { id: 'hand', label: 'Handedness' },
    { id: 'zero', label: 'Zero means' },
    { id: 'iso', label: 'Isolates' }
  ],
  together: { label: 'Together', text: 'The two products partition the angular information between a pair of vectors in $\\mathbb{R}^3$ without overlap.' }
};
```

### table: `probability/median` → Median, Mean, and Mode Compared

```js
export const centreMeasures = {
  header: { kicker: 'Probability', title: 'Median, Mean, and Mode Compared', lede: 'Three measures of centre, seven aspects.' },
  aspectsLabel: 'Feature',
  concepts: [
    { id: 'median', name: 'Median', values: { def: 'Value at 50th percentile', calc: 'Find cumulative 0.5 point', uniq: 'Single value (continuous)', out: 'None', type: 'Numerical only', interp: 'Middle value', skew: 'Between mode and mean' } },
    { id: 'mean', name: 'Mean', values: { def: 'Probability-weighted average', calc: 'Weight all values', uniq: 'Single value', out: 'Strong', type: 'Numerical only', interp: 'Average outcome', skew: 'Pulled by tail' } },
    { id: 'mode', name: 'Mode', values: { def: 'Value with highest probability', calc: 'Find maximum', uniq: 'Can have multiple', out: 'None', type: 'Any (including categorical)', interp: 'Most likely value', skew: 'At peak' } }
  ],
  aspects: [
    { id: 'def', label: 'Definition' },
    { id: 'calc', label: 'Calculation' },
    { id: 'uniq', label: 'Uniqueness' },
    { id: 'out', label: 'Outlier impact' },
    { id: 'type', label: 'Data type' },
    { id: 'interp', label: 'Interpretation' },
    { id: 'skew', label: 'Skewness indication' }
  ]
};
```

Values are compared as exact strings: `'None'` and `'Numerical only'` are marked `=` because they appear in more than one column.

### when: `tables/angle-conversion` → When to Use Degrees vs Radians

```js
export const degreesVsRadians = {
  header: { kicker: 'Angles', title: 'When to Use Degrees vs Radians' },
  concepts: [
    { id: 'deg', name: 'degrees', uses: [
      { area: 'Navigation', text: 'Surveying and geographic coordinates (latitude, longitude, bearings).' },
      { area: 'Engineering', text: 'Drawings, mechanical specifications, and most everyday measurement contexts.' },
      { area: 'Hand work', text: 'Angles that are simple fractions of a circle (90°, 45°, 30°).' },
      { area: 'Audiences', text: 'Non-mathematical audiences: "30 degrees" is intuitive in a way "$\\pi/6$" is not.' }
    ] },
    { id: 'rad', name: 'radians', uses: [
      { area: 'Calculus', text: 'Derivatives, integrals, Taylor series of trig functions all assume radians.' },
      { area: 'Physics', text: 'Angular velocity, simple harmonic motion, wave equations.' },
      { area: 'Code', text: "JavaScript's @[Math.sin]@, Python's @[math.sin]@ and C's @[sin]@ all take radians. Pass degrees in and you get nonsense." },
      { area: 'Exact values', text: 'Any work where $\\pi$ should appear symbolically.' }
    ] }
  ],
  workflow: { label: 'A common workflow', steps: [
    { label: 'Think', text: 'Think and design in degrees' },
    { label: 'Compute', text: 'Convert to radians when feeding values into a function or formula' },
    { label: 'Show', text: 'Convert back when displaying results to humans' }
  ] }
};
```

### bridge: `tables/normal-distribution` → Cumulative vs Complementary Cumulative

```js
export const cumulativeTables = {
  header: { kicker: 'Normal distribution', title: 'Cumulative vs Complementary Cumulative', lede: 'The two are exact complements.' },
  concepts: [
    { id: 'cum', name: 'Cumulative', formula: '$P(Z \\leq z)$', say: 'Area to the **left** of $z$', figure: 'left', forText: '"at most" or "less than" questions' },
    { id: 'comp', name: 'Complementary cumulative', formula: '$P(Z > z)$', say: 'Area to the **right** of $z$', figure: 'right', forText: '"more than" or "exceeds" questions' }
  ],
  bridge: { label: 'Complements', formula: '$P(Z > z) = 1 - P(Z \\leq z)$' },
  together: { label: 'Two-sided questions', text: 'Combine the two: $P(|Z| < z) = 2 \\cdot P(Z \\leq z) - 1$.' }
};
```

### confused: `probability/calculators/two-events` → Independence vs Mutual Exclusivity

```js
export const independenceVsExclusive = {
  header: { kicker: 'Probability', title: 'Independence vs Mutual Exclusivity', lede: 'Distinct, often confused concepts.' },
  concepts: [
    { id: 'ind', name: 'Independent events', values: {
      means: "They don't influence each other. Knowing $B$ occurred doesn't change $A$'s probability.",
      rule: '$P(A \\cap B) = P(A) \\cdot P(B)$',
      together: 'Can occur together; their intersection has positive probability.',
      ex: 'Flipping a coin ($A$) and rolling a die ($B$).' } },
    { id: 'me', name: 'Mutually exclusive events', values: {
      means: 'They cannot occur simultaneously. If $A$ happens, $B$ cannot.',
      rule: '$P(A \\cap B) = 0$',
      together: 'Never occur together; zero intersection.',
      ex: 'Rolling exactly 3 ($A$) versus exactly 5 ($B$) on a single die.' } }
  ],
  aspects: [
    { id: 'means', label: 'Meaning' },
    { id: 'rule', label: 'Condition', key: true },
    { id: 'together', label: 'Together?' },
    { id: 'ex', label: 'Example' }
  ],
  verdict: {
    label: 'Not both',
    text: 'If $P(A) > 0$ and $P(B) > 0$, events cannot be both independent and mutually exclusive.',
    more: "Mutually exclusive events with nonzero probabilities are strongly dependent: if $A$ occurs, $B$ definitely doesn't, $P(B \\mid A) = 0$."
  }
};
```

### Customised from data

```js
{
  ...dotVsCross,
  labels:  { vs: 'OR', together: 'In short' },
  theme:   { navy: '#0f172a', blue: '#1d4ed8', headBg: '#f1f5f9' },
  options: { hover: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the comparison section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj7-diagram"
  id="dot-vs-cross"
  title="Dot Product vs Cross Product"
  source="/linear-algebra/vectors/cross-product"
>
  <ConceptCompare data={dotVsCross} variant="versus" />
</DiagramFrame>
```

There are about 160 section titles containing "vs", "versus", "Difference Between" or "Compared" across 79 pages, some of them repeats.

---

## Authoring tips

- **Take the content from the page:** comparison sections usually state each difference as a sentence; turn each sentence into one aspect with one value per concept.
- **Which variant:**
  - versus for two concepts with 4–7 matching aspects;
  - table for three or more, or when the page already has a comparison table;
  - when for "use X for…, use Y for…" sections;
  - bridge when a formula converts one into the other;
  - confused when the page says the two are often confused, and states what separates them.
- **Keep values short:** one line each in versus; the spine stays narrow.
- **table:** write values that mean the same thing identically, so the `=` marker picks them up.
- **Quotes and apostrophes:** inside JS strings, write them as plain characters (use double-quoted strings for apostrophes). HTML entities are for JSX text only.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\mathbf'`, `'\\leq'`).
