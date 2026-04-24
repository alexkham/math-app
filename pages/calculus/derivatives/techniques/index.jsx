import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "differentiation techniques",
  "implicit differentiation",
  "logarithmic differentiation",
  "parametric differentiation",
  "inverse function derivative",
  "implicit differentiation examples",
  "dy/dx implicit",
  "logarithmic differentiation x^x",
  "parametric curve derivative",
  "chain rule implicit",
  "derivative inverse function formula",
  "related rates differentiation",
  "variable exponent derivative",
  "second derivative parametric"
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
    title: `Implicit Differentiation`,
    content: `
Given an equation relating $x$ and $y$—such as $x^2 + y^2 = 25$—implicit differentiation finds $\\frac{dy}{dx}$ without solving for $y$.

The method: differentiate both sides of the equation with respect to $x$. Every term involving only $x$ is differentiated normally. Every term involving $y$ is differentiated using the [chain rule](!/calculus/derivatives/rules), treating $y$ as a function of $x$. This introduces a factor of $\\frac{dy}{dx}$ wherever $y$ appears. After differentiation, solve the resulting equation algebraically for $\\frac{dy}{dx}$.

For $x^2 + y^2 = 25$: differentiating gives $2x + 2y\\frac{dy}{dx} = 0$. Solving yields $\\frac{dy}{dx} = -\\frac{x}{y}$. The result depends on both $x$ and $y$—this is typical and expected. The formula gives the slope at any point $(x, y)$ on the curve without choosing a branch.

The technique works because the equation defines $y$ as a function of $x$ locally (by the Implicit Function Theorem), even when no global explicit formula exists. Differentiating the equation preserves the relationship while extracting the rate of change.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Applications of Implicit Differentiation`,
    content: `
Implicit differentiation extends beyond circles and ellipses. Any equation relating $x$ and $y$ that defines a smooth curve can be differentiated implicitly.

Tangent lines to implicitly defined curves follow directly. For $x^3 + y^3 = 6xy$ (the folium of Descartes), implicit differentiation gives $\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x}$. Evaluating at a specific point on the curve produces the tangent slope there.

Higher-order derivatives can be found implicitly as well. After finding $\\frac{dy}{dx}$, differentiate the result implicitly again with respect to $x$—every occurrence of $\\frac{dy}{dx}$ is itself a function of $x$, and the first-derivative expression can be substituted back in. The algebra is heavier, but the method is systematic.

Related rates problems are implicit differentiation with respect to time $t$ rather than $x$. If a relationship holds among several quantities that all vary with $t$, differentiating implicitly with respect to $t$ connects their rates of change. This application is developed in [graph analysis](!/calculus/derivatives/graph-analysis).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Logarithmic Differentiation`,
    content: `
Logarithmic differentiation uses the properties of $\\ln$ to simplify differentiation of complex products, quotients, and variable-exponent expressions.

The procedure: given $y = f(x)$, take $\\ln$ of both sides to get $\\ln y = \\ln f(x)$. Apply logarithm properties—products become sums, quotients become differences, exponents become multipliers. Differentiate both sides implicitly with respect to $x$. The left side gives $\\frac{1}{y}\\frac{dy}{dx}$. Solve for $\\frac{dy}{dx} = y \\cdot \\frac{d}{dx}[\\ln f(x)]$.

For $y = x^x$: taking $\\ln$ gives $\\ln y = x \\ln x$. Differentiating: $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + 1$. Solving: $\\frac{dy}{dx} = x^x(\\ln x + 1)$. No standard rule handles $x^x$ directly—the base and exponent both vary. Logarithmic differentiation is the natural approach.

The technique also simplifies expressions like $y = \\frac{x^2 \\sqrt{x+1}}{(x-3)^4}$, where the product and quotient rules together would produce unwieldy algebra. After taking $\\ln$, the expression becomes $\\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(x-3)$, and differentiating this sum is straightforward.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Differentiating Inverse Functions`,
    content: `
If $f$ is a one-to-one differentiable function with inverse $f^{-1}$, the derivative of the inverse is

$$(f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}$$

provided $f'(f^{-1}(x)) \\neq 0$. The derivative of the inverse is the reciprocal of the derivative of the original, evaluated at the corresponding point.

The derivation uses implicit differentiation. If $y = f^{-1}(x)$, then $f(y) = x$. Differentiating both sides with respect to $x$: $f'(y) \\cdot \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{f'(y)}$.

Geometrically, the graphs of $f$ and $f^{-1}$ are reflections across the line $y = x$. If $f$ has slope $m$ at a point, $f^{-1}$ has slope $1/m$ at the reflected point. A horizontal tangent on $f$ (slope $0$) corresponds to a vertical tangent on $f^{-1}$ (slope undefined), which is why $f'(f^{-1}(x)) \\neq 0$ is required.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Deriving Inverse Trigonometric Derivatives`,
    content: `
The inverse function formula, combined with implicit differentiation, produces the derivatives of all [inverse trigonometric functions](!/calculus/derivatives/special) without memorizing separate formulas.

For $y = \\arcsin x$: the defining equation is $\\sin y = x$ with $y \\in [-\\pi/2, \\pi/2]$. Differentiating implicitly: $\\cos y \\cdot \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{\\cos y}$. Since $\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}$ (positive because $y$ is in the first or fourth quadrant), the result is

$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1 - x^2}}$$

For $y = \\arctan x$: the defining equation is $\\tan y = x$. Differentiating: $\\sec^2 y \\cdot \\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{\\sec^2 y} = \\frac{1}{1 + \\tan^2 y} = \\frac{1}{1 + x^2}$.

The same method applies to $\\arccos$, $\\text{arccot}$, $\\text{arcsec}$, and $\\text{arccsc}$. In each case, implicit differentiation and a Pythagorean identity convert the result into an algebraic expression in $x$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Parametric Differentiation`,
    content: `
A curve defined parametrically by $x = x(t)$ and $y = y(t)$ does not express $y$ as a function of $x$ directly. The slope of the curve at a point is obtained through the chain rule in Leibniz form:

$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$

provided $\\frac{dx}{dt} \\neq 0$. Each coordinate is differentiated with respect to the parameter $t$, and the ratio gives the slope.

For a circle parametrized by $x = \\cos t$, $y = \\sin t$: $\\frac{dx}{dt} = -\\sin t$ and $\\frac{dy}{dt} = \\cos t$, so $\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$. At $t = \\pi/4$, the slope is $-1$.

The second derivative of a parametric curve is not $\\frac{d^2y/dt^2}{d^2x/dt^2}$. The correct formula is

$$\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}$$

Differentiate $dy/dx$ (which is a function of $t$) with respect to $t$, then divide by $dx/dt$ once more. This error is common and produces incorrect concavity analysis when made.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `When to Use Which Technique`,
    content: `
