# TopDownTree

One parent at the top, its child siblings in a row below it, joined by connector lines. Each child is a card: a head (name, symbol) and a list of items. An item that carries `details` folds open on click.

```jsx
import TopDownTree, { DEFAULT_THEME } from '@/app/components/infographics/TopDownTree/TopDownTree';

<TopDownTree data={data} />
```

- No `'use client'`: the folding items use native `<details>`, so no state is needed.
- Class prefix: `tdt-`
- Every text field accepts a **string**, which goes through `processContent` (`$math$`, `**bold**`, `@[code]@`, `[label](!/path)`), or a **ReactNode**, which passes through untouched.
- Inside a page, wrap it in `DiagramFrameV2` (downloads, anchor, attribution). The component has no export buttons of its own.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | required | See [Data](#data) |
| `theme` | object | `DEFAULT_THEME` | Partial, merged over the defaults. See [Colours and font](#colours-and-font) |

---

## Data

```js
{
  prefaceLabel?, prefaceTitle?, preface?,          // block above the tree
  conclusionLabel?, conclusionTitle?, conclusion?, // block below the tree
  root: { name, sub?, color?, textColor?, font? },
  children: [ Card, ... ],                          // the siblings, left to right
  legend?: [ { label, tone?, color?, border? } ],   // tone: 'warn' for the flagged swatch
  colors?: { ...theme keys },                       // per-instance theme override
  font?: string,                                    // CSS font-family for the whole diagram
}
```

### Preface and conclusion

The same neutral bordered blocks as Hierarchy: the label sits on the top border line, then a bold title, then the text (`preface` / `conclusion` may be an array of paragraphs). Each of label, title and body is optional, and the block is skipped when all three are missing.

### `root`

| Field | Shown as |
|---|---|
| `name` | Bold line in the root block |
| `sub` | Small mono line under it (e.g. `5 families`) |
| `color` · `textColor` · `font` | Overrides for this block |

### `Card` (each child)

| Field | Type | Shown as |
|---|---|---|
| `id` | string | React key |
| `name` | string | Bold head line; may be a link `[Rational](!/algebra/equations/rational)` |
| `symbol` | string | Math line under the name, e.g. `$P(x)/Q(x) = 0$` |
| `sub` | string | Small line under the symbol |
| `items` | `Item[]` | The rows of the card |
| `warn` | string | Amber strip at the bottom of the card (a restriction, a caveat) |
| `flag` | boolean | Amber border and head |
| `color` | CSS colour | Head fill |
| `textColor` | CSS colour | Head text (name, symbol, sub) |
| `borderColor` | CSS colour | Card border |
| `bodyColor` · `bodyTextColor` | CSS colour | Fill and text of the item area |
| `font` | CSS font-family | Font of the whole card |

### `Item` (a row inside a card)

| Field | Type | Shown as |
|---|---|---|
| `label` | string | Small mono key on top (e.g. `Quadratic`) |
| `text` | string | The row's text |
| `details` | string \| string[] | **Optional.** When present the row folds: a chevron appears, clicking opens the details below it. An array renders one paragraph per item |
| `open` | boolean | Opens the details on load |
| `color` · `textColor` · `font` | | Overrides for this row |

All fields except `root.name` and each card's `name` are optional; a missing field renders nothing.

---

## Colours and font

Colours resolve in layers, each overriding the one before:

1. `DEFAULT_THEME` (site palette: navy root, light-blue heads, amber warnings; no indigo)
2. the `theme` prop
3. `data.colors` (same keys as the theme) and `data.font`
4. per element: `root.color/textColor/font`, a card's `color/textColor/borderColor/bodyColor/bodyTextColor/font`, an item's `color/textColor/font`

```js
export const DEFAULT_THEME = {
  bg: '#ffffff', ink: '#0f172a', muted: '#64748b', line: '#e2e8f0',
  connector: '#9bb3ee',
  rootBg: '#06357A', rootText: '#ffffff', rootSub: '#bfd0f5',
  cardBorder: '#9bb3ee', headBg: '#e8eefc', headText: '#06357A', symbol: '#2563EB', link: '#2563EB',
  flagBorder: '#B45309', flagHead: '#fffbeb',
  warnBg: '#fffbeb', warnText: '#92400e', warnLine: '#f2d48a',
  font: "'Inter', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};
```

---

## Layout

- The children share the row equally; with many children the tree scrolls sideways (about 190px per child minimum).
- Under 720px the children stack vertically under the root.
- Cards in one row stretch to the same height.

---

## Example

```js
const data = {
  prefaceLabel: 'Before you read',
  prefaceTitle: 'Five families of equations',
  preface: 'Each family has its own method, and three of them carry a restriction on the domain.',
  root: { name: 'Equations', sub: '5 families' },
  children: [
    { id: 'poly', name: 'Polynomial', symbol: '$P(x) = 0$', items: [
      { label: 'Linear', text: 'exactly one root' },
      { label: 'Quadratic', text: 'the discriminant decides 0, 1 or 2',
        details: 'Two real roots when $\\Delta > 0$, one when $\\Delta = 0$, none when $\\Delta < 0$.' },
    ] },
    { id: 'rat', name: 'Rational', symbol: '$P(x)/Q(x) = 0$', flag: true, warn: '$Q(x) \\neq 0$', items: [
      { label: 'Method', text: 'solve $P(x) = 0$' },
      { label: 'Then', text: 'drop the roots of $Q$' },
    ] },
  ],
  legend: [{ label: 'family' }, { label: 'domain restriction applies', tone: 'warn' }],
  conclusionLabel: 'Takeaway',
  conclusionTitle: 'Check the domain last',
  conclusion: 'Rational and radical equations can produce candidates that fail the original equation.',
};
```
