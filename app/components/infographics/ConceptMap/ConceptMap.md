# ConceptMap

How concepts relate: a graph of typed relations, the path a page sits on, or one concept with its related concepts grouped around it. Nodes link to pages. Every colour, label and setting comes from data, with defaults.

```jsx
import ConceptMap from '@/app/components/infographics/ConceptMap/ConceptMap';

<ConceptMap data={distributionMap} variant="graph" />
```

The component is a single file, `ConceptMap.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_KINDS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
| **graph** (default) | Several concepts with different kinds of relation between them | Nodes placed on a grid, joined by arrows styled by relation kind (special case, limit, approximation, connected), with optional background bands. A panel underneath shows the selected node. |
| **path** | One page and its neighbours | Three columns: what the page builds on, the page itself, and where it leads. Every item links to its page. |
| **hub** | A "Related Concepts" section | The concept at the top, and its related concepts in groups, each with a one-line reason and a link. Hovering a group dims the others. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `graph`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'graph' \| 'path' \| 'hub'` | `'graph'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `kinds` | object | — | Relation kinds, merged over `DEFAULT_KINDS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.kinds`, `data.theme`, `data.options` win; `graph.kinds` wins over all for that graph).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:  { kicker?, title?, lede? },   // omit header to hide it
  labels?, kinds?, theme?, options?,
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere. `href` values are plain paths (`'/probability/median'`), rendered as ordinary links; an item without `href` is plain text.

### graph

```js
graph: {
  cols, rows,                       // the grid the nodes sit on
  height?,                          // drawing height on a 1000-wide canvas (default options.height)
  minWidth?,                        // below this the graph scrolls sideways (default options.minWidth)
  nodeWidth?, nodeHeight?,          // used to stop arrows at the node's edge
  bands?: [{ from, to, label, color? }],   // background bands, in column units
  nodes: [{ id, name, x, y, href?, text? }],
  edges: [{ from, to, kind, label?, text? }],
  kinds?: { ... },                  // extra or overridden relation kinds for this graph
  hint?                             // text shown under the graph until a node is selected
}
```

| Field | |
|---|---|
| `nodes[].x`, `y` | Position in grid units; `(0, 0)` is the centre of the top-left cell. Fractions are fine (`x: 2.3`). |
| `nodes[].text` | Shown in the panel when the node is selected. |
| `edges[].kind` | A key of the relation kinds. The arrow points from `from` to `to`. |
| `edges[].label` | Short text on the arrow, e.g. `'$n = 1$'`. |
| `edges[].text` | The relation in full, listed in the panel for both of its nodes. |

### path

```js
path: {
  beforeLabel?,                     // default labels.buildsOn
  before: [{ name, href?, why? }],
  target: { kicker?, name, text?, formula? },
  afterLabel?,                      // default labels.leadsTo
  after:  [{ name, href?, why? }]
}
```

### hub

```js
hub: {
  center: { name, sub? },
  groups: [{
    name,
    items: [{ name, href?, why? }],
    say?                            // a closing line for the group
  }]
}
```

---

## Interaction

**graph**

- **Hover a node:** its arrows and neighbours stay, everything else dims.
- **Click a node** (or Enter / Space): selects it. The panel shows its name (linked), its text, and each of its relations in full. Click again to clear.
- **Legend chips:** click a relation kind to hide or show its arrows.

**hub**

- **Hover a group:** it is outlined and the others dim.

**path** has no interaction beyond its links.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `hint` | `'Click a concept to see how it connects. Hover to trace its links; click a line type to hide it.'` | graph: under the graph until a node is selected (`graph.hint` overrides) |
| `buildsOn` / `leadsTo` | `'Builds on'` / `'Leads to'` | path: column headings |

### `kinds` (`DEFAULT_KINDS`)

```js
{
  special: { label: 'special case',  color: '#1e3a8a', dash: '' },
  limit:   { label: 'limit',         color: '#2563eb', dash: '6 4' },
  approx:  { label: 'approximation', color: '#ca8a04', dash: '2 4' },
  link:    { label: 'connected',     color: '#64748b', dash: '' }
}
```

`dash` is an SVG dash pattern (`''` for a solid line). Add your own keys, e.g. `{ proves: { label: 'proves', color: '#1e3a8a', dash: '' } }`, and use them as `edge.kind`. Only kinds that appear in the graph are listed in the legend.

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, node names |
| `muted` | `#64748b` | Lede, labels, reasons, hint |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box and node borders |
| `panel` | `#ffffff` | Boxes and nodes |
| `soft` | `#f8fafc` | Body background, behind arrow labels |
| `headBg` | `#eff6ff` | Group headers, hovered path items |
| `navy` | `#1e3a8a` | Selected node, hub centre, target border |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Kicker, hover outlines, focus ring |
| `onDark` | `#ffffff` | Text on navy and on relation chips |
| `link` | `#2563eb` | Links |
| `shadow` | `rgba(37, 99, 235, .14)` | Shadow of a hovered node |
| `arrow` | `#c7cedb` | path: the arrows between columns |

