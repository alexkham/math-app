



const algebraFormulasList = [


  // ─── Sequences (split into 5 sub-categories, 37 entries total) ───
//
// Append these entries to algebraFormulasList (insert before the closing `];`).
// Categories: Arithmetic Sequences (6), Geometric Sequences (7), Harmonic Sequences (3),
//             Recursive Sequences (11), Figurate Numbers (10).
// Hub page /algebra/sequences is reflective; no link.url targets it.
//
// v4 changes vs v3:
//   • Merged single-entry 'Prime Numbers' into Recursive Sequences
//     (one-item buckets aren't categories).
//
// Definition backfill needed: 40 sequences entities across 7 registry sub-categories
// (see sequences_entity_registry_block_v3.md).
// related_definitions cross-links point to anchors that do not yet exist on
// /algebra/definitions — they will resolve once definitions are written.


// --- Arithmetic Sequences (6) ------------------------------

{
  name: 'Common Difference',
  category: 'Arithmetic Sequences',
  formula: `$$a_{n+1} - a_n = d$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
  fields: {
    explanation: `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
    related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)`,
    related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Common Difference](!/algebra/definitions#common_difference)`
  }
},

{
  name: 'General Term (Arithmetic Sequence)',
  category: 'Arithmetic Sequences',
  formula: `$$a_n = a_1 + (n - 1)d$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
  fields: {
    explanation: `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
    conditions: `$n \\geq 1$. The common difference $d$ can be any real number, including zero.`,
    related_formulas: `- [Common Difference](!/algebra/formulas#common_difference)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
    related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)\n- [Term (of a Sequence)](!/algebra/definitions#term_of_a_sequence)`
  }
},

{
  name: 'Recursive Form (Arithmetic Sequence)',
  category: 'Arithmetic Sequences',
  formula: `$$a_1 = c, \\quad a_n = a_{n-1} + d$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#4' },
  fields: {
    explanation: `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
    related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Common Difference](!/algebra/formulas#common_difference)`,
    related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
  }
},

{
  name: 'Arithmetic Series Sum',
  category: 'Arithmetic Sequences',
  formula: `$$S_n = \\frac{n}{2}(a_1 + a_n)$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#5' },
  fields: {
    explanation: `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
    derivation: [
      `Write the sum forwards and backwards, then add term by term.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \\cdots + a_n$', operation: 'write again, reversed' },
          { expr: '$S_n = a_n + (a_n - d) + (a_n - 2d) + \\cdots + a_1$', operation: 'add term by term' },
          { expr: '$2S_n = n(a_1 + a_n)$', operation: 'divide by 2' },
          { expr: '$S_n = \\frac{n}{2}(a_1 + a_n)$', tag: 'result' }
        ]
      }
    ],
    variants: `Expanded form using only $a_1$ and $d$ (useful when $a_n$ is not given directly):\n\n$$S_n = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$$`,
    related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
    related_definitions: `- [Arithmetic Series](!/algebra/definitions#arithmetic_series)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
  }
},

{
  name: 'Arithmetic Mean',
  category: 'Arithmetic Sequences',
  formula: `$$M = \\frac{a + b}{2}$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
  fields: {
    explanation: `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
    variants: `For $n$ values:\n\n$$M = \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`,
    related_formulas: `- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
    related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
  }
},

{
  name: 'Arithmetic Mean Property',
  category: 'Arithmetic Sequences',
  formula: `$$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$$`,
  link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
  fields: {
    explanation: `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
    related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Common Difference](!/algebra/formulas#common_difference)\n- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)`,
    related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
  }
},


// --- Geometric Sequences (7) -------------------------------

{
  name: 'Common Ratio',
  category: 'Geometric Sequences',
  formula: `$$\\frac{a_{n+1}}{a_n} = r$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
  fields: {
    explanation: `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
    conditions: `$a_n \\neq 0$ for all $n$. The ratio $r$ may be any real number except $0$.`,
    related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)`,
    related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Common Ratio](!/algebra/definitions#common_ratio)`
  }
},

