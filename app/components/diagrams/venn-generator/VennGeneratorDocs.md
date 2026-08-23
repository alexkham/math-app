<!-- # VennGenerator

Expression-driven Venn diagram builder for 2 to 5 sets.

Type a set expression, and every region of the diagram is tested against it. The
regions that satisfy it get filled. Nothing is written per operation — union,
difference, symmetric difference, complement, and any nesting of them all fall
out of the same evaluator.

---

## Files

```
components/venn-diagrams/
├── VennGenerator.jsx           component + engine   (1486 lines)
└── vennGeneratorContent.js     explanations + presets (190 lines)
```

Both go in the same folder. Split only because the first crossed 1500 lines with
the content inline.

### Before first run

`VennGenerator.jsx` line 18:

```js
import { processContent } from '../../../utils/contentProcessor';
```

Fix that path. If it is wrong the whole module fails to load and `VennGenerator`
is `undefined` in its consumers, with a runtime error that names the consumer
rather than this file.

---

## Quick start

```jsx
import VennGenerator from './venn-diagrams/VennGenerator';

export default function Page() {
  return <VennGenerator />;
}
```

That gives 2 sets, `A ∩ B`, all panels, drag enabled, copy config hidden.

Public-facing, no authoring controls:

```jsx
<VennGenerator
  initialSetCount={3}
  initialExpression="A ∩ (B ∪ C)"
  showStyleTab={false}
  showCopyConfig={false}
/>
```

Authoring mode, for building scenarios to paste into the explorers:

```jsx
<VennGenerator showCopyConfig showExplanationId />
```

Read-only figure, no controls at all:

```jsx
<VennGenerator
  initialExpression="(A ∪ B)ᶜ"
  enableDrag={false}
  showSetCount={false}
  showCompare={false}
  showLibrary={false}
  showElementsTab={false}
  showStyleTab={false}
  showExport={false}
/>
```

---

## Props

### Initial state

These seed component state on mount. They are **not** controlled — changing them
later does not update a mounted component. Remount with a `key` if you need that.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `initialSetCount` | `2 \| 3 \| 4 \| 5` | `2` | Clamped to 2–5 |
| `initialExpression` | `string` | `'A ∩ B'` | Any parseable expression |
| `initialCompare` | `string` | `''` | Second expression for the ≡ check |
| `initialElements` | `string` | see below | One set per line |

Default `initialElements`:

```
A = 1, 2, 3, 7, 9
B = 3, 4, 5, 9
U = 6, 8
```

### Canvas

| Prop | Type | Default | Notes |
|---|---|---|---|
| `width` | `number` | `600` | SVG viewBox width |
| `height` | `number` | `460` | SVG viewBox height |
| `margin` | `number` | `14` | Inset of the universe rectangle |

The SVG is `width: 100%; max-width: 620px` in CSS, so `width` and `height` set
the coordinate system and aspect ratio, not the rendered pixel size. Changing
them past roughly ±25% will need the 4- and 5-set layout constants retuned.

### Visibility

Every panel can be switched off independently.

| Prop | Type | Default | Controls |
|---|---|---|---|
| `showCopyConfig` | `boolean` | **`false`** | Copy config button. Authoring aid — leave off in production |
| `showSetCount` | `boolean` | `true` | The 2/3/4/5 switcher and its explanation |
| `showCompare` | `boolean` | `true` | Second expression field and the ≡ / ≢ verdict |
| `showLibrary` | `boolean` | `true` | Library tab: presets and relation layouts |
| `showElementsTab` | `boolean` | `true` | Elements tab |
| `showStyleTab` | `boolean` | `true` | Style tab |
| `showExplanation` | `boolean` | `true` | The explanation panel under the diagram |
| `showExplanationId` | `boolean` | `false` | Small tag naming which explanation fired. Debug aid |
| `showExport` | `boolean` | `true` | Download SVG and Download PNG buttons |
| `enableDrag` | `boolean` | `true` | Dragging curves by their outline |

If all three tab flags are false the tab panel does not render.
If `showExport` and `showCopyConfig` are both false, the export bar does not render.

### Content

| Prop | Type | Default | Notes |
|---|---|---|---|
| `theme` | `object` | `null` | Shallow-merged over `DEFAULT_THEME` |
| `explanations` | `object` | `null` | Overrides `DEFAULT_EXPLANATIONS` by id |
| `geometryNotes` | `object` | `null` | Overrides `DEFAULT_GEOMETRY_NOTES` by key |
| `presets` | `object` | `null` | Replaces `DEFAULT_PRESETS`, keyed by set count |

### Output

| Prop | Type | Default | Notes |
|---|---|---|---|
| `onChange` | `(config) => void` | `null` | Fires on every state change |
| `className` | `string` | `''` | Appended to the root class |

