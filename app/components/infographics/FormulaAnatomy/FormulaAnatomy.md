# FormulaAnatomy

One formula, drawn large, taken apart. Each part gets three things:
- a bracket in the formula;
- a numbered label above or below, joined to the bracket by a short line;
- a note card under the formula.

Hovering a part, a label or a card highlights that part everywhere and dims the rest. Parts with a `tip` also show a one-line tooltip.

```jsx
import FormulaAnatomy from '@/app/components/infographics/FormulaAnatomy/FormulaAnatomy';

<FormulaAnatomy data={quadraticFormulaAnatomy} />
```

The component file's header comment is the full reference. Placement rules are in `session-docs/methodology/infographics/types/formula-anatomy/methodology.md`.

---

## Variants

| `variant` | Layout |
|---|---|
| `'annotated'` *(default)* | Formula on a dotted stage, with labels joined to bracketed parts and note cards below. `'poster'` is an alias. |
| `'legend'` | Formula in a plain band with numbered badges, and the cards in two columns under "Legend". |

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required; see below. |
| `variant` | `'annotated' \| 'legend'` | `'annotated'` | |
| `theme` | object | — | A partial theme merged over the exported `DEFAULT_THEME` (site navy and blue). Usually not needed. |

## Data shape

```js
{
  header?: { kicker?, title, lede? },
  formula: FormulaNode[],
  parts:   PartDef[],
  blocks?: BlockStyle,        // card styling, merged over DEFAULT_BLOCKS
}
```

### Formula building blocks (`FormulaNode`)

| kind | Fields | Use |
|---|---|---|
| `var` | `text` | an italic letter: `{ kind: 'var', text: 'A' }` |
| `op` | `text`, `big?`, `tight?` | an operator or numeral: `P(`, `=`, `∩`, `±`. `big` makes a tall bracket; `tight` removes side spacing. |
| `sup` | `children` | a superscript |
| `sub` | `children` | a subscript, e.g. log_b |
| `frac` | `num`, `den` | a fraction; a nested fraction shrinks |
| `rad` | `children` | a square root with its bar |
| `part` | `id`, `children` | a highlighted piece; `id` matches a `parts[]` entry |

### Parts (`PartDef`)

| Field | |
|---|---|
| `id` | Matches a `part` node. |
| `color?` | Defaults to `PART_COLORS` in order: navy, blue, sky, slate, steel, deep sky. Blues only. |
| `chip` | A short symbol shown on the card. |
| `title` | A short name, used on the label and the card. |
| `tip?` | A one-line punchline, shown as the tooltip title. A part without a tip gets no tooltip. |
| `desc` | The card text: the explanation plus an "Example:" from the page. It must not repeat the tip. |
| `side?` | `'top'` (default) or `'bottom'`. Numerator parts go on top, denominator parts below. |
| `block?` | Overrides the card style for this part. |

## Rules that matter

- **Coverage:** every part of the formula gets a part, from 2 to 6 parts. Cards sit in one row for 2 or 3 parts, 2 × 2 for 4, 3 + 2 for 5 and 3 + 3 for 6.
- **Card text:** write it in Unicode (≠, ², ₂, ¹ᐟⁿ, a/b). KaTeX fractions, sub- and superscripts and `\neq` break in downloads. Single letters like `$A$` are fine.
- **Labels never cover lines:** a label is never placed across another label's line. The layout moves it out a tier instead.
- **Downloads:** every positioned piece carries `data-keep-position`, so the PNG/PDF generator keeps the overlay on the formula.
