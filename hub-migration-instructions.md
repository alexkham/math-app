# Section Hub Migration — Instructions for the Next Agent

Goal: convert an old hand-assembled section hub page (`pages/<section>/index.jsx` built with
`SectionTableofContents2` + `Sections` + manual `sectionsContent`) to the new auto-discovery
pattern (`buildSectionData` + `SectionFrontPage`), **without losing any of the old page's content**.

**Reference implementations:**
- `pages/algebra/index.jsx` — the original minimal example of the new pattern.
- `pages/trigonometry/index.jsx` — a completed full migration (2026-07-28) with all content
  preserved. **Copy its structure**, including the header comment documenting where each piece
  of old content went.

---

## 1. Architecture (read once)

- `app/components/page-components/front-page/buildSectionData.js` — build-time. Scans
  `pages/<section>/*` child directories, classifies each as `formulas` / `definitions` /
  `calculators` / `visual-tools` / `subsection`, extracts card metadata **by regex from the
  child page's raw source** (`extractSeoData`), loads formula/definition DB modules, and merges
  developer `customSections`. Sections are sorted by type (`visual-tools`, `formulas`,
  `definitions`, then subsections).
- `app/components/page-components/front-page/SectionFrontPage.jsx` — renders everything:
  sidebar, `MindMapHero`, sticky `TopicStrip`, optional `article` block, and one renderer per
  section type. NOTE: the first ~1000 lines of this file (and of `MindMapHero.jsx`) are an old
  commented-out copy — the live code is at the bottom.
- Formula/definition data must exist at
  `app/api/db/<type>/<sectionSlug>/<camelSlug><Formulas|Definitions>.js` (default export).
  If missing, those sections render empty — check before migrating.

## 2. Content-placement strategy (the a / b / c decision)

Nothing from the old hub may be lost — that content is the whole point of those pages. The
user framed three strategies for where it can go; **the adopted approach is (c), a hybrid**:

- **(a) Embed in the child page's seo data** (`hubDescription`): for sections that are entry
  gates to a corresponding child page. The content strengthens the child page AND is
  automatically re-surfaced on the hub via `buildSectionData` extraction. **Default choice
  whenever an in-section child page exists.**
- **(b) Create a `/basics` page** per section and move content there: **avoid by default.**
  The user's explicit objection: such a page sends contextual links to every page in the
  section and gets interpreted as a second hub page, which it must not be. Use only for
  long-form content that genuinely deserves its own URL, kept link-light, and **only with
  the user's explicit per-case approval**.
- **(c) Hybrid** — what we actually do: (a) for gate sections; `customSections`
  (`prose-only`/`augment`) for hub-native editorial with no child page or with
  out-of-section links (option (a) has nowhere to put those); the `article` prop for the
  intro; (b) only as the flagged exception above.

Decide per content block, record the decision in the classification table below, and let the
user veto at the checkpoint.

## 3. Migration workflow (per page)

1. Inventory the old hub: every `sectionsContent` entry, intro block, tools/slider arrays,
   unused constants. List actual children on disk (`ls pages/<section>`) — auto-discovery
   usually surfaces more subsections than the old hub linked.
2. Produce a **classification table** (old block → destination + one-line reason) and get the
   user's sign-off before editing. Destinations:
   - **Gate section** (links to an in-section child page, e.g. `/trig/identities`) →
     move the article into that child's seo area as `hubDescription`. It re-surfaces on the
     hub automatically as the section's intro prose.
   - **Editorial with no child page, or linking outside the section** → `customSections`
     entry, mode `prose-only` (own section) or `augment` (attached to an existing auto
     section). Content stays inside the hub page file.
   - **Old intro block** → `article` prop of `SectionFrontPage`
     (`{ title, content }`, content is markdown processed by `processContent`).
   - **`/basics` page** — exception only; flag to the user, never decide alone (risk: reads
     as a second hub).
3. Keep the old page's SEO `<Head>` block **verbatim** (title, description, keywords,
   canonical, schemas). Do not invent new SEO content.
4. Keep `OperaSidebar` with the same props the old page used.

## 4. `hubDescription` mechanics (critical constraints)

Extraction is regex over **raw source text** — the string is never evaluated as JS:

- Pattern: `hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]` → the text may contain
  **no straight quotes, apostrophes, or backticks** (curly ’ “ ” are fine) and must be
  **10–2000 chars**. Over the cap = silently no match. Trim lightly if needed.
