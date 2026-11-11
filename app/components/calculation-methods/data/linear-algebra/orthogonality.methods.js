// orthogonality.methods.js (linear algebra)
// Single data source for /linear-algebra/orthogonality/methods (hub) and
// /linear-algebra/orthogonality/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/orthogonality/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/orthogonality/methods';

const orthogonalityMethods = {
  hubPath: HUB,
  hubLabel: 'orthogonality methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'inner-product',
      slug: 'inner-product',
      name: 'How to compute an inner product',
      description: 'Dot product, weighted and function inner products, and the lengths and angles they give.',
      uses: ['dot product', 'norm', 'angle formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute an Inner Product (Length and Angle) | Learn Math Class',
        description: 'Compute an inner product: pick the rule, multiply matching entries, add, then find length, distance and angle. Dot, weighted and function examples.',
        keywords: ['how to compute an inner product', 'inner product examples', 'dot product length and angle', 'weighted inner product', 'inner product of functions'],
      },
      page: {
        h1: 'How to Compute an Inner Product',
        lead:
          'An inner product turns two vectors into one number. Multiply matching parts, add them up, and the same number then gives lengths, distances and angles.',
        recognize:
          'The problem asks for $\\langle \\mathbf{u}, \\mathbf{v} \\rangle$ or $\\mathbf{u} \\cdot \\mathbf{v}$, a length $\\|\\mathbf{v}\\|$, a distance, or an angle: $(1, 2, -2) \\cdot (3, 0, 4)$, $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 2u_1v_1 + u_2v_2$, $\\langle f, g \\rangle = \\int_0^1 f(x)g(x)\\,dx$. Test: is a rule given? If not, use the standard dot product.',
        recognizeNote: `Inner products are defined in the ${link('lesson.la.orthogonality.inner-product', 'inner product lesson')}; a rule must satisfy the ${link('la.inner-product-axioms', 'inner product axioms')}.`,
        methods: [
          {
            name: 'Standard dot product',
            tag: 'vectors in Rⁿ',
            preferred: true,
            formula: '\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n',
            body: `The default in $\\mathbb{R}^n$ (${link('la.dot-product-algebraic', 'algebraic dot product')}).`,
          },
          {
            name: 'Weighted inner product',
            tag: 'positive weights',
            formula: '\\langle \\mathbf{u}, \\mathbf{v} \\rangle = w_1u_1v_1 + \\cdots + w_nu_nv_n, \\quad w_i > 0',
            body: 'Multiply each product by its weight before adding; every weight must be positive.',
          },
          {
            name: 'Function inner product',
            tag: 'functions on an interval',
            formula: '\\langle f, g \\rangle = \\int_a^b f(x)\\,g(x)\\,dx',
            body: `Multiply the functions and integrate; see the ${link('lesson.la.orthogonality.inner-product.9', 'examples of inner products')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\mathbf{u} = (1, 2, -2)$, $\\mathbf{v} = (3, 0, 4)$',
          items: [
            {
              title: 'Identify the inner product.',
              body: 'No rule given in $\\mathbb{R}^n$ means the standard dot product. Check that both vectors have the same number of entries.',
              state: 'standard dot product in $\\mathbb{R}^3$',
            },
            {
              title: 'Multiply matching entries.',
              body: 'Entry 1 with entry 1, entry 2 with entry 2, and so on. With weights, multiply each product by its weight.',
              state: '$1 \\cdot 3,\\; 2 \\cdot 0,\\; (-2) \\cdot 4$',
            },
            {
              title: 'Add the products.',
              body: 'The sign carries meaning: positive means an acute angle, zero means orthogonal, negative means obtuse.',
              state: '$\\mathbf{u} \\cdot \\mathbf{v} = 3 + 0 - 8 = -5$',
            },
            {
              title: 'Take lengths from the same inner product.',
              body: `The ${link('la.euclidean-norm', 'norm')} is $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$. A distance is the length of the difference $\\mathbf{u} - \\mathbf{v}$.`,
              state: '$\\|\\mathbf{u}\\| = \\sqrt{9} = 3$, $\\|\\mathbf{v}\\| = \\sqrt{25} = 5$',
            },
            {
              title: 'Find the angle if asked.',
              body: `Divide the inner product by both lengths (${link('la.angle-between-vectors', 'angle formula')}). The ${link('la.cauchy-schwarz-inequality', 'Cauchy-Schwarz inequality')} keeps the ratio between $-1$ and $1$.`,
              state: '$\\cos\\theta = \\frac{-5}{3 \\cdot 5} = -\\frac{1}{3}$, $\\theta \\approx 109.47^\\circ$',
            },
          ],
        },
        examples: [
          {
            title: 'four entries',
            badge: 'dot product',
            lines: [
              { math: '$(1, -1, 2, 0) \\cdot (3, 1, 1, 5)$', why: 'match entries in order' },
              { math: '$= 3 - 1 + 2 + 0$', why: 'multiply each pair' },
              { math: '$= 4$', why: 'add', answer: true },
            ],
          },
          {
            title: 'a weighted rule',
            badge: 'weights 2 and 1',
            lines: [
              { math: '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 2u_1v_1 + u_2v_2$, $\\mathbf{u} = (1, 2)$, $\\mathbf{v} = (3, -1)$', why: 'the rule is given' },
              { math: '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 2 \\cdot 1 \\cdot 3 + 2 \\cdot (-1) = 4$', why: 'weight the first product' },
              { math: '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 4$, $\\|\\mathbf{u}\\| = \\sqrt{2 \\cdot 1 + 4} = \\sqrt{6}$', why: 'length under the same rule', answer: true },
            ],
          },
          {
            title: 'two functions',
            badge: 'integral',
            lines: [
              { math: '$\\langle x, x^2 \\rangle = \\int_0^1 x^3\\,dx = \\frac{1}{4}$', why: 'multiply, then integrate' },
              { math: '$\\|x\\| = \\sqrt{\\int_0^1 x^2\\,dx} = \\frac{1}{\\sqrt{3}}$, $\\|x^2\\| = \\frac{1}{\\sqrt{5}}$', why: 'norms from the same integral' },
              { math: '$\\cos\\theta = \\frac{1/4}{1/\\sqrt{15}} = \\frac{\\sqrt{15}}{4} \\approx 0.968$', why: 'the two functions are nearly parallel', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your numbers in the [vector calculator](!/linear-algebra/calculators/vectors).',
        visual: {
          caption:
            'The dot product is the length of one vector times the shadow the other casts on it: $\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta$. A long shadow in the same direction gives a large positive number, no shadow gives zero, and a shadow pointing backwards gives a negative number. Move the vectors in the [inner product visualizer](!/linear-algebra/visual-tools/vectors-inner-product).',
        },
        pitfalls: [
          {
            title: 'Forgetting the square root',
            wrong: '$\\|(3, 0, 4)\\| = 9 + 0 + 16 = 25$',
            right: '$\\|(3, 0, 4)\\| = \\sqrt{25} = 5$',
          },
          {
            title: 'Ignoring the given weights',
            wrong: 'with $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 2u_1v_1 + u_2v_2$: $(1, 2) \\cdot (3, -1) = 1$',
            right: '$2 \\cdot 1 \\cdot 3 + 2 \\cdot (-1) = 4$',
            note: 'Lengths and angles must use the same rule as the inner product.',
          },
          {
            title: 'Squared lengths in the angle formula',
            wrong: '$\\cos\\theta = \\frac{-5}{\\|\\mathbf{u}\\|^2\\|\\mathbf{v}\\|^2} = -\\frac{1}{45}$',
            right: '$\\cos\\theta = \\frac{-5}{3 \\cdot 5} = -\\frac{1}{3}$',
          },
          {
            title: 'Leaving the products unadded',
            wrong: '$(1, 2) \\cdot (3, 4) = (3, 8)$',
            right: '$(1, 2) \\cdot (3, 4) = 3 + 8 = 11$',
            note: 'An inner product is a number, not a vector.',
          },
        ],
        related: ['orthogonal-set-check', 'orthogonal-projection', 'gram-schmidt'],
        builtOn: [
          { label: 'Inner product (lesson)', url: ruleUrl('lesson.la.orthogonality.inner-product') },
          { label: 'Dot product, algebraic form', url: ruleUrl('la.dot-product-algebraic') },
          { label: 'Angle between vectors', url: ruleUrl('la.angle-between-vectors') },
          { label: 'Cauchy-Schwarz inequality', url: ruleUrl('la.cauchy-schwarz-inequality') },
        ],
      },
    },
    {
      id: 'orthogonal-set-check',
      slug: 'orthogonal-set-check',
      name: 'How to check if a set is orthogonal or orthonormal',
      description: 'Dot every pair: all zero means orthogonal; unit lengths as well means orthonormal.',
      uses: ['dot product', 'norm', 'Gram matrix'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Check If a Set Is Orthogonal or Orthonormal | Learn Math Class',
        description: 'Check if vectors are orthogonal or orthonormal: dot every pair, test the lengths, normalize, or test QᵀQ = I for a matrix. Steps, examples and mistakes.',
        keywords: ['how to check if vectors are orthogonal', 'orthogonal set', 'orthonormal set', 'orthogonal matrix test', 'orthonormal basis check'],
      },
      page: {
        h1: 'How to Check If a Set Is Orthogonal or Orthonormal',
        lead:
          'A set is orthogonal when every pair of different vectors has dot product zero. It is orthonormal when, in addition, every vector has length $1$.',
        recognize:
          'A list of vectors or the columns of a matrix, and the question: orthogonal? orthonormal? an orthogonal basis? an orthogonal matrix? Forms: $\\{(1, 1, 0), (1, -1, 1), (-1, 1, 2)\\}$, $\\{(3, 4), (-4, 3)\\}$, $Q = \\frac{1}{3}\\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}$. Test: $k$ vectors need $\\frac{k(k-1)}{2}$ pair checks.',
        recognizeNote: `Orthogonal and orthonormal sets are defined in the ${link('lesson.la.orthogonality.orthogonal-sets', 'orthogonal sets lesson')}; the pair test is the ${link('la.orthogonality-condition', 'orthogonality condition')}.`,
        methods: [
          {
            name: 'Pairwise dot products',
            tag: 'a few vectors',
            preferred: true,
            formula: '\\mathbf{v}_i \\cdot \\mathbf{v}_j = 0 \\quad \\text{for all } i \\neq j',
            body: 'Check each pair once; one nonzero product ends the test.',
          },
          {
            name: 'Gram matrix',
            tag: 'columns of a matrix',
            formula: 'Q^TQ = I \\iff \\text{the columns of } Q \\text{ are orthonormal}',
            body: `Put the vectors in the columns of $Q$ and compute $Q^TQ$: zeros off the diagonal mean orthogonal, ones on it mean orthonormal (${link('la.orthogonal-matrix-definition', 'orthogonal matrix')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $(1, 1, 0)$, $(1, -1, 1)$, $(-1, 1, 2)$',
          items: [
            {
              title: 'List the pairs.',
              body: 'Three vectors give three pairs; four vectors give six.',
              state: '$(\\mathbf{v}_1, \\mathbf{v}_2)$, $(\\mathbf{v}_1, \\mathbf{v}_3)$, $(\\mathbf{v}_2, \\mathbf{v}_3)$',
            },
            {
              title: 'Compute every dot product.',
              body: 'Use the [dot product](!/linear-algebra/vectors/methods/dot-product). Stop at the first nonzero result: the set is not orthogonal.',
              state: '$1 - 1 + 0 = 0$, $-1 + 1 + 0 = 0$, $-1 - 1 + 2 = 0$',
            },
            {
              title: 'Check the lengths.',
              body: 'All pair products zero means orthogonal. For orthonormal, every $\\mathbf{v}_i \\cdot \\mathbf{v}_i$ must equal $1$ as well.',
              state: '$\\|\\mathbf{v}_1\\|^2 = 2$, $\\|\\mathbf{v}_2\\|^2 = 3$, $\\|\\mathbf{v}_3\\|^2 = 6$: orthogonal, not orthonormal',
            },
            {
              title: 'Normalize if an orthonormal set is needed.',
              body: `Divide each vector by its length (${link('la.vector-normalization', 'normalization')}). Scaling does not change orthogonality.`,
              state: '$\\frac{1}{\\sqrt{2}}(1, 1, 0)$, $\\frac{1}{\\sqrt{3}}(1, -1, 1)$, $\\frac{1}{\\sqrt{6}}(-1, 1, 2)$',
            },
          ],
        },
        examples: [
          {
            title: 'two vectors in the plane',
            badge: 'normalize',
            lines: [
              { math: '$(3, 4) \\cdot (-4, 3) = -12 + 12 = 0$', why: 'orthogonal' },
              { math: '$\\|(3, 4)\\| = \\|(-4, 3)\\| = 5$', why: 'not unit length' },
              { math: '$\\{(\\frac{3}{5}, \\frac{4}{5}), (-\\frac{4}{5}, \\frac{3}{5})\\}$ is orthonormal', why: 'divide both by $5$', answer: true },
            ],
          },
          {
            title: 'one pair fails',
            badge: 'not orthogonal',
            lines: [
              { math: '$(1, 2, 1) \\cdot (2, -1, 0) = 2 - 2 + 0 = 0$', why: 'first pair passes' },
              { math: '$(1, 2, 1) \\cdot (1, 1, -1) = 1 + 2 - 1 = 2$', why: 'second pair fails' },
              { math: 'not an orthogonal set', why: 'one nonzero product is enough', answer: true },
            ],
          },
          {
            title: 'an orthogonal matrix',
            badge: 'Gram matrix',
            lines: [
              { math: '$Q = \\frac{1}{3}\\begin{pmatrix} 1 & 2 & 2 \\\\ 2 & 1 & -2 \\\\ 2 & -2 & 1 \\end{pmatrix}$', why: 'the columns are the vectors' },
              { math: 'column products: $2 + 2 - 4 = 0$, $2 - 4 + 2 = 0$, $4 - 2 - 2 = 0$', why: 'off-diagonal entries of $Q^TQ$' },
              { math: 'each column has length $\\frac{3}{3} = 1$', why: 'diagonal entries of $Q^TQ$' },
              { math: '$Q^TQ = I$, so $Q^{-1} = Q^T$', why: 'orthonormal columns', answer: true },
            ],
          },
        ],
        examplesAfter: `With an orthogonal basis, coordinates come free: $c_i = \\frac{\\mathbf{w} \\cdot \\mathbf{v}_i}{\\mathbf{v}_i \\cdot \\mathbf{v}_i}$ (${link('lesson.la.orthogonality.orthogonal-sets.5', 'coordinates via dot products')}). For $\\mathbf{w} = (2, 0, 4)$ and the set above, $c = (1, 2, 1)$.`,
        visual: {
          caption:
            'Orthogonal vectors point along perpendicular directions, like the edges of a box meeting at a corner. The dot product measures how much one vector leans along another; zero lean in every pair means every pair meets at a right angle. Test a matrix in the [orthogonal matrices visualizer](!/linear-algebra/visual-tools/orthogonal-matrices).',
        },
        pitfalls: [
          {
            title: 'Checking only neighboring pairs',
            wrong: 'checking $\\mathbf{v}_1 \\cdot \\mathbf{v}_2$ and $\\mathbf{v}_2 \\cdot \\mathbf{v}_3$ only',
            right: 'check all three pairs, including $\\mathbf{v}_1 \\cdot \\mathbf{v}_3$',
          },
          {
            title: 'Calling an orthogonal set orthonormal',
            wrong: '$\\{(3, 4), (-4, 3)\\}$ is orthonormal',
            right: 'it is orthogonal; divide by $5$ to make it orthonormal',
          },
          {
            title: 'Orthogonal columns are not enough for an orthogonal matrix',
            wrong: '$\\begin{pmatrix} 3 & -4 \\\\ 4 & 3 \\end{pmatrix}$ is an orthogonal matrix',
            right: '$Q^TQ = 25I \\neq I$; an orthogonal matrix needs orthonormal columns',
          },
          {
            title: 'Keeping the zero vector in a basis',
            wrong: '$\\{(1, 0), (0, 0)\\}$ is an orthogonal basis of $\\mathbb{R}^2$',
            right: 'it is an orthogonal set, but a basis cannot contain the zero vector',
            note: `Nonzero orthogonal vectors are always independent (${link('la.orthogonal-set-independence', 'orthogonal sets are independent')}).`,
          },
        ],
        related: ['inner-product', 'gram-schmidt', 'orthogonal-projection'],
        builtOn: [
          { label: 'Orthogonal sets (lesson)', url: ruleUrl('lesson.la.orthogonality.orthogonal-sets') },
          { label: 'Orthogonality condition', url: ruleUrl('la.orthogonality-condition') },
          { label: 'Orthogonal matrix', url: ruleUrl('la.orthogonal-matrix-definition') },
          { label: 'Orthogonal sets are independent', url: ruleUrl('la.orthogonal-set-independence') },
        ],
      },
    },
    {
      id: 'orthogonal-projection',
      slug: 'orthogonal-projection',
      name: 'How to find an orthogonal projection',
      description: 'Project a vector onto a line, a plane or a subspace; split it into a part inside and a part perpendicular.',
      uses: ['dot product', 'orthogonal basis', 'normal equations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find an Orthogonal Projection (Line, Plane, Subspace) | Learn Math Class',
        description: 'Find the orthogonal projection of a vector onto a line, plane or subspace: orthogonal basis sum or normal equations, plus the residual check. Examples.',
        keywords: ['how to find orthogonal projection', 'projection onto a subspace', 'projection onto a plane', 'orthogonal projection examples', 'closest point in a subspace'],
      },
      page: {
        h1: 'How to Find an Orthogonal Projection',
        lead:
          'The orthogonal projection of $\\mathbf{y}$ onto a subspace $W$ is the point of $W$ closest to $\\mathbf{y}$. With an orthogonal basis it is a sum of one-line projections, and the leftover $\\mathbf{y} - \\hat{\\mathbf{y}}$ is perpendicular to $W$.',
        recognize:
          'The problem asks for $\\operatorname{proj}_W \\mathbf{y}$, the closest point on a line or plane, the distance from a point to a subspace, or a split $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$. Forms: onto the line through $(1, 1)$, onto the plane $x + y + z = 0$, onto $\\operatorname{Span}\\{(1, 1, 0), (1, -1, 1)\\}$. Test: is the basis of $W$ orthogonal? That decides the method.',
        recognizeNote: `Projections are defined in the ${link('lesson.la.orthogonality.projections', 'projections lesson')}; the split itself is the ${link('la.orthogonal-decomposition-subspace', 'orthogonal decomposition')}.`,
        methods: [
          {
            name: 'Onto a line',
            tag: 'one vector',
            formula: '\\operatorname{proj}_{\\mathbf{a}} \\mathbf{y} = \\frac{\\mathbf{y} \\cdot \\mathbf{a}}{\\mathbf{a} \\cdot \\mathbf{a}}\\,\\mathbf{a}',
            body: `One ratio of dot products (${link('la.projection-onto-line', 'projection onto a line')}), as in the [vector projection](!/linear-algebra/vectors/methods/vector-projection) method.`,
          },
          {
            name: 'Orthogonal basis',
            tag: 'subspace, orthogonal basis',
            preferred: true,
            formula: '\\hat{\\mathbf{y}} = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}\\mathbf{u}_1 + \\cdots + \\frac{\\mathbf{y} \\cdot \\mathbf{u}_k}{\\mathbf{u}_k \\cdot \\mathbf{u}_k}\\mathbf{u}_k',
            body: `Add one line projection per basis vector (${link('la.projection-onto-subspace', 'projection onto a subspace')}).`,
          },
          {
            name: 'Any basis',
            tag: 'basis not orthogonal',
            formula: '\\hat{\\mathbf{y}} = A\\hat{\\mathbf{x}}, \\quad A^TA\\,\\hat{\\mathbf{x}} = A^T\\mathbf{y}',
            body: `Put the basis in the columns of $A$ and solve the ${link('la.normal-equations', 'normal equations')}, or run [Gram-Schmidt](!${HUB}/gram-schmidt) first.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\mathbf{y} = (2, 3, 4)$, $W = \\operatorname{Span}\\{(1, 1, 0), (1, -1, 1)\\}$',
          items: [
            {
              title: 'Check that the basis is orthogonal.',
              body: 'If $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 \\neq 0$, switch to the normal equations or orthogonalize first.',
              state: '$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 1 - 1 + 0 = 0$ ✓',
            },
            {
              title: 'Compute one coefficient per basis vector.',
              body: 'Each coefficient is $\\frac{\\mathbf{y} \\cdot \\mathbf{u}_i}{\\mathbf{u}_i \\cdot \\mathbf{u}_i}$.',
              state: '$\\frac{2 + 3 + 0}{2} = \\frac{5}{2}$ and $\\frac{2 - 3 + 4}{3} = 1$',
            },
            {
              title: 'Add the scaled basis vectors.',
              body: 'The sum is the projection $\\hat{\\mathbf{y}}$, a point of $W$.',
              state: '$\\hat{\\mathbf{y}} = \\frac{5}{2}(1, 1, 0) + (1, -1, 1) = (\\frac{7}{2}, \\frac{3}{2}, 1)$',
            },
            {
              title: 'Check the residual.',
              body: 'The leftover $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$ must be orthogonal to every basis vector. Its length is the distance from $\\mathbf{y}$ to $W$.',
              state: '$\\mathbf{z} = (-\\frac{3}{2}, \\frac{3}{2}, 3)$, $\\mathbf{z} \\cdot \\mathbf{u}_1 = \\mathbf{z} \\cdot \\mathbf{u}_2 = 0$, distance $\\frac{3\\sqrt{6}}{2}$',
            },
          ],
        },
        examples: [
          {
            title: 'onto a line',
            badge: 'one vector',
            lines: [
              { math: '$\\mathbf{y} = (1, 3)$, $\\mathbf{a} = (1, 1)$: $\\frac{\\mathbf{y} \\cdot \\mathbf{a}}{\\mathbf{a} \\cdot \\mathbf{a}} = \\frac{4}{2} = 2$', why: 'ratio of dot products' },
              { math: '$\\operatorname{proj}_{\\mathbf{a}}\\mathbf{y} = (2, 2)$, residual $(-1, 1)$', why: 'residual is perpendicular to $\\mathbf{a}$', answer: true },
            ],
          },
          {
            title: 'onto a plane through its normal',
            badge: 'remove the normal part',
            lines: [
              { math: '$\\mathbf{y} = (1, 2, 6)$, plane $x + y + z = 0$, $\\mathbf{n} = (1, 1, 1)$', why: 'normal from the coefficients' },
              { math: '$\\frac{\\mathbf{y} \\cdot \\mathbf{n}}{\\mathbf{n} \\cdot \\mathbf{n}} = \\frac{9}{3} = 3$', why: 'the part along the normal' },
              { math: '$\\hat{\\mathbf{y}} = (1, 2, 6) - 3(1, 1, 1) = (-2, -1, 3)$', why: 'entries add to $0$: in the plane', answer: true },
            ],
            note: `This is the ${link('la.projection-onto-plane', 'projection onto a plane')} formula.`,
          },
          {
            title: 'a basis that is not orthogonal',
            badge: 'normal equations',
            lines: [
              { math: '$W = \\operatorname{Span}\\{(1, 0, 1), (1, 1, 0)\\}$, $\\mathbf{y} = (3, 2, 4)$', why: 'the basis vectors have dot product $1$' },
              { math: '$A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $A^T\\mathbf{y} = (7, 5)$', why: 'the basis forms the columns of $A$' },
              { math: '$\\hat{\\mathbf{x}} = (3, 1)$', why: 'solve the $2 \\times 2$ system' },
              { math: '$\\hat{\\mathbf{y}} = 3(1, 0, 1) + (1, 1, 0) = (4, 1, 3)$', why: 'residual $(-1, 1, 1)$ is perpendicular', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Drop a perpendicular from the tip of $\\mathbf{y}$ to the subspace: where it lands is $\\hat{\\mathbf{y}}$, and the perpendicular itself is $\\mathbf{z}$. No other point of $W$ is closer, because moving away from $\\hat{\\mathbf{y}}$ inside $W$ adds a sideways piece at a right angle to $\\mathbf{z}$, and by Pythagoras that only makes the distance longer. Drag the vectors in the [projection 2D visualizer](!/linear-algebra/visual-tools/projection-2d).',
        },
        pitfalls: [
          {
            title: 'Adding projections onto a basis that is not orthogonal',
            wrong: 'for $(1, 0, 1)$, $(1, 1, 0)$ and $\\mathbf{y} = (3, 2, 4)$: $\\frac{7}{2}(1, 0, 1) + \\frac{5}{2}(1, 1, 0) = (6, \\frac{5}{2}, \\frac{7}{2})$',
            right: 'the basis is not orthogonal: solve the normal equations, $\\hat{\\mathbf{y}} = (4, 1, 3)$',
          },
          {
            title: 'Dividing by the length, not the squared length',
            wrong: '$\\frac{\\mathbf{y} \\cdot \\mathbf{a}}{\\|\\mathbf{a}\\|}\\,\\mathbf{a} = \\frac{4}{\\sqrt{2}}(1, 1)$',
            right: '$\\frac{\\mathbf{y} \\cdot \\mathbf{a}}{\\mathbf{a} \\cdot \\mathbf{a}}\\,\\mathbf{a} = 2(1, 1)$',
            note: 'The scalar projection divides by $\\|\\mathbf{a}\\|$; the vector projection divides by $\\|\\mathbf{a}\\|^2$.',
          },
          {
            title: 'Reporting the normal part as the projection',
            wrong: 'onto the plane $x + y + z = 0$: $\\hat{\\mathbf{y}} = 3(1, 1, 1)$',
            right: 'that is the part along the normal; $\\hat{\\mathbf{y}} = \\mathbf{y} - 3(1, 1, 1) = (-2, -1, 3)$',
          },
        ],
        related: ['gram-schmidt', 'least-squares', 'orthogonal-set-check'],
        builtOn: [
          { label: 'Projections (lesson)', url: ruleUrl('lesson.la.orthogonality.projections') },
          { label: 'Projection onto a subspace', url: ruleUrl('la.projection-onto-subspace') },
          { label: 'Orthogonal decomposition', url: ruleUrl('la.orthogonal-decomposition-subspace') },
          { label: 'Projection onto a line', url: ruleUrl('la.projection-onto-line') },
        ],
      },
    },
    {
      id: 'gram-schmidt',
      slug: 'gram-schmidt',
      name: 'How to apply the Gram-Schmidt process',
      description: 'Turn any basis into an orthogonal one: subtract projections one vector at a time, then normalize.',
      uses: ['projection', 'dot product', 'normalization'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Apply the Gram-Schmidt Process (Orthonormal Basis) | Learn Math Class',
        description: 'Apply the Gram-Schmidt process: keep the first vector, subtract projections from each next one, check, then normalize. Examples in R², R³ and polynomials.',
        keywords: ['gram-schmidt process', 'how to do gram-schmidt', 'gram-schmidt example', 'find an orthonormal basis', 'orthogonalize vectors'],
      },
      page: {
        h1: 'How to Apply the Gram-Schmidt Process',
        lead:
          'Gram-Schmidt turns independent vectors into orthogonal ones with the same span. Keep the first vector; from each next one subtract its projections onto the orthogonal vectors already built.',
        recognize:
          'The problem asks for an orthogonal or orthonormal basis of a span, a column space or a subspace given by a basis, or for $Q$ in $A = QR$. Forms: orthogonalize $(1, 1, 0), (2, 0, 1), (1, 1, 3)$; find an orthonormal basis of $\\operatorname{Col} A$; orthogonalize $1, x, x^2$ on $[-1, 1]$. Test: the inputs must be independent; a zero vector during the process means they are not.',
        recognizeNote: `The process is set out in the ${link('lesson.la.orthogonality.gram-schmidt', 'Gram-Schmidt lesson')}, with the general ${link('la.gram-schmidt-process', 'Gram-Schmidt formula')}.`,
        steps: {
          traceLabel: 'On $\\mathbf{v}_1 = (1, 1, 0)$, $\\mathbf{v}_2 = (2, 0, 1)$, $\\mathbf{v}_3 = (1, 1, 3)$',
          items: [
            {
              title: 'Keep the first vector.',
              body: 'Set $\\mathbf{u}_1 = \\mathbf{v}_1$. Any order of the inputs works, but a different order gives a different basis.',
              state: '$\\mathbf{u}_1 = (1, 1, 0)$, $\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 2$',
            },
            {
              title: 'Subtract the projection from the second vector.',
              body: `Remove from $\\mathbf{v}_2$ its [projection](!${HUB}/orthogonal-projection) onto $\\mathbf{u}_1$.`,
              state: '$\\frac{\\mathbf{v}_2 \\cdot \\mathbf{u}_1}{2} = 1$, $\\mathbf{u}_2 = (2, 0, 1) - (1, 1, 0) = (1, -1, 1)$',
            },
            {
              title: 'Subtract both projections from the third vector.',
              body: 'Project onto the new $\\mathbf{u}_1, \\mathbf{u}_2$, never onto the original $\\mathbf{v}_1, \\mathbf{v}_2$.',
              state: '$\\frac{\\mathbf{v}_3 \\cdot \\mathbf{u}_1}{2} = 1$, $\\frac{\\mathbf{v}_3 \\cdot \\mathbf{u}_2}{3} = 1$, $\\mathbf{u}_3 = (1, 1, 3) - (1, 1, 0) - (1, -1, 1) = (-1, 1, 2)$',
            },
            {
              title: 'Check orthogonality.',
              body: 'Every pair of new vectors must have dot product zero; an arithmetic slip shows up here at once.',
              state: '$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = \\mathbf{u}_1 \\cdot \\mathbf{u}_3 = \\mathbf{u}_2 \\cdot \\mathbf{u}_3 = 0$ ✓',
            },
            {
              title: 'Normalize for an orthonormal basis.',
              body: `Divide each $\\mathbf{u}_i$ by its length (${link('la.vector-normalization', 'normalization')}). Rescaling a $\\mathbf{u}_i$ early, for example to clear fractions, does not change the later vectors.`,
              state: '$\\frac{1}{\\sqrt{2}}(1, 1, 0)$, $\\frac{1}{\\sqrt{3}}(1, -1, 1)$, $\\frac{1}{\\sqrt{6}}(-1, 1, 2)$',
            },
          ],
        },
        examples: [
          {
            title: 'two vectors in the plane',
            badge: '2 vectors',
            lines: [
              { math: '$\\mathbf{v}_1 = (1, 1)$, $\\mathbf{v}_2 = (3, 1)$: $\\frac{\\mathbf{v}_2 \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{4}{2} = 2$', why: 'project onto $\\mathbf{u}_1 = \\mathbf{v}_1$' },
              { math: '$\\mathbf{u}_2 = (3, 1) - 2(1, 1) = (1, -1)$', why: 'subtract the projection' },
              { math: '$\\{\\frac{1}{\\sqrt{2}}(1, 1), \\frac{1}{\\sqrt{2}}(1, -1)\\}$', why: 'normalize both', answer: true },
            ],
          },
          {
            title: 'a dependent input',
            badge: 'zero vector',
            lines: [
              { math: '$\\mathbf{v}_1 = (1, 2, 0)$, $\\mathbf{v}_2 = (2, 4, 0)$: $\\frac{\\mathbf{v}_2 \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1} = \\frac{10}{5} = 2$', why: '' },
              { math: '$\\mathbf{u}_2 = (2, 4, 0) - 2(1, 2, 0) = \\mathbf{0}$', why: '$\\mathbf{v}_2$ was already in the span' },
              { math: 'drop $\\mathbf{v}_2$; orthonormal basis $\\{\\frac{1}{\\sqrt{5}}(1, 2, 0)\\}$', why: 'a zero vector cannot be normalized', answer: true },
            ],
          },
          {
            title: 'polynomials on an interval',
            badge: 'integral inner product',
            lines: [
              { math: '$\\langle f, g \\rangle = \\int_{-1}^{1} f(x)g(x)\\,dx$; $u_1 = 1$; $\\langle x, 1 \\rangle = 0$, so $u_2 = x$', why: 'odd functions integrate to $0$' },
              { math: '$\\frac{\\langle x^2, 1 \\rangle}{\\langle 1, 1 \\rangle} = \\frac{2/3}{2} = \\frac{1}{3}$, $\\langle x^2, x \\rangle = 0$', why: 'project $x^2$ onto $1$ and $x$' },
              { math: '$u_3 = x^2 - \\frac{1}{3}$: orthogonal basis $\\{1, x, x^2 - \\frac{1}{3}\\}$', why: 'Legendre polynomials, up to scale', answer: true },
            ],
          },
        ],
        examplesAfter: 'The same numbers give $A = QR$, as the [QR decomposition](!/linear-algebra/decompositions/methods/qr-decomposition) method shows. Run your own vectors through the [vector calculator](!/linear-algebra/calculators/vectors).',
        visual: {
          caption:
            'Each step removes the shadow that $\\mathbf{v}_j$ casts on the vectors already built. What remains sticks straight out of their span, so it is perpendicular to all of them, and because the inputs are independent something always remains. Watch the shadows being removed in the [Gram-Schmidt visualizer](!/linear-algebra/visual-tools/gram-schmidt).',
        },
        pitfalls: [
          {
            title: 'Projecting onto the original vectors',
            wrong: '$\\mathbf{u}_3 = \\mathbf{v}_3 - \\operatorname{proj}_{\\mathbf{v}_1}\\mathbf{v}_3 - \\operatorname{proj}_{\\mathbf{v}_2}\\mathbf{v}_3$',
            right: '$\\mathbf{u}_3 = \\mathbf{v}_3 - \\operatorname{proj}_{\\mathbf{u}_1}\\mathbf{v}_3 - \\operatorname{proj}_{\\mathbf{u}_2}\\mathbf{v}_3$',
          },
          {
            title: 'Dropping the denominator',
            wrong: '$\\mathbf{u}_2 = (2, 0, 1) - (\\mathbf{v}_2 \\cdot \\mathbf{u}_1)\\,\\mathbf{u}_1 = (0, -2, 1)$',
            right: '$\\mathbf{u}_2 = (2, 0, 1) - \\frac{2}{2}(1, 1, 0) = (1, -1, 1)$',
            note: 'You may skip the division only when $\\mathbf{u}_1$ is a unit vector.',
          },
          {
            title: 'Normalizing the inputs instead of the outputs',
            wrong: 'normalize $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ and call the result orthonormal',
            right: 'orthogonalize first, then divide each $\\mathbf{u}_i$ by $\\|\\mathbf{u}_i\\|$',
          },
        ],
        related: ['orthogonal-projection', 'orthogonal-set-check', 'least-squares'],
        builtOn: [
          { label: 'Gram-Schmidt process (lesson)', url: ruleUrl('lesson.la.orthogonality.gram-schmidt') },
          { label: 'Gram-Schmidt formula', url: ruleUrl('la.gram-schmidt-process') },
          { label: 'Projection onto a line', url: ruleUrl('la.projection-onto-line') },
          { label: 'Vector normalization', url: ruleUrl('la.vector-normalization') },
        ],
      },
    },
    {
      id: 'least-squares',
      slug: 'least-squares',
      name: 'How to solve a least-squares problem',
      description: 'When $A\\mathbf{x} = \\mathbf{b}$ has no solution, solve the normal equations for the closest fit.',
      uses: ['normal equations', 'projection', 'QR'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Least-Squares Problem (Normal Equations) | Learn Math Class',
        description: 'Solve a least-squares problem: form the normal equations AᵀAx = Aᵀb, solve them, find the error and check it is orthogonal to the columns. QR and examples.',
        keywords: ['how to solve least squares', 'normal equations', 'least squares solution', 'least squares examples', 'overdetermined system'],
      },
      page: {
        h1: 'How to Solve a Least-Squares Problem',
        lead:
          'When $A\\mathbf{x} = \\mathbf{b}$ has no solution, find the $\\hat{\\mathbf{x}}$ that makes $A\\hat{\\mathbf{x}}$ as close to $\\mathbf{b}$ as possible. Multiply both sides by $A^T$ and solve the square system that results.',
        recognize:
          'More equations than unknowns and no exact solution: a tall matrix $A$, data that do not fit a model exactly, "best approximate solution", "minimize $\\|A\\mathbf{x} - \\mathbf{b}\\|$". Forms: $\\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix}\\mathbf{x} = (6, 0, 0)$; $x = 1$, $x = 2$, $x = 6$. Test: row reduce $[A \\mid \\mathbf{b}]$; a row $[0 \\; \\cdots \\; 0 \\mid c]$ with $c \\neq 0$ means you need least squares.',
        recognizeNote: `The problem and its geometry are in the ${link('lesson.la.orthogonality.least-squares', 'least squares lesson')}.`,
        methods: [
          {
            name: 'Normal equations',
            tag: 'by hand',
            preferred: true,
            formula: 'A^TA\\,\\hat{\\mathbf{x}} = A^T\\mathbf{b}',
            body: `A square, symmetric system, solvable whenever the columns of $A$ are independent (${link('la.normal-equations', 'normal equations')}).`,
          },
          {
            name: 'QR factorization',
            tag: 'numerically safer',
            formula: 'R\\,\\hat{\\mathbf{x}} = Q^T\\mathbf{b}',
            body: `Factor $A = QR$ with the [QR decomposition](!/linear-algebra/decompositions/methods/qr-decomposition), then back-substitute (${link('la.least-squares-via-qr', 'least squares via QR')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $\\mathbf{b} = (6, 0, 0)$',
          items: [
            {
              title: 'Confirm there is no exact solution.',
              body: 'The equations $x_1 = 6$, $x_1 + x_2 = 0$, $x_1 + 2x_2 = 0$ contradict each other.',
              state: 'the first two give $x_2 = -6$, the first and third give $x_2 = -3$: inconsistent',
            },
            {
              title: 'Form the normal equations.',
              body: 'Multiply $A$ and $\\mathbf{b}$ on the left by $A^T$. The result is an $n \\times n$ system, $n$ the number of unknowns.',
              state: '$A^TA = \\begin{pmatrix} 3 & 3 \\\\ 3 & 5 \\end{pmatrix}$, $A^T\\mathbf{b} = (6, 0)$',
            },
            {
              title: 'Solve the square system.',
              body: 'Use elimination or the [inverse of a 2×2 matrix](!/linear-algebra/matrix/methods/inverse-2x2).',
              state: '$3x_1 + 3x_2 = 6$, $3x_1 + 5x_2 = 0$ $\\Rightarrow$ $\\hat{\\mathbf{x}} = (5, -3)$',
            },
            {
              title: 'Compute the projection and the error.',
              body: `$A\\hat{\\mathbf{x}}$ is the [orthogonal projection](!${HUB}/orthogonal-projection) of $\\mathbf{b}$ onto the column space; $\\mathbf{e} = \\mathbf{b} - A\\hat{\\mathbf{x}}$ is the error.`,
              state: '$A\\hat{\\mathbf{x}} = (5, 2, -1)$, $\\mathbf{e} = (1, -2, 1)$, $\\|\\mathbf{e}\\|^2 = 6$',
            },
            {
              title: 'Check that the error is orthogonal to the columns.',
              body: '$A^T\\mathbf{e}$ must be the zero vector; that is exactly what the normal equations say.',
              state: '$A^T\\mathbf{e} = (1 - 2 + 1,\\; 0 - 2 + 2) = (0, 0)$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'one unknown, three readings',
            badge: '1 column',
            lines: [
              { math: '$x = 1$, $x = 2$, $x = 6$: $A = (1, 1, 1)^T$, $\\mathbf{b} = (1, 2, 6)$', why: 'three equations, one unknown' },
              { math: '$A^TA = 3$, $A^T\\mathbf{b} = 9$', why: '' },
              { math: '$\\hat{x} = 3$, the mean of the readings', why: 'least squares averages here', answer: true },
            ],
          },
          {
            title: 'orthogonal columns',
            badge: 'diagonal normal matrix',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\\\ 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $\\mathbf{b} = (1, 2, 3, 6)$', why: 'the columns are orthogonal' },
              { math: '$A^TA = 4I$, $A^T\\mathbf{b} = (12, -4)$', why: 'no elimination needed' },
              { math: '$\\hat{\\mathbf{x}} = (3, -1)$, $\\mathbf{e} = (-1, -2, 1, 2)$', why: 'divide by $4$', answer: true },
            ],
          },
          {
            title: 'a full two-by-two solve',
            badge: 'error vector',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$, $\\mathbf{b} = (1, 1, 0)$', why: '' },
              { math: '$A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $A^T\\mathbf{b} = (1, 1)$', why: '' },
              { math: '$\\hat{\\mathbf{x}} = (\\frac{1}{3}, \\frac{1}{3})$', why: 'solve $2x + y = 1$, $x + 2y = 1$' },
              { math: '$\\mathbf{e} = (\\frac{2}{3}, \\frac{2}{3}, -\\frac{2}{3})$, $\\|\\mathbf{e}\\|^2 = \\frac{4}{3}$', why: 'check: $A^T\\mathbf{e} = \\mathbf{0}$', answer: true },
            ],
          },
        ],
        examplesAfter: `Fitting a line or a parabola to data is the same computation: see [least-squares fitting](!${HUB}/least-squares-fitting). Solve the normal equations in the [linear systems calculator](!/linear-algebra/calculators/linear-systems).`,
        visual: {
          caption:
            'The vectors $A\\mathbf{x}$ fill the column space of $A$, a flat subspace, and $\\mathbf{b}$ sticks out of it. The closest point is the foot of the perpendicular from $\\mathbf{b}$, so the error $\\mathbf{b} - A\\hat{\\mathbf{x}}$ is perpendicular to every column: $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$, which is the normal equations. See it in the [least squares visualizer](!/linear-algebra/visual-tools/least-squares).',
        },
        pitfalls: [
          {
            title: 'Cancelling the transpose',
            wrong: '$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b} \\Rightarrow A\\hat{\\mathbf{x}} = \\mathbf{b}$',
            right: '$A^T$ has no inverse when $A$ is tall; solve the $n \\times n$ system as it stands',
          },
          {
            title: 'Multiplying in the wrong order',
            wrong: '$AA^T\\hat{\\mathbf{x}} = A^T\\mathbf{b}$',
            right: '$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$; $A^TA$ is $n \\times n$, matching $\\hat{\\mathbf{x}}$',
          },
          {
            title: 'Treating the fit as exact',
            wrong: '$\\hat{\\mathbf{x}} = (5, -3)$ solves $A\\mathbf{x} = \\mathbf{b}$',
            right: '$A\\hat{\\mathbf{x}} = (5, 2, -1) \\neq \\mathbf{b}$; the minimum error is $\\|\\mathbf{e}\\| = \\sqrt{6}$',
          },
          {
            title: 'Dependent columns',
            wrong: 'inverting $A^TA$ when the columns of $A$ are dependent',
            right: '$A^TA$ is then singular and there are infinitely many $\\hat{\\mathbf{x}}$; the pseudoinverse picks the shortest',
            note: `See the ${link('lesson.la.orthogonality.least-squares.7', 'pseudoinverse')} section.`,
          },
        ],
        related: ['least-squares-fitting', 'orthogonal-projection', 'gram-schmidt'],
        builtOn: [
          { label: 'Least squares (lesson)', url: ruleUrl('lesson.la.orthogonality.least-squares') },
          { label: 'Normal equations', url: ruleUrl('la.normal-equations') },
          { label: 'Least-squares solution', url: ruleUrl('la.least-squares-solution') },
          { label: 'Least squares via QR', url: ruleUrl('la.least-squares-via-qr') },
        ],
      },
    },

    // ═══ II. Applied ════════════════════════════════════════════════════
    {
      id: 'least-squares-fitting',
      slug: 'least-squares-fitting',
      name: 'How to fit a line or curve to data',
      description: 'Turn data points into an overdetermined system, solve the normal equations, read off the best-fit model.',
      uses: ['least squares', 'normal equations'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 3 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Fit a Line or Curve to Data (Least Squares) | Learn Math Class',
        description: 'Fit a line or parabola to data with least squares: write one equation per point, build the matrix, solve the normal equations, interpret. Word problems.',
        keywords: ['line of best fit', 'least squares regression line', 'fit a parabola to data', 'least squares fitting examples', 'linear regression matrix'],
      },
      page: {
        h1: 'How to Fit a Line or Curve to Data',
        lead:
          'Measured data never sit exactly on a line. Write one equation per data point, accept that the system has no exact solution, and let least squares choose the coefficients that make the total squared error smallest.',
        recognize:
          'Trigger words: **line of best fit**, **regression line**, **least-squares line**, **best-fitting parabola**, **fit a model**, **predict**. A table of $(t, y)$ points and a model with unknown coefficients: $y = c_0 + c_1t$, $y = c_0 + c_1t + c_2t^2$, $y = kt$.',
        setup: [
          { label: 'Model', body: 'Write the model with its unknown coefficients: $y = c_0 + c_1t$ for a line, add $c_2t^2$ for a parabola, drop $c_0$ for a line through the origin.' },
          { label: 'Equations', body: 'Substitute each data point. Each point gives one equation that is linear in the coefficients, even when the model is curved in $t$.' },
          { label: 'Matrix', body: 'Stack the equations as $A\\mathbf{c} = \\mathbf{y}$: one row per point, one column per coefficient (a column of $1$s, a column of $t$ values, a column of $t^2$ values). $\\mathbf{y}$ holds the measured values.' },
          { label: 'Normal equations', body: `Form $A^TA$ and $A^T\\mathbf{y}$ (${link('la.normal-equations', 'normal equations')}). For a line, $A^TA = \\begin{pmatrix} n & \\sum t \\\\ \\sum t & \\sum t^2 \\end{pmatrix}$ and $A^T\\mathbf{y} = (\\sum y, \\sum ty)$.` },
          { label: 'Check', body: 'You need more points than coefficients, and at least two different $t$ values for a line; otherwise $A^TA$ is singular.' },
        ],
        handoff: {
          to: 'least-squares',
          body: 'Solve $A^TA\\,\\hat{\\mathbf{c}} = A^T\\mathbf{y}$ for the coefficients.',
        },
        interpretation: `Write the fitted model with the coefficients in place and units on $t$ and $y$. The slope is the change in $y$ per unit of $t$. Predict by substituting a new $t$, with care far outside the data range. The residuals $y_i - \\hat{y}_i$ should be small and show no pattern; the sum of their squares is the minimum error. This is ${link('lesson.la.orthogonality.least-squares.9', 'regression as least squares')}.`,
        examples: [
          {
            title: 'weekly sales',
            badge: 'line',
            lines: [
              { math: 'sales in weeks $1$ to $4$: $2, 3, 5, 6$ hundred units; predict week $6$', why: 'model $y = c_0 + c_1t$' },
              { math: '$A^TA = \\begin{pmatrix} 4 & 10 \\\\ 10 & 30 \\end{pmatrix}$, $A^T\\mathbf{y} = (16, 47)$', why: '$\\sum t = 10$, $\\sum t^2 = 30$, $\\sum ty = 47$' },
              { math: '$\\hat{c}_0 = 0.5$, $\\hat{c}_1 = 1.4$', why: 'determinant $120 - 100 = 20$' },
              { math: '$y = 0.5 + 1.4t$; week $6$: about $890$ units', why: '$0.5 + 1.4 \\cdot 6 = 8.9$ hundred', answer: true },
            ],
          },
          {
            title: 'spring stretch',
            badge: 'through the origin',
            lines: [
              { math: 'forces $1, 2, 3$ N stretch a spring $2, 6, 7$ cm; model $x = kF$', why: 'no intercept in this model' },
              { math: '$A = (1, 2, 3)^T$: $A^TA = 14$, $A^T\\mathbf{x} = 2 + 12 + 21 = 35$', why: 'one column, no column of $1$s' },
              { math: '$\\hat{k} = \\frac{35}{14} = 2.5$ cm per N', why: 'residuals $-0.5, 1, -0.5$', answer: true },
            ],
          },
          {
            title: 'height of a thrown ball',
            badge: 'parabola',
            lines: [
              { math: 'heights $1, 4, 4, 0$ m at $t = 0, 1, 2, 3$ s; model $h = c_0 + c_1t + c_2t^2$', why: 'three coefficients, four points' },
              { math: '$A^TA = \\begin{pmatrix} 4 & 6 & 14 \\\\ 6 & 14 & 36 \\\\ 14 & 36 & 98 \\end{pmatrix}$, $A^T\\mathbf{h} = (9, 12, 20)$', why: 'sums of $t^k$ and $t^kh$' },
              { math: '$\\hat{\\mathbf{c}} = (0.95, 4.95, -1.75)$', why: 'solve the $3 \\times 3$ system' },
              { math: '$h = 0.95 + 4.95t - 1.75t^2$, squared error $0.05$', why: 'residuals $0.05, -0.15, 0.15, -0.05$', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'Picture each data point tied to the line by a vertical spring whose stretch is its residual. Least squares finds the position where the total squared stretch is smallest; there the residuals add to zero and their products with $t$ add to zero, which is what the two normal equations say. Drag the points in the [least squares visualizer](!/linear-algebra/visual-tools/least-squares).',
        },
        pitfalls: [
          {
            title: 'Measuring the wrong distances',
            wrong: 'measuring residuals horizontally or perpendicular to the line',
            right: 'least squares measures vertical errors $y_i - \\hat{y}_i$',
          },
          {
            title: 'Forgetting the column of ones',
            wrong: '$A = (1, 2, 3, 4)^T$ for the model $y = c_0 + c_1t$',
            right: '$A$ has a column of $1$s for $c_0$ and a column of $t$ values for $c_1$',
          },
          {
            title: 'Calling a curved model nonlinear',
            wrong: '$y = c_0 + c_1t + c_2t^2$ needs a nonlinear method',
            right: 'it is linear in $c_0, c_1, c_2$; use one column per power of $t$',
          },
          {
            title: 'Predicting far outside the data',
            wrong: 'week $50$: $0.5 + 1.4 \\cdot 50 = 70.5$ hundred units, stated as fact',
            right: 'trust a fit near the data; flag long-range predictions as rough',
          },
        ],
        related: ['least-squares', 'orthogonal-projection'],
        builtOn: [
          { label: 'Fitting a line (lesson)', url: ruleUrl('lesson.la.orthogonality.least-squares.4') },
          { label: 'Fitting a parabola (lesson)', url: ruleUrl('lesson.la.orthogonality.least-squares.5') },
          { label: 'Regression as least squares (lesson)', url: ruleUrl('lesson.la.orthogonality.least-squares.9') },
          { label: 'Normal equations', url: ruleUrl('la.normal-equations') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Inner products, projections, least squares', blurb: 'Composite · each opens its own page' },
    { id: 'applied', label: 'Word problems', blurb: 'Applied · fitting data' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'composite', label: 'Composite' },
        { value: 'applied', label: 'Applied' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/vectors/methods', label: 'Vectors' },
      { url: '/linear-algebra/vector-spaces/methods', label: 'Vector spaces' },
      { url: '/linear-algebra/decompositions/methods', label: 'Decompositions' },
    ],
  },
};

export default orthogonalityMethods;
