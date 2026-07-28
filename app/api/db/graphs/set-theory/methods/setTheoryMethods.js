// Auto-generated from set-theory-graph-v1.json + enrichment.
const SET_THEORY_METHODS_DATA = {
  "section": "set-theory",
  "version": 1,
  "meta": {
    "nodeCount": 58,
    "edgeCount": 210,
    "edgeTypeCounts": {
      "inverse-of": 4,
      "requires": 41,
      "similar-to": 42,
      "based-on": 76,
      "alternative-to": 27,
      "contrasts-with": 9,
      "specializes": 4,
      "proves": 7
    },
    "nodeTypeCounts": {
      "atomic": 24,
      "composite": 16,
      "advanced": 7,
      "theorem-based": 11
    },
    "domainCounts": {
      "representation": 10,
      "subsets": 9,
      "operations": 11,
      "algebra": 10,
      "cardinality-finite": 6,
      "cardinality-infinite": 12
    }
  },
  "edgeTypes": {
    "inverse-of": {
      "symmetric": true,
      "color": "#1e3a8a",
      "width": 2.0,
      "dash": null,
      "phrase": "is the inverse of"
    },
    "alternative-to": {
      "symmetric": true,
      "color": "#1e40af",
      "width": 1.6,
      "dash": "6,3",
      "phrase": "is an alternative to"
    },
    "contrasts-with": {
      "symmetric": true,
      "color": "#6b7280",
      "width": 1.4,
      "dash": "3,3",
      "phrase": "contrasts with"
    },
    "similar-to": {
      "symmetric": true,
      "color": "#9ca3af",
      "width": 1.1,
      "dash": null,
      "phrase": "is similar to"
    },
    "based-on": {
      "symmetric": false,
      "inverse": "basis-for",
      "color": "#2563eb",
      "width": 1.6,
      "dash": null,
      "phrase": "is based on"
    },
    "requires": {
      "symmetric": false,
      "inverse": "required-by",
      "color": "#60a5fa",
      "width": 1.3,
      "dash": "5,3",
      "phrase": "requires"
    },
    "specializes": {
      "symmetric": false,
      "inverse": "generalizes",
      "color": "#ea580c",
      "width": 1.6,
      "dash": "5,3",
      "phrase": "specializes"
    },
    "proves": {
      "symmetric": false,
      "inverse": "proved-by",
      "color": "#c2410c",
      "width": 2.0,
      "dash": null,
      "phrase": "proves"
    },
    "precondition-of": {
      "symmetric": false,
      "inverse": "has-precondition",
      "color": "#d97706",
      "width": 1.4,
      "dash": "2,2",
      "phrase": "is a precondition of"
    }
  },
  "nodes": [
    {
      "id": "roster-to-builder",
      "type": "atomic",
      "domain": "representation",
      "label": "Roster → set-builder",
      "summary": "Rewrite {a, b, c} as {x : P(x)}."
    },
    {
      "id": "builder-to-roster",
      "type": "atomic",
      "domain": "representation",
      "label": "Set-builder → roster",
      "summary": "Enumerate the elements satisfying the predicate."
    },
    {
      "id": "list-elements-from-builder",
      "type": "atomic",
      "domain": "representation",
      "label": "List elements from set-builder",
      "summary": "Given {x : P(x)}, list every x with P(x) true."
    },
    {
      "id": "check-membership-roster",
      "type": "atomic",
      "domain": "representation",
      "label": "Check whether x ∈ A (roster)",
      "summary": "Decide membership by scanning a finite list."
    },
    {
      "id": "check-membership-builder",
      "type": "atomic",
      "domain": "representation",
      "label": "Check whether x ∈ A (set-builder)",
      "summary": "Decide membership by evaluating the predicate."
    },
    {
      "id": "recognize-empty-set",
      "type": "atomic",
      "domain": "representation",
      "label": "Recognize the empty set",
      "summary": "Spot that a described set has no elements, e.g. {x ∈ ℝ : x² < 0} = ∅."
    },
    {
      "id": "check-set-equality",
      "type": "composite",
      "domain": "representation",
      "label": "Check whether A = B",
      "summary": "Verify A and B contain exactly the same elements."
    },
    {
      "id": "identify-number-systems",
      "type": "atomic",
      "domain": "representation",
      "label": "Identify ℕ, ℤ, ℚ, ℝ, ℂ",
      "summary": "Recognize standard number sets and their inclusion chain."
    },
    {
      "id": "interval-to-builder",
      "type": "atomic",
      "domain": "representation",
      "label": "Interval → set-builder",
      "summary": "Rewrite [a, b] as {x ∈ ℝ : a ≤ x ≤ b}."
    },
    {
      "id": "builder-to-interval",
      "type": "atomic",
      "domain": "representation",
      "label": "Set-builder → interval",
      "summary": "Rewrite a real-line predicate as interval notation."
    },
    {
      "id": "check-subset-finite",
      "type": "composite",
      "domain": "subsets",
      "label": "Check whether A ⊆ B (finite)",
      "summary": "Verify every element of A is in B."
    },
    {
      "id": "check-proper-subset",
      "type": "composite",
      "domain": "subsets",
      "label": "Check whether A ⊂ B",
      "summary": "Verify subset AND A ≠ B."
    },
    {
      "id": "prove-subset-arbitrary",
      "type": "advanced",
      "domain": "subsets",
      "label": "Prove A ⊆ B by arbitrary element",
      "summary": "Take x ∈ A and derive x ∈ B."
    },
    {
      "id": "disprove-subset-counterexample",
      "type": "advanced",
      "domain": "subsets",
      "label": "Disprove A ⊆ B by counterexample",
      "summary": "Exhibit x ∈ A with x ∉ B."
    },
    {
      "id": "list-subsets-finite",
      "type": "composite",
      "domain": "subsets",
      "label": "List all subsets of a finite set",
      "summary": "Enumerate every subset combinatorially."
    },
    {
      "id": "count-powerset",
      "type": "atomic",
      "domain": "subsets",
      "label": "Compute |P(A)|",
      "summary": "Apply |P(A)| = 2^|A|."
    },
    {
      "id": "list-powerset",
      "type": "composite",
      "domain": "subsets",
      "label": "List P(A)",
      "summary": "Write out the power set as a set of sets."
    },
    {
      "id": "distinguish-in-vs-subset-powerset",
      "type": "atomic",
      "domain": "subsets",
      "label": "Distinguish X ∈ P(A) vs X ⊆ A",
      "summary": "Clarify the confusion between membership and subset in the power-set context."
    },
    {
      "id": "distinguish-empty-in-vs-subset",
      "type": "atomic",
      "domain": "subsets",
      "label": "Distinguish ∅ ∈ A vs ∅ ⊆ A",
      "summary": "Untangle when the empty set is an element vs a subset."
    },
    {
      "id": "union-roster",
      "type": "atomic",
      "domain": "operations",
      "label": "Compute A ∪ B (roster)",
      "summary": "Combine and dedupe two finite sets."
    },
    {
      "id": "intersection-roster",
      "type": "atomic",
      "domain": "operations",
      "label": "Compute A ∩ B (roster)",
      "summary": "Find the common elements."
    },
    {
      "id": "difference",
      "type": "atomic",
      "domain": "operations",
      "label": "Compute A \\ B",
      "summary": "Elements of A not in B."
    },
    {
      "id": "symmetric-difference",
      "type": "composite",
      "domain": "operations",
      "label": "Compute A △ B",
      "summary": "Elements in exactly one of A, B."
    },
    {
      "id": "complement",
      "type": "atomic",
      "domain": "operations",
      "label": "Compute Aᶜ",
      "summary": "Given a universe U, take U \\ A."
    },
    {
      "id": "compound-expression",
      "type": "composite",
      "domain": "operations",
      "label": "Compute compound expression",
      "summary": "Evaluate (A ∪ B) ∩ Cᶜ and similar."
    },
    {
      "id": "operations-from-builder",
      "type": "composite",
      "domain": "operations",
      "label": "Compute set operations from set-builder",
      "summary": "Same operations, set-builder input form."
    },
    {
      "id": "venn-2-sets",
      "type": "atomic",
      "domain": "operations",
      "label": "Set operations by 2-set Venn diagram",
      "summary": "Reason visually with two overlapping circles."
    },
    {
      "id": "venn-3-sets",
      "type": "atomic",
      "domain": "operations",
      "label": "Set operations by 3-set Venn diagram",
      "summary": "Three-set Venn diagram; 8 regions."
    },
    {
      "id": "shade-venn-from-expression",
      "type": "composite",
      "domain": "operations",
      "label": "Shade Venn from expression",
      "summary": "Given a set expression, mark the region it represents."
    },
    {
      "id": "read-expression-from-venn",
      "type": "composite",
      "domain": "operations",
      "label": "Read expression from shaded Venn",
      "summary": "Given a shaded region, write the corresponding expression."
    },
    {
      "id": "commutativity",
      "type": "atomic",
      "domain": "algebra",
      "label": "Apply commutativity",
      "summary": "A ∪ B = B ∪ A, A ∩ B = B ∩ A."
    },
    {
      "id": "associativity",
      "type": "atomic",
      "domain": "algebra",
      "label": "Apply associativity",
      "summary": "(A ∪ B) ∪ C = A ∪ (B ∪ C), same for ∩."
    },
    {
      "id": "distributive-law",
      "type": "atomic",
      "domain": "algebra",
      "label": "Apply distributive law",
      "summary": "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."
    },
    {
      "id": "de-morgan",
      "type": "atomic",
      "domain": "algebra",
      "label": "Apply De Morgan’s laws",
      "summary": "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ, (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ."
    },
    {
      "id": "difference-as-intersection-complement",
      "type": "atomic",
      "domain": "algebra",
      "label": "Apply A \\ B = A ∩ Bᶜ",
      "summary": "Rewrite differences in terms of intersections."
    },
    {
      "id": "simplify-expression",
      "type": "composite",
      "domain": "algebra",
      "label": "Simplify a set expression",
      "summary": "Apply algebra of sets to reduce."
    },
    {
      "id": "prove-identity-membership-table",
      "type": "composite",
      "domain": "algebra",
      "label": "Prove identity by membership table",
      "summary": "Truth-table style: enumerate membership cases."
    },
    {
      "id": "prove-identity-mutual-inclusion",
      "type": "advanced",
      "domain": "algebra",
      "label": "Prove identity by mutual inclusion",
      "summary": "Show LHS ⊆ RHS and RHS ⊆ LHS."
    },
    {
      "id": "prove-identity-algebraic",
      "type": "advanced",
      "domain": "algebra",
      "label": "Prove identity by algebraic manipulation",
      "summary": "Chain applications of the algebra laws."
    },
    {
      "id": "prove-identity-indicator",
      "type": "composite",
      "domain": "algebra",
      "label": "Prove identity by indicator functions",
      "summary": "Convert to indicator functions and reason arithmetically."
    },
    {
      "id": "cardinality-from-description",
      "type": "atomic",
      "domain": "cardinality-finite",
      "label": "Determine |A| from description",
      "summary": "Count elements from a given description."
    },
    {
      "id": "ie-2-sets",
      "type": "theorem-based",
      "domain": "cardinality-finite",
      "label": "Inclusion–exclusion (2 sets)",
      "summary": "|A ∪ B| = |A| + |B| − |A ∩ B|."
    },
    {
      "id": "ie-3-sets",
      "type": "theorem-based",
      "domain": "cardinality-finite",
      "label": "Inclusion–exclusion (3 sets)",
      "summary": "|A ∪ B ∪ C| with all pairwise and triple intersections."
    },
    {
      "id": "ie-n-sets",
      "type": "theorem-based",
      "domain": "cardinality-finite",
      "label": "Inclusion–exclusion (n sets)",
      "summary": "General signed-sum formula."
    },
    {
      "id": "counting-word-problems",
      "type": "composite",
      "domain": "cardinality-finite",
      "label": "Solve counting word problems",
      "summary": "Translate a word problem into set operations, then count."
    },
    {
      "id": "count-multiple-conditions-ie",
      "type": "composite",
      "domain": "cardinality-finite",
      "label": "Count with multiple conditions (I–E)",
      "summary": "Count objects satisfying compound conditions via inclusion–exclusion."
    },
    {
      "id": "show-countable-bijection",
      "type": "advanced",
      "domain": "cardinality-infinite",
      "label": "Show countability by bijection with ℕ",
      "summary": "Exhibit an explicit bijection f: ℕ → A."
    },
    {
      "id": "prove-Z-countable",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove ℤ is countable",
      "summary": "Interleave positives and negatives."
    },
    {
      "id": "prove-NxN-countable",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove ℕ × ℕ is countable",
      "summary": "Diagonal enumeration of pairs."
    },
    {
      "id": "prove-Q-countable",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove ℚ is countable",
      "summary": "Rationals enumerated via ℤ × ℕ."
    },
    {
      "id": "prove-countable-union-countable",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove countable union of countables is countable",
      "summary": "Arrange the union in a ℕ × ℕ grid."
    },
    {
      "id": "cantor-diagonal",
      "type": "advanced",
      "domain": "cardinality-infinite",
      "label": "Cantor’s diagonal argument",
      "summary": "Assume a listing; construct an element not in it."
    },
    {
      "id": "prove-R-uncountable",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove ℝ is uncountable",
      "summary": "Diagonal argument on decimal expansions."
    },
    {
      "id": "prove-interval-equals-R",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove |(0, 1)| = |ℝ|",
      "summary": "Bijection or Cantor–Bernstein between (0, 1) and ℝ."
    },
    {
      "id": "compare-cardinalities-injections",
      "type": "advanced",
      "domain": "cardinality-infinite",
      "label": "Compare cardinalities via injections",
      "summary": "Use injective functions to compare sizes."
    },
    {
      "id": "cantor-bernstein-schroeder",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Apply Cantor–Bernstein–Schroeder",
      "summary": "Two injections ⇒ bijection."
    },
    {
      "id": "cantor-theorem",
      "type": "theorem-based",
      "domain": "cardinality-infinite",
      "label": "Prove |P(A)| > |A| (Cantor’s theorem)",
      "summary": "No surjection from A to P(A)."
    },
    {
      "id": "classify-cardinality",
      "type": "composite",
      "domain": "cardinality-infinite",
      "label": "Classify cardinality (finite / countable / uncountable)",
      "summary": "Decide which class a given set belongs to."
    }
  ],
  "edges": [
    {
      "source": "roster-to-builder",
      "target": "builder-to-roster",
      "type": "inverse-of"
    },
    {
      "source": "roster-to-builder",
      "target": "list-elements-from-builder",
      "type": "inverse-of"
    },
    {
      "source": "roster-to-builder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "roster-to-builder",
      "target": "interval-to-builder",
      "type": "similar-to"
    },
    {
      "source": "builder-to-roster",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "builder-to-roster",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "builder-to-roster",
      "target": "list-elements-from-builder",
      "type": "similar-to"
    },
    {
      "source": "builder-to-roster",
      "target": "builder-to-interval",
      "type": "similar-to"
    },
    {
      "source": "list-elements-from-builder",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "list-elements-from-builder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "list-elements-from-builder",
      "target": "builder-to-interval",
      "type": "similar-to"
    },
    {
      "source": "check-membership-roster",
      "target": "check-membership-builder",
      "type": "alternative-to"
    },
    {
      "source": "check-membership-roster",
      "target": "distinguish-in-vs-subset-powerset",
      "type": "contrasts-with"
    },
    {
      "source": "check-membership-roster",
      "target": "distinguish-empty-in-vs-subset",
      "type": "contrasts-with"
    },
    {
      "source": "check-membership-builder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-membership-builder",
      "target": "distinguish-in-vs-subset-powerset",
      "type": "contrasts-with"
    },
    {
      "source": "check-membership-builder",
      "target": "distinguish-empty-in-vs-subset",
      "type": "contrasts-with"
    },
    {
      "source": "recognize-empty-set",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "recognize-empty-set",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-set-equality",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "check-set-equality",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-set-equality",
      "target": "check-subset-finite",
      "type": "contrasts-with"
    },
    {
      "source": "interval-to-builder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "interval-to-builder",
      "target": "builder-to-interval",
      "type": "inverse-of"
    },
    {
      "source": "builder-to-interval",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-subset-finite",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "check-subset-finite",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "check-subset-finite",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-subset-finite",
      "target": "check-proper-subset",
      "type": "contrasts-with"
    },
    {
      "source": "check-subset-finite",
      "target": "prove-subset-arbitrary",
      "type": "alternative-to"
    },
    {
      "source": "check-subset-finite",
      "target": "disprove-subset-counterexample",
      "type": "similar-to"
    },
    {
      "source": "check-subset-finite",
      "target": "distinguish-in-vs-subset-powerset",
      "type": "contrasts-with"
    },
    {
      "source": "check-subset-finite",
      "target": "distinguish-empty-in-vs-subset",
      "type": "contrasts-with"
    },
    {
      "source": "check-proper-subset",
      "target": "check-set-equality",
      "type": "based-on"
    },
    {
      "source": "check-proper-subset",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "check-proper-subset",
      "target": "check-subset-finite",
      "type": "specializes"
    },
    {
      "source": "check-proper-subset",
      "target": "check-subset-finite",
      "type": "based-on"
    },
    {
      "source": "check-proper-subset",
      "target": "prove-subset-arbitrary",
      "type": "similar-to"
    },
    {
      "source": "prove-subset-arbitrary",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "prove-subset-arbitrary",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "prove-subset-arbitrary",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-subset-arbitrary",
      "target": "disprove-subset-counterexample",
      "type": "similar-to"
    },
    {
      "source": "disprove-subset-counterexample",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "disprove-subset-counterexample",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "disprove-subset-counterexample",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "list-subsets-finite",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "list-subsets-finite",
      "target": "count-powerset",
      "type": "similar-to"
    },
    {
      "source": "list-subsets-finite",
      "target": "list-powerset",
      "type": "similar-to"
    },
    {
      "source": "count-powerset",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "count-powerset",
      "target": "list-powerset",
      "type": "similar-to"
    },
    {
      "source": "count-powerset",
      "target": "cardinality-from-description",
      "type": "specializes"
    },
    {
      "source": "list-powerset",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "distinguish-in-vs-subset-powerset",
      "target": "list-powerset",
      "type": "requires"
    },
    {
      "source": "distinguish-in-vs-subset-powerset",
      "target": "distinguish-empty-in-vs-subset",
      "type": "similar-to"
    },
    {
      "source": "distinguish-empty-in-vs-subset",
      "target": "recognize-empty-set",
      "type": "similar-to"
    },
    {
      "source": "union-roster",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "union-roster",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "union-roster",
      "target": "intersection-roster",
      "type": "similar-to"
    },
    {
      "source": "union-roster",
      "target": "difference",
      "type": "similar-to"
    },
    {
      "source": "union-roster",
      "target": "symmetric-difference",
      "type": "similar-to"
    },
    {
      "source": "union-roster",
      "target": "complement",
      "type": "similar-to"
    },
    {
      "source": "union-roster",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "union-roster",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "intersection-roster",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "intersection-roster",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "intersection-roster",
      "target": "difference",
      "type": "similar-to"
    },
    {
      "source": "intersection-roster",
      "target": "symmetric-difference",
      "type": "similar-to"
    },
    {
      "source": "intersection-roster",
      "target": "complement",
      "type": "similar-to"
    },
    {
      "source": "intersection-roster",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "intersection-roster",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "difference",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "difference",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "difference",
      "target": "symmetric-difference",
      "type": "similar-to"
    },
    {
      "source": "difference",
      "target": "symmetric-difference",
      "type": "contrasts-with"
    },
    {
      "source": "difference",
      "target": "complement",
      "type": "similar-to"
    },
    {
      "source": "difference",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "difference",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "symmetric-difference",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "symmetric-difference",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "symmetric-difference",
      "target": "union-roster",
      "type": "based-on"
    },
    {
      "source": "symmetric-difference",
      "target": "intersection-roster",
      "type": "based-on"
    },
    {
      "source": "symmetric-difference",
      "target": "difference",
      "type": "based-on"
    },
    {
      "source": "symmetric-difference",
      "target": "complement",
      "type": "similar-to"
    },
    {
      "source": "symmetric-difference",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "symmetric-difference",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "complement",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "complement",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "complement",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "complement",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "compound-expression",
      "target": "union-roster",
      "type": "based-on"
    },
    {
      "source": "compound-expression",
      "target": "intersection-roster",
      "type": "based-on"
    },
    {
      "source": "compound-expression",
      "target": "difference",
      "type": "based-on"
    },
    {
      "source": "compound-expression",
      "target": "complement",
      "type": "based-on"
    },
    {
      "source": "compound-expression",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "compound-expression",
      "target": "operations-from-builder",
      "type": "alternative-to"
    },
    {
      "source": "compound-expression",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "compound-expression",
      "target": "venn-3-sets",
      "type": "alternative-to"
    },
    {
      "source": "operations-from-builder",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "operations-from-builder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "operations-from-builder",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "operations-from-builder",
      "target": "venn-3-sets",
      "type": "alternative-to"
    },
    {
      "source": "venn-2-sets",
      "target": "venn-3-sets",
      "type": "similar-to"
    },
    {
      "source": "shade-venn-from-expression",
      "target": "venn-2-sets",
      "type": "based-on"
    },
    {
      "source": "shade-venn-from-expression",
      "target": "venn-3-sets",
      "type": "based-on"
    },
    {
      "source": "shade-venn-from-expression",
      "target": "compound-expression",
      "type": "based-on"
    },
    {
      "source": "shade-venn-from-expression",
      "target": "read-expression-from-venn",
      "type": "inverse-of"
    },
    {
      "source": "read-expression-from-venn",
      "target": "venn-2-sets",
      "type": "based-on"
    },
    {
      "source": "read-expression-from-venn",
      "target": "venn-3-sets",
      "type": "based-on"
    },
    {
      "source": "read-expression-from-venn",
      "target": "compound-expression",
      "type": "based-on"
    },
    {
      "source": "commutativity",
      "target": "associativity",
      "type": "similar-to"
    },
    {
      "source": "commutativity",
      "target": "distributive-law",
      "type": "similar-to"
    },
    {
      "source": "commutativity",
      "target": "de-morgan",
      "type": "similar-to"
    },
    {
      "source": "commutativity",
      "target": "difference-as-intersection-complement",
      "type": "similar-to"
    },
    {
      "source": "associativity",
      "target": "distributive-law",
      "type": "similar-to"
    },
    {
      "source": "associativity",
      "target": "de-morgan",
      "type": "similar-to"
    },
    {
      "source": "associativity",
      "target": "difference-as-intersection-complement",
      "type": "similar-to"
    },
    {
      "source": "distributive-law",
      "target": "de-morgan",
      "type": "similar-to"
    },
    {
      "source": "distributive-law",
      "target": "difference-as-intersection-complement",
      "type": "similar-to"
    },
    {
      "source": "de-morgan",
      "target": "difference-as-intersection-complement",
      "type": "similar-to"
    },
    {
      "source": "simplify-expression",
      "target": "commutativity",
      "type": "based-on"
    },
    {
      "source": "simplify-expression",
      "target": "associativity",
      "type": "based-on"
    },
    {
      "source": "simplify-expression",
      "target": "distributive-law",
      "type": "based-on"
    },
    {
      "source": "simplify-expression",
      "target": "de-morgan",
      "type": "based-on"
    },
    {
      "source": "simplify-expression",
      "target": "difference-as-intersection-complement",
      "type": "based-on"
    },
    {
      "source": "simplify-expression",
      "target": "compound-expression",
      "type": "based-on"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "compound-expression",
      "type": "based-on"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "prove-identity-mutual-inclusion",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "prove-identity-algebraic",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-membership-table",
      "target": "prove-identity-indicator",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-mutual-inclusion",
      "target": "prove-subset-arbitrary",
      "type": "based-on"
    },
    {
      "source": "prove-identity-mutual-inclusion",
      "target": "prove-identity-algebraic",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-mutual-inclusion",
      "target": "prove-identity-indicator",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-algebraic",
      "target": "simplify-expression",
      "type": "based-on"
    },
    {
      "source": "prove-identity-algebraic",
      "target": "prove-identity-indicator",
      "type": "alternative-to"
    },
    {
      "source": "prove-identity-indicator",
      "target": "check-membership-roster",
      "type": "based-on"
    },
    {
      "source": "prove-identity-indicator",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "prove-identity-indicator",
      "target": "compound-expression",
      "type": "based-on"
    },
    {
      "source": "cardinality-from-description",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "cardinality-from-description",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "ie-2-sets",
      "target": "union-roster",
      "type": "based-on"
    },
    {
      "source": "ie-2-sets",
      "target": "intersection-roster",
      "type": "based-on"
    },
    {
      "source": "ie-2-sets",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "ie-2-sets",
      "target": "ie-n-sets",
      "type": "specializes"
    },
    {
      "source": "ie-2-sets",
      "target": "ie-3-sets",
      "type": "similar-to"
    },
    {
      "source": "ie-2-sets",
      "target": "ie-n-sets",
      "type": "similar-to"
    },
    {
      "source": "ie-2-sets",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "ie-2-sets",
      "target": "venn-2-sets",
      "type": "alternative-to"
    },
    {
      "source": "ie-3-sets",
      "target": "union-roster",
      "type": "based-on"
    },
    {
      "source": "ie-3-sets",
      "target": "intersection-roster",
      "type": "based-on"
    },
    {
      "source": "ie-3-sets",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "ie-3-sets",
      "target": "ie-n-sets",
      "type": "specializes"
    },
    {
      "source": "ie-3-sets",
      "target": "ie-n-sets",
      "type": "similar-to"
    },
    {
      "source": "ie-3-sets",
      "target": "venn-3-sets",
      "type": "alternative-to"
    },
    {
      "source": "ie-3-sets",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "ie-n-sets",
      "target": "union-roster",
      "type": "based-on"
    },
    {
      "source": "ie-n-sets",
      "target": "intersection-roster",
      "type": "based-on"
    },
    {
      "source": "ie-n-sets",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "ie-n-sets",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "counting-word-problems",
      "target": "ie-2-sets",
      "type": "based-on"
    },
    {
      "source": "counting-word-problems",
      "target": "ie-3-sets",
      "type": "based-on"
    },
    {
      "source": "counting-word-problems",
      "target": "ie-n-sets",
      "type": "based-on"
    },
    {
      "source": "counting-word-problems",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "counting-word-problems",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "counting-word-problems",
      "target": "count-multiple-conditions-ie",
      "type": "similar-to"
    },
    {
      "source": "count-multiple-conditions-ie",
      "target": "ie-2-sets",
      "type": "based-on"
    },
    {
      "source": "count-multiple-conditions-ie",
      "target": "ie-3-sets",
      "type": "based-on"
    },
    {
      "source": "count-multiple-conditions-ie",
      "target": "ie-n-sets",
      "type": "based-on"
    },
    {
      "source": "count-multiple-conditions-ie",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "count-multiple-conditions-ie",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "show-countable-bijection",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "show-countable-bijection",
      "target": "prove-Z-countable",
      "type": "proves"
    },
    {
      "source": "show-countable-bijection",
      "target": "prove-NxN-countable",
      "type": "proves"
    },
    {
      "source": "show-countable-bijection",
      "target": "prove-Q-countable",
      "type": "proves"
    },
    {
      "source": "show-countable-bijection",
      "target": "prove-countable-union-countable",
      "type": "proves"
    },
    {
      "source": "show-countable-bijection",
      "target": "compare-cardinalities-injections",
      "type": "alternative-to"
    },
    {
      "source": "show-countable-bijection",
      "target": "cantor-bernstein-schroeder",
      "type": "alternative-to"
    },
    {
      "source": "prove-Z-countable",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-Z-countable",
      "target": "prove-NxN-countable",
      "type": "similar-to"
    },
    {
      "source": "prove-Z-countable",
      "target": "prove-Q-countable",
      "type": "similar-to"
    },
    {
      "source": "prove-Z-countable",
      "target": "prove-countable-union-countable",
      "type": "based-on"
    },
    {
      "source": "prove-NxN-countable",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-NxN-countable",
      "target": "prove-Q-countable",
      "type": "similar-to"
    },
    {
      "source": "prove-Q-countable",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-Q-countable",
      "target": "prove-NxN-countable",
      "type": "based-on"
    },
    {
      "source": "prove-Q-countable",
      "target": "prove-countable-union-countable",
      "type": "based-on"
    },
    {
      "source": "prove-countable-union-countable",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-countable-union-countable",
      "target": "prove-NxN-countable",
      "type": "based-on"
    },
    {
      "source": "cantor-diagonal",
      "target": "check-membership-builder",
      "type": "based-on"
    },
    {
      "source": "cantor-diagonal",
      "target": "prove-R-uncountable",
      "type": "proves"
    },
    {
      "source": "cantor-diagonal",
      "target": "cantor-theorem",
      "type": "proves"
    },
    {
      "source": "cantor-diagonal",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-R-uncountable",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "prove-R-uncountable",
      "target": "cantor-theorem",
      "type": "similar-to"
    },
    {
      "source": "prove-R-uncountable",
      "target": "prove-interval-equals-R",
      "type": "similar-to"
    },
    {
      "source": "prove-R-uncountable",
      "target": "prove-interval-equals-R",
      "type": "based-on"
    },
    {
      "source": "prove-interval-equals-R",
      "target": "compare-cardinalities-injections",
      "type": "based-on"
    },
    {
      "source": "prove-interval-equals-R",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "compare-cardinalities-injections",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "cantor-bernstein-schroeder",
      "target": "compare-cardinalities-injections",
      "type": "based-on"
    },
    {
      "source": "cantor-bernstein-schroeder",
      "target": "prove-interval-equals-R",
      "type": "proves"
    },
    {
      "source": "cantor-bernstein-schroeder",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "cantor-theorem",
      "target": "compare-cardinalities-injections",
      "type": "based-on"
    },
    {
      "source": "cantor-theorem",
      "target": "identify-number-systems",
      "type": "requires"
    },
    {
      "source": "classify-cardinality",
      "target": "show-countable-bijection",
      "type": "based-on"
    },
    {
      "source": "classify-cardinality",
      "target": "cantor-diagonal",
      "type": "based-on"
    },
    {
      "source": "classify-cardinality",
      "target": "cardinality-from-description",
      "type": "based-on"
    },
    {
      "source": "classify-cardinality",
      "target": "compare-cardinalities-injections",
      "type": "based-on"
    },
    {
      "source": "classify-cardinality",
      "target": "identify-number-systems",
      "type": "requires"
    }
  ]
};

export default SET_THEORY_METHODS_DATA;