# Linear Algebra Diagram Library — Documentation

**Version 2** · navy theme · sixteen components, thirty-two variants.
Supersedes `DOCS.md`, which covered only the first seven.

---

## 1. File tree

### 1.1 Production — React components

```
app/components/infographics/
├── matrix-scene/              MatrixScene.jsx          ← use MatrixScene-v2.jsx
├── property-law-card/         PropertyLawCard.jsx
├── theorem-card/              TheoremCard.jsx
├── object-type-profile/       ObjectTypeProfile.jsx
├── case-split-panel/          CaseSplitPanel.jsx
├── misconception-card/        MisconceptionCard.jsx
├── row-operation-trace/       RowOperationTrace.jsx
├── matrix-operation/          MatrixOperation.jsx
├── factorization-anatomy/     FactorizationAnatomy.jsx
├── dimension-ledger/          DimensionLedger.jsx
├── four-subspace-map/         FourSubspaceMap.jsx
├── test-selector/             TestSelector.jsx
├── algorithm-step-ladder/     AlgorithmStepLadder.jsx
├── equivalence-ring/          EquivalenceRing.jsx
├── identity-sheet/            IdentitySheet.jsx
├── concept-relationship-map/  ConceptRelationshipMap.jsx
└── method-comparison/         MethodComparison.jsx
```

| File | Variants | Imports MatrixScene | Est. instances in `/linear-algebra` |
|---|---|---|---|
| `MatrixScene-v2.jsx` | — (19 scenes) | — | shared primitive |
| `PropertyLawCard.jsx` | 4 | no | 30–40 |
| `RowOperationTrace.jsx` | 6 | yes | 25–35 |
| `ObjectTypeProfile.jsx` | 3 | yes | 15–20 |
| `TheoremCard.jsx` | 4 | no | ~14 |
| `CaseSplitPanel.jsx` | 2 | yes | 12–15 |
| `FourSubspaceMap.jsx` | 1 | no | 12–15 |
| `DimensionLedger.jsx` | 2 | no | ~10 |
| `FactorizationAnatomy.jsx` | 2 | no | 10–12 |
| `ConceptRelationshipMap.jsx` | 1 | no | ~10 |
| `MethodComparison.jsx` | 1 | no | ~9 |
| `MatrixOperation.jsx` | 2 | yes | ~8 |
| `AlgorithmStepLadder.jsx` | 1 | no | ~8 |
| `IdentitySheet.jsx` | 2 | no | ~8 |
| `TestSelector.jsx` | 1 | no | ~6 |
| `MisconceptionCard.jsx` | 3 | no | 5 now, more once written |
| `EquivalenceRing.jsx` | 1 | no | **2–3 — the weakest of the set** |

**Dependency graph.** `MatrixScene` is the only shared module.

```
MatrixScene ◄── ObjectTypeProfile
            ◄── CaseSplitPanel
            ◄── RowOperationTrace
            ◄── MatrixOperation
```

The nine newest components draw their own SVG where needed (`FourSubspaceMap`, `EquivalenceRing`, `ConceptRelationshipMap`) or use CSS blocks (`FactorizationAnatomy`, `DimensionLedger`). None of them needs the matrix primitive.

### 1.2 Production — pages

| File | Role |
|---|---|
| `page-matrix-product-laws.jsx` | **Reference page pattern.** Copy this shape. |
| `property-law-card-demo-page.jsx` | Superseded. Imports `MatrixScene` into the page — broken encapsulation. |

### 1.3 Demos

| File | Contents |
|---|---|
| `demos-all-built-components-navy.html` | First seven components, twenty variants. |
| `demos-unbuilt-types-navy.html` | The nine newest, navy. Written before the components; the render functions in it are what the components became. |
| `connector-arrows-navy.html` | Connector-arc mechanism in isolation. |
| `template-proof-sign-chart.html` | One renderer, three data objects, with a self-audit. |
| `variants-property-law-card-navy.html` | Design exploration — plate, docket. |
| `variants-row-operation-trace-navy.html` | Design exploration — filmstrip, ledger. |
| `variants-row-operation-trace-II-navy.html` | Design exploration — equation, binary, diptych, contact, spine. |

