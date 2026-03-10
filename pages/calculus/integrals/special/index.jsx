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
  "special integrals",
  "integral formulas",
  "basic integration formulas",
  "power rule integration",
  "integral of x^n",
  "exponential integral",
  "trigonometric integrals",
  "integral of sin cos",
  "inverse trig integrals",
  "arctan integral",
  "arcsin integral",
  "logarithmic integrals",
  "integral of tan x",
  "integral of sec x",
  "integration table"
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
    title: `Why Memorize Special Integrals?`,
    content: `
Integration techniques transform unfamiliar integrals into recognizable ones. These standard forms are the targets.

Knowing them provides:

- Speed—instant recognition eliminates derivation
- Building blocks—complex integrals reduce to combinations of simple ones
- Verification—differentiate to confirm correctness
- Pattern anchors—guide technique selection by identifying what form to aim for

Each formula inverts a differentiation rule. Mastery of derivatives implies knowledge of these integrals.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Power Functions`,
    content: `
The power rule for integration:

$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C \\qquad (n \\neq -1)$$

The exponent increases by one; divide by the new exponent.

The exception $n = -1$ is critical:

$$\\int x^{-1}\\, dx = \\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

The absolute value ensures validity for negative $x$. For $x > 0$, the antiderivative is $\\ln x$; for $x < 0$, it is $\\ln(-x)$. Both cases combine into $\\ln|x|$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Exponential Functions`,
    content: `
The exponential function is its own antiderivative:

$$\\int e^x\\, dx = e^x + C$$

For other bases:

$$\\int a^x\\, dx = \\frac{a^x}{\\ln a} + C \\qquad (a > 0,\\, a \\neq 1)$$

The factor $1/\\ln a$ compensates for the chain rule in $(a^x)' = a^x \\ln a$.

With a linear argument:

$$\\int e^{kx}\\, dx = \\frac{e^{kx}}{k} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Trigonometric Functions`,
    content: `
Basic trigonometric integrals:

$$\\int \\sin x\\, dx = -\\cos x + C$$

$$\\int \\cos x\\, dx = \\sin x + C$$

$$\\int \\sec^2 x\\, dx = \\tan x + C$$

$$\\int \\csc^2 x\\, dx = -\\cot x + C$$

$$\\int \\sec x \\tan x\\, dx = \\sec x + C$$

$$\\int \\csc x \\cot x\\, dx = -\\csc x + C$$

Each reverses a standard derivative. The negative signs in $\\sin x$ and $\\csc^2 x$ integrals reflect the negatives in $(\\cos x)' = -\\sin x$ and $(\\cot x)' = -\\csc^2 x$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Inverse Trigonometric Forms`,
    content: `
These integrals produce inverse trigonometric functions:

$$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$

$$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx = \\arcsin x + C$$

$$\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\, dx = \\text{arcsec}\\,|x| + C$$

More generally, with constant $a > 0$:

$$\\int \\frac{1}{a^2 + x^2}\\, dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C$$

$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\, dx = \\arcsin\\frac{x}{a} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Logarithmic Integrals`,
    content: `
The logarithm itself requires integration by parts:

$$\\int \\ln x\\, dx = x\\ln x - x + C$$

A crucial pattern recognizes when integrands have the form $f'(x)/f(x)$:

$$\\int \\frac{f'(x)}{f(x)}\\, dx = \\ln|f(x)| + C$$

This pattern appears frequently in disguise.

**Example:**

$$\\int \\tan x\\, dx = \\int \\frac{\\sin x}{\\cos x}\\, dx = -\\ln|\\cos x| + C$$

Here $f(x) = \\cos x$ and $f'(x) = -\\sin x$, so the integrand is $-f'(x)/f(x)$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Integrals Leading to Logarithms`,
    content: `
Several standard integrals produce logarithms:

$$\\int \\tan x\\, dx = -\\ln|\\cos x| + C = \\ln|\\sec x| + C$$

$$\\int \\cot x\\, dx = \\ln|\\sin x| + C$$

$$\\int \\sec x\\, dx = \\ln|\\sec x + \\tan x| + C$$

$$\\int \\csc x\\, dx = -\\ln|\\csc x + \\cot x| + C = \\ln|\\csc x - \\cot x| + C$$

The $\\sec x$ and $\\csc x$ integrals are less obvious—they require multiplying by clever forms of $1$ to create the $f'/f$ pattern.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  id: `intro`,
  title: `Formulas Worth Knowing`,
  content: `
