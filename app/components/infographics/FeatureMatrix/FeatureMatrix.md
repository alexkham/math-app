# FeatureMatrix

Items × features: several objects, types or methods compared on the same features. Each feature has a cell type: text, maths, tag, verdict, number (with a bar), or a small graph. Readers can flip the layout between items as rows and items as columns, hover to trace a row and column, and sort by any number feature. Every colour, label and setting comes from data, with defaults.

```jsx
import FeatureMatrix from '@/app/components/infographics/FeatureMatrix/FeatureMatrix';

<FeatureMatrix data={countingScenarios} />
```

The component is a single file, `FeatureMatrix/FeatureMatrix.jsx`, with these docs beside it. It exports `CELL_TYPES`, `DEFAULT_LABELS`, `DEFAULT_VERDICTS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
8. [Phones](#phones)
9. [Pages using it](#pages-using-it)
10. [Authoring tips](#authoring-tips)

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
  corner?:   string,                       // heading of the item column (the corner cell), shown when items are rows
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

How the site places it:
- **It replaces the site's HTML comparison tables** (owner decision, 2026-11-14): a table with 3 or more columns and 2 or more rows, where every row is an item and every column a feature, becomes a FeatureMatrix in the same spot. The table const stays defined in the page file but is no longer rendered.
- The data is a module-level `const fm_<tableName> = …` after the page's imports (it would also fit in `getStaticProps`, but a graph feature could not).
- The frame title is the section's title; `related={false}`; site palette (`title`/`navy` `#06357A`, `blue`/`bar` `#2563EB`); verdicts ✓ blue, ✕ slate.
- Kept as tables: two-column lists (term → meaning), step-by-step procedures, single-row value tables, tables with merged cells, and tables outside a section.

Converting a table (how the 2026-11-14 script did it):
- First column → item names; its heading → `corner`. Other columns → features.
- A column whose every filled cell is ✓ / ✗ → `verdict`; every cell a single `$…$` → `math`; otherwise `text`. "—" / "–" / empty → missing value.
- Cell markup: site links → `[label](!/path)`; `<strong>` → `**bold**`; `<sup>` / `<sub>` → Unicode where every character has one, otherwise `$^{…}$` / `$_{…}$`; HTML entities decoded; other tags dropped. Links whose address came from a variable become plain text.


## Phones

- Under 680 px the item column stays pinned while the other columns scroll sideways, and a shadow at the right edge shows there is more. The item column is 92–112 px wide with 12 px text.
- Keep item names short; a long name wraps into several lines in the pinned column.

## Pages using it

