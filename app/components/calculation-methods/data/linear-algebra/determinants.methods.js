// determinants.methods.js (linear algebra)
// Single data source for /linear-algebra/determinants/methods (hub) and
// /linear-algebra/determinants/methods/[view] (leaf pages).
//
// Item states are derived (see app/components/methods/resolveMethodRefs.js):
//   no slug            → atomic card on the hub, anchor '#<id>'
//   slug + page        → live leaf page '/linear-algebra/determinants/methods/<slug>'
//   slug, no page      → planned card on the hub (dimmed, no link)
// `indexed: false` keeps a leaf noindex until it meets the release criteria.

import { ruleUrl } from '../../../methods/ruleAnchors';

// Inline link to a rule / lesson through the anchor map (same tab).
const link = (id, text) => `[${text}](!${ruleUrl(id)})`;

const HUB = '/linear-algebra/determinants/methods';

const determinantsMethods = {
  hubPath: HUB,
  hubLabel: 'determinant methods',
  variant: 'clean',
  filterStickyTop: 70,

  methods: [
    // ═══ I. Atomic ═════════════════════════════════════════════════════
    {
      id: 'determinant-2x2',
      name: 'How to find a 2×2 determinant',
      subtitle: 'The ad − bc formula',
      glyph: 'ad−bc',
      level: 'atomic',
      tag: 'Atomic',
      category: 'atomic',
      when: 'A $2 \\times 2$ matrix inside $\\det$ or between vertical bars: $\\det\\begin{pmatrix} 4 & 3 \\\\ 2 & 5 \\end{pmatrix}$, $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}$, or each minor inside a larger expansion.',
      formula: '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
      fields: {
        steps: [
          '1. Multiply the main diagonal (top left times bottom right): $ad$.',
          '2. Subtract the product of the other diagonal: $ad - bc$.',
        ],
        worked_example: '$\\det\\begin{pmatrix} 4 & 3 \\\\ 2 & 5 \\end{pmatrix} = 4 \\cdot 5 - 3 \\cdot 2 = 14$',
      },
      links: [
        { url: ruleUrl('la.determinant-2x2'), label: '2×2 determinant' },
        { url: ruleUrl('lesson.la.determinants.2'), label: 'The 2×2 formula (lesson)' },
      ],
    },

    // ═══ II. Composite — leaf pages ═════════════════════════════════════
    {
      id: 'sarrus-rule',
      slug: 'sarrus-rule',
      name: 'How to find a 3×3 determinant with the rule of Sarrus',
      description: 'Copy the first two columns, add the three downward diagonal products, subtract the three upward ones.',
      uses: ['rule of Sarrus', '3×3 determinant formula'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use the Rule of Sarrus (3×3 Determinant) | Learn Math Class',
        description: 'Find a 3×3 determinant with the rule of Sarrus: copy the first two columns, add the downward diagonal products, subtract the upward ones. Examples, mistakes.',
        keywords: ['rule of sarrus', '3x3 determinant', 'how to find a 3x3 determinant', 'sarrus method examples'],
      },
      page: {
        h1: 'How to Find a 3×3 Determinant with the Rule of Sarrus',
        lead:
          'Copy the first two columns of a $3 \\times 3$ matrix to its right. The determinant is the sum of the three products running down to the right minus the sum of the three products running up to the right.',
        recognize:
          'A $3 \\times 3$ determinant with no helpful zeros: $\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 10 \\end{pmatrix}$, $\\begin{vmatrix} 3 & -1 & 2 \\\\ 0 & 4 & -2 \\\\ 1 & 5 & -3 \\end{vmatrix}$. Test: is the matrix exactly $3 \\times 3$? The rule fails for $4 \\times 4$ and larger.',
        recognizeNote: `The rule is in the ${link('lesson.la.determinants.3', '3×3 formula lesson section')}; it is a way to remember the ${link('la.determinant-3x3', '3×3 determinant formula')}.`,
        methods: [
          {
            name: 'Rule of Sarrus',
            tag: 'six diagonals',
            preferred: true,
            formula: '\\det(A) = (aei + bfg + cdh) - (ceg + afh + bdi)',
            body: 'Read the six products off the diagonals of the extended array. Fast for numbers.',
          },
          {
            name: 'First-row expansion',
            tag: 'three minors',
            formula: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
            body: `The same six products grouped by row 1. It works for every size as [cofactor expansion](!${HUB}/cofactor-expansion).`,
          },
        ],
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 10 \\end{pmatrix}$',
          items: [
            {
              title: 'Check that the matrix is 3×3.',
              body: 'The rule works for this size only.',
              state: '$3 \\times 3$ ✓',
            },
            {
              title: 'Copy the first two columns to the right.',
              body: 'You get a $3 \\times 5$ array.',
              state: '$\\begin{matrix} 1 & 2 & 3 & 1 & 2 \\\\ 4 & 5 & 6 & 4 & 5 \\\\ 7 & 8 & 10 & 7 & 8 \\end{matrix}$',
            },
            {
              title: 'Add the three downward diagonal products.',
              body: 'Start at the top of columns 1, 2 and 3 and go down to the right.',
              state: '$1 \\cdot 5 \\cdot 10 + 2 \\cdot 6 \\cdot 7 + 3 \\cdot 4 \\cdot 8 = 50 + 84 + 96 = 230$',
            },
            {
              title: 'Add the three upward diagonal products.',
              body: 'Start at the bottom of columns 1, 2 and 3 and go up to the right.',
              state: '$7 \\cdot 5 \\cdot 3 + 8 \\cdot 6 \\cdot 1 + 10 \\cdot 4 \\cdot 2 = 105 + 48 + 80 = 233$',
            },
            {
              title: 'Subtract: downward sum minus upward sum.',
              body: 'Subtract the whole upward sum, not just its first term.',
              state: '$\\det(A) = 230 - 233 = -3$',
            },
          ],
        },
        examples: [
          {
            title: 'a zero entry',
            badge: 'basic',
            lines: [
              { math: '$\\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 1 \\\\ 5 & 2 & 1 \\end{pmatrix}$', why: 'copy columns 1 and 2 alongside' },
              { math: 'down $2 \\cdot 4 \\cdot 1 + 1 \\cdot 1 \\cdot 5 + 3 \\cdot 0 \\cdot 2 = 13$', why: '' },
              { math: 'up $5 \\cdot 4 \\cdot 3 + 2 \\cdot 1 \\cdot 2 + 1 \\cdot 0 \\cdot 1 = 64$', why: 'start from the bottom row' },
              { math: '$\\det = 13 - 64 = -51$', why: '', answer: true },
            ],
          },
          {
            title: 'negative entries',
            badge: 'watch the signs',
            lines: [
              { math: '$\\begin{pmatrix} 3 & -1 & 2 \\\\ 0 & 4 & -2 \\\\ 1 & 5 & -3 \\end{pmatrix}$: down $-36 + 2 + 0 = -34$', why: '$(-1)(-2)(1) = 2$' },
              { math: 'up $8 - 30 + 0 = -22$', why: '$3 \\cdot (-2) \\cdot 5 = -30$' },
              { math: '$\\det = -34 - (-22) = -12$', why: 'subtract the whole upward sum', answer: true },
            ],
          },
          {
            title: 'a singular matrix',
            badge: 'determinant 0',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$: down $45 + 84 + 96 = 225$', why: '' },
              { math: 'up $105 + 48 + 72 = 225$', why: '' },
              { math: '$\\det = 0$: the rows are dependent', why: '$R_3 = 2R_2 - R_1$', answer: true },
            ],
          },
        ],
        examplesAfter: 'See the six diagonals highlighted in the [determinant visualizer](!/linear-algebra/visual-tools/matrix-determinant).',
        visual: {
          caption:
            'A $3 \\times 3$ determinant is a sum of six products, one for each way to pick one entry from every row and every column. Copying the first two columns lines those six choices up as diagonals: the three that keep the columns in cyclic order are added, the three that reverse it are subtracted. A $4 \\times 4$ determinant has $24$ such products, and the diagonals of a copied array catch only $8$ of them.',
        },
        pitfalls: [
          {
            title: 'Using Sarrus on a 4×4 matrix',
            wrong: 'copy three columns, add $4$ downward products, subtract $4$ upward ones',
            right: `that misses $16$ of the $24$ terms; use [cofactor expansion](!${HUB}/cofactor-expansion) or [row reduction](!${HUB}/determinant-row-reduction)`,
          },
          {
            title: 'Adding the upward products',
            wrong: '$\\det(A) = 230 + 233$',
            right: 'subtract them: $230 - 233 = -3$',
          },
          {
            title: 'Losing a sign inside the upward sum',
            wrong: '$-34 - 8 - 30 + 0$',
            right: 'subtract the whole sum: $-34 - (8 - 30 + 0) = -12$',
          },
          {
            title: 'Starting the upward diagonals at the top',
            wrong: 'upward products read from the top row, like the downward ones',
            right: 'upward diagonals start in the bottom row: $7 \\cdot 5 \\cdot 3$, $8 \\cdot 6 \\cdot 1$, $10 \\cdot 4 \\cdot 2$',
          },
        ],
        related: ['cofactor-expansion', 'determinant-row-reduction', 'which-determinant-method'],
        builtOn: [
          { label: '3×3 determinant formula', url: ruleUrl('la.determinant-3x3') },
          { label: 'Permutation formula for the determinant', url: ruleUrl('la.determinant-permutation-formula') },
          { label: 'The 3×3 formula (lesson)', url: ruleUrl('lesson.la.determinants.3') },
        ],
      },
    },
    {
      id: 'cofactor-expansion',
      slug: 'cofactor-expansion',
      name: 'How to find a determinant by cofactor expansion',
      description: 'Expand along the row or column with the most zeros: entry times sign times minor, added up.',
      uses: ['minors', 'cofactors', 'checkerboard signs'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Determinant by Cofactor Expansion (Laplace) | Learn Math Class',
        description: 'Find a determinant by cofactor expansion: pick the row or column with the most zeros, attach checkerboard signs, multiply by minors, add. 3×3 and 4×4 examples.',
        keywords: ['cofactor expansion', 'laplace expansion', 'determinant by minors', 'how to find a 4x4 determinant', 'cofactor expansion examples'],
      },
      page: {
        h1: 'How to Find a Determinant by Cofactor Expansion',
        lead:
          'Choose one row or column. Multiply each entry in it by its checkerboard sign and by the determinant of what is left after deleting its row and column, then add. Zeros in the chosen line cost nothing.',
        recognize:
          'A $3 \\times 3$ or $4 \\times 4$ determinant, especially with a row or column of mostly zeros: $\\det\\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 0 & 4 \\\\ 1 & 5 & 2 \\end{pmatrix}$, a $4 \\times 4$ with three zeros in a row, or a matrix with a variable such as $\\det(A - \\lambda I)$. Test: count the zeros in each row and column and pick the line with the most.',
        recognizeNote: `Minors, cofactors and the expansion are defined in the ${link('lesson.la.determinants.cofactors.3', 'Laplace expansion lesson section')}; the formula is the ${link('la.laplace-row-expansion', 'Laplace row expansion')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 0 & 4 \\\\ 1 & 5 & 2 \\end{pmatrix}$',
          items: [
            {
              title: 'Pick the row or column with the most zeros.',
              body: `Every line gives the same answer; a ${link('la.laplace-column-expansion', 'column expansion')} works exactly like a row expansion.`,
              state: 'column 2 has two zeros: only $a_{32} = 5$ counts',
            },
            {
              title: 'Write the signs for that line.',
              body: 'Position $(i, j)$ has sign $(-1)^{i+j}$: a checkerboard starting with $+$ at the top left.',
              state: 'column 2 signs $-, +, -$; position $(3,2)$ is $-$',
            },
            {
              title: 'Find the minor of each nonzero entry.',
              body: 'Delete the row and the column of the entry and take the determinant of what remains.',
              state: '$M_{32} = \\det\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix} = 8 - 3 = 5$',
              atomic: 'determinant-2x2',
            },
            {
              title: 'Add entry times sign times minor.',
              body: `Sign times minor is the ${link('la.cofactor-definition', 'cofactor')} $C_{ij} = (-1)^{i+j}M_{ij}$.`,
              state: '$\\det(A) = 5 \\cdot (-1) \\cdot 5 = -25$',
            },
          ],
        },
        examples: [
          {
            title: 'a row with one zero',
            badge: '3 × 3',
            lines: [
              { math: '$\\begin{pmatrix} 2 & -1 & 3 \\\\ 1 & 0 & 2 \\\\ 4 & 1 & 1 \\end{pmatrix}$: expand along row 2, signs $-, +, -$', why: 'the zero skips one minor' },
              { math: '$-1 \\cdot \\det\\begin{pmatrix} -1 & 3 \\\\ 1 & 1 \\end{pmatrix} - 2 \\cdot \\det\\begin{pmatrix} 2 & -1 \\\\ 4 & 1 \\end{pmatrix}$', why: '' },
              { math: '$= -1(-4) - 2(6) = 4 - 12 = -8$', why: '', answer: true },
            ],
          },
          {
            title: 'a 4×4 matrix',
            badge: 'one nonzero entry',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 0 & 2 & 0 \\\\ 3 & 1 & 0 & 1 \\\\ 0 & 0 & 4 & 0 \\\\ 2 & 0 & 1 & 5 \\end{pmatrix}$: row 3 has only $a_{33} = 4$', why: 'sign $(-1)^{3+3} = +$' },
              { math: '$\\det = 4 \\cdot \\det\\begin{pmatrix} 1 & 0 & 0 \\\\ 3 & 1 & 1 \\\\ 2 & 0 & 5 \\end{pmatrix}$', why: 'delete row 3 and column 3' },
              { math: '$= 4 \\cdot 1 \\cdot \\det\\begin{pmatrix} 1 & 1 \\\\ 0 & 5 \\end{pmatrix} = 4 \\cdot 5 = 20$', why: 'expand the $3 \\times 3$ along row 1', answer: true },
            ],
          },
          {
            title: 'a variable entry',
            badge: 'characteristic polynomial',
            lines: [
              { math: '$\\det\\begin{pmatrix} 2-\\lambda & 1 & 0 \\\\ 1 & 2-\\lambda & 0 \\\\ 0 & 0 & 3-\\lambda \\end{pmatrix}$: expand along row 3', why: 'two zeros in row 3' },
              { math: '$= (3-\\lambda)\\big[(2-\\lambda)^2 - 1\\big]$', why: 'sign $+$ at $(3,3)$' },
              { math: '$= (3-\\lambda)(\\lambda - 1)(\\lambda - 3)$', why: 'factor $\\lambda^2 - 4\\lambda + 3$', answer: true },
            ],
          },
        ],
        examplesAfter: 'Try other rows and columns in the [determinant visualizer](!/linear-algebra/visual-tools/matrix-determinant); every choice gives the same value.',
        visual: {
          caption:
            'The determinant is linear in each row. Splitting row $i$ into its entries, one at a time, breaks the determinant into $n$ pieces; in each piece one entry stands alone in its row, and its row and column fall away to leave a smaller determinant. The checkerboard sign records how many swaps it takes to move that entry to the top left corner.',
        },
        pitfalls: [
          {
            title: 'Reusing the first-row signs on another line',
            wrong: 'column 2 expanded with signs $+, -, +$',
            right: 'column 2 starts with $-$: signs $-, +, -$',
          },
          {
            title: 'Forgetting the sign altogether',
            wrong: '$\\det(A) = a_{32} M_{32} = 25$',
            right: '$\\det(A) = a_{32} C_{32} = 5 \\cdot (-5) = -25$',
          },
          {
            title: 'Deleting the wrong row or column',
            wrong: '$M_{32}$ found by deleting row 2 and column 3',
            right: '$M_{ij}$: delete row $i$ and column $j$',
          },
          {
            title: 'Expanding along a full row',
            wrong: 'four $3 \\times 3$ minors for a $4 \\times 4$ that has a row with three zeros',
            right: 'expand along that row: one minor instead of four',
          },
        ],
        related: ['sarrus-rule', 'determinant-row-reduction', 'which-determinant-method'],
        builtOn: [
          { label: 'Laplace row expansion', url: ruleUrl('la.laplace-row-expansion') },
          { label: 'Minor', url: ruleUrl('la.minor-definition') },
          { label: 'Cofactor', url: ruleUrl('la.cofactor-definition') },
          { label: 'Recursive definition of the determinant', url: ruleUrl('la.determinant-recursive-definition') },
        ],
      },
    },
    {
      id: 'determinant-row-reduction',
      slug: 'determinant-row-reduction',
      name: 'How to find a determinant by row reduction',
      description: 'Reduce to triangular form, multiply the diagonal, and correct for row swaps and scalings.',
      uses: ['row operations', 'triangular determinant'],
      level: 'composite',
      tag: 'Composite',
      meta: '5 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find a Determinant by Row Reduction | Learn Math Class',
        description: 'Find a determinant by row reduction: reduce to triangular form, track row swaps and scalings, multiply the diagonal, undo the record. 3×3 and 4×4 examples.',
        keywords: ['determinant by row reduction', 'determinant row operations', 'determinant gaussian elimination', 'how to find a 4x4 determinant'],
      },
      page: {
        h1: 'How to Find a Determinant by Row Reduction',
        lead:
          'Row reduce the matrix to upper triangular form and keep a record: a row swap flips the sign, scaling a row scales the determinant, and adding a multiple of one row to another changes nothing. At the end, multiply the diagonal and undo the record.',
        recognize:
          'A $4 \\times 4$ or larger determinant, or a $3 \\times 3$ with no useful zeros: $\\det\\begin{pmatrix} 0 & 2 & 1 \\\\ 1 & 1 & 2 \\\\ 2 & 4 & 3 \\end{pmatrix}$, $\\det\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 5 & 1 & 3 \\\\ 0 & 1 & 3 & 2 \\\\ 1 & 2 & 1 & 4 \\end{pmatrix}$. Test: will elimination reach triangular form in a few steps? For $n \\ge 4$ it beats cofactor expansion.',
        recognizeNote: `The method is in the ${link('lesson.la.determinants.properties.4', 'row reduction lesson section')}; it rests on how ${link('lesson.la.determinants.8', 'row operations affect the determinant')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 0 & 2 & 1 \\\\ 1 & 1 & 2 \\\\ 2 & 4 & 3 \\end{pmatrix}$',
          items: [
            {
              title: 'Get a nonzero pivot, swapping rows if needed.',
              body: `Each ${link('la.determinant-row-swap', 'row swap')} multiplies the determinant by $-1$.`,
              state: 'swap $R_1$ and $R_2$: $\\begin{pmatrix} 1 & 1 & 2 \\\\ 0 & 2 & 1 \\\\ 2 & 4 & 3 \\end{pmatrix}$, one swap',
            },
            {
              title: 'Clear below the pivot by adding multiples of the pivot row.',
              body: `${link('la.determinant-row-addition', 'Row addition')} leaves the determinant unchanged.`,
              state: '$R_3 - 2R_1$: row 3 becomes $(0, 2, -1)$',
            },
            {
              title: 'Repeat down the diagonal until the matrix is triangular.',
              body: `If you factor a number out of a row, record it (${link('la.determinant-row-scaling', 'row scaling')}).`,
              state: '$R_3 - R_2$: $\\begin{pmatrix} 1 & 1 & 2 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & -2 \\end{pmatrix}$',
            },
            {
              title: 'Multiply the diagonal entries.',
              body: `A [triangular determinant](!${HUB}/triangular-determinant) is the product of its diagonal.`,
              state: '$1 \\cdot 2 \\cdot (-2) = -4$',
            },
            {
              title: 'Undo the record.',
              body: 'Multiply by $-1$ for each swap and by every factor you pulled out.',
              state: '$\\det(A) = (-1)^1 \\cdot (-4) = 4$',
            },
          ],
        },
        examples: [
          {
            title: 'factor out a common number',
            badge: 'row scaling',
            lines: [
              { math: '$\\det\\begin{pmatrix} 2 & 4 & 2 \\\\ 1 & 3 & 4 \\\\ 3 & 7 & 9 \\end{pmatrix} = 2\\det\\begin{pmatrix} 1 & 2 & 1 \\\\ 1 & 3 & 4 \\\\ 3 & 7 & 9 \\end{pmatrix}$', why: 'take $2$ out of row 1' },
              { math: '$R_2 - R_1$, $R_3 - 3R_1$, then $R_3 - R_2$: diagonal $1, 1, 3$', why: 'rows $(0,1,3)$, $(0,1,6)$, then $(0,0,3)$' },
              { math: '$\\det = 2 \\cdot 3 = 6$', why: '', answer: true },
            ],
          },
          {
            title: 'a fraction multiplier',
            badge: 'no swaps',
            lines: [
              { math: '$\\det\\begin{pmatrix} 3 & 6 & 9 \\\\ 1 & 4 & 2 \\\\ 2 & 1 & 1 \\end{pmatrix} = 3\\det\\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 4 & 2 \\\\ 2 & 1 & 1 \\end{pmatrix}$', why: 'take $3$ out of row 1' },
              { math: '$R_2 - R_1 = (0, 2, -1)$, $R_3 - 2R_1 = (0, -3, -5)$', why: '' },
              { math: '$R_3 + \\tfrac{3}{2}R_2 = (0, 0, -\\tfrac{13}{2})$', why: 'row addition: no change' },
              { math: '$\\det = 3 \\cdot 1 \\cdot 2 \\cdot \\left(-\\tfrac{13}{2}\\right) = -39$', why: '', answer: true },
            ],
          },
          {
            title: 'a 4×4 matrix',
            badge: 'one swap',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 & 0 & 1 \\\\ 2 & 5 & 1 & 3 \\\\ 0 & 1 & 3 & 2 \\\\ 1 & 2 & 1 & 4 \\end{pmatrix}$: $R_2 - 2R_1$, $R_4 - R_1$', why: 'rows $(0,1,1,1)$ and $(0,0,1,3)$' },
              { math: '$R_3 - R_2 = (0, 0, 2, 1)$; swap $R_3$ and $R_4$', why: 'pivot $1$ avoids fractions; sign flips' },
              { math: '$R_4 - 2R_3 = (0, 0, 0, -5)$: diagonal $1, 1, 1, -5$', why: '' },
              { math: '$\\det = (-1) \\cdot (-5) = 5$', why: 'one swap', answer: true },
            ],
          },
        ],
        examplesAfter: 'Follow the elimination in the [Gaussian elimination visualizer](!/linear-algebra/visual-tools/gauss-elimination).',
        visual: {
          caption:
            'Think of the determinant as the signed volume of the box spanned by the rows. Adding a multiple of one row to another shears the box, which keeps its volume. Scaling a row stretches one edge, and the volume by the same factor. Swapping two rows flips the orientation. A triangular matrix spans a box whose volume is simply the product of the diagonal.',
        },
        pitfalls: [
          {
            title: 'Forgetting a row swap',
            wrong: '$\\det(A) = -4$ after one swap',
            right: 'flip the sign once per swap: $\\det(A) = 4$',
          },
          {
            title: 'Scaling a row without recording it',
            wrong: 'replacing $R_2$ by $2R_2 - 5R_1$ and keeping the result as is',
            right: 'that doubles the determinant; divide by $2$ at the end',
          },
          {
            title: 'Multiplying the diagonal too early',
            wrong: '$\\begin{pmatrix} 1 & 1 & 2 \\\\ 0 & 2 & 1 \\\\ 2 & 4 & 3 \\end{pmatrix}$: $1 \\cdot 2 \\cdot 3 = 6$',
            right: 'clear row 3 first; the triangular diagonal is $1, 2, -2$',
          },
        ],
        related: ['triangular-determinant', 'cofactor-expansion', 'determinant-properties'],
        builtOn: [
          { label: 'Row swap rule', url: ruleUrl('la.determinant-row-swap') },
          { label: 'Row scaling rule', url: ruleUrl('la.determinant-row-scaling') },
          { label: 'Row addition rule', url: ruleUrl('la.determinant-row-addition') },
        ],
      },
    },
    {
      id: 'triangular-determinant',
      slug: 'triangular-determinant',
      name: 'How to find the determinant of a triangular matrix',
      description: 'Multiply the diagonal entries; for block triangular matrices, multiply the block determinants.',
      uses: ['triangular matrices', 'block triangular rule'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find the Determinant of a Triangular Matrix | Learn Math Class',
        description: 'Find the determinant of a triangular or diagonal matrix by multiplying its diagonal entries, and of a block triangular matrix by its blocks. Examples, mistakes.',
        keywords: ['determinant of a triangular matrix', 'upper triangular determinant', 'diagonal matrix determinant', 'block triangular determinant'],
      },
      page: {
        h1: 'How to Find the Determinant of a Triangular Matrix',
        lead:
          'If every entry below the diagonal, or every entry above it, is zero, the determinant is the product of the diagonal entries. The same idea works block by block for block triangular matrices.',
        recognize:
          'A square matrix with a triangle of zeros: upper triangular $\\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & -1 \\end{pmatrix}$, lower triangular, diagonal, or a matrix with a zero block in a corner such as $\\begin{pmatrix} A & B \\\\ 0 & D \\end{pmatrix}$. Test: are all entries on one side of the diagonal zero?',
        recognizeNote: `The rule is in the ${link('lesson.la.determinants.properties.7', 'triangular and diagonal matrices lesson section')}; see the ${link('la.triangular-matrix-determinant', 'triangular determinant formula')}.`,
        steps: {
          traceLabel: 'On $A = \\begin{pmatrix} 2 & 5 & -1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & -1 \\end{pmatrix}$',
          items: [
            {
              title: 'Check the zero pattern.',
              body: `Zeros below the diagonal: upper triangular. Zeros above: lower triangular. A zero block instead of zero entries: use the ${link('la.block-triangular-determinant', 'block triangular rule')}.`,
              state: 'zeros below the diagonal: upper triangular',
            },
            {
              title: 'Read the diagonal.',
              body: 'The entries off the diagonal do not matter.',
              state: '$2$, $3$, $-1$',
            },
            {
              title: 'Multiply the diagonal entries.',
              body: 'For blocks, multiply the determinants of the diagonal blocks.',
              state: '$\\det(A) = 2 \\cdot 3 \\cdot (-1) = -6$',
            },
            {
              title: 'Read off invertibility.',
              body: 'A zero on the diagonal makes the determinant $0$, so the matrix is singular.',
              state: 'no zero on the diagonal: $A$ is invertible',
            },
          ],
        },
        examples: [
          {
            title: 'lower triangular with a zero',
            badge: 'singular',
            lines: [
              { math: '$\\begin{pmatrix} 3 & 0 & 0 & 0 \\\\ 2 & 1 & 0 & 0 \\\\ 5 & 4 & 0 & 0 \\\\ 1 & 7 & 2 & 6 \\end{pmatrix}$', why: 'zeros above the diagonal' },
              { math: '$\\det = 3 \\cdot 1 \\cdot 0 \\cdot 6 = 0$', why: 'one diagonal zero is enough', answer: true },
            ],
          },
          {
            title: 'block triangular',
            badge: '2 × 2 blocks',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 & 5 & 6 \\\\ 3 & 4 & 7 & 8 \\\\ 0 & 0 & 2 & 1 \\\\ 0 & 0 & 1 & 3 \\end{pmatrix}$', why: 'zero block at the bottom left' },
              { math: '$\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\cdot \\det\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix} = (-2)(5)$', why: 'the top right block is ignored' },
              { math: '$\\det = -10$', why: '', answer: true },
            ],
          },
          {
            title: 'after elimination',
            badge: 'finish a reduction',
            lines: [
              { math: '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\xrightarrow{R_2 - 3R_1} \\begin{pmatrix} 1 & 2 \\\\ 0 & -2 \\end{pmatrix}$', why: 'row addition keeps the determinant' },
              { math: '$\\det = 1 \\cdot (-2) = -2$', why: 'matches $4 - 6$', answer: true },
            ],
          },
        ],
        examplesAfter: `Turn any matrix into triangular form with [row reduction](!${HUB}/determinant-row-reduction).`,
        visual: {
          caption:
            'Expand a triangular matrix along its first column: only the top-left entry is nonzero, and what remains is again triangular. Repeating peels off one diagonal entry at a time, so the determinant is their product. Geometrically, a triangular matrix shears and stretches along the axes; shears keep volume, so only the stretches on the diagonal count.',
        },
        pitfalls: [
          {
            title: 'Multiplying the diagonal of a non-triangular matrix',
            wrong: '$\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = 1 \\cdot 4 = 4$',
            right: 'not triangular: $\\det = 4 - 6 = -2$',
          },
          {
            title: 'Adding instead of multiplying',
            wrong: '$\\det(A) = 2 + 3 + (-1) = 4$',
            right: 'that is the trace; the determinant is $2 \\cdot 3 \\cdot (-1) = -6$',
          },
          {
            title: 'Block rule without a zero block',
            wrong: '$\\det\\begin{pmatrix} A & B \\\\ C & D \\end{pmatrix} = \\det(A)\\det(D)$ with $B \\neq 0$ and $C \\neq 0$',
            right: 'the rule needs a zero block: $B = 0$ or $C = 0$',
          },
        ],
        related: ['determinant-row-reduction', 'determinant-properties', 'which-determinant-method'],
        builtOn: [
          { label: 'Triangular matrix determinant', url: ruleUrl('la.triangular-matrix-determinant') },
          { label: 'Diagonal matrix determinant', url: ruleUrl('la.diagonal-matrix-determinant') },
          { label: 'Block triangular determinant', url: ruleUrl('la.block-triangular-determinant') },
        ],
      },
    },
    {
      id: 'determinant-properties',
      slug: 'determinant-properties',
      name: 'How to use determinant properties',
      description: 'Evaluate $\\det(2AB^TA^{-1})$ or the effect of row changes from known determinants, without entries.',
      uses: ['product rule', 'scalar rule', 'transpose and inverse rules'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Use Determinant Properties (det(AB), det(kA)) | Learn Math Class',
        description: 'Use determinant properties: det(AB) = det(A)det(B), det(kA) = kⁿdet(A), transpose, inverse and row operation rules, to evaluate expressions without entries.',
        keywords: ['determinant properties', 'det(ab) = det(a)det(b)', 'determinant of a scalar multiple', 'determinant of inverse', 'determinant rules examples'],
      },
      page: {
        h1: 'How to Use Determinant Properties',
        lead:
          'Many determinant questions give you $\\det(A)$ and ask for the determinant of a product, power, inverse, transpose or multiple, or of a matrix changed by row operations. Split the expression into factors and apply one rule to each.',
        recognize:
          'Known determinants and an expression to evaluate: "$\\det(A) = 5$, $\\det(B) = -2$, find $\\det(2AB^TA^{-1})$", "$\\det(3A)$ for a $3 \\times 3$ matrix", "find the determinant after swapping two rows". Test: you are given determinants rather than entries, or the matrix differs from one you know by row operations.',
        recognizeNote: `All the rules are collected in the ${link('lesson.la.determinants.properties.10', 'summary of determinant properties')}; the key one is the ${link('la.determinant-of-product', 'product rule')} $\\det(AB) = \\det(A)\\det(B)$.`,
        steps: {
          traceLabel: 'On $\\det(2AB^TA^{-1})$, $A$ and $B$ of size $3 \\times 3$, $\\det(A) = 5$, $\\det(B) = -2$',
          items: [
            {
              title: 'Note the size n.',
              body: `A scalar comes out as $k^n$ (${link('la.determinant-of-scalar-multiple', 'scalar multiple rule')}).`,
              state: '$n = 3$: the factor $2$ contributes $2^3 = 8$',
            },
            {
              title: 'Split the product into single factors.',
              body: 'Apply $\\det(XY) = \\det(X)\\det(Y)$ to every product.',
              state: '$\\det(2I)\\,\\det(A)\\,\\det(B^T)\\,\\det(A^{-1})$',
            },
            {
              title: 'Apply one rule to each factor.',
              body: `${link('la.determinant-of-transpose', 'Transpose')}: unchanged. ${link('la.determinant-of-inverse', 'Inverse')}: reciprocal. Power: $\\det(A^k) = \\det(A)^k$.`,
              state: '$8 \\cdot 5 \\cdot (-2) \\cdot \\tfrac{1}{5}$',
            },
            {
              title: 'Multiply.',
              body: 'The factors from $A$ and $A^{-1}$ cancel.',
              state: '$\\det(2AB^TA^{-1}) = -16$',
            },
          ],
        },
        examples: [
          {
            title: 'a scalar multiple',
            badge: 'k to the n',
            lines: [
              { math: '$A$ is $3 \\times 3$ with $\\det(A) = 7$', why: '' },
              { math: '$\\det(3A) = 3^3 \\cdot 7 = 189$', why: 'each of the three rows is tripled', answer: true },
            ],
          },
          {
            title: 'powers, transposes and inverses',
            badge: 'product rule',
            lines: [
              { math: '$\\det(A) = 7$, $\\det(B) = -2$', why: '' },
              { math: '$\\det(A^TB^2) = 7 \\cdot (-2)^2 = 28$', why: 'transpose keeps it, the power squares' },
              { math: '$\\det(A^{-1}B) = \\tfrac{1}{7} \\cdot (-2) = -\\tfrac{2}{7}$', why: '', answer: true },
            ],
          },
          {
            title: 'row operations',
            badge: 'no entries needed',
            lines: [
              { math: '$\\det\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = 7$', why: '' },
              { math: '$\\det\\begin{pmatrix} d & e & f \\\\ a & b & c \\\\ 2g & 2h & 2i \\end{pmatrix} = (-1) \\cdot 2 \\cdot 7 = -14$', why: 'one swap, one row doubled' },
              { math: '$\\det\\begin{pmatrix} a & b & c \\\\ d + 3a & e + 3b & f + 3c \\\\ g & h & i \\end{pmatrix} = 7$', why: 'adding a row multiple changes nothing', answer: true },
            ],
          },
        ],
        examplesAfter: `Each rule is derived in the ${link('lesson.la.determinants.properties', 'determinant properties lesson')}.`,
        visual: {
          caption:
            'The determinant is the factor by which a matrix scales volume. Doing $B$ and then $A$ scales volume by $\\det(B)$ and then by $\\det(A)$, so $\\det(AB) = \\det(A)\\det(B)$. Undoing $A$ must undo its scaling, so $\\det(A^{-1}) = 1/\\det(A)$. Doubling every edge of a cube multiplies its volume by $2^3 = 8$, which is why $\\det(kA) = k^n\\det(A)$. Watch two maps combine in the [AB versus BA tool](!/linear-algebra/visual-tools/matrix-composition-2d).',
        },
        pitfalls: [
          {
            title: 'Pulling a scalar out once',
            wrong: '$\\det(3A) = 3\\det(A)$ for a $3 \\times 3$ matrix $A$',
            right: '$\\det(3A) = 3^3\\det(A) = 27\\det(A)$',
          },
          {
            title: 'A sum rule that does not exist',
            wrong: '$\\det(A + B) = \\det(A) + \\det(B)$',
            right: 'no such rule: for $2 \\times 2$, $\\det(I + I) = \\det(2I) = 4$, not $1 + 1 = 2$',
          },
          {
            title: 'Treating the inverse as a negative',
            wrong: '$\\det(A^{-1}) = -\\det(A)$',
            right: '$\\det(A^{-1}) = \\dfrac{1}{\\det(A)}$',
          },
          {
            title: 'Treating row addition like scaling',
            wrong: '$R_2 + 3R_1$ multiplies the determinant by $3$',
            right: 'adding a multiple of another row leaves it unchanged',
          },
        ],
        related: ['determinant-row-reduction', 'area-volume-determinant', 'which-determinant-method'],
        builtOn: [
          { label: 'Determinant of a product', url: ruleUrl('la.determinant-of-product') },
          { label: 'Determinant of a scalar multiple', url: ruleUrl('la.determinant-of-scalar-multiple') },
          { label: 'Determinant of a power', url: ruleUrl('la.determinant-of-power') },
          { label: 'The multiplicative property (lesson)', url: ruleUrl('lesson.la.determinants.properties.5') },
        ],
      },
    },
    {
      id: 'area-volume-determinant',
      slug: 'area-volume-determinant',
      name: 'How to find area and volume with determinants',
      description: 'Put edge vectors into a matrix; the absolute value of its determinant is the area or volume.',
      uses: ['signed area', 'signed volume', 'scaling factor'],
      level: 'composite',
      tag: 'Composite',
      meta: '4 steps · 3 examples',
      category: 'composite',
      indexed: false,
      seo: {
        title: 'How to Find Area and Volume with Determinants | Learn Math Class',
        description: 'Find areas and volumes with determinants: form edge vectors, put them in a matrix, take the absolute determinant, halve for triangles, sixth for tetrahedra.',
        keywords: ['area with determinants', 'volume with determinants', 'triangle area determinant', 'parallelepiped volume determinant', 'determinant area formula'],
      },
      page: {
        h1: 'How to Find Area and Volume with Determinants',
        lead:
          'Place the edge vectors of a parallelogram or parallelepiped as the columns of a matrix: the absolute value of its determinant is the area or volume. Triangles and tetrahedra take a fixed fraction of it.',
        recognize:
          'Vertices or edge vectors and a request for an area or volume: "area of the triangle with vertices $(1,1)$, $(4,2)$, $(2,5)$", "volume of the parallelepiped spanned by $\\mathbf{u}$, $\\mathbf{v}$, $\\mathbf{w}$", "by what factor does $A$ scale areas?". Test: can you write the shape as edges from one common vertex?',
        recognizeNote: `The geometry is in the ${link('lesson.la.determinants.geometry.1', 'signed area lesson section')} and the ${link('lesson.la.determinants.geometry.7', 'area and volume formulas')}.`,
        steps: {
          traceLabel: 'On the triangle $(1,1)$, $(4,2)$, $(2,5)$',
          items: [
            {
              title: 'Form edge vectors from one vertex.',
              body: 'Subtract the chosen vertex from each of the others.',
              state: '$\\mathbf{u} = (4,2) - (1,1) = (3, 1)$, $\\mathbf{v} = (2,5) - (1,1) = (1, 4)$',
            },
            {
              title: 'Put the edge vectors in a matrix.',
              body: 'As columns or as rows: the determinant is the same.',
              state: '$\\begin{pmatrix} 3 & 1 \\\\ 1 & 4 \\end{pmatrix}$',
            },
            {
              title: 'Compute the determinant.',
              body: `In the plane it is a [2×2 determinant](!${HUB}#determinant-2x2).`,
              state: '$3 \\cdot 4 - 1 \\cdot 1 = 11$',
              atomic: 'determinant-2x2',
            },
            {
              title: 'Take the absolute value and apply the shape factor.',
              body: `Parallelogram or parallelepiped: $1$. ${link('la.triangle-area-via-determinant', 'Triangle')}: $\\tfrac{1}{2}$. ${link('la.tetrahedron-volume-via-determinant', 'Tetrahedron')}: $\\tfrac{1}{6}$.`,
              state: 'area $= \\tfrac{1}{2}\\lvert 11 \\rvert = \\tfrac{11}{2}$',
            },
          ],
        },
        examples: [
          {
            title: 'a parallelogram',
            badge: 'negative determinant',
            lines: [
              { math: '$\\mathbf{u} = (1, 3)$, $\\mathbf{v} = (2, 1)$: $\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix} = 1 - 6 = -5$', why: 'columns $\\mathbf{u}$ and $\\mathbf{v}$' },
              { math: 'area $= \\lvert -5 \\rvert = 5$', why: '$\\mathbf{v}$ is clockwise from $\\mathbf{u}$', answer: true },
            ],
          },
          {
            title: 'a parallelepiped',
            badge: '3D',
            lines: [
              { math: '$\\mathbf{u} = (1,0,2)$, $\\mathbf{v} = (0,3,1)$, $\\mathbf{w} = (2,1,0)$', why: '' },
              { math: '$\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 1 \\\\ 2 & 1 & 0 \\end{pmatrix} = 1(0 - 1) - 0 + 2(0 - 6) = -13$', why: 'vectors as rows' },
              { math: 'volume $= 13$', why: '', answer: true },
            ],
          },
          {
            title: 'a tetrahedron',
            badge: 'one sixth',
            lines: [
              { math: 'vertices $(1,1,1)$, $(2,1,3)$, $(3,2,1)$, $(1,4,2)$', why: '' },
              { math: 'edges from $(1,1,1)$: $(1,0,2)$, $(2,1,0)$, $(0,3,1)$', why: 'subtract the first vertex' },
              { math: '$\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 0 \\\\ 0 & 3 & 1 \\end{pmatrix} = 1(1 - 0) - 0 + 2(6 - 0) = 13$', why: '' },
              { math: 'volume $= \\tfrac{13}{6}$', why: '', answer: true },
            ],
          },
        ],
        visual: {
          caption:
            'A matrix sends the unit square to the parallelogram spanned by its columns, so the area of that parallelogram is the factor by which the matrix scales every area: a shape of area $4$ mapped by a matrix with determinant $-5$ has area $20$. The sign says whether the map flips orientation. Drag the basis vectors in the [linear transformation visualizer](!/linear-algebra/visual-tools/linear-transformation-2d) and watch the area follow the determinant.',
        },
        pitfalls: [
          {
            title: 'Keeping a negative area',
            wrong: 'area $= -5$',
            right: 'area $= \\lvert \\det \\rvert = 5$; the sign only gives the orientation',
          },
          {
            title: 'Using vertices instead of edges',
            wrong: '$\\det\\begin{pmatrix} 4 & 2 \\\\ 2 & 5 \\end{pmatrix}$ for the triangle $(1,1)$, $(4,2)$, $(2,5)$',
            right: 'subtract a common vertex first: edges $(3,1)$ and $(1,4)$',
          },
          {
            title: 'Forgetting the shape factor',
            wrong: 'triangle area $= \\lvert 11 \\rvert = 11$',
            right: 'a triangle is half the parallelogram: $\\tfrac{11}{2}$',
          },
          {
            title: 'Dividing a tetrahedron by 3',
            wrong: 'volume $= \\tfrac{13}{3}$',
            right: 'a tetrahedron is $\\tfrac{1}{6}$ of the parallelepiped: $\\tfrac{13}{6}$',
          },
        ],
        related: ['determinant-properties', 'sarrus-rule', 'which-determinant-method'],
        builtOn: [
          { label: 'Signed area in 2D', url: ruleUrl('la.determinant-signed-area-2d') },
          { label: 'Signed volume in 3D', url: ruleUrl('la.determinant-signed-volume-3d') },
          { label: 'Volume scaling factor', url: ruleUrl('la.determinant-volume-scaling-factor') },
        ],
      },
    },

    // ═══ III. Strategy ══════════════════════════════════════════════════
    {
      id: 'which-determinant-method',
      slug: 'which-determinant-method',
      name: 'Which determinant method should I use?',
      description: 'A decision tree: what you are given, whether the matrix is triangular, then its size and zeros.',
      uses: 'leads to 7 methods',
      level: 'strategy',
      tag: 'Strategy',
      meta: 'decision tree',
      category: 'strategy',
      indexed: false,
      seo: {
        title: 'Which Determinant Method to Use? Decision Tree | Learn Math Class',
        description: 'Choose a determinant method: properties for expressions, edges for area, the diagonal for triangular matrices, then ad − bc, Sarrus, cofactors or row reduction.',
        keywords: ['which determinant method', 'how to compute a determinant', 'determinant strategy', 'determinant decision tree'],
      },
      page: {
        h1: 'Which Determinant Method Should I Use?',
        lead:
          'Look at what the problem gives you before computing anything. Known determinants call for the properties, vertices call for the geometry, and a matrix of numbers is chosen by its shape, its size and its zeros.',
        recognize: 'Any "evaluate the determinant", "find $\\det(A)$" or "find the area or volume" question.',
        tree: {
          rootId: 'given',
          svgW: 1100,
          nodes: {
            given: {
              type: 'q',
              text: 'What are you given?',
              children: [
                { label: 'det(A) and an expression', to: 'propsLeaf' },
                { label: 'vertices or edge vectors', to: 'geoLeaf' },
                { label: 'a matrix of numbers', to: 'shape' },
              ],
            },
            shape: {
              type: 'q',
              text: 'Is it triangular?',
              children: [
                { label: 'yes, or block triangular', to: 'triLeaf' },
                { label: 'no', to: 'size' },
              ],
            },
            size: {
              type: 'q',
              text: 'What size, and where are the zeros?',
              children: [
                { label: '2 × 2', to: 'd2Leaf' },
                { label: '3 × 3', to: 'sarrusLeaf' },
                { label: 'a row or column of zeros', to: 'cofLeaf' },
                { label: '4 × 4 or larger', to: 'rowLeaf' },
              ],
            },
            propsLeaf: { type: 'leaf', to: 'determinant-properties', short: 'Use the properties' },
            geoLeaf: { type: 'leaf', to: 'area-volume-determinant', short: 'Area and volume' },
            triLeaf: { type: 'leaf', to: 'triangular-determinant', short: 'Multiply the diagonal' },
            d2Leaf: { type: 'leaf', to: 'determinant-2x2', short: 'ad − bc' },
            sarrusLeaf: { type: 'leaf', to: 'sarrus-rule', short: 'Rule of Sarrus' },
            cofLeaf: { type: 'leaf', to: 'cofactor-expansion', short: 'Cofactor expansion' },
            rowLeaf: { type: 'leaf', to: 'determinant-row-reduction', short: 'Row reduction' },
          },
          branches: [
            {
              condition: 'You are given determinants such as $\\det(A) = 5$, not entries, and asked for the determinant of a product, power, inverse, transpose or multiple, or of a matrix changed by row operations.',
              answer: `[Use the determinant properties](!${HUB}/determinant-properties): the ${link('la.determinant-of-product', 'product rule')}, $\\det(kA) = k^n\\det(A)$ and $\\det(A^{-1}) = 1/\\det(A)$.`,
            },
            {
              condition: 'You are given vertices or edge vectors and asked for an area, a volume or a scaling factor.',
              answer: `[Find area and volume with determinants](!${HUB}/area-volume-determinant): edges from one vertex, then the absolute value of the determinant.`,
            },
            {
              condition: 'The matrix has only zeros below the diagonal, or only zeros above it, or a zero block in a corner.',
              answer: `[Multiply the diagonal](!${HUB}/triangular-determinant) (${link('la.triangular-matrix-determinant', 'triangular rule')}), or multiply the determinants of the diagonal blocks.`,
            },
            {
              condition: 'The matrix is $2 \\times 2$.',
              answer: `Use the [2×2 formula](!${HUB}#determinant-2x2), $ad - bc$.`,
            },
            {
              condition: 'The matrix is $3 \\times 3$ with no row or column of mostly zeros.',
              answer: `Use the [rule of Sarrus](!${HUB}/sarrus-rule), or expand along the first row.`,
            },
            {
              condition: 'Some row or column is mostly zeros, at any size.',
              answer: `Use [cofactor expansion](!${HUB}/cofactor-expansion) along that row or column (${link('la.laplace-row-expansion', 'Laplace expansion')}).`,
            },
            {
              condition: 'The matrix is $4 \\times 4$ or larger with no useful zeros.',
              answer: `Use [row reduction](!${HUB}/determinant-row-reduction) to triangular form; it takes about $n^3$ steps instead of $n!$.`,
            },
          ],
        },
        related: ['cofactor-expansion', 'determinant-row-reduction', 'sarrus-rule'],
        builtOn: [
          { label: 'How to compute a determinant (lesson summary)', url: ruleUrl('lesson.la.determinants.11') },
          { label: 'Computing small determinants (lesson)', url: ruleUrl('lesson.la.determinants.6') },
          { label: 'Recursive definition of the determinant', url: ruleUrl('la.determinant-recursive-definition') },
        ],
      },
    },
  ],

  categories: [
    { id: 'atomic', label: 'Single-rule moves', blurb: 'Atomic · one rule, applied once' },
    { id: 'composite', label: 'Computing and using determinants', blurb: 'Composite · each opens its own page' },
    { id: 'strategy', label: 'Choosing a method', blurb: 'Strategy' },
  ],

  filters: {
    level: {
      label: 'Level',
      options: [
        { value: 'atomic', label: 'Atomic' },
        { value: 'composite', label: 'Composite' },
        { value: 'strategy', label: 'Strategy' },
      ],
    },
  },

  sidebarLinks: {
    title: 'Other linear algebra methods',
    links: [
      { url: '/linear-algebra/methods', label: 'Linear algebra methods' },
      { url: '/linear-algebra/matrix/methods', label: 'Matrices' },
      { url: '/linear-algebra/linear-systems/methods', label: 'Linear systems' },
      { url: '/linear-algebra/eigen/methods', label: 'Eigenvalues and eigenvectors' },
    ],
  },
};

export default determinantsMethods;
