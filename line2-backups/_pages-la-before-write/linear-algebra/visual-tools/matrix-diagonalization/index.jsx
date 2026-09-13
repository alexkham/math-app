import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import DiagonalizationWrapper from '../../../../app/components/linear-algebra copy/matrix/DiagonalizationWrapper'
import diagonalizationDiagrams from '../../../../app/components/linear-algebra copy/matrix/diagonalizationDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix diagonalization',
    'diagonalize a matrix',
    'diagonalization calculator',
    'A = PDP^-1',
    'diagonalizable matrix',
    'eigendecomposition',
    'matrix power using diagonalization',
    'how to diagonalize a matrix step by step',
    'defective matrix not diagonalizable',
    'diagonalization 2x2',
    'diagonalization 3x3',
    'spectral decomposition symmetric matrix',
    'eigenvalues eigenvectors visualizer',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Diagonalization** — writing $A = PDP^{-1}$ with $D$ diagonal.

**$P$** — the matrix whose columns are $n$ independent eigenvectors of $A$; invertible because they are independent.

**$D$** — the diagonal matrix of eigenvalues, in the same order as the columns of $P$.

**Diagonalizable** — a matrix that has $n$ independent eigenvectors; equivalently, one whose geometric multiplicities all equal the algebraic ones.

**Defective** — a matrix with too few eigenvectors; it has no diagonal form, only a Jordan form.

**Similar matrices** — $A$ and $P^{-1}AP$; they share eigenvalues, trace and determinant. Diagonalization is similarity to a diagonal matrix.

**Eigenvector basis** — the columns of $P$; in this basis the map is a pure scaling.

**Spectral decomposition** — the symmetric case $A = QDQ^T$, where $Q$ is orthogonal, so the inverse is the transpose.

**Power formula** — $A^k = PD^kP^{-1}$, with $D^k$ obtained by powering the diagonal entries.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a matrix and a power, then watch it factor into $PDP^{-1}$.

• Use the **Preset** pills for eight matrices: a classic $2 \\times 2$, a symmetric one, a Markov chain, the Fibonacci matrix, a $3 \\times 3$ with distinct eigenvalues, a repeated eigenvalue that still diagonalizes, a defective matrix, and a rotation
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$, and the **k** stepper to choose which power $A^k$ the last scene computes
• Edit any entry directly, or press **Shuffle** for a random matrix with small integer eigenvalues
• Hover the **?** icon for a reminder of what diagonalization is and when it works
• Press play or step manually; the step log on the right keeps every stage

The eigenvalues and eigenvectors are reported, not derived, since the eigenvalue visualizer shows that derivation. This tool picks up where it stops: assembling $P$ and $D$, inverting $P$, checking the product, and using the factorization for a power. Defective and complex cases stop early with an explanation.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Scenes in Order`,
      content: `The visualizer follows the textbook procedure exactly.

• **Eigenvalues** — the characteristic polynomial and its roots, with the trace as a check
• **Eigenvectors** — one per free column of $A - \\lambda I$ for each eigenvalue, shown as columns above their eigenvalues; if there are fewer than $n$, the run stops with a defective verdict
• **Assemble** — $P$ from the eigenvectors, $D$ from the eigenvalues, in matching order
• **Invert** — $P^{-1}$ by row reducing $[P \\mid I]$, with the determinant of $P$ noted
• **Factor** — $A = P \\cdot D \\cdot P^{-1}$ multiplied out and compared with $A$
• **Verify** — $P^{-1} A P = D$, the same identity from the other side
• **Power** — $A^k = P D^k P^{-1}$ for the chosen $k$, with $D^k$ obtained by powering the diagonal
• **Done** — the factorization with a note on symmetry and on how $A^k$ behaves as $k$ grows

Complex eigenvalues stop the run after the first scene, since no real $P$ exists.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one step with the arithmetic in the caption.

