import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '../../../app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "equations",
  "solving equations",
  "algebraic equations",
  "solution set",
  "equivalent equations",
  "linear equations",
  "quadratic equations",
  "polynomial equations",
  "rational equations",
  "absolute value equations",
  "extraneous solutions",
  "equation types",
  "conditional equation",
  "identity equation",
  "equation degree"
]
  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

 
const sectionsContent = {
//   obj0: {
//     title: `Key Terms`,
//     content: `
// ## Equations and Expressions

// An **equation** is a statement that two expressions are equal, joined by the $=$ sign. An **expression** is a mathematical phrase combining numbers, variables, and operations — it has no equality sign and cannot be solved. A **variable** is a symbol (typically $x$, $y$, $z$) representing an unknown or changing quantity.

// ## Solutions

// A **solution** is a value of the variable that makes both sides of an equation equal. The **solution set** is the collection of all solutions. An **extraneous solution** is a value that emerges during solving but does not satisfy the original equation — it arises from non-reversible steps like squaring or clearing denominators.

// ## Equation Classification

// A **conditional equation** is true only for specific values of the variable. An **identity** is true for all permissible values. A **contradiction** is true for no value. Two equations are **equivalent equations** when they share the same solution set.

// An **algebraic equation** is built from variables, constants, and the operations $+$, $-$, $\\times$, $\\div$, and integer powers. The **degree of an equation** is the highest power of the variable after simplification. The **standard form** of an equation is the conventional arrangement with all terms on one side, ordered by descending powers, equal to zero.

// ## Supporting Concepts

// A **coefficient** is the numerical factor multiplying a variable or power of a variable in a term. The **discriminant** of a quadratic equation $ax^2 + bx + c = 0$ is the quantity $\\Delta = b^2 - 4ac$, which determines the number and type of solutions. A **domain restriction** is a value excluded from consideration because it causes division by zero or other undefined operations. The **absolute value** of a number is its distance from zero on the number line, always non-negative.`,
//     before: ``,
//     after: `


// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
//     link: '',
//   },
 
// obj0: {
//     title: `Key Terms`,
//     content: `
// ## Equations and Expressions

// An [equation](!/algebra/definitions#equation) is a statement that two expressions are equal, joined by the $=$ sign. An [expression](!/algebra/definitions#expression) is a mathematical phrase combining numbers, variables, and operations — it has no equality sign and cannot be solved. A [variable](!/algebra/definitions#variable) is a symbol (typically $x$, $y$, $z$) representing an unknown or changing quantity.

// ## Solutions

// A [solution](!/algebra/definitions#solution) is a value of the variable that makes both sides of an equation equal. The [solution set](!/algebra/definitions#solution_set) is the collection of all solutions. An [extraneous solution](!/algebra/definitions#extraneous_solution) is a value that emerges during solving but does not satisfy the original equation — it arises from non-reversible steps like squaring or clearing denominators.

// ## Equation Classification

// A [conditional equation](!/algebra/definitions#conditional_equation) is true only for specific values of the variable. An [identity](!/algebra/definitions#identity) is true for all permissible values. A [contradiction](!/algebra/definitions#contradiction) is true for no value. Two equations are [equivalent equations](!/algebra/definitions#equivalent_equations) when they share the same solution set.

// An [algebraic equation](!/algebra/definitions#algebraic_equation) is built from variables, constants, and the operations $+$, $-$, $\\times$, $\\div$, and integer powers. The [degree of an equation](!/algebra/definitions#degree_of_an_equation) is the highest power of the variable after simplification. The [standard form](!/algebra/definitions#standard_form) of an equation is the conventional arrangement with all terms on one side, ordered by descending powers, equal to zero.

// ## Supporting Concepts

// A [coefficient](!/algebra/definitions#coefficient) is the numerical factor multiplying a variable or power of a variable in a term. The [discriminant](!/algebra/definitions#discriminant) of a quadratic equation $ax^2 + bx + c = 0$ is the quantity $\\Delta = b^2 - 4ac$, which determines the number and type of solutions. A [domain restriction](!/algebra/definitions#domain_restriction) is a value excluded from consideration because it causes division by zero or other undefined operations. The [absolute value](!/algebra/definitions#absolute_value) of a number is its distance from zero on the number line, always non-negative.`,
//     before: ``,
//     after: `


// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
//     link: '',
//   },

obj0: {
    title: `Key Terms`,
    content: `
## Equations and Expressions

- [Equation](!/algebra/definitions#equation) — a statement that two expressions are equal, joined by the $=$ sign
- [Expression](!/algebra/definitions#expression) — a mathematical phrase combining numbers, variables, and operations, with no equality sign
- [Variable](!/algebra/definitions#variable) — a symbol (typically $x$, $y$, $z$) representing an unknown or changing quantity

## Solutions

- [Solution](!/algebra/definitions#solution) — a value of the variable that makes both sides of an equation equal
- [Solution set](!/algebra/definitions#solution_set) — the collection of all solutions to an equation
- [Extraneous solution](!/algebra/definitions#extraneous_solution) — a value that emerges during solving but does not satisfy the original equation

## Equation Classification

- [Conditional equation](!/algebra/definitions#conditional_equation) — true only for specific values of the variable
- [Identity](!/algebra/definitions#identity) — true for all permissible values of the variable
- [Contradiction](!/algebra/definitions#contradiction) — true for no value of the variable
- [Equivalent equations](!/algebra/definitions#equivalent_equations) — equations that share the same solution set
- [Algebraic equation](!/algebra/definitions#algebraic_equation) — built from variables, constants, and the operations $+$, $-$, $\\times$, $\\div$, and integer powers
- [Degree of an equation](!/algebra/definitions#degree_of_an_equation) — the highest power of the variable after simplification
- [Standard form](!/algebra/definitions#standard_form) — all terms on one side, ordered by descending powers, equal to zero

## Supporting Concepts

- [Coefficient](!/algebra/definitions#coefficient) — the numerical factor multiplying a variable or power of a variable
- [Discriminant](!/algebra/definitions#discriminant) — the quantity $\\Delta = b^2 - 4ac$ in a quadratic equation, determining the number and type of solutions
- [Domain restriction](!/algebra/definitions#domain_restriction) — a value excluded because it causes division by zero or undefined operations
- [Absolute value](!/algebra/definitions#absolute_value) — the distance of a number from zero on the number line, always non-negative`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
    link: '',
  },


obj1: {
    title: `What an Equation Is`,
    content: `An equation consists of two expressions joined by an equality sign. The expression to the left of $=$ is the left-hand side, and the expression to the right is the right-hand side. Together they form a single assertion: whatever the left side evaluates to, the right side evaluates to the same thing.

The statement $3 + 4 = 7$ is an equation that is unconditionally true. The statement $3 + 4 = 8$ is an equation that is unconditionally false. Neither of these involves an unknown — they are simply claims about arithmetic facts. The equations that drive algebra are different: they contain one or more unknowns (typically denoted $x$, $y$, $z$), and their truth depends on what values those unknowns take. The equation $2x + 1 = 9$ is true when $x = 4$ and false for every other value of $x$.

An expression like $2x + 1$ is not an equation. It has no equality sign and makes no claim. It can be evaluated, simplified, or factored, but it cannot be "solved" because there is no condition to satisfy. The distinction matters: solving requires an equation, not just an expression.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solutions and Solution Sets`,
    content: `A solution to an equation is a value of the unknown that makes both sides equal. When $x = 4$ is substituted into $2x + 1 = 9$, the left side becomes $2(4) + 1 = 9$, which matches the right side. The value $x = 4$ satisfies the equation.

The solution set is the collection of all values that satisfy the equation. Some equations have a single solution, others have several, and some have infinitely many. The solution set of $x^2 = 4$ is $\\{-2, 2\\}$ because both values produce $4$ when squared. The solution set of $x^2 = -1$ over the real numbers is empty — no real number squared gives $-1$.

Set-builder notation provides a compact way to describe solution sets: $\\{x \\in \\mathbb{R} : 2x + 1 = 9\\}$ reads "the set of all real numbers $x$ such that $2x + 1 = 9$." For the equation above, this set contains only the element $4$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Types of Equations by Solution Behavior`,
    content: `Every equation in one variable falls into one of three categories based on how its solution set behaves.

A conditional equation is true for particular values and false for the rest. Most equations encountered in practice are conditional: $5x - 3 = 12$ holds only when $x = 3$, and $x^2 - 5x + 6 = 0$ holds only when $x = 2$ or $x = 3$. The task of "solving" an equation almost always refers to finding the solutions of a conditional equation.

An identity is true for every permissible value of the variable. The equation $2(x + 1) = 2x + 2$ holds regardless of what $x$ is, because both sides are algebraically identical after expansion. Identities are not solved — they are verified. They express structural facts about expressions rather than constraints on unknowns.

A contradiction is true for no value of the variable. The equation $x + 1 = x + 3$ simplifies to $1 = 3$, a false statement independent of $x$. No substitution can rescue it. The solution set is empty.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Equivalent Equations`,
    content: `Two equations are equivalent when they share the same solution set. The equations $2x = 10$ and $x = 5$ are equivalent because every value satisfying one satisfies the other. Solving an equation amounts to transforming it, step by step, into a simpler equivalent equation from which the solution is obvious.

Certain operations always produce equivalent equations. Adding or subtracting the same quantity on both sides preserves the solution set, as does multiplying or dividing both sides by any nonzero constant. These reversible operations are the backbone of algebraic manipulation.

Other operations carry risk. Multiplying both sides by an expression containing the variable may introduce values that were not solutions of the original equation. Squaring both sides can do the same. The equation $x = 3$ has one solution, but squaring gives $x^2 = 9$, whose solution set $\\{-3, 3\\}$ is larger. The extra value $x = -3$ is an extraneous solution — it satisfies the transformed equation but not the original. Any solving method that involves a non-reversible step demands verification: every candidate must be substituted back into the original equation to confirm it is genuine.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Algebraic Equations`,
    content: `An algebraic equation is built entirely from variables, constants, and the operations of addition, subtraction, multiplication, division, and raising to integer powers. No transcendental functions — no sines, no logarithms, no exponentials with variable exponents — appear in a purely algebraic equation.

The degree of an algebraic equation is the highest power of the unknown that appears after the equation is cleared of fractions and simplified. Degree determines both the complexity of the equation and the maximum number of solutions it can have. A first-degree equation is called linear, a second-degree equation is quadratic, a third-degree equation is cubic, a fourth-degree equation is quartic, and the pattern continues with quintic, sextic, and so on.

Algebraic equations form the core of this section. Each degree class has its own structure, its own solving techniques, and in some cases its own dedicated formulas. The pages below treat the major classes individually, beginning with the simplest and progressing through increasingly complex types.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Linear Equations`,
    content: `A [linear equation](!/algebra/equations/linear) in one variable takes the form $ax + b = 0$ where $a \\neq 0$. The variable appears only to the first power, and the equation has exactly one solution: $x = -\\frac{b}{a}$. There are no special cases regarding the number of solutions — as long as $a$ is nonzero, a unique answer exists.

Solving a linear equation requires nothing beyond the properties of equality: isolate the variable by undoing the operations applied to it, working in reverse order. When the equation involves parentheses, the distributive property clears them first. When fractions appear with numerical denominators, multiplying through by the least common denominator converts the equation to integer coefficients without changing its type. The mechanics are straightforward, but they establish the logical framework — preserving equivalence through reversible operations — that every other equation type builds upon.

The structure breaks only when the variable terms cancel entirely during simplification. If the remaining statement is true (like $0 = 0$), the original equation is an identity. If it is false (like $0 = 5$), the equation is a contradiction. These edge cases aside, first-degree equations are the most predictable objects in algebra.`,
    before: ``,
    after: ``,
    link: '/algebra/equations/linear',
  },

  obj7: {
    title: `Quadratic Equations`,
    content: `A [quadratic equation](!/algebra/equations/quadratic) has the form $ax^2 + bx + c = 0$ with $a \\neq 0$. The presence of $x^2$ introduces a fundamental shift: the equation can have two solutions, one solution, or — over the real numbers — no solutions at all. The quantity $\\Delta = b^2 - 4ac$, called the discriminant, settles the question without solving. When $\\Delta$ is positive, two distinct real roots exist. When $\\Delta$ equals zero, a single repeated root appears. When $\\Delta$ is negative, no real roots exist, though two complex conjugate roots do.

Three solving methods cover all cases. Factoring works when the quadratic decomposes into a product of two binomials with rational coefficients, but not every quadratic factors neatly. Completing the square works universally by rewriting the left side as a perfect square, and this technique is what produces the quadratic formula:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

The formula accepts any coefficients and delivers the roots directly, making it the default tool when factoring is not immediate. Vieta's formulas offer a complementary perspective: the sum of the two roots equals $-\\frac{b}{a}$ and their product equals $\\frac{c}{a}$, connecting solutions back to the coefficients that generated them.`,
    before: ``,
    after: ``,
    link: '/algebra/equations/quadratic',
  },

  obj8: {
    title: `Polynomial Equations`,
    content: `A [polynomial equation](!/algebra/equations/polynomial) of degree $n$ has the general form $a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$ with $a_n \\neq 0$. The Fundamental Theorem of Algebra guarantees exactly $n$ roots in $\\mathbb{C}$ when counted with multiplicity, but finding those roots grows sharply harder as the degree increases.

For cubics and quartics, closed-form solutions exist — Cardano's formula for degree three and Ferrari's method for degree four — though both are cumbersome and rarely used in practice. The Abel–Ruffini theorem draws a hard boundary at degree five: no general formula built from radicals and arithmetic can solve every quintic or higher-degree polynomial. Specific equations beyond degree four may still yield to factoring, the rational root theorem, or substitution tricks, but there is no universal algebraic recipe.

The practical strategy for polynomial equations of any degree begins with the [rational root theorem](!/algebra/polynomials/rules): test the finite list of candidate rational roots, and each confirmed root reduces the degree by one through polynomial division. Once the degree drops to two, the quadratic formula finishes the job. When no rational roots exist, numerical methods provide approximations to any desired accuracy.`,
    before: ``,
    after: ``,
    link: '/algebra/equations/polynomial',
  },

  obj9: {
    title: `Rational Equations`,
    content: `A [rational equation](!/algebra/equations/rational) contains at least one fraction whose denominator involves the variable. The equation $\\frac{3}{x - 1} + \\frac{2}{x + 4} = 1$ is rational because $x$ appears below the fraction bar, and the values $x = 1$ and $x = -4$ must be excluded before any solving begins — substituting either would produce division by zero.

The standard technique is to multiply both sides by the least common denominator of all fractions, clearing every denominator in one step. What remains is a polynomial equation, solvable by the methods of earlier sections. The catch is that this multiplication is not always reversible: if the LCD equals zero at some value of $x$, that value may emerge as a solution of the polynomial equation even though it was never in the domain of the original. These extraneous solutions must be filtered out by checking each candidate against the domain restrictions.

The risk of extraneous solutions is not a minor technicality — it is the defining feature of rational equations. Every solution procedure must end with verification. A candidate that zeros out any denominator in the original equation is rejected, regardless of how cleanly it emerged from the algebra.`,
    before: ``,
    after: ``,
    link: '/algebra/equations/rational',
  },

  obj10: {
    title: `Absolute Value Equations`,
    content: `An [absolute value equation](!/algebra/equations/absolute-value) involves the absolute value function $|f(x)|$ applied to an expression containing the unknown. The absolute value of a number is its distance from zero, so $|f(x)| = k$ asks: where is $f(x)$ exactly $k$ units from zero? When $k > 0$, the answer splits into two cases — $f(x) = k$ and $f(x) = -k$ — each generating its own equation to solve. When $k = 0$, a single equation $f(x) = 0$ remains. When $k < 0$, no solution exists because distance is never negative.

This case-splitting approach extends to more complex configurations. The equation $|f(x)| = |g(x)|$ decomposes into $f(x) = g(x)$ and $f(x) = -g(x)$. Equations with multiple absolute value terms require identifying the critical points where each expression inside $|\\;|$ changes sign, then solving on each interval separately using the piecewise definition. The geometric reading — absolute value as distance on the number line — often provides a faster route to the answer than purely mechanical case analysis.`,
    before: ``,
    after: ``,
    link: '/algebra/equations/absolute-value',
  },

  obj11: {
    title: `Equations Beyond Algebra`,
    content: `Equations arise throughout mathematics, and many types fall outside the algebraic family because they involve operations or functions that algebra alone cannot handle. Each of these types has a dedicated treatment elsewhere on this site, and the links below point to those pages.

[Exponential equations](!/algebra/powers/exponential-equations) place the unknown in the exponent: $2^x = 16$ or $3^{2x-1} = 5$. When the bases can be matched, the exponents are set equal directly. When they cannot, logarithms provide the bridge.

[Logarithmic equations](!/algebra/logarithms/equations) contain the unknown inside a logarithm: $\\log_2(x + 3) = 5$. Converting to exponential form — $x + 3 = 2^5$ — is the standard first move. Domain restrictions apply because logarithms are defined only for positive arguments.

[Radical equations](!/algebra/roots/equations) involve the unknown under a root sign: $\\sqrt{x + 5} = x - 1$. Isolating the radical and raising both sides to the appropriate power removes the root but may introduce extraneous solutions, making verification mandatory.

[Systems of linear equations](!/linear-algebra/linear-systems) involve multiple linear equations with multiple unknowns solved simultaneously. Gaussian elimination, matrix methods, and determinant-based formulas handle these systematically.

**Trigonometric equations** contain the unknown inside trigonometric functions like $\\sin$, $\\cos$, or $\\tan$. The periodic nature of these functions typically produces infinitely many solutions.

**Differential equations** relate a function to its derivatives. They belong to calculus and arise whenever a quantity is defined by its rate of change rather than its value directly.`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
  id: 'intro',
  title: `The Language of Mathematical Conditions`,
  content: `An equation is a statement that two mathematical expressions have the same value. Unlike an expression, which simply represents a quantity, an equation makes a claim — one that may be true, false, or true only under certain conditions. Determining when and whether that claim holds is the central problem of algebra, and nearly every branch of mathematics defines its own family of equations. This section treats equations as a subject in their own right: what they are, how they behave, and how the algebraic types are classified and solved.`,
};



const faqQuestions = {
  obj1: {
    question: "What is an equation?",
    answer: "An equation consists of two expressions joined by an equality sign, asserting that both sides have the same value. Unlike expressions, equations make claims that can be true, false, or true only for certain values of the unknown.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a solution set?",
    answer: "The solution set is the collection of all values that satisfy an equation. It may contain one value, multiple values, infinitely many values, or no values at all depending on the equation type.",
    sectionId: "2"
  },
  obj3: {
    question: "What are conditional equations, identities, and contradictions?",
    answer: "A conditional equation is true for specific values (like 2x = 10). An identity is true for all values (like 2(x+1) = 2x+2). A contradiction is true for no values (like x+1 = x+3). Most equations to solve are conditional.",
    sectionId: "3"
  },
  obj4: {
    question: "What are equivalent equations and extraneous solutions?",
    answer: "Equivalent equations share the same solution set. Reversible operations (adding, multiplying by nonzero constants) preserve equivalence. Non-reversible operations (squaring, clearing denominators) may introduce extraneous solutions that must be verified.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the degree of an algebraic equation?",
    answer: "The degree is the highest power of the unknown after simplification. Degree 1 is linear, degree 2 is quadratic, degree 3 is cubic, degree 4 is quartic. Degree determines complexity and maximum number of solutions.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve linear equations?",
    answer: "Linear equations ax + b = 0 have exactly one solution: x = -b/a. Isolate the variable by undoing operations in reverse order using reversible steps. The structure is the foundation for all equation-solving methods.",
    sectionId: "6"
  },
  obj7: {
    question: "What methods solve quadratic equations?",
    answer: "Three methods: factoring (when possible), completing the square (always works), and the quadratic formula x = (-b ± √(b²-4ac))/2a. The discriminant b²-4ac determines whether there are two, one, or no real solutions.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you solve polynomial equations of degree 3 or higher?",
    answer: "Use the rational root theorem to find candidates, test them, and reduce degree through polynomial division. No general formula exists for degree 5+. Once reduced to degree 2, the quadratic formula finishes the solution.",
    sectionId: "8"
  },
  obj9: {
    question: "Why do rational equations produce extraneous solutions?",
    answer: "Clearing denominators by multiplying both sides is not reversible when the LCD equals zero at some x value. Such values may emerge as solutions but were never in the domain. Always verify candidates against domain restrictions.",
    sectionId: "9"
  },
  obj10: {
    question: "How do you solve absolute value equations?",
    answer: "For |f(x)| = k with k > 0, split into two cases: f(x) = k and f(x) = -k. For k = 0, solve f(x) = 0. For k < 0, no solution exists. Absolute value represents distance from zero on the number line.",
    sectionId: "10"
  },
  obj11: {
    question: "What equation types go beyond algebra?",
    answer: "Exponential equations (unknown in exponent), logarithmic equations (unknown in log), radical equations (unknown under root), systems of equations (multiple unknowns), trigonometric equations, and differential equations each require specialized methods.",
    sectionId: "11"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Equations",
    "description": "Complete guide to equations: definitions, solution sets, equation types (conditional, identity, contradiction), equivalent equations, and solving linear, quadratic, polynomial, rational, and absolute value equations.",
    "url": "https://www.learnmathclass.com/algebra/equations",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Equations"
    },
    "teaches": [
      "Definition of equations vs expressions",
      "Solutions and solution sets",
      "Conditional equations, identities, contradictions",
      "Equivalent equations and extraneous solutions",
      "Equation degree and classification",
      "Linear, quadratic, polynomial equations",
      "Rational and absolute value equations"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.learnmathclass.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      }
    ]
  },

  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqQuestions).map(key => ({
      "@type": "Question",
      "name": faqQuestions[key].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqQuestions[key].answer
      }
    }))
  }
}




   return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Equations: Types, Solutions & Solving Methods | Learn Math Class",
      description: "Complete guide to equations: definitions, solution sets, equation types (conditional, identity, contradiction), equivalent equations, and solving linear, quadratic, polynomial, rational, and absolute value equations.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations",
      name: "Equations"
    },
  }
}
   }


export default function EquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
 <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
    }}
  />
</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Equations</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <KeyTermsCard
  id="0"
  title={sectionsContent.obj0.title}
  content={sectionsContent.obj0.content}
  after={sectionsContent.obj0.after}
  variant="light"
/>
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
