// Notation cheat sheet for the whole arithmetic section.
// Rows are short forms of the notation cards on its pages; each group links to its card.
const sheet = {
  id: 'arithmetic-notation-cheat-sheet',
  source: '/arithmetic',
  eyebrow: 'Notation · Cheat sheet',
  title: 'Arithmetic Notation at a Glance',
  lead: 'The marks from the notation cards across the arithmetic pages: how each is read and what it means. Every group links to the full card on its page.',
  groups: [
    {
      page: 'Fractions', href: '/arithmetic/fractions#notation',
      rows: [
        { tex: '$\\frac{a}{b}$', read: 'a over b', means: 'The vinculum: numerator over denominator, a division held in place.' },
        { tex: '$a/b$', read: 'a slash b; a over b', means: 'The inline spelling for running text and code; same value, no grouping power.' },
        { tex: '$a \\div b$', read: 'a divided by b', means: 'The obelus, the schoolroom division sign: $a \\div b = \\frac{a}{b}$.' },
      ],
    },
    {
      page: 'Mixed numbers', href: '/arithmetic/fractions/mixed-numbers#notation',
      rows: [
        { tex: '$2\\frac{3}{4}$', read: 'two and three quarters', means: 'Adjacency means addition here, and only here: $2 + \\frac{3}{4}$.' },
        { tex: '$3\\frac{5}{4}$ vs $4\\frac{1}{4}$', read: 'non-standard form, and its correction', means: 'The fractional part must be proper; carry the extra whole.' },
        { tex: '$-2\\frac{3}{4}$', read: 'negative two and three quarters', means: 'The minus grips the whole package: $-(2 + \\frac{3}{4})$.' },
      ],
    },
    {
      page: 'Divisibility', href: '/arithmetic/divisibility#2',
      rows: [
        { tex: '$a \\mid b$', read: 'a divides b', means: 'A statement, true or false: $b = a \\cdot k$ for some integer $k$.' },
        { tex: '$5 \\nmid 12$', read: 'five does not divide twelve', means: 'The slashed bar denies: no integer $k$ gives $12 = 5k$.' },
        { tex: '$b \\bmod a = 0$', read: 'b mod a equals zero', means: 'The same fact as a computation: the remainder vanishes.' },
      ],
    },
    {
      page: 'Factors', href: '/arithmetic/divisibility/factors#notation',
      rows: [
        { tex: '$n = p_1^{a_1} \\cdots p_k^{a_k}$', read: 'n as a product of prime powers', means: 'Canonical factorisation: $p$ for primes, exponents count repeats.' },
        { tex: '$d(n)$ · $\\tau(n)$', read: 'd of n; tau of n', means: 'The number of positive divisors of $n$.' },
        { tex: '$\\sigma(n)$', read: 'sigma of n', means: 'The sum of the positive divisors: $\\sigma(12) = 28$.' },
      ],
    },
    {
      page: 'GCD', href: '/arithmetic/divisibility/gcd#notation',
      rows: [
        { tex: '$\\gcd(a, b)$', read: 'the g-c-d of a and b', means: 'Greatest common divisor, in function spelling.' },
        { tex: '$\\text{HCF, GCF}$', read: 'highest, or greatest, common factor', means: 'Other names for the gcd: HCF in British and Indian schools, GCF in American schools.' },
        { tex: '$\\gcd(a, b) = 1$', read: 'a and b are coprime', means: 'The equation is the notation; coprimality has no mark of its own.' },
      ],
    },
    {
      page: 'LCM', href: '/arithmetic/divisibility/lcm#notation',
      rows: [
        { tex: '$\\operatorname{lcm}(a, b)$', read: 'the l-c-m of a and b', means: 'Least common multiple, the mirror twin of $\\gcd$.' },
        { tex: '$[a, b]$', read: 'bracket a, b', means: 'Number theory’s shorthand for the lcm; $(a, b)$ is the gcd.' },
        { tex: '$\\text{LCM vs LCD}$', read: 'least common multiple; least common denominator', means: 'The LCD of fractions is the LCM of their denominators.' },
      ],
    },
    {
      page: 'Modulo', href: '/arithmetic/modulo#2',
      rows: [
        { tex: '$a \\bmod n$', read: 'a mod n', means: 'The operator that computes a remainder: $17 \\bmod 5 = 2$.' },
        { tex: '$a \\ \\% \\ n$', read: 'a percent n', means: 'The remainder operator in code: C, Java, Python, JavaScript.' },
        { tex: '$a \\equiv b \\pmod{n}$', read: 'a is congruent to b modulo n', means: 'A statement: $a$ and $b$ leave the same remainder.' },
      ],
    },
    {
      page: 'Integer part', href: '/arithmetic/integer-part#notation',
      rows: [
        { tex: '$\\lfloor x \\rfloor$', read: 'floor of x', means: 'The greatest integer at most $x$: the integer part.' },
        { tex: '$\\lceil x \\rceil$', read: 'ceiling of x', means: 'The least integer at least $x$.' },
        { tex: '$\\{x\\}$', read: 'fractional part of x', means: 'What the floor leaves: $x - \\lfloor x \\rfloor$, in $[0, 1)$.' },
        { tex: '$\\lfloor x + \\tfrac{1}{2} \\rfloor$', read: 'x rounded to the nearest integer', means: 'Rounding built from the floor; ties go up: $2.5 \\to 3$.' },
      ],
    },
  ],
  clashes: {
    label: 'Same marks, different job',
    rows: [
      { tex: '$a \\mid b$', text: 'Divides, between integers; such that, inside set braces; absolute value when doubled.' },
      { tex: '$(a, b)$ vs $[a, b]$', text: 'The gcd and the lcm in number-theory shorthand; a point or an interval elsewhere.' },
      { tex: '$\\{x\\}$', text: 'The fractional part here; a one-element set in set theory.' },
      { tex: '$\\bmod$ vs $\\pmod{n}$', text: 'An operator that returns a number; a label on a congruence statement.' },
      { tex: '$\\sigma(n)$', text: 'The divisor sum here; a standard deviation in statistics.' },
    ],
  },
  symbolsHref: '/math-symbols/arithmetic#divisibility,modular_arithmetic,fractions,basic_operations',
  symbolsLabel: 'Arithmetic symbols table',
  parentHref: '/arithmetic',
  parentLabel: 'Arithmetic',
};

export default sheet;
