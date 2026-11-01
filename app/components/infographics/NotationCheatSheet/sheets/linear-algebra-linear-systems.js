// Notation cheat sheet for linear systems (/linear-algebra/linear-systems and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'linear-systems-notation-cheat-sheet',
  source: '/linear-algebra/linear-systems/gaussian-elimination',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Linear System Notation at a Glance',
  lead: 'The marks from the notation cards across the linear-system pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Gaussian elimination', href: '/linear-algebra/linear-systems/gaussian-elimination#notation',
      rows: [
        { tex: '$[A \\mid \\mathbf{b}]$', read: 'the augmented matrix', means: 'Coefficients left of the bar, constants right of it.' },
        { tex: '$R_i + cR_j \\to R_i$', read: 'row i plus c times row j, into row i', means: 'The arrow points at the row being replaced.' },
        { tex: '$A \\sim B$', read: 'A is row-equivalent to B', means: 'Same solutions, different entries: never write $=$.' },
      ],
    },
    {
      page: 'Echelon form', href: '/linear-algebra/linear-systems/echelon-form#notation',
      rows: [
        { tex: 'REF, RREF', read: 'row echelon form; reduced', means: 'REF is not unique; RREF is.' },
        { tex: '$\\boxed{2}$', read: 'a boxed pivot', means: 'Marks the leading nonzero entry of its row.' },
        { tex: '$\\mathbf{p} + t\\mathbf{v}_1 + s\\mathbf{v}_2$', read: 'the general solution', means: 'A particular solution plus one free direction per free column.' },
      ],
    },
    {
      page: 'Homogeneous systems', href: '/linear-algebra/linear-systems/homogeneous#notation',
      rows: [
        { tex: '$A\\mathbf{x} = \\mathbf{0}$', read: 'A x equals the zero vector', means: 'Bold $\\mathbf{0}$: a column of zeros, not the number $0$.' },
        { tex: '$\\mathbf{x} = \\mathbf{0}$', read: 'the trivial solution', means: 'Always a solution of a homogeneous system.' },
        { tex: '$\\operatorname{Nul}(A)$', read: 'the null space of A', means: 'The whole solution set of $A\\mathbf{x} = \\mathbf{0}$.' },
      ],
    },
    {
      page: 'Solvability', href: '/linear-algebra/linear-systems/solvability#notation',
      rows: [
        { tex: 'consistent', read: 'consistent or inconsistent', means: 'At least one solution, or none at all.' },
        { tex: '$\\operatorname{rank}[A \\mid \\mathbf{b}]$', read: 'rank of the augmented matrix', means: 'Equal to $\\operatorname{rank}(A)$ exactly when the system is consistent.' },
        { tex: '$0, \\; 1, \\; \\infty$', read: 'none, one, or infinitely many', means: 'The only possible counts of solutions.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\sim$', text: 'Row equivalence here; on the basis-change page, similar matrices.' },
      { tex: '$\\mathbf{0}$ vs $0$', text: 'The zero vector against the number zero.' },
      { tex: 'the bar in $[A \\mid \\mathbf{b}]$', text: 'A separator, not divides as in number theory.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#basic_matrix_forms,matrix_operations',
  symbolsLabel: 'Matrix symbols table',
  parentHref: '/linear-algebra/linear-systems',
  parentLabel: 'Linear systems',
};

export default sheet;