### 1.4 Research

| File | Contents |
|---|---|
| `la-diagram-candidates-v1.md` | The inventory: 15 keep, 15 kill, with trigger / payload / demand / landing sites. |

Prototypes for the fifteen keep types — all now built:

```
proto-property-law-card.html          proto-factorization-anatomy.html
proto-theorem-card.html               proto-four-subspace-map.html
proto-object-type-profile.html        proto-test-selector.html
proto-case-split-panel.html           proto-algorithm-step-ladder.html
proto-misconception-card.html         proto-equivalence-ring.html
proto-row-operation-trace.html        proto-identity-sheet.html
                                      proto-concept-relationship-map.html
                                      proto-method-comparison.html
```

Prototypes for killed types, deferred to other sections:

```
deferred-sign-chart-navy.html              → /calculus
deferred-function-feature-card-navy.html   → /calculus, /functions
deferred-transformation-family-navy.html   → /functions/transformations
deferred-number-set-profile-navy.html      → /arithmetic, /set-theory
deferred-reference-wheel-navy.html         → /trigonometry
killed-classification-tree-navy.html       → /calculus/limits/continuity
killed-composition-chain-navy.html         → /functions/composition
killed-inverse-pairing-navy.html           → /functions/inverse
killed-region-diagram-navy.html            → /calculus/integrals
killed-set-relations-navy.html             → /set-theory/subsets
```

---

## 2. Architecture

### 2.1 The contract

- **The page never manipulates data.** No destructuring, mapping, filtering, reshaping. It receives a flat object from `getStaticProps` and passes it as one prop.
- **The component does everything.** Derivation, grouping, geometry, gap detection, conditional rendering.
- **The page imports only frame components.** `MatrixScene` is a child of diagram components. A page importing it has broken encapsulation.

### 2.2 Props

| Prop | Type | Notes |
|---|---|---|
| `data` | object | One flat object. Shape per component — §4. |
| `theme` | string | `"navy"`. Unrecognised values fall back to navy. |
| `variant` | string | Layout. Unrecognised values fall back to the default. |

`MatrixScene` additionally takes `spec` / `scene` + `content`, `cellSize`, `onInk`, `maxWidth`.

### 2.3 Theming

Every component declares:

```js
const THEMES = {
  navy: { paper, ink, muted, line, accent, soft },
};
const DEFAULT_THEME = 'navy';
```

CSS is generated by iterating that object, so **adding a theme is one entry** — no markup changes anywhere.

```
--paper   background
--ink     primary text, brackets, masthead
--muted   secondary text
--line    borders, rules
--accent  emphasis, failure marking, pivots
--soft    tinted panel
```

`MatrixScene` adds a role palette (`neutral`, `rowA`, `colB`, `out`, `alt`), a pivot pair, and an `onInk` block for dark-band rendering.

**Known inconsistency.** The first seven components still carry nine theme blocks each. The nine newest carry navy only. They should be brought into line.

### 2.4 Rich text

Prose fields run through `processContent` from `@/app/utils/contentProcessor`.

| Syntax | Result |
|---|---|
| `$x^2$` / `$$x^2$$` | inline / display KaTeX |
| `**bold**`, `` `code` `` | bold, inline code |
| `[text](!/linear-algebra/…)` | internal link, same tab |
| `[text](https://…)` | external link, new tab |
| `#tab:name#` | tab link |

**Rich:** sentences — `intro`, `note`, `why`, `whyTempting`, `consequence`, `reading`, `footnote`, `exhaustiveness`, `statement`, `conclusion`, `condition`, `existsWhen`, `failsWhen`, `preferredWhen`, `identity`, `verdict`, `limit`.
**Raw:** slot values — matrix cells, dimension counts, pivot coordinates, badge labels, cost strings, segment sizes.

### 2.5 Gap detection

Components render a **placeholder rather than silence** when a load-bearing field is missing. The diagram doubles as a content audit.

