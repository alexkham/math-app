import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import SpectralWrapper from '../../../../app/components/linear-algebra copy/matrix/SpectralWrapper'
import spectralDiagrams from '../../../../app/components/linear-algebra copy/matrix/spectralDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'spectral decomposition',
    'spectral theorem',
    'symmetric matrix diagonalization',
    'orthogonal diagonalization',
    'A = Q Lambda Q transpose',
    'eigendecomposition symmetric matrix',
    'orthonormal eigenvectors',
    'spectral decomposition calculator',
    'spectral decomposition step by step',
    'positive definite eigenvalues',
    'quadratic form principal axes',
    'rank one decomposition',
    'symmetric matrix eigenvalues real',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Spectral theorem** — every real symmetric matrix has real eigenvalues and an orthonormal basis of eigenvectors.

**Spectral decomposition** — $A = Q\\Lambda Q^T$ with $Q$ orthogonal and $\\Lambda$ diagonal; the diagonalization of a symmetric matrix by an orthogonal change of basis.

**Orthogonal matrix** — $Q^TQ = I$, so $Q^{-1} = Q^T$; its columns are orthonormal.

**Orthonormal eigenvectors** — unit-length eigenvectors, mutually perpendicular; eigenvectors for different eigenvalues of a symmetric matrix are perpendicular automatically.

**Rank-one form** — $A = \\sum \\lambda_i\\mathbf{q}_i\\mathbf{q}_i^T$; each $\\mathbf{q}_i\\mathbf{q}_i^T$ projects onto an eigen-direction.

**Gram–Schmidt inside an eigenspace** — the step needed when an eigenvalue is repeated, to make the basis of its eigenspace orthogonal.

**Quadratic form** — $\\mathbf{x}^TA\\mathbf{x}$, which becomes $\\sum \\lambda_i y_i^2$ in the eigen-coordinates $\\mathbf{y} = Q^T\\mathbf{x}$.

**Definiteness** — positive definite when all eigenvalues are positive, semidefinite when none is negative, indefinite when the signs mix.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a symmetric matrix and watch it split into an orthogonal $Q$ and a diagonal $\\Lambda$.

• Use the **Preset** pills for seven matrices: a classic $2 \\times 2$, an indefinite one, a projection, a $3 \\times 3$ with distinct eigenvalues, a repeated eigenvalue needing Gram–Schmidt, a positive semidefinite matrix, and a non-symmetric shear that stops the run
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$, and **Shuffle** for a random symmetric matrix
• Edit any entry; with **mirror edits** on, the entry across the diagonal follows, so the matrix stays symmetric
• Hover the **?** icon for a reminder of the theorem and what the pieces mean
• Press play or step manually; the step log on the right keeps every stage

The eigenvalues are reported rather than derived, since the eigenvalue visualizer shows that derivation. This tool concentrates on what symmetry adds: perpendicular eigenvectors, a transpose in place of an inverse, and the rank-one expansion.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Symmetry check** — if $A \\neq A^T$ the run stops, with the offending entries marked
• **Eigenvalues** — the roots of $\\det(A - \\lambda I)$, all real
• **Eigenvectors** — for each eigenvalue, $A - \\lambda I$ row reduced and one vector per free column, scaled to integers
• **Gram–Schmidt** — only for a repeated eigenvalue: the second basis vector of its eigenspace is replaced by its component perpendicular to the first
• **Normalize** — each eigenvector divided by its length; the unit vectors become the columns of $Q$, the eigenvalues the diagonal of $\\Lambda$
• **Check** — $Q^TQ = I$
• **Factor** — $A = Q \\cdot \\Lambda \\cdot Q^T$ multiplied out and compared with $A$
• **Rank-one sum** — $A = \\lambda_1\\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2\\mathbf{q}_2\\mathbf{q}_2^T + \\cdots$, with zero-eigenvalue terms dropped
• **Done** — the definiteness verdict from the signs of the eigenvalues, and the quadratic form in eigen-coordinates`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one step with the arithmetic in the caption.

• The columns of $Q$ are colour-coded, one colour per eigenvector, and the rows of $Q^T$ use the same colours, since they are the same vectors
• The diagonal of $\\Lambda$ is blue and its zeros grey; in the final scene positive eigenvalues are accent, negative ones muted, zeros secondary
• Entries of $Q$ are shown as decimals because they involve square roots; the captions give the exact form, such as $(1, 1)/\\sqrt{2}$
• The rank-one terms are computed from the integer eigenvectors as $\\lambda\\mathbf{v}\\mathbf{v}^T / (\\mathbf{v}\\cdot\\mathbf{v})$, so they appear as fractions
• In the Gram–Schmidt scene the left matrix holds the raw basis of the eigenspace and the right one the orthogonalized basis`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The seven presets each make a different point.

