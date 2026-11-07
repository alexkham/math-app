# SpecialCases

A general rule and its special cases: what a formula turns into under particular substitutions, the outcomes when a procedure breaks, the values of a parameter where the rule changes, or where each case sits on a picture. There are four layouts. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import SpecialCases from '@/app/components/infographics/SpecialCases';

<SpecialCases data={binomialCases} variant="substitute" />
```

The component is a single file, `SpecialCases.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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
| **substitute** (default) | Special values turn a formula into new identities | The general formula, then one card per substitution: the result, its name and what it means. |
| **outcomes** | A procedure usually gives one answer but can end differently | The usual steps on the left, ending in the deciding question; one row per outcome on the right, with a worked chain and the solution set. |
| **boundary** | A rule changes at particular values of a parameter | The general rule, then one row per case: condition and tag, the rule there with examples, and why. Rows with more to say open on click (or Enter / Space). |
| **map** | Each case is a region or point of a picture | The picture on the left, the cases on the right. Hovering a case highlights its part of the picture, and the reverse. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `substitute`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'substitute' \| 'outcomes' \| 'boundary' \| 'map'` | `'substitute'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:  { kicker?, title?, lede? },  // omit header to hide it
  general?: { label?, text, say? },      // the general rule, above the cases; label defaults to labels.general
  cases:    Case[],                      // fields depend on the variant
  note?:    { label, text },             // blue note
  pitfall?: { label, text },             // gold note; side by side with the note when both are given
  labels?:  { ... },
  theme?:   { ... },
  options?: { ... }
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere.

### substitute

```js
cases: [{ when, result, name?, text }]
```

| Field | |
|---|---|
| `when` | The substitution, shown after `labels.set`, e.g. `'$a = 1,\\ b = -1$'`. |
| `result` | What the formula becomes. |
| `name` | A short name for the result, e.g. `'Alternating sum'`. |
| `text` | What it means. |

### outcomes

```js
path?: { label?, steps: [string], question? },   // the last step is shown as the deciding question unless question: false
cases: [{ when, name, chain?, text, set?, setLabel?, tone? }]
```

| Field | |
|---|---|
| `when` | The answer to the question that leads here, e.g. `'Yes, constants match'`. |
| `name` | The outcome, e.g. `'Identity'`. |
| `chain` | Worked lines joined by `options.arrow`. |
| `set` | The solution set in the right column. Leave out to drop the column. |
| `setLabel` | Heading over `set` (default `labels.solutions`). |
| `tone` | `'normal'` (slate), `'good'` (blue), `'bad'` (gold). |

### boundary

```js
cases: [{ when, tag?, rule, examples?, why, more?, tone? }]
```

| Field | |
|---|---|
| `when` | The condition, e.g. `'$n = 1$'`. |
| `tag` | A pill under it, e.g. `'always 0'`. |
| `rule` | What the rule becomes there. |
| `examples` | A muted line under the rule. |
| `why` | The reason. |
| `more` | Extra text, shown when the row is opened. Rows without it are not clickable. |
| `tone` | `'warn'` (gold pill) or `'stop'` (slate row, dark pill, for undefined cases). |

### map

```js
cases:  [{ name, when, rule?, text? }],
figure: Plane | ReactNode | ({ on, setOn, theme }) => ReactNode
```

The built-in picture is a coordinate plane:

```js
figure: {
  kind: 'plane',
  width?, height?,                 // default 260 × 220; the origin is at the centre
  xUnit?, yUnit?,                  // pixels per unit, default 14 and 18
  xLabel?, yLabel?,                // axis names, e.g. 'Re', 'Im'
  xAxisCase?, yAxisCase?,          // index of the case each axis belongs to
  originCase?, originLabel?,       // index of the case the origin belongs to; label default '0'
  points?: [{ x, y, label, case }] // points, each linked to a case
}
```