Each technique targets a specific structural pattern.

Implicit differentiation applies when $x$ and $y$ are tangled in an equation that is difficult or impossible to solve for $y$—circles, ellipses, higher-degree curves, and any relation not naturally in $y = f(x)$ form. It also applies in related rates, where multiple quantities depend on time.

Logarithmic differentiation applies when the expression involves products of many factors, quotients with complex structure, or—most distinctively—variable exponents like $x^x$, $(\\sin x)^{\\cos x}$, or $x^{\\ln x}$. If the exponent contains the variable, logarithmic differentiation is typically the only viable approach.

The inverse function derivative applies when differentiating $f^{-1}$ and the derivative of $f$ is known. It is the standard route to [inverse trigonometric](!/calculus/derivatives/special) and inverse hyperbolic derivatives.

Parametric differentiation applies when a curve is given as $x = x(t)$, $y = y(t)$. It handles curves that loop, cross themselves, or cannot be written as $y = f(x)$—cycloids, epicycloids, Lissajous figures, and motion trajectories.

These techniques are not mutually exclusive. A single problem may require implicit differentiation inside a parametric setting, or logarithmic differentiation as part of an inverse function computation.
`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: `intro`,
  title: `Beyond Explicit Formulas`,
  content: `
The standard [differentiation rules](!/calculus/derivatives/rules) apply directly when $y$ is given as an explicit function of $x$. But many relationships resist this form. The equation $x^2 + y^2 = 25$ defines $y$ implicitly—solving for $y$ introduces square roots and sign ambiguity. The expression $x^x$ has a variable in both the base and the exponent, fitting no single rule. A curve traced by $x = \\cos t$, $y = \\sin t$ expresses both coordinates through a parameter rather than one through the other.

