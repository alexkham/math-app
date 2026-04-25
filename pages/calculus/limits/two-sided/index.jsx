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
  "two-sided limit",
  "two-sided limit definition",
  "limit from both sides",
  "left and right limit equal",
  "limit existence condition",
  "lim x approaches a",
  "jump discontinuity limit",
  "limit does not exist",
  "evaluating two-sided limits",
  "continuous function limit",
  "direct substitution limit",
  "derivative as limit",
  "one-sided limits equal two-sided",
  "limit notation calculus"
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
    title: `What is a Two-Sided Limit?`,
    content: `
The standard limit notation

$$\\lim_{x \\to a} f(x) = L$$

means $x$ approaches $a$ from both directions. Values slightly less than $a$ and values slightly greater than $a$ must both send $f(x)$ toward the same number $L$.

No superscript appears on the $a$—this absence signals the two-sided requirement. The function must exhibit consistent behavior from the left and from the right. When you trace the graph toward $x = a$ from either direction, both traces must converge to the same $y$-value.

The two-sided limit is the default interpretation whenever limit notation appears without further qualification.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Existence Condition`,
    content: `
A two-sided limit exists if and only if both [one-sided limits](!/calculus/limits/one-sided) exist and are equal. Formally:

$$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

Three conditions must hold. First, the left-hand limit $\\lim_{x \\to a^-} f(x)$ must exist. Second, the right-hand limit $\\lim_{x \\to a^+} f(x)$ must exist. Third, these two values must be identical.

If the one-sided limits differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails to exist.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Visualizing Two-Sided Approach`,
    content: `
Imagine tracing the graph of $f$ with your finger, moving toward $x = a$ from the left. Note the $y$-value your finger approaches. Now repeat from the right. If both traces converge to the same height, the two-sided limit exists and equals that height.

The function value $f(a)$ is irrelevant to this process. The graph might have a hole at $x = a$, or the point might be displaced from where the traces converge. The limit cares only about approach, not arrival.

A filled or open circle at $x = a$ tells you about $f(a)$, but the limit depends on the curve's behavior as it approaches that $x$-coordinate from both sides.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `When Two-Sided Limits Fail to Exist`,
    content: `
Several scenarios cause two-sided limits to fail.

## Jump Discontinuity

The left-hand and right-hand limits both exist but differ. For a piecewise function defined by

$$f(x) = \\begin{cases} x + 1 & x < 3 \\\\ x - 1 & x \\geq 3 \\end{cases}$$

the left-hand limit at $x = 3$ is $4$ while the right-hand limit is $2$. No single value works for both directions.

## Infinite Disagreement

One side may tend toward $+\\infty$ while the other tends toward $-\\infty$. For $f(x) = 1/(x - 2)$, approaching $x = 2$ from the right gives $+\\infty$, while approaching from the left gives $-\\infty$. The two-sided limit does not exist.

## Oscillation

If the function oscillates without settling from at least one direction, the corresponding one-sided limit fails to exist, and so does the two-sided limit.

Each failure mode reveals different information about the function's structure near the point.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Continuous Functions and Two-Sided Limits`,
    content: `
For [continuous](!/calculus/limits/continuity) functions, evaluating limits is straightforward: substitute and compute. The definition of continuity at $x = a$ requires

$$\\lim_{x \\to a} f(x) = f(a)$$

When this holds, the limit equals the function value. Polynomials, exponentials, sine, cosine, and many standard functions are continuous everywhere on their domains. For these, direct substitution yields the limit immediately.

Rational functions are continuous wherever the denominator is nonzero. At points where the denominator vanishes, continuity fails and direct substitution does not apply—[other techniques](!/calculus/limits/evaluating) are needed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Evaluating Two-Sided Limits`,
    content: `
Begin with direct substitution. If $f(a)$ is defined and no indeterminate form arises, then

$$\\lim_{x \\to a} f(x) = f(a)$$

If substitution produces $0/0$, $\\infty/\\infty$, or another indeterminate form, algebraic manipulation is required. Factor and cancel common terms, rationalize radicals, or simplify complex fractions until substitution becomes possible.

For example:

$$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x + 3) = 6$$

The [evaluating limits](!/calculus/limits/evaluating) page covers these techniques in detail.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Two-Sided Limits at Boundary Points`,
    content: `
At the edge of a function's domain, only one direction of approach is available. The square root function $\\sqrt{x}$ is defined only for $x \\geq 0$, so at $x = 0$, only the right-hand limit makes sense:

$$\\lim_{x \\to 0^+} \\sqrt{x} = 0$$

There is no left-hand limit because negative inputs lie outside the domain. In such cases, the [one-sided limit](!/calculus/limits/one-sided) is the only meaningful limit.

Context determines interpretation. When a function's domain naturally restricts approach to one side, the one-sided limit serves as the appropriate limit concept at that boundary.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Relationship to Derivatives`,
    content: `
The derivative of $f$ at $x = a$ is defined as a two-sided limit:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

The variable $h$ approaches $0$ from both positive and negative values. Positive $h$ corresponds to approaching from the right; negative $h$ corresponds to approaching from the left. Differentiability requires the same rate of change from both directions.

If only one direction yields a limit, we obtain a one-sided derivative. A function can have a left derivative and a right derivative that differ, in which case the two-sided derivative does not exist at that point.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
   id:"intro",

  title: `Both Directions at Once`,
  content: `
