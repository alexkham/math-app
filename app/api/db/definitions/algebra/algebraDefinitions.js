const algebraTermsList = [
    {
      name: "Square Root",
      formula: "A value that, when multiplied by itself, gives the original number.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Cube Root",
      formula: "A value that, when used in a multiplication three times, equals the original number.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Radical Symbol",
      formula: "The symbol used to represent roots. For cube roots or higher, it includes an index.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Radicand",
      formula: "The number or expression inside the radical sign.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Index (or Degree)",
      formula: "The small number indicating the degree of the root, written above and to the left of the radical.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Principal Root",
      formula: "The non-negative root of a number.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Perfect Square",
      formula: "A number that is the square of an integer.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Perfect Cube",
      formula: "A number that is the cube of an integer.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Nth Root",
      formula: "A number that, when raised to the nth power, equals a given number.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Radical Expression",
      formula: "An expression involving a radical.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Simplifying Radicals",
      formula: "The process of expressing a radical in its simplest form.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Nested Radicals",
      formula: "Radicals within radicals.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Surd",
      formula: "A radical expression that cannot be simplified into a rational number.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Radical Equation",
      formula: "An equation where the variable is under a radical.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Fractional Exponents",
      formula: "Roots expressed as exponents.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Rationalizing the Denominator",
      formula: "The process of removing a radical from a denominator.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Irrational Root",
      formula: "A root that cannot be expressed as a fraction.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Root Approximation",
      formula: "Techniques to estimate roots when exact calculation is difficult.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Conjugate Pair",
      formula: "Used in rationalizing denominators, especially with complex radicals.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Logarithmic Connection",
      formula: "Relationship between roots and logarithms.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Higher-Order Roots",
      formula: "Generalization of square and cube roots.",
      fields: [],
      category: "Roots"
    },
    {
      name: "Imaginary Root",
      formula: "Roots of negative numbers in the real number system, represented using i.",
      fields: [],
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
  