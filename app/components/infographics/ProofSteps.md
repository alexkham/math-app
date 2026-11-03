# ProofSteps

A proof or derivation infographic. Each step shows its working and its reason, and there are four layouts for different kinds of argument. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import ProofSteps from '@/app/components/infographics/ProofSteps';

<ProofSteps data={triangleInequality} variant="chain" />
```

The component is a single file, `ProofSteps.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
  key="obj6-diagram"
  id="triangle-inequality-proof"
  title="Proving the Triangle Inequality"
  source="/complex-numbers/absolute-value"
>
  <ProofSteps data={triangleInequality} variant="chain" />
</DiagramFrame>
```

There are about 87 section titles with "Proof", "Proving", "Derivation" or "Deriving" across 29 pages, many of them on the trigonometry and combinatorics visual-tool pages.

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
