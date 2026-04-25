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
  "differentials calculus",
  "differential dx dy",
  "linear approximation",
  "linearization calculus",
  "dy vs delta y",
  "error propagation calculus",
  "differential notation",
  "tangent line approximation",
  "Leibniz notation differentials",
  "total differential",
  "error estimation derivative",
  "differential of a function",
  "relative error calculus",
  "approximation using derivatives"
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
    title: `The Differential dx`,
    content: `
The differential $dx$ is an independent variable. It represents a change in $x$—an increment away from a given value. Unlike the $h$ or $\\Delta x$ in the limit definition, $dx$ is not required to approach zero. It is a finite quantity that can be positive, negative, or zero.

There is no formula for $dx$—it is chosen freely. Choosing $dx = 0.1$ means considering what happens when $x$ shifts by $0.1$. Choosing $dx = -2$ means shifting $x$ by $-2$. The differential $dx$ sets the scale for the approximation that follows.

The notation is consistent with Leibniz notation for the derivative. When $dy/dx$ is treated as a ratio of differentials rather than a limit symbol, the algebraic manipulations that make Leibniz notation powerful—cancellation in the chain rule, separation in differential equations—become formally valid rather than merely suggestive.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `The Differential dy`,
    content: `
Given $y = f(x)$ where $f$ is [differentiable](!/calculus/derivatives/differentiability), the differential of $y$ is defined as

$$dy = f'(x) \\cdot dx$$

