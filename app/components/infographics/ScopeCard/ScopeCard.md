# ScopeCard

A scope infographic for one rule: the cases it covers, the cases it does not, and where the boundary between them sits. There are two variants. Colours can be set through the `theme` prop, with defaults.

```jsx
import ScopeCard from '@/app/components/infographics/ScopeCard/ScopeCard';

<ScopeCard data={substitutionScope} variant="boundary" theme={scopeTheme} />
```

The component is a single file, `ScopeCard.jsx`. It exports the component (default) and `DEFAULT_THEME`. There is no labels or options object: the few words the component writes itself are fixed (see [Fixed wording](#fixed-wording)).

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Theme](#theme)
5. [Examples](#examples)
6. [Embedding on a page](#embedding-on-a-page)
7. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **boundary** (default) | The page lists cases inside and outside the rule, and maybe an edge case | The rule centred on top with its condition ("holds when"), then an inside zone (✓) and an outside zone (✗) separated by a red vertical "boundary" divider, then an optional amber strip of edge cases. |
| **ledger** | The page pairs a case that works with a near-identical case that breaks | The rule on the left with its condition as a chip on the right, then a two-column table (Covered / Not covered) with paired cases on the same row, then an optional closing "The boundary" statement. |

There is no automatic choice: `variant` selects the layout. Any value other than `'ledger'` renders `boundary`.

On screens narrower than 720px the zones (boundary) and the columns (ledger) stack, and the divider becomes a horizontal red line.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'boundary' \| 'ledger'` | `'boundary'` | |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |

The theme is read from the prop only; `data.theme` is not read.

---

## Data shape

Both variants share the outer object:

```js
{
  header?:  { kicker?, title, lede? },     // omit header to hide it
  rule:     { name?, expr, condition?, sub? },
  inside:   Zone,                          // cases the rule handles
  outside:  Zone,                          // cases it does not
  edgeCases?: { badge?, items: [{ id, marker?, body }] },   // boundary only
  boundary?:  { badge?, body }                              // ledger only
}

Zone = { title?, note?, items: Item[] }
Item = { id, expr, why?, pairId? }
```

`header.lede`, `rule.expr`, `rule.condition`, `rule.sub`, item `expr` and `why`, edge-case `marker` and `body`, and `boundary.body` go through `processContent`, so `$…$`, `**bold**`, `@[code]@` and `[label](!/path)` links work there. `header.kicker`, `header.title`, `rule.name`, zone `title` and `note`, `edgeCases.badge` and `boundary.badge` are printed as plain text: no maths in them.

### `rule`

| Field | Variant | |
|---|---|---|
| `name` | boundary | Small uppercase label above the expression. Not shown in ledger. |
| `expr` | both | Required. The rule itself, in large type. |
| `condition` | both | The scope, e.g. `'$a \\ge 0$ and $b \\ge 0$'`. In boundary it sits in a pill after the words "holds when"; in ledger it is a chip on the right, without those words. |
| `sub` | ledger | One muted line under the rule. Not shown in boundary. |

### `inside`, `outside` (Zone)

| Field | Variant | |
|---|---|---|
| `title` | both | The zone or column heading. Defaults: boundary `'Inside scope'` / `'Outside scope'`; ledger `'Covered'` / `'Not covered'`. |
| `note` | boundary | Small uppercase caption at the right of the zone heading. Not shown in ledger. |
| `items` | both | The cases. Required in boundary (both zones); ledger copes with a missing zone. |

| Item field | |
|---|---|
| `id` | Required, unique within its zone. Used as the React key and, in ledger, to keep track of which outside items are already placed. |
| `expr` | The example. Outside expressions are drawn in the muted colour. |
| `why` | Why it is in or out. In boundary, `**bold**` in an outside `why` is drawn red (`stop`); in an inside `why`, in the text colour. |
| `pairId` | ledger: items with the same `pairId` in the two zones land on the same row. |

### Pairing (ledger)

Rows are built from the inside items, in order:

1. An inside item with a `pairId` takes the first outside item with the same `pairId`.
2. If there is none (or the inside item has no `pairId`), it takes the first outside item that has no `pairId` and is not placed yet.
3. If nothing is left, the outside cell is blank.

Outside items that were not placed get rows of their own, with a blank inside cell.

### `edgeCases` (boundary only)

| Field | |
|---|---|
| `badge` | Default `'Edge cases'`. Plain text. |
| `items[].id` | Required, unique. |
| `items[].marker` | One word or a short formula in amber before the line, e.g. `'$0/0$'`. |
| `items[].body` | The line. |

The strip is shown only when `items` has at least one entry. Ledger ignores `edgeCases`.

### `boundary` (ledger only)

| Field | |
|---|---|
| `badge` | Default `'The boundary'`. Plain text. |
| `body` | The closing statement. `**bold**` is drawn in the title colour. |

Boundary ignores this object.

### Fixed wording

These words are written by the component and cannot be changed from data:

| Text | Where |
|---|---|
| `holds when` | boundary: before `rule.condition` |
| `boundary` | boundary: the rotated label on the red divider |
| ✓ / ✗ | boundary: the marks in the inside and outside zone headings |

The divider carries a `data-keep-position` attribute so the download generator keeps its rotated label in place.

---

## Theme

`DEFAULT_THEME` is exported. Pass any subset of it as `theme`.

| Key | Default | Used for |
|---|---|---|
| `bg` | `#ffffff` | Not used by the current styles (the card background is `panel`). |
| `panel` | `#ffffff` | Card background, inside zone, ledger inside cells, the divider label's background |
| `panelSoft` | `#eef2ff` | Not used by the current styles. |
| `panelSofter` | `#f8faff` | Rule strip (boundary), outside zone, ledger "Covered" header, outside and blank cells, closing statement |
| `ink` | `#1f2937` | Text, rule expression, inside expressions |
| `title` | `#1e3a8a` | Title, zone headings, the closing statement's badge and bold text |
| `muted` | `#6b7280` | Lede, zone notes, `why` lines, outside expressions, "holds when", `rule.sub` |
| `line` | `#e5e7eb` | Card border, dividers, dashed lines between items, the divider's faded ends |
| `accent` | `#4f46e5` | Kicker, rule name, condition text, the ✓ mark, the "Covered" header and dot |
| `warm` | `#d97706` | Edge-case strip top border, its badge and markers |
| `indigoSoft` | `#e0e7ff` | Condition pill / chip background |
| `warmSoft` | `#fef3c7` | Edge-case strip background |
| `stop` | `#e11d48` | The ✗ mark, the divider and its label, bold in outside `why`, the "Not covered" header, dot and tags |
| `stopSoft` | `#fee2e2` | The "Not covered" header background |

The component uses Inter for text and JetBrains Mono for labels, with KaTeX for maths.

### On the site, always pass the site colours

The defaults above are indigo, which the site does not use. Every page that uses the card passes this theme:

```js
const scopeTheme = { title: '#06357A', accent: '#2563EB', indigoSoft: '#dbeafe', warm: '#B45309' }
```

---

## Examples

### boundary: `calculus/limits/evaluating` → Direct substitution

```js
const substitutionScope = {
  header: { kicker: 'Evaluating limits', title: 'Direct substitution', lede: 'Try it first; read the result before trusting it.' },
  rule: { name: 'Direct substitution', expr: '$\\lim_{x \\to a} f(x) = f(a)$', condition: '$f(a)$ is a finite number with no division by zero: $f$ continuous at $a$' },
  inside: { title: 'Substitution gives the limit', items: [
    { id: 'poly', expr: 'Polynomials', why: 'Always.' },
    { id: 'rat', expr: 'Rational functions', why: 'When the denominator is nonzero at $a$.' },
    // two more items on the page
  ] },
  outside: { title: 'Substitution fails', items: [
    { id: 'zero', expr: '$\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$ gives $\\dfrac{0}{0}$', why: 'Indeterminate: the limit is not zero, not undefined, not nonexistent, just not yet determined.' },
    { id: 'undef', expr: 'An undefined expression at $a$', why: 'Division by zero with a nonzero numerator, or a point outside the domain.' },
  ] },
  edgeCases: { badge: 'What 0/0 means', items: [
    { id: 'factor', marker: '$0/0$', body: 'Numerator and denominator share a common factor of $(x - 2)$; removing it reveals the limit.' },
  ] },
};
```

### ledger: `functions/inverse` → One-to-one, or no inverse

```js
const oneToOneScope = {
  header: { kicker: 'Inverse functions', title: 'One-to-one, or no inverse', lede: 'Different inputs must always produce different outputs.' },
  rule: { name: 'Inverse exists', expr: '$f$ has an inverse $\\iff$ $f$ is one-to-one', condition: 'if $f(a) = f(b)$, then $a = b$', sub: 'Algebraic test: assume $f(a) = f(b)$ and try to prove $a = b$.' },
  inside: { title: 'One-to-one', items: [
    { id: 'lin', pairId: 'test', expr: '$f(x) = 3x + 7$', why: 'If $3a + 7 = 3b + 7$, then $3a = 3b$, so $a = b$.' },
    { id: 'mono', pairId: 'shape', expr: 'Strictly monotonic functions', why: 'Only increasing or only decreasing, no flat stretches: they never produce the same output twice.' },
  ] },
  outside: { title: 'Not one-to-one', items: [
    { id: 'sq', pairId: 'test', expr: '$f(x) = x^2$', why: 'If $a^2 = b^2$, then $a = \\pm b$, which does not imply $a = b$.' },
    { id: 'turn', pairId: 'shape', expr: 'A function that turns around', why: 'Multiple inputs share an output; the reversal is ambiguous.' },
  ] },
  boundary: { badge: 'The boundary', body: 'Reversal needs each output to point to a unique input. The horizontal line test reads the same condition off the graph.' },
};
```

Here `rule.name` is set but not shown, because ledger does not draw it.

### Minimal

```js
{
  rule:    { expr: '$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$', condition: '$a \\ge 0$ and $b \\ge 0$' },
  inside:  { items: [{ id: 'i1', expr: '$\\sqrt{4 \\cdot 9} = 2 \\cdot 3$' }] },
  outside: { items: [{ id: 'o1', expr: '$\\sqrt{(-4)(-9)} \\ne \\sqrt{-4}\\sqrt{-9}$' }] }
}
```

No header is drawn, and the zone headings fall back to `'Inside scope'` / `'Outside scope'`.

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, after the section text, wrapped in `DiagramFrame`. Note that `DiagramFrame` lives in the file `DiagramsFrameV2.jsx`.

```jsx
import ScopeCard from '@/app/components/infographics/ScopeCard/ScopeCard'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
```

```jsx
<DiagramFrame
  key={'obj2-scope'}
  id="direct-substitution-scope"
  title="Where direct substitution works and where it stops"
  source="/calculus/limits/evaluating"
  before={`The card draws the line around direct substitution: the cases where plugging in $a$ gives the limit, and the one outcome that means more work.`}
  after={`A $0/0$ result is not an answer. It says the expression’s behaviour near $a$ is not yet determined.`}
>
  <ScopeCard data={substitutionScope} variant="boundary" theme={scopeTheme} />
</DiagramFrame>
```

On the site the data object lives in the page's `getStaticProps` and is passed in as a prop; `scopeTheme` is a const above the page component. The card is on 10 pages: 9 use `boundary`, 1 (`functions/inverse`) uses `ledger`.

---

## Authoring tips

- **Take the content from the page:** the condition is usually the sentence after "if and only if" or "only when"; inside items are the cases the page says are covered, outside items are the page's own counterexamples.
- **Which variant:**
  - boundary when the page gives inside cases, outside cases, and often an edge case or a fix;
  - ledger when the page pairs a passing example with a failing one.
- **Item counts:** 1–4 items per zone and 0–2 edge cases read well; for ledger, 2–4 pairs.
- **Fields each variant ignores:** `rule.name`, zone `note` and `edgeCases` are boundary only; `rule.sub` and `boundary` are ledger only.
- **Plain-text fields:** no `$…$` in the title, kicker, rule name, zone titles and notes, or badges.
- **Keep `why` short:** one line, the reason the case is in or out.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\lim'`, `'\\dfrac'`).
