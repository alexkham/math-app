# Line 3 — Tool-to-Tool Mesh: agent instructions v1

**Status as of 2026-09-13:** methodology agreed with the owner; registry inventory for linear algebra complete (46 entries); no `relatedTools` written yet, no page edited yet. Written to the repo root during a tooling outage — move it to the linking folder (`C:\Users\Alex\OneDrive\Documents\my sites\learnmathclass\linking\`) next to the Line 1 and Line 2 docs.

## 0. Where this sits

Three linking workstreams exist. Do not conflate them.

| Line | Direction | Registry field | Doc |
|---|---|---|---|
| Line 1 | tool page → its own sections (on-page anchor mesh, frozen units) | `line1` block | `line-1-agent-instructions-v5.md`, handoffs |
| Line 2 | tool page → content pages (definitions, formulas, theory) | `relatedTerms[].links[]` | `line-2-agent-instructions-v3.md` |
| **Line 3** | **tool page → other tool pages** | **`relatedTools[]`** | **this file** |

Operation A (content → tools) has its own registry, `content-pages-registry.json`, and is not touched by Line 3.

## 1. Purpose

Every visual tool page should link to the other tools it genuinely relates to, in two placements that come from ONE record:

1. **In-text**: inside the sentence that already mentions the other tool.
2. **Strip**: a compact "Related tools" block near the bottom of the page, rendered from the same records.

The rule that governs everything: **no link without a sentence that names the target.** Links are contextual, not structural. The strip is a rendering of contextual records, never a separate hand-made list.

Top-level `/visual-tools/*` routes are decided per page on Search Console traffic (owner decision, 2026-09-13). `/visual-tools/matrix-multiplication` (325 clicks / 90 days) **stays at its address**; `/visual-tools/gauss-elimination` and `/visual-tools/matrix-types` were **moved** to `/linear-algebra/visual-tools/…` with permanent redirects the same day; `/visual-tools/determinant-calculator` was merged into `/linear-algebra/visual-tools/matrix-determinant` (registry key `linear-algebra-matrix-determinant`; the `linear-algebra-determinant-expansion` key is gone) and permanently redirected. Line 3 links to whatever the registry `pagePath` says; it never moves or redirects pages itself.

## 2. Single source of truth

`app/api/db/repositories/visual-tools-registry.json` — the existing ledger. Line 3 adds ONE field per tool entry and creates no parallel data file (a parallel file would duplicate slug/name/section/pagePath, which the registry already holds).

### 2.1 The field

```json
"relatedTools": [
  {
    "key": "linear-algebra-matrix-rank",
    "fromSection": "related-concepts",
    "surface": "Matrix rank",
    "method": "scan | added-sentence | reverse",
    "status": "pending | linked | dropped",
    "reason": "<only when dropped>",
    "added": "2026-09-13"
  }
]
```

- Always an **array** (possibly empty), never a string, even for one related tool.
- `key` — the registry key of the target tool (e.g. `linear-algebra-matrix-rank`). Keys, not slugs, not URLs: the URL is derived at build time from the target's `pagePath` (strip `pages/` and `/index.jsx`; entries whose `pagePath` is already a URL are used as-is).
- `fromSection` — the slug of the section on the SOURCE page whose prose names the target. This is what makes the link contextual.
- `surface` — the exact text in that section that becomes the link label.
- `method` — how the record arose: `scan` (the prose already mentioned the tool), `added-sentence` (a sentence was written to carry the link, symmetry closure only), `reverse` (legacy page, record mirrored from a section page that mentions it).
- `status` — `pending` until the in-text link is actually written into the page; `linked` after; `dropped` with a `reason` if judged not genuine.

Records are ordered by importance: the first 2–3 are the curated "see also"; the rest follow. The strip renders them in this order.

### 2.2 Runtime consumption (no client bundle cost)

A small server-side helper, `getRelatedTools(key)`, imported **only inside `getStaticProps`**, reads the registry, resolves each record's `key` to `{ name, url, surface }` and returns a short array. Pages pass it as a prop to a new `RelatedTools.jsx` strip component. The 350 KB registry never ships to the browser. Both files are NEW; existing components are not modified (project rule).

## 3. Procedure — one section (subject area) per pass

### Step 1 — Inventory (done for linear algebra)
Every tool page of the section has a registry entry with correct `slug`, `name`, `section`, `pagePath`, `component`. Check: number of `section: <x>` entries equals number of page directories plus legacy pages of that subject. Run the parse check:

```bash
node -e "const r=require('./app/api/db/repositories/visual-tools-registry.json');console.log(Object.values(r.tools).filter(t=>t.section==='linear-algebra').length)"
```

### Step 2 — Scan (content leads)
For each tool page, scan the prose of `sectionsContent` for mentions of OTHER registered tools of the same subject, by name. Match on the tool's `name` minus the word "Visualizer/Calculator/Generator", and on a per-tool alias list (e.g. `rank` → matrix-rank, `Gram–Schmidt` → gram-schmidt, `least squares` → least-squares, `SVD` → singular-value-decomposition). Search in this priority:

1. the **Related Concepts** section (every page has one; each bold lead-in there is a candidate);
2. the **Key Terms** section;
3. explicit gestures in the body ("the rank tool shows…", "see the eigenvalue visualizer");
4. plain body mentions.

Same masking rules as the Line 2 scanner (`line2-scan.py`): never match inside `$…$`, `$$…$$`, existing `[..](..)` links, `@span[...]` or code spans. One record per (source, target) pair; keep the highest-priority occurrence as `fromSection`/`surface`.

Do NOT write to the registry yet. Produce the **pair table**: for each source, the targets found with section and surface; plus totals.

### Step 3 — Symmetry check
Build the directed graph. For every edge A→B with no B→A, decide:
- **genuine reverse relation** → plan an `added-sentence` record on B: one sentence in B's Related Concepts section naming A (this is the ONLY place content follows the pairing);
- **not genuine** (A mentions B in passing, B has no reason to point back) → leave asymmetric; do not force it.

Flag tools with fewer than 3 outgoing records; they will get a thin strip, and the fix is a sentence, not a bare link.

### Step 4 — Legacy pages
The four top-level tools have thin, tool-operation prose. Their arrays come from section pages that mention them, reversed (`method: reverse`), plus one carrier sentence per legacy page in its existing "Related Matrix Operations" (or equivalent) section. These are the only edits to legacy page files: one additive sentence and one strip line each. If the owner prefers zero edits there, inject the strip from the layout for those four routes instead.

### Step 5 — Owner review
Present the pair table, the asymmetry list with proposed reverse sentences, and the thin-strip list. **Stop for approval.** Nothing is written before this.

### Step 6 — Write
1. Registry: add `relatedTools` to every entry of the section (empty array where truly nothing applies — but that should not happen after step 3).
2. Pages: turn each `surface` into a link in its `fromSection` prose using the site's link syntax `[surface](!/url)`. Constraints from `processContent`: no `*italics*`, no `$math$` inside a link label, bold may be dropped when a bold term becomes the link. Set `status: linked`.
3. Added sentences: write them, then link them the same way.
4. Strip: `RelatedTools.jsx` + `getRelatedTools()`; each section page gets one import and one JSX line above `<Sections>`; legacy pages the same.
5. Hubs: the old `/visual-tools` hub gets one card/banner to the section hub. The section hub already shows cards for the legacy tools at their old URLs; leave it.

### Step 7 — Verify
- Static: every `key` in every `relatedTools` resolves to an existing registry entry with an existing `pagePath`; every `fromSection` exists in that page's live `genericSections`; every `surface` occurs verbatim in that section's prose; no self-links; arrays everywhere.
- Rendered (dev server): every tool URL 200; every in-text link and strip link resolves (crawl script); strip present on every page including the four legacy ones.
- Registry parse check again.

## 4. Rules

- No link without a naming sentence. No structural-only pairs.
- One record = one placement in text + one line in the strip. Never maintain two lists.
- Same-subject only in v1 (linear algebra ↔ linear algebra). Cross-subject tool links are a later decision.
- Existing components are never modified; new behaviour = new file. Legacy tool pages: one additive line each, or layout injection.
- Never alter Line 1 or Line 2 records while doing Line 3. Line 3 records live only in `relatedTools`.
- The legacy tools keep their URLs. No redirects, no moves.
- Key naming inconsistency to be aware of: the legacy determinant page is registered under `linear-algebra-matrix-determinant` (slug `determinant-calculator`); the section page is `linear-algebra-determinant-expansion` (slug `matrix-determinant`). Do not confuse them; a rename of the legacy key to `linear-algebra-determinant-calculator` is proposed but not done.
- `pagePath` is a file path for linear-algebra entries and a URL for older sections; the helper normalizes both. Do not "fix" existing entries as a side effect.

## 5. Handoff checklist for the next chat

Give it, in order: this file; the registry; the list of the 42 section pages plus 4 legacy pages; `line2-scan.py` (for the masking rules); and the owner's answers to the two open questions: rename the legacy determinant key or not, and edit the four legacy pages or inject from layout.
