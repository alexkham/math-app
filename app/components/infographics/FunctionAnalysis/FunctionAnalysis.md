# FunctionAnalysis

A compact infographic for analysing one function. A single `data` object drives the graph, the interval strips, the key-point tiles and the global facts, so you never define a value twice.

```jsx
import FunctionAnalysis from '@/app/components/infographics/FunctionAnalysis/FunctionAnalysis';

<FunctionAnalysis data={cubicData} />
```

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [How the pieces connect](#how-the-pieces-connect)
5. [Graph modes](#graph-modes)
6. [Theme](#theme)
7. [Full example](#full-example)
8. [Authoring tips](#authoring-tips)
9. [Migration from the previous version](#migration-from-the-previous-version)

---

## Variants

| `variant` | Layout | Use when |
|---|---|---|
| `'diagram'` *(default)* | The graph and its strips sit on top. Each numbered feature has a connector line that drops through the strips into its own tile. Global facts form a row at the bottom. | You want the standard infographic view. |
| `'split'` | The graph and strips sit on the left with numbered badges. Grouped property cards sit on the right. | The page column is wide and there are many properties. |
| `'annotated'` | Global facts form a row of cells on top. Key points appear as labelled pills drawn directly on the graph. | There are few key points and you want the most compact view. |
| `'plot'` | The graph and strips only, with numbered badges. | The properties are explained in the surrounding text. |
| `'table'` | Grouped property cards only, in two columns. | The graph appears elsewhere on the page. |
| `'full'` | Alias of `'diagram'`. | Kept so older pages keep working. |

For `'diagram'` only, `tilesSide` sets where the tiles sit:

```jsx
<FunctionAnalysis data={d} />                    // tiles below the strips (default)
<FunctionAnalysis data={d} tilesSide="above" />  // tiles above the graph, lines come down to the points
```

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'diagram' \| 'split' \| 'annotated' \| 'plot' \| 'table' \| 'full'` | `'diagram'` | |
| `tilesSide` | `'below' \| 'above'` | `'below'` | Used by `'diagram'` only. |
| `theme` | object | — | A partial theme, merged over the exported `DEFAULT_THEME`. |

---

## Data shape

```js
{
  header?:     { kicker?, title, formula? },
  quickStats?: [ { n, label } ],
  graph:       GraphData,
  features?:   Feature[],
  intervals?:  IntervalRow[],      // data mode only
  properties?: PropertyGroup[],
  sections?:   { keys?: { name? }, facts?: { name? } }
}
```

### `header`

| Field | Type | |
|---|---|---|
| `kicker` | string | A small uppercase label, e.g. `'Polynomial functions'`. |
| `title` | string | |
| `formula` | string \| ReactNode | Shown as a chip next to the title. |

### `quickStats`

These are small pills on the right side of the header.

```js
quickStats: [{ n: 3, label: 'zeros' }, { n: 2, label: 'extrema' }]
```

### `graph`: data mode

| Field | Type | Default | |
|---|---|---|---|
| `xRange` | `[number, number]` | — | Required. |
| `yRange` | `[number, number]` | — | Required. |
| `fn` | `(x) => number` | — | The component samples this. Use either `fn` or `points`. |
| `points` | `[[x, y], …]` | — | Samples you supply yourself. |
| `samples` | number | `500` | The number of samples taken from `fn`. |
| `xTicks` | number[] | integers in range | Labelled vertical gridlines. |
| `yTicks` | number[] | none | Labelled horizontal gridlines. |
| `asymptotes` | `[{ x } \| { y }]` | — | Drawn as dashed lines in the secondary (gold) colour. |
| `extraContent` | ReactNode | — | Raw SVG drawn in the component's own pixel coordinates (see [Authoring tips](#authoring-tips)). |

The curve breaks wherever the function is undefined or leaves the y-window. This means a pole never produces a false vertical line.

### `graph`: SVG mode

| Field | Type | Default | |
|---|---|---|---|
| `viewBox` | string | — | e.g. `'0 0 640 440'`. |
| `content` | ReactNode | — | The SVG you draw yourself. |
| `maxWidth` | number | `900` | A pixel cap on the width. |

### `features`

A feature is a notable spot on the graph. It gets one number but can have several points, such as three zeros that all share number 1.

| Field | Type | Default | |
|---|---|---|---|
| `id` | string | — | Required. Property rows refer to it through `featureId`. |
| `kind` | `'accent' \| 'warm'` | `'accent'` | `accent` is primary blue, `warm` is secondary gold. |
| `badge` | boolean | `true` | `false` draws dots only, with no number, tile or callout. |
| `dropLine` | boolean | `false` | Draws a dashed guide down through the strips in the `split`, `plot` and `annotated` variants. In `diagram`, every numbered feature drops a line regardless. |
| `points` | Point[] | — | Required. |
| `callout` | `{ at?, dx?, dy? }` | `{ at: 0, dx: 24, dy: -34 }` | `annotated` only: places the pill relative to `points[at]`. |

**Point**

| Field | Type | Default | |
|---|---|---|---|
| `x`, `y` | number | — | Maths coordinates in data mode; viewBox coordinates in SVG mode. |
| `dx`, `dy` | number | `-14`, `-14` | Badge offset in px (`split` and `plot`). |
| `r` | number | `4.5` | Dot radius. `0` hides the dot but keeps the point as an anchor, which is useful for an asymptote. |

### `intervals` (data mode only)

Each row is one strip, sharing the graph's x-axis exactly.

```js
{ label: 'Sign', spans: [ { from: null, to: -1, kind: 'pos', sign: '+' }, … ] }
```

| Span field | Type | |
|---|---|---|
| `from`, `to` | number \| null | `null` means the left or right edge of `xRange`. |
| `kind` | `'pos' \| 'neg' \| 'soft'` | `pos` is light blue, `neg` is slate grey, `soft` is a dashed outline (e.g. a domain row). |
| `text` | string | A short label, e.g. `'↗ increasing'`, `'∩ down'`. |
| `sign` | string | A large single glyph, e.g. `'+'`, `'−'`. |
| `arrow` | `'right' \| 'left'` | A small direction arrow inside the span. |

A label that doesn't fit inside its span is left out.

### `properties`

| Group field | Type | |
|---|---|---|
| `letter` | string | e.g. `'A'`. Shown in `split` and `table`. |
| `name` | string | |
| `note` | string | A right-aligned caption (`split` and `table`). |
| `rows` | Row[] | |

| Row field | Type | |
|---|---|---|
| `featureId` | string | Links the row to a feature. See below. |
| `label` | string | |
| `value` | string \| ReactNode | |
| `sub` | string | A second line under the value. |
| `tone` | `'accent' \| 'warm' \| 'na' \| 'serif'` | `warm` is gold text, `na` is muted italic (e.g. "none"). |

### `sections`

| Field | Default | |
|---|---|---|
| `keys.name` | `'Key points'` | The caption on the tile row in `diagram`. |
| `facts.name` | `'Global'` | The caption on the facts row in `diagram`. |

---

## How the pieces connect

- **Numbering:** features are numbered 1, 2, 3… in array order, skipping any with `badge: false`.
- **Rows with a `featureId` (linked):**
  - `diagram`: each becomes a key-point tile, connected to its point(s).
  - `annotated`: each becomes a callout pill on the graph.
  - `split` and `table`: each is a numbered row.
- **Rows without a `featureId` (unlinked):**
  - `diagram`: these form the Global row.
  - `annotated`: these form the cells on top.
  - `split` and `table`: these are rows with an empty badge.
- **Tile placement:** in `diagram`, each tile is placed under the average x of its feature's points. Tiles then spread out along the axis so they never overlap. A feature with several points is joined by a bracket before its connector runs to the tile.
- **Hover:** hovering a tile, row, callout or feature highlights that feature everywhere and dims the rest.

Feature order controls the numbers, while tile order follows the x position.

---

## Graph modes

The mode is inferred: if `graph.content` is present it's SVG mode, otherwise data mode.

| | Data mode | SVG mode |
|---|---|---|
| Who owns the scale | The component | Your SVG's `viewBox` |
| Strips | ✓ | ✗ (ignored) |
| Connectors and tiles | ✓ | ✓ |
| Badges and callouts | ✓ | ✓ |
| Asymptotes and ticks | ✓ | Draw them yourself |

You can use these class names inside `graph.content` or `extraContent` to match the component's look: `fa-axis`, `fa-grid`, `fa-curve`, `fa-dot`, `fa-dot-warm`, `fa-guide`, `fa-flabel`. In HTML text, `fa-var` gives italic variables and `fa-sup` gives superscripts.

---

## Theme

`DEFAULT_THEME` is exported. Pass any subset of it as `theme`.

| Key | Default | Used for |
|---|---|---|
| `bg`, `panel` | `#ffffff` | Card |
| `panelSoft` | `#eff6ff` | Formula chip, stat pills, group headers |
| `panelSofter` | `#f8fafc` | Strip band, facts row |
| `ink` | `#1e293b` | Body text |
| `title` | `#1e3a8a` | Titles, the bar on fact tiles |
| `muted` | `#64748b` | Labels |
| `line` | `#cbd5e1` | Borders |
| `lineSoft` | `#e2e8f0` | Row dividers |
| `accent` | `#2563eb` | Primary features |
| `warm` | `#ca8a04` | Secondary features, asymptotes |
| `warmInk` | `#a16207` | `tone: 'warm'` text |
| `curve` | `#1e3a8a` | The curve |
| `posBg` / `posBorder` / `posInk` | `#dbeafe` / `#93c5fd` / `#1d4ed8` | `pos` spans |
| `negBg` / `negBorder` / `negInk` | `#e2e8f0` / `#94a3b8` / `#1e293b` | `neg` spans |
| `softBg` / `softBorder` / `softInk` | `#f8fafc` / `#94a3b8` / `#475569` | `soft` spans |

The component uses three fonts: **Inter** for body text, **JetBrains Mono** for labels and **STIX Two Text** for values and the formula. The site needs to load all three.

---

## Full example

```js
const R3 = Math.sqrt(3);

export const cubicData = {
  header: {
    kicker: 'Polynomial functions',
    title: 'Anatomy of a cubic',
    formula: '$f(x) = x^3 - 3x$'
  },
  quickStats: [
    { n: 3, label: 'zeros' },
    { n: 2, label: 'extrema' },
    { n: 1, label: 'inflection' }
  ],
  graph: {
    xRange: [-2.5, 2.5],
    yRange: [-3.4, 3.4],
    fn: (x) => x ** 3 - 3 * x,
    xTicks: [-2, -1, 0, 1, 2],
    yTicks: [-2, 2]
  },
  features: [
    { id: 'zeros', dropLine: true,
      points: [{ x: -R3, y: 0 }, { x: 0, y: 0, dx: -13, dy: 14 }, { x: R3, y: 0 }],
      callout: { at: 0, dx: -150, dy: 46 } },
    { id: 'max', kind: 'warm', dropLine: true,
      points: [{ x: -1, y: 2, dx: 0, dy: -16 }],
      callout: { dx: -190, dy: -6 } },
    { id: 'min', kind: 'warm', dropLine: true,
      points: [{ x: 1, y: -2, dx: 0, dy: 16 }],
      callout: { dx: 40, dy: 6 } },
    { id: 'infl',
      points: [{ x: 0, y: 0, dx: 15, dy: -14 }],
      callout: { dx: 40, dy: -58 } }
  ],
  intervals: [
    { label: 'Sign', spans: [
      { from: null, to: -R3, kind: 'neg', sign: '−' },
      { from: -R3,  to: 0,   kind: 'pos', sign: '+' },
      { from: 0,    to: R3,  kind: 'neg', sign: '−' },
      { from: R3,   to: null, kind: 'pos', sign: '+' }
    ] },
    { label: 'Trend', spans: [
      { from: null, to: -1,  kind: 'pos', text: '↗ increasing' },
      { from: -1,   to: 1,   kind: 'neg', text: '↘ decreasing' },
      { from: 1,    to: null, kind: 'pos', text: '↗ increasing' }
    ] },
    { label: 'Concavity', spans: [
      { from: null, to: 0,   kind: 'neg', text: '∩ down' },
      { from: 0,    to: null, kind: 'pos', text: '∪ up' }
    ] }
  ],
  properties: [
    { letter: 'A', name: 'Key points', note: 'on the graph', rows: [
      { featureId: 'zeros', label: 'Zeros',      value: 'x = −√3, 0, √3' },
      { featureId: 'max',   label: 'Local max',  value: '(−1, 2)', tone: 'warm' },
      { featureId: 'min',   label: 'Local min',  value: '(1, −2)', tone: 'warm' },
      { featureId: 'infl',  label: 'Inflection', value: '(0, 0)' },
      {                     label: 'y-intercept', value: '(0, 0)' }
    ] },
    { letter: 'B', name: 'Global', note: 'whole function', rows: [
      { label: 'Domain',        value: 'ℝ' },
      { label: 'Range',         value: 'ℝ' },
      { label: 'Symmetry',      value: 'odd', sub: 'about the origin' },
      { label: 'End behaviour', value: 'x → ±∞ ⇒ f → ±∞' },
      { label: 'Asymptotes',    value: 'none', tone: 'na' }
    ] }
  ]
};
```

The same object works for every variant:

```jsx
<FunctionAnalysis data={cubicData} />
<FunctionAnalysis data={cubicData} variant="split" />
<FunctionAnalysis data={cubicData} variant="annotated" />
```

### Rational function: asymptote as a feature

```js
graph: {
  xRange: [-4, 7], yRange: [-4, 6],
  fn: (x) => (x + 1) / (x - 2),
  asymptotes: [{ x: 2 }, { y: 1 }]
},
features: [
  { id: 'zero', points: [{ x: -1, y: 0 }] },
  { id: 'yint', points: [{ x: 0, y: -0.5 }] },
  { id: 'va', kind: 'warm', points: [{ x: 2, y: 4.8, r: 0 }] }   // anchor only, no dot
],
intervals: [
  { label: 'Domain', spans: [
    { from: null, to: 2, kind: 'soft', text: 'defined' },
    { from: 2, to: null, kind: 'soft', text: 'defined' }
  ] }
]
```

---

## Authoring tips

- **Strip labels:** keep them to one short word (Sign, Trend, Concavity, Domain), because the label column is narrow.
- **Tile values:** keep them to about 18 characters. Tiles are at most 172 units wide, and longer values are cut off with an ellipsis.
- **Callouts:** positions are not automatic. Set `callout.dx` and `callout.dy` for each feature so the pills sit in empty space.
- **Text drawn inside the SVG** (strip labels and callout pills) is plain text: `$` and `**` are removed. Use Unicode for maths there (`√`, `−`, `∞`, `ℝ`, `∖`). HTML fields (header, tiles, facts, rows) go through `processContent`, so `$…$` works in them.
- **`extraContent` coordinates:** these are in the variant's own pixel space, not maths units:

  | Variant | Width | Left margin | Graph top | Graph height |
  |---|---|---|---|---|
  | `diagram` | 1050 | 96 | 10 (44 with `tilesSide="above"`) | 210 |
  | `split` | 600 | 84 | 10 | 250 |
  | `annotated`, `plot` | 1050 | 96 | 10 | 250 |

  Prefer `graph.asymptotes` and features over hand-drawn `extraContent` where you can, because those follow the scale automatically.
- **Tile count:** about 6 key-point tiles is the practical maximum in `diagram`. With more, use `split`.

---

## Migration from the previous version

All existing field names still work. The changes:

| Area | Before | Now |
|---|---|---|
| Default variant | `'full'` | `'diagram'` (`'full'` still accepted) |
| Layout | Section headers, legend, two big sections | Slim header; strips carry their own labels; no legend |
| `sections.plot`, `sections.props` | Section captions | Ignored |
| Colours | Indigo and amber | Blue and gold (see [Theme](#theme)) |
| Theme keys `indigoSoft`, `warmSoft` | Strip fills | Removed; use `pos*`, `neg*` and `soft*` |
| Pixel space (`extraContent`) | 900 wide, left margin 150 | See the table under [Authoring tips](#authoring-tips) |
| Interaction | None | Hovering highlights a feature everywhere |

New optional fields: `graph.asymptotes`, `feature.callout`, `sections.keys.name`, `sections.facts.name`, `point.r: 0`, and the `tilesSide` prop.
