const algebraTermsList = [

// {
//   name: "Discriminant",
//   formula: "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$.",
//   link: { label: "Quadratic Equations", url: "/algebra/equations/quadratic" },
//   fields: {
//     "what it determines": {
//       text: `$\\Delta > 0$: two distinct real solutions
// $\\Delta = 0$: one repeated real solution
// $\\Delta < 0$: no real solutions (two complex conjugate solutions)`,
//       illustrations: [
//         {
//           src: `<svg viewBox="0 0 660 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
//   <rect width="660" height="180" fill="#f8fafc" rx="4"/>
//   <g transform="translate(10,10)">
//     <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#2563eb">Δ &gt; 0</text>
//     <path d="M10 160 Q55 10 100 80 Q145 150 190 30" fill="none" stroke="#2563eb" stroke-width="2.5"/>
//     <line x1="10" y1="110" x2="190" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
//     <circle cx="48" cy="110" r="5" fill="#e24b4a"/><circle cx="158" cy="110" r="5" fill="#e24b4a"/>
//     <text x="48" y="132" text-anchor="middle" font-size="11" fill="#e24b4a">x₁</text>
//     <text x="158" y="132" text-anchor="middle" font-size="11" fill="#e24b4a">x₂</text>
//   </g>
//   <g transform="translate(230,10)">
//     <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#639922">Δ = 0</text>
//     <path d="M10 160 Q55 10 100 80 Q145 150 190 30" fill="none" stroke="#639922" stroke-width="2.5"/>
//     <line x1="10" y1="80" x2="190" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
//     <circle cx="100" cy="80" r="5" fill="#e24b4a"/>
//     <text x="100" y="102" text-anchor="middle" font-size="11" fill="#e24b4a">x₀</text>
//   </g>
//   <g transform="translate(450,10)">
//     <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#d85a30">Δ &lt; 0</text>
//     <path d="M10 140 Q55 30 100 80 Q145 130 190 20" fill="none" stroke="#d85a30" stroke-width="2.5"/>
//     <line x1="10" y1="10" x2="190" y2="10" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
//     <text x="100" y="165" text-anchor="middle" font-size="11" fill="#94a3b8">no real roots</text>
//   </g>
// </svg>`,
//           alt: "Three cases of the discriminant",
//           caption: "How Δ determines the number of real roots"
//         }
//       ],
//       links: [
//         { label: "Khan Academy — Discriminant", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:quadratic-formula-a1/v/discriminant-for-types-of-solutions-for-a-quadratic" },
//         { label: "Wikipedia — Discriminant", url: "https://en.wikipedia.org/wiki/Discriminant" },
//         { label: "home", url: "/"}
//       ]
//     },
//     "examples": `$x^2 - 5x + 6 = 0$: $\\Delta = 25 - 24 = 1 > 0$ — two real roots
// $x^2 - 6x + 9 = 0$: $\\Delta = 36 - 36 = 0$ — one repeated root
// $x^2 + x + 1 = 0$: $\\Delta = 1 - 4 = -3 < 0$ — no real roots`
//   },
//   category: "Mock"
// },
//   {
//     name: "Square of Sum",
//     formula: "$(a + b)^2 = a^2 + 2ab + b^2$",
//     fields: {
//       "visual proof": {
//         text: `The area of a square with side $(a+b)$ can be split into four regions, proving the identity geometrically.`,
//         illustrations: [
//           {
//             src: `<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
//   <rect width="320" height="320" fill="#f8fafc" rx="4"/>
//   <g transform="translate(40,40)">
//     <rect x="0" y="0" width="240" height="240" fill="none" stroke="#334155" stroke-width="2"/>
//     <rect x="0" y="0" width="150" height="150" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="1.5"/>
//     <text x="75" y="82" text-anchor="middle" font-size="20" font-weight="600" fill="#2563eb">a²</text>
//     <rect x="150" y="0" width="90" height="150" fill="#16a34a" fill-opacity="0.12" stroke="#16a34a" stroke-width="1.5"/>
//     <text x="195" y="82" text-anchor="middle" font-size="16" font-weight="600" fill="#16a34a">ab</text>
//     <rect x="0" y="150" width="150" height="90" fill="#16a34a" fill-opacity="0.12" stroke="#16a34a" stroke-width="1.5"/>
//     <text x="75" y="202" text-anchor="middle" font-size="16" font-weight="600" fill="#16a34a">ab</text>
//     <rect x="150" y="150" width="90" height="90" fill="#d85a30" fill-opacity="0.12" stroke="#d85a30" stroke-width="1.5"/>
//     <text x="195" y="202" text-anchor="middle" font-size="20" font-weight="600" fill="#d85a30">b²</text>
//     <text x="75" y="-10" text-anchor="middle" font-size="14" fill="#334155">a</text>
//     <text x="195" y="-10" text-anchor="middle" font-size="14" fill="#334155">b</text>
//     <text x="-14" y="82" text-anchor="middle" font-size="14" fill="#334155">a</text>
//     <text x="-14" y="202" text-anchor="middle" font-size="14" fill="#334155">b</text>
//   </g>
// </svg>`,
//             alt: "Geometric proof of square of sum",
//             caption: "Area breakdown: a² + ab + ab + b² = a² + 2ab + b²"
//           }
//         ],
//         links: [
//           { label: "Visual proof on Math is Fun", url: "https://www.mathsisfun.com/algebra/special-binomial-products.html" }
//         ]
//       },
//       "examples": `$(3 + 2)^2 = 9 + 12 + 4 = 25$
// $(x + 5)^2 = x^2 + 10x + 25$
// $(2a + 3b)^2 = 4a^2 + 12ab + 9b^2$`
//     },
//     category: "Mock"
//   },
//   {
//     name: "Logarithmic Scale",
//     formula: "Scale where values are spaced by powers of base $b$: positions proportional to $\\log_b(x)$ rather than $x$.",
//     fields: {
//       "how it works": [
//         {
//           text: `On a logarithmic scale, equal distances represent equal ratios rather than equal differences. Moving one unit always means multiplying by the same factor.`,
//           illustrations: [
//             {
//               src: `<svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
//   <rect width="600" height="120" fill="#f8fafc" rx="4"/>
//   <text x="300" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="#334155">Linear vs Logarithmic Scale</text>
//   <g transform="translate(50,40)">
//     <line x1="0" y1="0" x2="500" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
//     <line x1="0" y1="-6" x2="0" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="50" y1="-6" x2="50" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="100" y1="-6" x2="100" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="500" y1="-6" x2="500" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <text x="0" y="-12" text-anchor="middle" font-size="11" fill="#334155">0</text>
//     <text x="50" y="-12" text-anchor="middle" font-size="11" fill="#334155">100</text>
//     <text x="100" y="-12" text-anchor="middle" font-size="11" fill="#334155">200</text>
//     <text x="500" y="-12" text-anchor="middle" font-size="11" fill="#334155">1000</text>
//     <text x="-30" y="4" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="600">LIN</text>
//   </g>
//   <g transform="translate(50,85)">
//     <line x1="0" y1="0" x2="500" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
//     <line x1="0" y1="-6" x2="0" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="166" y1="-6" x2="166" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="332" y1="-6" x2="332" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <line x1="500" y1="-6" x2="500" y2="6" stroke="#334155" stroke-width="1.5"/>
//     <text x="0" y="-12" text-anchor="middle" font-size="11" fill="#334155">1</text>
//     <text x="166" y="-12" text-anchor="middle" font-size="11" fill="#334155">10</text>
//     <text x="332" y="-12" text-anchor="middle" font-size="11" fill="#334155">100</text>
//     <text x="500" y="-12" text-anchor="middle" font-size="11" fill="#334155">1000</text>
//     <text x="-30" y="4" text-anchor="middle" font-size="10" fill="#d85a30" font-weight="600">LOG</text>
//   </g>
// </svg>`,
//               alt: "Linear vs logarithmic scale comparison",
//               caption: "Equal spacing on log scale = equal ratios (×10)"
//             }
//           ]
//         },
//         `Common logarithmic scales include: pH scale, Richter scale, decibels, and musical octaves.`
//       ],
//       "applications": {
//         text: `Used extensively in scientific measurement, data visualization, and signal processing. Logarithmic scales compress wide-ranging data into manageable visual space.`,
//         links: [
//           { label: "Wikipedia — Log scale", url: "https://en.wikipedia.org/wiki/Logarithmic_scale" },
//           { label: "Desmos — Log graphing", url: "https://www.desmos.com/calculator" },
//           { label: "Better Explained — Intuition", url: "https://betterexplained.com/articles/using-logs-in-the-real-world/" }
//         ]
//       }
//     },
//     category: "Mock"
//   },

  // NEW CATEGORY: "Equations"
// 17 entries for algebraTermsList


// Equations Category — 17 Definition Entries (Upgraded)

{
  name: "Equation",
  formula: "A statement asserting that two mathematical expressions have the same value, written with the $=$ sign between them.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "key distinction": {
      text: `An equation makes a claim that can be tested — true, false, or conditionally true. An expression like $3x + 2$ makes no claim and cannot be solved. The presence of $=$ is what turns a mathematical phrase into a solvable condition.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Two-column comparison. Left: an expression "$3x + 2$" with label "no claim — cannot be solved." Right: an equation "$3x + 2 = 11$" with label "claim — solvable, $x = 3$." An equals sign in the center acts as the dividing element, emphasized as the key difference.]`,
      //     alt: "Expression vs equation",
      //     caption: "The equals sign turns a phrase into a solvable claim"
      //   }
      // ],
      links: [
        { label: "What an Equation Is", url: "/algebra/equations#1" }
      ]
    },
    "examples": `$2x + 1 = 9$ — conditional, true only when $x = 4$
$3 + 4 = 7$ — unconditionally true
$3 + 4 = 8$ — unconditionally false
$x^2 - 5x + 6 = 0$ — conditional, true when $x = 2$ or $x = 3$`,
    "related concepts": `
- [Expression](!/algebra/definitions#expression)
- [Variable](!/algebra/definitions#variable)
- [Solution](!/algebra/definitions#solution)
- [Conditional Equation](!/algebra/definitions#conditional_equation)
- [Identity](!/algebra/definitions#identity)
- [Contradiction](!/algebra/definitions#contradiction)`
  },
  category: "Equations"
},

{
  name: "Expression",
  formula: "A mathematical phrase built from numbers, variables, and operations that represents a quantity but makes no assertion about equality.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "key distinction": `Expressions are evaluated or simplified. Equations are solved. The expression $2x + 1$ can be factored, expanded, or evaluated at specific values of $x$, but asking "what is $x$?" makes no sense without an equation. Placing $2x + 1 = 9$ creates the condition that gives $x$ a definite value.`,
    "examples": `$3x + 7$ — polynomial expression
$\\frac{x+1}{x-2}$ — rational expression
$\\sqrt{x^2 + 4}$ — radical expression
$2x + 1$ — this is NOT an equation`,
    "related concepts": `
- [Equation](!/algebra/definitions#equation)
- [Variable](!/algebra/definitions#variable)
- [Coefficient](!/algebra/definitions#coefficient)
- [What an Equation Is](!/algebra/equations#1)`
  },
  category: "Equations"
},

{
  name: "Variable",
  formula: "A symbol, typically a letter, that represents an unknown quantity or a quantity that can change.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "usage": `In equations, variables stand for unknowns: the goal is to find which values make the equation true. In expressions and functions, variables represent inputs that can take a range of values. Convention reserves $x$, $y$, $z$ for unknowns, $a$, $b$, $c$ for constants, and $n$, $k$, $i$ for integers.`,
    "examples": `In $2x + 1 = 9$: the variable is $x$
In $ax^2 + bx + c = 0$: the variable is $x$; the letters $a$, $b$, $c$ are parameters
In $f(x) = x^2$: $x$ is the input variable`,
    "related concepts": `
- [Equation](!/algebra/definitions#equation)
- [Expression](!/algebra/definitions#expression)
- [Coefficient](!/algebra/definitions#coefficient)
- [Solution](!/algebra/definitions#solution)`
  },
  category: "Equations"
},

{
  name: "Solution",
  formula: "A value of the variable that makes both sides of an equation equal when substituted.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "verification": `A candidate is confirmed as a solution by direct substitution. For $2x + 1 = 9$, substituting $x = 4$ gives $2(4) + 1 = 9$, which is true. Substituting $x = 3$ gives $2(3) + 1 = 7 \\neq 9$, so $x = 3$ is not a solution.`,
    "terminology": `Also called a root of the equation. The terms are interchangeable for polynomial equations. An equation may have one solution, finitely many, infinitely many, or none at all.`,
    "related concepts": `
- [Solution Set](!/algebra/definitions#solution_set)
- [Extraneous Solution](!/algebra/definitions#extraneous_solution)
- [Conditional Equation](!/algebra/definitions#conditional_equation)
- [Solutions and Solution Sets](!/algebra/equations#2)`
  },
  category: "Equations"
},

{
  name: "Solution Set",
  formula: "The collection of all values that satisfy an equation, written in set notation.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "notation": `Curly braces list elements: $\\{-2, 2\\}$ for $x^2 = 4$. Set-builder notation describes conditions: $\\{x \\in \\mathbb{R} : 2x + 1 = 9\\} = \\{4\\}$. The empty set $\\emptyset$ indicates no solutions exist.`,
    "examples": `$x^2 = 4 \\Rightarrow \\{-2, 2\\}$
$2x + 1 = 9 \\Rightarrow \\{4\\}$
$x^2 = -1$ over $\\mathbb{R} \\Rightarrow \\emptyset$
$2(x+1) = 2x + 2 \\Rightarrow \\mathbb{R}$ (all real numbers)`,
    "related concepts": `
- [Solution](!/algebra/definitions#solution)
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — same solution set
- [Contradiction](!/algebra/definitions#contradiction) — empty solution set
- [Identity](!/algebra/definitions#identity) — solution set is all reals
- [Solutions and Solution Sets](!/algebra/equations#2)`
  },
  category: "Equations"
},

{
  name: "Extraneous Solution",
  formula: "A value that satisfies a transformed equation but not the original, introduced by non-reversible algebraic steps.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "causes": `Squaring both sides: $x = 3$ becomes $x^2 = 9$, admitting the false solution $x = -3$. Clearing denominators: multiplying by an expression that equals zero at certain values. These operations expand the solution set because they cannot be undone uniquely.`,
    "prevention": `Every candidate obtained through squaring, clearing denominators, or raising to an even power must be substituted back into the original equation. Any value that fails verification or violates a domain restriction is extraneous and rejected.`,
    "related concepts": `
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — non-reversible steps break equivalence
- [Domain Restriction](!/algebra/definitions#domain_restriction)
- [Radical Equation](!/algebra/definitions#radical_equation) — common source
- [Equivalent Equations](!/algebra/equations#4)
- [Why Extraneous Solutions Appear](!/algebra/roots/equations#5)`
  },
  category: "Equations"
},

{
  name: "Conditional Equation",
  formula: "An equation that is true for specific values of the variable and false for all others.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "properties": `Most equations encountered in algebra are conditional. Solving means finding the finite set of values where the equation holds. The number of solutions depends on the equation's degree and type.`,
    "examples": `$5x - 3 = 12$ — true only when $x = 3$
$x^2 - 5x + 6 = 0$ — true when $x = 2$ or $x = 3$
$\\sin(x) = 0$ — true when $x = n\\pi$ for any integer $n$`,
    "related concepts": `
- [Identity](!/algebra/definitions#identity) — true for all values
- [Contradiction](!/algebra/definitions#contradiction) — true for no values
- [Solution Set](!/algebra/definitions#solution_set)
- [Types of Equations by Solution Behavior](!/algebra/equations#3)`
  },
  category: "Equations"
},

{
  name: "Identity",
  formula: "An equation that holds true for every permissible value of the variable.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "key distinction": `Identities are not solved — they are verified. They express structural equivalences between expressions rather than constraints on unknowns. Expanding, factoring, or applying known rules confirms them.`,
    "examples": `$2(x + 1) = 2x + 2$ — distributive property
$(a + b)^2 = a^2 + 2ab + b^2$ — algebraic identity
$\\sin^2(x) + \\cos^2(x) = 1$ — trigonometric identity`,
    "related concepts": `
- [Conditional Equation](!/algebra/definitions#conditional_equation)
- [Contradiction](!/algebra/definitions#contradiction)
- [Algebraic Identities](!/algebra/identities)
- [Types of Equations by Solution Behavior](!/algebra/equations#3)`
  },
  category: "Equations"
},

{
  name: "Contradiction",
  formula: "An equation that is false for every value of the variable — its solution set is empty.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "recognition": `A contradiction reveals itself during simplification: the variable terms cancel, leaving a false numerical statement. This means no value of the variable can rescue the equation.`,
    "examples": `$x + 1 = x + 3$ simplifies to $1 = 3$ — false
$2(x - 1) = 2x + 5$ simplifies to $-2 = 5$ — false
Solution set: $\\emptyset$`,
    "related concepts": `
- [Conditional Equation](!/algebra/definitions#conditional_equation)
- [Identity](!/algebra/definitions#identity)
- [Solution Set](!/algebra/definitions#solution_set) — always empty
- [Types of Equations by Solution Behavior](!/algebra/equations#3)`
  },
  category: "Equations"
},

{
  name: "Equivalent Equations",
  formula: "Two or more equations that share exactly the same solution set.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "safe operations": `Adding or subtracting the same quantity on both sides. Multiplying or dividing both sides by a nonzero constant. These reversible operations always preserve equivalence.`,
    "risky operations": `Multiplying by an expression containing the variable, squaring both sides, or clearing denominators. These may enlarge the solution set, producing extraneous solutions that require verification.`,
    "related concepts": `
- [Solution Set](!/algebra/definitions#solution_set)
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — result of breaking equivalence
- [Equivalent Equations](!/algebra/equations#4)`
  },
  category: "Equations"
},

{
  name: "Algebraic Equation",
  formula: "An equation built entirely from variables, constants, and the operations of addition, subtraction, multiplication, division, and integer exponentiation.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "scope": `Algebraic equations exclude transcendental functions: no $\\sin$, $\\cos$, $\\ln$, $e^x$. Equations involving those functions are classified separately as trigonometric, logarithmic, or exponential equations.`,
    "classification by degree": `Degree 1: linear · Degree 2: quadratic · Degree 3: cubic · Degree 4: quartic · Degree 5: quintic. The degree determines the maximum number of solutions and which solving methods apply.`,
    "related concepts": `
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation)
- [Standard Form](!/algebra/definitions#standard_form)
- [Algebraic Equations](!/algebra/equations#5)
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — transcendental, not algebraic
- [Exponential Equation](!/algebra/definitions#exponential_equation) — transcendental, not algebraic`
  },
  category: "Equations"
},

{
  name: "Degree of an Equation",
  formula: "The highest power of the variable that appears after the equation is cleared of fractions and fully simplified.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "significance": `Degree determines the maximum number of solutions and dictates which solving techniques are available. Linear (degree 1) always has one solution. Quadratic (degree 2) has at most two. A polynomial of degree $n$ has at most $n$ roots in $\\mathbb{C}$.`,
    "examples": `$3x + 2 = 0$ — degree 1 (linear)
$x^2 - 4x + 3 = 0$ — degree 2 (quadratic)
$x^3 - 1 = 0$ — degree 3 (cubic)
$\\frac{x^2 + 1}{x - 1} = 0$ — degree 2 after clearing`,
    "related concepts": `
- [Algebraic Equation](!/algebra/definitions#algebraic_equation)
- [Standard Form](!/algebra/definitions#standard_form)
- [Algebraic Equations](!/algebra/equations#5)
- [Linear Equations](!/algebra/equations/linear)
- [Quadratic Equations](!/algebra/equations/quadratic)
- [Polynomial Equations](!/algebra/equations/polynomial)`
  },
  category: "Equations"
},

{
  name: "Standard Form",
  formula: "The conventional way to write an equation with all terms collected on one side, arranged by descending powers of the variable, equal to zero.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "by equation type": `Linear: $ax + b = 0$
Quadratic: $ax^2 + bx + c = 0$
General polynomial: $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$`,
    "purpose": `Standard form reveals the degree immediately, makes coefficients readable, and is the required input format for formulas like the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`,
    "related concepts": `
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation)
- [Coefficient](!/algebra/definitions#coefficient)
- [Discriminant](!/algebra/definitions#discriminant) — requires standard form to compute`
  },
  category: "Equations"
},

{
  name: "Coefficient",
  formula: "The numerical factor that multiplies a variable or a power of a variable in a term of an expression or equation.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "types": `Leading coefficient: the coefficient of the highest-degree term. Free coefficient (constant term): the term with no variable attached. In $3x^2 - 7x + 2$, the leading coefficient is $3$, the coefficient of $x$ is $-7$, and the free coefficient is $2$.`,
    "examples": `In $5x^3$: coefficient is $5$
In $-x^2$: coefficient is $-1$
In $\\frac{2}{3}x$: coefficient is $\\frac{2}{3}$`,
    "related concepts": `
- [Standard Form](!/algebra/definitions#standard_form)
- [Variable](!/algebra/definitions#variable)
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation)`
  },
  category: "Equations"
},

{
  name: "Discriminant",
  formula: "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$.",
  link: { label: "Quadratic Equations", url: "/algebra/equations/quadratic" },
  fields: {
    "what it determines": {
      text: `$\\Delta > 0$: two distinct real solutions
$\\Delta = 0$: one repeated real solution
$\\Delta < 0$: no real solutions (two complex conjugate solutions)

The discriminant settles the question of how many real roots exist without computing them. It appears under the radical in the quadratic formula: $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Three parabolas on the same axis. Left: parabola crossing x-axis at two points, labeled "$\\Delta > 0$, two real roots." Center: parabola tangent to x-axis at one point, labeled "$\\Delta = 0$, one repeated root." Right: parabola floating above x-axis, labeled "$\\Delta < 0$, no real roots." All opening upward, same vertex height progression.]`,
      //     alt: "Three cases of the discriminant",
      //     caption: "The discriminant determines how many times the parabola crosses the x-axis"
      //   }
      // ],
      links: [
        { label: "Quadratic Equations", url: "/algebra/equations#7" },
        { label: "Quadratic Equations Page", url: "/algebra/equations/quadratic" }
      ]
    },
    "examples": `$x^2 - 5x + 6 = 0$: $\\Delta = 25 - 24 = 1 > 0$ — two real roots
$x^2 - 6x + 9 = 0$: $\\Delta = 36 - 36 = 0$ — one repeated root
$x^2 + x + 1 = 0$: $\\Delta = 1 - 4 = -3 < 0$ — no real roots`,
    "related concepts": `
- [Standard Form](!/algebra/definitions#standard_form) — discriminant requires standard form
- [Coefficient](!/algebra/definitions#coefficient) — $a$, $b$, $c$ are the coefficients
- [Solution Set](!/algebra/definitions#solution_set)
- [Quadratic Equations](!/algebra/equations#7)`
  },
  category: "Equations"
},

