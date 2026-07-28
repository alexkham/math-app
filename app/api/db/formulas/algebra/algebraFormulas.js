



// // const algebraFormulasList = [


// //   // ─── Sequences (split into 5 sub-categories, 37 entries total) ───
// // //
// // // Append these entries to algebraFormulasList (insert before the closing `];`).
// // // Categories: Arithmetic Sequences (6), Geometric Sequences (7), Harmonic Sequences (3),
// // //             Recursive Sequences (11), Figurate Numbers (10).
// // // Hub page /algebra/sequences is reflective; no link.url targets it.
// // //
// // // v4 changes vs v3:
// // //   • Merged single-entry 'Prime Numbers' into Recursive Sequences
// // //     (one-item buckets aren't categories).
// // //
// // // Definition backfill needed: 40 sequences entities across 7 registry sub-categories
// // // (see sequences_entity_registry_block_v3.md).
// // // related_definitions cross-links point to anchors that do not yet exist on
// // // /algebra/definitions — they will resolve once definitions are written.


// // // --- Arithmetic Sequences (6) ------------------------------

// // {
// //   name: 'Common Difference',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$a_{n+1} - a_n = d$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
// //   fields: {
// //     explanation: `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
// //     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)`,
// //     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Common Difference](!/algebra/definitions#common_difference)`
// //   }
// // },

// // {
// //   name: 'General Term (Arithmetic Sequence)',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$a_n = a_1 + (n - 1)d$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
// //   fields: {
// //     explanation: `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
// //     conditions: `$n \\geq 1$. The common difference $d$ can be any real number, including zero.`,
// //     related_formulas: `- [Common Difference](!/algebra/formulas#common_difference)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
// //     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)\n- [Term (of a Sequence)](!/algebra/definitions#term_of_a_sequence)`
// //   }
// // },

// // {
// //   name: 'Recursive Form (Arithmetic Sequence)',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$a_1 = c, \\quad a_n = a_{n-1} + d$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#4' },
// //   fields: {
// //     explanation: `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
// //     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Common Difference](!/algebra/formulas#common_difference)`,
// //     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
// //   }
// // },

// // {
// //   name: 'Arithmetic Series Sum',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$S_n = \\frac{n}{2}(a_1 + a_n)$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#5' },
// //   fields: {
// //     explanation: `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
// //     derivation: [
// //       `Write the sum forwards and backwards, then add term by term.`,
// //       {
// //         component: 'MathDerivation',
// //         items: [
// //           { expr: '$S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \\cdots + a_n$', operation: 'write again, reversed' },
// //           { expr: '$S_n = a_n + (a_n - d) + (a_n - 2d) + \\cdots + a_1$', operation: 'add term by term' },
// //           { expr: '$2S_n = n(a_1 + a_n)$', operation: 'divide by 2' },
// //           { expr: '$S_n = \\frac{n}{2}(a_1 + a_n)$', tag: 'result' }
// //         ]
// //       }
// //     ],
// //     variants: `Expanded form using only $a_1$ and $d$ (useful when $a_n$ is not given directly):\n\n$$S_n = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$$`,
// //     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
// //     related_definitions: `- [Arithmetic Series](!/algebra/definitions#arithmetic_series)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
// //   }
// // },

// // {
// //   name: 'Arithmetic Mean',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$M = \\frac{a + b}{2}$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
// //   fields: {
// //     explanation: `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
// //     variants: `For $n$ values:\n\n$$M = \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`,
// //     related_formulas: `- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
// //     related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
// //   }
// // },

// // {
// //   name: 'Arithmetic Mean Property',
// //   category: 'Arithmetic Sequences',
// //   formula: `$$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$$`,
// //   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
// //   fields: {
// //     explanation: `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
// //     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Common Difference](!/algebra/formulas#common_difference)\n- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)`,
// //     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
// //   }
// // },


// // // --- Geometric Sequences (7) -------------------------------

// // {
// //   name: 'Common Ratio',
// //   category: 'Geometric Sequences',
// //   formula: `$$\\frac{a_{n+1}}{a_n} = r$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
// //   fields: {
// //     explanation: `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
// //     conditions: `$a_n \\neq 0$ for all $n$. The ratio $r$ may be any real number except $0$.`,
// //     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)`,
// //     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Common Ratio](!/algebra/definitions#common_ratio)`
// //   }
// // },

// // {
// //   name: 'General Term (Geometric Sequence)',
// //   category: 'Geometric Sequences',
// //   formula: `$$a_n = a_1 \\cdot r^{n-1}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
// //   fields: {
// //     explanation: `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
// //     conditions: `$a_1 \\neq 0$ and $r \\neq 0$. $n \\geq 1$.`,
// //     related_formulas: `- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)`,
// //     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)`
// //   }
// // },

// // {
// //   name: 'Recursive Form (Geometric Sequence)',
// //   category: 'Geometric Sequences',
// //   formula: `$$a_1 = c, \\quad a_n = r \\cdot a_{n-1}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#4' },
// //   fields: {
// //     explanation: `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
// //     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Common Ratio](!/algebra/formulas#common_ratio)`,
// //     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
// //   }
// // },

// // {
// //   name: 'Finite Geometric Series Sum',
// //   category: 'Geometric Sequences',
// //   formula: `$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#5' },
// //   fields: {
// //     explanation: `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
// //     derivation: [
// //       `Multiply $S_n$ by $r$, then subtract.`,
// //       {
// //         component: 'MathDerivation',
// //         items: [
// //           { expr: '$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}$', operation: 'multiply both sides by $r$' },
// //           { expr: '$rS_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^n$', operation: 'subtract from $S_n$' },
// //           { expr: '$S_n - rS_n = a_1 - a_1 r^n$', operation: 'factor and divide by $1 - r$' },
// //           { expr: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$', tag: 'result' }
// //         ]
// //       }
// //     ],
// //     conditions: `$r \\neq 1$. When $r = 1$, every term equals $a_1$ and $S_n = n a_1$.`,
// //     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Infinite Geometric Series Sum](!/algebra/formulas#infinite_geometric_series_sum)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
// //     related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
// //   }
// // },

// // {
// //   name: 'Infinite Geometric Series Sum',
// //   category: 'Geometric Sequences',
// //   formula: `$$S = \\frac{a_1}{1 - r}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#6' },
// //   fields: {
// //     explanation: `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
// //     conditions: `$|r| < 1$. When $|r| \\geq 1$ the terms do not diminish and the series diverges (no finite sum).`,
// //     related_formulas: `- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)`,
// //     related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
// //   }
// // },

// // {
// //   name: 'Geometric Mean',
// //   category: 'Geometric Sequences',
// //   formula: `$$G = \\sqrt{ab}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
// //   fields: {
// //     explanation: `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
// //     conditions: `$a > 0$ and $b > 0$.`,
// //     variants: `For $n$ positive values:\n\n$$G = \\sqrt[n]{a_1 \\cdot a_2 \\cdots a_n}$$`,
// //     related_formulas: `- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)\n- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
// //     related_definitions: `- [Geometric Mean](!/algebra/definitions#geometric_mean)`
// //   }
// // },

// // {
// //   name: 'Geometric Mean Property',
// //   category: 'Geometric Sequences',
// //   formula: `$$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$$`,
// //   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
// //   fields: {
// //     explanation: `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
// //     conditions: `All terms positive.`,
// //     related_formulas: `- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)`,
// //     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)`
// //   }
// // },


// // // --- Harmonic Sequences (3) --------------------------------

// // {
// //   name: 'General Term (Harmonic Sequence)',
// //   category: 'Harmonic Sequences',
// //   formula: `$$a_n = \\frac{1}{b_1 + (n-1)d}$$`,
// //   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#1' },
// //   fields: {
// //     explanation: `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
// //     conditions: `$b_1 + (n-1)d \\neq 0$ for every $n$ in the range of interest.`,
// //     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
// //     related_definitions: `- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
// //   }
// // },

// // {
// //   name: 'Harmonic Mean',
// //   category: 'Harmonic Sequences',
// //   formula: `$$H = \\frac{n}{\\dfrac{1}{a_1} + \\dfrac{1}{a_2} + \\cdots + \\dfrac{1}{a_n}}$$`,
// //   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#4' },
// //   fields: {
// //     explanation: `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
// //     conditions: `All $a_i > 0$.`,
// //     variants: `For two positive numbers:\n\n$$H = \\frac{2ab}{a + b}$$`,
// //     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
// //     related_definitions: `- [Harmonic Mean](!/algebra/definitions#harmonic_mean)\n- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)`
// //   }
// // },

// // {
// //   name: 'AM-GM-HM Inequality',
// //   category: 'Harmonic Sequences',
// //   formula: `$$H \\leq G \\leq A$$`,
// //   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#5' },
// //   fields: {
// //     explanation: `For any set of positive numbers, the harmonic mean is at most the geometric mean, which is at most the arithmetic mean. Equality holds throughout if and only if all values are identical.`,
// //     conditions: `All values positive.`,
// //     variants: `For two positive numbers $a$ and $b$:\n\n$$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$`,
// //     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
// //     related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)\n- [Harmonic Mean](!/algebra/definitions#harmonic_mean)`
// //   }
// // },


// // // --- Recursive Sequences (11) ------------------------------

// // {
// //   name: 'Fibonacci Recurrence',
// //   category: 'Recursive Sequences',
// //   formula: `$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#1' },
// //   fields: {
// //     explanation: `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
// //     conditions: `$n \\geq 3$. An alternative indexing starts with $F_0 = 0, F_1 = 1$; the recurrence is unchanged.`,
// //     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
// //     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
// //   }
// // },

// // {
// //   name: 'Golden Ratio',
// //   category: 'Recursive Sequences',
// //   formula: `$$\\phi = \\frac{1 + \\sqrt{5}}{2}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#2' },
// //   fields: {
// //     explanation: `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
// //     notation: `The second root of $x^2 = x + 1$ is $\\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$. The two roots satisfy $\\phi + \\psi = 1$ and $\\phi \\cdot \\psi = -1$.`,
// //     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
// //     related_definitions: `- [Golden Ratio](!/algebra/definitions#golden_ratio)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Binet\'s Formula',
// //   category: 'Recursive Sequences',
// //   formula: `$$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#3' },
// //   fields: {
// //     explanation: `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
// //     notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
// //     conditions: `Holds for all $n \\geq 1$.`,
// //     related_formulas: `- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
// //     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
// //   }
// // },

// // {
// //   name: 'Cassini\'s Identity',
// //   category: 'Recursive Sequences',
// //   formula: `$$F_{n-1} F_{n+1} - F_n^2 = (-1)^n$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
// //   fields: {
// //     explanation: `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
// //     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Binet's Formula](!/algebra/formulas#binets_formula)`,
// //     related_definitions: `- [Cassini's Identity](!/algebra/definitions#cassinis_identity)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Sum of Fibonacci Numbers',
// //   category: 'Recursive Sequences',
// //   formula: `$$\\sum_{k=1}^{n} F_k = F_{n+2} - 1$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
// //   fields: {
// //     explanation: `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
// //     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Squared Fibonacci Numbers](!/algebra/formulas#sum_of_squared_fibonacci_numbers)`,
// //     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Sum of Squared Fibonacci Numbers',
// //   category: 'Recursive Sequences',
// //   formula: `$$\\sum_{k=1}^{n} F_k^2 = F_n \\cdot F_{n+1}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
// //   fields: {
// //     explanation: `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
// //     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Fibonacci Numbers](!/algebra/formulas#sum_of_fibonacci_numbers)`,
// //     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Fibonacci GCD Identity',
// //   category: 'Recursive Sequences',
// //   formula: `$$\\gcd(F_m, F_n) = F_{\\gcd(m, n)}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
// //   fields: {
// //     explanation: `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
// //     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
// //     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Lucas Recurrence',
// //   category: 'Recursive Sequences',
// //   formula: `$$L_1 = 1, \\quad L_2 = 3, \\quad L_n = L_{n-1} + L_{n-2}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
// //   fields: {
// //     explanation: `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
// //     conditions: `$n \\geq 3$.`,
// //     related_formulas: `- [Lucas-Fibonacci Relation](!/algebra/formulas#lucas_fibonacci_relation)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
// //     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Lucas-Fibonacci Relation',
// //   category: 'Recursive Sequences',
// //   formula: `$$L_n = F_{n-1} + F_{n+1}$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
// //   fields: {
// //     explanation: `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
// //     related_formulas: `- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
// //     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
// //   }
// // },

// // {
// //   name: 'Lucas Binet Formula',
// //   category: 'Recursive Sequences',
// //   formula: `$$L_n = \\phi^n + \\psi^n$$`,
// //   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
// //   fields: {
// //     explanation: `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet's formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
// //     notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
// //     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
// //     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
// //   }
// // },


// // {
// //   name: 'Prime Number Theorem',
// //   category: 'Recursive Sequences',
// //   formula: `$$\\pi(n) \\approx \\frac{n}{\\ln n}$$`,
// //   link: { label: 'Prime Numbers', url: '/algebra/sequences/prime-numbers#6' },
// //   fields: {
// //     explanation: `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
// //     notation: `$\\pi(n)$ is the prime-counting function: the number of primes $p \\leq n$.`,
// //     related_formulas: ``,
// //     related_definitions: `- [Prime Number](!/algebra/definitions#prime_number)\n- [Prime Number Theorem](!/algebra/definitions#prime_number_theorem)`
// //   }
// // },


// // // --- Figurate Numbers: Triangular (5) ----------------------

// // {
// //   name: 'Triangular Number Formula',
// //   category: 'Figurate Numbers',
// //   formula: `$$T_n = \\frac{n(n+1)}{2}$$`,
// //   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#1' },
// //   fields: {
// //     explanation: `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
// //     derivation: [
// //       `Pair the first and last terms (Gauss).`,
// //       {
// //         component: 'MathDerivation',
// //         items: [
// //           { expr: '$S = 1 + 2 + 3 + \\cdots + n$', operation: 'write again, reversed' },
// //           { expr: '$S = n + (n-1) + (n-2) + \\cdots + 1$', operation: 'add term by term' },
// //           { expr: '$2S = n(n+1)$', operation: 'divide by 2' },
// //           { expr: '$S = \\frac{n(n+1)}{2}$', tag: 'result' }
// //         ]
// //       }
// //     ],
// //     related_formulas: `- [Recursive Form (Triangular Numbers)](!/algebra/formulas#recursive_form_triangular_numbers)\n- [Triangular Number as Binomial Coefficient](!/algebra/formulas#triangular_number_as_binomial_coefficient)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
// //     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
// //   }
// // },

// // {
// //   name: 'Recursive Form (Triangular Numbers)',
// //   category: 'Figurate Numbers',
// //   formula: `$$T_1 = 1, \\quad T_n = T_{n-1} + n$$`,
// //   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#2' },
// //   fields: {
// //     explanation: `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
// //     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)`,
// //     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
// //   }
// // },

// // {
// //   name: 'Triangular Number as Binomial Coefficient',
// //   category: 'Figurate Numbers',
// //   formula: `$$T_n = \\binom{n+1}{2}$$`,
// //   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#3' },
// //   fields: {
// //     explanation: `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
// //     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)`,
// //     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Binomial](!/algebra/definitions#binomial)`
// //   }
// // },

// // {
// //   name: 'Sum of Consecutive Triangular Numbers',
// //   category: 'Figurate Numbers',
// //   formula: `$$T_n + T_{n-1} = n^2$$`,
// //   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
// //   fields: {
// //     explanation: `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
// //     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
// //     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Square Number](!/algebra/definitions#square_number)`
// //   }
// // },

// // {
// //   name: 'Sum of Triangular Numbers',
// //   category: 'Figurate Numbers',
// //   formula: `$$\\sum_{k=1}^{n} T_k = \\frac{n(n+1)(n+2)}{6}$$`,
// //   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
// //   fields: {
// //     explanation: `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
// //     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Sum of Squares](!/algebra/formulas#sum_of_squares)`,
// //     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
// //   }
// // },


// // // --- Figurate Numbers: Square + Pythagorean (5) ------------

// // {
// //   name: 'Square Number Formula',
// //   category: 'Figurate Numbers',
// //   formula: `$$S_n = n^2$$`,
// //   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#1' },
// //   fields: {
// //     explanation: `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
// //     related_formulas: `- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)`,
// //     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Perfect Square](!/algebra/definitions#perfect_square)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
// //   }
// // },

// // {
// //   name: 'Recursive Form (Square Numbers)',
// //   category: 'Figurate Numbers',
// //   formula: `$$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$`,
// //   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
// //   fields: {
// //     explanation: `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
// //     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
// //     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Gnomon](!/algebra/definitions#gnomon)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
// //   }
// // },

// // {
// //   name: 'Sum of First n Odd Numbers',
// //   category: 'Figurate Numbers',
// //   formula: `$$1 + 3 + 5 + \\cdots + (2n - 1) = n^2$$`,
// //   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
// //   fields: {
// //     explanation: `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
// //     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
// //     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
// //   }
// // },

// // {
// //   name: 'Sum of Squares',
// //   category: 'Figurate Numbers',
// //   formula: `$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$`,
// //   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#4' },
// //   fields: {
// //     explanation: `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
// //     derivation: [
// //       `Use the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$.`,
// //       {
// //         component: 'MathDerivation',
// //         items: [
// //           { expr: '$(k+1)^3 - k^3 = 3k^2 + 3k + 1$', operation: 'sum for $k = 1$ to $n$' },
// //           { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$', operation: 'substitute $\\sum k = \\frac{n(n+1)}{2}$' },
// //           { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + \\frac{3n(n+1)}{2} + n$', operation: 'solve for $\\sum k^2$' },
// //           { expr: '$\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$', tag: 'result' }
// //         ]
// //       }
// //     ],
// //     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of Triangular Numbers](!/algebra/formulas#sum_of_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
// //     related_definitions: `- [Square Number](!/algebra/definitions#square_number)`
// //   }
// // },


// // {
// //   name: 'Pythagorean Triple Generator',
// //   category: 'Figurate Numbers',
// //   formula: `$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$`,
// //   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#5' },
// //   fields: {
// //     explanation: `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
// //     conditions: `$m > n > 0$, $\\gcd(m, n) = 1$, and $m, n$ of opposite parity (one even, one odd).`,
// //     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
// //     related_definitions: `- [Pythagorean Triple](!/algebra/definitions#pythagorean_triple)\n- [Square Number](!/algebra/definitions#square_number)`
// //   }
// // },

// //   // ─── Category: Equations (6 entries) ─────────────────────────

// //   {
// //     name: 'Quadratic Formula',
// //     category: 'Equations',
// //     formula: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
// //     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#4' },
// //     fields: {
// //       explanation: [
// //         `Gives the two solutions of any quadratic equation $ax^2 + bx + c = 0$ directly from its coefficients. The $\\pm$ produces two values: one using $+$, the other using $-$. The expression under the square root, $b^2 - 4ac$, is the discriminant — it determines whether the roots are real and distinct, real and equal, or complex.`,
// //         {
// //           component: 'FunctionMachineDiagram',
// //           steps: [
// //             { value: 'a, b, c', operation: 'compute discriminant b² − 4ac' },
// //             { value: '√Δ', operation: 'apply ± and divide by 2a' },
// //             { value: 'x₁, x₂', operation: '' }
// //           ],
// //           label: 'Quadratic Formula'
// //         }
// //       ],
// //       derivation: [
// //         `Derived by completing the square on $ax^2 + bx + c = 0$.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$ax^2 + bx + c = 0$', operation: 'divide by $a$' },
// //             { expr: '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$', operation: 'complete the square' },
// //             { expr: '$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$', operation: 'take square root' },
// //             { expr: '$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}$', operation: 'isolate $x$' },
// //             { expr: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       conditions: `$a \\neq 0$. If $b^2 - 4ac < 0$, the roots are complex.`,
// //       related_formulas: `- [Discriminant](!/algebra/formulas#discriminant)\n- [Completing the Square](!/algebra/formulas#completing_the_square)\n- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
// //       related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Coefficient](!/algebra/definitions#coefficient)\n- [Standard Form](!/algebra/definitions#standard_form)`
// //     }
// //   },

