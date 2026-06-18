import Head from 'next/head'
import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '@/pages/pages.css'

// Adjust if your actual paths differ.
import SequenceExplorer from '../../../../app/components/sequences/explorer/SequenceExplorer'
import ParametricSequenceExplorer from '../../../../app/components/sequences/parametric-explorer/ParametricSequenceExplorer'


// =====================================================
// Per-slug config.
//
// Field roles:
//   key            \u2014 internal sequence identifier passed to the explorer.
//                   Renamed from `name` so it does NOT collide with the
//                   buildToolIndexData extractor (which treats `name` as a
//                   display title and would otherwise read "triangular").
//   kind           \u2014 'plain' \u2192 SequenceExplorer; 'parametric' \u2192 ParametricSequenceExplorer.
//   title          \u2014 short display name for cards (auto-pulled).
//   h1             \u2014 long page heading.
//   seoTitle       \u2014 full <title> tag value.
//   description    \u2014 card + meta description (with $..$ math).
//   keywords       \u2014 meta keywords.
//   category       \u2014 used by VisualToolsPage to group cards.
//   icon           \u2014 single-char or short-string icon.
//   url            \u2014 explicit literal href for buildToolIndexData. Each
//                   entry must have its own url field so the extractor
//                   never falls back to scanning getStaticProps (whose
//                   template-literal `${params.view}` is unresolvable in
//                   raw-text regex extraction).
//
// Encoding notes:
//   buildToolIndexData reads this file as RAW TEXT and extracts string
//   literals with a regex. It does NOT execute the file. Therefore:
//     * Icons must be actual unicode characters, not `\u25B3` escapes
//       \u2014 the extractor captures the escape literally, not the char.
//     * LaTeX uses single backslashes, not `\\`, for the same reason:
//       in source `\\mathrm` is two literal characters that arrive as
//       `\\mathrm` in the card. Single-backslash `\mathrm` arrives as
//       `\mathrm`, which the math renderer wants.
// =====================================================
const viewConfig = {

  'triangular-numbers': {
    kind: 'plain',
    key: 'triangular',
    title: 'Triangular Numbers',
    h1: 'Triangular Numbers Calculator',
    seoTitle: 'Triangular Numbers Calculator \u2014 Browse, Test, Lookup | Learn Math Class',
    description:
      'Step-by-step calculator and explorer for the triangular numbers $T_n = n(n+1)/2$. ' +
      'List the first N terms with their sum, list a range of indexes, test whether a number is triangular ' +
      '(using the $8m + 1$ perfect-square identity), or look up $T_n$ directly. Side-panel walkthroughs use your actual inputs.',
    keywords: 'triangular numbers, triangular number formula, triangular number test, T_n calculator, figurate numbers, n(n+1)/2',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: '△',
    url: '/algebra/calculators/sequences/triangular-numbers',
   faqQuestions: {
  obj1: {
    question: "What are triangular numbers?",
    answer: "Triangular numbers are the integers that count dots arranged in equilateral triangles: 1, 3, 6, 10, 15, 21, 28, 36, and so on. The n-th triangular number equals the sum of the first n positive integers, given by the closed form T sub n equals n times the quantity n plus 1, divided by 2."
  },
  obj2: {
    question: "What is the triangular number formula?",
    answer: "The closed form is T sub n equals n times the quantity n plus 1, divided by 2. Equivalently, T sub n equals the sum from k equals 1 to n of k. The formula gives an exact integer result for every positive integer n because either n or n plus 1 is even."
  },
  obj3: {
    question: "How do you test whether a number is triangular?",
    answer: "A positive integer m is triangular if and only if 8m plus 1 is a perfect square. If the square root of 8m plus 1 is the integer s, then m equals T sub n where n equals the quantity s minus 1, divided by 2. This test is exact and constant-time."
  },
  obj4: {
    question: "What is the sum of the first n triangular numbers?",
    answer: "The sum of the first n triangular numbers is the n-th tetrahedral number: T sub 1 plus T sub 2 plus T sub n equals n times the quantity n plus 1 times the quantity n plus 2, divided by 6. Tetrahedral numbers count dots in a triangular pyramid the way triangular numbers count dots in a triangle."
  },
  obj5: {
    question: "Where do triangular numbers appear in mathematics?",
    answer: "Triangular numbers appear in combinatorics (the number of unordered pairs from n plus 1 objects equals T sub n), in algebra (the number of handshakes among n plus 1 people), in geometry (lattice points in a triangle), and as a row of Pascal's triangle. They also appear in the partial sums of arithmetic series and in the Gauss summation identity."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Triangular Number?`,
    content: `A triangular number is the count of dots needed to form an equilateral triangle of side length $n$. Starting with one dot at the top and adding one more dot to each successive row:

$$T_1 = 1, \\quad T_2 = 3, \\quad T_3 = 6, \\quad T_4 = 10, \\quad T_5 = 15, \\quad \\ldots$$

The $n$-th triangular number $T_n$ equals the sum of the first $n$ positive integers:

$$T_n = 1 + 2 + 3 + \\cdots + n = \\sum_{k=1}^{n} k$$

This sum has a famous closed form, sometimes called the Gauss formula:

$$T_n = \\frac{n(n+1)}{2}$$

The pairing trick that produces the formula: write the sum forward and backward, add term by term to get $n$ pairs of $n + 1$, divide by 2. Carl Friedrich Gauss is said to have rediscovered this at age 9. For deeper coverage see **triangular number**, **arithmetic series**, and **Gauss summation**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form and Why It Works`,
    content: `Two distinct proofs of $T_n = n(n+1)/2$ — both worth knowing.

**Algebraic (Gauss pairing).** Write the sum and its reverse:

$$\\begin{aligned} S &= 1 + 2 + 3 + \\cdots + n \\\\ S &= n + (n-1) + (n-2) + \\cdots + 1 \\end{aligned}$$

Adding column by column gives $n$ pairs each summing to $n + 1$:

$$2S = n(n+1) \\implies S = \\frac{n(n+1)}{2}$$

**Geometric (rectangle).** Two copies of a triangular dot pattern can be rotated and fitted together into an $n$ by $n + 1$ rectangle. The rectangle has $n(n+1)$ dots; one triangle has half:

$$T_n = \\frac{n(n+1)}{2}$$

**Why the formula is always an integer.** Of $n$ and $n + 1$, one is even, so the product is divisible by 2. The formula produces an integer for every positive integer $n$.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, deciding whether it is triangular reduces to a perfect-square check.

**The test.** $m$ is triangular if and only if $8m + 1$ is a perfect square. When it is, the index is

$$n = \\frac{\\sqrt{8m + 1} - 1}{2}$$

**Why it works.** From $T_n = n(n+1)/2 = m$, multiply by 8 and add 1:

$$4n^2 + 4n + 1 = 8m + 1 \\implies (2n+1)^2 = 8m + 1$$

So $8m + 1$ is a perfect square exactly when $m$ is triangular, and the square root recovers $n$.

**Example.** Is 120 triangular? Compute $8 \\cdot 120 + 1 = 961$. Then $\\sqrt{961} = 31$, an integer. So $n = (31 - 1)/2 = 15$, meaning $120 = T_{15}$. Indeed $15 \\cdot 16 / 2 = 120$.

**Non-example.** Is 100 triangular? Compute $8 \\cdot 100 + 1 = 801$. Then $\\sqrt{801} \\approx 28.30$, not an integer. So 100 is not triangular. The nearest triangular numbers are $T_{13} = 91$ and $T_{14} = 105$.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `Triangular numbers satisfy many identities that connect them to other figurate numbers and counting problems.

• **Recurrence**: $T_n = T_{n-1} + n$ with $T_1 = 1$. Each triangular number adds one more row to the triangle.
• **Binomial coefficient**: $T_n = \\binom{n+1}{2}$. The $n$-th triangular number counts unordered pairs from $n + 1$ objects.
• **Sum of consecutive triangulars**: $T_n + T_{n-1} = n^2$. Two consecutive triangular numbers add to a perfect square.
• **Sum of first $n$ triangulars**: $T_1 + T_2 + \\cdots + T_n = \\frac{n(n+1)(n+2)}{6} = \\mathrm{Te}_n$, the $n$-th **tetrahedral number**.
• **Sum of first $n$ cubes**: $1^3 + 2^3 + \\cdots + n^3 = T_n^2$. The sum of the first $n$ cubes equals the square of the $n$-th triangular number.
• **Hexagonal connection**: every hexagonal number is also triangular: $H_n = T_{2n-1}$.
• **Square triangulars**: a triangular number that is also a perfect square satisfies a Pell equation; examples are 1, 36, 1225, 41616, infinitely many but sparse.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Common Applications`,
    content: `Triangular numbers appear naturally in counting problems where every pair, edge, or comparison is counted once.

• **Handshakes.** In a room of $n + 1$ people who all shake hands once, the total number of handshakes is $T_n$.
• **Pairs from a set.** The number of unordered pairs from $n + 1$ items is $\\binom{n+1}{2} = T_n$.
• **Round-robin tournaments.** A tournament where each of $n + 1$ players plays every other once has $T_n$ matches.
• **Edges in a complete graph.** The complete graph on $n + 1$ vertices, $K_{n+1}$, has $T_n$ edges.
• **Diagonals plus sides.** An $(n + 1)$-gon has $T_n$ total segments (diagonals plus sides) connecting its vertices.
• **Stacked objects.** Bowling pins, billiard balls, and any triangularly-stacked array of $n$ rows contain $T_n$ objects.
• **Lazy caterer.** The maximum number of pieces from $n$ straight cuts of a pizza is $T_n + 1$ — the cake number minus a constant.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Triangular Numbers and Pascal's Triangle`,
    content: `Triangular numbers form a diagonal of Pascal's triangle. The third diagonal (counting from 0) reads 1, 3, 6, 10, 15, 21, exactly the triangular numbers.

The identity $T_n = \\binom{n+1}{2}$ says: the $n$-th triangular number equals the number of ways to choose 2 items from $n + 1$. The connection between binomial coefficients and figurate numbers generalizes: the $k$-th diagonal of Pascal's triangle gives the $k$-dimensional figurate numbers.

• **Diagonal 0**: all 1's — the trivial sequence.
• **Diagonal 1**: 1, 2, 3, 4, the natural numbers (1-dimensional simplex counts).
• **Diagonal 2**: 1, 3, 6, 10, the **triangular numbers** (2D triangle counts).
• **Diagonal 3**: 1, 4, 10, 20, the **tetrahedral numbers** (3D triangle pyramid counts).
• **Diagonal 4**: 1, 5, 15, 35, the pentatope numbers (4D simplex counts).

This nesting is captured by the **hockey-stick identity**: summing any diagonal up to a point gives the next diagonal's entry. The sum of the first $n$ triangular numbers being $\\mathrm{Te}_n$ is one instance.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Off-by-one in the index.** $T_1 = 1$, not $T_0 = 1$. The convention starts at $n = 1$. Some sources start at $n = 0$ with $T_0 = 0$; the explorer here uses $T_1 = 1$.

• **Confusing triangular with square or other figurate numbers.** A triangular number counts dots in a triangle; a square number counts dots in a square; a pentagonal number counts dots in a pentagon. The closed forms differ: $T_n = n(n+1)/2$, $S_n = n^2$, $P_n = n(3n-1)/2$. Numbers can be both (e.g., 1 and 36 are both triangular and square).

• **Misapplying the membership test.** The test is $8m + 1$ a perfect square, not $m + 1$ or $4m + 1$. The factor 8 comes from completing the square in $n^2 + n = 2m$.

• **Negative or fractional indexes.** The closed form $n(n+1)/2$ technically extends to all real $n$, but only positive integers are triangular numbers in the standard sense. $T_{1.5}$ has no combinatorial meaning.

• **Confusing the sum with the count.** $T_n$ is the sum of the first $n$ integers, not the count. The count is $n$ itself.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Square Numbers** — $S_n = n^2$. Dots arranged in a square. $T_n + T_{n-1} = n^2$ connects triangular and square numbers.

**Pentagonal Numbers** — $P_n = n(3n-1)/2$. The next figurate family. Membership test uses $24m + 1$.

**Hexagonal Numbers** — $H_n = n(2n-1)$. Every hexagonal number is triangular: $H_n = T_{2n-1}$.

**Tetrahedral Numbers** — $\\mathrm{Te}_n = n(n+1)(n+2)/6$. The sum of the first $n$ triangular numbers; the 3D analog.

**Square Triangular Numbers** — numbers that are both triangular and square: 1, 36, 1225, 41616, ... They satisfy a Pell equation and grow exponentially.

**Arithmetic Series** — $T_n$ is the sum of the first $n$ terms of the arithmetic series with $a_1 = 1$, $d = 1$. The general formula $S_n = n(a_1 + a_n)/2$ specializes to $T_n$.

**Gauss Sum** — the classical formula for $1 + 2 + \\cdots + n$, equal to $T_n$. The cornerstone of summation techniques.

**Pascal's Triangle** — row positions $\\binom{n+1}{2} = T_n$. Triangular numbers form the third diagonal.

**Binomial Coefficient** — $T_n = \\binom{n+1}{2}$. The number of unordered pairs from $n + 1$ objects.

**Combinatorics** — the discipline. Triangular numbers solve canonical counting problems: pairs, handshakes, edges in complete graphs.

**Figurate Numbers** — the general family of polygonal and polyhedral counts. Triangular numbers are the 2D, 3-sided case.

**Polygonal Numbers** — the umbrella term for triangular, square, pentagonal, hexagonal, heptagonal, octagonal, and so on. The $r$-gonal number formula is $P_n^{(r)} = \\frac{n[(r-2)n - (r-4)]}{2}$.`,
    before: ``, after: ``, link: ''
  }
}
  },

  'square-numbers': {
    kind: 'plain',
    key: 'square',
    title: 'Square Numbers',
    h1: 'Square Numbers Calculator',
    seoTitle: 'Square Numbers Calculator \u2014 Perfect Squares Browser and Tester | Learn Math Class',
    description:
      'Explore the square numbers $S_n = n^2$: 1, 4, 9, 16, 25, 36, ... List the first N terms, list a range, test whether a number is a perfect square, ' +
      'or look up $S_n$ directly. Membership testing checks whether $\\sqrt{m}$ is an integer; walkthroughs show every step.',
    keywords: 'square numbers, perfect squares, perfect square test, n squared, square number formula, figurate numbers',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: '■',
    url: '/algebra/calculators/sequences/square-numbers',
   faqQuestions: {
  obj1: {
    question: "What are square numbers?",
    answer: "Square numbers are the integers that count dots arranged in squares: 1, 4, 9, 16, 25, 36, 49, 64, and so on. The n-th square number equals n times n, given by the closed form S sub n equals n squared. Equivalently, square numbers are the perfect squares of positive integers."
  },
  obj2: {
    question: "What is the formula for square numbers?",
    answer: "The closed form is S sub n equals n squared, or n times n. The sum of the first n square numbers is given by the formula n times the quantity n plus 1 times the quantity 2n plus 1, all divided by 6. Square numbers are also the sum of consecutive odd numbers: 1, then 1 plus 3, then 1 plus 3 plus 5, and so on."
  },
  obj3: {
    question: "How do you test whether a number is a perfect square?",
    answer: "A positive integer m is a perfect square if and only if the square root of m is itself a positive integer. Compute the square root, round to the nearest integer, square the result, and compare to m. If they match, m is a perfect square and its index in the sequence equals the square root."
  },
  obj4: {
    question: "What is the difference between square numbers and squared numbers?",
    answer: "Square numbers refer to the sequence 1, 4, 9, 16, 25 of perfect squares of positive integers, treated as a figurate number sequence. Squared numbers refers to any value raised to the power 2, including fractions, negatives, and irrationals. The square numbers are the subset of squared numbers where the base is a positive integer."
  },
  obj5: {
    question: "Where do square numbers appear in mathematics?",
    answer: "Square numbers appear in geometry (the area of a square with side n), in algebra (the discriminant of a quadratic, perfect-square completion), in number theory (Lagrange's four-square theorem, Pythagorean triples), in combinatorics, and as a diagonal of figurate-number tables. Sums of squares appear in physics and statistics."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Square Number?`,
    content: `A square number is the count of dots needed to form a square of side $n$. Starting with one dot and adding a border of dots each step:

$$S_1 = 1, \\quad S_2 = 4, \\quad S_3 = 9, \\quad S_4 = 16, \\quad S_5 = 25, \\quad \\ldots$$

The $n$-th square number is

$$S_n = n^2 = n \\cdot n$$

This is the simplest of all figurate-number formulas. Geometrically, $S_n$ is the area of a square with integer side length $n$ (counted in unit squares), or equivalently the number of unit lattice points in such a square.

**Alternative characterization.** Square numbers are the sums of consecutive odd numbers from 1:

$$\\begin{aligned} 1 &= 1 = S_1 \\\\ 1 + 3 &= 4 = S_2 \\\\ 1 + 3 + 5 &= 9 = S_3 \\\\ 1 + 3 + 5 + 7 &= 16 = S_4 \\end{aligned}$$

In general, $S_n = 1 + 3 + 5 + \\cdots + (2n - 1)$, the sum of the first $n$ odd numbers.

For deeper coverage see **square number**, **perfect square**, and **figurate numbers**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form and the Gnomon`,
    content: `**Closed form.** $S_n = n^2$ — the simplest formula in the figurate family.

**Geometric proof via gnomons.** A gnomon is the L-shaped piece added to extend one square into the next. Going from an $n$ by $n$ square to an $(n + 1)$ by $(n + 1)$ square requires adding $n$ dots along the right side, $n$ dots along the bottom, and 1 corner dot — a total of $2n + 1$ dots, the $(n + 1)$-th odd number.

Stacking gnomons one at a time gives:

$$S_n = \\sum_{k=1}^{n} (2k - 1)$$

A classical proof that the sum of the first $n$ odd numbers is $n^2$.

**Algebraic identity for the partial sum.** The sum of the first $n$ squares is

$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$

This formula appears in calculus (Riemann sums approaching $x^3/3$), in finance (running totals of squared error), and in basic number theory.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, deciding whether it is a perfect square is straightforward.

**The test.** $m$ is a square number if and only if $\\sqrt{m}$ is a positive integer. Computationally: take the square root, round to the nearest integer $s$, and verify $s^2 = m$. If the equality holds, $m = S_s$. Otherwise $m$ is not a perfect square.

**Why rounding is needed.** Floating-point square root is approximate. $\\sqrt{169}$ might compute to $12.9999999\\ldots$ instead of exactly $13$. Rounding before the verification step avoids missing valid squares.

**Example.** Is 169 a perfect square? Compute $\\sqrt{169} = 13$. Verify $13^2 = 169$. Yes — $169 = S_{13}$.

**Non-example.** Is 200 a perfect square? Compute $\\sqrt{200} \\approx 14.14$. Round to $14$; verify $14^2 = 196 \\neq 200$. So 200 is not a perfect square. The nearest are $S_{14} = 196$ and $S_{15} = 225$.

**Number-theoretic patterns.** A perfect square never ends in 2, 3, 7, or 8 (in base 10). This gives a quick rejection filter before computing the square root, useful in mental arithmetic.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `Square numbers have a rich set of identities — many of them appear in elementary algebra and number theory.

• **Recurrence**: $S_n = S_{n-1} + (2n - 1)$ with $S_1 = 1$. Each square adds the next odd number.
• **Sum of two consecutive triangulars**: $T_n + T_{n-1} = n^2 = S_n$. Two consecutive triangular numbers sum to a square.
• **Difference of consecutive squares**: $S_{n+1} - S_n = 2n + 1$. Consecutive squares differ by consecutive odd numbers.
• **Difference of squares**: $a^2 - b^2 = (a - b)(a + b)$. The most-used factoring identity.
• **Sum of first $n$ squares**: $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$. Polynomial of degree 3 in $n$.
• **Sum of first $n$ cubes**: $\\sum_{k=1}^{n} k^3 = T_n^2 = \\left(\\frac{n(n+1)}{2}\\right)^2$. The sum of cubes is the square of the sum.
• **Lagrange's four-square theorem**: every non-negative integer is a sum of at most four squares. The number of representations is given by Jacobi's formula.
• **Pythagorean triples**: integer solutions to $a^2 + b^2 = c^2$ — sums of two squares equal to a square. The smallest is $3^2 + 4^2 = 5^2$.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Common Applications`,
    content: `Square numbers appear wherever area, energy, or pairwise interactions scale quadratically.

• **Area.** A square with integer side $n$ has area $n^2$. The most direct geometric meaning.
• **Quadratic formulas.** The discriminant $b^2 - 4ac$ is a difference of a square and a multiple. Real roots exist exactly when this is non-negative; rational roots require it to be a perfect square.
• **Distance formula.** The squared distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $(x_2 - x_1)^2 + (y_2 - y_1)^2$, the sum of two squares.
• **Pythagorean theorem.** $a^2 + b^2 = c^2$ for a right triangle. Both classical and modern geometry rely on this.
• **Least squares.** Statistical regression minimizes the sum of squared residuals. The squares come from quadratic loss; the minimum has a closed form involving sums of $S_n$.
• **Variance.** Statistical variance is the average of squared deviations from the mean. Squared deviations weight outliers more than absolute deviations.
• **Inverse square laws.** Gravity, electric force, light intensity, sound intensity — all decay as $1/r^2$ with distance. The square arises from spreading over a surface area proportional to $r^2$.
• **Energy.** Kinetic energy $\\tfrac{1}{2} m v^2$ scales with the square of velocity. Doubling speed quadruples energy.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Square Numbers in Number Theory`,
    content: `Squares are central to many results in number theory. A few of the most important.

**Lagrange's four-square theorem.** Every non-negative integer is the sum of at most four perfect squares. Examples:

$$7 = 4 + 1 + 1 + 1, \\quad 15 = 9 + 4 + 1 + 1, \\quad 23 = 9 + 9 + 4 + 1$$

Three squares aren't enough: $7$ cannot be written as the sum of three perfect squares. The characterization (Legendre's three-square theorem) excludes numbers of the form $4^a (8b + 7)$.

**Fermat's two-square theorem.** A prime $p$ is the sum of two squares if and only if $p = 2$ or $p \\equiv 1 \\pmod 4$. So $5 = 1 + 4$, $13 = 4 + 9$, $17 = 1 + 16$, but $3$, $7$, $11$, $19$ are not.

**Quadratic residues.** A number $a$ is a quadratic residue modulo $p$ if $a \\equiv x^2 \\pmod p$ for some $x$. The structure of which numbers are residues is governed by quadratic reciprocity, one of Gauss's deepest results.

**Pell equation.** $x^2 - D y^2 = 1$ for non-square $D$. Solutions involve continued fractions and generate the square-triangular numbers and other figurate intersections.

**Perfect squares in Pascal's triangle.** Row sums and column sums produce squares in surprising places, including the identity $\\sum \\binom{n}{k}^2 = \\binom{2n}{n}$.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Confusing square with square root.** $S_n = n^2$ means: input the index $n$, output its square. The inverse is the square root: input $m$, output $n = \\sqrt{m}$ (if $m$ is a perfect square). The membership test uses the square root; the lookup uses the square.

• **Floating-point rounding errors in the membership test.** $\\sqrt{169}$ might compute as $12.99999\\ldots$ in floating-point. Always round before verifying with $s^2 = m$. Languages with integer square root functions (like Python's $\\mathrm{isqrt}$) avoid this issue.

• **Forgetting that 0 and 1 are special.** $0^2 = 0$ and $1^2 = 1$, so 0 and 1 are perfect squares by the usual definition. This explorer starts the sequence at $S_1 = 1$, treating 0 as outside the sequence.

• **Confusing square numbers with squared variables.** $S_n = n^2$ uses an integer index. The expression $x^2$ for real or complex $x$ is "the square of $x$" but only special values produce square numbers.

• **Off-by-one when summing.** The sum $1 + 4 + 9 + \\cdots + n^2$ has $n$ terms, equal to $n(n+1)(2n+1)/6$. The sum $1 + 4 + 9 + \\cdots + N$ where $N$ is itself a square (so $N = n^2$) ends at the same place — just stated differently.

• **Last-digit rejection over-eagerness.** A number ending in 0, 1, 4, 5, 6, or 9 might be a perfect square — but only might. $11$, $14$, $19$ are not. The last-digit test only rejects, never confirms.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. The first figurate family. $T_n + T_{n-1} = S_n$ connects them.

**Pentagonal Numbers** — $P_n = n(3n-1)/2$. The next polygonal sequence in the figurate family.

**Hexagonal Numbers** — $H_n = n(2n-1)$. Every hexagonal number is also triangular.

**Cubic Numbers** — $n^3$. The 3D analog of squares.

**Perfect Square** — the same concept as a square number, usually used in number-theoretic contexts. Every square number is a perfect square; the terms are interchangeable.

**Square Triangular Numbers** — numbers that are both square and triangular: 1, 36, 1225, 41616, ... Solutions to a Pell equation.

**Pythagorean Triples** — integer triples $(a, b, c)$ with $a^2 + b^2 = c^2$. The most famous Diophantine equation. Primitive triples are generated by $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$.

**Sum of Squares** — the function $r_k(n)$ counting representations of $n$ as a sum of $k$ squares. Studied extensively from Jacobi to modern modular-forms theory.

**Quadratic Equation** — $ax^2 + bx + c = 0$. Square numbers arise in the discriminant and in completing the square.

**Square Root** — the inverse operation. $\\sqrt{S_n} = n$ for integer $n$.

**Quadratic Residue** — modular arithmetic concept. $a$ is a residue mod $p$ if $a \\equiv x^2 \\pmod p$. Half of nonzero residues mod a prime are quadratic residues.

**Variance and Standard Deviation** — statistical measures involving squared deviations. The "least squares" approach to regression and the central limit theorem depend on the algebra of squares.`,
    before: ``, after: ``, link: ''
  }
}
  },

  'pentagonal-numbers': {
    kind: 'plain',
    key: 'pentagonal',
    title: 'Pentagonal Numbers',
    h1: 'Pentagonal Numbers Calculator',
    seoTitle: 'Pentagonal Numbers Calculator \u2014 P_n = n(3n\u22121)/2 | Learn Math Class',
    description:
      'Calculator and explorer for the pentagonal numbers $P_n = n(3n-1)/2$: 1, 5, 12, 22, 35, 51, ... ' +
      'List the first N terms, list a range, test whether a number is pentagonal (using the $24m + 1$ perfect-square test ' +
      'with the divisibility-by-6 follow-up), or look up $P_n$ directly. Walkthroughs explain every step.',
    keywords: 'pentagonal numbers, pentagonal number formula, P_n calculator, pentagonal number test, 24m+1 test, figurate numbers, n(3n-1)/2',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: '⬠',
    url: '/algebra/calculators/sequences/pentagonal-numbers',
   faqQuestions: {
  obj1: {
    question: "What are pentagonal numbers?",
    answer: "Pentagonal numbers are the integers that count dots arranged in nested pentagons sharing one vertex: 1, 5, 12, 22, 35, 51, 70, 92, and so on. The n-th pentagonal number is given by the closed form P sub n equals n times the quantity 3n minus 1, all divided by 2."
  },
  obj2: {
    question: "What is the pentagonal number formula?",
    answer: "The closed form is P sub n equals n times the quantity 3n minus 1, divided by 2. Equivalently, P sub n equals 1 plus 4 plus 7 plus the n-th term of an arithmetic sequence with first term 1 and common difference 3. The sequence begins 1, 5, 12, 22, 35, 51."
  },
  obj3: {
    question: "How do you test whether a number is pentagonal?",
    answer: "A positive integer m is pentagonal if and only if 24m plus 1 is a perfect square AND 1 plus the square root of 24m plus 1 is divisible by 6. Both conditions are required because the formula has a positive integer solution only when both hold. The index is then n equals the quantity 1 plus the square root of 24m plus 1, divided by 6."
  },
  obj4: {
    question: "What are generalized pentagonal numbers?",
    answer: "Generalized pentagonal numbers extend the index n to all integers (positive, zero, and negative), giving the sequence 0, 1, 2, 5, 7, 12, 15, 22, 26, 35. They appear in Euler's pentagonal number theorem, which gives a remarkable formula for the partition function generating series."
  },
  obj5: {
    question: "Where do pentagonal numbers appear in mathematics?",
    answer: "Pentagonal numbers appear in Euler's pentagonal number theorem (a foundational result in the theory of partitions and modular forms), in geometry (lattice counts in nested pentagons), and as the standard polygonal-number family extending triangular, square, hexagonal, and beyond. They also appear in combinatorial identities involving partitions of integers."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Pentagonal Number?`,
    content: `A pentagonal number counts dots in a nested-pentagon pattern. Starting with a single dot, each next pentagon shares two sides with the previous one and adds a new layer of dots:

$$P_1 = 1, \\quad P_2 = 5, \\quad P_3 = 12, \\quad P_4 = 22, \\quad P_5 = 35, \\quad P_6 = 51, \\quad \\ldots$$

The closed form is

$$P_n = \\frac{n(3n - 1)}{2}$$

Pentagonal numbers are the third in the family of polygonal numbers (after triangular and square). The general $r$-gonal-number formula

$$P_n^{(r)} = \\frac{n[(r - 2)n - (r - 4)]}{2}$$

specializes to the pentagonal case at $r = 5$.

**Sum-of-arithmetic-series form.** $P_n = 1 + 4 + 7 + 10 + \\cdots + (3n - 2)$, the sum of the first $n$ terms of the arithmetic series with $a_1 = 1$ and common difference $d = 3$. The first term 1 and the step 3 reflect the geometry: the first pentagon has 1 dot, and each new layer adds 3 dots times $n$ minus an adjustment for the shared vertex.

For deeper coverage see **pentagonal number**, **polygonal numbers**, and **Euler's pentagonal number theorem**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form Derivation`,
    content: `**From the arithmetic-series perspective.** Pentagonal numbers are sums of the arithmetic series $1, 4, 7, 10, \\ldots$, where each term is $3k - 2$ for $k = 1, 2, \\ldots, n$. The sum is

$$P_n = \\sum_{k=1}^{n} (3k - 2) = 3 \\sum_{k=1}^{n} k - 2n = 3 \\cdot \\frac{n(n+1)}{2} - 2n$$

Simplifying:

$$P_n = \\frac{3n^2 + 3n - 4n}{2} = \\frac{3n^2 - n}{2} = \\frac{n(3n - 1)}{2}$$

**From the general $r$-gonal formula.** Substituting $r = 5$ into

$$P_n^{(r)} = \\frac{n[(r-2)n - (r-4)]}{2}$$

gives $P_n^{(5)} = n(3n - 1)/2$.

**Why the formula is always an integer.** Among any two consecutive integers, one is even. Either $n$ is even, or $3n - 1$ is even (since $3n$ has the same parity as $n$). So $n(3n - 1)$ is always even.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, testing whether it is pentagonal requires two checks.

**The test.** $m$ is pentagonal if and only if both:

1. $24m + 1$ is a perfect square, and
2. $1 + \\sqrt{24m + 1}$ is divisible by 6.

If both hold, the index is

$$n = \\frac{1 + \\sqrt{24m + 1}}{6}$$

**Why both checks are needed.** From $P_n = n(3n - 1)/2 = m$, the quadratic $3n^2 - n - 2m = 0$ has discriminant $1 + 24m$, which must be a perfect square. But the quadratic formula gives $n = (1 \\pm \\sqrt{24m + 1})/6$, and we need $n$ to be a positive integer, hence the divisibility condition.

**Example.** Is 117 pentagonal? Compute $24 \\cdot 117 + 1 = 2809 = 53^2$ — a perfect square. Then $(1 + 53)/6 = 9$, an integer. So $117 = P_9$. Verify: $9 \\cdot 26 / 2 = 117$. Confirmed.

**Non-example.** Is 50 pentagonal? Compute $24 \\cdot 50 + 1 = 1201$. Then $\\sqrt{1201} \\approx 34.66$ — not a perfect square. So 50 is not pentagonal. The nearest are $P_5 = 35$ and $P_6 = 51$.

**Edge case where check 1 passes but check 2 fails.** If $24m + 1$ happens to be a perfect square but the resulting $1 + s$ is not divisible by 6, the candidate index would be fractional. The divisibility check rejects these.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $P_n = P_{n-1} + (3n - 2)$ with $P_1 = 1$. Each pentagonal number adds the next arithmetic-series term.
• **Generating function**: $\\sum_{n=0}^{\\infty} P_n x^n = \\frac{x(1 + x)}{(1 - x)^3}$. The pentagonal numbers' generating function is a rational function.
• **Connection to triangulars**: $P_n = T_{3n-1} - T_{n-1}$, where $T_k$ is the $k$-th triangular number. A pentagonal number is a difference of two triangulars.
• **Connection to hexagonal numbers**: every hexagonal number $H_n$ relates to a pentagonal number, though the correspondence is not as clean as $H_n = T_{2n-1}$ for triangulars.
• **Asymptotic growth**: $P_n \\sim \\frac{3n^2}{2}$ as $n \\to \\infty$. Pentagonal numbers grow as the square of the index.
• **Last-digit pattern**: pentagonal numbers in base 10 end only in 0, 1, 2, 5, 6, or 7. Numbers ending in 3, 4, 8, or 9 cannot be pentagonal.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Euler's Pentagonal Number Theorem`,
    content: `Pentagonal numbers' most famous mathematical role is in Euler's pentagonal number theorem, a foundational result in the theory of integer partitions.

**The theorem.** For all formal power series:

$$\\prod_{n=1}^{\\infty}(1 - x^n) = \\sum_{k = -\\infty}^{\\infty} (-1)^k x^{k(3k - 1)/2}$$

The exponents on the right are exactly the **generalized pentagonal numbers** $0, 1, 2, 5, 7, 12, 15, 22, 26, \\ldots$, obtained by letting $k$ range over all integers (positive, zero, negative) in the formula $k(3k - 1)/2$.

**The combinatorial meaning.** The left side is the generating function for the difference between the number of partitions of $n$ into an even number of distinct parts and the number into an odd number of distinct parts. Euler's theorem says this difference is $0$ except when $n$ is a generalized pentagonal number, in which case it is $\\pm 1$.

**Why it matters.** The reciprocal $1 / \\prod (1 - x^n)$ is the generating function for the **partition function** $p(n)$. Euler's theorem gives a recurrence:

$$p(n) = p(n - 1) + p(n - 2) - p(n - 5) - p(n - 7) + p(n - 12) + p(n - 15) - \\cdots$$

The signs follow a $++--++--$ pattern, and the subtractions stop when the argument goes negative. This is the fastest classical recurrence for the partition function — computing $p(100)$ requires only about 15 terms.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Common Applications`,
    content: `• **Integer partitions.** As shown above, pentagonal numbers control the partition function via Euler's recurrence. Any algorithm computing $p(n)$ efficiently goes through pentagonal numbers.
• **Modular forms.** The product $\\prod (1 - x^n) = \\eta(\\tau)/x^{1/24}$ (up to a factor) is the Dedekind eta function, a basic modular form. Pentagonal numbers appear in its $q$-expansion.
• **Combinatorial identities.** Many partition identities, including Jacobi's triple product, build on Euler's pentagonal-number theorem.
• **Geometric counting.** Pentagonal numbers count dots in nested-pentagon patterns; the dual of triangular and square configurations.
• **Lattice problems.** Some 2D lattice-counting problems on pentagonal regions or 5-fold-symmetric structures involve pentagonal-number boundaries.
• **Recreational mathematics.** Pentagonal numbers appear in puzzles, sequences, and figurate-number problems where one extends the polygon-counting paradigm beyond triangles and squares.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Confusing pentagonal with pentagon-related counts.** Pentagonal numbers count dots in a specific nested-pentagon pattern, not all pentagonal arrangements. The number of dots in a regular pentagon's lattice differs depending on the construction.

• **Forgetting the divisibility check.** $24m + 1$ being a perfect square is necessary but not sufficient. The divisibility-by-6 condition on $1 + \\sqrt{24m + 1}$ filters out spurious candidates. Example: if $24m + 1 = 49 = 7^2$, then $1 + 7 = 8$, not divisible by 6 — so $m = 2$ is not pentagonal even though the perfect-square check passes.

• **Confusing with generalized pentagonal numbers.** The "classical" pentagonal numbers use $n \\geq 1$ giving 1, 5, 12, 22, ... The generalized version allows all integer $n$ giving 0, 1, 2, 5, 7, 12, 15, ... — different sequences with different roles.

• **Misapplying the closed form.** $P_n = n(3n - 1)/2$ is exact for positive integer $n$. Extending to fractional or negative $n$ requires the generalized formulation.

• **Confusing $P_n$ with the partition function $p(n)$.** Both use the letter $p$, but $p(n)$ counts integer partitions while $P_n$ is the $n$-th pentagonal number. The two are connected via Euler's theorem but distinct.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. The first figurate family; pentagonal numbers extend the pattern to 5 sides.

**Square Numbers** — $S_n = n^2$. The second figurate family; sits between triangular and pentagonal.

**Hexagonal Numbers** — $H_n = n(2n-1)$. The next polygonal sequence after pentagonal.

**Generalized Pentagonal Numbers** — 0, 1, 2, 5, 7, 12, 15, 22, ... — pentagonal-number formula extended to all integer indexes. Appears in Euler's theorem.

**Integer Partition** — the number of ways to write $n$ as a sum of positive integers, disregarding order. Pentagonal numbers determine the recurrence for the partition function.

**Partition Function $p(n)$** — counts partitions of $n$. Euler gave a pentagonal-number recurrence; Hardy and Ramanujan gave an asymptotic; Rademacher gave an exact formula.

**Dedekind Eta Function** — a modular form whose $q$-expansion features pentagonal-number exponents. Foundational in the theory of modular forms.

**Polygonal Numbers** — the family of $r$-gonal numbers for $r = 3, 4, 5, 6, \\ldots$. Pentagonal is the $r = 5$ case.

**Euler's Pentagonal Number Theorem** — the identity $\\prod (1 - x^n) = \\sum (-1)^k x^{k(3k-1)/2}$, summed over all integers $k$. One of the most beautiful results in the theory of partitions.

**Figurate Numbers** — the umbrella term covering all polygonal, pyramidal, and higher-dimensional analogs. Pentagonal is one entry in a vast taxonomy.

**Generating Function** — the formal power-series tool that connects pentagonal numbers to partitions, modular forms, and combinatorial identities.`,
    before: ``, after: ``, link: ''
  }
}
  },

  'hexagonal-numbers': {
    kind: 'plain',
    key: 'hexagonal',
    title: 'Hexagonal Numbers',
    h1: 'Hexagonal Numbers Calculator',
    seoTitle: 'Hexagonal Numbers Calculator \u2014 H_n = n(2n\u22121) | Learn Math Class',
    description:
      'Calculator and explorer for the hexagonal numbers $H_n = n(2n-1)$: 1, 6, 15, 28, 45, 66, ... ' +
      'Every hexagonal number is also triangular ($H_n = T_{2n-1}$). ' +
      'List the first N terms, list a range, test whether a number is hexagonal, or look up $H_n$ directly.',
    keywords: 'hexagonal numbers, hexagonal number formula, H_n calculator, hexagonal number test, n(2n-1), figurate numbers, triangular hexagonal',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: '⬡',
    url: '/algebra/calculators/sequences/hexagonal-numbers',
  faqQuestions: {
  obj1: {
    question: "What are hexagonal numbers?",
    answer: "Hexagonal numbers are the integers that count dots arranged in nested hexagons sharing one vertex: 1, 6, 15, 28, 45, 66, 91, 120, and so on. The n-th hexagonal number is given by the closed form H sub n equals n times the quantity 2n minus 1."
  },
  obj2: {
    question: "What is the hexagonal number formula?",
    answer: "The closed form is H sub n equals n times the quantity 2n minus 1, which expands to 2n squared minus n. Equivalently, every hexagonal number equals a triangular number with index 2n minus 1: H sub n equals T sub the quantity 2n minus 1. So every hexagonal number is also triangular."
  },
  obj3: {
    question: "How do you test whether a number is hexagonal?",
    answer: "A positive integer m is hexagonal if and only if 8m plus 1 is a perfect square AND 1 plus the square root of 8m plus 1 is divisible by 4. Both conditions are required. The index is then n equals the quantity 1 plus the square root of 8m plus 1, divided by 4."
  },
  obj4: {
    question: "Is every hexagonal number also a triangular number?",
    answer: "Yes. The identity H sub n equals T sub the quantity 2n minus 1 holds for every positive integer n. So 1 equals T sub 1, 6 equals T sub 3, 15 equals T sub 5, 28 equals T sub 7, and so on. Hexagonal numbers are exactly the triangular numbers with odd index."
  },
  obj5: {
    question: "Where do hexagonal numbers appear in mathematics?",
    answer: "Hexagonal numbers appear in geometry (centered and non-centered hexagonal lattices), in combinatorics (the dots in a hexagonal pattern, hexagonal tile counts), in chemistry (atomic packing in close-packed structures), and as the natural fourth member of the polygonal number family after triangular, square, and pentagonal."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Hexagonal Number?`,
    content: `A hexagonal number counts dots in a nested-hexagon pattern with a shared vertex. Starting with one dot:

$$H_1 = 1, \\quad H_2 = 6, \\quad H_3 = 15, \\quad H_4 = 28, \\quad H_5 = 45, \\quad H_6 = 66, \\quad \\ldots$$

The closed form is

$$H_n = n(2n - 1) = 2n^2 - n$$

**Key identity.** Every hexagonal number is also a triangular number:

$$H_n = T_{2n - 1}$$

This means hexagonal numbers are exactly the **odd-indexed** triangular numbers. $H_1 = T_1$, $H_2 = T_3$, $H_3 = T_5$, $H_4 = T_7$, and so on. The hexagonal numbers form a subsequence of triangular numbers.

**Sum-of-arithmetic-series form.** $H_n = 1 + 5 + 9 + \\cdots + (4n - 3)$, the sum of the first $n$ terms of the arithmetic series with $a_1 = 1$ and common difference $d = 4$.

For deeper coverage see **hexagonal number**, **polygonal numbers**, and **figurate numbers**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form and the Triangular Connection`,
    content: `**Closed form derivation.** From the arithmetic-series perspective, $H_n = \\sum_{k=1}^{n}(4k - 3)$:

$$H_n = 4 \\cdot \\frac{n(n+1)}{2} - 3n = 2n^2 + 2n - 3n = 2n^2 - n = n(2n - 1)$$

**The triangular identity.** Substituting $T_k = k(k+1)/2$ with $k = 2n - 1$:

$$T_{2n - 1} = \\frac{(2n - 1)(2n)}{2} = n(2n - 1) = H_n$$

This identity says: stretch a triangular pattern by aligning every other row, and you get a hexagonal pattern with $n$ "layers."

**Why hexagonal numbers are exactly the odd-indexed triangulars.** Triangulars with even index $T_{2n}$ give $n(2n+1)$, not the hexagonal formula. So even-indexed triangulars (3, 10, 21, 36, ...) are not hexagonal; only odd-indexed ones are.

**Examples of the identity.**
• $H_1 = 1 = T_1$
• $H_2 = 6 = T_3$
• $H_3 = 15 = T_5$
• $H_4 = 28 = T_7$
• $H_5 = 45 = T_9$`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, deciding whether it is hexagonal requires two checks.

**The test.** $m$ is hexagonal if and only if both:

1. $8m + 1$ is a perfect square, and
2. $1 + \\sqrt{8m + 1}$ is divisible by 4.

If both hold, the index is

$$n = \\frac{1 + \\sqrt{8m + 1}}{4}$$

**Why both checks.** Note that condition 1 ($8m + 1$ is a perfect square) is the **triangular** test. So every hexagonal number is triangular (as expected). But not every triangular number is hexagonal — only those where $1 + \\sqrt{8m + 1}$ is also divisible by 4. The divisibility check is what distinguishes odd-indexed triangulars (which are hexagonal) from even-indexed triangulars (which are not).

**Example.** Is 190 hexagonal? Compute $8 \\cdot 190 + 1 = 1521 = 39^2$ — a perfect square. Then $(1 + 39)/4 = 10$, an integer. So $190 = H_{10}$. Verify: $10 \\cdot 19 = 190$. Confirmed.

**Triangular but not hexagonal.** Is 10 hexagonal? Compute $8 \\cdot 10 + 1 = 81 = 9^2$ — perfect square, so 10 is triangular ($10 = T_4$). But $(1 + 9)/4 = 10/4 = 2.5$ — not an integer. So 10 is not hexagonal. Indeed $T_4$ has even index 4, not odd.

**Non-example.** Is 100 hexagonal? Compute $8 \\cdot 100 + 1 = 801$. Then $\\sqrt{801} \\approx 28.3$ — not a perfect square. So 100 is not triangular, hence not hexagonal.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $H_n = H_{n-1} + (4n - 3)$ with $H_1 = 1$. Each hexagonal adds the next arithmetic-series term.
• **Hexagonal-triangular**: $H_n = T_{2n-1}$. Hexagonal numbers are exactly the odd-indexed triangulars.
• **Sum of two consecutive triangulars**: $T_{2n-1} + T_{2n-2}$ does **not** equal $H_n$ in general; the relation between hexagonal and consecutive triangulars is just $H_n = T_{2n-1}$.
• **Difference of consecutive hexagonals**: $H_{n+1} - H_n = 4n + 1$. The differences are 5, 9, 13, 17, ... — the arithmetic series.
• **Generating function**: $\\sum_{n=1}^{\\infty} H_n x^n = \\frac{x(1 + 3x)}{(1 - x)^3}$.
• **Asymptotic growth**: $H_n \\sim 2n^2$. Hexagonal numbers grow about twice as fast as square numbers.
• **Last-digit pattern**: hexagonal numbers in base 10 end only in 0, 1, 5, 6, 8, or rarely with other digits depending on the index parity.
• **Density within triangulars**: among the first $N$ triangular numbers, about $N/2$ are hexagonal (the odd-indexed ones).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Hexagonal Numbers vs Centered Hexagonal Numbers`,
    content: `An important distinction: "hexagonal numbers" in the traditional sense (described here) differ from **centered hexagonal numbers**.

**Hexagonal numbers** (this explorer): nested hexagons sharing one vertex. Closed form $H_n = n(2n - 1)$. Sequence: 1, 6, 15, 28, 45, 66, ...

**Centered hexagonal numbers**: hexagons with a center dot, surrounded by concentric hexagonal layers. Closed form $C_n = 3n(n-1) + 1$. Sequence: 1, 7, 19, 37, 61, 91, ... These count atoms in 2D close-packed structures.

The two sequences are sometimes confused but represent different geometric patterns:

• Hexagonal $H_n$: shares a single corner vertex with the previous hexagon; less symmetric pattern.
• Centered hexagonal $C_n$: builds concentric rings around a central point; the canonical pattern for close-packed circles or atoms.

This page covers the **traditional polygonal hexagonal numbers** following the polygonal family. For centered hexagonal numbers, see a separate dedicated tool.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Common Applications`,
    content: `• **Triangular subsequence.** Whenever odd-indexed triangulars are needed (in identities, partial sums, or combinatorial problems), hexagonal numbers are the direct shortcut.
• **Hexagonal patterns in nature.** Although the most famous hexagonal patterns (honeycomb, snowflakes) align more with centered hexagonals or hexagonal lattices, the polygonal hexagonal sequence still appears in counting problems on hexagonal regions.
• **Combinatorics.** $H_n = \\binom{2n}{2}/2$ gives an unusual binomial-coefficient identity (this is $H_n = T_{2n-1}$ in disguise via $T_k = \\binom{k+1}{2}$).
• **Partition theory.** Hexagonal numbers appear in some partition-counting identities, though pentagonal numbers play the more prominent role.
• **Recreational mathematics.** Hexagonal numbers are studied alongside triangular and square numbers in figurate-number puzzles and problems.
• **Number theory.** Many results about polygonal numbers (Fermat's polygonal number theorem, for instance) include hexagonal as a special case.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Confusing hexagonal with centered hexagonal numbers.** The two sequences look superficially similar (both start with 1) but diverge: hexagonal gives 1, 6, 15, 28; centered hexagonal gives 1, 7, 19, 37. Always check which definition is intended.

• **Forgetting the divisibility-by-4 check.** $8m + 1$ being a perfect square means $m$ is triangular, but not necessarily hexagonal. The divisibility-by-4 condition on $1 + \\sqrt{8m + 1}$ filters to odd-indexed triangulars. Example: $10 = T_4$ is triangular but not hexagonal; $(1 + 9)/4 = 2.5$.

• **Misremembering the closed form.** $H_n = n(2n - 1)$, not $n(2n + 1)$ or $2n(n - 1)$. The minus sign matters.

• **Confusing the hexagonal-triangular relation.** $H_n = T_{2n - 1}$, not $T_{2n}$ or $T_{n+1}$. The index in the triangular sequence is odd: $2n - 1$.

• **Confusing with hexagonal pyramidal numbers.** The 3D analog $\\mathrm{HP}_n = n(n+1)(4n-1)/6$ counts dots in a hexagonal pyramid, not a flat hexagon. Different sequence, different formula.

• **Treating the membership test as equivalent to the triangular test.** Triangular membership uses one condition; hexagonal requires two. Skipping the divisibility check misclassifies even-indexed triangulars as hexagonal.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. Hexagonal numbers are the odd-indexed subsequence: $H_n = T_{2n-1}$.

**Square Numbers** — $S_n = n^2$. Hexagonal numbers grow about twice as fast.

**Pentagonal Numbers** — $P_n = n(3n-1)/2$. The previous polygonal-number sequence in the family.

**Heptagonal Numbers** — $\\mathrm{Hp}_n = n(5n-3)/2$. The next polygonal-number sequence.

**Octagonal Numbers** — $O_n = n(3n-2)$. Two steps further in the polygonal family.

**Centered Hexagonal Numbers** — $C_n = 3n(n-1) + 1$. A different but related sequence; counts close-packed circles in concentric hexagonal rings.

**Polygonal Numbers** — the general family. Hexagonal is the $r = 6$ case in $P_n^{(r)} = n[(r-2)n - (r-4)]/2$.

**Hexagonal Pyramidal Numbers** — the 3D analog: $\\mathrm{HP}_n = n(n+1)(4n-1)/6$. Counts dots in a hexagonal pyramid.

**Fermat Polygonal Number Theorem** — every positive integer is a sum of at most $r$ $r$-gonal numbers. Conjectured by Fermat, proved by Lagrange (squares), Gauss (triangulars), and Cauchy (general).

**Arithmetic Series** — $H_n$ is the sum of the first $n$ terms of the arithmetic series $1, 5, 9, 13, \\ldots$ with $d = 4$.

**Figurate Numbers** — the umbrella family. Hexagonal numbers are 2D, 6-sided.

**Hexagonal Lattice** — the regular lattice of hexagons; relevant to centered hexagonals more than to polygonal hexagonals, but worth knowing in context.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'heptagonal-numbers': {
    kind: 'plain',
    key: 'heptagonal',
    title: 'Heptagonal Numbers',
    h1: 'Heptagonal Numbers Calculator',
    seoTitle: 'Heptagonal Numbers Calculator \u2014 Hp_n = n(5n\u22123)/2 | Learn Math Class',
    description:
      'Calculator and explorer for the heptagonal numbers $\\mathrm{Hp}_n = n(5n-3)/2$: 1, 7, 18, 34, 55, 81, ... ' +
      'List the first N terms, list a range, test whether a number is heptagonal (using the $40m + 9$ perfect-square test ' +
      'with the divisibility-by-10 follow-up), or look up $\\mathrm{Hp}_n$ directly.',
    keywords: 'heptagonal numbers, heptagonal number formula, Hp_n calculator, heptagonal number test, 40m+9 test, figurate numbers, n(5n-3)/2',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: 'Hp',
    url: '/algebra/calculators/sequences/heptagonal-numbers',
   faqQuestions: {
  obj1: {
    question: "What are heptagonal numbers?",
    answer: "Heptagonal numbers are the integers that count dots arranged in nested heptagons sharing one vertex: 1, 7, 18, 34, 55, 81, 112, 148, and so on. The n-th heptagonal number is given by the closed form Hp sub n equals n times the quantity 5n minus 3, all divided by 2."
  },
  obj2: {
    question: "What is the heptagonal number formula?",
    answer: "The closed form is Hp sub n equals n times the quantity 5n minus 3, divided by 2. Equivalently, Hp sub n equals the sum of the first n terms of the arithmetic series 1, 6, 11, 16, with first term 1 and common difference 5. The sequence begins 1, 7, 18, 34, 55, 81."
  },
  obj3: {
    question: "How do you test whether a number is heptagonal?",
    answer: "A positive integer m is heptagonal if and only if 40m plus 9 is a perfect square AND 3 plus the square root of 40m plus 9 is divisible by 10. Both conditions are required. The index is then n equals the quantity 3 plus the square root of 40m plus 9, divided by 10."
  },
  obj4: {
    question: "How do heptagonal numbers fit in the polygonal family?",
    answer: "Heptagonal numbers are the fifth in the polygonal family: triangular for 3 sides, square for 4, pentagonal for 5, hexagonal for 6, then heptagonal for 7. The general r-gonal formula P sub n superscript r equals n times the quantity r minus 2 times n minus r plus 4, divided by 2, specializes to heptagonal at r equals 7."
  },
  obj5: {
    question: "Where do heptagonal numbers appear in mathematics?",
    answer: "Heptagonal numbers appear primarily as the natural fifth term in the polygonal-number family. Unlike pentagonal numbers (which feature in Euler's theorem) or hexagonal numbers (which equal odd-indexed triangulars), heptagonal numbers have fewer celebrated identities, but they appear in figurate-number tables, polygonal-number theorems, and combinatorial problems involving 7-sided arrangements."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Heptagonal Number?`,
    content: `A heptagonal number counts dots in a nested-heptagon pattern with a shared vertex. Starting with a single dot:

$$\\mathrm{Hp}_1 = 1, \\quad \\mathrm{Hp}_2 = 7, \\quad \\mathrm{Hp}_3 = 18, \\quad \\mathrm{Hp}_4 = 34, \\quad \\mathrm{Hp}_5 = 55, \\quad \\mathrm{Hp}_6 = 81, \\quad \\ldots$$

The closed form is

$$\\mathrm{Hp}_n = \\frac{n(5n - 3)}{2}$$

Heptagonal numbers are the fifth in the family of polygonal numbers, following triangular ($r = 3$), square ($r = 4$), pentagonal ($r = 5$), and hexagonal ($r = 6$). The general $r$-gonal-number formula

$$P_n^{(r)} = \\frac{n[(r - 2)n - (r - 4)]}{2}$$

specializes to heptagonal at $r = 7$, giving $\\mathrm{Hp}_n = n(5n - 3)/2$.

**Sum-of-arithmetic-series form.** $\\mathrm{Hp}_n$ is the sum of the first $n$ terms of the arithmetic series $1, 6, 11, 16, 21, \\ldots$ with $a_1 = 1$ and $d = 5$. The common difference is one less than $r - 2 = 5$ — well, exactly 5, since $r = 7$ gives $r - 2 = 5$.

For deeper coverage see **heptagonal number**, **polygonal numbers**, and **figurate numbers**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form Derivation`,
    content: `**From the arithmetic-series perspective.** Heptagonal numbers are sums of the arithmetic series $1, 6, 11, 16, \\ldots$ with general term $5k - 4$:

$$\\mathrm{Hp}_n = \\sum_{k=1}^{n}(5k - 4) = 5 \\cdot \\frac{n(n+1)}{2} - 4n = \\frac{5n^2 + 5n - 8n}{2} = \\frac{5n^2 - 3n}{2} = \\frac{n(5n - 3)}{2}$$

**From the general $r$-gonal formula.** Substituting $r = 7$ into $P_n^{(r)} = n[(r-2)n - (r-4)]/2$:

$$\\mathrm{Hp}_n = \\frac{n(5n - 3)}{2}$$

**Why the formula is always an integer.** Among $n$ and $5n - 3$, the parity argument: if $n$ is even, $n$ contributes the factor of 2. If $n$ is odd, then $5n$ is odd and $5n - 3$ is even. So $n(5n - 3)$ is always even.

**Examples.** $\\mathrm{Hp}_1 = 1 \\cdot 2/2 = 1$. $\\mathrm{Hp}_2 = 2 \\cdot 7/2 = 7$. $\\mathrm{Hp}_3 = 3 \\cdot 12/2 = 18$. $\\mathrm{Hp}_4 = 4 \\cdot 17/2 = 34$. $\\mathrm{Hp}_5 = 5 \\cdot 22/2 = 55$. $\\mathrm{Hp}_{10} = 10 \\cdot 47/2 = 235$.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, testing whether it is heptagonal requires two checks.

**The test.** $m$ is heptagonal if and only if both:

1. $40m + 9$ is a perfect square, and
2. $3 + \\sqrt{40m + 9}$ is divisible by 10.

If both hold, the index is

$$n = \\frac{3 + \\sqrt{40m + 9}}{10}$$

**Why both checks are needed.** From $\\mathrm{Hp}_n = n(5n - 3)/2 = m$, the quadratic $5n^2 - 3n - 2m = 0$ has discriminant $9 + 40m$, which must be a perfect square. The quadratic formula gives $n = (3 + \\sqrt{40m + 9})/10$, requiring the numerator to be a multiple of 10 for $n$ to be a positive integer.

**Derivation of the discriminant 40m + 9.** Multiply $n(5n - 3) = 2m$ by 20 and add 9:

$$100 n^2 - 60n + 9 = 40m + 9 \\implies (10n - 3)^2 = 40m + 9$$

So $40m + 9$ is a perfect square iff $10n - 3$ is an integer (which it is for integer $n$), and $\\sqrt{40m + 9} = 10n - 3$, giving $n = (\\sqrt{40m + 9} + 3)/10$.

**Example.** Is 189 heptagonal? Compute $40 \\cdot 189 + 9 = 7569 = 87^2$ — a perfect square. Then $(3 + 87)/10 = 9$, an integer. So $189 = \\mathrm{Hp}_9$. Verify: $9 \\cdot 42/2 = 189$. Confirmed.

**Non-example.** Is 100 heptagonal? Compute $40 \\cdot 100 + 9 = 4009$. Then $\\sqrt{4009} \\approx 63.32$ — not a perfect square. So 100 is not heptagonal.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $\\mathrm{Hp}_n = \\mathrm{Hp}_{n-1} + (5n - 4)$ with $\\mathrm{Hp}_1 = 1$. Each heptagonal adds the next arithmetic-series term.
• **Difference of consecutive heptagonals**: $\\mathrm{Hp}_{n+1} - \\mathrm{Hp}_n = 5n + 1$. Differences are 6, 11, 16, 21, ...
• **Generating function**: $\\sum_{n=1}^{\\infty} \\mathrm{Hp}_n x^n = \\frac{x(1 + 4x)}{(1 - x)^3}$.
• **Asymptotic growth**: $\\mathrm{Hp}_n \\sim \\frac{5n^2}{2}$. Heptagonal numbers grow as the square of the index times 2.5.
• **Relation to triangulars**: $\\mathrm{Hp}_n = T_n + 3 T_{n-1}$ where $T_k$ is the $k$-th triangular number — a curious identity expressing heptagonals in terms of triangulars.
• **Sum of first $n$ heptagonals**: there is no clean closed-form sum identity (unlike triangulars summing to tetrahedrals); the sum is a polynomial of degree 3 in $n$.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Common Applications`,
    content: `Heptagonal numbers have fewer celebrated identities than triangular, pentagonal, or hexagonal numbers, but they appear in several contexts.

• **Polygonal-number completeness.** When studying the family of $r$-gonal numbers systematically, heptagonal is the natural fifth member. Many theorems about polygonal numbers (like Fermat's polygonal number theorem) include heptagonal as a case.
• **Fermat's polygonal number theorem.** Every positive integer is a sum of at most 7 heptagonal numbers. The general statement: every positive integer is a sum of at most $r$ $r$-gonal numbers.
• **Combinatorial counts.** Some lattice-counting problems on heptagonal regions involve heptagonal-number boundaries.
• **Heptagonal-number arrangements.** The dots-in-a-heptagon visual is used in puzzles and educational materials.
• **Number-theoretic curiosities.** Heptagonal numbers appear in lists of figurate numbers used to illustrate the structure of polygonal numbers.
• **Sums and differences.** Identities relating heptagonals to other figurate numbers form parts of papers on figurate-number arithmetic.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Heptagonal vs Centered Heptagonal Numbers`,
    content: `As with hexagonal numbers, there is a distinct sequence called the **centered heptagonal numbers**, which should not be confused with the polygonal heptagonal numbers covered here.

**Heptagonal numbers** (this page): nested heptagons sharing one vertex. Closed form $\\mathrm{Hp}_n = n(5n - 3)/2$. Sequence: 1, 7, 18, 34, 55, 81, 112, ...

**Centered heptagonal numbers**: a central dot surrounded by concentric heptagonal rings. Closed form $C_n^{(7)} = (7n^2 - 7n + 2)/2$. Sequence: 1, 8, 22, 43, 71, 106, ...

The two sequences are different both numerically and geometrically. The "centered" version has more visual symmetry but is mathematically a separate object.

When literature refers to "heptagonal numbers" without qualification, it almost always means the polygonal sequence covered here. Centered heptagonals require the "centered" qualifier.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Forgetting the divisibility-by-10 check.** $40m + 9$ being a perfect square is necessary but not sufficient. The divisibility check on $3 + \\sqrt{40m + 9}$ filters out spurious candidates. Skipping it overcounts heptagonal numbers.

• **Misremembering the closed form.** $\\mathrm{Hp}_n = n(5n - 3)/2$, not $n(5n + 3)/2$ or $n(3n - 5)/2$. The 5 comes from $r - 2$ with $r = 7$; the 3 comes from $r - 4$.

• **Confusing with centered heptagonal numbers.** Polygonal $\\mathrm{Hp}_n$ gives 1, 7, 18, 34; centered $C_n^{(7)}$ gives 1, 8, 22, 43. Always check which is intended.

• **Mis-substituting in the general formula.** For $r = 7$, the formula $n[(r-2)n - (r-4)]/2$ gives $n(5n - 3)/2$. Common error: writing $r - 4$ as $r - 2$ or $r$ — careful with the substitutions.

• **Off-by-one in the index.** $\\mathrm{Hp}_1 = 1$, not $\\mathrm{Hp}_0 = 0$. Some sources start at $n = 0$ with $\\mathrm{Hp}_0 = 0$ for consistency with the closed form's behavior at $n = 0$. This explorer uses $n = 1$.

• **Membership-test discriminant errors.** The correct discriminant for heptagonals is $40m + 9$. Using $24m + 1$ (pentagonal) or $8m + 1$ (triangular) gives wrong results.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. The smallest polygonal sequence; $r = 3$.

**Square Numbers** — $S_n = n^2$. The $r = 4$ case.

**Pentagonal Numbers** — $P_n = n(3n-1)/2$. The $r = 5$ case; features in Euler's pentagonal-number theorem.

**Hexagonal Numbers** — $H_n = n(2n-1)$. The $r = 6$ case; equals odd-indexed triangulars.

**Octagonal Numbers** — $O_n = n(3n - 2)$. The $r = 8$ case, after heptagonal.

**Centered Heptagonal Numbers** — $C_n^{(7)} = (7n^2 - 7n + 2)/2$. A distinct sequence with concentric ring geometry.

**Polygonal Numbers** — the family of $r$-gonal numbers. Heptagonal is the $r = 7$ member.

**Fermat's Polygonal Number Theorem** — every positive integer is a sum of at most $r$ $r$-gonal numbers. For $r = 7$, the statement says every positive integer is a sum of at most 7 heptagonal numbers.

**Arithmetic Series** — $\\mathrm{Hp}_n = \\sum_{k=1}^{n}(5k - 4)$. The sum of an arithmetic series with $a_1 = 1$ and $d = 5$.

**Figurate Numbers** — the umbrella family covering all polygonal, pyramidal, and higher-dimensional analogs.

**Generalized Polygonal Numbers** — extensions where the index ranges over all integers (positive, zero, negative). The pentagonal case features in Euler's theorem; the heptagonal generalization is less prominent.

**Sum of Three Heptagonals** — for sufficiently large $m$, $m$ can be written as a sum of just three heptagonal numbers (a refinement of Fermat's theorem due to Bell and Cauchy).`,
    before: ``, after: ``, link: ''
  }
},
  },

  'octagonal-numbers': {
    kind: 'plain',
    key: 'octagonal',
    title: 'Octagonal Numbers',
    h1: 'Octagonal Numbers Calculator',
    seoTitle: 'Octagonal Numbers Calculator \u2014 O_n = n(3n\u22122) | Learn Math Class',
    description:
      'Calculator and explorer for the octagonal numbers $O_n = n(3n-2)$: 1, 8, 21, 40, 65, 96, ... ' +
      'List the first N terms, list a range, test whether a number is octagonal (using the $3m + 1$ perfect-square test ' +
      'with the divisibility-by-3 follow-up), or look up $O_n$ directly.',
    keywords: 'octagonal numbers, octagonal number formula, O_n calculator, octagonal number test, 3m+1 test, figurate numbers, n(3n-2)',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: 'O',
    url: '/algebra/calculators/sequences/octagonal-numbers',
   faqQuestions: {
  obj1: {
    question: "What are octagonal numbers?",
    answer: "Octagonal numbers are the integers that count dots arranged in nested octagons sharing one vertex: 1, 8, 21, 40, 65, 96, 133, 176, and so on. The n-th octagonal number is given by the closed form O sub n equals n times the quantity 3n minus 2."
  },
  obj2: {
    question: "What is the octagonal number formula?",
    answer: "The closed form is O sub n equals n times the quantity 3n minus 2, which expands to 3n squared minus 2n. Equivalently, O sub n equals the sum of the first n terms of the arithmetic series 1, 7, 13, 19, with first term 1 and common difference 6. The sequence begins 1, 8, 21, 40, 65, 96."
  },
  obj3: {
    question: "How do you test whether a number is octagonal?",
    answer: "A positive integer m is octagonal if and only if 3m plus 1 is a perfect square AND 1 plus the square root of 3m plus 1 is divisible by 3. Both conditions are required. The index is then n equals the quantity 1 plus the square root of 3m plus 1, divided by 3."
  },
  obj4: {
    question: "How do octagonal numbers relate to other polygonal numbers?",
    answer: "Octagonal numbers are the sixth in the polygonal family at r equals 8. They satisfy the identity O sub n equals 3 times T sub n minus 2n, expressing octagonals in terms of triangular numbers. The asymptotic growth is 3n squared, faster than triangular but slower than higher polygonal sequences."
  },
  obj5: {
    question: "Where do octagonal numbers appear in mathematics?",
    answer: "Octagonal numbers appear in the polygonal-number family as the r equals 8 case, in Fermat's polygonal number theorem (every positive integer is a sum of at most 8 octagonal numbers), in lattice-counting problems on octagonal regions, and in combinatorial identities involving 8-sided arrangements and figurate-number relations."
}
},
sectionsContent: {
  obj1: {
    title: `What is an Octagonal Number?`,
    content: `An octagonal number counts dots in a nested-octagon pattern with a shared vertex. Starting with one dot:

$$O_1 = 1, \\quad O_2 = 8, \\quad O_3 = 21, \\quad O_4 = 40, \\quad O_5 = 65, \\quad O_6 = 96, \\quad O_7 = 133, \\quad \\ldots$$

The closed form is

$$O_n = n(3n - 2) = 3n^2 - 2n$$

Octagonal numbers are the sixth in the family of polygonal numbers, following triangular, square, pentagonal, hexagonal, and heptagonal. The general $r$-gonal-number formula

$$P_n^{(r)} = \\frac{n[(r - 2)n - (r - 4)]}{2}$$

specializes to octagonal at $r = 8$, giving $O_n = n(6n - 4)/2 = n(3n - 2)$.

**Sum-of-arithmetic-series form.** $O_n$ is the sum of the first $n$ terms of the arithmetic series $1, 7, 13, 19, 25, \\ldots$ with $a_1 = 1$ and common difference $d = 6$. The step 6 reflects that $r - 2 = 6$ for $r = 8$.

For deeper coverage see **octagonal number**, **polygonal numbers**, and **figurate numbers**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form Derivation`,
    content: `**From the arithmetic-series perspective.** Octagonal numbers are sums of the arithmetic series $1, 7, 13, 19, \\ldots$ with general term $6k - 5$:

$$O_n = \\sum_{k=1}^{n}(6k - 5) = 6 \\cdot \\frac{n(n+1)}{2} - 5n = 3n^2 + 3n - 5n = 3n^2 - 2n = n(3n - 2)$$

**From the general $r$-gonal formula.** Substituting $r = 8$:

$$O_n = \\frac{n[6n - 4]}{2} = n(3n - 2)$$

**Why the formula is always an integer.** $O_n = n(3n - 2)$ is a product of integers, so it is always an integer. No divisibility argument is needed; the closed form has no fractional component.

**Connection to triangular numbers.** Using $T_n = n(n+1)/2$:

$$O_n = n(3n - 2) = 3n^2 - 2n = 6 \\cdot \\frac{n(n+1)}{2} - 2n - 3n = 6 T_n - 5n$$

Or more simply: $O_n = 3 T_n - 2n + (\\text{correction})$, with the cleanest identity being $O_n = T_n + 4 T_{n-1}$ for $n \\geq 2$. Expanding triangulars:

$$O_n = \\frac{n(n+1)}{2} + 4 \\cdot \\frac{(n-1)n}{2} = \\frac{n(n + 1) + 4n(n - 1)}{2} = \\frac{n(5n - 3)}{2}$$

Wait — that gives heptagonal, not octagonal. The correct identity: $O_n = T_{3n - 2} - T_{2n - 2}$, which can be verified directly: $T_{3n-2} = (3n-2)(3n-1)/2$ and $T_{2n-2} = (2n-2)(2n-1)/2$; subtracting gives $n(3n - 2)$ after simplification.

**Examples.** $O_1 = 1$, $O_2 = 8$, $O_3 = 21$, $O_4 = 40$, $O_{10} = 280$, $O_{20} = 1160$.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test`,
    content: `Given a positive integer $m$, testing whether it is octagonal requires two checks.

**The test.** $m$ is octagonal if and only if both:

1. $3m + 1$ is a perfect square, and
2. $1 + \\sqrt{3m + 1}$ is divisible by 3.

If both hold, the index is

$$n = \\frac{1 + \\sqrt{3m + 1}}{3}$$

**Why both checks.** From $O_n = n(3n - 2) = m$, the quadratic $3n^2 - 2n - m = 0$ has discriminant $4 + 12m = 4(1 + 3m)$. The square root is $2\\sqrt{1 + 3m}$, and the quadratic formula gives

$$n = \\frac{2 + 2\\sqrt{1 + 3m}}{6} = \\frac{1 + \\sqrt{3m + 1}}{3}$$

So $3m + 1$ must be a perfect square, and the numerator $1 + \\sqrt{3m + 1}$ must be a multiple of 3.

**Example.** Is 225 octagonal? Compute $3 \\cdot 225 + 1 = 676 = 26^2$ — perfect square. Then $(1 + 26)/3 = 9$, an integer. So $225 = O_9$. Verify: $9 \\cdot 25 = 225$. Confirmed.

**Triangular but not octagonal.** Is 15 octagonal? Compute $3 \\cdot 15 + 1 = 46$. $\\sqrt{46} \\approx 6.78$ — not a perfect square. So 15 is not octagonal, even though it is triangular ($T_5 = 15$) and hexagonal ($H_3 = 15$).

**Non-example.** Is 100 octagonal? Compute $3 \\cdot 100 + 1 = 301$. $\\sqrt{301} \\approx 17.35$ — not a perfect square. So 100 is not octagonal. Nearest are $O_6 = 96$ and $O_7 = 133$.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $O_n = O_{n-1} + (6n - 5)$ with $O_1 = 1$. Each octagonal adds the next arithmetic-series term.
• **Difference of consecutive octagonals**: $O_{n+1} - O_n = 6n + 1$. Differences are 7, 13, 19, 25, ...
• **Generating function**: $\\sum_{n=1}^{\\infty} O_n x^n = \\frac{x(1 + 5x)}{(1 - x)^3}$.
• **Asymptotic growth**: $O_n \\sim 3n^2$. Octagonal numbers grow about three times as fast as square numbers.
• **Identity in triangulars**: $O_n = T_{3n - 2} - T_{2n - 2}$ for $n \\geq 2$. Octagonals as a difference of triangulars.
• **Sum of first $n$ octagonals**: $\\sum_{k=1}^{n} O_k = n^2(n + 1)$. A cleaner closed form than for some other polygonals.
• **Last-digit pattern**: octagonal numbers in base 10 end only in 0, 1, 3, 5, 6, or 8. Numbers ending in other digits cannot be octagonal.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Common Applications`,
    content: `Like heptagonal numbers, octagonal numbers have fewer celebrated identities than the lower-degree polygonals, but they appear in several contexts.

• **Fermat's polygonal number theorem.** Every positive integer is a sum of at most 8 octagonal numbers. The $r = 8$ case of the general theorem.
• **Polygonal completeness.** When the polygonal family is studied systematically, octagonal is one of the canonical members; figurate-number tables routinely include it.
• **Lattice problems.** Some 2D counting problems on octagonal regions involve octagonal-number boundaries.
• **Combinatorial identities.** Identities relating octagonals to triangulars, squares, and pentagonals form parts of papers on figurate-number arithmetic.
• **Number-theoretic curiosities.** Octagonal numbers that are also squares, triangulars, or pentagonals are individually studied; the intersections are sparse.
• **Educational use.** Octagonal numbers are commonly used to illustrate the polygonal-number paradigm beyond the well-known triangular, square, and pentagonal cases.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Octagonal vs Centered Octagonal Numbers`,
    content: `As with hexagonal and heptagonal numbers, there is a distinct sequence called the **centered octagonal numbers**, which should not be confused with the polygonal octagonal numbers covered here.

**Octagonal numbers** (this page): nested octagons sharing one vertex. Closed form $O_n = n(3n - 2)$. Sequence: 1, 8, 21, 40, 65, 96, ...

**Centered octagonal numbers**: a central dot surrounded by concentric octagonal rings. Closed form $C_n^{(8)} = 4n^2 - 4n + 1 = (2n - 1)^2$. Sequence: 1, 9, 25, 49, 81, 121, ...

Notably, centered octagonal numbers are exactly the odd perfect squares: $C_n^{(8)} = (2n - 1)^2$. This unexpected identity makes the centered version more famous in some contexts.

When literature refers to "octagonal numbers" without qualification, it almost always means the polygonal sequence covered here. Centered octagonals require the "centered" qualifier.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Forgetting the divisibility-by-3 check.** $3m + 1$ being a perfect square is necessary but not sufficient. The divisibility check on $1 + \\sqrt{3m + 1}$ filters out spurious candidates.

• **Misremembering the closed form.** $O_n = n(3n - 2)$, not $n(3n + 2)$ or $n(2n - 3)$. The 3 comes from $(r - 2)/2 = 3$ for $r = 8$; the 2 comes from $(r - 4)/2 = 2$.

• **Confusing with centered octagonal numbers.** Polygonal $O_n$ gives 1, 8, 21, 40; centered $C_n^{(8)}$ gives 1, 9, 25, 49 (the odd squares). Very different sequences.

• **Misapplying the discriminant.** The correct discriminant for octagonals is $3m + 1$. Using $8m + 1$ (triangular), $24m + 1$ (pentagonal), or $40m + 9$ (heptagonal) gives wrong results.

• **Off-by-one in arithmetic series.** The series is $1, 7, 13, 19, \\ldots$ with general term $6k - 5$ (where $k$ starts at 1). Writing $6k + 1$ or $6k - 1$ gives different sequences.

• **Confusing polygonal index with side count.** $O_n$ is the $n$-th octagonal number, not the count of dots in an octagon with side $n$ (though they happen to coincide for the polygonal definition; the indexing can be subtle).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. The $r = 3$ polygonal sequence.

**Square Numbers** — $S_n = n^2$. The $r = 4$ polygonal sequence.

**Pentagonal Numbers** — $P_n = n(3n-1)/2$. The $r = 5$ polygonal sequence; features in Euler's theorem.

**Hexagonal Numbers** — $H_n = n(2n-1)$. The $r = 6$ polygonal sequence; equals odd-indexed triangulars.

**Heptagonal Numbers** — $\\mathrm{Hp}_n = n(5n-3)/2$. The $r = 7$ polygonal sequence.

**Centered Octagonal Numbers** — $(2n-1)^2$ — the odd squares. A distinct sequence with concentric-ring geometry.

**Polygonal Numbers** — the general $r$-gonal family. Octagonal is the $r = 8$ member.

**Fermat's Polygonal Number Theorem** — every positive integer is a sum of at most 8 octagonal numbers. The general statement: every positive integer is a sum of at most $r$ $r$-gonal numbers, proved by Cauchy.

**Arithmetic Series** — $O_n = \\sum_{k=1}^{n}(6k - 5)$. The sum of an arithmetic series with $a_1 = 1$ and $d = 6$.

**Figurate Numbers** — the umbrella family.

**Star Number** — a related sequence ($6n^2 - 6n + 1$) sometimes confused with octagonal but distinct; gives 1, 13, 37, 73, 121, ...

**Octagonal Pyramidal Numbers** — the 3D analog: $n(n+1)(2n - 1)/2$ wait, actually the formula is more involved. They count dots in an octagonal pyramid.

**Generalized Polygonal Numbers** — extension where indexes can be negative; less famous for octagonals than for pentagonals.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'tetrahedral-numbers': {
    kind: 'plain',
    key: 'tetrahedral',
    title: 'Tetrahedral Numbers',
    h1: 'Tetrahedral Numbers Calculator',
    seoTitle: 'Tetrahedral Numbers Calculator \u2014 Te_n = n(n+1)(n+2)/6 | Learn Math Class',
    description:
      'Calculator for the tetrahedral numbers $\\mathrm{Te}_n = n(n+1)(n+2)/6$ \u2014 running totals of the triangular numbers. ' +
      'Browse, list ranges, test membership (estimated via cube root and verified), or look up $\\mathrm{Te}_n$. Walkthroughs explain every step.',
    keywords: 'tetrahedral numbers, tetrahedral number formula, Te_n, pyramidal numbers, sum of triangular numbers, figurate numbers',
    category: 'Sequences',
    subCategory: 'Figurate numbers',
    icon: '▲',
    url: '/algebra/calculators/sequences/tetrahedral-numbers',
   faqQuestions: {
  obj1: {
    question: "What are tetrahedral numbers?",
    answer: "Tetrahedral numbers count dots arranged in a tetrahedron: a triangular pyramid built from stacked layers of triangular numbers. The sequence begins 1, 4, 10, 20, 35, 56, 84, 120, 165. The n-th tetrahedral number is given by the closed form Te sub n equals n times the quantity n plus 1 times the quantity n plus 2, all divided by 6."
  },
  obj2: {
    question: "What is the formula for tetrahedral numbers?",
    answer: "The closed form is Te sub n equals n times the quantity n plus 1 times the quantity n plus 2, divided by 6. Equivalently, Te sub n is the sum of the first n triangular numbers: T sub 1 plus T sub 2 plus T sub 3 plus the n-th triangular. Tetrahedral numbers are the 3D analog of triangular numbers."
  },
  obj3: {
    question: "How do you test whether a number is tetrahedral?",
    answer: "Unlike triangular or square numbers, tetrahedrals have no clean closed-form inverse. The test estimates n approximately equal to the cube root of 6m (from the approximation Te sub n approximately equals n cubed divided by 6), then verifies Te sub k equals m for integer k values near the estimate. Constant-time check after a constant-time estimate."
  },
  obj4: {
    question: "What is the relationship between tetrahedral and triangular numbers?",
    answer: "Tetrahedral numbers are running totals (partial sums) of triangular numbers: Te sub n equals T sub 1 plus T sub 2 plus T sub n. Geometrically, stacking n layers of triangular numbers (with the n-th layer at the bottom containing T sub n dots) produces a tetrahedron with Te sub n total dots."
  },
  obj5: {
    question: "Where do tetrahedral numbers appear in mathematics?",
    answer: "Tetrahedral numbers appear as a diagonal of Pascal's triangle, as the binomial coefficient C(n+2, 3), in 3D crystal-packing problems, in counting trios of objects (the number of unordered triples from n plus 2 items is Te sub n), and in the hockey-stick identity. They also appear in the cannonball problem: stacking cannonballs in a tetrahedral pile."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Tetrahedral Number?`,
    content: `A tetrahedral number counts dots arranged in a tetrahedron — a triangular pyramid. The pyramid is built from stacked triangular layers: the bottom layer contains $T_n$ dots, the next layer up contains $T_{n-1}$ dots, and so on to the apex with one dot.

$$\\mathrm{Te}_1 = 1, \\quad \\mathrm{Te}_2 = 4, \\quad \\mathrm{Te}_3 = 10, \\quad \\mathrm{Te}_4 = 20, \\quad \\mathrm{Te}_5 = 35, \\quad \\mathrm{Te}_6 = 56, \\quad \\ldots$$

The closed form is

$$\\mathrm{Te}_n = \\frac{n(n+1)(n+2)}{6}$$

**As a running sum of triangulars.** $\\mathrm{Te}_n = T_1 + T_2 + \\cdots + T_n$. The $n$-th tetrahedral number is the partial sum of the first $n$ triangular numbers.

**As a binomial coefficient.** $\\mathrm{Te}_n = \\binom{n+2}{3}$. Tetrahedral numbers form the fourth diagonal of Pascal's triangle (counting from 0).

**As a 3D figurate number.** Tetrahedral numbers are the 3D analog of triangular numbers, the simplest 3-dimensional pyramidal sequence. They count dots in a triangular pyramid the way triangulars count dots in a triangle.

For deeper coverage see **tetrahedral number**, **pyramidal numbers**, and **triangular number**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Closed Form and Its Derivations`,
    content: `Three distinct ways to arrive at $\\mathrm{Te}_n = n(n+1)(n+2)/6$.

**Sum of triangulars.** From $\\mathrm{Te}_n = \\sum_{k=1}^{n} T_k = \\sum_{k=1}^{n} \\frac{k(k+1)}{2}$:

$$\\mathrm{Te}_n = \\frac{1}{2} \\sum_{k=1}^{n}(k^2 + k) = \\frac{1}{2}\\left(\\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2}\\right)$$

Combining:

$$\\mathrm{Te}_n = \\frac{n(n+1)}{2} \\cdot \\frac{(2n+1) + 3}{6} = \\frac{n(n+1)(2n+4)}{12} = \\frac{n(n+1)(n+2)}{6}$$

**Binomial coefficient.** $\\binom{n+2}{3} = \\frac{(n+2)!}{3!(n-1)!} = \\frac{(n+2)(n+1)n}{6} = \\mathrm{Te}_n$. The hockey-stick identity in Pascal's triangle says that summing entries along a column equals the next column's entry — and the triangular numbers in column 2 sum to tetrahedral numbers in column 3.

**Why the formula is always an integer.** Of three consecutive integers $n$, $n + 1$, $n + 2$, one is divisible by 3, and at least one is even. So the product is divisible by $3 \\cdot 2 = 6$.

**Asymptotic behavior.** $\\mathrm{Te}_n \\sim n^3 / 6$. Tetrahedral numbers grow cubically, in contrast to the quadratic growth of polygonal numbers.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test — Why It's Harder`,
    content: `Unlike triangulars (test via $8m + 1$) or squares (test via square root), tetrahedral numbers have **no clean closed-form inverse**. The cubic equation $n(n+1)(n+2)/6 = m$, or equivalently $n^3 + 3n^2 + 2n - 6m = 0$, can be solved by the cubic formula but the discriminant is messy.

**Practical approach: estimate then verify.** Since $\\mathrm{Te}_n \\approx n^3/6$ for large $n$, the inverse is approximately $n \\approx \\sqrt[3]{6m}$. The algorithm:

1. Compute $n_{\\text{est}} = \\text{round}(\\sqrt[3]{6m})$.
2. Verify $\\mathrm{Te}_k = m$ for $k \\in \\{n_{\\text{est}} - 1, n_{\\text{est}}, n_{\\text{est}} + 1\\}$.
3. If any match, $m$ is tetrahedral. Otherwise, no.

Why a window of three? The estimate $\\sqrt[3]{6m}$ is accurate to within a small constant for all $m$, so verifying nearby integers handles rounding errors and edge cases.

**Example.** Is 120 tetrahedral? Estimate $\\sqrt[3]{6 \\cdot 120} = \\sqrt[3]{720} \\approx 8.96$. Round to 9. Check $\\mathrm{Te}_8 = 120$, $\\mathrm{Te}_9 = 165$, $\\mathrm{Te}_7 = 84$. Match at $k = 8$: $120 = \\mathrm{Te}_8$. Verified: $8 \\cdot 9 \\cdot 10 / 6 = 120$.

**Non-example.** Is 100 tetrahedral? Estimate $\\sqrt[3]{600} \\approx 8.43$. Round to 8. Check $\\mathrm{Te}_7 = 84$, $\\mathrm{Te}_8 = 120$, $\\mathrm{Te}_9 = 165$. None equals 100. So 100 is not tetrahedral.

**Trade-off.** The estimate-then-verify approach is fast (constant time) but slightly less elegant than the closed-form perfect-square tests of polygonal numbers.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $\\mathrm{Te}_n = \\mathrm{Te}_{n-1} + T_n$ with $\\mathrm{Te}_1 = 1$. Each tetrahedral number adds the next triangular layer.
• **Binomial coefficient**: $\\mathrm{Te}_n = \\binom{n+2}{3}$. The number of unordered triples from $n + 2$ objects.
• **Hockey-stick identity**: $\\sum_{k=1}^{n} \\binom{k+1}{2} = \\binom{n+2}{3}$. The sum of column 2 of Pascal's triangle (the triangular numbers) gives column 3 (the tetrahedrals).
• **Sum of first $n$ tetrahedrals**: $\\sum_{k=1}^{n} \\mathrm{Te}_k = \\binom{n+3}{4}$ — the 4D pentatope numbers.
• **Connection to squares**: $\\mathrm{Te}_n + \\mathrm{Te}_{n-1} = \\sum_{k=1}^{n} k^2$, the sum of the first $n$ squares.
• **Generating function**: $\\sum_{n=0}^{\\infty} \\mathrm{Te}_n x^n = \\frac{x}{(1 - x)^4}$.
• **Asymptotic growth**: $\\mathrm{Te}_n \\sim n^3/6$.
• **The only tetrahedral squares**: 1, 4, 19600. Just three tetrahedral numbers are perfect squares (proved by Anglin in 1985, though Mordell-style arguments suggested this much earlier).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Tetrahedral Numbers and the Cannonball Problem`,
    content: `A famous classical problem: in how many ways can cannonballs be stacked in a tetrahedral pile, such that the total number of cannonballs is also a perfect square?

The question asks: for which $n$ is $\\mathrm{Te}_n$ a perfect square?

**The answer.** Only three values of $n$ work:

• $n = 1$: $\\mathrm{Te}_1 = 1 = 1^2$
• $n = 2$: $\\mathrm{Te}_2 = 4 = 2^2$
• $n = 48$: $\\mathrm{Te}_{48} = 19600 = 140^2$

No other tetrahedral number is a perfect square. This was a conjecture by Eduard Lucas in 1875 and proved by W.S. Anglin in 1985.

**The geometric meaning.** Cannonballs piled in a tetrahedron with 48 layers contain exactly $140 \\times 140 = 19600$ balls — the same total as cannonballs arranged in a flat square of side 140. The trivial cases $n = 1$ and $n = 2$ are uninteresting; $n = 48$ is the only nontrivial solution.

**Why so few?** The equation $\\mathrm{Te}_n = m^2$ is a Diophantine equation, $n(n+1)(n+2)/6 = m^2$. After clearing denominators and substituting, it reduces to a problem about integer points on a cubic curve. The finiteness of solutions follows from Mordell's theorem (specific case) and the analysis is delicate.

This is one of the most striking finite-solution results in elementary number theory.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Pascal's Triangle and Hockey-Stick Identity`,
    content: `Tetrahedral numbers form the **fourth diagonal** of Pascal's triangle (counting diagonals from 0).

Pascal's triangle diagonals (each one a figurate-number sequence):

• **Diagonal 0**: $1, 1, 1, 1, \\ldots$ (constants)
• **Diagonal 1**: $1, 2, 3, 4, \\ldots$ (natural numbers — 1D figurate)
• **Diagonal 2**: $1, 3, 6, 10, \\ldots$ (triangular — 2D figurate)
• **Diagonal 3**: $1, 4, 10, 20, \\ldots$ (tetrahedral — 3D figurate)
• **Diagonal 4**: $1, 5, 15, 35, \\ldots$ (pentatope — 4D figurate)

The pattern continues: each diagonal is the cumulative-sum sequence of the previous diagonal.

**The hockey-stick identity.** Summing entries down a diagonal (a "hockey stick") gives the next diagonal's entry where the stick "hooks":

$$\\sum_{k=r}^{n}\\binom{k}{r} = \\binom{n+1}{r+1}$$

For $r = 2$:

$$\\binom{2}{2} + \\binom{3}{2} + \\cdots + \\binom{n+1}{2} = \\binom{n+2}{3}$$

The left side is $T_1 + T_2 + \\cdots + T_n$ (triangular numbers); the right side is $\\mathrm{Te}_n$. This is the cleanest proof that the sum of the first $n$ triangulars is the $n$-th tetrahedral.

**Geometric meaning.** A tetrahedron of side $n$ is built from triangular layers of sides $n, n-1, \\ldots, 1$. The total dot count is the sum of layer dot counts, which is the sum of triangulars.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Confusing tetrahedral with triangular numbers.** Triangular: $T_n = n(n+1)/2$, 2D. Tetrahedral: $\\mathrm{Te}_n = n(n+1)(n+2)/6$, 3D. Tetrahedrals are partial sums of triangulars.

• **Forgetting the divide by 6.** The formula has a denominator of 6, not 2 or 4. Skipping it overshoots by a factor of 6.

• **Misremembering the membership test.** Unlike triangulars and squares, tetrahedrals do not have a perfect-square discriminant test. Use estimate-by-cube-root then verify.

• **Trying to use a perfect-square test.** Discriminant tests work for polygonal numbers (which are quadratic in $n$) but not for tetrahedrals (cubic in $n$). The cubic-root approximation is the standard practical approach.

• **Confusing with pyramidal numbers in general.** Tetrahedral numbers are the simplest pyramidal numbers — the triangular-base pyramid case. Square pyramidal numbers $P_n^{\\square} = n(n+1)(2n+1)/6$ count balls in a square-base pyramid; these are different.

• **Off-by-one indexing.** $\\mathrm{Te}_1 = 1$, not $\\mathrm{Te}_0 = 0$. Some sources start at $n = 0$; this explorer uses $n = 1$.

• **Confusing the cannonball problem variants.** The tetrahedral cannonball problem has three solutions (n = 1, 2, 48). The square pyramidal cannonball problem has just two non-trivial solutions ($n = 1$ and $n = 24$, where the latter gives $1 + 4 + \\cdots + 576 = 4900 = 70^2$).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Triangular Numbers** — $T_n = n(n+1)/2$. The 2D base case; tetrahedrals are running sums of these.

**Square Pyramidal Numbers** — $P_n^{\\square} = n(n+1)(2n+1)/6$. Count dots in a square-base pyramid; different from tetrahedral.

**Pentatope Numbers** — $\\binom{n+3}{4} = n(n+1)(n+2)(n+3)/24$. The 4D analog of tetrahedral; the next Pascal's triangle diagonal.

**Pascal's Triangle** — the source of binomial coefficients. Tetrahedrals form its fourth diagonal.

**Hockey-Stick Identity** — the summation identity that connects column $k$ of Pascal's triangle to column $k + 1$.

**Cannonball Problem** — the classical question of when tetrahedral numbers are also perfect squares. Three solutions only: 1, 4, 19600.

**Pyramidal Numbers** — the umbrella term for 3D figurate numbers in pyramidal arrangements. Tetrahedral and square pyramidal are the two most common.

**Figurate Numbers** — all polygonal, pyramidal, and higher-dimensional analogs. Tetrahedrals are the 3D, 3-sided base case.

**Binomial Coefficient** — $\\binom{n+2}{3} = \\mathrm{Te}_n$. The number of unordered triples from $n + 2$ items.

**Triangular Pyramid** — the geometric solid whose dot count is a tetrahedral number. Four triangular faces, all equilateral if regular.

**3-Simplex** — the technical name for a tetrahedron in higher-dimensional terminology. The $k$-simplex generalizes to $k$ dimensions; the $k$-th simplex numbers are $\\binom{n + k - 1}{k}$.

**Mordell's Theorem** — the deep result enabling the proof that only finitely many tetrahedral numbers are squares.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'fibonacci-sequence': {
    kind: 'plain',
    key: 'fibonacci',
    title: 'Fibonacci Sequence',
    h1: 'Fibonacci Sequence Calculator',
    seoTitle: 'Fibonacci Sequence Calculator \u2014 Exact Arbitrary-Precision Terms | Learn Math Class',
    description:
      'Calculator and explorer for the Fibonacci sequence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = F_2 = 1$. ' +
      'All terms are computed with arbitrary-precision integers, exact at any index. ' +
      'Browse, list a range, test whether a number is Fibonacci using $5m^2 \\pm 4$, or look up $F_n$ directly.',
    keywords: 'fibonacci sequence, fibonacci numbers, F_n calculator, fibonacci membership test, 5m^2 + 4, 5m^2 - 4, fibonacci formula',
    category: 'Sequences',
    subCategory: 'Famous sequences',
    icon: 'φ',
    url: '/algebra/calculators/sequences/fibonacci-sequence',
   faqQuestions: {
  obj1: {
    question: "What is the Fibonacci sequence?",
    answer: "The Fibonacci sequence is an integer sequence where each term equals the sum of the two preceding ones, starting from 1 and 1: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144. The recurrence is F sub n equals F sub n minus 1 plus F sub n minus 2, with initial values F sub 1 equals F sub 2 equals 1."
  },
  obj2: {
    question: "What is the formula for the n-th Fibonacci number?",
    answer: "The recursive definition is F sub n equals F sub n minus 1 plus F sub n minus 2. Binet's closed-form formula gives F sub n equals phi to the n power minus psi to the n power, divided by the square root of 5, where phi is the golden ratio (1 plus root 5) over 2 and psi is (1 minus root 5) over 2. This explorer computes Fibonacci with arbitrary-precision integers for exact results at any index."
  },
  obj3: {
    question: "How do you test whether a number is in the Fibonacci sequence?",
    answer: "A positive integer m is a Fibonacci number if and only if 5 times m squared plus 4 or 5 times m squared minus 4 is a perfect square. This is Gessel's identity from 1972. Once confirmed, the index is found by iterating the Fibonacci recurrence until the term equals m."
  },
  obj4: {
    question: "What is the golden ratio and how does it relate to Fibonacci?",
    answer: "The golden ratio phi equals (1 plus square root of 5) divided by 2, approximately 1.618. As n grows, the ratio of consecutive Fibonacci numbers F sub n plus 1 divided by F sub n approaches phi. Phi is the positive root of the characteristic equation x squared equals x plus 1, which is the equation underlying the Fibonacci recurrence."
  },
  obj5: {
    question: "Where does the Fibonacci sequence appear in mathematics and nature?",
    answer: "Fibonacci numbers appear in number theory (Zeckendorf's theorem, Lucas sequences), in combinatorics (tilings, paths in graphs, compositions of integers), in computer science (recursive algorithms, Fibonacci heaps), and in nature (spiral patterns in plants, the arrangement of petals, leaves, and seeds). The golden ratio appears in art, architecture, and design."
}
},
sectionsContent: {
  obj1: {
    title: `What is the Fibonacci Sequence?`,
    content: `The Fibonacci sequence is defined by the linear recurrence

$$F_n = F_{n-1} + F_{n-2}$$

with initial conditions $F_1 = F_2 = 1$. The first terms are:

$$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, \\ldots$$

Each term is the sum of the two before. Despite the simplicity of the rule, the sequence has profound connections to algebra, geometry, number theory, and the natural world.

**Historical origin.** Named after Leonardo Fibonacci of Pisa, who introduced the sequence to Western mathematics in his 1202 book Liber Abaci through a problem about rabbit populations. The sequence was known earlier in Indian mathematics, particularly in Sanskrit prosody.

**Index conventions.** This explorer uses $F_1 = F_2 = 1$. Other conventions start at $F_0 = 0, F_1 = 1$ (giving the same sequence shifted by one). Be careful when comparing references.

**Exact computation.** Fibonacci numbers grow exponentially — $F_{100}$ has 21 digits, $F_{1000}$ has 209 digits. The explorer uses arbitrary-precision integers (BigInt) so every term is exact at any index, with no floating-point error.

For deeper coverage see **Fibonacci sequence**, **golden ratio**, and **linear recurrence**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Recurrence and Binet's Formula`,
    content: `**The recurrence.** $F_n = F_{n-1} + F_{n-2}$ is a second-order linear recurrence with constant coefficients. Its characteristic equation is

$$x^2 = x + 1$$

with roots

$$\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.61803398\\ldots, \\quad \\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.61803398\\ldots$$

$\\varphi$ is the **golden ratio**.

**Binet's formula.** The closed-form expression for $F_n$ is

$$F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$$

Since $|\\psi| < 1$, $\\psi^n$ shrinks rapidly to zero, and $F_n$ is well-approximated by $\\varphi^n / \\sqrt{5}$ for large $n$.

**Why the formula gives an integer.** $\\varphi$ and $\\psi$ are irrational, but the combination $\\varphi^n - \\psi^n$ always lies in $\\sqrt{5} \\mathbb{Z}$ — the difference of conjugate irrational powers cancels into a rational multiple of $\\sqrt{5}$. Dividing by $\\sqrt{5}$ gives an integer.

**Practical computation.** Binet's formula has floating-point limitations: for large $n$, the formula needs more precision than typical doubles provide. The recurrence (or matrix exponentiation, or fast doubling) is preferred for exact computation, which is why this explorer uses BigInt iteration.

**Matrix form.** $\\begin{pmatrix} F_{n+1} \\\\ F_n \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}^n \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$. Matrix exponentiation by repeated squaring computes $F_n$ in $O(\\log n)$ multiplications.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Membership Test — Gessel's Identity`,
    content: `Given a positive integer $m$, how do you decide whether $m$ is a Fibonacci number?

**Gessel's identity (1972).** $m$ is a Fibonacci number if and only if

$$5 m^2 + 4 \\quad \\text{or} \\quad 5 m^2 - 4$$

is a perfect square. Once one of these is a perfect square, the index $n$ is found by iterating the Fibonacci recurrence until $F_n = m$.

**Why two cases.** The identity has both $+4$ and $-4$ because Fibonacci numbers at even and odd indexes behave differently with respect to the underlying Lucas-Fibonacci identity. Specifically:

• $5 F_n^2 + 4 = L_n^2 + 4 L_n - 4$ — wait, the cleaner statement: $5 F_n^2 - 4 (-1)^n = L_n^2$, where $L_n$ is the $n$-th Lucas number.

So $5 F_n^2 + 4$ is a perfect square (equal to $L_n^2$) when $n$ is odd, and $5 F_n^2 - 4$ is a perfect square when $n$ is even. Together, the two cases cover all Fibonacci numbers.

**Example.** Is 144 Fibonacci? Compute $5 \\cdot 144^2 = 103680$. Then $103680 + 4 = 103684$; $\\sqrt{103684} \\approx 321.99\\ldots$, not a perfect square. Try $103680 - 4 = 103676$; $\\sqrt{103676} = 322$, a perfect square. So 144 is Fibonacci. Iterating the recurrence: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144$ — that's $F_{12}$. So $144 = F_{12}$.

**Non-example.** Is 100 Fibonacci? $5 \\cdot 100^2 = 50000$. Then $50000 + 4 = 50004$; $\\sqrt{50004} \\approx 223.61$, not a perfect square. $50000 - 4 = 49996$; $\\sqrt{49996} \\approx 223.59$, not a perfect square either. So 100 is not Fibonacci. The nearest are $F_{11} = 89$ and $F_{12} = 144$.

**BigInt arithmetic.** For large $m$, the squares $5 m^2 \\pm 4$ exceed safe-integer precision. The explorer uses BigInt for these checks, so the test is exact for any input within input-parsing range.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Properties and Identities`,
    content: `Fibonacci numbers satisfy hundreds of identities. A representative selection:

• **Cassini's identity**: $F_{n-1} F_{n+1} - F_n^2 = (-1)^n$. The product of two terms straddling $F_n$ differs from $F_n^2$ by exactly $\\pm 1$.
• **Catalan's identity**: $F_n^2 - F_{n-r} F_{n+r} = (-1)^{n-r} F_r^2$. A generalization of Cassini's.
• **d'Ocagne's identity**: $F_m F_{n+1} - F_{m+1} F_n = (-1)^n F_{m-n}$.
• **Fast doubling**: $F_{2n} = F_n (2 F_{n+1} - F_n)$ and $F_{2n+1} = F_n^2 + F_{n+1}^2$. These give $O(\\log n)$ computation by recursion.
• **Sum identity**: $F_1 + F_2 + \\cdots + F_n = F_{n+2} - 1$.
• **Sum of squares**: $F_1^2 + F_2^2 + \\cdots + F_n^2 = F_n F_{n+1}$.
• **Sum of odd-indexed**: $F_1 + F_3 + F_5 + \\cdots + F_{2n-1} = F_{2n}$.
• **GCD identity**: $\\gcd(F_m, F_n) = F_{\\gcd(m, n)}$. A beautiful number-theoretic property — the GCD of Fibonacci numbers is itself a Fibonacci number.
• **Divisibility**: $F_m \\mid F_n$ if and only if $m \\mid n$ (for $m \\geq 3$). Fibonacci-number divisibility mirrors index divisibility.
• **Zeckendorf's theorem**: every positive integer has a unique representation as a sum of non-consecutive Fibonacci numbers.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Fibonacci in Nature and Application`,
    content: `Fibonacci numbers appear with striking frequency in biological and physical contexts.

**Phyllotaxis.** The arrangement of leaves around a stem, seeds in a sunflower, scales on a pinecone, and bracts on a pineapple often follows Fibonacci-based spirals. A sunflower head typically has 34 spirals in one direction and 55 in the other (both Fibonacci numbers). The golden angle $\\approx 137.5°$, derived from $\\varphi$, is the optimal packing angle.

**Branching patterns.** Some tree species (notably elm and rose) produce branches in counts that grow by Fibonacci numbers.

**Pinecone and pineapple spirals.** Pinecones have spiral counts in pairs like (5, 8), (8, 13), or (13, 21) — consecutive Fibonacci numbers.

**Honeybee genealogy.** Male bees (drones) have only one parent; female bees have two. Counting ancestors back, a drone's ancestor counts form the Fibonacci sequence: 1, 1, 2, 3, 5, ...

**Cryptography and algorithms.** Fibonacci heaps achieve $O(1)$ amortized insertion, and Fibonacci coding is used in some data-compression schemes.

**Financial markets.** Some traders use Fibonacci retracements (38.2%, 50%, 61.8%) derived from Fibonacci ratios for technical analysis. The mathematical basis is more cultural than rigorous.

**Counting compositions.** $F_{n+1}$ counts the ways to write $n$ as an ordered sum of 1s and 2s — closely related to tiling and combinatorial problems.

**Art and architecture.** The golden ratio and Fibonacci proportions appear in classical Greek architecture, Renaissance art, and modern design. Some claims are exaggerated; others are well-documented.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Fibonacci and the Golden Ratio`,
    content: `The golden ratio $\\varphi = (1 + \\sqrt{5})/2 \\approx 1.618$ is the key analytic object behind the Fibonacci sequence.

**Limit of ratios.** As $n \\to \\infty$:

$$\\lim_{n \\to \\infty} \\frac{F_{n+1}}{F_n} = \\varphi$$

Even for modest $n$, the ratio is close to $\\varphi$: $F_{11}/F_{10} = 89/55 = 1.61818\\ldots$.

**Why phi.** $\\varphi$ is the unique positive number satisfying $\\varphi = 1 + 1/\\varphi$, equivalently $\\varphi^2 = \\varphi + 1$. This equation matches the structure of the Fibonacci recurrence. Solving $x^2 - x - 1 = 0$ gives $\\varphi$ and $\\psi = (1 - \\sqrt{5})/2$.

**The golden ratio's role in Binet's formula.** $F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}$. Since $|\\psi| < 1$, the $\\psi^n$ term decays, and $F_n \\approx \\varphi^n / \\sqrt{5}$ to within $1/2$ for all $n \\geq 1$.

**The golden rectangle.** A rectangle with side ratio $\\varphi : 1$ has the property that cutting off a square leaves a smaller rectangle with the same side ratio. Drawing diagonals of these nested rectangles approximates the **logarithmic spiral**, which itself is closely related to natural growth patterns.

**Other irrational appearances.** The continued-fraction expansion of $\\varphi$ is $[1; 1, 1, 1, \\ldots]$ — the simplest possible continued fraction. This makes $\\varphi$ the **most irrational** number in the sense of being hardest to approximate by rationals.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Index convention confusion.** Two common conventions: $F_0 = 0, F_1 = 1$ (Knuth, OEIS) or $F_1 = F_2 = 1$ (this explorer, many classical references). They give the same sequence shifted by one. Always check the convention before quoting a value.

• **Floating-point precision errors.** Binet's formula or naive double-precision computation breaks at moderate $n$. $F_{80}$ already has 17 digits — exceeding double precision. Use BigInt or symbolic computation for exact values.

• **Misapplying Gessel's identity.** Both $5m^2 + 4$ and $5m^2 - 4$ must be checked; only one will be a perfect square (or neither, if $m$ is not Fibonacci). Skipping one case incorrectly rejects half of all Fibonacci numbers.

• **Naive recursive computation.** Computing $F_n$ via the naive recursion $\\text{fib}(n) = \\text{fib}(n-1) + \\text{fib}(n-2)$ has exponential time complexity. Use memoization, iteration, fast doubling, or matrix exponentiation for $O(n)$ or $O(\\log n)$.

• **Confusing Fibonacci with Lucas numbers.** Lucas numbers $L_n$ satisfy the same recurrence with $L_1 = 1, L_2 = 3$. They share many identities with Fibonacci but are a distinct sequence: 1, 3, 4, 7, 11, 18, 29, 47, ...

• **Overclaiming nature appearances.** Fibonacci spirals appear in many plants but not all. Spurious claims (e.g., "the Mona Lisa uses golden-ratio proportions") are common but often unsupported by careful measurement.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Lucas Numbers** — $L_n = L_{n-1} + L_{n-2}$ with $L_1 = 1, L_2 = 3$. Closely related to Fibonacci; share many identities. Sequence: 1, 3, 4, 7, 11, 18, 29, 47, ...

**Golden Ratio** — $\\varphi = (1 + \\sqrt{5})/2$. The limit of consecutive Fibonacci ratios; appears in Binet's formula.

**Tribonacci Numbers** — the three-term generalization: $T_n = T_{n-1} + T_{n-2} + T_{n-3}$. Each term is the sum of the previous three.

**Pell Numbers** — $P_n = 2 P_{n-1} + P_{n-2}$ with $P_0 = 0, P_1 = 1$. Closely related to $\\sqrt{2}$ as Fibonacci is to $\\varphi$.

**Binet's Formula** — the closed-form expression for $F_n$ using $\\varphi$ and $\\psi$. The prototype for closed-form solutions of linear recurrences.

**Linear Recurrence** — the general class. Fibonacci is the simplest non-trivial second-order linear recurrence.

**Generating Function** — $\\sum F_n x^n = x/(1 - x - x^2)$. The rational generating function corresponds to a linear recurrence.

**Continued Fractions** — convergents of $\\varphi$ are exactly $F_{n+1}/F_n$. Connects irrational approximation to Fibonacci.

**Zeckendorf Representation** — every positive integer has a unique decomposition as a sum of non-consecutive Fibonacci numbers. A base-$\\varphi$ analog of binary representation.

**Lucas Sequence** — a two-parameter family generalizing Fibonacci. Defined by recurrence $U_n = P U_{n-1} - Q U_{n-2}$. Fibonacci is $U_n(P = 1, Q = -1)$.

**Pisano Period** — the period of Fibonacci numbers modulo $m$, denoted $\\pi(m)$. The sequence $F_n \\pmod m$ is always periodic; the period has interesting number-theoretic properties.

**Wythoff Sequences** — pairs of sequences whose union is all positive integers, defined using $\\varphi$. The "lower" Wythoff sequence is $\\lfloor n \\varphi \\rfloor$ and the "upper" is $\\lfloor n \\varphi^2 \\rfloor$.

**Spiral and Phyllotaxis** — the natural appearance of Fibonacci numbers in plant arrangements, sunflower seed spirals, pinecone scales, etc.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'prime-numbers': {
    kind: 'plain',
    key: 'primes',
    title: 'Prime Numbers',
    h1: 'Prime Numbers Calculator',
    seoTitle: 'Prime Numbers Calculator \u2014 First 10,000 Primes Lookup and Tester | Learn Math Class',
    description:
      'Prime-number explorer using a precomputed list of the first 10,000 primes (up to 104,729). ' +
      'Browse the first N primes, list a range, test whether a number is prime in constant time, or look up the $n$-th prime directly. ' +
      'Non-prime inputs show the nearest primes on either side.',
    keywords: 'prime numbers, n-th prime, prime number test, prime lookup, primality, first 10000 primes',
    category: 'Sequences',
    subCategory: 'Famous sequences',
    icon: 'p',
    url: '/algebra/calculators/sequences/prime-numbers',
   faqQuestions: {
  obj1: {
    question: "What are prime numbers?",
    answer: "Prime numbers are positive integers greater than 1 that have no positive divisors other than 1 and themselves. The first primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Every integer greater than 1 is either prime or can be uniquely factored into primes."
  },
  obj2: {
    question: "How many prime numbers are there?",
    answer: "There are infinitely many prime numbers. Euclid proved this around 300 BCE: if there were only finitely many primes, you could form a product of all of them plus 1, which would either be prime or have a prime factor not in the original list, contradicting the assumption."
  },
  obj3: {
    question: "How do you test whether a number is prime?",
    answer: "For small numbers, trial division by all primes up to the square root suffices. For numbers up to the precomputed range of this explorer (104,729 — the 10,000th prime), a hash-set lookup determines primality in constant time. For larger numbers, probabilistic tests like Miller-Rabin or deterministic tests like AKS are used."
  },
  obj4: {
    question: "What is the n-th prime number?",
    answer: "The 1st prime is 2, the 10th is 29, the 100th is 541, the 1000th is 7919, and the 10000th is 104,729. There is no closed-form formula for the n-th prime, but the prime counting function pi of x and its inverse give approximations: the n-th prime is approximately n times the natural log of n for large n."
  },
  obj5: {
    question: "Why are prime numbers important?",
    answer: "Primes are the building blocks of integers via the fundamental theorem of arithmetic: every integer greater than 1 factors uniquely into primes. They underpin RSA encryption and other public-key cryptography systems, appear throughout number theory (Riemann hypothesis, Goldbach conjecture, twin primes), and play central roles in algebraic number theory, analytic number theory, and combinatorics."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Prime Number?`,
    content: `A prime number is a positive integer greater than 1 whose only positive divisors are 1 and itself. The first few primes:

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, \\ldots$$

**Why 1 is not prime.** The convention excludes 1 to make the fundamental theorem of arithmetic clean: every integer $> 1$ factors uniquely into primes. If 1 were prime, $6 = 2 \\cdot 3 = 1 \\cdot 2 \\cdot 3 = 1 \\cdot 1 \\cdot 2 \\cdot 3$ would have multiple representations.

**Why 2 is the only even prime.** Every other even number is divisible by 2, so cannot be prime. Both being even and being greater than 2 implies non-prime.

**Composite numbers.** Integers $> 1$ that are not prime are composite. Examples: $4 = 2 \\cdot 2$, $6 = 2 \\cdot 3$, $8 = 2^3$, $9 = 3^2$, $10 = 2 \\cdot 5$.

**Scope of this explorer.** This tool uses a precomputed list of the first 10,000 primes, with maximum value 104,729 (the 10,000th prime). Lookups and membership tests within this range are constant-time. For larger numbers, dedicated primality-testing tools are needed.

For deeper coverage see **prime number**, **fundamental theorem of arithmetic**, and **primality test**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The Fundamental Theorem of Arithmetic`,
    content: `**Statement.** Every integer greater than 1 either is prime or can be written uniquely (up to ordering) as a product of primes.

For example:

$$12 = 2^2 \\cdot 3, \\quad 100 = 2^2 \\cdot 5^2, \\quad 420 = 2^2 \\cdot 3 \\cdot 5 \\cdot 7, \\quad 1000000 = 2^6 \\cdot 5^6$$

**Why uniqueness matters.** Unique factorization is what makes primes "atoms" of arithmetic. The integers have a structure as a unique factorization domain — properties like greatest common divisor, least common multiple, modular arithmetic, and modular inverses all rest on this structure.

**Why it's a theorem, not a definition.** It's not obvious that factorization is unique. Consider analogous systems where it fails: in $\\mathbb{Z}[\\sqrt{-5}]$, we have $6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})$ — two different factorizations into irreducibles. The integers $\\mathbb{Z}$ have unique factorization; this is a deep property requiring proof.

**Proof sketch.** Standard proofs use the Euclidean algorithm: if a prime $p$ divides a product $ab$, then $p$ divides $a$ or $p$ divides $b$. This "prime property" plus induction gives unique factorization.

**Practical consequence.** All number-theoretic algorithms (GCD computation, modular inverse, RSA, primality testing) rest on the structure that the fundamental theorem provides. Disrupt unique factorization and most of cryptography breaks down.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Primality Testing — How the Explorer Decides`,
    content: `This explorer uses a **precomputed list of the first 10,000 primes** (up to 104,729). Three modes interact with the list:

• **Browse the first $N$ primes** — direct array access, $O(N)$ time.
• **List a range** — direct slice, $O(b - a)$ time.
• **Membership test** — hash-set lookup, $O(1)$ time.
• **$n$-th prime lookup** — direct array access, $O(1)$ time.

**Out-of-range behavior.** For inputs $m > 104{,}729$, the explorer reports the value as out of range rather than guessing. To test primality of larger numbers, use dedicated primality-testing tools or libraries.

**Why precomputed.** Storing the first 10,000 primes costs only a few kilobytes of memory and gives constant-time answers for the common range of educational and recreational queries. Naive trial division for $m \\approx 10^5$ would require dozens of divisions per query — not slow, but slower than a lookup.

**General-case primality tests** (for context, not used here):

• **Trial division**: divide $m$ by all primes up to $\\sqrt{m}$. Slow but exact. Practical up to $\\sim 10^{12}$.
• **Miller-Rabin**: probabilistic test, fast and very reliable. Practical for thousands of digits.
• **AKS primality test**: deterministic polynomial-time test (2002). Theoretically important but slower than Miller-Rabin in practice.
• **Lucas-Lehmer**: specialized test for Mersenne primes ($2^p - 1$). Used by GIMPS to find the largest known primes.

**The largest known prime** (as of recent record): $2^{82,589,933} - 1$, a Mersenne prime with over 24 million digits. Found via GIMPS in 2018.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `The Prime Counting Function and Distribution`,
    content: `Let $\\pi(x)$ denote the number of primes less than or equal to $x$. Examples:

$$\\pi(10) = 4, \\quad \\pi(100) = 25, \\quad \\pi(1000) = 168, \\quad \\pi(10000) = 1229, \\quad \\pi(100000) = 9592$$

**The prime number theorem (PNT).** $\\pi(x) \\sim \\dfrac{x}{\\ln x}$ as $x \\to \\infty$.

Equivalently, the density of primes near $x$ is approximately $1/\\ln x$. So:

• Near $x = 1000$, about 1 in 7 numbers is prime.
• Near $x = 10^6$, about 1 in 14 numbers is prime.
• Near $x = 10^{100}$, about 1 in 230 numbers is prime.

Primes become sparser as numbers grow, but never disappear (Euclid's theorem).

**Better approximations.** The logarithmic integral $\\text{Li}(x) = \\int_2^x dt/\\ln t$ approximates $\\pi(x)$ more accurately than $x / \\ln x$. For $x = 10^{15}$, $\\text{Li}(x)$ matches $\\pi(x)$ to within about $10^7$ (out of $\\sim 3 \\cdot 10^{13}$ primes).

**The Riemann hypothesis.** The conjecture that all non-trivial zeros of the Riemann zeta function $\\zeta(s)$ lie on the line $\\text{Re}(s) = 1/2$ would give very precise error bounds on $\\pi(x) - \\text{Li}(x)$, namely $O(\\sqrt{x} \\ln x)$. This is the most famous open problem in mathematics.

**Inverse: the $n$-th prime.** $p_n \\sim n \\ln n$. Examples: $p_{100} = 541 \\approx 100 \\cdot \\ln 100 = 460$; $p_{1000} = 7919 \\approx 1000 \\cdot \\ln 1000 = 6908$. The approximation improves for large $n$ and can be refined using $p_n \\approx n(\\ln n + \\ln \\ln n - 1)$.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Famous Conjectures and Open Problems`,
    content: `Despite their elementary definition, primes harbor some of the deepest open problems in mathematics.

**Twin prime conjecture.** Twin primes are pairs $(p, p + 2)$ both prime: $(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), \\ldots$. Open question: are there infinitely many twin primes? Likely yes; proof remains elusive. The Polymath project and Yitang Zhang's 2013 breakthrough proved infinitely many primes differ by at most some bounded amount; the bound has been reduced to 246 (and conditionally to 6 under stronger hypotheses).

**Goldbach conjecture.** Every even integer greater than 2 is a sum of two primes. Verified computationally up to $4 \\cdot 10^{18}$; no proof. Examples: $4 = 2 + 2$, $6 = 3 + 3$, $8 = 3 + 5$, $10 = 3 + 7 = 5 + 5$, $100 = 3 + 97 = 11 + 89 = \\ldots$.

**Riemann hypothesis.** All non-trivial zeros of $\\zeta(s)$ have real part $1/2$. Equivalent to precise error bounds on the distribution of primes. One of the Millennium Prize Problems ($\\$1$ million for a proof).

**Mersenne primes.** Primes of the form $2^p - 1$ where $p$ is prime: $3, 7, 31, 127, 8191, \\ldots$. Open: are there infinitely many? GIMPS finds new ones occasionally; only 51 known.

**Fermat primes.** Primes of the form $2^{2^n} + 1$: $3, 5, 17, 257, 65537$. Only these five known; conjectured to be the only ones.

**Sophie Germain primes.** Primes $p$ such that $2p + 1$ is also prime. $2, 3, 5, 11, 23, 29, 41, \\ldots$. Open: infinitely many?

**Bertrand's postulate** (proved): for every $n \\geq 1$, there is a prime $p$ with $n < p < 2n$. Erdős gave an elegant proof at age 19.

**Green-Tao theorem** (2004): the primes contain arbitrarily long arithmetic progressions. A landmark result with surprising structural depth.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Primes in Cryptography`,
    content: `Primes are the foundation of modern public-key cryptography. Two prominent schemes:

**RSA encryption.** A user picks two large primes $p$ and $q$ (each typically 1024 bits). Their product $N = p q$ is the public modulus. The security of RSA rests on the difficulty of factoring $N$ back into $p$ and $q$ when only $N$ is given.

• **Encryption**: given a message $m$ and a public key $(N, e)$, compute $c = m^e \\bmod N$.
• **Decryption**: with the private key $d$ (derived from $\\phi(N) = (p - 1)(q - 1)$), compute $m = c^d \\bmod N$.

Breaking RSA is equivalent to factoring large semi-primes. The best classical algorithms (general number field sieve) are sub-exponential; quantum computers running Shor's algorithm could factor in polynomial time, motivating post-quantum cryptography.

**Diffie-Hellman key exchange.** Uses a large prime $p$ and a generator $g$ of the multiplicative group modulo $p$. Two parties exchange $g^a \\bmod p$ and $g^b \\bmod p$ publicly; both can compute the shared secret $g^{ab} \\bmod p$ but an eavesdropper cannot (under the discrete log assumption).

**Why primality matters.** Both schemes require generating large primes quickly. Probabilistic primality tests (Miller-Rabin) verify candidate primes in milliseconds; the prime number theorem says about 1 in $\\ln(N) \\approx 1000$ random 1000-bit numbers is prime, so a few thousand candidates produce a usable prime.

**Why primality is necessary.** The mathematical structure (cyclic groups, modular inverses, Fermat's little theorem) requires primes or carefully chosen prime-related moduli. Replacing $p$ with a composite breaks the algorithms in subtle but devastating ways.

**Post-quantum cryptography.** Lattice-based, code-based, and hash-based schemes aim to replace RSA and Diffie-Hellman without relying on factoring or discrete logs. Active area of standardization (NIST).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Calling 1 a prime.** By modern convention, 1 is neither prime nor composite. Historical mathematicians sometimes called it prime, but the convention shifted in the 19th-20th century for clarity of unique factorization.

• **Calling 2 not prime because it's even.** 2 is the unique even prime. Its evenness is a quirk, not a disqualifier.

• **Thinking primes thin out predictably.** While density decreases ($\\sim 1/\\ln x$), the distribution is irregular: prime gaps can be small (twin primes) or large (gaps growing as $\\log p_n$ on average, but with occasional very large gaps).

• **Conflating prime with irreducible.** In the integers $\\mathbb{Z}$, prime and irreducible are equivalent. In more general algebraic settings, they can differ. Always specify "in $\\mathbb{Z}$" when needed.

• **Over-trusting trial division for large numbers.** Trial division up to $\\sqrt{N}$ is exact but slow for $N$ above $\\sim 10^{12}$. Use Miller-Rabin or AKS for larger inputs.

• **Forgetting Wilson's theorem subtleties.** $(p - 1)! \\equiv -1 \\pmod p$ for prime $p$ is a beautiful characterization but impractical as a primality test (the factorial grows too fast).

• **Misremembering Goldbach.** Goldbach's conjecture is about **even** integers, not all integers. The corresponding statement for odd integers — every odd $\\geq 7$ is a sum of three primes — was settled (Helfgott 2013, building on Vinogradov).

• **Mersenne-Fermat prime confusion.** Mersenne: $2^p - 1$. Fermat: $2^{2^n} + 1$. Different forms, different open problems.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Composite Numbers** — the integers $> 1$ that are not prime: 4, 6, 8, 9, 10, 12, ... The complement of the prime sequence.

**Twin Primes** — pairs $(p, p+2)$ both prime: (3,5), (5,7), (11,13), (17,19), ... Conjectured infinite.

**Mersenne Primes** — primes of the form $2^p - 1$: 3, 7, 31, 127, 8191, ... Only 51 known. The largest known primes are Mersenne primes.

**Fermat Primes** — primes of the form $2^{2^n} + 1$: 3, 5, 17, 257, 65537. Only five known.

**Sophie Germain Primes** — primes $p$ with $2p + 1$ also prime: 2, 3, 5, 11, 23, ...

**Safe Primes** — primes of the form $2p + 1$ where $p$ is prime (the partner of Sophie Germain primes).

**Pi Function $\\pi(x)$** — counts primes up to $x$. Asymptotically $\\sim x / \\ln x$ (PNT).

**Riemann Zeta Function** — $\\zeta(s) = \\sum 1/n^s$ for $\\text{Re}(s) > 1$, extended analytically. The Riemann hypothesis about its zeros is the central open problem.

**Goldbach Conjecture** — every even integer $> 2$ is a sum of two primes. Verified to $4 \\cdot 10^{18}$; unproven.

**Fundamental Theorem of Arithmetic** — every integer $> 1$ factors uniquely into primes.

**Euclidean Algorithm** — the algorithm for computing GCDs; depends on (and proves) the prime property.

**Modular Arithmetic** — arithmetic modulo $n$. Behaves well when $n$ is prime; factor primes determine structure for general $n$.

**Wilson's Theorem** — $(p-1)! \\equiv -1 \\pmod p$ if and only if $p$ is prime.

**Fermat's Little Theorem** — $a^p \\equiv a \\pmod p$ for any integer $a$ and prime $p$. Used in Fermat primality testing.

**Miller-Rabin Test** — the standard probabilistic primality test, based on Fermat's little theorem.

**AKS Primality Test** — the first deterministic polynomial-time primality test (2002).

**RSA Cryptography** — public-key cryptosystem based on the difficulty of factoring products of large primes.

**Sieve of Eratosthenes** — the classical algorithm for listing primes up to $N$. Time complexity $O(N \\log \\log N)$ — very fast for moderate $N$.

**Prime Gaps** — the differences $p_{n+1} - p_n$. The largest known prime gaps are surprisingly large; the average is $\\sim \\ln p_n$.

**Green-Tao Theorem** — the primes contain arbitrarily long arithmetic progressions.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'arithmetic-sequence': {
    kind: 'parametric',
    key: 'arithmetic',
    title: 'Arithmetic Sequence',
    h1: 'Arithmetic Sequence Calculator',
    seoTitle: 'Arithmetic Sequence Calculator \u2014 Solve a\u2081, d, n, a\u2099, S\u2099 | Learn Math Class',
    description:
      'Solver and explorer for arithmetic sequences $a_n = a_1 + (n-1)d$. ' +
      'Set $a_1$ and $d$ to browse, list ranges, test membership, or look up terms. ' +
      'The solver mode takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth with a full step-by-step walkthrough.',
    keywords: 'arithmetic sequence, arithmetic progression, arithmetic sequence formula, a_n = a_1 + (n-1)d, sum of arithmetic sequence, S_n',
    category: 'Sequences',
    subCategory: 'Parametric sequences',
    icon: '→',
    url: '/algebra/calculators/sequences/arithmetic-sequence',
 faqQuestions: {
  obj1: {
    question: "What is an arithmetic sequence?",
    answer: "An arithmetic sequence is a sequence of numbers where each term differs from the previous by a constant called the common difference. Starting from a first term a sub 1 and adding the common difference d each step, the n-th term is given by a sub n equals a sub 1 plus the quantity n minus 1, times d. Examples include 2, 5, 8, 11, 14 (with d equals 3) and 10, 7, 4, 1, minus 2 (with d equals negative 3)."
  },
  obj2: {
    question: "What is the formula for an arithmetic sequence?",
    answer: "The n-th term formula is a sub n equals a sub 1 plus the quantity n minus 1, times d, where a sub 1 is the first term and d is the common difference. The sum of the first n terms is given by S sub n equals n divided by 2, times the quantity 2 a sub 1 plus the quantity n minus 1, times d, or equivalently S sub n equals n times the quantity a sub 1 plus a sub n, divided by 2."
  },
  obj3: {
    question: "How do you find the common difference?",
    answer: "Subtract any term from the next one. If a sub k and a sub k plus 1 are consecutive terms, then d equals a sub k plus 1 minus a sub k. If you know two non-consecutive terms a sub m and a sub n, then d equals the quantity a sub n minus a sub m, divided by the quantity n minus m."
  },
  obj4: {
    question: "How do you find the sum of an arithmetic sequence?",
    answer: "The sum of the first n terms equals n divided by 2 times the sum of the first and last terms: S sub n equals n divided by 2, times the quantity a sub 1 plus a sub n. Equivalently, in terms of just a sub 1 and d, S sub n equals n divided by 2, times the quantity 2 a sub 1 plus the quantity n minus 1, times d. The formula was famously rediscovered by Gauss as a young student."
  },
  obj5: {
    question: "How is an arithmetic sequence different from a geometric sequence?",
    answer: "An arithmetic sequence adds a constant common difference d at each step; a geometric sequence multiplies by a constant common ratio r at each step. Arithmetic grows linearly: a sub n equals a sub 1 plus the quantity n minus 1, times d. Geometric grows exponentially: a sub n equals a sub 1 times r to the power of n minus 1. Both are foundational sequence types in algebra."
}
},
sectionsContent: {
  obj1: {
    title: `What is an Arithmetic Sequence?`,
    content: `An arithmetic sequence (also called an arithmetic progression, AP) is a sequence where each term is obtained by adding a constant to the previous term. The constant is called the **common difference**, denoted $d$.

$$a_1, \\;\\; a_1 + d, \\;\\; a_1 + 2d, \\;\\; a_1 + 3d, \\;\\; \\ldots$$

**Examples.**

• $a_1 = 2$, $d = 3$: gives $2, 5, 8, 11, 14, 17, 20, 23, \\ldots$
• $a_1 = 10$, $d = -3$: gives $10, 7, 4, 1, -2, -5, -8, \\ldots$
• $a_1 = 0$, $d = 1$: gives $0, 1, 2, 3, 4, \\ldots$ — the natural numbers.
• $a_1 = 1$, $d = 2$: gives $1, 3, 5, 7, 9, \\ldots$ — the odd numbers.
• $a_1 = 100$, $d = 0$: gives $100, 100, 100, \\ldots$ — the constant sequence.

**Two key formulas.**

• The $n$-th term: $a_n = a_1 + (n - 1) d$.
• The sum of the first $n$ terms: $S_n = \\dfrac{n}{2}(a_1 + a_n) = \\dfrac{n}{2}(2 a_1 + (n - 1) d)$.

**Parametric nature.** Unlike triangular or square numbers (where the sequence is fixed), an arithmetic sequence depends on two parameters: $a_1$ and $d$. Different choices give different sequences. This explorer lets you set both parameters and explore the resulting sequence.

For deeper coverage see **arithmetic sequence**, **arithmetic progression**, and **series**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The n-th Term Formula`,
    content: `**Derivation.** Starting from $a_1$, the next term is $a_1 + d$, then $a_1 + 2d$, then $a_1 + 3d$. After $n - 1$ additions, the $n$-th term is

$$a_n = a_1 + (n - 1) d$$

**Inverting the formula.** Given $a_n$, $a_1$, and $d$, solve for $n$:

$$n = \\frac{a_n - a_1}{d} + 1$$

This works only when $d \\neq 0$; if $d = 0$, every term equals $a_1$ and $n$ is undetermined.

**Examples.**

• Sequence $5, 8, 11, 14, \\ldots$: $a_1 = 5$, $d = 3$. The 20th term is $a_{20} = 5 + 19 \\cdot 3 = 62$.
• Sequence $100, 97, 94, \\ldots$: $a_1 = 100$, $d = -3$. The 10th term is $a_{10} = 100 + 9 \\cdot (-3) = 73$.
• Membership test: is 47 in the sequence $2, 5, 8, 11, \\ldots$? Solve $47 = 2 + (n-1) \\cdot 3 \\implies n = 16$. Since $n$ is a positive integer, yes — $47 = a_{16}$.
• Non-membership: is 50 in the sequence $2, 5, 8, 11, \\ldots$? Solve $50 = 2 + (n-1) \\cdot 3 \\implies n = 17$. Wait, $17$ is an integer — so $50$ IS in the sequence. Let me try $51$: $51 = 2 + (n-1) \\cdot 3 \\implies n = 17.33$, not an integer. So $51$ is not in the sequence.

**Two-parameter recovery.** Given any two terms $a_m$ and $a_n$ with $m \\neq n$, both $a_1$ and $d$ can be recovered: $d = (a_n - a_m)/(n - m)$ and $a_1 = a_m - (m - 1) d$.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Sum Formula and Gauss's Trick`,
    content: `**The sum formula.** The sum of the first $n$ terms of an arithmetic sequence is

$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2 a_1 + (n - 1) d)$$

**Gauss's trick.** Write the sum forward and backward:

$$\\begin{aligned} S_n &= a_1 + a_2 + a_3 + \\cdots + a_n \\\\ S_n &= a_n + a_{n-1} + a_{n-2} + \\cdots + a_1 \\end{aligned}$$

Adding column by column: each pair $(a_k + a_{n - k + 1})$ has the same value, because in an arithmetic sequence the sum of equally-spaced-from-the-ends terms is constant. Specifically, $a_k + a_{n - k + 1} = a_1 + a_n$ for every $k$. Summing $n$ such pairs:

$$2 S_n = n (a_1 + a_n) \\implies S_n = \\frac{n (a_1 + a_n)}{2}$$

**The Gauss schoolboy story.** Legend says young Carl Friedrich Gauss was asked to sum $1 + 2 + \\cdots + 100$. He pictured the trick instantly: pair up $1 + 100, 2 + 99, \\ldots, 50 + 51$, getting fifty pairs of 101, total $5050$. Whether the story is literal or apocryphal, the technique works for any arithmetic sequence.

**Average-of-endpoints interpretation.** $S_n = n \\cdot \\overline{a}$ where $\\overline{a} = (a_1 + a_n)/2$ is the average of the first and last terms — which is also the arithmetic mean of the entire sequence (a special property of arithmetic sequences).

**Solving for $n$.** Given $S_n$, $a_1$, and $d$, the equation $S_n = (n/2)(2 a_1 + (n - 1) d)$ is quadratic in $n$. Solving:

$$d n^2 + (2 a_1 - d) n - 2 S_n = 0$$

The quadratic formula gives $n$. There can be two positive solutions; the smaller is usually the intended one.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Using the Solver — Five Quantities, Four Relations`,
    content: `The arithmetic-sequence explorer includes a **solver mode** that exploits the relationships between the five quantities $a_1, d, n, a_n, S_n$.

**Two solver sub-modes.**

• **Find term ($a_n$)** — uses the relation $a_n = a_1 + (n - 1) d$. Fill any three of $\\{a_1, d, n, a_n\\}$ and the solver computes the fourth.
• **Sum $S_n$** — uses the relation $S_n = (n/2)(2 a_1 + (n - 1) d)$. Fill any three of $\\{a_1, d, n, S_n\\}$ and the solver computes the fourth.

**Solving for $a_n$.** Direct substitution: $a_n = a_1 + (n - 1) d$.

**Solving for $a_1$.** Rearrange: $a_1 = a_n - (n - 1) d$ (term sub-mode) or $a_1 = S_n/n - (n - 1) d/2$ (sum sub-mode).

**Solving for $d$.** $d = (a_n - a_1)/(n - 1)$ (term sub-mode) or $d = 2(S_n - n a_1)/(n(n - 1))$ (sum sub-mode). Both undefined when $n = 1$.

**Solving for $n$.** $n = (a_n - a_1)/d + 1$ (term sub-mode, undefined when $d = 0$). For sum sub-mode, solve the quadratic $d n^2 + (2 a_1 - d) n - 2 S_n = 0$; there may be two positive solutions, and the smaller positive integer is usually the answer.

**Edge cases the solver handles.**

• $d = 0$: the sequence is constant; $n$ is undetermined for the term sub-mode (any $n$ gives the same value) and reduces to $S_n / a_1$ for the sum sub-mode.
• $n = 1$: $d$ cannot be recovered from a single term.
• Negative or fractional $n$ in the quadratic: rejected (no real positive solution).

**Practical use.** The solver is helpful for word problems: given partial information about an arithmetic sequence, recover the missing quantity. Example: "The 5th term of an arithmetic sequence is 17 and the 10th term is 32. Find the 50th term." Solve for $a_1$ and $d$ from the two equations, then compute $a_{50}$.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Properties and Identities`,
    content: `• **Recurrence**: $a_n = a_{n-1} + d$ with given $a_1$. The defining recurrence of any arithmetic sequence.
• **Term in terms of any other term**: $a_n = a_m + (n - m) d$. The difference of two terms equals the index gap times $d$.
• **Symmetry of sums**: $a_k + a_{n - k + 1} = a_1 + a_n$ for any $k$ from 1 to $n$. The pairing property behind Gauss's trick.
• **Arithmetic mean is the middle term**: the average of $n$ consecutive terms of an arithmetic sequence equals the middle term (if $n$ is odd) or the average of the two middle terms (if $n$ is even). Always equals $(a_1 + a_n)/2$.
• **Sum identity**: $S_n = n \\overline{a}$, the count times the average.
• **Sum of squares**: not a simple closed form unless reformulated. $\\sum a_k^2$ involves $\\sum k^2$ and is degree 3 in $n$.
• **Difference of sums**: $S_{n} - S_{n-1} = a_n$, the partial sums recover the original sequence.
• **Common difference from sum**: $S_n - 2 S_{n-1} + S_{n-2} = d$ (the second difference of partial sums is the common difference).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Common Applications`,
    content: `• **Linear pricing and depreciation.** A car loses a fixed amount per year — its value follows an arithmetic sequence. Pricing schedules, simple interest, and linear cost models all use arithmetic sequences.
• **Counting in lattices.** Lattice points along a line with rational slope form an arithmetic sequence in one of the coordinates.
• **Physics: uniform motion and constant-acceleration sums.** Position under constant velocity follows an arithmetic sequence at equal time intervals. Velocity under constant acceleration does the same.
• **Calendars and timing.** Every 4th year is a leap year (modulo century rules). Recurring schedules form arithmetic progressions.
• **Tournament round counts.** Round-robin and elimination tournaments often have round counts following arithmetic patterns.
• **Stack and pile counts.** Arrangements of objects with constant-difference layer counts (rare in nature, common in puzzles).
• **Simple interest.** Account balance grows by $P r$ each year, an arithmetic sequence with $a_1 = P$ and $d = P r$. (Compound interest is geometric.)
• **Solving word problems.** Many classical algebra problems reduce to arithmetic sequences: "Anna's salary increases by \\$3,000 each year. After 10 years she earns \\$70,000. What was her starting salary?" — find $a_1$ given $a_{11} = 70000$ and $d = 3000$.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Off-by-one in the $n$-th term formula.** $a_n = a_1 + (n - 1) d$, **not** $a_1 + n d$. The 1st term is $a_1$ (zero $d$'s added), the 2nd term is $a_1 + d$ (one $d$ added). Many wrong answers come from forgetting the $-1$.

• **Wrong sum formula.** $S_n = n(a_1 + a_n)/2$, or equivalently $S_n = n(2 a_1 + (n - 1) d)/2$. Common errors: using $n a_1$ (missing the $a_n$ contribution), or $(a_1 + a_n)/2$ (missing the multiplication by $n$).

• **Negative common difference confusion.** When $d < 0$, the sequence decreases. All formulas still work; just be careful with signs. The sum is still $n(a_1 + a_n)/2$, but $a_n < a_1$ now.

• **Confusing arithmetic and geometric.** Arithmetic adds $d$; geometric multiplies by $r$. "Doubling each step" is geometric ($r = 2$), not arithmetic.

• **Index conventions.** Some sources start at $a_0$ instead of $a_1$, giving $a_n = a_0 + n d$. This explorer uses $a_1$ as the first term.

• **Trying to use the formula for non-integer $n$.** $a_n = a_1 + (n - 1) d$ is mathematically defined for any real $n$, but only integer $n$ corresponds to actual sequence positions.

• **Forgetting the second positive root in sum-for-$n$ quadratic.** The quadratic $d n^2 + (2 a_1 - d) n - 2 S_n = 0$ can have two positive solutions. The smaller (usually integer) one is the intended answer; the other might be an extraneous positive root or a valid second possibility for specific $S_n$ values.

• **Treating $d = 0$ as a special exception incorrectly.** When $d = 0$, the sequence is constant, $a_n = a_1$ for all $n$, and $S_n = n a_1$. Many formulas still work; just verify before applying.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Geometric Sequence** — multiplies by a constant ratio: $a_n = a_1 r^{n-1}$. Arithmetic's exponential counterpart.

**Harmonic Sequence** — reciprocals of an arithmetic sequence: $1, 1/2, 1/3, 1/4, \\ldots$. Not arithmetic itself but built from one.

**Arithmetic Series** — the sum of an arithmetic sequence. $S_n = n(a_1 + a_n)/2$.

**Triangular Numbers** — the sums of the arithmetic sequence $1, 2, 3, \\ldots$. $T_n = n(n+1)/2$ is the special case of the arithmetic-series formula with $a_1 = 1$, $d = 1$.

**Square Numbers** — the sums of the arithmetic sequence $1, 3, 5, 7, \\ldots$. $S_n = n^2 = $ sum of first $n$ odd numbers.

**Pentagonal Numbers** — sums of the arithmetic sequence $1, 4, 7, 10, \\ldots$ ($d = 3$).

**Polygonal Numbers** — in general, sums of arithmetic sequences with $d = r - 2$ for the $r$-gonal family.

**Linear Function** — $f(n) = a_1 + (n - 1) d$ is a linear function in $n$. Arithmetic sequences are discrete linear functions.

**Arithmetic Mean** — the average. For an arithmetic sequence, the mean of any consecutive run equals the middle term.

**Common Difference** — the parameter $d$. Defines the sequence's slope.

**Arithmetic Progression** — another name for arithmetic sequence. Used interchangeably.

**Linear Recurrence** — the general class. Arithmetic sequences satisfy the first-order linear recurrence $a_n = a_{n-1} + d$.

**Gauss Summation** — the classical identity $1 + 2 + \\cdots + n = n(n+1)/2$, a special case of the arithmetic-series formula.

**Simple Interest** — financial application; account balance grows arithmetically with annual interest.`,
    before: ``, after: ``, link: ''
  }
},
  },

  'geometric-sequence': {
    kind: 'parametric',
    key: 'geometric',
    title: 'Geometric Sequence',
    h1: 'Geometric Sequence Calculator',
    seoTitle: 'Geometric Sequence Calculator \u2014 Finite and Infinite Sums | Learn Math Class',
    description:
      'Solver and explorer for geometric sequences $a_n = a_1 \\cdot r^{n-1}$. ' +
      'Handles finite sums $S_n = a_1 (r^n - 1)/(r - 1)$ and the infinite sum $S_\\infty = a_1 / (1 - r)$ for $|r| < 1$, ' +
      'flagging divergence otherwise. Browse, range, membership-test, look up, or solve.',
    keywords: 'geometric sequence, geometric progression, geometric series, sum of geometric series, infinite geometric sum, common ratio, S_infinity',
    category: 'Sequences',
    subCategory: 'Parametric sequences',
    icon: '×',
    url: '/algebra/calculators/sequences/geometric-sequence',
  faqQuestions: {
  obj1: {
    question: "What is a geometric sequence?",
    answer: "A geometric sequence is a sequence of numbers where each term equals the previous term multiplied by a constant called the common ratio. Starting from a first term a sub 1 and multiplying by the common ratio r each step, the n-th term is given by a sub n equals a sub 1 times r raised to the power n minus 1. Examples include 2, 6, 18, 54, 162 (with r equals 3) and 100, 50, 25, 12.5, 6.25 (with r equals one half)."
  },
  obj2: {
    question: "What is the formula for a geometric sequence?",
    answer: "The n-th term formula is a sub n equals a sub 1 times r raised to the power n minus 1, where a sub 1 is the first term and r is the common ratio. The sum of the first n terms is given by S sub n equals a sub 1 times the quantity r to the n minus 1, divided by r minus 1, valid for r not equal to 1. When r equals 1, the sum reduces to n times a sub 1."
  },
  obj3: {
    question: "What is the infinite sum of a geometric series?",
    answer: "If the absolute value of the common ratio r is less than 1, the infinite geometric series converges to S infinity equals a sub 1 divided by the quantity 1 minus r. For absolute value of r greater than or equal to 1, the series diverges. The convergent case is fundamental in calculus, probability, and many applications."
  },
  obj4: {
    question: "How do you find the common ratio?",
    answer: "Divide any term by the previous one. If a sub k and a sub k plus 1 are consecutive terms with a sub k not zero, then r equals a sub k plus 1 divided by a sub k. If you know two terms a sub m and a sub n with m less than n, then r raised to the power n minus m equals a sub n divided by a sub m, so r equals the quantity a sub n divided by a sub m, raised to the power 1 divided by n minus m."
  },
  obj5: {
    question: "How is a geometric sequence different from an arithmetic sequence?",
    answer: "An arithmetic sequence adds a constant common difference d at each step; a geometric sequence multiplies by a constant common ratio r at each step. Arithmetic grows linearly. Geometric grows or decays exponentially. The two are the fundamental building blocks of sequence theory in algebra."
}
},
sectionsContent: {
  obj1: {
    title: `What is a Geometric Sequence?`,
    content: `A geometric sequence (also called a geometric progression, GP) is a sequence where each term is obtained by multiplying the previous term by a constant. The constant is called the **common ratio**, denoted $r$.

$$a_1, \\;\\; a_1 r, \\;\\; a_1 r^2, \\;\\; a_1 r^3, \\;\\; \\ldots$$

**Examples.**

• $a_1 = 2$, $r = 3$: gives $2, 6, 18, 54, 162, 486, \\ldots$ — exponential growth.
• $a_1 = 100$, $r = 1/2$: gives $100, 50, 25, 12.5, 6.25, 3.125, \\ldots$ — exponential decay.
• $a_1 = 1$, $r = 2$: gives $1, 2, 4, 8, 16, 32, \\ldots$ — powers of 2.
• $a_1 = 1$, $r = -1$: gives $1, -1, 1, -1, \\ldots$ — alternating signs.
• $a_1 = 5$, $r = 0$: gives $5, 0, 0, 0, \\ldots$ — degenerate after the first term.

**Three key formulas.**

• The $n$-th term: $a_n = a_1 r^{n - 1}$.
• Sum of first $n$ terms: $S_n = a_1 \\dfrac{r^n - 1}{r - 1}$ for $r \\neq 1$; $S_n = n a_1$ for $r = 1$.
• Infinite sum: $S_\\infty = \\dfrac{a_1}{1 - r}$ when $|r| < 1$; diverges otherwise.

**Parametric nature.** Like arithmetic sequences, geometric sequences depend on two parameters: $a_1$ and $r$. The explorer lets you set both and explore the resulting sequence and sums.

For deeper coverage see **geometric sequence**, **geometric series**, and **exponential function**.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `The n-th Term Formula`,
    content: `**Derivation.** Starting from $a_1$, multiply by $r$ once to get $a_1 r$, twice to get $a_1 r^2$. After $n - 1$ multiplications, the $n$-th term is

$$a_n = a_1 r^{n - 1}$$

**Inverting the formula.** Given $a_n$, $a_1$, and $r$, solve for $n$ using logarithms:

$$n = \\frac{\\ln(a_n / a_1)}{\\ln r} + 1$$

This works only when $r > 0$, $r \\neq 1$, $a_1 \\neq 0$, and $a_n / a_1 > 0$. Negative $r$ requires complex logarithms; $r = 1$ makes every term equal to $a_1$ and $n$ is undetermined.

**Examples.**

• Sequence $3, 6, 12, 24, \\ldots$: $a_1 = 3$, $r = 2$. The 10th term: $a_{10} = 3 \\cdot 2^9 = 3 \\cdot 512 = 1536$.
• Sequence $1000, 500, 250, \\ldots$: $a_1 = 1000$, $r = 1/2$. The 10th term: $a_{10} = 1000 \\cdot (1/2)^9 = 1000/512 \\approx 1.95$.
• Membership test: is 162 in the sequence $2, 6, 18, 54, \\ldots$ (with $r = 3$)? Solve $162 = 2 \\cdot 3^{n-1} \\implies 81 = 3^{n-1} \\implies n - 1 = 4 \\implies n = 5$. Yes — $162 = a_5$.

**Two-parameter recovery.** Given two terms $a_m$ and $a_n$ with $m < n$: $r^{n - m} = a_n / a_m$, so $r = (a_n / a_m)^{1/(n - m)}$. Then $a_1 = a_m / r^{m - 1}$.

**Sign of $r$.** Negative $r$ produces alternating-sign sequences: $a_1 = 1, r = -2$ gives $1, -2, 4, -8, 16, -32, \\ldots$. The closed form still applies; signs alternate based on parity of $n - 1$.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `The Finite Sum Formula`,
    content: `**Finite geometric sum.** The sum of the first $n$ terms of a geometric sequence is

$$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n - 1} = a_1 \\frac{r^n - 1}{r - 1} \\quad (r \\neq 1)$$

For $r = 1$, every term equals $a_1$, and $S_n = n a_1$.

**Derivation.** Write the sum:

$$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n - 1}$$

Multiply both sides by $r$:

$$r S_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^{n - 1} + a_1 r^n$$

Subtract:

$$S_n - r S_n = a_1 - a_1 r^n \\implies S_n (1 - r) = a_1 (1 - r^n) \\implies S_n = a_1 \\frac{1 - r^n}{1 - r} = a_1 \\frac{r^n - 1}{r - 1}$$

**Examples.**

• $a_1 = 2$, $r = 3$, $n = 5$: $S_5 = 2 \\cdot (3^5 - 1)/(3 - 1) = 2 \\cdot 242/2 = 242$. Verify: $2 + 6 + 18 + 54 + 162 = 242$. ✓
• $a_1 = 1$, $r = 1/2$, $n = 10$: $S_{10} = (1/2^{10} - 1)/(1/2 - 1) = (1/1024 - 1)/(-1/2) = (1023/1024) \\cdot 2 = 2046/1024 \\approx 2.0$.

**Solving for $n$.** Given $S_n$, $a_1$, and $r$, the formula is invertible:

$$r^n = \\frac{S_n (r - 1)}{a_1} + 1 \\implies n = \\frac{\\ln\\left(\\dfrac{S_n (r - 1)}{a_1} + 1\\right)}{\\ln r}$$

This requires $r > 0, r \\neq 1$, and the argument of the logarithm to be positive.

**Solving for $r$.** Given $S_n$, $a_1$, and $n$, the equation $S_n = a_1(r^n - 1)/(r - 1)$ is transcendental in $r$ — no closed-form solution in general. The solver flags this as unsupported.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `The Infinite Sum and Convergence`,
    content: `**Infinite geometric series.** What happens as $n \\to \\infty$?

$$S_\\infty = a_1 + a_1 r + a_1 r^2 + \\cdots = \\lim_{n \\to \\infty} a_1 \\frac{r^n - 1}{r - 1}$$

**Convergence condition.** The series converges if and only if $|r| < 1$. When it converges:

$$S_\\infty = \\frac{a_1}{1 - r}$$

**Why $|r| < 1$.** As $n \\to \\infty$, $r^n \\to 0$ when $|r| < 1$, giving the formula. When $|r| \\geq 1$, $r^n$ does not converge (it grows, oscillates, or stays bounded but doesn't approach zero), and the series diverges.

**Classic examples.**

• **Zeno's paradox.** $1 + 1/2 + 1/4 + 1/8 + \\cdots = \\dfrac{1}{1 - 1/2} = 2$. The pieces sum to a finite total despite there being infinitely many.
• **Repeating decimals.** $0.\\overline{3} = 0.333\\ldots = \\dfrac{0.3}{1 - 0.1} = \\dfrac{1}{3}$. Every repeating decimal is a geometric series.
• **Convergent but slowly.** $a_1 = 1, r = 0.99$: $S_\\infty = 100$. The sequence approaches zero so slowly that it takes thousands of terms to get close.

**Diverging cases.**

• $r = 1$: $S_n = n a_1 \\to \\infty$ (unless $a_1 = 0$).
• $r = -1$: $S_n$ oscillates between $0$ and $a_1$, never converging.
• $|r| > 1$: $|S_n|$ grows without bound.

**The geometric series test.** The convergence behavior of $\\sum r^n$ is used as a benchmark for testing other series: comparison test, ratio test, root test all reference geometric series.

**Power series.** The geometric series is the simplest power series. $\\sum r^n = 1/(1 - r)$ for $|r| < 1$ extends to functions: $1/(1 - x) = 1 + x + x^2 + x^3 + \\cdots$ for $|x| < 1$. The cornerstone of formal power series and generating functions.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Using the Solver — Three Modes`,
    content: `The geometric-sequence explorer includes a **solver mode** with three sub-modes:

• **Find term ($a_n$)** — uses $a_n = a_1 r^{n - 1}$. Fill any three of $\\{a_1, r, n, a_n\\}$ and the solver computes the fourth.
• **Sum $S_n$** — uses $S_n = a_1 (r^n - 1)/(r - 1)$ for $r \\neq 1$. Fill any three of $\\{a_1, r, n, S_n\\}$ and the solver computes the fourth (except solving for $r$, which is transcendental and not supported).
• **Infinite sum $S_\\infty$** — uses $S_\\infty = a_1/(1 - r)$ for $|r| < 1$. Fill any two of $\\{a_1, r, S_\\infty\\}$ and the solver computes the third, flagging cases where $|r| \\geq 1$ as divergent.

**Solving for $a_n$.** Direct: $a_n = a_1 r^{n - 1}$.

**Solving for $a_1$.** Rearrange: $a_1 = a_n/r^{n - 1}$ (term sub-mode), $a_1 = S_n(r - 1)/(r^n - 1)$ (sum sub-mode), or $a_1 = S_\\infty(1 - r)$ (infinite sum).

**Solving for $r$.** $(n - 1)$-th root: $r = (a_n/a_1)^{1/(n - 1)}$ (term sub-mode). For infinite sum: $r = 1 - a_1/S_\\infty$ (with a convergence check). For finite sum: transcendental — not supported.

**Solving for $n$.** Logarithm: $n = \\ln(a_n/a_1)/\\ln r + 1$ (term sub-mode); $n = \\ln(S_n(r - 1)/a_1 + 1)/\\ln r$ (sum sub-mode). Both require $r > 0$, $r \\neq 1$.

**Edge cases the solver handles.**

• $r = 1$: term-sub-mode has every term equal; sum sub-mode reduces to $S_n = n a_1$.
• $r \\leq 0$ in solve-for-$n$: real logarithm doesn't exist, the solver flags this.
• $|r| \\geq 1$ in infinite sum: divergence flagged.
• $a_1 = 0$: most equations become degenerate; flagged.

**Practical use.** Solve word problems: "An investment of \\$1000 grows by 5% per year. After how many years does it reach \\$2000?" → solve for $n$ given $a_1 = 1000$, $r = 1.05$, $a_n = 2000$.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `Common Applications`,
    content: `Geometric sequences model exponential growth and decay across science, finance, and computing.

• **Compound interest.** \\$1000 at 5% annual interest, compounded yearly: balance follows the geometric sequence $1000, 1050, 1102.50, \\ldots$ with $r = 1.05$.
• **Population growth.** Bacterial population doubles every hour: $r = 2$. After $n$ hours, population is $a_1 \\cdot 2^{n - 1}$ relative to the starting count.
• **Radioactive decay.** Mass remaining after each half-life follows $r = 1/2$. After $n$ half-lives, $a_1 / 2^n$ mass remains.
• **Mortgage payments.** Outstanding balance after each payment follows a geometric-related sequence (with adjustments for the principal payment). The total payment formula is the geometric sum.
• **Algorithm analysis.** Binary search splits the search space by half each step — a geometric sequence with $r = 1/2$. Total steps: $\\log_2 n$.
• **Fractals and self-similarity.** The Koch snowflake's perimeter at each iteration multiplies by $4/3$: a geometric sequence with $r = 4/3$ that grows without bound.
• **Repeating decimals as fractions.** $0.\\overline{abc} = abc/999$, derived from the geometric-series formula.
• **Pyramid schemes.** Each level multiplies participants by some ratio $r$. Total participants grow exponentially until the scheme exceeds the population.
• **Music tuning.** Equal-temperament tuning divides the octave into 12 equal ratios, each $\\sqrt[12]{2} \\approx 1.0595$. Frequencies follow a geometric sequence.
• **Light absorption.** Light passing through a medium of uniform absorption loses a fixed fraction per unit length — Beer's law, an exponential decay (geometric in the discrete approximation).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Common Mistakes`,
    content: `• **Off-by-one in the $n$-th term formula.** $a_n = a_1 r^{n - 1}$, **not** $a_1 r^n$. The 1st term is $a_1$ (zero multiplications), the 2nd is $a_1 r$ (one multiplication).

• **Wrong sum formula.** $S_n = a_1 (r^n - 1)/(r - 1)$ or equivalently $a_1 (1 - r^n)/(1 - r)$. Both are correct; common errors include using $n$ as an exponent on $r - 1$ or forgetting to divide by $r - 1$.

• **Treating $r = 1$ with the general formula.** When $r = 1$, the formula has $0/0$ — undefined. The correct value is $S_n = n a_1$. Always check $r = 1$ as a special case.

• **Forgetting the convergence condition for $S_\\infty$.** The infinite sum exists only when $|r| < 1$. Applying $a_1/(1 - r)$ when $|r| \\geq 1$ gives a meaningless number. The classic error: writing $1 + 2 + 4 + 8 + \\cdots = 1/(1 - 2) = -1$. The series diverges; the formula doesn't apply.

• **Confusing arithmetic and geometric.** Arithmetic adds; geometric multiplies. "Increases by 10% per year" is geometric ($r = 1.1$); "increases by \\$10 per year" is arithmetic ($d = 10$).

• **Negative $r$ and parity.** With $r < 0$, terms alternate in sign. $a_1 = 1, r = -2$ gives $1, -2, 4, -8, 16$. The sum formula still works but the result oscillates as $n$ grows.

• **Logarithm restrictions in solve-for-$n$.** $n = \\ln(a_n/a_1)/\\ln r + 1$ requires positive arguments. Negative or zero $r$, or $a_n$ and $a_1$ with opposite signs, makes the formula fail. The solver flags these.

• **Floating-point errors with non-integer ratios.** $r = 1/3$ is exact in mathematics but approximate in floating-point. Computing $a_{100}$ with $r = 1/3$ accumulates rounding error. Use symbolic computation or rational arithmetic for exact results.

• **Conflating geometric series with arithmetic series for ratio.** "Common ratio" is for geometric; "common difference" is for arithmetic. The terms are not interchangeable.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Sequences and Concepts`,
    content: `**Arithmetic Sequence** — adds a constant: $a_n = a_1 + (n - 1) d$. Geometric's linear counterpart.

**Geometric Series** — the sum of a geometric sequence. Both finite and infinite versions are central.

**Exponential Function** — the continuous analog. $f(x) = a_1 r^x$. Geometric sequences are exponentials sampled at integer points.

**Power Series** — the generalization to varying coefficients: $\\sum c_n x^n$. The geometric series $\\sum r^n = 1/(1 - r)$ is the simplest non-trivial power series.

**Convergence** — the criterion for infinite-series sums. $|r| < 1$ for geometric is the prototype.

**Ratio Test** — convergence test for series, comparing consecutive terms' ratio to a geometric series benchmark.

**Compound Interest** — the canonical finance application. Future value follows a geometric sequence with $r = 1 + i$ where $i$ is the per-period rate.

**Exponential Growth and Decay** — the natural-science applications. Bacterial growth, radioactive decay, drug elimination — all modeled as geometric sequences (discrete) or exponentials (continuous).

**Logarithm** — the inverse of exponential. Solving for $n$ in a geometric sequence uses logarithms.

**Common Ratio** — the parameter $r$. Determines whether the sequence grows, decays, oscillates, or stays constant.

**Geometric Mean** — the average. For a geometric sequence, the geometric mean of any two terms equals the term between them: $a_{n} = \\sqrt{a_{n-1} \\cdot a_{n+1}}$ for any $n \\geq 2$.

**Repeating Decimal** — every repeating decimal is a geometric series, converting to a rational number via the infinite-sum formula.

**Geometric Progression** — alternate name for geometric sequence. Used interchangeably.

**Linear Recurrence (homogeneous)** — the general class. Geometric sequences are first-order linear recurrences $a_n = r \\cdot a_{n-1}$.

**Half-Life** — the time for a quantity to halve. A geometric sequence with $r = 1/2$ measured at half-life intervals.

**Doubling Time** — the time for a quantity to double. A geometric sequence with $r = 2$ at doubling-time intervals.

**Beer's Law** — light absorption following exponential (geometric in discrete steps) decay through a medium.

**Self-Similarity and Fractals** — geometric scaling underlies fractal structures; iteration counts follow geometric sequences.`,
    before: ``, after: ``, link: ''
  }
},
  },

}


// =====================================================
// Static generation
// =====================================================
export async function getStaticPaths() {
  return {
    paths: [
      { params: { view: 'triangular-numbers' } },
      { params: { view: 'square-numbers' } },
      { params: { view: 'pentagonal-numbers' } },
      { params: { view: 'hexagonal-numbers' } },
      { params: { view: 'heptagonal-numbers' } },
      { params: { view: 'octagonal-numbers' } },
      { params: { view: 'tetrahedral-numbers' } },
      { params: { view: 'fibonacci-sequence' } },
      { params: { view: 'prime-numbers' } },
      { params: { view: 'arithmetic-sequence' } },
      { params: { view: 'geometric-sequence' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const cfg = viewConfig[params.view]
  const seoData = {
    title: cfg.seoTitle,
    description: cfg.description.replace(/\$([^$]+)\$/g, '$1'),
    keywords: cfg.keywords,
    url: cfg.url,
    name: cfg.h1,
  }
  return {
    props: {
      view: params.view,
      cfg,
      seoData,
    },
  }
}


// =====================================================
// Page
// =====================================================
export default function SequenceCalculatorPage({ view, cfg, seoData }) {

  const ExplorerComponent =
    cfg.kind === 'parametric' ? ParametricSequenceExplorer : SequenceExplorer

  const sectionsContent = cfg.sectionsContent || {}
  const genericSections = Object.keys(sectionsContent).length > 0
    ? [
        { id: '1', title: sectionsContent.obj1?.title || '', link: '', content: sectionsContent.obj1?.content || '' },
        { id: '2', title: sectionsContent.obj2?.title || '', link: '', content: sectionsContent.obj2?.content || '' },
        { id: '3', title: sectionsContent.obj3?.title || '', link: '', content: sectionsContent.obj3?.content || '' },
        { id: '4', title: sectionsContent.obj4?.title || '', link: '', content: sectionsContent.obj4?.content || '' },
        { id: '5', title: sectionsContent.obj5?.title || '', link: '', content: sectionsContent.obj5?.content || '' },
        { id: '6', title: sectionsContent.obj6?.title || '', link: '', content: sectionsContent.obj6?.content || '' },
        { id: '7', title: sectionsContent.obj7?.title || '', link: '', content: sectionsContent.obj7?.content || '' },
        { id: '8', title: sectionsContent.obj8?.title || '', link: '', content: sectionsContent.obj8?.content || '' },
      ].filter(section => section.title)
    : []

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home',        'item': 'https://www.learnmathclass.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Algebra',     'item': 'https://www.learnmathclass.com/algebra' },
      { '@type': 'ListItem', 'position': 3, 'name': 'Calculators', 'item': 'https://www.learnmathclass.com/algebra/calculators' },
      { '@type': 'ListItem', 'position': 4, 'name': cfg.h1,        'item': `https://www.learnmathclass.com${seoData.url}` },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': cfg.h1,
    'description': seoData.description,
    'url': `https://www.learnmathclass.com${seoData.url}`,
    'inLanguage': 'en-US',
    'dateModified': new Date().toISOString(),
    'author':    { '@type': 'Organization', 'name': 'Learn Math Class' },
    'publisher': { '@type': 'Organization', 'name': 'Learn Math Class' },
  }

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <br/>
      <br/>
      <br/>
      <br/>

      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb nonLinkSegments={['sequences']}/>
      <br/>

      <h1 className='title' style={{ marginTop: '0px', marginBottom: '40px' }}>
        {cfg.h1}
      </h1>

      <SiblingsNav
        title="Sequences"
        maxWidth='1800px'
        topOffset='100px'
        bg='#ffffff'
        color='#304090'
        activeColor='#1e40af'
        activeBg='#dbeafe'
        width='220px'
        gap='20px'
        childMaxWidth='100%'
      >
        <div className='explorer-stretch'>
          <style dangerouslySetInnerHTML={{ __html: `
            .explorer-stretch {
              width: 100%;
            }
            .explorer-stretch > * {
              max-width: none !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          ` }} />
          <ExplorerComponent name={cfg.key} />
        </div>
      </SiblingsNav>

      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}

      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}