---

## `theme`

Shallow-merged over the defaults. Values here seed the Style tab controls, so a
user can still change highlight colour, outline, and opacity afterwards unless
you hide that tab.

```js
{
  color: '#2f4fd8',            // highlight fill
  opacity: 0.82,               // highlight opacity
  neutralFill: '#ffffff',      // unhighlighted regions (2-set only)
  stroke: '#1e293b',           // curve outlines
  strokeWidth: 1.5,
  universeStroke: '#c2ccd8',   // the U rectangle
  labelColor: '#334155',       // element chips in unhighlighted regions
  mutedLabelColor: '#94a3b8'   // region labels in unhighlighted regions
}
```

To match the explorers, pass `{ color: '#2563eb', opacity: 0.85 }`.

---

## `onChange` and the serializer

`onChange` receives the full diagram state on every change. The serializer runs
whether or not the copy button is shown.

```js
{
  sets: ['A', 'B', 'C'],
  expression: 'A ∩ (B ∪ C)',
  compare: null,
  highlight: ['A∩B', 'A∩C', 'A∩B∩C'],
  shapes: {
    A: { cx: 300, cy: 172, rx: 112, ry: 112, rot: 0 },
    B: { cx: 249, cy: 267, rx: 112, ry: 112, rot: 0 },
    C: { cx: 351, cy: 267, rx: 112, ry: 112, rot: 0 }
  },
  theme: { color: '#2f4fd8', opacity: 0.82, stroke: '#1e293b', strokeWidth: 1.5 },
  universe: true,
  elements: 'A = 1, 2, 3\nB = 3, 4'
}
```

`highlight` uses `∩`-joined region keys, matching `VennCoreEnhanced`. Paste it
straight into an explorer scenario.

Use `onChange` for share links, save and restore, or an "embed this" snippet.

```jsx
const [cfg, setCfg] = useState(null);
<VennGenerator onChange={setCfg} />
```

`onChange` is held in a ref internally, so an inline arrow function will not
cause an update loop.

---

## Expression syntax

### Operators

| Operation | Symbol | ASCII aliases |
|---|---|---|
| Intersection | `∩` | `&` |
| Union | `∪` | `\|` `+` |
| Difference | `\` | `−` `-` |
| Symmetric difference | `⊕` | `Δ` `△` |
| Complement, postfix | `ᶜ` | `'` `′` `*` `^c` |
| Complement, prefix | `¬` | `~` `!` |
| Grouping | `( )` | |
| Universe | `U` | |
| Empty set | `∅` | |

Set names are single letters `A` to `E`, case-insensitive. `U` is always the
universe, never a set name.

### Precedence

Loosest binding first:

1. `∪` `⊕`
2. `∩` `\`
3. `¬` prefix, `ᶜ` postfix
4. atoms

So `A ∩ B ∪ C` parses as `(A ∩ B) ∪ C`. Parenthesize when in doubt.

`A \ B` is rewritten to `A ∩ ¬B` at parse time — difference is not a separate
node type.

### Errors

Unparseable input leaves the previous drawing on screen, marks the field red,
prints the message under it, and switches the explanation to `error`. Nothing
throws out of the component.

---

## Elements

Free text, one set per line:

```
A = 1, 2, 3, 7, 9
B = 3, 4, 5, 9
U = 6, 8
```

- Separators: `=` or `:` after the set letter; `,` or `;` between values.
- Values are strings. `3` appearing under both `A` and `B` is one element in `A∩B`.
- `U` holds elements outside every set.
- A value listed only under a set that is not currently drawn lands outside.
- Lines that do not match are ignored.

Placement is computed, never manual. The plane is grid-sampled once, each sample
bucketed by its region mask, then chips are packed into the correct bucket with a
decreasing minimum-distance filter so they do not collide. Move a curve and every
element re-homes itself.

---

## Explanations

The panel under the diagram is written from state, not looked up from your text.
`A ∩ B`, `B ∩ A`, and `(Aᶜ ∪ Bᶜ)ᶜ` all resolve to the same explanation because
matching is on **which regions are selected**, not on the string.

### Resolution order

First match wins.

| # | Id | When |
|---|---|---|
| 1 | `error` | Expression will not parse |
| 1 | `unknown-set` | Parses, but names a set the diagram does not have |
| 2 | `empty` | Expression field is blank |
| 3 | `identity-holds` | Compare field holds a valid expression selecting the same regions |
| 4 | `identity-fails` | Compare field holds a valid expression selecting different regions |
| 5 | `nothing` | Selects zero regions |
| 6 | `everything` | Selects every region |
| 7 | *named* | Selection matches an entry in `NAMED_SELECTIONS` |
| 8 | `general` | Fallback |

Turn on `showExplanationId` to see which one fired.

### Named ids

`NAMED_SELECTIONS` maps a bit string over the region table to an id. The bit
string is one character per region, in mask order.

Two sets — region order `outside`, `A`, `B`, `A∩B`:

| Signature | Id |
|---|---|
| `0001` | `2:intersection` |
| `0111` | `2:union` |
| `0100` | `2:diff-ab` |
| `0010` | `2:diff-ba` |
| `0110` | `2:symdiff` |
| `1010` | `2:comp-a` |
| `1100` | `2:comp-b` |
| `1000` | `2:nor` |
| `1110` | `2:nand` |
| `0101` | `2:a` |
| `0011` | `2:b` |

Three sets: `3:triple`, `3:union`, `3:outside`, `3:distributive`,
`3:exactly-one`, `3:symdiff`, `3:minus-both`.

Four and five sets: `4:all`, `5:all`.

### Overriding

Override any id. Unlisted ids keep their default.

```jsx
<VennGenerator
  explanations={{
    '2:symdiff': {
      title: 'Symmetric difference',
      body: 'Everything in exactly one of the two sets. The lens stays empty.'
    },
    'identity-holds': {
      body: (ctx) => `Both expressions agree on all ${ctx.total} regions.`
    }
  }}
