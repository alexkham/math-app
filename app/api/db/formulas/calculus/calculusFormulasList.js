// const calculusFormulasList = [
//     {
//       name: "Definition of a Limit",
//       formula: "$\\lim_{x \\to a} f(x) = L$",
//       fields: {
//         "Explanation": "This means that as x gets super close to 'a', the function f(x) gets super close to 'L'. Think of it like f(x) is chasing L as x approaches a.",
//         "$x \\to a$": "x is getting closer to the value 'a'",
//         "$f(x)$": "The function we're interested in",
//         "$L$": "The value that f(x) is approaching",
//         "Example": "If $f(x) = 2x$, then $\\lim_{x \\to 3} f(x) = 6$ because as x gets close to 3, f(x) gets close to 6.",
//         "Use Cases": "Understanding how functions behave near a specific point, even if they're not defined exactly at that point."
//       },
//       category: "Limits"
//     },
//     {
//       name: "Limit Laws - Sum Rule",
//       formula: "$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$",
//       fields: {
//         "Explanation": "You can split the limit of a sum into the sum of the limits. It's like handling each function separately and then adding the results.",
//         "$f(x), g(x)$": "Functions we're adding together",
//         "$\\lim_{x \\to a} f(x)$": "Limit of f(x) as x approaches a",
//         "$\\lim_{x \\to a} g(x)$": "Limit of g(x) as x approaches a",
//         "Example": "If $\\lim_{x \\to 2} f(x) = 5$ and $\\lim_{x \\to 2} g(x) = 3$, then $\\lim_{x \\to 2} [f(x) + g(x)] = 5 + 3 = 8$",
//         "Use Cases": "Breaking down complex limits into simpler parts to make calculations easier."
//       },
//       category: "Limit Laws"
//     },
//     {
//       name: "Limit Laws - Difference Rule",
//       formula: "$\\lim_{x \\to a} [f(x) - g(x)] = \\lim_{x \\to a} f(x) - \\lim_{x \\to a} g(x)$",
//       fields: {
//         "Explanation": "Just like addition, you can split the limit over subtraction. Handle each part separately, then subtract the results.",
//         "$f(x), g(x)$": "Functions we're subtracting",
//         "$\\lim_{x \\to a} f(x)$": "Limit of f(x) as x approaches a",
//         "$\\lim_{x \\to a} g(x)$": "Limit of g(x) as x approaches a",
//         "Example": "If $\\lim_{x \\to 4} f(x) = 10$ and $\\lim_{x \\to 4} g(x) = 6$, then $\\lim_{x \\to 4} [f(x) - g(x)] = 10 - 6 = 4$",
//         "Use Cases": "Simplifying limits involving subtraction."
//       },
//       category: "Limit Laws"
//     },
//     {
//       name: "Limit Laws - Product Rule",
//       formula: "$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\left(\\lim_{x \\to a} f(x)\\right) \\cdot \\left(\\lim_{x \\to a} g(x)\\right)$",
//       fields: {
//         "Explanation": "The limit of a product is the product of the limits. Calculate each limit separately, then multiply them.",
//         "$f(x), g(x)$": "Functions we're multiplying",
//         "$\\lim_{x \\to a} f(x)$": "Limit of f(x)",
//         "$\\lim_{x \\to a} g(x)$": "Limit of g(x)",
//         "Example": "If $\\lim_{x \\to 1} f(x) = 2$ and $\\lim_{x \\to 1} g(x) = 5$, then $\\lim_{x \\to 1} [f(x) \\cdot g(x)] = 2 \\cdot 5 = 10$",
//         "Use Cases": "Breaking down complex multiplication within limits."
//       },
//       category: "Limit Laws"
//     },
//     {
//       name: "Limit Laws - Quotient Rule",
//       formula: "$\\lim_{x \\to a} \\left( \\frac{f(x)}{g(x)} \\right) = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}$, provided $\\lim_{x \\to a} g(x) \\ne 0$",
//       fields: {
//         "Explanation": "The limit of a fraction is the fraction of the limits, as long as you're not dividing by zero.",
//         "$f(x)$": "Numerator function",
//         "$g(x)$": "Denominator function",
//         "$\\lim_{x \\to a} g(x) \\ne 0$": "Denominator's limit isn't zero",
//         "Example": "If $\\lim_{x \\to 2} f(x) = 8$ and $\\lim_{x \\to 2} g(x) = 4$, then $\\lim_{x \\to 2} \\left( \\frac{f(x)}{g(x)} \\right) = \\frac{8}{4} = 2$",
//         "Use Cases": "Simplifying limits involving division."
//       },
//       category: "Limit Laws"
//     },
//     {
//       name: "Limit Laws - Constant Multiple Rule",
//       formula: "$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$",
//       fields: {
//         "Explanation": "If you're multiplying a function by a constant, you can pull the constant out of the limit.",
//         "$c$": "A constant number",
//         "$f(x)$": "Function being multiplied",
//         "Example": "If $c = 3$ and $\\lim_{x \\to 1} f(x) = 7$, then $\\lim_{x \\to 1} [3 \\cdot f(x)] = 3 \\cdot 7 = 21$",
//         "Use Cases": "Simplifying limits when constants are involved."
//       },
//       category: "Limit Laws"
//     },
//     {
//       name: "Special Limit of Sine over x",
//       formula: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
//       fields: {
//         "Explanation": "As x gets tiny (close to zero), sin(x) behaves almost exactly like x. So their ratio approaches 1.",
//         "$x \\to 0$": "x is approaching zero",
//         "$\\sin x$": "Sine of x",
//         "Example": "For x = 0.01 radians, $\\frac{\\sin 0.01}{0.01} \\approx 0.99998$",
//         "Use Cases": "Evaluating limits in trigonometric functions, especially in derivatives."
//       },
//       category: "Special Limits"
//     },
//     {
//       name: "Special Exponential Limit",
//       formula: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
//       fields: {
//         "Explanation": "When x is very small, e^x is approximately 1 + x. So the numerator is about x, and the ratio approaches 1.",
//         "$e^x$": "Exponential function with base e",
//         "$x \\to 0$": "x is approaching zero",
//         "Example": "For x = 0.001, $\\frac{e^{0.001} - 1}{0.001} \\approx 1$",
//         "Use Cases": "Finding derivatives of exponential functions."
//       },
//       category: "Special Limits"
//     },
//     {
//       name: "Limit of (1 + 1/n)^n",
//       formula: "$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$",
//       fields: {
//         "Explanation": "As n gets huge, this expression gets closer and closer to e (about 2.71828). It's like the magic formula that defines e.",
//         "$n \\to \\infty$": "n is growing without bound",
//         "$e$": "The natural exponential base",
//         "Example": "For n = 1,000, $\\left(1 + \\frac{1}{1000}\\right)^{1000} \\approx 2.7169$",
//         "Use Cases": "Understanding continuous growth, compound interest."
//       },
//       category: "Special Limits"
//     },
//     {
//       name: "Limit of a Constant Function",
//       formula: "$\\lim_{x \\to a} c = c$",
//       fields: {
//         "Explanation": "No matter where x goes, a constant function stays the same. So the limit is just that constant.",
//         "$c$": "A constant value",
//         "Example": "If $c = 4$, then $\\lim_{x \\to 10} 4 = 4$",
//         "Use Cases": "Simplifying limits involving constants."
//       },
//       category: "Limits"
//     },
//     {
//       name: "Limit of Identity Function",
//       formula: "$\\lim_{x \\to a} x = a$",
//       fields: {
//         "Explanation": "As x approaches a, well, x just becomes a. There's nothing tricky here.",
//         "$x$": "The variable itself",
//         "$a$": "The value x is approaching",
//         "Example": "$\\lim_{x \\to 5} x = 5$",
//         "Use Cases": "Simplifying basic limits."
//       },
//       category: "Limits"
//     },





