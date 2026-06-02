// Combinatorics Formulas — full data file (42 entries)
// Save target: /combinatorics/formulas/index.jsx → combinatoricsFormulasList

const combinatoricsFormulasList = [

  // ============================================
  // COUNTING PRINCIPLES (6)
  // ============================================

  {
    name: 'Addition Rule',
    entity: 'addition_rule',
    category: 'Counting Principles',
    formula: `$$|A_1 \\cup A_2 \\cup \\cdots \\cup A_k| = |A_1| + |A_2| + \\cdots + |A_k|, \\quad A_i \\cap A_j = \\emptyset \\text{ for } i \\neq j.$$`,
    link: { label: 'Addition Rule', url: '/combinatorics/counting-principles#1' },

    explanation: `
Counts the total outcomes when a procedure can be performed by one of $k$ mutually exclusive methods. If method $i$ has $m_i$ ways to occur and no two methods share any outcome, the total number of ways is $m_1 + m_2 + \\cdots + m_k$.

Equivalently in set-theoretic form: for pairwise disjoint sets, the cardinality of the union is the sum of the cardinalities.
`,

    conditions: `
The cases must be **mutually exclusive** ($A_i \\cap A_j = \\emptyset$ for $i \\neq j$). When sets overlap, the naive sum overcounts the shared elements — the [Inclusion-Exclusion Principle](!/combinatorics/formulas#inclusion_exclusion_principle_general) is the systematic correction.
`,

    notation: `
- $|A|$ — cardinality of set $A$
- $\\emptyset$ — empty set
- $A \\cup B$ — union; $A \\cap B$ — intersection
`,

    variants: `
**Two-set form:** $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$.

**Counting form (procedural):** if a task can be done in $m_1$ ways by method 1 OR $m_2$ ways by method 2 OR … OR $m_k$ ways by method $k$, with no overlap, the total is $m_1 + m_2 + \\cdots + m_k$.
`,

    related_formulas: `
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
- [Complementary Counting](!/combinatorics/formulas#complementary_counting)
- [Inclusion-Exclusion Principle (Two Sets)](!/combinatorics/formulas#inclusion_exclusion_principle_two_sets)
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
`,

    related_definitions: `
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Multiplication Rule](!/combinatorics/definitions#multiplication_rule)
- [Complementary Counting](!/combinatorics/definitions#complementary_counting)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
`,
  },

  {
    name: 'Multiplication Rule',
    entity: 'multiplication_rule',
    category: 'Counting Principles',
    formula: `$$|A_1 \\times A_2 \\times \\cdots \\times A_k| = |A_1| \\cdot |A_2| \\cdots |A_k| = m_1 \\cdot m_2 \\cdots m_k.$$`,
    link: { label: 'Multiplication Rule', url: '/combinatorics/counting-principles#2' },

    explanation: `
Counts the total outcomes when an outcome is built from a sequence of $k$ independent steps. If step $i$ has $m_i$ options, and the steps are independent, the combined sequence has $m_1 \\cdot m_2 \\cdots m_k$ possible outcomes.

In set-theoretic form: the cardinality of a Cartesian product of finite sets is the product of their cardinalities.
`,

    conditions: `
The steps must be **independent**: the number of options at each step must not depend on the specific choices made at earlier steps. When option counts shift based on prior choices, decompose the count by cases (via the [Addition Rule](!/combinatorics/formulas#addition_rule)).
`,

    notation: `
- $A \\times B$ — Cartesian product, the set of ordered pairs $(a, b)$ with $a \\in A$, $b \\in B$
- $m_i$ — number of options at step $i$
`,

    variants: `
**Counting form (procedural):** if a task is completed by choosing step 1 AND step 2 AND … AND step $k$, with $m_i$ options at step $i$, the total is $m_1 \\cdot m_2 \\cdots m_k$.
`,

    related_formulas: `
- [Addition Rule](!/combinatorics/formulas#addition_rule)
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Partial Permutation](!/combinatorics/formulas#partial_permutation)
- [Permutation with Repetition](!/combinatorics/formulas#permutation_with_repetition)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
`,

    related_definitions: `
- [Multiplication Rule](!/combinatorics/definitions#multiplication_rule)
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Permutation](!/combinatorics/definitions#permutation)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Complementary Counting',
    entity: 'complementary_counting',
    category: 'Counting Principles',
    formula: `$$|A| = |U| - |U \\setminus A| = |U| - |A^c|.$$`,
    link: { label: 'Complementary Counting', url: '/combinatorics/counting-principles#3' },

    explanation: `
Computes the size of a target set by subtracting its complement from the universe. Most useful when the target condition has the form "at least one" — its negation "none" often partitions into a single tractable count, while the direct count requires case analysis over overlapping subcases.
`,

    conditions: `
Requires a well-defined universal set $U$ containing all candidate elements, with $A \\subseteq U$. The complement $A^c = U \\setminus A$ must be easier to enumerate than $A$ for the technique to pay off.
`,

    notation: `
- $A^c$ or $\\overline{A}$ — complement of $A$ within the universe $U$
- $U \\setminus A$ — set difference
`,

    variants: `
**Counting form:** $|A| = (\\text{total count}) - (\\text{count failing the condition})$.

**Probabilistic analogue:** $P(A) = 1 - P(A^c)$ — the same identity rescaled for probability measures.
`,

    related_formulas: `
- [Addition Rule](!/combinatorics/formulas#addition_rule)
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
- [Derangement](!/combinatorics/formulas#derangement)
`,

    related_definitions: `
- [Complementary Counting](!/combinatorics/definitions#complementary_counting)
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Derangement](!/combinatorics/definitions#derangement)
`,
  },

  {
    name: 'Double Counting',
    entity: 'double_counting',
    category: 'Counting Principles',
    formula: `$$|S| = f(n) = g(n) \\implies f(n) = g(n).$$`,
    link: { label: 'Double Counting', url: '/combinatorics/counting-principles#4' },

    explanation: `
A proof technique rather than a numerical count. The same set $S$ is enumerated by two genuinely different arguments — typically by selecting members directly versus by partitioning the selection into stages or cases. Both expressions equal $|S|$, so they equal each other. The output is an identity.
`,

    derivation: `
**Canonical example — Handshake Lemma.** In any graph, the sum of vertex degrees equals twice the number of edges:

$$\\sum_{v \\in V} \\deg(v) = 2|E|.$$

The set being counted is the set of (vertex, incident-edge) pairs. Counting by vertex gives $\\sum_v \\deg(v)$. Counting by edge gives $2|E|$, since each edge contributes a pair from each of its two endpoints. Equating yields the identity.
`,

    variants: `
**Handshake Lemma:** $\\sum_{v} \\deg(v) = 2|E|$.

**Committee identity (Pascal-driven):** $k \\binom{n}{k} = n \\binom{n-1}{k-1}$ — both count "$k$-subsets with one distinguished member" two ways. See [Absorption Identity](!/combinatorics/formulas#absorption_identity).

Many [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient) identities — Pascal's rule, Vandermonde, hockey stick — are most naturally proved by double counting.
`,

    related_formulas: `
- [Absorption Identity](!/combinatorics/formulas#absorption_identity)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Vandermonde's Identity](!/combinatorics/formulas#vandermondes_identity)
- [Hockey Stick Identity](!/combinatorics/formulas#hockey_stick_identity)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
`,

    related_definitions: `
- [Double Counting](!/combinatorics/definitions#double_counting)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
`,
  },

  {
    name: 'Pigeonhole Principle',
    entity: 'pigeonhole_principle',
    category: 'Counting Principles',
    formula: `$$n > k \\implies \\exists \\text{ container with } \\ge 2 \\text{ items}.$$`,
    link: { label: 'Pigeonhole Principle', url: '/combinatorics/counting-principles#5' },

    explanation: `
The basic form: if $n$ items are distributed among $k$ containers and $n > k$, at least one container holds at least two items. An existential statement — guarantees a collision must occur without identifying where.
`,

    derivation: `
Suppose for contradiction every container held at most one item. The total item count would then be at most $k$. But the total is $n > k$ — contradiction. Therefore at least one container holds two or more.
`,

    conditions: `
Requires $n > k$ (strictly more items than containers). When $n = k$ the conclusion fails: items can fit one-per-container.
`,

    variants: `
**Function form:** no injection exists from a finite set of size $n$ into a finite set of size $k < n$.

**Generalized form:** see [Pigeonhole Principle (Generalized)](!/combinatorics/formulas#pigeonhole_principle_generalized).
`,

    related_formulas: `
- [Pigeonhole Principle (Generalized)](!/combinatorics/formulas#pigeonhole_principle_generalized)
- [Addition Rule](!/combinatorics/formulas#addition_rule)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
`,

    related_definitions: `
- [Pigeonhole Principle](!/combinatorics/definitions#pigeonhole_principle)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)
`,
  },

  {
    name: 'Pigeonhole Principle (Generalized)',
    entity: 'pigeonhole_principle',
    category: 'Counting Principles',
    formula: `$$n \\text{ items into } k \\text{ containers} \\implies \\exists \\text{ container with } \\ge \\lceil n/k \\rceil \\text{ items}.$$`,
    link: { label: 'Pigeonhole Principle', url: '/combinatorics/counting-principles#5' },

    explanation: `
A strengthening of the basic principle: if $n$ items are distributed among $k$ containers, at least one container must hold at least $\\lceil n/k \\rceil$ items, where $\\lceil \\cdot \\rceil$ is the ceiling function.

The basic [Pigeonhole Principle](!/combinatorics/formulas#pigeonhole_principle) is the case $n = k + 1$, where $\\lceil n/k \\rceil = 2$.
`,

    derivation: `
If every container held at most $\\lceil n/k \\rceil - 1$ items, the total would be at most $k(\\lceil n/k \\rceil - 1) < n$ — contradiction. So at least one container reaches $\\lceil n/k \\rceil$.
`,

    notation: `
- $\\lceil x \\rceil$ — ceiling of $x$, the smallest integer $\\ge x$
`,

    related_formulas: `
- [Pigeonhole Principle](!/combinatorics/formulas#pigeonhole_principle)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
`,

    related_definitions: `
- [Pigeonhole Principle](!/combinatorics/definitions#pigeonhole_principle)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)
`,
  },

  // ============================================
  // INCLUSION-EXCLUSION (5)
  // ============================================

  {
    name: 'Inclusion-Exclusion Principle (Two Sets)',
    entity: 'inclusion_exclusion_principle',
    category: 'Inclusion-Exclusion',
    formula: `$$|A \\cup B| = |A| + |B| - |A \\cap B|.$$`,
    link: { label: 'Two Sets', url: '/combinatorics/inclusion-exclusion#1' },

    explanation: `
Counts the elements of the union of two overlapping sets. Adding $|A| + |B|$ counts each element of $A \\cap B$ twice; subtracting $|A \\cap B|$ removes the double count.
`,

    derivation: `
Every element of $A \\cup B$ falls into exactly one of three disjoint cases: in $A$ only, in $B$ only, or in both. Adding $|A|$ and $|B|$ counts the first two cases once and the third case twice. Subtracting $|A \\cap B|$ corrects the third case to once.
`,

    related_formulas: `
- [Addition Rule](!/combinatorics/formulas#addition_rule)
- [Inclusion-Exclusion Principle (Three Sets)](!/combinatorics/formulas#inclusion_exclusion_principle_three_sets)
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
`,

    related_definitions: `
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Addition Rule](!/combinatorics/definitions#addition_rule)
`,
  },

  {
    name: 'Inclusion-Exclusion Principle (Three Sets)',
    entity: 'inclusion_exclusion_principle',
    category: 'Inclusion-Exclusion',
    formula: `$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|.$$`,
    link: { label: 'Three Sets', url: '/combinatorics/inclusion-exclusion#2' },

    explanation: `
Extends the two-set formula with one additional correction. Singles add three times for an element in all three sets; pairwise intersections subtract three times; the triple intersection adds once. The net count of any element is exactly one.
`,

    derivation: `
An element in exactly $m$ of the three sets is counted $\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3}$ times by the right side. For $m = 1$: $1 - 0 + 0 = 1$. For $m = 2$: $2 - 1 + 0 = 1$. For $m = 3$: $3 - 3 + 1 = 1$. Every element of the union ends up counted exactly once.
`,

    related_formulas: `
- [Inclusion-Exclusion Principle (Two Sets)](!/combinatorics/formulas#inclusion_exclusion_principle_two_sets)
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
`,

    related_definitions: `
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Addition Rule](!/combinatorics/definitions#addition_rule)
`,
  },

  {
    name: 'Inclusion-Exclusion Principle (General)',
    entity: 'inclusion_exclusion_principle',
    category: 'Inclusion-Exclusion',
    formula: `$$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\sum_{1 \\le i_1 < i_2 < \\cdots < i_k \\le n} |A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}|.$$`,
    link: { label: 'General Formula', url: '/combinatorics/inclusion-exclusion#3' },

    explanation: `
The $n$-set form. Add singles, subtract pairwise intersections, add triple intersections, and continue with alternating signs through the $n$-fold intersection. Every non-empty subset of the $n$ sets contributes exactly one term — $2^n - 1$ terms total.
`,

    derivation: `
An element belonging to exactly $m$ of the $n$ sets is counted

$$\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3} - \\cdots + (-1)^{m+1} \\binom{m}{m}$$

times by the right side. By the [Alternating Binomial Sum](!/combinatorics/formulas#alternating_binomial_sum), $\\sum_{k=0}^{m} (-1)^k \\binom{m}{k} = 0$, so the partial sum from $k = 1$ to $m$ equals $\\binom{m}{0} = 1$. Every element in the union is counted exactly once.
`,

    notation: `
- The number of terms at level $k$ is $\\binom{n}{k}$
- Total term count: $\\sum_{k=1}^{n} \\binom{n}{k} = 2^n - 1$
`,

    variants: `
**Expanded form:**

$$\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|.$$
`,

    related_formulas: `
- [Inclusion-Exclusion Principle (Two Sets)](!/combinatorics/formulas#inclusion_exclusion_principle_two_sets)
- [Inclusion-Exclusion Principle (Three Sets)](!/combinatorics/formulas#inclusion_exclusion_principle_three_sets)
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
- [Surjective Functions Count](!/combinatorics/formulas#surjective_functions_count)
- [Alternating Binomial Sum](!/combinatorics/formulas#alternating_binomial_sum)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
`,

    related_definitions: `
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
`,
  },

  {
    name: 'Inclusion-Exclusion Complementary Form',
    entity: 'inclusion_exclusion_principle',
    category: 'Inclusion-Exclusion',
    formula: `$$\\left| \\overline{A_1} \\cap \\overline{A_2} \\cap \\cdots \\cap \\overline{A_n} \\right| = |U| - \\left| A_1 \\cup A_2 \\cup \\cdots \\cup A_n \\right|.$$`,
    link: { label: 'Complementary Form', url: '/combinatorics/inclusion-exclusion#4' },

    explanation: `
Counts elements that satisfy **none** of the conditions defined by $A_1, \\ldots, A_n$. Natural for problems phrased as "how many elements avoid all of the following" — derangements, surjective functions, arrangements with forbidden positions, divisibility problems requiring relative primality.
`,

    derivation: `
The elements outside every $A_i$ are exactly the elements of $U$ not in $A_1 \\cup \\cdots \\cup A_n$. Apply [Complementary Counting](!/combinatorics/formulas#complementary_counting) to that union, then expand using the [General Formula](!/combinatorics/formulas#inclusion_exclusion_principle_general).
`,

    variants: `
**Expanded form:**

$$|U| - \\sum_{i} |A_i| + \\sum_{i<j} |A_i \\cap A_j| - \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| + \\cdots + (-1)^n |A_1 \\cap \\cdots \\cap A_n|.$$

The signs are reversed relative to the union form: the $|U|$ term is positive, singles are subtracted, pairs added, and so on.
`,

    related_formulas: `
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
- [Complementary Counting](!/combinatorics/formulas#complementary_counting)
- [Derangement](!/combinatorics/formulas#derangement)
- [Surjective Functions Count](!/combinatorics/formulas#surjective_functions_count)
`,

    related_definitions: `
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Complementary Counting](!/combinatorics/definitions#complementary_counting)
- [Derangement](!/combinatorics/definitions#derangement)
`,
  },

  {
    name: 'Surjective Functions Count',
    entity: 'inclusion_exclusion_principle',
    category: 'Inclusion-Exclusion',
    formula: `$$\\#\\{\\text{surjections } [n] \\to [k]\\} = \\sum_{j=0}^{k} (-1)^j \\binom{k}{j} (k-j)^n.$$`,
    link: { label: 'Surjective Functions', url: '/combinatorics/inclusion-exclusion#6' },

    explanation: `
Counts the surjective (onto) functions from a domain of size $n$ to a codomain of size $k$. Direct enumeration is awkward — the count comes out cleanly by Inclusion-Exclusion on the complementary set "functions that miss at least one codomain element."
`,

    derivation: `
For each codomain element $i$, let $A_i$ be the set of functions $[n] \\to [k]$ that miss $i$. A surjective function lies in none of the $A_i$. By the [Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form):

$$\\text{Surj}(n, k) = k^n - \\sum_i |A_i| + \\sum_{i<j} |A_i \\cap A_j| - \\cdots.$$

Any $j$-fold intersection $A_{i_1} \\cap \\cdots \\cap A_{i_j}$ has size $(k - j)^n$: the domain maps freely to the remaining $k - j$ codomain elements. There are $\\binom{k}{j}$ such intersections. Substituting yields the formula.
`,

    conditions: `
Requires $n \\ge k$ for the count to be positive. When $n < k$, the formula evaluates to $0$ (no surjection from a smaller set onto a larger one).
`,

    related_formulas: `
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
`,

    related_definitions: `
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
`,
  },

  // ============================================
  // PERMUTATIONS (9)
  // ============================================

  {
    name: 'Factorial',
    entity: 'factorial',
    category: 'Permutations',
    formula: `$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1, \\quad 0! = 1.$$`,
    link: { label: 'Factorial', url: '/combinatorics/permutations#logic' },

    explanation: `
The product of all positive integers from $1$ to $n$. Counts the number of distinct orderings of $n$ items — the foundational quantity behind every permutation formula.
`,

    conditions: `
Defined for non-negative integers. The convention $0! = 1$ is needed for boundary cases such as $\\binom{n}{0} = \\frac{n!}{0! \\, n!} = 1$ and $P(n, 0) = \\frac{n!}{n!} = 1$.
`,

    notation: `
- $n!$ — read "$n$ factorial"
- Recursive form: $n! = n \\cdot (n-1)!$ with $0! = 1$
`,

    variants: `
**Recursive form:** $n! = n \\cdot (n-1)!$, with base case $0! = 1$.

**Ratio identity:** $\\dfrac{n!}{(n-r)!} = n(n-1)(n-2) \\cdots (n-r+1)$ — used in [Partial Permutation](!/combinatorics/formulas#partial_permutation).

**Growth:** $n!$ grows faster than any exponential $a^n$ but slower than $n^n$. Stirling's approximation: $n! \\sim \\sqrt{2\\pi n}\\,(n/e)^n$.
`,

    related_formulas: `
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Partial Permutation](!/combinatorics/formulas#partial_permutation)
- [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items)
- [Circular Permutation](!/combinatorics/formulas#circular_permutation)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
`,

    related_definitions: `
- [Factorial](!/combinatorics/definitions#factorial)
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
`,
  },

  {
    name: 'Full Permutation',
    entity: 'full_permutation',
    category: 'Permutations',
    formula: `$$P(n) = n!$$`,
    link: { label: 'Full Permutation', url: '/combinatorics/permutations#full' },

    explanation: `
The number of distinct linear arrangements of $n$ distinct items, with every item used exactly once. Each item is placed at a single position, and reordering produces a different arrangement.
`,

    derivation: `
By the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule): $n$ choices for position 1, $n - 1$ for position 2, $n - 2$ for position 3, decreasing to $1$ for the last position. The product is $n!$ by definition of [Factorial](!/combinatorics/formulas#factorial).
`,

    conditions: `
Requires $n$ distinct items and a linear (non-circular) arrangement. For circular arrangements, see [Circular Permutation](!/combinatorics/formulas#circular_permutation). For arrangements with identical items, see [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items).
`,

    notation: `
- $P(n)$ or $P(n, n)$ or \${}_nP_n$ — all denote $n!$
`,

    related_formulas: `
- [Factorial](!/combinatorics/formulas#factorial)
- [Partial Permutation](!/combinatorics/formulas#partial_permutation)
- [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items)
- [Circular Permutation](!/combinatorics/formulas#circular_permutation)
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
`,

    related_definitions: `
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Permutation](!/combinatorics/definitions#permutation)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Partial Permutation',
    entity: 'partial_permutation',
    category: 'Permutations',
    formula: `$$P(n, r) = \\frac{n!}{(n-r)!} = n(n-1)(n-2) \\cdots (n-r+1).$$`,
    link: { label: 'Partial Permutation', url: '/combinatorics/permutations#without' },

    explanation: `
The number of ordered arrangements of $r$ distinct items chosen from $n$ distinct items, with no item reused. Order matters and items appear at most once.
`,

    derivation: `
Apply the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule) to the sequential filling of $r$ positions:

- Position 1: $n$ choices (any of the $n$ items)
- Position 2: $n - 1$ choices (any item except the one used at position 1)
- Position 3: $n - 2$ choices
- ...
- Position $r$: $n - r + 1$ choices

By the multiplication rule, the total is

$$n(n-1)(n-2) \\cdots (n-r+1).$$

Multiplying and dividing by $(n-r)!$ collapses the trailing factors:

$$n(n-1) \\cdots (n-r+1) \\cdot \\frac{(n-r)!}{(n-r)!} = \\frac{n!}{(n-r)!}.$$
`,

    conditions: `
Requires $0 \\le r \\le n$ with integer $n, r$.

**Boundary cases:**
- $P(n, 0) = 1$ — the empty arrangement
- $P(n, n) = n!$ — recovers the [Full Permutation](!/combinatorics/formulas#full_permutation)
- $P(n, r) = 0$ for $r > n$ (cannot choose more distinct items than exist)
`,

    notation: `
Several notations denote the same quantity:

- $P(n, r)$ — most common in modern texts
- \${}_n P_r$ — the form most calculator displays use
- $A_n^r$ — European traditions
- $\\text{nPr}$ — informal calculator-style

The right side uses [Factorial](!/combinatorics/formulas#factorial) notation $n!$.
`,

    variants: `
**Descending product form** (often easier for hand calculation):

$$P(n, r) = n(n-1)(n-2) \\cdots (n-r+1) \\quad (r \\text{ factors}).$$

**Relation to combinations:** ordering each $r$-subset gives $r!$ permutations, so

$$P(n, r) = r! \\cdot \\binom{n}{r}.$$
`,

    related_formulas: `
- [Factorial](!/combinatorics/formulas#factorial)
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Permutation with Repetition](!/combinatorics/formulas#permutation_with_repetition)
- [Circular Permutation](!/combinatorics/formulas#circular_permutation)
- [Combination](!/combinatorics/formulas#combination)
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
`,

    related_definitions: `
- [Partial Permutation](!/combinatorics/definitions#partial_permutation)
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Factorial](!/combinatorics/definitions#factorial)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Permutation with Repetition',
    entity: 'permutation_with_repetition',
    category: 'Permutations',
    formula: `$$P_{\\text{rep}}(n, r) = n^r.$$`,
    link: { label: 'Permutation with Repetition', url: '/combinatorics/permutations#with' },

    explanation: `
The number of ordered arrangements of $r$ positions, where each position is filled independently from a pool of $n$ items and items may repeat. This is the only permutation scenario whose count is unbounded as $r$ grows past $n$.
`,

    derivation: `
By the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule): every one of the $r$ positions has all $n$ items available, since repetition is allowed. The total is $n \\cdot n \\cdots n = n^r$.
`,

    conditions: `
Requires non-negative integers $n, r$. Allows $r > n$ — the count $n^r$ grows without bound as $r$ increases.
`,

    notation: `
- $P_{\\text{rep}}(n, r)$ — explicit permutation-with-repetition notation
- $n^r$ — the standard form
`,

    related_formulas: `
- [Partial Permutation](!/combinatorics/formulas#partial_permutation)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
`,

    related_definitions: `
- [Permutation with Repetition](!/combinatorics/definitions#permutation_with_repetition)
- [Permutation](!/combinatorics/definitions#permutation)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)
`,
  },

  {
    name: 'Permutation with Identical Items',
    entity: 'permutation_with_identical_items',
    category: 'Permutations',
    formula: `$$P(n; n_1, n_2, \\ldots, n_k) = \\binom{n}{n_1, n_2, \\ldots, n_k} = \\frac{n!}{n_1! \\, n_2! \\cdots n_k!}, \\quad n_1 + n_2 + \\cdots + n_k = n.$$`,
    link: { label: 'Permutation with Identical Items', url: '/combinatorics/permutations#identical' },

    explanation: `
The number of distinct linear arrangements of $n$ items split into $k$ groups of indistinguishable items of sizes $n_1, n_2, \\ldots, n_k$. The naive $n!$ orderings overcount by a factor of $n_1! \\, n_2! \\cdots n_k!$ since swapping identical items produces no new arrangement.
`,

    derivation: `
Count in two stages:

1. Treat all $n$ items as distinct. The number of orderings is $n!$.
2. Within each type-$i$ group of $n_i$ identical items, the $n_i!$ permutations of those items all yield the same arrangement when the identical items are made interchangeable. Divide by $n_i!$ for each group.

Total: $\\dfrac{n!}{n_1! \\, n_2! \\cdots n_k!}$. This is the [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient).
`,

    conditions: `
Requires $n_1 + n_2 + \\cdots + n_k = n$ with each $n_i \\ge 0$.

**Boundary case:** when all $n_i = 1$ (so $k = n$ and all items are distinct), the formula collapses to $n!$ — recovers the [Full Permutation](!/combinatorics/formulas#full_permutation).
`,

    notation: `
- $\\binom{n}{n_1, n_2, \\ldots, n_k}$ — multinomial-coefficient notation
- $P(n; n_1, n_2, \\ldots, n_k)$ — permutation-style notation
`,

    related_formulas: `
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Factorial](!/combinatorics/formulas#factorial)
- [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient)
- [Partition into Groups](!/combinatorics/formulas#partition_into_groups)
- [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem)
`,

    related_definitions: `
- [Permutation with Identical Items](!/combinatorics/definitions#permutation_with_identical_items)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Circular Permutation',
    entity: 'circular_permutation',
    category: 'Permutations',
    formula: `$$P_{\\text{circ}}(n) = (n-1)!$$`,
    link: { label: 'Circular Permutation', url: '/combinatorics/permutations#circular' },

    explanation: `
The number of distinct arrangements of $n$ distinct items around a circle, where rotations of the same arrangement are considered identical. Fixing the position of one item removes the rotational redundancy.
`,

    derivation: `
**Approach 1 (fix one item).** Place a chosen item at a reference position. The remaining $n - 1$ items can then be arranged linearly in the remaining $n - 1$ positions in $(n-1)!$ ways.

**Approach 2 (divide by rotational equivalence).** The $n!$ linear arrangements of $n$ items partition into rotational equivalence classes of size $n$ each. Dividing gives $\\dfrac{n!}{n} = (n-1)!$.
`,

    conditions: `
Requires $n \\ge 1$ distinct items arranged on a circle. Reflections (clockwise vs counterclockwise) are typically treated as distinct.
`,

    variants: `
**With reflections identified** (necklace count for distinct beads): $\\dfrac{(n-1)!}{2}$ for $n \\ge 3$. Used when arrangements that mirror each other are considered the same.
`,

    related_formulas: `
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Factorial](!/combinatorics/formulas#factorial)
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
`,

    related_definitions: `
- [Circular Permutation](!/combinatorics/definitions#circular_permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Derangement',
    entity: 'derangement',
    category: 'Permutations',
    formula: `$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$`,
    link: { label: 'Derangement', url: '/combinatorics/permutations#8' },

    explanation: `
The number of permutations of $\\{1, 2, \\ldots, n\\}$ in which no element appears in its original position. Of the $n!$ total permutations, only $!n$ qualify.
`,

    derivation: `
Apply the [Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form) of Inclusion-Exclusion to the set of all permutations. Let $A_i$ be the set of permutations fixing position $i$. A derangement avoids every $A_i$.

The $k$-fold intersection $A_{i_1} \\cap \\cdots \\cap A_{i_k}$ has size $(n-k)!$ — fix $k$ specific positions and permute the rest freely. There are $\\binom{n}{k}$ such intersections. By Inclusion-Exclusion:

$$!n = n! - \\binom{n}{1}(n-1)! + \\binom{n}{2}(n-2)! - \\cdots + (-1)^n \\binom{n}{n} \\cdot 0!.$$

Using $\\binom{n}{k}(n-k)! = \\dfrac{n!}{k!}$ collapses each term, yielding the closed form

$$!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$
`,

    notation: `
- $!n$ — subfactorial, exclamation **preceding** the operand (contrast with $n!$)
- $D_n$ — older alternative notation
`,

    variants: `
**Recurrence:** $!n = (n-1)(!(n-1) + !(n-2))$. See [Derangement Recurrence](!/combinatorics/formulas#derangement_recurrence).

**Asymptotic limit:** $!n / n! \\to 1/e$. See [Derangement Asymptotic Limit](!/combinatorics/formulas#derangement_asymptotic_limit).

**Small values:** $!0 = 1$, $!1 = 0$, $!2 = 1$, $!3 = 2$, $!4 = 9$, $!5 = 44$, $!6 = 265$.
`,

    related_formulas: `
- [Derangement Recurrence](!/combinatorics/formulas#derangement_recurrence)
- [Derangement Asymptotic Limit](!/combinatorics/formulas#derangement_asymptotic_limit)
- [Full Permutation](!/combinatorics/formulas#full_permutation)
- [Inclusion-Exclusion Complementary Form](!/combinatorics/formulas#inclusion_exclusion_complementary_form)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Derangement](!/combinatorics/definitions#derangement)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Derangement Recurrence',
    entity: 'derangement',
    category: 'Permutations',
    formula: `$$!n = (n-1) \\bigl( !(n-1) + !(n-2) \\bigr), \\quad !0 = 1, \\quad !1 = 0.$$`,
    link: { label: 'Derangement', url: '/combinatorics/permutations#8' },

    explanation: `
A two-term linear recurrence for the [Derangement](!/combinatorics/formulas#derangement) count. More efficient than the closed-form for computing $!n$ from prior values, especially for tabulating sequences.
`,

    derivation: `
Consider a derangement of $\\{1, \\ldots, n\\}$. Position $n$ holds some element $i \\ne n$. There are $n - 1$ choices for $i$. Now consider where element $n$ goes:

- **Case 1:** Element $n$ goes to position $i$ (the position vacated by $i$). The remaining $n - 2$ elements derange among the remaining $n - 2$ positions — $!(n-2)$ ways.
- **Case 2:** Element $n$ goes to some other position $j \\ne i$. Then $i$ is "shifted" into a derangement role for a structure of size $n - 1$ — $!(n-1)$ ways.

Adding the cases and multiplying by the $(n-1)$ choices for $i$ gives the recurrence.
`,

    variants: `
**One-term recurrence:** $!n = n \\cdot !(n-1) + (-1)^n$. Equivalent and sometimes more compact.
`,

    related_formulas: `
- [Derangement](!/combinatorics/formulas#derangement)
- [Derangement Asymptotic Limit](!/combinatorics/formulas#derangement_asymptotic_limit)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Derangement](!/combinatorics/definitions#derangement)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Derangement Asymptotic Limit',
    entity: 'derangement',
    category: 'Permutations',
    formula: `$$\\lim_{n \\to \\infty} \\frac{!n}{n!} = \\frac{1}{e} \\approx 0.367879.$$`,
    link: { label: 'Derangement', url: '/combinatorics/permutations#8' },

    explanation: `
The fraction of permutations of $\\{1, \\ldots, n\\}$ that are derangements approaches a non-zero constant — namely $1/e$ — as $n$ grows. For any sufficiently large $n$, roughly $36.8\\%$ of all permutations are derangements.
`,

    derivation: `
From the closed form $!n = n! \\sum_{k=0}^{n} \\dfrac{(-1)^k}{k!}$,

$$\\frac{!n}{n!} = \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}.$$

The right side is the $n$-th partial sum of the Taylor series for $e^{-1}$. Taking $n \\to \\infty$:

$$\\sum_{k=0}^{\\infty} \\frac{(-1)^k}{k!} = e^{-1}.$$
`,

    notation: `
- $e$ — Euler's number, $e \\approx 2.71828$
- Convergence is rapid: $!n / n!$ matches $1/e$ to the first $n$ decimal places approximately
`,

    related_formulas: `
- [Derangement](!/combinatorics/formulas#derangement)
- [Derangement Recurrence](!/combinatorics/formulas#derangement_recurrence)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Derangement](!/combinatorics/definitions#derangement)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  // ============================================
  // COMBINATIONS & DISTRIBUTIONS (5)
  // ============================================

  {
    name: 'Combination',
    entity: 'combination',
    category: 'Combinations & Distributions',
    formula: `$$\\binom{n}{r} = \\frac{n!}{r! \\, (n-r)!}.$$`,
    link: { label: 'Combination', url: '/combinatorics/combinations#combinations' },

    explanation: `
The number of unordered $r$-element subsets of an $n$-element set. Different orderings of the same items count as the same combination — what distinguishes combinations from permutations.
`,

    derivation: `
Start with the [Partial Permutation](!/combinatorics/formulas#partial_permutation) count $P(n, r) = \\dfrac{n!}{(n-r)!}$, which arranges $r$ distinct items in order. Each unordered $r$-subset corresponds to exactly $r!$ ordered arrangements of those items. Dividing removes the ordering:

$$\\binom{n}{r} = \\frac{P(n, r)}{r!} = \\frac{n!}{r! \\, (n-r)!}.$$
`,

    conditions: `
Requires $0 \\le r \\le n$. The convention $\\binom{n}{r} = 0$ for $r < 0$ or $r > n$ extends the formula to all integers.

**Boundary cases:** $\\binom{n}{0} = \\binom{n}{n} = 1$.
`,

    notation: `
- $\\binom{n}{r}$ — standard modern form, read "$n$ choose $r$"
- $C(n, r)$ — common in introductory texts
- $C_n^r$ or $C_r^n$ — European traditions; conventions vary
- \${}_n C_r$ — calculator displays
`,

    variants: `
**Relation to partial permutations:** $\\binom{n}{r} = \\dfrac{P(n, r)}{r!}$.

**Identical to** [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient) — the same expression appears in algebra and probability with broader meaning beyond subset counting.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Partial Permutation](!/combinatorics/formulas#partial_permutation)
- [Partition into Groups](!/combinatorics/formulas#partition_into_groups)
- [Weak Composition](!/combinatorics/formulas#weak_composition)
- [Strong Composition](!/combinatorics/formulas#strong_composition)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
`,

    related_definitions: `
- [Combination](!/combinatorics/definitions#combination)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Permutation](!/combinatorics/definitions#permutation)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
`,
  },

  {
    name: 'Partition into Groups',
    entity: 'partition_into_groups',
    category: 'Combinations & Distributions',
    formula: `$$\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}, \\quad n_1 + n_2 + \\cdots + n_k = n.$$`,
    link: { label: 'Partition into Groups', url: '/combinatorics/combinations#partition' },

    explanation: `
The number of ways to partition $n$ distinct items into $k$ groups of specified sizes $n_1, n_2, \\ldots, n_k$. The formula is the [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient) when group labels are kept distinct.
`,

    derivation: `
Choose the $n_1$ items for group 1 in $\\binom{n}{n_1}$ ways, then the $n_2$ items for group 2 from the remaining $n - n_1$ items in $\\binom{n - n_1}{n_2}$ ways, and so on. By the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule):

$$\\binom{n}{n_1} \\binom{n - n_1}{n_2} \\cdots \\binom{n_k}{n_k} = \\frac{n!}{n_1! (n - n_1)!} \\cdot \\frac{(n - n_1)!}{n_2! (n - n_1 - n_2)!} \\cdots = \\frac{n!}{n_1! \\, n_2! \\cdots n_k!}.$$

Intermediate factorials cancel, leaving the multinomial form.
`,

    conditions: `
Requires $n_1 + n_2 + \\cdots + n_k = n$ with each $n_i \\ge 0$.

**When groups are unlabeled and some have equal size:** divide further by the factorial of the number of groups of each equal size to remove the redundancy of group-label permutations among interchangeable groups.
`,

    variants: `
**Unlabeled equal-size groups:** if there are $j$ groups all of the same size, divide the labeled count by $j!$. Example: partitioning $12$ students into three unlabeled teams of $4$ each gives $\\dfrac{12!}{4!^3 \\cdot 3!}$.
`,

    related_formulas: `
- [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient)
- [Combination](!/combinatorics/formulas#combination)
- [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
`,

    related_definitions: `
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Weak Composition',
    entity: 'weak_composition',
    category: 'Combinations & Distributions',
    formula: `$$\\left(\\!\\!\\binom{n}{r}\\!\\!\\right) = \\binom{n + r - 1}{r - 1}.$$`,
    link: { label: 'Weak Composition', url: '/combinatorics/combinations#weak' },

    explanation: `
The number of ways to distribute $n$ identical items into $r$ labeled containers, where any container may receive zero or more items. Equivalently, the number of non-negative integer solutions to $x_1 + x_2 + \\cdots + x_r = n$.
`,

    derivation: `
**Stars and bars.** Represent the $n$ items as stars and the $r - 1$ divisions between containers as bars. A valid distribution corresponds to an arrangement of $n$ stars and $r - 1$ bars in a row, with the stars in each "region" between bars going to the corresponding container.

The total number of such arrangements is the number of ways to choose the $r - 1$ bar positions among $n + r - 1$ total symbols:

$$\\binom{n + r - 1}{r - 1}.$$
`,

    conditions: `
Requires $n \\ge 0$ and $r \\ge 1$ (at least one container).
`,

    notation: `
- $\\left(\\!\\binom{n}{r}\\!\\right)$ — double-parenthesis notation, specific to weak compositions / multisets
- The right side is an ordinary [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- Same count: number of size-$n$ multisets drawn from $r$ types
`,

    variants: `
**Equation form:** the number of non-negative integer solutions to $x_1 + x_2 + \\cdots + x_r = n$ is $\\binom{n + r - 1}{r - 1}$.

**Multinomial term count:** the number of terms in the expansion of $(x_1 + \\cdots + x_r)^n$ equals this same value. See [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem).
`,

    related_formulas: `
- [Strong Composition](!/combinatorics/formulas#strong_composition)
- [Combination](!/combinatorics/formulas#combination)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
`,

    related_definitions: `
- [Weak Composition](!/combinatorics/definitions#weak_composition)
- [Strong Composition](!/combinatorics/definitions#strong_composition)
- [Combination](!/combinatorics/definitions#combination)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
`,
  },

  {
    name: 'Strong Composition',
    entity: 'strong_composition',
    category: 'Combinations & Distributions',
    formula: `$$\\left\\langle \\binom{n}{r} \\right\\rangle = \\binom{n - 1}{r - 1}.$$`,
    link: { label: 'Strong Composition', url: '/combinatorics/combinations#strong' },

    explanation: `
The number of ways to distribute $n$ identical items into $r$ labeled containers, with every container receiving at least one item. Equivalently, the number of positive integer solutions to $x_1 + x_2 + \\cdots + x_r = n$.
`,

    derivation: `
**Reduction to weak composition.** Place one item in each container up front, using $r$ items. The remaining $n - r$ items can be freely distributed into the $r$ containers without restriction — a [Weak Composition](!/combinatorics/formulas#weak_composition) of $n - r$ items into $r$ containers:

$$\\binom{(n - r) + r - 1}{r - 1} = \\binom{n - 1}{r - 1}.$$
`,

    conditions: `
Requires $n \\ge r \\ge 1$. When $n < r$, no valid distribution exists (cannot give each of $r$ containers a positive count from only $n < r$ items) — the formula evaluates to $0$.
`,

    notation: `
- $\\left\\langle\\binom{n}{r}\\right\\rangle$ — angle-bracket notation, specific to strong compositions
- The right side is an ordinary [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
`,

    variants: `
**Equation form:** the number of positive integer solutions to $x_1 + x_2 + \\cdots + x_r = n$ is $\\binom{n - 1}{r - 1}$.
`,

    related_formulas: `
- [Weak Composition](!/combinatorics/formulas#weak_composition)
- [Combination](!/combinatorics/formulas#combination)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
`,

    related_definitions: `
- [Strong Composition](!/combinatorics/definitions#strong_composition)
- [Weak Composition](!/combinatorics/definitions#weak_composition)
- [Combination](!/combinatorics/definitions#combination)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
`,
  },

  {
    name: 'Distribution into Cells',
    entity: 'distribution_into_cells',
    category: 'Combinations & Distributions',
    formula: `$$r^n.$$`,
    link: { label: 'Distribution into Cells', url: '/combinatorics/combinations#distribution' },

    explanation: `
The number of ways to assign each of $n$ distinct items to one of $r$ labeled containers. Items are distinct, containers are distinguishable, and any container may receive any number of items (zero allowed).

Equivalently: the number of functions from an $n$-element domain to an $r$-element codomain.
`,

    derivation: `
By the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule): each of the $n$ items independently chooses one of $r$ containers. Total: $r \\cdot r \\cdots r = r^n$ ($n$ factors).
`,

    conditions: `
Requires non-negative integers $n, r$. No restriction relating $n$ and $r$ — the count $r^n$ is defined for all values, including $n > r$ (some containers may receive multiple items) and $n < r$ (some containers may be empty).
`,

    variants: `
**As a function count:** $r^n$ equals the number of functions $f : [n] \\to [r]$.

**Distinct framing from** [Permutation with Repetition](!/combinatorics/formulas#permutation_with_repetition): both yield $n^r$ vs $r^n$ formulas depending on which set is the "domain" and which the "codomain" — the same multiplication-rule structure with swapped parameter roles.
`,

    related_formulas: `
- [Multiplication Rule](!/combinatorics/formulas#multiplication_rule)
- [Permutation with Repetition](!/combinatorics/formulas#permutation_with_repetition)
- [Partition into Groups](!/combinatorics/formulas#partition_into_groups)
- [Surjective Functions Count](!/combinatorics/formulas#surjective_functions_count)
- [Weak Composition](!/combinatorics/formulas#weak_composition)
`,

    related_definitions: `
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)
- [Permutation with Repetition](!/combinatorics/definitions#permutation_with_repetition)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
`,
  },

  // ============================================
  // BINOMIAL COEFFICIENT IDENTITIES (10)
  // ============================================

  {
    name: 'Binomial Coefficient',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\binom{n}{k} = \\frac{n!}{k! \\, (n-k)!}.$$`,
    link: { label: 'Binomial Coefficient', url: '/combinatorics/binomial-coefficient#1' },

    explanation: `
The number of $k$-element subsets of an $n$-element set. The same expression organizes polynomial expansions, governs probability distributions, and satisfies a network of identities — treating $\\binom{n}{k}$ as a standalone mathematical object reveals structure that the subset interpretation alone does not expose.
`,

    conditions: `
Requires non-negative integers $n, k$ with $0 \\le k \\le n$.

**Boundary values:**
- $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$
- $\\binom{n}{k} = 0$ for $k > n$ or $k < 0$ (conventional extension)
`,

    notation: `
- $\\binom{n}{k}$ — standard modern form, read "$n$ choose $k$"
- $C(n, k)$ — introductory texts
- $C_n^k$ or $C_k^n$ — European traditions; conventions vary
- \${}_n C_k$ — calculator displays
`,

    variants: `
**Generalized to real upper index:** $\\binom{x}{k} = \\dfrac{x(x-1)(x-2) \\cdots (x - k + 1)}{k!}$ — see [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient).

**As combination count:** identical to [Combination](!/combinatorics/formulas#combination).
`,

    related_formulas: `
- [Combination](!/combinatorics/formulas#combination)
- [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient)
- [Binomial Symmetry Identity](!/combinatorics/formulas#binomial_symmetry_identity)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Absorption Identity](!/combinatorics/formulas#absorption_identity)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Generalized Binomial Coefficient',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\binom{x}{k} = \\frac{x(x-1)(x-2) \\cdots (x-k+1)}{k!}, \\quad k \\in \\mathbb{Z}_{\\ge 0}, \\; x \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$`,
    link: { label: 'Generalized Binomial Coefficient', url: '/combinatorics/binomial-coefficient#1' },

    explanation: `
The binomial coefficient extended to real or complex upper index. The numerator is a polynomial of degree $k$ in $x$, so $\\binom{x}{k}$ is itself a polynomial in $x$. Standard combinatorial interpretation fails when $x$ is not a non-negative integer — the value is purely algebraic.

This is the form that appears in [Newton's Generalized Binomial Theorem](!/combinatorics/formulas#newtons_generalized_binomial_theorem).
`,

    conditions: `
- $k$ must be a non-negative integer
- $x$ may be any real or complex number
- When $x = n$ is a non-negative integer and $k \\le n$, the formula reduces to the ordinary $\\binom{n}{k}$
- When $x = n$ and $k > n$, the numerator contains a factor $(n - n) = 0$, giving $\\binom{n}{k} = 0$ — consistent with the boundary convention
`,

    notation: `
- $\\binom{x}{k}$ — same notation as ordinary binomial coefficient
- The numerator is the **falling factorial** of $x$: $x^{\\underline{k}} = x(x-1) \\cdots (x - k + 1)$
`,

    variants: `
**Falling factorial notation:** $\\binom{x}{k} = \\dfrac{x^{\\underline{k}}}{k!}$, where $x^{\\underline{k}}$ is the falling factorial.

**Negative upper index:** $\\binom{-n}{k} = (-1)^k \\binom{n + k - 1}{k}$ for $n \\ge 0$.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Newton's Generalized Binomial Theorem](!/combinatorics/formulas#newtons_generalized_binomial_theorem)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Binomial Symmetry Identity',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\binom{n}{k} = \\binom{n}{n-k}.$$`,
    link: { label: 'Symmetry', url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
Choosing which $k$ elements to include in a subset is the same act as choosing which $n - k$ elements to exclude. The two perspectives count the same subsets, so the binomial coefficients agree.

In Pascal's triangle, the identity manifests as left-right symmetry within each row.
`,

    derivation: `
**Combinatorial proof.** A $k$-subset of an $n$-set determines its complement, an $(n-k)$-subset, uniquely. The map "subset $\\mapsto$ complement" is a bijection between $k$-subsets and $(n-k)$-subsets, so the counts $\\binom{n}{k}$ and $\\binom{n}{n-k}$ are equal.

**Algebraic proof.** Both sides equal $\\dfrac{n!}{k!(n-k)!}$ directly from the factorial definition — swapping $k \\leftrightarrow n - k$ leaves the formula unchanged.
`,

    conditions: `
Holds for all integers $n \\ge 0$ and $0 \\le k \\le n$.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Combination](!/combinatorics/formulas#combination)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: `Pascal's Rule`,
    entity: 'pascals_triangle',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}.$$`,
    link: { label: `Pascal's Rule`, url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
A recursive identity expressing each binomial coefficient as the sum of the two directly above it in Pascal's triangle. The rule is what generates the triangle row by row from the boundary values $\\binom{n}{0} = \\binom{n}{n} = 1$.
`,

    derivation: `
**Combinatorial proof** (by [Double Counting](!/combinatorics/formulas#double_counting)):

Fix an arbitrary element $x$ of an $n$-element set $S$. Every $k$-subset of $S$ falls into exactly one of two disjoint cases:

- **Contains $x$.** The remaining $k - 1$ elements form a $(k-1)$-subset of $S \\setminus \\{x\\}$, which has $n - 1$ elements. Count: $\\binom{n-1}{k-1}$.
- **Does not contain $x$.** All $k$ elements come from $S \\setminus \\{x\\}$. Count: $\\binom{n-1}{k}$.

The two cases partition the $k$-subsets of $S$, so adding gives the total $\\binom{n}{k}$.

**Algebraic proof:**

$$\\binom{n-1}{k-1} + \\binom{n-1}{k} = \\frac{(n-1)!}{(k-1)!(n-k)!} + \\frac{(n-1)!}{k!(n-1-k)!}.$$

Common denominator $k!(n-k)!$:

$$= \\frac{k \\cdot (n-1)! + (n-k) \\cdot (n-1)!}{k!(n-k)!} = \\frac{n \\cdot (n-1)!}{k!(n-k)!} = \\frac{n!}{k!(n-k)!} = \\binom{n}{k}.$$
`,

    conditions: `
Holds for all integers $n \\ge 1$ and $1 \\le k \\le n - 1$. The convention $\\binom{n}{k} = 0$ for $k < 0$ or $k > n$ extends the identity to all integers $n, k$.
`,

    notation: `
$\\binom{n}{k}$ — the standard binomial coefficient. See [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient) for notational variants.
`,

    variants: `
**Index-shifted form:**

$$\\binom{n+1}{k+1} = \\binom{n}{k} + \\binom{n}{k+1}.$$

**Triangle-generation form:** entry at row $n$, position $k$ of Pascal's triangle equals the sum of the entries at row $n-1$, positions $k-1$ and $k$.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Binomial Symmetry Identity](!/combinatorics/formulas#binomial_symmetry_identity)
- [Absorption Identity](!/combinatorics/formulas#absorption_identity)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Hockey Stick Identity](!/combinatorics/formulas#hockey_stick_identity)
- [Vandermonde's Identity](!/combinatorics/formulas#vandermondes_identity)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Double Counting](!/combinatorics/definitions#double_counting)
`,
  },

  {
    name: 'Absorption Identity',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$k \\binom{n}{k} = n \\binom{n-1}{k-1}.$$`,
    link: { label: 'Absorption Identity', url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
Also called the **committee identity**. Both sides count the number of ways to choose a $k$-element subset of an $n$-element set and then designate one of its members as distinguished.
`,

    derivation: `
**Combinatorial proof** (by [Double Counting](!/combinatorics/formulas#double_counting)):

Count the pairs (committee $C$ of size $k$, chair $x \\in C$) two ways.

- **Pick committee first.** Choose the $k$-subset in $\\binom{n}{k}$ ways, then designate the chair in $k$ ways. Total: $k \\binom{n}{k}$.
- **Pick chair first.** Choose the chair $x$ from the $n$ people in $n$ ways, then choose the remaining $k - 1$ committee members from the other $n - 1$ people in $\\binom{n-1}{k-1}$ ways. Total: $n \\binom{n-1}{k-1}$.

Both expressions count the same set, so they are equal.

**Algebraic proof.** From $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$,

$$k \\binom{n}{k} = \\frac{k \\cdot n!}{k!(n-k)!} = \\frac{n!}{(k-1)!(n-k)!} = n \\cdot \\frac{(n-1)!}{(k-1)!(n-k)!} = n \\binom{n-1}{k-1}.$$
`,

    conditions: `
Holds for all integers $n \\ge 1$ and $1 \\le k \\le n$.
`,

    variants: `
**Index variants:** $(k+1) \\binom{n}{k+1} = (n - k) \\binom{n}{k}$ and $(n-k) \\binom{n}{k} = n \\binom{n-1}{k}$.

**Useful for computation:** evaluating large binomial coefficients efficiently via $\\binom{n}{k} = \\dfrac{n}{k} \\binom{n-1}{k-1}$.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Weighted Binomial Sum](!/combinatorics/formulas#weighted_binomial_sum)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Double Counting](!/combinatorics/definitions#double_counting)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Binomial Row Sum',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$`,
    link: { label: 'Row Sum', url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
The sum of the entries in row $n$ of Pascal's triangle equals $2^n$ — the size of the power set of an $n$-element set. Each subset is counted exactly once by the row sum, grouped by size.
`,

    derivation: `
**Combinatorial proof.** The total number of subsets of an $n$-set is $2^n$ (each element is in or out independently — the [Multiplication Rule](!/combinatorics/formulas#multiplication_rule) applied to $n$ binary choices). Partitioning subsets by size, the number of $k$-subsets is $\\binom{n}{k}$. Summing over all sizes:

$$\\sum_{k=0}^{n} \\binom{n}{k} = 2^n.$$

**Algebraic proof.** Substitute $a = b = 1$ in the [Binomial Theorem](!/combinatorics/formulas#binomial_theorem):

$$(1 + 1)^n = \\sum_{k=0}^{n} \\binom{n}{k} \\cdot 1^{n-k} \\cdot 1^k = \\sum_{k=0}^{n} \\binom{n}{k}.$$

The left side is $2^n$.
`,

    related_formulas: `
- [Alternating Binomial Sum](!/combinatorics/formulas#alternating_binomial_sum)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Weighted Binomial Sum](!/combinatorics/formulas#weighted_binomial_sum)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Alternating Binomial Sum',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0, \\quad n \\ge 1.$$`,
    link: { label: 'Alternating Row Sum', url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
The alternating sum of row $n$ of Pascal's triangle is zero for $n \\ge 1$. Equivalently, the number of even-sized subsets of an $n$-set equals the number of odd-sized subsets.
`,

    derivation: `
**Algebraic proof.** Substitute $a = 1$, $b = -1$ in the [Binomial Theorem](!/combinatorics/formulas#binomial_theorem):

$$(1 - 1)^n = \\sum_{k=0}^{n} \\binom{n}{k} \\cdot 1^{n-k} \\cdot (-1)^k = \\sum_{k=0}^{n} (-1)^k \\binom{n}{k}.$$

The left side is $0^n = 0$ for $n \\ge 1$.

**Combinatorial proof.** Pair each subset $A$ of $\\{1, \\ldots, n\\}$ with the subset $A \\triangle \\{1\\}$ (symmetric difference with $\\{1\\}$). This is an involution that toggles the parity of $|A|$. Each pair contributes one even-sized and one odd-sized subset, so the counts are equal.
`,

    conditions: `
$n \\ge 1$. For $n = 0$, the sum is $\\binom{0}{0} = 1$, not $0$.
`,

    related_formulas: `
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Inclusion-Exclusion Principle (General)](!/combinatorics/formulas#inclusion_exclusion_principle_general)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
`,
  },

  {
    name: `Vandermonde's Identity`,
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\binom{m + n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r - k}.$$`,
    link: { label: `Vandermonde's Identity`, url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
Expresses a single binomial coefficient as a convolution sum of smaller ones. The identity says choosing $r$ items from $m + n$ items partitions according to how many come from each of two disjoint groups of sizes $m$ and $n$.
`,

    derivation: `
**Combinatorial proof** (by [Double Counting](!/combinatorics/formulas#double_counting)):

Consider a set of $m + n$ items split into a group of $m$ and a disjoint group of $n$. Count the $r$-subsets two ways.

- **Direct.** $\\binom{m + n}{r}$.
- **By split.** For each $k$ from $0$ to $r$, choose $k$ items from the first group ($\\binom{m}{k}$ ways) and $r - k$ from the second group ($\\binom{n}{r-k}$ ways). Sum over $k$: $\\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}$.

Both expressions count the same set.

**Algebraic proof.** Compare coefficients of $x^r$ in $(1 + x)^{m+n} = (1+x)^m (1+x)^n$.
`,

    conditions: `
Holds for all non-negative integers $m, n, r$. Terms with $k > m$ or $r - k > n$ vanish by the convention $\\binom{a}{b} = 0$ for $b > a$.
`,

    variants: `
**Chu-Vandermonde extension** (real upper indices): the same identity holds with $m, n$ replaced by any real numbers, using the [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient).

**Square case** ($m = n = r$): yields $\\binom{2n}{n} = \\sum_{k=0}^{n} \\binom{n}{k} \\binom{n}{n-k} = \\sum_{k=0}^{n} \\binom{n}{k}^2$. See [Sum of Squares of Binomial Coefficients](!/combinatorics/formulas#sum_of_squares_of_binomial_coefficients).
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Hockey Stick Identity](!/combinatorics/formulas#hockey_stick_identity)
- [Sum of Squares of Binomial Coefficients](!/combinatorics/formulas#sum_of_squares_of_binomial_coefficients)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Combination](!/combinatorics/definitions#combination)
- [Double Counting](!/combinatorics/definitions#double_counting)
`,
  },

  {
    name: 'Hockey Stick Identity',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\sum_{i=k}^{n} \\binom{i}{k} = \\binom{n+1}{k+1}.$$`,
    link: { label: 'Hockey Stick Identity', url: '/combinatorics/binomial-coefficient#2' },

    explanation: `
A sum along a diagonal of Pascal's triangle collapses to a single entry one row below. The visual pattern of the summed entries plus the result forms a "hockey-stick" shape — the diagonal handle plus the off-diagonal tip.

Also called the **Christmas stocking identity**.
`,

    derivation: `
**Combinatorial proof** (by [Double Counting](!/combinatorics/formulas#double_counting)):

Count the $(k+1)$-subsets of $\\{1, 2, \\ldots, n+1\\}$ two ways.

- **Direct.** $\\binom{n+1}{k+1}$.
- **By largest element.** A $(k+1)$-subset has a unique largest element, say $i + 1$ with $i$ ranging from $k$ to $n$. The remaining $k$ elements come from $\\{1, \\ldots, i\\}$ in $\\binom{i}{k}$ ways. Sum over $i$.

Both expressions count the same set.

**Algebraic proof.** Apply [Pascal's Rule](!/combinatorics/formulas#pascals_rule) iteratively: $\\binom{n+1}{k+1} = \\binom{n}{k} + \\binom{n}{k+1} = \\binom{n}{k} + \\binom{n-1}{k} + \\binom{n-1}{k+1} = \\cdots$.
`,

    conditions: `
Holds for integers $0 \\le k \\le n$.
`,

    variants: `
**Alternative indexing:** $\\sum_{i=0}^{n-k} \\binom{k + i}{k} = \\binom{n+1}{k+1}$ — shifts the summation index to start at $0$.

**Diagonal sum interpretation:** the sum of entries along one diagonal of Pascal's triangle, starting at $\\binom{k}{k}$ and going down-right, equals the entry just below the last summed entry.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Vandermonde's Identity](!/combinatorics/formulas#vandermondes_identity)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Combination](!/combinatorics/definitions#combination)
- [Double Counting](!/combinatorics/definitions#double_counting)
`,
  },

  {
    name: 'Sum of Squares of Binomial Coefficients',
    entity: 'binomial_coefficient',
    category: 'Binomial Coefficient Identities',
    formula: `$$\\sum_{k=0}^{n} \\binom{n}{k}^2 = \\binom{2n}{n}.$$`,
    link: { label: '', url: '' },
    // TODO: backfill into /combinatorics/binomial-coefficient#2 (canonical identity, currently absent from site)

    explanation: `
The sum of squared entries in row $n$ of Pascal's triangle equals the central binomial coefficient $\\binom{2n}{n}$. A special case of [Vandermonde's Identity](!/combinatorics/formulas#vandermondes_identity) with $m = n$ and $r = n$.
`,

    derivation: `
**Algebraic proof from Vandermonde.** Setting $m = n$ and $r = n$ in Vandermonde's Identity:

$$\\binom{2n}{n} = \\sum_{k=0}^{n} \\binom{n}{k} \\binom{n}{n-k}.$$

Apply [Binomial Symmetry Identity](!/combinatorics/formulas#binomial_symmetry_identity) — $\\binom{n}{n-k} = \\binom{n}{k}$:

$$\\binom{2n}{n} = \\sum_{k=0}^{n} \\binom{n}{k}^2.$$

**Combinatorial proof.** Count $n$-subsets of a $2n$-set split into two halves of size $n$ each. By size of overlap with the first half: choose $k$ from the first half ($\\binom{n}{k}$ ways) and $n - k$ from the second half ($\\binom{n}{n-k} = \\binom{n}{k}$ ways), giving $\\binom{n}{k}^2$. Sum over $k$ equals $\\binom{2n}{n}$.
`,

    conditions: `
Holds for all non-negative integers $n$. The right side $\\binom{2n}{n}$ is the **central binomial coefficient**.
`,

    notation: `
- $\\binom{2n}{n}$ — central binomial coefficient. Sequence: $1, 2, 6, 20, 70, 252, 924, \\ldots$ for $n = 0, 1, 2, 3, 4, 5, 6, \\ldots$
- Asymptotic growth: $\\binom{2n}{n} \\sim \\dfrac{4^n}{\\sqrt{\\pi n}}$ by Stirling
`,

    related_formulas: `
- [Vandermonde's Identity](!/combinatorics/formulas#vandermondes_identity)
- [Binomial Symmetry Identity](!/combinatorics/formulas#binomial_symmetry_identity)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  // ============================================
  // BINOMIAL & MULTINOMIAL THEOREMS (7)
  // ============================================

  {
    name: 'Multinomial Coefficient',
    entity: 'multinomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\cdots k_r!}, \\quad k_1 + k_2 + \\cdots + k_r = n.$$`,
    link: { label: 'Multinomial Coefficient', url: '/combinatorics/binomial-coefficient#4' },

    explanation: `
Counts the number of ways to partition $n$ distinct items into $r$ labeled groups of specified sizes $k_1, k_2, \\ldots, k_r$. Equivalently, the number of distinct arrangements of $n$ items where $k_i$ are of type $i$. Generalizes the [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient) from $r = 2$ groups to arbitrary $r$.
`,

    derivation: `
Choose the $k_1$ items for the first group in $\\binom{n}{k_1}$ ways, then the $k_2$ items for the second group from the remaining $n - k_1$ in $\\binom{n - k_1}{k_2}$ ways, and so on:

$$\\binom{n}{k_1} \\binom{n - k_1}{k_2} \\cdots \\binom{k_r}{k_r} = \\frac{n!}{k_1! \\, k_2! \\cdots k_r!}.$$

Intermediate factorials cancel telescopically.
`,

    conditions: `
Requires $k_1 + k_2 + \\cdots + k_r = n$ with each $k_i \\ge 0$.

**Binomial case** ($r = 2$): $\\binom{n}{k, n-k} = \\binom{n}{k}$.
`,

    notation: `
- $\\binom{n}{k_1, k_2, \\ldots, k_r}$ — standard multinomial-coefficient notation
- The condition $k_1 + \\cdots + k_r = n$ is sometimes implicit
`,

    variants: `
**Coefficient in the multinomial expansion:** the coefficient of $x_1^{k_1} x_2^{k_2} \\cdots x_r^{k_r}$ in $(x_1 + x_2 + \\cdots + x_r)^n$. See [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem).

**Binomial recovery:** $\\binom{n}{k} = \\binom{n}{k, \\, n - k}$ — the ordinary binomial coefficient is the case $r = 2$.
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items)
- [Partition into Groups](!/combinatorics/formulas#partition_into_groups)
- [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem)
- [Factorial](!/combinatorics/formulas#factorial)
`,

    related_definitions: `
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Permutation with Identical Items](!/combinatorics/definitions#permutation_with_identical_items)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Binomial Theorem',
    entity: 'binomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k.$$`,
    link: { label: 'Binomial Theorem', url: '/combinatorics/binomial-theorem#1' },

    explanation: `
Expands the $n$-th power of a binomial. The coefficients are precisely the entries of row $n$ of Pascal's triangle. The expansion has $n + 1$ terms, indexed by $k$ from $0$ through $n$.
`,

    derivation: `
**Combinatorial proof.** Write $(a + b)^n$ as the product of $n$ factors, each of the form $(a + b)$. Expanding the product means forming every possible term by choosing either $a$ or $b$ from each factor and multiplying the selections.

A term equal to $a^{n-k} b^k$ arises whenever exactly $k$ of the $n$ factors contribute a $b$. The number of such choices is $\\binom{n}{k}$. Summing over $k$ gives the theorem.

**Algebraic proof.** Induction on $n$ using [Pascal's Rule](!/combinatorics/formulas#pascals_rule) to advance from row $n$ to row $n + 1$.
`,

    conditions: `
Holds for any non-negative integer $n$ and any (real, complex, or symbolic) $a, b$. Extends to non-integer $n$ via [Newton's Generalized Binomial Theorem](!/combinatorics/formulas#newtons_generalized_binomial_theorem), at the cost of an infinite series and convergence conditions.
`,

    variants: `
**Variable form:** $(1 + x)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k$ — substituting $a = 1$, $b = x$. The generating function for row $n$ of Pascal's triangle.

**Sign variant:** $(a - b)^n = \\sum_{k=0}^{n} (-1)^k \\binom{n}{k} a^{n-k} b^k$ — replace $b$ with $-b$.

**Special cases (lead to row-sum identities):**
- $a = b = 1$: $(1+1)^n = 2^n = \\sum_k \\binom{n}{k}$. See [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum).
- $a = 1$, $b = -1$: $(1-1)^n = 0 = \\sum_k (-1)^k \\binom{n}{k}$. See [Alternating Binomial Sum](!/combinatorics/formulas#alternating_binomial_sum).
`,

    related_formulas: `
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [General Term in Binomial Expansion](!/combinatorics/formulas#general_term_in_binomial_expansion)
- [Middle Term in Binomial Expansion](!/combinatorics/formulas#middle_term_in_binomial_expansion)
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Alternating Binomial Sum](!/combinatorics/formulas#alternating_binomial_sum)
- [Weighted Binomial Sum](!/combinatorics/formulas#weighted_binomial_sum)
- [Newton's Generalized Binomial Theorem](!/combinatorics/formulas#newtons_generalized_binomial_theorem)
- [Multinomial Theorem](!/combinatorics/formulas#multinomial_theorem)
- [Pascal's Rule](!/combinatorics/formulas#pascals_rule)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Double Counting](!/combinatorics/definitions#double_counting)
`,
  },

  {
    name: 'General Term in Binomial Expansion',
    entity: 'binomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$T_{k+1} = \\binom{n}{k} a^{n-k} b^k.$$`,
    link: { label: 'General Term', url: '/combinatorics/binomial-theorem#2' },

    explanation: `
The $(k+1)$-th term of the binomial expansion of $(a + b)^n$. The tool for problems asking about one specific term — a particular power of one variable, the term independent of a variable — without expanding the entire polynomial.
`,

    conditions: `
- Indexing convention: $T_1 = \\binom{n}{0} a^n$ (the $k = 0$ term). Under this convention, the term containing $b^k$ is the $(k+1)$-th, not the $k$-th.
- Holds for $k = 0, 1, \\ldots, n$.
`,

    notation: `
- $T_{k+1}$ — the $(k+1)$-th term in the expansion. Some texts use $T_k$ for the $k$-th term, indexing from $1$ — read carefully.
`,

    variants: `
**Sign variant:** $T_{k+1} = (-1)^k \\binom{n}{k} a^{n-k} b^k$ for the expansion of $(a - b)^n$.

**Standard application — term containing $b^k$:** the coefficient of $b^k$ in $(a + b)^n$ is $\\binom{n}{k} a^{n-k}$.

**Standard application — term independent of $x$:** for an expansion like $(x + 1/x)^n$, set the exponent of $x$ in the general term equal to zero and solve for $k$.
`,

    related_formulas: `
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Middle Term in Binomial Expansion](!/combinatorics/formulas#middle_term_in_binomial_expansion)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
`,
  },

  {
    name: 'Middle Term in Binomial Expansion',
    entity: 'binomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$T_{n/2 + 1} = \\binom{n}{n/2} a^{n/2} b^{n/2}, \\quad n \\text{ even}.$$`,
    link: { label: 'Middle Term', url: '/combinatorics/binomial-theorem#2' },

    explanation: `
When $n$ is even, the expansion of $(a + b)^n$ has a unique middle term — the $(n/2 + 1)$-th term. Its coefficient $\\binom{n}{n/2}$ is the maximum value in row $n$ of Pascal's triangle: binomial coefficients grow from the edges of each row toward the middle.

This maximum coefficient is called the **central binomial coefficient**.
`,

    conditions: `
- Requires $n$ even for a unique middle term to exist
- For $n$ odd, the expansion has two middle terms: $T_{(n+1)/2}$ and $T_{(n+3)/2}$, with equal coefficients $\\binom{n}{(n-1)/2} = \\binom{n}{(n+1)/2}$
`,

    notation: `
- $\\binom{n}{n/2}$ — the central binomial coefficient when $n$ is even. Asymptotic: $\\binom{n}{n/2} \\sim \\dfrac{2^n}{\\sqrt{\\pi n / 2}}$.
`,

    variants: `
**Odd $n$ case:** two middle terms

$$T_{(n+1)/2} = \\binom{n}{(n-1)/2} a^{(n+1)/2} b^{(n-1)/2}, \\quad T_{(n+3)/2} = \\binom{n}{(n+1)/2} a^{(n-1)/2} b^{(n+1)/2}.$$
`,

    related_formulas: `
- [General Term in Binomial Expansion](!/combinatorics/formulas#general_term_in_binomial_expansion)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Sum of Squares of Binomial Coefficients](!/combinatorics/formulas#sum_of_squares_of_binomial_coefficients)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
`,
  },

  {
    name: 'Weighted Binomial Sum',
    entity: 'binomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$\\sum_{k=1}^{n} k \\binom{n}{k} = n \\cdot 2^{n-1}.$$`,
    link: { label: 'Weighted Sum', url: '/combinatorics/binomial-theorem#3' },

    explanation: `
A weighted analogue of the [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum). Combinatorially, $k \\binom{n}{k}$ counts $(k\\text{-subset}, \\text{distinguished member})$ pairs of size $k$ — summing over $k$ counts all (subset, distinguished member) pairs of any size.
`,

    derivation: `
**Combinatorial proof** (by [Double Counting](!/combinatorics/formulas#double_counting)):

Count $(S, x)$ pairs with $S \\subseteq \\{1, \\ldots, n\\}$, $x \\in S$, two ways.

- **Pick $S$ first.** Choose subset $S$ of size $k$ in $\\binom{n}{k}$ ways, then pick $x \\in S$ in $k$ ways. Total: $\\sum_k k \\binom{n}{k}$.
- **Pick $x$ first.** Choose $x \\in \\{1, \\ldots, n\\}$ in $n$ ways, then choose any subset of $\\{1, \\ldots, n\\} \\setminus \\{x\\}$ (size $n - 1$) to extend $\\{x\\}$ to $S$ in $2^{n-1}$ ways. Total: $n \\cdot 2^{n-1}$.

**Algebraic proof.** Differentiate $(1 + x)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k$ with respect to $x$:

$$n(1 + x)^{n-1} = \\sum_{k=1}^{n} k \\binom{n}{k} x^{k-1}.$$

Substitute $x = 1$:

$$n \\cdot 2^{n-1} = \\sum_{k=1}^{n} k \\binom{n}{k}.$$
`,

    related_formulas: `
- [Binomial Row Sum](!/combinatorics/formulas#binomial_row_sum)
- [Absorption Identity](!/combinatorics/formulas#absorption_identity)
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Double Counting](!/combinatorics/formulas#double_counting)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Double Counting](!/combinatorics/definitions#double_counting)
`,
  },

  {
    name: `Newton's Generalized Binomial Theorem`,
    entity: 'binomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$(1 + x)^{\\alpha} = \\sum_{k=0}^{\\infty} \\binom{\\alpha}{k} x^k, \\quad |x| < 1, \\; \\alpha \\in \\mathbb{R} \\text{ (or } \\mathbb{C}\\text{)}.$$`,
    link: { label: '', url: '' },
    // TODO: backfill into /combinatorics/binomial-coefficient#1 (referenced in prose, formula not yet displayed)

    explanation: `
Extends the [Binomial Theorem](!/combinatorics/formulas#binomial_theorem) from non-negative integer exponents $n$ to arbitrary real (or complex) exponents $\\alpha$. The expansion becomes an infinite series, converging for $|x| < 1$.

When $\\alpha = n$ is a non-negative integer, the [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient) $\\binom{n}{k}$ equals $0$ for $k > n$, so the series terminates and recovers the ordinary binomial theorem.
`,

    conditions: `
- Series converges absolutely for $|x| < 1$
- $\\alpha$ may be any real or complex number
- For non-negative integer $\\alpha = n$, the series terminates at $k = n$ — finite sum, valid for all $x$
- For non-integer $\\alpha$, the series is infinite and convergence requires $|x| < 1$ (boundary cases require care)
`,

    notation: `
- $\\binom{\\alpha}{k}$ is the [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient): $\\binom{\\alpha}{k} = \\dfrac{\\alpha(\\alpha-1)(\\alpha-2) \\cdots (\\alpha - k + 1)}{k!}$
`,

    variants: `
**Square-root expansion** ($\\alpha = 1/2$):

$$\\sqrt{1 + x} = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16}x^3 - \\cdots, \\quad |x| < 1.$$

**Reciprocal expansion** ($\\alpha = -1$): the geometric series.

$$\\frac{1}{1 + x} = \\sum_{k=0}^{\\infty} (-1)^k x^k, \\quad |x| < 1.$$

**General negative integer exponent** ($\\alpha = -n$): $(1 + x)^{-n} = \\sum_{k=0}^{\\infty} (-1)^k \\binom{n + k - 1}{k} x^k$.
`,

    related_formulas: `
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Generalized Binomial Coefficient](!/combinatorics/formulas#generalized_binomial_coefficient)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
`,

    related_definitions: `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Factorial](!/combinatorics/definitions#factorial)
`,
  },

  {
    name: 'Multinomial Theorem',
    entity: 'multinomial_coefficient',
    category: 'Binomial & Multinomial Theorems',
    formula: `$$(x_1 + x_2 + \\cdots + x_r)^n = \\sum_{\\substack{k_1 + k_2 + \\cdots + k_r = n \\\\ k_i \\ge 0}} \\binom{n}{k_1, k_2, \\ldots, k_r} x_1^{k_1} x_2^{k_2} \\cdots x_r^{k_r}.$$`,
    link: { label: 'Multinomial Theorem', url: '/combinatorics/binomial-theorem#4' },

    explanation: `
Generalizes the [Binomial Theorem](!/combinatorics/formulas#binomial_theorem) from two-term to $r$-term sums. The coefficient of $x_1^{k_1} x_2^{k_2} \\cdots x_r^{k_r}$ is the [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient).
`,

    derivation: `
**Combinatorial.** Write $(x_1 + \\cdots + x_r)^n$ as the product of $n$ identical factors $(x_1 + \\cdots + x_r)$. Each term in the expansion corresponds to choosing one of $x_1, \\ldots, x_r$ from each factor and multiplying. A term $x_1^{k_1} x_2^{k_2} \\cdots x_r^{k_r}$ arises when $k_1$ factors contribute $x_1$, $k_2$ factors contribute $x_2$, and so on. The number of ways to make this assignment is $\\binom{n}{k_1, k_2, \\ldots, k_r}$.
`,

    conditions: `
The sum runs over all tuples $(k_1, k_2, \\ldots, k_r)$ of non-negative integers with $k_1 + k_2 + \\cdots + k_r = n$.

**Binomial case** ($r = 2$): recovers $(x_1 + x_2)^n = \\sum_{k=0}^{n} \\binom{n}{k} x_1^{n-k} x_2^k$ using $\\binom{n}{k, n-k} = \\binom{n}{k}$.
`,

    notation: `
- The number of distinct terms in the expansion is the count of non-negative integer tuples summing to $n$ — equal to $\\binom{n + r - 1}{r - 1}$ (the [Weak Composition](!/combinatorics/formulas#weak_composition) count)
`,

    variants: `
**Coefficient of a specific monomial:** to find the coefficient of $x_1^{a_1} x_2^{a_2} \\cdots x_r^{a_r}$ in the expansion, check $a_1 + \\cdots + a_r = n$ and read off $\\binom{n}{a_1, a_2, \\ldots, a_r}$.

**Sum of all multinomial coefficients of degree $n$ in $r$ variables:** substituting $x_1 = x_2 = \\cdots = x_r = 1$ yields $\\sum \\binom{n}{k_1, \\ldots, k_r} = r^n$ — the [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells) count.
`,

    related_formulas: `
- [Binomial Theorem](!/combinatorics/formulas#binomial_theorem)
- [Multinomial Coefficient](!/combinatorics/formulas#multinomial_coefficient)
- [Binomial Coefficient](!/combinatorics/formulas#binomial_coefficient)
- [Weak Composition](!/combinatorics/formulas#weak_composition)
- [Distribution into Cells](!/combinatorics/formulas#distribution_into_cells)
- [Permutation with Identical Items](!/combinatorics/formulas#permutation_with_identical_items)
`,

    related_definitions: `
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Permutation with Identical Items](!/combinatorics/definitions#permutation_with_identical_items)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
`,
  },

];

export default combinatoricsFormulasList;