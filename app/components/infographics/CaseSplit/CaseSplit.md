# CaseSplit

One problem split into 2–4 cases by a condition. Three layouts share one data shape.

```jsx
import CaseSplit, { DEFAULT_THEME } from './CaseSplit';

<CaseSplit data={data} variant="poster" proseStyle="cards" theme={{ accent: '#1d4ed8' }} />
```

- No `'use client'`. The expandable panels use native `<details>`, so no state is needed.
- Class prefix: `cs-`
- Every text field accepts a **string**, which goes through `processContent` (`$math$`, `**bold**`, `@[code]@`, `[label](!/path)`), or a **ReactNode**, which passes through untouched.
- Import path: `@/app/utils/contentProcessor`

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | required | See [Data](#data) |
| `variant` | `'poster'` \| `'tree'` \| `'fork'` | `'poster'` | Legacy aliases: `'branch'` maps to `tree`, `'parallel'` maps to `fork` |
| `theme` | object | `DEFAULT_THEME` | Partial, merged over the defaults. See [Theme](#theme) |
| `proseStyle` | `'cards'` \| `'gradient'` \| `'tabs'` | `'cards'` | Look of the preface and conclusion blocks. See [Preface and conclusion](#preface-and-conclusion) |

### Variants

| Variant | Layout | Best for |
|---|---|---|
| `poster` | Parent banner across the top, tiles below with a large badge as the hero | Glanceable summaries; the default |
| `tree` | Parent node, connectors fanning down into cards with coloured condition headers | Showing the split explicitly as a branching |
| `fork` | Parent on the left, a bracket into horizontal rows | Compact layouts, 3–4 cases, short parent formula |

On screens under 760px, all variants stack the cases vertically.

---

## Data

```js
{
  header?:          { kicker?, title, lede? },
  preface?:         string | string[],   // prose above the diagram
  prefaceTitle?:    string,              // label on the preface
  conclusion?:      string | string[],   // prose below the cases
  conclusionTitle?: string,              // label on the conclusion
  parent:        { kicker?, formula, splitBy?, desc?, colors? },
  cases:         Case[],          // any count; 2..5 recommended
  colors?:          { ...theme keys },                       // see Colours
  prefaceColors?:   { bg, border, accent, label, text },
  conclusionColors?: { bg, border, accent, icon, label, text },
  detailsLabel?: string           // toggle text for all panels, default 'More'
}
```

### `header` (optional)

A plain heading block above the diagram.

| Field | Shown as |
|---|---|
| `kicker` | Small mono uppercase line above the title |
| `title` | Navy heading |
| `lede` | Muted line under the title |

### `preface` / `conclusion` (optional)

| Field | Type | |
|---|---|---|
| `preface` | string \| string[] | Prose block between the header and the diagram. An array renders one paragraph per item |
| `prefaceTitle` | string | Label on the preface block |
| `conclusion` | string \| string[] | Prose block after the cases |
| `conclusionTitle` | string | Label on the conclusion block |

Every part is independently optional:

| Passed | Renders |
|---|---|
| title + body | Label and prose |
| title only | Label alone |
| body only | Prose alone, with no label and no default text |
| neither | Nothing |

In `tabs`, a title-only block renders as a single navy tag.

### `parent`

| Field | Required | Shown as |
|---|---|---|
| `formula` | yes | The problem being split, in the main parent block |
| `kicker` | | Small mono label above the formula |
| `splitBy` | | A "split by **…**" pill |
| `desc` | | A short line under the formula |
| `colors` | | `{ bg, text }`; overrides the parent block colours for this instance |

In `poster`, `colors.bg` also colours the notches pointing into the tiles.

### `Case`

| Field | Type | Shown as |
|---|---|---|
| `id` | string | React key (required) |
| `condition` | string \| node | The case condition (required). Shown in the coloured header in `tree` and `fork`, and under the badge in `poster` |
| `number` | string | "Case N" label. Defaults to the 1-based index |
| `color` | see [Case colours](#case-colours) | Defaults to `'a'` |
| `count.n` | string \| number | Badge. One or two characters (`+`, `−`, `0`, `2`) render as a circle; longer text (`Two`, `None`) renders as a pill |
| `count.label` | string | Small muted text under the headline (e.g. `solutions`) |
| `headline` | string | The verdict line, bold in the case colour |
| `desc` | string | One- or two-line meaning |
| `formula` | string \| node | Value line (e.g. `$x = \pm k$`) |
| `na` | boolean | Greys out `formula` as not applicable |
| `example` | string \| node | Example strip, with an "e.g." label |
| `picture` | string | Second line in the example strip |
| `details` | string \| string[] \| node | Expandable panel; an array renders one paragraph per item |
| `defaultOpen` | boolean | Opens the panel on load |

All fields except `id` and `condition` are optional, and a missing field renders nothing. In `tree`, the verdict row is hidden when `count`, `headline` and `count.label` are all absent.

---

## Colours

Every colour can be set from the data. Colours resolve in layers, each overriding the one before:

1. **`DEFAULT_THEME`**
2. **The `theme` prop**: component-wide overrides
3. **`data.colors`**: the same keys as the theme, set per instance
4. **Per-element data**: `parent.colors`, `case.color`, `prefaceColors` and `conclusionColors`

### Theme keys (usable in `theme` and in `data.colors`)

```js
export const DEFAULT_THEME = {
  // card + text
  bg:         '#ffffff',   // card background
  ink:        '#0f172a',   // body text
  title:      '#1e3a8a',   // headings, split-by emphasis
  muted:      '#64748b',   // secondary text
  line:       '#e2e8f0',   // card border
  trunk:      '#94a3b8',   // neutral connector lines
  // parent block
  parentBg:   '#1e3a8a',
  parentText: '#ffffff',
  // case presets 'a'..'f' (also the automatic order)
  accent:     '#2563eb',   // 'a'
  warm:       '#ea580c',   // 'b'
  neutral:    '#64748b',   // 'c'
  teal:       '#0d9488',   // 'd'
  violet:     '#7c3aed',   // 'e'
  rose:       '#e11d48',   // 'f'
  // preface (all styles) and tabs conclusion
  proseBg:     '#eff6ff',
  proseBorder: '#bfdbfe',
  proseAccent: '#2563eb',
  proseLabel:  '#1e3a8a',
  proseText:   '#1e293b',
  // cards conclusion
  conclBg:     '#fffbeb',
  conclBorder: '#fde68a',
  conclAccent: '#d97706',
  conclLabel:  '#b45309',
  conclText:   '#1e293b',
  // gradient style
  gradPreface:       'linear-gradient(135deg, #eff6ff 0%, #eef2ff 55%, #f5f3ff 100%)',
  gradPrefaceBorder: '#c7d2fe',
  gradConclusion:    'linear-gradient(120deg, #1e3a8a 0%, #1d4ed8 100%)',
  gradConclLabel:    '#bfdbfe',
  gradConclText:     '#ffffff',
};
```

### `parent.colors`

`{ bg, text }` overrides the parent block for this instance. In `poster`, `bg` also colours the notches.

### Case colours

| `case.color` | Result |
|---|---|
| omitted | Automatic by position: `a`, `b`, `c`, `d`, `e`, `f`, then repeating |
| `'a'`…`'f'` | Preset; reads `accent`, `warm`, `neutral`, `teal`, `violet` or `rose` from the resolved theme |
| any CSS colour | Used as the main colour; the tint is derived from it |
| `{ main, tint?, text?, onMain? }` | Full control. `main` may also be a preset letter |

| Key | Used for | Default |
|---|---|---|
| `main` | Header band, badge, connector, verdict text, labels | Automatic or preset |
| `tint` | Soft fills: tile background, verdict row, example strip | `main` mixed with 7% white |
| `text` | Body text inside the case | `ink` |
| `onMain` | Text on the `main` fill | `#ffffff` |

### `prefaceColors`

`{ bg, border, accent, label, text }`. Any key you omit falls back to the style default.

| Key | cards | gradient | tabs |
|---|---|---|---|
| `bg` | Fill | Fill (a colour or a `linear-gradient(...)` string) | Fill |
| `border` | Border | Border and title-pill border | Border |
| `accent` | Left bar | Info icon | — |
| `label` | Title text | Title text | Tab fill |
| `text` | Body text | Body text | Body text |

### `conclusionColors`

`{ bg, border, accent, icon, label, text }`. Any key you omit falls back to the style default.

| Key | cards | gradient | tabs |
|---|---|---|---|
| `bg` | Fill | Band fill (a colour or a gradient) | Fill |
| `border` | Border | Border | Border |
| `accent` | Left bar and badge fill | Badge fill | — |
| `icon` | Check mark | Check mark | — |
| `label` | Title text | Title text | Tab fill |
| `text` | Body text | Body text | Body text |

Style defaults:

- **cards:** the `concl*` keys
- **gradient:** `gradConclusion`, with a white badge and white text
- **tabs:** the `prose*` keys, the same as the preface

### Example

```js
const data = {
  colors: { bg: '#fdfcf7', ink: '#3b2f1e', title: '#7c2d12', parentBg: '#7c2d12', accent: '#b45309' },
  prefaceColors:    { bg: '#fef3c7', border: '#fcd34d', accent: '#b45309', label: '#7c2d12' },
  conclusionColors: { bg: '#ecfeff', border: '#67e8f9', accent: '#0e7490', label: '#155e75', text: '#164e63' },
  parent: { formula: '$|x| = k$', splitBy: 'value of $k$' },
  cases: [ /* any count; colours assigned automatically unless set */ ],
};
```

---

## Preface and conclusion

`proseStyle` sets the look of both blocks. It works the same in all three variants.

| `proseStyle` | Preface | Conclusion |
|---|---|---|
| `cards` (default) | Light blue card with a royal left bar; the title is a small navy mono label with an info icon | Amber card with an amber left bar, a check badge and an amber label |
| `gradient` | Soft blue-to-violet gradient card; the title is a white pill sitting on the top border | Solid navy-to-royal band with white text and a white check badge; the title is a light-blue label |
| `tabs` | Light blue card; the title is a navy folder tab on the top-left corner | Same as the preface: the same light-blue background and a navy tab |

The colours come from the theme (see [Theme](#theme)):

- The `prose*` keys colour the preface in all styles, and the tabs conclusion.
- The `concl*` keys colour the cards conclusion.
- The `gradient` style uses fixed gradients, plus `theme.title` for the band.

## Expandable panels

- A case with `details` gets a toggle at the bottom of its card. In `fork`, the toggle sits below the row and spans its full width.
- Set the toggle text with `data.detailsLabel` (shared by all cases).
- `defaultOpen: true` opens a panel on load.
- Panels are independent, so opening one doesn't close the others.

---

## Examples

### Minimal

```js
const data = {
  parent: { formula: '$\\operatorname{Cov}(X,Y)$', splitBy: 'sign' },
  cases: [
    { id: 'pos',  condition: '$\\operatorname{Cov} > 0$', count: { n: '+' }, headline: 'Move together' },
    { id: 'neg',  condition: '$\\operatorname{Cov} < 0$', count: { n: '−' }, headline: 'Move opposite', color: 'b' },
    { id: 'zero', condition: '$\\operatorname{Cov} = 0$', count: { n: '0' }, headline: 'No linear trend', color: 'c' },
  ],
};

<CaseSplit data={data} />
```

### Full

```js
const data = {
  header: {
    kicker: 'Probability · Covariance',
    title:  'What the sign of the covariance says',
  },
  parent: {
    kicker:  'Covariance',
    formula: '$\\operatorname{Cov}(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)]$',
    splitBy: 'sign',
  },
  detailsLabel: 'Why',
  cases: [
    {
      id: 'pos',
      condition: '$\\operatorname{Cov} > 0$',
      color: 'a',
      count: { n: '+' },
      headline: 'Move together',
      desc: 'High $X$ comes with high $Y$, low with low.',
      example: 'height & weight',
      details: [
        'Most products $(X-\\mu_X)(Y-\\mu_Y)$ are positive.',
        'Magnitude depends on units, so use correlation to compare strength.',
      ],
    },
    {
      id: 'neg',
      condition: '$\\operatorname{Cov} < 0$',
      color: 'b',
      count: { n: '−' },
      headline: 'Move opposite',
      desc: 'High $X$ comes with low $Y$.',
      example: 'speed & trip time',
      details: 'Most products are negative.',
      defaultOpen: true,
    },
    {
      id: 'zero',
      condition: '$\\operatorname{Cov} = 0$',
      color: { main: '#0d9488', text: '#134e4a' },
      count: { n: '0' },
      headline: 'No linear trend',
      desc: 'Products cancel out. **Not** the same as independent.',
      example: '$Y = X^2$, $X$ symmetric',
    },
  ],
};

<CaseSplit data={data} variant="tree" theme={{ parentBg: '#172554' }} />
```

### With preface and conclusion

```js
const data = {
  header: { kicker: 'Probability · Covariance', title: 'What the sign of the covariance says' },
  prefaceTitle: 'Overview',
  preface: 'Covariance averages the products of paired deviations. Its **sign** says whether $X$ and $Y$ sit on the same side of their means.',
  conclusionTitle: 'Takeaway',
  conclusion: [
    'Read the sign, not the size.',
    'To compare strength, use the correlation $\\rho$, which lies in $[-1, 1]$.',
  ],
  parent: { formula: '$\\operatorname{Cov}(X,Y)$', splitBy: 'sign' },
  cases: [ /* ... */ ],
};

<CaseSplit data={data} variant="tree" proseStyle="tabs" />
```

### Legacy data (unchanged from the old component)

```js
const data = {
  parent: {
    kicker: 'Absolute value',
    formula: '$|x| = k$',
    splitBy: 'sign of $k$',
    desc: 'The number of solutions depends on $k$.',
  },
  cases: [
    { id: 'a', number: '01', condition: '$k>0$', color: 'a',
      count: { n: 'Two', label: 'solutions' }, headline: 'Two mirror points',
      formula: '$x=\\pm k$', example: '$|x|=5 \\Rightarrow \\pm 5$', picture: 'two points' },
    { id: 'b', number: '02', condition: '$k=0$', color: 'b',
      count: { n: 'One', label: 'solution' }, headline: 'Single point', formula: '$x=0$' },
    { id: 'c', number: '03', condition: '$k<0$', color: 'c',
      count: { n: 'None', label: 'solutions' }, headline: 'Impossible',
      formula: 'not applicable', na: true },
  ],
};

<CaseSplit data={data} variant="parallel" />   // renders as fork
```

---

## Migration from the previous CaseSplit

- **v4:** every colour can be set from the data (`data.colors`, `prefaceColors`, `conclusionColors`); presets `'d'`–`'f'` were added; cases without a colour get one automatically by position.
- **v3:** title and body are independently optional; a title-only block now renders.
- **v2 adds** `preface`, `prefaceTitle`, `conclusion`, `conclusionTitle`, the `proseStyle` prop and the `prose*`/`concl*` theme keys. Everything else is unchanged from v1.


- **Data**: no changes; every old field is still read.
- **Default variant**: changed from `branch` to `poster`. Pages that relied on the old default without passing `variant` need `variant="tree"` to keep a branching layout.
- **Theme**: `panel`, `panelSoft` and `panelSofter` are no longer used and are ignored if passed. The new keys are `trunk`, `parentBg`, `parentText` and `neutral`. Preset `'c'` now reads `theme.neutral` instead of `theme.muted`.
- **Layout**: `parent.desc` now shows in all variants (previously only `parallel`). `picture` now shows in all variants (previously only `branch`).

## Notes

- `fork` is designed for a short parent formula, such as `$\\operatorname{Cov}(X,Y)$`. A long formula widens the parent column to a maximum of 320px and squeezes the rows. Use `poster` or `tree` for long formulas.
- Keep `desc` to one or two lines; anything longer belongs in `details`.
- Any number of cases works. With 5 or more, `poster` and `tree` columns get narrow (about 160px at 900px wide), so keep the text short; `fork` scales best.
