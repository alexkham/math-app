import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import LeastSquaresWrapper from '../../../../app/components/linear-algebra copy/matrix/LeastSquaresWrapper'
import leastSquaresDiagrams from '../../../../app/components/linear-algebra copy/matrix/leastSquaresDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'least squares',
    'least squares solution',
    'normal equations',
    'projection onto column space',
    'projection matrix',
    'least squares line fit',
    'linear regression linear algebra',
    'least squares calculator step by step',
    'A transpose A x = A transpose b',
    'residual orthogonal to column space',
    'best fit line matrix',
    'projection onto a subspace',
    'overdetermined system',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Least-squares solution](!/linear-algebra/definitions#least_squares_solution) — the $\\hat{\\mathbf{x}}$ that minimizes $\\|A\\mathbf{x} - \\mathbf{b}\\|$ when $A\\mathbf{x} = \\mathbf{b}$ has no exact solution.

[Normal equations](!/linear-algebra/orthogonality/least-squares#3) — $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$; always consistent, uniquely solvable when the columns of $A$ are independent.

[Projection](!/linear-algebra/definitions#vector_projection) — $\\mathbf{p} = A\\hat{\\mathbf{x}}$, the point of the [column space](!/linear-algebra/definitions#column_space) closest to $\\mathbf{b}$.

[Residual](!/linear-algebra/definitions#residual) — $\\mathbf{e} = \\mathbf{b} - \\mathbf{p}$, perpendicular to every column of $A$: $A^T\\mathbf{e} = \\mathbf{0}$.

[Projection matrix](!/linear-algebra/definitions#projection_matrix) — $P = A(A^TA)^{-1}A^T$, with $P\\mathbf{b} = \\mathbf{p}$; symmetric and idempotent, $P^2 = P$.

[Design matrix](!/linear-algebra/definitions#design_matrix) — for fitting $b = C + Dt$, the [matrix](!/linear-algebra/definitions#matrix) with a column of ones and a column of $t$ values, one row per data point.

[Overdetermined system](!/linear-algebra/definitions#overdetermined_system) — more equations than unknowns; generally inconsistent, and the setting for least squares.

[Sum of squared errors](!/linear-algebra/orthogonality/least-squares#10) — $\\|\\mathbf{e}\\|^2$, the quantity least squares minimizes.

[Orthogonal decomposition](!/linear-algebra/definitions#orthogonal_decomposition) — $\\mathbf{b} = \\mathbf{p} + \\mathbf{e}$ with $\\mathbf{p} \\in C(A)$ and $\\mathbf{e} \\in N(A^T)$, so $\\|\\mathbf{b}\\|^2 = \\|\\mathbf{p}\\|^2 + \\|\\mathbf{e}\\|^2$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1) and a right-hand side, then watch $\\mathbf{b}$ get projected onto the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2).

• Use the **Preset** pills for seven problems: a line through three points, a line through four, a parabola through four, projection onto a single line, projection onto a coordinate plane, a consistent system with zero residual, and a matrix with dependent columns
• Use the two **Size** steppers for two to four equations and one to three unknowns; **Shuffle data** builds a polynomial design matrix with random data
• Edit any entry of $A$ or of $\\mathbf{b}$ directly; $\\mathbf{b}$ is the amber column
• Hover the **?** icon for a reminder of why the residual must be perpendicular to the columns
• Press play or step manually; the step log on the right keeps every stage

When $A$ is a design matrix the captions translate everything into the fit: the fitted line or parabola, the fitted values at the data points, and the errors.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Consistency** — $[A \\mid \\mathbf{b}]$ row reduced; a [pivot](!/linear-algebra/linear-systems/echelon-form#4) in the last column means no exact solution
• **Normal equations** — $A^TA$ and $A^T\\mathbf{b}$ formed as products, with their meaning as [dot products](!/linear-algebra/vectors/dot-product#1)
• **Dependent columns** — if $A^TA$ is singular the run stops with an explanation
• **Solve** — $[A^TA \\mid A^T\\mathbf{b}]$ row reduced to $\\hat{\\mathbf{x}}$; for a single column this is $\\mathbf{a}^T\\mathbf{b} / \\mathbf{a}^T\\mathbf{a}$
• **Project** — $\\mathbf{p} = A\\hat{\\mathbf{x}}$ as a combination of the columns, compared with $\\mathbf{b}$
• **Residual** — $\\mathbf{e} = \\mathbf{b} - \\mathbf{p}$, its length, $A^T\\mathbf{e} = \\mathbf{0}$, and the Pythagorean split of $\\|\\mathbf{b}\\|^2$
• **Projection matrix** — $P = A(A^TA)^{-1}A^T$ with $P\\mathbf{b} = \\mathbf{p}$, $P^2 = P$ and [trace](!/linear-algebra/matrix/trace#1) equal to the [rank](!/linear-algebra/matrix/rank#1)
• **Done** — the fitted curve when there is one, and the sum of squared errors`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one step with the arithmetic in the caption.

• $\\mathbf{b}$ is amber throughout, in the matrices and in the input grid
• $\\hat{\\mathbf{x}}$ is accent, $\\mathbf{p}$ is the target, and $\\mathbf{e}$ is secondary
• Products that must come out zero, such as $A^T\\mathbf{e}$, are drawn in grey with the target highlight
• In the consistency scene the pivot that lands in the last column is muted, since it is the mark of an inconsistent system
• The projection matrix's diagonal is highlighted; its trace is the rank of $A$
• Fractions appear as fractions: the normal equations of integer problems have rational solutions`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Problem`,
      content: `The seven presets each make a different point.

• **Line through 3 points** — $(0, 6)$, $(1, 0)$, $(2, 0)$; the best line is $b = 5 - 3t$ with errors $(1, -2, 1)$, the classic textbook example
• **Line through 4 points** — four data points, one more equation, the same procedure
• **Parabola through 4 points** — three unknowns $C, D, E$ and a design matrix with columns $1, t, t^2$
• **Projection onto a line** — a single column $\\mathbf{a}$, where the normal equation is the scalar $\\mathbf{a}^T\\mathbf{a}\\,\\hat{x} = \\mathbf{a}^T\\mathbf{b}$
• **Projection onto a plane** — columns $\\mathbf{e}_1, \\mathbf{e}_2$; the projection keeps the first two coordinates and the residual is the third
• **b in the column space** — a consistent system; least squares returns the exact solution and $\\mathbf{e} = \\mathbf{0}$
• **Dependent columns** — $A^TA$ is singular and the run stops

Shuffle keeps the design-matrix structure and randomizes the data, so the fitted-curve reading stays available.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Least Squares Is`,
      content: `A system $A\\mathbf{x} = \\mathbf{b}$ with more equations than unknowns is usually inconsistent: $\\mathbf{b}$ is not in the column space of $A$, so no $\\mathbf{x}$ makes $A\\mathbf{x}$ equal to $\\mathbf{b}$. Least squares replaces the impossible demand with a possible one: choose $\\hat{\\mathbf{x}}$ to make the error $\\mathbf{e} = \\mathbf{b} - A\\hat{\\mathbf{x}}$ as short as possible.

The shortest error is geometric. The set of all $A\\mathbf{x}$ is the column space, and the point of a [subspace](!/linear-algebra/vector-spaces/subspaces#1) closest to $\\mathbf{b}$ is the orthogonal projection $\\mathbf{p}$ of $\\mathbf{b}$ onto it. So $A\\hat{\\mathbf{x}} = \\mathbf{p}$, and the error $\\mathbf{e} = \\mathbf{b} - \\mathbf{p}$ is perpendicular to the whole column space, in particular to each column:

$$A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0} \\qquad\\Longleftrightarrow\\qquad A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$$

These are the normal equations. They are always consistent, because $A^T\\mathbf{b}$ is always in the column space of $A^TA$, and when the columns of $A$ are independent $A^TA$ is invertible and the solution is unique:

$$\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}, \\qquad \\mathbf{p} = A(A^TA)^{-1}A^T\\mathbf{b} = P\\mathbf{b}$$

The matrix $P$ projects every vector of $\\mathbb{R}^m$ onto the column space. It is symmetric, satisfies $P^2 = P$, and $I - P$ projects onto the [orthogonal complement](!/linear-algebra/orthogonality#3), the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces#5), where the residual lives.

Fitting a line $b = C + Dt$ to data points $(t_i, b_i)$ is exactly this problem with $A$ having a column of ones and a column of the $t_i$: each data point is one equation $C + Dt_i = b_i$, the column space is the set of all lines evaluated at the $t_i$, and the least-squares line minimizes the sum of squared vertical errors. Polynomial fits use more columns; the picture is the same. For the theory, see the [least squares page](!/linear-algebra/orthogonality/least-squares) and the [projections page](!/linear-algebra/orthogonality/projections).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts about least squares and projection.

• **Existence**: the normal equations always have a solution; **uniqueness** needs independent columns
• **Residual orthogonality**: $A^T\\mathbf{e} = \\mathbf{0}$, so $\\mathbf{e}$ lies in the left null space of $A$
• **Pythagoras**: $\\|\\mathbf{b}\\|^2 = \\|\\mathbf{p}\\|^2 + \\|\\mathbf{e}\\|^2$
• **Exact case**: if $\\mathbf{b} \\in C(A)$ then $\\hat{\\mathbf{x}}$ solves $A\\mathbf{x} = \\mathbf{b}$ exactly and $\\mathbf{e} = \\mathbf{0}$
• **Projection matrix**: $P = A(A^TA)^{-1}A^T$ is symmetric, $P^2 = P$, $\\operatorname{rank} P = \\operatorname{tr} P = n$, and $I - P$ is the complementary projection
• **Single column**: $\\hat{x} = \\mathbf{a}^T\\mathbf{b} / \\mathbf{a}^T\\mathbf{a}$ and $P = \\mathbf{a}\\mathbf{a}^T / \\mathbf{a}^T\\mathbf{a}$
• **Orthonormal columns**: if $A^TA = I$ then $\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ and $P = AA^T$, with no inverse to compute
• **Line fits**: with a column of ones, the errors sum to zero and the fitted line passes through the mean point $(\\bar t, \\bar b)$
• **Conditioning**: $A^TA$ squares the [condition number](!/linear-algebra/decompositions/svd#9) of $A$; QR or the SVD solve the same problem more stably
• **Dependent columns**: $\\mathbf{p}$ is still unique, but $\\hat{\\mathbf{x}}$ is not; the pseudoinverse picks the shortest`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Least squares is the most used computation in applied mathematics.

• **Regression**: every linear regression is a least-squares projection of the response onto the [span](!/linear-algebra/vector-spaces/span#1) of the predictors
• **Curve fitting and calibration**: polynomial, exponential (after a log) and trigonometric fits are all design-matrix problems
• **Measurement and surveying**: more measurements than unknowns, reconciled by minimizing squared discrepancies; Gauss invented the method for exactly this
• **Signal processing**: filters and predictors are chosen by least squares; the projection theorem is the orthogonality principle
• **Machine learning**: the closed-form solution for linear models, and the inner loop of many iterative methods
• **Geometry**: the projection onto a subspace is the nearest-point map, the foundation of Gram–Schmidt, QR and the four-subspace picture
• **Statistics**: with independent errors of equal variance, the least-squares estimate is the best linear unbiased one`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Fit a line $b = C + Dt$ to the points $(0, 6)$, $(1, 0)$, $(2, 0)$.

**Set up.** Each point gives one equation: $C = 6$, $C + D = 0$, $C + 2D = 0$. So

$$A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix}, \\qquad \\mathbf{b} = \\begin{pmatrix} 6 \\\\ 0 \\\\ 0 \\end{pmatrix}$$

The three equations are inconsistent: no line passes through all three points.

**Normal equations.** $A^TA = \\begin{pmatrix} 3 & 3 \\\\ 3 & 5 \\end{pmatrix}$ and $A^T\\mathbf{b} = \\begin{pmatrix} 6 \\\\ 0 \\end{pmatrix}$, so $3C + 3D = 6$ and $3C + 5D = 0$.

**Solve.** Subtracting, $2D = -6$, so $D = -3$ and $C = 5$. The best line is $b = 5 - 3t$.

**Project.** $\\mathbf{p} = A\\hat{\\mathbf{x}} = (5, 2, -1)$, the heights of the line at $t = 0, 1, 2$.

**Residual.** $\\mathbf{e} = \\mathbf{b} - \\mathbf{p} = (1, -2, 1)$, with $\\|\\mathbf{e}\\|^2 = 6$. Check: $(1, 1, 1)\\cdot\\mathbf{e} = 0$ and $(0, 1, 2)\\cdot\\mathbf{e} = 0$, so $A^T\\mathbf{e} = \\mathbf{0}$. And $\\|\\mathbf{b}\\|^2 = 36 = 30 + 6 = \\|\\mathbf{p}\\|^2 + \\|\\mathbf{e}\\|^2$.

**Projection matrix.** $(A^TA)^{-1} = \\frac{1}{6}\\begin{pmatrix} 5 & -3 \\\\ -3 & 3 \\end{pmatrix}$, so $P = A(A^TA)^{-1}A^T = \\frac{1}{6}\\begin{pmatrix} 5 & 2 & -1 \\\\ 2 & 2 & 2 \\\\ -1 & 2 & 5 \\end{pmatrix}$, and $P\\mathbf{b} = (5, 2, -1) = \\mathbf{p}$. Its trace is $2$, the rank of $A$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Solving $A\\mathbf{x} = \\mathbf{b}$ by row reduction and reading a "solution"** — an inconsistent system has none; the least-squares solution comes from the normal equations, not from $[A \\mid \\mathbf{b}]$
• **Writing $AA^T$ instead of $A^TA$** — the normal equations use $A^TA$, which is $n \\times n$ and matches the number of unknowns
• **Forgetting to multiply $\\mathbf{b}$ by $A^T$** — the right-hand side of the normal equations is $A^T\\mathbf{b}$, not $\\mathbf{b}$
• **Expecting $\\hat{\\mathbf{x}}$ to satisfy the original equations** — it satisfies them only when $\\mathbf{b}$ is in the column space; otherwise $A\\hat{\\mathbf{x}} = \\mathbf{p} \\neq \\mathbf{b}$
• **Measuring errors perpendicular to the line** — least squares for $b = C + Dt$ minimizes vertical errors in $b$, not distances to the line
• **Using dependent columns** — $A^TA$ is then singular and $\\hat{\\mathbf{x}}$ is not unique, though $\\mathbf{p}$ still is
• **Computing $(A^TA)^{-1}$ when the columns are orthonormal** — then $A^TA = I$ and the inverse is unnecessary`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Vector projection](!/linear-algebra/visual-tools/vector-projection) — the single-column case, $\\mathbf{p} = (\\mathbf{a}^T\\mathbf{b} / \\mathbf{a}^T\\mathbf{a})\\,\\mathbf{a}$; the projection tool shows it in $\\mathbb{R}^2$.

[Four fundamental subspaces](!/linear-algebra/visual-tools/four-fundamental-subspaces) — $\\mathbf{b}$ splits into a column-space part $\\mathbf{p}$ and a left-null part $\\mathbf{e}$.

[Linear system solutions](!/linear-algebra/visual-tools/linear-system-solutions) — the consistency check is the same row reduction; least squares takes over where it fails.

[Gram–Schmidt and QR](!/linear-algebra/visual-tools/gram-schmidt) — orthonormal columns make $A^TA = I$, and $A = QR$ turns the normal equations into $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — the pseudoinverse $A^+ = V\\Sigma^+U^T$ gives the least-squares solution even with dependent columns.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — $(A^TA)^{-1}$, computed here by row reduction.

[Symmetric and projection matrices](!/linear-algebra/visual-tools/projection-2d) — $P$ is symmetric with eigenvalues $0$ and $1$.

**Regression and statistics** — the same computation with a different vocabulary.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `No Exact Solution`,
      content: `The frozen picture below shows the default preset's [augmented matrix](!/linear-algebra/linear-systems#3) $[A \\mid \\mathbf{b}]$ reduced, with a pivot in the last column: one row reads $0 = 1$, so no line passes through the three points.

That failure is what least squares is for.`,
      before: ``,
      after: `A pivot in the augmented column means $\\mathbf{b}$ is not a combination of the columns of $A$: it lies outside the column space, which here is a plane in $\\mathbb{R}^3$. Three points determine a line only if they happen to be collinear; three generic points do not, and three equations in two unknowns generally have no solution.

The consistency check also tells the tool what to expect. When no pivot lands in the last column the least-squares solution will be exact and the residual zero, which the consistent preset shows.`,
      link: '',
    },
    obj12: {
      title: `The Normal Equations`,
      content: `The frozen picture below shows $A^TA = \\begin{pmatrix} 3 & 3 \\\\ 3 & 5 \\end{pmatrix}$ and $A^T\\mathbf{b} = (6, 0)$ for the default preset, formed as the two products $A^T \\cdot A$ and $A^T \\cdot \\mathbf{b}$.

Each entry is a dot product of columns: the $3$ in the corner is the column of ones dotted with itself, the count of data points.`,
      before: ``,
      after: `Multiplying the inconsistent system through by $A^T$ produces a square system that is always solvable, and that is not a trick: it is the statement that the residual must be perpendicular to every column. For a line fit the two equations say the errors sum to zero and the errors are uncorrelated with $t$.

$A^TA$ is symmetric and positive semidefinite, and positive definite exactly when the columns are independent. Its entries, the dot products of the columns, are why highly correlated predictors make regression unstable: nearly parallel columns make $A^TA$ nearly singular.`,
      link: '',
    },
    obj13: {
      title: `Solving for x-hat`,
      content: `The frozen picture below shows $[A^TA \\mid A^T\\mathbf{b}]$ reduced to $\\hat{\\mathbf{x}} = (5, -3)$: the best line is $b = 5 - 3t$.

Two equations, two unknowns, and a unique answer, unlike the original three equations.`,
      before: ``,
      after: `The normal equations are a small square system, and any method solves them: row reduction as here, the $2 \\times 2$ inverse formula, or Cramer's rule. For larger problems the standard practice is to avoid forming $A^TA$ at all and use a QR factorization of $A$, which gives the same $\\hat{\\mathbf{x}}$ with less loss of precision.

The solution has a statistical reading. With a column of ones, $D$ is the covariance of $t$ and $b$ divided by the variance of $t$, and $C$ makes the line pass through the mean point. Here the mean point is $(1, 2)$ and indeed $5 - 3\\cdot 1 = 2$.`,
      link: '',
    },
    obj14: {
      title: `The Residual Is Perpendicular`,
      content: `The frozen picture below shows $\\mathbf{b} - \\mathbf{p} = \\mathbf{e} = (1, -2, 1)$ for the default preset, and $A^T\\mathbf{e} = \\mathbf{0}$.

The residual is the part of $\\mathbf{b}$ the columns cannot reach, and it is perpendicular to everything they can.`,
      before: ``,
      after: `Perpendicularity is the defining property of the projection, and it is what makes $\\mathbf{p}$ the closest point: for any other point $A\\mathbf{x}$ of the column space, $\\mathbf{b} - A\\mathbf{x} = \\mathbf{e} + (\\mathbf{p} - A\\mathbf{x})$ with the two parts perpendicular, so by Pythagoras its length exceeds $\\|\\mathbf{e}\\|$.

The residual lives in the left null space of $A$, the orthogonal complement of the column space. Its length is the minimum of $\\|A\\mathbf{x} - \\mathbf{b}\\|$, and its square, $6$ here, is the sum of squared errors that the fitted line minimizes.`,
      link: '',
    },
    obj15: {
      title: `The Projection Matrix`,
      content: `The frozen picture below shows $P = A(A^TA)^{-1}A^T$ for the default preset, a $3 \\times 3$ matrix of sixths, applied to $\\mathbf{b}$ to give $\\mathbf{p} = (5, 2, -1)$ directly.

$P$ projects every [vector](!/linear-algebra/vectors#1) of $\\mathbb{R}^3$ onto the plane spanned by the columns of $A$.`,
      before: ``,
      after: `$P$ is symmetric, because projection is its own transpose, and idempotent, $P^2 = P$, because projecting a vector already in the plane leaves it alone. Its eigenvalues are $1$ on the column space and $0$ on the left null space, so its trace, the sum of the eigenvalues, is the dimension of the column space, $2$.

$I - P$ is the other projection, onto the left null space, and $(I - P)\\mathbf{b} = \\mathbf{e}$. The two together are the orthogonal decomposition of $\\mathbb{R}^m$ that the four-subspace picture promises.`,
      link: '',
    },
    obj16: {
      title: `Projection onto a Line`,
      content: `With a single column $\\mathbf{a}$ the normal equation is the [scalar](!/linear-algebra/vectors#1) $\\mathbf{a}^T\\mathbf{a}\\,\\hat{x} = \\mathbf{a}^T\\mathbf{b}$. The frozen picture below shows the one-column preset, $\\mathbf{a} = (1, 2, 2)$ and $\\mathbf{b} = (3, 3, 3)$: $9\\hat{x} = 15$, so $\\hat{x} = 5/3$.

The projection is $\\mathbf{p} = \\frac{5}{3}\\mathbf{a}$ and the residual $(4/3, -1/3, -1/3)$ is perpendicular to $\\mathbf{a}$.`,
      before: ``,
      after: `This is the vector-projection formula $\\mathbf{p} = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\mathbf{a}\\cdot\\mathbf{a}}\\mathbf{a}$, and the projection matrix is $P = \\mathbf{a}\\mathbf{a}^T / \\mathbf{a}^T\\mathbf{a}$, a rank-one matrix. Everything in the general case is this formula with a matrix in place of the vector: $(A^TA)^{-1}$ replaces division by $\\mathbf{a}^T\\mathbf{a}$.

When the columns of $A$ are orthogonal, the general projection is just the sum of the projections onto each column separately; that is why orthonormal bases make least squares trivial, and why Gram–Schmidt is worth doing first.`,
      link: '',
    },
    obj17: {
      title: `When the Columns Are Dependent`,
      content: `The dependent preset has columns $(1, 2, 3)$ and $(2, 4, 6)$, one twice the other. The frozen picture below shows $A^TA = \\begin{pmatrix} 14 & 28 \\\\ 28 & 56 \\end{pmatrix}$ reducing to a single pivot: singular, and the run stops.

The projection of $\\mathbf{b}$ onto the column space, a line, still exists; a unique $\\hat{\\mathbf{x}}$ does not.`,
      before: ``,
      after: `$A^TA$ is invertible exactly when $A$ has independent columns, because $A^TA\\mathbf{x} = \\mathbf{0}$ implies $\\|A\\mathbf{x}\\|^2 = \\mathbf{x}^TA^TA\\mathbf{x} = 0$, so $A\\mathbf{x} = \\mathbf{0}$, and the two matrices have the same null space. With dependent columns many $\\hat{\\mathbf{x}}$ give the same $\\mathbf{p}$, differing by null-space vectors.

The practical fixes are to drop a redundant column, or to use the pseudoinverse, which chooses the $\\hat{\\mathbf{x}}$ of smallest length. In statistics the situation is called collinearity, and the nearly-dependent case is the more common and more dangerous one.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from LeastSquaresWrapper's own buildScenes on the default preset
     (and the one-column and dependent presets for their special scenes) and
     rendered through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: leastSquaresDiagrams[key], caption, text })

  const stateUnits = {
    consistency: unit('consistency', 'Inconsistent system, frozen',
      '[A | b] for the points (0, 6), (1, 0), (2, 0), reduced: a pivot in the last column. No line passes through ' +
      'all three points, so least squares takes over.'),
    normal: unit('normal', 'Normal equations, frozen',
      'A&#7488;A = [3, 3; 3, 5] and A&#7488;b = (6, 0), formed as products. Each entry is a dot product of columns: ' +
      'the 3 in the corner counts the data points.'),
    solve: unit('solve', 'Solving for x&#770;, frozen',
      '[A&#7488;A | A&#7488;b] reduced to x&#770; = (5, &minus;3): the best line is b = 5 &minus; 3t. Two equations, two ' +
      'unknowns, one answer.'),
    residual: unit('residual', 'The residual, frozen',
      'b &minus; p = (1, &minus;2, 1), of length &radic;6, and A&#7488;e = 0: the error is perpendicular to both columns. ' +
      '|b|&#178; = 36 = 30 + 6.'),
    projmatrix: unit('projmatrix', 'Projection matrix, frozen',
      'P = A(A&#7488;A)&#8315;&#185;A&#7488;, a matrix of sixths, applied to b gives p = (5, 2, &minus;1) at once. ' +
      'Symmetric, P&#178; = P, trace 2.'),
    line: unit('line', 'Projection onto a line, frozen',
      'One column a = (1, 2, 2), b = (3, 3, 3): the normal equation is 9x&#770; = 15, x&#770; = 5/3. ' +
      'The vector-projection formula a&#7488;b / a&#7488;a in matrix clothing.'),
    singular: unit('singular', 'Dependent columns, frozen',
      'Columns (1, 2, 3) and (2, 4, 6): A&#7488;A = [14, 28; 28, 56] has one pivot. The projection exists but ' +
      'x&#770; is not unique, and the run stops.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     LeastSquaresWrapper accepts an explanations prop keyed by scene phase:
     intro, consistency, normal, singular, solve, project, residual,
     projmatrix, done. Captions render with dangerouslySetInnerHTML, so
     these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-least-squares-is" style="color:#1d4ed8;font-weight:600">what least squares is</a></div>`

  const explanations = {
    intro: note('Ax = b has no solution; make Ax as close to b as possible.', 'no-exact-solution', 'Learn more about the setup'),
    consistency: note('A pivot in the last column: b is outside the column space.', 'no-exact-solution', 'Learn more about consistency'),
    normal: note('Residual perpendicular to every column, in matrix form.', 'the-normal-equations', 'Learn more about the normal equations'),
    singular: note('Dependent columns: p is unique, x&#770; is not.', 'when-the-columns-are-dependent', 'Learn more about the singular case'),
    solve: note('A small square system with a unique answer.', 'solving-for-x-hat', 'Learn more about solving'),
    project: note('p is the nearest point of the column space to b.', 'the-projection-matrix', 'Learn more about the projection'),
    residual: note('e = b &minus; p lies in the left null space; |b|&#178; = |p|&#178; + |e|&#178;.', 'the-residual-is-perpendicular', 'Learn more about the residual'),
    projmatrix: note('Symmetric, idempotent, trace equal to the rank.', 'the-projection-matrix', 'Learn more about P'),
    done: note('The sum of squared errors is the smallest any fit can achieve.', 'solving-for-x-hat', 'Learn more about the fit'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the least-squares solution of a linear system?",
      answer: "When Ax = b has no exact solution, the least-squares solution x̂ is the vector that makes the error b − Ax as short as possible. Geometrically, Ax̂ is the orthogonal projection of b onto the column space of A, the closest point of that space to b, and the error is perpendicular to the column space. Algebraically, x̂ solves the normal equations AᵀA x̂ = Aᵀb."
    },
    obj2: {
      question: "Where do the normal equations come from?",
      answer: "The error e = b − Ax̂ must be perpendicular to every column of A, because the projection of b onto the column space is the nearest point and the difference from the nearest point is perpendicular to the space. Perpendicular to every column means Aᵀe = 0, that is Aᵀ(b − Ax̂) = 0, which rearranges to AᵀA x̂ = Aᵀb. These equations are always consistent, and have a unique solution when the columns of A are independent."
    },
    obj3: {
      question: "How does least squares fit a line to data?",
      answer: "To fit b = C + Dt to points (tᵢ, bᵢ), write one equation per point, C + Dtᵢ = bᵢ. In matrix form A has a column of ones and a column of the tᵢ, x = (C, D) and b is the column of the bᵢ. The system is inconsistent unless the points are collinear, so solve the normal equations instead; the resulting line minimizes the sum of the squared vertical distances from the points to the line. Polynomial fits add columns of tᵢ², tᵢ³ and so on."
    },
    obj4: {
      question: "What is the projection matrix and what are its properties?",
      answer: "P = A(AᵀA)⁻¹Aᵀ projects any vector onto the column space of A, so P b is the projection p and (I − P) b is the residual. P is symmetric and idempotent, P² = P, its eigenvalues are 1 on the column space and 0 on the left null space, and its trace equals its rank, the number of independent columns of A. For a single column a it reduces to a aᵀ / aᵀa, and for orthonormal columns to A Aᵀ."
    },
    obj5: {
      question: "What happens if the columns of A are dependent?",
      answer: "Then AᵀA is singular and the normal equations have infinitely many solutions: many different x̂ produce the same projection p, differing by vectors in the null space of A. The projection itself is still unique, because the column space and the nearest point in it do not depend on how the space is described. The usual remedies are to remove a redundant column or to use the pseudoinverse, which selects the least-squares solution of smallest length."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Least Squares Visualizer",
      "description": "Step-by-step visualizer for least squares and projection onto a column space: the consistency check, the normal equations AᵀA x̂ = Aᵀb, the solution, the projection p = A x̂, the perpendicular residual, and the projection matrix, with line and parabola fits read off as curves.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/least-squares",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable matrix A (two to four rows, one to three columns) and right-hand side b, seven presets and random data",
        "Consistency check by row reducing [A | b]",
        "AᵀA and Aᵀb formed as matrix products and the normal equations solved by row reduction",
        "Projection p = A x̂ and residual e = b − p with Aᵀe = 0 and the Pythagorean check",
        "Projection matrix P = A(AᵀA)⁻¹Aᵀ with P b = p and P² = P",
        "Fitted line or parabola reported for design matrices",
        "Dependent-column case detected and explained",
        "Adjustable playback speed and scrollable step log"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2026-09-12",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "College",
      "keywords": "least squares, least squares solution, normal equations, projection onto column space, projection matrix, least squares line fit, linear regression linear algebra, least squares calculator step by step, A transpose A x = A transpose b, residual orthogonal to column space, best fit line matrix, projection onto a subspace, overdetermined system, linear algebra visualizer, interactive matrix tool"
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
          "name": "Least Squares",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/least-squares"
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
      relatedTools: getRelatedTools('linear-algebra-least-squares'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Least Squares Visualizer | Normal Equations and Projection Step by Step",
        description: "Solve a least-squares problem step by step: check consistency, form AᵀA x̂ = Aᵀb, solve, project b onto the column space, verify the residual is perpendicular, and build the projection matrix. Line and parabola fits read off as curves.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/least-squares",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="66" x2="70" y2="66" stroke="#B5D4F4" stroke-width="1"/><line x1="10" y1="66" x2="10" y2="12" stroke="#B5D4F4" stroke-width="1"/><line x1="14" y1="24" x2="66" y2="56" stroke="#85B7EB" stroke-width="2"/><circle cx="20" cy="20" r="2.6" fill="#FAC775"/><circle cx="36" cy="46" r="2.6" fill="#FAC775"/><circle cx="52" cy="54" r="2.6" fill="#FAC775"/><line x1="20" y1="20" x2="20" y2="27.7" stroke="#97C459" stroke-width="1.6" stroke-dasharray="2,1.5"/><line x1="36" y1="46" x2="36" y2="37.5" stroke="#97C459" stroke-width="1.6" stroke-dasharray="2,1.5"/><line x1="52" y1="54" x2="52" y2="47.4" stroke="#97C459" stroke-width="1.6" stroke-dasharray="2,1.5"/><text x="40" y="77" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">A&#7488;A x&#770; = A&#7488;b</text></svg>`,
        name: "Least Squares Visualizer",
        hubDescription: "Solve a least-squares problem with your own numbers exactly as it is done by hand: row reduce [A | b] to see that no exact solution exists, form the normal equations AᵀA x̂ = Aᵀb as matrix products, solve them, compute the projection p = A x̂, check that the residual b − p is perpendicular to every column, and build the projection matrix A(AᵀA)⁻¹Aᵀ. For design matrices the captions read off the fitted line or parabola and its errors. Presets include projection onto a line and a plane, a consistent system, and dependent columns.",
        category: 'Linear Systems',
        subCategory: 'Solving'
      }
    }
  }
}

export default function LeastSquaresVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-scenes-in-order'),
    stateRow('obj11', 'no-exact-solution', 'consistency'),
    stateRow('obj12', 'the-normal-equations', 'normal'),
    stateRow('obj13', 'solving-for-x-hat', 'solve'),
    stateRow('obj14', 'the-residual-is-perpendicular', 'residual'),
    stateRow('obj15', 'the-projection-matrix', 'projmatrix'),
    stateRow('obj16', 'projection-onto-a-line', 'line'),
    stateRow('obj17', 'when-the-columns-are-dependent', 'singular'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-problem'),
    plain('obj5', 'what-least-squares-is'),
    plain('obj6', 'key-properties'),
    plain('obj7', 'why-it-matters'),
    plain('obj8', 'worked-example'),
    plain('obj9', 'common-mistakes'),
    plain('obj10', 'related-concepts'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Least Squares and Projection</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <LeastSquaresWrapper
   defaultPreset='lineFit'
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
