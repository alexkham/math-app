import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import QRWrapper from '../../../../app/components/linear-algebra copy/matrix/QRWrapper'
import qrDiagrams from '../../../../app/components/linear-algebra copy/matrix/qrDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'qr decomposition',
    'qr factorization',
    'qr decomposition visualizer',
    'qr decomposition calculator',
    'qr decomposition step by step',
    'gram schmidt qr',
    'orthonormal columns',
    'upper triangular matrix',
    'A = QR',
    'how to compute qr decomposition',
    'qr decomposition example',
    'least squares qr',
    'matrix factorization',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**QR decomposition** — the factorization $A = QR$ of a matrix with linearly independent columns, where $Q$ has orthonormal columns and $R$ is upper triangular.

**Orthonormal columns** — $\\mathbf{q}_i \\cdot \\mathbf{q}_j = 0$ for $i \\neq j$ and $\\mathbf{q}_i \\cdot \\mathbf{q}_i = 1$; equivalently $Q^T Q = I$.

**Upper triangular** — all entries below the main diagonal are zero: $r_{j,k} = 0$ for $j > k$.

**Gram-Schmidt process** — the procedure that builds $Q$ column by column, and whose coefficients and lengths are the entries of $R$.

**Working column** — $\\mathbf{u}_k = \\mathbf{a}_k - \\sum_{j<k} r_{j,k} \\mathbf{q}_j$, column $k$ of $A$ with its projections onto the finished columns removed.

**Diagonal of $R$** — $r_{k,k} = \\|\\mathbf{u}_k\\|$, the length of each working column before normalization.

**Above the diagonal** — $r_{j,k} = \\mathbf{q}_j \\cdot \\mathbf{a}_k$, the coefficient of $\\mathbf{q}_j$ in column $k$ of $A$.

**Reduced versus full** — this tool shows the reduced form, with $Q$ the same shape as $A$; the full form pads $Q$ to a square orthogonal matrix and $R$ with zero rows.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shape of $A$, then watch $Q$ and $R$ fill in together.

• Use the **Shape** steppers for $2$ to $4$ rows and $2$ or $3$ columns; $Q$ takes the shape of $A$ and $R$ is square with one row per column
• Hover the **?** icon for a reminder of what the factorization is and where least squares and eigenvalue algorithms use it
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• The layout reads $A = Q \\cdot R$ throughout: $A$ on the left stays fixed, $Q$ fills column by column, and $R$ fills entry by entry as each coefficient and length is produced
• Everything is symbolic: the coefficients are named $r_{j,k}$ and the working columns $\\mathbf{u}_k$, so the cells show the structure of the formula rather than numbers

Choosing more columns than rows is allowed and instructive: the columns then cannot be independent, and the caption points out that a working column would reduce to zero.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Phases`,
      content: `The visualizer processes the columns of $A$ from left to right, and each column goes through the same short cycle.

• **Start** — column $k$ of $A$ is copied into column $k$ of $Q$ as the working column $\\mathbf{u}_k$
• **Coefficient** — for each finished column $\\mathbf{q}_j$ with $j < k$, the dot product $r_{j,k} = \\mathbf{q}_j \\cdot \\mathbf{a}_k$ is written into $R$ above the diagonal
• **Subtract** — $r_{j,k} \\mathbf{q}_j$ is subtracted from the working column, and its cells grow a term
• **Normalize** — the length $r_{k,k} = \\|\\mathbf{u}_k\\|$ goes onto the diagonal of $R$, and the working column divided by it becomes $\\mathbf{q}_k$
• **Done** — $A = QR$

The first column skips the coefficient and subtract steps, since there is nothing yet to be perpendicular to. The zeros below the diagonal of $R$ are drawn from the first scene, because column $k$ of $A$ only ever involves $\\mathbf{q}_1$ through $\\mathbf{q}_k$; nothing later can appear.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines column and cell highlights, arrows, and a caption.

