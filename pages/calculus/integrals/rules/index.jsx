
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
  "integration rules",
  "integral properties",
  "fundamental theorem of calculus",
  "sum rule integration",
  "constant multiple rule integral",
  "additivity of integrals",
  "reversing integration limits",
  "FTC part 1",
  "FTC part 2",
  "integral comparison properties",
  "linearity of integrals",
  "antiderivative evaluation",
  "definite integral rules",
  "integration calculus laws"
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
    title: `Sum and Difference Rules`,
    content: `
Integrals distribute over addition and subtraction:

$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

$$\\int [f(x) - g(x)]\\, dx = \\int f(x)\\, dx - \\int g(x)\\, dx$$

These rules apply to both definite and indefinite integrals. They allow complex integrands to be broken into simpler pieces, each handled separately.

For example:

$$\\int (x^3 + \\sin x)\\, dx = \\int x^3\\, dx + \\int \\sin x\\, dx = \\frac{x^4}{4} - \\cos x + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Constant Multiple Rule`,
    content: `
Constants factor out of integrals:

$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

This holds for any constant $c$. The rule simplifies computation by separating numerical coefficients from the integration process.

For example:

$$\\int 7e^x\\, dx = 7 \\int e^x\\, dx = 7e^x + C$$

Combined with the sum rule, linearity handles any linear combination:

$$\\int [af(x) + bg(x)]\\, dx = a\\int f(x)\\, dx + b\\int g(x)\\, dx$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Additivity Over Intervals`,
    content: `
For [definite integrals](!/calculus/integrals/definite), integration over adjacent intervals combines:

$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$

This property allows splitting an integral at any intermediate point. It proves essential for piecewise functions, where different formulas apply on different subintervals.

The property extends naturally: an integral over $[a, d]$ equals the sum of integrals over $[a, b]$, $[b, c]$, and $[c, d]$ for any $a < b < c < d$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Reversing Limits of Integration`,
    content: `
Swapping the limits of a definite integral negates the result:

$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$

This follows from the Riemann sum definition. Integrating from $a$ to $b$ accumulates in one direction; integrating from $b$ to $a$ accumulates in the reverse direction.

A useful consequence: if $a = b$, the integral vanishes:

$$\\int_a^a f(x)\\, dx = 0$$

No interval means no accumulation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Fundamental Theorem of Calculus — Part 1`,
    content: `
Define the accumulation function:

$$F(x) = \\int_a^x f(t)\\, dt$$

Part 1 of the Fundamental Theorem states that if $f$ is continuous, then $F$ is differentiable and:

$$F'(x) = f(x)$$

Differentiation undoes integration. The rate of change of accumulated area equals the integrand's value at the boundary.

This result establishes that every continuous function has an antiderivative—namely, its accumulation function. The theorem guarantees antiderivatives exist, even when no elementary formula expresses them.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Fundamental Theorem of Calculus — Part 2`,
    content: `
If $F$ is any antiderivative of $f$ (meaning $F'(x) = f(x)$), then:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This is the computational engine of integral calculus. Rather than computing limits of Riemann sums, find an antiderivative and evaluate at the endpoints.

The notation $F(x)\\Big|_a^b$ or $[F(x)]_a^b$ means $F(b) - F(a)$.

Example:

$$\\int_1^3 x^2\\, dx = \\frac{x^3}{3}\\Big|_1^3 = \\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Why Differentiation and Integration Are Inverses`,
    content: `
The two parts of the Fundamental Theorem express inverse relationships.

**Part 1:** Differentiating an integral recovers the integrand.

$$\\frac{d}{dx} \\int_a^x f(t)\\, dt = f(x)$$

**Part 2:** Integrating a derivative recovers the function (up to boundary values).

$$\\int_a^b F'(x)\\, dx = F(b) - F(a)$$

These are two directions of the same relationship. Integration accumulates; differentiation measures instantaneous rate. Each operation undoes the other, connecting the geometry of area to the algebra of rates of change.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Comparison Properties`,
    content: `
Inequalities between integrands yield inequalities between integrals.

**Nonnegativity:** If $f(x) \\geq 0$ on $[a, b]$, then:

$$\\int_a^b f(x)\\, dx \\geq 0$$

**Monotonicity:** If $f(x) \\leq g(x)$ on $[a, b]$, then:

$$\\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$

**Bounding:** If $m \\leq f(x) \\leq M$ on $[a, b]$, then:

$$m(b - a) \\leq \\int_a^b f(x)\\, dx \\leq M(b - a)$$

These properties enable estimation when exact computation is difficult or impossible.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

 const introContent = {
  id: `intro`,
  title: `The Algebra of Integrals`,
  content: `