| Component | Missing field | Behaviour |
|---|---|---|
| `TheoremCard` | `converse` | "Not addressed" badge, accent top border |
| `MisconceptionCard` | `whyTempting` | Italic placeholder |
| `CaseSplitPanel` | `exhaustiveness` | Dashed placeholder |
| `RowOperationTrace` | `reading` | Italic placeholder |
| `ObjectTypeProfile` | any slot | Cell in accent, total in masthead |
| `FactorizationAnatomy` | any of the four conditions | Cell tinted, "— not stated" |
| `DimensionLedger` | segments ≠ total | Bar drawn dashed in accent, mismatch named |
| `FourSubspaceMap` | a space's `basis` | "basis not computed" in accent |
| `TestSelector` | `test.limit` | Italic placeholder in the limit strip |
| `AlgorithmStepLadder` | `step.why` | Italic placeholder in the justification column |
| `EquivalenceRing` | `balance` | Dashed placeholder |
| `IdentitySheet` | a line's `condition` | "unconditional?" in accent, counted in the note |
| `ConceptRelationshipMap` | an edge's `condition` | "Condition not stated", counted in masthead |
| `MethodComparison` | `failsWhen`, `preferredWhen`, `flip` | Italic placeholder per cell |

---

## 3. Usage

### 3.1 Page pattern

```jsx
import React from 'react';
import Head from 'next/head';
import PropertyLawCard from '@/app/components/infographics/property-law-card/PropertyLawCard';

export async function getStaticProps() {
  const dotProductLaws = { kicker: '…', title: '…', laws: [ /* … */ ] };
  return { props: { dotProductLaws, seoData: { /* … */ } } };
}

export default function Page({ seoData, dotProductLaws }) {
  return (
    <>
      <Head><title>{seoData.title}</title></Head>
      <PropertyLawCard data={dotProductLaws} theme="navy" variant="docket" />
    </>
  );
}
```

### 3.2 Inside `sectionsContent`

```jsx
{
  id: '6',
  title: sectionsContent.obj6.title,
  content: [
    sectionsContent.obj6.content,
    <PropertyLawCard key="obj6-diagram" data={dotProductLaws} theme="navy" variant="docket" />,
  ]
}
```

### 3.3 All thirty-two variants

```jsx
{/* PropertyLawCard — 4 */}
<PropertyLawCard data={laws} theme="navy" variant="plate" />
<PropertyLawCard data={laws} theme="navy" variant="docket" />
<PropertyLawCard data={laws} theme="navy" variant="grid" />
<PropertyLawCard data={laws} theme="navy" variant="ledger" />

{/* TheoremCard — 4 */}
<TheoremCard data={theorems} theme="navy" variant="split" />
<TheoremCard data={theorems} theme="navy" variant="compact" />
<TheoremCard data={theorems} theme="navy" variant="pair" />
<TheoremCard data={theorems} theme="navy" variant="brief" />

{/* ObjectTypeProfile — 3 */}
<ObjectTypeProfile data={types} theme="navy" variant="cards" />
<ObjectTypeProfile data={types} theme="navy" variant="matrix" />
<ObjectTypeProfile data={types} theme="navy" variant="stack" />

{/* CaseSplitPanel — 2 */}
<CaseSplitPanel data={cases} theme="navy" variant="panels" />
<CaseSplitPanel data={cases} theme="navy" variant="rows" />

{/* MisconceptionCard — 3 */}
<MisconceptionCard data={errors} theme="navy" variant="split" />
<MisconceptionCard data={errors} theme="navy" variant="grid" />
<MisconceptionCard data={errors} theme="navy" variant="strip" />

{/* RowOperationTrace — 6 */}
<RowOperationTrace data={trace}      theme="navy" variant="ledger" />
<RowOperationTrace data={trace}      theme="navy" variant="filmstrip" />
<RowOperationTrace data={traceEq}    theme="navy" variant="equation" />
<RowOperationTrace data={traceDip}   theme="navy" variant="diptych" />
<RowOperationTrace data={traceLong}  theme="navy" variant="contact" />
<RowOperationTrace data={traceSpine} theme="navy" variant="spine" />

{/* MatrixOperation — 2 */}
<MatrixOperation data={product} theme="navy" variant="full" />
<MatrixOperation data={product} theme="navy" variant="compact" />

{/* FactorizationAnatomy — 2 */}
<FactorizationAnatomy data={qr}     theme="navy" variant="anatomy" />
<FactorizationAnatomy data={family} theme="navy" variant="strip" />

{/* DimensionLedger — 2 */}
<DimensionLedger data={ledger} theme="navy" variant="bars" />
<DimensionLedger data={ledger} theme="navy" variant="pair" />

{/* FourSubspaceMap — 1 */}
<FourSubspaceMap data={foursub} theme="navy" variant="strang" />

{/* TestSelector — 1 */}
<TestSelector data={tests} theme="navy" variant="tree" />

{/* AlgorithmStepLadder — 1 */}
<AlgorithmStepLadder data={gramSchmidt} theme="navy" variant="ladder" />

{/* EquivalenceRing — 1 */}
<EquivalenceRing data={tfae} theme="navy" variant="ring" />

{/* IdentitySheet — 2 */}
<IdentitySheet data={identities} theme="navy" variant="columns" />
<IdentitySheet data={identities} theme="navy" variant="single" />

{/* ConceptRelationshipMap — 1 */}
<ConceptRelationshipMap data={relmap} theme="navy" variant="graph" />

{/* MethodComparison — 1 */}
<MethodComparison data={methods} theme="navy" variant="cost" />
```

