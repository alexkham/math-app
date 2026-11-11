// decompositions.methods.js (linear algebra)
// Single data source for /linear-algebra/decompositions/methods (hub) and
// /linear-algebra/decompositions/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/decompositions/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/decompositions/methods';

const decompositionsMethods = {
  hubPath: HUB,
  hubLabel: 'decomposition methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'lu-decomposition',
      slug: 'lu-decomposition',
      name: 'How to find the LU decomposition',
      description: 'Run Gaussian elimination, keep the multipliers in L and the result in U; pivot when a zero appears.',
      uses: ['Gaussian elimination', 'multipliers', 'permutation matrix'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the LU Decomposition (A = LU and PA = LU) | Learn Math Class',
        description: 'Find the LU decomposition of a matrix: eliminate, store the multipliers in L, read off U, check LU = A. Pivoting with PA = LU and solving systems, examples.',
        keywords: ['lu decomposition', 'how to find lu decomposition', 'lu factorization example', 'pa = lu pivoting', 'solve system with lu'],
      },
      page: {
        h1: 'How to Find the LU Decomposition',
        lead:
          'Factor a square matrix as $A = LU$: $U$ is the upper triangular matrix that Gaussian elimination produces, and $L$ is lower triangular with $1$s on the diagonal and the elimination multipliers below it.',
        recognize:
          'A square matrix and the words **LU decomposition** or **LU factorization**, or several systems $A\\mathbf{x} = \\mathbf{b}$ with the same $A$ and different right-hand sides. Forms: $\\begin{pmatrix} 2 & 1 & 1 \\\\ 4 & 3 & 3 \\\\ 8 & 7 & 9 \\end{pmatrix}$, $\\begin{pmatrix} 4 & 3 \\\\ 6 & 3 \\end{pmatrix}$. Test: if a zero lands in a pivot position during elimination, you need $PA = LU$.',
        recognizeNote: `The factorization is built in the ${link('lesson.la.decompositions.lower-upper', 'LU decomposition lesson')}; elimination itself is the [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination) method.`,
        methods: [
          {
            name: 'No pivoting',
            tag: 'all pivots nonzero',
            preferred: true,
            formula: 'A = LU, \\quad l_{ij} = \\text{multiplier used to clear entry } (i, j)',
            body: `Works when every pivot is nonzero (${link('la.lu-decomposition', 'LU decomposition')}).`,
          },
          {
            name: 'Partial pivoting',
            tag: 'zero or small pivot',
            formula: 'PA = LU',
            body: `Swap rows to bring a nonzero, preferably the largest, entry into the pivot position, and record the swaps in $P$ (${link('la.pa-lu-partial-pivoting', 'partial pivoting')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 4 & 3 & 3 \\\\ 8 & 7 & 9 \\end{pmatrix}$',
          items: [
            {
              title: 'Check the first pivot.',
              body: 'It must be nonzero. If it is zero, swap rows and switch to $PA = LU$.',
              state: '$a_{11} = 2 \\neq 0$',
            },
            {
              title: 'Clear column 1 and record the multipliers.',
              body: 'The multiplier is $l_{i1} = a_{i1}/a_{11}$; subtract $l_{i1}$ times row 1 from row $i$.',
              state: '$l_{21} = 2$, $l_{31} = 4$: rows 2 and 3 become $(0, 1, 1)$, $(0, 3, 5)$',
            },
            {
              title: 'Clear column 2 the same way.',
              body: 'Use the new pivot in row 2; continue until the matrix is upper triangular.',
              state: '$l_{32} = \\frac{3}{1} = 3$: row 3 becomes $(0, 0, 2)$',
            },
            {
              title: 'Read off U and L.',
              body: '$U$ is the final matrix. $L$ has $1$s on the diagonal and each multiplier in the position of the zero it created.',
              state: '$U = \\begin{pmatrix} 2 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 2 \\end{pmatrix}$, $L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 4 & 3 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Check by multiplying.',
              body: `$LU$ must give back $A$. As a bonus, the determinant is the product of the pivots (${link('la.determinant-via-lu', 'determinant via LU')}).`,
              state: '$LU = A$ ✓, $\\det(A) = 2 \\cdot 1 \\cdot 2 = 4$',
            },
          ],
        },
        examples: [
          {
            title: 'a two-by-two matrix',
            badge: 'one multiplier',
            lines: [
              { math: '$A = \\begin{pmatrix} 4 & 3 \\\\ 6 & 3 \\end{pmatrix}$: $l_{21} = \\frac{6}{4} = \\frac{3}{2}$', why: 'row 2 minus $\\frac{3}{2}$ row 1' },
              { math: '$L = \\begin{pmatrix} 1 & 0 \\\\ \\frac{3}{2} & 1 \\end{pmatrix}$, $U = \\begin{pmatrix} 4 & 3 \\\\ 0 & -\\frac{3}{2} \\end{pmatrix}$', why: '$3 - \\frac{3}{2} \\cdot 3 = -\\frac{3}{2}$', answer: true },
            ],
          },
          {
            title: 'solving with L and U',
            badge: 'two triangular solves',
            lines: [
              { math: '$A\\mathbf{x} = (4, 10, 24)$ with the factors above', why: 'solve $L\\mathbf{y} = \\mathbf{b}$, then $U\\mathbf{x} = \\mathbf{y}$' },
              { math: 'forward: $y_1 = 4$, $y_2 = 10 - 2 \\cdot 4 = 2$, $y_3 = 24 - 4 \\cdot 4 - 3 \\cdot 2 = 2$', why: 'top to bottom' },
              { math: 'back: $x_3 = 1$, $x_2 = 2 - 1 = 1$, $x_1 = \\frac{4 - 1 - 1}{2} = 1$', why: 'bottom to top' },
              { math: '$\\mathbf{x} = (1, 1, 1)$', why: 'check: $A\\mathbf{x} = (4, 10, 24)$ ✓', answer: true },
            ],
            note: `These are the ${link('la.lu-solve-steps', 'LU solve steps')}; the second half is [back substitution](!/linear-algebra/linear-systems/methods/back-substitution).`,
          },
          {
            title: 'a zero pivot',
            badge: 'PA = LU',
            lines: [
              { math: '$A = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 2 & 7 & 9 \\end{pmatrix}$: $a_{11} = 0$, swap rows 1 and 2', why: 'record the swap in $P$' },
              { math: 'on $PA$: $l_{21} = 0$, $l_{31} = 2$, then $l_{32} = 3$', why: 'same elimination as before' },
              { math: '$P = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$, $L = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 2 & 3 & 1 \\end{pmatrix}$, $U = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 4 \\end{pmatrix}$', why: '$\\det(A) = -4$: one swap flips the sign', answer: true },
            ],
          },
        ],
        examplesAfter: 'Factor your own matrix in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'Each elimination step is a multiplication by a simple lower triangular matrix. Undoing all of them at once just puts the multipliers back in their places, which is why $L$ costs no extra arithmetic. Once $A = LU$ is stored, every new right-hand side needs only two quick triangular solves instead of a full elimination. Watch $L$ fill in the [LU decomposition visualizer](!/linear-algebra/visual-tools/lu-decomposition).',
        },
        pitfalls: [
          {
            title: 'Storing the negated multipliers',
            wrong: '$L = \\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ -4 & -3 & 1 \\end{pmatrix}$',
            right: '$L$ holds the multipliers that were subtracted: $2$, $4$ and $3$',
          },
          {
            title: 'Pushing on with a zero pivot',
            wrong: 'dividing by $a_{11} = 0$ in $\\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$',
            right: 'swap the rows first and write $PA = LU$',
          },
          {
            title: 'Scaling rows during elimination',
            wrong: 'dividing row 1 by $2$ to make the pivot $1$',
            right: 'only subtract multiples of pivot rows; the pivots stay on the diagonal of $U$',
          },
          {
            title: 'Forgetting P when solving',
            wrong: 'solving $L\\mathbf{y} = \\mathbf{b}$ after factoring $PA = LU$',
            right: 'solve $L\\mathbf{y} = P\\mathbf{b}$: permute $\\mathbf{b}$ the same way',
          },
        ],
        related: ['cholesky-decomposition', 'qr-decomposition', 'which-decomposition'],
        builtOn: [
          { label: 'LU decomposition (lesson)', url: ruleUrl('lesson.la.decompositions.lower-upper') },
          { label: 'LU decomposition', url: ruleUrl('la.lu-decomposition') },
          { label: 'Partial pivoting, PA = LU', url: ruleUrl('la.pa-lu-partial-pivoting') },
          { label: 'Solving with LU', url: ruleUrl('la.lu-solve-steps') },
        ],
      },
    },
    {
      id: 'qr-decomposition',
      slug: 'qr-decomposition',
      name: 'How to find the QR decomposition',
      description: 'Run Gram-Schmidt on the columns: the orthonormal vectors form Q, the coefficients form R.',
      uses: ['Gram-Schmidt', 'dot product', 'normalization'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 2 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the QR Decomposition (Gram-Schmidt) | Learn Math Class',
        description: 'Find the QR decomposition with Gram-Schmidt: normalize the columns into Q, collect dot products and lengths in R, check QR = A. Least squares by QR, examples.',
        keywords: ['qr decomposition', 'how to find qr decomposition', 'qr factorization example', 'qr gram-schmidt', 'least squares qr'],
      },
      page: {
        h1: 'How to Find the QR Decomposition',
        lead:
          'Write $A = QR$ with $Q$ having orthonormal columns and $R$ upper triangular. Gram-Schmidt on the columns of $A$ gives both: the unit vectors are $Q$, and the dot products and lengths it computes along the way are $R$.',
        recognize:
          'A matrix with independent columns, often tall, and the words **QR decomposition** or **QR factorization**; a least-squares problem to solve stably; or an orthonormal basis of the column space. Forms: $\\begin{pmatrix} 1 & 3 \\\\ 2 & 3 \\\\ 2 & 0 \\end{pmatrix}$, $\\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}$. Test: the columns must be independent; otherwise a zero vector appears during the process.',
        recognizeNote: `The factorization is defined in the ${link('lesson.la.decompositions.qr', 'QR decomposition lesson')}; the column process is the [Gram-Schmidt](!/linear-algebra/orthogonality/methods/gram-schmidt) method.`,
        methods: [
          {
            name: 'Gram-Schmidt',
            tag: 'by hand',
            preferred: true,
            formula: 'r_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j \\ (i < j), \\quad r_{jj} = \\|\\mathbf{u}_j\\|',
            body: `Orthonormalize the columns in order and keep every coefficient (${link('la.qr-gram-schmidt-r-entries', 'entries of R')}).`,
          },
          {
            name: 'Householder reflections',
            tag: 'by computer',
            formula: 'H = I - 2\\mathbf{w}\\mathbf{w}^T, \\quad H_n \\cdots H_1 A = R',
            body: `Reflect each column onto a coordinate axis; more stable in floating point (${link('lesson.la.decompositions.qr.3', 'Householder reflections')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 3 \\\\ 2 & 0 \\end{pmatrix}$',
          items: [
            {
              title: 'Normalize the first column.',
              body: '$r_{11} = \\|\\mathbf{a}_1\\|$ and $\\mathbf{q}_1 = \\mathbf{a}_1 / r_{11}$.',
              state: '$r_{11} = \\sqrt{1 + 4 + 4} = 3$, $\\mathbf{q}_1 = \\frac{1}{3}(1, 2, 2)$',
            },
            {
              title: 'Dot the next column with the unit vectors found so far.',
              body: 'Each $r_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ goes above the diagonal in column $j$ of $R$.',
              state: '$r_{12} = \\frac{1}{3}(3 + 6 + 0) = 3$',
            },
            {
              title: 'Subtract and normalize.',
              body: '$\\mathbf{u}_j = \\mathbf{a}_j - \\sum_{i < j} r_{ij}\\mathbf{q}_i$; its length is $r_{jj}$, and $\\mathbf{q}_j = \\mathbf{u}_j / r_{jj}$.',
              state: '$\\mathbf{u}_2 = (3, 3, 0) - (1, 2, 2) = (2, 1, -2)$, $r_{22} = 3$, $\\mathbf{q}_2 = \\frac{1}{3}(2, 1, -2)$',
            },
            {
              title: 'Assemble Q and R.',
              body: 'The $\\mathbf{q}_j$ are the columns of $Q$; the $r_{ij}$ fill $R$ on and above the diagonal.',
              state: '$Q = \\frac{1}{3}\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\\\ 2 & -2 \\end{pmatrix}$, $R = \\begin{pmatrix} 3 & 3 \\\\ 0 & 3 \\end{pmatrix}$',
            },
            {
              title: 'Check.',
              body: '$Q^TQ = I$ and $QR = A$. The diagonal of $R$ must be positive.',
              state: '$QR = \\begin{pmatrix} 1 & 3 \\\\ 2 & 3 \\\\ 2 & 0 \\end{pmatrix}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a square matrix',
            badge: '2 by 2',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}$: $r_{11} = 5$, $\\mathbf{q}_1 = (\\frac{3}{5}, \\frac{4}{5})$', why: 'length of column 1' },
              { math: '$r_{12} = \\frac{3 + 8}{5} = \\frac{11}{5}$, $\\mathbf{u}_2 = (1, 2) - \\frac{11}{5}\\mathbf{q}_1 = (-\\frac{8}{25}, \\frac{6}{25})$', why: 'remove the $\\mathbf{q}_1$ part' },
              { math: '$r_{22} = \\frac{2}{5}$, $Q = \\begin{pmatrix} \\frac{3}{5} & -\\frac{4}{5} \\\\ \\frac{4}{5} & \\frac{3}{5} \\end{pmatrix}$, $R = \\begin{pmatrix} 5 & \\frac{11}{5} \\\\ 0 & \\frac{2}{5} \\end{pmatrix}$', why: 'check: $\\det R = 2 = \\det A$', answer: true },
            ],
          },
          {
            title: 'least squares with QR',
            badge: 'triangular solve',
            lines: [
              { math: 'the matrix above, $\\mathbf{b} = (0, 3, 6)$: $Q^T\\mathbf{b} = \\frac{1}{3}(0 + 6 + 12,\\; 0 + 3 - 12) = (6, -3)$', why: 'no normal equations needed' },
              { math: '$\\begin{pmatrix} 3 & 3 \\\\ 0 & 3 \\end{pmatrix}\\hat{\\mathbf{x}} = (6, -3)$', why: 'back-substitute' },
              { math: '$\\hat{\\mathbf{x}} = (3, -1)$', why: 'matches $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$', answer: true },
            ],
          },
        ],
        examplesAfter: 'The second example is the [least-squares](!/linear-algebra/orthogonality/methods/least-squares) problem solved without forming $A^TA$. Try other matrices in the [QR decomposition visualizer](!/linear-algebra/visual-tools/qr-decomposition).',
        visual: {
          caption:
            'Column $j$ of $A$ uses only the first $j$ directions $\\mathbf{q}_1, \\dots, \\mathbf{q}_j$, which is why $R$ is upper triangular. $Q$ holds the perpendicular directions, and $R$ says how much of each direction every column contains. Watch the columns being straightened in the [QR decomposition visualizer](!/linear-algebra/visual-tools/qr-decomposition).',
        },
        pitfalls: [
          {
            title: 'Writing 1 on the diagonal of R',
            wrong: '$R = \\begin{pmatrix} 3 & 3 \\\\ 0 & 1 \\end{pmatrix}$',
            right: '$r_{22} = \\|\\mathbf{u}_2\\| = 3$, the length before normalizing',
          },
          {
            title: 'Dotting with the unnormalized vector',
            wrong: '$r_{12} = \\mathbf{a}_1 \\cdot \\mathbf{a}_2 = 9$',
            right: '$r_{12} = \\mathbf{q}_1 \\cdot \\mathbf{a}_2 = 3$; use the unit vector',
          },
          {
            title: 'Expecting Q times its transpose to be I',
            wrong: '$QQ^T = I$ for the $3 \\times 2$ matrix $Q$ above',
            right: '$Q^TQ = I$, but $QQ^T$ is the projection onto the column space of $A$',
            note: `See ${link('la.orthonormal-columns-projection', 'projection with orthonormal columns')}.`,
          },
        ],
        related: ['lu-decomposition', 'svd', 'which-decomposition'],
        builtOn: [
          { label: 'QR decomposition (lesson)', url: ruleUrl('lesson.la.decompositions.qr') },
          { label: 'QR decomposition', url: ruleUrl('la.qr-decomposition') },
          { label: 'Entries of R from Gram-Schmidt', url: ruleUrl('la.qr-gram-schmidt-r-entries') },
          { label: 'Least squares via QR', url: ruleUrl('la.least-squares-via-qr') },
        ],
      },
    },
    {
      id: 'cholesky-decomposition',
      slug: 'cholesky-decomposition',
      name: 'How to find the Cholesky decomposition',
      description: 'Symmetric positive definite matrix: build L column by column with square roots so that $A = LL^T$.',
      uses: ['square roots', 'symmetric matrix', 'positive definiteness'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Cholesky Decomposition (A = LLᵀ) | Learn Math Class',
        description: 'Find the Cholesky decomposition A = LLᵀ of a symmetric positive definite matrix column by column, test positive definiteness, solve systems. Examples.',
        keywords: ['cholesky decomposition', 'how to find cholesky decomposition', 'cholesky factorization example', 'positive definite test', 'a = llt'],
      },
      page: {
        h1: 'How to Find the Cholesky Decomposition',
        lead:
          'A symmetric positive definite matrix factors as $A = LL^T$ with $L$ lower triangular and a positive diagonal. Compute $L$ column by column: a square root for each diagonal entry, a division for each entry below it.',
        recognize:
          'A symmetric matrix with positive diagonal entries and the words **Cholesky** or **positive definite**, a covariance or Gram matrix, or a request to factor $A = LL^T$. Forms: $\\begin{pmatrix} 9 & 6 \\\\ 6 & 5 \\end{pmatrix}$, $\\begin{pmatrix} 4 & 12 & -16 \\\\ 12 & 37 & -43 \\\\ -16 & -43 & 98 \\end{pmatrix}$. Test: $A = A^T$, and every number under a square root stays positive.',
        recognizeNote: `The method is in the ${link('lesson.la.decompositions.cholesky', 'Cholesky lesson')}; it needs a ${link('lesson.la.decompositions.cholesky.2', 'symmetric positive definite')} matrix.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 4 & 12 & -16 \\\\ 12 & 37 & -43 \\\\ -16 & -43 & 98 \\end{pmatrix}$',
          items: [
            {
              title: 'Check symmetry.',
              body: `Compare $a_{ij}$ with $a_{ji}$. A matrix that is not symmetric has no Cholesky factor; use the [LU decomposition](!${HUB}/lu-decomposition).`,
              state: '$a_{12} = a_{21} = 12$, $a_{13} = a_{31} = -16$, $a_{23} = a_{32} = -43$ ✓',
            },
            {
              title: 'Fill column 1.',
              body: 'Take $l_{11} = \\sqrt{a_{11}}$, then divide the rest of column 1 by it.',
              state: '$l_{11} = 2$, $l_{21} = \\frac{12}{2} = 6$, $l_{31} = \\frac{-16}{2} = -8$',
            },
            {
              title: 'Fill column 2.',
              body: `Subtract the squares already in the row before taking the root (${link('la.cholesky-diagonal-formula', 'diagonal formula')}); subtract the products before dividing (${link('la.cholesky-off-diagonal-formula', 'off-diagonal formula')}).`,
              state: '$l_{22} = \\sqrt{37 - 6^2} = 1$, $l_{32} = \\frac{-43 - (-8)(6)}{1} = 5$',
            },
            {
              title: 'Fill the last diagonal entry.',
              body: 'A zero or negative number under the root means $A$ is not positive definite: stop.',
              state: '$l_{33} = \\sqrt{98 - (-8)^2 - 5^2} = \\sqrt{9} = 3$',
            },
            {
              title: 'Check by multiplying.',
              body: '$LL^T$ must give back $A$.',
              state: '$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 6 & 1 & 0 \\\\ -8 & 5 & 3 \\end{pmatrix}$, $LL^T = A$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a two-by-two matrix',
            badge: 'basic',
            lines: [
              { math: '$A = \\begin{pmatrix} 9 & 6 \\\\ 6 & 5 \\end{pmatrix}$: $l_{11} = 3$, $l_{21} = \\frac{6}{3} = 2$', why: 'column 1' },
              { math: '$l_{22} = \\sqrt{5 - 2^2} = 1$', why: 'subtract the square first' },
              { math: '$L = \\begin{pmatrix} 3 & 0 \\\\ 2 & 1 \\end{pmatrix}$', why: 'check: $LL^T = A$ ✓', answer: true },
            ],
          },
          {
            title: 'not positive definite',
            badge: 'test fails',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\end{pmatrix}$: $l_{11} = 1$, $l_{21} = 2$', why: 'symmetric, positive diagonal' },
              { math: '$l_{22} = \\sqrt{3 - 2^2} = \\sqrt{-1}$', why: 'negative under the root' },
              { math: 'no Cholesky factor: $A$ is not positive definite', why: 'eigenvalues $2 \\pm \\sqrt{5}$, one negative', answer: true },
            ],
            note: `Running the algorithm is the ${link('lesson.la.decompositions.cholesky.7', 'Cholesky positive definiteness test')}.`,
          },
          {
            title: 'solving a system',
            badge: 'two triangular solves',
            lines: [
              { math: '$\\begin{pmatrix} 4 & 2 \\\\ 2 & 10 \\end{pmatrix}\\mathbf{x} = (6, 12)$: $L = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$', why: '$l_{22} = \\sqrt{10 - 1} = 3$' },
              { math: '$L\\mathbf{y} = (6, 12)$: $\\mathbf{y} = (3, 3)$', why: 'forward substitution' },
              { math: '$L^T\\mathbf{x} = (3, 3)$: $\\mathbf{x} = (1, 1)$', why: 'back substitution', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Cholesky is a square root for matrices: as $9 = 3 \\cdot 3$, so $A = LL^T$. Each diagonal entry of $L$ is what is left of $a_{jj}$ after the earlier columns have taken their share, and positive definiteness guarantees that the share never uses up the whole entry. Follow the entries one by one in the [Cholesky visualizer](!/linear-algebra/visual-tools/cholesky-decomposition).',
        },
        pitfalls: [
          {
            title: 'Dropping the subtracted sum',
            wrong: '$l_{22} = \\sqrt{37}$',
            right: '$l_{22} = \\sqrt{37 - l_{21}^2} = \\sqrt{37 - 36} = 1$',
          },
          {
            title: 'Dividing by the entry of A instead of L',
            wrong: '$l_{21} = \\frac{a_{21}}{a_{11}} = \\frac{12}{4} = 3$',
            right: '$l_{21} = \\frac{a_{21}}{l_{11}} = \\frac{12}{2} = 6$',
            note: 'Dividing by $a_{11}$ gives the LU multiplier, not the Cholesky entry.',
          },
          {
            title: 'Using it on a matrix that is not symmetric',
            wrong: 'Cholesky on $\\begin{pmatrix} 4 & 2 \\\\ 0 & 5 \\end{pmatrix}$',
            right: '$LL^T$ is always symmetric, so no such factor exists; use LU',
          },
          {
            title: 'Taking a negative square root',
            wrong: '$l_{11} = -2$',
            right: 'take the positive root; a positive diagonal makes $L$ unique',
          },
        ],
        related: ['lu-decomposition', 'spectral-decomposition', 'which-decomposition'],
        builtOn: [
          { label: 'Cholesky decomposition (lesson)', url: ruleUrl('lesson.la.decompositions.cholesky') },
          { label: 'Cholesky decomposition', url: ruleUrl('la.cholesky-decomposition') },
          { label: 'Cholesky diagonal formula', url: ruleUrl('la.cholesky-diagonal-formula') },
          { label: 'Cholesky off-diagonal formula', url: ruleUrl('la.cholesky-off-diagonal-formula') },
        ],
      },
    },
    {
      id: 'spectral-decomposition',
      slug: 'spectral-decomposition',
      name: 'How to find the spectral decomposition',
      description: 'Symmetric matrix: orthonormal eigenvectors and eigenvalues give $A = QDQ^T$, a sum of projections.',
      uses: ['eigenvalues', 'eigenvectors', 'Gram-Schmidt'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Spectral Decomposition (A = QDQᵀ) | Learn Math Class',
        description: 'Find the spectral decomposition A = QDQᵀ of a symmetric matrix: eigenvalues, orthonormal eigenvectors, Gram-Schmidt for repeats, outer products. Examples.',
        keywords: ['spectral decomposition', 'how to find spectral decomposition', 'orthogonal diagonalization', 'symmetric matrix eigendecomposition', 'spectral theorem example'],
      },
      page: {
        h1: 'How to Find the Spectral Decomposition',
        lead:
          'A real symmetric matrix can always be written $A = QDQ^T$: $Q$ is orthogonal with unit eigenvectors as columns, and $D$ is diagonal with the eigenvalues. Equivalently, $A = \\lambda_1\\mathbf{q}_1\\mathbf{q}_1^T + \\cdots + \\lambda_n\\mathbf{q}_n\\mathbf{q}_n^T$.',
        recognize: `A symmetric matrix ($A = A^T$) and the words **spectral decomposition**, **orthogonally diagonalize** or **principal axes**, or a quadratic form to simplify. Forms: $\\begin{pmatrix} 2 & 2 \\\\ 2 & 5 \\end{pmatrix}$, $\\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$. Test: is $A$ symmetric? If not, use [diagonalization](!/linear-algebra/eigen/methods/diagonalization) or the [SVD](!${HUB}/svd).`,
        recognizeNote: `The decomposition is in the ${link('lesson.la.decompositions.spectral', 'spectral decomposition lesson')}; the ${link('la.spectral-theorem', 'spectral theorem')} guarantees it for every real symmetric matrix.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 2 \\\\ 2 & 5 \\end{pmatrix}$',
          items: [
            {
              title: 'Check symmetry.',
              body: 'Only for a symmetric matrix are real eigenvalues and an orthonormal set of eigenvectors guaranteed.',
              state: '$a_{12} = a_{21} = 2$ ✓',
            },
            {
              title: 'Find the eigenvalues.',
              body: `Solve the ${link('la.characteristic-equation', 'characteristic equation')}, as in the [eigenvalues](!/linear-algebra/eigen/methods/eigenvalues) method.`,
              state: '$\\lambda^2 - 7\\lambda + 6 = 0$, $\\lambda_1 = 6$, $\\lambda_2 = 1$',
            },
            {
              title: 'Find an eigenvector for each eigenvalue.',
              body: 'Solve $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ as in the [eigenvectors](!/linear-algebra/eigen/methods/eigenvectors) method. For a repeated eigenvalue, orthogonalize its eigenspace with [Gram-Schmidt](!/linear-algebra/orthogonality/methods/gram-schmidt).',
              state: '$\\lambda = 6$: $(1, 2)$; $\\lambda = 1$: $(2, -1)$',
            },
            {
              title: 'Normalize and assemble.',
              body: 'Divide each eigenvector by its length. Column $i$ of $Q$ must match diagonal entry $i$ of $D$.',
              state: '$Q = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 & 2 \\\\ 2 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 6 & 0 \\\\ 0 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Check with the outer-product form.',
              body: `Add the terms $\\lambda_i\\mathbf{q}_i\\mathbf{q}_i^T$ (${link('la.spectral-decomposition', 'spectral decomposition')}); the sum must be $A$.`,
              state: '$\\frac{6}{5}\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} + \\frac{1}{5}\\begin{pmatrix} 4 & -2 \\\\ -2 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 2 & 5 \\end{pmatrix}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'eigenvalues of opposite sign',
            badge: '2 by 2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$: $\\lambda = 3, -1$', why: 'trace $2$, determinant $-3$' },
              { math: '$\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$, $\\mathbf{q}_2 = \\frac{1}{\\sqrt{2}}(1, -1)$', why: 'already orthogonal' },
              { math: '$A = \\frac{3}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} - \\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix}$', why: 'a sum of two projections', answer: true },
            ],
          },
          {
            title: 'a repeated eigenvalue',
            badge: 'Gram-Schmidt inside',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$: $\\lambda = 4, 1, 1$', why: '$A$ is $I$ plus the all-ones matrix' },
              { math: '$\\lambda = 4$: $\\frac{1}{\\sqrt{3}}(1, 1, 1)$; $\\lambda = 1$: the plane $x + y + z = 0$', why: 'solve $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$' },
              { math: 'basis $(1, -1, 0), (1, 0, -1)$ becomes $(1, -1, 0), (\\frac{1}{2}, \\frac{1}{2}, -1)$', why: 'Gram-Schmidt in the eigenspace' },
              { math: '$Q = \\begin{pmatrix} \\frac{1}{\\sqrt{3}} & \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{6}} \\\\ \\frac{1}{\\sqrt{3}} & -\\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{6}} \\\\ \\frac{1}{\\sqrt{3}} & 0 & -\\frac{2}{\\sqrt{6}} \\end{pmatrix}$, $D = \\operatorname{diag}(4, 1, 1)$', why: 'normalize all three', answer: true },
            ],
          },
          {
            title: 'a matrix square root',
            badge: 'function of A',
            lines: [
              { math: '$A = \\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}$: $\\lambda = 9, 1$ with the same $\\mathbf{q}_1, \\mathbf{q}_2$ as the first example', why: 'trace $10$, determinant $9$' },
              { math: '$\\sqrt{A} = 3 \\cdot \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} + 1 \\cdot \\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix}$', why: 'square root of each eigenvalue' },
              { math: '$\\sqrt{A} = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$', why: 'check: its square is $A$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A symmetric matrix stretches space along perpendicular axes, its eigenvectors, by its eigenvalues. $Q^T$ turns those axes onto the coordinate axes, $D$ stretches, and $Q$ turns them back. Each term $\\lambda_i\\mathbf{q}_i\\mathbf{q}_i^T$ is the projection onto one axis, scaled by its eigenvalue. Explore it in the [spectral decomposition visualizer](!/linear-algebra/visual-tools/spectral-decomposition).',
        },
        pitfalls: [
          {
            title: 'Leaving the eigenvectors unnormalized',
            wrong: '$Q = \\begin{pmatrix} 1 & 2 \\\\ 2 & -1 \\end{pmatrix}$, which gives $QDQ^T = 5A$',
            right: 'divide each column by $\\sqrt{5}$ so that $Q^T = Q^{-1}$',
          },
          {
            title: 'Mismatched order',
            wrong: '$Q = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 & 2 \\\\ 2 & -1 \\end{pmatrix}$ with $D = \\operatorname{diag}(1, 6)$',
            right: 'column 1 belongs to $\\lambda = 6$: $D = \\operatorname{diag}(6, 1)$',
          },
          {
            title: 'Skipping Gram-Schmidt in a repeated eigenspace',
            wrong: 'using $(1, -1, 0)$ and $(1, 0, -1)$, normalized, as columns of $Q$',
            right: 'they are eigenvectors but not orthogonal; orthogonalize them first',
          },
          {
            title: 'Using it on a matrix that is not symmetric',
            wrong: '$\\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix} = QDQ^T$',
            right: 'its eigenvectors $(1, 0)$ and $(1, 1)$ are not orthogonal; use $PDP^{-1}$',
          },
        ],
        related: ['svd', 'cholesky-decomposition', 'which-decomposition'],
        builtOn: [
          { label: 'Spectral decomposition (lesson)', url: ruleUrl('lesson.la.decompositions.spectral') },
          { label: 'Spectral theorem', url: ruleUrl('la.spectral-theorem') },
          { label: 'Spectral decomposition', url: ruleUrl('la.spectral-decomposition') },
          { label: 'Characteristic equation', url: ruleUrl('la.characteristic-equation') },
        ],
      },
    },
    {
      id: 'svd',
      slug: 'svd',
      name: 'How to find the singular value decomposition',
      description: 'Eigenvalues of $A^TA$ give the singular values and $V$; then $\\mathbf{u}_i = A\\mathbf{v}_i / \\sigma_i$ gives $U$.',
      uses: ['eigenvalues', 'spectral decomposition', 'normalization'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Singular Value Decomposition (SVD) | Learn Math Class',
        description: 'Find the singular value decomposition A = UΣVᵀ: eigenvalues of AᵀA, singular values, V, then each u = Av/σ. Wide matrices, low-rank approximation.',
        keywords: ['singular value decomposition', 'how to find svd', 'svd example', 'singular values', 'svd by hand'],
      },
      page: {
        h1: 'How to Find the Singular Value Decomposition',
        lead:
          'Every matrix factors as $A = U\\Sigma V^T$ with $U$ and $V$ orthogonal and $\\Sigma$ diagonal, holding the singular values $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$. Get $V$ and the $\\sigma_i$ from the symmetric matrix $A^TA$, then build $U$ from them.',
        recognize:
          'Any matrix, square or not, and the words **SVD**, **singular values**, **pseudoinverse**, **low-rank approximation**, **condition number** or **2-norm**. Forms: $\\begin{pmatrix} 3 & 0 \\\\ 4 & 5 \\end{pmatrix}$, $\\begin{pmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{pmatrix}$. Test: for a wide matrix, $AA^T$ is the smaller product; start from it and swap the roles of $U$ and $V$.',
        recognizeNote: `The SVD is defined in the ${link('lesson.la.decompositions.svd', 'SVD lesson')}; the ${link('la.singular-values', 'singular values')} are the square roots of the eigenvalues of $A^TA$.`,
        methods: [
          {
            name: 'Start from the columns',
            tag: 'tall or square',
            preferred: true,
            formula: 'A^TA\\,\\mathbf{v}_i = \\sigma_i^2\\mathbf{v}_i, \\quad \\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i',
            body: 'Eigenvectors of $A^TA$ give $V$; each $\\mathbf{u}_i$ follows from its $\\mathbf{v}_i$.',
          },
          {
            name: 'Start from the rows',
            tag: 'wide',
            formula: 'AA^T\\,\\mathbf{u}_i = \\sigma_i^2\\mathbf{u}_i, \\quad \\mathbf{v}_i = \\frac{1}{\\sigma_i}A^T\\mathbf{u}_i',
            body: 'For a wide $A$ the matrix $AA^T$ is smaller; get $U$ first, then each $\\mathbf{v}_i$.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 3 & 0 \\\\ 4 & 5 \\end{pmatrix}$',
          items: [
            {
              title: 'Form the product of the transpose with A.',
              body: '$A^TA$ is symmetric and its eigenvalues are never negative.',
              state: '$A^TA = \\begin{pmatrix} 25 & 20 \\\\ 20 & 25 \\end{pmatrix}$',
            },
            {
              title: 'Find its eigenvalues and take square roots.',
              body: 'Order them from largest to smallest; the square roots are the singular values.',
              state: '$\\lambda = 45, 5$, so $\\sigma_1 = \\sqrt{45} = 3\\sqrt{5}$, $\\sigma_2 = \\sqrt{5}$',
            },
            {
              title: 'Find orthonormal eigenvectors for V.',
              body: `This is the [spectral decomposition](!${HUB}/spectral-decomposition) of $A^TA$. Keep the same order as the $\\sigma_i$.`,
              state: '$\\mathbf{v}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$, $\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1)$',
            },
            {
              title: 'Compute each column of U from its partner in V.',
              body: 'For each nonzero $\\sigma_i$, $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$. If $U$ needs more columns, extend to an orthonormal basis.',
              state: '$\\mathbf{u}_1 = \\frac{1}{3\\sqrt{5}} \\cdot \\frac{1}{\\sqrt{2}}(3, 9) = \\frac{1}{\\sqrt{10}}(1, 3)$, $\\mathbf{u}_2 = \\frac{1}{\\sqrt{10}}(3, -1)$',
            },
            {
              title: 'Assemble and check.',
              body: `$U\\Sigma V^T$ must give back $A$, and the squared singular values must add up to the sum of the squared entries (${link('la.frobenius-norm-via-singular-values', 'Frobenius norm')}).`,
              state: '$U = \\frac{1}{\\sqrt{10}}\\begin{pmatrix} 1 & 3 \\\\ 3 & -1 \\end{pmatrix}$, $\\Sigma = \\begin{pmatrix} 3\\sqrt{5} & 0 \\\\ 0 & \\sqrt{5} \\end{pmatrix}$, $45 + 5 = 9 + 16 + 25$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a rank-one matrix',
            badge: 'one singular value',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}$, $\\lambda = 4, 0$', why: 'trace $4$, determinant $0$' },
              { math: '$\\sigma_1 = 2$, $\\mathbf{v}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$, $\\mathbf{u}_1 = \\frac{1}{2}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$', why: '$\\sigma_2 = 0$ adds nothing' },
              { math: '$A = 2\\,\\mathbf{u}_1\\mathbf{v}_1^T$, rank $1$', why: 'one nonzero singular value', answer: true },
            ],
          },
          {
            title: 'a wide matrix',
            badge: 'rows first',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{pmatrix}$: $AA^T = \\begin{pmatrix} 17 & 8 \\\\ 8 & 17 \\end{pmatrix}$, $\\lambda = 25, 9$', why: '$2 \\times 2$ instead of $3 \\times 3$' },
              { math: '$\\sigma_1 = 5$, $\\sigma_2 = 3$; $\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}(1, 1)$, $\\mathbf{u}_2 = \\frac{1}{\\sqrt{2}}(1, -1)$', why: 'eigenvectors of $AA^T$' },
              { math: '$\\mathbf{v}_1 = \\frac{1}{5}A^T\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}(1, 1, 0)$, $\\mathbf{v}_2 = \\frac{1}{3}A^T\\mathbf{u}_2 = \\frac{1}{3\\sqrt{2}}(1, -1, 4)$', why: 'the roles of $U$ and $V$ swap' },
              { math: '$\\mathbf{v}_3 = \\frac{1}{3}(2, -2, -1)$, $\\Sigma = \\begin{pmatrix} 5 & 0 & 0 \\\\ 0 & 3 & 0 \\end{pmatrix}$', why: 'unit vector orthogonal to $\\mathbf{v}_1, \\mathbf{v}_2$', answer: true },
            ],
          },
          {
            title: 'best rank-one approximation',
            badge: 'truncate',
            lines: [
              { math: 'for the matrix in the steps, keep only $\\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T$', why: 'drop the smallest singular value' },
              { math: '$A_1 = 3\\sqrt{5} \\cdot \\frac{1}{\\sqrt{10}}\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix} \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\end{pmatrix}$', why: '$\\frac{3\\sqrt{5}}{\\sqrt{20}} = \\frac{3}{2}$' },
              { math: '$A_1 = \\begin{pmatrix} 1.5 & 1.5 \\\\ 4.5 & 4.5 \\end{pmatrix}$, error $\\|A - A_1\\|_2 = \\sigma_2 = \\sqrt{5}$', why: 'no rank-one matrix is closer', answer: true },
            ],
          },
        ],
        examplesAfter: `Truncating the SVD is the ${link('lesson.la.decompositions.svd.8', 'low-rank approximation')} behind image compression.`,
        visual: {
          caption:
            'Every matrix maps the unit circle to an ellipse. $V^T$ turns the circle so that the right singular vectors line up with the axes, $\\Sigma$ stretches the axes by $\\sigma_1$ and $\\sigma_2$, and $U$ turns the result into place. The singular values are the semi-axes of the ellipse. Watch the circle deform in the [SVD visualizer](!/linear-algebra/visual-tools/singular-value-decomposition).',
        },
        pitfalls: [
          {
            title: 'Forgetting the square roots',
            wrong: '$\\sigma_1 = 45$, $\\sigma_2 = 5$',
            right: '$\\sigma_i = \\sqrt{\\lambda_i}$: $3\\sqrt{5}$ and $\\sqrt{5}$',
          },
          {
            title: 'Choosing the left vectors separately',
            wrong: 'taking unit eigenvectors of $AA^T$ for $U$ without looking at $V$',
            right: '$\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$; a separate choice can flip a sign and break $U\\Sigma V^T = A$',
          },
          {
            title: 'Confusing singular values with eigenvalues',
            wrong: 'the singular values of $\\begin{pmatrix} 3 & 0 \\\\ 4 & 5 \\end{pmatrix}$ are $3$ and $5$',
            right: 'those are its eigenvalues; the singular values are $3\\sqrt{5}$ and $\\sqrt{5}$',
            note: 'They agree only for symmetric matrices with no negative eigenvalues.',
          },
          {
            title: 'Dropping the transpose on V',
            wrong: '$A = U\\Sigma V$',
            right: '$A = U\\Sigma V^T$',
          },
        ],
        related: ['spectral-decomposition', 'qr-decomposition', 'which-decomposition'],
        builtOn: [
          { label: 'SVD (lesson)', url: ruleUrl('lesson.la.decompositions.svd') },
          { label: 'Singular value decomposition', url: ruleUrl('la.svd') },
          { label: 'Singular values', url: ruleUrl('la.singular-values') },
          { label: 'Frobenius norm via singular values', url: ruleUrl('la.frobenius-norm-via-singular-values') },
        ],
      },
    },

    // ═══ II. Strategy ═══════════════════════════════════════════════════
    {
      id: 'which-decomposition',
      slug: 'which-decomposition',
      name: 'Which matrix decomposition should I use?',
      description: 'A decision tree: the task and the shape of the matrix pick LU, Cholesky, QR, spectral or SVD.',
      uses: ['LU', 'Cholesky', 'QR', 'spectral', 'SVD'],
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Matrix Decomposition to Use? Decision Tree | Learn Math Class',
        description: 'Choose a matrix decomposition: LU or Cholesky for square systems, QR for least squares, spectral for symmetric eigenproblems, SVD for rank and approximation.',
        keywords: ['which matrix decomposition', 'lu vs qr vs svd', 'choosing a matrix factorization', 'matrix decomposition decision tree'],
      },
      page: {
        h1: 'Which Matrix Decomposition Should I Use?',
        lead:
          'Start with the task: solving a square system, fitting an overdetermined one, or understanding what the matrix does. Then let the shape and symmetry of the matrix choose among LU, Cholesky, QR, the spectral decomposition and the SVD.',
        recognize: `A matrix problem that a factorization would make easier, and a choice among the ${link('lesson.la.decompositions', 'five decompositions')}. Look at two things: what you must compute, and whether the matrix is square, symmetric or positive definite.`,
        tree: {
          rootId: 'task',
          svgW: 1050,
          nodes: {
            task: {
              type: 'q',
              text: 'What do you need?',
              children: [
                { label: 'solve a square system', to: 'spd' },
                { label: 'least squares, tall A', to: 'qr' },
                { label: 'eigen-structure, symmetric A', to: 'spectral' },
                { label: 'rank, norm, approximation', to: 'svd' },
              ],
            },
            spd: {
              type: 'q',
              text: 'Is A symmetric positive definite?',
              children: [
                { label: 'yes', to: 'chol' },
                { label: 'no', to: 'lu' },
              ],
            },
            chol: { type: 'leaf', to: 'cholesky-decomposition', short: 'Cholesky' },
            lu: { type: 'leaf', to: 'lu-decomposition', short: 'LU, with pivoting if needed' },
            qr: { type: 'leaf', to: 'qr-decomposition', short: 'QR' },
            spectral: { type: 'leaf', to: 'spectral-decomposition', short: 'Spectral decomposition' },
            svd: { type: 'leaf', to: 'svd', short: 'SVD' },
          },
          branches: [
            {
              condition: 'You must solve a square system $A\\mathbf{x} = \\mathbf{b}$, often for many right-hand sides, and $A$ is symmetric positive definite.',
              answer: `Use the [Cholesky decomposition](!${HUB}/cholesky-decomposition) $A = LL^T$: about half the work of LU and ${link('lesson.la.decompositions.cholesky.6', 'no pivoting needed')}.`,
            },
            {
              condition: 'You must solve a square system and $A$ is not symmetric positive definite.',
              answer: `Use the [LU decomposition](!${HUB}/lu-decomposition), with row swaps $PA = LU$ when a pivot is zero.`,
            },
            {
              condition: 'You have more equations than unknowns and want the least-squares solution.',
              answer: `Use the [QR decomposition](!${HUB}/qr-decomposition) and solve $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$; by hand, the [normal equations](!/linear-algebra/orthogonality/methods/least-squares) work too.`,
            },
            {
              condition: 'The matrix is symmetric and you need its eigenvalues, its principal axes, a quadratic form or a function of the matrix.',
              answer: `Use the [spectral decomposition](!${HUB}/spectral-decomposition) $A = QDQ^T$. For a square matrix that is not symmetric, use [diagonalization](!/linear-algebra/eigen/methods/diagonalization) instead.`,
            },
            {
              condition: 'The matrix has any shape and you need its rank, its 2-norm, a pseudoinverse or the best low-rank approximation.',
              answer: `Use the [SVD](!${HUB}/svd) $A = U\\Sigma V^T$; it exists for every matrix.`,
            },
          ],
        },
        related: ['lu-decomposition', 'qr-decomposition', 'svd'],
        builtOn: [
          { label: 'Choosing the right decomposition (lesson)', url: ruleUrl('lesson.la.decompositions.8') },
          { label: 'Relationships between decompositions (lesson)', url: ruleUrl('lesson.la.decompositions.9') },
          { label: 'The five decompositions side by side (lesson)', url: ruleUrl('lesson.la.decompositions.10') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'The five decompositions', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a decomposition', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/orthogonality/methods', label: 'Orthogonality' },
      { url: '/linear-algebra/eigen/methods', label: 'Eigenvalues and eigenvectors' },
      { url: '/linear-algebra/linear-systems/methods', label: 'Linear systems' },
    ],
  },
};

export default decompositionsMethods;
