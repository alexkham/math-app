import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import EigenWrapper from '../../../../app/components/linear-algebra copy/matrix/EigenWrapper'
import eigenDiagrams from '../../../../app/components/linear-algebra copy/matrix/eigenDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'eigenvalues and eigenvectors',
    'eigenvalue calculator',
    'eigenvector calculator',
    'characteristic polynomial',
    'characteristic equation',
    'how to find eigenvalues',
    'how to find eigenvectors',
    'eigenvalues 3x3',
    'eigenvalues 2x2',
    'eigenvalue visualizer step by step',
    'algebraic and geometric multiplicity',
    'defective matrix',
    'complex eigenvalues',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Eigenvector** — a non-zero vector $\\mathbf{v}$ with $A\\mathbf{v} = \\lambda\\mathbf{v}$: a direction that $A$ scales but does not turn.

**Eigenvalue** — the scale factor $\\lambda$ in $A\\mathbf{v} = \\lambda\\mathbf{v}$.

**Characteristic polynomial** — $p(\\lambda) = \\det(A - \\lambda I)$, whose roots are the eigenvalues; shown monic in the tool.

**Characteristic equation** — $\\det(A - \\lambda I) = 0$.

**Eigenspace** — the null space of $A - \\lambda I$, all eigenvectors for $\\lambda$ together with $\\mathbf{0}$.

**Algebraic multiplicity** — how many times $\\lambda$ is a root of $p$.

**Geometric multiplicity** — the dimension of the eigenspace, the number of free columns of $A - \\lambda I$; never exceeds the algebraic multiplicity.

**Defective** — a matrix with some eigenvalue whose geometric multiplicity is smaller than its algebraic one; such a matrix cannot be diagonalized.

**Trace and determinant** — the eigenvalues sum to $\\operatorname{tr} A$ and multiply to $\\det A$, counting multiplicity.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a matrix, then watch its eigenvalues and eigenvectors emerge the way they are found by hand.

• Use the **Preset** pills for six matrices: three distinct eigenvalues, a symmetric $2 \\times 2$, a repeated eigenvalue with a plane of eigenvectors, a defective matrix, a triangular one, and a rotation with complex eigenvalues
• Use the **Size** stepper for $2 \\times 2$ or $3 \\times 3$
• Edit any entry directly, or press **Shuffle** for a random matrix built to have small integer eigenvalues
• Hover the **?** icon for a reminder of the definition and why the eigenvalues are roots of a polynomial
• Press play or step manually; the step log on the right keeps every stage

The run is always the same four moves: form $A - \\lambda I$, expand its determinant, find the roots, and row reduce once per real eigenvalue. If the roots are complex the run stops after finding them, with an explanation, since there are then no real eigenvectors to show.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Four Moves`,
      content: `The visualizer follows the textbook procedure exactly.

• **Shift** — $A - \\lambda I$ is written with $\\lambda$ subtracted from each diagonal entry; the eigenvalues are the $\\lambda$ that make it singular
• **Expand** — $\\det(A - \\lambda I)$ is expanded into the characteristic polynomial and its coefficients are laid out in a row; for a $2 \\times 2$ they are $1$, $-\\operatorname{tr} A$, $\\det A$; for a $3 \\times 3$, the tool multiplies by $-1$ so the polynomial is monic
• **Roots** — the eigenvalues, found by the quadratic formula or, for a cubic, by spotting a rational root or numerically; the caption shows the factored form and checks the trace and determinant
• **Eigenvectors** — for each real eigenvalue, $A - \\lambda I$ is row reduced, the free columns are counted, and one eigenvector per free column is read off with the free variable set to $1$, then scaled to small integers
• **Done** — the eigenvalues and eigenvectors side by side, each checked by multiplying, and a verdict on whether $A$ is diagonalizable

When an eigenvalue is repeated, the eigenvector scene reports both multiplicities. A full set of eigenvectors means $A$ can be diagonalized; a shortfall means it cannot.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices for one move with the arithmetic in the caption.