---

## 4. Payload schemas — the nine newest

Schemas for the first seven are unchanged; see `DOCS.md` §4.1–4.8.

### 4.9 FactorizationAnatomy

**Variants:** `anatomy` (default) · `strip`

```js
// anatomy
{
  kicker, title, intro,
  factors: [{
    symbol, name, dim,
    width, height,                    // block size in px; defaults 100 × 120
    fill,                             // 'upper'|'lower'|'diag'|'ortho'|'dense'
    requires, structure, property, contains, rank, note,
  }],
  existsWhen, uniqueWhen, cost, preferredWhen,
}

// strip
{
  kicker, title, intro, tallyLabel,
  family: [{ name, form, existsWhen, cost }],
}
```

The **first factor is the result** — rendered in inverted ink, joined by `=`. Later factors join by `·`. Passing `family` without `factors` forces the strip variant regardless of `variant`.

### 4.10 DimensionLedger

**Variants:** `bars` (default) · `pair`

```js
{
  kicker, title, intro, identity,
  bars: [{
    label, space, total,
    segments: [{ label, size, hot }],
  }],
}
```

**Computed.** The component sums `segments[].size` and compares to `total`. A mismatch draws the bar dashed in accent and reports "segments sum to N — total is M". Omitting `total` makes the sum authoritative, so the bar always balances. Two bars render side by side automatically; `pair` forces it.

### 4.11 FourSubspaceMap

**Variant:** `strang`

```js
{
  kicker, title, intro, reading, readingLabel, mapName,
  domainLabel, codomainLabel,
  facts: [{ label, value }],
  spaces: {
    row:      { name, dim, basis: [] },
    null:     { name, dim, basis: [] },   // or `nullSpace`
    column:   { name, dim, basis: [] },
    leftNull: { name, dim, basis: [] },
  },
}
```

Each region renders its name, dimension, and basis vectors stacked. A space with an empty `basis` renders "basis not computed" in accent — the corpus describes the left null space far more often than it exhibits one.

### 4.12 TestSelector

**Variant:** `tree`

```js
{
  kicker, question, intro, shortcutsLabel, gateLabel,
  shortcuts: [{ when, then }],
  branches: [{
    condition,
    children: [ /* recursive: same branch shape */ ],
    test: { name, cost, doThis, why, needs, verdict, limit },
  }],
}
```

A branch has **either** `children` **or** `test`. Depth is unbounded — the renderer recurses. The `limit` strip is always drawn; omitting `test.limit` fires the placeholder.

