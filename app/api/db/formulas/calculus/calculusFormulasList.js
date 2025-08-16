const calculusFormulasList = [
    {
      name: "Definition of a Limit",
      formula: "$\\lim_{x \\to a} f(x) = L$",
      fields: {
        "Explanation": "This means that as x gets super close to 'a', the function f(x) gets super close to 'L'. Think of it like f(x) is chasing L as x approaches a.",
        "$x \\to a$": "x is getting closer to the value 'a'",
        "$f(x)$": "The function we're interested in",
        "$L$": "The value that f(x) is approaching",
        "Example": "If $f(x) = 2x$, then $\\lim_{x \\to 3} f(x) = 6$ because as x gets close to 3, f(x) gets close to 6.",
        "Use Cases": "Understanding how functions behave near a specific point, even if they're not defined exactly at that point."
      },
      category: "Limits"
    },
    {
      name: "Limit Laws - Sum Rule",
      formula: "$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$",
      fields: {
        "Explanation": "You can split the limit of a sum into the sum of the limits. It's like handling each function separately and then adding the results.",
        "$f(x), g(x)$": "Functions we're adding together",
        "$\\lim_{x \\to a} f(x)$": "Limit of f(x) as x approaches a",
        "$\\lim_{x \\to a} g(x)$": "Limit of g(x) as x approaches a",
        "Example": "If $\\lim_{x \\to 2} f(x) = 5$ and $\\lim_{x \\to 2} g(x) = 3$, then $\\lim_{x \\to 2} [f(x) + g(x)] = 5 + 3 = 8$",
        "Use Cases": "Breaking down complex limits into simpler parts to make calculations easier."
      },
      category: "Limit Laws"
    },
    {
      name: "Limit Laws - Difference Rule",
      formula: "$\\lim_{x \\to a} [f(x) - g(x)] = \\lim_{x \\to a} f(x) - \\lim_{x \\to a} g(x)$",
      fields: {
        "Explanation": "Just like addition, you can split the limit over subtraction. Handle each part separately, then subtract the results.",
        "$f(x), g(x)$": "Functions we're subtracting",
        "$\\lim_{x \\to a} f(x)$": "Limit of f(x) as x approaches a",
        "$\\lim_{x \\to a} g(x)$": "Limit of g(x) as x approaches a",
        "Example": "If $\\lim_{x \\to 4} f(x) = 10$ and $\\lim_{x \\to 4} g(x) = 6$, then $\\lim_{x \\to 4} [f(x) - g(x)] = 10 - 6 = 4$",
        "Use Cases": "Simplifying limits involving subtraction."
      },
      category: "Limit Laws"
    },
    {
      name: "Limit Laws - Product Rule",
      formula: "$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\left(\\lim_{x \\to a} f(x)\\right) \\cdot \\left(\\lim_{x \\to a} g(x)\\right)$",
      fields: {
        "Explanation": "The limit of a product is the product of the limits. Calculate each limit separately, then multiply them.",
        "$f(x), g(x)$": "Functions we're multiplying",
        "$\\lim_{x \\to a} f(x)$": "Limit of f(x)",
        "$\\lim_{x \\to a} g(x)$": "Limit of g(x)",
        "Example": "If $\\lim_{x \\to 1} f(x) = 2$ and $\\lim_{x \\to 1} g(x) = 5$, then $\\lim_{x \\to 1} [f(x) \\cdot g(x)] = 2 \\cdot 5 = 10$",
        "Use Cases": "Breaking down complex multiplication within limits."
      },
      category: "Limit Laws"
    },
    {
      name: "Limit Laws - Quotient Rule",
      formula: "$\\lim_{x \\to a} \\left( \\frac{f(x)}{g(x)} \\right) = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}$, provided $\\lim_{x \\to a} g(x) \\ne 0$",
      fields: {
        "Explanation": "The limit of a fraction is the fraction of the limits, as long as you're not dividing by zero.",
        "$f(x)$": "Numerator function",
        "$g(x)$": "Denominator function",
        "$\\lim_{x \\to a} g(x) \\ne 0$": "Denominator's limit isn't zero",
        "Example": "If $\\lim_{x \\to 2} f(x) = 8$ and $\\lim_{x \\to 2} g(x) = 4$, then $\\lim_{x \\to 2} \\left( \\frac{f(x)}{g(x)} \\right) = \\frac{8}{4} = 2$",
        "Use Cases": "Simplifying limits involving division."
      },
      category: "Limit Laws"
    },
    {
      name: "Limit Laws - Constant Multiple Rule",
      formula: "$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$",
      fields: {
        "Explanation": "If you're multiplying a function by a constant, you can pull the constant out of the limit.",
        "$c$": "A constant number",
        "$f(x)$": "Function being multiplied",
        "Example": "If $c = 3$ and $\\lim_{x \\to 1} f(x) = 7$, then $\\lim_{x \\to 1} [3 \\cdot f(x)] = 3 \\cdot 7 = 21$",
        "Use Cases": "Simplifying limits when constants are involved."
      },
      category: "Limit Laws"
    },
    {
      name: "Special Limit of Sine over x",
      formula: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
      fields: {
        "Explanation": "As x gets tiny (close to zero), sin(x) behaves almost exactly like x. So their ratio approaches 1.",
        "$x \\to 0$": "x is approaching zero",
        "$\\sin x$": "Sine of x",
        "Example": "For x = 0.01 radians, $\\frac{\\sin 0.01}{0.01} \\approx 0.99998$",
        "Use Cases": "Evaluating limits in trigonometric functions, especially in derivatives."
      },
      category: "Special Limits"
    },
    {
      name: "Special Exponential Limit",
      formula: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
      fields: {
        "Explanation": "When x is very small, e^x is approximately 1 + x. So the numerator is about x, and the ratio approaches 1.",
        "$e^x$": "Exponential function with base e",
        "$x \\to 0$": "x is approaching zero",
        "Example": "For x = 0.001, $\\frac{e^{0.001} - 1}{0.001} \\approx 1$",
        "Use Cases": "Finding derivatives of exponential functions."
      },
      category: "Special Limits"
    },
    {
      name: "Limit of (1 + 1/n)^n",
      formula: "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$",
      fields: {
        "Explanation": "As n gets huge, this expression gets closer and closer to e (about 2.71828). It's like the magic formula that defines e.",
        "$n \\to \\infty$": "n is growing without bound",
        "$e$": "The natural exponential base",
        "Example": "For n = 1,000, $\\left(1 + \\frac{1}{1000}\\right)^{1000} \\approx 2.7169$",
        "Use Cases": "Understanding continuous growth, compound interest."
      },
      category: "Special Limits"
    },
    {
      name: "Limit of a Constant Function",
      formula: "$\\lim_{x \\to a} c = c$",
      fields: {
        "Explanation": "No matter where x goes, a constant function stays the same. So the limit is just that constant.",
        "$c$": "A constant value",
        "Example": "If $c = 4$, then $\\lim_{x \\to 10} 4 = 4$",
        "Use Cases": "Simplifying limits involving constants."
      },
      category: "Limits"
    },
    {
      name: "Limit of Identity Function",
      formula: "$\\lim_{x \\to a} x = a$",
      fields: {
        "Explanation": "As x approaches a, well, x just becomes a. There's nothing tricky here.",
        "$x$": "The variable itself",
        "$a$": "The value x is approaching",
        "Example": "$\\lim_{x \\to 5} x = 5$",
        "Use Cases": "Simplifying basic limits."
      },
      category: "Limits"
    },





    {
        name: "Definition of the Derivative",
        formula: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$",
        fields: {
          "Explanation": "This formula gives us the exact slope of the function f(x) at any point x. Think of h as a tiny step towards x; as h approaches zero, we get the instantaneous rate of change.",
          "$f'(x)$": "Derivative of f at x (slope at point x)",
          "$h \\to 0$": "h is getting infinitesimally small",
          "$f(x + h) - f(x)$": "Change in function's value over interval h",
          "Example": "For $f(x) = x^2$, the derivative is $f'(x) = \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h} = 2x$",
          "Use Cases": "Finding instantaneous rates of change, slopes of tangent lines."
        },
        category: "Derivatives"
      },
      {
        name: "Power Rule",
        formula: "$\\frac{d}{dx}[x^n] = n x^{n-1}$",
        fields: {
          "Explanation": "When differentiating x raised to a power, you bring down the exponent in front and subtract one from the exponent. It's a quick way to find slopes of polynomial functions.",
          "$x^n$": "Variable x raised to exponent n",
          "$n$": "Exponent (any real number)",
          "$n x^{n-1}$": "Derivative of x^n",
          "Example": "For $f(x) = x^3$, $f'(x) = 3x^{2}$",
          "Use Cases": "Differentiating polynomials, calculating velocities from position functions."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Constant Rule",
        formula: "$\\frac{d}{dx}[c] = 0$",
        fields: {
          "Explanation": "The derivative of any constant is zero because constants don't change, so their rate of change is zero.",
          "$c$": "A constant number",
          "$0$": "The derivative of any constant",
          "Example": "If $f(x) = 5$, then $f'(x) = 0$",
          "Use Cases": "Simplifying derivatives of functions that include constant terms."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Constant Multiple Rule",
        formula: "$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$",
        fields: {
          "Explanation": "If you're multiplying a function by a constant, you can pull the constant out and multiply it by the derivative of the function.",
          "$c$": "A constant multiplier",
          "$f(x)$": "Function being multiplied",
          "$c \\cdot f'(x)$": "Derivative after applying the rule",
          "Example": "If $f(x) = 3x^2$, then $f'(x) = 3 \\cdot 2x = 6x$",
          "Use Cases": "Simplifying derivatives when constants are involved."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Sum and Difference Rules",
        formula: "$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$",
        fields: {
          "Explanation": "The derivative of a sum or difference is just the sum or difference of the derivatives. Differentiate each function separately, then add or subtract them.",
          "$f(x), g(x)$": "Functions being added or subtracted",
          "$f'(x), g'(x)$": "Derivatives of the functions",
          "Example": "If $f(x) = x^2 + 3x$, then $f'(x) = 2x + 3$",
          "Use Cases": "Simplifying derivatives of combined functions."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Product Rule",
        formula: "$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x)g(x) + f(x)g'(x)$",
        fields: {
          "Explanation": "When differentiating a product of two functions, you take the derivative of the first times the second, plus the first times the derivative of the second.",
          "$f(x), g(x)$": "Functions being multiplied",
          "$f'(x), g'(x)$": "Derivatives of the functions",
          "Example": "If $f(x) = x \\cdot \\sin x$, then $f'(x) = 1 \\cdot \\sin x + x \\cdot \\cos x$",
          "Use Cases": "Differentiating products of functions, like in physics for work calculations."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Quotient Rule",
        formula: "$\\frac{d}{dx}\\left(\\frac{f(x)}{g(x)}\\right) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
        fields: {
          "Explanation": "To differentiate a quotient, use this formula: bottom times derivative of the top minus top times derivative of the bottom, all over the bottom squared.",
          "$f(x)$": "Numerator function",
          "$g(x)$": "Denominator function",
          "$f'(x), g'(x)$": "Derivatives of the functions",
          "$[g(x)]^2$": "Square of the denominator function",
          "Example": "If $f(x) = \\frac{x^2}{x+1}$, then $f'(x) = \\frac{(2x)(x+1) - x^2(1)}{(x+1)^2}$",
          "Use Cases": "Differentiating ratios of functions, important in rate problems."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Chain Rule",
        formula: "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$",
        fields: {
          "Explanation": "When differentiating a composite function, you take the derivative of the outer function evaluated at the inner function times the derivative of the inner function. Think of it as peeling back layers.",
          "$f(g(x))$": "Composite function (function within a function)",
          "$f'(g(x))$": "Derivative of the outer function evaluated at inner function",
          "$g'(x)$": "Derivative of the inner function",
          "Example": "If $f(x) = (3x + 2)^5$, then $f'(x) = 5(3x + 2)^{4} \\cdot 3$",
          "Use Cases": "Differentiating complex functions like nested functions or functions raised to a power."
        },
        category: "Basic Differentiation Rules"
      },
      {
        name: "Derivative of Sine Function",
        formula: "$\\frac{d}{dx}[\\sin x] = \\cos x$",
        fields: {
          "Explanation": "The rate at which sin x changes with respect to x is cos x. It shows how the slope of the sine curve at any point x is given by the cosine of that x.",
          "$\\sin x$": "Sine function",
          "$\\cos x$": "Cosine function",
          "Example": "If $f(x) = \\sin x$, then $f'(x) = \\cos x$",
          "Use Cases": "Analyzing oscillations, waves, and circular motion."
        },
        category: "Derivatives of Trigonometric Functions"
      },
      {
        name: "Derivative of Cosine Function",
        formula: "$\\frac{d}{dx}[\\cos x] = -\\sin x$",
        fields: {
          "Explanation": "The derivative of cos x is negative sin x. This tells us the slope of the cosine curve at any point x is the negative sine of x.",
          "$\\cos x$": "Cosine function",
          "$-\\sin x$": "Negative sine function",
          "Example": "If $f(x) = \\cos x$, then $f'(x) = -\\sin x$",
          "Use Cases": "Studying harmonic motion, electrical circuits."
        },
        category: "Derivatives of Trigonometric Functions"
      },
      {
        name: "Derivative of Tangent Function",
        formula: "$\\frac{d}{dx}[\\tan x] = \\sec^2 x$",
        fields: {
          "Explanation": "The derivative of tan x is secant squared x. This shows how rapidly the tangent function changes at any point x.",
          "$\\tan x$": "Tangent function",
          "$\\sec^2 x$": "Secant squared function",
          "Example": "If $f(x) = \\tan x$, then $f'(x) = \\sec^2 x$",
          "Use Cases": "Calculating slopes of tangent lines, optics."
        },
        category: "Derivatives of Trigonometric Functions"
      },
      {
        name: "Derivative of Exponential Function",
        formula: "$\\frac{d}{dx}[e^{x}] = e^{x}$",
        fields: {
          "Explanation": "The derivative of e to the x is just e to the x. The exponential function grows at a rate proportional to its value.",
          "$e^{x}$": "Exponential function with base e",
          "Example": "If $f(x) = e^{x}$, then $f'(x) = e^{x}$",
          "Use Cases": "Modeling continuous growth or decay, compound interest."
        },
        category: "Derivatives of Exponential and Logarithmic Functions"
      },
      {
        name: "Derivative of a^x",
        formula: "$\\frac{d}{dx}[a^{x}] = a^{x} \\ln a$",
        fields: {
          "Explanation": "When differentiating an exponential function with base a, multiply the original function by the natural log of the base.",
          "$a^{x}$": "Exponential function with base a",
          "$\\ln a$": "Natural logarithm of the base a",
          "Example": "If $f(x) = 2^{x}$, then $f'(x) = 2^{x} \\ln 2$",
          "Use Cases": "Analyzing exponential growth with different bases."
        },
        category: "Derivatives of Exponential and Logarithmic Functions"
      },
      {
        name: "Derivative of Natural Logarithm",
        formula: "$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$",
        fields: {
          "Explanation": "The rate at which ln x changes is the reciprocal of x. As x increases, the rate decreases.",
          "$\\ln x$": "Natural logarithm of x",
          "$\\frac{1}{x}$": "Reciprocal of x",
          "Example": "If $f(x) = \\ln x$, then $f'(x) = \\frac{1}{x}$",
          "Use Cases": "Solving time to reach a certain level in growth models."
        },
        category: "Derivatives of Exponential and Logarithmic Functions"
      },
      {
        name: "Derivative of Logarithm Base a",
        formula: "$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$",
        fields: {
          "Explanation": "For logarithms with any base a, the derivative is 1 over x times the natural log of the base.",
          "$\\log_a x$": "Logarithm of x with base a",
          "$\\ln a$": "Natural logarithm of base a",
          "Example": "If $f(x) = \\log_2 x$, then $f'(x) = \\frac{1}{x \\ln 2}$",
          "Use Cases": "Working with logarithmic scales like decibels or pH."
        },
        category: "Derivatives of Exponential and Logarithmic Functions"
      },
      {
        name: "Derivative of Inverse Sine",
        formula: "$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$",
        fields: {
          "Explanation": "The derivative of arcsin x shows how the inverse sine function changes with x. It grows faster as x approaches -1 or 1.",
          "$\\arcsin x$": "Inverse sine function",
          "$\\sqrt{1 - x^2}$": "Square root of (1 minus x squared)",
          "Example": "If $f(x) = \\arcsin x$, then $f'(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
          "Use Cases": "Calculating angles from ratios in trigonometry."
        },
        category: "Derivatives of Inverse Trigonometric Functions"
      },
      {
        name: "Derivative of Inverse Cosine",
        formula: "$\\frac{d}{dx}[\\arccos x] = \\frac{-1}{\\sqrt{1 - x^2}}$",
        fields: {
          "Explanation": "Similar to arcsin x but negative, indicating the inverse cosine decreases as x increases.",
          "$\\arccos x$": "Inverse cosine function",
          "Example": "If $f(x) = \\arccos x$, then $f'(x) = \\frac{-1}{\\sqrt{1 - x^2}}$",
          "Use Cases": "Determining angles in physics problems."
        },
        category: "Derivatives of Inverse Trigonometric Functions"
      },
      {
        name: "Derivative of Inverse Tangent",
        formula: "$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$",
        fields: {
          "Explanation": "The derivative shows how the inverse tangent function changes smoothly over all real numbers.",
          "$\\arctan x$": "Inverse tangent function",
          "$1 + x^2$": "Sum of 1 and x squared",
          "Example": "If $f(x) = \\arctan x$, then $f'(x) = \\frac{1}{1 + x^2}$",
          "Use Cases": "Signal processing, integrating to find angles."
        },
        category: "Derivatives of Inverse Trigonometric Functions"
      },



      {
        name: "Indefinite Integral (Antiderivative)",
        formula: "$\\int f(x) \\, dx = F(x) + C$",
        fields: {
          "Explanation": "This tells us how to find the original function F(x) when we know its derivative f(x). It's like running differentiation in reverse to see where the function came from.",
          "$f(x)$": "Function we're integrating (the derivative)",
          "$F(x)$": "The original function (antiderivative)",
          "$C$": "Constant of integration (since constants vanish when differentiated)",
          "Example": "If $f(x) = 2x$, then $\\int 2x \\, dx = x^2 + C$",
          "Use Cases": "Recovering original quantities from rates, like position from velocity."
        },
        category: "Integrals"
      },
      {
        name: "Definite Integral",
        formula: "$\\int_a^b f(x) \\, dx = F(b) - F(a)$",
        fields: {
          "Explanation": "This calculates the net area under the curve f(x) from x = a to x = b. You find the antiderivative F(x), plug in the top limit b, subtract the value at the bottom limit a.",
          "$a, b$": "Lower and upper limits of integration",
          "$f(x)$": "Function we're integrating",
          "$F(x)$": "Antiderivative of f(x)",
          "Example": "If $f(x) = x$, then $\\int_0^2 x \\, dx = \\left[ \\frac{1}{2}x^2 \\right]_0^2 = 2$",
          "Use Cases": "Calculating total accumulated quantities, like distance traveled."
        },
        category: "Integrals"
      },
      {
        name: "Basic Integration Rule - Power Rule",
        formula: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$, where $n \\ne -1$",
        fields: {
          "Explanation": "To integrate x raised to a power, increase the exponent by one and divide by the new exponent. Don't forget the constant C!",
          "$x^n$": "Variable x raised to exponent n",
          "$n$": "Exponent (not equal to -1)",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = x^2$, then $\\int x^2 \\, dx = \\frac{x^{3}}{3} + C$",
          "Use Cases": "Integrating polynomial functions."
        },
        category: "Basic Integration Rules"
      },
      {
        name: "Basic Integration Rule - Constant Multiple",
        formula: "$\\int c \\cdot f(x) \\, dx = c \\cdot \\int f(x) \\, dx$",
        fields: {
          "Explanation": "If there's a constant multiplied by a function, you can pull it out of the integral and multiply it after integrating.",
          "$c$": "A constant number",
          "$f(x)$": "Function to integrate",
          "Example": "If $f(x) = 3x$, then $\\int 3x \\, dx = 3 \\cdot \\int x \\, dx = 3 \\cdot \\frac{x^2}{2} + C$",
          "Use Cases": "Simplifying integrals with constant coefficients."
        },
        category: "Basic Integration Rules"
      },
      {
        name: "Basic Integration Rule - Sum and Difference",
        formula: "$\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$",
        fields: {
          "Explanation": "You can split the integral of a sum or difference into separate integrals. Integrate each function individually, then add or subtract the results.",
          "$f(x), g(x)$": "Functions being added or subtracted",
          "Example": "If $f(x) = x^2 + 3x$, then $\\int (x^2 + 3x) \\, dx = \\int x^2 \\, dx + \\int 3x \\, dx$",
          "Use Cases": "Breaking down complex integrals into simpler parts."
        },
        category: "Basic Integration Rules"
      },
      {
        name: "Integral of Sine Function",
        formula: "$\\int \\sin x \\, dx = -\\cos x + C$",
        fields: {
          "Explanation": "Integrating sin x gives us negative cos x. It's like asking, 'What function has a derivative of sin x?'",
          "$\\sin x$": "Sine function",
          "$-\\cos x$": "Negative cosine function",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = \\sin x$, then $\\int \\sin x \\, dx = -\\cos x + C$",
          "Use Cases": "Solving problems involving oscillations, waves."
        },
        category: "Integrals of Trigonometric Functions"
      },
      {
        name: "Integral of Cosine Function",
        formula: "$\\int \\cos x \\, dx = \\sin x + C$",
        fields: {
          "Explanation": "The antiderivative of cos x is sin x. We're finding the function whose derivative is cos x.",
          "$\\cos x$": "Cosine function",
          "$\\sin x$": "Sine function",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = \\cos x$, then $\\int \\cos x \\, dx = \\sin x + C$",
          "Use Cases": "Analyzing harmonic motion."
        },
        category: "Integrals of Trigonometric Functions"
      },
      {
        name: "Integral of Exponential Function",
        formula: "$\\int e^{x} \\, dx = e^{x} + C$",
        fields: {
          "Explanation": "The exponential function is its own antiderivative. Integrating e^x gives us e^x back.",
          "$e^{x}$": "Exponential function with base e",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = e^{x}$, then $\\int e^{x} \\, dx = e^{x} + C$",
          "Use Cases": "Modeling growth and decay processes."
        },
        category: "Integrals of Exponential and Logarithmic Functions"
      },
      {
        name: "Integral of a^x",
        formula: "$\\int a^{x} \\, dx = \\frac{a^{x}}{\\ln a} + C$",
        fields: {
          "Explanation": "When integrating an exponential function with base a, divide by the natural log of the base.",
          "$a^{x}$": "Exponential function with base a",
          "$\\ln a$": "Natural logarithm of base a",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = 2^{x}$, then $\\int 2^{x} \\, dx = \\frac{2^{x}}{\\ln 2} + C$",
          "Use Cases": "Calculations in finance, population models."
        },
        category: "Integrals of Exponential and Logarithmic Functions"
      },
      {
        name: "Integral of Reciprocal Function",
        formula: "$\\int \\frac{1}{x} \\, dx = \\ln |x| + C$",
        fields: {
          "Explanation": "Integrating 1 over x gives the natural logarithm of the absolute value of x. It's like finding the area under the hyperbola y = 1/x.",
          "$\\frac{1}{x}$": "Reciprocal function",
          "$\\ln |x|$": "Natural logarithm of the absolute value of x",
          "$C$": "Constant of integration",
          "Example": "If $f(x) = \\frac{1}{x}$, then $\\int \\frac{1}{x} \\, dx = \\ln |x| + C$",
          "Use Cases": "Calculating time in decay processes."
        },
        category: "Integrals of Exponential and Logarithmic Functions"
      },
      {
        name: "Fundamental Theorem of Calculus - Part 1",
        formula: "$\\int_a^b f(x) \\, dx = F(b) - F(a)$",
        fields: {
          "Explanation": "This theorem bridges differentiation and integration. It tells us that the definite integral of a function over an interval equals the change in its antiderivative over that interval.",
          "$f(x)$": "Function being integrated",
          "$F(x)$": "Antiderivative of f(x)",
          "$a, b$": "Lower and upper limits",
          "Example": "If $f(x) = x$, then $F(x) = \\frac{1}{2}x^2$, so $\\int_1^3 x \\, dx = \\frac{1}{2}(3^2) - \\frac{1}{2}(1^2) = 4$",
          "Use Cases": "Calculating net change, areas under curves."
        },
        category: "Fundamental Theorem of Calculus"
      },
      {
        name: "Fundamental Theorem of Calculus - Part 2",
        formula: "$\\frac{d}{dx} \\left( \\int_a^x f(t) \\, dt \\right) = f(x)$",
        fields: {
          "Explanation": "This part states that if you integrate a function and then differentiate the result, you get back the original function. Integration and differentiation are inverse processes.",
          "$f(t)$": "Function inside the integral",
          "$a$": "Constant lower limit",
          "$x$": "Variable upper limit",
          "Example": "If $F(x) = \\int_0^x \\cos t \\, dt$, then $F'(x) = \\cos x$",
          "Use Cases": "Solving initial value problems, accumulating quantities."
        },
        category: "Fundamental Theorem of Calculus"
      },
      {
        name: "Integration by Substitution (Reverse Chain Rule)",
        formula: "If $u = g(x)$, then $\\int f(g(x)) g'(x) \\, dx = \\int f(u) \\, du$",
        fields: {
          "Explanation": "When an integral contains a function and its derivative, you can substitute to simplify the integral. It's like undoing the chain rule from differentiation.",
          "$u = g(x)$": "Substitution for simplifying",
          "$f(g(x))$": "Composite function inside the integral",
          "$g'(x)$": "Derivative of inner function",
          "$du = g'(x) dx$": "Differential substitution",
          "Example": "Integrate $\\int 2x \\cos(x^2) \\, dx$ by letting $u = x^2$, so $du = 2x \\, dx$",
          "Use Cases": "Simplifying integrals that are otherwise tough to solve."
        },
        category: "Techniques of Integration"
      },
      {
        name: "Integration by Parts",
        formula: "$\\int u \\, dv = u v - \\int v \\, du$",
        fields: {
          "Explanation": "This technique is useful when integrating a product of functions. Choose parts of the integrand as u and dv, differentiate u to get du, and integrate dv to get v.",
          "$u$": "Function to differentiate",
          "$dv$": "Function to integrate",
          "$du$": "Derivative of u",
          "$v$": "Integral of dv",
          "Example": "To integrate $\\int x e^{x} \\, dx$, let $u = x$ (so $du = dx$) and $dv = e^{x} dx$ (so $v = e^{x}$)",
          "Use Cases": "Integrating products like x times an exponential or logarithm."
        },
        category: "Techniques of Integration"
      },
      {
        name: "Partial Fractions Decomposition",
        formula: "Decompose $\\frac{P(x)}{Q(x)}$ into simpler fractions before integrating",
        fields: {
          "Explanation": "If you have a rational function (polynomial over polynomial), break it into a sum of simpler fractions that are easier to integrate.",
          "$P(x)$": "Polynomial in the numerator",
          "$Q(x)$": "Polynomial in the denominator",
          "Example": "Integrate $\\int \\frac{2x}{x^2 - 1} \\, dx$ by decomposing into $\\int \\left( \\frac{1}{x - 1} + \\frac{1}{x + 1} \\right) dx$",
          "Use Cases": "Integrating rational functions, solving differential equations."
        },
        category: "Techniques of Integration"
      },
      {
        name: "Trigonometric Integrals",
        formula: "Use identities to simplify $\\int \\sin^n x \\cos^m x \\, dx$",
        fields: {
          "Explanation": "When integrating powers of sine and cosine, use trigonometric identities to rewrite the integral into a more manageable form.",
          "Identities": "Like $\\sin^2 x + \\cos^2 x = 1$, $\\sin 2x = 2 \\sin x \\cos x$",
          "Example": "Integrate $\\int \\sin^2 x \\, dx$ by using $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$",
          "Use Cases": "Solving integrals involving trigonometric functions raised to powers."
        },
        category: "Techniques of Integration"
      },
      {
        name: "Improper Integral",
        formula: "$\\int_a^{\\infty} f(x) \\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x) \\, dx$",
        fields: {
          "Explanation": "When integrating over an infinite interval, replace infinity with a variable limit and take the limit as that variable approaches infinity.",
          "$a$": "Lower limit",
          "$\\infty$": "Infinity (upper limit)",
          "Example": "Compute $\\int_1^{\\infty} \\frac{1}{x^2} \\, dx = \\lim_{b \\to \\infty} \\left( -\\frac{1}{x} \\bigg|_1^b \\right) = 1$",
          "Use Cases": "Calculating probabilities in statistics, areas under curves extending to infinity."
        },
        category: "Integrals"
      },
      {
        name: "Average Value of a Function",
        formula: "$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$",
        fields: {
          "Explanation": "This gives the average value of the function f(x) over the interval [a, b]. It's like finding the mean height of the curve over that interval.",
          "$f(x)$": "Function we're averaging",
          "$a, b$": "Interval endpoints",
          "$f_{\\text{avg}}$": "Average value of f(x)",
          "Example": "Find the average value of $f(x) = x^2$ on [0, 2]: $f_{\\text{avg}} = \\frac{1}{2} \\int_0^2 x^2 \\, dx = \\frac{1}{2} \\left( \\frac{8}{3} \\right) = \\frac{4}{3}$",
          "Use Cases": "Physics (average velocity), economics (average cost)."
        },
        category: "Integrals"
      }
  ];
  
  export default calculusFormulasList;
  