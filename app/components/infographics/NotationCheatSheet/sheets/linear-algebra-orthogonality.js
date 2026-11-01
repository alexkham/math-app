// Notation cheat sheet for orthogonality (/linear-algebra/orthogonality and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'orthogonality-notation-cheat-sheet',
  source: '/linear-algebra/orthogonality/inner-product',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Orthogonality Notation at a Glance',
  lead: 'The marks from the notation cards across the orthogonality pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Inner product', href: '/linear-algebra/orthogonality/inner-product#notation',
      rows: [
        { tex: '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle$', read: 'the inner product of u and v', means: 'Two vectors in, one number out.' },
        { tex: '$\\langle \\cdot, \\cdot \\rangle$', read: 'the inner product as a function', means: 'The dots are empty slots.' },
        { tex: '$\\mathbf{u} \\perp \\mathbf{v}, \\; W^{\\perp}$', read: 'u orthogonal to v; W perp', means: '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$; $W^{\\perp}$ holds all vectors orthogonal to $W$.' },
      ],
    },
    {
      page: 'Orthogonal sets', href: '/linear-algebra/orthogonality/orthogonal-sets#notation',
      rows: [
        { tex: '$\\delta_{ij}$', read: 'the Kronecker delta', means: '$1$ when $i = j$, $0$ otherwise.' },
        { tex: '$\\hat{\\mathbf{u}} = \\mathbf{v} / \\|\\mathbf{v}\\|$', read: 'u hat', means: 'The unit vector in the direction of $\\mathbf{v}$.' },
        { tex: '$Q^{T}Q = I$', read: 'Q is orthogonal', means: 'So $Q^{-1} = Q^{T}$.' },
      ],
    },
    {
      page: 'Projections', href: '/linear-algebra/orthogonality/projections#notation',
      rows: [
        { tex: '$\\text{proj}_{W}\\mathbf{b}$', read: 'projection of b onto W', means: 'The subscript is the target.' },
        { tex: '$\\hat{\\mathbf{b}}$', read: 'b hat', means: 'The closest point to $\\mathbf{b}$ in $W$.' },
        { tex: '$P^2 = P$', read: 'the projection matrix', means: 'Projecting twice changes nothing.' },
      ],
    },
    {
      page: 'Gram–Schmidt', href: '/linear-algebra/orthogonality/gram-schmidt#notation',
      rows: [
        { tex: '$\\mathbf{v}_j \\to \\mathbf{u}_j \\to \\mathbf{e}_j$', read: 'input, orthogonalised, normalised', means: 'Three letters for three stages of one vector.' },
        { tex: '$\\sum_{i=1}^{j-1} \\text{proj}_{\\mathbf{u}_i}$', read: 'all projections so far', means: 'Subtracted from $\\mathbf{v}_j$; the sum grows with $j$.' },
        { tex: '$A = QR$', read: 'Q R factorisation', means: 'Orthonormal $Q$, upper-triangular $R$.' },
      ],
    },
    {
      page: 'Least squares', href: '/linear-algebra/orthogonality/least-squares#notation',
      rows: [
        { tex: '$\\hat{\\mathbf{x}}$', read: 'x hat', means: 'The best fit: minimises $\\|A\\mathbf{x} - \\mathbf{b}\\|$.' },
        { tex: '$A^{T}A\\hat{\\mathbf{x}} = A^{T}\\mathbf{b}$', read: 'the normal equations', means: 'Normal means perpendicular: the residual is orthogonal to the columns.' },
        { tex: '$A^{+}$', read: 'A plus, the pseudoinverse', means: 'Stands in for an inverse that does not exist: $\\hat{\\mathbf{x}} = A^{+}\\mathbf{b}$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: 'the hat', text: '$\\hat{\\mathbf{u}}$ is a unit vector; $\\hat{\\mathbf{b}}$ and $\\hat{\\mathbf{x}}$ are best approximations.' },
      { tex: '$P$', text: 'Projection here; elsewhere, change of basis or a permutation.' },
      { tex: '$\\perp$', text: 'Between vectors, orthogonal; as a superscript, the orthogonal complement.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#vector_spaces',
  symbolsLabel: 'Inner product symbols table',
  parentHref: '/linear-algebra/orthogonality',
  parentLabel: 'Orthogonality',
};

export default sheet;