{
  name: 'General Term (Geometric Sequence)',
  category: 'Geometric Sequences',
  formula: `$$a_n = a_1 \\cdot r^{n-1}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
  fields: {
    explanation: `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
    conditions: `$a_1 \\neq 0$ and $r \\neq 0$. $n \\geq 1$.`,
    related_formulas: `- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)`,
    related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)`
  }
},

{
  name: 'Recursive Form (Geometric Sequence)',
  category: 'Geometric Sequences',
  formula: `$$a_1 = c, \\quad a_n = r \\cdot a_{n-1}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#4' },
  fields: {
    explanation: `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
    related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Common Ratio](!/algebra/formulas#common_ratio)`,
    related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
  }
},

{
  name: 'Finite Geometric Series Sum',
  category: 'Geometric Sequences',
  formula: `$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#5' },
  fields: {
    explanation: `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
    derivation: [
      `Multiply $S_n$ by $r$, then subtract.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}$', operation: 'multiply both sides by $r$' },
          { expr: '$rS_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^n$', operation: 'subtract from $S_n$' },
          { expr: '$S_n - rS_n = a_1 - a_1 r^n$', operation: 'factor and divide by $1 - r$' },
          { expr: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$', tag: 'result' }
        ]
      }
    ],
    conditions: `$r \\neq 1$. When $r = 1$, every term equals $a_1$ and $S_n = n a_1$.`,
    related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Infinite Geometric Series Sum](!/algebra/formulas#infinite_geometric_series_sum)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
    related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
  }
},

{
  name: 'Infinite Geometric Series Sum',
  category: 'Geometric Sequences',
  formula: `$$S = \\frac{a_1}{1 - r}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#6' },
  fields: {
    explanation: `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
    conditions: `$|r| < 1$. When $|r| \\geq 1$ the terms do not diminish and the series diverges (no finite sum).`,
    related_formulas: `- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)`,
    related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
  }
},

{
  name: 'Geometric Mean',
  category: 'Geometric Sequences',
  formula: `$$G = \\sqrt{ab}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
  fields: {
    explanation: `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
    conditions: `$a > 0$ and $b > 0$.`,
    variants: `For $n$ positive values:\n\n$$G = \\sqrt[n]{a_1 \\cdot a_2 \\cdots a_n}$$`,
    related_formulas: `- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)\n- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
    related_definitions: `- [Geometric Mean](!/algebra/definitions#geometric_mean)`
  }
},

{
  name: 'Geometric Mean Property',
  category: 'Geometric Sequences',
  formula: `$$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$$`,
  link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
  fields: {
    explanation: `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
    conditions: `All terms positive.`,
    related_formulas: `- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)`,
    related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)`
  }
},


// --- Harmonic Sequences (3) --------------------------------

{
  name: 'General Term (Harmonic Sequence)',
  category: 'Harmonic Sequences',
  formula: `$$a_n = \\frac{1}{b_1 + (n-1)d}$$`,
  link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#1' },
  fields: {
    explanation: `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
    conditions: `$b_1 + (n-1)d \\neq 0$ for every $n$ in the range of interest.`,
    related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
    related_definitions: `- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
  }
},