Certain integrals appear so frequently that recognizing them on sight saves considerable effort. These standard forms serve as endpoints—the targets that techniques aim to reach.

Each formula below reverses a known derivative. The integral of $\\cos x$ is $\\sin x$ because the derivative of $\\sin x$ is $\\cos x$. The integral of $1/(1 + x^2)$ is $\\arctan x$ because the derivative of $\\arctan x$ is $1/(1 + x^2)$.

Memorizing these forms accelerates computation and provides reference points for more complex integrals. When a [technique](!/calculus/integrals/techniques) transforms an integral into one of these patterns, the work is essentially done.
`
};



const faqQuestions = {
  obj1: {
    question: "Why should you memorize special integrals?",
    answer: "Integration techniques transform unfamiliar integrals into standard forms. Memorizing these targets provides speed through instant recognition, building blocks for complex integrals, verification by differentiation, and pattern anchors that guide technique selection.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the power rule for integration?",
    answer: "The power rule states ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1. The exponent increases by one and you divide by the new exponent. The exception n = -1 gives ∫1/x dx = ln|x| + C, with absolute value ensuring validity for negative x.",
    sectionId: "2"
  },
  obj3: {
    question: "What are the exponential integral formulas?",
    answer: "The exponential function is its own antiderivative: ∫eˣ dx = eˣ + C. For other bases: ∫aˣ dx = aˣ/ln(a) + C. With a linear argument: ∫eᵏˣ dx = eᵏˣ/k + C. The factor 1/ln(a) or 1/k compensates for the chain rule.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the basic trigonometric integrals?",
    answer: "Key formulas: ∫sin x dx = -cos x + C; ∫cos x dx = sin x + C; ∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C; ∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C. Each reverses a standard derivative.",
    sectionId: "4"
  },
  obj5: {
    question: "What integrals produce inverse trig functions?",
    answer: "∫1/(1+x²) dx = arctan x + C; ∫1/√(1-x²) dx = arcsin x + C; ∫1/(x√(x²-1)) dx = arcsec|x| + C. More generally: ∫1/(a²+x²) dx = (1/a)arctan(x/a) + C and ∫1/√(a²-x²) dx = arcsin(x/a) + C.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you integrate logarithms?",
    answer: "The integral of ln x requires integration by parts: ∫ln x dx = x ln x - x + C. A key pattern is ∫f'(x)/f(x) dx = ln|f(x)| + C. For example, ∫tan x dx = ∫sin x/cos x dx = -ln|cos x| + C using this pattern.",
    sectionId: "6"
  },
  obj7: {
    question: "What are the integrals of tan, cot, sec, and csc?",
    answer: "∫tan x dx = -ln|cos x| + C = ln|sec x| + C; ∫cot x dx = ln|sin x| + C; ∫sec x dx = ln|sec x + tan x| + C; ∫csc x dx = -ln|csc x + cot x| + C. These use the f'/f pattern or clever multiplication by 1.",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Special Integrals",
    "description": "Essential integration formulas: power rule, exponential, trigonometric, inverse trig (arctan, arcsin), and logarithmic integrals. Standard forms every calculus student should memorize.",
    "url": "https://www.learnmathclass.com/calculus/integrals/special",
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
      "name": "Special Integrals"
    },
    "teaches": [
      "Power rule for integration including n = -1 case",
      "Exponential function integrals",
      "Basic trigonometric integrals",
      "Inverse trigonometric integral forms",
      "Logarithmic integrals and the f'/f pattern",
      "Integrals of tan, cot, sec, and csc"
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
        "name": "Special Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/special"
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
  //       title: "Special Interals | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/special",
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
      title: "Special Integrals: Essential Formulas | Learn Math Class",
      description: "Essential integration formulas: power rule, exponential, trigonometric, inverse trig (arctan, arcsin), and logarithmic integrals. Standard forms every calculus student should memorize.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/special",
      name: "Special Integrals"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Special Interals</h1>
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
