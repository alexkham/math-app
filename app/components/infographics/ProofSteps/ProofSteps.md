# ProofSteps

A proof or derivation infographic. Each step shows its working and its reason, and there are four layouts for different kinds of argument. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import ProofSteps from '@/app/components/infographics/ProofSteps/ProofSteps';

<ProofSteps data={triangleInequality} variant="chain" />
```

The component is a single file, `ProofSteps/ProofSteps.jsx`, with these docs beside it. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Customisation from data](#customisation-from-data)
5. [Examples](#examples)
6. [Embedding on a page](#embedding-on-a-page)
7. [Phones](#phones)
8. [Pages using it](#pages-using-it)
9. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **chain** (default) | A chain of equalities or inequalities | One row per line, the reason beside it. The key step is marked in gold. |
| **induction** | A proof by induction | Base case and hypothesis on the left, the inductive step on the right, then a base → k → k + 1 → all n strip and the conclusion. |
| **align** | Two expressions combined term by term (pairing, adding, subtracting) | The rows lined up in a grid, the combined row below, then the result. Hovering a column highlights it. |
| **stepper** | A derivation worth reading one step at a time | One step per screen with a progress bar, Back / Next, and the previous line shown faintly above. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `chain`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'chain' \| 'induction' \| 'align' \| 'stepper'` | `'chain'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:     { kicker?, title?, lede? },  // omit header to hide it
  goal?:       { label?, text },            // the statement, above the proof; label defaults to labels.prove
  conclusion?: { text, say? },              // blue box with the ∎ mark (chain, induction, stepper)
  note?:       { label, text },             // blue note
  pitfall?:    { label, text },             // gold note
  labels?:     { ... },
  theme?:      { ... },
  options?:    { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere.

### chain

```js
steps: [{ math, why?, tag?, key? }]
```

| Field | |
|---|---|
| `math` | The line, e.g. `'$= |z_1|^2 + 2\\text{Re}(z_1\\bar{z_2}) + |z_2|^2$'`. |
| `why` | The reason. |
| `tag` | A short chip before the reason, e.g. `'expand'`. |
| `key` | Marks the decisive step in gold. |

### induction

```js
induction: {
  base: { at, math, say?, label? },          // label defaults to labels.baseCase
  hyp:  { at, math, say?, label? },          // labels.assume
  step: { at, say?, label?, steps: [{ why?, math }] }   // labels.inductionStep
}
```

`at` is the value shown next to the label, e.g. `'$n = k + 1$'`.

### align

```js
align: {
  rows:   [{ label, cells: [string] }],     // all rows have the same number of cells
  sum?:   { label, cells: [string] },       // the combined row, in blue
  result?: [{ text } | { math }]            // a line under the grid; math items are set larger
},
route?: { label, math?, text? }             // a second way to the same result, shown beside the pitfall
```

### stepper

```js
steps: [{ action?, math, why? }]
```

| Field | |
|---|---|
| `action` | What the step does, e.g. `'Multiply by the conjugate'`. |
| `math` | The line. Use `\\displaystyle` for full-size fractions. |
| `why` | An explanation box under the line. |

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Variant |
|---|---|---|
| `prove` | `'Prove'` | Goal label when `goal.label` is missing |
| `baseCase` / `assume` / `inductionStep` | `'Base case'` / `'Assume'` / `'Prove'` | induction |
| `loop` | `['base', 'k', 'k + 1', 'all n']` | induction: the strip under the parts |
| `back` / `next` | `'Back'` / `'Next'` | stepper buttons |
| `stepAria` | `'Step {n}'` | stepper: screen-reader label of each progress segment |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles |
| `muted` | `#64748b` | Lede, reasons, labels |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background |
| `headBg` | `#eff6ff` | Conclusion, hovered row, stepper bar, combined row |
| `navy` | `#1e3a8a` | Goal edge, hypothesis edge, Next button |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Conclusion border, inductive step, progress, loop strip |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Key step, pitfall, highlighted column |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | Base case edge, tags |
| `keyBg` | `#fffdf5` | chain: the key step's background |
| `rowA` | `#c7d7fe` | align: border of the first row's cells |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `numbered` | `true` | chain: the number column |
| `hover` | `true` | chain: row highlight; align: column highlight |
| `loopChips` | `true` | induction: the base → … → all n strip |
| `showPrevious` | `true` | stepper: the previous line shown faintly above the current one |
| `qedMark` | `true` | The ∎ square in the conclusion |
| `arrow` | `'→'` | induction: the arrow in the strip |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

All from the demo (`info_proof_steps.html`).