When we write the limit notation without any superscript—just $x \\to a$—we demand that the function approach the same value from both sides. This is the two-sided limit, the default meaning of the word "limit" in calculus.

The formal statement

$$\\lim_{x \\to a} f(x) = L$$

requires that $f(x)$ approach $L$ as $x$ approaches $a$ through values both less than and greater than $a$. Neither direction gets special treatment. If the function behaves differently on the left than on the right, no two-sided limit exists.

This requirement is stringent but essential. Derivatives, integrals, and continuity all rely on two-sided limits. A function that approaches different values from different directions exhibits a fundamental asymmetry—a break in behavior that prevents the limit machinery from producing a single answer.
`
};



const faqQuestions = {
  obj1: {
    question: "What is a two-sided limit?",
    answer: "A two-sided limit is the standard limit notation lim(x→a) f(x) = L, requiring f(x) to approach the same value L as x approaches a from both directions—values less than a and values greater than a. No superscript appears on a, signaling this two-sided requirement.",
    sectionId: "1"
  },
  obj2: {
    question: "When does a two-sided limit exist?",
    answer: "A two-sided limit exists if and only if both one-sided limits exist and are equal. The left-hand limit and right-hand limit must both exist and have the same value. If they differ or either fails to exist, the two-sided limit does not exist.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you visualize a two-sided limit?",
    answer: "Trace the graph toward x = a from the left and note the y-value approached, then repeat from the right. If both traces converge to the same height, the two-sided limit exists and equals that height. The function value f(a) is irrelevant—only the approach matters.",
    sectionId: "3"
  },
  obj4: {
    question: "What causes a two-sided limit to not exist?",
    answer: "Three scenarios cause failure: jump discontinuities where left and right limits differ, infinite disagreement where one side tends to +∞ and the other to −∞, and oscillation where the function doesn't settle from at least one direction.",
    sectionId: "4"
  },
  obj5: {
    question: "How do continuous functions relate to two-sided limits?",
    answer: "For continuous functions, the limit equals the function value: lim(x→a) f(x) = f(a). Polynomials, exponentials, sine, and cosine are continuous everywhere on their domains, so direct substitution yields the limit immediately.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you evaluate a two-sided limit?",
    answer: "Start with direct substitution. If it produces an indeterminate form like 0/0, use algebraic manipulation—factor and cancel common terms, rationalize radicals, or simplify complex fractions until substitution becomes possible.",
    sectionId: "6"
  },
  obj7: {
    question: "Can two-sided limits exist at boundary points?",
    answer: "At domain boundaries, only one direction of approach is available, so only a one-sided limit makes sense. For example, √x at x = 0 has only a right-hand limit since negative inputs are outside the domain.",
    sectionId: "7"
  },
  obj8: {
    question: "How are derivatives defined using two-sided limits?",
    answer: "The derivative f'(a) = lim(h→0) [f(a+h) - f(a)]/h is a two-sided limit where h approaches 0 from both positive and negative values. Differentiability requires the same rate of change from both directions.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Two-Sided Limits",
    "description": "Learn two-sided limits: definition, existence conditions requiring equal one-sided limits, evaluation techniques, failure modes, and connection to derivatives.",
    "url": "https://www.learnmathclass.com/calculus/limits/two-sided",
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
      "name": "Two-Sided Limits"
    },
    "teaches": [
      "Definition of two-sided limits",
      "Existence condition: both one-sided limits must be equal",
      "Visualizing approach from both directions",
      "Failure modes: jump discontinuity, infinite disagreement, oscillation",
      "Evaluating limits with direct substitution and algebraic techniques",
      "Connection between two-sided limits and derivatives"
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
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Two-Sided Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/two-sided"
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

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Two-Sided Limits | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/calculus/limits/two-sided",
//          name: "name"
//       },
        
//        }
//     }

return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Two-Sided Limits: Definition & Existence | Learn Math Class",
      description: "Learn two-sided limits: definition, existence conditions requiring equal one-sided limits, evaluation techniques, failure modes, and connection to derivatives.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/two-sided",
      name: "Two-Sided Limits"
    },
  }
}
   }

// export default function TwoSidedPage({seoData,sectionsContent , introContent}) {

 export default function TwoSidedPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Two-Sided Limits</h1>
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
