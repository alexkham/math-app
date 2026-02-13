import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
  "roots of a polynomial",
  "polynomial roots",
  "zeros of a polynomial",
  "find polynomial roots",
  "polynomial root multiplicity",
  "quadratic formula roots",
  "rational root theorem",
  "roots and factors",
  "complex roots polynomial",
  "conjugate pairs roots",
  "Vieta's formulas",
  "sum and product of roots",
  "polynomial x-intercepts",
  "how to find polynomial roots",
  "number of roots polynomial"
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },

    obj1: {
  title: `What is a Root?`,
  content: `A root of a polynomial $P(x)$ is a value $r$ such that $P(r) = 0$. The terms "root," "zero," and "solution" all refer to the same thing — an input that makes the polynomial vanish.

Consider $P(x) = x^2 - 5x + 6$. Testing $x = 2$ gives $P(2) = 4 - 10 + 6 = 0$. Testing $x = 3$ gives $P(3) = 9 - 15 + 6 = 0$. Both values produce zero, so both are roots. Any other input — say $x = 1$ — yields $P(1) = 1 - 5 + 6 = 2 \\neq 0$, confirming that $1$ is not a root.

Verification is always available through direct substitution. Claim that $r$ is a root, substitute it into $P(x)$, and check whether the result is zero. This test is definitive — no ambiguity, no approximation. A value either satisfies $P(r) = 0$ or it does not.

Roots answer a precise question: for which values of $x$ does $P(x) = 0$? This question drives equation-solving throughout algebra. Setting a polynomial equal to zero and finding its roots is equivalent to solving the corresponding polynomial equation.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `Roots and Factors`,
  content: `Roots and factors encode the same information in different forms. The connection between them is one of the most important relationships in algebra.

If $r$ is a root of $P(x)$, then $(x - r)$ is a [factor](!/algebra/polynomials/factoring) of $P(x)$. This means $P(x)$ can be written as $(x - r) \\cdot Q(x)$ for some polynomial $Q(x)$ of degree one less than $P(x)$. The converse holds as well — if $(x - r)$ divides $P(x)$ evenly, then $r$ is a root.

The polynomial $x^2 - 5x + 6$ factors as $(x - 2)(x - 3)$. The factors immediately reveal the roots: $x = 2$ and $x = 3$. No further calculation is needed. Factored form makes roots visible at a glance.

This connection works in reverse too. Discovering a single root opens the door to further factoring. If testing reveals that $r = 2$ is a root of a cubic, dividing by $(x - 2)$ reduces the cubic to a quadratic. The quadratic may then be factored or solved by formula, uncovering the remaining roots. Each root found peels away one factor and lowers the degree by one.`,
  before: ``,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `Number of Roots`,
  content: `The degree of a polynomial sets a strict bound on how many roots it can have.

A polynomial of degree $n$ has at most $n$ real roots. A quadratic can have at most two, a cubic at most three, a degree $10$ polynomial at most ten. This upper bound applies to real roots — the roots that appear on the number line.

The Fundamental Theorem of Algebra sharpens this. Over the [complex numbers](!/complex-numbers), every polynomial of degree $n \\geq 1$ has exactly $n$ roots when counted with multiplicity. A degree $5$ polynomial always has exactly five complex roots — some may be real, some may involve $i$, and some may repeat, but the count is always five.

The gap between "at most $n$ real roots" and "exactly $n$ complex roots" explains what happens when a polynomial appears to have fewer roots than its degree suggests. The polynomial $x^2 + 1$ has degree $2$ but no real roots. Its two roots, $x = i$ and $x = -i$, exist in the complex number system. The polynomial $x^3 - x$ has degree $3$ and three real roots: $0$, $1$, and $-1$. The number of real roots varies; the number of complex roots (counting multiplicity) never does.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `Multiplicity`,
  content: `A root's multiplicity measures how many times it appears as a factor.

In $P(x) = (x - 2)^3(x + 1)$, the root $x = 2$ appears three times — it has multiplicity $3$. The root $x = -1$ appears once — it has multiplicity $1$. The total count, $3 + 1 = 4$, matches the degree of the polynomial.

A root with multiplicity $1$ is called a simple root. A root with multiplicity greater than $1$ is called a repeated root. The polynomial $(x - 5)^2(x + 3)^2$ has two repeated roots, each with multiplicity $2$, and no simple roots.

Multiplicity carries geometric meaning. At a simple root (odd multiplicity $1$), the [graph](!/algebra/polynomials/graphing) crosses the x-axis. At a root with even multiplicity, the graph touches the x-axis but turns back without crossing. At a root with odd multiplicity $3$ or higher, the graph crosses but with a visible flattening near the intercept. The higher the multiplicity, the flatter the curve at that root.

Multiplicity also affects calculus and algebraic analysis. A root of multiplicity $k$ means not only that $P(r) = 0$, but that the first $k - 1$ derivatives also vanish at $r$. This deeper vanishing is what creates the flattening visible in the graph.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj5: {
  title: `Finding Roots — Factoring`,
  content: `When a polynomial can be [factored](!/algebra/polynomials/factoring) completely, its roots appear directly.

The polynomial $x^2 - 7x + 10$ factors as $(x - 2)(x - 5)$. Setting each factor equal to zero gives $x = 2$ and $x = 5$. The roots are read straight from the factored form with no additional work.

This approach works whenever factoring is feasible. The polynomial $x^3 - 4x$ factors as $x(x^2 - 4) = x(x - 2)(x + 2)$, revealing three roots: $0$, $2$, and $-2$. The key step — extracting a common factor first — exposed a difference of squares that factored further.

Factoring has limits. Not every polynomial factors neatly over the integers, and recognizing the correct technique requires practice. For polynomials that resist factoring, other methods — the quadratic formula, the rational root theorem, or synthetic division — take over. But when factoring works, it is the most direct path from a polynomial to its roots.`,
  before: ``,
  after: ``,
  link: '',
},


    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `Finding Roots — Quadratic Formula`,
  content: `For any quadratic polynomial $ax^2 + bx + c$ with $a \\neq 0$, the roots are given by:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

This formula works universally — it finds roots whether the quadratic factors cleanly or not. For $x^2 - 5x + 6$, applying the formula with $a = 1$, $b = -5$, $c = 6$ gives $x = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$, yielding $x = 3$ and $x = 2$.

The expression under the square root, $\\Delta = b^2 - 4ac$, is called the discriminant. It determines the nature of the roots without computing them. When $\\Delta > 0$, the quadratic has two distinct real roots. When $\\Delta = 0$, it has one repeated real root — the parabola touches the x-axis at exactly one point. When $\\Delta < 0$, no real roots exist; the two roots are [complex conjugates](!/complex-numbers/complex-conjugate) of the form $a + bi$ and $a - bi$.

The discriminant provides a quick classification. Before solving, computing $\\Delta$ reveals whether to expect two real answers, one repeated answer, or a pair of complex numbers. For $x^2 + 2x + 5$, the discriminant is $4 - 20 = -16 < 0$, so the roots are complex: $x = -1 \\pm 2i$.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj7: {
  title: `Finding Roots — Rational Root Theorem`,
  content: `When a polynomial has integer coefficients, the [Rational Root Theorem](!/algebra/polynomials/rules) narrows the search for rational roots to a finite list of candidates.

If $P(x) = a_nx^n + \\cdots + a_1x + a_0$ has a rational root $\\frac{p}{q}$ in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$. This constraint produces a manageable set of possibilities.

Consider $2x^3 - 3x^2 - 8x + 12$. The constant term is $12$ with divisors $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$. The leading coefficient is $2$ with divisors $\\pm 1, \\pm 2$. The possible rational roots are all fractions $\\frac{p}{q}$ formed from these: $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$.

Testing candidates by substitution identifies actual roots. For the polynomial above, $P(2) = 16 - 12 - 16 + 12 = 0$, confirming $x = 2$ as a root. Once a root is found, dividing out its factor reduces the degree, and the process can repeat on the quotient.

The theorem does not guarantee that rational roots exist — only that if they do, they appear on the list. A polynomial like $x^2 - 2$ has irrational roots ($\\pm\\sqrt{2}$), and no rational candidate will test to zero.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Finding Roots — Synthetic Division`,
  content: `[Synthetic division](!/algebra/polynomials/operations) provides an efficient method for testing root candidates and extracting factors simultaneously.

To test whether $x = 2$ is a root of $P(x) = x^3 - 6x^2 + 11x - 6$, set up synthetic division with $2$ and the coefficients $1, -6, 11, -6$. The process yields a remainder of $0$, confirming that $x = 2$ is a root, and produces the quotient $x^2 - 4x + 3$.

The quotient $x^2 - 4x + 3$ is a quadratic that factors as $(x - 1)(x - 3)$. Combined with the known root $x = 2$, the complete factorization is $(x - 2)(x - 1)(x - 3)$, and all three roots are found: $x = 1$, $x = 2$, and $x = 3$.

This strategy applies generally. Start with a polynomial of degree $n$, find one root (perhaps using the Rational Root Theorem), divide it out via synthetic division to obtain a polynomial of degree $n - 1$, and repeat. Each successful division lowers the degree by one. Eventually the quotient reaches degree $2$, where the quadratic formula finishes the job.

Synthetic division is faster than long division for divisors of the form $(x - r)$ and serves double duty — it tests a candidate and factors in a single pass.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj9: {
  title: `Real vs. Complex Roots`,
  content: `The roots of a polynomial fall into two categories: real roots, which lie on the number line, and complex roots, which involve the imaginary unit $i$.

A polynomial with real coefficients may have complex roots, but they always arrive in [conjugate pairs](!/complex-numbers/complex-conjugate). If $a + bi$ is a root (with $b \\neq 0$), then $a - bi$ is also a root. This pairing is not optional — it follows directly from the algebra of conjugates applied to the polynomial's coefficients.

The polynomial $x^2 + 2x + 5$ illustrates this. The discriminant is $4 - 20 = -16 < 0$, so the roots are complex. Applying the quadratic formula gives $x = -1 + 2i$ and $x = -1 - 2i$ — a conjugate pair. The real parts match, and the imaginary parts differ only in sign.

For higher-degree polynomials, real and complex roots can mix. The polynomial $x^3 - x^2 + x - 1$ factors as $(x - 1)(x^2 + 1)$, giving one real root $x = 1$ and two complex roots $x = i$ and $x = -i$. The degree is $3$, and there are three roots total — one real, two complex.

The conjugate pair rule means a polynomial with real coefficients and odd degree must have at least one real root. An odd number of roots cannot be filled entirely by pairs.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj10: {
  title: `Roots and Graphs`,
  content: `The real roots of a polynomial correspond to the x-intercepts of its [graph](!/algebra/polynomials/graphing) — the points where the curve meets the x-axis.

If $r$ is a real root of $P(x)$, the point $(r, 0)$ lies on the graph. The polynomial $x^2 - 4$ has roots at $x = 2$ and $x = -2$, so the graph crosses the x-axis at $(2, 0)$ and $(-2, 0)$.

Multiplicity determines how the graph behaves at each intercept. At a root with odd multiplicity, the graph crosses the x-axis — it passes from positive to negative or vice versa. At a root with even multiplicity, the graph touches the x-axis and turns back, staying on the same side. The polynomial $(x - 1)^2(x + 2)$ touches at $x = 1$ (multiplicity $2$) and crosses at $x = -2$ (multiplicity $1$).

Complex roots produce no x-intercept. The polynomial $x^2 + 1$ has no real roots and its graph — a parabola opening upward with vertex at $(0, 1)$ — never touches the x-axis. The two complex roots $x = i$ and $x = -i$ exist algebraically but leave no visible mark on the real-valued graph.

Counting x-intercepts and observing crossing versus touching behavior can reveal information about a polynomial's roots and their multiplicities directly from the graph.`,
  before: ``,
  after: ``,
  link: '',
},

    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj11: {
  title: `Sum and Product of Roots`,
  content: `Vieta's formulas express relationships between a polynomial's roots and its coefficients, bypassing the need to find the roots individually.

For a quadratic $x^2 + bx + c$ with roots $r_1$ and $r_2$:

$$r_1 + r_2 = -b \\qquad \\text{and} \\qquad r_1 \\cdot r_2 = c$$

The sum of the roots equals the negative of the coefficient of $x$, and the product equals the constant term. For $x^2 - 5x + 6$, the roots sum to $5$ and multiply to $6$ — confirmed by the actual roots $2$ and $3$.

These relationships extend to higher degrees. For a cubic $x^3 + bx^2 + cx + d$ with roots $r_1, r_2, r_3$:

$$r_1 + r_2 + r_3 = -b$$
$$r_1r_2 + r_1r_3 + r_2r_3 = c$$
$$r_1 \\cdot r_2 \\cdot r_3 = -d$$

The pattern generalizes to any degree $n$. The elementary symmetric polynomials of the roots correspond, with alternating signs, to the coefficients of the polynomial (assuming the leading coefficient is $1$).

Vieta's formulas are useful for checking answers — if claimed roots don't produce the correct sum or product, an error exists. They also solve problems that ask about root relationships without requiring the roots themselves. If a problem asks for $r_1^2 + r_2^2$, computing $(r_1 + r_2)^2 - 2r_1r_2$ uses only the sum and product, both available directly from the coefficients.`,
  before: ``,
  after: ``,
  link: '',
},


    // obj12:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj12: {
  title: `Common Mistakes`,
  content: `Several errors recur when working with polynomial roots.

Confusing roots with factors is the most basic. The root is the value $r$; the factor is $(x - r)$. If $r = 3$, the factor is $(x - 3)$, not $(x + 3)$. A sign error here reverses the root entirely.

Forgetting multiplicity leads to incorrect root counts. The polynomial $(x - 1)^3$ has degree $3$ but only one distinct root. Claiming it has three different roots misreads the structure. Degree $n$ guarantees $n$ roots counted with multiplicity, not $n$ distinct roots.

Overlooking the conjugate pair rule produces impossible root sets. If a polynomial has real coefficients and $2 + 3i$ is a root, then $2 - 3i$ must also be a root. Listing one without the other contradicts the structure of real-coefficient polynomials.

Sign errors in the quadratic formula are common, particularly with the $-b$ term. For $x^2 + 6x + 5$, the formula gives $x = \\frac{-6 \\pm \\sqrt{36 - 20}}{2}$, not $\\frac{6 \\pm \\sqrt{36 - 20}}{2}$. The leading negative sign applies to all of $b$, not just part of it.

Abandoning the Rational Root Theorem too early is another pitfall. Every candidate on the list must be tested before concluding that no rational roots exist. Missing one candidate can mean missing a root that would have unlocked the entire factorization.`,
  before: ``,
  after: ``,
  link: '',
},
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Where Polynomials Meet Zero",
  content: `The roots of a polynomial are the values that make it equal zero. These special inputs reveal the polynomial's structure, connect its algebraic and geometric properties, and stand at the center of solving polynomial equations. Finding roots is one of the most fundamental tasks in algebra.`
}