Each case gets a colour from `theme.caseColors` (by index), used for its number badge and for its parts of the picture. For any other picture, pass a React node or a function that receives `on` (the highlighted case index, or `null`) and `setOn`, and draws accordingly.

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Variant |
|---|---|---|
| `general` | `'General'` | Label of the general rule |
| `set` | `'Set'` | substitute: before each substitution |
| `solutions` | `'Solutions'` | outcomes: heading over the solution set |
| `more` / `less` | `'more'` / `'less'` | boundary: the toggle text |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, case names, conditions |
| `muted` | `#64748b` | Lede, labels, examples, axis names |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background |
| `headBg` | `#eff6ff` | Headers, hovered rows, the `good` set |
| `navy` | `#1e3a8a` | General rule edge, the deciding question |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | `good` outcomes, pills, toggles |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | `bad` outcomes, `warn` pills, result names, pitfall |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | `normal` outcomes, the usual steps, `stop` rows |
| `axis` | `#94a3b8` | map: axes when not highlighted |
| `caseColors` | `['#2563eb', '#1e3a8a', '#ca8a04', …]` | map: badge and picture colour of each case |
| `caseInks` | `['#2563eb', '#1e3a8a', '#a16207', …]` | map: label colour of each case in the picture |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `arrow` | `'→'` | outcomes: between the lines of a chain |
| `expandable` | `true` | boundary: rows with `more` open on click |
| `hover` | `true` | map: hovering links the cases and the picture |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for maths, with KaTeX.

---

## Examples

All from the demo (`info_special_cases.html`).

### substitute: `combinatorics/binomial-theorem` → Special Cases

```js
export const binomialCases = {
  header: { kicker: 'Binomial theorem', title: 'Special Cases', lede: 'Specific substitutions for $a$ and $b$ convert the theorem into useful identities.' },
  general: { label: 'General', text: '$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$' },
  cases: [
    { when: '$a = 1,\\ b = 1$', result: '$2^n = \\sum_{k=0}^{n} \\binom{n}{k}$', name: 'Row sum',
      text: "The entries of row $n$ of Pascal's triangle sum to $2^n$, the number of subsets of an $n$-set." },
    { when: '$a = 1,\\ b = -1$', result: '$0 = \\sum_{k=0}^{n} (-1)^k \\binom{n}{k}$', name: 'Alternating sum',
      text: 'For $n \\ge 1$: an $n$-set has as many even-sized subsets as odd-sized ones.' },
    { when: '$a = 1,\\ b = x$', result: '$(1+x)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k$', name: 'Generating function',
      text: 'The form most commonly encountered in algebra: a polynomial whose coefficients encode the entire row.' }
  ],
  note: { label: 'Derived identity', text: 'Differentiating $(1+x)^n$ and substituting $x = 1$ gives $\\sum_{k=1}^{n} k \\binom{n}{k} = n \\cdot 2^{n-1}$.' }
};
```

### outcomes: `algebra/equations/linear` → Special Cases

```js
export const linearCases = {
  header: { kicker: 'Linear equations', title: 'Special Cases', lede: 'The procedure assumes the variable survives the simplification. When it does not, two outcomes are possible.' },
  path: { label: 'Solving', steps: ['Distribute', 'Collect the $x$ terms on one side', 'Do the variable terms cancel completely?'] },
  cases: [
    { tone: 'normal', when: 'No', name: 'One solution', chain: ['$\\dots$', '$x = \\text{value}$'], text: 'The usual case.', set: '$\\{x\\}$' },
    { tone: 'good', when: 'Yes, constants match', name: 'Identity', chain: ['$2(x + 3) = 2x + 6$', '$2x + 6 = 2x + 6$', '$6 = 6$'],
      text: 'True regardless of $x$: every real number satisfies it.', set: '$\\mathbb{R}$' },
    { tone: 'bad', when: 'Yes, constants clash', name: 'Contradiction', chain: ['$3(x + 1) = 3x + 8$', '$3x + 3 = 3x + 8$', '$3 = 8$'],
      text: 'False for every value of $x$: no real number satisfies it.', set: '$\\varnothing$' }
  ],
  pitfall: { label: 'Taking an identity for no solution', text: 'Reading $6 = 6$ as no solution, because $x$ has cancelled, discards every answer. $x = 1$ gives $8 = 8$. The solution set is $\\mathbb{R}$.' }
};
```

### boundary: `arithmetic/modulo` → Edge Cases

