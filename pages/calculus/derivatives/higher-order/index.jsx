import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "higher order derivatives",
  "second derivative",
  "third derivative",
  "nth derivative",
  "f double prime",
  "concavity second derivative",
  "acceleration derivative",
  "jerk calculus",
  "derivative notation",
  "Leibniz notation higher derivatives",
  "Taylor series derivatives",
  "smoothness class C infinity",
  "repeated differentiation",
  "derivative patterns"
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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }

  const sectionsContent = {
  obj1: {
    title: `Definition and Notation`,
    content: `
The second derivative of $f$ is the derivative of $f'$:

$$f''(x) = \\frac{d}{dx}[f'(x)]$$

The third derivative is the derivative of $f''$, and so on. The $n$th derivative, denoted $f^{(n)}(x)$, is obtained by differentiating $f$ a total of $n$ times.

In Lagrange notation, the first few derivatives use primes: $f'$, $f''$, $f'''$. Beyond the third, parenthetical superscripts replace primes to avoid clutter: $f^{(4)}$, $f^{(5)}$, $f^{(n)}$. The parentheses distinguish the derivative order from an exponent—$f^{(4)}(x)$ is the fourth derivative, not $f$ raised to the fourth power.

In Leibniz notation, the $n$th derivative of $y$ with respect to $x$ is written

$$\\frac{d^n y}{dx^n}$$

The symbol $d^n y / dx^n$ is a single operator applied to $y$, not a fraction with $d^n y$ in the numerator and $dx^n$ in the denominator. For the second derivative specifically: $\\frac{d^2 y}{dx^2}$ reads "d-two-y, d-x-squared" and represents $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `The Second Derivative`,
    content: `
The second derivative $f''(x)$ measures the rate of change of the slope. Where $f''(x) > 0$, the slope $f'(x)$ is increasing—the function bends upward (concave up). Where $f''(x) < 0$, the slope is decreasing—the function bends downward (concave down).

This information is independent of whether $f$ itself is increasing or decreasing. A function can rise while decelerating ($f' > 0$, $f'' < 0$) or fall while accelerating in the negative direction ($f' < 0$, $f'' < 0$). The first and second derivatives describe different aspects of behavior.

The second derivative also powers the [second derivative test](!/calculus/derivatives/graph-analysis) for classifying critical points. At a point where $f'(c) = 0$: if $f''(c) > 0$, the critical point is a local minimum; if $f''(c) < 0$, a local maximum; if $f''(c) = 0$, the test is inconclusive.

Inflection points—where concavity reverses—occur where $f''$ changes sign. The condition $f''(c) = 0$ is necessary but not sufficient; the sign of $f''$ must actually switch across $c$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Physical Interpretation`,
    content: `
In kinematics, the first three derivatives of position $s(t)$ have standard names.

The first derivative $s'(t)$ is velocity: the rate of change of position. It tells how fast an object moves and in which direction.

The second derivative $s''(t)$ is acceleration: the rate of change of velocity. Positive acceleration means speeding up (in the positive direction) or decelerating (in the negative direction). The sign of acceleration relative to the sign of velocity determines whether the object is speeding up or slowing down.

The third derivative $s'''(t)$ is jerk: the rate of change of acceleration. Jerk is felt physically as a sudden push or lurch—smooth motion has low jerk, while abrupt starts and stops produce high jerk. Elevator design, roller coaster engineering, and vehicle ride comfort all involve controlling jerk.

Beyond the third derivative, the terms snap ($s^{(4)}$), crackle ($s^{(5)}$), and pop ($s^{(6)}$) are used in specialized engineering contexts but rarely appear in standard calculus.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Patterns in Repeated Differentiation — Polynomials`,
    content: `
Polynomials terminate under repeated differentiation. Each differentiation reduces the degree by one, so a polynomial of degree $n$ reaches a constant after $n$ differentiations and becomes zero after $n + 1$.

For $f(x) = x^5$:

$$f'(x) = 5x^4, \\quad f''(x) = 20x^3, \\quad f'''(x) = 60x^2, \\quad f^{(4)}(x) = 120x, \\quad f^{(5)}(x) = 120, \\quad f^{(6)}(x) = 0$$

The coefficient at the $n$th derivative of $x^n$ is $n! = n(n-1)(n-2) \\cdots 1$, accumulated from the [power rule](!/calculus/derivatives/rules) applied $n$ times. Specifically, $\\frac{d^n}{dx^n}[x^n] = n!$ and $\\frac{d^k}{dx^k}[x^n] = 0$ for all $k > n$.

For a general polynomial $p(x) = a_n x^n + \\cdots + a_1 x + a_0$, the $n$th derivative is $n! \\cdot a_n$, a constant. This relationship becomes central in Taylor series, where the coefficient $a_n$ is recovered as $\\frac{f^{(n)}(a)}{n!}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Patterns in Repeated Differentiation — Exponentials`,
    content: `
The natural exponential $e^x$ is unchanged by differentiation:

$$\\frac{d^n}{dx^n}[e^x] = e^x \\quad \\text{for all } n \\geq 1$$

Every derivative of $e^x$ is $e^x$. No other elementary function has this property (aside from the trivial $f(x) = 0$).

For the general exponential $e^{ax}$, the chain rule introduces a factor of $a$ at each step:

$$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$

Each differentiation multiplies by $a$. After $n$ differentiations, the accumulated constant is $a^n$. This pattern appears in solutions to differential equations, where $e^{ax}$ satisfies equations whose characteristic root is $a$.

For $a^x$ with arbitrary base: since $a^x = e^{x \\ln a}$, the $n$th derivative is $(\\ln a)^n \\cdot a^x$. The factor $\\ln a$ replaces $a$ in the exponential pattern.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Patterns in Repeated Differentiation — Sine and Cosine`,
    content: `
The derivatives of $\\sin x$ cycle with period four:

$$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cdots$$

The $n$th derivative of $\\sin x$ depends on $n \\mod 4$:

$$\\frac{d^n}{dx^n}[\\sin x] = \\begin{cases} \\sin x & n \\equiv 0 \\pmod{4} \\\\ \\cos x & n \\equiv 1 \\pmod{4} \\\\ -\\sin x & n \\equiv 2 \\pmod{4} \\\\ -\\cos x & n \\equiv 3 \\pmod{4} \\end{cases}$$

A compact formula captures all four cases: $\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right)$. The same holds for cosine: $\\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)$.

