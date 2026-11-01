// Notation cheat sheet for matrix decompositions (/linear-algebra/decompositions and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'decompositions-notation-cheat-sheet',
  source: '/linear-algebra/decompositions/lower-upper',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Decomposition Notation at a Glance',
  lead: 'The marks from the notation cards across the decomposition pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'LU decomposition', href: '/linear-algebra/decompositions/lower-upper#notation',
      rows: [
        { tex: '$A = LU$', read: 'A equals L U', means: 'Lower triangular times upper triangular.' },
        { tex: '$PA = LU$', read: 'permute, then factor', means: '$P$ on the left reorders the rows of $A$.' },
        { tex: '$l_{ij}, \\; i > j$', read: 'entries of L below the diagonal', means: 'The multipliers used in elimination; ones on the diagonal.' },
      ],
    },
    {
      page: 'QR decomposition', href: '/linear-algebra/decompositions/qr#notation',
      rows: [
        { tex: '$A = QR$', read: 'A equals Q R', means: 'Orthonormal columns times upper triangular; $Q_1R_1$ is the thin form.' },
        { tex: '$Q^{T}Q = I$', read: 'but not always Q Q transpose', means: 'For a thin $Q$, $QQ^{T} \\neq I$.' },
        { tex: '$A_{k+1} = R_kQ_k$', read: 'the QR iteration', means: 'Factor, then multiply back in reverse order.' },
      ],
    },
    {
      page: 'Cholesky decomposition', href: '/linear-algebra/decompositions/cholesky#notation',
      rows: [
        { tex: '$A = LL^{T}$', read: 'L times L transpose', means: 'One factor, used twice; $LL \\neq A$.' },
        { tex: '$\\mathbf{x}^{T}A\\mathbf{x} > 0$', read: 'positive definite', means: 'Required for all $\\mathbf{x} \\neq \\mathbf{0}$.' },
        { tex: '$A = LDL^{T}$', read: 'L D L transpose', means: 'The diagonal carried separately; no square roots.' },
      ],
    },
    {
      page: 'Spectral decomposition', href: '/linear-algebra/decompositions/spectral#notation',
      rows: [
        { tex: '$A = QDQ^{T}$', read: 'Q D Q transpose', means: 'For symmetric $A$: $Q^{T}$ stands where $Q^{-1}$ would be.' },
        { tex: '$\\sum \\lambda_i\\mathbf{q}_i\\mathbf{q}_i^{T}$', read: 'a sum of rank-one terms', means: 'The same matrix, written by eigenvalues.' },
      ],
    },
    {
      page: 'Singular value decomposition', href: '/linear-algebra/decompositions/svd#notation',
      rows: [
        { tex: '$A = U\\Sigma V^{T}$', read: 'U Sigma V transpose', means: 'Orthogonal $U$ and $V$, diagonal $\\Sigma$.' },
        { tex: '$\\Sigma$', read: 'capital sigma', means: 'A diagonal matrix here, not a sum.' },
        { tex: '$\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$', read: 'the singular values', means: '$\\sigma_1$ always means the largest.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\Sigma$', text: 'A diagonal matrix in the SVD; elsewhere the summation sign.' },
      { tex: '$Q$', text: 'Always orthonormal columns; $Q^{T}$ then acts as the inverse.' },
      { tex: '$L$', text: 'Lower triangular in both LU and Cholesky, but with ones on the diagonal only in LU.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#matrix_decompositions',
  symbolsLabel: 'Decomposition symbols table',
  parentHref: '/linear-algebra/decompositions',
  parentLabel: 'Decompositions',
};

export default sheet;
