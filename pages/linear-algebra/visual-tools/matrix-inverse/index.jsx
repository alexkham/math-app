import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import InverseWrapper from '../../../../app/components/linear-algebra copy/matrix/InverseWrapper'
import inverseDiagrams from '../../../../app/components/linear-algebra copy/matrix/inverseDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix inverse',
    'inverse of a matrix',
    'inverse matrix calculator',
    'matrix inverse visualizer',
    'adjugate matrix',
    'adjoint matrix',
    'cofactor matrix',
    'inverse by cofactors',
    'how to find the inverse of a matrix',
    '2x2 matrix inverse',
    '3x3 matrix inverse',
    'inverse matrix step by step',
    'determinant and inverse',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Inverse** — the [matrix](!/linear-algebra/matrix#1) $A^{-1}$ with $A A^{-1} = A^{-1} A = I$. It exists exactly when $\\det A \\neq 0$, and then it is unique.

**Minor** — $M_{i,j}$, the [determinant](!/linear-algebra/determinants#1) of the submatrix left after striking row $i$ and column $j$ of $A$.

**Cofactor** — $C_{i,j} = (-1)^{i+j} M_{i,j}$, the minor with the checkerboard sign attached.

**Cofactor matrix** — the matrix $C$ whose $(i,j)$ entry is $C_{i,j}$.

**Adjugate** — $\\operatorname{adj} A = C^T$, the transpose of the cofactor matrix; also called the classical adjoint.

**Adjugate formula** — $A^{-1} = \\dfrac{\\operatorname{adj} A}{\\det A}$.

**Singular matrix** — a [square matrix](!/linear-algebra/matrix/types#1) with $\\det A = 0$; it has no inverse.

**Row reduction** — the other standard route: reduce $[A \\mid I]$ to $[I \\mid A^{-1}]$ by row operations. It scales to any size; the adjugate formula shows the structure.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the size of $A$, then watch $A^{-1}$ build in four phases.

• Use the **Size** stepper to choose $2 \\times 2$ or $3 \\times 3$; the cofactors are written out in full, which is why larger sizes are not offered
• Hover the **?** icon for a reminder of what the inverse is and how the adjugate formula relates to row reduction
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• The run computes every cofactor, transposes them into the adjugate, expands the determinant along the first row, and divides — the same four moves at either size
• Everything is symbolic: the entries of $A$ stay as $a_{i,j}$, so what you see is the formula, not a numerical example`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Four Phases`,
      content: `The visualizer separates the adjugate formula into four phases.

• **Phase 1 — cofactors**: one scene per entry in row-major order. Row $i$ and column $j$ of $A$ are struck, the minor $M_{i,j}$ is read from what remains, and the cofactor $C_{i,j} = (-1)^{i+j} M_{i,j}$ is written into the cofactor matrix
• **Phase 2 — transpose**: the cofactor matrix is transposed in one scene, producing $\\operatorname{adj} A$
• **Phase 3 — determinant**: $\\det A = a_{1,1} C_{1,1} + a_{1,2} C_{1,2} + \\cdots$, the expansion along the first row using the cofactors already in hand, in one scene
• **Phase 4 — divide**: one scene per entry; $(A^{-1})_{i,j} = (\\operatorname{adj} A)_{i,j} / \\det A$

At $3 \\times 3$ that is $9 + 1 + 1 + 9$ steps plus the intro and outro; at $2 \\times 2$, $4 + 1 + 1 + 4$. Phase 3 is where the construction can fail: if $\\det A = 0$ there is nothing to divide by and $A$ has no inverse.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In phase 1, the [pivot](!/linear-algebra/linear-systems/echelon-form#4) entry $a_{i,j}$ is highlighted primary, the rest of its row and column are greyed and lined through, the surviving block is secondary, and the destination cofactor is accent; one arrow runs from the pivot to its cofactor
• In phase 2, every cofactor is secondary and every entry of the adjugate accent, with the caption describing the mirror swap
• In phase 3, the first row of $A$ is primary, the first row of the cofactor matrix secondary, and the $\\det A$ slot accent
• In phase 4, the active adjugate entry is primary, the $\\det A$ slot secondary, and the destination entry of $A^{-1}$ accent, with arrows from both
• Cofactor cells show the full signed minor, for example $a_{2,2} a_{3,3} - a_{2,3} a_{3,2}$; at $3 \\times 3$ the entries of $A^{-1}$ are written as $C_{j,i} / |A|$ to stay readable, and at $2 \\times 2$ they are written out
• The step log on the right keeps a record of every completed step across all phases`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing the Size`,
      content: `The stepper offers $2 \\times 2$ and $3 \\times 3$, and the limit is deliberate.

• At $2 \\times 2$ every minor is a single entry, so the whole formula is visible at once: swap the diagonal, negate the off-diagonal, divide by $a_{1,1} a_{2,2} - a_{1,2} a_{2,1}$
• At $3 \\times 3$ every minor is a $2 \\times 2$ determinant, and the nine cofactors are the real work; this is the size at which the checkerboard of signs starts to matter
• At $4 \\times 4$ each cofactor would be a $3 \\times 3$ determinant with six terms, and sixteen of them; the expressions no longer fit in a cell, and the method itself becomes impractical by hand
• For larger matrices, row reduction of $[A \\mid I]$ is the method of choice; the [Gaussian elimination tool](!/linear-algebra/visual-tools/gauss-elimination) animates that process on numerical matrices`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Inverse Is`,
      content: `The inverse of a square matrix $A$ is the matrix $A^{-1}$ satisfying

$$A A^{-1} = A^{-1} A = I$$

It exists if and only if $\\det A \\neq 0$, and when it exists it is unique. For a $2 \\times 2$ matrix the formula is short enough to memorize:

$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

The general version of that formula is the adjugate formula,

$$A^{-1} = \\frac{1}{\\det A}\\,\\operatorname{adj} A, \\qquad (\\operatorname{adj} A)_{i,j} = C_{j,i} = (-1)^{i+j} M_{j,i}$$

where $M_{j,i}$ is the minor obtained by deleting row $j$ and column $i$. The $2 \\times 2$ case is exactly this: the cofactor of $a$ is $d$, of $b$ is $-c$, of $c$ is $-b$, of $d$ is $a$, and transposing puts $-b$ and $-c$ where the formula shows them.

Why it works: the $(i,i)$ entry of $A \\cdot \\operatorname{adj} A$ is $\\sum_k a_{i,k} C_{i,k}$, the cofactor expansion of $\\det A$ along row $i$. The $(i,j)$ entry for $i \\neq j$ is $\\sum_k a_{i,k} C_{j,k}$, which is the expansion of a matrix whose rows $i$ and $j$ are equal, and that determinant is zero. So $A \\cdot \\operatorname{adj} A = (\\det A)\\,I$.

For the full treatment, including properties of inverses and the row reduction method, see the [matrix inverse theory page](!/linear-algebra/matrix/inverse); for minors and cofactors in depth, see the [cofactors theory page](!/linear-algebra/determinants/cofactors).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The inverse interacts cleanly with the other matrix operations, with one famous reversal.

• **Existence**: $A^{-1}$ exists exactly when $\\det A \\neq 0$, equivalently when the columns of $A$ are linearly independent, equivalently when $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution
• **Uniqueness**: a matrix has at most one inverse
• **Involution**: $(A^{-1})^{-1} = A$
• **Product (order reverses)**: $(AB)^{-1} = B^{-1} A^{-1}$
• **Transpose**: $(A^T)^{-1} = (A^{-1})^T$
• **Scalar**: $(kA)^{-1} = \\dfrac{1}{k} A^{-1}$ for $k \\neq 0$
• **Determinant**: $\\det(A^{-1}) = \\dfrac{1}{\\det A}$
• **Adjugate identity**: $A \\cdot \\operatorname{adj} A = \\operatorname{adj} A \\cdot A = (\\det A)\\,I$, which holds even when $\\det A = 0$
• **Solving systems**: if $A$ is invertible, $A\\mathbf{x} = \\mathbf{b}$ has the unique solution $\\mathbf{x} = A^{-1}\\mathbf{b}$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The inverse is the matrix that undoes a [linear transformation](!/linear-algebra/transformations#1), and that idea appears everywhere.

• **Solving linear systems**: $A\\mathbf{x} = \\mathbf{b}$ becomes $\\mathbf{x} = A^{-1}\\mathbf{b}$; in practice the system is solved directly, but the inverse is the concept behind it
• **Change of basis**: converting coordinates back requires the inverse of the change-of-[basis](!/linear-algebra/vector-spaces#2) matrix
• **Undoing transformations**: in graphics and robotics, the inverse of a rotation, scaling or shear returns an object to where it started
• **Diagonalization**: $A = P D P^{-1}$ needs $P^{-1}$ to move between the standard basis and the eigenbasis
• **Cramer's rule**: the adjugate formula, applied to $\\mathbf{x} = A^{-1}\\mathbf{b}$, gives each unknown as a ratio of determinants
• **Statistics and least squares**: the [normal equations](!/linear-algebra/orthogonality/least-squares#3) involve $(A^T A)^{-1}$, and covariance matrices are inverted to form precision matrices
• **Invertibility as a test**: whether $\\det A$ is zero decides whether a system has a unique solution, whether a transformation is reversible, and whether a set of [vectors](!/linear-algebra/vectors#1) is a basis`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `A $2 \\times 2$ case first:

$$A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}, \\quad \\det A = 2 \\cdot 3 - 1 \\cdot 5 = 1$$

Cofactors: $C_{1,1} = 3$, $C_{1,2} = -5$, $C_{2,1} = -1$, $C_{2,2} = 2$. Transpose to get the adjugate and divide by $1$:

$$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$

Now a $3 \\times 3$ case:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$$

Cofactors, row by row: $C_{1,1} = 0 - 24 = -24$, $C_{1,2} = -(0 - 20) = 20$, $C_{1,3} = 0 - 5 = -5$; $C_{2,1} = -(0 - 18) = 18$, $C_{2,2} = 0 - 15 = -15$, $C_{2,3} = -(6 - 10) = 4$; $C_{3,1} = 8 - 3 = 5$, $C_{3,2} = -(4 - 0) = -4$, $C_{3,3} = 1 - 0 = 1$.

Determinant along the first row: $\\det A = 1 \\cdot (-24) + 2 \\cdot 20 + 3 \\cdot (-5) = 1$.

Transpose the cofactor matrix and divide by $1$:

$$A^{-1} = \\begin{pmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{pmatrix}$$

Check the first row of $A A^{-1}$: $(1, 2, 3)$ against the columns gives $-24 + 40 - 15 = 1$, $18 - 30 + 12 = 0$, $5 - 8 + 3 = 0$. Set the visualizer to $3 \\times 3$ and step through to see the same nine cofactors, the transpose, and the division assembled symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Forgetting to transpose** — the adjugate is the transpose of the cofactor matrix; using $C$ itself gives a wrong answer whenever $A$ is not symmetric
• **Losing the checkerboard signs** — $C_{i,j}$ carries $(-1)^{i+j}$; at $3 \\times 3$ the four edge-centre cofactors are negated and the corners and centre are not
• **Dividing before checking the determinant** — if $\\det A = 0$ the adjugate still exists but the inverse does not; the adjugate identity gives $A \\cdot \\operatorname{adj} A = 0$
• **Mixing up the $2 \\times 2$ shortcut** — swap the diagonal entries, negate the off-diagonal ones, then divide; swapping the off-diagonal entries instead is the classic slip
• **Reversing the order in a product** — $(AB)^{-1} = B^{-1} A^{-1}$, not $A^{-1} B^{-1}$
• **Assuming every square matrix is invertible** — singular matrices are common, and any matrix with a zero row, two equal rows, or proportional columns is one
• **Expecting integer inverses** — the entries of $A^{-1}$ are cofactors divided by $\\det A$, so fractions are the rule unless $\\det A = \\pm 1$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the divisor in the formula and the test for existence.

**Cofactor expansion** — phases 1 and 3 are cofactor expansions; the same signed minors serve both.

[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — phase 2, turning the cofactor matrix into the adjugate.

[Matrix multiplication](!/visual-tools/matrix-multiplication) — the check $A A^{-1} = I$, and the reason the adjugate identity holds.

[Gaussian elimination](!/linear-algebra/visual-tools/gauss-elimination) — the row reduction route to the inverse, and the practical method beyond $3 \\times 3$.

[Cramer's rule](!/linear-algebra/visual-tools/cramers-rule) — the adjugate formula applied to solving $A\\mathbf{x} = \\mathbf{b}$.

[Rank](!/linear-algebra/visual-tools/matrix-rank) — a square matrix is invertible exactly when it has full rank.

[Identity matrix](!/linear-algebra/visual-tools/matrix-types) — the target: $A A^{-1} = I$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: A Matrix and an Empty Cofactor Grid`,
      content: `The player opens with $A$ on the left and an empty grid of the same shape on the right, waiting to hold the cofactors. At the default size $A$ is $3 \\times 3$.

Nothing is computed yet. What the scene establishes is the plan: the inverse will not be attacked directly, but assembled from nine smaller determinants, one per entry of $A$.`,
      before: ``,
      after: `The shape is worth a moment. The inverse of an $n \\times n$ matrix is $n \\times n$, and so are the cofactor matrix and the adjugate that lead to it. Nothing changes size along the way; only a single number, $\\det A$, is extracted.

Only square matrices have inverses. A rectangular $A$ cannot satisfy $A A^{-1} = A^{-1} A = I$, because the two products would have different shapes.`,
      link: '',
    },
    obj12: {
      title: `Phase 1: Cofactors, One Entry at a Time`,
      content: `The first sweep visits every entry of $A$ in row-major order. For each, the entry's own row and column are struck, the determinant of what remains is the minor, and the sign $(-1)^{i+j}$ turns the minor into the cofactor.

The frozen picture below is the centre entry at $3 \\times 3$: row $2$ and column $2$ struck, the four corner entries forming the minor, and $C_{2,2} = a_{1,1} a_{3,3} - a_{1,3} a_{3,1}$ being written with four cofactors already in place.`,
      before: ``,
      after: `The sign follows a checkerboard: $+$ at the corners and centre, $-$ at the four edge-centres. The tool folds the sign into the written cofactor, so a negated minor appears with its two terms swapped rather than with a leading minus; the caption states which happened.

This phase is nine $2 \\times 2$ determinants, and that is the whole cost of the method at this size. It is also why the method does not scale: at $4 \\times 4$ it would be sixteen $3 \\times 3$ determinants.`,
      link: '',
    },
    obj13: {
      title: `Phase 2: Transposing into the Adjugate`,
      content: `The second phase is a single scene: the cofactor matrix is transposed, so the cofactor of $a_{i,j}$ moves to row $j$, column $i$. The result is the adjugate.

The frozen picture below shows the cofactor matrix on the left and the adjugate on the right, every entry in its mirrored position.`,
      before: ``,
      after: `This is the step most often skipped, and skipping it is fatal unless $A$ happens to be symmetric. The reason for the transpose is in the product $A \\cdot \\operatorname{adj} A$: for the $(i,i)$ entry to be the cofactor expansion of $\\det A$ along row $i$, row $i$ of $A$ must meet column $i$ of the adjugate, and that column has to hold the cofactors of row $i$. Only the transpose puts them there.

The diagonal survives the transpose unchanged, which is why the $2 \\times 2$ shortcut swaps the diagonal entries of $A$ but negates the off-diagonal ones in place.`,
      link: '',
    },
    obj14: {
      title: `Phase 3: The Determinant from the First Row`,
      content: `The third phase is also a single scene. The determinant is expanded along the first row: each entry $a_{1,j}$ is multiplied by its cofactor $C_{1,j}$, already computed in phase 1, and the products are added.

The frozen picture below shows the first row of $A$ against the first row of the cofactor matrix, with the $\\det A$ slot filled.`,
      before: ``,
      after: `Reusing the cofactors is the efficiency of the method: the determinant costs one row of multiplications rather than a fresh calculation. Any row or column would do, since expanding along any of them gives the same number.

This is the decision point. If $\\det A = 0$ the run should stop: the adjugate still exists, but dividing by zero is impossible and $A$ has no inverse. Geometrically, a zero determinant means $A$ flattens space, and a flattening cannot be undone.`,
      link: '',
    },
    obj15: {
      title: `Phase 4: Dividing by the Determinant`,
      content: `The last sweep divides every entry of the adjugate by $\\det A$, one entry per scene, filling $A^{-1}$.

The frozen picture below is the centre entry at $3 \\times 3$: $C_{2,2} / |A|$ being written, with four entries of the inverse already in place.`,
      before: ``,
      after: `Every entry is divided by the same number, so the inverse is the adjugate rescaled. At $2 \\times 2$ the entries are short enough to write out; at $3 \\times 3$ the tool names them $C_{j,i} / |A|$ rather than expanding each cofactor a second time.

The completed matrix satisfies $A A^{-1} = I$. Row $i$ of $A$ against column $i$ of $A^{-1}$ is the expansion of $\\det A$ along row $i$, divided by $\\det A$, which is $1$. Row $i$ against column $j$ for $i \\neq j$ is the expansion of a determinant with two equal rows, which is $0$. The whole construction, and the single number that governs it, is on the screen at once.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from InverseWrapper's own buildScenes (exported additively) and
     rendered through frozenMatrixSvgFixed. Arrows are not reproduced; the
     highlights and struck entries carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: inverseDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A beside an empty grid of the same shape, waiting for its nine cofactors. The inverse is ' +
      'assembled from smaller determinants, one per entry, not attacked directly.'),
    cofactor: unit('cofactor', 'Phase 1, the centre cofactor',
      'Row 2 and column 2 struck through, the four corners forming the minor, and C<sub>2,2</sub> ' +
      'being written with four cofactors already in place. The sign is + here: the centre of the ' +
      'checkerboard.'),
    transpose: unit('transpose', 'Phase 2, the transpose',
      'Every cofactor moving to its mirrored position. The diagonal stays, the off-diagonal ' +
      'entries swap - this is the step that makes A &middot; adj A come out as a multiple of I.'),
    det: unit('det', 'Phase 3, the determinant',
      'The first row of A against the first row of the cofactor matrix, det A filled. One row ' +
      'of products, reusing work already done - and the number that decides whether an inverse exists.'),
    divide: unit('divide', 'Phase 4, mid-sweep',
      'The centre entry of A<sup>&minus;1</sup> being formed from the adjugate and det A, four entries ' +
      'already in place. One common divisor for every entry.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     InverseWrapper accepts an explanations prop keyed by phase:
     intro, cofactor, transpose, det, divide, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-inverse-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Nine small determinants, a transpose, one big determinant, a division.', 'the-opening-scene', 'Learn more about the opening scene'),
    cofactor: note('Strike a row and a column, take the minor, attach the checkerboard sign.', 'phase-1-cofactors', 'Learn more about phase 1'),
    transpose: note('The cofactor of a<sub>i,j</sub> must end up in column i, not row i - hence the transpose.', 'phase-2-transpose', 'Learn more about phase 2'),
    det: note('Reuse the first-row cofactors; if the result is zero, there is no inverse.', 'phase-3-determinant', 'Learn more about phase 3'),
    divide: note('One common divisor for every entry: the inverse is the adjugate rescaled.', 'phase-4-divide', 'Learn more about phase 4'),
    done: note('A &middot; A<sup>&minus;1</sup> = I: diagonal entries are det A / det A, off-diagonal ones are determinants with two equal rows.', 'phase-4-divide', 'Learn more about the final phase'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the inverse of a matrix?",
      answer: "The inverse of a square matrix A is the matrix A⁻¹ such that A times A⁻¹ and A⁻¹ times A both equal the identity matrix. It undoes the transformation A performs. An inverse exists exactly when the determinant of A is not zero, and when it exists it is unique."
    },
    obj2: {
      question: "How do you find the inverse of a matrix using cofactors?",
      answer: "Compute the cofactor of every entry: strike its row and column, take the determinant of what remains, and attach the sign (−1) to the power i + j. Arrange the cofactors in a matrix and transpose it to get the adjugate. Compute the determinant of A, for example by multiplying the first row by its cofactors and adding. Then divide every entry of the adjugate by the determinant. The result is the inverse."
    },
    obj3: {
      question: "What is the formula for the inverse of a 2×2 matrix?",
      answer: "For a matrix with rows (a, b) and (c, d), the inverse is 1 over (ad − bc) times the matrix with rows (d, −b) and (−c, a). Swap the two diagonal entries, negate the two off-diagonal entries, and divide by the determinant ad − bc. If ad − bc is zero the matrix has no inverse."
    },
    obj4: {
      question: "Why does a matrix with zero determinant have no inverse?",
      answer: "The adjugate formula divides by the determinant, and division by zero is undefined. More fundamentally, a zero determinant means the matrix collapses space onto a lower-dimensional set, sending different inputs to the same output, and such a collapse cannot be reversed. The adjugate still exists in that case, but A times its adjugate equals the zero matrix rather than the identity."
    },
    obj5: {
      question: "Why is the cofactor matrix transposed to get the inverse?",
      answer: "For A times the adjugate to equal the determinant times the identity, row i of A must meet the cofactors of row i, and in a matrix product row i of the left factor meets column i of the right factor. So the cofactors of row i must sit in column i of the adjugate, which is what transposing the cofactor matrix achieves. Without the transpose the product would not be a multiple of the identity unless A were symmetric."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Inverse Visualizer",
      "description": "Step-by-step visualizer for the inverse of a 2×2 or 3×3 matrix by the adjugate formula. Watch every cofactor form, the transpose into the adjugate, the determinant, and the division into A⁻¹.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-inverse",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four-phase animation: cofactors, transpose, determinant, divide",
        "Sizes 2×2 and 3×3 with every cofactor written out symbolically",
        "Struck rows and columns, highlighted minors and checkerboard signs in the cofactor phase",
        "Determinant expanded along the first row from the cofactors already computed",
        "Animated curved arrows from each source into its destination",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the inverse and how the adjugate formula relates to row reduction"
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
      "educationalLevel": "High School, College",
      "keywords": "matrix inverse, inverse of a matrix, inverse matrix calculator, matrix inverse visualizer, adjugate matrix, adjoint matrix, cofactor matrix, inverse by cofactors, how to find the inverse of a matrix, 2x2 matrix inverse, 3x3 matrix inverse, inverse matrix step by step, determinant and inverse, linear algebra visualizer, interactive matrix tool"
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
          "name": "Matrix Inverse",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-inverse"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-inverse'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Inverse Visualizer | A⁻¹ by Cofactors Step by Step",
        description: "Visualize the inverse of a 2×2 or 3×3 matrix step by step by the adjugate formula: every cofactor, the transpose, the determinant, and the division into A⁻¹.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-inverse",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="22" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="19" y="22" width="11" height="11" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="30" y="22" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="8" y="33" width="11" height="11" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="19" y="33" width="11" height="11" fill="#EF9F27" stroke="#854F0B" stroke-width="1.3"/><rect x="30" y="33" width="11" height="11" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="8" y="44" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="19" y="44" width="11" height="11" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.8"/><rect x="30" y="44" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><line x1="8" y1="38.5" x2="41" y2="38.5" stroke="#412402" stroke-width="1.1"/><line x1="24.5" y1="22" x2="24.5" y2="55" stroke="#412402" stroke-width="1.1"/><path d="M 46 38 L 56 38 M 54 36 L 56 38 L 54 40" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><rect x="60" y="30" width="14" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><text x="67" y="42" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle" font-style="italic">A</text><text x="73" y="34" font-family="Georgia,serif" font-size="5.5" fill="#042C53" text-anchor="middle">-1</text><text x="24" y="66" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">adj A / det A</text></svg>`,
        name: "Matrix Inverse Visualizer",
        hubDescription: "Watch the inverse of a 2×2 or 3×3 matrix build by the adjugate formula — strike a row and a column for every entry to read off its cofactor, transpose the cofactor matrix into the adjugate, expand the determinant along the first row from cofactors already in hand, then divide every entry by it. Every cofactor is written out symbolically, and the page explains why the transpose is necessary and why a zero determinant stops the construction.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function InverseVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-four-phases'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'phase-1-cofactors', 'cofactor'),
    stateRow('obj13', 'phase-2-transpose', 'transpose'),
    stateRow('obj14', 'phase-3-determinant', 'det'),
    stateRow('obj15', 'phase-4-divide', 'divide'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-the-size'),
    plain('obj5', 'what-the-inverse-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Inverse</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <InverseWrapper
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