// //   {
// //     name: 'Discriminant',
// //     category: 'Equations',
// //     formula: `$$\\Delta = b^2 - 4ac$$`,
// //     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#5' },
// //     fields: {
// //       explanation: `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
// //       conditions: `Applies to quadratic equations in standard form $ax^2 + bx + c = 0$ with $a \\neq 0$.`,
// //       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
// //       related_definitions: `- [Discriminant](!/algebra/definitions#discriminant)\n- [Coefficient](!/algebra/definitions#coefficient)`
// //     }
// //   },

// //   {
// //     name: 'Square Root Property',
// //     category: 'Equations',
// //     formula: `$$x^2 = p \\implies x = \\pm\\sqrt{p}$$`,
// //     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
// //     fields: {
// //       explanation: `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
// //       conditions: `$p \\geq 0$ for real solutions. If $p < 0$, the solutions are complex.`,
// //       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
// //       related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Principal Root](!/algebra/definitions#principal_root)`
// //     }
// //   },

// //   {
// //     name: 'Completing the Square',
// //     category: 'Equations',
// //     formula: `$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$$`,
// //     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
// //     fields: {
// //       explanation: `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
// //       derivation: [
// //         `Expand the right side to verify.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$\\left(x + \\frac{b}{2}\\right)^2$', operation: 'expand' },
// //             { expr: '$x^2 + 2 \\cdot x \\cdot \\frac{b}{2} + \\frac{b^2}{4}$', operation: 'simplify' },
// //             { expr: '$x^2 + bx + \\frac{b^2}{4}$', operation: 'subtract $\\frac{b^2}{4}$' },
// //             { expr: '$x^2 + bx$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)\n- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
// //       related_definitions: `- [Standard Form](!/algebra/definitions#standard_form)\n- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)`
// //     }
// //   },

// //   {
// //     name: 'Absolute Value Equation',
// //     category: 'Equations',
// //     formula: `$$|p| = b \\implies p = b \\text{ or } p = -b \\quad (b > 0)$$`,
// //     link: { label: 'Absolute Value Equations', url: '/algebra/equations/absolute-value#2' },
// //     fields: {
// //       explanation: `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
// //       conditions: `$b > 0$. If $b = 0$, then $p = 0$ (single solution). If $b < 0$, no solution.`,
// //       related_formulas: `- [Absolute Value Inequalities](!/algebra/formulas#absolute_value_inequalities)`,
// //       related_definitions: `- [Absolute Value](!/algebra/definitions#absolute_value)\n- [Solution Set](!/algebra/definitions#solution_set)`
// //     }
// //   },

// //   {
// //     name: 'Absolute Value Inequalities',
// //     category: 'Equations',
// //     formula: `$$|p| < b \\implies -b < p < b \\qquad |p| > b \\implies p < -b \\text{ or } p > b$$`,
// //     link: { label: 'Absolute Value Inequalities', url: '/algebra/inequalities/absolute-value#1' },
// //     fields: {
// //       explanation: `A less-than inequality produces a compound inequality (a bounded interval). A greater-than inequality produces a disjunction (two unbounded rays).`,
// //       conditions: `$b > 0$. Same pattern holds for $\\leq$ and $\\geq$.`,
// //       variants: `Weak form:\n\n$$|p| \\leq b \\implies -b \\leq p \\leq b$$\n\n$$|p| \\geq b \\implies p \\leq -b \\text{ or } p \\geq b$$`,
// //       related_formulas: `- [Absolute Value Equation](!/algebra/formulas#absolute_value_equation)`,
// //       related_definitions: `- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality)\n- [Compound Inequality](!/algebra/definitions#compound_inequality)\n- [Interval Notation](!/algebra/definitions#interval_notation)`
// //     }
// //   },


// //   // ─── Category: Logarithm Rules (8 entries) ──────────────────


// //   {
// //     name: 'Product Rule (Logarithms)',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(xy) = \\log_a(x) + \\log_a(y)$$`,
// //     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#1' },
// //     fields: {
// //       explanation: `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
// //       derivation: [
// //         `Let $\\log_a(x) = m$ and $\\log_a(y) = n$, so $a^m = x$ and $a^n = y$.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$xy = a^m \\cdot a^n$', operation: 'product rule for exponents' },
// //             { expr: '$xy = a^{m+n}$', operation: 'convert to log form' },
// //             { expr: '$\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
// //       related_formulas: `- [Quotient Rule (Logarithms)](!/algebra/formulas#quotient_rule_logarithms)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
// //       related_definitions: `- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_logarithms)`
// //     }
// //   },

// //   {
// //     name: 'Quotient Rule (Logarithms)',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$$`,
// //     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#2' },
// //     fields: {
// //       explanation: `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
// //       conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
// //       related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
// //       related_definitions: `- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_logarithms)`
// //     }
// //   },

// //   {
// //     name: 'Power Rule (Logarithms)',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(x^n) = n \\cdot \\log_a(x)$$`,
// //     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#3' },
// //     fields: {
// //       explanation: `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
// //       conditions: `$a > 0$, $a \\neq 1$, $x > 0$. $n$ can be any real number.`,
// //       related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
// //       related_definitions: `- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_logarithms)`
// //     }
// //   },

// //   {
// //     name: 'Change of Base Formula',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$`,
// //     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#4' },
// //     fields: {
// //       explanation: [
// //         `Converts a logarithm from one base to another. Most commonly used with $b = 10$ or $b = e$ to evaluate logarithms on a calculator, which only has $\\log$ and $\\ln$ keys.`,
// //         {
// //           component: 'FunctionMachineDiagram',
// //           steps: [
// //             { value: 'log_a(x)', operation: 'compute log_b of both x and a' },
// //             { value: 'log_b(x) and log_b(a)', operation: 'divide' },
// //             { value: 'log_b(x) / log_b(a)', operation: '' }
// //           ],
// //           label: 'Change of Base'
// //         }
// //       ],
// //       derivation: [
// //         `Let $\\log_a(x) = k$, so $a^k = x$.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$a^k = x$', operation: 'take $\\log_b$ of both sides' },
// //             { expr: '$\\log_b(a^k) = \\log_b(x)$', operation: 'power rule' },
// //             { expr: '$k \\cdot \\log_b(a) = \\log_b(x)$', operation: 'divide by $\\log_b(a)$' },
// //             { expr: '$k = \\frac{\\log_b(x)}{\\log_b(a)}$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       conditions: `$a > 0$, $a \\neq 1$, $b > 0$, $b \\neq 1$, $x > 0$.`,
// //       variants: `Common special case using natural log:\n\n$$\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$$`,
// //       related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)`,
// //       related_definitions: `- [Change of Base Formula](!/algebra/definitions#change_of_base_formula)\n- [Common Logarithm](!/algebra/definitions#common_logarithm)\n- [Natural Logarithm](!/algebra/definitions#natural_logarithm)`
// //     }
// //   },

// //   {
// //     name: 'Logarithm of the Base',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(a) = 1$$`,
// //     link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
// //     fields: {
// //       explanation: `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
// //       related_formulas: `- [Logarithm of One](!/algebra/formulas#logarithm_of_one)\n- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
// //       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Base of a Logarithm](!/algebra/definitions#base_of_a_logarithm)`
// //     }
// //   },

// //   {
// //     name: 'Logarithm of One',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(1) = 0$$`,
// //     link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
// //     fields: {
// //       explanation: `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
// //       related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
// //       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)`
// //     }
// //   },

// //   {
// //     name: 'Logarithm of an Exponential',
// //     category: 'Logarithm Rules',
// //     formula: `$$\\log_a(a^x) = x$$`,
// //     link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
// //     fields: {
// //       explanation: `Applying a logarithm to its own base's exponential cancels both operations, returning the exponent. The log "undoes" the exponential.`,
// //       related_formulas: `- [Exponential of a Logarithm](!/algebra/formulas#exponential_of_a_logarithm)`,
// //       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Logarithmic Function](!/algebra/definitions#logarithmic_function)`
// //     }
// //   },

// //   {
// //     name: 'Exponential of a Logarithm',
// //     category: 'Logarithm Rules',
// //     formula: `$$a^{\\log_a(x)} = x$$`,
// //     link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
// //     fields: {
// //       explanation: `Applying an exponential to its own base's logarithm cancels both operations, returning the argument. The exponential "undoes" the log.`,
// //       conditions: `$x > 0$, $a > 0$, $a \\neq 1$.`,
// //       related_formulas: `- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
// //       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Exponential Function](!/algebra/definitions#exponential_function)`
// //     }
// //   },



// //   // ─── Category: Identities & Factoring (11 entries) ──────────


// //   {
// //     name: 'Difference of Squares',
// //     category: 'Identities & Factoring',
// //     formula: `$$a^2 - b^2 = (a + b)(a - b)$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#6' },
// //     fields: {
// //       explanation: `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
// //       derivation: [
// //         `Expand the right side.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$(a + b)(a - b)$', operation: 'distribute' },
// //             { expr: '$a^2 - ab + ab - b^2$', operation: 'cancel $-ab + ab$' },
// //             { expr: '$a^2 - b^2$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       conditions: `Applies only to subtraction. A sum of squares $a^2 + b^2$ does not factor over the reals.`,
// //       related_formulas: `- [General Difference of Even Powers](!/algebra/formulas#general_difference_of_even_powers)`,
// //       related_definitions: `- [Difference of Squares](!/algebra/definitions#difference_of_squares)\n- [Factoring](!/algebra/definitions#factoring)`
// //     }
// //   },

// //   {
// //     name: 'Square of a Sum',
// //     category: 'Identities & Factoring',
// //     formula: `$$(a + b)^2 = a^2 + 2ab + b^2$$`,
// //     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
// //     fields: {
// //       explanation: `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
// //       derivation: [
// //         `Multiply $(a + b)$ by itself.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$(a + b)(a + b)$', operation: 'distribute' },
// //             { expr: '$a^2 + ab + ab + b^2$', operation: 'combine like terms' },
// //             { expr: '$a^2 + 2ab + b^2$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       related_formulas: `- [Square of a Difference](!/algebra/formulas#square_of_a_difference)\n- [Completing the Square](!/algebra/formulas#completing_the_square)`,
// //       related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Square of a Difference',
// //     category: 'Identities & Factoring',
// //     formula: `$$(a - b)^2 = a^2 - 2ab + b^2$$`,
// //     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
// //     fields: {
// //       explanation: `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
// //       related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
// //       related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Cube of a Sum',
// //     category: 'Identities & Factoring',
// //     formula: `$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$`,
// //     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
// //     fields: {
// //       explanation: `Cubing a binomial sum. The coefficients follow the third row of Pascal's triangle: 1, 3, 3, 1.`,
// //       related_formulas: `- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)\n- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)`,
// //       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Cube of a Difference',
// //     category: 'Identities & Factoring',
// //     formula: `$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$`,
// //     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
// //     fields: {
// //       explanation: `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
// //       related_formulas: `- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)\n- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)`,
// //       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Sum of Cubes',
// //     category: 'Identities & Factoring',
// //     formula: `$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
// //     fields: {
// //       explanation: `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
// //       derivation: [
// //         `Expand the right side to verify.`,
// //         {
// //           component: 'MathDerivation',
// //           items: [
// //             { expr: '$(a + b)(a^2 - ab + b^2)$', operation: 'distribute $a$, then $b$' },
// //             { expr: '$a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$', operation: 'cancel' },
// //             { expr: '$a^3 + b^3$', tag: 'result' }
// //           ]
// //         }
// //       ],
// //       related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)`,
// //       related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
// //     }
// //   },

// //   {
// //     name: 'Difference of Cubes',
// //     category: 'Identities & Factoring',
// //     formula: `$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
// //     fields: {
// //       explanation: `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
// //       related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)`,
// //       related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
// //     }
// //   },

// //   {
// //     name: 'Trinomial Factoring Pattern',
// //     category: 'Identities & Factoring',
// //     formula: `$$x^2 + (a + b)x + ab = (x + a)(x + b)$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#4' },
// //     fields: {
// //       explanation: `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
// //       related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)\n- [Square of a Difference](!/algebra/formulas#square_of_a_difference)`,
// //       related_definitions: `- [Factoring](!/algebra/definitions#factoring)\n- [Trinomial](!/algebra/definitions#trinomial)`
// //     }
// //   },

// //   {
// //     name: 'General Difference of Even Powers',
// //     category: 'Identities & Factoring',
// //     formula: `$$x^{2n} - a^{2n} = (x^n - a^n)(x^n + a^n)$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
// //     fields: {
// //       explanation: `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
// //       related_formulas: `- [Difference of Squares](!/algebra/formulas#difference_of_squares)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
// //       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
// //     }
// //   },

// //   {
// //     name: 'General Difference of Powers (odd n)',
// //     category: 'Identities & Factoring',
// //     formula: `$$x^n - a^n = (x - a)(x^{n-1} + ax^{n-2} + \\cdots + a^{n-1})$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
// //     fields: {
// //       explanation: `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
// //       conditions: `Valid for all positive integers $n$. When $n$ is odd, this is the complete factorization over the reals.`,
// //       related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [General Sum of Powers (odd n)](!/algebra/formulas#general_sum_of_powers_odd_n)`,
// //       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
// //     }
// //   },

// //   {
// //     name: 'General Sum of Powers (odd n)',
// //     category: 'Identities & Factoring',
// //     formula: `$$x^n + a^n = (x + a)(x^{n-1} - ax^{n-2} + \\cdots + a^{n-1})$$`,
// //     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
// //     fields: {
// //       explanation: `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
// //       conditions: `$n$ must be a positive odd integer.`,
// //       related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
// //       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
// //     }
// //   },




// //   // ─── Category: Exponent Rules (8 entries) ───────────────────


// //   {
// //     name: 'Product Rule (Exponents)',
// //     category: 'Exponent Rules',
// //     formula: `$$a^m \\cdot a^n = a^{m+n}$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#1' },
// //     fields: {
// //       explanation: `Multiplying powers with the same base: keep the base, add the exponents.`,
// //       conditions: `$a \\neq 0$ when $m$ or $n$ is negative or zero.`,
// //       related_formulas: `- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
// //       related_definitions: `- [Product Rule (Exponents)](!/algebra/definitions#product_rule_exponents)\n- [Power](!/algebra/definitions#power)`
// //     }
// //   },

// //   {
// //     name: 'Quotient Rule (Exponents)',
// //     category: 'Exponent Rules',
// //     formula: `$$\\frac{a^m}{a^n} = a^{m-n}$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#2' },
// //     fields: {
// //       explanation: `Dividing powers with the same base: keep the base, subtract the exponents.`,
// //       conditions: `$a \\neq 0$.`,
// //       related_formulas: `- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)\n- [Negative Exponent](!/algebra/formulas#negative_exponent)`,
// //       related_definitions: `- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_exponents)\n- [Power](!/algebra/definitions#power)`
// //     }
// //   },

// //   {
// //     name: 'Power of a Power',
// //     category: 'Exponent Rules',
// //     formula: `$$(a^m)^n = a^{mn}$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#3' },
// //     fields: {
// //       explanation: `Raising a power to another power: keep the base, multiply the exponents.`,
// //       related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
// //       related_definitions: `- [Power of a Power](!/algebra/definitions#power_of_a_power)`
// //     }
// //   },

// //   {
// //     name: 'Power of a Product',
// //     category: 'Exponent Rules',
// //     formula: `$$(ab)^n = a^n \\cdot b^n$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#4' },
// //     fields: {
// //       explanation: `A power applied to a product distributes to each factor.`,
// //       related_formulas: `- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
// //       related_definitions: `- [Power of a Product](!/algebra/definitions#power_of_a_product)`
// //     }
// //   },

// //   {
// //     name: 'Power of a Quotient',
// //     category: 'Exponent Rules',
// //     formula: `$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
// //     fields: {
// //       explanation: `A power applied to a fraction distributes to numerator and denominator separately.`,
// //       conditions: `$b \\neq 0$.`,
// //       related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)`,
// //       related_definitions: `- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
// //     }
// //   },

// //   {
// //     name: 'Zero Exponent',
// //     category: 'Exponent Rules',
// //     formula: `$$a^0 = 1 \\quad (a \\neq 0)$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#7' },
// //     fields: {
// //       explanation: `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
// //       conditions: `$a \\neq 0$. The expression $0^0$ is indeterminate.`,
// //       related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
// //       related_definitions: `- [Zero Exponent](!/algebra/definitions#zero_exponent)`
// //     }
// //   },

// //   {
// //     name: 'Negative Exponent',
// //     category: 'Exponent Rules',
// //     formula: `$$a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#6' },
// //     fields: {
// //       explanation: `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
// //       conditions: `$a \\neq 0$.`,
// //       related_formulas: `- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
// //       related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)`
// //     }
// //   },

// //   {
// //     name: 'Negative Exponent Flip',
// //     category: 'Exponent Rules',
// //     formula: `$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$`,
// //     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
// //     fields: {
// //       explanation: `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
// //       conditions: `$a \\neq 0$ and $b \\neq 0$.`,
// //       related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
// //       related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)\n- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
// //     }
// //   },


// //   // ─── Category: Radical Rules (7 entries) ─────────────────────


// //   {
// //     name: 'Radical to Exponent Conversion',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{a} = a^{1/n}$$`,
// //     link: { label: 'Rational Exponents', url: '/algebra/roots/rational-exponents#1' },
// //     fields: {
// //       explanation: `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
// //       related_formulas: `- [Power Rule (Radicals)](!/algebra/formulas#power_rule_radicals)`,
// //       related_definitions: `- [Rational Exponent](!/algebra/definitions#rational_exponent)\n- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
// //     }
// //   },

// //   {
// //     name: 'Product Rule (Radicals)',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$`,
// //     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#1' },
// //     fields: {
// //       explanation: `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
// //       conditions: `For even $n$: $a \\geq 0$ and $b \\geq 0$. For odd $n$: no restriction.`,
// //       related_formulas: `- [Quotient Rule (Radicals)](!/algebra/formulas#quotient_rule_radicals)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
// //       related_definitions: `- [Product Rule (Radicals)](!/algebra/definitions#product_rule_radicals)`
// //     }
// //   },

// //   {
// //     name: 'Quotient Rule (Radicals)',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$`,
// //     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#2' },
// //     fields: {
// //       explanation: `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
// //       conditions: `$b \\neq 0$. For even $n$: $a \\geq 0$ and $b > 0$.`,
// //       related_formulas: `- [Product Rule (Radicals)](!/algebra/formulas#product_rule_radicals)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
// //       related_definitions: `- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_radicals)`
// //     }
// //   },

// //   {
// //     name: 'Power Rule (Radicals)',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{a^m} = a^{m/n}$$`,
// //     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#3' },
// //     fields: {
// //       explanation: `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
// //       conditions: `For even $n$: $a \\geq 0$.`,
// //       related_formulas: `- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
// //       related_definitions: `- [Power Rule (Radicals)](!/algebra/definitions#power_rule_radicals)\n- [Rational Exponent](!/algebra/definitions#rational_exponent)`
// //     }
// //   },

// //   {
// //     name: 'Nested Radicals',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$`,
// //     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#4' },
// //     fields: {
// //       explanation: `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
// //       related_formulas: `- [Power of a Power](!/algebra/formulas#power_of_a_power)\n- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)`,
// //       related_definitions: `- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
// //     }
// //   },

// //   {
// //     name: 'Even Root Identity',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{a^n} = |a| \\quad (n \\text{ even})$$`,
// //     link: { label: 'Root Properties', url: '/algebra/roots/properties#4' },
// //     fields: {
// //       explanation: `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
// //       related_formulas: `- [Odd Root Identity](!/algebra/formulas#odd_root_identity)`,
// //       related_definitions: `- [Principal Root](!/algebra/definitions#principal_root)\n- [Absolute Value](!/algebra/definitions#absolute_value)`
// //     }
// //   },

// //   {
// //     name: 'Odd Root Identity',
// //     category: 'Radical Rules',
// //     formula: `$$\\sqrt[n]{a^n} = a \\quad (n \\text{ odd})$$`,
// //     link: { label: 'Root Properties', url: '/algebra/roots/properties#5' },
// //     fields: {
// //       explanation: `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
// //       related_formulas: `- [Even Root Identity](!/algebra/formulas#even_root_identity)`,
// //       related_definitions: `- [Root](!/algebra/definitions#root)\n- [Index](!/algebra/definitions#index)`
// //     }
// //   },

// // // ─── Category: Polynomial Theorems (8 entries) ──────────────

