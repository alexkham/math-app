// vector-spaces.methods.js (linear algebra)
// Single data source for /linear-algebra/vector-spaces/methods (hub) and
// /linear-algebra/vector-spaces/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/vector-spaces/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/vector-spaces/methods';

const vectorSpacesMethods = {
  hubPath: HUB,
  hubLabel: 'vector space methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Composite — leaf pages ══════════════════════════════════════
    {
      id: 'subspace-test',
      slug: 'subspace-test',
      name: 'How to test whether a set is a subspace',
      description: 'Check the zero vector, closure under addition and closure under scalar multiplication.',
      uses: ['zero vector', 'closure under addition', 'closure under scaling'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Test Whether a Set Is a Subspace | Learn Math Class',
        description: 'Test whether a set is a subspace: check the zero vector, closure under addition and under scalar multiplication, or find a counterexample. Examples, pitfalls.',
        keywords: ['subspace test', 'how to show a set is a subspace', 'is it a subspace', 'subspace test examples', 'closure under addition and scalar multiplication'],
      },
      page: {
        h1: 'How to Test Whether a Set Is a Subspace',
        lead:
          'A subset of a vector space is a subspace when it contains the zero vector and stays closed under the two operations. Prove all three with general vectors, or break one with a single concrete counterexample.',
        recognize:
          'A set described by a condition inside a known space: $\\{(x, y, z) : x - 2y + z = 0\\}$, $\\{(x, y) : y = 2x + 1\\}$, $\\{p \\in P_2 : p(1) = 0\\}$, the $2 \\times 2$ matrices with trace $0$. Test: is the condition a homogeneous linear equation (no constant term, no powers, no products of unknowns)? Then it is almost always a subspace.',
        recognizeNote: `Subspaces are defined in the ${link('lesson.la.vector-spaces.subspaces.1', 'subspaces lesson')}, and the test is stated in ${link('lesson.la.vector-spaces.subspaces.2', 'The Subspace Test')}.`,
        methods: [
          {
            name: 'Three conditions',
            tag: 'standard',
            preferred: true,
            formula: '\\mathbf{0} \\in W, \\quad \\mathbf{u} + \\mathbf{v} \\in W, \\quad c\\,\\mathbf{v} \\in W',
            body: `The ${link('la.subspace-test', 'subspace test')}: check each condition for arbitrary $\\mathbf{u}, \\mathbf{v} \\in W$ and every scalar $c$.`,
          },
          {
            name: 'One combined condition',
            tag: 'shorter proof',
            formula: '\\mathbf{u}, \\mathbf{v} \\in W \\ \\Rightarrow\\ c\\,\\mathbf{u} + d\\,\\mathbf{v} \\in W',
            body: `The ${link('la.subspace-test-combined', 'combined test')} merges both closures into one check of a linear combination.`,
          },
          {
            name: 'Recognize a span or null space',
            tag: 'no checking',
            formula: 'W = \\operatorname{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\ \\text{or}\\ W = \\operatorname{Nul}(A)',
            body: `A span is always a subspace (the ${link('la.span-is-smallest-subspace', 'smallest one containing the vectors')}), and so is the solution set of $A\\mathbf{x} = \\mathbf{0}$.`,
          },
        ],
        steps: {
          traceLabel: 'On $W = \\{(x, y, z) : x - 2y + z = 0\\}$',
          items: [
            {
              title: 'Check the zero vector.',
              body: 'If $\\mathbf{0}$ fails the condition, stop: $W$ is not a subspace.',
              state: '$0 - 2 \\cdot 0 + 0 = 0$ ✓',
            },
            {
              title: 'Take two general elements of W.',
              body: 'Use letters, not numbers, and write down the condition each one satisfies.',
              state: '$u_1 - 2u_2 + u_3 = 0$, $\\ v_1 - 2v_2 + v_3 = 0$',
            },
            {
              title: 'Check closure under addition.',
              body: 'Put $\\mathbf{u} + \\mathbf{v}$ into the condition and regroup.',
              state: '$(u_1 + v_1) - 2(u_2 + v_2) + (u_3 + v_3) = 0 + 0 = 0$ ✓',
            },
            {
              title: 'Check closure under scalar multiplication.',
              body: 'Use an arbitrary scalar $c$, including negative values and $0$.',
              state: '$cu_1 - 2cu_2 + cu_3 = c \\cdot 0 = 0$ ✓',
            },
            {
              title: 'Conclude, or give a counterexample.',
              body: 'All three pass: subspace. One fails: show one specific vector (or pair) that breaks it.',
              state: '$W$ is a subspace of $\\mathbb{R}^3$ (a plane through the origin)',
            },
          ],
        },
        examples: [
          {
            title: 'a line that misses the origin',
            badge: 'zero vector fails',
            lines: [
              { math: '$W = \\{(x, y) : y = 2x + 1\\}$', why: 'constant term $+1$' },
              { math: '$(0, 0)$: $\\ 0 \\neq 2 \\cdot 0 + 1$', why: 'zero vector not in W' },
              { math: '$W$ is not a subspace', why: 'one failure is enough', answer: true },
            ],
          },
          {
            title: 'two quadrants',
            badge: 'addition fails',
            lines: [
              { math: '$W = \\{(x, y) : xy \\ge 0\\}$ contains $(0, 0)$', why: 'zero test passes' },
              { math: '$(1, 0) \\in W$, $(0, -1) \\in W$, sum $(1, -1)$', why: 'both products are $0$' },
              { math: '$1 \\cdot (-1) = -1 < 0$: not closed, not a subspace', why: 'concrete counterexample', answer: true },
            ],
          },
          {
            title: 'polynomials with a root at 1',
            badge: 'abstract space',
            lines: [
              { math: '$W = \\{p \\in P_2 : p(1) = 0\\}$; zero polynomial: $0(1) = 0$', why: 'zero test passes' },
              { math: '$(p + q)(1) = p(1) + q(1) = 0 + 0 = 0$', why: 'closed under addition' },
              { math: '$(cp)(1) = c \\cdot p(1) = 0$, so $W$ is a subspace', why: 'closed under scaling', answer: true },
            ],
          },
        ],
        examplesAfter: 'See which sets in the plane are closed under combinations in the [span and independence visualizer](!/linear-algebra/visual-tools/span-independence-2d).',
        visual: {
          caption:
            'In $\\mathbb{R}^2$ and $\\mathbb{R}^3$ the subspaces are easy to picture: the origin alone, lines through the origin, planes through the origin, and the whole space. Anything that misses the origin, has an edge, or bends fails, because adding two of its vectors or stretching one pushes you outside it.',
        },
        pitfalls: [
          {
            title: 'Stopping after the zero vector',
            wrong: '$\\{(x, y) : x \\ge 0\\}$ contains $(0, 0)$, so it is a subspace',
            right: '$-1 \\cdot (1, 0) = (-1, 0)$ leaves the set; scalar closure fails',
            note: 'Passing the zero test proves nothing on its own; failing it proves the set is not a subspace.',
          },
          {
            title: 'Proving closure with one example',
            wrong: '$(1, 1, 1) + (2, 1, 0)$ stays in $W$, so $W$ is closed',
            right: 'closure needs arbitrary $\\mathbf{u}, \\mathbf{v}$; a single example only disproves',
          },
          {
            title: 'Missing a nonlinear condition',
            wrong: '$\\{(x, y) : y = x^2\\}$ contains $(0, 0)$ and looks fine',
            right: '$(1, 1)$ is in it but $2(1, 1) = (2, 2)$ is not, since $2 \\neq 4$',
          },
          {
            title: 'Checking only positive scalars',
            wrong: 'the first quadrant is closed under $c\\,\\mathbf{v}$ for $c = 2, 3, \\ldots$',
            right: '$c$ ranges over all real numbers; $c = -1$ breaks it',
          },
        ],
        related: ['span-test', 'find-basis', 'dimension'],
        builtOn: [
          { label: 'Subspace test', url: ruleUrl('la.subspace-test') },
          { label: 'Subspace test (combined form)', url: ruleUrl('la.subspace-test-combined') },
          { label: 'Vector space axioms', url: ruleUrl('la.vector-space-axioms') },
        ],
      },
    },
    {
      id: 'linear-independence-test',
      slug: 'linear-independence-test',
      name: 'How to test vectors for linear independence',
      description: 'Put the vectors in the columns of a matrix and count pivots, or use the determinant.',
      uses: ['row reduction', 'pivots', 'determinant'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Test Vectors for Linear Independence | Learn Math Class',
        description: 'Test vectors for linear independence: put them in the columns of a matrix, row reduce and count pivots, or use the determinant. Shortcuts, examples, mistakes.',
        keywords: ['linear independence test', 'how to check linear independence', 'are the vectors linearly independent', 'linear independence examples', 'linearly dependent vectors'],
      },
      page: {
        h1: 'How to Test Vectors for Linear Independence',
        lead:
          'Vectors are linearly independent when the only combination that gives the zero vector uses all-zero weights. Put the vectors in the columns of a matrix: they are independent exactly when every column gets a pivot.',
        recognize:
          'A list of vectors and the words "independent", "dependent", "redundant", or "is one a combination of the others": $\\{(1, 2, 1), (2, 1, -1), (4, 5, 1)\\}$, $\\{(1, 3), (2, 5)\\}$, four vectors in $\\mathbb{R}^3$. Test: how many vectors are there compared with the dimension of the space?',
        recognizeNote: `Independence is defined in the ${link('lesson.la.vector-spaces.linear-independence.1', 'linear independence lesson')}; the equation to test is the ${link('la.linear-independence-equation', 'independence equation')}.`,
        methods: [
          {
            name: 'Row reduction',
            tag: 'any number of vectors',
            preferred: true,
            formula: '[\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_k] \\ \\text{has a pivot in every column}',
            body: `The ${link('la.linear-independence-matrix-test', 'matrix test')}: no free variables means only the trivial solution of $A\\mathbf{c} = \\mathbf{0}$.`,
          },
          {
            name: 'Determinant',
            tag: 'n vectors in n dimensions',
            formula: '\\det[\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_n] \\neq 0',
            body: `The ${link('la.linear-independence-determinant-test', 'determinant test')}: one number decides, but only for a square matrix.`,
          },
          {
            name: 'Count first',
            tag: 'no computation',
            formula: 'k > n \\ \\Rightarrow\\ \\text{dependent in } \\mathbb{R}^n',
            body: `More vectors than the dimension are always dependent (the ${link('la.max-independent-set-size', 'maximum size of an independent set')}). A set containing $\\mathbf{0}$ is dependent too.`,
          },
        ],
        steps: {
          traceLabel: 'On $(1, 2, 1)$, $(2, 1, -1)$, $(4, 5, 1)$',
          items: [
            {
              title: 'Put the vectors in the columns of a matrix.',
              body: 'One column per vector. Before computing, apply the count shortcut.',
              state: '$A = \\begin{pmatrix} 1 & 2 & 4 \\\\ 2 & 1 & 5 \\\\ 1 & -1 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Row reduce.',
              body: 'Use [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination); go to RREF if you want the dependence relation.',
              state: '$\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Count the pivots.',
              body: 'A pivot in every column: independent. A column without a pivot: dependent.',
              state: '$2$ pivots, $3$ vectors: dependent',
            },
            {
              title: 'Read the dependence relation.',
              body: 'The free column in RREF shows the weights that build that vector from the pivot columns.',
              state: 'column 3 $= 2 \\cdot$ column 1 $+ 1 \\cdot$ column 2: $\\ (4, 5, 1) = 2(1, 2, 1) + (2, 1, -1)$',
            },
          ],
        },
        examples: [
          {
            title: 'two vectors',
            badge: 'multiples',
            lines: [
              { math: '$(2, -4)$ and $(-3, 6)$: $\\ (-3, 6) = -\\tfrac{3}{2}(2, -4)$', why: 'one is a multiple' },
              { math: '$\\det\\begin{pmatrix} 2 & -3 \\\\ -4 & 6 \\end{pmatrix} = 12 - 12 = 0$', why: 'confirms it' },
              { math: 'dependent', why: 'they lie on one line', answer: true },
            ],
          },
          {
            title: 'three vectors in three dimensions',
            badge: 'determinant',
            lines: [
              { math: '$\\det\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 2 & 1 & 0 \\end{pmatrix}$ for $(1, 0, 2)$, $(0, 1, 1)$, $(1, 1, 0)$', why: 'square: determinant test' },
              { math: '$= 1(0 - 1) - 0 + 1(0 - 2) = -3$', why: 'cofactors along row 1' },
              { math: '$-3 \\neq 0$: independent', why: '', answer: true },
            ],
          },
          {
            title: 'too many vectors',
            badge: 'count shortcut',
            lines: [
              { math: '$(1, 0, 0)$, $(0, 1, 0)$, $(0, 0, 1)$, $(5, -2, 7)$ in $\\mathbb{R}^3$', why: 'four vectors, dimension three' },
              { math: 'dependent, with no computation', why: 'at most 3 pivots', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check your answer in the [span and independence visualizer](!/linear-algebra/visual-tools/span-independence-2d) or the [Gaussian elimination tool](!/linear-algebra/visual-tools/gauss-elimination).',
        visual: {
          caption:
            'Independent vectors each add a new direction. Two independent vectors in $\\mathbb{R}^3$ span a plane; a third is independent only if it sticks out of that plane. A dependent vector lies in the span of the others, so it adds nothing new, and that shows up as a column without a pivot.',
        },
        pitfalls: [
          {
            title: 'Pairwise not parallel is not enough',
            wrong: '$(1, 0)$, $(0, 1)$, $(1, 1)$: no two are multiples, so independent',
            right: '$(1, 1) = (1, 0) + (0, 1)$; three vectors in $\\mathbb{R}^2$ are always dependent',
          },
          {
            title: 'Using the determinant on a non-square matrix',
            wrong: '"$\\det$" of the $3 \\times 2$ matrix of two vectors in $\\mathbb{R}^3$',
            right: 'row reduce instead and check for a pivot in both columns',
          },
          {
            title: 'Counting pivots per row instead of per column',
            wrong: 'every row of the echelon form has a pivot, so the vectors are independent',
            right: 'independence needs a pivot in every column; a pivot in every row is spanning',
          },
          {
            title: 'Forgetting the zero vector',
            wrong: '$\\{(1, 2), (0, 0)\\}$ looks independent',
            right: '$0 \\cdot (1, 2) + 1 \\cdot (0, 0) = \\mathbf{0}$ is nontrivial: dependent',
          },
        ],
        related: ['span-test', 'find-basis', 'dimension'],
        builtOn: [
          { label: 'Independence equation', url: ruleUrl('la.linear-independence-equation') },
          { label: 'Independence matrix test', url: ruleUrl('la.linear-independence-matrix-test') },
          { label: 'Independence determinant test', url: ruleUrl('la.linear-independence-determinant-test') },
          { label: 'Testing independence (lesson)', url: ruleUrl('lesson.la.vector-spaces.linear-independence.3') },
        ],
      },
    },
    {
      id: 'span-test',
      slug: 'span-test',
      name: 'How to test whether a vector is in a span',
      description: 'Row reduce the augmented matrix: consistent means yes. A pivot in every row means the set spans Rⁿ.',
      uses: ['augmented matrix', 'consistency', 'pivots per row'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Test Whether a Vector Is in a Span | Learn Math Class',
        description: 'Test whether a vector is in a span by row reducing the augmented matrix, and whether a set spans all of Rⁿ by counting pivots. Steps, examples, common errors.',
        keywords: ['span test', 'is the vector in the span', 'how to check if vectors span r3', 'span of vectors examples', 'spanning set test'],
      },
      page: {
        h1: 'How to Test Whether a Vector Is in a Span',
        lead:
          'A vector $\\mathbf{b}$ is in the span of $\\mathbf{v}_1, \\ldots, \\mathbf{v}_k$ when some weights combine them into $\\mathbf{b}$, that is, when the system with augmented matrix $[\\mathbf{v}_1\\ \\cdots\\ \\mathbf{v}_k \\mid \\mathbf{b}]$ is consistent. The same row reduction, without $\\mathbf{b}$, tells you whether the set spans the whole space.',
        recognize:
          'Two related questions: "is $(2, 5, 1)$ in $\\operatorname{Span}\\{(1, 2, 0), (0, 1, 1)\\}$?" and "do these vectors span $\\mathbb{R}^3$?". Test: is there one target vector (membership) or every vector of the space (spanning)?',
        recognizeNote: `Span is defined in the ${link('lesson.la.vector-spaces.span.1', 'span lesson')}; the two tests are in ${link('lesson.la.vector-spaces.span.4', 'Testing Whether a Vector Is in a Span')} and ${link('lesson.la.vector-spaces.span.5', 'Testing Whether a Set Spans Rⁿ')}.`,
        methods: [
          {
            name: 'One vector: consistency',
            tag: 'membership',
            preferred: true,
            formula: '\\mathbf{b} \\in \\operatorname{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} \\iff [A \\mid \\mathbf{b}] \\ \\text{is consistent}',
            body: `The ${link('la.span-membership-criterion', 'span membership criterion')}: no row $[0\\ \\cdots\\ 0 \\mid d]$ with $d \\neq 0$.`,
          },
          {
            name: 'Whole space: pivots in every row',
            tag: 'spanning set',
            formula: '\\operatorname{Span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\mathbb{R}^n \\iff \\operatorname{rank} A = n',
            body: 'Every row of the echelon form of $A$ has a pivot. For $n$ vectors in $\\mathbb{R}^n$ this is the same as $\\det A \\neq 0$.',
          },
        ],
        steps: {
          traceLabel: 'On $\\mathbf{b} = (2, 5, 1)$, $\\mathbf{v}_1 = (1, 2, 0)$, $\\mathbf{v}_2 = (0, 1, 1)$',
          items: [
            {
              title: 'Decide which question is asked.',
              body: 'One target vector: membership. Every vector of $\\mathbb{R}^n$: spanning.',
              state: 'membership of $\\mathbf{b}$',
            },
            {
              title: 'Put the vectors in the columns.',
              body: 'For membership, add $\\mathbf{b}$ as the last column of an augmented matrix.',
              state: '$\\left(\\begin{array}{cc|c} 1 & 0 & 2 \\\\ 2 & 1 & 5 \\\\ 0 & 1 & 1 \\end{array}\\right)$',
            },
            {
              title: 'Row reduce.',
              body: 'Use [Gaussian elimination](!/linear-algebra/linear-systems/methods/gaussian-elimination).',
              state: '$R_2 - 2R_1$, then $R_3 - R_2$: $\\ \\left(\\begin{array}{cc|c} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{array}\\right)$',
            },
            {
              title: 'Look for a contradiction row (or count row pivots).',
              body: 'Membership: a row $[0\\ 0 \\mid d]$ with $d \\neq 0$ means no. Spanning: every row of $A$ needs a pivot.',
              state: 'last row is $[0\\ 0 \\mid 0]$: consistent',
            },
            {
              title: 'State the answer with the weights.',
              body: 'Back-substitute for the weights and check them.',
              state: '$\\mathbf{b} = 2\\mathbf{v}_1 + 1\\mathbf{v}_2$: $\\ (2, 4, 0) + (0, 1, 1) = (2, 5, 1)$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'not in the span',
            badge: 'membership',
            lines: [
              { math: 'Is $(1, 1, 1)$ in $\\operatorname{Span}\\{(1, 0, 1), (0, 1, 2)\\}$?', why: '' },
              { math: 'rows 1 and 2 give $c_1 = 1$, $c_2 = 1$', why: 'read the easy equations' },
              { math: 'row 3: $c_1 + 2c_2 = 3 \\neq 1$, so no', why: 'contradiction row after reduction', answer: true },
            ],
          },
          {
            title: 'a set that does not span the plane',
            badge: 'spanning, 2D',
            lines: [
              { math: '$\\det\\begin{pmatrix} 1 & 3 \\\\ 2 & 6 \\end{pmatrix} = 6 - 6 = 0$ for $(1, 2)$, $(3, 6)$', why: 'square: determinant decides' },
              { math: 'the span is only the line through $(1, 2)$', why: 'second is three times first', answer: true },
            ],
          },
          {
            title: 'a set that spans space',
            badge: 'spanning, 3D',
            lines: [
              { math: '$(1, 0, 1)$, $(1, 1, 0)$, $(0, 1, 1)$ as columns', why: 'three vectors in $\\mathbb{R}^3$' },
              { math: '$\\det = 1(1 - 0) - 1(0 - 1) + 0 = 2$', why: 'expand along row 1' },
              { math: '$2 \\neq 0$: they span $\\mathbb{R}^3$', why: 'pivot in every row', answer: true },
            ],
          },
        ],
        examplesAfter: 'Test your own target vector in the [span membership visualizer](!/linear-algebra/visual-tools/span-membership).',
        visual: {
          caption:
            'The span of two independent vectors in $\\mathbb{R}^3$ is a plane through the origin. Asking whether $\\mathbf{b}$ is in the span asks whether its tip lies on that plane. The contradiction row $[0\\ 0 \\mid d]$ is the algebra saying "$\\mathbf{b}$ sits off the plane by an amount you cannot reach".',
        },
        pitfalls: [
          {
            title: 'Looking for pivots in the columns',
            wrong: '$(1, 0)$, $(0, 1)$, $(1, 1)$ do not span $\\mathbb{R}^2$: column 3 has no pivot',
            right: 'spanning needs a pivot in every row; both rows have one, so they span',
          },
          {
            title: 'Too few vectors',
            wrong: 'two vectors that are not parallel span $\\mathbb{R}^3$',
            right: 'they span only a plane; at least $n$ vectors are needed to span $\\mathbb{R}^n$',
          },
          {
            title: 'Reducing the coefficients but forgetting b',
            wrong: 'row operations applied to $A$ only, then "consistent"',
            right: 'apply every row operation to the whole augmented row, including the $\\mathbf{b}$ column',
          },
        ],
        related: ['linear-independence-test', 'subspace-test', 'find-basis'],
        builtOn: [
          { label: 'Span (set definition)', url: ruleUrl('la.span-set-definition') },
          { label: 'Span membership criterion', url: ruleUrl('la.span-membership-criterion') },
          { label: 'Solvability rank criterion', url: ruleUrl('la.solvability-rank-criterion') },
        ],
      },
    },
    {
      id: 'find-basis',
      slug: 'find-basis',
      name: 'How to find a basis',
      description: 'Row reduce once: the pivot columns of the original matrix, or one vector per free variable.',
      uses: ['row reduction', 'pivot columns', 'free variables'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Basis (Span, Equations, Row Space) | Learn Math Class',
        description: 'Find a basis for a subspace: take the pivot columns of the original matrix, or one vector per free variable when the subspace is given by equations. Examples.',
        keywords: ['how to find a basis', 'basis for a subspace', 'basis of a span', 'basis from pivot columns', 'find a basis examples'],
      },
      page: {
        h1: 'How to Find a Basis',
        lead:
          'A basis is a set of independent vectors that spans the subspace. If the subspace is a span, row reduce and keep the vectors in the pivot columns. If it is given by equations, solve them and take one vector per free variable.',
        recognize:
          'A subspace given in one of two ways. As a span: "find a basis for $\\operatorname{Span}\\{(1, 1, 0), (2, 2, 0), (1, 0, 1), (3, 2, 1)\\}$". As equations: "find a basis for the plane $x + y - z = 0$", "for $\\{p \\in P_2 : p(1) = 0\\}$". Test: is the subspace a list of vectors or a set of conditions?',
        recognizeNote: `A basis is defined in the ${link('lesson.la.vector-spaces.basis.2', 'basis lesson')}; the extraction is in ${link('lesson.la.vector-spaces.basis.7', 'Finding a Basis for a Subspace')}.`,
        methods: [
          {
            name: 'Pivot columns',
            tag: 'subspace given as a span',
            preferred: true,
            formula: '\\text{basis of } \\operatorname{Span}\\{\\mathbf{v}_i\\} = \\{\\mathbf{v}_i : \\text{column } i \\text{ has a pivot}\\}',
            body: `Row reduce the matrix of columns; keep the original vectors at the ${link('la.pivot-definition', 'pivot')} positions.`,
          },
          {
            name: 'Free variables',
            tag: 'subspace given by equations',
            formula: '\\mathbf{x} = t_1\\mathbf{s}_1 + \\cdots + t_k\\mathbf{s}_k \\ \\Rightarrow\\ \\{\\mathbf{s}_1, \\ldots, \\mathbf{s}_k\\}',
            body: 'Solve the equations, write the general solution in parametric vector form, and keep one vector per free variable.',
          },
          {
            name: 'Nonzero echelon rows',
            tag: 'vectors as rows',
            formula: '\\text{basis of } \\operatorname{Row}(A) = \\text{nonzero rows of an echelon form}',
            body: 'Put the vectors in the rows instead; row operations keep the row space, so the nonzero rows that remain are a basis (but not the original vectors).',
          },
        ],
        steps: {
          traceLabel: 'On $\\operatorname{Span}\\{(1, 1, 0), (2, 2, 0), (1, 0, 1), (3, 2, 1)\\}$',
          items: [
            {
              title: 'Put the vectors in the columns of a matrix.',
              body: 'Keep the order; you will come back to these columns.',
              state: '$A = \\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 1 & 2 & 0 & 2 \\\\ 0 & 0 & 1 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Row reduce.',
              body: 'Go to [reduced row echelon form](!/linear-algebra/linear-systems/methods/reduced-row-echelon-form); an echelon form is enough to locate pivots.',
              state: '$\\begin{pmatrix} 1 & 2 & 0 & 2 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Mark the pivot columns.',
              body: 'The leading $1$ of each nonzero row.',
              state: 'pivots in columns $1$ and $3$',
            },
            {
              title: 'Take the matching columns of the original matrix.',
              body: 'Not the columns of the echelon form: those generally span a different space.',
              state: '$\\{(1, 1, 0),\\ (1, 0, 1)\\}$',
            },
            {
              title: 'Check the size and the redundant vectors.',
              body: 'The basis has as many vectors as there are pivots. The RREF shows how each dropped vector is built from the kept ones.',
              state: '$2$ vectors; $(2, 2, 0) = 2(1, 1, 0)$, $(3, 2, 1) = 2(1, 1, 0) + (1, 0, 1)$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a plane given by an equation',
            badge: 'free variables',
            lines: [
              { math: '$x + y - z = 0$: $\\ x = -y + z$, free $y, z$', why: 'solve for the pivot variable' },
              { math: '$(x, y, z) = y(-1, 1, 0) + z(1, 0, 1)$', why: 'parametric vector form' },
              { math: 'basis $\\{(-1, 1, 0),\\ (1, 0, 1)\\}$', why: 'check: both satisfy the equation', answer: true },
            ],
          },
          {
            title: 'a row space',
            badge: 'echelon rows',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 3 \\\\ 3 & 6 & 4 \\end{pmatrix}$', why: 'vectors as rows' },
              { math: '$R_2 - 2R_1$, $R_3 - 3R_1$, $R_3 - R_2$: rows $(1, 2, 1)$, $(0, 0, 1)$, $(0, 0, 0)$', why: 'echelon form' },
              { math: 'basis of the row space: $\\{(1, 2, 1),\\ (0, 0, 1)\\}$', why: 'the nonzero rows', answer: true },
            ],
          },
          {
            title: 'polynomials',
            badge: 'abstract space',
            lines: [
              { math: '$p = a + bx + cx^2$ with $p(1) = a + b + c = 0$', why: 'the condition as an equation' },
              { math: '$a = -b - c$: $\\ p = b(x - 1) + c(x^2 - 1)$', why: 'free $b, c$' },
              { math: 'basis $\\{x - 1,\\ x^2 - 1\\}$', why: 'two free variables, two vectors', answer: true },
            ],
          },
        ],
        examplesAfter: 'Row reduce any matrix step by step in the [Gaussian elimination tool](!/linear-algebra/visual-tools/gauss-elimination).',
        visual: {
          caption:
            'Row reduction never changes which columns depend on which: if column $4$ equals twice column $1$ plus column $3$ in the echelon form, the same is true in the original matrix. The echelon form is just easier to read. That is why you read the pivot positions there but take the actual vectors from the original matrix.',
        },
        pitfalls: [
          {
            title: 'Taking the echelon columns as the basis',
            wrong: 'basis $\\{(1, 0, 0), (0, 1, 0)\\}$ from the RREF columns',
            right: 'use the original columns: $\\{(1, 1, 0), (1, 0, 1)\\}$',
            note: 'For a row space it is the other way round: the echelon rows are the basis.',
          },
          {
            title: 'Keeping every given vector',
            wrong: 'all four vectors are a basis because they span the subspace',
            right: 'a basis must also be independent; drop the vectors in non-pivot columns',
          },
          {
            title: 'Including the zero vector',
            wrong: '$\\{(0, 0, 0), (1, 0, 1)\\}$',
            right: 'a set containing $\\mathbf{0}$ is dependent, so it is never a basis',
          },
        ],
        related: ['dimension', 'linear-independence-test', 'fundamental-subspaces'],
        builtOn: [
          { label: 'Basis definition', url: ruleUrl('la.basis-definition') },
          { label: 'Pivot', url: ruleUrl('la.pivot-definition') },
          { label: 'Reduced row echelon form', url: ruleUrl('la.reduced-row-echelon-form-definition') },
        ],
      },
    },
    {
      id: 'dimension',
      slug: 'dimension',
      name: 'How to find the dimension of a subspace',
      description: 'Count the vectors in a basis: the rank for a span, n minus the rank for a solution set.',
      uses: ['basis', 'rank', 'rank–nullity'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Dimension of a Subspace | Learn Math Class',
        description: 'Find the dimension of a subspace: count basis vectors, use the rank for a span, n minus the rank for a solution set. Step by step, with examples and pitfalls.',
        keywords: ['dimension of a subspace', 'how to find the dimension', 'dimension of a span', 'dimension of null space', 'dimension examples linear algebra'],
      },
      page: {
        h1: 'How to Find the Dimension of a Subspace',
        lead:
          'The dimension is the number of vectors in any basis. You rarely need the basis itself: for a span the dimension is the rank of the matrix of vectors, and for the solution set of $A\\mathbf{x} = \\mathbf{0}$ it is the number of unknowns minus the rank.',
        recognize:
          '"What is $\\dim W$?" for a span, a solution set, a plane, a space of polynomials or matrices: $\\dim\\operatorname{Span}\\{(1, 2), (-2, -4)\\}$, the symmetric $2 \\times 2$ matrices, $\\{p \\in P_3 : p(0) = p(1) = 0\\}$. Test: is $W$ given as a span (count pivots) or by equations (count free variables)?',
        recognizeNote: `Dimension is defined in the ${link('lesson.la.vector-spaces.dimension.1', 'dimension lesson')}.`,
        methods: [
          {
            name: 'Count pivots or free variables',
            tag: 'vectors in coordinates',
            preferred: true,
            formula: '\\dim\\operatorname{Span}\\{\\mathbf{v}_i\\} = \\operatorname{rank} A, \\qquad \\dim\\operatorname{Nul}(A) = n - \\operatorname{rank} A',
            body: `Row reduce once; the second formula is the ${link('la.rank-nullity-theorem-matrix-form', 'rank–nullity theorem')}.`,
          },
          {
            name: 'Count parameters',
            tag: 'polynomials, matrices',
            formula: '\\dim W = \\text{number of free parameters in the general element}',
            body: `Write the general element of $W$, impose the conditions, and count what is still free; each parameter gives one basis vector (the ${link('la.dimension-definition', 'definition of dimension')}).`,
          },
        ],
        steps: {
          traceLabel: 'On $W = \\{\\mathbf{x} \\in \\mathbb{R}^4 : x_1 + 2x_2 - x_4 = 0,\\ 2x_1 + 4x_2 + x_3 + x_4 = 0\\}$',
          items: [
            {
              title: 'Decide how W is given.',
              body: 'A list of vectors (span) or a set of equations (solution set).',
              state: 'solution set of two equations in $\\mathbb{R}^4$',
            },
            {
              title: 'Write the matrix.',
              body: 'Spanning vectors go in the columns; equations go in the rows.',
              state: '$A = \\begin{pmatrix} 1 & 2 & 0 & -1 \\\\ 2 & 4 & 1 & 1 \\end{pmatrix}$',
            },
            {
              title: 'Row reduce and count the pivots.',
              body: `The number of pivots is the [rank](!/linear-algebra/matrix/methods/rank).`,
              state: '$R_2 - 2R_1$: $\\begin{pmatrix} 1 & 2 & 0 & -1 \\\\ 0 & 0 & 1 & 3 \\end{pmatrix}$, rank $2$',
            },
            {
              title: 'Apply the right count.',
              body: 'Span: $\\dim = \\operatorname{rank}$. Solution set: $\\dim = n - \\operatorname{rank}$, the number of free variables.',
              state: '$\\dim W = 4 - 2 = 2$ (free $x_2$, $x_4$)',
            },
            {
              title: 'Check against the bounds.',
              body: `A subspace of an $n$-dimensional space has dimension between $0$ and $n$ (the ${link('la.subspace-dimension-inequality', 'subspace dimension inequality')}).`,
              state: '$0 \\le 2 \\le 4$ ✓; basis $(-2, 1, 0, 0)$, $(1, 0, -3, 1)$',
            },
          ],
        },
        examples: [
          {
            title: 'a span of parallel vectors',
            badge: 'basic',
            lines: [
              { math: '$\\operatorname{Span}\\{(1, 2), (-2, -4)\\}$: $\\ (-2, -4) = -2(1, 2)$', why: 'second is redundant' },
              { math: '$\\dim = 1$', why: 'a line through the origin', answer: true },
            ],
          },
          {
            title: 'symmetric 2×2 matrices',
            badge: 'count parameters',
            lines: [
              { math: '$\\begin{pmatrix} a & b \\\\ b & c \\end{pmatrix} = a\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} + b\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} + c\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$', why: 'three free entries' },
              { math: '$\\dim = 3$', why: 'three basis matrices', answer: true },
            ],
          },
          {
            title: 'polynomials with two roots',
            badge: 'conditions',
            lines: [
              { math: '$p = a + bx + cx^2 + dx^3$ in $P_3$, $\\dim P_3 = 4$', why: 'four coefficients' },
              { math: '$p(0) = 0$: $a = 0$; $\\ p(1) = 0$: $b + c + d = 0$', why: 'two independent conditions' },
              { math: '$\\dim = 4 - 2 = 2$, basis $\\{x^2 - x,\\ x^3 - x\\}$', why: 'free $c, d$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Count pivots for any matrix in the [matrix rank visualizer](!/linear-algebra/visual-tools/matrix-rank).',
        visual: {
          caption:
            'Dimension counts independent directions. A line through the origin has one, a plane has two, all of $\\mathbb{R}^3$ has three. Each equation that the vectors must satisfy (and that is not implied by the others) removes one direction, which is why a solution set has dimension $n$ minus the number of independent equations.',
        },
        pitfalls: [
          {
            title: 'Counting the given vectors',
            wrong: '$\\dim\\operatorname{Span}\\{(1, 2), (-2, -4)\\} = 2$',
            right: 'count independent vectors only: the dimension is $1$',
          },
          {
            title: 'Off by one for polynomials',
            wrong: '$\\dim P_3 = 3$',
            right: '$\\dim P_3 = 4$: the basis is $1, x, x^2, x^3$',
          },
          {
            title: 'Pivots instead of free variables for a null space',
            wrong: '$\\dim\\operatorname{Nul}(A) = \\operatorname{rank} A = 2$ for a $3 \\times 5$ matrix of rank $2$',
            right: '$\\dim\\operatorname{Nul}(A) = 5 - 2 = 3$, one per free variable',
          },
          {
            title: 'Confusing the subspace with the ambient space',
            wrong: 'the plane $x - 2y + 3z = 0$ has dimension $3$ because it lives in $\\mathbb{R}^3$',
            right: 'it has dimension $3 - 1 = 2$',
          },
        ],
        related: ['find-basis', 'fundamental-subspaces', 'linear-independence-test'],
        builtOn: [
          { label: 'Dimension definition', url: ruleUrl('la.dimension-definition') },
          { label: 'Rank–nullity theorem', url: ruleUrl('la.rank-nullity-theorem-matrix-form') },
          { label: 'Subspace dimension inequality', url: ruleUrl('la.subspace-dimension-inequality') },
        ],
      },
    },
    {
      id: 'fundamental-subspaces',
      slug: 'fundamental-subspaces',
      name: 'How to find the four fundamental subspaces',
      description: 'One row reduction gives bases for the column space, row space, null space and left null space.',
      uses: ['RREF', 'pivot columns', 'null space', 'transpose'],
      level: 'composite',
      tag: 'Composite',
      meta: '6 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Four Fundamental Subspaces | Learn Math Class',
        description: 'Find the four fundamental subspaces of a matrix: column space, row space, null space and left null space from one row reduction. Dimension checks, examples.',
        keywords: ['four fundamental subspaces', 'column space row space null space', 'left null space', 'how to find the null space', 'fundamental subspaces example'],
      },
      page: {
        h1: 'How to Find the Four Fundamental Subspaces',
        lead:
          'Every $m \\times n$ matrix $A$ of rank $r$ has four subspaces: the column space and the left null space in $\\mathbb{R}^m$, the row space and the null space in $\\mathbb{R}^n$. Row reduce $A$ once and read off three of them; the fourth comes from $A^T$.',
        recognize:
          'Requests such as "find bases for $\\operatorname{Col}(A)$, $\\operatorname{Row}(A)$, $\\operatorname{Nul}(A)$ and $\\operatorname{Nul}(A^T)$", "find the null space", "find the rank and nullity", or "describe the image and kernel" of a matrix. Test: is a single matrix given, with questions about the spaces it determines?',
        recognizeNote: `The four subspaces are introduced in the ${link('lesson.la.vector-spaces.fundamental-spaces.1', 'fundamental subspaces lesson')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 3 & 4 \\end{pmatrix}$',
          items: [
            {
              title: 'Row reduce A to RREF and find the rank.',
              body: 'Use [reduced row echelon form](!/linear-algebra/linear-systems/methods/reduced-row-echelon-form). The rank $r$ is the number of pivots.',
              state: '$\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$, $\\ r = 2$',
            },
            {
              title: 'Column space: pivot columns of the original A.',
              body: 'Dimension $r$, a subspace of $\\mathbb{R}^m$.',
              state: '$\\operatorname{Col}(A) = \\operatorname{Span}\\{(1, 2, 1), (2, 4, 3)\\}$',
            },
            {
              title: 'Row space: nonzero rows of the RREF.',
              body: 'Dimension $r$, a subspace of $\\mathbb{R}^n$.',
              state: '$\\operatorname{Row}(A) = \\operatorname{Span}\\{(1, 0, 1), (0, 1, 1)\\}$',
            },
            {
              title: 'Null space: solve Ax = 0.',
              body: 'One vector per free variable (see [homogeneous systems](!/linear-algebra/linear-systems/methods/homogeneous-systems)). Dimension $n - r$.',
              state: '$x_1 = -x_3$, $x_2 = -x_3$: $\\ \\operatorname{Nul}(A) = \\operatorname{Span}\\{(-1, -1, 1)\\}$',
            },
            {
              title: 'Left null space: solve the transpose system.',
              body: 'Row reduce $A^T$ and solve $A^T\\mathbf{y} = \\mathbf{0}$. Dimension $m - r$.',
              state: '$\\operatorname{Nul}(A^T) = \\operatorname{Span}\\{(-2, 1, 0)\\}$',
            },
            {
              title: 'Check dimensions and right angles.',
              body: `The ${link('la.four-fundamental-subspaces-dimensions', 'dimension count')}: $r + (n - r) = n$ and $r + (m - r) = m$. The null space is perpendicular to the row space, the left null space to the column space.`,
              state: '$2 + 1 = 3$, $2 + 1 = 3$; $(-1, -1, 1) \\cdot (1, 0, 1) = 0$ ✓, $(-2, 1, 0) \\cdot (1, 2, 1) = 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a rank-one matrix',
            badge: '2×2',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$, RREF $\\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$, $r = 1$', why: 'one pivot' },
              { math: '$\\operatorname{Col} = \\operatorname{Span}\\{(1, 2)\\}$, $\\ \\operatorname{Row} = \\operatorname{Span}\\{(1, 2)\\}$', why: 'symmetric matrix: they coincide' },
              { math: '$\\operatorname{Nul}(A) = \\operatorname{Nul}(A^T) = \\operatorname{Span}\\{(-2, 1)\\}$', why: 'check: $-2 + 2 = 0$', answer: true },
            ],
          },
          {
            title: 'full row rank',
            badge: '2×3',
            lines: [
              { math: '$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -1 \\end{pmatrix}$, already RREF, $r = 2$', why: 'pivots in columns 1 and 2' },
              { math: '$\\operatorname{Col}(A) = \\mathbb{R}^2$, $\\ \\operatorname{Row}$ basis $(1, 0, 2)$, $(0, 1, -1)$', why: 'pivot in every row' },
              { math: '$\\operatorname{Nul}(A) = \\operatorname{Span}\\{(-2, 1, 1)\\}$, $\\ \\operatorname{Nul}(A^T) = \\{\\mathbf{0}\\}$', why: '$m - r = 0$', answer: true },
            ],
          },
          {
            title: 'dimensions only',
            badge: 'no matrix entries',
            lines: [
              { math: '$A$ is $4 \\times 6$ with rank $3$', why: '$m = 4$, $n = 6$, $r = 3$' },
              { math: '$\\dim\\operatorname{Col} = \\dim\\operatorname{Row} = 3$', why: 'both equal the rank' },
              { math: '$\\dim\\operatorname{Nul}(A) = 6 - 3 = 3$, $\\ \\dim\\operatorname{Nul}(A^T) = 4 - 3 = 1$', why: 'rank–nullity for A and its transpose', answer: true },
            ],
          },
        ],
        examplesAfter: 'See all four spaces of a matrix at once in the [four fundamental subspaces visualizer](!/linear-algebra/visual-tools/four-fundamental-subspaces).',
        visual: {
          caption:
            'Picture $A$ as a map from $\\mathbb{R}^n$ to $\\mathbb{R}^m$. On the input side, $\\mathbb{R}^n$ splits into the row space and the null space at right angles; the null space is everything $A$ sends to zero. On the output side, $\\mathbb{R}^m$ splits into the column space, everything $A$ can reach, and the left null space perpendicular to it. Both splits share the same number $r$.',
        },
        pitfalls: [
          {
            title: 'Column space from the RREF columns',
            wrong: '$\\operatorname{Col}(A) = \\operatorname{Span}\\{(1, 0, 0), (0, 1, 0)\\}$',
            right: 'use the original pivot columns $(1, 2, 1)$ and $(2, 4, 3)$; row operations change the column space',
          },
          {
            title: 'Left null space from A instead of the transpose',
            wrong: '$\\operatorname{Nul}(A^T) = \\operatorname{Span}\\{(-1, -1, 1)\\}$',
            right: 'that is $\\operatorname{Nul}(A)$; solve $A^T\\mathbf{y} = \\mathbf{0}$ to get $(-2, 1, 0)$',
          },
          {
            title: 'Mixing up the ambient spaces',
            wrong: 'the null space of a $2 \\times 3$ matrix is a subspace of $\\mathbb{R}^2$',
            right: 'it lives in $\\mathbb{R}^3$, with the row space; column and left null space live in $\\mathbb{R}^2$',
          },
          {
            title: 'Dimensions that do not add up',
            wrong: 'rank $2$ and a two-vector null space basis for a $3 \\times 3$ matrix',
            right: 'rank plus nullity is $n = 3$; recheck the free variables',
          },
        ],
        related: ['find-basis', 'dimension', 'span-test'],
        builtOn: [
          { label: 'Four fundamental subspaces: dimensions', url: ruleUrl('la.four-fundamental-subspaces-dimensions') },
          { label: 'Rank–nullity theorem', url: ruleUrl('la.rank-nullity-theorem-matrix-form') },
          { label: 'Row rank equals column rank', url: ruleUrl('la.row-rank-equals-column-rank') },
          { label: 'Orthogonal complement', url: ruleUrl('la.orthogonal-complement-definition') },
        ],
      },
    },
  ],

  categories: [
    { id: 'composite', label: 'Subspaces, independence, span, basis, dimension', blurb: 'Composite · each opens its own page' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [{ value: 'composite', label: 'Composite' }],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/vectors/methods', label: 'Vectors' },
      { url: '/linear-algebra/linear-systems/methods', label: 'Linear systems' },
      { url: '/linear-algebra/matrix/methods', label: 'Matrices' },
    ],
  },
};

export default vectorSpacesMethods;
