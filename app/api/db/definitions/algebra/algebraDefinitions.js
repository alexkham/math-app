const algebraTermsList = [

{
  name: "Discriminant",
  formula: "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$.",
  link: { label: "Quadratic Equations", url: "/algebra/equations/quadratic" },
  fields: {
    "what it determines": {
      text: `$\\Delta > 0$: two distinct real solutions
$\\Delta = 0$: one repeated real solution
$\\Delta < 0$: no real solutions (two complex conjugate solutions)`,
      illustrations: [
        {
          src: `<svg viewBox="0 0 660 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
  <rect width="660" height="180" fill="#f8fafc" rx="4"/>
  <g transform="translate(10,10)">
    <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#2563eb">Δ &gt; 0</text>
    <path d="M10 160 Q55 10 100 80 Q145 150 190 30" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <line x1="10" y1="110" x2="190" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
    <circle cx="48" cy="110" r="5" fill="#e24b4a"/><circle cx="158" cy="110" r="5" fill="#e24b4a"/>
    <text x="48" y="132" text-anchor="middle" font-size="11" fill="#e24b4a">x₁</text>
    <text x="158" y="132" text-anchor="middle" font-size="11" fill="#e24b4a">x₂</text>
  </g>
  <g transform="translate(230,10)">
    <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#639922">Δ = 0</text>
    <path d="M10 160 Q55 10 100 80 Q145 150 190 30" fill="none" stroke="#639922" stroke-width="2.5"/>
    <line x1="10" y1="80" x2="190" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
    <circle cx="100" cy="80" r="5" fill="#e24b4a"/>
    <text x="100" y="102" text-anchor="middle" font-size="11" fill="#e24b4a">x₀</text>
  </g>
  <g transform="translate(450,10)">
    <text x="100" y="16" text-anchor="middle" font-size="13" font-weight="600" fill="#d85a30">Δ &lt; 0</text>
    <path d="M10 140 Q55 30 100 80 Q145 130 190 20" fill="none" stroke="#d85a30" stroke-width="2.5"/>
    <line x1="10" y1="10" x2="190" y2="10" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
    <text x="100" y="165" text-anchor="middle" font-size="11" fill="#94a3b8">no real roots</text>
  </g>
</svg>`,
          alt: "Three cases of the discriminant",
          caption: "How Δ determines the number of real roots"
        }
      ],
      links: [
        { label: "Khan Academy — Discriminant", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:quadratic-formula-a1/v/discriminant-for-types-of-solutions-for-a-quadratic" },
        { label: "Wikipedia — Discriminant", url: "https://en.wikipedia.org/wiki/Discriminant" },
        { label: "home", url: "/"}
      ]
    },
    "examples": `$x^2 - 5x + 6 = 0$: $\\Delta = 25 - 24 = 1 > 0$ — two real roots
$x^2 - 6x + 9 = 0$: $\\Delta = 36 - 36 = 0$ — one repeated root
$x^2 + x + 1 = 0$: $\\Delta = 1 - 4 = -3 < 0$ — no real roots`
  },
  category: "Mock"
},
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

{
  name: "Equation",
  formula: "A statement asserting that two mathematical expressions have the same value, written with the $=$ sign between them.",
  fields: {
    "key distinction": `An equation makes a claim that can be tested — true, false, or conditionally true. An expression like $3x + 2$ makes no claim and cannot be solved. The presence of $=$ is what turns a mathematical phrase into a solvable condition.`,
    "examples": `$2x + 1 = 9$ — conditional, true only when $x = 4$
$3 + 4 = 7$ — unconditionally true
$3 + 4 = 8$ — unconditionally false
$x^2 - 5x + 6 = 0$ — conditional, true when $x = 2$ or $x = 3$`
  },
  category: "Equations"
},
{
  name: "Expression",
  formula: "A mathematical phrase built from numbers, variables, and operations that represents a quantity but makes no assertion about equality.",
  fields: {
    "key distinction": `Expressions are evaluated or simplified. Equations are solved. The expression $2x + 1$ can be factored, expanded, or evaluated at specific values of $x$, but asking "what is $x$?" makes no sense without an equation. Placing $2x + 1 = 9$ creates the condition that gives $x$ a definite value.`,
    "examples": `$3x + 7$ — polynomial expression
$\\frac{x+1}{x-2}$ — rational expression
$\\sqrt{x^2 + 4}$ — radical expression
$2x + 1$ — this is NOT an equation`
  },
  category: "Equations"
},
{
  name: "Variable",
  formula: "A symbol, typically a letter, that represents an unknown quantity or a quantity that can change.",
  fields: {
    "usage": `In equations, variables stand for unknowns: the goal is to find which values make the equation true. In expressions and functions, variables represent inputs that can take a range of values. Convention reserves $x$, $y$, $z$ for unknowns, $a$, $b$, $c$ for constants, and $n$, $k$, $i$ for integers.`,
    "examples": `In $2x + 1 = 9$: the variable is $x$
In $ax^2 + bx + c = 0$: the variable is $x$; the letters $a$, $b$, $c$ are parameters
In $f(x) = x^2$: $x$ is the input variable`
  },
  category: "Equations"
},
{
  name: "Solution",
  formula: "A value of the variable that makes both sides of an equation equal when substituted.",
  fields: {
    "verification": `A candidate is confirmed as a solution by direct substitution. For $2x + 1 = 9$, substituting $x = 4$ gives $2(4) + 1 = 9$, which is true. Substituting $x = 3$ gives $2(3) + 1 = 7 \\neq 9$, so $x = 3$ is not a solution.`,
    "terminology": `Also called a root of the equation. The terms are interchangeable for polynomial equations. An equation may have one solution, finitely many, infinitely many, or none at all.`
  },
  category: "Equations"
},
{
  name: "Solution Set",
  formula: "The collection of all values that satisfy an equation, written in set notation.",
  fields: {
    "notation": `Curly braces list elements: $\\{-2, 2\\}$ for $x^2 = 4$. Set-builder notation describes conditions: $\\{x \\in \\mathbb{R} : 2x + 1 = 9\\} = \\{4\\}$. The empty set $\\emptyset$ indicates no solutions exist.`,
    "examples": `$x^2 = 4 \\Rightarrow \\{-2, 2\\}$
$2x + 1 = 9 \\Rightarrow \\{4\\}$
$x^2 = -1$ over $\\mathbb{R} \\Rightarrow \\emptyset$
$2(x+1) = 2x + 2 \\Rightarrow \\mathbb{R}$ (all real numbers)`
  },
  category: "Equations"
},
{
  name: "Extraneous Solution",
  formula: "A value that satisfies a transformed equation but not the original, introduced by non-reversible algebraic steps.",
  fields: {
    "causes": `Squaring both sides: $x = 3$ becomes $x^2 = 9$, admitting the false solution $x = -3$. Clearing denominators: multiplying by an expression that equals zero at certain values. These operations expand the solution set because they cannot be undone uniquely.`,
    "prevention": `Every candidate obtained through squaring, clearing denominators, or raising to an even power must be substituted back into the original equation. Any value that fails verification or violates a domain restriction is extraneous and rejected.`
  },
  category: "Equations"
},
{
  name: "Conditional Equation",
  formula: "An equation that is true for specific values of the variable and false for all others.",
  fields: {
    "properties": `Most equations encountered in algebra are conditional. Solving means finding the finite set of values where the equation holds. The number of solutions depends on the equation's degree and type.`,
    "examples": `$5x - 3 = 12$ — true only when $x = 3$
$x^2 - 5x + 6 = 0$ — true when $x = 2$ or $x = 3$
$\\sin(x) = 0$ — true when $x = n\\pi$ for any integer $n$`
  },
  category: "Equations"
},
{
  name: "Identity",
  formula: "An equation that holds true for every permissible value of the variable.",
  fields: {
    "key distinction": `Identities are not solved — they are verified. They express structural equivalences between expressions rather than constraints on unknowns. Expanding, factoring, or applying known rules confirms them.`,
    "examples": `$2(x + 1) = 2x + 2$ — distributive property
$(a + b)^2 = a^2 + 2ab + b^2$ — algebraic identity
$\\sin^2(x) + \\cos^2(x) = 1$ — trigonometric identity`
  },
  category: "Equations"
},
{
  name: "Contradiction",
  formula: "An equation that is false for every value of the variable — its solution set is empty.",
  fields: {
    "recognition": `A contradiction reveals itself during simplification: the variable terms cancel, leaving a false numerical statement. This means no value of the variable can rescue the equation.`,
    "examples": `$x + 1 = x + 3$ simplifies to $1 = 3$ — false
$2(x - 1) = 2x + 5$ simplifies to $-2 = 5$ — false
Solution set: $\\emptyset$`
  },
  category: "Equations"
},
{
  name: "Equivalent Equations",
  formula: "Two or more equations that share exactly the same solution set.",
  fields: {
    "safe operations": `Adding or subtracting the same quantity on both sides. Multiplying or dividing both sides by a nonzero constant. These reversible operations always preserve equivalence.`,
    "risky operations": `Multiplying by an expression containing the variable, squaring both sides, or clearing denominators. These may enlarge the solution set, producing extraneous solutions that require verification.`
  },
  category: "Equations"
},
{
  name: "Algebraic Equation",
  formula: "An equation built entirely from variables, constants, and the operations of addition, subtraction, multiplication, division, and integer exponentiation.",
  fields: {
    "scope": `Algebraic equations exclude transcendental functions: no $\\sin$, $\\cos$, $\\ln$, $e^x$. Equations involving those functions are classified separately as trigonometric, logarithmic, or exponential equations.`,
    "classification by degree": `Degree 1: linear · Degree 2: quadratic · Degree 3: cubic · Degree 4: quartic · Degree 5: quintic. The degree determines the maximum number of solutions and which solving methods apply.`
  },
  category: "Equations"
},
{
  name: "Degree of an Equation",
  formula: "The highest power of the variable that appears after the equation is cleared of fractions and fully simplified.",
  fields: {
    "significance": `Degree determines the maximum number of solutions and dictates which solving techniques are available. Linear (degree 1) always has one solution. Quadratic (degree 2) has at most two. A polynomial of degree $n$ has at most $n$ roots in $\\mathbb{C}$.`,
    "examples": `$3x + 2 = 0$ — degree 1 (linear)
$x^2 - 4x + 3 = 0$ — degree 2 (quadratic)
$x^3 - 1 = 0$ — degree 3 (cubic)
$\\frac{x^2 + 1}{x - 1} = 0$ — degree 2 after clearing`
  },
  category: "Equations"
},
{
  name: "Standard Form",
  formula: "The conventional way to write an equation with all terms collected on one side, arranged by descending powers of the variable, equal to zero.",
  fields: {
    "by equation type": `Linear: $ax + b = 0$
Quadratic: $ax^2 + bx + c = 0$
General polynomial: $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$`,
    "purpose": `Standard form reveals the degree immediately, makes coefficients readable, and is the required input format for formulas like the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.`
  },
  category: "Equations"
},
{
  name: "Coefficient",
  formula: "The numerical factor that multiplies a variable or a power of a variable in a term of an expression or equation.",
  fields: {
    "types": `Leading coefficient: the coefficient of the highest-degree term. Free coefficient (constant term): the term with no variable attached. In $3x^2 - 7x + 2$, the leading coefficient is $3$, the coefficient of $x$ is $-7$, and the free coefficient is $2$.`,
    "examples": `In $5x^3$: coefficient is $5$
In $-x^2$: coefficient is $-1$
In $\\frac{2}{3}x$: coefficient is $\\frac{2}{3}$`
  },
  category: "Equations"
},
{
  name: "Discriminant",
  formula: "For the quadratic equation $ax^2 + bx + c = 0$, the discriminant is $\\Delta = b^2 - 4ac$.",
  fields: {
    "what it determines": `$\\Delta > 0$: two distinct real solutions
$\\Delta = 0$: one repeated real solution
$\\Delta < 0$: no real solutions (two complex conjugate solutions)`,
    "examples": `$x^2 - 5x + 6 = 0$: $\\Delta = 25 - 24 = 1 > 0$ — two real roots
$x^2 - 6x + 9 = 0$: $\\Delta = 36 - 36 = 0$ — one repeated root
$x^2 + x + 1 = 0$: $\\Delta = 1 - 4 = -3 < 0$ — no real roots`
  },
  category: "Equations"
},
{
  name: "Domain Restriction",
  formula: "A value of the variable that must be excluded from consideration because it makes an expression undefined.",
  fields: {
    "common causes": `Division by zero: $\\frac{1}{x-3}$ excludes $x = 3$. Even roots of negatives: $\\sqrt{x}$ requires $x \\geq 0$. Logarithms of non-positives: $\\ln(x)$ requires $x > 0$.`,
    "role in equations": `In rational equations, domain restrictions must be identified before solving. Any candidate solution that coincides with a restriction is extraneous and must be rejected, even if the algebra produces it cleanly.`
  },
  category: "Equations"
},
{
  name: "Absolute Value",
  formula: "The distance of a number from zero on the number line: $|x| = x$ if $x \\geq 0$, and $|x| = -x$ if $x < 0$.",
  fields: {
    "properties": `Always non-negative: $|x| \\geq 0$ for all $x$
$|x| = 0$ only when $x = 0$
$|ab| = |a| \\cdot |b|$
$|a + b| \\leq |a| + |b|$ (triangle inequality)`,
    "in equations": `$|f(x)| = k$ splits into $f(x) = k$ and $f(x) = -k$ when $k > 0$. When $k = 0$, solve $f(x) = 0$. When $k < 0$, no solution exists.`
  },
  category: "Equations"
},




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
      illustrations: [
        {
          src: `[ILLUSTRATION: Number line centered at 0. Two points at $-5$ and $+5$, both with arrows pointing up to $25$ (labeled "$(-5)^2 = 25$" and "$5^2 = 25$"). A single arrow from $25$ back down points only to $+5$, labeled "$\\sqrt{25} = 5$." Shows the convention selecting the positive value.]`,
          alt: "Principal root selects the non-negative value",
          caption: "Two square roots exist, but the radical returns only the non-negative one"
        }
      ],
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
      illustrations: [
        {
          src: `[ILLUSTRATION: Three side-by-side "before → after" panels. Panel 1: $\\sqrt{72} \\to 6\\sqrt{2}$ (perfect square extracted). Panel 2: $\\sqrt{\\frac{3}{4}} \\to \\frac{\\sqrt{3}}{2}$ (fraction cleared). Panel 3: $\\frac{1}{\\sqrt{3}} \\to \\frac{\\sqrt{3}}{3}$ (denominator rationalized). Each panel labeled with the condition it satisfies.]`,
          alt: "Three conditions for simplest radical form",
          caption: "All three conditions must hold for a radical to be fully simplified"
        }
      ],
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
      illustrations: [
        {
          src: `[ILLUSTRATION: Two graphs side by side. Left: $f(x) = \\sqrt{x}$ — curve starting at origin $(0,0)$, rising to the right, concave down, with key points $(1,1)$, $(4,2)$, $(9,3)$ marked. Domain bracket $[0, \\infty)$ shown on x-axis. Right: $f(x) = \\sqrt[3]{x}$ — S-curve through origin, extending both directions, with points $(-8,-2)$, $(0,0)$, $(8,2)$ marked. Full real line domain indicated.]`,
          alt: "Graphs of square root and cube root parent functions",
          caption: "Even-index functions start at a point; odd-index functions pass through the origin in both directions"
        }
      ],
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
      illustrations: [
        {
          src: `[ILLUSTRATION: Two-row diagram mirroring the Root SVG pattern. Top row: $2^3 = 8$ with forward arrow labeled "exponentiation," then $\\log_2(8) = 3$ with reverse arrow labeled "logarithm." Bottom row: $10^2 = 100$ forward, $\\log_{10}(100) = 2$ reverse. Third row: $a^c = b$ forward, $\\log_a(b) = c$ reverse (in purple). Dots between specific and generic rows.]`,
          alt: "Exponentiation and logarithms as inverse operations",
          caption: "Logarithms undo exponentiation"
        }
      ],
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
      illustrations: [
        {
          src: `[ILLUSTRATION: Two logarithmic curves on the same axes. Curve 1: $y = \\log_2(x)$ in teal, passing through $(1,0)$, $(2,1)$, $(4,2)$, $(8,3)$, approaching $x = 0$ from the right and plunging downward. Curve 2: $y = \\log_{1/2}(x)$ in coral, passing through $(1,0)$, $(2,-1)$, $(4,-2)$, reflected version. Dashed vertical line at $x = 0$ labeled "asymptote." Points $(1,0)$ marked as shared by both curves.]`,
          alt: "Logarithmic function graphs for base > 1 and base < 1",
          caption: "Base > 1 increases; base < 1 decreases. Both pass through (1, 0)."
        }
      ],
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
  