For $\\sin(ax)$, the chain rule introduces a factor of $a$ per differentiation: $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin\\left(ax + \\frac{n\\pi}{2}\\right)$. The cycle in the trigonometric part persists; only the amplitude grows as $a^n$.

This four-fold periodicity distinguishes [trigonometric derivatives](!/calculus/derivatives/common) from polynomial derivatives (which terminate) and exponential derivatives (which replicate).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `The nth Derivative of Specific Forms`,
    content: `
Several standard functions have known closed-form $n$th derivatives.

For $f(x) = \\frac{1}{x}$: rewriting as $x^{-1}$ and applying the power rule repeatedly gives

$$f^{(n)}(x) = \\frac{(-1)^n \\cdot n!}{x^{n+1}}$$

Each differentiation multiplies by one more negative integer, producing the factorial and the alternating sign.

For $f(x) = \\ln x$: since $f'(x) = x^{-1}$, the higher derivatives follow the pattern above shifted by one:

$$f^{(n)}(x) = \\frac{(-1)^{n-1} \\cdot (n-1)!}{x^n} \\qquad n \\geq 1$$

For $f(x) = x^m$ where $m$ is a positive integer and $n \\leq m$:

$$f^{(n)}(x) = \\frac{m!}{(m-n)!} \\cdot x^{m-n}$$

The coefficient $\\frac{m!}{(m-n)!}$ is the falling factorial, counting the multipliers accumulated over $n$ applications of the power rule.

These closed-form expressions are useful for computing specific high-order derivatives without performing each differentiation step individually.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Higher-Order Derivatives and Taylor Series`,
    content: `
The Taylor series of $f$ centered at $x = a$ is

$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n$$

Each coefficient depends on a higher-order derivative evaluated at the center point $a$. The zeroth derivative $f^{(0)}(a) = f(a)$ gives the constant term. The first derivative gives the linear term. The second derivative gives the quadratic correction. Each successive term captures finer detail about how $f$ deviates from the lower-order approximation.

The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation to $f$ near $a$. The quality of the approximation improves with $k$—more derivatives mean a closer fit over a wider interval.

The connection between higher-order derivatives and Taylor series gives these derivatives their deepest significance: the complete collection $\\{f^{(n)}(a)\\}_{n=0}^{\\infty}$ determines $f$ locally (for analytic functions). Knowing all derivatives at a single point reconstructs the entire function in a neighborhood of that point.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Existence and Smoothness Classes`,
    content: `
A function may be differentiable once but not twice. The function $f(x) = x|x|$ has $f'(x) = 2|x|$, which is continuous but not differentiable at $x = 0$. So $f$ is in class $C^1$ (continuously differentiable) but not $C^2$.

The smoothness classes organize functions by how many continuous derivatives they possess. A function belongs to $C^n$ if $f, f', f'', \\ldots, f^{(n)}$ all exist and are continuous. Class $C^0$ is simply continuous functions. Class $C^\\infty$ consists of infinitely differentiable functions—called smooth functions—where derivatives of all orders exist and are continuous.

Polynomials, $e^x$, $\\sin x$, $\\cos x$, and their compositions are all $C^\\infty$. [Piecewise functions](!/calculus/derivatives/special) typically belong to a finite $C^n$ class determined by how smoothly the pieces join at their boundaries: matching values gives $C^0$, matching first derivatives gives $C^1$, and so on.

There exist functions that are $C^\\infty$ but not analytic—their Taylor series converges but not to the function itself. The standard example is $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$: every derivative at $x = 0$ is zero, so the Taylor series is identically zero, yet the function is not zero away from the origin. Smooth does not automatically mean representable by a power series.
`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: `intro`,
  title: `Differentiating the Derivative`,
  content: `
The derivative $f'$ is a [function](!/calculus/derivatives/function) in its own right, and functions can be differentiated. Applying the differentiation process to $f'$ produces the second derivative $f''$, which measures how the slope of $f$ changes. Differentiating again yields $f'''$, then $f^{(4)}$, and so on without limit—provided the relevant limits exist at each stage.

Each successive derivative captures a finer layer of a function's behavior. The first derivative controls direction. The second controls [concavity](!/calculus/derivatives/graph-analysis). The third and beyond govern subtler aspects of curvature and, in physics, correspond to jerk, snap, and higher kinematic quantities. At the theoretical level, the entire collection of higher-order derivatives at a point encodes the local shape of a function through its Taylor series.
`
};



