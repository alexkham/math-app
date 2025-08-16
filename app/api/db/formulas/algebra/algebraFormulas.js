const algebraFormulasList = [
    {
      name: "Product Rule",
      formula: "$x^m \\cdot x^n = x^{m+n}$",
      fields: {
        "Explanation": "This fundamental rule states that when multiplying powers with the same base, we add their exponents. It emerges from the basic definition of exponents as repeated multiplication. The rule simplifies complex calculations by reducing multiple multiplications to a single power operation. This concept is crucial in algebra and forms the foundation for more advanced exponential manipulations. Understanding this rule is essential for simplifying expressions, solving equations, and working with scientific notation. It reflects the natural way powers combine when representing repeated multiplication of the same number.",
        "$x$": "Base number or variable",
        "$m, n$": "Exponents (any real numbers)",
        "$x^m, x^n$": "Powers being multiplied",
        "$x^{m+n}$": "Resulting power after combining exponents",
        "Example": "For $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$",
        "Use Cases": "Simplifying algebraic expressions, calculating compound growth"
      },
      category: "Exponent Rules"
    },
    {
      name: "Quotient Rule",
      formula: "$\\frac{x^m}{x^n} = x^{m-n}$",
      fields: {
        "Explanation": "This rule governs division of powers with the same base by subtracting their exponents. It's a direct consequence of the product rule and the fundamental properties of division. The rule elegantly simplifies what would otherwise be complex calculations involving multiple divisions. It's particularly powerful in algebra and calculus, where it helps simplify rational expressions and solve differential equations. The rule demonstrates how exponents behave when we're removing rather than adding factors, providing a systematic way to handle divisions of powers.",
        "$x$": "Base number or variable",
        "$m, n$": "Exponents (any real numbers)",
        "$x^m$": "Numerator power",
        "$x^n$": "Denominator power",
        "$x^{m-n}$": "Resulting power after subtracting exponents",
        "Example": "For $\\frac{2^5}{2^2} = 2^{5-2} = 2^3 = 8$",
        "Use Cases": "Simplifying fractions, solving rational equations"
      },
      category: "Exponent Rules"
    },
    {
      name: "Power Rule",
      formula: "$(x^m)^n = x^{m \\cdot n}$",
      fields: {
        "Explanation": "This rule shows that when raising a power to another power, we multiply the exponents. It represents the repeated application of an exponential expression and is crucial for understanding nested powers. The rule provides a straightforward way to handle complex expressions involving multiple layers of exponents. It's fundamental in understanding exponential growth and decay, and plays a vital role in fields ranging from compound interest calculations to physical decay processes. This rule demonstrates how exponents compound when applied repeatedly.",
        "$x$": "Base number or variable",
        "$m$": "Inner exponent",
        "$n$": "Outer exponent",
        "$(x^m)^n$": "Power raised to a power",
        "$x^{m \\cdot n}$": "Resulting power after multiplying exponents",
        "Example": "For $(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64$",
        "Use Cases": "Computing compound interest, analyzing exponential growth"
      },
      category: "Exponent Rules"
    },
    {
      name: "Zero Exponent Rule",
      formula: "$x^0 = 1, \\; x \\in \\mathbb{R} \\setminus \\{0\\}$",
      fields: {
        "Explanation": "This rule defines that any non-zero number raised to the power of zero equals one. It's a foundational concept that follows logically from the quotient rule of exponents. While seemingly simple, this rule is crucial in algebra and forms the basis for understanding more complex exponential relationships. It's particularly important in polynomial evaluation and series expansions. The rule fills a critical gap in exponent operations, providing a consistent framework for dealing with zero powers while maintaining the coherence of exponential arithmetic.",
        "$x$": "Base number or variable (non-zero)",
        "$0$": "Exponent",
        "$1$": "Result for any non-zero base",
        "$\\in$": "Belongs to (set membership symbol)",
        "$\\mathbb{R} \\setminus \\{0\\}$": "All real numbers except zero",
        "Example": "For $5^0 = 1$, $100^0 = 1$",
        "Use Cases": "Polynomial evaluation, series expansions"
      },
      category: "Exponent Rules"
    },
    {
      name: "Negative Exponent Rule",
      formula: "$x^{-n} = \\frac{1}{x^n}$",
      fields: {
        "Explanation": "This rule defines that a negative exponent means taking the reciprocal of the base raised to the positive exponent. It extends the concept of exponents to negative powers, maintaining consistency with other exponent rules. The rule is fundamental in understanding rational expressions and scientific notation. It provides a powerful tool for handling fractions and reciprocals in exponential form, making calculations more systematic and intuitive. This concept is essential in fields ranging from basic algebra to advanced calculus.",
        "$x$": "Base number or variable (non-zero)",
        "$-n$": "Negative exponent",
        "$x^n$": "Positive power in denominator",
        "Example": "For $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$",
        "Use Cases": "Scientific notation, simplifying rational expressions"
      },
      category: "Exponent Rules"
    },
    {
      name: "Fractional Exponent Rule",
      formula: "$x^{\\frac{m}{n}} = \\sqrt[n]{x^m}$",
      fields: {
        "Explanation": "This rule connects fractional exponents to nth roots, providing a bridge between exponential and radical notation. It's a powerful unification of roots and powers that extends the exponential concept to rational numbers. The rule demonstrates how any root can be expressed as a power, and vice versa, offering flexibility in mathematical manipulation. This relationship is fundamental in algebra and calculus, particularly in solving equations involving roots and powers. It provides a systematic way to handle expressions involving both roots and powers, making complex calculations more manageable.",
        "$x$": "Base number or variable",
        "$m$": "Numerator of fractional exponent",
        "$n$": "Denominator of fractional exponent (root index)",
        "$\\sqrt[n]{x^m}$": "Equivalent root expression",
        "Example": "For $8^{\\frac{2}{3}} = \\sqrt[3]{8^2} = \\sqrt[3]{64} = 4$",
        "Use Cases": "Solving radical equations, simplifying expressions with roots"
      },
      category: "Exponent Rules"
    },
    {
      name: "Product to Power Rule",
      formula: "$(xy)^n = x^n y^n$",
      fields: {
        "Explanation": "This rule states that the power of a product equals the product of the individual factors raised to that power. It demonstrates how exponents distribute over multiplication, similar to how multiplication distributes over addition. The rule is fundamental in simplifying complex expressions and is particularly useful when dealing with variables and coefficients in algebraic expressions. It provides a systematic way to expand powered products and is essential in various mathematical applications, from polynomial expansion to solving complex equations involving multiple variables.",
        "$x, y$": "Base numbers or variables",
        "$n$": "Exponent",
        "$(xy)^n$": "Product raised to a power",
        "$x^n y^n$": "Product of individual powers",
        "Example": "For $(2 \\cdot 3)^2 = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$",
        "Use Cases": "Expanding algebraic expressions, simplifying product terms"
      },
      category: "Exponent Rules"
    },


    {
      name: "Product Rule for Radicals",
      formula: "$\\sqrt[n]{xy} = \\sqrt[n]{x} \\cdot \\sqrt[n]{y}$",
      fields: {
        "Explanation": "This fundamental rule states that the nth root of a product equals the product of the nth roots of each factor. It allows us to break down complex radical expressions into simpler, more manageable parts. The rule is crucial in simplifying radical expressions and solving equations involving roots. It demonstrates how radicals distribute over multiplication, similar to how exponents behave with products. This principle is essential in various mathematical applications, from algebraic simplification to calculus operations.",
        "$\\sqrt[n]{}$": "Principal nth root operation",
        "$x, y$": "Numbers or expressions under the radical",
        "$n$": "Root index (when n=2, it's omitted as in square root)",
        "Example": "For $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$",
        "Use Cases": "Simplifying radical expressions, solving radical equations"
      },
      category: "Radical Rules"
    },
    {
      name: "Quotient Rule for Radicals",
      formula: "$\\sqrt[n]{\\frac{x}{y}} = \\frac{\\sqrt[n]{x}}{\\sqrt[n]{y}}$",
      fields: {
        "Explanation": "This rule establishes that the nth root of a quotient equals the quotient of the nth roots. It's a natural extension of the product rule and provides a systematic way to handle fractions under radicals. The rule is particularly useful in simplifying complex rational expressions involving radicals. It maintains the structural integrity of the fraction while making it easier to work with each part separately. This principle is fundamental in algebraic manipulation and in solving equations containing rational expressions with radicals.",
        "$\\sqrt[n]{}$": "Principal nth root operation",
        "$x$": "Numerator under the radical",
        "$y$": "Denominator under the radical (y ≠ 0)",
        "$n$": "Root index",
        "Example": "For $\\sqrt{\\frac{16}{9}} = \\frac{\\sqrt{16}}{\\sqrt{9}} = \\frac{4}{3}$",
        "Use Cases": "Simplifying radical fractions, rationalizing denominators"
      },
      category: "Radical Rules"
    },
    {
      name: "Power Rule for Radicals",
      formula: "$\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$",
      fields: {
        "Explanation": "This rule connects radicals to fractional exponents, providing a powerful bridge between root and power notation. It shows that taking the nth root of a power is equivalent to raising the base to a fractional exponent. This relationship is fundamental in advanced algebra and calculus, offering alternative ways to express and manipulate root expressions. The rule helps unify the concepts of roots and powers, making it easier to apply properties of exponents to radical expressions. This connection is crucial for solving complex equations and understanding the relationship between different forms of mathematical expression.",
        "$\\sqrt[n]{}$": "Principal nth root operation",
        "$x^m$": "Expression being rooted",
        "$m$": "Power of the expression under the radical",
        "$n$": "Root index",
        "$\\frac{m}{n}$": "Resulting fractional exponent",
        "Example": "For $\\sqrt{x^3} = x^{\\frac{3}{2}}$",
        "Use Cases": "Converting between radical and exponential form"
      },
      category: "Radical Rules"
    },
    {
      name: "Root of a Root Rule",
      formula: "$\\sqrt[m]{\\sqrt[n]{x}} = \\sqrt[mn]{x}$",
      fields: {
        "Explanation": "This rule shows how to simplify nested radicals by combining their indices through multiplication. It provides a clean way to handle multiple layers of roots, reducing them to a single radical. The rule is essential in simplifying complex radical expressions and understanding how nested roots relate to single roots. It demonstrates the multiplicative nature of root indices when roots are nested. This concept is particularly useful in advanced algebra and in solving equations involving multiple radical operations.",
        "$\\sqrt[m]{}$": "Outer root operation",
        "$\\sqrt[n]{}$": "Inner root operation",
        "$x$": "Expression under both radicals",
        "$mn$": "Product of indices",
        "Example": "For $\\sqrt{\\sqrt[3]{x}} = \\sqrt[6]{x}$",
        "Use Cases": "Simplifying nested radicals, solving equations with multiple roots"
      },
      category: "Radical Rules"
    },
    {
      name: "Like Root Addition Rule",
      formula: "$a\\sqrt[n]{x} + b\\sqrt[n]{x} = (a+b)\\sqrt[n]{x}$",
      fields: {
        "Explanation": "This rule demonstrates how to combine like radicals through addition or subtraction, similar to combining like terms in algebra. It's a fundamental concept in radical arithmetic that treats radical expressions as algebraic terms. The rule emphasizes that only radicals with identical indices and radicands can be directly combined. This principle is essential for simplifying expressions and solving equations involving multiple radical terms. It helps organize and reduce complex radical expressions to their simplest form.",
        "$a, b$": "Coefficients of the radical terms",
        "$\\sqrt[n]{x}$": "Common radical factor",
        "$n$": "Root index",
        "$x$": "Expression under the radical",
        "Example": "For $2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$",
        "Use Cases": "Combining like radicals, simplifying radical expressions"
      },
      category: "Radical Rules"
    },
    {
      name: "Even/Odd Root Property",
      formula: "$\\sqrt[n]{(-x)} = \\begin{cases} -\\sqrt[n]{x} & \\text{if n is odd} \\\\ \\text{undefined over } \\mathbb{R} & \\text{if n is even and x > 0} \\end{cases}$",
      fields: {
        "Explanation": "This rule defines how radicals behave with negative numbers based on whether the index is even or odd. It's a crucial concept in understanding the domain of radical expressions. For odd indices, negative numbers can be handled by moving the negative sign outside the radical. For even indices, negative numbers under the radical lead to complex numbers. This principle is fundamental in determining the real solutions of radical equations and understanding the relationship between roots and complex numbers.",
        "$\\sqrt[n]{}$": "Principal nth root operation",
        "$x$": "Positive number or expression",
        "$n$": "Root index (even or odd)",
        "$\\mathbb{R}$": "Set of real numbers",
        "Example": "For $\\sqrt[3]{-8} = -2$ but $\\sqrt{-4}$ is undefined over real numbers",
        "Use Cases": "Determining domains of radical expressions, solving radical equations"
      },
      category: "Radical Rules"
    },
    {
      name: "Rationalization Rule",
      formula: "$\\frac{a}{\\sqrt[n]{b}} = \\frac{a\\sqrt[n]{b^{n-1}}}{\\sqrt[n]{b^n}} = \\frac{a\\sqrt[n]{b^{n-1}}}{b}$",
      fields: {
        "Explanation": "This rule shows how to eliminate radicals from the denominator of a fraction, a process known as rationalization. It's a crucial technique in simplifying radical expressions and preparing them for computation or further manipulation. The rule works by multiplying both numerator and denominator by an appropriate radical expression that will rationalize the denominator. This process is essential in standardizing radical expressions and is particularly important in calculus and advanced algebraic manipulations.",
        "$a$": "Numerator (any real number)",
        "$\\sqrt[n]{b}$": "Radical in denominator",
        "$n$": "Root index",
        "$b$": "Expression under the radical",
        "$\\sqrt[n]{b^{n-1}}$": "Rationalizing factor",
        "Example": "For $\\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}$",
        "Use Cases": "Simplifying radical fractions, standardizing expressions"
      },
      category: "Radical Rules"
    },


    {
      name: "Basic Definition of logarithm",
      formula: "$y = \\log_b x \\iff b^y = x$",
      fields: {
        "Explanation": "This fundamental definition establishes the relationship between logarithms and exponentials. It states that the logarithm is the inverse function of exponentiation. The definition provides the foundation for all logarithmic operations and properties. Understanding this bidirectional relationship is crucial for solving exponential and logarithmic equations. It shows how logarithms can be used to convert multiplicative relationships into additive ones, making them a powerful tool in mathematics and various applications.",
        "$y$": "The logarithm (exponent)",
        "$b$": "Base of the logarithm",
        "$x$": "The argument (number being taken logarithm of)",
        "$b^y$": "The base raised to the logarithm power",
        "$\\iff$": "If and only if (logical equivalence)",
        "Example": "For $\\log_2 8 = 3$ because $2^3 = 8$",
        "Use Cases": "Converting between logarithmic and exponential forms"
      },
      category: "Logarithm Laws"
    },
    {
      name: "Product Rule for Logarithms",
      formula: "$\\log_b(MN) = \\log_b M + \\log_b N$",
      fields: {
        "Explanation": "This rule states that the logarithm of a product equals the sum of the logarithms of its factors. It transforms multiplication into addition, making complex multiplicative calculations simpler. This property is fundamental in simplifying logarithmic expressions and solving equations. It's particularly useful in dealing with compound interest, exponential growth, and other applications where products need to be simplified.",
        "$\\log_b$": "Logarithm with base b",
        "$M, N$": "Positive real numbers",
        "Example": "For $\\log_2(8 \\cdot 4) = \\log_2 8 + \\log_2 4 = 3 + 2 = 5$",
        "Use Cases": "Simplifying products inside logarithms"
      },
      category: "Logarithm Laws"
    },
    {
      name: "Quotient Rule for Logarithms",
      formula: "$\\log_b(\\frac{M}{N}) = \\log_b M - \\log_b N$",
      fields: {
        "Explanation": "This rule states that the logarithm of a quotient equals the difference of logarithms. It transforms division into subtraction, making complex division calculations more manageable. The rule is essential in simplifying rational expressions involving logarithms and is particularly useful in solving equations where quotients appear inside logarithms.",
        "$\\log_b$": "Logarithm with base b",
        "$M$": "Numerator (positive real number)",
        "$N$": "Denominator (positive real number)",
        "Example": "For $\\log_2(\\frac{8}{2}) = \\log_2 8 - \\log_2 2 = 3 - 1 = 2$",
        "Use Cases": "Simplifying quotients inside logarithms"
      },
      category: "Logarithm Laws"
    },
    {
      name: "Power Rule for Logarithms",
      formula: "$\\log_b(M^p) = p\\log_b M$",
      fields: {
        "Explanation": "This rule shows that the logarithm of a power equals the product of the exponent and the logarithm of the base. It transforms exponentiation into multiplication, providing a powerful tool for simplifying expressions involving powers. This property is particularly useful in solving exponential equations and in applications involving compound growth or decay.",
        "$\\log_b$": "Logarithm with base b",
        "$M$": "Base of the power (positive real number)",
        "$p$": "Exponent",
        "Example": "For $\\log_2(8^2) = 2\\log_2 8 = 2 \\cdot 3 = 6$",
        "Use Cases": "Simplifying powers inside logarithms"
      },
      category: "Logarithm Laws"
    },
    {
      name: "Change of Base",
      formula: "$\\log_b M = \\frac{\\log_k M}{\\log_k b}$",
      fields: {
        "Explanation": "This rule allows conversion between logarithms of different bases. It's essential when working with calculators or computers that only compute natural or common logarithms. The formula shows how any logarithm can be expressed in terms of logarithms of another base, making it a crucial tool in practical calculations and theoretical developments.",
        "$\\log_b$": "Target logarithm with base b",
        "$\\log_k$": "Logarithm with new base k",
        "$M$": "Argument (positive real number)",
        "$b$": "Original base",
        "Example": "For $\\log_2 8$ using base 10: $\\frac{\\log_{10} 8}{\\log_{10} 2}$",
        "Use Cases": "Converting between different logarithm bases"
      },
      category: "Logarithm Laws"
    },
    {
      name: "Special Values",
      formula: "$\\log_b b = 1,\\quad \\log_b 1 = 0$",
      fields: {
        "Explanation": "These are fundamental identities in logarithmic arithmetic. They follow directly from the definition of logarithms and are essential in simplifying logarithmic expressions. The first identity states that the logarithm of a number equals 1 when the argument equals the base. The second identity shows that the logarithm of 1 is always 0, regardless of the base.",
        "$\\log_b$": "Logarithm with base b",
        "$b$": "Base of the logarithm",
        "Example": "For any base b: $\\log_2 2 = 1$ and $\\log_2 1 = 0$",
        "Use Cases": "Simplifying logarithmic expressions, solving equations"
      },
      category: "Logarithm Laws"
    },




    {
      name: "Binomial Theorem",
      formula: "$(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k}y^k = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\binom{n}{2}x^{n-2}y^2 + ... + \\binom{n}{n}y^n$",
      fields: {
        "Explanation": "The binomial theorem provides a systematic way to expand powers of binomial expressions. It shows how to write the expansion as a sum of terms involving combinations and powers of the variables. This fundamental theorem connects combinatorics with algebra, showing how the coefficients in the expansion relate to combinations. It's essential in probability theory, algebra, and calculus, particularly in series expansions and approximations.",
        "$\\binom{n}{k}$": "Binomial coefficient representing number of ways to choose k items from n items",
        "$n$": "Power of the binomial expression",
        "$k$": "Index of summation (ranges from 0 to n)",
        "$x, y$": "Variables in the binomial",
        "$\\sum_{k=0}^n$": "Sum of terms from k = 0 to k = n",
        "Example": "For $(x + y)^2 = \\binom{2}{0}x^2 + \\binom{2}{1}xy + \\binom{2}{2}y^2 = x^2 + 2xy + y^2$",
        "Use Cases": "Polynomial expansion, probability calculations"
      },
      category: "Binomial Rules"
    },
    {
      name: "Binomial Coefficient Formula",
      formula: "$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}, \\; n,k \\in \\mathbb{N}_0, \\; k \\leq n$",
      fields: {
        "Explanation": "This formula calculates the number of ways to choose k items from n items without regard to order. It's fundamental in combinatorics and probability theory. The formula represents the coefficient of each term in the binomial expansion and appears in many combinatorial problems. It's also known as 'n choose k' and forms the basis for Pascal's Triangle.",
        "$\\binom{n}{k}$": "Binomial coefficient (n choose k)",
        "$n!$": "Factorial of n",
        "$k!$": "Factorial of k",
        "$(n-k)!$": "Factorial of (n-k)",
        "$\\mathbb{N}_0$": "Set of natural numbers including zero",
        "$\\in$": "Belongs to (set membership symbol)",
        "Example": "For $\\binom{4}{2} = \\frac{4!}{2!(4-2)!} = \\frac{24}{2 \\cdot 2} = 6$",
        "Use Cases": "Calculating combinations, probability distributions"
      },
      category: "Binomial Rules"
    },
    {
      name: "Square of Binomial",
      formula: "$(x + y)^2 = x^2 + 2xy + y^2$",
      fields: {
        "Explanation": "This identity shows the expansion of a binomial squared. It's a special case of the binomial theorem for n=2. The formula demonstrates how the square of a sum produces three terms: squares of each term plus twice their product. This pattern is fundamental in algebra and appears frequently in factoring and completing the square.",
        "$x, y$": "Variables in the binomial",
        "$2$": "Power of the binomial",
        "$2xy$": "Middle term (twice the product)",
        "Example": "For $(a + 3)^2 = a^2 + 6a + 9$",
        "Use Cases": "Completing the square, area calculations"
      },
      category: "Binomial Rules"
    },
    {
      name: "Square of Difference",
      formula: "$(x - y)^2 = x^2 - 2xy + y^2$",
      fields: {
        "Explanation": "This identity shows the expansion of a difference squared. It follows the same pattern as the square of a sum, but with the middle term negative. Understanding this pattern is crucial for factoring quadratic expressions and completing the square. The formula emphasizes how squaring a difference produces a similar structure to squaring a sum.",
        "$x, y$": "Variables in the binomial",
        "$2$": "Power of the binomial",
        "$-2xy$": "Middle term (negative twice the product)",
        "Example": "For $(a - 3)^2 = a^2 - 6a + 9$",
        "Use Cases": "Factoring quadratic expressions, distance calculations"
      },
      category: "Binomial Rules"
    },
    {
      name: "Product of Sum and Difference",
      formula: "$(x + y)(x - y) = x^2 - y^2$",
      fields: {
        "Explanation": "This identity demonstrates that the product of a sum and difference of the same terms equals the difference of their squares. It's a fundamental pattern in algebra that enables factoring of difference of squares expressions. The formula shows how the middle terms cancel out, leaving only the squared terms with opposite signs.",
        "$x, y$": "Variables in the expression",
        "$x^2$": "Square of first term",
        "$y^2$": "Square of second term",
        "Example": "For $(a + 3)(a - 3) = a^2 - 9$",
        "Use Cases": "Factoring difference of squares, simplifying algebraic expressions"
      },
      category: "Binomial Rules"
    },
    {
      name: "Cube of Binomial",
      formula: "$(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$",
      fields: {
        "Explanation": "This identity shows the expansion of a binomial cubed. It's a special case of the binomial theorem for n=3. The coefficients follow the third row of Pascal's triangle, and the powers of x decrease while powers of y increase in each term. This pattern is useful in understanding higher-degree polynomial expansions.",
        "$x, y$": "Variables in the binomial",
        "$3$": "Power of the binomial",
        "$3x^2y, 3xy^2$": "Middle terms with coefficient 3",
        "Example": "For $(a + 2)^3 = a^3 + 6a^2 + 12a + 8$",
        "Use Cases": "Volume calculations, polynomial expansions"
      },
      category: "Binomial Rules"
    },
    {
      name: "Cube of Difference",
      formula: "$(x - y)^3 = x^3 - 3x^2y + 3xy^2 - y^3$",
      fields: {
        "Explanation": "This identity shows the expansion of a difference cubed. It follows the same pattern as the cube of a sum, but with alternating signs. The coefficients are the same as in the cube of a sum, but the signs alternate following the pattern of odd powers. Understanding this pattern helps in factoring and expanding cubic expressions.",
        "$x, y$": "Variables in the binomial",
        "$3$": "Power of the binomial",
        "$-3x^2y, 3xy^2$": "Middle terms with alternating signs",
        "Example": "For $(a - 2)^3 = a^3 - 6a^2 + 12a - 8$",
        "Use Cases": "Polynomial expansions, volume differences"
      },
      category: "Binomial Rules"
    }
];

export default algebraFormulasList;