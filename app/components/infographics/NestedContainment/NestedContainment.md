# NestedContainment

Levels that sit inside one another: each level is a strict subset of the level around it. Drawn as boxes inside boxes with the innermost level (the core) at the centre, and an optional chain line on top such as ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. A level that carries `details` folds open on click.

```jsx
import NestedContainment, { DEFAULT_THEME } from '@/app/components/infographics/NestedContainment/NestedContainment';

<NestedContainment data={data} />
```

- No `'use client'`: the folding details use native `<details>`.
- Class prefix: `nc-`
- Every text field accepts a **string**, which goes through `processContent` (`$math$`, `**bold**`, `@[code]@`, `[label](!/path)`), or a **ReactNode**.
- Inside a page, wrap it in `DiagramFrameV2` (downloads, anchor, attribution). The component has no export buttons of its own.
- Everything is drawn with normal (in-flow) elements, so the PNG/PDF downloads match the page.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | required | See [Data](#data) |
| `theme` | object | `DEFAULT_THEME` | Partial, merged over the defaults |

---

## Data

```js
{
  prefaceLabel?, prefaceTitle?, preface?,          // block above
  conclusionLabel?, conclusionTitle?, conclusion?, // block below
  levels: [ Level, ... ],      // INNERMOST FIRST: ℕ, ℤ, ℚ, ℝ, ℂ
  chain?: false | string,      // default: built from the symbols; false hides it; a string replaces it
  chainSymbol?: string,        // default '⊂'
  colors?: { ...theme keys },  // per-instance theme override
  font?: string,               // CSS font-family for the whole diagram
}
```

### Preface and conclusion

The same neutral bordered blocks as Hierarchy and TopDownTree: label on the top border line, bold title, text (an array gives paragraphs). Each part is optional; the block is skipped when all three are missing.

### `Level`

| Field | Type | Shown as |
|---|---|---|
| `id` | string | React key |
| `symbol` | string | Large math symbol on the left, and the level's entry in the chain line (e.g. `$\\mathbb{N}$`) |
| `name` | string | Bold name; may be a link |
| `adds` | string | Highlighted (amber) word after "adds": what this level adds to the one inside it |
| `addsLabel` | string | Replaces the word "adds" (e.g. `'requires'`) |
| `note` | string | Plain text after the highlighted word, separated by a dot |
| `example` | string | Small mono examples on the right |
| `details` | string \| string[] | **Optional.** When present the level's header folds: a `+` appears after the name and clicking shows the details |
| `open` | boolean | Opens the details on load |
| `color` | CSS colour | Fill of this level's box |
| `borderColor` | CSS colour | Border of this level's box |
| `textColor` | CSS colour | Symbol and name colour |
| `bodyTextColor` | CSS colour | Text colour inside the box |
| `font` | CSS font-family | Font of this level's box |

All fields except `symbol` are optional.

---

## Colours and font

Layers, each overriding the one before: `DEFAULT_THEME` → `theme` prop → `data.colors` / `data.font` → per-level `color`, `borderColor`, `textColor`, `bodyTextColor`, `font`.

Default fills alternate from the outermost box inward (`fillA`, `fillB`, …); the innermost box uses `coreFill` with a `coreBorder`.

```js
export const DEFAULT_THEME = {
  bg: '#ffffff', ink: '#0f172a', muted: '#64748b', title: '#06357A',
  border: '#9bb3ee', fillA: '#f5f8ff', fillB: '#ffffff',
  coreFill: '#e8eefc', coreBorder: '#2563EB',
  highlight: '#B45309', link: '#2563EB',
  font: "'Inter', system-ui, -apple-system, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
  math: "'Cambria Math', 'STIX Two Math', 'Times New Roman', serif",
};
```

---

## Layout

- 3 to 6 levels read well; each level indents the next by about 16px.
- Under 640px the examples drop under the name.

---

## Example

```js
const data = {
  prefaceLabel: 'Before you read',
  prefaceTitle: 'Each system sits inside the next',
  preface: 'Every natural number is an integer, every integer is rational, and so on outward.',
  levels: [
    { id: 'n', symbol: '$\\mathbb{N}$', name: 'Natural', note: 'counting numbers; closed under $+$ and $\\times$', example: '1, 2, 3, …' },
    { id: 'z', symbol: '$\\mathbb{Z}$', name: 'Integer', adds: 'negatives', note: 'closed under subtraction', example: '−2, −1, 0, 1' },
    { id: 'q', symbol: '$\\mathbb{Q}$', name: 'Rational', adds: 'fractions', note: 'closed under division by non-zero', example: '1/2, −3/4' },
    { id: 'r', symbol: '$\\mathbb{R}$', name: 'Real', adds: 'irrationals', note: 'fills every gap on the line', example: '√2, π, e',
      details: 'The rationals leave gaps: no rational number squares to 2.' },
    { id: 'c', symbol: '$\\mathbb{C}$', name: 'Complex', adds: '$i$', note: 'every polynomial has a root', example: '3 + 2i, i' },
  ],
  conclusionLabel: 'Takeaway',
  conclusionTitle: 'Nothing is lost going outward',
  conclusion: 'Each larger system keeps every number of the smaller one and adds something the smaller one lacked.',
};
```