Integration obeys algebraic rules that mirror those of differentiation. Sums split, constants factor out, and intervals combine. These properties transform complex integrals into manageable pieces.

The deepest result is the Fundamental Theorem of Calculus, which bridges the two faces of integration. Part 1 says differentiation undoes integration. Part 2 says definite integrals can be computed via antiderivatives:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This theorem converts area computation—a limiting process involving infinite sums—into simple evaluation of an antiderivative at two points. It explains why mastering indefinite integration unlocks definite integration as well.
`
};


const faqQuestions = {
  obj1: {
    question: "What are the sum and difference rules for integration?",
    answer: "Integrals distribute over addition and subtraction: ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx, and similarly for differences. These rules let you break complex integrands into simpler pieces handled separately.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the constant multiple rule for integration?",
    answer: "Constants factor out of integrals: ∫c·f(x) dx = c∫f(x) dx. Combined with the sum rule, this gives linearity: ∫[af(x) + bg(x)] dx = a∫f(x) dx + b∫g(x) dx.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the additivity property of integrals?",
    answer: "For definite integrals, integration over adjacent intervals combines: ∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx = ∫ₐᶜ f(x) dx. This allows splitting integrals at any intermediate point, essential for piecewise functions.",
    sectionId: "3"
  },
  obj4: {
    question: "What happens when you reverse the limits of integration?",
    answer: "Swapping limits negates the result: ∫ₐᵇ f(x) dx = −∫ᵇᵃ f(x) dx. Integrating in reverse accumulates in the opposite direction. When a = b, the integral equals zero since there's no interval.",
    sectionId: "4"
  },
  obj5: {
    question: "What is Part 1 of the Fundamental Theorem of Calculus?",
    answer: "If F(x) = ∫ₐˣ f(t) dt and f is continuous, then F'(x) = f(x). Differentiation undoes integration—the derivative of the accumulation function equals the integrand at the boundary. This guarantees every continuous function has an antiderivative.",
    sectionId: "5"
  },
  obj6: {
    question: "What is Part 2 of the Fundamental Theorem of Calculus?",
    answer: "If F is any antiderivative of f (F' = f), then ∫ₐᵇ f(x) dx = F(b) − F(a). This is the computational engine of calculus: find an antiderivative and evaluate at the endpoints instead of computing Riemann sum limits.",
    sectionId: "6"
  },
  obj7: {
    question: "Why are differentiation and integration inverse operations?",
    answer: "Part 1 shows differentiating an integral recovers the integrand: d/dx ∫ₐˣ f(t) dt = f(x). Part 2 shows integrating a derivative recovers the function: ∫ₐᵇ F'(x) dx = F(b) − F(a). Each operation undoes the other.",
    sectionId: "7"
  },
  obj8: {
    question: "What are the comparison properties of integrals?",
    answer: "If f(x) ≥ 0 on [a,b], then ∫f ≥ 0. If f(x) ≤ g(x), then ∫f ≤ ∫g. If m ≤ f(x) ≤ M, then m(b−a) ≤ ∫f ≤ M(b−a). These properties enable estimation when exact computation is difficult.",
    sectionId: "8"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integration Rules",
    "description": "Master integration rules: sum, difference, constant multiple, additivity over intervals, the Fundamental Theorem of Calculus (Parts 1 & 2), and comparison properties.",
    "url": "https://www.learnmathclass.com/calculus/integrals/rules",
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
      "name": "Integration Rules"
    },
    "teaches": [
      "Sum and difference rules for integrals",
      "Constant multiple and linearity rules",
      "Additivity over intervals and reversing limits",
      "Fundamental Theorem of Calculus Part 1",
      "Fundamental Theorem of Calculus Part 2",
      "Comparison and bounding properties"
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
        "name": "Integration Rules",
        "item": "https://www.learnmathclass.com/calculus/integrals/rules"
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
  //       title: "Integration Rules | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/rules",
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
      title: "Integration Rules & Fundamental Theorem | Learn Math Class",
      description: "Master integration rules: sum, difference, constant multiple, additivity over intervals, the Fundamental Theorem of Calculus (Parts 1 & 2), and comparison properties.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/rules",
      name: "Integration Rules"
    },
  }
}

   }

// export default function RulesPage({seoData,sectionsContent , introContent}) {
export default function RulesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integration Rules</h1>
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