• In the **shift** and **expand** scenes, the diagonal of $A - \\lambda I$ is highlighted and the diagonal entries read $a_{i,i} - \\lambda$; the coefficient row is accent
• In the **roots** scene, the eigenvalue row is accent when the roots are real and secondary when they are complex
• In an **eigenvector** scene, the diagonal of $A - \\lambda I$ is highlighted, the pivots of its reduced form are accent and the free columns secondary, and the eigenvector column is accent, with an arrow from the free column that generated it
• In the **done** scene, each eigenvector column is accent with its eigenvalue above it
• Eigenvectors are scaled to small integers whenever a multiple by $1$ to $12$ makes every entry integral; otherwise they are shown to three decimals with the first non-zero entry positive`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The six presets each make a different point.

• **Three distinct** — eigenvalues $1$, $2$ and $11$, each with a one-dimensional eigenspace; the general case, and the default
• **Symmetric $2 \\times 2$** — eigenvalues $1$ and $3$ with perpendicular eigenvectors $(1, -1)$ and $(1, 1)$; symmetric matrices always have real eigenvalues and orthogonal eigenvectors
• **Repeated eigenvalue** — $\\lambda = 1$ twice and $\\lambda = 4$; the reduced form of $A - I$ has two free columns, so the eigenspace is a plane and the matrix is still diagonalizable
• **Defective** — the shear with $\\lambda = 1$ twice but a single eigenvector; algebraic multiplicity $2$, geometric multiplicity $1$, not diagonalizable
• **Triangular** — the eigenvalues are the diagonal entries, because $\\det(A - \\lambda I)$ of a triangular matrix is the product of the diagonal
• **Rotation** — the quarter turn, with characteristic polynomial $\\lambda^2 + 1$ and eigenvalues $\\pm i$; no real vector keeps its direction

Shuffle builds its matrices as $PDP^{-1}$ with an integer unimodular $P$, so the eigenvalues are small integers and the entries stay integers too.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Eigenvalues and Eigenvectors Are`,
      content: `A non-zero vector $\\mathbf{v}$ is an eigenvector of $A$ with eigenvalue $\\lambda$ when

$$A\\mathbf{v} = \\lambda\\mathbf{v}$$

Applying $A$ to $\\mathbf{v}$ does nothing but stretch it, by the factor $\\lambda$; a negative $\\lambda$ reverses it and $\\lambda = 0$ collapses it. Rewriting as $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ turns the definition into a solvable problem: a non-zero solution exists exactly when $A - \\lambda I$ is singular, that is when

$$p(\\lambda) = \\det(A - \\lambda I) = 0$$

This is the characteristic equation, and $p$ is a polynomial of degree $n$ whose roots are the eigenvalues. For a $2 \\times 2$ matrix it is $\\lambda^2 - (\\operatorname{tr} A)\\lambda + \\det A$; in general the coefficient of $\\lambda^{n-1}$ is $\\pm\\operatorname{tr} A$ and the constant is $\\pm\\det A$, which gives the two standard checks: the eigenvalues sum to the trace and multiply to the determinant.

Each eigenvalue then has an eigenspace, the null space of $A - \\lambda I$, found by row reduction. Its dimension, the geometric multiplicity, is at least $1$ and at most the algebraic multiplicity. When every eigenvalue has a full set, the eigenvectors form a basis and $A$ is diagonalizable: $A = PDP^{-1}$ with the eigenvectors as the columns of $P$.

Real matrices can have complex eigenvalues, in conjugate pairs; a $2 \\times 2$ rotation is the standard example. Symmetric matrices never do: their eigenvalues are real and their eigenvectors can be chosen orthogonal. For the full theory, see the [characteristic equation theory page](!/linear-algebra/eigen/characteristic-equation) and the [eigenvalue properties page](!/linear-algebra/eigen/properties).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Facts that hold for every square matrix.

• **Trace and determinant**: $\\sum \\lambda_i = \\operatorname{tr} A$ and $\\prod \\lambda_i = \\det A$, with multiplicity
• **Singular matrices**: $\\lambda = 0$ is an eigenvalue exactly when $\\det A = 0$
• **Triangular matrices**: the eigenvalues are the diagonal entries
• **Powers and inverses**: $A^k$ has eigenvalues $\\lambda^k$ with the same eigenvectors; $A^{-1}$ has $1/\\lambda$
• **Transpose**: $A^T$ has the same eigenvalues as $A$, though not the same eigenvectors
• **Multiplicities**: $1 \\leq$ geometric $\\leq$ algebraic for every eigenvalue
• **Distinct eigenvalues**: their eigenvectors are automatically linearly independent
• **Symmetric matrices**: real eigenvalues, orthogonal eigenvectors, always diagonalizable
• **Complex eigenvalues** of a real matrix come in conjugate pairs
• **Similar matrices**: $P^{-1}AP$ has the same characteristic polynomial as $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Eigenvectors are the directions in which a linear map is simplest, and most of applied linear algebra is about finding them.

• **Diagonalization**: in the eigenvector basis $A$ is diagonal, and powers, exponentials and functions of $A$ become trivial
• **Dynamical systems**: $\\mathbf{x}_{t+1} = A\\mathbf{x}_t$ grows, decays or oscillates along each eigenvector according to its eigenvalue; the dominant eigenvalue decides the long-run behaviour
• **Differential equations**: $\\dot{\\mathbf{x}} = A\\mathbf{x}$ has solutions $e^{\\lambda t}\\mathbf{v}$, one per eigenpair
• **Vibrations and stability**: natural frequencies are eigenvalues; a system is stable when every eigenvalue has negative real part
• **Principal components**: the eigenvectors of a covariance matrix are the directions of greatest variance
• **Graphs and networks**: PageRank is the dominant eigenvector of a link matrix, and spectral clustering uses eigenvectors of the graph Laplacian
• **Quantum mechanics**: observables are operators whose eigenvalues are the possible measurements`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 3 & 4 \\\\ 0 & 4 & 9 \\end{pmatrix}$$