const faqQuestions = {
  obj1: {
    question: "What is the notation for higher order derivatives?",
    answer: "In Lagrange notation: f', f'', f''' for the first three, then f⁽⁴⁾, f⁽⁵⁾, f⁽ⁿ⁾ with parentheses to distinguish from exponents. In Leibniz notation: dⁿy/dxⁿ. The second derivative d²y/dx² means differentiating dy/dx with respect to x.",
    sectionId: "1"
  },
  obj2: {
    question: "What does the second derivative tell you?",
    answer: "The second derivative f''(x) measures the rate of change of slope. Where f'' > 0, the function is concave up (bending upward). Where f'' < 0, it's concave down. At critical points, f'' > 0 indicates a local minimum, f'' < 0 a local maximum.",
    sectionId: "2"
  },
  obj3: {
    question: "What are velocity, acceleration, and jerk?",
    answer: "For position s(t): velocity s'(t) is the first derivative (rate of position change), acceleration s''(t) is the second derivative (rate of velocity change), and jerk s'''(t) is the third derivative (rate of acceleration change, felt as sudden pushes or lurches).",
    sectionId: "3"
  },
  obj4: {
    question: "What happens when you differentiate a polynomial repeatedly?",
    answer: "Each differentiation reduces the degree by one. A degree-n polynomial becomes constant after n differentiations and zero after n+1. The nth derivative of xⁿ is n! (n factorial). This termination property distinguishes polynomials from transcendental functions.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the nth derivative of e^x?",
    answer: "The nth derivative of eˣ is eˣ for all n ≥ 1—it's unchanged by differentiation. For e^(ax), each differentiation multiplies by a, so the nth derivative is aⁿe^(ax). No other elementary function (except zero) has this self-replicating property.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the pattern for derivatives of sine and cosine?",
    answer: "Derivatives of sin x cycle with period 4: sin x → cos x → −sin x → −cos x → sin x. The nth derivative is sin(x + nπ/2). Same for cosine: cos(x + nπ/2). For sin(ax), the pattern becomes aⁿsin(ax + nπ/2).",
    sectionId: "6"
  },
  obj7: {
    question: "What is the nth derivative of 1/x and ln x?",
    answer: "For 1/x: the nth derivative is (−1)ⁿ·n!/x^(n+1). For ln x: the nth derivative (n ≥ 1) is (−1)^(n−1)·(n−1)!/xⁿ. These closed-form expressions allow computing high-order derivatives without repeated differentiation.",
    sectionId: "7"
  },
  obj8: {
    question: "How do higher derivatives connect to Taylor series?",
    answer: "The Taylor series f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ uses all higher derivatives at the center point a. Each coefficient f⁽ⁿ⁾(a)/n! controls one term. For analytic functions, knowing all derivatives at one point reconstructs the entire function nearby.",
    sectionId: "8"
  },
  obj9: {
    question: "What are smoothness classes like C¹ and C∞?",
    answer: "A function is Cⁿ if its first n derivatives exist and are continuous. C⁰ means continuous, C¹ means continuously differentiable, C∞ means infinitely differentiable (smooth). Polynomials, eˣ, sin x, cos x are C∞. Some C∞ functions are not analytic—their Taylor series doesn't converge to the function.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Higher Order Derivatives",
    "description": "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/higher-order",
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
      "name": "Higher Order Derivatives"
    },
    "teaches": [
      "Definition and notation for higher derivatives",
      "Second derivative and concavity",
      "Physical interpretation: velocity, acceleration, jerk",
      "Derivative patterns for standard functions",
      "Connection to Taylor series",
      "Smoothness classes C⁰ through C∞"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Higher Order Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/higher-order"
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
  //       title: "Higher Order Derivatives | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/higher-order",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Higher Order Derivatives: Second, Third & nth | Learn Math Class",
      description: "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/higher-order",
      name: "Higher Order Derivatives"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   {/* <Head>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Higher Order Derivatives</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