/>
```

`title` and `body` each accept a string or a function of the context object.

### Context object

Passed to any function-valued `title` or `body`.

| Key | Type | Notes |
|---|---|---|
| `expression` | `string` | Trimmed |
| `compareExpression` | `string` | Trimmed |
| `error` | `string` | Message, or `''` |
| `errorKind` | `string` | `'syntax'`, `'unknown'`, or `''` |
| `sets` | `string[]` | e.g. `['A','B','C']` |
| `setList` | `string` | e.g. `'A, B, C'` |
| `count` | `number` | Regions selected |
| `total` | `number` | Regions in the diagram, `2ⁿ` |
| `signature` | `string` | The bit string |
| `compare` | `boolean \| null` | `null` when the compare field is empty or invalid |
| `regions` | `string[]` | Labels of every selected region |
| `regionList` | `string` | First 8, comma-joined, then `…` |
| `diffCount` | `number` | Regions the two expressions disagree on |
| `diffList` | `string` | First 6, comma-joined, then `…` |
| `plural` | `(word, n) => string` | Adds an `s` when `n !== 1` |

### Text format

Bodies pass through `processContent`, so use its syntax for math and links.
The defaults are written with `$...$` math and `[text](url)` links:

```js
body: 'By De Morgan this is $A^c \\cap B^c$. See [the laws](/set-theory/laws).'
```

Escape backslashes in JS string literals: `'$\\cap$'`, not `'$\cap$'`.

### Geometry notes

At 2 sets, if the layout itself asserts something, a note is appended below the
explanation. Keys are `disjoint`, `contained`, `equal`. Override with
`geometryNotes`.

Drag the circles apart and the note says `A ∩ B` is empty *in this drawing*.
Nest them and it says the drawing asserts a subset relation.

---

## Presets

Keyed by set count. Replacing the object replaces all four lists, so include
every count you support.

```jsx
<VennGenerator
  presets={{
    2: ['A ∩ B', 'A ∪ B', 'A \\ B'],
    3: ['A ∩ B ∩ C'],
    4: ['A ∩ B ∩ C ∩ D'],
    5: ['A ∩ B ∩ C ∩ D ∩ E']
  }}
