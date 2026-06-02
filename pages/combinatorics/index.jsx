import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import GenericTable from '@/app/components/generic-table/GenericTable'
import MermaidDiagram from '@/app/components/mermaid-diagram/MermaidDiagram'
import { countingPrinciplesDiagramsData } from '@/app/api/db/diagrams/combinatorics/countingPrinciples'
import SvgDiagram from '@/app/components/diagrams/render-svg/SvgDiagram'
import { scenariosData } from '@/app/api/db/diagrams/combinatorics/scenarios'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Head from 'next/head'



export async function getStaticProps(){


  const keyWords = [
  'combinatorics',
  'counting principles',
  'permutations and combinations',
  'combinatorics formulas',
  'binomial coefficient',
  'binomial theorem',
  'inclusion exclusion',
  'combinatorial counting',
  'counting techniques',
  'discrete mathematics counting',
  'arrangements and selections',
  'multinomial coefficient',
  'combinatorial scenarios',
  'counting problems'
]

 const decisionMakingChart= `flowchart TD
    A["Order matters?"]
    A -- Yes --> B["Repetition allowed?"]
    A -- No --> C["Objects distinct or identical?"]
    
    B -- Yes --> D["Permutation with Repetition (#2)"]
    B -- No --> E["Use all n items?"]
    
    E -- No --> F["Permutation without Repetition (#3)"]
    E -- Yes --> G["Linear or Circular?"]
    
    G -- Linear --> H["Full Permutation (#1)"]
    G -- Circular --> I["Circular Permutation (#4)"]
    
    C -- Distinct --> J["Select a subset or Distribute all?"]
    C -- Identical --> K["Empty cells allowed?"]
    
    J -- Select --> L["Combination (#5)"]
    J -- Distribute --> M["Labeled or Unlabeled?"]
    
    M -- Labeled --> N["Distribution into Cells (#7)"]
    M -- Unlabeled --> O["Partition into Groups (#6)"]
    
    K -- Yes --> P["Weak Composition (#8)"]
    K -- No --> Q["Strong Composition (#9)"]`


  
const countingPrinciplesDiagram=`
graph TD
    A("<h3>Counting Principles in Combinatorics</h3>")
    B("<h3>Addition Principle</h3>Count of disjoint events<br>is sum of individual counts")
    C("<h3>Multiplication Principle</h3>Count of sequential events<br>is product of individual counts")
    D("<h3>Permutations</h3>Ordered arrangements<br>of distinct objects")
    E("<h3>Combinations</h3>Unordered selections<br>from a set of objects")
    
    A -->|"Disjoint events (OR)"| B
    A -->|"Sequential events (AND)"| C
    C -->|"Order matters"| D
    C -->|"Order doesn't matter"| E

    click A "/combinatorics#counting" "Go to Combinatorics overview"
    click B "/combinatorics#counting" "Learn about Addition Principle"
    click C "/combinatorics#counting" "Learn about Multiplication Principle"
    click D "/combinatorics/permutations" "Learn about Permutations"
    click E "/combinatorics/combinations" "Learn about Combinations"
`

    // const combinatoricsScenariosData = {
    //     tableTitle: 'Basic Combinatorics Scenarios',
    //     rows: [
    //       {
    //         scenario: 'Permutation (Full)',
    //         description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.'
    //       },
    //       {
    //         scenario: 'Permutation with Repetition',
    //         description: 'Arrangement of a multiset of n positions in which certain element‐types may repeat, counting each distinct linear ordering.'
    //       },
    //       {
    //         scenario: 'Permutation without Repetition',
    //         description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.'
    //       },
    //       {
    //         scenario: 'Circular Permutation',
    //         description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.'
    //       },
    //       {
    //         scenario: 'Combination',
    //         description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.'
    //       },
    //       {
    //         scenario: 'Partition into Groups',
    //         description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.'
    //       },
    //       {
    //         scenario: 'Distribution into Cells',
    //         description: 'Assignment of each of n distinct elements to one of r labeled cells, producing an ordered mapping of elements to specific cells.'
    //       },
    //       {
    //         scenario: 'Weak Composition',
    //         description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.'
    //       },
    //       {
    //         scenario: 'Strong Composition',
    //         description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.'
    //       }
    //     ]
    //   };
      
  //   const combinatoricsScenariosData = {
  //     tableTitle: 'Basic Combinatorics Scenarios',
  //     rows: [
  //       {
  //         '#' : `1`,
  //         scenario: '[Permutation (Full)](!/combinatorics/permutations#full)',
  //         description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `2`,
  //         scenario: '[Permutation with Repetition](!/combinatorics/permutations#with)',
  //         description: 'Arrangement of a multiset of n positions in which certain element‐types may repeat, counting each distinct linear ordering.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `3`,
  //         scenario: '[Partial Permutation without Repetition](!/combinatorics/permutations#without)',
  //         description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `4`,
  //         scenario: '[Circular Permutation](!/combinatorics/permutations#circular)',
  //         description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.',
  //         essence: '[Permutation](!/combinatorics/permutations)'
  //       },
  //       {
  //         '#': `5`,
  //         scenario: '[Simple Combination](!/combinatorics/combinations#combinations)',
  //         description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `6`,
  //         scenario: '[Partition into Groups](!/combinatorics/combinations#partition)',
  //         description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `7`,
  //         scenario: '[Distribution into Cells](!/combinatorics/combinations#distribution)',
  //         description: 'Assignment of each of n distinct elements to one of r labeled cells, producing an ordered mapping of elements to specific cells.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `8`,
  //         scenario: '[Weak Composition](!/combinatorics/combinations#weak)',
  //         description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       },
  //       {
  //         '#': `9`,
  //         scenario: '[Strong Composition](!/combinatorics/combinations#strong)',
  //         description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.',
  //         essence: '[Combination](!/combinatorics/combinations)'
  //       }
  //     ]
  // };
  const combinatoricsScenariosData = {
    tableTitle: 'Basic Combinatorics Scenarios',
    rows: [
      {
        '#' : `1`,
        scenario: '[Permutation (Full)](!/combinatorics/permutations#full)',
        description: 'Arrangement of n distinct elements into a linear sequence, with each element appearing exactly once.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `2`,
        scenario: '[Permutation with Identical Items](!/combinatorics/permutations#identical)',
        description: 'Arrangement of n elements where some elements are identical, counting only distinct linear orderings.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `3`,
        scenario: '[Partial Permutation without Repetition](!/combinatorics/permutations#without)',
        description: 'Selection of r distinct elements from a set of size n followed by their arrangement into a linear sequence, with no element reused.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `4`,
        scenario: '[Permutation with Repetition](!/combinatorics/permutations#with-repetition)',
        description: 'Arrangement of r positions chosen from n possible elements, allowing repeated use of elements in different positions.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `5`,
        scenario: '[Circular Permutation](!/combinatorics/permutations#circular)',
        description: 'Arrangement of n distinct elements around a fixed circle, where configurations differing only by rotation are considered identical.',
        essence: '[Permutation](!/combinatorics/permutations)'
      },
      {
        '#': `6`,
        scenario: '[Simple Combination](!/combinatorics/combinations#combinations)',
        description: 'Selection of an unordered subset of size r from a set of n distinct elements, with no regard to sequence.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `7`,
        scenario: '[Partition into Groups](!/combinatorics/combinations#partition)',
        description: 'Division of n distinct elements into r unlabeled subsets, considering only which elements share the same subset and not the order or names of subsets.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `8`,
        scenario: '[Weak Composition](!/combinatorics/combinations#weak)',
        description: 'Allocation of n identical units into r labeled cells, permitting some cells to receive zero units, and tracking only the counts per cell.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': `9`,
        scenario: '[Strong Composition](!/combinatorics/combinations#strong)',
        description: 'Allocation of n identical units into r labeled cells, requiring that every cell receives at least one unit, with only the distribution counts recorded.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
      {
        '#': '10',
        scenario: '[Distribution into Cells](!/combinatorics/combinations#distribution)',
        description: 'Assignment of each of n distinct elements to one of r labeled cells, producing a mapping of elements to specific cells.',
        essence: '[Combination](!/combinatorics/combinations)'
      },
    ]
  };
  
    
    const countingPrinciplesData = {
        tableTitle: "Fundamental Counting Principles",
        rows: [
          {
            feature: "Conjunction",
            sum_addition_principle: '"OR"',
            product_multiplication_principle: '"AND"'
          },
          {
            feature: "Formula",
            sum_addition_principle: "$m_1 + m_2 + \\cdots + m_k$",
            product_multiplication_principle: "$m_1 \\times m_2 \\times \\cdots \\times m_k$"
          },
          {
            feature: "Key Question",
            sum_addition_principle: "How many ways to choose from different categories?",
            product_multiplication_principle: "How many ways to complete a sequence of choices?"
          },
          {
            feature: "Prerequisite",
            sum_addition_principle: "Options must be mutually exclusive (disjoint)",
            product_multiplication_principle: "Each step must be independent of others"
          },
          {
            feature: "When to use",
            sum_addition_principle: "Choose **one** option from several disjoint groups",
            product_multiplication_principle: "Perform **all** steps, each with its own options"
          },
          {
            feature: "Example",
            sum_addition_principle: "3 cake flavors **OR** 4 ice-cream flavors **OR** 2 pie fillings = 3 + 4 + 2 = 9 desserts",
            product_multiplication_principle: "5 scoop flavors **AND** 3 toppings = 5 \\times 3 = 15 cones"
          },
          {
            feature: "Common feature",
            sum_addition_principle: "Counts distinct possibilities by breaking a problem into simpler parts",
            product_multiplication_principle: "Counts distinct possibilities by breaking a problem into simpler parts"
          }
        ]
      };
      
    
//     const sectionsContent={
  
//       counting:{
//         title:`2 Main Counting Principles`,
//         content:``,
//         before:`At its core, combinatorics rests on two “big-picture” rules from which almost every enumeration argument can be built or deduced:
     
//         **1. Sum (Addition) Rule (“OR”)**

// If a choice can be made by **one or another** of $k$ mutually exclusive methods—where Method 1 offers $m_1$ different options, Method 2 offers $m_2$, …, Method k offers $m_k$—then the total number of possibilities is
// @academic[example:$m_1 + m_2 + \\cdots + m_k.$]@
// This principle corresponds to an **“or”** situation: you pick **one OR** the other.
//  **Example (transport):**
//   You can travel **by bus OR by train OR by taxi**:
//    Bus routes: 2 options
//    Train lines: 3 options
//    Taxi services: 4 options
//   Total travel choices = $2 + 3 + 4 = 9$.


// `,
// between:`**2. Product (Multiplication) Rule (“AND”)**

// If an outcome requires completing $k$ independent steps—where Step 1 has $m_1$ different options, Step 2 has $m_2$, …, Step k has $m_k$—and you must do **all** of them, then the total number of outcomes is
// @academic[example:$m_1 \\times m_2 \\times \\cdots \\times m_k.$]@
// This principle corresponds to an **“and”** situation: you choose **this AND** that.
// **Example (meal combo):**
//   You build a lunch by choosing a main course **AND** a drink **AND** a dessert:
//    Mains: 3 choices
//    Drinks: 2 choices
//    Desserts: 4 choices
//     Total meal combos = $3 \\times 2 \\times 4 = 24$.
    
//     `,
//   after:`

// To summarize, whenever you see **“or”** you **add** disjoint counts; whenever you see **“and”** you **multiply** independent choices.

// `,
    
    
//       },
//       scenarios:{
//         title:`Basic Combinatorial Scenarios`,
//         content:``,
//         before:`In combinatorics, most counting problems can be classified into 9 basic templates or scenarios. Rather than approaching each problem as a unique puzzle, we can identify patterns and apply standardized methods. The following nine fundamental scenarios represent the core building blocks of combinatorial problem-solving. By recognizing which template applies to a given situation, we transform complex counting challenges into systematic applications of well-established formulas and techniques. This classification system not only simplifies problem-solving but also provides a structured framework for understanding the relationships between different types of combinatorial questions.
//         `,
//         after:`We may divide all those scenarios into two broad groups: [permutations](!/combinatorics/permutations) and [combinations](!/combinatorics/combinations).
//         **Scenarios** $1–5$ **(Permutations)**:
//          These all involve arrangements of elements where **order matters**.
//          **Scenarios** $6–10$ **(Combinations)**:
//          These involve selections or groupings where order **does not matter** (or where only counts per category matter).

//         These nine scenarios form the foundation of combinatorial analysis. Each template addresses specific constraints about order, repetition, and grouping that appear repeatedly across mathematical applications. Mastering the ability to recognize which scenario applies to a problem—whether we're dealing with arrangements versus selections, labeled versus unlabeled groups, or strict versus flexible distributions—is the key to efficient combinatorial problem-solving. As you encounter new counting problems, always begin by identifying the underlying scenario, as this will immediately guide you toward the appropriate mathematical tools and formulas needed for the solution.
//         `,
    
//       },
    
//       permutations_vs_combinations:{
    
//         title:`Permutations vs Combinations`,
//         content:``,
//         before:`As we discussed in previous section, there are two main [counting principles](!/combinatorics#counting) in combinatorics. However, there's more depth to this framework than initially appears. When we apply the multiplication principle to solve counting problems, we encounter a crucial distinction that leads to further classification.

// The multiplication principle handles sequential decision-making where we perform multiple steps, each with its own set of options. But within this category, we must ask a fundamental question: **"Does order matter?"** This single question divides multiplication-based problems into two distinct subcategories, each with its own mathematical approach and formulas.
// `,
//         after:`In cases order **does** matter—such as arranging people in a line or assigning ranks in a competition—we're dealing with [permutations](!/combinatorics/permutations). The sequence or position of elements affects the outcome, making different arrangements count as separate results.
// When order **doesn't** matter—such as selecting team members or choosing ingredients for a recipe—we're working with [combinations](!/combinatorics/combinations). Here, we care only about which elements are chosen, not their arrangement or sequence.
// This branching creates a clear decision tree: start with the fundamental counting principles, apply the multiplication principle for sequential choices, then determine whether the specific ordering of those choices affects your final count.`,
    
//       },
//       obj4:{
//         title:``,
//         content:``,
//         before:``,
//         after:``,
    
//       },
  
  
//       obj5:{
    
//         title:``,
//         content:``,
//         before:``,
//         after:``,
    
//       }
    
//     }


// URL: /combinatorics

const sectionsContent = {
  obj1: {
    title: `Counting Principles`,
    content: `
Five logical rules govern how counts combine:

• **Addition rule** — when options are mutually exclusive, the counts add. $m$ ways for one method and $n$ ways for another, with no overlap, gives $m + n$ total.
• **Multiplication rule** — when choices are sequential and independent, the counts multiply. $m$ outcomes for step 1 and $n$ outcomes for step 2 give $m \\cdot n$ combined outcomes.
• **Complementary counting** — reframes "at least one" problems by counting their negation (the "none" case) and subtracting from the total.
• **Double counting** — proves identities by counting the same set in two different ways and equating the two expressions.
• **Pigeonhole principle** — guarantees that when more items are distributed than there are containers, at least one container must hold a repeat.

The first two are foundational; the other three extend or apply them.
`,
    before: ``,
    between: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Counting Principles](!/combinatorics/counting-principles) →@
`,
    link: '',
  },

  obj2: {
    title: `When Counts Overlap: Inclusion–Exclusion`,
    content: `
The addition rule has a quiet requirement — the options must be mutually exclusive. The moment two sets share elements, simply adding their sizes counts the shared elements twice.

The inclusion–exclusion principle is the systematic correction. For two sets:

$$|A \\cup B| = |A| + |B| - |A \\cap B|.$$

For three sets the pattern continues — add singles, subtract pairwise intersections, add the triple intersection. For $n$ sets the signs alternate down the line, with one term for every non-empty subset of the sets involved.

The principle also has a complementary form, counting elements that belong to none of the listed sets. This is the form behind the derangement count and other "at least one" or "none" results.
`,
    before: ``,
    between: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Inclusion–Exclusion](!/combinatorics/inclusion-exclusion) →@
`,
    link: '',
  },

  obj3: {
    title: `Permutations and Combinations`,
    content: `
A **permutation** is an ordered arrangement of items. Arranging $n$ distinct items in a row gives $n!$ permutations. Selecting and arranging $r$ items from $n$ gives

$$P(n,r) = \\frac{n!}{(n-r)!}.$$

Variants of the basic problem cover arrangements with repetition allowed, arrangements containing identical items, circular arrangements, and arrangements with positional constraints.

A **combination** is an unordered selection of items. Choosing $r$ items from $n$ without regard to order gives

$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}.$$

Variants cover partitioning items into groups, distributing identical items into labeled cells, and weak and strong compositions.
`,
    before: `
Multiplication-rule problems generate sequences of choices. A single structural question splits all such problems into two families: does the order of the choices matter? The distinction is the most consequential one in the section — every standard counting formula in combinatorics sits on one side of this divide.
`,
    between: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Permutations](!/combinatorics/permutations) →@  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Combinations](!/combinatorics/combinations) →@
`,
    link: '',
  },

  obj4: {
    title: `Standard Scenarios`,
    content: `
Within the two families, problems reduce to ten standard templates — five permutation scenarios and five combination scenarios. Each scenario asks a distinct structural question and has a known formula. Permutation scenarios appear on the left, combination scenarios on the right, with each scenario paired with its counterpart on the opposite side.

## Permutation Scenarios

• [Full permutation](!/combinatorics/permutations#full) — arrange $n$ distinct items in a row: $n!$
• [Permutation with identical items](!/combinatorics/permutations#identical) — arrange $n$ items where $n_1, n_2, \\ldots, n_k$ are identical of each type: $\\dfrac{n!}{n_1!\\, n_2! \\cdots n_k!}$
• [Partial permutation without repetition](!/combinatorics/permutations#without) — arrange $r$ items chosen from $n$ distinct: $\\dfrac{n!}{(n-r)!}$
• [Permutation with repetition](!/combinatorics/permutations#with-repetition) — fill $r$ positions from $n$ choices with repetition allowed: $n^r$
• [Circular permutation](!/combinatorics/permutations#circular) — arrange $n$ items in a circle: $(n-1)!$

## Combination Scenarios

• [Simple combination](!/combinatorics/combinations#combinations) — choose $r$ items from $n$: $\\binom{n}{r}$
• [Partition into groups](!/combinatorics/combinations#partition) — split $n$ items into labeled groups of sizes $k_1, k_2, \\ldots, k_r$: $\\binom{n}{k_1, k_2, \\ldots, k_r}$
• [Weak composition](!/combinatorics/combinations#weak) — distribute $n$ identical items into $r$ bins, bins allowed empty: $\\binom{n+r-1}{r-1}$
• [Strong composition](!/combinatorics/combinations#strong) — distribute $n$ identical items into $r$ bins, no bin empty: $\\binom{n-1}{r-1}$
• [Distribution into cells](!/combinatorics/combinations#distribution) — distribute $n$ distinct items into $r$ labeled cells with specified sizes: multinomial coefficient
`,
    before: ``,
    between: ``,
    after: `
The decision tree below traces any counting problem down to one of these ten scenarios. Starting from the basic structural questions — what is being counted, does the order matter, are repetitions allowed, are the items distinct — the tree leads to a specific scenario and the formula it uses.
`,
    link: '',
  },

  obj5: {
    title: `The Binomial Coefficient`,
    content: `
The combination formula $\\binom{n}{r}$ counts how many $r$-element subsets exist in an $n$-element set. The same expression keeps appearing in other contexts — in permutation formulas, in algebraic identities, in probability distributions — so it is worth examining as a mathematical object in its own right rather than only as a counting answer.

The coefficient satisfies relations that are not visible from the counting interpretation. The symmetry $\\binom{n}{k} = \\binom{n}{n-k}$ follows immediately from the definition. Pascal's rule,

$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k},$$

arranges all binomial coefficients into Pascal's triangle, where each interior entry is the sum of the two directly above. Further identities organize entire row sums and diagonal patterns.

The coefficient also generalizes to the multinomial coefficient $\\binom{n}{k_1, k_2, \\ldots, k_r}$, which counts arrangements of items partitioned into multiple groups of identical types.
`,
    before: ``,
    between: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Binomial Coefficient](!/combinatorics/binomial-coefficient) →@
`,
    link: '',
  },

  obj6: {
    title: `The Binomial Theorem`,
    content: `
The binomial coefficient's algebraic side becomes explicit in the expansion of $(a+b)^n$. Multiplying out the product distributes into terms of the form $a^{n-k} b^k$. The number of times each such term appears equals the number of ways to choose $k$ of the $n$ factors to contribute a $b$ — which is exactly $\\binom{n}{k}$. The result is the binomial theorem:

$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} \\, a^{n-k} b^k.$$

The theorem generalizes — the multinomial theorem expands $(x_1 + x_2 + \\cdots + x_r)^n$ using multinomial coefficients.
`,
    before: ``,
    between: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Binomial Theorem](!/combinatorics/binomial-theorem) →@
`,
    link: '',
  },

  obj7: {
    title: `Related Concepts`,
    content: `
• [Probability](!/probability) — counting favorable outcomes against total outcomes is the bridge from combinatorics into probability.

• [Set Theory](!/set-theory) — the formal language of unions, intersections, and partitions on which the counting principles are stated.

• [Algebra](!/algebra) — binomial and polynomial expansions, and the algebraic identities that arise from combinatorial counts.

• [Linear Algebra](!/linear-algebra) — combinatorial structures appear in matrices and in permutations as transformations.
`,
    before: ``,
    between: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
    id: "intro",
    title: "Combinatorics: The Art of Counting",
    content: `
Combinatorics is the branch of mathematics that deals with counting, arrangement, and selection of objects. At its core, it answers fundamental questions: "In how many ways can this be done?" and "How many possibilities exist?" This field transforms seemingly simple counting problems into powerful mathematical tools that reveal hidden patterns and structures.

Combinatorics serves as a bridge connecting multiple mathematical disciplines. It provides the foundation for [probability](!/probability) theory, where calculating favorable outcomes requires systematic counting techniques. The field draws heavily from [set theory](!/set-theory) when dealing with collections and their intersections, while its applications extend into **graph theory** through network analysis and path counting. **Number theory** benefits from combinatorial methods in partition problems and divisibility questions, and [linear algebra](!/linear-algebra) uses combinatorial principles in matrix theory and vector spaces.

The problems combinatorics solves range from practical applications—like determining optimal seating arrangements or analyzing computer algorithms—to abstract mathematical questions about infinite structures. Whether you're calculating lottery odds, designing efficient networks, or exploring mathematical proofs, combinatorics provides the essential counting framework.

In this section, we'll explore the fundamental counting principles, dive into permutations and combinations, and tackle real-world combinatorial scenarios that demonstrate the power and elegance of this mathematical art.`
  }



  const faqQuestions = {
  obj1: {
    question: "What is combinatorics?",
    answer: "Combinatorics is the branch of mathematics that deals with counting, arrangement, and selection of objects. It answers questions about how many ways something can be done, providing the foundation for probability, graph theory, number theory partitions, and many algorithmic problems."
  },
  obj2: {
    question: "What are the basic counting principles?",
    answer: "The five core counting principles are the addition rule (for mutually exclusive cases), the multiplication rule (for sequential independent steps), complementary counting, double counting, and the pigeonhole principle. Every counting formula in combinatorics is built from these rules."
  },
  obj3: {
    question: "What is the difference between permutations and combinations?",
    answer: "Permutations are ordered arrangements where sequence matters, counted by n!/(n-r)! for choosing r from n. Combinations are unordered selections where only membership matters, counted by C(n,r) = n!/(r!(n-r)!). The structural question 'does order matter' is what separates the two families."
  },
  obj4: {
    question: "What is the binomial coefficient?",
    answer: "The binomial coefficient C(n,k), read 'n choose k', equals n!/(k!(n-k)!). It counts the number of k-element subsets of an n-element set and also appears as the coefficient of a^(n-k)·b^k in the expansion of (a+b)^n. Pascal's triangle organizes all binomial coefficients into rows."
  },
  obj5: {
    question: "What does the binomial theorem state?",
    answer: "The binomial theorem states that (a+b)^n equals the sum from k=0 to n of C(n,k)·a^(n-k)·b^k. The expansion has n+1 terms, and the coefficients are exactly the entries of row n of Pascal's triangle. The multinomial theorem generalizes this to sums of more than two terms."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Combinatorics",
    "description": "Combinatorics fundamentals: counting principles, inclusion-exclusion, permutations, combinations, binomial coefficient, theorem, and core counting scenarios.",
    "url": "https://www.learnmathclass.com/combinatorics",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Combinatorics"
    },
    "teaches": [
      "Five core counting principles including addition and multiplication rules",
      "Inclusion-exclusion principle for overlapping sets",
      "Permutations and ordered arrangement counting",
      "Combinations and unordered selection counting",
      "Binomial coefficient definition and identities",
      "Binomial theorem and multinomial generalization"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.learnmathclass.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Combinatorics",
        "item": "https://www.learnmathclass.com/combinatorics"
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqQuestions).map(key => ({
      "@type": "Question",
      "name": faqQuestions[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqQuestions[key].answer
      }
    }))
  }
}
  
    return {
  props:{
    sectionsContent,
    introContent,
    combinatoricsScenariosData,
    countingPrinciplesData,
    countingPrinciplesDiagram,
    faqQuestions,
    schemas,
    seoData: {
      title: "Combinatorics: Counting Rules & Formulas | Learn Math Class",
      description: "Combinatorics fundamentals: counting principles, inclusion-exclusion, permutations, combinations, binomial coefficient, theorem, and core counting scenarios.",
      keywords: keyWords.join(", "),
      url: "/combinatorics",
      name: "Combinatorics"
    },
  }
}
    }
   
export default function CombinatoricspAGE({sectionsContent, introContent,
  combinatoricsScenariosData, countingPrinciplesData, countingPrinciplesDiagram,
  seoData, faqQuestions, schemas}) {


       
  const combinatoricsSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  
//     const combinatoricsSections=[
//         {
//             id:'counting',
//             title:sectionsContent.counting.title,
//             link:'',
//             content:[
//                <div key={'add'} id='add'></div>,
//                 sectionsContent.counting.before,
//                 countingPrinciplesDiagramsData["Addition Principle"].svg,
//                 <div   key={'multi'} id='multi'></div>,
//                 sectionsContent.counting.between,                
//                 countingPrinciplesDiagramsData["Multiplication Principle"].svg,
//                 sectionsContent.counting.after,
//                 <GenericTable
//                 key={2}
//                 tableData={countingPrinciplesData} theme='lightBlue'
//                 cellFontSize={'16px'}
//                 headerFontSize={'18px'}
//                 />,
               
               
//             ]
//         },
//          {
//             id:'permutations_vs_combinations',
//             title:sectionsContent.permutations_vs_combinations.title,
//             link:'',
//             content:[
//               sectionsContent.permutations_vs_combinations.before,
//               <div key={'mermaid'} style={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'50px'}}>
//                  <MermaidDiagram chartDefinition={countingPrinciplesDiagram}
//                    width="500px"
//                    height="300px"
//                    scale={.9} />
//                    </div> ,   
//              sectionsContent.permutations_vs_combinations.after,  
//              <div key={'perm_vs_comb'} style={{width:'100%',margin:'auto'}}>
//                <SvgDiagram
//    data={scenariosData["Permutations vs Combinations"]}
//   scale={'1'}
// //   width='1200px'
//   layout='horizontal'
//   splitRatio={'0.7'}
//  />
//  </div>, 
                 
                 
                

//             ]
//         },
//         {
//             id:'scenarios',
//             title:sectionsContent.scenarios.title,
//             link:'',
//             content:[
//               sectionsContent.scenarios.before,
//                 <GenericTable 
//                 key={1}
//                 tableData={combinatoricsScenariosData} theme='lightBlue'
//                 cellFontSize={'16px'}
//                 headerFontSize={'18px'}/>,
//                 sectionsContent.scenarios.after,
//             ]
//         },
//         // {
//         //     id:'',
//         //     title:'',
//         //     link:'',
//         //     content:''
//         // }
//     ]
    

  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />

  <meta name="robots" content="index, follow" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
  />
</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           topOffset='55px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinatorics</h1>
   <br/>
   <SectionTableOfContents sections={combinatoricsSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section"/>
   <br/>
   <br/>
   <br/>
   <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={combinatoricsSections}/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
