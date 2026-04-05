# SectionFrontPage System — Documentation

## Overview

The SectionFrontPage system auto-discovers and renders section-level landing pages for LearnMathClass.com. It scans the filesystem at build time, extracts metadata from child pages, and renders a fully assembled page with hero, sidebar, navigation, themed sections, and tool cards — with zero manual data assembly.

### Files

| File | Purpose |
|------|---------|
| `buildSectionData.js` | Server-side data builder. Scans filesystem, extracts seoData, assembles sections and sectionData. |
| `SectionFrontPage.jsx` | Main component. Renders hero, sidebar, topic strip, article, and all section types. |
| `ToolSectionPage.jsx` | Component for calculator and visual-tool landing pages. Imports shared pieces from SectionFrontPage. |
| `sectionFrontPageThemes.js` | Color theme definitions. Six themes, each a flat object of color tokens. |
| `SectionFrontPageTemplate.jsx` | Page template for section front pages. Copy into `pages/` directory. |
| `ToolSectionPageTemplate.jsx` | Page template for tool section pages. Copy into `pages/` directory. |
| `AutoLandingPage.jsx` | Alternative visual shell using expandable sidebar + compact cards. Same data source. |

---

## Quick Start

### Section Front Page (e.g. `/algebra`)

1. Copy `SectionFrontPageTemplate.jsx` to `pages/algebra/index.jsx`
2. Change the route:

```js
const { sections, sectionData } = await buildSectionData('/algebra');
```

3. Fill in `seoData` (browser tab, search engines):

```js
seoData: {
  title: "Algebra: Formulas, Definitions & Concepts | Learn Math Class",
  description: "Master algebraic concepts...",
  keywords: keyWords.join(", "),
  url: "/algebra",
  name: "Algebra",
},
```

4. Fill in `pageMeta` (hero banner):

```js
pageMeta: {
  title: "Algebra",
  subtitle: "Master algebraic concepts from foundations to advanced topics.",
  breadcrumbUrl: "/algebra",
},
```

5. Optionally add `article` (appears between topic strip and sections):

```js
article: {
  title: "What is Algebra?",
  content: "Algebra is the branch of mathematics...",
},
```

6. Optionally set `theme` (default: `'deepBlue'`):

```jsx
<SectionFrontPage theme="forest" ... />
```

That's it. Everything else is auto-discovered.

### Tool Section Page (e.g. `/algebra/calculators`)

1. Copy `ToolSectionPageTemplate.jsx` to `pages/algebra/calculators/index.jsx`
2. Set the parent route and tool slug:

```js
const parentRoute = '/algebra';
const toolSlug = 'calculators'; // or 'visual-tools'
const { sections, sectionData } = await buildSectionData(parentRoute);
const toolChildren = sectionData[toolSlug]?.children || [];
const siblingSections = sections.filter((s) => s.id !== toolSlug);
```

3. Fill in `seoData` and `pageMeta` same as above.
4. Done.

---

## How Auto-Discovery Works

`buildSectionData(route)` does the following:

1. Scans the `pages/` directory at the given route
2. Lists all child directories (that have an `index.js/jsx/ts/tsx`) and standalone page files
3. Classifies each child by slug using `TYPE_MAP`:

| Slug | Type |
|------|------|
| `formulas` | `formulas` |
| `definitions` | `definitions` |
| `calculators` | `calculators` |
| `visual-tools` | `visual-tools` |
| anything else | `subsection` |

4. For each child, reads the source file and extracts seoData fields via regex
5. For `formulas` and `definitions`, imports the data module and extracts categories/items
6. For `calculators` and `visual-tools`, scans their children (one level deep)
7. For `subsection`, scans children and grandchildren (two levels deep)
8. Returns `{ sections, sectionData }`

### What gets extracted from page files

The regex scanner looks for these fields in the **uncommented** portion of each page's source:

| Field | Where it goes | Example |
|-------|--------------|---------|
| `title` (from seoData) | Section title (pipe-stripped) | `"Powers & Exponents: Rules | Learn Math Class"` → `"Powers & Exponents: Rules"` |
| `name` | Section title (preferred over title) | `"Powers and Exponents"` |
| `description` | Intro prose / card description | `"Learn powers and exponents..."` |
| `url` | Section link | `"/algebra/powers"` |
| `image` | Card/intro image | `"/images/algebra/powers.jpg"` |
| `imageAlt` | Image alt text | `"Powers diagram"` |
| `svg` | Inline SVG | `"<svg>...</svg>"` |
| `navIcon` | Custom nav icon override | `"√"` |
| `introLayout` | Intro block layout | `"horizontal"` or `"vertical"` |
| `introImagePosition` | Image position in intro | `"left"`, `"right"`, `"top"`, `"bottom"` |

