# Calculation Methods System — Reference

Documentation for `CalculationsExplorer`, `CalculationsCard`, and `MethodsExplorer` — the components that render mathematical methods as sectioned, filterable, expandable cards driven entirely by data.

**Special emphasis: data structures and the arbitrary `fields` object.**

---

## Contents

1. [Mental model](#1-mental-model)
2. [Data schema (start here)](#2-data-schema)
   - [Top-level data](#21-top-level-data-prop)
   - [The method object](#22-the-method-object)
   - [`fields` — the freeform tab system](#23-fields--the-freeform-tab-system)
   - [Field value shapes](#24-field-value-shapes)
   - [Illustrations](#25-illustration)
   - [Links](#26-link)
   - [Categories](#27-categories)
   - [Filter axes](#28-filter-axes)
3. [Component reference](#3-component-reference)
4. [The `components` map](#4-the-components-map)
5. [Authoring recipes](#5-authoring-recipes)
6. [Complete annotated example](#6-complete-annotated-example)
7. [Gotchas & conventions](#7-gotchas--conventions)

---

## 1. Mental model

Two layers:

- **CalculationsExplorer** — vertical sectioned page. Categories become sections (Roman numeral headings), methods within a category render as stacked cards, a sticky sidebar tracks scroll position, filter chips at top narrow the visible methods.
- **CalculationsCard** — a single method. Header always visible; when expanded, reveals a **statement zone** (formula + when-to-use + notation) and a **tab bar** whose tab names and contents come entirely from data.

Everything is data-driven. You describe methods as plain JavaScript objects; the system renders them. Nothing is hardcoded — categories, filter dimensions, tab names, tab content, and even the components rendered inside tabs are declared per-method.

Alternate top-level: **MethodsExplorer** — same method schema, different layout (grid + display modes). See §3.3.

---

## 2. Data schema

### 2.1. Top-level data prop

```js
<CalculationsExplorer data={{
  methods:    [ /* method objects */ ],
  categories: [ /* category objects */ ],       // optional
  filters:    { /* filter axes */ },             // optional
  components: { /* component map */ },           // optional
  filterStickyTop:  0,                           // optional, default 0
  sidebarStickyTop: null,                        // optional, auto-derived
}} />
```

| Prop | Required | Purpose |
|---|---|---|
| `methods` | yes | The array of methods. Order within a category is preserved. |
| `categories` | no | Section grouping. If omitted, auto-derived from `method.category` values. |
| `filters` | no | Filter chip bar. If omitted, no filters render. |
| `components` | no | React components invoked from method data. If omitted, `<ChildPlaceholder>` renders wherever a method tries to dispatch. |
| `filterStickyTop` | no | px offset for the top filter bar (accommodate your site nav). |
| `sidebarStickyTop` | no | px offset for the sidebar. Defaults to `filterStickyTop + 200` if filters exist, else `filterStickyTop + 20`. |

---

### 2.2. The method object

**Every field is optional.** Methods with no body content still render as a collapsed header-only card. Methods with no `id` get one derived from `name`.

```js
{
  // ─── IDENTITY ────────────────────────────────────────────
  id:       'row_expansion',
  name:     'Expansion along a row',
  subtitle: 'Recursive method — pick the row with most zeros',
  glyph:    'Rw',
  tag:      'Any n',

  // ─── STATEMENT ZONE (below header, when expanded) ────────
  when:     'Any size matrix — especially powerful when a row or column has many zeros.',
  formula:  'det(A) = \\sum_{j=1}^{n} (-1)^{i+j} \\cdot a_{ij} \\cdot M_{ij}',
  notation: 'M_{ij} is the (i,j) minor',

  // ─── LINKS (header icon buttons) ─────────────────────────
  links: [
    { url: '/linear-algebra/determinants', label: 'Topic page', tip: 'Overview', icon: 'book' },
    { url: '/visual-tools/det-calculator', label: 'Calculator', tip: 'Tool',     icon: 'tool' },
  ],

  // ─── TABS (freeform — see §2.3) ──────────────────────────
  fields: {
    steps:          { component: 'AlgorithmSteps', steps: [ /* ... */ ] },
    worked_example: { text: 'For $A = ...$, det(A) = 41.' },
    pitfalls:       { component: 'PitfallsList',   items: [ /* ... */ ] },
    notes:          [ 'Complexity: $O(n!)$.', { text: 'Named after Laplace.', links: [ /* ... */ ] } ],
  },

  // ─── STRUCTURAL / FILTER DIMENSIONS (see §2.7, §2.8) ─────
  category: 'expansion',
  size:     ['3x3', 'general'],
  use:      'sparse',
}
```

**Semantic slots** (fixed roles in the card layout):

| Field | Type | Where it renders |
|---|---|---|
| `id` | string | URL hash target. Derived from `name` if missing. |
| `name` | string | Serif title in header. |
| `subtitle` | string | Muted line under title. |
| `glyph` | string | Small serif tile on the far left of the header. 2–3 chars ideal. |
| `tag` | string | Blue chip on the right of the header (before the expand chevron). |
| `when` | string | "When to use" cell in the statement zone (blue). |
| `formula` | string (raw LaTeX) | "Statement" box in the statement zone. Rendered via KaTeX. |
| `notation` | string | "Notation" cell in the statement zone (gray). Appears next to `when` when both are present. |
| `links` | array | Header icon buttons (small squares with icons). |
| `fields` | object | Tab bar + tab content. **The freeform part.** See §2.3. |

**Filter/organizational slots** (used by the parent explorer, not rendered by the card itself):

| Field | Type | Used for |
|---|---|---|
| `category` | string | Section assignment (matches a `category.id`). |
| any key you define | string OR array | Filter axis matching (see §2.8). |

---

### 2.3. `fields` — the freeform tab system

**This is the point.** Tab NAMES, tab COUNT, and tab CONTENTS are entirely defined per-method. There is no fixed set of tabs, no required fields, no schema to conform to.

```js
fields: {
  <tab_key_1>: <field_value>,
  <tab_key_2>: <field_value>,
  ...
}
```

**Tab labels.** The key becomes the tab label. Underscores → spaces:

| Key | Label displayed |
|---|---|
| `steps` | `STEPS` |
| `worked_example` | `WORKED EXAMPLE` |
| `how_it_works` | `HOW IT WORKS` |
| `use_cases` | `USE CASES` |
| `edge_cases` | `EDGE CASES` |
| `historical_context` | `HISTORICAL CONTEXT` |
| `common_mistakes` | `COMMON MISTAKES` |

Labels are rendered in mono uppercase. Case in your key doesn't affect display.

**Tab order.** Whatever order the keys appear in the object literal. JavaScript preserves insertion order for string keys, so `{ steps: ..., pitfalls: ..., notes: ... }` renders tabs in that order.

**Empty tabs are skipped.** `null`, `undefined`, empty string, empty array, and empty object all cause the tab to not render. No tab-bar entry, no wasted space.

**Any name is fine.** You are not limited to `steps` / `worked_example` / `pitfalls`. Those are what the determinant data happens to use. `historical_context`, `visualization`, `edge_cases`, `references`, `derivation`, `related_theorems` — all valid, no registration needed.

---

### 2.4. Field value shapes

A field value can be one of four shapes. The card renders each differently.

#### 2.4.1. String

Plain string — rendered as prose through `processContent`. Inline math with `$...$`, links, and any other conventions your `processContent` supports work here.

```js
fields: {
  how_it_works:
    'Copy the first two columns to the right of the matrix. Sum the products ' +
    'of the three downward diagonals, then subtract the products of the three ' +
    'upward diagonals.',
}
```

#### 2.4.2. Array

An array of any mix of the four shapes. Each element renders independently, stacked vertically.

```js
fields: {
  notes: [
    'Complexity: $O(n!)$ in general — explosive growth.',
    {
      text: 'Named after Pierre-Simon Laplace, who systematized the method in 1772.',
      links: [
        { url: 'https://en.wikipedia.org/wiki/Laplace_expansion', label: 'Wikipedia' },
      ],
    },
  ],

  operation_effects: [
    '**Row swap** — multiplies det by $-1$.',
    '**Scaling a row by $k$** — multiplies det by $k$.',
    '**Adding a multiple of one row to another** — leaves det unchanged.',
  ],
}
```

#### 2.4.3. Component descriptor

An object with a `component` key (string). Dispatched via the explorer's `components` map. **Every remaining key is passed as a prop** — spread, NOT wrapped in a `props` sub-object.

```js
fields: {
  steps: {
    component: 'AlgorithmSteps',
    steps: [
      { title: 'Pick a row',      body: 'Choose the row with the most zeros.' },
      { title: 'Form the minors', body: 'For each nonzero entry, delete its row and column.' },
    ],
  },
}
```

Resolves as:

```jsx
<AlgorithmSteps steps={[
  { title: 'Pick a row',      body: '...' },
  { title: 'Form the minors', body: '...' },
]} />
```

Missing components render `<ChildPlaceholder name="AlgorithmSteps" />` — a visible dashed-border box with the name and prop keys. Useful during authoring; not silent.

#### 2.4.4. Block

An object with any of `text`, `links`, `illustrations` (but **no** `component` key). All three sub-fields are optional; provide whichever apply.

```js
fields: {
  derivation: {
    text: 'The formula follows from expanding by cofactors and applying multilinearity.',
    illustrations: [
      {
        src: '<svg viewBox="0 0 100 60">...</svg>',
        caption: 'Cofactor expansion diagram',
      },
    ],
    links: [
      { url: '/algebra/multilinearity', label: 'Multilinearity' },
    ],
  },
}
```

Renders in order: prose text → illustrations → link pills.

---

### 2.5. Illustration

```js
{
  src:     '<svg viewBox="0 0 100 60">...</svg>',  // inline SVG string OR image URL
  alt:     'Description',                          // for <img>. ignored for SVG.
  caption: 'A brief caption',                      // optional. rendered below.
  width:   400,                                    // optional. px cap on max-width.
}
```

Inline SVG is auto-detected by leading `<svg`. Anything else is treated as an image URL.

---

### 2.6. Link

```js
{
  url:   '/some/path',           // OR href — either works
  label: 'Topic page',           // OR text — either works
  tip:   'Overview of topic',    // hover tooltip. optional.
  icon:  'book',                 // only used in header links. see below.
}
```

| Field | Used for |
|---|---|
| `url` (or `href`) | The link target. |
| `label` (or `text`) | Displayed text. Also fallback for `tip`. |
| `tip` | Hover tooltip (`title` attribute). Optional. |
| `icon` | Only in `method.links[]` (header icons). Ignored in block links. |

**Icon set** (only relevant for header links):

| Icon key | Glyph |
|---|---|
| `link` (default) | chain-link |
| `book` | open book |
| `rules` | ruled lines |
| `tool` | wrench |
| `external` | arrow out of box |

Links appear in **two places**:

1. **Header icons** — from `method.links[]`. Small icon buttons. Use `icon` for the glyph.
2. **Inline pills** — from `field.links[]` inside a block. Text pills below the block. `icon` is ignored.

---

### 2.7. Categories

```js
categories: [
  { id: 'direct',      label: 'Direct formulas',      blurb: 'Closed-form for specific sizes.' },
  { id: 'expansion',   label: 'Cofactor expansion',   blurb: 'Recursive expansion.' },
  { id: 'reduction',   label: 'Reduction methods',    blurb: 'Reduce, then read off.' },
  { id: 'structural',  label: 'Structural shortcuts', blurb: 'When the matrix has special structure.' },
  { id: 'theoretical', label: 'Theoretical',          blurb: 'Definitional formulas.' },
]
```

| Field | Purpose |
|---|---|
| `id` | Matches `method.category`. Used as the section anchor id (`cat-<id>`). |
| `label` | Section heading. Also sidebar entry. |
| `blurb` | One-line description under the section heading. Optional. |

**Order matters.** Categories render in the order you list them, each with a Roman numeral (i, ii, iii, iv, v...).

**Auto-derivation.** If `data.categories` is omitted, one is derived per unique `method.category` value. Handy for prototyping; usually you'll want to declare them explicitly for label control.

**Category membership.** A method belongs to the category whose `id` matches `method.category`. Methods with a `category` value not in `data.categories` are dropped when categories are auto-derived, and placed under `"other"` when categories are explicit.

---

### 2.8. Filter axes

**Critical concept: the filter axis KEY is a top-level field on each method.** If you define a filter axis named `size`, methods declare their size via `method.size`.

```js
filters: {
  size: {
    label: 'Size',
    options: [
      { value: '2x2',     label: '2×2' },
      { value: '3x3',     label: '3×3' },
      { value: 'general', label: 'General n' },
    ],
  },
  use: {
    label: 'Use case',
    options: [
      { value: 'fast',    label: 'Fast computation' },
      { value: 'sparse',  label: 'Matrix has zeros' },
      { value: 'special', label: 'Special structure' },
      { value: 'proof',   label: 'For proofs' },
    ],
  },
}
```

**Corresponding method fields:**

```js
{ id: 'sarrus',        size: '3x3',              use: 'fast'    }
{ id: 'two_by_two',    size: '2x2',              use: 'fast'    }
{ id: 'row_reduction', size: 'general',          use: 'fast'    }
{ id: 'row_expansion', size: ['3x3', 'general'], use: 'sparse'  }
```

**Matching rules:**

- `method[axis]` can be a string OR an array of strings.
- Array = method matches ANY of its values (a method can appear under multiple filter selections).
- Multi-select within an axis = OR (methods matching any selected value pass).
- Across axes = AND (a method must pass every non-empty axis).
- Empty axis (no chips selected) = no filtering on that axis.

**Adding a new filter axis** is a two-step data change:

1. Add the axis definition to `data.filters`.
2. Add the corresponding field to every method that should be filterable on it.

No code changes.

---

## 3. Component reference

### 3.1. CalculationsExplorer

```jsx
<CalculationsExplorer data={/* see §2.1 */} />
```

Single `data` prop. All UI state (active filter chips, scroll-tracked active category) is internal.

**Behavior:**

- Filter bar sticky at `filterStickyTop`.
- Sidebar sticky at `sidebarStickyTop`.
- Scroll position tracked via `IntersectionObserver`; sidebar entry highlights the currently-visible section.
- Clicking a sidebar entry smooth-scrolls to that section, respecting the sticky offset.
- Empty state renders when filters exclude all methods.
- Match counters in sidebar entries update live as filters change.

### 3.2. CalculationsCard

```jsx
<CalculationCard
  data={/* single method object, see §2.2 */}
  components={/* component map, see §4 */}

  /* Optional controlled overrides — for advanced use */
  view={'hybrid' | 'stacked'}
  onViewChange={(next) => ...}
  expanded={boolean}
  onToggle={() => ...}
  defaultView="hybrid"
  defaultExpanded={false}
  isHighlighted={false}
/>
```

**Views:**

- `hybrid` (default) — statement zone above tabs. Best when both formula and stepwise content matter.
- `stacked` — vertical accordion. Statement zone becomes the "Essentials" row. Useful for long content or narrow layouts.

The user can switch via a toggle button rendered inside the card.

**Hash routing** (built in):

- On mount, if `window.location.hash` matches `id`, the card auto-expands and scrolls itself into view.
- On user-triggered expand, the card writes its `id` to the URL hash via `history.replaceState`.
- Listens to `hashchange` events for in-page navigation.

**Controlled overrides.** Normally the card owns its `view` and `expanded` state. Passing `view` or `expanded` props transfers control to the parent — useful if you want an "expand all" button, URL-driven state, or shared view state across cards.

### 3.3. MethodsExplorer

An alternate top-level container for the same method data. Different layout and interaction model:

- **Layout:** grid of card summaries rather than sectioned vertical list.
- **Display modes:** the method detail can render `inline` / `modal` / `drawer` / `split` / `page` / `lightbox` depending on config.
- **Secondary facets:** analog to `filters`, with slightly different chip UI.

Consumes the same **method object schema** as CalculationsExplorer (§2.2), so the same data works with either container. Choose based on the layout you want. See the file itself for full prop reference.

---

## 4. The `components` map

The `components` map is how you register React components that method data invokes by name.

```jsx
import AlgorithmSteps    from '../components/AlgorithmSteps';
import MatrixExample     from '../components/MatrixExample';
import PitfallsList      from '../components/PitfallsList';
import FormulaExplanation from '../components/FormulaExplanation';
import ProcedureSteps    from '../components/ProcedureSteps';
import SequentialReveal  from '../components/SequentialReveal';
import MathWorkflow      from '../components/MathWorkflow';

<CalculationsExplorer data={{
  methods: [ /* ... */ ],
  components: {
    AlgorithmSteps,
    MatrixExample,
    PitfallsList,
    FormulaExplanation,
    ProcedureSteps,
    SequentialReveal,
    MathWorkflow,
    // ...any custom components authored per this app
  },
}} />
```

**Dispatch pattern.** When method data contains `{ component: 'AlgorithmSteps', steps: [...] }`, the card:

1. Looks up `components.AlgorithmSteps`.
2. If not found, falls back to `DEFAULT_COMPONENTS.AlgorithmSteps`.
3. If still not found, renders `<ChildPlaceholder name="AlgorithmSteps" ... />`.
4. If found, invokes it with the descriptor object minus the `component` key, spread as props.

**Built-in defaults** — `DEFAULT_COMPONENTS` ships with placeholder implementations for `AlgorithmSteps`, `MathDerivation`, `FormulaExplanation`, `PitfallsList`, `MatrixExample`. Placeholders render a dashed-border box showing the component name and the prop keys received. Handy for authoring content before the actual components exist. Your `components` map overrides them per key.

**Prop shape.** Props are spread at the top level of the descriptor:

```js
// data:
{ component: 'MatrixExample', matrix: [[1, 2], [3, 4]], expandAlong: 'row', index: 0 }

// resolves to:
<MatrixExample matrix={[[1, 2], [3, 4]]} expandAlong="row" index={0} />
```

**NOT** `{ component: 'MatrixExample', props: { matrix, ... } }`. Flat.

---

## 5. Authoring recipes

### Add a new method

1. Decide which `category` it belongs to (add one to `data.categories` if needed).
2. Fill in identity: `id`, `name`, `subtitle`, `glyph`, `tag`.
3. Fill in the statement zone: `when`, `formula`, `notation` (as applicable).
4. Add `links` for related pages.
5. Populate `fields` with tabs that fit the method — no schema to satisfy, just pick names.
6. Add any filter-axis values as top-level fields (`size`, `use`, whatever axes you defined).

### Add a new tab

Add a key to `fields`. Value in any of the four shapes. Done.

```js
fields: {
  ...existing,
  edge_cases: 'Singular matrices give zero determinant; watch for numerical precision loss near singularity.',
}
```

### Add a new component-driven tab

1. Write the component: `export default function Timeline({ events }) { ... }`.
2. Register it: `components: { Timeline, ...existing }`.
3. Reference from data: `fields: { history: { component: 'Timeline', events: [...] } }`.

### Add a new filter axis

1. Add the axis to `data.filters`:
   ```js
   complexity: {
     label: 'Complexity',
     options: [
       { value: 'constant',   label: 'O(1)' },
       { value: 'linear',     label: 'O(n)' },
       { value: 'polynomial', label: 'O(n²)–O(n³)' },
       { value: 'exponential', label: 'O(n!) — O(2ⁿ)' },
     ],
   },
   ```
2. Tag each method: `complexity: 'polynomial'` or `complexity: ['polynomial', 'exponential']`.

### Add a new category

Add to `data.categories`; use its `id` as `method.category` on relevant methods.

### Turn a placeholder into a real component

Just build the component and register it in the `components` map under the same name — the placeholder disappears automatically. No data changes needed.

---

## 6. Complete annotated example

```js
const determinantsData = {

  methods: [

    // FULL-FEATURED — every field, mixed content shapes in fields
    {
      id:       'row_expansion',
      name:     'Expansion along a row',
      subtitle: 'Recursive method — pick the row with most zeros',
      glyph:    'Rw',
      tag:      'Any n',
      when:     'Any size matrix — especially powerful when a row or column has many zeros.',
      formula:  'det(A) = \\sum_{j=1}^{n} (-1)^{i+j} \\cdot a_{ij} \\cdot M_{ij}',

      links: [
        { url: '/linear-algebra/determinants',       label: 'Topic page',   tip: 'Overview',  icon: 'book' },
        { url: '/linear-algebra/determinants/rules', label: 'Rules',        tip: 'Rules',     icon: 'rules'},
        { url: '/visual-tools/det-calculator',       label: 'Calculator',   tip: 'Try it',    icon: 'tool' },
      ],

      fields: {
        // Component descriptor — dispatched to components.AlgorithmSteps
        steps: {
          component: 'AlgorithmSteps',
          steps: [
            { title: 'Pick a row',                      body: 'Choose the row with the most zeros to skip work.' },
            { title: 'Form the minors',                 body: 'For each nonzero entry, delete its row and column.' },
            { title: 'Compute each minor\u2019s det',   body: 'Apply the 2×2 formula at the base case.' },
            { title: 'Apply signs and sum',             body: 'Multiply by $(-1)^{i+j}$, sum the results.' },
          ],
        },

        // Another component descriptor
        worked_example: {
          component:  'MatrixExample',
          matrix:     [[2, 1, 3], [0, 4, 0], [1, 0, 6]],
          expandAlong: 'row',
          index:       2,
          explanation: 'Row 2 has two zeros — only the middle entry contributes.',
          result:      36,
        },

        // Component descriptor
        pitfalls: {
          component: 'PitfallsList',
          items: [
            { title: 'Sign mistakes',     body: 'Remember $(-1)^{i+j}$, not $(-1)^j$. Draw a checkerboard.' },
            { title: 'Wrong row',         body: 'A dense row triples your work. Scan for zeros first.' },
            { title: 'Minor vs cofactor', body: 'Minor is the sub-determinant; cofactor is minor × sign.' },
          ],
        },

        // Array — mix of string and block
        notes: [
          'Complexity: $O(n!)$ in general — explosive growth.',
          {
            text: 'Named after Pierre-Simon Laplace, who systematized the method in 1772.',
            links: [
              { url: 'https://en.wikipedia.org/wiki/Laplace_expansion', label: 'Wikipedia' },
            ],
          },
        ],
      },

      // Filter/organizational fields
      category: 'expansion',
      size:     ['3x3', 'general'],   // array → matches BOTH '3×3' and 'General n' filters
      use:      'sparse',
    },

    // MID-FEATURED — no glyph, most content as strings
    {
      id:       'sarrus',
      name:     'Sarrus\u2019 rule',
      tag:      '3\u00d73',
      when:     'Only for 3×3 matrices. The fastest visual method when you can\u2019t spot zeros to exploit.',
      formula:  'det(A) = aei + bfg + cdh - ceg - bdi - afh',
      links:    [ { url: '/visual-tools/sarrus-diagram', label: 'Visual diagram', icon: 'tool' } ],

      fields: {
        // String tab — plain prose
        how_it_works:
          'Copy the first two columns to the right of the matrix. Sum the products of the ' +
          'three downward diagonals, then subtract the products of the three upward diagonals.',

        // Block tab — text only
        worked_example: {
          text: 'For $A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 5 \\\\ 1 & 0 & 6 \\end{pmatrix}$, ' +
                'down-products sum to 53, up-products to 12, giving det(A) = **41**.',
        },

        // String tab
        limitations:
          'Does not generalize beyond 3×3. For larger matrices, use cofactor expansion or row reduction.',
      },

      category: 'direct',
      size:     '3x3',
      use:      'fast',
    },

    // SPARSE — just identity + formula, no tabs
    {
      id:      'two_by_two',
      name:    '2\u00d72 formula',
      glyph:   '2\u00d7',
      tag:     '2\u00d72',
      formula: 'det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',

      category: 'direct',
      size:     '2x2',
      use:      'fast',
    },
  ],

  categories: [
    { id: 'direct',      label: 'Direct formulas',      blurb: 'Closed-form for specific sizes.' },
    { id: 'expansion',   label: 'Cofactor expansion',   blurb: 'Recursive expansion along any row or column.' },
    { id: 'reduction',   label: 'Reduction methods',    blurb: 'Reduce, then read off the determinant.' },
    { id: 'structural',  label: 'Structural shortcuts', blurb: 'When the matrix has special structure.' },
    { id: 'theoretical', label: 'Theoretical',          blurb: 'Definitional formulas, useful for proofs.' },
  ],

  filters: {
    size: {
      label: 'Size',
      options: [
        { value: '2x2',     label: '2\u00d72' },
        { value: '3x3',     label: '3\u00d73' },
        { value: 'general', label: 'General n' },
      ],
    },
    use: {
      label: 'Use case',
      options: [
        { value: 'fast',    label: 'Fast computation'  },
        { value: 'sparse',  label: 'Matrix has zeros'  },
        { value: 'special', label: 'Special structure' },
        { value: 'proof',   label: 'For proofs'        },
      ],
    },
  },

  // Uncomment when custom components exist:
  // components: { AlgorithmSteps, MatrixExample, PitfallsList, ... },

  filterStickyTop: 64,   // adjust for your site nav height
};
```

---

## 7. Gotchas & conventions

### Formula LaTeX

- `formula` is **raw LaTeX with no delimiters**. Don't write `$$...$$` or `$...$` around it.
- Rendered via KaTeX. `\begin{pmatrix}...\end{pmatrix}`, `\sum`, `\int`, `\frac`, subscripts, superscripts — all fine.
- Escape backslashes: `\\sum`, `\\begin{...}`, `\\\\` for matrix row breaks (double-escaped because JS strings).

### `processContent`

- The card uses `processContent` for every string field EXCEPT `formula`.
- Whatever conventions `processContent` supports (markdown, inline `$...$` math, embedded links) work in `name`, `subtitle`, `when`, `notation`, `tag`, block `text`, string tab content, etc.
- `formula` bypasses `processContent` and goes directly through KaTeX.

### Empty content

- Empty strings, empty arrays, empty objects, `null`, `undefined` — all treated as absent.
- Empty tabs are dropped from the tab bar.
- Empty statement fields collapse the statement zone gracefully.

### `id` conventions

- Use snake_case for `id`. It becomes the URL hash and the DOM id.
- If you omit `id`, it's derived from `name`: lowercased, apostrophes/quotes/parens stripped, spaces → underscores. `"Sarrus' rule"` → `sarrus_rule`.
- Explicit `id` always wins over derivation.

### Category vs filter

- `category` is a **grouping** — every method belongs to exactly one, determining which section it renders in.
- Filter axes are **cross-cutting labels** — a method can have multiple values on any axis, and axes can overlap arbitrarily.
- Categories drive layout. Filters drive visibility.

### Hash routing

- URLs like `/methods#sarrus` will auto-open and scroll to that card.
- Expanding a card writes to the hash; the URL is shareable.
- Only ONE hash is ever "active" — expanding a second card overwrites the hash but does NOT collapse the first.
- To make cards mutually exclusive (accordion mode across cards), use the controlled `expanded`/`onToggle` props from a parent.

### Component descriptor spread

- The descriptor's props are spread flat, NOT wrapped:
  - ✅ `{ component: 'X', foo: 1, bar: 2 }` → `<X foo={1} bar={2} />`
  - ❌ `{ component: 'X', props: { foo: 1, bar: 2 } }` → `<X props={{...}} />` (wrong!)

### Missing components

- If a method references a component name not in `components` and not in `DEFAULT_COMPONENTS`, a visible `<ChildPlaceholder>` renders.
- This is intentional — silent failure would hide authoring errors. Placeholders show name and prop keys so you can spot what's wrong.

### Icon set for header links

- Only these values work: `link` (default), `book`, `rules`, `tool`, `external`.
- Anything else falls back to `link`.
- To add more icons, extend the `ICON_PATHS` object in `CalculationsCard.jsx`.

### Field-key naming

- Snake_case renders cleanly (`worked_example` → `WORKED EXAMPLE`).
- camelCase works but renders literally (`workedExample` → `WORKEDEXAMPLE` — no automatic word split).
- Prefer snake_case for tab keys.