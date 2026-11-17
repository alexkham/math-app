# Procedure

> This file sits in `ProcedureV2/` beside `ProcedureV2.jsx`, the version lesson pages render (import `@/app/components/infographics/ProcedureV2/ProcedureV2`, see "Rollout 2026-11-14" below). The first part describes the old `Procedure.jsx`, which stays in the infographics root and is used by no lesson page.

An algorithm or method infographic: the steps, how they repeat or branch, and how they run on an example. There are three layouts. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import Procedure from '@/app/components/infographics/Procedure';

<Procedure data={euclid} variant="loop" />
```

The component is a single file, `Procedure.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
| **worked** (default) | A method taught alongside one example | Each general step beside the same step on the example, ending in an optional check row. |
| **loop** | An algorithm that repeats until a condition | The steps with an arc over the repeated ones. Beside them, a trace table that can be stepped through with ← / →; the last row and the result are highlighted at the end. |
| **stages** | A long method made of stages, possibly with a choice | Groups of stages joined by arrows, labelled on the left. A group can fork into side-by-side alternatives. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `worked`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'worked' \| 'loop' \| 'stages'` | `'worked'` | |
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
  note?:    { label, text },              // blue note under the layout
  pitfall?: { label, text },              // gold note; side by side with the note when both are given
  labels?:  { ... },
  theme?:   { ... },
  options?: { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere.

### worked

```js
worked: {
  stepLabel?, exampleLabel?,                 // column headings (default labels.step / labels.example)
  rows: [{ step, stepSub?, example, check? }]
}
```

| Field | |
|---|---|
| `step` | The general step. |
| `stepSub` | A muted line under it, e.g. why the step works. |
| `example` | The same step on the example, in the maths font. |
| `check` | Marks the row as the check: blue, with `options.checkMark` instead of a number. Numbering skips it. |

### loop

```js
loop: {
  label?,                                    // default labels.algorithm
  repeat?,                                   // text on the arc, default labels.repeat
  steps: [{ text, repeat?, test?, output? }]
},
trace?: {
  label,                                     // e.g. '$\\gcd(1071, 462)$'
  columns: [string],
  rows: [[string]],                          // one array per pass
  result,                                    // shown when the trace is complete
  eqCol?,                                    // index of a left-aligned column
  zeroCol?                                   // index of a column where a 0 is highlighted (the stopping value)
}
```

| Step field | |
|---|---|
| `repeat` | The step is inside the loop. The arc runs from the first to the last repeated step. |
| `test` | The stopping test: dashed border. |
| `output` | The result step: blue number, highlighted when the trace is complete. |

While the trace is running, the repeated steps are highlighted. Without `trace`, only the steps are shown, at full width.

### stages

```js
groups: [{
  label, sub?,                               // left column
  kind?: 'must' | 'opt' | 'out',             // top edge: navy, blue, gold (default 'must')
  fork?: true,                               // stages side by side instead of stacked
  stages: [{ n?, name, what?, cond?, detail? }]
}]
```

| Stage field | |
|---|---|
| `n` | Badge, e.g. `1`, `'3a'`. Leave out for no badge. |
| `what` | What the stage does, in the maths font. |
| `cond` | A muted line under it. |
| `detail` | A paragraph under a dashed line. |

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Variant |
|---|---|---|
| `algorithm` | `'Algorithm'` | loop: heading of the steps |
| `repeat` | `'repeat'` | loop: text on the arc |
| `result` | `'Result'` | loop: footer when the trace is complete |
| `stepOf` | `'Step {k} of {n}'` | loop: footer while stepping |
| `prev` / `next` | `'Previous step'` / `'Next step'` | loop: screen-reader labels of ← / → |
| `step` / `example` | `'Step'` / `'Example'` | worked: column headings |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, stage names, column headings |
| `muted` | `#64748b` | Lede, labels, conditions |
| `line` | `#e2e8f0` | Dividers, step borders |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background |
| `headBg` | `#eff6ff` | Headers, the current trace row, active steps, the check row |
| `navy` | `#1e3a8a` | Number badges, compulsory stages, → button |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | The arc, arrows, optional stages, output step |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Output stage, final trace row, the 0, pitfall |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | Reserved for neutral accents |
| `loopEdge` | `#c7d7fe` | loop: border of the repeated steps |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `startAt` | `'end'` | loop: the trace opens complete (`'end'`) or at the first row (`'start'`) |
| `arc` | `true` | loop: the repeat arc |
| `hover` | `true` | worked: row highlight |
| `checkMark` | `'✓'` | worked: the badge of the check row |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

