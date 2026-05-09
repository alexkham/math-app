# VisualToolsPage — Documentation

**Version:** v18
**Helper:** `buildToolIndexData` v4
**Stack:** Next.js (Pages Router), React, KaTeX via `processContent`

A page-builder component for sectioned tool/visualizer index pages on LearnMathClass.com. Auto-discovers leaves from the filesystem, groups them by frontmatter taxonomy, renders a layout with header, quick navigation, optional article, optional video walkthroughs, sub-grouped category panels, and standalone tools.

---

## Table of contents

1. [Architecture](#architecture)
2. [Data flow at a glance](#data-flow-at-a-glance)
3. [The helper — `buildToolIndexData`](#the-helper--buildtoolindexdata)
4. [Leaf data schema](#leaf-data-schema)
5. [Component props reference](#component-props-reference)
6. [Card variants](#card-variants)
7. [Variant resolution (cascading)](#variant-resolution-cascading)
8. [Card heights](#card-heights)
9. [Grid layout algorithm](#grid-layout-algorithm)
10. [Sub-groups](#sub-groups)
11. [Article block](#article-block)
12. [Videos](#videos)
13. [Themes](#themes)
14. [Sidebar](#sidebar)
15. [QuickNav and ToolsHeader](#quicknav-and-toolsheader)
16. [Custom items insertion](#custom-items-insertion)
17. [Render order](#render-order)
18. [Recipes](#recipes)
19. [Backwards compatibility](#backwards-compatibility)
20. [Troubleshooting](#troubleshooting)

---

## Architecture

Three files:

```
app/components/page-components/visual-tools-page/
├── VisualToolsPage.jsx          # main component (this file)
├── visualToolsPageThemes.js     # theme presets (deepBlue, etc.)
└── buildToolsPageData.js        # filesystem scanner / data extractor
```

`VisualToolsPage.jsx` contains everything component-side: card variants, sub-group blocks, group panel, sidebar, quick nav, tools header, article block, video player, modal, grid layout utilities. One file, one default export.

`buildToolsPageData.js` exports `buildToolIndexData(route)` — used in `getStaticProps` of the hub page (e.g. `/pages/trigonometry/visual-tools/index.jsx`) to walk the filesystem and produce the data the component consumes.

`visualToolsPageThemes.js` exposes `getTheme(name, overrides)` which returns a theme object. Themes are referenced by name (`"deepBlue"`) or fully overridden via `themeOverrides`.

---

## Data flow at a glance

```
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│  pages/<topic>/      │      │  buildToolIndexData  │      │  VisualToolsPage     │
│  visual-tools/**     │ ───▶ │  (Node, build-time)  │ ───▶ │  (React, render)     │
│  /index.jsx          │      │  scans + extracts    │      │  groups + paints     │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘
                                          │                            │
                                          ▼                            ▼
                                  { items: [...] }              flat → { categories,
                                  flat array of leaves           standalone }
                                  with category/subCategory      via in-component
                                  pulled from seoData            groupItems()
```

The helper walks the directory tree, finds every `index.jsx` (and every dynamic `[view].jsx`), parses its `seoData` block with regex, and outputs a flat array. The component groups that array by `category` and optional `subCategory` at runtime.

---

## The helper — `buildToolIndexData`

**Signature**

```js
buildToolIndexData(route: string) => Promise<{ items: Leaf[] }>
```

`route` is the path under `/pages/`, no leading slash, e.g. `'trigonometry/visual-tools'`.

**What it does**

1. Resolves `process.cwd() + '/pages/' + route` as the root.
2. Recursively walks every subdirectory.
3. For each directory, decides whether it represents one leaf, multiple leaves, or just a container:
   - Has `[view].jsx` → multiple leaves, one per `view` slug declared in `getStaticPaths` + viewConfig.
   - Has `index.jsx` (and no `[view].jsx`) → one leaf, slug = directory name.
   - No index file → container only; recurse into children.
4. Recursion continues regardless — flat URLs, nested URLs, or mixed all work.
5. For each leaf, opens the file, strips comments, and runs regex against the source to find `seoData` fields and (for view files) viewConfig fields.

**Extracted fields per leaf**

| Source key                       | Becomes leaf field   | Notes                                              |
|----------------------------------|----------------------|----------------------------------------------------|
| `seoData.name` or `seoData.title`| `title`              | Falls back to slug → title-case if both missing.   |
| `hubDescription`                 | `description`        | Long-form prose preferred for hub cards.           |
| `seoData.description`            | `shortDescription`   | The ≤160-char meta tag form. Also fallback for `description`. |
| `seoData.url`                    | `href`               | Falls back to derived route.                       |
| `image`                          | `image`              | Path or full URL.                                  |
| `imageAlt`                       | `imageAlt`           |                                                    |
| `svg`                            | `svg`                | Inline SVG starting with `<svg`.                   |
| `icon`                           | `icon`               | Emoji or short string.                             |
| `formula`                        | `formula`            | LaTeX, with or without `$…$` wrapping.             |
| `category`                       | `category`           | **Drives top-level grouping.**                     |
| `subCategory`                    | `subCategory`        | **Drives sub-group inside category.**              |
| `cardVariant`                    | `cardVariant`        | Per-card variant override (`v1`–`v4`, `b1`–`b3`).  |

**[view].jsx handling**

If a folder contains a `[view].jsx` file, the helper:
1. Scans `getStaticPaths` for `{ params: { view: '...' } }` entries → list of view slugs.
2. For each slug, finds the matching block inside the `viewConfig` object (whatever `viewConfig['<slug>']: { ... }` literal exists).
3. Runs `extractFields` on that sub-block, producing one leaf per view.

This means a single `[view].jsx` page can declare 5+ leaves with their own seo, category, subCategory, etc.

**Authoring requirements on tool pages**

Each tool page's `seoData` should declare at minimum a `title` and `description`. To participate in grouping it must declare a `category` (and optionally a `subCategory`). Without `category` it renders as a standalone big card.

Example (`/pages/trigonometry/visual-tools/sine-explorer/index.jsx`):

```js
export async function getStaticProps() {
  return {
    props: {
      seoData: {
        name: 'Sine Wave Explorer',
        title: 'Sine Wave Explorer | Learn Math Class',
        description: 'Interactive visualizer for amplitude, period, and phase shifts of the sine function.',
        hubDescription: 'Drag the sliders to see how amplitude stretches the wave vertically, period compresses it horizontally, and phase shift slides it along the x-axis. Includes a side-by-side comparison with the reference curve y = sin(x).',
        url: '/trigonometry/visual-tools/sine-explorer',
        image: '/images/visual-tools/sine-explorer.png',
        imageAlt: 'Sine wave with amplitude and period annotations',
        category: 'Functions',
        subCategory: 'Graphs',
        cardVariant: 'v1',
      },
    },
  };
}
```

The helper extracts all of those into the leaf, the component groups by `category`, renders inside the `Functions` panel under the `Graphs` sub-group, using the V1 card variant.

---

## Leaf data schema

A leaf is a plain object. **Every field except the function-essential ones is optional.** Missing fields trigger fallbacks; nothing crashes.

| Field              | Type       | Used by                             | Required?                | Notes                                                  |
|--------------------|------------|-------------------------------------|--------------------------|--------------------------------------------------------|
| `title`            | string     | every card                          | recommended              | Falls back to slug if missing.                         |
| `description`      | string     | every card                          | optional                 | If missing, the description block is omitted entirely. |
| `shortDescription` | string     | (informational; not directly rendered today) | optional        |                                                        |
| `href`             | string     | every card link                     | recommended              | Falls back to `'#'`.                                   |
| `image`            | string     | V1, V2, B1, B2 visual               | optional                 | Triggers `next/image`.                                 |
| `imageAlt`         | string     | image alt attribute                 | optional                 | Falls back to title.                                   |
| `svg`              | string     | V1, V2, B1, B2 visual (alt to image)| optional                 | Inline SVG markup.                                     |
| `icon`             | string     | V3, B3 inline icon                  | optional                 | Emoji or short character string.                       |
| `formula`          | string     | V4 formula banner                   | required for V4          | LaTeX. Wrapped in `$…$` if not already.                |
| `category`         | string     | grouping                            | optional                 | If absent → leaf renders as standalone big card.       |
| `subCategory`      | string     | sub-grouping inside category        | optional                 | If absent → leaf goes into category's "Other" zone.    |
| `cardVariant`      | string     | per-card variant override           | optional                 | One of `v1`,`v2`,`v3`,`v4`,`b1`,`b2`,`b3`.            |
| `cardHeight`       | number     | per-card height override            | optional                 | Overrides everything else for this card only.          |
| `id`               | string     | DOM anchor for standalone cards     | optional                 | Falls back to slugified title.                         |

**Fallback chain when a card has no visual at all** (no `image`, no `svg`, no `icon`):
- Mini cards V1, V2 → silently downgraded to V3 (icon+text, but icon may also be absent → just text).
- Big cards B1, B2 → silently downgraded to B3.

This means you can ship a tool page with nothing but `title`, `description`, `category`, and the card will still render cleanly as text-only.

---

## Component props reference

### Top-level page

| Prop                  | Type                                       | Default            | Description                                                                                                  |
|-----------------------|--------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------|
| `tools`               | `Array \| { items: [] } \| { children: [] }` | `[]`             | Leaves. Accepts flat array, `{ items }`, or legacy `{ children: [{ hasViews, views }] }`.                    |
| `pageTitle`           | string                                     | `'Visual Tools'`   | The H1.                                                                                                      |
| `intro`               | `{ title?, description?, tip? }`           | `null`             | Rendered inside ToolsHeader. All sub-fields optional.                                                        |
| `article`             | string                                     | `null`             | **Legacy.** Old-style markdown string rendered in ToolsHeader's lower section.                              |
| `pageArticle`         | `{ eyebrow?, title?, content? }`           | `null`             | **New.** Page-level article block rendered between ToolsHeader and categories.                              |
| `icon`                | string                                     | `'🔍'`             | Emoji shown inside ToolsHeader's gradient square.                                                            |
| `dropdownLabel`       | string                                     | `'All Tools'`      | Label on the QuickNav dropdown button.                                                                       |
| `bodyOffsetTop`       | number                                     | `60`               | Pixels of margin between ToolsHeader and the categories.                                                     |

### Theming

| Prop              | Type                | Default        | Description                                                          |
|-------------------|---------------------|----------------|----------------------------------------------------------------------|
| `theme`           | string              | `'deepBlue'`   | Named theme preset.                                                  |
| `themeOverrides`  | object              | `null`         | Partial theme object merged on top of the named theme.              |

### Sidebar

| Prop                | Type                | Default | Description                                                                  |
|---------------------|---------------------|---------|------------------------------------------------------------------------------|
| `sidebar`           | boolean \| array    | `false` | `true` → auto-build from categories; an array → use as-is; `false` → off.    |
| `sidebarBrandName`  | string              | `null`  | Big text at sidebar top. Falls back to `pageTitle`.                          |
| `sidebarBrandSub`   | string              | `null`  | Smaller text below the brand.                                                |

### Cards

| Prop                | Type                                         | Default     | Description                                                                                          |
|---------------------|----------------------------------------------|-------------|------------------------------------------------------------------------------------------------------|
| `miniCardVariant`   | `'v1'\|'v2'\|'v3'\|'v4'`                     | `'v1'`      | Default mini-card variant for grouped leaves.                                                        |
| `bigCardVariant`    | `'b1'\|'b2'\|'b3'`                           | `'b1'`      | Default big-card variant for standalone leaves.                                                      |
| `groupVariants`     | `{ [categoryName]: variant }`                | `null`      | Per-category override. e.g. `{ 'Functions': 'v4' }` makes every Functions card use V4.               |
| `cardHeights`       | `{ v1?, v2?, v3?, v4?, b1?, b2?, b3? }`      | `null`      | Per-variant fixed heights in px. Merged on top of defaults.                                          |
| `subGroupStyle`     | `'default' \| 'tabs'`                        | `'default'` | How sub-groups inside one category render.                                                           |

### Article + videos (new in v18)

| Prop                | Type                                                 | Default                            | Description                                                                          |
|---------------------|------------------------------------------------------|------------------------------------|--------------------------------------------------------------------------------------|
| `videos`            | `Video[]`                                            | `null`                             | Page-level video set.                                                                |
| `videoLayout`       | `'above'\|'beside'\|'below'\|'strip'`                | `'beside'`                         | Layout for the page-level article+videos block.                                      |
| `videosHeading`     | string                                               | `'Walkthroughs'`                   | Header on the playlist UI.                                                           |
| `videosCtaLabel`    | string                                               | `'Watch the walkthrough'`          | Label above the player in `'below'` layout.                                          |
| `videosStripTitle`  | string                                               | `'Watch a quick intro for any topic'` | Heading used in `'strip'` layout.                                                |
| `categoryArticles`  | `{ [categoryName]: { eyebrow?, title?, content? } }` | `null`                             | Per-category article overrides, rendered inside that category's panel.               |
| `categoryVideos`    | `{ [categoryName]: { videos, layout? } }`            | `null`                             | Per-category video overrides.                                                        |

### Misc

| Prop          | Type                                | Default | Description                                                                              |
|---------------|-------------------------------------|---------|------------------------------------------------------------------------------------------|
| `customItems` | `CustomItem[]`                      | `null`  | Insert extra leaves at specific positions. See [Custom items](#custom-items-insertion).  |

### Type shapes

```ts
type Video = {
  id?: string;
  title?: string;
  duration?: string;        // e.g. '3:12'
  embedUrl?: string;        // YouTube/Vimeo embed URL → opens in modal
  thumbnail?: string;       // image URL for thumbnail
};

type Article = {
  eyebrow?: string;         // small uppercase label
  title?: string;           // large heading
  content?: string;         // markdown / HTML, processed by processContent
};

type CustomItem = {
  at: number | 'start' | 'end';
  title: string;
  description?: string;
  href?: string;
  // ... any other Leaf fields
};
```

---

## Card variants

### Mini cards (used for leaves inside a category)

| Variant | Layout                          | Best for                                      | Required field        | Auto-fallback            |
|---------|---------------------------------|-----------------------------------------------|-----------------------|--------------------------|
| **V1**  | Image top, text bottom (vertical) | Tools with distinctive visuals (graphs, screenshots) | one of image/svg/icon | → V3 if no visual        |
| **V2**  | Image left, text right (horizontal) | Compact rows of 2; small visual area     | one of image/svg/icon | → V3 if no visual        |
| **V3**  | Inline icon + text (no banner) | Minimal visual; works always                  | none                  | always works (text only) |
| **V4**  | Formula banner top, text bottom | Math-heavy tools (identities, theorems)       | `formula`             | → V1 if no formula       |

### Big cards (used for standalone leaves with no category)

| Variant | Layout                          | Best for                                | Required field        | Auto-fallback   |
|---------|---------------------------------|-----------------------------------------|-----------------------|-----------------|
| **B1**  | Image left, text right (hero)   | Marquee tool with banner image          | one of image/svg/icon | → B3 if no visual |
| **B2**  | Image top banner, text bottom   | Wide preview / screenshot               | one of image/svg/icon | → B3 if no visual |
| **B3**  | Text-led with inline icon       | No visual to show; pure text descriptor | none                  | always works    |

Each card is itself a `<Link>` — clicking anywhere on it navigates to `href`. Each card also has a visible CTA (`Open tool →` for mini, `View Details` pill for big) so the affordance is unmistakable.

---

## Variant resolution (cascading)

For each leaf at render time, the component resolves the variant in this order — first match wins:

1. **Per-card override** — `leaf.cardVariant` if set on the leaf itself.
2. **Per-group override** — `groupVariants[leaf.category]` if defined.
3. **Global default** — `miniCardVariant` (for grouped leaves) or `bigCardVariant` (for standalone).

Then the auto-fallback layer adjusts the variant if the leaf lacks the required field (e.g. V4 → V1 when no formula, V1 → V3 when no visual).

**Example**

```jsx
<VisualToolsPage
  miniCardVariant="v1"
  bigCardVariant="b1"
  groupVariants={{
    'Identities': 'v4',     // every leaf in "Identities" tries V4
    'Triangles':  'v3',     // every leaf in "Triangles" uses V3
  }}
  /* ... */
/>
```

A leaf in `Identities` with no formula would fall back from V4 to V1 (and again to V3 if no visual either).

---

## Card heights

Every card on the page renders at a fixed height per variant. This eliminates the "stair-step" effect and the "huge empty space inside short cards" problem caused by grid stretching.

**Defaults** (px):

```js
{ v1: 320, v2: 200, v3: 220, v4: 300,
  b1: 280, b2: 360, b3: 240 }
```

**Override globally**

```jsx
<VisualToolsPage
  cardHeights={{ v1: 340, b3: 260 }}   // partial; rest stay default
/>
```

**Override per card**

Set `cardHeight` directly on a leaf:

```js
{ title: 'Featured tool', cardHeight: 380, ... }
```

**Description overflow handling**

Each card has fixed-size title, visual area (if any), and CTA. Description gets the leftover vertical space and is wrapped in a scroll container with:
- Hidden scrollbar (cross-browser).
- Bottom mask-fade (28px gradient) signaling "more on click."
- Pure CSS, no JS observers.

---

## Grid layout algorithm

The grid is **algorithmic**, not handwritten per count.

**Rules**

- Max 3 cards per row, min 2 cards per row (except total `N === 1`).
- Never produces a row of 1 unless `N === 1`.
- Row of 3 → cards are 1/3 width.
- Row of 2 → cards are 1/2 width.
- Row of 1 (`N === 1` only) → card is 1/2 width, centered.

**Decision tree**

```
N === 0          → []
N === 1          → [1]                            (special centered)
N % 3 === 0      → [3, 3, ..., 3]                 (clean rows of 3)
N % 3 === 2      → [3, 3, ..., 3, 2]              (trailing row of 2)
N % 3 === 1 (≥4) → [3, 3, ..., 3, 2, 2]           (avoid orphan 1)
```

**Implementation**

A 6-column CSS grid. Cards in a row of 3 each `span 2`. Cards in a row of 2 each `span 3`. The single card in a row of 1 is `2 / span 3` (centered).

| N  | Layout         | Card widths        |
|----|----------------|--------------------|
| 1  | 1              | 1/2 (centered)     |
| 2  | 2              | 1/2, 1/2           |
| 3  | 3              | 1/3, 1/3, 1/3      |
| 4  | 2 + 2          | 1/2, 1/2           |
| 5  | 3 + 2          | 1/3, then 1/2 each |
| 6  | 3 + 3          | 1/3                |
| 7  | 3 + 2 + 2      | 1/3, then 1/2 each |
| 8  | 3 + 3 + 2      | 1/3, then 1/2 each |
| 9  | 3 + 3 + 3      | 1/3                |
| 10 | 3 + 3 + 2 + 2  | mixed              |
| 11 | 3 + 3 + 3 + 2  | mixed              |
| 12 | 3 + 3 + 3 + 3  | 1/3                |

Same rules apply to every grid in the component: standalone cards section, category ungrouped block, and each sub-group block.

**Mobile**: at viewport ≤768px, all cells collapse to single column.

---

## Sub-groups

A category may have:
- An **ungrouped zone** — leaves in that category with no `subCategory`.
- One or more **sub-groups** — leaves grouped by their `subCategory` value.

When both exist, the ungrouped zone is labeled "Other" and rendered first.

### Default style (`subGroupStyle="default"`)

Each sub-group renders inline as a block with:
- Left accent rail (3px solid).
- Pill chip header showing the sub-group name.
- Tool count next to the pill.
- Algorithmic grid of mini cards.

Multiple sub-groups stack vertically inside the category panel.

### Tabs style (`subGroupStyle="tabs"`)

Each sub-group becomes a tab at the top of the category body. Only the active sub-group's grid is visible at a time. Suitable when a category has many sub-groups and you'd otherwise get a very tall panel.

The "Other" zone (ungrouped leaves) becomes the first tab when present.

---

## Article block

Two locations:

### Page-level

```jsx
<VisualToolsPage
  pageArticle={{
    eyebrow: 'Why visual tools?',
    title:   'Seeing trig instead of memorizing it',
    content: '...markdown body...',
  }}
/>
```

Renders between ToolsHeader and the categories. Article-only (no videos) → standalone block. Combined with `videos` → laid out per `videoLayout` (above/beside/below/strip).

### Per-category

```jsx
<VisualToolsPage
  categoryArticles={{
    'Functions': {
      eyebrow: 'About this category',
      title: 'Functions in trigonometry',
      content: '...',
    },
    'Triangles': { content: 'Just body text, no eyebrow or title.' },
  }}
/>
```

Renders inside the category panel, before the cards grid. All sub-fields are optional — eyebrow alone, title alone, content alone, or any combination.

`processContent(content)` is invoked, so the same KaTeX/markdown features available elsewhere on the site work here.

---

## Videos

### Shape

```js
videos = [
  {
    id: 'intro',
    title: 'Intro to trigonometry tools',
    duration: '3:12',
    embedUrl: 'https://www.youtube.com/embed/abc123',
    thumbnail: '/images/videos/intro-thumb.jpg',
  },
  ...
]
```

Click a thumbnail or the player → opens a modal with the embed iframe. Esc or outside-click closes the modal.

### Layouts

| Layout    | Player + playlist arrangement                                        |
|-----------|----------------------------------------------------------------------|
| `above`   | Player on top, horizontal accordion playlist below it, then article. |
| `beside`  | 2-column split: article on the left, sticky player on the right with vertical playlist below. |
| `below`   | Article on top with the player wrapped inside it as a "Watch the walkthrough" CTA at the bottom. |
| `strip`   | Article first, then a grid of clickable thumbnails (no fixed player). Click → modal. |

### Page-level vs per-category

```jsx
<VisualToolsPage
  // page-level
  videos={[...]}
  videoLayout="beside"

  // per-category
  categoryVideos={{
    'Functions': { videos: [...], layout: 'strip' },
    'Triangles': { videos: [...] },                  // layout omitted → defaults to 'beside'
  }}
/>
```

Each category can have its own video set with its own layout. Combined with `categoryArticles[catName]`, you get a full per-category article+videos block inside that category's panel.

### Empty / partial inputs

- `videos` is `null`, `[]`, or all entries lack both `embedUrl` and `title` → no video UI rendered.
- `pageArticle` is `null` or all sub-fields are empty → no article block rendered.
- Both empty → nothing rendered between ToolsHeader and categories.

Same logic at the per-category level.

---

## Themes

`getTheme(name, overrides)` returns a flat object of color tokens used across the component. Tokens include:

- `accent`, `accentHover`, `accentSecondary` — primary brand colors.
- `text`, `textSecondary`, `textMuted` — body and caption text colors.
- `pageTitle` — H1 color.
- `bgSubtle`, `bgMuted` — background tints.
- `border`, `borderStrong` — divider lines.
- `chipBg` — pill/chip backgrounds.
- `cardBg`, `cardText` — card surface and on-card text.
- `tipBg`, `tipText` — Tip strip styling.
- `sidebarBg`, `sidebarText`, `sidebarTextMuted`, `sidebarHoverBg`, `sidebarDivider` — sidebar styling.

**Use a preset:**

```jsx
<VisualToolsPage theme="deepBlue" />
```

**Override specific tokens:**

```jsx
<VisualToolsPage
  theme="deepBlue"
  themeOverrides={{
    accent: '#9c1c1c',
    cardBg: '#1a2840',
  }}
/>
```

The merge is shallow: any token you don't pass keeps the preset's value.

---

## Sidebar

Three modes via the `sidebar` prop:

### `sidebar={false}` (default)

No sidebar. Page content uses full width.

### `sidebar={true}` — auto

Build sidebar groups from the data automatically:
- One group per category, listing every tool in that category as a link.
- One "Other tools" group with every standalone leaf.

### `sidebar={[...]}` — manual

Pass an array of group objects:

```js
[
  {
    title: 'Quick links',
    icon: '⚡',
    links: [
      { label: 'Most popular', href: '#popular', icon: '🔥' },
      { label: 'Newest',       href: '#new' },
    ],
  },
  { title: 'Reference', links: [...] },
]
```

Each group has an optional `title`, optional `icon`, and an array of `{ label, href, icon? }` links.

### Behavior

- Fixed left, expands on hover/click, collapses by default.
- Hidden entirely below 768px breakpoint.
- Outside-click closes when expanded.
- Page content shifts right by sidebar width when sidebar is visible.

`sidebarBrandName` and `sidebarBrandSub` set the title block at the top.

---

## QuickNav and ToolsHeader

### QuickNav

Sits below the H1, contains:
- Dropdown menu (hover-open) listing every category and every standalone tool.
- Pill row of clickable chips with the same items.
- Tool count badge.

Clicking any item smooth-scrolls to its anchor (`#cat-<slugified-name>` or `#tool-<slugified-name>`).

Only the labels are configurable — the `dropdownLabel` prop sets the dropdown button text. The pill row is fixed to "or quick jump:" prefix.

### ToolsHeader

The intro panel below QuickNav. Contains:
- Gradient square with `icon` emoji.
- `intro.title` (h2).
- `intro.description` (paragraph).
- `intro.tip` block (yellow strip with light-bulb icon).
- Stats row: tool count, category count (if any), "100% Free."

If `intro` is `null`, the title/description rows are skipped but the stats row still renders. Pass `intro={null}` to hide everything except stats.

The legacy `article` prop (a markdown string) renders inside ToolsHeader's lower panel as a fallback for old usage. New work should use `pageArticle` instead.

**Font sizes** (v18 reduced from earlier versions):
- Title: `1.25rem`
- Description: `0.95rem`
- Tip: `0.9rem`
- Stat numbers: `1.15rem`
- Stat labels: `0.88rem`

---

## Custom items insertion

Inject leaves at runtime without filesystem entries — useful for "coming soon" cards.

```jsx
<VisualToolsPage
  customItems={[
    {
      at: 'end',
      title: 'Unit Circle (coming soon)',
      description: 'Interactive unit circle with live readouts.',
      href: '#',
    },
    { at: 0, title: 'Featured', description: '...', href: '/featured' },
    { at: 'start', title: 'Pinned to top', href: '...' },
  ]}
/>
```

`at` accepts:
- `'start'` — equivalent to `0`.
- `'end'` or `null`/missing — appended to the end.
- A number — index in the original auto-pulled list (NOT the merged list).

Custom items can also have `category`, `subCategory`, `cardVariant`, etc. They participate in grouping just like auto-pulled leaves.

---

## Render order

```
1. <h1> page title
2. QuickNav
3. ToolsHeader (intro / tip / stats / legacy article)
4. Page-level article + videos block       ← optional, only if pageArticle or videos present
5. For each category in order:
   GroupPanel:
     · Category header (count, sub-group count, title)
     · Per-category article + videos       ← optional
     · Sub-group display (default or tabs):
         · Ungrouped "Other" zone
         · Sub-group blocks, each with header + grid
6. Standalone tools section (BigCard grid) ← optional, only if any leaves lack category
7. Bottom spacer
8. VideoModal (mounted at end, conditional)
```

---

## Recipes

### Bare minimum

```jsx
import VisualToolsPage from '@/app/components/page-components/visual-tools-page/VisualToolsPage';
import { buildToolIndexData } from '@/app/components/page-components/visual-tools-page/buildToolsPageData';

export async function getStaticProps() {
  const data = await buildToolIndexData('trigonometry/visual-tools');
  return { props: { data } };
}

export default function Page({ data }) {
  return <VisualToolsPage tools={data} pageTitle="Trigonometry Visual Tools" />;
}
```

That's it. With just leaves and a title, every safe default kicks in.

### With sidebar, intro, and tip

```jsx
<VisualToolsPage
  tools={data}
  pageTitle="Trigonometry Visual Tools"
  intro={{
    title: 'Free interactive tools for learning trigonometry',
    description: 'Each tool turns a piece of trig into something you can manipulate, watch, and step through.',
    tip: 'Start with the Angle Visualizer to get a feel for the controls.',
  }}
  icon="📐"
  sidebar={true}
  sidebarBrandName="Trigonometry"
  sidebarBrandSub="Visual Tools"
/>
```

### Page-level article with side-by-side video

```jsx
<VisualToolsPage
  tools={data}
  pageArticle={{
    eyebrow: 'Why visual tools?',
    title: 'Seeing trig instead of memorizing it',
    content: 'Trig is one of the rare math topics where the geometry can be visualized completely. ...',
  }}
  videos={[
    { id: 'intro', title: 'Intro', duration: '3:12', embedUrl: 'https://www.youtube.com/embed/abc' },
    { id: 'angles', title: 'Working with angles', duration: '2:45', embedUrl: '...' },
  ]}
  videoLayout="beside"
/>
```

### Per-category video walkthroughs

```jsx
<VisualToolsPage
  tools={data}
  categoryArticles={{
    'Functions': {
      title: 'Functions in trigonometry',
      content: 'Sine, cosine, and tangent are functions of an angle. ...',
    },
  }}
  categoryVideos={{
    'Functions': {
      videos: [
        { id: 'fn1', title: 'Amplitude', duration: '1:30', embedUrl: '...' },
        { id: 'fn2', title: 'Phase shift', duration: '2:00', embedUrl: '...' },
      ],
      layout: 'strip',
    },
  }}
/>
```

### Forcing a card style on one category

```jsx
<VisualToolsPage
  tools={data}
  miniCardVariant="v1"                   // global default
  groupVariants={{ 'Identities': 'v4' }} // override for this category
/>
```

### Coming-soon placeholders

```jsx
<VisualToolsPage
  tools={data}
  customItems={[
    {
      at: 'end',
      title: 'Triangle Solver (coming soon)',
      description: 'Solve any triangle from given sides and angles.',
      href: '#',
    },
  ]}
/>
```

### Custom card heights

```jsx
<VisualToolsPage
  tools={data}
  cardHeights={{ v1: 360, b3: 280 }}   // bigger v1, taller b3
/>
```

### Theming

```jsx
<VisualToolsPage
  tools={data}
  theme="deepBlue"
  themeOverrides={{
    accent: '#0c5e3f',
    cardBg: '#0a2e1f',
  }}
/>
```

### Manual sidebar

```jsx
<VisualToolsPage
  tools={data}
  sidebar={[
    {
      title: 'Featured',
      icon: '⭐',
      links: [
        { label: 'Most used',   href: '#tool-most-used' },
        { label: 'Recently added', href: '#tool-recent' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Functions',  href: '#cat-functions' },
        { label: 'Identities', href: '#cat-identities' },
      ],
    },
  ]}
/>
```

---

## Backwards compatibility

The component still accepts the old `tools` shape `{ children: [...] }` from the previous helper. Children with `hasViews: true` are flattened automatically: each view becomes a leaf, inheriting the parent's title as its `category` (only when the view doesn't already declare one). This keeps any unmigrated pages working while you transition to flat URLs + frontmatter taxonomy.

The legacy `article` prop (a markdown string rendered inside ToolsHeader's lower panel) still works — when both `article` and `pageArticle` are provided, the new `pageArticle` block renders between ToolsHeader and the categories, and the legacy block stays inside ToolsHeader. Use one or the other, not usually both.

---

## Troubleshooting

**Cards show "name / Metadescription" placeholder text**
The leaves don't have `hubDescription` or `description` extracted. Check the leaf's `seoData` block for valid quoted strings, and that comments aren't hiding the actual block. Long descriptions live in `hubDescription`; the helper falls back to `description` only when `hubDescription` is missing.

**Cards aren't grouped — everything is in standalone**
None of the leaves have a `category` field. Add `category: 'Functions'` (or whatever) to each tool's `seoData`. The component groups by category at runtime; without it, every leaf is treated as standalone.

**A card has the wrong variant**
Resolution order is per-card → per-group → global. Check `cardVariant` on the leaf first, then `groupVariants[category]`, then `miniCardVariant`/`bigCardVariant`. Auto-fallback may also be downgrading: V4 needs `formula`; V1/V2 need `image`/`svg`/`icon`; without them, the resolver downgrades to V3/B3.

**A card looks too short / too tall**
Adjust `cardHeights` globally or `cardHeight` on the specific leaf. Defaults are tuned for typical content lengths.

**Long descriptions are cut off**
Expected — descriptions overflow with a fade-out gradient inside a fixed-height card. Click opens the full tool page. To show more, raise the card height for that variant or that card.

**QuickNav has too many pills**
Each category and each standalone tool gets its own pill. To collapse standalone tools into a single pill, set their `category` (even an artificial one like "Other"). To shorten labels, edit titles — the component strips trailing "Visualizer", "Explorer", "Calculator" automatically when generating short labels.

**Sidebar doesn't appear**
Sidebar is hidden below 768px. Above that, ensure `sidebar={true}` (auto) or `sidebar={[...]}` (manual). Empty array of categories + empty standalone = nothing to populate the auto-build with.

**Video modal doesn't play**
The video object needs `embedUrl`. Without one, the modal opens but shows a "No embedUrl provided" message instead of an iframe.

**The page-level article block renders nothing**
`pageArticle` needs at least one of `eyebrow`, `title`, or `content`. An empty object `{}` is treated as "no article" and the block skips rendering.

**Per-category article shows but per-category videos don't**
Ensure the `categoryVideos[categoryName]` value has a `videos` array with at least one entry that has `embedUrl` or `title`. Missing or empty array → video UI omitted; article still renders.

---

**End of documentation.**