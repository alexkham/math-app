# Linear Algebra Diagram Library — Documentation

Version 1 · navy theme · seven components, twenty variants.

---

## 1. File tree

Everything currently in `/mnt/user-data/outputs/`. Three groups: **production**, **demos**, **research**.

### 1.1 Production — React components

These go into the app. Suggested destination shown alongside.

```
app/components/infographics/
├── matrix-scene/
│   └── MatrixScene.jsx              ← use MatrixScene-v2.jsx
├── property-law-card/
│   └── PropertyLawCard.jsx
├── theorem-card/
│   └── TheoremCard.jsx
├── object-type-profile/
│   └── ObjectTypeProfile.jsx
├── case-split-panel/
│   └── CaseSplitPanel.jsx
├── misconception-card/
│   └── MisconceptionCard.jsx
├── row-operation-trace/
│   └── RowOperationTrace.jsx
└── matrix-operation/
    └── MatrixOperation.jsx
```

| File | Size | Role |
|---|---|---|
| `MatrixScene-v2.jsx` | 30 KB | **Shared SVG renderer.** 19 scenes, connector arcs, pivot/changed marking, `onInk` surface. Imported by four other components. Superseded `MatrixScene.jsx`. |
| `MatrixScene.jsx` | 28 KB | First version. No `--pivot` token, no `onInk`, no `elementary` scene. Kept for reference; **do not use**. |
| `PropertyLawCard.jsx` | 25 KB | 4 variants. No `MatrixScene` dependency. |
| `TheoremCard.jsx` | 14 KB | 4 variants. No `MatrixScene` dependency. |
| `ObjectTypeProfile.jsx` | 15 KB | 3 variants. Imports `MatrixScene`. |
| `CaseSplitPanel.jsx` | 17 KB | 2 variants. Imports `MatrixScene`. Carries six built-in SVG figures. |
| `MisconceptionCard.jsx` | 10 KB | 3 variants. No `MatrixScene` dependency. |
| `RowOperationTrace.jsx` | 30 KB | 6 variants. Imports `MatrixScene`. |
| `MatrixOperation.jsx` | 13 KB | 2 variants. Imports `MatrixScene`. Computes conformability. |

**Dependency graph.** `MatrixScene` is the only shared module. Nothing else imports anything else.

```
MatrixScene ◄── ObjectTypeProfile
            ◄── CaseSplitPanel
            ◄── RowOperationTrace
            ◄── MatrixOperation
```

### 1.2 Production — pages

```
pages/linear-algebra/…/index.jsx
```

| File | Role |
|---|---|
| `page-matrix-product-laws.jsx` | **Reference page pattern.** `getStaticProps` builds the data, page imports one frame component, passes one flat object. Copy this shape. |
| `property-law-card-demo-page.jsx` | Earlier attempt. **Violates encapsulation** — imports `MatrixScene` directly into the page. Kept for the mock-data examples only; do not copy the structure. |

### 1.3 Demos

| File | Contents |
|---|---|
| `demos-all-built-components-navy.html` | **All seven components, all twenty variants**, one page, standalone. Vanilla JS port of the same render logic — no build step, open it in a browser. |
| `connector-arrows-navy.html` | The connector-arc mechanism in isolation: anchor resolution, lifted Bézier, arrowhead markers. |
| `template-proof-sign-chart.html` | Proof that one renderer + three data objects produces three charts. Includes a self-audit that fails visibly when data is inconsistent. |
| `variants-property-law-card-navy.html` | Design exploration — `plate` and `docket` at higher visual contrast. |
| `variants-row-operation-trace-navy.html` | Design exploration — `filmstrip`, `ledger`. |
| `variants-row-operation-trace-II-navy.html` | Design exploration — `equation`, `binary`, `diptych`, `contact`, `spine`. `binary` later split out as `MatrixOperation`. |

### 1.4 Research — inventory and prototypes

| File | Contents |
|---|---|
| `la-diagram-candidates-v1.md` | **The inventory.** 15 keep types, 15 kill types, each with trigger / payload / demand / landing sites. Derived from the actual `/pages/linear-algebra` corpus. |