/>
```

Falls back to `DEFAULT_PRESETS[n]` for any missing count.

---

## Set counts and geometry

| Sets | Curves | Regions | Layout |
|---|---|---|---|
| 2 | circles | 4 | Analytic arc paths |
| 3 | circles | 8 | Nested SVG `clipPath` |
| 4 | ellipses | 16 | Nested SVG `clipPath`, fixed arrangement |
| 5 | ellipses | 32 | Nested SVG `clipPath`, fixed arrangement |

Internally every curve is an ellipse. A circle is one where `rx === ry` and
`rot === 0`.

**2 sets** uses exact arc geometry, so regions have real path strings and the
component handles overlapping, disjoint, contained, and coincident circles
correctly. `classifyPair` detects which case applies and switches path
construction accordingly.

**3 sets and up** builds each region by nesting one clip per set — inside for a
set the region belongs to, outside for one it does not. This works for any closed
shape, which is why 4 and 5 needed only new layout constants and no renderer
changes.

**4 and 5** use published ellipse constructions. Both were verified by sampling
every pixel of the canvas and confirming all 2ⁿ regions are non-empty. Dragging
a curve at those counts will destroy regions — the Library tab says so.

**Past 5** there is no readable arrangement. At 5 the thinnest slivers already
cannot hold a label. This is a deliberate ceiling.

### Relation layouts

Library tab, 2 and 3 sets only: `Overlapping`, `Disjoint`, `A ⊆ B`, `A = B`.
Each rebuilds the shapes and every region path is re-derived.

---

## Styling

CSS is injected once into `document.head` under an id. No CSS module, no
Tailwind, no external stylesheet.

```js
const CSS_ID = 'venn-generator-styles-v1';
```

**Bump the version whenever you change a rule.** Injection is skipped if the id
already exists, so an unversioned edit silently does nothing on a page that has
already mounted the component.

All classes are prefixed `vg-`. Colours come from CSS custom properties on
`.vg-root`, so you can retheme from outside without touching the component:

```css
.my-page .vg-root {
  --vg-accent: #2563eb;
  --vg-ink: #0f172a;
}
```

Available: `--vg-ink`, `--vg-ink-soft`, `--vg-panel`, `--vg-rule`,
`--vg-rule-soft`, `--vg-accent`, `--vg-accent-soft`, `--vg-flag`, `--vg-ok`,
`--vg-math`, `--vg-mono`.

Layout is a two-column grid that collapses to one column below 900px.

---

## Exports

From `VennGenerator.jsx`:

| Export | Signature |
|---|---|
| `VennGenerator` | default and named |
| `parseExpression` | `(src) => ast`, throws on bad input |
| `evalNode` | `(ast, vars) => boolean` |
| `buildRegionTable` | `(sets) => row[]` |
| `highlightFromExpression` | `(src, sets) => string[]` |
| `classifyPair` | `(a, b) => { type, ... }` |
| `defaultLayout` | `(n, size, W, H) => shapes` |
| `RELATION_LAYOUTS` | object of layout functions |
| `parseElementText` | `(text, sets) => { [mask]: values[] }` |
| `SET_NAMES` | `['A','B','C','D','E']` |

Re-exported from `vennGeneratorContent.js` for convenience:
`DEFAULT_EXPLANATIONS`, `NAMED_SELECTIONS`, `DEFAULT_GEOMETRY_NOTES`,
`DEFAULT_PRESETS`.

### Using the engine without the UI

Sections 1 to 4 are pure functions with no React dependency.

```js
import { highlightFromExpression } from './VennGenerator';

highlightFromExpression('A ∩ (B ∪ C)', ['A', 'B', 'C']);
// => ['A∩B', 'A∩C', 'A∩B∩C']
```

That array is exactly what `VennCoreEnhanced` takes as `highlight`, so explorer
scenarios can be defined by expression instead of hand-listed region keys.

Checking an identity without rendering anything:

```js
const same = (p, q, sets) =>
  JSON.stringify(highlightFromExpression(p, sets)) ===
  JSON.stringify(highlightFromExpression(q, sets));

same('(A ∪ B)ᶜ', 'Aᶜ ∩ Bᶜ', ['A', 'B']);  // true
```

Region keys come back in mask order, so string comparison is safe.

---

## Export buttons

| Button | Output |
|---|---|
| Download SVG | `venn.svg`, standalone, drag handles stripped |
| Download PNG | `venn.png`, 2× scale, white background |
| Copy config | JSON to clipboard. Hidden unless `showCopyConfig` |

The SVG uses presentational attributes throughout, so it renders correctly
outside the app with no stylesheet.

---

## Notes and constraints

- **Not controlled.** All `initial*` props seed state once. Remount with a `key`
  to reset.
- **Hooks.** Every hook is unconditional and above any return. Do not add an
  early return into the component body.
- **SSR.** Style injection is guarded on `typeof document`. `useId` supplies the
  clipPath id suffix, so multiple instances on one page do not collide.
- **Sampling cost.** Element and label placement grid-samples the canvas. Step is
  7px at 2 and 3 sets, 4px at 4 and 5. It only runs when elements, counts, or
  region labels are visible — turn all three off and it is skipped entirely.
- **Region labels** are suppressed above 3 sets; the joined names get too long.
- **The region strip** wraps and drops names above 3 sets. Hover a cell for its
  key.
  
  
  
   -->




   # VennGenerator

Expression-driven Venn diagram builder for 2 to 5 sets.

Type a set expression, and every region of the diagram is tested against it. The
regions that satisfy it get filled. Nothing is written per operation — union,
difference, symmetric difference, complement, and any nesting of them all fall
out of the same evaluator.

---

## Files

```
components/venn-diagrams/
├── VennGenerator.jsx           component + engine   (1486 lines)
└── vennGeneratorContent.js     explanations + presets (190 lines)
```

Both go in the same folder. Split only because the first crossed 1500 lines with
the content inline.

### Before first run

`VennGenerator.jsx` line 18:

```js
import { processContent } from '../../../utils/contentProcessor';
```

Fix that path. If it is wrong the whole module fails to load and `VennGenerator`
is `undefined` in its consumers, with a runtime error that names the consumer
rather than this file.

---

## Quick start

```jsx
import VennGenerator from './venn-diagrams/VennGenerator';

