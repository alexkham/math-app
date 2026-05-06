# ViewDynamicPage

Reusable landing-page component for "calculator hub" / "tool index" / "visualizer index" pages. Renders an optional intro strip, sticky on-page sidebar, jump-to header nav, optional article + video block, and a 2-column card grid linking out to individual tools.

---

## Import

```jsx
import ViewDynamicPage from '@/app/components/page-components/ViewDynamicPage'
```

Requires `processContent` from `@/app/utils/contentProcessor` and `next/link`.

---

## Minimal usage

```jsx
<ViewDynamicPage
  cards={cards}
  introContent="Some intro text."
/>
```

Everything else is optional.

---

## Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `cards` | array of card objects | `[]` | The grid items. See **Card schema** below. |
| `introContent` | string (markdown) | `''` | Top intro strip. Hidden if empty. Rendered through `processContent`. |
| `theme` | object | `{}` | Override any subset of color tokens. See **Theme** below. |
| `sidebarTitle` | string | `'On this page'` | Heading of the sticky on-page sidebar. |
| `headerNavLabel` | string | `'Jump to:'` | Label that prefixes the chip row. |
| `actionLabel` | string | `'Open solver →'` | Text on each card's CTA button. Pass `'Open visualizer →'`, `'Open calculator →'`, etc. |
| `countNoun` | string | `''` | If set, a count pill appears at the right of the header nav. e.g. `'solvers'` → `'9 free solvers'`. Empty string hides the pill. |
| `countPrefix` | string | `'free'` | Word inserted between count and noun. Set to `''` for `'9 solvers'` (no "free"). |
| `article` | object or `null` | `null` | Optional article block above the cards. See **Article schema**. |
| `videos` | array of video objects | `[]` | Optional video walkthroughs. Triggers a player + playlist + modal. See **Video schema**. |
| `videoLayout` | `'above' \| 'beside' \| 'below' \| 'strip'` | `'beside'` | Where the video block sits relative to the article. |
| `videosHeading` | string | `'Walkthroughs'` | Playlist header text. |
| `videosCtaLabel` | string | `'Watch the walkthrough'` | Label above the player in `'below'` layout. |
| `videosStripTitle` | string | `'Watch a quick intro for any topic'` | Title of the strip-layout grid. |

---

## Card schema

Each entry in `cards` is an object:

```js
{
  slug: 'linear',                       // required — used for #card-linear anchor and React key
  label: 'Linear',                      // required — small uppercase label + chip text + sidebar entry fallback
  shortNav: 'Linear equations',         // required — sidebar link text (longer than label)
  title: 'Linear Equation Solver',      // required — large card title
  formula: '$$ax + b = cx + d$$',       // optional — renders in highlighted block. LaTeX via processContent. Use `$$...$$` for display, `$...$` for inline. Use `\\` (double backslash) for LaTeX commands inside JS strings.
  blurb: 'A **linear equation**...',    // required — body text. Markdown + LaTeX via processContent.
  href: '/algebra/calculators/...',     // required — Next.js Link target
  icon: <SomeIconComponent />           // optional — any JSX node (SVG, next/image, lucide-react, custom). Renders above the label.
}
```

`slug` must be unique per page. The component generates `id="card-{slug}"` so the sidebar and header nav can scroll to it.

---

## Article schema

```js
article = {
  eyebrow: 'Why use these tools',     // optional small uppercase label above title
  title:   'Heading goes here',       // optional large heading
  content: 'Markdown body...'         // optional body. Rendered through processContent.
}
```

All three fields are optional. If all three are absent (or `article` is `null`), no article block renders. If only `videos` are passed without an article, the videos render as a standalone block.

---

## Video schema

Each entry in `videos`:

```js
{
  id: 'video-1',                                          // required — unique within the page
  title: 'Linear Equations: A Visual Introduction',       // required — shown in player meta + playlist
  duration: '3:12',                                       // optional
  embedUrl: 'https://www.youtube.com/embed/VIDEO_ID',     // required for playback. Used as iframe src in modal. YouTube/Vimeo embed URLs work directly.
  thumbnail: 'https://...'                                // optional. If absent, a navy gradient placeholder is shown.
}
```

For self-hosted videos, point `embedUrl` at any URL the browser can iframe. For YouTube use the `/embed/` URL form (not `/watch?v=`).

---

## Video layouts

All layouts use a **modal lightbox** for playback. Clicking the player thumbnail or any playlist entry opens the modal with the iframe; clicking the overlay or the ✕ closes it.

### `'above'`
Player thumbnail spans full width above the article. Below the player: an accordion playlist (collapsed by default? open by default — see source). Best when the video is the lead asset.

### `'beside'` (default)
2-column grid: article on the left, sticky video column on the right. The sticky column holds the player on top + a vertical scrolling playlist below it. Collapses to single column on mobile.

### `'below'`
Article first; player + accordion playlist appear inside a CTA-styled section at the bottom of the article. Best when the article should read like prose with the video as a "watch this for the full walkthrough" payoff.

### `'strip'`
No fixed player. A grid of clickable thumbnail cards — clicking any one opens it directly in the modal. Best for "browse all videos" pages or when there's no single canonical first video. If `article` is also present, the article renders first, then the strip.

