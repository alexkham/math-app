import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import SVDWrapper from '../../../../app/components/linear-algebra copy/matrix/SVDWrapper'
import svdDiagrams from '../../../../app/components/linear-algebra copy/matrix/svdDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'singular value decomposition',
    'SVD',
    'SVD calculator',
    'SVD step by step',
    'singular values',
    'A = U Sigma V transpose',
    'how to compute SVD by hand',
    'SVD 2x2',
    'SVD 3x3',
    'left and right singular vectors',
    'rank one approximation',
    'low rank approximation SVD',
    'condition number singular values',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Singular value decomposition (SVD)** — $A = U\\Sigma V^T$ for any $m \\times n$ [matrix](!/linear-algebra/matrix#1), with $U$ ($m \\times m$) and $V$ ($n \\times n$) orthogonal and $\\Sigma$ ($m \\times n$) diagonal.

**Singular values** — the diagonal entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$ of $\\Sigma$; the square roots of the [eigenvalues](!/linear-algebra/eigen#2) of $A^TA$.

**Right singular vectors** — the columns $\\mathbf{v}_i$ of $V$, orthonormal [eigenvectors](!/linear-algebra/eigen#2) of $A^TA$; the input directions.

**Left singular vectors** — the columns $\\mathbf{u}_i$ of $U$, with $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$ for $\\sigma_i > 0$; the output directions.

**Rank** — the number of non-zero singular values.

**Rank-one form** — $A = \\sum \\sigma_i\\mathbf{u}_i\\mathbf{v}_i^T$; truncating it gives the best low-[rank](!/linear-algebra/matrix/rank#1) approximation.

**Spectral norm** — $\\|A\\|_2 = \\sigma_1$, the largest stretch; **Frobenius norm** — $\\sqrt{\\sum\\sigma_i^2}$.

**Condition number** — $\\sigma_1 / \\sigma_r$, the ratio of largest to smallest non-zero singular value.

**Pseudoinverse** — $A^+ = V\\Sigma^+U^T$, inverting the non-zero singular values; gives [least-squares solutions](!/linear-algebra/orthogonality/least-squares#3).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a matrix of any shape from $2 \\times 2$ to $3 \\times 3$ and watch it factor into $U\\Sigma V^T$.

• Use the **Preset** pills for seven matrices: a classic $2 \\times 2$, a rank-one matrix, a symmetric one, a rotation, a wide $2 \\times 3$, a tall $3 \\times 2$, and a $3 \\times 3$ with a repeated singular value
• Use the two **Size** steppers for rows and columns independently, and **Shuffle** for a random small-integer matrix
• Edit any entry directly
• Hover the **?** icon for a reminder of what the pieces mean geometrically
• Press play or step manually; the step log on the right keeps every stage

The computation is the hand method: eigenvalues and eigenvectors of $A^TA$, square roots for the singular values, $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$, and completion of $U$ when the rank is less than $m$. The eigenvalues of $A^TA$ are reported rather than derived, since the eigenvalue visualizer shows that derivation.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Form $A^TA$** — an $n \\times n$ symmetric positive semidefinite matrix
• **Eigenvalues and singular values** — $\\lambda_i \\geq 0$ of $A^TA$ in decreasing order and $\\sigma_i = \\sqrt{\\lambda_i}$, with the rank read off and $\\sum\\sigma_i^2$ checked against the sum of squared entries
• **Right singular vectors** — for each eigenvalue, $A^TA - \\lambda I$ row reduced and one integer vector per free column, orthogonalized inside a repeated [eigenspace](!/linear-algebra/eigen#4), then normalized
• **Left singular vectors** — $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$ for each $\\sigma_i > 0$, with the length of $A\\mathbf{v}_i$ confirmed as $\\sigma_i$
• **Complete $U$** — only when there are fewer non-zero singular values than rows: Gram–Schmidt on standard [basis](!/linear-algebra/vector-spaces#2) vectors fills the remaining orthonormal columns
• **Assemble** — $U$, the rectangular $\\Sigma$, and $V^T$
• **Factor** — $A = U \\cdot \\Sigma \\cdot V^T$ multiplied out
• **Rank-one sum** — $A = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots$
• **Done** — rank, norms, condition number, the ellipse picture, and the four fundamental [subspaces](!/linear-algebra/vector-spaces/subspaces#1)`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one step with the arithmetic in the caption.

• The columns of $U$, the diagonal of $\\Sigma$ and the rows of $V^T$ share one colour per index, since each triple is one equation $A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$
• Non-zero singular values are accent, zero ones muted; the off-diagonal zeros of $\\Sigma$ are grey
• Entries of $U$ and $V$ are decimals because they involve square roots; the captions give the exact forms, such as $(1, 3)/\\sqrt{10}$, and the singular values as $\\sqrt{45}$ rather than $6.708$ when they are square roots of integers
• In the completion scene the columns obtained from $A\\mathbf{v}_i$ keep their colours and the added columns are secondary
• The rank-one terms are shown as separate matrices that add up to $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The seven presets each make a different point.

• **$2 \\times 2$ classic** — $\\begin{pmatrix} 3 & 0 \\\\ 4 & 5 \\end{pmatrix}$ with $\\sigma = \\sqrt{45}, \\sqrt{5}$; $V$ is the $45°$ rotation and $U$ has columns $(1, 3)/\\sqrt{10}$ and $(3, -1)/\\sqrt{10}$
• **Rank one** — $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ with $\\sigma = 5, 0$; one term, and $U$ needs completing
• **Symmetric** — $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$; the singular values are the eigenvalues $3, 1$ and $U = V$, so the SVD is the [spectral decomposition](!/linear-algebra/eigen/diagonalization#7)
• **Rotation** — $\\sigma = 1, 1$; a repeated singular value, $V = I$ and $U$ is the rotation itself
• **Wide $2 \\times 3$** — $\\sigma = \\sqrt{3}, 1$ and a third $\\mathbf{v}_3$ with $\\lambda = 0$ spanning the null space
• **Tall $3 \\times 2$** — $\\sigma = \\sqrt{3}, 1$ and a third column of $U$ from Gram–Schmidt
• **$3 \\times 3$** — $\\sigma = 2, 1, 1$; a repeated singular value needing Gram–Schmidt inside the eigenspace of $A^TA$

Shuffle produces small-integer matrices whose singular values are usually irrational; the tool shows them to four decimals.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the SVD Is`,
      content: `Every real $m \\times n$ matrix can be written as

$$A = U\\Sigma V^T$$

with $U$ an $m \\times m$ [orthogonal matrix](!/linear-algebra/matrix/types#7), $V$ an $n \\times n$ orthogonal matrix, and $\\Sigma$ an $m \\times n$ matrix whose only non-zero entries are $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0$ on the diagonal, where $r$ is the rank. Column by column the equation says

$$A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$$

An [orthonormal set](!/linear-algebra/orthogonality/orthogonal-sets#3) of input directions is sent to an [orthogonal set](!/linear-algebra/orthogonality/orthogonal-sets#1) of output directions, each scaled by its singular value. The unit sphere in $\\mathbb{R}^n$ becomes an ellipsoid in $\\mathbb{R}^m$ with semi-axes $\\sigma_i$ along $\\mathbf{u}_i$; directions with $\\sigma_i = 0$ are flattened away.

The hand computation goes through $A^TA$. Substituting the factorization, $A^TA = V\\Sigma^T\\Sigma V^T$, which is the spectral decomposition of the [symmetric matrix](!/linear-algebra/matrix/types#5) $A^TA$ with eigenvalues $\\sigma_i^2$ and eigenvectors $\\mathbf{v}_i$. So the $\\mathbf{v}_i$ and $\\sigma_i$ come from a symmetric eigenvalue problem, and then $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$ for each positive $\\sigma_i$. These $\\mathbf{u}_i$ are automatically orthonormal, because $A\\mathbf{v}_i \\cdot A\\mathbf{v}_j = \\mathbf{v}_i^TA^TA\\mathbf{v}_j = \\sigma_j^2\\,\\mathbf{v}_i\\cdot\\mathbf{v}_j$. If $r < m$, the remaining columns of $U$ are any orthonormal completion.

Expanding the product gives the other form,

$$A = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_r\\mathbf{u}_r\\mathbf{v}_r^T$$

a sum of $r$ rank-one matrices in decreasing order of importance. Keeping the first $k$ terms gives the closest rank-$k$ matrix to $A$, in both the spectral and Frobenius norms, which is why the SVD underlies compression and dimensionality reduction. For the theory, see the [singular value decomposition page](!/linear-algebra/decompositions/svd) and the [spectral decomposition theory page](!/linear-algebra/decompositions/spectral).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that hold for every matrix.

• **Existence**: every matrix has an SVD, square or not, invertible or not, symmetric or not
• **Singular values are unique**; $U$ and $V$ are unique up to signs when the singular values are distinct, and up to rotations within a repeated one
• **Rank** is the number of non-zero singular values, and the SVD is the numerically reliable way to compute it
• **Norms**: $\\|A\\|_2 = \\sigma_1$ and $\\|A\\|_F^2 = \\sum\\sigma_i^2 = $ the sum of the squares of all entries
• **Condition number** $\\sigma_1 / \\sigma_r$ measures how much $A$ amplifies relative errors when solving $A\\mathbf{x} = \\mathbf{b}$
• **Four subspaces**: $\\mathbf{u}_1, \\ldots, \\mathbf{u}_r$ span the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2), $\\mathbf{u}_{r+1}, \\ldots$ the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces#5), $\\mathbf{v}_1, \\ldots, \\mathbf{v}_r$ the [row space](!/linear-algebra/vector-spaces/fundamental-spaces#3), $\\mathbf{v}_{r+1}, \\ldots$ the null space, all orthonormal
• **Pseudoinverse**: $A^+ = V\\Sigma^+U^T$, with $\\Sigma^+$ inverting the non-zero singular values; $A^+\\mathbf{b}$ is the least-squares solution of minimum length
• **Inverse**: for square invertible $A$, $A^{-1} = V\\Sigma^{-1}U^T$ and the singular values of $A^{-1}$ are $1/\\sigma_i$
• **Symmetric positive semidefinite $A$**: the SVD is the spectral decomposition, $U = V$ and $\\sigma_i = \\lambda_i$; for symmetric $A$ in general, $\\sigma_i = |\\lambda_i|$
• **Determinant**: for square $A$, $|\\det A| = \\prod\\sigma_i$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The SVD is the factorization that works for every matrix, and most of applied linear algebra rests on it.

• **Low-rank approximation**: keeping the largest singular values compresses images, signals and data matrices with the least possible error
• **Principal component analysis**: the right singular vectors of a centred data matrix are the principal components and the singular values measure the variance along them, without ever forming the covariance matrix
• **Least squares**: the pseudoinverse solves overdetermined and rank-deficient systems, and the singular values show which directions are poorly determined
• **Numerical rank and conditioning**: tiny singular values reveal near-dependence among columns that Gaussian elimination cannot see reliably
• **Recommender systems and latent semantic analysis**: users-by-items and documents-by-terms matrices are factored into a few dominant rank-one patterns
• **Geometry of a map**: the singular vectors and values give the exact stretching, in any [dimension](!/linear-algebra/vector-spaces/dimension#1), for matrices that are not square and have no eigenvectors
• **Polar decomposition and Procrustes**: $A = (UV^T)(V\\Sigma V^T)$ splits any map into a rotation and a symmetric stretch, and $UV^T$ is the nearest orthogonal matrix to $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 3 & 0 \\\\ 4 & 5 \\end{pmatrix}$$

**$A^TA$.** $A^TA = \\begin{pmatrix} 25 & 20 \\\\ 20 & 25 \\end{pmatrix}$.

**Eigenvalues.** $\\lambda^2 - 50\\lambda + 225 = 0$ gives $\\lambda = 45, 5$, so $\\sigma_1 = \\sqrt{45}$ and $\\sigma_2 = \\sqrt{5}$. Check: $45 + 5 = 50 = 9 + 0 + 16 + 25$.

**Right singular vectors.** For $45$: $A^TA - 45I = \\begin{pmatrix} -20 & 20 \\\\ 20 & -20 \\end{pmatrix}$ gives $\\mathbf{v}_1 = (1, 1)/\\sqrt{2}$. For $5$: $\\begin{pmatrix} 20 & 20 \\\\ 20 & 20 \\end{pmatrix}$ gives $\\mathbf{v}_2 = (1, -1)/\\sqrt{2}$.

**Left singular vectors.** $A\\mathbf{v}_1 = (3, 9)/\\sqrt{2}$, of length $\\sqrt{90/2} = \\sqrt{45}$, so $\\mathbf{u}_1 = (3, 9)/\\sqrt{90} = (1, 3)/\\sqrt{10}$. $A\\mathbf{v}_2 = (3, -1)/\\sqrt{2}$, of length $\\sqrt{5}$, so $\\mathbf{u}_2 = (3, -1)/\\sqrt{10}$. Their dot product is $0$.

**Assemble.**

$$U = \\frac{1}{\\sqrt{10}}\\begin{pmatrix} 1 & 3 \\\\ 3 & -1 \\end{pmatrix}, \\qquad \\Sigma = \\begin{pmatrix} \\sqrt{45} & 0 \\\\ 0 & \\sqrt{5} \\end{pmatrix}, \\qquad V^T = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$

**Check.** $\\Sigma V^T = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} \\sqrt{45} & \\sqrt{45} \\\\ \\sqrt{5} & -\\sqrt{5} \\end{pmatrix}$, and $U\\Sigma V^T = \\frac{1}{\\sqrt{20}}\\begin{pmatrix} \\sqrt{45} + 3\\sqrt{5} & \\sqrt{45} - 3\\sqrt{5} \\\\ 3\\sqrt{45} - \\sqrt{5} & 3\\sqrt{45} + \\sqrt{5} \\end{pmatrix}$. With $\\sqrt{45} = 3\\sqrt{5}$ and $\\sqrt{20} = 2\\sqrt{5}$ this is $\\frac{1}{2}\\begin{pmatrix} 6 & 0 \\\\ 8 & 10 \\end{pmatrix} = A$.

**Numbers.** Rank $2$, $\\|A\\|_2 = \\sqrt{45} \\approx 6.71$, $\\|A\\|_F = \\sqrt{50}$, condition number $\\sqrt{45}/\\sqrt{5} = 3$, and $|\\det A| = 15 = \\sqrt{45}\\sqrt{5}$. The [unit circle](!/trigonometry/unit-circle#1) maps to an ellipse with semi-axes $\\sqrt{45}$ along $(1, 3)$ and $\\sqrt{5}$ along $(3, -1)$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Forgetting the square root** — the eigenvalues of $A^TA$ are $\\sigma_i^2$, not $\\sigma_i$
• **Taking eigenvectors of $A$ instead of $A^TA$** — for a non-symmetric matrix they are different, and $A$ may not have real eigenvectors at all
• **Mismatched signs** — if $\\mathbf{v}_i$ is replaced by $-\\mathbf{v}_i$ then $\\mathbf{u}_i$ must be too; $\\mathbf{u}_i$ is computed from $\\mathbf{v}_i$, never chosen independently
• **Wrong order** — the singular values must decrease along the diagonal, and $U$ and $V$ must follow the same order
• **Square $\\Sigma$ for a rectangular $A$** — $\\Sigma$ has the shape of $A$, with zero rows or columns making up the difference
• **Stopping at $r$ columns of $U$** — $U$ must be square and orthogonal; the extra columns come from an orthonormal completion, though the reduced SVD, with $U$ of size $m \\times r$, is also standard
• **Forgetting to normalize $\\mathbf{v}_i$** — an integer eigenvector gives the right direction but the wrong length for $A\\mathbf{v}_i = \\sigma_i\\mathbf{u}_i$
• **Reading singular values as eigenvalues** — they agree only for symmetric positive semidefinite matrices; in general $\\sigma_i \\neq |\\lambda_i|$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Spectral decomposition](!/linear-algebra/visual-tools/spectral-decomposition) — of $A^TA$, which is where $V$ and the singular values come from; for symmetric positive semidefinite $A$ the two decompositions coincide.

[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — the eigenvalue tool derives the eigenvalues of $A^TA$ that this tool reports.

[Gram–Schmidt](!/linear-algebra/visual-tools/gram-schmidt) — used inside repeated eigenspaces and to complete $U$.

[Matrix rank](!/linear-algebra/visual-tools/matrix-rank) — the number of non-zero singular values; the SVD is the stable way to compute it.

[Four fundamental subspaces](!/linear-algebra/visual-tools/four-fundamental-subspaces) — read off directly from $U$ and $V$.

[Least squares and the pseudoinverse](!/linear-algebra/visual-tools/least-squares) — $A^+ = V\\Sigma^+U^T$.

**Matrix norms and condition number** — $\\sigma_1$, $\\sqrt{\\sum\\sigma_i^2}$, and $\\sigma_1/\\sigma_r$.

[Linear transformations in 2D](!/linear-algebra/visual-tools/linear-transformation-2d) — the ellipse picture: unit circle to ellipse with semi-axes $\\sigma_i$.

**Principal component analysis** — the SVD of a data matrix.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Forming A Transpose A`,
      content: `The first move is to multiply $A^T$ by $A$. The frozen picture below shows it for the default preset: $A^TA = \\begin{pmatrix} 25 & 20 \\\\ 20 & 25 \\end{pmatrix}$, symmetric, with the squared column lengths on the diagonal and the [dot product](!/linear-algebra/vectors/dot-product#1) of the columns off it.

Everything about the singular values and $V$ is in this matrix.`,
      before: ``,
      after: `$A^TA$ is symmetric because $(A^TA)^T = A^TA$, and positive semidefinite because $\\mathbf{x}^TA^TA\\mathbf{x} = |A\\mathbf{x}|^2 \\geq 0$. So the spectral theorem applies: real non-negative eigenvalues and an orthonormal eigenvector basis. That is why the SVD of an arbitrary matrix reduces to the spectral decomposition of a symmetric one.

The other product, $AA^T$, has the same non-zero eigenvalues and gives $U$ directly. The tool uses $A^TA$ for $V$ and then $A\\mathbf{v}_i / \\sigma_i$ for $U$, which is less work and keeps the signs consistent automatically.`,
      link: '',
    },
    obj12: {
      title: `The Singular Values`,
      content: `The frozen picture below shows $A^TA$ leading to its eigenvalues $45$ and $5$ and then to $\\sigma = \\sqrt{45}, \\sqrt{5}$.

Both are non-zero, so the rank is $2$, and $45 + 5 = 50$ equals the sum of the squared entries of $A$.`,
      before: ``,
      after: `The singular values are the lengths of the semi-axes of the ellipse that $A$ makes from the unit circle. The largest, $\\sqrt{45} \\approx 6.7$, is the most any unit vector is stretched, the spectral norm; the smallest non-zero, $\\sqrt{5} \\approx 2.2$, is the least, and their ratio $3$ is the condition number.

The identity $\\sum\\sigma_i^2 = \\sum a_{ij}^2$ is the quickest check on the arithmetic. It holds because both sides equal the trace of $A^TA$: the left as the sum of its eigenvalues, the right as the sum of its diagonal entries.`,
      link: '',
    },
    obj13: {
      title: `From v to u`,
      content: `The frozen picture below shows the first left singular vector: $A$ applied to $\\mathbf{v}_1 = (1, 1)/\\sqrt{2}$ gives $(3, 9)/\\sqrt{2}$, of length $\\sqrt{45}$ exactly, and dividing by $\\sigma_1$ leaves the [unit vector](!/linear-algebra/vectors/magnitude#5) $\\mathbf{u}_1 = (1, 3)/\\sqrt{10}$.

The length of $A\\mathbf{v}_1$ coming out as $\\sigma_1$ is not luck: $|A\\mathbf{v}|^2 = \\mathbf{v}^TA^TA\\mathbf{v} = \\lambda$.`,
      before: ``,
      after: `This is the step that makes the SVD geometric. The $\\mathbf{v}_i$ are the perpendicular input directions along which $A$ acts as a pure stretch, and $\\mathbf{u}_i$ is where each one lands. The $\\mathbf{u}_i$ are perpendicular to one another because $A\\mathbf{v}_i \\cdot A\\mathbf{v}_j = \\mathbf{v}_i^TA^TA\\mathbf{v}_j = \\lambda_j\\,\\mathbf{v}_i\\cdot\\mathbf{v}_j = 0$.

Contrast eigenvectors, where the input and output directions are the same. For a non-symmetric matrix that requirement is what forces skewed or complex eigenvectors; the SVD gives up on it, allows two different orthonormal bases, and in exchange works for every matrix.`,
      link: '',
    },
    obj14: {
      title: `The Factorization`,
      content: `The frozen picture below shows $A = U\\Sigma V^T$ for the default preset, with the columns of $U$, the diagonal of $\\Sigma$ and the rows of $V^T$ in matching colours.

Read from the right: $V^T$ rotates the input by $45°$, $\\Sigma$ stretches by $\\sqrt{45}$ and $\\sqrt{5}$, and $U$ rotates and reflects into the output axes.`,
      before: ``,
      after: `Every matrix is a rotation, a stretch along the axes, and another rotation; that is the whole statement, and it holds in any dimensions, including $m \\neq n$, where $\\Sigma$ is rectangular and either drops input dimensions or embeds into extra output dimensions.

Because $U$ and $V$ are orthogonal, they preserve lengths, so all the stretching is in $\\Sigma$. This is what makes the singular values the right measure of a matrix's size and conditioning, and why numerical algorithms for the SVD are the most trusted in linear algebra: nothing in the orthogonal factors can amplify error.`,
      link: '',
    },
    obj15: {
      title: `The Rank-One Expansion`,
      content: `The frozen picture below shows the default preset as $\\sqrt{45}\\,\\mathbf{u}_1\\mathbf{v}_1^T + \\sqrt{5}\\,\\mathbf{u}_2\\mathbf{v}_2^T$: two rank-one matrices adding to $A$.

The first term alone is the best rank-one approximation of $A$; its error, in the spectral norm, is $\\sqrt{5}$.`,
      before: ``,
      after: `Each term $\\sigma_i\\mathbf{u}_i\\mathbf{v}_i^T$ takes the component of the input along $\\mathbf{v}_i$, scales it by $\\sigma_i$, and outputs it along $\\mathbf{u}_i$. The terms are ordered by $\\sigma_i$, so the sum lists the actions of $A$ from most to least significant. Truncating after $k$ terms gives the nearest rank-$k$ matrix, a theorem due to Eckart and Young, and the discarded singular values measure exactly what was lost.

For a $2 \\times 2$ matrix the expansion is a curiosity. For a $1000 \\times 1000$ image it is compression: a few dozen terms often reproduce the picture, and the singular values say how many are needed.`,
      link: '',
    },
    obj16: {
      title: `Completing U`,
      content: `The tall preset $\\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ has two singular values, $\\sqrt{3}$ and $1$, and $A\\mathbf{v}_i / \\sigma_i$ gives two columns of $U$. But $U$ must be $3 \\times 3$. The frozen picture below shows the completed $U$: $\\mathbf{u}_1 = (1, 2, 1)/\\sqrt{6}$, $\\mathbf{u}_2 = (1, 0, -1)/\\sqrt{2}$, and a third column $(1, -1, 1)/\\sqrt{3}$ perpendicular to both.

The third column multiplies a zero row of $\\Sigma$ and does not affect the product.`,
      before: ``,
      after: `The added column spans the left null space of $A$, the vectors $\\mathbf{y}$ with $A^T\\mathbf{y} = \\mathbf{0}$; it is the direction in the output space that $A$ cannot reach. Gram–Schmidt on a standard basis vector finds it: subtract the projections onto $\\mathbf{u}_1$ and $\\mathbf{u}_2$ and normalize what is left.

Many texts avoid the completion by using the reduced SVD, with $U$ of size $m \\times r$ and $\\Sigma$ square $r \\times r$. The product is the same; the full form is the one with $U$ orthogonal, and the one that displays all four fundamental subspaces at once.`,
      link: '',
    },
    obj17: {
      title: `A Rank-One Matrix`,
      content: `The rank-one preset $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ has singular values $5$ and $0$. The frozen picture below shows its expansion: a single term, $5\\,\\mathbf{u}_1\\mathbf{v}_1^T$ with $\\mathbf{u}_1 = \\mathbf{v}_1 = (1, 2)/\\sqrt{5}$, which is the matrix itself.

The zero singular value contributes nothing, and $\\mathbf{v}_2 = (2, -1)/\\sqrt{5}$ [spans](!/linear-algebra/vector-spaces/span#1) the null space.`,
      before: ``,
      after: `A rank-one matrix is an outer product $\\sigma\\mathbf{u}\\mathbf{v}^T$, and the SVD recognizes it as such: one term and nothing else. The second column of $V$ is the direction $A$ collapses, and the second column of $U$, obtained by completion, the direction $A$ never reaches.

The condition number of a singular matrix is infinite, and the tool says so. Near-singular matrices, with a small but non-zero $\\sigma_2$, are the practical concern: their condition number is large, and solving with them amplifies errors by that factor.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from SVDWrapper's own buildScenes on the default preset (and the
     tall and rank-one presets for their special scenes) and rendered through
     frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: svdDiagrams[key], caption, text })

  const stateUnits = {
    gram: unit('gram', 'A&#7488;A, frozen',
      'The default preset: A&#7488;A = [25, 20; 20, 25], symmetric with the squared column lengths on the diagonal ' +
      'and the dot product of the columns off it.'),
    eigen: unit('eigen', 'Singular values, frozen',
      'Eigenvalues 45 and 5 of A&#7488;A, then &sigma; = &radic;45, &radic;5. Both non-zero: rank 2. ' +
      'Check: 45 + 5 = 50 = 9 + 0 + 16 + 25.'),
    uvec: unit('uvec', 'u&#8321; = A v&#8321; / &sigma;&#8321;, frozen',
      'A times v&#8321; = (1, 1)/&radic;2 gives (3, 9)/&radic;2, of length &radic;45 exactly; dividing by ' +
      '&sigma;&#8321; leaves u&#8321; = (1, 3)/&radic;10.'),
    factor: unit('factor', 'A = U &Sigma; V&#7488;, frozen',
      'Columns of U, diagonal of &Sigma; and rows of V&#7488; in matching colours. Rotate by 45&deg;, stretch by ' +
      '&radic;45 and &radic;5, rotate again: the product reproduces A.'),
    rankone: unit('rankone', 'Rank-one expansion, frozen',
      'A = &radic;45 u&#8321;v&#8321;&#7488; + &radic;5 u&#8322;v&#8322;&#7488;. The first term alone is the best ' +
      'rank-one approximation of A, with error &radic;5.'),
    complete: unit('complete', 'Completing U, frozen',
      'The tall preset: two columns from A v&#7522; / &sigma;&#7522;, and a third, (1, &minus;1, 1)/&radic;3, from ' +
      'Gram&ndash;Schmidt on e&#8321;. It spans the left null space and multiplies a zero row of &Sigma;.'),
    single: unit('single', 'A rank-one matrix, frozen',
      'The rank-one preset: &sigma; = 5 and 0, so the expansion has one term, 5 u&#8321;v&#8321;&#7488; with ' +
      'u&#8321; = v&#8321; = (1, 2)/&radic;5 - which is A itself.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     SVDWrapper accepts an explanations prop keyed by scene phase: intro,
     gram, eigen, vvec, uvec, complete, assemble, factor, rankone, done.
     Captions render with dangerouslySetInnerHTML, so these are raw HTML
     anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-svd-is" style="color:#1d4ed8;font-weight:600">what the SVD is</a></div>`

  const explanations = {
    intro: note('Two orthogonal matrices and a diagonal one, for every matrix.', 'forming-a-transpose-a', 'Learn more about the first step'),
    gram: note('Symmetric and positive semidefinite, so the spectral theorem applies.', 'forming-a-transpose-a', 'Learn more about A&#7488;A'),
    eigen: note('Square roots of the eigenvalues of A&#7488;A; their squares sum to the squared entries.', 'the-singular-values', 'Learn more about the singular values'),
    vvec: note('Orthonormal eigenvectors of A&#7488;A: the input directions.', 'from-v-to-u', 'Learn more about the singular vectors'),
    uvec: note('A stretches each v&#7522; by exactly &sigma;&#7522; and lands it on u&#7522;.', 'from-v-to-u', 'Learn more about the singular vectors'),
    complete: note('The remaining columns of U span the left null space.', 'completing-u', 'Learn more about completing U'),
    assemble: note('Column i of U, entry i of &Sigma;, row i of V&#7488; are one equation A v&#7522; = &sigma;&#7522; u&#7522;.', 'the-factorization', 'Learn more about the factorization'),
    factor: note('Rotate, stretch along the axes, rotate again.', 'the-factorization', 'Learn more about the factorization'),
    rankone: note('Terms in decreasing importance; truncating gives the best low-rank approximation.', 'the-rank-one-expansion', 'Learn more about the expansion'),
    done: note('Rank, norms, condition number and all four subspaces from one factorization.', 'the-singular-values', 'Learn more about the numbers'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the singular value decomposition?",
      answer: "The SVD writes any m×n matrix as A = U Σ Vᵀ, where U is an m×m orthogonal matrix, V is an n×n orthogonal matrix, and Σ is an m×n matrix with the singular values σ₁ ≥ σ₂ ≥ … ≥ 0 on its diagonal and zeros elsewhere. Column by column it says A vᵢ = σᵢ uᵢ: an orthonormal set of input directions is sent to an orthogonal set of output directions, each scaled by a singular value. Geometrically, A maps the unit sphere to an ellipsoid whose semi-axes are the singular values."
    },
    obj2: {
      question: "How do you compute the SVD by hand?",
      answer: "Form AᵀA, a symmetric positive semidefinite matrix, and find its eigenvalues and orthonormal eigenvectors. The singular values are the square roots of the eigenvalues, in decreasing order, and the eigenvectors are the columns of V. For each non-zero singular value set uᵢ = A vᵢ / σᵢ; these are automatically orthonormal. If there are fewer non-zero singular values than rows, complete U with any orthonormal vectors perpendicular to the ones found, for instance by Gram–Schmidt on standard basis vectors. Then A = U Σ Vᵀ."
    },
    obj3: {
      question: "How is the SVD related to eigenvalues?",
      answer: "The singular values of A are the square roots of the eigenvalues of AᵀA, and equally of AAᵀ, which has the same non-zero eigenvalues. The right singular vectors are eigenvectors of AᵀA and the left ones are eigenvectors of AAᵀ. For a symmetric positive semidefinite matrix the SVD is its spectral decomposition, with U = V and singular values equal to eigenvalues. For a general matrix the singular values are not the absolute values of the eigenvalues; a matrix may have no real eigenvectors at all and still has an SVD."
    },
    obj4: {
      question: "What is the rank-one expansion and why is it useful?",
      answer: "Expanding U Σ Vᵀ column by column gives A = σ₁ u₁ v₁ᵀ + σ₂ u₂ v₂ᵀ + ⋯ + σᵣ uᵣ vᵣᵀ, a sum of r rank-one matrices ordered by their singular values. Keeping only the first k terms gives the closest rank-k matrix to A, with error equal to the next singular value σₖ₊₁ in the spectral norm. This is the basis of image and data compression, principal component analysis and latent factor models: a few dominant terms usually capture almost all of the matrix."
    },
    obj5: {
      question: "What do the singular values tell you about a matrix?",
      answer: "The number of non-zero singular values is the rank. The largest, σ₁, is the spectral norm, the most the matrix stretches any unit vector, and the square root of the sum of their squares is the Frobenius norm. The ratio σ₁/σᵣ of largest to smallest non-zero singular value is the condition number, which measures how much errors are amplified when solving linear systems with the matrix; a huge ratio means near-singularity. For square matrices the product of the singular values is the absolute value of the determinant."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Singular Value Decomposition Visualizer",
      "description": "Step-by-step visualizer for the SVD A = U Σ Vᵀ of a matrix from 2×2 to 3×3: AᵀA, its eigenvalues and eigenvectors, singular values as square roots, uᵢ = A vᵢ / σᵢ, completion of U, the rectangular Σ, the factorization multiplied out, the rank-one expansion, and rank, norms and condition number.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/singular-value-decomposition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable matrix of any shape from 2×2 to 3×3, seven presets and a shuffle",
        "AᵀA formed and its eigenvalues turned into singular values, with the Frobenius check",
        "One row-reduction scene per eigenvalue of AᵀA for the right singular vectors, with Gram–Schmidt inside repeated eigenspaces",
        "uᵢ = A vᵢ / σᵢ for each non-zero singular value, with the length verified",
        "Completion of U by Gram–Schmidt when the rank is less than the number of rows",
        "A = U · Σ · Vᵀ multiplied out and A written as a sum of rank-one terms",
        "Rank, spectral and Frobenius norms, condition number and the four fundamental subspaces",
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
      "keywords": "singular value decomposition, SVD, SVD calculator, SVD step by step, singular values, A = U Sigma V transpose, how to compute SVD by hand, SVD 2x2, SVD 3x3, left and right singular vectors, rank one approximation, low rank approximation SVD, condition number singular values, linear algebra visualizer, interactive matrix tool"
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
          "name": "Singular Value Decomposition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/singular-value-decomposition"
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
      relatedTools: getRelatedTools('linear-algebra-singular-value-decomposition'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Singular Value Decomposition Visualizer | SVD Step by Step",
        description: "Compute the SVD A = U Σ Vᵀ of a 2×2, 2×3, 3×2 or 3×3 matrix step by step: AᵀA, its eigenvalues, singular values as square roots, uᵢ = A vᵢ / σᵢ, completion of U, the rank-one expansion, and rank, norms and condition number.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/singular-value-decomposition",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="40" r="11" fill="none" stroke="#B5D4F4" stroke-width="1.4"/><line x1="22" y1="40" x2="30" y2="33" stroke="#97C459" stroke-width="2"/><line x1="22" y1="40" x2="15" y2="32" stroke="#FAC775" stroke-width="2"/><path d="M 37 40 L 44 40" stroke="#E6F1FB" stroke-width="1.2"/><path d="M 44 40 L 41 37.5 L 41 42.5 Z" fill="#E6F1FB"/><ellipse cx="60" cy="40" rx="17" ry="7" transform="rotate(-30 60 40)" fill="none" stroke="#85B7EB" stroke-width="1.6"/><line x1="60" y1="40" x2="74.7" y2="31.5" stroke="#97C459" stroke-width="2.4"/><line x1="60" y1="40" x2="56.5" y2="34" stroke="#FAC775" stroke-width="2.4"/><text x="40" y="66" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">A = U&Sigma;V&#7488;</text><text x="40" y="76" font-family="Georgia,serif" font-size="6" fill="#B5D4F4" text-anchor="middle" font-style="italic">Av&#7522; = &sigma;&#7522;u&#7522;</text></svg>`,
        name: "Singular Value Decomposition Visualizer",
        hubDescription: "Compute the SVD of a matrix of your own numbers, of any shape from 2×2 to 3×3, exactly as it is done by hand: form AᵀA, take its eigenvalues and eigenvectors, set σᵢ = √λᵢ and uᵢ = A vᵢ / σᵢ, complete U when the rank falls short, and assemble A = U Σ Vᵀ with a rectangular Σ. The factorization is multiplied out and rewritten as a sum of rank-one terms, and the final scene reports the rank, the spectral and Frobenius norms, the condition number and the four fundamental subspaces. Presets include a rank-one matrix, a rotation with repeated singular values, and wide and tall rectangular cases.",
        category: 'Matrices',
        subCategory: 'Decompositions'
      }
    }
  }
}

export default function SVDVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'forming-a-transpose-a', 'gram'),
    stateRow('obj12', 'the-singular-values', 'eigen'),
    stateRow('obj13', 'from-v-to-u', 'uvec'),
    stateRow('obj14', 'the-factorization', 'factor'),
    stateRow('obj15', 'the-rank-one-expansion', 'rankone'),
    stateRow('obj16', 'completing-u', 'complete'),
    stateRow('obj17', 'a-rank-one-matrix', 'single'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-the-svd-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Singular Value Decomposition</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <SVDWrapper
   defaultPreset='classic'
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
