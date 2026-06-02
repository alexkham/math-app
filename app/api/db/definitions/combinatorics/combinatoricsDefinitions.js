const combinatoricsTermsList = [

  // ============================================
  // COUNTING PRINCIPLES
  // ============================================

  {
    id: 'addition_rule',
    name: 'Addition Rule',
    category: 'Counting Principles',
    formula: `The addition rule states that if a count splits into $k$ mutually exclusive cases with $m_1, m_2, \\ldots, m_k$ outcomes each, the total number of outcomes is $m_1 + m_2 + \\cdots + m_k$.`,
    link: { label: 'Addition Rule', url: '/combinatorics/counting-principles#1' },
    fields: {
      intuition: `The addition rule applies whenever a choice is made by selecting one option from several disjoint groups. The linguistic marker is the word "or" — pick method 1 OR method 2 OR method 3. Each "or" between mutually exclusive cases contributes its own count to the sum.

In set-theoretic language, the rule is the cardinality identity $|A \\cup B| = |A| + |B|$ when $A \\cap B = \\emptyset$, generalized to any number of pairwise disjoint sets.`,

      properties: `Requires mutual exclusivity: no outcome may belong to more than one case. When two cases share outcomes, naive addition counts the shared outcomes twice — the [inclusion-exclusion principle](!/combinatorics/definitions#inclusion_exclusion_principle) is the systematic correction.`,

      examples: `A traveller can reach the city by $2$ bus routes, $3$ train routes, or $4$ taxi routes: $2 + 3 + 4 = 9$ total route choices.

A dessert is one of $3$ cake flavors, $4$ ice-cream flavors, or $2$ pie fillings: $3 + 4 + 2 = 9$ options.`,

      'related concepts': `
- [Multiplication Rule](!/combinatorics/definitions#multiplication_rule)
- [Complementary Counting](!/combinatorics/definitions#complementary_counting)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)`
    }
  },

  {
    id: 'multiplication_rule',
    name: 'Multiplication Rule',
    category: 'Counting Principles',
    formula: `The multiplication rule states that if an outcome is built from $k$ independent steps with $m_1, m_2, \\ldots, m_k$ options each, the combined sequence has $m_1 \\times m_2 \\times \\cdots \\times m_k$ possible outcomes.`,
    link: { label: 'Multiplication Rule', url: '/combinatorics/counting-principles#2' },
    fields: {
      intuition: `The multiplication rule applies whenever an outcome requires completing a sequence of independent steps. The linguistic marker is the word "and" — choose step 1 AND step 2 AND step 3. Each "and" between independent steps multiplies the count.

In set-theoretic terms, the rule is the cardinality of the Cartesian product, $|A \\times B| = |A| \\cdot |B|$, extended to any finite number of factors.`,

      properties: `Requires independence: the number of options at each step must not depend on the choices made at earlier steps. When the option count shifts based on earlier choices, the rule does not apply directly, and the problem is typically split into cases via the [addition rule](!/combinatorics/definitions#addition_rule).

The multiplication rule is the engine behind every [permutation](!/combinatorics/definitions#permutation) formula. [Combinations](!/combinatorics/definitions#combination) build on the same product with a division step to remove ordering.`,

      examples: `A lunch combo of $3$ main courses, $2$ drinks, and $4$ desserts: $3 \\times 2 \\times 4 = 24$ meals.

A $4$-digit PIN from digits $0$–$9$: $10 \\times 10 \\times 10 \\times 10 = 10{,}000$ codes.

License plate of $3$ letters followed by $3$ digits: $26^3 \\times 10^3 = 17{,}576{,}000$ plates.`,

      'related concepts': `
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Permutation](!/combinatorics/definitions#permutation)
- [Combination](!/combinatorics/definitions#combination)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)`
    }
  },

  {
    id: 'complementary_counting',
    name: 'Complementary Counting',
    category: 'Counting Principles',
    formula: `Complementary counting computes the size of a set by subtracting the size of its complement from the universe: if $U$ is the universe and $A \\subseteq U$, then $|A| = |U| - |U \\setminus A|$.`,
    link: { label: 'Complementary Counting', url: '/combinatorics/counting-principles#3' },
    fields: {
      intuition: `Some counting problems are easier to solve in reverse. Counting the cases that fail a condition can be significantly simpler than counting the cases that satisfy it, especially when the condition has the form "at least one" — its negation, "none", often collapses into a single tractable count.

The strategy is: count the total, count the complement, subtract.`,

      properties: `Complementary counting is a strategic application of the [addition rule](!/combinatorics/definitions#addition_rule) to the partition $A \\cup A^c = U$, not an independent principle.

It is most useful when the desired set $A$ is described by an "at least one" condition with overlapping cases, while $A^c$ ("none") partitions cleanly.`,

      examples: `Number of $3$-digit integers with at least one repeated digit: $900 - 648 = 252$, where $900$ is the total count and $648$ is the count with all distinct digits.

Number of permutations of $\\{1, \\ldots, n\\}$ with at least one fixed point: $n! - !n$, where $!n$ is the [derangement](!/combinatorics/definitions#derangement) count.`,

      'related concepts': `
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Derangement](!/combinatorics/definitions#derangement)`
    }
  },

  {
    id: 'double_counting',
    name: 'Double Counting',
    category: 'Counting Principles',
    formula: `Double counting is a proof technique in which the same set is enumerated by two different strategies; the resulting expressions both equal the size of the set, so they equal each other: if $|S| = f(n)$ by one argument and $|S| = g(n)$ by another, then $f(n) = g(n)$.`,
    link: { label: 'Double Counting', url: '/combinatorics/counting-principles#4' },
    fields: {
      intuition: `Double counting produces identities rather than numerical counts. A combinatorial object is counted in two genuinely different ways — typically by selecting members directly versus by partitioning the selection into stages — and the two expressions for the same total are equated.

Many [binomial coefficient](!/combinatorics/definitions#binomial_coefficient) identities, including Vandermonde's identity and the hockey stick identity, are most naturally proved by double counting.`,

      properties: `The output of a double-counting argument is an identity, not a single number. Both sides must independently count the same set.

The handshake lemma is the canonical example: the sum of the number of hands each person shook equals twice the total number of handshakes, since each handshake is counted once from each participant's perspective. In graph theory, $\\sum_{v} \\deg(v) = 2|E|$.`,

      examples: `Pascal's rule $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ — count $k$-subsets of an $n$-set directly, or split into those containing a fixed element versus those not.

Absorption identity $k\\binom{n}{k} = n\\binom{n-1}{k-1}$ — count "$k$-subsets with a distinguished member" two ways.

Handshake lemma: $\\sum_{v} \\deg(v) = 2|E|$ in any graph.`,

      'related concepts': `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)`
    }
  },

  {
    id: 'pigeonhole_principle',
    name: 'Pigeonhole Principle',
    category: 'Counting Principles',
    formula: `The pigeonhole principle states that if $n$ items are distributed among $k$ containers and $n > k$, then at least one container holds at least two items. The generalized form: if $n$ items are distributed among $k$ containers, at least one container holds at least $\\lceil n/k \\rceil$ items.`,
    link: { label: 'Pigeonhole Principle', url: '/combinatorics/counting-principles#5' },
    fields: {
      intuition: `The pigeonhole principle does not count outcomes — it guarantees the existence of a particular kind of outcome. The statement is existential: it certifies that something must occur without identifying where.

The basic form is the case $n = k + 1$ of the generalized form, which forces $\\lceil n/k \\rceil = 2$.`,

      properties: `Asymmetric: the principle proves that a collision must occur but says nothing about which container holds it or how to find it.

In the language of [functions](!/functions), the principle states that no injection exists from a finite set into a strictly smaller finite set — any function from a larger finite set to a smaller one must map at least two elements of the domain to the same target.

Yields existence proofs in number theory, geometry, and combinatorics, often in settings where direct construction is hard or impossible.`,

      examples: `In any group of $13$ people, at least two share a birth month — $13$ people distributed among $12$ months.

Among any $5$ integers chosen from $\\{1, 2, \\ldots, 8\\}$, at least two come from one of the four pairs $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, \\{7,8\\}$, so those two differ by exactly $1$.

In any group of $25$ people, at least $\\lceil 25/12 \\rceil = 3$ share a birth month.`,

      'related concepts': `
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Multiplication Rule](!/combinatorics/definitions#multiplication_rule)`
    }
  },

  {
    id: 'inclusion_exclusion_principle',
    name: 'Inclusion-Exclusion Principle',
    category: 'Counting Principles',
    formula: `The inclusion-exclusion principle computes the size of a union of $n$ sets by alternately adding the sizes of $k$-fold intersections: $\\left| \\bigcup_{i=1}^{n} A_i \\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\sum_{1 \\le i_1 < \\cdots < i_k \\le n} |A_{i_1} \\cap \\cdots \\cap A_{i_k}|$.`,
    link: { label: 'Inclusion-Exclusion Principle', url: '/combinatorics/inclusion-exclusion' },
    fields: {
      intuition: `The [addition rule](!/combinatorics/definitions#addition_rule) computes the size of a union by adding the sizes of its pieces — but only when those pieces are mutually exclusive. The moment two sets share elements, simply adding their sizes counts the shared elements twice.

Inclusion-exclusion is the systematic correction: add the sizes of individual sets, subtract pairwise intersections to remove double-counting, add back triple intersections to compensate for over-correction, and continue with alternating signs.`,

      properties: `Two-set form: $|A \\cup B| = |A| + |B| - |A \\cap B|$.

Three-set form: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$.

The number of terms at level $k$ is $\\binom{n}{k}$, and the total number of terms across all levels is $2^n - 1$.

Complementary form: counts elements satisfying none of the conditions, $|\\overline{A_1} \\cap \\cdots \\cap \\overline{A_n}| = |U| - |A_1 \\cup \\cdots \\cup A_n|$. This form produces the [derangement](!/combinatorics/definitions#derangement) count and the count of surjective functions.`,

      examples: `Among integers $1$ to $100$, the count divisible by $2$, $3$, or $5$: $50 + 33 + 20 - 16 - 10 - 6 + 3 = 74$.

In a group of $30$ students with $18$ taking French, $15$ taking Spanish, $7$ taking both: $18 + 15 - 7 = 26$ take at least one language.

Surjective functions from an $n$-set to a $k$-set: $\\sum_{j=0}^{k} (-1)^j \\binom{k}{j} (k-j)^n$.`,

      'related concepts': `
- [Addition Rule](!/combinatorics/definitions#addition_rule)
- [Complementary Counting](!/combinatorics/definitions#complementary_counting)
- [Derangement](!/combinatorics/definitions#derangement)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)`
    }
  },

  // ============================================
  // PERMUTATIONS
  // ============================================

  {
    id: 'factorial',
    name: 'Factorial',
    category: 'Permutations',
    formula: `The factorial of a non-negative integer $n$, written $n!$, is the product of all positive integers from $1$ up to $n$: $n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1$, with the convention $0! = 1$.`,
    link: { label: 'Permutations', url: '/combinatorics/permutations' },
    fields: {
      notation: `The exclamation mark $!$ written after a non-negative integer denotes the factorial: $5! = 120$, $10! = 3{,}628{,}800$. The convention $0! = 1$ is required for formulas such as $\\binom{n}{0} = 1$ to behave correctly.`,

      properties: `Recursive definition: $n! = n \\cdot (n-1)!$ for $n \\ge 1$, with $0! = 1$.

Growth rate: $n!$ grows faster than any exponential function $a^n$ for fixed $a$, but slower than $n^n$.

Combinatorial meaning: $n!$ counts the number of ways to arrange $n$ distinct objects in a line — the foundational [full permutation](!/combinatorics/definitions#full_permutation) count.`,

      examples: `$3! = 3 \\cdot 2 \\cdot 1 = 6$ — the six arrangements of three distinct items.

$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.

Ratio identity: $\\frac{n!}{(n-r)!} = n \\cdot (n-1) \\cdots (n-r+1)$ — the number of ways to arrange $r$ items selected from $n$, used in the [partial permutation](!/combinatorics/definitions#partial_permutation) formula.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)`
    }
  },

  {
    id: 'permutation',
    name: 'Permutation',
    category: 'Permutations',
    formula: `A permutation is an arrangement of objects in a definite order. The defining property is that order matters — different sequences of the same objects count as different permutations.`,
    link: { label: 'Permutations', url: '/combinatorics/permutations' },
    fields: {
      intuition: `A permutation answers the question "in how many ways can these items be arranged in order?" Each distinct ordering is a separate permutation. Reordering the same items produces a different permutation, even though the underlying set of items is unchanged. This is the property that distinguishes permutations from [combinations](!/combinatorics/definitions#combination), where order is irrelevant.

Five scenarios refine the general concept depending on whether all items are used, whether repetition is allowed, whether some items are identical, and whether the arrangement is linear or circular: [full permutation](!/combinatorics/definitions#full_permutation), [partial permutation](!/combinatorics/definitions#partial_permutation), [permutation with repetition](!/combinatorics/definitions#permutation_with_repetition), [permutation with identical items](!/combinatorics/definitions#permutation_with_identical_items), and [circular permutation](!/combinatorics/definitions#circular_permutation).`,

      notation: `General notation for the number of permutations of $r$ items selected from $n$ distinct items:

$P(n,r)$, \${}_nP_r$, or $A_n^r$ — three common forms for the same quantity. Specific scenarios use specialized notations introduced on each scenario's entry.`,

      'related concepts': `
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Partial Permutation](!/combinatorics/definitions#partial_permutation)
- [Permutation with Repetition](!/combinatorics/definitions#permutation_with_repetition)
- [Permutation with Identical Items](!/combinatorics/definitions#permutation_with_identical_items)
- [Circular Permutation](!/combinatorics/definitions#circular_permutation)
- [Combination](!/combinatorics/definitions#combination)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'full_permutation',
    name: 'Full Permutation',
    category: 'Permutations',
    formula: `A full permutation is an arrangement of all $n$ distinct items in a linear sequence, with each item appearing exactly once. The number of full permutations of $n$ items is $P(n) = n!$.`,
    link: { label: 'Full Permutation', url: '/combinatorics/permutations#full' },
    fields: {
      properties: `All items are used: no item is left out and no item is reused. Each item appears exactly once in the arrangement.

Order matters: rearranging items produces a different full permutation.

The count $n!$ follows from the [multiplication rule](!/combinatorics/definitions#multiplication_rule): $n$ choices for the first position, $n-1$ for the second, decreasing to $1$ for the last position.`,

      examples: `Arranging $3$ distinct books on a shelf: $3! = 6$ orderings.

Determining the speaking order for all $5$ presenters at a meeting: $5! = 120$ schedules.

Ranking all $7$ finalists in a competition from first to seventh place: $7! = 5{,}040$ rankings.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Factorial](!/combinatorics/definitions#factorial)
- [Partial Permutation](!/combinatorics/definitions#partial_permutation)
- [Circular Permutation](!/combinatorics/definitions#circular_permutation)`
    }
  },

  {
    id: 'partial_permutation',
    name: 'Partial Permutation',
    category: 'Permutations',
    formula: `A partial permutation is a selection of $r$ distinct items from $n$ available items followed by their arrangement into a linear sequence, with no item reused. The number of partial permutations is $P(n,r) = \\frac{n!}{(n-r)!}$.`,
    link: { label: 'Partial Permutation', url: '/combinatorics/permutations#without' },
    fields: {
      notation: `Several notations are in use for the same count: $P(n,r)$, \${}_nP_r$, $A_n^r$, and $\\text{nPr}$ — the last is the form most calculator displays use.`,

      properties: `Order matters and no item is reused. Only $r$ of the $n$ items appear in the arrangement; the remaining $n - r$ items are not used.

The formula derives from the [multiplication rule](!/combinatorics/definitions#multiplication_rule): $n$ choices for the first position, $n-1$ for the second, down to $n - r + 1$ for the $r$-th position. The product equals $\\frac{n!}{(n-r)!}$.

Boundary cases: $P(n, n) = n!$ recovers the [full permutation](!/combinatorics/definitions#full_permutation), and $P(n, 0) = 1$ counts the empty arrangement.`,

      examples: `Selecting and arranging $3$ winners (gold, silver, bronze) from $10$ runners: $P(10, 3) = \\frac{10!}{7!} = 720$.

Choosing a president, vice-president, and secretary from $8$ candidates: $P(8, 3) = 336$.

Picking $2$ books in order from a shelf of $5$: $P(5, 2) = 20$.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Combination](!/combinatorics/definitions#combination)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'permutation_with_repetition',
    name: 'Permutation with Repetition',
    category: 'Permutations',
    formula: `A permutation with repetition is an arrangement of $r$ positions where each position is filled independently from $n$ available items, with the same item allowed to appear in multiple positions. The number of such arrangements is $P_{\\text{rep}}(n, r) = n^r$.`,
    link: { label: 'Permutation with Repetition', url: '/combinatorics/permutations#with' },
    fields: {
      properties: `Order matters and items may be reused. Each of the $r$ positions is filled independently from the same pool of $n$ items.

The count $n^r$ follows from the [multiplication rule](!/combinatorics/definitions#multiplication_rule): every one of the $r$ positions has all $n$ items available, so the total is the product of $r$ factors of $n$.

This is the only permutation scenario where the count can exceed $n!$ — the formula $n^r$ grows without bound as $r$ increases past $n$.`,

      examples: `Generating a $4$-digit PIN from digits $0$–$9$: $10^4 = 10{,}000$ possible PINs.

Forming a $3$-letter string from the $26$-letter alphabet (repeats allowed): $26^3 = 17{,}576$ strings.

Creating a $6$-character password where each character is a digit: $10^6 = 1{,}000{,}000$ passwords.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Partial Permutation](!/combinatorics/definitions#partial_permutation)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)`
    }
  },

  {
    id: 'permutation_with_identical_items',
    name: 'Permutation with Identical Items',
    category: 'Permutations',
    formula: `A permutation with identical items is an arrangement of $n$ objects in a linear sequence where some objects are indistinguishable from one another, counting only distinct orderings. If the objects split into groups of sizes $n_1, n_2, \\ldots, n_k$ with $n_1 + n_2 + \\cdots + n_k = n$, the count is $\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}$.`,
    link: { label: 'Permutation with Identical Items', url: '/combinatorics/permutations#identical' },
    fields: {
      notation: `$\\binom{n}{n_1, n_2, \\ldots, n_k}$ or $P(n; n_1, n_2, \\ldots, n_k)$ — both denote the same count, equal to the [multinomial coefficient](!/combinatorics/definitions#multinomial_coefficient).`,

      properties: `All $n$ items are used. Within each group of identical items, swapping items produces the same arrangement, so the $n!$ full permutations overcount by a factor of $n_1! \\, n_2! \\cdots n_k!$.

Dividing $n!$ by the product of the group factorials removes this redundancy, yielding the correct count of distinct arrangements.

When all items are distinct ($k = n$ and all $n_i = 1$), the formula collapses to $n!$ — the [full permutation](!/combinatorics/definitions#full_permutation) count.`,

      examples: `Arrangements of the letters in BALLOON ($7$ letters: one B, one A, two L, two O, one N): $\\frac{7!}{1! \\, 1! \\, 2! \\, 2! \\, 1!} = 1{,}260$.

Arrangements of the letters in MISSISSIPPI ($11$ letters: one M, four I, four S, two P): $\\frac{11!}{1! \\, 4! \\, 4! \\, 2!} = 34{,}650$.

Three red balls and two blue balls in a row: $\\frac{5!}{3! \\, 2!} = 10$ distinct sequences.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'circular_permutation',
    name: 'Circular Permutation',
    category: 'Permutations',
    formula: `A circular permutation is an arrangement of $n$ distinct items around a circle, where two arrangements are considered identical if one is a rotation of the other. The number of circular permutations is $P_{\\text{circ}}(n) = (n-1)!$.`,
    link: { label: 'Circular Permutation', url: '/combinatorics/permutations#circular' },
    fields: {
      properties: `Order matters along the circle, but absolute position does not. Fixing the position of one item removes the rotational redundancy, leaving the remaining $n - 1$ items to be arranged linearly in $(n-1)!$ ways.

Equivalently: the $n!$ linear arrangements of $n$ items partition into groups of $n$ rotationally equivalent versions, so dividing by $n$ gives $\\frac{n!}{n} = (n-1)!$.

Reflections (clockwise vs counterclockwise) are typically considered distinct in this definition. If reflections are also identified, the count becomes $\\frac{(n-1)!}{2}$.`,

      examples: `Seating $5$ guests around a round table: $(5-1)! = 24$ arrangements.

Arranging $6$ beads in a fixed circular pattern (rotations identified, reflections distinct): $5! = 120$.

Ordering $4$ players in a circular game: $3! = 6$ orderings.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'derangement',
    name: 'Derangement',
    category: 'Permutations',
    formula: `A derangement is a permutation of a set in which no element appears in its original position. The number of derangements of an $n$-element set, written $!n$ or $D_n$, is $!n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}$.`,
    link: { label: 'Derangements', url: '/combinatorics/permutations#derangement' },
    fields: {
      notation: `$!n$ — the subfactorial notation, with the exclamation mark preceding the number (in contrast to $n!$ for the factorial).

$D_n$ — alternative notation common in older texts.`,

      properties: `Every position must contain an element different from the element originally placed there. Of the $n!$ full permutations of an $n$-element set, only $!n$ qualify as derangements.

The derangement formula is derived by applying the complementary form of the [inclusion-exclusion principle](!/combinatorics/definitions#inclusion_exclusion_principle) to the set of all permutations, with $A_i$ defined as the permutations fixing position $i$.

Recurrence: $!n = (n-1) \\bigl( !(n-1) + !(n-2) \\bigr)$ for $n \\ge 2$, with $!0 = 1$ and $!1 = 0$.

Limit: $\\frac{!n}{n!} \\to e^{-1} \\approx 0.368$ as $n \\to \\infty$ — the fraction of permutations that are derangements approaches $1/e$.`,

      examples: `$!1 = 0$, $!2 = 1$, $!3 = 2$, $!4 = 9$, $!5 = 44$, $!6 = 265$.

The Secret Santa problem with $n$ participants — each person draws another participant&apos;s name but cannot draw their own — has $!n$ valid drawings.

Among the $24$ permutations of $\\{1, 2, 3, 4\\}$, exactly $9$ are derangements (none of the four numbers in its original position).`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Full Permutation](!/combinatorics/definitions#full_permutation)
- [Inclusion-Exclusion Principle](!/combinatorics/definitions#inclusion_exclusion_principle)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  // ============================================
  // COMBINATIONS & DISTRIBUTIONS
  // ============================================

  {
    id: 'combination',
    name: 'Combination',
    category: 'Combinations & Distributions',
    formula: `A combination is a selection of items from a collection where order does not matter. The number of ways to select $r$ items from $n$ distinct items is the [binomial coefficient](!/combinatorics/definitions#binomial_coefficient) $\\binom{n}{r} = \\frac{n!}{r!\\,(n-r)!}$.`,
    link: { label: 'Combinations', url: '/combinatorics/combinations#combinations' },
    fields: {
      notation: `Several notations denote the same quantity: $\\binom{n}{r}$ — the standard modern form, read "$n$ choose $r$"; $C(n,r)$ — common in introductory texts; $C_n^r$ — an alternative form; \${}_nC_r$ — the form most calculator displays use.`,

      'key distinction': `A combination differs from a [permutation](!/combinatorics/definitions#permutation) in that order is irrelevant. Selecting items $\\{A, B, C\\}$ produces the same combination regardless of whether they were chosen in the order $A, B, C$ or $C, A, B$. Each combination of $r$ items corresponds to exactly $r!$ permutations, so $\\binom{n}{r} = \\frac{P(n,r)}{r!}$.`,

      examples: `Selecting $3$ books to borrow from a shelf of $10$: $\\binom{10}{3} = 120$ possible selections.

Choosing $5$ committee members from $20$ candidates: $\\binom{20}{5} = 15{,}504$ committees.

Drawing $6$ lottery numbers from $49$: $\\binom{49}{6} = 13{,}983{,}816$ possible tickets.`,

      'related concepts': `
- [Permutation](!/combinatorics/definitions#permutation)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)`
    }
  },

  {
    id: 'partition_into_groups',
    name: 'Partition into Groups',
    category: 'Combinations & Distributions',
    formula: `A partition into groups divides $n$ distinct items into $k$ unlabeled subsets where only the grouping matters, not the order within groups or names of the groups. When the group sizes $n_1, n_2, \\ldots, n_k$ are specified and distinct, the count is $\\frac{n!}{n_1! \\, n_2! \\cdots n_k!}$.`,
    link: { label: 'Partition into Groups', url: '/combinatorics/combinations#partition' },
    fields: {
      properties: `Items are distinct, but groups are unlabeled — only which items share a group matters, not which group is called "Group 1" versus "Group 2".

When groups of equal size are present, the formula divides further by the factorial of the count of equal-sized groups to remove the redundancy of interchangeable group labels.

The formula coincides with the [multinomial coefficient](!/combinatorics/definitions#multinomial_coefficient) when the groups are treated as labeled by their size signature.`,

      examples: `Dividing $12$ students into three project teams of $4$ each: $\\frac{12!}{4! \\, 4! \\, 4! \\cdot 3!} = 5{,}775$ — the extra division by $3!$ accounts for the three equal-sized unlabeled teams.

Splitting $6$ people into groups of sizes $3, 2, 1$: $\\frac{6!}{3! \\, 2! \\, 1!} = 60$ partitions; no equal-sized group correction is needed since all sizes are distinct.

Partitioning $4$ items into two pairs: $\\frac{4!}{2! \\, 2! \\cdot 2!} = 3$ partitions.`,

      'related concepts': `
- [Combination](!/combinatorics/definitions#combination)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Distribution into Cells](!/combinatorics/definitions#distribution_into_cells)`
    }
  },

  {
    id: 'weak_composition',
    name: 'Weak Composition',
    category: 'Combinations & Distributions',
    formula: `A weak composition is a distribution of $n$ identical items into $r$ labeled containers where some containers may remain empty. The number of weak compositions is $\\binom{n + r - 1}{r - 1}$.`,
    link: { label: 'Weak Composition', url: '/combinatorics/combinations#weak' },
    fields: {
      notation: `$\\left(\\!\\binom{n}{r}\\!\\right)$ — the double-parenthesis notation specifically indicating a weak composition. The same count is also written $\\binom{n + r - 1}{r - 1}$ as an ordinary [binomial coefficient](!/combinatorics/definitions#binomial_coefficient).`,

      properties: `Items are identical; only the count assigned to each labeled container matters. Containers are distinguishable, so $(3, 0, 0)$ and $(0, 3, 0)$ are different weak compositions.

The "stars and bars" argument derives the formula: arrange $n$ identical stars in a row with $r - 1$ dividing bars to mark off $r$ regions. The total of $n + r - 1$ symbols admits $\\binom{n + r - 1}{r - 1}$ choices for the bar positions.

The number of weak compositions equals the number of terms in the expansion of $(x_1 + x_2 + \\cdots + x_r)^n$ — see the [multinomial coefficient](!/combinatorics/definitions#multinomial_coefficient).`,

      examples: `Distributing $3$ identical coins into $3$ labeled boxes: $\\binom{5}{2} = 10$ compositions.

Allocating $5$ identical scholarships among $4$ departments: $\\binom{8}{3} = 56$ allocations.

Number of non-negative integer solutions to $x_1 + x_2 + x_3 = 7$: $\\binom{9}{2} = 36$.`,

      'related concepts': `
- [Strong Composition](!/combinatorics/definitions#strong_composition)
- [Combination](!/combinatorics/definitions#combination)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)`
    }
  },

  {
    id: 'strong_composition',
    name: 'Strong Composition',
    category: 'Combinations & Distributions',
    formula: `A strong composition is a distribution of $n$ identical items into $r$ labeled containers where every container must receive at least one item. The number of strong compositions is $\\binom{n - 1}{r - 1}$.`,
    link: { label: 'Strong Composition', url: '/combinatorics/combinations#strong' },
    fields: {
      notation: `$\\left\\langle \\binom{n}{r} \\right\\rangle$ — the angle-bracket notation specifically indicating a strong composition. The same count is also written $\\binom{n - 1}{r - 1}$ as an ordinary [binomial coefficient](!/combinatorics/definitions#binomial_coefficient).`,

      properties: `Items are identical and containers are labeled, with the constraint that no container is empty.

The formula derives from a reduction to [weak compositions](!/combinatorics/definitions#weak_composition): placing one item in each of the $r$ containers leaves $n - r$ items to distribute freely, producing $\\binom{(n-r) + r - 1}{r - 1} = \\binom{n - 1}{r - 1}$ compositions.

The strong composition count requires $n \\ge r$; with fewer items than containers, no valid distribution exists.`,

      examples: `Distributing $5$ identical coins into $3$ labeled boxes with each box non-empty: $\\binom{4}{2} = 6$ compositions.

Splitting a sequence of $10$ identical units into $4$ non-empty consecutive runs: $\\binom{9}{3} = 84$ splittings.

Number of positive integer solutions to $x_1 + x_2 + x_3 = 7$: $\\binom{6}{2} = 15$.`,

      'related concepts': `
- [Weak Composition](!/combinatorics/definitions#weak_composition)
- [Combination](!/combinatorics/definitions#combination)
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)`
    }
  },

  {
    id: 'distribution_into_cells',
    name: 'Distribution into Cells',
    category: 'Combinations & Distributions',
    formula: `A distribution into cells assigns each of $n$ distinct items to one of $r$ labeled containers, producing a mapping from items to containers. The number of distributions is $r^n$.`,
    link: { label: 'Distribution into Cells', url: '/combinatorics/combinations#distribution' },
    fields: {
      properties: `Items are distinct and containers are labeled. Each item independently chooses one of the $r$ containers, and containers may receive any number of items including zero.

The count $r^n$ follows from the [multiplication rule](!/combinatorics/definitions#multiplication_rule): each of the $n$ items has $r$ choices, so the total is $r \\cdot r \\cdots r = r^n$.

Equivalently, a distribution into cells is a function from an $n$-element domain to an $r$-element codomain. Counting functions: $r^n$.

This differs from [permutation with repetition](!/combinatorics/definitions#permutation_with_repetition) only in framing — the formula is the same with the roles of the parameters swapped.`,

      examples: `Assigning $5$ distinct employees to $3$ labeled projects: $3^5 = 243$ assignments.

Placing $4$ different books on $2$ shelves: $2^4 = 16$ placements.

Number of functions from a $3$-element set to a $4$-element set: $4^3 = 64$.`,

      'related concepts': `
- [Combination](!/combinatorics/definitions#combination)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
- [Permutation with Repetition](!/combinatorics/definitions#permutation_with_repetition)`
    }
  },

  // ============================================
  // BINOMIAL STRUCTURE
  // ============================================

  {
    id: 'binomial_coefficient',
    name: 'Binomial Coefficient',
    category: 'Binomial Structure',
    formula: `The binomial coefficient $\\binom{n}{k}$, read "$n$ choose $k$", is the number of $k$-element subsets of an $n$-element set. For non-negative integers $n$ and $k$ with $0 \\le k \\le n$, $\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$.`,
    link: { label: 'Binomial Coefficient', url: '/combinatorics/binomial-coefficient' },
    fields: {
      notation: `$\\binom{n}{k}$ — the standard modern form, used throughout mathematics.

$C(n,k)$ — common in introductory texts.

$C_n^k$ or $C_k^n$ — used in some European traditions; the position of the subscript and superscript varies by source.

\${}_nC_k$ — the form most calculator displays use.`,

      properties: `Boundary values: $\\binom{n}{0} = \\binom{n}{n} = 1$ for every $n \\ge 0$, and $\\binom{n}{k} = 0$ whenever $k > n$.

Symmetry: $\\binom{n}{k} = \\binom{n}{n-k}$ — choosing which $k$ to include is the same as choosing which $n - k$ to exclude.

Pascal's rule: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ — the recursive identity underlying [Pascal's triangle](!/combinatorics/definitions#pascals_triangle).

Generalization to real upper index: $\\binom{x}{k} = \\frac{x(x-1)\\cdots(x-k+1)}{k!}$ — the form used in Newton's generalized binomial theorem, where $x$ may be any real or complex number.`,

      examples: `$\\binom{5}{2} = 10$ — the number of $2$-element subsets of a $5$-element set.

$\\binom{10}{3} = 120$ — the number of ways to choose $3$ items from $10$ distinct items, ignoring order.

$\\binom{52}{5} = 2{,}598{,}960$ — the number of $5$-card poker hands from a standard $52$-card deck.

Row sum: $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$ — the entries of row $n$ of Pascal's triangle sum to the size of the power set of an $n$-element set.`,

      'related concepts': `
- [Combination](!/combinatorics/definitions#combination)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)
- [Pascal's Triangle](!/combinatorics/definitions#pascals_triangle)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'multinomial_coefficient',
    name: 'Multinomial Coefficient',
    category: 'Binomial Structure',
    formula: `The multinomial coefficient counts the number of ways to partition $n$ distinct items into $r$ labeled groups of specified sizes $k_1, k_2, \\ldots, k_r$ with $k_1 + k_2 + \\cdots + k_r = n$. Its value is $\\binom{n}{k_1, k_2, \\ldots, k_r} = \\frac{n!}{k_1! \\, k_2! \\cdots k_r!}$.`,
    link: { label: 'Multinomial Coefficient', url: '/combinatorics/binomial-coefficient#4' },
    fields: {
      properties: `The multinomial coefficient generalizes the [binomial coefficient](!/combinatorics/definitions#binomial_coefficient) to more than two groups. The binomial case is $r = 2$: $\\binom{n}{k} = \\binom{n}{k, \\, n-k}$.

Combinatorial interpretation: the count of distinct arrangements of $n$ items in which $k_1$ are of type 1, $k_2$ are of type 2, and so on. This is the same count that arises in [permutations with identical items](!/combinatorics/definitions#permutation_with_identical_items) — the two viewpoints (partitioning into labeled groups versus arranging with repetition of types) describe the same enumeration.

The multinomial coefficient is the coefficient of $x_1^{k_1} x_2^{k_2} \\cdots x_r^{k_r}$ in the expansion of $(x_1 + x_2 + \\cdots + x_r)^n$.`,

      examples: `Partitioning $10$ items into labeled groups of sizes $5, 3, 2$: $\\binom{10}{5, 3, 2} = \\frac{10!}{5! \\, 3! \\, 2!} = 2{,}520$.

Distinct arrangements of MISSISSIPPI: $\\binom{11}{1, 4, 4, 2} = \\frac{11!}{1! \\, 4! \\, 4! \\, 2!} = 34{,}650$.

Coefficient of $a^2 b c^3$ in $(a + b + c)^6$: $\\binom{6}{2, 1, 3} = 60$.`,

      'related concepts': `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Permutation with Identical Items](!/combinatorics/definitions#permutation_with_identical_items)
- [Partition into Groups](!/combinatorics/definitions#partition_into_groups)
- [Factorial](!/combinatorics/definitions#factorial)`
    }
  },

  {
    id: 'pascals_triangle',
    name: "Pascal's Triangle",
    category: 'Binomial Structure',
    formula: `Pascal's triangle is the triangular array of [binomial coefficients](!/combinatorics/definitions#binomial_coefficient) in which row $n$ (indexed from $0$) contains the $n + 1$ values $\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$, and each interior entry equals the sum of the two entries directly above it.`,
    link: { label: "Pascal's Triangle", url: '/combinatorics/binomial-coefficient#3' },
    fields: {
      properties: `The recursive rule generating the triangle is Pascal's rule: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$.

Symmetry: each row reads the same forwards and backwards, reflecting the identity $\\binom{n}{k} = \\binom{n}{n-k}$.

Row sums: the entries of row $n$ sum to $2^n$, the number of subsets of an $n$-element set.

Diagonals: the first diagonal contains $1, 1, 1, \\ldots$; the second contains the natural numbers $1, 2, 3, \\ldots$; the third contains the triangular numbers $1, 3, 6, 10, \\ldots$; the fourth contains the tetrahedral numbers $1, 4, 10, 20, \\ldots$. Sums along shallow diagonals produce the Fibonacci numbers.`,

      examples: `Row $4$ of Pascal's triangle: $1, 4, 6, 4, 1$ — the coefficients of $(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4a b^3 + b^4$.

Entry $\\binom{6}{2}$ sits in row $6$, position $2$ (zero-indexed): value $15$. By Pascal's rule, $\\binom{6}{2} = \\binom{5}{1} + \\binom{5}{2} = 5 + 10 = 15$.

Row $5$: $1, 5, 10, 10, 5, 1$ — sum $32 = 2^5$.`,

      'related concepts': `
- [Binomial Coefficient](!/combinatorics/definitions#binomial_coefficient)
- [Combination](!/combinatorics/definitions#combination)
- [Multinomial Coefficient](!/combinatorics/definitions#multinomial_coefficient)`
    }
  }

];

export default combinatoricsTermsList;