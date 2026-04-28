const setTheoryFormulasList = [
   
// ─── Set Theory Formulas — Batch 1 ───────────────────────────────────
// Categories: Idempotent, Commutative, Associative, Distributive
// 8 entries
// All section anchors verified against /set-theory/rules section data
// (rules#idempotent, rules#commutative, rules#associative, rules#distributive)
// All Gap entries — anchors exist on rules page, content currently empty


// ─── Category: Idempotent Laws (2 entries) ──────────────────────────


  {
    name: 'Idempotent Law - Union',
    entity: 'union',
    category: 'Idempotent Laws',
    formula: `$$A \\cup A = A$$`,
    link: { label: 'Idempotent Laws', url: '/set-theory/rules#idempotent' },
    fields: {
      explanation: `Combining a set with itself produces no new elements. The union absorbs duplicates by definition, so iterating the operation has no effect.`,
      related_formulas: `- [Idempotent Law - Intersection](!/set-theory/formulas#idempotent_law_-_intersection)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Idempotent Law - Intersection',
    entity: 'intersection',
    category: 'Idempotent Laws',
    formula: `$$A \\cap A = A$$`,
    link: { label: 'Idempotent Laws', url: '/set-theory/rules#idempotent' },
    fields: {
      explanation: `The elements common to $A$ and itself are exactly the elements of $A$. Repeated intersection collapses to a single set.`,
      related_formulas: `- [Idempotent Law - Union](!/set-theory/formulas#idempotent_law_-_union)`,
      related_definitions: `- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Commutative Laws (2 entries) ─────────────────────────


  {
    name: 'Commutative Law - Union',
    entity: 'union',
    category: 'Commutative Laws',
    formula: `$$A \\cup B = B \\cup A$$`,
    link: { label: 'Commutative Laws', url: '/set-theory/rules#commutative' },
    fields: {
      explanation: `The order of operands does not change the result of a union. Membership in $A \\cup B$ is symmetric in $A$ and $B$ — an element belongs if it is in either set.`,
      related_formulas: `- [Commutative Law - Intersection](!/set-theory/formulas#commutative_law_-_intersection)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Commutative Law - Intersection',
    entity: 'intersection',
    category: 'Commutative Laws',
    formula: `$$A \\cap B = B \\cap A$$`,
    link: { label: 'Commutative Laws', url: '/set-theory/rules#commutative' },
    fields: {
      explanation: `Order is irrelevant for intersection. The condition "$x \\in A$ and $x \\in B$" is logically symmetric.`,
      related_formulas: `- [Commutative Law - Union](!/set-theory/formulas#commutative_law_-_union)`,
      related_definitions: `- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Associative Laws (2 entries) ─────────────────────────


  {
    name: 'Associative Law - Union',
    entity: 'union',
    category: 'Associative Laws',
    formula: `$$(A \\cup B) \\cup C = A \\cup (B \\cup C)$$`,
    link: { label: 'Associative Laws', url: '/set-theory/rules#associative' },
    fields: {
      explanation: `Grouping is irrelevant when unioning three or more sets. Both sides equal the set of elements belonging to at least one of $A$, $B$, $C$. Associativity justifies writing $A \\cup B \\cup C$ without parentheses.`,
      related_formulas: `- [Associative Law - Intersection](!/set-theory/formulas#associative_law_-_intersection)\n- [Commutative Law - Union](!/set-theory/formulas#commutative_law_-_union)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Associative Law - Intersection',
    entity: 'intersection',
    category: 'Associative Laws',
    formula: `$$(A \\cap B) \\cap C = A \\cap (B \\cap C)$$`,
    link: { label: 'Associative Laws', url: '/set-theory/rules#associative' },
    fields: {
      explanation: `Both sides equal the set of elements belonging to all three of $A$, $B$, $C$. Allows the unambiguous notation $A \\cap B \\cap C$.`,
      related_formulas: `- [Associative Law - Union](!/set-theory/formulas#associative_law_-_union)\n- [Commutative Law - Intersection](!/set-theory/formulas#commutative_law_-_intersection)`,
      related_definitions: `- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Distributive Laws (2 entries) ────────────────────────


  {
    name: 'Distributive Law - Intersection over Union',
    entity: 'intersection',
    category: 'Distributive Laws',
    formula: `$$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$`,
    link: { label: 'Distributive Laws', url: '/set-theory/rules#distributive' },
    fields: {
      explanation: `Intersection distributes over union. To intersect $A$ with a union, intersect $A$ with each piece separately and combine. Mirrors multiplication distributing over addition in arithmetic.`,
      derivation: `Element argument. $x \\in A \\cap (B \\cup C)$ means $x \\in A$ and $(x \\in B$ or $x \\in C)$. By the distributive law of logic, this is equivalent to $(x \\in A$ and $x \\in B)$ or $(x \\in A$ and $x \\in C)$, which is $x \\in (A \\cap B) \\cup (A \\cap C)$.`,
      related_formulas: `- [Distributive Law - Union over Intersection](!/set-theory/formulas#distributive_law_-_union_over_intersection)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'Distributive Law - Union over Intersection',
    entity: 'union',
    category: 'Distributive Laws',
    formula: `$$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$`,
    link: { label: 'Distributive Laws', url: '/set-theory/rules#distributive' },
    fields: {
      explanation: `Union distributes over intersection. Unlike arithmetic, set algebra has full duality — both operations distribute over each other. Swapping $\\cup \\leftrightarrow \\cap$ in any identity yields another identity.`,
      derivation: `Element argument. $x \\in A \\cup (B \\cap C)$ means $x \\in A$ or $(x \\in B$ and $x \\in C)$. By the distributive law of logic, this is equivalent to $(x \\in A$ or $x \\in B)$ and $(x \\in A$ or $x \\in C)$, which is $x \\in (A \\cup B) \\cap (A \\cup C)$.`,
      related_formulas: `- [Distributive Law - Intersection over Union](!/set-theory/formulas#distributive_law_-_intersection_over_union)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

// ─── Set Theory Formulas — Batch 2 ───────────────────────────────────
// Categories: Identity, Domination, Complement, De Morgan, Absorption
// 11 entries
// All section anchors verified against /set-theory/rules section data
// Domination laws share rules#identity anchor (Rosen-style pairing)
// Absorption laws are Missing — empty link with TODO


// ─── Category: Identity Laws (2 entries) ────────────────────────────


  {
    name: 'Identity Law - Union',
    entity: 'union',
    category: 'Identity Laws',
    formula: `$$A \\cup \\emptyset = A$$`,
    link: { label: 'Identity Laws', url: '/set-theory/rules#identity' },
    fields: {
      explanation: `The empty set is the identity element for union. Adding "nothing" to $A$ leaves $A$ unchanged.`,
      related_formulas: `- [Identity Law - Intersection](!/set-theory/formulas#identity_law_-_intersection)\n- [Domination Law - Intersection](!/set-theory/formulas#domination_law_-_intersection)`,
      related_definitions: `- [Empty Set](!/set-theory/definitions#empty_set)\n- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Identity Law - Intersection',
    entity: 'intersection',
    category: 'Identity Laws',
    formula: `$$A \\cap U = A$$`,
    link: { label: 'Identity Laws', url: '/set-theory/rules#identity' },
    fields: {
      explanation: `The universal set is the identity element for intersection. Restricting $A$ to "everything" leaves $A$ unchanged.`,
      conditions: `Requires a fixed universal set $U$ with $A \\subseteq U$.`,
      related_formulas: `- [Identity Law - Union](!/set-theory/formulas#identity_law_-_union)\n- [Domination Law - Union](!/set-theory/formulas#domination_law_-_union)`,
      related_definitions: `- [Universal Set](!/set-theory/definitions#universal_set)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Domination Laws (2 entries) ──────────────────────────
// Share rules#identity anchor — site groups identity + domination together


  {
    name: 'Domination Law - Union',
    entity: 'union',
    category: 'Domination Laws',
    formula: `$$A \\cup U = U$$`,
    link: { label: 'Identity and Domination Laws', url: '/set-theory/rules#identity' },
    fields: {
      explanation: `The universal set absorbs any union — adding any subset to $U$ cannot exceed $U$. The dual of $A \\cap \\emptyset = \\emptyset$.`,
      conditions: `Requires $A \\subseteq U$.`,
      related_formulas: `- [Domination Law - Intersection](!/set-theory/formulas#domination_law_-_intersection)\n- [Identity Law - Intersection](!/set-theory/formulas#identity_law_-_intersection)`,
      related_definitions: `- [Universal Set](!/set-theory/definitions#universal_set)\n- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Domination Law - Intersection',
    entity: 'intersection',
    category: 'Domination Laws',
    formula: `$$A \\cap \\emptyset = \\emptyset$$`,
    link: { label: 'Identity and Domination Laws', url: '/set-theory/rules#identity' },
    fields: {
      explanation: `The empty set absorbs any intersection — there can be no element common to $A$ and a set with no elements. The dual of $A \\cup U = U$.`,
      related_formulas: `- [Domination Law - Union](!/set-theory/formulas#domination_law_-_union)\n- [Identity Law - Union](!/set-theory/formulas#identity_law_-_union)`,
      related_definitions: `- [Empty Set](!/set-theory/definitions#empty_set)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Complement Laws (3 entries) ──────────────────────────


  {
    name: 'Complement Law - Union',
    entity: 'complement',
    category: 'Complement Laws',
    formula: `$$A \\cup A^c = U$$`,
    link: { label: 'Complement Laws', url: '/set-theory/rules#complement' },
    fields: {
      explanation: `Every element of $U$ either belongs to $A$ or fails to belong to $A$ — the law of excluded middle expressed in set form. Together $A$ and its complement cover the universe.`,
      conditions: `$A^c$ is taken relative to a fixed universal set $U$.`,
      related_formulas: `- [Complement Law - Intersection](!/set-theory/formulas#complement_law_-_intersection)\n- [Double Complement Law](!/set-theory/formulas#double_complement_law)`,
      related_definitions: `- [Complement](!/set-theory/definitions#complement)\n- [Universal Set](!/set-theory/definitions#universal_set)`,
    },
  },

  {
    name: 'Complement Law - Intersection',
    entity: 'complement',
    category: 'Complement Laws',
    formula: `$$A \\cap A^c = \\emptyset$$`,
    link: { label: 'Complement Laws', url: '/set-theory/rules#complement' },
    fields: {
      explanation: `No element can simultaneously belong to $A$ and not belong to $A$ — the law of non-contradiction expressed in set form.`,
      related_formulas: `- [Complement Law - Union](!/set-theory/formulas#complement_law_-_union)\n- [Double Complement Law](!/set-theory/formulas#double_complement_law)`,
      related_definitions: `- [Complement](!/set-theory/definitions#complement)\n- [Empty Set](!/set-theory/definitions#empty_set)`,
    },
  },

  {
    name: 'Double Complement Law',
    entity: 'complement',
    category: 'Complement Laws',
    formula: `$$(A^c)^c = A$$`,
    link: { label: 'Complement Laws', url: '/set-theory/rules#complement' },
    fields: {
      explanation: `Negating membership twice returns the original condition. The complement operation is its own inverse — an involution.`,
      derivation: `$x \\in (A^c)^c$ iff $x \\notin A^c$ iff it is not the case that $x \\notin A$, which is $x \\in A$.`,
      related_formulas: `- [Complement Law - Union](!/set-theory/formulas#complement_law_-_union)\n- [Complement Law - Intersection](!/set-theory/formulas#complement_law_-_intersection)`,
      related_definitions: `- [Complement](!/set-theory/definitions#complement)`,
    },
  },



// ─── Category: De Morgan Laws (2 entries) ───────────────────────────


  {
    name: 'De Morgan Law - Union',
    entity: 'complement',
    category: 'De Morgan Laws',
    formula: `$$(A \\cup B)^c = A^c \\cap B^c$$`,
    link: { label: 'De Morgan Laws', url: '/set-theory/rules#de_morgan' },
    fields: {
      explanation: `The complement of a union is the intersection of complements. To not belong to $A \\cup B$, an element must fail to belong to both $A$ and $B$ separately.`,
      derivation: `$x \\in (A \\cup B)^c$ iff $x \\notin A \\cup B$ iff it is not the case that $x \\in A$ or $x \\in B$. By logical De Morgan, this is $x \\notin A$ and $x \\notin B$, i.e. $x \\in A^c \\cap B^c$.`,
      variants: `Generalizes to arbitrary collections:\n\n$$\\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c$$`,
      related_formulas: `- [De Morgan Law - Intersection](!/set-theory/formulas#de_morgan_law_-_intersection)`,
      related_definitions: `- [Complement](!/set-theory/definitions#complement)\n- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'De Morgan Law - Intersection',
    entity: 'complement',
    category: 'De Morgan Laws',
    formula: `$$(A \\cap B)^c = A^c \\cup B^c$$`,
    link: { label: 'De Morgan Laws', url: '/set-theory/rules#de_morgan' },
    fields: {
      explanation: `The complement of an intersection is the union of complements. To not belong to $A \\cap B$, an element need only fail to belong to one of $A$ or $B$.`,
      derivation: `$x \\in (A \\cap B)^c$ iff $x \\notin A \\cap B$ iff it is not the case that $x \\in A$ and $x \\in B$. By logical De Morgan, this is $x \\notin A$ or $x \\notin B$, i.e. $x \\in A^c \\cup B^c$.`,
      variants: `Generalizes to arbitrary collections:\n\n$$\\left(\\bigcap_i A_i\\right)^c = \\bigcup_i A_i^c$$`,
      related_formulas: `- [De Morgan Law - Union](!/set-theory/formulas#de_morgan_law_-_union)`,
      related_definitions: `- [Complement](!/set-theory/definitions#complement)\n- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



// ─── Category: Absorption Laws (2 entries) ──────────────────────────
// Missing — no anchor on /set-theory/rules. TODO when section is added.


  {
    name: 'Absorption Law - Union',
    entity: 'union',
    category: 'Absorption Laws',
    formula: `$$A \\cup (A \\cap B) = A$$`,
    // TODO: link target /set-theory/rules#absorption — section does not yet exist
    link: { label: '', url: '' },
    fields: {
      explanation: `Adding $A \\cap B$ to $A$ contributes nothing new — every element of $A \\cap B$ already lies in $A$. The inner intersection is "absorbed" by the outer union.`,
      derivation: `$A \\cap B \\subseteq A$, so $A \\cup (A \\cap B) \\subseteq A$. Conversely $A \\subseteq A \\cup (A \\cap B)$ trivially. By mutual containment the sets are equal.`,
      related_formulas: `- [Absorption Law - Intersection](!/set-theory/formulas#absorption_law_-_intersection)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'Absorption Law - Intersection',
    entity: 'intersection',
    category: 'Absorption Laws',
    formula: `$$A \\cap (A \\cup B) = A$$`,
    // TODO: link target /set-theory/rules#absorption — section does not yet exist
    link: { label: '', url: '' },
    fields: {
      explanation: `Restricting $A \\cup B$ to elements also in $A$ recovers exactly $A$. The inner union is "absorbed" by the outer intersection.`,
      derivation: `$A \\subseteq A \\cup B$, so $A \\cap (A \\cup B) = A$ since every element of $A$ already lies in $A \\cup B$. Formally: if $x \\in A$ then $x \\in A \\cup B$, hence $x \\in A \\cap (A \\cup B)$. The reverse inclusion is by definition of intersection.`,
      related_formulas: `- [Absorption Law - Union](!/set-theory/formulas#absorption_law_-_union)`,
      related_definitions: `- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },



  // ─── Set Theory Formulas — Batch 3 ───────────────────────────────────
// Categories: Cardinality, Operation Identities, Relationships
// 9 entries
// Anchors verified against /set-theory/cardinality, /set-theory/subsets,
// /set-theory/operations, /set-theory/relationships section data.
// Two Missing entries (Inclusion-Exclusion - Three Sets, Cardinality of
// Disjoint Union) carry empty link + TODO.


// ─── Category: Cardinality Formulas (6 entries) ─────────────────────


  {
    name: 'Inclusion-Exclusion - Two Sets',
    entity: 'cardinality',
    category: 'Cardinality Formulas',
    formula: `$$|A \\cup B| = |A| + |B| - |A \\cap B|$$`,
    link: { label: 'Cardinality - Finite Sets', url: '/set-theory/cardinality#2' },
    fields: {
      explanation: `Counting $A$ and $B$ separately double-counts elements in $A \\cap B$. Subtracting the intersection corrects for the overlap.`,
      conditions: `Requires $A$ and $B$ finite.`,
      variants: `When $A$ and $B$ are disjoint, $|A \\cap B| = 0$ and the formula reduces to $|A \\cup B| = |A| + |B|$.`,
      related_formulas: `- [Inclusion-Exclusion - Three Sets](!/set-theory/formulas#inclusion-exclusion_-_three_sets)\n- [Cardinality of Disjoint Union](!/set-theory/formulas#cardinality_of_disjoint_union)`,
      related_definitions: `- [Cardinality](!/set-theory/definitions#cardinality)\n- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'Inclusion-Exclusion - Three Sets',
    entity: 'cardinality',
    category: 'Cardinality Formulas',
    formula: `$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$`,
    // TODO: link target /set-theory/cardinality#inclusion_exclusion — section does not yet exist
    link: { label: '', url: '' },
    fields: {
      explanation: `Extends the two-set formula. Pairwise intersections are subtracted to undo double-counting; the triple intersection is added back because it was subtracted three times after being added three times.`,
      conditions: `Requires $A$, $B$, $C$ finite.`,
      variants: `General form for $n$ sets alternates inclusion and exclusion across all $\\binom{n}{k}$ intersections of size $k$:\n\n$$\\left|\\bigcup_{i=1}^{n} A_i\\right| = \\sum_{k=1}^{n} (-1)^{k+1} \\sum_{|S|=k} \\left|\\bigcap_{i \\in S} A_i\\right|$$`,
      related_formulas: `- [Inclusion-Exclusion - Two Sets](!/set-theory/formulas#inclusion-exclusion_-_two_sets)`,
      related_definitions: `- [Cardinality](!/set-theory/definitions#cardinality)\n- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'Cardinality of Disjoint Union',
    entity: 'cardinality',
    category: 'Cardinality Formulas',
    formula: `$$|A \\cup B| = |A| + |B| \\quad \\text{when } A \\cap B = \\emptyset$$`,
    // TODO: link target /set-theory/cardinality — could land on cardinality#2 once disjoint case is broken out
    link: { label: '', url: '' },
    fields: {
      explanation: `When sets share no elements, the size of the union is simply the sum of the sizes. Special case of inclusion-exclusion with $|A \\cap B| = 0$.`,
      conditions: `$A$ and $B$ finite and disjoint.`,
      variants: `For a finite collection of pairwise disjoint sets:\n\n$$\\left|\\bigcup_{i=1}^{n} A_i\\right| = \\sum_{i=1}^{n} |A_i|$$\n\nThis is the additivity property used in counting partitions.`,
      related_formulas: `- [Inclusion-Exclusion - Two Sets](!/set-theory/formulas#inclusion-exclusion_-_two_sets)`,
      related_definitions: `- [Cardinality](!/set-theory/definitions#cardinality)\n- [Disjoint Sets](!/set-theory/definitions#disjoint_sets)\n- [Union](!/set-theory/definitions#union)`,
    },
  },

  {
    name: 'Cardinality of Power Set',
    entity: 'power_set',
    category: 'Cardinality Formulas',
    formula: `$$|\\mathcal{P}(A)| = 2^{|A|}$$`,
    link: { label: 'Power Set', url: '/set-theory/subsets#5' },
    fields: {
      explanation: `For each element of $A$, a subset either includes it or excludes it — two independent choices per element. With $n$ elements this yields $2^n$ subsets.`,
      derivation: `Construct a subset by deciding, for each of the $|A| = n$ elements, whether to include it. Each decision is binary and independent, giving $2^n$ distinct subsets. Every subset arises from exactly one such choice sequence, so the count is exact.`,
      related_formulas: `- [Number of Proper Subsets](!/set-theory/formulas#number_of_proper_subsets)\n- [Cantor Theorem](!/set-theory/formulas#cantor_theorem)`,
      related_definitions: `- [Power Set](!/set-theory/definitions#power_set)\n- [Cardinality](!/set-theory/definitions#cardinality)`,
    },
  },

  {
    name: 'Number of Proper Subsets',
    entity: 'proper_subset',
    category: 'Cardinality Formulas',
    formula: `$$\\text{number of proper subsets of } A = 2^{|A|} - 1$$`,
    link: { label: 'Number of Subsets', url: '/set-theory/subsets#4' },
    fields: {
      explanation: `Among the $2^n$ subsets of an $n$-element set, exactly one is the set itself — excluded from the proper subsets. The remaining $2^n - 1$ are proper.`,
      conditions: `$A$ finite.`,
      related_formulas: `- [Cardinality of Power Set](!/set-theory/formulas#cardinality_of_power_set)`,
      related_definitions: `- [Proper Subset](!/set-theory/definitions#proper_subset)\n- [Cardinality](!/set-theory/definitions#cardinality)`,
    },
  },

  {
    name: 'Cantor Theorem',
    entity: 'cardinality',
    category: 'Cardinality Formulas',
    formula: `$$|A| < |\\mathcal{P}(A)|$$`,
    link: { label: 'Comparing Cardinalities', url: '/set-theory/cardinality#6' },
    fields: {
      explanation: `The power set is always strictly larger than the original set, finite or infinite. Implies an unbounded hierarchy of infinite cardinalities — there is no largest set.`,
      derivation: `Suppose for contradiction a bijection $f: A \\to \\mathcal{P}(A)$ exists. Define $D = \\{x \\in A \\mid x \\notin f(x)\\}$. Then $D \\in \\mathcal{P}(A)$, so $D = f(d)$ for some $d \\in A$. Asking whether $d \\in D$ yields a contradiction: $d \\in D$ iff $d \\notin f(d) = D$.`,
      related_formulas: `- [Cardinality of Power Set](!/set-theory/formulas#cardinality_of_power_set)`,
      related_definitions: `- [Power Set](!/set-theory/definitions#power_set)\n- [Cardinality](!/set-theory/definitions#cardinality)\n- [Uncountable Set](!/set-theory/definitions#uncountable_set)`,
    },
  },



// ─── Category: Operation Identities (2 entries) ─────────────────────


  {
    name: 'Difference as Intersection with Complement',
    entity: 'set_difference',
    category: 'Operation Identities',
    formula: `$$A \\setminus B = A \\cap B^c$$`,
    link: { label: 'Set Difference', url: '/set-theory/operations#4' },
    fields: {
      explanation: `Removing $B$ from $A$ is the same as intersecting $A$ with everything outside $B$. Lets set difference be expressed using only intersection and complement, which simplifies algebraic manipulation.`,
      derivation: `$x \\in A \\setminus B$ iff $x \\in A$ and $x \\notin B$, i.e. $x \\in A$ and $x \\in B^c$, which is $x \\in A \\cap B^c$.`,
      conditions: `Requires a fixed universal set $U$ for $B^c$ to be defined.`,
      related_formulas: `- [Symmetric Difference - Union Minus Intersection](!/set-theory/formulas#symmetric_difference_-_union_minus_intersection)`,
      related_definitions: `- [Set Difference](!/set-theory/definitions#set_difference)\n- [Complement](!/set-theory/definitions#complement)\n- [Intersection](!/set-theory/definitions#intersection)`,
    },
  },

  {
    name: 'Symmetric Difference - Union Minus Intersection',
    entity: 'symmetric_difference',
    category: 'Operation Identities',
    formula: `$$A \\triangle B = (A \\cup B) \\setminus (A \\cap B)$$`,
    link: { label: 'Symmetric Difference', url: '/set-theory/operations#5' },
    fields: {
      explanation: `Elements in exactly one of $A$, $B$ are precisely those in the union but not in the intersection. Equivalent to the original definition $A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$.`,
      derivation: `$(A \\cup B) \\setminus (A \\cap B)$ contains elements in $A$ or $B$ but not both. This matches the definition of symmetric difference exactly. Equivalence with $(A \\setminus B) \\cup (B \\setminus A)$ follows by a direct element argument.`,
      variants: `Original definition:\n\n$$A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$$`,
      related_formulas: `- [Difference as Intersection with Complement](!/set-theory/formulas#difference_as_intersection_with_complement)`,
      related_definitions: `- [Symmetric Difference](!/set-theory/definitions#symmetric_difference)\n- [Union](!/set-theory/definitions#union)\n- [Intersection](!/set-theory/definitions#intersection)\n- [Set Difference](!/set-theory/definitions#set_difference)`,
    },
  },



// ─── Category: Set Relationships (1 entry) ──────────────────────────


  {
    name: 'Set Equality Criterion',
    entity: 'equal_sets',
    category: 'Set Relationships',
    formula: `$$A = B \\iff (A \\subseteq B) \\land (B \\subseteq A)$$`,
    link: { label: 'Equal Sets', url: '/set-theory/relationships#1' },
    fields: {
      explanation: `Two sets are equal exactly when each is a subset of the other. The standard proof technique for set equality: prove both inclusions separately.`,
      derivation: `If $A = B$ then trivially $A \\subseteq B$ and $B \\subseteq A$. Conversely, if both inclusions hold, every element of $A$ is in $B$ and every element of $B$ is in $A$, so $A$ and $B$ have exactly the same elements and are therefore equal.`,
      related_formulas: ``,
      related_definitions: `- [Equal Sets](!/set-theory/definitions#equal_sets)\n- [Subset](!/set-theory/definitions#subset)`,
    },
  },



    
  ];
  
  export default setTheoryFormulasList;
  



   // {
    //   name: "Union of Sets",
    //   formula: "$A \\cup B = \\{ x \\mid x \\in A \\ \\text{or} \\ x \\in B \\}$",
    //   fields: {
    //     "Explanation": "The union of two sets brings together all the elements from both sets without any duplicates. Think of it as combining two groups into one bigger group that contains every unique member from both.",
    //     "$A$, $B$": "The sets being united",
    //     "$x$": "An element",
    //     "$x \\in A$": "Element $x$ is in set $A$",
    //     "$x \\in B$": "Element $x$ is in set $B$",
    //     "Example": "If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cup B = \\{1, 2, 3, 4, 5\\}$",
    //     "Use Cases": "Combining data sets, merging lists, unifying groups"
    //   },
    //   category: "Set Operations"
    // },
    // {
    //   name: "Intersection of Sets",
    //   formula: "$A \\cap B = \\{ x \\mid x \\in A \\ \\text{and} \\ x \\in B \\}$",
    //   fields: {
    //     "Explanation": "The intersection of two sets includes only the elements that are present in both sets. It's like finding common friends between two people.",
    //     "$A$, $B$": "The sets being intersected",
    //     "$x$": "An element",
    //     "$x \\in A$ and $x \\in B$": "Element $x$ is in both sets $A$ and $B$",
    //     "Example": "If $A = \\{2, 3, 4\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cap B = \\{3, 4\\}$",
    //     "Use Cases": "Finding commonalities, overlapping interests, shared attributes"
    //   },
    //   category: "Set Operations"
    // },
    // {
    //   name: "Set Difference",
    //   formula: "$A \\setminus B = \\{ x \\mid x \\in A \\ \\text{and} \\ x \\notin B \\}$",
    //   fields: {
    //     "Explanation": "The difference between two sets $A$ and $B$ consists of elements that are in $A$ but not in $B$. It's like removing certain items from your collection.",
    //     "$A$, $B$": "The sets involved",
    //     "$x$": "An element",
    //     "$x \\in A$": "Element $x$ is in set $A$",
    //     "$x \\notin B$": "Element $x$ is not in set $B$",
    //     "Example": "If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5\\}$, then $A \\setminus B = \\{1, 2\\}$",
    //     "Use Cases": "Excluding items, filtering data, subtracting groups"
    //   },
    //   category: "Set Operations"
    // },
    // {
    //   name: "Complement of a Set",
    //   formula: "$A' = U \\setminus A = \\{ x \\mid x \\in U \\ \\text{and} \\ x \\notin A \\}$",
    //   fields: {
    //     "Explanation": "The complement of a set includes everything that's not in the set, relative to a universal set $U$. It's like considering all the things you're not choosing.",
    //     "$A$": "The set you're taking the complement of",
    //     "$U$": "The universal set containing all possible elements",
    //     "$x$": "An element",
    //     "$x \\notin A$": "Element $x$ is not in set $A$",
    //     "$x \\in U$": "Element $x$ is in the universal set $U$",
    //     "Example": "If $U = \\{1, 2, 3, 4, 5\\}$ and $A = \\{2, 3\\}$, then $A' = \\{1, 4, 5\\}$",
    //     "Use Cases": "Finding what is excluded, logical negation, probability of the opposite event"
    //   },
    //   category: "Set Operations"
    // },
    // {
    //   name: "Cartesian Product",
    //   formula: "$A \\times B = \\{ (a, b) \\mid a \\in A, \\ b \\in B \\}$",
    //   fields: {
    //     "Explanation": "The Cartesian product pairs every element of set $A$ with every element of set $B$, forming ordered pairs. Imagine creating all possible combinations between two lists.",
    //     "$A$, $B$": "The sets being combined",
    //     "$(a, b)$": "An ordered pair with $a$ from $A$ and $b$ from $B$",
    //     "$a \\in A$": "Element $a$ is in set $A$",
    //     "$b \\in B$": "Element $b$ is in set $B$",
    //     "Example": "If $A = \\{1, 2\\}$ and $B = \\{x, y\\}$, then $A \\times B = \\{ (1, x), (1, y), (2, x), (2, y) \\}$",
    //     "Use Cases": "Creating coordinate grids, modeling relationships, forming combinations"
    //   },
    //   category: "Set Operations"
    // },
    // {
    //   name: "Commutative Law of Union",
    //   formula: "$A \\cup B = B \\cup A$",
    //   fields: {
    //     "Explanation": "The order in which you unite two sets doesn't matter; you'll end up with the same set. It's like mixing two ingredients together—the result is the same no matter the order.",
    //     "$A$, $B$": "The sets being united",
    //     "Example": "If $A = \\{apple, banana\\}$ and $B = \\{banana, cherry\\}$, then $A \\cup B = \\{apple, banana, cherry\\} = B \\cup A$",
    //     "Use Cases": "Simplifying set expressions, proving set identities"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Commutative Law of Intersection",
    //   formula: "$A \\cap B = B \\cap A$",
    //   fields: {
    //     "Explanation": "The order in which you find the common elements between two sets doesn't matter. It's like checking shared interests between two people; the overlap is the same regardless of who you start with.",
    //     "$A$, $B$": "The sets being intersected",
    //     "Example": "If $A = \\{red, blue\\}$ and $B = \\{blue, green\\}$, then $A \\cap B = \\{blue\\} = B \\cap A$",
    //     "Use Cases": "Simplifying calculations, proving properties of sets"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Associative Law of Union",
    //   formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
    //   fields: {
    //     "Explanation": "When uniting multiple sets, the grouping doesn't affect the result. It's like grouping ingredients differently when mixing; the final mix is the same.",
    //     "$A$, $B$, $C$": "The sets being united",
    //     "Example": "If $A = \\{1\\}$, $B = \\{2\\}$, $C = \\{3\\}$, then $(A \\cup B) \\cup C = A \\cup (B \\cup C) = \\{1, 2, 3\\}$",
    //     "Use Cases": "Rearranging expressions for simplification, computational efficiency"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Associative Law of Intersection",
    //   formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
    //   fields: {
    //     "Explanation": "When finding common elements among multiple sets, how you group them doesn't change the outcome. It's like narrowing down shared interests among friends; the sequence doesn't matter.",
    //     "$A$, $B$, $C$": "The sets being intersected",
    //     "Example": "If $A = \\{1,2\\}$, $B = \\{2,3\\}$, $C = \\{2,4\\}$, then $(A \\cap B) \\cap C = A \\cap (B \\cap C) = \\{2\\}$",
    //     "Use Cases": "Simplifying complex intersections, logical deductions"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Distributive Law of Intersection over Union",
    //   formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
    //   fields: {
    //     "Explanation": "Intersecting a set with the union of two sets is the same as uniting the intersections of the set with each of the two sets individually. It's like finding common items after combining two lists separately.",
    //     "$A$, $B$, $C$": "The sets involved",
    //     "Example": "If $A = \\{1,2,3\\}$, $B = \\{3,4\\}$, $C = \\{3,5\\}$, then $A \\cap (B \\cup C) = \\{3\\}$ and $(A \\cap B) \\cup (A \\cap C) = \\{3\\}$",
    //     "Use Cases": "Simplifying expressions, solving set equations"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Distributive Law of Union over Intersection",
    //   formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
    //   fields: {
    //     "Explanation": "Uniting a set with the intersection of two sets is the same as intersecting the unions of the set with each of the two sets individually. It's like combining your list with shared items of others, or finding common ground after including all possibilities.",
    //     "$A$, $B$, $C$": "The sets involved",
    //     "Example": "If $A = \\{1\\}$, $B = \\{1,2\\}$, $C = \\{1,3\\}$, then $A \\cup (B \\cap C) = \\{1\\}$ and $(A \\cup B) \\cap (A \\cup C) = \\{1,2,3\\} \\cap \\{1,3\\} = \\{1,3\\}$",
    //     "Use Cases": "Rewriting expressions for easier computation, logical reasoning"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Identity Law of Union",
    //   formula: "$A \\cup \\emptyset = A$",
    //   fields: {
    //     "Explanation": "Uniting any set with the empty set doesn't change the original set. It's like adding nothing to a group; the group stays the same.",
    //     "$A$": "Any set",
    //     "$\\emptyset$": "The empty set",
    //     "Example": "If $A = \\{1,2\\}$, then $A \\cup \\emptyset = \\{1,2\\}$",
    //     "Use Cases": "Simplifying expressions, understanding the role of the empty set"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Identity Law of Intersection",
    //   formula: "$A \\cap U = A$",
    //   fields: {
    //     "Explanation": "Intersecting any set with the universal set leaves the original set unchanged. It's like comparing your collection to everything possible; only your items matter.",
    //     "$A$": "Any set",
    //     "$U$": "The universal set",
    //     "Example": "If $A = \\{1,2\\}$ and $U$ contains all numbers, then $A \\cap U = \\{1,2\\}$",
    //     "Use Cases": "Simplifying expressions, theoretical foundations"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Idempotent Law of Union",
    //   formula: "$A \\cup A = A$",
    //   fields: {
    //     "Explanation": "Uniting a set with itself doesn't change it. It's like combining a group with itself; nothing new is added.",
    //     "$A$": "Any set",
    //     "Example": "If $A = \\{1,2,3\\}$, then $A \\cup A = \\{1,2,3\\}$",
    //     "Use Cases": "Simplifying redundant operations, mathematical proofs"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Idempotent Law of Intersection",
    //   formula: "$A \\cap A = A$",
    //   fields: {
    //     "Explanation": "Intersecting a set with itself leaves it unchanged. It's like finding common elements within the same group; everything matches.",
    //     "$A$": "Any set",
    //     "Example": "If $A = \\{x,y,z\\}$, then $A \\cap A = \\{x,y,z\\}$",
    //     "Use Cases": "Simplifying expressions, reducing complexity in proofs"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Double Complement Law",
    //   formula: "$(A')' = A$",
    //   fields: {
    //     "Explanation": "Taking the complement of a complement brings you back to the original set. It's like undoing a reversal; you return to where you started.",
    //     "$A$": "Any set",
    //     "$A'$": "Complement of set $A$",
    //     "$(A')'$": "Complement of the complement of $A$",
    //     "Example": "If $A = \\{1,2\\}$ within $U = \\{1,2,3,4\\}$, then $A' = \\{3,4\\}$ and $(A')' = \\{1,2\\} = A$",
    //     "Use Cases": "Simplifying complex expressions, logical negations"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Complement of Universal Set",
    //   formula: "$U' = \\emptyset$",
    //   fields: {
    //     "Explanation": "The complement of the universal set is the empty set because there are no elements outside of everything considered.",
    //     "$U$": "The universal set",
    //     "$U'$": "Complement of the universal set",
    //     "$\\emptyset$": "The empty set",
    //     "Example": "If $U = \\{all\\ elements\\}$, then $U' = \\emptyset$",
    //     "Use Cases": "Understanding limits, theoretical concepts"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Complement of Empty Set",
    //   formula: "$\\emptyset' = U$",
    //   fields: {
    //     "Explanation": "The complement of the empty set is the universal set because it contains everything that isn't in the empty set—which is everything.",
    //     "$\\emptyset$": "The empty set",
    //     "$U$": "The universal set",
    //     "$\\emptyset'$": "Complement of the empty set",
    //     "Example": "If $U = \\{1,2,3\\}$, then $\\emptyset' = \\{1,2,3\\}$",
    //     "Use Cases": "Establishing foundational concepts, simplifying expressions"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "De Morgan's First Law",
    //   formula: "$(A \\cup B)' = A' \\cap B'$",
    //   fields: {
    //     "Explanation": "The complement of the union of two sets is the intersection of their complements. It's like saying everything that's not in either set is what's not in $A$ and not in $B$.",
    //     "$A$, $B$": "Sets involved",
    //     "$A'$, $B'$": "Complements of $A$ and $B$",
    //     "Example": "If $U = \\{1,2,3,4\\}$, $A = \\{1,2\\}$, $B = \\{2,3\\}$, then $(A \\cup B)' = \\{4\\}$ and $A' \\cap B' = \\{4\\}$",
    //     "Use Cases": "Logical reasoning, simplifying complex expressions"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "De Morgan's Second Law",
    //   formula: "$(A \\cap B)' = A' \\cup B'$",
    //   fields: {
    //     "Explanation": "The complement of the intersection of two sets is the union of their complements. It's like everything not shared between $A$ and $B$ is everything not in $A$ or not in $B$.",
    //     "$A$, $B$": "Sets involved",
    //     "$A'$, $B'$": "Complements of $A$ and $B$",
    //     "Example": "If $U = \\{1,2,3,4\\}$, $A = \\{1,2\\}$, $B = \\{2,3\\}$, then $(A \\cap B)' = \\{1,3,4\\}$ and $A' \\cup B' = \\{1,3,4\\}$",
    //     "Use Cases": "Logical negations, simplifying expressions in probability and logic"
    //   },
    //   category: "Fundamental Properties"
    // },
    // {
    //   name: "Cardinality of a Set",
    //   formula: "$|A| = n$",
    //   fields: {
    //     "Explanation": "The cardinality of a set is the number of elements it contains. It's like counting how many items are in your collection.",
    //     "$A$": "The set",
    //     "$|A|$": "Number of elements in set $A$",
    //     "$n$": "A non-negative integer",
    //     "Example": "If $A = \\{a, b, c\\}$, then $|A| = 3$",
    //     "Use Cases": "Measuring set sizes, comparing quantities, finite mathematics"
    //   },
    //   category: "Cardinality"
    // },
    // {
    //   name: "Cardinality of Union of Two Sets",
    //   formula: "$|A \\cup B| = |A| + |B| - |A \\cap B|$",
    //   fields: {
    //     "Explanation": "When combining two sets, the total number of unique elements is the sum of their sizes minus the number of elements they share. This avoids double-counting shared elements.",
    //     "$A$, $B$": "Sets being united",
    //     "$|A|$, $|B|$": "Cardinalities of sets $A$ and $B$",
    //     "$|A \\cap B|$": "Number of elements common to both sets",
    //     "Example": "If $|A| = 5$, $|B| = 7$, and $|A \\cap B| = 2$, then $|A \\cup B| = 5 + 7 - 2 = 10$",
    //     "Use Cases": "Calculating probabilities, combining datasets, survey analysis"
    //   },
    //   category: "Cardinality"
    // },
    // {
    //   name: "Principle of Inclusion-Exclusion for Three Sets",
    //   formula: "$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$",
    //   fields: {
    //     "Explanation": "To find the total number of unique elements across three sets, we add their sizes, subtract the sizes of all pairwise intersections to correct for double-counting, and then add back the size of the triple intersection to correct for elements subtracted too many times.",
    //     "$A$, $B$, $C$": "Sets being united",
    //     "$|A|$, $|B|$, $|C|$": "Cardinalities of the sets",
    //     "$|A \\cap B|$, etc.": "Sizes of pairwise intersections",
    //     "$|A \\cap B \\cap C|$": "Size of the intersection of all three sets",
    //     "Example": "If $|A| = 10$, $|B| = 15$, $|C| = 20$, $|A \\cap B| = 5$, $|A \\cap C| = 4$, $|B \\cap C| = 6$, and $|A \\cap B \\cap C| = 2$, then $|A \\cup B \\cup C| = 10 + 15 + 20 - 5 - 4 - 6 + 2 = 32$",
    //     "Use Cases": "Complex probability calculations, overlapping group analysis, database queries"
    //   },
    //   category: "Cardinality"
    // },
    // {
    //   name: "Cardinality of Power Set",
    //   formula: "$|\\mathcal{P}(A)| = 2^{|A|}$",
    //   fields: {
    //     "Explanation": "The power set of $A$ includes all possible subsets of $A$, and its size is $2$ raised to the number of elements in $A$. It's like calculating all possible combinations of items you can select from your collection.",
    //     "$A$": "The original set",
    //     "$\\mathcal{P}(A)$": "Power set of $A$",
    //     "$|A|$": "Number of elements in set $A$",
    //     "$2^{|A|}$": "Total number of subsets",
    //     "Example": "If $A = \\{1,2,3\\}$, then $|\\mathcal{P}(A)| = 2^3 = 8$",
    //     "Use Cases": "Combinatorics, probability, binary representations"
    //   },
    //   category: "Power Set"
    // },
    // {
    //   name: "Transitivity of Subsets",
    //   formula: "If $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$",
    //   fields: {
    //     "Explanation": "If every element of $A$ is in $B$, and every element of $B$ is in $C$, then every element of $A$ must also be in $C$. It's like a chain of containment.",
    //     "$A$, $B$, $C$": "Sets involved",
    //     "$\\subseteq$": "Symbol meaning 'is a subset of'",
    //     "Example": "If $A = \\{1\\}$, $B = \\{1,2\\}$, and $C = \\{1,2,3\\}$, then $A \\subseteq C$",
    //     "Use Cases": "Logical deductions, hierarchical classifications"
    //   },
    //   category: "Important Rules"
    // },
    // {
    //   name: "Empty Set is a Subset of Every Set",
    //   formula: "$\\emptyset \\subseteq A$",
    //   fields: {
    //     "Explanation": "The empty set is considered a subset of any set because there are no elements in it that could possibly violate the subset condition. It's like an empty container fitting into any space.",
    //     "$\\emptyset$": "The empty set",
    //     "$A$": "Any set",
    //     "$\\subseteq$": "Symbol meaning 'is a subset of'",
    //     "Example": "For any set $A$, $\\emptyset \\subseteq A$",
    //     "Use Cases": "Mathematical proofs, defining foundational concepts"
    //   },
    //   category: "Important Rules"
    // },
    // {
    //   name: "Extensionality Principle",
    //   formula: "$A = B \\iff \\forall x (x \\in A \\iff x \\in B)$",
    //   fields: {
    //     "Explanation": "Two sets are equal if and only if they have exactly the same elements. It's like saying two collections are the same if everything in one is also in the other and vice versa.",
    //     "$A$, $B$": "Sets being compared",
    //     "$\\forall x$": "For all elements $x$",
    //     "$\\iff$": "If and only if",
    //     "$x \\in A$": "Element $x$ is in set $A$",
    //     "Example": "If $A = \\{1,2,3\\}$ and $B = \\{3,2,1\\}$, then $A = B$",
    //     "Use Cases": "Determining set equality, logical reasoning"
    //   },
    //   category: "Important Rules"
    // },
