import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import LUWrapper from '../../../../app/components/linear-algebra copy/matrix/LUWrapper'
import luDiagrams from '../../../../app/components/linear-algebra copy/matrix/luDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'lu decomposition',
    'lu factorization',
    'lu decomposition visualizer',
    'lu decomposition calculator',
    'lu decomposition step by step',
    'gaussian elimination lu',
    'lower upper triangular',
    'doolittle decomposition',
    'A = LU',
    'PA = LU partial pivoting',
    'how to compute lu decomposition',
    'lu decomposition example',
    'solving linear systems lu',
    'linear algebra visualizer',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[LU decomposition](!/linear-algebra/definitions#lu_decomposition) — the factorization $A = LU$ of a [square matrix](!/linear-algebra/definitions#square_matrix) into a lower triangular $L$ and an upper triangular $U$.

[Unit lower triangular](!/linear-algebra/definitions#triangular_matrix) — ones on the diagonal and zeros above it; the Doolittle convention used here, which makes $L$ unique.

[Upper triangular](!/linear-algebra/definitions#triangular_matrix) — zeros below the diagonal; $U$ is the [row echelon form](!/linear-algebra/definitions#row_echelon_form) that Gaussian elimination produces.

[Multiplier](!/linear-algebra/decompositions/lower-upper#2) — $\\ell_{i,k} = u_{i,k} / u_{k,k}$, the multiple of the [pivot](!/linear-algebra/definitions#pivot) row subtracted from row $i$ to clear its entry in column $k$; it is stored at position $(i, k)$ of $L$.

[Pivot](!/linear-algebra/definitions#pivot) — the diagonal entry $u_{k,k}$ used to clear column $k$; it must be non-zero.

[Partial pivoting](!/linear-algebra/definitions#partial_pivoting) — swapping rows to bring a non-zero (or the largest) entry into the pivot position; the factorization then reads $PA = LU$ with $P$ a permutation matrix.

[Forward substitution](!/linear-algebra/definitions#forward_substitution) — solving $L\\mathbf{y} = \\mathbf{b}$ from the top row down.

[Back substitution](!/linear-algebra/definitions#back_substitution) — solving $U\\mathbf{x} = \\mathbf{y}$ from the bottom row up.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a [matrix](!/linear-algebra/matrix#1), then watch $L$ and $U$ fill in as the elimination runs.

• Use the **Preset** pills for six matrices chosen to show different outcomes: a classic integer case, negative pivots, a forced row swap, a $2 \\times 2$, a $4 \\times 4$ Pascal matrix, and a [singular matrix](!/linear-algebra/determinants#5)
• Use the **Size** stepper for $2 \\times 2$ up to $4 \\times 4$; resizing keeps the existing entries and pads with the identity
• Edit any **entry** directly in the grid, or press **Shuffle** for random small integers, with a zero planted in the corner three times in ten so the swap branch turns up
• Hover the **?** icon for a reminder of what the factorization is and why it is the standard way to solve linear systems
• Press play or step manually; the step log on the right lists every row operation

The layout reads $A = L \\cdot U$ throughout. $L$ starts with its ones and zeros already drawn, since they are known before any arithmetic, and $U$ starts as a copy of $A$ that the row operations turn triangular.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How the Elimination Runs`,
      content: `The visualizer processes the columns from left to right, clearing everything below each [pivot](!/linear-algebra/linear-systems/echelon-form#4).

• **Pivot** — the diagonal entry $u_{k,k}$ of the working matrix is marked; if it is zero and a non-zero entry sits below, a **swap** scene exchanges the two rows first
• **Eliminate** — for each row $i$ below the pivot, the multiplier $\\ell_{i,k} = u_{i,k} / u_{k,k}$ is written into $L$ and $\\ell_{i,k}$ times the pivot row is subtracted from row $i$, one scene per row
• **Done** — the working matrix is $U$, $L$ holds every multiplier, and $LU$ reproduces $A$

A swap is applied in three places at once: the working matrix, the copy of $A$ on the left, which is relabelled $PA$, and the multipliers already stored in $L$, which travel with their rows. When a zero pivot has nothing non-zero below it, the column is skipped, the multipliers under it are zero, and the zero stays on the diagonal of $U$: the matrix is singular, but the factorization still exists.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows $A$ (or $PA$) on the left, $L$ in the middle and the working matrix $U$ on the right, with the row operation in the caption.

• In a **pivot** scene, the pivot cell of $U$ is accent and its row is primary
• In an **eliminate** scene, the pivot row is primary, the row being cleared is secondary, the entry being turned into $0$ is accent, and the multiplier that appears in $L$ is accent too, with an arrow from the cleared entry to its new home in $L$
• In a **swap** scene, the two rows exchanging places are primary and secondary in all three matrices
• In the **done** scene, every multiplier in $L$ is secondary and the diagonal of $U$ is accent, or muted where a zero sits on it
• The known entries of $L$, the ones on the diagonal and the zeros above, are drawn in grey from the first scene; fractions are shown as $a/b$ in a smaller font`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a Matrix`,
      content: `The six presets each make a different point.

• **Classic $3 \\times 3$** — integer multipliers $2$, $4$ and $3$, no swaps, and $U$ with a clean diagonal; the textbook example
• **Negative pivots** — a $-1$ pivot and negative multipliers, to show that signs pass through the arithmetic unchanged
• **Needs a swap** — a zero in the $(1,1)$ position; the first thing the run does is exchange two rows, and the result is $PA = LU$
• **$2 \\times 2$** — a single multiplier, and a fraction, in the smallest case
• **Pascal $4 \\times 4$** — the matrix of binomial coefficients factors into two Pascal triangles, $L$ lower and $U$ upper, a classic identity made visible
• **Singular** — elimination produces a zero on the diagonal of $U$ that no swap can remove; the factorization exists, the inverse does not

Editing entries by hand is the quickest way to see how the multipliers respond: change one entry of the classic preset and watch which entries of $L$ and $U$ move.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the LU Decomposition Is`,
      content: `Gaussian elimination turns a [square matrix](!/linear-algebra/matrix/types#1) $A$ into an upper triangular $U$ by subtracting multiples of rows from the rows below them. Each such operation is itself a matrix: subtracting $\\ell$ times row $k$ from row $i$ is left-multiplication by an elementary matrix $E$ with $-\\ell$ at position $(i, k)$. Collecting them, $E_m \\cdots E_1 A = U$, so

$$A = (E_m \\cdots E_1)^{-1} U = LU$$

The inverse of that product of elementary matrices turns out to be very simple: it is unit lower triangular and its entry at $(i, k)$ is exactly the multiplier $\\ell_{i,k}$ that was used. That is why the tool can fill $L$ directly, one multiplier at a time, without ever computing an inverse.

$$L = \\begin{pmatrix} 1 & 0 & 0 \\\\ \\ell_{2,1} & 1 & 0 \\\\ \\ell_{3,1} & \\ell_{3,2} & 1 \\end{pmatrix}, \\qquad U = \\text{the echelon form}$$

The factorization fails only when a pivot is zero. If some row below has a non-zero entry in that column, swapping the rows fixes it, and the swaps together form a permutation matrix $P$ with $PA = LU$. In floating point, rows are swapped even when the pivot is merely small, choosing the largest available entry; that is partial pivoting, and every serious solver does it. This tool swaps only when forced, so that the connection to plain elimination stays visible.

For the full treatment, including the elementary-matrix derivation and the Crout and Cholesky variants, see the [LU decomposition theory page](!/linear-algebra/decompositions/lower-upper).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The factorization inherits the properties of its triangular factors.

• **Existence**: $A = LU$ without swaps exists exactly when every leading principal submatrix of $A$ is non-singular; with swaps, $PA = LU$ exists for every square $A$
• **Uniqueness**: with $L$ unit lower triangular, the factorization is unique when it exists
• **Determinant**: $\\det A = \\det L \\cdot \\det U = u_{1,1} u_{2,2} \\cdots u_{n,n}$, times $\\pm 1$ for the permutation
• **Singularity**: $A$ is singular exactly when a zero appears on the diagonal of $U$
• **Solving systems**: $A\\mathbf{x} = \\mathbf{b}$ becomes $L\\mathbf{y} = \\mathbf{b}$ then $U\\mathbf{x} = \\mathbf{y}$, two triangular solves
• **Reuse**: the factorization is computed once and reused for every right-hand side $\\mathbf{b}$
• **Cost**: about $\\tfrac{2}{3}n^3$ operations to factor, $2n^2$ per solve
• **Symmetric positive definite**: $U = DL^T$, giving the Cholesky form $A = LDL^T$ or $A = R^TR$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `LU is how linear systems are actually solved.

• **Solving $A\\mathbf{x} = \\mathbf{b}$**: computing $A^{-1}$ is never the method; factoring $A$ once and doing two triangular solves is cheaper and more accurate
• **Many right-hand sides**: the same $L$ and $U$ serve every $\\mathbf{b}$, which is the situation in simulations and iterative methods
• **Determinants**: the product of the diagonal of $U$ is the practical way to compute $\\det A$ for anything larger than $3 \\times 3$
• **Inverses**: when an inverse is genuinely needed, it is found by solving $A\\mathbf{x} = \\mathbf{e}_j$ for each column, from the same factorization
• **Banded and sparse systems**: $L$ and $U$ inherit the band structure of $A$, so tridiagonal and finite-difference systems factor in linear time
• **The bridge to theory**: $L$ is the record of Gaussian elimination as a matrix, which is what turns row reduction from a procedure into algebra`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the classic preset,

$$A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 4 & 3 & 3 \\\\ 8 & 7 & 9 \\end{pmatrix}$$

**Column 1**, pivot $2$. Multipliers $\\ell_{2,1} = 4/2 = 2$ and $\\ell_{3,1} = 8/2 = 4$. Subtract $2R_1$ from $R_2$ and $4R_1$ from $R_3$:

$$\\begin{pmatrix} 2 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 3 & 5 \\end{pmatrix}$$

**Column 2**, pivot $1$. Multiplier $\\ell_{3,2} = 3/1 = 3$. Subtract $3R_2$ from $R_3$:

$$U = \\begin{pmatrix} 2 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 2 \\end{pmatrix}, \\qquad L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 4 & 3 & 1 \\end{pmatrix}$$

Check row $3$ of $LU$: $4 \\cdot (2, 1, 1) + 3 \\cdot (0, 1, 1) + 1 \\cdot (0, 0, 2) = (8, 7, 9)$. The determinant is $2 \\cdot 1 \\cdot 2 = 4$, and expanding $\\det A$ directly gives $2(27 - 21) - 1(36 - 24) + 1(28 - 24) = 4$ as well.

For the swap preset, the $(1,1)$ entry is $0$, so $R_1 \\leftrightarrow R_2$ comes first and the factorization is of the permuted matrix. Its $U$ has diagonal $1, 1, 1$, so $|\\det A| = 1$; the swap contributes a sign, and $\\det A = -1$. Set the visualizer to either preset and step through to see the same operations performed.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Storing the negative of the multiplier** — $L$ holds $\\ell_{i,k}$ itself, the multiple that was subtracted, not $-\\ell_{i,k}$; the minus sign lives in the elimination step, and $LU$ puts it back
• **Dividing by the wrong pivot** — the multiplier for clearing column $k$ uses the current pivot $u_{k,k}$ of the working matrix, not the original entry of $A$
• **Forgetting to swap the stored multipliers** — when rows are exchanged after some columns are done, the entries of $L$ already computed in those rows must be exchanged too
• **Dividing by a zero pivot** — a zero pivot means swap, not proceed; if nothing below is non-zero, the matrix is singular
• **Expecting $A = LU$ after a swap** — with row exchanges the identity is $PA = LU$, and forward substitution must use $P\\mathbf{b}$
• **Trusting tiny pivots** — in floating point, a small pivot produces huge multipliers and loses precision; that is why software pivots on the largest entry, not merely a non-zero one`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Gaussian elimination](!/linear-algebra/visual-tools/gauss-elimination) — the procedure whose record $L$ is.

[Matrix rank](!/linear-algebra/visual-tools/matrix-rank) — the same elimination, counting pivots instead of storing multipliers.

**Elementary matrices** — the row operations as matrices; $L$ is the inverse of their product.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the product of the diagonal of $U$, with a sign for the permutation.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — solved column by column from the same factorization.

[QR decomposition](!/linear-algebra/visual-tools/qr-decomposition) — the other elimination-based factorization, with an orthonormal $Q$ in place of a triangular $L$.

[Cholesky decomposition](!/linear-algebra/visual-tools/cholesky-decomposition) — the symmetric positive definite special case, $A = R^TR$.

[Permutation matrices](!/linear-algebra/visual-tools/matrix-types) — the row swaps of partial pivoting, collected into $P$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: L Half Known, U a Copy of A`,
      content: `The player opens with $A$ on the left, $L$ in the middle showing its ones on the diagonal and zeros above in grey, and $U$ on the right as an identical copy of $A$.

Nothing has been eliminated yet. What the scene establishes is what is known before any arithmetic: the shape of $L$ is fixed by the convention, and $U$ is whatever the row operations leave behind.`,
      before: ``,
      after: `Drawing the known part of $L$ up front makes the bookkeeping visible: only the entries below the diagonal are unknown, one for each row operation that elimination will perform, and they will be filled in the order the operations happen.

The copy of $A$ on the left is not decorative. It stays fixed for comparison, and if a swap becomes necessary its rows are exchanged and it is relabelled $PA$, so that the identity on screen is always literally true.`,
      link: '',
    },
    obj12: {
      title: `Marking a Pivot`,
      content: `Each column begins by marking its pivot, the diagonal entry of the working matrix. Everything below it in that column is about to be cleared by subtracting multiples of the pivot row.

The frozen picture below is the first pivot of the classic preset, the $2$ at $(1,1)$, with its row highlighted.`,
      before: ``,
      after: `The pivot is the divisor in every multiplier for its column, which is why it cannot be zero. In exact arithmetic any non-zero pivot will do; in floating point a small pivot produces large multipliers and amplifies rounding error, so practical solvers swap in the largest available entry even when the current one is non-zero.

The pivots end up as the diagonal of $U$, and their product is the determinant. Each non-zero pivot is one more independent row confirmed, exactly as in the rank computation.`,
      link: '',
    },
    obj13: {
      title: `Eliminating and Recording the Multiplier`,
      content: `For each row below the pivot, the multiplier $\\ell_{i,k} = u_{i,k} / u_{k,k}$ is computed, written into $L$ at $(i, k)$, and used: $\\ell_{i,k}$ times the pivot row is subtracted from row $i$ of the working matrix, clearing its entry in column $k$.

The frozen picture below is the last elimination of the classic preset: $\\ell_{3,2} = 3$ stored in $L$, and row $3$ of the working matrix cleared to make $U$ triangular.`,
      before: ``,
      after: `This is the one step that distinguishes LU from plain elimination: the multiplier is not thrown away. Row reduction as usually taught discards it once the entry is cleared; LU keeps it, because the multiplier is precisely the information needed to reverse the operation, and reversing all of them is what multiplies $U$ back into $A$.

The sign convention is worth fixing in mind. The operation subtracts $\\ell$ times the pivot row; $L$ stores $+\\ell$. Row $i$ of $LU$ is then $\\ell_{i,1} \\cdot (\\text{row } 1 \\text{ of } U) + \\cdots + 1 \\cdot (\\text{row } i \\text{ of } U)$, which adds back everything that was subtracted.`,
      link: '',
    },
    obj14: {
      title: `Swapping Rows: PA = LU`,
      content: `When the pivot position holds a zero and a row below has a non-zero entry in that column, the two rows are exchanged. The swap is applied to the working matrix, to the copy of $A$ on the left, which becomes $PA$, and to any multipliers already stored in $L$, which move with their rows.

The frozen picture below is the swap preset's first move: $R_1 \\leftrightarrow R_2$ before any elimination, because the original $(1,1)$ entry is $0$.`,
      before: ``,
      after: `A matrix with a zero in the pivot position may have no $LU$ factorization at all; the $2 \\times 2$ matrix with rows $(0, 1)$ and $(1, 0)$ is the standard example. Swapping rows repairs this, at the price of factoring a permuted matrix instead: $PA = LU$, where $P$ records the exchanges.

The permutation is harmless for solving systems, since $A\\mathbf{x} = \\mathbf{b}$ is the same as $PA\\mathbf{x} = P\\mathbf{b}$, and it contributes only a sign to the determinant. Moving the stored multipliers along with the rows is the step most often forgotten, and it is what keeps $L$ consistent with the reordered matrix.`,
      link: '',
    },
    obj15: {
      title: `The Completed Factorization`,
      content: `The final scene shows $U$ upper triangular with its diagonal marked, $L$ with every multiplier in place, and the identity $A = LU$, or $PA = LU$ if a swap occurred, holding on screen.

The frozen picture below is the classic preset finished: multipliers $2$, $4$ and $3$ in $L$, diagonal $2$, $1$ and $2$ in $U$, [determinant](!/linear-algebra/determinants#1) $4$.`,
      before: ``,
      after: `From here every use of the factorization is a triangular solve. To solve $A\\mathbf{x} = \\mathbf{b}$, first solve $L\\mathbf{y} = \\mathbf{b}$ from the top down, which is trivial because $L$ is unit lower triangular, then $U\\mathbf{x} = \\mathbf{y}$ from the bottom up. Two passes, each about $n^2$ operations, against the $n^3$ of the factorization itself, which is done once.

That asymmetry is the whole economy of the method. A simulation that solves the same system for thousands of right-hand sides factors once and substitutes thousands of times, and the determinant and inverse, if ever needed, come from the same $L$ and $U$.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from LUWrapper's own buildScenes on the classic preset (and the
     swap preset for the swap still) and rendered through frozenMatrixSvgFixed.
     Stills are found by phase; the run length depends on the numbers. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: luDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A on the left, L with its ones and zeros already drawn in grey, and U as a copy of A. The shape of L ' +
      'is fixed by convention; only the entries below its diagonal are still to be found.'),
    pivot: unit('pivot', 'First pivot, frozen',
      'The 2 at (1,1) marked as the pivot for column 1, its row highlighted. It is the divisor in every ' +
      'multiplier for this column, which is why a pivot may not be zero.'),
    eliminate: unit('eliminate', 'Last elimination, frozen',
      '&#8467;<sub>3,2</sub> = 3 written into L and row 3 of the working matrix cleared: U is now triangular. ' +
      'The multiplier is kept, not discarded - it is what lets LU rebuild A.'),
    swap: unit('swap', 'Forced row swap, frozen',
      'The swap preset\'s first move: a 0 in the (1,1) position, so R<sub>1</sub> and R<sub>2</sub> are exchanged in the ' +
      'working matrix and in the copy of A, now labelled PA. The result will read PA = LU.'),
    done: unit('done', 'Completed factorization, frozen',
      'Multipliers 2, 4 and 3 in L, diagonal 2, 1 and 2 in U, and A = LU holding on screen. The product of ' +
      'the diagonal, 4, is det A.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     LUWrapper accepts an explanations prop keyed by scene phase:
     intro, pivot, swap, eliminate, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-lu-decomposition-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Elimination with the multipliers kept: the working matrix becomes U, the multipliers fill L.', 'the-opening-scene', 'Learn more about the opening scene'),
    pivot: note('The divisor for every multiplier in this column - non-zero, or swap.', 'marking-a-pivot', 'Learn more about pivots'),
    swap: note('Rows exchanged in U, in A (now PA), and in the multipliers already stored in L.', 'swapping-rows', 'Learn more about swaps'),
    eliminate: note('Store +&#8467; in L; the subtraction it records is what LU adds back.', 'eliminating-and-recording', 'Learn more about elimination'),
    done: note('Two triangular solves per right-hand side; the diagonal of U is the determinant.', 'the-completed-factorization', 'Learn more about the completed factorization'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the LU decomposition?",
      answer: "The LU decomposition writes a square matrix A as the product of a lower triangular matrix L and an upper triangular matrix U. It is Gaussian elimination with the bookkeeping kept: U is the echelon form that elimination produces, and L records, in each position, the multiplier that was used to clear that entry. In the Doolittle convention L has ones on its diagonal."
    },
    obj2: {
      question: "How do you compute the LU decomposition by hand?",
      answer: "Run Gaussian elimination on A, column by column. For each entry below a pivot, compute the multiplier, the entry divided by the pivot, write it into the same position of L, and subtract that multiple of the pivot row from the row. When all columns are done the reduced matrix is U, and L has ones on the diagonal, zeros above, and the multipliers below. Multiplying L by U gives A back."
    },
    obj3: {
      question: "What happens if a pivot is zero?",
      answer: "The multiplier would require division by zero, so the rows must be swapped to bring a non-zero entry into the pivot position. The swaps are collected into a permutation matrix P, and the factorization becomes PA = LU. If every entry at and below the pivot position is zero, no swap helps; the column is skipped, a zero remains on the diagonal of U, and the matrix is singular."
    },
    obj4: {
      question: "Why use LU instead of computing the inverse?",
      answer: "Solving A x = b with LU costs one factorization plus two triangular solves, forward substitution with L and back substitution with U. That is cheaper than computing the inverse and more accurate in floating point. The factorization is also reusable: once L and U are known, every new right-hand side costs only the two substitutions."
    },
    obj5: {
      question: "How is the determinant found from LU?",
      answer: "The determinant of a product is the product of the determinants, and the determinant of a triangular matrix is the product of its diagonal. L has ones on the diagonal, so det A equals the product of the diagonal entries of U, multiplied by −1 for each row swap that partial pivoting performed. This is how determinants are computed in practice for anything beyond small matrices."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "LU Decomposition Visualizer",
      "description": "Step-by-step visualizer for the LU decomposition of a square matrix. Watch Gaussian elimination turn a working copy of A into U while every multiplier fills L, with row swaps recorded as PA = LU when a zero pivot forces them.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/lu-decomposition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable numeric matrix from 2×2 to 4×4, with six presets and a shuffle",
        "Layout A = L · U throughout, with the known part of L drawn from the first scene",
        "One scene per pivot, elimination and forced row swap",
        "Multipliers written into L as the matching entries of U are cleared",
        "PA = LU with the copy of A reordered on screen when a swap occurs",
        "Determinant and singularity reported from the diagonal of U",
        "Adjustable playback speed and a scrollable log of row operations"
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
      "keywords": "lu decomposition, lu factorization, lu decomposition visualizer, lu decomposition calculator, lu decomposition step by step, gaussian elimination lu, lower upper triangular, doolittle decomposition, A = LU, PA = LU partial pivoting, how to compute lu decomposition, lu decomposition example, solving linear systems lu, linear algebra visualizer, interactive matrix tool"
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
          "name": "LU Decomposition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/lu-decomposition"
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
      relatedTools: getRelatedTools('linear-algebra-lu-decomposition'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "LU Decomposition Visualizer | A = LU Step by Step",
        description: "Visualize the LU decomposition step by step: Gaussian elimination on an editable matrix, with every multiplier written into L as U forms, and row swaps recorded as PA = LU.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/lu-decomposition",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="28" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="6" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="15" y="37" width="9" height="9" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="29" y="41" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">=</text><rect x="34" y="28" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="28" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="34" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="43" y="37" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><text x="47.5" y="35" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">0</text><rect x="56" y="28" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="65" y="28" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="56" y="37" width="9" height="9" fill="#D3D1C7" stroke="#B4B2A9" stroke-width="0.7"/><rect x="65" y="37" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="60.5" y="44" font-family="Georgia,serif" font-size="7" fill="#888780" text-anchor="middle">0</text><text x="15" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="43" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">L</text><text x="65" y="58" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">U</text><text x="40" y="72" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">lower &#183; upper</text></svg>`,
        name: "LU Decomposition Visualizer",
        hubDescription: "Watch A = LU assemble in place on a matrix of your own numbers: Gaussian elimination turns a working copy of A into U while every multiplier is written into the matching position of L, and a zero pivot forces a row swap that turns the identity into PA = LU. Six presets cover the classic integer case, negative pivots, a forced swap, a Pascal matrix whose factors are Pascal triangles, and a singular matrix; the final scene reads the determinant off the diagonal of U.",
        category: 'Matrices',
        subCategory: 'Decompositions'
      }
    }
  }
}

export default function LUVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'how-the-elimination-runs'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'marking-a-pivot', 'pivot'),
    stateRow('obj13', 'eliminating-and-recording', 'eliminate'),
    stateRow('obj14', 'swapping-rows', 'swap'),
    stateRow('obj15', 'the-completed-factorization', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-matrix'),
    plain('obj5', 'what-the-lu-decomposition-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>LU Decomposition</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <LUWrapper
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
