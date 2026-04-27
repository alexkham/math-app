const algebraFormulasList = [

  // ─── Category: Equations (6 entries) ─────────────────────────

  {
    name: 'Quadratic Formula',
    category: 'Equations',
    formula: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
    link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#4' },
    fields: {
      explanation: [
        `Gives the two solutions of any quadratic equation $ax^2 + bx + c = 0$ directly from its coefficients. The $\\pm$ produces two values: one using $+$, the other using $-$. The expression under the square root, $b^2 - 4ac$, is the discriminant — it determines whether the roots are real and distinct, real and equal, or complex.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: 'a, b, c', operation: 'compute discriminant b² − 4ac' },
            { value: '√Δ', operation: 'apply ± and divide by 2a' },
            { value: 'x₁, x₂', operation: '' }
          ],
          label: 'Quadratic Formula'
        }
      ],
      derivation: [
        `Derived by completing the square on $ax^2 + bx + c = 0$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$ax^2 + bx + c = 0$', operation: 'divide by $a$' },
            { expr: '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$', operation: 'complete the square' },
            { expr: '$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$', operation: 'take square root' },
            { expr: '$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}$', operation: 'isolate $x$' },
            { expr: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$a \\neq 0$. If $b^2 - 4ac < 0$, the roots are complex.`,
      related_formulas: `- [Discriminant](!/algebra/formulas#discriminant)\n- [Completing the Square](!/algebra/formulas#completing_the_square)\n- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_quadratic)`,
      related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Coefficient](!/algebra/definitions#coefficient)\n- [Standard Form](!/algebra/definitions#standard_form)`
    }
  },
 
  {
    name: 'Discriminant',
    category: 'Equations',
    formula: `$$\\Delta = b^2 - 4ac$$`,
    link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#5' },
    fields: {
      explanation: `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
      conditions: `Applies to quadratic equations in standard form $ax^2 + bx + c = 0$ with $a \\neq 0$.`,
      related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
      related_definitions: `- [Discriminant](!/algebra/definitions#discriminant)\n- [Coefficient](!/algebra/definitions#coefficient)`
    }
  },
 
  {
    name: 'Square Root Property',
    category: 'Equations',
    formula: `$$x^2 = p \\implies x = \\pm\\sqrt{p}$$`,
    link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
    fields: {
      explanation: `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
      conditions: `$p \\geq 0$ for real solutions. If $p < 0$, the solutions are complex.`,
      related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
      related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Principal Root](!/algebra/definitions#principal_root)`
    }
  },
 
  {
    name: 'Completing the Square',
    category: 'Equations',
    formula: `$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$$`,
    link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
    fields: {
      explanation: `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
      derivation: [
        `Expand the right side to verify.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\left(x + \\frac{b}{2}\\right)^2$', operation: 'expand' },
            { expr: '$x^2 + 2 \\cdot x \\cdot \\frac{b}{2} + \\frac{b^2}{4}$', operation: 'simplify' },
            { expr: '$x^2 + bx + \\frac{b^2}{4}$', operation: 'subtract $\\frac{b^2}{4}$' },
            { expr: '$x^2 + bx$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)\n- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
      related_definitions: `- [Standard Form](!/algebra/definitions#standard_form)\n- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)`
    }
  },
 
  {
    name: 'Absolute Value Equation',
    category: 'Equations',
    formula: `$$|p| = b \\implies p = b \\text{ or } p = -b \\quad (b > 0)$$`,
    link: { label: 'Absolute Value Equations', url: '/algebra/equations/absolute-value#2' },
    fields: {
      explanation: `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
      conditions: `$b > 0$. If $b = 0$, then $p = 0$ (single solution). If $b < 0$, no solution.`,
      related_formulas: `- [Absolute Value Inequalities](!/algebra/formulas#absolute_value_inequalities)`,
      related_definitions: `- [Absolute Value](!/algebra/definitions#absolute_value)\n- [Solution Set](!/algebra/definitions#solution_set)`
    }
  },
 
  {
    name: 'Absolute Value Inequalities',
    category: 'Equations',
    formula: `$$|p| < b \\implies -b < p < b \\qquad |p| > b \\implies p < -b \\text{ or } p > b$$`,
    link: { label: 'Absolute Value Inequalities', url: '/algebra/inequalities/absolute-value#1' },
    fields: {
      explanation: `A less-than inequality produces a compound inequality (a bounded interval). A greater-than inequality produces a disjunction (two unbounded rays).`,
      conditions: `$b > 0$. Same pattern holds for $\\leq$ and $\\geq$.`,
      variants: `Weak form:\n\n$$|p| \\leq b \\implies -b \\leq p \\leq b$$\n\n$$|p| \\geq b \\implies p \\leq -b \\text{ or } p \\geq b$$`,
      related_formulas: `- [Absolute Value Equation](!/algebra/formulas#absolute_value_equation)`,
      related_definitions: `- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality)\n- [Compound Inequality](!/algebra/definitions#compound_inequality)\n- [Interval Notation](!/algebra/definitions#interval_notation)`
    }
  },


  // ─── Category: Logarithm Rules (8 entries) ──────────────────


  {
    name: 'Product Rule (Logarithms)',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(xy) = \\log_a(x) + \\log_a(y)$$`,
    link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#1' },
    fields: {
      explanation: `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
      derivation: [
        `Let $\\log_a(x) = m$ and $\\log_a(y) = n$, so $a^m = x$ and $a^n = y$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$xy = a^m \\cdot a^n$', operation: 'product rule for exponents' },
            { expr: '$xy = a^{m+n}$', operation: 'convert to log form' },
            { expr: '$\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$', tag: 'result' }
          ]
        }
      ],
      conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
      related_formulas: `- [Quotient Rule (Logarithms)](!/algebra/formulas#quotient_rule_logarithms)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
      related_definitions: `- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_logarithms)`
    }
  },

  {
    name: 'Quotient Rule (Logarithms)',
    category: 'Logarithm Rules',
    formula: `$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$$`,
    link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#2' },
    fields: {
      explanation: `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
      conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
      related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
      related_definitions: `- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_logarithms)`
    }
  },

  {
    name: 'Power Rule (Logarithms)',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(x^n) = n \\cdot \\log_a(x)$$`,
    link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#3' },
    fields: {
      explanation: `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
      conditions: `$a > 0$, $a \\neq 1$, $x > 0$. $n$ can be any real number.`,
      related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
      related_definitions: `- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_logarithms)`
    }
  },

  {
    name: 'Change of Base Formula',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$`,
    link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#4' },
    fields: {
      explanation: [
        `Converts a logarithm from one base to another. Most commonly used with $b = 10$ or $b = e$ to evaluate logarithms on a calculator, which only has $\\log$ and $\\ln$ keys.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: 'log_a(x)', operation: 'compute log_b of both x and a' },
            { value: 'log_b(x) and log_b(a)', operation: 'divide' },
            { value: 'log_b(x) / log_b(a)', operation: '' }
          ],
          label: 'Change of Base'
        }
      ],
      derivation: [
        `Let $\\log_a(x) = k$, so $a^k = x$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$a^k = x$', operation: 'take $\\log_b$ of both sides' },
            { expr: '$\\log_b(a^k) = \\log_b(x)$', operation: 'power rule' },
            { expr: '$k \\cdot \\log_b(a) = \\log_b(x)$', operation: 'divide by $\\log_b(a)$' },
            { expr: '$k = \\frac{\\log_b(x)}{\\log_b(a)}$', tag: 'result' }
          ]
        }
      ],
      conditions: `$a > 0$, $a \\neq 1$, $b > 0$, $b \\neq 1$, $x > 0$.`,
      variants: `Common special case using natural log:\n\n$$\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$$`,
      related_formulas: `- [Log of the Base](!/algebra/formulas#log_identity_base)`,
      related_definitions: `- [Change of Base Formula](!/algebra/definitions#change_of_base_formula)\n- [Common Logarithm](!/algebra/definitions#common_logarithm)\n- [Natural Logarithm](!/algebra/definitions#natural_logarithm)`
    }
  },

  {
    name: 'Log of the Base',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(a) = 1$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
    fields: {
      explanation: `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
      related_formulas: `- [Log of One](!/algebra/formulas#log_identity_one)\n- [Log–Exp Inverse](!/algebra/formulas#log_exp_inverse)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Base of a Logarithm](!/algebra/definitions#base_of_a_logarithm)`
    }
  },

  {
    name: 'Log of One',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(1) = 0$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
    fields: {
      explanation: `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
      related_formulas: `- [Log of the Base](!/algebra/formulas#log_identity_base)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)`
    }
  },

  {
    name: 'Log–Exp Inverse',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(a^x) = x$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
    fields: {
      explanation: `Applying a logarithm to its own base's exponential cancels both operations, returning the exponent. The log "undoes" the exponential.`,
      related_formulas: `- [Exp–Log Inverse](!/algebra/formulas#exp_log_inverse)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Logarithmic Function](!/algebra/definitions#logarithmic_function)`
    }
  },

  {
    name: 'Exp–Log Inverse',
    category: 'Logarithm Rules',
    formula: `$$a^{\\log_a(x)} = x$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
    fields: {
      explanation: `Applying an exponential to its own base's logarithm cancels both operations, returning the argument. The exponential "undoes" the log.`,
      conditions: `$x > 0$, $a > 0$, $a \\neq 1$.`,
      related_formulas: `- [Log–Exp Inverse](!/algebra/formulas#log_exp_inverse)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Exponential Function](!/algebra/definitions#exponential_function)`
    }
  },



  // ─── Category: Identities & Factoring (11 entries) ──────────


  {
    name: 'Difference of Squares',
    category: 'Identities & Factoring',
    formula: `$$a^2 - b^2 = (a + b)(a - b)$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#6' },
    fields: {
      explanation: `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
      derivation: [
        `Expand the right side.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + b)(a - b)$', operation: 'distribute' },
            { expr: '$a^2 - ab + ab - b^2$', operation: 'cancel $-ab + ab$' },
            { expr: '$a^2 - b^2$', tag: 'result' }
          ]
        }
      ],
      conditions: `Applies only to subtraction. A sum of squares $a^2 + b^2$ does not factor over the reals.`,
      related_formulas: `- [General Difference of Even Powers](!/algebra/formulas#general_difference_even_powers)`,
      related_definitions: `- [Difference of Squares](!/algebra/definitions#difference_of_squares)\n- [Factoring](!/algebra/definitions#factoring)`
    }
  },

  {
    name: 'Square of a Sum',
    category: 'Identities & Factoring',
    formula: `$$(a + b)^2 = a^2 + 2ab + b^2$$`,
    link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
    fields: {
      explanation: `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
      derivation: [
        `Multiply $(a + b)$ by itself.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + b)(a + b)$', operation: 'distribute' },
            { expr: '$a^2 + ab + ab + b^2$', operation: 'combine like terms' },
            { expr: '$a^2 + 2ab + b^2$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Square of a Difference](!/algebra/formulas#square_of_a_difference)\n- [Completing the Square](!/algebra/formulas#completing_the_square)`,
      related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Square of a Difference',
    category: 'Identities & Factoring',
    formula: `$$(a - b)^2 = a^2 - 2ab + b^2$$`,
    link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
    fields: {
      explanation: `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
      related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
      related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Cube of a Sum',
    category: 'Identities & Factoring',
    formula: `$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$`,
    link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
    fields: {
      explanation: `Cubing a binomial sum. The coefficients follow the third row of Pascal's triangle: 1, 3, 3, 1.`,
      related_formulas: `- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)\n- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)`,
      related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Cube of a Difference',
    category: 'Identities & Factoring',
    formula: `$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$`,
    link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
    fields: {
      explanation: `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
      related_formulas: `- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)\n- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)`,
      related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Sum of Cubes',
    category: 'Identities & Factoring',
    formula: `$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
    fields: {
      explanation: `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
      derivation: [
        `Expand the right side to verify.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + b)(a^2 - ab + b^2)$', operation: 'distribute $a$, then $b$' },
            { expr: '$a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$', operation: 'cancel' },
            { expr: '$a^3 + b^3$', tag: 'result' }
          ]
        }
      ],
      related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)`,
      related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
    }
  },

  {
    name: 'Difference of Cubes',
    category: 'Identities & Factoring',
    formula: `$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
    fields: {
      explanation: `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
      related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)`,
      related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
    }
  },

  {
    name: 'Trinomial Factoring Pattern',
    category: 'Identities & Factoring',
    formula: `$$x^2 + (a + b)x + ab = (x + a)(x + b)$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#4' },
    fields: {
      explanation: `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
      related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)\n- [Square of a Difference](!/algebra/formulas#square_of_a_difference)`,
      related_definitions: `- [Factoring](!/algebra/definitions#factoring)\n- [Trinomial](!/algebra/definitions#trinomial)`
    }
  },

  {
    name: 'General Difference of Even Powers',
    category: 'Identities & Factoring',
    formula: `$$x^{2n} - a^{2n} = (x^n - a^n)(x^n + a^n)$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
    fields: {
      explanation: `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
      related_formulas: `- [Difference of Squares](!/algebra/formulas#difference_of_squares)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_odd)`,
      related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
    }
  },

  {
    name: 'General Difference of Powers (odd n)',
    category: 'Identities & Factoring',
    formula: `$$x^n - a^n = (x - a)(x^{n-1} + ax^{n-2} + \\cdots + a^{n-1})$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
    fields: {
      explanation: `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
      conditions: `Valid for all positive integers $n$. When $n$ is odd, this is the complete factorization over the reals.`,
      related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [General Sum of Powers (odd n)](!/algebra/formulas#general_sum_odd)`,
      related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
    }
  },

  {
    name: 'General Sum of Powers (odd n)',
    category: 'Identities & Factoring',
    formula: `$$x^n + a^n = (x + a)(x^{n-1} - ax^{n-2} + \\cdots + a^{n-1})$$`,
    link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
    fields: {
      explanation: `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
      conditions: `$n$ must be a positive odd integer.`,
      related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_odd)`,
      related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
    }
  },




  // ─── Category: Exponent Rules (8 entries) ───────────────────


  {
    name: 'Product Rule (Exponents)',
    category: 'Exponent Rules',
    formula: `$$a^m \\cdot a^n = a^{m+n}$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#1' },
    fields: {
      explanation: `Multiplying powers with the same base: keep the base, add the exponents.`,
      conditions: `$a \\neq 0$ when $m$ or $n$ is negative or zero.`,
      related_formulas: `- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
      related_definitions: `- [Product Rule (Exponents)](!/algebra/definitions#product_rule_exponents)\n- [Power](!/algebra/definitions#power)`
    }
  },

  {
    name: 'Quotient Rule (Exponents)',
    category: 'Exponent Rules',
    formula: `$$\\frac{a^m}{a^n} = a^{m-n}$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#2' },
    fields: {
      explanation: `Dividing powers with the same base: keep the base, subtract the exponents.`,
      conditions: `$a \\neq 0$.`,
      related_formulas: `- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)\n- [Negative Exponent](!/algebra/formulas#negative_exponent)`,
      related_definitions: `- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_exponents)\n- [Power](!/algebra/definitions#power)`
    }
  },

  {
    name: 'Power of a Power',
    category: 'Exponent Rules',
    formula: `$$(a^m)^n = a^{mn}$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#3' },
    fields: {
      explanation: `Raising a power to another power: keep the base, multiply the exponents.`,
      related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
      related_definitions: `- [Power of a Power](!/algebra/definitions#power_of_a_power)`
    }
  },

  {
    name: 'Power of a Product',
    category: 'Exponent Rules',
    formula: `$$(ab)^n = a^n \\cdot b^n$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#4' },
    fields: {
      explanation: `A power applied to a product distributes to each factor.`,
      related_formulas: `- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
      related_definitions: `- [Power of a Product](!/algebra/definitions#power_of_a_product)`
    }
  },

  {
    name: 'Power of a Quotient',
    category: 'Exponent Rules',
    formula: `$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
    fields: {
      explanation: `A power applied to a fraction distributes to numerator and denominator separately.`,
      conditions: `$b \\neq 0$.`,
      related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)`,
      related_definitions: `- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
    }
  },

  {
    name: 'Zero Exponent',
    category: 'Exponent Rules',
    formula: `$$a^0 = 1 \\quad (a \\neq 0)$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#7' },
    fields: {
      explanation: `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
      conditions: `$a \\neq 0$. The expression $0^0$ is indeterminate.`,
      related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
      related_definitions: `- [Zero Exponent](!/algebra/definitions#zero_exponent)`
    }
  },

  {
    name: 'Negative Exponent',
    category: 'Exponent Rules',
    formula: `$$a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#6' },
    fields: {
      explanation: `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
      conditions: `$a \\neq 0$.`,
      related_formulas: `- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
      related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)`
    }
  },

  {
    name: 'Negative Exponent Flip',
    category: 'Exponent Rules',
    formula: `$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$`,
    link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
    fields: {
      explanation: `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
      conditions: `$a \\neq 0$ and $b \\neq 0$.`,
      related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
      related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)\n- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
    }
  },


  // ─── Category: Radical Rules (7 entries) ─────────────────────


  {
    name: 'Radical–Exponent Conversion',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{a} = a^{1/n}$$`,
    link: { label: 'Rational Exponents', url: '/algebra/roots/rational-exponents#1' },
    fields: {
      explanation: `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
      related_formulas: `- [Power Rule (Radicals)](!/algebra/formulas#power_rule_radicals)`,
      related_definitions: `- [Rational Exponent](!/algebra/definitions#rational_exponent)\n- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
    }
  },

  {
    name: 'Product Rule (Radicals)',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$`,
    link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#1' },
    fields: {
      explanation: `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
      conditions: `For even $n$: $a \\geq 0$ and $b \\geq 0$. For odd $n$: no restriction.`,
      related_formulas: `- [Quotient Rule (Radicals)](!/algebra/formulas#quotient_rule_radicals)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
      related_definitions: `- [Product Rule (Radicals)](!/algebra/definitions#product_rule_radicals)`
    }
  },

  {
    name: 'Quotient Rule (Radicals)',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$`,
    link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#2' },
    fields: {
      explanation: `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
      conditions: `$b \\neq 0$. For even $n$: $a \\geq 0$ and $b > 0$.`,
      related_formulas: `- [Product Rule (Radicals)](!/algebra/formulas#product_rule_radicals)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
      related_definitions: `- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_radicals)`
    }
  },

  {
    name: 'Power Rule (Radicals)',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{a^m} = a^{m/n}$$`,
    link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#3' },
    fields: {
      explanation: `Combines the radical–exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
      conditions: `For even $n$: $a \\geq 0$.`,
      related_formulas: `- [Radical–Exponent Conversion](!/algebra/formulas#radical_exponent_conversion)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
      related_definitions: `- [Power Rule (Radicals)](!/algebra/definitions#power_rule_radicals)\n- [Rational Exponent](!/algebra/definitions#rational_exponent)`
    }
  },

  {
    name: 'Nested Radicals',
    category: 'Radical Rules',
    formula: `$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$`,
    link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#4' },
    fields: {
      explanation: `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
      related_formulas: `- [Power of a Power](!/algebra/formulas#power_of_a_power)\n- [Radical–Exponent Conversion](!/algebra/formulas#radical_exponent_conversion)`,
      related_definitions: `- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
    }
  },

  {
    name: 'Even Root Identity',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{a^n} = |a| \\quad (n \\text{ even})$$`,
    link: { label: 'Root Properties', url: '/algebra/roots/properties#4' },
    fields: {
      explanation: `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
      related_formulas: `- [Odd Root Identity](!/algebra/formulas#odd_root_identity)`,
      related_definitions: `- [Principal Root](!/algebra/definitions#principal_root)\n- [Absolute Value](!/algebra/definitions#absolute_value)`
    }
  },

  {
    name: 'Odd Root Identity',
    category: 'Radical Rules',
    formula: `$$\\sqrt[n]{a^n} = a \\quad (n \\text{ odd})$$`,
    link: { label: 'Root Properties', url: '/algebra/roots/properties#5' },
    fields: {
      explanation: `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
      related_formulas: `- [Even Root Identity](!/algebra/formulas#even_root_identity)`,
      related_definitions: `- [Root](!/algebra/definitions#root)\n- [Index](!/algebra/definitions#index)`
    }
  },

// ─── Category: Polynomial Theorems (8 entries) ──────────────

  {
    name: 'Remainder Theorem',
    category: 'Polynomial Theorems',
    formula: `$$P(x) = (x - c) \\cdot Q(x) + P(c)$$`,
    link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#1' },
    fields: {
      explanation: `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
      conditions: `$P(x)$ is a polynomial. $c$ is any real number.`,
      related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
      related_definitions: `- [Remainder Theorem](!/algebra/definitions#remainder_theorem)\n- [Polynomial](!/algebra/definitions#polynomial)`
    }
  },

  {
    name: 'Factor Theorem',
    category: 'Polynomial Theorems',
    formula: `$$(x - c) \\text{ is a factor of } P(x) \\iff P(c) = 0$$`,
    link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#3' },
    fields: {
      explanation: `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
      related_formulas: `- [Remainder Theorem](!/algebra/formulas#remainder_theorem)\n- [Rational Root Theorem](!/algebra/formulas#rational_root_theorem)`,
      related_definitions: `- [Factor Theorem](!/algebra/definitions#factor_theorem)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)`
    }
  },

  {
    name: 'Rational Root Theorem',
    category: 'Polynomial Theorems',
    formula: `$$\\text{If } \\frac{p}{q} \\text{ is a root: } p \\mid a_0 \\text{ and } q \\mid a_n$$`,
    link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#5' },
    fields: {
      explanation: `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
      conditions: `All coefficients must be integers. $a_n \\neq 0$. The theorem finds rational roots only — irrational and complex roots require other methods.`,
      related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
      related_definitions: `- [Rational Root Theorem](!/algebra/definitions#rational_root_theorem)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)\n- [Constant Term](!/algebra/definitions#constant_term)`
    }
  },

  {
    name: 'Vieta\'s Formulas (Quadratic)',
    category: 'Polynomial Theorems',
    formula: `$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$`,
    link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#6' },
    fields: {
      explanation: `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
      related_formulas: `- [Vieta's Formulas (General)](!/algebra/formulas#vietas_cubic)\n- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
      related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Coefficient](!/algebra/definitions#coefficient)`
    }
  },

  {
    name: 'Binomial Theorem',
    category: 'Polynomial Theorems',
    formula: `$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$`,
    link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
    // ⚠ Link target section exists but content is empty
    fields: {
      explanation: `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
      conditions: `$n$ is a non-negative integer.`,
      related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
      related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Binomial Coefficient',
    category: 'Polynomial Theorems',
    formula: `$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$`,
    link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
    // ⚠ Link target section exists but content is empty
    // 🆕 New entity for definitions backfill: binomial_coefficient
    fields: {
      explanation: `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read "$n$ choose $k$."`,
      conditions: `$0 \\leq k \\leq n$, both non-negative integers. By convention, $\\binom{n}{k} = 0$ when $k > n$ or $k < 0$.`,
      variants: `Symmetry property:\n\n$$\\binom{n}{k} = \\binom{n}{n-k}$$`,
      related_formulas: `- [Binomial Theorem](!/algebra/formulas#binomial_theorem)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
      related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Pascal\'s Rule',
    category: 'Polynomial Theorems',
    formula: `$$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$$`,
    link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
    // ⚠ Link target section exists but content is empty
    // 🆕 New entity for definitions backfill: pascals_rule
    fields: {
      explanation: `Each entry in Pascal's triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
      related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Binomial Theorem](!/algebra/formulas#binomial_theorem)`,
      related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
    }
  },

  {
    name: 'Vieta\'s Formulas (General)',
    category: 'Polynomial Theorems',
    formula: `$$r_1 + r_2 + r_3 = -a_{n-1} \\qquad r_1 r_2 r_3 = (-1)^n a_0$$`,
    link: { label: 'Polynomial Equations', url: '/algebra/equations/polynomial#9' },
    fields: {
      explanation: `Generalizes Vieta's formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
      notation: `For a monic polynomial $x^n + a_{n-1}x^{n-1} + \\cdots + a_0$, the elementary symmetric sums of the roots $r_1, \\ldots, r_n$ equal the coefficients (up to sign).`,
      conditions: `Leading coefficient is 1 (monic). For non-monic polynomials, divide all coefficients by $a_n$ first.`,
      related_formulas: `- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_quadratic)`,
      related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)`
    }
  },


//   {
//     name: 'Quadratic Formula3',
//     category: 'EquationsMock',
//     formula: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#4' },
//     fields: {
//       explanation: [
//         `Solves any quadratic equation $ax^2 + bx + c = 0$ directly from its coefficients. The $\\pm$ produces two values — one using the positive square root, one using the negative — giving both roots in a single expression.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: 'a, b, c', operation: 'b\u00B2 \u2212 4ac' },
//             { value: '\u0394', operation: '\u2212b \u00B1 \u221A\u0394 / 2a' },
//             { value: 'x\u2081, x\u2082' },
//           ],
//           label: 'ax\u00B2 + bx + c = 0',
//         },
//       ],
//       derivation: [
//         `Derived by completing the square on the general quadratic $ax^2 + bx + c = 0$.`,
//         {
//           component: 'MathDerivation',
//           title: 'Completing the square on the general form',
//           items: [
//             { expr: '$ax^2 + bx + c = 0$', tag: 'given' },
//             { expr: '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$', operation: 'divide by a, move c' },
//             { expr: '$x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}$', operation: 'add $(\\frac{b}{2a})^2$' },
//             { expr: '$(x + \\frac{b}{2a})^2 = \\frac{b^2 - 4ac}{4a^2}$', operation: 'factor left, simplify right' },
//             { expr: '$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}$', operation: 'take square root' },
//             { expr: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', operation: 'subtract $\\frac{b}{2a}$', tag: 'conclusion' },
//           ],
//         },
//       ],
//       conditions: `$a \\neq 0$. When $\\Delta > 0$: two distinct real roots. When $\\Delta = 0$: one repeated root. When $\\Delta < 0$: no real roots (two complex conjugate roots).`,
//     },
//   },
//   {
//     name: 'Quadratic Formula2',
//     category: 'EquationsMock',
//     formula: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#4' },
//     fields: {
//       explanation: [
//         `Solves any quadratic equation $ax^2 + bx + c = 0$ directly from its coefficients. The $\\pm$ produces two values — one using the positive square root, one using the negative — giving both roots in a single expression.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: 'a, b, c', operation: 'b\u00B2 \u2212 4ac' },
//             { value: '\u0394', operation: '\u2212b \u00B1 \u221A\u0394 / 2a' },
//             { value: 'x\u2081, x\u2082' },
//           ],
//           label: 'ax\u00B2 + bx + c = 0',
//         },
//       ],
//       conditions: `$a \\neq 0$. When $\\Delta > 0$: two distinct real roots. When $\\Delta = 0$: one repeated root. When $\\Delta < 0$: no real roots (two complex conjugate roots).`,
//       related_formulas: `- [Discriminant](!/algebra/formulas#discriminant)
// - [Completing the Square](!/algebra/formulas#completing_the_square)
// - [Vieta&apos;s Formulas (Quadratic)](!/algebra/formulas#vietas_quadratic)`,
//       related_definitions: `- [Discriminant](!/algebra/definitions#discriminant)
// - [Solution](!/algebra/definitions#solution)
// - [Coefficient](!/algebra/definitions#coefficient)`,
//     },
//   },
//     {
//       name: "Product Rule",
//       formula: "$x^m \\cdot x^n = x^{m+n}$",
//       fields: {
//         "Explanation": "This fundamental rule states that when multiplying powers with the same base, we add their exponents. It emerges from the basic definition of exponents as repeated multiplication. The rule simplifies complex calculations by reducing multiple multiplications to a single power operation. This concept is crucial in algebra and forms the foundation for more advanced exponential manipulations. Understanding this rule is essential for simplifying expressions, solving equations, and working with scientific notation. It reflects the natural way powers combine when representing repeated multiplication of the same number.",
//         "$x$": "Base number or variable",
//         "$m, n$": "Exponents (any real numbers)",
//         "$x^m, x^n$": "Powers being multiplied",
//         "$x^{m+n}$": "Resulting power after combining exponents",
//         "Example": "For $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$",
//         "Use Cases": "Simplifying algebraic expressions, calculating compound growth"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Quotient Rule",
//       formula: "$\\frac{x^m}{x^n} = x^{m-n}$",
//       fields: {
//         "Explanation": "This rule governs division of powers with the same base by subtracting their exponents. It's a direct consequence of the product rule and the fundamental properties of division. The rule elegantly simplifies what would otherwise be complex calculations involving multiple divisions. It's particularly powerful in algebra and calculus, where it helps simplify rational expressions and solve differential equations. The rule demonstrates how exponents behave when we're removing rather than adding factors, providing a systematic way to handle divisions of powers.",
//         "$x$": "Base number or variable",
//         "$m, n$": "Exponents (any real numbers)",
//         "$x^m$": "Numerator power",
//         "$x^n$": "Denominator power",
//         "$x^{m-n}$": "Resulting power after subtracting exponents",
//         "Example": "For $\\frac{2^5}{2^2} = 2^{5-2} = 2^3 = 8$",
//         "Use Cases": "Simplifying fractions, solving rational equations"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Power Rule",
//       formula: "$(x^m)^n = x^{m \\cdot n}$",
//       fields: {
//         "Explanation": "This rule shows that when raising a power to another power, we multiply the exponents. It represents the repeated application of an exponential expression and is crucial for understanding nested powers. The rule provides a straightforward way to handle complex expressions involving multiple layers of exponents. It's fundamental in understanding exponential growth and decay, and plays a vital role in fields ranging from compound interest calculations to physical decay processes. This rule demonstrates how exponents compound when applied repeatedly.",
//         "$x$": "Base number or variable",
//         "$m$": "Inner exponent",
//         "$n$": "Outer exponent",
//         "$(x^m)^n$": "Power raised to a power",
//         "$x^{m \\cdot n}$": "Resulting power after multiplying exponents",
//         "Example": "For $(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64$",
//         "Use Cases": "Computing compound interest, analyzing exponential growth"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Zero Exponent Rule",
//       formula: "$x^0 = 1, \\; x \\in \\mathbb{R} \\setminus \\{0\\}$",
//       fields: {
//         "Explanation": "This rule defines that any non-zero number raised to the power of zero equals one. It's a foundational concept that follows logically from the quotient rule of exponents. While seemingly simple, this rule is crucial in algebra and forms the basis for understanding more complex exponential relationships. It's particularly important in polynomial evaluation and series expansions. The rule fills a critical gap in exponent operations, providing a consistent framework for dealing with zero powers while maintaining the coherence of exponential arithmetic.",
//         "$x$": "Base number or variable (non-zero)",
//         "$0$": "Exponent",
//         "$1$": "Result for any non-zero base",
//         "$\\in$": "Belongs to (set membership symbol)",
//         "$\\mathbb{R} \\setminus \\{0\\}$": "All real numbers except zero",
//         "Example": "For $5^0 = 1$, $100^0 = 1$",
//         "Use Cases": "Polynomial evaluation, series expansions"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Negative Exponent Rule",
//       formula: "$x^{-n} = \\frac{1}{x^n}$",
//       fields: {
//         "Explanation": "This rule defines that a negative exponent means taking the reciprocal of the base raised to the positive exponent. It extends the concept of exponents to negative powers, maintaining consistency with other exponent rules. The rule is fundamental in understanding rational expressions and scientific notation. It provides a powerful tool for handling fractions and reciprocals in exponential form, making calculations more systematic and intuitive. This concept is essential in fields ranging from basic algebra to advanced calculus.",
//         "$x$": "Base number or variable (non-zero)",
//         "$-n$": "Negative exponent",
//         "$x^n$": "Positive power in denominator",
//         "Example": "For $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$",
//         "Use Cases": "Scientific notation, simplifying rational expressions"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Fractional Exponent Rule",
//       formula: "$x^{\\frac{m}{n}} = \\sqrt[n]{x^m}$",
//       fields: {
//         "Explanation": "This rule connects fractional exponents to nth roots, providing a bridge between exponential and radical notation. It's a powerful unification of roots and powers that extends the exponential concept to rational numbers. The rule demonstrates how any root can be expressed as a power, and vice versa, offering flexibility in mathematical manipulation. This relationship is fundamental in algebra and calculus, particularly in solving equations involving roots and powers. It provides a systematic way to handle expressions involving both roots and powers, making complex calculations more manageable.",
//         "$x$": "Base number or variable",
//         "$m$": "Numerator of fractional exponent",
//         "$n$": "Denominator of fractional exponent (root index)",
//         "$\\sqrt[n]{x^m}$": "Equivalent root expression",
//         "Example": "For $8^{\\frac{2}{3}} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$",
//         "Use Cases": "Solving radical equations, simplifying expressions with roots"
//       },
//       category: "Exponent Rules"
//     },
//     {
//       name: "Product to Power Rule",
//       formula: "$(xy)^n = x^n y^n$",
//       fields: {
//         "Explanation": "This rule states that the power of a product equals the product of the individual factors raised to that power. It demonstrates how exponents distribute over multiplication, similar to how multiplication distributes over addition. The rule is fundamental in simplifying complex expressions and is particularly useful when dealing with variables and coefficients in algebraic expressions. It provides a systematic way to expand powered products and is essential in various mathematical applications, from polynomial expansion to solving complex equations involving multiple variables.",
//         "$x, y$": "Base numbers or variables",
//         "$n$": "Exponent",
//         "$(xy)^n$": "Product raised to a power",
//         "$x^n y^n$": "Product of individual powers",
//         "Example": "For $(2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$",
//         "Use Cases": "Expanding algebraic expressions, simplifying product terms"
//       },
//       category: "Exponent Rules"
//     },


//     {
//       name: "Product Rule for Radicals",
//       formula: "$\\sqrt[n]{xy} = \\sqrt[n]{x} \\cdot \\sqrt[n]{y}$",
//       fields: {
//         "Explanation": "This fundamental rule states that the nth root of a product equals the product of the nth roots of each factor. It allows us to break down complex radical expressions into simpler, more manageable parts. The rule is crucial in simplifying radical expressions and solving equations involving roots. It demonstrates how radicals distribute over multiplication, similar to how exponents behave with products. This principle is essential in various mathematical applications, from algebraic simplification to calculus operations.",
//         "$\\sqrt[n]{}$": "Principal nth root operation",
//         "$x, y$": "Numbers or expressions under the radical",
//         "$n$": "Root index (when n=2, it's omitted as in square root)",
//         "Example": "For $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$",
//         "Use Cases": "Simplifying radical expressions, solving radical equations"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Quotient Rule for Radicals",
//       formula: "$\\sqrt[n]{\\frac{x}{y}} = \\frac{\\sqrt[n]{x}}{\\sqrt[n]{y}}$",
//       fields: {
//         "Explanation": "This rule establishes that the nth root of a quotient equals the quotient of the nth roots. It's a natural extension of the product rule and provides a systematic way to handle fractions under radicals. The rule is particularly useful in simplifying complex rational expressions involving radicals. It maintains the structural integrity of the fraction while making it easier to work with each part separately. This principle is fundamental in algebraic manipulation and in solving equations containing rational expressions with radicals.",
//         "$\\sqrt[n]{}$": "Principal nth root operation",
//         "$x$": "Numerator under the radical",
//         "$y$": "Denominator under the radical (y ≠ 0)",
//         "$n$": "Root index",
//         "Example": "For $\\sqrt{\\frac{16}{9}} = \\frac{\\sqrt{16}}{\\sqrt{9}} = \\frac{4}{3}$",
//         "Use Cases": "Simplifying radical fractions, rationalizing denominators"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Power Rule for Radicals",
//       formula: "$\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$",
//       fields: {
//         "Explanation": "This rule connects radicals to fractional exponents, providing a powerful bridge between root and power notation. It shows that taking the nth root of a power is equivalent to raising the base to a fractional exponent. This relationship is fundamental in advanced algebra and calculus, offering alternative ways to express and manipulate root expressions. The rule helps unify the concepts of roots and powers, making it easier to apply properties of exponents to radical expressions. This connection is crucial for solving complex equations and understanding the relationship between different forms of mathematical expression.",
//         "$\\sqrt[n]{}$": "Principal nth root operation",
//         "$x^m$": "Expression being rooted",
//         "$m$": "Power of the expression under the radical",
//         "$n$": "Root index",
//         "$\\frac{m}{n}$": "Resulting fractional exponent",
//         "Example": "For $\\sqrt{x^3} = x^{\\frac{3}{2}}$",
//         "Use Cases": "Converting between radical and exponential form"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Root of a Root Rule",
//       formula: "$\\sqrt[m]{\\sqrt[n]{x}} = \\sqrt[mn]{x}$",
//       fields: {
//         "Explanation": "This rule shows how to simplify nested radicals by combining their indices through multiplication. It provides a clean way to handle multiple layers of roots, reducing them to a single radical. The rule is essential in simplifying complex radical expressions and understanding how nested roots relate to single roots. It demonstrates the multiplicative nature of root indices when roots are nested. This concept is particularly useful in advanced algebra and in solving equations involving multiple radical operations.",
//         "$\\sqrt[m]{}$": "Outer root operation",
//         "$\\sqrt[n]{}$": "Inner root operation",
//         "$x$": "Expression under both radicals",
//         "$mn$": "Product of indices",
//         "Example": "For $\\sqrt{\\sqrt[3]{x}} = \\sqrt[6]{x}$",
//         "Use Cases": "Simplifying nested radicals, solving equations with multiple roots"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Like Root Addition Rule",
//       formula: "$a\\sqrt[n]{x} + b\\sqrt[n]{x} = (a+b)\\sqrt[n]{x}$",
//       fields: {
//         "Explanation": "This rule demonstrates how to combine like radicals through addition or subtraction, similar to combining like terms in algebra. It's a fundamental concept in radical arithmetic that treats radical expressions as algebraic terms. The rule emphasizes that only radicals with identical indices and radicands can be directly combined. This principle is essential for simplifying expressions and solving equations involving multiple radical terms. It helps organize and reduce complex radical expressions to their simplest form.",
//         "$a, b$": "Coefficients of the radical terms",
//         "$\\sqrt[n]{x}$": "Common radical factor",
//         "$n$": "Root index",
//         "$x$": "Expression under the radical",
//         "Example": "For $2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$",
//         "Use Cases": "Combining like radicals, simplifying radical expressions"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Even/Odd Root Property",
//       formula: "$\\sqrt[n]{(-x)} = \\begin{cases} -\\sqrt[n]{x} & \\text{if n is odd} \\\\ \\text{undefined over } \\mathbb{R} & \\text{if n is even and x > 0} \\end{cases}$",
//       fields: {
//         "Explanation": "This rule defines how radicals behave with negative numbers based on whether the index is even or odd. It's a crucial concept in understanding the domain of radical expressions. For odd indices, negative numbers can be handled by moving the negative sign outside the radical. For even indices, negative numbers under the radical lead to complex numbers. This principle is fundamental in determining the real solutions of radical equations and understanding the relationship between roots and complex numbers.",
//         "$\\sqrt[n]{}$": "Principal nth root operation",
//         "$x$": "Positive number or expression",
//         "$n$": "Root index (even or odd)",
//         "$\\mathbb{R}$": "Set of real numbers",
//         "Example": "For $\\sqrt[3]{-8} = -2$ but $\\sqrt{-4}$ is undefined over real numbers",
//         "Use Cases": "Determining domains of radical expressions, solving radical equations"
//       },
//       category: "Radical Rules"
//     },
//     {
//       name: "Rationalization Rule",
//       formula: "$\\frac{a}{\\sqrt[n]{b}} = \\frac{a\\sqrt[n]{b^{n-1}}}{\\sqrt[n]{b^n}} = \\frac{a\\sqrt[n]{b^{n-1}}}{b}$",
//       fields: {
//         "Explanation": "This rule shows how to eliminate radicals from the denominator of a fraction, a process known as rationalization. It's a crucial technique in simplifying radical expressions and preparing them for computation or further manipulation. The rule works by multiplying both numerator and denominator by an appropriate radical expression that will rationalize the denominator. This process is essential in standardizing radical expressions and is particularly important in calculus and advanced algebraic manipulations.",
//         "$a$": "Numerator (any real number)",
//         "$\\sqrt[n]{b}$": "Radical in denominator",
//         "$n$": "Root index",
//         "$b$": "Expression under the radical",
//         "$\\sqrt[n]{b^{n-1}}$": "Rationalizing factor",
//         "Example": "For $\\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}$",
//         "Use Cases": "Simplifying radical fractions, standardizing expressions"
//       },
//       category: "Radical Rules"
//     },


//     {
//       name: "Basic Definition of logarithm",
//       formula: "$y = \\log_b x \\iff b^y = x$",
//       fields: {
//         "Explanation": "This fundamental definition establishes the relationship between logarithms and exponentials. It states that the logarithm is the inverse function of exponentiation. The definition provides the foundation for all logarithmic operations and properties. Understanding this bidirectional relationship is crucial for solving exponential and logarithmic equations. It shows how logarithms can be used to convert multiplicative relationships into additive ones, making them a powerful tool in mathematics and various applications.",
//         "$y$": "The logarithm (exponent)",
//         "$b$": "Base of the logarithm",
//         "$x$": "The argument (number being taken logarithm of)",
//         "$b^y$": "The base raised to the logarithm power",
//         "$\\iff$": "If and only if (logical equivalence)",
//         "Example": "For $\\log_2 8 = 3$ because $2^3 = 8$",
//         "Use Cases": "Converting between logarithmic and exponential forms"
//       },
//       category: "Logarithm Laws"
//     },
//     {
//       name: "Product Rule for Logarithms",
//       formula: "$\\log_b(MN) = \\log_b M + \\log_b N$",
//       fields: {
//         "Explanation": "This rule states that the logarithm of a product equals the sum of the logarithms of its factors. It transforms multiplication into addition, making complex multiplicative calculations simpler. This property is fundamental in simplifying logarithmic expressions and solving equations. It's particularly useful in dealing with compound interest, exponential growth, and other applications where products need to be simplified.",
//         "$\\log_b$": "Logarithm with base b",
//         "$M, N$": "Positive real numbers",
//         "Example": "For $\\log_2(8 \\cdot 4) = \\log_2 8 + \\log_2 4 = 3 + 2 = 5$",
//         "Use Cases": "Simplifying products inside logarithms"
//       },
//       category: "Logarithm Laws"
//     },
//     {
//       name: "Quotient Rule for Logarithms",
//       formula: "$\\log_b(\\frac{M}{N}) = \\log_b M - \\log_b N$",
//       fields: {
//         "Explanation": "This rule states that the logarithm of a quotient equals the difference of logarithms. It transforms division into subtraction, making complex division calculations more manageable. The rule is essential in simplifying rational expressions involving logarithms and is particularly useful in solving equations where quotients appear inside logarithms.",
//         "$\\log_b$": "Logarithm with base b",
//         "$M$": "Numerator (positive real number)",
//         "$N$": "Denominator (positive real number)",
//         "Example": "For $\\log_2(\\frac{8}{2}) = \\log_2 8 - \\log_2 2 = 3 - 1 = 2$",
//         "Use Cases": "Simplifying quotients inside logarithms"
//       },
//       category: "Logarithm Laws"
//     },
//     {
//       name: "Power Rule for Logarithms",
//       formula: "$\\log_b(M^p) = p\\log_b M$",
//       fields: {
//         "Explanation": "This rule shows that the logarithm of a power equals the product of the exponent and the logarithm of the base. It transforms exponentiation into multiplication, providing a powerful tool for simplifying expressions involving powers. This property is particularly useful in solving exponential equations and in applications involving compound growth or decay.",
//         "$\\log_b$": "Logarithm with base b",
//         "$M$": "Base of the power (positive real number)",
//         "$p$": "Exponent",
//         "Example": "For $\\log_2(8^2) = 2\\log_2 8 = 2 \\cdot 3 = 6$",
//         "Use Cases": "Simplifying powers inside logarithms"
//       },
//       category: "Logarithm Laws"
//     },
//     {
//       name: "Change of Base",
//       formula: "$\\log_b M = \\frac{\\log_k M}{\\log_k b}$",
//       fields: {
//         "Explanation": "This rule allows conversion between logarithms of different bases. It's essential when working with calculators or computers that only compute natural or common logarithms. The formula shows how any logarithm can be expressed in terms of logarithms of another base, making it a crucial tool in practical calculations and theoretical developments.",
//         "$\\log_b$": "Target logarithm with base b",
//         "$\\log_k$": "Logarithm with new base k",
//         "$M$": "Argument (positive real number)",
//         "$b$": "Original base",
//         "Example": "For $\\log_2 8$ using base 10: $\\frac{\\log_{10} 8}{\\log_{10} 2}$",
//         "Use Cases": "Converting between different logarithm bases"
//       },
//       category: "Logarithm Laws"
//     },
//     {
//       name: "Special Values",
//       formula: "$\\log_b b = 1,\\quad \\log_b 1 = 0$",
//       fields: {
//         "Explanation": "These are fundamental identities in logarithmic arithmetic. They follow directly from the definition of logarithms and are essential in simplifying logarithmic expressions. The first identity states that the logarithm of a number equals 1 when the argument equals the base. The second identity shows that the logarithm of 1 is always 0, regardless of the base.",
//         "$\\log_b$": "Logarithm with base b",
//         "$b$": "Base of the logarithm",
//         "Example": "For any base b: $\\log_2 2 = 1$ and $\\log_2 1 = 0$",
//         "Use Cases": "Simplifying logarithmic expressions, solving equations"
//       },
//       category: "Logarithm Laws"
//     },




//     {
//       name: "Binomial Theorem",
//       formula: "$(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k}y^k = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\binom{n}{2}x^{n-2}y^2 + ... + \\binom{n}{n}y^n$",
//       fields: {
//         "Explanation": "The binomial theorem provides a systematic way to expand powers of binomial expressions. It shows how to write the expansion as a sum of terms involving combinations and powers of the variables. This fundamental theorem connects combinatorics with algebra, showing how the coefficients in the expansion relate to combinations. It's essential in probability theory, algebra, and calculus, particularly in series expansions and approximations.",
//         "$\\binom{n}{k}$": "Binomial coefficient representing number of ways to choose k items from n items",
//         "$n$": "Power of the binomial expression",
//         "$k$": "Index of summation (ranges from 0 to n)",
//         "$x, y$": "Variables in the binomial",
//         "$\\sum_{k=0}^n$": "Sum of terms from k = 0 to k = n",
//         "Example": "For $(x + y)^2 = \\binom{2}{0}x^2 + \\binom{2}{1}xy + \\binom{2}{2}y^2 = x^2 + 2xy + y^2$",
//         "Use Cases": "Polynomial expansion, probability calculations"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Binomial Coefficient Formula",
//       formula: "$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}, \\; n,k \\in \\mathbb{N}_0, \\; k \\leq n$",
//       fields: {
//         "Explanation": "This formula calculates the number of ways to choose k items from n items without regard to order. It's fundamental in combinatorics and probability theory. The formula represents the coefficient of each term in the binomial expansion and appears in many combinatorial problems. It's also known as 'n choose k' and forms the basis for Pascal's Triangle.",
//         "$\\binom{n}{k}$": "Binomial coefficient (n choose k)",
//         "$n!$": "Factorial of n",
//         "$k!$": "Factorial of k",
//         "$(n-k)!$": "Factorial of (n-k)",
//         "$\\mathbb{N}_0$": "Set of natural numbers including zero",
//         "$\\in$": "Belongs to (set membership symbol)",
//         "Example": "For $\\binom{4}{2} = \\frac{4!}{2!(4-2)!} = \\frac{24}{2 \\cdot 2} = 6$",
//         "Use Cases": "Calculating combinations, probability distributions"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Square of Binomial",
//       formula: "$(x + y)^2 = x^2 + 2xy + y^2$",
//       fields: {
//         "Explanation": "This identity shows the expansion of a binomial squared. It's a special case of the binomial theorem for n=2. The formula demonstrates how the square of a sum produces three terms: squares of each term plus twice their product. This pattern is fundamental in algebra and appears frequently in factoring and completing the square.",
//         "$x, y$": "Variables in the binomial",
//         "$2$": "Power of the binomial",
//         "$2xy$": "Middle term (twice the product)",
//         "Example": "For $(a + 3)^2 = a^2 + 6a + 9$",
//         "Use Cases": "Completing the square, area calculations"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Square of Difference",
//       formula: "$(x - y)^2 = x^2 - 2xy + y^2$",
//       fields: {
//         "Explanation": "This identity shows the expansion of a difference squared. It follows the same pattern as the square of a sum, but with the middle term negative. Understanding this pattern is crucial for factoring quadratic expressions and completing the square. The formula emphasizes how squaring a difference produces a similar structure to squaring a sum.",
//         "$x, y$": "Variables in the binomial",
//         "$2$": "Power of the binomial",
//         "$-2xy$": "Middle term (negative twice the product)",
//         "Example": "For $(a - 3)^2 = a^2 - 6a + 9$",
//         "Use Cases": "Factoring quadratic expressions, distance calculations"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Product of Sum and Difference",
//       formula: "$(x + y)(x - y) = x^2 - y^2$",
//       fields: {
//         "Explanation": "This identity demonstrates that the product of a sum and difference of the same terms equals the difference of their squares. It's a fundamental pattern in algebra that enables factoring of difference of squares expressions. The formula shows how the middle terms cancel out, leaving only the squared terms with opposite signs.",
//         "$x, y$": "Variables in the expression",
//         "$x^2$": "Square of first term",
//         "$y^2$": "Square of second term",
//         "Example": "For $(a + 3)(a - 3) = a^2 - 9$",
//         "Use Cases": "Factoring difference of squares, simplifying algebraic expressions"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Cube of Binomial",
//       formula: "$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$",
//       fields: {
//         "Explanation": "This identity shows the expansion of a binomial cubed. It's a special case of the binomial theorem for n=3. The coefficients follow the third row of Pascal's triangle, and the powers of x decrease while powers of y increase in each term. This pattern is useful in understanding higher-degree polynomial expansions.",
//         "$x, y$": "Variables in the binomial",
//         "$3$": "Power of the binomial",
//         "$3x^2y, 3xy^2$": "Middle terms with coefficient 3",
//         "Example": "For $(a + 2)^3 = a^3 + 6a^2 + 12a + 8$",
//         "Use Cases": "Volume calculations, polynomial expansions"
//       },
//       category: "Binomial Rules"
//     },
//     {
//       name: "Cube of Difference",
//       formula: "$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$",
//       fields: {
//         "Explanation": "This identity shows the expansion of a difference cubed. It follows the same pattern as the cube of a sum, but with alternating signs. The coefficients are the same as in the cube of a sum, but the signs alternate following the pattern of odd powers. Understanding this pattern helps in factoring and expanding cubic expressions.",
//         "$x, y$": "Variables in the binomial",
//         "$3$": "Power of the binomial",
//         "$-3x^2y, 3xy^2$": "Middle terms with alternating signs",
//         "Example": "For $(a - 2)^3 = a^3 - 6a^2 + 12a - 8$",
//         "Use Cases": "Polynomial expansions, volume differences"
//       },
//       category: "Binomial Rules"
//     }
];

export default algebraFormulasList;