{
  name: 'Harmonic Mean',
  category: 'Harmonic Sequences',
  formula: `$$H = \\frac{n}{\\dfrac{1}{a_1} + \\dfrac{1}{a_2} + \\cdots + \\dfrac{1}{a_n}}$$`,
  link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#4' },
  fields: {
    explanation: `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
    conditions: `All $a_i > 0$.`,
    variants: `For two positive numbers:\n\n$$H = \\frac{2ab}{a + b}$$`,
    related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
    related_definitions: `- [Harmonic Mean](!/algebra/definitions#harmonic_mean)\n- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)`
  }
},

{
  name: 'AM-GM-HM Inequality',
  category: 'Harmonic Sequences',
  formula: `$$H \\leq G \\leq A$$`,
  link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#5' },
  fields: {
    explanation: `For any set of positive numbers, the harmonic mean is at most the geometric mean, which is at most the arithmetic mean. Equality holds throughout if and only if all values are identical.`,
    conditions: `All values positive.`,
    variants: `For two positive numbers $a$ and $b$:\n\n$$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$`,
    related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
    related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)\n- [Harmonic Mean](!/algebra/definitions#harmonic_mean)`
  }
},


// --- Recursive Sequences (11) ------------------------------

{
  name: 'Fibonacci Recurrence',
  category: 'Recursive Sequences',
  formula: `$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#1' },
  fields: {
    explanation: `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
    conditions: `$n \\geq 3$. An alternative indexing starts with $F_0 = 0, F_1 = 1$; the recurrence is unchanged.`,
    related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
    related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
  }
},

{
  name: 'Golden Ratio',
  category: 'Recursive Sequences',
  formula: `$$\\phi = \\frac{1 + \\sqrt{5}}{2}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#2' },
  fields: {
    explanation: `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
    notation: `The second root of $x^2 = x + 1$ is $\\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$. The two roots satisfy $\\phi + \\psi = 1$ and $\\phi \\cdot \\psi = -1$.`,
    related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
    related_definitions: `- [Golden Ratio](!/algebra/definitions#golden_ratio)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Binet\'s Formula',
  category: 'Recursive Sequences',
  formula: `$$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#3' },
  fields: {
    explanation: `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
    notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
    conditions: `Holds for all $n \\geq 1$.`,
    related_formulas: `- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
    related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
  }
},

