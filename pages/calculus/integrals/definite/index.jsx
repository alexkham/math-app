import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "definite integral",
  "definite integral definition",
  "Riemann sum",
  "area under curve",
  "signed area integral",
  "integral notation",
  "definite integral properties",
  "integral bounds",
  "evaluate definite integral",
  "average value function",
  "integral additivity",
  "definite integral calculus",
  "Riemann sum limit",
  "area between curve and axis"
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
    title: `The Riemann Sum Construction`,
    content: `
The definite integral arises as a limit of approximating sums.

Partition the interval $[a, b]$ into $n$ subintervals of width $\\Delta x = (b - a)/n$. In each subinterval, choose a sample point $x_i^*$ and form the rectangle with height $f(x_i^*)$ and width $\\Delta x$. The total area of these rectangles is the Riemann sum:

$$S_n = \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

As $n \\to \\infty$ and the rectangles become infinitely thin, the Riemann sum approaches the definite integral:

$$\\int_a^b f(x)\\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

The choice of sample points—left endpoints, right endpoints, midpoints—affects individual Riemann sums but not the limit, provided $f$ is integrable.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Notation and Meaning`,
    content: `
The definite integral

$$\\int_a^b f(x)\\, dx$$

consists of several components. The lower limit $a$ and upper limit $b$ bound the interval of integration. The integrand $f(x)$ specifies what is being accumulated. The differential $dx$ indicates the variable of integration.

The result is a number, not a function. The variable $x$ is a dummy variable—a placeholder that disappears after integration. The expressions

$$\\int_0^1 t^2\\, dt \\qquad \\int_0^1 u^2\\, du \\qquad \\int_0^1 x^2\\, dx$$

all represent the same value: $1/3$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Signed Area Interpretation`,
    content: `
The definite integral computes area with sign.

Where $f(x) > 0$, the region between the curve and the $x$-axis lies above the axis and contributes positive area. Where $f(x) < 0$, the region lies below the axis and contributes negative area.

The integral sums these signed contributions:

$$\\int_a^b f(x)\\, dx = (\\text{area above}) - (\\text{area below})$$

This means the integral can be zero even when substantial area exists—positive and negative regions may cancel. It can also be negative when the curve lies predominantly below the axis.

To find total unsigned area, integrate the absolute value:

$$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Properties of Definite Integrals`,
    content: `
Definite integrals satisfy several fundamental properties.

**Additivity over intervals:**

$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$

**Reversing limits negates the integral:**

$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$

**Zero-width interval:**

$$\\int_a^a f(x)\\, dx = 0$$

**Comparison:** If $f(x) \\leq g(x)$ on $[a, b]$, then

$$\\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Linearity`,
    content: `
Definite integrals respect addition and scalar multiplication.

**Sum rule:**

$$\\int_a^b [f(x) + g(x)]\\, dx = \\int_a^b f(x)\\, dx + \\int_a^b g(x)\\, dx$$

**Constant multiple rule:**

$$\\int_a^b c \\cdot f(x)\\, dx = c \\int_a^b f(x)\\, dx$$

These [rules](!/calculus/integrals/rules) allow complex integrands to be broken into simpler pieces, each integrated separately and then combined.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Computing Definite Integrals`,
    content: `
Direct computation via Riemann sums is tedious. The Fundamental Theorem of Calculus provides the shortcut.

If $F$ is any antiderivative of $f$—meaning $F'(x) = f(x)$—then:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This result, detailed on the [rules](!/calculus/integrals/rules) page, transforms integration from a limiting process into a two-step procedure: find an antiderivative, then evaluate at the endpoints.

The notation $F(x) \\Big|_a^b$ or $[F(x)]_a^b$ denotes the evaluation $F(b) - F(a)$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Average Value of a Function`,
    content: `
The average value of $f$ on the interval $[a, b]$ is:

$$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$

This generalizes the familiar average of discrete values. The integral computes the total, and division by the interval length yields the mean.

Geometrically, $f_{\\text{avg}}$ is the height of a rectangle with base $[a, b]$ whose area equals the area under the curve. The Mean Value Theorem for Integrals guarantees that a continuous function actually attains this average value at some point $c$ in $(a, b)$:

$$f(c) = f_{\\text{avg}}$$
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  title: `From Sums to Areas`,
  content: `
