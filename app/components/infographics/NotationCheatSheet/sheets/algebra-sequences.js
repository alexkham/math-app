// Notation cheat sheet for the sequences section (/algebra/sequences and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'sequences-notation-cheat-sheet',
  source: '/algebra/sequences',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Sequence Notation at a Glance',
  lead: 'The marks from the notation cards across the sequence pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Sequences', href: '/algebra/sequences#notation',
      rows: [
        { tex: '$a_n$', read: 'a sub n', means: 'The term in place $n$; the subscript is a position.' },
        { tex: '$a_1, a_2, a_3, \\ldots$', read: 'a one, a two, a three, and so on', means: 'The terms listed in order; the dots need a stated rule.' },
        { tex: '$\\{a_n\\}_{n=1}^{\\infty}$', read: 'the sequence a sub n', means: 'The whole sequence as one object.' },
      ],
    },
    {
      page: 'Arithmetic sequences', href: '/algebra/sequences/arithmetic#notation',
      rows: [
        { tex: '$a_{n+1} = a_n + d$', read: 'next term is this term plus d', means: 'The recurrence; $d$ is the common difference, $a_1$ the start.' },
        { tex: '$\\textstyle\\sum_{k=1}^{n} a_k$', read: 'sum of a sub k, k from 1 to n', means: 'Sigma: the sum $S_n$ of the first $n$ terms.' },
      ],
    },
    {
      page: 'Geometric sequences', href: '/algebra/sequences/geometric#notation',
      rows: [
        { tex: '$r$', read: 'r, the common ratio', means: 'The factor from each term to the next: $a_n = a_1 r^{n-1}$.' },
        { tex: '$S_n$', read: 'S sub n', means: 'Sum of the first $n$ terms; $n$ counts terms.' },
        { tex: '$S$', read: 'S, the infinite sum', means: 'Equals $a_1 / (1 - r)$, only when $|r| < 1$.' },
        { tex: '$G$', read: 'G, the geometric mean', means: '$G = \\sqrt{ab}$, the middle value of $a, G, b$.' },
      ],
    },
    {
      page: 'Fibonacci sequence', href: '/algebra/sequences/fibonacci#notation',
      rows: [
        { tex: '$F_n$', read: 'F sub n', means: 'The $n$-th Fibonacci number, counted from $F_1 = F_2 = 1$.' },
        { tex: '$\\phi, \\; \\psi$', read: 'phi and psi', means: 'The roots of $x^2 = x + 1$, about $1.618$ and $-0.618$.' },
        { tex: '$L_n$', read: 'L sub n', means: 'Lucas numbers: the same rule, started at $1, 3$.' },
      ],
    },
    {
      page: 'Harmonic sequences', href: '/algebra/sequences/harmonic#notation',
      rows: [
        { tex: '$a_n = 1/b_n$', read: 'a sub n is one over b sub n', means: '$b_n$ is the arithmetic sequence underneath.' },
        { tex: '$H_n$', read: 'H sub n', means: 'The harmonic number $1 + \\frac{1}{2} + \\cdots + \\frac{1}{n}$.' },
        { tex: '$H$', read: 'H, the harmonic mean', means: 'For two numbers, $H = \\frac{2ab}{a + b}$.' },
      ],
    },
    {
      page: 'Triangular numbers', href: '/algebra/sequences/triangular-numbers#notation',
      rows: [
        { tex: '$T_n$', read: 'T sub n', means: 'The $n$-th triangular number, $\\frac{n(n+1)}{2}$.' },
        { tex: '$T_n = T_{n-1} + n$', read: 'the one before plus a row of n', means: 'The recurrence, from $T_1 = 1$.' },
        { tex: '$\\binom{n+1}{2}$', read: 'n plus one choose two', means: 'The same number, counted as pairs.' },
      ],
    },
    {
      page: 'Square numbers', href: '/algebra/sequences/square-numbers#notation',
      rows: [
        { tex: '$S_n = n^2$', read: 'S sub n on this page', means: 'The $n$-th square: one term, not a sum.' },
        { tex: '$S_n = S_{n-1} + 2n - 1$', read: 'the one before plus the next odd number', means: 'The recurrence, from $S_1 = 1$.' },
        { tex: '$\\textstyle\\sum_{k=1}^{n} k^2$', read: 'sum of k squared', means: 'Square each term first, then add.' },
      ],
    },
    {
      page: 'Prime numbers', href: '/algebra/sequences/prime-numbers#notation',
      rows: [
        { tex: '$p$', read: 'p, a prime', means: 'The letter promises a prime.' },
        { tex: '$p_1, \\ldots, p_k$', read: 'p sub one to p sub k', means: 'A list of primes, or the primes of one number.' },
        { tex: '$\\pi(n)$', read: 'pi of n', means: 'How many primes are at most $n$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same letter, different job',
    rows: [
      { tex: '$S_n$', text: 'A sum of $n$ terms on the arithmetic and geometric pages; a single square on the square numbers page.' },
      { tex: '$H_n$ vs $H$', text: 'With a subscript, a sum of reciprocals; without one, a mean.' },
      { tex: '$\\pi(n)$ vs $\\pi$', text: 'A count of primes, not the circle constant.' },
      { tex: '$\\{a_n\\}$', text: 'An ordered sequence, not a set: terms keep their order and may repeat.' },
    ],
  },
  symbolsHref: '/math-symbols/algebra#sequences_and_series',
  symbolsLabel: 'Sequence symbols table',
  parentHref: '/algebra/sequences',
  parentLabel: 'Sequences',
};

export default sheet;