• In a **start** scene, the source column of $A$ is primary and the destination column of $Q$ is accent
• In a **coefficient** scene, the finished column $\\mathbf{q}_j$ is secondary, the column $\\mathbf{a}_k$ is primary, and the destination entry of $R$ is accent, with arrows from both columns into it
• In a **subtract** scene, $\\mathbf{q}_j$ is secondary, the working column is accent, and the coefficient just recorded is primary, with an arrow from $R$ back into $Q$
• In a **normalize** scene, the column of $Q$ and the diagonal entry of $R$ are both accent
• Cells of $Q$ show the growing expression $a_{i,k} - r_{1,k} q_{i,1} - \\cdots$ while a column is being built, then $u_{i,k} / r_{k,k}$ once it is normalized; cells of $R$ show $\\mathbf{q}_j \\cdot \\mathbf{a}_k$ above the diagonal and $\\|\\mathbf{u}_k\\|$ on it
• The step log on the right keeps a record of every completed step`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing the Shape`,
      content: `Two and three columns cover the whole pattern; the row count only changes how tall the columns are.

• With $2$ columns, $R$ is $2 \\times 2$ with one coefficient above the diagonal: $\\mathbf{a}_2 = r_{1,2} \\mathbf{q}_1 + r_{2,2} \\mathbf{q}_2$
• With $3$ columns, $R$ is $3 \\times 3$ with three coefficients, and the third column shows the essential point: it is projected onto $\\mathbf{q}_1$ and $\\mathbf{q}_2$, the finished unit columns, never onto the original $\\mathbf{a}_2$
• A tall $A$ ($4 \\times 2$ or $4 \\times 3$) is the least-squares shape: more equations than unknowns, and $Q$ is tall with $R$ small
• A square $A$ gives a square $Q$, which is then an orthogonal matrix with $Q^{-1} = Q^T$

Beyond three columns the cycle simply repeats with more coefficients per column; the tool stops there because the working-column expressions are already three terms long.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the QR Decomposition Is`,
      content: `For an $n \\times k$ matrix $A$ with linearly independent columns $\\mathbf{a}_1, \\ldots, \\mathbf{a}_k$, the QR decomposition is

$$A = QR, \\qquad Q = \\begin{pmatrix} \\mathbf{q}_1 & \\cdots & \\mathbf{q}_k \\end{pmatrix}, \\quad Q^T Q = I, \\quad R \\text{ upper triangular}$$

It is the Gram-Schmidt process with the bookkeeping kept. Gram-Schmidt produces orthonormal $\\mathbf{q}_1, \\ldots, \\mathbf{q}_k$ with the property that each $\\mathbf{a}_k$ is a combination of $\\mathbf{q}_1, \\ldots, \\mathbf{q}_k$ only:

$$\\mathbf{a}_k = r_{1,k} \\mathbf{q}_1 + r_{2,k} \\mathbf{q}_2 + \\cdots + r_{k,k} \\mathbf{q}_k$$

Collect those coefficients as column $k$ of a matrix $R$, and the $k$ equations together say exactly $A = QR$. Because $\\mathbf{a}_k$ never involves $\\mathbf{q}_j$ for $j > k$, column $k$ of $R$ has zeros below row $k$: $R$ is upper triangular.

The entries have direct meaning. Above the diagonal, $r_{j,k} = \\mathbf{q}_j \\cdot \\mathbf{a}_k$ is the projection coefficient, with no division because $\\mathbf{q}_j$ is a unit vector. On the diagonal, $r_{k,k} = \\|\\mathbf{u}_k\\|$ is the length of the working column, the part of $\\mathbf{a}_k$ that was genuinely new. And since $Q^T Q = I$, the whole of $R$ can be recovered at once as $R = Q^T A$.

For the full treatment, including the full versus reduced forms and Householder reflections as an alternative construction, see the [QR decomposition theory page](!/linear-algebra/decompositions/qr).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The factorization carries the properties of its two factors.

• **Existence**: every matrix with linearly independent columns has a QR decomposition
• **Uniqueness**: with the diagonal of $R$ required to be positive, $Q$ and $R$ are unique
• **Orthonormality**: $Q^T Q = I$, so $R = Q^T A$
• **Nested spans**: the first $m$ columns of $Q$ span the same space as the first $m$ columns of $A$, for every $m$
• **Determinant** (square case): $|\\det A| = |\\det R| = r_{1,1} r_{2,2} \\cdots r_{k,k}$, since $|\\det Q| = 1$
• **Column space**: the columns of $Q$ are an orthonormal basis of the column space of $A$
• **Diagonal as independence test**: $r_{k,k} = 0$ exactly when $\\mathbf{a}_k$ is a combination of the earlier columns
• **Order matters**: permuting the columns of $A$ changes both $Q$ and $R$
• **Numerical note**: the classical Gram-Schmidt shown here loses orthogonality in floating point; production code uses modified Gram-Schmidt or Householder reflections, which produce the same $Q$ and $R$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `QR is the factorization behind most of numerical linear algebra's daily work.

