# MathDerivation

A React component for rendering structured mathematical proofs, formula derivations, and step-by-step transformations with optional commentary, references, and interactive accordions.

Part of the **learnmathclass.com** math explanation system alongside `MathWorkflow` (visual calculation diagrams). While `MathWorkflow` shows *how* a computation flows (boxes, arrows, branches), `MathDerivation` shows *why* each transformation is valid (steps, references, passages).

---

## Import

```jsx
import MathDerivation from "@/components/math-derivations/MathDerivation";
```

The component uses `processContent` from `@/utils/contentProcessor` internally to render all text content (formulas, labels, descriptions). This handles LaTeX, special characters, and other math formatting automatically.

---

## Quick start

### Minimal usage — bare component, no props

```jsx
<MathDerivation />
```

Renders a default 3-step linear equation solve. The component never crashes with missing or empty props.

### Basic usage — just steps

```jsx
<MathDerivation
  items={[
    { expr: "2x + 3 = 11" },
    { expr: "2x = 8", operation: "subtract 3" },
    { expr: "x = 4", operation: "divide by 2" },
  ]}
/>
```

### Full usage — all features

```jsx
<MathDerivation
  variant="proof"
  title="Derivation of the quadratic formula"
  passageStyle="bar"
  showStepNumbers={true}
  compact={false}
  prerequisites={[
    { type: "definition", name: "quadratic equation" },
    { type: "axiom", name: "field properties of reals" },
  ]}
  items={[
    { expr: "ax² + bx + c = 0", tag: "given", note: "a ≠ 0" },
    { passage: "motivation", content: "We want to isolate x..." },
    { expr: "x² + (b/a)x = −c/a", operation: "subtract c, divide by a" },
    // ...more items
  ]}
  conclusion="The quadratic formula provides solutions for any second-degree polynomial."
/>
```

---

## Top-level props

All props are optional. The component destructures them internally with defaults.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `(step \| passage)[]` | 3-step default | The flat list of steps and passages. This is the main content. |
| `variant` | `"proof"` \| `"rail"` | `"proof"` | Layout variant. See **Variants** section. |
| `title` | `string` | `""` | Derivation title, rendered above everything. |
| `prerequisites` | `reference[]` | `undefined` | Array of reference objects shown before step 1. See **reference object**. |
| `conclusion` | `string` | `undefined` | Text shown after the last step in a bordered block. |
| `passageStyle` | `string` | `"bar"` | How passages render visually. See **Passage styles**. |
| `showStepNumbers` | `boolean` | `true` | Whether step numbers appear. Passages never get numbers regardless. |
| `compact` | `boolean` | `false` | Reduces spacing and font sizes for embedding in tight layouts. |

### Prop override pattern

You can spread a data object and override individual props:

```jsx
const myData = { title: "My proof", variant: "proof", items: [...] };

// Use as-is
<MathDerivation {...myData} />

// Override variant to rail, keep everything else
<MathDerivation {...myData} variant="rail" />

// Override multiple
<MathDerivation {...myData} variant="rail" passageStyle="bubble" compact={true} />
```

---

## Items array

The `items` prop is a single flat array containing two types of objects mixed in any order: **steps** and **passages**. The component distinguishes them by checking which key is present:

- Has `expr` → it is a **step** (a formula line)
- Has `passage` → it is a **passage** (commentary between steps)

There is no limit on how many of each, and they can alternate freely:

```jsx
items={[
  { expr: "..." },           // step
  { expr: "..." },           // step
  { passage: "recall", content: "..." },  // passage
  { expr: "..." },           // step
  { passage: "warning", content: "..." }, // passage
  { passage: "remark", content: "..." },  // passage (consecutive passages are fine)
  { expr: "..." },           // step
]}
```

---

## Step object