Prototypes for the **fifteen keep types**, nine of which are not yet built as components:

```
proto-property-law-card.html          → PropertyLawCard          ✓ built
proto-theorem-card.html               → TheoremCard              ✓ built
proto-object-type-profile.html        → ObjectTypeProfile        ✓ built
proto-case-split-panel.html           → CaseSplitPanel           ✓ built
proto-misconception-card.html         → MisconceptionCard        ✓ built
proto-row-operation-trace.html        → RowOperationTrace        ✓ built
proto-factorization-anatomy.html      → FactorizationAnatomy       not built
proto-four-subspace-map.html          → FourSubspaceMap +
                                        DimensionLedger            not built
proto-test-selector.html              → TestSelector               not built
proto-algorithm-step-ladder.html      → AlgorithmStepLadder        not built
proto-equivalence-ring.html           → EquivalenceRing            not built
proto-identity-sheet.html             → IdentitySheet              not built
proto-concept-relationship-map.html   → ConceptRelationshipMap     not built
proto-method-comparison.html          → MethodComparison           not built
```

Prototypes for **killed types**, deferred to other sections:

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

**The page never manipulates data.** No destructuring, no `map`, no `filter`, no reshaping. It receives a flat object from `getStaticProps` and passes it to one component as a single prop.

**The component does everything.** Derivation, grouping, gap detection, layout computation, conditional rendering — all inside.

**The page imports only frame components.** `MatrixScene` is a child of the diagram components. A page that imports `MatrixScene` has broken encapsulation.

### 2.2 Props

Every component takes the same three:

| Prop | Type | Notes |
|---|---|---|
| `data` | object | One flat object. Shape varies per component — see §4. |
| `theme` | string | Currently `"navy"` only. Unrecognised values fall back to navy. |
| `variant` | string | Which layout. Unrecognised values fall back to the component's default. |

`MatrixScene` additionally takes `spec` / `scene` + `content`, `cellSize`, `onInk`, `maxWidth`.

### 2.3 Theming

Themes are CSS custom-property blocks scoped under `.{prefix}-root.{prefix}-t-{name}`. Navy is currently the only theme defined; the mechanism supports more without touching any markup.

Six base tokens:

```
--paper   page background
--ink     primary text, brackets, masthead background
--muted   secondary text
--line    borders, rules
--accent  emphasis, failure marking, pivots
--soft    tinted panel background
```

`MatrixScene` adds a role palette (`neutral`, `rowA`, `colB`, `out`, `alt`), a pivot pair (`--pivot`, `--pivot-text`), and an `onInk` block for rendering matrices against the dark band.

**Adding a theme** = one entry in the `THEMES` object. Nothing downstream changes.

### 2.4 Rich text

Every prose field runs through `processContent` from `@/app/utils/contentProcessor`. This is the same parser the rest of the app uses, so the syntax is identical:

| Syntax | Result |
|---|---|
| `$x^2$` | inline KaTeX |
| `$$x^2$$` | display KaTeX |
| `**bold**` | bold |
| `` `code` `` | inline code |
| `[text](!/linear-algebra/matrix/rank)` | internal link, same tab |
| `[text](https://…)` | external link, new tab |
| `#tab:name#` | tab link |

**Rich fields:** anything that reads as a sentence — `intro`, `note`, `why`, `whyTempting`, `consequence`, `reading`, `footnote`, `exhaustiveness`, `statement`, `conclusion`.

**Raw fields:** anything that is a value in a slot — matrix cell values, dimension counts, pivot coordinates, badge labels. These bypass the parser.

### 2.5 Gap detection

Several components render a **placeholder instead of silence** when a load-bearing field is missing. This is deliberate: the diagram doubles as a content audit.

| Component | Missing field | Behaviour |
|---|---|---|
| `TheoremCard` | `converse` | Badge reads "Not addressed", top border switches to accent |
| `MisconceptionCard` | `whyTempting` | Italic placeholder explaining what is missing |
| `CaseSplitPanel` | `exhaustiveness` | Dashed-border placeholder |
| `RowOperationTrace` | `reading` | Italic placeholder |
| `ObjectTypeProfile` | any slot value | Cell marked in accent, total counted in the masthead |