export default function Page() {
  return <VennGenerator />;
}
```

That gives 2 sets, `A ∩ B`, all panels, drag enabled, copy config hidden.

Public-facing, no authoring controls:

```jsx
<VennGenerator
  initialSetCount={3}
  initialExpression="A ∩ (B ∪ C)"
  showStyleTab={false}
  showCopyConfig={false}
/>
```

Authoring mode, for building scenarios to paste into the explorers:

```jsx
<VennGenerator showCopyConfig showExplanationId />
```

Read-only figure, no controls at all:

```jsx
<VennGenerator
  initialExpression="(A ∪ B)ᶜ"
  enableDrag={false}
  showSetCount={false}
  showCompare={false}
  showLibrary={false}
  showElementsTab={false}
  showStyleTab={false}
  showExport={false}
/>
```

---

## Props

### Initial state

These seed component state on mount. They are **not** controlled — changing them
later does not update a mounted component. Remount with a `key` if you need that.

| Prop | Type | Default | Notes |
|---|---|---|---|
| `initialSetCount` | `2 \| 3 \| 4 \| 5` | `2` | Clamped to 2–5 |
| `initialExpression` | `string` | `'A ∩ B'` | Any parseable expression |
| `initialCompare` | `string` | `''` | Second expression for the ≡ check |
| `initialElements` | `string` | see below | One set per line |

Default `initialElements`:

```
A = 1, 2, 3, 7, 9
B = 3, 4, 5, 9
U = 6, 8
```

### Canvas

| Prop | Type | Default | Notes |
|---|---|---|---|
| `width` | `number` | `600` | SVG viewBox width |
| `height` | `number` | `460` | SVG viewBox height |
| `margin` | `number` | `14` | Inset of the universe rectangle |
| `maxWidth` | `number \| string` | `1200` | Max width of the whole component. Numbers become px. `null` to remove the cap |

The component caps its own width and centres itself, so no wrapping div is
needed on the page:

```jsx
<VennGenerator />                    {/* capped at 1200px, centred */}
<VennGenerator maxWidth={980} />
<VennGenerator maxWidth="90%" />
<VennGenerator maxWidth={null} />    {/* full bleed */}
```

The SVG is `width: 100%; max-width: 620px` in CSS, so `width` and `height` set
the coordinate system and aspect ratio, not the rendered pixel size. Changing
them past roughly ±25% will need the 4- and 5-set layout constants retuned.

### Visibility

Every panel can be switched off independently.

| Prop | Type | Default | Controls |
|---|---|---|---|
| `showCopyConfig` | `boolean` | **`false`** | Copy config button. Authoring aid — leave off in production |
| `showSetCount` | `boolean` | `true` | The 2/3/4/5 switcher and its explanation |
| `showCompare` | `boolean` | `true` | Second expression field and the ≡ / ≢ verdict |
| `showLibrary` | `boolean` | `true` | Library tab: presets and relation layouts |
| `showElementsTab` | `boolean` | `true` | Elements tab |
| `showStyleTab` | `boolean` | `true` | Style tab |
| `showExplanation` | `boolean` | `true` | The explanation panel under the diagram |
| `showExplanationId` | `boolean` | `false` | Small tag naming which explanation fired. Debug aid |
| `showExport` | `boolean` | `true` | Download SVG and Download PNG buttons |
| `enableDrag` | `boolean` | `true` | Dragging curves by their outline |

If all three tab flags are false the tab panel does not render.
If `showExport` and `showCopyConfig` are both false, the export bar does not render.

### Content

| Prop | Type | Default | Notes |
|---|---|---|---|
| `intro` | `string \| node` | built-in copy | Lede paragraph above the diagram. Strings run through `processContent` |
| `showIntro` | `boolean` | `true` | Set `false` if the page supplies its own intro |
| `theme` | `object` | `null` | Shallow-merged over `DEFAULT_THEME` |
| `explanations` | `object` | `null` | Overrides `DEFAULT_EXPLANATIONS` by id |
| `geometryNotes` | `object` | `null` | Overrides `DEFAULT_GEOMETRY_NOTES` by key |
| `presets` | `object` | `null` | Replaces `DEFAULT_PRESETS`, keyed by set count |

### Output

| Prop | Type | Default | Notes |
|---|---|---|---|
| `onChange` | `(config) => void` | `null` | Fires on every state change |
| `className` | `string` | `''` | Appended to the root class |

---

## `intro`

A short lede rendered as the component's first element, so it appears directly
under whatever heading the page puts above it.

The default is two sentences describing what the tool does. Replace it:

```jsx
<VennGenerator intro="Shade the region of the operation you are studying." />
```

Pass a node for full control:

```jsx
<VennGenerator intro={<p>See also the <a href="/set-theory/laws">laws</a>.</p>} />
```

If the page already has its own intro paragraph under the title, turn this off:

```jsx
<VennGenerator showIntro={false} />
```

---

## `theme`

Shallow-merged over the defaults. Values here seed the Style tab controls, so a
user can still change highlight colour, outline, and opacity afterwards unless
you hide that tab.

```js
{
  color: '#2f4fd8',            // highlight fill
  opacity: 0.82,               // highlight opacity
  neutralFill: '#ffffff',      // unhighlighted regions (2-set only)
  stroke: '#1e293b',           // curve outlines
  strokeWidth: 1.5,
  universeStroke: '#c2ccd8',   // the U rectangle
  labelColor: '#334155',       // element chips in unhighlighted regions
  mutedLabelColor: '#94a3b8'   // region labels in unhighlighted regions
}
```

To match the explorers, pass `{ color: '#2563eb', opacity: 0.85 }`.

---

## `onChange` and the serializer

`onChange` receives the full diagram state on every change. The serializer runs
whether or not the copy button is shown.

```js
{
  sets: ['A', 'B', 'C'],
  expression: 'A ∩ (B ∪ C)',
  compare: null,
  highlight: ['A∩B', 'A∩C', 'A∩B∩C'],
  shapes: {
    A: { cx: 300, cy: 172, rx: 112, ry: 112, rot: 0 },
    B: { cx: 249, cy: 267, rx: 112, ry: 112, rot: 0 },
    C: { cx: 351, cy: 267, rx: 112, ry: 112, rot: 0 }
  },
  theme: { color: '#2f4fd8', opacity: 0.82, stroke: '#1e293b', strokeWidth: 1.5 },
  universe: true,
  elements: 'A = 1, 2, 3\nB = 3, 4'
}
```

`highlight` uses `∩`-joined region keys, matching `VennCoreEnhanced`. Paste it
straight into an explorer scenario.

Use `onChange` for share links, save and restore, or an "embed this" snippet.

```jsx
const [cfg, setCfg] = useState(null);
<VennGenerator onChange={setCfg} />
```

`onChange` is held in a ref internally, so an inline arrow function will not
cause an update loop.

---

## Expression syntax

### Operators

| Operation | Symbol | ASCII aliases |
|---|---|---|
| Intersection | `∩` | `&` |
| Union | `∪` | `\|` `+` |
| Difference | `\` | `−` `-` |
| Symmetric difference | `⊕` | `Δ` `△` |
| Complement, postfix | `ᶜ` | `'` `′` `*` `^c` |
| Complement, prefix | `¬` | `~` `!` |
| Grouping | `( )` | |
| Universe | `U` | |
| Empty set | `∅` | |

