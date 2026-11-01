# PropertySheet

A properties infographic. Each property is a law with a **verdict**: it holds always, it holds under a condition, or it fails. The component picks its layout from the shape of the content, has filters for the reader, and supports optional expandable parts. All wording, colours, verdicts and behaviour are set from data, with defaults.

```jsx
import PropertySheet from '@/app/components/infographics/PropertySheet/PropertySheet';

<PropertySheet data={modulusProperties} />
```

The component is a single file, `PropertySheet.jsx`. It exports `DEFAULT_LABELS`, `DEFAULT_VERDICTS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Layouts](#layouts)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Expandable parts](#expandable-parts)
5. [Filters](#filters)
6. [Customisation from data](#customisation-from-data)
7. [Examples](#examples)
8. [Embedding on a page](#embedding-on-a-page)
9. [Authoring tips](#authoring-tips)

---

## Layouts

Each layout matches one shape of content, so the layout is chosen from the data:

| Layout | Use when the content is | Picked when the data has |
|---|---|---|
| **matrix** | the same properties checked across several objects or operations | `subjects` and at least one property with `cells` |
| **sheet** | properties sorted into categories | at least one group with a `name` |
| **cards** | an unordered collection | one unnamed group |

`variant` overrides the choice. There's no reader switch, because each layout reflects the content's actual structure.

| Layout | What it shows |
|---|---|
| Sheet | A box per category. Each row has a verdict bar, the name and note, the law, the verdict chip, the condition, and an optional toggle. |
| Matrix | Properties as rows and subjects as columns. Each cell has a verdict chip, the law or a counterexample, and an optional toggle. A missing cell shows `labels.notCovered`. |
| Cards | A grid with one card per property: name and verdict, the law in a box, the condition, note, tags, an optional toggle, and a link. |

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'auto' \| 'sheet' \| 'matrix' \| 'cards'` | `'auto'` | Overrides the automatic layout. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. `data.theme` takes priority. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. `data.options` takes priority. |

Precedence: **defaults → props → data**.

---

## Data shape

```js
{
  header?:   { kicker?, title, lede? },
  subjects?: [ { id, label } ],                   // matrix columns
  groups:    [ { name?, note?, properties: Property[] } ],
  footnote?: string,                              // one line under the layout
  labels?:   { ... },                             // see Customisation
  verdicts?: { ... },
  theme?:    { ... },
  options?:  { ... }
}
```

### `groups`

| Field | Type | |
|---|---|---|
| `name` | string | The category name. Any named group makes the layout `sheet`. |
| `note` | string | A right-aligned caption in the category header. |
| `properties` | Property[] | Required. |

For cards or a matrix, use a single group with no `name`.

### `Property`

