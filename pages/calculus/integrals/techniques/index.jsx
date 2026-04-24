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
  "integration techniques",
  "u-substitution",
  "integration by parts",
  "trigonometric integrals",
  "trigonometric substitution",
  "partial fractions integration",
  "how to integrate",
  "substitution method calculus",
  "LIATE rule",
  "integration methods",
  "advanced integration",
  "integrate sin cos powers",
  "rational function integration",
  "choosing integration technique"
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
    title: `Why Techniques Are Needed`,
    content: `
Differentiation follows mechanical rules: the derivative of any elementary function can be computed by applying chain, product, and quotient rules systematically.

Integration has no such universal algorithm. Some elementary functions have no elementary antiderivative. Others have antiderivatives that are difficult to find without insight.

Techniques bridge this gap. They transform integrands into forms matching [known formulas](!/calculus/integrals/special). The transformation might involve changing variables, splitting products, or decomposing fractions—whatever reveals the underlying structure.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Substitution (u-Substitution)`,
    content: `
Substitution reverses the chain rule. If the integrand contains a function and its derivative, substitution simplifies.

**Method:** Let $u = g(x)$, so $du = g'(x)\\, dx$. Replace all $x$-expressions with $u$-expressions and integrate.

**Example:**

$$\\int 2x \\cos(x^2)\\, dx$$

Let $u = x^2$, so $du = 2x\\, dx$:

$$= \\int \\cos u\\, du = \\sin u + C = \\sin(x^2) + C$$

For definite integrals, convert the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Integration by Parts`,
    content: `
Integration by parts reverses the product rule:

$$\\int u\\, dv = uv - \\int v\\, du$$

**Method:** Identify factors $u$ and $dv$ in the integrand. Differentiate $u$ to get $du$; integrate $dv$ to get $v$. Apply the formula.

**Example:**

$$\\int x e^x\\, dx$$

Let $u = x$ and $dv = e^x\\, dx$. Then $du = dx$ and $v = e^x$:

$$= xe^x - \\int e^x\\, dx = xe^x - e^x + C = e^x(x - 1) + C$$

**Choosing $u$:** LIATE guides selection—Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Earlier types typically make better choices for $u$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Trigonometric Integrals`,
    content: `
Integrals involving powers of sine and cosine require strategic use of identities.

**Odd power of sine:** Save one $\\sin x$, convert remaining $\\sin^2 x = 1 - \\cos^2 x$, substitute $u = \\cos x$.

**Odd power of cosine:** Save one $\\cos x$, convert remaining $\\cos^2 x = 1 - \\sin^2 x$, substitute $u = \\sin x$.

**Both powers even:** Use half-angle identities:

$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}$$

**Example:**

$$\\int \\sin^3 x\\, dx = \\int \\sin x (1 - \\cos^2 x)\\, dx$$

Let $u = \\cos x$:

$$= -\\int (1 - u^2)\\, du = -u + \\frac{u^3}{3} + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Trigonometric Substitution`,
    content: `
Square roots of quadratics suggest trigonometric substitutions.

**For $\\sqrt{a^2 - x^2}$:** Let $x = a\\sin\\theta$, so $\\sqrt{a^2 - x^2} = a\\cos\\theta$

**For $\\sqrt{a^2 + x^2}$:** Let $x = a\\tan\\theta$, so $\\sqrt{a^2 + x^2} = a\\sec\\theta$

**For $\\sqrt{x^2 - a^2}$:** Let $x = a\\sec\\theta$, so $\\sqrt{x^2 - a^2} = a\\tan\\theta$

**Example:**

$$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx$$

Let $x = \\sin\\theta$, so $dx = \\cos\\theta\\, d\\theta$ and $\\sqrt{1 - x^2} = \\cos\\theta$:

$$= \\int \\frac{\\cos\\theta}{\\cos\\theta}\\, d\\theta = \\int d\\theta = \\theta + C = \\arcsin x + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Partial Fractions`,
    content: `
Rational functions—polynomials divided by polynomials—decompose into simpler fractions.

**Method:** Factor the denominator. Write the fraction as a sum of terms with linear or irreducible quadratic denominators. Solve for coefficients. Integrate each term.

**Example:**

$$\\int \\frac{1}{x^2 - 1}\\, dx = \\int \\frac{1}{(x-1)(x+1)}\\, dx$$

Decompose:

$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

Solving gives $A = 1/2$, $B = -1/2$:

$$= \\frac{1}{2}\\int \\frac{1}{x-1}\\, dx - \\frac{1}{2}\\int \\frac{1}{x+1}\\, dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Choosing the Right Technique`,
    content: `
Pattern recognition guides technique selection.

**Substitution:** Look for a function paired with its derivative. Expressions like $f(g(x)) \\cdot g'(x)$ signal substitution with $u = g(x)$.

**Parts:** Products of different function types—polynomial times exponential, polynomial times trigonometric, logarithm times polynomial.

**Trigonometric integrals:** Powers of $\\sin x$ and $\\cos x$, products of trigonometric functions.

**Trigonometric substitution:** Square roots of $a^2 - x^2$, $a^2 + x^2$, or $x^2 - a^2$.

**Partial fractions:** Rational functions with factorable denominators.

Multiple techniques often combine. A problem might require substitution followed by parts, or partial fractions followed by a trigonometric integral.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  id: `intro`,
  title: `Beyond Direct Formulas`,
  content: `