### 4.13 AlgorithmStepLadder

**Variant:** `ladder`

```js
{
  kicker, title, intro, tallyLabel, input, output,
  steps: [{ operation, formula, why, state, warning, warningLabel, final }],
  footer: [{ label, value, cost }],
}
```

Step numbers are generated. The last step is `final` unless another step declares it. `warning` spans the operation-through-state columns and sits directly under the rung that causes it — that placement is the point of the type.

### 4.14 EquivalenceRing

**Variant:** `ring`

```js
{
  kicker, title, intro, subject, balance, balanceLabel, tallyLabel,
  statements: [{ text, domain }],     // domain: 'det'|'rank'|'space'|'system'
}
```

**Computed.** Node positions come from `statements.length` (evenly spaced from −π/2), chords from every non-adjacent pair, and the domain tally by counting. Add an eleventh statement and the ring re-lays itself.

**Usage note.** This type lands in only 2–3 places across the section, two of which are the same TFAE list restated. It is the least reusable of the sixteen.

### 4.15 IdentitySheet

**Variants:** `columns` (default) · `single`

```js
{
  kicker, title, intro, note, noteLabel, tallyLabel,
  groups: [{
    heading,
    identities: [{ formula, condition, strict }],
  }],
}
```

`strict: true` marks a condition that is easy to violate without noticing. A line with no `condition` renders "unconditional?" in accent; the component counts them and, absent a `note`, writes the count into the footer itself.

### 4.16 ConceptRelationshipMap

**Variant:** `graph`

```js
{
  kicker, title, intro,
  nodes: [{ id, label, sub, x, y, w, h, anchor, soft }],
  edges: [{ from, to, relation, shortCondition, condition }],
}
```

**Relation vocabulary** → visual class:

| Relation | Class | Stroke |
|---|---|---|
| `special`, `generalises` | structural | solid ink |
| `requires`, `builds`, `solves` | dependency | dashed muted |
| `coincides`, `iterates`, `equivalent` | conditional | solid accent |

**Computed.** Edge endpoints are derived from the node boxes — same-row pairs join edge-to-edge, otherwise top-to-bottom. Node `x/y/w/h` are supplied; the wiring is not. Edges missing `condition` render in accent and are counted in the masthead.

### 4.17 MethodComparison

**Variant:** `cost`

```js
{
  kicker, title, intro, flip, flipLabel, tallyLabel,
  methods: [{
    name, subtitle,
    cost,                             // display string, e.g. '~ 2n³'
    exponent,                         // number, drives the bar
    prohibitive,                      // renders the bar in accent
    scaleLeft, scaleRight,
    failsWhen, preferredWhen,
  }],
}
```

**Computed.** Bar widths scale each `exponent` against the largest in the set, floored at 3%. The data supplies the exponent, never the width. All three of `failsWhen`, `preferredWhen` and `flip` fire placeholders when absent — a cost figure alone does not tell anyone which method to pick.

---

## 5. Known gaps

**Two prototyped variants unbuilt.** `chain` and `stack` on `RowOperationTrace` — in `proto-row-operation-trace.html`. `filmstrip` is not `chain` (dark surface); `spine` is not `stack` (different layout).

**Theme inconsistency.** The first seven components carry nine theme blocks each; the nine newest carry navy only. Bring the first seven into line.

**Role palette is not navy-derived.** `MatrixScene`'s `colB` (rust) and `out` (amber), and the `onInk` gold pivot, are fixed values chosen for contrast rather than derived from `--accent`. Strict single-hue navy would mean tinting and shading the accent instead.

**Mobile matrix sizing.** `MatrixScene` scales the whole SVG down on narrow viewports rather than reflowing. Past roughly six columns the text becomes unreadable on a phone.

**`property-law-card-demo-page.jsx`** breaks encapsulation. Superseded by `page-matrix-product-laws.jsx`.

**The insertion pass does not exist.** Phase 3 of the original plan — walk the corpus, identify anchors, emit proposals, surface content gaps — has not been started. Sixteen templates are the tooling for it, not the thing itself.
