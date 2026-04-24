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
  "indefinite integral",
  "antiderivative",
  "constant of integration",
  "indefinite integral notation",
  "basic antiderivative formulas",
  "power rule integration",
  "integral of x^n",
  "linearity of integrals",
  "verify antiderivative",
  "indefinite vs definite integral",
  "find antiderivative",
  "integration calculus",
  "integral plus C",
  "reverse differentiation"
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
    title: `Antiderivatives`,
    content: `
A function $F$ is an antiderivative of $f$ if:

$$F'(x) = f(x)$$

The antiderivative reverses differentiation. Given $f(x) = 2x$, the function $F(x) = x^2$ is an antiderivative because $(x^2)' = 2x$.

But $F(x) = x^2 + 5$ is also an antiderivative—its derivative is likewise $2x$. So is $x^2 - 17$, or $x^2 + \\pi$. Any function of the form $x^2 + C$ differentiates to $2x$.

Antiderivatives are not unique. They form a family of functions, all differing by constants.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Constant of Integration`,
    content: `
If $F(x)$ is one antiderivative of $f(x)$, then every antiderivative has the form:

$$F(x) + C$$

where $C$ is an arbitrary constant. This follows from a basic fact: if two functions have the same derivative on an interval, they differ by a constant.

The "$+ C$" in indefinite integrals is not optional notation—it represents the complete answer. Omitting it gives only one member of the family when infinitely many exist.

Initial conditions pin down $C$. If you know that $F(0) = 3$, for instance, you can solve for the specific constant that satisfies this requirement.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Notation`,
    content: `
The indefinite integral is written:

$$\\int f(x)\\, dx = F(x) + C$$

The integral sign $\\int$ without limits indicates an indefinite integral. The integrand $f(x)$ is the function being integrated. The differential $dx$ specifies the variable.

The result is a function (or family of functions), not a number. This contrasts with the [definite integral](!/calculus/integrals/definite), which produces a numerical value.

The notation mirrors the definite integral deliberately. The Fundamental Theorem of Calculus connects them: indefinite integrals provide the antiderivatives that definite integrals evaluate.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Basic Antiderivative Formulas`,
    content: `
Several antiderivatives appear constantly and should be memorized.

**Power rule** (for $n \\neq -1$):

$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C$$

**Reciprocal:**

$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

**Exponential:**

$$\\int e^x\\, dx = e^x + C$$

**Trigonometric:**

$$\\int \\cos x\\, dx = \\sin x + C \\qquad \\int \\sin x\\, dx = -\\cos x + C$$

The [special integrals](!/calculus/integrals/special) page provides a more complete list.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Linearity of Indefinite Integrals`,
    content: `
Indefinite integrals obey the same [linearity rules](!/calculus/integrals/rules) as definite integrals.

**Sum rule:**

$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

**Constant multiple rule:**

$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

These rules reduce complex integrands to combinations of simpler ones. For example:

$$\\int (3x^2 + 5x - 2)\\, dx = 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C = x^3 + \\frac{5x^2}{2} - 2x + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Verifying Antiderivatives`,
    content: `
Integration has a built-in check: differentiate your answer.

If $\\int f(x)\\, dx = F(x) + C$, then $F'(x)$ must equal $f(x)$. If it doesn't, an error occurred.

For example, suppose you compute:

$$\\int \\sec^2 x\\, dx = \\tan x + C$$

Verify: $(\\tan x)' = \\sec^2 x$. Correct.

This check catches sign errors, missing constants, and algebraic mistakes. It works because differentiation is mechanical—once you have a candidate antiderivative, verification is straightforward.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Connection to Definite Integrals`,
    content: `
Indefinite and definite integrals serve different purposes but are linked by the Fundamental Theorem of Calculus.

The indefinite integral finds antiderivatives:

$$\\int f(x)\\, dx = F(x) + C$$

The definite integral uses an antiderivative to compute accumulated quantity:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

The constant $C$ cancels when evaluating $F(b) - F(a)$, so any antiderivative works. This connection, detailed on the [rules](!/calculus/integrals/rules) page, is why mastering indefinite integration enables computation of definite integrals.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  title: `Reversing Differentiation`,
  content: `