A step represents one line of mathematics — a formula being transformed.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `expr` | `string` | **yes** | The formula. Rendered through `processContent` in monospace. |
| `operation` | `string` | no | Short action label: "subtract 3", "divide by a". Always visible, italic, inline with the formula. |
| `basedOn` | `justification[]` | no | Array of formal justifications rendered as colored badges. Always visible. See **basedOn object**. |
| `detail` | `string` | no | Extended prose explanation. Hidden by default behind a "why?" accordion toggle. |
| `substeps` | `substep[]` | no | Array of `{ label?, expr }` pairs. Hidden by default behind a "substeps" accordion toggle. For showing messy intermediate algebra without cluttering the main flow. |
| `highlights` | `string[]` | no | Array of substrings within `expr` that should be visually highlighted (blue text + blue background). Used to mark what changed from the previous step. |
| `group` | `string` | no | Group key. Consecutive items (steps or passages) sharing the same `group` value get wrapped in a labeled visual block. The group label is the string value itself. |
| `tag` | `string` | no | Visual importance tag. One of: `"given"`, `"goal"`, `"key"`, `"routine"`, `"assumption"`, `"conclusion"`. Each has a distinct color treatment. |
| `note` | `string` | no | Short margin annotation for caveats or side comments. Rendered with warning colors, pushed to the right. Example: `"a ≠ 0"`. |

### Step examples

**Minimal step** — just a formula:

```jsx
{ expr: "x = 4" }
```

**Step with operation and tag:**

```jsx
{ expr: "2x = 8", operation: "subtract 3", tag: "routine" }
```

**Step with references:**

```jsx
{
  expr: "x + b/2a = ± √(b² − 4ac) / 2a",
  operation: "take square root",
  basedOn: [
    { type: "property", name: "√(a/b) = √a / √b" },
    { type: "step", step: 5 },
  ],
}
```

**Step with highlights:**

```jsx
{
  expr: "x² + (b/a)x + b²/4a² = −c/a + b²/4a²",
  operation: "add (b/2a)² to both sides",
  highlights: ["b²/4a²"],
}
```

The substring `"b²/4a²"` will appear highlighted wherever it occurs in `expr`. If the same substring appears multiple times (as it does here — on both sides of the equation), each occurrence is highlighted.

**Step with detail accordion:**

```jsx
{
  expr: "x² + (b/a)x + b²/4a² = −c/a + b²/4a²",
  operation: "add (b/2a)² to both sides",
  tag: "key",
  detail: "To complete the square, we need the left side to become a perfect square trinomial. Half the coefficient of x is b/2a, and squaring it gives b²/4a². Adding this to both sides preserves equality.",
}
```

A "why?" button appears below the step. Clicking it toggles the detail text open/closed with an animated slide.

**Step with substeps accordion:**

```jsx
{
  expr: "(x + b/2a)² = (b² − 4ac) / 4a²",
  operation: "factor left, simplify right",
  substeps: [
    { label: "left", expr: "x² + 2·(b/2a)·x + (b/2a)² = (x + b/2a)²" },
    { label: "right", expr: "−c/a + b²/4a² = (−4ac + b²) / 4a²" },
  ],
}
```

A "substeps" button appears. Clicking it reveals the intermediate algebra lines. Each substep has an optional `label` (like "left:", "right:") and a required `expr`.

**Maximal step — everything at once:**

```jsx
{
  expr: "x² + (b/a)x + b²/4a² = −c/a + b²/4a²",
  operation: "add (b/2a)² to both sides",
  basedOn: [
    { type: "identity", name: "(a+b)² = a²+2ab+b²", link: "/algebra/binomial-square" },
    { type: "step", step: 2 },
  ],
  detail: "To complete the square, we need the left side...",
  substeps: [
    { label: "left", expr: "x² + 2·(b/2a)·x + (b/2a)² = (x + b/2a)²" },
    { label: "right", expr: "−c/a + b²/4a² = (b² − 4ac)/4a²" },
  ],
  highlights: ["b²/4a²"],
  group: "Completing the square",
  tag: "key",
  note: "a ≠ 0",
}
```

