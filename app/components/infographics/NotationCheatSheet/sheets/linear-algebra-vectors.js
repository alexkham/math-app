// Notation cheat sheet for vectors (/linear-algebra/vectors and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'vectors-notation-cheat-sheet',
  source: '/linear-algebra/vectors',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Vector Notation at a Glance',
  lead: 'The marks from the notation cards across the vector pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Vectors', href: '/linear-algebra/vectors#2',
      rows: [
        { tex: '$\\mathbf{v}, \\; \\overset{\\to}{v}$', read: 'vector v', means: 'Bold in print, an arrow by hand: either marks a vector, not a number.' },
        { tex: '$\\overset{\\longrightarrow}{AB}$', read: 'vector A B', means: 'The vector from point $A$ to point $B$.' },
        { tex: '$\\mathbf{i}, \\mathbf{j}, \\mathbf{k}$', read: 'the standard basis', means: 'Unit vectors along the axes; also $\\mathbf{e}_1, \\ldots, \\mathbf{e}_n$.' },
      ],
    },
    {
      page: 'Basic operations', href: '/linear-algebra/vectors/basic-operations#notation',
      rows: [
        { tex: '$(v_1, \\ldots, v_n)$', read: 'v with components v one to v n', means: 'The subscript names a slot: $v_2$ is the second component, a number.' },
        { tex: '$\\mathbb{R}^n$', read: 'R n, real n-space', means: 'All vectors with $n$ real components.' },
      ],
    },
    {
      page: 'Magnitude', href: '/linear-algebra/vectors/magnitude#notation',
      rows: [
        { tex: '$\\|\\mathbf{v}\\|$', read: 'the norm of v', means: 'Length; two bars for a vector, one for a number.' },
        { tex: '$\\|\\mathbf{v}\\|_1, \\; \\|\\mathbf{v}\\|_\\infty$', read: 'one-norm, infinity-norm', means: 'The subscript picks the norm; $\\|\\mathbf{v}\\|_2$ is the usual length.' },
        { tex: '$\\hat{\\mathbf{u}}$', read: 'u hat', means: 'A unit vector: $\\|\\hat{\\mathbf{u}}\\| = 1$.' },
      ],
    },
    {
      page: 'Dot product', href: '/linear-algebra/vectors/dot-product#notation',
      rows: [
        { tex: '$\\mathbf{a} \\cdot \\mathbf{b}$', read: 'a dot b', means: 'A number from two vectors; $\\mathbf{a}\\mathbf{b}$ with no dot means nothing.' },
        { tex: '$\\mathbf{a}^{T}\\mathbf{b}$', read: 'a transpose b', means: 'The same number in matrix form: row times column.' },
      ],
    },
    {
      page: 'Cross product', href: '/linear-algebra/vectors/cross-product#notation',
      rows: [
        { tex: '$\\mathbf{a} \\times \\mathbf{b}$', read: 'a cross b', means: 'A vector from two vectors, in $\\mathbb{R}^3$ only.' },
        { tex: '$\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$', read: 'a dot, b cross c', means: 'The scalar triple product: a signed volume.' },
      ],
    },
    {
      page: 'Vector properties', href: '/linear-algebra/vectors/properties#notation',
      rows: [
        { tex: '$\\mathbf{a} \\parallel \\mathbf{b}$', read: 'a is parallel to b', means: 'One is a scalar multiple of the other: $\\mathbf{a} = c\\mathbf{b}$.' },
        { tex: '$\\mathbf{a} \\perp \\mathbf{b}$', read: 'a is orthogonal to b', means: 'Their dot product is $0$.' },
        { tex: '$\\mathbf{0}$', read: 'the zero vector', means: 'Parallel and orthogonal to every vector.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$|x|$ vs $\\|\\mathbf{v}\\|$', text: 'One pair of bars for a number, two for the length of a vector.' },
      { tex: '$\\cdot$ and $\\times$', text: 'Between numbers, plain multiplication; between vectors, the dot and cross products.' },
      { tex: '$v_2$ vs $\\mathbf{v}_2$', text: 'Plain: the second component of $\\mathbf{v}$; bold: the second vector in a list.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#vector_spaces,basic_matrix_forms',
  symbolsLabel: 'Vector symbols table',
  parentHref: '/linear-algebra/vectors',
  parentLabel: 'Vectors',
};

export default sheet;