All from the demo (`info_procedure.html`).

### loop: `arithmetic/divisibility/gcd` → Euclidean Algorithm Step by Step

```js
export const euclid = {
  header: { kicker: 'Divisibility', title: 'Euclidean Algorithm Step by Step', lede: 'The procedure is mechanical.' },
  loop: {
    label: 'Algorithm',
    repeat: 'until $b = 0$',
    steps: [
      { text: 'Start with two positive integers $a \\geq b$' },
      { text: 'Compute $r = a \\bmod b$', repeat: true },
      { text: 'Replace $a$ with $b$ and $b$ with $r$', repeat: true },
      { text: 'Repeat until $b = 0$', repeat: true, test: true },
      { text: 'The value of $a$ at that point is the GCD', output: true }
    ]
  },
  trace: {
    label: '$\\gcd(1071, 462)$',
    columns: ['$a = b \\cdot q + r$', 'new $a$', 'new $b$'],
    eqCol: 0, zeroCol: 2,
    rows: [
      ['$1071 = 462 \\cdot 2 + 147$', '$462$', '$147$'],
      ['$462 = 147 \\cdot 3 + 21$', '$147$', '$21$'],
      ['$147 = 21 \\cdot 7 + 0$', '$21$', '$0$']
    ],
    result: '$\\gcd(1071, 462) = 21$'
  },
  note: { label: 'Why it stops', text: 'The remainder satisfies $0 \\leq r < b$, so $b$ strictly decreases at each step. A sequence of positive integers that strictly decreases must eventually reach zero.' },
  pitfall: { label: 'Keeping the larger number', text: 'Dividing $252$ by the remainder $42$ gives $252 = 42 \\cdot 6 + 0$ and the answer $42$, which does not divide $105$. The remainder divides $105$: $105 = 42 \\cdot 2 + 21$, so the GCD is $21$.' }
};
```

### stages: `linear-algebra/linear-systems/gaussian-elimination` → Summary: The Algorithm at a Glance

```js
export const gaussStages = {
  header: { kicker: 'Linear systems', title: 'Gaussian elimination, stage by stage', lede: 'Two stages are compulsory and the third is a choice.' },
  groups: [
    { label: 'Compulsory', sub: 'every system, every time', kind: 'must', stages: [
      { n: 1, name: 'Forward elimination', what: '$[A \\mid \\mathbf{b}] \\to$ row echelon form', cond: 'swaps and row additions, left to right',
        detail: 'Sweep column by column, using each pivot to zero everything beneath it. The expensive stage at roughly $\\tfrac{2}{3}n^3$ operations.' },
      { n: 2, name: 'Classify the columns', what: 'pivot columns vs free columns', cond: 'and check for $[\\,0 \\cdots 0 \\mid d \\neq 0\\,]$',
        detail: 'The pivot count is the rank, the free columns are the parameters, and a contradiction row settles solvability.' }
    ] },
    { label: 'A choice', sub: 'two ways to read the answer', kind: 'opt', fork: true, stages: [
      { n: '3a', name: 'Back substitution', what: 'solve upward from the last pivot row', cond: 'stops at REF',
        detail: 'Less arithmetic: roughly $n^2$ operations on top of the elimination. The usual choice by hand.' },
      { n: '3b', name: 'Gauss–Jordan', what: 'continue to reduced row echelon form', cond: 'zero above the pivots, scale pivots to $1$',
        detail: 'Roughly $50\\%$ more arithmetic. The RREF is unique, the right form for a null space basis or an inverse.' }
    ] },
    { label: 'What comes out', sub: '', kind: 'out', stages: [
      { name: 'The solution set', what: 'a point, or $\\mathbf{x}_p + \\operatorname{Null}(A)$, or empty', cond: 'decided at the classification stage' }
    ] }
  ]
};
```