• **$2 \\times 2$ classic** — eigenvalues $3$ and $1$ with eigenvectors $(1, 1)$ and $(1, -1)$; $Q$ is a $45°$ rotation
• **Indefinite** — eigenvalues $2$ and $-3$; the quadratic form is a saddle
• **Projection** — eigenvalues $1$ and $0$; the rank-one sum has a single term and $A = \\mathbf{q}\\mathbf{q}^T$ is the projection onto the line of $(1, 1)$
• **$3 \\times 3$ distinct** — eigenvalues $11$, $2$, $1$; the same matrix as the eigenvalue tool's default, with eigenvectors $(0, 1, 2)$, $(1, 0, 0)$, $(0, 2, -1)$, perpendicular as promised
• **Repeated** — $\\lambda = 4$ once and $\\lambda = 1$ twice; the plane of eigenvectors for $1$ needs Gram–Schmidt
• **Semidefinite** — eigenvalues $2$, $2$, $0$; positive semidefinite and singular, rank $2$
• **Not symmetric** — the shear; the run stops at the first scene

Shuffle produces small-integer symmetric matrices; their eigenvalues are usually irrational and the tool shows them to four decimals.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Spectral Theorem Says`,
      content: `A real symmetric matrix $A$ satisfies $A^T = A$. The spectral theorem says two things about it: every eigenvalue is real, and there is an orthonormal basis of eigenvectors. Put those eigenvectors in the columns of $Q$ and the eigenvalues down the diagonal of $\\Lambda$; then $AQ = Q\\Lambda$ as for any diagonalization, and because $Q$ is orthogonal, $Q^{-1} = Q^T$:

$$A = Q\\Lambda Q^T$$

Why the eigenvectors are perpendicular is a two-line argument. If $A\\mathbf{u} = \\lambda\\mathbf{u}$ and $A\\mathbf{v} = \\mu\\mathbf{v}$, then $\\lambda\\,\\mathbf{u}\\cdot\\mathbf{v} = (A\\mathbf{u})\\cdot\\mathbf{v} = \\mathbf{u}\\cdot(A^T\\mathbf{v}) = \\mathbf{u}\\cdot(A\\mathbf{v}) = \\mu\\,\\mathbf{u}\\cdot\\mathbf{v}$, so $(\\lambda - \\mu)\\,\\mathbf{u}\\cdot\\mathbf{v} = 0$, and for $\\lambda \\neq \\mu$ the dot product must vanish. For a repeated eigenvalue the eigenspace has full dimension, and any orthonormal basis of it will do; Gram–Schmidt supplies one.

Expanding the product column by column gives the other form of the theorem,

$$A = \\lambda_1\\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2\\mathbf{q}_2\\mathbf{q}_2^T + \\cdots + \\lambda_n\\mathbf{q}_n\\mathbf{q}_n^T$$

Each $\\mathbf{q}_i\\mathbf{q}_i^T$ is the orthogonal projection onto the line of $\\mathbf{q}_i$, so a symmetric matrix is a weighted sum of projections onto perpendicular directions: it stretches space along $n$ perpendicular axes, by $\\lambda_i$ along each. That is the whole geometry of symmetric matrices.

For the theory, see the [spectral decomposition theory page](!/linear-algebra/decompositions/spectral) and the [eigenvalues overview](!/linear-algebra/eigen).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that follow from $A = Q\\Lambda Q^T$.

