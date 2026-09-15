import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import OuterProductWrapper from '../../../../app/components/linear-algebra copy/matrix/OuterProductWrapper'
import outerProductDiagrams from '../../../../app/components/linear-algebra copy/matrix/outerProductDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'outer product of vectors',
    'vector outer product',
    'u v transpose',
    'outer product matrix',
    'rank one matrix',
    'rank 1 matrix',
    'outer product calculator',
    'outer product visualizer',
    'how to compute outer product',
    'outer product vs inner product',
    'tensor product of vectors',
    'dyadic product',
    'column times row',
    'linear algebra visualizer',
    'interactive vector tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Outer product](!/linear-algebra/decompositions/spectral#3) — the [matrix](!/linear-algebra/definitions#matrix) $\\mathbf{u}\\mathbf{v}^T$ built from a column $\\mathbf{u}$ with $m$ entries and a row $\\mathbf{v}^T$ with $n$ entries; its entry at row $i$, column $j$ is $u_i v_j$.

**Result shape** — $m \\times n$: one row for each entry of $\\mathbf{u}$, one column for each entry of $\\mathbf{v}$. The two lengths need not match.

**Rank-1 matrix** — a matrix all of whose rows are multiples of one row vector, equivalently all of whose columns are multiples of one column vector. Every outer product of non-zero [vectors](!/linear-algebra/definitions#vector) is rank 1, and every rank-1 matrix is an outer product.

[Inner product](!/linear-algebra/definitions#inner_product) — the same pairing of entries summed into a single number, $\\mathbf{v}^T\\mathbf{u} = \\sum_i u_i v_i$; requires matching lengths.

**Dyadic product** — an older name for the outer product, still used in physics.

**Tensor product** — the general construction of which the outer product of two vectors is the simplest case, written $\\mathbf{u} \\otimes \\mathbf{v}$.

**Column times row** — the matrix-multiplication reading: an $m \\times 1$ matrix times a $1 \\times n$ matrix is $m \\times n$, with inner [dimension](!/linear-algebra/definitions#dimension) $1$.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the two lengths, pick a method, then watch $\\mathbf{u}\\mathbf{v}^T$ fill.

• Use the **Method** pills to build the [matrix](!/linear-algebra/matrix#1) **cell by cell**, **row by row**, or **column by column**
• Use the two **length** steppers independently: $\\mathbf{u}$ sets the number of rows and $\\mathbf{v}$ the number of columns of the result (1 to 5 each)
• Hover the **?** icon for a reminder of what the outer product is and why it has rank 1
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review
• Switch method at the same dimensions to see that all three routes fill the same matrix — they differ only in how the entries are grouped`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `The Three Methods`,
      content: `The visualizer offers three routes to the same matrix, and the second and third are the ones that explain its structure.

• **Cell by cell** — one entry per scene in row-major order, $u_i$ paired with $v_j$; the definition made literal, $m \\times n$ steps
• **Row by row** — one row per scene: row $i$ is $u_i \\, \\mathbf{v}^T$, the entire row vector scaled by a single entry of $\\mathbf{u}$; $m$ steps
• **Column by column** — one column per scene: column $j$ is $v_j \\, \\mathbf{u}$, the entire column vector scaled by a single entry of $\\mathbf{v}$; $n$ steps

The row and column views make the same point from two sides. Every row is a multiple of $\\mathbf{v}^T$ and every column a multiple of $\\mathbf{u}$, so the matrix carries only one direction on each side. That is what rank 1 means.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In the cell method, the active entry of $\\mathbf{u}$ is highlighted primary, the active entry of $\\mathbf{v}$ secondary, and the destination cell accent; two arrows flow into it, one from each vector
• In the row method, one entry of $\\mathbf{u}$ is primary, all of $\\mathbf{v}^T$ is secondary, and the whole destination row is accent, with an arrow from each entry of $\\mathbf{v}^T$ into its cell
• In the column method, the roles swap: all of $\\mathbf{u}$ is primary, one entry of $\\mathbf{v}$ secondary, and the whole destination column accent
• Filled cells show their symbolic content $u_i \\cdot v_j$ at a font size that scales with the larger [dimension](!/linear-algebra/vector-spaces/dimension#1)
• The step log on the right keeps a record of every completed cell, row or column`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing the Two Lengths`,
      content: `The two steppers are independent, and that independence is the first thing to notice.

• Set $\\mathbf{u}$ to length $3$ and $\\mathbf{v}$ to length $2$ for a $3 \\times 2$ result, or the reverse for $2 \\times 3$; nothing requires the lengths to agree
• Equal lengths give a [square matrix](!/linear-algebra/matrix/types#1), whose [trace](!/linear-algebra/matrix/trace#1) $u_1 v_1 + \\cdots + u_n v_n$ is the inner product of the same two vectors
• Length $1$ on either side collapses the matrix to a single row or a single column, a scaled copy of the other vector
• Larger shapes make the rank-1 pattern more striking: at $5 \\times 5$ there are $25$ entries but only $10$ independent numbers behind them`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What the Outer Product Is`,
      content: `The outer product of a column vector $\\mathbf{u} \\in \\mathbb{R}^m$ and a row vector $\\mathbf{v}^T$ with $\\mathbf{v} \\in \\mathbb{R}^n$ is the $m \\times n$ matrix

$$\\mathbf{u}\\mathbf{v}^T = \\begin{pmatrix} u_1 v_1 & u_1 v_2 & \\cdots & u_1 v_n \\\\ u_2 v_1 & u_2 v_2 & \\cdots & u_2 v_n \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ u_m v_1 & u_m v_2 & \\cdots & u_m v_n \\end{pmatrix}, \\qquad (\\mathbf{u}\\mathbf{v}^T)_{i,j} = u_i v_j$$

It is ordinary [matrix multiplication](!/linear-algebra/formulas#matrix_multiplication) of an $m \\times 1$ matrix by a $1 \\times n$ matrix, with inner dimension $1$, so each entry is a single product rather than a sum. Reading the product by rows, row $i$ is $u_i \\mathbf{v}^T$; reading it by columns, column $j$ is $v_j \\mathbf{u}$.

The inner product is the same two vectors multiplied in the other order: $\\mathbf{v}^T\\mathbf{u}$ is $1 \\times n$ times $n \\times 1$, a $1 \\times 1$ matrix, a number. Outer and inner are the two ways a column and a row can meet.

Because every column of $\\mathbf{u}\\mathbf{v}^T$ is a multiple of $\\mathbf{u}$, the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2) is the line through $\\mathbf{u}$ and the rank is $1$ whenever both vectors are non-zero. For the general theory of rank, see the [matrix rank theory page](!/linear-algebra/matrix/rank).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The outer product is bilinear, and its structure follows from the entrywise formula.

• **Rank**: $\\operatorname{rank}(\\mathbf{u}\\mathbf{v}^T) = 1$ for non-zero $\\mathbf{u}, \\mathbf{v}$, and $0$ if either is zero
• **Transpose**: $(\\mathbf{u}\\mathbf{v}^T)^T = \\mathbf{v}\\mathbf{u}^T$ — swapping the vectors transposes the matrix, so the outer product is not commutative unless $\\mathbf{u} = \\mathbf{v}$
• **Bilinearity**: $(\\mathbf{u}_1 + \\mathbf{u}_2)\\mathbf{v}^T = \\mathbf{u}_1\\mathbf{v}^T + \\mathbf{u}_2\\mathbf{v}^T$, and likewise in $\\mathbf{v}$
• **Scalar pull-out**: $(k\\mathbf{u})\\mathbf{v}^T = \\mathbf{u}(k\\mathbf{v})^T = k\\,\\mathbf{u}\\mathbf{v}^T$ — the same matrix arises from many pairs of vectors
• **Action on a vector**: $(\\mathbf{u}\\mathbf{v}^T)\\mathbf{w} = \\mathbf{u}\\,(\\mathbf{v} \\cdot \\mathbf{w})$ — the matrix sends every vector to a multiple of $\\mathbf{u}$
• **Trace** (square case): $\\operatorname{tr}(\\mathbf{u}\\mathbf{v}^T) = \\mathbf{u} \\cdot \\mathbf{v}$
• **Symmetry**: $\\mathbf{u}\\mathbf{u}^T$ is symmetric and positive semidefinite
• **Projection matrix**: $\\dfrac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}$ projects any vector onto the line through $\\mathbf{u}$
• **Eigenvalues** (square case): $\\mathbf{u} \\cdot \\mathbf{v}$ with [eigenvector](!/linear-algebra/eigen#2) $\\mathbf{u}$, and $0$ with multiplicity $n - 1$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Rank-1 matrices are the atoms of matrix algebra, and the outer product is how they are written.

• **Matrix multiplication**: $AB$ is the sum of the outer products of the columns of $A$ with the rows of $B$, $AB = \\sum_k \\mathbf{a}_k \\mathbf{b}_k^T$
• **Singular value decomposition**: any matrix is a sum of rank-1 outer products $\\sigma_k \\mathbf{u}_k \\mathbf{v}_k^T$, ordered by importance; keeping the first few is low-rank approximation
• **Projection matrices**: $\\mathbf{u}\\mathbf{u}^T / \\mathbf{u}^T\\mathbf{u}$ is the matrix form of projection onto a line
• **Rank-1 updates**: the Sherman-Morrison formula and quasi-Newton methods adjust a matrix by adding an outer product
• **Statistics**: a covariance matrix is an average of outer products $(\\mathbf{x} - \\boldsymbol{\\mu})(\\mathbf{x} - \\boldsymbol{\\mu})^T$
• **Machine learning**: Hebbian learning updates weights by $\\mathbf{y}\\mathbf{x}^T$, and attention scores are built from products of the same shape
• **Physics**: dyadic tensors such as the inertia tensor and stress tensor are sums of outer products`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take

$$\\mathbf{u} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}, \\quad \\mathbf{v} = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$$

The outer product is $3 \\times 2$:

$$\\mathbf{u}\\mathbf{v}^T = \\begin{pmatrix} 1 \\cdot 4 & 1 \\cdot 5 \\\\ 2 \\cdot 4 & 2 \\cdot 5 \\\\ 3 \\cdot 4 & 3 \\cdot 5 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 8 & 10 \\\\ 12 & 15 \\end{pmatrix}$$

Read by rows: $(4, 5)$, $(8, 10) = 2 \\cdot (4, 5)$, $(12, 15) = 3 \\cdot (4, 5)$ — every row is a multiple of $\\mathbf{v}^T$. Read by columns: $(4, 8, 12)^T = 4\\mathbf{u}$ and $(5, 10, 15)^T = 5\\mathbf{u}$ — every column is a multiple of $\\mathbf{u}$. The rank is $1$.

The inner product is not defined for this pair, since the lengths differ. With $\\mathbf{v} = (4, 5, 6)$ instead, the outer product becomes $3 \\times 3$ and its trace $4 + 10 + 18 = 32$ equals $\\mathbf{u} \\cdot \\mathbf{v}$. Set the visualizer to $3$ and $2$ and step through any method to see this matrix assembled symbolically.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Confusing outer with inner** — $\\mathbf{u}\\mathbf{v}^T$ is a matrix, $\\mathbf{v}^T\\mathbf{u}$ is a number; the order of the column and the row decides which
• **Requiring equal lengths** — the inner product needs them, the outer product does not; a $3$-vector and a $2$-vector have a perfectly good $3 \\times 2$ outer product
• **Treating it as commutative** — $\\mathbf{v}\\mathbf{u}^T$ is the transpose of $\\mathbf{u}\\mathbf{v}^T$, a different matrix unless $\\mathbf{u} = \\mathbf{v}$
• **Expecting full rank** — an $n \\times n$ outer product has rank $1$, never more; it is singular for $n \\geq 2$
• **Reading a rank-1 matrix as arbitrary** — if a matrix has the outer product pattern, it is determined by $m + n - 1$ numbers, not $mn$
• **Losing the row-column assignment** — the row index comes from $\\mathbf{u}$ and the column index from $\\mathbf{v}$; $u_i v_j$ sits at $(i, j)$, not $(j, i)$`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Inner product](!/linear-algebra/visual-tools/vectors-inner-product) — the same pairing summed into a scalar; the outer product's twin.

[Matrix multiplication](!/visual-tools/matrix-multiplication) — the outer product is the $m \\times 1$ by $1 \\times n$ case, and every matrix product is a sum of outer products.

[Rank](!/linear-algebra/visual-tools/matrix-rank) — outer products of non-zero vectors are exactly the rank-1 matrices.

[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — swapping $\\mathbf{u}$ and $\\mathbf{v}$ transposes the result.

[Projection](!/linear-algebra/visual-tools/vector-projection) — the projection matrix onto a line is a normalized outer product.

[Singular value decomposition](!/linear-algebra/visual-tools/singular-value-decomposition) — writes any matrix as a weighted sum of outer products of singular vectors.

**Tensor product** — the general construction; the outer product of two vectors is a tensor of order 2.

[Trace](!/linear-algebra/visual-tools/matrix-trace) — for a square outer product, the trace recovers the inner product.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: A Column, a Row, and a Grid`,
      content: `The player opens with $\\mathbf{u}$ standing as a column, $\\mathbf{v}^T$ lying as a row, and an empty $m \\times n$ grid waiting for the result. At the default lengths both [vectors](!/linear-algebra/vectors#1) have three entries and the grid is $3 \\times 3$.

Nothing is computed yet. What the scene establishes is the shape of the answer: a **matrix**, with as many rows as $\\mathbf{u}$ has entries and as many columns as $\\mathbf{v}$.`,
      before: ``,
      after: `The shape rule is the reverse of the inner product's. There, matching lengths were required and the result was a single number. Here, no matching is required, because no entry of $\\mathbf{u}$ ever has to pair with a specific entry of $\\mathbf{v}$ — every entry meets every entry.

The orientation is the whole distinction. A column times a row is $m \\times 1$ by $1 \\times n$, and the inner dimension $1$ means each entry of the product is a single multiplication with nothing to sum. A row times a column, $1 \\times n$ by $n \\times 1$, is the inner product.`,
      link: '',
    },
    obj12: {
      title: `Cell by Cell: The Definition Made Literal`,
      content: `The cell method fills one entry per scene in row-major order: $u_i$ meets $v_j$ and the product lands at row $i$, column $j$.

The frozen picture below is the fifth of nine steps at $3 \\times 3$, the centre entry $u_2 \\cdot v_2$, with the first four cells already filled.`,
      before: ``,
      after: `The row index always comes from $\\mathbf{u}$ and the column index from $\\mathbf{v}$, and the picture makes the reason plain: the active entry of $\\mathbf{u}$ sits level with the destination row, and the active entry of $\\mathbf{v}^T$ sits above the destination column.

There is no accumulation. Each cell is one product and depends on nothing else in the grid, so the nine steps could run in any order; the row-major sweep is a presentational choice. That independence is also what makes the row and column readings possible.`,
      link: '',
    },
    obj13: {
      title: `Row by Row: Each Row Is a Copy of v Transpose`,
      content: `The row method fills one row per scene: a single entry $u_i$ scales the entire row vector $\\mathbf{v}^T$, and the scaled copy becomes row $i$ of the result.

The frozen picture below is the second step: row $2$ being written as $u_2 \\, \\mathbf{v}^T$, with row $1$ already filled.`,
      before: ``,
      after: `This is scalar multiplication of a vector, applied $m$ times with $m$ different scalars. Every row of the result is therefore a multiple of the same row $\\mathbf{v}^T$, and the row space of the matrix is the single line through $\\mathbf{v}$.

That is half of the rank-1 story. A matrix whose rows are all multiples of one vector has rank at most $1$, however many rows it has: the rows carry one direction and $m$ different lengths, nothing more.`,
      link: '',
    },
    obj14: {
      title: `Column by Column: Each Column Is a Copy of u`,
      content: `The column method fills one column per scene: a single entry $v_j$ scales the entire column $\\mathbf{u}$, and the scaled copy becomes column $j$ of the result.

The frozen picture below is the second step: column $2$ being written as $v_2 \\, \\mathbf{u}$, with column $1$ already filled.`,
      before: ``,
      after: `This is the other half of the story. Every column is a multiple of $\\mathbf{u}$, so the column space is the line through $\\mathbf{u}$, and the matrix sends every input vector $\\mathbf{w}$ to a multiple of $\\mathbf{u}$: $(\\mathbf{u}\\mathbf{v}^T)\\mathbf{w} = \\mathbf{u}\\,(\\mathbf{v} \\cdot \\mathbf{w})$.

Row space a line, column space a line — the two views agree that the rank is $1$, which is the rank theorem in miniature: row rank equals column rank. It is also why the outer product is the building block of the singular value decomposition, where a general matrix is written as a sum of such one-direction pieces.`,
      link: '',
    },
    obj15: {
      title: `The Completed Product`,
      content: `The final scene shows every cell filled, so the grid reads $u_i \\cdot v_j$ throughout: $m \\times n$ products from $m + n$ numbers.

Whichever method built it, the same matrix results; the methods differ only in how the products are grouped.`,
      before: ``,
      after: `Two consequences are worth carrying away. The matrix is **singular** whenever it is square with $n \\geq 2$, because rank $1$ is less than $n$; its only non-zero eigenvalue is $\\mathbf{u} \\cdot \\mathbf{v}$ with eigenvector $\\mathbf{u}$. And the pair of vectors is not unique: $(2\\mathbf{u})(\\tfrac{1}{2}\\mathbf{v})^T$ is the same matrix, so an outer product remembers the two directions and the product of the two lengths, not the lengths separately.

Swapping the roles of $\\mathbf{u}$ and $\\mathbf{v}$ transposes the grid, and summing the diagonal, when the grid is square, gives back the inner product. The outer product and the inner product are the same two vectors seen from opposite sides.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from OuterProductWrapper's own buildScenes (exported additively),
     one still per method, and rendered through frozenMatrixSvgFixed. Arrows
     are not reproduced; the cell, row and column highlights carry each state. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: outerProductDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'u standing as a column, v<sup>T</sup> lying as a row, and an empty 3&times;3 grid. No matching-length ' +
      'rule here: the result has a row per entry of u and a column per entry of v.'),
    cell: unit('cell', 'Cell method, the centre entry',
      'u<sub>2</sub> and v<sub>2</sub> highlighted, their product landing at row 2, column 2, with the ' +
      'first four cells already filled. Row index from u, column index from v.'),
    row: unit('row', 'Row method, row 2',
      'One entry of u against all of v<sup>T</sup>: row 2 is u<sub>2</sub> times the whole row vector. ' +
      'Every row of the result is a multiple of v<sup>T</sup>.'),
    column: unit('column', 'Column method, column 2',
      'One entry of v against all of u: column 2 is v<sub>2</sub> times the whole column. Every column ' +
      'of the result is a multiple of u - the other half of rank 1.'),
    done: unit('done', 'Completed outer product, frozen',
      'Nine products from six numbers. Rows are copies of v<sup>T</sup>, columns are copies of u, and ' +
      'the diagonal sums to the inner product u&middot;v.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     OuterProductWrapper accepts an explanations prop keyed by phase:
     intro, cell, row, column, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-outer-product-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('A column times a row: no matching lengths, and a matrix out instead of a number.', 'the-opening-scene', 'Learn more about the opening scene'),
    cell: note('One product per cell, row index from u, column index from v, nothing to sum.', 'cell-by-cell', 'Learn more about the cell method'),
    row: note('Each row is v<sup>T</sup> scaled by one entry of u - the rows carry a single direction.', 'row-by-row', 'Learn more about the row method'),
    column: note('Each column is u scaled by one entry of v - the columns carry a single direction.', 'column-by-column', 'Learn more about the column method'),
    done: note('Rank 1: one direction on each side, and the diagonal sums to the inner product.', 'the-completed-product', 'Learn more about the completed product'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the outer product of two vectors?",
      answer: "The outer product of a column vector u with m entries and a vector v with n entries is the m × n matrix u vᵀ whose entry at row i, column j is u_i times v_j. Every entry of u is multiplied by every entry of v. It is ordinary matrix multiplication of an m × 1 matrix by a 1 × n matrix, so each entry is a single product with nothing to sum."
    },
    obj2: {
      question: "What is the difference between the outer product and the inner product?",
      answer: "The inner product vᵀu multiplies a row by a column, requires the two vectors to have the same length, and returns a single number, the sum of the products of matching entries. The outer product u vᵀ multiplies a column by a row, allows any two lengths, and returns a matrix holding every product u_i v_j. They are the two orders in which a column and a row can be multiplied."
    },
    obj3: {
      question: "Why does an outer product have rank 1?",
      answer: "Every row of u vᵀ is the row vector vᵀ scaled by one entry of u, and every column is the column vector u scaled by one entry of v. All rows lie on a single line and all columns lie on a single line, so the matrix carries only one independent direction on each side. That is the definition of rank 1. Conversely, every rank-1 matrix can be written as an outer product of two vectors."
    },
    obj4: {
      question: "Do the two vectors need the same length for an outer product?",
      answer: "No. A vector with 3 entries and a vector with 2 entries have a 3 × 2 outer product. The number of rows comes from the first vector and the number of columns from the second. Only the inner product requires matching lengths, because it pairs entry i with entry i."
    },
    obj5: {
      question: "Is the outer product commutative?",
      answer: "No. Swapping the vectors gives v uᵀ, which is the transpose of u vᵀ. The two matrices have the same entries arranged with rows and columns exchanged, and they are equal only when u and v are the same vector. When the lengths differ, the two outer products even have different shapes."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Outer Product of Vectors Visualizer",
      "description": "Step-by-step visualizer for the outer product of two vectors. Watch the rank-1 matrix u vᵀ fill cell by cell, row by row, or column by column, with independent lengths for the two vectors.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-outer-product",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three methods: cell by cell, row by row, column by column",
        "Independent lengths for u and v, from 1 to 5 each, giving any result shape up to 5×5",
        "Row and column views that expose the rank-1 structure",
        "Animated curved arrows from the source entries into the destination cell, row or column",
        "Symbolic entries preserved through every step",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the outer product and how it differs from the inner product"
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
      "keywords": "outer product of vectors, vector outer product, u v transpose, outer product matrix, rank one matrix, rank 1 matrix, outer product calculator, outer product visualizer, how to compute outer product, outer product vs inner product, tensor product of vectors, dyadic product, column times row, linear algebra visualizer, interactive vector tool"
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
          "name": "Vector Outer Product",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/vector-outer-product"
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
      relatedTools: getRelatedTools('linear-algebra-vector-outer-product'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Outer Product of Vectors Visualizer | u vᵀ Step by Step",
        description: "Visualize the outer product of two vectors step by step. Watch the rank-1 matrix u vᵀ fill cell by cell, row by row, or column by column, with independent lengths up to 5.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vector-outer-product",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="26" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="8" y="36" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="8" y="46" width="9" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.8"/><rect x="28" y="12" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="38" y="12" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="48" y="12" width="9" height="9" fill="#97C459" stroke="#27500A" stroke-width="0.8"/><rect x="28" y="26" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="38" y="26" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="48" y="26" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="28" y="36" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="38" y="36" width="9" height="9" fill="#EF9F27" stroke="#854F0B" stroke-width="1.2"/><rect x="48" y="36" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="28" y="46" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="38" y="46" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><rect x="48" y="46" width="9" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.8"/><path d="M 17 40.5 L 38 40.5" fill="none" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2,1.5"/><path d="M 42.5 21 L 42.5 36" fill="none" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2,1.5"/><text x="12" y="65" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">u</text><text x="66" y="19" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">v&#7488;</text><text x="42" y="68" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">u v&#7488; &#183; rank 1</text></svg>`,
        name: "Outer Product of Vectors Visualizer",
        hubDescription: "Watch the outer product u vᵀ fill as a matrix — every entry of u against every entry of v — cell by cell, row by row, or column by column. Set the two lengths independently, from 1 to 5 each, and see why no matching rule applies, why every row is a copy of vᵀ and every column a copy of u, and why that makes the result a rank-1 matrix, the building block of matrix multiplication and the singular value decomposition.",
        category: 'Vectors',
        subCategory: 'Products'
      }
    }
  }
}

export default function OuterProductVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

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
    plain('obj2', 'the-three-methods'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'cell-by-cell', 'cell'),
    stateRow('obj13', 'row-by-row', 'row'),
    stateRow('obj14', 'column-by-column', 'column'),
    stateRow('obj15', 'the-completed-product', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-the-two-lengths'),
    plain('obj5', 'what-the-outer-product-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Outer Product of Vectors</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <OuterProductWrapper
   mode='both'
   defaultMethod='cell'
   defaultM={3}
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
