# MistakeFix

A common-mistakes infographic. Each mistake shows the **wrong working**, the **right working**, **why it happens** and **how to check**, which is the structure the site's "Common Pitfalls" sections already use. There are three layouts, and the component picks one from the data. Wording, colours and behaviour can all be set from data, with defaults.

```jsx
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix';

<MistakeFix data={identityPitfalls} />
```

The component is a single file, `MistakeFix/MistakeFix.jsx`, with these docs beside it. It exports `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.

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

A display formula wider than its box is scaled down to fit, to no less than 72% of its size (`MIN_FIT`); a formula still wider scrolls sideways inside its own box. Inside `DiagramFrame` the card is about 640px wide, so each trace column is narrow: break long chains into steps. A chain of `\implies` becomes one step per arrow; a chain of `=` can be broken the same way (`'$$= x^2 + 10x + 25$$'`). Two statements side by side (`\qquad` between them) go on two display lines in the same step, and a long list is split after a comma. After converting a page, check at desktop width that no formula in a card still scrolls.

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

### Converted pages

| Batch | Date | Pages (`/algebra/…` up to batch 5, trace unless noted) | Entries |
|---|---|---|---|
| pilot | 2026-11-01 | `identities`, `logarithms/rules` (ledger), `equations/absolute-value` | 18 |
| 1 | 2026-11-01 | `absolute-value`, `equations/linear`, `equations/polynomial`, `equations/quadratic`, `equations/rational`, `inequalities`, `inequalities/linear`, `inequalities/quadratic`, `inequalities/rational`, `logarithms/equations` | 45 |
| 2 | 2026-11-01 | `logarithms`, `logarithms/common-natural`, `logarithms/graphs`, `polynomials/factoring`, `polynomials/graphing`, `polynomials/operations`, `polynomials/roots`, `powers/exponential-equations`, `powers/exponential-functions`, `powers/exponential-inequalities`, `powers/zero-powers` | 41 |
| 3 | 2026-11-01 | `powers`, `powers/irrational-exponents`, `powers/natural-exponents`, `powers/negative-exponents`, `powers/rational-exponents`, `roots`, `roots/equations`, `roots/functions`, `roots/operations`, `roots/properties` | 39 |
| 4 | 2026-11-02 | `roots/rational-exponents`, `roots/simplifying`, `sequences`, `sequences/arithmetic`, `sequences/fibonacci`, `sequences/geometric`, `sequences/harmonic`, `sequences/prime-numbers`, `sequences/square-numbers`, `sequences/triangular-numbers` | 36 |
| 5 | 2026-11-02 | `equations`, `inequalities/absolute-value`, `inequalities/polynomial`, `logarithms/inequalities`, `logarithms/properties`, `polynomials`, `polynomials/rules`, `powers/exponent-rules`, `roots/radical-rules` | 37 |
| 6 | 2026-11-02 | `/set-theory/…`: `basics`, `cardinality`, `operations`, `relationships`, `subsets`, `venn-diagrams`; `/combinatorics/…`: `basics`, `binomial-coefficient`, `binomial-theorem`, `combinations`, `counting-principles`, `inclusion-exclusion`, `permutations` | 61 |
| 7 | 2026-11-03 | `/arithmetic/…`: `divisibility`, `divisibility/factors`, `divisibility/gcd`, `divisibility/lcm`, `divisibility/rules`, `fractions`, `fractions/adding-subtracting`, `fractions/comparing`, `fractions/complex` | 40 |
| 8 | 2026-11-03 | `/arithmetic/…`: `fractions/dividing`, `fractions/equivalent`, `fractions/mixed-numbers`, `fractions/multiplying`, `integer-part`, `modulo`, `modulo/negative-numbers`, `modulo/operations`, `properties` | 39 |
| 9 | 2026-11-03 | `/trigonometry/…`: `degrees-radians`, `equations`, `functions`, `graphs`, `identities`, `inequalities`, `inverse-functions`, `properties`, `right-triangle`, `sines-cosines-law`, `unit-circle` | 59 |
| 10 | 2026-11-03 | `/functions/…`: `analyzing`, `arithmetic`, `basics`, `composition`, `domain`, `families`, `graphs`, `inverse`, `piecewise`, `properties`, `range`, `transformations` | 64 |
| 11 | 2026-11-03 | `/logic/…`: `propositional-logic`, `propositional-logic/semantics`, `propositional-logic/semantics/contradiction`, `propositional-logic/semantics/equivalences`, `propositional-logic/semantics/implication`, `propositional-logic/semantics/tautology`, `propositional-logic/syntax`, `truth-tables/biconditionals`, `truth-tables/contradictions`, `truth-tables/implications`, `truth-tables/tautologies` | 43 |
| 12 | 2026-11-03 | `/complex-numbers/…`: `absolute-value`, `additive-inverse`, `algebraic-form`, `basics`, `complex-conjugate`, `demoivre-theorem`, `equations-polynomials`, `exponential-form`, `geometric-representation`, `imaginary-numbers`, `multiplicative-inverse`, `operations`, `properties`, `trigonometric-form` | 64 |
| 13 | 2026-11-03 | `/calculus/derivatives/…`: the index page, `common`, `differentiability`, `differentials`, `function`, `graph-analysis`, `higher-order`, `rules`, `special`, `techniques` | 48 |
| 14 | 2026-11-03 | `/calculus/integrals/…`: the index page, `definite`, `evaluating`, `improper`, `indefinite`, `rules`, `special`, `techniques` | 37 |
| 15 | 2026-11-03 | `/calculus/limits/…`: the index page, `continuity`, `evaluating`, `infinity`, `one-sided`, `rules`, `special`, `two-sided` | 39 |
| 16 | 2026-11-04 | `/probability/…`: `axioms`, `basics`, `cdf`, `central-limit-theorem`, `combinatorics`, `covariance`, `events`, `expected-value`, `indicators`, `joint-probability` | 28 |
| 17 | 2026-11-04 | `/probability/distributions/…`: the index page, `continuous`, `continuous/exponential`, `continuous/normal`, `continuous/uniform`, `discrete`, `discrete/binomial`, `discrete/geometric`, `discrete/hypergeometric`, `discrete/negative-binomial`, `discrete/poisson`, `discrete/uniform` | 44 |
| 18 | 2026-11-04 | `/probability/…`: `inequalities`, `inequalities/chebyshev`, `inequalities/markov`, `large-numbers-law`, `models`, `models/coin-toss`, `models/dice-roll`, `probability-function`, `probability-function/pdf`, `probability-function/pmf` | 29 |
| 19 | 2026-11-04 | `/probability/…`: `conditional-probability` (placed by hand), `random-variables`, `rules`, `sample-space`, `sets`, `total-probability`, `tree-diagrams` | 15 |
| 20 | 2026-11-04 | `/linear-algebra/…`: `decompositions` and its 5 subpages, `determinants` and its 4 subpages | 41 |
| 21 | 2026-11-04 | `/linear-algebra/…`: `eigen` and its 4 subpages, `linear-systems` and its 4 subpages | 41 |
| 22 | 2026-11-04 | `/linear-algebra/…`: `matrix` and its 5 subpages, `orthogonality` and its 5 subpages | 47 |
| 23 | 2026-11-04 | `/linear-algebra/…`: `transformations` and its 5 subpages, `vector-spaces` and its 7 subpages | 55 |
| 24 | 2026-11-04 | `/linear-algebra/…`: `vectors` and its 6 subpages | 25 |

Done: every subject. /algebra (53 pages, 216 entries), /set-theory (6 pages, 27 entries), /combinatorics (7 pages, 34 entries), /arithmetic (18 pages, 79 entries), /trigonometry (11 pages, 59 entries), /functions (12 pages, 64 entries), /logic (11 lesson pages, 43 entries), /complex-numbers (14 pages, 64 entries), /calculus (26 pages, 124 entries), /probability (39 pages, 116 entries) and /linear-algebra (54 pages, 209 entries): 251 pages, 1035 entries.

Most linear-algebra pages are saved with Windows line endings; eight of them also hold one to three lines with plain line breaks from an earlier edit. The script keeps each of those lines' endings as they were. Git shows such mixed files as rewritten in full, because it does not convert mixed line endings; that was already so before this pass.

Probability pages keep their entries in several places: a section named `pitfalls`, `mistakes`, `mistakesEntries` or `misconceptionsMore` (the last two shown inside the section before them), the `more` field of `cdf`'s `mistakes` section, and on `conditional-probability` a string at the end of the section's content array, replaced by the frame with a one-line opening before it. `large-numbers-law` had no opening paragraph for its one entry, so one was written. Several sections end with a table of other mistakes or a demo; those stay, and the cards come after them. On `total-probability` the section starts with an older bold-headed list; it stays as the opening text.

Linear-algebra formulas were measured the same way: 183 display formulas on 47 pages scrolled in a card column. They were broken at a top-level `=`, `\approx`, `\le`, `\xrightarrow`, `\Rightarrow` or `\quad` (never inside brackets or a matrix), and lines still too wide were split between terms at a `+` or `−`; a second pass broke 10 of the 18 left. Eight that still scrolled on a phone were rewritten on 2026-11-04 at the owner's request: on `decompositions/lower-upper` the product $LU$ is shown as $L$, $U$ and $LU$ on separate lines, and two `L = …, \quad U = …` pairs were split; on `linear-systems/gaussian-elimination`, `linear-systems/solvability` and `matrix/rank` each matrix of a reduction sits on its own line (one row operation moved from the arrow into the text, as a new step); on `vectors` the cross product is worked out one component per line.

Probability formulas are long chains of equalities, so 113 display formulas on 37 pages scrolled in a card column, at desktop or phone width. Each was broken onto several lines at its top-level `=`, `\approx`, `\le` or `\quad` (never inside brackets), and 16 lines that were still too wide were split by hand at a `+` or `−`. Four inline lists of dice pairs were written as one `$…$` per pair so the text can wrap. The fraction $\frac{6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25}{6}$ on `probability-function/pmf` scrolled on a phone; on 2026-11-04 the six values and their sum $17.5$ were moved into the text, leaving $\frac{17.5}{6}$.

On `/calculus/limits/one-sided` and `two-sided`, eleven display formulas that held two statements side by side (`\qquad`, `\quad \text{so}`) were broken onto separate lines, because they scrolled in a trace column. On `/calculus/integrals/evaluating` the section's demo, note and table of other mistakes stay, and the cards come after them.

On `/complex-numbers/additive-inverse`, `multiplicative-inverse` and `operations` the section's table of other mistakes stays, and the cards come after it; side boxes for the table's mistakes keep the link to the section. Left in the old format by owner decision (2026-11-03): `/logic/propositional-logic/syntax/tree-builder`, a tool page (PropositionTreeBuilder) with lesson sections and a pitfall section below it. Tool pages are not converted.

Logic pages are built in several ways. On six the section is a field of an object passed through props and rendered as `content: [X.content]` or `content: X.content` (the script turns either into the usual array); `syntax` names the object `sectionContent`, and `semantics/contradiction` names it `contradictionContent` and keeps the text in `description`. Three were placed by hand, with `pitfallData` and `pitfallClosing` as constants after the imports: `propositional-logic` (sections built in getStaticProps; the frame is added where the component spreads them), `semantics` (sections written in the component) and `semantics/implication` (the two entries were the last two strings of the section's content array; they were replaced by the frame).

On `/functions/piecewise` the cards' section is `obj12b`, shown inside `obj12` after its "Common Mistakes" table; it had no `after` field, so one was added. `/functions/domain` is saved with Windows line endings (CRLF) and was written back that way.

`/arithmetic/integer-part` had no opening paragraph, so one was written. On `fractions/adding-subtracting` a demo and a one-line note follow the opening text; the cards come after them. On `fractions/adding-subtracting` and `fractions/complex` three side boxes cover mistakes from the older opening text and keep the link to the section.

Set-theory and combinatorics entries are prose, one wrong statement and one right one. Where the wrong statement opens with a setup ("For $A = …$ and $B = …$," or a problem sentence such as "$7$ identical candies are shared among $3$ children."), that part is the shared start; otherwise the card has no start.

The data constant is `pitfallData`. `/algebra/absolute-value` had no opening paragraph, so one was written. On `polynomials/factoring`, `polynomials/graphing` and `polynomials/roots` the section's older prose list and its summary table stay as they were; the cards come after the table. The same holds on `polynomials/rules`, `powers/exponent-rules` and `roots/radical-rules`, whose tables sum up the section's opening text, not the cards.

**Side-box links.** Each pitfall side box ends with `[Read more](!#…)`. On a converted page it links to its own card, `#pitfall-<id>`, matched by box title = entry name. A box whose mistake has no card (it is only in an older prose list) keeps the link to the section. Three titles differed from their entry's name and were linked by hand: `absolute-value` "Splitting the bars over a difference", and on `logarithms/rules` "Splitting a sum" (`#pitfall-log-of-sum`) and "Dividing the logarithms" (`#pitfall-quotient-of-logs`). Do the same for each new page.

**`/algebra/logarithms/rules`:** the old "Incorrect rule" table under the ledger repeated rows 1–5 and was removed (owner decision, 2026-11-01).

### Converting with a script: traps

- Several pages keep an old copy of the page component in a `//` comment with the same signature (`// export default function …({`). Insert the new prop at the position of the live signature, not with a plain text replace, which edits the first copy, the commented one.
- Some signatures are indented (`   export default function …`).
- When a chain is split at `\implies`, a step that already begins with `\implies` must not produce an empty first step. Check every step has content, and that every card has at least one wrong step and one right step after the start.
- Field spacing varies between pages (`content: \``, `content:\``, `after:\`\``). Match with optional spaces, and find the section's `objN:` header with a pattern, not by searching for the letters "obj" (they also occur in ordinary words).
- Some sections' `content` arrays hold more than the text (a summary table). The frame goes at the end of the array.
- A start can also be taken at an `=` sign. Choose which one: in $x = \frac{\log 7}{\log 3} = \log 7 - \log 3$ the split belongs at the second `=`, because $x = \frac{\log 7}{\log 3}$ is correct.
- Where the first line only sets up the problem ("For $20, 17, 14, 11$,", "Handshakes among $5$ people,"), that line can be the shared start and the formula after it the wrong turn.
- Chains are split at `\implies` after `errorAt` is set. When an entry's start is built by hand and its formula holds an arrow, split the chain first and then set `errorAt`, or the arrow step lands in the start.
- The error is not always in the first step after the problem statement. Read every entry and set `errorAt` to the first step that is actually wrong; the steps before it are correct and become the shared start.
- The section key is not always `objN`: several set-theory and combinatorics pages call it `pitfalls`.
- Measure, do not guess, which formulas are too wide: read the KaTeX text of every `.katex-display` with `scrollWidth > clientWidth` at 1400 and 375 px, save it as a list, and break only those. A length estimate breaks many formulas that fit.
- In a CRLF file every line ends in `\r`, and JavaScript's `.` does not match it: a pattern ending in `(.*)$` fails on every line. Strip the `\r` before matching. The side-box link script missed every CRLF page this way until 2026-11-04.
- Some entries write the label as "Wrong working, for …" instead of "Wrong working: …". Drop a comma after the label as well as a colon.
- A few pages are saved with Windows line endings (CRLF). The entry parser expects plain line breaks, so read such a file with `\r\n` turned into `\n` and write it back with CRLF; refuse a file with mixed endings.
- An older prose list in the same section may use bold headings too. Only a bold heading followed by all four labels starts an entry; earlier headings belong to the opening text.
- Some sections have no `after` field at all (`combinatorics/combinations`). Add one after the content's closing backtick.
- At phone width a check for elements sticking out of the card reports KaTeX's hidden screen-reader copy of each formula (`math`, `mrow`, …). Those are not visible; ignore them.
- Never pass page text as the second argument of `String.replace` as a plain string: `$$` there means one `$`, so every display formula turns into inline maths. Pass a function, `s.replace(from, () => to)`. This happened to 21 formula line breaks on 13 pages (2026-11-02) and was repaired. The too-wide check only looks at display formulas, so it did not notice.

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
