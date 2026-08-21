



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import BinomialCoefficientsVisualizer from '../../../../app/components/algebra/visualizers/binomial/BinomialCoefficientVisualizer'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import binomialCoefficientDiagrams from '../../../../app/components/algebra/visualizers/binomial/binomialCoefficientDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'binomial coefficient',
    'binomial coefficient visualizer',
    'binomial coefficients',
    'binomial theorem',
    "Pascal's triangle",
    'binomial expansion',
    'n choose k',
    'C(n,k)',
    'binomial coefficient formula',
    'binomial coefficient visualization',
    '(a+b)^n expansion',
    "Pascal's triangle visualizer",
    'how to find binomial coefficient',
    'binomial theorem visualizer',
    'binomial expansion visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Binomial coefficient** — the count $\\binom{n}{k}$ (read &quot;n choose k&quot;) of ways to choose $k$ items from $n$ distinct items, ignoring order. Equivalently, the coefficient of $a^{n-k} b^k$ in the expansion of $(a+b)^n$.

**Binomial theorem** — the identity $(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$. Expresses any power of a binomial as a polynomial in $a$ and $b$ with binomial-coefficient weights.

**Pascal&apos;s triangle** — the triangular array whose row $n$, position $k$ equals $\\binom{n}{k}$. Each cell is the sum of the two cells immediately above it.

**Pascal&apos;s rule** — the identity $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$. The reason every cell in Pascal&apos;s triangle equals the sum of the two cells above.

**Factorial formula** — $\\binom{n}{k} = \\dfrac{n!}{k! (n-k)!}$. The closed-form expression for the binomial coefficient.

**Decision tree** — a binary tree of choices. The number of leaves with exactly $k$ &quot;right&quot; branches equals $\\binom{n}{k}$, giving a combinatorial reading of the formula.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ loaded and the **Decision Tree** view active. The top of the workspace has three controls:

• **View switcher** — three tabs at the top: *Decision Tree*, *Distribution*, *Pascal Paths*. Each tab is a different lens on the same idea.

• **n picker** — a row of buttons numbered 1 through 5 with the formula $(a+b)^n$ displayed for the current value of $n$.

• Below the controls, the active view fills the workspace with its own visualization.

To explore quickly:

• Click between the three view tabs to see the same $n$ from three angles.

• Click any $n$ value to update all three views simultaneously.

• In the Decision Tree, hover any leaf or group card to highlight the matching paths.

• In the Distribution view, press *Step* or *Auto-expand* to fill the buckets one product at a time.

• In the Pascal Paths view, hover any cell to see every path from the top that lands there.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Three Views`,
      content: `The same binomial coefficients are computed three different ways. Each view answers the question *where do the numbers in row $n$ of Pascal&apos;s triangle come from?*

• [Decision Tree](!#decision-tree-view) — every path of length $n$ in a binary tree corresponds to one term in the expansion. Leaves with the same b-count belong to the same like-term group. Group size equals the coefficient.

• [Distribution](!#distribution-view) — animates the actual multiplication. For each of the $n$ factors $(a+b)$, pick either $a$ or $b$. Each of the $2^n$ choice sequences produces one product. Products with the same exponents fall into the same bucket; the bucket count is the coefficient.

• [Pascal Paths](!#pascal-paths-view) — Pascal&apos;s triangle reinterpreted as a path-counting grid. To reach cell $(n, k)$ from the top, take $n$ steps, $k$ of them going right. The number of ways equals $\\binom{n}{k}$.

The pedagogical payoff is the same coefficients appear in all three pictures &mdash; binomial coefficients are simultaneously a count, a polynomial coefficient, and a path count.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n`,
      content: `The **n** picker offers five values:

• **n = 1**: $(a+b)^1 = a + b$. Two terms, two leaves, a one-row Pascal triangle (after the apex) — [the base case](!#the-base-case-n-1).

• **n = 2**: $(a+b)^2 = a^2 + 2ab + b^2$. Four leaves, three groups, classic FOIL.

• **n = 3**: $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$. Eight leaves, four groups. The default load.

• **n = 4**: $(a+b)^4$ has 16 leaves and five groups with coefficients $1, 4, 6, 4, 1$.

• **n = 5**: $(a+b)^5$ has 32 leaves and six groups with coefficients $1, 5, 10, 10, 5, 1$. The most complex view the tool supports visually — [the fifth row](!#the-fifth-row).

Changing $n$ resets all three views simultaneously. The formula readout in the top-right of the n-picker bar updates to $(a+b)^n$ for the new value. The visual cap at $n = 5$ keeps the decision tree and Pascal triangle readable; the underlying coefficients can be computed for any $n$ using the factorial formula.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Decision Tree View`,
      content: `The Decision Tree view draws every length-$n$ binary path from a single root. At each level, branches split into an **a** path (blue) and a **b** path (amber). After $n$ levels, the tree has $2^n$ leaves, each labeled with the sequence of choices that led to it.

Each leaf belongs to one of $n + 1$ **groups**, color-coded by how many $b$&apos;s the path contains. Below the tree, group cards summarize each:

• The **term** the group represents, like $a^2 b$ or $b^3$.

• The list of all paths landing in this group.

• A count: *paths landing here: N* &mdash; that&apos;s the coefficient.

Interaction:

• **Hover a leaf** to highlight the path from root to that leaf and dim every other leaf.

• **Hover a group card** to highlight all leaves and paths in that group at once.

The big insight: hover the middle group when $n = 4$ and watch six different paths light up &mdash; that&apos;s why the coefficient of $a^2 b^2$ is $6$, not $1$.`,
      before: ``,
      after: `The frozen frame above captures the default $n = 3$ tree in full: eight leaves in four color groups, and the group cards doing the counting — $1, 3, 3, 1$. The deeper point the tree makes is about *why* multiplication produces coefficients at all: algebra never adds anything during expansion, it only enumerates. The coefficient $3$ on $a^2b$ exists because three distinct histories ($aab$, $aba$, $baa$) produce indistinguishable products, and the tree is the only view where those histories remain visually separate.

The degenerate end of this picture — a tree with a single split — is worth a look of its own: [the base case n = 1](!#the-base-case-n-1). And the same 8 histories reappear as delivery pellets in the [Distribution view](!#distribution-view), collapsed into buckets the moment they land.`,
      link: '',
    },

    obj5: {
      title: `Distribution View`,
      content: `The Distribution view animates the actual multiplication of $(a+b)^n$ term by term. At the top, $n$ factor boxes show the literal $a + b$ that gets multiplied $n$ times. As the animation runs:

• One pick per factor lights up: for each $(a+b)$, either $a$ or $b$ is selected (highlighted blue).

• The current product (e.g., $a \\cdot b \\cdot a = a^2 b$) is shown below the factor row.

• The product lands as a pellet inside one of the $n + 1$ **buckets** below, grouped by the resulting term.

Three controls drive the animation:

• **Step ▶** — deliver one product at a time. Useful for slow walkthroughs.

• **Auto-expand / ⏸ Pause / Replay** — continuous play at about 540 ms per product.

• **↺ Reset** — clear the buckets and start over.

By the time all $2^n$ products are delivered, each bucket holds exactly $\\binom{n}{k}$ pellets. The final expansion box at the bottom lights up to show the resulting polynomial.`,
      before: ``,
      after: `The frame above freezes the finished run at $n = 3$: the last product $b \\cdot b \\cdot b$ locked in the factor boxes, eight pellets sorted $1{+}3{+}3{+}1$ into their buckets, and the expansion line lit. Where the tree shows the choice *structure*, this view shows the choice *process* — the same $2^n$ sequences arriving one at a time, which is exactly what "multiplying out the brackets" means when done honestly.

The pellets keep their identity inside the buckets (each is labeled with its history, $aab$ or $bba$), so the frozen frame doubles as a proof that no product was lost or double-counted: eight sequences in, eight pellets out. The [Pascal Paths view](!#pascal-paths-view) then abandons the products entirely and keeps only the counting.`,
      link: '',
    },

    obj6: {
      title: `Pascal Paths View`,
      content: `The Pascal Paths view renders rows 0 through $n$ of Pascal&apos;s triangle as a graph: cells are circles labeled with the binomial coefficient values, and gray lines connect each cell to the two cells below.

The interaction is the key feature: **hover any cell** and the tool draws every path from the apex to that cell. To reach cell $(n, k)$, you take $n$ steps total, $k$ of which are right-moves; the number of such paths is exactly $\\binom{n}{k}$, which is the cell&apos;s value.

Two side cards update with the hover:

• **Selected Cell** — shows row, column, the value $C(n, k)$, and the number of highlighted paths.

• **Why C(n, k)?** — explains that the path count equals $n! / (k! \\cdot (n-k)!)$ &mdash; choosing which $k$ of the $n$ steps go right.

Below the triangle, a note reminds you that every cell&apos;s value equals the sum of the two cells above &mdash; that&apos;s **Pascal&apos;s rule**, which is the same as saying *paths arriving here = paths from the left parent + paths from the right parent*.`,
      before: ``,
      after: `The frozen frame engages the hover the way a visitor would: cell $(3, 1)$ selected, its three paths fanned out in amber from the apex, the touched cells tinted. Three paths, coefficient $3$ — the same number the tree counted as leaves and the distribution counted as pellets, now counted as routes.

This is the most abstract of the three views, and the most powerful: the letters $a$ and $b$ are gone entirely, leaving pure combinatorics. Every left-move is "choose $a$", every right-move "choose $b$" — the correspondence that makes all three views one theorem. For the triangle at full size, with $C(5,2) = 10$ paths crowding the frame, see [the fifth row](!#the-fifth-row).`,
      link: '',
    },

    obj7: {
      title: `Reading the Coefficients`,
      content: `Across all three views, the **coefficient sequence** for $(a+b)^n$ is the same: row $n$ of Pascal&apos;s triangle. Reading from $k = 0$ to $k = n$:

• **Row 0**: $1$

• **Row 1**: $1, 1$

• **Row 2**: $1, 2, 1$

• **Row 3**: $1, 3, 3, 1$

• **Row 4**: $1, 4, 6, 4, 1$

• **Row 5**: $1, 5, 10, 10, 5, 1$

The symmetry $\\binom{n}{k} = \\binom{n}{n-k}$ shows up as left-right symmetry in every row. The end values are always $\\binom{n}{0} = \\binom{n}{n} = 1$, because there&apos;s exactly one path with no b&apos;s (all a&apos;s) and one with all b&apos;s.

The sum of each row equals $2^n$, the total number of leaves in the decision tree. This is the identity $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$ &mdash; visible directly as &quot;total leaves = sum of group sizes.&quot;`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Are Binomial Coefficients`,
      content: `**Binomial coefficients** are the numbers $\\binom{n}{k}$ that appear when you expand $(a+b)^n$. They have three equivalent definitions, each emphasized by one of the tool&apos;s views.

**Combinatorial.** $\\binom{n}{k}$ counts the number of ways to choose a subset of size $k$ from a set of $n$ distinct items, ignoring order. Equivalently, the number of length-$n$ binary strings with exactly $k$ ones.

**Algebraic.** $\\binom{n}{k}$ is the coefficient of $a^{n-k} b^k$ in the expansion of $(a+b)^n$. The **binomial theorem** states:

$$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} \\, a^{n-k} \\, b^k$$

**Recursive.** $\\binom{n}{k}$ equals the sum of $\\binom{n-1}{k-1}$ and $\\binom{n-1}{k}$, with boundary values $\\binom{n}{0} = \\binom{n}{n} = 1$. This is **Pascal&apos;s rule**, which gives the triangle its construction.

All three definitions agree because they all count the same thing: ways to mark $k$ slots out of $n$.

For deeper coverage, see the **binomial theorem** section in the algebra theory pages.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `C(n,k) Formula and Pascal's Rule`,
      content: `The closed-form formula for the binomial coefficient is:

$$\\binom{n}{k} = \\frac{n!}{k! \\, (n - k)!}$$

The factorial $n!$ counts ordered arrangements of all $n$ items. Dividing by $k!$ removes the order within the chosen group; dividing by $(n - k)!$ removes the order within the unchosen group. What remains is the count of unordered subsets of size $k$.

**Pascal&apos;s rule** gives a recursive shortcut:

$$\\binom{n}{k} = \\binom{n - 1}{k - 1} + \\binom{n - 1}{k}$$

The combinatorial reading: to choose $k$ items from $n$, either include the last item (then choose $k - 1$ from the first $n - 1$) or exclude it (then choose $k$ from the first $n - 1$). The path-counting reading: to reach cell $(n, k)$, arrive from the left parent $(n - 1, k - 1)$ or the right parent $(n - 1, k)$.

The triangle&apos;s rows are built up using this rule alone: start with $\\binom{0}{0} = 1$, and every row below is generated by adjacent sums.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Binomial theorem** — the identity that names the coefficients. Generalizes to non-integer and negative exponents through the generalized binomial series.

**Multinomial coefficients** — generalize to more than two terms: $\\binom{n}{k_1, k_2, \\dots, k_m}$ counts ways to split $n$ items into groups of given sizes. Appears in the expansion of $(x_1 + x_2 + \\dots + x_m)^n$.

**Combinations and permutations** — the two foundational counting concepts. Binomial coefficients are exactly combinations: $\\binom{n}{k} = C(n, k)$.

**Polynomial multiplication** — binomial expansion is a special case. The multiplication grid for $(a + b) \\cdot (a + b)$ has four cells; for $(a + b)^n$ the grid is $n$-dimensional, and the diagonals collect like terms.

**Probability** — binomial coefficients drive the **binomial distribution**: $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n-k}$. The same $\\binom{n}{k}$ that appears in $(a + b)^n$ counts the success patterns.

**Catalan numbers and other combinatorial sequences** — many counting sequences are built from binomial coefficients via simple combinations.

**Algebra calculator** — for symbolic expansions of $(a + b)^n$ at arbitrary $n$, see the **binomial expansion calculator** in the algebra calculators section.`,
      before: ``,
      after: ``,
      link: '',
    },

    // ---- Line 1 per-state sections: the n-boundary states ----

    obj11: {
      title: `The Base Case n = 1`,
      content: `Set $n = 1$ in the Decision Tree view and the whole apparatus shrinks to its atom: one split, two leaves ($a$ and $b$), two groups of size one, and the expansion $(a+b)^1 = a + b$.`,
      before: ``,
      after: `Trivial cases earn their sections by calibrating everything else. Here the tree *is* one binary choice, so every claim the tool makes becomes checkable by eye: $2^1 = 2$ leaves, coefficients $1, 1$ matching row 1 of Pascal's triangle, and group size equal to path count because each group holds exactly one path.

The base case is also the induction seed the other frames grow from: the $n = 3$ tree is this split repeated at every node, three levels deep. Read them in sequence — this frame, then [the full Decision Tree view](!#decision-tree-view) — and the doubling $2 \\to 4 \\to 8$ that produces the $2^n$ law is visible as pure branching.`,
      link: '',
    },

    obj12: {
      title: `The Fifth Row`,
      content: `The other extreme: $n = 5$ in the Pascal Paths view, frozen with cell $(5, 2)$ engaged — ten amber paths converging on the value $10$, the largest coefficient the tool displays.`,
      before: ``,
      after: `Ten paths is where counting by eye starts to fail, which is precisely the frame's point: the coefficient $10$ is no longer surveyable as a picture, but it is still *computable* as $C(5,2) = 5!/(2! \\cdot 3!)$ — the moment the formula earns its keep over enumeration. The fan of overlapping routes conveys the growth honestly: rows sum to $2^n$, and by row five that is already $32$.

The frame also shows why the tool caps at $n = 5$: another row would double the path counts again and the visualization would stop informing. The cap is not a limitation of the mathematics — the factorial formula continues indefinitely — but an honest boundary of what pictures can teach. Beyond it, the [Pascal Paths view](!#pascal-paths-view)'s ideas carry on symbolically.`,
      link: '',
    },
    obj13: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a binomial coefficient?",
      answer: "A binomial coefficient C(n,k), read 'n choose k', is the number of ways to pick k items from n distinct items when order does not matter. It also appears as the coefficient of a to the (n-k) times b to the k in the expansion of (a+b) to the n. The same number shows up as cell (n,k) in Pascal's triangle."
    },
    obj2: {
      question: "What is the formula for C(n,k)?",
      answer: "C(n,k) equals n factorial divided by (k factorial times (n minus k) factorial). For example, C(5,2) equals 5! divided by (2! times 3!) which equals 120 divided by 12, giving 10. The formula counts ordered arrangements with n!, then removes the orderings inside the chosen and unchosen groups."
    },
    obj3: {
      question: "How does Pascal's triangle relate to binomial coefficients?",
      answer: "Row n of Pascal's triangle is the sequence of binomial coefficients C(n,0), C(n,1), through C(n,n). The triangle is built so each cell equals the sum of the two cells above it, which is Pascal's rule: C(n,k) equals C(n-1,k-1) plus C(n-1,k). This makes the triangle a quick way to read off binomial coefficients for small n."
    },
    obj4: {
      question: "What does (a+b)^n look like when expanded?",
      answer: "The binomial theorem says (a+b) to the n equals the sum from k=0 to k=n of C(n,k) times a to the (n-k) times b to the k. For n=3 that is a^3 + 3 a^2 b + 3 a b^2 + b^3. The coefficients 1, 3, 3, 1 are row 3 of Pascal's triangle."
    },
    obj5: {
      question: "Why does each cell in Pascal's triangle equal the sum of the two cells above it?",
      answer: "Because of Pascal's rule. To choose k items from n, either include the last item (then choose k minus 1 from the remaining n minus 1) or exclude it (then choose k from the remaining n minus 1). Adding those two cases gives C(n,k) equals C(n-1,k-1) plus C(n-1,k), which is exactly how the cell is built from its two parents above."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Binomial Coefficient Visualizer",
      "description": "Interactive tool that shows binomial coefficients through three connected views: a decision tree, an animated expansion of (a+b)^n, and Pascal's triangle as a path counter.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/binomial-coefficient",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three synchronized views for binomial coefficients: decision tree, animated distribution, and Pascal's triangle",
        "Adjustable n from 1 to 5 with formula and triangle layout updating live",
        "Decision tree with color-coded leaves grouped by b-exponent and hover highlighting",
        "Animated distribution that walks through every choice sequence and drops products into like-term buckets",
        "Pascal's triangle that highlights every path from the apex to any hovered cell",
        "Side cards showing C(n,k) value, factorial formula, and path count per selected cell",
        "Consistent color palette across views so the same coefficient is visible in each lens"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "binomial coefficient, binomial coefficient visualizer, binomial coefficients, binomial theorem, Pascal's triangle, binomial expansion, n choose k, C(n,k), binomial coefficient formula, binomial coefficient visualization, (a+b)^n expansion, Pascal's triangle visualizer, how to find binomial coefficient, binomial theorem visualizer, binomial expansion visualizer"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Binomial Coefficient Visualizer",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/binomial-coefficient"
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


  // Frozen-state framed units (Line 1): the three views at the default n = 3
  // plus the two n-boundary states. Built here, passed via props, rendered as
  // content-array items.
  const d = binomialCoefficientDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    'view-tree': u('view-tree', 'Decision Tree, n = 3, frozen',
      'Eight leaves in four color groups, the group cards counting 1, 3, 3, 1 &#8212; coefficients as populations of paths.'),
    'view-distribution': u('view-distribution', 'Distribution, n = 3, complete',
      'All eight products delivered: the last pick b&#183;b&#183;b locked in the factors, pellets sorted into buckets, expansion lit.'),
    'view-pascal': u('view-pascal', 'Pascal Paths, cell (3, 1) engaged',
      'Three amber routes from the apex to the value 3 &#8212; the coefficient counted as paths, letters gone entirely.'),
    'tree-n1': u('tree-n1', 'Decision Tree, n = 1, frozen',
      'The atom of the whole tool: one split, two leaves, coefficients 1, 1 &#8212; every claim checkable by eye.'),
    'pascal-n5': u('pascal-n5', 'Pascal Paths, cell (5, 2) engaged',
      'Ten overlapping routes converge on 10 &#8212; the point where enumeration fails the eye and the factorial formula takes over.'),
  };

  // Per-state panel explanations (Line 1). Rendered under the active view
  // through processContent — $math$ and same-page !# anchors work.
  const explanations = {
    'view-tree': `Multiplication never adds — it enumerates: the coefficient $3$ exists because three distinct paths produce indistinguishable products. [Learn more about the tree view](!#decision-tree-view) · [All three views](!#the-three-views)`,
    'view-distribution': `The same $2^n$ choice sequences, arriving one at a time — "multiplying out the brackets" done honestly, with no product lost. [Learn more about the distribution view](!#distribution-view) · [All three views](!#the-three-views)`,
    'view-pascal': `Letters gone, counting kept: left-moves are "choose $a$", right-moves "choose $b$" — the correspondence that makes the three views one theorem. [Learn more about the Pascal view](!#pascal-paths-view) · [All three views](!#the-three-views)`,
    'tree-n1': `The induction seed: one split, $2^1 = 2$ leaves, row 1 of the triangle — everything the larger frames grow from. [Learn more about the base case](!#the-base-case-n-1) · [Adjusting n](!#adjusting-n)`,
    'pascal-n5': `Ten paths defeat the eye but not the formula — $C(5,2) = 5!/(2! \\cdot 3!)$ is the moment enumeration hands over to computation. [Learn more about the fifth row](!#the-fifth-row) · [Adjusting n](!#adjusting-n)`,
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Binomial Coefficient Visualizer: C(n,k) | Learn Math Class",
        description: "See where binomial coefficients come from: a decision tree of choice paths, products landing in like-term buckets, and Pascal's triangle as a path count.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/binomial-coefficient",
        name: "Binomial Coefficient Visualizer",
        hubDescription: "See where binomial coefficients come from through three connected views: a decision tree counting paths, an animated product expansion of (a+b)^n into like-term buckets, and Pascal's triangle as a path-counting grid. Adjust n from 1 to 5.",
        category: "Binomials",
        subCategory: "",
        svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>
    .edge { stroke: #cbd5e1; stroke-width: 1; }
    .lbl { font-family: Georgia, "Cambria Math", serif; font-size: 11px; font-weight: 700; text-anchor: middle; }
  </style>

  <!-- Structural edges -->
  <line class="edge" x1="100" y1="30" x2="85"  y2="62"/>
  <line class="edge" x1="100" y1="30" x2="115" y2="62"/>

  <line class="edge" x1="85"  y1="62" x2="70"  y2="94"/>
  <line class="edge" x1="85"  y1="62" x2="100" y2="94"/>
  <line class="edge" x1="115" y1="62" x2="100" y2="94"/>
  <line class="edge" x1="115" y1="62" x2="130" y2="94"/>

  <line class="edge" x1="70"  y1="94" x2="55"  y2="126"/>
  <line class="edge" x1="70"  y1="94" x2="85"  y2="126"/>
  <line class="edge" x1="100" y1="94" x2="85"  y2="126"/>
  <line class="edge" x1="100" y1="94" x2="115" y2="126"/>
  <line class="edge" x1="130" y1="94" x2="115" y2="126"/>
  <line class="edge" x1="130" y1="94" x2="145" y2="126"/>

  <line class="edge" x1="55"  y1="126" x2="40"  y2="158"/>
  <line class="edge" x1="55"  y1="126" x2="70"  y2="158"/>
  <line class="edge" x1="85"  y1="126" x2="70"  y2="158"/>
  <line class="edge" x1="85"  y1="126" x2="100" y2="158"/>
  <line class="edge" x1="115" y1="126" x2="100" y2="158"/>
  <line class="edge" x1="115" y1="126" x2="130" y2="158"/>
  <line class="edge" x1="145" y1="126" x2="130" y2="158"/>
  <line class="edge" x1="145" y1="126" x2="160" y2="158"/>

  <!-- Row 0 -->
  <circle cx="100" cy="30" r="13" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text class="lbl" x="100" y="34" fill="#312e81">1</text>

  <!-- Row 1 -->
  <circle cx="85"  cy="62" r="13" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text class="lbl" x="85"  y="66" fill="#312e81">1</text>
  <circle cx="115" cy="62" r="13" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text class="lbl" x="115" y="66" fill="#78350f">1</text>

  <!-- Row 2 -->
  <circle cx="70"  cy="94" r="13" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text class="lbl" x="70"  y="98" fill="#312e81">1</text>
  <circle cx="100" cy="94" r="13" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text class="lbl" x="100" y="98" fill="#78350f">2</text>
  <circle cx="130" cy="94" r="13" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text class="lbl" x="130" y="98" fill="#134e4a">1</text>

  <!-- Row 3 -->
  <circle cx="55"  cy="126" r="13" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text class="lbl" x="55"  y="130" fill="#312e81">1</text>
  <circle cx="85"  cy="126" r="13" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text class="lbl" x="85"  y="130" fill="#78350f">3</text>
  <circle cx="115" cy="126" r="13" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text class="lbl" x="115" y="130" fill="#134e4a">3</text>
  <circle cx="145" cy="126" r="13" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text class="lbl" x="145" y="130" fill="#4c1d95">1</text>

  <!-- Row 4 -->
  <circle cx="40"  cy="158" r="13" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <text class="lbl" x="40"  y="162" fill="#312e81">1</text>
  <circle cx="70"  cy="158" r="13" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text class="lbl" x="70"  y="162" fill="#78350f">4</text>
  <circle cx="100" cy="158" r="13" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text class="lbl" x="100" y="162" fill="#134e4a">6</text>
  <circle cx="130" cy="158" r="13" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text class="lbl" x="130" y="162" fill="#4c1d95">4</text>
  <circle cx="160" cy="158" r="13" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text class="lbl" x="160" y="162" fill="#14532d">1</text>
</svg>`
      },

    }
  }
}

export default function BinomialCoefficientVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / per-state section carrying its frozen unit
  // as [content, unit, after].
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ]
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),

    plain('obj2', 'the-three-views'),
    stateRow('obj4', 'decision-tree-view', 'view-tree'),
    stateRow('obj5', 'distribution-view', 'view-distribution'),
    stateRow('obj6', 'pascal-paths-view', 'view-pascal'),

    plain('obj3', 'adjusting-n'),
    stateRow('obj11', 'the-base-case-n-1', 'tree-n1'),
    stateRow('obj12', 'the-fifth-row', 'pascal-n5'),

    plain('obj7', 'reading-the-coefficients'),
    plain('obj8', 'what-are-binomial-coefficients'),
    plain('obj9', 'c-n-k-formula-and-pascals-rule'),
    plain('obj10', 'related-concepts'),
  ]


  /* Pre-Line-1 numeric-id section rows, superseded by the slug build above:
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [
        sectionsContent.obj9.content,
      ]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [
        sectionsContent.obj10.content,
      ]
    },
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

  ] */

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
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
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Binomial Coefficient Visualizer</h1>
      <br/>
      <div style={{transform:'scale(0.85)'}}>
        <BinomialCoefficientsVisualizer explanations={explanations}/>
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      <br/>
      {/* <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}