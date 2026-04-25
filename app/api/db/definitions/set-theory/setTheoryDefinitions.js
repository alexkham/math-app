const setTheoryTermsList = [
    // =====================
  // CATEGORY: Fundamentals
  // =====================
 
  {
    name: "Set",
    formula: `An unordered collection of distinct objects, denoted $A = \\{a_1, a_2, \\ldots\\}$`,
    link: { label: "Set Theory — Definition", url: "/set-theory#definition" },
    fields: {
      "intuition": `A set is the most basic structure in mathematics — a container that holds objects without regard to order or repetition. Two sets with the same elements are identical regardless of how their elements are listed.`,
      "notation": `Sets are denoted by capital letters ($A, B, C$). Elements are listed inside curly braces: $A = \\{1, 2, 3\\}$ (enumerative) or described by a property: $A = \\{x \\mid x > 0\\}$ (descriptive / set-builder).`,
      "related concepts": `- [Element](!/set-theory/definitions#element) — the objects contained in a set
- [Empty Set](!/set-theory/definitions#empty_set) — a set with no elements
- [Universal Set](!/set-theory/definitions#universal_set) — the set containing everything under consideration
- [Cardinality](!/set-theory/definitions#cardinality) — the size of a set`,
    },
    category: "Fundamentals",
  },
 
  {
    name: "Element",
    formula: `An object $x$ belonging to a set $A$, written $x \\in A$`,
    link: { label: "Set Theory — Relationships", url: "/set-theory#relationships_between_sets" },
    fields: {
      "intuition": `An element is any individual object that belongs to a set. The membership relation $\\in$ is the most primitive notion in set theory — everything else is built from it.`,
      "notation": `$x \\in A$ means $x$ is an element of $A$. The negation $x \\notin A$ means $x$ does not belong to $A$. Elements can be numbers, symbols, other sets, or any well-defined objects.`,
      "related concepts": `- [Set](!/set-theory/definitions#set) — the collection an element belongs to
- [Cardinality](!/set-theory/definitions#cardinality) — counts the number of elements
- [Subset](!/set-theory/definitions#subset) — defined through element membership`,
    },
    category: "Fundamentals",
  },
 
  {
    name: "Empty Set",
    formula: `The unique set containing no elements, denoted $\\emptyset = \\{\\}$`,
    link: { label: "Set Theory — Cardinality and Types", url: "/set-theory#cardinality_and_types_of_sets" },
    fields: {
      "intuition": `The empty set is a valid set that simply has nothing in it. It serves as the identity element for [union](!/set-theory/definitions#union) ($A \\cup \\emptyset = A$) and as an annihilator for [intersection](!/set-theory/definitions#intersection) ($A \\cap \\emptyset = \\emptyset$).`,
      "properties": `The empty set is a [subset](!/set-theory/definitions#subset) of every set: $\\emptyset \\subseteq A$ for all $A$. This holds vacuously — there is no element in $\\emptyset$ that could fail to belong to $A$. Its [cardinality](!/set-theory/definitions#cardinality) is $|\\emptyset| = 0$.`,
      "related concepts": `- [Universal Set](!/set-theory/definitions#universal_set) — the opposite extreme
- [Complement](!/set-theory/definitions#complement) — $\\emptyset^c = U$ and $U^c = \\emptyset$
- [Subset](!/set-theory/definitions#subset) — $\\emptyset$ is a subset of every set`,
    },
    category: "Fundamentals",
  },
 
  {
    name: "Universal Set",
    formula: `The set $U$ containing all elements under consideration in a given context`,
    link: { label: "Set Theory — Cardinality and Types", url: "/set-theory#cardinality_and_types_of_sets" },
    fields: {
      "intuition": `The universal set defines the boundaries of discussion. Every set in the problem is a [subset](!/set-theory/definitions#subset) of $U$, and the [complement](!/set-theory/definitions#complement) of any set is taken relative to $U$.`,
      "examples": `If the discussion involves integers from 1 to 10, then $U = \\{1, 2, 3, \\ldots, 10\\}$. If working with all real numbers, then $U = \\mathbb{R}$.`,
      "related concepts": `- [Empty Set](!/set-theory/definitions#empty_set) — complementary extreme: $U^c = \\emptyset$
- [Complement](!/set-theory/definitions#complement) — defined relative to $U$
- [Set](!/set-theory/definitions#set) — every set is a subset of $U$`,
    },
    category: "Fundamentals",
  },
 
  {
    name: "Venn Diagram",
    formula: `A diagram using overlapping closed curves within a rectangle (representing $U$) to visualize set relationships and operations`,
    link: { label: "Venn Diagrams", url: "/set-theory/venn-diagrams" },
    fields: {
      "intuition": `Each closed curve represents a set, the rectangle represents the [universal set](!/set-theory/definitions#universal_set), and spatial overlaps correspond to [intersections](!/set-theory/definitions#intersection). Shading regions illustrates the result of [operations](!/set-theory/operations) like [union](!/set-theory/definitions#union), [complement](!/set-theory/definitions#complement), and [set difference](!/set-theory/definitions#set_difference).`,
      "examples": `Two overlapping circles for sets $A$ and $B$ divide the plane into four regions: elements only in $A$, elements only in $B$, elements in both ($A \\cap B$), and elements in neither (outside both circles but inside $U$). Three circles produce eight distinct regions.`,
      "related concepts": `- [Union](!/set-theory/definitions#union) — visualized as the total shaded area of all circles
- [Intersection](!/set-theory/definitions#intersection) — the overlapping region
- [Complement](!/set-theory/definitions#complement) — everything outside a circle but inside the rectangle
- [Disjoint Sets](!/set-theory/definitions#disjoint_sets) — non-overlapping circles`,
    },
    category: "Fundamentals",
  },
 
  // =====================
  // CATEGORY: Subsets
  // =====================
 
  {
    name: "Subset",
    formula: `$A \\subseteq B \\iff \\forall x\\,(x \\in A \\Rightarrow x \\in B)$`,
    link: { label: "Subsets", url: "/set-theory/subsets#1" },
    fields: {
      "intuition": `A set $A$ is a subset of $B$ when every [element](!/set-theory/definitions#element) of $A$ also belongs to $B$. The subset relation is the fundamental way to compare sets and establish containment hierarchies.`,
      "properties": `Every set is a subset of itself: $A \\subseteq A$. The [empty set](!/set-theory/definitions#empty_set) is a subset of every set: $\\emptyset \\subseteq A$. If $A \\subseteq B$ and $B \\subseteq A$, then $A = B$ (this is the standard method for proving [set equality](!/set-theory/definitions#equal_sets)).`,
      "related concepts": `- [Proper Subset](!/set-theory/definitions#proper_subset) — subset with strict containment
- [Superset](!/set-theory/definitions#superset) — the inverse relation
- [Power Set](!/set-theory/definitions#power_set) — the collection of all subsets
- [Equal Sets](!/set-theory/definitions#equal_sets) — mutual subset containment`,
    },
    category: "Subsets",
  },
 
  {
    name: "Proper Subset",
    formula: `$A \\subset B \\iff (A \\subseteq B) \\land (A \\neq B)$`,
    link: { label: "Subsets — Proper Subsets", url: "/set-theory/subsets#2" },
    fields: {
      "intuition": `A proper subset is a [subset](!/set-theory/definitions#subset) that is strictly smaller than the containing set — at least one [element](!/set-theory/definitions#element) of $B$ does not belong to $A$.`,
      "examples": `$\\{1, 2\\} \\subset \\{1, 2, 3\\}$ because $3 \\in B$ but $3 \\notin A$. However, $\\{1, 2, 3\\} \\not\\subset \\{1, 2, 3\\}$ because the sets are equal. A set with $n$ elements has $2^n - 1$ proper subsets.`,
      "related concepts": `- [Subset](!/set-theory/definitions#subset) — includes the non-strict case
- [Superset](!/set-theory/definitions#superset) — the inverse relation
- [Empty Set](!/set-theory/definitions#empty_set) — proper subset of every non-empty set`,
    },
    category: "Subsets",
  },
 
  {
    name: "Superset",
    formula: `$B \\supseteq A \\iff A \\subseteq B$`,
    link: { label: "Subsets — Superset", url: "/set-theory/subsets#3" },
    fields: {
      "intuition": `The superset relation is the inverse of the [subset](!/set-theory/definitions#subset) relation. Saying $B \\supseteq A$ is the same as saying $A \\subseteq B$, viewed from $B$'s perspective.`,
      "notation": `$B \\supseteq A$ means $B$ is a superset of $A$ (contains all elements of $A$). $B \\supset A$ means $B$ is a proper superset of $A$ (contains $A$ and at least one additional element).`,
      "related concepts": `- [Subset](!/set-theory/definitions#subset) — the inverse relation
- [Proper Subset](!/set-theory/definitions#proper_subset) — strict containment from the smaller set's perspective`,
    },
    category: "Subsets",
  },
 
  {
    name: "Power Set",
    formula: `$\\mathcal{P}(A) = \\{S \\mid S \\subseteq A\\}$`,
    link: { label: "Subsets — Power Set", url: "/set-theory/subsets#5" },
    fields: {
      "intuition": `The power set of $A$ is the set of all possible [subsets](!/set-theory/definitions#subset) of $A$, including the [empty set](!/set-theory/definitions#empty_set) and $A$ itself. It captures every way to select elements from $A$.`,
      "properties": `If $|A| = n$, then $|\\mathcal{P}(A)| = 2^n$. The power set always contains at least two elements when $A$ is non-empty: $\\emptyset$ and $A$ itself. The power set of the empty set is $\\mathcal{P}(\\emptyset) = \\{\\emptyset\\}$, which has [cardinality](!/set-theory/definitions#cardinality) 1.`,
      "examples": `For $A = \\{a, b\\}$:
 
$$\\mathcal{P}(A) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a, b\\}\\}$$
 
Four subsets, matching $2^2 = 4$.`,
      "related concepts": `- [Subset](!/set-theory/definitions#subset) — each element of the power set is a subset
- [Cardinality](!/set-theory/definitions#cardinality) — $|\\mathcal{P}(A)| = 2^{|A|}$`,
    },
    category: "Subsets",
  },
 
  // =====================
  // CATEGORY: Relationships
  // =====================
 
  {
    name: "Equal Sets",
    formula: `$A = B \\iff \\forall x\\,(x \\in A \\iff x \\in B)$`,
    link: { label: "Set Relationships — Equal Sets", url: "/set-theory/relationships#1" },
    fields: {
      "intuition": `Two sets are equal when they contain exactly the same [elements](!/set-theory/definitions#element). Order and repetition are irrelevant — only membership matters.`,
      "properties": `Set equality is equivalent to mutual [subset](!/set-theory/definitions#subset) containment: $A = B \\iff (A \\subseteq B) \\land (B \\subseteq A)$. This double-inclusion method is the standard proof technique for establishing equality of sets.`,
      "examples": `$\\{1, 2, 3\\} = \\{3, 1, 2\\}$ (order irrelevant). $\\{1, 2, 2, 3\\} = \\{1, 2, 3\\}$ (repetition irrelevant).`,
      "related concepts": `- [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — same size but possibly different elements
- [Subset](!/set-theory/definitions#subset) — building block of the equality proof`,
    },
    category: "Relationships",
  },
 
  {
    name: "Equivalent Sets",
    formula: `$A \\sim B \\iff |A| = |B|$`,
    link: { label: "Set Relationships — Equivalent Sets", url: "/set-theory/relationships#2" },
    fields: {
      "intuition": `Two sets are equivalent when a bijection (one-to-one correspondence) exists between them. They have the same [cardinality](!/set-theory/definitions#cardinality) but may contain entirely different elements.`,
      "examples": `$\\{a, b, c\\}$ and $\\{1, 2, 3\\}$ are equivalent: $|A| = |B| = 3$. [Equal sets](!/set-theory/definitions#equal_sets) are always equivalent, but equivalent sets need not be equal.`,
      "related concepts": `- [Equal Sets](!/set-theory/definitions#equal_sets) — same elements, a stricter condition
- [Cardinality](!/set-theory/definitions#cardinality) — the measure that equivalent sets share
- [Countable Set](!/set-theory/definitions#countable_set) — equivalence with $\\mathbb{N}$`,
    },
    category: "Relationships",
  },
 
  {
    name: "Disjoint Sets",
    formula: `$A \\cap B = \\emptyset$`,
    link: { label: "Set Relationships — Disjoint Sets", url: "/set-theory/relationships#3" },
    fields: {
      "intuition": `Two sets are disjoint when they share no [elements](!/set-theory/definitions#element) — their [intersection](!/set-theory/definitions#intersection) is the [empty set](!/set-theory/definitions#empty_set). In a [Venn diagram](!/set-theory/definitions#venn_diagram), disjoint sets appear as non-overlapping circles.`,
      "examples": `The sets of even and odd integers are disjoint. $\\{1, 2, 3\\}$ and $\\{4, 5, 6\\}$ are disjoint. Note that $\\{1, 2\\}$ and $\\{2, 3\\}$ are not disjoint because $2$ belongs to both.`,
      "related concepts": `- [Overlapping Sets](!/set-theory/definitions#overlapping_sets) — the opposite: non-empty intersection
- [Partition](!/set-theory/definitions#partition) — built from mutually disjoint subsets
- [Intersection](!/set-theory/definitions#intersection) — disjoint means intersection is empty`,
    },
    category: "Relationships",
  },
 
  {
    name: "Overlapping Sets",
    formula: `$A \\cap B \\neq \\emptyset$`,
    link: { label: "Set Relationships — Overlapping Sets", url: "/set-theory/relationships#4" },
    fields: {
      "intuition": `Two sets overlap when they share at least one [element](!/set-theory/definitions#element) — their [intersection](!/set-theory/definitions#intersection) is non-empty. This is the negation of [disjointness](!/set-theory/definitions#disjoint_sets).`,
      "examples": `$\\{1, 2, 3\\}$ and $\\{2, 3, 4\\}$ overlap because $\\{2, 3\\}$ belongs to both. Any set overlaps with itself (unless it is the [empty set](!/set-theory/definitions#empty_set)).`,
      "related concepts": `- [Disjoint Sets](!/set-theory/definitions#disjoint_sets) — the opposite: empty intersection
- [Intersection](!/set-theory/definitions#intersection) — the shared elements
- [Symmetric Difference](!/set-theory/definitions#symmetric_difference) — elements in one but not both`,
    },
    category: "Relationships",
  },
 
  {
    name: "Partition",
    formula: `A collection $\\{A_1, A_2, \\ldots, A_n\\}$ of non-empty subsets of $S$ such that $A_i \\cap A_j = \\emptyset$ for $i \\neq j$ and $\\bigcup_{i=1}^{n} A_i = S$`,
    link: { label: "Set Relationships — Partitions", url: "/set-theory/relationships#5" },
    fields: {
      "intuition": `A partition divides a [set](!/set-theory/definitions#set) into non-overlapping pieces that together cover the entire set. Every [element](!/set-theory/definitions#element) of $S$ belongs to exactly one piece.`,
      "examples": `The sets $\\{1, 3, 5\\}$ and $\\{2, 4, 6\\}$ partition $\\{1, 2, 3, 4, 5, 6\\}$: they are [disjoint](!/set-theory/definitions#disjoint_sets) and their [union](!/set-theory/definitions#union) is the whole set. The sets $\\{\\text{even integers}\\}$ and $\\{\\text{odd integers}\\}$ partition $\\mathbb{Z}$.`,
      "related concepts": `- [Disjoint Sets](!/set-theory/definitions#disjoint_sets) — partition pieces must be mutually disjoint
- [Union](!/set-theory/definitions#union) — partition pieces must unite to form the whole set
- [Subset](!/set-theory/definitions#subset) — each piece is a subset of $S$`,
    },
    category: "Relationships",
  },
 
  // =====================
  // CATEGORY: Operations
  // =====================
 
  {
    name: "Union",
    formula: `$A \\cup B = \\{x \\mid x \\in A \\text{ or } x \\in B\\}$`,
    link: { label: "Operations — Union", url: "/set-theory/operations#1" },
    fields: {
      "intuition": `The union collects every [element](!/set-theory/definitions#element) that appears in at least one of the sets. The "or" is inclusive — elements belonging to both are included once.`,
      "properties": `Commutative: $A \\cup B = B \\cup A$. Associative: $(A \\cup B) \\cup C = A \\cup (B \\cup C)$. Identity: $A \\cup \\emptyset = A$. Domination: $A \\cup U = U$. Idempotent: $A \\cup A = A$.`,
      "related concepts": `- [Intersection](!/set-theory/definitions#intersection) — elements in both sets
- [Set Difference](!/set-theory/definitions#set_difference) — elements in one but not the other
- [Venn Diagram](!/set-theory/definitions#venn_diagram) — union is the total shaded area`,
    },
    category: "Operations",
  },
 
  {
    name: "Intersection",
    formula: `$A \\cap B = \\{x \\mid x \\in A \\text{ and } x \\in B\\}$`,
    link: { label: "Operations — Intersection", url: "/set-theory/operations#2" },
    fields: {
      "intuition": `The intersection isolates the [elements](!/set-theory/definitions#element) that belong to both sets simultaneously. If no such elements exist, the intersection is the [empty set](!/set-theory/definitions#empty_set) and the sets are [disjoint](!/set-theory/definitions#disjoint_sets).`,
      "properties": `Commutative: $A \\cap B = B \\cap A$. Associative: $(A \\cap B) \\cap C = A \\cap (B \\cap C)$. Identity: $A \\cap U = A$. Annihilation: $A \\cap \\emptyset = \\emptyset$. Idempotent: $A \\cap A = A$.`,
      "related concepts": `- [Union](!/set-theory/definitions#union) — elements in at least one set
- [Disjoint Sets](!/set-theory/definitions#disjoint_sets) — intersection is empty
- [Overlapping Sets](!/set-theory/definitions#overlapping_sets) — intersection is non-empty`,
    },
    category: "Operations",
  },
 
  {
    name: "Complement",
    formula: `$A^c = \\{x \\in U \\mid x \\notin A\\}$`,
    link: { label: "Operations — Complement", url: "/set-theory/operations#3" },
    fields: {
      "intuition": `The complement of $A$ is everything in the [universal set](!/set-theory/definitions#universal_set) that does not belong to $A$. It depends entirely on the choice of $U$.`,
      "properties": `Double complement: $(A^c)^c = A$. Complement of extremes: $U^c = \\emptyset$ and $\\emptyset^c = U$. With [union](!/set-theory/definitions#union) and [intersection](!/set-theory/definitions#intersection): $A \\cup A^c = U$ and $A \\cap A^c = \\emptyset$.`,
      "notation": `Common notations include $A^c$, $\\overline{A}$, and $A'$. All denote the same operation.`,
      "related concepts": `- [Universal Set](!/set-theory/definitions#universal_set) — complement is taken relative to $U$
- [Set Difference](!/set-theory/definitions#set_difference) — $A \\setminus B = A \\cap B^c$
- [Empty Set](!/set-theory/definitions#empty_set) — $A \\cap A^c = \\emptyset$`,
    },
    category: "Operations",
  },
 
  {
    name: "Set Difference",
    formula: `$A \\setminus B = \\{x \\mid x \\in A \\text{ and } x \\notin B\\}$`,
    link: { label: "Operations — Set Difference", url: "/set-theory/operations#4" },
    fields: {
      "intuition": `The difference $A \\setminus B$ removes from $A$ everything that also belongs to $B$, leaving only the [elements](!/set-theory/definitions#element) exclusive to $A$.`,
      "properties": `Not commutative: $A \\setminus B \\neq B \\setminus A$ in general. Equivalent to intersection with complement: $A \\setminus B = A \\cap B^c$. Self-difference: $A \\setminus A = \\emptyset$.`,
      "notation": `Written $A \\setminus B$ or $A - B$. Both are standard.`,
      "related concepts": `- [Complement](!/set-theory/definitions#complement) — $A^c = U \\setminus A$
- [Symmetric Difference](!/set-theory/definitions#symmetric_difference) — combines both one-sided differences
- [Intersection](!/set-theory/definitions#intersection) — $A \\setminus B = A \\cap B^c$`,
    },
    category: "Operations",
  },
 
  {
    name: "Symmetric Difference",
    formula: `$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$`,
    link: { label: "Operations — Symmetric Difference", url: "/set-theory/operations#5" },
    fields: {
      "intuition": `The symmetric difference collects [elements](!/set-theory/definitions#element) that belong to exactly one of the two sets — those in $A$ but not $B$, together with those in $B$ but not $A$. It excludes the [intersection](!/set-theory/definitions#intersection).`,
      "properties": `Commutative: $A \\triangle B = B \\triangle A$. Associative: $(A \\triangle B) \\triangle C = A \\triangle (B \\triangle C)$. Identity: $A \\triangle \\emptyset = A$. Self-inverse: $A \\triangle A = \\emptyset$. Equivalent form: $A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$.`,
      "related concepts": `- [Set Difference](!/set-theory/definitions#set_difference) — each half of the symmetric difference
- [Union](!/set-theory/definitions#union) — $A \\triangle B \\subseteq A \\cup B$
- [Disjoint Sets](!/set-theory/definitions#disjoint_sets) — when $A \\cap B = \\emptyset$, $A \\triangle B = A \\cup B$`,
    },
    category: "Operations",
  },
 
  // =====================
  // CATEGORY: Cardinality
  // =====================
 
  {
    name: "Cardinality",
    formula: `$|A|$ — the number of elements in $A$`,
    link: { label: "Cardinality — Definition", url: "/set-theory/cardinality#1" },
    fields: {
      "intuition": `Cardinality measures the size of a [set](!/set-theory/definitions#set). For [finite sets](!/set-theory/definitions#finite_set), it is simply a count. For [infinite sets](!/set-theory/definitions#infinite_set), cardinality distinguishes different "sizes" of infinity through bijections.`,
      "notation": `Common notations: $|A|$, $\\text{card}(A)$, $\\#A$, $n(A)$. All denote the same quantity.`,
      "examples": `$|\\{a, b, c\\}| = 3$. $|\\emptyset| = 0$. $|\\mathbb{N}| = \\aleph_0$ (the smallest infinite cardinal).`,
      "related concepts": `- [Finite Set](!/set-theory/definitions#finite_set) — cardinality is a natural number
- [Infinite Set](!/set-theory/definitions#infinite_set) — cardinality requires transfinite cardinals
- [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — sets with the same cardinality
- [Power Set](!/set-theory/definitions#power_set) — $|\\mathcal{P}(A)| = 2^{|A|}$`,
    },
    category: "Cardinality",
  },
 
  {
    name: "Finite Set",
    formula: `A set $A$ such that $|A| = n$ for some $n \\in \\mathbb{N}_0$`,
    link: { label: "Cardinality — Finite Sets", url: "/set-theory/cardinality#2" },
    fields: {
      "intuition": `A finite set contains a countable, bounded number of [elements](!/set-theory/definitions#element). Its [cardinality](!/set-theory/definitions#cardinality) is a non-negative integer. The [empty set](!/set-theory/definitions#empty_set) is the smallest finite set with $|A| = 0$.`,
      "examples": `$\\{1, 2, 3, 4, 5\\}$ is finite with $|A| = 5$. The English alphabet $\\{a, b, \\ldots, z\\}$ is finite with $|A| = 26$. A set with millions of elements is still finite as long as the count terminates.`,
      "related concepts": `- [Infinite Set](!/set-theory/definitions#infinite_set) — not finite
- [Cardinality](!/set-theory/definitions#cardinality) — a natural number for finite sets
- [Power Set](!/set-theory/definitions#power_set) — a finite set with $n$ elements has $2^n$ subsets`,
    },
    category: "Cardinality",
  },
 
  {
    name: "Infinite Set",
    formula: `A set $A$ that cannot be put in bijection with any $\\{1, 2, \\ldots, n\\}$`,
    link: { label: "Cardinality — Infinite Sets", url: "/set-theory/cardinality#3" },
    fields: {
      "intuition": `An infinite set has no finite bound on the number of its [elements](!/set-theory/definitions#element). Infinite sets come in different sizes: [countably](!/set-theory/definitions#countable_set) infinite (like $\\mathbb{N}$) and [uncountably](!/set-theory/definitions#uncountable_set) infinite (like $\\mathbb{R}$).`,
      "examples": `$\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$ (countably infinite). $\\mathbb{R}$ (uncountably infinite). The set of even numbers $\\{2, 4, 6, \\ldots\\}$ is infinite and has the same [cardinality](!/set-theory/definitions#cardinality) as $\\mathbb{N}$.`,
      "related concepts": `- [Finite Set](!/set-theory/definitions#finite_set) — the complementary concept
- [Countable Set](!/set-theory/definitions#countable_set) — infinite but listable
- [Uncountable Set](!/set-theory/definitions#uncountable_set) — too large to list`,
    },
    category: "Cardinality",
  },
 
  {
    name: "Countable Set",
    formula: `A set $A$ such that $|A| \\leq |\\mathbb{N}|$ — either finite or in bijection with $\\mathbb{N}$`,
    link: { label: "Cardinality — Countable Sets", url: "/set-theory/cardinality#4" },
    fields: {
      "intuition": `A countable set is one whose [elements](!/set-theory/definitions#element) can be listed in a sequence, even if the sequence is infinite. Every [element](!/set-theory/definitions#element) will eventually appear at some position in the list.`,
      "examples": `$\\mathbb{N}$, $\\mathbb{Z}$, and $\\mathbb{Q}$ are all countably infinite — bijections with $\\mathbb{N}$ exist for each. Every [finite set](!/set-theory/definitions#finite_set) is also countable.`,
      "related concepts": `- [Uncountable Set](!/set-theory/definitions#uncountable_set) — cannot be listed
- [Cardinality](!/set-theory/definitions#cardinality) — countable sets have cardinality at most $\\aleph_0$
- [Equivalent Sets](!/set-theory/definitions#equivalent_sets) — countably infinite sets are equivalent to $\\mathbb{N}$`,
    },
    category: "Cardinality",
  },
 
  {
    name: "Uncountable Set",
    formula: `A set $A$ such that $|A| > |\\mathbb{N}|$ — no bijection with $\\mathbb{N}$ exists`,
    link: { label: "Cardinality — Uncountable Sets", url: "/set-theory/cardinality#5" },
    fields: {
      "intuition": `An uncountable set is "too large" to be listed in a sequence. No matter how you try to match its [elements](!/set-theory/definitions#element) with natural numbers, some elements will always be missed.`,
      "examples": `$\\mathbb{R}$ (the real numbers) is the standard example. The interval $(0, 1)$ is also uncountable. The [power set](!/set-theory/definitions#power_set) of any countably infinite set is uncountable: $|\\mathcal{P}(\\mathbb{N})| > |\\mathbb{N}|$.`,
      "related concepts": `- [Countable Set](!/set-theory/definitions#countable_set) — the smaller category
- [Cardinality](!/set-theory/definitions#cardinality) — uncountable means cardinality exceeds $\\aleph_0$
- [Power Set](!/set-theory/definitions#power_set) — always produces a set of strictly larger cardinality`,
    },
    category: "Cardinality",
  },
   
];

export default setTheoryTermsList;