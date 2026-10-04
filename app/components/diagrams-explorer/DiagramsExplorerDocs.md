# DiagramsExplorer

The gallery of a subject's diagrams: every demonstration unit already placed on the subject's pages, each linked to the exact section it sits in. One page per subject under `/<subject>/visual-tools/diagrams`, listed by the subject's visual-tools hub through `category: "Diagrams"` in the page's `seoData`.

Nothing is drawn or decided here. The component renders one generated artifact.

## Files

| File | Role |
|---|---|
| `scripts/build-diagrams.mjs` | generator and verifier. Reads the pages as the dev server renders them (port 3000) and the registries; writes the artifact and the placement records |
| `app/api/db/repositories/diagrams/<subject>.json` | the artifact the page reads. Generated, never hand-edit |
| `session-docs/methodology/illustrations/<subject>/figure-registry.json` | receives placement records in place: `units` on each content section, `toolPages` for the tool pages, `$meta.diagrams`. No SVG. Judgement fields untouched |
| `app/components/diagrams-explorer/DiagramsExplorer.jsx` + `.module.css` | the component |
| `pages/<subject>/visual-tools/diagrams/index.jsx` | the page: `getStaticProps` imports the artifact, declares `category: "Diagrams"` |

## Commands

```bash
node scripts/build-diagrams.mjs --subject=trigonometry            # rebuild artifact + registry records
node scripts/build-diagrams.mjs --subject=trigonometry --verify   # live pages vs artifact vs registries
node scripts/build-diagrams.mjs --subject=trigonometry --no-registry
```

The owner's dev server must be running on port 3000 (never start a second one). A full run fetches every content and tool page of the subject, about 1.5 minutes for trigonometry.

## What one record holds

| Field | Source |
|---|---|
| `id` | `<page-slug>--<section-id>` (`-n` suffix when a section holds more than one unit) |
| `kind` | `authored` (figure registry: `integrated` with a `component`), `harvested` (content page, frozen tool state), `tool-state` (frame on the tool page itself) |
| `route`, `sec`, `anchor` | the rendered `<section id>`; the anchor is `route#sec`, verbatim, never derived |
| `secTitle`, `page`, `chapter` | rendered `<h2>`; page name from the content or tools registry; chapter = the tool page's hub `category`, or the parent hub for nested content pages, else `Lessons` |
| `caption`, `text`, `href`, `linkText`, `after` | parsed from the `demoUnitFrame` markup (caption div, explanation `<p>`, trailing link) |
| `series`, `step` | from section titles of the form `<name>, Step <n>: …` |
| `unitKey`, `source` | figure registry (`component`, `specKey`) / content registry (`unit.diagrams`, `tool`) / tools registry (`diagramsModule`) |
| `svgs`, `dims` | the SVG strings as rendered, with viewBox sizes |

## Rules the generator keeps

- Harvest nothing new: frames built by `demoUnitFrame` count everywhere. A bare figure SVG without a frame counts only in a content section the figure registry marks `integrated` (pre-process authored figures, e.g. arithmetic/divisibility); such records carry `source.frame: false`, caption from the SVG `<title>` or `aria-label`, no explanation text. Other inline SVGs and infographics are not recorded.
- Anchors are the live ids. `--verify` reports `DEAD ANCHOR` if a recorded section id is no longer rendered, `DRIFT` if a page's unit count changed, `MISSING` if a registry record (figure registry `integrated`, content registry link with a unit) has no frame on the page.
- `sections.json` is consulted as the anchor inventory; anchors absent from it are a warning only (that file was generated 2026-08-23 and lags the tool pages).
- The figure registry's judgement fields (`status`, `verdict`, `job`, `claim`, …) are never written. Only `units`, `toolPages`, `$meta.diagrams`.

## Component

Props: `data` (the artifact), `subjectLabel`.

Views: `gallery` (uniform thumbnails, click opens the lightbox), `sheet` (justified contact sheet), `spot` (inline spotlight with a strip), `shelves` (one row per page), `pages` (by page, with explanations). Lightbox: picture, prev/next, side panel with caption, explanation, section and tool links, thumbnail film, arrow keys, Esc, focus trap. Pin two figures to compare side by side. Filters: chapter/page tree, source (from tools / drawn for the page), search over captions, explanations, page and section names. Deep links: `#fig=<id>`, `#view=<view>`.

SVG ids are prefixed per instance (`prepSvg`) so the same figure can appear in a tile, the strip, the lightbox and the compare overlay at once.

## Adding a subject

1. `node scripts/build-diagrams.mjs --subject=<subject>` with the dev server running.
2. Copy `pages/trigonometry/visual-tools/diagrams/index.jsx` to the subject, change the import, texts and keywords.
3. The hub lists it on its next build; nothing else to register.

## Known costs

The artifact carries every SVG string, so the page's HTML and `__NEXT_DATA__` each hold the full set (trigonometry: 372 figures, about 2.2 MB uncompressed, SVG compresses 5–8× on the wire). If a subject grows past that, split the artifact per chapter and load chapters on demand.
