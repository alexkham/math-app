// linear-systems.methods.js (linear algebra)
// Single data source for /linear-algebra/linear-systems/methods (hub) and
// /linear-algebra/linear-systems/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/linear-systems/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/linear-systems/methods';

const linearSystemsMethods = {
  hubPath: HUB,
  hubLabel: 'linear system methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'elementary-row-operations',
      name: 'How to apply an elementary row operation',
      subtitle: 'Elementary row operations',
      glyph: 'R₁↔R₂',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'One step of row reduction on an augmented matrix: swap two rows, scale a row by a nonzero number, or add a multiple of one row to another: $R_1 \\leftrightarrow R_2$, $\\frac{1}{2}R_1 \\to R_1$, $R_2 - 3R_1 \\to R_2$.',
      formula: 'R_i \\leftrightarrow R_j \\qquad kR_i \\to R_i \\ (k \\neq 0) \\qquad R_i + cR_j \\to R_i',
      fields: {
        steps: [
          '1. Pick the operation and the target row; the arrow points at the row that is replaced.',
          '2. Apply it to every entry of that row, including the constant behind the bar.',
          '3. Copy every other row unchanged. The new system has the same solutions as the old one.',
        ],
        worked_example: '$\\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 3 & 4 & 6 \\end{array}\\right] \\xrightarrow{R_2 - 3R_1} \\left[\\begin{array}{cc|c} 1 & 2 & 5 \\\\ 0 & -2 & -9 \\end{array}\\right]$',
      },
      links: [
        { url: ruleUrl('la.elementary-row-operations'), label: 'Elementary row operations' },
        { url: ruleUrl('lesson.la.linear-systems.gaussian-elimination.2'), label: 'The three row operations (lesson)' },
        { url: ruleUrl('la.row-equivalence-preserves-solutions'), label: 'Row equivalence preserves solutions' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'gaussian-elimination',
      slug: 'gaussian-elimination',
      name: 'How to solve a system by Gaussian elimination',
      description: 'Reduce the augmented matrix to echelon form, then back-substitute from the bottom row up.',
      uses: ['elementary row operations', 'row echelon form', 'back substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a System by Gaussian Elimination | Learn Math Class',
        description: 'Solve linear systems by Gaussian elimination: write the augmented matrix, clear below each pivot, reach echelon form, back-substitute. Examples and mistakes.',
        keywords: ['gaussian elimination', 'how to solve a system with gaussian elimination', 'gaussian elimination steps', 'row reduction examples', 'gaussian elimination 3x3'],
      },
      page: {
        h1: 'How to Solve a System by Gaussian Elimination',
        lead:
          'Write the system as an augmented matrix and use row operations to clear every entry below the pivots. The result is a staircase (echelon form) whose last equation has one unknown, so you solve from the bottom up.',
        recognize:
          'Any system of linear equations, of any size: $x + y + z = 6$, $2x + 3y + z = 11$, $x - y + 2z = 5$; two equations in two unknowns; more unknowns than equations. Test: every unknown appears only to the first power, with no products of unknowns. Then elimination always works and also tells you when there is no solution.',
        recognizeNote: `The method is laid out in the ${link('lesson.la.linear-systems.gaussian-elimination', 'Gaussian elimination lesson')}.`,
        methods: [
          {
            name: 'Echelon form, then back substitution',
            tag: 'standard',
            preferred: true,
            formula: '[A \\mid \\mathbf{b}] \\sim \\text{REF} \\;\\Rightarrow\\; \\text{solve from the last row up}',
            body: `Clear below each pivot only, then [back-substitute](!${HUB}/back-substitution). The least work by hand and by computer.`,
          },
          {
            name: 'Gauss-Jordan to reduced form',
            tag: 'no back substitution',
            formula: '[A \\mid \\mathbf{b}] \\sim \\text{RREF} \\;\\Rightarrow\\; \\text{read } \\mathbf{x} \\text{ off}',
            body: `Also clear above each pivot and scale it to $1$; see [Gauss-Jordan elimination](!${HUB}/gauss-jordan-elimination). Useful when free variables appear.`,
          },
        ],
        steps: {
          traceLabel: 'On $x + y + z = 6,\\ 2x + 3y + z = 11,\\ x - y + 2z = 5$',
          items: [
            {
              title: 'Write the augmented matrix.',
              body: `One row per equation, one column per unknown, the constants behind the bar (${link('la.augmented-matrix-construction', 'augmented matrix')}). Line up the unknowns in the same order in every row.`,
              state: '$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 2 & 3 & 1 & 11 \\\\ 1 & -1 & 2 & 5 \\end{array}\\right]$',
            },
            {
              title: 'Get a nonzero pivot in the top-left position.',
              body: 'If the entry is $0$, swap in a row below that has a nonzero entry in that column.',
              state: 'pivot $1$ already in place',
            },
            {
              title: 'Clear every entry below the pivot.',
              body: 'For each lower row use $R_i - \\frac{a_{i1}}{a_{11}}R_1 \\to R_i$, constants included.',
              state: '$R_2 - 2R_1,\\ R_3 - R_1$: rows $[0\\ 1\\ {-1} \\mid {-1}]$, $[0\\ {-2}\\ 1 \\mid {-1}]$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Move one row down and one column right, and repeat.',
              body: 'Stop when every row has been used or the rest are zero rows. A row $[0 \\cdots 0 \\mid d]$ with $d \\neq 0$ means no solution.',
              state: '$R_3 + 2R_2$: $\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 0 & -1 & -3 \\end{array}\\right]$',
            },
            {
              title: 'Back-substitute and check.',
              body: `Solve the last row, then work upward ([back substitution](!${HUB}/back-substitution)). Put the answer into the original equations.`,
              state: '$z = 3,\\ y = -1 + 3 = 2,\\ x = 6 - 2 - 3 = 1$; check $1 - 2 + 6 = 5$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'two equations',
            badge: '2 × 2',
            lines: [
              { math: '$x + 2y = 5,\\ 3x + 4y = 6$', why: 'augmented rows $[1\\ 2 \\mid 5]$, $[3\\ 4 \\mid 6]$' },
              { math: '$R_2 - 3R_1$: $[0\\ {-2} \\mid {-9}]$', why: 'clear below the first pivot' },
              { math: '$y = \\frac{9}{2},\\ x = 5 - 2 \\cdot \\frac{9}{2} = -4$', why: 'bottom row first', answer: true },
            ],
          },
          {
            title: 'a zero in the pivot position',
            badge: 'row swap',
            lines: [
              { math: '$\\left[\\begin{array}{ccc|c} 0 & 1 & 2 & 7 \\\\ 1 & 1 & 1 & 6 \\\\ 2 & 1 & 3 & 14 \\end{array}\\right]$', why: 'top-left entry is zero' },
              { math: '$R_1 \\leftrightarrow R_2$, then $R_3 - 2R_1$: $[0\\ {-1}\\ 1 \\mid 2]$', why: 'swap, then clear column 1' },
              { math: '$R_3 + R_2$: $[0\\ 0\\ 3 \\mid 9]$', why: 'clear column 2' },
              { math: '$z = 3,\\ y = 7 - 6 = 1,\\ x = 6 - 1 - 3 = 2$', why: 'back substitution', answer: true },
            ],
          },
          {
            title: 'a row of zeros appears',
            badge: 'infinitely many',
            lines: [
              { math: '$x + y + z = 2,\\ x + 2y + 3z = 5,\\ 2x + 3y + 4z = 7$', why: '' },
              { math: '$R_2 - R_1,\\ R_3 - 2R_1$: both give $[0\\ 1\\ 2 \\mid 3]$', why: 'rows 2 and 3 now equal' },
              { math: '$R_3 - R_2$: $[0\\ 0\\ 0 \\mid 0]$', why: 'zero row, no contradiction' },
              { math: '$z = t,\\ y = 3 - 2t,\\ x = -1 + t$', why: '$z$ has no pivot: free', answer: true },
            ],
          },
        ],
        examplesAfter: 'Run the same reduction on your own numbers in the [linear systems calculator](!/linear-algebra/calculators/linear-systems).',
        visual: {
          caption:
            'Each equation of a $3 \\times 3$ system is a plane, and the solution is the point where all three meet. A row operation swaps one plane for a combination of two of them; the new plane still passes through that common point, so the solution never changes. Elimination keeps tilting planes until they line up with the axes one unknown at a time. Watch it step by step in the [Gaussian elimination visualizer](!/linear-algebra/visual-tools/gauss-elimination).',
        },
        pitfalls: [
          {
            title: 'Leaving out the constant',
            wrong: '$R_2 - 2R_1$ on $[2\\ 3\\ 1 \\mid 11]$ gives $[0\\ 1\\ {-1} \\mid 11]$',
            right: 'the constant changes too: $11 - 2 \\cdot 6 = -1$, so $[0\\ 1\\ {-1} \\mid {-1}]$',
          },
          {
            title: 'Wrong sign of the multiplier',
            wrong: '$R_3 - 2R_2$ on $[0\\ {-2}\\ 1 \\mid {-1}]$ gives $[0\\ {-4}\\ 3 \\mid 1]$',
            right: 'the entry is $-2$, so add: $R_3 + 2R_2 = [0\\ 0\\ {-1} \\mid {-3}]$',
            note: 'The multiplier is minus (entry to clear) ÷ (pivot).',
          },
          {
            title: 'Reading the answer straight off echelon form',
            wrong: 'last column $(6, -1, -3)$ as $(x, y, z)$',
            right: 'back-substitute: $(1, 2, 3)$; the first try fails $x + y + z = 6$',
          },
          {
            title: 'Treating a zero row as no solution',
            wrong: '$[0\\ 0\\ 0 \\mid 0]$: "the system is inconsistent"',
            right: 'it reads $0 = 0$; only $[0\\ 0\\ 0 \\mid d]$ with $d \\neq 0$ means no solution',
          },
        ],
        related: ['back-substitution', 'gauss-jordan-elimination', 'which-system-method'],
        builtOn: [
          { label: 'Elementary row operations', url: ruleUrl('la.elementary-row-operations') },
          { label: 'Row equivalence preserves solutions', url: ruleUrl('la.row-equivalence-preserves-solutions') },
          { label: 'Forward elimination (lesson)', url: ruleUrl('lesson.la.linear-systems.gaussian-elimination.3') },
        ],
      },
    },
    {
      id: 'gauss-jordan-elimination',
      slug: 'gauss-jordan-elimination',
      name: 'How to solve a system by Gauss-Jordan elimination',
      description: 'Row-reduce all the way to reduced form, so each unknown can be read off its own row.',
      uses: ['elementary row operations', 'reduced row echelon form'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a System by Gauss-Jordan Elimination | Learn Math Class',
        description: 'Solve a system by Gauss-Jordan elimination: reduce to echelon form, scale every pivot to 1, clear above the pivots, read the solution. Examples, mistakes.',
        keywords: ['gauss-jordan elimination', 'gauss jordan method', 'solve system with rref', 'gauss-jordan elimination steps', 'gauss-jordan examples'],
      },
      page: {
        h1: 'How to Solve a System by Gauss-Jordan Elimination',
        lead:
          'Gauss-Jordan elimination is Gaussian elimination carried one stage further: every pivot is scaled to $1$ and every entry above it is cleared too. At the end each row says "this unknown equals this number", so no back substitution is needed.',
        recognize:
          'The same systems as Gaussian elimination, when you want the answer in the cleanest form: a system with free variables, a problem that asks for the reduced form, or the inverse of a matrix through $[A \\mid I]$. Test: will you need every pivot variable written in terms of the free ones? Then go all the way to reduced form.',
        recognizeNote: `The backward pass is described in the lesson section ${link('lesson.la.linear-systems.gaussian-elimination.6', 'Gauss-Jordan Elimination')}.`,
        steps: {
          traceLabel: 'On $x + y + z = 6,\\ 2x + 3y + z = 11,\\ x - y + 2z = 5$',
          items: [
            {
              title: 'Reduce to echelon form.',
              body: `The forward pass of [Gaussian elimination](!${HUB}/gaussian-elimination): clear below each pivot.`,
              state: '$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 0 & -1 & -3 \\end{array}\\right]$',
            },
            {
              title: 'Scale each pivot row so the pivot is 1.',
              body: 'Divide the whole row, constant included, by its pivot.',
              state: '$-R_3 \\to R_3$: $[0\\ 0\\ 1 \\mid 3]$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Clear above each pivot, starting from the bottom one.',
              body: 'Use the pivot row to make every entry above the pivot zero. Working bottom-up keeps the zeros you have already made.',
              state: '$R_2 + R_3,\\ R_1 - R_3$, then $R_1 - R_2$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Read the solution.',
              body: 'Each pivot row gives one unknown. A column without a pivot is a free variable.',
              state: '$\\left[\\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$: $x = 1,\\ y = 2,\\ z = 3$',
            },
          ],
        },
        examples: [
          {
            title: 'two equations',
            badge: '2 × 2',
            lines: [
              { math: '$2x + 4y = 10,\\ x + 3y = 7$', why: '' },
              { math: '$\\frac{1}{2}R_1$: $[1\\ 2 \\mid 5]$; $R_2 - R_1$: $[0\\ 1 \\mid 2]$', why: 'pivot 1, clear below' },
              { math: '$R_1 - 2R_2$: $[1\\ 0 \\mid 1]$', why: 'clear above' },
              { math: '$x = 1,\\ y = 2$', why: 'read the rows', answer: true },
            ],
          },
          {
            title: 'three equations',
            badge: '3 × 3',
            lines: [
              { math: '$\\left[\\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\\\ 2 & 5 & 3 & 3 \\\\ 1 & 3 & 3 & 4 \\end{array}\\right]$', why: '' },
              { math: '$R_2 - 2R_1,\\ R_3 - R_1,\\ R_3 - R_2$: $[0\\ 0\\ 1 \\mid 2]$', why: 'forward pass' },
              { math: '$R_2 - R_3$: $[0\\ 1\\ 0 \\mid {-1}]$; $R_1 - R_3$: $[1\\ 2\\ 0 \\mid {-1}]$', why: 'clear above the third pivot' },
              { math: '$R_1 - 2R_2$: $x = 1,\\ y = -1,\\ z = 2$', why: 'clear above the second pivot', answer: true },
            ],
          },
          {
            title: 'a free variable',
            badge: 'more unknowns',
            lines: [
              { math: '$x + 2y + z = 4,\\ 2x + 4y + 3z = 11$', why: '' },
              { math: '$R_2 - 2R_1$: $[0\\ 0\\ 1 \\mid 3]$', why: 'pivot jumps to column 3' },
              { math: '$R_1 - R_2$: $[1\\ 2\\ 0 \\mid 1]$', why: 'clear above' },
              { math: '$y = s$: $x = 1 - 2s,\\ z = 3$', why: '$y$ has no pivot: free', answer: true },
            ],
          },
        ],
        examplesAfter: `For free variables, continue with [parametric solutions](!${HUB}/parametric-solutions).`,
        visual: {
          caption:
            'Reduced form is the system rewritten so that each equation mentions one pivot unknown and nothing else except free unknowns. Clearing above a pivot removes that unknown from every other equation, which is exactly what back substitution would do one row at a time. Gauss-Jordan simply does it on the matrix instead of on the equations. The [Gaussian elimination visualizer](!/linear-algebra/visual-tools/gauss-elimination) shows both passes.',
        },
        pitfalls: [
          {
            title: 'Stopping at echelon form',
            wrong: 'reading $(6, -1, -3)$ from $[1\\ 1\\ 1 \\mid 6]$, $[0\\ 1\\ {-1} \\mid {-1}]$, $[0\\ 0\\ {-1} \\mid {-3}]$',
            right: 'finish the backward pass: $(1, 2, 3)$',
          },
          {
            title: 'Clearing with a pivot that is not 1',
            wrong: '$R_1 - R_3$ with $R_3 = [0\\ 0\\ {-1} \\mid {-3}]$ gives $[1\\ 1\\ 2 \\mid 9]$',
            right: 'scale first, $R_3 = [0\\ 0\\ 1 \\mid 3]$; then $R_1 - R_3 = [1\\ 1\\ 0 \\mid 3]$',
          },
          {
            title: 'Forgetting to scale the last pivot',
            wrong: '$[2\\ 0 \\mid 2]$ read as $x = 2$',
            right: 'divide the row by $2$: $x = 1$',
          },
        ],
        related: ['gaussian-elimination', 'reduced-row-echelon-form', 'inverse-matrix-method'],
        builtOn: [
          { label: 'Reduced row echelon form', url: ruleUrl('la.reduced-row-echelon-form-definition') },
          { label: 'Elementary row operations', url: ruleUrl('la.elementary-row-operations') },
          { label: 'Reading solutions from RREF (lesson)', url: ruleUrl('lesson.la.linear-systems.echelon-form.6') },
        ],
      },
    },
    {
      id: 'row-echelon-form',
      slug: 'row-echelon-form',
      name: 'How to reduce a matrix to row echelon form',
      description: 'Build the staircase: find each pivot, clear below it, move down and right, zero rows last.',
      uses: ['elementary row operations', 'pivots'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Reduce a Matrix to Row Echelon Form (REF) | Learn Math Class',
        description: 'Reduce a matrix to row echelon form: find the pivot column, swap a nonzero entry up, clear below it, repeat on the rows below. Rank, examples, common mistakes.',
        keywords: ['row echelon form', 'how to find row echelon form', 'ref of a matrix', 'row echelon form examples', 'reduce matrix to echelon form'],
      },
      page: {
        h1: 'How to Reduce a Matrix to Row Echelon Form',
        lead:
          'Row echelon form is a staircase: each row starts further right than the row above, everything below a pivot is zero, and zero rows sit at the bottom. You reach it column by column, clearing below one pivot at a time.',
        recognize:
          'Any matrix you need to row-reduce: a coefficient or augmented matrix before back substitution, a matrix whose rank you want, a set of vectors to test for independence. Typical forms: $\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 2 & 4 & 3 & 8 \\\\ 3 & 6 & 5 & 13 \\end{pmatrix}$, a square matrix, a matrix with a zero first column. Test: is there a nonzero entry below a leading entry? Then the matrix is not yet in echelon form.',
        recognizeNote: `The conditions are listed in the lesson section ${link('lesson.la.linear-systems.echelon-form.1', 'Row Echelon Form')}.`,
        steps: {
          traceLabel: 'On $\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 2 & 4 & 3 & 8 \\\\ 3 & 6 & 5 & 13 \\end{pmatrix}$',
          items: [
            {
              title: 'Find the leftmost column with a nonzero entry.',
              body: 'That is the pivot column for the current row.',
              state: 'column 1',
            },
            {
              title: 'Bring a nonzero entry to the top of the remaining rows.',
              body: 'Swap rows if the current top entry is zero. Any nonzero number can be the pivot; it does not have to be $1$.',
              state: 'pivot $1$ in row 1, no swap',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Clear every entry below the pivot.',
              body: 'Subtract multiples of the pivot row from each row below.',
              state: '$R_2 - 2R_1,\\ R_3 - 3R_1$: $[0\\ 0\\ 1\\ 2]$, $[0\\ 0\\ 2\\ 4]$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Cover the pivot row and repeat on the rows below.',
              body: 'The next pivot may skip a column: here column 2 has only zeros left, so the pivot is in column 3.',
              state: '$R_3 - 2R_2$: $[0\\ 0\\ 0\\ 0]$',
            },
            {
              title: 'Check the staircase.',
              body: 'Each pivot is to the right of the one above, zeros fill below every pivot, zero rows are last. The number of pivots is the rank.',
              state: '$\\begin{pmatrix} 1 & 2 & 1 & 3 \\\\ 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$, rank $2$',
            },
          ],
        },
        examples: [
          {
            title: 'one step',
            badge: '2 × 3',
            lines: [
              { math: '$\\begin{pmatrix} 2 & 4 & 6 \\\\ 1 & 3 & 5 \\end{pmatrix}$', why: 'pivot $2$ in row 1' },
              { math: '$R_2 - \\frac{1}{2}R_1$: $\\begin{pmatrix} 2 & 4 & 6 \\\\ 0 & 1 & 2 \\end{pmatrix}$', why: 'two pivots, rank $2$', answer: true },
            ],
          },
          {
            title: 'a zero first entry',
            badge: 'swap first',
            lines: [
              { math: '$\\begin{pmatrix} 0 & 2 & 4 \\\\ 3 & 6 & 9 \\\\ 1 & 1 & 1 \\end{pmatrix}$, $R_1 \\leftrightarrow R_3$', why: 'put a nonzero entry on top' },
              { math: '$R_2 - 3R_1$: $[0\\ 3\\ 6]$, then $\\frac{1}{3}R_2$: $[0\\ 1\\ 2]$', why: 'clear, then simplify' },
              { math: '$R_3 - 2R_2$: $\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$, rank $2$', why: 'third row vanishes', answer: true },
            ],
          },
          {
            title: 'full rank',
            badge: '3 pivots',
            lines: [
              { math: '$\\begin{pmatrix} 1 & -1 & 2 \\\\ 2 & 1 & 1 \\\\ -1 & 5 & 0 \\end{pmatrix}$', why: '' },
              { math: '$R_2 - 2R_1,\\ R_3 + R_1$: $[0\\ 3\\ {-3}]$, $[0\\ 4\\ 2]$', why: 'clear column 1' },
              { math: '$\\frac{1}{3}R_2$, then $R_3 - 4R_2$: $[0\\ 0\\ 6]$', why: 'clear column 2' },
              { math: '$\\begin{pmatrix} 1 & -1 & 2 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 6 \\end{pmatrix}$, rank $3$', why: 'a pivot in every column', answer: true },
            ],
          },
        ],
        examplesAfter: 'Count the pivots of any matrix in the [matrix rank visualizer](!/linear-algebra/visual-tools/matrix-rank).',
        visual: {
          caption:
            'Each row of the echelon form starts with a pivot, and the pivots step down to the right like a staircase. Below the staircase everything is zero, so the last nonzero row involves the fewest columns. That shape is what makes back substitution possible: each row adds exactly one new pivot unknown to the rows below it.',
        },
        pitfalls: [
          {
            title: 'Thinking every pivot must be 1',
            wrong: '"$\\begin{pmatrix} 2 & 4 & 6 \\\\ 0 & 1 & 2 \\end{pmatrix}$ is not in echelon form"',
            right: 'it is; pivots equal to $1$ are a condition of reduced form only',
          },
          {
            title: 'A nonzero entry left below a pivot',
            wrong: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 6 & 7 \\end{pmatrix}$ called echelon form',
            right: 'the $6$ sits below the pivot $4$; clear it with $R_3 - \\frac{3}{2}R_2$',
          },
          {
            title: 'Expecting one correct echelon form',
            wrong: 'marking $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 2 \\end{pmatrix}$ wrong because the key has $\\begin{pmatrix} 2 & 4 & 6 \\\\ 0 & 1 & 2 \\end{pmatrix}$',
            right: 'echelon form is not unique; the pivot positions are',
            note: `Only the [reduced form](!${HUB}/reduced-row-echelon-form) is unique.`,
          },
        ],
        related: ['reduced-row-echelon-form', 'gaussian-elimination', 'solvability-check'],
        builtOn: [
          { label: 'Row echelon form', url: ruleUrl('la.row-echelon-form-definition') },
          { label: 'Pivot', url: ruleUrl('la.pivot-definition') },
          { label: 'Computing rank via row reduction (lesson)', url: ruleUrl('lesson.la.matrix.rank.3') },
        ],
      },
    },
    {
      id: 'reduced-row-echelon-form',
      slug: 'reduced-row-echelon-form',
      name: 'How to find the reduced row echelon form of a matrix',
      description: 'From echelon form, scale every pivot to 1 and clear above it; the result is unique.',
      uses: ['row echelon form', 'elementary row operations'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Reduced Row Echelon Form (RREF) | Learn Math Class',
        description: 'Find the reduced row echelon form of a matrix: reach echelon form, scale each pivot to 1, clear the entries above every pivot, check the result. Examples.',
        keywords: ['reduced row echelon form', 'how to find rref', 'rref of a matrix', 'rref steps', 'reduced row echelon form examples'],
      },
      page: {
        h1: 'How to Find the Reduced Row Echelon Form of a Matrix',
        lead:
          'Reduced row echelon form (RREF) is echelon form with two extra conditions: every pivot is $1$, and it is the only nonzero entry in its column. Every matrix has exactly one RREF, so you can compare answers entry by entry.',
        recognize:
          'A question that says "find the RREF", "row-reduce completely" or "reduce to reduced echelon form"; a matrix whose pivot and free columns you need; a test of invertibility (the RREF of a square matrix is $I$ exactly when the matrix is invertible). Test: is a pivot different from $1$, or is there a nonzero entry above a pivot? Then you are not done.',
        recognizeNote: `The two extra conditions are in the lesson section ${link('lesson.la.linear-systems.echelon-form.2', 'Reduced Row Echelon Form')}.`,
        steps: {
          traceLabel: 'On $\\begin{pmatrix} 1 & 2 & -1 & 4 \\\\ 2 & 4 & 1 & 5 \\\\ 1 & 2 & 2 & 1 \\end{pmatrix}$',
          items: [
            {
              title: 'Reduce to echelon form.',
              body: `Follow [row echelon form](!${HUB}/row-echelon-form): pivots and zeros below them.`,
              state: '$R_2 - 2R_1,\\ R_3 - R_1,\\ R_3 - R_2$: $\\begin{pmatrix} 1 & 2 & -1 & 4 \\\\ 0 & 0 & 3 & -3 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Scale every pivot row so its pivot is 1.',
              body: 'Divide the row by its pivot.',
              state: '$\\frac{1}{3}R_2$: $[0\\ 0\\ 1\\ {-1}]$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Clear above each pivot, from the bottom pivot up.',
              body: 'Subtract multiples of the pivot row from the rows above it.',
              state: '$R_1 + R_2$: $[1\\ 2\\ 0\\ 3]$',
              atomic: 'elementary-row-operations',
            },
            {
              title: 'Check both conditions.',
              body: 'Each pivot is $1$ and alone in its column. Columns without a pivot may hold any numbers.',
              state: '$\\begin{pmatrix} 1 & 2 & 0 & 3 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$, pivot columns 1 and 3',
            },
          ],
        },
        examples: [
          {
            title: 'an invertible matrix',
            badge: '2 × 2',
            lines: [
              { math: '$\\begin{pmatrix} 2 & 6 \\\\ 1 & 4 \\end{pmatrix}$, $\\frac{1}{2}R_1$: $[1\\ 3]$', why: 'pivot to 1' },
              { math: '$R_2 - R_1$: $[0\\ 1]$; $R_1 - 3R_2$: $[1\\ 0]$', why: 'clear below, then above' },
              { math: '$\\operatorname{RREF} = I$', why: 'so the matrix is invertible', answer: true },
            ],
          },
          {
            title: 'a wide matrix',
            badge: '2 × 3',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 3 & 5 \\\\ 2 & 7 & 12 \\end{pmatrix}$, $R_2 - 2R_1$: $[0\\ 1\\ 2]$', why: '' },
              { math: '$R_1 - 3R_2$: $\\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 2 \\end{pmatrix}$', why: 'clear above the second pivot', answer: true },
            ],
          },
          {
            title: 'a singular matrix',
            badge: 'rank 2',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$, $R_2 - 4R_1,\\ R_3 - 7R_1$', why: 'rows $[0\\ {-3}\\ {-6}]$, $[0\\ {-6}\\ {-12}]$' },
              { math: '$R_3 - 2R_2$: $[0\\ 0\\ 0]$; $-\\frac{1}{3}R_2$: $[0\\ 1\\ 2]$', why: 'zero row, pivot to 1' },
              { math: '$R_1 - 2R_2$: $\\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$', why: 'not $I$: not invertible', answer: true },
            ],
          },
        ],
        examplesAfter: 'Check a reduced form in the [matrix calculator](!/linear-algebra/calculators/matrix).',
        visual: {
          caption:
            'In reduced form every pivot column is a column of the identity matrix, so each pivot row says how one pivot unknown depends on the free ones and nothing else. Different sequences of row operations can give different echelon forms, but they all end at the same reduced form, because the reduced form records only the relations between the columns, not the path taken.',
        },
        pitfalls: [
          {
            title: 'Leaving a pivot that is not 1',
            wrong: '$\\begin{pmatrix} 1 & 2 & 0 & 3 \\\\ 0 & 0 & 3 & -3 \\end{pmatrix}$ called RREF',
            right: 'divide row 2 by $3$: $[0\\ 0\\ 1\\ {-1}]$',
          },
          {
            title: 'Clearing only below the pivots',
            wrong: '$\\begin{pmatrix} 1 & 3 & 5 \\\\ 0 & 1 & 2 \\end{pmatrix}$ called RREF',
            right: 'clear the $3$ above the second pivot: $\\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 2 \\end{pmatrix}$',
          },
          {
            title: 'Trying to clear a column with no pivot',
            wrong: 'trying to make the $2$ in $[1\\ 2\\ 0\\ 3]$ zero',
            right: 'column 2 has no pivot; its entries stay as they are',
          },
        ],
        related: ['row-echelon-form', 'gauss-jordan-elimination', 'parametric-solutions'],
        builtOn: [
          { label: 'Reduced row echelon form', url: ruleUrl('la.reduced-row-echelon-form-definition') },
          { label: 'Uniqueness of RREF', url: ruleUrl('la.rref-uniqueness') },
          { label: 'Pivot columns and free columns (lesson)', url: ruleUrl('lesson.la.linear-systems.echelon-form.4') },
        ],
      },
    },
    {
      id: 'back-substitution',
      slug: 'back-substitution',
      name: 'How to solve a triangular system by back substitution',
      description: 'Solve the last equation first, then substitute upward one row at a time.',
      uses: ['row echelon form', 'substitution'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a System by Back Substitution | Learn Math Class',
        description: 'Solve an upper triangular or echelon-form system by back substitution: solve the last row, substitute upward, carry free variables as parameters. With examples.',
        keywords: ['back substitution', 'back substitution matrix', 'solve upper triangular system', 'back substitution examples'],
      },
      page: {
        h1: 'How to Solve a Triangular System by Back Substitution',
        lead:
          'In echelon form the last nonzero row has the fewest unknowns. Solve it, put the value into the row above, solve that row, and keep going up until every unknown is found.',
        recognize:
          'An augmented matrix already in echelon form, or an upper triangular system: $x + 2y - z = 3$, $3y + z = 8$, $2z = 4$. Also the last stage of every Gaussian elimination. Test: does each row start further right than the row above it? Then back substitution applies.',
        recognizeNote: `The procedure is the lesson section ${link('lesson.la.linear-systems.gaussian-elimination.5', 'Back Substitution')}.`,
        steps: {
          traceLabel: 'On $\\left[\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 3 & 1 & 8 \\\\ 0 & 0 & 2 & 4 \\end{array}\\right]$',
          items: [
            {
              title: 'Solve the last nonzero row.',
              body: 'Divide the constant by the pivot.',
              state: '$2z = 4 \\Rightarrow z = 2$',
            },
            {
              title: 'Substitute into the row above and solve it.',
              body: 'Move the known terms to the right side; their sign changes.',
              state: '$3y + 2 = 8 \\Rightarrow y = 2$',
            },
            {
              title: 'Repeat up to the first row.',
              body: 'Each row needs only values found below it. A column without a pivot is a free variable: name it $t$ and carry it along.',
              state: '$x + 2(2) - 2 = 3 \\Rightarrow x = 1$',
            },
            {
              title: 'Check in the original equations.',
              body: 'One substitution into each equation catches slips.',
              state: '$1 + 4 - 2 = 3$ ✓, $6 + 2 = 8$ ✓, $4 = 4$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'two unknowns',
            badge: '2 × 2',
            lines: [
              { math: '$3x + 2y = 13,\\ 4y = 8$', why: 'already triangular' },
              { math: '$y = 2$, then $3x = 13 - 4 = 9$', why: 'bottom row first' },
              { math: '$x = 3,\\ y = 2$', why: '', answer: true },
            ],
          },
          {
            title: 'a fraction appears',
            badge: '3 × 3',
            lines: [
              { math: '$\\left[\\begin{array}{ccc|c} 2 & 1 & -1 & 3 \\\\ 0 & 3 & 2 & 1 \\\\ 0 & 0 & 4 & -4 \\end{array}\\right]$', why: '' },
              { math: '$z = -1$; $3y - 2 = 1 \\Rightarrow y = 1$', why: 'two rows from the bottom' },
              { math: '$2x + 1 + 1 = 3 \\Rightarrow x = \\frac{1}{2}$', why: 'top row last', answer: true },
            ],
          },
          {
            title: 'a free variable',
            badge: 'no pivot in column 2',
            lines: [
              { math: '$\\left[\\begin{array}{ccc|c} 1 & 2 & 1 & 5 \\\\ 0 & 0 & 1 & 2 \\end{array}\\right]$', why: 'pivots in columns 1 and 3' },
              { math: '$z = 2$; $y = t$', why: '$y$ is free' },
              { math: '$x = 5 - 2t - 2 = 3 - 2t$', why: 'carry $t$ through', answer: true },
            ],
          },
        ],
        examplesAfter: `To skip this stage entirely, use [Gauss-Jordan elimination](!${HUB}/gauss-jordan-elimination).`,
        visual: {
          caption:
            'An echelon-form system is a chain: the last equation has one unknown, the one above has one new unknown, and so on to the top. Solving from the bottom means every equation you meet has exactly one unknown left once the values below are put in, so each step is a single division.',
        },
        pitfalls: [
          {
            title: 'Reading the last column as the answer',
            wrong: '$(x, y, z) = (3, 8, 4)$ from the matrix above',
            right: 'back-substitute: $(1, 2, 2)$; the first try fails row 1, $3 + 16 - 4 \\neq 3$',
          },
          {
            title: 'Forgetting the sign when moving a term',
            wrong: '$3y + 2 = 8 \\Rightarrow 3y = 10$',
            right: '$3y = 8 - 2 = 6$, so $y = 2$',
          },
          {
            title: 'Not dividing by the pivot',
            wrong: '$2z = 4 \\Rightarrow z = 4$',
            right: '$z = \\frac{4}{2} = 2$',
          },
        ],
        related: ['gaussian-elimination', 'parametric-solutions', 'row-echelon-form'],
        builtOn: [
          { label: 'Row echelon form', url: ruleUrl('la.row-echelon-form-definition') },
          { label: 'Reading solutions from REF (lesson)', url: ruleUrl('lesson.la.linear-systems.echelon-form.5') },
        ],
      },
    },
    {
      id: 'solvability-check',
      slug: 'solvability-check',
      name: 'How to tell how many solutions a system has',
      description: 'One, none or infinitely many: reduce, look for a contradictory row, count the pivots.',
      uses: ['row echelon form', 'rank', 'Rouché–Capelli theorem'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Tell How Many Solutions a Linear System Has | Learn Math Class',
        description: 'Decide if a linear system has one, none or infinitely many solutions: reduce, look for a 0 = d row, compare the rank with the number of unknowns. Examples.',
        keywords: ['how many solutions does a system have', 'consistent or inconsistent system', 'unique solution linear system', 'rouche capelli theorem', 'infinitely many solutions'],
      },
      page: {
        h1: 'How to Tell How Many Solutions a System Has',
        lead:
          'Every linear system has exactly one solution, no solution, or infinitely many. Row-reduce the augmented matrix: a row that reads $0 = d$ with $d \\neq 0$ means none; otherwise the number of pivots decides between one and infinitely many.',
        recognize:
          'Questions such as "is the system consistent?", "does it have a unique solution?", "for which $k$ does it have no solution?", or any system you are about to solve. Typical forms: square systems, systems with a parameter $k$, more equations than unknowns, more unknowns than equations. Test: you need the number of solutions, not necessarily the solutions themselves.',
        recognizeNote: `The conditions are proved in the ${link('lesson.la.linear-systems.solvability', 'solvability lesson')}.`,
        methods: [
          {
            name: 'Reduce and compare ranks',
            tag: 'any system',
            preferred: true,
            formula: '\\operatorname{rank}(A) = \\operatorname{rank}[A \\mid \\mathbf{b}] = r: \\ r = n \\Rightarrow \\text{one}, \\ r < n \\Rightarrow \\infty',
            body: `Works for every shape; this is the ${link('lesson.la.linear-systems.solvability.5', 'Rouché–Capelli theorem')}.`,
          },
          {
            name: 'Determinant test',
            tag: 'square only',
            formula: '\\det(A) \\neq 0 \\;\\Rightarrow\\; \\text{exactly one solution}',
            body: `Quick for a $2 \\times 2$ or $3 \\times 3$ coefficient matrix (${link('la.invertible-matrix-theorem', 'invertible matrix theorem')}). If $\\det(A) = 0$, reduce to tell none from infinitely many.`,
          },
        ],
        steps: {
          traceLabel: 'On $x + y + z = 2,\\ x + 2y + 3z = 5,\\ 2x + 3y + 4z = 8$',
          items: [
            {
              title: 'Write the augmented matrix.',
              body: 'Keep the constants; they decide whether a solution exists.',
              state: '$\\left[\\begin{array}{ccc|c} 1 & 1 & 1 & 2 \\\\ 1 & 2 & 3 & 5 \\\\ 2 & 3 & 4 & 8 \\end{array}\\right]$',
            },
            {
              title: 'Reduce to echelon form.',
              body: `The forward pass of [Gaussian elimination](!${HUB}/gaussian-elimination) is enough; no back substitution needed.`,
              state: '$R_2 - R_1,\\ R_3 - 2R_1,\\ R_3 - R_2$: last row $[0\\ 0\\ 0 \\mid 1]$',
            },
            {
              title: 'Look for a contradictory row.',
              body: 'A row $[0 \\cdots 0 \\mid d]$ with $d \\neq 0$ says $0 = d$: no solution. A full zero row $[0 \\cdots 0 \\mid 0]$ is harmless.',
              state: '$0 = 1$: no solution',
            },
            {
              title: 'Otherwise count the pivots of A.',
              body: 'The count $r$ is the rank. Compare it with the number of unknowns $n$.',
              state: 'here $\\operatorname{rank}(A) = 2 < \\operatorname{rank}[A \\mid \\mathbf{b}] = 3$',
            },
            {
              title: 'State the answer.',
              body: `$r = n$: exactly one solution. $r < n$: infinitely many, with $n - r$ free parameters (${link('la.free-variables-count', 'free variables count')}).`,
              state: 'inconsistent: no solution',
            },
          ],
        },
        examples: [
          {
            title: 'one solution',
            badge: 'rank = n',
            lines: [
              { math: '$x + 2y = 4,\\ 3x - y = 5$', why: '' },
              { math: '$R_2 - 3R_1$: $[0\\ {-7} \\mid {-7}]$', why: 'no contradiction' },
              { math: '$2$ pivots, $2$ unknowns: exactly one ($x = 2,\\ y = 1$)', why: 'rank equals $n$', answer: true },
            ],
          },
          {
            title: 'infinitely many',
            badge: 'rank < n',
            lines: [
              { math: '$x + y + z = 2,\\ x + 2y + 3z = 5,\\ 2x + 3y + 4z = 7$', why: 'last constant now $7$' },
              { math: 'reduction ends in $[0\\ 0\\ 0 \\mid 0]$', why: 'harmless zero row' },
              { math: '$r = 2 < 3$: infinitely many, $1$ free parameter', why: '$n - r = 1$', answer: true },
            ],
          },
          {
            title: 'a parameter',
            badge: 'for which k and h?',
            lines: [
              { math: '$x + y = 1,\\ 2x + ky = h$', why: '' },
              { math: '$R_2 - 2R_1$: $[0\\ \\ k - 2 \\mid h - 2]$', why: 'everything hangs on this row' },
              { math: '$k \\neq 2$: a pivot, so exactly one solution', why: '' },
              { math: '$k = 2,\\ h \\neq 2$: none; $k = 2,\\ h = 2$: infinitely many', why: '$0 = h - 2$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See the three cases as lines and planes in the [linear system solutions visualizer](!/linear-algebra/visual-tools/linear-system-solutions).',
        visual: {
          caption:
            'Two equations in two unknowns are two lines: they cross once, are parallel, or are the same line. Row reduction detects which. Parallel lines reduce to $0 = d$, the same line reduces to a zero row and leaves a free variable, and crossing lines give a pivot in every column. Planes in three dimensions behave the same way.',
        },
        pitfalls: [
          {
            title: 'A zero row read as no solution',
            wrong: '$[0\\ 0\\ 0 \\mid 0]$: "inconsistent"',
            right: 'it says $0 = 0$; only $[0\\ 0\\ 0 \\mid d]$ with $d \\neq 0$ is a contradiction',
          },
          {
            title: 'Counting the pivot in the constant column',
            wrong: '$3$ pivots in $[A \\mid \\mathbf{b}]$ and $3$ unknowns: "unique"',
            right: 'a pivot in the last column is the row $0 = d$: no solution',
          },
          {
            title: 'Zero determinant read as no solution',
            wrong: '$x + y = 1,\\ 2x + 2y = 2$: $\\det = 0$, "no solution"',
            right: '$\\det = 0$ only rules out exactly one; here there are infinitely many',
          },
          {
            title: 'More equations than unknowns means no solution',
            wrong: '$x + y = 3,\\ x - y = 1,\\ 2x + y = 5$: "overdetermined, inconsistent"',
            right: 'reduce first: $x = 2,\\ y = 1$ satisfies all three',
          },
        ],
        related: ['gaussian-elimination', 'homogeneous-systems', 'which-system-method'],
        builtOn: [
          { label: 'Solvability rank criterion', url: ruleUrl('la.solvability-rank-criterion') },
          { label: 'Detecting inconsistency (lesson)', url: ruleUrl('lesson.la.linear-systems.echelon-form.8') },
          { label: 'Rank and linear systems (lesson)', url: ruleUrl('lesson.la.matrix.rank.5') },
        ],
      },
    },
    {
      id: 'homogeneous-systems',
      slug: 'homogeneous-systems',
      name: 'How to solve a homogeneous system',
      description: 'Ax = 0 always has the zero solution; reduce A and write the null space with one vector per free variable.',
      uses: ['reduced row echelon form', 'free variables', 'null space'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a Homogeneous System (Ax = 0) | Learn Math Class',
        description: 'Solve a homogeneous system Ax = 0: reduce A, count free variables, solve the pivot variables, write a basis of the null space, check each vector. With examples.',
        keywords: ['homogeneous system of equations', 'solve ax = 0', 'nontrivial solution', 'null space basis', 'homogeneous system examples'],
      },
      page: {
        h1: 'How to Solve a Homogeneous System',
        lead:
          'A homogeneous system $A\\mathbf{x} = \\mathbf{0}$ is never inconsistent: $\\mathbf{x} = \\mathbf{0}$ always works. The real question is whether there are other solutions, and they exist exactly when the reduced matrix has a free variable.',
        recognize:
          'Every equation has $0$ on the right: $x + 2y - z = 0$, $2x + 4y + z = 0$, $3x + 6y = 0$. Also: "find the null space", "does the system have a nontrivial solution?", "are these vectors independent?". Test: is the constant column all zeros? Then you only need to reduce $A$.',
        recognizeNote: `Homogeneous systems are defined in the ${link('lesson.la.linear-systems.homogeneous', 'homogeneous systems lesson')}.`,
        steps: {
          traceLabel: 'On $x + 2y - z = 0,\\ 2x + 4y + z = 0,\\ 3x + 6y = 0$',
          items: [
            {
              title: 'Reduce A to reduced form.',
              body: `The zero column behind the bar never changes, so leave it out. Use [RREF](!${HUB}/reduced-row-echelon-form).`,
              state: '$\\begin{pmatrix} 1 & 2 & -1 \\\\ 2 & 4 & 1 \\\\ 3 & 6 & 0 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
            },
            {
              title: 'Count the free variables.',
              body: 'None: only the zero solution. One or more: infinitely many solutions. More unknowns than equations always leaves a free variable.',
              state: 'column 2 has no pivot: $y$ is free',
            },
            {
              title: 'Solve each pivot variable in terms of the free ones.',
              body: 'Set each free variable equal to a parameter.',
              state: '$y = s$: $x = -2s,\\ z = 0$',
            },
            {
              title: 'Write the solution as a combination of vectors.',
              body: 'One vector per free variable; together they are a basis of the null space.',
              state: '$\\mathbf{x} = s\\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\end{pmatrix}$',
            },
            {
              title: 'Check each basis vector.',
              body: 'Multiply by $A$; the result must be the zero vector.',
              state: '$A(-2, 1, 0)^T = (0, 0, 0)^T$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'only the zero solution',
            badge: 'square, det ≠ 0',
            lines: [
              { math: '$x + 2y = 0,\\ 3x + 4y = 0$', why: '' },
              { math: '$\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = 4 - 6 = -2 \\neq 0$', why: 'invertible: no free variable' },
              { math: '$x = y = 0$ only', why: 'trivial solution', answer: true },
            ],
          },
          {
            title: 'two free variables',
            badge: '2 equations, 4 unknowns',
            lines: [
              { math: '$x_1 + x_2 + x_3 + x_4 = 0,\\ x_1 + 2x_2 + 3x_3 + 4x_4 = 0$', why: '' },
              { math: '$\\sim \\begin{pmatrix} 1 & 0 & -1 & -2 \\\\ 0 & 1 & 2 & 3 \\end{pmatrix}$', why: '$R_2 - R_1$, then $R_1 - R_2$' },
              { math: '$x_3 = s,\\ x_4 = t$: $x_1 = s + 2t,\\ x_2 = -2s - 3t$', why: '' },
              { math: '$\\mathbf{x} = s(1, -2, 1, 0) + t(2, -3, 0, 1)$', why: 'null space of dimension 2', answer: true },
            ],
          },
          {
            title: 'a singular square matrix',
            badge: 'det = 0',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 2 & 1 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$', why: '$R_3 - R_1 - R_2$, then $R_1 - R_2$' },
              { math: '$x_3 = t$: $x_1 = t,\\ x_2 = -t$', why: '' },
              { math: '$\\mathbf{x} = t(1, -1, 1)$', why: 'a line through the origin', answer: true },
            ],
          },
        ],
        examplesAfter: 'See null spaces next to the other three subspaces in the [four fundamental subspaces visualizer](!/linear-algebra/visual-tools/four-fundamental-subspaces).',
        visual: {
          caption:
            `Each homogeneous equation is a line or plane through the origin, so the origin always lies on all of them. If the equations are independent enough, the origin is the only common point; if not, they share a whole line or plane through the origin, the null space. Its dimension is the number of free variables (${link('la.homogeneous-solution-space-dimension', 'dimension of the solution space')}).`,
        },
        pitfalls: [
          {
            title: 'Saying a homogeneous system has no solution',
            wrong: '"$A$ is invertible, so $A\\mathbf{x} = \\mathbf{0}$ has no solution"',
            right: 'it has exactly one: $\\mathbf{x} = \\mathbf{0}$',
          },
          {
            title: 'A zero row taken as proof of nontrivial solutions',
            wrong: '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 2 & 4 \\end{pmatrix} \\sim \\begin{pmatrix} 1 & 2 \\\\ 0 & -2 \\\\ 0 & 0 \\end{pmatrix}$: "nontrivial"',
            right: 'both columns have pivots; no free variable, only $\\mathbf{x} = \\mathbf{0}$',
          },
          {
            title: 'Dropping the free variable\'s own entry',
            wrong: 'basis vector $(-2, 0, 0)$ for $x = -2s$, $y = s$',
            right: 'the $y$ slot holds $1$: $(-2, 1, 0)$',
          },
        ],
        related: ['parametric-solutions', 'solvability-check', 'reduced-row-echelon-form'],
        builtOn: [
          { label: 'Finding the null space (lesson)', url: ruleUrl('lesson.la.linear-systems.homogeneous.4') },
          { label: 'More unknowns than equations gives a nontrivial solution', url: ruleUrl('la.underdetermined-homogeneous-has-nontrivial') },
          { label: 'Kernel (null space)', url: ruleUrl('la.kernel-definition') },
        ],
      },
    },
    {
      id: 'parametric-solutions',
      slug: 'parametric-solutions',
      name: 'How to write the general solution in parametric vector form',
      description: 'Infinitely many solutions: a particular solution plus one direction vector per free variable.',
      uses: ['reduced row echelon form', 'free variables', 'null space'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Write a General Solution in Parametric Vector Form | Learn Math Class',
        description: 'Write the general solution of a linear system in parametric vector form: reduce to RREF, name the free variables, solve the rest, split into vectors. Examples.',
        keywords: ['parametric vector form', 'general solution linear system', 'parametric solution matrix', 'free variables solution', 'parametric form examples'],
      },
      page: {
        h1: 'How to Write the General Solution in Parametric Vector Form',
        lead:
          'When a consistent system has free variables, it has infinitely many solutions. Write them all at once as one particular solution plus a free multiple of a direction vector for each free variable.',
        recognize:
          'Row reduction ends with fewer pivots than unknowns and no contradictory row: "find the general solution", "describe the solution set", "write the solution in vector form". Typical forms: one equation in three unknowns, two equations in four unknowns, a $3 \\times 3$ system with a zero row. Test: is there a column of $A$ without a pivot? Each such column gives a parameter.',
        recognizeNote: `The form is built in the lesson section ${link('lesson.la.linear-systems.echelon-form.7', 'Parametric Vector Form')}.`,
        steps: {
          traceLabel: 'On $\\left[\\begin{array}{cccc|c} 1 & -3 & 0 & 2 & 4 \\\\ 0 & 0 & 1 & -1 & 5 \\end{array}\\right]$',
          items: [
            {
              title: 'Reduce to reduced form.',
              body: `Use [Gauss-Jordan elimination](!${HUB}/gauss-jordan-elimination); each pivot row then holds one pivot variable.`,
              state: 'already reduced; pivots in columns 1 and 3',
            },
            {
              title: 'Name the free variables.',
              body: 'Every column of $A$ without a pivot is free; give each its own parameter.',
              state: '$x_2 = s,\\ x_4 = t$',
            },
            {
              title: 'Solve each pivot variable.',
              body: 'Move the free terms to the right side; their signs flip.',
              state: '$x_1 = 4 + 3s - 2t,\\ x_3 = 5 + t$',
            },
            {
              title: 'Split the solution into a constant vector and one vector per parameter.',
              body: 'Each free variable has a $1$ in its own slot of its vector and $0$ in the other free slots.',
              state: '$\\mathbf{x} = \\begin{pmatrix} 4 \\\\ 0 \\\\ 5 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} 3 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} -2 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix}$',
            },
            {
              title: 'Check.',
              body: `The constant vector solves $A\\mathbf{x} = \\mathbf{b}$; each direction vector solves $A\\mathbf{v} = \\mathbf{0}$ (see [homogeneous systems](!${HUB}/homogeneous-systems)).`,
              state: 'row 1 on $(3, 1, 0, 0)$: $3 - 3 = 0$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'one equation',
            badge: 'a plane',
            lines: [
              { math: '$x + 2y - z = 4$', why: 'pivot $x$; $y$, $z$ free' },
              { math: '$y = s,\\ z = t$: $x = 4 - 2s + t$', why: '' },
              { math: '$\\mathbf{x} = (4, 0, 0) + s(-2, 1, 0) + t(1, 0, 1)$', why: 'a plane in 3D', answer: true },
            ],
          },
          {
            title: 'two equations, three unknowns',
            badge: 'a line',
            lines: [
              { math: '$x + y + z = 2,\\ x + 2y + 3z = 5$', why: '' },
              { math: '$\\sim \\left[\\begin{array}{ccc|c} 1 & 0 & -1 & -1 \\\\ 0 & 1 & 2 & 3 \\end{array}\\right]$', why: '$R_2 - R_1$, then $R_1 - R_2$' },
              { math: '$z = t$: $x = -1 + t,\\ y = 3 - 2t$', why: '' },
              { math: '$\\mathbf{x} = (-1, 3, 0) + t(1, -2, 1)$', why: 'a line in 3D', answer: true },
            ],
          },
          {
            title: 'from the original system',
            badge: '3 × 4',
            lines: [
              { math: '$\\left[\\begin{array}{cccc|c} 1 & 2 & 1 & 1 & 4 \\\\ 2 & 4 & 3 & 4 & 9 \\\\ 1 & 2 & -1 & -3 & 2 \\end{array}\\right]$', why: '' },
              { math: '$R_2 - 2R_1,\\ R_3 - R_1,\\ R_3 + 2R_2,\\ R_1 - R_2$', why: 'Gauss-Jordan' },
              { math: '$\\left[\\begin{array}{cccc|c} 1 & 2 & 0 & -1 & 3 \\\\ 0 & 0 & 1 & 2 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{array}\\right]$', why: 'free: $x_2 = s$, $x_4 = t$' },
              { math: '$\\mathbf{x} = (3, 0, 1, 0) + s(-2, 1, 0, 0) + t(1, 0, -2, 1)$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            `The constant vector is one point of the solution set. The direction vectors solve the homogeneous system, so adding any multiple of them never changes $A\\mathbf{x}$. The whole solution set is that point shifted by every combination of the directions: a line, a plane, or a higher flat piece that does not pass through the origin unless $\\mathbf{b} = \\mathbf{0}$ (${link('la.solution-structure-decomposition', 'solution structure')}).`,
        },
        pitfalls: [
          {
            title: 'Copying the free column without changing sign',
            wrong: 'direction $(-3, 1, 0, 0)$ from the entry $-3$ in row 1',
            right: '$x_1 = 4 + 3s - \\dots$, so the direction is $(3, 1, 0, 0)$',
          },
          {
            title: 'Dropping the free variable\'s own 1',
            wrong: '$\\mathbf{x} = (4, 0, 5, 0) + s(3, 0, 0, 0) + \\dots$',
            right: '$x_2 = s$ puts a $1$ in slot 2: $s(3, 1, 0, 0)$',
          },
          {
            title: 'Calling a different-looking answer wrong',
            wrong: 'rejecting $(1, -1, 2) + t(1, -2, 1)$ for $\\mathbf{x} = (-1, 3, 0) + t(1, -2, 1)$',
            right: 'it is $t = 2$ of the other form; any particular solution works',
          },
        ],
        related: ['homogeneous-systems', 'reduced-row-echelon-form', 'back-substitution'],
        builtOn: [
          { label: 'Free variables count', url: ruleUrl('la.free-variables-count') },
          { label: 'Solution structure', url: ruleUrl('la.solution-structure-decomposition') },
          { label: 'Parametric vector form (lesson)', url: ruleUrl('lesson.la.linear-systems.homogeneous.5') },
        ],
      },
    },
    {
      id: 'cramers-rule',
      slug: 'cramers-rule',
      name: "How to solve a system with Cramer's rule",
      description: 'A square system with nonzero determinant: each unknown is a ratio of two determinants.',
      uses: ['determinants', "Cramer's rule"],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: "How to Solve a System with Cramer's Rule (2×2 and 3×3) | Learn Math Class",
        description: "Solve a square linear system with Cramer's rule: check det(A) is not 0, replace one column with b, take determinants, divide. 2×2 and 3×3 examples, mistakes.",
        keywords: ["cramer's rule", "how to use cramer's rule", "cramer's rule 2x2", "cramer's rule 3x3", "cramer's rule examples"],
      },
      page: {
        h1: "How to Solve a System with Cramer's Rule",
        lead:
          'For a square system with $\\det(A) \\neq 0$, each unknown is a fraction: the determinant of $A$ with that unknown\'s column replaced by $\\mathbf{b}$, over $\\det(A)$. No row operations at all.',
        recognize:
          "A square system, usually $2 \\times 2$ or $3 \\times 3$: $2x + 3y = 8$, $x - y = -1$. Especially useful when only one unknown is wanted, or when the coefficients contain a letter. Test: is the number of equations equal to the number of unknowns, and is $\\det(A) \\neq 0$? If $\\det(A) = 0$, Cramer's rule does not apply.",
        recognizeNote: `The rule and its proof are in the lesson section ${link('lesson.la.determinants.applications.1', "Cramer's Rule")}.`,
        steps: {
          traceLabel: 'On $2x + 3y = 8,\\ x - y = -1$',
          items: [
            {
              title: 'Write A and b, and compute det(A).',
              body: `Stop if it is $0$; use [elimination](!${HUB}/gaussian-elimination) instead.`,
              state: '$\\det\\begin{pmatrix} 2 & 3 \\\\ 1 & -1 \\end{pmatrix} = -2 - 3 = -5$',
            },
            {
              title: 'Replace column 1 with b and take the determinant.',
              body: 'All other columns stay where they are.',
              state: '$\\det(A_1) = \\det\\begin{pmatrix} 8 & 3 \\\\ -1 & -1 \\end{pmatrix} = -8 + 3 = -5$',
            },
            {
              title: 'Do the same for every other unknown you need.',
              body: 'For $x_i$, replace column $i$.',
              state: '$\\det(A_2) = \\det\\begin{pmatrix} 2 & 8 \\\\ 1 & -1 \\end{pmatrix} = -2 - 8 = -10$',
            },
            {
              title: 'Divide by det(A).',
              body: `${link('la.cramers-rule', "Cramer's rule")}: $x_i = \\det(A_i) / \\det(A)$.`,
              state: '$x = \\frac{-5}{-5} = 1,\\ y = \\frac{-10}{-5} = 2$',
            },
            {
              title: 'Check in the original equations.',
              body: '',
              state: '$2 + 6 = 8$ ✓, $1 - 2 = -1$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a 2 × 2 system',
            badge: 'basic',
            lines: [
              { math: '$4x - y = 10,\\ x + 2y = 7$: $\\det(A) = 8 + 1 = 9$', why: '' },
              { math: '$\\det\\begin{pmatrix} 10 & -1 \\\\ 7 & 2 \\end{pmatrix} = 27,\\ \\det\\begin{pmatrix} 4 & 10 \\\\ 1 & 7 \\end{pmatrix} = 18$', why: 'replace column 1, then column 2' },
              { math: '$x = 3,\\ y = 2$', why: 'divide each by $9$', answer: true },
            ],
          },
          {
            title: 'a negative determinant',
            badge: 'signs',
            lines: [
              { math: '$2x + 5y = 1,\\ 3x + 4y = 5$: $\\det(A) = 8 - 15 = -7$', why: '' },
              { math: '$\\det(A_1) = 4 - 25 = -21,\\ \\det(A_2) = 10 - 3 = 7$', why: '' },
              { math: '$x = 3,\\ y = -1$', why: 'mind the sign of $\\det(A)$', answer: true },
            ],
          },
          {
            title: 'a 3 × 3 system, one unknown',
            badge: 'only z wanted',
            lines: [
              { math: '$x + y + z = 6,\\ 2x - y + z = 3,\\ x + 2y - z = 2$', why: '' },
              { math: '$\\det(A) = \\det\\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix} = 7$', why: 'cofactor expansion' },
              { math: '$\\det(A_3) = \\det\\begin{pmatrix} 1 & 1 & 6 \\\\ 2 & -1 & 3 \\\\ 1 & 2 & 2 \\end{pmatrix} = 21$', why: '$\\mathbf{b}$ in column 3' },
              { math: '$z = \\frac{21}{7} = 3$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'For $3 \\times 3$ determinants, see [cofactor expansion](!/linear-algebra/determinants/methods/cofactor-expansion) or the [rule of Sarrus](!/linear-algebra/determinants/methods/sarrus-rule).',
        visual: {
          caption:
            'Write $\\mathbf{b} = x\\mathbf{a}_1 + y\\mathbf{a}_2$, where $\\mathbf{a}_1, \\mathbf{a}_2$ are the columns of $A$. Swapping $\\mathbf{b}$ into column 1 gives a parallelogram on $\\mathbf{b}$ and $\\mathbf{a}_2$; the $y\\mathbf{a}_2$ part of $\\mathbf{b}$ adds no area, so the area is $x$ times the area of the parallelogram on $\\mathbf{a}_1, \\mathbf{a}_2$. The ratio of the two determinants is $x$. Try it in the [Cramer\'s rule visualizer](!/linear-algebra/visual-tools/cramers-rule).',
        },
        pitfalls: [
          {
            title: 'Replacing a row instead of a column',
            wrong: '$\\det\\begin{pmatrix} 8 & -1 \\\\ 1 & -1 \\end{pmatrix} = -7$, so $x = \\frac{7}{5}$',
            right: 'replace column 1: $\\det\\begin{pmatrix} 8 & 3 \\\\ -1 & -1 \\end{pmatrix} = -5$, $x = 1$',
          },
          {
            title: 'Reversing the 2 × 2 determinant',
            wrong: '$\\det\\begin{pmatrix} 8 & 3 \\\\ -1 & -1 \\end{pmatrix} = 3 \\cdot (-1) - 8 \\cdot (-1) = 5$',
            right: 'main diagonal first: $8 \\cdot (-1) - 3 \\cdot (-1) = -5$',
          },
          {
            title: 'Using the rule when det(A) = 0',
            wrong: '$x + y = 2,\\ 2x + 2y = 4$: "$x = \\frac{0}{0}$, no solution"',
            right: 'the rule does not apply; elimination shows infinitely many solutions',
          },
        ],
        related: ['inverse-matrix-method', 'gaussian-elimination', 'which-system-method'],
        builtOn: [
          { label: "Cramer's rule", url: ruleUrl('la.cramers-rule') },
          { label: '2×2 determinant', url: ruleUrl('la.determinant-2x2') },
          { label: '3×3 determinant', url: ruleUrl('la.determinant-3x3') },
        ],
      },
    },
    {
      id: 'inverse-matrix-method',
      slug: 'inverse-matrix-method',
      name: 'How to solve a system with the inverse matrix',
      description: 'Write the system as Ax = b, find the inverse of A, and multiply: x is the inverse times b.',
      uses: ['matrix inverse', 'matrix multiplication'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Solve a System Using the Inverse Matrix | Learn Math Class',
        description: 'Solve a linear system with the inverse matrix: write Ax = b, check det(A) is not 0, find the inverse, multiply x = (inverse of A)b, check. Examples, mistakes.',
        keywords: ['solve system using inverse matrix', 'inverse matrix method', 'x = a inverse b', 'matrix inverse system of equations', 'inverse matrix method examples'],
      },
      page: {
        h1: 'How to Solve a System with the Inverse Matrix',
        lead:
          'If the coefficient matrix $A$ is invertible, multiply both sides of $A\\mathbf{x} = \\mathbf{b}$ on the left by $A^{-1}$ to get $\\mathbf{x} = A^{-1}\\mathbf{b}$. Once $A^{-1}$ is known, every new right-hand side costs one matrix-vector product.',
        recognize:
          'A square system where the question asks for, or gives, the inverse; or several systems with the same coefficients and different constants: $2x + y = 5$, $5x + 3y = 13$, then $2x + y = 1$, $5x + 3y = 0$. Test: is $A$ square with $\\det(A) \\neq 0$? For a single large system, elimination is less work.',
        recognizeNote: `The inverse is defined in the ${link('lesson.la.matrix.inverse', 'inverse matrix lesson')}; the method is the ${link('la.solve-system-via-inverse', 'solve-via-inverse formula')}.`,
        methods: [
          {
            name: '2 × 2 inverse formula',
            tag: '2 × 2',
            preferred: true,
            formula: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
            body: `Swap the diagonal, negate the off-diagonal, divide by the determinant; see [inverse of a 2×2 matrix](!/linear-algebra/matrix/methods/inverse-2x2).`,
          },
          {
            name: 'Row-reduce the block matrix',
            tag: '3 × 3 and larger',
            formula: '[A \\mid I] \\sim [I \\mid A^{-1}]',
            body: `Gauss-Jordan on $A$ with $I$ alongside (${link('la.inverse-via-row-reduction', 'inverse by row reduction')}); see [inverse by Gauss-Jordan](!/linear-algebra/matrix/methods/inverse-gauss-jordan).`,
          },
        ],
        steps: {
          traceLabel: 'On $2x + y = 5,\\ 5x + 3y = 13$',
          items: [
            {
              title: 'Write the system as Ax = b.',
              body: 'Coefficients in $A$, unknowns in $\\mathbf{x}$, constants in $\\mathbf{b}$.',
              state: '$A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix},\\ \\mathbf{b} = \\begin{pmatrix} 5 \\\\ 13 \\end{pmatrix}$',
            },
            {
              title: 'Check that det(A) is not zero.',
              body: 'If it is zero there is no inverse; use elimination.',
              state: '$\\det(A) = 6 - 5 = 1$',
            },
            {
              title: 'Find the inverse.',
              body: 'The $2 \\times 2$ formula, or row reduction of $[A \\mid I]$ for larger matrices.',
              state: '$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$',
            },
            {
              title: 'Multiply the inverse by b, in that order.',
              body: '$A^{-1}$ on the left, $\\mathbf{b}$ on the right.',
              state: '$\\mathbf{x} = \\begin{pmatrix} 15 - 13 \\\\ -25 + 26 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$',
            },
            {
              title: 'Check in the original equations.',
              body: '',
              state: '$4 + 1 = 5$ ✓, $10 + 3 = 13$ ✓',
            },
          ],
        },
        examples: [
          {
            title: 'a negative determinant',
            badge: '2 × 2',
            lines: [
              { math: '$x + 2y = 4,\\ 3x + 5y = 7$: $\\det(A) = 5 - 6 = -1$', why: '' },
              { math: '$A^{-1} = \\frac{1}{-1}\\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$', why: 'swap, negate, divide' },
              { math: '$\\mathbf{x} = (-20 + 14,\\ 12 - 7) = (-6, 5)$', why: '', answer: true },
            ],
          },
          {
            title: 'a new right-hand side',
            badge: 'reuse the inverse',
            lines: [
              { math: '$2x + y = 1,\\ 5x + 3y = 0$', why: 'same $A$ as above' },
              { math: '$\\mathbf{x} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$', why: 'no new inverse needed' },
              { math: '$x = 3,\\ y = -5$', why: '', answer: true },
            ],
          },
          {
            title: 'a 3 × 3 system',
            badge: 'via [A | I]',
            lines: [
              { math: '$x + z = 3,\\ y + z = 5,\\ x + y = 4$: $\\det(A) = -2$', why: '' },
              { math: '$A^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & -1 & 1 \\\\ -1 & 1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}$', why: 'row-reduce the block matrix' },
              { math: '$\\mathbf{x} = \\frac{1}{2}(3 - 5 + 4,\\ -3 + 5 + 4,\\ 3 + 5 - 4)$', why: 'row times $\\mathbf{b}$' },
              { math: '$x = 1,\\ y = 3,\\ z = 2$', why: '', answer: true },
            ],
          },
        ],
        examplesAfter: 'Compute inverses step by step in the [matrix inverse visualizer](!/linear-algebra/visual-tools/matrix-inverse).',
        visual: {
          caption:
            'The matrix $A$ moves the unknown vector $\\mathbf{x}$ to $\\mathbf{b}$. Its inverse moves every point back to where it came from, so applying $A^{-1}$ to $\\mathbf{b}$ returns the one $\\mathbf{x}$ that $A$ sent there. When $\\det(A) = 0$, $A$ flattens the plane onto a line, different points land on the same spot, and there is no way back.',
        },
        pitfalls: [
          {
            title: 'Multiplying in the wrong order',
            wrong: '$\\mathbf{x} = \\mathbf{b}A^{-1}$',
            right: '$\\mathbf{x} = A^{-1}\\mathbf{b}$; a column vector times a $2 \\times 2$ matrix is not even defined',
          },
          {
            title: 'Forgetting to divide by the determinant',
            wrong: '$A^{-1} = \\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix}$ for $\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$, giving $(6, -5)$',
            right: 'divide by $\\det = -1$: the answer is $(-6, 5)$',
          },
          {
            title: 'No inverse read as no solution',
            wrong: '$x + 2y = 3,\\ 2x + 4y = 6$: "$A$ is not invertible, so no solution"',
            right: 'the method fails, not the system; elimination gives infinitely many',
          },
        ],
        related: ['cramers-rule', 'gauss-jordan-elimination', 'which-system-method'],
        builtOn: [
          { label: 'Solve a system via the inverse', url: ruleUrl('la.solve-system-via-inverse') },
          { label: '2×2 inverse formula', url: ruleUrl('la.inverse-2x2-formula') },
          { label: 'Invertible matrix theorem', url: ruleUrl('la.invertible-matrix-theorem') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-system-method',
      slug: 'which-system-method',
      name: 'Which method should I use to solve a linear system?',
      description: 'A decision tree: what the question asks, a zero right-hand side, then the shape of the system.',
      uses: 'leads to 6 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Method to Solve a Linear System? Decision Tree | Learn Math Class',
        description: "Choose how to solve a linear system: count solutions, homogeneous systems, back substitution, Cramer's rule, the inverse or Gaussian elimination. Decision tree.",
        keywords: ['how to solve a system of linear equations', 'which method linear system', 'gaussian elimination or cramers rule', 'linear systems strategy'],
      },
      page: {
        h1: 'Which Method Should I Use to Solve a Linear System?',
        lead:
          'Gaussian elimination solves every linear system, so it is the default. The other methods are shortcuts for special situations: a question about the number of solutions only, a zero right-hand side, a system that is already triangular, or a small square system with a nonzero determinant.',
        recognize:
          'Look at three things in the problem: what it asks for (the solution, or only how many there are), whether the constants are all zero, and the shape of the coefficient matrix (triangular, small and square, or anything else).',
        tree: {
          rootId: 'ask',
          svgW: 1000,
          nodes: {
            ask: {
              type: 'q',
              text: 'What does the question ask for?',
              children: [
                { label: 'only how many solutions', to: 'countLeaf' },
                { label: 'the solutions', to: 'rhs' },
              ],
            },
            rhs: {
              type: 'q',
              text: 'Are all the constants zero?',
              children: [
                { label: 'yes, Ax = 0', to: 'homLeaf' },
                { label: 'no', to: 'shape' },
              ],
            },
            shape: {
              type: 'q',
              text: 'What does the matrix look like?',
              children: [
                { label: 'already triangular', to: 'backLeaf' },
                { label: 'small, square, det ≠ 0', to: 'cramerLeaf' },
                { label: 'same A, many b', to: 'inverseLeaf' },
                { label: 'anything else', to: 'gaussLeaf' },
              ],
            },
            countLeaf: { type: 'leaf', to: 'solvability-check', short: 'Solvability check' },
            homLeaf: { type: 'leaf', to: 'homogeneous-systems', short: 'Homogeneous system' },
            backLeaf: { type: 'leaf', to: 'back-substitution', short: 'Back substitution' },
            cramerLeaf: { type: 'leaf', to: 'cramers-rule', short: "Cramer's rule" },
            inverseLeaf: { type: 'leaf', to: 'inverse-matrix-method', short: 'Inverse matrix' },
            gaussLeaf: { type: 'leaf', to: 'gaussian-elimination', short: 'Gaussian elimination' },
          },
          branches: [
            {
              condition: 'The question asks only whether a solution exists, whether it is unique, or for which parameter values the system is consistent.',
              answer: `Use the [solvability check](!${HUB}/solvability-check): reduce the augmented matrix and compare ranks (${link('la.solvability-rank-criterion', 'rank criterion')}).`,
            },
            {
              condition: 'Every equation has zero on the right-hand side.',
              answer: `Use the [homogeneous systems](!${HUB}/homogeneous-systems) method: reduce $A$ only and write the null space with one vector per free variable.`,
            },
            {
              condition: 'The system is already in echelon or upper triangular form.',
              answer: `Use [back substitution](!${HUB}/back-substitution) directly, from the last row up.`,
            },
            {
              condition: 'The system is square and small (2 × 2 or 3 × 3), its determinant is not zero, and you want a formula or only one unknown.',
              answer: `Use [Cramer's rule](!${HUB}/cramers-rule): each unknown is a ratio of two determinants.`,
            },
            {
              condition: 'Several systems share the same invertible coefficient matrix, or the inverse is given or asked for.',
              answer: `Use the [inverse matrix method](!${HUB}/inverse-matrix-method): find the inverse once, then multiply it by each right-hand side.`,
            },
            {
              condition: 'Any other system: larger, not square, with a zero determinant, or with no obvious structure.',
              answer: `Use [Gaussian elimination](!${HUB}/gaussian-elimination). If free variables remain, finish with [parametric solutions](!${HUB}/parametric-solutions).`,
            },
          ],
        },
        related: ['gaussian-elimination', 'solvability-check', 'cramers-rule'],
        builtOn: [
          { label: 'Solution methods beyond row reduction (lesson)', url: ruleUrl('lesson.la.linear-systems.10') },
          { label: 'Rank conditions and solution sets (lesson)', url: ruleUrl('lesson.la.linear-systems.11') },
          { label: 'Square systems (lesson)', url: ruleUrl('lesson.la.linear-systems.solvability.6') },
        ],
      },
    },

    // ═══ IV. Applied ════════════════════════════════════════════════════
    {
      id: 'systems-word-problems',
      slug: 'systems-word-problems',
      name: 'How to solve word problems with linear systems',
      description: 'Mixtures, polynomial interpolation, traffic networks and chemical equations: one equation per condition.',
      uses: ['augmented matrix', 'Gaussian elimination', 'free variables'],
      level: 'applied',
      tag: 'Applied',
      meta: '5 setup steps · 4 examples',
      category: 'applied',
      indexed: false,
      seo: {
        title: 'How to Solve Word Problems with Linear Systems | Learn Math Class',
        description: 'Set up and solve linear system word problems: mixtures, a parabola through points, traffic network flow and balancing chemical equations, each worked in full.',
        keywords: ['linear system word problems', 'system of equations applications', 'network flow linear algebra', 'balancing chemical equations linear algebra', 'polynomial interpolation system'],
      },
      page: {
        h1: 'How to Solve Word Problems with Linear Systems',
        lead:
          'Many problems hide a linear system: several unknown amounts, and several conditions that each add them up in a fixed way. Name the unknowns, write one linear equation per condition, and let elimination do the rest.',
        recognize:
          'Trigger words: **how much of each**, **mixture**, **total**, **flow into and out of**, **junction**, **balance the equation**, **passes through the points**. Several unknown quantities are tied together by conditions that are sums of multiples of them, with no products or powers of the unknowns.',
        setup: [
          { label: 'Unknowns', body: 'Give each unknown quantity its own letter, with units: litres of each solution, cars per hour on each street, molecules of each compound, coefficients of a polynomial.' },
          { label: 'Equations', body: 'Write one equation per condition: per total, per junction (inflow equals outflow), per chemical element (atoms on the left equal atoms on the right), per given point.' },
          { label: 'Standard form', body: 'Move every unknown to the left side and every number to the right, in the same order of unknowns in every equation.' },
          { label: 'Matrix', body: 'Write the augmented matrix. Count equations and unknowns: fewer independent equations than unknowns means free variables.' },
          { label: 'Constraints', body: 'Note what the answer must satisfy: amounts not negative, flows within street capacity, whole numbers of molecules.' },
        ],
        handoff: {
          to: 'gaussian-elimination',
          body: `Row-reduce the augmented matrix by Gaussian elimination. If a free variable remains, write the [parametric solution](!${HUB}/parametric-solutions) and use the constraints to pick or limit it.`,
        },
        interpretation:
          'Translate each unknown back into words with its units. With a free parameter, say which values are allowed (for example $t \\geq 0$ for a flow) or pick the one the question wants (the smallest whole numbers in a chemical equation). Put the answer back into the original wording to check every condition.',
        examples: [
          {
            title: 'a mixture',
            badge: '2 unknowns',
            lines: [
              { math: 'mix $10\\%$ and $30\\%$ acid to get $20$ L of $25\\%$ acid', why: '$x$, $y$ litres of each' },
              { math: '$x + y = 20,\\ 0.1x + 0.3y = 0.25 \\cdot 20 = 5$', why: 'volume, then pure acid' },
              { math: '$R_2 - 0.1R_1$: $0.2y = 3$', why: 'eliminate $x$' },
              { math: '$y = 15$ L of $30\\%$, $x = 5$ L of $10\\%$', why: '', answer: true },
            ],
          },
          {
            title: 'a parabola through three points',
            badge: 'interpolation',
            lines: [
              { math: '$y = ax^2 + bx + c$ through $(1, 2), (2, 3), (3, 6)$', why: 'one equation per point' },
              { math: '$a + b + c = 2,\\ 4a + 2b + c = 3,\\ 9a + 3b + c = 6$', why: 'unknowns $a, b, c$' },
              { math: 'subtract in pairs: $3a + b = 1,\\ 5a + b = 3$', why: '$c$ eliminated' },
              { math: '$a = 1,\\ b = -2,\\ c = 3$: $y = x^2 - 2x + 3$', why: 'check $(3, 6)$: $9 - 6 + 3$', answer: true },
            ],
          },
          {
            title: 'traffic around a block',
            badge: 'network flow',
            lines: [
              { math: 'loop $A \\to B \\to C \\to D \\to A$, cars/h: $400$ in at $A$, $300$ out at $B$, $200$ in at $C$, $300$ out at $D$', why: '$x_1, \\dots, x_4$ on the four streets' },
              { math: '$x_1 - x_4 = 400,\\ x_1 - x_2 = 300,\\ x_2 - x_3 = -200,\\ x_3 - x_4 = 300$', why: 'inflow equals outflow at A, B, C, D' },
              { math: 'reduction leaves a zero row; $x_4 = t$ is free', why: 'one condition is redundant' },
              { math: '$x_1 = 400 + t,\\ x_2 = 100 + t,\\ x_3 = 300 + t,\\ x_4 = t,\\ t \\geq 0$', why: 'flows cannot be negative', answer: true },
            ],
          },
          {
            title: 'balancing a chemical equation',
            badge: 'homogeneous',
            lines: [
              { math: '$a\\,\\text{C}_3\\text{H}_8 + b\\,\\text{O}_2 \\to c\\,\\text{CO}_2 + d\\,\\text{H}_2\\text{O}$', why: 'one unknown per compound' },
              { math: 'C: $3a = c$, H: $8a = 2d$, O: $2b = 2c + d$', why: 'atoms balance per element' },
              { math: '$a = t$: $c = 3t,\\ d = 4t,\\ b = 5t$', why: '3 equations, 4 unknowns' },
              { math: '$t = 1$: $\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\to 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$', why: 'smallest whole numbers', answer: true },
            ],
          },
        ],
        examplesAfter: 'Solve your own setup in the [linear systems calculator](!/linear-algebra/calculators/linear-systems).',
        visual: {
          caption:
            'Each condition in the story removes one degree of freedom from the unknowns. With as many independent conditions as unknowns the answer is pinned to one point. A network or a chemical equation usually has one condition fewer than it seems, because the last junction or element is implied by the others, so a free parameter survives and the real-world constraints decide its value. The [linear system solutions visualizer](!/linear-algebra/visual-tools/linear-system-solutions) shows the three possible outcomes.',
        },
        pitfalls: [
          {
            title: 'Mixing percentages and amounts',
            wrong: '$10x + 30y = 25$',
            right: 'equate amounts of pure acid: $0.1x + 0.3y = 0.25 \\cdot 20$',
          },
          {
            title: 'Inflow and outflow on the wrong sides',
            wrong: 'at $A$: $x_1 + x_4 = 400$',
            right: 'in $= 400 + x_4$, out $= x_1$, so $x_1 - x_4 = 400$',
          },
          {
            title: 'Stopping at a fractional chemical answer',
            wrong: 'choosing $d = 1$ and answering $a = \\frac{1}{4},\\ b = \\frac{5}{4},\\ c = \\frac{3}{4}$',
            right: 'multiply through by $4$: $a = 1,\\ b = 5,\\ c = 3,\\ d = 4$',
          },
          {
            title: 'Too few points for the degree',
            wrong: 'a unique parabola through two points',
            right: 'a degree-$n$ polynomial needs $n + 1$ points with different $x$ values',
            note: `Different $x$ values make the coefficient determinant nonzero (${link('la.vandermonde-determinant', 'Vandermonde determinant')}).`,
          },
        ],
        related: ['gaussian-elimination', 'parametric-solutions', 'homogeneous-systems'],
        builtOn: [
          { label: 'A linear system in matrix form', url: ruleUrl('la.linear-system-matrix-form') },
          { label: 'Augmented matrix', url: ruleUrl('la.augmented-matrix-construction') },
          { label: 'What a linear system is (lesson)', url: ruleUrl('lesson.la.linear-systems.1') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Solving and reducing', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
    { id: 'applied', label: 'Word problems', blurb: 'Applied' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
        { value: 'applied', label: 'Applied' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/matrix/methods', label: 'Matrices' },
      { url: '/linear-algebra/determinants/methods', label: 'Determinants' },
      { url: '/linear-algebra/vector-spaces/methods', label: 'Vector spaces' },
    ],
  },
};

export default linearSystemsMethods;