The differential $dy$ depends on two things: the point $x$ (which determines the slope $f'(x)$) and the increment $dx$ (which determines the scale). For fixed $x$, $dy$ is a linear function of $dx$—doubling $dx$ doubles $dy$.

Geometrically, $dy$ is the vertical change along the tangent line at $x$ when the horizontal position shifts by $dx$. The tangent line rises (or falls) at rate $f'(x)$, so a horizontal shift of $dx$ produces a vertical shift of $f'(x) \\cdot dx$.

For a linear function $f(x) = mx + b$, the differential $dy = m \\cdot dx$ equals the actual change in $f$ exactly, because the tangent line to a linear function is the function itself. For nonlinear functions, $dy$ is an approximation—exact in the limit as $dx \\to 0$, and increasingly approximate as $dx$ grows.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `dy Versus Δy`,
    content: `
Two quantities measure the change in $y$ when $x$ changes by $dx$:

$$\\Delta y = f(x + dx) - f(x) \\qquad \\text{(actual change)}$$

$$dy = f'(x) \\cdot dx \\qquad \\text{(tangent line estimate)}$$

The actual change $\\Delta y$ follows the curve. The differential $dy$ follows the tangent line. The difference $\\Delta y - dy$ is the error introduced by the linear approximation.

For small $dx$, the error $\\Delta y - dy$ is much smaller than $dx$ itself. Precisely, $\\lim_{dx \\to 0} \\frac{\\Delta y - dy}{dx} = 0$—the error shrinks faster than the increment. This is what makes the tangent line a good approximation near the point of tangency.

For larger $dx$, the gap between $\\Delta y$ and $dy$ widens. The tangent line is a local tool: reliable near $x$, increasingly unreliable far from it. The curvature of $f$—governed by the [second derivative](!/calculus/derivatives/higher-order)—determines how quickly the approximation deteriorates.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Linear Approximation`,
    content: `
The differential formula rearranges into an approximation for function values:

$$f(x + dx) \\approx f(x) + f'(x) \\cdot dx$$

This is the linearization of $f$ at $x$. Given a known value $f(x)$ and the slope $f'(x)$, the tangent line estimates $f$ at nearby points.

To approximate $\\sqrt{4.03}$: take $f(x) = \\sqrt{x}$, $x = 4$, $dx = 0.03$. Then $f(4) = 2$ and $f'(x) = \\frac{1}{2\\sqrt{x}}$, so $f'(4) = \\frac{1}{4}$. The estimate is $2 + \\frac{1}{4}(0.03) = 2.0075$. The actual value is $\\sqrt{4.03} \\approx 2.00749...$—the approximation is accurate to five decimal places.

The linearization can also be written as $L(x) = f(a) + f'(a)(x - a)$, the tangent line at $x = a$ used as a function. For $x$ near $a$, $L(x) \\approx f(x)$. The quality of the approximation depends on two factors: the size of $|x - a|$ and the magnitude of $f''$ near $a$, which controls how quickly the curve diverges from its tangent.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Error Estimation`,
    content: `
If a quantity $x$ is measured with error $dx$, the computed value $f(x)$ inherits an error approximately equal to the differential:

$$\\text{absolute error in } f \\approx |dy| = |f'(x)| \\cdot |dx|$$

The derivative acts as an error amplification factor. Where $|f'(x)|$ is large, small measurement errors in $x$ produce large errors in $f(x)$. Where $|f'(x)|$ is small, errors are suppressed.

The relative error normalizes by the function value:

$$\\frac{|dy|}{|f(x)|} = \\frac{|f'(x)|}{|f(x)|} \\cdot |dx|$$

The ratio $\\frac{f'(x)}{f(x)} = \\frac{d}{dx}[\\ln|f(x)|]$ is the logarithmic derivative. Relative error in the output equals the logarithmic derivative times the absolute error in the input.

For $f(x) = x^n$: $\\frac{f'(x)}{f(x)} = \\frac{n}{x}$, so the relative error in $x^n$ is $n$ times the relative error in $x$. Squaring a measurement doubles its relative error. Cubing triples it. This scaling rule is a standard tool in experimental science for propagating uncertainties through power-law relationships.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Differentials of Multiple Variables`,
    content: `
When a formula involves several measured quantities, each contributes to the total error. If $z = f(x, y)$, the total differential is

$$dz = \\frac{\\partial f}{\\partial x}\\,dx + \\frac{\\partial f}{\\partial y}\\,dy$$

Each partial derivative weights the contribution of the corresponding variable's error. The total differential estimates how $z$ responds to simultaneous small changes in all inputs.

For the area of a rectangle $A = lw$: $dA = w\\,dl + l\\,dw$. If $l = 10 \\pm 0.1$ and $w = 5 \\pm 0.05$, then $dA = 5(0.1) + 10(0.05) = 1.0$. The area is approximately $50 \\pm 1.0$.

For the volume of a cylinder $V = \\pi r^2 h$: $dV = 2\\pi r h\\,dr + \\pi r^2\\,dh$. The radius error is amplified by $2\\pi r h$ and the height error by $\\pi r^2$. Since $r$ enters as a square, its error contributes more heavily—consistent with the power-law scaling of relative error.

This extension uses partial derivatives, which generalize the single-variable derivative to functions of several variables. The total differential remains a linear approximation, now in multiple dimensions.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Differentials and Leibniz Notation`,
    content: `
Differentials retroactively justify the algebraic behavior of Leibniz notation.

The chain rule states $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$. In differential form: $dy = \\frac{dy}{du}\\,du$ and $du = \\frac{du}{dx}\\,dx$. Substituting the second into the first gives $dy = \\frac{dy}{du} \\cdot \\frac{du}{dx}\\,dx$, which is $dy = \\frac{dy}{dx}\\,dx$. The intermediate variable $du$ cancels as though these were fractions—and with differentials, they are.

Integration notation $\\int f(x)\\,dx$ also uses the differential $dx$ meaningfully. The substitution rule $u = g(x)$, $du = g'(x)\\,dx$ replaces $dx$ with an expression involving $du$—a literal change of variable in the differential. The notation is not merely symbolic; it reflects the algebraic structure of differentials.

Separation of variables in differential equations—writing $\\frac{dy}{dx} = g(x)h(y)$ as $\\frac{dy}{h(y)} = g(x)\\,dx$ and integrating both sides—depends on treating $dy$ and $dx$ as independent objects that can be rearranged. Differentials make this manipulation rigorous rather than heuristic.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Higher-Order Differentials`,
    content: `
If $dx$ is held constant (treated as a fixed increment), the second differential of $y$ is

$$d^2 y = f''(x) \\cdot (dx)^2$$

The notation $d^2 y / dx^2$ for the [second derivative](!/calculus/derivatives/higher-order) arises from dividing both sides by $(dx)^2$:

$$\\frac{d^2 y}{dx^2} = \\frac{d^2 y}{(dx)^2} = f''(x)$$

This explains the Leibniz notation for higher derivatives. The superscript on $d^2 y$ counts the number of times the differential operator $d$ has been applied. The square on $dx^2$ reflects that $dx$ appears as a factor twice—not that $dx$ is squared in a power sense.

Higher-order differentials extend the approximation. The second-order estimate of the change in $y$ is

$$\\Delta y \\approx f'(x)\\,dx + \\frac{1}{2}f''(x)(dx)^2$$

This is the beginning of the Taylor expansion written in differential notation: $f(x + dx) \\approx f(x) + f'(x)\\,dx + \\frac{1}{2}f''(x)(dx)^2 + \\cdots$. Each additional term uses a higher-order derivative and a higher power of $dx$, improving the approximation at the cost of more computation.
`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: `intro`,
  title: `Separating dy and dx`,
  content: `
The derivative $\\frac{dy}{dx}$ is defined as a [limit](!/calculus/limits)—a single object, not a fraction. But Leibniz notation invites the question: can $dy$ and $dx$ stand on their own? Differentials answer yes, with precise meaning. The symbol $dx$ represents an independent small change in $x$, and $dy = f'(x)\\,dx$ represents the corresponding change in $y$ predicted by the tangent line.

This formalism does more than justify notation. It provides a direct tool for approximating function values near a known point, estimating how errors in measurement propagate through calculations, and explaining why Leibniz notation behaves like fraction arithmetic in the [chain rule](!/calculus/derivatives/rules) and in [integration](!/calculus/integrals).
`
};

