# MethodsExplorer

Generic browser for a corpus of items (methods, operations, calculations, theorems — anything with categorical structure) with sidebar filtering, chip facets, search, sort, and six configurable detail-view modes.

## Import

```jsx
import MethodsExplorer from '@/components/MethodsExplorer';
```

## Minimal usage

```jsx
<MethodsExplorer items={items} />
```

Only `items` is required. Everything else has defaults.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Item[]` | `DEMO_ITEMS` | Corpus to browse. See [Item shape](#item-shape). |
| `theme` | `string` | `'default'` | Key into internal `THEMES` map. |
| `title` | `string` | `'Methods Explorer'` | Topbar title. |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder. |
| `primarySidebarLabel` | `string` | `'Category'` | Sidebar heading text. |
| `secondaryFacets` | `Facet[]` | `DEFAULT_SECONDARY_FACETS` | Chip facet config. See [Facets](#facets). |
| `mainTextField` | `string` | `'formula'` | Top-level item key used for the main statement (card summary + detail callout). |
| `metaFields` | `MetaField[]` | `[{key:'year',label:'Year'},{key:'era',label:'Era'},{key:'difficulty',label:'Difficulty'}]` | Item keys shown in the detail meta grid. |
| `componentMap` | `Record<string, Component>` | `{}` | Registry for SSG-safe nested rendering. See [Field values](#field-values). |

## Item shape

```js
{
  id: 1,                                     // required, unique
  name: 'Gaussian Elimination',              // required, card + detail title
  categories: ['Linear Algebra', 'Solvers'], // primary is [0]; rest can feed a facet
  tags: ['systems', 'matrix'],               // optional, searchable, facetable
  year: 1809,                                // optional, used by sort
  era: 'classical',                          // optional, facetable, meta
  difficulty: 'intermediate',                // optional, facetable, meta
  formula: 'Row-reduce [A|b] to upper triangular', // whatever mainTextField points to
  fields: {                                  // optional; each key becomes a tab / accordion section
    overview: '...',
    steps:    '...',
    example:  { component: 'gauss-demo', props: { size: 3 } },
  }
}
```

- `categories[0]` drives the sidebar filter and the card&apos;s color band. Remaining entries can be exposed through a `{ from: 'rest' }` secondary facet.
- `year` is coerced with `Number()`; missing/null is treated as `0` for sort purposes.
- Any top-level key referenced by `mainTextField` or `metaFields` is rendered if present.

## Field values

**This is the important part.** Each `item.fields[key]` value is rendered autonomously — its **shape** decides its behavior. The tab / accordion label comes from the field key (first letter capitalized).

### Quick reference

| Value shape | SSG-safe | Behavior |
|-------------|:--------:|----------|
| `string` | ✓ | Parsed as paragraphs; lines starting with `- ` become bullets. |
| `{ component: 'key', props: {...} }` | ✓ | Descriptor. Resolved via `componentMap[key]`, rendered as `<Component {...props} />`. |
| `React element` | ✗ | Rendered as-is. |
| `() => React element` | ✗ | Invoked at render time. |
| Array of any of the above | depends | Rendered in sequence. Enables mixing prose + live components inside one field. |
| Anything else | – | Skipped. |

**"SSG-safe"** = the value survives JSON serialization through `getStaticProps`. React elements and functions do not; strings and plain descriptor objects do.

### 1. String

```js
fields: {
  overview: 'Systematically zero entries below the diagonal, then back-substitute.\n\n- Requires pivoting for numerical stability\n- Works on square A\n- Cost: O(n³)',
}
```

Parser rules:
- Blank line — starts a new block.
- Line starting with `- ` — bullet in the current `<ul>`.
- Otherwise — paragraph text (joined with the surrounding lines).

Each piece runs through `processContent()` from `utils/contentProcessor` before rendering (so latex / entities / whatever your processor handles).

### 2. Component descriptor — SSG-safe

```js
fields: {
  calculator: { component: 'newton-calculator', props: { fn: 'x^2 - 2', x0: 1 } }
}
```

The string `'newton-calculator'` is looked up in `componentMap`. If found, renders `<NewtonCalculator fn="x^2 - 2" x0={1} />`. If missing:

- Console warns `[MethodsExplorer] No component registered for key "newton-calculator"`.
- UI shows a red inline placeholder: `Missing component: newton-calculator`.

**This is the pattern to use with `getStaticProps`.** Descriptors are plain JSON; components can&apos;t cross the serialization boundary.

Shape:
```ts
{ component: string; props?: Record<string, any> }
```

`props` is optional. Anything JSON-serializable is fine (strings, numbers, booleans, arrays, plain objects, null). Functions and elements in `props` will not survive `getStaticProps` — same rule applies recursively.

### 3. React element

```js
fields: {
  calculator: <NewtonCalculator fn="x^2 - 2" x0={1} />
}
```

Rendered directly. Use this when the page authors items inline (i.e. not going through `getStaticProps`).

### 4. Function thunk

```js
fields: {
  calculator: () => <NewtonCalculator fn="x^2 - 2" x0={1} />
}
```

Called at render time. Same SSG constraint as an element. Useful mainly for symmetry / composition; note that the active tab body re-runs on state changes anyway, so this is not a true lazy-mount.

### 5. Array — mixed content

```js
fields: {
  example: [
    'Take f(x) = x² − 2 with initial guess x₀ = 1.',
    { component: 'newton-calculator', props: { fn: 'x^2 - 2', x0: 1, autoRun: true } },
    'Iteration converges to √2 in about 5 steps.',
  ]
}
```

Each item is rendered through the same logic. Mix strings, descriptors, elements, thunks. One field, many blocks.

## The componentMap pattern

Full page example with `getStaticProps`:

```jsx
// pages/methods/index.jsx
import MethodsExplorer from '@/components/MethodsExplorer';
import NewtonCalculator       from '@/components/methods/NewtonCalculator';
import GaussianElimVisualizer from '@/components/methods/GaussianElimVisualizer';
import QuadraticSolver        from '@/components/methods/QuadraticSolver';

