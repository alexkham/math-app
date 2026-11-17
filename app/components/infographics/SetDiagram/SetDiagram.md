# SetDiagram

Venn diagrams with clickable regions. You can build sets from operations, count with inclusion–exclusion one term at a time, show a set identity by building both sides step by step, or compare the ways two sets can relate. `operations` and `count` can also show an optional probability section. Every colour, label and setting comes from data, with defaults.

```jsx
import SetDiagram from '@/app/components/infographics/SetDiagram/SetDiagram';

<SetDiagram data={setOperations} variant="operations" />
```

The component is a single file, `SetDiagram.jsx`. It exports `VARIANTS`, `DEFAULT_LABELS`, `DEFAULT_THEME` and `DEFAULT_OPTIONS`.
---

## Contents

1. [Variants](#variants)
2. [Props](#props)
3. [Data shape](#data-shape)
4. [Probability section](#probability-section)
5. [Interaction](#interaction)
6. [Customisation from data](#customisation-from-data)
7. [Examples](#examples)
8. [Embedding on a page](#embedding-on-a-page)
9. [Authoring tips](#authoring-tips)

---

## Variants

| Variant | Use when | What it shows |
|---|---|---|
| **operations** (default) | Set operations on two or three sets | Operation buttons, a Venn diagram with the elements in their regions, and a panel with the rule, definition, result and properties. Clicking regions builds any set. Optional probability section. |
| **count** | Inclusion–exclusion | The formula's terms as buttons, with a running total. Each region is coloured by how many times it has been counted so far. Clicking a region shows which terms count it. Optional probability section. |
| **identity** | A set law such as De Morgan's | Two diagrams side by side, one per side of the law, each built step by step. The sign between them turns into a gold "=" when both sides are finished and shade the same regions. |
| **relations** | How sets can relate | One card per relation (equal, equivalent, disjoint, overlapping, subset, partition), each with a small picture. Clicking a card shows its defining condition, an example and the key fact. |

`variant` selects the layout. An unknown value falls back to `operations`. The diagram supports **2 or 3 sets**.

---

## Props

| Prop | Type | Default | |
|---|---|---|---|
| `data` | object | — | Required. See [Data shape](#data-shape). |
| `variant` | `'operations' \| 'count' \| 'identity' \| 'relations'` | `'operations'` | |
| `labels` | object | — | A partial set of labels, merged over `DEFAULT_LABELS`. |
| `theme` | object | — | A partial theme, merged over `DEFAULT_THEME`. |
| `options` | object | — | Partial options, merged over `DEFAULT_OPTIONS`. |

Precedence: **defaults → props → data**. That is, `data.labels`, `data.theme` and `data.options` override the props.

---

## Data shape

Every variant shares the outer object:

```js
{
  header?: { kicker?, title?, lede? },   // omit header to hide it
  labels?, theme?, options?,
  // + the variant's own fields below
}
```

Every text field goes through `processContent`, so `$…$`, `**bold**` and links work everywhere.

### Region keys

A region is named by the ids of the sets it lies in, in the order of `sets`:

| Key | Region |
|---|---|
| `'A'` | only in $A$ |
| `'AB'` | in $A$ and $B$ (and not $C$, if there is a $C$) |
| `'ABC'` | in all three |
| `''` | outside every set |

With `sets: [{id:'A'},{id:'B'},{id:'C'}]`, the keys are `'A' 'B' 'C' 'AB' 'AC' 'BC' 'ABC' ''`.

### Shared by operations, count, identity

```js
sets: [{ id, label? }],        // 2 or 3; label is drawn on the diagram (default id)
universe?,                     // drawn in the corner, e.g. 'U'
regionNames?: { [key]: text }  // used wherever a region is named
```

### operations

```js
operations: [{
  id, name, notation,          // button: notation + name
  regions: [key, ...],         // the regions this operation shades
  rule?,                       // shown after "Elements that"
  formula?,                    // Definition
  result?,                     // Result
  props?,                      // Key properties
  prob?: { ... }               // see Probability section
}],
elements?: [{ label, in: [setId, ...] }],   // drawn in their region; in: [] = outside
given?,                        // a line under the diagram, e.g. the sets used
initial?,                      // id of the operation shown first (default the first)
noMatch?                       // text when the clicked regions match no operation
```

When the clicked regions match an operation exactly, that operation is shown. Otherwise the panel shows the selected regions and their elements.

### count

```js
regions: { [key]: number },    // the size of each region; '' is drawn as "26 outside"
terms: [{ label, sign: 1 | -1, sets: [setId, ...], value }],
notes?: { [k]: { label, text, warn? } }   // shown when k terms have been added; warn = gold box
```

A term counts every region that lies in all of its `sets`. The number under each region (×0, ×1, …) is the sum of the signs of the added terms that count it.

### identity

```js
laws: [{
  name,                        // tab label (tabs appear when there are 2 or more laws)
  formula, explanation,        // shown under the diagrams
  left:  { label, steps: [{ label, regions: [key, ...] }] },
  right: { label, steps: [{ label, regions: [key, ...] }] }
}]
```

Each side opens on its last step. The last step of both sides should shade the same regions.

### relations

```js
relations: [{
  kind,                        // 'equal' | 'equivalent' | 'disjoint' | 'overlap' | 'subset' | 'partition'
  name, condition,             // on the card
  definition?,                 // Defining condition (default condition)
  example?, fact?              // Example, Key distinguishing fact
}]
```

`kind` selects the small picture. The labels inside the pictures are fixed: $A$, $B$, $A = B$, and $S_1, S_2, S_3$ for a partition.

---

## Probability section

This section is optional and appears under `operations` and `count` when `data.probability` is present. Without it, both variants look exactly as before.

### Under operations

```js
probability: {
  title?,                        // default labels.probability
  regions?: { [key]: number },   // region probabilities; default: share of elements in each region
  conditions?: [{
    id, label,                   // button, e.g. 'given $B$'
    notation,                    // the part after the bar, e.g. '$B$'
    regions: [key, ...],         // the regions of the condition
    sets?: [setId, ...],         // circles drawn thick and gold
    note?                        // shown while this condition is on
  }]
}
```

Each operation can also add its own `prob` entry:

```js
prob: {
  ruleLabel?, rule?, calc?,      // shown instead of "Sum of the shaded regions"
  note?,
  notation?,                     // replaces the built notation, e.g. '$P(A \\cup B)$'
  event?                         // the event inside P(...) (default: the operation's notation)
}
```

What it shows:

- **Value:** the sum of the shaded regions' probabilities. With a condition chosen, only the shaded regions inside the condition count, and the sum is divided by the condition's probability.
- **Notation:** built automatically, e.g. $P(A \cup B)$ or $P(A \mid B)$. When the clicked regions match no operation, it reads $P(\text{selection})$.
- **Middle column:** the operation's `rule` and `calc` when it has them and no condition is chosen. Otherwise the sum of the regions as chips, e.g. 0.2 ÷ 0.4 = 0.5.
- **Condition:** a segmented switch, "none" plus one button per condition. Regions outside the condition are greyed.
- **Elements:** when there are no `elements`, the region probabilities are drawn in the diagram.

### Under count

```js
probability: {
  title?, notation?, note?,
  total?                         // divisor (default: the sum of data.regions)
}
```

It shows the running total ÷ `total`. For the selected region, it also shows that region's share.

The value is only a probability once every term has been added. Partway through the formula, the running total can exceed `total`.

---

## Interaction

**operations**

- **Operation button:** shades its regions and shows its panel.
- **Click a region:** adds it to the shaded set or removes it. Turn this off with `options.clickable: false`.
- **Hover a region:** the other regions dim (`options.hover`). Hover works with a mouse only; a tap on a phone just clicks.
- **Keyboard:** Tab moves through the regions (the others dim), Enter or Space adds or removes the region. The same keys work in `count`.
- **Condition switch** (probability): conditions everything on the chosen event.

**count**

- **Term button:** shows the formula up to and including that term. The arrows step forward and back.
- **Hover or click a region:** shows its count, how many times it has been counted, and the added terms that count it. Click the same region again to clear it.

**identity**

- **Law tabs:** switch between laws.
- **Step buttons:** show that step on its side.

**relations**

- **Click a card:** shows its details underneath.

---

## Customisation from data

All objects are exported and merged key by key, so you only pass what changes.

### `labels` (`DEFAULT_LABELS`)

| Key | Default | Used for |
|---|---|---|
| `elementsThat` | `'Elements that'` | operations panel |
| `definition`, `result`, `properties` | `'Definition'`, `'Result'`, `'Key properties'` | operations panel |
| `selection`, `regions`, `elements`, `noneSelected`, `outside` | `'Your selection'`, `'Regions'`, `'Elements'`, `'none selected'`, `'outside'` | panel for clicked regions |
| `noMatch` | `'No single operation in the list gives exactly these regions. …'` | panel for clicked regions |
| `clickHint` | `'Click a region of the diagram to add or remove it.'` | under operations |
| `runningTotal` | `'running total'` | count |
| `timesCounted` | `'Times each element is counted'` | count key |
| `tones` | `['not counted', 'counted once', 'counted twice', 'counted three times']` | count key |
| `regionLine` | `'{count} elements, counted {times} {unit} so far.'` | count region panel |
| `time`, `times` | `'time'`, `'times'` | `{unit}` |
| `noTermYet` | `'no term added yet counts it'` | count region panel |
| `countHint` | `'Click a region to see which terms …'` | count, nothing selected |
| `termsAdded` | `'{k} of {n} terms added.'` | count, no note at this step |
| `prev`, `next`, `term` | `'Previous term'`, `'Next term'`, `'term {n}'` | accessible names |
| `probability` | `'Probability'` | probability title |
| `rule`, `calc` | `'Rule'`, `'Calculation'` | probability |
| `sumOfRegions` | `'Sum of the shaded regions'` | probability |
| `condition`, `noCondition` | `'Condition'`, `'none'` | probability switch |
| `selectionNotation` | `'\\text{selection}'` | $P(\cdot)$ when no operation matches |
| `thisRegion` | `'This region'` | count probability |
| `sameRegions`, `buildBoth` | `'same regions'`, `'finish both sides'` | identity sign |
| `definingCondition`, `example`, `keyFact` | `'Defining condition'`, `'Example'`, `'Key distinguishing fact'` | relations details |
| `diagram`, `inSets`, `notInSets` | `'Venn diagram'`, `'in {sets}'`, `'not in {sets}'` | names read by screen readers for the diagram and its regions |

### `theme` (`DEFAULT_THEME`)

| Key | Default | |
|---|---|---|
| `ink`, `title`, `muted` | `#1e293b`, `#1e3a8a`, `#64748b` | text |
| `line`, `box` | `#e2e8f0`, `#c7cedb` | dividers, box borders |
| `panel`, `soft`, `headBg` | `#ffffff`, `#f8fafc`, `#eff6ff` | backgrounds |
| `navy`, `blue`, `blueSoft` | `#1e3a8a`, `#2563eb`, `#dbeafe` | buttons, accents |
| `gold`, `goldBg`, `goldInk` | `#ca8a04`, `#fef3c7`, `#a16207` | results, probability, "=" |
| `slate`, `slateBg`, `onDark` | `#475569`, `#f1f5f9`, `#ffffff` | |
| `circle`, `setLabel` | `#1e3a8a`, `#1e3a8a` | circle outlines, set names |
| `universeLine`, `universeLabel` | `#c7cedb`, `#64748b` | universe box |
| `regionFill` | `#ffffff` | unshaded region |
| `pickFill`, `pickInk`, `pickLine` | `#fde68a`, `#a16207`, `#fde68a` | shaded region, its text |
| `elementInk` | `#64748b` | unshaded elements |
| `hatch` | `#1e3a8a` | hatching on the selected region (count) |
| `veil` | `#f1f5f9` | regions outside the condition |
| `tones` | `[['#f1f5f9','#94a3b8'], ['#dbeafe','#1e3a8a'], ['#fde68a','#a16207'], ['#f59e0b','#ffffff']]` | count: `[fill, ink]` for ×0, ×1, ×2, ×3 and more |

### `options` (`DEFAULT_OPTIONS`)

| Key | Default | |
|---|---|---|
| `clickable` | `true` | regions can be clicked (operations, count) |
| `hover` | `true` | hovering a region dims the rest |
| `startAt` | `'end'` | count opens with all terms added; `'start'` opens with none |
| `key` | `true` | show the "times counted" key (count) |

---

## Examples

### operations: `set-theory/operations` → All Five Operations at a Glance

```js
const setOperations = {
  header: { kicker: 'Set operations', title: 'All Five Operations at a Glance', lede: 'Each operation consumes one or two sets and returns a new set, defined by a precise membership condition.' },
  sets: [{ id: 'A' }, { id: 'B' }],
  universe: 'U',
  regionNames: { A: 'only $A$', AB: 'both $A$ and $B$', B: 'only $B$', '': 'outside both' },
  elements: [
    { label: '1', in: ['A'] }, { label: '2', in: ['A'] }, { label: '3', in: ['A', 'B'] }, { label: '4', in: ['B'] }, { label: '5', in: ['B'] }
  ],
  given: '$A = \\{1, 2, 3\\}$, $B = \\{3, 4, 5\\}$, $U = \\{1, 2, 3, 4, 5\\}$',
  operations: [
    { id: 'union', name: 'Union', notation: '$A \\cup B$', regions: ['A', 'AB', 'B'], rule: 'belong to $A$ or $B$ (inclusive or)',
      formula: '$A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$', result: '$\\{1, 2, 3, 4, 5\\}$', props: 'commutative, associative; identity $= \\varnothing$' },
    { id: 'inter', name: 'Intersection', notation: '$A \\cap B$', regions: ['AB'], rule: 'belong to both $A$ and $B$',
      result: '$\\{3\\}$', props: 'commutative, associative; identity $= U$; empty if $A$, $B$ disjoint' },
    { id: 'comp', name: 'Complement', notation: '$A^c$', regions: ['B', ''], rule: 'are in $U$ but not in $A$ (unary operation)',
      result: '$A^c = \\{4, 5\\}$', props: '$(A^c)^c = A$; $A \\cup A^c = U$; $A \\cap A^c = \\varnothing$' },
    { id: 'diff', name: 'Set difference', notation: '$A \\setminus B$', regions: ['A'], rule: 'are in $A$ but not in $B$',
      result: '$A \\setminus B = \\{1, 2\\}$', props: 'NOT commutative: $B \\setminus A = \\{4, 5\\}$; $A \\setminus B = A \\cap B^c$' },
    { id: 'sym', name: 'Symmetric difference', notation: '$A \\triangle B$', regions: ['A', 'B'], rule: 'are in exactly one of $A$ or $B$',
      formula: '$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$', result: '$\\{1, 2, 4, 5\\}$', props: 'commutative, associative; identity $= \\varnothing$; $A \\triangle A = \\varnothing$' }
  ]
};
```

### operations + probability: `probability/calculators/two-events` → independent events

```js
const twoEvents = {
  header: { kicker: 'Two events', title: 'Probabilities of two independent events', lede: 'For $P(A) = 0.5$ and $P(B) = 0.4$: every probability as a region of the diagram.' },
  sets: [{ id: 'A' }, { id: 'B' }],
  universe: 'U',
  regionNames: { A: 'only $A$', AB: 'both $A$ and $B$', B: 'only $B$', '': 'neither' },
  operations: [
    { id: 'a', name: 'Event A', notation: '$A$', regions: ['A', 'AB'], rule: 'belong to $A$' },
    { id: 'b', name: 'Event B', notation: '$B$', regions: ['AB', 'B'], rule: 'belong to $B$' },
    { id: 'and', name: 'Intersection', notation: '$A \\cap B$', regions: ['AB'], rule: 'belong to both $A$ and $B$',
      prob: { ruleLabel: 'Multiplication rule for independence', rule: '$P(A \\cap B) = P(A) \\times P(B)$', calc: '$0.5 \\times 0.4 = 0.2$' } },
    { id: 'or', name: 'Union', notation: '$A \\cup B$', regions: ['A', 'AB', 'B'], rule: 'belong to $A$ or $B$ (inclusive or)',
      prob: { ruleLabel: 'Addition rule', rule: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$', calc: '$0.5 + 0.4 - 0.2 = 0.7$' } }
  ],
  probability: {
    regions: { A: 0.3, AB: 0.2, B: 0.2, '': 0.3 },
    conditions: [
      { id: 'b', label: 'given $B$', notation: '$B$', regions: ['AB', 'B'], sets: ['B'],
        note: '$P(A \\mid B) = P(A)$: knowing one event occurred provides no information about the other.' }
    ]
  }
};
```

### count: `combinatorics/inclusion-exclusion` → Three Sets

```js
const threeSets = {
  header: { kicker: 'Inclusion–exclusion', title: 'Three Sets', lede: 'Among the integers from 1 to 100, how many are divisible by 2, 3, or 5?' },
  sets: [{ id: 'A', label: 'A: ×2' }, { id: 'B', label: 'B: ×3' }, { id: 'C', label: 'C: ×5' }],
  regions: { A: 27, B: 14, C: 7, AB: 13, AC: 7, BC: 3, ABC: 3, '': 26 },
  regionNames: { A: 'only $A$', B: 'only $B$', C: 'only $C$', AB: '$A \\cap B$ only', AC: '$A \\cap C$ only', BC: '$B \\cap C$ only', ABC: '$A \\cap B \\cap C$' },
  terms: [
    { label: '$|A|$', sign: 1, sets: ['A'], value: 50 },
    { label: '$|B|$', sign: 1, sets: ['B'], value: 33 },
    { label: '$|C|$', sign: 1, sets: ['C'], value: 20 },
    { label: '$|A \\cap B|$', sign: -1, sets: ['A', 'B'], value: 16 },
    { label: '$|A \\cap C|$', sign: -1, sets: ['A', 'C'], value: 10 },
    { label: '$|B \\cap C|$', sign: -1, sets: ['B', 'C'], value: 6 },
    { label: '$|A \\cap B \\cap C|$', sign: 1, sets: ['A', 'B', 'C'], value: 3 }
  ],
  notes: {
    3: { label: 'After the singles', text: 'An element in exactly two sets is counted twice by the singles; an element in all three is counted three times.' },
    6: { label: 'Forgetting the triple intersection', warn: true, text: 'Stopping after the pairs gives $50 + 33 + 20 - 16 - 10 - 6 = 71$: the multiples of 30 are added three times and subtracted three times, so they are not counted at all.' },
    7: { label: 'Every element counted once', text: 'Adding $|A \\cap B \\cap C| = 3$ back gives $74$. Net count for an element in all three: $3 - 3 + 1 = 1$.' }
  },
  probability: { total: 100 }   // optional
};
```

### identity: `set-theory/rules` → De Morgan's Laws

```js
const deMorgan = {
  header: { kicker: 'Laws of set algebra', title: 'De Morgan’s Laws', lede: 'Build each side step by step: both end on the same regions.' },
  sets: [{ id: 'A' }, { id: 'B' }],
  universe: 'U',
  laws: [
    { name: 'De Morgan’s Law for Union', formula: '$(A \\cup B)^c = A^c \\cap B^c$', explanation: 'The complement of a union is the intersection of the complements.',
      left: { label: '$(A \\cup B)^c$', steps: [{ label: '$A \\cup B$', regions: ['A', 'AB', 'B'] }, { label: '$(A \\cup B)^c$', regions: [''] }] },
      right: { label: '$A^c \\cap B^c$', steps: [{ label: '$A^c$', regions: ['B', ''] }, { label: '$B^c$', regions: ['A', ''] }, { label: '$A^c \\cap B^c$', regions: [''] }] } },
    { name: 'De Morgan’s Law for Intersection', formula: '$(A \\cap B)^c = A^c \\cup B^c$', explanation: 'The complement of an intersection is the union of the complements.',
      left: { label: '$(A \\cap B)^c$', steps: [{ label: '$A \\cap B$', regions: ['AB'] }, { label: '$(A \\cap B)^c$', regions: ['A', 'B', ''] }] },
      right: { label: '$A^c \\cup B^c$', steps: [{ label: '$A^c$', regions: ['B', ''] }, { label: '$B^c$', regions: ['A', ''] }, { label: '$A^c \\cup B^c$', regions: ['A', 'B', ''] }] } }
  ]
};
```

### relations: `set-theory/relationships` → How Sets Relate

```js
const howSetsRelate = {
  header: { kicker: 'Set relationships', title: 'How Sets Relate', lede: 'Five ways two sets, or the pieces of one set, can stand to each other.' },
  relations: [
    { kind: 'equal', name: 'Equal sets', condition: '$A = B$', definition: 'same elements: $\\forall x\\,(x \\in A \\iff x \\in B)$', example: '$\\{1, 2, 3\\} = \\{3, 1, 2\\}$', fact: 'proved by mutual subset containment ($A \\subseteq B$ and $B \\subseteq A$)' },
    { kind: 'equivalent', name: 'Equivalent sets', condition: '$|A| = |B|$', definition: 'same cardinality: $|A| = |B|$, written $A \\sim B$', example: '$\\{a, b, c\\} \\sim \\{1, 2, 3\\}$; $\\mathbb{N} \\sim \\mathbb{Z}$', fact: 'equal $\\Rightarrow$ equivalent, but not the other way around' },
    { kind: 'disjoint', name: 'Disjoint sets', condition: '$A \\cap B = \\varnothing$', definition: 'no common elements: $A \\cap B = \\varnothing$', example: '$\\{1, 2, 3\\}$ and $\\{4, 5, 6\\}$; evens and odds', fact: 'called "mutually exclusive" in probability' },
    { kind: 'overlap', name: 'Overlapping sets', condition: '$A \\cap B \\neq \\varnothing$', definition: '$A \\cap B \\neq \\varnothing$, $A \\not\\subseteq B$, $B \\not\\subseteq A$', example: '$\\{1, 2, 3\\}$ and $\\{2, 3, 4\\}$', fact: 'both $A \\setminus B$ and $B \\setminus A$ are non-empty (lens-shaped Venn intersection)' },
    { kind: 'partition', name: 'Partition (of $S$)', condition: 'pieces cover $S$ once', definition: 'non-empty, pairwise disjoint subsets whose union $= S$', example: '$\\{\\text{evens}, \\text{odds}\\}$ of $\\mathbb{Z}$; residue classes mod $n$', fact: 'every element of $S$ belongs to exactly one piece' }
  ]
};
```

This example uses five of the six kinds. The sixth, `subset`, works the same way.

### Customised from data

```js
{
  ...setOperations,
  theme: { pickFill: '#bfdbfe', pickInk: '#1e3a8a', veil: '#e2e8f0' },
  labels: { elementsThat: 'Contains the elements that', clickHint: 'Click regions to build your own set.' },
  options: { hover: false }
}
```

---

## Embedding on a page

Use the same pattern as the other infographics: place it in the section's `content` array, wrapped in `DiagramFrame`.

```jsx
<DiagramFrame
  key="obj8-diagram"
  id="set-operations-summary"
  title="All Five Operations at a Glance"
  source="/set-theory/operations"
>
  <SetDiagram data={setOperations} variant="operations" />
</DiagramFrame>
```

Good homes:

- **operations:** `set-theory/operations`, where the summary table maps onto the operations. Add `probability` on `probability/calculators/two-events` and on pages about the addition rule or conditional probability.
- **count:** `combinatorics/inclusion-exclusion`. Add `probability` when the page asks for a probability rather than a count.
- **identity:** `set-theory/rules`, which covers De Morgan's laws, distributivity and absorption.
- **relations:** `set-theory/relationships` (its summary table).

---

## Authoring tips

- **Region keys follow the order of `sets`:** with `A, B, C`, write `'AC'`, not `'CA'`.
- **Many elements:** a region holds a few rows of elements (5 in a two-set circle, 4 in the overlap, 2 or 3 with three sets). Extra elements continue in further columns, so keep labels short.
- **Check `regions` against the page:** in `count`, the region sizes must add up to the set sizes in `terms`. For example, $|A| = 27 + 13 + 7 + 3 = 50$.
- **Probability regions:** give `probability.regions` when the page gives probabilities. They should sum to 1. Leave them out when the elements are equally likely.
- **Rules from the page:** put the page's rule and worked calculation in an operation's `prob`. Without them, the section shows the sum of the regions.
- **identity:** make every intermediate expression a step, so a reader can see where the sides differ before they meet.
- **Escaping:** in JS strings, escape backslashes in LaTeX (`'\\cup'`, `'\\varnothing'`).