• **Least squares**: with $A = QR$, the normal equations $A^T A \\mathbf{x} = A^T \\mathbf{b}$ collapse to $R\\mathbf{x} = Q^T \\mathbf{b}$, a triangular system solved by back substitution, without ever forming the ill-conditioned $A^T A$
• **Eigenvalues**: the QR algorithm factors $A = QR$, forms $RQ$, and repeats; the iterates converge to a triangular matrix with the eigenvalues on the diagonal
• **Orthonormal bases**: $Q$ is an orthonormal basis of the column space of $A$, ready for projections and coordinates
• **Solving square systems**: $A\\mathbf{x} = \\mathbf{b}$ becomes $R\\mathbf{x} = Q^T\\mathbf{b}$, as stable as any direct method
• **Rank and independence**: a tiny diagonal entry of $R$ flags a nearly dependent column
• **Determinants**: the product of the diagonal of $R$ gives $|\\det A|$ for square $A$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the $3 \\times 3$ matrix whose columns are

$$\\mathbf{a}_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\mathbf{a}_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\quad \\mathbf{a}_3 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$$

**Column 1**: $\\mathbf{u}_1 = \\mathbf{a}_1$, $r_{1,1} = \\|\\mathbf{u}_1\\| = \\sqrt{2}$, $\\mathbf{q}_1 = \\tfrac{1}{\\sqrt{2}}(1, 1, 0)$.

**Column 2**: $r_{1,2} = \\mathbf{q}_1 \\cdot \\mathbf{a}_2 = \\tfrac{1}{\\sqrt{2}}$, so $\\mathbf{u}_2 = \\mathbf{a}_2 - \\tfrac{1}{\\sqrt{2}}\\mathbf{q}_1 = \\left(\\tfrac{1}{2}, -\\tfrac{1}{2}, 1\\right)$, $r_{2,2} = \\sqrt{3/2}$, $\\mathbf{q}_2 = \\tfrac{1}{\\sqrt{6}}(1, -1, 2)$.

**Column 3**: $r_{1,3} = \\mathbf{q}_1 \\cdot \\mathbf{a}_3 = \\tfrac{1}{\\sqrt{2}}$ and $r_{2,3} = \\mathbf{q}_2 \\cdot \\mathbf{a}_3 = \\tfrac{1}{\\sqrt{6}}$, so $\\mathbf{u}_3 = \\mathbf{a}_3 - \\tfrac{1}{\\sqrt{2}}\\mathbf{q}_1 - \\tfrac{1}{\\sqrt{6}}\\mathbf{q}_2 = \\left(-\\tfrac{2}{3}, \\tfrac{2}{3}, \\tfrac{2}{3}\\right)$, $r_{3,3} = \\tfrac{2}{\\sqrt{3}}$, $\\mathbf{q}_3 = \\tfrac{1}{\\sqrt{3}}(-1, 1, 1)$.

So

