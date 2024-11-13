const setTheoryFormulasList = [
    {
      name: "Union of Sets",
      formula: "$A \\cup B = \\{ x \\mid x \\in A \\ \\text{or} \\ x \\in B \\}$",
      fields: {
        "Explanation": "The union of two sets brings together all the elements from both sets without any duplicates. Think of it as combining two groups into one bigger group that contains every unique member from both.",
        "$A$, $B$": "The sets being united",
        "$x$": "An element",
        "$x \\in A$": "Element $x$ is in set $A$",
        "$x \\in B$": "Element $x$ is in set $B$",
        "Example": "If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cup B = \\{1, 2, 3, 4, 5\\}$",
        "Use Cases": "Combining data sets, merging lists, unifying groups"
      },
      category: "Set Operations"
    },
    {
      name: "Intersection of Sets",
      formula: "$A \\cap B = \\{ x \\mid x \\in A \\ \\text{and} \\ x \\in B \\}$",
      fields: {
        "Explanation": "The intersection of two sets includes only the elements that are present in both sets. It's like finding common friends between two people.",
        "$A$, $B$": "The sets being intersected",
        "$x$": "An element",
        "$x \\in A$ and $x \\in B$": "Element $x$ is in both sets $A$ and $B$",
        "Example": "If $A = \\{2, 3, 4\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cap B = \\{3, 4\\}$",
        "Use Cases": "Finding commonalities, overlapping interests, shared attributes"
      },
      category: "Set Operations"
    },
    {
      name: "Set Difference",
      formula: "$A \\setminus B = \\{ x \\mid x \\in A \\ \\text{and} \\ x \\notin B \\}$",
      fields: {
        "Explanation": "The difference between two sets $A$ and $B$ consists of elements that are in $A$ but not in $B$. It's like removing certain items from your collection.",
        "$A$, $B$": "The sets involved",
        "$x$": "An element",
        "$x \\in A$": "Element $x$ is in set $A$",
        "$x \\notin B$": "Element $x$ is not in set $B$",
        "Example": "If $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5\\}$, then $A \\setminus B = \\{1, 2\\}$",
        "Use Cases": "Excluding items, filtering data, subtracting groups"
      },
      category: "Set Operations"
    },
    {
      name: "Complement of a Set",
      formula: "$A' = U \\setminus A = \\{ x \\mid x \\in U \\ \\text{and} \\ x \\notin A \\}$",
      fields: {
        "Explanation": "The complement of a set includes everything that's not in the set, relative to a universal set $U$. It's like considering all the things you're not choosing.",
        "$A$": "The set you're taking the complement of",
        "$U$": "The universal set containing all possible elements",
        "$x$": "An element",
        "$x \\notin A$": "Element $x$ is not in set $A$",
        "$x \\in U$": "Element $x$ is in the universal set $U$",
        "Example": "If $U = \\{1, 2, 3, 4, 5\\}$ and $A = \\{2, 3\\}$, then $A' = \\{1, 4, 5\\}$",
        "Use Cases": "Finding what is excluded, logical negation, probability of the opposite event"
      },
      category: "Set Operations"
    },
    {
      name: "Cartesian Product",
      formula: "$A \\times B = \\{ (a, b) \\mid a \\in A, \\ b \\in B \\}$",
      fields: {
        "Explanation": "The Cartesian product pairs every element of set $A$ with every element of set $B$, forming ordered pairs. Imagine creating all possible combinations between two lists.",
        "$A$, $B$": "The sets being combined",
        "$(a, b)$": "An ordered pair with $a$ from $A$ and $b$ from $B$",
        "$a \\in A$": "Element $a$ is in set $A$",
        "$b \\in B$": "Element $b$ is in set $B$",
        "Example": "If $A = \\{1, 2\\}$ and $B = \\{x, y\\}$, then $A \\times B = \\{ (1, x), (1, y), (2, x), (2, y) \\}$",
        "Use Cases": "Creating coordinate grids, modeling relationships, forming combinations"
      },
      category: "Set Operations"
    },
    {
      name: "Commutative Law of Union",
      formula: "$A \\cup B = B \\cup A$",
      fields: {
        "Explanation": "The order in which you unite two sets doesn't matter; you'll end up with the same set. It's like mixing two ingredients together—the result is the same no matter the order.",
        "$A$, $B$": "The sets being united",
        "Example": "If $A = \\{apple, banana\\}$ and $B = \\{banana, cherry\\}$, then $A \\cup B = \\{apple, banana, cherry\\} = B \\cup A$",
        "Use Cases": "Simplifying set expressions, proving set identities"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Commutative Law of Intersection",
      formula: "$A \\cap B = B \\cap A$",
      fields: {
        "Explanation": "The order in which you find the common elements between two sets doesn't matter. It's like checking shared interests between two people; the overlap is the same regardless of who you start with.",
        "$A$, $B$": "The sets being intersected",
        "Example": "If $A = \\{red, blue\\}$ and $B = \\{blue, green\\}$, then $A \\cap B = \\{blue\\} = B \\cap A$",
        "Use Cases": "Simplifying calculations, proving properties of sets"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Associative Law of Union",
      formula: "$(A \\cup B) \\cup C = A \\cup (B \\cup C)$",
      fields: {
        "Explanation": "When uniting multiple sets, the grouping doesn't affect the result. It's like grouping ingredients differently when mixing; the final mix is the same.",
        "$A$, $B$, $C$": "The sets being united",
        "Example": "If $A = \\{1\\}$, $B = \\{2\\}$, $C = \\{3\\}$, then $(A \\cup B) \\cup C = A \\cup (B \\cup C) = \\{1, 2, 3\\}$",
        "Use Cases": "Rearranging expressions for simplification, computational efficiency"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Associative Law of Intersection",
      formula: "$(A \\cap B) \\cap C = A \\cap (B \\cap C)$",
      fields: {
        "Explanation": "When finding common elements among multiple sets, how you group them doesn't change the outcome. It's like narrowing down shared interests among friends; the sequence doesn't matter.",
        "$A$, $B$, $C$": "The sets being intersected",
        "Example": "If $A = \\{1,2\\}$, $B = \\{2,3\\}$, $C = \\{2,4\\}$, then $(A \\cap B) \\cap C = A \\cap (B \\cap C) = \\{2\\}$",
        "Use Cases": "Simplifying complex intersections, logical deductions"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Distributive Law of Intersection over Union",
      formula: "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$",
      fields: {
        "Explanation": "Intersecting a set with the union of two sets is the same as uniting the intersections of the set with each of the two sets individually. It's like finding common items after combining two lists separately.",
        "$A$, $B$, $C$": "The sets involved",
        "Example": "If $A = \\{1,2,3\\}$, $B = \\{3,4\\}$, $C = \\{3,5\\}$, then $A \\cap (B \\cup C) = \\{3\\}$ and $(A \\cap B) \\cup (A \\cap C) = \\{3\\}$",
        "Use Cases": "Simplifying expressions, solving set equations"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Distributive Law of Union over Intersection",
      formula: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
      fields: {
        "Explanation": "Uniting a set with the intersection of two sets is the same as intersecting the unions of the set with each of the two sets individually. It's like combining your list with shared items of others, or finding common ground after including all possibilities.",
        "$A$, $B$, $C$": "The sets involved",
        "Example": "If $A = \\{1\\}$, $B = \\{1,2\\}$, $C = \\{1,3\\}$, then $A \\cup (B \\cap C) = \\{1\\}$ and $(A \\cup B) \\cap (A \\cup C) = \\{1,2,3\\} \\cap \\{1,3\\} = \\{1,3\\}$",
        "Use Cases": "Rewriting expressions for easier computation, logical reasoning"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Identity Law of Union",
      formula: "$A \\cup \\emptyset = A$",
      fields: {
        "Explanation": "Uniting any set with the empty set doesn't change the original set. It's like adding nothing to a group; the group stays the same.",
        "$A$": "Any set",
        "$\\emptyset$": "The empty set",
        "Example": "If $A = \\{1,2\\}$, then $A \\cup \\emptyset = \\{1,2\\}$",
        "Use Cases": "Simplifying expressions, understanding the role of the empty set"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Identity Law of Intersection",
      formula: "$A \\cap U = A$",
      fields: {
        "Explanation": "Intersecting any set with the universal set leaves the original set unchanged. It's like comparing your collection to everything possible; only your items matter.",
        "$A$": "Any set",
        "$U$": "The universal set",
        "Example": "If $A = \\{1,2\\}$ and $U$ contains all numbers, then $A \\cap U = \\{1,2\\}$",
        "Use Cases": "Simplifying expressions, theoretical foundations"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Idempotent Law of Union",
      formula: "$A \\cup A = A$",
      fields: {
        "Explanation": "Uniting a set with itself doesn't change it. It's like combining a group with itself; nothing new is added.",
        "$A$": "Any set",
        "Example": "If $A = \\{1,2,3\\}$, then $A \\cup A = \\{1,2,3\\}$",
        "Use Cases": "Simplifying redundant operations, mathematical proofs"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Idempotent Law of Intersection",
      formula: "$A \\cap A = A$",
      fields: {
        "Explanation": "Intersecting a set with itself leaves it unchanged. It's like finding common elements within the same group; everything matches.",
        "$A$": "Any set",
        "Example": "If $A = \\{x,y,z\\}$, then $A \\cap A = \\{x,y,z\\}$",
        "Use Cases": "Simplifying expressions, reducing complexity in proofs"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Double Complement Law",
      formula: "$(A')' = A$",
      fields: {
        "Explanation": "Taking the complement of a complement brings you back to the original set. It's like undoing a reversal; you return to where you started.",
        "$A$": "Any set",
        "$A'$": "Complement of set $A$",
        "$(A')'$": "Complement of the complement of $A$",
        "Example": "If $A = \\{1,2\\}$ within $U = \\{1,2,3,4\\}$, then $A' = \\{3,4\\}$ and $(A')' = \\{1,2\\} = A$",
        "Use Cases": "Simplifying complex expressions, logical negations"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Complement of Universal Set",
      formula: "$U' = \\emptyset$",
      fields: {
        "Explanation": "The complement of the universal set is the empty set because there are no elements outside of everything considered.",
        "$U$": "The universal set",
        "$U'$": "Complement of the universal set",
        "$\\emptyset$": "The empty set",
        "Example": "If $U = \\{all\\ elements\\}$, then $U' = \\emptyset$",
        "Use Cases": "Understanding limits, theoretical concepts"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Complement of Empty Set",
      formula: "$\\emptyset' = U$",
      fields: {
        "Explanation": "The complement of the empty set is the universal set because it contains everything that isn't in the empty set—which is everything.",
        "$\\emptyset$": "The empty set",
        "$U$": "The universal set",
        "$\\emptyset'$": "Complement of the empty set",
        "Example": "If $U = \\{1,2,3\\}$, then $\\emptyset' = \\{1,2,3\\}$",
        "Use Cases": "Establishing foundational concepts, simplifying expressions"
      },
      category: "Fundamental Properties"
    },
    {
      name: "De Morgan's First Law",
      formula: "$(A \\cup B)' = A' \\cap B'$",
      fields: {
        "Explanation": "The complement of the union of two sets is the intersection of their complements. It's like saying everything that's not in either set is what's not in $A$ and not in $B$.",
        "$A$, $B$": "Sets involved",
        "$A'$, $B'$": "Complements of $A$ and $B$",
        "Example": "If $U = \\{1,2,3,4\\}$, $A = \\{1,2\\}$, $B = \\{2,3\\}$, then $(A \\cup B)' = \\{4\\}$ and $A' \\cap B' = \\{4\\}$",
        "Use Cases": "Logical reasoning, simplifying complex expressions"
      },
      category: "Fundamental Properties"
    },
    {
      name: "De Morgan's Second Law",
      formula: "$(A \\cap B)' = A' \\cup B'$",
      fields: {
        "Explanation": "The complement of the intersection of two sets is the union of their complements. It's like everything not shared between $A$ and $B$ is everything not in $A$ or not in $B$.",
        "$A$, $B$": "Sets involved",
        "$A'$, $B'$": "Complements of $A$ and $B$",
        "Example": "If $U = \\{1,2,3,4\\}$, $A = \\{1,2\\}$, $B = \\{2,3\\}$, then $(A \\cap B)' = \\{1,3,4\\}$ and $A' \\cup B' = \\{1,3,4\\}$",
        "Use Cases": "Logical negations, simplifying expressions in probability and logic"
      },
      category: "Fundamental Properties"
    },
    {
      name: "Cardinality of a Set",
      formula: "$|A| = n$",
      fields: {
        "Explanation": "The cardinality of a set is the number of elements it contains. It's like counting how many items are in your collection.",
        "$A$": "The set",
        "$|A|$": "Number of elements in set $A$",
        "$n$": "A non-negative integer",
        "Example": "If $A = \\{a, b, c\\}$, then $|A| = 3$",
        "Use Cases": "Measuring set sizes, comparing quantities, finite mathematics"
      },
      category: "Cardinality"
    },
    {
      name: "Cardinality of Union of Two Sets",
      formula: "$|A \\cup B| = |A| + |B| - |A \\cap B|$",
      fields: {
        "Explanation": "When combining two sets, the total number of unique elements is the sum of their sizes minus the number of elements they share. This avoids double-counting shared elements.",
        "$A$, $B$": "Sets being united",
        "$|A|$, $|B|$": "Cardinalities of sets $A$ and $B$",
        "$|A \\cap B|$": "Number of elements common to both sets",
        "Example": "If $|A| = 5$, $|B| = 7$, and $|A \\cap B| = 2$, then $|A \\cup B| = 5 + 7 - 2 = 10$",
        "Use Cases": "Calculating probabilities, combining datasets, survey analysis"
      },
      category: "Cardinality"
    },
    {
      name: "Principle of Inclusion-Exclusion for Three Sets",
      formula: "$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$",
      fields: {
        "Explanation": "To find the total number of unique elements across three sets, we add their sizes, subtract the sizes of all pairwise intersections to correct for double-counting, and then add back the size of the triple intersection to correct for elements subtracted too many times.",
        "$A$, $B$, $C$": "Sets being united",
        "$|A|$, $|B|$, $|C|$": "Cardinalities of the sets",
        "$|A \\cap B|$, etc.": "Sizes of pairwise intersections",
        "$|A \\cap B \\cap C|$": "Size of the intersection of all three sets",
        "Example": "If $|A| = 10$, $|B| = 15$, $|C| = 20$, $|A \\cap B| = 5$, $|A \\cap C| = 4$, $|B \\cap C| = 6$, and $|A \\cap B \\cap C| = 2$, then $|A \\cup B \\cup C| = 10 + 15 + 20 - 5 - 4 - 6 + 2 = 32$",
        "Use Cases": "Complex probability calculations, overlapping group analysis, database queries"
      },
      category: "Cardinality"
    },
    {
      name: "Cardinality of Power Set",
      formula: "$|\\mathcal{P}(A)| = 2^{|A|}$",
      fields: {
        "Explanation": "The power set of $A$ includes all possible subsets of $A$, and its size is $2$ raised to the number of elements in $A$. It's like calculating all possible combinations of items you can select from your collection.",
        "$A$": "The original set",
        "$\\mathcal{P}(A)$": "Power set of $A$",
        "$|A|$": "Number of elements in set $A$",
        "$2^{|A|}$": "Total number of subsets",
        "Example": "If $A = \\{1,2,3\\}$, then $|\\mathcal{P}(A)| = 2^3 = 8$",
        "Use Cases": "Combinatorics, probability, binary representations"
      },
      category: "Power Set"
    },
    {
      name: "Transitivity of Subsets",
      formula: "If $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$",
      fields: {
        "Explanation": "If every element of $A$ is in $B$, and every element of $B$ is in $C$, then every element of $A$ must also be in $C$. It's like a chain of containment.",
        "$A$, $B$, $C$": "Sets involved",
        "$\\subseteq$": "Symbol meaning 'is a subset of'",
        "Example": "If $A = \\{1\\}$, $B = \\{1,2\\}$, and $C = \\{1,2,3\\}$, then $A \\subseteq C$",
        "Use Cases": "Logical deductions, hierarchical classifications"
      },
      category: "Important Rules"
    },
    {
      name: "Empty Set is a Subset of Every Set",
      formula: "$\\emptyset \\subseteq A$",
      fields: {
        "Explanation": "The empty set is considered a subset of any set because there are no elements in it that could possibly violate the subset condition. It's like an empty container fitting into any space.",
        "$\\emptyset$": "The empty set",
        "$A$": "Any set",
        "$\\subseteq$": "Symbol meaning 'is a subset of'",
        "Example": "For any set $A$, $\\emptyset \\subseteq A$",
        "Use Cases": "Mathematical proofs, defining foundational concepts"
      },
      category: "Important Rules"
    },
    {
      name: "Extensionality Principle",
      formula: "$A = B \\iff \\forall x (x \\in A \\iff x \\in B)$",
      fields: {
        "Explanation": "Two sets are equal if and only if they have exactly the same elements. It's like saying two collections are the same if everything in one is also in the other and vice versa.",
        "$A$, $B$": "Sets being compared",
        "$\\forall x$": "For all elements $x$",
        "$\\iff$": "If and only if",
        "$x \\in A$": "Element $x$ is in set $A$",
        "Example": "If $A = \\{1,2,3\\}$ and $B = \\{3,2,1\\}$, then $A = B$",
        "Use Cases": "Determining set equality, logical reasoning"
      },
      category: "Important Rules"
    },






    
  ];
  
  export default setTheoryFormulasList;
  