• **Real eigenvalues**, always; complex eigenvalues cannot occur for a symmetric matrix
• **Always diagonalizable**; a symmetric matrix is never defective, and its geometric multiplicities equal its algebraic ones
• **Orthogonal $Q$**: $Q^TQ = QQ^T = I$, so the change to eigen-coordinates preserves lengths and angles
• **Quadratic form**: $\\mathbf{x}^TA\\mathbf{x} = \\sum \\lambda_i y_i^2$ with $\\mathbf{y} = Q^T\\mathbf{x}$; the principal axes are the columns of $Q$
• **Definiteness** is read from the signs: all positive means positive definite, none negative means semidefinite, mixed means indefinite
• **Rank** equals the number of non-zero eigenvalues
• **Powers and functions**: $A^k = Q\\Lambda^kQ^T$ and $f(A) = Qf(\\Lambda)Q^T$; a positive definite matrix has a symmetric positive definite square root
• **Extremes**: the largest eigenvalue is the maximum of $\\mathbf{x}^TA\\mathbf{x}$ over unit vectors, attained at $\\mathbf{q}_1$; the smallest is the minimum
• **Norm**: $\\|A\\|_2 = \\max|\\lambda_i|$ for symmetric $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Symmetric matrices are the most common kind in applications, and the spectral theorem is why they are tractable.

• **Principal component analysis**: the covariance matrix is symmetric; its eigenvectors are the principal axes and its eigenvalues the variances along them
• **Quadratic forms and conics**: $\\mathbf{x}^TA\\mathbf{x} = 1$ is an ellipse, hyperbola or pair of lines according to the signs of the eigenvalues, with axes along the columns of $Q$
• **Optimization**: the Hessian at a critical point is symmetric, and its definiteness decides minimum, maximum or saddle
• **Mechanics**: the inertia tensor, the stress tensor and the stiffness matrix are symmetric; their eigenvectors are principal axes, principal stresses, normal modes
• **Graphs**: the adjacency and Laplacian matrices are symmetric, and spectral clustering uses their eigenvectors
• **Singular value decomposition**: $A^TA$ is symmetric positive semidefinite, and its spectral decomposition is where the singular values come from
• **Numerical stability**: orthogonal $Q$ means no error amplification in the change of basis`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$$

**Eigenvalues.** $\\lambda^2 - 4\\lambda + 3 = (\\lambda - 3)(\\lambda - 1)$, so $\\lambda = 3, 1$.

**Eigenvectors.** For $3$: $A - 3I = \\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ gives $\\mathbf{v}_1 = (1, 1)$. For $1$: $A - I = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$ gives $\\mathbf{v}_2 = (1, -1)$. Their dot product is $0$.

**Normalize.** $\\mathbf{q}_1 = (1, 1)/\\sqrt{2}$, $\\mathbf{q}_2 = (1, -1)/\\sqrt{2}$, so

$$Q = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\qquad \\Lambda = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$$

**Check.** $Q^TQ = \\frac{1}{2}\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} = I$, and $Q\\Lambda Q^T = \\frac{1}{2}\\begin{pmatrix} 3 & 1 \\\\ 3 & -1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} = \\frac{1}{2}\\begin{pmatrix} 4 & 2 \\\\ 2 & 4 \\end{pmatrix} = A$.

**Rank-one sum.** $3\\mathbf{q}_1\\mathbf{q}_1^T = \\frac{3}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$ and $1\\mathbf{q}_2\\mathbf{q}_2^T = \\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix}$; their sum is $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.

**Quadratic form.** $2x_1^2 + 2x_1x_2 + 2x_2^2 = 3y_1^2 + y_2^2$ with $y_1 = (x_1 + x_2)/\\sqrt{2}$ and $y_2 = (x_1 - x_2)/\\sqrt{2}$. Both eigenvalues are positive: $A$ is positive definite, and $\\mathbf{x}^TA\\mathbf{x} = 1$ is an ellipse with axes along $(1, 1)$ and $(1, -1)$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Forgetting to normalize** — with integer eigenvectors in $P$, $P^{-1} \\neq P^T$ and $P\\Lambda P^T \\neq A$; the transpose trick needs unit columns
• **Assuming perpendicularity inside a repeated eigenspace** — the two vectors row reduction hands you for a repeated eigenvalue are usually not perpendicular; Gram–Schmidt is needed
• **Applying the theorem to a non-symmetric matrix** — the eigenvectors of a non-symmetric matrix are not perpendicular in general, and its eigenvalues need not be real
• **Mismatching the order** — column $i$ of $Q$ must carry the eigenvalue in position $i$ of $\\Lambda$
• **Reading definiteness from the entries** — positive entries do not make a matrix positive definite; only the eigenvalues, or equivalently the leading principal minors, decide it
• **Dropping the factor $\\lambda$ in the rank-one sum** — $A = \\sum \\lambda_i\\mathbf{q}_i\\mathbf{q}_i^T$; without the weights the sum is $QQ^T = I$
• **Confusing $Q\\Lambda Q^T$ with $Q^T\\Lambda Q$** — both are symmetric, but only the first is $A$; the second is $A$ in the rotated frame`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — the ingredients; the eigenvalue tool derives them for any matrix.

