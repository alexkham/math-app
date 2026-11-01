// Notation cheat sheet for eigenvalues and eigenvectors (/linear-algebra/eigen and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'eigen-notation-cheat-sheet',
  source: '/linear-algebra/eigen/characteristic-equation',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Eigenvalue Notation at a Glance',
  lead: 'The marks from the notation cards across the eigenvalue pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Characteristic equation', href: '/linear-algebra/eigen/characteristic-equation#notation',
      rows: [
        { tex: '$A\\mathbf{v} = \\lambda\\mathbf{v}$', read: 'A v equals lambda v', means: '$\\lambda$ is the eigenvalue, $\\mathbf{v} \\neq \\mathbf{0}$ the eigenvector.' },
        { tex: '$\\det(A - \\lambda I) = 0$', read: 'the characteristic equation', means: 'The $I$ is needed: a number cannot be taken from a matrix.' },
        { tex: '$E_{\\lambda}$', read: 'the eigenspace for lambda', means: '$\\operatorname{Null}(A - \\lambda I)$: the eigenvectors plus $\\mathbf{0}$.' },
      ],
    },
    {
      page: 'Diagonalization', href: '/linear-algebra/eigen/diagonalization#notation',
      rows: [
        { tex: '$A = PDP^{-1}$', read: 'P D P inverse', means: 'Eigenvectors as the columns of $P$, eigenvalues on the diagonal of $D$.' },
        { tex: '$P_{:,j} \\leftrightarrow D_{jj}$', read: 'matching order', means: 'Column $j$ of $P$ goes with entry $j$ of $D$.' },
        { tex: 'defective', read: 'too few eigenvectors', means: 'Cannot be diagonalised.' },
      ],
    },
    {
      page: 'Properties', href: '/linear-algebra/eigen/properties#notation',
      rows: [
        { tex: '$f(A)\\mathbf{v} = f(\\lambda)\\mathbf{v}$', read: 'same eigenvector, new eigenvalue', means: 'Powers, inverses and polynomials of $A$ keep $\\mathbf{v}$.' },
        { tex: '$q(A) = c_0 I + \\cdots$', read: 'a polynomial evaluated at A', means: 'The constant term becomes $c_0 I$.' },
        { tex: '$\\mathbf{w}^{T} A = \\lambda \\mathbf{w}^{T}$', read: 'a left eigenvector', means: 'Multiplies from the left; plain eigenvector means the right one.' },
      ],
    },
    {
      page: 'Complex eigenvalues', href: '/linear-algebra/eigen/complex#notation',
      rows: [
        { tex: '$\\lambda = a \\pm bi$', read: 'a conjugate pair', means: 'Both values occur together for a real matrix.' },
        { tex: '$A\\bar{\\mathbf{v}} = \\bar{\\lambda}\\bar{\\mathbf{v}}$', read: 'conjugate eigenpair', means: 'Conjugating both gives another eigenpair.' },
        { tex: '$\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$', read: 'the real canonical block', means: 'Stands for the pair $a \\pm bi$ with real entries.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\pm$', text: 'Both values together for eigenvalues; elsewhere, a choice between two.' },
      { tex: '$\\lambda$ vs $\\lambda I$', text: 'A number against the matrix it becomes inside $A - \\lambda I$.' },
      { tex: '$\\bar{\\mathbf{v}}$', text: 'Every entry conjugated, not a mean.' },
    ],
  },
  symbolsHref: '/math-symbols/linear-algebra#eigenvalues_eigenvectors',
  symbolsLabel: 'Eigenvalue symbols table',
  parentHref: '/linear-algebra/eigen',
  parentLabel: 'Eigenvalues',
};

export default sheet;