{
  name: 'Cassini\'s Identity',
  category: 'Recursive Sequences',
  formula: `$$F_{n-1} F_{n+1} - F_n^2 = (-1)^n$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
  fields: {
    explanation: `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
    related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Binet's Formula](!/algebra/formulas#binets_formula)`,
    related_definitions: `- [Cassini's Identity](!/algebra/definitions#cassinis_identity)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Sum of Fibonacci Numbers',
  category: 'Recursive Sequences',
  formula: `$$\\sum_{k=1}^{n} F_k = F_{n+2} - 1$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
  fields: {
    explanation: `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
    related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Squared Fibonacci Numbers](!/algebra/formulas#sum_of_squared_fibonacci_numbers)`,
    related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Sum of Squared Fibonacci Numbers',
  category: 'Recursive Sequences',
  formula: `$$\\sum_{k=1}^{n} F_k^2 = F_n \\cdot F_{n+1}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
  fields: {
    explanation: `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
    related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Fibonacci Numbers](!/algebra/formulas#sum_of_fibonacci_numbers)`,
    related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Fibonacci GCD Identity',
  category: 'Recursive Sequences',
  formula: `$$\\gcd(F_m, F_n) = F_{\\gcd(m, n)}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
  fields: {
    explanation: `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
    related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
    related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Lucas Recurrence',
  category: 'Recursive Sequences',
  formula: `$$L_1 = 1, \\quad L_2 = 3, \\quad L_n = L_{n-1} + L_{n-2}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
  fields: {
    explanation: `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
    conditions: `$n \\geq 3$.`,
    related_formulas: `- [Lucas-Fibonacci Relation](!/algebra/formulas#lucas_fibonacci_relation)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
    related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Lucas-Fibonacci Relation',
  category: 'Recursive Sequences',
  formula: `$$L_n = F_{n-1} + F_{n+1}$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
  fields: {
    explanation: `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
    related_formulas: `- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
    related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
  }
},

{
  name: 'Lucas Binet Formula',
  category: 'Recursive Sequences',
  formula: `$$L_n = \\phi^n + \\psi^n$$`,
  link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
  fields: {
    explanation: `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet's formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
    notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
    related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
    related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
  }
},


{
  name: 'Prime Number Theorem',
  category: 'Recursive Sequences',
  formula: `$$\\pi(n) \\approx \\frac{n}{\\ln n}$$`,
  link: { label: 'Prime Numbers', url: '/algebra/sequences/prime-numbers#6' },
  fields: {
    explanation: `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
    notation: `$\\pi(n)$ is the prime-counting function: the number of primes $p \\leq n$.`,
    related_formulas: ``,
    related_definitions: `- [Prime Number](!/algebra/definitions#prime_number)\n- [Prime Number Theorem](!/algebra/definitions#prime_number_theorem)`
  }
},


// --- Figurate Numbers: Triangular (5) ----------------------

{
  name: 'Triangular Number Formula',
  category: 'Figurate Numbers',
  formula: `$$T_n = \\frac{n(n+1)}{2}$$`,
  link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#1' },
  fields: {
    explanation: `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
    derivation: [
      `Pair the first and last terms (Gauss).`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S = 1 + 2 + 3 + \\cdots + n$', operation: 'write again, reversed' },
          { expr: '$S = n + (n-1) + (n-2) + \\cdots + 1$', operation: 'add term by term' },
          { expr: '$2S = n(n+1)$', operation: 'divide by 2' },
          { expr: '$S = \\frac{n(n+1)}{2}$', tag: 'result' }
        ]
      }
    ],
    related_formulas: `- [Recursive Form (Triangular Numbers)](!/algebra/formulas#recursive_form_triangular_numbers)\n- [Triangular Number as Binomial Coefficient](!/algebra/formulas#triangular_number_as_binomial_coefficient)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
    related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
  }
},

{
  name: 'Recursive Form (Triangular Numbers)',
  category: 'Figurate Numbers',
  formula: `$$T_1 = 1, \\quad T_n = T_{n-1} + n$$`,
  link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#2' },
  fields: {
    explanation: `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
    related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)`,
    related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
  }
},

{
  name: 'Triangular Number as Binomial Coefficient',
  category: 'Figurate Numbers',
  formula: `$$T_n = \\binom{n+1}{2}$$`,
  link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#3' },
  fields: {
    explanation: `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
    related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)`,
    related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Binomial](!/algebra/definitions#binomial)`
  }
},

{
  name: 'Sum of Consecutive Triangular Numbers',
  category: 'Figurate Numbers',
  formula: `$$T_n + T_{n-1} = n^2$$`,
  link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
  fields: {
    explanation: `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
    related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
    related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Square Number](!/algebra/definitions#square_number)`
  }
},

{
  name: 'Sum of Triangular Numbers',
  category: 'Figurate Numbers',
  formula: `$$\\sum_{k=1}^{n} T_k = \\frac{n(n+1)(n+2)}{6}$$`,
  link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
  fields: {
    explanation: `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
    related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Sum of Squares](!/algebra/formulas#sum_of_squares)`,
    related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
  }
},


// --- Figurate Numbers: Square + Pythagorean (5) ------------

{
  name: 'Square Number Formula',
  category: 'Figurate Numbers',
  formula: `$$S_n = n^2$$`,
  link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#1' },
  fields: {
    explanation: `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
    related_formulas: `- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)`,
    related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Perfect Square](!/algebra/definitions#perfect_square)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
  }
},

{
  name: 'Recursive Form (Square Numbers)',
  category: 'Figurate Numbers',
  formula: `$$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$`,
  link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
  fields: {
    explanation: `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
    related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
    related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Gnomon](!/algebra/definitions#gnomon)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
  }
},

{
  name: 'Sum of First n Odd Numbers',
  category: 'Figurate Numbers',
  formula: `$$1 + 3 + 5 + \\cdots + (2n - 1) = n^2$$`,
  link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
  fields: {
    explanation: `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
    related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
    related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
  }
},

{
  name: 'Sum of Squares',
  category: 'Figurate Numbers',
  formula: `$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$`,
  link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#4' },
  fields: {
    explanation: `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
    derivation: [
      `Use the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$(k+1)^3 - k^3 = 3k^2 + 3k + 1$', operation: 'sum for $k = 1$ to $n$' },
          { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$', operation: 'substitute $\\sum k = \\frac{n(n+1)}{2}$' },
          { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + \\frac{3n(n+1)}{2} + n$', operation: 'solve for $\\sum k^2$' },
          { expr: '$\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$', tag: 'result' }
        ]
      }
    ],
    related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of Triangular Numbers](!/algebra/formulas#sum_of_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
    related_definitions: `- [Square Number](!/algebra/definitions#square_number)`
  }
},


{
  name: 'Pythagorean Triple Generator',
  category: 'Figurate Numbers',
  formula: `$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$`,
  link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#5' },
  fields: {
    explanation: `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
    conditions: `$m > n > 0$, $\\gcd(m, n) = 1$, and $m, n$ of opposite parity (one even, one odd).`,
    related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
    related_definitions: `- [Pythagorean Triple](!/algebra/definitions#pythagorean_triple)\n- [Square Number](!/algebra/definitions#square_number)`
  }
},

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
      related_formulas: `- [Discriminant](!/algebra/formulas#discriminant)\n- [Completing the Square](!/algebra/formulas#completing_the_square)\n- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
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
      related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)`,
      related_definitions: `- [Change of Base Formula](!/algebra/definitions#change_of_base_formula)\n- [Common Logarithm](!/algebra/definitions#common_logarithm)\n- [Natural Logarithm](!/algebra/definitions#natural_logarithm)`
    }
  },

  {
    name: 'Logarithm of the Base',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(a) = 1$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
    fields: {
      explanation: `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
      related_formulas: `- [Logarithm of One](!/algebra/formulas#logarithm_of_one)\n- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Base of a Logarithm](!/algebra/definitions#base_of_a_logarithm)`
    }
  },

  {
    name: 'Logarithm of One',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(1) = 0$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
    fields: {
      explanation: `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
      related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)`
    }
  },

  {
    name: 'Logarithm of an Exponential',
    category: 'Logarithm Rules',
    formula: `$$\\log_a(a^x) = x$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
    fields: {
      explanation: `Applying a logarithm to its own base's exponential cancels both operations, returning the exponent. The log "undoes" the exponential.`,
      related_formulas: `- [Exponential of a Logarithm](!/algebra/formulas#exponential_of_a_logarithm)`,
      related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Logarithmic Function](!/algebra/definitions#logarithmic_function)`
    }
  },

  {
    name: 'Exponential of a Logarithm',
    category: 'Logarithm Rules',
    formula: `$$a^{\\log_a(x)} = x$$`,
    link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
    fields: {
      explanation: `Applying an exponential to its own base's logarithm cancels both operations, returning the argument. The exponential "undoes" the log.`,
      conditions: `$x > 0$, $a > 0$, $a \\neq 1$.`,
      related_formulas: `- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
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
      related_formulas: `- [General Difference of Even Powers](!/algebra/formulas#general_difference_of_even_powers)`,
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
      related_formulas: `- [Difference of Squares](!/algebra/formulas#difference_of_squares)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
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
      related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [General Sum of Powers (odd n)](!/algebra/formulas#general_sum_of_powers_odd_n)`,
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
      related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
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
    name: 'Radical to Exponent Conversion',
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
      explanation: `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
      conditions: `For even $n$: $a \\geq 0$.`,
      related_formulas: `- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
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
      related_formulas: `- [Power of a Power](!/algebra/formulas#power_of_a_power)\n- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)`,
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
      related_formulas: `- [Vieta's Formulas (General)](!/algebra/formulas#vietas_formulas_general)\n- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
      related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Coefficient](!/algebra/definitions#coefficient)`
    }
  },

  {
    name: 'Binomial Theorem',
    category: 'Polynomial Theorems',
    formula: `$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$`,
    link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
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
      related_formulas: `- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
      related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)`
    }
  },


];

export default algebraFormulasList;