const faqQuestions = {
  obj1: {
    question: "What is a root of a polynomial?",
    answer: "A root (also called a zero) of a polynomial P(x) is a value r such that P(r) = 0. For example, x = 2 is a root of x² - 5x + 6 because substituting gives 4 - 10 + 6 = 0. Roots are the inputs that make the polynomial equal zero."
  },
  obj2: {
    question: "How are roots and factors of a polynomial related?",
    answer: "If r is a root of P(x), then (x - r) is a factor. Conversely, if (x - r) divides P(x) evenly, then r is a root. The polynomial x² - 5x + 6 factors as (x - 2)(x - 3), immediately revealing roots x = 2 and x = 3."
  },
  obj3: {
    question: "How many roots can a polynomial have?",
    answer: "A polynomial of degree n has at most n real roots. Over the complex numbers, it has exactly n roots when counted with multiplicity (Fundamental Theorem of Algebra). A degree-5 polynomial always has exactly five complex roots, though some may repeat or be non-real."
  },
  obj4: {
    question: "What is root multiplicity?",
    answer: "Multiplicity measures how many times a root appears as a factor. In (x - 2)³(x + 1), the root x = 2 has multiplicity 3 and x = -1 has multiplicity 1. Multiplicity affects the graph: odd multiplicity means crossing the x-axis, even multiplicity means touching and turning back."
  },
  obj5: {
    question: "How do you find roots of a polynomial by factoring?",
    answer: "Factor the polynomial completely, then set each factor equal to zero. For x² - 7x + 10 = (x - 2)(x - 5), setting x - 2 = 0 gives x = 2 and setting x - 5 = 0 gives x = 5. Factored form makes roots immediately visible."
  },
  obj6: {
    question: "What is the quadratic formula for finding roots?",
    answer: "For ax² + bx + c, the roots are x = (-b ± √(b² - 4ac)) / 2a. The discriminant Δ = b² - 4ac determines root types: Δ > 0 gives two distinct real roots, Δ = 0 gives one repeated root, Δ < 0 gives two complex conjugate roots."
  },
  obj7: {
    question: "What is the Rational Root Theorem?",
    answer: "For a polynomial with integer coefficients, any rational root p/q (in lowest terms) has p dividing the constant term and q dividing the leading coefficient. This generates a finite list of candidates to test, narrowing the search for rational roots."
  },
  obj8: {
    question: "How does synthetic division help find polynomial roots?",
    answer: "Synthetic division tests whether a value r is a root while simultaneously finding the quotient. If the remainder is 0, then r is a root and (x - r) is a factor. The quotient is a polynomial of degree one less, which can be factored further."
  },
  obj9: {
    question: "What are complex roots of a polynomial?",
    answer: "Complex roots involve the imaginary unit i. For polynomials with real coefficients, complex roots always come in conjugate pairs: if a + bi is a root, then a - bi is also a root. The polynomial x² + 1 has complex roots i and -i."
  },
  obj10: {
    question: "Why must complex roots come in conjugate pairs?",
    answer: "When a polynomial has real coefficients, complex conjugation applied to P(r) = 0 shows that the conjugate is also a root. This is why a polynomial with real coefficients and odd degree must have at least one real root — an odd number of roots cannot all be paired."
  },
  obj11: {
    question: "How do polynomial roots appear on the graph?",
    answer: "Real roots correspond to x-intercepts where the graph meets the x-axis. At roots with odd multiplicity, the graph crosses the axis. At roots with even multiplicity, the graph touches the axis and turns back. Complex roots produce no x-intercepts."
  },
  obj12: {
    question: "What are Vieta's formulas for polynomial roots?",
    answer: "Vieta's formulas relate roots to coefficients. For x² + bx + c with roots r₁ and r₂: r₁ + r₂ = -b and r₁·r₂ = c. These allow computing root relationships without finding the roots themselves and provide a check on computed answers."
  },
  obj13: {
    question: "What is the discriminant of a quadratic?",
    answer: "The discriminant Δ = b² - 4ac determines the nature of roots for ax² + bx + c. When Δ > 0: two distinct real roots. When Δ = 0: one repeated real root. When Δ < 0: two complex conjugate roots. It classifies roots without solving."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Roots of a Polynomial",
    "description": "Master polynomial roots: definition, roots-factors relationship, multiplicity, finding methods (factoring, quadratic formula, rational root theorem, synthetic division), complex roots, and Vieta's formulas.",
    "url": "https://www.learnmathclass.com/algebra/polynomials/roots",
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
      "name": "Polynomial Roots"
    },
    "teaches": [
      "Definition of polynomial roots and zeros",
      "Connection between roots and factors",
      "Root multiplicity and its geometric meaning",
      "Finding roots: factoring, quadratic formula, rational root theorem",
      "Synthetic division for root finding",
      "Real vs complex roots and conjugate pairs",
      "Vieta's formulas for sum and product of roots"
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
        "name": "Polynomials",
        "item": "https://www.learnmathclass.com/algebra/polynomials"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Roots",
        "item": "https://www.learnmathclass.com/algebra/polynomials/roots"
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


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Roots of a Polynomial | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/algebra/polynomials/roots",
  //        name: "name"
  //     },
        
  //      }
  //   }


  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Roots of a Polynomial: Find Zeros & Solve Equations | Learn Math Class",
      description: "Master polynomial roots: definition, roots-factors relationship, multiplicity, finding methods (factoring, quadratic formula, rational root theorem, synthetic division), complex roots, and Vieta's formulas.",
      keywords: keyWords.join(", "),
      url: "/algebra/polynomials/roots",
      name: "Roots of a Polynomial"
    },
  }
}
   }

// export default function RootsPage({seoData,sectionsContent , introContent}) {


export default function RootsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
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
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}

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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Roots of a Polynomial</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
