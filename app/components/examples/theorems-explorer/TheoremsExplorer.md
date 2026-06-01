# TheoremsExplorer

A flexible, schema-driven explorer for browsing collections of named items
(theorems, concepts, definitions, recipes — anything with a name, a few core
attributes, and arbitrary supplementary content). Built as a single
self-contained React component with inline styles.

---

## Table of contents

1. [Quick start](#1-quick-start)
2. [Data model](#2-data-model)
3. [Props reference](#3-props-reference)
4. [The categories system](#4-the-categories-system)
5. [The `fields` bag (dynamic per-item content)](#5-the-fields-bag-dynamic-per-item-content)
6. [Open modes](#6-open-modes)
7. [Themes](#7-themes)
8. [Search, filtering, sorting](#8-search-filtering-sorting)
9. [Customization recipes](#9-customization-recipes)
10. [Behavior notes & edge cases](#10-behavior-notes--edge-cases)
11. [Dependencies & file layout](#11-dependencies--file-layout)

---

## 1. Quick start

```jsx
import TheoremsExplorer from '@/components/TheoremsExplorer';
import MOCK_ITEMS from '@/data/mockTheorems';

export default function Page() {
  return <TheoremsExplorer items={MOCK_ITEMS} />;
}
```

That's it. Zero config renders a full-featured explorer with sidebar
categories, chip filters, search, six open modes, theme defaults, and
tabbed/accordion detail views.

If you pass no `items` prop at all, the component falls back to a small
built-in demo dataset (handy for prototyping).

---

## 2. Data model

Items are plain JS objects. Only `id` and `name` are truly required.
Everything else is optional and rendered only when present.

### 2.1 Recognized fields

| Key            | Type                  | Where it appears                                  |
|----------------|-----------------------|---------------------------------------------------|
| `id`           | number / string       | React key, internal identity. **Required.**      |
| `name`         | string                | Card title, detail title, master-detail list.    |
| `categories`   | string[]              | First element drives sidebar + color rail; rest is a configurable facet. |
| `tags`         | string[]              | Card tag chips, optional facet, search corpus.   |
| `formula`      | string (configurable) | Card preview text, detail "main" box. Field name configurable via `mainTextField`. |
| `year`         | number                | Sort key, optional meta row in detail.           |
| `era`          | string                | Optional facet, optional meta row in detail.     |
| `difficulty`   | string                | Optional facet, optional meta row in detail.     |
| `fields`       | object                | The **dynamic content bag** — see §5.            |

### 2.2 Unknown keys

Any top-level key the component doesn't recognize (e.g. `author`, `notes`,
`region`) is **silently ignored**. The app does not crash. This is by design:
you can attach metadata for your own use without breaking the explorer.

### 2.3 Minimum viable item

```js
{ id: 99, name: 'Anonymous Lemma' }
```

This renders: a card with just a title and a "View details" button. The detail
view shows just the title (no main box, no meta grid, no tabs).

### 2.4 Rich item

```js
{
  id: 1,
  name: 'Pythagorean Theorem',
  formula: 'a² + b² = c²',
  categories: ['Geometry', 'Triangles'],
  tags: ['euclidean', 'classical'],
  era: 'ancient',
  difficulty: 'undergraduate',
  year: -500,
  fields: {
    statement: 'For any right triangle...',
    properties: '- Only valid for right triangles\n- Has a converse',
    history: 'Known to Babylonians...',
    applications: '- Distance calculations\n- Trigonometry'
  }
}
```

---

## 3. Props reference

All props are optional.

### `items` — array of item objects

The data to display. Default: built-in demo set of 8 theorems.

```jsx
<TheoremsExplorer items={myItems} />
```

### `theme` — string

Which theme palette to apply. Currently only `'default'` is defined.
Designed so additional themes can be merged into the `THEMES` map later and
selected via this prop without touching the component body.

```jsx
<TheoremsExplorer theme="default" />
```

### `title` — string

Text in the topbar's `<h1>`. Default: `'Theorems Explorer'`.

```jsx
<TheoremsExplorer title="Math Theorems Library" />
```

### `searchPlaceholder` — string

Placeholder text inside the topbar search input. Default: `'Search...'`.

```jsx
<TheoremsExplorer searchPlaceholder="Search theorems, tags..." />
```

### `primarySidebarLabel` — string

Header text above the sidebar's primary-category list. Default: `'Category'`.

```jsx
<TheoremsExplorer primarySidebarLabel="Field" />
```

### `mainTextField` — string

Which item field is treated as the "main text" (card preview + detail's
highlighted box at the top). Default: `'formula'`.

If items use a different key — say each item has a `definition` rather than a
`formula` — point `mainTextField` at it:

```jsx
<TheoremsExplorer mainTextField="definition" />
```

If a given item lacks this field, the card simply skips the preview area and
the detail skips the main box. No crash, no placeholder.

### `metaFields` — array of `{ key, label }`

Which top-level item fields are surfaced as a meta grid inside the detail
view (small key/value tiles between the main box and the dynamic tabs).

Default:

```js
[
  { key: 'year',       label: 'Year' },
  { key: 'era',        label: 'Era' },
  { key: 'difficulty', label: 'Difficulty' }
]
```

Each entry is rendered only when its `key` is present on the item. If none
of the entries apply to an item, the whole meta grid is skipped.

Custom example — physics constants with mass and unit:

```jsx
<TheoremsExplorer
  metaFields={[
    { key: 'mass',  label: 'Mass'  },
    { key: 'unit',  label: 'Unit'  },
    { key: 'year',  label: 'Discovered' }
  ]}
/>
```

### `secondaryFacets` — array of facet schemas

Drives the chip-filter bar above the results. Default schema:

```js
[
  { key: 'categories', from: 'rest', label: 'Topics',     multi: true },
  { key: 'era',                       label: 'Era'                    },
  { key: 'difficulty',                label: 'Difficulty'             },
  { key: 'tags',                      label: 'Tags',       multi: true }
]
```

Facet entry shape:

| Property | Type    | Meaning |
|----------|---------|---------|
| `key`    | string  | The item field this facet reads from. |
| `label`  | string  | Displayed under the chip row. Also used internally as the unique identifier for active-filter state — **must be unique across facets**. |
| `multi`  | boolean | `true` when the item field is an array (`tags`, `categories`). Currently only affects intent — the code already auto-detects arrays. |
| `from`   | string  | Special-case extractor. Use `'rest'` together with `key: 'categories'` to read `item.categories.slice(1)` (i.e., everything except the primary category). |

Each facet automatically computes its unique values + counts from the
provided `items`. A facet with zero discoverable values is omitted from the
bar. The "Clear all" button appears whenever any filter (sidebar + chips +
search) is active.

---

## 4. The categories system

Categories are intentionally split into two tiers with different rigidity:

### 4.1 Primary category (rigid, no schema)

`item.categories[0]` is always treated as the primary category.

- Drives the **left sidebar filter** (checkbox list with counts).
- Drives the **color rail** on each card and the accent color in detail views
  (5-color rotation: `te-cat-0` … `te-cat-4`, cycled by the primary's index
  in the sorted unique list).
- Items with no `categories` array — or with an empty one — are uncategorized.
  They simply don't appear in the sidebar counts, get the fallback color
  (`te-cat-0`), and pass the primary filter unless the user has actively
  selected one or more primary categories.

You cannot change which field is "primary" via props. This is deliberate:
primary is the spine.

### 4.2 Secondary categories and beyond (schema-driven)

Anything that isn't the primary category goes through the `secondaryFacets`
schema (see §3). The default schema treats `categories[1..]` as a chip facet
called "Topics", so an item with `categories: ['Geometry', 'Triangles',
'Euclidean']` will show "Triangles" and "Euclidean" as filterable chips
under "Topics".

You can replace the entire schema, add custom facets pointing at any item
field, reorder them, rename them, etc.

---

## 5. The `fields` bag (dynamic per-item content)

This is where the explorer's flexibility lives.

`item.fields` is an object whose keys you control entirely per item. Each
present key becomes one tab (in Tabs view) or one accordion section (in
Accordion view) inside the detail.

### 5.1 Different items can have different keys

Two items rendered in the same grid can have completely disjoint `fields`
keys. Item A might have `{statement, properties, history}` while item B has
`{proof_sketch, counterexamples, examples}` — no problem. Each item's detail
view renders its own keys.

### 5.2 Keys are auto-capitalized

A key like `proof_sketch` becomes the visible label `Proof_sketch` (first
character uppercased). If you want different label casing, use the case you
want as the key itself (e.g. `'Proof Sketch'`).

### 5.3 Values support light markdown-ish formatting

Each value is a string. Two line types are recognized when rendering:

- Lines starting with `'- '` become bullets in an unordered list.
- Blank lines separate paragraphs / lists.
- All other lines join into paragraphs.

Example value:

```
For any right triangle...

- Holds only for right triangles
- Has a converse
- Generalizes via law of cosines

This was known long before Pythagoras.
```

This renders as: a paragraph, a 3-item list, and another paragraph.

Text inside each line is passed through `processContent`, so any inline
formatting your `contentProcessor` supports (LaTeX, code, links, etc.) works
the same way it does elsewhere in the project.

### 5.4 Empty or missing bag

If `item.fields` is missing, empty, or contains only empty/null values, the
detail view skips the view-switch, tabs, and accordion entirely. The detail
just shows the main box and meta grid. The card and listing are unaffected.

### 5.5 View switch (per detail session)

Inside any open detail (modal, drawer, inline expand, master-detail, full
page, lightbox), the user can toggle between Tabs and Accordion. This is
per-session UI state, not per-item.

---

## 6. Open modes

Users pick how detail content opens via the topbar's "Open as" dropdown.
All six modes share the same detail rendering logic:

| Mode             | Behavior |
|------------------|----------|
| `inline`         | Selected card expands in place, spanning the full grid row. Click the card again (or the CTA) to collapse. |
| `modal`          | Centered dialog with backdrop. Click outside or press Esc to close. |
| `drawer`         | Right-side drawer that slides in. Click backdrop or Esc to close. |
| `split`          | Master-detail layout: filters hide, left list replaces the grid, right pane shows the active detail. |
| `page`           | Selected item replaces the grid with a full-page detail. "Back to list" button restores the grid. |
| `lightbox`       | Modal-like overlay with prev/next buttons + counter. Arrow keys navigate between items in the current filtered/sorted list. |

Switching modes resets any currently open item. Escape always closes open
overlays / collapses inline.

---

## 7. Themes

Themes live in the `THEMES` map inside `TheoremsExplorer.jsx`:

```js
const THEMES = {
  default: {
    '--bg': '#f6f8fb',
    '--surface': '#ffffff',
    // ... etc.
  }
};
```

The selected theme's variables are applied as inline style on the component
root, then consumed throughout the inline CSS via `var(--name)`. To add a
new theme later:

1. Add another key/value pair to `THEMES` (or import a themes object from an
   external file and merge it in).
2. Pass `theme="yourThemeName"` as a prop.

Theme variables cover: background tiers, ink colors, borders, accent +
accent-soft, topbar background/ink, the five category colors (`--c0…--c4`)
and their soft variants, and three shadow elevations.

---

## 8. Search, filtering, sorting

### 8.1 Search

The topbar search input does a case-insensitive substring match against a
per-item haystack of: `name`, the `mainTextField` value, all categories,
and all tags. Other fields are not searched (deliberate — keeps search snappy
and predictable).

### 8.2 Filter combination logic

- **Within a single facet**: union (OR). Selecting "ancient" and "modern" in
  the Era facet shows items that are either.
- **Across facets**: intersection (AND). Era="ancient" AND Tags=["primes"]
  shows only ancient items that are also tagged "primes".
- **Sidebar primary category** filters the same way: union within, AND with
  the rest.
- **Search** is always AND'd on top.

### 8.3 Sort

Three options exposed in the dropdown: Name (A–Z), Year (oldest first),
Year (newest first). Items missing `year` are treated as year 0 for sorting.

---

## 9. Customization recipes

### 9.1 Use it for definitions instead of theorems

```jsx
<TheoremsExplorer
  items={definitions}
  title="Math Glossary"
  searchPlaceholder="Search definitions..."
  mainTextField="definition"
  primarySidebarLabel="Branch"
  metaFields={[
    { key: 'symbol', label: 'Symbol' },
    { key: 'unit',   label: 'Unit'   }
  ]}
  secondaryFacets={[
    { key: 'categories', from: 'rest', label: 'Subtopics', multi: true },
    { key: 'level',                    label: 'Level' }
  ]}
/>
```

### 9.2 Hide the secondary bar entirely

Pass an empty array:

```jsx
<TheoremsExplorer secondaryFacets={[]} />
```

The bar disappears (unless the user has a search query active, in which case
"Clear all" still shows). The sidebar primary filter still works.

### 9.3 Items without years (skip year-based sort options)

Currently the three sort options are baked in. If you don't want year sorts,
just don't include `year` on any item — both year-sort options will sort
everything as zero, leaving alphabetical effectively unchanged. To remove
the options visually, fork the Sort `<select>` (it's a small block in the
results header).

### 9.4 Tracking the active item from the parent

Not currently supported via props — internal state owns `openId` /
`expandedId`. If you need this, the cleanest place to add it is to lift
those two pieces of state into props with controlled/uncontrolled fallback.

---

## 10. Behavior notes & edge cases

- **Unknown top-level keys**: silently ignored. Safe to attach project-specific
  metadata.
- **Missing `categories`**: item is uncategorized, gets fallback color, passes
  primary filter unless filters are active.
- **Empty `fields`**: detail skips tabs/accordion entirely.
- **Single key in `fields`**: tabs work normally with one tab; accordion
  works normally with one section (opens by default).
- **Items shorter than the meta grid**: meta grid auto-skips missing entries
  and disappears if zero apply.
- **Lightbox navigation**: cycles through the **currently filtered + sorted**
  list, not the raw `items`. Closing and changing filters does not desync.
- **Body scroll lock**: applied while modal / drawer / lightbox are open;
  restored on close, on unmount, and on mode change.
- **Keyboard**: Esc closes overlays / collapses inline; ←/→ navigate the
  lightbox.
- **Responsive**: at viewport widths below 900px, the sidebar is hidden and
  the layout collapses to a single column.

---

## 11. Dependencies & file layout

### Required imports

- `react` (`useState`, `useEffect`, `useMemo`).
- `@/utils/contentProcessor` — the project-wide `processContent` function.
  Used to render every string value (main text, meta values, paragraphs,
  bullets). If you don't have this utility yet, the simplest stub is:

  ```js
  // utils/contentProcessor.js
  export function processContent(text) { return text; }
  ```

  …then progressively enhance it (LaTeX via KaTeX, code spans, links, etc.)
  as the rest of the codebase needs.

### Suggested file layout

```
components/
  TheoremsExplorer.jsx        ← the component
data/
  mockTheorems.js              ← mock dataset (provided)
utils/
  contentProcessor.js          ← shared text renderer
app/explorer/
  page.jsx                     ← usage example (provided)
```

### Versioning convention

Outputs in `/mnt/user-data/outputs/` use a `_vN` suffix:

- `TheoremsExplorer_v1.jsx`
- `TheoremsExplorer_v1_mockData.js`
- `TheoremsExplorer_v1_usageExample.jsx`

Each iteration creates a new `_v2`, `_v3`, … file rather than overwriting,
so previous versions are always available for comparison.