All fields are independent and composable. The rendering order within a step is:
1. Step number (if `showStepNumbers` is true)
2. Formula (`expr`) with highlights applied
3. Operation label (inline)
4. Tag badge (inline)
5. Note (pushed right)
6. Q.E.D. marker (only on the last step)
7. basedOn badge row (below the formula line)
8. "why?" accordion (if `detail` is present)
9. "substeps" accordion (if `substeps` is present)

---

## Passage object

A passage is a commentary block that sits between steps. It provides context, reminders, warnings, or insight — the voice of the teacher between the math.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `passage` | `string` | **yes** | The passage type. Determines the badge color and left bar color. One of: `"recall"`, `"motivation"`, `"remark"`, `"warning"`, `"intuition"`, `"alternative"`, `"transition"`. |
| `content` | `string` | **yes** | The commentary text. Rendered through `processContent` in italic. |
| `basedOn` | `justification[]` | no | Same as step — colored reference badges. Always visible. |
| `detail` | `string` | no | Extended explanation, hidden behind a "more" accordion toggle. |
| `note` | `string` | no | Margin annotation, same as step. |
| `group` | `string` | no | Group key, same as step. A passage can be grouped with surrounding steps. |

### Passage types

| Type | Purpose | Color family |
|------|---------|-------------|
| `recall` | Bring in a needed identity or prior result | Purple |
| `motivation` | Explain why we are about to do something | Blue |
| `remark` | Neutral observation or comment | Gray |
| `warning` | Caveat, restriction, or common mistake | Red |
| `intuition` | Geometric or conceptual interpretation | Teal/green |
| `alternative` | Mention a different approach | Amber |
| `transition` | Signal a shift in strategy or method | Pink |

### Passage examples

**Minimal passage:**

```jsx
{ passage: "remark", content: "The coefficient is already positive." }
```

**Passage with references:**

```jsx
{
  passage: "recall",
  content: "We need the square of a binomial expansion.",
  basedOn: [
    { type: "identity", name: "(a+b)² = a²+2ab+b²", link: "/algebra/binomial-square" },
    { type: "property", name: "symmetric property of equality" },
  ],
}
```

**Passage with detail accordion:**

```jsx
{
  passage: "warning",
  content: "Division by a is only valid when a ≠ 0.",
  detail: "If a = 0 the equation degenerates to bx + c = 0, which is linear and solved differently.",
}
```

**Passage in a group with steps:**

```jsx
items={[
  {
    passage: "recall",
    content: "Difference of squares pattern.",
    group: "Factoring",
    basedOn: [{ type: "identity", name: "a² − b² = (a+b)(a−b)" }],
  },
  {
    expr: "x² − 9 = (x+3)(x−3)",
    operation: "apply identity",
    group: "Factoring",
  },
]}
```

Both items share `group: "Factoring"` and will be wrapped together in a labeled block.

### What passages do NOT have (and why)

| Field | Why not |
|-------|---------|
| `operation` | Passages don't perform mathematical actions. The passage type itself (`recall`, `warning`) serves this role. |
| `highlights` | Highlights mark what changed between formula lines. Passages have no formula to diff against. |
| `substeps` | If a passage needs sub-formulas, it is becoming a step. Keep the boundary clean. |
| `tag` | Passages already have their own type system (`recall`, `warning`, etc.) which serves the same visual purpose as tags. |

---

## basedOn object (justification)

Used in both steps and passages. Renders as a row of colored inline badges below the formula or passage text. Always visible — not hidden in an accordion.

The `type` field determines which other fields are relevant:

### Reference types (theorem, axiom, lemma, identity, property, definition)

```jsx
{ type: "theorem", name: "Pythagorean theorem" }
{ type: "theorem", name: "Pythagorean theorem", link: "/geometry/pythagorean" }
{ type: "axiom", name: "field properties of reals" }
{ type: "lemma", name: "Bezout's identity" }
{ type: "identity", name: "(a+b)² = a²+2ab+b²", link: "/algebra/binomial-square" }
{ type: "property", name: "√(a/b) = √a / √b" }
{ type: "definition", name: "quadratic equation" }
```