### chain: `complex-numbers/absolute-value` → Proving the Triangle Inequality

```js
export const triangleInequality = {
  header: { kicker: 'Complex numbers', title: 'Proving the Triangle Inequality', lede: 'Square both sides and exploit the identity $|z|^2 = z \\cdot \\bar{z}$.' },
  goal: { label: 'Prove', text: '$|z_1 + z_2| \\leq |z_1| + |z_2|$' },
  steps: [
    { math: '$|z_1 + z_2|^2 = (z_1 + z_2)(\\bar{z_1} + \\bar{z_2})$', tag: 'identity', why: '$|z|^2 = z \\cdot \\bar{z}$' },
    { math: '$= |z_1|^2 + z_1\\bar{z_2} + \\overline{z_1\\bar{z_2}} + |z_2|^2$', tag: 'expand', why: 'Expanding the product' },
    { math: '$= |z_1|^2 + 2\\text{Re}(z_1\\bar{z_2}) + |z_2|^2$', tag: 'conjugates', why: 'The middle terms are conjugates; their sum is twice the real part' },
    { math: '$\\leq |z_1|^2 + 2|z_1||z_2| + |z_2|^2$', tag: 'key step', key: true, why: 'The real part never exceeds the modulus: $\\text{Re}(z_1\\bar{z_2}) \\leq |z_1||z_2|$' },
    { math: '$= (|z_1| + |z_2|)^2$', tag: 'factor', why: 'A perfect square' }
  ],
  conclusion: { text: '$|z_1 + z_2| \\leq |z_1| + |z_2|$', say: 'Taking square roots of both sides, valid since all quantities are non-negative.' },
  note: { label: 'Equality', text: 'Holds precisely when $z_1\\bar{z_2}$ is a non-negative real number: $z_1$ and $z_2$ point in the same direction from the origin, and the triangle degenerates to a line segment.' }
};
```

### induction: `complex-numbers/demoivre-theorem` → Proof of De Moivre's Theorem

```js
export const deMoivreProof = {
  header: { kicker: 'Complex numbers', title: "Proof of De Moivre's Theorem", lede: 'Mathematical induction, built from the multiplication rule: moduli multiply and arguments add.' },
  goal: { label: 'Prove', text: '$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$' },
  induction: {
    base: { at: '$n = 1$', math: '$(\\cos\\theta + i\\sin\\theta)^1 = \\cos(1 \\cdot \\theta) + i\\sin(1 \\cdot \\theta)$', say: 'Holds trivially.' },
    hyp:  { at: '$n = k$', math: '$(\\cos\\theta + i\\sin\\theta)^k = \\cos(k\\theta) + i\\sin(k\\theta)$' },
    step: { at: '$n = k + 1$', steps: [
      { why: 'Multiply both sides by $\\cos\\theta + i\\sin\\theta$', math: '$(\\cos\\theta + i\\sin\\theta)^{k+1} = (\\cos(k\\theta) + i\\sin(k\\theta))(\\cos\\theta + i\\sin\\theta)$' },
      { why: 'By the multiplication rule, add arguments', math: '$= \\cos(k\\theta + \\theta) + i\\sin(k\\theta + \\theta)$' },
      { why: 'Collect', math: '$= \\cos((k+1)\\theta) + i\\sin((k+1)\\theta)$' }
    ] }
  },
  conclusion: { text: 'Holds for all positive integers $n$', say: 'This completes the induction.' },
  note: { label: 'Negative integers', text: 'From the reciprocal: $z^{-n} = \\frac{1}{r^n\\text{cis}(n\\theta)} = r^{-n}\\text{cis}(-n\\theta)$, so $z^n = r^n\\text{cis}(n\\theta)$ holds for all integers $n$.' }
};
```

### align: `algebra/sequences/triangular-numbers` → Derivation of the Closed Form

```js
export const triangularClosedForm = {
  header: { kicker: 'Sequences', title: 'Derivation of the Closed Form', lede: 'The pairing method: write the sum forwards and backwards.' },
  align: {
    rows: [
      { label: '$S$ =', cells: ['$1$', '$2$', '$3$', '$\\cdots$', '$n$'] },
      { label: '$S$ =', cells: ['$n$', '$n-1$', '$n-2$', '$\\cdots$', '$1$'] }
    ],
    sum: { label: '$2S$ =', cells: ['$n+1$', '$n+1$', '$n+1$', '$\\cdots$', '$n+1$'] },
    result: [
      { text: 'Each pair sums to $n + 1$, and there are $n$ pairs:' },
      { math: '$2S = n(n+1)$' },
      { text: '→' },
      { math: '$S = \\dfrac{n(n+1)}{2}$' }
    ]
  },
  route: { label: 'Alternative perspective', math: '$T_n = \\binom{n+1}{2} = \\dfrac{(n+1)n}{2}$', text: 'The number of ways to choose $2$ items from $n + 1$: triangular numbers count unordered pairs.' },
  pitfall: { label: 'Using the group size as the index', text: 'Five people give $\\binom{5}{2} = T_4 = 10$ handshakes, not $T_5 = 15$: $n$ people make $T_{n-1}$.' }
};
```

