// transformations.methods.js (linear algebra)
// Single data source for /linear-algebra/transformations/methods (hub) and
// /linear-algebra/transformations/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/transformations/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/transformations/methods';

const transformationsMethods = {
  hubPath: HUB,
  hubLabel: 'linear transformation methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'linearity-check',
      slug: 'linearity-check',
      name: 'How to check if a transformation is linear',
      description: 'Test $T(c\\mathbf{u} + \\mathbf{v}) = cT(\\mathbf{u}) + T(\\mathbf{v})$ with general vectors; one failing example disproves it.',
      uses: ['one-step test', 'zero vector test', 'counterexample'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check If a Transformation Is Linear | Learn Math Class',
        description: 'Check if a transformation is linear: test T(0) = 0, apply the one-step test T(cu + v) = cT(u) + T(v), or find a counterexample. Examples and common mistakes.',
        keywords: ['is the transformation linear', 'how to prove a transformation is linear', 'linear transformation test', 'linearity check examples', 'not a linear transformation'],
      },
      page: {
        h1: 'How to Check If a Transformation Is Linear',
        lead:
          'A map $T$ is linear when it respects addition and scaling: $T(c\\mathbf{u} + \\mathbf{v}) = cT(\\mathbf{u}) + T(\\mathbf{v})$ for all vectors and scalars. To prove it, check that identity with general vectors; to disprove it, one numerical counterexample is enough.',
        recognize: `A formula for $T$ and the question "is $T$ linear?": $T(x, y) = (2x - y, \\ 3y)$, $T(x, y) = (x + 1, \\ y)$, $T(x, y) = (xy, \\ x)$, $T(A) = A^T$ on matrices, $T(p) = p'$ on polynomials. Quick test on $\\mathbb{R}^n$: each output coordinate of a linear map is a sum of constants times input coordinates, with no added constant, no products or powers of inputs, and no functions such as $\\sin$ or $|\\cdot|$.`,
        recognizeNote: `Linearity is defined in ${link('lesson.la.transformations.1', 'What a Linear Transformation Is')}; the combined test is ${link('lesson.la.transformations.properties.2', 'The One-Step Test')}.`,
        methods: [
          {
            name: 'One-step test',
            tag: 'proof',
            preferred: true,
            formula: 'T(c\\mathbf{u} + \\mathbf{v}) = cT(\\mathbf{u}) + T(\\mathbf{v})',
            body: `Checks both conditions of the ${link('la.linear-transformation-definition', 'definition')} in one computation.`,
          },
          {
            name: 'Two conditions separately',
            tag: 'proof',
            formula: 'T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v}), \\quad T(c\\mathbf{u}) = cT(\\mathbf{u})',
            body: 'Additivity and homogeneity, checked one at a time; both must hold.',
          },
          {
            name: 'Counterexample',
            tag: 'disproof',
            formula: 'T(\\mathbf{0}) \\ne \\mathbf{0} \\ \\text{ or } \\ T(2\\mathbf{u}) \\ne 2T(\\mathbf{u})',
            body: `A linear map ${link('la.zero-vector-preservation', 'sends the zero vector to zero')}; if that holds, try doubling or negating a vector.`,
          },
        ],
        steps: {
          traceLabel: 'On $T(x, y) = (2x - y, \\ 3y)$',
          items: [
            {
              title: 'Check $T(\\mathbf{0}) = \\mathbf{0}$.',
              body: 'If it fails, $T$ is not linear: stop. If it holds, nothing is proved yet.',
              state: '$T(0, 0) = (0, 0)$: continue',
            },
            {
              title: 'Take general vectors and a scalar.',
              body: 'Write $\\mathbf{u} = (x_1, y_1)$, $\\mathbf{v} = (x_2, y_2)$ and any scalar $c$. Specific numbers can disprove linearity but never prove it.',
              state: '$c\\mathbf{u} + \\mathbf{v} = (cx_1 + x_2, \\ cy_1 + y_2)$',
            },
            {
              title: 'Apply $T$ and expand.',
              body: 'Substitute into the formula and group the terms by $c$.',
              state: '$T(c\\mathbf{u} + \\mathbf{v}) = (2cx_1 - cy_1 + 2x_2 - y_2, \\ 3cy_1 + 3y_2)$',
            },
            {
              title: 'Compare with $cT(\\mathbf{u}) + T(\\mathbf{v})$.',
              body: 'Equal for all inputs: linear, and the coefficients give its matrix. Not equal: plug numbers into the mismatch to get a counterexample.',
              state: '$c(2x_1 - y_1, 3y_1) + (2x_2 - y_2, 3y_2)$ is the same ✓: linear, with matrix $\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$',
            },
          ],
        },
        examples: [
          {
            title: 'a shift',
            badge: 'zero test',
            lines: [
              { math: '$T(x, y) = (x + 1, \\ y)$', why: '' },
              { math: '$T(0, 0) = (1, 0) \\ne (0, 0)$: not linear', why: 'translations are not linear', answer: true },
            ],
          },
          {
            title: 'a product of inputs',
            badge: 'counterexample',
            lines: [
              { math: '$T(x, y) = (xy, \\ x)$: $T(0, 0) = (0, 0)$', why: 'zero test passes, proves nothing' },
              { math: '$T(2 \\cdot (1, 1)) = T(2, 2) = (4, 2)$', why: '' },
              { math: '$2T(1, 1) = (2, 2) \\ne (4, 2)$: not linear', why: 'scaling fails', answer: true },
            ],
          },
          {
            title: 'matrices as inputs',
            badge: 'abstract space',
            lines: [
              { math: '$T(A) = A^T$ on $2 \\times 2$ matrices', why: '' },
              { math: '$T(cA + B) = (cA + B)^T = cA^T + B^T$', why: 'transpose rules' },
              { math: '$= cT(A) + T(B)$: linear', why: 'holds for all $A$, $B$, $c$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A linear map keeps the origin fixed and keeps grid lines straight, parallel and evenly spaced. A shift moves the origin, so it fails at once; $(xy, x)$ bends straight lines into curves, so doubling an input does not double the output. Every matrix in the [linear transformation 2D visualizer](!/linear-algebra/visual-tools/linear-transformation-2d) shows the linear picture: the grid stays a grid.',
        },
        pitfalls: [
          {
            title: 'Taking the zero test as proof',
            wrong: '$T(0, 0) = (0, 0)$, so $T(x, y) = (xy, x)$ is linear',
            right: '$T(\\mathbf{0}) = \\mathbf{0}$ is necessary, not sufficient; here $T(2, 2) \\ne 2T(1, 1)$',
          },
          {
            title: 'Proving with numbers',
            wrong: '$T(1, 2) + T(3, 4) = T(4, 6)$, so $T$ is linear',
            right: 'a numerical check can only disprove; a proof uses general $\\mathbf{u}$, $\\mathbf{v}$ and $c$',
          },
          {
            title: 'Forgetting negative scalars',
            wrong: '$T(x) = |x|$ satisfies $T(2x) = 2T(x)$, so it is linear',
            right: '$T(-1 \\cdot 1) = 1$ but $-1 \\cdot T(1) = -1$: not linear',
          },
          {
            title: 'Calling a line through any point linear',
            wrong: '$T(x) = 3x + 2$ is linear because its graph is a line',
            right: 'it is affine; $T(0) = 2 \\ne 0$, so it is not a linear transformation',
          },
        ],
        related: ['transformation-matrix', 'kernel-and-image'],
        builtOn: [
          { label: 'Linear transformation definition', url: ruleUrl('la.linear-transformation-definition') },
          { label: 'Zero vector preservation', url: ruleUrl('la.zero-vector-preservation') },
          { label: 'Disproving linearity (lesson)', url: ruleUrl('lesson.la.transformations.properties.4') },
          { label: 'Non-examples (lesson)', url: ruleUrl('lesson.la.transformations.3') },
        ],
      },
    },
    {
      id: 'transformation-matrix',
      slug: 'transformation-matrix',
      name: 'How to find the matrix of a linear transformation',
      description: 'Apply $T$ to each standard basis vector and use the results as the columns of $A$.',
      uses: ['standard basis', 'columns', 'coordinate vectors'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Matrix of a Linear Transformation (Standard Matrix) | Learn Math Class',
        description: 'Find the standard matrix of a linear transformation: apply T to each basis vector and use the images as columns. Examples: formulas, other bases, polynomials.',
        keywords: ['matrix of a linear transformation', 'standard matrix', 'how to find the standard matrix', 'transformation matrix examples', 'matrix of T with respect to a basis'],
      },
      page: {
        h1: 'How to Find the Matrix of a Linear Transformation',
        lead:
          'Every linear map $T: \\mathbb{R}^n \\to \\mathbb{R}^m$ is multiplication by an $m \\times n$ matrix. Its $j$-th column is $T(\\mathbf{e}_j)$, the image of the $j$-th standard basis vector.',
        recognize:
          'A linear map given by a formula, by a geometric description, or by its values on a few vectors, and the question asks for its matrix: $T(x, y, z) = (x + 2z, \\ 3x - y)$; "$T(1, 1) = (3, 1)$ and $T(1, -1) = (1, 5)$"; differentiation on polynomials. Test: fix the shape first, with rows for the output dimension and columns for the input dimension.',
        recognizeNote: `The recipe is ${link('lesson.la.transformations.matrix-representation.2', 'Constructing the Standard Matrix')}; the result is the ${link('la.standard-matrix', 'standard matrix')}.`,
        methods: [
          {
            name: 'Images of the standard basis',
            tag: 'formula given',
            preferred: true,
            formula: 'A = [\\,T(\\mathbf{e}_1) \\ T(\\mathbf{e}_2) \\ \\cdots \\ T(\\mathbf{e}_n)\\,]',
            body: 'Works for any description of $T$ you can evaluate.',
          },
          {
            name: 'Images of another basis',
            tag: 'values on a basis given',
            formula: 'A = [\\,T(\\mathbf{b}_1) \\ \\cdots \\ T(\\mathbf{b}_n)\\,]\\,B^{-1}',
            body: `Here $B = [\\,\\mathbf{b}_1 \\ \\cdots \\ \\mathbf{b}_n\\,]$. It works because a linear map is ${link('lesson.la.transformations.5', 'determined by its action on a basis')}.`,
          },
          {
            name: 'Abstract spaces',
            tag: 'polynomials, matrices',
            formula: '[T]_{\\mathcal{C} \\leftarrow \\mathcal{B}} = [\\,[T(\\mathbf{b}_1)]_\\mathcal{C} \\ \\cdots \\ [T(\\mathbf{b}_n)]_\\mathcal{C}\\,]',
            body: `The columns are ${link('la.coordinate-vector', 'coordinate vectors')} of the images; see ${link('la.matrix-representation-abstract-bases', 'matrices for abstract bases')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $T(x, y, z) = (x + 2z, \\ 3x - y)$',
          items: [
            {
              title: 'Fix the shape.',
              body: 'Inputs in $\\mathbb{R}^n$ and outputs in $\\mathbb{R}^m$ give an $m \\times n$ matrix.',
              state: '$\\mathbb{R}^3 \\to \\mathbb{R}^2$: $2 \\times 3$',
            },
            {
              title: 'Apply $T$ to each standard basis vector.',
              body: 'Put a $1$ in one input slot and $0$ in the others.',
              state: '$T(\\mathbf{e}_1) = (1, 3)$, $T(\\mathbf{e}_2) = (0, -1)$, $T(\\mathbf{e}_3) = (2, 0)$',
            },
            {
              title: 'Write the images as columns.',
              body: `Column $j$ is $T(\\mathbf{e}_j)$, in order; then ${link('la.linear-map-as-matrix-multiplication', 'T acts as multiplication by A')}.`,
              state: '$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 3 & -1 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Check on a test vector.',
              body: 'Compare $A\\mathbf{x}$ with the formula for one vector whose entries are all nonzero.',
              state: '$A(1, 1, 1) = (3, 2) = T(1, 1, 1)$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'read the coefficients',
            badge: '2×2',
            lines: [
              { math: '$T(x, y) = (3x - y, \\ x + 4y)$', why: 'row $i$ holds output $i$' },
              { math: '$A = \\begin{pmatrix} 3 & -1 \\\\ 1 & 4 \\end{pmatrix}$', why: 'columns $T(\\mathbf{e}_1)$, $T(\\mathbf{e}_2)$', answer: true },
            ],
          },
          {
            title: 'values on a non-standard basis',
            badge: 'times B inverse',
            lines: [
              { math: '$T(1, 1) = (3, 1)$, $T(1, -1) = (1, 5)$; $B = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$', why: '' },
              { math: '$A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 5 \\end{pmatrix}B^{-1} = \\begin{pmatrix} 3 & 1 \\\\ 1 & 5 \\end{pmatrix}\\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$', why: '' },
              { math: '$A = \\begin{pmatrix} 2 & 1 \\\\ 3 & -2 \\end{pmatrix}$; check $A(1, -1) = (1, 5)$ ✓', why: '', answer: true },
            ],
          },
          {
            title: 'polynomials',
            badge: 'abstract space',
            lines: [
              { math: `$T(p) = p' + p$ on polynomials of degree $\\le 2$, basis $\\{1, x, x^2\\}$`, why: '' },
              { math: '$T(1) = 1$, $T(x) = 1 + x$, $T(x^2) = 2x + x^2$', why: 'images of the basis' },
              { math: '$[T] = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix}$', why: 'coordinates as columns' },
              { math: '$[T](3, -1, 2) = (2, 3, 2)$: $T(3 - x + 2x^2) = 2 + 3x + 2x^2$ ✓', why: 'check on a test polynomial', answer: true },
            ],
          },
        ],
        examplesAfter: 'Multiply out your matrix in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'Every vector is a combination $x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n$, and a linear map keeps combinations: $T(\\mathbf{x}) = x_1T(\\mathbf{e}_1) + \\cdots + x_nT(\\mathbf{e}_n)$. That sum is exactly the matrix-vector product with the images as columns, so knowing where the basis vectors land tells you where everything lands. In the [linear transformation 2D visualizer](!/linear-algebra/visual-tools/linear-transformation-2d), the two columns are the arrows where $\\mathbf{e}_1$ and $\\mathbf{e}_2$ end up.',
        },
        pitfalls: [
          {
            title: 'Images as rows',
            wrong: '$A = \\begin{pmatrix} 1 & 3 \\\\ 0 & -1 \\\\ 2 & 0 \\end{pmatrix}$',
            right: '$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 3 & -1 & 0 \\end{pmatrix}$: the images go in columns',
            note: 'The $3 \\times 2$ array cannot multiply a vector of $\\mathbb{R}^3$.',
          },
          {
            title: 'Using the given images as the matrix',
            wrong: '$A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 5 \\end{pmatrix}$ from $T(1, 1)$ and $T(1, -1)$',
            right: 'that product is $AB$; the standard matrix is $AB \\cdot B^{-1} = \\begin{pmatrix} 2 & 1 \\\\ 3 & -2 \\end{pmatrix}$',
          },
          {
            title: 'Putting the inverse on the wrong side',
            wrong: '$A = B^{-1}[\\,T(\\mathbf{b}_1) \\ T(\\mathbf{b}_2)\\,]$',
            right: '$A = [\\,T(\\mathbf{b}_1) \\ T(\\mathbf{b}_2)\\,]B^{-1}$, from $AB = [\\,T(\\mathbf{b}_1) \\ T(\\mathbf{b}_2)\\,]$',
          },
          {
            title: 'A matrix for a map that is not linear',
            wrong: '$T(x, y) = (x + 1, y)$ has matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$',
            right: `$T$ is not linear, so no matrix represents it; run the [linearity check](!${HUB}/linearity-check) first`,
          },
        ],
        related: ['linearity-check', 'kernel-and-image', 'geometric-transformations'],
        builtOn: [
          { label: 'Standard matrix', url: ruleUrl('la.standard-matrix') },
          { label: 'Linear map as matrix multiplication', url: ruleUrl('la.linear-map-as-matrix-multiplication') },
          { label: 'Matrix representation for abstract bases', url: ruleUrl('la.matrix-representation-abstract-bases') },
          { label: 'Matrices for abstract vector spaces (lesson)', url: ruleUrl('lesson.la.transformations.matrix-representation.4') },
        ],
      },
    },
    {
      id: 'kernel-and-image',
      slug: 'kernel-and-image',
      name: 'How to find the kernel and image of a linear transformation',
      description: 'Row reduce the matrix once: the kernel comes from the free variables, the image from the pivot columns of $A$.',
      uses: ['row reduction', 'null space', 'column space', 'rank–nullity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Kernel and Image of a Linear Transformation | Learn Math Class',
        description: 'Find the kernel and image of a linear transformation: row reduce once, read the kernel from free variables and the image from pivot columns. Worked examples.',
        keywords: ['kernel and image of a linear transformation', 'how to find the kernel', 'how to find the image', 'null space and column space', 'injective surjective linear map'],
      },
      page: {
        h1: 'How to Find the Kernel and Image of a Linear Transformation',
        lead:
          'For $T(\\mathbf{x}) = A\\mathbf{x}$, the kernel is the null space of $A$ (the inputs sent to $\\mathbf{0}$) and the image is the column space of $A$ (every possible output). One row reduction gives a basis for both.',
        recognize:
          'The question says kernel, null space, image, range, injective (one-to-one) or surjective (onto): "find bases for $\\ker T$ and $\\operatorname{Im} T$", "is $T$ one-to-one?". Typical inputs: a $3 \\times 4$ matrix, a formula like $T(x, y) = (x + y, \\ 2x + 2y)$, a tall matrix from $\\mathbb{R}^2$ to $\\mathbb{R}^3$. Test: write the standard matrix first; everything is read from its echelon form.',
        recognizeNote: `Kernel and image are defined in ${link('lesson.la.transformations.image-kernel.2', 'The Kernel')} and ${link('lesson.la.transformations.image-kernel.1', 'The Image')}; their dimensions obey ${link('la.rank-nullity-for-maps', 'rank–nullity')}.`,
        methods: [
          {
            name: 'Row reduction',
            tag: 'any matrix',
            preferred: true,
            formula: '\\ker T = \\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}, \\quad \\operatorname{Im} T = \\operatorname{span}(\\text{pivot columns of } A)',
            body: 'Reduce with [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination) and read both answers off one echelon form.',
          },
          {
            name: 'Determinant shortcut',
            tag: 'square A',
            formula: '\\det(A) \\ne 0 \\Rightarrow \\ker T = \\{\\mathbf{0}\\}, \\ \\operatorname{Im} T = \\mathbb{R}^n',
            body: `An invertible matrix is both one-to-one and onto (the ${link('la.bijectivity-equal-dim-case', 'equal-dimension case')}).`,
          },
          {
            name: 'Rank–nullity for dimensions',
            tag: 'dimensions only',
            formula: '\\dim\\ker T + \\dim\\operatorname{Im} T = n',
            body: 'Find either dimension and the other follows, with $n$ the number of columns.',
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\\\ 3 & 6 & 1 & 0 \\end{pmatrix}$',
          items: [
            {
              title: 'Write the standard matrix.',
              body: `If $T$ is given by a formula, build $A$ as in [finding the transformation matrix](!${HUB}/transformation-matrix).`,
              state: '$T: \\mathbb{R}^4 \\to \\mathbb{R}^3$',
            },
            {
              title: 'Row reduce to reduced echelon form.',
              body: 'Mark the pivot columns.',
              state: '$\\begin{pmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$: pivots in columns $1$ and $3$',
            },
            {
              title: 'Kernel: solve with the free variables.',
              body: 'Each free variable gives one basis vector of the parametric solution.',
              state: '$x_2 = s$, $x_4 = t$: $\\ker T = \\operatorname{span}\\{(-2, 1, 0, 0), (1, 0, -3, 1)\\}$',
            },
            {
              title: 'Image: take the pivot columns of the original $A$.',
              body: 'Not the columns of the echelon form: row operations change the column space.',
              state: '$\\operatorname{Im} T = \\operatorname{span}\\{(1, 2, 3), (0, 1, 1)\\}$',
            },
            {
              title: 'Check the dimensions and answer the question.',
              body: `Nullity plus rank equals the number of columns. One-to-one exactly when the kernel is $\\{\\mathbf{0}\\}$ (the ${link('la.injectivity-kernel-criterion', 'kernel criterion')}); onto exactly when the rank equals the number of rows.`,
              state: '$2 + 2 = 4$ ✓; not one-to-one, not onto',
            },
          ],
        },
        examples: [
          {
            title: 'a line onto a line',
            badge: '2×2',
            lines: [
              { math: '$T(x, y) = (x + y, \\ 2x + 2y)$: $A = \\begin{pmatrix} 1 & 1 \\\\ 2 & 2 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 1 \\\\ 0 & 0 \\end{pmatrix}$', why: 'one pivot, in column 1' },
              { math: '$\\ker T = \\operatorname{span}\\{(-1, 1)\\}$, $\\operatorname{Im} T = \\operatorname{span}\\{(1, 2)\\}$', why: 'nullity $1$ plus rank $1$', answer: true },
            ],
          },
          {
            title: 'one-to-one but not onto',
            badge: '3×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: pivots in both columns', why: 'no free variables' },
              { math: '$\\ker T = \\{\\mathbf{0}\\}$: one-to-one', why: '' },
              { math: '$\\operatorname{Im} T = \\operatorname{span}\\{(1, 0, 1), (0, 1, 1)\\}$, a plane in $\\mathbb{R}^3$: not onto', why: 'rank $2 < 3$', answer: true },
            ],
          },
          {
            title: 'square but singular',
            badge: '3×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 1 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 2 & 3 \\end{pmatrix}$, $\\det(A) = 0$', why: 'row 3 = row 1 + row 2' },
              { math: 'RREF $\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$: $x_1 = -x_3$, $x_2 = -x_3$', why: '' },
              { math: '$\\ker T = \\operatorname{span}\\{(-1, -1, 1)\\}$, $\\operatorname{Im} T = \\operatorname{span}\\{(1, 0, 1), (1, 1, 2)\\}$', why: 'pivot columns 1, 2 of $A$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See both subspaces in the [kernel and image 2D visualizer](!/linear-algebra/visual-tools/kernel-image-2d).',
        visual: {
          caption:
            'The kernel lives in the input space and the image in the output space. Every independent direction that $A$ crushes to $\\mathbf{0}$ costs the image one dimension: in the trace example a plane of inputs collapses, so four input dimensions leave a two-dimensional image. That trade-off is the rank–nullity count. The [four fundamental subspaces visualizer](!/linear-algebra/visual-tools/four-fundamental-subspaces) places the null space and the column space side by side.',
        },
        pitfalls: [
          {
            title: 'Pivot columns of the echelon form',
            wrong: '$\\operatorname{Im} T = \\operatorname{span}\\{(1, 0, 0), (0, 1, 0)\\}$, read from the RREF',
            right: 'use columns $1$ and $3$ of the original $A$: $(1, 2, 3)$ and $(0, 1, 1)$',
          },
          {
            title: 'Kernel from the rows',
            wrong: '$\\ker T = \\operatorname{span}\\{(1, 2, 0, -1), (0, 0, 1, 3)\\}$',
            right: 'those rows span the row space; the kernel is the solution set of $A\\mathbf{x} = \\mathbf{0}$',
          },
          {
            title: 'Mixing up where they live',
            wrong: '$\\ker T \\subseteq \\mathbb{R}^3$ for $T: \\mathbb{R}^4 \\to \\mathbb{R}^3$',
            right: '$\\ker T \\subseteq \\mathbb{R}^4$ (inputs) and $\\operatorname{Im} T \\subseteq \\mathbb{R}^3$ (outputs)',
          },
          {
            title: 'Rank–nullity with the rows',
            wrong: 'nullity $= 3 - \\operatorname{rank} = 3 - 2 = 1$',
            right: 'nullity $= n - \\operatorname{rank} = 4 - 2 = 2$, with $n$ the number of columns',
          },
        ],
        related: ['transformation-matrix', 'linearity-check', 'change-of-basis'],
        builtOn: [
          { label: 'Kernel definition', url: ruleUrl('la.kernel-definition') },
          { label: 'Image definition', url: ruleUrl('la.image-definition') },
          { label: 'Rank–nullity for maps', url: ruleUrl('la.rank-nullity-for-maps') },
          { label: 'Computing the image and kernel (lesson)', url: ruleUrl('lesson.la.transformations.image-kernel.8') },
        ],
      },
    },
    {
      id: 'change-of-basis',
      slug: 'change-of-basis',
      name: 'How to change basis',
      description: 'Coordinates in a new basis are $P^{-1}\\mathbf{v}$; the matrix of a map in the new basis is $P^{-1}AP$.',
      uses: ['change-of-basis matrix', 'inverse', 'similarity'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Change Basis (Coordinates and P⁻¹AP) | Learn Math Class',
        description: 'Change basis step by step: build P from the new basis, find coordinates with P⁻¹v, write a matrix in the new basis as P⁻¹AP, then check. Worked examples.',
        keywords: ['change of basis', 'change of basis matrix', 'coordinates in a new basis', 'matrix in a new basis', 'similar matrices P^-1AP'],
      },
      page: {
        h1: 'How to Change Basis',
        lead:
          'Put the new basis vectors into the columns of $P$. Then $P$ turns new coordinates into standard ones, $P^{-1}$ turns standard coordinates into new ones, and the matrix of a map $A$ in the new basis is $P^{-1}AP$.',
        recognize: `Two bases, or coordinates relative to $\\mathcal{B}$: "find $[\\mathbf{v}]_\\mathcal{B}$", "find the matrix of $T$ in the basis $\\mathcal{B}$", "find $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$", "show $A$ and $A'$ are similar". Typical input: $\\mathcal{B} = \\{(1, 1), (1, 2)\\}$ in $\\mathbb{R}^2$ with $\\mathbf{v} = (3, 5)$. Test: decide which way you convert before you write any inverse.`,
        recognizeNote: `The change-of-basis matrix is defined in ${link('lesson.la.transformations.basis-change.2', 'The Change-of-Basis Matrix')}; coordinates themselves are in ${link('lesson.la.vector-spaces.basis.4', 'Coordinates')}.`,
        methods: [
          {
            name: 'Invert P',
            tag: '2×2, or many vectors',
            preferred: true,
            formula: '[\\mathbf{v}]_\\mathcal{B} = P^{-1}\\mathbf{v}, \\quad [T]_\\mathcal{B} = P^{-1}AP',
            body: `The ${link('la.change-of-basis-inverse', 'inverse converts back')}; for $2 \\times 2$ use the [2×2 inverse](!/linear-algebra/matrix/methods/inverse-2x2).`,
          },
          {
            name: 'Solve P c = v',
            tag: 'one vector',
            formula: '[\\,P \\mid \\mathbf{v}\\,] \\to [\\,I \\mid [\\mathbf{v}]_\\mathcal{B}\\,]',
            body: 'Row reduce the augmented matrix; no inverse is needed.',
          },
          {
            name: 'Between two non-standard bases',
            tag: 'B to C',
            formula: 'P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = C^{-1}B, \\quad [\\,C \\mid B\\,] \\to [\\,I \\mid P_{\\mathcal{C} \\leftarrow \\mathcal{B}}\\,]',
            body: `Then the ${link('la.change-of-basis-formula', 'change-of-basis formula')} gives $[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}[\\mathbf{v}]_\\mathcal{B}$.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\mathcal{B} = \\{(1, 1), (1, 2)\\}$, $\\mathbf{v} = (3, 5)$, $A = \\begin{pmatrix} 1 & 1 \\\\ -2 & 4 \\end{pmatrix}$',
          items: [
            {
              title: 'Put the new basis vectors in the columns of $P$.',
              body: 'Write them in standard coordinates. $P$ converts $\\mathcal{B}$-coordinates into standard ones.',
              state: '$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$',
            },
            {
              title: 'Find $P^{-1}$.',
              body: 'It converts standard coordinates into $\\mathcal{B}$-coordinates.',
              state: '$\\det P = 1$: $P^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Convert vectors or matrices.',
              body: `Vectors: $[\\mathbf{v}]_\\mathcal{B} = P^{-1}\\mathbf{v}$. Maps: $[T]_\\mathcal{B} = P^{-1}AP$, the ${link('la.similarity-relation', 'similarity relation')}.`,
              state: '$[\\mathbf{v}]_\\mathcal{B} = (1, 2)$; $P^{-1}AP = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$',
            },
            {
              title: 'Check.',
              body: `Rebuild the vector from its coordinates. For matrices, compare trace and determinant, which ${link('la.similarity-invariants', 'similarity preserves')}.`,
              state: '$1(1, 1) + 2(1, 2) = (3, 5)$ ✓; trace $5$ and determinant $6$ on both sides ✓',
            },
          ],
        },
        examples: [
          {
            title: 'coordinates of a vector',
            badge: 'vector',
            lines: [
              { math: '$\\mathcal{B} = \\{(2, 1), (1, 1)\\}$, $\\mathbf{v} = (4, 3)$: $P = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$', why: '' },
              { math: '$P^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$', why: '$\\det P = 1$' },
              { math: '$[\\mathbf{v}]_\\mathcal{B} = P^{-1}(4, 3) = (1, 2)$', why: 'check: $1(2, 1) + 2(1, 1) = (4, 3)$', answer: true },
            ],
          },
          {
            title: 'a matrix in a new basis',
            badge: 'P⁻¹AP',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$: $P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$', why: '' },
              { math: '$AP = \\begin{pmatrix} 3 & -1 \\\\ 7 & -1 \\end{pmatrix}$', why: '' },
              { math: '$[T]_\\mathcal{B} = P^{-1}AP = \\begin{pmatrix} 5 & -1 \\\\ -2 & 0 \\end{pmatrix}$', why: 'trace $5$, determinant $-2$, as for $A$', answer: true },
            ],
          },
          {
            title: 'two non-standard bases',
            badge: 'B to C',
            lines: [
              { math: '$\\mathcal{B} = \\{(1, 1), (1, 2)\\}$, $\\mathcal{C} = \\{(1, 0), (1, 1)\\}$', why: '' },
              { math: '$P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = C^{-1}B = \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$', why: '' },
              { math: '$P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 2 \\end{pmatrix}$', why: 'check: $(1, 2) = -1(1, 0) + 2(1, 1)$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See both coordinate grids at once in the [change of basis 2D visualizer](!/linear-algebra/visual-tools/change-basis-2d).',
        visual: {
          caption:
            'A basis is a choice of coordinate grid. The vector $(3, 5)$ does not move when the grid changes; only its address does, from "$3$ across, $5$ up" to "$1$ of $(1, 1)$ plus $2$ of $(1, 2)$". In the same way, $P^{-1}AP$ is the same map as $A$ written in the new grid: convert in with $P$, act with $A$, convert out with $P^{-1}$. With eigenvectors as the grid the map becomes pure stretching, which is why [diagonalization](!/linear-algebra/eigen/methods/diagonalization) is a change of basis.',
        },
        pitfalls: [
          {
            title: 'Multiplying by P instead of its inverse',
            wrong: '$[\\mathbf{v}]_\\mathcal{B} = P\\mathbf{v} = (8, 13)$',
            right: '$[\\mathbf{v}]_\\mathcal{B} = P^{-1}\\mathbf{v} = (1, 2)$',
            note: '$P$ takes $\\mathcal{B}$-coordinates to standard coordinates, not the reverse.',
          },
          {
            title: 'Inverse on the wrong side',
            wrong: '$[T]_\\mathcal{B} = PAP^{-1} = \\begin{pmatrix} -7 & 6 \\\\ -15 & 12 \\end{pmatrix}$',
            right: '$[T]_\\mathcal{B} = P^{-1}AP = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$',
          },
          {
            title: 'Wrong order between two bases',
            wrong: '$P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = B^{-1}C$',
            right: '$P_{\\mathcal{C} \\leftarrow \\mathcal{B}} = C^{-1}B$: each $\\mathcal{B}$ vector written in $\\mathcal{C}$-coordinates',
          },
          {
            title: 'Row reducing instead of changing basis',
            wrong: 'row reduce $A$ to get its matrix in another basis',
            right: 'row operations change the eigenvalues; a new basis means $P^{-1}AP$',
          },
        ],
        related: ['transformation-matrix', 'geometric-transformations'],
        builtOn: [
          { label: 'Change-of-basis formula', url: ruleUrl('la.change-of-basis-formula') },
          { label: 'Change-of-basis inverse', url: ruleUrl('la.change-of-basis-inverse') },
          { label: 'Similarity relation', url: ruleUrl('la.similarity-relation') },
          { label: 'Similarity invariants', url: ruleUrl('la.similarity-invariants') },
        ],
      },
    },
    {
      id: 'geometric-transformations',
      slug: 'geometric-transformations',
      name: 'How to find the matrix of a geometric transformation',
      description: 'Rotations, reflections, projections, shears: track where $\\mathbf{e}_1$ and $\\mathbf{e}_2$ go, and multiply right to left to combine.',
      uses: ['standard matrix', 'rotation and reflection formulas', 'composition'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Matrix of a Geometric Transformation (2D) | Learn Math Class',
        description: 'Find the matrix of a rotation, reflection, projection or shear in 2D: track where e1 and e2 go, use the formulas, multiply right to left to combine. Examples.',
        keywords: ['rotation matrix', 'reflection matrix', 'projection matrix 2d', 'geometric transformation matrix', 'composition of transformations'],
      },
      page: {
        h1: 'How to Find the Matrix of a Geometric Transformation',
        lead:
          'Rotations, reflections, projections, shears and scalings of the plane are linear maps, so each has a $2 \\times 2$ matrix. Find where $\\mathbf{e}_1 = (1, 0)$ and $\\mathbf{e}_2 = (0, 1)$ land, or use the family formula; to combine several moves, multiply the matrices with the first move on the right.',
        recognize:
          'A description in words: "rotate by $60°$", "reflect across $y = 2x$", "project onto the line $y = 2x$", "shear horizontally by $2$", "rotate, then reflect". Test: the map must fix the origin; a rotation about another point, or a translation, is not linear.',
        recognizeNote: `The families are catalogued in ${link('lesson.la.transformations.geometric.1', 'How to Read a Transformation Matrix')}; composing them is ${link('lesson.la.transformations.geometric.9', 'Combining Transformations')}.`,
        methods: [
          {
            name: 'Track the basis vectors',
            tag: 'any description',
            preferred: true,
            formula: 'A = [\\,T(\\mathbf{e}_1) \\ T(\\mathbf{e}_2)\\,]',
            body: `Sketch where $(1, 0)$ and $(0, 1)$ go, as in [finding the transformation matrix](!${HUB}/transformation-matrix).`,
          },
          {
            name: 'Family formulas',
            tag: 'rotation, reflection',
            formula: 'R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}, \\quad F_\\phi = \\begin{pmatrix} \\cos 2\\phi & \\sin 2\\phi \\\\ \\sin 2\\phi & -\\cos 2\\phi \\end{pmatrix}',
            body: `The ${link('la.rotation-matrix-2d', 'rotation matrix')} turns counterclockwise by $\\theta$; the ${link('la.reflection-across-line-2d', 'reflection across a line')} uses the line's angle $\\phi$ to the $x$-axis.`,
          },
          {
            name: 'Projection formula',
            tag: 'onto a line',
            formula: 'P = \\frac{\\mathbf{u}\\mathbf{u}^T}{\\mathbf{u}^T\\mathbf{u}}, \\quad F = 2P - I',
            body: `The ${link('la.projection-onto-line', 'projection onto the line')} through $\\mathbf{u}$; the reflection across the same line is $2P - I$.`,
          },
        ],
        steps: {
          traceLabel: 'On "rotate $90°$ counterclockwise, then reflect across the $x$-axis"',
          items: [
            {
              title: 'Split the description into single moves.',
              body: 'List them in the order they happen.',
              state: 'first $R$ (rotate $90°$), then $F$ (reflect across the $x$-axis)',
            },
            {
              title: 'Write each matrix.',
              body: 'Track $\\mathbf{e}_1$ and $\\mathbf{e}_2$, or use the family formula.',
              state: '$R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, $F = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$',
            },
            {
              title: 'Multiply with the first move on the right.',
              body: `$T(\\mathbf{x}) = F(R\\mathbf{x})$, so the matrix is $FR$: the ${link('la.composition-is-linear', 'composition')} of linear maps is a matrix product.`,
              state: '$FR = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Check on a basis vector.',
              body: 'Follow $\\mathbf{e}_1$ through each move by hand.',
              state: '$(1, 0) \\to (0, 1) \\to (0, -1)$, which is column 1 of $FR$ ✓',
            },
            {
              title: 'Identify the result by its determinant.',
              body: `A determinant of $1$ means rotation or shear, $-1$ a reflection, $0$ a projection; $|\\det|$ is the ${link('la.determinant-volume-scaling-factor', 'area scale factor')}.`,
              state: '$\\det(FR) = -1$: a reflection, across $y = -x$',
            },
          ],
        },
        examples: [
          {
            title: 'rotation by 60°',
            badge: 'rotation',
            lines: [
              { math: '$R_{60°} = \\begin{pmatrix} \\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & \\frac{1}{2} \\end{pmatrix}$', why: '$\\cos 60° = \\frac{1}{2}$, $\\sin 60° = \\frac{\\sqrt{3}}{2}$' },
              { math: '$R_{60°}(2, 0) = (1, \\sqrt{3})$', why: 'length $2$ is kept', answer: true },
            ],
          },
          {
            title: 'reflection across y = 2x',
            badge: 'reflection',
            lines: [
              { math: '$\\mathbf{u} = (1, 2)$: $P = \\frac{1}{5}\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$', why: 'projection onto the line' },
              { math: '$F = 2P - I = \\frac{1}{5}\\begin{pmatrix} -3 & 4 \\\\ 4 & 3 \\end{pmatrix}$', why: '$\\det F = -1$' },
              { math: '$F(5, 0) = (-3, 4)$, and $F(1, 2) = (1, 2)$ ✓', why: 'points on the line stay', answer: true },
            ],
          },
          {
            title: 'shear, then rotate',
            badge: 'composition',
            lines: [
              { math: '$S = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ first, then $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$', why: 'shear, then rotate $90°$' },
              { math: '$RS = \\begin{pmatrix} 0 & -1 \\\\ 1 & 2 \\end{pmatrix}$', why: 'first move on the right' },
              { math: '$RS(1, 1) = (-1, 3)$; by hand $S(1, 1) = (3, 1)$, $R(3, 1) = (-1, 3)$ ✓', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try the order both ways in the [matrix composition 2D visualizer](!/linear-algebra/visual-tools/matrix-composition-2d), and reflections in the [reflection 2D visualizer](!/linear-algebra/visual-tools/reflection-2d).',
        visual: {
          caption:
            'Picture the unit square with corners $\\mathbf{0}$, $\\mathbf{e}_1$, $\\mathbf{e}_2$ and $\\mathbf{e}_1 + \\mathbf{e}_2$. A geometric map moves it to a parallelogram whose two edges from the origin are the columns of the matrix. Rotations and reflections keep it a unit square, a shear leans it, a projection flattens it onto a line, and the determinant records the signed area of what is left. The [linear transformation 2D visualizer](!/linear-algebra/visual-tools/linear-transformation-2d) draws that parallelogram for any matrix.',
        },
        pitfalls: [
          {
            title: 'Multiplying in reading order',
            wrong: '"rotate, then reflect" $= RF = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$',
            right: '$FR = \\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$: the first move sits next to $\\mathbf{x}$',
            note: '$RF$ is the reflection across $y = x$, a different map.',
          },
          {
            title: 'Clockwise for counterclockwise',
            wrong: '$R_{90°} = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$',
            right: 'counterclockwise is $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$; the matrix on the left turns clockwise',
          },
          {
            title: 'Not doubling the reflection angle',
            wrong: 'reflection across the line at angle $\\phi$: $\\begin{pmatrix} \\cos\\phi & \\sin\\phi \\\\ \\sin\\phi & -\\cos\\phi \\end{pmatrix}$',
            right: 'the entries use $2\\phi$: $\\begin{pmatrix} \\cos 2\\phi & \\sin 2\\phi \\\\ \\sin 2\\phi & -\\cos 2\\phi \\end{pmatrix}$',
          },
          {
            title: 'Projection mixed up with reflection',
            wrong: 'projecting $(5, 0)$ onto $y = 2x$ gives $(-3, 4)$',
            right: 'the projection gives $P(5, 0) = (1, 2)$; $(-3, 4)$ is the reflection',
          },
        ],
        related: ['transformation-matrix', 'change-of-basis', 'linearity-check'],
        builtOn: [
          { label: 'Rotation matrix (2D)', url: ruleUrl('la.rotation-matrix-2d') },
          { label: 'Reflection across a line (2D)', url: ruleUrl('la.reflection-across-line-2d') },
          { label: 'Projection onto a line', url: ruleUrl('la.projection-onto-line') },
          { label: 'Shear matrix', url: ruleUrl('la.shear-matrix') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Linearity, matrices, kernel, basis change, geometry', blurb: 'Composite · each opens its own page' },
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
      { url: '/linear-algebra/vector-spaces/methods', label: 'Vector spaces' },
      { url: '/linear-algebra/eigen/methods', label: 'Eigenvalues and eigenvectors' },
    ],
  },
};

export default transformationsMethods;