Most functions resist direct antidifferentiation. The integral of $e^{x^2}$ has no elementary formula. Even innocuous-looking expressions like $\\sqrt{1 + x^3}$ lack closed-form antiderivatives.

Integration techniques transform difficult integrals into tractable ones. Substitution reverses the chain rule. Integration by parts reverses the product rule. Partial fractions decompose rational functions. Trigonometric methods handle roots and powers.

No single algorithm covers all cases—unlike differentiation, which follows systematic rules. Success requires recognizing which technique applies and executing it correctly. This pattern-matching skill develops through practice.
`
};



const faqQuestions = {
  obj1: {
    question: "Why are integration techniques needed?",
    answer: "Unlike differentiation, which follows mechanical rules, integration has no universal algorithm. Many functions have no elementary antiderivative or are difficult to find without insight. Techniques transform integrands into forms matching known formulas.",
    sectionId: "1"
  },
  obj2: {
    question: "How does u-substitution work?",
    answer: "Substitution reverses the chain rule. Let u = g(x), so du = g'(x) dx. Replace all x-expressions with u-expressions and integrate. For definite integrals, convert the limits: when x = a, u = g(a). Look for a function paired with its derivative.",
    sectionId: "2"
  },
  obj3: {
    question: "What is integration by parts?",
    answer: "Integration by parts reverses the product rule: ∫u dv = uv − ∫v du. Identify factors u and dv, differentiate u to get du, integrate dv to get v, then apply the formula. The LIATE rule (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) guides choosing u.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you integrate powers of sine and cosine?",
    answer: "For odd power of sine: save one sin x, convert sin²x = 1 − cos²x, substitute u = cos x. For odd power of cosine: save one cos x, convert cos²x = 1 − sin²x, substitute u = sin x. For both even: use half-angle identities.",
    sectionId: "4"
  },
  obj5: {
    question: "When do you use trigonometric substitution?",
    answer: "Use trig substitution for square roots of quadratics. For √(a²−x²): let x = a sin θ. For √(a²+x²): let x = a tan θ. For √(x²−a²): let x = a sec θ. These substitutions eliminate the square root using Pythagorean identities.",
    sectionId: "5"
  },
  obj6: {
    question: "How does partial fractions work?",
    answer: "Partial fractions decompose rational functions into simpler fractions. Factor the denominator, write the fraction as a sum of terms with linear or irreducible quadratic denominators, solve for coefficients, then integrate each term using basic formulas.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you choose the right integration technique?",
    answer: "Pattern recognition guides selection. Substitution: function paired with its derivative. Parts: products of different function types. Trigonometric integrals: powers of sin and cos. Trig substitution: square roots of a²±x² or x²−a². Partial fractions: rational functions with factorable denominators.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integration Techniques",
    "description": "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
    "url": "https://www.learnmathclass.com/calculus/integrals/techniques",
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
      "name": "Integration Techniques"
    },
    "teaches": [
      "Why integration techniques are necessary",
      "U-substitution method",
      "Integration by parts with LIATE rule",
      "Trigonometric integrals with powers of sine and cosine",
      "Trigonometric substitution for square roots",
      "Partial fraction decomposition"
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
        "name": "Integration Techniques",
        "item": "https://www.learnmathclass.com/calculus/integrals/techniques"
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
  //       title: "Integration Techniques | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/integrals/techniques",
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
      title: "Integration Techniques: Substitution, Parts & More | Learn Math Class",
      description: "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/techniques",
      name: "Integration Techniques"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Integration Techniques</h1>
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