Each type has a distinct badge color. If `link` is present, the badge becomes a clickable link with a dotted underline and ↗ arrow.

### Back-reference (step)

```jsx
{ type: "step", step: 4 }
```

Renders as: `← step 4`. Used when a step depends on a result from an earlier numbered step.

### Citation (cite)

```jsx
{ type: "cite", text: "Euclid, Elements, Book I, Prop. 47" }
```

Renders in italic with a muted background. For external source attribution.

### Badge colors by type

| Type | Background | Text |
|------|-----------|------|
| `theorem` | Light purple | Dark purple |
| `axiom` | Light gray | Dark gray |
| `lemma` | Light pink | Dark pink |
| `identity` | Light teal | Dark teal |
| `property` | Light blue | Dark blue |
| `definition` | Light amber | Dark amber |
| `step` | Light gray | Muted gray |
| `cite` | Light gray | Muted gray, italic |

---

## Tag values

Tags control the visual treatment of a step card. Each step can have at most one tag.

| Tag | Meaning | Visual |
|-----|---------|--------|
| `"given"` | Starting equation or known fact | Gray badge |
| `"goal"` | What we are trying to prove or find | Blue badge |
| `"key"` | The critical insight or pivotal step | Amber badge, text: "key step" |
| `"routine"` | Straightforward algebra, nothing surprising | Muted badge with border |
| `"assumption"` | Something assumed but not proven here | Pink badge |
| `"conclusion"` | The final result | Green badge |

The last step in the items array automatically receives a result row treatment (blue background, Q.E.D. marker) regardless of its tag.

---

## Variants

### `"proof"` (default)

Each step is a bordered card. Passages sit between cards. Step numbers appear on the left. Groups wrap cards in a labeled block with a blue left border.

Best for: formal proofs, detailed derivations, anything that benefits from clear visual separation between steps.

```jsx
<MathDerivation variant="proof" items={[...]} />
```

### `"rail"`

A vertical timeline with dots connected by a rail line. Each step is a dot + formula + operation pill. Simpler, more compact, emphasizes the flow.

Best for: short derivations, quick equation solves, anywhere space is tight.

```jsx
<MathDerivation variant="rail" items={[...]} />
```

Both variants support all features (passages, basedOn, accordions, groups). The visual treatment adapts to the variant.

---

## Passage styles

Controls how passage blocks render between steps. Set via the `passageStyle` prop. All styles show the same content — only the visual container changes.

| Style | Description |
|-------|-------------|
| `"bar"` | Colored left border strip. Content flows inline with badge. Default. |
| `"indent"` | Indented block with muted background, rounded corners. |
| `"band"` | Full-width tinted stripe with top/bottom borders. |
| `"bubble"` | Speech bubble callout, indented, max-width 85%. |
| `"inline"` | Minimal — just badge + text, no container. |
| `"dashed"` | Dashed border box, rounded corners. |

```jsx
<MathDerivation passageStyle="bubble" items={[...]} />
```

The passage style is global — all passages in a derivation use the same style. To compare styles visually, render the same data with different `passageStyle` values.

---

## Grouping

Consecutive items (steps and/or passages) that share the same `group` string value are automatically wrapped in a labeled block.

```jsx
items={[
  { expr: "...", group: "Completing the square" },
  { expr: "...", group: "Completing the square" },
  { expr: "..." },  // not grouped — breaks the group
]}
```

Steps 1 and 2 will be wrapped in a block labeled "Completing the square". Step 3 stands alone.

**Rules:**
- The group label is the `group` string value itself.
- Only *consecutive* items with the same key are grouped. If the key reappears later after a gap, it starts a new group.
- Both steps and passages can participate in the same group.
- Groups are purely visual — they don't affect step numbering.

---

## Highlights

The `highlights` field takes an array of substrings. Each occurrence of each substring within `expr` is rendered with a blue highlight (blue text + light blue background).

