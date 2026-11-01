// Notation cheat sheet for the whole trigonometry section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'trigonometry-notation-cheat-sheet',
  source: '/trigonometry/right-triangle',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Trigonometry Notation at a Glance',
  lead: 'The marks from the notation cards across the trigonometry pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Degrees and radians', href: '/trigonometry/degrees-radians#notation',
      rows: [
        { tex: '$\\theta, \\; \\alpha, \\; \\beta$', read: 'theta; alpha, beta', means: 'Greek letters for angles; $\\alpha, \\beta$ when there are two.' },
        { tex: "$41°24'36''$", read: 'degrees, minutes, seconds', means: "Base 60: $1° = 60'$, $1' = 60''$." },
        { tex: '$\\sin 2$ vs $\\sin 2°$', read: 'radians unless marked', means: 'A bare number is in radians.' },
      ],
    },
    {
      page: 'Right triangle', href: '/trigonometry/right-triangle#notation',
      rows: [
        { tex: '$\\text{opp}, \\text{adj}, \\text{hyp}$', read: 'opposite, adjacent, hypotenuse', means: 'Opposite and adjacent depend on which angle you chose.' },
        { tex: '$\\sin, \\; \\cos, \\; \\tan$', read: 'sine, cosine, tangent', means: 'Function names: $\\sin\\theta$ is not $s \\cdot i \\cdot n \\cdot \\theta$.' },
        { tex: '$\\csc, \\; \\sec, \\; \\cot$', read: 'cosecant, secant, cotangent', means: 'Reciprocals, crosswise: $\\csc = \\frac{1}{\\sin}$, $\\sec = \\frac{1}{\\cos}$.' },
      ],
    },
    {
      page: 'Unit circle', href: '/trigonometry/unit-circle#notation',
      rows: [
        { tex: '$(\\cos\\theta, \\sin\\theta)$', read: 'the point on the circle', means: 'Its coordinates are the cosine and sine.' },
        { tex: '$\\text{I, II, III, IV}$', read: 'quadrants one to four', means: 'Counterclockwise from the upper right.' },
        { tex: '$\\theta + 2\\pi$', read: 'theta plus a full turn', means: 'Same point, new label; also $\\theta + 360°$.' },
      ],
    },
    {
      page: 'Trigonometric functions', href: '/trigonometry/functions#notation',
      rows: [
        { tex: '$\\sin^2\\theta$', read: 'sine squared theta', means: 'Means $(\\sin\\theta)^2$: square the value, not the angle.' },
        { tex: '$n \\in \\mathbb{Z}$', read: 'n an integer', means: 'The formula holds for every integer $n$.' },
        { tex: '$n\\pi, \\; \\frac{\\pi}{2} + n\\pi$', read: 'multiples of pi', means: 'Where $\\sin = 0$, and where $\\cos = 0$.' },
      ],
    },
    {
      page: 'Graphs', href: '/trigonometry/graphs#notation',
      rows: [
        { tex: '$y = \\sin x$', read: 'y equals sine x', means: 'On a graph the angle becomes the input $x$.' },
        { tex: '$A, \\; B, \\; C, \\; D$', read: 'the four parameters', means: 'In $y = A\\sin(Bx - C) + D$: amplitude, frequency, shift, midline.' },
        { tex: '$T = \\frac{2\\pi}{|B|}$', read: 'capital T, the period', means: 'The shortest shift that repeats the graph.' },
      ],
    },
    {
      page: 'Inverse functions', href: '/trigonometry/inverse-functions#6',
      rows: [
        { tex: '$\\sin^{-1}(x)$', read: 'inverse sine of x', means: 'The inverse function, not $\\frac{1}{\\sin x}$.' },
        { tex: '$\\arcsin, \\; \\arccos$', read: 'arcsine, arccosine', means: 'The same functions, with no clash with powers.' },
        { tex: '@[asin]@, @[atan2]@', read: 'names in code', means: 'Programming languages; @[atan2]@ takes $(y, x)$.' },
      ],
    },
    {
      page: 'Trigonometric equations', href: '/trigonometry/equations#notation',
      rows: [
        { tex: '$\\frac{\\pi}{6} + 2n\\pi$', read: 'a family of solutions', means: 'One answer for each integer $n$.' },
        { tex: '$(-1)^n \\arcsin k$', read: 'all solutions of sin x = k', means: 'Plus $n\\pi$; the sign flips with $n$, covering both branches.' },
        { tex: '$\\pm\\arccos k$', read: 'all solutions of cos x = k', means: 'Plus $2n\\pi$; both branches at once, since cosine is even.' },
      ],
    },
    {
      page: 'Laws of sines and cosines', href: '/trigonometry/sines-cosines-law#1',
      rows: [
        { tex: '$A, B, C$ vs $a, b, c$', read: 'angles; sides', means: 'Each lowercase side is opposite its capital angle.' },
        { tex: '$(a, A)$', read: 'a side-angle pair', means: 'One side and the angle across from it.' },
        { tex: '$s, \\; R$', read: 'semiperimeter; circumradius', means: '$s = \\frac{a + b + c}{2}$; $R$ the radius of the circle through the vertices.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$\\sin^2 x$ vs $\\sin^{-1} x$', text: 'A power of the value against the inverse function.' },
      { tex: '$\\sin 2$', text: 'Two radians, not two degrees.' },
      { tex: '$A$', text: 'A vertex angle in a triangle; the amplitude on a graph.' },
      { tex: '$\\pm$', text: 'Both branches of the solution, not a choice of one.' },
    ],
  },
  symbolsHref: '/math-symbols/trigonometry#basic_trigonometric_functions,inverse_trigonometric_functions,angles_and_arc_lengths,unit_circle_relations,law_of_sines_and_cosines',
  symbolsLabel: 'Trigonometry symbols table',
  parentHref: '/trigonometry',
  parentLabel: 'Trigonometry',
};

export default sheet;