**Characteristic polynomial.** Expanding $\\det(A - \\lambda I)$ along the first row, $(2 - \\lambda)\\left[(3 - \\lambda)(9 - \\lambda) - 16\\right] = (2 - \\lambda)(\\lambda^2 - 12\\lambda + 11)$. Made monic: $p(\\lambda) = \\lambda^3 - 14\\lambda^2 + 35\\lambda - 22$. Check: the trace is $14$ and the determinant is $2 \\cdot 11 = 22$.

**Roots.** $\\lambda^2 - 12\\lambda + 11 = (\\lambda - 1)(\\lambda - 11)$, so $p(\\lambda) = (\\lambda - 1)(\\lambda - 2)(\\lambda - 11)$ and the eigenvalues are $1$, $2$ and $11$. They sum to $14$ and multiply to $22$.

**Eigenvector for $\\lambda = 11$.** $A - 11I$ has rows $(-9, 0, 0)$, $(0, -8, 4)$, $(0, 4, -2)$. Row reducing: $x_1 = 0$ and $x_2 = \\tfrac{1}{2}x_3$, with $x_3$ free. Set $x_3 = 2$: $\\mathbf{v} = (0, 1, 2)$. Check: $A\\mathbf{v} = (0, 3 + 8, 4 + 18) = (0, 11, 22) = 11\\mathbf{v}$.

**Eigenvector for $\\lambda = 2$.** $A - 2I$ has rows $(0, 0, 0)$, $(0, 1, 4)$, $(0, 4, 7)$; the last two rows force $x_2 = x_3 = 0$ and $x_1$ is free: $\\mathbf{v} = (1, 0, 0)$.

**Eigenvector for $\\lambda = 1$.** $A - I$ has rows $(1, 0, 0)$, $(0, 2, 4)$, $(0, 4, 8)$: $x_1 = 0$, $x_2 = -2x_3$. Set $x_3 = -1$: $\\mathbf{v} = (0, 2, -1)$. Check: $A\\mathbf{v} = (0, 6 - 4, 8 - 9) = (0, 2, -1)$.

Three eigenvalues, three independent eigenvectors: $A$ is diagonalizable. Note that the two eigenvectors of the symmetric $2 \\times 2$ block, $(1, 2)$ and $(2, -1)$, are perpendicular.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Subtracting $\\lambda$ from every entry** — only the diagonal changes in $A - \\lambda I$; the off-diagonal entries are untouched
• **Solving $A\\mathbf{v} = \\lambda\\mathbf{v}$ with $\\mathbf{v} = \\mathbf{0}$** — the zero vector satisfies it for every $\\lambda$ and is excluded by definition; eigenvectors are non-zero
• **Expecting $A - \\lambda I$ to reduce to the identity** — it must be singular, so its reduced form has at least one zero row; a full pivot set means the $\\lambda$ is wrong
• **Reading a repeated root as a repeated eigenvector** — the multiplicity of the root says nothing by itself; the free columns of $A - \\lambda I$ decide how many eigenvectors there are
• **Assuming real eigenvalues** — a real matrix can have complex eigenvalues; only symmetric matrices are guaranteed real ones
• **Treating the eigenvector as unique** — any non-zero multiple is also an eigenvector; the tool scales to small integers for readability, not because that scale is special
• **Forgetting the checks** — the eigenvalues must sum to the trace and multiply to the determinant, and $A\\mathbf{v}$ must come out as $\\lambda\\mathbf{v}$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the characteristic polynomial is one, expanded symbolically in $\\lambda$.