Set names are single letters `A` to `E`, case-insensitive. `U` is always the
universe, never a set name.

### Precedence

Loosest binding first:

1. `∪` `⊕`
2. `∩` `\`
3. `¬` prefix, `ᶜ` postfix
4. atoms

So `A ∩ B ∪ C` parses as `(A ∩ B) ∪ C`. Parenthesize when in doubt.

`A \ B` is rewritten to `A ∩ ¬B` at parse time — difference is not a separate
node type.

### Errors

Unparseable input leaves the previous drawing on screen, marks the field red,
prints the message under it, and switches the explanation to `error`. Nothing
throws out of the component.

---

## Elements

Free text, one set per line:

```
A = 1, 2, 3, 7, 9
B = 3, 4, 5, 9
U = 6, 8
```

- Separators: `=` or `:` after the set letter; `,` or `;` between values.
- Values are strings. `3` appearing under both `A` and `B` is one element in `A∩B`.
- `U` holds elements outside every set.
- A value listed only under a set that is not currently drawn lands outside.
- Lines that do not match are ignored.

Placement is computed, never manual. The plane is grid-sampled once, each sample
bucketed by its region mask, then chips are packed into the correct bucket with a
decreasing minimum-distance filter so they do not collide. Move a curve and every
element re-homes itself.

---

## Explanations

The panel under the diagram is written from state, not looked up from your text.
`A ∩ B`, `B ∩ A`, and `(Aᶜ ∪ Bᶜ)ᶜ` all resolve to the same explanation because
matching is on **which regions are selected**, not on the string.

### Resolution order

First match wins.

| # | Id | When |
|---|---|---|
| 1 | `error` | Expression will not parse |
| 1 | `unknown-set` | Parses, but names a set the diagram does not have |
| 2 | `empty` | Expression field is blank |
| 3 | `identity-holds` | Compare field holds a valid expression selecting the same regions |
| 4 | `identity-fails` | Compare field holds a valid expression selecting different regions |
| 5 | `nothing` | Selects zero regions |
| 6 | `everything` | Selects every region |
| 7 | *named* | Selection matches an entry in `NAMED_SELECTIONS` |
| 8 | `general` | Fallback |

Turn on `showExplanationId` to see which one fired.

### Named ids

`NAMED_SELECTIONS` maps a bit string over the region table to an id. The bit
string is one character per region, in mask order.

Two sets — region order `outside`, `A`, `B`, `A∩B`:

| Signature | Id |
|---|---|
| `0001` | `2:intersection` |
| `0111` | `2:union` |
| `0100` | `2:diff-ab` |
| `0010` | `2:diff-ba` |
| `0110` | `2:symdiff` |
| `1010` | `2:comp-a` |
| `1100` | `2:comp-b` |
| `1000` | `2:nor` |
| `1110` | `2:nand` |
| `0101` | `2:a` |
| `0011` | `2:b` |

Three sets: `3:triple`, `3:union`, `3:outside`, `3:distributive`,
`3:exactly-one`, `3:symdiff`, `3:minus-both`.

Four and five sets: `4:all`, `5:all`.

### Overriding

Override any id. Unlisted ids keep their default.

```jsx
<VennGenerator
  explanations={{
    '2:symdiff': {
      title: 'Symmetric difference',
      body: 'Everything in exactly one of the two sets. The lens stays empty.'
    },
    'identity-holds': {
      body: (ctx) => `Both expressions agree on all ${ctx.total} regions.`
    }
  }}