// //   {
// //     name: 'Remainder Theorem',
// //     category: 'Polynomial Theorems',
// //     formula: `$$P(x) = (x - c) \\cdot Q(x) + P(c)$$`,
// //     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#1' },
// //     fields: {
// //       explanation: `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
// //       conditions: `$P(x)$ is a polynomial. $c$ is any real number.`,
// //       related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
// //       related_definitions: `- [Remainder Theorem](!/algebra/definitions#remainder_theorem)\n- [Polynomial](!/algebra/definitions#polynomial)`
// //     }
// //   },

// //   {
// //     name: 'Factor Theorem',
// //     category: 'Polynomial Theorems',
// //     formula: `$$(x - c) \\text{ is a factor of } P(x) \\iff P(c) = 0$$`,
// //     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#3' },
// //     fields: {
// //       explanation: `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
// //       related_formulas: `- [Remainder Theorem](!/algebra/formulas#remainder_theorem)\n- [Rational Root Theorem](!/algebra/formulas#rational_root_theorem)`,
// //       related_definitions: `- [Factor Theorem](!/algebra/definitions#factor_theorem)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)`
// //     }
// //   },

// //   {
// //     name: 'Rational Root Theorem',
// //     category: 'Polynomial Theorems',
// //     formula: `$$\\text{If } \\frac{p}{q} \\text{ is a root: } p \\mid a_0 \\text{ and } q \\mid a_n$$`,
// //     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#5' },
// //     fields: {
// //       explanation: `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
// //       conditions: `All coefficients must be integers. $a_n \\neq 0$. The theorem finds rational roots only — irrational and complex roots require other methods.`,
// //       related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
// //       related_definitions: `- [Rational Root Theorem](!/algebra/definitions#rational_root_theorem)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)\n- [Constant Term](!/algebra/definitions#constant_term)`
// //     }
// //   },

// //   {
// //     name: 'Vieta\'s Formulas (Quadratic)',
// //     category: 'Polynomial Theorems',
// //     formula: `$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$`,
// //     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#6' },
// //     fields: {
// //       explanation: `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
// //       related_formulas: `- [Vieta's Formulas (General)](!/algebra/formulas#vietas_formulas_general)\n- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
// //       related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Coefficient](!/algebra/definitions#coefficient)`
// //     }
// //   },

// //   {
// //     name: 'Binomial Theorem',
// //     category: 'Polynomial Theorems',
// //     formula: `$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$`,
// //     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
// //     fields: {
// //       explanation: `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
// //       conditions: `$n$ is a non-negative integer.`,
// //       related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
// //       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Binomial Coefficient',
// //     category: 'Polynomial Theorems',
// //     formula: `$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$`,
// //     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
// //     fields: {
// //       explanation: `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read "$n$ choose $k$."`,
// //       conditions: `$0 \\leq k \\leq n$, both non-negative integers. By convention, $\\binom{n}{k} = 0$ when $k > n$ or $k < 0$.`,
// //       variants: `Symmetry property:\n\n$$\\binom{n}{k} = \\binom{n}{n-k}$$`,
// //       related_formulas: `- [Binomial Theorem](!/algebra/formulas#binomial_theorem)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
// //       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Pascal\'s Rule',
// //     category: 'Polynomial Theorems',
// //     formula: `$$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$$`,
// //     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
// //     fields: {
// //       explanation: `Each entry in Pascal's triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
// //       related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Binomial Theorem](!/algebra/formulas#binomial_theorem)`,
// //       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
// //     }
// //   },

// //   {
// //     name: 'Vieta\'s Formulas (General)',
// //     category: 'Polynomial Theorems',
// //     formula: `$$r_1 + r_2 + r_3 = -a_{n-1} \\qquad r_1 r_2 r_3 = (-1)^n a_0$$`,
// //     link: { label: 'Polynomial Equations', url: '/algebra/equations/polynomial#9' },
// //     fields: {
// //       explanation: `Generalizes Vieta's formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
// //       notation: `For a monic polynomial $x^n + a_{n-1}x^{n-1} + \\cdots + a_0$, the elementary symmetric sums of the roots $r_1, \\ldots, r_n$ equal the coefficients (up to sign).`,
// //       conditions: `Leading coefficient is 1 (monic). For non-monic polynomials, divide all coefficients by $a_n$ first.`,
// //       related_formulas: `- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
// //       related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)`
// //     }
// //   },


// // ];

// // export default algebraFormulasList;



// const algebraFormulasList = [


//   // ─── Sequences (split into 5 sub-categories, 37 entries total) ───
// //
// // Append these entries to algebraFormulasList (insert before the closing `];`).
// // Categories: Arithmetic Sequences (6), Geometric Sequences (7), Harmonic Sequences (3),
// //             Recursive Sequences (11), Figurate Numbers (10).
// // Hub page /algebra/sequences is reflective; no link.url targets it.
// //
// // v4 changes vs v3:
// //   • Merged single-entry 'Prime Numbers' into Recursive Sequences
// //     (one-item buckets aren't categories).
// //
// // Definition backfill needed: 40 sequences entities across 7 registry sub-categories
// // (see sequences_entity_registry_block_v3.md).
// // related_definitions cross-links point to anchors that do not yet exist on
// // /algebra/definitions — they will resolve once definitions are written.


// // --- Arithmetic Sequences (6) ------------------------------

// {
//   name: 'Common Difference',
//   category: 'Arithmetic Sequences',
//   formula: `$$a_{n+1} - a_n = d$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
//     explanation: [
//       `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_n,\\ a_{n+1}$', operation: 'subtract consecutive terms' },
//           { value: '$d$' }
//         ]
//       }
//     ],
//     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)`,
//     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Common Difference](!/algebra/definitions#common_difference)`
//   }
// },

// {
//   name: 'General Term (Arithmetic Sequence)',
//   category: 'Arithmetic Sequences',
//   formula: `$$a_n = a_1 + (n - 1)d$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
//     explanation: [
//       `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1$', operation: 'add $d$, $n - 1$ times' },
//           { value: '$a_n$' }
//         ]
//       }
//     ],
//     conditions: `$n \\geq 1$. The common difference $d$ can be any real number, including zero.`,
//     related_formulas: `- [Common Difference](!/algebra/formulas#common_difference)\n- [Recursive Form (Arithmetic Sequence)](!/algebra/formulas#recursive_form_arithmetic_sequence)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
//     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)\n- [Term (of a Sequence)](!/algebra/definitions#term_of_a_sequence)`
//   }
// },

// {
//   name: 'Recursive Form (Arithmetic Sequence)',
//   category: 'Arithmetic Sequences',
//   formula: `$$a_1 = c, \\quad a_n = a_{n-1} + d$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
//     explanation: [
//       `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1 = c$', operation: '$+ d$' },
//           { value: '$a_2$', operation: '$+ d$' },
//           { value: '$a_3$', operation: '$+ d$' },
//           { value: '$\\cdots$' }
//         ]
//       }
//     ],
//     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Common Difference](!/algebra/formulas#common_difference)`,
//     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
//   }
// },

// {
//   name: 'Arithmetic Series Sum',
//   category: 'Arithmetic Sequences',
//   formula: `$$S_n = \\frac{n}{2}(a_1 + a_n)$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
//     explanation: [
//       `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1,\\ a_n$', operation: 'add' },
//           { value: '$a_1 + a_n$', operation: 'multiply by $\\frac{n}{2}$' },
//           { value: '$S_n$' }
//         ]
//       }
//     ],
//     derivation: [
//       `Write the sum forwards and backwards, then add term by term.`,
//       {
//         component: 'MathDerivation',
//         items: [
//           { expr: '$S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \\cdots + a_n$', operation: 'write again, reversed' },
//           { expr: '$S_n = a_n + (a_n - d) + (a_n - 2d) + \\cdots + a_1$', operation: 'add term by term' },
//           { expr: '$2S_n = n(a_1 + a_n)$', operation: 'divide by 2' },
//           { expr: '$S_n = \\frac{n}{2}(a_1 + a_n)$', tag: 'result' }
//         ]
//       }
//     ],
//     variants: `Expanded form using only $a_1$ and $d$ (useful when $a_n$ is not given directly):\n\n$$S_n = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$$`,
//     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
//     related_definitions: `- [Arithmetic Series](!/algebra/definitions#arithmetic_series)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
//   }
// },

// {
//   name: 'Arithmetic Mean',
//   category: 'Arithmetic Sequences',
//   formula: `$$M = \\frac{a + b}{2}$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
//     explanation: [
//       `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a,\\ b$', operation: 'add' },
//           { value: '$a + b$', operation: 'divide by $2$' },
//           { value: '$M$' }
//         ]
//       }
//     ],
//     variants: `For $n$ values:\n\n$$M = \\frac{a_1 + a_2 + \\cdots + a_n}{n}$$`,
//     related_formulas: `- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
//     related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
//   }
// },

// {
//   name: 'Arithmetic Mean Property',
//   category: 'Arithmetic Sequences',
//   formula: `$$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$$`,
//   link: { label: 'Arithmetic Sequences', url: '/algebra/sequences/arithmetic#6' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
//     explanation: [
//       `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_{n-1},\\ a_{n+1}$', operation: 'add, divide by $2$' },
//           { value: '$a_n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Common Difference](!/algebra/formulas#common_difference)\n- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)`,
//     related_definitions: `- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)\n- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)`
//   }
// },


// // --- Geometric Sequences (7) -------------------------------

// {
//   name: 'Common Ratio',
//   category: 'Geometric Sequences',
//   formula: `$$\\frac{a_{n+1}}{a_n} = r$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
//     explanation: [
//       `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_n,\\ a_{n+1}$', operation: 'divide consecutive terms' },
//           { value: '$r$' }
//         ]
//       }
//     ],
//     conditions: `$a_n \\neq 0$ for all $n$. The ratio $r$ may be any real number except $0$.`,
//     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)`,
//     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Common Ratio](!/algebra/definitions#common_ratio)`
//   }
// },

// {
//   name: 'General Term (Geometric Sequence)',
//   category: 'Geometric Sequences',
//   formula: `$$a_n = a_1 \\cdot r^{n-1}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
//     explanation: [
//       `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1$', operation: 'multiply by $r$, $n - 1$ times' },
//           { value: '$a_n$' }
//         ]
//       }
//     ],
//     conditions: `$a_1 \\neq 0$ and $r \\neq 0$. $n \\geq 1$.`,
//     related_formulas: `- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Recursive Form (Geometric Sequence)](!/algebra/formulas#recursive_form_geometric_sequence)\n- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)`,
//     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Explicit Formula](!/algebra/definitions#explicit_formula)`
//   }
// },

// {
//   name: 'Recursive Form (Geometric Sequence)',
//   category: 'Geometric Sequences',
//   formula: `$$a_1 = c, \\quad a_n = r \\cdot a_{n-1}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
//     explanation: [
//       `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1 = c$', operation: '$\\times r$' },
//           { value: '$a_2$', operation: '$\\times r$' },
//           { value: '$a_3$', operation: '$\\times r$' },
//           { value: '$\\cdots$' }
//         ]
//       }
//     ],
//     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Common Ratio](!/algebra/formulas#common_ratio)`,
//     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
//   }
// },

// {
//   name: 'Finite Geometric Series Sum',
//   category: 'Geometric Sequences',
//   formula: `$$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
//     explanation: [
//       `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1,\\ r,\\ n$', operation: 'apply $\\frac{1 - r^n}{1 - r}$' },
//           { value: '$S_n$' }
//         ]
//       }
//     ],
//     derivation: [
//       `Multiply $S_n$ by $r$, then subtract.`,
//       {
//         component: 'MathDerivation',
//         items: [
//           { expr: '$S_n = a_1 + a_1 r + a_1 r^2 + \\cdots + a_1 r^{n-1}$', operation: 'multiply both sides by $r$' },
//           { expr: '$rS_n = a_1 r + a_1 r^2 + \\cdots + a_1 r^n$', operation: 'subtract from $S_n$' },
//           { expr: '$S_n - rS_n = a_1 - a_1 r^n$', operation: 'factor and divide by $1 - r$' },
//           { expr: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$', tag: 'result' }
//         ]
//       }
//     ],
//     conditions: `$r \\neq 1$. When $r = 1$, every term equals $a_1$ and $S_n = n a_1$.`,
//     related_formulas: `- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)\n- [Infinite Geometric Series Sum](!/algebra/formulas#infinite_geometric_series_sum)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
//     related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
//   }
// },

// {
//   name: 'Infinite Geometric Series Sum',
//   category: 'Geometric Sequences',
//   formula: `$$S = \\frac{a_1}{1 - r}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#6' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
//     explanation: [
//       `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1,\\ r$', operation: 'divide $a_1$ by $1 - r$' },
//           { value: '$S$' }
//         ]
//       }
//     ],
//     conditions: `$|r| < 1$. When $|r| \\geq 1$ the terms do not diminish and the series diverges (no finite sum).`,
//     related_formulas: `- [Finite Geometric Series Sum](!/algebra/formulas#finite_geometric_series_sum)\n- [General Term (Geometric Sequence)](!/algebra/formulas#general_term_geometric_sequence)`,
//     related_definitions: `- [Geometric Series](!/algebra/definitions#geometric_series)\n- [Geometric Sequence](!/algebra/definitions#geometric_sequence)`
//   }
// },

// {
//   name: 'Geometric Mean',
//   category: 'Geometric Sequences',
//   formula: `$$G = \\sqrt{ab}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
//     explanation: [
//       `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a,\\ b$', operation: 'multiply' },
//           { value: '$ab$', operation: 'take square root' },
//           { value: '$G$' }
//         ]
//       }
//     ],
//     conditions: `$a > 0$ and $b > 0$.`,
//     variants: `For $n$ positive values:\n\n$$G = \\sqrt[n]{a_1 \\cdot a_2 \\cdots a_n}$$`,
//     related_formulas: `- [Geometric Mean Property](!/algebra/formulas#geometric_mean_property)\n- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
//     related_definitions: `- [Geometric Mean](!/algebra/definitions#geometric_mean)`
//   }
// },

// {
//   name: 'Geometric Mean Property',
//   category: 'Geometric Sequences',
//   formula: `$$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$$`,
//   link: { label: 'Geometric Sequences', url: '/algebra/sequences/geometric#7' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
//     explanation: [
//       `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_{n-1},\\ a_{n+1}$', operation: 'multiply, take square root' },
//           { value: '$a_n$' }
//         ]
//       }
//     ],
//     conditions: `All terms positive.`,
//     related_formulas: `- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Common Ratio](!/algebra/formulas#common_ratio)\n- [Arithmetic Mean Property](!/algebra/formulas#arithmetic_mean_property)`,
//     related_definitions: `- [Geometric Sequence](!/algebra/definitions#geometric_sequence)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)`
//   }
// },


// // --- Harmonic Sequences (3) --------------------------------

// {
//   name: 'General Term (Harmonic Sequence)',
//   category: 'Harmonic Sequences',
//   formula: `$$a_n = \\frac{1}{b_1 + (n-1)d}$$`,
//   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
//     explanation: [
//       `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'arithmetic: $b_1 + (n-1)d$' },
//           { value: '$b_n$', operation: 'reciprocal' },
//           { value: '$a_n$' }
//         ]
//       }
//     ],
//     conditions: `$b_1 + (n-1)d \\neq 0$ for every $n$ in the range of interest.`,
//     related_formulas: `- [General Term (Arithmetic Sequence)](!/algebra/formulas#general_term_arithmetic_sequence)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
//     related_definitions: `- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
//   }
// },

// {
//   name: 'Harmonic Mean',
//   category: 'Harmonic Sequences',
//   formula: `$$H = \\frac{n}{\\dfrac{1}{a_1} + \\dfrac{1}{a_2} + \\cdots + \\dfrac{1}{a_n}}$$`,
//   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
//     explanation: [
//       `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$a_1, \\ldots, a_n$', operation: 'take reciprocals, sum' },
//           { value: '$\\sum \\frac{1}{a_i}$', operation: 'divide $n$ by this sum' },
//           { value: '$H$' }
//         ]
//       }
//     ],
//     conditions: `All $a_i > 0$.`,
//     variants: `For two positive numbers:\n\n$$H = \\frac{2ab}{a + b}$$`,
//     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [AM-GM-HM Inequality](!/algebra/formulas#am_gm_hm_inequality)`,
//     related_definitions: `- [Harmonic Mean](!/algebra/definitions#harmonic_mean)\n- [Harmonic Sequence](!/algebra/definitions#harmonic_sequence)`
//   }
// },

// {
//   name: 'AM-GM-HM Inequality',
//   category: 'Harmonic Sequences',
//   formula: `$$H \\leq G \\leq A$$`,
//   link: { label: 'Harmonic Sequences', url: '/algebra/sequences/harmonic#5' },
//   fields: {
//     // FMD SKIPPED: three-way inequality relation, not a linear chain of computation.
//     explanation: `For any set of positive numbers, the harmonic mean is at most the geometric mean, which is at most the arithmetic mean. Equality holds throughout if and only if all values are identical.`,
//     conditions: `All values positive.`,
//     variants: `For two positive numbers $a$ and $b$:\n\n$$\\frac{2ab}{a+b} \\leq \\sqrt{ab} \\leq \\frac{a+b}{2}$$`,
//     related_formulas: `- [Arithmetic Mean](!/algebra/formulas#arithmetic_mean)\n- [Geometric Mean](!/algebra/formulas#geometric_mean)\n- [Harmonic Mean](!/algebra/formulas#harmonic_mean)`,
//     related_definitions: `- [Arithmetic Mean](!/algebra/definitions#arithmetic_mean)\n- [Geometric Mean](!/algebra/definitions#geometric_mean)\n- [Harmonic Mean](!/algebra/definitions#harmonic_mean)`
//   }
// },


// // --- Recursive Sequences (11) ------------------------------

// {
//   name: 'Fibonacci Recurrence',
//   category: 'Recursive Sequences',
//   formula: `$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
//     explanation: [
//       `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_{n-2},\\ F_{n-1}$', operation: 'sum' },
//           { value: '$F_n$' }
//         ]
//       }
//     ],
//     conditions: `$n \\geq 3$. An alternative indexing starts with $F_0 = 0, F_1 = 1$; the recurrence is unchanged.`,
//     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
//     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
//   }
// },

// {
//   name: 'Golden Ratio',
//   category: 'Recursive Sequences',
//   formula: `$$\\phi = \\frac{1 + \\sqrt{5}}{2}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#2' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
//     explanation: [
//       `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$1 + \\sqrt{5}$', operation: 'divide by $2$' },
//           { value: '$\\phi$' }
//         ]
//       }
//     ],
//     notation: `The second root of $x^2 = x + 1$ is $\\psi = \\frac{1 - \\sqrt{5}}{2} \\approx -0.618$. The two roots satisfy $\\phi + \\psi = 1$ and $\\phi \\cdot \\psi = -1$.`,
//     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
//     related_definitions: `- [Golden Ratio](!/algebra/definitions#golden_ratio)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Binet\'s Formula',
//   category: 'Recursive Sequences',
//   formula: `$$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#3' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
//     explanation: [
//       `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'raise $\\phi$ and $\\psi$ to power $n$' },
//           { value: '$\\phi^n,\\ \\psi^n$', operation: 'subtract, divide by $\\sqrt{5}$' },
//           { value: '$F_n$' }
//         ]
//       }
//     ],
//     notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
//     conditions: `Holds for all $n \\geq 1$.`,
//     related_formulas: `- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)`,
//     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
//   }
// },

