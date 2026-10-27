# DecisionMaker

A static decision infographic. A short set of questions leads the reader to the right method, technique or case. One data object (questions → answers → outcomes) can be shown in six views, and the reader can switch between them from the card header.

```jsx
import DecisionMaker from '@/app/components/infographics/DecisionMaker';

<DecisionMaker data={factoringData} />
```

The component is a single file, `DecisionMaker.jsx`. It also exports `DEFAULT_LABELS`, `DEFAULT_THEME` and `ALL_VIEWS`.

---

## Contents

1. [Views](#views)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [How views are chosen](#how-views-are-chosen)
5. [Labels](#labels)
6. [Theme](#theme)
7. [Examples](#examples)
8. [Embedding on a page](#embedding-on-a-page)
9. [Authoring tips and rules](#authoring-tips-and-rules)

---

## Views

| Key | Switch label | Layout | Best for |
|---|---|---|---|
| `ladder` | Steps | Numbered checks top to bottom. "Yes" exits right to the method, "no" drops to the next check. | Strategy playbooks: try A, else B, else C. |
| `treeH` | Tree → | A branching tree from left to right, with every outcome in the last column. | Deeper trees, or long outcome text. |
| `treeV` | Tree ↓ | A branching tree from top to bottom, with every outcome in one bottom row. | Shallow trees with several outcomes. |
| `board` | Board | The first question on top, and its answers as columns. Each column lists its routes. | Data where the first question splits 2–4 ways. |
| `table` | Table | One row per route and one column per question. A question not asked on that route shows "—". | Comparing all routes side by side. |
| `rules` | Rules | One if → then card per route. | Any data at any width; also the automatic fallback on narrow screens. |

Hovering any box in either tree highlights its path back to Start and dims everything else.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'ladder' \| 'tree' \| 'board' \| 'table' \| 'rules'` (also `'treeH'`, `'treeV'`) | `'ladder'` | The **starting** view. The reader can change it. |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | The tree direction when `variant="tree"`. |
| `switcher` | boolean | `true` | Shows the reader's view switch. Set `false` to lock the starting view. |
| `views` | string[] | `ALL_VIEWS` | Which views the switch may offer, in the order they are shown. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |

```jsx
<DecisionMaker data={d} />                                     // Steps if possible, otherwise the first view that fits
<DecisionMaker data={d} variant="board" />
<DecisionMaker data={d} variant="tree" direction="vertical" />
<DecisionMaker data={d} views={['treeV', 'table', 'rules']} />
<DecisionMaker data={d} switcher={false} />
```

---

## Data shape

```js
{
  header?:  { kicker?, title, lede? },
  first?:   [ { label, text } ],      // banners above the view ("Always first: …")
  last?:    [ { label, text } ],      // banners below the view ("Finally: …")
  start:    'nodeId',                 // the first question
  nodes:    { [id]: Node },           // questions
  outcomes: { [id]: Outcome },        // where routes end
  labels?:  Labels                    // wording the component writes itself
}
```

### `Node` (a question)

| Field | Type | |
|---|---|---|
| `question` | string | Required. Keep it short, e.g. "How many terms?". |
| `hint` | string | One line under the question (shown in Steps and the trees). |
| `answers` | `[{ label, to }]` | Required. `label` is the answer text; `to` is the id of the next question **or** of an outcome. |

### `Outcome`

| Field | Type | Default | |
|---|---|---|---|
| `title` | string | — | Required. The method or result, e.g. "AC method". |
| `action` | string | — | One line on what to do. |
| `example` | string | — | An optional extra line. |
| `link` | `{ label, href }` | — | Where the method is taught. Shown as "→ label". |
| `tone` | `'go' \| 'done' \| 'stop'` | `'go'` | `go` is blue (a method to apply), `done` is navy (the answer itself), `stop` is gold (a dead end or special case). |

### Banners (`first`, `last`)

These are steps that apply to every route, e.g. "factor out the GCF" before, or "verify by multiplying" after. They're shown in every view.

---

## How views are chosen

A view is **offered** in the switch only if it suits the data:

| View | Offered when |
|---|---|
| `ladder` | The data is a **chain**: every question has at most one answer that leads to another question. |
| `treeH`, `treeV` | Always. |
| `board` | The data branches (not a chain) and the first question has 2–4 answers. |
| `table` | There are at most 6 questions. |
| `rules` | Always. |

An offered view is **disabled** (greyed out, with a tooltip) when it doesn't fit the card's current width. The width is measured live, so resizing updates the switch.

| View | Minimum body width |
|---|---|
| `ladder` | 560px |
| `treeH` | (question depth + 1) × 216 + 290px |
| `treeV` | number of outcomes × 142px |
| `board` | first-question answers × 230px |
| `table` | questions × 120 + 280px |
| `rules` | none |

If the starting view isn't usable, the first usable view in `views` order is shown instead. Rules always fits, so a narrow screen ends up on Rules. The switch is hidden when only one view is offered.

---

## Labels

All the text the component writes itself comes from `data.labels`, merged over `DEFAULT_LABELS`.

| Key | Default | Used for |
|---|---|---|
| `view` | `'View'` | The switch's accessible name |
| `ladder` | `'Steps'` | Switch button |
| `treeH` | `'Tree →'` | Switch button |
| `treeV` | `'Tree ↓'` | Switch button |
| `board` | `'Board'` | Switch button |
| `table` | `'Table'` | Switch button |
| `rules` | `'Rules'` | Switch button |
| `tooWide` | `'Not enough room for this view here'` | Tooltip on a disabled view |
| `start` | `'Start'` | The tag on the first question in the trees and Board |
| `use` | `'Use'` | The outcome column header in Table |
| `notAsked` | `'—'` | Table cell for a question not asked on that route |

---

## Theme

`DEFAULT_THEME` is exported. Pass any subset of it as `theme`.

| Key | Default | Used for |
|---|---|---|
| `panel` | `#ffffff` | Card, boxes |
| `panelSofter` | `#f8fafc` | Card body background |
| `ink` | `#1e293b` | Text |
| `title` | `#1e3a8a` | Titles, outcome titles |
| `muted` | `#64748b` | Secondary text, switch buttons |
| `line` | `#e2e8f0` | Light dividers |
| `box` | `#c7cedb` | Box borders |
| `edge` | `#94a3b8` | Tree and board connectors, the "no" rail |
| `accent` | `#2563eb` | `go` outcomes, "yes" arrows, highlighted paths |
| `accentSoft` | `#dbeafe` | Answer pills |
| `accentSofter` | `#eff6ff` | Switch background, column and table headers |
| `navy` | `#1e3a8a` | Step numbers, banner edge, `done` outcomes |
| `warm` | `#ca8a04` | `stop` outcome border |
| `warmInk` | `#a16207` | `stop` outcome title |

The fonts are Inter for text, JetBrains Mono for labels and pills, and KaTeX for maths.

---

## Examples

### A chain: offers Steps, both trees, Table and Rules

```js
const QPAGE = '/algebra/equations/quadratic';

export const quadraticMethod = {
  header: {
    kicker: 'Quadratic equations',
    title: 'Which solving method?',
    lede: 'Two methods depend on structure, two always work.'
  },
  first: [{ label: 'First', text: 'Write the equation in standard form $ax^2 + bx + c = 0$.' }],
  start: 'q1',
  nodes: {
    q1: { question: 'Integer roots visible from sum and product?',
          answers: [{ label: 'yes', to: 'vieta' }, { label: 'no', to: 'q2' }] },
    q2: { question: 'Factors over the rationals?',
          answers: [{ label: 'yes', to: 'factor' }, { label: 'no', to: 'q3' }] },
    q3: { question: 'Want the vertex form as well?',
          answers: [{ label: 'yes', to: 'square' }, { label: 'no', to: 'formula' }] }
  },
  outcomes: {
    vieta:   { title: 'Vieta / inspection', action: 'Two numbers with sum $-b/a$ and product $c/a$',
               link: { label: 'Vieta', href: QPAGE } },
    factor:  { title: 'Factoring', action: 'Then the zero-product property',
               link: { label: 'Solving by Factoring', href: QPAGE } },
    square:  { title: 'Completing the square', action: 'Always works; gives the vertex form',
               link: { label: 'Completing the Square', href: QPAGE } },
    formula: { title: 'Quadratic formula', action: 'Always works; shows the discriminant',
               link: { label: 'The Quadratic Formula', href: QPAGE } }
  }
};
```

### Branching: offers both trees, Board, Table and Rules

```js
const FPAGE = '/algebra/polynomials/factoring';

export const factoringStrategy = {
  header: {
    kicker: 'Polynomials',
    title: 'Which factoring technique?',
    lede: 'Mapped by structure: the number of terms, then the form.'
  },
  first: [{ label: 'Always first', text: 'Factor out the greatest common factor — even a lone $2$ or $x$.' }],
  last: [
    { label: 'Then', text: 'Check every factor again: $x^4 - 81 = (x^2 + 9)(x^2 - 9)$ is not finished.' },
    { label: 'Finally', text: 'Multiply the factors back to verify.' }
  ],
  start: 'terms',
  nodes: {
    terms: { question: 'How many terms?',
             answers: [{ label: '2', to: 'two' }, { label: '3', to: 'tri' }, { label: '4 or more', to: 'grouping' }] },
    two:   { question: 'Which pattern?',
             answers: [{ label: '$a^2 - b^2$', to: 'dos' }, { label: '$a^3 \\pm b^3$', to: 'cubes' }, { label: 'neither', to: 'prime' }] },
    tri:   { question: 'Perfect square pattern?',
             answers: [{ label: 'yes', to: 'pst' }, { label: 'no', to: 'lead' }] },
    lead:  { question: 'Leading coefficient $1$?',
             answers: [{ label: 'yes', to: 'simple' }, { label: 'no', to: 'ac' }] }
  },
  outcomes: {
    dos:      { title: 'Difference of squares', action: '$a^2 - b^2 = (a - b)(a + b)$',
                link: { label: 'Difference of Squares', href: FPAGE } },
    cubes:    { title: 'Sum / difference of cubes', action: '$a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)$',
                link: { label: 'Sum and Difference of Cubes', href: FPAGE } },
    prime:    { title: 'May be irreducible', action: 'Over the integers — try the quadratic formula', tone: 'stop',
                link: { label: 'Irreducible Polynomials', href: FPAGE } },
    pst:      { title: 'Perfect square trinomial', action: '$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$',
                link: { label: 'Perfect Square Trinomials', href: FPAGE } },
    simple:   { title: 'Simple trinomial', action: 'Find $m, n$ with $mn = c$ and $m + n = b$',
                link: { label: 'Trinomials — Simple Case', href: FPAGE } },
    ac:       { title: 'AC method', action: 'Split $bx$ using $mn = ac$, then group',
                link: { label: 'Trinomials — General Case', href: FPAGE } },
    grouping: { title: 'Factor by grouping', action: 'Pair terms, factor each pair, pull out the common binomial',
                link: { label: 'Factoring by Grouping', href: FPAGE } }
  }
};
```

```jsx
<DecisionMaker data={factoringStrategy} variant="board" />
```

### A long chain: offers Steps and Rules only

A 9-check playbook, such as the limit evaluation playbook, is a chain, so Steps is offered. Its trees are too wide for a normal card, so they're greyed out, and with more than 6 questions there's no Table. Start it on `ladder`.

---

## Embedding on a page

Use the same pattern as the other infographics: place it in a section's `content` array, after the section text, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj13-diagram"
  id="factoring-decision"
  title="Which factoring technique?"
  source="/algebra/polynomials/factoring"
  before={"Run the checks in order; the GCF always comes first."}
  after={"Each outcome links to the section that teaches it."}
>
  <DecisionMaker data={factoringStrategy} variant="board" />
</DiagramFrame>
```

Good homes are the strategy, "choosing the right technique" and "summary of methods" sections, e.g. factoring strategy, the limit playbook, choosing an integration technique, exponential-equation methods, and trig equations by form.

---

## Authoring tips and rules

- **Questions:** keep them to one line ending in "?". Put any detail in `hint`.
- **Answers:** keep them to a word or a short formula ("yes", "3", "$a^2 - b^2$"). They become pills in every view.
- **Outcomes:** use the method name as the title and one line as the action. Put the explanation on the page it links to, not in the card.
- **Size:** aim for 3–5 questions and up to about 8 outcomes. Beyond that, split the decision into two components.
- **Rule: one route per outcome.** Each outcome id must be reached by exactly one answer. To reach the same method from two branches, give it two outcome ids with the same content.
- **Rule: no loops.** A question must not lead back to an earlier one. Loops are ignored.
- **Rule: the start must exist.** `start` must be a node id.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'$a^3 \\pm b^3$'`).
- **Text formatting:** all text goes through `processContent`, so `$math$`, `**bold**` and `[label](!/path)` work everywhere, including the labels.