**Important:** The scanner strips all `//` and `/* */` comments before matching. This prevents grabbing placeholder values from commented-out template code.

### Title resolution order

1. `seo.name` (cleanest, preferred)
2. `seo.title` (pipe-stripped)
3. `slugToTitle(slug)` (fallback from filename)

---

## Page Rendering Order

Sections render in this fixed order regardless of filesystem order:

| Order | Type | Renderer |
|-------|------|----------|
| 1 | `visual-tools` | `VisualToolsSection` |
| 2 | `formulas` | `FormulasSection` |
| 3 | `definitions` | `DefinitionsSection` |
| 4 | `editorial` | `EditorialSection` |
| 5 | `standalone` | `StandaloneSection` |
| 6 | `subsection` | `SubsectionSection` |
| 7 | `calculators` | `CalculatorsSection` |

Visual tools always appear first. Calculators always appear last.

---

## Five Section Types

### formulas

Imports formula data from `@/app/api/db/formulas/{parentSlug}/{parentSlug}Formulas`. Renders category cards (clickable, scroll to group), then formula chips with KaTeX rendering.

### definitions

Imports definition data from `@/app/api/db/definitions/{parentSlug}/{parentSlug}Definitions`. Renders category cards, then definition items (term + description in a 2-column grid).

### calculators

Scans child pages under the `calculators/` directory. Each child becomes a `CalculatorCard` with icon, tag, title, description, and "Open calculator →" CTA. Supports `image`, `imageAlt`, `svg` on each card.

### visual-tools

Scans child pages under `visual-tools/`. Each child becomes a `VisualToolCard` with preview area (page-provided image > page-provided SVG > random placeholder SVG), icon, tag, title, description, and "Open tool →" CTA.

### subsection

Scans child pages and grandchild pages. Each child becomes a `CategoryCard` with title, description, optional image/SVG, and "Learn more →" CTA. Supports two levels of nesting.

---

## Card Grid Layout

All card grids use `EqualGrid`:

- Maximum 3 cards per row
- Each row distributes width equally among its cards
- 4 cards = 3 + 1 (full width)
- 5 cards = 3 + 2 (half/half)
- 7 cards = 3 + 3 + 1

---

## Images, SVGs, and Visual Content

### On section level (IntroProse)

Add to the page's `seoData`:

```js
seoData: {
  ...
  image: "/images/algebra/powers.jpg",
  imageAlt: "Powers visualization",
  introLayout: "horizontal",        // or "vertical"
  introImagePosition: "right",      // "left", "right", "top", "bottom"
},
```

- When image/SVG present: 50/50 split (horizontal) or stacked (vertical)
- When absent: text goes full width with left accent bar
- Defaults: horizontal layout, image right

### On card level

Add `image` to the child page's `seoData`:

```js
seoData: {
  ...
  image: "/images/algebra/linear-inequalities.jpg",
},
```

The card renders a 140px full-width image on top. When absent, the card renders normally without any image area.

### Visual tool placeholders

When a visual tool page has no `image` or `svg`, a random placeholder SVG from a built-in array of 12 math-themed graphics is shown. The placeholder uses the active theme's colors.

---

## Theming

### Available themes

| Key | Character | Best for |
|-----|-----------|----------|
| `deepBlue` | Classic academic blue | Algebra, general math |
| `slate` | Cool professional gray | Linear algebra, applied math |
| `forest` | Deep green | Calculus, analysis |
| `burgundy` | Warm dark red | Probability, statistics |
| `navyInk` | Dark blue-gray, bright accents | Discrete math, CS |
| `charcoal` | Near-black, stone tones | Number theory, abstract |

### Using a theme

Pass the theme key as a prop:

```jsx
<SectionFrontPage theme="forest" ... />
<ToolSectionPage theme="forest" ... />
```

### Theme tokens

Each theme provides these color tokens:

| Token | Used for |
|-------|----------|
| `heroBg` | Hero banner background |
| `sidebarBg` | Sidebar background |
| `sidebarAccent` | Sidebar active indicator |
| `stripActiveColor` | Active strip link text |
| `stripActiveBg` | Active strip link background |
| `stripActiveBorder` | Active strip link bottom border |
| `stripTextColor` | Inactive strip link text |
| `headingColor` | Section headings |
| `headerBorderColor` | Section header bottom border |
| `cardAccent` | Card left border |
| `cardAccentHover` | Card left border on hover |
| `badgeBg` | Badge background |
| `badgeColor` | Badge text |
| `buttonBg` | Button background |
| `buttonBgHover` | Button hover background |
| `textPrimary` | Primary text |
| `textSecondary` | Secondary/body text |
| `textMuted` | Muted/hint text |
| `contentBg` | Content area background |
| `termColor` | Definition term color |
| `toolAccent` | Tool card accent |
| `toolAccentBg` | Tool card icon background |
| `articleBg` | Article block background |
| `articleBorder` | Article block border |
| `articleHeading` | Article heading color |
| `articleText` | Article body text |
| `articleAccent` | Article accent bar |

