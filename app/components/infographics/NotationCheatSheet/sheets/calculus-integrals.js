// Notation cheat sheet for integrals (/calculus/integrals and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'integrals-notation-cheat-sheet',
  source: '/calculus/integrals',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Integral Notation at a Glance',
  lead: 'The marks from the notation cards across the integral pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Integrals', href: '/calculus/integrals#3',
      rows: [
        { tex: '$\\int$', read: 'the integral of', means: 'A stretched S, for sum.' },
        { tex: '$f(x)$', read: 'the integrand', means: 'The function being integrated.' },
        { tex: '$dx$', read: 'd x', means: 'Names the variable of integration; closes the expression.' },
      ],
    },
    {
      page: 'Definite integrals', href: '/calculus/integrals/definite#2',
      rows: [
        { tex: '$\\int_a^b f(x)\\,dx$', read: 'the integral from a to b', means: 'A number: the signed area from $a$ to $b$.' },
        { tex: '$\\int_0^1 t^2\\,dt$', read: 'a dummy variable', means: 'Equals $\\int_0^1 x^2\\,dx$: the letter does not matter.' },
        { tex: '$\\Big[F(x)\\Big]_a^b$', read: 'F of x, evaluated from a to b', means: '$F(b) - F(a)$; also written $F(x)\\,\\big|_a^b$.' },
        { tex: '$\\sum f(x_i^*)\\,\\Delta x$', read: 'the Riemann sum', means: 'Its limit is the definite integral.' },
      ],
    },
    {
      page: 'Indefinite integrals', href: '/calculus/integrals/indefinite#3',
      rows: [
        { tex: '$\\int f(x)\\,dx$', read: 'the indefinite integral of f', means: 'A family of functions, not a number.' },
        { tex: '$F(x) + C$', read: 'F of x plus C', means: 'Every antiderivative; $C$ is any constant.' },
        { tex: "$F'(x) = f(x)$", read: 'F prime equals f', means: 'What makes $F$ an antiderivative of $f$.' },
      ],
    },
    {
      page: 'Improper integrals', href: '/calculus/integrals/improper#notation',
      rows: [
        { tex: '$\\int_a^{\\infty} f(x)\\,dx$', read: 'the integral from a to infinity', means: 'Shorthand for a limit of integrals.' },
        { tex: '$\\lim_{t \\to b^{-}} \\int_a^t$', read: 'limit as t approaches b from below', means: 'How a bad endpoint is handled.' },
        { tex: '$\\int < \\infty$', read: 'the integral converges', means: 'The limit exists and is finite; otherwise it diverges.' },
      ],
    },
    {
      page: 'Integration techniques', href: '/calculus/integrals/techniques#notation',
      rows: [
        { tex: '$u = g(x)$', read: 'let u equal g of x', means: "Substitution: with $du = g'(x)\\,dx$, rewrite the whole integral in $u$." },
        { tex: '$\\int u\\,dv = uv - \\int v\\,du$', read: 'integration by parts', means: 'Trade one integral for another.' },
        { tex: '$x = a\\sin\\theta$', read: 'let x equal a sine theta', means: 'Trigonometric substitution for $\\sqrt{a^2 - x^2}$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\int$ with vs without limits', text: 'With limits, a number; without, a family of functions plus $C$.' },
      { tex: '$dx$', text: 'Part of the integral sign here; a differential on the derivative pages.' },
      { tex: '$\\Delta x$ vs $dx$', text: 'A finite width in a Riemann sum; in the integral, the width has gone to zero.' },
    ],
  },
  symbolsHref: '/math-symbols/calculus#integration',
  symbolsLabel: 'Integral symbols table',
  parentHref: '/calculus/integrals',
  parentLabel: 'Integrals',
};

export default sheet;
