// Notation cheat sheet for the whole complex-numbers section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'complex-numbers-notation-cheat-sheet',
  source: '/complex-numbers/basics',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Complex Number Notation at a Glance',
  lead: 'The marks from the notation cards across the complex-number pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Basics', href: '/complex-numbers/basics#notation',
      rows: [
        { tex: '$z, \\; w$', read: 'z, w: complex numbers', means: 'The usual letters for complex numbers, as $x$ and $y$ are for reals.' },
        { tex: '$a + bi$', read: 'a plus b i', means: 'Real part $a$, imaginary part $b$; both are real numbers.' },
        { tex: '$\\mathbb{C}$', read: 'C, the complex numbers', means: 'The set of all $a + bi$; it contains $\\mathbb{R}$.' },
      ],
    },
    {
      page: 'Imaginary numbers', href: '/complex-numbers/imaginary-numbers#notation',
      rows: [
        { tex: '$i$', read: 'i, the imaginary unit', means: 'The number with $i^2 = -1$.' },
        { tex: '$\\sqrt{-1}$', read: 'the square root of minus one', means: 'Another name for $i$; root rules for reals fail with it.' },
        { tex: '$bi$', read: 'b i', means: 'A pure imaginary number: real part $0$.' },
      ],
    },
    {
      page: 'Algebraic form', href: '/complex-numbers/algebraic-form#2',
      rows: [
        { tex: '$\\operatorname{Re}(z), \\; \\operatorname{Im}(z)$', read: 'real part, imaginary part', means: 'For $z = a + bi$: $a$ and $b$. $\\operatorname{Im}(z)$ is $b$, not $bi$.' },
        { tex: '$a + (-b)i$', read: 'a plus negative b, i', means: 'Written $a - bi$; the imaginary part is $-b$.' },
        { tex: '$z = x + yi$', read: 'z equals x plus y i', means: 'Same form with plane letters: the point $(x, y)$.' },
      ],
    },
    {
      page: 'Complex conjugate', href: '/complex-numbers/complex-conjugate#notation',
      rows: [
        { tex: '$\\bar{z}$', read: 'z bar, the conjugate', means: 'For $z = a + bi$, $\\bar{z} = a - bi$: the mirror image across the real axis.' },
        { tex: '$\\overline{z_1 + z_2}$', read: 'the conjugate of the sum', means: 'The bar covers the whole expression; it equals $\\bar{z}_1 + \\bar{z}_2$.' },
        { tex: '$z^*$', read: 'z star', means: 'The same conjugate, as written in physics and engineering.' },
      ],
    },
    {
      page: 'Absolute value', href: '/complex-numbers/absolute-value#notation',
      rows: [
        { tex: '$|z|$', read: 'the modulus of z', means: 'Distance from $0$: $\\sqrt{a^2 + b^2}$.' },
        { tex: '$|z|^2 = z\\bar{z}$', read: 'mod z squared', means: 'Equals $a^2 + b^2$, with no root to take.' },
        { tex: '$|z - c| = R$', read: 'mod z minus c equals R', means: 'The circle of radius $R$ around $c$.' },
      ],
    },
    {
      page: 'Additive inverse', href: '/complex-numbers/additive-inverse#3',
      rows: [
        { tex: '$-z$', read: 'negative z', means: 'Both parts change sign: $-a - bi$.' },
        { tex: '$-(a + bi)$', read: 'minus, quantity a plus b i', means: 'The brackets carry the minus to both parts.' },
        { tex: '$z - w$', read: 'z minus w', means: 'Adding the inverse: $z + (-w)$.' },
      ],
    },
    {
      page: 'Multiplicative inverse', href: '/complex-numbers/multiplicative-inverse#4',
      rows: [
        { tex: '$z^{-1}, \\; \\frac{1}{z}$', read: 'z inverse; one over z', means: 'The number with $z \\cdot z^{-1} = 1$; it equals $\\frac{\\bar{z}}{|z|^2}$.' },
        { tex: '$(3 + 2i)^{-1}$', read: 'the inverse of three plus two i', means: 'Found by multiplying top and bottom by the conjugate: $\\frac{3 - 2i}{13}$.' },
      ],
    },
    {
      page: 'Trigonometric form', href: '/complex-numbers/trigonometric-form#notation',
      rows: [
        { tex: '$r, \\; \\theta$', read: 'r and theta, the polar pair', means: 'Distance from $0$ and angle from the positive real axis.' },
        { tex: '$\\arg(z)$', read: 'the argument of z', means: 'Any angle of $z$; there are infinitely many, $2\\pi$ apart.' },
        { tex: '$\\operatorname{Arg}(z)$', read: 'the principal argument', means: 'One chosen angle, usually in $(-\\pi, \\pi]$; some texts use $[0, 2\\pi)$.' },
        { tex: '$\\operatorname{cis}\\theta$', read: 'sis theta', means: 'Short for $\\cos\\theta + i\\sin\\theta$.' },
      ],
    },
    {
      page: 'Exponential form', href: '/complex-numbers/exponential-form#notation',
      rows: [
        { tex: '$e^{i\\theta}$', read: 'e to the i theta', means: "Equals $\\operatorname{cis}\\theta$ (Euler's formula): a point on the unit circle." },
        { tex: '$re^{i\\theta}$', read: 'r e to the i theta', means: 'The whole number $z$: length $r$, angle $\\theta$.' },
        { tex: '$e^{i(\\theta + 2\\pi k)}$', read: 'theta plus two pi k', means: 'The same number for every integer $k$.' },
      ],
    },
    {
      page: "De Moivre's theorem", href: '/complex-numbers/demoivre-theorem#notation',
      rows: [
        { tex: '$z_k$', read: 'z sub k, the k-th root', means: 'The roots of $z^n = w$, numbered $k = 0, \\ldots, n - 1$.' },
        { tex: '$\\omega$', read: 'omega', means: 'A primitive root of unity: its powers give all $n$ roots of $1$.' },
        { tex: '$R^{1/n}$', read: 'R to the one over n', means: 'The real root of the length; the complex root $w^{1/n}$ has $n$ values.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$|z|$', text: 'The modulus here; for a real number, the absolute value; for a matrix, the determinant.' },
      { tex: '$\\bar{z}$', text: 'The conjugate here; in statistics a bar means a mean, in sets a complement.' },
      { tex: '$z^{-1}$ vs $z^*$', text: 'The reciprocal, against the conjugate: they agree only on the unit circle.' },
      { tex: '$w^{1/n}$', text: '$n$ values for a complex $w$; a single real root for a positive real number.' },
    ],
  },
  symbolsHref: '/math-symbols/complex-numbers',
  symbolsLabel: 'Complex number symbols table',
  parentHref: '/complex-numbers',
  parentLabel: 'Complex numbers',
};

export default sheet;
