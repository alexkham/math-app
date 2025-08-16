// const quadraticExplanations = {
//     linear: [
//       { text: "Linear equations have the form ax + b = 0", math: "ax + b = 0" },
//       { text: "To solve, isolate x by subtracting b from both sides", math: "ax = -b" },
//       { text: "Then divide both sides by a", math: "x = -\\frac{b}{a}" }
//     ],
//     real: [
//       { text: "The quadratic formula is used when we have an equation in the form ax² + bx + c = 0", math: "ax^2 + bx + c = 0" },
//       { text: "First we calculate the discriminant (b² - 4ac)", math: "\\Delta = b^2 - 4ac" },
//       { text: "When the discriminant is positive, we have two real solutions", math: "\\Delta > 0" },
//       { text: "We can find these solutions using the quadratic formula", math: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
//       { text: "The '+' gives us x₁ and the '-' gives us x₂", math: "x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}" }
//     ],
//     complex: [
//       { text: "When the discriminant is negative, the equation has complex solutions", math: "\\Delta < 0" },
//       { text: "Complex numbers have a real part and an imaginary part", math: "x = a + bi" },
//       { text: "The real part comes from the term -b/2a", math: "\\text{Re}(x) = -\\frac{b}{2a}" },
//       { text: "The imaginary part comes from the square root of the negative discriminant", math: "\\text{Im}(x) = \\frac{\\sqrt{|\\Delta|}}{2a}i" },
//       { text: "This gives us two complex conjugate solutions", math: "x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{|\\Delta|}}{2a}i" }
//     ],
//     equal: [
//       { text: "When the discriminant equals zero, we have exactly one solution", math: "\\Delta = 0" },
//       { text: "This means the quadratic equation has a repeated root", math: "x = -\\frac{b}{2a}" },
//       { text: "This occurs when the parabola touches the x-axis at exactly one point", math: "(x + \\frac{b}{2a})^2 = 0" }
//     ]
//   };
  
//   export default quadraticExplanations;


export const generateQuadraticExplanations = (a, b, c, discriminant) => ({
    linear: {
        initial: [
            { text: `Our linear equation is:`, math: `${b}x + ${c} = 0` },
            { text: "Subtracting the constant term:", math: `${b}x = ${-c}` },
            { text: "Dividing both sides by the coefficient:", math: `x = ${(-c/b).toFixed(4)}` }
        ]
    },
    real: {
        initial: [
            { text: "Starting with the quadratic equation:", math: `${a}x^2 + ${b}x + ${c} = 0` },
            { text: "Calculating the discriminant:", 
              math: `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}` },
            { text: "Since Δ > 0, we have two distinct real solutions:", 
              math: `x = \\frac{-${b} \\pm \\sqrt{${discriminant}}}{2(${a})}` }
        ]
    },
    complex: {
        // Initial explanation only shows why there are no real solutions
        initial: [
            { text: "Starting with the quadratic equation:", math: `${a}x^2 + ${b}x + ${c} = 0` },
            { text: "Calculating the discriminant:", 
              math: `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}` },
            { text: "Since Δ < 0, this equation has no real number solutions. However, it does have complex solutions which can be shown by clicking the button below." }
        ],
        // Detailed explanation shown only after clicking "Show complex solutions"
        detailed: [
            { text: "For complex solutions, we use the same quadratic formula, but now we'll work with the square root of a negative number:", 
              math: `x = \\frac{-${b} \\pm \\sqrt{${discriminant}}}{2(${a})}` },
            { text: "The real part comes from the fraction:", 
              math: `\\text{Re}(x) = -\\frac{${b}}{2(${a})} = ${(-b/(2*a)).toFixed(4)}` },
            { text: "The imaginary part comes from the square root of the absolute value of the discriminant:", 
              math: `\\text{Im}(x) = \\frac{\\sqrt{${Math.abs(discriminant)}}}{2(${a})} = ${(Math.sqrt(Math.abs(discriminant))/(2*a)).toFixed(4)}` }
        ]
    },
    equal: {
        initial: [
            { text: "Starting with the quadratic equation:", math: `${a}x^2 + ${b}x + ${c} = 0` },
            { text: "Calculating the discriminant:", 
              math: `\\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}` },
            { text: "Since Δ = 0, we have exactly one solution (a repeated root):", 
              math: `x = -\\frac{${b}}{2(${a})} = ${(-b/(2*a)).toFixed(4)}` }
        ]
    }
});

export default generateQuadraticExplanations;