[Diagonalization](!/linear-algebra/visual-tools/matrix-diagonalization) — the general $A = PDP^{-1}$; the spectral decomposition is its symmetric special case with $P$ orthogonal.

[Gram–Schmidt](!/linear-algebra/visual-tools/gram-schmidt) — the orthogonalization used inside a repeated eigenspace.

[Orthogonal matrices](!/linear-algebra/visual-tools/orthogonal-matrices) — what $Q$ is; rotations and reflections of the axes.

**Quadratic forms and conics** — the geometric reading of $\\Lambda$ and $Q$.

[Positive definite matrices and Cholesky](!/linear-algebra/visual-tools/cholesky-decomposition) — the all-positive case, and its other factorization.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — the generalization to every matrix, built from the spectral decompositions of $A^TA$ and $AA^T$.

[Projection matrices](!/linear-algebra/visual-tools/projection-2d) — the rank-one pieces $\\mathbf{q}_i\\mathbf{q}_i^T$; a projection is itself symmetric with eigenvalues $1$ and $0$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `From Eigenvectors to Q`,
      content: `The frozen picture below shows the default preset's integer eigenvectors $(1, 1)$ and $(1, -1)$ on the left, the unit columns of $Q$ in the middle, and $\\Lambda$ on the right. Each column of $Q$ is an eigenvector divided by its length $\\sqrt{2}$.

The columns are already perpendicular; normalization is all that separates a diagonalizing $P$ from an orthogonal $Q$.`,
      before: ``,
      after: `Normalization matters because the transpose trick depends on it. $P^TP$ for the integer vectors is $\\operatorname{diag}(2, 2)$, not $I$, so $P^T$ is not $P^{-1}$; after dividing each column by $\\sqrt{2}$ the product becomes $I$ exactly. The eigenvectors are only determined up to scale, and the unit scale is the one that makes $Q$ orthogonal.

For a $2 \\times 2$ matrix $Q$ is a rotation or a reflection of the plane. Here it is the $45°$ rotation followed by a reflection, since $\\det Q = -1$; swapping the columns, together with the entries of $\\Lambda$, would give a pure rotation.`,
      link: '',
    },
    obj12: {
      title: `Q Transpose Q Equals I`,
      content: `The frozen picture below shows $Q^TQ = I$ for the default preset. The diagonal entries are $\\mathbf{q}_i\\cdot\\mathbf{q}_i = 1$ and the off-diagonal ones $\\mathbf{q}_1\\cdot\\mathbf{q}_2 = 0$.

This single identity replaces the computation of an inverse in every symmetric problem.`,
      before: ``,
      after: `An orthogonal matrix preserves dot products, $Q\\mathbf{x}\\cdot Q\\mathbf{y} = \\mathbf{x}\\cdot\\mathbf{y}$, hence lengths and angles. Changing to eigen-coordinates by $\\mathbf{y} = Q^T\\mathbf{x}$ is therefore a rigid motion of the axes, which is why the geometry of the quadratic form, its ellipse or hyperbola, is undistorted by the change: the principal axes really are perpendicular in the original picture.

For a non-symmetric diagonalizable matrix the corresponding $P$ is not orthogonal, the eigen-coordinates are skewed, and the same change of basis stretches and shears the picture.`,
      link: '',
    },
    obj13: {
      title: `The Factorization`,
      content: `The frozen picture below shows $A = Q\\Lambda Q^T$ for the default preset, with the columns of $Q$ and the rows of $Q^T$ in matching colours.

Read from the right: $Q^T$ rotates into the eigenvector axes, $\\Lambda$ stretches by $3$ along one and $1$ along the other, and $Q$ rotates back.`,
      before: ``,
      after: `This is the geometric content of the theorem. A symmetric matrix is a stretch along perpendicular axes, nothing more; the axes are the columns of $Q$ and the stretch factors the eigenvalues. The unit circle is mapped to an ellipse whose axes are the eigenvectors and whose semi-axes are the eigenvalues, when they are positive.

Contrast a general matrix, whose image of the unit circle is also an ellipse but whose axes are not eigenvectors. The singular value decomposition recovers a stretch-along-perpendicular-axes description for every matrix, at the cost of two different orthogonal matrices instead of one.`,
      link: '',
    },
    obj14: {
      title: `The Rank-One Expansion`,
      content: `The frozen picture below shows the default preset written as $3\\mathbf{q}_1\\mathbf{q}_1^T + 1\\mathbf{q}_2\\mathbf{q}_2^T$: the matrix of halves $\\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$ weighted by $3$, plus $\\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix}$ weighted by $1$.

Each piece is the orthogonal projection onto an eigen-direction; the pieces add to $I$ without the weights and to $A$ with them.`,
      before: ``,
      after: `The expansion makes the action of $A$ transparent. To compute $A\\mathbf{x}$, project $\\mathbf{x}$ onto each eigenvector, scale each projection by its eigenvalue, and add. Since the projections of $\\mathbf{x}$ onto an orthonormal basis reassemble $\\mathbf{x}$, the unweighted sum is the identity, and $A$ is $I$ with the directions reweighted.

It is also the form used for approximation. Keeping only the terms with the largest eigenvalues gives the best low-rank approximation of a symmetric matrix, the principle behind principal component analysis; the projection preset, with one term, is already rank one.`,
      link: '',
    },
    obj15: {
      title: `Gram–Schmidt Inside a Repeated Eigenspace`,
      content: `The repeated preset has $\\lambda = 1$ twice, and row reduction of $A - I$ hands over $(1, -1, 0)$ and $(1, 0, -1)$, which are not perpendicular. The frozen picture below shows the Gram–Schmidt scene: the second vector loses its component along the first and becomes $(1, 1, -2)$.

Both are still eigenvectors for $1$, since the eigenspace is a plane and any vector in it qualifies.`,
      before: ``,
      after: `The theorem guarantees an orthonormal eigenvector basis exists, not that row reduction will produce one. Eigenvectors for different eigenvalues come out perpendicular by themselves, and here $(1, 1, 1)$ for $\\lambda = 4$ is perpendicular to both of the others already. Inside a repeated eigenspace there is freedom, and Gram–Schmidt is how the freedom is spent.

The semidefinite preset shows the other possibility: its repeated eigenvalue $2$ has eigenvectors $(1, 1, 0)$ and $(0, 0, 1)$, which happen to be perpendicular, and the Gram–Schmidt scene changes nothing.`,
      link: '',
    },
    obj16: {
      title: `A Single Rank-One Term`,
      content: `The projection preset $\\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$ has eigenvalues $1$ and $0$. The frozen picture below shows its rank-one scene: one term, $1\\cdot\\mathbf{q}_1\\mathbf{q}_1^T$ with $\\mathbf{q}_1 = (1, 1)/\\sqrt{2}$, which is the matrix itself.

The zero eigenvalue contributes nothing, and the rank is one.`,
      before: ``,
      after: `A projection matrix is the simplest spectral decomposition: eigenvalue $1$ on the subspace projected onto, $0$ on its orthogonal complement, and $A = \\mathbf{q}\\mathbf{q}^T$ when the subspace is a line. Every orthogonal projection is symmetric with eigenvalues in $\\{0, 1\\}$, and conversely; it is positive semidefinite, and its rank is the dimension of the target.

The number of non-zero eigenvalues is the rank in general, and the rank-one sum with the zero terms removed is the shortest way to write a singular symmetric matrix.`,
      link: '',
    },
    obj17: {
      title: `When the Matrix Is Not Symmetric`,
      content: `The last preset is the shear $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$. The frozen picture below shows the run stopping at the symmetry check, with the two entries that differ across the diagonal marked.

Without symmetry none of the guarantees hold: this matrix is in fact defective, with one eigenvector for its double eigenvalue.`,
      before: ``,
      after: `The theorem is an equivalence in one direction: $Q\\Lambda Q^T$ is always symmetric, so a non-symmetric matrix cannot have such a form. It may still be diagonalizable with a non-orthogonal $P$, in which case the diagonalization tool applies; it may be defective, like this shear; or it may have complex eigenvalues, like a rotation.

The mirror-edits option keeps the entry grid symmetric while you experiment. Turn it off to see how quickly an asymmetric change removes the structure, and turn it back on to restore it.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from SpectralWrapper's own buildScenes on the default preset (and
     the repeated, projection and not-symmetric presets for their special
     scenes) and rendered through frozenMatrixSvgFixed. Stills are found by
     phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: spectralDiagrams[key], caption, text })

  const stateUnits = {
    normalize: unit('normalize', 'Eigenvectors to Q, frozen',
      'The default preset: (1, 1) and (1, &minus;1) divided by &radic;2 become the unit columns of Q, ' +
      'with &Lambda; = diag(3, 1) in the same order. The columns were perpendicular already.'),
    orthocheck: unit('orthocheck', 'Q&#7488;Q = I, frozen',
      'Ones on the diagonal (unit length), zeros off it (perpendicular). So Q&#8315;&#185; = Q&#7488;, and no inverse ' +
      'is ever computed.'),
    factor: unit('factor', 'A = Q &Lambda; Q&#7488;, frozen',
      'Columns of Q and rows of Q&#7488; in matching colours. Right to left: rotate into the eigen-axes, stretch by 3 and 1, ' +
      'rotate back. The product reproduces A.'),
    rankone: unit('rankone', 'Rank-one expansion, frozen',
      'A = 3&middot;q&#8321;q&#8321;&#7488; + 1&middot;q&#8322;q&#8322;&#7488;: the halves matrix weighted by 3 plus the ' +
      'alternating halves matrix weighted by 1. Each term projects onto an eigen-direction.'),
    gram: unit('gram', 'Gram&ndash;Schmidt in the &lambda; = 1 plane, frozen',
      'The repeated preset: (1, &minus;1, 0) and (1, 0, &minus;1) are both eigenvectors for 1 but not perpendicular. ' +
      'Subtracting the projection of the second onto the first gives (1, 1, &minus;2).'),
    projection: unit('projection', 'A single term, frozen',
      'The projection preset has eigenvalues 1 and 0, so the rank-one sum has one term, q&#8321;q&#8321;&#7488; with ' +
      'q&#8321; = (1, 1)/&radic;2 - which is A itself. Rank one.'),
    notsym: unit('notsym', 'Not symmetric, frozen',
      'The shear stops at the symmetry check with the entries 2 and 0 marked. No orthogonal Q exists; ' +
      'this matrix is defective besides.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     SpectralWrapper accepts an explanations prop keyed by scene phase:
     intro, notsym, eigen, eigvec, orthogonalize, normalize, orthocheck,
     factor, rankone, done. Captions render with dangerouslySetInnerHTML,
     so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-spectral-theorem-says" style="color:#1d4ed8;font-weight:600">the theorem</a></div>`

  const explanations = {
    intro: note('Real eigenvalues, perpendicular eigenvectors, and a transpose instead of an inverse.', 'from-eigenvectors-to-q', 'Learn more about Q'),
    notsym: note('Q&Lambda;Q&#7488; is always symmetric, so an unsymmetric A has no such form.', 'when-the-matrix-is-not-symmetric', 'Learn more about the symmetry check'),
    eigen: note('Always real for a symmetric matrix; the eigenvalue tool derives them.', 'from-eigenvectors-to-q', 'Learn more about Q'),
    eigvec: note('Eigenvectors for different eigenvalues are perpendicular automatically.', 'gram-schmidt-inside-a-repeated-eigenspace', 'Learn more about repeated eigenvalues'),
    orthogonalize: note('Inside a repeated eigenspace the basis must be orthogonalized by hand.', 'gram-schmidt-inside-a-repeated-eigenspace', 'Learn more about Gram&ndash;Schmidt here'),
    normalize: note('Unit length is what makes Q&#7488; the inverse of Q.', 'from-eigenvectors-to-q', 'Learn more about normalizing'),
    orthocheck: note('Dot products of orthonormal columns: 1 on the diagonal, 0 off it.', 'q-transpose-q-equals-i', 'Learn more about the check'),
    factor: note('Rotate to the eigen-axes, stretch, rotate back.', 'the-factorization', 'Learn more about the factorization'),
    rankone: note('Projections onto perpendicular directions, weighted by the eigenvalues.', 'the-rank-one-expansion', 'Learn more about the expansion'),
    done: note('Signs of the eigenvalues classify the quadratic form.', 'the-factorization', 'Learn more about definiteness'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the spectral decomposition of a symmetric matrix?",
      answer: "It is the factorization A = Q Λ Qᵀ, where Q is an orthogonal matrix whose columns are orthonormal eigenvectors of A and Λ is the diagonal matrix of the corresponding eigenvalues. It exists for every real symmetric matrix by the spectral theorem, which guarantees real eigenvalues and an orthonormal eigenvector basis. Equivalently, A is the sum of λᵢ qᵢ qᵢᵀ over its eigenpairs, a weighted sum of projections onto perpendicular directions."
    },
    obj2: {
      question: "How is the spectral decomposition different from ordinary diagonalization?",
      answer: "Ordinary diagonalization writes A = P D P⁻¹ with any invertible P of eigenvectors, which requires computing an inverse and may skew the coordinates. For a symmetric matrix the eigenvectors can be chosen orthonormal, so P becomes an orthogonal Q with Q⁻¹ = Qᵀ: no inverse is needed, the change of basis is a rotation or reflection, and the geometry of the quadratic form is preserved. Symmetric matrices are also never defective and never have complex eigenvalues."
    },
    obj3: {
      question: "Why are the eigenvectors of a symmetric matrix perpendicular?",
      answer: "If A u = λ u and A v = μ v with A symmetric, then λ (u·v) = (A u)·v = u·(A v) = μ (u·v), so (λ − μ)(u·v) = 0. For different eigenvalues this forces u·v = 0. For a repeated eigenvalue the eigenvectors are not automatically perpendicular, but the eigenspace has full dimension and Gram–Schmidt produces an orthonormal basis of it, so an orthonormal eigenvector basis always exists."
    },
    obj4: {
      question: "How do the eigenvalues decide whether a symmetric matrix is positive definite?",
      answer: "In eigen-coordinates y = Qᵀ x the quadratic form xᵀ A x becomes λ₁ y₁² + λ₂ y₂² + ⋯. It is positive for every non-zero x exactly when every eigenvalue is positive, which is positive definite; non-negative when no eigenvalue is negative, which is positive semidefinite; and of both signs when the eigenvalues have both signs, which is indefinite. The level sets are ellipsoids in the definite case and hyperboloids in the indefinite case, with axes along the eigenvectors."
    },
    obj5: {
      question: "What is the rank-one form A = Σ λᵢ qᵢ qᵢᵀ used for?",
      answer: "Each qᵢ qᵢᵀ is the orthogonal projection onto the eigenvector qᵢ, so the form says A projects onto each eigen-direction, scales by the eigenvalue, and adds. Dropping the terms with small eigenvalues gives the best low-rank approximation of A, which is the basis of principal component analysis and of spectral methods generally. It also shows immediately that the rank of A is the number of non-zero eigenvalues and that functions of A act by applying the function to each λᵢ."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Spectral Decomposition Visualizer",
      "description": "Step-by-step visualizer for the spectral decomposition A = Q Λ Qᵀ of a symmetric 2×2 or 3×3 matrix: eigenvalues, eigenvectors, Gram–Schmidt inside repeated eigenspaces, normalization into an orthogonal Q, the check QᵀQ = I, the factorization, the rank-one expansion, and the definiteness verdict.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/spectral-decomposition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable symmetric 2×2 or 3×3 matrix with mirrored edits, seven presets and a shuffle",
        "Symmetry check that stops the run for a non-symmetric matrix",
        "One row-reduction scene per eigenvalue with integer eigenvectors",
        "Gram–Schmidt inside a repeated eigenspace",
        "Normalization into Q and the check Qᵀ Q = I",
        "A = Q · Λ · Qᵀ multiplied out and A written as a sum of rank-one projections",
        "Definiteness verdict and the quadratic form in eigen-coordinates",
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
      "keywords": "spectral decomposition, spectral theorem, symmetric matrix diagonalization, orthogonal diagonalization, A = Q Lambda Q transpose, eigendecomposition symmetric matrix, orthonormal eigenvectors, spectral decomposition calculator, spectral decomposition step by step, positive definite eigenvalues, quadratic form principal axes, rank one decomposition, symmetric matrix eigenvalues real, linear algebra visualizer, interactive matrix tool"
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
          "name": "Spectral Decomposition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/spectral-decomposition"
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
      relatedTools: getRelatedTools('linear-algebra-spectral-decomposition'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Spectral Decomposition Visualizer | A = QΛQᵀ Step by Step",
        description: "Decompose a symmetric 2×2 or 3×3 matrix as A = Q Λ Qᵀ step by step: eigenvalues, perpendicular eigenvectors, Gram–Schmidt for repeated ones, an orthogonal Q, the rank-one expansion, and the definiteness verdict.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/spectral-decomposition",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="40" rx="26" ry="12" transform="rotate(-35 40 40)" fill="none" stroke="#85B7EB" stroke-width="1.6"/><line x1="40" y1="40" x2="61" y2="25" stroke="#FAC775" stroke-width="2.6"/><path d="M 64.5 22.5 L 57 24.5 L 60 30 Z" fill="#FAC775"/><line x1="40" y1="40" x2="33" y2="30" stroke="#97C459" stroke-width="2.6"/><path d="M 31 27 L 31 33.5 L 36.5 30 Z" fill="#97C459"/><circle cx="40" cy="40" r="2" fill="#E6F1FB"/><text x="66" y="48" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" font-style="italic">q&#8321;</text><text x="22" y="30" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" font-style="italic">q&#8322;</text><text x="40" y="72" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">A = Q&Lambda;Q&#7488;</text></svg>`,
        name: "Spectral Decomposition Visualizer",
        hubDescription: "Decompose a symmetric matrix of your own numbers as A = Q Λ Qᵀ, exactly as it is done by hand: eigenvalues, one integer eigenvector per eigenvalue, Gram–Schmidt inside any repeated eigenspace, normalization into an orthogonal Q, the check that Qᵀ Q = I, the factorization multiplied out, and A rewritten as a sum of rank-one projections λᵢ qᵢqᵢᵀ. The final scene classifies the quadratic form as definite, semidefinite or indefinite from the signs of the eigenvalues. Presets include a projection, a saddle, a repeated eigenvalue, and a non-symmetric shear that stops the run.",
        category: 'Matrices',
        subCategory: 'Eigenvalues'
      }
    }
  }
}

export default function SpectralVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'from-eigenvectors-to-q', 'normalize'),
    stateRow('obj12', 'q-transpose-q-equals-i', 'orthocheck'),
    stateRow('obj13', 'the-factorization', 'factor'),
    stateRow('obj14', 'the-rank-one-expansion', 'rankone'),
    stateRow('obj15', 'gram-schmidt-inside-a-repeated-eigenspace', 'gram'),
    stateRow('obj16', 'a-single-rank-one-term', 'projection'),
    stateRow('obj17', 'when-the-matrix-is-not-symmetric', 'notsym'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-the-spectral-theorem-says'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Spectral Decomposition</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <SpectralWrapper
   defaultPreset='twoByTwo'
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