The page already has this data as `eliminationStages` (`groups[].identities[]` with `name`, `formula`, `condition`, `note`); map `formula → what`, `condition → cond`, `note → detail`.

### worked: `linear-algebra/orthogonality/gram-schmidt` → The Algorithm: Two Vectors

```js
export const gramSchmidtTwo = {
  header: { kicker: 'Orthogonality', title: 'Gram–Schmidt: Two Vectors', lede: 'Start with two independent vectors $\\mathbf{v}_1$ and $\\mathbf{v}_2$.' },
  worked: {
    stepLabel: 'Step', exampleLabel: '$\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (1, 0, 1)$',
    rows: [
      { step: 'Set $\\mathbf{u}_1 = \\mathbf{v}_1$', example: '$\\mathbf{u}_1 = (1, 1, 0)$' },
      { step: 'Compute the coefficient $\\dfrac{\\mathbf{u}_1 \\cdot \\mathbf{v}_2}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}$', stepSub: 'How far $\\mathbf{v}_2$ reaches along $\\mathbf{u}_1$, over $\\|\\mathbf{u}_1\\|^2$', example: '$\\dfrac{1}{2}$' },
      { step: 'Subtract the projection of $\\mathbf{v}_2$ onto $\\mathbf{u}_1$', stepSub: 'Removing it leaves only the component perpendicular to $\\mathbf{u}_1$', example: '$\\mathbf{u}_2 = (1, 0, 1) - \\tfrac{1}{2}(1, 1, 0) = (\\tfrac{1}{2}, -\\tfrac{1}{2}, 1)$' },
      { check: true, step: 'Check $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$', example: '$\\tfrac{1}{2} - \\tfrac{1}{2} + 0 = 0$' }
    ]
  },
  pitfall: { label: 'Dropping the denominator', text: 'Subtracting $(\\mathbf{u}_1 \\cdot \\mathbf{v}_2)\\,\\mathbf{u}_1 = 1 \\cdot (1, 1, 0)$ gives $(0, -1, 1)$, whose dot product with $\\mathbf{u}_1$ is $-1$, not $0$. Dividing by $\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 2$ gives $\\mathbf{u}_2 = (\\tfrac{1}{2}, -\\tfrac{1}{2}, 1)$.' }
};
```

### Customised from data

```js
{
  ...euclid,
  labels:  { algorithm: 'Euclid', result: 'GCD' },
  theme:   { loopEdge: '#bfdbfe', gold: '#b45309' },
  options: { startAt: 'start' }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the method section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj5-diagram"
  id="euclidean-algorithm"
  title="Euclidean Algorithm Step by Step"
  source="/arithmetic/divisibility/gcd"
>
  <Procedure data={euclid} variant="loop" />
</DiagramFrame>
```

---

## Authoring tips

- **Take the content from the page:** the method sentence ("Compute…, replace…, repeat until…") gives the steps; the worked example below it gives the trace rows or the example column.
- **Which variant:**
  - worked for a method with one fully worked example;
  - loop when the page says "repeat until";
  - stages for summaries of longer methods, especially when there is a choice of how to finish.
- **loop:** one trace row per pass. Put the stopping value in `zeroCol` so the 0 is marked.
- **stages:** use `kind: 'opt'` with `fork: true` for alternatives, and `kind: 'out'` for the final result.
- **worked:** end with a `check` row whenever the page checks its answer.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\bmod'`, `'\\mathbf'`).
- **Fork:** a forked group shows two stages per row, so a choice of three wraps as two plus one.

---

## Pages using it

Pilot, 2026-11-05, one page per layout. Each frame is added beside the section's text; nothing on the page was removed. The data is a constant in `getStaticProps`, passed through props like `pitfallData`, with the site palette in `theme` (`#06357A`, `#2563EB`, `#B45309`).