//     {
//         name: "Definition of the Derivative",
//         formula: "$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$",
//         fields: {
//           "Explanation": "This formula gives us the exact slope of the function f(x) at any point x. Think of h as a tiny step towards x; as h approaches zero, we get the instantaneous rate of change.",
//           "$f'(x)$": "Derivative of f at x (slope at point x)",
//           "$h \\to 0$": "h is getting infinitesimally small",
//           "$f(x + h) - f(x)$": "Change in function's value over interval h",
//           "Example": "For $f(x) = x^2$, the derivative is $f'(x) = \\lim_{h \\to 0} \\frac{(x + h)^2 - x^2}{h} = 2x$",
//           "Use Cases": "Finding instantaneous rates of change, slopes of tangent lines."
//         },
//         category: "Derivatives"
//       },
//       {
//         name: "Power Rule",
//         formula: "$\\frac{d}{dx}[x^n] = n x^{n-1}$",
//         fields: {
//           "Explanation": "When differentiating x raised to a power, you bring down the exponent in front and subtract one from the exponent. It's a quick way to find slopes of polynomial functions.",
//           "$x^n$": "Variable x raised to exponent n",
//           "$n$": "Exponent (any real number)",
//           "$n x^{n-1}$": "Derivative of x^n",
//           "Example": "For $f(x) = x^3$, $f'(x) = 3x^{2}$",
//           "Use Cases": "Differentiating polynomials, calculating velocities from position functions."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Constant Rule",
//         formula: "$\\frac{d}{dx}[c] = 0$",
//         fields: {
//           "Explanation": "The derivative of any constant is zero because constants don't change, so their rate of change is zero.",
//           "$c$": "A constant number",
//           "$0$": "The derivative of any constant",
//           "Example": "If $f(x) = 5$, then $f'(x) = 0$",
//           "Use Cases": "Simplifying derivatives of functions that include constant terms."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Constant Multiple Rule",
//         formula: "$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$",
//         fields: {
//           "Explanation": "If you're multiplying a function by a constant, you can pull the constant out and multiply it by the derivative of the function.",
//           "$c$": "A constant multiplier",
//           "$f(x)$": "Function being multiplied",
//           "$c \\cdot f'(x)$": "Derivative after applying the rule",
//           "Example": "If $f(x) = 3x^2$, then $f'(x) = 3 \\cdot 2x = 6x$",
//           "Use Cases": "Simplifying derivatives when constants are involved."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Sum and Difference Rules",
//         formula: "$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$",
//         fields: {
//           "Explanation": "The derivative of a sum or difference is just the sum or difference of the derivatives. Differentiate each function separately, then add or subtract them.",
//           "$f(x), g(x)$": "Functions being added or subtracted",
//           "$f'(x), g'(x)$": "Derivatives of the functions",
//           "Example": "If $f(x) = x^2 + 3x$, then $f'(x) = 2x + 3$",
//           "Use Cases": "Simplifying derivatives of combined functions."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Product Rule",
//         formula: "$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x)g(x) + f(x)g'(x)$",
//         fields: {
//           "Explanation": "When differentiating a product of two functions, you take the derivative of the first times the second, plus the first times the derivative of the second.",
//           "$f(x), g(x)$": "Functions being multiplied",
//           "$f'(x), g'(x)$": "Derivatives of the functions",
//           "Example": "If $f(x) = x \\cdot \\sin x$, then $f'(x) = 1 \\cdot \\sin x + x \\cdot \\cos x$",
//           "Use Cases": "Differentiating products of functions, like in physics for work calculations."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Quotient Rule",
//         formula: "$\\frac{d}{dx}\\left(\\frac{f(x)}{g(x)}\\right) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
//         fields: {
//           "Explanation": "To differentiate a quotient, use this formula: bottom times derivative of the top minus top times derivative of the bottom, all over the bottom squared.",
//           "$f(x)$": "Numerator function",
//           "$g(x)$": "Denominator function",
//           "$f'(x), g'(x)$": "Derivatives of the functions",
//           "$[g(x)]^2$": "Square of the denominator function",
//           "Example": "If $f(x) = \\frac{x^2}{x+1}$, then $f'(x) = \\frac{(2x)(x+1) - x^2(1)}{(x+1)^2}$",
//           "Use Cases": "Differentiating ratios of functions, important in rate problems."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Chain Rule",
//         formula: "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$",
//         fields: {
//           "Explanation": "When differentiating a composite function, you take the derivative of the outer function evaluated at the inner function times the derivative of the inner function. Think of it as peeling back layers.",
//           "$f(g(x))$": "Composite function (function within a function)",
//           "$f'(g(x))$": "Derivative of the outer function evaluated at inner function",
//           "$g'(x)$": "Derivative of the inner function",
//           "Example": "If $f(x) = (3x + 2)^5$, then $f'(x) = 5(3x + 2)^{4} \\cdot 3$",
//           "Use Cases": "Differentiating complex functions like nested functions or functions raised to a power."
//         },
//         category: "Basic Differentiation Rules"
//       },
//       {
//         name: "Derivative of Sine Function",
//         formula: "$\\frac{d}{dx}[\\sin x] = \\cos x$",
//         fields: {
//           "Explanation": "The rate at which sin x changes with respect to x is cos x. It shows how the slope of the sine curve at any point x is given by the cosine of that x.",
//           "$\\sin x$": "Sine function",
//           "$\\cos x$": "Cosine function",
//           "Example": "If $f(x) = \\sin x$, then $f'(x) = \\cos x$",
//           "Use Cases": "Analyzing oscillations, waves, and circular motion."
//         },
//         category: "Derivatives of Trigonometric Functions"
//       },
//       {
//         name: "Derivative of Cosine Function",
//         formula: "$\\frac{d}{dx}[\\cos x] = -\\sin x$",
//         fields: {
//           "Explanation": "The derivative of cos x is negative sin x. This tells us the slope of the cosine curve at any point x is the negative sine of x.",
//           "$\\cos x$": "Cosine function",
//           "$-\\sin x$": "Negative sine function",
//           "Example": "If $f(x) = \\cos x$, then $f'(x) = -\\sin x$",
//           "Use Cases": "Studying harmonic motion, electrical circuits."
//         },
//         category: "Derivatives of Trigonometric Functions"
//       },
//       {
//         name: "Derivative of Tangent Function",
//         formula: "$\\frac{d}{dx}[\\tan x] = \\sec^2 x$",
//         fields: {
//           "Explanation": "The derivative of tan x is secant squared x. This shows how rapidly the tangent function changes at any point x.",
//           "$\\tan x$": "Tangent function",
//           "$\\sec^2 x$": "Secant squared function",
//           "Example": "If $f(x) = \\tan x$, then $f'(x) = \\sec^2 x$",
//           "Use Cases": "Calculating slopes of tangent lines, optics."
//         },
//         category: "Derivatives of Trigonometric Functions"
//       },
//       {
//         name: "Derivative of Exponential Function",
//         formula: "$\\frac{d}{dx}[e^{x}] = e^{x}$",
//         fields: {
//           "Explanation": "The derivative of e to the x is just e to the x. The exponential function grows at a rate proportional to its value.",
//           "$e^{x}$": "Exponential function with base e",
//           "Example": "If $f(x) = e^{x}$, then $f'(x) = e^{x}$",
//           "Use Cases": "Modeling continuous growth or decay, compound interest."
//         },
//         category: "Derivatives of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Derivative of a^x",
//         formula: "$\\frac{d}{dx}[a^{x}] = a^{x} \\ln a$",
//         fields: {
//           "Explanation": "When differentiating an exponential function with base a, multiply the original function by the natural log of the base.",
//           "$a^{x}$": "Exponential function with base a",
//           "$\\ln a$": "Natural logarithm of the base a",
//           "Example": "If $f(x) = 2^{x}$, then $f'(x) = 2^{x} \\ln 2$",
//           "Use Cases": "Analyzing exponential growth with different bases."
//         },
//         category: "Derivatives of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Derivative of Natural Logarithm",
//         formula: "$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$",
//         fields: {
//           "Explanation": "The rate at which ln x changes is the reciprocal of x. As x increases, the rate decreases.",
//           "$\\ln x$": "Natural logarithm of x",
//           "$\\frac{1}{x}$": "Reciprocal of x",
//           "Example": "If $f(x) = \\ln x$, then $f'(x) = \\frac{1}{x}$",
//           "Use Cases": "Solving time to reach a certain level in growth models."
//         },
//         category: "Derivatives of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Derivative of Logarithm Base a",
//         formula: "$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$",
//         fields: {
//           "Explanation": "For logarithms with any base a, the derivative is 1 over x times the natural log of the base.",
//           "$\\log_a x$": "Logarithm of x with base a",
//           "$\\ln a$": "Natural logarithm of base a",
//           "Example": "If $f(x) = \\log_2 x$, then $f'(x) = \\frac{1}{x \\ln 2}$",
//           "Use Cases": "Working with logarithmic scales like decibels or pH."
//         },
//         category: "Derivatives of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Derivative of Inverse Sine",
//         formula: "$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$",
//         fields: {
//           "Explanation": "The derivative of arcsin x shows how the inverse sine function changes with x. It grows faster as x approaches -1 or 1.",
//           "$\\arcsin x$": "Inverse sine function",
//           "$\\sqrt{1 - x^2}$": "Square root of (1 minus x squared)",
//           "Example": "If $f(x) = \\arcsin x$, then $f'(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
//           "Use Cases": "Calculating angles from ratios in trigonometry."
//         },
//         category: "Derivatives of Inverse Trigonometric Functions"
//       },
//       {
//         name: "Derivative of Inverse Cosine",
//         formula: "$\\frac{d}{dx}[\\arccos x] = \\frac{-1}{\\sqrt{1 - x^2}}$",
//         fields: {
//           "Explanation": "Similar to arcsin x but negative, indicating the inverse cosine decreases as x increases.",
//           "$\\arccos x$": "Inverse cosine function",
//           "Example": "If $f(x) = \\arccos x$, then $f'(x) = \\frac{-1}{\\sqrt{1 - x^2}}$",
//           "Use Cases": "Determining angles in physics problems."
//         },
//         category: "Derivatives of Inverse Trigonometric Functions"
//       },
//       {
//         name: "Derivative of Inverse Tangent",
//         formula: "$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1 + x^2}$",
//         fields: {
//           "Explanation": "The derivative shows how the inverse tangent function changes smoothly over all real numbers.",
//           "$\\arctan x$": "Inverse tangent function",
//           "$1 + x^2$": "Sum of 1 and x squared",
//           "Example": "If $f(x) = \\arctan x$, then $f'(x) = \\frac{1}{1 + x^2}$",
//           "Use Cases": "Signal processing, integrating to find angles."
//         },
//         category: "Derivatives of Inverse Trigonometric Functions"
//       },



