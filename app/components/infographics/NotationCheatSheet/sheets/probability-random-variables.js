// Notation cheat sheet for random variables (random variables, probability functions, PDF, PMF, CDF, indicators).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'probability-random-variables-notation-cheat-sheet',
  source: '/probability/random-variables',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Random Variable Notation at a Glance',
  lead: 'The marks from the notation cards across the random-variable pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Random variables', href: '/probability/random-variables#notation',
      rows: [
        { tex: '$X : \\Omega \\to \\mathbb{R}$', read: 'X maps outcomes to numbers', means: 'A random variable is a function, not a variable.' },
        { tex: '$\\{X \\le x\\}$', read: 'the event that X is at most x', means: 'Braces turn a condition into an event.' },
        { tex: '$X \\sim \\text{Bin}(n, p)$', read: 'X is distributed as', means: 'Names the distribution and its parameters.' },
      ],
    },
    {
      page: 'Probability functions', href: '/probability/probability-function#notation',
      rows: [
        { tex: '$X$ vs $x$', read: 'the variable; a value', means: 'Capital for the random variable, lowercase for a number it takes.' },
        { tex: '$P(\\cdot)$', read: 'the probability of', means: 'Takes an event, returns a number in $[0, 1]$.' },
        { tex: '$p(x)$ vs $f(x)$', read: 'mass; density', means: '$p$ is a chance (discrete); $f$ is a rate (continuous).' },
      ],
    },
    {
      page: 'PMF', href: '/probability/probability-function/pmf#13',
      rows: [
        { tex: '$\\{x : p_X(x) > 0\\}$', read: 'the support of X', means: 'Every value that carries probability.' },
        { tex: '$\\sum_{x} p_X(x) = 1$', read: 'the masses add to one', means: 'The sum runs over the support, not from a start to an end.' },
      ],
    },
    {
      page: 'PDF', href: '/probability/probability-function/pdf#3',
      rows: [
        { tex: '$f_X(x)$', read: 'the density of X at x', means: 'A density, not a probability; it can exceed $1$.' },
        { tex: '$P(a \\le X \\le b)$', read: 'X between a and b', means: 'The integral $\\int_a^b f_X(x)\\,dx$.' },
        { tex: '$P(X = a) = 0$', read: 'a single point', means: 'For a continuous variable, always zero.' },
      ],
    },
    {
      page: 'CDF', href: '/probability/cdf#notation',
      rows: [
        { tex: '$F_X(x)$', read: 'the CDF of X at x', means: 'Equals $P(X \\le x)$: everything up to and including $x$.' },
        { tex: '$F(b) - F(a)$', read: 'F of b minus F of a', means: 'Equals $P(a < X \\le b)$.' },
      ],
    },
    {
      page: 'Indicators', href: '/probability/indicators#notation',
      rows: [
        { tex: '$I_A, \\; \\mathbf{1}_A$', read: 'the indicator of A', means: '$1$ if $A$ happens, $0$ if not.' },
        { tex: '$\\mathbf{1}\\{X \\le x\\}$', read: 'one if the condition holds', means: 'The brace form takes a statement instead of an event.' },
        { tex: '$N = \\sum I_{A_i}$', read: 'a count of events', means: 'How many of the $A_i$ happened.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$P$ vs $p$', text: 'Capital $P$ takes an event; lowercase $p$ is a mass function of a value.' },
      { tex: '$F$ vs $f$', text: 'Capital $F$ accumulates (the CDF); lowercase $f$ is the density.' },
      { tex: '$\\sim$', text: 'Is distributed as; in linear algebra, row-equivalent or similar.' },
      { tex: '$\\{X \\le x\\}$', text: 'An event, not a set of numbers.' },
    ],
  },
  symbolsHref: '/math-symbols/probability#random_variables_and_distributions,probability_notations',
  symbolsLabel: 'Random variable symbols table',
  parentHref: '/probability',
  parentLabel: 'Probability',
};

export default sheet;