// {
//   name: 'Cassini\'s Identity',
//   category: 'Recursive Sequences',
//   formula: `$$F_{n-1} F_{n+1} - F_n^2 = (-1)^n$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
//     explanation: [
//       `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_{n-1},\\ F_n,\\ F_{n+1}$', operation: 'compute $F_{n-1}F_{n+1} - F_n^2$' },
//           { value: '$(-1)^n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Binet's Formula](!/algebra/formulas#binets_formula)`,
//     related_definitions: `- [Cassini's Identity](!/algebra/definitions#cassinis_identity)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Sum of Fibonacci Numbers',
//   category: 'Recursive Sequences',
//   formula: `$$\\sum_{k=1}^{n} F_k = F_{n+2} - 1$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
//     explanation: [
//       `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_1, F_2, \\ldots, F_n$', operation: 'sum' },
//           { value: '$F_{n+2} - 1$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Squared Fibonacci Numbers](!/algebra/formulas#sum_of_squared_fibonacci_numbers)`,
//     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Sum of Squared Fibonacci Numbers',
//   category: 'Recursive Sequences',
//   formula: `$$\\sum_{k=1}^{n} F_k^2 = F_n \\cdot F_{n+1}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
//     explanation: [
//       `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_1^2 + F_2^2 + \\cdots + F_n^2$', operation: 'sum' },
//           { value: '$F_n \\cdot F_{n+1}$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)\n- [Sum of Fibonacci Numbers](!/algebra/formulas#sum_of_fibonacci_numbers)`,
//     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Fibonacci GCD Identity',
//   category: 'Recursive Sequences',
//   formula: `$$\\gcd(F_m, F_n) = F_{\\gcd(m, n)}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
//     explanation: [
//       `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_m,\\ F_n$', operation: '$\\gcd$' },
//           { value: '$F_{\\gcd(m,n)}$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
//     related_definitions: `- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Lucas Recurrence',
//   category: 'Recursive Sequences',
//   formula: `$$L_1 = 1, \\quad L_2 = 3, \\quad L_n = L_{n-1} + L_{n-2}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
//     explanation: [
//       `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$L_{n-2},\\ L_{n-1}$', operation: 'sum' },
//           { value: '$L_n$' }
//         ]
//       }
//     ],
//     conditions: `$n \\geq 3$.`,
//     related_formulas: `- [Lucas-Fibonacci Relation](!/algebra/formulas#lucas_fibonacci_relation)\n- [Lucas Binet Formula](!/algebra/formulas#lucas_binet_formula)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
//     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Lucas-Fibonacci Relation',
//   category: 'Recursive Sequences',
//   formula: `$$L_n = F_{n-1} + F_{n+1}$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
//     explanation: [
//       `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$F_{n-1},\\ F_{n+1}$', operation: 'sum' },
//           { value: '$L_n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)\n- [Fibonacci Recurrence](!/algebra/formulas#fibonacci_recurrence)`,
//     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Fibonacci Sequence](!/algebra/definitions#fibonacci_sequence)`
//   }
// },

// {
//   name: 'Lucas Binet Formula',
//   category: 'Recursive Sequences',
//   formula: `$$L_n = \\phi^n + \\psi^n$$`,
//   link: { label: 'Fibonacci Sequence', url: '/algebra/sequences/fibonacci#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet's formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
//     explanation: [
//       `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet&apos;s formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'raise $\\phi$ and $\\psi$ to power $n$' },
//           { value: '$\\phi^n,\\ \\psi^n$', operation: 'add' },
//           { value: '$L_n$' }
//         ]
//       }
//     ],
//     notation: `$\\phi = \\frac{1 + \\sqrt{5}}{2}$ and $\\psi = \\frac{1 - \\sqrt{5}}{2}$.`,
//     related_formulas: `- [Binet's Formula](!/algebra/formulas#binets_formula)\n- [Golden Ratio](!/algebra/formulas#golden_ratio)\n- [Lucas Recurrence](!/algebra/formulas#lucas_recurrence)`,
//     related_definitions: `- [Lucas Numbers](!/algebra/definitions#lucas_numbers)\n- [Golden Ratio](!/algebra/definitions#golden_ratio)`
//   }
// },


// {
//   name: 'Prime Number Theorem',
//   category: 'Recursive Sequences',
//   formula: `$$\\pi(n) \\approx \\frac{n}{\\ln n}$$`,
//   link: { label: 'Prime Numbers', url: '/algebra/sequences/prime-numbers#6' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
//     explanation: [
//       `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'divide by $\\ln n$' },
//           { value: '$\\pi(n)$ (approx.)' }
//         ]
//       }
//     ],
//     notation: `$\\pi(n)$ is the prime-counting function: the number of primes $p \\leq n$.`,
//     related_formulas: ``,
//     related_definitions: `- [Prime Number](!/algebra/definitions#prime_number)\n- [Prime Number Theorem](!/algebra/definitions#prime_number_theorem)`
//   }
// },


// // --- Figurate Numbers: Triangular (5) ----------------------

// {
//   name: 'Triangular Number Formula',
//   category: 'Figurate Numbers',
//   formula: `$$T_n = \\frac{n(n+1)}{2}$$`,
//   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
//     explanation: [
//       `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'multiply by $n+1$, divide by $2$' },
//           { value: '$T_n$' }
//         ]
//       }
//     ],
//     derivation: [
//       `Pair the first and last terms (Gauss).`,
//       {
//         component: 'MathDerivation',
//         items: [
//           { expr: '$S = 1 + 2 + 3 + \\cdots + n$', operation: 'write again, reversed' },
//           { expr: '$S = n + (n-1) + (n-2) + \\cdots + 1$', operation: 'add term by term' },
//           { expr: '$2S = n(n+1)$', operation: 'divide by 2' },
//           { expr: '$S = \\frac{n(n+1)}{2}$', tag: 'result' }
//         ]
//       }
//     ],
//     related_formulas: `- [Recursive Form (Triangular Numbers)](!/algebra/formulas#recursive_form_triangular_numbers)\n- [Triangular Number as Binomial Coefficient](!/algebra/formulas#triangular_number_as_binomial_coefficient)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
//     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
//   }
// },

// {
//   name: 'Recursive Form (Triangular Numbers)',
//   category: 'Figurate Numbers',
//   formula: `$$T_1 = 1, \\quad T_n = T_{n-1} + n$$`,
//   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#2' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
//     explanation: [
//       `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$T_1 = 1$', operation: '$+ 2$' },
//           { value: '$T_2 = 3$', operation: '$+ 3$' },
//           { value: '$T_3 = 6$', operation: '$+ n$' },
//           { value: '$T_n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)`,
//     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
//   }
// },

// {
//   name: 'Triangular Number as Binomial Coefficient',
//   category: 'Figurate Numbers',
//   formula: `$$T_n = \\binom{n+1}{2}$$`,
//   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#3' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
//     explanation: [
//       `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n + 1$', operation: 'choose $2$' },
//           { value: '$T_n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)`,
//     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Binomial](!/algebra/definitions#binomial)`
//   }
// },

// {
//   name: 'Sum of Consecutive Triangular Numbers',
//   category: 'Figurate Numbers',
//   formula: `$$T_n + T_{n-1} = n^2$$`,
//   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
//     explanation: [
//       `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$T_{n-1},\\ T_n$', operation: 'add' },
//           { value: '$n^2$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
//     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Square Number](!/algebra/definitions#square_number)`
//   }
// },

// {
//   name: 'Sum of Triangular Numbers',
//   category: 'Figurate Numbers',
//   formula: `$$\\sum_{k=1}^{n} T_k = \\frac{n(n+1)(n+2)}{6}$$`,
//   link: { label: 'Triangular Numbers', url: '/algebra/sequences/triangular-numbers#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
//     explanation: [
//       `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$T_1, T_2, \\ldots, T_n$', operation: 'sum' },
//           { value: '$\\frac{n(n+1)(n+2)}{6}$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Triangular Number Formula](!/algebra/formulas#triangular_number_formula)\n- [Sum of Squares](!/algebra/formulas#sum_of_squares)`,
//     related_definitions: `- [Triangular Number](!/algebra/definitions#triangular_number)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
//   }
// },


// // --- Figurate Numbers: Square + Pythagorean (5) ------------

// {
//   name: 'Square Number Formula',
//   category: 'Figurate Numbers',
//   formula: `$$S_n = n^2$$`,
//   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#1' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
//     explanation: [
//       `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$n$', operation: 'square' },
//           { value: '$n^2$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)\n- [Sum of Consecutive Triangular Numbers](!/algebra/formulas#sum_of_consecutive_triangular_numbers)`,
//     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Perfect Square](!/algebra/definitions#perfect_square)\n- [Figurate Number](!/algebra/definitions#figurate_number)`
//   }
// },

// {
//   name: 'Recursive Form (Square Numbers)',
//   category: 'Figurate Numbers',
//   formula: `$$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$`,
//   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
//     explanation: [
//       `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$S_1 = 1$', operation: '$+ 3$' },
//           { value: '$S_2 = 4$', operation: '$+ 5$' },
//           { value: '$S_3 = 9$', operation: '$+ (2n-1)$' },
//           { value: '$S_n$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of First n Odd Numbers](!/algebra/formulas#sum_of_first_n_odd_numbers)`,
//     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Gnomon](!/algebra/definitions#gnomon)\n- [Recursive Formula](!/algebra/definitions#recursive_formula)`
//   }
// },

// {
//   name: 'Sum of First n Odd Numbers',
//   category: 'Figurate Numbers',
//   formula: `$$1 + 3 + 5 + \\cdots + (2n - 1) = n^2$$`,
//   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#2' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
//     explanation: [
//       `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$1, 3, 5, \\ldots, 2n-1$', operation: 'sum' },
//           { value: '$n^2$' }
//         ]
//       }
//     ],
//     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Recursive Form (Square Numbers)](!/algebra/formulas#recursive_form_square_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
//     related_definitions: `- [Square Number](!/algebra/definitions#square_number)\n- [Arithmetic Sequence](!/algebra/definitions#arithmetic_sequence)`
//   }
// },

// {
//   name: 'Sum of Squares',
//   category: 'Figurate Numbers',
//   formula: `$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$`,
//   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#4' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
//     explanation: [
//       `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$1^2, 2^2, \\ldots, n^2$', operation: 'sum' },
//           { value: '$\\frac{n(n+1)(2n+1)}{6}$' }
//         ]
//       }
//     ],
//     derivation: [
//       `Use the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$.`,
//       {
//         component: 'MathDerivation',
//         items: [
//           { expr: '$(k+1)^3 - k^3 = 3k^2 + 3k + 1$', operation: 'sum for $k = 1$ to $n$' },
//           { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$', operation: 'substitute $\\sum k = \\frac{n(n+1)}{2}$' },
//           { expr: '$(n+1)^3 - 1 = 3\\sum k^2 + \\frac{3n(n+1)}{2} + n$', operation: 'solve for $\\sum k^2$' },
//           { expr: '$\\sum k^2 = \\frac{n(n+1)(2n+1)}{6}$', tag: 'result' }
//         ]
//       }
//     ],
//     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)\n- [Sum of Triangular Numbers](!/algebra/formulas#sum_of_triangular_numbers)\n- [Arithmetic Series Sum](!/algebra/formulas#arithmetic_series_sum)`,
//     related_definitions: `- [Square Number](!/algebra/definitions#square_number)`
//   }
// },


// {
//   name: 'Pythagorean Triple Generator',
//   category: 'Figurate Numbers',
//   formula: `$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$`,
//   link: { label: 'Square Numbers', url: '/algebra/sequences/square-numbers#5' },
//   fields: {
//     // ORIGINAL:
//     // explanation: `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
//     explanation: [
//       `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
//       {
//         component: 'FunctionMachineDiagram',
//         steps: [
//           { value: '$m,\\ n$', operation: 'apply generator formulas' },
//           { value: '$(a, b, c)$' }
//         ]
//       }
//     ],
//     conditions: `$m > n > 0$, $\\gcd(m, n) = 1$, and $m, n$ of opposite parity (one even, one odd).`,
//     related_formulas: `- [Square Number Formula](!/algebra/formulas#square_number_formula)`,
//     related_definitions: `- [Pythagorean Triple](!/algebra/definitions#pythagorean_triple)\n- [Square Number](!/algebra/definitions#square_number)`
//   }
// },

//   // ─── Category: Equations (6 entries) ─────────────────────────

//   {
//     name: 'Quadratic Formula',
//     category: 'Equations',
//     formula: `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#4' },
//     fields: {
//       // FMD already present — untouched.
//       explanation: [
//         `Gives the two solutions of any quadratic equation $ax^2 + bx + c = 0$ directly from its coefficients. The $\\pm$ produces two values: one using $+$, the other using $-$. The expression under the square root, $b^2 - 4ac$, is the discriminant — it determines whether the roots are real and distinct, real and equal, or complex.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: 'a, b, c', operation: 'compute discriminant b² − 4ac' },
//             { value: '√Δ', operation: 'apply ± and divide by 2a' },
//             { value: 'x₁, x₂', operation: '' }
//           ],
//           label: 'Quadratic Formula'
//         }
//       ],
//       derivation: [
//         `Derived by completing the square on $ax^2 + bx + c = 0$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$ax^2 + bx + c = 0$', operation: 'divide by $a$' },
//             { expr: '$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$', operation: 'complete the square' },
//             { expr: '$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$', operation: 'take square root' },
//             { expr: '$x + \\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2 - 4ac}}{2a}$', operation: 'isolate $x$' },
//             { expr: '$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$. If $b^2 - 4ac < 0$, the roots are complex.`,
//       related_formulas: `- [Discriminant](!/algebra/formulas#discriminant)\n- [Completing the Square](!/algebra/formulas#completing_the_square)\n- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
//       related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Coefficient](!/algebra/definitions#coefficient)\n- [Standard Form](!/algebra/definitions#standard_form)`
//     }
//   },

//   {
//     name: 'Discriminant',
//     category: 'Equations',
//     formula: `$$\\Delta = b^2 - 4ac$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#5' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
//       explanation: [
//         `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a,\\ b,\\ c$', operation: 'compute $b^2 - 4ac$' },
//             { value: '$\\Delta$' }
//           ]
//         }
//       ],
//       conditions: `Applies to quadratic equations in standard form $ax^2 + bx + c = 0$ with $a \\neq 0$.`,
//       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
//       related_definitions: `- [Discriminant](!/algebra/definitions#discriminant)\n- [Coefficient](!/algebra/definitions#coefficient)`
//     }
//   },

//   {
//     name: 'Square Root Property',
//     category: 'Equations',
//     formula: `$$x^2 = p \\implies x = \\pm\\sqrt{p}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
//       explanation: [
//         `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^2 = p$', operation: 'take square root, apply $\\pm$' },
//             { value: '$x = \\pm\\sqrt{p}$' }
//           ]
//         }
//       ],
//       conditions: `$p \\geq 0$ for real solutions. If $p < 0$, the solutions are complex.`,
//       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
//       related_definitions: `- [Solution](!/algebra/definitions#solution)\n- [Principal Root](!/algebra/definitions#principal_root)`
//     }
//   },

//   {
//     name: 'Completing the Square',
//     category: 'Equations',
//     formula: `$$x^2 + bx = \\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
//       explanation: [
//         `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^2 + bx$', operation: 'add and subtract $(b/2)^2$' },
//             { value: '$\\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$' }
//           ]
//         }
//       ],
//       derivation: [
//         `Expand the right side to verify.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$\\left(x + \\frac{b}{2}\\right)^2$', operation: 'expand' },
//             { expr: '$x^2 + 2 \\cdot x \\cdot \\frac{b}{2} + \\frac{b^2}{4}$', operation: 'simplify' },
//             { expr: '$x^2 + bx + \\frac{b^2}{4}$', operation: 'subtract $\\frac{b^2}{4}$' },
//             { expr: '$x^2 + bx$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Quadratic Formula](!/algebra/formulas#quadratic_formula)\n- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
//       related_definitions: `- [Standard Form](!/algebra/definitions#standard_form)\n- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)`
//     }
//   },

//   {
//     name: 'Absolute Value Equation',
//     category: 'Equations',
//     formula: `$$|p| = b \\implies p = b \\text{ or } p = -b \\quad (b > 0)$$`,
//     link: { label: 'Absolute Value Equations', url: '/algebra/equations/absolute-value#2' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
//       explanation: [
//         `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$|p| = b$', operation: 'split by sign' },
//             { value: '$p = b$ or $p = -b$' }
//           ]
//         }
//       ],
//       conditions: `$b > 0$. If $b = 0$, then $p = 0$ (single solution). If $b < 0$, no solution.`,
//       related_formulas: `- [Absolute Value Inequalities](!/algebra/formulas#absolute_value_inequalities)`,
//       related_definitions: `- [Absolute Value](!/algebra/definitions#absolute_value)\n- [Solution Set](!/algebra/definitions#solution_set)`
//     }
//   },

//   {
//     name: 'Absolute Value Inequalities',
//     category: 'Equations',
//     formula: `$$|p| < b \\implies -b < p < b \\qquad |p| > b \\implies p < -b \\text{ or } p > b$$`,
//     link: { label: 'Absolute Value Inequalities', url: '/algebra/inequalities/absolute-value#1' },
//     fields: {
//       // FMD SKIPPED: two parallel rules (< vs >) don't fit a single linear chain.
//       explanation: `A less-than inequality produces a compound inequality (a bounded interval). A greater-than inequality produces a disjunction (two unbounded rays).`,
//       conditions: `$b > 0$. Same pattern holds for $\\leq$ and $\\geq$.`,
//       variants: `Weak form:\n\n$$|p| \\leq b \\implies -b \\leq p \\leq b$$\n\n$$|p| \\geq b \\implies p \\leq -b \\text{ or } p \\geq b$$`,
//       related_formulas: `- [Absolute Value Equation](!/algebra/formulas#absolute_value_equation)`,
//       related_definitions: `- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality)\n- [Compound Inequality](!/algebra/definitions#compound_inequality)\n- [Interval Notation](!/algebra/definitions#interval_notation)`
//     }
//   },


//   // ─── Category: Logarithm Rules (8 entries) ──────────────────


//   {
//     name: 'Product Rule (Logarithms)',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(xy) = \\log_a(x) + \\log_a(y)$$`,
//     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#1' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
//       explanation: [
//         `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a(xy)$', operation: 'apply product rule' },
//             { value: '$\\log_a(x) + \\log_a(y)$' }
//           ]
//         }
//       ],
//       derivation: [
//         `Let $\\log_a(x) = m$ and $\\log_a(y) = n$, so $a^m = x$ and $a^n = y$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$xy = a^m \\cdot a^n$', operation: 'product rule for exponents' },
//             { expr: '$xy = a^{m+n}$', operation: 'convert to log form' },
//             { expr: '$\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
//       related_formulas: `- [Quotient Rule (Logarithms)](!/algebra/formulas#quotient_rule_logarithms)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
//       related_definitions: `- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_logarithms)`
//     }
//   },

//   {
//     name: 'Quotient Rule (Logarithms)',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$$`,
//     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#2' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
//       explanation: [
//         `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a\\!\\left(\\frac{x}{y}\\right)$', operation: 'apply quotient rule' },
//             { value: '$\\log_a(x) - \\log_a(y)$' }
//           ]
//         }
//       ],
//       conditions: `$a > 0$, $a \\neq 1$, $x > 0$, $y > 0$.`,
//       related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
//       related_definitions: `- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_logarithms)`
//     }
//   },

//   {
//     name: 'Power Rule (Logarithms)',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(x^n) = n \\cdot \\log_a(x)$$`,
//     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
//       explanation: [
//         `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a(x^n)$', operation: 'bring exponent down' },
//             { value: '$n \\cdot \\log_a(x)$' }
//           ]
//         }
//       ],
//       conditions: `$a > 0$, $a \\neq 1$, $x > 0$. $n$ can be any real number.`,
//       related_formulas: `- [Product Rule (Logarithms)](!/algebra/formulas#product_rule_logarithms)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
//       related_definitions: `- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_logarithms)`
//     }
//   },

//   {
//     name: 'Change of Base Formula',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$`,
//     link: { label: 'Logarithm Rules', url: '/algebra/logarithms/rules#4' },
//     fields: {
//       // FMD already present — untouched.
//       explanation: [
//         `Converts a logarithm from one base to another. Most commonly used with $b = 10$ or $b = e$ to evaluate logarithms on a calculator, which only has $\\log$ and $\\ln$ keys.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: 'log_a(x)', operation: 'compute log_b of both x and a' },
//             { value: 'log_b(x) and log_b(a)', operation: 'divide' },
//             { value: 'log_b(x) / log_b(a)', operation: '' }
//           ],
//           label: 'Change of Base'
//         }
//       ],
//       derivation: [
//         `Let $\\log_a(x) = k$, so $a^k = x$.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$a^k = x$', operation: 'take $\\log_b$ of both sides' },
//             { expr: '$\\log_b(a^k) = \\log_b(x)$', operation: 'power rule' },
//             { expr: '$k \\cdot \\log_b(a) = \\log_b(x)$', operation: 'divide by $\\log_b(a)$' },
//             { expr: '$k = \\frac{\\log_b(x)}{\\log_b(a)}$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `$a > 0$, $a \\neq 1$, $b > 0$, $b \\neq 1$, $x > 0$.`,
//       variants: `Common special case using natural log:\n\n$$\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$$`,
//       related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)`,
//       related_definitions: `- [Change of Base Formula](!/algebra/definitions#change_of_base_formula)\n- [Common Logarithm](!/algebra/definitions#common_logarithm)\n- [Natural Logarithm](!/algebra/definitions#natural_logarithm)`
//     }
//   },

