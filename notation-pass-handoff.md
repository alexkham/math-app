# Notation Pass — Handoff (updated 2026-08-25)

Context for continuing the NotationSection project. The registry and project memory
carry full state; this file is the orientation shortcut. **Supersedes the 2026-08-22
version** (which had probability mid-pass at 8 pages).

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
  (see OPEN ITEM 1 — the 2026-08-25 session could never run this).

## House rules (operator-issued, override the doc where they conflict)

1. Section title MUST contain the word "Notation" (scoped, never bare "Notation").
2. Section id is ALWAYS the slug `'notation'` — never numeric, never renumber
   existing ids. Exception: replacing an existing wholly-notation body section
   keeps its numeric id (30 precedents now).
3. Placement: immediately after the definition section. If the marks are defined
   later, place after their defining section. In-place replacements keep position.
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
9. **RENDER-BUG RULE (operator-reported):** `processContent`
   supports ONLY `$math$`, `**bold**`, `[label](!/path)`, `@[code]@`.
   It does NOT support `*italics*` (prints the asterisks) and does NOT support
   math inside a link label (`[$f(x)$](!/path)` prints the dollar signs).
   Grep every page before recording:
   - `\[\$`
   - `[^*$^]\*[a-zA-Z][a-zA-Z -]*\*[^*]`
   - `[^\\]\\[a-zA-Z]` (single backslashes)
   - `\]\(/` (links missing `!`)
   - `math-symbols/[a-z-]+#` (forbidden — those pages have no anchors)
   **SELF-CHECK WARNING (2026-08-25):** the executor itself slipped math-into-link-label
   TWICE while drafting new entries (`[$\mu$](...)`), both caught by the greps.
   Run rule 9 on your OWN drafts, not just legacy content.

## State: DONE — 12 sections, 107 notation sections written

| Section | Written | Notes |
|---|---|---|
| calculus | 15 | prior sessions |
| algebra | 11 | (+ created `/math-symbols/algebra`) |
| linear-algebra | 17 | |
| complex-numbers | 10 | 2026-08-17 |
| trigonometry | 8 | 2026-08-17 |
| functions | 7 | 2026-08-17 |
| set-theory | 4 | 2026-08-17 |
| combinatorics | 3 | 2026-08-17 |
| arithmetic | 7 | 2026-08-21 |
| logic | 5 | 2026-08-22 |
| probability | **20** | 8 on 2026-08-22 + **12 on 2026-08-25 — SECTION CLOSED** |

**30 in-place replacements** (numeric-id or slug kept, inbound anchors verified each
time) and **5 mandatory splits** project-wide.

## PROBABILITY — CLOSED 2026-08-25

All 8 ranked candidates from the previous handoff written (bayes-theorem,
independence, joint-probability, distributions, median, mode, total-probability,
indicators) **plus** the whole chipless queue swept: central-limit-theorem,
large-numbers-law, inequalities/markov, inequalities/chebyshev written (greenfields);
inequalities parent, combinatorics, models, models/coin-toss, models/dice-roll,
tree-diagrams **gate-fail surveyed** with reasons recorded and 4 woven links planted.
`$chiplessPages` residue = rules/formulas/definitions only (house-rule-5 reference
skips). Nothing in probability is unsurveyed.

New app-wide ownerships landed 2026-08-25 (check `covers[]` before claiming any):
P(A|B)/P(B|A) reversal pair (bayes), marginalization Σ_y (joint-probability),
probability-space triple (Ω,𝓕,ℙ) + induced measure ℙ_X + =d (distributions),
arg max (mode), partition marks ⋃ᵢ/i≠j + the law itself (total-probability),
→d (central-limit-theorem), →P/→a.s. + lim-inside-vs-outside-P (large-numbers-law),
tail event P(X≥a) (markov), two-sided deviation |X−μ|≥kσ (chebyshev),
indicator family 𝟙/I_A (indicators).

## Open items

1. **REGISTRY VALIDATION + BUILD + COMMIT.** The permission classifier was down for
   the ENTIRE 2026-08-25 session (~25 attempts) — `node` JSON-validation of the
   registry never ran. Every edited region was read back and structurally verified
   by hand, but run the parse FIRST thing in a working shell. Then: stop the dev
   server on port 3000 (it contends with `next build` over `.next`; a second
   instance may sit on 3001), `npx next build` (do NOT pipe through `head`), commit.
   The tree carries this entire project plus older uncommitted work.
