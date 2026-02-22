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
  "irrational exponents",
  "2^pi meaning",
  "a^x real exponent",
  "continuous extension exponents",
  "exponent definition real numbers",
  "irrational power",
  "exponential function domain",
  "a^sqrt(2)",
  "define irrational exponent",
  "rational approximation exponents",
  "exponent laws irrational",
  "real number exponent",
  "base must be positive",
  "complete exponent definition",
  "extending exponents to reals"
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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj1: {
  title: `The Problem`,
  content: `The expression $2^3$ means multiply $2$ by itself three times. The expression $2^{-1}$ means take the reciprocal. The expression $2^{3/4}$ means a combination of root and power. Each of these follows from a clear definition.

But what is $2^\\pi$? The exponent $\\pi$ is not a natural number, not a negative integer, and not a fraction. It cannot be expressed as a ratio of two integers. The repeated multiplication idea is meaningless, and the root interpretation does not apply — there is no "$\\pi$th root" in the sense that $a^{1/n}$ defines an $n$th root.

Yet $2^\\pi$ must have a value if the [laws of exponents](!/algebra/powers/exponent-rules/) are to work for all real numbers. The product rule requires $2^\\pi \\cdot 2^{1-\\pi} = 2^1 = 2$. The power rule requires $(2^\\pi)^{1/\\pi} = 2$. The algebraic framework assumes this number exists. The question is how to define it.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Intuition Through Approximation`,
  content: `The number $\\pi$ is irrational, but it can be trapped between rational numbers to any desired precision.

$\\pi$ lies between $3$ and $4$. So $2^\\pi$ lies between $2^3 = 8$ and $2^4 = 16$.

Narrowing: $\\pi$ lies between $3.1$ and $3.2$. So $2^\\pi$ lies between $2^{3.1} \\approx 8.574$ and $2^{3.2} \\approx 9.190$.

Narrowing further: $\\pi$ lies between $3.14$ and $3.15$. So $2^\\pi$ lies between $2^{3.14} \\approx 8.815$ and $2^{3.15} \\approx 8.876$.

Each rational approximation of $\\pi$ gives a value of $2^x$ that we already know how to compute — using [rational exponents](!/algebra/powers/rational-exponents). As the rational bounds squeeze closer to $\\pi$, the corresponding powers squeeze closer to a single value.

That limiting value is $2^\\pi \\approx 8.825$. It is not reached by any single rational exponent, but it is pinned down uniquely by the sequence of rational approximations closing in from both sides.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Why This Works`,
  content: `The approximation method succeeds because the function $a^x$, when restricted to rational values of $x$, behaves smoothly. Plot the points $(x, 2^x)$ for rational $x$ and the result is a curve with no gaps, no jumps, and no sudden direction changes.

Between any two rational numbers there are infinitely many more. The rational values of $2^x$ fill the curve so densely that only isolated points — corresponding to irrational exponents — are missing.

Defining $2^\\pi$ as the limit of $2^{r_n}$ for a sequence of rationals $r_n \\to \\pi$ fills in exactly those missing points. The process is called continuous extension — the smooth behavior of $a^x$ at rational points guarantees that the extension to irrational points is unique and well-defined.

The result is a complete curve: $a^x$ is now defined for every real number $x$, with no holes remaining on the number line.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Domain Restriction: $a > 0$`,
  content: `Every previous extension tightened the restriction on the base. [Natural exponents](!/algebra/powers/natural-exponents) allowed any real base. [Negative exponents](!/algebra/powers/negative-exponents) required $a \\neq 0$. [Rational exponents](!/algebra/powers/rational-exponents) with even roots required $a \\geq 0$. Irrational exponents tighten it once more: the base must be strictly positive.

The reason is that negative bases produce erratic behavior under dense rational exponents. Consider $(-1)^x$ at rationals near $\\frac{1}{2}$. The value $(-1)^{1/3} = -1$, but $(-1)^{1/2}$ is undefined in the reals. Nearby rational exponents alternate between real and undefined, making it impossible to define a smooth limiting value.

For $a > 0$, no such problem arises. The function $a^x$ is positive for all rational $x$, changes smoothly, and extends without ambiguity to every irrational $x$. The restriction $a > 0$ is the price of completeness — it is what allows $a^x$ to be defined for the entire real number line.

Zero is excluded as well. The expression $0^x$ equals $0$ for positive $x$ and is undefined for negative $x$ (since $0^{-n} = \\frac{1}{0^n}$), so no continuous extension to all real exponents is possible.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `The Laws Still Hold`,
  content: `By now the pattern is familiar: each extension of the exponent definition preserves the [laws of exponents](!/algebra/powers/exponent-rules/), and the irrational case is no different.

The product rule $a^m \\cdot a^n = a^{m+n}$ holds when $m$ and $n$ are irrational. The proof relies on the fact that the rule holds for all rational approximations, and the limiting process preserves algebraic identities.

The same continuity argument extends every other law — quotient rule, power of a power, power of a product, power of a quotient. If a rule works for every rational exponent, and irrational exponents are defined as limits of rational ones, then the rule works for irrational exponents as well.

No separate derivation is needed. Three rounds of verification — natural, negative, rational — established the laws for all rational exponents. The continuous extension to irrationals carries those laws across the finish line automatically.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Completing the Picture`,
  content: `The definition of $a^x$ has now been built in four stages, each extending the previous one while preserving the same set of rules.

[Natural exponents](!/algebra/powers/natural-exponents) defined $a^n$ as repeated multiplication for $n = 1, 2, 3, \\ldots$ — covering the positive integers on the number line.

[Negative exponents](!/algebra/powers/negative-exponents) defined $a^0 = 1$ and $a^{-n} = \\frac{1}{a^n}$, extending coverage to zero and all negative integers.

[Rational exponents](!/algebra/powers/rational-exponents) defined $a^{m/n} = \\sqrt[n]{a^m}$, filling in every fraction between and beyond the integers.

Irrational exponents defined $a^x$ for the remaining points through continuous extension, completing the real number line.

The result: for any base $a > 0$ and any real exponent $x$, the expression $a^x$ is defined, positive, and obeys every law of exponents. This is the foundation on which [exponential functions](!/algebra/powers/exponential-functions) are built — functions where the base is fixed and $x$ becomes a variable free to range over all real numbers.`,
  before: ``,
  after: ``,
  link: '',
},


    obj7:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Filling in the Gaps",
  content: `[Natural exponents](!/algebra/powers/natural-exponents) covered the positive integers. [Negative exponents](!/algebra/powers/negative-exponents) extended through zero and below. [Rational exponents](!/algebra/powers/rational-exponents) filled in every fraction. But the real number line still has gaps — irrational numbers like $\\sqrt{2}$ and $\\pi$ sit between the rationals, and a complete definition of $a^x$ must account for them.`
}

const faqQuestions = {
  obj1: {
    question: "What is an irrational exponent?",
    answer: "An irrational exponent is a power where the exponent is an irrational number like π or √2. Since irrational numbers can't be written as fractions, these exponents are defined through limits of rational approximations. For example, 2^π ≈ 8.825.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you calculate 2^π?",
    answer: "Approximate π with rationals: 3.14, 3.141, 3.1415... Calculate 2^3.14, 2^3.141, etc. using rational exponents. As approximations get closer to π, the values converge to 2^π ≈ 8.825. The limit defines the value.",
    sectionId: "2"
  },
  obj3: {
    question: "Why must the base be positive for irrational exponents?",
    answer: "Negative bases behave erratically with dense rational exponents. Near x = 1/2, some rationals give real values for (-1)^x while others are undefined. No smooth limit exists. Only positive bases produce continuous, well-defined functions for all real exponents.",
    sectionId: "4"
  },
  obj4: {
    question: "What is continuous extension?",
    answer: "Continuous extension fills gaps in a function by taking limits. Since a^x is defined and smooth for all rational x, irrational values are defined as limits: a^π = lim(a^r) as rational r approaches π. The smooth behavior guarantees a unique value.",
    sectionId: "3"
  },
  obj5: {
    question: "Do the laws of exponents work for irrational exponents?",
    answer: "Yes. Since the laws hold for all rational exponents, and irrational exponents are defined as limits of rationals, the laws carry over automatically. Product rule, quotient rule, power of a power — all work for any real exponents.",
    sectionId: "5"
  },
  obj6: {
    question: "Why can't zero be used as a base with real exponents?",
    answer: "0^x = 0 for positive x, but 0^(-n) = 1/0^n is undefined. There's no continuous way to define 0^x across all real x. The exponential function a^x requires a > 0 for a complete definition on the real line.",
    sectionId: "4"
  },
  obj7: {
    question: "What is 2^√2?",
    answer: "2^√2 is defined as the limit of 2^r where r approaches √2 through rationals. Since √2 ≈ 1.414, we have 2^√2 ≈ 2^1.414 ≈ 2.665. The exact value is irrational but uniquely determined by the limiting process.",
    sectionId: "2"
  },
  obj8: {
    question: "How does this complete the definition of exponents?",
    answer: "Natural exponents cover positive integers. Negative exponents add zero and negatives. Rational exponents fill fractions. Irrational exponents complete the real line. Now a^x is defined for any a > 0 and any real x.",
    sectionId: "6"
  },
  obj9: {
    question: "Why does the approximation method give a unique value?",
    answer: "The function a^x for rational x is continuous — no gaps or jumps. When rational approximations squeeze toward an irrational from both sides, the corresponding powers converge to the same limit. Continuity guarantees uniqueness.",
    sectionId: "3"
  },
  obj10: {
    question: "What is the connection between irrational exponents and exponential functions?",
    answer: "Irrational exponents complete the definition of a^x for all real x, which is exactly what an exponential function needs. The function f(x) = a^x requires x to range over all reals — made possible by extending exponents to irrationals.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Irrational Exponents",
    "description": "Understand irrational exponents: how 2^π is defined through rational approximation and continuous extension. Learn why a > 0 is required for real exponents.",
    "url": "https://www.learnmathclass.com/algebra/powers/irrational-exponents",
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
      "name": "Irrational Exponents"
    },
    "teaches": [
      "Definition of irrational exponents through limits",
      "Rational approximation method for computing a^π",
      "Continuous extension of the exponential function",
      "Why base must be strictly positive (a > 0)",
      "Exponent laws hold for all real exponents",
      "Completing the definition of a^x for all reals",
      "Connection to exponential functions"
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
        "name": "Powers",
        "item": "https://www.learnmathclass.com/algebra/powers"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Irrational Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers/irrational-exponents"
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
//         title: "Irrational Exponents Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/irrational-exponents",
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
      title: "Irrational Exponents: Defining 2^π & Real Powers | Learn Math Class",
      description: "Understand irrational exponents: how 2^π is defined through rational approximation and continuous extension. Learn why a > 0 is required for real exponents.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/irrational-exponents",
      name: "Irrational Exponents"
    },
  }
}
   }

// export default function IrrationalExponentsPage({seoData,sectionsContent , introContent}) {


export default function IrrationalExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Irrational Exponents</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
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
