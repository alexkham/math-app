import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import SubspacesWrapper from '../../../../app/components/linear-algebra copy/matrix/SubspacesWrapper'
import subspacesDiagrams from '../../../../app/components/linear-algebra copy/matrix/subspacesDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'four fundamental subspaces',
    'column space',
    'null space',
    'row space',
    'left null space',
    'column space calculator',
    'null space calculator',
    'basis of column space',
    'basis of null space',
    'rank nullity theorem',
    'orthogonal complement',
    'fundamental theorem of linear algebra',
    'row reduction subspaces',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Column space](!/linear-algebra/vector-spaces/fundamental-spaces#2) $C(A)$ — all combinations of the columns of $A$; the set of $\\mathbf{b}$ for which $A\\mathbf{x} = \\mathbf{b}$ is solvable. A [subspace](!/linear-algebra/definitions#subspace) of $\\mathbb{R}^m$ of [dimension](!/linear-algebra/definitions#dimension) $r$.

[Null space](!/linear-algebra/vector-spaces/fundamental-spaces#4) $N(A)$ — all solutions of $A\\mathbf{x} = \\mathbf{0}$. A subspace of $\\mathbb{R}^n$ of dimension $n - r$.

[Row space](!/linear-algebra/vector-spaces/fundamental-spaces#3) $C(A^T)$ — all combinations of the rows of $A$. A subspace of $\\mathbb{R}^n$ of dimension $r$.

[Left null space](!/linear-algebra/vector-spaces/fundamental-spaces#5) $N(A^T)$ — all solutions of $A^T\\mathbf{y} = \\mathbf{0}$, equivalently $\\mathbf{y}^TA = \\mathbf{0}$. A subspace of $\\mathbb{R}^m$ of dimension $m - r$.

[Rank](!/linear-algebra/matrix/rank#1) $r$ — the number of [pivots](!/linear-algebra/definitions#pivot) of $A$; the common dimension of the column and row spaces.

[Pivot columns](!/linear-algebra/linear-systems/echelon-form#4) — the columns of $A$ (not of $R$) at pivot positions; a [basis](!/linear-algebra/definitions#basis) of the column space.

**Special solutions** — one null-space [vector](!/linear-algebra/definitions#vector) per free column, with that free variable $1$ and the others $0$.

[Rank–nullity](!/linear-algebra/matrix/rank#6) — $r + \\dim N(A) = n$; applied to $A^T$, $r + \\dim N(A^T) = m$.

[Orthogonal complement](!/linear-algebra/definitions#orthogonal_complement) — $N(A) = C(A^T)^\\perp$ in $\\mathbb{R}^n$ and $N(A^T) = C(A)^\\perp$ in $\\mathbb{R}^m$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1) and watch one row reduction produce a [basis](!/linear-algebra/vector-spaces#2) for each of its four subspaces.

• Use the **Preset** pills for seven matrices: a $3 \\times 3$ of rank $2$ with every [subspace](!/linear-algebra/vector-spaces/subspaces#1) non-trivial, a rank-one matrix, wide and tall matrices of full rank, an invertible matrix, a $4 \\times 3$ of rank $2$, and the zero matrix
• Use the two **Size** steppers for any shape from $2 \\times 2$ to $4 \\times 4$, and **Shuffle** for a random matrix that usually carries a planted dependency
• Edit any entry directly
• Hover the **?** icon for a reminder of the four spaces and their dimensions
• Press play or step manually; the step log on the right keeps every stage

Each subspace scene shows a basis and, for the two null spaces, the product that proves the basis vectors are in the space. The last two scenes show the orthogonality between the pairs and the [dimension](!/linear-algebra/vector-spaces/dimension#1) count.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Row reduce** — $A \\to R$ with the [pivots](!/linear-algebra/linear-systems/echelon-form#4) and free columns marked; the rank $r$ is the number of pivots
• **Column space** — the pivot columns of the original $A$, with each free column expressed as a combination of them using the entries of $R$
• **Row space** — the non-zero rows of $R$
• **Null space** — one special solution per free column, scaled to integers, with $AN = 0$ shown as a matrix product
• **Left null space** — $A^T$ row reduced and its special solutions read off, with $A^TL = 0$ shown
• **Orthogonality** — the rows of $A$ times the null-space basis, and the column-space basis transposed times the left-null basis, both zero matrices
• **Done** — the four dimensions, the two rank–nullity counts, and what they say about solving $A\\mathbf{x} = \\mathbf{b}$

When a null space is trivial the scene says so and shows $\\{\\mathbf{0}\\}$ in place of a basis.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one subspace with the reasoning in the caption.

• Pivot positions in $R$ are accent; free columns are secondary throughout
• Column-space bases are accent, row-space bases primary, null-space bases secondary, left-null bases muted, so the four spaces keep their colours from scene to scene
• In the column-space scene the free columns of $A$ are greyed, since they are not part of the basis
• In the row-space scene the zero rows of $R$ are greyed
• Zero matrices in the products $AN$, $A^TL$ and the orthogonality checks are drawn in grey with the target highlight
• Basis vectors are scaled to small integers whenever possible`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The seven presets each make a different point.

• **$3 \\times 3$, rank $2$** — the third row is the sum of the first two; every subspace is a line or a plane, and the left-null vector $(1, 1, -1)$ records the dependency
• **Rank one** — $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\end{pmatrix}$; the null space is a plane in $\\mathbb{R}^3$, the left null space the line of $(2, -1)$
• **Wide $2 \\times 3$** — full row rank; the left null space is $\\{\\mathbf{0}\\}$ and $A\\mathbf{x} = \\mathbf{b}$ is solvable for every $\\mathbf{b}$
• **Tall $3 \\times 2$** — full column rank; the null space is $\\{\\mathbf{0}\\}$ and solutions, when they exist, are unique
• **Invertible** — both null spaces trivial, both other spaces the whole plane
• **$4 \\times 3$, rank $2$** — two dependent rows and one dependent column; the left null space is a plane in $\\mathbb{R}^4$
• **Zero** — rank $0$; the null spaces are everything and the column and row spaces are $\\{\\mathbf{0}\\}$

Shuffle plants a multiple of one row in another most of the time, so the random matrices are usually rank deficient.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Four Subspaces Are`,
      content: `An $m \\times n$ matrix $A$ maps $\\mathbb{R}^n$ to $\\mathbb{R}^m$, and four subspaces describe the map completely.

In the input space $\\mathbb{R}^n$: the **row space** $C(A^T)$, spanned by the rows of $A$, and the **null space** $N(A)$, the solutions of $A\\mathbf{x} = \\mathbf{0}$. In the output space $\\mathbb{R}^m$: the **column space** $C(A)$, spanned by the columns, and the **left null space** $N(A^T)$, the solutions of $A^T\\mathbf{y} = \\mathbf{0}$.

Row reduction to $R$ finds all four at once. The pivot columns of $A$ are a basis of the column space; the non-zero rows of $R$ are a basis of the row space; the special solutions, one per free column, are a basis of the null space; and reducing $A^T$ does the same for the left null space. The rank $r$, the number of pivots, is the dimension of both the column space and the row space, and the two null spaces have dimensions $n - r$ and $m - r$:

$$\\dim C(A) + \\dim N(A) = n, \\qquad \\dim C(A^T) + \\dim N(A^T) = m$$

The second half of the theorem is orthogonality. $A\\mathbf{x} = \\mathbf{0}$ says every row of $A$ is perpendicular to $\\mathbf{x}$, so the null space is the orthogonal complement of the row space in $\\mathbb{R}^n$; and $A^T\\mathbf{y} = \\mathbf{0}$ says every column is perpendicular to $\\mathbf{y}$, so the left null space is the orthogonal complement of the column space in $\\mathbb{R}^m$. The dimensions add up exactly as complements must.

Together: every $\\mathbf{x}$ in $\\mathbb{R}^n$ is a row-space part plus a null-space part; $A$ sends the null-space part to zero and maps the row space one-to-one onto the column space. That is the fundamental theorem of linear algebra. For the theory, see the [fundamental subspaces page](!/linear-algebra/vector-spaces/fundamental-spaces) and the [rank page](!/linear-algebra/matrix/rank).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts about the four subspaces of any $m \\times n$ matrix of rank $r$.

• **Dimensions**: $C(A)$ and $C(A^T)$ have dimension $r$; $N(A)$ has $n - r$; $N(A^T)$ has $m - r$
• **Row operations** preserve the row space and the null space, but change the column space; that is why column-space bases come from $A$ and row-space bases from $R$
• **Orthogonal complements**: $N(A) \\perp C(A^T)$ in $\\mathbb{R}^n$ and $N(A^T) \\perp C(A)$ in $\\mathbb{R}^m$, with dimensions adding to $n$ and $m$
• **Solvability**: $A\\mathbf{x} = \\mathbf{b}$ has a solution exactly when $\\mathbf{b} \\in C(A)$, equivalently when $\\mathbf{b} \\perp N(A^T)$
• **Uniqueness**: solutions are unique exactly when $N(A) = \\{\\mathbf{0}\\}$, that is $r = n$
• **Full row rank** $r = m$: solvable for every $\\mathbf{b}$; **full column rank** $r = n$: at most one solution; both: invertible
• **The map**: $A$ is one-to-one from $C(A^T)$ onto $C(A)$ and zero on $N(A)$
• **Transpose swaps the pairs**: the four subspaces of $A^T$ are the same four, with row and column spaces exchanged
• **Symmetric $A$**: row space equals column space and the two null spaces coincide`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The four subspaces are the vocabulary for everything about solving and approximating with a matrix.

• **Solving systems**: whether $A\\mathbf{x} = \\mathbf{b}$ has a solution, how many, and the structure of the solution set as a particular solution plus the null space
• **Least squares**: when $\\mathbf{b}$ is not in the column space, the best you can do is project it there; the error lies in the left null space
• **Rank and dependence**: the null space lists the dependencies among the columns, the left null space those among the rows
• **Networks and circuits**: for an incidence matrix, the null space holds potentials, the left null space holds loop currents, and the two conservation laws are the two orthogonality statements
• **Singular value decomposition**: $U$ and $V$ contain orthonormal bases of all four subspaces at once
• **Dimension counting**: rank–nullity is the theorem behind every "degrees of freedom" argument in linear models
• **Understanding a transformation**: what it kills, what it reaches, and the one-to-one part in between`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 3 \\\\ 3 & 6 & 4 \\end{pmatrix}$$

**Row reduce.** $R = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Pivots in columns $1$ and $3$, column $2$ free, rank $r = 2$.

**Column space.** Basis: columns $1$ and $3$ of $A$, $(1, 2, 3)$ and $(1, 3, 4)$. Column $2$ is $2$ times column $1$, as the entry $2$ in $R$ says. Dimension $2$, a plane in $\\mathbb{R}^3$.

**Row space.** Basis: $(1, 2, 0)$ and $(0, 0, 1)$, the non-zero rows of $R$. Dimension $2$, a plane in $\\mathbb{R}^3$.

**Null space.** Free variable $x_2 = 1$: from $R$, $x_1 = -2$ and $x_3 = 0$, so $\\mathbf{n} = (-2, 1, 0)$, or scaled, $(2, -1, 0)$. Check: $A(2, -1, 0) = (2 - 2, 4 - 4, 6 - 6) = \\mathbf{0}$. Dimension $3 - 2 = 1$, a line.

**Left null space.** Reduce $A^T = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 3 & 4 \\end{pmatrix}$ to $\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$; free variable $y_3 = 1$ gives $\\mathbf{l} = (-1, -1, 1)$, or $(1, 1, -1)$. Check: row $1$ plus row $2$ minus row $3$ of $A$ is $(0, 0, 0)$. Dimension $3 - 2 = 1$, a line.

**Orthogonality.** $(1, 2, 0)\\cdot(2, -1, 0) = 0$ and $(0, 0, 1)\\cdot(2, -1, 0) = 0$: the row space is perpendicular to the null space. $(1, 2, 3)\\cdot(1, 1, -1) = 0$ and $(1, 3, 4)\\cdot(1, 1, -1) = 0$: the column space is perpendicular to the left null space.

**Count.** $2 + 1 = 3$ in the input space and $2 + 1 = 3$ in the output space. $A\\mathbf{x} = \\mathbf{b}$ is solvable only when $\\mathbf{b}\\cdot(1, 1, -1) = 0$, that is $b_1 + b_2 = b_3$, and then has a line of solutions.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Taking the pivot columns of $R$ as a column-space basis** — row operations change the column space; the basis must be the pivot columns of the original $A$
• **Taking the rows of $A$ as the reduced basis** — they span the row space, but the non-zero rows of $R$ are the clean basis; using rows of $A$ risks including a dependent one
• **Reading the null space from $A$ rather than $R$** — the special solutions come from the reduced form, where each pivot variable is expressed in the free ones
• **Forgetting the left null space** — it is the null space of $A^T$, and it needs its own reduction (or the record of row operations)
• **Miscounting dimensions** — the null space has dimension $n - r$ and the left null space $m - r$; for a non-[square matrix](!/linear-algebra/matrix/types#1) these differ
• **Confusing "perpendicular to the rows" with "perpendicular to the columns"** — the null space is perpendicular to the row space, in $\\mathbb{R}^n$; the left null space to the column space, in $\\mathbb{R}^m$
• **Assuming a wide matrix has a null space and a tall one does not** — it depends on the rank, not the shape, though a wide matrix always has a non-trivial null space and a tall one always has a non-trivial left null space`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Matrix rank](!/linear-algebra/visual-tools/matrix-rank) — the number $r$ that fixes all four dimensions; the rank tool shows the elimination that finds it.

[Linear system solutions](!/linear-algebra/visual-tools/linear-system-solutions) — solvability is membership of $\\mathbf{b}$ in the column space, and the solution set is a shift of the null space.

[Span and linear independence](!/linear-algebra/visual-tools/span-independence-2d) — the column space is a span, and the null space is the record of the dependencies.

**Basis and dimension** — each subspace scene produces a basis, and rank–nullity is the dimension count.

[Orthogonal complements and projections](!/linear-algebra/visual-tools/least-squares) — the two pairs of subspaces are complements, and least squares projects onto the column space.

[Kernel and image in 2D](!/linear-algebra/visual-tools/kernel-image-2d) — the geometric picture of null space and column space for a $2 \\times 2$ matrix.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — orthonormal bases of all four subspaces from $U$ and $V$.

[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — swaps the two pairs.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Row Reduction First`,
      content: `Everything starts with the [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form#2). The frozen picture below shows the default preset reduced to $R$ with two pivots, in columns $1$ and $3$, and column $2$ free.

The rank $2$ is now known, and with it the dimensions of all four subspaces: $2$, $1$, $2$, $1$.`,
      before: ``,
      after: `Row reduction is a sequence of invertible row operations, $R = EA$ for an invertible $E$. Two things follow. The row space is unchanged, since the rows of $R$ are combinations of the rows of $A$ and vice versa. And the null space is unchanged, since $A\\mathbf{x} = \\mathbf{0}$ and $EA\\mathbf{x} = \\mathbf{0}$ have the same solutions.

The column space is changed, in general, but the dependencies among the columns are not: $A\\mathbf{x} = \\mathbf{0}$ and $R\\mathbf{x} = \\mathbf{0}$ are the same statement. So the columns of $A$ at the pivot positions of $R$ are independent, and every other column of $A$ depends on them by the same coefficients that appear in $R$.`,
      link: '',
    },
    obj12: {
      title: `The Column Space`,
      content: `The frozen picture below shows the column-space basis of the default preset: the pivot columns of $A$, $(1, 2, 3)$ and $(1, 3, 4)$, with the free column greyed.

The free column is $2$ times the first pivot column, and the number $2$ is read straight from $R$.`,
      before: ``,
      after: `The column space is the set of all $A\\mathbf{x}$, so it is exactly the set of right-hand sides $\\mathbf{b}$ for which $A\\mathbf{x} = \\mathbf{b}$ can be solved. For this matrix it is a plane in $\\mathbb{R}^3$, and a system with a $\\mathbf{b}$ off that plane has no solution.

Because $A\\mathbf{x}$ is the combination of the columns with coefficients $x_1, \\ldots, x_n$, the dependent columns add nothing to the span; the pivot columns alone reach every point the full set does, and they do so independently, which is what a basis means.`,
      link: '',
    },
    obj13: {
      title: `The Row Space`,
      content: `The frozen picture below shows the row-space basis of the default preset: the non-zero rows of $R$, $(1, 2, 0)$ and $(0, 0, 1)$, with the zero row greyed.

The rows of $A$ [span](!/linear-algebra/vector-spaces/span#1) the same plane; $R$ just presents it in its simplest basis.`,
      before: ``,
      after: `The row space has the same dimension as the column space, always. That is not obvious from the definitions, since one lives in $\\mathbb{R}^n$ and the other in $\\mathbb{R}^m$, but row reduction proves it: both dimensions equal the number of pivots. Row rank equals column rank.

The row space is the orthogonal complement of the null space, and the rows of $R$ make that visible: each row of $R$ has a $1$ in a pivot position and, for each free column, the coefficient that the corresponding special solution must cancel.`,
      link: '',
    },
    obj14: {
      title: `The Null Space`,
      content: `The frozen picture below shows the default preset's null space: from $R$, the free variable $x_2$ set to $1$ gives the special solution $(-2, 1, 0)$, scaled to $(2, -1, 0)$, and the product $AN$ on the right is the zero [vector](!/linear-algebra/vectors#1).

One free column, one basis vector, dimension $1$.`,
      before: ``,
      after: `The special solutions are read from $R$ one free column at a time. Setting one free variable to $1$ and the rest to $0$, each pivot row of $R$ gives one pivot variable directly, with a sign change. Since every solution is determined by its free variables, the special solutions span the null space, and since each has a $1$ where the others have $0$, they are independent.

Dimension $n - r$ is the number of free columns, and it counts the dependencies among the columns of $A$: each special solution is a recipe for combining the columns to get zero.`,
      link: '',
    },
    obj15: {
      title: `The Left Null Space`,
      content: `The frozen picture below shows the default preset's left null space: $A^T$ reduced, its one free variable giving $(1, 1, -1)$ after scaling, and $A^TL$ equal to the zero vector.

The vector says that row $1$ plus row $2$ minus row $3$ of $A$ is zero, which is the dependency that made the rank $2$.`,
      before: ``,
      after: `The left null space is the null space of $A^T$, and its vectors $\\mathbf{y}$ satisfy $\\mathbf{y}^TA = \\mathbf{0}$: they are the combinations of rows that cancel. It can also be read from the row reduction of $A$ itself, by recording the row operations in the matrix $E$ with $EA = R$; the rows of $E$ that produce the zero rows of $R$ span the left null space. The tool reduces $A^T$ instead because it is the same computation the other three scenes use.

Its dimension $m - r$ counts the dependent rows, and it is the space that decides solvability: $A\\mathbf{x} = \\mathbf{b}$ is solvable exactly when $\\mathbf{b}$ is perpendicular to every left-null vector.`,
      link: '',
    },
    obj16: {
      title: `The Two Orthogonalities`,
      content: `The frozen picture below shows both checks for the default preset: the rows of $A$ times the null-space vector, and the column-space basis transposed times the left-null vector, both zero.

Row space and null space are perpendicular in $\\mathbb{R}^3$; column space and left null space are perpendicular in $\\mathbb{R}^3$ too.`,
      before: ``,
      after: `The two statements are the same statement read twice. $A\\mathbf{x} = \\mathbf{0}$ means each row dotted with $\\mathbf{x}$ is zero, so $N(A) \\perp C(A^T)$; apply that to $A^T$ and $N(A^T) \\perp C(A)$. With the dimensions adding to $n$ and to $m$, each pair consists of orthogonal complements: every vector of the input space splits uniquely into a row-space part and a null-space part, and every vector of the output space into a column-space part and a left-null part.

That splitting is what least squares uses. A right-hand side $\\mathbf{b}$ that is not in the column space has a column-space part, which can be reached, and a left-null part, which cannot; the projection keeps the first and the residual is the second.`,
      link: '',
    },
    obj17: {
      title: `When a Null Space Is Trivial`,
      content: `The invertible preset $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ has two pivots and no free columns. The frozen picture below shows its null-space scene: $R = I$ and the null space is $\\{\\mathbf{0}\\}$.

The same happens for the tall preset, whose two columns are independent, and for the left null space of the wide preset.`,
      before: ``,
      after: `A trivial null space means the columns are independent and $A\\mathbf{x} = \\mathbf{b}$ never has more than one solution. A trivial left null space means the rows are independent and $A\\mathbf{x} = \\mathbf{b}$ always has at least one. A square matrix with both is invertible, and then the row space and column space are all of $\\mathbb{R}^n$.

The dimension formulas still hold with zeros: $r + 0 = n$ says full column rank, $r + 0 = m$ full row rank. Both together force $m = n = r$.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from SubspacesWrapper's own buildScenes on the default preset (and
     the invertible preset for the trivial case) and rendered through
     frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: subspacesDiagrams[key], caption, text })

  const stateUnits = {
    rref: unit('rref', 'Row reduction, frozen',
      'The default preset reduced to R = [1, 2, 0; 0, 0, 1; 0, 0, 0]: pivots in columns 1 and 3, column 2 free, ' +
      'rank 2. All four dimensions follow: 2, 1, 2, 1.'),
    colspace: unit('colspace', 'Column space, frozen',
      'The pivot columns of A, (1, 2, 3) and (1, 3, 4), form the basis; the free column, greyed, is 2 times the ' +
      'first, as R says. A plane in R&#179;.'),
    rowspace: unit('rowspace', 'Row space, frozen',
      'The non-zero rows of R, (1, 2, 0) and (0, 0, 1). Row operations do not change the row space, so this is ' +
      'the row space of A in its simplest basis.'),
    nullspace: unit('nullspace', 'Null space, frozen',
      'Free variable x&#8322; = 1 gives (&minus;2, 1, 0), scaled to (2, &minus;1, 0), and A times it is zero. ' +
      'One free column, dimension 3 &minus; 2 = 1.'),
    leftnull: unit('leftnull', 'Left null space, frozen',
      'A&#7488; reduced to [1, 0, 1; 0, 1, 1; 0, 0, 0], one free variable, the vector (1, 1, &minus;1): row 1 plus ' +
      'row 2 minus row 3 of A is zero. Dimension 3 &minus; 2 = 1.'),
    orth: unit('orth', 'Two orthogonalities, frozen',
      'Rows of A times the null vector: zero. Column-space basis transposed times the left-null vector: zero. ' +
      'Each pair of subspaces consists of orthogonal complements.'),
    trivial: unit('trivial', 'A trivial null space, frozen',
      'The invertible preset: R = I, no free columns, null space {0}. The columns are independent and ' +
      'Ax = b has at most one solution.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     SubspacesWrapper accepts an explanations prop keyed by scene phase:
     intro, rref, colspace, rowspace, nullspace, leftnull, orth, done.
     Captions render with dangerouslySetInnerHTML, so these are raw HTML
     anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-four-subspaces-are" style="color:#1d4ed8;font-weight:600">the big picture</a></div>`

  const explanations = {
    intro: note('Two subspaces in the input space, two in the output space, one row reduction for all four.', 'row-reduction-first', 'Learn more about the first step'),
    rref: note('The pivots give the rank, and the rank gives every dimension.', 'row-reduction-first', 'Learn more about row reduction'),
    colspace: note('Pivot columns of A, not of R - row operations change the column space.', 'the-column-space', 'Learn more about the column space'),
    rowspace: note('Non-zero rows of R - row operations keep the row space.', 'the-row-space', 'Learn more about the row space'),
    nullspace: note('One special solution per free column; A times each is zero.', 'the-null-space', 'Learn more about the null space'),
    leftnull: note('Combinations of rows that cancel: the null space of A&#7488;.', 'the-left-null-space', 'Learn more about the left null space'),
    orth: note('Ax = 0 says x is perpendicular to every row; A&#7488;y = 0, to every column.', 'the-two-orthogonalities', 'Learn more about orthogonality'),
    done: note('r + (n &minus; r) = n and r + (m &minus; r) = m: rank&ndash;nullity, twice.', 'when-a-null-space-is-trivial', 'Learn more about the special cases'),
  }


  const faqQuestions = {
    obj1: {
      question: "What are the four fundamental subspaces of a matrix?",
      answer: "For an m×n matrix A they are the column space, all combinations of the columns, a subspace of Rᵐ; the null space, all solutions of Ax = 0, a subspace of Rⁿ; the row space, all combinations of the rows, a subspace of Rⁿ; and the left null space, all solutions of Aᵀy = 0, a subspace of Rᵐ. If the rank is r, their dimensions are r, n − r, r and m − r."
    },
    obj2: {
      question: "How do you find a basis for each subspace?",
      answer: "Row reduce A to its reduced row echelon form R. The pivot columns of the original A are a basis of the column space. The non-zero rows of R are a basis of the row space. The special solutions, one per free column, obtained by setting that free variable to 1 and the others to 0 and reading the pivot variables from R, are a basis of the null space. Row reducing Aᵀ in the same way gives a basis of the left null space."
    },
    obj3: {
      question: "Why do the column space and row space have the same dimension?",
      answer: "Both dimensions equal the number of pivots in the reduced row echelon form. The pivot columns of A are independent and span the column space, and the non-zero rows of R are independent and span the row space, and there is one of each per pivot. This is the statement that row rank equals column rank, and it holds even though the two spaces live in different dimensions, Rᵐ and Rⁿ."
    },
    obj4: {
      question: "In what sense are the subspaces orthogonal?",
      answer: "Ax = 0 says every row of A has zero dot product with x, so the null space is perpendicular to the row space; since their dimensions add to n, they are orthogonal complements in Rⁿ, and every vector splits uniquely into a row-space part plus a null-space part. The same argument for Aᵀ shows the left null space is the orthogonal complement of the column space in Rᵐ. This is the second half of the fundamental theorem of linear algebra."
    },
    obj5: {
      question: "What do the four subspaces say about solving Ax = b?",
      answer: "The system is solvable exactly when b is in the column space, equivalently when b is perpendicular to every vector of the left null space. When it is solvable, the complete solution is one particular solution plus any vector of the null space, so the solution is unique exactly when the null space is trivial, which means full column rank. Full row rank makes the column space all of Rᵐ, so every b is reachable; a square matrix with both is invertible."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Four Fundamental Subspaces Visualizer",
      "description": "Step-by-step visualizer that finds a basis for the column space, row space, null space and left null space of a matrix from 2×2 to 4×4 by row reduction, checks A N = 0 and Aᵀ L = 0, shows the two orthogonalities, and counts the dimensions.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/four-fundamental-subspaces",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable matrix of any shape from 2×2 to 4×4, seven presets and a shuffle with planted dependencies",
        "Reduced row echelon form with pivots and free columns marked",
        "Column-space basis from the pivot columns of A, with free columns expressed through R",
        "Row-space basis from the non-zero rows of R",
        "Null-space special solutions with A N = 0 shown, and left null space with Aᵀ L = 0 shown",
        "Orthogonality of the two pairs of subspaces as zero products",
        "Dimension count and the consequences for solving Ax = b",
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
      "keywords": "four fundamental subspaces, column space, null space, row space, left null space, column space calculator, null space calculator, basis of column space, basis of null space, rank nullity theorem, orthogonal complement, fundamental theorem of linear algebra, row reduction subspaces, linear algebra visualizer, interactive matrix tool"
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
          "name": "Four Fundamental Subspaces",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/four-fundamental-subspaces"
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
      relatedTools: getRelatedTools('linear-algebra-four-fundamental-subspaces'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Four Fundamental Subspaces Visualizer | Column, Row, Null and Left Null Space",
        description: "Find a basis for the column space, row space, null space and left null space of a matrix step by step from one row reduction, with A N = 0 and Aᵀ L = 0 checked, the two orthogonalities shown, and the dimensions counted.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/four-fundamental-subspaces",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="26" height="56" rx="3" fill="none" stroke="#B5D4F4" stroke-width="1"/><rect x="46" y="12" width="26" height="56" rx="3" fill="none" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="58" x2="30" y2="44" stroke="#85B7EB" stroke-width="2.4"/><line x1="12" y1="58" x2="20" y2="22" stroke="#FAC775" stroke-width="2.4"/><line x1="50" y1="58" x2="68" y2="44" stroke="#97C459" stroke-width="2.4"/><line x1="50" y1="58" x2="58" y2="22" stroke="#FAC775" stroke-width="2.4" opacity="0.8"/><path d="M 34 40 L 46 40" stroke="#E6F1FB" stroke-width="1.2"/><path d="M 46 40 L 43 37.5 L 43 42.5 Z" fill="#E6F1FB"/><text x="21" y="76" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">C(A&#7488;) &perp; N(A)</text><text x="59" y="76" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">C(A) &perp; N(A&#7488;)</text><text x="21" y="9" font-family="Georgia,serif" font-size="7" fill="#B5D4F4" text-anchor="middle" font-style="italic">R&#8319;</text><text x="59" y="9" font-family="Georgia,serif" font-size="7" fill="#B5D4F4" text-anchor="middle" font-style="italic">R&#7504;</text></svg>`,
        name: "Four Fundamental Subspaces Visualizer",
        hubDescription: "Find all four subspaces of a matrix of your own numbers, of any shape from 2×2 to 4×4, from one row reduction: the pivot columns of A for the column space, the non-zero rows of R for the row space, one special solution per free column for the null space, and the null space of Aᵀ for the left null space. Each null-space basis is checked by a matrix product, the two orthogonalities are shown as zero products, and the final scene counts the dimensions and says what they mean for solving Ax = b. Presets cover rank-deficient, full-rank, rectangular, invertible and zero matrices.",
        category: 'Matrices',
        subCategory: 'Vector Spaces'
      }
    }
  }
}

export default function SubspacesVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'row-reduction-first', 'rref'),
    stateRow('obj12', 'the-column-space', 'colspace'),
    stateRow('obj13', 'the-row-space', 'rowspace'),
    stateRow('obj14', 'the-null-space', 'nullspace'),
    stateRow('obj15', 'the-left-null-space', 'leftnull'),
    stateRow('obj16', 'the-two-orthogonalities', 'orth'),
    stateRow('obj17', 'when-a-null-space-is-trivial', 'trivial'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-the-four-subspaces-are'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Four Fundamental Subspaces</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <SubspacesWrapper
   defaultPreset='rank2'
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