Band colours are set per band (`bands[].color`), and arrow colours per relation kind.

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `hover` | `true` | graph: hover tracing; hub: group dimming |
| `select` | `true` | graph: clickable nodes and the panel underneath |
| `legend` | `true` | graph: the relation legend |
| `filter` | `true` | graph: legend chips hide and show relation kinds |
| `counts` | `true` | hub: the item count in each group heading |
| `height` | `460` | graph: default drawing height |
| `minWidth` | `760` | graph: default minimum width, in pixels |
| `nodeWidth` / `nodeHeight` | `150` / `34` | graph: node size used to trim arrows |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for arrow labels and maths, with KaTeX.

---

## Examples

From the demo (`info_concept_map.html`).

### graph: the distribution pages → how the distributions connect

```js
const D = '/probability/distributions';

export const distributionMap = {
  header: { kicker: 'Probability distributions', title: 'How the distributions connect', lede: 'Special cases, limits and approximations, as the distribution pages state them.' },
  graph: {
    cols: 4, rows: 4, height: 440,
    hint: 'Click a distribution to see how it connects. Hover to trace its links; click a line type to hide it.',
    bands: [{ from: 0, to: 2, label: 'Discrete', color: '#f1f5f9' }, { from: 2, to: 4, label: 'Continuous', color: '#eff6ff' }],
    nodes: [
      { id: 'bern', name: 'Bernoulli', x: 0.1, y: 0, href: '/probability/definitions#bernoulli_distribution', text: 'A single trial with success probability $p$.' },
      { id: 'bin', name: 'Binomial', x: 1, y: 0, href: D + '/discrete/binomial', text: 'Number of successes in $n$ independent trials.' },
      { id: 'hyp', name: 'Hypergeometric', x: 0.1, y: 1, href: D + '/discrete/hypergeometric', text: 'Successes when drawing without replacement.' },
      { id: 'poi', name: 'Poisson', x: 1, y: 1.4, href: D + '/discrete/poisson', text: 'Count of events at a constant average rate.' },
      { id: 'nb', name: 'Negative binomial', x: 0.1, y: 2.4, href: D + '/discrete/negative-binomial', text: 'Number of trials to the $r$-th success.' },
      { id: 'geo', name: 'Geometric', x: 1, y: 2.4, href: D + '/discrete/geometric', text: 'Number of trials to the first success.' },
      { id: 'du', name: 'Discrete uniform', x: 1, y: 3.15, href: D + '/discrete/uniform', text: 'Finitely many equally likely values.' },
      { id: 'norm', name: 'Normal', x: 2.3, y: 0, href: D + '/continuous/normal', text: 'Measurements that cluster symmetrically around a central value.' },
      { id: 'exp', name: 'Exponential', x: 2.3, y: 1.9, href: D + '/continuous/exponential', text: 'The time between events at a constant average rate.' },
      { id: 'cu', name: 'Continuous uniform', x: 2.3, y: 3.15, href: D + '/continuous/uniform', text: 'All values in an interval equally likely.' },
      { id: 'gam', name: 'Gamma', x: 3.2, y: 1, href: D + '/continuous' },
      { id: 'chi', name: 'Chi-squared', x: 3.2, y: 2.4, href: D + '/continuous' }
    ],
    edges: [
      { from: 'bern', to: 'bin', kind: 'special', label: '$n = 1$', text: 'the $n = 1$ special case of the binomial' },
      { from: 'hyp', to: 'bin', kind: 'approx', label: '$N$ large', text: 'when $N$ is very large relative to $n$, approximates the binomial with $p = \\frac{K}{N}$' },
      { from: 'bin', to: 'poi', kind: 'limit', label: '$\\lambda = np$', text: 'Poisson is the limit of the binomial for rare events: $n$ large, $p$ small, $\\lambda = np$' },
      { from: 'bin', to: 'norm', kind: 'approx', label: '$n$ large', text: 'the binomial approaches the normal under certain conditions, bridging the discrete-continuous divide' },
      { from: 'geo', to: 'nb', kind: 'special', label: '$r = 1$', text: 'the geometric is the $r = 1$ special case of the negative binomial' },
      { from: 'poi', to: 'exp', kind: 'link', label: 'waiting times', text: 'the Poisson process generates exponential waiting times' },
      { from: 'geo', to: 'exp', kind: 'link', label: 'continuous analog', text: 'the exponential is the continuous analog of the geometric' },
      { from: 'du', to: 'cu', kind: 'limit', label: 'more values', text: 'the continuous uniform is the limiting case of the discrete uniform as the number of values increases' },
      { from: 'chi', to: 'gam', kind: 'special', text: 'the chi-squared is a special case of the gamma distribution' }
    ]
  }
};
```

### path: `probability/distributions/discrete/binomial` → where the binomial sits

