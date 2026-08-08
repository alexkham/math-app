# Linear Algebra — Diagram Candidate Inventory (v1)

Derived from `/pages/linear-algebra` — ~50 content pages, 8–13 sections each.
Each entry: **what the diagram is** → **trigger** → **payload** → **demand** (content it forces) → **where it lands**.

Mark each `KEEP` / `KILL`. Nothing below is scored or ranked.

---

## A. Structural / algebraic

### A1. Property Law Card
**What it is.** A grid of small cards. Each card: law name in the header, the formal statement centred as display math, a condition strip below it (when it holds / when it fails), and an optional one-line note. Cards are uniform height; the condition strip is always present even when it reads "unconditional".

**Trigger.** A section that enumerates named algebraic laws of an operation.

**Payload.** `laws[]` = { name, statement, condition, failsWhen, note }

**Demand.** The `failsWhen` field. Prose lists commutativity, associativity, distributivity and moves on. The card refuses to render a blank there, which forces the explicit statement that matrix multiplication is not commutative *with a witness pair*, that the cross product is not associative, that the transpose reverses order.

**Lands on.** 61 "Properties of…" sections: dot product, cross product, norm, vector addition, scalar multiplication, determinant, inverse, rank, trace, projections, transpose, matrix multiplication, factors of QR/LU/spectral.

---

### A2. Theorem Card
**What it is.** A vertical card split by a rule. Upper half: hypotheses as a numbered list, then the conclusion set off below them. Lower half: the converse written out as a statement in its own right, with a verdict badge (holds / fails / holds under extra hypothesis) and the counterexample beside it. The rule between halves is the load-bearing element — it asserts these are two different statements.

**Trigger.** A named theorem stated in the prose.

**Payload.** `{ name, hypotheses[], conclusion, converse: { statement, verdict, counterexample, extraHypothesis } }`

**Demand.** The converse half. Currently the corpus does this well exactly once (Wronskian, obj7: "the converse requires caution… counterexamples exist") and nowhere else. Rank-Nullity, Cayley-Hamilton, Rouché–Capelli, the Spectral Theorem, Basis Size, Cauchy-Schwarz all appear with no converse discussion at all.

**Lands on.** 39 theorem mentions. Rouché–Capelli, Cayley-Hamilton, Rank-Nullity, Spectral, Basis Size, Cauchy-Schwarz, Triangle Inequality, Pythagorean, Parseval/Bessel, Invertibility Equivalence.

---

### A3. Equivalence Ring (TFAE)
**What it is.** Numbered statements arranged around a closed ring, edges drawn between them. Each statement is tagged by domain (determinant / rank / subspace / system / transformation) with a colour. The ring shape is the semantic claim: no statement is primary, every one implies every other.

**Trigger.** "The following are equivalent" — stated or implied by a list of conditions all meaning the same thing.

**Payload.** `{ subject, statements[]: { text, domain }, notes }`

**Demand.** Domain tagging. The invertibility equivalence currently reads as a flat list; tagging forces you to notice you have four determinant-flavoured statements and one subspace statement, and that the subspace side is under-developed.

**Lands on.** `matrix/inverse` (Invertibility Equivalence), `determinants/properties` (same list, second appearance), `matrix/rank` ("What Rank Governs"), `transformations/image-kernel` (Bijectivity ⟺ isomorphism), `vector-spaces/linear-independence` (independent ⟺ pivot in every column ⟺ det ≠ 0 ⟺ trivial null space).

---

### A4. Object Type Profile
**What it is.** Fixed-layout card per object type: defining condition as a formula at top, a small concrete example matrix rendered as an actual grid, then a fixed property strip — determinant, rank, eigenvalues, inverse, transpose relation — with the same slots in the same order on every card. Cards are comparable side by side because the slots never move.

**Trigger.** A catalogue of special forms of one kind of object.

**Payload.** `{ name, definingCondition, example, properties: { det, rank, eigenvalues, inverse, transpose, closure } }`

**Demand.** The fixed slot set. `matrix/types` covers 11 types but says different things about each — the identity gets eigenvalues, nilpotent doesn't. The fixed grid exposes every gap at once, across all 11.

**Lands on.** `matrix/types` (11 types), `vector-spaces/axioms` (Rⁿ, 𝒫ₙ, matrix spaces, function spaces), `orthogonality/inner-product` ("Examples of Inner Products"), `eigen/properties` ("Eigenvalues of Special Matrix Types"), `matrix/inverse` ("Inverses of Special Matrix Types"), `matrix/rank`, `matrix/trace`, `vector-spaces/dimension` ("Dimensions of Standard Spaces").

