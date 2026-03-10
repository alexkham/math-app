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
  "evaluating integrals",
  "how to solve integrals",
  "integral evaluation techniques",
  "direct antidifferentiation",
  "completing the square integral",
  "piecewise function integral",
  "absolute value integral",
  "symmetry in integrals",
  "even odd function integral",
  "integral common mistakes",
  "check integral answer",
  "definite integral setup",
  "integral step by step",
  "antiderivative calculus"
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
    title: `Direct Antidifferentiation`,
    content: `
Try the straightforward approach first. Does the integrand match a standard form?

$$\\int (3x^2 + 5e^x - \\sec^2 x)\\, dx$$

Apply linearity and known formulas:

$$= 3 \\cdot \\frac{x^3}{3} + 5e^x - \\tan x + C = x^3 + 5e^x - \\tan x + C$$

Algebraic simplification often reveals standard forms:

$$\\int \\frac{x^3 + 1}{x}\\, dx = \\int \\left(x^2 + \\frac{1}{x}\\right)\\, dx = \\frac{x^3}{3} + \\ln|x| + C$$

Expand, simplify, and separate before reaching for techniques.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Recognizing Standard Forms`,
    content: `
Many integrals are disguised versions of basic formulas.

**Completing the square** transforms quadratics:

$$\\int \\frac{1}{x^2 + 4x + 8}\\, dx = \\int \\frac{1}{(x+2)^2 + 4}\\, dx$$

This matches $\\int \\dfrac{1}{u^2 + a^2}\\, du = \\dfrac{1}{a}\\arctan\\dfrac{u}{a} + C$ with $u = x + 2$ and $a = 2$.

**Rewriting constants** exposes patterns:

$$\\int \\frac{1}{\\sqrt{9 - x^2}}\\, dx = \\int \\frac{1}{\\sqrt{3^2 - x^2}}\\, dx = \\arcsin\\frac{x}{3} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Setting Up Definite Integrals`,
    content: `
For [definite integrals](!/calculus/integrals/definite), correct setup is essential.

**Identify the variable:** What quantity varies, and over what range?

**Express the integrand:** Write the quantity being accumulated in terms of the integration variable.

**Determine bounds:** Where does accumulation begin and end?

**Example:** Find the area under $y = x^2$ from $x = 0$ to $x = 3$.

$$\\text{Area} = \\int_0^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_0^3 = \\frac{27}{3} - 0 = 9$$

Check reasonableness: the area should be positive and between $0 \\cdot 3 = 0$ and $9 \\cdot 3 = 27$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Handling Absolute Values`,
    content: `
Absolute values require splitting the integral where the argument changes sign.

$$\\int_{-2}^{3} |x|\\, dx$$

Since $|x| = -x$ for $x < 0$ and $|x| = x$ for $x \\geq 0$:

$$= \\int_{-2}^{0} (-x)\\, dx + \\int_0^3 x\\, dx$$

$$= \\left[-\\frac{x^2}{2}\\right]_{-2}^{0} + \\left[\\frac{x^2}{2}\\right]_0^3 = (0 - (-2)) + \\left(\\frac{9}{2} - 0\\right) = 2 + \\frac{9}{2} = \\frac{13}{2}$$

Note: $\\left|\\int f\\right| \\neq \\int |f|$ in general.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Piecewise Functions`,
    content: `
Split the integral at boundaries between pieces and apply [additivity](!/calculus/integrals/rules):

$$\\int_a^c f(x)\\, dx = \\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx$$

**Example:** For $f(x) = \\begin{cases} x^2 & x < 1 \\\\ 2x & x \\geq 1 \\end{cases}$, evaluate $\\int_0^2 f(x)\\, dx$.

$$= \\int_0^1 x^2\\, dx + \\int_1^2 2x\\, dx = \\frac{x^3}{3}\\Big|_0^1 + x^2\\Big|_1^2$$

$$= \\frac{1}{3} + (4 - 1) = \\frac{1}{3} + 3 = \\frac{10}{3}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Symmetry Shortcuts`,
    content: `
Symmetric integrands over symmetric intervals simplify dramatically.

**Even functions** satisfy $f(-x) = f(x)$:

$$\\int_{-a}^{a} f(x)\\, dx = 2\\int_0^a f(x)\\, dx$$

**Odd functions** satisfy $f(-x) = -f(x)$:

$$\\int_{-a}^{a} f(x)\\, dx = 0$$

**Example:**

$$\\int_{-3}^{3} x^3\\, dx = 0 \\quad \\text{(odd function)}$$

$$\\int_{-2}^{2} x^4\\, dx = 2\\int_0^2 x^4\\, dx = 2 \\cdot \\frac{32}{5} = \\frac{64}{5} \\quad \\text{(even function)}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Common Pitfalls`,
    content: `
**Forgetting $+C$:** Indefinite integrals always include the constant of integration.

**Dropping absolute values:** The antiderivative of $1/x$ is $\\ln|x| + C$, not $\\ln x + C$.

**Sign errors in substitution:** When $u = -x$, then $du = -dx$, not $dx$.

**Forgetting to convert limits:** In definite integrals with substitution, either convert the limits to $u$-values or substitute back to $x$ before evaluating.

**Missing discontinuities:** An integral like $\\int_{-1}^{1} \\dfrac{1}{x^2}\\, dx$ is improper—the integrand is unbounded at $x = 0$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Checking Your Answer`,
    content: `
**Differentiate:** The derivative of your antiderivative should return the integrand. This catches algebraic and sign errors.

**Verify:** For $\\int \\sec^2 x\\, dx = \\tan x + C$, check: $(\\tan x)' = \\sec^2 x$. Correct.

**Estimate:** For definite integrals, check that the answer is reasonable. A positive integrand on $[a,b]$ with $a < b$ should yield a positive result. The value should lie between $m(b-a)$ and $M(b-a)$ where $m$ and $M$ bound the integrand.

**Numerical check:** When possible, compare to a calculator or numerical approximation.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

  const introContent = {
  id: `intro`,
  title: `Putting It All Together`,
  content: `