The definite integral answers a concrete question: what is the total accumulated quantity between two points? Geometrically, this corresponds to the area between a curve and the horizontal axis—but with a crucial refinement. Regions below the axis contribute negative area, making the integral a signed quantity.

The notation

$$\\int_a^b f(x)\\, dx$$

specifies the integrand $f(x)$, the variable of integration $x$, and the bounds from $a$ to $b$. The result is a single number, not a function. This number represents net accumulation: the sum of infinitely many infinitesimal contributions $f(x)\\, dx$ as $x$ traverses the interval.

Riemann sums provide the rigorous foundation. Approximate the region with rectangles, compute their total area, and take the limit as the rectangles become infinitely thin. What emerges is not an approximation but an exact value—the definite integral.
`
};



const faqQuestions = {
  obj1: {
    question: "What is a Riemann sum?",
    answer: "A Riemann sum approximates a definite integral by partitioning the interval into subintervals, forming rectangles with heights f(x*) and width Δx, then summing their areas. As the number of rectangles approaches infinity, the Riemann sum approaches the definite integral.",
    sectionId: "1"
  },
  obj2: {
    question: "What does definite integral notation mean?",
    answer: "In ∫ₐᵇ f(x) dx, the lower limit a and upper limit b bound the interval, f(x) is the integrand being accumulated, and dx indicates the variable of integration. The result is a number, not a function. The variable x is a dummy variable that disappears after integration.",
    sectionId: "2"
  },
  obj3: {
    question: "What is signed area in integration?",
    answer: "The definite integral computes area with sign: regions above the x-axis contribute positive area, regions below contribute negative area. The integral sums these signed contributions, so it can be zero (when areas cancel) or negative (when more area lies below the axis).",
    sectionId: "3"
  },
  obj4: {
    question: "What are the properties of definite integrals?",
    answer: "Key properties include: additivity over intervals (∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ), reversing limits negates the integral (∫ₐᵇ = −∫ᵇₐ), zero-width intervals give zero (∫ₐᵃ = 0), and comparison (if f ≤ g then ∫f ≤ ∫g).",
    sectionId: "4"
  },
  obj5: {
    question: "What is the linearity property of integrals?",
    answer: "Definite integrals respect addition and scalar multiplication: ∫[f + g] = ∫f + ∫g (sum rule) and ∫c·f = c·∫f (constant multiple rule). This allows complex integrands to be broken into simpler pieces, integrated separately, then combined.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you compute a definite integral?",
    answer: "The Fundamental Theorem of Calculus provides the method: find an antiderivative F where F'(x) = f(x), then evaluate ∫ₐᵇ f(x) dx = F(b) − F(a). This transforms integration from a limiting process into finding antiderivatives and evaluating at endpoints.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the average value of a function?",
    answer: "The average value of f on [a,b] is f_avg = (1/(b−a))∫ₐᵇ f(x) dx. Geometrically, it's the height of a rectangle with base [a,b] whose area equals the area under the curve. The Mean Value Theorem guarantees f attains this average at some point c in (a,b).",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Definite Integrals",
    "description": "Learn definite integrals: Riemann sum construction, integral notation, signed area interpretation, properties, linearity, computing with antiderivatives, and average value of a function.",
    "url": "https://www.learnmathclass.com/calculus/integrals/definite",
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
      "name": "Definite Integrals"
    },
    "teaches": [
      "Riemann sum construction and limit definition",
      "Definite integral notation and meaning",
      "Signed area interpretation",
      "Properties: additivity, reversing limits, comparison",
      "Linearity: sum rule and constant multiple rule",
      "Average value of a function"
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
        "name": "Definite Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/definite"
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
  //       title: " Definite Integrals | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/definite",
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
          title: "Definite Integrals: Riemann Sums & Properties | Learn Math Class",
          description: "Learn definite integrals: Riemann sum construction, integral notation, signed area interpretation, properties, linearity, computing with antiderivatives, and average value of a function.",
          keywords: keyWords.join(", "),
          url: "/calculus/integrals/definite",
          name: "Definite Integrals"
        },
      }
    }

   }
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Definite Integrals</h1>
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
