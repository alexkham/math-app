# TheoremCard

A theorem infographic with seven variants. Each one lays out the same kind of content (hypotheses, conclusion, consequences, misreadings) in a different shape. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import TheoremCard from '@/app/components/infographics/TheoremCard/TheoremCard';

<TheoremCard data={rolle} variant="card" />
```

The component is a single file, `TheoremCard.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
| **card** (default) | One theorem whose hypotheses each matter | If → Then. Clicking a hypothesis (or pressing Enter / Space on it) shows its job and a counterexample without it. |
| **matrix** | Several related theorems | Hypotheses as rows, theorems as columns, a ✓ where a theorem needs the hypothesis, and the conclusions in the last row. |
| **iff** | A two-way theorem | Both sides with a labelled arrow each way, plus an optional general case and misuse. |
| **chain** | Theorems that lead to one another | Boxes joined by labelled arrows, ending in what they prove. |
| **converse** | The theorem is often read backwards | What it says, what it does not say (struck through), and a counterexample. |
| **apply** | The theorem is used as a procedure | The statement, then numbered steps on one example, with an optional misuse beside them. |
| **geometric** | The theorem has a picture | The statement and its geometric reading next to a plotted figure. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `card`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'card' \| 'matrix' \| 'iff' \| 'chain' \| 'converse' \| 'apply' \| 'geometric'` | `'card'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:  { kicker?, title?, lede? },   // all optional; omit header to hide it
  labels?:  { ... },
  theme?:   { ... },
  options?: { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `$$…$$`, `**bold**` and links work everywhere.

### `card`

```js
theorem: {
  hypotheses: [{ text, job?, counter? }],
  conclusion,         // shown under "Then"
  meaning?            // one line under the conclusion
}
```

| Field | |
|---|---|
| `hypotheses[].text` | The hypothesis. |
| `hypotheses[].job` | What the hypothesis does. Shown under "Its job" when it is dropped. |
| `hypotheses[].counter` | A counterexample without it. If missing, `labels.noCounter` is shown. |

### `matrix`

```js
hypotheses: [{ id, text }],
theorems:   [{ id, name, short?, needs: [hypothesisId], conclusion }],
relations?: [string]          // pills under the table
```

### `iff`

```js
theorem: {
  left, leftSay?,
  right, rightSay?,
  forward?, backward?,                  // arrow labels; default labels.forward / labels.backward
  general?: { label, text, say? },      // blue box
  misuse?:  { label, text }             // gold box
}
```

### `chain`

```js
chain: [
  { name?, text?, items?, edge? }   // edge = label on the arrow to the next box
]
```

A box can have `text` (maths), `items` (a bullet list) or both. The last box has a blue top edge, and its `edge` is ignored.

### `converse`

```js
theorem: {
  says, saysLabel?,
  not,  notLabel?,
  counter?: { label, wrong, right },
  scope?                            // one muted line at the bottom
}
```

### `apply`

```js
theorem: {
  statement,
  steps: [{ label?, text, hit? }],  // hit: true highlights the step (e.g. the test that succeeds)
  misuse?: { label, text }          // without it, the steps take the full width
}
```

### `geometric`

```js
theorem: {
  statement,
  reading?, readingLabel?,          // the geometric reading (default label: labels.geometrically)
  aside?: { label, text },          // gold box under the reading
  figure: { f, x0, x1, a, b, c?, aLabel?, bLabel?, cLabel? },
  key?: [{ text, color, dashed? }]  // legend under the figure
}
```

| Figure field | |
|---|---|
| `f` | A JS function `(x) => y`, plotted on `[x0, x1]`. |
| `a`, `b` | The interval ends. The secant joins `(a, f(a))` and `(b, f(b))`. |
| `c` | Optional. If missing, the point in `(a, b)` where the slope is closest to the secant's is found numerically. |
| `aLabel`, `bLabel`, `cLabel` | Axis labels, default `a`, `b`, `c`. |

Without `key`, the legend is built from `labels.secant`, `labels.tangent` and `labels.curve` in theme colours. Pass `key: []` to hide it.

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Variant |
|---|---|---|
| `if` / `then` | `'If'` / `'Then'` | card |
| `dropHint` / `dropped` | `'click: drop it'` / `'dropped'` | card |
| `without` | `'Without hypothesis {n}'` | card; `{n}` is replaced by the number |
| `job` / `counterexample` | `'Its job'` / `'Counterexample'` | card |
| `noCounter` | `'No counterexample on this page.'` | card |
| `hypothesis` / `matrixThen` | `'Hypothesis'` / `'Then'` | matrix |
| `forward` / `backward` | `'implies'` / `'conversely'` | iff |
| `says` / `not` | `'The theorem says'` / `'It does not say'` | converse |
| `wrong` / `right` | `'Wrong working'` / `'Right working'` | converse |
| `theorem` | `'Theorem'` | apply, geometric |
| `geometrically` | `'Geometrically'` | geometric |
| `secant` / `tangent` / `curve` | `'secant'` / `'tangent at $c$'` / `'$f$'` | geometric (default legend) |

Field-level text (`saysLabel`, `notLabel`, `readingLabel`, `forward`, `backward`) overrides the label for that one card.

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, theorem names |
| `muted` | `#64748b` | Lede, labels, secant |
| `line` | `#e2e8f0` | Dividers, hypothesis borders |
| `box` | `#c7cedb` | Box borders, figure axis |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background |
| `headBg` | `#eff6ff` | Table header, highlighted step |
| `navy` | `#1e3a8a` | Number badges, top edges, the curve |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Conclusions, arrows, ✓ marks, tangent |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Dropped hypothesis, misuse, counterexample, the point `c` |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | "If" edge, "does not say" box |
| `faint` | `#cbd5e1` | The — marks in matrix |
| `conclBg` | `#fbfdff` | The "Then" row in matrix |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `interactive` | `true` | card: hypotheses can be clicked to drop them. `false` makes the card static. |
| `marks` | `true` | ✓ / — in matrix, ✕ in converse |
| `strikeNot` | `true` | converse: strikes through the "does not say" text |
| `arrow` | `'⟹'` | card: the glyph between If and Then |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths blocks, with KaTeX for maths.

---

## Examples

All from the demo (`info_theorem_card_v2.html`).

### card: `calculus/derivatives/rules` → Rolle's Theorem

```js
export const rolle = {
  header: { kicker: 'Derivatives', title: "Rolle's Theorem", lede: 'Click a hypothesis to see what it does and what breaks without it.' },
  theorem: {
    hypotheses: [
      { text: '$f$ is continuous on $[a, b]$', job: 'Keeps the graph from jumping over the turning point.' },
      { text: '$f$ is differentiable on $(a, b)$', job: 'The graph has a tangent line at every interior point, including the one where it turns.',
        counter: "$f(x) = |x|$ on $[-1, 1]$: $f(-1) = f(1) = 1$, yet $f'(x)$ is $-1$ or $1$ and never $0$. The corner at $x = 0$ breaks differentiability." },
      { text: '$f(a) = f(b)$', job: 'Equal endpoint values make the secant through the endpoints flat.' }
    ],
    conclusion: "$f'(c) = 0$ for some $c \\in (a, b)$",
    meaning: 'A function that starts and ends at the same value must have a horizontal tangent somewhere between.'
  }
};
```

### matrix: IVT, MVT, Rolle's

```js
export const existenceTheorems = {
  header: { kicker: 'Calculus', title: 'Three existence theorems on $[a, b]$', lede: 'Which hypotheses each one needs, and what it guarantees.' },
  hypotheses: [
    { id: 'cont', text: '$f$ continuous on $[a, b]$' },
    { id: 'diff', text: '$f$ differentiable on $(a, b)$' },
    { id: 'eq',   text: '$f(a) = f(b)$' },
    { id: 'k',    text: '$k$ between $f(a)$ and $f(b)$' }
  ],
  theorems: [
    { id: 'ivt',   name: 'Intermediate Value', short: 'IVT', needs: ['cont', 'k'], conclusion: '$f(c) = k$' },
    { id: 'mvt',   name: 'Mean Value', short: 'MVT', needs: ['cont', 'diff'], conclusion: "$f'(c) = \\dfrac{f(b) - f(a)}{b - a}$" },
    { id: 'rolle', name: "Rolle's", needs: ['cont', 'diff', 'eq'], conclusion: "$f'(c) = 0$" }
  ],
  relations: [
    '**Rolle** is the special case of **MVT** where $f(a) = f(b)$',
    '**IVT** guarantees existence: a $c$ exists, but not where or whether it is unique'
  ]
};
```

### iff: `algebra/equations/polynomial` → Factor Theorem

```js
export const factorTheorem = {
  header: { kicker: 'Polynomials', title: 'The Factor Theorem', lede: 'Finding roots and finding factors are two expressions of the same problem.' },
  theorem: {
    left: '$P(r) = 0$', leftSay: '$r$ is a root',
    right: '$(x - r)$ divides $P(x)$', rightSay: '$(x - r)$ is a factor',
    forward: 'remainder is 0', backward: 'conversely',
    general: { label: 'Remainder Theorem (general case)', text: '$P(x) = (x - r)Q(x) + P(r)$',
      say: 'Dividing by $(x - r)$ leaves remainder $P(r)$; the Factor Theorem is the case $P(r) = 0$.' },
    misuse: { label: 'Using the wrong sign of $r$',
      text: 'Dividing $x^3 + 2x^2 - 5x - 6$ by $(x + 1)$ with $r = 1$ gives the remainder $P(1) = -8$, so the factor seems to fail. Since $x + 1 = x - (-1)$, $r = -1$: the remainder is $P(-1) = 0$ and the quotient is $x^2 + x - 6$.' }
  }
};
```

### chain: Rolle → MVT → uses

```js
export const mvtChain = {
  header: { kicker: 'Derivatives', title: "From Rolle's Theorem to the Mean Value Theorem", lede: 'The Mean Value Theorem is primarily a theoretical tool.' },
  chain: [
    { name: "Rolle's Theorem", text: "$f(a) = f(b) \\implies f'(c) = 0$", edge: 'special case $f(a) = f(b)$' },
    { name: 'Mean Value Theorem', text: "$f'(c) = \\dfrac{f(b) - f(a)}{b - a}$", edge: 'proves' },
    { name: 'Uses', items: [
      'A function with positive derivative on an interval is increasing',
      'Two functions with the same derivative differ by a constant',
      'The connection between antiderivatives and definite integrals in the Fundamental Theorem of Calculus'
    ] }
  ]
};
```

### converse: `calculus/limits/continuity` → IVT

```js
export const ivtBackwards = {
  header: { kicker: 'Continuity', title: 'Intermediate Value Theorem', lede: 'The theorem only goes one way.' },
  theorem: {
    says: 'If $f$ is continuous on $[a, b]$ and $k$ lies between $f(a)$ and $f(b)$, then $f(c) = k$ for some $c \\in (a, b)$.',
    not: 'If $k$ does not lie between $f(a)$ and $f(b)$, then $f$ never reaches $k$ on $[a, b]$.',
    counter: {
      label: 'Reading the theorem backwards',
      wrong: '$f(x) = x^2$ on $[-1, 1]$ has $f(-1) = 1$ and $f(1) = 1$. There is no sign change, so $x^2 = 0$ has no solution in $(-1, 1)$.',
      right: 'If $k$ does not lie between them, the theorem says nothing. Here $f(0) = 0$, so the equation has the solution $x = 0$.'
    },
    scope: '**Existence only:** it says a $c$ exists but does not tell you where or whether it is unique.'
  }
};
```

### apply: `algebra/equations/polynomial` → Rational Root Theorem

```js
export const rationalRoot = {
  header: { kicker: 'Polynomials', title: 'The Rational Root Theorem', lede: 'A finite, testable list of candidates.' },
  theorem: {
    statement: 'If $\\frac{p}{q}$ is a rational root in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.',
    steps: [
      { label: 'Read the ends', text: '$2x^3 - 3x^2 - 8x + 12 = 0$: the constant term is $12$, the leading coefficient is $2$.' },
      { label: 'Divisors', text: '$p$: $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$ · $q$: $\\pm 1, \\pm 2$' },
      { label: 'Candidates p/q', text: '$\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$ — sixteen candidates' },
      { label: 'Test', hit: true, text: '$P(2) = 16 - 12 - 16 + 12 = 0$, so $x = 2$ is a root and $(x - 2)$ is a factor.' },
      { label: 'Reduce', text: 'Dividing reduces the cubic to $2x^2 + x - 6 = 0$.' }
    ],
    misuse: { label: 'Swapping the roles of $p$ and $q$',
      text: 'Building the list as divisors of $2$ over divisors of $12$ gives $\\pm 1, \\pm 2, \\pm \\frac{1}{2}, \\pm \\frac{1}{3}, \\dots, \\pm \\frac{1}{12}$, and the root $\\frac{3}{2}$ is missing. The numerator divides the constant term: $3$ divides $12$ and $2$ divides $2$, so $\\frac{3}{2}$ is a candidate.' }
  }
};
```

### geometric: `calculus/derivatives/rules` → Mean Value Theorem

```js
export const mvtPicture = {
  header: { kicker: 'Derivatives', title: 'Mean Value Theorem', lede: 'The instantaneous rate of change at $c$ equals the average rate of change over the entire interval.' },
  theorem: {
    statement: "If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c \\in (a, b)$ such that $f'(c) = \\dfrac{f(b) - f(a)}{b - a}$.",
    reading: 'There is a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
    aside: { label: 'No mean value on a circle',
      text: 'A point moving round the unit circle as $(\\cos t, \\sin t)$, $0 \\leq t \\leq 2\\pi$, ends where it started, so its average velocity is zero, yet its velocity $(-\\sin t, \\cos t)$ has length $1$ at every moment.' },
    figure: { f: (x) => x + 1.6 * Math.sin(x), x0: -0.4, x1: 5.4, a: 0, b: 5 }
  }
};
```

### Customised from data

```js
{
  ...rolle,
  labels:  { if: 'Given', then: 'Conclusion', dropHint: 'tap to remove' },
  theme:   { blue: '#1d4ed8', gold: '#b45309', goldBg: '#fef9c3' },
  options: { arrow: '→' }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the theorem section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj9-diagram"
  id="rolle-theorem"
  title="Rolle's Theorem"
  source="/calculus/derivatives/rules"
>
  <TheoremCard data={rolle} variant="card" />
</DiagramFrame>
```

`data.figure.f` is a function, so the `geometric` data must live in a JS module, not in JSON or a getStaticProps return value.

---

## Authoring tips

- **Take the content from the page:** statements, hypotheses' jobs, counterexamples and pitfalls usually exist already in the theorem section and its pitfall aside.
- **Which variant:**
  - card when the page explains why each hypothesis is needed;
  - matrix when two or more theorems on the same interval share hypotheses;
  - iff for "if and only if" statements;
  - chain when the page says one theorem is a special case of, or proves, another;
  - converse when a pitfall is reading the theorem backwards;
  - apply when the page works an example step by step;
  - geometric when the page gives a geometric reading.
- **card:** give `counter` only where the page has one; the others show `labels.noCounter`.
- **apply:** mark the step that produces the result with `hit: true`.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\dfrac'`, `'\\in'`).