```jsx
{
  expr: "x² + (b/a)x + b²/4a² = −c/a + b²/4a²",
  highlights: ["b²/4a²"],
}
```

Both occurrences of `"b²/4a²"` will be highlighted. The matching is exact substring match, left-to-right. If a highlight substring is not found in `expr`, it is silently skipped.

---

## Accordions

Two types of expandable content, both triggered by a toggle button below the step:

### "why?" accordion (`detail` field)

Shows extended prose explanation. Toggle text alternates between "why?" and the close state. Content slides open/closed with a CSS transition.

```jsx
{ expr: "...", detail: "Because the left side must be a perfect square..." }
```

### "substeps" accordion (`substeps` field)

Shows intermediate algebra lines. Each substep is `{ label?, expr }`.

```jsx
{
  expr: "...",
  substeps: [
    { label: "left", expr: "x² + 2·(b/2a)·x + (b/2a)² = (x + b/2a)²" },
    { label: "right", expr: "−c/a + b²/4a² = (b² − 4ac)/4a²" },
  ],
}
```

Both accordions can appear on the same step. They render independently.

Passages can also have a `detail` accordion (toggled by "more" instead of "why?"), but cannot have `substeps`.

---

## Prerequisites

The `prerequisites` prop takes an array of reference objects (same structure as basedOn, but without `type: "step"` or `type: "cite"`). Rendered as a row of badges above the first step.

```jsx
<MathDerivation
  prerequisites={[
    { type: "definition", name: "quadratic equation" },
    { type: "axiom", name: "field properties of reals" },
  ]}
  items={[...]}
/>
```

---

## Conclusion

The `conclusion` prop takes a string rendered in a bordered block below the last step.

```jsx
<MathDerivation
  items={[...]}
  conclusion="The quadratic formula provides solutions for any second-degree polynomial equation."
/>
```

---

## Full schema reference

```
derivation
├── items[]
│     ├── step
│     │     ├── expr .............. required
│     │     ├── operation ........ optional
│     │     ├── basedOn[] ........ optional, visible badges
│     │     │     └── { type, name?, step?, text?, link? }
│     │     ├── detail ........... optional, accordion
│     │     ├── substeps[] ....... optional, accordion
│     │     │     └── { label?, expr }
│     │     ├── highlights[] ..... optional
│     │     ├── group ............ optional, string key
│     │     ├── tag .............. optional (given|goal|key|routine|assumption|conclusion)
│     │     └── note ............. optional
│     │
│     └── passage
│           ├── passage .......... required (recall|motivation|remark|warning|intuition|alternative|transition)
│           ├── content .......... required
│           ├── basedOn[] ........ optional, visible badges
│           │     └── { type, name?, step?, text?, link? }
│           ├── detail ........... optional, accordion
│           ├── note ............. optional
│           └── group ............ optional, string key
│
├── prerequisites[] .............. optional, reference[]
│     └── { type, name, link? }
├── conclusion ................... optional
├── variant ...................... optional (rail|proof)
├── passageStyle ................. optional (bar|indent|band|bubble|inline|dashed)
├── title ........................ optional
├── showStepNumbers .............. optional, default: true
└── compact ...................... optional, default: false
```

---

## Relationship to MathWorkflow

Both components are part of the same math explanation system. They serve different purposes and can be used independently or together on the same page.

| | MathWorkflow | MathDerivation |
|---|---|---|
| **Shows** | How a computation flows | Why each transformation is valid |
| **Rendering** | SVG (boxes, arrows, branches) | JSX (cards, badges, accordions) |
| **Structure** | Single `type` + `data` object per pattern | Flat `items[]` array of steps and passages |
| **Patterns** | 10 types (linear, tree, parallel, etc.) | 2 variants (proof, rail) × 6 passage styles |
| **Interactivity** | None (static diagrams) | Accordions for detail and substeps |
| **Use case** | "Show me the calculation" | "Prove this formula" |

A typical page might use `MathWorkflow` to show the big picture of a calculation, then `MathDerivation` below it to walk through the formal proof of why each step works.