const faqQuestions = {
  obj1: {
    question: "What is the differential dx?",
    answer: "The differential dx is an independent variable representing a change in x. Unlike h in the limit definition, dx is a finite quantity that can be any value—positive, negative, or zero. It sets the scale for linear approximations.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the differential dy?",
    answer: "For y = f(x), the differential dy = f'(x)·dx. It represents the vertical change along the tangent line when x shifts by dx. Geometrically, dy is the tangent line's estimate of how y changes, not the actual change.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between dy and Δy?",
    answer: "Δy = f(x + dx) − f(x) is the actual change along the curve. dy = f'(x)·dx is the tangent line estimate. For small dx, they're nearly equal; for larger dx, they diverge. The error Δy − dy shrinks faster than dx as dx → 0.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you use differentials for linear approximation?",
    answer: "Use f(x + dx) ≈ f(x) + f'(x)·dx. Given a known value f(x) and slope f'(x), estimate f at nearby points. For example, √4.03 ≈ 2 + (1/4)(0.03) = 2.0075, which matches the actual value to five decimal places.",
    sectionId: "4"
  },
  obj5: {
    question: "How do differentials estimate error?",
    answer: "If x has measurement error dx, then f(x) has error approximately |dy| = |f'(x)|·|dx|. The derivative acts as an error amplifier. Relative error in f equals the logarithmic derivative times the absolute error in x.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the total differential for multiple variables?",
    answer: "For z = f(x,y), the total differential is dz = (∂f/∂x)dx + (∂f/∂y)dy. Each partial derivative weights that variable's contribution to the total change. This extends error propagation to formulas with multiple inputs.",
    sectionId: "6"
  },
  obj7: {
    question: "How do differentials justify Leibniz notation?",
    answer: "Differentials make dy/dx behave like a true fraction. In the chain rule, du cancels algebraically. In integration, substitution u = g(x), du = g'(x)dx is a literal change of variables. Separation of variables in differential equations becomes rigorous.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Differentials",
    "description": "Learn differentials dx and dy, linear approximation, error estimation, and how differentials justify Leibniz notation. Includes total differentials for multivariable functions.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/differentials",
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
      "name": "Differentials"
    },
    "teaches": [
      "Definition of differentials dx and dy",
      "Difference between dy and Δy",
      "Linear approximation using tangent lines",
      "Error propagation and estimation",
      "Total differentials for multiple variables",
      "Leibniz notation and differential algebra"
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
        "name": "Differentials",
        "item": "https://www.learnmathclass.com/calculus/derivatives/differentials"
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
  //       title: "Differentials | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/differentials",
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
      title: "Differentials: Linear Approximation & Error | Learn Math Class",
      description: "Learn differentials dx and dy, linear approximation, error estimation, and how differentials justify Leibniz notation. Includes total differentials for multivariable functions.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/differentials",
      name: "Differentials"
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Differentials</h1>
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
