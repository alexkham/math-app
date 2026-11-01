// Notation cheat sheet for powers, roots and logarithms (/algebra/powers, /algebra/roots, /algebra/logarithms).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'powers-roots-logarithms-notation-cheat-sheet',
  source: '/algebra/powers',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Powers, Roots and Logarithms: Notation at a Glance',
  lead: 'The marks from the notation cards across the powers, roots and logarithms pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Powers', href: '/algebra/powers#2',
      rows: [
        { tex: '$-2^2$', read: 'the negative of two squared', means: 'The power is taken first: $-2^2 = -4$.' },
        { tex: '$(-2)^2$', read: 'negative two, squared', means: 'Brackets put the sign under the power: $(-2)^2 = 4$.' },
        { tex: '$a^{2^3}$', read: 'a to the two cubed', means: 'Stacked powers are read from the top down: $a^{8}$, not $a^{6}$.' },
      ],
    },
    {
      page: 'Natural exponents', href: '/algebra/powers/natural-exponents#notation',
      rows: [
        { tex: '$a^n$', read: 'a to the n', means: '$n$ factors of $a$; read a squared, a cubed for $n = 2, 3$.' },
        { tex: '$-2^4 \\neq (-2)^4$', read: 'minus two-to-the-fourth vs minus-two to the fourth', means: '$-16$ against $16$: the brackets decide what is raised.' },
      ],
    },
    {
      page: 'Negative exponents', href: '/algebra/powers/negative-exponents#notation',
      rows: [
        { tex: '$a^{-n}$', read: 'a to the minus n', means: 'The reciprocal $\\frac{1}{a^n}$; the minus never makes the value negative.' },
        { tex: '$a^{-1}$', read: 'a inverse', means: 'The reciprocal $\\frac{1}{a}$.' },
        { tex: '$\\mathrm{m\\,s^{-2}}$', read: 'metres per second squared', means: 'In units, a negative power means per.' },
      ],
    },
    {
      page: 'Rational exponents', href: '/algebra/powers/rational-exponents#notation',
      rows: [
        { tex: '$a^{m/n}$', read: 'a to the m over n', means: 'The $n$-th root of $a^m$: denominator is the root, numerator the power.' },
        { tex: '$(-8)^{2/6}$', read: 'exponent read in lowest terms', means: 'Reduce first: $(-8)^{1/3} = -2$.' },
        { tex: '@[8^(1/3)]@', read: 'eight to the one-third, in code', means: 'Needs the brackets; @[8^1/3]@ is $\\frac{8}{3}$.' },
      ],
    },
    {
      page: 'Exponential functions', href: '/algebra/powers/exponential-functions#notation',
      rows: [
        { tex: '$e$', read: "e, Euler's number", means: 'The base $e \\approx 2.71828$.' },
        { tex: '$\\exp(x) = e^x$', read: 'exp of x', means: 'The same function, written so the exponent stays on the line.' },
        { tex: '$P(t) = P_0\\, e^{kt}$', read: 'P of t equals P-naught e to the k t', means: '$P_0$ is the start value, $k$ the growth rate.' },
      ],
    },
    {
      page: 'Roots', href: '/algebra/roots#4',
      rows: [
        { tex: '$a^{1/n}$', read: 'a to the one over n', means: 'The $n$-th root of $a$ in exponent form.' },
        { tex: '$\\left(\\sqrt[n]{a}\\right)^m$', read: 'the n-th root of a, raised to the m', means: 'The same value as $a^{m/n}$, root taken first.' },
      ],
    },
    {
      page: 'Root properties', href: '/algebra/roots/properties#notation',
      rows: [
        { tex: '$\\sqrt[n]{a}$', read: 'the n-th root of a', means: 'Index $n$ in the crook; index $2$ is left unwritten.' },
        { tex: '$\\sqrt{9 + 16}$', read: 'the root of the whole quantity', means: 'The bar covers the sum: $\\sqrt{25} = 5$, not $3 + 4$.' },
        { tex: '$\\pm$ · $\\mp$', read: 'plus or minus; minus or plus', means: 'Two values in one line; $\\mp$ takes the opposite sign.' },
      ],
    },
    {
      page: 'Common and natural logarithms', href: '/algebra/logarithms/common-natural#notation',
      rows: [
        { tex: '$\\log_b x$', read: 'log base b of x', means: 'The exponent $b$ needs to reach $x$.' },
        { tex: '$\\log x$', read: 'log of x', means: 'Base $10$ in school and on calculators; often base $e$ in higher maths.' },
        { tex: '$\\ln x$', read: 'natural log of x', means: 'Base $e$: $\\ln x = \\log_e x$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$a^{-1}$', text: 'For a number, the reciprocal; for a function, $f^{-1}$ is the inverse function, not $\\frac{1}{f}$.' },
      { tex: '$a^{1/n}$ vs $\\sqrt[n]{a}$', text: 'One value, two spellings: the exponent form and the radical form.' },
      { tex: '$\\log x$', text: 'Base $10$ or base $e$ depending on who is writing; $\\ln$ is always base $e$.' },
    ],
  },
  symbolsHref: '/math-symbols/algebra#exponents_and_powers,roots_and_radicals,logarithms',
  symbolsLabel: 'Powers, roots and logarithm symbols',
  parentHref: '/algebra',
  parentLabel: 'Algebra',
};

export default sheet;
