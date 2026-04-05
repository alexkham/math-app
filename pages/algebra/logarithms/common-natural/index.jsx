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
  "common logarithm",
  "natural logarithm",
  "log base 10",
  "ln x",
  "log vs ln",
  "what is e",
  "euler number",
  "log base e",
  "natural log definition",
  "common log examples",
  "change of base formula",
  "ln to log conversion",
  "when to use ln vs log",
  "e 2.71828",
  "logarithm calculator conventions"
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
    title: `The Common Logarithm`,
    content: `The common logarithm is the [logarithm](!/algebra/logarithms) with base $10$. It is written $\\log(x)$ without a subscript, or $\\log_{10}(x)$ when clarity is needed.

Base $10$ connects directly to the decimal number system. Each power of $10$ corresponds to a place value: $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$. The common logarithm inverts this relationship, reporting how many powers of ten a number contains.

For powers of $10$, the values are immediate: $\\log(10) = 1$, $\\log(100) = 2$, $\\log(1000) = 3$, $\\log(0.1) = -1$, $\\log(0.01) = -2$. For other numbers, the integer part indicates the order of magnitude. Since $\\log(500) \\approx 2.699$, the number $500$ lies between $10^2 = 100$ and $10^3 = 1000$, closer to the latter.

Historically, common logarithms enabled calculation before electronic computers. Logarithm tables converted multiplication into addition — a far simpler operation to perform by hand. Though tables are obsolete, the notation persists, and base $10$ remains natural for human-scale quantities.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `The Natural Logarithm`,
    content: `The natural logarithm is the logarithm with base $e$, where $e \\approx 2.71828$. It is written $\\ln(x)$, read "natural log of $x$," or occasionally $\\log_e(x)$.

The number $e$ is not chosen arbitrarily. It emerges from the study of continuous growth: if a quantity grows at a rate proportional to its current size, $e$ appears in the formula describing that growth. Compound interest computed with infinitely many compounding periods, radioactive decay, population dynamics — all involve $e$ naturally.

In calculus, $e$ has a unique property: the derivative of $e^x$ is $e^x$ itself. No other base produces this self-replicating behavior under differentiation. The natural logarithm inherits a corresponding property: the derivative of $\\ln(x)$ is $1/x$, the simplest possible form.

The values $\\ln(1) = 0$ and $\\ln(e) = 1$ follow from the general [properties](!/algebra/logarithms/properties). Additional reference points: $\\ln(2) \\approx 0.693$, $\\ln(10) \\approx 2.303$. These approximations appear frequently in applications.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Number e`,
    content: `The constant $e$ is an irrational number approximately equal to $2.71828$. Its decimal expansion continues without repeating: $e = 2.718281828459045...$

One definition comes from compound interest. If $\\$1$ earns $100\\%$ interest per year, compounded $n$ times, the year-end balance is $(1 + 1/n)^n$. As $n$ increases — daily, hourly, every second, continuously — this expression approaches $e$:

$$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n$$

Another definition uses an infinite series:

$$e = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\frac{1}{4!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{1}{n!}$$

The number appears throughout mathematics far beyond logarithms — in probability, complex analysis, differential equations, and number theory. Its ubiquity justifies elevating $\\log_e$ to the status of "natural."`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Calculator Conventions`,
    content: `Scientific calculators and programming languages use varying conventions for logarithm notation, which can cause confusion.

Most scientific calculators have two buttons: $\\log$ for the common logarithm (base $10$) and $\\ln$ for the natural logarithm (base $e$). This matches standard mathematical notation. To compute a logarithm with a different base, the change of base formula is required.

Some programming languages diverge. In Python, the $\\texttt{math.log(x)}$ function computes the natural logarithm by default, not the common logarithm. The common logarithm requires $\\texttt{math.log10(x)}$. Other languages follow similar patterns — always check documentation.

Spreadsheet software like Excel uses $\\texttt{LOG(x)}$ for common logarithm and $\\texttt{LN(x)}$ for natural logarithm, matching calculator conventions. The function $\\texttt{LOG(x, base)}$ allows arbitrary bases.

When in doubt, test with known values. If the software returns $1$ for $\\log(10)$, it uses base $10$. If it returns $1$ for $\\log(e)$, it uses base $e$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `When to Use Which`,
    content: `The choice between common and natural logarithms depends on context.

Use common logarithms when working with orders of magnitude, human-readable scales, or decimal-based measurements. The Richter scale for earthquakes, the decibel scale for sound intensity, and the pH scale for acidity all employ base $10$. A change of $1$ on these scales represents a factor of $10$ — intuitive for decimal-system thinkers.

Use natural logarithms when working with continuous growth or decay, calculus, or theoretical derivations. Exponential models of the form $Ae^{kt}$ pair naturally with $\\ln$. Solving $e^{2x} = 5$ is cleanest with natural logarithms: $2x = \\ln(5)$, so $x = \\ln(5)/2$.

For solving general exponential [equations](!/algebra/logarithms/equations), either logarithm works. The equation $3^x = 7$ can be solved as $x = \\log(7)/\\log(3)$ or $x = \\ln(7)/\\ln(3)$ — both yield the same numerical answer. Choose whichever is available or conventional in the given context.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Converting Between Bases`,
    content: `The change of base formula from [logarithm rules](!/algebra/logarithms/rules) enables conversion between common and natural logarithms:

$$\\log_a(x) = \\frac{\\log_b(x)}{\\log_b(a)}$$

To convert a logarithm of any base to common logarithms:

$$\\log_a(x) = \\frac{\\log(x)}{\\log(a)}$$

To convert to natural logarithms:

$$\\log_a(x) = \\frac{\\ln(x)}{\\ln(a)}$$

For example, $\\log_2(10) = \\frac{\\ln(10)}{\\ln(2)} = \\frac{2.303}{0.693} \\approx 3.322$. Verification: $2^{3.322} \\approx 10$.

Converting between common and natural logarithms directly uses $\\ln(10) \\approx 2.303$:

$$\\ln(x) = \\log(x) \\cdot \\ln(10) \\approx 2.303 \\cdot \\log(x)$$

$$\\log(x) = \\frac{\\ln(x)}{\\ln(10)} \\approx \\frac{\\ln(x)}{2.303}$$

These conversions allow computation with any base using only the $\\log$ and $\\ln$ buttons available on standard calculators.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Comparing Graphs`,
    content: `The [graphs](!/algebra/logarithms/graphs) of $y = \\log(x)$ and $y = \\ln(x)$ share the same basic shape but differ in steepness.

Both pass through $(1, 0)$ — all logarithms satisfy $\\log_a(1) = 0$. The common logarithm passes through $(10, 1)$; the natural logarithm passes through $(e, 1) \\approx (2.718, 1)$. Both have vertical asymptotes at $x = 0$ and extend to $+\\infty$ as $x$ increases.

Since $e < 10$, the natural logarithm reaches $1$ at a smaller input value. This makes $\\ln(x)$ grow faster initially and appear steeper for small $x$. For any positive $x > 1$, $\\ln(x) > \\log(x)$ because the natural logarithm uses a smaller base.

The ratio between them is constant: $\\ln(x) = \\ln(10) \\cdot \\log(x) \\approx 2.303 \\cdot \\log(x)$. The graphs are vertical stretches of each other. Multiplying every output of the common logarithm by $\\ln(10)$ produces the natural logarithm.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
   title: `Two Bases That Dominate`,
  content: `Among infinitely many possible bases, two have earned special notation and widespread use. The common logarithm uses base $10$, aligning with the decimal system and appearing throughout applied sciences. The natural logarithm uses base $e \\approx 2.71828$, emerging from calculus and dominating theoretical mathematics. Understanding when to use each — and how to convert between them — is essential for practical computation.`,
};