{
  name: "Domain Restriction",
  formula: "A value of the variable that must be excluded from consideration because it makes an expression undefined.",
  link: { label: "Equations", url: "/algebra/equations" },
  fields: {
    "common causes": `Division by zero: $\\frac{1}{x-3}$ excludes $x = 3$. Even roots of negatives: $\\sqrt{x}$ requires $x \\geq 0$. Logarithms of non-positives: $\\ln(x)$ requires $x > 0$.`,
    "role in equations": `In rational equations, domain restrictions must be identified before solving. Any candidate solution that coincides with a restriction is extraneous and must be rejected, even if the algebra produces it cleanly.`,
    "related concepts": `
- [Extraneous Solution](!/algebra/definitions#extraneous_solution)
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — positivity requirement
- [Index](!/algebra/definitions#index) — even index restricts radicand
- [Rational Equations](!/algebra/equations#9)
- [Domain Restrictions](!/algebra/logarithms/equations#4)`
  },
  category: "Equations"
},

{
  name: "Absolute Value",
  formula: "The distance of a number from zero on the number line: $|x| = x$ if $x \\geq 0$, and $|x| = -x$ if $x < 0$.",
  link: { label: "Absolute Value Equations", url: "/algebra/equations/absolute-value" },
  fields: {
    "properties": `Always non-negative: $|x| \\geq 0$ for all $x$
$|x| = 0$ only when $x = 0$
$|ab| = |a| \\cdot |b|$
$|a + b| \\leq |a| + |b|$ (triangle inequality)`,
    "in equations": `$|f(x)| = k$ splits into $f(x) = k$ and $f(x) = -k$ when $k > 0$. When $k = 0$, solve $f(x) = 0$. When $k < 0$, no solution exists.`,
    "related concepts": `
- [Principal Root](!/algebra/definitions#principal_root) — $\\sqrt{x^2} = |x|$
- [Absolute Value Equations](!/algebra/equations#10)
- [Absolute Value Equations Page](!/algebra/equations/absolute-value)
- [Absolute Value Inequalities](!/algebra/inequalities/absolute-value)`
  },
  category: "Equations"
},

// {
//   name: "Equation",
//   formula: "A statement asserting that two mathematical expressions have the same value, written with the $=$ sign between them.",
//   fields: {
//     "key distinction": `An equation makes a claim that can be tested — true, false, or conditionally true. An expression like $3x + 2$ makes no claim and cannot be solved. The presence of $=$ is what turns a mathematical phrase into a solvable condition.`,
//     "examples": `$2x + 1 = 9$ — conditional, true only when $x = 4$
// $3 + 4 = 7$ — unconditionally true
// $3 + 4 = 8$ — unconditionally false
// $x^2 - 5x + 6 = 0$ — conditional, true when $x = 2$ or $x = 3$`
//   },
//   category: "Equations"
// },
// {
//   name: "Expression",
//   formula: "A mathematical phrase built from numbers, variables, and operations that represents a quantity but makes no assertion about equality.",
//   fields: {
//     "key distinction": `Expressions are evaluated or simplified. Equations are solved. The expression $2x + 1$ can be factored, expanded, or evaluated at specific values of $x$, but asking "what is $x$?" makes no sense without an equation. Placing $2x + 1 = 9$ creates the condition that gives $x$ a definite value.`,
//     "examples": `$3x + 7$ — polynomial expression
// $\\frac{x+1}{x-2}$ — rational expression
// $\\sqrt{x^2 + 4}$ — radical expression
// $2x + 1$ — this is NOT an equation`
//   },
//   category: "Equations"
// },
// {
//   name: "Variable",
//   formula: "A symbol, typically a letter, that represents an unknown quantity or a quantity that can change.",
//   fields: {
//     "usage": `In equations, variables stand for unknowns: the goal is to find which values make the equation true. In expressions and functions, variables represent inputs that can take a range of values. Convention reserves $x$, $y$, $z$ for unknowns, $a$, $b$, $c$ for constants, and $n$, $k$, $i$ for integers.`,
//     "examples": `In $2x + 1 = 9$: the variable is $x$
// In $ax^2 + bx + c = 0$: the variable is $x$; the letters $a$, $b$, $c$ are parameters
// In $f(x) = x^2$: $x$ is the input variable`
//   },
//   category: "Equations"
// },
// {
//   name: "Solution",
//   formula: "A value of the variable that makes both sides of an equation equal when substituted.",
//   fields: {
//     "verification": `A candidate is confirmed as a solution by direct substitution. For $2x + 1 = 9$, substituting $x = 4$ gives $2(4) + 1 = 9$, which is true. Substituting $x = 3$ gives $2(3) + 1 = 7 \\neq 9$, so $x = 3$ is not a solution.`,
//     "terminology": `Also called a root of the equation. The terms are interchangeable for polynomial equations. An equation may have one solution, finitely many, infinitely many, or none at all.`
//   },
//   category: "Equations"
// },
// {
//   name: "Solution Set",
//   formula: "The collection of all values that satisfy an equation, written in set notation.",
//   fields: {
//     "notation": `Curly braces list elements: $\\{-2, 2\\}$ for $x^2 = 4$. Set-builder notation describes conditions: $\\{x \\in \\mathbb{R} : 2x + 1 = 9\\} = \\{4\\}$. The empty set $\\emptyset$ indicates no solutions exist.`,
//     "examples": `$x^2 = 4 \\Rightarrow \\{-2, 2\\}$
// $2x + 1 = 9 \\Rightarrow \\{4\\}$
// $x^2 = -1$ over $\\mathbb{R} \\Rightarrow \\emptyset$
// $2(x+1) = 2x + 2 \\Rightarrow \\mathbb{R}$ (all real numbers)`
//   },
//   category: "Equations"
// },
// {
//   name: "Extraneous Solution",
//   formula: "A value that satisfies a transformed equation but not the original, introduced by non-reversible algebraic steps.",
//   fields: {
//     "causes": `Squaring both sides: $x = 3$ becomes $x^2 = 9$, admitting the false solution $x = -3$. Clearing denominators: multiplying by an expression that equals zero at certain values. These operations expand the solution set because they cannot be undone uniquely.`,
//     "prevention": `Every candidate obtained through squaring, clearing denominators, or raising to an even power must be substituted back into the original equation. Any value that fails verification or violates a domain restriction is extraneous and rejected.`
//   },
//   category: "Equations"
// },
// {
//   name: "Conditional Equation",
//   formula: "An equation that is true for specific values of the variable and false for all others.",
//   fields: {
//     "properties": `Most equations encountered in algebra are conditional. Solving means finding the finite set of values where the equation holds. The number of solutions depends on the equation's degree and type.`,
//     "examples": `$5x - 3 = 12$ — true only when $x = 3$
// $x^2 - 5x + 6 = 0$ — true when $x = 2$ or $x = 3$
// $\\sin(x) = 0$ — true when $x = n\\pi$ for any integer $n$`
//   },
//   category: "Equations"
// },
// {
//   name: "Identity",
//   formula: "An equation that holds true for every permissible value of the variable.",
//   fields: {
//     "key distinction": `Identities are not solved — they are verified. They express structural equivalences between expressions rather than constraints on unknowns. Expanding, factoring, or applying known rules confirms them.`,
//     "examples": `$2(x + 1) = 2x + 2$ — distributive property
// $(a + b)^2 = a^2 + 2ab + b^2$ — algebraic identity
// $\\sin^2(x) + \\cos^2(x) = 1$ — trigonometric identity`
//   },
//   category: "Equations"
// },
// {
//   name: "Contradiction",
//   formula: "An equation that is false for every value of the variable — its solution set is empty.",
//   fields: {
//     "recognition": `A contradiction reveals itself during simplification: the variable terms cancel, leaving a false numerical statement. This means no value of the variable can rescue the equation.`,
//     "examples": `$x + 1 = x + 3$ simplifies to $1 = 3$ — false
// $2(x - 1) = 2x + 5$ simplifies to $-2 = 5$ — false
// Solution set: $\\emptyset$`
//   },
//   category: "Equations"
// },
// {
//   name: "Equivalent Equations",
//   formula: "Two or more equations that share exactly the same solution set.",
//   fields: {
//     "safe operations": `Adding or subtracting the same quantity on both sides. Multiplying or dividing both sides by a nonzero constant. These reversible operations always preserve equivalence.`,
//     "risky operations": `Multiplying by an expression containing the variable, squaring both sides, or clearing denominators. These may enlarge the solution set, producing extraneous solutions that require verification.`
//   },
//   category: "Equations"
// },
// {
//   name: "Algebraic Equation",
//   formula: "An equation built entirely from variables, constants, and the operations of addition, subtraction, multiplication, division, and integer exponentiation.",
//   fields: {
//     "scope": `Algebraic equations exclude transcendental functions: no $\\sin$, $\\cos$, $\\ln$, $e^x$. Equations involving those functions are classified separately as trigonometric, logarithmic, or exponential equations.`,
//     "classification by degree": `Degree 1: linear · Degree 2: quadratic · Degree 3: cubic · Degree 4: quartic · Degree 5: quintic. The degree determines the maximum number of solutions and which solving methods apply.`
//   },
//   category: "Equations"
// },
// {
//   name: "Degree of an Equation",
//   formula: "The highest power of the variable that appears after the equation is cleared of fractions and fully simplified.",
//   fields: {
//     "significance": `Degree determines the maximum number of solutions and dictates which solving techniques are available. Linear (degree 1) always has one solution. Quadratic (degree 2) has at most two. A polynomial of degree $n$ has at most $n$ roots in $\\mathbb{C}$.`,
//     "examples": `$3x + 2 = 0$ — degree 1 (linear)
// $x^2 - 4x + 3 = 0$ — degree 2 (quadratic)
// $x^3 - 1 = 0$ — degree 3 (cubic)
// $\\frac{x^2 + 1}{x - 1} = 0$ — degree 2 after clearing`
//   },
//   category: "Equations"
// },
// {
//   name: "Standard Form",
//   formula: "The conventional way to write an equation with all terms collected on one side, arranged by descending powers of the variable, equal to zero.",
//   fields: {
//     "by equation type": `Linear: $ax + b = 0$
// Quadratic: $ax^2 + bx + c = 0$
// General polynomial: $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$`,
//     "purpose": `Standard form reveals the degree immediately, makes coefficients readable, and is the required input format for formulas like the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`
//   },
//   category: "Equations"
// },
// {
//   name: "Coefficient",
//   formula: "The numerical factor that multiplies a variable or a power of a variable in a term of an expression or equation.",
//   fields: {
//     "types": `Leading coefficient: the coefficient of the highest-degree term. Free coefficient (constant term): the term with no variable attached. In $3x^2 - 7x + 2$, the leading coefficient is $3$, the coefficient of $x$ is $-7$, and the free coefficient is $2$.`,
//     "examples": `In $5x^3$: coefficient is $5$
// In $-x^2$: coefficient is $-1$
// In $\\frac{2}{3}x$: coefficient is $\\frac{2}{3}$`
//   },
//   category: "Equations"
// },
// {
//   name: "Discriminant",
//   formula: "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$.",
//   fields: {
//     "what it determines": `$\\Delta > 0$: two distinct real solutions
// $\\Delta = 0$: one repeated real solution
// $\\Delta < 0$: no real solutions (two complex conjugate solutions)`,
//     "examples": `$x^2 - 5x + 6 = 0$: $\\Delta = 25 - 24 = 1 > 0$ — two real roots
// $x^2 - 6x + 9 = 0$: $\\Delta = 36 - 36 = 0$ — one repeated root
// $x^2 + x + 1 = 0$: $\\Delta = 1 - 4 = -3 < 0$ — no real roots`
//   },
//   category: "Equations"
// },
// {
//   name: "Domain Restriction",
//   formula: "A value of the variable that must be excluded from consideration because it makes an expression undefined.",
//   fields: {
//     "common causes": `Division by zero: $\\frac{1}{x-3}$ excludes $x = 3$. Even roots of negatives: $\\sqrt{x}$ requires $x \\geq 0$. Logarithms of non-positives: $\\ln(x)$ requires $x > 0$.`,
//     "role in equations": `In rational equations, domain restrictions must be identified before solving. Any candidate solution that coincides with a restriction is extraneous and must be rejected, even if the algebra produces it cleanly.`
//   },
//   category: "Equations"
// },
// {
//   name: "Absolute Value",
//   formula: "The distance of a number from zero on the number line: $|x| = x$ if $x \\geq 0$, and $|x| = -x$ if $x < 0$.",
//   fields: {
//     "properties": `Always non-negative: $|x| \\geq 0$ for all $x$
// $|x| = 0$ only when $x = 0$
// $|ab| = |a| \\cdot |b|$
// $|a + b| \\leq |a| + |b|$ (triangle inequality)`,
//     "in equations": `$|f(x)| = k$ splits into $f(x) = k$ and $f(x) = -k$ when $k > 0$. When $k = 0$, solve $f(x) = 0$. When $k < 0$, no solution exists.`
//   },
//   category: "Equations"
// },




// Roots Category — 19 Definition Entries for algebraTermsList

{
  name: "Root",
  formula: "The $n$th root of $b$ is a value $a$ such that $a^n = b$, written $\\sqrt[n]{b} = a$.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "intuition": {
      text: `A root reverses exponentiation. If raising $a$ to the $n$th power produces $b$, then the $n$th root of $b$ recovers $a$. The radical symbol $\\sqrt[n]{\\phantom{x}}$ denotes this operation: the small number $n$ is the index, and the expression underneath is the radicand.`,
      illustrations: [
        {
          src: `
<svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg">
<title>Powers and roots as inverse operations</title>
<desc>Three examples in ascending order then a generic case: 2 squared is 4, 2 cubed is 8, 3 squared is 9, then a to the n equals b.</desc>
<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </marker>
</defs>

<!-- Row 1: 2² = 4 -->
<rect x="100" y="30" width="80" height="50" rx="8" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
<text x="140" y="55" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">2</text>
<rect x="340" y="30" width="80" height="50" rx="8" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
<text x="380" y="55" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">4</text>
<line x1="182" y1="46" x2="338" y2="46" stroke="#0F6E56" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="38" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">2² = 4</text>
<line x1="338" y1="68" x2="182" y2="68" stroke="#993C1D" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">√4 = 2</text>

<!-- Row 2: 2³ = 8 -->
<rect x="100" y="120" width="80" height="50" rx="8" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
<text x="140" y="145" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">2</text>
<rect x="340" y="120" width="80" height="50" rx="8" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
<text x="380" y="145" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">8</text>
<line x1="182" y1="136" x2="338" y2="136" stroke="#0F6E56" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">2³ = 8</text>
<line x1="338" y1="158" x2="182" y2="158" stroke="#993C1D" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="180" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">∛8 = 2</text>

<!-- Row 3: 3² = 9 -->
<rect x="100" y="210" width="80" height="50" rx="8" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
<text x="140" y="235" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#085041">3</text>
<rect x="340" y="210" width="80" height="50" rx="8" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
<text x="380" y="235" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#712B13">9</text>
<line x1="182" y1="226" x2="338" y2="226" stroke="#0F6E56" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="218" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">3² = 9</text>
<line x1="338" y1="248" x2="182" y2="248" stroke="#993C1D" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="270" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">√9 = 3</text>

<!-- Dots -->
<circle cx="260" cy="298" r="2" fill="#888780"/>
<circle cx="260" cy="312" r="2" fill="#888780"/>
<circle cx="260" cy="326" r="2" fill="#888780"/>

<!-- Row 4: Generic -->
<rect x="100" y="350" width="80" height="50" rx="8" fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
<text x="140" y="375" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#3C3489">a</text>
<rect x="340" y="350" width="80" height="50" rx="8" fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
<text x="380" y="375" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="14" font-weight="500" fill="#3C3489">b</text>
<line x1="182" y1="366" x2="338" y2="366" stroke="#534AB7" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="358" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">aⁿ = b</text>
<line x1="338" y1="388" x2="182" y2="388" stroke="#534AB7" stroke-width="1.5" marker-end="url(#arrow)" fill="none"/>
<text x="260" y="410" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#5F5E5A">ⁿ√b = a</text>

<!-- Legend -->
<line x1="484" y1="55" x2="496" y2="55" stroke="#0F6E56" stroke-width="1.5" fill="none"/>
<text x="500" y="59" text-anchor="start" font-family="sans-serif" font-size="12" fill="#5F5E5A">power →</text>
<line x1="484" y1="75" x2="496" y2="75" stroke="#993C1D" stroke-width="1.5" fill="none"/>
<text x="500" y="79" text-anchor="start" font-family="sans-serif" font-size="12" fill="#5F5E5A">← root</text>

</svg>
          `,
          alt: "Powers and roots as inverse operations",
          caption: "Roots undo powers"
        }
      ],
      links: [
        { label: "What is a Root", url: "/algebra/roots#1" },
        { label: "Connection to Powers", url: "/algebra/roots#10" }
      ]
    },
    "examples": `$\\sqrt{25} = 5$ because $5^2 = 25$

$\\sqrt[3]{8} = 2$ because $2^3 = 8$

$\\sqrt[4]{81} = 3$ because $3^4 = 81$

$\\sqrt[5]{32} = 2$ because $2^5 = 32$`,
    "related concepts": `
- [Radical](!/algebra/definitions#radical)
- [Index](!/algebra/definitions#index)
- [Radicand](!/algebra/definitions#radicand)
- [Square Root](!/algebra/definitions#square_root)
- [Cube Root](!/algebra/definitions#cube_root)
- [Principal Root](!/algebra/definitions#principal_root)
- [Rational Exponent](!/algebra/definitions#rational_exponent)`
  },
  category: "Roots"
},

{
  name: "Radical",
  formula: "The symbol $\\sqrt[n]{\\phantom{x}}$ used to denote a root operation, consisting of the radical sign, an index, and a radicand.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "notation": `The radical symbol has three parts:

$$\\sqrt[n]{b}$$

$n$ — the index (which root to take). Omitted when $n = 2$.

$b$ — the radicand (the expression under the radical).

The horizontal bar extending over the radicand is called the vinculum. It acts as a grouping symbol: $\\sqrt{2 + 7}$ means the square root of $9$, not $\\sqrt{2} + 7$.`,
    "examples": `$\\sqrt{16}$ — index $2$ (implied), radicand $16$

$\\sqrt[3]{x + 1}$ — index $3$, radicand $x + 1$

$\\sqrt[5]{32a^2}$ — index $5$, radicand $32a^2$`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Index](!/algebra/definitions#index)
- [Radicand](!/algebra/definitions#radicand)
- [Rational Exponent](!/algebra/definitions#rational_exponent) — alternative notation
- [Radical Equation](!/algebra/definitions#radical_equation)
- [Radical Function](!/algebra/definitions#radical_function)`
  },
  category: "Roots"
},