| Field | Type | Default | |
|---|---|---|---|
| `id` | string | — | Required, unique. |
| `name` | string | — | e.g. "Triangle inequality". |
| `statement` | string | — | The law, usually a formula (sheet and cards). |
| `verdict` | string | `'holds'` | A key of `verdicts`: `holds`, `conditional`, `fails`, or a custom one. |
| `condition` | string | — | Shown under the verdict, in the verdict's colour, e.g. `'$z_2 \\neq 0$'`. |
| `note` | string | — | One line of meaning. |
| `tags` | string[] | — | Adds tag chips to the toolbar and shows the tags on cards. |
| `link` | `{ label, href }` | — | Cards: "→ label" in the card footer. |
| `cells` | `{ [subjectId]: Cell }` | — | Matrix: one cell per column. |
| `details`, `detailsLabel`, `detailsTitle` | | | See [Expandable parts](#expandable-parts). |

### `subjects` and `Cell` (matrix)

```js
subjects: [{ id: 'add', label: '$+$' }, { id: 'sub', label: '$-$' }]
```

| Cell field | Type | |
|---|---|---|
| `verdict` | string | Required. A key of `verdicts`. |
| `text` | string | The law (if it holds) or a counterexample (if it fails). |
| `details`, `detailsLabel`, `detailsTitle` | | Each cell can expand on its own. |

A property with no cell for a subject shows `labels.notCovered`. Use this rather than inventing a verdict the page doesn't state.

---

## Expandable parts

Any property, and any matrix cell, can carry an expandable part:

```js
{
  details:      string | string[] | ReactNode,   // string[] = one paragraph each
  detailsLabel: string,                           // toggle text
  detailsTitle: string                            // heading inside; '' hides it
}
```

- **No `details`** means no toggle.
- **Toggle text:** `detailsLabel`, otherwise `labels.more`. While open it shows `labels.hide`.
- **Heading inside:** `detailsTitle`, otherwise a default that depends on the layout:

| Layout | Opens | Default heading |
|---|---|---|
| Sheet | under the row, full width | the property name |
| Matrix (property) | in a strip under the row | the property name |
| Matrix (cell) | in the same strip; the cell gets a ring | "Property · Subject", e.g. "Commutative · −" |
| Cards | inside the card, above the footer | `labels.detailsTitle` |

In the matrix, each row has one strip: opening a cell closes that row's property details, and the reverse.

---

## Filters

Filter controls appear only where they apply. A count ("3 / 7", except in the matrix) and a Clear button appear whenever a filter is active, and `labels.noMatch` shows when nothing is left.

| Filter | Layouts | How it appears | Option |
|---|---|---|---|
| Verdict | all | The legend in the header becomes clickable, and several verdicts can be selected. Sheet and cards hide properties that don't match; the matrix dims non-matching cells and keeps the grid. | `verdictFilter` |
| Category | sheet | Chips: `labels.all` plus each group name. They appear when there are 2 or more named groups. | `groupFilter` |
| Focus | matrix | Clicking a column header or a property name highlights it and dims the rest. Clicking again releases it. | `focus` |
| Search | all | Matches names, laws, notes and conditions. In the matrix it filters rows. | `search`, `searchFrom` |
| Tags | all (where tags exist) | Chips for every tag in the data; a property matches if it has any selected tag. | `tagFilter` |

---

## Customisation from data

All four objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `property` | `'Property'` | Matrix corner header |
| `notCovered` | `'not covered'` | Matrix cell with no data |
| `more` | `'Details'` | Default toggle text |
| `hide` | `'Hide'` | Toggle text while open |
| `detailsTitle` | `'Details'` | Default heading inside an opened card |
| `all` | `'All'` | First category chip |
| `clear` | `'Clear'` | Clear-filters button |
| `search` | `'Search properties'` | Search placeholder and accessible name |
| `noMatch` | `'No property matches these filters.'` | Empty result |
| `filterHint` | `'Click to filter by verdict'` | Legend tooltip |
| `focusHint` | `'Click to focus'` | Matrix header and name tooltip |

### `verdicts` (`DEFAULT_VERDICTS`)

| Key | label | color | bg | mark |
|---|---|---|---|---|
| `holds` | `'Always'` | `#2563eb` | `#dbeafe` | `check` |
| `conditional` | `'Conditional'` | `#a16207` | `#fef3c7` | `half` |
| `fails` | `'Fails'` | `#334155` | `#e2e8f0` | `cross` |

- **Overriding a field** keeps the others: `verdicts: { holds: { label: 'Holds' } }`.
- **Adding a verdict** works the same way. Fields you leave out are taken from `holds`:
  ```js
  verdicts: { undefinedOp: { label: 'Undefined', color: '#64748b', bg: '#f1f5f9', mark: 'dot' } }
  ```
- **Mark options:** `check`, `half`, `cross`, `dot`, `none`.
- **The legend** lists only the verdicts actually used in the data, in `verdicts` order.

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Body text |
| `title` | `#1e3a8a` | Titles, names, the active chip |
| `muted` | `#64748b` | Notes, secondary text |
| `line` | `#e2e8f0` | Row and cell dividers |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Card, boxes |
| `soft` | `#f8fafc` | Body background, law boxes, opened parts |
| `headBg` | `#eff6ff` | Group headers, matrix header row |
| `accent` | `#2563eb` | Kicker, toggles, focus, links |
| `accentSoft` | `#dbeafe` | Focused header, toggle border, search focus ring |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `verdictFilter` | `true` | Makes the legend clickable |
| `groupFilter` | `true` | Category chips (sheet, 2+ named groups) |
| `tagFilter` | `true` | Tag chips (when properties have tags) |
| `focus` | `true` | Matrix row and column focus |
| `search` | `'auto'` | `true` or `false` forces it; `'auto'` shows it from `searchFrom` properties |
| `searchFrom` | `12` | |
| `legend` | `true` | Shows the verdict legend in the header |

The fonts are Inter for text, JetBrains Mono for labels and chips, and STIX Two Text for laws, with KaTeX for maths.

---

## Examples

### Sheet: categories (`complex-numbers/absolute-value`)

```js
export const modulusProperties = {
  header: {
    kicker: 'Complex numbers',
    title: 'Properties of the modulus',
    lede: 'Laws that turn $|z|$ from a distance into an algebraic tool.'
  },
  groups: [
    { name: 'Equalities', note: 'compute moduli factor by factor', properties: [
      { id: 'conj', name: 'Conjugate', note: 'reflection keeps distance', statement: '$|\\overline{z}| = |z|$',
        detailsLabel: 'Why',
        details: ['Conjugation reflects a point across the real axis, and reflection does not change distance from the origin.',
                  '$z = 3 + 4i$ and $\\bar{z} = 3 - 4i$ both lie exactly $5$ units from zero.'] },
      { id: 'prod', name: 'Product', note: 'lengths multiply', statement: '$|z_1 z_2| = |z_1|\\,|z_2|$' },
      { id: 'quot', name: 'Quotient', note: 'lengths divide',
        statement: '$\\left|\\dfrac{z_1}{z_2}\\right| = \\dfrac{|z_1|}{|z_2|}$',
        verdict: 'conditional', condition: '$z_2 \\neq 0$' },
      { id: 'pow', name: 'Power', note: 'pairs with De Moivre', statement: '$|z^n| = |z|^n$' }
    ] },
    { name: 'Bounds', note: 'estimate when exact values are hard', properties: [
      { id: 'nonneg', name: 'Non-negativity', note: '$|z| = 0$ only for $z = 0$', statement: '$|z| \\geq 0$' },
      { id: 'tri', name: 'Triangle inequality', statement: '$|z_1 + z_2| \\leq |z_1| + |z_2|$' },
      { id: 'rtri', name: 'Reverse triangle', statement: '$\\bigl||z_1| - |z_2|\\bigr| \\leq |z_1 - z_2|$',
        detailsLabel: 'Proof idea', detailsTitle: 'From the triangle inequality',
        details: 'Write $z_1 = (z_1 - z_2) + z_2$ and apply the triangle inequality.' }
    ] }
  ]
};
```

### Matrix: comparison (`arithmetic/properties`)

```js
export const operationProperties = {
  header: { kicker: 'Arithmetic', title: 'Which operation has which property?' },
  labels: { notCovered: 'not on this page' },
  subjects: [
    { id: 'add', label: '$+$' }, { id: 'mul', label: '$\\times$' },
    { id: 'sub', label: '$-$' }, { id: 'div', label: '$\\div$' }
  ],
  groups: [{ properties: [
    { id: 'comm', name: 'Commutative', note: 'order does not matter', cells: {
      add: { verdict: 'holds', text: '$a + b = b + a$' },
      mul: { verdict: 'holds', text: '$a \\cdot b = b \\cdot a$' },
      sub: { verdict: 'fails', text: '$7 - 4 \\neq 4 - 7$', detailsLabel: 'Check', details: ['$7 - 4 = 3$', '$4 - 7 = -3$'] },
      div: { verdict: 'fails', text: '$7 \\div 4 \\neq 4 \\div 7$' } } },
    { id: 'inv', name: 'Inverse element', note: 'undoes the operation', cells: {
      add: { verdict: 'holds', text: '$a + (-a) = 0$' },
      mul: { verdict: 'conditional', text: '$a \\cdot \\frac{1}{a} = 1,\\ a \\neq 0$' } } }
  ] }],
  footnote: '**Distributive** links the two: $a(b + c) = ab + ac$.'
};
```

### Cards: unordered collection (`algebra/logarithms/properties`)

```js
const LP = '/algebra/logarithms/properties';

export const logProperties = {
  header: { kicker: 'Logarithms', title: 'Properties of $\\log_a(x)$' },
  labels: { more: 'More', detailsTitle: '' },
  groups: [{ properties: [
    { id: 'dom', name: 'Domain', statement: '$x > 0$', note: 'Only positive inputs.',
      detailsLabel: 'Example', details: '$\\log_2(-4)$ and $\\log_2(0)$ are undefined.',
      link: { label: 'Domain', href: LP } },
    { id: 'mono', name: 'Monotonicity', verdict: 'conditional',
      statement: 'increasing / decreasing', condition: 'increasing if $a > 1$, decreasing if $0 < a < 1$',
      link: { label: 'Monotonicity', href: LP } },
    { id: 'asym', name: 'Vertical asymptote', statement: '$x = 0$',
      detailsTitle: 'As $x \\to 0^+$',
      details: ['$\\lim \\log_a(x) = -\\infty$ when $a > 1$', '$\\lim \\log_a(x) = +\\infty$ when $0 < a < 1$'],
      link: { label: 'Asymptotic Behavior', href: LP } }
  ] }]
};
```

### Customised from data

```js
{
  ...modulusProperties,
  theme:    { accent: '#1e3a8a', headBg: '#f1f5f9' },
  verdicts: { holds: { label: 'Holds' }, conditional: { label: 'If', mark: 'dot' } },
  labels:   { more: 'Open', all: 'Everything' },
  options:  { verdictFilter: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in a section's `content` array, after the section text, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj4-diagram"
  id="modulus-properties"
  title="Properties of the modulus"
  source="/complex-numbers/absolute-value"
  before={"The equalities compute moduli factor by factor; the bounds estimate."}
  after={"The triangle inequality gets its own section next."}
>
  <PropertySheet data={modulusProperties} />
</DiagramFrame>
```

Good homes:
- **Pages entirely about properties or rules:** `complex-numbers/properties`, `functions/properties`, `algebra/logarithms/properties`, `trigonometry/properties`, `calculus/derivatives/rules`, `arithmetic/properties`, and others.
- **"Properties of …" and "… at a Glance" sections** on other pages.

---

## Authoring tips

- **Which layout:** if the same property is checked for several things, use the matrix. If the page groups properties under headings, use the sheet. Otherwise use cards.
- **Laws:** put the law in `statement` and keep it one line. Put the meaning in `note` and the explanation in `details`.
- **Failures:** for `fails`, give a concrete counterexample from the page as the cell `text`, e.g. `$7 - 4 \\neq 4 - 7$`.
- **Conditions:** put the condition in `condition`, not only in the law, so it shows as a coloured line under the verdict.
- **Missing cells:** leave the cell out rather than guessing; it shows as "not covered".
- **Tags:** add them only when they cut across properties. Categories belong in named groups (the sheet).
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\neq'`, `'\\leq'`).
