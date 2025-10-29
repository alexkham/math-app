
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head';
import { createContentHtml } from '@/app/utils/utils-functions'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar'
import { fetchSiteNavLinks } from '@/app/utils/navLinks'
import StaticSectionTableOfContents from '@/app/components/page-components/section/StaticSectionTableOfContent'
import SEOFriendlySectionTableOfContents from '@/app/components/page-components/section/SEOFriendlyTableofContents'
import SectionTableOfContents2 from '@/app/components/page-components/section/SectionTableofContents2'
import ToolsSlider from '@/app/components/sliders/ToolsSlider'




export async function getStaticProps() {
  const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
  const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
/*nav links try  */
const currentPath = '/algebra';
  
// const childrenNav = await fetchSiteNavLinks(currentPath, 'children');
// const siblingsNav = await fetchSiteNavLinks(currentPath, 'siblings');



 const tools=[
  {
    title: "Quadratic Equation Solver",
    description: "Solve quadratic equations and see the solution steps explained",
    image: "/tools/quadratic-solver.jpg",
    link: "/calculators/quadratic-equations"
  },

  {
    title: "Polynomial Calculator",
    description: "Add or Subtract polynomials using interactive calculator with explanations",
    image: "/tools/polynomial-calculator.jpg",
    link: "/calculators/polynomial-calculator"
  },
  {
    title: "Root Calculator",
    description: "Calculate high precision values for quadratic, cubic and generic roots",
    image: "/tools/root-calculator.jpg",
    link: "/calculators/root-calculator"
  },
  
  {
    title: "Logarithm Calculator",
    description: "Calculate logarithms for different bases and learn from explanations",
    image: "/tools/logarithm-calculator.jpg",
    link: "/calculators/log-calculator"
  },
  
  {
    title: "Exponent Calculator",
    description: "Compute powers for standard and custom exponentsm: square, cube or any other integer and decimal power",
    image: "/tools/exponent-calculator.jpg",
    link: "/calculators/exponent-calculator"
  },
  {
    title: "Linear Equations Solver",
    description: "Solve linear equations and see step-by-step explanations.Get random generated examples with different levels of difficulty and explore the solutions.",
    image: "/tools/linear-equations-solver.jpg",
    link: "/algebra/equations/linear/solver"
  },

  // {
  //   title: "Determinant Visual Calculator with Steps",
  //   description: "Use visualinteractive Determinant Calculator with step-by-step explanations",
  //   image: "/tools/determinant-calculator.jpg",
  //   link: "/visual-tools/determinant-calculator"
  // },
 ]

  const sectionContent = {
    formulas: {
      title: 'Algebra Formulas',
      description: 'Visit Algebra formulas page',
      leftContentHtml: createContentHtml({ 
        description: 'The Algebra Formulas page provides a comprehensive collection of essential algebraic formulas and rules covering four key areas: Exponent and Power Rules covering basic operations with powers, Radical and Root Operations for understanding and manipulating square roots and nth roots, Logarithmic Properties dealing with logarithm operations and transformations, and Binomial Expressions and Theorems for expanding and working with polynomial terms. Each formula includes detailed explanations, examples, and practical applications.', 
        // link: '/algebra/formulas',
        // linkText: 'View All Formulas',
        height:'350px',
        backgroundColor:'#fdfdea',
        
      }),
      layout: 'horizontal',
    },
    definitions: {
      title: 'Algebra Terms and Definitions',
      description: 'Browse Algebra terminology including main concepts and their definitions with examples',
      rightContentHtml: createContentHtml({ 
        description: 'The Algebra Terms and Definitions page offers a structured glossary of fundamental algebraic concepts organized in three main categories: Roots, Logarithms, and Exponents. It includes clear definitions for essential terms and operations in each category, from basic concepts like square roots and exponents to more advanced topics like nested radicals, complex logarithms, and exponential functions. Each term is precisely defined to help build a solid foundation in algebraic understanding.',
        // link: '/algebra/definitions',
        // linkText: 'View All Definitions',
        height:'350px',
        backgroundColor:'#fdfdea',
      }),
      layout: 'horizontal'
    },
    identities: {
      title: 'Algebraic Identities',
       link:'/algebra/identities',
       content:`Algebraic identities are fundamental equations that hold true for all values of their variables. These mathematical relationships serve as powerful tools for simplification, factorization, and solving complex equations.

**Basic Binomial Identities** form the foundation, covering expansions of two-term expressions raised to various powers. These patterns reveal how coefficients follow predictable sequences (Pascal's triangle) and provide shortcuts for mental arithmetic.
**General Binomial Expansions** extend these patterns through the binomial theorem, offering a systematic approach to expand any binomial to any power using combinatorial coefficients.
**Multinomial Expansions** handle expressions with three or more terms, showing how cross-products multiply when expanding polynomials with multiple variables.
**Difference of Squares and Higher Powers** focus on subtraction patterns, revealing elegant factorizations that break complex expressions into simpler multiplicative forms.
**Sums and Differences of Powers** demonstrate how odd and even powers behave differently in factorization, with odd powers allowing both sum and difference factorizations while even powers typically only factor as differences.
**Special Identities** capture unique relationships like Sophie Germain's identity and symmetric expressions, often appearing in advanced algebra and number theory.
**Factoring Identities** provide practical tools for breaking down quadratic expressions into linear factors, essential for equation solving.
**Basic Algebraic Properties** establish the fundamental rules governing polynomial multiplication and distribution.

Mastering these identities is crucial for algebraic fluency. They allow rapid recognition of patterns, enabling quick simplification of complex expressions without lengthy calculations. Students who memorize these relationships can solve equations more efficiently, factor polynomials instantly, and approach calculus and higher mathematics with greater confidence and speed.`
    },
    equations:{
      title:'Equations',
      link:'/algebra/equations',
      content:`### ✦ What Are Equations?

An **equation** is a statement that says two mathematical expressions have the same value — it’s like a balance that holds true for certain numbers. Equations are everywhere in algebra, from simple ones like $x + 3 = 5$ to more complex forms involving several variables or even functions.

They come in many varieties: you might hear about [linear](!/algebra/equations/linear), **quadratic**, or **cubic** equations, depending on the highest power of the variable, or **algebraic** and **transcendental**, depending on the kinds of operations involved. Some deal with just one variable, while others connect many. Some equations describe lines or curves, others describe change, like those in calculus.

How we solve them — and even whether they have one solution, many, or none — depends on what kind of equation we’re dealing with.

This page is just a quick stop. If you're curious about what makes an equation linear or not, how we actually solve them, or what those classifications really mean, check out the [equations](!/algebra/equations) page for a full breakdown.
      
      `
    },
    roots_exp_logs:{

       svg:  `<svg xmlns="http://www.w3.org/2000/svg" style="margin-left:200px;" viewBox="-300 -300 1400 950">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fafafa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f8f8f8;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f9f9f9;stop-opacity:1" />
    </linearGradient>
    <filter id="softShadow">
      <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.2"/>
    </filter>
    <filter id="boxShadow">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.15"/>
    </filter>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" stroke="none"/>
    </marker>
  </defs>
  
  <!-- Background -->
  <rect x="-300" y="-300" width="1300" height="850" fill="url(#bgGradient)"/>
  
  <!-- Main circles and variables -->
  <g>
    <circle cx="200" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="200" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">a</text>
    
    <circle cx="260" cy="160" r="25" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="260" y="168" font-family="Georgia, serif" font-size="28" text-anchor="middle" fill="#374151" font-weight="500">n</text>
    
    <text x="300" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#9ca3af" font-weight="300">=</text>
    
    <circle cx="370" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
    <text x="370" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">b</text>
  </g>
  
  <!-- Connecting arrows -->
  <g stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
    <line x1="170" y1="225" x2="90" y2="300" marker-end="url(#arrowhead)"/>
    <line x1="260" y1="135" x2="260" y2="50" marker-end="url(#arrowhead)"/>
    <line x1="400" y1="225" x2="475" y2="300" marker-end="url(#arrowhead)"/>
  </g>
  
  <!-- Information boxes -->
  <g>
    <rect x="20" y="320" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
    <rect x="185" y="-60" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
    <rect x="400" y="320" width="150" height="70" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
  </g>
  
  <!-- Text content -->
  <g font-family="Georgia, serif" fill="#374151" text-anchor="middle">
    <text x="95" y="345" font-size="16" font-weight="600" fill="#1f2937">Root</text>
    <text x="95" y="365" font-size="15" fill="#4b5563">a = b<tspan dy="-6" font-size="11">1/n</tspan></text>
    <text x="95" y="390" font-size="15" fill="#4b5563">a = <tspan dy="2">ⁿ√</tspan>b</text>
    
    <text x="260" y="-35" font-size="16" font-weight="600" fill="#1f2937">Logarithm</text>
    <text x="260" y="-15" font-size="13" fill="#6b7280">(equals exponent)</text>
    <text x="260" y="5" font-size="15" fill="#4b5563">n = log<tspan dy="3" font-size="11">a</tspan>(b)</text>
    
    <text x="475" y="345" font-size="16" font-weight="600" fill="#1f2937">Power</text>
    <text x="475" y="365" font-size="15" fill="#4b5563">b = a<tspan dy="-6" font-size="11">n</tspan></text>
  </g>
</svg>`

    }


    
  }


  const introContent = {
    id: "intro",
    title: "Introduction to Algebra Section",
    content: `Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

**Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.

`
  }

  const keyWords = [
    'algebra',
    'learn algebra',
    'algebra formulas',
    'algebra definitions',
    'algebraic equations',
    'algebra concepts',
    'basic algebra',
    'algebra tutorial'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/algebra'
  const lastModified = new Date().toISOString();

  const definitionsCategoryExplanations = {
    "Roots": "Core concepts and operations with roots. Key terms include Square Root (x where x² = n), Cube Root (x where x³ = n), Radical Symbol (√), Perfect Squares/Cubes, and methods of simplification. Covers both real and imaginary roots, radical expressions, and related operations.",
    
    "Logarithms": "Functions that determine the exponent needed for a base to reach a number. Includes Natural Logarithm (base e), Common Logarithm (base 10), Binary Logarithm (base 2), and their properties. Covers logarithmic functions, equations, identities and transformations.",
    
    "Exponents": "Rules and operations involving powers. Features basic concepts like Base and Power, Laws of Exponents, Exponential Functions (a^x), and applications in growth/decay. Includes special cases like Zero, Negative, and Fractional exponents."
   };

   const formulasCategoryExplanations = {
    "Exponent Rules": "Core rules for manipulating exponents. Key principles include Product Rule ($x^m * x^n = x^{m+n}$), Quotient Rule ($x^m/x^n = x^{m-n}$), Power Rule $((x^m)^n = x^{mn})$, and special cases for zero and negative exponents.",
    
    "Radical Rules": "Rules for manipulating radicals and roots. Features Product Rule for radicals (√(xy) = √x * √y), Quotient Rule (√(x/y) = √x/√y), Power Rule $(√(x^n) = x^{n/2})$, and rationalization techniques. Includes properties for handling even/odd roots and nested radicals.",
   
    "Logarithm Laws": "Fundamental rules for logarithmic manipulation. Includes definition $(y = log_b x ⟺ b^y = x)$, Product Rule $(log(MN) = log M + log N)$, Quotient Rule $(log(M/N) = log M - log N)$, and Change of Base formula.",
   
    "Binomial Rules": "Rules for expanding and factoring binomial expressions. Features Binomial Theorem $((x+y)^n$ expansion), special products like square of binomial $(x+y)^2 = x^2 + 2xy + y^2$, and cube of binomial $(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$."
   };
   
  
   
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      algebraFormulasList,
      algebraTermsList,
      definitionsCategoryExplanations,
      formulasCategoryExplanations,
      // childrenNav,
      tools
    }
  }
}

