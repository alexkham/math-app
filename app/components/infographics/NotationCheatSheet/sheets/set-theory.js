// Notation cheat sheet for the whole set-theory section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'set-theory-notation-cheat-sheet',
  source: '/set-theory/basics',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Set Notation at a Glance',
  lead: 'The marks from the notation cards across the set-theory pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Basics', href: '/set-theory/basics#2',
      rows: [
        { tex: '$\\{1, 2, 3\\}$', read: 'the set of one, two, three', means: 'Roster form: order and repeats carry no meaning.' },
        { tex: '$\\{x \\mid x > 0\\}$', read: 'all x such that x is positive', means: 'Set-builder form: a variable, the bar, a condition.' },
        { tex: '$\\in, \\; \\notin$', read: 'is / is not an element of', means: 'Membership, and its denial with a slash.' },
        { tex: '$\\varnothing$', read: 'the empty set', means: 'The set with no members; also written $\\{\\}$.' },
      ],
    },
    {
      page: 'Subsets', href: '/set-theory/subsets#6',
      rows: [
        { tex: '$\\subseteq, \\; \\subset$', read: 'subset; proper subset', means: 'The underbar allows $A = B$; without it, $A \\neq B$.' },
        { tex: '$\\supseteq, \\; \\supset$', read: 'superset', means: 'The same facts read from the larger set.' },
        { tex: '$\\mathcal{P}(A), \\; 2^A$', read: 'the power set of A', means: 'The set of all subsets of $A$.' },
        { tex: '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$', read: 'the number systems', means: 'Naturals, integers, rationals, reals.' },
      ],
    },
    {
      page: 'Set operations', href: '/set-theory/operations#notation',
      rows: [
        { tex: '$\\cup, \\; \\cap$', read: 'union; intersection', means: 'In either set; in both sets.' },
        { tex: "$A^c, \\; A', \\; \\overline{A}$", read: 'the complement of A', means: 'Everything in the universal set $U$ outside $A$.' },
        { tex: '$A \\setminus B$', read: 'A minus B', means: 'In $A$ but not in $B$; also written $A - B$.' },
        { tex: '$A \\triangle B$', read: 'symmetric difference', means: 'In exactly one of the two sets.' },
      ],
    },
    {
      page: 'Cardinality', href: '/set-theory/cardinality#notation',
      rows: [
        { tex: '$|A|$', read: 'the cardinality of A', means: 'The number of members: $|\\{1, 2, 3\\}| = 3$.' },
        { tex: '$\\aleph_0$', read: 'aleph-null', means: 'The size of $\\mathbb{N}$ and every countably infinite set.' },
        { tex: '$\\mathfrak{c} = 2^{\\aleph_0}$', read: 'the continuum', means: 'The size of $\\mathbb{R}$, larger than $\\aleph_0$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$|A|$', text: 'A count for a set; an absolute value for a number; a determinant for a matrix.' },
      { tex: '$\\subset$', text: 'Proper subset here; some books use it for any subset.' },
      { tex: '$2^A$', text: 'The power set when $A$ is a set, not a number raised to a power.' },
      { tex: '$\\{x\\}$', text: 'A one-element set here; the fractional part of $x$ in arithmetic.' },
    ],
  },
  symbolsHref: '/math-symbols/set-theory#basic_set_operations,relations_between_sets,special_sets,cardinality,set_constructors',
  symbolsLabel: 'Set symbols table',
  parentHref: '/set-theory',
  parentLabel: 'Set theory',
};

export default sheet;