| Page | Section | Layout | Frame id | Notes |
|---|---|---|---|---|
| `/arithmetic/divisibility/gcd` | Euclidean Algorithm Step by Step (`obj6`) | loop | `euclidean-algorithm-loop` | Trace of the page's own $\gcd(1071, 462)$. Placed after the "why it stops" paragraph; no note or pitfall box, since the page already says both. |
| `/algebra/inequalities/quadratic` | Sign Chart Method (`obj6`) | worked | `sign-chart-steps` | Example $(x - 1)(x - 4) > 0$ from the section. The content was split at "When the quadratic does not factor neatly"; the rest is `obj6.afterProcedure`, shown after the frame. |
| `/algebra/roots/simplifying` | Simplification Strategy (`obj9`) | stages | `simplification-strategy-stages` | The five steps in three groups. The content was split before "This process prepares"; the rest is `obj9.afterProcedure`. |

Spots looked at and skipped: `/algebra/polynomials/factoring` Factoring Strategy (already holds a DecisionBox), `/linear-algebra/linear-systems/gaussian-elimination` Summary (already holds an IdentitySheet), `/linear-algebra/decompositions/cholesky` The Algorithm (a column-by-column loop, not stages).

---

## Rollout 2026-11-14 (ProcedureV2)

The step-through rebuild lives in `ProcedureV2.jsx`, next to this file. It has the same three layouts, and each one is run with Next, Previous, Restart and Play. `Procedure.jsx` is kept in the infographics root and no page uses it. The three pilot pages above now import `ProcedureV2`.

Data for `ProcedureV2`:

- worked: the same `worked` object as above. The example side of a row appears when the row is reached.
- stages: the same `groups` as above, plus optional `run: { label, start }`, and per stage `example`, `exampleNote`, `result`, `skip`; a forked group takes `take: index` for the branch the example follows.
  - 2026-11-15: when the data has a `run`, the stages are a row of buttons and one panel shows the open stage (rule on the left, example on the right), so the whole block and its controls fit one screen on desktop and phone. A fork branch the example does not take is not drawn. `run.showBefore: true` shows the example as it stood before the stage in front of the stage's example (before → after); use it only when each stage rewrites the example (on `/algebra/roots/simplifying`), not when the stages collect findings (`/algebra/inequalities/polynomial`). Without a `run` the stages stay a plain stacked list.
- loop: `loop` as above, plus `run: { label, vars: [{ key, label }], start, startNote, passes: [{ steps: [{ set, note }], row }], tableLabel, columns, eqCol, zeroCol, result, resultNote }`. One `steps` entry per repeated step, in order.

Rules used for the rollout:

- A spot is a lesson-page section that states a method as steps and works one example. The steps and the example are taken from that section.
- The frame is added right after the section text. Nothing is removed. A section that already holds a frame is skipped.
- Sections whose method is a single formula or two moves are skipped, and so are sections with no worked example.
- The data is a constant in `getStaticProps`, passed through props. The component defaults carry the site palette, so no `theme` is passed.

52 frames placed:

