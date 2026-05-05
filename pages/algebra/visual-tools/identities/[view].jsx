
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import SiblingsNav from '@/app/components/SiblingsNav'

import SquareOfSum from '@/app/components/algebra/identities/SquareOfSum'
import SquareOfDifference from '@/app/components/algebra/identities/SquareOfDifference'
import SquareOfTrinomial from '@/app/components/algebra/identities/SquareOfTrinomial'
import DifferenceOfSquares from '@/app/components/algebra/identities/DifferenceOfSquares'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'square-of-sum' } },
    { params: { view: 'square-of-difference' } },
    { params: { view: 'square-of-trinomial' } },
    { params: { view: 'difference-of-squares' } },
  ]

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const viewConfig = {

    'square-of-sum': {
      component: 'SquareOfSum',
      title: "Square of a Sum (a+b)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a+b)² = a² + 2ab + b² through animated geometric dissection.",
      name: "Square of a Sum Visualization",
      url: "/algebra/visual-tools/identities/square-of-sum",
      h1: "Square of a Sum  (a+b)²",
      introTitle: `Visualizing (a+b)² as Four Pieces of a Square`,
      introContent: `This visualizer turns the identity $(a+b)^2 = a^2 + 2ab + b^2$ into a geometric proof you can step through. A square of side $a+b$ is built, its sides split into $a$ and $b$, internal lines extend the splits across the square, and the resulting four rectangles colour in to show exactly where each term comes from. The two $ab$ rectangles are visibly identical pieces — the source of the $2ab$ middle term that students often memorize without ever seeing.`,
      keywords: [
        "(a+b)^2",
        "square of a sum",
        "square of sum proof",
        "(a+b)^2 = a^2 + 2ab + b^2",
        "binomial square",
        "geometric proof of (a+b)^2",
        "visual algebra",
        "algebraic identity proof",
        "square of binomial",
        "expand (a+b)^2",
        "perfect square trinomial",
        "(a+b) squared",
        "FOIL visualization",
        "interactive algebra",
        "binomial expansion"
      ],
      faqQuestions: {
        obj1: {
          question: "What is the square of a sum identity?",
          answer: "The square of a sum identity states that (a+b)^2 = a^2 + 2ab + b^2. Squaring a sum produces three terms: the squares of each part, plus twice the product of the two parts. The identity holds for any real numbers a and b."
        },
        obj2: {
          question: "Why does (a+b)^2 have a 2ab term and not just ab?",
          answer: "When a square of side a+b is divided by extending the side splits across, two equal ab rectangles appear in the layout. They sit at opposite corners of the cross. Their combined area is 2ab, not ab. The geometric proof makes this duplication visible as two identical pieces."
        },
        obj3: {
          question: "How is (a+b)^2 different from a^2 + b^2?",
          answer: "Squaring a sum is not the same as summing squares. (a+b)^2 includes an extra 2ab term that a^2 + b^2 lacks. For example, (3+4)^2 = 49 while 3^2 + 4^2 = 25; the missing 2ab = 24 accounts for the difference."
        },
        obj4: {
          question: "How do I use the square of sum identity to expand expressions?",
          answer: "Identify the two terms being squared, then apply the pattern: first term squared, plus twice the product of the two terms, plus second term squared. For example, (2x+3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9."
        },
        obj5: {
          question: "What controls does the visualizer offer?",
          answer: "Play runs the full proof animation. Step Forward and Step Back move through the four steps one at a time. Reset returns to the beginning. The Speed selector ranges from 0.5x to 2x for slowing down or speeding up the animation."
        }
      },
      sectionsContent: {
        obj1: {
          title: `The (a+b)² Identity at a Glance`,
          content: `The square of a sum identity is one of the foundational results of **algebra**:

$$(a+b)^2 = a^2 + 2ab + b^2$$

Squaring a sum produces a square term for each part plus a cross term that captures their interaction. The cross term is $2ab$, not just $ab$ — and that doubling is exactly what the geometric proof makes visible.

The identity appears constantly: expanding binomials, completing the square, simplifying calculus expressions, and shortcuts for mental arithmetic. Memorising the formula is one path; seeing why it must hold turns it into something you can reconstruct anytime.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj2: {
          title: `Reading the Starting Square`,
          content: `Step 1 of the animation shows the object whose area we want to understand: a square with side length $a+b$. Inside the square the label $(a+b)^2$ floats in the centre, and dimension marks along the top and left edges read "$a+b$". Both edges are the same length because the figure is a square — that is the only fact we will use throughout the proof.

The square's area is $(a+b) \\times (a+b) = (a+b)^2$. That is one expression for the area. The proof's whole task is to find a second expression for the same area, broken into pieces, and conclude that the two expressions must be equal.

Nothing has been cut, marked, or rearranged yet. The starting state is the cleanest possible illustration of the identity's left-hand side.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj3: {
          title: `Splitting Each Side into a and b`,
          content: `Step 2 marks the split point on each side. Two amber tick marks appear on the top edge and the left edge, dividing each side into a segment of length $a$ followed by a segment of length $b$. The dimension labels reorganise: the original "$a+b$" stays, but new labels "$a$" and "$b$" appear closer to the edge to show the split clearly.

This step is purely organisational. No area has been added, removed, or moved — the square is identical to step 1. What has changed is how we describe its boundary. Each edge is now seen as two segments of known length rather than one segment of length $a+b$.

The split is the only setup the proof needs. From here, dropping perpendiculars from the tick marks will partition the interior into pieces with sides we can compute.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj4: {
          title: `Drawing the Grid Cuts`,
          content: `Step 3 extends the splits across the square. A vertical line drops from the top tick mark, and a horizontal line extends from the left tick mark. The two cuts meet inside the square and divide it into exactly four rectangles arranged as a 2×2 grid.

The four pieces are not yet coloured — they exist only as outlines. This emphasises that the dissection itself, not the final colours, is what proves the identity. Total area is unchanged: the four rectangles together still make up the original $(a+b)^2$ square.

Now each piece has known side lengths. The top-left piece has dimensions $a \\times a$. The bottom-right piece has dimensions $b \\times b$. The top-right and bottom-left pieces each have dimensions $a \\times b$ — and they are the same dimensions, just in different orientations.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj5: {
          title: `Colouring the Four Pieces in Sequence`,
          content: `Step 4 fills the four rectangles with colour and labels in a deliberate order, so each term of the right-hand side enters the picture one at a time:

• The top-left rectangle fills blue and is labelled $a^2$ — its sides are both $a$, so its area is $a \\times a = a^2$.

• The bottom-right rectangle fills pink and is labelled $b^2$ — its sides are both $b$, area $b^2$.

• The top-right and bottom-left rectangles fill amber simultaneously and are both labelled $ab$ — each has sides $a$ and $b$, area $ab$. Two identical pieces, each contributing $ab$, are added at the same time on purpose: this is where the $2ab$ comes from.

Adding the four areas: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$. The same square that has area $(a+b)^2$ also has area $a^2 + 2ab + b^2$. The identity follows by area conservation.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj6: {
          title: `Why the Middle Term is 2ab, Not ab`,
          content: `The most common error in expanding $(a+b)^2$ is writing $a^2 + b^2$ — dropping the $2ab$ middle term entirely. The visualizer prevents this error by making the source of the doubling spatially obvious. Two amber rectangles, identical in shape and size, sit at diagonally opposite corners of the dissected square. Their areas are added together to produce $2ab$.

The same fact emerges from algebraic expansion. Multiplying $(a+b)(a+b)$ via FOIL gives $a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b$. The middle two products $ab$ and $ba$ are equal, so they combine into $2ab$. The geometry corresponds exactly: each FOIL cross product matches one of the two amber rectangles.

Whichever path you take — area dissection or symbol expansion — the doubling is unavoidable. The $2$ is not a memorisation trick; it is the count of identical pieces.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj7: {
          title: `Using the Controls`,
          content: `Five controls drive the animation:

• **Play** runs the full proof end-to-end. Each step animates, then briefly pauses before the next begins. When the final step finishes the playback stops automatically.

• **Pause** halts whatever animation is currently in progress without losing position.

• **Step Forward** and **Step Back** advance or reverse one step at a time, useful for studying a specific transition closely or pointing out details in a classroom setting.

• **Reset** returns to step 1 and replays the intro fade-in.

• **Speed** controls animation speed across all transitions, from 0.5× (slow, good for first viewing) to 2× (fast, good for review). The default 1× is calibrated so the algebra and the geometry move at a comfortable reading pace.

The right panel shows the four written steps. Each step is greyed out until reached and highlighted as the animation enters it.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj8: {
          title: `Related Concepts and Tools`,
          content: `**Algebraic Identities** — Hub for all four identity visualizers including this one.

**Square of a Difference** — Visual proof of $(a-b)^2 = a^2 - 2ab + b^2$. Same identity family with a sign flip.

**Square of a Trinomial** — Extension to three terms: $(a+b+c)^2$ as a 3×3 grid.

**Difference of Squares** — Factors $a^2 - b^2$ into $(a+b)(a-b)$ via slice and rearrange.

**Powers Table** — Reference table of integer powers, useful for computing $(a+b)^2$ at specific values.

**Polynomials** — Theory of polynomial expansion and standard form, in which the square of a sum identity plays a constant role.`,
          before: ``,
          after: ``,
          link: '',
        },
      }
    },

    'square-of-difference': {
      component: 'SquareOfDifference',
      title: "Square of a Difference (a-b)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a-b)² = a² - 2ab + b² through animated geometric dissection.",
      name: "Square of a Difference Visualization",
      url: "/algebra/visual-tools/identities/square-of-difference",
      h1: "Square of a Difference  (a-b)²",
      introTitle: `Visualizing (a-b)² as a Sum-Minus-Overlap`,
      introContent: `This visualizer turns the identity $(a-b)^2 = a^2 - 2ab + b^2$ into a geometric argument you can step through. Starting from a square of side $a$, two $ab$ strips are laid down to cover most of it. The strips overlap on a small $b^2$ corner, which has been counted twice and must be subtracted. What remains uncovered is the $(a-b)^2$ square — and the equation falls out of summing the pieces correctly.`,
      keywords: [
        "(a-b)^2",
        "square of a difference",
        "square of difference proof",
        "(a-b)^2 = a^2 - 2ab + b^2",
        "binomial square",
        "geometric proof of (a-b)^2",
        "visual algebra",
        "algebraic identity proof",
        "square of binomial difference",
        "expand (a-b)^2",
        "perfect square trinomial",
        "(a-b) squared",
        "subtraction binomial square",
        "interactive algebra",
        "binomial expansion"
      ],
      faqQuestions: {
        obj1: {
          question: "What is the square of a difference identity?",
          answer: "The square of a difference identity states that (a-b)^2 = a^2 - 2ab + b^2. The middle term is negative, but the b^2 term remains positive because squaring any real number produces a non-negative result. The identity holds for all real a and b."
        },
        obj2: {
          question: "Why is the middle term negative but b^2 is positive?",
          answer: "The negative middle term comes from the cross products in the FOIL expansion: (a-b)(a-b) yields one a-times-a, two a-times-negative-b, and one negative-b-times-negative-b. The two cross products give -2ab, while the final product of two negatives gives positive b^2."
        },
        obj3: {
          question: "How does the geometric proof handle the negative term?",
          answer: "The proof lays down two ab strips that cover an a-square. The strips overlap on a b-by-b corner, so b^2 has been covered twice. The empty part of the corner is the (a-b)^2 region. Solving the area equation a^2 = 2ab - b^2 + (a-b)^2 gives (a-b)^2 = a^2 - 2ab + b^2."
        },
        obj4: {
          question: "How do I expand expressions like (3x-5)^2?",
          answer: "Apply the pattern: first term squared, minus twice the product, plus second term squared. So (3x-5)^2 = (3x)^2 - 2(3x)(5) + 5^2 = 9x^2 - 30x + 25. Always check the sign: only the middle term is negative; both squared terms stay positive."
        },
        obj5: {
          question: "What is the relationship between (a+b)^2 and (a-b)^2?",
          answer: "Both identities have the same outer terms a^2 and b^2 but differ in the middle: (a+b)^2 has +2ab while (a-b)^2 has -2ab. Adding the two identities gives 2a^2 + 2b^2; subtracting them gives 4ab. These relationships are useful in algebraic manipulations."
        }
      },
      sectionsContent: {
        obj1: {
          title: `The (a-b)² Identity at a Glance`,
          content: `The square of a difference identity reads:

$$(a-b)^2 = a^2 - 2ab + b^2$$

The right-hand side has the same outer terms $a^2$ and $b^2$ as the square-of-a-sum identity, but the middle term is negative. The minus sign is the only difference, and tracking where it comes from is exactly what the visual proof clarifies.

Forgetting the minus sign or mishandling it is a frequent source of error. Seeing the geometry behind it — overlapping strips that cover the same patch twice — turns a sign rule into a counting argument that is hard to misremember.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj2: {
          title: `Reading the Starting Square`,
          content: `Step 1 of the animation shows a square of side $a$, labelled $a^2$ in the centre. Dimension marks on the top and left edges read "$a$". The visual is identical to the starting frame of the difference-of-squares proof, and that is intentional: many algebraic identities begin from the same plain square and then take it apart in different ways.

The square's area is $a \\times a = a^2$. This is the quantity we will decompose. Unlike the square-of-a-sum proof, where the goal was to expand $(a+b)^2$ into pieces, here we begin from $a^2$ and work toward an expression involving $(a-b)^2$.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj3: {
          title: `Marking the b² Corner`,
          content: `Step 2 marks a small pink square of side $b$ in the upper-right corner. The dimension labels on the top edge and left edge update to show the split: the top edge becomes "$a-b$" then "$b$"; the left edge becomes "$b$" then "$a-b$". The original "$a$" labels remain, slid further out to indicate the total side length.

The marked $b^2$ corner is not yet doing any work in the proof — it is a reference. The point of marking it is to label the split in a way that lets the upcoming strips be described precisely. Each side of the square is now seen as two segments: one of length $a-b$ and one of length $b$.

The $b^2$ patch will reappear in the next step as the place where two strips overlap. Its role is structural, not decorative.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj4: {
          title: `Two ab Strips with an Overlap`,
          content: `Step 3 lays down two $ab$ strips that together cover most of the square:

• A horizontal strip of dimensions $a \\times b$ runs along the top of the square (sides $a$ and $b$, area $ab$).

• A vertical strip of dimensions $b \\times a$ runs down the right side (sides $b$ and $a$, area $ab$).

The two strips overlap exactly on the upper-right $b \\times b$ corner. The pink $b^2$ patch is the overlap region — a single $b \\times b$ square covered by both strips at once. The remaining uncovered region is a square of side $a-b$ in the lower-left, with area $(a-b)^2$.

Counting areas naively gives $ab + ab = 2ab$, but this double-counts the overlap. The corrected total of the covered region is $2ab - b^2$. The whole $a \\times a$ square equals the covered region plus the uncovered $(a-b)^2$:

$$a^2 = (2ab - b^2) + (a-b)^2$$`,
          before: ``,
          after: ``,
          link: '',
        },

        obj5: {
          title: `The Discard Step`,
          content: `Step 4 makes the overlap correction explicit. The top strip lifts upward off the square and the right strip slides outward to the right, so each strip can be inspected on its own. A red X mark appears on one copy of the $b^2$ overlap with a "discard" label, indicating that this piece of area was counted by both strips and needs to be subtracted out. The animation then oscillates back and forth — strips together, strips apart — driving home the relationship.

Solving the area equation $a^2 = 2ab - b^2 + (a-b)^2$ for $(a-b)^2$:

$$(a-b)^2 = a^2 - 2ab + b^2$$

The minus sign in front of $2ab$ is the strip-overlap correction. The plus sign in front of $b^2$ is the rebate that compensates for double-subtracting the overlap when we wrote $-2ab$. Both signs are forced by the geometry; neither is a memorisation rule.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj6: {
          title: `Why the Signs Land Where They Do`,
          content: `The identity has three terms with three different sign behaviours, each tied directly to the geometric construction:

• **$a^2$ is positive** — this is the area of the square we started with.

• **$-2ab$ is negative** — the two strips together have area $2ab$, but this is too much because of the overlap; subtracting accounts for the fact that the strips don't really tile the square cleanly.

• **$+b^2$ is positive** — the overlap region was counted twice in $2ab$, so when we subtract $2ab$ we have removed it once too many; adding $b^2$ back compensates.

This three-term structure is the simplest case of inclusion-exclusion: when two regions overlap, the size of their union is "size of A + size of B − size of overlap." The square-of-a-difference identity is exactly that principle dressed in algebra.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj7: {
          title: `Using the Controls`,
          content: `Five controls drive the animation:

• **Play** runs the full proof. After step 4 finishes, the strips oscillate apart-and-together to keep the discard idea visible without freezing the screen.

• **Pause** stops the current animation, including the stage-4 oscillation, in place.

• **Step Forward** and **Step Back** move through steps 1–4 one at a time. Use these to study the marking and overlap separately from the discard correction.

• **Reset** returns to step 1 and replays the intro fade-in.

• **Speed** ranges from 0.5× to 2×. The default 1× lets the strip motion read clearly while still keeping the proof brisk.

The right panel shows the four written steps with the current step highlighted as the animation progresses.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj8: {
          title: `Related Concepts and Tools`,
          content: `**Algebraic Identities** — Hub for all four identity visualizers.

**Square of a Sum** — Companion proof of $(a+b)^2 = a^2 + 2ab + b^2$. Same form, opposite sign on the middle term.

**Difference of Squares** — Factors $a^2 - b^2$ into $(a+b)(a-b)$. Useful next step after this identity.

**Square of a Trinomial** — Extension to three terms: $(a+b+c)^2$.

**Polynomials** — Theory of polynomial expansion, where this identity is one of the standard tools.

**Factoring** — Recognising perfect square trinomials of the form $a^2 - 2ab + b^2$ allows them to be re-factored as $(a-b)^2$.`,
          before: ``,
          after: ``,
          link: '',
        },
      }
    },

    'square-of-trinomial': {
      component: 'SquareOfTrinomial',
      title: "Square of a Trinomial (a+b+c)² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of (a+b+c)² expansion through a 3x3 grid of pieces.",
      name: "Square of a Trinomial Visualization",
      url: "/algebra/visual-tools/identities/square-of-trinomial",
      h1: "Square of a Trinomial  (a+b+c)²",
      introTitle: `Visualizing (a+b+c)² as a 3×3 Grid`,
      introContent: `This visualizer extends the square-of-a-sum dissection to three terms. A square of side $a+b+c$ is split into nine rectangles arranged as a 3×3 grid: three squared terms on the diagonal and six cross-product rectangles in three matched pairs. The full identity $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$ falls out of summing the nine pieces — and the explosion view at the end separates them so each one can be seen on its own.`,
      keywords: [
        "(a+b+c)^2",
        "square of trinomial",
        "trinomial squared",
        "(a+b+c)^2 expansion",
        "a^2+b^2+c^2+2ab+2ac+2bc",
        "trinomial square proof",
        "visual algebra",
        "algebraic identity proof",
        "3x3 grid algebra",
        "geometric proof of trinomial square",
        "interactive algebra",
        "polynomial expansion",
        "trinomial expansion",
        "perfect square trinomial",
        "expand (a+b+c)^2"
      ],
      faqQuestions: {
        obj1: {
          question: "What is the square of a trinomial identity?",
          answer: "The square of a trinomial identity states that (a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc. Squaring a sum of three terms produces six terms: three squared terms and three doubled cross products, one for each pair of original terms."
        },
        obj2: {
          question: "Why are there exactly six terms in the expansion?",
          answer: "A 3x3 grid has nine cells, but the three off-diagonal cross-product pairs are equal: ab equals ba, ac equals ca, and bc equals cb. So the nine cells collapse to six distinct values: three diagonal squared terms and three doubled cross products."
        },
        obj3: {
          question: "How does this generalize the (a+b)^2 identity?",
          answer: "The square-of-a-sum builds a 2x2 grid: two squares (a^2, b^2) and two equal ab rectangles producing 2ab. The trinomial extends this to a 3x3 grid: three squares on the diagonal and three doubled cross products. The pattern continues: squaring a sum of n terms produces an n-by-n grid with n diagonal squares and n(n-1)/2 doubled cross products."
        },
        obj4: {
          question: "How do I expand expressions like (x+2y+3)^2?",
          answer: "Apply the pattern: square each term, then add twice the product of every pair. So (x+2y+3)^2 = x^2 + (2y)^2 + 3^2 + 2(x)(2y) + 2(x)(3) + 2(2y)(3) = x^2 + 4y^2 + 9 + 4xy + 6x + 12y."
        },
        obj5: {
          question: "What does the explosion view at the end show?",
          answer: "After step 3, the nine grid pieces oscillate outward from the center and back. Pulled apart, you can see each of the nine cells as a distinct piece and verify that the pairs ab, ac, and bc each appear twice. The motion makes the symmetry of the 3x3 layout visible without the cells being crowded together."
        }
      },
      sectionsContent: {
        obj1: {
          title: `The (a+b+c)² Identity at a Glance`,
          content: `The square of a trinomial identity expands the square of a three-term sum:

$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$

Three squared terms cover the diagonal of the expansion. Three cross-product terms cover the off-diagonal pairs, each appearing with a coefficient of $2$. Six terms total — fewer than the nine you might initially expect, because cross products like $ab$ and $ba$ are equal and combine.

This identity is the natural step beyond $(a+b)^2$. The same dissection logic that proves the binomial case extends with no modification: more terms, more pieces, same area-conservation argument.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj2: {
          title: `Reading the Starting Square`,
          content: `Step 1 of the animation shows a square of side $a+b+c$, with $(a+b+c)^2$ floating as a centred label and dimension marks "$a+b+c$" along the top and left edges. The square's area is $(a+b+c) \\times (a+b+c) = (a+b+c)^2$ — the quantity to be decomposed.

The starting frame is intentionally similar to the $(a+b)^2$ frame, just with one more term in the side length. The next steps will show that the structural argument is identical to the binomial case, only with a 3×3 grid replacing the 2×2 grid.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj3: {
          title: `Splitting Each Side into Three Segments`,
          content: `Step 2 splits each side of the square into three labelled segments: $a$, then $b$, then $c$. Both the top and left edges show this three-way split, and the dimension labels rearrange to display each segment separately while still showing the full "$a+b+c$" total.

The labels on the top and left edges read $a$, $b$, $c$ in the same order. This consistent labelling is essential for the next step: when the grid lines are drawn, the cell at row $i$, column $j$ will have dimensions equal to the $i$th segment by the $j$th segment — and the labelling makes those dimensions immediately readable.

No area has been added or removed. The square is still the same square; only its boundary description has been refined.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj4: {
          title: `Building the 3×3 Grid`,
          content: `Step 3 fills in the dissection. Two vertical lines drop from the $a$/$b$ and $b$/$c$ tick marks on the top edge. Two horizontal lines extend from the $a$/$b$ and $b$/$c$ tick marks on the left edge. Together they partition the square into nine rectangles arranged as a 3×3 grid.

Each cell takes a colour and a label according to its dimensions:

• **Diagonal cells** (top-left, centre, bottom-right) are squares with sides $a$, $b$, $c$ respectively. They are labelled $a^2$, $b^2$, $c^2$, each in a unique colour.

• **Off-diagonal cells** are rectangles. The top-middle and middle-left both have dimensions $a$ and $b$ and are labelled $ab$. The top-right and bottom-left both have dimensions $a$ and $c$ and are labelled $ac$. The middle-right and bottom-middle both have dimensions $b$ and $c$ and are labelled $bc$. Each off-diagonal pair shares a colour to emphasise that the two cells in a pair are equal.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj5: {
          title: `The Explosion View`,
          content: `Step 4 visually separates the nine pieces with an oscillating explosion. Every cell drifts outward from the centre of the square, gaps opening between rows and columns, then drifts back together. The motion repeats so the layout can be read in either configuration.

Pulled apart, the nine cells become individually inspectable. The three diagonal squares stand out: $a^2$, $b^2$, $c^2$ in their distinct colours. The three off-diagonal pairs now read clearly as twin pieces: two $ab$ rectangles, two $ac$ rectangles, two $bc$ rectangles, each pair sharing a colour. Adding all nine areas:

$$a^2 + b^2 + c^2 + ab + ab + ac + ac + bc + bc$$

$$= a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$

The total area equals $(a+b+c)^2$ from the original square, so:

$$(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$`,
          before: ``,
          after: ``,
          link: '',
        },

        obj6: {
          title: `Why Each Cross Product is Doubled`,
          content: `The 3×3 grid has nine cells but produces only six distinct expression values. The reason is symmetry: the cell at row $i$, column $j$ has dimensions equal to the $i$th and $j$th segments, but the cell at row $j$, column $i$ has the same dimensions in the opposite orientation. They are different geometric pieces in different positions, but they have the same area.

Specifically:

• Top-middle cell has dimensions $a \\times b$. Middle-left cell has dimensions $b \\times a$. Same area $ab$.

• Top-right has dimensions $a \\times c$. Bottom-left has dimensions $c \\times a$. Same area $ac$.

• Middle-right has dimensions $b \\times c$. Bottom-middle has dimensions $c \\times b$. Same area $bc$.

Three pairs of equal cells produce the three doubled cross products. The symmetry is purely geometric — it follows from the commutativity of multiplication, $xy = yx$, manifested as area-preserving rotation of a rectangle.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj7: {
          title: `Using the Controls`,
          content: `Five controls drive the animation:

• **Play** runs the full proof. After step 3 fills the grid, step 4 starts the perpetual explode-and-reform oscillation that reveals the nine pieces individually.

• **Pause** stops the current animation, including the stage-4 oscillation, in place.

• **Step Forward** and **Step Back** move through the four steps. Forward from step 3 starts the oscillation; Back from step 3 returns to the unfilled grid.

• **Reset** returns to step 1 and replays the intro fade-in.

• **Speed** controls all transitions and the explosion oscillation, from 0.5× to 2×. The grid is more readable at slower speeds; the oscillation is more dramatic at faster speeds.

The right panel lists the four written steps with the current step highlighted.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj8: {
          title: `Related Concepts and Tools`,
          content: `**Algebraic Identities** — Hub for all four identity visualizers.

**Square of a Sum** — The 2×2 case of the same dissection logic. Recommended starting point if the trinomial proof feels dense.

**Square of a Difference** — The signed companion: $(a-b)^2 = a^2 - 2ab + b^2$.

**Difference of Squares** — Factors $a^2 - b^2$. Same family of two-term identities.

**Polynomials** — Theory of polynomial expansion, in which the trinomial square is a standard tool for higher-degree manipulations.

**Powers Table** — Reference for integer powers, useful when checking trinomial expansions at specific values.`,
          before: ``,
          after: ``,
          link: '',
        },
      }
    },

    'difference-of-squares': {
      component: 'DifferenceOfSquares',
      title: "Difference of Squares a² - b² - Visual Proof | Learn Math Class",
      description: "Interactive visual proof of a² - b² = (a+b)(a-b) through geometric slice and rearrange.",
      name: "Difference of Squares Visualization",
      url: "/algebra/visual-tools/identities/difference-of-squares",
      h1: "Difference of Squares  a² − b²",
      introTitle: `Visualizing a² − b² as a Cut-and-Rearrange Rectangle`,
      introContent: `This visualizer turns the factoring identity $a^2 - b^2 = (a+b)(a-b)$ into a slice-and-rearrange proof. A small square of side $b$ is removed from a square of side $a$, leaving an L-shape. The L is split horizontally into two rectangles; the upper strip lifts, rotates 90°, and drops next to the lower rectangle. The result is a rectangle of dimensions $(a+b)$ by $(a-b)$, exactly the factored form.`,
      keywords: [
        "a^2 - b^2",
        "difference of squares",
        "difference of squares proof",
        "a^2 - b^2 = (a+b)(a-b)",
        "factoring difference of squares",
        "geometric proof difference of squares",
        "visual algebra",
        "algebraic identity proof",
        "factor a^2 - b^2",
        "interactive algebra",
        "polynomial factoring",
        "binomial factoring",
        "(a+b)(a-b)",
        "slice and rearrange proof",
        "algebraic factoring"
      ],
      faqQuestions: {
        obj1: {
          question: "What is the difference of squares identity?",
          answer: "The difference of squares identity states that a^2 - b^2 = (a+b)(a-b). Any expression of the form one square minus another square factors into the sum of the two roots times the difference of the two roots. The identity holds for all real a and b."
        },
        obj2: {
          question: "Why does the slice-and-rearrange proof work?",
          answer: "Cutting a small b^2 square from a large a^2 square leaves an L-shape with area a^2 - b^2. Slicing the L into two rectangles and rearranging them into a single rectangle preserves total area but creates a new shape with sides (a+b) and (a-b). The resulting rectangle's area equals the original L's area, giving (a+b)(a-b) = a^2 - b^2."
        },
        obj3: {
          question: "How do I factor an expression like x^2 - 25?",
          answer: "Recognize that x^2 - 25 is a difference of two squares: x^2 - 5^2. Apply the identity directly: x^2 - 25 = (x+5)(x-5). The pattern works whenever both terms are perfect squares and one is subtracted from the other."
        },
        obj4: {
          question: "Why is there no a^2 + b^2 factoring identity over real numbers?",
          answer: "Sums of squares like x^2 + 25 do not factor over the real numbers because the geometric construction does not have a real analogue: removing a positive area from another positive area is fine, but adding two positive squares produces a shape that cannot be cut and rearranged into a rectangle with real-valued sides. Sums of squares only factor when complex numbers are allowed."
        },
        obj5: {
          question: "What can I use the difference of squares identity for?",
          answer: "Common applications include: factoring polynomials to find roots; simplifying fractions where the difference of squares appears; mental arithmetic shortcuts (such as 99 times 101 equals 100^2 - 1^2 equals 9999); and rationalizing denominators that contain a difference of square roots."
        }
      },
      sectionsContent: {
        obj1: {
          title: `The a² − b² Identity at a Glance`,
          content: `The difference of squares identity is a factoring rule:

$$a^2 - b^2 = (a+b)(a-b)$$

The left side is one square minus another. The right side is a product of two binomials — the sum and the difference of the two original quantities. Recognising a difference of squares immediately yields a factorisation, which is one of the most useful single moves in elementary algebra.

The visual proof works backwards from the geometry: instead of multiplying $(a+b)(a-b)$ by FOIL and watching the cross terms cancel, we start with the area $a^2 - b^2$ and physically rearrange it into a rectangle of dimensions $(a+b)$ by $(a-b)$. The factorisation is then read directly off the rearranged shape.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj2: {
          title: `Reading the Starting Square`,
          content: `Step 1 of the animation shows a square of side $a$, with the central label $a^2$ and dimension labels along the top and left. This is the larger of the two squares whose difference we want to compute. Its area is the quantity $a^2$ that appears as the first term of the identity.

Nothing has been cut or removed. The starting state simply establishes the larger square. The proof's first move will be to mark a small square inside it that we plan to remove.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj3: {
          title: `Marking the b² Removal`,
          content: `Step 2 marks an amber $b^2$ square in the upper-right corner of the larger square. The corner square has side $b$, area $b^2$. Dimension labels update: the top edge now reads "$a-b$" then "$b$"; the right edge reads "$b$" then "$a-b$". The marked corner is the piece we intend to subtract.

Notice the corner square is fully drawn but visually distinct — it has its own colour and outline so it stands apart from the main square it sits inside. Once removed, the L-shape that remains will have area $a^2 - b^2$. That L-shape is the quantity we want to factor.

A small text label "(removed)" appears with the $b^2$ patch to make the operation unambiguous: this corner is being taken out, not added.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj4: {
          title: `Splitting the L-Shape into Two Rectangles`,
          content: `Step 3 removes the $b^2$ corner. The L-shaped region that remains has total area $a^2 - b^2$ — the quantity we want to factor. A horizontal dashed line splits the L into two rectangles with dimensions we can compute:

• The **top strip** sits in the upper-left of the original square. Its width is $a - b$ (the remaining length of the top edge after removing $b$), and its height is $b$. Area: $(a-b) \\cdot b$.

• The **bottom rectangle** is wider — it spans the full width $a$ of the square — and its height is $a - b$. Area: $a \\cdot (a-b)$.

The two pieces are still in their original positions inside the L. Adding them gives $(a-b) \\cdot b + a \\cdot (a-b) = (a-b)(a+b)$ by direct factoring of $(a-b)$ — but the visualizer takes the more striking route of physically combining the pieces into a single rectangle in the next step.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj5: {
          title: `Lift, Rotate, and Place`,
          content: `Step 4 performs the rearrangement. The top strip lifts upward off the L, rotates 90° counterclockwise so its long side becomes vertical, and translates rightward to land snugly against the right edge of the bottom rectangle. The two pieces now sit side by side and merge into a single rectangle.

Reading the new rectangle's dimensions from the dimension marks:

• **Width** (bottom edge): $a + b$ — the original full width $a$ of the bottom piece, plus the rotated strip's height $b$ added to its right.

• **Height** (right edge): $a - b$ — both pieces have height $a - b$ in the new orientation, so the combined rectangle's height equals that.

The rectangle's area is $(a+b)(a-b)$. But total area was preserved through cutting and rotating — the only change was geometric arrangement, not size. So:

$$(a+b)(a-b) = a^2 - b^2$$

The factorisation is now a literal description of the rearranged rectangle's sides.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj6: {
          title: `Why This Identity is So Useful`,
          content: `The difference of squares is the single most useful factoring identity in elementary algebra, for three reasons:

• **Recognition is fast.** Any expression of the form $X^2 - Y^2$ — where $X$ and $Y$ can be variables, numbers, or compound expressions — factors instantly into $(X+Y)(X-Y)$. Examples: $x^2 - 9 = (x+3)(x-3)$; $4y^2 - 25 = (2y+5)(2y-5)$; $(p+q)^2 - r^2 = (p+q+r)(p+q-r)$.

• **It enables simplification.** Many algebraic fractions and equations simplify dramatically when a difference of squares can be factored and a common factor cancelled.

• **It yields arithmetic shortcuts.** Numerical computations such as $99 \\times 101 = 100^2 - 1^2 = 9999$ or $48 \\times 52 = 50^2 - 2^2 = 2500 - 4 = 2496$ become trivial once the identity is recognised.

The geometric proof is what makes the identity memorable: the lift-rotate-place rearrangement is hard to forget, and the formula reads directly off the final rectangle.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj7: {
          title: `Using the Controls`,
          content: `Five controls drive the animation:

• **Play** runs the full proof from start to finish. The slowest single transition is the lift-rotate-place sequence in step 4, where the top strip's motion has three phases: lift, rotate, translate.

• **Pause** stops the current animation in place, including mid-rotation if needed.

• **Step Forward** and **Step Back** move through the four steps one at a time. Stepping forward from step 3 starts the lift-rotate motion; stepping back from step 4 reverses the motion through the rotation.

• **Reset** returns to step 1 and replays the intro fade-in.

• **Speed** ranges from 0.5× to 2×. Slower speeds (0.5× or 0.75×) are recommended for the first viewing, since the rotation animation in step 4 contains the most information per second.

The right panel lists the four written steps with the current step highlighted as the animation progresses.`,
          before: ``,
          after: ``,
          link: '',
        },

        obj8: {
          title: `Related Concepts and Tools`,
          content: `**Algebraic Identities** — Hub for all four identity visualizers.

**Square of a Sum** — Visual proof of $(a+b)^2 = a^2 + 2ab + b^2$. Companion identity in the same family.

**Square of a Difference** — Visual proof of $(a-b)^2 = a^2 - 2ab + b^2$. The minus-sign companion to square of a sum.

**Square of a Trinomial** — Extension to three terms.

**Factoring** — Theory of polynomial factoring, where the difference of squares is one of the standard patterns to recognise.

**Polynomials** — Polynomial structure and operations.

**Powers Table** — Reference table of integer powers, useful for spotting perfect squares like $144 = 12^2$ or $625 = 25^2$ that make difference-of-squares factoring possible.`,
          before: ``,
          after: ``,
          link: '',
        },
      }
    },

  }

  const currentConfig = viewConfig[params.view]

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
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
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Identities",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/identities"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  }

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  }

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      introContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  }
}


function getFeatureList(view) {
  const features = {
    'square-of-sum': [
      "Animated geometric dissection of (a+b)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition"
    ],
    'square-of-difference': [
      "Animated geometric dissection of (a-b)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition"
    ],
    'square-of-trinomial': [
      "Animated 3x3 grid dissection of (a+b+c)²",
      "Interactive step-by-step proof",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual area decomposition into 9 pieces"
    ],
    'difference-of-squares': [
      "Animated slice-and-rearrange proof of a² - b²",
      "Interactive step-by-step factoring",
      "Adjustable animation speed",
      "Step navigation controls",
      "Visual rearrangement to (a+b)(a-b)"
    ]
  }
  return features[view] || []
}


export default function AlgebraicIdentityViewPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  currentView,
  componentName,
  h1Title
}) {

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

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>

      <SiblingsNav
       bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
      >
        {componentName === 'SquareOfSum' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfSum />
          </div>
        )}

        {componentName === 'SquareOfDifference' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfDifference />
          </div>
        )}

        {componentName === 'SquareOfTrinomial' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <SquareOfTrinomial />
          </div>
        )}

        {componentName === 'DifferenceOfSquares' && (
          <div style={{ transform: 'scale(0.9)' }}>
            <DifferenceOfSquares />
          </div>
        )}
      </SiblingsNav>

      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <IntroSection
            id={introContent.id}
            title={introContent.title}
            content={introContent.content}
            backgroundColor='#f9fafb'
            textColor="#06357a"
          />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}
      <br />
      <br />
      <br />
    </>
  )
}