[Null space and solution sets](!/linear-algebra/visual-tools/linear-system-solutions) — each eigenspace is the null space of $A - \\lambda I$, found by the same reduction.

[Diagonalization](!/linear-algebra/visual-tools/matrix-diagonalization) — what a full set of eigenvectors makes possible: $A = PDP^{-1}$.

[Matrix powers](!/linear-algebra/visual-tools/matrix-power) — trivial in the eigenvector basis, since $A^k\\mathbf{v} = \\lambda^k\\mathbf{v}$.

[Symmetric matrices and the spectral theorem](!/linear-algebra/visual-tools/spectral-decomposition) — real eigenvalues, orthogonal eigenvectors.

[Eigenvectors in 2D](!/linear-algebra/visual-tools/eigen-vectors-2d) — the geometric picture of the same computation, with the vectors that keep their direction drawn on the plane.

**Complex numbers** — where the eigenvalues of a rotation live.

[Trace and determinant](!/linear-algebra/visual-tools/matrix-trace) — the two invariants the eigenvalues must reproduce.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Forming A Minus Lambda I`,
      content: `The first move subtracts the unknown $\\lambda$ from each diagonal entry, leaving the rest of $A$ as it is. The frozen picture below shows the default preset's $A - \\lambda I$ between determinant bars, its diagonal reading $2 - \\lambda$, $3 - \\lambda$, $9 - \\lambda$.

This matrix is singular for exactly the right values of $\\lambda$, and nothing else about it matters yet.`,
      before: ``,
      after: `The shift is where the definition becomes computation. $A\\mathbf{v} = \\lambda\\mathbf{v}$ has an unknown on both sides; moving everything to the left gives $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$, a homogeneous system with a parameter in it. A homogeneous system has a non-zero solution exactly when its matrix is singular, so the eigenvalues are the values of $\\lambda$ at which $A - \\lambda I$ loses rank.

Only the diagonal carries $\\lambda$ because $\\lambda I$ is diagonal. This is the entry-level mistake most worth avoiding: the off-diagonal entries of $A - \\lambda I$ are those of $A$, unchanged.`,
      link: '',
    },
    obj12: {
      title: `The Characteristic Polynomial`,
      content: `Expanding $\\det(A - \\lambda I)$ produces a polynomial in $\\lambda$ of degree $n$. The frozen picture below shows the default preset's coefficients laid out beside the shifted matrix: $1$, $-14$, $35$, $-22$, for $\\lambda^3 - 14\\lambda^2 + 35\\lambda - 22$.

The second coefficient is minus the trace and the last is minus the determinant, which are the two checks the tool applies throughout.`,
      before: ``,
      after: `For a $3 \\times 3$ matrix the raw expansion has leading term $-\\lambda^3$; the tool multiplies through by $-1$ so the polynomial is monic and its roots are easier to read. The middle coefficient is the sum of the three principal $2 \\times 2$ minors, a quantity with no common name but a definite meaning: the second elementary symmetric function of the eigenvalues.

The polynomial is the whole eigenvalue problem in one object. Two matrices with the same characteristic polynomial share their eigenvalues, trace and determinant; similar matrices always do, which is what makes eigenvalues a property of the transformation rather than of the particular matrix representing it.`,
      link: '',
    },
    obj13: {
      title: `Finding the Roots`,
      content: `The eigenvalues are the roots of the characteristic polynomial. The frozen picture below shows the default preset's three roots, $11$, $2$ and $1$, beside the coefficient row.

