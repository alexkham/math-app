// =====================================================================
// Matrix Determinant visual tool - UNIFIED 2026-09-13.
//
// Two determinant pages existed on 2026-09-12: this one (built that day on
// matrix/DeterminantWrapper.jsx: 2x2 and 3x3, cofactor along row 1, Sarrus)
// and /visual-tools/determinant-calculator (rewritten the same day on
// determinants/DeterminantWrapper.jsx: 2x2 to 5x5, four strategies, sign
// pattern). Owner decision: keep THIS URL, absorb the other page, redirect
// /visual-tools/determinant-calculator here (next.config.js).
//
// The page therefore now runs the broader engine
// (determinants/DeterminantWrapper + determinants/determinantDiagrams) and
// carries the merged content of both pages. The pre-merge file is kept at
// line1-backups/linear-algebra-matrix-determinant/index.pre-merge-2026-09-13.jsx.
// The one feature of the earlier engine not carried over: it wrote each
// cofactor term out with its minor expanded (-a12(a21a33 - a23a31)); the
// current engine leaves the minor as det(M) so it can scale to 5x5.
// =====================================================================

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import DeterminantWrapper from '../../../../app/components/linear-algebra copy/determinants/DeterminantWrapper'
import determinantDiagrams from '../../../../app/components/linear-algebra copy/determinants/determinantDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'determinant',
    'determinant of a matrix',
    'determinant visualizer',
    'determinant calculator',
    'determinant step by step',
    'cofactor expansion',
    'laplace expansion',
    'sarrus rule',
    'rule of sarrus',
    '3x3 determinant',
    '2x2 determinant',
    '4x4 determinant',
    'how to find the determinant',
    'determinant formula',
    'minors and cofactors',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Determinant** — the number $\\det A$, also written $|A|$, attached to every [square matrix](!/linear-algebra/matrix/types#1); the signed factor by which $A$ scales area or volume, and zero exactly when $A$ is singular.

**Main diagonal** — the entries $a_{i,i}$ running from the top-left corner to the bottom-right. The anti-diagonal runs from top-right to bottom-left.

**Minor** — $M_{i,j}$, the determinant of the submatrix left after striking row $i$ and column $j$.

**Cofactor** — $C_{i,j} = (-1)^{i+j} M_{i,j}$, the minor with the checkerboard sign attached.

**Cofactor expansion** — $\\det A = \\sum_j a_{i,j}\\, C_{i,j}$ along any row $i$, or the same sum down any column; also called Laplace expansion.

**Sarrus's rule** — for $3 \\times 3$ only: repeat the first two columns, add the three downward diagonal products, subtract the three upward ones.

**Sign pattern** — the checkerboard of $(-1)^{i+j}$: plus where the row and column numbers have the same parity, minus where they differ.

**Singular** — $\\det A = 0$; the matrix has no inverse and collapses space onto something lower-dimensional.

**Orientation** — the sign of the determinant: positive when $A$ preserves handedness, negative when it reverses it.

**Term count** — $n!$ products for an $n \\times n$ matrix: $2$, $6$, $24$, $120$, which is why expansion is a small-matrix method.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a size for $A$, pick a recipe for $\\det A$, and watch the determinant assemble itself term by term.

• The **Scenario** tab holds the size stepper. $A$ is always square, so the second stepper is linked to the first and shows a link icon. Sizes run from $2$ to $5$
• The **Strategy** tab holds four cards for the [four strategies](!#the-four-strategies). Each card states which sizes it supports; a card that does not fit the current size is greyed out with a size badge, and changing the size snaps you to a strategy that fits
• The two cofactor cards carry their own **pill row** for choosing which row or column to expand along
• The summary strip at the right of the tab bar always shows the size and the active strategy
• Below the panel, the scene player animates the recipe. Play, step back and forward, reset, and choose a speed. The caption above the [matrix](!/linear-algebra/matrix#1) states the general formula for the strategy, and the **Step explanations** log on the right keeps every step you have passed, with the running formula growing one term at a time
• Everything is symbolic: the entries of $A$ stay as $a_{i,j}$ and each term is written out, so what you see is the formula, not a numerical example

Every strategy produces the same number. They differ only in how the terms are grouped and what is highlighted while they are collected. For the theory behind the tool, see the [determinants theory page](!/linear-algebra/determinants); for minors and cofactors in depth, the [cofactors theory page](!/linear-algebra/determinants/cofactors).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Four Strategies`,
      content: `The **Strategy** tab offers four recipes for the same [scalar](!/linear-algebra/vectors#1). Two are shortcuts tied to a single size; two work for any size the tool allows.

• [Diagonal product](!#diagonal-product) — $2 \\times 2$ only. Main diagonal product minus anti-diagonal product: two terms
• [Sarrus's rule](!#sarrus-rule) — $3 \\times 3$ only. Six diagonal products on an augmented $3 \\times 5$ layout, three added and three subtracted
• [Cofactor expansion along a row](!#cofactor-along-a-row) — sizes $3$ to $5$. Pick a row, walk its entries, multiply each by the determinant of its minor with the checkerboard sign
• [Cofactor expansion along a column](!#cofactor-along-a-column) — sizes $3$ to $5$. The same sum walked down a column instead

Both cofactor strategies open with the [sign pattern](!#the-sign-pattern) scene, a standalone checkerboard of plus and minus signs that every cofactor term picks its sign from.

The step counts differ. At $2 \\times 2$ the diagonal product takes $6$ scenes; at $3 \\times 3$ Sarrus takes $9$ and either cofactor expansion takes $12$. The result is identical every time, and at $3 \\times 3$ the three cofactor terms, multiplied out, are exactly the six products Sarrus's rule lists.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Diagonal Product: the 2 × 2 Case`,
      content: `The first strategy is the whole determinant story at the smallest size. For a $2 \\times 2$ matrix, $\\det A = a_{1,1} a_{2,2} - a_{1,2} a_{2,1}$: the product of the main diagonal minus the product of the anti-diagonal.

The frozen scene below is the second of six. The main diagonal, $a_{1,1}$ and $a_{2,2}$, is highlighted in blue; the anti-diagonal has not yet been visited.`,
      before: ``,
      after: `The tool then highlights the anti-diagonal pair in grey and subtracts its product, and the running formula in the log fills in one term at a time: first $a_{1,1} a_{2,2}$, then $- a_{1,2} a_{2,1}$, then both together with the result framed.

This two-term formula is the base case for everything larger. A [cofactor expansion](!#cofactor-along-a-row) of a $3 \\times 3$ matrix produces three $2 \\times 2$ minors, each evaluated by exactly this rule, and a $4 \\times 4$ expansion bottoms out in $2 \\times 2$ blocks the same way. Nothing about determinants of any size is more than this formula applied repeatedly with signs.

The sign already appears here. The anti-diagonal term is subtracted, and the [sign pattern](!#the-sign-pattern) for $n = 2$ is exactly plus on the main diagonal and minus off it. The $2 \\times 2$ rule is the cofactor expansion along row $1$ with the minors written out.

Geometrically, $a_{1,1} a_{2,2} - a_{1,2} a_{2,1}$ is the signed area of the parallelogram spanned by the two columns of $A$, which the [geometric meaning](!#geometric-meaning) section develops.`,
      link: '',
    },

    obj4: {
      title: `Sarrus's Rule: the 3 × 3 Shortcut`,
      content: `The second strategy works only at $3 \\times 3$. Write the first two columns of $A$ again to its right, giving a $3 \\times 5$ layout, and read six diagonals of three cells each: three running down-right, whose products are added, and three running up-right, whose products are subtracted.

The frozen scene is positive diagonal $2$ of $3$: the cells $a_{1,2}$, $a_{2,3}$ and $a_{3,1}$, the last of them sitting in the duplicated columns, which are dimmed when not in use.`,
      before: ``,
      after: `The six terms, in the order the tool collects them, are

$$\\det A = a_{1,1} a_{2,2} a_{3,3} + a_{1,2} a_{2,3} a_{3,1} + a_{1,3} a_{2,1} a_{3,2} - a_{1,3} a_{2,2} a_{3,1} - a_{1,1} a_{2,3} a_{3,2} - a_{1,2} a_{2,1} a_{3,3}$$

Each term takes exactly one entry from every row and every column, and the six terms are all the ways of doing that: six is $3!$, the number of permutations of three things. That is the general definition of the determinant in miniature, a signed sum over permutations, and it is why Sarrus does not extend. A $4 \\times 4$ determinant has $24$ such terms, and no arrangement of diagonals on an augmented grid produces them all with the right signs; forcing the pattern onto a $4 \\times 4$ gives eight products and a wrong answer.

The rule is fast, which is its whole appeal, and it agrees with the [cofactor expansion](!#cofactor-along-a-row) term for term: group the six products by which entry of row $1$ they contain and the three cofactor terms of row $1$ appear. Run both strategies at $3 \\times 3$ and compare the running formulas.

The dimmed duplicate columns are the same entries as columns $1$ and $2$; they are drawn again only so that every diagonal has three cells to land on and the wrap-around diagonals read as straight lines.`,
      link: '',
    },

    obj5: {
      title: `Cofactor Expansion Along a Row`,
      content: `The third strategy is the general method. Choose a row $i$. For each entry $a_{i,j}$ in it, strike out its row and column, take the determinant of what is left, the minor $\\det(M_{i,j})$, attach the checkerboard sign $(-1)^{i+j}$, and multiply by the entry. Add the $n$ signed products.

The frozen scene is term $2$ of the expansion along row $1$ of a $3 \\times 3$ matrix. The [pivot](!/linear-algebra/linear-systems/echelon-form#4) $a_{1,2}$ is highlighted, the rest of its row and column are struck through and dimmed, and the $2 \\times 2$ minor $M_{1,2}$ stands beside $A$ with its entries keeping their original indices.`,
      before: ``,
      after: `Each entry of the chosen row produces three scenes in the player: the strike, the minor appearing, and the term joining the running formula. The tool expands one level only. The minor's determinant is left as the symbol $\\det(M_{i,j})$ rather than expanded again, because a $3 \\times 3$ minor of a $4 \\times 4$ matrix would need its own three-term expansion and the picture would not fit. At $3 \\times 3$ the minor is a $2 \\times 2$ determinant, so the term $-a_{1,2}\\,\\det(M_{1,2})$ in the frozen scene stands for $-a_{1,2}(a_{2,1}a_{3,3} - a_{2,3}a_{3,1})$. To see a minor evaluated, run the tool at the smaller size.

The row is a free choice, and the pill row under the strategy card lets you change it. The result never changes, but the work does: a row with zeros contributes nothing for those entries, so the practical rule is to expand along the row with the most zeros. Expanding along a column is the same computation with the roles of $i$ and $j$ swapped, treated in the [column expansion](!#cofactor-along-a-column) section.

The sign is the part most often lost. It comes from the [sign pattern](!#the-sign-pattern), not from the entry, and $a_{1,2}$ in the frozen scene is a subtracted term even if the entry itself is positive.

At $3 \\times 3$ the three cofactor terms, once the minors are written out, are exactly the six products of [Sarrus's rule](!#sarrus-rule) regrouped.`,
      link: '',
    },

    obj6: {
      title: `Cofactor Expansion Along a Column`,
      content: `The fourth strategy is the third one turned on its side. Choose a column $j$ and walk down it: for each $a_{i,j}$, strike its row and column, take the minor, attach the sign $(-1)^{i+j}$, multiply, and add.

The frozen scene is term $2$ of the expansion along column $1$ of a $3 \\times 3$ matrix. The pivot is $a_{2,1}$, its row and column are struck, and the minor $M_{2,1}$ is shown alongside.`,
      before: ``,
      after: `That row and column expansions give the same number is not obvious from the recipe, and it is one of the first real theorems about determinants. The reason is that $\\det A^T = \\det A$: expanding $A$ down column $j$ is expanding $A^T$ along row $j$, and the determinant does not see the difference.

The practical consequence is freedom. Any of the $2n$ lines of a matrix may be expanded along, so pick the one with the most zeros, and pick it after looking at the matrix rather than by habit. A column with a single nonzero entry reduces an $n \\times n$ determinant to one $(n-1) \\times (n-1)$ determinant in one step.

The sign attached to $a_{2,1}$ in the frozen scene is minus, since $2 + 1$ is odd. Down a column the signs alternate just as they do along a [row](!#cofactor-along-a-row), and the [sign pattern](!#the-sign-pattern) scene shows the whole checkerboard at once.`,
      link: '',
    },

    obj7: {
      title: `The Sign Pattern`,
      content: `Both cofactor strategies begin with a scene that shows no entries at all, only signs: a checkerboard with $+$ in the top-left corner, alternating along every row and down every column. This is $(-1)^{i+j}$ drawn out, and it is the sign each cofactor term inherits from the position of its pivot.

The still below is the pattern at $n = 4$. The tool draws it at whatever size is selected.`,
      before: ``,
      after: `The rule is simpler than the formula suggests. An entry gets $+$ when its row and column numbers have the same parity and $-$ when they differ. The main diagonal is all plus. Neighbours in any direction have opposite signs.

Two things follow. Expanding along row $1$ starts with plus and alternates, which is the version most people memorise; expanding along row $2$ starts with minus, which is where errors creep in. And the sign belongs to the position, not to the number sitting there: a negative entry in a plus position and a positive entry in a minus position both end up subtracting.

The alternation is what makes the expansion agree with the definition of the determinant as a signed sum over permutations, where each transposition of columns flips the sign. The pattern is the same for every size, so the $2 \\times 2$ [diagonal product](!#diagonal-product) is a cofactor expansion in disguise: plus on the main diagonal, minus on the anti-diagonal.`,
      link: '',
    },

    obj8: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights on $A$, an optional second matrix, and a formula that grows in the log, and the same colours mean the same things in every strategy.

• **Blue** on a cell or a diagonal marks a positive term being collected, or the pivot entry of a cofactor term
• **Grey** marks a subtracted term, or the struck-out row and column around a pivot, whose entries are also dimmed and crossed through
• A second matrix in **green brackets** is a minor $M_{i,j}$, drawn with the surviving entries of $A$ and their original indices
• **Dimmed entries** in the Sarrus layout are the duplicated columns, drawn only so every diagonal is complete
• **Arrows** join the cells of a diagonal, and a **dashed axis** marks the main diagonal in the $2 \\times 2$ case
• The final scene frames $A$ with a **green bracket** labelled $\\det A$

The caption above the matrix states the general formula for the active strategy and does not change during the run. The **Step explanations** log is where the computation happens: each entry shows the running formula with the current term highlighted in blue, collected terms in green, and terms still to come greyed out. Click any entry to jump the player to that scene.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Choosing the Size`,
      content: `The stepper offers $2 \\times 2$ up to $5 \\times 5$, and the strategies available change with it.

• At $2 \\times 2$ the diagonal product is the only strategy, and it is the whole story: $a_{1,1}a_{2,2} - a_{1,2}a_{2,1}$, two terms, one of each sign
• At $3 \\times 3$ every minor is a $2 \\times 2$ determinant, and the three cofactor terms multiply out to six products; this is the size at which the checkerboard of signs starts to matter, and the size Sarrus's rule was invented for
• At $4 \\times 4$ each cofactor would be a $3 \\times 3$ determinant with six terms, twenty-four products in total; the tool shows the four minors but leaves their determinants as symbols, since the expressions no longer fit in a cell, and by hand the method is already impractical
• At $5 \\times 5$ there are five minors of size $4 \\times 4$ and one hundred and twenty products behind them; the point of running the tool here is to see that the recipe does not change, only the cost

Beyond that, determinants are computed by row reduction, since the determinant of a [triangular matrix](!/linear-algebra/decompositions/lower-upper#1) is the product of its diagonal; the [LU decomposition visualizer](!/linear-algebra/visual-tools/lu-decomposition) shows that route.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `What the Determinant Is`,
      content: `The determinant of a square matrix is a single number with two faces, one geometric and one algebraic.

Geometrically, $|\\det A|$ is the factor by which the transformation $A$ scales area in the plane or volume in space: the unit square maps to a parallelogram of area $|\\det A|$, the unit cube to a parallelepiped of volume $|\\det A|$. The sign records orientation, negative when $A$ turns a right-handed frame into a left-handed one. And $\\det A = 0$ means the image is flattened to something of lower [dimension](!/linear-algebra/vector-spaces/dimension#1), so $A$ has no inverse.

Algebraically, the determinant is pinned down by three properties: it is linear in each row separately, it changes sign when two rows are swapped, and it takes the value $1$ on the [identity matrix](!/linear-algebra/matrix/types#2). Any function with those three properties is the determinant, and every recipe on this page is a way of computing the one function they define. The general formula that falls out is a signed sum over all $n!$ ways of choosing one entry from each row and each column,

$$\\det A = \\sum_{\\sigma} \\operatorname{sgn}(\\sigma)\\, a_{1,\\sigma(1)}\\, a_{2,\\sigma(2)} \\cdots a_{n,\\sigma(n)}$$

which at $n = 2$ is $ad - bc$, at $n = 3$ the six terms of Sarrus's rule, and at $n = 4$ already twenty-four. Cofactor expansion is the same sum organised recursively.

For the full theory, including the properties under row operations and the connection to inverses, see the [determinants theory page](!/linear-algebra/determinants); for minors and cofactors in depth, see the [cofactors theory page](!/linear-algebra/determinants/cofactors).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Key Properties`,
      content: `The determinant interacts with every matrix operation in a definite way.

• **Product**: $\\det(AB) = \\det A \\cdot \\det B$
• **Transpose**: $\\det A^T = \\det A$, which is why expansion along a column works as well as along a row
• **Inverse**: $\\det A^{-1} = 1 / \\det A$, and $A$ is invertible exactly when $\\det A \\neq 0$
• **Scalar**: $\\det(kA) = k^n \\det A$ for an $n \\times n$ matrix, not $k \\det A$
• **Row swap**: changes the sign
• **Row scaling**: scales the determinant by the same factor
• **Adding a multiple of one row to another**: leaves the determinant unchanged, which is what makes row reduction a determinant method
• **Triangular matrices**: the determinant is the product of the diagonal
• **Zero row, or two equal or proportional rows**: determinant $0$
• **Expansion along any line**: $\\det A = \\sum_j a_{i,j} C_{i,j}$ for every row $i$, and likewise for every column

The row-addition rule is the reason row reduction computes determinants: reduce $A$ to triangular form while tracking swaps and scalings, then multiply the diagonal. For large matrices that is far cheaper than expansion, which grows like $n!$. The product rule is the deepest of these. It says the determinant respects composition of transformations, which is what makes it a scaling factor rather than a mere formula.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Why It Matters`,
      content: `The determinant is the one number that answers the question "does this matrix collapse anything?", and that question turns up everywhere.

• **Invertibility**: $\\det A \\neq 0$ is the test for an inverse to exist, and the adjugate formula $A^{-1} = \\operatorname{adj}(A) / \\det A$ builds the inverse from the same signed minors the cofactor expansion collects
• **Linear systems**: a square system has a unique solution exactly when its coefficient determinant is non-zero, and Cramer's rule writes that solution as ratios of determinants
• **Area and volume**: the area of a parallelogram, the volume of a parallelepiped, and the Jacobian factor in a change of variables are all determinants
• **Orientation**: the sign tells whether a transformation is a rotation-like motion or includes a reflection
• **Eigenvalues**: the [characteristic polynomial](!/linear-algebra/eigen/characteristic-equation#2) is $\\det(A - \\lambda I)$, its degree is $n$ because the determinant is a sum of products of $n$ entries, and the determinant itself is the product of the [eigenvalues](!/linear-algebra/eigen#2)
• **Cross product and independence**: the [cross product](!/linear-algebra/vectors/cross-product#1) is a symbolic $3 \\times 3$ determinant expanded along its first row, and the determinant of a set of [vectors](!/linear-algebra/vectors#1) is zero exactly when they are dependent
• **Numerical work**: a determinant close to zero warns that the system it describes is ill-conditioned`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `When the Determinant Is Zero`,
      content: `$\\det A = 0$ is the single most important thing the determinant can tell you, and it means several equivalent things at once.

• The rows of $A$ are **linearly dependent**: some row is a combination of the others. The same holds for the columns
• $A$ is **singular**: it has no inverse
• The system $Ax = b$ has either no solution or infinitely many, never exactly one
• The transformation $x \\mapsto Ax$ **collapses** space onto a lower dimension: a plane onto a line, or space onto a plane
• $0$ is an **eigenvalue** of $A$

In the visualizer the entries are symbols, so no run produces a numeric zero, but the structure is visible in the recipes. A row of zeros kills every cofactor term along it. Two equal rows make the Sarrus positive and negative products cancel in pairs. A row that is a multiple of another vanishes under the row-addition rule before any expansion starts.

Conversely, $\\det A \\neq 0$ guarantees an inverse, a unique solution to every $Ax = b$, and a transformation that preserves dimension.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Geometric Meaning`,
      content: `For a $2 \\times 2$ matrix, $|\\det A|$ is the area of the parallelogram whose sides are the two columns of $A$. For $3 \\times 3$, it is the volume of the parallelepiped spanned by the three columns. In general, it is the factor by which the transformation $x \\mapsto Ax$ scales $n$-dimensional volume.

The sign carries orientation. A positive determinant means the transformation can be reached from the identity by a continuous motion; a negative one means a reflection is involved, and the ordering of the column vectors has been reversed.

The $2 \\times 2$ formula makes the area claim concrete. For columns $(a, c)$ and $(b, d)$, the parallelogram they [span](!/linear-algebra/vector-spaces/span#1) has area $|ad - bc|$: the enclosing rectangle minus the four triangles and two rectangles around the edges, which is exactly the [diagonal product](!#diagonal-product) computation.

This is the reason determinants appear in change of variables for integrals. The Jacobian determinant is the local volume scaling of a coordinate change, and an integral over the new coordinates must be corrected by it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Worked Example`,
      content: `Take the $3 \\times 3$ matrix

$$A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & 6 \\end{pmatrix}$$

**Sarrus's rule.** Positive diagonals: $2 \\cdot 4 \\cdot 6 + 1 \\cdot 1 \\cdot 5 + 3 \\cdot 0 \\cdot 2 = 48 + 5 + 0 = 53$. Negative diagonals: $3 \\cdot 4 \\cdot 5 + 2 \\cdot 1 \\cdot 2 + 1 \\cdot 0 \\cdot 6 = 60 + 4 + 0 = 64$. So $\\det A = 53 - 64 = -11$.

**Cofactor expansion along row 1.** The signs are $+, -, +$.

$$\\det A = 2 \\begin{vmatrix} 4 & 1 \\\\ 2 & 6 \\end{vmatrix} - 1 \\begin{vmatrix} 0 & 1 \\\\ 5 & 6 \\end{vmatrix} + 3 \\begin{vmatrix} 0 & 4 \\\\ 5 & 2 \\end{vmatrix} = 2(24 - 2) - 1(0 - 5) + 3(0 - 20) = 44 + 5 - 60 = -11$$

**Cofactor expansion along column 1.** The signs down the column are $+, -, +$, and the middle entry is $0$, so its term vanishes without computing the minor.

$$\\det A = 2 \\begin{vmatrix} 4 & 1 \\\\ 2 & 6 \\end{vmatrix} - 0 + 5 \\begin{vmatrix} 1 & 3 \\\\ 4 & 1 \\end{vmatrix} = 2(22) + 5(1 - 12) = 44 - 55 = -11$$

Three recipes, one number. The column expansion was the least work because of the zero, which is the practical rule for choosing a line to expand along. Each $2 \\times 2$ minor was evaluated by the diagonal product rule, $ad - bc$.

The determinant is nonzero, so $A$ is invertible, and its negative sign says the transformation reverses orientation while scaling volume by $11$. Set the tool to $3 \\times 3$ and run Sarrus, then each cofactor strategy, to watch these three groupings assemble symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `Common Mistakes`,
      content: `Determinants are mechanical, and the mistakes are mechanical too.

• **Losing the checkerboard sign** — the cofactor of $a_{1,2}$ carries a minus; along the first row the signs go $+, -, +$, and row $2$ starts with minus. Read the sign from the position, not from the habit of row $1$
• **Striking the wrong row or column** — the minor of $a_{i,j}$ is what remains after removing row $i$ and column $j$, both of them, every time
• **Applying Sarrus's rule to a $4 \\times 4$** — the rule is a $3 \\times 3$ accident; a $4 \\times 4$ determinant has twenty-four terms, and the diagonal pattern produces only eight
• **Forgetting the sign change on a row swap** — every exchange of two rows flips the sign; two swaps cancel
• **Scaling**: $\\det(2A) = 2^n \\det A$, not $2 \\det A$; doubling a $3 \\times 3$ matrix multiplies its determinant by eight
• **Adding determinants**: $\\det(A + B) \\neq \\det A + \\det B$ in general; the determinant is multiplicative, not additive
• **Confusing the determinant with the trace** — the [trace](!/linear-algebra/matrix/trace#1) is the sum of the diagonal, the determinant the product of the eigenvalues; a matrix with zero trace can be invertible, and one with zero determinant usually has non-zero trace
• **Expecting a determinant for a non-square matrix** — there is none; [rank](!/linear-algebra/matrix/rank#1) and [singular values](!/linear-algebra/decompositions/svd#3) take its place
• **Expanding when reduction is cheaper** — for anything larger than $3 \\times 3$, row reduce to triangular form and multiply the diagonal

The visualizer sizes every strategy card to the sizes it is valid for, which rules out the Sarrus mistake by construction, and its [sign pattern](!#the-sign-pattern) scene is there to prevent the first one.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj17: {
      title: `Related Concepts`,
      content: `[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — exists exactly when the determinant is non-zero, and the adjugate formula divides by it; the inverse tool's cofactor phase is this tool's expansion repeated for every entry.

**Cofactor and adjugate** — the signed minors, and the transposed matrix of them; the bridge from determinants to inverses.

[Cross product](!/linear-algebra/visual-tools/vector-cross-product) — a symbolic $3 \\times 3$ determinant expanded along its first row.

[LU decomposition and row reduction](!/linear-algebra/visual-tools/lu-decomposition) — the practical way to compute a large determinant: the product of the diagonal of $U$, with a sign from the swaps.

[Rank](!/linear-algebra/visual-tools/matrix-rank) — full rank for a square matrix is the same as non-zero determinant.

[Linear transformations](!/linear-algebra/visual-tools/linear-transformation-2d) — the determinant as area scaling and orientation.

[Eigenvalues](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — the determinant is their product, and the characteristic polynomial is a determinant.

[Trace](!/linear-algebra/visual-tools/matrix-trace) — the other basic scalar of a square matrix, the sum of the diagonal entries and of the eigenvalues.

[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — leaves the determinant unchanged, which is why column expansion works.

[Cramer's rule](!/linear-algebra/visual-tools/cramers-rule) — solving systems by ratios of determinants.

**Permutations** — the general definition of the determinant is a signed sum over them, one term per permutation.

[Span and independence](!/linear-algebra/visual-tools/span-independence-2d) — the determinant test for whether a set of vectors is dependent.`,
      before: ``,
      after: ``,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     Built by calling each strategy's own scene builder (STRATEGIES from
     determinants/strategies/index.js, the same registry DeterminantWrapper
     uses) and rendering one representative scene through frozenMatrixSvg.
     Overlays - the dashed diagonal axis, the chained diagonal arrows and the
     framed det(A) bracket - are not reproduced; the cell colouring carries the
     meaning on its own. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: determinantDiagrams[key], caption, text })

  const stateUnits = {
    'diagonal': unit('diagonal', 'Diagonal product, main diagonal revealed',
      'A is 2&#215;2. The main diagonal, a<sub>1,1</sub> and a<sub>2,2</sub>, is highlighted in blue; ' +
      'its product is the first term. The anti-diagonal has not been visited yet and will be subtracted.'),
    'sarrus': unit('sarrus', 'Sarrus&#39;s rule, positive diagonal 2 of 3',
      'A is written as a 3&#215;5 layout with its first two columns repeated on the right, dimmed. ' +
      'The highlighted diagonal a<sub>1,2</sub>, a<sub>2,3</sub>, a<sub>3,1</sub> runs down-right and ' +
      'lands in the duplicated columns, which is what they are there for.'),
    'cofactor-row': unit('cofactor-row', 'Cofactor along row 1, term 2 of 3',
      'The pivot a<sub>1,2</sub> is highlighted; the rest of row 1 and column 2 are struck through and ' +
      'dimmed. The 2&#215;2 minor M<sub>1,2</sub> stands beside A, built from the surviving entries with ' +
      'their original indices. This term carries a minus sign, since 1 + 2 is odd.'),
    'cofactor-col': unit('cofactor-col', 'Cofactor along column 1, term 2 of 3',
      'The same construction walked down a column. The pivot is a<sub>2,1</sub>, row 2 and column 1 ' +
      'are struck, and the minor M<sub>2,1</sub> is shown alongside. Its sign is also minus, 2 + 1 being odd.'),
    'sign-pattern': unit('sign-pattern', 'The sign pattern at n = 4',
      'No entries, only signs: plus in the top-left corner, alternating along every row and down every ' +
      'column. Each cofactor term takes the sign of its pivot&#39;s position from this checkerboard.'),
  }


  /* ---- panel notes, passed into the component (Line 1) ----
     DeterminantWrapper takes an additive `explanations` prop (default null,
     so nothing changes when it is absent). Strategy notes are appended to the
     static caption every scene of that strategy shows; the sign-pattern note
     is appended to the step text of the cofactor strategies' sign-pattern
     scene. Those surfaces use dangerouslySetInnerHTML, so the notes are raw
     HTML with <a href="#slug"> anchors rather than markdown. */
  const GROUP_LINK = `<a href="#the-four-strategies" style="color:#1d4ed8;font-weight:600">all four strategies</a>`
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; ${GROUP_LINK}</div>`

  const explanations = {
    'diagonal': note('Two terms: main diagonal product minus anti-diagonal product. The base case every larger recipe reduces to.', 'diagonal-product', 'Learn more about the diagonal product'),
    'sarrus': note('Six diagonal products on the augmented layout, three added and three subtracted. A 3 &#215; 3 rule only.', 'sarrus-rule', 'Learn more about Sarrus&#39;s rule'),
    'cofactor-row': note('Walk one row: entry times the determinant of its minor, with the checkerboard sign, summed.', 'cofactor-along-a-row', 'Learn more about expanding along a row'),
    'cofactor-col': note('The same sum walked down a column. It agrees with the row version because det(A&#7488;) = det(A).', 'cofactor-along-a-column', 'Learn more about expanding along a column'),
    'sign-pattern': note('(&minus;1)<sup>i+j</sup> drawn out: plus where row and column parity agree, minus where they differ.', 'the-sign-pattern', 'Learn more about the sign pattern'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the determinant of a matrix?",
      answer: "The determinant is a single number attached to a square matrix. Geometrically it is the factor by which the matrix scales area or volume, with a negative sign when the matrix reverses orientation. Algebraically it is a signed sum of products of entries, one product for each permutation of the columns: two terms for a 2×2 matrix, six for a 3×3, and n! in general. It is zero exactly when the matrix is singular."
    },
    obj2: {
      question: "How does cofactor expansion work?",
      answer: "Choose a row or column. For each entry in it, strike that entry's row and column, compute the determinant of the smaller matrix that remains (the minor), attach the sign (−1) to the power of the row number plus the column number, and multiply by the entry. Add the results. Expanding along a line with many zeros saves work, and row and column expansions always agree because the determinant of the transpose equals the determinant of the matrix."
    },
    obj3: {
      question: "What is Sarrus's rule and when does it apply?",
      answer: "Sarrus's rule computes a 3×3 determinant by repeating the first two columns to the right of the matrix and reading six diagonals of three entries: the three running down to the right are multiplied and added, the three running up to the right are multiplied and subtracted. It applies to 3×3 matrices only. A 4×4 determinant has twenty-four terms, and the diagonal pattern does not produce them."
    },
    obj4: {
      question: "Why does the sign alternate in cofactor expansion?",
      answer: "The sign of each term is (−1) to the power of its row plus column, which forms a checkerboard: plus at (1,1), minus at (1,2), plus at (1,3), and so on. It comes from the position of the entry, not from its value. The alternation is what makes the expansion agree with the definition of the determinant as a signed sum over permutations, where each transposition of columns flips the sign."
    },
    obj5: {
      question: "What does a zero determinant mean?",
      answer: "A zero determinant means the matrix is singular: it has no inverse, its columns are linearly dependent, and the transformation it represents flattens space onto a line or plane, so area or volume is scaled to zero. A system of equations with a zero coefficient determinant has either no solution or infinitely many, never exactly one, and zero is then an eigenvalue of the matrix."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Determinant Visualizer",
      "description": "Step-by-step symbolic visualizer for the determinant of a 2×2 up to 5×5 matrix: diagonal product, Sarrus's rule, and cofactor expansion along any row or column, with the checkerboard sign pattern drawn out.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-determinant",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Symbolic determinant animation for square matrices from 2×2 to 5×5",
        "Four strategies: diagonal product, Sarrus's rule, cofactor expansion along a row, cofactor expansion along a column",
        "Choice of expansion row or column for the cofactor strategies",
        "Checkerboard sign pattern scene",
        "Struck rows and columns with the minor drawn alongside the original, keeping original indices",
        "Play, pause, step and replay controls with speed selector",
        "Step-by-step explanation log with a running formula"
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
      "keywords": keyWords.join(", ")
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
          "name": "Linear Algebra",
          "item": "https://www.learnmathclass.com/linear-algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Matrix Determinant",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-determinant"
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


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-matrix-determinant'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Determinant Visualizer | Cofactor Expansion, Sarrus's Rule, Sign Pattern",
        description: "Visualize the determinant of a 2×2 up to 5×5 matrix step by step: diagonal product, Sarrus's rule, and cofactor expansion along any row or column, all symbolic.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-determinant",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="22" x2="10" y2="58" stroke="#B5D4F4" stroke-width="1.6"/><line x1="46" y1="22" x2="46" y2="58" stroke="#B5D4F4" stroke-width="1.6"/><rect x="14" y="25" width="9" height="9" fill="#EF9F27" stroke="#854F0B" stroke-width="1.2"/><rect x="23" y="25" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="32" y="25" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="14" y="34" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="23" y="34" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="32" y="34" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="14" y="43" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="23" y="43" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="32" y="43" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><line x1="14" y1="29.5" x2="41" y2="29.5" stroke="#412402" stroke-width="1"/><line x1="18.5" y1="25" x2="18.5" y2="52" stroke="#412402" stroke-width="1"/><path d="M 50 40 L 58 40 M 56 38 L 58 40 L 56 42" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><rect x="61" y="33" width="14" height="14" fill="#97C459" stroke="#27500A" stroke-width="1"/><text x="68" y="43" font-family="Georgia,serif" font-size="8" fill="#173404" text-anchor="middle" font-style="italic">|A|</text><text x="40" y="70" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">+ &#8722; +</text></svg>`,
        name: "Determinant Visualizer",
        hubDescription: "Watch a determinant assemble term by term for any square matrix from 2×2 to 5×5. Four strategies show the same number four ways: the diagonal product at 2×2, Sarrus's rule lighting six diagonals on an augmented layout at 3×3, and cofactor expansion along any row or any column you choose, each term striking a row and a column, drawing the minor alongside the original and attaching the checkerboard sign. The sign pattern gets a scene of its own, a running formula grows in the step log, and the page explains why the shortcut has no 4×4 version.",
        category: 'Matrices',
        subCategory: 'Properties'
      }
    }
  }
}

export default function DeterminantVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections=[
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-four-strategies'),
    stateRow('obj3', 'diagonal-product', 'diagonal'),
    stateRow('obj4', 'sarrus-rule', 'sarrus'),
    stateRow('obj5', 'cofactor-along-a-row', 'cofactor-row'),
    stateRow('obj6', 'cofactor-along-a-column', 'cofactor-col'),
    stateRow('obj7', 'the-sign-pattern', 'sign-pattern'),
    plain('obj8', 'reading-the-scene-player'),
    plain('obj9', 'choosing-the-size'),
    plain('obj10', 'what-the-determinant-is'),
    plain('obj11', 'key-properties'),
    plain('obj12', 'why-it-matters'),
    plain('obj13', 'when-the-determinant-is-zero'),
    plain('obj14', 'geometric-meaning'),
    plain('obj15', 'worked-example'),
    plain('obj16', 'common-mistakes'),
    plain('obj17', 'related-concepts'),
  ]


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
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Determinant</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <DeterminantWrapper
     title=""
     defaultSize={3}
     explanations={explanations}
   />
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
   <br/>
   <RelatedTools tools={relatedTools}/>
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