### Adding a new theme

In `sectionFrontPageThemes.js`, add a new entry to the `themes` object with all tokens filled. Follow the pattern of existing themes.

---

## Nav Icons

Five type-based icons, rendered by the `NavIcon` component:

| Type | Icon |
|------|------|
| `formulas` | ƒ (italic unicode) |
| `definitions` | Aa (text) |
| `calculators` | Calculator SVG |
| `visual-tools` | Eye SVG |
| `subsection` | § (section sign) |

### Custom icon override

Add `navIcon` to a page's `seoData`:

```js
seoData: {
  ...
  navIcon: "√",
},
```

If present, it overrides the type default. If the value matches a key in `iconMap` (e.g. `"calculators"`), the SVG version renders. Otherwise it renders as unicode text (max 4 characters).

---

## Hero Banner

- Displays `meta.title`, `meta.subtitle`, breadcrumb trail
- Auto-calculates stats from section data (formula count, definition count, tool counts, topic counts)
- Conditionally shows CTA buttons for Visual Tools and Calculators when those sections exist
- CTA buttons scroll to the respective section on click

---

## Article Block

Optional. Pass `article` prop to `SectionFrontPage`:

```jsx
<SectionFrontPage
  article={{ title: "What is Algebra?", content: "..." }}
  ...
/>
```

Or as a plain string:

```jsx
<SectionFrontPage article="Brief intro text..." ... />
```

Renders between the topic strip and the first section. Uses `articleBg`, `articleBorder`, `articleAccent` from the theme. Supports `processContent` for markdown/LaTeX.

---

## Sidebar

- Fixed position, left side, below navbar
- Collapsed: 68px wide, dot indicators
- Expanded: 290px wide, full nav links + subtopics
- Closes on outside click
- "On This Page" lists all sections with icons
- "Subtopics" lists all subsection children
- Colors from theme (`sidebarBg`, `sidebarAccent`)

---

## Topic Strip

- Sticky below navbar
- Wraps into multiple rows (no horizontal scroll)
- Centered items
- Each item shows icon + section title
- Colors from theme on hover/active

---

## Shared Exports

`SectionFrontPage.jsx` exports these for use in `ToolSectionPage` and other components:

```js
export {
  ThemeContext, useTheme, NavIcon, EqualGrid,
  IntroProse, ArticleBlock, SectionNav, Sidebar, TopicStrip,
  SectionHeader, SectionFooterLink,
  CategoryCard, CalculatorCard, VisualToolCard,
  FormulaChip, DefinitionItem,
  placeholderSvgs, getPlaceholderSvg,
  NAVBAR_HEIGHT, SIDEBAR_COLLAPSED, SIDEBAR_EXPANDED,
};
```

Import what you need:

```js
import { Sidebar, TopicStrip, useTheme } from './SectionFrontPage';
```

---

## AutoLandingPage

Alternative visual shell. Same data, different appearance:

- Expandable sidebar (`SidebarToggle`) instead of dot-rail
- Top navigation mini cards instead of topic strip
- Compact static cards instead of section renderers
- Flat stats in hero instead of styled stat bar

Usage:

```jsx
<AutoLandingPage
  meta={pageMeta}
  sections={sections}
  sectionData={sectionData}
  sidebarTheme="portfolio"
/>
```

---

## Troubleshooting

### "name" and "Metadescription" showing on cards

**Cause:** Commented-out template code in the page file contains placeholder values like `name: "name"` and `description: "Metadescription"`. The regex matched these before `stripComments` was added.

**Fix:** Already fixed. `extractSeoData` now strips all `//` and `/* */` comments before scanning. If still occurring, check that you're using the latest `buildSectionData`.

### "buildSectionData is not a function"

**Cause:** Missing default export.

**Fix:** Ensure `buildSectionData.js` has both:

```js
export async function buildSectionData(route) { ... }
export default buildSectionData;
```

### Title shows with "| Learn Math Class" suffix

**Cause:** `cleanTitle` strips the pipe suffix. If still showing, the regex may be matching a different `title` field in the file.

**Fix:** Ensure your `seoData.title` contains the pipe: `"Powers & Exponents | Learn Math Class"`. The part after `|` is stripped automatically.

### Sections appear in wrong order

Sections are sorted by type using `TYPE_ORDER`, not filesystem order. Visual tools always first, calculators always last. Within the same type, filesystem order is preserved.

### Child page not appearing

Check that the child directory has an `index.js/jsx/ts/tsx` file, or that a standalone page file exists with one of those extensions. Files starting with `_`, `[`, or `.` are skipped.