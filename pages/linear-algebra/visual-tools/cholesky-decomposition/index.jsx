import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import CholeskyWrapper from '../../../../app/components/linear-algebra copy/matrix/CholeskyWrapper'
import choleskyDiagrams from '../../../../app/components/linear-algebra copy/matrix/choleskyDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'cholesky decomposition',
    'cholesky factorization',
    'cholesky decomposition visualizer',
    'cholesky decomposition calculator',
    'cholesky decomposition step by step',
    'symmetric positive definite matrix',
    'positive definite test',
    'matrix square root',
    'A = L L transpose',
    'how to compute cholesky',
    'cholesky example',
    'cholesky vs lu',
    'solving spd systems',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Cholesky factorization](!/linear-algebra/decompositions/cholesky#1) — $A = LL^T$ with $L$ lower triangular and a positive diagonal; exists exactly for symmetric positive definite $A$.

[Symmetric](!/linear-algebra/matrix/types#5) — $A^T = A$; every entry equals its mirror image across the diagonal.

[Positive definite](!/linear-algebra/decompositions/cholesky#2) — $\\mathbf{x}^T A \\mathbf{x} > 0$ for every non-zero $\\mathbf{x}$; equivalently all [eigenvalues](!/linear-algebra/definitions#eigenvalue) positive, equivalently all leading principal [minors](!/linear-algebra/definitions#minor) positive, equivalently Cholesky succeeds.

**Diagonal entry** — $\\ell_{j,j} = \\sqrt{a_{j,j} - \\sum_{k<j} \\ell_{j,k}^2}$, a square root of what is left of $a_{j,j}$ after the earlier columns are accounted for.

**Below the diagonal** — $\\ell_{i,j} = \\left(a_{i,j} - \\sum_{k<j} \\ell_{i,k}\\ell_{j,k}\\right) / \\ell_{j,j}$.

[Radicand](!/algebra/definitions#radicand) — the number under each square root; the factorization exists exactly when all of them are positive.

**Matrix square root** — the sense in which $L$ is one: $A = LL^T$ as a number is $a = \\ell \\cdot \\ell$.

**$LDL^T$ form** — the variant with unit diagonal $L$ and a diagonal $D$, which avoids square roots.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a matrix, then watch $L$ fill column by column while its transpose fills alongside.

• Use the **Preset** pills for six matrices: a classic $3 \\times 3$ with an integer factor, a $2 \\times 2$, a $4 \\times 4$ Pascal matrix whose factor is the Pascal triangle, one whose square roots do not simplify, one that is symmetric but not positive definite, and one that is not symmetric
• Use the **Size** stepper for $2 \\times 2$ up to $4 \\times 4$
• Edit any entry; edits are **mirrored** across the diagonal so the matrix stays symmetric, since an unsymmetric matrix has no Cholesky factorization
• Press **Shuffle** for a random symmetric positive definite matrix, built as $BB^T + I$ so it is guaranteed to factor
• Hover the **?** icon for a reminder of what the factorization is and why it doubles as a test
• Press play or step manually; the step log on the right lists every entry computed

Two presets stop early on purpose. The not-symmetric one stops before any arithmetic; the not-positive-definite one runs until a square root of a negative number is demanded and stops there with the explanation.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How the Factorization Runs`,
      content: `The visualizer computes $L$ one column at a time, top to bottom within each column.

• **Symmetry check** — if any entry differs from its mirror image, the run stops: no $LL^T$ can equal an unsymmetric matrix
• **Diagonal** — $\\ell_{j,j}$ is the square root of $a_{j,j}$ minus the squares of the entries already in row $j$ of $L$; if that radicand is not positive the run stops, because $A$ is not positive definite
• **Below the diagonal** — each $\\ell_{i,j}$ is $a_{i,j}$ minus the products of the entries already in rows $i$ and $j$, divided by $\\ell_{j,j}$
• **Mirror** — every entry of $L$ appears at once in $L^T$, drawn on the right
• **Done** — $LL^T = A$, the [determinant](!/linear-algebra/determinants#1) is the product of the squared diagonal, and the run reports that positive definiteness has been proved

The formulas come from writing out $LL^T = A$ entry by entry. Entry $(i, j)$ of $LL^T$ is $\\sum_k \\ell_{i,k}\\ell_{j,k}$, and since $L$ is lower triangular the sum stops at $k = \\min(i, j)$; solving that equation for the last term gives the two rules.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows $A$, $L$ and $L^T$ with the entry being computed and the entries it depends on.

• In a **diagonal** scene, $a_{j,j}$ is primary, the new $\\ell_{j,j}$ is accent in both $L$ and $L^T$, and the earlier entries of row $j$ of $L$ that are squared and subtracted are secondary
• In an **off-diagonal** scene, $a_{i,j}$ is primary, the new $\\ell_{i,j}$ is accent in $L$ and mirrored in $L^T$, the divisor $\\ell_{j,j}$ is primary, and the earlier entries of rows $i$ and $j$ whose products are subtracted are secondary
• In the **stop** scenes, the offending entries are highlighted: mismatched pairs for an unsymmetric matrix, the failed diagonal position for a non-positive-definite one
• In the **done** scene, the diagonal of $L$ and $L^T$ is accent and the rest secondary
• The known zeros of $L$ above the diagonal and of $L^T$ below it are drawn in grey from the first scene; irrational entries are shown to three decimals`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The six presets each make a different point.

• **Classic $3 \\times 3$** — radicands $4$, $4$ and $4$, so every square root is $2$ and every division is exact; $L$ has entries $2, 1, 1, 2, 1, 2$
• **$2 \\times 2$** — one square root, one division, one more square root; the whole pattern in three steps
• **Pascal $4 \\times 4$** — the symmetric Pascal matrix factors as the lower Pascal triangle times its transpose, a classic identity made visible
• **Irrational factor** — the tridiagonal matrix with $2$ on the diagonal and $1$ beside it; the radicands are $2, \\tfrac{3}{2}, \\tfrac{4}{3}$ and the square roots do not simplify
• **Not positive definite** — symmetric, with $1$ on the diagonal and $2$ off it; the second radicand is $1 - 4 = -3$ and the run stops
• **Not symmetric** — the run stops before any arithmetic, because $LL^T$ is always symmetric

Shuffle never produces a failing matrix; edit an entry by hand to see the tests trip.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Cholesky Factorization Is`,
      content: `A symmetric positive definite matrix $A$ can be written as

$$A = LL^T$$

with $L$ lower triangular and its diagonal positive, and with those conditions the factor is unique. It is the matrix version of a square root: for a positive number, $a = \\ell \\cdot \\ell$.

The formulas follow from multiplying out. Entry $(i, j)$ of $LL^T$, for $i \\geq j$, is $\\sum_{k \\leq j} \\ell_{i,k}\\ell_{j,k}$. Setting this equal to $a_{i,j}$ and solving for the last term of the sum gives

$$\\ell_{j,j} = \\sqrt{a_{j,j} - \\sum_{k<j} \\ell_{j,k}^2}, \\qquad \\ell_{i,j} = \\frac{a_{i,j} - \\sum_{k<j} \\ell_{i,k}\\ell_{j,k}}{\\ell_{j,j}}$$

Computed column by column, every quantity on the right is already known when it is needed, which is the order the tool follows.

The connection to LU is direct. For a [symmetric matrix](!/linear-algebra/matrix/types#5), Gaussian elimination without pivoting gives $A = LU$ with $U = DL^T$, where $D$ is the diagonal of [pivots](!/linear-algebra/linear-systems/echelon-form#4); positive definiteness makes every pivot positive, so $D = D^{1/2}D^{1/2}$ and $A = (LD^{1/2})(LD^{1/2})^T$. Cholesky's $L$ is $LD^{1/2}$, and the pivots of elimination are the squared diagonal entries of the factor. That is also why no pivoting is ever needed: positive definiteness guarantees every pivot is positive before it is reached.

For the full treatment, including the $LDL^T$ variant and the equivalent characterizations of positive definiteness, see the [Cholesky decomposition theory page](!/linear-algebra/decompositions/cholesky).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The factorization inherits the strong properties of its class.

• **Existence and uniqueness**: exactly for symmetric positive definite $A$, with $L$ unique once its diagonal is required positive
• **Test for positive definiteness**: a symmetric matrix is positive definite exactly when the factorization runs to completion with all radicands positive — the cheapest test in practice
• **No pivoting**: every pivot is positive, so rows are never swapped and the factorization is numerically stable as it stands
• **Half the cost of LU**: about $\\tfrac{1}{3}n^3$ operations, since only one triangular factor is computed
• **Determinant**: $\\det A = (\\det L)^2 = \\prod_j \\ell_{j,j}^2$, always positive
• **Solving systems**: $A\\mathbf{x} = \\mathbf{b}$ becomes $L\\mathbf{y} = \\mathbf{b}$ then $L^T\\mathbf{x} = \\mathbf{y}$, two triangular solves sharing one factor
• **Relation to LU**: the pivots of elimination are $\\ell_{j,j}^2$; $L_{\\text{Cholesky}} = L_{\\text{LU}} D^{1/2}$
• **Inverse**: $A^{-1} = L^{-T}L^{-1}$, and $L^{-1}$ is easy because $L$ is triangular
• **Semidefinite case**: if some radicand is exactly zero, $A$ is positive semidefinite and a factorization still exists, but it is no longer unique`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Symmetric positive definite matrices are everywhere, and Cholesky is how they are handled.

• **Normal equations**: $A^TA$ in least squares is symmetric positive definite whenever $A$ has independent columns, and Cholesky is the classical way to solve $A^TA\\mathbf{x} = A^T\\mathbf{b}$
• **Covariance matrices**: symmetric positive definite by construction; their Cholesky factors generate correlated random samples from independent ones, $\\mathbf{x} = L\\mathbf{z}$
• **Optimization**: Hessians at a minimum, Newton steps, and interior-point methods all factor SPD matrices at every iteration
• **Physics and engineering**: stiffness, mass and conductance matrices are SPD, and finite-element solvers rely on Cholesky or its sparse variants
• **Gaussian processes and Kalman filters**: kernel matrices and covariance updates are factored this way for both speed and stability
• **The definiteness test**: asking whether a [quadratic form](!/linear-algebra/decompositions/spectral#6) is positive, or a critical point is a minimum, comes down to whether Cholesky succeeds`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the classic preset,

$$A = \\begin{pmatrix} 4 & 2 & 2 \\\\ 2 & 5 & 3 \\\\ 2 & 3 & 6 \\end{pmatrix}$$

**Column 1.** $\\ell_{1,1} = \\sqrt{4} = 2$. Then $\\ell_{2,1} = 2 / 2 = 1$ and $\\ell_{3,1} = 2 / 2 = 1$.

**Column 2.** $\\ell_{2,2} = \\sqrt{5 - \\ell_{2,1}^2} = \\sqrt{5 - 1} = 2$. Then $\\ell_{3,2} = (3 - \\ell_{3,1}\\ell_{2,1}) / \\ell_{2,2} = (3 - 1) / 2 = 1$.

**Column 3.** $\\ell_{3,3} = \\sqrt{6 - \\ell_{3,1}^2 - \\ell_{3,2}^2} = \\sqrt{6 - 1 - 1} = 2$.

$$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ 1 & 1 & 2 \\end{pmatrix}, \\qquad LL^T = \\begin{pmatrix} 4 & 2 & 2 \\\\ 2 & 5 & 3 \\\\ 2 & 3 & 6 \\end{pmatrix} = A$$

Check row $3$ of $LL^T$ against row $3$ of $A$: $(1, 1, 2) \\cdot (2, 0, 0) = 2$, $(1, 1, 2) \\cdot (1, 2, 0) = 3$, $(1, 1, 2) \\cdot (1, 1, 2) = 6$. The determinant is $(2 \\cdot 2 \\cdot 2)^2 = 64$, and every radicand was positive, so $A$ is positive definite.

For contrast, the not-positive-definite preset has $\\ell_{1,1} = 1$, $\\ell_{2,1} = 2$, and then $\\ell_{2,2} = \\sqrt{1 - 4}$, which does not exist. Its [eigenvalues](!/linear-algebra/eigen#2) are $3$ and $-1$: symmetric, but indefinite.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Applying it to an unsymmetric matrix** — $LL^T$ is symmetric no matter what $L$ is, so there is nothing to find; use LU
• **Skipping the subtraction** — from column $2$ on, the radicand and the numerators include the contributions of earlier columns; using $a_{j,j}$ alone gives wrong entries
• **Using the wrong rows in the products** — $\\ell_{i,j}$ subtracts $\\sum_k \\ell_{i,k}\\ell_{j,k}$, entries from row $i$ paired with entries from row $j$, over the columns already done
• **Taking the negative square root** — either sign gives a valid factor, but the convention is positive, and it is what makes $L$ unique
• **Reading a negative radicand as an arithmetic slip** — it may well be the correct conclusion: the matrix is not positive definite
• **Confusing positive entries with positive definiteness** — a matrix of positive numbers can fail the test, and a matrix with negative off-diagonal entries can pass it`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[LU decomposition](!/linear-algebra/visual-tools/lu-decomposition) — the general factorization that Cholesky specializes; the pivots of LU are the squared diagonal of $L$.

[Symmetric matrices](!/linear-algebra/visual-tools/matrix-types) — the class this applies to, and whose transpose invariance makes one factor enough.

**Positive definiteness** — the condition, tested by the factorization itself.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the product of the squared diagonal, always positive here.

[Least squares](!/linear-algebra/visual-tools/least-squares) — the normal equations are the classic SPD system.

[Eigenvalues](!/linear-algebra/visual-tools/eigenvalues-eigenvectors) — all positive for an SPD matrix, though Cholesky never computes them.

[QR decomposition](!/linear-algebra/visual-tools/qr-decomposition) — the other route to least squares, avoiding $A^TA$ altogether.

**Matrix square root** — the idea Cholesky makes concrete for triangular factors.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: L and Its Transpose`,
      content: `The player opens with $A$ on the left and two empty triangles on the right: $L$ with its zeros above the diagonal already drawn, and $L^T$ with its zeros below. At the default preset $A$ is the classic $3 \\times 3$.

Nothing is computed yet. What the scene establishes is that there is only one factor to find: the second is the mirror image of the first.`,
      before: ``,
      after: `That single factor is the whole economy of the method, and it is possible only because $A$ is symmetric. A product $LL^T$ is symmetric whatever $L$ is, so an unsymmetric $A$ cannot equal one; the tool checks this before doing anything, and the not-symmetric preset stops here.

Symmetry is necessary but not sufficient. The second condition, positive definiteness, is not checked up front; it reveals itself during the run, in the sign of each radicand.`,
      link: '',
    },
    obj12: {
      title: `A Diagonal Entry`,
      content: `Each column begins with its diagonal entry, a square root: $\\ell_{j,j} = \\sqrt{a_{j,j} - \\sum_{k<j} \\ell_{j,k}^2}$, the diagonal entry of $A$ with the squares of the earlier entries in that row of $L$ subtracted.

The frozen picture below is the second diagonal entry of the classic preset: $\\ell_{2,2} = \\sqrt{5 - 1^2} = 2$, with the subtracted entry $\\ell_{2,1}$ highlighted and the value mirrored into $L^T$.`,
      before: ``,
      after: `The subtraction is what makes each column depend on the ones before it. The entry $a_{2,2}$ is $\\ell_{2,1}^2 + \\ell_{2,2}^2$ by the rule for $LL^T$, so $\\ell_{2,2}^2$ is what remains once the first column's contribution is removed.

The radicand is the pivot that LU would have found at this position, and its sign is the test. A positive radicand means the leading principal minor through this position is positive; the sequence of positive radicands, one per column, is exactly the statement that $A$ is positive definite.`,
      link: '',
    },
    obj13: {
      title: `An Entry Below the Diagonal`,
      content: `Below each diagonal entry, the entries of the column are divisions: $\\ell_{i,j} = (a_{i,j} - \\sum_{k<j} \\ell_{i,k}\\ell_{j,k}) / \\ell_{j,j}$, the entry of $A$ minus the products of earlier entries in rows $i$ and $j$, divided by the diagonal entry just found.

The frozen picture below is the last such entry of the classic preset: $\\ell_{3,2} = (3 - 1 \\cdot 1) / 2 = 1$, with the divisor and the subtracted entries highlighted.`,
      before: ``,
      after: `The pattern is the row-times-row rule for $LL^T$ read backwards. Entry $(3, 2)$ of the product is row $3$ of $L$ dotted with row $2$ of $L$, which is $\\ell_{3,1}\\ell_{2,1} + \\ell_{3,2}\\ell_{2,2}$; everything except $\\ell_{3,2}$ is known, so it is solved for.

Every off-diagonal entry divides by a diagonal entry, which is why the diagonal must be computed first and why it must be non-zero. Positive definiteness guarantees both, and it guarantees the division never amplifies error the way a small pivot in LU can.`,
      link: '',
    },
    obj14: {
      title: `When the Matrix Is Not Positive Definite`,
      content: `On the not-positive-definite preset the first column succeeds, $\\ell_{1,1} = 1$ and $\\ell_{2,1} = 2$, and the second diagonal entry demands $\\sqrt{1 - 2^2} = \\sqrt{-3}$. The run stops.

The frozen picture below is that stop: the failed position muted in both $A$ and $L$, the first column of $L$ already in place.`,
      before: ``,
      after: `This is not a failure of the method but its verdict. A symmetric matrix is positive definite exactly when all of its leading principal minors are positive, and the radicands are those minors divided by the previous ones; a non-positive radicand means a non-positive minor, and the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ takes a non-positive value somewhere.

In practice this is the standard way to test definiteness. It is cheaper than computing eigenvalues, and it either delivers the factorization or the reason none exists.`,
      link: '',
    },
    obj15: {
      title: `The Completed Factorization`,
      content: `The final scene shows $L$ complete and $L^T$ as its mirror image, with $A = LL^T$ holding on screen.

The frozen picture below is the classic preset finished: $L$ with entries $2, 1, 1, 2, 1, 2$, its transpose beside it, and the diagonal highlighted.`,
      before: ``,
      after: `From here every use is a pair of triangular solves with the same factor: $L\\mathbf{y} = \\mathbf{b}$ forward, $L^T\\mathbf{x} = \\mathbf{y}$ backward. That is the same shape as LU with half the storage and half the factoring cost, and with no pivoting to organize.

Three facts are read off at once: the factorization proves $A$ positive definite, the determinant is the product of the squared diagonal, and $L$ is the matrix square root that turns independent random variables into correlated ones. For the symmetric positive definite matrices of statistics, optimization and physics, this is the factorization of first resort.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from CholeskyWrapper's own buildScenes on the classic preset (and
     the not-positive-definite preset for the stop scene) and rendered
     through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: choleskyDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A on the left and two empty triangles on the right: L with its zeros above the diagonal drawn, ' +
      'L<sup>T</sup> with its zeros below. One factor to find; the other is its mirror image.'),
    diag: unit('diag', 'Second diagonal entry, frozen',
      '&#8467;<sub>2,2</sub> = &#8730;(5 &minus; 1&#178;) = 2, with the subtracted entry &#8467;<sub>2,1</sub> highlighted ' +
      'and the value mirrored into L<sup>T</sup>. The radicand is the pivot LU would find here.'),
    offdiag: unit('offdiag', 'Last off-diagonal entry, frozen',
      '&#8467;<sub>3,2</sub> = (3 &minus; 1&middot;1) / 2 = 1: the entry of A minus the products of earlier entries in ' +
      'rows 3 and 2, divided by the diagonal entry just found.'),
    notpd: unit('notpd', 'Not positive definite, frozen',
      'The first column succeeded, then &#8467;<sub>2,2</sub> would be &#8730;(1 &minus; 4). The run stops with the ' +
      'failed position muted: A is symmetric but indefinite, and that is the verdict, not an error.'),
    done: unit('done', 'Completed factorization, frozen',
      'L with entries 2, 1, 1, 2, 1, 2 and its transpose beside it: A = LL<sup>T</sup>. Every radicand was positive, ' +
      'so A is positive definite; det A = (2&middot;2&middot;2)&#178; = 64.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     CholeskyWrapper accepts an explanations prop keyed by scene phase:
     intro, notsym, diag, notpd, offdiag, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-cholesky-factorization-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('One triangular factor; the other is its transpose.', 'the-opening-scene', 'Learn more about the opening scene'),
    notsym: note('LL<sup>T</sup> is always symmetric, so an unsymmetric A has no such factor.', 'the-opening-scene', 'Learn more about the preconditions'),
    diag: note('A square root of what is left of a<sub>j,j</sub> - the pivot LU would find, and the definiteness test.', 'a-diagonal-entry', 'Learn more about the diagonal'),
    notpd: note('A non-positive radicand is the verdict: symmetric but not positive definite.', 'when-the-matrix-is-not-positive-definite', 'Learn more about the failing case'),
    offdiag: note('The row-times-row rule for LL<sup>T</sup> solved for its last term, divided by the diagonal.', 'an-entry-below-the-diagonal', 'Learn more about the off-diagonal entries'),
    done: note('Two triangular solves with one factor, half of LU, and a proof of positive definiteness.', 'the-completed-factorization', 'Learn more about the completed factorization'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the Cholesky decomposition?",
      answer: "The Cholesky decomposition writes a symmetric positive definite matrix A as L times L transpose, where L is lower triangular with a positive diagonal. It is a matrix version of a square root, and it is the specialization of the LU decomposition to symmetric positive definite matrices: only one triangular factor is computed, the other is its transpose, and no pivoting is needed."
    },
    obj2: {
      question: "How do you compute the Cholesky factor?",
      answer: "Column by column. The diagonal entry of column j is the square root of the diagonal entry of A minus the squares of the entries already computed in row j of L. Each entry below it is the corresponding entry of A minus the products of the already computed entries in its row and in row j, divided by the diagonal entry just found. Every quantity needed is available when it is needed if the columns are done left to right."
    },
    obj3: {
      question: "When does the Cholesky decomposition fail?",
      answer: "It fails if A is not symmetric, because L times L transpose is always symmetric, or if A is symmetric but not positive definite, in which case some diagonal step demands the square root of a non-positive number. The second failure is informative: a symmetric matrix is positive definite exactly when the factorization runs to completion with all radicands positive, which makes Cholesky the standard practical test."
    },
    obj4: {
      question: "What is the difference between Cholesky and LU?",
      answer: "LU works for any square matrix and computes two different triangular factors, with row swaps when a pivot is zero. Cholesky requires symmetry and positive definiteness, computes one factor and uses its transpose as the other, never needs pivoting, and costs about half as much. For a symmetric positive definite matrix the two are related: the pivots of LU are the squares of the diagonal entries of the Cholesky factor."
    },
    obj5: {
      question: "What is the Cholesky decomposition used for?",
      answer: "Solving symmetric positive definite systems, which arise from least squares normal equations, stiffness and conductance matrices in engineering, Hessians in optimization, and covariance matrices in statistics. It is also used to generate correlated random samples, by multiplying independent samples by the factor L, and to test whether a symmetric matrix is positive definite."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Cholesky Decomposition Visualizer",
      "description": "Step-by-step visualizer for the Cholesky factorization A = L Lᵀ of a symmetric positive definite matrix. Watch each diagonal square root and each off-diagonal division fill L while its transpose fills alongside, with the run stopping when the matrix is not symmetric or not positive definite.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/cholesky-decomposition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable symmetric matrix from 2×2 to 4×4 with mirrored edits, six presets and a shuffle that produces positive definite matrices",
        "Layout A = L · Lᵀ throughout, with the known zeros drawn from the first scene",
        "One scene per entry of L: a square root on the diagonal, a division below it",
        "Lᵀ filled in step with L",
        "Runs that stop with an explanation for unsymmetric or non-positive-definite input",
        "Determinant and the positive definiteness verdict reported at the end",
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
      "keywords": "cholesky decomposition, cholesky factorization, cholesky decomposition visualizer, cholesky decomposition calculator, cholesky decomposition step by step, symmetric positive definite matrix, positive definite test, matrix square root, A = L L transpose, how to compute cholesky, cholesky example, cholesky vs lu, solving spd systems, linear algebra visualizer, interactive matrix tool"
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
          "name": "Cholesky Decomposition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/cholesky-decomposition"
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
      relatedTools: getRelatedTools('linear-algebra-cholesky-decomposition'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Cholesky Decomposition Visualizer | A = L Lᵀ Step by Step",
        description: "Visualize the Cholesky factorization step by step: a square root for each diagonal entry, a division for each entry below, with the transpose filling alongside and the run stopping when the matrix is not positive definite.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/cholesky-decomposition",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="6" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="29" y="41" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">=</text><rect x="34" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="28" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="34" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="56" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="65" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="56" y="37" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="65" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><text x="15" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="43" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">L</text><text x="65" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">L&#7488;</text><text x="40" y="72" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#8730; on the diagonal</text></svg>`,
        name: "Cholesky Decomposition Visualizer",
        hubDescription: "Watch A = L Lᵀ assemble for a symmetric positive definite matrix of your own numbers: each diagonal entry of L is a square root of what is left of the matching entry of A, each entry below it is a division, and the transpose fills in step on the right. Edits are mirrored to keep A symmetric, a shuffle produces guaranteed positive definite matrices, and two presets stop the run on purpose to show the unsymmetric and the indefinite cases.",
        category: 'Matrices',
        subCategory: 'Decompositions'
      }
    }
  }
}

export default function CholeskyVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'how-the-factorization-runs'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'a-diagonal-entry', 'diag'),
    stateRow('obj13', 'an-entry-below-the-diagonal', 'offdiag'),
    stateRow('obj14', 'when-the-matrix-is-not-positive-definite', 'notpd'),
    stateRow('obj15', 'the-completed-factorization', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-the-cholesky-factorization-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Cholesky Decomposition</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <CholeskyWrapper
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