//   {
//     name: 'Logarithm of the Base',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(a) = 1$$`,
//     link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
//       explanation: [
//         `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a(a)$', operation: 'evaluate' },
//             { value: '$1$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Logarithm of One](!/algebra/formulas#logarithm_of_one)\n- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
//       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Base of a Logarithm](!/algebra/definitions#base_of_a_logarithm)`
//     }
//   },

//   {
//     name: 'Logarithm of One',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(1) = 0$$`,
//     link: { label: 'Logarithms', url: '/algebra/logarithms#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
//       explanation: [
//         `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a(1)$', operation: 'evaluate' },
//             { value: '$0$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Logarithm of the Base](!/algebra/formulas#logarithm_of_the_base)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
//       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)`
//     }
//   },

//   {
//     name: 'Logarithm of an Exponential',
//     category: 'Logarithm Rules',
//     formula: `$$\\log_a(a^x) = x$$`,
//     link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Applying a logarithm to its own base's exponential cancels both operations, returning the exponent. The log "undoes" the exponential.`,
//       explanation: [
//         `Applying a logarithm to its own base&apos;s exponential cancels both operations, returning the exponent. The log &quot;undoes&quot; the exponential.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\log_a(a^x)$', operation: 'cancel' },
//             { value: '$x$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Exponential of a Logarithm](!/algebra/formulas#exponential_of_a_logarithm)`,
//       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Logarithmic Function](!/algebra/definitions#logarithmic_function)`
//     }
//   },

//   {
//     name: 'Exponential of a Logarithm',
//     category: 'Logarithm Rules',
//     formula: `$$a^{\\log_a(x)} = x$$`,
//     link: { label: 'Logarithms', url: '/algebra/logarithms#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Applying an exponential to its own base's logarithm cancels both operations, returning the argument. The exponential "undoes" the log.`,
//       explanation: [
//         `Applying an exponential to its own base&apos;s logarithm cancels both operations, returning the argument. The exponential &quot;undoes&quot; the log.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^{\\log_a(x)}$', operation: 'cancel' },
//             { value: '$x$' }
//           ]
//         }
//       ],
//       conditions: `$x > 0$, $a > 0$, $a \\neq 1$.`,
//       related_formulas: `- [Logarithm of an Exponential](!/algebra/formulas#logarithm_of_an_exponential)`,
//       related_definitions: `- [Logarithm](!/algebra/definitions#logarithm)\n- [Exponential Function](!/algebra/definitions#exponential_function)`
//     }
//   },



//   // ─── Category: Identities & Factoring (11 entries) ──────────


//   {
//     name: 'Difference of Squares',
//     category: 'Identities & Factoring',
//     formula: `$$a^2 - b^2 = (a + b)(a - b)$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#6' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
//       explanation: [
//         `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^2 - b^2$', operation: 'factor' },
//             { value: '$(a + b)(a - b)$' }
//           ]
//         }
//       ],
//       derivation: [
//         `Expand the right side.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$(a + b)(a - b)$', operation: 'distribute' },
//             { expr: '$a^2 - ab + ab - b^2$', operation: 'cancel $-ab + ab$' },
//             { expr: '$a^2 - b^2$', tag: 'result' }
//           ]
//         }
//       ],
//       conditions: `Applies only to subtraction. A sum of squares $a^2 + b^2$ does not factor over the reals.`,
//       related_formulas: `- [General Difference of Even Powers](!/algebra/formulas#general_difference_of_even_powers)`,
//       related_definitions: `- [Difference of Squares](!/algebra/definitions#difference_of_squares)\n- [Factoring](!/algebra/definitions#factoring)`
//     }
//   },

//   {
//     name: 'Square of a Sum',
//     category: 'Identities & Factoring',
//     formula: `$$(a + b)^2 = a^2 + 2ab + b^2$$`,
//     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
//       explanation: [
//         `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(a + b)^2$', operation: 'expand' },
//             { value: '$a^2 + 2ab + b^2$' }
//           ]
//         }
//       ],
//       derivation: [
//         `Multiply $(a + b)$ by itself.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$(a + b)(a + b)$', operation: 'distribute' },
//             { expr: '$a^2 + ab + ab + b^2$', operation: 'combine like terms' },
//             { expr: '$a^2 + 2ab + b^2$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Square of a Difference](!/algebra/formulas#square_of_a_difference)\n- [Completing the Square](!/algebra/formulas#completing_the_square)`,
//       related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Square of a Difference',
//     category: 'Identities & Factoring',
//     formula: `$$(a - b)^2 = a^2 - 2ab + b^2$$`,
//     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
//       explanation: [
//         `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(a - b)^2$', operation: 'expand' },
//             { value: '$a^2 - 2ab + b^2$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)`,
//       related_definitions: `- [Perfect Square Trinomial](!/algebra/definitions#perfect_square_trinomial)\n- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Cube of a Sum',
//     category: 'Identities & Factoring',
//     formula: `$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$`,
//     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Cubing a binomial sum. The coefficients follow the third row of Pascal's triangle: 1, 3, 3, 1.`,
//       explanation: [
//         `Cubing a binomial sum. The coefficients follow the third row of Pascal&apos;s triangle: 1, 3, 3, 1.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(a + b)^3$', operation: 'expand' },
//             { value: '$a^3 + 3a^2 b + 3ab^2 + b^3$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)\n- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)`,
//       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Cube of a Difference',
//     category: 'Identities & Factoring',
//     formula: `$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$`,
//     link: { label: 'Polynomial Operations', url: '/algebra/polynomials/operations#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
//       explanation: [
//         `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(a - b)^3$', operation: 'expand' },
//             { value: '$a^3 - 3a^2 b + 3ab^2 - b^3$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)\n- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)`,
//       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Sum of Cubes',
//     category: 'Identities & Factoring',
//     formula: `$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
//       explanation: [
//         `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^3 + b^3$', operation: 'factor' },
//             { value: '$(a + b)(a^2 - ab + b^2)$' }
//           ]
//         }
//       ],
//       derivation: [
//         `Expand the right side to verify.`,
//         {
//           component: 'MathDerivation',
//           items: [
//             { expr: '$(a + b)(a^2 - ab + b^2)$', operation: 'distribute $a$, then $b$' },
//             { expr: '$a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3$', operation: 'cancel' },
//             { expr: '$a^3 + b^3$', tag: 'result' }
//           ]
//         }
//       ],
//       related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [Cube of a Sum](!/algebra/formulas#cube_of_a_sum)`,
//       related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
//     }
//   },

//   {
//     name: 'Difference of Cubes',
//     category: 'Identities & Factoring',
//     formula: `$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#8' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
//       explanation: [
//         `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^3 - b^3$', operation: 'factor' },
//             { value: '$(a - b)(a^2 + ab + b^2)$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [Cube of a Difference](!/algebra/formulas#cube_of_a_difference)`,
//       related_definitions: `- [Sum and Difference of Cubes](!/algebra/definitions#sum_and_difference_of_cubes)\n- [Irreducible Polynomial](!/algebra/definitions#irreducible_polynomial)`
//     }
//   },

//   {
//     name: 'Trinomial Factoring Pattern',
//     category: 'Identities & Factoring',
//     formula: `$$x^2 + (a + b)x + ab = (x + a)(x + b)$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
//       explanation: [
//         `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^2 + (a+b)x + ab$', operation: 'factor' },
//             { value: '$(x + a)(x + b)$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Square of a Sum](!/algebra/formulas#square_of_a_sum)\n- [Square of a Difference](!/algebra/formulas#square_of_a_difference)`,
//       related_definitions: `- [Factoring](!/algebra/definitions#factoring)\n- [Trinomial](!/algebra/definitions#trinomial)`
//     }
//   },

//   {
//     name: 'General Difference of Even Powers',
//     category: 'Identities & Factoring',
//     formula: `$$x^{2n} - a^{2n} = (x^n - a^n)(x^n + a^n)$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
//       explanation: [
//         `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^{2n} - a^{2n}$', operation: 'factor as difference of squares' },
//             { value: '$(x^n - a^n)(x^n + a^n)$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Difference of Squares](!/algebra/formulas#difference_of_squares)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
//       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
//     }
//   },

//   {
//     name: 'General Difference of Powers (odd n)',
//     category: 'Identities & Factoring',
//     formula: `$$x^n - a^n = (x - a)(x^{n-1} + ax^{n-2} + \\cdots + a^{n-1})$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
//       explanation: [
//         `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^n - a^n$', operation: 'factor out $(x - a)$' },
//             { value: '$(x - a)(x^{n-1} + \\cdots + a^{n-1})$' }
//           ]
//         }
//       ],
//       conditions: `Valid for all positive integers $n$. When $n$ is odd, this is the complete factorization over the reals.`,
//       related_formulas: `- [Difference of Cubes](!/algebra/formulas#difference_of_cubes)\n- [General Sum of Powers (odd n)](!/algebra/formulas#general_sum_of_powers_odd_n)`,
//       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
//     }
//   },

//   {
//     name: 'General Sum of Powers (odd n)',
//     category: 'Identities & Factoring',
//     formula: `$$x^n + a^n = (x + a)(x^{n-1} - ax^{n-2} + \\cdots + a^{n-1})$$`,
//     link: { label: 'Factoring Polynomials', url: '/algebra/polynomials/factoring#9' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
//       explanation: [
//         `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$x^n + a^n$ ($n$ odd)', operation: 'factor out $(x + a)$' },
//             { value: '$(x + a)(x^{n-1} - \\cdots + a^{n-1})$' }
//           ]
//         }
//       ],
//       conditions: `$n$ must be a positive odd integer.`,
//       related_formulas: `- [Sum of Cubes](!/algebra/formulas#sum_of_cubes)\n- [General Difference of Powers (odd n)](!/algebra/formulas#general_difference_of_powers_odd_n)`,
//       related_definitions: `- [Factoring](!/algebra/definitions#factoring)`
//     }
//   },




//   // ─── Category: Exponent Rules (8 entries) ───────────────────


//   {
//     name: 'Product Rule (Exponents)',
//     category: 'Exponent Rules',
//     formula: `$$a^m \\cdot a^n = a^{m+n}$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#1' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Multiplying powers with the same base: keep the base, add the exponents.`,
//       explanation: [
//         `Multiplying powers with the same base: keep the base, add the exponents.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^m \\cdot a^n$', operation: 'add exponents' },
//             { value: '$a^{m+n}$' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$ when $m$ or $n$ is negative or zero.`,
//       related_formulas: `- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
//       related_definitions: `- [Product Rule (Exponents)](!/algebra/definitions#product_rule_exponents)\n- [Power](!/algebra/definitions#power)`
//     }
//   },

//   {
//     name: 'Quotient Rule (Exponents)',
//     category: 'Exponent Rules',
//     formula: `$$\\frac{a^m}{a^n} = a^{m-n}$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#2' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Dividing powers with the same base: keep the base, subtract the exponents.`,
//       explanation: [
//         `Dividing powers with the same base: keep the base, subtract the exponents.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\frac{a^m}{a^n}$', operation: 'subtract exponents' },
//             { value: '$a^{m-n}$' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$.`,
//       related_formulas: `- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)\n- [Negative Exponent](!/algebra/formulas#negative_exponent)`,
//       related_definitions: `- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_exponents)\n- [Power](!/algebra/definitions#power)`
//     }
//   },

//   {
//     name: 'Power of a Power',
//     category: 'Exponent Rules',
//     formula: `$$(a^m)^n = a^{mn}$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Raising a power to another power: keep the base, multiply the exponents.`,
//       explanation: [
//         `Raising a power to another power: keep the base, multiply the exponents.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(a^m)^n$', operation: 'multiply exponents' },
//             { value: '$a^{mn}$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
//       related_definitions: `- [Power of a Power](!/algebra/definitions#power_of_a_power)`
//     }
//   },

//   {
//     name: 'Power of a Product',
//     category: 'Exponent Rules',
//     formula: `$$(ab)^n = a^n \\cdot b^n$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A power applied to a product distributes to each factor.`,
//       explanation: [
//         `A power applied to a product distributes to each factor.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(ab)^n$', operation: 'distribute' },
//             { value: '$a^n \\cdot b^n$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
//       related_definitions: `- [Power of a Product](!/algebra/definitions#power_of_a_product)`
//     }
//   },

//   {
//     name: 'Power of a Quotient',
//     category: 'Exponent Rules',
//     formula: `$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A power applied to a fraction distributes to numerator and denominator separately.`,
//       explanation: [
//         `A power applied to a fraction distributes to numerator and denominator separately.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\left(\\frac{a}{b}\\right)^n$', operation: 'distribute' },
//             { value: '$\\frac{a^n}{b^n}$' }
//           ]
//         }
//       ],
//       conditions: `$b \\neq 0$.`,
//       related_formulas: `- [Power of a Product](!/algebra/formulas#power_of_a_product)\n- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)`,
//       related_definitions: `- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
//     }
//   },

//   {
//     name: 'Zero Exponent',
//     category: 'Exponent Rules',
//     formula: `$$a^0 = 1 \\quad (a \\neq 0)$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#7' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
//       explanation: [
//         `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^0$', operation: 'evaluate' },
//             { value: '$1$' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$. The expression $0^0$ is indeterminate.`,
//       related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
//       related_definitions: `- [Zero Exponent](!/algebra/definitions#zero_exponent)`
//     }
//   },

//   {
//     name: 'Negative Exponent',
//     category: 'Exponent Rules',
//     formula: `$$a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#6' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
//       explanation: [
//         `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a^{-n}$', operation: 'take reciprocal, flip sign of exponent' },
//             { value: '$\\frac{1}{a^n}$' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$.`,
//       related_formulas: `- [Negative Exponent Flip](!/algebra/formulas#negative_exponent_flip)\n- [Zero Exponent](!/algebra/formulas#zero_exponent)`,
//       related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)`
//     }
//   },

//   {
//     name: 'Negative Exponent Flip',
//     category: 'Exponent Rules',
//     formula: `$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$`,
//     link: { label: 'Exponent Rules', url: '/algebra/powers/exponent-rules#5' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
//       explanation: [
//         `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\left(\\frac{a}{b}\\right)^{-n}$', operation: 'invert fraction, flip sign of exponent' },
//             { value: '$\\left(\\frac{b}{a}\\right)^n$' }
//           ]
//         }
//       ],
//       conditions: `$a \\neq 0$ and $b \\neq 0$.`,
//       related_formulas: `- [Negative Exponent](!/algebra/formulas#negative_exponent)\n- [Power of a Quotient](!/algebra/formulas#power_of_a_quotient)`,
//       related_definitions: `- [Negative Exponent](!/algebra/definitions#negative_exponent)\n- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)`
//     }
//   },


//   // ─── Category: Radical Rules (7 entries) ─────────────────────


//   {
//     name: 'Radical to Exponent Conversion',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{a} = a^{1/n}$$`,
//     link: { label: 'Rational Exponents', url: '/algebra/roots/rational-exponents#1' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
//       explanation: [
//         `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{a}$', operation: 'convert to power' },
//             { value: '$a^{1/n}$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Power Rule (Radicals)](!/algebra/formulas#power_rule_radicals)`,
//       related_definitions: `- [Rational Exponent](!/algebra/definitions#rational_exponent)\n- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
//     }
//   },

//   {
//     name: 'Product Rule (Radicals)',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$`,
//     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#1' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
//       explanation: [
//         `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{ab}$', operation: 'split over factors' },
//             { value: '$\\sqrt[n]{a} \\cdot \\sqrt[n]{b}$' }
//           ]
//         }
//       ],
//       conditions: `For even $n$: $a \\geq 0$ and $b \\geq 0$. For odd $n$: no restriction.`,
//       related_formulas: `- [Quotient Rule (Radicals)](!/algebra/formulas#quotient_rule_radicals)\n- [Product Rule (Exponents)](!/algebra/formulas#product_rule_exponents)`,
//       related_definitions: `- [Product Rule (Radicals)](!/algebra/definitions#product_rule_radicals)`
//     }
//   },

//   {
//     name: 'Quotient Rule (Radicals)',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$$`,
//     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#2' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
//       explanation: [
//         `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{\\frac{a}{b}}$', operation: 'split over fraction' },
//             { value: '$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$' }
//           ]
//         }
//       ],
//       conditions: `$b \\neq 0$. For even $n$: $a \\geq 0$ and $b > 0$.`,
//       related_formulas: `- [Product Rule (Radicals)](!/algebra/formulas#product_rule_radicals)\n- [Quotient Rule (Exponents)](!/algebra/formulas#quotient_rule_exponents)`,
//       related_definitions: `- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_radicals)`
//     }
//   },

//   {
//     name: 'Power Rule (Radicals)',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{a^m} = a^{m/n}$$`,
//     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
//       explanation: [
//         `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{a^m}$', operation: 'combine into single exponent' },
//             { value: '$a^{m/n}$' }
//           ]
//         }
//       ],
//       conditions: `For even $n$: $a \\geq 0$.`,
//       related_formulas: `- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)\n- [Power of a Power](!/algebra/formulas#power_of_a_power)`,
//       related_definitions: `- [Power Rule (Radicals)](!/algebra/definitions#power_rule_radicals)\n- [Rational Exponent](!/algebra/definitions#rational_exponent)`
//     }
//   },

//   {
//     name: 'Nested Radicals',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$`,
//     link: { label: 'Radical Rules', url: '/algebra/roots/radical-rules#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
//       explanation: [
//         `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[m]{\\sqrt[n]{a}}$', operation: 'multiply indices' },
//             { value: '$\\sqrt[mn]{a}$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Power of a Power](!/algebra/formulas#power_of_a_power)\n- [Radical to Exponent Conversion](!/algebra/formulas#radical_to_exponent_conversion)`,
//       related_definitions: `- [Radical](!/algebra/definitions#radical)\n- [Index](!/algebra/definitions#index)`
//     }
//   },

//   {
//     name: 'Even Root Identity',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{a^n} = |a| \\quad (n \\text{ even})$$`,
//     link: { label: 'Root Properties', url: '/algebra/roots/properties#4' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
//       explanation: [
//         `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{a^n}$ ($n$ even)', operation: 'take absolute value' },
//             { value: '$|a|$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Odd Root Identity](!/algebra/formulas#odd_root_identity)`,
//       related_definitions: `- [Principal Root](!/algebra/definitions#principal_root)\n- [Absolute Value](!/algebra/definitions#absolute_value)`
//     }
//   },

//   {
//     name: 'Odd Root Identity',
//     category: 'Radical Rules',
//     formula: `$$\\sqrt[n]{a^n} = a \\quad (n \\text{ odd})$$`,
//     link: { label: 'Root Properties', url: '/algebra/roots/properties#5' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
//       explanation: [
//         `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\sqrt[n]{a^n}$ ($n$ odd)', operation: 'cancel' },
//             { value: '$a$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Even Root Identity](!/algebra/formulas#even_root_identity)`,
//       related_definitions: `- [Root](!/algebra/definitions#root)\n- [Index](!/algebra/definitions#index)`
//     }
//   },

// // ─── Category: Polynomial Theorems (8 entries) ──────────────

//   {
//     name: 'Remainder Theorem',
//     category: 'Polynomial Theorems',
//     formula: `$$P(x) = (x - c) \\cdot Q(x) + P(c)$$`,
//     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#1' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
//       explanation: [
//         `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$P(x),\\ c$', operation: 'evaluate $P$ at $c$' },
//             { value: '$P(c)$ = remainder' }
//           ]
//         }
//       ],
//       conditions: `$P(x)$ is a polynomial. $c$ is any real number.`,
//       related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
//       related_definitions: `- [Remainder Theorem](!/algebra/definitions#remainder_theorem)\n- [Polynomial](!/algebra/definitions#polynomial)`
//     }
//   },