For a $2 \\times 2$ the quadratic formula does it; for a $3 \\times 3$ the tool uses the cubic formula, then polishes the roots and snaps them to simple values when they are within rounding error of one.`,
      before: ``,
      after: `By hand the cubic is usually cracked by spotting a rational root among the divisors of the constant term, dividing it out, and solving the remaining quadratic; the factored form in the caption is what that produces. Triangular and block-triangular matrices short-circuit the whole step, since their eigenvalues sit on the diagonal.

The two checks are worth applying every time: the roots must sum to the trace and multiply to the determinant. A slip in the expansion almost always fails one of them.`,
      link: '',
    },
    obj14: {
      title: `Reading an Eigenvector`,
      content: `For each real eigenvalue, the tool substitutes it into $A - \\lambda I$, row reduces, and reads a null-space vector by setting the free variable to $1$. The frozen picture below is the default preset's $\\lambda = 11$: the shifted matrix, its reduced form with two pivots and one free column, and the eigenvector $(0, 1, 2)$.

The reduced form must have at least one free column; that is what being singular means, and it is the source of the eigenvector.`,
      before: ``,
      after: `An eigenvector is never unique. Any non-zero multiple of $(0, 1, 2)$ is also an eigenvector for $11$, and the whole line through it is the eigenspace. The tool scales to small integers for readability; a unit vector, or the one with free variable $1$, would be equally valid.

When the reduced form has more than one free column, the eigenspace is a plane or larger, with one eigenvector per free column. That happens only for repeated eigenvalues, and whether it happens is the question of diagonalizability.`,
      link: '',
    },
    obj15: {
      title: `A Repeated Eigenvalue with a Plane of Eigenvectors`,
      content: `On the repeated preset, $\\lambda = 1$ is a double root, and $A - I$ is the all-ones matrix, which reduces to a single non-zero row. Two free columns, so two independent eigenvectors: the eigenspace is a plane.

The frozen picture below shows that scene: one pivot, two free columns, and both eigenvectors read off.`,
      before: ``,
      after: `Here the geometric multiplicity, $2$, equals the algebraic multiplicity, and the matrix has a full set of three eigenvectors: it is diagonalizable, with the eigenvalue $1$ appearing twice on the diagonal. Symmetric matrices, like this one, always achieve this.

The defective preset shows the other possibility. Its $\\lambda = 1$ is also a double root, but $A - I$ has only one free column, one eigenvector, geometric multiplicity $1$ against algebraic multiplicity $2$. No basis of eigenvectors exists, and the matrix cannot be diagonalized; the closest it comes is the Jordan form.`,
      link: '',
    },
    obj16: {
      title: `Complex Eigenvalues`,
      content: `On the rotation preset the characteristic polynomial is $\\lambda^2 + 1$, with roots $\\pm i$. The frozen picture below shows the run stopping there: the eigenvalues are complex, and no real vector keeps its direction under a quarter turn.

The tool stops because there are no real eigenvectors to reduce for; the matrix is not defective, just not real-diagonalizable.`,
      before: ``,
      after: `Complex eigenvalues of a real matrix always come in conjugate pairs, and for a $2 \\times 2$ they mean the map is a rotation combined with a scaling by $|\\lambda|$. Over the complex numbers the eigenvectors exist, and in the real plane the pair corresponds to a rotation-scaling block rather than to two stretch directions.

