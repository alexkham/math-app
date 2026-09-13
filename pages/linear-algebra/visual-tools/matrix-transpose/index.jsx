



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TransposeWrapper from '../../../../app/components/linear-algebra copy/matrix/TransposeWrapper'
import transposeDiagrams from '../../../../app/components/linear-algebra copy/matrix/transposeDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'matrix transpose',
    'transpose visualizer',
    'A transpose',
    'matrix transpose calculator',
    'how to transpose a matrix',
    'transpose of a matrix',
    'rows become columns',
    'diagonal reflection matrix',
    'transpose step by step',
    'symmetric matrix',
    'matrix operations',
    'interactive matrix tool',
    'linear algebra visualizer',
    'm x n transpose',
    'square matrix transpose'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Transpose** — the operation that turns an $m \\times n$ [matrix](!/linear-algebra/matrix#1) $A$ into an $n \\times m$ matrix $A^T$ by swapping rows and columns: $(A^T)_{i,j} = a_{j,i}$.

**Main diagonal** — the entries $a_{i,i}$ where row index equals column index. Defined fully only for square matrices.

**Row-column swap** — the defining rule of transposition: the entry at row $i$, column $j$ of $A$ moves to row $j$, column $i$ of $A^T$.

**Diagonal reflection** — the geometric view of transposition as a mirror across the main diagonal of $A$. For non-square $A$, this becomes an abstract reflection axis.

**Symmetric matrix** — a [square matrix](!/linear-algebra/matrix/types#1) that equals its own transpose: $A = A^T$. Equivalently, $a_{i,j} = a_{j,i}$ for all $i, j$.

**Involution** — an operation that undoes itself. Transpose is involutive: $(A^T)^T = A$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a shape for $A$ and a mental model for how to build $A^T$, then watch the operation animate cell by cell.

• Open the **Size** tab to set rows and columns of $A$ — each ranges from 1 to 5. The shape of $A^T$ updates automatically beside the steppers
• Open the **Method** tab to pick one of four equivalent strategies for constructing $A^T$
• A summary strip at the right of the tab bar always shows the current shape and active method
• The scene player below the controls supports playback speed, step indicator, and a scrollable step log

Every method produces the identical $A^T$ — they differ only in how the operation is broken into steps and what is highlighted at each step.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Four Methods`,
      content: `The **Method** tab offers four mental models of the same operation, each useful in a different context.

• **Cell-by-cell** — sweeps $A$ in row-major order and places each $a_{i,j}$ at position $[j, i]$ of $A^T$. Total steps: $m \\times n$. This is the textbook definition view
• **Row-as-column** — moves a whole row of $A$ into the corresponding column of $A^T$ in one step. Total steps: $m$. Best for seeing rows become columns
• **Column-as-row** — symmetric to row-as-column. Moves each column of $A$ into a row of $A^T$. Total steps: $n$
• **Diagonal reflection** — treats transpose as a single geometric mirror across the main diagonal (or an abstract diagonal-like axis for rectangular $A$). One conceptual step

The diagonal reflection card is marked **geometric** because it is the only purely visual method — no per-cell mechanics, just one reflection.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each animated scene combines highlights, arrows, and a caption.

• **Primary highlight** on $A$ marks the source row, column, or cell currently being moved
• **Accent highlight** on $A^T$ marks the destination
• **Curved arrows** connect source to destination — in fan-out methods (row-as-column, column-as-row), arrows alternate above and below for clarity
• The **title** shows the cell-level or row/column-level transformation in math notation
• The **formula caption** below describes the step in words

In the diagonal reflection method, no arrows appear. Instead, a dashed diagonal axis is drawn through $A$ and $A^T$, with cells above and below the axis colored differently so you can see the reflection at a glance.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Square vs Rectangular Matrices`,
      content: `The diagonal reflection method behaves differently for square and non-square $A$, and the visualizer makes this explicit.

• For a **square** matrix ($m = n$), the main diagonal is a real geometric line. Reflection across it swaps $a_{i,j}$ with $a_{j,i}$ and fixes the diagonal entries in place
• For a **rectangular** matrix ($m \\neq n$), a strict main diagonal only extends through the $\\min(m,n) \\times \\min(m,n)$ subregion. The visualizer draws a **diagonal-like** reflection axis through that subregion and explains that the swap rule still applies to every cell, including those in the overhang

Try a $3 \\times 4$ matrix with the diagonal reflection method to see the abstract axis, then switch to $3 \\times 3$ to see the true diagonal.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Transpose Is`,
      content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ defined by the row-column swap:

$$\\left(A^T\\right)_{i,j} = a_{j,i}$$

Geometrically, transposition is reflection across the main diagonal. Algebraically, it converts row [vectors](!/linear-algebra/vectors#1) into column vectors and vice versa. The shape always flips: if $A$ is wide, $A^T$ is tall, and vice versa.

Transpose has no shape restrictions — any matrix can be transposed, unlike addition (which requires matched shapes) or multiplication (which requires compatible inner [dimensions](!/linear-algebra/vector-spaces/dimension#1)).

For comprehensive coverage of matrix operations theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `Transpose satisfies several algebraic identities that are central to linear algebra.

• **Involution**: $(A^T)^T = A$ — transposing twice returns the original
• **Sum**: $(A + B)^T = A^T + B^T$ — transpose distributes over addition
• **Scalar multiplication**: $(kA)^T = k A^T$ — [scalars](!/linear-algebra/vectors#1) pass through
• **Product (order reverses)**: $(AB)^T = B^T A^T$ — note the swap, which mirrors how shape compatibility flips
• **Inverse and transpose commute**: $(A^{-1})^T = (A^T)^{-1}$ for invertible $A$
• **Determinant invariance**: $\\det(A^T) = \\det(A)$ for square $A$

The product rule is the trickiest: $(AB)^T \\neq A^T B^T$ in general. The order must reverse.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Symmetric and Skew-Symmetric Matrices`,
      content: `Two important classes of square matrices are defined entirely through the transpose.

A matrix is **symmetric** if $A = A^T$, meaning $a_{i,j} = a_{j,i}$ for all $i, j$. Symmetric matrices have all the properties one would expect from "matrices that look the same after a mirror reflection": real [eigenvalues](!/linear-algebra/eigen#2), orthogonal [eigenvectors](!/linear-algebra/eigen#2), and a guaranteed orthogonal diagonalization.

A matrix is **skew-symmetric** (or antisymmetric) if $A^T = -A$, meaning $a_{i,j} = -a_{j,i}$. Skew-symmetric matrices have zeros on the main diagonal, since $a_{i,i} = -a_{i,i}$ forces $a_{i,i} = 0$.

Every square matrix decomposes uniquely into a symmetric and skew-symmetric part: $A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take $A$ as a $2 \\times 3$ matrix:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$$

Then $A^T$ is $3 \\times 2$, with rows and columns swapped:

$$A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

Reading off the rule: $a_{1,1} = 1$ stays at position $(1,1)$ — it sits on the would-be diagonal. The entry $a_{1,2} = 2$ moves to position $(2,1)$ of $A^T$. The entry $a_{2,3} = 6$ moves to position $(3,2)$ of $A^T$.

Set the visualizer to a $2 \\times 3$ shape and try each method to see this transformation animated four different ways.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `Transpose is a simple operation, but a few mistakes recur.

• **Forgetting the order reverses in a product** — $(AB)^T = B^T A^T$, not $A^T B^T$. The swap is essential and follows from shape compatibility
• **Confusing transpose with inverse** — $A^T$ and $A^{-1}$ are different operations; they coincide only for orthogonal matrices, where $A^T = A^{-1}$
• **Assuming the diagonal is preserved for rectangular matrices** — there is no true diagonal when $m \\neq n$, only a diagonal-like axis through the square subregion
• **Confusing transpose with conjugate transpose** — for complex matrices, the conjugate transpose (or Hermitian transpose) $A^*$ also conjugates each entry. For real matrices the two coincide
• **Writing $A^T$ when the matrix isn't named $A$** — the notation $M^T$, $X^T$, etc., uses whatever symbol names the matrix`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix operations** — the broader family that includes addition, subtraction, multiplication, transpose, and inversion.

[Matrix addition](!/linear-algebra/visual-tools/matrix-addition) — element-wise combination of two matrices of the same shape.

[Matrix multiplication](!/visual-tools/matrix-multiplication) — non-element-wise operation where transpose plays a role in the product rule $(AB)^T = B^T A^T$.

[Symmetric matrices](!/linear-algebra/visual-tools/matrix-types) — square matrices satisfying $A = A^T$, fundamental in spectral theory and optimization.

[Orthogonal matrices](!/linear-algebra/visual-tools/orthogonal-matrices) — square matrices satisfying $A^T A = I$, equivalent to $A^T = A^{-1}$.

[Inverse matrix](!/linear-algebra/visual-tools/matrix-inverse) — the operation $A^{-1}$ such that $A A^{-1} = I$; commutes with transpose.

**Conjugate transpose** — the complex analogue of transpose, combining transposition with element-wise conjugation.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — invariant under transpose: $\\det(A^T) = \\det(A)$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Cell-by-Cell: the Definition, One Entry at a Time`,
      content: `The first strategy is the definition made literal. It sweeps $A$ in row-major order and, at each step, places the single entry $a_{i,j}$ into position $[j, i]$ of $A^T$.

At the default size that is $3 \times 4 = 12$ steps, one per entry. The frozen picture below is step 6: five entries have already landed in $A^T$, one is in flight, and the remaining cells of $A^T$ are still empty placeholders.`,
      before: ``,
      after: `The index swap is the whole operation. Everything else the transpose does — the shape change, the symmetry test, the reversal in $(AB)^T = B^T A^T$ — follows from $a_{i,j} \mapsto a_{j,i}$ and nothing more.

Watch the shape while it fills. $A$ is $3 \times 4$ and $A^T$ is $4 \times 3$: the entry at row 2, column 4 of $A$ has nowhere to go in a $3 \times 4$ target, which is why the destination has to be a different shape rather than the same grid rearranged.

This method is the slowest of the four and the one worth running first, because the other three are shortcuts that assume you already believe this one.`,
      link: '',
    },
    obj12: {
      title: `Row-as-Column: Moving a Whole Row at Once`,
      content: `The second strategy takes an entire row of $A$ and stands it up as the corresponding column of $A^T$. Row 1 becomes column 1, row 2 becomes column 2, and so on.

That is $3$ steps at the default size instead of $12$ — one per row of $A$. The still below is step 2, with the first row already standing as a column and the second in progress.`,
      before: ``,
      after: `The step count is the useful observation. Cell-by-cell needs $m \times n$ moves; this needs $m$. Both perform the same relabelling, but grouping the work by row makes the structure visible: a transpose is not twelve unrelated moves, it is three rows being re-oriented.

This is also the reading that makes $A^T$ easy to write out by hand. Take the rows of $A$ in order, write each one down a column, and stop — no index arithmetic required.`,
      link: '',
    },
    obj13: {
      title: `Column-as-Row: the Same Operation From the Other Side`,
      content: `The third strategy is the mirror of the second: each column of $A$ is laid down as the corresponding row of $A^T$. Column 1 becomes row 1, column 2 becomes row 2, and $A^T$ fills top-down rather than left-to-right.

At the default size that is $4$ steps, one per column of $A$. The still is step 2 of 4.`,
      before: ``,
      after: `Row-as-column and column-as-row produce identical results, and the difference in step count — $3$ against $4$ — is purely a matter of which dimension you group by. On a $3 \times 4$ matrix, grouping by rows takes three moves and grouping by columns takes four; on a square matrix the two counts coincide.

Holding both readings at once is what makes the transpose easy to think about: rows of $A$ *are* columns of $A^T$, and columns of $A$ *are* rows of $A^T$. Those are two descriptions of one fact, not two separate rules to remember.`,
      link: '',
    },
    obj14: {
      title: `Diagonal Reflection: One Geometric Move`,
      content: `The fourth strategy drops the step-by-step framing entirely. Transposing is a **reflection across the main diagonal** — a single geometric operation rather than a sequence of moves.

The colouring carries the argument: cells on the diagonal are marked separately from those above it and those below it. Reflecting swaps the above-group with the below-group and leaves the diagonal fixed.`,
      before: ``,
      after: `Two consequences fall straight out of that picture. First, $(A^T)^T = A$ — reflect twice about the same axis and every entry returns home. Second, the diagonal entries never move, which is why $\operatorname{tr}(A^T) = \operatorname{tr}(A)$ and why a symmetric matrix — one satisfying $A = A^T$ — is exactly a matrix whose above-diagonal half mirrors its below-diagonal half. The [symmetric and skew-symmetric](!#symmetric-and-skew-symmetric) section develops that.

For a rectangular $A$ the axis is an abstraction rather than a line you could draw through the grid, since the source and target have different shapes. The tool labels it as such. The index swap still holds; only the tidy geometric picture needs the matrix to be square.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built by calling each strategy's own scene builder (STRATEGIES is exported
     additively from TransposeWrapper) and rendering one representative scene
     through frozenMatrixSvg. Overlays - the curved source-to-destination arrows
     and the dashed diagonal axis - are not reproduced; the cell colouring
     carries the correspondence on its own. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: transposeDiagrams[key], caption, text })

  const stateUnits = {
    'cell-by-cell': unit('cell-by-cell', 'Cell-by-cell, step 6 of 12',
      'A is 3&#215;4 on the left, A&#7488; is 4&#215;3 on the right. Five entries have landed, one is ' +
      'highlighted in transit, and the remaining destination cells still show the empty placeholder.'),
    'row-as-column': unit('row-as-column', 'Row-as-column, step 2 of 3',
      'A whole row of A is highlighted at once, together with the column of A&#7488; it becomes. Three ' +
      'steps cover the entire matrix instead of twelve.'),
    'column-as-row': unit('column-as-row', 'Column-as-row, step 2 of 4',
      'The mirror grouping: a full column of A and the row of A&#7488; it turns into. Same result as ' +
      'row-as-column, reached in four steps rather than three.'),
    'diagonal-reflection': unit('diagonal-reflection', 'Diagonal reflection, the geometric view',
      'No step sequence at all. Cells are coloured by their relation to the main diagonal - on it, above ' +
      'it, below it - and the transpose swaps the two off-diagonal groups while the diagonal stays put.'),
  }


  /* ---- per-strategy scene notes, passed into the component (Line 1) ----
     TransposeWrapper had no explanations prop; one was added additively and
     defaults to null, so captions are unchanged when nothing is passed. The
     caption renders with dangerouslySetInnerHTML, so these are raw HTML with
     <a href="#slug"> anchors rather than markdown. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#the-four-methods" style="color:#1d4ed8;font-weight:600">all four methods</a></div>`

  const explanations = {
    'cell-by-cell': note('The definition made literal: m &#215; n steps, one index swap each.', 'cell-by-cell', 'Learn more about the cell-by-cell method'),
    'row-as-column': note('Group the same work by row and it takes m steps instead of m &#215; n.', 'row-as-column', 'Learn more about row-as-column'),
    'column-as-row': note('The mirror grouping - identical result, n steps.', 'column-as-row', 'Learn more about column-as-row'),
    'diagonal-reflection': note('One reflection, with the diagonal held fixed - which is where the symmetry tests come from.', 'diagonal-reflection', 'Learn more about the reflection view'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the transpose of a matrix?",
      answer: "The transpose of an m by n matrix A, written A superscript T, is the n by m matrix obtained by swapping rows and columns. The entry at row i, column j of A becomes the entry at row j, column i of A transpose. Geometrically, transposition is a reflection of A across its main diagonal."
    },
    obj2: {
      question: "Can any matrix be transposed?",
      answer: "Yes. Transpose has no shape restrictions — every matrix has a transpose. Unlike matrix addition (which requires matched shapes) or matrix multiplication (which requires compatible inner dimensions), the transpose operation is always defined. The shape always flips: an m by n matrix becomes n by m after transposition."
    },
    obj3: {
      question: "What is a symmetric matrix?",
      answer: "A matrix is symmetric if it equals its own transpose: A equals A superscript T. Symmetry requires the matrix to be square, and means the entry at row i, column j equals the entry at row j, column i for every pair of indices. Symmetric matrices have real eigenvalues and orthogonal eigenvectors, which makes them central in spectral theory."
    },
    obj4: {
      question: "What is the transpose of a product of matrices?",
      answer: "The transpose of a product reverses the order: A times B all transposed equals B transposed times A transposed. This order reversal is necessary because shape compatibility flips under transposition. The naive guess that A transpose times B transpose works is wrong in general — the order matters and must be swapped."
    },
    obj5: {
      question: "How does the diagonal reflection method work for rectangular matrices?",
      answer: "For a square matrix, the main diagonal is a real geometric line and reflection across it swaps a at i,j with a at j,i while fixing the diagonal entries. For a rectangular matrix, no full main diagonal exists — only a partial one through the square subregion of side min of m and n. The visualizer draws a diagonal-like reflection axis through that subregion as an abstract anchor, and the same swap rule applies to every cell, including the overhang."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Transpose Visualizer",
      "description": "Step-by-step visualizer for matrix transpose. Watch A become A transpose through four equivalent methods: cell-by-cell, row-as-column, column-as-row, and diagonal reflection.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-transpose",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four equivalent methods for building the transpose: cell-by-cell, row-as-column, column-as-row, diagonal reflection",
        "Tabbed control panel separating size and method",
        "Adjustable shape of A from 1 by 1 up to 5 by 5, with A transpose shape shown automatically",
        "Animated curved arrows from source to destination cells",
        "Diagonal-like reflection axis for non-square matrices",
        "Cell, row, and column-level highlights synced with the active method",
        "Adjustable playback speed and step log of completed operations"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "matrix transpose, transpose visualizer, A transpose, matrix transpose calculator, how to transpose a matrix, transpose of a matrix, rows become columns, diagonal reflection matrix, transpose step by step, symmetric matrix, matrix operations, interactive matrix tool, linear algebra visualizer, m x n transpose, square matrix transpose"
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
          "name": "Matrix Transpose",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-transpose"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-transpose'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Transpose Visualizer | A → A^T Step by Step",
        description: "Visualize matrix transpose four ways: cell-by-cell, row-as-column, column-as-row, and diagonal reflection. Set A from 1x1 up to 5x5 and watch A^T build step by step.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-transpose",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="24" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="22" y="24" width="12" height="12" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="36" width="12" height="12" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.8"/><rect x="22" y="36" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><line x1="10" y1="24" x2="34" y2="48" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3,2"/><path d="M 37 32 Q 43 26 49 32" fill="none" stroke="#FAC775" stroke-width="1.3"/><path d="M 49 32 L 46 29.5 L 45.5 33.5 Z" fill="#FAC775"/><rect x="52" y="24" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="64" y="24" width="12" height="12" fill="#C0DD97" stroke="#3B6D11" stroke-width="0.8"/><rect x="52" y="36" width="12" height="12" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="64" y="36" width="12" height="12" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="58" y="64" font-family="Georgia,serif" font-size="10" fill="#E6F1FB" text-anchor="middle" font-style="italic">A</text><text x="65" y="59" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" font-style="italic">T</text></svg>`,
        name: "Matrix Transpose Visualizer",
        hubDescription: "Watch A become A^T through four equivalent methods — cell-by-cell, row-as-column, column-as-row, or a single diagonal reflection. Set the shape of A from 1x1 up to 5x5, switch methods with a tabbed control panel, and see how each mental model breaks the same operation into a different number of steps.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function MatrixTransposeVisualizer({ seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-four-methods'),
    stateRow('obj11', 'cell-by-cell', 'cell-by-cell'),
    stateRow('obj12', 'row-as-column', 'row-as-column'),
    stateRow('obj13', 'column-as-row', 'column-as-row'),
    stateRow('obj14', 'diagonal-reflection', 'diagonal-reflection'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'square-vs-rectangular'),
    plain('obj5', 'what-the-transpose-is'),
    plain('obj6', 'key-properties'),
    plain('obj7', 'symmetric-and-skew-symmetric'),
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
      {/* <GenericNavbar/> */}
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        // topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Matrix Transpose</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <TransposeWrapper explanations={explanations} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
      <br />
      <br />
      <br />
      {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
      <br />
      {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
      <br />
      <RelatedTools tools={relatedTools}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br />
      <br />
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}