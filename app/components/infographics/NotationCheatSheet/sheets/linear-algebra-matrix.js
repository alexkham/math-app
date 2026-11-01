// Notation cheat sheet for matrices (/linear-algebra/matrix and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'matrix-notation-cheat-sheet',
  source: '/linear-algebra/matrix/operations',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Matrix Notation at a Glance',
  lead: 'The marks from the notation cards across the matrix pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Matrix operations', href: '/linear-algebra/matrix/operations#notation',
      rows: [
        { tex: '$A = (a_{ij})$', read: 'A with entries a i j', means: 'Capital for the matrix, $a_{ij}$ for one entry: row first, column second.' },
        { tex: '$AB$', read: 'A times B', means: 'Product written with no sign; needs $(m \\times n)(n \\times p)$.' },
        { tex: '$A^{T}$', read: 'A transpose', means: 'Rows and columns swapped: $(A^{T})_{ij} = a_{ji}$.' },
      ],
    },
    {
      page: 'Inverse', href: '/linear-algebra/matrix/inverse#notation',
      rows: [
        { tex: '$A^{-1}$', read: 'A inverse', means: 'The matrix with $AA^{-1} = A^{-1}A = I$.' },
        { tex: '$A/B$', read: 'not defined', means: 'No matrix division: $AB^{-1}$ and $B^{-1}A$ differ.' },
        { tex: '$(AB)^{-1} = B^{-1}A^{-1}$', read: 'the order reverses', means: 'Undo the last step first.' },
      ],
    },
    {
      page: 'Rank', href: '/linear-algebra/matrix/rank#notation',
      rows: [
        { tex: '$\\operatorname{rank}(A)$', read: 'the rank of A', means: 'The number of independent columns, which equals the number of independent rows.' },
        { tex: '$\\min(m, n)$', read: 'the cap on the rank', means: '$\\operatorname{rank}(A) \\le \\min(m, n)$; full rank when it reaches it.' },
      ],
    },
    {
      page: 'Trace', href: '/linear-algebra/matrix/trace#notation',
      rows: [
        { tex: '$\\operatorname{tr}(A)$', read: 'the trace of A', means: 'The sum of the diagonal entries $a_{ii}$.' },
        { tex: '$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$', read: 'unchanged by rotating factors', means: 'Rotations only: $\\operatorname{tr}(ABC)$ need not equal $\\operatorname{tr}(BAC)$.' },
        { tex: '$\\langle A, B \\rangle_F$', read: 'the Frobenius inner product', means: 'Equals $\\operatorname{tr}(A^{T}B)$: entries multiplied in pairs, then summed.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$A^{T}$', text: 'A label, not a power: $T$ is not a number.' },
      { tex: '$A^{-1}$', text: 'The inverse matrix, not $\\frac{1}{A}$, which has no meaning.' },
      { tex: '$a_{23}$ vs $a_{32}$', text: 'Row $2$, column $3$ against row $3$, column $2$: different entries.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#matrix_operations,matrix_elements,special_matrices',
  symbolsLabel: 'Matrix symbols table',
  parentHref: '/linear-algebra/matrix',
  parentLabel: 'Matrices',
};

export default sheet;