//   {
//     name: 'Factor Theorem',
//     category: 'Polynomial Theorems',
//     formula: `$$(x - c) \\text{ is a factor of } P(x) \\iff P(c) = 0$$`,
//     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#3' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
//       explanation: [
//         `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$P(c) = 0$', operation: 'if and only if' },
//             { value: '$(x - c) \\mid P(x)$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Remainder Theorem](!/algebra/formulas#remainder_theorem)\n- [Rational Root Theorem](!/algebra/formulas#rational_root_theorem)`,
//       related_definitions: `- [Factor Theorem](!/algebra/definitions#factor_theorem)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)`
//     }
//   },

//   {
//     name: 'Rational Root Theorem',
//     category: 'Polynomial Theorems',
//     formula: `$$\\text{If } \\frac{p}{q} \\text{ is a root: } p \\mid a_0 \\text{ and } q \\mid a_n$$`,
//     link: { label: 'Polynomial Rules', url: '/algebra/polynomials/rules#5' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
//       explanation: [
//         `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\frac{p}{q}$ is a root', operation: 'necessary condition' },
//             { value: '$p \\mid a_0$ and $q \\mid a_n$' }
//           ]
//         }
//       ],
//       conditions: `All coefficients must be integers. $a_n \\neq 0$. The theorem finds rational roots only — irrational and complex roots require other methods.`,
//       related_formulas: `- [Factor Theorem](!/algebra/formulas#factor_theorem)`,
//       related_definitions: `- [Rational Root Theorem](!/algebra/definitions#rational_root_theorem)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)\n- [Constant Term](!/algebra/definitions#constant_term)`
//     }
//   },

//   {
//     name: 'Vieta\'s Formulas (Quadratic)',
//     category: 'Polynomial Theorems',
//     formula: `$$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1 \\cdot x_2 = \\frac{c}{a}$$`,
//     link: { label: 'Quadratic Equations', url: '/algebra/equations/quadratic#6' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
//       explanation: [
//         `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a,\\ b,\\ c$', operation: 'compute $-b/a$ and $c/a$' },
//             { value: '$x_1 + x_2,\\ x_1 x_2$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Vieta's Formulas (General)](!/algebra/formulas#vietas_formulas_general)\n- [Quadratic Formula](!/algebra/formulas#quadratic_formula)`,
//       related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Coefficient](!/algebra/definitions#coefficient)`
//     }
//   },

//   {
//     name: 'Binomial Theorem',
//     category: 'Polynomial Theorems',
//     formula: `$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$`,
//     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
//       explanation: [
//         `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$(x + y)^n$', operation: 'expand via binomial coefficients' },
//             { value: '$\\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$' }
//           ]
//         }
//       ],
//       conditions: `$n$ is a non-negative integer.`,
//       related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
//       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Binomial Coefficient',
//     category: 'Polynomial Theorems',
//     formula: `$$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$`,
//     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read "$n$ choose $k$."`,
//       explanation: [
//         `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read &quot;$n$ choose $k$.&quot;`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$n,\\ k$', operation: 'compute $\\frac{n!}{k!(n-k)!}$' },
//             { value: '$\\binom{n}{k}$' }
//           ]
//         }
//       ],
//       conditions: `$0 \\leq k \\leq n$, both non-negative integers. By convention, $\\binom{n}{k} = 0$ when $k > n$ or $k < 0$.`,
//       variants: `Symmetry property:\n\n$$\\binom{n}{k} = \\binom{n}{n-k}$$`,
//       related_formulas: `- [Binomial Theorem](!/algebra/formulas#binomial_theorem)\n- [Pascal's Rule](!/algebra/formulas#pascals_rule)`,
//       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Pascal\'s Rule',
//     category: 'Polynomial Theorems',
//     formula: `$$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$$`,
//     link: { label: 'Algebraic Identities', url: '/algebra/identities#general' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Each entry in Pascal's triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
//       explanation: [
//         `Each entry in Pascal&apos;s triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$\\binom{n}{k},\\ \\binom{n}{k+1}$', operation: 'sum' },
//             { value: '$\\binom{n+1}{k+1}$' }
//           ]
//         }
//       ],
//       related_formulas: `- [Binomial Coefficient](!/algebra/formulas#binomial_coefficient)\n- [Binomial Theorem](!/algebra/formulas#binomial_theorem)`,
//       related_definitions: `- [Binomial](!/algebra/definitions#binomial)`
//     }
//   },

//   {
//     name: 'Vieta\'s Formulas (General)',
//     category: 'Polynomial Theorems',
//     formula: `$$r_1 + r_2 + r_3 = -a_{n-1} \\qquad r_1 r_2 r_3 = (-1)^n a_0$$`,
//     link: { label: 'Polynomial Equations', url: '/algebra/equations/polynomial#9' },
//     fields: {
//       // ORIGINAL:
//       // explanation: `Generalizes Vieta's formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
//       explanation: [
//         `Generalizes Vieta&apos;s formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
//         {
//           component: 'FunctionMachineDiagram',
//           steps: [
//             { value: '$a_0, a_1, \\ldots, a_{n-1}$', operation: 'compute symmetric sums of roots' },
//             { value: '$\\sum r_i,\\ \\prod r_i,\\ \\ldots$' }
//           ]
//         }
//       ],
//       notation: `For a monic polynomial $x^n + a_{n-1}x^{n-1} + \\cdots + a_0$, the elementary symmetric sums of the roots $r_1, \\ldots, r_n$ equal the coefficients (up to sign).`,
//       conditions: `Leading coefficient is 1 (monic). For non-monic polynomials, divide all coefficients by $a_n$ first.`,
//       related_formulas: `- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
//       related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)`
//     }
//   },


// ];

