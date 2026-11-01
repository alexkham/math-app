// Notation cheat sheet for polynomials, equations and inequalities
// (/algebra/polynomials, /algebra/equations, /algebra/inequalities).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'polynomials-equations-inequalities-notation-cheat-sheet',
  source: '/algebra/polynomials/roots',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Polynomials, Equations and Inequalities: Notation at a Glance',
  lead: 'The marks from the notation cards across the polynomial, equation and inequality pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Polynomial roots', href: '/algebra/polynomials/roots#notation',
      rows: [
        { tex: '$a_n x^n + \\cdots + a_0$', read: 'a-n x to the n, down to a-zero', means: 'Standard form; the subscript of each coefficient is its power of $x$.' },
        { tex: '$\\deg P = n$', read: 'the degree of P is n', means: 'The highest power with a nonzero coefficient.' },
        { tex: '$(x - r)^m$', read: 'x minus r, to the multiplicity m', means: 'The root $r$ counted $m$ times.' },
      ],
    },
    {
      page: 'Polynomial rules', href: '/algebra/polynomials/rules#notation',
      rows: [
        { tex: '$P = (x - c)\\,Q + R$', read: 'quotient and remainder', means: 'Division as a product: quotient $Q(x)$, remainder $R = P(c)$.' },
        { tex: '$P(c), \\; P(-x)$', read: 'P of c; P of minus x', means: 'Put in, not multiply: a value, and a new polynomial.' },
        { tex: '$\\pm\\frac{p}{q}$', read: 'plus or minus p over q', means: 'Rational root candidates: $p \\mid a_0$, $q \\mid a_n$.' },
        { tex: '$r_1, \\ldots, r_n$', read: 'r sub one to r sub n', means: 'The roots, listed once per multiplicity.' },
      ],
    },
    {
      page: 'Quadratic equations', href: '/algebra/equations/quadratic#notation',
      rows: [
        { tex: '$ax^2 + bx + c = 0$', read: 'standard form', means: 'Descending powers, everything on the left, $a \\neq 0$.' },
        { tex: '$\\Delta = b^2 - 4ac$', read: 'delta, the discriminant', means: 'Its sign tells how many real roots there are.' },
        { tex: '$x_1, \\; x_2$', read: 'x one and x two', means: 'The two roots; the subscripts only count.' },
      ],
    },
    {
      page: 'Absolute value equations', href: '/algebra/equations/absolute-value#notation',
      rows: [
        { tex: '$|x|$', read: 'the absolute value of x', means: 'Distance of $x$ from $0$; never negative.' },
        { tex: '$|a + b|$', read: 'absolute value of a plus b', means: 'The bars cover the whole quantity: add first, then take the size.' },
        { tex: '$|x| = \\sqrt{x^2}$', read: 'the root of the square', means: 'A second definition, handy with radicals.' },
      ],
    },
    {
      page: 'Inequalities', href: '/algebra/inequalities#3',
      rows: [
        { tex: '$(a, b)$', read: 'open interval from a to b', means: 'Endpoints left out.' },
        { tex: '$[a, b]$', read: 'closed interval from a to b', means: 'Endpoints included.' },
        { tex: '$(a, \\infty)$ · $(-\\infty, a]$', read: 'rays', means: 'Infinity always takes a round bracket.' },
        { tex: '$\\cup$', read: 'union', means: 'Joins two intervals into one solution set.' },
      ],
    },
    {
      page: 'Linear inequalities', href: '/algebra/inequalities/linear#notation',
      rows: [
        { tex: '$<$ · $\\leq$ · $>$ · $\\geq$', read: 'less than … greater than or equal to', means: 'The bar under the sign adds equality.' },
        { tex: '$-3 < 2x + 1 \\leq 7$', read: 'a compound inequality', means: 'Both conditions at once: an "and".' },
        { tex: '$(-\\infty, 9]$', read: 'from minus infinity to nine, inclusive', means: 'The solution written as an interval.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$|x|, \\ |z|, \\ |A|$', text: 'Absolute value of a number, modulus of a complex number, determinant of a matrix: the same two bars.' },
      { tex: '$(a, b)$', text: 'An open interval here; a point in the plane in coordinate geometry.' },
      { tex: '$p$ in $\\frac{p}{q}$', text: 'Any divisor of $a_0$, not necessarily a prime.' },
    ],
  },
  symbolsHref: '/math-symbols/algebra#polynomials,equations_and_solution_sets,inequalities_and_intervals',
  symbolsLabel: 'Polynomial, equation and inequality symbols',
  parentHref: '/algebra',
  parentLabel: 'Algebra',
};

export default sheet;
