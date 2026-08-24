# Notation Pass — Handoff (updated 2026-08-22)

Context for continuing the NotationSection project. The registry and project memory
carry full state; this file is the orientation shortcut. **Supersedes the 2026-08-17
version** (that one covered only calculus/algebra/linear-algebra).

## What this project is

Adding a `NotationSection` component to content pages — one section per page that
owns the page's *topic-specific notation* (marks, conventions, reading rules,
traditions, confusions). Canonical procedure: `notation-agent-procedure-v7.md`
(OneDrive, `my sites/learnmathclass/content/`) — note the corrections below.

- Component (real path): `app/components/page-components/content-components/NotationSection.jsx`
  (the doc's `app/components/notation/` path is WRONG — doc patch still pending).
- Ledger: `app/api/db/repositories/notation-registry.json` — every page entry, every
  skip with reasons, ownership map, pass history in `$crossSectionFindings`. READ IT FIRST.
  Never delete registry data; spots become `resolved`, never removed.
  **Validate after every edit:** `node -e "JSON.parse(require('fs').readFileSync('app/api/db/repositories/notation-registry.json','utf8'))"`
  (three structural breaks were found and fixed on 2026-08-22 — missing bracket,
  stray bracket, missing comma — all from earlier append edits).

## House rules (operator-issued, override the doc where they conflict)

1. Section title MUST contain the word "Notation" (scoped, never bare "Notation").
2. Section id is ALWAYS the slug `'notation'` — never numeric, never renumber
   existing ids. Exception: replacing an existing wholly-notation body section
   keeps its numeric id (many precedents now — see REPLACEMENTS below).
3. Placement: immediately after the definition section. If the marks are defined
   later, place after their defining section.
4. SEMANTIC-NEED GATE: a page gets a section ONLY if its topic owns marks not owned
   elsewhere and not already taught by its own body (OVERLAP demotes). Otherwise:
   registry record, no section, optionally one woven in-text link.
5. NO hubs, NO front/index pages, NO reference/pillar pages (law catalogs, formula
   libraries, definitions, cheat-sheets), NO visual-tools, NO calculators.
6. Telegraph register; links dense and woven mid-sentence (`[label](!/path)` — the
   `!` is required); same-page sections referenced in **bold title**, not links.
7. Backslashes DOUBLED in template literals; literal chars in content strings;
   omit empty bands.
8. Wiring pattern: `notation: {...}` key in sectionsContent + array entry rendering
   `<NotationSection ... theme={'navy'}/>` + import. Copy any recent page.
9. **RENDER-BUG RULE (added 2026-08-17, operator-reported):** `processContent`
   supports ONLY `$math$`, `**bold**`, `[label](!/path)`, `@[code]@`.
   It does NOT support `*italics*` (prints the asterisks) and does NOT support
   math inside a link label (`[$f(x)$](!/path)` prints the dollar signs).
   Grep every page before recording:
   - `\[\$`
   - `[^*$^]\*[a-zA-Z][a-zA-Z -]*\*[^*]`
   - `[^\\]\\[a-zA-Z]` (single backslashes)
   - `\]\(/` (links missing `!`)
   - `math-symbols/[a-z-]+#` (forbidden — those pages have no anchors)

## State: DONE — 11 sections, 95 notation sections written

| Section | Written | Notes |
|---|---|---|
| calculus | 15 | prior session |
| algebra | 11 | prior session (+ created `/math-symbols/algebra`) |
| linear-algebra | 17 | prior session |
| complex-numbers | 10 | 2026-08-17 |
| trigonometry | 8 | 2026-08-17 |
| functions | 7 | 2026-08-17 |
| set-theory | 4 | 2026-08-17 |
| combinatorics | 3 | 2026-08-17 |
| arithmetic | 7 | 2026-08-21 |
| logic | 5 | 2026-08-22 |
| probability | 8 | 2026-08-22 — **the only section left mid-pass** |

**23 in-place replacements** of legacy notation sections (numeric ids preserved,
inbound anchors verified each time) and **5 mandatory splits** of
"Definition and Notation"-style sections (binomial-coefficient, and the logic
semantics four: equivalences, implication, tautology, contradiction).

## PROBABILITY — the only unfinished section

**Strategy decision (executor-made 2026-08-22, operator ask went unanswered twice,
REVERSIBLE):** probability is treated like every other section — theoretical pages,
gate-checked, legacy notation sections replaced ONLY where the page genuinely owns
marks. **NO mass conversion** of the ~24 legacy `notation`-id sections; the ones not
touched keep their current form.

Written (8): probability-function, sample-space, conditional-probability,
random-variables, expected-value, variance, cdf (greenfield — resolved the
chipless/unglossed-F(x) flag), covariance.

Remaining candidates, in rough value order: **bayes-theorem**, **independence**,
**joint-probability**, **distributions** (the parameter-convention hub — the tilde
entry at random-variables#notation forward-links to it), **median**, **mode**,
**total-probability**, **indicators**. The section's core marks are already owned,
so these are optional rather than gaps.

## Open items

1. **VERIFY BUILD.** A dev server is running on **port 3000** and contends with
   `next build` over `.next`, producing rotating false failures (`MODULE_NOT_FOUND`
   on webpack chunks, `/_not-found`, `/favicon.ico`, `demoUnitFrame is not defined`
   on an untouched page). Stop the dev server, then `npx next build`. Builds ran
   fully green several times on 2026-08-22 before the contention started.
   **Do not pipe build output through `head`** — SIGPIPE kills the build mid-write
   and corrupts `.next`.
2. **COMMIT.** The tree carries this entire project plus older uncommitted work.
3. Doc patches pending (operator): H5 slug-id rule text, component path (~line 13).
4. ASK-1: `\lim`, `\to`, `\sqrt` absent from the keyboard dataset.
5. ASK-2: `/math-symbols/{algebra,functions,arithmetic}` not wired into other
   symbols pages' menus or the `/math-symbols` hub (structural, operator decides).
6. Backlink micro-pass candidate: `/math-symbols/*` explanations use page-level
   links; could tighten to the ~95 `#notation` anchors now available.
7. Registry tidy: `probability/expected-value__notationSpot` and
   `probability/variance__notationSpot` were recorded under distinct keys because
   canonical entries already held 2026-08-06 survey data — merge them.
8. Parked candidates: `⌊x⌋` floor bracket (functions/families — no owner app-wide),
   complex-fractions main-bar-length cue, `sinh⁻¹/arsinh` naming.
9. Known pre-existing bug NOT fixed (out of scope): arithmetic visual-tool
   `divisibility-table` id 13 reads `a | b` backwards vs the lesson pages.

## Errata fixed in passing (2026-08-17 → 08-22)

- 17 render-bug instances (math-in-label + italics) across the pages written.
- Broken `$\( ... \)$` mixed-delimiter LaTeX on tautology, contradiction, and the
  whole of probability/sample-space's legacy notation body (Ω and ω were rendering
  as literal backslashes for readers).
- Dead anchors: `imaginary-numbers#simplifying-square-roots` → `#2`;
  `subsets#power-set` → `#5`.
- Single-backslash `\overline{z}` in complex-numbers/additive-inverse (math had
  never rendered).
- Arithmetic error in the legacy multiplicative-inverse prose+table
  (`3+2i⁻¹ = 3+½i`; correct value `3−2i`).
- Stray-`e` typo mid-link in covariance's legacy prose.
- Unkeyed `<div>` in set-theory/cardinality's FAQ array — this was **failing
  `next build`'s lint stage**.

## Cross-section threads (keep consistent if extending)

−1-superscript (numbers → z⁻¹ → f⁻¹ → sin⁻¹ → A⁻¹, complete);
bar family (|x| → |z| → ‖v‖ → |A| → |S|, complete);
the pipe's five jobs (such-that · divides · absolute value · cardinality · given);
Δ's four jobs (increment · discriminant · determinant · symmetric difference);
σ census (summation Σ · singular values · divisor-sum σ(n) · std dev);
⊢/⊨ syntactic-vs-semantic pair; meta/object shaft convention (⇔/↔, ⇒/→);
⊤/⊥ mirror; ∧∨ ↔ ∩∪ set-logic mirror; angle-bracket triple job;
subscript jobs (position · coefficient · enumeration · coordinate slot);
two hats (unit vs estimate) and its statistics cousin (μ vs x̄, ρ vs r).

## Session ritual

One page per "next": load the registry area → gate-check (survey titles + read
defining sections) → write 3–4 entries (each: tex/read/means/cases/alsoWritten/
confusedWith[/sameGlyphElsewhere], telegraph, links woven) → wire (import + key +
array entry) → run the rule-9 greps → registry entry + `$crossSectionFindings` line
→ validate registry JSON → report with halts first. HALT conditions (doc Part V)
still apply — ask the operator, never decide tree/ownership conflicts silently.
