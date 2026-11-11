// vectors.methods.js (linear algebra)
// Single data source for /linear-algebra/vectors/methods (hub) and
// /linear-algebra/vectors/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/vectors/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/vectors/methods';

const vectorsMethods = {
  hubPath: HUB,
  hubLabel: 'vector methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'vector-addition',
      name: 'How to add or subtract vectors',
      subtitle: 'Component-wise addition',
      glyph: 'u+v',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'Two vectors of the same dimension joined by $+$ or $-$: $(3, -1, 2) + (1, 4, -5)$, $\\mathbf{u} - \\mathbf{v}$.',
      formula: '\\mathbf{u} \\pm \\mathbf{v} = (u_1 \\pm v_1,\\ u_2 \\pm v_2,\\ \\ldots,\\ u_n \\pm v_n)',
      fields: {
        steps: [
          '1. Check that both vectors have the same number of components.',
          '2. Add (or subtract) the matching components, first with first, second with second.',
        ],
        worked_example: '$(3, -1, 2) + (1, 4, -5) = (4, 3, -3)$, $\\ (3, -1, 2) - (1, 4, -5) = (2, -5, 7)$',
      },
      links: [
        { url: ruleUrl('la.vector-addition'), label: 'Vector addition' },
        { url: ruleUrl('la.vector-subtraction'), label: 'Vector subtraction' },
        { url: ruleUrl('lesson.la.vectors.basic-operations.1'), label: 'Vector addition (lesson)' },
      ],
    },
    {
      id: 'scalar-multiplication',
      name: 'How to multiply a vector by a scalar',
      subtitle: 'Scalar multiplication',
      glyph: 'cv',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A number in front of a vector: $-3(2, -1, 4)$, $\\tfrac{1}{2}\\mathbf{v}$, $5\\mathbf{u}$.',
      formula: 'c\\,\\mathbf{v} = (c\\,v_1,\\ c\\,v_2,\\ \\ldots,\\ c\\,v_n)',
      fields: {
        steps: [
          '1. Multiply every component by the scalar $c$.',
          '2. A negative $c$ flips the direction; $|c|$ scales the length.',
        ],
        worked_example: '$-3(2, -1, 4) = (-6, 3, -12)$',
      },
      links: [
        { url: ruleUrl('la.scalar-multiplication-of-vectors'), label: 'Scalar multiplication' },
        { url: ruleUrl('lesson.la.vectors.basic-operations.4'), label: 'Scalar multiplication (lesson)' },
      ],
    },
    {
      id: 'magnitude',
      name: 'How to find the magnitude of a vector',
      subtitle: 'Euclidean norm',
      glyph: '‖v‖',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'The length of a vector is asked for: $\\|(2, -3, 6)\\|$, $\\|(3, 4)\\|$, the distance $\\|\\mathbf{u} - \\mathbf{v}\\|$.',
      formula: '\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}',
      fields: {
        steps: [
          '1. Square every component and add the squares.',
          '2. Take the square root. The result is never negative.',
        ],
        worked_example: '$\\|(2, -3, 6)\\| = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$',
      },
      links: [
        { url: ruleUrl('la.euclidean-norm'), label: 'Euclidean norm' },
        { url: ruleUrl('lesson.la.vectors.magnitude.1'), label: 'Magnitude (lesson)' },
      ],
    },
    {
      id: 'unit-vector',
      name: 'How to find a unit vector in a given direction',
      subtitle: 'Normalization',
      glyph: 'v̂',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A vector of length $1$ pointing the same way as $\\mathbf{v}$: normalize $(3, 4)$, the direction of $(1, -2, 2)$.',
      formula: '\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}}{\\|\\mathbf{v}\\|}, \\qquad \\mathbf{v} \\neq \\mathbf{0}',
      fields: {
        steps: [
          '1. Compute the magnitude $\\|\\mathbf{v}\\|$; the zero vector has no direction.',
          '2. Divide every component by $\\|\\mathbf{v}\\|$.',
          '3. Check: the new vector has length $1$.',
        ],
        worked_example: '$\\|(3, 4)\\| = 5$, so $\\hat{\\mathbf{v}} = \\left(\\tfrac{3}{5}, \\tfrac{4}{5}\\right)$',
      },
      links: [
        { url: ruleUrl('la.vector-normalization'), label: 'Vector normalization' },
        { url: ruleUrl('lesson.la.vectors.magnitude.5'), label: 'Unit vectors (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'dot-product',
      slug: 'dot-product',
      name: 'How to compute the dot product',
      description: 'Multiply matching components and add; or use the two lengths and the angle between them.',
      uses: ['component products', 'lengths and angle'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute the Dot Product (Two Formulas) | Learn Math Class',
        description: 'Compute the dot product of two vectors: multiply matching components and add, or use the lengths and the angle. Steps, worked examples and common mistakes.',
        keywords: ['how to compute the dot product', 'dot product formula', 'dot product examples', 'scalar product of vectors', 'dot product steps'],
      },
      page: {
        h1: 'How to Compute the Dot Product',
        lead:
          'The dot product turns two vectors into one number. Multiply the matching components and add the products; the sign of the result tells you whether the vectors point roughly the same way.',
        recognize:
          'Two vectors of the same dimension joined by a dot: $\\mathbf{u} \\cdot \\mathbf{v}$, $(3, -2) \\cdot (1, 4)$, $\\mathbf{a}^T\\mathbf{b}$, or "the angle between" and "orthogonal" in the question. Test: is the answer a single number built from two vectors?',
        recognizeNote: `The dot product is defined in the ${link('lesson.la.vectors.dot-product.1', 'dot product lesson')}.`,
        methods: [
          {
            name: 'Components',
            tag: 'coordinates known',
            preferred: true,
            formula: '\\mathbf{u} \\cdot \\mathbf{v} = u_1 v_1 + u_2 v_2 + \\cdots + u_n v_n',
            body: `The ${link('la.dot-product-algebraic', 'algebraic dot product')}: use it whenever you have the components.`,
          },
          {
            name: 'Lengths and angle',
            tag: 'geometry known',
            formula: '\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\|\\,\\|\\mathbf{v}\\| \\cos\\theta',
            body: `The ${link('la.dot-product-geometric', 'geometric dot product')}: use it when the problem gives the lengths and the angle instead of coordinates.`,
          },
        ],
        steps: {
          traceLabel: 'On $(2, -1, 3) \\cdot (4, 0, -2)$',
          items: [
            {
              title: 'Check the dimensions match.',
              body: 'The dot product is defined only for two vectors with the same number of components.',
              state: 'both in $\\mathbb{R}^3$',
            },
            {
              title: 'Multiply matching components.',
              body: 'First with first, second with second, and so on. Keep the signs.',
              state: '$2 \\cdot 4 = 8$, $\\ (-1) \\cdot 0 = 0$, $\\ 3 \\cdot (-2) = -6$',
            },
            {
              title: 'Add the products.',
              body: 'The result is a scalar, not a vector.',
              state: '$8 + 0 - 6 = 2$',
            },
            {
              title: 'Read the sign.',
              body: `Positive: the angle is acute. Zero: the vectors are ${link('la.orthogonality-condition', 'orthogonal')}. Negative: the angle is obtuse.`,
              state: '$2 > 0$: acute angle',
            },
          ],
        },
        examples: [
          {
            title: 'two dimensions',
            badge: 'basic',
            lines: [
              { math: '$(3, -2) \\cdot (1, 4) = 3 \\cdot 1 + (-2) \\cdot 4$', why: 'multiply matching components' },
              { math: '$= 3 - 8 = -5$', why: 'negative: obtuse angle', answer: true },
            ],
          },
          {
            title: 'an orthogonality check',
            badge: 'result zero',
            lines: [
              { math: '$(1, 2, -1) \\cdot (3, -1, 1) = 3 - 2 - 1$', why: 'three products' },
              { math: '$= 0$', why: 'zero dot product' },
              { math: 'the vectors are orthogonal', why: 'perpendicular directions', answer: true },
            ],
          },
          {
            title: 'from lengths and angle',
            badge: 'geometric form',
            lines: [
              { math: '$\\|\\mathbf{u}\\| = 4$, $\\|\\mathbf{v}\\| = 5$, $\\theta = 60^\\circ$', why: 'no coordinates given' },
              { math: '$\\mathbf{u} \\cdot \\mathbf{v} = 4 \\cdot 5 \\cdot \\cos 60^\\circ$', why: 'geometric formula' },
              { math: '$= 20 \\cdot \\tfrac{1}{2} = 10$', why: '$\\cos 60^\\circ = \\tfrac{1}{2}$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try your own vectors in the [inner product visualizer](!/linear-algebra/visual-tools/vectors-inner-product) or the [vector calculator](!/linear-algebra/calculators/vectors).',
        visual: {
          caption:
            'The dot product measures how much one vector goes along the other. Drop a perpendicular from the tip of $\\mathbf{u}$ onto the line of $\\mathbf{v}$: the shadow has length $\\|\\mathbf{u}\\|\\cos\\theta$, and the dot product is that shadow times $\\|\\mathbf{v}\\|$. A shadow pointing backwards gives a negative number; no shadow at all gives zero.',
        },
        pitfalls: [
          {
            title: 'Writing the answer as a vector',
            wrong: '$(2, -1) \\cdot (3, 4) = (6, -4)$',
            right: '$(2, -1) \\cdot (3, 4) = 6 - 4 = 2$, a single number',
          },
          {
            title: 'Dropping a minus sign',
            wrong: '$(2, -1, 3) \\cdot (4, 0, -2) = 8 + 0 + 6 = 14$',
            right: '$3 \\cdot (-2) = -6$, so the sum is $2$',
          },
          {
            title: 'Vectors of different dimensions',
            wrong: '$(1, 2) \\cdot (3, 4, 5) = 3 + 8 = 11$',
            right: 'not defined: the vectors must have the same number of components',
          },
          {
            title: 'Confusing it with the cross product',
            wrong: '$\\mathbf{u} \\cdot \\mathbf{v}$ is a vector perpendicular to both',
            right: 'that is $\\mathbf{u} \\times \\mathbf{v}$; the dot product is a scalar',
            note: `See [the cross product](!${HUB}/cross-product).`,
          },
        ],
        related: ['angle-between-vectors', 'vector-projection', 'cross-product'],
        builtOn: [
          { label: 'Dot product (algebraic form)', url: ruleUrl('la.dot-product-algebraic') },
          { label: 'Dot product (geometric form)', url: ruleUrl('la.dot-product-geometric') },
          { label: 'Orthogonality condition', url: ruleUrl('la.orthogonality-condition') },
        ],
      },
    },
    {
      id: 'angle-between-vectors',
      slug: 'angle-between-vectors',
      name: 'How to find the angle between two vectors',
      description: 'Divide the dot product by the product of the lengths, then take the inverse cosine.',
      uses: ['dot product', 'magnitude', 'inverse cosine'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Angle Between Two Vectors | Learn Math Class',
        description: 'Find the angle between two vectors: compute the dot product and both lengths, divide, then take the inverse cosine. Step-by-step method, examples, mistakes.',
        keywords: ['angle between two vectors', 'how to find the angle between vectors', 'angle between vectors formula', 'angle between vectors examples'],
      },
      page: {
        h1: 'How to Find the Angle Between Two Vectors',
        lead:
          'Solve the geometric dot product formula for the cosine. The dot product divided by the two lengths gives $\\cos\\theta$, and the inverse cosine gives an angle between $0^\\circ$ and $180^\\circ$.',
        recognize:
          'Two vectors and the question "what angle?", "acute or obtuse?", "are they parallel?": the angle between $(1, 2, 2)$ and $(2, -1, 2)$, the angle of a triangle given by its vertex vectors. Test: do you have the components of both vectors?',
        recognizeNote: `The formula is derived in the ${link('lesson.la.vectors.dot-product.5', 'angle between vectors lesson section')}.`,
        steps: {
          traceLabel: 'On $\\mathbf{u} = (1, 2, 2)$, $\\mathbf{v} = (2, -1, 2)$',
          items: [
            {
              title: 'Compute the dot product.',
              body: `Multiply matching components and add, as in [the dot product](!${HUB}/dot-product).`,
              state: '$\\mathbf{u} \\cdot \\mathbf{v} = 2 - 2 + 4 = 4$',
            },
            {
              title: 'Compute both lengths.',
              body: 'Neither vector may be the zero vector.',
              state: '$\\|\\mathbf{u}\\| = \\sqrt{9} = 3$, $\\ \\|\\mathbf{v}\\| = \\sqrt{9} = 3$',
              atomic: 'magnitude',
            },
            {
              title: 'Divide to get the cosine.',
              body: `The ${link('la.angle-between-vectors', 'angle formula')}. By ${link('la.cauchy-schwarz-inequality', 'Cauchy–Schwarz')} the value lies between $-1$ and $1$; anything else is an arithmetic error.`,
              state: '$\\cos\\theta = \\dfrac{4}{3 \\cdot 3} = \\dfrac{4}{9}$',
            },
            {
              title: 'Take the inverse cosine.',
              body: 'The result is always in $[0^\\circ, 180^\\circ]$. Set your calculator to degrees or radians as the question asks.',
              state: '$\\theta = \\arccos\\tfrac{4}{9} \\approx 63.6^\\circ$',
            },
          ],
        },
        examples: [
          {
            title: 'a standard angle',
            badge: 'basic',
            lines: [
              { math: '$(1, 0) \\cdot (1, 1) = 1$, lengths $1$ and $\\sqrt{2}$', why: 'dot product and lengths' },
              { math: '$\\cos\\theta = \\dfrac{1}{\\sqrt{2}}$', why: 'divide' },
              { math: '$\\theta = 45^\\circ$', why: 'known cosine value', answer: true },
            ],
          },
          {
            title: 'an obtuse angle in three dimensions',
            badge: 'negative cosine',
            lines: [
              { math: '$(1, -1, 0) \\cdot (0, 1, -1) = -1$', why: 'negative dot product' },
              { math: '$\\cos\\theta = \\dfrac{-1}{\\sqrt{2}\\,\\sqrt{2}} = -\\dfrac{1}{2}$', why: 'both lengths are $\\sqrt{2}$' },
              { math: '$\\theta = 120^\\circ$', why: 'obtuse, as the sign predicted', answer: true },
            ],
          },
          {
            title: 'opposite directions',
            badge: 'parallel',
            lines: [
              { math: '$(2, -1) \\cdot (-4, 2) = -8 - 2 = -10$', why: '' },
              { math: '$\\|(2, -1)\\| = \\sqrt{5}$, $\\ \\|(-4, 2)\\| = 2\\sqrt{5}$', why: 'second is $-2$ times the first' },
              { math: '$\\cos\\theta = \\dfrac{-10}{10} = -1$, so $\\theta = 180^\\circ$', why: 'antiparallel vectors', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check an angle with the [inner product visualizer](!/linear-algebra/visual-tools/vectors-inner-product).',
        visual: {
          caption:
            'Divide each vector by its length and both become unit vectors on the unit circle (or sphere). Their dot product is then just $\\cos\\theta$: the horizontal coordinate of one tip, seen from the other. That is why the formula divides by both lengths before taking the inverse cosine.',
        },
        pitfalls: [
          {
            title: 'Forgetting to divide by the lengths',
            wrong: '$\\cos\\theta = \\mathbf{u} \\cdot \\mathbf{v} = 4$',
            right: '$\\cos\\theta = \\dfrac{4}{3 \\cdot 3} = \\dfrac{4}{9}$',
          },
          {
            title: 'Calculator in the wrong mode',
            wrong: '$\\arccos\\tfrac{4}{9} \\approx 1.11$, written as $1.11^\\circ$',
            right: '$1.11$ is in radians; in degrees it is about $63.6^\\circ$',
          },
          {
            title: 'Turning an obtuse angle into an acute one',
            wrong: '$\\cos\\theta = -\\tfrac{1}{2}$, so $\\theta = 60^\\circ$',
            right: '$\\theta = 120^\\circ$; the angle between vectors can be obtuse',
          },
          {
            title: 'A cosine larger than 1',
            wrong: '$\\cos\\theta = \\tfrac{9}{4}$, "no angle exists"',
            right: 'an arithmetic slip: by Cauchy–Schwarz $|\\cos\\theta| \\le 1$ always',
          },
        ],
        related: ['dot-product', 'vector-projection', 'magnitude'],
        builtOn: [
          { label: 'Angle between vectors', url: ruleUrl('la.angle-between-vectors') },
          { label: 'Euclidean norm', url: ruleUrl('la.euclidean-norm') },
          { label: 'Cauchy–Schwarz inequality', url: ruleUrl('la.cauchy-schwarz-inequality') },
        ],
      },
    },
    {
      id: 'cross-product',
      slug: 'cross-product',
      name: 'How to compute the cross product',
      description: 'Expand a 3×3 determinant with i, j, k in the top row; mind the minus sign on the middle term.',
      uses: ['determinant expansion', 'right-hand rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Compute the Cross Product (Determinant Method) | Learn Math Class',
        description: 'Compute the cross product of two 3D vectors with the determinant method: set it up, expand, mind the minus on j, check orthogonality. Examples and pitfalls.',
        keywords: ['how to compute the cross product', 'cross product formula', 'cross product determinant method', 'cross product examples', 'vector product 3d'],
      },
      page: {
        h1: 'How to Compute the Cross Product',
        lead:
          'The cross product of two vectors in $\\mathbb{R}^3$ is a new vector perpendicular to both. Write it as a $3 \\times 3$ determinant with $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$ in the top row and expand along that row.',
        recognize:
          'Two vectors in $\\mathbb{R}^3$ joined by $\\times$, or a request for "a vector perpendicular to both", "a normal to the plane", "the area of the parallelogram": $(1, 2, 3) \\times (4, 5, 6)$, $\\mathbf{i} \\times \\mathbf{j}$. Test: are both vectors three-dimensional?',
        recognizeNote: `The cross product is defined in the ${link('lesson.la.vectors.cross-product.1', 'cross product lesson')}.`,
        methods: [
          {
            name: 'Determinant',
            tag: 'easiest to remember',
            preferred: true,
            formula: '\\mathbf{u} \\times \\mathbf{v} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}',
            body: `The ${link('la.cross-product-determinant-form', 'determinant form')}, expanded along the first row.`,
          },
          {
            name: 'Component formula',
            tag: 'direct',
            formula: '\\mathbf{u} \\times \\mathbf{v} = (u_2 v_3 - u_3 v_2,\\ u_3 v_1 - u_1 v_3,\\ u_1 v_2 - u_2 v_1)',
            body: `The ${link('la.cross-product-component-form', 'component form')}: the same result with the middle sign already built in.`,
          },
          {
            name: 'Basis products',
            tag: 'i, j, k given',
            formula: '\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k},\\ \\ \\mathbf{j} \\times \\mathbf{k} = \\mathbf{i},\\ \\ \\mathbf{k} \\times \\mathbf{i} = \\mathbf{j}',
            body: `For vectors written with $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$, distribute and use the ${link('la.standard-basis-cross-products', 'standard basis products')}.`,
          },
        ],
        steps: {
          traceLabel: 'On $(1, 2, 3) \\times (4, 5, 6)$',
          items: [
            {
              title: 'Set up the determinant.',
              body: 'Top row $\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$; then the first vector; then the second. The order of the rows matters.',
              state: '$\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{vmatrix}$',
            },
            {
              title: 'Find the i component.',
              body: 'Cover the $\\mathbf{i}$ column and take the $2 \\times 2$ determinant that is left.',
              state: '$2 \\cdot 6 - 3 \\cdot 5 = -3$',
            },
            {
              title: 'Find the j component, with a minus sign.',
              body: 'Cover the $\\mathbf{j}$ column, take the determinant, and change its sign.',
              state: '$-(1 \\cdot 6 - 3 \\cdot 4) = -(-6) = 6$',
            },
            {
              title: 'Find the k component.',
              body: 'Cover the $\\mathbf{k}$ column.',
              state: '$1 \\cdot 5 - 2 \\cdot 4 = -3$, so $\\mathbf{u} \\times \\mathbf{v} = (-3, 6, -3)$',
            },
            {
              title: 'Check: the result is perpendicular to both.',
              body: `Its [dot product](!${HUB}/dot-product) with each original vector must be $0$.`,
              state: '$-3 + 12 - 9 = 0$ ✓, $\\ -12 + 30 - 18 = 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'basis vectors',
            badge: 'basic',
            lines: [
              { math: '$(1, 0, 0) \\times (0, 1, 0) = (0 - 0,\\ 0 - 0,\\ 1 - 0)$', why: 'component formula' },
              { math: '$= (0, 0, 1)$, that is $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$', why: 'right-hand rule', answer: true },
            ],
          },
          {
            title: 'with negative entries',
            badge: 'signs',
            lines: [
              { math: '$\\mathbf{i}$: $(-1)(-2) - 0 \\cdot 3 = 2$', why: 'for $(2, -1, 0) \\times (1, 3, -2)$' },
              { math: '$\\mathbf{j}$: $-(2 \\cdot (-2) - 0 \\cdot 1) = 4$', why: 'minus sign on the middle' },
              { math: '$\\mathbf{k}$: $2 \\cdot 3 - (-1) \\cdot 1 = 7$', why: '' },
              { math: '$(2, -1, 0) \\times (1, 3, -2) = (2, 4, 7)$', why: 'check: $4 - 4 = 0$, $2 + 12 - 14 = 0$', answer: true },
            ],
          },
          {
            title: 'area of a parallelogram',
            badge: 'length of the result',
            lines: [
              { math: '$(1, 2, 3) \\times (4, 5, 6) = (-3, 6, -3)$', why: 'from the steps above' },
              { math: '$\\|(-3, 6, -3)\\| = \\sqrt{9 + 36 + 9} = \\sqrt{54}$', why: 'area equals the cross product length' },
              { math: 'area $= 3\\sqrt{6} \\approx 7.35$', why: '$\\sqrt{54} = \\sqrt{9 \\cdot 6}$', answer: true },
            ],
            note: `The length rule is the ${link('la.parallelogram-area', 'parallelogram area formula')}.`,
          },
        ],
        examplesAfter: 'See each component appear in the [cross product visualizer](!/linear-algebra/visual-tools/vector-cross-product).',
        visual: {
          caption:
            'The two vectors span a parallelogram. The cross product stands straight up from it: its direction follows the right-hand rule (fingers from $\\mathbf{u}$ to $\\mathbf{v}$, thumb along $\\mathbf{u} \\times \\mathbf{v}$) and its length equals the parallelogram\'s area. Swap the vectors and the thumb points down, which is why $\\mathbf{v} \\times \\mathbf{u} = -\\,\\mathbf{u} \\times \\mathbf{v}$.',
        },
        pitfalls: [
          {
            title: 'Forgetting the minus on the j component',
            wrong: '$(1, 2, 3) \\times (4, 5, 6) = (-3, -6, -3)$',
            right: '$(-3, 6, -3)$: the middle cofactor carries a minus sign',
          },
          {
            title: 'Reversing the order',
            wrong: '$(4, 5, 6) \\times (1, 2, 3) = (-3, 6, -3)$',
            right: `$(3, -6, 3)$: the cross product is ${link('la.cross-product-anti-commutativity', 'anti-commutative')}`,
          },
          {
            title: 'Using it outside three dimensions',
            wrong: '$(1, 2) \\times (3, 4) = -2$ as a vector',
            right: 'the cross product is defined for vectors in $\\mathbb{R}^3$; embed as $(1, 2, 0) \\times (3, 4, 0) = (0, 0, -2)$',
          },
          {
            title: 'Skipping the check',
            wrong: 'a sign slip goes unnoticed',
            right: 'dot the result with both vectors; both answers must be $0$',
          },
        ],
        related: ['dot-product', 'angle-between-vectors', 'vector-projection'],
        builtOn: [
          { label: 'Cross product (determinant form)', url: ruleUrl('la.cross-product-determinant-form') },
          { label: 'Cross product (component form)', url: ruleUrl('la.cross-product-component-form') },
          { label: 'Anti-commutativity', url: ruleUrl('la.cross-product-anti-commutativity') },
          { label: 'Parallelogram area', url: ruleUrl('la.parallelogram-area') },
        ],
      },
    },
    {
      id: 'vector-projection',
      slug: 'vector-projection',
      name: 'How to project one vector onto another',
      description: 'Scale the target vector by the dot product over its squared length; the rest is perpendicular.',
      uses: ['dot product', 'scalar multiplication'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Project One Vector onto Another | Learn Math Class',
        description: 'Project a vector onto another: dot product over the squared length, times the target vector. Scalar and vector projection, steps, examples and common errors.',
        keywords: ['vector projection', 'how to project a vector onto another', 'projection formula', 'scalar projection', 'vector projection examples'],
      },
      page: {
        h1: 'How to Project One Vector onto Another',
        lead:
          'The projection of $\\mathbf{u}$ onto $\\mathbf{v}$ is the shadow of $\\mathbf{u}$ on the line through $\\mathbf{v}$. It is a multiple of $\\mathbf{v}$, and the multiplier is $\\mathbf{u} \\cdot \\mathbf{v}$ divided by $\\mathbf{v} \\cdot \\mathbf{v}$.',
        recognize:
          'Wording like "projection of $\\mathbf{u}$ onto $\\mathbf{v}$", "component of $\\mathbf{u}$ along $\\mathbf{v}$", "split $\\mathbf{u}$ into parallel and perpendicular parts": $\\operatorname{proj}_{\\mathbf{v}}\\mathbf{u}$, the work done by a force along a ramp. Test: which vector is the direction you project onto?',
        recognizeNote: `Projection is defined in the ${link('lesson.la.vectors.dot-product.9', 'orthogonal projection lesson section')}; projecting onto a whole subspace is [orthogonal projection](!/linear-algebra/orthogonality/methods/orthogonal-projection).`,
        methods: [
          {
            name: 'Vector projection',
            tag: 'a vector',
            preferred: true,
            formula: '\\operatorname{proj}_{\\mathbf{v}}\\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\mathbf{v} \\cdot \\mathbf{v}}\\,\\mathbf{v}',
            body: `The ${link('la.vector-projection', 'vector projection formula')}: no square roots needed.`,
          },
          {
            name: 'Scalar projection',
            tag: 'a signed length',
            formula: '\\operatorname{comp}_{\\mathbf{v}}\\mathbf{u} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|}',
            body: `The ${link('la.scalar-projection', 'scalar projection')}: use it when the question asks "how far along", not for the vector itself.`,
          },
        ],
        steps: {
          traceLabel: 'On $\\mathbf{u} = (2, 3, 4)$ onto $\\mathbf{v} = (1, 0, 1)$',
          items: [
            {
              title: 'Identify the vector you project onto.',
              body: 'The answer is a multiple of that vector. Swapping the roles gives a different answer.',
              state: 'project onto $\\mathbf{v} = (1, 0, 1)$',
            },
            {
              title: 'Compute the dot product u · v.',
              body: `See [the dot product](!${HUB}/dot-product).`,
              state: '$\\mathbf{u} \\cdot \\mathbf{v} = 2 + 0 + 4 = 6$',
            },
            {
              title: 'Compute v · v.',
              body: 'This is $\\|\\mathbf{v}\\|^2$, the squared length.',
              state: '$\\mathbf{v} \\cdot \\mathbf{v} = 1 + 0 + 1 = 2$',
            },
            {
              title: 'Divide and scale v.',
              body: 'The ratio is the multiplier of $\\mathbf{v}$.',
              state: '$\\tfrac{6}{2}\\,(1, 0, 1) = (3, 0, 3)$',
              atomic: 'scalar-multiplication',
            },
            {
              title: 'Check: the leftover is perpendicular to v.',
              body: `Subtract the projection from $\\mathbf{u}$; the result must have dot product $0$ with $\\mathbf{v}$ (the ${link('la.orthogonal-decomposition', 'orthogonal decomposition')}).`,
              state: '$(2, 3, 4) - (3, 0, 3) = (-1, 3, 1)$; $\\ -1 + 0 + 1 = 0$ ✓',
              atomic: 'vector-addition',
            },
          ],
        },
        examples: [
          {
            title: 'onto a coordinate axis',
            badge: 'basic',
            lines: [
              { math: '$\\mathbf{u} = (5, -2)$ onto $\\mathbf{v} = (1, 0)$', why: '' },
              { math: '$\\dfrac{5}{1}\\,(1, 0) = (5, 0)$', why: 'keeps the first component', answer: true },
            ],
          },
          {
            title: 'fractional multiplier',
            badge: 'vector and scalar',
            lines: [
              { math: '$(3, 4) \\cdot (1, 2) = 11$, $\\ (1, 2) \\cdot (1, 2) = 5$', why: '' },
              { math: '$\\operatorname{proj} = \\tfrac{11}{5}(1, 2) = \\left(\\tfrac{11}{5}, \\tfrac{22}{5}\\right)$', why: 'vector projection' },
              { math: '$\\operatorname{comp} = \\dfrac{11}{\\sqrt{5}} \\approx 4.92$', why: 'its signed length', answer: true },
            ],
          },
          {
            title: 'parallel and perpendicular parts',
            badge: 'decomposition',
            lines: [
              { math: '$\\mathbf{u} = (1, 2, 3)$, $\\mathbf{v} = (1, 1, 1)$: $\\ \\tfrac{6}{3}\\,\\mathbf{v} = (2, 2, 2)$', why: 'parallel part' },
              { math: '$(1, 2, 3) - (2, 2, 2) = (-1, 0, 1)$', why: 'perpendicular part' },
              { math: '$\\mathbf{u} = (2, 2, 2) + (-1, 0, 1)$', why: 'check: $-1 + 0 + 1 = 0$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Drag both vectors in the [vector projection visualizer](!/linear-algebra/visual-tools/vector-projection).',
        visual: {
          caption:
            'Shine a light straight down onto the line through $\\mathbf{v}$: the shadow of $\\mathbf{u}$ is the projection. The leftover piece, from the shadow\'s tip up to the tip of $\\mathbf{u}$, meets the line at a right angle. That right angle is the whole method: it forces the multiplier to be $\\mathbf{u} \\cdot \\mathbf{v} / \\mathbf{v} \\cdot \\mathbf{v}$.',
        },
        pitfalls: [
          {
            title: 'Dividing by the length instead of the squared length',
            wrong: '$\\operatorname{proj}_{\\mathbf{v}}\\mathbf{u} = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{v}\\|}\\,\\mathbf{v}$',
            right: 'divide by $\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$, or use the unit vector twice',
          },
          {
            title: 'Projecting the wrong way round',
            wrong: '$\\operatorname{proj}_{\\mathbf{v}}\\mathbf{u} = \\dfrac{\\mathbf{u} \\cdot \\mathbf{v}}{\\mathbf{u} \\cdot \\mathbf{u}}\\,\\mathbf{u}$',
            right: 'that is $\\operatorname{proj}_{\\mathbf{u}}\\mathbf{v}$; the answer must be a multiple of $\\mathbf{v}$',
          },
          {
            title: 'Giving a number when a vector is asked',
            wrong: 'projection of $(3, 4)$ onto $(1, 2)$ is $\\tfrac{11}{5}$',
            right: '$\\tfrac{11}{5}$ is the multiplier; the projection is $\\left(\\tfrac{11}{5}, \\tfrac{22}{5}\\right)$',
          },
        ],
        related: ['dot-product', 'angle-between-vectors', 'unit-vector'],
        builtOn: [
          { label: 'Vector projection', url: ruleUrl('la.vector-projection') },
          { label: 'Scalar projection', url: ruleUrl('la.scalar-projection') },
          { label: 'Orthogonal decomposition', url: ruleUrl('la.orthogonal-decomposition') },
        ],
      },
    },
    {
      id: 'linear-combinations',
      slug: 'linear-combinations',
      name: 'How to write a vector as a linear combination',
      description: 'Find the weights c₁, c₂, … by solving one linear equation per component.',
      uses: ['vector equation', 'row reduction'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write a Vector as a Linear Combination | Learn Math Class',
        description: 'Write a vector as a linear combination: set up the vector equation, turn it into a system, row reduce, read the weights, check. Worked examples and mistakes.',
        keywords: ['linear combination of vectors', 'how to write a vector as a linear combination', 'find the weights linear combination', 'linear combination examples'],
      },
      page: {
        h1: 'How to Write a Vector as a Linear Combination',
        lead:
          'A linear combination is a sum of scaled vectors, $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots$. Writing a given $\\mathbf{b}$ that way means finding the weights, and finding the weights means solving a linear system.',
        recognize:
          'A target vector and a list of vectors: "express $(7, 4)$ in terms of $(1, 2)$ and $(3, 1)$", "is $\\mathbf{b}$ a combination of $\\mathbf{v}_1, \\mathbf{v}_2$?", "find $c_1, c_2$ with $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 = \\mathbf{b}$". Test: are the unknowns the scalars in front of known vectors?',
        recognizeNote: `Linear combinations are defined in the ${link('lesson.la.vectors.linear-combinations.1', 'linear combinations lesson')}; the link to systems is in ${link('lesson.la.vectors.linear-combinations.6', 'Linear Combinations and Systems of Equations')}.`,
        steps: {
          traceLabel: 'On $\\mathbf{b} = (7, 4)$, $\\mathbf{v}_1 = (1, 2)$, $\\mathbf{v}_2 = (3, 1)$',
          items: [
            {
              title: 'Write the vector equation.',
              body: `One unknown weight per vector (the ${link('la.vector-equation-form', 'vector equation form')}).`,
              state: '$c_1(1, 2) + c_2(3, 1) = (7, 4)$',
            },
            {
              title: 'Turn it into a system, one equation per component.',
              body: 'The given vectors become the columns of the coefficient matrix.',
              state: '$c_1 + 3c_2 = 7$, $\\ 2c_1 + c_2 = 4$',
            },
            {
              title: 'Solve the system.',
              body: 'Small systems by substitution; larger ones by [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination) on $[\\mathbf{v}_1\\ \\mathbf{v}_2 \\mid \\mathbf{b}]$.',
              state: '$R_2 - 2R_1$: $\\ -5c_2 = -10$, so $c_2 = 2$, $c_1 = 1$',
            },
            {
              title: 'Read the answer.',
              body: 'A contradiction such as $0 = 1$ means $\\mathbf{b}$ is not a linear combination of the vectors. Free variables mean many choices of weights.',
              state: '$\\mathbf{b} = 1\\,\\mathbf{v}_1 + 2\\,\\mathbf{v}_2$',
            },
            {
              title: 'Check by computing the combination.',
              body: 'Scale each vector and add.',
              state: '$(1, 2) + (6, 2) = (7, 4)$ ✓',
              atomic: 'vector-addition',
            },
          ],
        },
        examples: [
          {
            title: 'evaluate a combination',
            badge: 'basic',
            lines: [
              { math: '$2(1, -1, 0) - 3(0, 2, 1)$', why: 'scale each vector' },
              { math: '$= (2, -2, 0) - (0, 6, 3)$', why: '' },
              { math: '$= (2, -8, -3)$', why: 'subtract components', answer: true },
            ],
          },
          {
            title: 'find the weights',
            badge: 'two unknowns',
            lines: [
              { math: '$c_1(1, 1) + c_2(1, -1) = (1, 5)$', why: '' },
              { math: '$c_1 + c_2 = 1$, $\\ c_1 - c_2 = 5$', why: 'add: $2c_1 = 6$' },
              { math: '$c_1 = 3$, $c_2 = -2$', why: 'check: $(3, 3) + (-2, 2) = (1, 5)$', answer: true },
            ],
          },
          {
            title: 'not a combination',
            badge: 'inconsistent',
            lines: [
              { math: '$c_1(1, 0, 1) + c_2(0, 1, 1) = (1, 2, 4)$', why: 'three equations, two unknowns' },
              { math: '$c_1 = 1$, $c_2 = 2$ from the first two', why: '' },
              { math: 'third: $c_1 + c_2 = 3 \\neq 4$, so no weights exist', why: 'b is off the plane', answer: true },
            ],
          },
        ],
        examplesAfter: 'Move the weights in the [linear combination visualizer](!/linear-algebra/visual-tools/vector-linear-combination). Whether a vector is in a span at all is the [span test](!/linear-algebra/vector-spaces/methods/span-test).',
        visual: {
          caption:
            'Think of $\\mathbf{v}_1$ and $\\mathbf{v}_2$ as two directions you may walk in, any distance, forwards or backwards. The weights say how far to walk in each to land on $\\mathbf{b}$. In the plane, two non-parallel directions reach every point; in space, two directions reach only a plane, which is why the third equation can fail.',
        },
        pitfalls: [
          {
            title: 'Putting the vectors in as rows',
            wrong: 'coefficient matrix with rows $(1, 2)$ and $(3, 1)$ for the trace problem',
            right: 'the vectors are the columns: $\\begin{pmatrix} 1 & 3 \\\\ 2 & 1 \\end{pmatrix}$',
          },
          {
            title: 'Ignoring the extra equation',
            wrong: '$c_1 = 1$, $c_2 = 2$, so $(1, 2, 4) = \\mathbf{v}_1 + 2\\mathbf{v}_2$',
            right: 'check all three components; the third fails, so there is no combination',
          },
          {
            title: 'Swapping the weights',
            wrong: '$\\mathbf{b} = 2\\,\\mathbf{v}_1 + 1\\,\\mathbf{v}_2$',
            right: '$c_1$ belongs to $\\mathbf{v}_1$: $\\mathbf{b} = 1\\,\\mathbf{v}_1 + 2\\,\\mathbf{v}_2$',
          },
        ],
        related: ['scalar-multiplication', 'vector-addition', 'vector-projection'],
        builtOn: [
          { label: 'Linear combination', url: ruleUrl('la.linear-combination') },
          { label: 'Vector equation form', url: ruleUrl('la.vector-equation-form') },
          { label: 'Span', url: ruleUrl('la.span') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Products, angles, projections, combinations', blurb: 'Composite · each opens its own page' },
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
      { url: '/linear-algebra/vector-spaces/methods', label: 'Vector spaces' },
      { url: '/linear-algebra/orthogonality/methods', label: 'Orthogonality' },
      { url: '/linear-algebra/matrix/methods', label: 'Matrices' },
    ],
  },
};

export default vectorsMethods;
