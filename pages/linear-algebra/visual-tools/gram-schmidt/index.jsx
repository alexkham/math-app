import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import GramSchmidtWrapper from '../../../../app/components/linear-algebra copy/matrix/GramSchmidtWrapper'
import gramSchmidtDiagrams from '../../../../app/components/linear-algebra copy/matrix/gramSchmidtDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'gram schmidt process',
    'gram schmidt orthogonalization',
    'gram schmidt visualizer',
    'gram schmidt calculator',
    'gram schmidt step by step',
    'orthogonalization',
    'orthonormal basis',
    'orthogonal basis',
    'how to do gram schmidt',
    'gram schmidt example',
    'qr decomposition',
    'projection subtraction',
    'orthonormalization',
    'linear algebra visualizer',
    'interactive vector tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Orthogonal set** — [vectors](!/linear-algebra/vectors#1) that are pairwise perpendicular: $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ whenever $i \\neq j$.

**Orthonormal set** — an [orthogonal set](!/linear-algebra/orthogonality/orthogonal-sets#1) in which every vector has length $1$.

**Gram-Schmidt process** — the procedure that turns any list of independent vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ into an orthogonal list $\\mathbf{u}_1, \\ldots, \\mathbf{u}_k$ with the same [span](!/linear-algebra/vector-spaces/span#1), and then into an orthonormal list $\\mathbf{e}_1, \\ldots, \\mathbf{e}_k$.

**Projection coefficient** — $c_{k,j} = \\dfrac{\\mathbf{v}_k \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$, the multiple of $\\mathbf{u}_j$ that is subtracted from $\\mathbf{v}_k$.

**Orthogonalization** — the first pass, $\\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j < k} c_{k,j} \\mathbf{u}_j$.

**Normalization** — the second pass, $\\mathbf{e}_k = \\mathbf{u}_k / \\|\\mathbf{u}_k\\|$.

**Span preservation** — at every stage $\\operatorname{span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\} = \\operatorname{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$.

**QR decomposition** — the [matrix](!/linear-algebra/matrix#1) form of the process: with the $\\mathbf{v}_k$ as the columns of $A$ and the $\\mathbf{e}_k$ as the columns of $Q$, $A = QR$ with $R$ upper triangular.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set how many vectors and how long they are, then watch the process run.

• Use the **Number of vectors** stepper for $2$ or $3$ input vectors; they are the rows of the matrix $V$
• Use the **Vector length** stepper for $2$, $3$ or $4$ components
• Hover the **?** icon for a reminder of what the process does and why the inputs must be independent
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• Everything is symbolic: the coefficients are named $c_{k,j}$ and the lengths $\\|\\mathbf{u}_k\\|$, so each row of $U$ shows the structure of the formula rather than a numerical result

Choosing $3$ vectors of length $2$ is allowed and instructive: three vectors in the plane cannot be independent, and the caption points out that the third would reduce to zero.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Phases`,
      content: `The visualizer runs the process in the order it is always written.

• **Keep** — $\\mathbf{u}_1 = \\mathbf{v}_1$; the first vector sets the first direction and is not changed
• **Start** — $\\mathbf{u}_k$ begins as a copy of $\\mathbf{v}_k$, not yet perpendicular to anything
• **Subtract** — one scene for each earlier $\\mathbf{u}_j$: the projection of $\\mathbf{v}_k$ onto $\\mathbf{u}_j$ is subtracted, and row $k$ of $U$ grows one term, $- c_{k,j} \\mathbf{u}_j$
• **Normalize** — one scene per vector: $\\mathbf{e}_k = \\mathbf{u}_k / \\|\\mathbf{u}_k\\|$, filling the rows of $E$
• **Done** — the rows of $E$ are orthonormal and span the same space as the rows of $V$

The layout changes once, between the two passes: $V \\to U$ while the vectors are being made perpendicular, then $U \\to E$ while they are being scaled to length one.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines row highlights, an arrow, and a caption.

• In a **keep** or **start** scene, the source row of $V$ is primary and the destination row of $U$ is accent
• In a **subtract** scene, the row of $V$ being processed is primary, the row $\\mathbf{u}_j$ being projected onto is secondary, and the row being built is accent, with an arrow from $\\mathbf{u}_j$ into it; the caption states the coefficient formula and the full expression so far
• In a **normalize** scene, the row of $U$ is primary and the row of $E$ accent, with an arrow between them
• Cells of $U$ show the accumulated expression $v_{k,i} - c_{k,1} u_{1,i} - \\cdots$, and cells of $E$ show $u_{k,i} / \\|\\mathbf{u}_k\\|$, at a font size that scales with the number of terms
• The step log on the right keeps a record of every completed step across both passes`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing the Size`,
      content: `Two and three vectors cover the whole pattern, and lengths from $2$ to $4$ show that the length is irrelevant to it.

• With $2$ vectors there is one subtraction: $\\mathbf{u}_2 = \\mathbf{v}_2 - c_{2,1} \\mathbf{u}_1$, the projection tool's remainder
• With $3$ vectors there are three subtractions, and the third vector shows the essential point: it is projected onto $\\mathbf{u}_1$ and $\\mathbf{u}_2$, the vectors already made orthogonal, never onto the original $\\mathbf{v}_2$
• The vector length only changes how many components each row has; the number of scenes depends on the number of vectors alone
• Beyond three vectors the pattern simply continues, with $k - 1$ subtractions for the $k$-th vector; the tool stops at three because the expressions in row $3$ of $U$ are already three terms long`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Gram-Schmidt Process Is`,
      content: `Given linearly independent vectors $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$, the process produces [orthogonal vectors](!/linear-algebra/orthogonality#1)

$$\\mathbf{u}_1 = \\mathbf{v}_1, \\qquad \\mathbf{u}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\frac{\\mathbf{v}_k \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}\\,\\mathbf{u}_j$$

and then orthonormal vectors

$$\\mathbf{e}_k = \\frac{\\mathbf{u}_k}{\\|\\mathbf{u}_k\\|}$$

Each $\\mathbf{u}_k$ is $\\mathbf{v}_k$ with its projections onto all the earlier $\\mathbf{u}_j$ removed, so it is perpendicular to every one of them; and since it differs from $\\mathbf{v}_k$ only by a combination of earlier vectors, the span is unchanged at every step. The result is an orthonormal [basis](!/linear-algebra/vector-spaces#2) of $\\operatorname{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}$ with the extra property that the first $m$ output vectors span the same space as the first $m$ inputs, for every $m$.

Why the subtraction works: dot $\\mathbf{u}_k$ with any earlier $\\mathbf{u}_j$. The projections onto the other $\\mathbf{u}_i$ contribute nothing, since they are already perpendicular to $\\mathbf{u}_j$, and the projection onto $\\mathbf{u}_j$ contributes exactly $-\\mathbf{v}_k \\cdot \\mathbf{u}_j$, cancelling the $\\mathbf{v}_k \\cdot \\mathbf{u}_j$ from the first term.

Independence is required. If $\\mathbf{v}_k$ lies in the span of the earlier vectors, subtracting its projections leaves $\\mathbf{u}_k = \\mathbf{0}$, which cannot be normalized. For the full treatment, including the modified Gram-Schmidt variant and numerical behaviour, see the [Gram-Schmidt theory page](!/linear-algebra/orthogonality/gram-schmidt).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The output of the process has more structure than orthonormality alone.

• **Orthogonality**: $\\mathbf{u}_i \\cdot \\mathbf{u}_j = 0$ and $\\mathbf{e}_i \\cdot \\mathbf{e}_j = 0$ for $i \\neq j$
• **Unit length**: $\\|\\mathbf{e}_k\\| = 1$ for every $k$
• **Nested spans**: $\\operatorname{span}\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_m\\} = \\operatorname{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_m\\}$ for every $m \\leq k$
• **Order matters**: reordering the inputs gives a different orthonormal basis of the same space
• **Coefficients are inner products**: with the orthonormal vectors, $\\mathbf{v}_k = \\sum_{j \\leq k} (\\mathbf{v}_k \\cdot \\mathbf{e}_j)\\,\\mathbf{e}_j$, which is the $k$-th column of $R$ in $A = QR$
• **Independence test**: a zero $\\mathbf{u}_k$ means $\\mathbf{v}_k$ was dependent on its predecessors
• **Coordinates for free**: in an orthonormal basis the coordinates of any vector are its [dot products](!/linear-algebra/vectors/dot-product#1) with the basis vectors, no system to solve
• **Numerical caveat**: in floating point, subtracting all projections from the original $\\mathbf{v}_k$ loses orthogonality gradually; the modified variant subtracts each projection from the running remainder instead and is more stable`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Orthonormal bases make almost every computation in linear algebra simpler, and Gram-Schmidt is how they are made.

• **QR decomposition**: the process on the columns of $A$ gives $A = QR$, the workhorse of least squares and of [eigenvalue](!/linear-algebra/eigen#2) algorithms
• **Least squares**: solving $Ax \\approx b$ with an orthonormal basis of the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2) reduces to dot products, avoiding the ill-conditioned [normal equations](!/linear-algebra/orthogonality/least-squares#3)
• **Orthogonal projection onto a subspace**: with an orthonormal basis $\\mathbf{e}_1, \\ldots, \\mathbf{e}_k$ of the [subspace](!/linear-algebra/vector-spaces/subspaces#1), the projection of any $\\mathbf{w}$ is $\\sum (\\mathbf{w} \\cdot \\mathbf{e}_j)\\,\\mathbf{e}_j$
• **Change of basis**: an orthonormal basis matrix $Q$ has $Q^{-1} = Q^T$, so converting coordinates costs a transpose rather than an inversion
• **Function spaces**: applied to $1, x, x^2, \\ldots$ with an integral inner product, the same process produces the Legendre polynomials and their relatives
• **Signal processing and statistics**: orthogonalizing regressors or basis signals removes redundancy so that each contribution can be read off independently`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take three vectors in $\\mathbb{R}^3$:

$$\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\mathbf{v}_3 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$$

**Keep**: $\\mathbf{u}_1 = \\mathbf{v}_1 = (1, 1, 0)$.

**Second vector**: $c_{2,1} = \\dfrac{\\mathbf{v}_2 \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\dfrac{1}{2}$, so

$$\\mathbf{u}_2 = \\mathbf{v}_2 - \\tfrac{1}{2}\\mathbf{u}_1 = \\left(\\tfrac{1}{2}, -\\tfrac{1}{2}, 1\\right)$$

Check: $\\mathbf{u}_2 \\cdot \\mathbf{u}_1 = \\tfrac{1}{2} - \\tfrac{1}{2} + 0 = 0$.

**Third vector**: $c_{3,1} = \\dfrac{1}{2}$ and $c_{3,2} = \\dfrac{\\mathbf{v}_3 \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2} = \\dfrac{-\\frac{1}{2} + 1}{\\frac{1}{4} + \\frac{1}{4} + 1} = \\dfrac{1/2}{3/2} = \\dfrac{1}{3}$, so

$$\\mathbf{u}_3 = \\mathbf{v}_3 - \\tfrac{1}{2}\\mathbf{u}_1 - \\tfrac{1}{3}\\mathbf{u}_2 = \\left(-\\tfrac{2}{3}, \\tfrac{2}{3}, \\tfrac{2}{3}\\right)$$

Check: $\\mathbf{u}_3 \\cdot \\mathbf{u}_1 = -\\tfrac{2}{3} + \\tfrac{2}{3} = 0$ and $\\mathbf{u}_3 \\cdot \\mathbf{u}_2 = -\\tfrac{1}{3} - \\tfrac{1}{3} + \\tfrac{2}{3} = 0$.

**Normalize**: $\\|\\mathbf{u}_1\\| = \\sqrt{2}$, $\\|\\mathbf{u}_2\\| = \\sqrt{3/2}$, $\\|\\mathbf{u}_3\\| = \\sqrt{4/3}$, giving

$$\\mathbf{e}_1 = \\tfrac{1}{\\sqrt{2}}(1, 1, 0), \\quad \\mathbf{e}_2 = \\tfrac{1}{\\sqrt{6}}(1, -1, 2), \\quad \\mathbf{e}_3 = \\tfrac{1}{\\sqrt{3}}(-1, 1, 1)$$

Set the visualizer to $3$ vectors of length $3$ and step through to see the same six steps assembled symbolically, with $c_{2,1}$, $c_{3,1}$ and $c_{3,2}$ standing for the three fractions above.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Projecting onto the original vectors** — $\\mathbf{v}_3$ must be projected onto $\\mathbf{u}_1$ and $\\mathbf{u}_2$, the vectors already made orthogonal, not onto $\\mathbf{v}_1$ and $\\mathbf{v}_2$; using the originals does not produce a perpendicular remainder
• **Normalizing too early** — dividing $\\mathbf{u}_j$ by its length before using it in later projections is fine if the coefficient formula is adjusted to $\\mathbf{v}_k \\cdot \\mathbf{e}_j$, but mixing the two conventions gives wrong coefficients
• **Dividing by $\\|\\mathbf{u}_j\\|$ instead of $\\mathbf{u}_j \\cdot \\mathbf{u}_j$** — the projection coefficient needs the squared length, exactly as in the projection formula
• **Forgetting that order matters** — running the process on the same vectors in a different order gives a different orthonormal basis
• **Feeding in dependent vectors** — a dependent $\\mathbf{v}_k$ reduces to $\\mathbf{u}_k = \\mathbf{0}$; the fix is to drop it and continue, not to divide by zero
• **Skipping the check** — every $\\mathbf{u}_k$ should be dotted against the earlier ones; a non-zero result means an arithmetic slip somewhere above it`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Vector projection](!/linear-algebra/visual-tools/vector-projection) — each subtraction step is the projection tool's remainder, applied once per earlier vector.

[Dot product](!/linear-algebra/visual-tools/vectors-inner-product) — supplies every coefficient and every length in the process.

[Magnitude and unit vector](!/linear-algebra/visual-tools/vector-magnitude) — the normalization pass, applied to each $\\mathbf{u}_k$.

[Orthogonal and orthonormal sets](!/linear-algebra/visual-tools/orthogonal-matrices) — the output, and the reason the coordinates in the new basis are dot products.

[Linear independence](!/linear-algebra/visual-tools/span-independence-2d) — the precondition; a dependent input collapses to zero.

[QR decomposition](!/linear-algebra/visual-tools/qr-decomposition) — the matrix form of the process.

[Least squares](!/linear-algebra/visual-tools/least-squares) — the main application of an orthonormal basis of a column space.

[Change of basis](!/linear-algebra/visual-tools/change-basis-2d) — orthonormal bases invert by transposition.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: The Input Set as Rows`,
      content: `The player opens with the input vectors stacked as the rows of $V$ and an empty matrix $U$ of the same shape beside it. At the default size there are three vectors of length three.

Nothing is computed yet. What the scene establishes is the plan: the rows of $U$ will be filled top to bottom, each one made perpendicular to the rows above it before the next is started.`,
      before: ``,
      after: `Stacking the vectors as rows is a presentational choice; the process does not care whether the vectors are rows or columns. In the QR decomposition they are the columns of $A$, and the rows of $E$ here are the columns of $Q$ there.

The one precondition is independence. The tool does not check it, because its inputs are symbolic, but the caption notes when the chosen sizes make independence impossible: three vectors in $\\mathbb{R}^2$ cannot all survive the process.`,
      link: '',
    },
    obj12: {
      title: `Keeping the First Vector`,
      content: `The first step is the easiest: $\\mathbf{u}_1 = \\mathbf{v}_1$, copied across unchanged.

The frozen picture below shows the copy: row $1$ of $V$ highlighted as the source, row $1$ of $U$ filled with the same components.`,
      before: ``,
      after: `There is nothing for the first vector to be perpendicular to, so nothing is subtracted. Its only role is to fix the first direction of the orthogonal set, and that choice propagates: every later vector is adjusted relative to it.

This is where the order dependence enters. Start with a different $\\mathbf{v}$ and the whole output changes, even though the span it describes does not.`,
      link: '',
    },
    obj13: {
      title: `Subtracting the Projections`,
      content: `Each later vector begins as a copy of itself and then loses, one at a time, its projections onto the vectors already made orthogonal. The coefficient of each projection is $c_{k,j} = (\\mathbf{v}_k \\cdot \\mathbf{u}_j) / (\\mathbf{u}_j \\cdot \\mathbf{u}_j)$, and the row of $U$ grows a term with every subtraction.

The frozen picture below is the last subtraction at the default size: row $3$ of $U$ reads $v_{3,i} - c_{3,1} u_{1,i} - c_{3,2} u_{2,i}$, perpendicular to both earlier rows.`,
      before: ``,
      after: `The projection is always onto the $\\mathbf{u}_j$, never onto the original $\\mathbf{v}_j$. That is the detail the picture is built to show: the row highlighted as the source of each subtraction is a row of $U$, already orthogonal, not a row of $V$.

Subtracting projections onto perpendicular directions is what makes the pieces independent of one another. Removing the $\\mathbf{u}_1$ component of $\\mathbf{v}_3$ does not disturb its $\\mathbf{u}_2$ component, because $\\mathbf{u}_1 \\perp \\mathbf{u}_2$; so the two subtractions can be done in either order and the result is the same vector, perpendicular to both.`,
      link: '',
    },
    obj14: {
      title: `Normalizing`,
      content: `The second pass divides every component of each $\\mathbf{u}_k$ by its length $\\|\\mathbf{u}_k\\|$, filling the rows of $E$.

The frozen picture below is the first normalization: row $1$ of $U$ as the source, row $1$ of $E$ reading $u_{1,i} / \\|\\mathbf{u}_1\\|$.`,
      before: ``,
      after: `Normalization is the magnitude tool's third phase applied $k$ times. It changes lengths and nothing else, so the perpendicularity established in the first pass survives it, and the result is an orthonormal set.

Doing the two passes separately is a teaching device. In practice each $\\mathbf{u}_k$ is often normalized as soon as it is finished, and the later coefficients become plain dot products $\\mathbf{v}_k \\cdot \\mathbf{e}_j$ with no division. Either way the output is the same.`,
      link: '',
    },
    obj15: {
      title: `The Completed Orthonormal Set`,
      content: `The final scene shows every row of $E$ filled: an orthonormal set spanning exactly the space the rows of $V$ span.

The frozen picture below is the default run complete, three [unit vectors](!/linear-algebra/vectors/magnitude#5), pairwise perpendicular.`,
      before: ``,
      after: `Two things are true of the finished set beyond orthonormality. The first $m$ rows of $E$ span the same space as the first $m$ rows of $V$, for every $m$, because the process never looks ahead. And the numbers it discarded along the way, the coefficients $c_{k,j}$ and the lengths $\\|\\mathbf{u}_k\\|$, are not waste: rescaled by the lengths, they are the entries of the upper triangular $R$ in $A = QR$, with the rows of $E$ as the columns of $Q$.

That is why the process is the foundation of so much numerical linear algebra. An orthonormal basis turns projections, coordinates and least squares into dot products, and Gram-Schmidt is the direct way to get one.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from GramSchmidtWrapper's own buildScenes (exported additively) at
     k = 3, n = 3 and rendered through frozenMatrixSvgFixed. Stills are found
     by phase; arrows are not reproduced, the row highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: gramSchmidtDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'Three input vectors stacked as the rows of V, an empty U beside them. The rows of U will be ' +
      'filled top to bottom, each made perpendicular to the ones above before the next begins.'),
    keep: unit('keep', 'First vector kept, frozen',
      'u<sub>1</sub> = v<sub>1</sub>, copied across unchanged. Nothing to be perpendicular to yet; ' +
      'this row fixes the first direction and every later vector is adjusted against it.'),
    subtract: unit('subtract', 'Last subtraction, frozen',
      'Row 3 of U reading v<sub>3,i</sub> &minus; c<sub>3,1</sub>u<sub>1,i</sub> &minus; c<sub>3,2</sub>u<sub>2,i</sub>. ' +
      'The projections are onto u<sub>1</sub> and u<sub>2</sub>, already orthogonal - never onto the original v<sub>2</sub>.'),
    normalize: unit('normalize', 'First normalization, frozen',
      'Row 1 of U divided by its length into row 1 of E. Lengths change, directions do not, so the ' +
      'perpendicularity from the first pass survives.'),
    done: unit('done', 'Completed orthonormal set, frozen',
      'All three rows of E filled: unit vectors, pairwise perpendicular, spanning the same space as ' +
      'the rows of V. As columns, this is the Q of A = QR.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     GramSchmidtWrapper accepts an explanations prop keyed by scene phase:
     intro, keep, start, subtract, normalize, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-gram-schmidt-process-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Keep the first, subtract projections from the rest, then normalize.', 'the-opening-scene', 'Learn more about the opening scene'),
    keep: note('The first vector fixes the first direction; order matters from here on.', 'keeping-the-first-vector', 'Learn more about the first step'),
    start: note('A copy of v<sub>k</sub>, not yet perpendicular to anything.', 'subtracting-the-projections', 'Learn more about the subtractions'),
    subtract: note('Project onto the u<sub>j</sub> already made orthogonal, never onto the original v<sub>j</sub>.', 'subtracting-the-projections', 'Learn more about the subtractions'),
    normalize: note('Divide by the length; directions, and so perpendicularity, are untouched.', 'normalizing', 'Learn more about normalizing'),
    done: note('Orthonormal, same span, nested spans - and the discarded coefficients are R in A = QR.', 'the-completed-orthonormal-set', 'Learn more about the completed set'),
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Gram-Schmidt process do?",
      answer: "It takes a list of linearly independent vectors and produces an orthonormal list spanning the same space. The first vector is kept; each later vector has its projections onto the earlier output vectors subtracted, which makes it perpendicular to all of them; and finally every vector is divided by its length. The result is a set of mutually perpendicular unit vectors with the same span as the input."
    },
    obj2: {
      question: "Why do you project onto the new vectors u and not the original vectors v?",
      answer: "The remainder after subtracting projections is perpendicular to the vectors projected onto. Projecting onto the original v vectors, which are not perpendicular to each other, would leave a remainder that is not perpendicular to them. The u vectors are already mutually perpendicular, so subtracting the projection onto one of them does not disturb the component along another, and the remainder ends up perpendicular to all of them."
    },
    obj3: {
      question: "What happens if the input vectors are linearly dependent?",
      answer: "If some vector lies in the span of the vectors before it, subtracting its projections onto them leaves the zero vector, which has no direction and cannot be normalized. The usual fix is to drop that vector and continue with the next one. The process therefore doubles as an independence test: a zero remainder signals a dependent input."
    },
    obj4: {
      question: "How is Gram-Schmidt related to the QR decomposition?",
      answer: "Put the input vectors as the columns of a matrix A. Running Gram-Schmidt on them gives orthonormal vectors that form the columns of Q, and the coefficients of the process, the projection coefficients scaled by the lengths, fill an upper triangular matrix R such that A = QR. The decomposition is the process written in matrix form, and it is the basis of least squares solvers and the QR eigenvalue algorithm."
    },
    obj5: {
      question: "Does the order of the vectors matter in Gram-Schmidt?",
      answer: "Yes. The first vector is kept unchanged and every later vector is adjusted relative to the ones before it, so reordering the inputs produces a different orthonormal basis. The span of the output is the same in every order, but the individual basis vectors are not. The process also guarantees that the first m output vectors span the same space as the first m inputs, for every m."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Gram-Schmidt Process Visualizer",
      "description": "Step-by-step visualizer for the Gram-Schmidt process on two or three vectors. Keep the first vector, subtract projections onto the vectors already orthogonalized, then normalize to an orthonormal set.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/gram-schmidt",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two passes: orthogonalize by subtracting projections, then normalize",
        "Two or three input vectors of length 2 to 4, shown as the rows of one matrix",
        "One scene per projection subtracted, with the growing expression written in the cell",
        "Row highlights showing that projections are onto the already-orthogonal vectors",
        "Symbolic coefficients and lengths preserved through every step",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the process and the independence requirement"
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
      "keywords": "gram schmidt process, gram schmidt orthogonalization, gram schmidt visualizer, gram schmidt calculator, gram schmidt step by step, orthogonalization, orthonormal basis, orthogonal basis, how to do gram schmidt, gram schmidt example, qr decomposition, projection subtraction, orthonormalization, linear algebra visualizer, interactive vector tool"
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
          "name": "Gram-Schmidt Process",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/gram-schmidt"
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
      relatedTools: getRelatedTools('linear-algebra-gram-schmidt'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Gram-Schmidt Process Visualizer | Orthogonalize Step by Step",
        description: "Visualize the Gram-Schmidt process step by step on two or three vectors: keep the first, subtract projections onto the vectors already orthogonalized, then normalize to an orthonormal set.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/gram-schmidt",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="16" y1="60" x2="66" y2="60" stroke="#85B7EB" stroke-width="2.6"/><path d="M 70 60 L 62 56 L 62 64 Z" fill="#85B7EB"/><line x1="16" y1="60" x2="52" y2="30" stroke="#97C459" stroke-width="2.2" stroke-dasharray="3,2"/><path d="M 55 27.5 L 47 29 L 51 35 Z" fill="#97C459"/><line x1="52" y1="30" x2="52" y2="60" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2,2"/><line x1="16" y1="60" x2="16" y2="24" stroke="#FAC775" stroke-width="3"/><path d="M 16 19 L 11 28 L 21 28 Z" fill="#FAC775"/><path d="M 16 54 L 22 54 L 22 60" fill="none" stroke="#B5D4F4" stroke-width="1"/><circle cx="16" cy="60" r="2" fill="#E6F1FB"/><text x="64" y="70" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">u&#8321;</text><text x="60" y="26" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">v&#8322;</text><text x="24" y="22" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">u&#8322;</text></svg>`,
        name: "Gram-Schmidt Process Visualizer",
        hubDescription: "Watch the Gram-Schmidt process run on two or three vectors, shown as the rows of one matrix: the first is kept, each later one loses its projections onto the vectors already made orthogonal, one subtraction per scene with the growing expression written in the cell, and a final pass divides each result by its length. The page explains why the projections go onto the new vectors rather than the originals, why order matters, and how the discarded coefficients become the R of a QR decomposition.",
        category: 'Vectors',
        subCategory: 'Orthogonality'
      }
    }
  }
}

export default function GramSchmidtVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-phases'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'keeping-the-first-vector', 'keep'),
    stateRow('obj13', 'subtracting-the-projections', 'subtract'),
    stateRow('obj14', 'normalizing', 'normalize'),
    stateRow('obj15', 'the-completed-orthonormal-set', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-the-size'),
    plain('obj5', 'what-the-gram-schmidt-process-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Gram-Schmidt Process</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <GramSchmidtWrapper
   defaultK={3}
   defaultN={3}
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
