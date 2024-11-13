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
      formula: "$x^0 = 1$, where $x \\neq 0$",
      fields: {
        "Explanation": "This rule defines that any non-zero number raised to the power of zero equals one. It's a foundational concept that follows logically from the quotient rule of exponents. While seemingly simple, this rule is crucial in algebra and forms the basis for understanding more complex exponential relationships. It's particularly important in polynomial evaluation and series expansions. The rule fills a critical gap in exponent operations, providing a consistent framework for dealing with zero powers while maintaining the coherence of exponential arithmetic.",
        "$x$": "Base number or variable (non-zero)",
        "$0$": "Exponent",
        "$1$": "Result for any non-zero base",
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
    }
];

export default algebraFormulasList;