2. Doc patches pending (operator): H5 slug-id rule text, component path (~line 13).
3. ASK-1 (CORRECTED 2026-08-25): `\lim`, `\to`, `\sqrt`, `\mid` absent from the
   keyboard dataset. **`\propto` and `\sum` ARE present** — the 08-24 flag on them
   was a grep-escaping error, corrected in the registry. `\perp` is present (used
   on independence).
4. ASK-2: `/math-symbols/{algebra,functions,arithmetic}` not wired into other
   symbols pages' menus or the `/math-symbols` hub (structural, operator decides).
5. **SITE-WIDE GREP CANDIDATE:** large-numbers-law had ALL 23 internal links missing
   the `!` prefix (every link opened a new tab). Other pages authored in the same
   batch may share the defect — `grep -rn '](/probability' pages/` style sweeps
   per section would find them cheaply.
6. Registry tidy: `probability/expected-value__notationSpot` and
   `probability/variance__notationSpot` distinct-key merge still pending.
7. Stray `plagiarism:'yes'` key on chebyshev's obj3 sectionsContent — noted 2026-08-25,
   left untouched, operator's call.
8. Backlink micro-pass candidate: `/math-symbols/*` explanations use page-level
   links; could tighten to the ~107 `#notation` anchors now available.
9. Parked candidates: `⌊x⌋` floor bracket, complex-fractions main-bar-length cue,
   `sinh⁻¹/arsinh` naming, classical ratio P(A)=|A|/|Ω| as a compound mark
   (recommended-note at probability/combinatorics — natural home if a
   probability-basics pass ever runs).
10. Known pre-existing bug NOT fixed (out of scope): arithmetic visual-tool
    `divisibility-table` id 13 reads `a | b` backwards vs the lesson pages.

## Errata fixed in passing (2026-08-25 — ~45 instances, all reaching readers)

- **Broken central formulas:** bayes' theorem display rendered a pilcrow ¶ (`\P`);
  independence's defining product showed a literal comma (single `\,`); CLT's
  theorem display showed TWO literal commas; markov's and chebyshev's statements
  (both displays) wrapped in literal square brackets (`$\[...\]$` family) with
  `mu`/`sigma^2`/`k,σ` as text; models parent had four bracket-wrapped displays
  + `(S,mathcalE,P)`.
- Three `\sqrt{n}` printed as "sqrt n" text on CLT — one in the section ABOUT √n.
- joint-probability's contingency table cells rendered "(y_1)" etc. as literal text;
  `\(...\)` fragments in two more sections; an `&apos;` entity printing literally.
- 23 links missing `!` on large-numbers-law (bulk-fixed).
- ~20 `*italics*` instances across nine pages.

## Cross-section threads (keep consistent if extending)

−1-superscript (numbers → z⁻¹ → f⁻¹ → sin⁻¹ → A⁻¹ → F⁻¹ quantile, complete);
bar family (|x| → |z| → ‖v‖ → |A| → |S| → |X−μ| deviation);
the pipe's five jobs (such-that · divides · absolute value · cardinality · given);
**convergence-rider trio (NEW, complete): =d static (distributions) · →d (CLT) ·
→P/→a.s. (LLN), ranked a.s.⇒P⇒d, all cross-linked**;
tilde's two jobs (over a letter = estimate x̃ · between letters = declaration X~F);
two hats (unit vs estimate: μ̂, M̂_o) and its statistics cousin (μ vs x̄, ρ vs r);
letters-are-roles warning (bayes ↔ total-probability write the same law in traded
letters — grammar is the invariant);
k's two units (Markov k·E[X] vs Chebyshev kσ);
Δ's four jobs; σ census; ⊢/⊨ pair; meta/object shafts; ⊤/⊥ mirror; ∧∨ ↔ ∩∪ mirror;
subscript jobs (position · coefficient · enumeration · coordinate slot · survivor-of-
marginalization).

## Session ritual (unchanged)

One page per "next": load the registry area → gate-check (survey titles + read
defining sections) → write 3–4 entries (each: tex/read/means/cases/alsoWritten/
confusedWith[/sameGlyphElsewhere], telegraph, links woven) → wire (import + key +
array entry) → run the rule-9 greps (on your own draft too) → registry entry +
`$crossSectionFindings` line → validate registry JSON → report with halts first.
HALT conditions (doc Part V) still apply — ask the operator, never decide
tree/ownership conflicts silently.

## What's left project-wide

The 12 content sections are all complete. Remaining work is optional/structural:
the open items above (esp. the site-wide missing-`!` sweep and the backlink
micro-pass), plus whatever new pages the site grows. There is no "next section."