### stepper: `calculus/limits/special` → Deriving (1 − cos x)/x = 0

```js
export const oneMinusCosLimit = {
  header: { kicker: 'Limits', title: 'Deriving $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$', lede: 'The conjugate turns a quotient no rule handles directly into a product of two known limits.' },
  goal: { label: 'Show', text: '$\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$' },
  steps: [
    { action: 'Multiply by the conjugate', math: '$\\displaystyle\\frac{1 - \\cos x}{x} \\cdot \\frac{1 + \\cos x}{1 + \\cos x} = \\frac{1 - \\cos^2 x}{x(1 + \\cos x)} = \\frac{\\sin^2 x}{x(1 + \\cos x)}$' },
    { action: 'Rewrite as a product', math: '$\\displaystyle= \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x}$' },
    { action: 'Let $x \\to 0$', math: '$\\displaystyle\\frac{\\sin x}{x} \\to 1 \\qquad \\frac{\\sin x}{1 + \\cos x} \\to \\frac{0}{2} = 0$',
      why: 'The first factor is the fundamental trigonometric limit. The second can be found by substitution, because its denominator tends to $2$ and not to $0$.' },
    { action: 'Therefore', math: '$\\displaystyle\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$', why: 'It is the second factor that decides the value of the whole limit.' }
  ],
  pitfall: { label: 'Copying the value of the sine limit', text: 'Reading $\\frac{1 - \\cos x}{x}$ as a variant of $\\frac{\\sin x}{x}$ gives the limit $1$. At $x = 0.1$ the quotient is only about $0.05$.' }
};
```

### Customised from data

```js
{
  ...triangleInequality,
  labels:  { prove: 'Claim' },
  theme:   { gold: '#b45309', goldBg: '#fef9c3', keyBg: '#fffbeb' },
  options: { numbered: false, qedMark: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the proof section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key={'proof-steps-triangle-inequality-proof'}
  id="triangle-inequality-proof"
  title="Proving the triangle inequality"
  source="/complex-numbers/absolute-value"
  related={false}
  before={"One sentence on what the frame shows."}
  after={"A one-line takeaway about the proof."}
>
  <ProofSteps data={proofStepsData} variant="chain" />
</DiagramFrame>
```

How the site places it:
- **Beside the page's own proof, never instead of it.** The frame goes right after the proof. If the section's text goes on after the proof, that text is moved into a new field of the section (`afterProof`, `afterProof2`, …) and rendered after the frame.
- The data lives in `getStaticProps` as `proofStepsData`, `proofStepsData2`, … and is passed as props.
- Every step comes from the page's own formulas and sentences. Theme: the site palette (`title`/`navy` `#06357A`, `blue` `#2563EB`, `gold`/`goldInk` `#B45309`).
- A section qualifies when it proves or derives something in 3 or more stated steps. Worked numeric examples, lists of rules and one-line remarks do not. A section whose proof a ConceptIntro, BeforeAfter or demo unit already walks is skipped.
- `related={false}`: the frame has no footer link back to its own page.

## Phones

- **align:** keep to at most 4–5 short columns. Cells shrink under 680 px, but the widest cell sets each column's width. 5 columns of `$a_1 + a_n$` do not fit, and 4 do.
- **stepper:** under 680 px the formula is set at 14.5 px with less side padding. A formula up to about 210 px wide fits on a 375 px screen.
- **chain:** a formula wider than the column scrolls inside its row. Split long chains at the equals signs, one step per `=`.
- Write a long quotient as `\\frac{…}{…}` rather than `a / [b]`, because it takes half the width.

## Pages using it

109 frames on 59 lesson pages, placed 2026-11-08. The URL is the page path plus `#` and the frame id.

### algebra (10 frames, 8 pages)

