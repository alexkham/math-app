# FormulaSheet

A formula reference for a topic: the "Summary of…" and "Master Reference" sections. There are four layouts, and any formula can open to show an extra part (a derivation, a reason, a pitfall). Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import FormulaSheet from '@/app/components/infographics/FormulaSheet/FormulaSheet';

<FormulaSheet data={logRules} variant="card" />
```

The component is a single file, `FormulaSheet.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Expandable parts](#expandable-parts)
5. [Customisation from data](#customisation-from-data)
6. [Examples](#examples)
7. [Embedding on a page](#embedding-on-a-page)
8. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **card** (default) | A handful of rules, each with the same few attributes | A table with columns you define: name, formula, what it does, example. A row opens beneath itself. |
| **tiles** | Many formulas, each with a condition | One tile per formula: name, formula, example, and the restriction as a gold note. A tile opens inside itself. |
| **grouped** | Formulas that fall into families and come in pairs | One box per family, two formulas per line. Chips filter to one family. A formula opens beneath its pair. |
| **paired** | The same operations on two axes (vertical / horizontal, inside / outside) | Operations as rows, the two axes as columns, each cell with form, effect and condition. A cell opens inside itself. |

There is no automatic choice: `variant` selects the layout. An unknown value falls back to `card`.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'card' \| 'tiles' \| 'grouped' \| 'paired'` | `'card'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data** (`data.labels`, `data.theme` and `data.options` win).

---

## Data shape

Every variant shares the outer object:

```js
{
  header?:   { kicker?, title?, lede? },   // omit header to hide it
  footnote?: string,                       // one muted line under the layout (card, tiles, grouped)
  labels?:   { ... },
  theme?:    { ... },
  options?:  { ... },
  // + the variant's own fields below
}
```

All text fields go through `processContent`, so `$…$`, `**bold**` and links work everywhere.

### card

```js
columns: [{ key, label, kind? }],
rows:    [{ [key]: value, sub?, details?, detailsLabel?, detailsTitle? }]
```

`sub` is a line of prose shown under the name (in the `kind: 'name'` column), for example what the formula is for, with a link to the section that explains it.

| Column `kind` | Cell style |
|---|---|
| `'name'` | Bold title text; `sub` sits under it in normal weight. Rows open from a toggle under the first column. |
| `'formula'` | Maths font, larger. |
| `'example'` | Maths font on a grey background. |
| `'transform'` | If the value is a two-item array `['a', 'b']`, shown as *a* ↔ *b*; a string is shown as it is. |
| none | Plain text. |

### tiles

```js
items: [{ name, formula, text?, example?, restriction?, details?, detailsLabel?, detailsTitle? }]
```

`text` is a line of prose under the formula.

### grouped

```js
groups: [{
  id, name,
  sub?,                           // a line of prose under the family heading
  pairs: [[Formula, Formula]]     // a Formula is a string, or { formula, text?, details?, detailsLabel?, detailsTitle? }
}]
```

Plain strings and objects can be mixed within a pair. `text` is a line of prose under the formula. A pair may hold one formula: a missing second slot, `null` or `''` is drawn as an empty cell (hidden on phones) and is not counted in the family heading.

### paired

```js
general?:      string,                       // the general form, in a box above the table
generalLabel?: string,                       // default labels.general
sides: [{ name, sub?, tag?, tone? }, { … }], // the two column headings; tone 'direct' (blue) or 'reversed' (gold)
rows:  [{ op, cells: [Cell, Cell] }],        // Cell: { formula, effect, condition?, details?, detailsLabel?, detailsTitle? }
note?: { label, text }                       // blue note under the table
```

---

## Expandable parts

Any row (card), tile, formula (grouped) or cell (paired) can carry:

| Field | Type | |
|---|---|---|
| `details` | string \| string[] \| ReactNode | The extra part. A string array is shown as paragraphs. Leave it out for no toggle. |
| `detailsLabel` | string | Toggle text, e.g. `'Derivation'`, `'Why'`, `'Proof'` (default `labels.more`). |
| `detailsTitle` | string | A small heading inside the opened part (default: none). |

When open, the toggle reads `labels.hide`. The part slides open; the rest of the layout moves down.

In `grouped`, opening one formula of a pair closes the other, so a single panel sits under the pair (`options.onePerPair`). With it set to `false`, each formula has its own panel and both can be open.

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `more` / `hide` | `'More'` / `'Hide'` | The toggle of an expandable part (`more` when no `detailsLabel`) |
| `all` | `'All'` | grouped: the first filter chip |
| `count` / `countOne` | `'{n} formulas'` / `'{n} formula'` | grouped: the count in each family heading (`countOne` when there is one) |
| `general` | `'General form'` | paired: label of the general form |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, formula names, formulas in tiles and cells |
| `muted` | `#64748b` | Lede, labels, conditions, counts |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Box borders |
| `panel` | `#ffffff` | Boxes |
| `soft` | `#f8fafc` | Body background, examples, opened parts |
| `headBg` | `#eff6ff` | Table and family headers, hovered rows, open formulas |
| `navy` | `#1e3a8a` | The active filter chip |
| `blue` / `blueSoft` | `#2563eb` / `#dbeafe` | Toggles, ↔ arrows, opened-part edge, `direct` tag |
| `gold` / `goldBg` / `goldInk` | `#ca8a04` / `#fef3c7` / `#a16207` | Restrictions in tiles, `reversed` tag |
| `slate` / `slateBg` | `#475569` / `#f1f5f9` | Example text, filter chips |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `groupFilter` | `true` | grouped: the filter chips (hidden anyway when there is only one family) |
| `counts` | `true` | grouped: the formula count in each family heading |
| `onePerPair` | `true` | grouped: one open formula per pair |
| `transformArrow` | `'↔'` | card: the arrow in `transform` cells |

The fonts are Inter for text, JetBrains Mono for labels, and STIX Two Text for formulas, with KaTeX.

### Narrow screens

Nothing scrolls sideways. Card cells wrap; below 680px each card row becomes a stacked block (name, formula, then the other columns) and the header row is hidden. In grouped, the two formulas of a pair stack and an empty slot is dropped. In paired, the heading row is hidden and each operation's two cells sit side by side under its name. A single formula wider than its cell still overflows: keep words out of formulas (put them in `sub` or `text`), and split a long formula at its `=` into two `$…$` pieces, which can break onto two lines.

---

## Examples

All from the demo (`info_formula_sheet_expandable.html`).

### card: `algebra/logarithms/rules` → Summary of Logarithm Rules

```js
export const logRules = {
  header: { kicker: 'Logarithms', title: 'Summary of Logarithm Rules', lede: 'Each rule converts an operation inside the argument into a different operation on the outside.' },
  columns: [
    { key: 'rule', label: 'Rule', kind: 'name' },
    { key: 'identity', label: 'Identity', kind: 'formula' },
    { key: 'does', label: 'What it transforms', kind: 'transform' },
    { key: 'ex', label: 'Example', kind: 'example' }
  ],
  rows: [
    { rule: 'Product', identity: '$\\log_a(x \\cdot y) = \\log_a(x) + \\log_a(y)$', does: ['multiplication inside', 'addition outside'], ex: '$\\log_2(8 \\cdot 4) = 3 + 2 = 5$',
      detailsLabel: 'Derivation', detailsTitle: 'From the exponent law',
      details: ['Let $\\log_a(x) = m$, $\\log_a(y) = n$, so $x = a^m$, $y = a^n$.', 'Apply $a^m \\cdot a^n = a^{m+n}$.', 'Read off as a logarithm: $\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$.'] },
    { rule: 'Quotient', identity: '$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$', does: ['division inside', 'subtraction outside'], ex: '$\\log_3\\left(\\frac{81}{9}\\right) = 4 - 2 = 2$',
      detailsLabel: 'Derivation', detailsTitle: 'From the exponent law',
      details: ['Same setup: $x = a^m$, $y = a^n$.', 'Apply $\\frac{a^m}{a^n} = a^{m-n}$.', 'Read off as a logarithm: $\\log_a\\left(\\frac{x}{y}\\right) = m - n = \\log_a(x) - \\log_a(y)$.'] },
    { rule: 'Power', identity: '$\\log_a(x^n) = n \\cdot \\log_a(x)$', does: ['exponent inside', 'coefficient outside'], ex: '$\\log_2(8^3) = 3 \\cdot 3 = 9$',
      detailsLabel: 'Derivation', detailsTitle: 'From the exponent law',
      details: ['Let $\\log_a(x) = m$, so $x = a^m$.', 'Apply $(a^m)^n = a^{mn}$.', 'Read off as a logarithm: $\\log_a(x^n) = mn = n \\cdot \\log_a(x)$.'] },
    { rule: 'Change of base', identity: '$\\log_a(x) = \\dfrac{\\log_b(x)}{\\log_b(a)}$', does: 'rewrites a logarithm in any new base $b$', ex: '$\\log_2(7) = \\frac{\\log 7}{\\log 2} \\approx 2.807$',
      detailsLabel: 'Derivation', detailsTitle: 'From the power rule',
      details: ['Let $\\log_a(x) = y$, so $a^y = x$.', 'Take $\\log_b$ of both sides and apply the power rule.', 'Read off: $y \\cdot \\log_b(a) = \\log_b(x)$, so $\\log_a(x) = \\dfrac{\\log_b(x)}{\\log_b(a)}$.'] }
  ]
};
```

### tiles: `algebra/powers/exponent-rules` → Master Reference of Exponent Laws

```js
export const exponentLaws = {
  header: { kicker: 'Exponents', title: 'Master Reference of Exponent Laws', lede: 'Each rule with its formula, a representative example, and the restriction that determines when it applies.' },
  items: [
    { name: 'Product', formula: '$a^m \\cdot a^n = a^{m+n}$', example: '$x^3 \\cdot x^5 = x^8$', restriction: 'bases must match' },
    { name: 'Quotient', formula: '$\\dfrac{a^m}{a^n} = a^{m-n}$', example: '$\\frac{x^7}{x^2} = x^5$', restriction: '$a \\neq 0$' },
    { name: 'Power of a power', formula: '$(a^m)^n = a^{m \\cdot n}$', example: '$(x^3)^4 = x^{12}$', restriction: 'distinct from stacked $a^{m^n}$' },
    { name: 'Power of a product', formula: '$(ab)^n = a^n \\cdot b^n$', example: '$(3x)^4 = 81x^4$', restriction: 'applies to products, not sums' },
    { name: 'Power of a quotient', formula: '$\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$', example: '$\\left(\\frac{2}{5}\\right)^3 = \\frac{8}{125}$', restriction: '$b \\neq 0$' },
    { name: 'Negative exponent', formula: '$a^{-n} = \\dfrac{1}{a^n}$', example: '$4^{-2} = \\frac{1}{16}$', restriction: '$a \\neq 0$',
      detailsLabel: 'Why', details: '$0^{-n}$ involves division by zero.' },
    { name: 'Zero exponent', formula: '$a^0 = 1$', example: '$7^0 = 1,\\ (-3)^0 = 1$', restriction: '$a \\neq 0$ ($0^0$ excluded)',
      detailsLabel: 'Why', details: '$0^0$ involves division by zero.' },
    { name: 'Rational exponent', formula: '$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$', example: '$8^{2/3} = (\\sqrt[3]{8})^2 = 4$', restriction: '$a \\geq 0$ when $n$ is even',
      detailsLabel: 'Why', details: 'Even roots of negatives are not real.' }
  ]
};
```

### grouped: `calculus/derivatives/common` → Summary of Common Derivatives

```js
export const commonDerivatives = {
  header: { kicker: 'Derivatives', title: 'Summary of Common Derivatives', lede: 'These twelve formulas, combined with the differentiation rules, handle every explicit function built from powers, trigonometric functions, exponentials, and logarithms.' },
  groups: [
    { id: 'pow', name: 'Constants and powers', pairs: [[
      { formula: '$\\frac{d}{dx}[c] = 0$', detailsLabel: 'Why', details: 'The graph is a horizontal line: the difference quotient $\\frac{c - c}{h} = 0$ for all $h \\neq 0$, so the limit is $0$.' },
      { formula: '$\\frac{d}{dx}[x^n] = nx^{n-1}$', detailsLabel: 'Examples', details: ['For any real exponent $n$:', '$\\frac{d}{dx}[x^5] = 5x^4$, $\\frac{d}{dx}[x^{-3}] = -3x^{-4}$, $\\frac{d}{dx}[x^{1/2}] = \\frac{1}{2\\sqrt{x}}$, $\\frac{d}{dx}[x^\\pi] = \\pi x^{\\pi - 1}$.'] }
    ]] },
    { id: 'trig', name: 'Trigonometric', pairs: [
      [{ formula: '$\\frac{d}{dx}[\\sin x] = \\cos x$', detailsLabel: 'Proof', details: ['Expand $\\sin(x + h)$ with the angle addition formula:', '$\\dfrac{\\sin(x+h) - \\sin x}{h} = \\sin x \\cdot \\dfrac{\\cos h - 1}{h} + \\cos x \\cdot \\dfrac{\\sin h}{h}$', 'The special limits $\\frac{\\sin h}{h} \\to 1$ and $\\frac{\\cos h - 1}{h} \\to 0$ give $\\cos x$.'] },
       '$\\frac{d}{dx}[\\cos x] = -\\sin x$'],
      [{ formula: '$\\frac{d}{dx}[\\tan x] = \\sec^2 x$', detailsLabel: 'Proof', details: 'Quotient rule on $\\frac{\\sin x}{\\cos x}$: $\\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x} = \\sec^2 x$.' },
       { formula: '$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$', detailsLabel: 'Sign pattern', details: 'The cofunctions $\\cos$, $\\cot$, $\\csc$ each carry a negative sign in their derivatives, while $\\sin$, $\\tan$, $\\sec$ do not.' }],
      ['$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$', '$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$']
    ] },
    { id: 'exp', name: 'Exponential and logarithmic', pairs: [
      [{ formula: '$\\frac{d}{dx}[e^x] = e^x$', detailsLabel: 'Proof', details: ['The difference quotient factors as $e^x \\cdot \\frac{e^h - 1}{h}$, and $\\frac{e^h - 1}{h} \\to 1$.', "No other function satisfies $f'(x) = f(x)$ except constant multiples $Ce^x$."] },
       { formula: '$\\frac{d}{dx}[a^x] = a^x \\ln a$', detailsLabel: 'Pitfall', details: 'Bringing the exponent down gives $x \\cdot 2^{x-1}$ for $\\frac{d}{dx}[2^x]$, which is $0$ at $x = 0$. The variable is in the exponent: the derivative is $2^x \\ln 2 \\approx 0.693$ at $x = 0$.' }],
      [{ formula: '$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$', detailsLabel: 'Proof', details: 'If $y = \\ln x$, then $e^y = x$. Differentiating: $e^y \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y} = \\frac{1}{x}$.' },
       { formula: '$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$', detailsLabel: 'Pitfall', details: 'Using $\\frac{1}{x}$ for $\\log_{10} x$ gives slope $1$ at $x = 1$. The factor $\\frac{1}{\\ln 10}$ is missing: the slope is about $0.434$.' }]
    ] }
  ],
  footnote: 'Inverse trigonometric, hyperbolic, and piecewise functions need the formulas in [derivatives of special functions](!/calculus/derivatives/special).'
};
```

### paired: `functions/transformations` → Summary of Transformations

```js
export const transformations = {
  header: { kicker: 'Functions', title: 'Summary of Transformations', lede: 'Shifts, scalings and reflections, each in vertical and horizontal form: six basic transformations.' },
  general: '$g(x) = a \\cdot f(b(x - h)) + k$',
  sides: [
    { name: 'Vertical', sub: 'outside $f$: acts on $y$', tag: 'direct effect', tone: 'direct' },
    { name: 'Horizontal', sub: 'inside $f$: acts on $x$', tag: 'reversed effect', tone: 'reversed' }
  ],
  rows: [
    { op: 'Shift', cells: [
      { formula: '$g(x) = f(x) + k$', effect: 'shifts the graph vertically by $k$', condition: 'up if $k > 0$, down if $k < 0$',
        detailsTitle: 'Domain and range', details: 'Domain unchanged. Range $[a, b] \\to [a + k, b + k]$.' },
      { formula: '$g(x) = f(x - h)$', effect: 'shifts the graph horizontally by $h$', condition: 'right if $h > 0$, left if $h < 0$',
        detailsTitle: 'Domain and range', details: ['Domain $[a, b] \\to [a + h, b + h]$. Range unchanged.', 'The sign is reversed: $f(x - h)$ moves right by $h$.'] }
    ] },
    { op: 'Stretch / compress', cells: [
      { formula: '$g(x) = a \\cdot f(x)$', effect: 'scales $y$-values by factor $a$', condition: 'stretch if $|a| > 1$, compress if $0 < |a| < 1$',
        detailsTitle: 'Domain and range', details: 'Domain unchanged. Range $[m, M] \\to [am, aM]$, or $[aM, am]$ if $a < 0$.' },
      { formula: '$g(x) = f(bx)$', effect: 'scales $x$-values by factor $\\frac{1}{b}$', condition: 'compress if $|b| > 1$, stretch if $0 < |b| < 1$' }
    ] },
    { op: 'Reflect', cells: [
      { formula: '$g(x) = -f(x)$', effect: 'flips the graph across the $x$-axis', condition: 'occurs when $a < 0$',
        detailsTitle: 'Domain and range', details: 'Domain unchanged. Range $[a, b] \\to [-b, -a]$.' },
      { formula: '$g(x) = f(-x)$', effect: 'flips the graph across the $y$-axis', condition: 'occurs when $b < 0$',
        detailsTitle: 'Domain and range', details: 'Domain $[a, b] \\to [-b, -a]$. Range unchanged.' }
    ] }
  ],
  note: { label: 'Inside vs outside', text: 'Adding a constant inside $f$ shifts with the sign reversed; outside, the sign is preserved. Multiplying inside scales by $\\frac{1}{b}$, a reciprocal effect; outside, by $a$ directly.' }
};
```

### Customised from data

```js
{
  ...commonDerivatives,
  labels:  { more: 'Show', hide: 'Close', all: 'Every family', count: '{n} rules' },
  theme:   { navy: '#0f172a', headBg: '#f1f5f9' },
  options: { counts: false, onePerPair: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the summary section's `content` array, wrapped in `DiagramFrame`, in place of the HTML table.

```jsx
<DiagramFrame
  key="obj8-diagram"
  id="log-rules-summary"
  title="Summary of Logarithm Rules"
  source="/algebra/logarithms/rules"
>
  <FormulaSheet data={logRules} variant="card" />
</DiagramFrame>
```

There are about 64 section titles with "Summary", "Formulas" or "Reference" across 37 pages. Many already hold their content as an HTML table string (`summaryTable`, `obj1Table`), which maps directly onto `card` columns and rows.

---

## Authoring tips

- **Take the content from the page:** each column of an existing summary table becomes a `card` column; each row a row.
- **Which variant:**
  - card for up to about six rules with the same attributes;
  - tiles when every formula has a restriction or condition worth seeing at a glance;
  - grouped for function families, where formulas naturally pair (sin / cos, $e^x$ / $a^x$);
  - paired when the page contrasts two versions of the same operations.
- **Expandable parts:** fill `details` from the section that introduces each formula: its derivation, why a restriction holds, or the matching pitfall. Leave formulas without anything to add closed.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\log'`, `'\\frac'`).
- **Prose in the cards:** give every row a `sub`, every tile and grouped formula a `text`, and every family a `sub`: one or two plain sentences on what the formula gives, with an in-sentence link to the page section that explains it. Links belong inside the cards, never as a list or footnote of links.
- **Columns:** three `card` columns at most. With four, long formulas wrap onto several lines.

---

## Pages using it

Since November 2026 the component is the "Formula Summary" of lesson pages in every subject (125 pages). The conventions used there:

- **Two cases.** A page with three or more formulas and no summary of them gets a new section titled `Formula Summary`, placed just before its Common Pitfalls section. A page whose summary section held an HTML table listing the same formulas has that table replaced by the sheet, with every row kept; the table string stays defined in the file but is no longer rendered. Tables of methods, cases or comparisons in words are left as they are.
- **Formulas from the page, unchanged**, taken from its formula boxes. `\displaystyle` is added in front of fractions, sums and limits so they show at full size.
- **Prose around the frame.** The section opens with two paragraphs (about 500–700 characters) that describe in words what the cards show, and the frame's `after` holds a one-paragraph takeaway. The closing is never titled or phrased as a conclusion.
- **Frame footer.** The `DiagramFrame` gets `related={{ href: '/<subject>/formulas', label: 'All <subject> formulas' }}` instead of a link back to the page itself; arithmetic has no formulas page and uses `related={false}`.
- **Data** is a constant in `getStaticProps` named `formulaSummaryData`, passed through props, with the site palette in `theme` (`title`/`navy` `#06357A`, `blue` `#2563EB`, `gold`/`goldInk` `#B45309`).