{
  name: "Index",
  formula: "The positive integer $n$ in $\\sqrt[n]{a}$ that specifies which root is being taken.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "key distinction": {
      text: `Even indices ($n = 2, 4, 6, \\ldots$) require non-negative radicands and return non-negative values. Odd indices ($n = 3, 5, 7, \\ldots$) accept all real radicands and preserve sign.

This single distinction controls domain restrictions, absolute value behavior during simplification, and whether extraneous solutions can arise.`,
      illustrations: [
        {
          src: `
          <svg width="100%" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg">
<title>Anatomy of a radical expression</title>
<desc>A radical symbol drawn as a smooth path with three labeled parts: the index n, the radicand b, and the radical sign itself. Below, four examples show indices 2 through 5, and a footer distinguishes even from odd index behavior.</desc>

<!-- Radical symbol path -->
<path d="M182 85 L190 89 L210 130 L242 42 L360 42" fill="none" stroke="#5F5E5A" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>

<!-- n (index) -->
<text x="188" y="78" font-family="serif" font-size="28" font-style="italic" fill="#534AB7">n</text>

<!-- b (radicand) -->
<text x="278" y="100" font-family="serif" font-size="42" font-style="italic" fill="#993C1D">b</text>

<!-- Label: index -->
<circle cx="196" cy="62" r="2.5" fill="#534AB7"/>
<line x1="196" y1="62" x2="120" y2="38" stroke="#534AB7" stroke-width="0.8" fill="none"/>
<rect x="40" y="24" width="80" height="24" rx="6" fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
<text x="80" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#3C3489">index</text>

<!-- Label: radicand -->
<circle cx="305" cy="100" r="2.5" fill="#993C1D"/>
<line x1="305" y1="100" x2="390" y2="100" stroke="#993C1D" stroke-width="0.8" fill="none"/>
<rect x="392" y="88" width="90" height="24" rx="6" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
<text x="437" y="104" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#712B13">radicand</text>

<!-- Label: radical sign -->
<circle cx="215" cy="115" r="2.5" fill="#5F5E5A"/>
<line x1="215" y1="115" x2="120" y2="130" stroke="#5F5E5A" stroke-width="0.8" fill="none"/>
<rect x="30" y="118" width="90" height="24" rx="6" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
<text x="75" y="134" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#444441">radical sign</text>

<!-- Caption line (swappable per definition) -->
<text x="340" y="172" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#5F5E5A">The index tells you which power is being reversed.</text>

<!-- Examples -->
<rect x="40" y="200" width="130" height="70" rx="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
<text x="105" y="224" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#0C447C">n = 2</text>
<text x="105" y="242" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#185FA5">√16 = 4</text>
<text x="105" y="258" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5F5E5A">undoes squaring</text>

<rect x="185" y="200" width="130" height="70" rx="8" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
<text x="250" y="224" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#085041">n = 3</text>
<text x="250" y="242" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F6E56">∛8 = 2</text>
<text x="250" y="258" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5F5E5A">undoes cubing</text>

<rect x="330" y="200" width="130" height="70" rx="8" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
<text x="395" y="224" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#633806">n = 4</text>
<text x="395" y="242" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#854F0B">⁴√81 = 3</text>
<text x="395" y="258" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5F5E5A">undoes 4th power</text>

<rect x="475" y="200" width="130" height="70" rx="8" fill="#EEEDFE" stroke="#534AB7" stroke-width="0.5"/>
<text x="540" y="224" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="#3C3489">n = 5</text>
<text x="540" y="242" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#534AB7">⁵√32 = 2</text>
<text x="540" y="258" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5F5E5A">undoes 5th power</text>

<!-- Even vs odd -->
<rect x="40" y="300" width="275" height="50" rx="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
<text x="177" y="320" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#0C447C">Even index (2, 4, 6…)</text>
<text x="177" y="338" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#185FA5">radicand must be ≥ 0</text>

<rect x="335" y="300" width="275" height="50" rx="8" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
<text x="472" y="320" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="500" fill="#085041">Odd index (3, 5, 7…)</text>
<text x="472" y="338" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F6E56">any real radicand allowed</text>

</svg>        
          
          `,
          alt: "Even vs odd index behavior",
          caption: "Even indices restrict inputs; odd indices accept all real numbers"
        }
      ],
      links: [
        { label: "Even Index Radicals", url: "/algebra/roots/properties#1" },
        { label: "Odd Index Radicals", url: "/algebra/roots/properties#2" },
        { label: "Sign Behavior Summary", url: "/algebra/roots/properties#7" }
      ]
    },
    "examples": `$\\sqrt[2]{16} = 4$ — even index, non-negative result

$\\sqrt[3]{-8} = -2$ — odd index, negative result valid

$\\sqrt[4]{-16}$ — even index, not a real number

$\\sqrt[5]{-32} = -2$ — odd index, negative result valid`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Radicand](!/algebra/definitions#radicand)
- [Principal Root](!/algebra/definitions#principal_root) — convention for even indices
- [Radical Function](!/algebra/definitions#radical_function) — domain depends on index parity`
  },
  category: "Roots"
},

{
  name: "Radicand",
  formula: "The expression placed under the radical sign in $\\sqrt[n]{a}$; the value $a$ from which the root is extracted.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "properties": `The radicand determines whether a radical has a real value:

- Even index: radicand must be $\\geq 0$ for a real result
- Odd index: any real radicand is permitted

When simplifying, the radicand is factored to extract perfect powers. A radicand containing a variable creates a [radical function](!/algebra/roots/functions#1) with domain restrictions governed by the index.`,
    "examples": `In $\\sqrt{x + 5}$, the radicand is $x + 5$

In $\\sqrt[3]{8a^3}$, the radicand is $8a^3$

In $\\sqrt[4]{16x^8}$, the radicand is $16x^8$`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Radical](!/algebra/definitions#radical)
- [Index](!/algebra/definitions#index)
- [Simplest Form](!/algebra/definitions#simplest_form) — no perfect powers left in radicand
- [Perfect Square](!/algebra/definitions#perfect_square)
- [Perfect Cube](!/algebra/definitions#perfect_cube)`
  },
  category: "Roots"
},

{
  name: "Square Root",
  formula: "The second root of $a$: the non-negative value $b$ such that $b^2 = a$, written $\\sqrt{a}$.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "properties": `- Defined only for $a \\geq 0$ in the reals
- Always returns a non-negative value (principal root)
- $\\sqrt{a^2} = |a|$ for all real $a$
- $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$ when $a, b \\geq 0$
- $(\\sqrt{a})^2 = a$ for $a \\geq 0$`,
    "examples": `$\\sqrt{0} = 0$

$\\sqrt{1} = 1$

$\\sqrt{4} = 2$

$\\sqrt{144} = 12$

$\\sqrt{2} \\approx 1.414$ (irrational)`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Principal Root](!/algebra/definitions#principal_root)
- [Cube Root](!/algebra/definitions#cube_root)
- [Perfect Square](!/algebra/definitions#perfect_square)
- [Perfect Squares Table](!/tables/arithmetics/perfect-squares)
- [Square Root Visual Tool](!/visual-tools/square-root)`
  },
  category: "Roots"
},

{
  name: "Cube Root",
  formula: "The third root of $a$: the value $b$ such that $b^3 = a$, written $\\sqrt[3]{a}$.",
  link: { label: "Roots", url: "/algebra/roots" },
  fields: {
    "properties": `- Defined for all real numbers
- Preserves sign: $\\sqrt[3]{-a} = -\\sqrt[3]{a}$
- Every real number has exactly one real cube root
- No principal root convention needed (no ambiguity)
- $\\sqrt[3]{a^3} = a$ for all real $a$ (no absolute value)`,
    "examples": `$\\sqrt[3]{8} = 2$

$\\sqrt[3]{-27} = -3$

$\\sqrt[3]{0} = 0$

$\\sqrt[3]{1000} = 10$

$\\sqrt[3]{2} \\approx 1.260$ (irrational)`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Square Root](!/algebra/definitions#square_root)
- [Perfect Cube](!/algebra/definitions#perfect_cube)
- [Perfect Cubes Table](!/tables/arithmetics/perfect-cubes)
- [Odd-Index Radicals](!/algebra/roots/properties#2)`
  },
  category: "Roots"
},

{
  name: "Principal Root",
  formula: "The unique non-negative root returned by the radical symbol $\\sqrt[n]{a}$ when $n$ is even.",
  link: { label: "Properties", url: "/algebra/roots/properties" },
  fields: {
    "key distinction": {
      text: `Both $5$ and $-5$ square to $25$, but $\\sqrt{25} = 5$ only. The radical symbol returns one value — the non-negative root — so that it behaves as a function. When both roots are needed, $\\pm\\sqrt{a}$ is written explicitly.

For odd indices, no convention is needed: every real number has exactly one real cube root, fifth root, etc.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Number line centered at 0. Two points at $-5$ and $+5$, both with arrows pointing up to $25$ (labeled "$(-5)^2 = 25$" and "$5^2 = 25$"). A single arrow from $25$ back down points only to $+5$, labeled "$\\sqrt{25} = 5$." Shows the convention selecting the positive value.]`,
      //     alt: "Principal root selects the non-negative value",
      //     caption: "Two square roots exist, but the radical returns only the non-negative one"
      //   }
      // ],
      links: [
        { label: "Principal Root Convention", url: "/algebra/roots/properties#3" },
        { label: "Identity for Even Roots", url: "/algebra/roots/properties#4" }
      ]
    },
    "common errors": `Writing $\\sqrt{25} = \\pm 5$. The radical returns $5$ only. The $\\pm$ must be explicit.

Assuming $\\sqrt{x^2} = x$. Correct: $\\sqrt{x^2} = |x|$, because the principal root is non-negative regardless of the sign of $x$.`,
    "examples": `$\\sqrt{49} = 7$ (not $\\pm 7$)

$\\sqrt[4]{16} = 2$ (not $\\pm 2$)

$\\sqrt[3]{-27} = -3$ (odd index — no ambiguity)

$\\pm\\sqrt{49} = \\pm 7$ (both roots requested explicitly)`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Index](!/algebra/definitions#index)
- [Radical Function](!/algebra/definitions#radical_function) — domain depends on this convention
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — arises from ignoring this convention`
  },
  category: "Roots"
},

{
  name: "Rational Exponent",
  formula: "An exponent of the form $\\frac{m}{n}$ where $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$.",
  link: { label: "Rational Exponents", url: "/algebra/roots/rational-exponents" },
  fields: {
    "intuition": {
      text: `Every radical can be written as a fractional power. The denominator becomes the index; the numerator becomes the power applied to the base. This is not a separate operation — it is exactly the same operation in a different notation.

Exponent form often simplifies algebraic manipulation because the laws of exponents (add, subtract, multiply exponents) work with fractions just as they do with integers.`,
      links: [
        { label: "Unit Fraction Exponents", url: "/algebra/roots/rational-exponents#1" },
        { label: "General Rational Exponents", url: "/algebra/roots/rational-exponents#2" },
        { label: "Laws of Exponents with Rationals", url: "/algebra/roots/rational-exponents#6" }
      ]
    },
    "examples": `$a^{1/2} = \\sqrt{a}$

$a^{1/3} = \\sqrt[3]{a}$

$8^{2/3} = (\\sqrt[3]{8})^2 = 4$

$16^{-3/4} = \\frac{1}{(\\sqrt[4]{16})^3} = \\frac{1}{8}$

$x^{1/2} \\cdot x^{1/3} = x^{5/6}$`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Radical](!/algebra/definitions#radical)
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals))
- [Exponent Rules](!/algebra/powers/exponent-rules)
- [Converting Between Forms](!/algebra/roots/rational-exponents#4)
- [Negative Rational Exponents](!/algebra/roots/rational-exponents#3)`
  },
  category: "Roots"
},

{
  name: "Product Rule (Radicals)",
  formula: "$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$, provided the index matches and radicands satisfy domain restrictions.",
  link: { label: "Radical Rules", url: "/algebra/roots/radical-rules" },
  fields: {
    "properties": `Works in both directions:
- Split: $\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$
- Combine: $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$

Restrictions for even index: both $a \\geq 0$ and $b \\geq 0$ required in the reals. Attempting $\\sqrt{-2} \\cdot \\sqrt{-8} = \\sqrt{16}$ is invalid.

Derives from the exponent law $(ab)^{1/n} = a^{1/n} \\cdot b^{1/n}$.`,
    "examples": `$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$

$\\sqrt[3]{24} = \\sqrt[3]{8 \\cdot 3} = 2\\sqrt[3]{3}$

$\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{100} = 10$`,
    "related concepts": `
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals))
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals))
- [Simplest Form](!/algebra/definitions#simplest_form) — splitting uses this rule
- [Rational Exponent](!/algebra/definitions#rational_exponent) — exponent law origin`
  },
  category: "Roots"
},

{
  name: "Quotient Rule (Radicals)",
  formula: "$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$, with $b \\neq 0$ and domain restrictions for even index.",
  link: { label: "Radical Rules", url: "/algebra/roots/radical-rules" },
  fields: {
    "properties": `Works in both directions:
- Split: $\\sqrt{\\frac{49}{16}} = \\frac{\\sqrt{49}}{\\sqrt{16}} = \\frac{7}{4}$
- Combine: $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$

For even index: $a \\geq 0$ and $b > 0$ required.

Derives from $(\\frac{a}{b})^{1/n} = \\frac{a^{1/n}}{b^{1/n}}$.`,
    "examples": `$\\sqrt{\\frac{9}{25}} = \\frac{3}{5}$

$\\frac{\\sqrt[3]{54}}{\\sqrt[3]{2}} = \\sqrt[3]{27} = 3$

$\\sqrt{\\frac{x^2}{4}} = \\frac{|x|}{2}$ (even index, variable radicand)`,
    "related concepts": `
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals))
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals))
- [Rationalization](!/algebra/definitions#rationalization) — uses this rule to restructure fractions
- [Rational Exponent](!/algebra/definitions#rational_exponent)`
  },
  category: "Roots"
},

{
  name: "Power Rule (Radicals)",
  formula: "$\\sqrt[n]{a^m} = a^{m/n}$, equivalently $(\\sqrt[n]{a})^m = a^{m/n}$.",
  link: { label: "Radical Rules", url: "/algebra/roots/radical-rules" },
  fields: {
    "properties": `The exponent $m$ becomes the numerator, the index $n$ becomes the denominator. Either order — root first or power first — gives the same result.

When $m$ and $n$ share a common factor, the radical simplifies by cancellation:

$\\sqrt[6]{a^4} = a^{4/6} = a^{2/3} = \\sqrt[3]{a^2}$

For even indices with variables, absolute values may be needed: $\\sqrt{x^2} = |x|$, not $x$.`,
    "examples": `$\\sqrt[3]{8^2} = 8^{2/3} = (\\sqrt[3]{8})^2 = 4$

$\\sqrt{16^3} = 16^{3/2} = (\\sqrt{16})^3 = 64$

$\\sqrt[6]{x^4} = x^{2/3} = \\sqrt[3]{x^2}$`,
    "related concepts": `
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals))
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals))
- [Rational Exponent](!/algebra/definitions#rational_exponent) — this rule is the bridge between notations
- [Simplest Form](!/algebra/definitions#simplest_form) — index reduction uses this rule`
  },
  category: "Roots"
},

{
  name: "Simplest Form",
  formula: "A radical is in simplest form when no perfect power remains under the radical, no fraction appears under the radical, and no radical appears in a denominator.",
  link: { label: "Simplifying", url: "/algebra/roots/simplifying" },
  fields: {
    "conditions": {
      text: `Three conditions must hold simultaneously:

1. No perfect power factor in the radicand. Every factor that can be extracted has been extracted.

2. No fraction under the radical. $\\sqrt{\\frac{3}{4}}$ is rewritten as $\\frac{\\sqrt{3}}{2}$.

3. No radical in a denominator. $\\frac{1}{\\sqrt{3}}$ is rationalized to $\\frac{\\sqrt{3}}{3}$.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Three side-by-side "before → after" panels. Panel 1: $\\sqrt{72} \\to 6\\sqrt{2}$ (perfect square extracted). Panel 2: $\\sqrt{\\frac{3}{4}} \\to \\frac{\\sqrt{3}}{2}$ (fraction cleared). Panel 3: $\\frac{1}{\\sqrt{3}} \\to \\frac{\\sqrt{3}}{3}$ (denominator rationalized). Each panel labeled with the condition it satisfies.]`,
      //     alt: "Three conditions for simplest radical form",
      //     caption: "All three conditions must hold for a radical to be fully simplified"
      //   }
      // ],
      links: [
        { label: "What Simplest Form Means", url: "/algebra/roots/simplifying#1" },
        { label: "Factoring Out Perfect Powers", url: "/algebra/roots/simplifying#2" }
      ]
    },
    "examples": `$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$ — simplified

$\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$ — simplified

$\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = 3\\sqrt[3]{2}$ — simplified

$\\sqrt{50}$ is not simplified ($25$ is a perfect square factor)`,
    "related concepts": `
- [Perfect Square](!/algebra/definitions#perfect_square)
- [Perfect Cube](!/algebra/definitions#perfect_cube)
- [Rationalization](!/algebra/definitions#rationalization) — condition 3
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — used for condition 1
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — used for condition 2`
  },
  category: "Roots"
},

{
  name: "Perfect Square",
  formula: "An integer that equals $n^2$ for some integer $n$: $0, 1, 4, 9, 16, 25, 36, \\ldots$",
  link: { label: "Simplifying", url: "/algebra/roots/simplifying" },
  fields: {
    "properties": `- The square root of a perfect square is an integer: $\\sqrt{n^2} = n$
- Used to simplify radicals: factor the radicand to extract perfect square components
- A variable expression $x^{2k}$ is a perfect square for any positive integer $k$
- Recognizing perfect squares is essential for efficient simplification`,
    "examples": `$\\sqrt{36} = 6$ — $36 = 6^2$

$\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$ — $36$ extracted

$\\sqrt{x^4} = x^2$ — $x^4 = (x^2)^2$

$\\sqrt{50a^2} = 5|a|\\sqrt{2}$ — $25$ and $a^2$ extracted`,
    "related concepts": `
- [Perfect Cube](!/algebra/definitions#perfect_cube)
- [Simplest Form](!/algebra/definitions#simplest_form)
- [Square Root](!/algebra/definitions#square_root)
- [Perfect Squares Table](!/tables/arithmetics/perfect-squares)`
  },
  category: "Roots"
},

{
  name: "Perfect Cube",
  formula: "An integer that equals $n^3$ for some integer $n$: $0, 1, 8, 27, 64, 125, \\ldots$",
  link: { label: "Simplifying", url: "/algebra/roots/simplifying" },
  fields: {
    "properties": `- The cube root of a perfect cube is an integer: $\\sqrt[3]{n^3} = n$
- Includes negative values: $(-3)^3 = -27$, so $-27$ is a perfect cube
- A variable expression $x^{3k}$ is a perfect cube for any positive integer $k$
- Used to simplify cube roots by factoring out perfect cube components`,
    "examples": `$\\sqrt[3]{27} = 3$ — $27 = 3^3$

$\\sqrt[3]{-64} = -4$ — $-64 = (-4)^3$

$\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = 3\\sqrt[3]{2}$ — $27$ extracted

$\\sqrt[3]{x^6} = x^2$ — $x^6 = (x^2)^3$`,
    "related concepts": `
- [Perfect Square](!/algebra/definitions#perfect_square)
- [Simplest Form](!/algebra/definitions#simplest_form)
- [Cube Root](!/algebra/definitions#cube_root)
- [Perfect Cubes Table](!/tables/arithmetics/perfect-cubes)`
  },
  category: "Roots"
},

{
  name: "Rationalization",
  formula: "The process of rewriting an expression so that no radical appears in the denominator.",
  link: { label: "Simplifying", url: "/algebra/roots/simplifying" },
  fields: {
    "methods": `For monomial denominators, multiply numerator and denominator by the radical:

$$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$$

For binomial denominators, multiply by the [conjugate](!/algebra/definitions#conjugate):

$$\\frac{1}{\\sqrt{5} + 2} \\cdot \\frac{\\sqrt{5} - 2}{\\sqrt{5} - 2} = \\sqrt{5} - 2$$

For higher-index radicals, multiply to complete a perfect power:

$$\\frac{1}{\\sqrt[3]{4}} = \\frac{\\sqrt[3]{2}}{2}$$`,
    "examples": `$\\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$

$\\frac{3}{\\sqrt{7} - 1} = \\frac{\\sqrt{7} + 1}{2}$

$\\frac{2}{\\sqrt[3]{9}} = \\frac{2\\sqrt[3]{3}}{3}$`,
    "related concepts": `
- [Simplest Form](!/algebra/definitions#simplest_form) — rationalization is one of the three conditions
- [Conjugate](!/algebra/definitions#conjugate) — used for binomial denominators
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals))
- [Rationalizing Monomial Denominators](!/algebra/roots/simplifying#5)
- [Rationalizing Binomial Denominators](!/algebra/roots/simplifying#6)
- [Rationalizing Higher-Index Denominators](!/algebra/roots/simplifying#7)`
  },
  category: "Roots"
},

{
  name: "Like Radicals",
  formula: "Radical expressions that share the same index and the same radicand.",
  link: { label: "Operations", url: "/algebra/roots/operations" },
  fields: {
    "key distinction": `Like radicals can be added and subtracted by combining coefficients. Unlike radicals cannot be combined.

$3\\sqrt{5}$ and $7\\sqrt{5}$ — like (same index $2$, same radicand $5$)

$\\sqrt{3}$ and $\\sqrt{5}$ — unlike (different radicands)

$\\sqrt{2}$ and $\\sqrt[3]{2}$ — unlike (different indices)

Radicals that appear unlike may become like after simplification:

$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$`,
    "examples": `$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$

$8\\sqrt[3]{2} - 3\\sqrt[3]{2} = 5\\sqrt[3]{2}$

$\\sqrt{2} + \\sqrt{3}$ — cannot be combined (already simplest form)`,
    "related concepts": `
- [Simplest Form](!/algebra/definitions#simplest_form) — simplify before checking
- [Adding and Subtracting Like Radicals](!/algebra/roots/operations#2)
- [Radical](!/algebra/definitions#radical)`
  },
  category: "Roots"
},

{
  name: "Conjugate",
  formula: "For a binomial $a + b\\sqrt{c}$, its conjugate is $a - b\\sqrt{c}$. Their product eliminates the radical: $(a + b\\sqrt{c})(a - b\\sqrt{c}) = a^2 - b^2c$.",
  link: { label: "Operations", url: "/algebra/roots/operations" },
  fields: {
    "properties": `The product of conjugates is a difference of squares, which eliminates the radical term:

$$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$$

This makes conjugates the essential tool for rationalizing binomial denominators. The same algebraic identity appears in factoring and in working with complex numbers.`,
    "examples": `$(\\sqrt{5} + 2)(\\sqrt{5} - 2) = 5 - 4 = 1$

$(\\sqrt{3} + \\sqrt{7})(\\sqrt{3} - \\sqrt{7}) = 3 - 7 = -4$

$\\frac{1}{\\sqrt{5} + 2} \\cdot \\frac{\\sqrt{5} - 2}{\\sqrt{5} - 2} = \\sqrt{5} - 2$`,
    "related concepts": `
- [Rationalization](!/algebra/definitions#rationalization) — primary use case
- [Rationalizing Binomial Denominators](!/algebra/roots/simplifying#6)
- [Expanding Products with Radicals](!/algebra/roots/operations#7)
- [Squaring Radical Expressions](!/algebra/roots/operations#8)`
  },
  category: "Roots"
},

{
  name: "Radical Equation",
  formula: "An equation in which the variable appears under a radical sign.",
  link: { label: "Equations", url: "/algebra/roots/equations" },
  fields: {
    "strategy": {
      text: `Four-step solving process:

1. Isolate the radical on one side
2. Raise both sides to the power matching the index
3. Solve the resulting equation
4. Check every solution in the original equation

Isolation must come first. Squaring before isolating leaves the radical intact and creates a harder equation. Step 4 is mandatory — raising to a power can introduce extraneous solutions.`,
      links: [
        { label: "Basic Strategy", url: "/algebra/roots/equations#2" },
        { label: "Why Isolation Comes First", url: "/algebra/roots/equations#3" },
        { label: "Verification Process", url: "/algebra/roots/equations#10" }
      ]
    },
    "examples": `$\\sqrt{x} = 7 \\Rightarrow x = 49$ — check: $\\sqrt{49} = 7$ ✓

$\\sqrt{x + 3} = 5 \\Rightarrow x + 3 = 25 \\Rightarrow x = 22$

$\\sqrt{x + 5} = x - 1$ — squaring gives $x^2 - 3x - 4 = 0$, candidates $x = 4$ (valid) and $x = -1$ (extraneous)`,
    "related concepts": `
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — the defining hazard
- [Principal Root](!/algebra/definitions#principal_root) — why negative outputs are impossible
- [Equations with Two Radicals](!/algebra/roots/equations#6)
- [Cube Roots and Higher](!/algebra/roots/equations#8)`
  },
  category: "Roots"
},

{
  name: "Extraneous Solution",
  formula: "A value that satisfies a transformed equation but not the original, introduced by a non-reversible algebraic step.",
  link: { label: "Equations", url: "/algebra/roots/equations" },
  fields: {
    "why they appear": `Squaring both sides is not reversible. Both $5$ and $-5$ square to $25$, so squaring erases sign information. If the original equation requires a radical to equal a negative value, squaring hides this impossibility.

Similarly, clearing denominators in rational equations can introduce values that zero out the original denominator. Any non-reversible step — squaring, cubing with even-degree terms, multiplying by a variable expression — carries this risk.`,
    "examples": `$\\sqrt{x} = -3$ — squaring gives $x = 9$, but $\\sqrt{9} = 3 \\neq -3$. No solution exists; $x = 9$ is extraneous.

$\\sqrt{x + 5} = x - 1$ — candidates $x = 4$ (valid) and $x = -1$ (extraneous, since $\\sqrt{4} = 2 \\neq -2$)`,
    "related concepts": `
- [Radical Equation](!/algebra/definitions#radical_equation) — primary context
- [Principal Root](!/algebra/definitions#principal_root) — the convention that makes negative outputs impossible
- [Why Extraneous Solutions Appear](!/algebra/roots/equations#5)
- [Equivalent Equations](!/algebra/equations#4) — reversible vs non-reversible operations`
  },
  category: "Roots"
},

{
  name: "Radical Function",
  formula: "A function of the form $f(x) = \\sqrt[n]{g(x)}$, where the radicand contains a variable.",
  link: { label: "Functions", url: "/algebra/roots/functions" },
  fields: {
    "properties": {
      text: `Domain depends on the index:
- Even index: solve $g(x) \\geq 0$ for the domain
- Odd index: domain is all real numbers

The parent square root function $f(x) = \\sqrt{x}$ has domain $[0, \\infty)$ and range $[0, \\infty)$. Its graph starts at the origin and rises, concave down.

The parent cube root function $f(x) = \\sqrt[3]{x}$ has domain and range $(-\\infty, \\infty)$. Its graph has an S-curve through the origin with odd symmetry.

Radical functions are inverses of power functions. $\\sqrt{x}$ undoes $x^2$ (restricted to $x \\geq 0$); $\\sqrt[3]{x}$ undoes $x^3$.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Two graphs side by side. Left: $f(x) = \\sqrt{x}$ — curve starting at origin $(0,0)$, rising to the right, concave down, with key points $(1,1)$, $(4,2)$, $(9,3)$ marked. Domain bracket $[0, \\infty)$ shown on x-axis. Right: $f(x) = \\sqrt[3]{x}$ — S-curve through origin, extending both directions, with points $(-8,-2)$, $(0,0)$, $(8,2)$ marked. Full real line domain indicated.]`,
      //     alt: "Graphs of square root and cube root parent functions",
      //     caption: "Even-index functions start at a point; odd-index functions pass through the origin in both directions"
      //   }
      // ],
      links: [
        { label: "Square Root Function", url: "/algebra/roots/functions#1" },
        { label: "Cube Root Function", url: "/algebra/roots/functions#3" },
        { label: "Domain of Radical Functions", url: "/algebra/roots/functions#6" },
        { label: "Transformations", url: "/algebra/roots/functions#7" }
      ]
    },
    "examples": `$f(x) = \\sqrt{x - 3}$ — domain $[3, \\infty)$

$g(x) = \\sqrt{5 - 2x}$ — domain $(-\\infty, \\frac{5}{2}]$

$h(x) = \\sqrt[3]{x + 4}$ — domain $(-\\infty, \\infty)$`,
    "related concepts": `
- [Root](!/algebra/definitions#root)
- [Index](!/algebra/definitions#index) — determines domain restrictions
- [Principal Root](!/algebra/definitions#principal_root) — ensures function behavior
- [Radical Equation](!/algebra/definitions#radical_equation) — solving sets output equal to a value
- [Inverse Relationship](!/algebra/roots/functions#8)`
  },
  category: "Roots"
},







//Category- Logarithms 

// Logarithms Category — 15 Definition Entries for algebraTermsList

{
  name: "Logarithm",
  formula: "The exponent to which a base $a$ must be raised to produce $b$: $\\log_a(b) = c$ means $a^c = b$.",
  link: { label: "Logarithms", url: "/algebra/logarithms" },
  fields: {
    "intuition": {
      text: `A logarithm reverses exponentiation. If $a^c = b$, then $\\log_a(b) = c$. The logarithm extracts the exponent. Every logarithmic statement converts to an equivalent exponential statement and vice versa — the two forms encode identical information.

Two values hold for every valid base: $\\log_a(1) = 0$ because $a^0 = 1$, and $\\log_a(a) = 1$ because $a^1 = a$. The inverse identities $\\log_a(a^x) = x$ and $a^{\\log_a(x)} = x$ express that logarithms and exponentials undo each other.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Two-row diagram mirroring the Root SVG pattern. Top row: $2^3 = 8$ with forward arrow labeled "exponentiation," then $\\log_2(8) = 3$ with reverse arrow labeled "logarithm." Bottom row: $10^2 = 100$ forward, $\\log_{10}(100) = 2$ reverse. Third row: $a^c = b$ forward, $\\log_a(b) = c$ reverse (in purple). Dots between specific and generic rows.]`,
      //     alt: "Exponentiation and logarithms as inverse operations",
      //     caption: "Logarithms undo exponentiation"
      //   }
      // ],
      links: [
        { label: "What is a Logarithm", url: "/algebra/logarithms#1" },
        { label: "Inverse Identities", url: "/algebra/logarithms#4" }
      ]
    },
    "examples": `$\\log_2(8) = 3$ because $2^3 = 8$

$\\log_{10}(1000) = 3$ because $10^3 = 1000$

$\\log_5(25) = 2$ because $5^2 = 25$

$\\log_3(1) = 0$ because $3^0 = 1$

$\\log_4(4) = 1$ because $4^1 = 4$`,
    "related concepts": `
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm))
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm))
- [Common Logarithm](!/algebra/definitions#common_logarithm)
- [Natural Logarithm](!/algebra/definitions#natural_logarithm)
- [Logarithmic Function](!/algebra/definitions#logarithmic_function)
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation)`
  },
  category: "Logarithms"
},

{
  name: "Base (of a Logarithm)",
  formula: "The number $a$ in $\\log_a(b)$; must satisfy $a > 0$ and $a \\neq 1$.",
  link: { label: "Logarithms", url: "/algebra/logarithms" },
  fields: {
    "restrictions": `The base must be positive and not equal to one:

- $a > 0$: a negative base produces complex or undefined values for most exponents
- $a \\neq 1$: since $1^c = 1$ for all $c$, no exponent distinguishes one output from another
- $0 < a < 1$ is valid: produces a decreasing logarithmic function
- $a > 1$: produces an increasing logarithmic function

The base determines the direction of monotonicity, which controls whether inequality direction is preserved or reversed.`,
    "examples": `$\\log_2(8) = 3$ — base $2$

$\\log_{10}(100) = 2$ — base $10$ (common logarithm)

$\\log_e(e^3) = 3$ — base $e$ (natural logarithm)

$\\log_{1/2}(4) = -2$ — base $1/2$ (valid, since $0 < 1/2 < 1$)

$\\log_1(5)$ — undefined (base $1$ not allowed)`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm)
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm))
- [Common Logarithm](!/algebra/definitions#common_logarithm) — base $10$
- [Natural Logarithm](!/algebra/definitions#natural_logarithm) — base $e$
- [Monotonicity](!/algebra/definitions#monotonicity) — direction depends on base
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — converts between bases
- [Restrictions on Base and Argument](!/algebra/logarithms#2)`
  },
  category: "Logarithms"
},

{
  name: "Argument (of a Logarithm)",
  formula: "The number $b$ in $\\log_a(b)$; must satisfy $b > 0$.",
  link: { label: "Logarithms", url: "/algebra/logarithms" },
  fields: {
    "restrictions": `The argument must be strictly positive. Since $a^c > 0$ for any positive base $a$ and any real exponent $c$, no real exponent can produce zero or a negative result.

- $\\log_a(0)$ is undefined — no solution to $a^c = 0$ exists
- $\\log_a(-5)$ is undefined — no real $c$ satisfies $a^c = -5$

For composite arguments like $\\log_2(x - 3)$, the entire expression must be positive: $x - 3 > 0$, giving $x > 3$. This determines the domain of logarithmic functions and creates the possibility of extraneous solutions when solving equations.`,
    "examples": `$\\log_2(8)$ — argument is $8$ (valid, positive)

$\\log_3(x - 5)$ — requires $x - 5 > 0$, so $x > 5$

$\\log_{10}(0)$ — undefined

$\\log_5(-25)$ — undefined`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm)
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm))
- [Logarithmic Function](!/algebra/definitions#logarithmic_function) — domain is all positive arguments
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — solutions must satisfy argument > 0
- [Restrictions on Base and Argument](!/algebra/logarithms#2)`
  },
  category: "Logarithms"
},

{
  name: "Common Logarithm",
  formula: "The logarithm with base $10$, written $\\log(x)$ or $\\log_{10}(x)$.",
  link: { label: "Common & Natural", url: "/algebra/logarithms/common-natural" },
  fields: {
    "notation": `Written $\\log(x)$ without a subscript. Some textbooks and programming languages use $\\log$ to mean the natural logarithm instead — context determines which convention applies. When ambiguity is possible, $\\log_{10}(x)$ makes the base explicit.

Calculators typically label the base-10 key as LOG.`,
    "examples": `$\\log(10) = 1$

$\\log(100) = 2$

$\\log(1000) = 3$

$\\log(0.01) = -2$

$\\log(500) \\approx 2.699$`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm)
- [Natural Logarithm](!/algebra/definitions#natural_logarithm)
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula) — converts to/from common log
- [The Common Logarithm](!/algebra/logarithms/common-natural#1)
- [Logarithm Table](!/tables/arithmetics/logarithm)
- [Log Calculator](!/calculators/log-calculator)`
  },
  category: "Logarithms"
},

{
  name: "Natural Logarithm",
  formula: "The logarithm with base $e \\approx 2.71828$, written $\\ln(x)$ or $\\log_e(x)$.",
  link: { label: "Common & Natural", url: "/algebra/logarithms/common-natural" },
  fields: {
    "notation": `Written $\\ln(x)$, read "natural log of $x$." The abbreviation comes from the Latin logarithmus naturalis.

Calculators label the base-$e$ key as LN. In many programming languages and advanced mathematics texts, $\\log$ without subscript means $\\ln$.`,
    "key distinction": `The natural logarithm dominates theoretical mathematics because $e$ has a unique calculus property: the derivative of $e^x$ is $e^x$ itself, and the derivative of $\\ln(x)$ is $1/x$. No other base produces these clean results.`,
    "examples": `$\\ln(1) = 0$

$\\ln(e) = 1$

$\\ln(e^3) = 3$

$\\ln(2) \\approx 0.693$

$\\ln(10) \\approx 2.303$`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm)
- [Euler's Number (e)](!/algebra/definitions#euler's_number_(e))
- [Common Logarithm](!/algebra/definitions#common_logarithm)
- [Change of Base Formula](!/algebra/definitions#change_of_base_formula)
- [The Natural Logarithm](!/algebra/logarithms/common-natural#2)
- [Natural Logarithm Table](!/tables/arithmetics/natural-logarithms)`
  },
  category: "Logarithms"
},

{
  name: "Euler's Number (e)",
  formula: "The irrational constant $e \\approx 2.71828$, defined as $\\lim_{n \\to \\infty} (1 + 1/n)^n$.",
  link: { label: "Common & Natural", url: "/algebra/logarithms/common-natural" },
  fields: {
    "properties": `- Irrational: decimal expansion never terminates or repeats
- $e = 2.718281828459045\\ldots$
- Base of the natural logarithm: $\\ln(x) = \\log_e(x)$
- Unique calculus property: $\\frac{d}{dx} e^x = e^x$
- Arises from continuous compounding: $\\lim_{n \\to \\infty} (1 + 1/n)^n = e$
- Also defined by the series: $e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$`,
    "examples": `$e^0 = 1$

$e^1 = e \\approx 2.718$

$\\ln(e) = 1$

$\\ln(e^5) = 5$

$(1 + 1/1000)^{1000} \\approx 2.7169$ (approaching $e$)`,
    "related concepts": `
- [Natural Logarithm](!/algebra/definitions#natural_logarithm)
- [Exponential Functions](!/algebra/powers/exponential-functions)
- [The Number e](!/algebra/logarithms/common-natural#3)`
  },
  category: "Logarithms"
},

{
  name: "Product Rule (Logarithms)",
  formula: "$\\log_a(xy) = \\log_a(x) + \\log_a(y)$ — the logarithm of a product equals the sum of the logarithms.",
  link: { label: "Rules", url: "/algebra/logarithms/rules" },
  fields: {
    "derivation": `Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x = a^m$ and $y = a^n$.

$$xy = a^m \\cdot a^n = a^{m+n}$$

$$\\log_a(xy) = m + n = \\log_a(x) + \\log_a(y)$$

The rule derives from the exponent law $a^m \\cdot a^n = a^{m+n}$. Multiplication inside the logarithm becomes addition outside.`,
    "examples": `$\\log_2(8 \\cdot 4) = \\log_2(8) + \\log_2(4) = 3 + 2 = 5$

$\\log(2x) = \\log(2) + \\log(x)$

$\\ln(abc) = \\ln(a) + \\ln(b) + \\ln(c)$`,
    "related concepts": `
- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_(logarithms))
- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms))
- [The Product Rule](!/algebra/logarithms/rules#1)
- [Expanding Logarithms](!/algebra/logarithms/rules#5)
- [Condensing Logarithms](!/algebra/logarithms/rules#6)`
  },
  category: "Logarithms"
},

{
  name: "Quotient Rule (Logarithms)",
  formula: "$\\log_a(x/y) = \\log_a(x) - \\log_a(y)$ — the logarithm of a quotient equals the difference of the logarithms.",
  link: { label: "Rules", url: "/algebra/logarithms/rules" },
  fields: {
    "derivation": `Let $\\log_a(x) = m$ and $\\log_a(y) = n$. Then $x/y = a^m / a^n = a^{m-n}$.

$$\\log_a(x/y) = m - n = \\log_a(x) - \\log_a(y)$$

Special case: $\\log_a(1/x) = -\\log_a(x)$, since $\\log_a(1) = 0$.`,
    "examples": `$\\log_3(81/9) = \\log_3(81) - \\log_3(9) = 4 - 2 = 2$

$\\log(x/5) = \\log(x) - \\log(5)$

$\\ln(1/x) = -\\ln(x)$`,
    "related concepts": `
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms))
- [Power Rule (Logarithms)](!/algebra/definitions#power_rule_(logarithms))
- [The Quotient Rule](!/algebra/logarithms/rules#2)`
  },
  category: "Logarithms"
},

{
  name: "Power Rule (Logarithms)",
  formula: "$\\log_a(x^n) = n \\cdot \\log_a(x)$ — exponents inside the argument become coefficients outside.",
  link: { label: "Rules", url: "/algebra/logarithms/rules" },
  fields: {
    "derivation": `Let $\\log_a(x) = m$, so $x = a^m$. Then $x^n = (a^m)^n = a^{mn}$.

$$\\log_a(x^n) = mn = n \\cdot \\log_a(x)$$

Works for any real exponent $n$, including fractions and negatives:

$\\log_a(\\sqrt{x}) = \\log_a(x^{1/2}) = \\frac{1}{2} \\log_a(x)$

$\\log_a(x^{-3}) = -3 \\log_a(x)$`,
    "examples": `$\\log_2(8^4) = 4 \\cdot \\log_2(8) = 4 \\cdot 3 = 12$

$\\ln(\\sqrt{x}) = \\frac{1}{2} \\ln(x)$

$\\log(x^{-2}) = -2 \\log(x)$`,
    "related concepts": `
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms))
- [Quotient Rule (Logarithms)](!/algebra/definitions#quotient_rule_(logarithms))
- [The Power Rule](!/algebra/logarithms/rules#3)`
  },
  category: "Logarithms"
},

{
  name: "Change of Base Formula",
  formula: "$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$ — converts a logarithm from one base to any other.",
  link: { label: "Rules", url: "/algebra/logarithms/rules" },
  fields: {
    "derivation": `Let $\\log_a(x) = y$, so $a^y = x$. Take $\\log_b$ of both sides:

$$\\log_b(a^y) = \\log_b(x)$$

$$y \\cdot \\log_b(a) = \\log_b(x)$$

$$y = \\frac{\\log_b(x)}{\\log_b(a)}$$

Special case: $\\log_a(b) = \\frac{1}{\\log_b(a)}$ — swapping base and argument gives the reciprocal.`,
    "examples": `$\\log_2(10) = \\frac{\\log(10)}{\\log(2)} = \\frac{1}{0.301} \\approx 3.322$

$\\log_5(7) = \\frac{\\ln(7)}{\\ln(5)} \\approx 1.209$

$\\log_3(2) = \\frac{1}{\\log_2(3)} \\approx \\frac{1}{1.585} \\approx 0.631$`,
    "related concepts": `
- [Common Logarithm](!/algebra/definitions#common_logarithm) — typical target base for calculators
- [Natural Logarithm](!/algebra/definitions#natural_logarithm) — alternative target base
- [The Change of Base Formula](!/algebra/logarithms/rules#4)`
  },
  category: "Logarithms"
},

{
  name: "Monotonicity",
  formula: "A logarithmic function is strictly increasing when $a > 1$ and strictly decreasing when $0 < a < 1$.",
  link: { label: "Properties", url: "/algebra/logarithms/properties" },
  fields: {
    "key distinction": `For $a > 1$: if $x_1 < x_2$, then $\\log_a(x_1) < \\log_a(x_2)$. Inequality direction is preserved.

For $0 < a < 1$: if $x_1 < x_2$, then $\\log_a(x_1) > \\log_a(x_2)$. Inequality direction is reversed.

This is the single most important property when solving logarithmic inequalities. Taking logarithms of both sides preserves or reverses the inequality depending entirely on the base.`,
    "examples": `$\\log_2(4) < \\log_2(8)$ — base $> 1$, direction preserved ($2 < 3$)

$\\log_{1/2}(4) > \\log_{1/2}(8)$ — base $< 1$, direction reversed ($-2 > -3$)`,
    "related concepts": `
- [One-to-One Property](!/algebra/definitions#one-to-one_property) — follows from monotonicity
- [Logarithmic Inequality](!/algebra/definitions#logarithmic_inequality) — direction depends on this
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm)) — determines increasing vs decreasing
- [Monotonicity](!/algebra/logarithms/properties#3)`
  },
  category: "Logarithms"
},

{
  name: "One-to-One Property",
  formula: "If $\\log_a(x) = \\log_a(y)$, then $x = y$. No two distinct inputs produce the same output.",
  link: { label: "Properties", url: "/algebra/logarithms/properties" },
  fields: {
    "strategy": `This property justifies a key equation-solving technique: when both sides of an equation are logarithms with the same base, set the arguments equal and solve the resulting algebraic equation.

$$\\log_a(M) = \\log_a(N) \\implies M = N$$

Every solution must still be checked against domain restrictions — both $M > 0$ and $N > 0$ must hold.`,
    "examples": `$\\log_3(2x + 1) = \\log_3(x + 5) \\implies 2x + 1 = x + 5 \\implies x = 4$

$\\ln(x^2) = \\ln(9) \\implies x^2 = 9 \\implies x = \\pm 3$ (both valid since arguments stay positive)`,
    "related concepts": `
- [Monotonicity](!/algebra/definitions#monotonicity) — one-to-one follows from strict monotonicity
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — primary application
- [One-to-One Property](!/algebra/logarithms/properties#4)
- [Logarithms on Both Sides](!/algebra/logarithms/equations#2)`
  },
  category: "Logarithms"
},

{
  name: "Logarithmic Equation",
  formula: "An equation in which the variable appears inside the argument of a logarithm.",
  link: { label: "Equations", url: "/algebra/logarithms/equations" },
  fields: {
    "strategy": `Two main forms:

1. Logarithm equals a constant: $\\log_a(f(x)) = k$ — convert to exponential form: $f(x) = a^k$

2. Logarithms on both sides: $\\log_a(M) = \\log_a(N)$ — apply the one-to-one property: $M = N$

When multiple logarithms appear, use the product, quotient, or power rules to condense into a single logarithm first. Every solution must satisfy domain restrictions: all original arguments must be positive.`,
    "examples": `$\\log_2(x) = 5 \\implies x = 32$

$\\log_5(2x - 1) = 2 \\implies 2x - 1 = 25 \\implies x = 13$

$\\log_2(x) + \\log_2(x - 2) = 3 \\implies \\log_2(x^2 - 2x) = 3 \\implies x^2 - 2x = 8$`,
    "related concepts": `
- [One-to-One Property](!/algebra/definitions#one-to-one_property) — technique for logs on both sides
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — combining logarithms
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — domain restrictions
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — must verify all candidates
- [Basic Form](!/algebra/logarithms/equations#1)
- [Combining Logarithms](!/algebra/logarithms/equations#3)
- [Domain Restrictions](!/algebra/logarithms/equations#4)`
  },
  category: "Logarithms"
},

{
  name: "Logarithmic Inequality",
  formula: "An inequality involving a logarithmic expression, where the base determines whether inequality direction is preserved or reversed.",
  link: { label: "Inequalities", url: "/algebra/logarithms/inequalities" },
  fields: {
    "key distinction": `The solving process mirrors equations with one critical addition: the base controls direction.

For $a > 1$ (increasing function): $\\log_a(x) > k \\implies x > a^k$ — direction preserved

For $0 < a < 1$ (decreasing function): $\\log_a(x) > k \\implies x < a^k$ — direction reversed

Domain restrictions apply throughout: every argument must remain positive. The final answer is the intersection of the algebraic solution with the domain.`,
    "examples": `$\\log_2(x) > 3 \\implies x > 8$ (base $> 1$, preserved)

$\\log_{1/2}(x) > 3 \\implies x < 1/8$ (base $< 1$, reversed)

$\\log_5(x) \\leq 2 \\implies 0 < x \\leq 25$ (including domain)`,
    "related concepts": `
- [Monotonicity](!/algebra/definitions#monotonicity) — why direction depends on base
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm))
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — same techniques, different operator
- [Base Greater Than One](!/algebra/logarithms/inequalities#1)
- [Base Between Zero and One](!/algebra/logarithms/inequalities#2)`
  },
  category: "Logarithms"
},

{
  name: "Logarithmic Function",
  formula: "The function $f(x) = \\log_a(x)$ with domain $(0, \\infty)$, range $(-\\infty, \\infty)$, and vertical asymptote at $x = 0$.",
  link: { label: "Graphs", url: "/algebra/logarithms/graphs" },
  fields: {
    "properties": {
      text: `- Domain: $(0, \\infty)$ — only positive inputs
- Range: $(-\\infty, \\infty)$ — all real outputs
- Passes through $(1, 0)$ and $(a, 1)$ for every base
- Vertical asymptote at $x = 0$ (the $y$-axis)
- Concave down throughout for $a > 1$
- Strictly increasing when $a > 1$; strictly decreasing when $0 < a < 1$
- Continuous on its entire domain
- Inverse of the exponential function $g(x) = a^x$: their graphs reflect across $y = x$

Transformations shift the asymptote and key points: $y = \\log_a(x - h) + k$ has asymptote at $x = h$ and passes through $(1 + h, k)$.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Two logarithmic curves on the same axes. Curve 1: $y = \\log_2(x)$ in teal, passing through $(1,0)$, $(2,1)$, $(4,2)$, $(8,3)$, approaching $x = 0$ from the right and plunging downward. Curve 2: $y = \\log_{1/2}(x)$ in coral, passing through $(1,0)$, $(2,-1)$, $(4,-2)$, reflected version. Dashed vertical line at $x = 0$ labeled "asymptote." Points $(1,0)$ marked as shared by both curves.]`,
      //     alt: "Logarithmic function graphs for base > 1 and base < 1",
      //     caption: "Base > 1 increases; base < 1 decreases. Both pass through (1, 0)."
      //   }
      // ],
      links: [
        { label: "The Basic Shape", url: "/algebra/logarithms/graphs#1" },
        { label: "The Vertical Asymptote", url: "/algebra/logarithms/graphs#3" },
        { label: "Key Points", url: "/algebra/logarithms/graphs#4" },
        { label: "Effect of Base on Shape", url: "/algebra/logarithms/graphs#5" }
      ]
    },
    "examples": `$f(x) = \\log_2(x)$ — domain $(0, \\infty)$, increasing

$g(x) = \\log_{1/3}(x)$ — domain $(0, \\infty)$, decreasing

$h(x) = \\log_5(x - 2)$ — domain $(2, \\infty)$, asymptote at $x = 2$

$k(x) = \\ln(x) + 3$ — domain $(0, \\infty)$, shifted up by $3$`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm)
- [Monotonicity](!/algebra/definitions#monotonicity)
- [One-to-One Property](!/algebra/definitions#one-to-one_property)
- [Argument (of a Logarithm)](!/algebra/definitions#argument_(of_a_logarithm)) — domain = positive arguments
- [Inverse Relationship](!/algebra/logarithms/properties#7)
- [Transformations](!/algebra/logarithms/graphs#6)`
  },
  category: "Logarithms"
},




   
  //  {
  //   name: "Logarithm",
  //   formula: "For positive numbers $b ≠ 1$ and $x > 0$, $log_b(x) = y$ means $b^y = x$. Written as: $\\log_b(x) = y \\iff b^y = x$",
  //   fields: {
  //     "properties": `- Domain: x > 0
  //  - Base $b > 0$ and $b ≠ 1$ 
  //  - One-to-one function
  //  - Inverse of exponential`,
  //     "examples": `$\\log_2(8) = 3$ because $2^3 = 8$
  //  $\\log_3(27) = 3$ because $3^3 = 27$
  //  $\\log_{10}(100) = 2$ because $10^2 = 100$`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Base",
  //   formula: "The positive number b ≠ 1 in logarithmic expression $\\log_b(x)$ or exponential expression $b^x$",
  //   fields: {
  //     "properties": `
  //     - Must be positive
  // - Cannot equal 1
  // - Common bases: 10, e, 2
  // - Determines growth rate`,
  //     "examples": `Common bases:
  // $\\log_{10}(x)$ (common log)
  // $\\log_e(x)$ (natural log, ln)
  // $\\log_2(x)$ (binary log)`
  //   },
  //   category: "Logarithms"
  // },
  // {
  //   name: "Exponent",
  //   formula: "The power y in exponential form $b^y$ or the value of logarithm $\\log_b(x)$ where $b^y = x$",
  //   fields: {
  //     "properties": `
  //     - Can be any real number
  // - Results in logarithm value
  // - Determines output level
  // - Key in exponential growth`,
  //     "examples": `In $2^3 = 8$:
  // Exponent is 3
  // $\\log_2(8) = 3$
  
  // In $10^x = 1000$:
  // $x = \\log_{10}(1000) = 3$`
  //   },
  //   category: "Logarithms"
  // },
  // {
  //   name: "Natural Logarithm",
  //   formula: "Logarithm with base $e (≈ 2.71828...)$, written as $ln(x)$ or $\\log_e(x)$. Inverse of exponential function $e^x$",
  //   fields: {
  //     "properties": `- Most common in calculus
  //  - Used in continuous growth
  //  - Base e is irrational
  //  - Standard notation $ln(x)$`,
  //     "examples": `
  //     $\\ln(e) = 1$
  //  $\\ln(e^2) = 2$
  //  $\\ln(1) = 0$
  //  $\\ln(e^x) = x$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Common Logarithm",
  //   formula: "Logarithm with base 10, written as $log(x)$ or $\\log_{10}(x)$. Used for decimal representations",
  //   fields: {
  //     "properties": `- Used in scientific notation
  //  - Counts decimal digits
  //  - Often written without base
  //  - Standard notation $log(x)$`,
  //     "examples": `$\\log(100) = 2$
  //  $\\log(1000) = 3$
  //  $\\log(10^n) = n$
  //  $\\log(0.01) = -2$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Binary Logarithm",
  //   formula: "Logarithm with base 2, written as $\\log_2(x)$. Used in computer science and information theory",
  //   fields: {
  //     "properties": `- Used in algorithm analysis
  //  - Measures bits needed
  //  - Common in computing
  //  - Standard notation $\\log_2(x)$`,
  //     "examples": `$\\log_2(8) = 3$
  //  $\\log_2(16) = 4$
  //  $\\log_2(2^n) = n$
  //  $\\log_2(1024) = 10$`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Antilogarithm",
  //   formula: "The inverse logarithm function: if y = $\\log_b(x)$, then $antilog_b(y) = x = b^y$",
  //   fields: {
  //     "properties": `- Inverse of logarithm
  //  - Same as exponential function
  //  - Returns original number
  //  - Preserves base`,
  //     "examples": `If $\\log(100) = 2$
  //  then antilog(2) = 100
   
  //  If $\\ln(x) = 3$
  //  then antiln(3) = e³
   
  //  For $\\log_2(8) = 3$:
  //  antilog₂(3) = 2³ = 8`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Characteristic",
  //   formula: "The integer part n of logarithm where $\\log_{10}(x) = n + d$ and $0 ≤ d < 1$",
  //   fields: {
  //     "properties": `- Integer part of logarithm
  //  - Indicates magnitude
  //  - Can be negative
  //  - For base 10 equals exponent in scientific notation`,
  //     "examples": `For $\\log(234) = 2.369$:
  //  Characteristic = 2
   
  //  For $\\log(0.0234) = -1.631$:
  //  Characteristic = -2`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Mantissa",
  //   formula: "The decimal part d of logarithm where $\\log_{10}(x) = n + d$ and $0 ≤ d < 1$",
  //   fields: {
  //     "properties": `- Decimal part of logarithm
  //  - Always positive
  //  - Independent of decimal point position
  //  - Used in log tables`,
  //     "examples": `For $\\log(234) = 2.369$:
  //  Mantissa = 0.369
   
  //  For $\\log(0.0234) = -1.631$:
  //  Mantissa = 0.369`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Logarithmic Function",
  //   formula: "Function $f(x) = \\log_b(x)$ where $b > 0, b ≠ 1$. Inverse of exponential function $g(x) = b^x$",
  //   fields: {
  //     "properties": `- Domain: $x > 0$
  //  - Range: all real numbers
  //  - Strictly increasing if $b > 1$
  //  - Strictly decreasing if $0 < b < 1$`,
  //     "examples": `Common forms:
  //  $f(x) = \\ln(x)$
  //  $f(x) = \\log_{10}(x)$
  //  $f(x) = \\log_2(x)$`,
  //     "graph": "Characteristic curved shape crossing y-axis at (1,0)"
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Complex Logarithm",
  //   formula: "For complex $z = r(cos θ + i sin θ)$, $\\ln(z) = \\ln(r) + i(θ + 2πn)$ where n is integer",
  //   fields: {
  //     "properties": `- Multivalued function
  //  - Has infinite branches
  //  - Principal value when $n = 0$
  //  - Defined except at $z = 0$`,
  //     "examples": `$\\ln(-1) = πi + 2πni$
  //  $\\ln(i) = \\frac{πi}{2} + 2πni$
  //  Principal value:
  //  $\\ln(-1) = πi$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Discrete Logarithm",
  //   formula: "For integers $a, b, m$, find $x$ where $a^x ≡ b \\pmod{m}$. Written as $\\log_a(b) \\pmod{m}$",
  //   fields: {
  //     "properties": `- Used in cryptography
  //  - Computationally difficult
  //  - May not exist
  //  - Modular arithmetic based`,
  //     "examples": `In mod 7:
  //  $2^3 ≡ 1 \\pmod{7}$
  //  so $\\log_2(1) ≡ 3 \\pmod{7}$
   
  //  $3^x ≡ 4 \\pmod{7}$
  //  $x = \\log_3(4) \\pmod{7}$`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Logarithmic Scale",
  //   formula: "Scale where values are spaced by powers of base b: positions proportional to $\\log_b(x)$ rather than x",
  //   fields: {
  //     "properties": `- Equal ratios = equal distances
  //  - Compresses large ranges
  //  - Often uses base 10
  //  - Shows percentage changes`,
  //     "examples": `Common scales:
  //  pH scale (base 10)
  //  Richter scale (base 10)
  //  Decibels (base 10)
  //  Musical octaves (base 2)`,
  //     "applications": "Scientific notation, sound intensity, earthquake magnitude"
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Exponential Form",
  //   formula: "Equivalent expression of $\\log_b(x) = y$ as $b^y = x$, showing inverse relationship between logarithms and exponents",
  //   fields: {
  //     "properties": `- Shows inverse relationship
  //  - Used for solving equations
  //  - Connects exp and log
  //  - Base remains constant`,
  //     "examples": `$\\log_2(8) = 3 \\iff 2^3 = 8$
  //  $\\ln(x) = 4 \\iff e^4 = x$
  //  $\\log_{10}(1000) = 3 \\iff 10^3 = 1000$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Logarithmic Identity",
  //   formula: "Fundamental rules for manipulating logarithms with same base b:",
  //   fields: {
  //     "properties": `Product rule: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$
  //  Quotient rule: $\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)$
  //  Power rule: $\\log_b(x^n) = n\\log_b(x)$
  //  Change of base: $\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)}$`,
  //     "examples": `$\\log(30) = \\log(2 \\cdot 15) = \\log(2) + \\log(15)$
  //  $\\log_2(\\frac{8}{2}) = \\log_2(8) - \\log_2(2) = 3 - 1 = 2$
  //  $\\log(x^3) = 3\\log(x)$`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Logarithmic Expression",
  //   formula: "Mathematical expression containing one or more logarithms, may include variables and other operations",
  //   fields: {
  //     "properties": `- Contains at least one logarithm
  //  - May have variables
  //  - Can be simplified using log rules
  //  - Domain restrictions apply`,
  //     "examples": `$2\\ln(x) + 3$
  //  $\\log(x^2 + 1)$
  //  $\\log_2(x) + \\log_2(y)$
  //  $\\frac{\\ln(x)}{\\ln(2)}$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Logarithmic Equation",
  //   formula: "Equation containing logarithmic expressions that must be solved for variable(s)",
  //   fields: {
  //     "properties": `- Check domain restrictions
  //  - Use log properties to simplify
  //  - Convert to exponential form
  //  - Check for extraneous solutions`,
  //     "examples": `Solving $\\ln(x) = 2$:
  //  $\\ln(x) = 2$
  //  $e^{\\ln(x)} = e^2$
  //  $x = e^2$
   
  //  Solving $\\log_2(x+1) = 3$:
  //  $2^{\\log_2(x+1)} = 2^3$
  //  $x + 1 = 8$
  //  $x = 7$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Logarithmic Inequality",
  //   formula: "Inequality containing logarithmic expressions to be solved: $\\log_b(x) < k$ or $\\log_b(f(x)) > \\log_b(g(x))$",
  //   fields: {
  //     "properties": `
  //     - Consider base when solving
  //  - Domain restrictions crucial
  //  - Direction changes if base < 1
  //  - Convert to exponential form`,
  //     "examples": `Solving $\\ln(x) > 2$:
  //  $\\ln(x) > 2$
  //  $e^{\\ln(x)} > e^2$
  //  $x > e^2$
   
  //  $\\log_2(x) < 3$:
  //  $x < 2^3$
  //  $x < 8$`
  //   },
  //   category: "Logarithms"
  //  },
  //  {
  //   name: "Asymptote",
  //   formula: "For logarithmic function $f(x) = \\log_b(x)$, vertical asymptote at $x = 0$",
  //   fields: {
  //     "properties": `
  //     - Vertical: x = 0
  //  - Function never crosses
  //  - Defines domain boundary
  //  - Different bases, same asymptote`,
  //     "examples": `For $y = \\ln(x)$:
  //  - Vertical asymptote: x = 0
  //  - As x → 0⁺, y → -∞
  //  - As x → ∞, y grows slowly`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Graph of a Logarithmic Function",
  //   formula: "Plot of $y = \\log_b(x)$ showing characteristic shape with vertical asymptote and continuous growth",
  //   fields: {
  //     "properties": `
  //     - Domain: x > 0
  //  - Vertical asymptote at x = 0
  //  - Passes through (1,0)
  //  - Continuous and increasing for b > 1`,
  //     "key points": `- (1,0) always
  //  - (b,1) where b is base
  //  - ($\\frac{1}{b}$,-1) where b is base`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Base-Change Rule",
  //   formula: "$\\log_a(x) = \\frac{\\log_c(x)}{\\log_c(a)}$ for any base $c > 0, c ≠ 1$",
  //   fields: {
  //     "properties": `
  //     - Valid for any positive base
  //  - Commonly used with base e or 10
  //  - Preserves function value
  //  - Useful for calculations`,
  //     "examples": `$\\log_2(x) = \\frac{\\ln(x)}{\\ln(2)}$
  //  $\\log_3(x) = \\frac{\\log_{10}(x)}{\\log_{10}(3)}$`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Logarithmic Growth",
  //   formula: "Growth pattern where variable increases by additive constant when input is multiplied by constant: $f(cx) = f(x) + k$",
  //   fields: {
  //     "properties": `- Slower than polynomial
  //  - Inverse of exponential
  //  - Common in natural processes
  //  - Scale-invariant growth`,
  //     "examples": `- Computing complexity O(log n)
  //  - pH scale
  //  - Earthquake magnitude
  //  - Sound intensity (decibels)`
  //   },
  //   category: "Logarithms"
  //  },
   
  //  {
  //   name: "Logarithmic Transformation",
  //   formula: "Converting data by taking logarithm: $y = \\log_b(x)$ to linearize relationships or normalize distributions",
  //   fields: {
  //     "properties": `
  //     - Compresses large ranges
  //  - Normalizes skewed data
  //  - Linearizes exponential relationships
  //  - Preserves order`,
  //     "applications": `- Statistical analysis
  //  - Data visualization
  //  - Economic scales
  //  - Sound measurement`
  //   },
  //   category: "Logarithms"
  //  },

//Category -Polynomials

// Polynomials Category — 23 Definition Entries for algebraTermsList

{
  name: "Polynomial",
  formula: "An expression of the form $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ where the exponents are non-negative integers.",
  link: { label: "Polynomials", url: "/algebra/polynomials" },
  fields: {
    "intuition": {
      text: `A polynomial is built from three ingredients: a variable, coefficients, and non-negative integer powers. Addition, subtraction, and multiplication are allowed; division by the variable is not. The expression $3x^4 - 2x^2 + 5x - 7$ qualifies. The expressions $x^{-2} + 3$, $\\sqrt{x} + 1$, and $2^x$ do not — each violates the non-negative integer exponent requirement.

Polynomials are closed under addition, subtraction, and multiplication: combining two polynomials through these operations always yields another polynomial. Division can break this — $\\frac{x^2+1}{x}$ is not a polynomial.`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Three columns. Left column labeled "IS a polynomial" showing $3x^4 - 2x^2 + 5$, $x + 7$, $42$ (constant). Right column labeled "NOT a polynomial" showing $x^{-2} + 3$ (negative exponent), $\\sqrt{x} + 1$ (fractional exponent), $2^x$ (variable in exponent). Each invalid example has a small red annotation identifying the violation.]`,
      //     alt: "Polynomial vs non-polynomial expressions",
      //     caption: "The exponent on the variable must be a non-negative integer."
      //   }
      // ],
      links: [
        { label: "What is a Polynomial?", url: "/algebra/polynomials#1" }
      ]
    },
    "examples": `$5x^3 - x + 2$ — polynomial of degree $3$

$x^2 + 1$ — polynomial of degree $2$

$7$ — polynomial of degree $0$ (constant)

$0$ — the zero polynomial (degree undefined or $-\\infty$)`,
    "related concepts": `
- [Term (of a Polynomial)](/algebra/definitions#term_(of_a_polynomial))
- [Degree (of a Polynomial)](/algebra/definitions#degree_(of_a_polynomial))
- [Leading Coefficient](/algebra/definitions#leading_coefficient)
- [Polynomial Operations](/algebra/polynomials/operations)
- [Factoring Polynomials](/algebra/polynomials/factoring)`
  },
  category: "Polynomials"
},

{
  name: "Term (of a Polynomial)",
  formula: "A single unit within a polynomial: a coefficient multiplied by a power of the variable, such as $4x^3$ or $-2x$ or $7$.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "intuition": `Every polynomial is a sum of terms. In $4x^3 - 2x + 7$, the three terms are $4x^3$, $-2x$, and $7$. Each term has a coefficient (numerical factor) and a degree (the exponent on the variable). The signs belong to the terms — the second term is $-2x$, not $2x$.`,
    "key distinction": `A term is one piece of a polynomial; the polynomial is the full expression. The term $4x^3$ has degree $3$ and coefficient $4$. Polynomials are classified by their number of terms: one term is a monomial, two is a binomial, three is a trinomial.`,
    "related concepts": `
- [Polynomial](/algebra/definitions#polynomial)
- [Monomial](/algebra/definitions#monomial)
- [Binomial](/algebra/definitions#binomial)
- [Trinomial](/algebra/definitions#trinomial)
- [Like Terms](/algebra/definitions#like_terms)
- [Polynomial Vocabulary](/algebra/polynomials#2)`
  },
  category: "Polynomials"
},

{
  name: "Leading Coefficient",
  formula: "The coefficient of the highest-degree term in a polynomial written in standard form.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "intuition": `In $4x^3 - 2x + 7$, the leading term is $4x^3$ and the leading coefficient is $4$. This single number controls the polynomial's large-scale behavior: it determines whether the graph ultimately rises or falls and how steeply. Two polynomials of the same degree with opposite leading coefficients produce mirror-image end behavior.`,
    "properties": `• The leading coefficient is always the first coefficient visible in standard form

• Sign determines end behavior direction:
  — Positive leading coefficient with even degree: both ends rise
  — Negative leading coefficient with even degree: both ends fall
  — Positive leading coefficient with odd degree: left falls, right rises
  — Negative leading coefficient with odd degree: left rises, right falls

• When the leading coefficient is $1$, the polynomial is called monic`,
    "related concepts": `
- [End Behavior](/algebra/definitions#end_behavior)
- [Degree (of a Polynomial)](/algebra/definitions#degree_(of_a_polynomial))
- [Standard Form](/algebra/definitions#standard_form)
- [End Behavior and the Leading Term](/algebra/polynomials/graphing#3)`
  },
  category: "Polynomials"
},

{
  name: "Constant Term",
  formula: "The term with no variable factor — the value $a_0$ in a polynomial, equal to $P(0)$.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "intuition": `The constant term is what remains when $x = 0$. In $3x^2 - 5x + 8$, the constant term is $8$, and indeed $P(0) = 8$. Geometrically, it gives the y-intercept of the polynomial's graph. In the Rational Root Theorem, the factors of the constant term form the numerator candidates for rational roots.`,
    "examples": `$x^3 - 4x + 9$ — constant term is $9$, y-intercept at $(0, 9)$

$2x^2 + x$ — constant term is $0$ (the graph passes through the origin)

$-5$ — the entire polynomial is its own constant term`,
    "related concepts": `
- [Leading Coefficient](/algebra/definitions#leading_coefficient)
- [Rational Root Theorem](/algebra/definitions#rational_root_theorem)
- [Intercepts](/algebra/polynomials/graphing#2)`
  },
  category: "Polynomials"
},

{
  name: "Degree (of a Polynomial)",
  formula: "The highest exponent appearing on the variable in any term of the polynomial.",
  link: { label: "Polynomial Degree", url: "/algebra/polynomials#3" },
  fields: {
    "intuition": `Degree measures a polynomial's complexity. It caps the number of roots, bounds the number of turning points to $n-1$, and determines end behavior. A constant like $5$ has degree $0$. A linear expression like $2x+1$ has degree $1$. The zero polynomial is a special case — its degree is left undefined or assigned $-\\infty$.`,
    "properties": `• Degree of a sum/difference: at most the larger of the two input degrees

• Degree of a product: always the sum of the two input degrees

• Classification by degree:
  — $0$: constant
  — $1$: linear
  — $2$: quadratic
  — $3$: cubic
  — $4$: quartic
  — $5$: quintic

• A polynomial of degree $n$ has at most $n$ real roots and at most $n-1$ turning points`,
    "related concepts": `
- [Polynomial](/algebra/definitions#polynomial)
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Turning Point](/algebra/definitions#turning_point)
- [Number of Roots](/algebra/polynomials/roots#3)
- [Degree Classifications](/algebra/polynomials#4)
- [Degree and Operations](/algebra/polynomials/operations#8)`
  },
  category: "Polynomials"
},

{
  name: "Monomial",
  formula: "A polynomial with exactly one term: a coefficient times a power of the variable, such as $5x^2$.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "examples": `$7x^3$ — monomial of degree $3$

$-4$ — monomial of degree $0$

$x$ — monomial of degree $1$ with coefficient $1$`,
    "key distinction": `A monomial has one term. A binomial has two. A trinomial has three. Beyond three, no special name — just "polynomial." A monomial can also serve as a factor: extracting a GCF often means pulling a monomial out of every term.`,
    "related concepts": `
- [Term (of a Polynomial)](/algebra/definitions#term_(of_a_polynomial))
- [Binomial](/algebra/definitions#binomial)
- [Trinomial](/algebra/definitions#trinomial)
- [Greatest Common Factor (GCF)](/algebra/definitions#greatest_common_factor_(gcf))`
  },
  category: "Polynomials"
},

{
  name: "Binomial",
  formula: "A polynomial with exactly two terms, such as $x + 3$ or $x^2 - 4$.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "examples": `$x + 3$ — linear binomial

$x^2 - 4$ — difference of squares, factors as $(x+2)(x-2)$

$x^3 + 8$ — sum of cubes, factors as $(x+2)(x^2-2x+4)$`,
    "key distinction": `Many factoring patterns produce or consume binomials: the difference of squares yields two binomial factors, FOIL multiplies two binomials into a trinomial, and the sum/difference of cubes decomposes a binomial into a binomial times a trinomial.`,
    "related concepts": `
- [Monomial](/algebra/definitions#monomial)
- [Trinomial](/algebra/definitions#trinomial)
- [Difference of Squares](/algebra/definitions#difference_of_squares)
- [Sum and Difference of Cubes](/algebra/definitions#sum_and_difference_of_cubes)`
  },
  category: "Polynomials"
},

{
  name: "Trinomial",
  formula: "A polynomial with exactly three terms, such as $x^2 + 5x + 6$.",
  link: { label: "Polynomial Vocabulary", url: "/algebra/polynomials#2" },
  fields: {
    "examples": `$x^2 + 5x + 6$ — factors as $(x+2)(x+3)$

$x^2 - 4x + 4$ — perfect square trinomial, factors as $(x-2)^2$

$2x^2 + 3x - 5$ — general-case trinomial requiring the ac-method`,
    "key distinction": `Quadratic trinomials $ax^2 + bx + c$ are the most common factoring targets. When $a = 1$, find two numbers that multiply to $c$ and add to $b$. When $a \\neq 1$, the ac-method or trial-and-error applies. A perfect square trinomial $a^2 \\pm 2ab + b^2$ factors as $(a \\pm b)^2$.`,
    "related concepts": `
- [Monomial](/algebra/definitions#monomial)
- [Binomial](/algebra/definitions#binomial)
- [Perfect Square Trinomial](/algebra/definitions#perfect_square_trinomial)
- [Factoring Trinomials](/algebra/polynomials/factoring#4)`
  },
  category: "Polynomials"
},

{
  name: "Like Terms",
  formula: "Terms that share the same variable raised to the same exponent, differing only in their coefficients.",
  link: { label: "Adding Polynomials", url: "/algebra/polynomials/operations#1" },
  fields: {
    "intuition": `$3x^2$ and $-5x^2$ are like terms — same variable, same exponent. They combine to $-2x^2$. The terms $3x^2$ and $3x^3$ are not like terms because the exponents differ. Combining like terms is the mechanism behind polynomial addition and subtraction.`,
    "common errors": `Treating $x^2$ and $x$ as like terms — they are not; their exponents differ.

Treating $3xy$ and $3x^2$ as like terms — different variable structure.

Forgetting to combine all like terms after multiplication, leaving the result unsimplified.`,
    "related concepts": `
- [Term (of a Polynomial)](/algebra/definitions#term_(of_a_polynomial))
- [Adding Polynomials](/algebra/polynomials/operations#1)
- [Subtracting Polynomials](/algebra/polynomials/operations#2)`
  },
  category: "Polynomials"
},

{
  name: "Root (of a Polynomial)",
  formula: "A value $r$ such that $P(r) = 0$. Also called a zero or solution of the polynomial equation $P(x) = 0$.",
  link: { label: "Roots of a Polynomial", url: "/algebra/polynomials/roots" },
  fields: {
    "intuition": `A root is an input that makes the polynomial vanish. If $P(x) = x^2 - 5x + 6$, then $P(2) = 0$ and $P(3) = 0$, so $2$ and $3$ are roots. Each root corresponds to a factor: root $r$ gives factor $(x - r)$. Geometrically, real roots are the x-intercepts of the polynomial's graph.`,
    "properties": `• A polynomial of degree $n$ has at most $n$ real roots

• Over the complex numbers, it has exactly $n$ roots (counted with multiplicity)

• Each root $r$ yields a factor $(x - r)$, and vice versa

• Verification: substitute $r$ into $P(x)$ and check that the result is zero`,
    "related concepts": `
- [Multiplicity](/algebra/definitions#multiplicity)
- [Factor Theorem](/algebra/definitions#factor_theorem)
- [Factoring](/algebra/definitions#factoring)
- [Fundamental Theorem of Algebra](/algebra/definitions#fundamental_theorem_of_algebra)
- [What is a Root?](/algebra/polynomials/roots#1)
- [Roots and Factors](/algebra/polynomials/roots#2)`
  },
  category: "Polynomials"
},

{
  name: "Multiplicity",
  formula: "The number of times a root $r$ appears as a factor $(x - r)^k$ in the polynomial's factorization; $k$ is the multiplicity.",
  link: { label: "Multiplicity", url: "/algebra/polynomials/roots#4" },
  fields: {
    "intuition": `In $(x-2)^3(x+1)$, the root $x = 2$ has multiplicity $3$ and the root $x = -1$ has multiplicity $1$. The total multiplicities sum to the degree. Multiplicity determines how the graph behaves at the root: odd multiplicity causes a crossing, even multiplicity causes the graph to touch the axis and turn back.`,
    "properties": `• Multiplicity $1$ (simple root): graph crosses the axis cleanly

• Multiplicity $2$: graph touches the axis and bounces, creating a local extremum

• Multiplicity $3$: graph crosses with an S-shaped inflection, flattening near the axis

• Higher even multiplicities bounce; higher odd multiplicities cross with increasing flatness`,
    "related concepts": `
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Behavior at Roots](/algebra/polynomials/graphing#5)
- [Multiplicity Section](/algebra/polynomials/roots#4)
- [Fundamental Theorem of Algebra](/algebra/definitions#fundamental_theorem_of_algebra)`
  },
  category: "Polynomials"
},

{
  name: "Factoring",
  formula: "Writing a polynomial as a product of two or more polynomials of lower degree.",
  link: { label: "Factoring Polynomials", url: "/algebra/polynomials/factoring" },
  fields: {
    "intuition": `Factoring reverses multiplication. The polynomial $x^2 + 5x + 6$ factors as $(x+2)(x+3)$. The factored form reveals roots directly and simplifies equation-solving, graphing, and simplification of rational expressions. A polynomial is fully factored when no factor can be broken down further over the chosen number system.`,
    "methods": `• Extract the GCF first — always

• Grouping: pair terms strategically in four-term polynomials

• Trinomial factoring: find factors of $ac$ that sum to $b$ in $ax^2 + bx + c$

• Pattern recognition: difference of squares, perfect square trinomials, sum/difference of cubes

• Synthetic division: use a known root to extract a linear factor and reduce degree`,
    "related concepts": `
- [Greatest Common Factor (GCF)](/algebra/definitions#greatest_common_factor_(gcf))
- [Difference of Squares](/algebra/definitions#difference_of_squares)
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Irreducible Polynomial](/algebra/definitions#irreducible_polynomial)
- [What is Factoring?](/algebra/polynomials/factoring#1)
- [Factoring Strategy](/algebra/polynomials/factoring#10)`
  },
  category: "Polynomials"
},

{
  name: "Greatest Common Factor (GCF)",
  formula: "The largest expression — numerical and variable parts combined — that divides evenly into every term of a polynomial.",
  link: { label: "GCF Factoring", url: "/algebra/polynomials/factoring#2" },
  fields: {
    "intuition": `For $6x^3 + 9x^2 - 3x$, each term is divisible by $3x$. Factoring gives $3x(2x^2 + 3x - 1)$. The GCF takes the lowest power of each variable present across all terms and the numerical GCF of all coefficients.`,
    "examples": `$6x^3 + 9x^2 - 3x \\;\\to\\; 3x(2x^2 + 3x - 1)$

$4x^2y + 8xy^2 \\;\\to\\; 4xy(x + 2y)$

$2x^3 + 8x^2 + 8x \\;\\to\\; 2x(x^2 + 4x + 4) = 2x(x+2)^2$`,
    "related concepts": `
- [Factoring](/algebra/definitions#factoring)
- [GCF Section](/algebra/polynomials/factoring#2)
- [GCD](/arithmetic/divisibility/gcd)`
  },
  category: "Polynomials"
},

{
  name: "Difference of Squares",
  formula: "$a^2 - b^2 = (a + b)(a - b)$",
  link: { label: "Difference of Squares", url: "/algebra/polynomials/factoring#6" },
  fields: {
    "intuition": `Any expression that matches the pattern "something squared minus something else squared" factors instantly into conjugate binomials. The key is recognizing the pattern: both terms must be perfect squares, joined by subtraction. A sum of squares $a^2 + b^2$ does not factor over the reals.`,
    "examples": `$x^2 - 9 = (x+3)(x-3)$

$4x^2 - 25 = (2x+5)(2x-5)$

$x^4 - 16 = (x^2+4)(x^2-4) = (x^2+4)(x+2)(x-2)$`,
    "related concepts": `
- [Factoring](/algebra/definitions#factoring)
- [Irreducible Polynomial](/algebra/definitions#irreducible_polynomial)
- [Conjugate](/algebra/definitions#conjugate)
- [Difference of Squares Section](/algebra/polynomials/factoring#6)`
  },
  category: "Polynomials"
},

{
  name: "Perfect Square Trinomial",
  formula: "$a^2 + 2ab + b^2 = (a + b)^2$ and $a^2 - 2ab + b^2 = (a - b)^2$.",
  link: { label: "Perfect Square Trinomials", url: "/algebra/polynomials/factoring#7" },
  fields: {
    "intuition": `A trinomial is a perfect square when the first and last terms are perfect squares and the middle term equals twice their product. Recognizing this pattern avoids trial-and-error factoring entirely — the factored form is immediate.`,
    "examples": `$x^2 + 6x + 9 = (x+3)^2$ — middle term $6x = 2 \\cdot x \\cdot 3$ ✓

$4x^2 - 12x + 9 = (2x-3)^2$ — middle term $12x = 2 \\cdot 2x \\cdot 3$ ✓

$x^2 + 5x + 4$ — not a perfect square ($5 \\neq 2 \\cdot 1 \\cdot 2$)`,
    "related concepts": `
- [Trinomial](/algebra/definitions#trinomial)
- [Factoring](/algebra/definitions#factoring)
- [PST Section](/algebra/polynomials/factoring#7)
- [Algebraic Identities](/algebra/identities)`
  },
  category: "Polynomials"
},

{
  name: "Sum and Difference of Cubes",
  formula: "$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ and $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.",
  link: { label: "Sum and Difference of Cubes", url: "/algebra/polynomials/factoring#8" },
  fields: {
    "intuition": `Unlike squares, both the sum and the difference of two cubes factor. The pattern produces a binomial factor and a trinomial factor. The signs follow a consistent rule: the binomial matches the original sign, and in the trinomial the middle term flips sign while the last stays positive.`,
    "examples": `$x^3 + 8 = (x+2)(x^2 - 2x + 4)$

$27x^3 - 1 = (3x - 1)(9x^2 + 3x + 1)$

$x^6 - 64 = (x^2)^3 - 4^3 = (x^2 - 4)(x^4 + 4x^2 + 16)$`,
    "related concepts": `
- [Difference of Squares](/algebra/definitions#difference_of_squares)
- [Factoring](/algebra/definitions#factoring)
- [Sum/Diff Cubes Section](/algebra/polynomials/factoring#8)`
  },
  category: "Polynomials"
},

{
  name: "Irreducible Polynomial",
  formula: "A polynomial that cannot be factored into polynomials of lower degree over a given number system.",
  link: { label: "Irreducible Polynomials", url: "/algebra/polynomials/factoring#11" },
  fields: {
    "intuition": `Whether a polynomial is irreducible depends on the number system. Over the reals, $x^2 + 1$ is irreducible — no pair of real-coefficient linear factors multiplies to give it. Over the complex numbers, $x^2 + 1 = (x+i)(x-i)$ and is therefore reducible. The Fundamental Theorem of Algebra guarantees that every polynomial factors completely into linear factors over $\\mathbb{C}$.`,
    "examples": `$x^2 + 1$ — irreducible over $\\mathbb{R}$, reducible over $\\mathbb{C}$

$x^2 + x + 1$ — irreducible over $\\mathbb{R}$ (discriminant $< 0$)

$x^2 - 2$ — irreducible over $\\mathbb{Q}$, reducible over $\\mathbb{R}$ as $(x - \\sqrt{2})(x + \\sqrt{2})$`,
    "related concepts": `
- [Factoring](/algebra/definitions#factoring)
- [Fundamental Theorem of Algebra](/algebra/definitions#fundamental_theorem_of_algebra)
- [Discriminant](/algebra/definitions#discriminant)
- [Irreducible Polynomials Section](/algebra/polynomials/factoring#11)`
  },
  category: "Polynomials"
},

{
  name: "End Behavior",
  formula: "The direction the graph of a polynomial heads as $x \\to +\\infty$ and $x \\to -\\infty$, determined by the leading term $a_nx^n$.",
  link: { label: "End Behavior", url: "/algebra/polynomials/graphing#3" },
  fields: {
    "properties": `Controlled entirely by the degree $n$ and the sign of $a_n$:

• Even degree, $a_n > 0$: both ends rise ($\\uparrow\\;\\uparrow$)
• Even degree, $a_n < 0$: both ends fall ($\\downarrow\\;\\downarrow$)
• Odd degree, $a_n > 0$: left falls, right rises ($\\downarrow\\;\\uparrow$)
• Odd degree, $a_n < 0$: left rises, right falls ($\\uparrow\\;\\downarrow$)

No other coefficient affects end behavior — for sufficiently large $|x|$, the leading term dominates.`,
    "examples": `$2x^4 - 100x^3 + x$: even degree, positive leading coefficient → both ends rise

$-x^3 + 5x$: odd degree, negative leading coefficient → left rises, right falls

$-3x^6$: even degree, negative leading coefficient → both ends fall`,
    "related concepts": `
- [Leading Coefficient](/algebra/definitions#leading_coefficient)
- [Degree (of a Polynomial)](/algebra/definitions#degree_(of_a_polynomial))
- [End Behavior Section](/algebra/polynomials/graphing#3)
- [Sketching Strategy](/algebra/polynomials/graphing#11)`
  },
  category: "Polynomials"
},

{
  name: "Turning Point",
  formula: "A point where a polynomial's graph changes from increasing to decreasing or vice versa; a polynomial of degree $n$ has at most $n - 1$ turning points.",
  link: { label: "Turning Points", url: "/algebra/polynomials/graphing#4" },
  fields: {
    "intuition": `Turning points are local maxima and local minima — the peaks and valleys of the curve. A quadratic has exactly one (the vertex). A cubic has at most two. The bound $n-1$ is a maximum, not a guarantee: the cubic $x^3$ has zero turning points because it increases monotonically.`,
    "examples": `$x^2$: degree $2$, exactly $1$ turning point (vertex at the origin)

$x^3 - 3x$: degree $3$, exactly $2$ turning points

$x^3$: degree $3$, $0$ turning points (inflection point at origin, no reversal)

$x^4 - 2x^2$: degree $4$, exactly $3$ turning points`,
    "related concepts": `
- [Degree (of a Polynomial)](/algebra/definitions#degree_(of_a_polynomial))
- [End Behavior](/algebra/definitions#end_behavior)
- [Turning Points Section](/algebra/polynomials/graphing#4)
- [Sketching Strategy](/algebra/polynomials/graphing#11)`
  },
  category: "Polynomials"
},

{
  name: "Remainder Theorem",
  formula: "When $P(x)$ is divided by $(x - c)$, the remainder equals $P(c)$.",
  link: { label: "Remainder Theorem", url: "/algebra/polynomials/rules#1" },
  fields: {
    "intuition": `The remainder can be found without performing division — just evaluate the polynomial at $c$. This works because $P(x) = (x - c) \\cdot Q(x) + R$, and substituting $x = c$ annihilates the quotient term, leaving $P(c) = R$.`,
    "examples": `$P(x) = x^3 - 4x + 2$ divided by $(x - 3)$:

$P(3) = 27 - 12 + 2 = 17$

The remainder is $17$ — no long division needed.

$P(x) = 2x^4 - x^2 + 5$ divided by $(x + 1)$:

Read $(x+1)$ as $(x - (-1))$, evaluate $P(-1) = 2 - 1 + 5 = 6$. Remainder is $6$.`,
    "related concepts": `
- [Factor Theorem](/algebra/definitions#factor_theorem)
- [Polynomial Long Division](/algebra/definitions#polynomial_long_division)
- [Synthetic Division](/algebra/definitions#synthetic_division)
- [Remainder Theorem Section](/algebra/polynomials/rules#1)
- [Why the Remainder Theorem Works](/algebra/polynomials/rules#2)`
  },
  category: "Polynomials"
},

{
  name: "Factor Theorem",
  formula: "$(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.",
  link: { label: "Factor Theorem", url: "/algebra/polynomials/rules#3" },
  fields: {
    "intuition": `A direct consequence of the Remainder Theorem: if the remainder is zero, the division is exact and $(x-c)$ divides $P(x)$. This bridges roots and factors — finding a root immediately gives a factor, and confirming a factor immediately gives a root.`,
    "examples": `Is $(x - 2)$ a factor of $x^3 - 6x^2 + 11x - 6$?

$P(2) = 8 - 24 + 22 - 6 = 0$ ✓ — yes, $(x-2)$ is a factor.

Is $(x + 1)$ a factor of $x^2 + 3x + 5$?

$P(-1) = 1 - 3 + 5 = 3 \\neq 0$ — no.`,
    "related concepts": `
- [Remainder Theorem](/algebra/definitions#remainder_theorem)
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Factoring](/algebra/definitions#factoring)
- [Factor Theorem Section](/algebra/polynomials/rules#3)
- [Using the Factor Theorem](/algebra/polynomials/rules#4)`
  },
  category: "Polynomials"
},

{
  name: "Rational Root Theorem",
  formula: "If $\\frac{p}{q}$ (in lowest terms) is a rational root of $a_nx^n + \\cdots + a_0$, then $p$ divides $a_0$ and $q$ divides $a_n$.",
  link: { label: "Rational Root Theorem", url: "/algebra/polynomials/rules#5" },
  fields: {
    "intuition": `This theorem converts root-finding from open-ended guessing into a finite checklist. List all factors of the constant term (candidates for $p$) and all factors of the leading coefficient (candidates for $q$). Form every ratio $\\pm p/q$. Only these values can be rational roots — test each using the Remainder Theorem.`,
    "examples": `$P(x) = 2x^3 - 3x^2 - 8x + 12$

$a_0 = 12$: factors $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$

$a_n = 2$: factors $\\pm 1, \\pm 2$

Candidates: $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$

Test $P(2) = 16 - 12 - 16 + 12 = 0$ ✓ → $x = 2$ is a root.`,
    "restrictions": `Only finds rational roots. Irrational roots like $\\sqrt{2}$ and complex roots like $i$ will never appear in the candidate list. A polynomial with integer coefficients may have no rational roots at all — the theorem gives a finite list that may yield zero hits.

When the leading coefficient is $1$ (monic polynomial), the theorem reduces to the Integer Root Theorem: every rational root must be an integer dividing $a_0$.`,
    "related concepts": `
- [Factor Theorem](/algebra/definitions#factor_theorem)
- [Remainder Theorem](/algebra/definitions#remainder_theorem)
- [Synthetic Division](/algebra/definitions#synthetic_division)
- [Rational Root Theorem Section](/algebra/polynomials/rules#5)
- [Limitations](/algebra/polynomials/rules#7)`
  },
  category: "Polynomials"
},

{
  name: "Descartes' Rule of Signs",
  formula: "The number of positive real roots of $P(x)$ equals the number of sign changes in its coefficients, or less by an even number. For negative roots, apply the rule to $P(-x)$.",
  link: { label: "Descartes' Rule of Signs", url: "/algebra/polynomials/rules#9" },
  fields: {
    "intuition": `Before testing any specific value, the sequence of coefficient signs reveals how many positive and negative roots are possible. Count sign changes in the coefficient sequence of $P(x)$ for positive roots, and in $P(-x)$ for negative roots. Each count gives the maximum, with the actual number differing by $0, 2, 4, \\ldots$ (always by an even amount).`,
    "examples": `$P(x) = x^3 - 3x^2 + x + 5$

Coefficient signs: $+, -, +, +$ → sign changes at positions $1 \\to 2$ and $2 \\to 3$ → $2$ sign changes

Positive roots: $2$ or $0$

$P(-x) = -x^3 - 3x^2 - x + 5$

Signs: $-, -, -, +$ → $1$ sign change → exactly $1$ negative root.`,
    "related concepts": `
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Rational Root Theorem](/algebra/definitions#rational_root_theorem)
- [Descartes' Rule Section](/algebra/polynomials/rules#9)`
  },
  category: "Polynomials"
},

{
  name: "Fundamental Theorem of Algebra",
  formula: "Every polynomial of degree $n \\geq 1$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$, counted with multiplicity.",
  link: { label: "Fundamental Theorem", url: "/algebra/polynomials/rules#11" },
  fields: {
    "intuition": `This theorem guarantees that roots always exist — the complex number system is large enough that no polynomial of positive degree can avoid having a root. It also means every polynomial of degree $n$ factors completely into $n$ linear factors over $\\mathbb{C}$: $P(x) = a_n(x - r_1)(x - r_2) \\cdots (x - r_n)$.`,
    "properties": `• Every polynomial of degree $n \\geq 1$ has at least one complex root

• Counting multiplicity, it has exactly $n$ complex roots

• Complex roots of polynomials with real coefficients come in conjugate pairs: if $a + bi$ is a root, so is $a - bi$

• Consequences: no polynomial equation of positive degree is unsolvable over $\\mathbb{C}$`,
    "related concepts": `
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Multiplicity](/algebra/definitions#multiplicity)
- [Irreducible Polynomial](/algebra/definitions#irreducible_polynomial)
- [Number of Roots](/algebra/polynomials/roots#3)
- [Real vs Complex Roots](/algebra/polynomials/roots#9)
- [Fundamental Theorem Section](/algebra/polynomials/rules#11)`
  },
  category: "Polynomials"
},

{
  name: "Vieta's Formulas",
  formula: "For $P(x) = a_n x^n + \\cdots + a_0$ with roots $r_1, \\ldots, r_n$: $r_1 + r_2 + \\cdots + r_n = -\\frac{a_{n-1}}{a_n}$ and $r_1 \\cdot r_2 \\cdots r_n = (-1)^n \\frac{a_0}{a_n}$.",
  link: { label: "Vieta's Formulas", url: "/algebra/polynomials/rules#12" },
  fields: {
    "intuition": `Vieta's formulas relate a polynomial's roots directly to its coefficients, bypassing the need to find the roots individually. The sum of all roots equals $-a_{n-1}/a_n$. The product of all roots equals $(-1)^n a_0/a_n$. For a quadratic $ax^2 + bx + c$, this simplifies to $r_1 + r_2 = -b/a$ and $r_1 \\cdot r_2 = c/a$.`,
    "examples": `$x^2 - 5x + 6$ has roots $2$ and $3$.

Sum: $2 + 3 = 5 = -(-5)/1$ ✓

Product: $2 \\cdot 3 = 6 = 6/1$ ✓

$x^3 - 6x^2 + 11x - 6$ has roots $1, 2, 3$.

Sum: $1 + 2 + 3 = 6 = -(-6)/1$ ✓

Product: $1 \\cdot 2 \\cdot 3 = 6 = (-1)^3 \\cdot (-6)/1 = 6$ ✓`,
    "related concepts": `
- [Root (of a Polynomial)](/algebra/definitions#root_(of_a_polynomial))
- [Leading Coefficient](/algebra/definitions#leading_coefficient)
- [Constant Term](/algebra/definitions#constant_term)
- [Vieta's Formulas Section](/algebra/polynomials/rules#12)
- [Sum and Product of Roots](/algebra/polynomials/roots#11)`
  },
  category: "Polynomials"
},

{
  name: "Synthetic Division",
  formula: "A shorthand method for dividing a polynomial by a linear binomial $(x - c)$ using only coefficients and the value $c$.",
  link: { label: "Synthetic Division", url: "/algebra/polynomials/operations#7" },
  fields: {
    "intuition": `Synthetic division compresses polynomial long division into a compact numerical procedure. Write only the coefficients (including zeros for missing terms), bring down the first, multiply by $c$, add down, repeat. The final row gives the quotient coefficients and the remainder — which, by the Remainder Theorem, equals $P(c)$.`,
    "restrictions": `Only works when dividing by a linear binomial $(x - c)$. For divisors of higher degree (like $x^2 + 1$), polynomial long division is required. For $(x + 3)$, use $c = -3$ — the sign reverses.`,
    "related concepts": `
- [Polynomial Long Division](/algebra/definitions#polynomial_long_division)
- [Remainder Theorem](/algebra/definitions#remainder_theorem)
- [Factor Theorem](/algebra/definitions#factor_theorem)
- [Rational Root Theorem](/algebra/definitions#rational_root_theorem)
- [Synthetic Division Section](/algebra/polynomials/operations#7)
- [Finding Roots via Synthetic Division](/algebra/polynomials/roots#8)`
  },
  category: "Polynomials"
},

{
  name: "Polynomial Long Division",
  formula: "A systematic procedure for dividing one polynomial by another, producing a quotient and a remainder: $P(x) = D(x) \\cdot Q(x) + R(x)$.",
  link: { label: "Polynomial Long Division", url: "/algebra/polynomials/operations#6" },
  fields: {
    "intuition": `The algorithm mirrors long division of integers. Divide the leading term of the dividend by the leading term of the divisor, multiply the result back through the entire divisor, subtract, and repeat with the new reduced polynomial. The process terminates when the degree of the remaining polynomial is less than the degree of the divisor.`,
    "key distinction": `Polynomial long division handles any divisor — linear, quadratic, or higher. Synthetic division is a shortcut restricted to linear divisors $(x - c)$. When the divisor has degree $2$ or more, long division is the only standard method.

Missing terms must be filled with zero coefficients to maintain alignment by degree: divide $x^3 + 5x - 2$ by $(x - 1)$ by writing $x^3 + 0x^2 + 5x - 2$.`,
    "related concepts": `
- [Synthetic Division](/algebra/definitions#synthetic_division)
- [Remainder Theorem](/algebra/definitions#remainder_theorem)
- [Long Division Section](/algebra/polynomials/operations#6)
- [Degree and Operations](/algebra/polynomials/operations#8)`
  },
  category: "Polynomials"
},

   
  //   {
  //     "name": "Polynomial",
  //     "formula": "An expression consisting of variables, coefficients, and non-negative integer exponents combined using arithmetic operations.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Coefficient",
  //     "formula": "A numerical factor that multiplies a variable in a polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Leading Coefficient",
  //     "formula": "The coefficient of the term with the highest degree in a polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Free Coefficient",
  //     "formula": "The constant term in a polynomial with no variable attached.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Degree",
  //     "formula": "The highest exponent of the variable in a polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Monic Polynomial",
  //     "formula": "A polynomial whose leading coefficient is 1.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Zero Polynomial",
  //     "formula": "A polynomial where all coefficients are zero.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Zero Function",
  //     "formula": "A function that always evaluates to zero for any input.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Undefined Degree",
  //     "formula": "The degree of the zero polynomial, which is not defined.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Minus Infinity Degree",
  //     "formula": "An informal term sometimes used to describe the degree of the zero polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Equation",
  //     "formula": "An equation that sets a polynomial equal to another expression, typically zero.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Addition",
  //     "formula": "The sum of two or more polynomials by adding corresponding terms.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Subtraction",
  //     "formula": "The difference of two polynomials by subtracting corresponding terms.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Multiplication",
  //     "formula": "The product of two polynomials by distributing terms.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Division",
  //     "formula": "The process of dividing one polynomial by another, yielding a quotient and remainder.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Dividend",
  //     "formula": "The polynomial being divided in a division operation.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Divisor",
  //     "formula": "The polynomial by which another polynomial is divided.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Quotient",
  //     "formula": "The result of polynomial division before considering the remainder.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Remainder",
  //     "formula": "The leftover polynomial after division that cannot be further divided by the divisor.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Rational Function",
  //     "formula": "A function expressed as the ratio of two polynomials.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Remainder Theorem",
  //     "formula": "A theorem stating that the remainder when a polynomial P(x) is divided by (x - a) is P(a).",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Root of a Polynomial",
  //     "formula": "A value of the variable that makes the polynomial equal to zero.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Sum of Coefficients Rule",
  //     "formula": "The sum of all coefficients of a polynomial is found by evaluating it at x = 1.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Factoring",
  //     "formula": "Expressing a polynomial as a product of simpler polynomials.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Quadratic Formula",
  //     "formula": "A formula used to find the roots of a quadratic polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   }
  // ,
  
  //   {
  //     "name": "Complex Roots",
  //     "formula": "Non-real solutions of a polynomial equation, often involving imaginary numbers.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Multiplicity of a Root",
  //     "formula": "The number of times a particular root appears in the factorization of a polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Fundamental Theorem of Algebra",
  //     "formula": "A theorem stating that every non-constant polynomial has at least one complex root.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Existence Theorem",
  //     "formula": "A principle ensuring the existence of at least one solution for a given polynomial equation.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Factorization",
  //     "formula": "The decomposition of a polynomial into a product of lower-degree polynomials.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Derivative",
  //     "formula": "The derivative of a polynomial function, obtained by differentiating each term.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Increased Root",
  //     "formula": "A root of a polynomial whose multiplicity is greater than one.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Linear Factorization",
  //     "formula": "Expressing a polynomial as a product of linear factors corresponding to its roots.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Educated Guess Theorem",
  //     "formula": "A strategy for guessing rational roots of polynomials using integer coefficients.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Integer Coefficients",
  //     "formula": "A polynomial where all coefficients are whole numbers.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Rational Root Theorem",
  //     "formula": "A theorem that provides a possible set of rational roots for a polynomial with integer coefficients.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Factorization Theorem",
  //     "formula": "A theorem stating that polynomials can be factored uniquely over specific number systems.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Long Division",
  //     "formula": "A division algorithm for polynomials similar to numerical long division.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Multiple Root",
  //     "formula": "A root of a polynomial that appears more than once.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Finite Field",
  //     "formula": "A mathematical field containing a finite number of elements.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Modular Arithmetic",
  //     "formula": "A system of arithmetic where numbers wrap around after reaching a fixed modulus.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Factorization in Finite Fields",
  //     "formula": "The process of breaking a polynomial into irreducible factors within a finite field.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Quadratic Residue",
  //     "formula": "A number that is a square modulo a given prime number.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Roots in Finite Fields",
  //     "formula": "The solutions to a polynomial equation within a finite field.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Fundamental Theorem of Algebra (Finite Fields)",
  //     "formula": "A theorem stating that a polynomial of degree n over a finite field has at most n roots in that field.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Direct Substitution Method",
  //     "formula": "A technique for solving polynomials by directly substituting values.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Quadratic Formula in Finite Fields",
  //     "formula": "A modified version of the quadratic formula adapted for finite fields.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Multiple Root in Finite Fields",
  //     "formula": "A root of a polynomial in a finite field that has higher multiplicity.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Vieta's Formulas",
  //     "formula": "A set of equations relating the coefficients of a polynomial to sums and products of its roots.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Sum of Roots",
  //     "formula": "The sum of the roots of a polynomial, given by Vieta’s formulas.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Product of Roots",
  //     "formula": "The product of the roots of a polynomial, also given by Vieta’s formulas.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Coefficient Comparison",
  //     "formula": "A method for finding unknown coefficients by equating polynomials.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Root Multiplicity",
  //     "formula": "The number of times a particular root appears in the factorization of a polynomial.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Expansion",
  //     "formula": "The process of expanding a factored polynomial into standard form.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Sigma Notation",
  //     "formula": "A compact way to represent summation, often used in polynomial expressions.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Polynomial Factorization Using Roots",
  //     "formula": "The process of factoring a polynomial using its known roots.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  //   {
  //     "name": "Quadratic and Higher-Degree Root Relations",
  //     "formula": "Relationships between the roots and coefficients of quadratic and higher-degree polynomials.",
  //     "fields": [],
  //     "category": "Polynomials"
  //   },
  
  
  
//Category -Exponents



// Exponents Category — 15 Definition Entries for algebraTermsList

{
  name: "Power",
  formula: "An expression $a^n$ consisting of a base $a$ raised to an exponent $n$.",
  link: { label: "Powers", url: "/algebra/powers" },
  fields: {
    "intuition": {
      text: `A power compresses repeated multiplication into compact notation. The expression $a^n$ means $a$ multiplied by itself $n$ times when $n$ is a positive integer. The word "power" refers to the entire expression — not just the exponent.

Special names: $a^2$ is "$a$ squared," $a^3$ is "$a$ cubed." All others use "$a$ to the $n$th power."

The concept extends beyond counting repetitions: zero, negative, fractional, and irrational exponents each broaden the meaning while preserving the same algebraic laws.`,
      links: [
        { label: "Definition and Terminology", url: "/algebra/powers#1" },
        { label: "Notation and Conventions", url: "/algebra/powers#2" }
      ]
    },
    "examples": `$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$

$(-3)^2 = (-3)(-3) = 9$

$10^6 = 1{,}000{,}000$

$a^1 = a$ for any $a$

$1^n = 1$ for any $n$`,
    "related concepts": `
- [Base (of a Power)](!/algebra/definitions#base_(of_a_power))
- [Exponent](!/algebra/definitions#exponent)
- [Natural Exponent](!/algebra/definitions#natural_exponent)
- [Root](!/algebra/definitions#root) — the inverse operation
- [Logarithm](!/algebra/definitions#logarithm) — extracts the exponent`
  },
  category: "Exponents"
},

{
  name: "Base (of a Power)",
  formula: "The number $a$ in $a^n$ — the quantity being raised to a power.",
  link: { label: "Powers", url: "/algebra/powers" },
  fields: {
    "key distinction": `Parentheses determine what counts as the base:

$-2^2 = -(2^2) = -4$ — base is $2$, exponent applies to $2$ only

$(-2)^2 = (-2)(-2) = 4$ — base is $-2$, exponent applies to the entire quantity

Without parentheses, the exponent binds to the nearest symbol. The negative sign is not part of the base unless parentheses force it.`,
    "examples": `In $3^5$, the base is $3$

In $(-7)^3$, the base is $-7$

In $-7^3$, the base is $7$ (result is $-343$)

In $(2x)^4$, the base is $2x$`,
    "related concepts": `
- [Power](!/algebra/definitions#power)
- [Exponent](!/algebra/definitions#exponent)
- [Base (of a Logarithm)](!/algebra/definitions#base_(of_a_logarithm)) — different concept, same word
- [Notation and Conventions](!/algebra/powers#2)`
  },
  category: "Exponents"
},

{
  name: "Exponent",
  formula: "The number $n$ in $a^n$ that controls how the base is used — counting repetitions for natural exponents, and generalizing through zero, negative, rational, and irrational values.",
  link: { label: "Powers", url: "/algebra/powers" },
  fields: {
    "progression": `Each exponent type extends the previous while preserving the laws:

- Natural ($n = 1, 2, 3, \\ldots$): count repeated multiplications
- Zero ($n = 0$): $a^0 = 1$ for $a \\neq 0$, forced by the quotient rule
- Negative ($n < 0$): $a^{-n} = 1/a^n$, extends the pattern below zero
- Rational ($n = m/k$): $a^{m/k} = \\sqrt[k]{a^m}$, connects to roots
- Irrational ($n = \\pi, \\sqrt{2}, \\ldots$): defined as the limit of rational approximations

Domain restrictions tighten at each step: natural allows any base, negative excludes $0$, rational with even denominator requires $a \\geq 0$, irrational requires $a > 0$.`,
    "examples": `$2^3 = 8$ — natural exponent

$5^0 = 1$ — zero exponent

$2^{-3} = 1/8$ — negative exponent

$8^{2/3} = 4$ — rational exponent

$2^\\pi \\approx 8.825$ — irrational exponent`,
    "related concepts": `
- [Power](!/algebra/definitions#power)
- [Base (of a Power)](!/algebra/definitions#base_(of_a_power))
- [Natural Exponent](!/algebra/definitions#natural_exponent)
- [Zero Exponent](!/algebra/definitions#zero_exponent)
- [Negative Exponent](!/algebra/definitions#negative_exponent)
- [Rational Exponent](!/algebra/definitions#rational_exponent)
- [Irrational Exponent](!/algebra/definitions#irrational_exponent)`
  },
  category: "Exponents"
},

{
  name: "Natural Exponent",
  formula: "A positive integer exponent: $a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ times}}$ for $n \\geq 1$.",
  link: { label: "Natural Exponents", url: "/algebra/powers/natural-exponents" },
  fields: {
    "properties": `- Any real number can serve as base
- Even exponents always produce non-negative results: $(-3)^2 = 9$
- Odd exponents preserve sign: $(-3)^3 = -27$
- All laws of exponents are first derived here from counting and regrouping factors
- $a^1 = a$ for any $a$; $1^n = 1$ for any $n$`,
    "examples": `$3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$

$(-2)^4 = 16$ — even exponent, positive result

$(-2)^5 = -32$ — odd exponent, negative result

$10^3 = 1000$`,
    "related concepts": `
- [Power](!/algebra/definitions#power)
- [Exponent](!/algebra/definitions#exponent)
- [Zero Exponent](!/algebra/definitions#zero_exponent) — next extension
- [Sign Behavior](!/algebra/powers/natural-exponents#2)
- [Product Rule derivation](!/algebra/powers/natural-exponents#3)`
  },
  category: "Exponents"
},

{
  name: "Zero Exponent",
  formula: "$a^0 = 1$ for any $a \\neq 0$.",
  link: { label: "Zero Powers", url: "/algebra/powers/zero-powers" },
  fields: {
    "why it equals one": `Forced by the quotient rule: $a^n / a^n = a^{n-n} = a^0$. Since $a^n / a^n = 1$, we must have $a^0 = 1$.

A pattern argument confirms: $3^3 = 27$, $3^2 = 9$, $3^1 = 3$. Each step divides by $3$. Continuing: $3^0 = 1$.

The case $0^0$ is genuinely ambiguous — combinatorics assigns it $1$ (empty product), analysis leaves it undefined (indeterminate form $0^0$).`,
    "examples": `$5^0 = 1$

$(-3)^0 = 1$

$(0.001)^0 = 1$

$0^0$ — context-dependent`,
    "related concepts": `
- [Exponent](!/algebra/definitions#exponent)
- [Negative Exponent](!/algebra/definitions#negative_exponent) — next extension below zero
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — forces the definition
- [Why a⁰ = 1](!/algebra/powers/zero-powers#3)
- [The 0⁰ Debate](!/algebra/powers/zero-powers#4)`
  },
  category: "Exponents"
},

{
  name: "Negative Exponent",
  formula: "$a^{-n} = \\frac{1}{a^n}$ for $a \\neq 0$.",
  link: { label: "Negative Exponents", url: "/algebra/powers/negative-exponents" },
  fields: {
    "why reciprocals": `Forced by the quotient rule: $a^2 / a^5 = a^{2-5} = a^{-3}$. By cancellation, $a^2 / a^5 = 1/a^3$. So $a^{-3} = 1/a^3$.

The pattern extends the descending sequence: $3^1 = 3$, $3^0 = 1$, $3^{-1} = 1/3$, $3^{-2} = 1/9$.

Base cannot be zero — $0^{-n}$ requires dividing by $0^n = 0$, which is undefined.`,
    "examples": `$2^{-1} = 1/2$

$3^{-2} = 1/9$

$10^{-3} = 0.001$

$x^{-1} = 1/x$

$1/a^3 = a^{-3}$ — rewriting fractions without denominators`,
    "related concepts": `
- [Exponent](!/algebra/definitions#exponent)
- [Zero Exponent](!/algebra/definitions#zero_exponent) — one step above
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents)) — forces the definition
- [Definition of Negative Exponents](!/algebra/powers/negative-exponents#3)
- [Double Negatives and Reciprocals](!/algebra/powers/negative-exponents#4)`
  },
  category: "Exponents"
},

{
  name: "Irrational Exponent",
  formula: "An exponent that cannot be expressed as a fraction, such as $\\pi$ or $\\sqrt{2}$. The value $a^x$ is defined as the limit of $a^r$ as rational $r$ approaches $x$.",
  link: { label: "Irrational Exponents", url: "/algebra/powers/irrational-exponents" },
  fields: {
    "how it works": `The number $\\pi$ is irrational, so $2^\\pi$ cannot use the rational exponent definition. Instead, trap $\\pi$ between rational bounds and compute the corresponding powers:

$2^3 = 8$, $2^{3.1} \\approx 8.574$, $2^{3.14} \\approx 8.815$, $2^{3.1415} \\approx 8.824$

The values converge to $2^\\pi \\approx 8.825$.

This requires $a > 0$ — for $a \\leq 0$, the sequence of rational approximations does not converge consistently.`,
    "examples": `$2^\\pi \\approx 8.825$

$e^\\pi \\approx 23.141$

$10^{\\sqrt{2}} \\approx 25.119$`,
    "related concepts": `
- [Exponent](!/algebra/definitions#exponent) — completes the progression
- [Rational Exponent](!/algebra/definitions#rational_exponent) — the previous step
- [Exponential Function](!/algebra/definitions#exponential_function) — requires irrational exponents for continuity
- [The Problem](!/algebra/powers/irrational-exponents#1)
- [Intuition Through Approximation](!/algebra/powers/irrational-exponents#2)`
  },
  category: "Exponents"
},

{
  name: "Product Rule (Exponents)",
  formula: "$a^m \\cdot a^n = a^{m+n}$ — same base, add exponents.",
  link: { label: "Exponent Rules", url: "/algebra/powers/exponent-rules" },
  fields: {
    "derivation": `For natural exponents: $a^m \\cdot a^n$ places $m$ factors of $a$ followed by $n$ more, giving $m + n$ total factors.

The rule extends to all exponent types by definition — zero, negative, rational, and irrational exponents are chosen precisely to keep this identity valid.

Bases must match: $2^3 \\cdot 3^4$ cannot be simplified by adding exponents.`,
    "examples": `$2^3 \\cdot 2^4 = 2^7 = 128$

$x^5 \\cdot x^{-2} = x^3$

$a^{1/2} \\cdot a^{1/3} = a^{5/6}$`,
    "related concepts": `
- [Quotient Rule (Exponents)](!/algebra/definitions#quotient_rule_(exponents))
- [Power of a Power](!/algebra/definitions#power_of_a_power)
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — derived from this
- [Product Rule (Logarithms)](!/algebra/definitions#product_rule_(logarithms)) — inverse of this
- [The Product Rule](!/algebra/powers/exponent-rules#1)`
  },
  category: "Exponents"
},

{
  name: "Quotient Rule (Exponents)",
  formula: "$\\frac{a^m}{a^n} = a^{m-n}$ — same base, subtract exponents.",
  link: { label: "Exponent Rules", url: "/algebra/powers/exponent-rules" },
  fields: {
    "derivation": `For natural exponents with $m > n$: cancel $n$ common factors from numerator and denominator, leaving $m - n$ factors.

When $m = n$: gives $a^0 = 1$ — forces the zero exponent definition.
When $m < n$: gives negative exponents — forces the negative exponent definition.`,
    "examples": `$2^7 / 2^3 = 2^4 = 16$

$x^3 / x^5 = x^{-2} = 1/x^2$

$a^n / a^n = a^0 = 1$`,
    "related concepts": `
- [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents))
- [Zero Exponent](!/algebra/definitions#zero_exponent) — derived from this rule
- [Negative Exponent](!/algebra/definitions#negative_exponent) — derived from this rule
- [The Quotient Rule](!/algebra/powers/exponent-rules#2)`
  },
  category: "Exponents"
},

{
  name: "Power of a Power",
  formula: "$(a^m)^n = a^{mn}$ — raise a power to a power, multiply exponents.",
  link: { label: "Exponent Rules", url: "/algebra/powers/exponent-rules" },
  fields: {
    "derivation": `$(a^m)^n$ means $a^m$ multiplied by itself $n$ times. By the product rule, this adds $m$ a total of $n$ times: $m + m + \\cdots + m = mn$.

Note: $(a^m)^n \\neq a^{m^n}$. Stacked exponents read top-down: $a^{m^n}$ means $a^{(m^n)}$, not $(a^m)^n$.`,
    "examples": `$(2^3)^4 = 2^{12} = 4096$

$(x^2)^5 = x^{10}$

$(a^{1/2})^4 = a^2$

$2^{3^2} = 2^9 = 512$ — stacked, NOT $(2^3)^2 = 64$`,
    "related concepts": `
- [Product Rule (Exponents)](!/algebra/definitions#product_rule_(exponents))
- [Power of a Product](!/algebra/definitions#power_of_a_product)
- [Power Rule (Radicals)](!/algebra/definitions#power_rule_(radicals)) — same identity with $n = 1/k$
- [Power of a Power](!/algebra/powers/exponent-rules#3)`
  },
  category: "Exponents"
},

{
  name: "Power of a Product",
  formula: "$(ab)^n = a^n \\cdot b^n$ — distribute the exponent across multiplication.",
  link: { label: "Exponent Rules", url: "/algebra/powers/exponent-rules" },
  fields: {
    "derivation": `$(ab)^n = (ab)(ab)\\cdots(ab)$ — $n$ copies. Rearranging factors: all $a$'s together and all $b$'s together gives $a^n \\cdot b^n$.

This is the exponent law behind the product rule for radicals: $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$ is $(ab)^{1/n} = a^{1/n} \\cdot b^{1/n}$.`,
    "examples": `$(2 \\cdot 3)^4 = 2^4 \\cdot 3^4 = 16 \\cdot 81 = 1296$

$(xy)^3 = x^3 y^3$

$(5a)^2 = 25a^2$`,
    "related concepts": `
- [Power of a Quotient](!/algebra/definitions#power_of_a_quotient)
- [Power of a Power](!/algebra/definitions#power_of_a_power)
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — same law at $n = 1/k$
- [Power of a Product](!/algebra/powers/exponent-rules#4)`
  },
  category: "Exponents"
},

{
  name: "Power of a Quotient",
  formula: "$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ — distribute the exponent across division, $b \\neq 0$.",
  link: { label: "Exponent Rules", url: "/algebra/powers/exponent-rules" },
  fields: {
    "derivation": `$(a/b)^n = (a/b)(a/b)\\cdots(a/b)$ — $n$ copies. Multiply numerators and denominators separately: $a^n / b^n$.

This is the exponent law behind the quotient rule for radicals: $\\sqrt[n]{a/b} = \\sqrt[n]{a} / \\sqrt[n]{b}$.`,
    "examples": `$(3/4)^2 = 9/16$

$(x/y)^3 = x^3/y^3$

$(2/5)^{-1} = 5/2$`,
    "related concepts": `
- [Power of a Product](!/algebra/definitions#power_of_a_product)
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — same law at $n = 1/k$
- [Power of a Quotient](!/algebra/powers/exponent-rules#5)`
  },
  category: "Exponents"
},

{
  name: "Exponential Equation",
  formula: "An equation in which the variable appears in the exponent: $a^{f(x)} = b$.",
  link: { label: "Exponential Equations", url: "/algebra/powers/exponential-equations" },
  fields: {
    "strategy": `Two main methods:

1. Match bases: rewrite both sides as powers of the same base, then equate exponents.
$2^x = 16 \\Rightarrow 2^x = 2^4 \\Rightarrow x = 4$

2. Use logarithms: when bases cannot be matched, take $\\log$ or $\\ln$ of both sides.
$3^x = 7 \\Rightarrow x = \\log_3(7) = \\ln(7)/\\ln(3) \\approx 1.771$

Some equations are quadratics in disguise: $4^x - 5 \\cdot 2^x + 4 = 0$ becomes $u^2 - 5u + 4 = 0$ with $u = 2^x$.`,
    "examples": `$2^x = 32 \\Rightarrow x = 5$

$3^{2x-1} = 27 \\Rightarrow 2x - 1 = 3 \\Rightarrow x = 2$

$5^x = 12 \\Rightarrow x = \\log(12)/\\log(5) \\approx 1.544$`,
    "related concepts": `
- [Logarithm](!/algebra/definitions#logarithm) — the tool when bases don't match
- [Logarithmic Equation](!/algebra/definitions#logarithmic_equation) — the inverse problem
- [Exponential Function](!/algebra/definitions#exponential_function)
- [Matching Bases](!/algebra/powers/exponential-equations#5)
- [Using Logarithms](!/algebra/powers/exponential-equations#7)
- [Substitution](!/algebra/powers/exponential-equations#8)`
  },
  category: "Exponents"
},

{
  name: "Exponential Inequality",
  formula: "An inequality involving an exponential expression, where the base determines whether inequality direction is preserved or reversed.",
  link: { label: "Exponential Inequalities", url: "/algebra/powers/exponential-inequalities" },
  fields: {
    "key distinction": `For $a > 1$ (increasing function): $a^x > a^y \\iff x > y$ — direction preserved.

For $0 < a < 1$ (decreasing function): $a^x > a^y \\iff x < y$ — direction reversed.

This mirrors the logarithmic inequality rule — both stem from monotonicity of the underlying function.`,
    "examples": `$2^x > 8 \\Rightarrow 2^x > 2^3 \\Rightarrow x > 3$ (base $> 1$, preserved)

$(1/3)^x > 9 \\Rightarrow (1/3)^x > (1/3)^{-2} \\Rightarrow x < -2$ (base $< 1$, reversed)`,
    "related concepts": `
- [Exponential Equation](!/algebra/definitions#exponential_equation) — same techniques, different operator
- [Exponential Function](!/algebra/definitions#exponential_function) — monotonicity determines direction
- [Logarithmic Inequality](!/algebra/definitions#logarithmic_inequality) — same directional rule
- [Base Determines Direction](!/algebra/powers/exponential-inequalities#1)`
  },
  category: "Exponents"
},

{
  name: "Exponential Function",
  formula: "A function of the form $f(x) = a^x$ with fixed base $a > 0$, $a \\neq 1$, and variable exponent $x$.",
  link: { label: "Exponential Functions", url: "/algebra/powers/exponential-functions" },
  fields: {
    "properties": {
      text: `- Domain: $(-\\infty, \\infty)$ — any real exponent
- Range: $(0, \\infty)$ — output is always positive
- Passes through $(0, 1)$ for every base ($a^0 = 1$)
- Horizontal asymptote at $y = 0$
- $a > 1$: exponential growth — output multiplied by $a$ for each unit increase in $x$
- $0 < a < 1$: exponential decay — output multiplied by $a < 1$ for each unit increase
- One-to-one: has an inverse, the logarithmic function
- The base $e \\approx 2.718$ gives $f(x) = e^x$, the natural exponential, whose derivative equals itself`,
      // illustrations: [
      //   {
      //     src: `[ILLUSTRATION: Two exponential curves on the same axes. Curve 1: $y = 2^x$ in teal (growth), passing through $(0,1)$, rising steeply right, approaching $y = 0$ left. Curve 2: $y = (1/2)^x$ in coral (decay), passing through $(0,1)$, falling toward $y = 0$ right, rising steeply left. Dashed line at $y = 0$ labeled "asymptote." Point $(0,1)$ marked as shared.]`,
      //     alt: "Exponential growth and decay graphs",
      //     caption: "Base > 1 grows; base between 0 and 1 decays. Both pass through (0, 1)."
      //   }
      // ],
      links: [
        { label: "The Conceptual Shift", url: "/algebra/powers/exponential-functions#1" },
        { label: "Basic Shape", url: "/algebra/powers/exponential-functions#2" },
        { label: "Key Properties", url: "/algebra/powers/exponential-functions#3" }
      ]
    },
    "examples": `$f(x) = 2^x$ — growth, doubles per unit

$g(x) = (1/2)^x$ — decay, halves per unit

$h(x) = e^x$ — natural exponential

$k(x) = 3 \\cdot 2^{x-1} + 5$ — transformed, asymptote at $y = 5$`,
    "related concepts": `
- [Power](!/algebra/definitions#power)
- [Exponential Equation](!/algebra/definitions#exponential_equation)
- [Exponential Inequality](!/algebra/definitions#exponential_inequality)
- [Logarithmic Function](!/algebra/definitions#logarithmic_function) — the inverse
- [Euler's Number (e)](!/algebra/definitions#euler's_number_(e))
- [Exponential vs Power Functions](!/algebra/powers/exponential-functions#4)`
  },
  category: "Exponents"
},

     
          // {
          //   name: "Exponent",
          //   formula: "The power to which a base is raised in a mathematical expression.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Base",
          //   formula: "The number that is raised to the power of the exponent.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Power",
          //   formula: "The result of raising a base to an exponent.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Function",
          //   formula: "A function of the form f(x) = a^x, where a > 0 and a ≠ 1.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Growth",
          //   formula: "A process that increases proportionally to its current value, modeled by an exponential function.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Decay",
          //   formula: "A process that decreases proportionally to its current value, modeled by an exponential function.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Scientific Notation",
          //   formula: "A method of writing numbers using powers of 10.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Negative Exponent",
          //   formula: "Indicates the reciprocal of the base raised to the corresponding positive exponent (a^(-n) = 1/a^n).",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Zero Exponent",
          //   formula: "Any nonzero base raised to the power of zero equals 1 (a^0 = 1).",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Fractional Exponent",
          //   formula: "Represents a root, where a^(1/n) = √[n]{a}.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Integer Exponent",
          //   formula: "An exponent that is a whole number.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Equation",
          //   formula: "An equation in which variables appear in exponents.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Inequality",
          //   formula: "An inequality involving exponential expressions.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Series",
          //   formula: "A mathematical expansion of e^x as a sum of terms.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponentiation",
          //   formula: "The mathematical operation of raising one quantity to the power of another.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Laws of Exponents",
          //   formula: "Rules governing exponentiation, such as the product, quotient, and power rules.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Curve",
          //   formula: "The graph of an exponential function, showing rapid increase or decrease.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Natural Exponential Function",
          //   formula: "The exponential function with base e, f(x) = e^x.",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Compound Interest Formula",
          //   formula: "A financial formula based on exponential growth, A = P(1 + r/n)^(nt).",
          //   fields: [],
          //   category: "Exponents"
          // },
          // {
          //   name: "Exponential Notation",
          //   formula: "A shorthand way to write repeated multiplication of the same factor.",
          //   fields: [],
          //   category: "Exponents"
          // }
        
        //Category- Inequalities


        // Inequalities Category — 10 Definition Entries for algebraTermsList

{
  name: "Inequality",
  formula: "A statement comparing two expressions using $<$, $>$, $\\leq$, or $\\geq$, whose solution is typically an interval or union of intervals.",
  link: { label: "Inequalities", url: "/algebra/inequalities" },
  fields: {
    "intuition": `An equation asks where two expressions are equal. An inequality asks where one dominates the other. The answer is almost never a single point — it is a region of the number line.

A strict inequality ($<$, $>$) excludes the boundary value. A non-strict inequality ($\\leq$, $\\geq$) includes it. The distinction shows up as open vs closed endpoints in interval notation and open vs filled dots on the number line.`,
    "properties": `• Adding or subtracting the same quantity on both sides preserves direction

• Multiplying or dividing by a positive number preserves direction

• Multiplying or dividing by a negative number reverses direction — this is the single rule that distinguishes inequality-solving from equation-solving

• Two inequalities are equivalent if they have the same solution set`,
    "examples": `$2x + 1 > 5$ — subtract $1$, divide by $2$: $x > 2$, solution $(2, \\infty)$

$-3x \\leq 12$ — divide by $-3$, reverse: $x \\geq -4$, solution $[-4, \\infty)$

$x^2 < 9$ — solution $(-3, 3)$, an interval, not two points`,
    "related concepts": `
- [Interval Notation](/algebra/definitions#interval_notation)
- [Compound Inequality](/algebra/definitions#compound_inequality)
- [Sign Analysis](/algebra/definitions#sign_analysis)
- [Equation](/algebra/definitions#equation)
- [What an Inequality Is](/algebra/inequalities#1)
- [Properties of Inequalities](/algebra/inequalities#5)`
  },
  category: "Inequalities"
},

{
  name: "Interval Notation",
  formula: "A compact notation for solution sets: parentheses $(\\,)$ for excluded endpoints, brackets $[\\,]$ for included endpoints, with $\\infty$ always parenthesized.",
  link: { label: "Interval Notation", url: "/algebra/inequalities#3" },
  fields: {
    "intuition": `Interval notation replaces inequality statements with a concise symbolic format. The solution $x > 2$ becomes $(2, \\infty)$. The solution $-3 \\leq x < 5$ becomes $[-3, 5)$. Unions handle disconnected regions: $(-\\infty, -1) \\cup (3, \\infty)$ means $x < -1$ or $x > 3$.`,
    "notation": `• $(a, b)$ — open interval: $a < x < b$
• $[a, b]$ — closed interval: $a \\leq x \\leq b$
• $[a, b)$ — half-open: $a \\leq x < b$
• $(a, b]$ — half-open: $a < x \\leq b$
• $(-\\infty, a)$ — all $x < a$
• $(a, \\infty)$ — all $x > a$
• $(-\\infty, \\infty)$ — all real numbers

Infinity always takes a parenthesis, never a bracket — it is not a number and cannot be reached.`,
    "related concepts": `
- [Inequality](/algebra/definitions#inequality)
- [Compound Inequality](/algebra/definitions#compound_inequality)
- [Interval Notation Section](/algebra/inequalities#3)
- [Number Line Representation](/algebra/inequalities#4)`
  },
  category: "Inequalities"
},

{
  name: "Compound Inequality",
  formula: "Two inequalities joined by AND (conjunction, intersection) or OR (disjunction, union), producing a combined solution set.",
  link: { label: "Compound Inequalities", url: "/algebra/inequalities#6" },
  fields: {
    "intuition": `A conjunction requires both conditions to hold simultaneously, narrowing the solution set to an intersection — typically a bounded interval. A disjunction requires at least one condition, broadening the solution set to a union — typically two separate rays.`,
    "examples": `AND: $-3 < 2x + 1 \\leq 7$ → subtract $1$: $-4 < 2x \\leq 6$ → divide by $2$: $-2 < x \\leq 3$ → solution $(-2, 3]$

OR: $x + 3 < -1$ or $x + 3 > 5$ → $x < -4$ or $x > 2$ → solution $(-\\infty, -4) \\cup (2, \\infty)$

AND can yield the empty set if the two conditions contradict: $x > 5$ and $x < 2$ has no solution.`,
    "related concepts": `
- [Inequality](/algebra/definitions#inequality)
- [Interval Notation](/algebra/definitions#interval_notation)
- [Absolute Value Inequality](/algebra/definitions#absolute_value_inequality)
- [Compound Inequalities Section](/algebra/inequalities#6)
- [Compound Linear Inequalities](/algebra/inequalities/linear#5)`
  },
  category: "Inequalities"
},

{
  name: "Sign Analysis",
  formula: "A method for solving non-linear inequalities by finding all roots and undefined points, partitioning the number line into intervals, and determining the sign in each interval.",
  link: { label: "Sign Analysis", url: "/algebra/inequalities#8" },
  fields: {
    "intuition": `Sign analysis (also called the sign chart method) exploits a key property of polynomials and rational expressions: between consecutive roots or undefined points, the sign cannot change. Find all critical points, test one value per interval, and read off which intervals satisfy the inequality.`,
    "methods": `Step 1: Move all terms to one side so the other side is zero.

Step 2: Factor the expression (or at least find all real roots and undefined points).

Step 3: Place these critical points on a number line, dividing it into intervals.

Step 4: Choose a test point in each interval and evaluate the sign — either by direct substitution or by tracking signs of individual factors.

Step 5: Select the intervals matching the desired sign. Include or exclude endpoints based on strict vs non-strict inequality.`,
    "related concepts": `
- [Critical Point](/algebra/definitions#critical_point)
- [Polynomial Inequality](/algebra/definitions#polynomial_inequality)
- [Rational Inequality](/algebra/definitions#rational_inequality)
- [Quadratic Inequality](/algebra/definitions#quadratic_inequality)
- [Sign Analysis Section](/algebra/inequalities#8)
- [Sign Chart for Polynomials](/algebra/inequalities/polynomial#2)
- [Sign Chart for Rationals](/algebra/inequalities/rational#3)`
  },
  category: "Inequalities"
},

{
  name: "Critical Point",
  formula: "A value where the expression equals zero (numerator zero) or is undefined (denominator zero), used to partition the number line for sign analysis.",
  link: { label: "Critical Points", url: "/algebra/inequalities/rational#2" },
  fields: {
    "intuition": `In polynomial inequalities, critical points are the roots — where the polynomial equals zero. In rational inequalities, there are two kinds: numerator zeros (where the expression equals zero) and denominator zeros (where it is undefined). Both go on the sign chart as interval boundaries, but they differ at the endpoint step: numerator zeros may be included in the solution, denominator zeros never can.`,
    "key distinction": `Numerator zero: $P(c) = 0$ → expression equals zero → may be included for $\\leq$ or $\\geq$

Denominator zero: $Q(c) = 0$ → expression undefined → always excluded, regardless of inequality symbol

Confusing these is the most common error in rational inequality problems.`,
    "related concepts": `
- [Sign Analysis](/algebra/definitions#sign_analysis)
- [Rational Inequality](/algebra/definitions#rational_inequality)
- [Domain Restriction](/algebra/definitions#domain_restriction)
- [Critical Points Section](/algebra/inequalities/rational#2)
- [Endpoint Inclusion Rules](/algebra/inequalities/rational#4)`
  },
  category: "Inequalities"
},

{
  name: "Linear Inequality",
  formula: "An inequality of the form $ax + b < 0$ (or $>$, $\\leq$, $\\geq$) with $a \\neq 0$; solution is always a single ray.",
  link: { label: "Linear Inequalities", url: "/algebra/inequalities/linear" },
  fields: {
    "intuition": `Solved exactly like a linear equation — isolate $x$ — with one extra rule: multiplying or dividing by a negative reverses the inequality direction. The solution is always a ray: one half of the number line, starting from the boundary point $x = -b/a$.`,
    "examples": `$3x - 7 > 5$ → $3x > 12$ → $x > 4$ → $(4, \\infty)$

$-2x + 5 \\leq 13$ → $-2x \\leq 8$ → $x \\geq -4$ → $[-4, \\infty)$ (direction reversed)

$4x - 7 \\leq 2x + 11$ → $2x \\leq 18$ → $x \\leq 9$ → $(-\\infty, 9]$`,
    "related concepts": `
- [Inequality](/algebra/definitions#inequality)
- [Compound Inequality](/algebra/definitions#compound_inequality)
- [Linear Equation](/algebra/definitions#equation)
- [Linear Inequalities](/algebra/inequalities/linear#1)
- [Direction Reversal](/algebra/inequalities/linear#2)`
  },
  category: "Inequalities"
},

{
  name: "Quadratic Inequality",
  formula: "An inequality of the form $ax^2 + bx + c > 0$ (or $<$, $\\leq$, $\\geq$) with $a \\neq 0$; solved via the discriminant and sign analysis.",
  link: { label: "Quadratic Inequalities", url: "/algebra/inequalities/quadratic" },
  fields: {
    "intuition": `The roots of $ax^2 + bx + c = 0$ are the boundaries, the sign of $a$ determines which way the parabola opens, and the discriminant decides how many boundaries exist. When $\\Delta > 0$: two roots, three intervals, sign alternates. When $\\Delta = 0$: one repeated root, sign is constant except at that point. When $\\Delta < 0$: no real roots, sign is uniform everywhere.`,
    "examples": `$x^2 - 5x + 6 < 0$ → roots $2, 3$ → factors $(x-2)(x-3) < 0$

Sign chart: negative between roots → solution $(2, 3)$

$x^2 + 1 > 0$ → $\\Delta = -4 < 0$, no real roots, $a > 0$ → always positive → solution $(-\\infty, \\infty)$`,
    "related concepts": `
- [Sign Analysis](/algebra/definitions#sign_analysis)
- [Discriminant](/algebra/definitions#discriminant)
- [Quadratic Inequality Section](/algebra/inequalities/quadratic#1)
- [Sign Chart Method](/algebra/inequalities/quadratic#6)
- [Connection to the Parabola](/algebra/inequalities/quadratic#7)`
  },
  category: "Inequalities"
},

{
  name: "Polynomial Inequality",
  formula: "An inequality $P(x) > 0$ (or $<$, $\\leq$, $\\geq$) where $P(x)$ has degree $n \\geq 3$; solved by sign analysis with attention to root multiplicity.",
  link: { label: "Polynomial Inequalities", url: "/algebra/inequalities/polynomial" },
  fields: {
    "intuition": `From degree three onward, the number of roots and sign changes increases beyond what quadratic reasoning handles. The sign chart becomes the primary tool: find every real root, factor if possible, and track signs interval by interval. Roots with odd multiplicity cause a sign change; roots with even multiplicity do not.`,
    "properties": `• A degree-$n$ polynomial has at most $n$ real roots and at most $n + 1$ intervals

• Within each interval the sign is constant

• Odd-multiplicity root: sign changes across it

• Even-multiplicity root: sign does not change (graph touches axis and bounces)

• End behavior (from the leading term) determines the sign in the outermost intervals`,
    "related concepts": `
- [Sign Analysis](/algebra/definitions#sign_analysis)
- [Multiplicity](/algebra/definitions#multiplicity)
- [End Behavior](/algebra/definitions#end_behavior)
- [Polynomial Inequality Section](/algebra/inequalities/polynomial#1)
- [Multiplicity and Sign Changes](/algebra/inequalities/polynomial#4)`
  },
  category: "Inequalities"
},

{
  name: "Rational Inequality",
  formula: "An inequality involving a rational expression $\\frac{P(x)}{Q(x)}$; solved by sign analysis using both numerator zeros and denominator zeros as critical points.",
  link: { label: "Rational Inequalities", url: "/algebra/inequalities/rational" },
  fields: {
    "intuition": `A rational inequality asks where a fraction is positive, negative, or zero. The sign chart works exactly as for polynomials, but denominator zeros add critical points where the expression is undefined rather than zero. These points partition the number line but can never be included in the solution. Cross-multiplying is invalid because the denominator's sign varies — it would require case-splitting that the sign chart handles automatically.`,
    "common errors": `Cross-multiplying both sides by the denominator without knowing its sign — this silently reverses the inequality in some intervals, producing wrong answers.

Including denominator zeros in the solution of $\\leq$ or $\\geq$ inequalities — the expression is undefined there, so they are always excluded.`,
    "related concepts": `
- [Critical Point](/algebra/definitions#critical_point)
- [Sign Analysis](/algebra/definitions#sign_analysis)
- [Domain Restriction](/algebra/definitions#domain_restriction)
- [Rational Inequality Section](/algebra/inequalities/rational#1)
- [Cross-Multiplication Error](/algebra/inequalities/rational#5)
- [Endpoint Inclusion Rules](/algebra/inequalities/rational#4)`
  },
  category: "Inequalities"
},

{
  name: "Absolute Value Inequality",
  formula: "$|f(x)| < k$ converts to $-k < f(x) < k$ (conjunction); $|f(x)| > k$ converts to $f(x) < -k$ or $f(x) > k$ (disjunction).",
  link: { label: "Absolute Value Inequalities", url: "/algebra/inequalities/absolute-value" },
  fields: {
    "intuition": `Absolute value measures distance from zero. The inequality $|f(x)| < k$ asks for values within $k$ units of zero — a bounded interval. The inequality $|f(x)| > k$ asks for values more than $k$ units from zero — two unbounded rays. The conversion to a compound inequality removes the absolute value, and the resulting system is solved by whatever method matches the expression inside.`,
    "examples": `$|2x - 3| < 7$ → $-7 < 2x - 3 < 7$ → $-4 < 2x < 10$ → $-2 < x < 5$ → $(-2, 5)$

$|x + 1| \\geq 4$ → $x + 1 \\leq -4$ or $x + 1 \\geq 4$ → $x \\leq -5$ or $x \\geq 3$ → $(-\\infty, -5] \\cup [3, \\infty)$

$|x| < -2$ → no solution (absolute value is never negative)`,
    "related concepts": `
- [Compound Inequality](/algebra/definitions#compound_inequality)
- [Absolute Value](/algebra/definitions#absolute_value)
- [Inequality](/algebra/definitions#inequality)
- [Two Fundamental Forms](/algebra/inequalities/absolute-value#1)
- [Geometric Interpretation](/algebra/inequalities/absolute-value#7)`
  },
  category: "Inequalities"
},
       
        
     
      
    
  ];
  
  export default algebraTermsList;
  