This is also the reason symmetric matrices are special. Their eigenvalues are always real, so this case never arises for them, and the spectral theorem guarantees a full orthogonal set of real eigenvectors.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from EigenWrapper's own buildScenes on the default preset (and the
     repeated and rotation presets for their special scenes) and rendered
     through frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: eigenDiagrams[key], caption, text })

  const stateUnits = {
    shift: unit('shift', 'A &minus; &lambda;I, frozen',
      'The default preset with &lambda; subtracted from each diagonal entry and nothing else touched. The ' +
      'eigenvalues are the values of &lambda; that make this matrix singular.'),
    expand: unit('expand', 'Characteristic polynomial, frozen',
      'Coefficients 1, &minus;14, 35, &minus;22: &lambda;&#179; &minus; 14&lambda;&#178; + 35&lambda; &minus; 22. ' +
      'Minus the trace in second place, minus the determinant in last - the two standing checks.'),
    roots: unit('roots', 'Eigenvalues, frozen',
      'The roots 11, 2, 1 beside the coefficient row. They sum to 14, the trace, and multiply to 22, the determinant.'),
    eigvec: unit('eigvec', 'Eigenvector for &lambda; = 11, frozen',
      'A &minus; 11I row reduced to two pivots and one free column, and the eigenvector (0, 1, 2) read off with the ' +
      'free variable set to 1 and scaled to integers. A v = 11 v.'),
    repeated: unit('repeated', 'Repeated eigenvalue, frozen',
      'The repeated preset at &lambda; = 1: A &minus; I reduces to a single row, two free columns, two eigenvectors. ' +
      'Geometric multiplicity 2 matches algebraic multiplicity 2 - a full set.'),
    complex: unit('complex', 'Complex eigenvalues, frozen',
      'The quarter-turn rotation: &lambda;&#178; + 1 = 0, eigenvalues &plusmn;i, and the run stops. No real direction ' +
      'survives a rotation; the eigenvectors live in &#8450;&#178;.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     EigenWrapper accepts an explanations prop keyed by scene phase:
     intro, shift, expand, roots, complex, eigvec, done. Captions render
     with dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-eigenvalues-and-eigenvectors-are" style="color:#1d4ed8;font-weight:600">what they are</a></div>`

  const explanations = {
    intro: note('Shift, expand, find roots, reduce - the same four moves for every matrix.', 'forming-a-minus-lambda-i', 'Learn more about the first move'),
    shift: note('Only the diagonal carries &lambda;; the eigenvalues make this matrix singular.', 'forming-a-minus-lambda-i', 'Learn more about the shift'),
    expand: note('Second coefficient minus the trace, last minus the determinant.', 'the-characteristic-polynomial', 'Learn more about the polynomial'),
    roots: note('Roots sum to the trace and multiply to the determinant - check both.', 'finding-the-roots', 'Learn more about the roots'),
    complex: note('A conjugate pair: a rotation-scaling, with no real eigenvector.', 'complex-eigenvalues', 'Learn more about the complex case'),
    eigvec: note('A free column of A &minus; &lambda;I is where the eigenvector comes from; any multiple works.', 'reading-an-eigenvector', 'Learn more about eigenvectors'),
    done: note('A full set of eigenvectors means diagonalizable; a shortfall means defective.', 'a-repeated-eigenvalue', 'Learn more about multiplicities'),
  }


  const faqQuestions = {
    obj1: {
      question: "What are eigenvalues and eigenvectors?",
      answer: "An eigenvector of a square matrix A is a non-zero vector v that A only scales: A v = λ v for some number λ, the eigenvalue. Geometrically, eigenvectors are the directions the transformation does not turn, and the eigenvalue is the factor by which it stretches them. A negative eigenvalue reverses the direction and a zero eigenvalue collapses it."
    },
    obj2: {
      question: "How do you find the eigenvalues of a matrix?",
      answer: "Subtract λ from each diagonal entry to form A − λI, expand its determinant into the characteristic polynomial, and find the roots. For a 2×2 matrix the polynomial is λ² − (trace)λ + (determinant) and the quadratic formula gives the roots; for a 3×3 it is a cubic, usually solved by finding a rational root and dividing it out. The roots sum to the trace and multiply to the determinant, which checks the work."
    },
    obj3: {
      question: "How do you find the eigenvectors once you have the eigenvalues?",
      answer: "For each eigenvalue λ, substitute it into A − λI and row reduce. The reduced matrix has at least one free column, because A − λI is singular. Set a free variable to 1 and solve for the rest; the resulting vector is an eigenvector, and any non-zero multiple of it is one too. If there are several free columns, each gives an independent eigenvector and the eigenspace has that many dimensions."
    },
    obj4: {
      question: "What is the difference between algebraic and geometric multiplicity?",
      answer: "The algebraic multiplicity of an eigenvalue is how many times it appears as a root of the characteristic polynomial. The geometric multiplicity is the dimension of its eigenspace, the number of free columns of A − λI. The geometric multiplicity is always at least 1 and at most the algebraic multiplicity. When they are equal for every eigenvalue the matrix has a full set of eigenvectors and is diagonalizable; when some eigenvalue falls short the matrix is defective."
    },
    obj5: {
      question: "Can a real matrix have complex eigenvalues?",
      answer: "Yes. The characteristic polynomial of a real matrix has real coefficients, so its complex roots come in conjugate pairs, and a rotation of the plane is the standard example: its polynomial is λ² + 1 with roots ±i, and no real vector keeps its direction. Symmetric matrices are the exception: their eigenvalues are always real and their eigenvectors can be chosen orthogonal."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Eigenvalues and Eigenvectors Visualizer",
      "description": "Step-by-step visualizer that forms A − λI, expands the characteristic polynomial, finds its roots, and row reduces for each eigenvector of a 2×2 or 3×3 matrix, reporting multiplicities and diagonalizability.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/eigenvalues-eigenvectors",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable 2×2 or 3×3 matrix with six presets and a shuffle that produces integer eigenvalues",
        "A − λI with λ on the diagonal, then the characteristic polynomial's coefficients",
        "Roots by the quadratic or cubic formula, with the factored form and trace and determinant checks",
        "One row reduction scene per real eigenvalue with the eigenvector read from the free column",
        "Algebraic and geometric multiplicities reported, with a diagonalizability verdict",
        "Complex eigenvalues detected and explained",
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
      "keywords": "eigenvalues and eigenvectors, eigenvalue calculator, eigenvector calculator, characteristic polynomial, characteristic equation, how to find eigenvalues, how to find eigenvectors, eigenvalues 3x3, eigenvalues 2x2, eigenvalue visualizer step by step, algebraic and geometric multiplicity, defective matrix, complex eigenvalues, linear algebra visualizer, interactive matrix tool"
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
          "name": "Eigenvalues and Eigenvectors",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/eigenvalues-eigenvectors"
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
      relatedTools: getRelatedTools('linear-algebra-eigenvalues-eigenvectors'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Eigenvalues and Eigenvectors Visualizer | Step by Step",
        description: "Find the eigenvalues and eigenvectors of a 2×2 or 3×3 matrix step by step: form A − λI, expand the characteristic polynomial, find its roots, and row reduce for each eigenvector, with multiplicities and a diagonalizability verdict.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/eigenvalues-eigenvectors",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="66" x2="12" y2="14" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="66" x2="68" y2="66" stroke="#B5D4F4" stroke-width="1"/><line x1="12" y1="66" x2="38" y2="44" stroke="#85B7EB" stroke-width="2.2" stroke-dasharray="3,2"/><line x1="12" y1="66" x2="60" y2="26" stroke="#FAC775" stroke-width="3"/><path d="M 64 22.5 L 55.5 25 L 59.5 31 Z" fill="#FAC775"/><circle cx="38" cy="44" r="2.6" fill="#85B7EB"/><line x1="12" y1="66" x2="30" y2="60" stroke="#97C459" stroke-width="2.2" stroke-dasharray="3,2"/><line x1="12" y1="66" x2="20" y2="63.5" stroke="#97C459" stroke-width="3"/><path d="M 23 62.5 L 17.5 60.5 L 18.5 65.5 Z" fill="#97C459"/><text x="66" y="40" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">&lambda;v</text><text x="44" y="52" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">v</text><text x="40" y="76" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">det(A &minus; &lambda;I) = 0</text></svg>`,
        name: "Eigenvalues and Eigenvectors Visualizer",
        hubDescription: "Find the eigenvalues and eigenvectors of a matrix of your own numbers exactly as it is done by hand: subtract λ from the diagonal, expand the determinant into the characteristic polynomial, find its roots with the trace and determinant as checks, then row reduce A − λI for each eigenvalue and read an eigenvector from its free column. Presets cover distinct, repeated, defective, triangular, symmetric and complex cases, and the final scene says whether the matrix can be diagonalized.",
        category: 'Matrices',
        subCategory: 'Eigenvalues'
      }
    }
  }
}

export default function EigenVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-four-moves'),
    stateRow('obj11', 'forming-a-minus-lambda-i', 'shift'),
    stateRow('obj12', 'the-characteristic-polynomial', 'expand'),
    stateRow('obj13', 'finding-the-roots', 'roots'),
    stateRow('obj14', 'reading-an-eigenvector', 'eigvec'),
    stateRow('obj15', 'a-repeated-eigenvalue', 'repeated'),
    stateRow('obj16', 'complex-eigenvalues', 'complex'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-eigenvalues-and-eigenvectors-are'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Eigenvalues and Eigenvectors</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <EigenWrapper
   defaultPreset='distinct'
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