```js
export const moduloEdges = {
  header: { kicker: 'Modulo', title: 'Edge Cases', lede: 'Three cases deserve attention before the operation is applied routinely.' },
  general: { label: 'General', text: '$a = n \\cdot q + r, \\quad 0 \\leq r < n$', say: '$a \\bmod n = r$' },
  cases: [
    { when: '$0 \\leq a < n$', tag: 'no reduction', rule: '$a \\bmod n = a$', examples: '$3 \\bmod 10 = 3$, $0 \\bmod 5 = 0$, $6 \\bmod 7 = 6$',
      why: 'The divisor fits zero times: $a = n \\cdot 0 + a$.', more: 'The quotient says $n$ is too large to fit even once; the remainder says how much of $a$ is left over.' },
    { when: '$n = 1$', tag: 'always 0', rule: '$a \\bmod 1 = 0$', examples: 'for any integer $a$',
      why: 'Every integer is a multiple of $1$.', more: 'The remainder set $\\{0, 1, \\ldots, n-1\\}$ collapses to $\\{0\\}$.' },
    { when: '$n = 0$', tag: 'undefined', tone: 'stop', rule: '$a \\bmod 0$ is undefined', examples: 'in programming, $a \\% 0$ raises a runtime error',
      why: 'Division by zero has no meaning.', more: 'Every $q$ satisfies $a = 0 \\cdot q + r$ with $r = a$, so the quotient is not unique, and no remainder can satisfy $0 \\leq r < 0$.' }
  ],
  pitfall: { label: 'Giving the quotient instead of the remainder', text: 'Answering $3 \\bmod 10 = 0$, because $10$ fits into $3$ zero times, reports the quotient. All of $3$ is left: $3 \\bmod 10 = 3$.' }
};
```

### map: `complex-numbers/absolute-value` → Special Cases

```js
export const modulusCases = {
  header: { kicker: 'Complex modulus', title: 'Special Cases', lede: 'Certain categories yield particularly simple results, connecting the modulus back to real-number concepts.' },
  general: { label: 'General', text: '$|a + bi| = \\sqrt{a^2 + b^2}$' },
  figure: {
    kind: 'plane', xLabel: 'Re', yLabel: 'Im', xAxisCase: 0, yAxisCase: 1, originCase: 2,
    points: [
      { x: -7, y: 0, label: '−7', case: 0 }, { x: 5, y: 0, label: '5', case: 0 },
      { x: 0, y: 4, label: '4i', case: 1 }, { x: 0, y: -3, label: '−3i', case: 1 }
    ]
  },
  cases: [
    { name: 'Purely real', when: '$b = 0$', rule: '$|a| = \\sqrt{a^2} = |a|$', text: 'Ordinary absolute value. $|5| = 5$, $|-7| = 7$: the horizontal axis.' },
    { name: 'Pure imaginary', when: '$a = 0$', rule: '$|bi| = \\sqrt{b^2} = |b|$', text: '$|4i| = 4$, $|-3i| = 3$: how far up or down from the origin.' },
    { name: 'Zero', when: '$z = 0$', rule: '$|0| = 0$', text: 'The only complex number with modulus zero: $|z| = 0$ if and only if $z = 0$.' }
  ]
};
```

Point labels in `figure` are plain SVG text, not processed: write `'−7'` and `'4i'` directly, without `$…$`.

### Customised from data

```js
{
  ...moduloEdges,
  labels:  { general: 'Rule', more: 'why', less: 'hide' },
  theme:   { slate: '#334155', slateBg: '#e2e8f0' },
  options: { expandable: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the "Special Cases" or "Edge Cases" section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj6-diagram"
  id="linear-special-cases"
  title="Special Cases"
  source="/algebra/equations/linear"
>
  <SpecialCases data={linearCases} variant="outcomes" />
</DiagramFrame>
```

Data with a function `figure` must live in a JS module, not in JSON or a getStaticProps return value.

There are about 33 section titles with "Special Cases" or "Edge Cases" across 19 pages.

---

## Authoring tips

- **Take the content from the page:** special-case sections usually give one paragraph per case, each with a condition, the result and a reason. Map them one to one.
- **Which variant:**
  - substitute when the page says "setting $a = …$ gives";
  - outcomes when the page describes what happens when the usual method fails;
  - boundary when the cases are values of a parameter, especially when one is undefined;
  - map when the cases are places: axes, the origin, regions of a graph.
- **outcomes:** include the usual case as the first row (`tone: 'normal'`), so the special ones read as departures from it.
- **boundary:** put the long explanation in `more`, and keep `why` to one sentence.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\bmod'`, `'\\mathbb'`).
