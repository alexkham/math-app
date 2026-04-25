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
  "quadratic equations",
  "solving quadratic equations",
  "quadratic formula",
  "ax² + bx + c = 0",
  "discriminant",
  "completing the square",
  "factoring quadratics",
  "Vieta's formulas",
  "quadratic roots",
  "zero product property",
  "second degree equations",
  "bi-quadratic equations",
  "parabola x-intercepts",
  "double root"
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
 
- [Standard Form](!/algebra/definitions#standard_form) — $ax^2 + bx + c = 0$ with $a \\neq 0$
- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — quadratic equations have degree $2$
- [Coefficient](!/algebra/definitions#coefficient) — the values $a$, $b$, $c$ that determine the equation's behavior
 
## Solutions
 
- [Discriminant](!/algebra/definitions#discriminant) — $\\Delta = b^2 - 4ac$, determines the number and type of solutions
- [Solution Set](!/algebra/definitions#solution_set) — may contain two, one, or zero real values
- [Extraneous Solution](!/algebra/definitions#extraneous_solution) — may arise from non-reversible steps during solving`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Standard Form`,
    content: `A quadratic equation in one variable is any equation that can be written as

$$ax^2 + bx + c = 0$$

where $a$, $b$, and $c$ are real constants and $a \\neq 0$. The requirement $a \\neq 0$ is what makes the equation genuinely quadratic — if $a$ were zero, the $x^2$ term would vanish and the equation would reduce to a [linear equation](!/algebra/equations/linear).

The word "quadratic" derives from the Latin word for square, reflecting the presence of $x^2$ as the highest-degree term. The coefficient $a$ is the leading coefficient, $b$ is the linear coefficient, and $c$ is the constant term. Every quadratic equation can be brought into standard form by rearranging: moving all terms to one side and ordering by descending powers of $x$.

The equation $x^2 = 5x - 6$, for instance, is not in standard form but is still quadratic. Subtracting $5x$ and adding $6$ to both sides yields $x^2 - 5x + 6 = 0$, with $a = 1$, $b = -5$, and $c = 6$. Recognition is the first step — any equation reducible to the form above, regardless of how it is initially presented, is quadratic and amenable to the methods on this page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solving by Factoring`,
    content: `When the quadratic expression $ax^2 + bx + c$ can be decomposed into a product of two first-degree factors, the equation reduces to a pair of [linear equations](!/algebra/equations/linear) through the zero-product property: if a product of two factors equals zero, at least one of the factors must be zero.

Consider $x^2 - 5x + 6 = 0$. The left side factors as $(x - 2)(x - 3) = 0$. Setting each factor equal to zero gives $x - 2 = 0$ or $x - 3 = 0$, so $x = 2$ or $x = 3$. Both values satisfy the original equation.

When the leading coefficient is not $1$, factoring requires more care. The equation $6x^2 + x - 2 = 0$ factors as $(2x - 1)(3x + 2) = 0$, giving $x = \\frac{1}{2}$ or $x = -\\frac{2}{3}$. Finding these factors involves searching for two binomials whose product reconstructs the original trinomial — a process that amounts to finding two numbers whose product is $ac$ and whose sum is $b$.

Factoring is efficient when it works, but it has a fundamental limitation: not every quadratic with rational coefficients factors into binomials with rational entries. The equation $x^2 - 2 = 0$ has solutions $x = \\pm\\sqrt{2}$, which are irrational, so no factorization over the rationals exists. A method that handles every quadratic without exception requires a different approach.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving by Completing the Square`,
    content: `Completing the square transforms any quadratic equation into a form where the solution can be extracted by taking a square root. The method works unconditionally — it does not depend on whether the quadratic factors neatly.

Starting from $ax^2 + bx + c = 0$, divide every term by $a$ to obtain $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$. Move the constant to the right side:

$$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$

The left side is almost a perfect square trinomial. Adding $\\left(\\frac{b}{2a}\\right)^2$ to both sides completes it:

$$x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = \\frac{b^2}{4a^2} - \\frac{c}{a}$$

The left side factors as a perfect square:

$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$

Taking the square root of both sides and isolating $x$ gives the two solutions. The expression under the square root, $b^2 - 4ac$, determines whether those solutions are real or complex.

As a concrete example, consider $x^2 + 6x + 2 = 0$. Move the constant: $x^2 + 6x = -2$. Half of $6$ is $3$, and $3^2 = 9$. Add $9$ to both sides: $x^2 + 6x + 9 = 7$. Factor: $(x + 3)^2 = 7$. Take roots: $x + 3 = \\pm\\sqrt{7}$. The solutions are $x = -3 + \\sqrt{7}$ and $x = -3 - \\sqrt{7}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Quadratic Formula`,
    content: `Applying the method of completing the square to the general equation $ax^2 + bx + c = 0$ — with letters in place of specific numbers — produces a universal formula:

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

This is the quadratic formula. It accepts any real coefficients $a$, $b$, $c$ (with $a \\neq 0$) and returns the solutions directly. The $\\pm$ symbol indicates that two values are generated: one using the positive square root and one using the negative.

For the equation $2x^2 - 3x - 5 = 0$, the coefficients are $a = 2$, $b = -3$, $c = -5$. Substituting:

$$x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4(2)(-5)}}{2(2)} = \\frac{3 \\pm \\sqrt{9 + 40}}{4} = \\frac{3 \\pm \\sqrt{49}}{4} = \\frac{3 \\pm 7}{4}$$

The two solutions are $x = \\frac{10}{4} = \\frac{5}{2}$ and $x = \\frac{-4}{4} = -1$.

The formula is not a separate technique from completing the square — it is the result of completing the square once, in general form, so that the work never needs repeating. Every specific application of completing the square arrives at the same place the formula reaches in a single substitution.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Discriminant`,
    content: `The expression $\\Delta = b^2 - 4ac$ appearing under the square root in the quadratic formula is called the discriminant. Its value determines the nature and number of solutions without requiring the full computation.

When $\\Delta > 0$, the square root is a positive real number, and the formula produces two distinct real solutions. The equation $x^2 - 5x + 3 = 0$ has $\\Delta = 25 - 12 = 13 > 0$, so two different real roots exist.

When $\\Delta = 0$, the square root vanishes, and the formula collapses to a single value $x = -\\frac{b}{2a}$. The quadratic has a repeated root — a double root — and the polynomial factors as $a(x - r)^2$ where $r = -\\frac{b}{2a}$. The equation $x^2 - 6x + 9 = 0$ has $\\Delta = 36 - 36 = 0$ and the single solution $x = 3$.

When $\\Delta < 0$, no real number has a negative square, so the square root does not produce a real value. Over the real numbers, the equation has no solutions. Over the [complex numbers](!/complex-numbers), the formula yields two conjugate roots $x = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$, where $i$ is the imaginary unit. The equation $x^2 + x + 1 = 0$ has $\\Delta = 1 - 4 = -3 < 0$ and the complex roots $x = \\frac{-1 \\pm i\\sqrt{3}}{2}$.

The discriminant is a diagnostic tool: it classifies the equation's solution structure from the coefficients alone.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Vieta's Formulas`,
    content: `The French mathematician François Viète established a direct relationship between the roots of a quadratic equation and its coefficients. For the equation $ax^2 + bx + c = 0$ with roots $x_1$ and $x_2$:

$$x_1 + x_2 = -\\frac{b}{a}$$

$$x_1 \\cdot x_2 = \\frac{c}{a}$$

These identities follow from factoring the quadratic as $a(x - x_1)(x - x_2) = 0$ and expanding: $a[x^2 - (x_1 + x_2)x + x_1 x_2] = 0$. Matching coefficients with $ax^2 + bx + c$ produces both formulas.

Vieta's formulas serve two purposes. First, they verify solutions: after solving $x^2 - 7x + 10 = 0$ and obtaining $x_1 = 2$, $x_2 = 5$, check that $2 + 5 = 7 = -\\frac{-7}{1}$ and $2 \\cdot 5 = 10 = \\frac{10}{1}$. Both match, confirming the answers.

Second, they construct equations from known roots. If a quadratic equation must have roots $x_1 = -3$ and $x_2 = 4$, then $x_1 + x_2 = 1$ and $x_1 \\cdot x_2 = -12$, so the equation is $x^2 - x - 12 = 0$ (taking $a = 1$). The roots determine the equation uniquely up to a constant multiple.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Reducible Equations`,
    content: `Certain equations of degree higher than two can be converted into quadratic equations through substitution. The key is recognizing that the equation's structure mirrors the quadratic pattern $au^2 + bu + c = 0$, with some expression playing the role of $u$.

The most common case is the bi-quadratic equation $ax^4 + bx^2 + c = 0$. Setting $u = x^2$ transforms it into $au^2 + bu + c = 0$, a standard quadratic in $u$. Solving for $u$ yields up to two values, and each positive value of $u$ produces two values of $x$ via $x = \\pm\\sqrt{u}$. A negative value of $u$ contributes no real solutions for $x$.

For example, $x^4 - 5x^2 + 4 = 0$ becomes $u^2 - 5u + 4 = 0$ with $u = x^2$. Factoring gives $(u - 1)(u - 4) = 0$, so $u = 1$ or $u = 4$. Back-substituting: $x^2 = 1$ gives $x = \\pm 1$, and $x^2 = 4$ gives $x = \\pm 2$. The original quartic has four real solutions.

The substitution pattern extends beyond powers of $x$. Any equation of the form $a[f(x)]^2 + b[f(x)] + c = 0$ is quadratic in $f(x)$. Setting $u = f(x)$ reduces it, and back-substitution after solving requires solving $f(x) = u_1$ and $f(x) = u_2$ separately. Extraneous solutions can arise during back-substitution, so every candidate must be checked in the original equation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Connection to Graphing`,
    content: `The solutions of $ax^2 + bx + c = 0$ correspond to the points where the parabola $y = ax^2 + bx + c$ meets the $x$-axis. At these points the output value is zero, which is precisely what the equation demands. The discriminant controls the geometry of this intersection.

When $\\Delta > 0$, the parabola crosses the $x$-axis at two distinct points, and the equation has two real solutions. The horizontal distance between these crossing points is $\\frac{\\sqrt{\\Delta}}{|a|}$, so a larger discriminant means the roots are farther apart.

When $\\Delta = 0$, the parabola is tangent to the $x$-axis — it touches at exactly one point and turns back. The vertex of the parabola sits on the axis, and the double root $x = -\\frac{b}{2a}$ is the $x$-coordinate of that vertex.

When $\\Delta < 0$, the parabola lies entirely above the $x$-axis (if $a > 0$) or entirely below it (if $a < 0$). It never reaches the axis, so no real intersection exists and the equation has no real solutions. The vertex is the closest the parabola comes to the axis, and the gap between them reflects how negative the discriminant is.

The sign of $a$ determines the parabola's orientation — opening upward when $a > 0$ and downward when $a < 0$ — but it does not affect the number of solutions. That role belongs exclusively to the discriminant.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
  id: 'intro',
  title: `Second-Degree Equations and the Threshold of Multiplicity`,
  content: `When the unknown is squared, equations acquire a new dimension of complexity. A quadratic equation can produce two solutions, one solution, or no real solutions at all — and a single quantity built from its coefficients determines which case applies before any solving begins. Three distinct methods handle the solving itself, each suited to different situations but all ultimately equivalent. Quadratic equations sit at the boundary between elementary algebra and the richer structure of polynomial equations, and the tools developed here — the discriminant, factoring, completing the square, and the quadratic formula — recur throughout mathematics.`,
};

const faqQuestions = {
  obj1: {
    question: "What is a quadratic equation?",
    answer: "A quadratic equation has the form ax² + bx + c = 0 where a ≠ 0. The variable appears to the second power as its highest degree. Every quadratic can be brought into standard form by rearranging terms.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve quadratic equations by factoring?",
    answer: "Factor the quadratic into two binomials: (px + q)(rx + s) = 0. By the zero-product property, set each factor to zero and solve the resulting linear equations. This works when the quadratic factors neatly over rationals.",
    sectionId: "2"
  },
  obj3: {
    question: "What is completing the square?",
    answer: "Completing the square transforms ax² + bx + c = 0 into (x + k)² = d form. Add (b/2a)² to both sides to create a perfect square trinomial, then take the square root. This method works universally for all quadratics.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the quadratic formula?",
    answer: "The quadratic formula x = (-b ± √(b²-4ac))/2a gives both solutions directly from the coefficients. It's derived from completing the square on the general equation and works for any quadratic regardless of factorability.",
    sectionId: "4"
  },
  obj5: {
    question: "What does the discriminant tell you?",
    answer: "The discriminant Δ = b² - 4ac determines the nature of solutions. If Δ > 0: two distinct real roots. If Δ = 0: one repeated (double) root. If Δ < 0: no real roots, but two complex conjugate roots.",
    sectionId: "5"
  },
  obj6: {
    question: "What are Vieta's formulas for quadratics?",
    answer: "For ax² + bx + c = 0 with roots x₁ and x₂: the sum x₁ + x₂ = -b/a and the product x₁·x₂ = c/a. These formulas verify solutions and construct equations from known roots.",
    sectionId: "6"
  },
  obj7: {
    question: "What are reducible equations?",
    answer: "Equations like ax⁴ + bx² + c = 0 (bi-quadratic) can be reduced to quadratics by substituting u = x². Solve for u, then back-substitute to find x = ±√u for each positive u value.",
    sectionId: "7"
  },
  obj8: {
    question: "How do quadratic equations relate to parabolas?",
    answer: "Solutions of ax² + bx + c = 0 are the x-intercepts of y = ax² + bx + c. The discriminant determines whether the parabola crosses the axis twice (Δ > 0), touches once (Δ = 0), or never touches (Δ < 0).",
    sectionId: "8"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Quadratic Equations",
    "description": "Complete guide to quadratic equations: standard form ax² + bx + c = 0, solving by factoring, completing the square, quadratic formula, discriminant analysis, Vieta's formulas, reducible equations, and parabola connections.",
    "url": "https://www.learnmathclass.com/algebra/equations/quadratic",
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
      "name": "Quadratic Equations"
    },
    "teaches": [
      "Standard form ax² + bx + c = 0",
      "Solving by factoring with zero-product property",
      "Completing the square method",
      "The quadratic formula",
      "Discriminant and solution classification",
      "Vieta's formulas for sum and product of roots",
      "Reducible bi-quadratic equations"
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
        "name": "Quadratic Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/quadratic"
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
      title: "Quadratic Equations: Formula, Discriminant & Methods | Learn Math Class",
      description: "Complete guide to quadratic equations: standard form ax² + bx + c = 0, solving by factoring, completing the square, quadratic formula, discriminant analysis, Vieta's formulas, reducible equations, and parabola connections.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/quadratic",
      name: "Quadratic Equations"
    },
  }
}
   }


export default function QuadraticEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
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
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Quadratic Equations</h1>
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
