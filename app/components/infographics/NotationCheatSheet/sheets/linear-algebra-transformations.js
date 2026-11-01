// Notation cheat sheet for linear transformations (/linear-algebra/transformations and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'transformations-notation-cheat-sheet',
  source: '/linear-algebra/transformations/properties',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Linear Transformation Notation at a Glance',
  lead: 'The marks from the notation cards across the transformation pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Properties', href: '/linear-algebra/transformations/properties#notation',
      rows: [
        { tex: '$T(c\\mathbf{u} + d\\mathbf{v})$', read: 'T of c u plus d v', means: 'Equals $cT(\\mathbf{u}) + dT(\\mathbf{v})$: the test for linearity.' },
        { tex: '$T(\\mathbf{0}_V) = \\mathbf{0}_W$', read: 'zero goes to zero', means: 'The subscript says which space each zero lives in.' },
        { tex: '$\\mathcal{L}(V, W)$', read: 'the space of linear maps', means: 'All linear maps from $V$ to $W$, as a vector space.' },
      ],
    },
    {
      page: 'Image and kernel', href: '/linear-algebra/transformations/image-kernel#notation',
      rows: [
        { tex: '$T: V \\to W$', read: 'T from V to W', means: 'Domain before the arrow, codomain after.' },
        { tex: '$\\ker(T), \\; \\text{Im}(T)$', read: 'kernel and image', means: 'For a matrix: $\\text{Null}(A)$ and $\\text{Col}(A)$.' },
      ],
    },
    {
      page: 'Matrix representation', href: '/linear-algebra/transformations/matrix-representation#notation',
      rows: [
        { tex: '$[T]_{\\mathcal{C} \\leftarrow \\mathcal{B}}$', read: 'the matrix of T, B to C', means: 'Column $j$ is the image of the $j$-th basis vector.' },
        { tex: '$[T(\\mathbf{v})]_{\\mathcal{C}}$', read: 'coordinates of the image', means: 'Equal $[T]\\,[\\mathbf{v}]_{\\mathcal{B}}$: adjacent basis letters cancel.' },
      ],
    },
    {
      page: 'Geometric transformations', href: '/linear-algebra/transformations/geometric#notation',
      rows: [
        { tex: '$R_\\theta, \\; S_k, \\; P_W$', read: 'rotation, scaling, projection', means: 'Letter for the kind of move, subscript for its size.' },
        { tex: '$BA$', read: 'do A first', means: 'The rightmost matrix acts first.' },
      ],
    },
    {
      page: 'Change of basis', href: '/linear-algebra/transformations/basis-change#notation',
      rows: [
        { tex: "$A' = P^{-1}AP$", read: 'A prime', means: 'Same map, another basis; the prime is not a derivative.' },
        { tex: '$T: V \\to V$', read: 'T from V to itself', means: 'One space at both ends, so one basis serves both.' },
        { tex: '$A \\sim B$', read: 'A is similar to B', means: 'Some $P$ gives $B = P^{-1}AP$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\to$ vs $\\mapsto$', text: 'Between spaces, the plain arrow; for a single vector, the barred one.' },
      { tex: "$A'$", text: 'The same map in a new basis, not a derivative or a transpose.' },
      { tex: '$BA$', text: 'Written left to right, applied right to left.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#linear_transformations',
  symbolsLabel: 'Transformation symbols table',
  parentHref: '/linear-algebra/transformations',
  parentLabel: 'Transformations',
};

export default sheet;