---

## 3. Usage

### 3.1 Page pattern

```jsx
import React from 'react';
import Head from 'next/head';
import PropertyLawCard from '@/app/components/infographics/property-law-card/PropertyLawCard';

export async function getStaticProps() {
  const dotProductLaws = {
    kicker: 'Vectors \u00B7 dot product',
    title: 'Properties of the inner product',
    intro: 'Grouped by verdict.',
    laws: [
      { name: 'Commutativity', statement: '$\\mathbf{u}\\cdot\\mathbf{v} = \\mathbf{v}\\cdot\\mathbf{u}$', verdict: 'holds' },
    ],
  };

  return {
    props: {
      dotProductLaws,
      seoData: { title: '…', description: '…', url: '…', name: '…' },
    },
  };
}

export default function Page({ seoData, dotProductLaws }) {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
      </Head>
      <PropertyLawCard data={dotProductLaws} theme="navy" variant="docket" />
    </>
  );
}
```

### 3.2 Inside `sectionsContent`

Diagrams occupy the same slot as the existing HTML tables — an entry in a section's `content` array.

```jsx
const genericSections = [
  {
    id: '6',
    title: sectionsContent.obj6.title,
    link: sectionsContent.obj6.link,
    content: [
      sectionsContent.obj6.content,
      <PropertyLawCard
        key="obj6-diagram"
        data={dotProductLaws}
        theme="navy"
        variant="docket"
      />,
    ],
  },
];
```

### 3.3 All twenty variants

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
<RowOperationTrace data={trace}       theme="navy" variant="ledger" />
<RowOperationTrace data={trace}       theme="navy" variant="filmstrip" />
<RowOperationTrace data={traceEq}     theme="navy" variant="equation" />
<RowOperationTrace data={traceDip}    theme="navy" variant="diptych" />
<RowOperationTrace data={traceLong}   theme="navy" variant="contact" />
<RowOperationTrace data={traceSpine}  theme="navy" variant="spine" />

