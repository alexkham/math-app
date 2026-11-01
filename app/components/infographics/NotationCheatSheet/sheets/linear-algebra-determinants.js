// Notation cheat sheet for determinants (/linear-algebra/determinants and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'determinants-notation-cheat-sheet',
  source: '/linear-algebra/determinants/properties',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Determinant Notation at a Glance',
  lead: 'The marks from the notation cards across the determinant pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Properties', href: '/linear-algebra/determinants/properties#notation',
      rows: [
        { tex: '$\\det(A)$', read: 'the determinant of A', means: 'A number from a square matrix; brackets optional, as in $\\det A$.' },
        { tex: '$|A|$', read: 'determinant of A, with bars', means: 'Bars around the name, or bars replacing the brackets of the array.' },
        { tex: '$\\Delta$', read: 'delta', means: 'The school name for the determinant of a system.' },
      ],
    },
    {
      page: 'Cofactors', href: '/linear-algebra/determinants/cofactors#notation',
      rows: [
        { tex: '$M_{ij}, \\; C_{ij}$', read: 'minor and cofactor at i, j', means: 'Numbers, despite the capitals: $C_{ij} = (-1)^{i+j}M_{ij}$.' },
        { tex: '$A^{(i,j)}$', read: 'A with row i and column j removed', means: 'The smaller matrix whose determinant is $M_{ij}$.' },
        { tex: '$\\operatorname{adj}(A) = C^{T}$', read: 'the adjugate of A', means: 'The transpose of the cofactor matrix, not the cofactor matrix itself.' },
      ],
    },
    {
      page: 'Geometry', href: '/linear-algebra/determinants/geometry#notation',
      rows: [
        { tex: '$\\det(A) < 0$', read: 'a negative determinant', means: 'The map flips orientation.' },
        { tex: '$|\\det(A)|$', read: 'absolute value of the determinant', means: 'The factor by which areas or volumes scale.' },
        { tex: '$\\det J_T$', read: 'the Jacobian determinant', means: 'The local scale factor of a non-linear map.' },
      ],
    },
    {
      page: 'Applications', href: '/linear-algebra/determinants/applications#notation',
      rows: [
        { tex: '$x_i = \\frac{\\det(A_i)}{\\det(A)}$', read: "Cramer's rule", means: '$A_i$ is $A$ with column $i$ replaced by $\\mathbf{b}$.' },
        { tex: '$W(f_1, \\dots, f_n)(x)$', read: 'the Wronskian', means: 'A determinant of functions and their derivatives, at $x$.' },
        { tex: '$\\prod_{i < j} (x_j - x_i)$', read: 'the Vandermonde product', means: 'One factor for every pair with $i$ below $j$.' },
        { tex: '$D_n$', read: 'D sub n', means: 'Determinant of the $n \\times n$ matrix in a recurrence.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$|A|$ vs $|x|$', text: 'Bars around a matrix give its determinant, which can be negative; around a number, its absolute value.' },
      { tex: '$||A||$', text: 'Double bars are a matrix norm, not the absolute value of $\\det A$; that is $|\\det(A)|$.' },
      { tex: '$A_i$', text: 'In Cramer’s rule a whole matrix, not a row, column or entry.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#matrix_operations',
  symbolsLabel: 'Matrix operation symbols table',
  parentHref: '/linear-algebra/determinants',
  parentLabel: 'Determinants',
};

export default sheet;