| Page | Frames |
|---|---|
| `/algebra/equations/quadratic` | `quadratic-completing-square-steps` (stepper) |
| `/algebra/logarithms/rules` | `log-product-rule-proof` (chain), `log-quotient-rule-proof` (chain), `log-power-rule-proof` (chain) |
| `/algebra/sequences/arithmetic` | `arithmetic-series-pairing-proof` (align) |
| `/algebra/sequences/geometric` | `geometric-series-sum-steps` (stepper) |
| `/algebra/sequences/harmonic` | `harmonic-series-divergence-proof` (chain) |
| `/algebra/sequences/prime-numbers` | `infinitude-of-primes-proof` (chain) |
| `/algebra/sequences/square-numbers` | `sum-of-squares-telescoping-steps` (stepper) |
| `/algebra/sequences/triangular-numbers` | `triangular-number-pairing-proof` (align) |

### arithmetic (5 frames, 4 pages)

| Page | Frames |
|---|---|
| `/arithmetic/divisibility/lcm` | `gcd-lcm-relationship-proof` (chain) |
| `/arithmetic/divisibility/rules` | `divisibility-by-3-proof` (chain) |
| `/arithmetic/modulo/operations` | `digit-sum-rule-9-proof` (chain) |
| `/arithmetic/properties` | `zero-property-of-multiplication-proof` (chain), `sign-rule-negative-times-positive-proof` (chain) |

### calculus (12 frames, 7 pages)

| Page | Frames |
|---|---|
| `/calculus/derivatives/common` | `power-rule-real-exponent-proof` (chain), `sine-derivative-proof` (stepper), `tangent-derivative-proof` (chain), `natural-log-derivative-proof` (chain) |
| `/calculus/derivatives/differentiability` | `differentiability-implies-continuity-proof` (chain) |
| `/calculus/derivatives/function` | `derivative-from-definition-steps` (stepper) |
| `/calculus/derivatives/graph-analysis` | `increasing-function-test-proof` (chain) |
| `/calculus/derivatives/special` | `arctangent-derivative-proof` (chain), `arcsecant-derivative-proof` (chain) |
| `/calculus/integrals/special` | `integral-of-ln-x-steps` (stepper) |
| `/calculus/limits/special` | `sine-limit-squeeze-proof` (chain), `log-limit-substitution-proof` (chain) |

### combinatorics (2 frames, 1 page)

| Page | Frames |
|---|---|
| `/combinatorics/inclusion-exclusion` | `inclusion-exclusion-signs-proof` (chain), `derangement-formula-steps` (stepper) |

### complex-numbers (17 frames, 7 pages)

| Page | Frames |
|---|---|
| `/complex-numbers/absolute-value` | `modulus-conjugate-identity-proof` (chain), `triangle-inequality-proof` (chain), `reverse-triangle-inequality-proof` (chain) |
| `/complex-numbers/additive-inverse` | `complex-additive-inverse-uniqueness-proof` (chain) |
| `/complex-numbers/complex-conjugate` | `conjugate-of-a-sum-proof` (chain), `conjugate-modulus-identity-proof` (chain), `real-number-conjugate-test-proof` (chain), `pure-imaginary-conjugate-test-proof` (chain), `conjugate-root-theorem-proof` (chain) |
| `/complex-numbers/demoivre-theorem` | `de-moivre-induction-proof` (induction) |
| `/complex-numbers/equations-polynomials` | `fundamental-theorem-factorization-steps` (chain), `conjugate-root-theorem-polynomials-proof` (chain) |
| `/complex-numbers/exponential-form` | `euler-formula-taylor-proof` (chain), `euler-identity-steps` (chain), `exponential-form-multiplication-proof` (chain) |
| `/complex-numbers/multiplicative-inverse` | `complex-inverse-formula-steps` (stepper), `complex-inverse-uniqueness-proof` (chain) |

### functions (2 frames, 2 pages)

| Page | Frames |
|---|---|
| `/functions/composition` | `composition-inverse-pair-proof` (chain) |
| `/functions/inverse` | `verifying-inverses-composition-proof` (chain) |

### linear-algebra (31 frames, 16 pages)