{/* MatrixOperation — 2 */}
<MatrixOperation data={product} theme="navy" variant="full" />
<MatrixOperation data={product} theme="navy" variant="compact" />
```

**Note.** Three `RowOperationTrace` variants need extra payload fields, so one data object will not drive all six — see §4.6.

---

## 4. Payload schemas

### 4.1 PropertyLawCard

**Variants:** `plate` (default) · `docket` · `grid` · `ledger`

```js
{
  kicker, title, intro, footnote,       // rich
  tallyLabel,                           // default 'laws'
  laws: [{
    name,                               // raw
    statement,                          // rich — usually $math$
    verdict,                            // 'holds' | 'conditional' | 'fails' | 'undefined'
    verdictLabel,                        // overrides the default badge text
    requires, holdsWhen, failsWhen, commonError,   // rich, all optional
    subtitle,                           // ledger variant only
    note,                               // rich
    witness: 'string' | { label, lines: [] },
  }]
}
```

**Derived, not supplied.** Omit `verdict` and the component infers it: `witness` or `failsWhen` → `fails`; `holdsWhen` or `requires` → `conditional`; otherwise `holds`. The `docket` variant groups by verdict automatically.

**Variant differences**

| Variant | Shows `note` | Shows `witness` | Shows `meta` | Notes |
|---|---|---|---|---|
| `plate` | yes | yes, pinned bottom | yes | Index rail inverts on failure |
| `docket` | yes, in drop | yes, in drop | condition only | Grouped by verdict |
| `grid` | yes | yes | yes | Auto-fit cards |
| `ledger` | no | yes, full width | no | Densest |

### 4.2 TheoremCard

**Variants:** `split` (default) · `compact` · `pair` · `brief`

```js
{
  theorems: [{                          // or pass a single theorem object directly
    id, name, kicker, alias,
    hypotheses: [ 'string' | { text, loadBearing } ],
    conclusion,                         // rich
    converse: {
      verdict,                          // 'holds'|'fails'|'partial'|'vacuous'|'unstated'
      verdictLabel, summary, statement, // rich
      counterexample: 'string' | [],    // rich
      counterexampleLabel,
      extraHypothesis,                  // rich — how to recover the converse
    }
  }]
}
```

**Gap behaviour.** `converse: null` or omitted → "Not addressed" badge, accent top border.
**`loadBearing: true`** on a hypothesis colours its `H<n>` marker in accent.

### 4.3 ObjectTypeProfile

**Variants:** `cards` (default) · `matrix` · `stack`

```js
{
  kicker, title, intro, footnote,
  slots: [{ key, label }],              // optional; defaults to the six below
  types: [{
    id, name,
    condition,                          // rich — the defining condition
    example: [[…], […]],                // matrix data, rendered via MatrixScene
    dimZero,                            // dim the zero entries
    highlight: { kind: 'diagonal', offset: 0 },   // a MatrixScene highlight target
    note,                               // rich
    properties: { det, rank, eigenvalues, inverse, transpose, trace },
  }]
}
```

**Default slots:** `det`, `rank`, `eigenvalues`, `inverse`, `transpose`, `trace`.

**Gap detection.** A property that is `''`, `'-'`, `'—'`, `'n/a'`, `null` or `undefined` renders as a marked gap and increments the masthead counter. The `matrix` variant is the audit view — every gap across every type visible at once.

### 4.4 CaseSplitPanel

**Variants:** `panels` (default) · `rows`

```js
{
  kicker, question, intro,
  tallyLabel,                           // default 'cases'
  exhaustiveness,                       // rich — REQUIRED in practice
  exhaustivenessLabel,
  cases: [{
    id, condition,                      // rich — the selecting condition
    outcome,                            // raw — the headline verdict
    name, signal, consequence, geometry, // rich
    figure,                             // built-in figure name, see below
    scene,                              // a MatrixScene spec, alternative to figure
    instance: 'string' | [],            // rich
    flagged,                            // accent header
  }]
}
```

**Built-in figures:** `parallel-lines`, `crossing-lines`, `coincident-lines`, `independent-axes`, `collapsed-direction`, `rotation`.

**Gap behaviour.** Omitting `exhaustiveness` renders a dashed placeholder — a case split without an exhaustiveness argument is a list, not a partition.

### 4.5 MisconceptionCard

**Variants:** `split` (default) · `grid` · `strip`

```js
{
  items: [{                             // or pass a single item directly
    id, topic, tag,                     // tag defaults to 'Misconception'
    wrong, wrongLabel,                  // rich — rendered struck through
    right, rightLabel,                  // rich
    whyTempting,                        // rich — REQUIRED in practice
    counterexample: 'string' | [],      // rich
    counterexampleLabel,
  }]
}
```

**Gap behaviour.** Omitting `whyTempting` renders an italic placeholder.

### 4.6 RowOperationTrace

**Variants:** `ledger` (default) · `filmstrip` · `equation` · `diptych` · `contact` · `spine`

```js
{
  kicker, title, goal,                  // rich
  reading,                              // rich — REQUIRED in practice
  stats: [{ label, value, note, hot }],
  delta: [{ label, value, hot }],       // diptych only
  steps: [{
    id, label,
    matrix: [[…]],                      // required
    pivots:  [[r,c], …],                // cells to mark as pivots
    changed: [[r,c], …],                // cells altered this step
    augmentedAfterCol,                  // draw a dashed divider after this column
    operation: 'string' | [],           // raw — the row operation label
    why,                                // rich
    note,                               // rich — filmstrip and diptych
    chips: [{ text, hot }],             // ledger
    final,                              // marks the terminal step
    // equation variant only:
    elementary: [[…]],
    elementaryName,
    multiplierCell: [r,c],
    before: [[…]],
    beforeName,
    pivotsBefore: [[r,c], …],
  }]
}
```

**Variant requirements**

| Variant | Needs | Ignores |
|---|---|---|
| `ledger` | `steps`, `operation`, `why` | `delta` |
| `filmstrip` | `steps`, `note` | `chips`, `delta` |
| `equation` | `step.elementary`, `step.before` | steps without `elementary` are skipped |
| `diptych` | first and last step, `delta` | intermediate steps, `reading` |
| `contact` | `steps`, `stats` | `why`, `reading` |
| `spine` | `steps`, `why` | `chips`, `delta` |

### 4.7 MatrixOperation

**Variants:** `full` (default) · `compact`

```js
{
  kicker, title, intro, note, noteLabel,
  operation,                            // 'multiply'|'add'|'subtract'|'scalar'|'transpose'|'inverse'
  A, B, result,                         // matrix data
  inverse, identity, scalar, pairs,     // per operation
  nameA, nameB, nameC,
  highlight: { rowOfA, colOfB, caption },  // multiply only — draws the connector arcs
}
```

**Computed, not supplied.** The conformability rail is derived from operand shapes. Pass a 2×3 and a 2×2 to `multiply` and the component renders `3 ≠ 2 — do not match, undefined` and an **Undefined** badge. Nothing in the data says the product fails.

### 4.8 MatrixScene

Used directly only by other components, never by a page.

```jsx
<MatrixScene theme="navy" scene="multiplication" content={{ A, B, result, highlight }} />
<MatrixScene theme="navy" spec={fullSpec} cellSize="sm" onInk />
```

**Scenes:** `display`, `addition`, `subtraction`, `multiplication`, `scalarMultiplication`, `transpose`, `identity`, `diagonal`, `upperTriangular`, `lowerTriangular`, `symmetric`, `sparse`, `rowOperation`, `augmented`, `determinant`, `trace`, `factorization`, `inversePair`, `elementary`.

**Spec** (the escape hatch):

```js
{
  matrices: [{
    name, data, showDim, dimZero, bracketStyle,   // 'square'|'parens'|'pipes'
    pivots: [[r,c]], changed: [[r,c]],
    dividers: [{ afterCol, style }],
    highlights: [{ target, role }],
  }],
  operators: [ 'string' | { symbol, sublabel } ],  // length = matrices.length - 1
  connectors: [{ from, to, role, style }],
  scalarResult: { value, precedingOperator, caption },
  leadingScalar, caption,
}
```

**Highlight targets:** `{kind:'cell',row,col}`, `{kind:'row',index}`, `{kind:'col',index}`, `{kind:'diagonal',offset}`, `{kind:'upper-triangle',strict}`, `{kind:'lower-triangle',strict}`, `{kind:'symmetric-pairs',pairs}`.

**Connector endpoints:** `{matrix, cell:[r,c]}` anchors at the cell's top-centre · `{matrix, row}` at the right edge · `{matrix, col}` at the top edge.

**Cell sizes:** `lg` `md` `sm` `xs` `auto`. Auto picks `md` for ≤3 dimensions, `sm` for ≤5, `xs` above.

---

## 5. Known gaps

**Nine of the fifteen types are not built.** Prototypes exist for all of them (§1.4): FactorizationAnatomy, DimensionLedger, FourSubspaceMap, TestSelector, AlgorithmStepLadder, EquivalenceRing, IdentitySheet, ConceptRelationshipMap, MethodComparison.

**Two prototyped RowOperationTrace variants are not built:** `chain` (horizontal arrow chain on light background) and `stack` (vertical with a label gutter). They are in `proto-row-operation-trace.html`. `filmstrip` is not `chain` — different surface. `spine` is not `stack` — different layout.

**Theme count.** The React files currently carry nine theme blocks each. Per the decision to ship navy only, the other eight should be stripped, leaving the mechanism intact.

**Mobile matrix sizing.** `MatrixScene` scales the whole SVG down on narrow viewports rather than reflowing. Past roughly six columns the text becomes unreadable on a phone.

**`property-law-card-demo-page.jsx`** imports `MatrixScene` into the page. It is superseded by `page-matrix-product-laws.jsx` and should not be used as a template.