// Registry lives OUTSIDE getStaticProps — components can&apos;t cross the JSON boundary.
const componentMap = {
  'newton-calculator': NewtonCalculator,
  'gaussian-elim-viz': GaussianElimVisualizer,
  'quadratic-solver':  QuadraticSolver,
};

export async function getStaticProps() {
  const items = [
    {
      id: 1,
      name: "Newton's Method",
      categories: ['Numerical Methods'],
      formula: "xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)",
      fields: {
        overview: 'Iteratively refines a root estimate using the tangent line.',
        calculator: { component: 'newton-calculator', props: { fn: 'x^2 - 2', x0: 1 } },
        example: [
          'Take f(x) = x² − 2, starting from x₀ = 1:',
          { component: 'newton-calculator', props: { fn: 'x^2 - 2', x0: 1, autoRun: true } },
          'Converges to √2 in a handful of steps.',
        ],
      },
    },
  ];
  return { props: { items } };
}

export default function MethodsPage({ items }) {
  return <MethodsExplorer items={items} componentMap={componentMap} />;
}
```

### Registry organization

- Hyphenated-lowercase-strings for keys is a good convention.
- Split by domain if the map grows:
  ```js
  const componentMap = {
    ...calculatorRegistry,
    ...visualizerRegistry,
    ...diagramRegistry,
  };
  ```
- Merging maps in tests / storybook is trivial since it&apos;s a plain object.

### Debugging missing components

The red placeholder + `console.warn` fires only when a descriptor references a key not in the map. Common causes: typo in the descriptor, forgot to add the import to the registry, item authored before the component was registered. Grep for the key across data and registry.

## Display modes

Selectable at runtime via the "Open as" picker in the topbar. Internal state: `mode`.

| Mode | Behavior |
|------|----------|
| `inline` | Card expands in-place, spanning the full grid row. |
| `modal` | Centered modal overlay. |
| `drawer` | Right-hand drawer sliding in. |
| `split` | Fixed two-pane master-detail. Sidebar and secondary bar hidden. |
| `page` | Grid replaced by a full-page detail. Back button returns to list. |
| `lightbox` | Modal-style overlay with prev/next arrow buttons and Left/Right keyboard cycling. |

Only one item is open at a time. `Escape` closes any overlay or collapses the inline expansion.

## Facets

### Primary — sidebar

Auto-derived from `categories[0]` across all items. Alphabetically sorted with counts. Multi-selectable (OR within itself). ANDs with all secondary facets.

### Secondary — chip bar

Configured via the `secondaryFacets` prop. Each facet:

```js
{
  key:   'era',      // top-level item key to read
  label: 'Era',      // chip group label
  from:  'rest',     // optional; for `categories`, reads categories[1:] instead of categories
  multi: true        // optional (informational; component always allows multi-select)
}
```

A facet whose values are empty across the current corpus is auto-hidden.

Default schema:

```js
[
  { key: 'categories', from: 'rest', label: 'Topics', multi: true },
  { key: 'era',        label: 'Era' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'tags',       label: 'Tags', multi: true }
]
```

## Search

Case-insensitive substring match against the concatenation of:

- `item.name`
- `item[mainTextField]`
- `item.categories` (all)
- `item.tags` (all)

## Sort

- `name` — locale-compare on `name`, A→Z.
- `year-asc` — `year` numeric ascending.
- `year-desc` — `year` numeric descending.

Items missing `year` are treated as year 0.

## Detail view

Rendered by modal, drawer, lightbox, master-detail, full-page, and inline modes.

- **Header** — categories as badges, then `name` as title.
- **Main text** — `item[mainTextField]` in a highlighted callout. **String only** (runs through `processContent(String(v))`).
- **Meta grid** — key/value pairs from `metaFields` where the item has a present value.
- **View switch** — user-toggleable between `tabs` and `accordion`. Persists across items in the session.
- **Sections** — one per key in `item.fields` where the value passes `isPresent`. Label = capitalized field key.

The active tab / first-open accordion resets to the first present field whenever the open item changes.

## Theming

Themes are CSS variable maps in the internal `THEMES` object. To add one:

```js
// inside MethodsExplorer:
const THEMES = {
  default: { /* ... */ },
  brilliantBlue: {
    '--bg':         '#f4f7fd',
    '--accent':     '#2563eb',
    '--topbar-bg':  '#0b2a6b',
    // ... every var listed in THEMES.default
  }
};
```

Then: `<MethodsExplorer theme="brilliantBlue" ... />`.

All colors, shadows, and category color slots (`--c0..c4` / `--c0s..c4s`) are variable-driven. Fonts (`DM Sans`, `Crimson Pro`, `JetBrains Mono`) are hard-coded in the stylesheet — override at the app level if needed.

## Keyboard

- `Escape` — closes overlay (modal / drawer / lightbox) or collapses inline expansion.
- `ArrowLeft` / `ArrowRight` — cycles items in lightbox mode.

## Body scroll

Locked while modal / drawer / lightbox is open. Restored on close.

## Caveats

- `processContent` is imported from `../../../utils/contentProcessor` — path is project-specific; adjust when relocating the component.
- Main text and meta values are always coerced with `String(v)`, so nested-component rendering works **only inside `fields.*`**.
- The active tab body re-renders on any state change; the thunk and element field types are re-invoked / re-rendered each time. If you need mount-on-open with preserved state, wrap the target in a component that owns its lifecycle.
- Fonts are hard-coded — load them at the app level (Google Fonts import, `@font-face`, or Next `next/font`).
- Category color slots are 5 (`--c0..c4`) and cycle by index — if more than 5 primary categories exist, colors repeat.

## Version notes

- **v1** — renamed from `TheoremsExplorer`; added `componentMap` prop and descriptor / array / element / thunk support in `renderFieldBody`.