| Page | Frames |
|---|---|
| `/linear-algebra/decompositions/lower-upper` | `lu-from-elimination-proof` (chain) |
| `/linear-algebra/determinants/cofactors` | `adjugate-identity-steps` (stepper) |
| `/linear-algebra/determinants/properties` | `determinant-product-order-proof` (chain) |
| `/linear-algebra/eigen/properties` | `eigenvalue-of-inverse-proof` (chain), `eigenvalue-of-power-induction-proof` (induction), `eigenvalue-of-polynomial-proof` (chain), `eigenvalue-shift-proof` (chain), `distinct-eigenvectors-independence-proof` (induction), `similar-matrices-eigenvector-proof` (chain) |
| `/linear-algebra/linear-systems/homogeneous` | `superposition-principle-proof` (chain) |
| `/linear-algebra/matrix/inverse` | `inverse-of-product-proof` (chain), `inverse-determinant-proof` (chain) |
| `/linear-algebra/matrix/trace` | `trace-cyclic-property-proof` (chain), `trace-sum-of-eigenvalues-steps` (stepper), `trace-symmetric-skew-product-proof` (chain) |
| `/linear-algebra/matrix/types` | `skew-symmetric-odd-determinant-proof` (chain), `orthogonal-matrix-determinant-proof` (chain) |
| `/linear-algebra/orthogonality/inner-product` | `inner-product-cauchy-schwarz-proof` (chain), `inner-product-triangle-inequality-proof` (chain) |
| `/linear-algebra/orthogonality/orthogonal-sets` | `orthogonal-set-independence-proof` (chain), `orthogonal-sets-determinant-proof` (chain), `orthogonal-sets-dot-product-proof` (chain) |
| `/linear-algebra/orthogonality/projections` | `projection-arbitrary-basis-steps` (stepper) |
| `/linear-algebra/transformations/basis-change` | `similarity-relation-proof` (chain) |
| `/linear-algebra/transformations/image-kernel` | `injectivity-kernel-criterion-proof` (chain) |
| `/linear-algebra/transformations/properties` | `linearity-worked-example-proof` (chain), `linear-map-zero-vector-proof` (chain), `linear-map-composition-proof` (chain), `linear-map-sum-proof` (chain) |
| `/linear-algebra/vector-spaces/axioms` | `vector-space-negative-one-scalar-proof` (chain) |
| `/linear-algebra/vector-spaces/subspaces` | `null-space-subspace-steps` (stepper) |

### logic (5 frames, 3 pages)

| Page | Frames |
|---|---|
| `/logic/truth-tables/biconditionals` | `biconditional-negation-preservation-proof` (chain), `biconditional-transitivity-proof` (chain) |
| `/logic/truth-tables/contradictions` | `broken-implication-chain-contradiction-proof` (chain) |
| `/logic/truth-tables/tautologies` | `hypothetical-syllogism-tautology-proof` (chain), `implication-over-disjunction-tautology-proof` (chain) |

### probability (23 frames, 9 pages)

| Page | Frames |
|---|---|
| `/probability/distributions/continuous/exponential` | `exponential-mean-steps` (stepper), `exponential-variance-steps` (chain), `exponential-median-steps` (chain), `exponential-quantile-steps` (chain) |
| `/probability/distributions/continuous/normal` | `normal-mean-steps` (stepper), `normal-variance-steps` (stepper) |
| `/probability/distributions/continuous/uniform` | `continuous-uniform-mean-steps` (chain), `continuous-uniform-variance-steps` (chain), `continuous-uniform-median-steps` (chain), `continuous-uniform-quantile-steps` (chain) |
| `/probability/distributions/discrete/binomial` | `binomial-mean-steps` (chain), `binomial-variance-steps` (chain) |
| `/probability/distributions/discrete/geometric` | `geometric-cdf-sum-steps` (chain), `geometric-mean-steps` (stepper), `geometric-variance-steps` (chain) |
| `/probability/distributions/discrete/poisson` | `poisson-pmf-sums-to-one-proof` (chain), `poisson-mean-steps` (stepper), `poisson-variance-steps` (chain) |
| `/probability/distributions/discrete/uniform` | `discrete-uniform-mean-steps` (chain), `discrete-uniform-variance-steps` (chain) |
| `/probability/median` | `median-exponential-derivation-steps` (chain) |
| `/probability/total-probability` | `total-probability-law-proof` (stepper), `total-probability-bayes-denominator-steps` (stepper) |

### trigonometry (2 frames, 2 pages)

| Page | Frames |
|---|---|
| `/trigonometry/sines-cosines-law` | `law-of-cosines-derivation-steps` (stepper) |
| `/trigonometry/unit-circle` | `pythagorean-identities-derivation-steps` (stepper) |

---

## Authoring tips

- **Take the content from the page:** most proof sections already alternate a sentence and a formula callout. The callout is the step's `math`; the sentence before it is its `why` or `action`.
- **Which variant:**
  - chain when every line continues the one before (`=`, `≤`);
  - induction when the page names a base case and an inductive step;
  - align when two lists are combined term by term;
  - stepper for longer derivations, or where each step needs explaining.
- **chain:** mark one step as `key`, the one the proof hinges on.
- **stepper:** put the explanation in `why`, not in `action`; keep `action` to a few words.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\frac'`, `'\\leq'`).