• The columns of $P$ are colour-coded, one colour per eigenvector, and the eigenvalue row above them uses the same order
• The diagonal of $D$ is blue and its zeros are grey, to stress that only the diagonal carries information
• $P^{-1}$ is secondary throughout; it usually carries fractions with $\\det P$ in the denominator
• In the **factor** and **power** scenes the left-hand matrix, $A$ or $A^k$, is the target being reproduced
• In the **verify** scene the diagonal of the product is the target: the off-diagonal zeros are the check
• Eigenvectors are scaled to small integers whenever possible; the Fibonacci preset shows decimals because its eigenvalues are irrational`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The eight presets each make a different point.

• **$2 \\times 2$ classic** — eigenvalues $5$ and $2$ with eigenvectors $(1, 1)$ and $(1, -2)$; $\\det P = -3$, so $P^{-1}$ has thirds
• **Symmetric** — eigenvalues $3$ and $1$ with perpendicular eigenvectors; normalizing the columns of $P$ gives an orthogonal $Q$ and $A = QDQ^T$
• **Markov chain** — eigenvalues $1$ and $0.4$; raise $k$ and watch $A^k$ settle toward the steady state, whose columns are multiples of the eigenvector for $1$
• **Fibonacci** — $\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$ with eigenvalues $\\varphi$ and $-1/\\varphi$; $A^k$ contains Fibonacci numbers, and the diagonalization is Binet's formula
• **$3 \\times 3$ distinct** — eigenvalues $11$, $2$, $1$; the same matrix as the eigenvalue tool's default
• **Repeated but fine** — $\\lambda = 1$ twice with a plane of eigenvectors; repeated eigenvalues do not by themselves prevent diagonalization
• **Defective** — the shear, with $\\lambda = 1$ twice but a single eigenvector; the run stops
• **Rotation** — complex eigenvalues $\\pm i$; no real diagonalization

Shuffle builds $A$ as $PDP^{-1}$ with an integer unimodular $P$, so the eigenvalues are small integers and the run always completes.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Diagonalization Is`,
      content: `Suppose $A$ has $n$ linearly independent eigenvectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_n$ with eigenvalues $\\lambda_1, \\ldots, \\lambda_n$. Put the eigenvectors as the columns of $P$ and the eigenvalues down the diagonal of $D$. Then

$$AP = A\\begin{pmatrix} \\mathbf{v}_1 & \\cdots & \\mathbf{v}_n \\end{pmatrix} = \\begin{pmatrix} \\lambda_1\\mathbf{v}_1 & \\cdots & \\lambda_n\\mathbf{v}_n \\end{pmatrix} = PD$$

column by column, because each column of $AP$ is $A\\mathbf{v}_j = \\lambda_j\\mathbf{v}_j$. Since the columns of $P$ are independent, $P$ is invertible, and

$$A = PDP^{-1}, \\qquad D = P^{-1}AP$$

Read right to left, $A$ becomes three simple moves: $P^{-1}$ expresses a vector in eigenvector coordinates, $D$ scales each coordinate by its eigenvalue, and $P$ converts back. In the eigenvector basis the transformation is a pure scaling; that is what "diagonal" means geometrically.

The condition is exactly $n$ independent eigenvectors. Distinct eigenvalues guarantee it. A repeated eigenvalue is fine as long as its eigenspace is as large as its multiplicity; when it is smaller the matrix is defective and no $P$ exists. Complex eigenvalues of a real matrix give a complex $P$ and $D$, which is a diagonalization over $\\mathbb{C}$ but not over $\\mathbb{R}$.

The payoff is functions of $A$. Because $A^k = PD^kP^{-1}$ and $D^k$ is just the diagonal entries raised to $k$, every power costs two multiplications, and the same trick defines $e^{A}$, $\\sqrt{A}$, and any polynomial in $A$. For the theory, see the [diagonalization theory page](!/linear-algebra/eigen/diagonalization) and the [eigenvalues overview](!/linear-algebra/eigen).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that follow from $A = PDP^{-1}$.

• **Powers**: $A^k = PD^kP^{-1}$; negative $k$ works too when no eigenvalue is zero
• **Polynomials and functions**: $f(A) = Pf(D)P^{-1}$ with $f$ applied entry by entry to the diagonal
• **Invariants**: $\\det A = \\prod \\lambda_i$ and $\\operatorname{tr} A = \\sum \\lambda_i$, read straight off $D$
• **Distinct eigenvalues** always give a diagonalizable matrix
• **Symmetric matrices** are always diagonalizable, with an orthogonal $P$: $A = QDQ^T$
• **Non-uniqueness**: scaling or reordering the columns of $P$, with the same reordering of $D$, gives another valid factorization
• **Similarity**: $A$ and $D$ are similar, so they share rank, eigenvalues, characteristic polynomial and minimal polynomial
• **Long-run behaviour**: $A^k$ is dominated by the eigenvalue of largest modulus; it grows if that modulus exceeds $1$, settles if it equals $1$, and dies out if it is below $1$
• **Defective matrices** have no diagonal form; the Jordan form is the nearest replacement`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Diagonalization is how eigenvalues get used.

