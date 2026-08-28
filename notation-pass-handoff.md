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

## State: DONE — 12 sections, 116 notation sections written

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
| probability | **29** | 8 on 2026-08-22 + **21 on 2026-08-25 — SECTION CLOSED** |

**39 in-place replacements** (numeric-id or slug kept, inbound anchors verified each
time), **6 greenfields**, and **5 mandatory splits** project-wide.

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

1. **COMMIT — the only remaining operational debt.** Registry JSON validation and
   the production build were BOTH blocked all session by a permission-classifier
   outage (~30 attempts); the classifier recovered at the end of 2026-08-25 and both
   ran clean:
   - `node -e "JSON.parse(...)"` on the registry → **VALID**.
   - `npx next build` → **exit code 0**, compiled in 3.5 min, lint passed, all 29
     pages edited that day prerendered as SSG (verified by name in the output).
     Only pre-existing `react-hooks/exhaustive-deps` and `no-img-element` warnings
     in visualization components — none from notation work.
   The tree still carries this entire project plus older uncommitted work. Commit is
   all that is left.

   **Build hygiene (learned the hard way 2026-08-25):** do NOT pipe `next build`
   through `head` **or `tail`**. `head` kills it via SIGPIPE mid-write and corrupts
   `.next`; `tail` is worse in one respect — it swallows the output *and* the
   reported exit code becomes **tail's, not the build's**, so a failing build looks
   green. A run that appeared to "exit 0" while printing an `ENOENT … mkdir
   .next/server/pages/algebra/inequalities` was in fact a corrupted `.next`;
   `rm -rf .next` plus an **unpiped** rebuild cleared it. Always run it unpiped and
   read the real tail from the task output file. Stop any dev server on port 3000
   first; it contends over `.next`.
2. Doc patches pending (operator): H5 slug-id rule text, component path (~line 13).
3. **ASK-1 — LARGELY WITHDRAWN 2026-08-25. The dataset needs no additions.**
   The "missing commands" were mostly a flawed verification recipe. The procedure's
   check `grep -c '"latex_code": "\\<command>"'` fails twice over: argument-taking
   commands are stored **with their braces**, and the same glyph is often filed under
   a **different command name**. Re-checked all 650 entries *by glyph*:
   - `\sqrt` **is present** — stored as `\sqrt{}` (plus `\sqrt[3]{}`, `\sqrt[4]{}`);
     the brace suffix defeated the old grep.
   - `|` **is present** — as `\left|` / `\right|` (and `\nmid` for ∤), so the whole
     bar family could always have named the keyboard.
   - `→` **is present** — as `\rightarrow` among ~18 arrow forms; `\to` is just
     LaTeX's alias for it.
   - `\lim` is genuinely absent **and should stay absent**: every entry carries a
     `symbol` glyph (this is a character-insertion keyboard) and `lim` is an operator
     name with no glyph — it does not fit the data model.
   - `\propto`, `\sum`, `\perp` present (the 08-24 flag on those was a grep-escaping
     error, already corrected).

   **Corrected recipe — verify by glyph, not by command string:** load the JSON,
   flatten every array, find entries by the character itself
   (`e.symbol === '√'`), then read that entry's `latex_code` to see what the
   keyboard actually inserts.

   *Follow-up opportunity (not done):* entries on radicals, the bar family
   (`|x|`, `|z|`, `‖v‖`, cardinality, divides) and arrow marks were written without
   keyboard links on the strength of the bad grep — they could legitimately gain them.
4. ASK-2: `/math-symbols/{algebra,functions,arithmetic}` not wired into other
   symbols pages' menus or the `/math-symbols` hub (structural, operator decides).
5. **SITE-WIDE SWEEPS — three done 2026-08-25, one left open.** Details in the
   registry under `$crossSectionFindings.$siteWideSweeps`.
   - *Missing-`!` links* — swept site-wide; only large-numbers-law (23) and
     variance (7) were affected. **Clean now.**
   - *`*italics*` inside NotationSection fields* — **108 fixed across 37 files.**
     Diagnostic finding: every affected file was in algebra, calculus or
     linear-algebra, i.e. written **before** the render-bug rule existed
     (2026-08-17). Every section written after it was clean — the rule-9 greps
     work when they are actually run. Verified by asterisk-strip equality,
     257 math segments compared identical, and a green build.
   - *Broken `$\[…\]$` / `\(…\)` delimiters* — site-wide only two live instances
     remained after the day's page fixes (both on /math-symbols). **Clean now.**
   - *Body-prose italics* (fields `after`/`content`/`note`/`footnote`) — 260
     site-wide at survey. **Probability's 7 fixed** (axioms, events,
     distributions/discrete); that section is clean.
   - *Math-alphanumeric Unicode inside `$…$`* — **found by the build, not a grep.**
     `next build` warns `No character metrics for '𝜆'`: characters from the
     Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF) were written inside
     math where plain ASCII belongs, and KaTeX renders them with broken fallback
     glyphs. 141 live segments site-wide. **Probability's 66 fixed** across 8 files
     (Latin italics → ASCII, which KaTeX italicises anyway; Greek → `\\lambda`).
     Then the remaining 75 (logic 74, trigonometry 1) were cleared too.
     **ZERO remain site-wide.**
   - *Body-prose italics, site-wide* — the deferred 253 were cleared as well
     (combinatorics 71, algebra 57, functions 55, set-theory 37, calculus 24,
     linear-algebra 19, arithmetic 12, complex-numbers 10, trigonometry 6).
     **ZERO remain site-wide.**

   **Verification methodology — read this before repeating a bulk repair.** The
   asterisk-strip equality test used on the first sweep **cannot be reused naively**
   here: `git diff` compares against HEAD, and this tree carries a lot of
   uncommitted work from earlier sessions (arithmetic alone shows −469 lines that
   predate this pass), so diffing against HEAD mixes other edits into the comparison
   and reports a **false failure**. For a tree with pre-existing uncommitted work,
   verify instead by: (a) **idempotency** — re-run the transform in dry-run and
   confirm 0 changed lines; (b) **no `***`** anywhere, proving no double-application;
   (c) the defect greps return 0; (d) a green production build.
