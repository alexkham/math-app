import React from 'react'

export default function LimitsRulesData() {

    const limitRulesData = {
        "Basic Limit Laws": [
          {
            id: 1,
            law: "Constant Rule",
            formula: "$\\lim_{x \\to a} c = c$",
            explanation: "The limit of a constant is the constant itself"
          },
          {
            id: 2,
            law: "Identity Rule",
            formula: "$\\lim_{x \\to a} x = a$",
            explanation: "The limit of x as x approaches a is a"
          },
          {
            id: 3,
            law: "Sum Rule",
            formula: "$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$",
            explanation: "The limit of a sum is the sum of the limits"
          },
          {
            id: 4,
            law: "Difference Rule",
            formula: "$\\lim_{x \\to a} [f(x) - g(x)] = \\lim_{x \\to a} f(x) - \\lim_{x \\to a} g(x)$",
            explanation: "The limit of a difference is the difference of the limits"
          },
          {
            id: 5,
            law: "Constant Multiple Rule",
            formula: "$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$",
            explanation: "Constants can be factored out of limits"
          },
          {
            id: 6,
            law: "Product Rule",
            formula: "$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$",
            explanation: "The limit of a product is the product of the limits"
          },
          {
            id: 7,
            law: "Quotient Rule",
            formula: "$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}$",
            explanation: "The limit of a quotient is the quotient of limits, provided denominator limit is not zero"
          }
        ],
       
        "Power and Root Limits": [
          {
            id: 8,
            law: "Power Rule",
            formula: "$\\lim_{x \\to a} [f(x)]^n = [\\lim_{x \\to a} f(x)]^n$",
            explanation: "The limit of a power is the power of the limit"
          },
          {
            id: 9,
            law: "Root Rule",
            formula: "$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$",
            explanation: "The limit of a root is the root of the limit, provided the root exists"
          },
          {
            id: 10,
            law: "Polynomial Rule",
            formula: "$\\lim_{x \\to a} P(x) = P(a)$",
            explanation: "For polynomial P(x), substitute the value directly"
          },
          {
            id: 11,
            law: "Rational Function Rule",
            formula: "$\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{P(a)}{Q(a)}$",
            explanation: "For rational functions, substitute directly if denominator is not zero"
          }
        ],
       
        "Special Theorems": [
          {
            id: 12,
            law: "Squeeze Theorem",
            formula: "If $g(x) \\leq f(x) \\leq h(x)$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$",
            explanation: "Function squeezed between two functions with same limit has that limit"
          },
          {
            id: 13,
            law: "Absolute Value Rule",
            formula: "$\\lim_{x \\to a} |f(x)| = |\\lim_{x \\to a} f(x)|$",
            explanation: "The limit of absolute value is absolute value of limit, if limit exists"
          },
          {
            id: 14,
            law: "Composition Rule",
            formula: "If $\\lim_{x \\to a} g(x) = L$ and $f$ is continuous at $L$, then $\\lim_{x \\to a} f(g(x)) = f(L)$",
            explanation: "Limit of composition when inner function has limit and outer is continuous"
          }
        ],
       
        "Trigonometric Limits": [
          {
            id: 15,
            law: "Fundamental Sine Limit",
            formula: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
            explanation: "The fundamental trigonometric limit for sine"
          },
          {
            id: 16,
            law: "Fundamental Cosine Limit",
            formula: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$",
            explanation: "The fundamental trigonometric limit for cosine"
          },
          {
            id: 17,
            law: "Alternative Cosine Limit",
            formula: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$",
            explanation: "Alternative form of the cosine limit"
          },
          {
            id: 18,
            law: "Tangent Limit",
            formula: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$",
            explanation: "The fundamental trigonometric limit for tangent"
          }
        ],
       
        "Exponential and Logarithmic Limits": [
          {
            id: 19,
            law: "Natural Exponential Definition",
            formula: "$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$",
            explanation: "The definition of e as a limit"
          },
          {
            id: 20,
            law: "Alternative e Definition",
            formula: "$\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$",
            explanation: "Alternative form for the definition of e"
          },
          {
            id: 21,
            law: "Exponential Limit",
            formula: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
            explanation: "Fundamental limit involving natural exponential"
          },
          {
            id: 22,
            law: "General Exponential Limit",
            formula: "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$",
            explanation: "Fundamental limit for exponential with base a"
          },
          {
            id: 23,
            law: "Natural Logarithm Limit",
            formula: "$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$",
            explanation: "Fundamental limit involving natural logarithm"
          },
          {
            id: 24,
            law: "General Logarithm Limit",
            formula: "$\\lim_{x \\to 0} \\frac{\\log_a(1 + x)}{x} = \\frac{1}{\\ln a}$",
            explanation: "Fundamental limit for logarithm with base a"
          }
        ]
       };

       
  return (
    <div>LimitsRulesData</div>
  )
}
