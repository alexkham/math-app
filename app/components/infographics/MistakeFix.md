# MistakeFix

A common-mistakes infographic. Each mistake shows the **wrong working**, the **right working**, **why it happens** and **how to check**, which is the structure the site's "Common Pitfalls" sections already use. There are three layouts, and the component picks one from the data. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import MistakeFix from '@/app/components/infographics/MistakeFix';

<MistakeFix data={identityPitfalls} />
```

The component is a single file, `MistakeFix.jsx`. It exports `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

---

## Contents

1. [Layouts](#layouts)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Customisation from data](#customisation-from-data)
5. [Examples](#examples)
6. [Embedding on a page](#embedding-on-a-page)
7. [Authoring tips](#authoring-tips)

---

## Layouts

**Trace is the default for pitfall sections** (owner decision 2026-11-01): its amber "Error here" step matches the site's amber pitfall boxes.

| Layout | Use when | What it shows |
|---|---|---|
| **trace** (default) | Any pitfall section, unless it is a list of false rules | The shared start, the step that breaks (marked "Error here" in amber), and the right path continuing from the same point. With a single-line `wrong` and no `errorAt` there is no start: the whole wrong working is the faulty step. |
| **ledger** | Many short false rules | One row each: the false rule on the left, what's true instead on the right. A row with more content opens when clicked (or with Enter / Space). |
| **split** | Only when asked for by name | Wrong and right side by side, with "why" and "check" below. The wrong maths is struck through. |

### Automatic choice (`variant="auto"`, the default)

| Picked | When |
|---|---|
| `ledger` | `options.ledger` is `true`, **or** every mistake is a single line with no `why` or `check` |
| `trace` | Otherwise |

`split` is never picked automatically. `variant` overrides the choice. In trace, a mistake without `right` shows its `truth` on the right path.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'auto' \| 'split' \| 'ledger' \| 'trace'` | `'auto'` | |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. `data.theme` takes priority. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. `data.options` takes priority. |

Precedence: **defaults → props → data**.

---

## Data shape

```js
{
  header?:   { kicker?, title, lede? },
  mistakes:  Mistake[],
  footnote?: string,              // one line under the layout
  labels?:   { ... },
  theme?:    { ... },
  options?:  { ... }
}
```

### `Mistake`

| Field | Type | Used in | |
|---|---|---|---|
| `id` | string | all | Required, unique. The card (or ledger row) gets the page anchor `options.anchorPrefix + id`, e.g. `#pitfall-middle-term`. |
| `name` | string | all | The mistake's name, e.g. "Dropping the middle term". In the ledger it's the note under "Instead". |
| `what` | string | all | What goes wrong: the paragraph under the name in the page's pitfall entries. Shown under the card header (split, trace) or at the top of the opened row (ledger). |
| `wrong` | string \| string[] | all | The wrong working. An array means steps. The ledger shows the first entry in its row and the rest, if any, inside the opened row. |
| `right` | string \| string[] | split, trace; ledger (opened) | The right working. |
| `errorAt` | number | trace | Index of the first wrong step. Steps before it are shared (shown under "Start"). Default `1`. |
| `truth` | string | ledger; split fallback | What's true instead, shown in the ledger's right column. Split uses it when `right` is missing. |
| `why` | string | all | Why it happens. |
| `check` | string | all | How to check, e.g. "substitute a value". |
| `link` | `{ label, href }` | all | Where the topic is taught. Shown in the card header (split, trace) or inside the opened row (ledger). |
| `details` | string \| string[] \| ReactNode | all | An extra expandable part. A string array means paragraphs. |
| `detailsLabel` | string | all | Toggle text (default `labels.more`). |
| `detailsTitle` | string | all | Heading inside (default `labels.detailsTitle`, which is empty: no heading). |

### Maths steps and text steps

A step that is only maths (nothing but punctuation outside its `$…$` / `$$…$$` parts) is set in the maths font, and in split its wrong version is struck through. A step with words in it, such as `'The first term is $a = 2x$, so $a^2 = 4x^2$:'`, is set as normal text and never struck through. A text step may hold display maths on its own lines:

```js
`Both cases are solved.
$$3x + 5 = 11 \\implies x = 2$$`
```

Wide formulas scroll sideways inside their own box. In split columns, break a long chain of `=` into two steps (`'$$= x^2 + 10x + 25$$'`).

### How trace splits the steps

```js
wrong:   ['$\\sqrt{72}$', '$= \\sqrt{64 + 8} = \\sqrt{64} + \\sqrt{8}$', '$= 8 + 2\\sqrt{2}$'],
right:   ['$\\sqrt{72}$', '$= \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2}$', '$= 6\\sqrt{2}$'],
errorAt: 1
```

| Part | Taken from |
|---|---|
| Start | `wrong[0 .. errorAt-1]` (the right working is assumed to share these steps) |
| Wrong turn | `wrong[errorAt ..]`. The first one is marked "Error here"; the last has a dashed border. |
| Right path | `right[errorAt ..]`. The last one has a solid blue border. |

---

## Customisation from data

All three objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `wrong` / `right` | `'Wrong'` / `'Right'` | Split column tags |
| `notTrue` / `instead` | `'Not true'` / `'Instead'` | Ledger column tags |
| `start` | `'Start'` | Trace: the shared steps |
| `wrongTurn` / `rightPath` | `'Wrong turn'` / `'Right path'` | Trace column tags |
| `errorHere` | `'Error here'` | Trace: the tag on the faulty step |
| `why` | `'Why it happens'` | All |
| `check` | `'How to check'` | All |
| `rightWorking` | `'Right working'` | Ledger: inside an opened row |
| `wrongWorking` | `'Wrong working, continued'` | Ledger: the wrong steps after the first, inside an opened row |
| `more` / `hide` | `'More'` / `'Hide'` | Toggle for `details` |
| `detailsTitle` | `''` | Default heading for `details` (empty means none) |

### `theme` (`DEFAULT_THEME`)

| Key | Default | Used for |
|---|---|---|
| `ink` | `#1e293b` | Text |
| `title` | `#06357A` | Titles, mistake names, number badges (site navy) |
| `muted` | `#64748b` | Lede, notes, labels |
| `line` | `#e2e8f0` | Dividers |
| `box` | `#c7cedb` | Borders |
| `panel` | `#ffffff` | Cards |
| `soft` | `#f8fafc` | Body background, opened parts |
| `headBg` | `#eff6ff` | Card headers, the ledger header |
| `right` / `rightSoft` | `#2563eb` / `#dbeafe` | Right tags, the right result, "check" and "details" edges, kicker, links |
| `wrong` / `wrongBg` / `wrongSoft` | `#475569` / `#f1f5f9` / `#e2e8f0` | Wrong working text, background, tags |
| `error` / `errorBg` / `errorInk` | `#B45309` / `#FDF3E3` / `#B45309` | Trace: the faulty step, the "why" edge and label. Site amber, the same as the pitfall side boxes. |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `numbered` | `true` | Number badges on split and trace cards |
| `strikeWrong` | `true` | Strikes through the wrong working in split |
| `marks` | `true` | ✕ / ✓ on the Wrong / Right tags |
| `ledger` | `false` | Makes `auto` choose the ledger even when some rows have `why` or `check` |
| `anchorPrefix` | `'pitfall-'` | Each card's (or row's) id is `anchorPrefix + mistake.id` |

The fonts are Inter for text, JetBrains Mono for tags and labels, and STIX Two Text for working, with KaTeX for maths.

---

## Examples

### Split: `algebra/identities` → Common Pitfalls

```js
export const identityPitfalls = {
  header: { kicker: 'Algebraic identities', title: 'Common pitfalls when expanding' },
  mistakes: [
    { id: 'mid', name: 'Dropping the middle term',
      wrong: '$(x + 5)^2 = x^2 + 25$',
      right: '$(x + 5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 25 = x^2 + 10x + 25$',
      why: 'Powers do spread over products, $(ab)^2 = a^2b^2$, and the same move looks natural for a sum.',
      check: 'At $x = 1$: $(1 + 5)^2 = 36$; the wrong form gives $26$, the right form $36$.' },
    { id: 'letter', name: 'Squaring only the letter',
      wrong: '$(2x + 3)^2 = 2x^2 + 12x + 9$',
      right: '$(2x + 3)^2 = 4x^2 + 12x + 9$',
      why: 'The identity is learned with single letters, and $a^2$ is read as "the letter squared".',
      check: 'At $x = 1$: $(2 + 3)^2 = 25$; the wrong form gives $23$, the right form $25$.',
      link: { label: 'Squares of Binomials', href: '/algebra/identities' } }
  ]
};
```

### Ledger: `algebra/logarithms/rules` → Common Errors

```js
export const logErrors = {
  header: { kicker: 'Logarithms', title: 'Rules that do not exist' },
  options: { ledger: true },
  mistakes: [
    { id: 's', wrong: '$\\log_a(x + y) = \\log_a x + \\log_a y$',
      name: 'The logarithm of a sum does not split. There is no simplification.' },
    { id: 'p', wrong: '$\\log_a x \\cdot \\log_a y = \\log_a(xy)$',
      truth: '$\\log_a(xy) = \\log_a x + \\log_a y$',
      name: 'Multiplying logarithms is not the log of a product.' },
    { id: 'cb', wrong: '$\\log_2 8 = \\dfrac{\\ln 2}{\\ln 8}$',
      truth: '$\\log_2 8 = \\dfrac{\\ln 8}{\\ln 2} = 3$',
      name: 'Inverting the fraction in the change of base.',
      right: '$$\\log_2(8) = \\frac{\\ln(8)}{\\ln(2)} = \\frac{3\\ln(2)}{\\ln(2)} = 3$$',
      why: 'Once both logarithms are in the new base they look alike.',
      check: 'Estimate first: $2^3 = 8$, so the answer must be $3$, not $\\tfrac{1}{3}$.' }
  ]
};
```

### Trace: `algebra/roots/simplifying` → Common Pitfalls

```js
export const radicalPitfalls = {
  header: { kicker: 'Radicals', title: 'Where the working goes wrong' },
  mistakes: [
    { id: 'sum', name: 'Splitting a sum under the radical', errorAt: 1,
      wrong: ['$\\sqrt{72}$', '$= \\sqrt{64 + 8} = \\sqrt{64} + \\sqrt{8}$', '$= 8 + 2\\sqrt{2}$'],
      right: ['$\\sqrt{72}$', '$= \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2}$', '$= 6\\sqrt{2}$'],
      why: 'The product rule $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ seems to invite an addition version.',
      check: 'Compare decimals: $8 + 2\\sqrt{2} \\approx 10.83$, but $\\sqrt{72} \\approx 8.49$.' }
  ]
};
```

### Customised from data

```js
{
  ...identityPitfalls,
  labels:  { wrong: 'Slip', right: 'Fix', why: 'Cause', check: 'Test' },
  theme:   { right: '#1e3a8a', rightSoft: '#e0e7ff', headBg: '#f1f5f9' },
  options: { numbered: false, strikeWrong: false, marks: false }
}
```

---

## Embedding on a page

The component takes the place of the entries in the page's "Common Pitfalls" section. The section's opening paragraph stays as text; the entries move, word for word, into the MistakeFix data.

1. In `getStaticProps`, define the data next to the page's other infographic data and return it in `props`.
2. Cut the entries (from the first `**<name>**` to the end of the last "How to check") out of the section's `sectionsContent` text. Keep the opening paragraph.
3. Write a closing paragraph into the section's `after` field (it is empty on these pages). It is plain prose with no heading: never a "Conclusion" title.
4. Add the component after the text in the section's `content` array, **always inside `DiagramFrame`** (`DiagramsFrameV2`), with the closing paragraph as the frame's `after`. No `header` in the data, since the section already has its heading.

```jsx
content: [
  sectionsContent.obj8.content,
  <DiagramFrame
    key={'obj8-mistakes'}
    id="identity-pitfalls"
    title="Common pitfalls with algebraic identities"
    source="/algebra/identities"
    after={sectionsContent.obj8.after}
  >
    <MistakeFix data={identityPitfalls} variant="trace" />
  </DiagramFrame>,
]
```

**Owner rule (2026-11-01): the section always has free text of its own around the diagram,** an opening paragraph before it and a closing paragraph after it. The closing paragraph:

- draws the entries together (what they have in common, or the one check that catches most of them) instead of repeating any single entry;
- is two to four sentences in the page's voice;
- states only what the entries support. Check each claim against every entry (for example, "substitution catches four of the five" was counted entry by entry).

| Page entry | Data field |
|---|---|
| `**<name>**` | `name` |
| The paragraph under the name | `what` |
| "Wrong working:" | `wrong` (split long `=` chains into steps) |
| "Right working:" | `right`; its lead-in sentence is the first step |
| "Why it happens:" | `why` |
| "How to check:" | `check` |

The label words ("Wrong working:", "Why it happens:" and so on) are dropped, since the component shows its own labels. The first letter after a dropped label is made a capital.

There are about 256 pitfall sections with about 1044 entries, all in this format. Pilot pages (2026-11-01): `/algebra/identities` (trace, first built as split), `/algebra/logarithms/rules` (ledger), `/algebra/equations/absolute-value` (trace).

---

## Authoring tips

- **Take the content from the page:** most pitfall sections already give "Wrong working", "Right working", "Why it happens" and "How to check". Map them one to one.
- **Which layout:** trace, unless the section is mostly a list of false rules.

  | The entries are mostly… | Layout | Pilot |
  |---|---|---|
  | Anything else: a procedure that breaks at one step, or a single wrong move (expanding, applying a formula) | trace | `/algebra/equations/absolute-value`, `/algebra/identities` |
  | False rules or identities, where the point is "this does not hold" and the fix is a short true statement; usually five or more, read by scanning | ledger | `/algebra/logarithms/rules` |

- **For trace,** write `wrong` and `right` as step arrays that start with the same steps, and set `errorAt` to the first step that differs. Where the page gives one formula (`$$(x + 5)^2 = x^2 + 25$$`), break it at the `=` signs so the left side is the shared start: `['$$(x + 5)^2$$', '$$= x^2 + 25$$']`. A lead-in sentence of the right working goes into the same step as the formula it introduces. Where the wrong working is one sentence, break it at the comma before the wrong conclusion, or leave it whole with no `errorAt` (then there is no start).
- **Checks:** keep `check` concrete, such as substituting a value or comparing decimals. That's what makes the mistake visible at a glance.
- **Ledger rows:** when there's nothing true to put instead (e.g. "no simplification"), leave out `truth`; the note carries it.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\sqrt'`, `'\\dfrac'`).