/>
```

`title` and `body` each accept a string or a function of the context object.

### Context object

Passed to any function-valued `title` or `body`.

| Key | Type | Notes |
|---|---|---|
| `expression` | `string` | Trimmed |
| `compareExpression` | `string` | Trimmed |
| `error` | `string` | Message, or `''` |
| `errorKind` | `string` | `'syntax'`, `'unknown'`, or `''` |
| `sets` | `string[]` | e.g. `['A','B','C']` |
| `setList` | `string` | e.g. `'A, B, C'` |
| `count` | `number` | Regions selected |
| `total` | `number` | Regions in the diagram, `2ⁿ` |
| `signature` | `string` | The bit string |
| `compare` | `boolean \| null` | `null` when the compare field is empty or invalid |
| `regions` | `string[]` | Labels of every selected region |
| `regionList` | `string` | First 8, comma-joined, then `…` |
| `diffCount` | `number` | Regions the two expressions disagree on |
| `diffList` | `string` | First 6, comma-joined, then `…` |
| `plural` | `(word, n) => string` | Adds an `s` when `n !== 1` |

### Text format

Bodies pass through `processContent`, so use its syntax for math and links.
The defaults are written with `$...$` math and `[text](url)` links:

```js
body: 'By De Morgan this is $A^c \\cap B^c$. See [the laws](/set-theory/laws).'
```

Escape backslashes in JS string literals: `'$\\cap$'`, not `'$\cap$'`.

### Geometry notes

At 2 sets, if the layout itself asserts something, a note is appended below the
explanation. Keys are `disjoint`, `contained`, `equal`. Override with
`geometryNotes`.

Drag the circles apart and the note says `A ∩ B` is empty *in this drawing*.
Nest them and it says the drawing asserts a subset relation.

---

## Presets

Keyed by set count. Replacing the object replaces all four lists, so include
every count you support.

```jsx
<VennGenerator
  presets={{
    2: ['A ∩ B', 'A ∪ B', 'A \\ B'],
    3: ['A ∩ B ∩ C'],
    4: ['A ∩ B ∩ C ∩ D'],
    5: ['A ∩ B ∩ C ∩ D ∩ E']
  }}
