const combinatoricsFormulaList = [
    {
      name: "Permutation (Full)",
      formula: "$P_n^n = n!$",
      fields: {
        "Explanation": `This formula calculates the total number of ways to arrange n distinct items in n places.
        It's a fundamental concept in combinatorics that quantifies all possible orderings of a set of objects.
        The factorial grows rapidly as n increases, reflecting the explosive growth in possibilities as more items are added. This concept is crucial in probability theory, statistical mechanics, and many areas of discrete mathematics. It forms the basis for more complex permutation formulas and is a building block for understanding combinations and other combinatorial structures.`,
        "$P_n^n$": `Total number of permutations.
        Sometimes notation $P(n,n)$ is used `,
        "$n$": "Number of distinct items to be arranged",
        "$!$": "Factorial operation",
        "Example": "For $n=4: 4! = 24$ arrangements",
        "Use Cases": `Arranging books on a shelf, determining race finish orders.
        In general, every time the order matters, no repetitions and we use all the items.`,
        "Other Notations":`$P(n,n)=n!$`,
        "Learn More":`[Check Our Interactive Permutations Visualizer Here](/combinatorics/permutations/permutations-visualizer)`,

      },
      category: "Basic Permutations",
     
    },
    {
      name: "Permutation with Repetition",
      formula: "$P_{n1,n2,...nx} =\\frac{n!}{n_1! \\cdot n_2! \\cdot \\ldots \\cdot n_k!}$",
      fields: {
        "Explanation": "This formula calculates the number of unique arrangements when some items are identical. It's an extension of the basic permutation concept that accounts for repeated elements. By dividing the total number of permutations by the permutations of each repeated group, it eliminates overcounting. This formula is crucial in situations involving multisets or in probability calculations where events can occur multiple times. It's widely used in combinatorial optimization, group theory, and in generating functions in advanced combinatorics.",
        "$P_{n1,n2,...nx}$": "Total number of permutations with repetition",
        "$n$": "Total number of items",
        "$n1, n2, ..., nx$": "Number of each type of identical item",
        "$x$": "Number of different types of items",
        "$!$": "Factorial operation",
        "Example": "For n=4 with 2 A's and 2 B's: $\\frac{4!}{2! \\cdot 2!} = 6$ arrangements",
        "Use Case": "Arranging letters in words with repeated letters"
      },
      category: "Basic Permutations"
    },
    {
      name: "Permutation of Subset (Variations without Repetitions)",
      formula: "$P^n_r​ = n! / (n-r)!$",
      fields: {
        "Explanation": "This formula calculates the number of ways to arrange r items out of n items where order matters. It's a powerful tool in combinatorics that bridges the gap between full permutations and combinations. The formula effectively 'cancels out' the arrangements of the items not chosen, focusing only on the selected subset. This concept is fundamental in probability theory, particularly in calculating odds for complex events. It's extensively used in statistical sampling, experimental design, and in algorithms for generating random permutations.",
        "$P^n_r$": "Number of permutations without repetition",
        "$n$": "Total number of items to choose from",
        "$r$": "Number of items being chosen",
        "!": "Factorial operation",
        "Example": "For n=5, r=3: 5! / (5-3)! = 60 arrangements",
        "Use Case": "Selecting and arranging podium finishers from a group of runners"
      },
      category: "Variations"
    },
    {
      name: "Basic Combination",
      formula: "$C^n_r = \\frac{n!}{r! \\cdot (n-r)!}$",
      fields: {
        "Explanation": "This formula calculates the number of ways to select r items from n items where order doesn't matter. It's a cornerstone of combinatorial mathematics, representing unordered selections. The formula can be derived from the permutation formula by dividing out the r! ways to arrange the chosen items. Combinations are essential in probability theory, forming the basis for the binomial distribution and Pascal's triangle. They're widely applied in statistical analysis, population genetics, and coding theory. In advanced mathematics, combinations play a crucial role in the study of finite sets, algebraic structures, and in the development of generating functions.",
        "$C^n_r$": "Number of combinations",
        "$n$": "Total number of items to choose from",
        "$r$": "Number of items being chosen",
        "$!$": "Factorial operation",
        "Example": "For n=5, r=3: 5! / (3! * 2!) = 10 combinations",
        "Use Case": "Selecting a committee from a group of people"
      },
      category: "Combinations"
    },
    {
        "name": "Combination Symmetry",
        "formula": "$C(n, r) = C(n, n-r)$, where $C(10, 3) = \\frac{10!}{3! \\cdot (10-3)!} = \\frac{10!}{7! \\cdot 3!} = C(10, 7)$",
        "fields": {
          "Explanation": "This formula expresses the symmetry in combinations, showing that the number of ways to choose r items from a set of n items is the same as the number of ways to choose n-r items. This property arises from the fact that choosing r items to include is equivalent to choosing n-r items to exclude, which is a fundamental aspect of the binomial coefficient. This symmetry is useful in simplifying calculations in probability theory, statistics, and various fields of mathematics.",
          "$C(n, r)$": "Number of ways to choose r items from n items",
          "$C(n, n-r)$": "Number of ways to choose n-r items from n items, showing the symmetrical relationship",
          "$n$": "Total number of items",
          "$r$": "Number of items being chosen or left out",
          "Example": "In a class of 10 students, choosing 3 students for a presentation team is equivalent to determining which 7 students will not present. Both scenarios involve making selections from the same pool, highlighting the symmetry: $C(10, 3) = C(10, 7)$, both equal to 120.",
          "Use Case": "Used in statistical sampling, combinatorial proofs, and when simplifying expressions in binomial expansions"
        },
        "category": "Combinations"
      }
      ,
      
    {
      name: "Partition into Groups",
      formula: "$P(n,r) = S(n,r)$",
      fields: {
        "Explanation": "This formula, represented by the Stirling number of the second kind S(n,r), calculates the number of ways to partition n distinct items into r non-empty, distinguishable groups. It's a sophisticated combinatorial concept that bridges set theory and partition theory. Stirling numbers of the second kind are fundamental in analyzing set partitions and have deep connections to generating functions and Bell numbers. They arise naturally in problems involving distributing objects into containers, in the theory of distributions in statistics, and in the study of polynomials. These numbers have applications in computer science, particularly in analyzing the complexity of algorithms and data structures.",
        "P(n,r)": "Number of ways to partition n items into r groups",
        "S(n,r)": "Stirling number of the second kind",
        "n": "Number of distinct items to be partitioned",
        "r": "Number of distinguishable groups",
        "Example": "For n=4, r=2: S(4,2) = 7 partitions",
        "Use Case": "Dividing students into different classes"
      },
      category: "Partitions"
    },
    // {
    //   name: "Distribution into Cells (Variations with Repetitions)",
    //   formula: "$V_r^n = r^n$",
    //   fields: {
    //     "Explanation": "This formula calculates the number of ways to distribute n different items into r numbered cells. It's a fundamental concept in discrete probability and combinatorial theory. The formula arises from the multiplication principle, where each item has r independent choices. This concept is crucial in understanding sample spaces in probability, particularly for events with multiple independent trials. It's widely used in computer science for analyzing hashing functions and in cryptography for calculating the number of possible keys. The formula also appears in statistical mechanics when considering the distribution of particles into energy states.",
    //     "$V_r^n$": "Number of possible distributions",
    //     "$r$": "Number of numbered cells",
    //     "$n$": "Number of different items to be distributed",
       
    //     "Example": "For n=3, r=2: 2^3 = 8 distributions",
    //     "Use Case": "Assigning tasks to specific days of the week"
    //   },
    //   category: "Variations"
    // },

    {
        "name": "Distribution into Cells (Variations with Repetition)",
        "formula": "$V_r^n = n^r$",
        "fields": {
          "Explanation": "This formula calculates the number of ways to distribute n different items into r numbered cells, where each item independently chooses one of the r cells. Each cell can potentially hold any number of items, from none to all n items. The formula is based on the multiplication principle, where each of the n items has r choices, leading to a total of $n^r$ possible distributions. This concept is crucial in understanding the structure of sample spaces in probability theory, especially in scenarios with multiple independent choices per trial. It's also widely used in fields like computer science, cryptography, and statistical mechanics.",
          "$V_r^n$": "Total number of possible distributions, where n items are distributed into r cells",
          "$n$": "Number of different items to be distributed",
          "$r$": "Number of cells available for distribution",
          "$n^r$": "Represents the total number of ways each of the n items can be placed into one of the r cells"
        },
        "category": "Variations"
      },
      
    {
      name: "Weak Composition",
      formula: "$W(n,r) = C(n+r-1, r-1)$",
      fields: {
        "Explanation": "This formula calculates the number of ways to distribute n identical items into r cells, allowing empty cells. It's a key concept in combinatorics that deals with the distribution of indistinguishable objects. The formula is derived using the clever 'stars and bars' method, which transforms the problem into choosing positions for dividers. Weak compositions are fundamental in generating functions and partition theory. They have applications in various fields, including number theory, statistical physics, and computer science. This concept is crucial in solving problems related to integer partitions, in the analysis of algorithms dealing with distributions, and in combinatorial optimization.",
        "$W(n,r)$": "Number of weak compositions",
        "$C(n+r-1, r-1)$": "Combination of n+r-1 items taken r-1 at a time",
        "$n$": "Number of identical items to be distributed",
        "$r$": "Number of cells",
        "Example": "For n=5, r=3: C(7,2) = 21 compositions",
        "Use Case": "Distributing identical candies among children, allowing some to receive none"
      },
      category: "Partitions"
    },
    {
      name: "Strong Composition",
      formula: "$S(n,r) = C(n-1, r-1)$",
      fields: {
        "explanation": "This formula calculates the number of ways to distribute n identical items into r cells, with no empty cells allowed. It's a variation of the weak composition that adds the constraint of non-empty cells. The formula is derived by considering the problem as placing r-1 dividers among n-1 spaces between items. Strong compositions are fundamental in partition theory and have deep connections to symmetric functions and representation theory. They are used extensively in analyzing algorithms, particularly those involving distributions and partitions. This concept is crucial in combinatorial number theory, in studying integer partitions, and in certain areas of statistical physics.",
        "$S(n,r)$": "Number of strong compositions",
        "C(n-1, r-1)": "Combination of n-1 items taken r-1 at a time",
        "$n$": "Number of identical items to be distributed",
        "$r$": "Number of cells",
        "Example": "For n=5, r=3: C(4,2) = 6 compositions",
        "Use Case": "Distributing identical tasks among team members, ensuring everyone gets at least one"
      },
      category: "Partitions"
    },
    {
      name: "Circular Permutation",
      formula: "$Pcirc(n) = (n-1)!$",
      fields: {
        "Explanation": "This formula calculates the number of unique ways to arrange n different items in a circle. It's a special case of permutation that takes into account the rotational symmetry of circular arrangements. The formula is derived by fixing one element and permuting the rest, as rotations of the same arrangement are considered identical. Circular permutations are fundamental in group theory, particularly in the study of cyclic groups. They have applications in chemistry for molecular structures, in computer science for round-robin scheduling, and in mathematics for necklace problems. This concept is crucial in solving problems related to cyclic structures, in the analysis of cyclic codes in coding theory, and in certain areas of graph theory.",
        "$Pcirc $": `Number of circular permutations.
        Sometimes notation  Pcircular(n) is used .`,
        "$n$": "Number of different items to be arranged in a circle",
        "$!$": "Factorial operation",
        "Example": "For n=4: 3! = 6 arrangements",
        "Use Case": "Seating arrangements around a circular table"
      },
      category: "Basic Permutations"
    }
  ];
  
  export default combinatoricsFormulaList;