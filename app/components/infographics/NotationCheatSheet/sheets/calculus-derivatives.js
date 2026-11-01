// Notation cheat sheet for derivatives (/calculus/derivatives and its pages).
// Rows are short forms of the notation cards on those pages; each group links to its card.
const sheet = {
  id: 'derivatives-notation-cheat-sheet',
  source: '/calculus/derivatives',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Derivative Notation at a Glance',
  lead: 'The marks from the notation cards across the derivative pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Derivatives', href: '/calculus/derivatives#2',
      rows: [
        { tex: "$f'(x)$", read: 'f prime of x (Lagrange)', means: 'The derivative as a new function of $x$.' },
        { tex: '$\\frac{dy}{dx}$', read: 'd y d x (Leibniz)', means: 'Rate of change of $y$ with $x$; one symbol, not a fraction.' },
        { tex: '$Df(x)$', read: 'D f of x (Euler)', means: '$D$ as an operator acting on $f$.' },
        { tex: '$\\dot{y}$', read: 'y dot (Newton)', means: 'Derivative with respect to time.' },
      ],
    },
    {
      page: 'Derivative as a function', href: '/calculus/derivatives/function#notation',
      rows: [
        { tex: '$\\frac{f(x+h) - f(x)}{h}$', read: 'the difference quotient', means: 'Slope of a secant; its limit as $h \\to 0$ is $f\'(x)$.' },
        { tex: '$\\left.\\frac{dy}{dx}\\right|_{x=a}$', read: 'd y d x at x equals a', means: 'The derivative evaluated at one point: $f\'(a)$.' },
      ],
    },
    {
      page: 'Differentiability', href: '/calculus/derivatives/differentiability#notation',
      rows: [
        { tex: "$f'_{-}(a), \\; f'_{+}(a)$", read: 'f prime minus, f prime plus at a', means: 'One-sided derivatives; differentiable at $a$ when they agree.' },
        { tex: "$f'(a) = \\pm\\infty$", read: 'the derivative is infinite', means: 'A vertical tangent: $f$ is not differentiable there.' },
      ],
    },
    {
      page: 'Higher-order derivatives', href: '/calculus/derivatives/higher-order#notation',
      rows: [
        { tex: "$f'', \\; f^{(n)}$", read: 'f double prime; f n-th', means: 'Primes up to three, then the order in brackets.' },
        { tex: '$\\frac{d^n y}{dx^n}$', read: 'd n y, d x to the n', means: 'Leibniz form of the $n$-th derivative.' },
        { tex: '$\\ddot{y}, \\; D^n f$', read: 'y double dot; D to the n of f', means: 'Second time derivative; $D$ applied $n$ times.' },
      ],
    },
    {
      page: 'Differentials', href: '/calculus/derivatives/differentials#notation',
      rows: [
        { tex: '$\\Delta x, \\; \\Delta y$', read: 'delta x, delta y', means: 'Actual changes along the curve.' },
        { tex: '$dx, \\; dy$', read: 'dee x, dee y', means: 'Changes along the tangent line: $dy = f\'(x)\\,dx$.' },
      ],
    },
    {
      page: 'Graph analysis', href: '/calculus/derivatives/graph-analysis#notation',
      rows: [
        { tex: '$c$', read: 'the critical number c', means: "Where $f'(c) = 0$ or $f'(c)$ does not exist." },
        { tex: "$f': + \\to -$", read: 'f prime changes from positive to negative', means: 'Sign change of $f\'$: a local maximum.' },
        { tex: "$f' > 0$ on $(a, b)$", read: 'f prime is positive on the interval', means: '$f$ is increasing there.' },
      ],
    },
    {
      page: 'Techniques', href: '/calculus/derivatives/techniques#notation',
      rows: [
        { tex: '$2y\\,\\frac{dy}{dx}$', read: 'two y times d y d x', means: 'Implicit differentiation: the chain rule on $y^2$.' },
        { tex: "$(f^{-1})'(b)$", read: 'derivative of f inverse at b', means: "Equals $\\frac{1}{f'(a)}$ where $f(a) = b$." },
        { tex: '$\\frac{dy/dt}{dx/dt}$', read: 'd y d t over d x d t', means: 'The slope $\\frac{dy}{dx}$ of a parametric curve.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: "$f''$ vs $f^2$", text: 'The second derivative, not $f$ squared; $f^{(2)}$ uses brackets for that reason.' },
      { tex: '$\\frac{dy}{dx}$', text: 'One symbol, yet it behaves like a fraction in the chain rule and with differentials.' },
      { tex: '$f^{-1}$', text: 'The inverse function, not $\\frac{1}{f}$.' },
    ],
  },
  symbolsHref: '/math-symbols/calculus#differentiation',
  symbolsLabel: 'Derivative symbols table',
  parentHref: '/calculus/derivatives',
  parentLabel: 'Derivatives',
};

export default sheet;
