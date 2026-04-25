const arithmeticTermsList = [

// ============================================
// Arithmetic Definitions Data
// 22 terms, 3 categories
// All section anchors verified against page content
// ============================================


// ============================================
// CATEGORY: Divisibility
// ============================================

{
  id: 'divisor',
  name: 'Divisor (Factor)',
  category: 'Divisibility',
  formula: `An integer $a \\neq 0$ is a divisor of an integer $b$ if there exists an integer $k$ such that $b = a \\cdot k$, written $a \\mid b$`,
  link: { url: '/arithmetic/divisibility/factors#1', text: 'Factors' },
  intuition: `A divisor is a number that divides another number exactly, leaving no remainder. The terms "divisor" and "factor" are used interchangeably when referring to the integers that divide a given number.`,
  notation: `$a \\mid b$ means $a$ divides $b$. The negation $a \\nmid b$ means $a$ does not divide $b$.`,
  'related concepts': `
- [Multiple](!/arithmetic/definitions#multiple)
- [Prime Number](!/arithmetic/definitions#prime_number)
- [Greatest Common Divisor](!/arithmetic/definitions#greatest_common_divisor)`,
},

{
  id: 'multiple',
  name: 'Multiple',
  category: 'Divisibility',
  formula: `An integer $b$ is a multiple of an integer $a \\neq 0$ if there exists an integer $k$ such that $b = a \\cdot k$`,
  link: { url: '/arithmetic/divisibility/factors#5', text: 'Multiples' },
  intuition: `A multiple of a number is the result of multiplying that number by any integer. Multiples extend infinitely in both the positive and negative directions.`,
  examples: `The multiples of $4$ are $\\ldots, -8, -4, 0, 4, 8, 12, 16, \\ldots$

Every integer is a multiple of $1$ and a multiple of itself.`,
  'related concepts': `
- [Divisor](!/arithmetic/definitions#divisor)
- [Least Common Multiple](!/arithmetic/definitions#least_common_multiple)`,
},

{
  id: 'prime_number',
  name: 'Prime Number',
  category: 'Divisibility',
  formula: `An integer $p > 1$ whose only positive divisors are $1$ and $p$ itself`,
  link: { url: '/arithmetic/divisibility#7', text: 'Prime Numbers' },
  intuition: `A prime number cannot be broken into a product of smaller positive integers. Primes are the multiplicative building blocks of all integers greater than $1$.`,
  properties: `
• Every integer $n > 1$ is either prime or can be expressed as a product of primes

• $2$ is the only even prime number

• There are infinitely many primes`,
  'related concepts': `
- [Composite Number](!/arithmetic/definitions#composite_number)
- [Prime Factorization](!/arithmetic/definitions#prime_factorization)
- [Coprime](!/arithmetic/definitions#coprime)`,
},

{
  id: 'composite_number',
  name: 'Composite Number',
  category: 'Divisibility',
  formula: `An integer $n > 1$ that has at least one positive divisor other than $1$ and $n$ itself`,
  link: { url: '/arithmetic/divisibility#7', text: 'Prime Numbers' },
  intuition: `A composite number can be written as a product of two or more smaller positive integers. Every composite number has a unique prime factorization.`,
  examples: `$4 = 2 \\times 2$, $12 = 2^2 \\times 3$, $30 = 2 \\times 3 \\times 5$

The integer $1$ is neither prime nor composite.`,
  'related concepts': `
- [Prime Number](!/arithmetic/definitions#prime_number)
- [Prime Factorization](!/arithmetic/definitions#prime_factorization)
- [Divisor](!/arithmetic/definitions#divisor)`,
},

{
  id: 'prime_factorization',
  name: 'Prime Factorization',
  category: 'Divisibility',
  formula: `The expression of a positive integer $n > 1$ as a product of prime powers: $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}$, where each $p_i$ is prime and each $a_i \\geq 1$`,
  link: { url: '/arithmetic/divisibility#8', text: 'Prime Factorization' },
  intuition: `Every integer greater than $1$ can be decomposed into a product of primes in exactly one way, up to the order of the factors. This uniqueness is guaranteed by the Fundamental Theorem of Arithmetic.`,
  examples: `$60 = 2^2 \\times 3 \\times 5$

$360 = 2^3 \\times 3^2 \\times 5$`,
  'related concepts': `
- [Prime Number](!/arithmetic/definitions#prime_number)
- [Greatest Common Divisor](!/arithmetic/definitions#greatest_common_divisor)
- [Least Common Multiple](!/arithmetic/definitions#least_common_multiple)`,
},

{
  id: 'coprime',
  name: 'Coprime (Relatively Prime)',
  category: 'Divisibility',
  formula: `Two integers $a$ and $b$ are coprime if their greatest common divisor is $1$: $\\gcd(a, b) = 1$`,
  link: { url: '/arithmetic/divisibility/gcd#7', text: 'Coprime Numbers' },
  intuition: `Coprime integers share no prime factors. They need not be prime themselves — for instance, $8$ and $15$ are coprime even though both are composite.`,
  notation: `Written $\\gcd(a, b) = 1$, or sometimes $a \\perp b$. Also called "relatively prime" or "mutually prime."`,
  'related concepts': `
- [Greatest Common Divisor](!/arithmetic/definitions#greatest_common_divisor)
- [Prime Number](!/arithmetic/definitions#prime_number)
- [Prime Factorization](!/arithmetic/definitions#prime_factorization)`,
},

{
  id: 'greatest_common_divisor',
  name: 'Greatest Common Divisor (GCD)',
  category: 'Divisibility',
  formula: `The largest positive integer $d$ that divides both $a$ and $b$: $d = \\gcd(a, b)$ where $d \\mid a$ and $d \\mid b$, and for every common divisor $c$ of $a$ and $b$, $c \\mid d$`,
  link: { url: '/arithmetic/divisibility/gcd#1', text: 'GCD' },
  intuition: `The GCD captures the largest shared factor of two integers. It equals the product of all prime factors common to both numbers, each taken to its lowest power.`,
  notation: `$\\gcd(a, b)$ or sometimes $(a, b)$. Also called the highest common factor (HCF).`,
  'related concepts': `
- [Least Common Multiple](!/arithmetic/definitions#least_common_multiple)
- [Coprime](!/arithmetic/definitions#coprime)
- [Divisor](!/arithmetic/definitions#divisor)
- [Prime Factorization](!/arithmetic/definitions#prime_factorization)`,
},

{
  id: 'least_common_multiple',
  name: 'Least Common Multiple (LCM)',
  category: 'Divisibility',
  formula: `The smallest positive integer $m$ that is a multiple of both $a$ and $b$: $m = \\operatorname{lcm}(a, b)$ where $a \\mid m$ and $b \\mid m$, and for every common multiple $n$ of $a$ and $b$, $m \\mid n$`,
  link: { url: '/arithmetic/divisibility/lcm#1', text: 'LCM' },
  intuition: `The LCM is the smallest number that both integers divide into evenly. It equals the product of all prime factors appearing in either number, each taken to its highest power.`,
  properties: `
• $\\operatorname{lcm}(a, b) \\cdot \\gcd(a, b) = |a \\cdot b|$

• If $a$ and $b$ are coprime, $\\operatorname{lcm}(a, b) = |a \\cdot b|$`,
  'related concepts': `
- [Greatest Common Divisor](!/arithmetic/definitions#greatest_common_divisor)
- [Multiple](!/arithmetic/definitions#multiple)
- [Common Denominator](!/arithmetic/definitions#common_denominator)`,
},

// ============================================
// CATEGORY: Fractions
// ============================================

{
  id: 'fraction',
  name: 'Fraction',
  category: 'Fractions',
  formula: `An expression of the form $\\frac{a}{b}$ where $a$ is the numerator and $b \\neq 0$ is the denominator, representing the quotient of $a$ divided by $b$`,
  link: { url: '/arithmetic/fractions#1', text: 'Fractions' },
  intuition: `A fraction represents a part of a whole or, more generally, the ratio of two quantities. The denominator specifies how many equal parts the whole is divided into, and the numerator counts how many of those parts are taken.`,
  notation: `Written $\\frac{a}{b}$ or $a/b$. The horizontal or diagonal line separating numerator and denominator is called the fraction bar.`,
  'related concepts': `
- [Numerator](!/arithmetic/definitions#numerator)
- [Denominator](!/arithmetic/definitions#denominator)
- [Proper Fraction](!/arithmetic/definitions#proper_fraction)
- [Improper Fraction](!/arithmetic/definitions#improper_fraction)`,
},

{
  id: 'numerator',
  name: 'Numerator',
  category: 'Fractions',
  formula: `In the fraction $\\frac{a}{b}$, the integer $a$ is the numerator — the number above the fraction bar`,
  link: { url: '/arithmetic/fractions#2', text: 'Numerator and Denominator' },
  intuition: `The numerator counts how many parts are being considered. In the division interpretation, the numerator is the dividend.`,
  'related concepts': `
- [Denominator](!/arithmetic/definitions#denominator)
- [Fraction](!/arithmetic/definitions#fraction)`,
},

{
  id: 'denominator',
  name: 'Denominator',
  category: 'Fractions',
  formula: `In the fraction $\\frac{a}{b}$, the integer $b \\neq 0$ is the denominator — the number below the fraction bar`,
  link: { url: '/arithmetic/fractions#2', text: 'Numerator and Denominator' },
  intuition: `The denominator names the size of each part by specifying how many equal parts make up the whole. In the division interpretation, the denominator is the divisor.`,
  'related concepts': `
- [Numerator](!/arithmetic/definitions#numerator)
- [Fraction](!/arithmetic/definitions#fraction)
- [Common Denominator](!/arithmetic/definitions#common_denominator)`,
},

{
  id: 'proper_fraction',
  name: 'Proper Fraction',
  category: 'Fractions',
  formula: `A fraction $\\frac{a}{b}$ with $0 < a < b$, representing a value strictly between $0$ and $1$`,
  link: { url: '/arithmetic/fractions#4', text: 'Proper and Improper Fractions' },
  intuition: `A proper fraction represents less than one whole. The numerator is smaller than the denominator, so the number of parts taken is fewer than the number of parts in a whole.`,
  examples: `$\\frac{1}{4}$, $\\frac{3}{7}$, $\\frac{12}{13}$`,
  'related concepts': `
- [Improper Fraction](!/arithmetic/definitions#improper_fraction)
- [Mixed Number](!/arithmetic/definitions#mixed_number)
- [Fraction](!/arithmetic/definitions#fraction)`,
},

{
  id: 'improper_fraction',
  name: 'Improper Fraction',
  category: 'Fractions',
  formula: `A fraction $\\frac{a}{b}$ with $a \\geq b > 0$, representing a value greater than or equal to $1$`,
  link: { url: '/arithmetic/fractions#4', text: 'Proper and Improper Fractions' },
  intuition: `An improper fraction represents one or more whole units. The numerator meets or exceeds the denominator, meaning the parts taken fill at least one complete whole.`,
  examples: `$\\frac{7}{4}$, $\\frac{5}{5}$, $\\frac{13}{3}$

Every improper fraction can be rewritten as a [mixed number](!/arithmetic/definitions#mixed_number).`,
  'related concepts': `
- [Proper Fraction](!/arithmetic/definitions#proper_fraction)
- [Mixed Number](!/arithmetic/definitions#mixed_number)
- [Fraction](!/arithmetic/definitions#fraction)`,
},

{
  id: 'mixed_number',
  name: 'Mixed Number',
  category: 'Fractions',
  formula: `A number written as $q\\frac{r}{b}$, combining a whole number $q$ and a proper fraction $\\frac{r}{b}$, equivalent to $\\frac{qb + r}{b}$`,
  link: { url: '/arithmetic/fractions/mixed-numbers#1', text: 'Mixed Numbers' },
  intuition: `A mixed number separates the whole-number part from the fractional remainder, making it easier to gauge the approximate size of the quantity.`,
  examples: `$\\frac{7}{4} = 1\\frac{3}{4}$

$\\frac{13}{3} = 4\\frac{1}{3}$`,
  'related concepts': `
- [Improper Fraction](!/arithmetic/definitions#improper_fraction)
- [Proper Fraction](!/arithmetic/definitions#proper_fraction)`,
},

{
  id: 'equivalent_fractions',
  name: 'Equivalent Fractions',
  category: 'Fractions',
  formula: `Two fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ are equivalent if $a \\cdot d = b \\cdot c$, written $\\frac{a}{b} = \\frac{c}{d}$`,
  link: { url: '/arithmetic/fractions/equivalent#1', text: 'Equivalent Fractions' },
  intuition: `Equivalent fractions represent the same value despite having different numerators and denominators. Multiplying or dividing both the numerator and denominator by the same nonzero integer produces an equivalent fraction.`,
  examples: `$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{50}{100}$`,
  'related concepts': `
- [Fraction](!/arithmetic/definitions#fraction)
- [Common Denominator](!/arithmetic/definitions#common_denominator)`,
},

{
  id: 'reciprocal',
  name: 'Reciprocal',
  category: 'Fractions',
  formula: `The reciprocal of a nonzero number $\\frac{a}{b}$ is $\\frac{b}{a}$, such that $\\frac{a}{b} \\cdot \\frac{b}{a} = 1$`,
  link: { url: '/arithmetic/fractions/dividing#1', text: 'Reciprocals' },
  intuition: `The reciprocal flips a fraction upside down — the numerator and denominator swap positions. Dividing by a fraction is equivalent to multiplying by its reciprocal.`,
  notation: `The reciprocal of $x$ is written $\\frac{1}{x}$ or $x^{-1}$.`,
  'related concepts': `
- [Fraction](!/arithmetic/definitions#fraction)
- [Complex Fraction](!/arithmetic/definitions#complex_fraction)`,
},

{
  id: 'common_denominator',
  name: 'Common Denominator',
  category: 'Fractions',
  formula: `A common denominator of two fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ is any positive integer $m$ such that $b \\mid m$ and $d \\mid m$. The least common denominator (LCD) is $\\operatorname{lcm}(b, d)$.`,
  link: { url: '/arithmetic/fractions/adding-subtracting#3', text: 'Finding a Common Denominator' },
  intuition: `A common denominator rewrites two fractions so they share the same-sized parts, which is required before adding or subtracting. Using the least common denominator keeps numbers as small as possible.`,
  examples: `To add $\\frac{1}{3} + \\frac{1}{4}$, the LCD is $12$:

$$\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$`,
  'related concepts': `
- [Denominator](!/arithmetic/definitions#denominator)
- [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions)
- [Least Common Multiple](!/arithmetic/definitions#least_common_multiple)`,
},

{
  id: 'complex_fraction',
  name: 'Complex Fraction',
  category: 'Fractions',
  formula: `A fraction in which the numerator, the denominator, or both contain a fraction: $\\frac{\\;\\frac{a}{b}\\;}{\\frac{c}{d}}$`,
  link: { url: '/arithmetic/fractions/complex#1', text: 'Complex Fractions' },
  intuition: `A complex fraction is a fraction nested inside another fraction. It is simplified by multiplying the numerator by the reciprocal of the denominator.`,
  examples: `$$\\frac{\\;\\frac{2}{3}\\;}{\\frac{4}{5}} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$$`,
  'related concepts': `
- [Fraction](!/arithmetic/definitions#fraction)
- [Reciprocal](!/arithmetic/definitions#reciprocal)`,
},

// ============================================
// CATEGORY: Modular Arithmetic
// ============================================

{
  id: 'modulus',
  name: 'Modulus',
  category: 'Modular Arithmetic',
  formula: `A fixed positive integer $m$ that defines the system of modular arithmetic, where integers are considered equivalent if they differ by a multiple of $m$`,
  link: { url: '/arithmetic/modulo#1', text: 'Modular Arithmetic' },
  intuition: `The modulus sets the point at which numbers "wrap around." In arithmetic modulo $m$, only the remainder after division by $m$ matters — integers that share the same remainder are treated as identical.`,
  notation: `Appears after the keyword "mod": $a \\equiv b \\pmod{m}$ or $a \\bmod m = r$.`,
  'related concepts': `
- [Congruence](!/arithmetic/definitions#congruence)
- [Remainder](!/arithmetic/definitions#remainder)
- [Residue Class](!/arithmetic/definitions#residue_class)`,
},

{
  id: 'congruence',
  name: 'Congruence',
  category: 'Modular Arithmetic',
  formula: `Two integers $a$ and $b$ are congruent modulo $m$ if $m \\mid (a - b)$, written $a \\equiv b \\pmod{m}$`,
  link: { url: '/arithmetic/modulo#5', text: 'Congruence' },
  intuition: `Congruence is an equivalence relation on integers that groups numbers by their remainder when divided by the modulus. Two integers are congruent when they sit at the same position in the cyclic number line defined by $m$.`,
  notation: `$a \\equiv b \\pmod{m}$ reads "$a$ is congruent to $b$ modulo $m$." The negation is $a \\not\\equiv b \\pmod{m}$.`,
  'related concepts': `
- [Modulus](!/arithmetic/definitions#modulus)
- [Remainder](!/arithmetic/definitions#remainder)
- [Residue Class](!/arithmetic/definitions#residue_class)`,
},

{
  id: 'remainder',
  name: 'Remainder',
  category: 'Modular Arithmetic',
  formula: `For integers $a$ and $m > 0$, the remainder $r$ is the unique integer satisfying $a = qm + r$ with $0 \\leq r < m$`,
  link: { url: '/arithmetic/modulo#1', text: 'Modular Arithmetic' },
  intuition: `The remainder is what is left over after dividing one integer by another as many times as possible. It is always non-negative and strictly less than the divisor.`,
  properties: `
• $a \\bmod m = r$ is equivalent to $a \\equiv r \\pmod{m}$

• Two integers have the same remainder modulo $m$ if and only if they are congruent modulo $m$`,
  'related concepts': `
- [Modulus](!/arithmetic/definitions#modulus)
- [Congruence](!/arithmetic/definitions#congruence)
- [Divisor](!/arithmetic/definitions#divisor)`,
},

{
  id: 'residue_class',
  name: 'Residue Class',
  category: 'Modular Arithmetic',
  formula: `The residue class of an integer $a$ modulo $m$ is the set $[a]_m = \\{a + km : k \\in \\mathbb{Z}\\}$ — all integers congruent to $a$ modulo $m$`,
  link: { url: '/arithmetic/modulo#6', text: 'Properties of Congruence' },
  intuition: `A residue class collects all integers that share the same remainder when divided by $m$. The modulus $m$ partitions the integers into exactly $m$ residue classes: $[0]_m, [1]_m, \\ldots, [m-1]_m$.`,
  examples: `Modulo $3$, there are three residue classes:

$[0]_3 = \\{\\ldots, -6, -3, 0, 3, 6, \\ldots\\}$, $[1]_3 = \\{\\ldots, -5, -2, 1, 4, 7, \\ldots\\}$, $[2]_3 = \\{\\ldots, -4, -1, 2, 5, 8, \\ldots\\}$`,
  'related concepts': `
- [Congruence](!/arithmetic/definitions#congruence)
- [Modulus](!/arithmetic/definitions#modulus)
- [Remainder](!/arithmetic/definitions#remainder)`,
},
    
   
];

export default arithmeticTermsList;