---

## B. Procedural

### B1. Row-Operation Trace
**What it is.** A horizontal (or vertical, on narrow screens) chain of matrix states. Each matrix drawn as a real bracketed grid, not inline LaTeX. Between consecutive states, an arrow carrying the operation label (`R₂ − 2R₁`). Pivots highlighted in each state; the cell(s) the operation touched marked in the target state.

**Trigger.** Any row reduction. 26 `\xrightarrow` chains in the corpus, and 119 worked examples of which most involve reduction.

**Payload.** `{ steps[]: { matrix, operationLabel, pivots[], changedCells[], note }, finalForm, reading }`

**Demand.** The `note` per step and the `reading` at the end. The current chains stop at the final matrix and leave the interpretation to a following sentence — sometimes present, often not. The trace makes "three pivots in three columns → independent" a structural part of the object.

**Why this one is different.** This is the type the corpus most needs and least has. The existing `\xrightarrow` chains are cramped, unreadable on narrow screens, and lose the pivot structure entirely. Highest-value build in this list.

**Lands on.** `linear-systems/gaussian-elimination`, `linear-systems/echelon-form`, `matrix/inverse`, `matrix/rank`, `vector-spaces/linear-independence`, `vector-spaces/span`, `vector-spaces/subspaces`, `decompositions/lower-upper`, `determinants/properties`.

---

### B2. Algorithm Step Ladder
**What it is.** Numbered rungs down the page. Each rung: the operation on the left, the justification on the right, and the state after it below — a three-column band, not a bullet. A warning slot on rungs that have failure modes.

**Trigger.** A named multi-step procedure.

**Payload.** `{ algorithm, input, steps[]: { operation, justification, resultState, warning }, output, cost }`

**Demand.** The justification column. Prose swallows it — Gram-Schmidt's subtraction step is stated but *why* the subtraction produces orthogonality is often implicit. Also the `warning` slot: Gram-Schmidt's numerical instability is one sentence at the end of the page rather than attached to the step that causes it.

**Lands on.** `orthogonality/gram-schmidt`, `linear-systems/gaussian-elimination`, `decompositions/cholesky`, `decompositions/lower-upper`, `decompositions/svd`, `determinants/cofactors` (Laplace expansion), `matrix/inverse` (row-reduction method).

---

### B3. Test Selector
**What it is.** A decision structure, not a table. The question at the top, then branch nodes on the discriminating condition (square? / how many vectors? / abstract space?), terminating in leaf cards that name the test, its cost, its applicability limit, and how to read its verdict.

**Trigger.** A section offering multiple methods for one yes/no question.

**Payload.** `{ question, branches[]: { condition, then }, tests[]: { name, applicableWhen, cost, verdictReading, failureMode } }`

**Demand.** The discriminating condition at each node. `linear-independence` obj9 lists row reduction, determinant, Wronskian, and definition as a flat summary — the tree forces the explicit statement that determinant requires exactly *n* vectors in ℝⁿ, which is currently buried in a closing sentence of obj4.

**Lands on.** 18 "Test" sections. `linear-independence` (4 tests), `vector-spaces/subspaces` (subspace test), `linear-systems/solvability`, `vector-spaces/span`, `transformations/properties` (linearity test), `decompositions/index` ("Choosing the Right Decomposition"), `matrix/inverse` ("Methods of Computing the Inverse"), `decompositions/qr` ("Gram-Schmidt vs Householder").

---

## C. Decomposition / dimension

### C1. Factorization Anatomy
**What it is.** The equation `A = QR` set large across the top, each factor drawn as a shaded block whose shading shows its structure (triangular fill, diagonal band, orthogonal marker). Below each factor, a caption block: name, shape, defining property, what it costs to compute. A dimension strip under the whole thing showing how m, n, r flow through.

**Trigger.** Any matrix factorization.

**Payload.** `{ equation, factors[]: { symbol, name, shape, structure, property, cost }, dimensions, existenceCondition, uniqueness }`

**Demand.** `existenceCondition` and `uniqueness` as first-class fields. Every decomposition page has these somewhere but at different depths — SVD's "always exists" and Cholesky's "SPD only" are stated, LU's is buried in "When LU Exists Without Pivoting", QR's is a section of its own. The card makes them uniform.

