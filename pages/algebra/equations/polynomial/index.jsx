import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  
const keyWords = [
  "polynomial equations",
  "solving polynomial equations",
  "fundamental theorem of algebra",
  "rational root theorem",
  "factor theorem",
  "cubic equations",
  "quartic equations",
  "Cardano's formula",
  "Abel-Ruffini theorem",
  "root multiplicity",
  "Vieta's formulas",
  "polynomial roots",
  "synthetic division",
  "degree of polynomial"
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
  obj0: {
  title: `Key Terms`,
  content: `
## Equation Structure
 
- [Algebraic Equation](!/algebra/definitions#algebraic_equation) — built from variables, constants, and integer powers
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — determines the maximum number of solutions
- [Standard Form](!/algebra/definitions#standard_form) — $a_nx^n + \\cdots + a_1x + a_0 = 0$
- [Coefficient](!/algebra/definitions#coefficient) — the leading coefficient $a_n$ must be nonzero
 
## Solutions
 
- [Solution](!/algebra/definitions#solution) — also called a root of the polynomial
- [Solution Set](!/algebra/definitions#solution_set) — at most $n$ roots in $\\mathbb{C}$ for degree $n$
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — polynomial division preserves equivalence when dividing by a confirmed factor`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Degree`,
    content: `A polynomial equation in one variable has the general form

$$a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$$

where $a_n \\neq 0$ and $n$ is a positive integer. The integer $n$ is the degree of the equation, and $a_n$ is the leading coefficient. The coefficients $a_0, a_1, \\dots, a_n$ are typically real numbers, though the theory extends naturally to complex coefficients.

[Linear equations](!/algebra/equations/linear) correspond to $n = 1$ and [quadratic equations](!/algebra/equations/quadratic) to $n = 2$. Both have complete, closed-form solutions and are treated on their own pages. This page addresses degree three and above, where new phenomena emerge: more roots, more intricate factorizations, and eventually the impossibility of a universal solving formula.

The degree governs the maximum number of roots. A polynomial of degree $n$ has at most $n$ real roots, and when counted with multiplicity over the complex numbers, it has exactly $n$ roots. A cubic may have one or three real roots, a quartic may have zero, two, or four, and the possible counts depend on the specific coefficients involved.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Fundamental Theorem of Algebra`,
    content: `The Fundamental Theorem of Algebra states that every polynomial of degree $n \\geq 1$ with complex coefficients has at least one root in $\\mathbb{C}$. Repeated application of this fact yields a stronger conclusion: every such polynomial has exactly $n$ roots in $\\mathbb{C}$ when counted with multiplicity.

The consequence for factoring is immediate. A degree-$n$ polynomial $P(x)$ with leading coefficient $a_n$ decomposes completely as

$$P(x) = a_n(x - r_1)(x - r_2) \\cdots (x - r_n)$$

where $r_1, r_2, \\dots, r_n$ are the $n$ roots (not necessarily distinct). Over the complex numbers, every polynomial splits into linear factors. No irreducible quadratic or higher-degree factors remain.

Over the real numbers, the picture is slightly different. Complex roots of a polynomial with real coefficients always appear in conjugate pairs: if $r = a + bi$ is a root, then $\\overline{r} = a - bi$ is also a root. Each conjugate pair combines into a quadratic factor $x^2 - 2ax + (a^2 + b^2)$ with real coefficients and negative discriminant. A real polynomial therefore factors into a product of linear factors (from real roots) and irreducible quadratic factors (from conjugate pairs).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Factor Theorem and Remainder Theorem`,
    content: `The Remainder Theorem connects evaluation and division: when a polynomial $P(x)$ is divided by the binomial $(x - r)$, the remainder equals $P(r)$. In symbols, $P(x) = (x - r)Q(x) + P(r)$, where $Q(x)$ is the quotient polynomial of degree one less than $P(x)$.

The Factor Theorem is the special case where $P(r) = 0$. If substituting $r$ into $P(x)$ yields zero, then the remainder is zero, which means $(x - r)$ divides $P(x)$ evenly. Conversely, if $(x - r)$ is a factor, then $P(r) = 0$. Finding roots and finding factors are two expressions of the same problem.

This connection creates a degree-reduction strategy. Once a root $r$ is identified — by inspection, by the rational root theorem, or by other means — dividing $P(x)$ by $(x - r)$ produces a quotient $Q(x)$ of degree $n - 1$. The roots of $Q(x)$ are the remaining roots of $P(x)$. Repeating the process reduces the degree one step at a time until the quotient is quadratic, at which point the quadratic formula finishes the job.

[Polynomial division](!/algebra/polynomials/operations) can be carried out using long division or synthetic division. Synthetic division is faster but limited to divisors of the form $(x - r)$, which is exactly the form needed when factoring out a known root.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Rational Root Theorem`,
    content: `The Rational Root Theorem narrows the search for rational roots of a polynomial with integer coefficients. It states: if $\\frac{p}{q}$ is a rational root in lowest terms, then $p$ divides the constant term $a_0$ and $q$ divides the leading coefficient $a_n$.

This produces a finite, testable list of candidates. For the polynomial $2x^3 - 3x^2 - 8x + 12 = 0$, the constant term is $12$ and the leading coefficient is $2$. The divisors of $12$ are $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12$, and the divisors of $2$ are $\\pm 1, \\pm 2$. The candidate rational roots are all fractions $\\frac{p}{q}$ formed from these:

$$\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$$

Testing $x = 2$: $P(2) = 2(8) - 3(4) - 8(2) + 12 = 16 - 12 - 16 + 12 = 0$. So $x = 2$ is a root, $(x - 2)$ is a factor, and dividing reduces the cubic to a quadratic $2x^2 + x - 6 = 0$, which the quadratic formula or further factoring can handle.

The theorem guarantees nothing about irrational or complex roots. A polynomial like $x^3 - 2 = 0$ has no rational roots at all — its only real root is $\\sqrt[3]{2}$. The rational root theorem is a sieve, not a guarantee, and when every candidate fails, other methods are needed.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Solving Cubic Equations`,
    content: `A cubic equation $ax^3 + bx^2 + cx + d = 0$ can be transformed into a reduced (depressed) cubic by eliminating the $x^2$ term. The substitution $x = t - \\frac{b}{3a}$ produces an equation of the form

$$t^3 + pt + q = 0$$

where $p$ and $q$ depend on the original coefficients. This depressed form is the starting point for Cardano's formula, which expresses the roots through cube roots and square roots of expressions involving $p$ and $q$.

Cardano's formula yields all three roots, but its practical use is limited. The expressions under the radicals often involve nested roots that are difficult to simplify. Worse, when all three roots are real — the so-called casus irreducibilis — the formula necessarily passes through complex intermediate values to reach real answers. The formula is correct but computationally awkward.

The practical approach to most cubics encountered in coursework begins with the rational root theorem. If a rational root exists, polynomial division reduces the cubic to a quadratic, and the remaining roots follow from the quadratic formula. When no rational root exists, numerical methods such as Newton's method or graphical estimation provide the real roots to any required precision.

Every cubic with real coefficients has at least one real root. This is a consequence of the intermediate value theorem: a real cubic changes sign as $x$ ranges from $-\\infty$ to $+\\infty$, so it must cross zero somewhere.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Solving Quartic Equations`,
    content: `A quartic equation $ax^4 + bx^3 + cx^2 + dx + e = 0$ is the highest degree for which a general closed-form solution in radicals exists. Ferrari's method, developed in the sixteenth century, reduces the quartic to a resolvent cubic. Solving the cubic provides a key quantity that splits the quartic into two quadratics, each solvable by the quadratic formula.

The procedure works in full generality, but the algebra is heavy. Even for modest numerical examples, the resolvent cubic and the subsequent quadratic splitting produce expressions that are lengthy to simplify by hand. For this reason, Ferrari's method is more important as a theoretical milestone than as a practical tool.

In practice, quartic equations that appear in coursework are usually structured to admit simpler approaches. Bi-quadratic equations $ax^4 + bx^2 + c = 0$ reduce directly to quadratics via the substitution $u = x^2$. Quartics with a rational root are handled by the rational root theorem and degree reduction. Quartics that factor into two quadratics — recognizable by grouping or by inspection — split without invoking the full Ferrari machinery.

A quartic with real coefficients can have zero, two, or four real roots. Unlike cubics, a quartic is not guaranteed to have any real roots at all.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Degree Five and Beyond`,
    content: `The Abel–Ruffini theorem, proved in the early nineteenth century, establishes that no formula composed of arithmetic operations and radicals can solve every polynomial equation of degree five or higher. This does not mean that specific quintic equations are unsolvable — many factor, many have rational roots, and many yield to substitution. It means that no single formula analogous to the quadratic formula exists that accepts five arbitrary coefficients and returns the roots.

The impossibility is not a matter of insufficient ingenuity. Galois theory provides the precise criterion: a polynomial equation is solvable by radicals if and only if its Galois group is a solvable group. The symmetric group $S_n$ is solvable for $n \\leq 4$ and not solvable for $n \\geq 5$, which is why degree four is the last degree admitting a universal radical formula.

For equations of any degree, the practical toolkit consists of the rational root theorem (to find and factor out rational roots), synthetic division (to reduce the degree step by step), and the quadratic formula (to handle the final quadratic quotient). When these algebraic tools run out — when no rational roots exist and no convenient factorization appears — numerical methods step in. Newton's method, the bisection method, and related algorithms approximate real roots to arbitrary precision, and these are the techniques actually used in computation for large-degree polynomials.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Root Multiplicity`,
    content: `A root $r$ of the polynomial $P(x)$ has multiplicity $k$ if $(x - r)^k$ divides $P(x)$ but $(x - r)^{k+1}$ does not. A root of multiplicity $1$ is called a simple root, multiplicity $2$ a double root, multiplicity $3$ a triple root, and so on.

The sum of all multiplicities across all roots equals the degree of the polynomial. The equation $x^3 - 3x^2 + 3x - 1 = 0$ factors as $(x - 1)^3 = 0$, so $x = 1$ is a triple root and the three roots (counted with multiplicity) are all equal to $1$.

Multiplicity has both algebraic and geometric significance. Algebraically, it affects how the root behaves under perturbation: a simple root of $P(x) = 0$ moves smoothly when the coefficients change slightly, while a multiple root tends to split into several nearby roots. Geometrically, multiplicity determines how the graph of $y = P(x)$ interacts with the $x$-axis at the root. At a simple root, the graph crosses the axis cleanly. At a double root, the graph touches the axis and turns back without crossing — the root is a local extremum. At a triple root, the graph crosses the axis but flattens as it does so, producing an inflection point on the axis.

The general pattern is: odd multiplicity means the graph crosses the axis, even multiplicity means it touches and reverses direction. Higher multiplicity in either case means greater flattening at the crossing or touching point.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Relationships Between Roots and Coefficients`,
    content: `Vieta's formulas, introduced for the quadratic case on the [quadratic equations](!/algebra/equations/quadratic) page, extend to polynomials of any degree. For the monic polynomial $x^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0 = 0$ with roots $r_1, r_2, \\dots, r_n$, the coefficients encode symmetric combinations of the roots:

$$r_1 + r_2 + \\cdots + r_n = -a_{n-1}$$

$$r_1 r_2 + r_1 r_3 + \\cdots + r_{n-1}r_n = a_{n-2}$$

$$r_1 r_2 r_3 + \\cdots = -a_{n-3}$$

continuing with alternating signs down to

$$r_1 \\cdot r_2 \\cdots r_n = (-1)^n a_0$$

Each formula equates a coefficient to an elementary symmetric polynomial in the roots. The first gives the sum of all roots, the second the sum of all pairwise products, the third the sum of all triple products, and the last the product of all roots.

These relationships hold whether the roots are real or complex, rational or irrational. They allow certain questions about the roots to be answered without solving: the sum and product of the roots are readable directly from the coefficients. For a non-monic polynomial $a_n x^n + \\cdots + a_0 = 0$, dividing through by $a_n$ first converts it to monic form, or equivalently, each formula acquires $a_n$ in its denominator.`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: 'intro',
  title: `Higher-Degree Equations and the Limits of Exact Solutions`,
  content: `Beyond degree two, polynomial equations grow rapidly in complexity. A cubic can have three real roots, a quartic four, and the pattern continues — the degree sets the ceiling on the number of solutions. Closed-form solutions exist for cubics and quartics, but they are unwieldy, and at degree five a hard theoretical barrier appears: no general formula in radicals can solve every polynomial equation of degree five or higher. What remains universal is the Fundamental Theorem of Algebra, which guarantees that the roots exist even when no formula can produce them, and a collection of techniques — the factor theorem, the rational root theorem, synthetic division — that reduce the problem piece by piece.`,
};



const faqQuestions = {
  obj1: {
    question: "What is a polynomial equation?",
    answer: "A polynomial equation has the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ = 0 where aₙ ≠ 0. The degree n determines the maximum number of roots. Linear (n=1) and quadratic (n=2) are special cases with complete solution formulas.",
    sectionId: "1"
  },
  obj2: {
    question: "What does the Fundamental Theorem of Algebra say?",
    answer: "Every polynomial of degree n ≥ 1 with complex coefficients has exactly n roots in ℂ (counted with multiplicity). This means every polynomial factors completely into linear factors over the complex numbers.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the Factor Theorem?",
    answer: "If P(r) = 0, then (x - r) divides P(x) evenly. Finding roots and finding factors are equivalent. Once a root r is found, divide by (x - r) to reduce the degree by one and continue solving.",
    sectionId: "3"
  },
  obj4: {
    question: "How does the Rational Root Theorem work?",
    answer: "For a polynomial with integer coefficients, any rational root p/q in lowest terms has p dividing the constant term and q dividing the leading coefficient. This creates a finite list of candidates to test.",
    sectionId: "4"
  },
  obj5: {
    question: "Can cubic equations be solved exactly?",
    answer: "Yes, Cardano's formula provides exact solutions using radicals. However, the formula is complex and may require passing through complex numbers even when all roots are real. The rational root theorem often provides a simpler approach.",
    sectionId: "5"
  },
  obj6: {
    question: "Can quartic equations be solved exactly?",
    answer: "Yes, Ferrari's method reduces a quartic to a resolvent cubic, then to two quadratics. This is the highest degree with a general formula in radicals. In practice, special structures (bi-quadratic, factorable) often allow simpler methods.",
    sectionId: "6"
  },
  obj7: {
    question: "Why can't degree 5+ equations be solved by radicals?",
    answer: "The Abel-Ruffini theorem proves no formula using arithmetic and radicals can solve every polynomial of degree 5 or higher. Specific quintics may still factor or have rational roots, but no universal formula exists.",
    sectionId: "7"
  },
  obj8: {
    question: "What is root multiplicity?",
    answer: "A root r has multiplicity k if (x-r)^k divides P(x) but (x-r)^(k+1) does not. Odd multiplicity means the graph crosses the x-axis; even multiplicity means it touches and turns back. Higher multiplicity means greater flattening.",
    sectionId: "8"
  },
  obj9: {
    question: "What are Vieta's formulas for polynomials?",
    answer: "Vieta's formulas express coefficients as symmetric functions of roots: the sum of roots equals -aₙ₋₁/aₙ, the sum of pairwise products equals aₙ₋₂/aₙ, and so on. The product of all roots equals (-1)ⁿa₀/aₙ.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Polynomial Equations",
    "description": "Master polynomial equations: Fundamental Theorem of Algebra, Factor and Rational Root Theorems, solving cubics and quartics, Abel-Ruffini impossibility for degree 5+, root multiplicity, and Vieta's formulas.",
    "url": "https://www.learnmathclass.com/algebra/equations/polynomial",
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
      "name": "Polynomial Equations"
    },
    "teaches": [
      "Polynomial degree and root count",
      "Fundamental Theorem of Algebra",
      "Factor Theorem and Remainder Theorem",
      "Rational Root Theorem",
      "Solving cubic and quartic equations",
      "Abel-Ruffini impossibility theorem",
      "Root multiplicity and graph behavior"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Polynomial Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/polynomial"
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
      title: "Polynomial Equations: Roots, Theorems & Methods | Learn Math Class",
      description: "Master polynomial equations: Fundamental Theorem of Algebra, Factor and Rational Root Theorems, solving cubics and quartics, Abel-Ruffini impossibility for degree 5+, root multiplicity, and Vieta's formulas.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/polynomial",
      name: "Polynomial Equations"
    },
  }
}
   }
export default function PolynomialEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Polynomial Equations</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
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