Each situation calls for a technique that adapts the core rules to a nonstandard setting. Implicit differentiation applies the chain rule through an equation without isolating $y$. Logarithmic differentiation converts multiplicative complexity into additive simplicity. The inverse function derivative formula recovers the slope of $f^{-1}$ from the slope of $f$. Parametric differentiation computes $dy/dx$ when neither variable is expressed directly in terms of the other.
`
};



const faqQuestions = {
  obj1: {
    question: "What is implicit differentiation?",
    answer: "Implicit differentiation finds dy/dx from an equation relating x and y without solving for y. You differentiate both sides with respect to x, applying the chain rule to every term involving y (which introduces a dy/dx factor), then solve algebraically for dy/dx.",
    sectionId: "1"
  },
  obj2: {
    question: "When should you use logarithmic differentiation?",
    answer: "Logarithmic differentiation is used for expressions with variable exponents like x^x, complex products and quotients with many factors, or any case where taking ln of both sides converts multiplicative structure into additive structure that is easier to differentiate.",
    sectionId: "3"
  },
  obj3: {
    question: "What is the derivative of an inverse function?",
    answer: "If f is one-to-one and differentiable, the derivative of its inverse is (f⁻¹)'(x) = 1/f'(f⁻¹(x)), provided f' is nonzero at that point. The derivative of the inverse is the reciprocal of the original derivative evaluated at the corresponding point.",
    sectionId: "4"
  },
  obj4: {
    question: "How do you find dy/dx for a parametric curve?",
    answer: "For a curve defined by x = x(t) and y = y(t), the slope is dy/dx = (dy/dt)/(dx/dt). Each coordinate is differentiated with respect to the parameter t, and their ratio gives the slope. The second derivative requires differentiating dy/dx with respect to t, then dividing by dx/dt again.",
    sectionId: "6"
  },
  obj5: {
    question: "How do you choose which differentiation technique to use?",
    answer: "Use implicit differentiation when x and y are tangled in an equation. Use logarithmic differentiation for variable exponents or complex products/quotients. Use the inverse function formula when differentiating f⁻¹ with a known f'. Use parametric differentiation when a curve is given as x(t), y(t).",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Differentiation Techniques",
    "description": "Master implicit, logarithmic, and parametric differentiation plus inverse function derivatives. Techniques for equations, variable exponents, and parametric curves.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/techniques",
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
      "name": "Differentiation Techniques"
    },
    "teaches": [
      "Implicit differentiation for equations relating x and y",
      "Logarithmic differentiation for variable exponents and complex products",
      "Inverse function derivative formula",
      "Deriving inverse trigonometric derivatives via implicit differentiation",
      "Parametric differentiation including second derivatives",
      "Choosing the appropriate technique for a given problem"
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
        "name": "Differentiation Techniques",
        "item": "https://www.learnmathclass.com/calculus/derivatives/techniques"
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
  //       title: "Derivation Techniques | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/techniques",
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
      title: "Differentiation Techniques: Implicit & More | Learn Math Class",
      description: "Master implicit, logarithmic, and parametric differentiation plus inverse function derivatives. Techniques for equations, variable exponents, and parametric curves.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/techniques",
      name: "Differentiation Techniques"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Derivation Techniques</h1>
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
