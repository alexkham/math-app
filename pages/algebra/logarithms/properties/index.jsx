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
  "properties of logarithms",
  "logarithm domain",
  "logarithm range",
  "logarithm monotonicity",
  "one-to-one property logarithm",
  "log function properties",
  "logarithm asymptote",
  "log x domain range",
  "logarithm increasing decreasing",
  "inverse of exponential",
  "logarithm continuity",
  "log function characteristics",
  "why log x undefined for negative",
  "logarithm injective",
  "exponential logarithm inverse"
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

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }

const sectionsContent = {
  obj1: {
    title: `Domain`,
    content: `The domain of $f(x) = \\log_a(x)$ is the set of all positive real numbers: $(0, \\infty)$.

This restriction follows from the definition. The equation $\\log_a(x) = y$ means $a^y = x$. Since $a > 0$ and $a^y > 0$ for all real $y$, the output of any exponential with positive base is strictly positive. No real exponent produces zero or a negative number.

Consequently, $\\log_a(0)$ is undefined — no solution to $a^y = 0$ exists. Similarly, $\\log_a(-5)$ is undefined — no real $y$ satisfies $a^y = -5$.

For composite arguments, the entire expression inside the logarithm must be positive. The function $\\log_2(x - 3)$ requires $x - 3 > 0$, giving domain $x > 3$. The function $\\log_5(x^2 + 1)$ has domain all real numbers, since $x^2 + 1 > 0$ for every $x$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Range`,
    content: `The range of $f(x) = \\log_a(x)$ is all real numbers: $(-\\infty, \\infty)$.

As $x$ increases from just above zero toward infinity, $\\log_a(x)$ takes every real value exactly once. Near zero, the logarithm plunges toward $-\\infty$. At $x = 1$, the logarithm equals zero. As $x$ grows large, the logarithm increases without bound, though slowly.

This unlimited range contrasts with the exponential function $g(x) = a^x$, whose range is $(0, \\infty)$. The domain and range swap between a function and its inverse — logarithms and exponentials exhibit this exchange precisely.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Monotonicity`,
    content: `Logarithmic functions are strictly monotonic — either always increasing or always decreasing throughout their domain.

When $a > 1$, the function $f(x) = \\log_a(x)$ is strictly increasing. If $x_1 < x_2$, then $\\log_a(x_1) < \\log_a(x_2)$. Larger inputs produce larger outputs. The functions $\\log_2(x)$, $\\log_{10}(x)$, and $\\ln(x)$ all increase.

When $0 < a < 1$, the function $f(x) = \\log_a(x)$ is strictly decreasing. If $x_1 < x_2$, then $\\log_a(x_1) > \\log_a(x_2)$. Larger inputs produce smaller outputs. The function $\\log_{1/2}(x)$ decreases.

This property is critical for solving [inequalities](!/algebra/logarithms/inequalities). Taking logarithms preserves inequality direction when $a > 1$ and reverses it when $0 < a < 1$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `One-to-One Property`,
    content: `Logarithmic functions are one-to-one (injective): distinct inputs always produce distinct outputs.

Algebraically: if $\\log_a(x) = \\log_a(y)$, then $x = y$.

This follows directly from strict monotonicity. A function that is always increasing (or always decreasing) cannot assign the same output to two different inputs — it would have to "turn around," violating monotonicity.

The one-to-one property justifies a key technique for solving [equations](!/algebra/logarithms/equations). When an equation has the form $\\log_a(M) = \\log_a(N)$ with the same base on both sides, the arguments must be equal: $M = N$. This reduces a logarithmic equation to an algebraic one.

Example: $\\log_3(2x + 1) = \\log_3(x + 5)$ implies $2x + 1 = x + 5$, giving $x = 4$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Continuity`,
    content: `The function $f(x) = \\log_a(x)$ is continuous on its entire domain $(0, \\infty)$.

There are no jumps, breaks, or holes in the graph for any $x > 0$. The function transitions smoothly from one value to the next. Small changes in input produce small changes in output.

At the boundary $x = 0$, continuity fails — the function is not defined there. The graph approaches the $y$-axis but never reaches it. This boundary behavior leads to the vertical asymptote discussed below.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Asymptotic Behavior`,
    content: `The line $x = 0$ (the $y$-axis) is a vertical asymptote for every logarithmic function.

As $x \\to 0^+$ (approaching zero from the right):
$$\\lim_{x \\to 0^+} \\log_a(x) = -\\infty \\quad \\text{when } a > 1$$
$$\\lim_{x \\to 0^+} \\log_a(x) = +\\infty \\quad \\text{when } 0 < a < 1$$

The graph approaches the $y$-axis without touching it, plunging downward (for $a > 1$) or rising upward (for $0 < a < 1$).

As $x \\to \\infty$:
$$\\lim_{x \\to \\infty} \\log_a(x) = +\\infty \\quad \\text{when } a > 1$$
$$\\lim_{x \\to \\infty} \\log_a(x) = -\\infty \\quad \\text{when } 0 < a < 1$$

Growth toward infinity is slow. For $a > 1$, the logarithm increases without bound but at a decelerating rate — doubling the input adds only a fixed constant to the output.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Inverse Relationship with Exponential Functions`,
    content: `The functions $f(x) = \\log_a(x)$ and $g(x) = a^x$ are inverses of each other.

Composition in either order returns the input:
$$f(g(x)) = \\log_a(a^x) = x \\quad \\text{for all real } x$$
$$g(f(x)) = a^{\\log_a(x)} = x \\quad \\text{for all } x > 0$$

Graphically, the curves $y = \\log_a(x)$ and $y = a^x$ are reflections of each other across the line $y = x$. Points $(p, q)$ on one curve correspond to points $(q, p)$ on the other.

Domain and range exchange:
- $a^x$ has domain $(-\\infty, \\infty)$ and range $(0, \\infty)$
- $\\log_a(x)$ has domain $(0, \\infty)$ and range $(-\\infty, \\infty)$

Asymptotes exchange orientation:
- $a^x$ has horizontal asymptote $y = 0$
- $\\log_a(x)$ has vertical asymptote $x = 0$

This inverse relationship provides the foundation for converting between logarithmic and exponential forms when solving [equations](!/algebra/logarithms/equations).`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
  title: `Structural Characteristics of Logarithmic Functions`,
  content: `Every [logarithmic function](!/algebra/logarithms) $f(x) = \\log_a(x)$ possesses properties that govern its behavior across the domain. These properties — domain, range, monotonicity, injectivity, continuity, and asymptotic behavior — determine how logarithms interact with equations, inequalities, and graphs.`,
};


const faqQuestions = {
  obj1: {
    question: "What is the domain of a logarithmic function?",
    answer: "The domain is (0, ∞) — all positive real numbers. Logarithms are undefined for zero and negative numbers because no real exponent makes a positive base equal zero or a negative number.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the range of a logarithmic function?",
    answer: "The range is (-∞, ∞) — all real numbers. As x approaches 0 from the right, log(x) goes to negative infinity. As x grows large, log(x) increases without bound.",
    sectionId: "2"
  },
  obj3: {
    question: "Why is log of a negative number undefined?",
    answer: "Because a^y > 0 for any positive base a and any real exponent y. No real power of a positive number can produce a negative result, so log_a(-5) has no solution.",
    sectionId: "1"
  },
  obj4: {
    question: "When is a logarithmic function increasing or decreasing?",
    answer: "For base > 1 (like log₂, log₁₀, ln), the function is strictly increasing. For base between 0 and 1 (like log_{1/2}), the function is strictly decreasing.",
    sectionId: "3"
  },
  obj5: {
    question: "What is the one-to-one property of logarithms?",
    answer: "If log_a(x) = log_a(y), then x = y. Each output corresponds to exactly one input. This property lets you set arguments equal when logs with the same base are equal.",
    sectionId: "4"
  },
  obj6: {
    question: "What is the vertical asymptote of log(x)?",
    answer: "The line x = 0 (y-axis) is a vertical asymptote. As x approaches 0 from the right, log(x) approaches negative infinity (for base > 1). The graph never touches x = 0.",
    sectionId: "6"
  },
  obj7: {
    question: "How are logarithmic and exponential functions related?",
    answer: "They are inverses. log_a(a^x) = x for all real x, and a^(log_a(x)) = x for x > 0. Their graphs are reflections across y = x, and their domains/ranges are swapped.",
    sectionId: "7"
  },
  obj8: {
    question: "Is log(x) continuous?",
    answer: "Yes, log_a(x) is continuous on its entire domain (0, ∞). There are no jumps, breaks, or holes. Small changes in x produce small changes in log(x).",
    sectionId: "5"
  },
  obj9: {
    question: "Why does monotonicity matter for solving inequalities?",
    answer: "Monotonicity determines if inequality direction is preserved or reversed. For base > 1 (increasing), direction is preserved. For base between 0 and 1 (decreasing), direction reverses.",
    sectionId: "3"
  },
  obj10: {
    question: "What is log(0)?",
    answer: "Undefined. There is no real number y such that a^y = 0 for any positive base a. The logarithm approaches negative infinity as the argument approaches zero from the right.",
    sectionId: "1"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Logarithms",
    "description": "Learn logarithm properties: domain (0, ∞), range (-∞, ∞), monotonicity, one-to-one property, continuity, vertical asymptote, and inverse relationship with exponentials.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/properties",
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
      "name": "Logarithm Properties"
    },
    "teaches": [
      "Domain of logarithmic functions",
      "Range of logarithmic functions",
      "Monotonicity and increasing/decreasing behavior",
      "One-to-one (injective) property",
      "Continuity on domain",
      "Asymptotic behavior and vertical asymptote",
      "Inverse relationship with exponential functions"
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
        "name": "Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Properties of Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms/properties"
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
      title: "Properties of Logarithms: Domain, Range & More | Learn Math Class",
      description: "Learn logarithm properties: domain (0, ∞), range (-∞, ∞), monotonicity, one-to-one property, continuity, vertical asymptote, and inverse relationship with exponentials.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/properties",
      name: "Properties of Logarithms"
    },
  }
}
   }

// export default function PropertiesPage({seoData,sectionsContent , introContent}) {
export default function PropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Properties of Logarithms</h1>
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
