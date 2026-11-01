// Notation cheat sheet for events and probability rules (sample space, sets, conditional
// probability, independence, joint probability, total probability, Bayes' theorem).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'probability-events-rules-notation-cheat-sheet',
  source: '/probability/conditional-probability',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Events and Probability Rules: Notation at a Glance',
  lead: 'The marks from the notation cards across the pages on events and probability rules: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Sample space', href: '/probability/sample-space#notation',
      rows: [
        { tex: '$\\Omega$', read: 'omega, the sample space', means: 'The set of every possible outcome.' },
        { tex: '$\\omega \\in \\Omega$', read: 'little omega, one outcome', means: 'Lowercase for one outcome, capital for all of them.' },
        { tex: '$A \\subseteq \\Omega$', read: 'A is an event', means: 'An event is any set of outcomes.' },
      ],
    },
    {
      page: 'Sets in probability', href: '/probability/sets#notation',
      rows: [
        { tex: '$A \\cup B$', read: 'A or B', means: 'At least one of them happens.' },
        { tex: '$A \\cap B$', read: 'A and B', means: 'Both happen.' },
        { tex: '$A^c$', read: 'not A', means: 'Every outcome outside $A$.' },
        { tex: '$A \\setminus B$', read: 'A but not B', means: '$A$ happens and $B$ does not.' },
      ],
    },
    {
      page: 'Conditional probability', href: '/probability/conditional-probability#notation',
      rows: [
        { tex: '$P(A \\mid B)$', read: 'probability of A given B', means: 'Measured inside the world where $B$ has happened.' },
        { tex: '$P(A \\cap B)$', read: 'probability of A and B', means: 'The joint probability: the overlap of the two events.' },
      ],
    },
    {
      page: 'Independence', href: '/probability/independence#notation',
      rows: [
        { tex: '$A \\perp B$', read: 'A is independent of B', means: '$P(A \\cap B) = P(A)\\,P(B)$; also $P(A \\mid B) = P(A)$.' },
        { tex: '$A \\perp B \\mid C$', read: 'independent given C', means: 'The product rule holds inside the world where $C$ holds.' },
        { tex: '$X_i \\overset{\\text{iid}}{\\sim} F$', read: 'independent, identically distributed', means: 'All independent, all with the same distribution $F$.' },
      ],
    },
    {
      page: 'Joint probability', href: '/probability/joint-probability#notation',
      rows: [
        { tex: '$P(X = x, \\, Y = y)$', read: 'X equals x and Y equals y', means: 'The comma means and.' },
        { tex: '$p(x, y), \\; f_{X,Y}$', read: 'joint mass; joint density', means: 'One function of both variables.' },
        { tex: '$p_X(x) = \\sum_y p(x, y)$', read: 'the marginal of X', means: 'Sum the joint over every value of $y$.' },
      ],
    },
    {
      page: 'Total probability', href: '/probability/total-probability#notation',
      rows: [
        { tex: '$\\bigcup B_i = \\Omega$', read: 'the cases cover everything', means: 'With $B_i \\cap B_j = \\emptyset$: a partition into cases.' },
        { tex: '$\\sum_i P(A \\mid B_i)\\,P(B_i)$', read: 'chance in each case, weighted', means: 'Equals $P(A)$; with a density, the sum becomes an integral.' },
      ],
    },
    {
      page: "Bayes' theorem", href: '/probability/bayes-theorem#notation',
      rows: [
        { tex: '$P(B \\mid A)$', read: 'the reverse conditional', means: 'Not the same as $P(A \\mid B)$; Bayes’ theorem converts one into the other.' },
        { tex: '$P(A) \\to P(A \\mid B)$', read: 'prior to posterior', means: 'The same event, measured again once $B$ is known.' },
        { tex: '$O(A \\mid B)$', read: 'the posterior odds of A', means: 'Bayes in odds form: the likelihood ratio times the prior odds $O(A)$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$A \\mid B$', text: 'Inside $P(\\cdot)$, given; between integers, divides.' },
      { tex: '$\\perp$', text: 'Independent here; perpendicular or orthogonal in geometry and linear algebra.' },
      { tex: '$A^c$', text: 'The complement event, not a power of $A$.' },
      { tex: 'the comma', text: 'In $P(X = x, Y = y)$ it means and, not a list.' },
    ],
  },
  symbolsHref: '/math-symbols/probability#probability_notations,probability_and_statistics',
  symbolsLabel: 'Probability symbols table',
  parentHref: '/probability',
  parentLabel: 'Probability',
};

export default sheet;
