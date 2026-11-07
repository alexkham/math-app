# TaxonomyOutline

A classification infographic: the kinds of one thing as a tree, read top to bottom. Every node has a name, an optional definition and example, and an optional panel that opens when the row is clicked. There are six variants. Column headings and button text can be set from data, and colours and fonts through the `theme` prop, with defaults.

```jsx
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline';

<TaxonomyOutline data={rootsSubtreeOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
```

The component is a single file, `TaxonomyOutline.jsx`, marked `'use client'` (the open and closed state lives in React state). It exports the component (default) and `DEFAULT_THEME`. The column headings and button labels have defaults inside the file, but those objects are not exported. It imports `useExport` and `ExportButton` from `../utils/`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Customisation](#customisation)
5. [Examples](#examples)
6. [Embedding on a page](#embedding-on-a-page)
7. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **outline** (default) | Most trees | Indented rows joined by rails. Top-level rows are navy with white text, then lighter rows at each depth. An opened panel continues the row's card. |
| **table** | Each kind has the same fields worth reading across | The tree in the first column (with `├─ └─` glyphs), then definition, example and `meta` in aligned columns. An opened panel is a row under it. |
| **numbered** | The tree reads like a document outline | Numbers `1`, `1.1`, `1.1.1` beside each heading, with the definition under it and the example in a box. An opened panel is an inset aside. |
| **accordion** | The tree is long and readers open one branch at a time | Branches fold their children (a badge shows `meta` or the child count); leaves fold their panel. Unless `initialOpen` says otherwise, all branches start open. |
| **filetree** | A dense, compact listing | `├── └──` glyphs, fixed-height rows, a tag on the right. The example is not shown in this variant. |
| **gutter** | Readers need to see where each node sits | Full-width rows with depth drawn as small bars on the left and a breadcrumb of the node's parents above its name. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `outline`.

Rows that can open (any node with a `panel`, and in accordion any node with children) show a chevron, and open with a click or with Enter / Space. They carry `role="button"` and `aria-expanded`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'outline' \| 'table' \| 'numbered' \| 'accordion' \| 'filetree' \| 'gutter'` | `'outline'` | |
| `theme` | object | — | A partial theme (colours and fonts), merged over `DEFAULT_THEME`. |
| `initialOpen` | `'none' \| 'all' \| string[]` | — | What is open at first. An array lists node keys (see `id` below). Without it, accordion opens every branch and the other variants open nothing. Read once, on the first render. |
| `showToolbar` | boolean | `true` | The "expand all" / "collapse all" buttons. They only appear when something can open. |
| `framed` | boolean | `true` | Draws the rounded border and padding around the whole component. |
| `className` | string | — | An extra class on the wrapper. |
| `exportable` | boolean | `true` | Shows the PNG / PDF download buttons. |
| `exportFormats` | `string[]` | `['png', 'pdf']` | Which download buttons, in order. |
| `fileName` | string | `'taxonomy-outline'` | Download file name, without extension. |

The download is what is on screen: the toolbar and buttons are left out, and the table is captured at full width.

---

## Data shape

```js
{
  nodes:    Node[],                               // top-level nodes
  columns?: { name?, def?, example?, meta? },     // table headings
  labels?:  { expandAll?, collapseAll? },         // toolbar buttons
  legend?:  [{ label, tone? }],                   // tone: 'accent' | 'warm' | 'muted'
  showLevels?: boolean,                           // outline only

  prefaceLabel?, prefaceTitle?, preface?,         // a bordered text block above the tree
  conclusionLabel?, conclusionTitle?, conclusion? // the same block below the tree and legend
}
```

Every text field accepts a plain string, which goes through `processContent` (`$…$`, `**bold**`, `@[code]@`, `[label](!/path)` links), or a ReactNode, which is rendered as is.

### Top-level fields

| Field | |
|---|---|
| `legend` | A row of colour swatches under the tree. `tone` defaults to `'accent'`. |
| `showLevels` | outline: a small badge on each row, `L0`, `L1`, … by depth. A node's `level` replaces its badge text. |
| `preface`, `conclusion` | The block's text: a string, or an array of strings (one paragraph each). |
| `prefaceLabel`, `conclusionLabel` | A small uppercase label set into the block's top border, e.g. `'Before you read'`, `'Takeaway'`. |
| `prefaceTitle`, `conclusionTitle` | A heading inside the block. |

A preface or conclusion block is drawn only if at least one of its three fields is set. These blocks use fixed grey colours, not the theme.

### `Node`

```js
{
  id?, name, def?, example?, meta?, tag?, crumb?, flag?, panel?, children?,
  level?, color?, borderColor?, textColor?, font?    // outline only
}
```

| Field | Variant | |
|---|---|---|
| `id` | all | The node's key, for `initialOpen`. Defaults to its position: `'0'`, `'0.1'`, `'0.1.2'`. |
| `name` | all | Required. Links in the name work: `'[Hole](!/calculus/limits/continuity#5)'`. |
| `def` | all | A short definition, in muted text after or under the name. |
| `example` | all but filetree | A formula or example, in the maths font and accent colour. In accordion, only leaves show it. |
| `meta` | table, accordion, filetree, gutter | Small side text. table: the last column (falls back to the child count, or `—`). accordion: the badge on a branch (falls back to the child count). filetree: a muted tag when there is no `tag`. gutter: a line under the example. |
| `tag` | filetree | `{ label, tone }`, a tag on the right. `tone` defaults to `'accent'`. |
| `crumb` | gutter | The node's text in breadcrumbs. Defaults to `name` when `name` is a string. |
| `flag` | all | `true` gives the row amber colours, for a restriction or warning. |
| `panel` | all | Content shown when the row is opened. See [Panels](#panels). |
| `children` | all | Child nodes. |
| `level` | outline, with `showLevels` | Replaces the default `L<depth>` badge text. |
| `color`, `borderColor`, `textColor`, `font` | outline | Inline style on the row: background, border colour, text colour (name, definition and example then take this colour), font family. |

In numbered, indentation stops at the third level; deeper nodes are indented like the third. In outline, row styles stop changing after the fourth level.

### Panels

`panel` can be:

| Value | Rendered as |
|---|---|
| a string | Text, through `processContent`. |
| a ReactNode (or an array) | As is, e.g. a small chart or another component. |
| a function `(node) => ReactNode` | Called with the node's own data object. |
| an object `{ text?, facts?, note?, content?, warn? }` | A structured panel, in this order: `text`; `facts` as a grid of small boxes (`[{ label, value }]`, the value in the maths font); `note` in muted text; `content`, a ReactNode slot; `warn` in an amber box. |

A missing panel, `''`, `null` or `false` means the row cannot open.

In accordion, a branch's panel is shown at the top of the branch when it is opened, above its children.

---

## Customisation

### `columns` (from data)

The table variant's headings. Passed as `data.columns` and merged over the defaults.

| Key | Default |
|---|---|
| `name` | `'Type'` |
| `def` | `'Definition'` |
| `example` | `'Example'` |
| `meta` | `'Children'` |

### `labels` (from data)

Passed as `data.labels` and merged over the defaults.

| Key | Default |
|---|---|
| `expandAll` | `'expand all'` |
| `collapseAll` | `'collapse all'` |

### `theme` (`DEFAULT_THEME`, prop only)

Pass any subset as the `theme` prop. `data.theme` is not read. The theme is also handed to the download buttons.

| Key | Default | Used for |
|---|---|---|
| `bg` | `#ffffff` | Wrapper background, and the background of the download |
| `panel` | `#ffffff` | Chevrons, toolbar buttons, level badges, fourth-level outline rows, accordion branch intro |
| `panelSoft` | `#e8eefc` | Second-level outline rows, top-level table rows, an opened accordion branch or filetree row, top-level gutter rows, accent tags; toolbar button hover |
| `panelSofter` | `#f5f8ff` | Third-level outline rows, fact boxes, panels in table / numbered / filetree, the numbered example box, accordion headings, row hover |
| `ink` | `#0f172a` | Text |
| `title` | `#06357A` | Names, fact values; the background of top-level rows in outline and accordion |
| `titleSoft` | `#bfd0f5` | Definitions, chevrons and badges on the navy rows |
| `titleLine` | `#3b5bb5` | Borders of chevrons and badges on the navy rows |
| `muted` | `#64748b` | Definitions, table headings, `meta`, notes, legend, breadcrumbs |
| `line` | `#e2e8f0` | Frame border, dividers, row borders, gutter bars below the node's depth |
| `line2` | `#9bb3ee` | Rails, tree glyphs, chevron and toolbar borders, panel left edges, gutter bars of the parents |
| `accent` | `#2563EB` | Examples, chevrons, numbers, toolbar text, focus ring, the gutter bar at the node's own depth |
| `indigoSoft` | `#dbe6fd` | Accordion heading hover |
| `warm` | `#B45309` | Flagged rows: example, number, border, gutter bar |
| `warmSoft` | `#fffbeb` | Flagged row background, `warn` box, warm tags |
| `warmLine` | `#f2d48a` | Flagged row and `warn` borders |
| `warmInk` | `#92400e` | `warn` text, warm tags |
| `fontSans` | `'Inter', system-ui, sans-serif` | Text |
| `fontMono` | `'JetBrains Mono', ui-monospace, monospace` | Labels, numbers, glyphs, filetree rows |
| `fontMath` | `'Cambria Math', 'STIX Two Math', 'Times New Roman', serif` | `example` and fact values |

The defaults are the site palette (navy, blue, amber), so most pages pass no theme.

---

## Examples

All 26 pages that use the component use `outline`.

### outline with a legend and flags: `calculus/limits/continuity` → Four discontinuities, two groups

```js
const discontinuityTypes = {
  legend: [
    { label: 'the limit exists: one value repairs it', tone: 'accent' },
    { label: 'the limit does not exist: nothing repairs it', tone: 'warm' },
  ],
  nodes: [
    {
      name: 'Removable',
      def: 'the limit exists; the fault is a single value, so redefining $f(a)$ makes the function continuous',
      children: [
        { name: '[Hole](!/calculus/limits/continuity#5)', def: '$f(a)$ is undefined', example: '$(x^2 - 1)/(x - 1)$ at $x = 1$: limit $2$, no value' },
        { name: 'Misplaced value', def: '$f(a)$ exists but differs from the limit', example: 'the point sits off the curve' },
      ],
    },
    {
      name: 'Non-removable',
      def: 'the limit does not exist; no single value of $f(a)$ can fix it',
      children: [
        { name: '[Jump](!/calculus/limits/continuity#6)', def: 'both one-sided limits exist but differ', example: '$\\lfloor x \\rfloor$ at $x = 2$: $1$ from the left, $2$ from the right', flag: true },
        { name: '[Infinite](!/calculus/limits/continuity#7)', def: 'at least one one-sided limit is $\\pm\\infty$', example: '$1/x$ at $x = 0$', flag: true },
        // one more flagged leaf on the page
      ],
    },
  ],
};
```

### outline with preface, conclusion and level badges: `algebra/roots` → The roots pages

```js
const rootsSubtreeOutline = {
  prefaceLabel: 'Before you read',
  prefaceTitle: 'The roots pages',
  preface: 'The roots section splits into eight pages, from the basic properties of radicals to their use in equations, functions and the complex numbers.',
  conclusionLabel: 'Takeaway',
  conclusionTitle: 'Rules first, then use',
  conclusion: 'Properties and rules come first; simplifying and operations put them to work; equations, functions and complex numbers apply them.',
  showLevels: true,
  nodes: [
    { id: 'root', name: 'Roots and radicals', children: [
      { id: 'g1', name: 'Rules', children: [
        { id: 'props', name: '[Properties of radicals](!/algebra/roots/properties)', def: 'even vs odd index, sign, domain' },
        { id: 'rules', name: '[Radical rules](!/algebra/roots/radical-rules)', def: 'product, quotient, power, nested' },
        { id: 'ratexp', name: '[Rational exponents](!/algebra/roots/rational-exponents)', def: 'fractional powers, converting forms' },
      ] },
      { id: 'g2', name: 'Working with radicals', children: [
        { id: 'simp', name: '[Simplifying radicals](!/algebra/roots/simplifying)', def: 'extract perfect powers, clear fractions' },
        { id: 'ops', name: '[Operations with radicals](!/algebra/roots/operations)', def: 'add like radicals, rationalize' },
      ] },
      // a third group, 'Applications', on the page
    ] },
  ],
};
```

### A node with a structured panel

No page uses `panel` yet; this shows the shape.

```js
{
  name: 'Jump',
  def: 'both one-sided limits exist but differ',
  example: '$\\lfloor x \\rfloor$ at $x = 2$',
  flag: true,
  panel: {
    text: 'The graph breaks into two pieces at the point.',
    facts: [
      { label: 'from the left', value: '$1$' },
      { label: 'from the right', value: '$2$' },
    ],
    warn: 'No value of $f(2)$ can repair it.',
  },
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`. Note that `DiagramFrame` lives in the file `DiagramsFrameV2.jsx`.

```jsx
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
```

```jsx
<DiagramFrame
  key={'obj11-diagram'}
  id="roots-subtree-outline"
  title="The roots pages: rules, working, applications"
  source="/algebra/roots"
>
  <TaxonomyOutline data={rootsSubtreeOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
</DiagramFrame>
```

`DiagramFrame` has its own downloads, so pages pass `exportable={false}`; 25 of the 26 pages also pass `showToolbar={false} framed={false}`. The exception, `calculus/limits/continuity`, keeps the frame and passes its own `siteTheme`.

The data object lives in the page's `getStaticProps` and is passed in as a prop. A `panel` that is a ReactNode or a function cannot pass through `getStaticProps`; build that data in the page component instead.

---

## Authoring tips

- **Take the content from the page:** each kind's name, a one-line definition and an example usually exist already in the section that lists the kinds.
- **Which variant:**
  - outline for most trees;
  - table when each kind has a definition, an example and a count worth comparing down a column;
  - numbered when the tree is a reading order or a document outline;
  - accordion for long trees;
  - filetree for many short rows with tags;
  - gutter when the depth of each node matters.
- **Size:** at least 2 levels and 4 leaves; at most about 4 levels and 20 leaves. If most groups hold a single leaf, the tree is a list with headings; use a heading per group instead.
- **The `example` slot is styled as a formula:** worded examples work, but short maths reads best there.
- **`flag` on top-level rows:** in outline, a flagged top-level row loses its navy background, so its white text becomes hard to read on amber. Flag leaves.
- **Link each leaf:** put the link to the page or section that treats the kind in its `name` or `def`, as `[label](!/route)`.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\lfloor'`, `'\\pm'`).
