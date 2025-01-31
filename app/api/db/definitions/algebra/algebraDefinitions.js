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
    formula: "For positive numbers $b ≠ 1$ and $x > 0$, $log_b(x) = y$ means $b^y = x$. Written as: $\\log_b(x) = y \\iff b^y = x$",
    fields: {
      "properties": `- Domain: x > 0
   - Base $b > 0$ and $b ≠ 1$ 
   - One-to-one function
   - Inverse of exponential`,
      "examples": `$\\log_2(8) = 3$ because $2^3 = 8$
   $\\log_3(27) = 3$ because $3^3 = 27$
   $\\log_{10}(100) = 2$ because $10^2 = 100$`
    },
    category: "Logarithms"
   },
   {
    name: "Base",
    formula: "The positive number b ≠ 1 in logarithmic expression $\\log_b(x)$ or exponential expression $b^x$",
    fields: {
      "properties": `
      - Must be positive
  - Cannot equal 1
  - Common bases: 10, e, 2
  - Determines growth rate`,
      "examples": `Common bases:
  $\\log_{10}(x)$ (common log)
  $\\log_e(x)$ (natural log, ln)
  $\\log_2(x)$ (binary log)`
    },
    category: "Logarithms"
  },
  {
    name: "Exponent",
    formula: "The power y in exponential form $b^y$ or the value of logarithm $\\log_b(x)$ where $b^y = x$",
    fields: {
      "properties": `
      - Can be any real number
  - Results in logarithm value
  - Determines output level
  - Key in exponential growth`,
      "examples": `In $2^3 = 8$:
  Exponent is 3
  $\\log_2(8) = 3$
  
  In $10^x = 1000$:
  $x = \\log_{10}(1000) = 3$`
    },
    category: "Logarithms"
  },
  {
    name: "Natural Logarithm",
    formula: "Logarithm with base $e (≈ 2.71828...)$, written as $ln(x)$ or $\\log_e(x)$. Inverse of exponential function $e^x$",
    fields: {
      "properties": `- Most common in calculus
   - Used in continuous growth
   - Base e is irrational
   - Standard notation $ln(x)$`,
      "examples": `
      $\\ln(e) = 1$
   $\\ln(e^2) = 2$
   $\\ln(1) = 0$
   $\\ln(e^x) = x$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Common Logarithm",
    formula: "Logarithm with base 10, written as $log(x)$ or $\\log_{10}(x)$. Used for decimal representations",
    fields: {
      "properties": `- Used in scientific notation
   - Counts decimal digits
   - Often written without base
   - Standard notation $log(x)$`,
      "examples": `$\\log(100) = 2$
   $\\log(1000) = 3$
   $\\log(10^n) = n$
   $\\log(0.01) = -2$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Binary Logarithm",
    formula: "Logarithm with base 2, written as $\\log_2(x)$. Used in computer science and information theory",
    fields: {
      "properties": `- Used in algorithm analysis
   - Measures bits needed
   - Common in computing
   - Standard notation $\\log_2(x)$`,
      "examples": `$\\log_2(8) = 3$
   $\\log_2(16) = 4$
   $\\log_2(2^n) = n$
   $\\log_2(1024) = 10$`
    },
    category: "Logarithms"
   },
   {
    name: "Antilogarithm",
    formula: "The inverse logarithm function: if y = $\\log_b(x)$, then $antilog_b(y) = x = b^y$",
    fields: {
      "properties": `- Inverse of logarithm
   - Same as exponential function
   - Returns original number
   - Preserves base`,
      "examples": `If $\\log(100) = 2$
   then antilog(2) = 100
   
   If $\\ln(x) = 3$
   then antiln(3) = e³
   
   For $\\log_2(8) = 3$:
   antilog₂(3) = 2³ = 8`
    },
    category: "Logarithms"
   },
   
   {
    name: "Characteristic",
    formula: "The integer part n of logarithm where $\\log_{10}(x) = n + d$ and $0 ≤ d < 1$",
    fields: {
      "properties": `- Integer part of logarithm
   - Indicates magnitude
   - Can be negative
   - For base 10 equals exponent in scientific notation`,
      "examples": `For $\\log(234) = 2.369$:
   Characteristic = 2
   
   For $\\log(0.0234) = -1.631$:
   Characteristic = -2`
    },
    category: "Logarithms"
   },
   
   {
    name: "Mantissa",
    formula: "The decimal part d of logarithm where $\\log_{10}(x) = n + d$ and $0 ≤ d < 1$",
    fields: {
      "properties": `- Decimal part of logarithm
   - Always positive
   - Independent of decimal point position
   - Used in log tables`,
      "examples": `For $\\log(234) = 2.369$:
   Mantissa = 0.369
   
   For $\\log(0.0234) = -1.631$:
   Mantissa = 0.369`
    },
    category: "Logarithms"
   },
   {
    name: "Logarithmic Function",
    formula: "Function $f(x) = \\log_b(x)$ where $b > 0, b ≠ 1$. Inverse of exponential function $g(x) = b^x$",
    fields: {
      "properties": `- Domain: $x > 0$
   - Range: all real numbers
   - Strictly increasing if $b > 1$
   - Strictly decreasing if $0 < b < 1$`,
      "examples": `Common forms:
   $f(x) = \\ln(x)$
   $f(x) = \\log_{10}(x)$
   $f(x) = \\log_2(x)$`,
      "graph": "Characteristic curved shape crossing y-axis at (1,0)"
    },
    category: "Logarithms"
   },
   
   {
    name: "Complex Logarithm",
    formula: "For complex $z = r(cos θ + i sin θ)$, $\\ln(z) = \\ln(r) + i(θ + 2πn)$ where n is integer",
    fields: {
      "properties": `- Multivalued function
   - Has infinite branches
   - Principal value when $n = 0$
   - Defined except at $z = 0$`,
      "examples": `$\\ln(-1) = πi + 2πni$
   $\\ln(i) = \\frac{πi}{2} + 2πni$
   Principal value:
   $\\ln(-1) = πi$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Discrete Logarithm",
    formula: "For integers $a, b, m$, find $x$ where $a^x ≡ b \\pmod{m}$. Written as $\\log_a(b) \\pmod{m}$",
    fields: {
      "properties": `- Used in cryptography
   - Computationally difficult
   - May not exist
   - Modular arithmetic based`,
      "examples": `In mod 7:
   $2^3 ≡ 1 \\pmod{7}$
   so $\\log_2(1) ≡ 3 \\pmod{7}$
   
   $3^x ≡ 4 \\pmod{7}$
   $x = \\log_3(4) \\pmod{7}$`
    },
    category: "Logarithms"
   },
   {
    name: "Logarithmic Scale",
    formula: "Scale where values are spaced by powers of base b: positions proportional to $\\log_b(x)$ rather than x",
    fields: {
      "properties": `- Equal ratios = equal distances
   - Compresses large ranges
   - Often uses base 10
   - Shows percentage changes`,
      "examples": `Common scales:
   pH scale (base 10)
   Richter scale (base 10)
   Decibels (base 10)
   Musical octaves (base 2)`,
      "applications": "Scientific notation, sound intensity, earthquake magnitude"
    },
    category: "Logarithms"
   },
   
   {
    name: "Exponential Form",
    formula: "Equivalent expression of $\\log_b(x) = y$ as $b^y = x$, showing inverse relationship between logarithms and exponents",
    fields: {
      "properties": `- Shows inverse relationship
   - Used for solving equations
   - Connects exp and log
   - Base remains constant`,
      "examples": `$\\log_2(8) = 3 \\iff 2^3 = 8$
   $\\ln(x) = 4 \\iff e^4 = x$
   $\\log_{10}(1000) = 3 \\iff 10^3 = 1000$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Logarithmic Identity",
    formula: "Fundamental rules for manipulating logarithms with same base b:",
    fields: {
      "properties": `Product rule: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$
   Quotient rule: $\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)$
   Power rule: $\\log_b(x^n) = n\\log_b(x)$
   Change of base: $\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)}$`,
      "examples": `$\\log(30) = \\log(2 \\cdot 15) = \\log(2) + \\log(15)$
   $\\log_2(\\frac{8}{2}) = \\log_2(8) - \\log_2(2) = 3 - 1 = 2$
   $\\log(x^3) = 3\\log(x)$`
    },
    category: "Logarithms"
   },
   {
    name: "Logarithmic Expression",
    formula: "Mathematical expression containing one or more logarithms, may include variables and other operations",
    fields: {
      "properties": `- Contains at least one logarithm
   - May have variables
   - Can be simplified using log rules
   - Domain restrictions apply`,
      "examples": `$2\\ln(x) + 3$
   $\\log(x^2 + 1)$
   $\\log_2(x) + \\log_2(y)$
   $\\frac{\\ln(x)}{\\ln(2)}$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Logarithmic Equation",
    formula: "Equation containing logarithmic expressions that must be solved for variable(s)",
    fields: {
      "properties": `- Check domain restrictions
   - Use log properties to simplify
   - Convert to exponential form
   - Check for extraneous solutions`,
      "examples": `Solving $\\ln(x) = 2$:
   $\\ln(x) = 2$
   $e^{\\ln(x)} = e^2$
   $x = e^2$
   
   Solving $\\log_2(x+1) = 3$:
   $2^{\\log_2(x+1)} = 2^3$
   $x + 1 = 8$
   $x = 7$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Logarithmic Inequality",
    formula: "Inequality containing logarithmic expressions to be solved: $\\log_b(x) < k$ or $\\log_b(f(x)) > \\log_b(g(x))$",
    fields: {
      "properties": `
      - Consider base when solving
   - Domain restrictions crucial
   - Direction changes if base < 1
   - Convert to exponential form`,
      "examples": `Solving $\\ln(x) > 2$:
   $\\ln(x) > 2$
   $e^{\\ln(x)} > e^2$
   $x > e^2$
   
   $\\log_2(x) < 3$:
   $x < 2^3$
   $x < 8$`
    },
    category: "Logarithms"
   },
   {
    name: "Asymptote",
    formula: "For logarithmic function $f(x) = \\log_b(x)$, vertical asymptote at $x = 0$",
    fields: {
      "properties": `
      - Vertical: x = 0
   - Function never crosses
   - Defines domain boundary
   - Different bases, same asymptote`,
      "examples": `For $y = \\ln(x)$:
   - Vertical asymptote: x = 0
   - As x → 0⁺, y → -∞
   - As x → ∞, y grows slowly`
    },
    category: "Logarithms"
   },
   
   {
    name: "Graph of a Logarithmic Function",
    formula: "Plot of $y = \\log_b(x)$ showing characteristic shape with vertical asymptote and continuous growth",
    fields: {
      "properties": `
      - Domain: x > 0
   - Vertical asymptote at x = 0
   - Passes through (1,0)
   - Continuous and increasing for b > 1`,
      "key points": `- (1,0) always
   - (b,1) where b is base
   - ($\\frac{1}{b}$,-1) where b is base`
    },
    category: "Logarithms"
   },
   
   {
    name: "Base-Change Rule",
    formula: "$\\log_a(x) = \\frac{\\log_c(x)}{\\log_c(a)}$ for any base $c > 0, c ≠ 1$",
    fields: {
      "properties": `
      - Valid for any positive base
   - Commonly used with base e or 10
   - Preserves function value
   - Useful for calculations`,
      "examples": `$\\log_2(x) = \\frac{\\ln(x)}{\\ln(2)}$
   $\\log_3(x) = \\frac{\\log_{10}(x)}{\\log_{10}(3)}$`
    },
    category: "Logarithms"
   },
   
   {
    name: "Logarithmic Growth",
    formula: "Growth pattern where variable increases by additive constant when input is multiplied by constant: $f(cx) = f(x) + k$",
    fields: {
      "properties": `- Slower than polynomial
   - Inverse of exponential
   - Common in natural processes
   - Scale-invariant growth`,
      "examples": `- Computing complexity O(log n)
   - pH scale
   - Earthquake magnitude
   - Sound intensity (decibels)`
    },
    category: "Logarithms"
   },
   
   {
    name: "Logarithmic Transformation",
    formula: "Converting data by taking logarithm: $y = \\log_b(x)$ to linearize relationships or normalize distributions",
    fields: {
      "properties": `
      - Compresses large ranges
   - Normalizes skewed data
   - Linearizes exponential relationships
   - Preserves order`,
      "applications": `- Statistical analysis
   - Data visualization
   - Economic scales
   - Sound measurement`
    },
    category: "Logarithms"
   },



   
    {
      "name": "Polynomial",
      "formula": "An expression consisting of variables, coefficients, and non-negative integer exponents combined using arithmetic operations.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Coefficient",
      "formula": "A numerical factor that multiplies a variable in a polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Leading Coefficient",
      "formula": "The coefficient of the term with the highest degree in a polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Free Coefficient",
      "formula": "The constant term in a polynomial with no variable attached.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Degree",
      "formula": "The highest exponent of the variable in a polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Monic Polynomial",
      "formula": "A polynomial whose leading coefficient is 1.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Zero Polynomial",
      "formula": "A polynomial where all coefficients are zero.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Zero Function",
      "formula": "A function that always evaluates to zero for any input.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Undefined Degree",
      "formula": "The degree of the zero polynomial, which is not defined.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Minus Infinity Degree",
      "formula": "An informal term sometimes used to describe the degree of the zero polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Equation",
      "formula": "An equation that sets a polynomial equal to another expression, typically zero.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Addition",
      "formula": "The sum of two or more polynomials by adding corresponding terms.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Subtraction",
      "formula": "The difference of two polynomials by subtracting corresponding terms.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Multiplication",
      "formula": "The product of two polynomials by distributing terms.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Division",
      "formula": "The process of dividing one polynomial by another, yielding a quotient and remainder.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Dividend",
      "formula": "The polynomial being divided in a division operation.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Divisor",
      "formula": "The polynomial by which another polynomial is divided.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Quotient",
      "formula": "The result of polynomial division before considering the remainder.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Remainder",
      "formula": "The leftover polynomial after division that cannot be further divided by the divisor.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Rational Function",
      "formula": "A function expressed as the ratio of two polynomials.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Remainder Theorem",
      "formula": "A theorem stating that the remainder when a polynomial P(x) is divided by (x - a) is P(a).",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Root of a Polynomial",
      "formula": "A value of the variable that makes the polynomial equal to zero.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Sum of Coefficients Rule",
      "formula": "The sum of all coefficients of a polynomial is found by evaluating it at x = 1.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Factoring",
      "formula": "Expressing a polynomial as a product of simpler polynomials.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Quadratic Formula",
      "formula": "A formula used to find the roots of a quadratic polynomial.",
      "fields": [],
      "category": "Polynomials"
    }
  ,
  
    {
      "name": "Complex Roots",
      "formula": "Non-real solutions of a polynomial equation, often involving imaginary numbers.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Multiplicity of a Root",
      "formula": "The number of times a particular root appears in the factorization of a polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Fundamental Theorem of Algebra",
      "formula": "A theorem stating that every non-constant polynomial has at least one complex root.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Existence Theorem",
      "formula": "A principle ensuring the existence of at least one solution for a given polynomial equation.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Factorization",
      "formula": "The decomposition of a polynomial into a product of lower-degree polynomials.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Derivative",
      "formula": "The derivative of a polynomial function, obtained by differentiating each term.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Increased Root",
      "formula": "A root of a polynomial whose multiplicity is greater than one.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Linear Factorization",
      "formula": "Expressing a polynomial as a product of linear factors corresponding to its roots.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Educated Guess Theorem",
      "formula": "A strategy for guessing rational roots of polynomials using integer coefficients.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Integer Coefficients",
      "formula": "A polynomial where all coefficients are whole numbers.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Rational Root Theorem",
      "formula": "A theorem that provides a possible set of rational roots for a polynomial with integer coefficients.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Factorization Theorem",
      "formula": "A theorem stating that polynomials can be factored uniquely over specific number systems.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Long Division",
      "formula": "A division algorithm for polynomials similar to numerical long division.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Multiple Root",
      "formula": "A root of a polynomial that appears more than once.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Finite Field",
      "formula": "A mathematical field containing a finite number of elements.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Modular Arithmetic",
      "formula": "A system of arithmetic where numbers wrap around after reaching a fixed modulus.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Factorization in Finite Fields",
      "formula": "The process of breaking a polynomial into irreducible factors within a finite field.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Quadratic Residue",
      "formula": "A number that is a square modulo a given prime number.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Roots in Finite Fields",
      "formula": "The solutions to a polynomial equation within a finite field.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Fundamental Theorem of Algebra (Finite Fields)",
      "formula": "A theorem stating that a polynomial of degree n over a finite field has at most n roots in that field.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Direct Substitution Method",
      "formula": "A technique for solving polynomials by directly substituting values.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Quadratic Formula in Finite Fields",
      "formula": "A modified version of the quadratic formula adapted for finite fields.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Multiple Root in Finite Fields",
      "formula": "A root of a polynomial in a finite field that has higher multiplicity.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Vieta's Formulas",
      "formula": "A set of equations relating the coefficients of a polynomial to sums and products of its roots.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Sum of Roots",
      "formula": "The sum of the roots of a polynomial, given by Vieta’s formulas.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Product of Roots",
      "formula": "The product of the roots of a polynomial, also given by Vieta’s formulas.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Coefficient Comparison",
      "formula": "A method for finding unknown coefficients by equating polynomials.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Root Multiplicity",
      "formula": "The number of times a particular root appears in the factorization of a polynomial.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Expansion",
      "formula": "The process of expanding a factored polynomial into standard form.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Sigma Notation",
      "formula": "A compact way to represent summation, often used in polynomial expressions.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Polynomial Factorization Using Roots",
      "formula": "The process of factoring a polynomial using its known roots.",
      "fields": [],
      "category": "Polynomials"
    },
    {
      "name": "Quadratic and Higher-Degree Root Relations",
      "formula": "Relationships between the roots and coefficients of quadratic and higher-degree polynomials.",
      "fields": [],
      "category": "Polynomials"
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
  