Differentiation takes a function and produces its rate of change. The indefinite integral reverses this process: given a rate of change, find the original function.

If $F'(x) = f(x)$, then $F$ is an antiderivative of $f$. The indefinite integral collects all such antiderivatives:

$$\\int f(x)\\, dx = F(x) + C$$

The constant $C$ reflects a fundamental ambiguity. Since the derivative of any constant is zero, functions differing by a constant share the same derivative. The family $F(x) + C$ captures every function whose derivative equals $f(x)$.

Finding antiderivatives is the central challenge. Unlike differentiation, which follows mechanical rules, integration demands pattern recognition, technique, and sometimes ingenuity.
`
};

const faqQuestions = {
  obj1: {
    question: "What is an antiderivative?",
    answer: "A function F is an antiderivative of f if F'(x) = f(x). Antiderivatives reverse differentiation. They are not unique—if F is an antiderivative of f, then so is F + C for any constant C, forming a family of functions.",
    sectionId: "1"
  },
  obj2: {
    question: "Why do indefinite integrals have +C?",
    answer: "The constant of integration C represents the complete family of antiderivatives. Since the derivative of any constant is zero, functions differing by a constant share the same derivative. Omitting +C gives only one member when infinitely many exist.",
    sectionId: "2"
  },
  obj3: {
    question: "What does indefinite integral notation mean?",
    answer: "The notation ∫f(x) dx = F(x) + C means the indefinite integral. The ∫ symbol without limits indicates an indefinite integral, f(x) is the integrand, and dx specifies the variable. The result is a function family, not a number.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the basic antiderivative formulas?",
    answer: "Key formulas include: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1; ∫1/x dx = ln|x| + C; ∫eˣ dx = eˣ + C; ∫cos x dx = sin x + C; ∫sin x dx = -cos x + C. These should be memorized.",
    sectionId: "4"
  },
  obj5: {
    question: "What are the linearity rules for indefinite integrals?",
    answer: "Sum rule: ∫[f(x) + g(x)] dx = ∫f(x) dx + ∫g(x) dx. Constant multiple rule: ∫c·f(x) dx = c∫f(x) dx. These rules let you break complex integrands into simpler pieces.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you verify an antiderivative?",
    answer: "Differentiate your answer. If ∫f(x) dx = F(x) + C, then F'(x) must equal f(x). This check catches sign errors, missing constants, and algebraic mistakes because differentiation is mechanical and straightforward.",
    sectionId: "6"
  },
  obj7: {
    question: "How are indefinite and definite integrals related?",
    answer: "The Fundamental Theorem of Calculus connects them. Indefinite integrals find antiderivatives: ∫f(x) dx = F(x) + C. Definite integrals evaluate: ∫ₐᵇ f(x) dx = F(b) − F(a). The constant C cancels when computing F(b) − F(a).",
    sectionId: "7"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Indefinite Integrals",
    "description": "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
    "url": "https://www.learnmathclass.com/calculus/integrals/indefinite",
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
      "name": "Indefinite Integrals"
    },
    "teaches": [
      "Definition and properties of antiderivatives",
      "The constant of integration and its meaning",
      "Indefinite integral notation",
      "Basic antiderivative formulas",
      "Linearity rules for indefinite integrals",
      "Verifying antiderivatives by differentiation"
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
        "name": "Indefinite Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/indefinite"
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
  //       title: "Indefinite Integrals | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/indefinite",
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
      title: "Indefinite Integrals: Antiderivatives & Formulas | Learn Math Class",
      description: "Learn indefinite integrals and antiderivatives: the constant of integration, notation, basic formulas (power rule, exponential, trig), linearity rules, verification, and connection to definite integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/indefinite",
      name: "Indefinite Integrals"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Indefinite Integrals</h1>
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
