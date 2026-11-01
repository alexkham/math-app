// Notation cheat sheet for the whole functions section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'functions-notation-cheat-sheet',
  source: '/functions/basics',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Function Notation at a Glance',
  lead: 'The marks from the notation cards across the function pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Basics', href: '/functions/basics#5',
      rows: [
        { tex: '$f(x)$', read: 'f of x', means: '$f$ names the rule, $f(x)$ its output; never f times x.' },
        { tex: '$g(t), \\; P(n)$', read: 'g of t; P of n', means: 'Any letter can name a function; $t$ hints at time, $n$ at counting.' },
        { tex: '$f(x + 1)$', read: 'f of x plus one', means: 'Whatever is in the brackets replaces $x$ everywhere.' },
      ],
    },
    {
      page: 'Domain', href: '/functions/domain#2',
      rows: [
        { tex: '$[2, 5)$', read: 'two included, five excluded', means: 'Square bracket in, round bracket out.' },
        { tex: '$\\{x \\mid x \\geq 0\\}$', read: 'all x such that', means: 'Set-builder: the variable, then the test it must pass.' },
        { tex: '$(a, b) \\cup (c, d)$', read: 'a union of intervals', means: 'For domains in separate pieces, as $(-\\infty, -1) \\cup (1, \\infty)$.' },
      ],
    },
    {
      page: 'Range', href: '/functions/range#2',
      rows: [
        { tex: '$\\{y \\mid y \\geq 0\\}$', read: 'all y such that', means: 'The same grammar on the output side.' },
        { tex: '$f: \\mathbb{R} \\to \\mathbb{R}$', read: 'f from R to R', means: 'Domain, then codomain; the range may be smaller.' },
        { tex: '$\\{2, 5, 7\\}$', read: 'exactly these outputs', means: 'A finite range listed in braces.' },
      ],
    },
    {
      page: 'Function arithmetic', href: '/functions/arithmetic#notation',
      rows: [
        { tex: '$(f + g)(x)$', read: 'f plus g, of x', means: 'Equals $f(x) + g(x)$; the same for $f - g$.' },
        { tex: '$(fg)(x)$', read: 'f times g, of x', means: 'Equals $f(x)\\,g(x)$.' },
        { tex: '$\\left(\\frac{f}{g}\\right)(x)$', read: 'f over g, of x', means: 'Equals $\\frac{f(x)}{g(x)}$, only where $g(x) \\neq 0$.' },
      ],
    },
    {
      page: 'Composition', href: '/functions/composition#2',
      rows: [
        { tex: '$f \\circ g$', read: 'f after g', means: 'Feed the output of $g$ into $f$; read right to left.' },
        { tex: '$f(g(x))$', read: 'f of g of x', means: 'The same thing, evaluated inside out.' },
        { tex: '$fg(x)$', read: 'ambiguous', means: 'Could mean a product; avoid it for composition.' },
      ],
    },
    {
      page: 'Inverse functions', href: '/functions/inverse#2',
      rows: [
        { tex: '$f^{-1}(x)$', read: 'f inverse of x', means: 'The function that undoes $f$: $f^{-1}(f(x)) = x$.' },
        { tex: '$\\frac{1}{f(x)}, \\; (f(x))^{-1}$', read: 'one over f of x', means: 'The reciprocal: a different thing.' },
        { tex: '$\\text{Dom}(f), \\; \\text{Ran}(f)$', read: 'domain and range of f', means: 'They swap: $\\text{Dom}(f^{-1}) = \\text{Ran}(f)$.' },
      ],
    },
    {
      page: 'Piecewise functions', href: '/functions/piecewise#2',
      rows: [
        { tex: '$\\begin{cases} 2x & x < 0 \\\\ 5 & x \\geq 0 \\end{cases}$', read: 'defined by cases', means: 'Use the row whose condition holds.' },
        { tex: '$x < 1, \\; x \\geq 1$', read: 'split at the boundary', means: 'Each cut point belongs to exactly one row.' },
        { tex: '$\\bullet, \\; \\circ$', read: 'solid dot, open dot', means: 'On a graph: endpoint included, endpoint excluded.' },
      ],
    },
    {
      page: 'Transformations', href: '/functions/transformations#notation',
      rows: [
        { tex: '$a f(b(x - h)) + k$', read: 'the four-knob form', means: 'Outside letters move it vertically, inside letters horizontally.' },
        { tex: '$f(x - h)$', read: 'f of x minus h', means: 'Shifts right by $h$: the sign goes the opposite way.' },
        { tex: '$-f(x)$ vs $f(-x)$', read: 'two mirrors', means: 'Flip across the $x$-axis against flip across the $y$-axis.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$f^{-1}$ vs $\\frac{1}{f}$', text: 'The inverse function against the reciprocal.' },
      { tex: '$f(x)$', text: 'The brackets apply $f$; they never mean multiplication.' },
      { tex: '$(2, 5)$', text: 'An open interval in a domain; a point in the plane on a graph.' },
      { tex: 'the bar $\\mid$', text: 'Such that, inside set braces; given, inside $P(\\cdot)$; divides, between integers.' },
    ],
  },
  symbolsHref: '/math-symbols/functions',
  symbolsLabel: 'Function symbols table',
  parentHref: '/functions',
  parentLabel: 'Functions',
};

export default sheet;