// export default algebraFormulasList;



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
    // ORIGINAL:
    // explanation: `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
    explanation: [
      `The defining property of an arithmetic sequence: the difference between any two consecutive terms is the same constant $d$. The value of $d$ determines whether the sequence increases ($d > 0$), decreases ($d < 0$), or stays constant ($d = 0$).`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_n,\\ a_{n+1}$', operation: 'subtract consecutive terms' },
          { value: '$d$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition of arithmetic sequence
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
    // ORIGINAL:
    // explanation: `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
    explanation: [
      `Explicit (closed-form) expression for the $n$-th term of an arithmetic sequence: start at $a_1$ and add the common difference $d$ exactly $n - 1$ times. The formula is linear in $n$ — plotted against the index, the terms lie on a straight line with slope $d$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1$', operation: 'add $d$, $n - 1$ times' },
          { value: '$a_n$' }
        ]
      }
    ],
    derivation: [
      `Apply the common difference $d$ repeatedly, starting from $a_1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$a_2 = a_1 + d$', operation: 'add $d$ again' },
          { expr: '$a_3 = a_2 + d = a_1 + 2d$', operation: 'add $d$ again' },
          { expr: '$a_4 = a_1 + 3d$', operation: 'pattern extends' },
          { expr: '$a_n = a_1 + (n-1)d$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
    explanation: [
      `Recursive definition of an arithmetic sequence: each term is the previous term plus the common difference $d$, with initial value $a_1 = c$. Applying the rule $n - 1$ times recovers the explicit form $a_n = c + (n-1)d$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1 = c$', operation: '$+ d$' },
          { value: '$a_2$', operation: '$+ d$' },
          { value: '$a_3$', operation: '$+ d$' },
          { value: '$\\cdots$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition (recursive restatement)
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
    // ORIGINAL:
    // explanation: `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
    explanation: [
      `Closed-form sum of the first $n$ terms of an arithmetic sequence. Famously the formula behind the Gauss schoolchild story: pairing the first and last terms gives $a_1 + a_n$, and there are $n/2$ such pairs.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1,\\ a_n$', operation: 'add' },
          { value: '$a_1 + a_n$', operation: 'multiply by $\\frac{n}{2}$' },
          { value: '$S_n$' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
    explanation: [
      `The arithmetic mean (average) of two numbers $a$ and $b$ is their sum divided by $2$. Generalizes to $n$ values as the sum divided by $n$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a,\\ b$', operation: 'add' },
          { value: '$a + b$', operation: 'divide by $2$' },
          { value: '$M$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition of the arithmetic mean
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
    // ORIGINAL:
    // explanation: `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
    explanation: [
      `In an arithmetic sequence, every interior term is the arithmetic mean of its two neighbors. This follows directly from the constant-difference property: $a_n - a_{n-1} = a_{n+1} - a_n$ implies $a_{n-1} + a_{n+1} = 2a_n$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_{n-1},\\ a_{n+1}$', operation: 'add, divide by $2$' },
          { value: '$a_n$' }
        ]
      }
    ],
    derivation: [
      `Use the constant-difference property: consecutive gaps are equal.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$a_n - a_{n-1} = a_{n+1} - a_n$', operation: 'add $a_{n-1} + a_n$ to both sides' },
          { expr: '$2 a_n = a_{n-1} + a_{n+1}$', operation: 'divide by $2$' },
          { expr: '$a_n = \\frac{a_{n-1} + a_{n+1}}{2}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
    explanation: [
      `The defining property of a geometric sequence: the ratio of any two consecutive terms is the same constant $r$. The sign and magnitude of $r$ determine growth, decay, oscillation, or convergence.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_n,\\ a_{n+1}$', operation: 'divide consecutive terms' },
          { value: '$r$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition of geometric sequence
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
    // ORIGINAL:
    // explanation: `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
    explanation: [
      `Explicit expression for the $n$-th term of a geometric sequence: start at $a_1$ and multiply by the common ratio $r$ exactly $n - 1$ times. The formula is exponential in $n$ — terms scale by a constant factor between consecutive indices.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1$', operation: 'multiply by $r$, $n - 1$ times' },
          { value: '$a_n$' }
        ]
      }
    ],
    derivation: [
      `Apply the common ratio $r$ repeatedly, starting from $a_1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$a_2 = a_1 \\cdot r$', operation: 'multiply by $r$ again' },
          { expr: '$a_3 = a_2 \\cdot r = a_1 r^2$', operation: 'multiply by $r$ again' },
          { expr: '$a_4 = a_1 r^3$', operation: 'pattern extends' },
          { expr: '$a_n = a_1 \\cdot r^{n-1}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
    explanation: [
      `Recursive definition of a geometric sequence: each term is the previous term multiplied by the common ratio $r$, with initial value $a_1 = c$. Applying the rule $n - 1$ times gives the explicit form $a_n = c \\cdot r^{n-1}$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1 = c$', operation: '$\\times r$' },
          { value: '$a_2$', operation: '$\\times r$' },
          { value: '$a_3$', operation: '$\\times r$' },
          { value: '$\\cdots$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition (recursive restatement)
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
    // ORIGINAL:
    // explanation: `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
    explanation: [
      `Closed-form sum of the first $n$ terms of a geometric sequence with common ratio $r \\neq 1$. Derived by multiplying the sum by $r$, subtracting, and solving.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1,\\ r,\\ n$', operation: 'apply $\\frac{1 - r^n}{1 - r}$' },
          { value: '$S_n$' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
    explanation: [
      `When $|r| < 1$, the partial sums $S_n$ converge as $n \\to \\infty$. Since $r^n \\to 0$, the finite formula collapses to $a_1 / (1 - r)$. This is the rare case where an infinite sum has a clean closed form.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1,\\ r$', operation: 'divide $a_1$ by $1 - r$' },
          { value: '$S$' }
        ]
      }
    ],
    derivation: [
      `Take the limit of the finite sum as $n \\to \\infty$ with $|r| < 1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S_n = a_1 \\cdot \\frac{1 - r^n}{1 - r}$', operation: 'as $n \\to \\infty$, $r^n \\to 0$' },
          { expr: '$S = a_1 \\cdot \\frac{1 - 0}{1 - r}$', operation: 'simplify' },
          { expr: '$S = \\frac{a_1}{1 - r}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
    explanation: [
      `The geometric mean of two positive numbers $a$ and $b$ is the square root of their product. Generalizes to $n$ positive values as the $n$-th root of their product.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a,\\ b$', operation: 'multiply' },
          { value: '$ab$', operation: 'take square root' },
          { value: '$G$' }
        ]
      }
    ],
    derivation: [
      `The geometric mean is the value $G$ that makes $a, G, b$ a geometric sequence: $G/a = b/G$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$\\frac{G}{a} = \\frac{b}{G}$', operation: 'cross-multiply' },
          { expr: '$G^2 = ab$', operation: 'take positive square root' },
          { expr: '$G = \\sqrt{ab}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
    explanation: [
      `In a geometric sequence with positive terms, every interior term is the geometric mean of its two neighbors. This follows from $a_{n-1} = a_n / r$ and $a_{n+1} = a_n r$, so $a_{n-1} \\cdot a_{n+1} = a_n^2$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_{n-1},\\ a_{n+1}$', operation: 'multiply, take square root' },
          { value: '$a_n$' }
        ]
      }
    ],
    derivation: [
      `In a geometric sequence, $a_{n-1} = a_n / r$ and $a_{n+1} = a_n \\cdot r$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$a_{n-1} \\cdot a_{n+1} = \\frac{a_n}{r} \\cdot a_n r$', operation: 'simplify' },
          { expr: '$a_{n-1} \\cdot a_{n+1} = a_n^2$', operation: 'take positive square root' },
          { expr: '$a_n = \\sqrt{a_{n-1} \\cdot a_{n+1}}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
    explanation: [
      `The $n$-th term of a harmonic sequence is the reciprocal of the $n$-th term of an arithmetic sequence with first term $b_1$ and common difference $d$. The simplest case takes $b_n = n$, giving the natural-number reciprocals $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'arithmetic: $b_1 + (n-1)d$' },
          { value: '$b_n$', operation: 'reciprocal' },
          { value: '$a_n$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition (reciprocal of arithmetic term)
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
    // ORIGINAL:
    // explanation: `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
    explanation: [
      `The harmonic mean of $n$ positive numbers is $n$ divided by the sum of their reciprocals. Equivalently, it is the reciprocal of the arithmetic mean of the reciprocals. Used for averaging rates.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$a_1, \\ldots, a_n$', operation: 'take reciprocals, sum' },
          { value: '$\\sum \\frac{1}{a_i}$', operation: 'divide $n$ by this sum' },
          { value: '$H$' }
        ]
      }
    ],
    derivation: [
      `Defined as the reciprocal of the arithmetic mean of the reciprocals.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '\\text{arithmetic mean of reciprocals} = \\frac{1}{n}\\sum_{i=1}^{n} \\frac{1}{a_i}', operation: 'take reciprocal' },
          { expr: '$H = \\frac{1}{\\frac{1}{n}\\sum \\frac{1}{a_i}}$', operation: 'simplify' },
          { expr: '$H = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{a_i}}$', tag: 'result' }
        ]
      }
    ],
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
    // FMD SKIPPED: three-way inequality relation, not a linear chain of computation.
    explanation: `For any set of positive numbers, the harmonic mean is at most the geometric mean, which is at most the arithmetic mean. Equality holds throughout if and only if all values are identical.`,
    // DERIVATION SKIPPED: proof of AM-GM alone is substantial (requires Cauchy induction or Jensen); combined chain beyond scope
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
    // ORIGINAL:
    // explanation: `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
    explanation: [
      `Defines the Fibonacci sequence by a two-term linear recurrence with initial values $F_1 = F_2 = 1$. Each subsequent term is the sum of its two immediate predecessors, producing $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_{n-2},\\ F_{n-1}$', operation: 'sum' },
          { value: '$F_n$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition of the Fibonacci sequence
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
    // ORIGINAL:
    // explanation: `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
    explanation: [
      `The golden ratio $\\phi \\approx 1.618$ is the positive root of $x^2 = x + 1$. It equals the limit of consecutive Fibonacci ratios $F_{n+1}/F_n$ and is the dominant growth rate of the Fibonacci sequence.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$1 + \\sqrt{5}$', operation: 'divide by $2$' },
          { value: '$\\phi$' }
        ]
      }
    ],
    derivation: [
      `The golden ratio is the positive root of $x^2 = x + 1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$x^2 - x - 1 = 0$', operation: 'apply the quadratic formula' },
          { expr: '$x = \\frac{1 \\pm \\sqrt{1 + 4}}{2}$', operation: 'simplify' },
          { expr: '$x = \\frac{1 \\pm \\sqrt{5}}{2}$', operation: 'take positive root' },
          { expr: '$\\phi = \\frac{1 + \\sqrt{5}}{2}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
    explanation: [
      `Closed-form expression for the $n$-th Fibonacci number using the two roots of the characteristic equation $x^2 = x + 1$. Despite the irrationals $\\phi, \\psi, \\sqrt{5}$, the result is always an integer — the irrational parts cancel exactly.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'raise $\\phi$ and $\\psi$ to power $n$' },
          { value: '$\\phi^n,\\ \\psi^n$', operation: 'subtract, divide by $\\sqrt{5}$' },
          { value: '$F_n$' }
        ]
      }
    ],
    derivation: [
      `Solve the linear recurrence $F_n = F_{n-1} + F_{n-2}$ using the characteristic equation.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$x^2 = x + 1$', operation: 'roots $\\phi, \\psi$' },
          { expr: '$F_n = A\\phi^n + B\\psi^n$', operation: 'apply initial conditions $F_1 = F_2 = 1$' },
          { expr: '$A = \\frac{1}{\\sqrt{5}}, \\quad B = -\\frac{1}{\\sqrt{5}}$', operation: 'substitute' },
          { expr: '$F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt{5}}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
    explanation: [
      `The product of the two Fibonacci numbers flanking $F_n$, minus the square of $F_n$ itself, alternates between $+1$ and $-1$ as $n$ changes parity. For $n = 6$: $F_5 F_7 - F_6^2 = 5 \\cdot 13 - 64 = 1$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_{n-1},\\ F_n,\\ F_{n+1}$', operation: 'compute $F_{n-1}F_{n+1} - F_n^2$' },
          { value: '$(-1)^n$' }
        ]
      }
    ],
    derivation: [
      `Prove by induction on $n$, using $F_{n+2} = F_n + F_{n+1}$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: 'Base $n = 2$: $F_1 F_3 - F_2^2 = 1 \\cdot 2 - 1 = 1 = (-1)^2$', operation: 'assume $F_{n-1}F_{n+1} - F_n^2 = (-1)^n$' },
          { expr: '$F_n F_{n+2} - F_{n+1}^2 = F_n(F_n + F_{n+1}) - F_{n+1}^2$', operation: 'rearrange' },
          { expr: '$= F_n^2 - F_{n+1}(F_{n+1} - F_n) = F_n^2 - F_{n+1} F_{n-1}$', operation: 'apply hypothesis' },
          { expr: '$= -(F_{n-1} F_{n+1} - F_n^2) = -(-1)^n = (-1)^{n+1}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
    explanation: [
      `The sum of the first $n$ Fibonacci numbers is one less than a Fibonacci number two positions further along. Running totals always land just short of a future Fibonacci value.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_1, F_2, \\ldots, F_n$', operation: 'sum' },
          { value: '$F_{n+2} - 1$' }
        ]
      }
    ],
    derivation: [
      `Use $F_k = F_{k+2} - F_{k+1}$ from the recurrence, then telescope.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$\\sum_{k=1}^{n} F_k = \\sum_{k=1}^{n} (F_{k+2} - F_{k+1})$', operation: 'telescoping cancellation' },
          { expr: '$= F_{n+2} - F_2$', operation: 'substitute $F_2 = 1$' },
          { expr: '$= F_{n+2} - 1$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
    explanation: [
      `The sum of the first $n$ squared Fibonacci numbers equals the product of $F_n$ and $F_{n+1}$. Has a geometric interpretation: stacking squares of side $F_k$ tiles a rectangle of dimensions $F_n \\times F_{n+1}$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_1^2 + F_2^2 + \\cdots + F_n^2$', operation: 'sum' },
          { value: '$F_n \\cdot F_{n+1}$' }
        ]
      }
    ],
    derivation: [
      `Prove by induction, using the Fibonacci recurrence.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: 'Base $n = 1$: $F_1^2 = 1 = F_1 F_2$', operation: 'assume $\\sum_{k=1}^{n} F_k^2 = F_n F_{n+1}$' },
          { expr: '$\\sum_{k=1}^{n+1} F_k^2 = F_n F_{n+1} + F_{n+1}^2$', operation: 'factor $F_{n+1}$' },
          { expr: '$= F_{n+1}(F_n + F_{n+1}) = F_{n+1} F_{n+2}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
    explanation: [
      `The greatest common divisor of two Fibonacci numbers is itself a Fibonacci number, indexed by the GCD of the original indices. Connects the multiplicative structure of the Fibonacci sequence to the GCD of ordinary integers.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_m,\\ F_n$', operation: '$\\gcd$' },
          { value: '$F_{\\gcd(m,n)}$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: proof requires substantial number-theoretic setup
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
    // ORIGINAL:
    // explanation: `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
    explanation: [
      `The Lucas sequence uses the same recurrence as Fibonacci but starts from different initial values $L_1 = 1, L_2 = 3$, producing $1, 3, 4, 7, 11, 18, 29, 47, \\ldots$. Like Fibonacci, the ratio of consecutive Lucas numbers converges to the golden ratio.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$L_{n-2},\\ L_{n-1}$', operation: 'sum' },
          { value: '$L_n$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition of the Lucas sequence
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
    // ORIGINAL:
    // explanation: `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
    explanation: [
      `Each Lucas number equals the sum of the two Fibonacci numbers flanking the same position. For $n = 5$: $L_5 = F_4 + F_6 = 3 + 8 = 11$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$F_{n-1},\\ F_{n+1}$', operation: 'sum' },
          { value: '$L_n$' }
        ]
      }
    ],
    derivation: [
      `Prove by induction; both sequences satisfy the same recurrence.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: 'Base $n = 2$: $L_2 = 3$ and $F_1 + F_3 = 1 + 2 = 3$', operation: 'assume $L_{n-1} = F_{n-2} + F_n$ and $L_n = F_{n-1} + F_{n+1}$' },
          { expr: '$L_{n+1} = L_n + L_{n-1}$', operation: 'apply hypotheses' },
          { expr: '$= (F_{n-1} + F_{n+1}) + (F_{n-2} + F_n)$', operation: 'regroup and apply Fibonacci recurrence' },
          { expr: '$= F_n + F_{n+2}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet's formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
    explanation: [
      `Closed-form expression for the $n$-th Lucas number using the same two roots $\\phi, \\psi$ that appear in Binet&apos;s formula. Where Fibonacci subtracts the powers and divides by $\\sqrt{5}$, Lucas adds them directly.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'raise $\\phi$ and $\\psi$ to power $n$' },
          { value: '$\\phi^n,\\ \\psi^n$', operation: 'add' },
          { value: '$L_n$' }
        ]
      }
    ],
    derivation: [
      `Solve $L_n = L_{n-1} + L_{n-2}$ using the same characteristic equation as Fibonacci.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$x^2 = x + 1$', operation: 'general solution $L_n = A\\phi^n + B\\psi^n$' },
          { expr: '$L_n = A\\phi^n + B\\psi^n$', operation: 'apply $L_1 = 1$, $L_2 = 3$' },
          { expr: '$A = B = 1$', operation: 'substitute' },
          { expr: '$L_n = \\phi^n + \\psi^n$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
    explanation: [
      `The number of primes up to $n$, denoted $\\pi(n)$, is asymptotically $n / \\ln n$. The ratio $\\pi(n) \\ln n / n \\to 1$ as $n \\to \\infty$. Practically, near a large $n$, roughly one in every $\\ln n$ integers is prime.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'divide by $\\ln n$' },
          { value: '$\\pi(n)$ (approx.)' }
        ]
      }
    ],
    // DERIVATION SKIPPED: proof requires complex analysis, beyond scope
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
    // ORIGINAL:
    // explanation: `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
    explanation: [
      `Closed form for the $n$-th triangular number — the sum of the first $n$ positive integers, or equivalently the number of dots in a triangular grid with $n$ rows. The first values are $1, 3, 6, 10, 15, 21, 28, 36, \\ldots$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'multiply by $n+1$, divide by $2$' },
          { value: '$T_n$' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
    explanation: [
      `Each triangular number is the previous one plus a new row of $n$ dots. The increments $1, 2, 3, 4, \\ldots$ form an arithmetic sequence with common difference $1$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$T_1 = 1$', operation: '$+ 2$' },
          { value: '$T_2 = 3$', operation: '$+ 3$' },
          { value: '$T_3 = 6$', operation: '$+ n$' },
          { value: '$T_n$' }
        ]
      }
    ],
    derivation: [
      `Compute the difference between consecutive triangular numbers.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$T_n - T_{n-1} = \\frac{n(n+1)}{2} - \\frac{(n-1)n}{2}$', operation: 'factor $\\frac{n}{2}$' },
          { expr: '$= \\frac{n}{2}\\bigl((n+1) - (n-1)\\bigr)$', operation: 'simplify' },
          { expr: '$= \\frac{n}{2} \\cdot 2 = n$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
    explanation: [
      `The $n$-th triangular number equals the number of ways to choose $2$ items from $n + 1$. For instance, $T_4 = 10$ equals the number of distinct handshakes among $5$ people. Places triangular numbers inside combinatorics.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n + 1$', operation: 'choose $2$' },
          { value: '$T_n$' }
        ]
      }
    ],
    derivation: [
      `Expand the binomial coefficient.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$\\binom{n+1}{2} = \\frac{(n+1)!}{2! \\cdot (n-1)!}$', operation: 'cancel factorial' },
          { expr: '$= \\frac{(n+1) \\cdot n}{2}$', operation: 'match triangular formula' },
          { expr: '$= \\frac{n(n+1)}{2} = T_n$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
    explanation: [
      `The sum of two consecutive triangular numbers is always a perfect square. Geometrically, two triangles of consecutive sizes fit together to form a square — cut a square grid of $n^2$ dots along its staircase diagonal to see why.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$T_{n-1},\\ T_n$', operation: 'add' },
          { value: '$n^2$' }
        ]
      }
    ],
    derivation: [
      `Add the closed forms and simplify.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$T_n + T_{n-1} = \\frac{n(n+1)}{2} + \\frac{(n-1)n}{2}$', operation: 'factor $\\frac{n}{2}$' },
          { expr: '$= \\frac{n}{2}\\bigl((n+1) + (n-1)\\bigr)$', operation: 'simplify' },
          { expr: '$= \\frac{n}{2} \\cdot 2n = n^2$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
    explanation: [
      `The partial sums of the triangular numbers are the tetrahedral numbers — counts of dots arranged in successively larger tetrahedra. Extends the figurate-number construction from two dimensions to three.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$T_1, T_2, \\ldots, T_n$', operation: 'sum' },
          { value: '$\\frac{n(n+1)(n+2)}{6}$' }
        ]
      }
    ],
    derivation: [
      `Sum the closed form $T_k = k(k+1)/2$ term by term, using known sums of $k$ and $k^2$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$\\sum_{k=1}^{n} T_k = \\frac{1}{2}\\sum (k^2 + k)$', operation: 'apply known sums' },
          { expr: '$= \\frac{1}{2}\\left(\\frac{n(n+1)(2n+1)}{6} + \\frac{n(n+1)}{2}\\right)$', operation: 'factor $\\frac{n(n+1)}{2}$' },
          { expr: '$= \\frac{n(n+1)}{4}\\left(\\frac{2n+1}{3} + 1\\right)$', operation: 'simplify' },
          { expr: '$= \\frac{n(n+1)(n+2)}{6}$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
    explanation: [
      `The $n$-th square number is the product of $n$ with itself, arrangeable as a square grid of $n^2$ dots. The first values are $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$n$', operation: 'square' },
          { value: '$n^2$' }
        ]
      }
    ],
    // DERIVATION SKIPPED: pure definition ($n$-th square number)
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
    // ORIGINAL:
    // explanation: `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
    explanation: [
      `Each square number is built from the previous one by adding an L-shaped border — a gnomon — of $2n - 1$ dots. The increments $1, 3, 5, 7, \\ldots$ are the odd numbers.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$S_1 = 1$', operation: '$+ 3$' },
          { value: '$S_2 = 4$', operation: '$+ 5$' },
          { value: '$S_3 = 9$', operation: '$+ (2n-1)$' },
          { value: '$S_n$' }
        ]
      }
    ],
    derivation: [
      `Compute the difference between consecutive squares.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S_n - S_{n-1} = n^2 - (n-1)^2$', operation: 'expand' },
          { expr: '$= n^2 - (n^2 - 2n + 1)$', operation: 'simplify' },
          { expr: '$= 2n - 1$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
    explanation: [
      `The sum of the first $n$ odd numbers is exactly $n^2$. Follows from the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$: $S_n = \\frac{n}{2}(1 + 2n - 1) = n^2$.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$1, 3, 5, \\ldots, 2n-1$', operation: 'sum' },
          { value: '$n^2$' }
        ]
      }
    ],
    derivation: [
      `Apply the arithmetic series formula with $a_1 = 1$ and $a_n = 2n - 1$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$S_n = \\frac{n}{2}(a_1 + a_n)$', operation: 'substitute' },
          { expr: '$S_n = \\frac{n}{2}(1 + (2n - 1))$', operation: 'simplify' },
          { expr: '$S_n = \\frac{n}{2} \\cdot 2n = n^2$', tag: 'result' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
    explanation: [
      `Closed-form for the sum of the first $n$ perfect squares. The polynomial is cubic in $n$ — each new term contributes a squared value, so the running total grows faster than for triangular numbers.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$1^2, 2^2, \\ldots, n^2$', operation: 'sum' },
          { value: '$\\frac{n(n+1)(2n+1)}{6}$' }
        ]
      }
    ],
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
    // ORIGINAL:
    // explanation: `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
    explanation: [
      `Every primitive Pythagorean triple $(a, b, c)$ satisfying $a^2 + b^2 = c^2$ can be generated from a pair of integers $m, n$. For $m = 2, n = 1$: $(3, 4, 5)$. For $m = 3, n = 2$: $(5, 12, 13)$. Non-primitive triples are integer multiples of primitive ones.`,
      {
        component: 'FunctionMachineDiagram',
        steps: [
          { value: '$m,\\ n$', operation: 'apply generator formulas' },
          { value: '$(a, b, c)$' }
        ]
      }
    ],
    derivation: [
      `Verify that $a^2 + b^2 = c^2$ when $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$.`,
      {
        component: 'MathDerivation',
        items: [
          { expr: '$a^2 + b^2 = (m^2 - n^2)^2 + (2mn)^2$', operation: 'expand' },
          { expr: '$= m^4 - 2m^2 n^2 + n^4 + 4m^2 n^2$', operation: 'combine' },
          { expr: '$= m^4 + 2m^2 n^2 + n^4$', operation: 'factor as perfect square' },
          { expr: '$= (m^2 + n^2)^2 = c^2$', tag: 'result' }
        ]
      }
    ],
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
      // FMD already present — untouched.
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
      // ORIGINAL:
      // explanation: `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
      explanation: [
        `The discriminant of a quadratic $ax^2 + bx + c = 0$ determines the nature of its roots. If $\\Delta > 0$: two distinct real roots. If $\\Delta = 0$: one repeated real root. If $\\Delta < 0$: two complex conjugate roots.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a,\\ b,\\ c$', operation: 'compute $b^2 - 4ac$' },
            { value: '$\\Delta$' }
          ]
        }
      ],
      // DERIVATION SKIPPED: named quantity from the quadratic formula, no independent derivation
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
      // ORIGINAL:
      // explanation: `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
      explanation: [
        `If a squared expression equals a constant, the variable equals the positive or negative square root of that constant. This is the simplest method for solving quadratics with no linear term.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^2 = p$', operation: 'take square root, apply $\\pm$' },
            { value: '$x = \\pm\\sqrt{p}$' }
          ]
        }
      ],
      derivation: [
        `Take the square root of both sides, accounting for both signs.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^2 = p$', operation: 'take positive square root' },
            { expr: '$\\sqrt{x^2} = \\sqrt{p}$', operation: 'use $\\sqrt{x^2} = |x|$' },
            { expr: '$|x| = \\sqrt{p}$', operation: 'remove absolute value' },
            { expr: '$x = \\pm\\sqrt{p}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
      explanation: [
        `Rewrites a quadratic expression as a perfect square minus a constant. Take half the coefficient of $x$, square it, add and subtract.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^2 + bx$', operation: 'add and subtract $(b/2)^2$' },
            { value: '$\\left(x + \\frac{b}{2}\\right)^2 - \\frac{b^2}{4}$' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
      explanation: [
        `An absolute value equation splits into two cases: the expression inside equals the positive value, or the expression inside equals the negative value.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$|p| = b$', operation: 'split by sign' },
            { value: '$p = b$ or $p = -b$' }
          ]
        }
      ],
      derivation: [
        `Split by cases on the sign of $p$: $|p|$ equals $p$ or $-p$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: 'Case $p \\geq 0$: $|p| = p = b$', operation: 'gives $p = b$' },
            { expr: 'Case $p < 0$: $|p| = -p = b$', operation: 'gives $p = -b$' },
            { expr: '$p = b$ or $p = -b$', tag: 'result' }
          ]
        }
      ],
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
      // FMD SKIPPED: two parallel rules (< vs >) don't fit a single linear chain.
      explanation: `A less-than inequality produces a compound inequality (a bounded interval). A greater-than inequality produces a disjunction (two unbounded rays).`,
      derivation: [
        `Split by cases on the sign of $p$ for each direction of the inequality.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: 'For $|p| < b$: both $p < b$ and $-p < b$ must hold', operation: 'combine into interval' },
            { expr: '$-b < p < b$', operation: 'for $|p| > b$: either $p > b$ or $-p > b$' },
            { expr: '$p < -b$ or $p > b$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
      explanation: [
        `The logarithm of a product equals the sum of the logarithms. This converts multiplication inside the argument into addition outside.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a(xy)$', operation: 'apply product rule' },
            { value: '$\\log_a(x) + \\log_a(y)$' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
      explanation: [
        `The logarithm of a quotient equals the difference of the logarithms. Division inside the argument becomes subtraction outside.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a\\!\\left(\\frac{x}{y}\\right)$', operation: 'apply quotient rule' },
            { value: '$\\log_a(x) - \\log_a(y)$' }
          ]
        }
      ],
      derivation: [
        `Let $\\log_a(x) = m$ and $\\log_a(y) = n$, so $a^m = x$ and $a^n = y$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{x}{y} = \\frac{a^m}{a^n} = a^{m-n}$', operation: 'convert to log form' },
            { expr: '$\\log_a\\!\\left(\\frac{x}{y}\\right) = m - n$', operation: 'substitute back' },
            { expr: '$\\log_a\\!\\left(\\frac{x}{y}\\right) = \\log_a(x) - \\log_a(y)$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
      explanation: [
        `An exponent inside the argument moves out front as a multiplier. This is the key property that makes logarithms useful for simplifying expressions with exponents.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a(x^n)$', operation: 'bring exponent down' },
            { value: '$n \\cdot \\log_a(x)$' }
          ]
        }
      ],
      derivation: [
        `Let $\\log_a(x) = m$, so $a^m = x$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^n = (a^m)^n = a^{mn}$', operation: 'convert to log form' },
            { expr: '$\\log_a(x^n) = mn$', operation: 'substitute $m = \\log_a(x)$' },
            { expr: '$\\log_a(x^n) = n \\cdot \\log_a(x)$', tag: 'result' }
          ]
        }
      ],
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
      // FMD already present — untouched.
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
      // ORIGINAL:
      // explanation: `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
      explanation: [
        `The logarithm of the base itself always equals 1, because $a^1 = a$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a(a)$', operation: 'evaluate' },
            { value: '$1$' }
          ]
        }
      ],
      derivation: [
        `Apply the definition of logarithm.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\log_a(a) = x \\iff a^x = a$', operation: 'so $x = 1$' },
            { expr: '$\\log_a(a) = 1$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
      explanation: [
        `The logarithm of 1 is always 0, regardless of the base, because $a^0 = 1$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a(1)$', operation: 'evaluate' },
            { value: '$0$' }
          ]
        }
      ],
      derivation: [
        `Apply the definition of logarithm and use $a^0 = 1$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\log_a(1) = x \\iff a^x = 1$', operation: 'since $a^0 = 1$' },
            { expr: '$\\log_a(1) = 0$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Applying a logarithm to its own base's exponential cancels both operations, returning the exponent. The log "undoes" the exponential.`,
      explanation: [
        `Applying a logarithm to its own base&apos;s exponential cancels both operations, returning the exponent. The log &quot;undoes&quot; the exponential.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\log_a(a^x)$', operation: 'cancel' },
            { value: '$x$' }
          ]
        }
      ],
      derivation: [
        `Apply the definition of logarithm and equate exponents.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\log_a(a^x) = y \\iff a^y = a^x$', operation: 'equate exponents' },
            { expr: '$y = x$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Applying an exponential to its own base's logarithm cancels both operations, returning the argument. The exponential "undoes" the log.`,
      explanation: [
        `Applying an exponential to its own base&apos;s logarithm cancels both operations, returning the argument. The exponential &quot;undoes&quot; the log.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^{\\log_a(x)}$', operation: 'cancel' },
            { value: '$x$' }
          ]
        }
      ],
      derivation: [
        `Apply the definition of logarithm.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\log_a(x) = y \\iff a^y = x$', operation: 'substitute back' },
            { expr: '$a^{\\log_a(x)} = x$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
      explanation: [
        `A difference of two perfect squares factors into the product of a sum and a difference. This is the most frequently used factoring identity in algebra.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^2 - b^2$', operation: 'factor' },
            { value: '$(a + b)(a - b)$' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
      explanation: [
        `Squaring a binomial sum produces a trinomial: the square of each term plus twice their product.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(a + b)^2$', operation: 'expand' },
            { value: '$a^2 + 2ab + b^2$' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
      explanation: [
        `Squaring a binomial difference produces a trinomial: the square of each term minus twice their product. The result is always positive — a squared quantity.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(a - b)^2$', operation: 'expand' },
            { value: '$a^2 - 2ab + b^2$' }
          ]
        }
      ],
      derivation: [
        `Multiply $(a - b)$ by itself.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a - b)(a - b)$', operation: 'distribute' },
            { expr: '$a^2 - ab - ab + b^2$', operation: 'combine like terms' },
            { expr: '$a^2 - 2ab + b^2$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Cubing a binomial sum. The coefficients follow the third row of Pascal's triangle: 1, 3, 3, 1.`,
      explanation: [
        `Cubing a binomial sum. The coefficients follow the third row of Pascal&apos;s triangle: 1, 3, 3, 1.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(a + b)^3$', operation: 'expand' },
            { value: '$a^3 + 3a^2 b + 3ab^2 + b^3$' }
          ]
        }
      ],
      derivation: [
        `Multiply $(a + b)^2$ by $(a + b)$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a + b)^3 = (a + b)(a^2 + 2ab + b^2)$', operation: 'distribute' },
            { expr: '$= a^3 + 2a^2 b + ab^2 + a^2 b + 2ab^2 + b^3$', operation: 'combine like terms' },
            { expr: '$= a^3 + 3a^2 b + 3ab^2 + b^3$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
      explanation: [
        `Cubing a binomial difference. Same coefficients as the cube of a sum, with alternating signs.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(a - b)^3$', operation: 'expand' },
            { value: '$a^3 - 3a^2 b + 3ab^2 - b^3$' }
          ]
        }
      ],
      derivation: [
        `Multiply $(a - b)^2$ by $(a - b)$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a - b)^3 = (a - b)(a^2 - 2ab + b^2)$', operation: 'distribute' },
            { expr: '$= a^3 - 2a^2 b + ab^2 - a^2 b + 2ab^2 - b^3$', operation: 'combine like terms' },
            { expr: '$= a^3 - 3a^2 b + 3ab^2 - b^3$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
      explanation: [
        `A sum of two cubes factors into a binomial times a trinomial. The trinomial factor $a^2 - ab + b^2$ is irreducible over the reals.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^3 + b^3$', operation: 'factor' },
            { value: '$(a + b)(a^2 - ab + b^2)$' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
      explanation: [
        `A difference of two cubes factors into a binomial times a trinomial. Compare with the sum of cubes — the signs alternate in a predictable pattern: same, opposite, always positive.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^3 - b^3$', operation: 'factor' },
            { value: '$(a - b)(a^2 + ab + b^2)$' }
          ]
        }
      ],
      derivation: [
        `Expand the right side.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a - b)(a^2 + ab + b^2)$', operation: 'distribute $a$, then $-b$' },
            { expr: '$a^3 + a^2 b + ab^2 - a^2 b - ab^2 - b^3$', operation: 'cancel' },
            { expr: '$a^3 - b^3$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
      explanation: [
        `A monic quadratic trinomial factors into two binomials whose constants multiply to the constant term and add to the linear coefficient. This reverses the FOIL multiplication pattern.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^2 + (a+b)x + ab$', operation: 'factor' },
            { value: '$(x + a)(x + b)$' }
          ]
        }
      ],
      derivation: [
        `Expand $(x + a)(x + b)$ using FOIL.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(x + a)(x + b)$', operation: 'multiply' },
            { expr: '$x^2 + bx + ax + ab$', operation: 'combine like terms' },
            { expr: '$x^2 + (a + b)x + ab$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
      explanation: [
        `Any difference of even powers splits as a difference of squares applied to the $n$-th powers. Each factor may be factorable further depending on whether $n$ is even or odd.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^{2n} - a^{2n}$', operation: 'factor as difference of squares' },
            { value: '$(x^n - a^n)(x^n + a^n)$' }
          ]
        }
      ],
      derivation: [
        `Rewrite as a difference of squares of $x^n$ and $a^n$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^{2n} - a^{2n} = (x^n)^2 - (a^n)^2$', operation: 'apply difference of squares' },
            { expr: '$= (x^n - a^n)(x^n + a^n)$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
      explanation: [
        `For any positive integer $n$, the difference $x^n - a^n$ has $(x - a)$ as a factor. The second factor is the sum of all terms $x^{n-1-k}a^k$ for $k = 0$ to $n - 1$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^n - a^n$', operation: 'factor out $(x - a)$' },
            { value: '$(x - a)(x^{n-1} + \\cdots + a^{n-1})$' }
          ]
        }
      ],
      derivation: [
        `Expand $(x - a) \\cdot (x^{n-1} + x^{n-2}a + \\cdots + a^{n-1})$ and observe telescoping.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(x - a)(x^{n-1} + x^{n-2}a + \\cdots + a^{n-1})$', operation: 'distribute $x$ and $-a$' },
            { expr: '$= (x^n + x^{n-1}a + \\cdots + xa^{n-1}) - (x^{n-1}a + x^{n-2}a^2 + \\cdots + a^n)$', operation: 'cancel middle terms' },
            { expr: '$= x^n - a^n$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
      explanation: [
        `For odd $n$, the sum $x^n + a^n$ has $(x + a)$ as a factor. The second factor has alternating signs. This identity does not hold for even $n$ — a sum of even powers does not factor over the reals.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$x^n + a^n$ ($n$ odd)', operation: 'factor out $(x + a)$' },
            { value: '$(x + a)(x^{n-1} - \\cdots + a^{n-1})$' }
          ]
        }
      ],
      derivation: [
        `For odd $n$, substitute $a \\to -a$ in the difference-of-powers identity.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^n - (-a)^n = x^n + a^n$', operation: 'apply difference formula with $-a$' },
            { expr: '$x^n + a^n = (x + a)\\bigl(x^{n-1} + x^{n-2}(-a) + \\cdots + (-a)^{n-1}\\bigr)$', operation: 'simplify signs (odd $n$)' },
            { expr: '$= (x + a)(x^{n-1} - ax^{n-2} + \\cdots + a^{n-1})$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Multiplying powers with the same base: keep the base, add the exponents.`,
      explanation: [
        `Multiplying powers with the same base: keep the base, add the exponents.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^m \\cdot a^n$', operation: 'add exponents' },
            { value: '$a^{m+n}$' }
          ]
        }
      ],
      derivation: [
        `Expand each power as repeated multiplication.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$a^m \\cdot a^n = \\underbrace{a \\cdot a \\cdots a}_{m} \\cdot \\underbrace{a \\cdot a \\cdots a}_{n}$', operation: 'count total factors' },
            { expr: '$= \\underbrace{a \\cdot a \\cdots a}_{m + n}$', operation: 'apply definition' },
            { expr: '$= a^{m+n}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Dividing powers with the same base: keep the base, subtract the exponents.`,
      explanation: [
        `Dividing powers with the same base: keep the base, subtract the exponents.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\frac{a^m}{a^n}$', operation: 'subtract exponents' },
            { value: '$a^{m-n}$' }
          ]
        }
      ],
      derivation: [
        `Cancel $n$ copies of $a$ from numerator and denominator.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{a^m}{a^n} = \\frac{\\overbrace{a \\cdots a}^{m}}{\\underbrace{a \\cdots a}_{n}}$', operation: 'cancel common factors' },
            { expr: '$= \\underbrace{a \\cdots a}_{m - n}$', operation: 'apply definition' },
            { expr: '$= a^{m-n}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Raising a power to another power: keep the base, multiply the exponents.`,
      explanation: [
        `Raising a power to another power: keep the base, multiply the exponents.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(a^m)^n$', operation: 'multiply exponents' },
            { value: '$a^{mn}$' }
          ]
        }
      ],
      derivation: [
        `Apply the product rule iteratively.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(a^m)^n = \\underbrace{a^m \\cdot a^m \\cdots a^m}_{n}$', operation: 'apply product rule' },
            { expr: '$= a^{\\overbrace{m + m + \\cdots + m}^{n}}$', operation: 'sum exponents' },
            { expr: '$= a^{mn}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A power applied to a product distributes to each factor.`,
      explanation: [
        `A power applied to a product distributes to each factor.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(ab)^n$', operation: 'distribute' },
            { value: '$a^n \\cdot b^n$' }
          ]
        }
      ],
      derivation: [
        `Expand the power as repeated multiplication and regroup.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(ab)^n = \\underbrace{(ab)(ab)\\cdots(ab)}_{n}$', operation: 'commute and group' },
            { expr: '$= \\underbrace{a \\cdot a \\cdots a}_{n} \\cdot \\underbrace{b \\cdot b \\cdots b}_{n}$', operation: 'apply definition' },
            { expr: '$= a^n \\cdot b^n$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A power applied to a fraction distributes to numerator and denominator separately.`,
      explanation: [
        `A power applied to a fraction distributes to numerator and denominator separately.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\left(\\frac{a}{b}\\right)^n$', operation: 'distribute' },
            { value: '$\\frac{a^n}{b^n}$' }
          ]
        }
      ],
      derivation: [
        `Expand as repeated multiplication of the fraction.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\left(\\frac{a}{b}\\right)^n = \\underbrace{\\frac{a}{b} \\cdot \\frac{a}{b} \\cdots \\frac{a}{b}}_{n}$', operation: 'multiply numerators, denominators' },
            { expr: '$= \\frac{\\overbrace{a \\cdot a \\cdots a}^{n}}{\\underbrace{b \\cdot b \\cdots b}_{n}}$', operation: 'apply definition' },
            { expr: '$= \\frac{a^n}{b^n}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
      explanation: [
        `Any nonzero base raised to the zero power equals 1. This follows from the quotient rule: $a^n / a^n = a^{n-n} = a^0 = 1$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^0$', operation: 'evaluate' },
            { value: '$1$' }
          ]
        }
      ],
      derivation: [
        `Apply the quotient rule with equal exponents.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{a^n}{a^n} = a^{n - n} = a^0$', operation: 'the fraction equals $1$' },
            { expr: '$a^0 = 1$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
      explanation: [
        `A negative exponent means the reciprocal of the positive power. It does not make the result negative.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a^{-n}$', operation: 'take reciprocal, flip sign of exponent' },
            { value: '$\\frac{1}{a^n}$' }
          ]
        }
      ],
      derivation: [
        `Extend the quotient rule to allow the exponent difference to be negative.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\frac{a^0}{a^n} = a^{0 - n} = a^{-n}$', operation: 'simplify using $a^0 = 1$' },
            { expr: '$\\frac{1}{a^n} = a^{-n}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
      explanation: [
        `A negative exponent on a fraction inverts the fraction and makes the exponent positive.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\left(\\frac{a}{b}\\right)^{-n}$', operation: 'invert fraction, flip sign of exponent' },
            { value: '$\\left(\\frac{b}{a}\\right)^n$' }
          ]
        }
      ],
      derivation: [
        `Apply the negative exponent rule to a quotient.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\left(\\frac{a}{b}\\right)^{-n} = \\frac{1}{\\left(\\frac{a}{b}\\right)^n}$', operation: 'apply power of a quotient' },
            { expr: '$= \\frac{1}{\\frac{a^n}{b^n}} = \\frac{b^n}{a^n}$', operation: 'combine as single power' },
            { expr: '$= \\left(\\frac{b}{a}\\right)^n$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
      explanation: [
        `The $n$-th root of $a$ equals $a$ raised to the power $1/n$. This bridges radical notation and exponential notation, allowing all radical operations to be performed using exponent rules.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{a}$', operation: 'convert to power' },
            { value: '$a^{1/n}$' }
          ]
        }
      ],
      // DERIVATION SKIPPED: definitional bridge between notations
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
      // ORIGINAL:
      // explanation: `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
      explanation: [
        `The $n$-th root of a product equals the product of the $n$-th roots. Used to simplify radicals by factoring the radicand.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{ab}$', operation: 'split over factors' },
            { value: '$\\sqrt[n]{a} \\cdot \\sqrt[n]{b}$' }
          ]
        }
      ],
      derivation: [
        `Convert to rational exponents and apply the power of a product.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\sqrt[n]{ab} = (ab)^{1/n}$', operation: 'apply power of a product' },
            { expr: '$= a^{1/n} \\cdot b^{1/n}$', operation: 'convert back to radicals' },
            { expr: '$= \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
      explanation: [
        `The $n$-th root of a quotient equals the quotient of the $n$-th roots.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{\\frac{a}{b}}$', operation: 'split over fraction' },
            { value: '$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$' }
          ]
        }
      ],
      derivation: [
        `Convert to rational exponents and apply the power of a quotient.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\sqrt[n]{\\frac{a}{b}} = \\left(\\frac{a}{b}\\right)^{1/n}$', operation: 'apply power of a quotient' },
            { expr: '$= \\frac{a^{1/n}}{b^{1/n}}$', operation: 'convert back to radicals' },
            { expr: '$= \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
      explanation: [
        `Combines the radical to exponent conversion with the power of a power rule. The $n$-th root of $a^m$ equals $a$ raised to the fraction $m/n$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{a^m}$', operation: 'combine into single exponent' },
            { value: '$a^{m/n}$' }
          ]
        }
      ],
      derivation: [
        `Convert the radical to an exponent and apply the power of a power.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\sqrt[n]{a^m} = (a^m)^{1/n}$', operation: 'apply power of a power' },
            { expr: '$= a^{m \\cdot 1/n}$', operation: 'simplify' },
            { expr: '$= a^{m/n}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
      explanation: [
        `A radical inside a radical simplifies by multiplying the indices. In exponent form: $(a^{1/n})^{1/m} = a^{1/(mn)}$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[m]{\\sqrt[n]{a}}$', operation: 'multiply indices' },
            { value: '$\\sqrt[mn]{a}$' }
          ]
        }
      ],
      derivation: [
        `Convert to rational exponents and multiply.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\sqrt[m]{\\sqrt[n]{a}} = (a^{1/n})^{1/m}$', operation: 'apply power of a power' },
            { expr: '$= a^{1/(mn)}$', operation: 'convert back to radical' },
            { expr: '$= \\sqrt[mn]{a}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
      explanation: [
        `When the index is even, the $n$-th root of $a^n$ returns the absolute value of $a$, not $a$ itself. This is because even powers erase the sign: $(-3)^2 = 9$, and $\\sqrt{9} = 3$, not $-3$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{a^n}$ ($n$ even)', operation: 'take absolute value' },
            { value: '$|a|$' }
          ]
        }
      ],
      derivation: [
        `For even $n$, both $a$ and $-a$ produce the same $a^n$, so the principal $n$-th root must be non-negative.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(-a)^n = a^n$ (even $n$)', operation: 'principal root is non-negative' },
            { expr: '$\\sqrt[n]{a^n} \\geq 0$', operation: 'the non-negative value equal in magnitude to $a$ is $|a|$' },
            { expr: '$\\sqrt[n]{a^n} = |a|$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
      explanation: [
        `When the index is odd, the $n$-th root of $a^n$ returns $a$ directly — no absolute value needed. Odd roots preserve sign.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\sqrt[n]{a^n}$ ($n$ odd)', operation: 'cancel' },
            { value: '$a$' }
          ]
        }
      ],
      derivation: [
        `For odd $n$, the function $x \\mapsto x^n$ is strictly increasing on the reals, so $x^n = a^n$ has a unique real solution.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^n = a^n$ has unique real solution $x = a$ (odd $n$)', operation: 'take the odd $n$-th root' },
            { expr: '$\\sqrt[n]{a^n} = a$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
      explanation: [
        `When a polynomial $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$ — the value of the polynomial evaluated at $c$. No long division needed to find the remainder.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$P(x),\\ c$', operation: 'evaluate $P$ at $c$' },
            { value: '$P(c)$ = remainder' }
          ]
        }
      ],
      derivation: [
        `By polynomial division, write $P(x) = (x - c) Q(x) + R$ where $R$ is a constant.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$P(x) = (x - c) Q(x) + R$', operation: 'evaluate at $x = c$' },
            { expr: '$P(c) = (c - c) Q(c) + R = 0 + R$', operation: 'identify $R$' },
            { expr: '$R = P(c)$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
      explanation: [
        `$(x - c)$ divides $P(x)$ evenly if and only if $c$ is a root of $P$. This is the remainder theorem with remainder equal to zero.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$P(c) = 0$', operation: 'if and only if' },
            { value: '$(x - c) \\mid P(x)$' }
          ]
        }
      ],
      derivation: [
        `Direct consequence of the Remainder Theorem: $(x - c)$ divides $P(x)$ iff the remainder is $0$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$P(x) = (x - c) Q(x) + P(c)$', operation: '$(x - c) \\mid P(x) \\iff P(c) = 0$' },
            { expr: '$(x - c) \\text{ is a factor of } P(x) \\iff P(c) = 0$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
      explanation: [
        `For a polynomial with integer coefficients, any rational root $p/q$ (in lowest terms) must have $p$ dividing the constant term $a_0$ and $q$ dividing the leading coefficient $a_n$. This limits the search for rational roots to a finite list of candidates.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\frac{p}{q}$ is a root', operation: 'necessary condition' },
            { value: '$p \\mid a_0$ and $q \\mid a_n$' }
          ]
        }
      ],
      derivation: [
        `Substitute $x = p/q$ (in lowest terms) into the polynomial and clear denominators.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$a_n \\left(\\frac{p}{q}\\right)^n + \\cdots + a_0 = 0$', operation: 'multiply by $q^n$' },
            { expr: '$a_n p^n + a_{n-1} p^{n-1} q + \\cdots + a_0 q^n = 0$', operation: 'isolate terms' },
            { expr: 'From $p \\mid$ all-but-last-term: $p \\mid a_0 q^n$, and since $\\gcd(p, q) = 1$: $p \\mid a_0$', operation: 'similarly from the other side' },
            { expr: '$q \\mid a_n$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
      explanation: [
        `Relates the roots of a quadratic $ax^2 + bx + c = 0$ to its coefficients without solving the equation. The sum of the roots equals $-b/a$ and the product equals $c/a$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a,\\ b,\\ c$', operation: 'compute $-b/a$ and $c/a$' },
            { value: '$x_1 + x_2,\\ x_1 x_2$' }
          ]
        }
      ],
      derivation: [
        `Factor $ax^2 + bx + c$ using its roots $x_1, x_2$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$ax^2 + bx + c = a(x - x_1)(x - x_2)$', operation: 'expand right side' },
            { expr: '$= a\\bigl(x^2 - (x_1 + x_2)x + x_1 x_2\\bigr)$', operation: 'match coefficients' },
            { expr: '$b = -a(x_1 + x_2), \\quad c = a x_1 x_2$', operation: 'divide by $a$' },
            { expr: '$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
      explanation: [
        `Expands any positive integer power of a binomial as a sum of $n + 1$ terms. Each term is weighted by a binomial coefficient $\\binom{n}{k}$, with the powers of $x$ decreasing and the powers of $y$ increasing.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$(x + y)^n$', operation: 'expand via binomial coefficients' },
            { value: '$\\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$' }
          ]
        }
      ],
      derivation: [
        `Expand $(x + y)^n$ as $n$ factors of $(x + y)$; count terms with exactly $k$ copies of $y$.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$(x + y)^n = \\underbrace{(x + y)(x + y) \\cdots (x + y)}_{n}$', operation: 'each term picks $x$ or $y$ from each factor' },
            { expr: 'Number of terms with exactly $k$ copies of $y$: $\\binom{n}{k}$', operation: 'each contributes $x^{n-k} y^k$' },
            { expr: '$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read "$n$ choose $k$."`,
      explanation: [
        `Counts the number of ways to choose $k$ items from $n$ items, and gives the coefficient of the $k$-th term in the binomial expansion. Read &quot;$n$ choose $k$.&quot;`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$n,\\ k$', operation: 'compute $\\frac{n!}{k!(n-k)!}$' },
            { value: '$\\binom{n}{k}$' }
          ]
        }
      ],
      // DERIVATION SKIPPED: definitional formula
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
      // ORIGINAL:
      // explanation: `Each entry in Pascal's triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
      explanation: [
        `Each entry in Pascal&apos;s triangle equals the sum of the two entries directly above it. This recurrence builds binomial coefficients row by row without computing factorials.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$\\binom{n}{k},\\ \\binom{n}{k+1}$', operation: 'sum' },
            { value: '$\\binom{n+1}{k+1}$' }
          ]
        }
      ],
      derivation: [
        `Expand each binomial coefficient using factorials and combine over a common denominator.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$\\binom{n}{k} + \\binom{n}{k+1} = \\frac{n!}{k!(n-k)!} + \\frac{n!}{(k+1)!(n-k-1)!}$', operation: 'common denominator $(k+1)!(n-k)!$' },
            { expr: '$= \\frac{n!(k+1) + n!(n-k)}{(k+1)!(n-k)!}$', operation: 'factor $n!$' },
            { expr: '$= \\frac{n! \\cdot (n+1)}{(k+1)!(n-k)!} = \\frac{(n+1)!}{(k+1)!\\bigl((n+1) - (k+1)\\bigr)!}$', operation: 'match binomial form' },
            { expr: '$= \\binom{n+1}{k+1}$', tag: 'result' }
          ]
        }
      ],
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
      // ORIGINAL:
      // explanation: `Generalizes Vieta's formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
      explanation: [
        `Generalizes Vieta&apos;s formulas to polynomials of any degree (shown here for degree 3 with leading coefficient 1). The sum of the roots equals the negative of the second coefficient. The product of the roots equals the constant term times $(-1)^n$.`,
        {
          component: 'FunctionMachineDiagram',
          steps: [
            { value: '$a_0, a_1, \\ldots, a_{n-1}$', operation: 'compute symmetric sums of roots' },
            { value: '$\\sum r_i,\\ \\prod r_i,\\ \\ldots$' }
          ]
        }
      ],
      derivation: [
        `Factor a monic polynomial by its roots and expand as elementary symmetric polynomials.`,
        {
          component: 'MathDerivation',
          items: [
            { expr: '$x^n + a_{n-1}x^{n-1} + \\cdots + a_0 = (x - r_1)(x - r_2) \\cdots (x - r_n)$', operation: 'expand right side' },
            { expr: '$= x^n - (r_1 + \\cdots + r_n)x^{n-1} + \\cdots + (-1)^n r_1 r_2 \\cdots r_n$', operation: 'match coefficients' },
            { expr: '$\\sum r_i = -a_{n-1}, \\quad \\prod r_i = (-1)^n a_0$', tag: 'result' }
          ]
        }
      ],
      notation: `For a monic polynomial $x^n + a_{n-1}x^{n-1} + \\cdots + a_0$, the elementary symmetric sums of the roots $r_1, \\ldots, r_n$ equal the coefficients (up to sign).`,
      conditions: `Leading coefficient is 1 (monic). For non-monic polynomials, divide all coefficients by $a_n$ first.`,
      related_formulas: `- [Vieta's Formulas (Quadratic)](!/algebra/formulas#vietas_formulas_quadratic)`,
      related_definitions: `- [Vieta's Formulas](!/algebra/definitions#vietas_formulas)\n- [Root of a Polynomial](!/algebra/definitions#root_of_a_polynomial)\n- [Leading Coefficient](!/algebra/definitions#leading_coefficient)`
    }
  },


];

export default algebraFormulasList;