export default function AlgebraPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  algebraFormulasList,
  algebraTermsList,
  definitionsCategoryExplanations,
  formulasCategoryExplanations,
  // childrenNav,
  tools
}) {

  
  const algebraSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/algebra/formulas',
      content: [
        { 
          content:  <CategoriesList data={algebraFormulasList} 
          baseUrl='/algebra/formulas'
          categoryExplanations={formulasCategoryExplanations}/>,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={algebraFormulasList}
            moreFormulasLink='/algebra/formulas'
          />, 
          layout: 'horizontal', 
          position: 'right',
          width: 2 
        }
      ]
    },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      link:'/algebra/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={algebraTermsList}
            moreFormulasLink='/algebra/definitions'
            type='definition'
          />, 
          layout: 'horizontal', 
          position: 'left',
          width: 2
        },
        { 
          content:  <CategoriesList data={algebraTermsList} 
          baseUrl='/algebra/definitions'
          categoryExplanations={definitionsCategoryExplanations}/>,
          layout: 'horizontal', 
          position: 'right',
          width: 1.5 
        }
      ]
    },

    {
      id: 'powers_logs_roots',
      title: 'Powers, Logarithms and Roots',
      link:'',
      content:[

        ` Powers, roots, and logarithms are three closely interrelated concepts in mathematics.

@academic[theorem: Let us consider simple formula : $a^n=b$]@.

A [power](!/algebra/powers) is the result of repeated multiplication. For example, $a^n$ means multiplying $a$ by itself $n$ times,where $n$ is called the **exponent** and $b$ is the power (the result).

A [root](!/algebra/roots) is the number that, when raised to a certain power, gives a specific result. The $n$-th root of $b$, written as $\\sqrt[n]{b}$, is the number that, when raised to the $n$-th power, gives $b$. In other words, $\\sqrt[n]{b}=a$ means $a^n=b$.

A [logarithm](!/algebra/logarithms) is the exponent itself - it's the power that was used. Calculating a logarithm finds that **exponent** by answering: **"To what power must the base be raised to get a certain number?"** Or using mathematical notation: $\\log_a(b) = n$ means $a^n = b$.
`,
// `

// <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#fafafa;padding:2rem}table{border-collapse:collapse;width:80%;margin:0 auto;background-color:#fff;box-shadow:0 2px 5px rgba(0,0,0,.05)}td,th{border:1px solid #e0e0e0;padding:.75rem 1rem;text-align:left}th{background-color:#f5f5f5;font-weight:600}td{font-size:.95rem}caption{font-size:1.25rem;font-weight:700;margin-bottom:1rem}</style></head><body><table><caption>Relationship Between Exponents, Roots, and Logarithms</caption><thead><tr><th>Concept</th><th>Expression</th><th>Meaning</th><th>Inverse Of</th></tr></thead><tbody><tr><td>Exponentiation</td><td><code>b<sup>c</sup> = a</code></td><td>Base <code>b</code> raised to exponent <code>c</code> gives <code>a</code></td><td>Logarithm, Root</td></tr><tr><td>Root</td><td><code>√<sub>n</sub>a = b</code></td><td><code>b</code> to the power of <code>n</code> gives <code>a</code></td><td>Exponentiation</td></tr><tr><td>Logarithm</td><td><code>log<sub>b</sub>(a) = c</code></td><td>The exponent <code>c</code> such that <code>b<sup>c</sup> = a</code></td><td>Exponentiation</td></tr></tbody></table></body></html>

// `,


sectionContent.roots_exp_logs.svg,
//   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-300 -300 1400 950">
//   <defs>
//     <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="0%" style="stop-color:#fafafa;stop-opacity:1" />
//       <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
//     </linearGradient>
//     <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
//       <stop offset="100%" style="stop-color:#f8f8f8;stop-opacity:1" />
//     </linearGradient>
//     <linearGradient id="boxGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//       <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
//       <stop offset="100%" style="stop-color:#f9f9f9;stop-opacity:1" />
//     </linearGradient>
//     <filter id="softShadow">
//       <feDropShadow dx="2" dy="3" stdDeviation="3" flood-opacity="0.2"/>
//     </filter>
//     <filter id="boxShadow">
//       <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.15"/>
//     </filter>
//     <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
//       <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" stroke="none"/>
//     </marker>
//   </defs>
  
//   <!-- Background -->
//   <rect x="-300" y="-300" width="1300" height="850" fill="url(#bgGradient)"/>
  
//   <!-- Main circles and variables -->
//   <g>
//     <circle cx="200" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
//     <text x="200" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">a</text>
    
//     <circle cx="260" cy="160" r="25" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
//     <text x="260" y="168" font-family="Georgia, serif" font-size="28" text-anchor="middle" fill="#374151" font-weight="500">n</text>
    
//     <text x="300" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#9ca3af" font-weight="300">=</text>
    
//     <circle cx="370" cy="200" r="35" fill="url(#circleGradient)" stroke="#d1d5db" stroke-width="2" filter="url(#softShadow)"/>
//     <text x="370" y="212" font-family="Georgia, serif" font-size="38" text-anchor="middle" fill="#374151" font-weight="500">b</text>
//   </g>
  
//   <!-- Connecting arrows -->
//   <g stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
//     <line x1="170" y1="225" x2="90" y2="300" marker-end="url(#arrowhead)"/>
//     <line x1="260" y1="135" x2="260" y2="50" marker-end="url(#arrowhead)"/>
//     <line x1="400" y1="225" x2="475" y2="300" marker-end="url(#arrowhead)"/>
//   </g>
  
//   <!-- Information boxes -->
//   <g>
//     <rect x="20" y="320" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
//     <rect x="185" y="-60" width="150" height="90" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
//     <rect x="400" y="320" width="150" height="70" rx="8" fill="url(#boxGradient)" stroke="#e5e7eb" stroke-width="1.5" filter="url(#boxShadow)"/>
//   </g>
  
//   <!-- Text content -->
//   <g font-family="Georgia, serif" fill="#374151" text-anchor="middle">
//     <text x="95" y="345" font-size="16" font-weight="600" fill="#1f2937">Root</text>
//     <text x="95" y="365" font-size="15" fill="#4b5563">a = b<tspan dy="-6" font-size="11">1/n</tspan></text>
//     <text x="95" y="390" font-size="15" fill="#4b5563">a = <tspan dy="2">ⁿ√</tspan>b</text>
    
//     <text x="260" y="-35" font-size="16" font-weight="600" fill="#1f2937">Logarithm</text>
//     <text x="260" y="-15" font-size="13" fill="#6b7280">(equals exponent)</text>
//     <text x="260" y="5" font-size="15" fill="#4b5563">n = log<tspan dy="3" font-size="11">a</tspan>(b)</text>
    
//     <text x="475" y="345" font-size="16" font-weight="600" fill="#1f2937">Power</text>
//     <text x="475" y="365" font-size="15" fill="#4b5563">b = a<tspan dy="-6" font-size="11">n</tspan></text>
//   </g>
// </svg>`,


`This diagram illustrates the fundamental mathematical relationships between three key operations: exponents, logarithms, and roots.
At the center, you have three variables (x, y, z) connected by the equation $x^y = z$. The diagram shows how each operation is the inverse of another:
**The three equivalent relationships:**
- [Power](!/algebra/powers): $z = x^y$ (x raised to the power y equals z)
- [Logarithm](!/algebra/logarithms): $y = log_x(z)$ (the logarithm base x of z equals y)
- [Root](!/algebra/roots): $x = \\sqrt[y]{z}$ (the y-th root of z equals x)

**The key insight** is that these are all different ways of expressing the same mathematical relationship. If you know any two of the three values (x, y, z), you can find the third using the appropriate operation:
- **If you know x and y, use exponentiation to find z**
- **If you know x and z, use logarithms to find y**  
- **If you know y and z, use roots to find x**
`,

<div key={'logs_powers_roots'} dangerouslySetInnerHTML={{__html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#fafafa;padding:2rem}table{border-collapse:collapse;width:80%;margin:0 auto;background-color:#fff;box-shadow:0 2px 5px rgba(0,0,0,.05)}td,th{border:1px solid #e0e0e0;padding:.75rem 1rem;text-align:left}th{background-color:#f5f5f5;font-weight:600}td{font-size:.95rem}caption{font-size:1.25rem;font-weight:700;margin-bottom:1rem}</style></head><body><table><caption>Relationship Between Exponents, Roots, and Logarithms</caption><thead><tr><th>Concept</th><th>Expression</th><th>Meaning</th><th>Inverse Of</th></tr></thead><tbody><tr><td>Exponentiation</td><td><code>b<sup>c</sup> = a</code></td><td>Base <code>b</code> raised to exponent <code>c</code> gives <code>a</code></td><td>Logarithm, Root</td></tr><tr><td>Root</td><td><code>√<sub>n</sub>a = b</code></td><td><code>b</code> to the power of <code>n</code> gives <code>a</code></td><td>Exponentiation</td></tr><tr><td>Logarithm</td><td><code>log<sub>b</sub>(a) = c</code></td><td>The exponent <code>c</code> such that <code>b<sup>c</sup> = a</code></td><td>Exponentiation</td></tr></tbody></table></body></html>`}} />,
`@academic[theorem:Examples :]@


`,
// `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',sans-serif;background-color:#fdfdfd;padding:2rem}table{border-collapse:collapse;width:90%;margin:auto;background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.1);table-layout:fixed}td,th{border:1px solid #ccc;padding:.75rem;text-align:center;vertical-align:top;word-wrap:break-word}th{background-color:#f0f0f0;font-weight:600}caption{font-size:1.3rem;font-weight:700;margin-bottom:1rem}</style></head><body><table><caption>Exponents, Roots, and Powers</caption><thead><tr><th>Expression</th><th>Root<br>(Base recovered from result and exponent)</th><th>Exponent<br>(Equal to the logarithm: the power used)</th><th>Power<br>(Result of base raised to exponent)</th></tr></thead><tbody><tr><td>2<sup>3</sup> = 8</td><td>∛8 = 2</td><td>3</td><td>8</td></tr><tr><td>3<sup>2</sup> = 9</td><td>√9 = 3</td><td>2</td><td>9</td></tr><tr><td>4<sup>2</sup> = 16</td><td>√16 = 4</td><td>2</td><td>16</td></tr></tbody></table></body></html>`
<div key={'logs_powers_roots_2'} dangerouslySetInnerHTML={{__html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>body{font-family:'Segoe UI',sans-serif;background-color:#fdfdfd;padding:2rem}table{border-collapse:collapse;width:90%;margin:auto;background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.1);table-layout:fixed}td,th{border:1px solid #ccc;padding:.75rem;text-align:center;vertical-align:top;word-wrap:break-word}th{background-color:#f0f0f0;font-weight:600}caption{font-size:1.3rem;font-weight:700;margin-bottom:1rem}</style></head><body><table><caption>Exponents, Roots, and Powers</caption><thead><tr><th>Expression</th><th>Root<br>(Base recovered from result and exponent)</th><th>Exponent<br>(Equal to the logarithm: the power used)</th><th>Power<br>(Result of base raised to exponent)</th></tr></thead><tbody><tr><td>2<sup>3</sup> = 8</td><td>∛8 = 2</td><td>3</td><td>8</td></tr><tr><td>3<sup>2</sup> = 9</td><td>√9 = 3</td><td>2</td><td>9</td></tr><tr><td>4<sup>2</sup> = 16</td><td>√16 = 4</td><td>2</td><td>16</td></tr></tbody></table></body></html>`}} />
      ],
    },
    {

      id:'identities',
      title:sectionContent.identities.title,
      link:sectionContent.identities.link,
      content:[
        sectionContent.identities.content
      ]

    },
    {
      id:'equations',
      title:sectionContent.equations.title,
      link:sectionContent.equations.link,
      content:[
           sectionContent.equations.content,

      ]

    },

     {
            id: 'tools',
            title: 'Tools', // Give it a proper title
            link: '', // Optional
            content: [
                     {
                       content: 
                        
                         <ToolsSlider tools={tools} key={'slider'}/>
                       ,
                       layout: 'horizontal',
                       position: 'center', // or 'left' if you prefer
                       width: 8 // full width
                     }
                   ]
          },
      
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algebra - Learn Mathematics",
    "description": "Comprehensive guide to algebra including formulas, definitions, and core concepts. Learn about algebraic operations, equations, functions, and more.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Algebra",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Algebra - Formulas, Definitions & Concepts | Learn Math Class"
  const pageDescription = "Master algebra with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        topOffset='55px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     {/* <SecondaryNavbar verticalPosition='17.5%' alignment='top' backgroundColor='#1f2937' height={'20px'} /> */}
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Algebra
        </h1>
       
       {/* <StaticSectionTableOfContents
       sections={algebraSections}
       showSecondaryNav={true}
       secondaryNavMode="children"  // or "siblings"
       secondaryNavTitle="More in this Section" 
       navLinks={childrenNav}/> */}

       {/* <SEOFriendlySectionTableOfContents
       sections={algebraSections}
       showSecondaryNav={true}
       secondaryNavMode="children"  // or "siblings"
       secondaryNavTitle="More in this Section" 
       navLinks={childrenNav}/> */}

       {/* <SectionTableOfContents2
       sections={algebraSections}
       showSecondaryNav={true}
       secondaryNavMode="children"  // or "siblings"
       secondaryNavTitle="More in this Section" 
       navLinks={childrenNav}/> */}
      
       <SectionTableOfContents 
  sections={algebraSections}
  showSecondaryNav={true}
  secondaryNavMode="children"
  secondaryNavTitle="More in this Section" />

        {/* <SectionTableOfContents sections={algebraSections}
         showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section" 
         navLinks={childrenNav}/> */}
        <br/>
        <br/>
        <br/>
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
        <Sections sections={algebraSections}/>
        <br/>
        <br/>
        {/* <ToolsSlider/> */}
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}