const faqQuestions = {
  obj1: {
    question: "What is the common logarithm?",
    answer: "The common logarithm is log base 10, written as log(x) without a subscript. It measures how many powers of 10 a number contains. For example, log(100) = 2 because 10² = 100.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the natural logarithm?",
    answer: "The natural logarithm is log base e (≈ 2.71828), written as ln(x). It appears naturally in calculus and continuous growth/decay problems. The derivative of ln(x) is 1/x.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the number e?",
    answer: "The number e ≈ 2.71828 is an irrational constant that emerges from continuous compound interest: e = lim(1 + 1/n)^n as n→∞. It's the base of natural logarithms and appears throughout mathematics.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the difference between log and ln?",
    answer: "Log typically means base 10 (common logarithm), while ln means base e (natural logarithm). On calculators, LOG is base 10 and LN is base e. Some programming languages use log for natural log — always check conventions.",
    sectionId: "4"
  },
  obj5: {
    question: "When should I use log vs ln?",
    answer: "Use log (base 10) for orders of magnitude, decibels, pH, and Richter scales. Use ln (base e) for calculus, continuous growth/decay, and theoretical work. For solving equations, either works with change of base.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you convert between log and ln?",
    answer: "Use ln(x) = log(x) × ln(10) ≈ 2.303 × log(x), or log(x) = ln(x) / ln(10) ≈ ln(x) / 2.303. This follows from the change of base formula.",
    sectionId: "6"
  },
  obj7: {
    question: "Why is e important in mathematics?",
    answer: "The function e^x is its own derivative — no other base has this property. This makes e natural for calculus, differential equations, compound interest, and exponential growth/decay modeling.",
    sectionId: "3"
  },
  obj8: {
    question: "What is ln(1) and ln(e)?",
    answer: "ln(1) = 0 because e⁰ = 1. ln(e) = 1 because e¹ = e. These are the two fundamental reference points for the natural logarithm function.",
    sectionId: "2"
  },
  obj9: {
    question: "How do ln(x) and log(x) graphs compare?",
    answer: "Both pass through (1, 0) and have vertical asymptotes at x = 0. Since e < 10, ln(x) is steeper and ln(x) > log(x) for all x > 1. They differ by a constant factor: ln(x) ≈ 2.303 × log(x).",
    sectionId: "7"
  },
  obj10: {
    question: "How do you compute log base 2 on a calculator?",
    answer: "Use the change of base formula: log₂(x) = log(x)/log(2) or ln(x)/ln(2). For example, log₂(8) = log(8)/log(2) = 0.903/0.301 = 3.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Common and Natural Logarithms",
    "description": "Learn common logarithm (base 10) and natural logarithm (base e): definitions, the number e, calculator conventions, when to use each, and how to convert between them.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/common-natural",
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
      "name": "Common and Natural Logarithms"
    },
    "teaches": [
      "Common logarithm (base 10) definition",
      "Natural logarithm (base e) definition",
      "The number e and its properties",
      "Calculator and programming conventions",
      "When to use common vs natural logarithms",
      "Converting between logarithm bases",
      "Comparing log and ln graphs"
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
        "name": "Common and Natural Logarithms",
        "item": "https://www.learnmathclass.com/algebra/logarithms/common-natural"
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
      title: "Common & Natural Logarithms: Log vs Ln Explained | Learn Math Class",
      description: "Learn common logarithm (base 10) and natural logarithm (base e): definitions, the number e, calculator conventions, when to use each, and how to convert between them.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/common-natural",
      name: "Common and Natural Logarithms"
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Common Natural Logarithms</h1>
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