```js
export const binomialPath = {
  header: { kicker: 'Binomial distribution', title: 'Where the binomial sits', lede: 'What it builds on, and where it leads.' },
  path: {
    beforeLabel: 'Builds on',
    before: [
      { name: 'Binomial coefficient', href: '/combinatorics/binomial-coefficient', why: 'the $\\binom{n}{k}$ in the pmf' },
      { name: 'Random variables', href: '/probability/random-variables', why: 'the declaration tilde, capital vs lowercase' },
      { name: 'Distributions', href: '/probability/distributions', why: 'the family-declaration convention' },
      { name: 'Expected value and variance', href: '/probability/expected-value', why: '$E[X] = np$, $\\operatorname{Var}(X) = npq$' }
    ],
    target: { kicker: 'This page', name: 'Binomial', text: 'Number of successes in $n$ independent trials.', formula: '$P(X{=}k) = \\binom{n}{k} p^k q^{n-k}$' },
    afterLabel: 'Leads to',
    after: [
      { name: 'Bernoulli', href: '/probability/definitions#bernoulli_distribution', why: 'the $n = 1$ member' },
      { name: 'Geometric', href: '/probability/distributions/discrete/geometric', why: 'same trials, same $q$' },
      { name: 'Negative binomial', href: '/probability/distributions/discrete/negative-binomial', why: 'same trials, same $q$' },
      { name: 'Poisson', href: '/probability/distributions/discrete/poisson', why: 'the limit for rare events' }
    ]
  }
};
```

### hub: `probability/median` → Related Concepts

```js
export const medianRelated = {
  header: { kicker: 'Median', title: 'Related Concepts', lede: 'The median connects to numerous other probability and statistics concepts.' },
  hub: {
    center: { name: 'Median', sub: 'the 50th percentile' },
    groups: [
      { name: 'Other measures of central tendency', items: [
        { name: 'Mean (Expected Value)', href: '/probability/expected-value', why: 'the probability-weighted average' },
        { name: 'Mode', href: '/probability/mode', why: 'the value with maximum probability or density' }
      ], say: 'These three measures work together to characterize where distributions center.' },
      { name: 'Measures of dispersion', items: [
        { name: 'Variance', href: '/probability/variance', why: 'spread around the mean' },
        { name: 'Interquartile Range', why: '$Q_3 - Q_1$, robust to outliers like the median' }
      ] },
      { name: 'Percentiles and quantiles', items: [
        { name: 'Quartiles', why: '$Q_1$, $Q_2$ (median), $Q_3$' },
        { name: 'Any quantile $q$', why: 'solves $F(x) = q$' }
      ], say: 'The median is the special case at $0.5$.' },
      { name: 'Cumulative distribution function', items: [
        { name: 'CDF', href: '/probability/cdf', why: 'the median solves $F(m) = 0.5$' }
      ] },
      { name: 'Probability functions', items: [
        { name: 'PMF', href: '/probability/probability-function/pmf', why: 'accumulating it gives the CDF' },
        { name: 'PDF', href: '/probability/probability-function/pdf', why: 'integrating it to $0.5$ locates the median' }
      ] },
      { name: 'Skewness', items: [
        { name: 'Right skew', why: 'mode $<$ median $<$ mean' },
        { name: 'Left skew', why: 'mean $<$ median $<$ mode' }
      ] }
    ]
  }
};
```

### Customised from data

```js
{
  ...distributionMap,
  kinds:   { special: { label: 'is a case of', color: '#0f172a', dash: '' } },
  theme:   { navy: '#0f172a', link: '#1d4ed8' },
  options: { filter: false, height: 400 }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj12-diagram"
  id="median-related"
  title="Related Concepts"
  source="/probability/median"
>
  <ConceptMap data={medianRelated} variant="hub" />
</DiagramFrame>
```

Good homes:

- **hub:** the "Related Concepts", "Related Concepts and Tools" and "Connections to Other Probability Concepts" sections, on well over 100 pages. Their `## heading` + `[link]: reason` structure maps directly onto groups and items.
- **path:** page intros, especially where a notation or definitions section says what the page inherits.
- **graph:** hub pages (distributions, counting methods, matrix decompositions), and the empty "Related Distributions" sections.

---

## Authoring tips

- **Take the relations from the pages:** use sentences that state a relation ("is the $r = 1$ special case of", "is the limit of") as `edge.text`, and shorten the condition into `edge.label`.
- **graph layout:** pick `cols` and `rows` first, then place related nodes in neighbouring cells. Keep arrows mostly horizontal or vertical; nudge with fractional positions where an arrow would cross a node.
- **Arrow direction:** point from the special or approximating concept to the general one, and keep that consistent across the map.
- **hub:** keep each `why` to one clause; put the summarising sentence in the group's `say`.
- **Links:** use the same site paths as elsewhere (`'/probability/cdf'`); leave `href` out for a concept without a page.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\lambda'`, `'\\binom'`).
