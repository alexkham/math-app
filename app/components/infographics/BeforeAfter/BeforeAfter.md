# BeforeAfter

A transformation infographic. It shows one expression before and after an operation, either as two panels (a **diptych**) or as a step-by-step **progression**. Any box can carry an optional expandable part, and all the text the component writes itself comes from data, with defaults.

```jsx
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter';

<BeforeAfter data={squareData} />
```

---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Expandable parts](#expandable-parts)
5. [Labels](#labels)
6. [Theme](#theme)
7. [Examples](#examples)
8. [Embedding on a page](#embedding-on-a-page)
9. [Authoring tips](#authoring-tips)
10. [Changes from the previous version](#changes-from-the-previous-version)

---

## Variants

| `variant` | Layout | Use when |
|---|---|---|
| `'diptych'` *(default)* | A Before panel, an arrow labelled with the operation, an After panel, and optional notes underneath. | One move, or a form-to-form conversion. |
| `'progression'` | Numbered steps on a timeline, with the named move between each pair of steps. | The rewrite takes 3–5 named steps. |

Either data shape works with either variant:

| Data supplied | `diptych` shows | `progression` shows |
|---|---|---|
| `before` + `after` (+ `operation`) | the two panels | a two-step sequence, with `operation` as the move |
| `steps` | the first and last step as the panels, with the first move as the operation | every step |

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'diptych' \| 'progression'` | `'diptych'` | |
| `expand` | `'inline' \| 'drawer'` | `'inline'` | How expandable parts open. See [Expandable parts](#expandable-parts). |
| `theme` | object | — | A partial theme, merged over the exported `DEFAULT_THEME`. |

---

## Data shape

```js
{
  header?:    { kicker?, title, lede? },

  before?:    Panel,        // diptych input
  after?:     Panel,
  operation?: Operation,
  notes?:     Note[],

  steps?:     Step[],       // progression input

  labels?:    Labels        // wording the component writes itself
}
```

### `header`

| Field | Type | |
|---|---|---|
| `kicker` | string | A small uppercase label above the title. |
| `title` | string | Required. |
| `lede` | string | One line under the title. |

### `Panel` (`before`, `after`)

| Field | Type | Default | |
|---|---|---|---|
| `stamp` | string | — | The corner chip, e.g. `'Before'`. |
| `form` | string | — | The name of this form, e.g. `'Standard form'`. |
| `expr` | string | — | Required. The expression. |
| `meta` | string | — | One line on what this form is good for. |
| `details`, `detailsLabel`, `detailsTitle` | | | See [Expandable parts](#expandable-parts). |

### `Operation`

| Field | Type | |
|---|---|---|
| `name` | string | Required. The move, e.g. `'Complete the square'`. |
| `desc` | string | Short detail under the arrow. |
| `details`, `detailsLabel`, `detailsTitle` | | See [Expandable parts](#expandable-parts). |

### `Note` (diptych only)

| Field | Type | Default | |
|---|---|---|---|
| `id` | string | — | Required, unique. |
| `badge` | string | — | e.g. `'What changed'`. |
| `body` | string | — | |
| `tone` | `'accent' \| 'warm'` | `'accent'` | The badge colour. |
| `details`, `detailsLabel`, `detailsTitle` | | | See [Expandable parts](#expandable-parts). |

Notes are laid out in up to two columns.

### `Step` (progression)

| Field | Type | |
|---|---|---|
| `id` | string | Required, unique. |
| `label` | string | What this line is, e.g. `'Grouped'`. |
| `expr` | string | The expression. |
| `stamp` | string | Optional corner chip. |
| `details`, `detailsLabel`, `detailsTitle` | | See [Expandable parts](#expandable-parts). |
| `move` | `{ label, note?, details?, detailsLabel?, detailsTitle? }` | The move that leads to the **next** step. Leave it out on the last step. |

The first step is drawn in grey and the last in navy with a stronger border; the steps in between use the accent colour.

---

## Expandable parts

Any of these boxes can have an expandable part: a panel, the operation, a note, a step, or a move.

```js
{
  details:      string | string[] | ReactNode,  // the content
  detailsLabel: string,                          // the button text
  detailsTitle: string                           // the heading inside the opened part
}
```

- **No `details`** (or an empty string or empty array) means no button: the box renders exactly as it would without this feature.
- **`details` types:** a string goes through `processContent`. A `string[]` renders one paragraph per entry, which suits a few lines of working. A ReactNode is rendered as is (a small graph, a table, another component).
- **`detailsLabel` and `detailsTitle`:** both are optional and fall back to [Labels](#labels). An empty `detailsTitle: ''` hides the heading.

### `expand` modes

| | `'inline'` *(default)* | `'drawer'` |
|---|---|---|
| **Diptych panels** | The panel opens in place. Several can be open at once. | One shared drawer opens under the panels. A caret points at the source box, and that box is highlighted. Opening another box replaces it. |
| **Diptych operation** | Opens as a strip with a gold edge under the arena. | Opens in the shared drawer, with the caret under the arrow. |
| **Progression steps** | The step opens inside its own card. Several can be open at once. | One step is open at a time, shown as a separate box attached under the card. |
| **Notes, moves** | Always inline, in both modes. | |

All parts open and close with a short height animation, and each button sets `aria-expanded`. A closed part is out of the tab order and hidden from screen readers.

When the card is narrower than 760px, or the screen narrower than 720px, the panels stack, the arrow points down, and the drawer's caret is hidden. The card's own width counts, not only the window's: on a page with sidebars a wide screen can still leave a narrow column. Expressions in panels and steps never break across lines, and the arrow column is at most 220px wide, so a long move description wraps under the arrow instead of squeezing the panels.

---

## Labels

Everything the component writes itself comes from `data.labels`, merged over the exported `DEFAULT_LABELS`.

| Key | Default | Used for |
|---|---|---|
| `hide` | `'Hide'` | Button text while a part is open |
| `close` | `'Close'` | The drawer close button (`aria-label`) |
| `before` | `'Before'` | The automatic Before stamp and drawer tag |
| `after` | `'After'` | The automatic After stamp and drawer tag |
| `move` | `'Move'` | The drawer tag when the operation is open |
| `panelToggle` / `panelTitle` | `'Details'` / `'Details'` | Panels |
| `operationToggle` / `operationTitle` | `'Working'` / `'Working'` | The operation |
| `noteToggle` / `noteTitle` | `'More'` / `'More'` | Notes |
| `stepToggle` / `stepTitle` | `'Details'` / `'Details'` | Progression steps |
| `moveToggle` / `moveTitle` | `'Working'` / `'Working'` | Progression moves |

**How the text is chosen for one box:**

| Text | First choice | Fallback |
|---|---|---|
| Button text | `box.detailsLabel` | `labels.<kind>Toggle` |
| Heading inside the opened part | `box.detailsTitle` | `labels.<kind>Title` (an empty string hides the heading) |
| Drawer heading | `box.detailsTitle` | the panel's `form`, or the operation's `name` |
| Drawer tag | the panel's `stamp` | `labels.before`, `labels.after` or `labels.move` |

Use `labels` to change the defaults across the whole component. Use `detailsLabel` and `detailsTitle` to change one box.

---

## Theme

`DEFAULT_THEME` is exported. Pass any subset of it as `theme`.

| Key | Default | Used for |
|---|---|---|
| `bg` | `#ffffff` | Card background |
| `panel` | `#ffffff` | Panels, step cards, opened parts, the drawer |
| `panelSoft` | `#eef2ff` | Button hover |
| `panelSofter` | `#f8faff` | Arena and track background, the opened-part background |
| `ink` | `#1f2937` | Body text |
| `title` | `#1e3a8a` | Titles, the After expression, the last step |
| `muted` | `#6b7280` | The Before stamp and top bar, secondary text |
| `line` | `#e5e7eb` | Not used by the current styles (every border uses `box`). Kept so existing themes still work. |
| `box` | `#c7cedb` | Box borders (panels, step cards, opened parts, drawer) |
| `accent` | `#4f46e5` | The After stamp and top bar, buttons, middle steps |
| `warm` | `#d97706` | The operation arrow, moves, the edge on operation working |
| `indigoSoft` | `#e0e7ff` | The accent note badge, the focus ring on an active box |
| `warmSoft` | `#fef3c7` | The warm note badge, the move arrow chip |

The component uses **Inter** for text, **JetBrains Mono** for labels and buttons, and KaTeX for the maths.

### On the site, always pass the site colours

The defaults above are indigo, which the site does not use. On a page, pass the site palette (navy, blue, amber):

```js
const siteTheme = {
  title:      '#06357A',   // navy
  accent:     '#2563EB',   // blue
  warm:       '#B45309',   // amber
  panelSoft:  '#e8eefc',
  indigoSoft: '#e8eefc',
};

<BeforeAfter data={squareData} theme={siteTheme} />
```

---

## Examples

### Diptych with expandable parts

```js
export const squareData = {
  header: {
    kicker: 'Quadratic functions',
    title: 'Completing the square',
    lede: 'The same quadratic, rewritten so the vertex can be read off directly.'
  },
  before: {
    stamp: 'Before',
    form: 'Standard form',
    expr: '$x^2 + 6x + 5$',
    meta: 'Shows the $y$-intercept: $(0, 5)$',
    detailsLabel: 'What it shows',
    detailsTitle: 'Reading standard form',
    details: [
      'Standard form $ax^2 + bx + c$ exposes the coefficients directly.',
      '**Reads off:** the $y$-intercept $c = 5$ and the direction of opening.',
      '**Hides:** the vertex and the axis of symmetry.'
    ]
  },
  after: {
    stamp: 'After',
    form: 'Vertex form',
    expr: '$(x + 3)^2 - 4$',
    meta: 'Shows the vertex: $(-3, -4)$',
    detailsLabel: 'What it shows',
    details: 'Vertex form $a(x - h)^2 + k$ places the vertex at $(h, k)$.'
  },
  operation: {
    name: 'Complete the square',
    desc: 'Add and subtract $(b/2)^2 = 9$',
    details: [
      '$$x^2 + 6x + 5 = (x^2 + 6x + 9) - 9 + 5$$',
      '$$= (x + 3)^2 - 4$$'
    ]
  },
  notes: [
    { id: 'n1', badge: 'What changed',
      body: 'The linear term $6x$ is absorbed into a perfect square.',
      details: 'Why $9$: $(x + p)^2 = x^2 + 2px + p^2$ needs $2p = 6$, so $p^2 = 9$.' },
    { id: 'n2', badge: 'What stayed', tone: 'warm',
      body: 'The function itself — only the reading changes.' }
  ]
};
```

```jsx
<BeforeAfter data={squareData} />                    // inline
<BeforeAfter data={squareData} expand="drawer" />    // shared drawer
```

### Progression with custom labels

```js
export const factorData = {
  header: { kicker: 'Polynomials', title: 'Factoring a trinomial by grouping' },
  labels: { hide: 'Close', moveToggle: 'Show working', moveTitle: 'Working it out' },
  steps: [
    { id: 'f1', label: 'Expanded', stamp: 'Before', expr: '$6x^2 + 11x + 4$',
      detailsLabel: 'Why this method',
      details: 'The leading coefficient is $6 \\neq 1$, so the AC method is used.',
      move: { label: 'Split the middle term', note: '$ac = 24$, find $m + n = 11$',
              details: ['Factor pairs of $24$: $3 \\cdot 8$ sums to $11$.', 'So $11x = 3x + 8x$.'] } },
    { id: 'f2', label: 'Split', expr: '$6x^2 + 3x + 8x + 4$',
      move: { label: 'Group in pairs' } },
    { id: 'f3', label: 'Grouped', expr: '$3x(2x + 1) + 4(2x + 1)$',
      detailsLabel: 'Check', detailsTitle: '',
      details: 'Both groups must leave the **same** binomial.',
      move: { label: 'Pull out the common factor', note: '$(2x + 1)$' } },
    { id: 'f4', label: 'Factored', stamp: 'After', expr: '$(3x + 4)(2x + 1)$',
      detailsLabel: 'Verify',
      details: '$$(3x + 4)(2x + 1) = 6x^2 + 11x + 4$$' }
  ]
};
```

```jsx
<BeforeAfter data={factorData} variant="progression" />
<BeforeAfter data={factorData} variant="progression" expand="drawer" />
<BeforeAfter data={factorData} />    // diptych from steps: first and last step as panels
```

### Minimal

```js
{
  before: { form: 'Expanded', expr: '$2\\log x + \\log y - \\log z$' },
  after:  { form: 'Single logarithm', expr: '$\\log \\dfrac{x^2 y}{z}$' },
  operation: { name: 'Apply the log rules' }
}
```

The stamps fall back to `labels.before` and `labels.after`, and no buttons are shown.

---

## Embedding on a page

Use the same pattern as the other infographics: place it in a section's `content` array, after the section text, wrapped in `DiagramFrame`. Note that `DiagramFrame` lives in the file `DiagramsFrameV2.jsx`.

```jsx
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
```

```jsx
<DiagramFrame
  key="obj6-diagram"
  id="condense-log-before-after"
  title="Condensing a logarithm"
  source="/algebra/logarithms/rules"
  before={"One sentence on what to look at."}
  after={"One sentence on the payoff, or a link onward."}
>
  <BeforeAfter data={condenseLogData} theme={siteTheme} />
</DiagramFrame>
```

---

## Authoring tips

- **Which variant:** use `diptych` for one move and `progression` for 3–5 steps. For more than 5 steps, split the rewrite into two components.
- **Keep the boxes short:** put the expression and one line in the box, and the explanation in `details`.
- **Button text:** give it what the reader will get, e.g. "What it shows", "Why this method", "Verify", rather than a generic "Details".
- **Where the working goes:** for a calculation, a `string[]` of `$$…$$` lines inside the operation or move reads as the working.
- **Which `expand` mode:** use `inline` when readers compare several parts at once, and `drawer` when the panels should keep their height and only one explanation matters at a time.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\log'`, `'\\neq'`).

---

## Changes from the previous version

All existing fields and default behaviour still work. What's new or different:

| Area | Change |
|---|---|
| Expandable parts | New optional `details`, `detailsLabel` and `detailsTitle` on panels, operations, notes, steps and moves. |
| `expand` prop | New: `'inline'` (default) or `'drawer'`. |
| Labels | New `data.labels` and the exported `DEFAULT_LABELS`. The automatic Before/After stamps now come from labels. |
| Borders | Boxes have 1.5px borders using the new theme key `box`. Panels have a 4px top bar (grey for Before, accent for After), and the last step has a 2px navy border. |
| processContent | Now also applied to the header kicker and title, stamps, note badges and the operation name. |
| Narrow screens | The arrow is now a separate downward arrow, instead of the wide arrow turned on its side (which overlapped the text). |
| Theme `bg` | Now sets the card background (it had no effect before). |
| Default stamps | In the two-panel layout, `before` / `after` without a `stamp` now show `labels.before` / `labels.after`, as documented (2026-10-26). |
| Narrow cards | Stacks when the card is under 760px wide (container query), not only on screens under 720px; arrow column capped at 220px; expressions never wrap (2026-10-26). |
| Import | The component now lives in its own folder: `@/app/components/infographics/BeforeAfter/BeforeAfter`. It imports `processContent` from `@/app/utils/contentProcessor`, and React as `React, { useState, useRef, useEffect }`. |
