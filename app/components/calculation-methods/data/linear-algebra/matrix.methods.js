// matrix.methods.js (linear algebra)
// Single data source for /linear-algebra/matrix/methods (hub) and
// /linear-algebra/matrix/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/matrix/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/matrix/methods';

const matrixMethods = {
  hubPath: HUB,
  hubLabel: 'matrix methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'matrix-addition',
      name: 'How to add or subtract matrices',
      subtitle: 'Entry-by-entry addition',
      glyph: 'A±B',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two matrices of the same size joined by $+$ or $-$: $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & -1 \\\\ 0 & 2 \\end{pmatrix}$, or $A - B$ for two $2 \\times 3$ matrices.',
      formula: '(A \\pm B)_{ij} = a_{ij} \\pm b_{ij}',
      fields: {
        steps: [
          '1. Check that both matrices have the same size; otherwise the sum is undefined.',
          '2. Add (or subtract) the entries in matching positions.',
        ],
        worked_example: '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & -1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 6 & 1 \\\\ 3 & 6 \\end{pmatrix}$',
      },
      links: [
        { url: ruleUrl('la.matrix-addition'), label: 'Matrix addition' },
        { url: ruleUrl('la.matrix-subtraction'), label: 'Matrix subtraction' },
        { url: ruleUrl('lesson.la.matrix.operations.1'), label: 'Matrix addition (lesson)' },
      ],
    },
    {
      id: 'matrix-scalar-multiplication',
      name: 'How to multiply a matrix by a scalar',
      subtitle: 'Scalar multiplication',
      glyph: 'kA',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A number in front of a matrix: $3A$, $-\\tfrac{1}{2}B$, $\\frac{1}{\\det(A)}\\operatorname{adj}(A)$.',
      formula: '(kA)_{ij} = k\\, a_{ij}',
      fields: {
        steps: [
          '1. Multiply every entry of the matrix by the scalar.',
          '2. The size does not change. A fraction may stay in front: $\\frac{1}{10}\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$.',
        ],
        worked_example: '$3\\begin{pmatrix} 2 & -1 \\\\ 0 & 4 \\end{pmatrix} = \\begin{pmatrix} 6 & -3 \\\\ 0 & 12 \\end{pmatrix}$',
      },
      links: [
        { url: ruleUrl('la.scalar-multiplication-of-matrices'), label: 'Scalar multiplication' },
        { url: ruleUrl('lesson.la.matrix.operations.3'), label: 'Scalar multiplication (lesson)' },
      ],
    },
    {
      id: 'transpose',
      name: 'How to transpose a matrix',
      subtitle: 'Transpose',
      glyph: 'Aᵀ',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A matrix with a superscript $T$: $A^T$, $(AB)^T$, or a step that turns rows into columns (the adjugate, a symmetry test, $A^TA$).',
      formula: '(A^T)_{ij} = a_{ji}',
      fields: {
        steps: [
          '1. Write row 1 of $A$ as column 1 of $A^T$, row 2 as column 2, and so on.',
          '2. An $m \\times n$ matrix becomes $n \\times m$. For a product, reverse the order: $(AB)^T = B^TA^T$.',
        ],
        worked_example: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$',
      },
      links: [
        { url: ruleUrl('la.transpose-definition'), label: 'Transpose' },
        { url: ruleUrl('la.transpose-of-product'), label: 'Transpose of a product' },
        { url: ruleUrl('lesson.la.matrix.operations.8'), label: 'The transpose (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'matrix-multiplication',
      slug: 'matrix-multiplication',
      name: 'How to multiply matrices',
      description: 'Check the inner sizes, then fill each entry with a row of the first times a column of the second.',
      uses: ['row-times-column rule', 'dot product'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Multiply Matrices (Row Times Column) | Learn Math Class',
        description: 'Multiply two matrices step by step: check that the inner sizes match, find the size of the product, and compute each entry as a row times a column. Examples.',
        keywords: ['how to multiply matrices', 'matrix multiplication steps', 'matrix multiplication examples', 'row times column', '2x2 matrix multiplication'],
      },
      page: {
        h1: 'How to Multiply Matrices',
        lead:
          'To multiply $A$ by $B$, the number of columns of $A$ must equal the number of rows of $B$. Each entry of $AB$ is one row of $A$ times one column of $B$: multiply matching entries and add.',
        recognize:
          'Two matrices side by side with no operator between them, or a matrix times a vector: $AB$, $A\\mathbf{x}$, $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, $A^2 = AA$. Test: write the sizes as $(m \\times n)(n \\times p)$; the two inner numbers must be equal.',
        recognizeNote: `The product is defined in the ${link('lesson.la.matrix.operations.5', 'matrix multiplication lesson')}; the entry formula is the ${link('la.matrix-multiplication', 'matrix multiplication formula')}.`,
        methods: [
          {
            name: 'Row times column',
            tag: 'entry by entry',
            preferred: true,
            formula: '(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}\\, b_{kj}',
            body: 'Each entry is row $i$ of $A$ dotted with column $j$ of $B$. The standard way by hand.',
          },
          {
            name: 'Column picture',
            tag: 'one column at a time',
            formula: 'AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}',
            body: `Column $j$ of $AB$ is $A$ times column $j$ of $B$, a ${link('la.matrix-vector-product-column-form', 'combination of the columns')} of $A$. Best for a matrix times a vector.`,
          },
          {
            name: 'Row picture',
            tag: 'one row at a time',
            formula: '\\text{row}_i(AB) = \\text{row}_i(A)\\, B',
            body: `Row $i$ of $AB$ is row $i$ of $A$ times $B$, a combination of the rows of $B$ (see ${link('lesson.la.matrix.operations.7', 'column and row interpretations')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$',
          items: [
            {
              title: 'Write both sizes and compare the inner numbers.',
              body: 'Columns of $A$ must equal rows of $B$. If they differ, the product does not exist.',
              state: '$(2 \\times 2)(2 \\times 2)$: inner $2 = 2$ ✓',
            },
            {
              title: 'Read off the size of the product.',
              body: 'The outer numbers: rows of $A$ by columns of $B$.',
              state: '$AB$ is $2 \\times 2$',
            },
            {
              title: 'Compute row 1: row 1 of A times each column of B.',
              body: 'Multiply matching entries and add.',
              state: '$c_{11} = 1 \\cdot 2 + 2 \\cdot 1 = 4$, $c_{12} = 1 \\cdot 0 + 2 \\cdot 3 = 6$',
            },
            {
              title: 'Repeat for every other row.',
              body: 'An $m \\times p$ product has $mp$ entries, each one row times one column.',
              state: '$c_{21} = 3 \\cdot 2 + 4 \\cdot 1 = 10$, $c_{22} = 3 \\cdot 0 + 4 \\cdot 3 = 12$',
            },
            {
              title: 'Assemble the matrix and keep the order.',
              body: `$AB$ and $BA$ are usually different (${link('la.matrix-multiplication-non-commutativity', 'non-commutativity')}).`,
              state: '$AB = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$, while $BA = \\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}$',
            },
          ],
        },
        examples: [
          {
            title: 'two 2×2 matrices',
            badge: 'basic',
            lines: [
              { math: '$\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 1 & 4 \\\\ 2 & -1 \\end{pmatrix}$', why: 'sizes $(2 \\times 2)(2 \\times 2)$' },
              { math: 'row 1: $2 \\cdot 1 + 1 \\cdot 2 = 4$, $2 \\cdot 4 + 1 \\cdot (-1) = 7$', why: 'row 1 times each column' },
              { math: 'row 2: $0 \\cdot 1 + 3 \\cdot 2 = 6$, $0 \\cdot 4 + 3 \\cdot (-1) = -3$', why: '' },
              { math: '$\\begin{pmatrix} 4 & 7 \\\\ 6 & -3 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'different shapes',
            badge: '2×3 times 3×2',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 0 & 2 \\\\ -1 & 3 & 1 \\end{pmatrix}\\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\\\ 1 & 0 \\end{pmatrix}$', why: 'inner $3 = 3$, result $2 \\times 2$' },
              { math: '$c_{11} = 3 + 0 + 2 = 5$, $c_{12} = 1 + 0 + 0 = 1$', why: '' },
              { math: '$c_{21} = -3 + 6 + 1 = 4$, $c_{22} = -1 + 3 + 0 = 2$', why: '' },
              { math: '$\\begin{pmatrix} 5 & 1 \\\\ 4 & 2 \\end{pmatrix}$', why: 'the reverse order would be $3 \\times 3$', answer: true },
            ],
          },
          {
            title: 'matrix times vector',
            badge: 'column picture',
            lines: [
              { math: '$\\begin{pmatrix} 2 & -1 & 0 \\\\ 1 & 3 & 4 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 1 \\\\ 2 \\end{pmatrix}$', why: '$(2 \\times 3)(3 \\times 1)$' },
              { math: '$= 3\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + 1\\begin{pmatrix} -1 \\\\ 3 \\end{pmatrix} + 2\\begin{pmatrix} 0 \\\\ 4 \\end{pmatrix}$', why: 'vector entries weight the columns' },
              { math: '$= \\begin{pmatrix} 5 \\\\ 14 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Multiply your own matrices in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'Each entry of $AB$ comes from one row of $A$ meeting one column of $B$: lay the row along the column, multiply the pairs, add. The [rows and columns visualizer](!/linear-algebra/visual-tools/matrix-multiplication-rows-columns) highlights the row and column behind every entry, and the [AB versus BA tool](!/linear-algebra/visual-tools/matrix-composition-2d) shows why the order matters: $AB$ means "do $B$ first, then $A$".',
        },
        pitfalls: [
          {
            title: 'Multiplying entry by entry',
            wrong: '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 \\\\ 3 & 12 \\end{pmatrix}$',
            right: 'row times column: $\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$',
            note: 'The entrywise product is the Hadamard product, a different operation.',
          },
          {
            title: 'Assuming the order does not matter',
            wrong: '$AB = BA$',
            right: '$AB = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix} \\neq BA = \\begin{pmatrix} 2 & 4 \\\\ 10 & 14 \\end{pmatrix}$',
          },
          {
            title: 'Multiplying incompatible sizes',
            wrong: '$(2 \\times 3)(2 \\times 3)$ multiplied anyway',
            right: 'inner numbers $3 \\neq 2$: the product is undefined',
          },
          {
            title: 'Wrong size for the result',
            wrong: '$(2 \\times 3)(3 \\times 2)$ gives a $3 \\times 3$ matrix',
            right: 'the outer numbers give the size: $2 \\times 2$',
          },
        ],
        related: ['matrix-powers', 'inverse-2x2', 'trace'],
        builtOn: [
          { label: 'Matrix multiplication formula', url: ruleUrl('la.matrix-multiplication') },
          { label: 'Associativity of matrix products', url: ruleUrl('la.matrix-multiplication-associativity') },
          { label: 'Properties of matrix multiplication (lesson)', url: ruleUrl('lesson.la.matrix.operations.6') },
        ],
      },
    },
    {
      id: 'inverse-2x2',
      slug: 'inverse-2x2',
      name: 'How to find the inverse of a 2×2 matrix',
      description: 'Swap the diagonal, negate the other two entries, divide by the determinant $ad - bc$.',
      uses: ['2×2 inverse formula', 'determinant'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Inverse of a 2×2 Matrix (Formula) | Learn Math Class',
        description: 'Find the inverse of a 2×2 matrix: compute ad − bc, swap the diagonal entries, change the signs of the other two, divide by the determinant. Examples, mistakes.',
        keywords: ['inverse of a 2x2 matrix', '2x2 inverse formula', 'how to find the inverse of a matrix', '2x2 matrix inverse examples'],
      },
      page: {
        h1: 'How to Find the Inverse of a 2×2 Matrix',
        lead:
          'A $2 \\times 2$ matrix has a one-line inverse: swap the two diagonal entries, change the sign of the other two, and divide everything by the determinant $ad - bc$. If the determinant is zero, there is no inverse.',
        recognize:
          'A $2 \\times 2$ matrix and a request for $A^{-1}$, or a $2 \\times 2$ system to solve with the inverse: $\\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}^{-1}$, $\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}^{-1}$. Test: is the matrix exactly $2 \\times 2$, and is $ad - bc \\neq 0$?',
        recognizeNote: `The inverse is defined in the ${link('lesson.la.matrix.inverse.1', 'inverse matrix lesson')}; the shortcut is the ${link('la.inverse-2x2-formula', '2×2 inverse formula')}, worked in the ${link('lesson.la.matrix.inverse.2', '2×2 inverse lesson section')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}$',
          items: [
            {
              title: 'Compute the determinant.',
              body: '$\\det(A) = ad - bc$: main diagonal product minus the other product ([2×2 determinant](!/linear-algebra/determinants/methods#determinant-2x2)).',
              state: '$4 \\cdot 6 - 7 \\cdot 2 = 10$',
            },
            {
              title: 'Stop if the determinant is zero.',
              body: `A zero determinant means the matrix is ${link('la.singular-matrix-definition', 'singular')}: no inverse exists.`,
              state: '$10 \\neq 0$: the inverse exists',
            },
            {
              title: 'Swap a and d, change the signs of b and c.',
              body: 'This matrix is the adjugate of $A$.',
              state: '$\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$',
            },
            {
              title: 'Multiply by 1 over the determinant.',
              body: 'Every entry is divided by the same number.',
              state: '$A^{-1} = \\frac{1}{10}\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix} = \\begin{pmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{pmatrix}$',
              atomic: 'matrix-scalar-multiplication',
            },
            {
              title: 'Check that A times the inverse is I.',
              body: `One [matrix product](!${HUB}/matrix-multiplication) catches any sign slip.`,
              state: '$\\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}\\begin{pmatrix} 0.6 & -0.7 \\\\ -0.2 & 0.4 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'determinant 1',
            badge: 'integer inverse',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$, $\\det(A) = 6 - 5 = 1$', why: '' },
              { math: '$A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$', why: 'swap, negate, divide by 1', answer: true },
            ],
          },
          {
            title: 'negative determinant',
            badge: 'fractions',
            lines: [
              { math: '$A = \\begin{pmatrix} -2 & 3 \\\\ 4 & -5 \\end{pmatrix}$, $\\det(A) = 10 - 12 = -2$', why: '' },
              { math: '$A^{-1} = -\\frac{1}{2}\\begin{pmatrix} -5 & -3 \\\\ -4 & -2 \\end{pmatrix}$', why: 'swap $-2$ and $-5$; negate $3$ and $4$' },
              { math: '$A^{-1} = \\begin{pmatrix} 5/2 & 3/2 \\\\ 2 & 1 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'a singular matrix',
            badge: 'no inverse',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 6 \\\\ 1 & 3 \\end{pmatrix}$, $\\det(A) = 6 - 6 = 0$', why: 'row 1 is twice row 2' },
              { math: '$A^{-1}$ does not exist', why: 'cannot divide by zero', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check any inverse in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'The matrix $\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$ almost undoes $A$: their product is $(ad - bc)I$, the identity scaled by the determinant. Dividing by $ad - bc$ removes that scale. When the determinant is zero, $A$ flattens the plane onto a line and nothing can undo it, as the [linear transformation visualizer](!/linear-algebra/visual-tools/linear-transformation-2d) shows.',
        },
        pitfalls: [
          {
            title: 'Negating the diagonal instead of swapping it',
            wrong: '$\\begin{pmatrix} 4 & 7 \\\\ 2 & 6 \\end{pmatrix}^{-1} = \\frac{1}{10}\\begin{pmatrix} -4 & 7 \\\\ 2 & -6 \\end{pmatrix}$',
            right: 'swap the diagonal, negate the other two: $\\frac{1}{10}\\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$',
          },
          {
            title: 'Inverting each entry',
            wrong: '$A^{-1} = \\begin{pmatrix} 1/4 & 1/7 \\\\ 1/2 & 1/6 \\end{pmatrix}$',
            right: 'the inverse is not taken entry by entry; use the formula',
          },
          {
            title: 'Forgetting to divide by the determinant',
            wrong: '$A^{-1} = \\begin{pmatrix} 6 & -7 \\\\ -2 & 4 \\end{pmatrix}$',
            right: '$A$ times this matrix is $10I$; divide by $10$',
          },
          {
            title: 'Inverting a singular matrix',
            wrong: '$\\begin{pmatrix} 2 & 6 \\\\ 1 & 3 \\end{pmatrix}^{-1} = \\frac{1}{0}\\begin{pmatrix} 3 & -6 \\\\ -1 & 2 \\end{pmatrix}$',
            right: '$\\det = 0$: no inverse exists',
          },
        ],
        related: ['inverse-gauss-jordan', 'inverse-adjugate', 'matrix-multiplication'],
        builtOn: [
          { label: '2×2 inverse formula', url: ruleUrl('la.inverse-2x2-formula') },
          { label: 'Definition of the inverse', url: ruleUrl('la.inverse-definition') },
          { label: 'The inverse of a matrix (lesson)', url: ruleUrl('lesson.la.matrix.7') },
        ],
      },
    },
    {
      id: 'inverse-gauss-jordan',
      slug: 'inverse-gauss-jordan',
      name: 'How to find an inverse by Gauss-Jordan elimination',
      description: 'Row reduce $[A \\mid I]$ until the left half is $I$; the right half is then $A^{-1}$.',
      uses: ['row operations', 'reduced row echelon form'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find an Inverse by Gauss-Jordan Elimination | Learn Math Class',
        description: 'Find a matrix inverse by Gauss-Jordan elimination: write [A | I], row reduce until the left half is I, read the inverse on the right, spot singular cases.',
        keywords: ['inverse by gauss-jordan elimination', 'inverse matrix row reduction', 'how to find the inverse of a 3x3 matrix', 'augmented matrix inverse'],
      },
      page: {
        h1: 'How to Find an Inverse by Gauss-Jordan Elimination',
        lead:
          'Write $A$ and the identity side by side and row reduce the whole block. When the left half has become $I$, the right half is $A^{-1}$; if a zero row appears on the left, $A$ has no inverse.',
        recognize:
          'A square matrix, usually $3 \\times 3$ or larger, whose inverse is wanted, or any size when you want one method that always works: $\\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 2 & 1 \\end{pmatrix}^{-1}$. Test: is the matrix square? Row reduction itself tells you whether it is invertible.',
        recognizeNote: `The method is in the ${link('lesson.la.matrix.inverse.4', 'inverse by row reduction lesson section')}; it runs ${link('lesson.la.linear-systems.gaussian-elimination.6', 'Gauss-Jordan elimination')} on the block $[A \\mid I]$.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 2 & 1 \\end{pmatrix}$',
          items: [
            {
              title: 'Write the block [A | I].',
              body: 'Put the identity of the same size to the right of $A$.',
              state: '$\\left(\\begin{array}{ccc|ccc} 1 & 2 & 0 & 1 & 0 & 0 \\\\ 0 & 1 & 1 & 0 & 1 & 0 \\\\ 1 & 2 & 1 & 0 & 0 & 1 \\end{array}\\right)$',
            },
            {
              title: 'Clear the entries below each pivot.',
              body: `Use ${link('la.elementary-row-operations', 'elementary row operations')} on whole rows, all six entries. Swap rows if a pivot is $0$.`,
              state: '$R_3 - R_1$: row 3 becomes $(0, 0, 1 \\mid -1, 0, 1)$',
            },
            {
              title: 'Clear the entries above each pivot.',
              body: 'Work upward from the last pivot, as in [Gauss-Jordan elimination](!/linear-algebra/linear-systems/methods/gauss-jordan-elimination) for systems.',
              state: '$R_2 - R_3$: $(0, 1, 0 \\mid 1, 1, -1)$; then $R_1 - 2R_2$: $(1, 0, 0 \\mid -1, -2, 2)$',
            },
            {
              title: 'Scale each pivot to 1.',
              body: 'Divide a row by its pivot. You may also do this before clearing; here every pivot is already $1$.',
              state: '$\\left(\\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & -2 & 2 \\\\ 0 & 1 & 0 & 1 & 1 & -1 \\\\ 0 & 0 & 1 & -1 & 0 & 1 \\end{array}\\right)$',
            },
            {
              title: 'Read the inverse from the right half and check.',
              body: `Multiply $A$ by the result ([matrix multiplication](!${HUB}/matrix-multiplication)); it must give $I$.`,
              state: '$A^{-1} = \\begin{pmatrix} -1 & -2 & 2 \\\\ 1 & 1 & -1 \\\\ -1 & 0 & 1 \\end{pmatrix}$, $AA^{-1} = I$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a 2×2 matrix',
            badge: 'no fractions',
            lines: [
              { math: '$\\left(\\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\\\ 5 & 3 & 0 & 1 \\end{array}\\right)$', why: '$A$ next to $I$' },
              { math: '$2R_2 - 5R_1$: $(0, 1 \\mid -5, 2)$', why: 'clears below the pivot' },
              { math: '$R_1 - R_2$: $(2, 0 \\mid 6, -2)$, then $\\tfrac{1}{2}R_1$: $(1, 0 \\mid 3, -1)$', why: 'clear above, then scale' },
              { math: '$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'a zero pivot',
            badge: 'row swap',
            lines: [
              { math: '$A = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 0 \\end{pmatrix}$: swap $R_1$ and $R_2$', why: 'a pivot cannot be $0$' },
              { math: '$R_3 - R_1$, then $R_3 - R_2$: row 3 is $(0, 0, -2 \\mid -1, -1, 1)$', why: '' },
              { math: '$-\\tfrac{1}{2}R_3$, then $R_2 - R_3$ and $R_1 - R_3$', why: 'scale the pivot, clear above' },
              { math: '$A^{-1} = \\frac{1}{2}\\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'a singular matrix',
            badge: 'no inverse',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 3 \\\\ 3 & 6 & 4 \\end{pmatrix}$: $R_2 - 2R_1$, $R_3 - 3R_1$', why: '' },
              { math: 'left half rows $(0, 0, 1)$ and $(0, 0, 1)$; $R_3 - R_2$ gives $(0, 0, 0)$', why: 'a zero row on the left' },
              { math: '$A$ is not invertible', why: 'the left half cannot reach $I$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch every row operation in the [Gaussian elimination visualizer](!/linear-algebra/visual-tools/gauss-elimination), or check the result in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'Each row operation is a multiplication on the left by an elementary matrix. The operations that turn $A$ into $I$ multiply together to $A^{-1}$. Because they act on both halves at once, the right half records exactly that product: it starts as $I$ and ends as $A^{-1}$.',
        },
        pitfalls: [
          {
            title: 'Stopping at echelon form',
            wrong: 'reading the right half once the left half is triangular',
            right: 'keep clearing above the pivots until the left half is exactly $I$',
          },
          {
            title: 'Operating on the left half only',
            wrong: '$R_3 - R_1$ applied to $(1, 2, 1)$ but not to $(0, 0, 1)$',
            right: 'every operation acts on the whole row of $2n$ entries',
          },
          {
            title: 'Mixing in column operations',
            wrong: 'subtracting one column from another to simplify',
            right: 'only row operations keep the right half equal to the product of the steps',
          },
          {
            title: 'Missing the singular case',
            wrong: '"the inverse has a zero row"',
            right: 'a zero row in the left half means no inverse exists',
          },
        ],
        related: ['inverse-2x2', 'inverse-adjugate', 'rank'],
        builtOn: [
          { label: 'Inverse via row reduction', url: ruleUrl('la.inverse-via-row-reduction') },
          { label: 'Elementary row operations', url: ruleUrl('la.elementary-row-operations') },
          { label: 'Invertible matrix theorem', url: ruleUrl('la.invertible-matrix-theorem') },
        ],
      },
    },
    {
      id: 'inverse-adjugate',
      slug: 'inverse-adjugate',
      name: 'How to find an inverse with the adjugate',
      description: 'Compute every cofactor, transpose them into $\\operatorname{adj}(A)$, divide by $\\det(A)$.',
      uses: ['cofactors', 'adjugate', 'determinant'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find an Inverse with the Adjugate (Cofactor Method) | Learn Math Class',
        description: 'Find a matrix inverse with the adjugate: compute the determinant and all cofactors, transpose them, divide by the determinant. 2×2 and 3×3 examples, mistakes.',
        keywords: ['inverse using adjugate', 'adjoint method inverse', 'cofactor method inverse', 'inverse of a 3x3 matrix', 'adjugate matrix examples'],
      },
      page: {
        h1: 'How to Find an Inverse with the Adjugate',
        lead:
          'Replace every entry of $A$ by its cofactor, transpose the result to get the adjugate, and divide by the determinant: $A^{-1} = \\frac{1}{\\det(A)}\\operatorname{adj}(A)$. It gives a formula for every entry at once, which suits small or symbolic matrices.',
        recognize:
          'A $2 \\times 2$ or $3 \\times 3$ matrix whose inverse you want exactly, a matrix with letters as entries, or a question about one entry of $A^{-1}$: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}^{-1}$, "find the $(2,3)$ entry of $A^{-1}$". Test: is $\\det(A) \\neq 0$ and the matrix at most $3 \\times 3$? For larger numeric matrices, row reduction is faster.',
        recognizeNote: `Cofactors and the adjugate are defined in the ${link('lesson.la.determinants.cofactors.6', 'adjugate lesson section')}; the formula is the ${link('la.inverse-via-adjugate', 'inverse via the adjugate')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$',
          items: [
            {
              title: 'Compute the determinant.',
              body: 'Use [cofactor expansion](!/linear-algebra/determinants/methods/cofactor-expansion) along a row. Stop if it is zero.',
              state: '$\\det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = 1$',
            },
            {
              title: 'Compute every cofactor.',
              body: `Delete row $i$ and column $j$, take the $2 \\times 2$ determinant, attach the sign $(-1)^{i+j}$ (${link('la.cofactor-definition', 'cofactor')}).`,
              state: 'cofactor matrix $\\begin{pmatrix} -24 & 20 & -5 \\\\ 18 & -15 & 4 \\\\ 5 & -4 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Transpose to get the adjugate.',
              body: 'Row $i$ of the cofactor matrix becomes column $i$ of $\\operatorname{adj}(A)$.',
              state: '$\\operatorname{adj}(A) = \\begin{pmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{pmatrix}$',
              atomic: 'transpose',
            },
            {
              title: 'Divide by the determinant.',
              body: 'Here $\\det(A) = 1$, so the adjugate is already the inverse.',
              state: '$A^{-1} = \\begin{pmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{pmatrix}$',
              atomic: 'matrix-scalar-multiplication',
            },
            {
              title: 'Check one row of the product.',
              body: 'Row 1 of $A$ times the three columns of $A^{-1}$ must give $1, 0, 0$.',
              state: '$-24 + 40 - 15 = 1$, $18 - 30 + 12 = 0$, $5 - 8 + 3 = 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a 2×2 matrix',
            badge: 'same as the shortcut',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$: cofactors $\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$', why: 'each minor is a single entry' },
              { math: '$\\operatorname{adj}(A) = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$, $\\det(A) = 1$', why: 'transpose' },
              { math: '$A^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'determinant 3',
            badge: 'fractions at the end',
            lines: [
              { math: '$B = \\begin{pmatrix} 2 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix}$, $\\det(B) = 3$', why: '' },
              { math: 'cofactors $\\begin{pmatrix} 1 & -1 & 1 \\\\ 1 & 2 & -2 \\\\ -1 & 1 & 2 \\end{pmatrix}$', why: 'signs follow the checkerboard' },
              { math: '$B^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & 1 & -1 \\\\ -1 & 2 & 1 \\\\ 1 & -2 & 2 \\end{pmatrix}$', why: 'transpose, then divide by $3$', answer: true },
            ],
          },
          {
            title: 'one entry only',
            badge: '(2,3) entry',
            lines: [
              { math: '$(B^{-1})_{23} = \\dfrac{C_{32}}{\\det(B)}$', why: 'indices swap: row 3, column 2' },
              { math: '$C_{32} = (-1)^{5}\\det\\begin{pmatrix} 2 & 1 \\\\ 1 & 0 \\end{pmatrix} = (-1)(-1) = 1$', why: 'delete row 3 and column 2' },
              { math: '$(B^{-1})_{23} = \\frac{1}{3}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Expanding along row $i$ with the cofactors of row $i$ gives $\\det(A)$. Using the cofactors of a different row gives $0$, because that is the determinant of a matrix with two equal rows. So $A \\cdot \\operatorname{adj}(A) = \\det(A)\\, I$, and dividing by $\\det(A)$ leaves the identity. The [matrix inverse visualizer](!/linear-algebra/visual-tools/matrix-inverse) builds every cofactor step by step.',
        },
        pitfalls: [
          {
            title: 'Forgetting to transpose',
            wrong: '$A^{-1} = \\frac{1}{\\det(A)} C$, with $C$ the cofactor matrix',
            right: 'transpose first: $A^{-1} = \\frac{1}{\\det(A)} C^T = \\frac{1}{\\det(A)}\\operatorname{adj}(A)$',
          },
          {
            title: 'Dropping the cofactor signs',
            wrong: '$C_{12} = M_{12} = -20$',
            right: '$C_{12} = (-1)^{1+2} M_{12} = 20$',
          },
          {
            title: 'Using the adjugate on a large numeric matrix',
            wrong: 'sixteen $3 \\times 3$ determinants for one $4 \\times 4$ inverse',
            right: `[Gauss-Jordan elimination](!${HUB}/inverse-gauss-jordan) is much faster`,
          },
        ],
        related: ['inverse-gauss-jordan', 'inverse-2x2', 'matrix-multiplication'],
        builtOn: [
          { label: 'Inverse via the adjugate', url: ruleUrl('la.inverse-via-adjugate') },
          { label: 'Adjugate definition', url: ruleUrl('la.adjugate-definition') },
          { label: 'Adjugate identity', url: ruleUrl('la.adjugate-identity') },
          { label: 'Computing the inverse via the adjugate (lesson)', url: ruleUrl('lesson.la.matrix.inverse.5') },
        ],
      },
    },
    {
      id: 'rank',
      slug: 'rank',
      name: 'How to find the rank of a matrix',
      description: 'Row reduce to echelon form and count the pivots.',
      uses: ['row reduction', 'pivots'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Rank of a Matrix (Row Reduction) | Learn Math Class',
        description: 'Find the rank of a matrix: row reduce to echelon form, count the pivots, check the bound, read off the nullity. With the determinant test, examples, mistakes.',
        keywords: ['how to find the rank of a matrix', 'matrix rank row reduction', 'rank of a matrix examples', 'count pivots rank'],
      },
      page: {
        h1: 'How to Find the Rank of a Matrix',
        lead:
          'The rank is the number of independent rows, which always equals the number of independent columns. Row reduce the matrix to echelon form and count the pivots: that count is the rank.',
        recognize:
          '"Find the rank", "how many columns are independent", "is the system consistent", or a question about the nullity or the column space: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{pmatrix}$, any $m \\times n$ matrix. Test: every matrix, square or not, has a rank between $0$ and $\\min(m, n)$.',
        recognizeNote: `Rank is defined in the ${link('lesson.la.matrix.rank.1', 'matrix rank lesson')}; the procedure is ${link('lesson.la.matrix.rank.3', 'computing rank via row reduction')}.`,
        methods: [
          {
            name: 'Row reduction',
            tag: 'any matrix',
            preferred: true,
            formula: '\\operatorname{rank}(A) = \\text{number of pivots in an echelon form}',
            body: 'Works for every shape, using [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination).',
          },
          {
            name: 'Determinant test',
            tag: 'square matrices',
            formula: '\\det(A) \\neq 0 \\iff \\operatorname{rank}(A) = n',
            body: `One number decides full rank (${link('la.invertible-matrix-theorem', 'invertible matrix theorem')}); if $\\det(A) = 0$, row reduce to find the exact rank.`,
          },
          {
            name: 'Inspection',
            tag: 'small or patterned',
            formula: '\\text{all rows multiples of one row} \\Rightarrow \\operatorname{rank}(A) = 1',
            body: 'Spot rows or columns that are multiples or sums of others. Fast, but confirm by reduction when unsure.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{pmatrix}$',
          items: [
            {
              title: 'Row reduce to echelon form.',
              body: `Clear below each pivot with ${link('la.elementary-row-operations', 'row operations')}; they do not change the rank.`,
              state: '$R_2 - 2R_1 = (0, 0, 0)$, $R_3 - R_1 = (0, -1, -2)$; swap: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & -1 & -2 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Count the pivots.',
              body: 'A pivot is the first nonzero entry of a nonzero row; each sits to the right of the one above.',
              state: 'pivots in columns $1$ and $2$: $\\operatorname{rank}(A) = 2$',
            },
            {
              title: 'Check against the bound.',
              body: `The ${link('la.rank-bounds', 'rank')} cannot exceed the number of rows or of columns.`,
              state: '$2 \\le \\min(3, 3)$ ✓; not full rank, so $\\det(A) = 0$',
            },
            {
              title: 'Read off what the rank tells you.',
              body: `Nullity $= n - \\operatorname{rank}$ by the ${link('la.rank-nullity-theorem-matrix-form', 'rank-nullity theorem')}; the pivot columns of the original $A$ form a basis of the column space.`,
              state: 'nullity $3 - 2 = 1$; columns $1$ and $2$ of $A$ span the column space',
            },
          ],
        },
        examples: [
          {
            title: 'rows that are multiples',
            badge: 'rank 1',
            lines: [
              { math: '$\\begin{pmatrix} 2 & 1 & 3 \\\\ 4 & 2 & 6 \\\\ 6 & 3 & 9 \\end{pmatrix}$: $R_2 - 2R_1$, $R_3 - 3R_1$', why: 'both rows become zero' },
              { math: 'one pivot: rank $1$', why: '', answer: true },
            ],
          },
          {
            title: 'a wide matrix',
            badge: '3 × 4',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 & 1 & 0 \\\\ 2 & 4 & 3 & 1 \\\\ 3 & 6 & 4 & 1 \\end{pmatrix}$: $R_2 - 2R_1$, $R_3 - 3R_1$', why: '' },
              { math: 'both new rows are $(0, 0, 1, 1)$; $R_3 - R_2 = 0$', why: '' },
              { math: 'pivots in columns $1$ and $3$: rank $2$, nullity $4 - 2 = 2$', why: '', answer: true },
            ],
          },
          {
            title: 'a square matrix',
            badge: 'determinant test',
            lines: [
              { math: '$\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 4 \\end{pmatrix} = 1(4 - 1) - 0 + 2(0 - 1) = 1$', why: 'first-row expansion' },
              { math: '$\\det \\neq 0$: rank $3$, full rank', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Count the pivots as they appear in the [matrix rank visualizer](!/linear-algebra/visual-tools/matrix-rank).',
        visual: {
          caption:
            'Row operations replace rows by combinations of rows, so they never change how many independent directions the rows span. Elimination squeezes every dependent row down to zero; the rows that survive, one per pivot, are independent. Their count is the dimension of the row space, and it always equals the dimension of the column space.',
        },
        pitfalls: [
          {
            title: 'Counting nonzero rows too early',
            wrong: '$\\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 3 \\\\ 0 & 2 & 6 \\end{pmatrix}$ has rank $3$',
            right: 'not in echelon form yet; $R_3 - 2R_2 = 0$, so the rank is $2$',
          },
          {
            title: 'Counting nonzero entries instead of pivots',
            wrong: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 5 \\end{pmatrix}$ has rank $3$',
            right: 'two nonzero rows, two pivots: rank $2$',
          },
          {
            title: 'Taking basis columns from the reduced matrix',
            wrong: 'the pivot columns of the echelon form span the column space of $A$',
            right: 'take the pivot columns of the original $A$',
          },
          {
            title: 'A rank above the size',
            wrong: 'a $2 \\times 5$ matrix of rank $3$',
            right: 'rank $\\le \\min(2, 5) = 2$',
          },
        ],
        related: ['inverse-gauss-jordan', 'trace', 'identify-matrix-type'],
        builtOn: [
          { label: 'Rank bounds', url: ruleUrl('la.rank-bounds') },
          { label: 'Row rank equals column rank', url: ruleUrl('la.row-rank-equals-column-rank') },
          { label: 'Rank-nullity theorem', url: ruleUrl('la.rank-nullity-theorem-matrix-form') },
          { label: 'Computing rank via row reduction (lesson)', url: ruleUrl('lesson.la.matrix.rank.3') },
        ],
      },
    },
    {
      id: 'trace',
      slug: 'trace',
      name: 'How to find the trace of a matrix',
      description: 'Add the diagonal entries; use linearity and $\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$ to skip products.',
      uses: ['diagonal sum', 'linearity', 'cyclic property'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Trace of a Matrix (with Properties) | Learn Math Class',
        description: 'Find the trace of a square matrix by adding its diagonal entries, and use linearity, tr(AB) = tr(BA) and the eigenvalue sum to skip work. Examples and mistakes.',
        keywords: ['trace of a matrix', 'how to find the trace', 'trace properties', 'tr(AB) = tr(BA)', 'trace and eigenvalues'],
      },
      page: {
        h1: 'How to Find the Trace of a Matrix',
        lead:
          'The trace of a square matrix is the sum of its main-diagonal entries. Its properties give the trace of sums and products without computing the whole matrix.',
        recognize:
          '$\\operatorname{tr}(A)$, "the sum of the diagonal", "the sum of the eigenvalues", or the trace of a sum or product: $\\operatorname{tr}\\begin{pmatrix} 3 & 1 & -2 \\\\ 0 & 5 & 4 \\\\ 7 & -1 & 2 \\end{pmatrix}$, $\\operatorname{tr}(AB)$, $\\operatorname{tr}(2A - 3B)$. Test: the matrix must be square.',
        recognizeNote: `The trace is defined in the ${link('lesson.la.matrix.trace.1', 'trace lesson')}; see the ${link('la.trace-definition', 'trace formula')}.`,
        methods: [
          {
            name: 'Diagonal sum',
            tag: 'one matrix',
            preferred: true,
            formula: '\\operatorname{tr}(A) = a_{11} + a_{22} + \\cdots + a_{nn}',
            body: 'Add the entries from top left to bottom right. Nothing else in the matrix matters.',
          },
          {
            name: 'Linearity',
            tag: 'sums and multiples',
            formula: '\\operatorname{tr}(\\alpha A + \\beta B) = \\alpha\\operatorname{tr}(A) + \\beta\\operatorname{tr}(B)',
            body: `Find each trace first, then combine (${link('la.trace-linearity', 'trace linearity')}).`,
          },
          {
            name: 'Cyclic property',
            tag: 'products',
            formula: '\\operatorname{tr}(AB) = \\operatorname{tr}(BA) = \\sum_{i,j} a_{ij}\\, b_{ji}',
            body: `Only the diagonal of the product is needed (${link('la.trace-cyclic-property', 'cyclic property')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 3 & 1 & -2 \\\\ 0 & 5 & 4 \\\\ 7 & -1 & 2 \\end{pmatrix}$',
          items: [
            {
              title: 'Check that the matrix is square.',
              body: 'The trace of a non-square matrix is not defined.',
              state: '$3 \\times 3$ ✓',
            },
            {
              title: 'Pick out the main diagonal.',
              body: 'The entries $a_{11}, a_{22}, \\dots, a_{nn}$, from top left to bottom right.',
              state: '$3$, $5$, $2$',
            },
            {
              title: 'Add them.',
              body: 'The off-diagonal entries play no part.',
              state: '$\\operatorname{tr}(A) = 3 + 5 + 2 = 10$',
            },
            {
              title: 'Use the trace as a check on eigenvalues.',
              body: `The ${link('la.trace-sum-of-eigenvalues', 'trace equals the sum of the eigenvalues')}, counted with multiplicity.`,
              state: 'the three eigenvalues of $A$ add up to $10$',
            },
          ],
        },
        examples: [
          {
            title: 'a linear combination',
            badge: 'linearity',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$: $\\operatorname{tr}(A) = 5$, $\\operatorname{tr}(B) = 5$', why: '' },
              { math: '$\\operatorname{tr}(2A - 3B) = 2 \\cdot 5 - 3 \\cdot 5 = -5$', why: 'no need to form $2A - 3B$', answer: true },
            ],
          },
          {
            title: 'a product',
            badge: 'only the diagonal',
            lines: [
              { math: '$\\operatorname{tr}(AB) = \\sum_{i,j} a_{ij}\\, b_{ji}$', why: 'same $A$ and $B$' },
              { math: '$= 1 \\cdot 2 + 2 \\cdot 1 + 3 \\cdot 0 + 4 \\cdot 3 = 16$', why: 'diagonal entries of $AB$ only' },
              { math: '$\\operatorname{tr}(AB) = \\operatorname{tr}(BA) = 16$', why: 'even though $AB \\neq BA$', answer: true },
            ],
          },
          {
            title: 'checking eigenvalues',
            badge: '2 × 2',
            lines: [
              { math: '$\\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$: claimed eigenvalues $5$ and $2$', why: '' },
              { math: '$\\operatorname{tr} = 4 + 3 = 7 = 5 + 2$ ✓; $\\det = 12 - 2 = 10 = 5 \\cdot 2$ ✓', why: 'trace adds, determinant multiplies' },
              { math: 'the claim passes both checks', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'The trace ignores everything off the diagonal, yet it does not depend on the basis: similar matrices $A$ and $P^{-1}AP$ have the same trace. That is why it equals the sum of the eigenvalues, which are basis-free too. Try it in the [matrix trace visualizer](!/linear-algebra/visual-tools/matrix-trace).',
        },
        pitfalls: [
          {
            title: 'Adding the wrong diagonal',
            wrong: '$\\operatorname{tr}\\begin{pmatrix} 3 & 1 & -2 \\\\ 0 & 5 & 4 \\\\ 7 & -1 & 2 \\end{pmatrix} = -2 + 5 + 7$',
            right: 'main diagonal only: $3 + 5 + 2 = 10$',
          },
          {
            title: 'Trace of a product as a product of traces',
            wrong: '$\\operatorname{tr}(AB) = \\operatorname{tr}(A)\\operatorname{tr}(B) = 25$',
            right: '$\\operatorname{tr}(AB) = 16$ for the matrices above',
          },
          {
            title: 'Reordering three factors freely',
            wrong: '$\\operatorname{tr}(ABC) = \\operatorname{tr}(BAC)$',
            right: 'only cyclic shifts: $\\operatorname{tr}(ABC) = \\operatorname{tr}(BCA) = \\operatorname{tr}(CAB)$',
          },
          {
            title: 'Trace of a non-square matrix',
            wrong: '$\\operatorname{tr}\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} = 1 + 5$',
            right: 'undefined: the trace needs a square matrix',
          },
        ],
        related: ['matrix-multiplication', 'matrix-powers', 'identify-matrix-type'],
        builtOn: [
          { label: 'Trace definition', url: ruleUrl('la.trace-definition') },
          { label: 'Trace linearity', url: ruleUrl('la.trace-linearity') },
          { label: 'The cyclic property (lesson)', url: ruleUrl('lesson.la.matrix.trace.4') },
        ],
      },
    },
    {
      id: 'matrix-powers',
      slug: 'matrix-powers',
      name: 'How to compute powers of a matrix',
      description: 'Multiply the matrix by itself, square repeatedly for high powers, or use a diagonal or repeating pattern.',
      uses: ['matrix multiplication', 'repeated squaring'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute Powers of a Matrix (A², A³, Aⁿ) | Learn Math Class',
        description: 'Compute powers of a square matrix: multiply it by itself, square repeatedly for high powers, use diagonal and repeating patterns, check with the determinant.',
        keywords: ['matrix powers', 'how to compute a matrix power', 'a squared matrix', 'matrix to the power n', 'powers of a 2x2 matrix'],
      },
      page: {
        h1: 'How to Compute Powers of a Matrix',
        lead:
          '$A^k$ means $A$ multiplied by itself $k$ times, so only square matrices have powers. Multiply step by step for small $k$, square repeatedly for large $k$, and look for a pattern before doing any work.',
        recognize:
          'A square matrix with an exponent: $A^2$, $A^3$, $A^{10}$, $A^n$ for every $n$, or a recurrence $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$, whose solution is $\\mathbf{x}_k = A^k\\mathbf{x}_0$. Test: is $A$ square, and is it diagonal, triangular or a rotation whose powers repeat?',
        recognizeNote: `Powers are defined in the ${link('lesson.la.matrix.operations.9', 'matrix powers lesson section')}; see the ${link('la.matrix-power', 'matrix power formula')}.`,
        methods: [
          {
            name: 'Repeated multiplication',
            tag: 'small k',
            preferred: true,
            formula: 'A^k = \\underbrace{A A \\cdots A}_{k \\text{ factors}}',
            body: `Multiply by $A$ one step at a time with [matrix multiplication](!${HUB}/matrix-multiplication).`,
          },
          {
            name: 'Repeated squaring',
            tag: 'large k',
            formula: 'A^{8} = \\big((A^2)^2\\big)^2',
            body: 'Square, then square again: $A^{8}$ takes three products instead of seven.',
          },
          {
            name: 'Diagonal or diagonalized',
            tag: 'any k',
            formula: 'A = PDP^{-1} \\Rightarrow A^k = PD^kP^{-1}',
            body: `Raise each diagonal entry to the power; for a non-diagonal matrix, first [diagonalize it](!/linear-algebra/eigen/methods/matrix-powers-diagonalization) (${link('la.diagonalization-formula', 'diagonalization')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $A^4$ for $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$',
          items: [
            {
              title: 'Check that A is square.',
              body: 'Only an $n \\times n$ matrix can be multiplied by itself.',
              state: '$2 \\times 2$ ✓',
            },
            {
              title: 'Look for a shortcut.',
              body: `Diagonal: power each entry (${link('la.diagonal-matrix-power', 'diagonal power')}). Nilpotent or periodic: the powers vanish or repeat.`,
              state: 'not diagonal, no visible cycle: multiply',
            },
            {
              title: 'Compute A squared.',
              body: 'Row times column, as for any product.',
              state: '$A^2 = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}$',
            },
            {
              title: 'Square again, or multiply by A, up to the power you need.',
              body: '$A^4 = A^2 A^2$; for $A^5$ multiply once more by $A$.',
              state: '$A^4 = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}^2 = \\begin{pmatrix} 34 & 21 \\\\ 21 & 13 \\end{pmatrix}$',
            },
            {
              title: 'Check with the determinant.',
              body: `The ${link('la.determinant-of-power', 'determinant of a power')} is $\\det(A^k) = \\det(A)^k$.`,
              state: '$\\det(A) = 1$, and $34 \\cdot 13 - 21^2 = 442 - 441 = 1$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'find the pattern',
            badge: 'every power at once',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$: $A^2 = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, $A^3 = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$', why: 'the corner grows by $1$' },
              { math: '$A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$', why: 'confirm: $A^n A$ has corner $n + 1$', answer: true },
            ],
          },
          {
            title: 'a diagonal matrix',
            badge: 'power each entry',
            lines: [
              { math: '$D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$', why: '' },
              { math: '$D^4 = \\begin{pmatrix} 2^4 & 0 & 0 \\\\ 0 & (-1)^4 & 0 \\\\ 0 & 0 & 3^4 \\end{pmatrix} = \\begin{pmatrix} 16 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 81 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'a repeating cycle',
            badge: 'rotation by 90°',
            lines: [
              { math: '$R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$: $R^2 = -I$, so $R^4 = I$', why: 'four quarter turns' },
              { math: '$R^{10} = R^{8} R^{2} = I \\cdot R^2$', why: '$10 = 8 + 2$' },
              { math: '$R^{10} = -I = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step through the products in the [matrix power visualizer](!/linear-algebra/visual-tools/matrix-power).',
        visual: {
          caption:
            'A matrix acts on the plane, and $A^k$ applies that action $k$ times. A rotation by $90°$ is back at the start after four turns, so its powers cycle. A shear slides a little further each time, so its corner entry grows by one. A diagonal matrix stretches each axis on its own, so each axis is stretched $k$ times over.',
        },
        pitfalls: [
          {
            title: 'Squaring each entry',
            wrong: '$\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}^2 = \\begin{pmatrix} 4 & 1 \\\\ 1 & 1 \\end{pmatrix}$',
            right: '$A^2 = AA = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}$',
            note: 'Entrywise powers are correct only for diagonal matrices.',
          },
          {
            title: 'Expanding a square of a sum as for numbers',
            wrong: '$(A + B)^2 = A^2 + 2AB + B^2$',
            right: '$(A + B)^2 = A^2 + AB + BA + B^2$; the middle terms differ when $AB \\neq BA$',
          },
          {
            title: 'Powers of a non-square matrix',
            wrong: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}^2$',
            right: 'undefined: $(2 \\times 3)(2 \\times 3)$ does not multiply',
          },
        ],
        related: ['matrix-multiplication', 'identify-matrix-type', 'trace'],
        builtOn: [
          { label: 'Matrix power', url: ruleUrl('la.matrix-power') },
          { label: 'Power of a diagonal matrix', url: ruleUrl('la.diagonal-matrix-power') },
          { label: 'Associativity of matrix products', url: ruleUrl('la.matrix-multiplication-associativity') },
        ],
      },
    },
    {
      id: 'identify-matrix-type',
      slug: 'identify-matrix-type',
      name: 'How to identify the type of a matrix',
      description: 'Check the shape, the zero pattern, the transpose and a few products to name the type.',
      uses: ['transpose', 'matrix products', 'determinant'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Identify the Type of a Matrix (Tests for Each) | Learn Math Class',
        description: 'Identify a matrix type: check the shape and the zero pattern, compare with the transpose, test products such as QᵀQ = I and A² = A, then the determinant.',
        keywords: ['types of matrices', 'how to tell if a matrix is symmetric', 'orthogonal matrix test', 'idempotent matrix', 'classify a matrix'],
      },
      page: {
        h1: 'How to Identify the Type of a Matrix',
        lead:
          'Most matrix types are defined by one equation: $A^T = A$, $A^TA = I$, $A^2 = A$. Test the cheap properties first (shape, zeros, transpose), then the ones that need a product.',
        recognize: `"Is this matrix symmetric, orthogonal or idempotent?", "classify the matrix", or a step that only works for one type, such as the shortcut for [triangular determinants](!/linear-algebra/determinants/methods/triangular-determinant). Typical inputs: $\\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & -1 \\\\ 0 & -1 & 4 \\end{pmatrix}$, a permutation matrix, a projection. Test: is it square? Almost every type requires it.`,
        recognizeNote: `Every type is defined in the ${link('lesson.la.matrix.types', 'types of matrices lesson')}; its ${link('lesson.la.matrix.types.11', 'summary table')} lists the defining equations.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 3 & -1 \\\\ 0 & -1 & 4 \\end{pmatrix}$',
          items: [
            {
              title: 'Check the shape.',
              body: 'Every type below needs a square ($n \\times n$) matrix.',
              state: '$3 \\times 3$: square',
            },
            {
              title: 'Look at the zero pattern.',
              body: 'Zeros off the diagonal: diagonal. Zeros below it: upper triangular. Zeros above it: lower triangular.',
              state: 'zeros only at $(1,3)$ and $(3,1)$: not diagonal or triangular',
            },
            {
              title: 'Compare A with its transpose.',
              body: `$A^T = A$: ${link('la.symmetric-matrix-definition', 'symmetric')}. $A^T = -A$: ${link('la.skew-symmetric-matrix-definition', 'skew-symmetric')}.`,
              state: '$a_{12} = a_{21} = 1$, $a_{13} = a_{31} = 0$, $a_{23} = a_{32} = -1$: symmetric',
              atomic: 'transpose',
            },
            {
              title: 'Test the product equations.',
              body: `$A^TA = I$: ${link('la.orthogonal-matrix-definition', 'orthogonal')}. $A^2 = A$: ${link('la.idempotent-matrix-definition', 'idempotent')}. $A^2 = I$: ${link('la.involutory-matrix-definition', 'involutory')}. $A^k = 0$: ${link('la.nilpotent-matrix-definition', 'nilpotent')}.`,
              state: 'column 1 has length $\\sqrt{5}$: not orthogonal; $(A^2)_{11} = 5$: not idempotent or involutory; trace $9 \\neq 0$: not nilpotent',
            },
            {
              title: 'Check whether it is singular.',
              body: `$\\det(A) = 0$ means ${link('la.singular-matrix-definition', 'singular')}; otherwise the matrix is invertible.`,
              state: '$\\det(A) = 18 \\neq 0$: symmetric and invertible',
            },
          ],
        },
        examples: [
          {
            title: 'skew-symmetric',
            badge: 'Aᵀ = −A',
            lines: [
              { math: '$K = \\begin{pmatrix} 0 & 2 & -1 \\\\ -2 & 0 & 3 \\\\ 1 & -3 & 0 \\end{pmatrix}$', why: 'zero diagonal, mirrored entries change sign' },
              { math: '$K^T = \\begin{pmatrix} 0 & -2 & 1 \\\\ 2 & 0 & -3 \\\\ -1 & 3 & 0 \\end{pmatrix} = -K$', why: '' },
              { math: 'skew-symmetric, and $\\det(K) = 0$', why: 'odd size forces determinant $0$', answer: true },
            ],
          },
          {
            title: 'a permutation matrix',
            badge: 'orthogonal',
            lines: [
              { math: '$P = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 1 & 0 & 0 \\end{pmatrix}$', why: 'one $1$ in each row and column' },
              { math: '$P^TP = I$', why: 'the columns are orthonormal' },
              { math: 'orthogonal, with $P^{-1} = P^T$ and $\\det(P) = 1$', why: '', answer: true },
            ],
          },
          {
            title: 'a projection',
            badge: 'A² = A',
            lines: [
              { math: '$E = \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$: $E^2 = \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix} = E$', why: '' },
              { math: 'idempotent, upper triangular, singular; $\\operatorname{tr}(E) = 1 = \\operatorname{rank}(E)$', why: 'for idempotents, trace equals rank', answer: true },
            ],
          },
        ],
        examplesAfter: 'Generate every type in the [matrix types visualizer](!/linear-algebra/visual-tools/matrix-types), and test orthogonality in the [orthogonal matrices visualizer](!/linear-algebra/visual-tools/orthogonal-matrices).',
        visual: {
          caption:
            'Each type is a symmetry or a habit of the matrix. Symmetric matrices are mirror images across the diagonal. Orthogonal matrices are rotations and reflections; they keep lengths, which is what $Q^TQ = I$ says. Idempotent matrices are projections: projecting twice changes nothing. Nilpotent matrices push vectors down a chain until they vanish.',
        },
        pitfalls: [
          {
            title: 'Calling a non-square matrix symmetric',
            wrong: '$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\\\ 0 & 0 \\end{pmatrix}$ is symmetric',
            right: 'its transpose is $2 \\times 3$, so $A^T \\neq A$; symmetric matrices are square',
          },
          {
            title: 'Orthogonal columns are not enough',
            wrong: '$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ is orthogonal',
            right: '$Q^TQ = \\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix} \\neq I$: the columns must also have length $1$',
          },
          {
            title: 'Confusing idempotent and involutory',
            wrong: '$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}^2 = I$, so it is idempotent',
            right: '$A^2 = I$ is involutory; idempotent means $A^2 = A$',
          },
          {
            title: 'A skew-symmetric matrix with a nonzero diagonal',
            wrong: '$\\begin{pmatrix} 1 & 2 \\\\ -2 & 1 \\end{pmatrix}$ is skew-symmetric',
            right: '$a_{ii} = -a_{ii}$ forces zeros on the diagonal',
          },
        ],
        related: ['trace', 'rank', 'matrix-powers'],
        builtOn: [
          { label: 'Types of matrices (lesson)', url: ruleUrl('lesson.la.matrix.types') },
          { label: 'Symmetric matrix', url: ruleUrl('la.symmetric-matrix-definition') },
          { label: 'Orthogonal matrix', url: ruleUrl('la.orthogonal-matrix-definition') },
          { label: 'Idempotent rank and trace', url: ruleUrl('la.idempotent-rank-trace') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Products, inverses, rank, trace and types', blurb: 'Composite · each opens its own page' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/determinants/methods', label: 'Determinants' },
      { url: '/linear-algebra/linear-systems/methods', label: 'Linear systems' },
      { url: '/linear-algebra/eigen/methods', label: 'Eigenvalues and eigenvectors' },
    ],
  },
};

export default matrixMethods;