If `videos.length === 0`, all video UI is suppressed regardless of `videoLayout`.
If `videos.length === 1`, no playlist renders — just the single player thumbnail.

---

## Theme

Override any subset of these tokens:

```js
theme = {
  primary:         '#2c5d99',  // buttons, accent borders, hover states
  primaryDark:     '#143a66',  // titles, formula text
  border:          '#d8e1ec',  // card / panel borders
  borderAccent:    '#c8d9ec',  // formula box border, intro strip border
  borderSubtle:    '#ecf1f7',  // dividers, separators
  bgGradientStart: '#f1f7fd',  // intro / formula gradient left edge
  bgGradientEnd:   '#e8f1fa',  // intro / formula gradient right edge
  textBody:        '#3a4a5e',  // blurb body text
  textMuted:       '#6b7a8f',  // labels, sidebar title
  cardBg:          '#ffffff',  // card and panel backgrounds
  pageBg:          '#fafbfd',  // (currently used for playlist headers)
}
```

Pass only what you want to change; defaults fill the rest.

---

## Layout architecture (informational)

Constants at the top of the component:

```js
COLUMN_WIDTH    = 1180   // content column max-width
SIDEBAR_WIDTH   = 190    // sidebar width
SIDEBAR_GAP     = 30     // gap between sidebar and column
HIDE_BREAKPOINT = 1620   // viewport width below which sidebar is hidden
```

The sidebar is `position: absolute` with a negative `left` offset, so it hangs off the column's edge without occupying grid space. Below `HIDE_BREAKPOINT`, the sidebar disappears via media query.

Cards collapse from 2 columns to 1 below 760px. The beside-layout video column also collapses to single column on mobile.

---

## Examples

### Equations landing page (article only, no videos)

```jsx
<ViewDynamicPage
  cards={cards}
  introContent={introContent}
  countNoun="solvers"
  article={{
    eyebrow: 'Why use these tools',
    title: 'From rote procedure to seeing the structure',
    content: 'Most equation solving fails not because...'
  }}
/>
```

### Visualizer page with single hero video above

```jsx
<ViewDynamicPage
  cards={cards}
  introContent={introContent}
  countNoun="visualizers"
  actionLabel="Open visualizer →"
  videoLayout="above"
  videos={[
    {
      id: 'intro',
      title: 'Geometric proofs of algebraic identities',
      duration: '6:45',
      embedUrl: 'https://www.youtube.com/embed/abc123'
    }
  ]}
/>
```

### Section with article + multiple videos beside

```jsx
<ViewDynamicPage
  cards={cards}
  introContent={introContent}
  countNoun="solvers"
  article={{
    eyebrow: 'Watch first',
    title: 'How equation solving works under the hood',
    content: '...'
  }}
  videoLayout="beside"
  videosHeading="Walkthroughs"
  videos={[
    { id: 'v1', title: 'Linear Equations', duration: '3:12', embedUrl: '...' },
    { id: 'v2', title: 'Quadratic Equations', duration: '5:48', embedUrl: '...' },
    // ...
  ]}
/>
```

### Visualizer index with strip-only video grid (no article)

```jsx
<ViewDynamicPage
  cards={cards}
  countNoun="visualizers"
  actionLabel="Open visualizer →"
  videoLayout="strip"
  videosStripTitle="Watch a quick intro for any identity"
  videos={[
    { id: 'sum', title: 'Square of a Sum', duration: '4:10', embedUrl: '...', thumbnail: '/img/sum.jpg' },
    { id: 'diff', title: 'Square of a Difference', duration: '3:55', embedUrl: '...', thumbnail: '/img/diff.jpg' },
    // ...
  ]}
/>
```

### Custom theme

```jsx
<ViewDynamicPage
  cards={cards}
  theme={{
    primary: '#9a3324',
    primaryDark: '#5e1f15',
    bgGradientStart: '#fdf3f0',
    bgGradientEnd: '#fae6e0',
    borderAccent: '#e8c4ba'
  }}
/>
```

---

## Anchors

The component generates the following IDs you can link to from anywhere:

- `#card-{slug}` — one per card

Both the header nav chips and the sidebar list link to these. Cards have `scrollMarginTop: 24px` so the title isn't flush against the top edge after scrolling.

---

## Notes & caveats

- **Markdown in `blurb`, `introContent`, `article.content`** is whatever `processContent` supports. LaTeX must use double backslashes inside JS template strings (`\\sqrt`, not `\sqrt`).
- **Modal closes on overlay click and on the ✕ button.** No Esc key handler is bound. Add one in the parent if needed.
- **Hover styles** for nav chips and sidebar links are injected via a `<style>` tag inside the component; no global CSS dependency.
- **Scrollbars are hidden** on the formula block (overflows on narrow cards) but visible on the vertical playlist (intentional — long playlists need a visible scrollbar).
- **`useState` is used** for active video, modal state, and accordion. The component must be rendered client-side or in a layout that supports React state.
- **No `localStorage` or `sessionStorage`** — all state is in-memory.
- **The header nav `marginLeft: auto` on the count pill** pushes it to the right. On mobile this gets overridden via media query so the count sits under the chips.

---

## File location

Save as `app/components/page-components/ViewDynamicPage.jsx`.