**Lands on.** All 6 decomposition pages, plus `eigen/diagonalization` (A = PDP⁻¹), `transformations/basis-change` (similarity), `orthogonality/least-squares` (projection matrix), `decompositions/spectral` (outer product form).

---

### C2. Dimension Ledger
**What it is.** A single horizontal bar of width *n*, split into labelled segments that must sum to *n*. Rank segment and nullity segment in different fills, with the count written inside each. Below, the identity that governs it. Where two subspaces interact, a second bar showing the intersection overlap.

**Trigger.** Any dimension-counting statement.

**Payload.** `{ total, segments[]: { label, size, subspace }, identity, matrix }`

**Demand.** Concrete numbers. Rank-nullity is stated symbolically on four pages; the bar can't render without an actual *n*, an actual *r*, and an actual matrix producing them.

**Lands on.** `matrix/rank` (Rank-Nullity), `transformations/image-kernel`, `vector-spaces/dimension` (subspace sum formula, dim(U+W)), `vector-spaces/fundamental-spaces` ("Dimension Accounting"), `eigen/properties` (algebraic vs geometric multiplicity).

---

### C3. Four-Subspace Map
**What it is.** Strang's picture, templated. Two boxes — ℝⁿ on the left, ℝᵐ on the right — each split by a horizontal line into two stacked regions. Row space above null space on the left; column space above left-null space on the right. Perpendicularity marks at each split. Arrows from the row space across to the column space, and from the null space collapsing to the origin dot. Dimensions labelled in every region.

**Trigger.** The four fundamental subspaces, orthogonal complements, or the domain/codomain decomposition.

**Payload.** `{ matrix, m, n, rank, spaces: { row, null, column, leftNull }, basisVectors }`

**Demand.** Basis vectors for all four spaces of one concrete matrix. The corpus discusses all four but rarely computes all four for the same example — left null space especially is described and not exhibited.

**Lands on.** `vector-spaces/fundamental-spaces`, `matrix/rank`, `transformations/image-kernel`, `orthogonality/index` ("The Four Fundamental Subspaces Revisited"), `decompositions/svd` ("SVD and the Four Fundamental Subspaces").

---

## D. Case / comparison

### D1. Case Split Panel
**What it is.** Parallel panels, one per case, sitting side by side under a shared question. Each panel: the condition that selects it as a header, the consequence, a geometric micro-figure, and a concrete instance. Panels are equal-width — the visual claim is that the cases are exhaustive and mutually exclusive.

**Trigger.** An exhaustive case split.

**Payload.** `{ question, cases[]: { condition, consequence, figure, example }, exhaustivenessNote }`

**Demand.** A geometric figure per case and an instance per case. `linear-systems` "The Three Possible Outcomes" describes all three and illustrates none.

**Lands on.** `linear-systems/index`, `linear-systems/solvability` ("The Three Cases Combined", square/over/under-determined), `eigen/diagonalization` ("When Diagonalization Fails"), `eigen/complex`, `decompositions/cholesky` ("The Semi-Definite and Rank-Deficient Case"), `matrix/types` (singular vs nonsingular).

---

### D2. Method Comparison (extension of existing `ComparisonTable`)
**What it is.** Your built component, with a cost variant: a complexity column rendered as a bar scaled to the exponent, plus a "fails when" column that is never optional.

**Trigger.** Two or more routes to the same result.

**Payload.** existing schema + `{ cost: { expression, exponent }, failsWhen, preferredWhen }`

**Demand.** `failsWhen` and `preferredWhen`. Eight "Computational Cost" sections state O(n³) and stop; none says at what size the choice actually flips.

**Lands on.** `decompositions/index` ("Choosing the Right Decomposition", "Relationships Between Decompositions"), `decompositions/qr`, `matrix/inverse` ("When Not to Compute the Inverse"), `vectors/cross-product` ("Dot vs Cross"), `linear-systems/index`, `orthogonality/least-squares`.

---

## E. Corrective / reference

### E1. Misconception Card
**What it is.** Two-column card. Left: the wrong statement, marked. Right: the correct one. Underneath, spanning both: *why the wrong version is tempting* — the reasoning that leads there. A minimal counterexample sits at the bottom.

**Trigger.** An error, pitfall, non-example, or "a common misconception is…".

**Payload.** `{ claim, wrong, right, whyTempting, counterexample }`