| Page | Section | Layout | Frame id |
|---|---|---|---|
| `/algebra/equations/absolute-value` | `obj3` | worked | `absolute-value-cases-steps` |
| `/algebra/equations/linear` | `obj4` | worked | `parentheses-equation-steps` |
| `/algebra/equations/quadratic` | `obj2` | worked | `solve-by-factoring-steps` |
| `/algebra/equations/rational` | `obj3` | worked | `clearing-denominators-steps` |
| `/algebra/inequalities/absolute-value` | `obj2` | worked | `less-than-form-steps` |
| `/algebra/inequalities/polynomial` | `obj2` | worked | `sign-chart-method-steps` |
| `/algebra/logarithms/equations` | `obj7` | worked | `exponential-via-logs-steps` |
| `/algebra/logarithms/graphs` | `obj10` | worked | `log-equation-from-graph-steps` |
| `/algebra/polynomials/graphing` | `obj11` | worked | `sketching-strategy-steps` |
| `/algebra/polynomials/operations` | `obj5` | worked | `foil-steps` |
| `/algebra/polynomials/roots` | `obj7` | worked | `rational-root-search-steps` |
| `/algebra/polynomials/roots` | `obj8` | worked | `synthetic-division-roots-steps` |
| `/algebra/powers/exponential-equations` | `obj5` | worked | `matching-bases-steps` |
| `/algebra/powers/exponential-equations` | `obj8` | worked | `substitution-method-steps` |
| `/algebra/powers/exponential-inequalities` | `obj2` | worked | `exponential-inequality-steps` |
| `/algebra/roots/equations` | `obj2` | worked | `radical-equation-basic-steps` |
| `/algebra/roots/functions` | `obj9` | worked | `radical-inverse-steps` |
| `/arithmetic/divisibility/factors` | `obj2` | loop | `finding-all-factors-loop` |
| `/arithmetic/divisibility/lcm` | `obj4` | worked | `lcm-prime-factorization-steps` |
| `/arithmetic/fractions/adding-subtracting` | `obj4` | worked | `common-denominator-steps` |
| `/arithmetic/fractions/comparing` | `obj3` | worked | `compare-common-denominator-steps` |
| `/arithmetic/fractions/complex` | `obj2` | worked | `complex-fraction-division-steps` |
| `/arithmetic/fractions/mixed-numbers` | `obj3` | worked | `improper-to-mixed-steps` |
| `/arithmetic/modulo` | `obj51` | worked | `compute-remainder-steps` |
| `/complex-numbers/equations-polynomials` | `obj7` | worked | `solve-zn-equals-w-steps` |
| `/complex-numbers/operations` | `obj4` | worked | `complex-division-steps` |
| `/complex-numbers/trigonometric-form` | `obj8` | worked | `algebraic-to-trigonometric-steps` |
| `/complex-numbers/trigonometric-form` | `obj9` | worked | `trigonometric-to-algebraic-steps` |
| `/functions/composition` | `obj7` | worked | `three-function-composition-steps` |
| `/functions/domain` | `obj4` | worked | `rational-domain-steps` |
| `/functions/inverse` | `obj4` | worked | `find-inverse-steps` |
| `/functions/piecewise` | `obj11` | worked | `write-piecewise-steps` |
| `/functions/piecewise` | `obj4` | worked | `graph-piecewise-steps` |
| `/functions/range` | `obj4` | worked | `range-algebraic-steps` |
| `/functions/transformations` | `obj11` | worked | `equation-from-transformed-graph-steps` |
| `/linear-algebra/decompositions/cholesky` | `obj3` | loop | `cholesky-column-loop` |
| `/linear-algebra/decompositions/spectral` | `obj4` | worked | `spectral-decomposition-steps` |
| `/linear-algebra/decompositions/svd` | `obj4` | worked | `computing-svd-steps` |
| `/linear-algebra/determinants/properties` | `obj4` | worked | `determinant-row-reduction-steps` |
| `/linear-algebra/eigen/characteristic-equation` | `obj7` | worked | `find-eigenvector-steps` |
| `/linear-algebra/eigen/diagonalization` | `obj2` | worked | `diagonalization-steps` |
| `/linear-algebra/linear-systems/homogeneous` | `obj4` | worked | `null-space-steps` |
| `/linear-algebra/matrix/inverse` | `obj4` | worked | `inverse-row-reduction-steps` |
| `/linear-algebra/orthogonality/gram-schmidt` | `obj2` | worked | `gram-schmidt-two-vectors-steps` |
| `/linear-algebra/transformations/image-kernel` | `obj8` | worked | `image-and-kernel-steps` |
| `/linear-algebra/transformations/matrix-representation` | `obj2` | worked | `standard-matrix-steps` |
| `/linear-algebra/vector-spaces/basis` | `obj7` | worked | `subspace-bases-steps` |
| `/linear-algebra/vectors/magnitude` | `obj6` | worked | `normalization-steps` |
| `/probability/mode` | `obj7` | worked | `find-mode-discrete-steps` |
| `/probability/probability-function/pdf` | `obj7` | worked | `build-pdf-steps` |
| `/set-theory/venn-diagrams` | `obj4` | worked | `shading-steps` |
| `/set-theory/venn-diagrams` | `obj5` | worked | `verify-identity-steps` |

---

## Reading search 2026-11-17

Spots were found by reading every lesson section (not by titles). 19 text-only sections got a frame; same rules as the rollout above. Checked headless on desktop and at 375 px.