//       {
//         name: "Indefinite Integral (Antiderivative)",
//         formula: "$\\int f(x) \\, dx = F(x) + C$",
//         fields: {
//           "Explanation": "This tells us how to find the original function F(x) when we know its derivative f(x). It's like running differentiation in reverse to see where the function came from.",
//           "$f(x)$": "Function we're integrating (the derivative)",
//           "$F(x)$": "The original function (antiderivative)",
//           "$C$": "Constant of integration (since constants vanish when differentiated)",
//           "Example": "If $f(x) = 2x$, then $\\int 2x \\, dx = x^2 + C$",
//           "Use Cases": "Recovering original quantities from rates, like position from velocity."
//         },
//         category: "Integrals"
//       },
//       {
//         name: "Definite Integral",
//         formula: "$\\int_a^b f(x) \\, dx = F(b) - F(a)$",
//         fields: {
//           "Explanation": "This calculates the net area under the curve f(x) from x = a to x = b. You find the antiderivative F(x), plug in the top limit b, subtract the value at the bottom limit a.",
//           "$a, b$": "Lower and upper limits of integration",
//           "$f(x)$": "Function we're integrating",
//           "$F(x)$": "Antiderivative of f(x)",
//           "Example": "If $f(x) = x$, then $\\int_0^2 x \\, dx = \\left[ \\frac{1}{2}x^2 \\right]_0^2 = 2$",
//           "Use Cases": "Calculating total accumulated quantities, like distance traveled."
//         },
//         category: "Integrals"
//       },
//       {
//         name: "Basic Integration Rule - Power Rule",
//         formula: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$, where $n \\ne -1$",
//         fields: {
//           "Explanation": "To integrate x raised to a power, increase the exponent by one and divide by the new exponent. Don't forget the constant C!",
//           "$x^n$": "Variable x raised to exponent n",
//           "$n$": "Exponent (not equal to -1)",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = x^2$, then $\\int x^2 \\, dx = \\frac{x^{3}}{3} + C$",
//           "Use Cases": "Integrating polynomial functions."
//         },
//         category: "Basic Integration Rules"
//       },
//       {
//         name: "Basic Integration Rule - Constant Multiple",
//         formula: "$\\int c \\cdot f(x) \\, dx = c \\cdot \\int f(x) \\, dx$",
//         fields: {
//           "Explanation": "If there's a constant multiplied by a function, you can pull it out of the integral and multiply it after integrating.",
//           "$c$": "A constant number",
//           "$f(x)$": "Function to integrate",
//           "Example": "If $f(x) = 3x$, then $\\int 3x \\, dx = 3 \\cdot \\int x \\, dx = 3 \\cdot \\frac{x^2}{2} + C$",
//           "Use Cases": "Simplifying integrals with constant coefficients."
//         },
//         category: "Basic Integration Rules"
//       },
//       {
//         name: "Basic Integration Rule - Sum and Difference",
//         formula: "$\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$",
//         fields: {
//           "Explanation": "You can split the integral of a sum or difference into separate integrals. Integrate each function individually, then add or subtract the results.",
//           "$f(x), g(x)$": "Functions being added or subtracted",
//           "Example": "If $f(x) = x^2 + 3x$, then $\\int (x^2 + 3x) \\, dx = \\int x^2 \\, dx + \\int 3x \\, dx$",
//           "Use Cases": "Breaking down complex integrals into simpler parts."
//         },
//         category: "Basic Integration Rules"
//       },
//       {
//         name: "Integral of Sine Function",
//         formula: "$\\int \\sin x \\, dx = -\\cos x + C$",
//         fields: {
//           "Explanation": "Integrating sin x gives us negative cos x. It's like asking, 'What function has a derivative of sin x?'",
//           "$\\sin x$": "Sine function",
//           "$-\\cos x$": "Negative cosine function",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = \\sin x$, then $\\int \\sin x \\, dx = -\\cos x + C$",
//           "Use Cases": "Solving problems involving oscillations, waves."
//         },
//         category: "Integrals of Trigonometric Functions"
//       },
//       {
//         name: "Integral of Cosine Function",
//         formula: "$\\int \\cos x \\, dx = \\sin x + C$",
//         fields: {
//           "Explanation": "The antiderivative of cos x is sin x. We're finding the function whose derivative is cos x.",
//           "$\\cos x$": "Cosine function",
//           "$\\sin x$": "Sine function",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = \\cos x$, then $\\int \\cos x \\, dx = \\sin x + C$",
//           "Use Cases": "Analyzing harmonic motion."
//         },
//         category: "Integrals of Trigonometric Functions"
//       },
//       {
//         name: "Integral of Exponential Function",
//         formula: "$\\int e^{x} \\, dx = e^{x} + C$",
//         fields: {
//           "Explanation": "The exponential function is its own antiderivative. Integrating e^x gives us e^x back.",
//           "$e^{x}$": "Exponential function with base e",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = e^{x}$, then $\\int e^{x} \\, dx = e^{x} + C$",
//           "Use Cases": "Modeling growth and decay processes."
//         },
//         category: "Integrals of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Integral of a^x",
//         formula: "$\\int a^{x} \\, dx = \\frac{a^{x}}{\\ln a} + C$",
//         fields: {
//           "Explanation": "When integrating an exponential function with base a, divide by the natural log of the base.",
//           "$a^{x}$": "Exponential function with base a",
//           "$\\ln a$": "Natural logarithm of base a",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = 2^{x}$, then $\\int 2^{x} \\, dx = \\frac{2^{x}}{\\ln 2} + C$",
//           "Use Cases": "Calculations in finance, population models."
//         },
//         category: "Integrals of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Integral of Reciprocal Function",
//         formula: "$\\int \\frac{1}{x} \\, dx = \\ln |x| + C$",
//         fields: {
//           "Explanation": "Integrating 1 over x gives the natural logarithm of the absolute value of x. It's like finding the area under the hyperbola y = 1/x.",
//           "$\\frac{1}{x}$": "Reciprocal function",
//           "$\\ln |x|$": "Natural logarithm of the absolute value of x",
//           "$C$": "Constant of integration",
//           "Example": "If $f(x) = \\frac{1}{x}$, then $\\int \\frac{1}{x} \\, dx = \\ln |x| + C$",
//           "Use Cases": "Calculating time in decay processes."
//         },
//         category: "Integrals of Exponential and Logarithmic Functions"
//       },
//       {
//         name: "Fundamental Theorem of Calculus - Part 1",
//         formula: "$\\int_a^b f(x) \\, dx = F(b) - F(a)$",
//         fields: {
//           "Explanation": "This theorem bridges differentiation and integration. It tells us that the definite integral of a function over an interval equals the change in its antiderivative over that interval.",
//           "$f(x)$": "Function being integrated",
//           "$F(x)$": "Antiderivative of f(x)",
//           "$a, b$": "Lower and upper limits",
//           "Example": "If $f(x) = x$, then $F(x) = \\frac{1}{2}x^2$, so $\\int_1^3 x \\, dx = \\frac{1}{2}(3^2) - \\frac{1}{2}(1^2) = 4$",
//           "Use Cases": "Calculating net change, areas under curves."
//         },
//         category: "Fundamental Theorem of Calculus"
//       },
//       {
//         name: "Fundamental Theorem of Calculus - Part 2",
//         formula: "$\\frac{d}{dx} \\left( \\int_a^x f(t) \\, dt \\right) = f(x)$",
//         fields: {
//           "Explanation": "This part states that if you integrate a function and then differentiate the result, you get back the original function. Integration and differentiation are inverse processes.",
//           "$f(t)$": "Function inside the integral",
//           "$a$": "Constant lower limit",
//           "$x$": "Variable upper limit",
//           "Example": "If $F(x) = \\int_0^x \\cos t \\, dt$, then $F'(x) = \\cos x$",
//           "Use Cases": "Solving initial value problems, accumulating quantities."
//         },
//         category: "Fundamental Theorem of Calculus"
//       },
//       {
//         name: "Integration by Substitution (Reverse Chain Rule)",
//         formula: "If $u = g(x)$, then $\\int f(g(x)) g'(x) \\, dx = \\int f(u) \\, du$",
//         fields: {
//           "Explanation": "When an integral contains a function and its derivative, you can substitute to simplify the integral. It's like undoing the chain rule from differentiation.",
//           "$u = g(x)$": "Substitution for simplifying",
//           "$f(g(x))$": "Composite function inside the integral",
//           "$g'(x)$": "Derivative of inner function",
//           "$du = g'(x) dx$": "Differential substitution",
//           "Example": "Integrate $\\int 2x \\cos(x^2) \\, dx$ by letting $u = x^2$, so $du = 2x \\, dx$",
//           "Use Cases": "Simplifying integrals that are otherwise tough to solve."
//         },
//         category: "Techniques of Integration"
//       },
//       {
//         name: "Integration by Parts",
//         formula: "$\\int u \\, dv = u v - \\int v \\, du$",
//         fields: {
//           "Explanation": "This technique is useful when integrating a product of functions. Choose parts of the integrand as u and dv, differentiate u to get du, and integrate dv to get v.",
//           "$u$": "Function to differentiate",
//           "$dv$": "Function to integrate",
//           "$du$": "Derivative of u",
//           "$v$": "Integral of dv",
//           "Example": "To integrate $\\int x e^{x} \\, dx$, let $u = x$ (so $du = dx$) and $dv = e^{x} dx$ (so $v = e^{x}$)",
//           "Use Cases": "Integrating products like x times an exponential or logarithm."
//         },
//         category: "Techniques of Integration"
//       },
//       {
//         name: "Partial Fractions Decomposition",
//         formula: "Decompose $\\frac{P(x)}{Q(x)}$ into simpler fractions before integrating",
//         fields: {
//           "Explanation": "If you have a rational function (polynomial over polynomial), break it into a sum of simpler fractions that are easier to integrate.",
//           "$P(x)$": "Polynomial in the numerator",
//           "$Q(x)$": "Polynomial in the denominator",
//           "Example": "Integrate $\\int \\frac{2x}{x^2 - 1} \\, dx$ by decomposing into $\\int \\left( \\frac{1}{x - 1} + \\frac{1}{x + 1} \\right) dx$",
//           "Use Cases": "Integrating rational functions, solving differential equations."
//         },
//         category: "Techniques of Integration"
//       },
//       {
//         name: "Trigonometric Integrals",
//         formula: "Use identities to simplify $\\int \\sin^n x \\cos^m x \\, dx$",
//         fields: {
//           "Explanation": "When integrating powers of sine and cosine, use trigonometric identities to rewrite the integral into a more manageable form.",
//           "Identities": "Like $\\sin^2 x + \\cos^2 x = 1$, $\\sin 2x = 2 \\sin x \\cos x$",
//           "Example": "Integrate $\\int \\sin^2 x \\, dx$ by using $\\sin^2 x = \\frac{1 - \\cos 2x}{2}$",
//           "Use Cases": "Solving integrals involving trigonometric functions raised to powers."
//         },
//         category: "Techniques of Integration"
//       },
//       {
//         name: "Improper Integral",
//         formula: "$\\int_a^{\\infty} f(x) \\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x) \\, dx$",
//         fields: {
//           "Explanation": "When integrating over an infinite interval, replace infinity with a variable limit and take the limit as that variable approaches infinity.",
//           "$a$": "Lower limit",
//           "$\\infty$": "Infinity (upper limit)",
//           "Example": "Compute $\\int_1^{\\infty} \\frac{1}{x^2} \\, dx = \\lim_{b \\to \\infty} \\left( -\\frac{1}{x} \\bigg|_1^b \\right) = 1$",
//           "Use Cases": "Calculating probabilities in statistics, areas under curves extending to infinity."
//         },
//         category: "Integrals"
//       },
//       {
//         name: "Average Value of a Function",
//         formula: "$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$",
//         fields: {
//           "Explanation": "This gives the average value of the function f(x) over the interval [a, b]. It's like finding the mean height of the curve over that interval.",
//           "$f(x)$": "Function we're averaging",
//           "$a, b$": "Interval endpoints",
//           "$f_{\\text{avg}}$": "Average value of f(x)",
//           "Example": "Find the average value of $f(x) = x^2$ on [0, 2]: $f_{\\text{avg}} = \\frac{1}{2} \\int_0^2 x^2 \\, dx = \\frac{1}{2} \\left( \\frac{8}{3} \\right) = \\frac{4}{3}$",
//           "Use Cases": "Physics (average velocity), economics (average cost)."
//         },
//         category: "Integrals"
//       }
//   ];
  
//   export default calculusFormulasList;
  