• **Recurrences**: the Fibonacci matrix diagonalized is Binet's closed formula, and the same works for any linear recurrence
• **Markov chains**: $A^k$ converges to the steady state because the eigenvalue $1$ survives while the others decay; the rate is the second-largest modulus
• **Systems of differential equations**: $\\dot{\\mathbf{x}} = A\\mathbf{x}$ decouples into $n$ scalar equations in the eigenvector basis, with solutions $e^{\\lambda_i t}$
• **Matrix exponentials**: $e^{At} = Pe^{Dt}P^{-1}$, the workhorse of linear dynamics and control
• **Quadratic forms**: for symmetric $A$, $\\mathbf{x}^TA\\mathbf{x}$ becomes a sum of $\\lambda_i y_i^2$ in the eigenvector coordinates, which classifies conics and tests definiteness
• **Principal component analysis**: diagonalizing a covariance matrix rotates the data onto its axes of greatest variance
• **Graph algorithms**: counts of walks of length $k$ are entries of $A^k$ for the adjacency matrix`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$$

**Eigenvalues.** $\\det(A - \\lambda I) = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 5)(\\lambda - 2)$, so $\\lambda = 5, 2$. Check: they sum to the trace $7$ and multiply to the determinant $10$.

**Eigenvectors.** For $\\lambda = 5$, $A - 5I = \\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}$ gives $x_1 = x_2$: $\\mathbf{v}_1 = (1, 1)$. For $\\lambda = 2$, $A - 2I = \\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$ gives $x_2 = -2x_1$: $\\mathbf{v}_2 = (1, -2)$.

**Assemble.** $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -2 \\end{pmatrix}$, $D = \\begin{pmatrix} 5 & 0 \\\\ 0 & 2 \\end{pmatrix}$.

**Invert.** $\\det P = -3$, so $P^{-1} = \\frac{1}{-3}\\begin{pmatrix} -2 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 2/3 & 1/3 \\\\ 1/3 & -1/3 \\end{pmatrix}$.

**Check.** $PD = \\begin{pmatrix} 5 & 2 \\\\ 5 & -4 \\end{pmatrix}$, and $PDP^{-1} = \\begin{pmatrix} 10/3 + 2/3 & 5/3 - 2/3 \\\\ 10/3 - 4/3 & 5/3 + 4/3 \\end{pmatrix} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} = A$.

**A cube.** $D^3 = \\begin{pmatrix} 125 & 0 \\\\ 0 & 8 \\end{pmatrix}$, so $A^3 = PD^3P^{-1} = \\begin{pmatrix} 125 & 8 \\\\ 125 & -16 \\end{pmatrix}\\begin{pmatrix} 2/3 & 1/3 \\\\ 1/3 & -1/3 \\end{pmatrix} = \\begin{pmatrix} 86 & 39 \\\\ 78 & 47 \\end{pmatrix}$.

Direct multiplication agrees: $A^2 = \\begin{pmatrix} 18 & 7 \\\\ 14 & 11 \\end{pmatrix}$ and $A^3 = A^2A = \\begin{pmatrix} 86 & 39 \\\\ 78 & 47 \\end{pmatrix}$. Note that $86 + 47 = 133 = 125 + 8$: the trace of $A^3$ is the sum of the cubed eigenvalues.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Mismatched order** — column $j$ of $P$ must be the eigenvector for entry $j$ of $D$; reorder one and you must reorder the other
• **Writing $P^{-1}DP$** — the eigenvectors go in $P$ and $A = PDP^{-1}$; the reversed form is what you get if $P$ holds the eigenvectors of $A^T$, not of $A$
• **Transposing instead of inverting** — $P^{-1} = P^T$ only when $P$ is orthogonal, which requires orthonormal eigenvectors, guaranteed only for symmetric $A$ and only after normalizing
• **Reading a repeated root as defective** — a repeated eigenvalue is only a problem if its eigenspace is too small; the repeated preset diagonalizes fine
• **Assuming every matrix diagonalizes** — shears and other defective matrices do not, and real rotations do not over the reals
• **Powering $A$ entry by entry** — $A^k$ is a matrix power; only $D^k$ can be computed entry by entry, and that is the point of the factorization
• **Forgetting the check** — $P^{-1}AP$ must come out diagonal; any off-diagonal entry means a column of $P$ is wrong`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Eigenvalues and eigenvectors](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — the input to diagonalization; the eigenvalue tool derives them.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — $P^{-1}$ is computed here by the same row reduction of $[P \\mid I]$.

[Matrix powers](!/linear-algebra/visual-tools/matrix-power) — the main application; the power tool multiplies directly, this one uses the eigenvalues.

[Similar matrices and change of basis](!/linear-algebra/visual-tools/change-basis-2d) — $D = P^{-1}AP$ is $A$ written in the eigenvector basis.

[Spectral theorem](!/linear-algebra/visual-tools/spectral-decomposition) — the symmetric case with orthogonal $P$.

**Jordan form** — what replaces $D$ when the matrix is defective.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — the factorization that works for every matrix, square or not, using two orthogonal bases instead of one eigenvector basis.

**Markov chains and recurrences** — where powers of a fixed matrix, and hence diagonalization, do the work.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Eigenvector Matrix`,
      content: `The first thing the tool checks is whether there are enough eigenvectors. The frozen picture below shows the default preset's eigenvalues $5$ and $2$ with their eigenvectors $(1, 1)$ and $(1, -2)$ as columns, each above its eigenvalue.

Two eigenvectors for a $2 \\times 2$ matrix, independent since they are not parallel: $A$ is diagonalizable.`,
      before: ``,
      after: `Independence is automatic when the eigenvalues are distinct, and that is the common case. The count only becomes a question for repeated eigenvalues, where it is decided by how many free columns $A - \\lambda I$ has: as many as the multiplicity means a full set, fewer means defective.

The order of the columns is a free choice. The tool sorts eigenvalues in decreasing order, so the dominant one comes first, but any order works as long as $D$ follows it.`,
      link: '',
    },
    obj12: {
      title: `Assembling P and D`,
      content: `The frozen picture below shows $P$ and $D$ for the default preset side by side: the eigenvectors as columns, the eigenvalues down the diagonal in the same order, zeros elsewhere.

Together they encode the equation $AP = PD$, which is nothing more than the two eigenvector equations written as one matrix identity.`,
      before: ``,
      after: `Reading $AP = PD$ column by column is the whole proof. The $j$-th column of $AP$ is $A\\mathbf{v}_j$, and the $j$-th column of $PD$ is $\\lambda_j\\mathbf{v}_j$, since multiplying on the right by a diagonal matrix scales columns. The two agree exactly because each $\\mathbf{v}_j$ is an eigenvector.

$D$ is where all the information about the transformation sits. $P$ is just a change of coordinates; the same $A$ with differently scaled eigenvectors has a different $P$ but the same $D$.`,
      link: '',
    },
    obj13: {
      title: `Inverting P`,
      content: `To move from $AP = PD$ to $A = PDP^{-1}$ requires $P^{-1}$, which exists because the columns of $P$ are independent. The frozen picture below shows the default preset's $P$ and its inverse, with thirds in every entry because $\\det P = -3$.

The tool row reduces $[P \\mid I]$; for a $2 \\times 2$ the formula does the same in one line.`,
      before: ``,
      after: `The fractions are typical, not a sign of trouble. $P$ is chosen with integer columns for readability, so $P^{-1}$ carries $\\det P$ in its denominators, and the products $PDP^{-1}$ clear them again.

For a symmetric matrix the inverse is free: with the eigenvectors normalized to unit length, $P$ is orthogonal and $P^{-1} = P^T$. The symmetric preset demonstrates this, and it is the reason the spectral decomposition is written $QDQ^T$ rather than $QDQ^{-1}$.`,
      link: '',
    },
    obj14: {
      title: `The Factorization`,
      content: `With all three pieces in hand, $A = PDP^{-1}$. The frozen picture below shows the default preset's factorization in full, $A$ on the left and the three factors on the right.

The caption multiplies them out and recovers $A$ exactly, which is the check that the eigenvectors and the inverse are right.`,
      before: ``,
      after: `The factorization is best read right to left as three moves applied to a vector. $P^{-1}\\mathbf{x}$ gives the coordinates of $\\mathbf{x}$ in the eigenvector basis; $D$ multiplies each coordinate by its eigenvalue; $P$ turns the result back into standard coordinates. Nothing else happens. That is what it means for $A$ to be a scaling in disguise.

The tool also checks the identity from the other side, $P^{-1}AP = D$: conjugating $A$ by $P$ leaves a diagonal matrix, and every off-diagonal zero in that product is a confirmation that the corresponding column of $P$ is a genuine eigenvector.`,
      link: '',
    },
    obj15: {
      title: `Powers Through the Diagonal`,
      content: `The reason to diagonalize is what it does to powers. The frozen picture below shows the default preset's $A^3 = PD^3P^{-1}$: $D^3$ is just $125$ and $8$ on the diagonal, and two multiplications produce $A^3$.

Change the $k$ stepper to see any other power; the eigenvalues make the growth rate visible before the product is even computed.`,
      before: ``,
      after: `The algebra is one line: $A^k = (PDP^{-1})(PDP^{-1})\\cdots(PDP^{-1})$, and every interior $P^{-1}P$ cancels, leaving $PD^kP^{-1}$. Powering a diagonal matrix is powering its entries, so the cost is constant in $k$, while direct multiplication costs $k - 1$ products.

More important than the saving is what the formula says. The entries of $A^k$ are combinations of $\\lambda_i^k$, so the largest $|\\lambda_i|$ takes over as $k$ grows: $A^k$ grows along its eigenvector when that modulus exceeds $1$, settles when it equals $1$, and vanishes when it is below $1$. The same formula with $k$ replaced by a function gives $e^{A}$, $\\sqrt{A}$ and every other function of a matrix.`,
      link: '',
    },
    obj16: {
      title: `A Markov Chain Settling Down`,
      content: `The Markov preset has eigenvalues $1$ and $0.4$. The frozen picture below shows its eighth power: $0.4^8$ is nearly zero, so $D^8$ has essentially one non-zero entry and $A^8$ is nearly the steady-state matrix, with both columns close to $(5/6, 1/6)$.

Raise the $k$ stepper in the tool to watch the convergence.`,
      before: ``,
      after: `This is the general picture for stochastic matrices. The eigenvalue $1$ always exists, its eigenvector is the stationary distribution, and every other eigenvalue has modulus at most $1$. As $k$ grows the powers $\\lambda_i^k$ of the others die out and $A^k$ converges to a rank-one matrix whose columns are the steady state. The second-largest modulus, here $0.4$, is the convergence rate.

The Fibonacci preset shows the opposite behaviour. Its dominant eigenvalue is $\\varphi \\approx 1.618$, so the entries of $A^k$, which are Fibonacci numbers, grow like $\\varphi^k$; the diagonalization written out is Binet's formula.`,
      link: '',
    },
    obj17: {
      title: `When It Fails`,
      content: `The defective preset is the shear $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$. Its only eigenvalue is $1$, twice, but $A - I$ has a single free column and a single eigenvector, $(1, 0)$. The frozen picture below shows the run stopping there.

One eigenvector cannot fill a $2 \\times 2$ matrix $P$, so there is no diagonal form.`,
      before: ``,
      after: `Geometrically the shear moves every vector off the $x$-axis sideways, so no second direction is preserved. No change of basis can turn that into a scaling. The nearest replacement is the Jordan form, $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ itself, a diagonal of eigenvalues with a $1$ above it recording the missing eigenvector.

The other way to fail is complex eigenvalues, shown by the rotation preset. There the eigenvectors exist but are complex, so $A = PDP^{-1}$ holds over $\\mathbb{C}$ and not over $\\mathbb{R}$; in the real plane the matrix is a rotation-scaling and stays that way.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from DiagonalizationWrapper's own buildScenes on the default preset
     (and the defective and Markov presets for their special scenes) and
     rendered through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: diagonalizationDiagrams[key], caption, text })

  const stateUnits = {
    eigvecs: unit('eigvecs', 'Eigenvectors, frozen',
      'The default preset: eigenvalues 5 and 2, eigenvectors (1, 1) and (1, &minus;2) as the columns on the right, ' +
      'each above its eigenvalue. Two independent eigenvectors for a 2&times;2 matrix - diagonalizable.'),
    assemble: unit('assemble', 'P and D, frozen',
      'P with the eigenvectors as columns, D with the eigenvalues down the diagonal in the same order. ' +
      'Together they say A P = P D, one eigenvector equation per column.'),
    inverse: unit('inverse', 'P&#8315;&#185;, frozen',
      'det P = &minus;3, so the inverse has thirds everywhere: P&#8315;&#185; = [2/3, 1/3; 1/3, &minus;1/3]. ' +
      'Found by row reducing [P | I], or by the 2&times;2 formula.'),
    factor: unit('factor', 'A = P D P&#8315;&#185;, frozen',
      'The full factorization. Multiplying the three factors on the right reproduces A exactly, ' +
      'which checks both the eigenvectors and the inverse.'),
    power: unit('power', 'A&#179; = P D&#179; P&#8315;&#185;, frozen',
      'D&#179; is just 125 and 8 on the diagonal. Two multiplications give A&#179; = [86, 39; 78, 47], ' +
      'the same as A&middot;A&middot;A - and its trace 133 = 125 + 8.'),
    markov: unit('markov', 'Markov chain, eighth power, frozen',
      'Eigenvalues 1 and 0.4; 0.4&#8312; &asymp; 0.00066, so D&#8312; is nearly diag(1, 0) and A&#8312; is nearly the ' +
      'steady-state matrix with both columns close to (5/6, 1/6).'),
    defective: unit('defective', 'Defective, frozen',
      'The shear: &lambda; = 1 twice but only the single eigenvector (1, 0). One column cannot fill P, ' +
      'so the run stops - no diagonal form exists.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     DiagonalizationWrapper accepts an explanations prop keyed by scene phase:
     intro, eigen, complex, eigvecs, defective, assemble, inverse, factor,
     verify, power, done. Captions render with dangerouslySetInnerHTML, so
     these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-diagonalization-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Eigenvectors into P, eigenvalues into D, and A becomes a scaling in disguise.', 'the-eigenvector-matrix', 'Learn more about the eigenvector matrix'),
    eigen: note('The roots of det(A &minus; &lambda;I); the eigenvalue tool derives them step by step.', 'the-eigenvector-matrix', 'Learn more about the eigenvector matrix'),
    complex: note('Complex eigenvalues: a diagonalization over &#8450;, but none over the reals.', 'when-it-fails', 'Learn more about the failing cases'),
    eigvecs: note('n independent eigenvectors is the whole condition.', 'the-eigenvector-matrix', 'Learn more about the eigenvector matrix'),
    defective: note('A repeated eigenvalue with too few eigenvectors: no P, no diagonal form.', 'when-it-fails', 'Learn more about the failing cases'),
    assemble: note('Column j of P belongs to entry j of D; the order is free but must match.', 'assembling-p-and-d', 'Learn more about P and D'),
    inverse: note('Independent columns make P invertible; fractions carry det P.', 'inverting-p', 'Learn more about inverting P'),
    factor: note('Right to left: eigen-coordinates, scale, convert back.', 'the-factorization', 'Learn more about the factorization'),
    verify: note('Conjugating A by P leaves a diagonal matrix - the check.', 'the-factorization', 'Learn more about the factorization'),
    power: note('Interior P&#8315;&#185;P pairs cancel; only the diagonal is powered.', 'powers-through-the-diagonal', 'Learn more about powers'),
    done: note('The largest |&lambda;| decides how A<sup>k</sup> behaves as k grows.', 'a-markov-chain-settling-down', 'Learn more about long-run behaviour'),
  }


  const faqQuestions = {
    obj1: {
      question: "What does it mean to diagonalize a matrix?",
      answer: "To diagonalize a square matrix A is to write it as A = P D P⁻¹, where D is a diagonal matrix and P is invertible. The columns of P are eigenvectors of A and the diagonal entries of D are the corresponding eigenvalues. In the basis of eigenvectors the transformation is a pure scaling along each axis, which is what the diagonal form expresses."
    },
    obj2: {
      question: "How do you diagonalize a matrix step by step?",
      answer: "Find the eigenvalues as the roots of det(A − λI). For each eigenvalue, row reduce A − λI and read one eigenvector per free column. If there are n independent eigenvectors in total, put them as the columns of P and the eigenvalues in the same order down the diagonal of D. Compute P⁻¹, and check that P⁻¹ A P equals D. If there are fewer than n eigenvectors the matrix is not diagonalizable."
    },
    obj3: {
      question: "When is a matrix not diagonalizable?",
      answer: "A real matrix fails to diagonalize over the reals in two situations. Either some repeated eigenvalue has an eigenspace smaller than its multiplicity, so there are fewer than n independent eigenvectors, which makes the matrix defective; the shear [[1,1],[0,1]] is the standard example. Or the eigenvalues are complex, as for a rotation, in which case a diagonalization exists over the complex numbers but not with real matrices."
    },
    obj4: {
      question: "How is diagonalization used to compute matrix powers?",
      answer: "If A = P D P⁻¹ then A^k = P D^k P⁻¹, because every inner P⁻¹P in the product cancels. A power of a diagonal matrix is found by raising each diagonal entry to the power, so any A^k costs only two matrix multiplications. The same idea defines other functions of a matrix, such as the matrix exponential, by applying the function to the diagonal entries."
    },
    obj5: {
      question: "What is special about diagonalizing a symmetric matrix?",
      answer: "A symmetric matrix is always diagonalizable, its eigenvalues are real, and its eigenvectors for different eigenvalues are perpendicular. Normalizing the eigenvectors to unit length makes P an orthogonal matrix Q whose inverse is its transpose, so A = Q D Qᵀ with no inverse to compute. This is the spectral decomposition, and it is the basis of principal component analysis and the classification of quadratic forms."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Diagonalization Visualizer",
      "description": "Step-by-step visualizer that diagonalizes a 2×2 or 3×3 matrix as A = P D P⁻¹: eigenvalues, eigenvectors into P, eigenvalues into D, P inverted, the product checked, and a chosen power A^k computed as P D^k P⁻¹, with defective and complex cases explained.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-diagonalization",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable 2×2 or 3×3 matrix with eight presets and a shuffle that produces integer eigenvalues",
        "Eigenvectors assembled into P and eigenvalues into D in matching order",
        "P⁻¹ by row reduction with the determinant of P noted",
        "A = P · D · P⁻¹ multiplied out and P⁻¹ A P = D verified",
        "A^k = P D^k P⁻¹ for a chosen power k, with D^k powered entry by entry",
        "Defective matrices and complex eigenvalues detected and explained",
        "Symmetric matrices flagged for the orthogonal spectral form",
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
      "keywords": "matrix diagonalization, diagonalize a matrix, diagonalization calculator, A = PDP^-1, diagonalizable matrix, eigendecomposition, matrix power using diagonalization, how to diagonalize a matrix step by step, defective matrix not diagonalizable, diagonalization 2x2, diagonalization 3x3, spectral decomposition symmetric matrix, eigenvalues eigenvectors visualizer, linear algebra visualizer, interactive matrix tool"
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
          "name": "Matrix Diagonalization",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-diagonalization"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-diagonalization'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Diagonalization Visualizer | A = PDP⁻¹ Step by Step",
        description: "Diagonalize a 2×2 or 3×3 matrix step by step: eigenvectors into P, eigenvalues into D, P inverted, A = P D P⁻¹ checked, and any power A^k computed as P D^k P⁻¹. Defective and complex cases explained.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-diagonalization",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><text x="9" y="46" font-family="Georgia,serif" font-size="13" fill="#E6F1FB" font-style="italic">A</text><text x="21" y="46" font-family="Georgia,serif" font-size="11" fill="#B5D4F4">=</text><text x="30" y="46" font-family="Georgia,serif" font-size="13" fill="#85B7EB" font-style="italic">P</text><rect x="41" y="30" width="22" height="22" rx="2" fill="none" stroke="#B5D4F4" stroke-width="1"/><rect x="43" y="32" width="8" height="8" rx="1" fill="#FAC775"/><rect x="53" y="42" width="8" height="8" rx="1" fill="#FAC775"/><text x="66" y="46" font-family="Georgia,serif" font-size="13" fill="#85B7EB" font-style="italic">P</text><text x="74" y="38" font-family="Georgia,serif" font-size="7" fill="#85B7EB">&minus;1</text><text x="40" y="70" font-family="Georgia,serif" font-size="7" fill="#97C459" text-anchor="middle" font-style="italic">A&#8319; = P D&#8319; P&#8315;&#185;</text></svg>`,
        name: "Matrix Diagonalization Visualizer",
        hubDescription: "Diagonalize a matrix of your own numbers as A = P D P⁻¹, exactly as it is done by hand: the eigenvectors become the columns of P, the eigenvalues fill the diagonal of D, P is inverted by row reduction, and the product is multiplied out and checked. Then pick a power k and watch A^k drop out of P D^k P⁻¹. Presets include a Markov chain settling to its steady state, the Fibonacci matrix, a symmetric matrix with orthogonal eigenvectors, and a defective shear that cannot be diagonalized.",
        category: 'Matrices',
        subCategory: 'Eigenvalues'
      }
    }
  }
}

export default function DiagonalizationVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj11', 'the-eigenvector-matrix', 'eigvecs'),
    stateRow('obj12', 'assembling-p-and-d', 'assemble'),
    stateRow('obj13', 'inverting-p', 'inverse'),
    stateRow('obj14', 'the-factorization', 'factor'),
    stateRow('obj15', 'powers-through-the-diagonal', 'power'),
    stateRow('obj16', 'a-markov-chain-settling-down', 'markov'),
    stateRow('obj17', 'when-it-fails', 'defective'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-diagonalization-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Diagonalization</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <DiagonalizationWrapper
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