6. ~~Registry tidy: the two `__notationSpot` distinct keys~~ — **DONE 2026-08-25.**
   Both merged into their canonical `probability/expected-value` and
   `probability/variance` entries: current NotationSection spot first, the
   superseded 2026-08-06 survey spot kept beside it as `resolved` with a
   `resolution` string (never-delete-a-spot rule). Zero `__notationSpot` keys
   remain; 236 page entries total.
7. Stray `plagiarism:'yes'` key on chebyshev's obj3 sectionsContent — noted 2026-08-25,
   left untouched, operator's call.
8. ~~Backlink micro-pass~~ — **INVESTIGATED AND CLOSED 2026-08-25. Do not re-open
   as a bulk task.** The idea was to tighten `/math-symbols/*` page-level backlinks
   to the 116 `#notation` anchors. Sizing looked good (119 page-level links, 85
   pointing at pages that now own an anchor) — but reading the link *contexts*
   overturned it: they are **concept** references inside symbol explanations
   ("proportion of [variance]", "Central to [Bayes' theorem]"), where the reader
   wants the topic, not its conventions. Re-anchoring would have been a net
   regression on ~85 links. A grep for genuinely notation-flavored contexts across
   the whole tree found exactly **one** (`z*` → "Alternative notation for the
   complex conjugate"), which was upgraded. Final score: 1 of 119.
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

**STRATEGY REVERSED (operator go-ahead, late 2026-08-25):** the 2026-08-22
no-mass-conversion decision is off — the distribution family's legacy sections
became upgrade candidates, and **nine of the eleven are done**: binomial, normal,
poisson, geometric, exponential, hypergeometric, negative-binomial, and both
uniforms (replacements #31–39). pmf and pdf **gate-failed** — their legacy sections
duplicate marks owned by the parent probability-function#notation; pointers were
woven and **ASK-6** raised (trim to pointers, or keep as local summaries?).

**The family pass is CLOSED.** Both sub-hubs (`distributions/discrete`,
`distributions/continuous`) **gate-failed** under house rule 5 and the calculus
"all hubs skipped" precedent: each is a family roster whose per-child "Notations
Used" blocks are condensed copies of the child sections replaced the same day, so
every mark is owned downstream and the parent hub holds the rest. Nine written,
four gate-failed (pmf, pdf, both sub-hubs). Six render bugs fixed on the discrete
sub-hub (family names inside `$…$` without `\text{}`, rendering as runs of italic
letters).

**ASK-6 — RESOLVED 2026-08-25, option (b) pointer-only.** The eleven satellite
notation accounts (pmf, pdf, six discrete roster blocks, three continuous roster
blocks) keep their text — they earn their place as browse-surface summaries — and
each now carries a pointer to the owning section, so no mark has two competing full
accounts without a route to the canonical one. Each pointer names what the child
adds (the `U(a,b)` collision, the `q` abbreviation, the two rival geometric
definitions, the shifted coefficient, the case system, λ's double duty, the reserved
`Z`/`φ`/`Φ`, endpoint irrelevance, the mean fingerprint) rather than being a bare
"see also". All nine new anchors verified against the registry's recorded section
ids. Nothing trimmed or deleted.

Threads the family pass completed, worth preserving if it extends:
- **Support-style census (5 members, all cross-linked):** binomial's closed list,
  Poisson's open ellipsis, hypergeometric's computed clamps, negative binomial's
  shifted list, discrete uniform's finite named-ends run. "Read the support clause
  first" now identifies the family before the formula does.
- **Trials-and-waits mesh:** binomial ↔ poisson ↔ exponential ↔ geometric, fully
  bidirectional (λ crossing, memorylessness twins, rare-events bridge, NB(1,p)=Geom).
- **Two-definitions warnings:** geometric and negative binomial both carry them;
  the distributions hub's generic minefield entry now points at concrete pages.
- **Shared-name collision:** U(a,b) written from BOTH uniform pages, cross-linked.

Beyond that: the open items above (esp. the site-wide missing-`!` sweep and the
backlink micro-pass), plus whatever new pages the site grows.