| Page | Section | Layout | Frame id |
|---|---|---|---|
| `/functions/transformations` | `obj10` | worked | `transformation-order-steps` |
| `/probability/probability-function/pdf` | `obj8` | worked | `pdf-core-pattern-steps` |
| `/complex-numbers/demoivre-theorem` | `obj10` | worked | `cube-roots-of-minus-eight-steps` |
| `/trigonometry/equations` | `obj3` | worked | `cosine-equation-steps` |
| `/trigonometry/inequalities` | `obj7` | worked | `transformed-trig-inequality-steps` |
| `/algebra/roots/equations` | `obj6` | worked | `two-radical-equation-steps` |
| `/algebra/roots/simplifying` | `obj4` | worked | `combined-simplification-steps` |
| `/linear-algebra/linear-systems/gaussian-elimination` | `obj5` | loop | `back-substitution-steps` |
| `/algebra/logarithms/rules` | `obj6` | worked | `condense-logarithms-steps` |
| `/algebra/polynomials/factoring` | `obj3` | worked | `factoring-by-grouping-steps` |
| `/algebra/polynomials/factoring` | `obj5` | worked | `ac-method-steps` |
| `/algebra/powers/exponential-equations` | `obj6` | worked | `exponent-laws-equation-steps` |
| `/algebra/inequalities/rational` | `obj6` | worked | `rational-standard-form-steps` |
| `/calculus/derivatives/graph-analysis` | `obj9` | stages | `curve-sketching-stages` |
| `/arithmetic/modulo/negative-numbers` | `obj3` | worked | `truncated-division-steps` |
| `/arithmetic/modulo/operations` | `obj3` | worked | `modular-addition-steps` |
| `/arithmetic/modulo/operations` | `obj4` | worked | `modular-subtraction-steps` |
| `/arithmetic/modulo/operations` | `obj5` | worked | `modular-multiplication-steps` |
| `/arithmetic/modulo/operations` | `obj6` | loop | `modular-power-steps` |

`curve-sketching-stages` has no worked example, because the section gives none.

Not placed: 21 strong spots whose section already holds another diagram.

### Demo-unit sections, 2026-11-17

13 more frames, on sections that held only a demo unit or an HTML table. The frame goes at the end of the section, after the figure and its caption sentence, before the link pill.

| Page | Section | Layout | Frame id |
|---|---|---|---|
| `/functions/domain` | `obj8` | worked | `combined-domain-steps` |
| `/trigonometry/equations` | `obj2` | worked | `sine-equation-steps` |
| `/trigonometry/inequalities` | `obj2` | worked | `graphical-method-steps` |
| `/algebra/sequences/prime-numbers` | `obj3` | loop | `sieve-of-eratosthenes-steps` |
| `/algebra/sequences/prime-numbers` | `obj4` | loop | `trial-division-steps` |
| `/algebra/sequences/prime-numbers` | `obj5` | loop | `prime-factorization-steps` |
| `/algebra/polynomials/operations` | `obj6` | loop | `polynomial-long-division-steps` |
| `/algebra/polynomials/rules` | `obj9` | worked | `descartes-rule-steps` |
| `/algebra/equations/linear` | `obj3` | worked | `multi-step-equation-steps` |
| `/algebra/equations/polynomial` | `obj4` | worked | `rational-root-search-steps` |
| `/algebra/logarithms/equations` | `obj3` | worked | `combining-logarithms-steps` |
| `/linear-algebra/vector-spaces/fundamental-spaces` | `obj4` | worked | `null-space-basis-steps` |
| `/arithmetic/divisibility/gcd` | `obj4` | worked | `gcd-prime-factorization-steps` |

Skipped: `/probability/probability-function/pmf` `obj5`. Its table already lists the same five steps on the same coin example.

Authoring notes from this pass:

- No `$…$` in `loop.repeat`. The text runs vertically beside the arc and a formula breaks there; write `√n` as plain text.
- Keep `loop.repeat` to about 25 characters when only three steps repeat, or it runs past the arc.
- In the loop table on a phone, three columns of formulas wrap. Put only the short result in each cell.