- **KaTeX must use SINGLE backslashes** (`$\tan(\theta)$`, not `\\tan`). The raw source is
  what gets extracted; escaped `\\` would reach KaTeX as a literal double backslash and break
  rendering. The mangled runtime value of the literal is irrelevant (the const is never used
  at runtime), but make sure the text contains no `${` sequence and no `\u`/`\x` escapes.
- Markdown, `[text](!/path#anchor)` links, `**bold**`, and `*` lists all work — the hub runs
  the text through `processContent`.
- Put `hubDescription` inside the existing `seoData` object with a comment
  `// Surfaced on the /<section> hub via buildSectionData extraction.`
  If the child page has **no** `seoData` object (e.g. old pages with hardcoded `<Head>`),
  add a small `const hubMeta = { name: ..., hubDescription: ... }` at the top of
  `getStaticProps` (see `pages/trigonometry/identities/index.jsx`). **First match in the file
  wins** for `name:` / `description:` — an early `hubMeta` also fixes ugly card titles that
  would otherwise be scraped from JSON-LD schemas.

## 5. `customSections` mechanics

- Bodies render through `dangerouslySetInnerHTML` — **raw HTML only**, no markdown, no KaTeX,
  no `!/` link syntax. Convert: `[t](!/p)` → `<a href="/p">t</a>`; simple math → HTML entities
  (`&theta;`, `<sup>2</sup>`, `&deg;`, `&pi;`).
- **Style the bodies** — plain `<ul>` dumps were explicitly rejected by the user. Use a scoped
  `<style>` block with prefixed classes inside the body string. Two approved patterns in
  `pages/trigonometry/index.jsx`:
  - `lmc-kt-*` — compact multi-column key-terms card panel (CSS `columns: 2 320px`,
    uppercase card headers, blue term links, muted descriptions, sans-serif 13.5px).
  - `lmc-tool*` — tool link tiles matching the auto-generated cards (badge, title,
    description, "Open tool →", hover lift).
- `prose-only` supports `title`, `link`/`linkText` (renders the header/footer gate buttons),
  and `insertAfter`/`insertBefore: '<sectionId>'` for placement (omit both = append at end).
  Ids must not collide with on-disk child slugs.
- Do **not** add contextual links beyond what the original content had (no second-hub smell).

## 6. Shared-component fixes already applied (2026-07-28) — do NOT redo or revert

- `buildSectionData.js`: formula/definition module imports must keep the **inline template
  literal** form `import(\`../../../api/db/formulas/${parentSlug}/...\`)`. A path computed
  into a variable first breaks webpack resolution and silently yields "0 items" everywhere.
- `MindMapHero.jsx`: `charsForWidth` factor is 0.6 (title wrapping); `fitTitleFont` scales the
  hub-node title to fit (both `HubRect` and `HubCircle`); `getCountLabel` returns null for
  count 0 (no "0 topics" noise — zero counts are real, subsections are leaf pages).
- Anchor scrolling: sticky `TopicStrip` requires extra offset. `STICKY_STRIP_H = 110` in
  `SectionFrontPage.jsx` (applied to strip/sidebar/prev-next/category scrolls and
  `scroll-margin-top`), mirrored as literal `110` in `MindMapHero.jsx` `scrollToSection`.
  User-tuned — change only if the user asks.

## 7. Verification (each page, before showing the user)

1. Run a quick extraction check: replicate the `hubDescription` regex over each edited child
   page; confirm match + length ≤ 2000 (see the pattern in §4).
2. Dev server (`npm run dev`, or launch config `math-debug`, port 3002), then curl the hub
   route and assert: every migrated text block present, section order sensible, formula/
   definition `totalCount` > 0 in props, no `0 topics|0 tools|0 items` strings, KaTeX rendered
   (no raw `\\tan` doubles).
3. Screenshot the hero + restyled sections (project has Playwright). Headless quirk: after
   editing shared components, dev-mode Fast Refresh can make headless pages come back blank —
   trust curl/SSR checks plus the user's own browser; don't chase it.

## 8. Standing rules

- Never touch: `Sections.jsx`, `SectionTableofContents.jsx`, `contentProcessor.js`,
  `pages/pages.css`, `_app.js`. SEO metadata edits in child pages are limited to **adding**
  `hubDescription` (+ `hubMeta` where noted) — nothing else changes.
- One page at a time; classification table → user checkpoint → implement → verify → user
  checkpoint. Flag every ambiguous case instead of deciding silently.
- The old hub page's content is preserved in git history — full-file rewrite is fine, but
  check `git status` first so you don't overwrite uncommitted work.
- Repo files are CRLF; if you script edits, normalize and restore line endings.
