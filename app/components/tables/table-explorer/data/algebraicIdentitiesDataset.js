// =========================================================
//   AlgebraicIdentitiesDataset
//   Algebraic identities reference. Same shape as
//   derivativeDataset / integralsDataset / limitsDataset /
//   trigIdentitiesDataset, so it drops into
//   GenericTableExplorer with no component changes.
//
//   Item fields:
//     lhs       LaTeX of the left-hand side (no $..$)
//     rhs       LaTeX of the right-hand side (no $..$)
//     lhsAlts   search keywords for the LHS
//     rhsAlts   search keywords for the RHS
//
//   53 items across 10 categories. 41 with link.url
//   carried verbatim from algebraFormulasList; 12 with
//   link: '' (backfill \u2014 no canonical formula entry
//   exists yet on the algebra formulas page).
// =========================================================

const ALGEBRAIC_IDENTITIES_DATASET = {

  categories: {
    distributive: {
      label: 'Distributive',
      bg:    '#dbeafe', fg: '#1e40af',
      icon:  'a(b+c)',
      desc:  'How multiplication distributes over addition.',
    },
    expansion: {
      label: 'Squares & Cubes',
      bg:    '#cffafe', fg: '#155e75',
      icon:  '(a+b)\u00B2',
      desc:  'Expansions of binomial and trinomial powers.',
    },
    factoring: {
      label: 'Factoring',
      bg:    '#d1fae5', fg: '#065f46',
      icon:  'a\u00B2\u2212b\u00B2',
      desc:  'Factoring patterns for differences and sums.',
    },
    binomial: {
      label: 'Binomial Expansion',
      bg:    '#ede9fe', fg: '#5b21b6',
      icon:  '(x+y)\u207F',
      desc:  'The binomial theorem and Pascal\'s triangle.',
    },
    exponent: {
      label: 'Exponent Laws',
      bg:    '#e0e7ff', fg: '#3730a3',
      icon:  'a\u207F',
      desc:  'Rules for combining and simplifying powers.',
    },
    logarithm: {
      label: 'Logarithm Identities',
      bg:    '#ffe4e6', fg: '#9f1239',
      icon:  'log',
      desc:  'Rules for combining and converting logarithms.',
    },
    radical: {
      label: 'Radical Rules',
      bg:    '#ffedd5', fg: '#9a3412',
      icon:  '\u221A',
      desc:  'Rules for $n$-th roots and rational exponents.',
    },
    absoluteValue: {
      label: 'Absolute Value',
      bg:    '#fef3c7', fg: '#92400e',
      icon:  '|a|',
      desc:  'Identities involving the absolute value function.',
    },
    fraction: {
      label: 'Fraction Operations',
      bg:    '#fce7f3', fg: '#9d174d',
      icon:  'a/b',
      desc:  'Arithmetic of rational expressions.',
    },
    polynomial: {
      label: 'Polynomial Identities',
      bg:    '#e0f2fe', fg: '#075985',
      icon:  'P(x)',
      desc:  'Identities used to solve and analyze polynomials.',
    },
  },

  items: [
    // ─── DISTRIBUTIVE (2) ─────────────────────────────────
    {
      id: 'distributive_identity',
      cat: 'distributive',
      title: 'Distributive Identity',
      lhs: 'a(b + c)',
      rhs: 'ab + ac',
      lhsAlts: ['a(b+c)', 'distribution'],
      rhsAlts: ['ab+ac', 'distributed form'],
      tip: 'Multiplication distributes over addition \u2014 the structural rule linking the two operations.',
      link: '',
    },
    {
      id: 'foil_identity',
      cat: 'distributive',
      title: 'FOIL Identity',
      lhs: '(a + b)(c + d)',
      rhs: 'ac + ad + bc + bd',
      lhsAlts: ['(a+b)(c+d)', 'FOIL', 'binomial product'],
      rhsAlts: ['ac+ad+bc+bd', 'FOIL expansion'],
      tip: 'FOIL = First, Outer, Inner, Last. Applies the distributive identity twice to multiply two binomials.',
      link: '',
    },

    // ─── SQUARES & CUBES EXPANSIONS (5) ───────────────────
    {
      id: 'square_of_a_sum_identity',
      cat: 'expansion',
      title: 'Square of a Sum Identity',
      lhs: '(a + b)^2',
      rhs: 'a^2 + 2ab + b^2',
      lhsAlts: ['(a+b)^2', 'sum squared'],
      rhsAlts: ['a^2 + 2ab + b^2', 'perfect square trinomial'],
      tip: 'A binomial sum, squared: the square of each term plus twice their product.',
      link: '/algebra/polynomials/operations#4',
    },
    {
      id: 'square_of_a_difference_identity',
      cat: 'expansion',
      title: 'Square of a Difference Identity',
      lhs: '(a - b)^2',
      rhs: 'a^2 - 2ab + b^2',
      lhsAlts: ['(a-b)^2', 'difference squared'],
      rhsAlts: ['a^2 - 2ab + b^2'],
      tip: 'Same coefficients as the square of a sum, but the cross term carries a minus.',
      link: '/algebra/polynomials/operations#4',
    },
    {
      id: 'triple_square_identity',
      cat: 'expansion',
      title: 'Triple Square Identity',
      lhs: '(a + b + c)^2',
      rhs: 'a^2 + b^2 + c^2 + 2ab + 2bc + 2ca',
      lhsAlts: ['(a+b+c)^2', 'trinomial squared'],
      rhsAlts: ['a^2+b^2+c^2+2ab+2bc+2ca'],
      tip: 'A trinomial sum, squared: each variable squared, plus twice every unordered pair product.',
      link: '',
    },
    {
      id: 'cube_of_a_sum_identity',
      cat: 'expansion',
      title: 'Cube of a Sum Identity',
      lhs: '(a + b)^3',
      rhs: 'a^3 + 3a^2 b + 3ab^2 + b^3',
      lhsAlts: ['(a+b)^3', 'sum cubed'],
      rhsAlts: ['a^3+3a^2b+3ab^2+b^3'],
      tip: 'Coefficients follow the third row of Pascal\'s triangle: 1, 3, 3, 1.',
      link: '/algebra/polynomials/operations#4',
    },
    {
      id: 'cube_of_a_difference_identity',
      cat: 'expansion',
      title: 'Cube of a Difference Identity',
      lhs: '(a - b)^3',
      rhs: 'a^3 - 3a^2 b + 3ab^2 - b^3',
      lhsAlts: ['(a-b)^3', 'difference cubed'],
      rhsAlts: ['a^3-3a^2b+3ab^2-b^3'],
      tip: 'Same coefficients as the cube of a sum, with alternating signs.',
      link: '/algebra/polynomials/operations#4',
    },

    // ─── FACTORING PATTERNS (7) ───────────────────────────
    {
      id: 'difference_of_squares_identity',
      cat: 'factoring',
      title: 'Difference of Squares Identity',
      lhs: 'a^2 - b^2',
      rhs: '(a + b)(a - b)',
      lhsAlts: ['a^2-b^2', 'difference of squares'],
      rhsAlts: ['(a+b)(a-b)'],
      tip: 'The most-used factoring identity in algebra. A sum of squares $a^2 + b^2$ does not factor over the reals.',
      link: '/algebra/polynomials/factoring#6',
    },
    {
      id: 'sum_of_cubes_identity',
      cat: 'factoring',
      title: 'Sum of Cubes Identity',
      lhs: 'a^3 + b^3',
      rhs: '(a + b)(a^2 - ab + b^2)',
      lhsAlts: ['a^3+b^3', 'sum of cubes'],
      rhsAlts: ['(a+b)(a^2-ab+b^2)'],
      tip: 'The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.',
      link: '/algebra/polynomials/factoring#8',
    },
    {
      id: 'difference_of_cubes_identity',
      cat: 'factoring',
      title: 'Difference of Cubes Identity',
      lhs: 'a^3 - b^3',
      rhs: '(a - b)(a^2 + ab + b^2)',
      lhsAlts: ['a^3-b^3', 'difference of cubes'],
      rhsAlts: ['(a-b)(a^2+ab+b^2)'],
      tip: 'Sign pattern: same, opposite, always positive. Mirror image of the sum-of-cubes pattern.',
      link: '/algebra/polynomials/factoring#8',
    },
    {
      id: 'difference_of_even_powers_identity',
      cat: 'factoring',
      title: 'Difference of Even Powers Identity',
      lhs: 'x^{2n} - a^{2n}',
      rhs: '(x^n - a^n)(x^n + a^n)',
      lhsAlts: ['x^(2n)-a^(2n)', 'even power difference'],
      rhsAlts: ['(x^n-a^n)(x^n+a^n)'],
      tip: 'Apply the difference-of-squares pattern to $n$-th powers. Each factor may decompose further.',
      link: '/algebra/polynomials/factoring#9',
    },
    {
      id: 'difference_of_powers_identity_odd_n',
      cat: 'factoring',
      title: 'Difference of Powers Identity (odd n)',
      lhs: 'x^n - a^n',
      rhs: '(x - a)(x^{n-1} + a x^{n-2} + \\cdots + a^{n-1})',
      lhsAlts: ['x^n-a^n', 'general difference of powers'],
      rhsAlts: ['(x-a)(x^(n-1)+...)'],
      tip: 'For any positive integer $n$, $(x - a)$ divides $x^n - a^n$. Complete factorization when $n$ is odd.',
      link: '/algebra/polynomials/factoring#9',
    },
    {
      id: 'sum_of_powers_identity_odd_n',
      cat: 'factoring',
      title: 'Sum of Powers Identity (odd n)',
      lhs: 'x^n + a^n',
      rhs: '(x + a)(x^{n-1} - a x^{n-2} + \\cdots + a^{n-1})',
      lhsAlts: ['x^n+a^n', 'sum of powers'],
      rhsAlts: ['(x+a)(x^(n-1)-...)'],
      tip: 'Holds only for odd $n$. A sum of even powers does not factor over the reals.',
      link: '/algebra/polynomials/factoring#9',
    },
    {
      id: 'trinomial_factoring_identity',
      cat: 'factoring',
      title: 'Trinomial Factoring Identity',
      lhs: 'x^2 + (a + b)x + ab',
      rhs: '(x + a)(x + b)',
      lhsAlts: ['x^2+(a+b)x+ab', 'monic trinomial'],
      rhsAlts: ['(x+a)(x+b)'],
      tip: 'A monic trinomial factors when two numbers multiply to the constant and add to the linear coefficient.',
      link: '/algebra/polynomials/factoring#4',
    },

    // ─── BINOMIAL EXPANSION (4) ───────────────────────────
    {
      id: 'binomial_theorem_identity',
      cat: 'binomial',
      title: 'Binomial Theorem Identity',
      lhs: '(x + y)^n',
      rhs: '\\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k',
      lhsAlts: ['(x+y)^n', 'binomial expansion'],
      rhsAlts: ['sum binom n k'],
      tip: 'Expands any non-negative integer power of a binomial into $n + 1$ terms weighted by binomial coefficients.',
      link: '/algebra/identities#general',
    },
    {
      id: 'binomial_coefficient_identity',
      cat: 'binomial',
      title: 'Binomial Coefficient Identity',
      lhs: '\\binom{n}{k}',
      rhs: '\\dfrac{n!}{k!\\,(n-k)!}',
      lhsAlts: ['n choose k', 'binomial coefficient'],
      rhsAlts: ['n!/(k!(n-k)!)', 'factorial form'],
      tip: 'Defines $\\binom{n}{k}$ via factorials. Counts the number of ways to choose $k$ items from $n$.',
      link: '/algebra/identities#general',
    },
    {
      id: 'pascals_identity',
      cat: 'binomial',
      title: 'Pascal\'s Identity',
      lhs: '\\binom{n}{k} + \\binom{n}{k+1}',
      rhs: '\\binom{n+1}{k+1}',
      lhsAlts: ['pascal', 'pascal recurrence'],
      rhsAlts: ['binom(n+1,k+1)'],
      tip: 'Each entry in Pascal\'s triangle equals the sum of the two entries directly above it.',
      link: '/algebra/identities#general',
    },
    {
      id: 'binomial_symmetry_identity',
      cat: 'binomial',
      title: 'Binomial Symmetry Identity',
      lhs: '\\binom{n}{n-k}',
      rhs: '\\binom{n}{k}',
      lhsAlts: ['binom(n,n-k)', 'symmetry'],
      rhsAlts: ['binom(n,k)'],
      tip: 'Choosing $k$ items to include is equivalent to choosing $n - k$ items to leave out.',
      link: '',
    },

    // ─── EXPONENT LAWS (8) ────────────────────────────────
    {
      id: 'product_rule_identity_exponents',
      cat: 'exponent',
      title: 'Product Rule Identity (Exponents)',
      lhs: 'a^m \\cdot a^n',
      rhs: 'a^{m+n}',
      lhsAlts: ['a^m a^n', 'product of powers'],
      rhsAlts: ['a^(m+n)'],
      tip: 'Multiplying powers with the same base: keep the base, add the exponents.',
      link: '/algebra/powers/exponent-rules#1',
    },
    {
      id: 'quotient_rule_identity_exponents',
      cat: 'exponent',
      title: 'Quotient Rule Identity (Exponents)',
      lhs: '\\dfrac{a^m}{a^n}',
      rhs: 'a^{m-n}',
      lhsAlts: ['a^m/a^n', 'quotient of powers'],
      rhsAlts: ['a^(m-n)'],
      tip: 'Dividing powers with the same base: keep the base, subtract the exponents.',
      link: '/algebra/powers/exponent-rules#2',
    },
    {
      id: 'power_of_a_power_identity',
      cat: 'exponent',
      title: 'Power of a Power Identity',
      lhs: '(a^m)^n',
      rhs: 'a^{mn}',
      lhsAlts: ['(a^m)^n', 'power of power'],
      rhsAlts: ['a^(mn)'],
      tip: 'Raising a power to a power: keep the base, multiply the exponents.',
      link: '/algebra/powers/exponent-rules#3',
    },
    {
      id: 'power_of_a_product_identity',
      cat: 'exponent',
      title: 'Power of a Product Identity',
      lhs: '(ab)^n',
      rhs: 'a^n \\, b^n',
      lhsAlts: ['(ab)^n'],
      rhsAlts: ['a^n b^n'],
      tip: 'A power distributes over a product: each factor takes the same exponent.',
      link: '/algebra/powers/exponent-rules#4',
    },
    {
      id: 'power_of_a_quotient_identity',
      cat: 'exponent',
      title: 'Power of a Quotient Identity',
      lhs: '\\left(\\dfrac{a}{b}\\right)^n',
      rhs: '\\dfrac{a^n}{b^n}',
      lhsAlts: ['(a/b)^n'],
      rhsAlts: ['a^n/b^n'],
      tip: 'A power distributes over a fraction: numerator and denominator each take the exponent.',
      link: '/algebra/powers/exponent-rules#5',
    },
    {
      id: 'zero_exponent_identity',
      cat: 'exponent',
      title: 'Zero Exponent Identity',
      lhs: 'a^0',
      rhs: '1',
      lhsAlts: ['a^0', 'zero exponent'],
      rhsAlts: ['one'],
      tip: 'Any nonzero base raised to the zero power equals 1. The expression $0^0$ is indeterminate.',
      link: '/algebra/powers/exponent-rules#7',
    },
    {
      id: 'negative_exponent_identity',
      cat: 'exponent',
      title: 'Negative Exponent Identity',
      lhs: 'a^{-n}',
      rhs: '\\dfrac{1}{a^n}',
      lhsAlts: ['a^(-n)', 'negative exponent'],
      rhsAlts: ['1/a^n', 'reciprocal'],
      tip: 'A negative exponent means the reciprocal of the positive power. It does not make the value negative.',
      link: '/algebra/powers/exponent-rules#6',
    },
    {
      id: 'negative_exponent_flip_identity',
      cat: 'exponent',
      title: 'Negative Exponent Flip Identity',
      lhs: '\\left(\\dfrac{a}{b}\\right)^{-n}',
      rhs: '\\left(\\dfrac{b}{a}\\right)^n',
      lhsAlts: ['(a/b)^(-n)', 'flip'],
      rhsAlts: ['(b/a)^n'],
      tip: 'A negative exponent on a fraction inverts the fraction and makes the exponent positive.',
      link: '/algebra/powers/exponent-rules#5',
    },

    // ─── LOGARITHM IDENTITIES (8) ─────────────────────────
    {
      id: 'product_rule_identity_logarithms',
      cat: 'logarithm',
      title: 'Product Rule Identity (Logarithms)',
      lhs: '\\log_a(xy)',
      rhs: '\\log_a(x) + \\log_a(y)',
      lhsAlts: ['log(xy)', 'log of product'],
      rhsAlts: ['log(x)+log(y)'],
      tip: 'The logarithm of a product equals the sum of the logarithms. Multiplication inside becomes addition outside.',
      link: '/algebra/logarithms/rules#1',
    },
    {
      id: 'quotient_rule_identity_logarithms',
      cat: 'logarithm',
      title: 'Quotient Rule Identity (Logarithms)',
      lhs: '\\log_a\\!\\left(\\dfrac{x}{y}\\right)',
      rhs: '\\log_a(x) - \\log_a(y)',
      lhsAlts: ['log(x/y)', 'log of quotient'],
      rhsAlts: ['log(x)-log(y)'],
      tip: 'The logarithm of a quotient equals the difference of the logarithms.',
      link: '/algebra/logarithms/rules#2',
    },
    {
      id: 'power_rule_identity_logarithms',
      cat: 'logarithm',
      title: 'Power Rule Identity (Logarithms)',
      lhs: '\\log_a(x^n)',
      rhs: 'n \\, \\log_a(x)',
      lhsAlts: ['log(x^n)', 'log of power'],
      rhsAlts: ['n log(x)'],
      tip: 'An exponent inside a logarithm moves out front as a multiplier. The property that makes logarithms useful for simplification.',
      link: '/algebra/logarithms/rules#3',
    },
    {
      id: 'change_of_base_identity',
      cat: 'logarithm',
      title: 'Change of Base Identity',
      lhs: '\\log_a(x)',
      rhs: '\\dfrac{\\log_b(x)}{\\log_b(a)}',
      lhsAlts: ['log_a(x)', 'change of base'],
      rhsAlts: ['log_b(x)/log_b(a)'],
      tip: 'Converts a logarithm to any chosen base $b$. Used with $b = 10$ or $b = e$ for calculator evaluation.',
      link: '/algebra/logarithms/rules#4',
    },
    {
      id: 'logarithm_of_the_base_identity',
      cat: 'logarithm',
      title: 'Logarithm of the Base Identity',
      lhs: '\\log_a(a)',
      rhs: '1',
      lhsAlts: ['log_a(a)'],
      rhsAlts: ['one'],
      tip: 'The logarithm of the base itself is always 1, because $a^1 = a$.',
      link: '/algebra/logarithms#3',
    },
    {
      id: 'logarithm_of_one_identity',
      cat: 'logarithm',
      title: 'Logarithm of One Identity',
      lhs: '\\log_a(1)',
      rhs: '0',
      lhsAlts: ['log_a(1)', 'log of one'],
      rhsAlts: ['zero'],
      tip: 'The logarithm of 1 is always 0, in any base, because $a^0 = 1$.',
      link: '/algebra/logarithms#3',
    },
    {
      id: 'logarithm_of_an_exponential_identity',
      cat: 'logarithm',
      title: 'Logarithm of an Exponential Identity',
      lhs: '\\log_a(a^x)',
      rhs: 'x',
      lhsAlts: ['log_a(a^x)'],
      rhsAlts: ['x'],
      tip: 'The logarithm undoes the exponential of the same base.',
      link: '/algebra/logarithms#4',
    },
    {
      id: 'exponential_of_a_logarithm_identity',
      cat: 'logarithm',
      title: 'Exponential of a Logarithm Identity',
      lhs: 'a^{\\log_a(x)}',
      rhs: 'x',
      lhsAlts: ['a^(log_a(x))'],
      rhsAlts: ['x'],
      tip: 'The exponential undoes the logarithm of the same base. Defined for $x > 0$.',
      link: '/algebra/logarithms#4',
    },

    // ─── RADICAL RULES (5) ────────────────────────────────
    {
      id: 'radical_to_exponent_identity',
      cat: 'radical',
      title: 'Radical to Exponent Identity',
      lhs: '\\sqrt[n]{a}',
      rhs: 'a^{1/n}',
      lhsAlts: ['nth root', 'sqrt[n](a)'],
      rhsAlts: ['a^(1/n)', 'rational exponent'],
      tip: 'Bridges radical and exponential notation. Lets all radical operations be performed using exponent rules.',
      link: '/algebra/roots/rational-exponents#1',
    },
    {
      id: 'product_rule_identity_radicals',
      cat: 'radical',
      title: 'Product Rule Identity (Radicals)',
      lhs: '\\sqrt[n]{ab}',
      rhs: '\\sqrt[n]{a} \\cdot \\sqrt[n]{b}',
      lhsAlts: ['sqrt[n](ab)', 'root of product'],
      rhsAlts: ['sqrt[n](a) sqrt[n](b)'],
      tip: 'The $n$-th root of a product equals the product of the roots. Even $n$ requires non-negative operands.',
      link: '/algebra/roots/radical-rules#1',
    },
    {
      id: 'quotient_rule_identity_radicals',
      cat: 'radical',
      title: 'Quotient Rule Identity (Radicals)',
      lhs: '\\sqrt[n]{\\dfrac{a}{b}}',
      rhs: '\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}}',
      lhsAlts: ['sqrt[n](a/b)', 'root of quotient'],
      rhsAlts: ['sqrt[n](a)/sqrt[n](b)'],
      tip: 'The $n$-th root of a quotient equals the quotient of the roots.',
      link: '/algebra/roots/radical-rules#2',
    },
    {
      id: 'power_rule_identity_radicals',
      cat: 'radical',
      title: 'Power Rule Identity (Radicals)',
      lhs: '\\sqrt[n]{a^m}',
      rhs: 'a^{m/n}',
      lhsAlts: ['sqrt[n](a^m)'],
      rhsAlts: ['a^(m/n)'],
      tip: 'Combines radical-to-exponent with power-of-a-power. Even $n$ requires non-negative $a$.',
      link: '/algebra/roots/radical-rules#3',
    },
    {
      id: 'nested_radicals_identity',
      cat: 'radical',
      title: 'Nested Radicals Identity',
      lhs: '\\sqrt[m]{\\sqrt[n]{a}}',
      rhs: '\\sqrt[mn]{a}',
      lhsAlts: ['nested radical'],
      rhsAlts: ['sqrt[mn](a)'],
      tip: 'A radical inside a radical simplifies by multiplying the indices.',
      link: '/algebra/roots/radical-rules#4',
    },

    // ─── ABSOLUTE VALUE (4) ───────────────────────────────
    {
      id: 'absolute_value_product_identity',
      cat: 'absoluteValue',
      title: 'Absolute Value Product Identity',
      lhs: '|ab|',
      rhs: '|a| \\, |b|',
      lhsAlts: ['|ab|', 'abs of product'],
      rhsAlts: ['|a||b|'],
      tip: 'The absolute value of a product equals the product of the absolute values.',
      link: '',
    },
    {
      id: 'absolute_value_quotient_identity',
      cat: 'absoluteValue',
      title: 'Absolute Value Quotient Identity',
      lhs: '\\left|\\dfrac{a}{b}\\right|',
      rhs: '\\dfrac{|a|}{|b|}',
      lhsAlts: ['|a/b|', 'abs of quotient'],
      rhsAlts: ['|a|/|b|'],
      tip: 'The absolute value of a quotient equals the quotient of the absolute values. Requires $b \\neq 0$.',
      link: '',
    },
    {
      id: 'absolute_value_negation_identity',
      cat: 'absoluteValue',
      title: 'Absolute Value Negation Identity',
      lhs: '|-a|',
      rhs: '|a|',
      lhsAlts: ['|-a|', 'abs of negation'],
      rhsAlts: ['|a|'],
      tip: 'Negation does not change the absolute value. Reflects the symmetry $|{-x}| = |x|$.',
      link: '',
    },
    {
      id: 'absolute_value_square_identity',
      cat: 'absoluteValue',
      title: 'Absolute Value Square Identity',
      lhs: '|a|^2',
      rhs: 'a^2',
      lhsAlts: ['|a|^2', 'abs squared'],
      rhsAlts: ['a^2'],
      tip: 'Squaring erases sign, so $|a|^2$ and $a^2$ agree for every real $a$.',
      link: '',
    },

    // ─── FRACTION OPERATIONS (4) ──────────────────────────
    {
      id: 'common_denominator_addition_identity',
      cat: 'fraction',
      title: 'Common Denominator Addition Identity',
      lhs: '\\dfrac{a}{c} + \\dfrac{b}{c}',
      rhs: '\\dfrac{a + b}{c}',
      lhsAlts: ['a/c + b/c'],
      rhsAlts: ['(a+b)/c'],
      tip: 'When denominators match, add the numerators and keep the common denominator.',
      link: '',
    },
    {
      id: 'different_denominator_addition_identity',
      cat: 'fraction',
      title: 'Different Denominator Addition Identity',
      lhs: '\\dfrac{a}{b} + \\dfrac{c}{d}',
      rhs: '\\dfrac{ad + bc}{bd}',
      lhsAlts: ['a/b + c/d'],
      rhsAlts: ['(ad+bc)/(bd)'],
      tip: 'Cross-multiply to a common denominator $bd$, then add the resulting numerators.',
      link: '',
    },
    {
      id: 'fraction_multiplication_identity',
      cat: 'fraction',
      title: 'Fraction Multiplication Identity',
      lhs: '\\dfrac{a}{b} \\cdot \\dfrac{c}{d}',
      rhs: '\\dfrac{ac}{bd}',
      lhsAlts: ['(a/b)(c/d)'],
      rhsAlts: ['ac/(bd)'],
      tip: 'Multiply numerators across the top, denominators across the bottom.',
      link: '',
    },
    {
      id: 'fraction_division_identity',
      cat: 'fraction',
      title: 'Fraction Division Identity',
      lhs: '\\dfrac{a}{b} \\div \\dfrac{c}{d}',
      rhs: '\\dfrac{ad}{bc}',
      lhsAlts: ['(a/b)/(c/d)', 'complex fraction'],
      rhsAlts: ['ad/(bc)'],
      tip: 'Dividing by a fraction equals multiplying by its reciprocal. Covers complex (stacked) fractions too.',
      link: '',
    },

    // ─── POLYNOMIAL IDENTITIES (6) ────────────────────────
    {
      id: 'quadratic_formula_identity',
      cat: 'polynomial',
      title: 'Quadratic Formula Identity',
      lhs: 'x_{1,2}',
      rhs: '\\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      lhsAlts: ['x_{1,2}', 'quadratic solutions', 'roots'],
      rhsAlts: ['(-b\u00B1sqrt(b^2-4ac))/(2a)', 'quadratic formula'],
      tip: 'The two solutions of $ax^2 + bx + c = 0$ written directly from its coefficients.',
      link: '/algebra/equations/quadratic#4',
    },
    {
      id: 'discriminant_identity',
      cat: 'polynomial',
      title: 'Discriminant Identity',
      lhs: '\\Delta',
      rhs: 'b^2 - 4ac',
      lhsAlts: ['discriminant', 'delta'],
      rhsAlts: ['b^2-4ac'],
      tip: 'The discriminant of $ax^2 + bx + c = 0$. Sign determines whether roots are real-distinct, real-equal, or complex.',
      link: '/algebra/equations/quadratic#5',
    },
    {
      id: 'completing_the_square_identity',
      cat: 'polynomial',
      title: 'Completing the Square Identity',
      lhs: 'x^2 + bx',
      rhs: '\\left(x + \\dfrac{b}{2}\\right)^2 - \\dfrac{b^2}{4}',
      lhsAlts: ['x^2+bx', 'complete the square'],
      rhsAlts: ['(x+b/2)^2 - b^2/4'],
      tip: 'Rewrites a quadratic expression as a perfect square minus a constant. Half the linear coefficient, squared, added and subtracted.',
      link: '/algebra/equations/quadratic#3',
    },
    {
      id: 'vieta_sum_identity',
      cat: 'polynomial',
      title: 'Vieta Sum Identity',
      lhs: 'x_1 + x_2',
      rhs: '-\\dfrac{b}{a}',
      lhsAlts: ['sum of roots', 'vieta sum'],
      rhsAlts: ['-b/a'],
      tip: 'The sum of the roots of $ax^2 + bx + c = 0$ equals $-b/a$ \u2014 recoverable without solving the equation.',
      link: '/algebra/equations/quadratic#6',
    },
    {
      id: 'vieta_product_identity',
      cat: 'polynomial',
      title: 'Vieta Product Identity',
      lhs: 'x_1 \\, x_2',
      rhs: '\\dfrac{c}{a}',
      lhsAlts: ['product of roots', 'vieta product'],
      rhsAlts: ['c/a'],
      tip: 'The product of the roots of $ax^2 + bx + c = 0$ equals $c/a$.',
      link: '/algebra/equations/quadratic#6',
    },
    {
      id: 'remainder_theorem_identity',
      cat: 'polynomial',
      title: 'Remainder Theorem Identity',
      lhs: 'P(x)',
      rhs: '(x - c) \\, Q(x) + P(c)',
      lhsAlts: ['P(x)', 'remainder theorem'],
      rhsAlts: ['(x-c)Q(x)+P(c)'],
      tip: 'When $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ \u2014 no long division needed.',
      link: '/algebra/polynomials/rules#1',
    },
  ],

  extraFilters: [],

  properties: [
    {
      icon: '\u2295',
      title: 'Commutativity',
      body: 'Addition and multiplication of real numbers are commutative \u2014 order does not affect the result.',
      example: '$a + b = b + a, \\quad ab = ba$',
    },
    {
      icon: '\u2218',
      title: 'Associativity',
      body: 'Addition and multiplication are associative \u2014 grouping does not affect the result.',
      example: '$(a + b) + c = a + (b + c), \\quad (ab)c = a(bc)$',
    },
    {
      icon: '\u2297',
      title: 'Distributivity',
      body: 'Multiplication distributes over addition. This is the structural principle linking the two operations.',
      example: '$a(b + c) = ab + ac$',
    },
    {
      icon: '\u2205',
      title: 'Identity elements',
      body: '$0$ is the additive identity ($a + 0 = a$); $1$ is the multiplicative identity ($a \\cdot 1 = a$). These leave their operands unchanged.',
      example: '$7 + 0 = 7, \\quad 7 \\cdot 1 = 7$',
    },
    {
      icon: '\u2212',
      title: 'Inverse elements',
      body: 'Every $a$ has an additive inverse $-a$ such that $a + (-a) = 0$. Every nonzero $a$ has a multiplicative inverse $1/a$ such that $a \\cdot (1/a) = 1$.',
      example: '$5 + (-5) = 0, \\quad 5 \\cdot \\dfrac{1}{5} = 1$',
    },
  ],

  templates: {
    left:  (d) => `$${d.lhs}$`,
    right: (d) => `$${d.rhs}$`,
    full:  (d) => `$${d.lhs} \\;=\\; ${d.rhs}$`,
    input: (d) => `$${d.lhs}$`,
    detailLabels: { left: 'Left-hand side', right: 'Right-hand side' },
  },

  searchModes: [
    {
      id: 'byLhs',
      label: 'Find by LHS',
      placeholder: 'Search the left side (e.g., (a+b)^2, a^m a^n, log(xy))',
      mainKey: 'lhs',
      altKey:  'lhsAlts',
    },
    {
      id: 'byRhs',
      label: 'Find by RHS',
      placeholder: 'Search the right side (e.g., a^2+2ab+b^2, ab+ac)',
      mainKey: 'rhs',
      altKey:  'rhsAlts',
    },
  ],

  meta: {
    intro:               'Reference table of algebraic identities \u2014 equations that hold for all values in their domain. Try **puzzle** mode to drill, or browse the full',
    introLinkText:       'algebra section \u2192',
    articleHref:         '/algebra',
    toolTitle:           'Algebraic Identities Tool',
    toolSubtitle:        'Search by LHS, by RHS, by name \u2014 or pick a family.',
    categoriesTitle:     'Families of identities',
    categoriesSubtitle:  'Click a family to highlight its entries in the table above.',
    propertiesTitle:     'Field axioms',
    propertiesSubtitle:  'The structural rules governing arithmetic on real numbers.',
    referenceModeNote:   'Reference mode: click any card to see the full identity and details.',
    puzzleModeNote:      'Puzzle mode: drag each right-hand-side tile to its matching left-hand-side slot.',
  },

  theme: null,

  // -------------------------------------------------------
  // Quiz generator. Called on every "next question" by QuizWidget.
  // Rotates three question types at random:
  //   1. Given LHS, pick RHS.
  //   2. Given RHS, pick LHS.
  //   3. Given the identity, pick its family.
  // Each question has 4 options, one correct + three distractors.
  // -------------------------------------------------------
  quizGenerator: () => {
    const items      = ALGEBRAIC_IDENTITIES_DATASET.items;
    const categories = ALGEBRAIC_IDENTITIES_DATASET.categories;

    const rand    = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const pickN = (arr, n) => shuffle(arr).slice(0, n);

    const subject = rand(items);
    const type    = rand(['rhs', 'lhs', 'category']);

    if (type === 'rhs') {
      const distractors = pickN(
        items.filter((d) => d.rhs !== subject.rhs),
        3,
      ).map((d) => `$${d.rhs}$`);
      const correct = `$${subject.rhs}$`;
      return {
        question: `Which expression equals $${subject.lhs}$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    if (type === 'lhs') {
      const distractors = pickN(
        items.filter((d) => d.lhs !== subject.lhs),
        3,
      ).map((d) => `$${d.lhs}$`);
      const correct = `$${subject.lhs}$`;
      return {
        question: `Which expression equals $${subject.rhs}$?`,
        options:  shuffle([correct, ...distractors]),
        correct,
      };
    }

    // type === 'category'
    const catIds       = Object.keys(categories);
    const correctLabel = categories[subject.cat].label;
    const distractors  = pickN(
      catIds.filter((id) => id !== subject.cat),
      3,
    ).map((id) => categories[id].label);
    return {
      question: `Which family does $${subject.lhs} \\;=\\; ${subject.rhs}$ belong to?`,
      options:  shuffle([correctLabel, ...distractors]),
      correct:  correctLabel,
    };
  },
};

export default ALGEBRAIC_IDENTITIES_DATASET;