/>
```

Falls back to `DEFAULT_PRESETS[n]` for any missing count.

---

## Set counts and geometry

| Sets | Curves | Regions | Layout |
|---|---|---|---|
| 2 | circles | 4 | Analytic arc paths |
| 3 | circles | 8 | Nested SVG `clipPath` |
| 4 | ellipses | 16 | Nested SVG `clipPath`, fixed arrangement |
| 5 | ellipses | 32 | Nested SVG `clipPath`, fixed arrangement |

Internally every curve is an ellipse. A circle is one where `rx === ry` and
`rot === 0`.

**2 sets** uses exact arc geometry, so regions have real path strings and the
component handles overlapping, disjoint, contained, and coincident circles
correctly. `classifyPair` detects which case applies and switches path
construction accordingly.

**3 sets and up** builds each region by nesting one clip per set — inside for a
set the region belongs to, outside for one it does not. This works for any closed
shape, which is why 4 and 5 needed only new layout constants and no renderer
changes.

**4 and 5** use published ellipse constructions. Both were verified by sampling
every pixel of the canvas and confirming all 2ⁿ regions are non-empty. Dragging
a curve at those counts will destroy regions — the Library tab says so.

**Past 5** there is no readable arrangement. At 5 the thinnest slivers already
cannot hold a label. This is a deliberate ceiling.

### Relation layouts

Library tab, 2 and 3 sets only: `Overlapping`, `Disjoint`, `A ⊆ B`, `A = B`.
Each rebuilds the shapes and every region path is re-derived.

---

## Styling

CSS is injected once into `document.head` under an id. No CSS module, no
Tailwind, no external stylesheet.

```js
const CSS_ID = 'venn-generator-styles-v2';
```

**Bump the version whenever you change a rule.** Injection is skipped if the id
already exists, so an unversioned edit silently does nothing on a page that has
already mounted the component.

All classes are prefixed `vg-`. Colours come from CSS custom properties on
`.vg-root`, so you can retheme from outside without touching the component:

```css
.my-page .vg-root {
  --vg-accent: #2563eb;
  --vg-ink: #0f172a;
}
```

Available: `--vg-ink`, `--vg-ink-soft`, `--vg-panel`, `--vg-rule`,
`--vg-rule-soft`, `--vg-accent`, `--vg-accent-soft`, `--vg-flag`, `--vg-ok`,
`--vg-math`, `--vg-mono`.

Layout is a two-column grid that collapses to one column below 900px.

---

## Exports

From `VennGenerator.jsx`:

| Export | Signature |
|---|---|
| `VennGenerator` | default and named |
| `parseExpression` | `(src) => ast`, throws on bad input |
| `evalNode` | `(ast, vars) => boolean` |
| `buildRegionTable` | `(sets) => row[]` |
| `highlightFromExpression` | `(src, sets) => string[]` |
| `classifyPair` | `(a, b) => { type, ... }` |
| `defaultLayout` | `(n, size, W, H) => shapes` |
| `RELATION_LAYOUTS` | object of layout functions |
| `parseElementText` | `(text, sets) => { [mask]: values[] }` |
| `SET_NAMES` | `['A','B','C','D','E']` |

Re-exported from `vennGeneratorContent.js` for convenience:
`DEFAULT_EXPLANATIONS`, `NAMED_SELECTIONS`, `DEFAULT_GEOMETRY_NOTES`,
`DEFAULT_PRESETS`.

### Using the engine without the UI

Sections 1 to 4 are pure functions with no React dependency.

```js
import { highlightFromExpression } from './VennGenerator';

highlightFromExpression('A ∩ (B ∪ C)', ['A', 'B', 'C']);
// => ['A∩B', 'A∩C', 'A∩B∩C']
```

That array is exactly what `VennCoreEnhanced` takes as `highlight`, so explorer
scenarios can be defined by expression instead of hand-listed region keys.

Checking an identity without rendering anything:

```js
const same = (p, q, sets) =>
  JSON.stringify(highlightFromExpression(p, sets)) ===
  JSON.stringify(highlightFromExpression(q, sets));

same('(A ∪ B)ᶜ', 'Aᶜ ∩ Bᶜ', ['A', 'B']);  // true
```

Region keys come back in mask order, so string comparison is safe.

---

## Export buttons

| Button | Output |
|---|---|
| Download SVG | `venn.svg`, standalone, drag handles stripped |
| Download PNG | `venn.png`, 2× scale, white background |
| Copy config | JSON to clipboard. Hidden unless `showCopyConfig` |

The SVG uses presentational attributes throughout, so it renders correctly
outside the app with no stylesheet.

---

## Notes and constraints

- **Not controlled.** All `initial*` props seed state once. Remount with a `key`
  to reset.
- **Hooks.** Every hook is unconditional and above any return. Do not add an
  early return into the component body.
- **SSR.** Style injection is guarded on `typeof document`. `useId` supplies the
  clipPath id suffix, so multiple instances on one page do not collide.
- **Sampling cost.** Element and label placement grid-samples the canvas. Step is
  7px at 2 and 3 sets, 4px at 4 and 5. It only runs when elements, counts, or
  region labels are visible — turn all three off and it is skipped entirely.
- **Region labels** are suppressed above 3 sets; the joined names get too long.
- **The region strip** wraps and drops names above 3 sets. Hover a cell for its
  key.