Evaluating integrals draws on everything: recognizing standard forms, selecting appropriate techniques, handling special cases, and verifying results. The process is part pattern recognition, part strategic choice, part careful execution.

Start simple. Direct antidifferentiation works more often than expected—many integrals match [known formulas](!/calculus/integrals/special) or yield to basic algebra. When direct methods fail, systematically consider substitution, parts, and other [techniques](!/calculus/integrals/techniques).

For definite integrals, setup matters as much as computation. Identify the correct bounds, express the integrand properly, and watch for discontinuities that signal [improper integrals](!/calculus/integrals/improper). A well-posed integral is half solved.
`
};



const faqQuestions = {
  obj1: {
    question: "What is direct antidifferentiation?",
    answer: "Direct antidifferentiation means applying known formulas and linearity directly to find the integral. Simplify the integrand first—expand, separate terms, rewrite fractions—then match each piece to a standard antiderivative formula.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you recognize standard integral forms?",
    answer: "Many integrals are disguised versions of basic formulas. Completing the square transforms quadratics into arctan or arcsin forms. Rewriting constants like √(9−x²) as √(3²−x²) reveals the arcsin pattern. Look for these hidden structures before using advanced techniques.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you set up a definite integral?",
    answer: "Identify the variable and its range, express the integrand in terms of that variable, and determine the bounds where accumulation begins and ends. Check that the answer is reasonable—positive integrand with a < b should give positive result.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you integrate absolute value functions?",
    answer: "Split the integral at points where the argument changes sign. For ∫|x| dx from -2 to 3, split at x = 0: integrate -x from -2 to 0, then x from 0 to 3. The absolute value of an integral does not equal the integral of the absolute value.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you integrate piecewise functions?",
    answer: "Split the integral at the boundaries between pieces using additivity: ∫ₐᶜ f = ∫ₐᵇ f + ∫ᵇᶜ f. Integrate each piece using its formula over its subinterval, then add the results.",
    sectionId: "5"
  },
  obj6: {
    question: "How does symmetry simplify integrals?",
    answer: "For integrals over symmetric intervals [-a, a]: even functions (f(-x) = f(x)) give ∫₋ₐᵃ f = 2∫₀ᵃ f; odd functions (f(-x) = -f(x)) give ∫₋ₐᵃ f = 0. This can eliminate half the work or give the answer immediately.",
    sectionId: "6"
  },
  obj7: {
    question: "What are common integration mistakes?",
    answer: "Common errors include: forgetting +C in indefinite integrals, dropping absolute values in ln|x|, sign errors in substitution (if u = -x then du = -dx), forgetting to convert limits in substitution, and missing discontinuities that make integrals improper.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you check an integral answer?",
    answer: "Differentiate your antiderivative—it should return the integrand. For definite integrals, verify the answer is reasonable: correct sign, value between m(b−a) and M(b−a) where m and M bound the integrand. Compare to numerical approximation when possible.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Evaluating Integrals",
    "description": "Master integral evaluation: direct antidifferentiation, recognizing standard forms, definite integral setup, absolute values, piecewise functions, symmetry shortcuts, and avoiding common mistakes.",
    "url": "https://www.learnmathclass.com/calculus/integrals/evaluating",
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
      "name": "Evaluating Integrals"
    },
    "teaches": [
      "Direct antidifferentiation and simplification",
      "Recognizing standard forms through algebraic manipulation",
      "Setting up definite integrals correctly",
      "Handling absolute values and piecewise functions",
      "Using symmetry to simplify integrals",
      "Avoiding common integration mistakes"
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
        "name": "Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Evaluating Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/evaluating"
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
  //       title: "Evaluating Integrals | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/evaluating",
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
      title: "Evaluating Integrals: Strategy & Examples | Learn Math Class",
      description: "Master integral evaluation: direct antidifferentiation, recognizing standard forms, definite integral setup, absolute values, piecewise functions, symmetry shortcuts, and avoiding common mistakes.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/evaluating",
      name: "Evaluating Integrals"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Evaluating Integrals</h1>
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
