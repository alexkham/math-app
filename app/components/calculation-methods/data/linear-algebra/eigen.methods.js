// eigen.methods.js (linear algebra)
// Single data source for /linear-algebra/eigen/methods (hub) and
// /linear-algebra/eigen/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/eigen/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/eigen/methods';

const eigenMethods = {
  hubPath: HUB,
  hubLabel: 'eigenvalue methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'characteristic-polynomial',
      slug: 'characteristic-polynomial',
      name: 'How to find the characteristic polynomial',
      description: 'Subtract $\\lambda$ down the diagonal, take $\\det(A - \\lambda I)$ and expand it into a polynomial in $\\lambda$.',
      uses: ['determinant', 'trace', 'cofactor expansion'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Characteristic Polynomial (2×2 and 3×3) | Learn Math Class',
        description: 'Find the characteristic polynomial det(A − λI): subtract λ on the diagonal, expand the determinant, check with trace and determinant. 2×2 and 3×3 examples.',
        keywords: ['characteristic polynomial', 'how to find the characteristic polynomial', 'det(A - λI)', 'characteristic polynomial 3x3', 'characteristic polynomial examples'],
      },
      page: {
        h1: 'How to Find the Characteristic Polynomial',
        lead:
          'The characteristic polynomial of a square matrix $A$ is $p(\\lambda) = \\det(A - \\lambda I)$. Subtract $\\lambda$ from every diagonal entry, take the determinant and expand: the result is a polynomial of degree $n$ whose roots are the eigenvalues.',
        recognize:
          'The question asks for the characteristic polynomial or the characteristic equation of a square matrix, or it is the first step toward eigenvalues: $\\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}$, a triangular $3 \\times 3$, a full $3 \\times 3$ with no zeros. Test: the matrix must be square; a $2 \\times 3$ matrix has no characteristic polynomial.',
        recognizeNote: `The polynomial is defined in ${link('lesson.la.eigen.characteristic-equation.2', 'The Characteristic Polynomial')}; it comes from rewriting $A\\mathbf{v} = \\lambda\\mathbf{v}$ as the ${link('lesson.la.eigen.3', 'homogeneous system')} $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$.`,
        methods: [
          {
            name: '2×2: trace and determinant',
            tag: '2×2 shortcut',
            preferred: true,
            formula: 'p(\\lambda) = \\lambda^2 - \\operatorname{tr}(A)\\,\\lambda + \\det(A)',
            body: `Read the ${link('la.trace-definition', 'trace')} and the determinant off the matrix; this is the ${link('la.characteristic-polynomial-2x2', '2×2 characteristic polynomial')}.`,
          },
          {
            name: 'Expand the determinant',
            tag: 'any size',
            formula: 'p(\\lambda) = \\det(A - \\lambda I)',
            body: `Expand by ${link('la.laplace-row-expansion', 'cofactors')} along the row or column with the most zeros, as in [cofactor expansion](!/linear-algebra/determinants/methods/cofactor-expansion).`,
          },
          {
            name: 'Triangular matrix',
            tag: 'read the diagonal',
            formula: 'p(\\lambda) = (a_{11} - \\lambda)(a_{22} - \\lambda)\\cdots(a_{nn} - \\lambda)',
            body: `$A - \\lambda I$ stays triangular, and the ${link('la.triangular-matrix-determinant', 'determinant of a triangular matrix')} is the product of its diagonal.`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}$',
          items: [
            {
              title: 'Check that the matrix is square.',
              body: 'Only an $n \\times n$ matrix has a characteristic polynomial; its degree is $n$.',
              state: '$2 \\times 2$, so $p$ has degree $2$',
            },
            {
              title: 'Subtract $\\lambda$ down the diagonal.',
              body: 'Only the diagonal entries change; the off-diagonal entries stay as they are.',
              state: '$A - \\lambda I = \\begin{pmatrix} 4 - \\lambda & -2 \\\\ 1 & 1 - \\lambda \\end{pmatrix}$',
            },
            {
              title: 'Take the determinant.',
              body: 'For $2 \\times 2$, multiply the diagonal and subtract the product of the off-diagonal entries. For $3 \\times 3$, expand along the row or column with the most zeros.',
              state: '$(4 - \\lambda)(1 - \\lambda) - (-2)(1)$',
            },
            {
              title: 'Expand and check the coefficients.',
              body: 'Collect powers of $\\lambda$. Check: the $\\lambda^{n-1}$ coefficient is $\\pm\\operatorname{tr}(A)$ and the constant term is $p(0) = \\det(A)$.',
              state: '$p(\\lambda) = \\lambda^2 - 5\\lambda + 6$; $\\operatorname{tr}(A) = 5$, $\\det(A) = 6$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'trace and determinant',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$: $\\operatorname{tr}(A) = 2$, $\\det(A) = 1 - 9 = -8$', why: 'read both off the matrix' },
              { math: '$p(\\lambda) = \\lambda^2 - 2\\lambda - 8 = (\\lambda - 4)(\\lambda + 2)$', why: 'plug into the 2×2 formula', answer: true },
            ],
          },
          {
            title: 'a triangular matrix',
            badge: '3×3 shortcut',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 5 & -1 \\\\ 0 & -1 & 4 \\\\ 0 & 0 & 2 \\end{pmatrix}$ is upper triangular', why: 'zeros below the diagonal' },
              { math: '$p(\\lambda) = (3 - \\lambda)(-1 - \\lambda)(2 - \\lambda)$', why: 'product of the diagonal entries', answer: true },
            ],
          },
          {
            title: 'cofactor expansion',
            badge: '3×3 full',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$', why: 'no zeros: expand along row 1' },
              { math: '$p = (2 - \\lambda)[(2 - \\lambda)^2 - 1] - [(2 - \\lambda) - 1] + [1 - (2 - \\lambda)]$', why: 'signs $+, -, +$' },
              { math: '$= (2 - \\lambda)(\\lambda - 1)(\\lambda - 3) + 2(\\lambda - 1)$', why: 'factor each bracket' },
              { math: '$p(\\lambda) = -(\\lambda - 1)^2(\\lambda - 4) = -\\lambda^3 + 6\\lambda^2 - 9\\lambda + 4$', why: 'check: trace $6$, $p(0) = \\det(A) = 4$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check a characteristic polynomial in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'A number $\\lambda$ is an eigenvalue exactly when $A - \\lambda I$ squashes some nonzero vector to $\\mathbf{0}$, and that happens exactly when its determinant, the area or volume scale factor, is zero. The characteristic polynomial tracks that scale factor as $\\lambda$ slides along the number line; its roots are the values where the space collapses. Watch it happen in the [eigenvalues and eigenvectors visualizer](!/linear-algebra/visual-tools/eigenvalues-eigenvectors).',
        },
        pitfalls: [
          {
            title: 'Subtracting λ from every entry',
            wrong: '$\\det\\begin{pmatrix} 4 - \\lambda & -2 - \\lambda \\\\ 1 - \\lambda & 1 - \\lambda \\end{pmatrix}$',
            right: '$\\lambda I$ has $\\lambda$ only on the diagonal: $\\det\\begin{pmatrix} 4 - \\lambda & -2 \\\\ 1 & 1 - \\lambda \\end{pmatrix}$',
          },
          {
            title: 'Wrong sign on the trace term',
            wrong: '$p(\\lambda) = \\lambda^2 + 5\\lambda + 6$',
            right: '$p(\\lambda) = \\lambda^2 - 5\\lambda + 6$',
            note: 'The wrong sign gives the roots $-2, -3$ instead of the eigenvalues $2, 3$.',
          },
          {
            title: 'Mixing the two conventions',
            wrong: '$\\det(A - \\lambda I) = \\lambda^3 - 6\\lambda^2 + 9\\lambda - 4$ for the $3 \\times 3$ above',
            right: '$\\det(A - \\lambda I) = -\\lambda^3 + 6\\lambda^2 - 9\\lambda + 4$; the other sign is $\\det(\\lambda I - A)$',
            note: 'For odd $n$ the two conventions differ by a sign. The roots are the same.',
          },
          {
            title: 'Multiplying out too early',
            wrong: 'expand $(2 - \\lambda)[(2 - \\lambda)^2 - 1]$ into a cubic, then hunt for roots',
            right: 'keep common factors such as $(\\lambda - 1)$ visible while you expand',
          },
        ],
        related: ['eigenvalues', 'complex-eigenvalues'],
        builtOn: [
          { label: 'Characteristic polynomial', url: ruleUrl('la.characteristic-polynomial') },
          { label: 'Characteristic polynomial (2×2)', url: ruleUrl('la.characteristic-polynomial-2x2') },
          { label: 'Laplace row expansion', url: ruleUrl('la.laplace-row-expansion') },
          { label: 'Characteristic polynomial: 3×3 (lesson)', url: ruleUrl('lesson.la.eigen.characteristic-equation.4') },
        ],
      },
    },
    {
      id: 'eigenvalues',
      slug: 'eigenvalues',
      name: 'How to find eigenvalues',
      description: 'Solve the characteristic equation $\\det(A - \\lambda I) = 0$ and check the roots against the trace and determinant.',
      uses: ['characteristic equation', 'factoring', 'trace and determinant check'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Eigenvalues of a Matrix (2×2 and 3×3) | Learn Math Class',
        description: 'Find the eigenvalues of a matrix: solve det(A − λI) = 0, use the 2×2 trace shortcut or a triangular diagonal, and check the sum and product. Worked examples.',
        keywords: ['how to find eigenvalues', 'eigenvalues of a matrix', 'eigenvalues 2x2', 'eigenvalues 3x3', 'characteristic equation eigenvalues'],
      },
      page: {
        h1: 'How to Find Eigenvalues',
        lead:
          'The eigenvalues of a square matrix are the numbers $\\lambda$ for which $A\\mathbf{v} = \\lambda\\mathbf{v}$ has a nonzero solution. Set the characteristic polynomial equal to zero and solve; the roots, counted with multiplicity, are the eigenvalues.',
        recognize: `A square matrix and the words eigenvalues, spectrum, or "for which $\\lambda$ is $A - \\lambda I$ singular?": $\\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, a triangular matrix, a $3 \\times 3$ with a sparse column. Test: you need numbers $\\lambda$, not vectors; the vectors come next, in [finding eigenvectors](!${HUB}/eigenvectors).`,
        recognizeNote: `Eigenvalues are defined in the ${link('lesson.la.eigen.2', 'Definition section')} of the eigenvalue lesson; the equation to solve is the ${link('la.characteristic-equation', 'characteristic equation')}.`,
        methods: [
          {
            name: 'Characteristic equation',
            tag: 'any size',
            preferred: true,
            formula: '\\det(A - \\lambda I) = 0',
            body: `Build the polynomial as in [finding the characteristic polynomial](!${HUB}/characteristic-polynomial), then factor it.`,
          },
          {
            name: '2×2 quadratic formula',
            tag: '2×2',
            formula: '\\lambda = \\frac{\\operatorname{tr}(A) \\pm \\sqrt{\\operatorname{tr}(A)^2 - 4\\det(A)}}{2}',
            body: `The sign of the discriminant ${link('la.discriminant-classification-2x2', 'classifies the eigenvalues')}: two real, one repeated, or a complex pair.`,
          },
          {
            name: 'Triangular or diagonal',
            tag: 'inspection',
            formula: '\\lambda_i = a_{ii}',
            body: 'The eigenvalues are the diagonal entries; no algebra is needed.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$',
          items: [
            {
              title: 'Look for a shortcut.',
              body: 'If the matrix is triangular or diagonal, read the diagonal and stop. Otherwise continue.',
              state: 'not triangular',
            },
            {
              title: 'Form the characteristic polynomial.',
              body: 'Use $\\lambda^2 - \\operatorname{tr}(A)\\lambda + \\det(A)$ for $2 \\times 2$; expand $\\det(A - \\lambda I)$ otherwise.',
              state: '$\\operatorname{tr}(A) = 7$, $\\det(A) = 6$: $p(\\lambda) = \\lambda^2 - 7\\lambda + 6$',
            },
            {
              title: 'Set it to zero and solve.',
              body: `Factor, use the quadratic formula, or for a cubic test the divisors of the constant term with the [rational root test](!/algebra/polynomials/methods/rational-root-test).`,
              state: '$(\\lambda - 1)(\\lambda - 6) = 0$',
            },
            {
              title: 'List the roots with their multiplicities.',
              body: `A root repeated $k$ times has ${link('lesson.la.eigen.characteristic-equation.6', 'algebraic multiplicity')} $k$. Complex roots count too.`,
              state: '$\\lambda_1 = 6$, $\\lambda_2 = 1$, each once',
            },
            {
              title: 'Check with the trace and determinant.',
              body: `The ${link('la.trace-sum-of-eigenvalues', 'eigenvalues add up to the trace')} and ${link('la.determinant-product-of-eigenvalues', 'multiply to the determinant')}.`,
              state: '$6 + 1 = 7$ ✓, $6 \\cdot 1 = 6$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a triangular matrix',
            badge: 'inspection',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 0 \\\\ 8 & -1 \\end{pmatrix}$ is lower triangular', why: 'zero above the diagonal' },
              { math: '$\\lambda = 3, \\ -1$', why: 'read the diagonal', answer: true },
            ],
          },
          {
            title: 'quadratic formula',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$: $\\operatorname{tr}(A) = 2$, $\\det(A) = -8$', why: '' },
              { math: '$\\lambda = \\frac{2 \\pm \\sqrt{4 + 32}}{2} = \\frac{2 \\pm 6}{2}$', why: 'discriminant $36 > 0$: two real roots' },
              { math: '$\\lambda = 4, \\ -2$; check $4 + (-2) = 2$, $4 \\cdot (-2) = -8$', why: 'trace and determinant agree', answer: true },
            ],
          },
          {
            title: 'expand along a sparse column',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 4 & 0 & 1 \\\\ -2 & 1 & 0 \\\\ -2 & 0 & 1 \\end{pmatrix}$', why: 'column 2 has two zeros' },
              { math: '$\\det(A - \\lambda I) = (1 - \\lambda)\\left[(4 - \\lambda)(1 - \\lambda) + 2\\right]$', why: 'expand along column 2' },
              { math: '$= (1 - \\lambda)(\\lambda^2 - 5\\lambda + 6) = (1 - \\lambda)(\\lambda - 2)(\\lambda - 3)$', why: '' },
              { math: '$\\lambda = 1, 2, 3$; sum $6 = \\operatorname{tr}(A)$, product $6 = \\det(A)$', why: 'both checks pass', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Most vectors change direction when $A$ acts on them. An eigenvalue is the stretch factor along one of the rare directions that do not turn: $A\\mathbf{v}$ lands on the same line as $\\mathbf{v}$, scaled by $\\lambda$. A negative $\\lambda$ flips the vector, and $\\lambda = 0$ crushes that direction to the origin. Drag a vector around in the [eigenvectors 2D visualizer](!/linear-algebra/visual-tools/eigen-vectors-2d) and watch it line up with its image only along the eigen-directions.',
        },
        pitfalls: [
          {
            title: 'Row reducing before finding eigenvalues',
            wrong: 'reduce $\\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$ to $\\begin{pmatrix} 5 & 4 \\\\ 0 & 6/5 \\end{pmatrix}$ and read $5$ and $6/5$',
            right: 'row operations change the eigenvalues; solve $\\det(A - \\lambda I) = 0$: $\\lambda = 6, 1$',
          },
          {
            title: 'Dropping a repeated root',
            wrong: '$p(\\lambda) = -(\\lambda - 1)^2(\\lambda - 4)$ gives the eigenvalues $1, 4$ and nothing more',
            right: 'list $1, 1, 4$: $\\lambda = 1$ has multiplicity $2$, and $1 + 1 + 4 = 6$ is the trace',
          },
          {
            title: 'Discarding complex roots',
            wrong: '$\\lambda^2 + 1 = 0$, so there are no eigenvalues',
            right: `$\\lambda = \\pm i$, a conjugate pair; see [complex eigenvalues](!${HUB}/complex-eigenvalues)`,
          },
          {
            title: 'Reading the diagonal of a non-triangular matrix',
            wrong: 'the eigenvalues of $\\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$ are $1, 1$',
            right: 'only triangular matrices show their eigenvalues on the diagonal; here $\\lambda = 4, -2$',
          },
        ],
        related: ['characteristic-polynomial', 'eigenvectors', 'complex-eigenvalues'],
        builtOn: [
          { label: 'Eigenvalue definition', url: ruleUrl('la.eigenvalue-definition') },
          { label: 'Characteristic equation', url: ruleUrl('la.characteristic-equation') },
          { label: 'Trace = sum of eigenvalues', url: ruleUrl('la.trace-sum-of-eigenvalues') },
          { label: 'Determinant = product of eigenvalues', url: ruleUrl('la.determinant-product-of-eigenvalues') },
        ],
      },
    },
    {
      id: 'eigenvectors',
      slug: 'eigenvectors',
      name: 'How to find eigenvectors',
      description: 'For each eigenvalue, row reduce $A - \\lambda I$ and solve $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$ for a nonzero $\\mathbf{v}$.',
      uses: ['null space', 'row reduction', 'check Av = λv'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Eigenvectors of a Matrix (Step by Step) | Learn Math Class',
        description: 'Find eigenvectors for each eigenvalue: row reduce A − λI, solve with the free variable, check Av = λv. 2×2 and 3×3 examples, shortcuts and common mistakes.',
        keywords: ['how to find eigenvectors', 'eigenvectors of a matrix', 'eigenvector 2x2', 'eigenvector 3x3', 'find eigenvector from eigenvalue'],
      },
      page: {
        h1: 'How to Find Eigenvectors',
        lead:
          'An eigenvector for $\\lambda$ is a nonzero solution of $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$. Once the eigenvalues are known, each one gives a homogeneous system; row reduce it and read a solution from the free variable.',
        recognize:
          'You have the eigenvalues, or can find them, and the question asks for eigenvectors, eigen-directions or invariant lines: "find an eigenvector for $\\lambda = 6$", "find all eigenvectors of $\\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$". Test: $A - \\lambda I$ must be singular; if row reduction leaves only $\\mathbf{v} = \\mathbf{0}$, the $\\lambda$ is wrong.',
        recognizeNote: `The procedure is ${link('lesson.la.eigen.characteristic-equation.7', 'Finding Eigenvectors After Finding Eigenvalues')}; the eigenvectors for one $\\lambda$, together with $\\mathbf{0}$, form its ${link('la.eigenspace', 'eigenspace')}.`,
        methods: [
          {
            name: 'Row reduce A − λI',
            tag: 'any size',
            preferred: true,
            formula: '(A - \\lambda I)\\mathbf{v} = \\mathbf{0}',
            body: `Solve the ${link('lesson.la.linear-systems.homogeneous.4', 'homogeneous system')} by [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination).`,
          },
          {
            name: '2×2 shortcut',
            tag: '2×2, b ≠ 0',
            formula: 'A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\ \\Rightarrow \\ \\mathbf{v} = \\begin{pmatrix} b \\\\ \\lambda - a \\end{pmatrix}',
            body: 'The first row of $A - \\lambda I$ is $(a - \\lambda, \\ b)$, and $(b, \\ \\lambda - a)$ makes it zero; the second row follows because $\\det(A - \\lambda I) = 0$.',
          },
          {
            name: '3×3 cross product',
            tag: '3×3, one free variable',
            formula: '\\mathbf{v} = \\mathbf{r}_1 \\times \\mathbf{r}_2',
            body: 'When $A - \\lambda I$ has rank $2$, the [cross product](!/linear-algebra/vectors/methods/cross-product) of two independent rows is perpendicular to every row, so it solves the system.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, $\\lambda = 6$',
          items: [
            {
              title: 'Get the eigenvalues first.',
              body: `Use [finding eigenvalues](!${HUB}/eigenvalues); then work on one $\\lambda$ at a time.`,
              state: '$\\lambda = 6$ and $\\lambda = 1$',
            },
            {
              title: 'Form $A - \\lambda I$.',
              body: 'Subtract $\\lambda$ from the diagonal only.',
              state: '$A - 6I = \\begin{pmatrix} -1 & 4 \\\\ 1 & -4 \\end{pmatrix}$',
            },
            {
              title: 'Row reduce.',
              body: 'At least one row must become zero. If none does, recheck $\\lambda$.',
              state: '$\\begin{pmatrix} 1 & -4 \\\\ 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Solve with a free variable.',
              body: 'Set each free variable to a parameter and solve for the pivot variables; pick a value that clears fractions.',
              state: '$v_1 = 4v_2$; $v_2 = 1$ gives $\\mathbf{v} = (4, 1)$',
            },
            {
              title: 'Check $A\\mathbf{v} = \\lambda\\mathbf{v}$.',
              body: 'One matrix-vector product catches almost every slip. Repeat for the other eigenvalues.',
              state: '$A(4, 1) = (24, 6) = 6(4, 1)$ ✓; for $\\lambda = 1$: $(1, -1)$',
            },
          ],
        },
        examples: [
          {
            title: 'a symmetric matrix',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$, $\\lambda = 4$: $A - 4I = \\begin{pmatrix} -3 & 3 \\\\ 3 & -3 \\end{pmatrix}$', why: 'subtract $4$ on the diagonal' },
              { math: '$-3v_1 + 3v_2 = 0$, so $\\mathbf{v} = (1, 1)$', why: 'second row is a multiple' },
              { math: '$\\lambda = -2$: $A + 2I = \\begin{pmatrix} 3 & 3 \\\\ 3 & 3 \\end{pmatrix}$, so $\\mathbf{v} = (1, -1)$', why: 'check: $A(1, -1) = (-2, 2)$', answer: true },
            ],
          },
          {
            title: 'one eigenvalue of a 3×3',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 4 & 0 & 1 \\\\ -2 & 1 & 0 \\\\ -2 & 0 & 1 \\end{pmatrix}$, $\\lambda = 2$', why: 'eigenvalues are $1, 2, 3$' },
              { math: '$A - 2I = \\begin{pmatrix} 2 & 0 & 1 \\\\ -2 & -1 & 0 \\\\ -2 & 0 & -1 \\end{pmatrix}$: $2v_1 + v_3 = 0$, $-2v_1 - v_2 = 0$', why: 'row 3 repeats row 1' },
              { math: '$v_1 = 1$: $\\mathbf{v} = (1, -2, -2)$; $A\\mathbf{v} = (2, -4, -4)$ ✓', why: 'one free variable', answer: true },
            ],
          },
          {
            title: 'the other two by cross product',
            badge: '3×3 shortcut',
            lines: [
              { math: '$\\lambda = 1$: $A - I$ has rows $(3, 0, 1)$, $(-2, 0, 0)$; their cross product is $(0, -2, 0)$', why: 'so $\\mathbf{v} = (0, 1, 0)$' },
              { math: '$\\lambda = 3$: $(1, 0, 1) \\times (-2, -2, 0) = (2, -2, -2)$', why: 'rows 1 and 2 of $A - 3I$' },
              { math: '$\\mathbf{v} = (-1, 1, 1)$; $A\\mathbf{v} = (-3, 3, 3) = 3\\mathbf{v}$ ✓', why: 'scaled by $-1/2$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step through the row reduction in the [eigenvalues and eigenvectors visualizer](!/linear-algebra/visual-tools/eigenvalues-eigenvectors).',
        visual: {
          caption:
            'Subtracting $\\lambda I$ turns the question "which vectors does $A$ only stretch by $\\lambda$?" into "which vectors does $A - \\lambda I$ send to zero?" That second set is a null space, a line or plane through the origin, so eigenvectors never come alone: every nonzero multiple of an eigenvector is another one. Row reduction finds the line; choosing $v_2 = 1$ just picks one point on it. See those lines in the [eigenvectors 2D visualizer](!/linear-algebra/visual-tools/eigen-vectors-2d).',
        },
        pitfalls: [
          {
            title: 'Taking a row as the eigenvector',
            wrong: 'the reduced row is $(1, -4)$, so $\\mathbf{v} = (1, -4)$',
            right: 'solve the row equation $v_1 - 4v_2 = 0$: $\\mathbf{v} = (4, 1)$',
            note: '$A(1, -4) = (-11, -7)$, which is not a multiple of $(1, -4)$.',
          },
          {
            title: 'Accepting the zero vector',
            wrong: '$\\mathbf{v} = \\mathbf{0}$ solves $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$',
            right: 'eigenvectors are nonzero by definition; give a nonzero solution',
          },
          {
            title: 'Subtracting λ from every entry',
            wrong: '$A - 6 = \\begin{pmatrix} -1 & -2 \\\\ -5 & -4 \\end{pmatrix}$',
            right: '$A - 6I = \\begin{pmatrix} -1 & 4 \\\\ 1 & -4 \\end{pmatrix}$',
          },
          {
            title: 'Thinking a different answer is wrong',
            wrong: 'the book says $(8, 2)$, so $(4, 1)$ must be wrong',
            right: 'any nonzero multiple is an eigenvector: $(8, 2) = 2(4, 1)$',
          },
        ],
        related: ['eigenvalues', 'eigenspace-basis', 'diagonalization'],
        builtOn: [
          { label: 'Eigenvalue definition', url: ruleUrl('la.eigenvalue-definition') },
          { label: 'Eigenspace', url: ruleUrl('la.eigenspace') },
          { label: 'Finding eigenvectors (lesson)', url: ruleUrl('lesson.la.eigen.characteristic-equation.7') },
          { label: 'Finding the null space (lesson)', url: ruleUrl('lesson.la.linear-systems.homogeneous.4') },
        ],
      },
    },
    {
      id: 'eigenspace-basis',
      slug: 'eigenspace-basis',
      name: 'How to find a basis for an eigenspace',
      description: 'Row reduce $A - \\lambda I$, write the null space in parametric form and take one vector per free variable.',
      uses: ['null space', 'free variables', 'rank–nullity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Basis for an Eigenspace | Learn Math Class',
        description: 'Find a basis for an eigenspace: row reduce A − λI, write the null space in parametric form, take one vector per free variable. Repeated and defective examples.',
        keywords: ['basis for eigenspace', 'how to find eigenspace', 'eigenspace basis example', 'geometric multiplicity', 'dimension of eigenspace'],
      },
      page: {
        h1: 'How to Find a Basis for an Eigenspace',
        lead:
          'The eigenspace $E_\\lambda$ is the null space of $A - \\lambda I$: every eigenvector for $\\lambda$, plus the zero vector. A basis comes from the parametric solution, one vector per free variable, and the number of free variables is the geometric multiplicity.',
        recognize:
          'The question says eigenspace, basis of eigenvectors, geometric multiplicity, or "all eigenvectors for $\\lambda$", usually for a repeated eigenvalue: $\\lambda = 1$ of $\\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$. Test: if $A - \\lambda I$ reduces to fewer than $n - 1$ nonzero rows, the eigenspace has dimension $2$ or more and one eigenvector is not enough.',
        recognizeNote: `Eigenspaces are defined in the ${link('lesson.la.eigen.4', 'Eigenspaces section')}; the dimension count is ${link('la.rank-nullity-theorem-matrix-form', 'rank–nullity')}: $\\dim E_\\lambda = n - \\operatorname{rank}(A - \\lambda I)$.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$, $\\lambda = 1$',
          items: [
            {
              title: 'Form $A - \\lambda I$.',
              body: 'Use an eigenvalue you have already found; here $p(\\lambda) = -(\\lambda - 1)^2(\\lambda - 4)$.',
              state: '$A - I = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Row reduce to reduced echelon form.',
              body: 'Use [reduced row echelon form](!/linear-algebra/linear-systems/methods/reduced-row-echelon-form) and count the pivots.',
              state: '$\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$: rank $1$',
            },
            {
              title: 'Name the free variables.',
              body: `Each non-pivot column is a free variable; ${link('la.free-variables-count', 'their number')} is $n - \\operatorname{rank}$, the geometric multiplicity.`,
              state: '$v_2 = s$, $v_3 = t$: $\\dim E_1 = 3 - 1 = 2$',
            },
            {
              title: 'Write the parametric vector form.',
              body: 'Solve for the pivot variables, then split the solution by parameter.',
              state: '$\\mathbf{v} = s(-1, 1, 0) + t(-1, 0, 1)$',
            },
            {
              title: 'Read off the basis and check.',
              body: 'The vectors multiplying the parameters form the basis; they are independent automatically. Check each with $A\\mathbf{v} = \\lambda\\mathbf{v}$.',
              state: '$E_1 = \\operatorname{span}\\{(-1, 1, 0), (-1, 0, 1)\\}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a simple eigenvalue',
            badge: 'dimension 1',
            lines: [
              { math: '$\\lambda = 4$ for the same $A$: $A - 4I = \\begin{pmatrix} -2 & 1 & 1 \\\\ 1 & -2 & 1 \\\\ 1 & 1 & -2 \\end{pmatrix}$', why: '' },
              { math: 'reduces to $v_1 = v_3$, $v_2 = v_3$; one free variable', why: 'rank $2$' },
              { math: '$E_4 = \\operatorname{span}\\{(1, 1, 1)\\}$', why: 'check: $A(1, 1, 1) = (4, 4, 4)$', answer: true },
            ],
          },
          {
            title: 'too few vectors',
            badge: 'defective',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$, $\\lambda = 3$ twice: $A - 3I = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$', why: 'algebraic multiplicity $2$' },
              { math: '$v_2 = 0$, $v_1$ free', why: 'rank $1$, one free variable' },
              { math: '$E_3 = \\operatorname{span}\\{(1, 0)\\}$, dimension $1 < 2$', why: 'geometric multiplicity falls short', answer: true },
            ],
          },
          {
            title: 'a plane of eigenvectors',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 3 \\end{pmatrix}$, $\\lambda = 2$ (double)', why: 'lower triangular: $2, 2, 3$' },
              { math: '$A - 2I$ has one nonzero row: $v_1 + v_3 = 0$', why: 'rank $1$' },
              { math: '$v_2 = s$, $v_3 = t$: $\\mathbf{v} = s(0, 1, 0) + t(-1, 0, 1)$', why: 'pivot variable $v_1 = -t$' },
              { math: '$E_2 = \\operatorname{span}\\{(0, 1, 0), (-1, 0, 1)\\}$, dimension $2$', why: 'matches multiplicity $2$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'For a simple eigenvalue the eigenspace is a line through the origin. A repeated eigenvalue can give a whole plane of eigenvectors: for $\\lambda = 1$ above, every vector in the plane $v_1 + v_2 + v_3 = 0$ is left unchanged by $A$. Or it can give only a line, as for $\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$, where only the $x$-axis survives. A basis is any pair of directions that spans the plane, or one direction along the line. Compare the cases in the [eigenvalues and eigenvectors visualizer](!/linear-algebra/visual-tools/eigenvalues-eigenvectors).',
        },
        pitfalls: [
          {
            title: 'One vector for a two-dimensional eigenspace',
            wrong: '$E_1 = \\operatorname{span}\\{(-1, 1, 0)\\}$',
            right: '$E_1 = \\operatorname{span}\\{(-1, 1, 0), (-1, 0, 1)\\}$: one vector per free variable',
          },
          {
            title: 'Basis from the rows',
            wrong: 'basis $\\{(1, 1, 1)\\}$, taken from the nonzero row of $A - I$',
            right: 'the row gives the equation $v_1 + v_2 + v_3 = 0$; the basis comes from its solutions',
            note: '$(1, 1, 1)$ is in fact the eigenvector for $\\lambda = 4$, a different eigenspace.',
          },
          {
            title: 'Assuming dimension equals multiplicity',
            wrong: '$\\lambda = 3$ is a double root of $\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$, so $\\dim E_3 = 2$',
            right: `only $1 \\le \\dim E_\\lambda \\le m_a(\\lambda)$ is guaranteed (the ${link('la.multiplicity-inequality', 'multiplicity inequality')}); here $2 - 1 = 1$`,
          },
          {
            title: 'Putting the zero vector in the basis',
            wrong: '$E_3$ has basis $\\{\\mathbf{0}, (1, 0)\\}$',
            right: 'basis $\\{(1, 0)\\}$; a set containing $\\mathbf{0}$ is never independent',
          },
        ],
        related: ['eigenvectors', 'diagonalizability-check', 'diagonalization'],
        builtOn: [
          { label: 'Eigenspace', url: ruleUrl('la.eigenspace') },
          { label: 'Rank–nullity (matrix form)', url: ruleUrl('la.rank-nullity-theorem-matrix-form') },
          { label: 'Multiplicity inequality', url: ruleUrl('la.multiplicity-inequality') },
          { label: 'Algebraic and geometric multiplicity (lesson)', url: ruleUrl('lesson.la.eigen.properties.3') },
        ],
      },
    },
    {
      id: 'diagonalizability-check',
      slug: 'diagonalizability-check',
      name: 'How to check if a matrix is diagonalizable',
      description: 'Compare algebraic and geometric multiplicity for every eigenvalue; $n$ distinct eigenvalues settle it at once.',
      uses: ['eigenvalues', 'rank of A − λI', 'multiplicities'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check If a Matrix Is Diagonalizable | Learn Math Class',
        description: 'Check if a matrix is diagonalizable: find eigenvalues, compare algebraic and geometric multiplicity, use the distinct and symmetric shortcuts. Worked examples.',
        keywords: ['is the matrix diagonalizable', 'how to check diagonalizable', 'diagonalizable matrix test', 'algebraic and geometric multiplicity', 'defective matrix'],
      },
      page: {
        h1: 'How to Check If a Matrix Is Diagonalizable',
        lead:
          'An $n \\times n$ matrix is diagonalizable exactly when it has $n$ independent eigenvectors. In practice: find the eigenvalues, and for each repeated one check that its eigenspace is as large as its multiplicity.',
        recognize:
          'The question asks "is $A$ diagonalizable?", "is $A$ similar to a diagonal matrix?", "does $\\mathbb{R}^n$ have a basis of eigenvectors?", or asks for $PDP^{-1}$ and you want to know first whether it exists. Typical inputs: a triangular matrix with a repeated diagonal entry, a $2 \\times 2$ with a double eigenvalue, a symmetric matrix. Test: only repeated eigenvalues need work.',
        recognizeNote: `The criterion is in ${link('lesson.la.eigen.diagonalization.3', 'When Is a Matrix Diagonalizable?')}; the two multiplicities are defined in ${link('lesson.la.eigen.properties.3', 'Algebraic and Geometric Multiplicity')}.`,
        methods: [
          {
            name: 'Multiplicity comparison',
            tag: 'always decides',
            preferred: true,
            formula: 'm_g(\\lambda) = n - \\operatorname{rank}(A - \\lambda I) = m_a(\\lambda) \\ \\text{for every } \\lambda',
            body: `This is the ${link('la.diagonalizability-condition', 'diagonalizability condition')}, necessary and sufficient.`,
          },
          {
            name: 'Distinct eigenvalues',
            tag: 'quick yes',
            formula: 'n \\text{ distinct eigenvalues} \\Rightarrow \\text{diagonalizable}',
            body: `${link('la.distinct-eigenvalues-imply-diagonalizable', 'Distinct eigenvalues')} give independent eigenvectors. A repeated eigenvalue does not mean no; it means check.`,
          },
          {
            name: 'Real symmetric',
            tag: 'quick yes',
            formula: 'A = A^T \\Rightarrow A = QDQ^T',
            body: `The ${link('la.spectral-theorem', 'spectral theorem')} guarantees an orthonormal basis of eigenvectors.`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 3 \\end{pmatrix}$',
          items: [
            {
              title: 'Find the eigenvalues with multiplicities.',
              body: `Use [finding eigenvalues](!${HUB}/eigenvalues); a triangular matrix shows them on the diagonal.`,
              state: '$\\lambda = 2$ ($m_a = 2$), $\\lambda = 3$ ($m_a = 1$)',
            },
            {
              title: 'Apply the quick tests.',
              body: 'If all $n$ eigenvalues are distinct, or $A$ is real symmetric, the answer is yes: stop.',
              state: 'not distinct, not symmetric: continue',
            },
            {
              title: 'Skip the simple eigenvalues.',
              body: 'An eigenvalue with $m_a = 1$ always has $m_g = 1$.',
              state: '$\\lambda = 3$ is fine',
            },
            {
              title: 'Compute the geometric multiplicity of each repeated eigenvalue.',
              body: 'Find the [rank](!/linear-algebra/matrix/methods/rank) of $A - \\lambda I$; then $m_g = n - \\operatorname{rank}$.',
              state: '$A - 2I$ has one nonzero row: $m_g(2) = 3 - 1 = 2$',
            },
            {
              title: 'Compare.',
              body: 'Diagonalizable if $m_g = m_a$ for every eigenvalue, equivalently if the $m_g$ add up to $n$.',
              state: '$2 = 2$ and $1 = 1$: diagonalizable ✓',
            },
          ],
        },
        examples: [
          {
            title: 'distinct eigenvalues',
            badge: 'quick yes',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix}$: $\\lambda^2 - 4\\lambda - 5 = (\\lambda - 5)(\\lambda + 1)$', why: 'trace $4$, determinant $-5$' },
              { math: '$5 \\ne -1$: two distinct eigenvalues, so diagonalizable', why: 'no eigenspace check needed', answer: true },
            ],
          },
          {
            title: 'a double root that fails',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$: $\\lambda = 3$, $m_a = 2$', why: '' },
              { math: '$\\operatorname{rank}(A - 3I) = 1$, so $m_g = 2 - 1 = 1$', why: '' },
              { math: '$1 < 2$: not diagonalizable', why: 'only one eigenvector direction', answer: true },
            ],
          },
          {
            title: 'an upper triangular matrix',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & 2 & 4 \\\\ 0 & 0 & 5 \\end{pmatrix}$: $\\lambda = 2$ ($m_a = 2$) and $5$', why: 'read the diagonal' },
              { math: '$A - 2I = \\begin{pmatrix} 0 & 3 & 1 \\\\ 0 & 0 & 4 \\\\ 0 & 0 & 3 \\end{pmatrix}$ has rank $2$', why: 'two pivots' },
              { math: '$m_g(2) = 3 - 2 = 1 < 2$: not diagonalizable', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Diagonalizing means finding coordinate axes along which $A$ only stretches. Each eigenvalue supplies as many axes as its eigenspace has dimensions. If the axes add up to $n$, they fill the space and $A$ is diagonal in that basis; if a repeated eigenvalue supplies fewer axes than its multiplicity, a shear is hiding in the matrix and no choice of axes removes it. See both outcomes in the [matrix diagonalization visualizer](!/linear-algebra/visual-tools/matrix-diagonalization).',
        },
        pitfalls: [
          {
            title: 'Repeated eigenvalue means no',
            wrong: '$\\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 3 \\end{pmatrix}$ repeats $\\lambda = 2$, so it is not diagonalizable',
            right: '$m_g(2) = 2 = m_a(2)$: it is diagonalizable',
          },
          {
            title: 'Invertible means diagonalizable',
            wrong: '$\\det\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix} = 9 \\ne 0$, so it is diagonalizable',
            right: 'invertibility and diagonalizability are unrelated; this matrix is invertible and not diagonalizable',
            note: 'Conversely, $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ is singular and already diagonal.',
          },
          {
            title: 'Using the rank of A',
            wrong: '$m_g(2) = 3 - \\operatorname{rank}(A)$',
            right: '$m_g(2) = 3 - \\operatorname{rank}(A - 2I)$',
          },
          {
            title: 'Complex eigenvalues over the reals',
            wrong: '$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ is diagonalizable over $\\mathbb{R}$',
            right: `its eigenvalues are $\\pm i$, so it is diagonalizable over $\\mathbb{C}$ only; over $\\mathbb{R}$ use the [real canonical form](!${HUB}/complex-eigenvalues)`,
          },
        ],
        related: ['eigenspace-basis', 'diagonalization', 'eigenvalues'],
        builtOn: [
          { label: 'Diagonalizability condition', url: ruleUrl('la.diagonalizability-condition') },
          { label: 'Distinct eigenvalues imply diagonalizable', url: ruleUrl('la.distinct-eigenvalues-imply-diagonalizable') },
          { label: 'Multiplicity inequality', url: ruleUrl('la.multiplicity-inequality') },
          { label: 'Spectral theorem', url: ruleUrl('la.spectral-theorem') },
        ],
      },
    },
    {
      id: 'diagonalization',
      slug: 'diagonalization',
      name: 'How to diagonalize a matrix',
      description: 'Put eigenvectors in the columns of $P$ and eigenvalues on the diagonal of $D$, then check $AP = PD$.',
      uses: ['eigenvalues', 'eigenvectors', 'inverse matrix'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Diagonalize a Matrix (A = PDP⁻¹) | Learn Math Class',
        description: 'Diagonalize a matrix step by step: eigenvalues, eigenvectors, build P and D in matching order, find P⁻¹ and check AP = PD. 2×2 and 3×3 worked examples.',
        keywords: ['how to diagonalize a matrix', 'diagonalization PDP^-1', 'find P and D', 'diagonalize 3x3 matrix', 'matrix diagonalization example'],
      },
      page: {
        h1: 'How to Diagonalize a Matrix',
        lead:
          'To diagonalize $A$ is to write $A = PDP^{-1}$ with $D$ diagonal. The columns of $P$ are independent eigenvectors and the diagonal of $D$ holds their eigenvalues, in the same order.',
        recognize: `The question says diagonalize, "find $P$ and $D$", "find an invertible $P$ with $P^{-1}AP$ diagonal", or "write $A = PDP^{-1}$": $\\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, a $3 \\times 3$ with three distinct eigenvalues, a $3 \\times 3$ with a repeated eigenvalue. Test: you need $n$ independent eigenvectors; if a repeated eigenvalue falls short, stop (see the [diagonalizability check](!${HUB}/diagonalizability-check)).`,
        recognizeNote: `The procedure is ${link('lesson.la.eigen.diagonalization.2', 'Constructing the Diagonalization')}; the factorization is the ${link('la.diagonalization-formula', 'diagonalization formula')}.`,
        methods: [
          {
            name: 'General: A = PDP⁻¹',
            tag: 'any diagonalizable A',
            preferred: true,
            formula: 'A = PDP^{-1}, \\quad P = [\\,\\mathbf{v}_1 \\ \\cdots \\ \\mathbf{v}_n\\,], \\quad D = \\operatorname{diag}(\\lambda_1, \\ldots, \\lambda_n)',
            body: 'Invert $P$ with the [2×2 inverse formula](!/linear-algebra/matrix/methods/inverse-2x2) or by [Gauss–Jordan](!/linear-algebra/matrix/methods/inverse-gauss-jordan).',
          },
          {
            name: 'Symmetric: A = QDQᵀ',
            tag: 'A = Aᵀ',
            formula: 'A = QDQ^T, \\quad Q^{-1} = Q^T',
            body: `Normalize orthogonal eigenvectors and no inverse is needed: the [spectral decomposition](!/linear-algebra/decompositions/methods/spectral-decomposition), guaranteed by the ${link('la.spectral-theorem', 'spectral theorem')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$',
          items: [
            {
              title: 'Find the eigenvalues.',
              body: `Solve $\\det(A - \\lambda I) = 0$, as in [finding eigenvalues](!${HUB}/eigenvalues).`,
              state: '$\\lambda^2 - 7\\lambda + 6 = 0$: $\\lambda = 6, 1$',
            },
            {
              title: 'Find a basis of each eigenspace.',
              body: `Row reduce $A - \\lambda I$, as in [finding eigenvectors](!${HUB}/eigenvectors).`,
              state: '$\\lambda = 6$: $(4, 1)$; $\\lambda = 1$: $(1, -1)$',
            },
            {
              title: 'Count the eigenvectors.',
              body: `You need $n$ of them; ${link('la.independence-of-distinct-eigenvectors', 'eigenvectors for distinct eigenvalues are independent')}. Fewer than $n$ means $A$ is not diagonalizable: stop.`,
              state: '$2$ vectors for $n = 2$ ✓',
            },
            {
              title: 'Build $P$ and $D$ in matching order.',
              body: 'Column $j$ of $P$ is the eigenvector for the $j$-th diagonal entry of $D$.',
              state: '$P = \\begin{pmatrix} 4 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 6 & 0 \\\\ 0 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Find $P^{-1}$ and check $AP = PD$.',
              body: 'Checking $AP = PD$ needs no inverse; you still need $P^{-1}$ to write $A = PDP^{-1}$.',
              state: '$P^{-1} = \\frac{1}{5}\\begin{pmatrix} 1 & 1 \\\\ 1 & -4 \\end{pmatrix}$; $AP = PD = \\begin{pmatrix} 24 & 1 \\\\ 6 & -1 \\end{pmatrix}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a symmetric matrix',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$: $\\lambda = 4$, $(1, 1)$; $\\lambda = -2$, $(1, -1)$', why: '' },
              { math: '$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$', why: 'eigenvectors as columns' },
              { math: '$P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $A = PDP^{-1}$', why: '$\\det P = -2$', answer: true },
            ],
          },
          {
            title: 'three distinct eigenvalues',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 4 & 0 & 1 \\\\ -2 & 1 & 0 \\\\ -2 & 0 & 1 \\end{pmatrix}$: $\\lambda = 1, 2, 3$', why: 'distinct, so diagonalizable' },
              { math: 'eigenvectors $(0, 1, 0)$, $(1, -2, -2)$, $(-1, 1, 1)$', why: 'one per eigenvalue' },
              { math: '$P = \\begin{pmatrix} 0 & 1 & -1 \\\\ 1 & -2 & 1 \\\\ 0 & -2 & 1 \\end{pmatrix}$, $D = \\operatorname{diag}(1, 2, 3)$', why: '' },
              { math: '$P^{-1} = \\begin{pmatrix} 0 & 1 & -1 \\\\ -1 & 0 & -1 \\\\ -2 & 0 & -1 \\end{pmatrix}$; $AP = PD$ ✓', why: '$\\det P = 1$', answer: true },
            ],
          },
          {
            title: 'a repeated eigenvalue',
            badge: '3×3, double λ',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 0 & 3 \\end{pmatrix}$: $E_2 = \\operatorname{span}\\{(-1, 0, 1), (0, 1, 0)\\}$', why: 'two free variables' },
              { math: '$\\lambda = 3$: $E_3 = \\operatorname{span}\\{(0, 0, 1)\\}$', why: '' },
              { math: '$P = \\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$, $D = \\operatorname{diag}(2, 2, 3)$, $P^{-1} = P$', why: 'check: $P^2 = I$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Step through $P$, $D$ and $P^{-1}$ in the [matrix diagonalization visualizer](!/linear-algebra/visual-tools/matrix-diagonalization).',
        visual: {
          caption:
            'Read $A = PDP^{-1}$ from right to left. $P^{-1}$ converts a vector into eigenvector coordinates, $D$ stretches each coordinate by its eigenvalue, and $P$ converts back. In the eigenvector basis the matrix does nothing but scale along the axes; all the mixing in $A$ comes from describing that simple action in the standard coordinates. Diagonalizing is a [change of basis](!/linear-algebra/transformations/methods/change-of-basis) to the basis where $A$ is simplest.',
        },
        pitfalls: [
          {
            title: 'Swapping P and its inverse',
            wrong: '$P^{-1}DP = \\begin{pmatrix} 5 & 1 \\\\ 4 & 2 \\end{pmatrix}$, which is not $A$',
            right: '$A = PDP^{-1}$, with the eigenvectors as the columns of $P$',
          },
          {
            title: 'Mismatched order',
            wrong: '$P = \\begin{pmatrix} 4 & 1 \\\\ 1 & -1 \\end{pmatrix}$ with $D = \\operatorname{diag}(1, 6)$',
            right: 'the eigenvector $(4, 1)$ belongs to $6$: $D = \\operatorname{diag}(6, 1)$',
            note: 'The mismatched product $PDP^{-1}$ is $\\begin{pmatrix} 2 & -4 \\\\ -1 & 5 \\end{pmatrix}$, not $A$.',
          },
          {
            title: 'Forcing a defective matrix',
            wrong: '$\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$: $P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$, $D = 3I$',
            right: 'that $P$ is singular; with only one eigenvector direction the matrix is not diagonalizable',
          },
        ],
        related: ['diagonalizability-check', 'matrix-powers-diagonalization', 'eigenvectors'],
        builtOn: [
          { label: 'Diagonalization formula', url: ruleUrl('la.diagonalization-formula') },
          { label: 'Independence of eigenvectors for distinct eigenvalues', url: ruleUrl('la.independence-of-distinct-eigenvectors') },
          { label: 'Constructing the diagonalization (lesson)', url: ruleUrl('lesson.la.eigen.diagonalization.2') },
          { label: 'Spectral theorem', url: ruleUrl('la.spectral-theorem') },
        ],
      },
    },
    {
      id: 'matrix-powers-diagonalization',
      slug: 'matrix-powers-diagonalization',
      name: 'How to compute matrix powers by diagonalization',
      description: 'Write $A = PDP^{-1}$, raise only the diagonal entries of $D$ to the power and multiply back.',
      uses: ['diagonalization', 'powers of a diagonal matrix', 'recurrences'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute Matrix Powers by Diagonalization (Aᵏ = PDᵏP⁻¹) | Learn Math Class',
        description: 'Compute matrix powers with Aᵏ = PDᵏP⁻¹: diagonalize, raise the eigenvalues to the power, multiply back. Examples: A⁵, a formula for every k and a recurrence.',
        keywords: ['matrix power diagonalization', 'compute A^n', 'A^k = PD^kP^-1', 'matrix powers examples', 'recurrence with matrices'],
      },
      page: {
        h1: 'How to Compute Matrix Powers by Diagonalization',
        lead:
          'Once $A = PDP^{-1}$, the inner factors cancel in $A^k$ and leave $A^k = PD^kP^{-1}$. Powering a diagonal matrix only powers its entries, so any power, or a formula for every $k$, costs two matrix products.',
        recognize:
          'A high or general power of a square matrix: $A^{10}$, $A^k$ for all $k$, the long-run behavior of $A^k\\mathbf{x}$, or a recurrence $\\mathbf{x}_{k+1} = A\\mathbf{x}_k$ (population steps, Markov chains, sequences like $a_{n+1} = a_n + 2a_{n-1}$). Test: $A$ must be diagonalizable; for small powers of a small matrix, plain [matrix powers](!/linear-algebra/matrix/methods/matrix-powers) by repeated multiplication may be quicker.',
        recognizeNote: `The method is the ${link('lesson.la.eigen.diagonalization.4', 'Matrix Powers')} section of the diagonalization lesson; it rests on the ${link('la.diagonal-matrix-power', 'power of a diagonal matrix')}.`,
        methods: [
          {
            name: 'Diagonalize: PDᵏP⁻¹',
            tag: 'any k, closed form',
            preferred: true,
            formula: 'A^k = PD^kP^{-1} = P\\operatorname{diag}(\\lambda_1^k, \\ldots, \\lambda_n^k)P^{-1}',
            body: `Each eigenvalue is simply raised to the $k$-th power (${link('la.eigenvalue-of-power', 'eigenvalues of a power')}); the eigenvectors stay the same.`,
          },
          {
            name: 'Repeated multiplication',
            tag: 'small k',
            formula: 'A^k = A \\cdot A \\cdots A',
            body: 'Fine for $k \\le 4$; for larger $k$ square repeatedly: $A^2$, $A^4$, $A^8$.',
          },
          {
            name: 'Cayley–Hamilton reduction',
            tag: 'no eigenvectors',
            formula: 'p(A) = 0',
            body: `The ${link('la.cayley-hamilton', 'Cayley–Hamilton theorem')} rewrites $A^2$ in terms of $A$ and $I$, and so every higher power: for $A = \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, $A^2 = 7A - 6I$.`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, $k = 3$',
          items: [
            {
              title: 'Diagonalize $A$.',
              body: `Follow [diagonalizing a matrix](!${HUB}/diagonalization).`,
              state: '$P = \\begin{pmatrix} 4 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\operatorname{diag}(6, 1)$, $P^{-1} = \\frac{1}{5}\\begin{pmatrix} 1 & 1 \\\\ 1 & -4 \\end{pmatrix}$',
            },
            {
              title: 'Raise the diagonal entries to the power.',
              body: 'Only $D$ is powered entry by entry, never $A$.',
              state: '$D^3 = \\operatorname{diag}(216, 1)$',
            },
            {
              title: 'Multiply $PD^kP^{-1}$.',
              body: 'Do $PD^k$ first: it just scales the columns of $P$.',
              state: '$PD^3 = \\begin{pmatrix} 864 & 1 \\\\ 216 & -1 \\end{pmatrix}$; $A^3 = \\frac{1}{5}\\begin{pmatrix} 865 & 860 \\\\ 215 & 220 \\end{pmatrix} = \\begin{pmatrix} 173 & 172 \\\\ 43 & 44 \\end{pmatrix}$',
            },
            {
              title: 'Check.',
              body: 'Set $k = 1$ in a general formula to get $A$ back, or compare with a direct product.',
              state: '$A^2 = \\begin{pmatrix} 29 & 28 \\\\ 7 & 8 \\end{pmatrix}$, $A^2 A = \\begin{pmatrix} 173 & 172 \\\\ 43 & 44 \\end{pmatrix}$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a fifth power',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix} = PDP^{-1}$, $D = \\operatorname{diag}(4, -2)$', why: '$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$' },
              { math: '$D^5 = \\operatorname{diag}(1024, -32)$', why: 'odd power keeps the sign' },
              { math: '$A^5 = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} 1024 & 0 \\\\ 0 & -32 \\end{pmatrix}\\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$', why: '' },
              { math: '$A^5 = \\begin{pmatrix} 496 & 528 \\\\ 528 & 496 \\end{pmatrix}$', why: '', answer: true },
            ],
          },
          {
            title: 'a formula for every k',
            badge: 'general k',
            lines: [
              { math: '$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$: $P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, $D = \\operatorname{diag}(2, 3)$', why: 'eigenvectors $(1, 0)$ and $(1, 1)$' },
              { math: '$P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}$', why: '' },
              { math: '$A^k = \\begin{pmatrix} 2^k & 3^k - 2^k \\\\ 0 & 3^k \\end{pmatrix}$', why: 'check: $k = 1$ gives $A$', answer: true },
            ],
          },
          {
            title: 'a recurrence',
            badge: 'application',
            lines: [
              { math: '$a_{n+1} = a_n + 2a_{n-1}$, $a_0 = 0$, $a_1 = 1$: $\\begin{pmatrix} a_{n+1} \\\\ a_n \\end{pmatrix} = A^n\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$', why: 'one step is one multiplication' },
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 1 & 0 \\end{pmatrix}$: $\\lambda = 2, -1$; $P = \\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}$', why: '$\\lambda^2 - \\lambda - 2 = 0$' },
              { math: '$P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & 1 \\\\ 1 & -2 \\end{pmatrix}$; second row of $PD^nP^{-1}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$', why: '' },
              { math: '$a_n = \\frac{2^n - (-1)^n}{3}$, so $a_{10} = \\frac{1024 - 1}{3} = 341$', why: 'check: $a_2 = 1$, $a_3 = 3$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compare with repeated multiplication in the [matrix power visualizer](!/linear-algebra/visual-tools/matrix-power).',
        visual: {
          caption:
            'In the eigenvector basis, applying $A$ once multiplies each coordinate by its eigenvalue; applying it $k$ times multiplies by $\\lambda^k$. So the long-run behavior of $A^k\\mathbf{x}$ is set by the eigenvalue of largest size: for $\\begin{pmatrix} 5 & 4 \\\\ 1 & 2 \\end{pmatrix}$, $6^k$ quickly swamps $1^k$, and $A^k\\mathbf{x}$ swings toward the eigenvector $(4, 1)$. The [power iteration visualizer](!/linear-algebra/visual-tools/power-iteration) shows this pull toward the dominant direction.',
        },
        pitfalls: [
          {
            title: 'Powering the entries of A',
            wrong: '$A^3 = \\begin{pmatrix} 125 & 64 \\\\ 1 & 8 \\end{pmatrix}$',
            right: '$A^3 = PD^3P^{-1} = \\begin{pmatrix} 173 & 172 \\\\ 43 & 44 \\end{pmatrix}$; only $D$ is powered entrywise',
          },
          {
            title: 'Powering P too',
            wrong: '$A^k = P^kD^k(P^{-1})^k$',
            right: '$A^k = PD^kP^{-1}$: every inner pair $P^{-1}P$ cancels',
          },
          {
            title: 'Losing the sign of a negative eigenvalue',
            wrong: '$(-2)^5 = 32$',
            right: '$(-2)^5 = -32$; odd powers keep the sign',
          },
          {
            title: 'Using it on a defective matrix',
            wrong: '$\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}^k = \\begin{pmatrix} 3^k & 0 \\\\ 0 & 3^k \\end{pmatrix}$',
            right: '$\\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}^k = \\begin{pmatrix} 3^k & k \\cdot 3^{k-1} \\\\ 0 & 3^k \\end{pmatrix}$; this matrix is not diagonalizable',
          },
        ],
        related: ['diagonalization', 'diagonalizability-check'],
        builtOn: [
          { label: 'Power of a diagonal matrix', url: ruleUrl('la.diagonal-matrix-power') },
          { label: 'Eigenvalues of a power', url: ruleUrl('la.eigenvalue-of-power') },
          { label: 'Matrix powers (lesson)', url: ruleUrl('lesson.la.eigen.diagonalization.4') },
          { label: 'Recurrence relations (lesson)', url: ruleUrl('lesson.la.eigen.diagonalization.6') },
        ],
      },
    },
    {
      id: 'complex-eigenvalues',
      slug: 'complex-eigenvalues',
      name: 'How to find complex eigenvalues and eigenvectors',
      description: 'A negative discriminant gives $\\lambda = a \\pm bi$; one complex eigenvector gives the real rotation-scaling form.',
      uses: ['discriminant', 'complex arithmetic', 'real canonical form'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Complex Eigenvalues and Eigenvectors (2×2) | Learn Math Class',
        description: 'Find complex eigenvalues and eigenvectors of a real 2×2 matrix: negative discriminant, conjugate pairs, rotation angle and scale, real canonical form. Examples.',
        keywords: ['complex eigenvalues', 'complex eigenvectors', 'complex eigenvalues 2x2', 'real canonical form', 'rotation scaling matrix eigenvalues'],
      },
      page: {
        h1: 'How to Find Complex Eigenvalues and Eigenvectors',
        lead:
          'A real $2 \\times 2$ matrix whose characteristic polynomial has a negative discriminant has a conjugate pair of eigenvalues $a \\pm bi$. Find one eigenvector with complex arithmetic, conjugate it for the other, and read the rotation angle and scale from $a$ and $b$.',
        recognize:
          'A real matrix that rotates: $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $\\begin{pmatrix} 1 & -2 \\\\ 1 & 3 \\end{pmatrix}$, often with off-diagonal entries of opposite sign. Test for $2 \\times 2$: $\\operatorname{tr}(A)^2 - 4\\det(A) < 0$. Also any question about a rotation angle, a spiral, or the real canonical form.',
        recognizeNote: `The lesson is ${link('lesson.la.eigen.complex.3', 'The 2×2 Case in Detail')}; the sign test is the ${link('la.discriminant-classification-2x2', 'discriminant classification')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & -2 \\\\ 1 & 3 \\end{pmatrix}$',
          items: [
            {
              title: 'Compute the discriminant.',
              body: 'For $2 \\times 2$, use $\\operatorname{tr}(A)^2 - 4\\det(A)$; a negative value means a complex pair.',
              state: '$\\operatorname{tr}(A) = 4$, $\\det(A) = 5$: $16 - 20 = -4 < 0$',
            },
            {
              title: 'Solve for the pair.',
              body: `$\\lambda = \\frac{\\operatorname{tr}(A) \\pm i\\sqrt{4\\det(A) - \\operatorname{tr}(A)^2}}{2}$; the roots are ${link('la.complex-conjugate-pairs', 'complex conjugates')}.`,
              state: '$\\lambda = 2 \\pm i$',
            },
            {
              title: 'Find an eigenvector for $a + bi$.',
              body: 'Form $A - \\lambda I$ with complex entries and use one row only; the other row is a complex multiple of it.',
              state: '$A - (2 + i)I = \\begin{pmatrix} -1 - i & -2 \\\\ 1 & 1 - i \\end{pmatrix}$; row 2: $v_1 = (-1 + i)v_2$, so $\\mathbf{v} = (-1 + i, 1)$',
            },
            {
              title: 'Conjugate for the other eigenvalue.',
              body: 'For a real matrix, conjugating every entry gives the eigenvector of $a - bi$.',
              state: '$\\lambda = 2 - i$: $\\bar{\\mathbf{v}} = (-1 - i, 1)$',
            },
            {
              title: 'Build the real form.',
              body: `Split $\\mathbf{v} = \\mathbf{u} + i\\mathbf{w}$ and set $P = [\\,\\mathbf{w} \\ \\mathbf{u}\\,]$. Then $P^{-1}AP$ is the ${link('la.real-canonical-form-2x2', 'real canonical form')}, with scale $r = \\sqrt{a^2 + b^2}$.`,
              state: '$\\mathbf{u} = (-1, 1)$, $\\mathbf{w} = (1, 0)$: $P^{-1}AP = \\begin{pmatrix} 2 & -1 \\\\ 1 & 2 \\end{pmatrix}$, $r = \\sqrt{5}$, $\\theta \\approx 26.6°$',
            },
          ],
        },
        examples: [
          {
            title: 'a pure rotation',
            badge: '90°',
            lines: [
              { math: '$A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$: $\\lambda^2 + 1 = 0$', why: 'trace $0$, determinant $1$' },
              { math: '$\\lambda = \\pm i$, $r = 1$, $\\theta = 90°$', why: 'no real eigenvector exists', answer: true },
            ],
          },
          {
            title: 'an eigenvector',
            badge: 'a + bi',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$: trace $2$, determinant $2$, $\\lambda = 1 \\pm i$', why: 'discriminant $4 - 8 = -4$' },
              { math: '$A - (1 + i)I = \\begin{pmatrix} -i & -1 \\\\ 1 & -i \\end{pmatrix}$; row 2: $v_1 = iv_2$', why: '' },
              { math: '$\\mathbf{v} = (i, 1)$: $A\\mathbf{v} = (-1 + i, \\ 1 + i) = (1 + i)\\mathbf{v}$ ✓; $r = \\sqrt{2}$, $\\theta = 45°$', why: 'scale by $\\sqrt{2}$, turn $45°$', answer: true },
            ],
          },
          {
            title: 'an angle past 90°',
            badge: 'a < 0',
            lines: [
              { math: '$A = \\begin{pmatrix} -1 & -1 \\\\ 1 & -1 \\end{pmatrix}$: $\\lambda = -1 \\pm i$', why: 'trace $-2$, determinant $2$' },
              { math: '$r = \\sqrt{2}$; $\\cos\\theta = -\\frac{1}{\\sqrt{2}}$, $\\sin\\theta = \\frac{1}{\\sqrt{2}}$', why: 'use both signs' },
              { math: '$\\theta = 135°$, not $\\arctan(-1) = -45°$', why: 'second quadrant', answer: true },
            ],
          },
        ],
        examplesAfter: 'Watch the rotation and the spiral in the [complex eigenvalues 2D visualizer](!/linear-algebra/visual-tools/complex-eigenvalues-2d).',
        visual: {
          caption:
            'A real matrix with complex eigenvalues has no real direction that stays on its own line: it turns every vector. In the basis $\\{\\mathbf{w}, \\mathbf{u}\\}$ built from the complex eigenvector, it is a rotation by $\\theta$ combined with a scaling by $r = |\\lambda| = \\sqrt{\\det(A)}$. Repeated application spirals outward when $r > 1$, circles when $r = 1$, and spirals inward when $r < 1$; for $\\begin{pmatrix} 1 & -2 \\\\ 1 & 3 \\end{pmatrix}$, $r = \\sqrt{5}$, so orbits spiral out.',
        },
        pitfalls: [
          {
            title: 'Stopping at a negative discriminant',
            wrong: '$\\lambda^2 - 4\\lambda + 5$ has no roots, so $A$ has no eigenvalues',
            right: '$\\lambda = 2 \\pm i$; over $\\mathbb{C}$ every $n \\times n$ matrix has $n$ eigenvalues, counted with multiplicity',
          },
          {
            title: 'Taking the determinant as the scale',
            wrong: '$r = \\det(A) = 5$',
            right: '$r = \\sqrt{\\det(A)} = \\sqrt{a^2 + b^2} = \\sqrt{5}$; the factor $5$ scales areas',
          },
          {
            title: 'Wrong column order in P',
            wrong: '$P = [\\,\\mathbf{u} \\ \\mathbf{w}\\,]$ gives $\\begin{pmatrix} 2 & 1 \\\\ -1 & 2 \\end{pmatrix}$',
            right: '$P = [\\,\\mathbf{w} \\ \\mathbf{u}\\,]$ gives $\\begin{pmatrix} 2 & -1 \\\\ 1 & 2 \\end{pmatrix}$',
            note: 'The wrong order describes the rotation in the opposite direction.',
          },
          {
            title: 'Angle from arctan alone',
            wrong: '$\\theta = \\arctan(b/a) = -45°$ for $\\lambda = -1 + i$',
            right: '$\\theta = 135°$; check the signs of $\\cos\\theta = a/r$ and $\\sin\\theta = b/r$',
          },
        ],
        related: ['eigenvalues', 'diagonalizability-check'],
        builtOn: [
          { label: 'Complex conjugate pairs', url: ruleUrl('la.complex-conjugate-pairs') },
          { label: 'Discriminant classification (2×2)', url: ruleUrl('la.discriminant-classification-2x2') },
          { label: 'Real canonical form (2×2)', url: ruleUrl('la.real-canonical-form-2x2') },
          { label: 'Complex eigenvectors (lesson)', url: ruleUrl('lesson.la.eigen.complex.4') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Eigenvalues, eigenvectors, diagonalization', blurb: 'Composite · each opens its own page' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'composite', label: 'Composite' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/matrix/methods', label: 'Matrices' },
      { url: '/linear-algebra/determinants/methods', label: 'Determinants' },
      { url: '/linear-algebra/decompositions/methods', label: 'Decompositions' },
    ],
  },
};

export default eigenMethods;
