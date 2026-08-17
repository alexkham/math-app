# Notation Pass — Handoff (2026-08-17)

Context for continuing the NotationSection project. The registry and project memory
carry full state; this file is the orientation shortcut.

## What this project is

Adding a `NotationSection` component to content pages — one section per page that
owns the page's *topic-specific notation* (marks, conventions, reading rules,
traditions, confusions). Canonical procedure: `notation-agent-procedure-v7.md`
(OneDrive, `my sites/learnmathclass/content/`) — note two corrections to it below.

- Component (real path): `app/components/page-components/content-components/NotationSection.jsx`
  (the doc's `app/components/notation/` path is WRONG — pending user fix).
- Ledger: `app/api/db/repositories/notation-registry.json` — every page entry, every
  skip with reasons, ownership map, pass history in `$crossSectionFindings`. READ IT FIRST.
  Never delete registry data; spots become `resolved`, never removed.

## House rules (operator-issued, override the doc where they conflict)

1. Section title MUST contain the word "Notation" (scoped, never bare "Notation").
2. Section id is ALWAYS the slug `'notation'` — never numeric, never renumber
   existing ids (a prior renumbering broke inbound anchors; fixed since; doc H5
   patch pending). Exception: replacing an existing wholly-notation body section
   keeps its numeric id (precedents: integrals indefinite id 3, definite id 2).
3. Placement: immediately after the definition section (usually the first authored
   section). If slice(1) hides section 1, use the earliest slot that doesn't render
   first. If the marks are defined later, place after their defining section
   (precedents: evaluating after id 3, inner-product after id 8).
4. SEMANTIC-NEED GATE: a page gets a section ONLY if its topic owns marks not owned
   elsewhere and not already taught by its own body (OVERLAP demotes). Otherwise:
   registry record, no section, optionally one woven in-text link.
5. NO hubs, NO front/index pages, NO reference/pillar pages (law catalogs, formula
   libraries, definitions, cheat-sheets), NO visual-tools, NO calculators.
6. Telegraph register; links dense and woven mid-sentence (`[label](!/path)` — the
   `!` is required); same-page sections referenced in **bold title**, not links.
7. Backslashes DOUBLED in template literals; literal chars (— " ") in content
   strings, HTML entities only in raw JSX; omit empty bands (no `—` placeholders).
8. Wiring pattern: `notation: {...}` key in sectionsContent + array entry rendering
   `<NotationSection ... theme={'navy'}/>` + import. Copy any recent page.
9. Verify per page: grep single backslashes, `](/` links missing `!`,
   `/math-symbols/*#` fragments (forbidden — those pages have no anchors);
   confirm every link target file exists; keyboard links only after grepping
   `app/components/keyboards/math_symbols_data.json` for the command.

## State: DONE (43 sections, zero pending halts)

- **calculus** (15): limits two-sided/one-sided/infinity/continuity/evaluating;
  derivatives differentials/higher-order/function/differentiability/graph-analysis/
  techniques; integrals indefinite/definite/techniques/improper.
- **algebra** (11 + created `/math-symbols/algebra`): powers natural/negative/
  rational/exponential-functions; roots properties; logarithms common-natural;
  equations quadratic/absolute-value; inequalities linear; polynomials roots;
  sequences arithmetic.
- **linear-algebra** (17): vectors basic-operations/magnitude/dot-product/
  cross-product; matrix operations/inverse; determinants properties/cofactors;
  linear-systems gaussian-elimination; vector-spaces span/fundamental-spaces/basis;
  transformations image-kernel; eigen characteristic-equation; orthogonality
  inner-product/projections; decompositions svd.

Cross-page threads deliberately built (keep consistent if extending): −1-superscript
(numbers→f⁻¹→sin⁻¹→A⁻¹), bar family (|x|→‖v‖→|A|), Δ triple-job
(increment/discriminant/determinant), angle-bracket triple-job (components/span/
inner-product), subscript jobs (sequence position/coefficient/enumeration/
coordinate slot), two hats (unit/estimate), superscript corner (n/−1/T/⊥/+/(i,j)),
Σ operator-vs-object, arrow family (→/↦/↔/⟵ in P_{C←B}).

## Open items

1. **VERIFY BUILD** — the permission tooling was down the entire session: zero
   builds/previews ran. `npm run build`, click through a few edited pages, then commit.
2. Doc patches pending (user): H5 slug-id rule text (provided in chat), component
   path on ~line 13.
3. ASK-1: `\lim`, `\to`, `\sqrt` absent from keyboard dataset — central commands,
   keyboard links impossible until added.
4. ASK-2: `/math-symbols/algebra`, `/functions`, `/arithmetic` not wired into other
   symbols pages' menus or the `/math-symbols` hub (structural, user decides).
5. Backlink micro-pass candidate: `/math-symbols/algebra` and `/math-symbols/linear-algebra`
   explanations use page-level links; could tighten to the 28 new `#notation` anchors.
6. Content note for user: `powers/rational-exponents` vs `roots/rational-exponents`
   overlap heavily as content (registry note; outside notation scope).
7. Candidate parked: sinh⁻¹/arsinh naming has no owner (recommended-note at
   derivatives/special).

## Not yet NotationSection-passed

trigonometry, functions, probability, combinatorics, complex-numbers, set-theory,
arithmetic, logic — these carry OLDER-format notation content from earlier passes
(probability has ~24 legacy 'notation'-id sections; several have dedicated notation
body sections recorded in the registry). Work there = upgrade/convert decision,
not greenfield; ask the operator before starting.

## Session ritual

One page per "next": load registry entry area → gate-check (survey titles + read
defining sections) → write 3-4 entries (each: tex/read/means/cases/alsoWritten/
confusedWith[/sameGlyphElsewhere], telegraph, links woven) → wire (import + key +
array) → greps → registry entry + `$crossSectionFindings` line → report with halts
first. Skips recorded in aggregate per family are fine. HALT conditions (doc Part V)
still apply — ask the operator, never decide tree/ownership conflicts silently.