520 frames on 206 lesson pages. 518 of them replaced an HTML table of the same content (2026-11-14, converted by script from the table's own cells; the table const stays defined but is no longer rendered). The linear-systems "Solution Methods Beyond Row Reduction" frame was swapped for a MethodComparison on 2026-11-15. The URL is the page path plus `#` and the frame id.

### algebra (117)

| Page | Frame |
|---|---|
| `/algebra/equations/absolute-value` | `absolute-value-equations-multiple-absolute-matrix` |
| `/algebra/equations/absolute-value` | `absolute-value-geometric-interpretation-matrix` |
| `/algebra/equations/absolute-value` | `absolute-value-summary-absolute-value-matrix` |
| `/algebra/equations/linear` | `linear-properties-equality-matrix` |
| `/algebra/equations/linear` | `linear-special-cases-matrix` |
| `/algebra/equations/linear` | `linear-summary-linear-equation-forms-matrix` |
| `/algebra/equations/polynomial` | `polynomial-degree-five-beyond-matrix` |
| `/algebra/equations/polynomial` | `polynomial-relationships-between-roots-coefficients-matrix` |
| `/algebra/equations/polynomial` | `polynomial-root-multiplicity-matrix` |
| `/algebra/equations/polynomial` | `polynomial-summary-degree-matrix` |
| `/algebra/equations/quadratic` | `quadratic-reducible-equations-matrix` |
| `/algebra/equations/quadratic` | `quadratic-summary-solving-methods-matrix` |
| `/algebra/equations/quadratic` | `quadratic-vieta-s-formulas-matrix` |
| `/algebra/equations/rational` | `rational-equations-reducible-rational-form-matrix` |
| `/algebra/equations/rational` | `rational-summary-rational-equation-subtypes-matrix` |
| `/algebra/equations` | `equations-equations-beyond-algebra-matrix` |
| `/algebra/equations` | `equations-equivalent-equations-matrix` |
| `/algebra/equations` | `equations-summary-algebraic-equation-types-matrix` |
| `/algebra/equations` | `equations-types-equations-solution-behavior-matrix` |
| `/algebra/identities` | `identities-summary-algebraic-identities-matrix` |
| `/algebra/identities` | `identities-sums-differences-powers-matrix` |
| `/algebra/inequalities/absolute-value` | `absolute-value-inequalities-absolute-value-matrix` |
| `/algebra/inequalities/absolute-value` | `absolute-value-solving-greater-than-matrix` |
| `/algebra/inequalities/absolute-value` | `absolute-value-summary-absolute-value-matrix-2` |
| `/algebra/inequalities/linear` | `linear-solving-properties-inequality-matrix` |
| `/algebra/inequalities/linear` | `linear-special-cases-matrix-2` |
| `/algebra/inequalities/linear` | `linear-summary-linear-inequality-forms-matrix` |
| `/algebra/inequalities/quadratic` | `quadratic-summary-quadratic-inequality-cases-matrix` |
| `/algebra/inequalities/rational` | `rational-endpoint-inclusion-rules-matrix` |
| `/algebra/inequalities/rational` | `rational-summary-rational-inequality-forms-matrix` |
| `/algebra/inequalities` | `inequalities-absolute-value-inequalities-matrix` |
| `/algebra/inequalities` | `inequalities-compound-inequalities-matrix` |
| `/algebra/inequalities` | `inequalities-number-line-representation-matrix` |
| `/algebra/inequalities` | `inequalities-properties-inequalities-matrix` |
| `/algebra/inequalities` | `inequalities-summary-algebraic-inequality-types-matrix` |
| `/algebra/logarithms/common-natural` | `common-natural-calculator-conventions-matrix` |
| `/algebra/logarithms/common-natural` | `common-natural-number-e-matrix` |
| `/algebra/logarithms/common-natural` | `common-natural-side-side-summary-matrix` |
| `/algebra/logarithms/equations` | `equations-choosing-common-or-natural-matrix` |
| `/algebra/logarithms/equations` | `equations-extraneous-solutions-matrix-2` |
| `/algebra/logarithms/equations` | `equations-summary-solving-methods-matrix` |
| `/algebra/logarithms/graphs` | `graphs-effect-base-shape-matrix` |
| `/algebra/logarithms/graphs` | `graphs-key-points-matrix` |
| `/algebra/logarithms/graphs` | `graphs-summary-transformations-matrix` |
| `/algebra/logarithms/inequalities` | `inequalities-logarithms-both-sides-matrix` |
| `/algebra/logarithms/inequalities` | `inequalities-summary-techniques-matrix` |
| `/algebra/logarithms/properties` | `properties-inverse-relationship-exponential-functions-matrix` |
| `/algebra/logarithms/properties` | `properties-summary-properties-matrix` |
| `/algebra/logarithms` | `logarithms-logarithm-rules-matrix` |
| `/algebra/logarithms` | `logarithms-properties-logarithms-matrix` |
| `/algebra/logarithms` | `logarithms-restrictions-base-argument-matrix` |
| `/algebra/logarithms` | `logarithms-summary-logarithms-matrix` |
| `/algebra/polynomials/factoring` | `factoring-common-mistakes-matrix` |
| `/algebra/polynomials/factoring` | `factoring-factoring-trinomials-simple-case-matrix` |
| `/algebra/polynomials/factoring` | `factoring-sum-difference-cubes-matrix` |
| `/algebra/polynomials/factoring` | `factoring-summary-factoring-decision-tree-matrix` |
| `/algebra/polynomials/graphing` | `graphing-common-mistakes-matrix` |
| `/algebra/polynomials/graphing` | `graphing-summary-sketching-reference-card-matrix` |
| `/algebra/polynomials/graphing` | `graphing-symmetry-matrix` |
| `/algebra/polynomials/operations` | `operations-summary-four-operations-at-matrix` |
| `/algebra/polynomials/operations` | `operations-synthetic-division-matrix` |
| `/algebra/polynomials/roots` | `roots-common-mistakes-matrix` |
| `/algebra/polynomials/roots` | `roots-finding-roots-quadratic-formula-matrix` |
| `/algebra/polynomials/roots` | `roots-multiplicity-matrix` |
| `/algebra/polynomials/roots` | `roots-summary-root-finding-methods-matrix` |
| `/algebra/polynomials/rules` | `rules-common-mistakes-matrix` |
| `/algebra/polynomials/rules` | `rules-master-toolkit-polynomial-theorems-matrix` |
| `/algebra/polynomials/rules` | `rules-upper-lower-bounds-matrix` |
| `/algebra/polynomials/rules` | `rules-vieta-s-formulas-matrix` |
| `/algebra/polynomials` | `polynomials-key-theorems-matrix` |
| `/algebra/polynomials` | `polynomials-summary-polynomial-family-degree-matrix` |
| `/algebra/polynomials` | `polynomials-vocabulary-matrix` |
| `/algebra/powers/exponent-rules` | `exponent-rules-domain-restrictions-matrix` |
| `/algebra/powers/exponent-rules` | `exponent-rules-edge-cases-common-matrix` |
| `/algebra/powers/exponential-equations` | `exponential-equations-equations-rational-negative-matrix` |
| `/algebra/powers/exponential-equations` | `exponential-equations-method-substitution-quadratic-matrix` |
| `/algebra/powers/exponential-equations` | `exponential-equations-method-using-logarithms-matrix` |
| `/algebra/powers/exponential-equations` | `exponential-equations-solving-methods-overview-matrix` |
| `/algebra/powers/exponential-equations` | `exponential-equations-summary-forms-methods-matrix` |
| `/algebra/powers/exponential-functions` | `exponential-functions-basic-shape-matrix` |
| `/algebra/powers/exponential-functions` | `exponential-functions-exponential-vs-power-matrix` |
| `/algebra/powers/exponential-functions` | `exponential-functions-key-properties-matrix` |
| `/algebra/powers/exponential-functions` | `exponential-functions-summary-cases-f-matrix` |
| `/algebra/powers/exponential-inequalities` | `exponential-inequalities-inequalities-requiring-simplification-matrix` |
| `/algebra/powers/exponential-inequalities` | `exponential-inequalities-summary-cases-matrix` |
| `/algebra/powers/irrational-exponents` | `irrational-exponents-intuition-through-approximation-matrix` |
| `/algebra/powers/natural-exponents` | `natural-exponents-sign-behavior-matrix` |
| `/algebra/powers/natural-exponents` | `natural-exponents-worked-examples-matrix` |
| `/algebra/powers/negative-exponents` | `negative-exponents-motivation-extending-pattern-matrix` |
| `/algebra/powers/negative-exponents` | `negative-exponents-verifying-laws-still-matrix` |
| `/algebra/powers/rational-exponents` | `rational-exponents-domain-considerations-matrix` |
| `/algebra/powers/rational-exponents` | `rational-exponents-fractional-exponents-matrix` |
| `/algebra/powers/zero-powers` | `zero-powers-0-0-analysis-matrix` |
| `/algebra/powers` | `powers-exponential-functions-matrix` |
| `/algebra/roots/equations` | `equations-configurations-at-glance-matrix` |
| `/algebra/roots/equations` | `equations-why-extraneous-solutions-appear-matrix` |
| `/algebra/roots/functions` | `functions-parent-functions-at-glance-matrix` |
| `/algebra/roots/functions` | `functions-transformations-matrix` |
| `/algebra/roots/operations` | `operations-conjugates-matrix` |
| `/algebra/roots/operations` | `operations-operations-strategy-matrix` |
| `/algebra/roots/properties` | `properties-domain-range-index-matrix` |
| `/algebra/roots/properties` | `properties-even-vs-odd-at-matrix` |
| `/algebra/roots/properties` | `properties-sign-behavior-summary-matrix` |
| `/algebra/roots/radical-rules` | `radical-rules-common-errors-matrix` |
| `/algebra/roots/radical-rules` | `radical-rules-when-rules-apply-matrix` |
| `/algebra/roots/rational-exponents` | `rational-exponents-converting-between-forms-matrix` |
| `/algebra/roots/rational-exponents` | `rational-exponents-when-use-which-matrix` |
| `/algebra/roots/simplifying` | `simplifying-factoring-out-perfect-powers-matrix` |
| `/algebra/roots/simplifying` | `simplifying-rationalizing-higher-index-denominators-matrix` |
| `/algebra/roots/simplifying` | `simplifying-simplification-techniques-at-glance-matrix` |
| `/algebra/roots` | `roots-radical-exponent-notation-matrix` |
| `/algebra/roots` | `roots-roots-subtree-at-glance-matrix` |
| `/algebra/roots` | `roots-rules-radicals-matrix` |
| `/algebra/roots` | `roots-when-radicands-are-negative-matrix` |
| `/algebra/sequences/arithmetic` | `arithmetic-finding-terms-matrix` |
| `/algebra/sequences/fibonacci` | `fibonacci-identities-properties-matrix` |
| `/algebra/sequences/geometric` | `geometric-finding-terms-matrix` |

### arithmetic (39)

| Page | Frame |
|---|---|
| `/arithmetic/divisibility/factors` | `factors-factors-vs-multiples-matrix` |
| `/arithmetic/divisibility/factors` | `factors-sum-factors-matrix` |
| `/arithmetic/divisibility/factors` | `factors-summary-toolkit-divisor-structure-matrix` |
| `/arithmetic/divisibility/gcd` | `gcd-basic-properties-matrix` |
| `/arithmetic/divisibility/gcd` | `gcd-properties-coprime-numbers-matrix` |
| `/arithmetic/divisibility/gcd` | `gcd-summary-three-methods-gcd-matrix` |
| `/arithmetic/divisibility/lcm` | `lcm-basic-properties-matrix` |
| `/arithmetic/divisibility/lcm` | `lcm-summary-three-methods-lcm-matrix` |
| `/arithmetic/divisibility/lcm` | `lcm-when-one-divides-other-matrix` |
| `/arithmetic/divisibility/rules` | `rules-combining-rules-matrix` |
| `/arithmetic/divisibility/rules` | `rules-summary-master-rules-reference-matrix` |
| `/arithmetic/divisibility/rules` | `rules-why-these-rules-work-matrix` |
| `/arithmetic/divisibility` | `divisibility-basic-properties-matrix` |
| `/arithmetic/divisibility` | `divisibility-divisibility-notation-matrix` |
| `/arithmetic/divisibility` | `divisibility-summary-map-divisibility-subtree-matrix` |
| `/arithmetic/fractions/adding-subtracting` | `adding-subtracting-subtracting-mixed-numbers-matrix` |
| `/arithmetic/fractions/comparing` | `comparing-comparing-fractions-at-glance-matrix` |
| `/arithmetic/fractions/comparing` | `comparing-decimal-conversion-method-matrix` |
| `/arithmetic/fractions/complex` | `complex-simplifying-method-2-lcd-matrix` |
| `/arithmetic/fractions/equivalent` | `equivalent-equivalent-fractions-at-glance-matrix` |
| `/arithmetic/fractions/equivalent` | `equivalent-simplifying-fractions-matrix` |
| `/arithmetic/fractions/mixed-numbers` | `mixed-numbers-converting-mixed-numbers-matrix` |
| `/arithmetic/fractions/mixed-numbers` | `mixed-numbers-mixed-numbers-at-matrix` |
| `/arithmetic/fractions/mixed-numbers` | `mixed-numbers-operations-mixed-numbers-matrix` |
| `/arithmetic/fractions` | `fractions-fractions-at-glance-matrix` |
| `/arithmetic/fractions` | `fractions-operations-fractions-matrix` |
| `/arithmetic/fractions` | `fractions-types-fractions-matrix` |
| `/arithmetic/modulo/negative-numbers` | `negative-numbers-floored-division-round-matrix` |
| `/arithmetic/modulo/negative-numbers` | `negative-numbers-summary-decision-guide-matrix` |
| `/arithmetic/modulo/negative-numbers` | `negative-numbers-worked-examples-matrix` |
| `/arithmetic/modulo/operations` | `operations-detecting-cycles-powers-matrix` |
| `/arithmetic/modulo/operations` | `operations-last-digit-problems-matrix` |
| `/arithmetic/modulo` | `modulo-clock-analogy-matrix` |
| `/arithmetic/modulo` | `modulo-range-remainders-matrix` |
| `/arithmetic/modulo` | `modulo-summary-map-modulo-subtree-matrix` |
| `/arithmetic/modulo` | `modulo-what-is-modulo-matrix` |
| `/arithmetic/properties` | `properties-distributive-property-matrix` |
| `/arithmetic/properties` | `properties-sign-rules-matrix` |
| `/arithmetic/properties` | `properties-why-these-properties-matter-matrix` |

### calculus (53)

| Page | Frame |
|---|---|
| `/calculus/derivatives/common` | `common-power-functions-matrix` |
| `/calculus/derivatives/common` | `common-trigonometric-functions-tangent-cotangent-matrix` |
| `/calculus/derivatives/differentiability` | `differentiability-differentiability-intervals-matrix` |
| `/calculus/derivatives/differentiability` | `differentiability-one-sided-derivatives-matrix` |
| `/calculus/derivatives/differentiability` | `differentiability-summary-typology-differentiability-failure-matrix` |
| `/calculus/derivatives/differentials` | `differentials-differentials-leibniz-notation-matrix` |
| `/calculus/derivatives/differentials` | `differentials-dy-versus-y-matrix` |
| `/calculus/derivatives/differentials` | `differentials-higher-order-differentials-matrix` |
| `/calculus/derivatives/function` | `function-continuity-derivative-matrix` |
| `/calculus/derivatives/function` | `function-derivative-as-rate-change-matrix` |
| `/calculus/derivatives/function` | `function-summary-how-f-f-matrix` |
| `/calculus/derivatives/graph-analysis` | `graph-analysis-concavity-matrix` |
| `/calculus/derivatives/graph-analysis` | `graph-analysis-full-derivative-toolkit-matrix` |
| `/calculus/derivatives/higher-order` | `higher-order-existence-smoothness-classes-matrix` |
| `/calculus/derivatives/higher-order` | `higher-order-notation-higher-order-matrix` |
| `/calculus/derivatives/higher-order` | `higher-order-physical-interpretation-matrix` |
| `/calculus/derivatives/rules` | `rules-l-h-pital-s-matrix` |
| `/calculus/derivatives/special` | `special-patterns-inverse-trigonometric-derivatives-matrix` |
| `/calculus/derivatives/special` | `special-piecewise-functions-matrix` |
| `/calculus/derivatives` | `derivatives-derivative-notation-matrix` |
| `/calculus/derivatives` | `derivatives-roadmap-derivatives-subtree-matrix` |
| `/calculus/integrals/definite` | `definite-summary-three-lenses-definite-matrix` |
| `/calculus/integrals/evaluating` | `evaluating-common-pitfalls-matrix` |
| `/calculus/integrals/evaluating` | `evaluating-symmetry-shortcuts-matrix` |
| `/calculus/integrals/improper` | `improper-discontinuous-integrands-matrix` |
| `/calculus/integrals/improper` | `improper-p-test-matrix` |
| `/calculus/integrals/improper` | `improper-summary-tests-improper-integral-matrix` |
| `/calculus/integrals/rules` | `rules-why-differentiation-integration-are-matrix` |
| `/calculus/integrals/special` | `special-inverse-trigonometric-forms-matrix` |
| `/calculus/integrals/special` | `special-trigonometric-functions-matrix` |
| `/calculus/integrals` | `integrals-integration-techniques-matrix` |
| `/calculus/integrals` | `integrals-special-integrals-matrix` |
| `/calculus/integrals` | `integrals-summary-map-integrals-subtree-matrix` |
| `/calculus/integrals` | `integrals-two-types-integrals-matrix` |
| `/calculus/limits/continuity` | `continuity-continuous-functions-standard-library-matrix` |
| `/calculus/limits/continuity` | `continuity-oscillating-discontinuity-matrix` |
| `/calculus/limits/continuity` | `continuity-summary-where-continuity-is-matrix` |
| `/calculus/limits/infinity` | `infinity-dominant-term-analysis-matrix` |
| `/calculus/limits/infinity` | `infinity-limits-logarithms-toward-zero-matrix` |
| `/calculus/limits/infinity` | `infinity-one-sided-infinite-limits-matrix` |
| `/calculus/limits/infinity` | `infinity-summary-master-diagnostic-limits-matrix` |
| `/calculus/limits/one-sided` | `one-sided-connection-two-sided-matrix` |
| `/calculus/limits/one-sided` | `one-sided-summary-where-one-matrix` |
| `/calculus/limits/rules` | `rules-limits-rational-functions-matrix` |
| `/calculus/limits/rules` | `rules-when-rules-fail-matrix` |
| `/calculus/limits/special` | `special-growth-rate-comparisons-matrix` |
| `/calculus/limits/special` | `special-related-trigonometric-limits-matrix` |
| `/calculus/limits/two-sided` | `two-sided-summary-where-two-matrix` |
| `/calculus/limits/two-sided` | `two-sided-when-two-sided-matrix` |
| `/calculus/limits` | `limits-limits-infinity-matrix` |
| `/calculus/limits` | `limits-limits-that-fail-exist-matrix` |
| `/calculus/limits` | `limits-one-sided-limits-matrix` |
| `/calculus/limits` | `limits-summary-navigating-limits-subtree-matrix` |

### combinatorics (7)

| Page | Frame |
|---|---|
| `/combinatorics/binomial-coefficient` | `binomial-coefficient-identities-matrix` |
| `/combinatorics/binomial-coefficient` | `binomial-coefficient-pascal-s-triangle-matrix` |
| `/combinatorics/binomial-theorem` | `binomial-theorem-special-cases-matrix` |
| `/combinatorics/binomial-theorem` | `binomial-theorem-worked-expansions-matrix` |
| `/combinatorics/counting-principles` | `counting-principles-counting-principles-at-matrix` |
| `/combinatorics/counting-principles` | `counting-principles-multiplication-rule-matrix` |
| `/combinatorics/inclusion-exclusion` | `inclusion-exclusion-worked-examples-matrix` |

### complex-numbers (42)

| Page | Frame |
|---|---|
| `/complex-numbers/absolute-value` | `absolute-value-properties-modulus-matrix` |
| `/complex-numbers/absolute-value` | `absolute-value-reverse-triangle-inequality-matrix` |
| `/complex-numbers/additive-inverse` | `additive-inverse-common-mistakes-matrix` |
| `/complex-numbers/additive-inverse` | `additive-inverse-properties-additive-inverse-matrix` |
| `/complex-numbers/additive-inverse` | `additive-inverse-summary-side-side-matrix` |
| `/complex-numbers/algebraic-form` | `algebraic-form-equality-complex-numbers-matrix` |
| `/complex-numbers/algebraic-form` | `algebraic-form-real-imaginary-part-matrix` |
| `/complex-numbers/algebraic-form` | `algebraic-form-summary-complete-standard-matrix` |
| `/complex-numbers/algebraic-form` | `algebraic-form-summary-complete-standard-matrix-2` |
| `/complex-numbers/basics` | `basics-arithmetic-operations-calculating-mathbb-matrix` |
| `/complex-numbers/basics` | `basics-de-moivre-s-theorem-matrix` |
| `/complex-numbers/basics` | `basics-imaginary-unit-i-pure-matrix` |
| `/complex-numbers/basics` | `basics-three-forms-at-glance-matrix` |
| `/complex-numbers/complex-conjugate` | `complex-conjugate-classification-theorems-matrix` |
| `/complex-numbers/complex-conjugate` | `complex-conjugate-fundamental-properties-matrix` |
| `/complex-numbers/complex-conjugate` | `complex-conjugate-summary-what-z-matrix` |
| `/complex-numbers/demoivre-theorem` | `demoivre-theorem-applying-de-moivre-matrix` |
| `/complex-numbers/demoivre-theorem` | `demoivre-theorem-geometric-interpretation-roots-matrix` |
| `/complex-numbers/demoivre-theorem` | `demoivre-theorem-roots-unity-matrix` |
| `/complex-numbers/demoivre-theorem` | `demoivre-theorem-summary-forward-reverse-matrix` |
| `/complex-numbers/equations-polynomials` | `equations-polynomials-equations-involving-conjugates-matrix` |
| `/complex-numbers/equations-polynomials` | `equations-polynomials-polynomials-real-coefficients-matrix` |
| `/complex-numbers/equations-polynomials` | `equations-polynomials-summary-equation-types-matrix` |
| `/complex-numbers/equations-polynomials` | `equations-polynomials-vieta-s-formulas-matrix` |
| `/complex-numbers/exponential-form` | `exponential-form-converting-between-forms-matrix` |
| `/complex-numbers/exponential-form` | `exponential-form-roots-exponential-form-matrix` |
| `/complex-numbers/exponential-form` | `exponential-form-understanding-euler-s-matrix` |
| `/complex-numbers/geometric-representation` | `geometric-representation-plotting-complex-numbers-matrix` |
| `/complex-numbers/geometric-representation` | `geometric-representation-visualizing-conjugate-matrix` |
| `/complex-numbers/geometric-representation` | `geometric-representation-visualizing-operations-matrix` |
| `/complex-numbers/imaginary-numbers` | `imaginary-numbers-cyclic-nature-powers-matrix` |
| `/complex-numbers/imaginary-numbers` | `imaginary-numbers-mathematical-properties-conjugates-matrix` |
| `/complex-numbers/imaginary-numbers` | `imaginary-numbers-simplifying-square-roots-matrix` |
| `/complex-numbers/imaginary-numbers` | `imaginary-numbers-summary-four-equivalent-matrix` |
| `/complex-numbers/multiplicative-inverse` | `multiplicative-inverse-common-mistakes-matrix` |
| `/complex-numbers/multiplicative-inverse` | `multiplicative-inverse-properties-multiplicative-inverse-matrix` |
| `/complex-numbers/multiplicative-inverse` | `multiplicative-inverse-summary-worked-examples-matrix` |
| `/complex-numbers/operations` | `operations-common-pitfalls-tips-matrix` |
| `/complex-numbers/properties` | `properties-algebraic-closure-matrix` |
| `/complex-numbers/properties` | `properties-summary-operation-effects-conjugate-matrix` |
| `/complex-numbers/trigonometric-form` | `trigonometric-form-quadrant-considerations-matrix` |
| `/complex-numbers/trigonometric-form` | `trigonometric-form-special-angles-axes-matrix` |

### functions (48)

| Page | Frame |
|---|---|
| `/functions/analyzing` | `analyzing-comparing-functions-across-representations-matrix` |
| `/functions/analyzing` | `analyzing-complete-analysis-at-glance-matrix` |
| `/functions/analyzing` | `analyzing-end-behavior-graph-matrix` |
| `/functions/analyzing` | `analyzing-interpreting-real-world-function-matrix` |
| `/functions/analyzing` | `analyzing-intervals-where-positive-negative-matrix` |
| `/functions/arithmetic` | `arithmetic-additional-restrictions-quotient-matrix` |
| `/functions/arithmetic` | `arithmetic-graphical-interpretation-matrix` |
| `/functions/arithmetic` | `arithmetic-notation-evaluation-at-point-matrix` |
| `/functions/basics` | `basics-determining-whether-relationship-is-matrix` |
| `/functions/basics` | `basics-functions-vs-relations-matrix` |
| `/functions/basics` | `basics-landscape-function-topics-matrix` |
| `/functions/basics` | `basics-representing-functions-matrix` |
| `/functions/composition` | `composition-composition-tasks-at-glance-matrix` |
| `/functions/composition` | `composition-decomposing-functions-matrix` |
| `/functions/composition` | `composition-domain-composite-functions-matrix` |
| `/functions/composition` | `composition-non-commutativity-matrix` |
| `/functions/domain` | `domain-domain-graph-matrix` |
| `/functions/domain` | `domain-domain-notation-matrix` |
| `/functions/domain` | `domain-domain-rules-at-glance-matrix` |
| `/functions/domain` | `domain-finding-domain-trigonometric-functions-matrix` |
| `/functions/families` | `families-comparing-function-families-matrix` |
| `/functions/families` | `families-families-at-glance-matrix` |
| `/functions/families` | `families-identifying-function-families-matrix` |
| `/functions/families` | `families-other-radical-functions-matrix` |
| `/functions/graphs` | `graphs-identifying-key-features-visually-matrix` |
| `/functions/graphs` | `graphs-intercepts-matrix` |
| `/functions/graphs` | `graphs-types-curves-matrix` |
| `/functions/inverse` | `inverse-common-inverse-pairs-matrix` |
| `/functions/inverse` | `inverse-inverse-function-notation-matrix` |
| `/functions/inverse` | `inverse-restricting-domain-create-inverse-matrix` |
| `/functions/piecewise` | `piecewise-common-mistakes-matrix` |
| `/functions/piecewise` | `piecewise-continuity-piecewise-functions-matrix` |
| `/functions/piecewise` | `piecewise-real-world-applications-matrix` |
| `/functions/piecewise` | `piecewise-step-functions-matrix` |
| `/functions/piecewise` | `piecewise-workflow-summary-matrix` |
| `/functions/properties` | `properties-absolute-extrema-matrix` |
| `/functions/properties` | `properties-asymptotes-matrix` |
| `/functions/properties` | `properties-bijective-functions-matrix` |
| `/functions/properties` | `properties-properties-at-glance-matrix` |
| `/functions/properties` | `properties-properties-at-glance-matrix-2` |
| `/functions/properties` | `properties-types-discontinuities-matrix` |
| `/functions/range` | `range-effect-transformations-range-matrix` |
| `/functions/range` | `range-range-common-function-types-matrix` |
| `/functions/range` | `range-range-notation-matrix` |
| `/functions/range` | `range-summary-methods-finding-range-matrix` |
| `/functions/transformations` | `transformations-effect-domain-range-matrix` |
| `/functions/transformations` | `transformations-horizontal-stretch-compression-matrix` |
| `/functions/transformations` | `transformations-parent-functions-matrix` |

### linear-algebra (94)

| Page | Frame |
|---|---|
| `/linear-algebra/decompositions/lower-upper` | `lower-upper-computational-cost-matrix` |
| `/linear-algebra/decompositions/svd` | `svd-svd-four-fundamental-subspaces-matrix` |
| `/linear-algebra/decompositions/svd` | `svd-svd-norms-matrix` |
| `/linear-algebra/decompositions` | `decompositions-choosing-right-decomposition-matrix` |
| `/linear-algebra/decompositions` | `decompositions-summary-five-decompositions-side-matrix` |
| `/linear-algebra/determinants/applications` | `applications-summary-determinant-applications-at-matrix` |
| `/linear-algebra/determinants/applications` | `applications-vandermonde-structured-determinants-matrix` |
| `/linear-algebra/determinants/cofactors` | `cofactors-computational-cost-matrix` |
| `/linear-algebra/determinants/cofactors` | `cofactors-summary-cofactor-construction-chain-matrix` |
| `/linear-algebra/determinants/geometry` | `geometry-area-volume-formulas-determinants-matrix` |
| `/linear-algebra/determinants/geometry` | `geometry-orientation-matrix` |
| `/linear-algebra/determinants/properties` | `properties-multiplicative-property-matrix` |
| `/linear-algebra/determinants` | `determinants-determinant-based-formulas-matrix` |
| `/linear-algebra/determinants` | `determinants-how-row-operations-affect-matrix` |
| `/linear-algebra/determinants` | `determinants-summary-how-compute-determinant-matrix` |
| `/linear-algebra/eigen/characteristic-equation` | `characteristic-equation-computing-characteristic-polynomial-matrix` |
| `/linear-algebra/eigen/complex` | `complex-dynamical-systems-interpretation-matrix` |
| `/linear-algebra/eigen/diagonalization` | `diagonalization-matrix-exponential-matrix` |
| `/linear-algebra/eigen/properties` | `properties-eigenvalues-special-matrix-types-matrix` |
| `/linear-algebra/eigen/properties` | `properties-summary-spectral-properties-at-matrix` |
| `/linear-algebra/eigen` | `eigen-examples-matrix` |
| `/linear-algebra/eigen` | `eigen-geometric-meaning-matrix` |
| `/linear-algebra/linear-systems/echelon-form` | `echelon-form-echelon-form-special-matrix` |
| `/linear-algebra/linear-systems/echelon-form` | `echelon-form-uniqueness-rref-matrix` |
| `/linear-algebra/linear-systems/gaussian-elimination` | `gaussian-elimination-computational-cost-matrix` |
| `/linear-algebra/linear-systems/gaussian-elimination` | `gaussian-elimination-three-elementary-row-matrix` |
| `/linear-algebra/linear-systems/homogeneous` | `homogeneous-homogeneous-vs-non-homogeneous-matrix` |
| `/linear-algebra/linear-systems/homogeneous` | `homogeneous-when-do-nontrivial-solutions-matrix` |
| `/linear-algebra/linear-systems/solvability` | `solvability-structure-solution-set-matrix` |
| `/linear-algebra/linear-systems` | `linear-systems-summary-rank-conditions-matrix` |
| `/linear-algebra/linear-systems` | `linear-systems-three-possible-outcomes-matrix` |
| `/linear-algebra/matrix/inverse` | `inverse-common-errors-matrix` |
| `/linear-algebra/matrix/inverse` | `inverse-methods-computing-inverse-matrix` |
| `/linear-algebra/matrix/operations` | `operations-dimension-summary-matrix` |
| `/linear-algebra/matrix/operations` | `operations-matrix-decompositions-matrix` |
| `/linear-algebra/matrix/rank` | `rank-rank-four-fundamental-subspaces-matrix` |
| `/linear-algebra/matrix/rank` | `rank-rank-linear-systems-matrix` |
| `/linear-algebra/matrix/rank` | `rank-what-rank-governs-matrix` |
| `/linear-algebra/matrix/trace` | `trace-linearity-matrix` |
| `/linear-algebra/matrix/trace` | `trace-trace-special-matrices-matrix` |
| `/linear-algebra/matrix/types` | `types-nilpotent-idempotent-matrices-matrix` |
| `/linear-algebra/matrix/types` | `types-permutation-matrices-matrix` |
| `/linear-algebra/matrix` | `matrix-four-views-matrix-matrix` |
| `/linear-algebra/matrix` | `matrix-matrix-arithmetic-at-glance-matrix` |
| `/linear-algebra/matrix` | `matrix-rank-trace-matrix` |
| `/linear-algebra/matrix` | `matrix-special-matrix-shapes-matrix` |
| `/linear-algebra/orthogonality/gram-schmidt` | `gram-schmidt-numerical-stability-matrix` |
| `/linear-algebra/orthogonality/inner-product` | `inner-product-pythagorean-theorem-matrix` |
| `/linear-algebra/orthogonality/least-squares` | `least-squares-regression-as-least-matrix` |
| `/linear-algebra/orthogonality/least-squares` | `least-squares-worked-example-fitting-matrix` |
| `/linear-algebra/orthogonality/orthogonal-sets` | `orthogonal-sets-matrices-orthonormal-columns-matrix` |
| `/linear-algebra/orthogonality/orthogonal-sets` | `orthogonal-sets-orthonormal-sets-matrix` |
| `/linear-algebra/orthogonality/projections` | `projections-projection-matrix-matrix` |
| `/linear-algebra/orthogonality/projections` | `projections-summary-where-projections-appear-matrix` |
| `/linear-algebra/orthogonality` | `orthogonality-four-fundamental-subspaces-revisited-matrix` |
| `/linear-algebra/orthogonality` | `orthogonality-inner-products-matrix` |
| `/linear-algebra/transformations/basis-change` | `basis-change-properties-preserved-similarity-matrix` |
| `/linear-algebra/transformations/basis-change` | `basis-change-why-basis-choice-matrix` |
| `/linear-algebra/transformations/geometric` | `geometric-determinant-as-geometric-signature-matrix` |
| `/linear-algebra/transformations/geometric` | `geometric-rotations-r-matrix` |
| `/linear-algebra/transformations/image-kernel` | `image-kernel-dimension-constraints-matrix` |
| `/linear-algebra/transformations/image-kernel` | `image-kernel-surjectivity-matrix` |
| `/linear-algebra/transformations/matrix-representation` | `matrix-representation-matrix-encodes-everything-matrix` |
| `/linear-algebra/transformations/matrix-representation` | `matrix-representation-reading-matrix-matrix` |
| `/linear-algebra/transformations/properties` | `properties-consequences-linearity-matrix` |
| `/linear-algebra/transformations/properties` | `properties-disproving-linearity-matrix` |
| `/linear-algebra/transformations` | `transformations-examples-beyond-r-matrix` |
| `/linear-algebra/transformations` | `transformations-geometry-matrix` |
| `/linear-algebra/transformations` | `transformations-non-examples-matrix` |
| `/linear-algebra/transformations` | `transformations-summary-when-transformation-is-matrix` |
| `/linear-algebra/vector-spaces/axioms` | `axioms-immediate-consequences-axioms-matrix` |
| `/linear-algebra/vector-spaces/axioms` | `axioms-non-examples-matrix` |
| `/linear-algebra/vector-spaces/axioms` | `axioms-summary-how-axioms-instantiate-matrix` |
| `/linear-algebra/vector-spaces/dimension` | `dimension-summary-count-vs-dimension-matrix` |
| `/linear-algebra/vector-spaces/fundamental-spaces` | `fundamental-spaces-orthogonal-complements-matrix` |
| `/linear-algebra/vector-spaces/linear-independence` | `linear-independence-independence-abstract-vector-matrix` |
| `/linear-algebra/vector-spaces/linear-independence` | `linear-independence-summary-tests-shortcuts-matrix` |
| `/linear-algebra/vector-spaces/span` | `span-geometric-interpretation-matrix` |
| `/linear-algebra/vector-spaces/span` | `span-span-abstract-vector-spaces-matrix` |
| `/linear-algebra/vector-spaces/subspaces` | `subspaces-row-space-matrix` |
| `/linear-algebra/vector-spaces/subspaces` | `subspaces-subspaces-operations-matrix` |
| `/linear-algebra/vector-spaces` | `vector-spaces-summary-catalog-vector-matrix` |
| `/linear-algebra/vectors/basic-operations` | `basic-operations-properties-addition-matrix` |
| `/linear-algebra/vectors/basic-operations` | `basic-operations-properties-scalar-multiplication-matrix` |
| `/linear-algebra/vectors/basic-operations` | `basic-operations-scalar-multiplication-matrix` |
| `/linear-algebra/vectors/cross-product` | `cross-product-standard-basis-cross-matrix` |
| `/linear-algebra/vectors/cross-product` | `cross-product-summary-cross-product-matrix` |
| `/linear-algebra/vectors/dot-product` | `dot-product-geometric-definition-matrix` |
| `/linear-algebra/vectors/dot-product` | `dot-product-orthogonal-projection-matrix` |
| `/linear-algebra/vectors/dot-product` | `dot-product-sign-dot-product-matrix` |
| `/linear-algebra/vectors/dot-product` | `dot-product-summary-every-use-matrix` |
| `/linear-algebra/vectors/linear-combinations` | `linear-combinations-trivial-non-trivial-matrix` |
| `/linear-algebra/vectors/properties` | `properties-orthogonality-matrix` |
| `/linear-algebra/vectors` | `vectors-types-vectors-matrix` |

### probability (83)

| Page | Frame |
|---|---|
| `/probability/axioms` | `axioms-connections-other-probability-concepts-matrix` |
| `/probability/axioms` | `axioms-how-axioms-generate-probability-matrix` |
| `/probability/axioms` | `axioms-immediate-consequences-axioms-matrix-2` |
| `/probability/axioms` | `axioms-what-axioms-do-not-matrix` |
| `/probability/bayes-theorem` | `bayes-theorem-bayes-theorem-formula-matrix` |
| `/probability/bayes-theorem` | `bayes-theorem-where-bayes-theorem-matrix` |
| `/probability/cdf` | `cdf-cdf-across-three-cases-matrix` |
| `/probability/cdf` | `cdf-cdf-vs-pmf-vs-matrix` |
| `/probability/cdf` | `cdf-key-properties-cdf-matrix` |
| `/probability/central-limit-theorem` | `central-limit-theorem-clt-vs-matrix` |
| `/probability/central-limit-theorem` | `central-limit-theorem-objects-involved-matrix` |
| `/probability/central-limit-theorem` | `central-limit-theorem-when-central-matrix` |
| `/probability/combinatorics` | `combinatorics-counting-distributions-matrix` |
| `/probability/combinatorics` | `combinatorics-summary-matrix` |
| `/probability/conditional-probability` | `conditional-probability-common-mistakes-matrix` |
| `/probability/conditional-probability` | `conditional-probability-common-patterns-where-matrix` |
| `/probability/conditional-probability` | `conditional-probability-examples-matrix` |
| `/probability/conditional-probability` | `conditional-probability-overview-conditional-probability-matrix` |
| `/probability/distributions/continuous` | `choosing-continuous-distribution-matrix` |
| `/probability/distributions/discrete` | `discrete-identifying-distribution-type-matrix` |
| `/probability/events` | `events-event-structure-types-matrix` |
| `/probability/events` | `events-events-at-glance-matrix` |
| `/probability/events` | `events-relations-between-events-matrix` |
| `/probability/expected-value` | `expected-value-examples-expected-value-matrix` |
| `/probability/expected-value` | `expected-value-properties-expected-value-matrix` |
| `/probability/independence` | `independence-common-mistakes-matrix` |
| `/probability/independence` | `independence-examples-matrix` |
| `/probability/independence` | `independence-independence-at-glance-matrix` |
| `/probability/indicators` | `indicators-indicators-at-glance-matrix` |
| `/probability/inequalities/chebyshev` | `chebyshev-chebyshev-s-inequality-at-matrix` |
| `/probability/inequalities/markov` | `markov-markov-s-inequality-at-matrix` |
| `/probability/inequalities` | `inequalities-featured-inequalities-at-glance-matrix` |
| `/probability/inequalities` | `inequalities-types-probability-inequalities-matrix` |
| `/probability/joint-probability` | `joint-probability-common-mistakes-matrix` |
| `/probability/joint-probability` | `joint-probability-joint-distributions-matrix` |
| `/probability/joint-probability` | `joint-probability-joint-probability-at-matrix` |
| `/probability/joint-probability` | `joint-probability-ways-calculate-joint-matrix` |
| `/probability/large-numbers-law` | `large-numbers-law-common-misconceptions-matrix` |
| `/probability/large-numbers-law` | `large-numbers-law-law-large-matrix` |
| `/probability/large-numbers-law` | `large-numbers-law-weak-vs-matrix` |
| `/probability/large-numbers-law` | `large-numbers-law-when-law-matrix` |
| `/probability/median` | `median-common-mistakes-matrix` |
| `/probability/median` | `median-discrete-vs-continuous-median-matrix` |
| `/probability/median` | `median-median-at-glance-matrix` |
| `/probability/median` | `median-median-common-distributions-matrix` |
| `/probability/median` | `median-properties-median-matrix` |
| `/probability/median` | `median-special-cases-edge-cases-matrix` |
| `/probability/models/coin-toss` | `coin-toss-assumptions-matrix` |
| `/probability/models/coin-toss` | `coin-toss-coin-toss-model-matrix` |
| `/probability/models/coin-toss` | `coin-toss-distributions-built-repeated-matrix` |
| `/probability/models/dice-roll` | `dice-roll-assumptions-matrix` |
| `/probability/models/dice-roll` | `dice-roll-dice-roll-model-matrix` |
| `/probability/models/dice-roll` | `dice-roll-distributions-built-repeated-matrix` |
| `/probability/models` | `models-models-random-variables-distributions-matrix` |
| `/probability/models` | `models-probability-models-at-glance-matrix` |
| `/probability/models` | `models-what-all-probability-models-matrix` |
| `/probability/mode` | `mode-common-mistakes-matrix` |
| `/probability/mode` | `mode-mode-at-glance-matrix` |
| `/probability/mode` | `mode-mode-common-distributions-matrix` |
| `/probability/mode` | `mode-multiple-modes-modality-matrix` |
| `/probability/probability-function/pmf` | `pmf-calculations-using-pmf-matrix` |
| `/probability/probability-function/pmf` | `pmf-common-mistakes-matrix` |
| `/probability/probability-function/pmf` | `pmf-derived-properties-spread-measures-matrix` |
| `/probability/probability-function/pmf` | `pmf-pmf-at-glance-matrix` |
| `/probability/probability-function/pmf` | `pmf-pmfs-common-discrete-distributions-matrix` |
| `/probability/probability-function/pmf` | `pmf-representations-three-views-matrix` |
| `/probability/probability-function` | `probability-function-how-we-use-matrix` |
| `/probability/probability-function` | `probability-function-two-forms-probability-matrix` |
| `/probability/probability-function` | `probability-function-ways-figure-out-matrix` |
| `/probability/random-variables` | `random-variables-random-variables-at-matrix` |
| `/probability/random-variables` | `random-variables-types-random-variables-matrix` |
| `/probability/rules` | `rules-quick-lookup-which-rule-matrix` |
| `/probability/sample-space` | `sample-space-listing-representing-outcomes-matrix` |
| `/probability/sample-space` | `sample-space-sample-spaces-at-matrix` |
| `/probability/sets` | `sets-core-set-operations-probability-matrix` |
| `/probability/total-probability` | `total-probability-common-mistakes-matrix` |
| `/probability/total-probability` | `total-probability-examples-matrix` |
| `/probability/total-probability` | `total-probability-relationship-bayes-theorem-matrix` |
| `/probability/total-probability` | `total-probability-when-you-need-matrix` |
| `/probability/tree-diagrams` | `tree-diagrams-tree-diagrams-vs-matrix` |
| `/probability/variance` | `standard-distribution-variances` |
| `/probability/variance` | `variance-how-calculate-variance-matrix` |
| `/probability/variance` | `variance-variance-vs-standard-deviation-matrix` |

### set-theory (7)

| Page | Frame |
|---|---|
| `/set-theory/cardinality` | `cardinality-comparing-cardinalities-matrix` |
| `/set-theory/cardinality` | `cardinality-summary-hierarchy-cardinalities-matrix` |
| `/set-theory/cardinality` | `cardinality-uncountable-sets-matrix` |
| `/set-theory/subsets` | `subsets-number-subsets-matrix` |
| `/set-theory/subsets` | `subsets-subset-superset-notation-matrix` |
| `/set-theory/venn-diagrams` | `venn-diagrams-three-set-venn-matrix` |
| `/set-theory/venn-diagrams` | `venn-diagrams-two-set-venn-matrix` |

### trigonometry (30)

| Page | Frame |
|---|---|
| `/trigonometry/degrees-radians` | `degrees-radians-complementary-supplementary-angles-matrix` |
| `/trigonometry/equations` | `equations-extraneous-solutions-matrix` |
| `/trigonometry/equations` | `equations-solving-basic-tangent-equations-matrix` |
| `/trigonometry/equations` | `equations-summary-approach-equation-form-matrix` |
| `/trigonometry/functions` | `functions-domain-range-summary-matrix` |
| `/trigonometry/functions` | `functions-reciprocal-quotient-relationships-matrix` |
| `/trigonometry/functions` | `functions-summary-six-functions-at-matrix` |
| `/trigonometry/graphs` | `graphs-graphing-hand-key-point-matrix` |
| `/trigonometry/graphs` | `graphs-graphs-cosecant-secant-cotangent-matrix` |
| `/trigonometry/graphs` | `graphs-vertical-shift-midline-matrix` |
| `/trigonometry/identities` | `identities-summary-trigonometric-identity-families-matrix` |
| `/trigonometry/inequalities` | `inequalities-solutions-as-intervals-matrix` |
| `/trigonometry/inequalities` | `inequalities-solving-sine-inequalities-matrix` |
| `/trigonometry/inequalities` | `inequalities-summary-inequality-forms-their-matrix` |
| `/trigonometry/inequalities` | `inequalities-unit-circle-method-matrix` |
| `/trigonometry/inverse-functions` | `inverse-functions-compositions-trigonometric-inverse-matrix` |
| `/trigonometry/inverse-functions` | `inverse-functions-evaluating-inverse-trigonometric-matrix` |
| `/trigonometry/inverse-functions` | `inverse-functions-inverse-function-notation-matrix` |
| `/trigonometry/inverse-functions` | `inverse-functions-summary-six-inverse-matrix` |
| `/trigonometry/properties` | `properties-critical-point-landscape-where-matrix` |
| `/trigonometry/properties` | `properties-identity-six-functions-period-matrix` |
| `/trigonometry/right-triangle` | `right-triangle-cofunction-relationships-matrix` |
| `/trigonometry/right-triangle` | `right-triangle-exact-values-at-matrix` |
| `/trigonometry/right-triangle` | `right-triangle-finding-missing-angles-matrix` |
| `/trigonometry/right-triangle` | `right-triangle-reciprocal-functions-cosecant-matrix` |
| `/trigonometry/sines-cosines-law` | `sines-cosines-law-ambiguous-case-matrix` |
| `/trigonometry/sines-cosines-law` | `sines-cosines-law-heron-apos-matrix` |
| `/trigonometry/sines-cosines-law` | `sines-cosines-law-summary-configuration-matrix` |
| `/trigonometry/unit-circle` | `unit-circle-reference-angles-matrix` |
| `/trigonometry/unit-circle` | `unit-circle-summary-sixteen-standard-matrix` |

---

## Authoring tips

- **Take the content from the page:** a bullet list where every item has the same parts (name, condition, formula) or a set of per-item tables gives the features directly.
- **Pick the type per feature, not per cell:** if some values of a feature are formulas, make the whole feature `math`.
- **Orientation:** with many items and few features, use `'rows'`; with few items and many features, `'columns'`. Readers can still flip it.
- **Numbers:** give a concrete setting in the feature name (e.g. "at $n = 5$, $r = 3$") so the values mean something, and leave a value out rather than invent one.
- **Graphs:** pick `x0`, `x1` (and `y1` if needed) so each shape is recognisable at 110 × 40.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\dfrac'`, `'\\infty'`).