$$Q = \\begin{pmatrix} \\tfrac{1}{\\sqrt{2}} & \\tfrac{1}{\\sqrt{6}} & -\\tfrac{1}{\\sqrt{3}} \\\\ \\tfrac{1}{\\sqrt{2}} & -\\tfrac{1}{\\sqrt{6}} & \\tfrac{1}{\\sqrt{3}} \\\\ 0 & \\tfrac{2}{\\sqrt{6}} & \\tfrac{1}{\\sqrt{3}} \\end{pmatrix}, \\qquad R = \\begin{pmatrix} \\sqrt{2} & \\tfrac{1}{\\sqrt{2}} & \\tfrac{1}{\\sqrt{2}} \\\\ 0 & \\sqrt{3/2} & \\tfrac{1}{\\sqrt{6}} \\\\ 0 & 0 & \\tfrac{2}{\\sqrt{3}} \\end{pmatrix}$$

Check column 2 of $QR$: $\\tfrac{1}{\\sqrt{2}}\\mathbf{q}_1 + \\sqrt{3/2}\\,\\mathbf{q}_2 = \\left(\\tfrac{1}{2}, \\tfrac{1}{2}, 0\\right) + \\left(\\tfrac{1}{2}, -\\tfrac{1}{2}, 1\\right) = (1, 0, 1) = \\mathbf{a}_2$. The product of the diagonal of $R$ is $\\sqrt{2} \\cdot \\sqrt{3/2} \\cdot \\tfrac{2}{\\sqrt{3}} = 2$, and $\\det A = 2$. Set the visualizer to $3 \\times 3$ and step through to see the same fourteen scenes assembled symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Projecting onto the original columns** — the coefficients are $\\mathbf{q}_j \\cdot \\mathbf{a}_k$ with the finished unit columns $\\mathbf{q}_j$, never $\\mathbf{a}_j \\cdot \\mathbf{a}_k$
• **Dividing the coefficient** — because $\\mathbf{q}_j$ is a unit vector, $r_{j,k}$ is a plain dot product; dividing by $\\mathbf{q}_j \\cdot \\mathbf{q}_j = 1$ is harmless but dividing by $\\|\\mathbf{a}_j\\|$ is wrong
• **Putting coefficients in the wrong slot** — $r_{j,k}$ sits in row $j$, column $k$: the row is the $\\mathbf{q}$ being projected onto, the column is the $\\mathbf{a}$ being decomposed
• **Forgetting the diagonal** — $r_{k,k}$ is the length of the working column before normalization, not $1$ and not the length of $\\mathbf{a}_k$
• **Feeding in dependent columns** — a dependent $\\mathbf{a}_k$ gives $\\mathbf{u}_k = \\mathbf{0}$ and $r_{k,k} = 0$; the reduced factorization does not exist, and column pivoting is needed
• **Skipping the check** — $Q^T Q$ should be the identity and $QR$ should reproduce $A$; both are quick to verify and catch most slips`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Gram-Schmidt process](!/linear-algebra/visual-tools/gram-schmidt) — the same computation without the matrix bookkeeping.

[Vector projection](!/linear-algebra/visual-tools/vector-projection) — each coefficient is a projection coefficient onto a unit vector.

[Orthogonal matrices](!/linear-algebra/visual-tools/orthogonal-matrices) — a square $Q$ is one, with $Q^{-1} = Q^T$.

[Least squares](!/linear-algebra/visual-tools/least-squares) — the main application: $R\\mathbf{x} = Q^T\\mathbf{b}$.

[LU decomposition](!/linear-algebra/visual-tools/lu-decomposition) — the other elimination-based factorization, with a triangular $L$ instead of an orthonormal $Q$.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — $|\\det A|$ is the product of the diagonal of $R$.

**Householder reflections** — the numerically preferred way to compute the same $Q$ and $R$.

**QR algorithm** — repeated QR factorization as an eigenvalue method.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: A Equals Q Times R`,
      content: `The player opens with $A$ on the left, an empty $Q$ of the same shape in the middle, and $R$ on the right showing only its zeros below the diagonal. At the default size everything is $3 \\times 3$.

Nothing is computed yet. What the scene establishes is the shape of the answer: $Q$ as wide as $A$, $R$ square, and $R$ upper triangular before a single entry is known.`,
      before: ``,
      after: `The zeros can be drawn in advance because of how the columns will be built: column $k$ of $A$ is decomposed against $\\mathbf{q}_1$ through $\\mathbf{q}_k$ only, so column $k$ of $R$ has nothing below row $k$. The triangular shape is not a coincidence of the numbers; it is the order of the process.

The one precondition is that the columns of $A$ be independent. The tool does not check it, because its inputs are symbolic, but the caption notes when the chosen shape makes independence impossible.`,
      link: '',
    },
    obj12: {
      title: `Recording a Coefficient`,
      content: `Before a projection is subtracted, its coefficient is recorded: $r_{j,k} = \\mathbf{q}_j \\cdot \\mathbf{a}_k$, the dot product of a finished unit column with the original column being decomposed, written into $R$ above the diagonal.

The frozen picture below is the last coefficient at the default size, $r_{2,3} = \\mathbf{q}_2 \\cdot \\mathbf{a}_3$, with the first two columns of $Q$ complete.`,
      before: ``,
      after: `Two details are worth noticing. The dot product is with $\\mathbf{a}_k$, the original column, not with the partly reduced working column; in exact arithmetic both give the same number, since the parts already removed are perpendicular to $\\mathbf{q}_j$, but the original is the definition. And there is no division, because $\\mathbf{q}_j$ has length one.

Reading $R$ column by column afterwards gives the recipe for each column of $A$ in terms of the columns of $Q$, which is the content of $A = QR$.`,
      link: '',
    },
    obj13: {
      title: `Subtracting the Projections`,
      content: `Each recorded coefficient is immediately used: $r_{j,k} \\mathbf{q}_j$ is subtracted from the working column, entry by entry, and the cells of column $k$ of $Q$ grow one term.

The frozen picture below is the last subtraction at the default size: column $3$ of $Q$ reads $a_{i,3} - r_{1,3} q_{i,1} - r_{2,3} q_{i,2}$, perpendicular to both finished columns.`,
      before: ``,
      after: `This is the Gram-Schmidt step, with the coefficient taken from $R$ rather than recomputed. What remains after all the subtractions is the part of $\\mathbf{a}_k$ that lies outside the span of the earlier columns, the genuinely new direction.

If that remainder were zero, $\\mathbf{a}_k$ would have been a combination of the earlier columns, and the factorization would stall: there would be no direction to normalize and $r_{k,k}$ would be $0$. The diagonal of $R$ is therefore a running independence test.`,
      link: '',
    },
    obj14: {
      title: `Normalizing into Q and the Diagonal of R`,
      content: `Once a working column is perpendicular to everything before it, its length goes on the diagonal of $R$ and the column divided by that length becomes the next column of $Q$: $r_{k,k} = \\|\\mathbf{u}_k\\|$ and $\\mathbf{q}_k = \\mathbf{u}_k / r_{k,k}$.

The frozen picture below is the last normalization at the default size: $r_{3,3}$ filled and column $3$ of $Q$ reading $u_{i,3} / r_{3,3}$.`,
      before: ``,
      after: `The two halves of this step are what make the factorization exact rather than approximate. Dividing by the length is what puts a unit vector into $Q$; storing the length in $R$ is what lets $QR$ reproduce $A$, because $r_{k,k} \\mathbf{q}_k = \\mathbf{u}_k$ restores the working column and the coefficients above restore the parts subtracted from it.

Read down column $k$ of $R$ and the original column reassembles: $\\mathbf{a}_k = r_{1,k}\\mathbf{q}_1 + \\cdots + r_{k,k}\\mathbf{q}_k$. The diagonal entry is the length of the new direction, and for a square $A$ the product of the diagonal is $|\\det A|$.`,
      link: '',
    },
    obj15: {
      title: `The Completed Factorization`,
      content: `The final scene shows $Q$ full of unit columns and $R$ full above the diagonal: $A = QR$.

The frozen picture below is the default run complete, with every column of $Q$ and every recorded entry of $R$ highlighted.`,
      before: ``,
      after: `From here the two factors do different jobs. $Q$ is an orthonormal basis of the column space of $A$, so projecting onto that space is $QQ^T$ and coordinates in it are $Q^T$ times the vector. $R$ is triangular, so systems involving it are solved by back substitution.

Put together they give the least-squares recipe: $A\\mathbf{x} \\approx \\mathbf{b}$ becomes $R\\mathbf{x} = Q^T\\mathbf{b}$, one orthogonal projection and one triangular solve, with none of the loss of precision that forming $A^T A$ would bring. That single application is the reason QR is computed thousands of times a second inside statistical and scientific software.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from QRWrapper's own buildScenes (exported additively) at 3×3 and
     rendered through frozenMatrixSvgFixed. Stills are found by phase; arrows
     are not reproduced, the column and cell highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: qrDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A on the left, an empty Q of the same shape, and R showing only its zeros below the diagonal. ' +
      'The triangular shape is known before any arithmetic: column k of A only ever involves q<sub>1</sub>…q<sub>k</sub>.'),
    coef: unit('coef', 'Last coefficient, frozen',
      'r<sub>2,3</sub> = q<sub>2</sub>&middot;a<sub>3</sub> being written into R above the diagonal, with the first two columns of Q ' +
      'complete. A dot product with a unit column, so no division.'),
    subtract: unit('subtract', 'Last subtraction, frozen',
      'Column 3 of Q reading a<sub>i,3</sub> &minus; r<sub>1,3</sub>q<sub>i,1</sub> &minus; r<sub>2,3</sub>q<sub>i,2</sub>: ' +
      'the original column with both projections removed, perpendicular to q<sub>1</sub> and q<sub>2</sub>.'),
    norm: unit('norm', 'Last normalization, frozen',
      'r<sub>3,3</sub> = &#8214;u<sub>3</sub>&#8214; on the diagonal of R and column 3 of Q reading u<sub>i,3</sub> / r<sub>3,3</sub>. ' +
      'Length into R, unit vector into Q - the pair that makes QR reproduce A exactly.'),
    done: unit('done', 'Completed factorization, frozen',
      'Q with three orthonormal columns, R upper triangular with every recorded entry in place: A = QR. ' +
      'Read down any column of R for the recipe that rebuilds that column of A.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     QRWrapper accepts an explanations prop keyed by scene phase:
     intro, start, coef, subtract, norm, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-qr-decomposition-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Gram-Schmidt on the columns, with the bookkeeping kept in R.', 'the-opening-scene', 'Learn more about the opening scene'),
    start: note('A copy of a<sub>k</sub>, to be made perpendicular to the finished columns.', 'subtracting-the-projections', 'Learn more about the subtractions'),
    coef: note('A dot product with a unit column - no division - stored above the diagonal.', 'recording-a-coefficient', 'Learn more about the coefficients'),
    subtract: note('Remove the projection; what is left is the new direction in a<sub>k</sub>.', 'subtracting-the-projections', 'Learn more about the subtractions'),
    norm: note('Length onto the diagonal of R, unit vector into Q.', 'normalizing-into-q-and-the-diagonal-of-r', 'Learn more about normalizing'),
    done: note('A = QR: orthonormal basis on the left, triangular recipe on the right; least squares is R x = Q<sup>T</sup> b.', 'the-completed-factorization', 'Learn more about the completed factorization'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the QR decomposition?",
      answer: "The QR decomposition writes a matrix A with linearly independent columns as the product A = QR, where Q has orthonormal columns and R is upper triangular. It is the Gram-Schmidt process applied to the columns of A, with the projection coefficients and lengths collected into R and the normalized columns collected into Q."
    },
    obj2: {
      question: "How is QR related to Gram-Schmidt?",
      answer: "They are the same computation. Gram-Schmidt turns the columns of A into orthonormal vectors q₁, …, qₖ, and along the way it produces, for each column, the coefficients of the projections it subtracts and the length of what remains. Put the q's as the columns of Q and the coefficients and lengths as the entries of R, and the k relations a_k = r₁ₖ q₁ + … + rₖₖ qₖ say exactly A = QR."
    },
    obj3: {
      question: "Why is R upper triangular?",
      answer: "Column k of A is decomposed using only q₁ through qₖ, the columns finished so far, so column k of R has entries in rows 1 through k and zeros below. This holds for every column, which makes R upper triangular. The diagonal entry rₖₖ is the length of the part of a_k that was new, and the entries above it are the projection coefficients onto the earlier columns."
    },
    obj4: {
      question: "What is QR used for?",
      answer: "Its main use is least squares: with A = QR, the problem A x ≈ b reduces to the triangular system R x = Qᵀ b, solved by back substitution without forming the ill-conditioned matrix AᵀA. It is also the engine of the QR algorithm for eigenvalues, provides an orthonormal basis of the column space, and gives |det A| as the product of the diagonal of R for square A."
    },
    obj5: {
      question: "Is the QR decomposition unique?",
      answer: "For a matrix with independent columns, the reduced QR decomposition is unique once the diagonal entries of R are required to be positive, which is what Gram-Schmidt produces. Allowing negative diagonal entries changes the sign of the corresponding column of Q and row of R, and the full form, where Q is padded to a square orthogonal matrix, has additional freedom in the extra columns."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "QR Decomposition Visualizer",
      "description": "Step-by-step visualizer for the QR decomposition A = QR by Gram-Schmidt on the columns. Watch Q fill column by column and R fill entry by entry, with every coefficient and length written symbolically.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/qr-decomposition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Layout A = Q · R throughout, with Q and R filling as the process runs",
        "Shapes from 2×2 up to 4×3, with the zeros of R drawn from the first scene",
        "One scene per coefficient, subtraction and normalization",
        "Working columns shown as growing expressions inside Q",
        "Column and cell highlights with arrows from source to destination",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the factorization and its uses"
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
      "keywords": "qr decomposition, qr factorization, qr decomposition visualizer, qr decomposition calculator, qr decomposition step by step, gram schmidt qr, orthonormal columns, upper triangular matrix, A = QR, how to compute qr decomposition, qr decomposition example, least squares qr, matrix factorization, linear algebra visualizer, interactive matrix tool"
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
          "name": "QR Decomposition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/qr-decomposition"
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
      relatedTools: getRelatedTools('linear-algebra-qr-decomposition'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "QR Decomposition Visualizer | A = QR Step by Step",
        description: "Visualize the QR decomposition step by step: Gram-Schmidt on the columns of A, with each coefficient written into R and each unit column into Q, for shapes up to 4×3.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/qr-decomposition",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="6" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="29" y="41" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">=</text><rect x="34" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="34" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="56" y="28" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="65" y="28" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="56" y="37" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="65" y="37" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="60.5" y="44" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">0</text><text x="15" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="43" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">Q</text><text x="65" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">R</text><text x="40" y="72" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">orthonormal &#183; triangular</text></svg>`,
        name: "QR Decomposition Visualizer",
        hubDescription: "Watch A = QR assemble in place: Gram-Schmidt runs down the columns of A, each projection coefficient is written into R above the diagonal, each working column is shown as a growing expression inside Q, and each length goes onto the diagonal of R as the column is normalized. The zeros of R are drawn from the first scene, because the triangular shape follows from the order of the process. Shapes from 2×2 to 4×3, with the tall shapes that least squares uses.",
        category: 'Matrices',
        subCategory: 'Decompositions'
      }
    }
  }
}

export default function QRVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    stateRow('obj12', 'recording-a-coefficient', 'coef'),
    stateRow('obj13', 'subtracting-the-projections', 'subtract'),
    stateRow('obj14', 'normalizing-into-q-and-the-diagonal-of-r', 'norm'),
    stateRow('obj15', 'the-completed-factorization', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-the-shape'),
    plain('obj5', 'what-the-qr-decomposition-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>QR Decomposition</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <QRWrapper
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