// ─────────────────────────────────────────────────────────────────────────
// Calculus Formulas — Limits slice (33 entries)
// Categories: Limit Laws (15), Continuity (4), Special Limits (8),
//             Asymptotes & End Behavior (6)
//
// Schema per formulas_methodology_final.md:
//   { name, entity, category, formula, link: { label, url }, ...optional fields }
// ID is derived from name at render time:
//   name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // strip diacritics
//       .toLowerCase()
//       .replace(/[\s-]+/g, '_')
//       .replace(/[()'`’]/g, '')
// Examples:
//   "One-Sided Limit"  → 'one_sided_limit'
//   "L'Hôpital's Rule" → 'lhopitals_rule'
//
// Cross-aspect linking conventions:
//   - link.url uses plain /path (no ! prefix)
//   - markdown links inside field strings use !/path prefix
//   - LaTeX uses double-backslash \\ in template literals
// ─────────────────────────────────────────────────────────────────────────

const calculusFormulasList = [

  // ─── LIMIT LAWS ───────────────────────────────────────────────────────

  {
    name: 'Two-Sided Limit Existence Theorem',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$`,
    link: { label: 'The Existence Condition', url: '/calculus/limits/two-sided#2' },
    explanation: `The two-sided limit exists exactly when both one-sided limits exist and agree on a single value. This converts the problem of evaluating a two-sided limit into two simpler problems — compute each direction separately, then check whether they match.`,
    conditions: `Both one-sided limits must exist as finite values. If either fails to exist (oscillation, unbounded behavior) or if they exist but differ, the two-sided limit does not exist.`,
    related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)`,
    related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
  },

  {
    name: 'Limit of a Constant',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} c = c$$`,
    link: { label: 'Limit of a Constant', url: '/calculus/limits/rules#2' },
    explanation: `A constant function outputs the same value for every input. As $x$ approaches $a$, the output never changes, so the limit equals the constant itself.`,
    related_formulas: `- [Limit of the Identity Function](!/calculus/limits/formulas#limit_of_the_identity_function)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
  },

  {
    name: 'Limit of the Identity Function',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} x = a$$`,
    link: { label: 'Limit of the Identity Function', url: '/calculus/limits/rules#3' },
    explanation: `The identity function returns its input unchanged. As $x$ approaches $a$, the output also approaches $a$. Combined with the constant rule, this provides the base case for evaluating limits of all polynomial expressions.`,
    related_formulas: `- [Limit of a Constant](!/calculus/limits/formulas#limit_of_a_constant)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
  },

  {
    name: 'Sum and Difference Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x) \\pm g(x)] = \\lim_{x \\to a} f(x) \\pm \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Sum and Difference Rules', url: '/calculus/limits/rules#4' },
    explanation: `The limit of a sum is the sum of the limits; the limit of a difference is the difference of the limits. Limits distribute over addition and subtraction whenever the component limits exist.`,
    conditions: `Both $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ must exist as finite values. The rule fails for indeterminate forms like $\\infty - \\infty$, where both terms grow unboundedly and the difference is undetermined without further analysis.`,
    related_formulas: `- [Constant Multiple Rule (Limits)](!/calculus/limits/formulas#constant_multiple_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },

  {
    name: 'Constant Multiple Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$$`,
    link: { label: 'Constant Multiple Rule', url: '/calculus/limits/rules#5' },
    explanation: `Constants pass through limits. Scaling a function by a constant scales its limit by the same constant. This is a special case of the product rule with one factor constant, but it appears often enough to state on its own.`,
    related_formulas: `- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)`,
  },

  {
    name: 'Product Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Product Rule', url: '/calculus/limits/rules#6' },
    explanation: `The limit of a product is the product of the limits. The rule extends to any finite number of factors: if every factor has a limit, the product's limit is the product of those limits.`,
    conditions: `Both component limits must exist as finite values. The rule fails for the indeterminate form $0 \\cdot \\infty$ — when one factor approaches zero while the other grows unboundedly, the product can approach any value depending on relative rates.`,
    related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)
- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },

  {
    name: 'Quotient Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}, \\quad \\lim_{x \\to a} g(x) \\neq 0$$`,
    link: { label: 'Quotient Rule', url: '/calculus/limits/rules#7' },
    explanation: `The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero. When the denominator's limit is zero, this rule fails and other techniques are required.`,
    conditions: `Both component limits must exist, and the denominator's limit must be nonzero. If $\\lim g = 0$ and $\\lim f \\neq 0$, the limit is typically $\\pm\\infty$ — sign analysis determines which. If both vanish, the form is $\\tfrac{0}{0}$ and demands factoring, rationalization, or L'Hôpital's Rule.`,
    related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
- [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },

  {
    name: 'Power Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} [f(x)]^n = \\left[\\lim_{x \\to a} f(x)\\right]^n$$`,
    link: { label: 'Power Rule', url: '/calculus/limits/rules#8' },
    explanation: `The limit of a power is the power of the limit. For positive integer $n$ this follows from repeated application of the product rule. The rule extends to rational exponents under domain restrictions.`,
    variants: `Rational exponent form, valid where the right side is defined: $$\\lim_{x \\to a} [f(x)]^{m/n} = \\left[\\lim_{x \\to a} f(x)\\right]^{m/n}$$`,
    conditions: `For integer $n \\geq 1$, no extra conditions beyond the existence of $\\lim f$. For rational exponents $m/n$ with even $n$, the limit of $f$ must be non-negative.`,
    related_formulas: `- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Root Rule (Limits)](!/calculus/limits/formulas#root_rule_limits)`,
  },

  {
    name: 'Root Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$$`,
    link: { label: 'Root Rule', url: '/calculus/limits/rules#9' },
    explanation: `The limit of a root is the root of the limit, whenever the root is defined. This is the power rule with exponent $1/n$.`,
    conditions: `For odd $n$, holds for all real values of $\\lim f$. For even $n$, requires $\\lim f \\geq 0$ and $f(x) \\geq 0$ near $a$.`,
    related_formulas: `- [Power Rule (Limits)](!/calculus/limits/formulas#power_rule_limits)`,
  },

  {
    name: 'Absolute Value Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} |f(x)| = \\left|\\lim_{x \\to a} f(x)\\right|$$`,
    link: { label: 'Absolute Value Rule', url: '/calculus/limits/rules#10' },
    explanation: `Absolute value passes through limits. The converse is false: $\\lim |f|$ may exist when $\\lim f$ does not — for instance, $|(-1)^n| = 1$ for all $n$, but $(-1)^n$ has no limit.`,
    conditions: `Requires $\\lim f$ to exist. The rule cannot be reversed.`,
  },

  {
    name: 'Limit of a Polynomial',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} p(x) = p(a)$$`,
    link: { label: 'Limits of Polynomials', url: '/calculus/limits/rules#11' },
    explanation: `For any polynomial, the limit at a point equals the value at that point. Direct substitution always works. This follows from polynomials being continuous everywhere — every polynomial is built from sums, products, and constant multiples of the identity function and constants, all operations that limits respect.`,
    related_formulas: `- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)
- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
    related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
  },

  {
    name: 'Limit of a Rational Function',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{p(x)}{q(x)} = \\frac{p(a)}{q(a)}, \\quad q(a) \\neq 0$$`,
    link: { label: 'Limits of Rational Functions', url: '/calculus/limits/rules#12' },
    explanation: `When the denominator does not vanish at $a$, the limit of a rational function is just the value at $a$ — direct substitution works. When $q(a) = 0$, this rule no longer applies: the result is either an infinite limit (if $p(a) \\neq 0$) or an indeterminate $\\tfrac{0}{0}$ (if $p(a) = 0$, indicating a shared factor of $(x - a)$).`,
    conditions: `$q(a) \\neq 0$. Where this fails, factor numerator and denominator and cancel, or analyze sign for vertical asymptote behavior.`,
    related_formulas: `- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [L'Hôpital's Rule](!/calculus/limits/formulas#lhopitals_rule)`,
    related_definitions: `- [Continuity](!/calculus/definitions#continuity)
- [Asymptote](!/calculus/definitions#asymptote)`,
  },

  {
    name: 'Composition Rule (Limits)',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} f(g(x)) = f\\!\\left(\\lim_{x \\to a} g(x)\\right) \\quad \\text{if } f \\text{ is continuous at } \\lim_{x \\to a} g(x)$$`,
    link: { label: 'Composition Rule', url: '/calculus/limits/rules#13' },
    explanation: `Limits pass through continuous functions. First find the limit of the inner function, then apply the outer function to that value. The result equals the limit of the composition.`,
    conditions: `The outer function $f$ must be continuous at the limit of the inner function. Without continuity, the behavior of $f$ near $\\lim g$ may differ from $f(\\lim g)$, breaking the rule.`,
    related_formulas: `- [Continuity Preserved Under Operations](!/calculus/limits/formulas#continuity_preserved_under_operations)
- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
    related_definitions: `- [Continuity](!/calculus/definitions#continuity)`,
  },

  {
    name: 'Squeeze Theorem',
    entity: 'limit',
    category: 'Limit Laws',
    formula: `$$\\text{If } g(x) \\leq f(x) \\leq h(x) \\text{ near } a \\text{ and } \\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L,$$
$$\\text{then } \\lim_{x \\to a} f(x) = L.$$`,
    link: { label: 'The Squeeze Theorem', url: '/calculus/limits/rules#14' },
    explanation: `When a function is trapped between two others that converge to the same limit, it has nowhere to go but that limit. The Squeeze Theorem proves the foundational trigonometric limit $\\lim_{x \\to 0} \\tfrac{\\sin x}{x} = 1$ by bounding the ratio between $\\cos x$ and $1$ near zero.`,
    conditions: `The inequality $g \\leq f \\leq h$ need only hold near $a$, not at $a$ itself. Both bounding limits must exist and be equal. Often used when $f$ contains a bounded oscillating factor (sine, cosine) multiplied by something that vanishes — bound the oscillation by $\\pm 1$ and squeeze.`,
    related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
  },

  {
    // TODO: content gap — no current section on /calculus/limits/* covers L'Hôpital's Rule.
    // Intended target: /calculus/limits/evaluating, extending §3 (Indeterminate Forms)
    // or as a new dedicated section.
    name: "L'Hôpital's Rule",
    entity: 'indeterminate_form',
    category: 'Limit Laws',
    formula: `$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\text{for indeterminate forms } \\tfrac{0}{0} \\text{ or } \\tfrac{\\infty}{\\infty}$$`,
    link: { label: '', url: '' },
    explanation: `When direct substitution gives $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$, replace numerator and denominator with their derivatives and try again. The new limit, if it exists, equals the original. The rule may need to be applied repeatedly when the indeterminate form persists.`,
    conditions: `The original limit must produce $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$. Both $f$ and $g$ must be differentiable near $a$ (except possibly at $a$), with $g'(x) \\neq 0$ near $a$. The limit of $f'/g'$ must exist (or be $\\pm\\infty$). Other indeterminate forms ($0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$) require algebraic transformation into $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$ before the rule applies.`,
    related_formulas: `- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
    related_definitions: `- [Limit](!/calculus/definitions#limit)
- [Derivative](!/calculus/definitions#derivative)`,
  },

  // ─── CONTINUITY ────────────────────────────────────────────────────────

  {
    name: 'Continuity at a Point',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ is continuous at } x = a \\iff \\lim_{x \\to a} f(x) = f(a)$$`,
    link: { label: 'The Formal Definition', url: '/calculus/limits/continuity#2' },
    explanation: `A single equation that encodes three requirements: $f(a)$ must be defined, the limit must exist, and the two must match. Continuity means the function value matches what surrounding values predict — no jumps, no holes, no surprises.`,
    related_formulas: `- [One-Sided Continuity](!/calculus/limits/formulas#one_sided_continuity)
- [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)
- [Limit of a Polynomial](!/calculus/limits/formulas#limit_of_a_polynomial)`,
    related_definitions: `- [Limit](!/calculus/definitions#limit)`,
  },

  {
    name: 'One-Sided Continuity',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ right-continuous at } a \\iff \\lim_{x \\to a^+} f(x) = f(a)$$
$$f \\text{ left-continuous at } a \\iff \\lim_{x \\to a^-} f(x) = f(a)$$`,
    link: { label: 'One-Sided Continuity', url: '/calculus/limits/one-sided#9' },
    explanation: `Continuity from a single direction. A function continuous on a closed interval $[a, b]$ must be continuous on $(a, b)$, right-continuous at $a$, and left-continuous at $b$ — full continuity is unavailable at endpoints because only one direction of approach exists.`,
    related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [Two-Sided Limit Existence Theorem](!/calculus/limits/formulas#two_sided_limit_existence_theorem)`,
    related_definitions: `- [One-Sided Limit](!/calculus/definitions#one_sided_limit)`,
  },

  {
    name: 'Continuity Preserved Under Operations',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f, g \\text{ continuous at } a \\implies f \\pm g, \\; cf, \\; f \\cdot g, \\; \\tfrac{f}{g}\\;(g(a) \\neq 0), \\; f \\circ g \\text{ continuous at } a$$`,
    link: { label: 'Combinations of Continuous Functions', url: '/calculus/limits/continuity#10' },
    explanation: `Continuity is preserved by the standard operations — sums, differences, scalar multiples, products, quotients (where defined), and compositions. This means whole families of functions are continuous wherever defined: polynomials everywhere, rational functions where the denominator is nonzero, and any composition built from continuous building blocks.`,
    related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)
- [Composition Rule (Limits)](!/calculus/limits/formulas#composition_rule_limits)
- [Sum and Difference Rule (Limits)](!/calculus/limits/formulas#sum_and_difference_rule_limits)
- [Product Rule (Limits)](!/calculus/limits/formulas#product_rule_limits)
- [Quotient Rule (Limits)](!/calculus/limits/formulas#quotient_rule_limits)`,
  },

  {
    name: 'Intermediate Value Theorem',
    entity: 'continuity',
    category: 'Continuity',
    formula: `$$f \\text{ continuous on } [a,b], \\; k \\text{ between } f(a) \\text{ and } f(b) \\implies \\exists\\, c \\in (a,b) \\text{ with } f(c) = k$$`,
    link: { label: 'The Intermediate Value Theorem (IVT)', url: '/calculus/limits/continuity#11' },
    explanation: `A continuous function on a closed interval hits every value between its endpoints — no skipping. If $f$ is negative at one endpoint and positive at the other, it must equal zero somewhere in between. This is an existence theorem: it guarantees a $c$ exists, but says nothing about where it is or whether it is unique.`,
    conditions: `$f$ must be continuous on the closed interval $[a, b]$. The value $k$ must lie strictly between $f(a)$ and $f(b)$ (or equal one of them, in which case $c$ is the corresponding endpoint).`,
    related_formulas: `- [Continuity at a Point](!/calculus/limits/formulas#continuity_at_a_point)`,
  },

  // ─── SPECIAL LIMITS ────────────────────────────────────────────────────

  {
    name: 'Sine Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$`,
    link: { label: 'The Fundamental Trigonometric Limit', url: '/calculus/limits/special#2' },
    explanation: `Direct substitution gives $\\tfrac{0}{0}$, but the geometry of the unit circle reveals that for small $x$, $\\sin x$ and $x$ are nearly equal. Their ratio approaches exactly $1$. This limit is the foundation for the derivatives of $\\sin x$ and $\\cos x$.`,
    conditions: `$x$ must be measured in radians. The limit fails (becomes $\\tfrac{\\pi}{180}$) if $x$ is in degrees.`,
    related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
- [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)
- [Tangent Limit at Zero](!/calculus/limits/formulas#tangent_limit_at_zero)
- [Squeeze Theorem](!/calculus/limits/formulas#squeeze_theorem)`,
  },

  {
    name: 'Cosine Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    explanation: `Another $\\tfrac{0}{0}$ form. Multiply by the conjugate $\\tfrac{1 + \\cos x}{1 + \\cos x}$ to convert the numerator to $\\sin^2 x$, then split into $\\tfrac{\\sin x}{x} \\cdot \\tfrac{\\sin x}{1 + \\cos x}$ — the first factor goes to $1$, the second to $0$.`,
    conditions: `$x$ in radians.`,
    related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Quadratic Limit at Zero](!/calculus/limits/formulas#cosine_quadratic_limit_at_zero)`,
  },

  {
    name: 'Cosine Quadratic Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    explanation: `The numerator vanishes like $x^2$ near zero — specifically, $1 - \\cos x \\approx \\tfrac{x^2}{2}$. The leading coefficient of that approximation is exactly the limit. The second derivative of $\\cos x$ at zero is $-1$, so the Taylor expansion gives $\\cos x \\approx 1 - \\tfrac{x^2}{2}$.`,
    conditions: `$x$ in radians.`,
    related_formulas: `- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)
- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)`,
  },

  {
    name: 'Tangent Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$`,
    link: { label: 'Related Trigonometric Limits', url: '/calculus/limits/special#3' },
    explanation: `Follows directly from the sine limit: $\\tfrac{\\tan x}{x} = \\tfrac{\\sin x}{x} \\cdot \\tfrac{1}{\\cos x}$. The first factor goes to $1$, the second goes to $1$, so the product goes to $1$.`,
    conditions: `$x$ in radians.`,
    related_formulas: `- [Sine Limit at Zero](!/calculus/limits/formulas#sine_limit_at_zero)
- [Cosine Limit at Zero](!/calculus/limits/formulas#cosine_limit_at_zero)`,
  },

  {
    name: 'Exponential Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$`,
    link: { label: 'The Natural Exponential Limit', url: '/calculus/limits/special#5' },
    explanation: `This limit is the derivative of $e^x$ at $x = 0$, and it is exactly what makes $e$ special — it is the unique base for which the slope at zero equals $1$. The result drives the entire structure of $e^x$ as the function equal to its own derivative.`,
    variants: `For an arbitrary positive base $a$, the analogue is $$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a.$$ Setting $a = e$ recovers the natural form.`,
    related_formulas: `- [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)
- [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
    related_definitions: `- [Derivative](!/calculus/definitions#derivative)`,
  },

  {
    name: 'Logarithm Taylor Limit',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$`,
    link: { label: 'Related Exponential Limits', url: '/calculus/limits/special#6' },
    explanation: `The mirror image of the exponential limit at zero: $\\ln(1+x)$ behaves like $x$ near zero. Substituting $u = \\ln(1+x)$ converts this directly into the exponential limit. Equivalently, this is the derivative of $\\ln x$ at $x = 1$, which equals $1$.`,
    related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
- [Definition of e as a Limit](!/calculus/limits/formulas#definition_of_e_as_a_limit)`,
  },

  {
    name: 'Definition of e as a Limit',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$`,
    link: { label: 'The Definition of e', url: '/calculus/limits/special#7' },
    explanation: `The number $e \\approx 2.71828$ is defined by this limit. It arises in continuous compounding: an annual interest rate of $100\\%$ compounded $n$ times per year produces a growth factor $(1 + 1/n)^n$, which approaches $e$ as compounding becomes continuous.`,
    variants: `Discrete (sequence) form: $$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e.$$ Reciprocal form (often more useful in derivations): $$\\lim_{x \\to 0} (1 + x)^{1/x} = e.$$`,
    related_formulas: `- [Exponential Limit at Zero](!/calculus/limits/formulas#exponential_limit_at_zero)
- [Logarithm Taylor Limit](!/calculus/limits/formulas#logarithm_taylor_limit)`,
  },

  {
    name: 'x ln x Limit at Zero',
    entity: 'limit',
    category: 'Special Limits',
    formula: `$$\\lim_{x \\to 0^+} x \\ln x = 0$$`,
    link: { label: 'Limits Involving Logarithms', url: '/calculus/limits/special#8' },
    explanation: `An indeterminate $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $\\ln x$ plunges to $-\\infty$, but $x$ vanishes faster than $\\ln x$ blows up. The polynomial factor wins; the product approaches zero.`,
    related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },

  // ─── ASYMPTOTES & END BEHAVIOR ─────────────────────────────────────────

  {
    name: 'Horizontal Asymptote Condition',
    entity: 'asymptote',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} f(x) = L \\;\\text{ or }\\; \\lim_{x \\to -\\infty} f(x) = L \\implies y = L \\text{ is a horizontal asymptote}$$`,
    link: { label: 'Horizontal Asymptotes', url: '/calculus/limits/infinity#3' },
    explanation: `A finite limit at infinity in either direction produces a horizontal asymptote. A function can have zero, one (the same in both directions), or two (different finite limits at $\\pm\\infty$) horizontal asymptotes.`,
    related_formulas: `- [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
- [Limit of a Rational Function](!/calculus/limits/formulas#limit_of_a_rational_function)`,
    related_definitions: `- [Limit](!/calculus/definitions#limit)`,
  },

  {
    name: 'Vertical Asymptote Condition',
    entity: 'asymptote',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to a^-} f(x) = \\pm\\infty \\;\\text{ or }\\; \\lim_{x \\to a^+} f(x) = \\pm\\infty \\implies x = a \\text{ is a vertical asymptote}$$`,
    link: { label: 'Vertical Asymptotes', url: '/calculus/limits/infinity#8' },
    explanation: `Any one-sided infinite limit produces a vertical asymptote. Both sides can disagree in sign — the line $x = a$ is still a vertical asymptote even when one side goes to $+\\infty$ and the other to $-\\infty$. For rational functions, vertical asymptotes typically occur where the denominator vanishes while the numerator does not.`,
    related_formulas: `- [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
    related_definitions: `- [Discontinuity](!/calculus/definitions#discontinuity)
- [Limit](!/calculus/definitions#limit)`,
  },

  {
    name: 'Exponential End Behavior',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} e^x = \\infty, \\qquad \\lim_{x \\to -\\infty} e^x = 0$$`,
    link: { label: 'Limits of Exponentials at Infinity', url: '/calculus/limits/infinity#11' },
    explanation: `The exponential grows without bound to the right and decays to zero to the left. The horizontal asymptote $y = 0$ appears in the direction where the exponent goes to $-\\infty$. For $e^{-x}$, the directions reverse.`,
    variants: `For general base $a > 1$: $$\\lim_{x \\to \\infty} a^x = \\infty, \\qquad \\lim_{x \\to -\\infty} a^x = 0.$$ For $0 < a < 1$, the limits swap.`,
    related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
- [Horizontal Asymptote Condition](!/calculus/limits/formulas#horizontal_asymptote_condition)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)`,
    related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
  },

  {
    name: 'Logarithm End Behavior',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\ln x = \\infty, \\qquad \\lim_{x \\to 0^+} \\ln x = -\\infty$$`,
    link: { label: 'Limits of Logarithms Toward Zero and Infinity', url: '/calculus/limits/infinity#12' },
    explanation: `The natural logarithm grows without bound (slowly) and plunges to $-\\infty$ as the argument approaches zero from the right. The line $x = 0$ is a vertical asymptote. No left-hand limit at zero exists because $\\ln x$ is undefined for $x \\leq 0$.`,
    conditions: `Domain restriction: $\\ln x$ is defined only for $x > 0$, so only the one-sided limit $x \\to 0^+$ is meaningful at the left boundary.`,
    related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Vertical Asymptote Condition](!/calculus/limits/formulas#vertical_asymptote_condition)
- [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
    related_definitions: `- [Asymptote](!/calculus/definitions#asymptote)`,
  },

  {
    name: 'Exponential Beats Polynomial',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$`,
    link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
    explanation: `Any exponential eventually overtakes any polynomial. Even when the polynomial degree is enormous, the exponential's rate of growth wins for large enough $x$. This is the upper tier of the growth-rate hierarchy.`,
    variants: `For any base $a > 1$: $$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0.$$`,
    conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Resolved by repeated application of L'Hôpital's Rule, or by noting that $e^x$ grows faster than any polynomial term.`,
    related_formulas: `- [Polynomial Beats Logarithm](!/calculus/limits/formulas#polynomial_beats_logarithm)
- [Exponential End Behavior](!/calculus/limits/formulas#exponential_end_behavior)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },

  {
    name: 'Polynomial Beats Logarithm',
    entity: 'limit',
    category: 'Asymptotes & End Behavior',
    formula: `$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$`,
    link: { label: 'Growth Rate Comparisons', url: '/calculus/limits/special#9' },
    explanation: `Any positive power of $x$ eventually overtakes any logarithm. Logarithms grow but slowly — slower than every polynomial of positive degree. This is the bottom tier of the growth-rate hierarchy.`,
    conditions: `An indeterminate $\\tfrac{\\infty}{\\infty}$ form. Requires $n > 0$. Resolved by L'Hôpital's Rule or by observing that $\\ln x$ is the inverse of the rapidly-growing exponential.`,
    related_formulas: `- [Exponential Beats Polynomial](!/calculus/limits/formulas#exponential_beats_polynomial)
- [Logarithm End Behavior](!/calculus/limits/formulas#logarithm_end_behavior)
- [x ln x Limit at Zero](!/calculus/limits/formulas#x_ln_x_limit_at_zero)`,
    related_definitions: `- [Indeterminate Form](!/calculus/definitions#indeterminate_form)`,
  },


  // ─── FUNDAMENTAL THEOREM & ANTIDERIVATIVES ──────────────────────────────
 
  {
    name: 'Fundamental Theorem of Calculus, Part 1',
    entity: 'definite_integral',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$`,
    link: { label: 'Fundamental Theorem of Calculus — Part 1', url: '/calculus/integrals/rules#5' },
    explanation: `Differentiating an accumulation function recovers the integrand. If you accumulate $f$ from $a$ up to a moving boundary $x$, the rate at which the accumulated total grows at $x$ is exactly $f(x)$. This guarantees that every continuous function has an antiderivative — namely, its own accumulation function — even when no elementary formula expresses it.`,
    conditions: `$f$ must be continuous on an interval containing $a$ and $x$.`,
    related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)
- [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
    related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Definite Integral](!/calculus/definitions#definite_integral)`,
  },
 
  {
    name: 'Fundamental Theorem of Calculus, Part 2',
    entity: 'definite_integral',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\int_a^b f(x)\\, dx = F(b) - F(a) \\quad \\text{where } F'(x) = f(x)$$`,
    link: { label: 'Fundamental Theorem of Calculus — Part 2', url: '/calculus/integrals/rules#6' },
    explanation: `The computational engine of integral calculus. Rather than computing limits of Riemann sums, find any antiderivative and evaluate at the endpoints. The constant of integration cancels in the subtraction, so any antiderivative works — different choices of $C$ produce the same definite integral.`,
    conditions: `$f$ must be continuous on $[a, b]$ (or, more generally, integrable with $F$ continuous on $[a, b]$ and differentiable with $F' = f$ on $(a, b)$).`,
    notation: `Standard shorthand: $F(x) \\big|_a^b$ or $[F(x)]_a^b$ both mean $F(b) - F(a)$.`,
    related_formulas: `- [Fundamental Theorem of Calculus, Part 1](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_1)
- [Antiderivative Family](!/calculus/integrals/formulas#antiderivative_family)`,
    related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Definite Integral](!/calculus/definitions#definite_integral)
- [Riemann Sum](!/calculus/definitions#riemann_sum)`,
  },
 
  {
    name: 'Antiderivative Family',
    entity: 'antiderivative',
    category: 'Fundamental Theorem & Antiderivatives',
    formula: `$$\\int f(x)\\, dx = F(x) + C \\quad \\text{where } F'(x) = f(x)$$`,
    link: { label: 'The Constant of Integration', url: '/calculus/integrals/indefinite#2' },
    explanation: `Antiderivatives come in families. If $F$ is one antiderivative of $f$, every antiderivative has the form $F(x) + C$ for some constant $C$ — because the derivative of any constant is zero, vertical shifts of the graph all share the same derivative. Initial conditions like $F(0) = 3$ pin down $C$.`,
    conditions: `Holds on any connected interval. On disconnected domains the constant can differ between components.`,
    related_formulas: `- [Fundamental Theorem of Calculus, Part 2](!/calculus/integrals/formulas#fundamental_theorem_of_calculus_part_2)`,
    related_definitions: `- [Antiderivative](!/calculus/definitions#antiderivative)
- [Indefinite Integral](!/calculus/definitions#indefinite_integral)
- [Integrand](!/calculus/definitions#integrand)`,
  },
 
  // ─── INTEGRATION RULES ──────────────────────────────────────────────────
 
  {
    name: 'Sum and Difference Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int [f(x) \\pm g(x)]\\, dx = \\int f(x)\\, dx \\pm \\int g(x)\\, dx$$`,
    link: { label: 'Sum and Difference Rules', url: '/calculus/integrals/rules#1' },
    explanation: `Integration distributes over addition and subtraction. Complex integrands break into simpler pieces, each integrated separately. Holds for both definite and indefinite integrals.`,
    related_formulas: `- [Constant Multiple Rule (Integrals)](!/calculus/integrals/formulas#constant_multiple_rule_integrals)`,
  },
 
  {
    name: 'Constant Multiple Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$`,
    link: { label: 'Constant Multiple Rule', url: '/calculus/integrals/rules#2' },
    explanation: `Constants factor out of integrals. Combined with the sum rule, this makes integration linear: $\\int [a f + b g]\\, dx = a \\int f\\, dx + b \\int g\\, dx$.`,
    related_formulas: `- [Sum and Difference Rule (Integrals)](!/calculus/integrals/formulas#sum_and_difference_rule_integrals)`,
  },
 
  {
    name: 'Additivity Over Intervals',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$`,
    link: { label: 'Additivity Over Intervals', url: '/calculus/integrals/rules#3' },
    explanation: `An integral over $[a, c]$ can be split at any intermediate point $b$. Essential for piecewise functions where different formulas apply on different subintervals. The point $b$ need not lie between $a$ and $c$ — the rule extends with appropriate sign conventions.`,
    related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
- [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)`,
    related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
  },
 
  {
    name: 'Reversing Limits of Integration',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$`,
    link: { label: 'Reversing Limits of Integration', url: '/calculus/integrals/rules#4' },
    explanation: `Swapping the bounds of a definite integral negates the result. The Riemann sum construction accumulates contributions in the direction $a \\to b$; reversing the direction reverses every signed width $\\Delta x$, flipping the total's sign.`,
    related_formulas: `- [Zero-Width Interval](!/calculus/integrals/formulas#zero_width_interval)
- [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
    related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
  },
 
  {
    name: 'Zero-Width Interval',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$\\int_a^a f(x)\\, dx = 0$$`,
    link: { label: 'Zero-Width Interval', url: '/calculus/integrals/rules#4' },
    explanation: `An integral over a degenerate interval is zero. With no width, no accumulation occurs.`,
    related_formulas: `- [Reversing Limits of Integration](!/calculus/integrals/formulas#reversing_limits_of_integration)
- [Additivity Over Intervals](!/calculus/integrals/formulas#additivity_over_intervals)`,
  },
 
  {
    name: 'Comparison Property (Integrals)',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$f(x) \\leq g(x) \\text{ on } [a, b] \\implies \\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$`,
    link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
    explanation: `Pointwise inequality between integrands carries through to integrals. A special case: if $f \\geq 0$, then $\\int f \\geq 0$. The comparison property underpins both estimation techniques and convergence tests for improper integrals.`,
    conditions: `The inequality $f \\leq g$ must hold throughout $[a, b]$, and both $f$ and $g$ must be integrable on $[a, b]$.`,
    related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
  },
 
  {
    name: 'Bounding Property (Integrals)',
    entity: 'definite_integral',
    category: 'Integration Rules',
    formula: `$$m \\leq f(x) \\leq M \\text{ on } [a, b] \\implies m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$`,
    link: { label: 'Comparison Properties', url: '/calculus/integrals/rules#8' },
    explanation: `When the integrand is bounded between constants $m$ and $M$, the integral is bounded between the areas of two rectangles of width $b - a$ and heights $m$, $M$. This is the rectangle approximation in its crudest form, and it provides quick sanity checks on computed integrals.`,
    related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)
- [Average Value of a Function](!/calculus/integrals/formulas#average_value_of_a_function)`,
  },
 
  {
    name: 'Substitution Rule',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int f(g(x))\\, g'(x)\\, dx = \\int f(u)\\, du \\quad \\text{where } u = g(x)$$`,
    link: { label: 'Substitution (u-Substitution)', url: '/calculus/integrals/techniques#2' },
    explanation: `The reverse of the chain rule. When the integrand contains an inner function $g(x)$ multiplied by its derivative $g'(x)$, the substitution $u = g(x)$, $du = g'(x)\\, dx$ collapses the integral into a simpler form in $u$.`,
    variants: `Definite-integral form (with limit conversion): $$\\int_a^b f(g(x))\\, g'(x)\\, dx = \\int_{g(a)}^{g(b)} f(u)\\, du$$`,
    conditions: `$g$ must be differentiable on the integration interval and $f$ continuous on the range of $g$. For definite integrals, either convert the limits to $u$-values or substitute back to $x$ before evaluating.`,
    related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)`,
    related_definitions: `- [Bounds of Integration](!/calculus/definitions#bounds_of_integration)`,
  },
 
  {
    name: 'Integration by Parts',
    entity: 'indefinite_integral',
    category: 'Integration Rules',
    formula: `$$\\int u\\, dv = uv - \\int v\\, du$$`,
    link: { label: 'Integration by Parts', url: '/calculus/integrals/techniques#3' },
    explanation: `The reverse of the product rule. Splits an integrand into two factors $u$ and $dv$; differentiating $u$ and integrating $dv$ trades the original integral for a hopefully simpler one. The mnemonic LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) ranks function types by how readily they should be chosen as $u$ — earlier types make better choices.`,
    variants: `Definite-integral form: $$\\int_a^b u\\, dv = uv \\Big|_a^b - \\int_a^b v\\, du$$`,
    conditions: `$u$ and $v$ must be differentiable on the integration interval.`,
    related_formulas: `- [Substitution Rule](!/calculus/integrals/formulas#substitution_rule)
- [Antiderivative of Natural Log](!/calculus/integrals/formulas#antiderivative_of_natural_log)`,
  },
 
  {
    name: 'Total Unsigned Area',
    entity: 'signed_area',
    category: 'Integration Rules',
    formula: `$$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$`,
    link: { label: 'Signed Area Interpretation', url: '/calculus/integrals/definite#3' },
    explanation: `The definite integral computes signed area — regions above the $x$-axis count positively, regions below count negatively. To get total geometric area regardless of sign, integrate the absolute value of $f$. In practice this means splitting the interval where $f$ changes sign and integrating each piece with the appropriate sign.`,
    related_formulas: `- [Comparison Property (Integrals)](!/calculus/integrals/formulas#comparison_property_integrals)`,
    related_definitions: `- [Signed Area](!/calculus/definitions#signed_area)
- [Integrand](!/calculus/definitions#integrand)`,
  },
 
  // ─── STANDARD ANTIDERIVATIVES — ALGEBRAIC & LOGARITHMIC ──────────────────
 
  {
    name: 'Power Rule (Integrals)',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int x^n\\, dx = \\frac{x^{n+1}}{n + 1} + C \\quad (n \\neq -1)$$`,
    link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
    explanation: `Increase the exponent by one, then divide by the new exponent. The reverse of the differentiation power rule. The exception $n = -1$ is critical — that case produces the natural logarithm rather than $x^0/0$, which is undefined.`,
    conditions: `For non-integer $n$, the integrand $x^n$ may have domain restrictions (e.g., $x \\geq 0$ for $\\sqrt{x}$). The exception $n = -1$ is handled by the reciprocal antiderivative.`,
    related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
  },
 
  {
    name: 'Reciprocal Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$`,
    link: { label: 'Power Functions', url: '/calculus/integrals/special#2' },
    explanation: `The exceptional case of the power rule. The absolute value matters: for $x > 0$ the antiderivative is $\\ln x$, and for $x < 0$ it is $\\ln(-x)$ (since differentiating gives $1/x$ in either case). The two cases collapse into $\\ln|x|$, valid on either side of zero — but not across it.`,
    conditions: `Valid on intervals not containing $0$. The constant $C$ may differ on the positive and negative branches.`,
    related_formulas: `- [Power Rule (Integrals)](!/calculus/integrals/formulas#power_rule_integrals)
- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)`,
  },
 
  {
    name: 'Logarithmic Derivative Pattern',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C$$`,
    link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
    explanation: `When the integrand is a function divided by its own derivative — a "logarithmic derivative" pattern — the antiderivative is the logarithm of the function. This pattern appears constantly in disguise: $\\int \\tan x\\, dx$ becomes $\\int (\\sin x)/(\\cos x)\\, dx$, which has the form $-f'/f$ with $f = \\cos x$.`,
    conditions: `$f$ must be differentiable and nonzero on the integration interval.`,
    related_formulas: `- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
  },
 
  {
    name: 'Antiderivative of Natural Log',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Algebraic & Logarithmic',
    formula: `$$\\int \\ln x\\, dx = x \\ln x - x + C$$`,
    link: { label: 'Logarithmic Integrals', url: '/calculus/integrals/special#6' },
    explanation: `The natural logarithm has no elementary antiderivative obvious by inspection — it is found via integration by parts with $u = \\ln x$ and $dv = dx$. The result $x \\ln x - x$ is worth memorizing because $\\ln x$ appears constantly as a multiplicative factor inside more complex integrals.`,
    conditions: `Defined for $x > 0$.`,
    related_formulas: `- [Integration by Parts](!/calculus/integrals/formulas#integration_by_parts)
- [Reciprocal Antiderivative](!/calculus/integrals/formulas#reciprocal_antiderivative)`,
  },
 
  // ─── STANDARD ANTIDERIVATIVES — EXPONENTIAL, TRIG & INVERSE TRIG ─────────
 
  {
    name: 'Exponential Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int e^x\\, dx = e^x + C$$`,
    link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
    explanation: `The exponential function $e^x$ is its own antiderivative — the same property that makes it its own derivative. This is the defining feature of $e$: it is the unique base for which the function equals its own rate of change.`,
    variants: `With a linear argument: $$\\int e^{kx}\\, dx = \\frac{e^{kx}}{k} + C$$`,
    related_formulas: `- [General Exponential Antiderivative](!/calculus/integrals/formulas#general_exponential_antiderivative)`,
  },
 
  {
    name: 'General Exponential Antiderivative',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int a^x\\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0,\\, a \\neq 1)$$`,
    link: { label: 'Exponential Functions', url: '/calculus/integrals/special#3' },
    explanation: `For an arbitrary positive base, the antiderivative needs a $1/\\ln a$ correction factor — this compensates for the chain-rule factor $\\ln a$ that appears when differentiating $a^x$. Setting $a = e$ recovers the natural form, since $\\ln e = 1$.`,
    conditions: `$a > 0$ and $a \\neq 1$. (When $a = 1$, $a^x \\equiv 1$ and the antiderivative is just $x + C$.)`,
    related_formulas: `- [Exponential Antiderivative](!/calculus/integrals/formulas#exponential_antiderivative)`,
  },
 
  {
    name: 'Antiderivative of Sine',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sin x\\, dx = -\\cos x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `The negative sign reverses the negative in $(\\cos x)' = -\\sin x$. Integration recovers $\\cos x$ but with the opposite sign.`,
    related_formulas: `- [Antiderivative of Cosine](!/calculus/integrals/formulas#antiderivative_of_cosine)`,
  },
 
  {
    name: 'Antiderivative of Cosine',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\cos x\\, dx = \\sin x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `Direct reverse of $(\\sin x)' = \\cos x$. No sign correction needed.`,
    related_formulas: `- [Antiderivative of Sine](!/calculus/integrals/formulas#antiderivative_of_sine)`,
  },
 
  {
    name: 'Antiderivative of Secant Squared',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec^2 x\\, dx = \\tan x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `Reverses $(\\tan x)' = \\sec^2 x$. Comes up constantly because $\\sec^2 x$ appears as the result of differentiating any tangent expression via the chain rule.`,
    related_formulas: `- [Antiderivative of Cosecant Squared](!/calculus/integrals/formulas#antiderivative_of_cosecant_squared)`,
  },
 
  {
    name: 'Antiderivative of Cosecant Squared',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc^2 x\\, dx = -\\cot x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `Reverses $(\\cot x)' = -\\csc^2 x$, so the antiderivative of $\\csc^2 x$ picks up the opposite sign.`,
    related_formulas: `- [Antiderivative of Secant Squared](!/calculus/integrals/formulas#antiderivative_of_secant_squared)`,
  },
 
  {
    name: 'Antiderivative of Sec Tan',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec x \\tan x\\, dx = \\sec x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `Reverses $(\\sec x)' = \\sec x \\tan x$. Recognize the product $\\sec x \\tan x$ as a derivative pattern, not as something requiring substitution or parts.`,
    related_formulas: `- [Antiderivative of Csc Cot](!/calculus/integrals/formulas#antiderivative_of_csc_cot)`,
  },
 
  {
    name: 'Antiderivative of Csc Cot',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc x \\cot x\\, dx = -\\csc x + C$$`,
    link: { label: 'Trigonometric Functions', url: '/calculus/integrals/special#4' },
    explanation: `Reverses $(\\csc x)' = -\\csc x \\cot x$, so the antiderivative carries the opposite sign.`,
    related_formulas: `- [Antiderivative of Sec Tan](!/calculus/integrals/formulas#antiderivative_of_sec_tan)`,
  },
 
  {
    name: 'Antiderivative of Tangent',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\tan x\\, dx = \\ln|\\sec x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    explanation: `Rewrite $\\tan x = \\sin x / \\cos x$, recognize as $-f'(x)/f(x)$ with $f = \\cos x$, and apply the logarithmic derivative pattern. Result: $-\\ln|\\cos x| + C$, equivalently $\\ln|\\sec x| + C$.`,
    variants: `Equivalent form: $$\\int \\tan x\\, dx = -\\ln|\\cos x| + C$$`,
    related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)
- [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)`,
  },
 
  {
    name: 'Antiderivative of Cotangent',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\cot x\\, dx = \\ln|\\sin x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    explanation: `Rewrite $\\cot x = \\cos x / \\sin x$, recognize as $f'(x)/f(x)$ with $f = \\sin x$, apply the logarithmic derivative pattern.`,
    related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)
- [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)`,
  },
 
  {
    name: 'Antiderivative of Secant',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\sec x\\, dx = \\ln|\\sec x + \\tan x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    explanation: `Less obvious than the other trig integrals. The trick: multiply $\\sec x$ by $(\\sec x + \\tan x)/(\\sec x + \\tan x)$ — a clever form of $1$. The numerator becomes $\\sec^2 x + \\sec x \\tan x$, which is exactly the derivative of the denominator $\\sec x + \\tan x$. The integrand is now in $f'/f$ form.`,
    related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Cosecant](!/calculus/integrals/formulas#antiderivative_of_cosecant)
- [Antiderivative of Tangent](!/calculus/integrals/formulas#antiderivative_of_tangent)`,
  },
 
  {
    name: 'Antiderivative of Cosecant',
    entity: 'indefinite_integral',
    category: 'Standard Antiderivatives — Exponential, Trig & Inverse Trig',
    formula: `$$\\int \\csc x\\, dx = \\ln|\\csc x - \\cot x| + C$$`,
    link: { label: 'Integrals Leading to Logarithms', url: '/calculus/integrals/special#7' },
    explanation: `Mirror of the secant trick: multiply $\\csc x$ by $(\\csc x - \\cot x)/(\\csc x - \\cot x)$. The numerator becomes $\\csc^2 x - \\csc x \\cot x$, the derivative of the denominator.`,
    variants: `Equivalent form: $$\\int \\csc x\\, dx = -\\ln|\\csc x + \\cot x| + C$$`,
    related_formulas: `- [Logarithmic Derivative Pattern](!/calculus/integrals/formulas#logarithmic_derivative_pattern)
- [Antiderivative of Secant](!/calculus/integrals/formulas#antiderivative_of_secant)
- [Antiderivative of Cotangent](!/calculus/integrals/formulas#antiderivative_of_cotangent)`,
  },
 
  // ─── INVERSE TRIG, SYMMETRY, IMPROPER, AVERAGE ──────────────────────────
 
  {
    name: 'Arctangent Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{a^2 + x^2}\\, dx = \\frac{1}{a} \\arctan\\frac{x}{a} + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    explanation: `Reverses the derivative of arctangent. The general $a$ form is more useful than the special case $a = 1$ — most integrals encountered have an arbitrary constant in place of $1$, and completing the square often produces a quadratic of the form $a^2 + (x - h)^2$ that fits this template.`,
    variants: `Special case $a = 1$: $$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$`,
    conditions: `$a > 0$.`,
    related_formulas: `- [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)
- [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
  },
 
  {
    name: 'Arcsine Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\, dx = \\arcsin\\frac{x}{a} + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    explanation: `Reverses the derivative of arcsine. The square root structure $\\sqrt{a^2 - x^2}$ also appears as the trigger for trigonometric substitution $x = a\\sin\\theta$ — the two approaches give the same result.`,
    variants: `Special case $a = 1$: $$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx = \\arcsin x + C$$`,
    conditions: `$a > 0$ and $|x| < a$.`,
    related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
- [Arcsecant Form](!/calculus/integrals/formulas#arcsecant_form)`,
  },
 
  {
    name: 'Arcsecant Form',
    entity: 'indefinite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int \\frac{1}{x \\sqrt{x^2 - 1}}\\, dx = \\text{arcsec}\\,|x| + C$$`,
    link: { label: 'Inverse Trigonometric Forms', url: '/calculus/integrals/special#5' },
    explanation: `Reverses the derivative of arcsecant. The absolute value handles both branches of the arcsecant function.`,
    conditions: `$|x| > 1$.`,
    related_formulas: `- [Arctangent Form](!/calculus/integrals/formulas#arctangent_form)
- [Arcsine Form](!/calculus/integrals/formulas#arcsine_form)`,
  },
 
  {
    name: 'Even Function Symmetry',
    entity: 'definite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_{-a}^{a} f(x)\\, dx = 2 \\int_0^a f(x)\\, dx \\quad \\text{if } f \\text{ is even}$$`,
    link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
    explanation: `An even function $f(-x) = f(x)$ has graph symmetric about the $y$-axis, so the area on $[-a, 0]$ equals the area on $[0, a]$. Compute one and double it.`,
    conditions: `$f(-x) = f(x)$ for all $x \\in [-a, a]$. Examples: $x^2$, $\\cos x$, $|x|$.`,
    related_formulas: `- [Odd Function Symmetry](!/calculus/integrals/formulas#odd_function_symmetry)`,
  },
 
  {
    name: 'Odd Function Symmetry',
    entity: 'definite_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_{-a}^{a} f(x)\\, dx = 0 \\quad \\text{if } f \\text{ is odd}$$`,
    link: { label: 'Symmetry Shortcuts', url: '/calculus/integrals/evaluating#6' },
    explanation: `An odd function $f(-x) = -f(x)$ has graph symmetric through the origin, so the signed area on $[-a, 0]$ exactly cancels the signed area on $[0, a]$. The total integral is zero — without computing anything.`,
    conditions: `$f(-x) = -f(x)$ for all $x \\in [-a, a]$. Examples: $x^3$, $\\sin x$, $\\tan x$.`,
    related_formulas: `- [Even Function Symmetry](!/calculus/integrals/formulas#even_function_symmetry)`,
  },
 
  {
    name: 'Improper Integral (Infinite Limits)',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_a^{\\infty} f(x)\\, dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\, dx$$`,
    link: { label: 'Infinite Limits of Integration', url: '/calculus/integrals/improper#2' },
    explanation: `Definite integrals are defined over finite intervals; integration to $\\infty$ is defined as a limit of finite integrals. The improper integral converges if this limit is finite, diverges otherwise. Symmetric definitions handle the $-\\infty$ case and integrals with both bounds at infinity (split at any finite point and require both halves to converge).`,
    variants: `Lower limit infinite: $$\\int_{-\\infty}^b f(x)\\, dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)\\, dx$$ Both limits infinite (split at any $c$): $$\\int_{-\\infty}^{\\infty} f(x)\\, dx = \\int_{-\\infty}^c f(x)\\, dx + \\int_c^{\\infty} f(x)\\, dx$$`,
    conditions: `For the both-infinite case, both component integrals must converge independently — it is not enough for the symmetric limit $\\lim_{R \\to \\infty} \\int_{-R}^R$ to exist.`,
    related_formulas: `- [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)
- [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
    related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
  },
 
  {
    name: 'Improper Integral (Discontinuous Integrand)',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_a^b f(x)\\, dx = \\lim_{t \\to b^-} \\int_a^t f(x)\\, dx \\quad \\text{(asymptote at } b\\text{)}$$`,
    link: { label: 'Discontinuous Integrands', url: '/calculus/integrals/improper#3' },
    explanation: `When the integrand has a vertical asymptote at an endpoint, integrate to a finite cutoff and take the limit as the cutoff approaches the asymptote. For an asymptote at the left endpoint, the limit runs $t \\to a^+$. For an interior asymptote at $c$, split the integral at $c$ and take both one-sided limits independently.`,
    variants: `Left endpoint asymptote: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to a^+} \\int_t^b f(x)\\, dx$$ Interior asymptote at $c$: $$\\int_a^b f(x)\\, dx = \\lim_{t \\to c^-} \\int_a^t f(x)\\, dx + \\lim_{s \\to c^+} \\int_s^b f(x)\\, dx$$`,
    conditions: `For interior asymptotes, both one-sided limits must exist independently. Failing to split at the asymptote produces wrong answers — sometimes "computing" finite values for divergent integrals.`,
    related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
- [p-Test for Improper Integrals](!/calculus/integrals/formulas#p_test_for_improper_integrals)`,
    related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)
- [Asymptote](!/calculus/definitions#asymptote)`,
  },
 
  {
    name: 'p-Test for Improper Integrals',
    entity: 'improper_integral',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$\\int_1^{\\infty} \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p > 1 \\\\ \\text{diverges} & p \\leq 1 \\end{cases} \\qquad \\int_0^1 \\frac{1}{x^p}\\, dx \\;\\begin{cases} \\text{converges} & p < 1 \\\\ \\text{diverges} & p \\geq 1 \\end{cases}$$`,
    link: { label: 'The p-Test', url: '/calculus/integrals/improper#5' },
    explanation: `The integrals of $1/x^p$ are the canonical benchmarks for comparing other improper integrals. The boundary case $p = 1$ — which gives $\\ln x$ as an antiderivative — always diverges, both at infinity and at zero. Convergence at infinity requires fast enough decay ($p > 1$); convergence at zero requires slow enough blow-up ($p < 1$).`,
    related_formulas: `- [Improper Integral (Infinite Limits)](!/calculus/integrals/formulas#improper_integral_infinite_limits)
- [Improper Integral (Discontinuous Integrand)](!/calculus/integrals/formulas#improper_integral_discontinuous_integrand)`,
    related_definitions: `- [Improper Integral](!/calculus/definitions#improper_integral)`,
  },
 
  {
    name: 'Average Value of a Function',
    entity: 'average_value_of_a_function',
    category: 'Inverse Trig, Symmetry, Improper, Average',
    formula: `$$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$`,
    link: { label: 'Average Value of a Function', url: '/calculus/integrals/definite#7' },
    explanation: `The continuous analog of an arithmetic mean. The integral computes the total accumulated value, and dividing by the interval length yields the average. Geometrically, $f_{\\text{avg}}$ is the height of the rectangle over $[a, b]$ that has the same area as the region under $f$. The Mean Value Theorem for Integrals guarantees a continuous $f$ actually attains $f_{\\text{avg}}$ at some point $c \\in (a, b)$.`,
    conditions: `$f$ must be integrable on $[a, b]$ and $a \\neq b$. The Mean Value Theorem for Integrals also requires $f$ continuous on $[a, b]$.`,
    related_formulas: `- [Bounding Property (Integrals)](!/calculus/integrals/formulas#bounding_property_integrals)`,
    related_definitions: `- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function)
- [Definite Integral](!/calculus/definitions#definite_integral)`,
  },

];

export default calculusFormulasList;