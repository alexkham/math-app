const algebraTermsList = [
  {
    name: "Square Root",
    formula: "For a number n, its square root is x where x² = n. Denoted as $\\sqrt{n}$ or $n^{1/2}$",
    fields: {
      "properties": `
      - Two values: positive and negative
   - Real only if n ≥ 0
   - (√n)² = n for n ≥ 0
   - √(a·b) = √a·√b
   - √(a/b) = √a/√b for b > 0`,
      "examples": `Common square roots:
   √4 = ±2
   √9 = ±3
   √2 ≈ 1.4142 (irrational)
   √0 = 0
   √(-1) = i (imaginary)`
    },
    category: "Roots"
   },
   {
    name: "Cube Root",
    formula: "For a number n, its cube root is x where x³ = n. Denoted as $\\sqrt[3]{n}$ or $n^{1/3}$",
    fields: {
      "properties": `
      - Only one real value
  - Exists for all real numbers
  - (∛n)³ = n
  - ∛(a·b) = ∛a·∛b
  - ∛(a³) = a`,
      "examples": `Common cube roots:
  ∛8 = 2
  ∛27 = 3
  ∛(-8) = -2
  ∛1 = 1
  ∛0 = 0`
    },
    category: "Roots"
  },
  {
    name: "Radical Symbol",
    formula: "√ for square root, $\\sqrt[n]{x}$ for nth root where n is the index and x is the radicand",
    fields: {
      "properties": `
      - Index defaults to 2 if omitted
  - Index n means nth root
  - Radicand is expression under radical
  - Can be nested (compound radicals)`,
      "examples": `Different radical notations:
  √x = square root
  ∛x = cube root
  $\\sqrt[4]{x}$ = fourth root
  $\\sqrt[n]{x}$ = nth root`,
      "rules": "Index n must be positive integer ≥ 2"
    },
    category: "Roots"
  },
  {
    name: "Radicand",
    formula: "The expression x under the radical sign in $\\sqrt[n]{x}$. The value we're finding the root of",
    fields: {
      "properties": `
      - Can be any real number for odd roots
   - Must be non-negative for even roots
   - Can be variable expression
   - Can contain other radicals`,
      "examples": `In these expressions, radicand is:
   √16: 16
   ∛(-27): -27
   $\\sqrt{x+2}$: x+2
   $\\sqrt[4]{81}$: 81`
    },
    category: "Roots"
   },
   {
    name: "Index (or Degree)",
    formula: "The value n in $\\sqrt[n]{x}$ indicating which root to take (square, cube, fourth, etc)",
    fields: {
      "properties": `
      - Must be positive integer ≥ 2
  - Determines number of roots
  - Even index: requires non-negative radicand
  - Odd index: allows negative radicand`,
      "examples": `Common indices:
  2 (√): square root
  3 (∛): cube root
  4: fourth root
  n: nth root`
    },
    category: "Roots"
  },
  {
    name: "Principal Root",
    formula: "For an even root, the non-negative root out of all possible values. For odd roots, the real root",
    fields: {
      "properties": `
      - Always unique
  - Used by default for radical symbol
  - Non-negative for even roots
  - Same sign as radicand for odd roots`,
      "examples": `Principal roots:
  √4 = 2 (not -2)
  ∛(-8) = -2
  $\\sqrt[4]{16}$ = 2
  $\\sqrt{x^2}$ = |x|`
    },
    category: "Roots"
  },
  {
    name: "Perfect Square",
    formula: "A number n = k² where k is an integer. Also called square number",
    fields: {
      "properties": `
      - Always non-negative
   - Integer square root
   - Square ends in 0,1,4,5,6,9
   - Distance between consecutive grows by 2`,
      "examples": `First perfect squares:
   0 = 0²
   1 = 1²
   4 = 2²
   9 = 3²
   16 = 4²
   25 = 5²`
    },
    category: "Roots"
   },
   {
    name: "Perfect Cube",
    formula: "A number n = k³ where k is an integer. Also called cubic number",
    fields: {
      "properties": `- Can be negative
  - Integer cube root
  - Alternates between odd/even
  - Growing gaps between consecutive`,
      "examples": `First perfect cubes:
  -8 = (-2)³
  -1 = (-1)³
  0 = 0³
  1 = 1³
  8 = 2³
  27 = 3³`
    },
    category: "Roots"
  },
  {
    name: "Nth Root",
    formula: "Value x where $x^n = a$, denoted as $\\sqrt[n]{a}$ or $a^{1/n}$",
    fields: {
      "properties": `
      - n must be positive integer
  - Even n requires a ≥ 0
  - Odd n allows any real a
  - Principal root is default`,
      "examples": `Common nth roots:
  $\\sqrt[4]{16} = 2$
  $\\sqrt[5]{32} = 2$
  $\\sqrt[6]{64} = 2$`
    },
    category: "Roots"
  },
  {
    name: "Radical Expression",
    formula: "Mathematical expression containing one or more radicals $\\sqrt[n]{x}$. Can include coefficients, variables, and operations",
    fields: {
      "properties": `
      - Contains at least one radical
   - May have coefficients
   - Can include variables
   - Can be simplified`,
      "examples": `Radical expressions:
   $2\\sqrt{3}$
   $\\sqrt{x} + \\sqrt{y}$
   $3\\sqrt[3]{2x}$
   $\\frac{\\sqrt{8}}{\\sqrt{2}}$`
    },
    category: "Roots"
   },
   {
    name: "Simplifying Radicals",
    formula: "Converting radical to equivalent form with smallest possible radicand and rational coefficients outside",
    fields: {
      "properties": `
      - Factor radicand
  - Remove perfect nth powers
  - Combine like radicals
  - Rationalize denominators`,
      "examples": `Steps to simplify:
  $\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4}\\sqrt{3} = 2\\sqrt{3}$
  $\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = 3\\sqrt[3]{2}$`
    },
    category: "Roots"
  },
  {
    name: "Nested Radicals",
    formula: "Expression containing radicals inside other radicals: $\\sqrt{a + \\sqrt{b}}$",
    fields: {
      "properties": `
      - Multiple radical layers
  - Can often be simplified
  - Harder to manipulate
  - Special denesting methods`,
      "examples": `Nested forms:
  $\\sqrt{5 + \\sqrt{24}}$
  $\\sqrt{3 + \\sqrt{1 + \\sqrt{2}}}$
  $\\sqrt[3]{2 + \\sqrt{5}}$`
    },
    category: "Roots"
  },
  {
    name: "Surd",
    formula: "An irrational root of a rational number. A radical that cannot be simplified to a rational number",
    fields: {
      "properties": `
      - Irrational number
   - Cannot be further simplified
   - Root of rational number
   - Contains no imaginary parts`,
      "examples": `Common surds:
   $\\sqrt{2}$
   $\\sqrt{3}$
   $\\sqrt[3]{5}$
   $2\\sqrt{7}$ (mixed surd)`
    },
    category: "Roots"
   },
   {
    name: "Radical Equation",
    formula: "Equation containing variable(s) under radical sign: $\\sqrt{x} = a$ or $\\sqrt{f(x)} = g(x)$",
    fields: {
      "properties": `
      - Check for extraneous solutions
  - Square both sides carefully
  - Domain restrictions apply
  - May have multiple steps`,
      "examples": `Solving $\\sqrt{x-1} = 2$:
  $\\sqrt{x-1} = 2$
  $(\\sqrt{x-1})^2 = 2^2$
  $x-1 = 4$
  $x = 5$`
    },
    category: "Roots"
  },
  {
    name: "Fractional Exponents",
    formula: "Root expressions written as powers: $x^{\\frac{1}{n}} = \\sqrt[n]{x}$ and $x^{\\frac{m}{n}} = (\\sqrt[n]{x})^m$",
    fields: {
      "properties": `
      - Numerator = power
  - Denominator = root
  - Follow exponent rules
  - Equivalent to radicals`,
      "examples": `$x^{\\frac{1}{2}} = \\sqrt{x}$
  $x^{\\frac{1}{3}} = \\sqrt[3]{x}$
  $x^{\\frac{2}{3}} = (\\sqrt[3]{x})^2$`
    },
    category: "Roots"
  },
  {
    name: "Rationalizing the Denominator",
    formula: "Multiplying numerator and denominator by radical term to eliminate radicals in denominator: $\\frac{a}{\\sqrt{b}} \\cdot \\frac{\\sqrt{b}}{\\sqrt{b}} = \\frac{a\\sqrt{b}}{b}$",
    fields: {
      "methods": `
      - Single radical: multiply by itself
   - Binomial with radical: multiply by conjugate
   - Higher order roots: use appropriate root`,
      "examples": `$\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$
   
   $\\frac{1}{\\sqrt{3} + \\sqrt{2}} = \\frac{\\sqrt{3} - \\sqrt{2}}{(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})}$`
    },
    category: "Roots"
   },
   {
    name: "Irrational Root",
    formula: "A root that yields an irrational number - cannot be expressed as p/q where p,q are integers, q≠0",
    fields: {
      "properties": `
      - Non-terminating, non-repeating decimal
  - Cannot be written as ratio of integers
  - Often proved irrational by contradiction`,
      "examples": `Common irrational roots:
  $\\sqrt{2} ≈ 1.4142135...$
  $\\sqrt{3} ≈ 1.7320508...$
  $\\sqrt[3]{2} ≈ 1.2599210...$`
    },
    category: "Roots"
  },
  {
    name: "Root Approximation",
    formula: "Methods to find approximate values of roots: Newton's method: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$",
    fields: {
      "methods": `
      - Newton's method
  - Binary search
  - Calculator estimation
  - Numerical algorithms`,
      "examples": `$\\sqrt{2}$ approximation:
  1.4 → 1.414 → 1.4142 → 1.41421
  
  Newton's method for $\\sqrt{a}$:
  $x_{n+1} = \\frac{1}{2}(x_n + \\frac{a}{x_n})$`
    },
    category: "Roots"
  },
  {
    name: "Conjugate Pair",
    formula: "For expression a + √b, its conjugate is a - √b. Product is a² - b. Used to rationalize denominators",
    fields: {
      "properties": `
      - Product removes radicals
   - Sum × difference formula
   - Preserves value when multiplying num/denom`,
      "examples": `Conjugate pairs:
   $a + \\sqrt{b}$ and $a - \\sqrt{b}$
   $\\sqrt{2} + \\sqrt{3}$ and $\\sqrt{2} - \\sqrt{3}$
   $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$`
    },
    category: "Roots"
   },
   {
    name: "Logarithmic Connection",
    formula: "$\\sqrt[n]{a} = e^{\\frac{\\ln(a)}{n}}$ and $\\sqrt[n]{a} = b \\iff a = b^n$",
    fields: {
      "properties": `
      - Roots as exponentials
  - Natural log connection
  - Change of base formula
  - Solving using logs`,
      "examples": `$\\sqrt{x} = e^{\\frac{\\ln(x)}{2}}$
  $\\sqrt[3]{x} = e^{\\frac{\\ln(x)}{3}}$
  $\\ln(\\sqrt{x}) = \\frac{1}{2}\\ln(x)$`
    },
    category: "Roots"
  },
  {
    name: "Higher-Order Roots",
    formula: "nth root where n > 3: $\\sqrt[n]{a}$ is value x where x^n = a",
    fields: {
      "properties": `
      - n can be any positive integer
  - Even n requires a ≥ 0
  - Odd n allows any real a
  - Multiple complex roots`,
      "examples": `Fourth root: $\\sqrt[4]{16} = 2$
  Fifth root: $\\sqrt[5]{32} = 2$
  General: $\\sqrt[n]{a^n} = |a|$ for even n`
    },
    category: "Roots"
  },
  {
    name: "Imaginary Root",
    formula: "For negative real number -a, its square root is i√a where i = √(-1). Higher even roots also yield imaginary results",
    fields: {
      "properties": `
      - Occur when taking even roots of negatives
   - Involve imaginary unit i
   - Come in conjugate pairs
   - Real when n is odd`,
      "examples": `$\\sqrt{-4} = 2i$
   $\\sqrt{-9} = 3i$
   $\\sqrt[4]{-16} = \\sqrt{2}(1 + i)$
   
   Powers of i:
   $i^2 = -1$
   $i^3 = -i$
   $i^4 = 1$`
    },
    category: "Roots"
   },






   
        {
          name: "Logarithm",
          formula: "The inverse operation of exponentiation, determining the power to which a base must be raised to obtain a given number.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Base",
          formula: "The number that is repeatedly multiplied in an exponential or logarithmic expression.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Exponent",
          formula: "The power to which the base is raised in an exponential or logarithmic expression.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Natural Logarithm",
          formula: "A logarithm with the base e, where e is an irrational constant approximately equal to 2.718.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Common Logarithm",
          formula: "A logarithm with base 10.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Binary Logarithm",
          formula: "A logarithm with base 2.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Antilogarithm",
          formula: "The inverse function of the logarithm, converting a logarithmic result back to its original number.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Characteristic",
          formula: "The integer part of a logarithm in scientific notation, indicating the order of magnitude of a number.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Mantissa",
          formula: "The fractional part of a logarithm in scientific notation, representing the precise value of a number.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Function",
          formula: "A function of the form f(x) = log_b(x), where b > 0 and b ≠ 1.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Complex Logarithm",
          formula: "A logarithm defined for complex numbers, often with multiple branches.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Discrete Logarithm",
          formula: "A logarithm defined in the context of modular arithmetic, determining the power of a base modulo a number.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Scale",
          formula: "A scale where equal intervals correspond to multiplication by a constant factor, used to represent a wide range of values compactly.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Exponential Form",
          formula: "The representation of a logarithm as b^y = x, where log_b(x) = y.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Identity",
          formula: "Fundamental rules governing logarithms, such as product, quotient, and power rules.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Expression",
          formula: "An algebraic expression that contains a logarithm.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Equation",
          formula: "An equation that includes a logarithm with a variable.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Inequality",
          formula: "An inequality involving logarithmic expressions.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Asymptote",
          formula: "A line that a logarithmic function approaches but never reaches as the input grows infinitely large or small.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Graph of a Logarithmic Function",
          formula: "The visual representation of a logarithmic function, typically featuring a vertical asymptote and increasing behavior.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Base-Change Rule",
          formula: "A formula that converts a logarithm from one base to another, log_a(b) = log_c(b) / log_c(a).",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Growth",
          formula: "A type of growth that increases slowly and proportionally to the logarithm of a variable.",
          fields: [],
          category: "Logarithms"
        },
        {
          name: "Logarithmic Transformation",
          formula: "The process of applying a logarithm to data or variables to simplify their relationships or distributions.",
          fields: [],
          category: "Logarithms"
        },




     
          {
            name: "Exponent",
            formula: "The power to which a base is raised in a mathematical expression.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Base",
            formula: "The number that is raised to the power of the exponent.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Power",
            formula: "The result of raising a base to an exponent.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Function",
            formula: "A function of the form f(x) = a^x, where a > 0 and a ≠ 1.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Growth",
            formula: "A process that increases proportionally to its current value, modeled by an exponential function.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Decay",
            formula: "A process that decreases proportionally to its current value, modeled by an exponential function.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Scientific Notation",
            formula: "A method of writing numbers using powers of 10.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Negative Exponent",
            formula: "Indicates the reciprocal of the base raised to the corresponding positive exponent (a^(-n) = 1/a^n).",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Zero Exponent",
            formula: "Any nonzero base raised to the power of zero equals 1 (a^0 = 1).",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Fractional Exponent",
            formula: "Represents a root, where a^(1/n) = √[n]{a}.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Integer Exponent",
            formula: "An exponent that is a whole number.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Equation",
            formula: "An equation in which variables appear in exponents.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Inequality",
            formula: "An inequality involving exponential expressions.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Series",
            formula: "A mathematical expansion of e^x as a sum of terms.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponentiation",
            formula: "The mathematical operation of raising one quantity to the power of another.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Laws of Exponents",
            formula: "Rules governing exponentiation, such as the product, quotient, and power rules.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Curve",
            formula: "The graph of an exponential function, showing rapid increase or decrease.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Natural Exponential Function",
            formula: "The exponential function with base e, f(x) = e^x.",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Compound Interest Formula",
            formula: "A financial formula based on exponential growth, A = P(1 + r/n)^(nt).",
            fields: [],
            category: "Exponents"
          },
          {
            name: "Exponential Notation",
            formula: "A shorthand way to write repeated multiplication of the same factor.",
            fields: [],
            category: "Exponents"
          }
        
        
       
        
     
      
    
  ];
  
  export default algebraTermsList;
  