**Demand.** `whyTempting`. The corpus marks errors but almost never explains the pull toward them. `linear-independence` obj6 is the exception and it's the strongest paragraph on that page.

**Lands on.** `matrix/inverse` ("Common Errors"), `transformations/properties` ("Common Pitfalls", "Disproving Linearity"), `transformations/index` ("Non-Examples"), `vector-spaces/axioms` ("Non-Examples"), `vector-spaces/linear-independence` obj6, `vectors/cross-product` (non-associativity), `matrix/operations` (non-commutativity), `eigen/properties` (algebraic vs geometric multiplicity confusion).

---

### E2. Identity Sheet
**What it is.** Dense two-column reference block. Left: identity in display math. Right: the condition it needs. Grouped by subject with rules between groups. Deliberately dense — this is a lookup surface, not an explanatory one.

**Trigger.** A cluster of formulas meant for reference rather than derivation.

**Payload.** `{ groups[]: { heading, identities[]: { formula, condition, link } } }`

**Demand.** Conditions on each line. Trace identities and determinant properties are listed without their hypotheses in several places (cyclic property needs conformable shapes; det(AB) = det(A)det(B) needs square).

**Lands on.** `matrix/trace` ("Trace Identities", "Trace Properties at a Glance"), `determinants/properties`, `determinants/geometry` ("Area and Volume Formulas"), `vectors/cross-product` ("Standard Basis Cross Products"), `orthogonality/inner-product`, `/formulas` hub.

---

## F. Relational

### F1. Concept Relationship Map
**What it is.** Named nodes with typed, labelled edges — *specializes*, *generalizes*, *reduces to*, *requires*, *equivalent when*. Edge labels carry the condition under which the relation holds. Not a mind map: every edge has a type and a stated condition.

**Trigger.** A section explaining how two named constructions relate.

**Payload.** `{ nodes[]: { id, label, href }, edges[]: { from, to, relation, condition } }`

**Demand.** The `condition` on each edge. "Spectral Decomposition and SVD" and "Cholesky and LU: The Relationship" both describe relationships whose exact conditions are stated loosely — the edge label has to be precise or the diagram is wrong.

**Lands on.** `decompositions/index` ("Relationships Between Decompositions"), `decompositions/svd`, `decompositions/spectral`, `decompositions/cholesky`, `decompositions/qr`, `vectors/linear-combinations` ("Toward Independence and Basis"), all 8 hub `index.jsx` pages.

---

## KILLED — and why

| Candidate | Reason |
|---|---|
| Function feature card | Calculus object. No analogue in this section. |
| Number-set profile | Number theory. ℝⁿ closure is covered by A4. |
| Solid/shape profile | No solid geometry here. |
| Sign chart | No sign analysis. Nothing partitions the real line in this corpus. |
| Reference wheel / unit circle | Trigonometry. |
| Value table | LA examples are matrices, not input/output pairs. |
| Region diagram | Integration bounds. Not present. |
| Transformation family grid (parent functions) | Precalculus form. The LA analogue is `transformations/geometric`, covered by A4 + D1. |
| Annotated graph with callouts | Real trigger exists ("Geometric Interpretation" on most pages) but every instance needs bespoke SVG. Not templatable. Handle as hand-authored figures. |
| Inverse pairing | Absorbed into C1 (factorization) and A1 (properties of the inverse). |
| Composition chain | Absorbed into A1 and C1. Matrix composition is an algebraic law, not a pipeline. |
| Worked-example ladder (generic) | Split into B1 (row reduction, the dominant case) and B2 (named algorithms). Generic version has no distinct payload. |
| Classification tree | Absorbed into A4 and B3. Matrix types form a lattice with overlaps, not a tree. |
| Nesting / set-relations diagram | Subspace containment is real but almost always four-subspace-shaped → C3. |
| Proof chain | 39 theorem mentions, but the corpus states theorems rather than proving them in dependency-structured form. Revisit only if proof content gets written. |

---

## Count

**15 keep-candidates**, of which 2 are extensions of what you already have (`ComparisonTable` → D2; `DefinitionList` covers no new ground here but stays in use).

**13 new builds.**

If that's still too many, the argument for a first wave of four: **B1** (row-operation trace — the corpus's biggest unmet need, 26 existing chains rendering badly), **A1** (property law card — 61 landing sites, most of any type), **A2** (theorem card — 39 sites, largest content-gap yield), **C1** (factorization anatomy — owns an entire subsection outright).
