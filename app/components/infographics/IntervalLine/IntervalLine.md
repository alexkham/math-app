# IntervalLine

Solution sets on the number line. You can show the interval forms with clickable endpoints, combine two conditions with AND or OR, or solve an inequality with a sign chart and switch its sign. The notation and the picture are computed from the data. Every colour, label and setting comes from data, with defaults.

```jsx
import IntervalLine from '@/app/components/infographics/IntervalLine/IntervalLine';

<IntervalLine data={intervalForms} variant="notation" />
```

The component is a single file, `IntervalLine.jsx`, in its own folder `app/components/infographics/IntervalLine/` beside this doc. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [What is computed](#what-is-computed)
5. [Interaction](#interaction)
6. [Customisation from data](#customisation-from-data)
7. [Examples](#examples)
8. [Embedding on a page](#embedding-on-a-page)
9. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **notation** (default) | Teaching interval notation and its picture | A list of interval forms and one large panel: the notation, the number line, and its meaning, endpoints and picture in words. Endpoints can be clicked to include or exclude them. |
| **compound** | AND / OR, and absolute value inequalities that turn into them | One number line per condition, an AND/OR switch, and the solution line with its notation. An optional rewrite row shows where the conditions come from. |
| **signs** | Polynomial and rational inequalities | The inequality, a sign chart (test value, a row per factor, the product, "in the solution?"), and the solution line. A switch changes the sign between <, ≤, > and ≥. |

`variant` selects the layout. An unknown value falls back to `notation`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'notation' \| 'compound' \| 'signs'` | `'notation'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data**. That is, `data.labels`, `data.theme` and `data.options` override the props.

---

## Data shape

Every variant shares the outer object:

```js
{
  header?: { kicker?, title?, lede? },   // omit header to hide it
  labels?, theme?, options?,
  // + the variant's own object below
}
```

Every text field goes through `processContent`, so `$…$`, `**bold**` and links work everywhere. Notes are `{ label, text }`.

### notation

```js
notation: {
  points: { a: 2, b: 6 },        // named endpoints and where they sit on the line
  range: [0, 8],                 // visible part of the line
  ticks?: false,                 // integer ticks with numbers (default off: only the named points)
  items: [{
    from: 'a' | '-inf',          // a key of points, or '-inf'
    to: 'b' | 'inf',
    fromIn?, toIn?,              // true = included (bracket, solid dot)
    meaning?, endpoints?, picture?   // your own wording; otherwise generated
  }],
  infinityNote?: { label?, text },   // shown when an infinite end (arrow) is clicked
  note?: { label, text },            // shown otherwise
  hint?                              // replaces labels.clickHint
}
```

### compound

```js
compound: {
  range: [-7, 7],                // shared by all cases (a case can set its own)
  wrongNote?: { label, text },   // shown when the switch is on the wrong connective
  cases: [{
    name,                        // tab label
    connective: 'and' | 'or',    // the correct one; the switch starts here
    conditions: [{ label, op: '<' | '<=' | '>' | '>=', value, tex? }],  // tex: LaTeX of the value, e.g. '\\frac{5}{3}', used in the solution's notation
    source?, rewrite?,           // optional first row: e.g. '$|2x - 3| < 5$' → '$-5 < 2x - 3 < 5$ …'
    note?: { label, text },      // shown with the correct connective
    wrongNote?: { label, text }, // overrides compound.wrongNote for this case
    range?
  }]
}
```

A condition can also be a ready set: `{ label, pieces: [{ from, to, fromIn, toIn }] }`, with `Infinity` / `-Infinity` for open ends.

### signs

```js
signs: {
  range: [-4, 7],
  cases: [{
    name,                        // tab label
    expression,                  // LaTeX without $, e.g. '(x + 2)(x - 3)' or '\\dfrac{x - 1}{x + 2}'
    op: '<' | '<=' | '>' | '>=', // the sign the switch starts on
    factors: [{
      label,                     // '$x + 2$'
      root,                      // where the factor is zero
      power?,                    // multiplicity (default 1); even powers do not change sign
      negative?,                 // true = the factor falls as x grows, e.g. '$3 - x$'; its sign is flipped
      denominator?               // true = a pole: undefined there, never in the solution
    }],
    tests?: [number, ...],       // one test value per piece; default: computed
    notes?: { '<': note, '<=': note, '>': note, '>=': note, '*': note },  // '*' for any sign
    range?
  }]
}
```

---

## What is computed

- **Notation:** written from the pieces. `(` and `[` follow inclusion, `∞` always takes a parenthesis, pieces are joined with `∪`, and an empty set is `∅`.
- **notation variant:** the meaning, endpoints and number-line wording are generated with the same phrases as the "Interval Notation" table on `algebra/inequalities`, so clicking an endpoint keeps the wording consistent. An item's own `meaning`, `endpoints` or `picture` are used while that item is showing.
- **compound:** the solution is the intersection (AND) or union (OR) of the conditions, worked out at every endpoint and between them. Endpoint inclusion is exact.
- **signs:** critical points are the factors' roots. Each piece gets one test value: the given `tests`, or else one unit beyond the outer critical points and the midpoint between inner ones. A factor's sign is the sign of $(x - \text{root})^{\text{power}}$, flipped when the factor is marked `negative`, and the product row multiplies the factors. At a critical point the expression is $0$, or undefined at a pole. A point is in the solution when $0$ satisfies the sign and it is not a pole.

---

## Interaction

**notation**

- **Click an item:** shows it.
- **Click an endpoint dot:** toggles included or excluded. When the result matches an item, that item is highlighted. Otherwise the panel says "not in the list above".
- **Click an arrow (infinite end):** shows `infinityNote`.

**compound**

- **Tabs:** switch case.
- **AND / OR:** recompute the solution. The wrong connective shows the case's `wrongNote`, or `compound.wrongNote`.

**signs**

- **Tabs:** switch case.
- **Sign switch:** recomputes the "in the solution?" row, the solution and the dots.
- **Hover a column:** highlights that piece of the number line.

Each case keeps its own switch position when you change tabs. `options.clickable: false` turns off the endpoint and arrow clicks, and `options.hover: false` turns off the column highlight.

Number lines size themselves to their box, so text stays readable on phones. The sign chart scrolls sideways below about 520 px.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `interval`, `meaning`, `endpoints`, `numberLine` | `'Interval'`, `'Meaning'`, `'Endpoints'`, `'Number line'` | notation panel |
| `clickHint` | `'Click an endpoint to include or exclude it. Click an arrow for the infinite end.'` | under notation |
| `noMatch` | `'not in the list above'` | notation, toggled into an unlisted form |
| `allReals` | `'all real numbers'` | meaning of $(-\infty, \infty)$ |
| `bothExcluded`, `bothIncluded` | `'both excluded'`, `'both included'` | endpoints |
| `firstIn`, `firstOut` | `'{a} included, {b} excluded'`, `'{a} excluded, {b} included'` | endpoints |
| `rayIn`, `rayOut` | `'{a} included; {inf} never bracketed'`, `'{a} excluded; {inf} never bracketed'` | endpoints of a ray |
| `noEndpoints` | `'no endpoints'` | the whole line |
| `lineOpenBoth`, `lineSolidBoth` | `'open dots at {a} and {b}, shaded between'`, `'solid dots at {a} and {b}, shaded between'` | number line wording |
| `lineFirstIn`, `lineFirstOut` | `'solid dot at {a}, open dot at {b}'`, `'open dot at {a}, solid dot at {b}'` | number line wording |
| `lineRight`, `lineLeft` | `'{dot} dot at {a}, shading extends right'`, `'… left'` | rays |
| `lineAll` | `'entire line shaded'` | the whole line |
| `open`, `solid` | `'open'`, `'solid'` | `{dot}`, dot tooltips |
| `infinity` | `'Infinity'` | default label of `infinityNote` |
| `rewrite`, `condition`, `solution` | `'Rewrite'`, `'Condition'`, `'Solution'` | row labels |
| `and`, `or` | `'AND'`, `'OR'` | switch |
| `intersection`, `union` | `'intersection: where both hold'`, `'union: where at least one holds'` | beside the switch |
| `empty` | `'\\varnothing'` | empty solution |
| `operator` | `'Inequality'` | signs switch |
| `criticalPoints`, `testValue`, `sign`, `inSolution` | `'Critical points'`, `'test value'`, `'sign of'`, `'in the solution?'` | sign chart |
| `yes`, `no`, `undefinedAt` | `'yes'`, `'no'`, `'undefined'` | sign chart cells |

Template keys: `{a}`, `{b}` are endpoint names, `{inf}` is $\infty$ or $-\infty$, and `{dot}` is `open` or `solid`.

### `theme` (`DEFAULT_THEME`)

| Key | Default | |
|---|---|---|
| `ink`, `title`, `muted` | `#1e293b`, `#1e3a8a`, `#64748b` | text |
| `line`, `box` | `#e2e8f0`, `#c7cedb` | dividers, box borders |
| `panel`, `soft`, `headBg` | `#ffffff`, `#f8fafc`, `#eff6ff` | backgrounds |
| `navy`, `blue`, `blueSoft` | `#1e3a8a`, `#2563eb`, `#dbeafe` | tabs, switches, "+" signs |
| `gold`, `goldBg`, `goldInk` | `#ca8a04`, `#fef3c7`, `#a16207` | solution row, warnings |
| `slate`, `slateBg`, `onDark` | `#475569`, `#f1f5f9`, `#ffffff` | "−" signs |
| `axis`, `tickInk` | `#94a3b8`, `#64748b` | number line, tick numbers |
| `condition` | `#2563eb` | condition lines, column highlight |
| `solution` | `#ca8a04` | solution lines and dots |
| `pole` | `#b91c1c` | pole marker, "undefined" |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `clickable` | `true` | notation: endpoints and arrows can be clicked |
| `hover` | `true` | signs: hovering a column highlights its piece |

---

## Examples

All from `algebra/inequalities`.

### notation: Interval Notation (summary table)

```js
const intervalForms = {
  header: { kicker: 'Inequalities', title: 'Interval Notation', lede: 'Interval notation describes subsets of the number line using endpoints and brackets.' },
  notation: {
    points: { a: 2, b: 6 },
    range: [0, 8],
    items: [
      { from: 'a', to: 'b' },
      { from: 'a', to: 'b', fromIn: true, toIn: true },
      { from: 'a', to: 'b', fromIn: true },
      { from: 'a', to: 'b', toIn: true },
      { from: 'a', to: 'inf' },
      { from: '-inf', to: 'a', toIn: true },
      { from: '-inf', to: 'inf', meaning: 'all real numbers' }
    ],
    infinityNote: { label: '$\\infty$ is never bracketed', text: 'The symbol $\\infty$ is not a number and is never paired with a square bracket — writing $[a, \\infty]$ is meaningless because infinity cannot be reached or included.' },
    note: { label: 'Number Line Representation', text: 'The number line is a direct translation of interval notation into geometry. Every interval has a corresponding picture, and reading the picture back produces the interval notation.' }
  }
};
```

### compound: Compound Inequalities; Absolute Value Inequalities

```js
const compoundInequalities = {
  header: { kicker: 'Inequalities', title: 'Compound Inequalities', lede: 'A compound inequality combines two inequality conditions into one statement.' },
  compound: {
    range: [-7, 7],
    wrongNote: { label: 'AND and OR are not interchangeable', text: 'AND narrows the solution set (intersection), OR expands it (union). Confusing the two changes the answer entirely.' },
    cases: [
      { name: 'Conjunction', connective: 'and',
        conditions: [{ label: '$-3 < x$', op: '>', value: -3 }, { label: '$x < 5$', op: '<', value: 5 }],
        note: { label: 'Conjunction (AND)', text: 'The solution is the intersection of the two individual solution sets — the overlap.' } },
      { name: '$|x + 1| \\geq 4$', connective: 'or', source: '$|x + 1| \\geq 4$',
        rewrite: '$x + 1 \\leq -4$ or $x + 1 \\geq 4$ $\\Rightarrow$ $x \\leq -5$ or $x \\geq 3$',
        conditions: [{ label: '$x \\leq -5$', op: '<=', value: -5 }, { label: '$x \\geq 3$', op: '>=', value: 3 }],
        wrongNote: { label: 'Using AND for greater than', text: 'Converting $|x + 1| \\geq 4$ to $-4 \\leq x + 1 \\leq 4$ gives $-5 \\leq x \\leq 3$, which keeps $x = 0$, where $|0 + 1| = 1$. Greater than means OR: $x \\leq -5$ or $x \\geq 3$.' } }
    ]
  }
};
```

### signs: Sign Analysis

```js
const signAnalysis = {
  header: { kicker: 'Inequalities', title: 'Sign Analysis', lede: 'Between consecutive critical points, the expression cannot change sign.' },
  signs: {
    range: [-4, 7],
    cases: [
      { name: '$(x + 2)(x - 3)$', expression: '(x + 2)(x - 3)', op: '<', tests: [-3, 0, 4],
        factors: [{ label: '$x + 2$', root: -2 }, { label: '$x - 3$', root: 3 }] },
      { name: '$\\frac{x - 1}{x + 2}$', expression: '\\dfrac{x - 1}{x + 2}', op: '<',
        factors: [{ label: '$x + 2$', root: -2, denominator: true }, { label: '$x - 1$', root: 1 }],
        notes: { '*': { label: 'Two kinds of critical point', text: 'The pole can never belong to the solution, while the numerator zero joins it only for a non-strict inequality.' } } }
    ]
  }
};
```

### Customised from data

```js
{
  ...signAnalysis,
  theme: { solution: '#2563eb', goldBg: '#dbeafe', goldInk: '#1e3a8a' },
  labels: { inSolution: 'solves it?', operator: 'Sign' },
  options: { hover: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj3-diagram"
  id="interval-notation"
  title="Interval Notation"
  source="/algebra/inequalities"
>
  <IntervalLine data={intervalForms} variant="notation" />
</DiagramFrame>
```

Good homes:

- **notation:** `algebra/inequalities` (Interval Notation, Number Line Representation), and the interval notation entry on `algebra/definitions`.
- **compound:** Compound Inequalities and Absolute Value Inequalities on `algebra/inequalities`, and `algebra/inequalities/absolute-value`.
- **signs:** Sign Analysis on `algebra/inequalities`, and the quadratic, polynomial and rational inequality pages.

### Where it is placed (2026-11-15)

11 frames on 9 lesson pages. Each data constant sits above `getStaticProps` in its page file.

| Page | Section | Variant | Data constant | Frame id |
|---|---|---|---|---|
| `algebra/inequalities/absolute-value` | Worked Examples with Linear Expressions | compound | `il_linearExamples` | `linear-examples-number-line` |
| `algebra/inequalities/linear` | Graphing the Solution | notation | `il_boundaryForms` | `boundary-dot-and-bracket` |
| `algebra/inequalities/polynomial` | Worked Examples | signs | `il_polyExamples` | `worked-examples-sign-chart` |
| `algebra/inequalities/quadratic` | Reducible Inequalities | compound | `il_biquadratic` | `biquadratic-number-line` |
| `algebra/inequalities/rational` | Worked Examples | signs | `il_rationalExamples` | `rational-worked-examples-sign-chart` |
| `algebra/logarithms/inequalities` | Domain Considerations | compound | `il_logDomain` | `log-domain-number-line` |
| `algebra/logarithms/inequalities` | Compound Inequalities | compound | `il_logCompound` | `log-compound-number-line` |
| `algebra/logarithms/inequalities` | Inequalities with Combined Logarithms | compound | `il_combinedLogs` | `combined-logs-number-line` |
| `algebra/powers/exponential-inequalities` | Compound Inequalities | compound | `il_expCompound` | `exponential-compound-number-line` |
| `algebra/roots/equations` | Radical Inequalities | compound | `il_radicalIneq` | `radical-inequalities-number-line` |
| `functions/domain` | Finding Domain: Logarithmic Functions | signs | `il_logDomainSigns` | `log-domain-sign-chart` |

---

## Authoring tips

- **Crowded lines:** when the numbers under a line would sit closer than about 20 px (a long range, or a narrow screen), the line keeps the numbers at the endpoints of its sets and shows every second or third of the rest. Nothing needs to be set.

- **Use the page's own example values:** put the test values the page uses in `tests`, so the chart shows the same numbers as the text.
- **Rationals:** list the denominator factors with `denominator: true`. They are drawn as poles and never included, whatever the sign.
- **Repeated roots:** use `power: 2` for a squared factor. The sign then stays the same across that point (a bounce rather than a crossing).
- **Factors written backwards:** for a factor such as $3 - x$ or $-2x + 6$, add `negative: true`. Without it the signs and the solution come out reversed.
- **Range:** leave at least one unit beyond the outermost point, so the arrows and open dots don't touch the edge.
- **Notes per sign:** in `signs`, write a note for each sign the page discusses (`'<'`, `'<='`) and use `'*'` for one that fits all four.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\leq'`, `'\\dfrac'`). `expression` is LaTeX without dollar signs.
