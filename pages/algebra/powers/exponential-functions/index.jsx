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
  "exponential function",
  "exponential growth",
  "exponential decay",
  "f(x) = a^x",
  "natural exponential function",
  "e^x",
  "Euler's number e",
  "exponential vs polynomial",
  "exponential graph",
  "horizontal asymptote",
  "exponential function properties",
  "base of exponential",
  "exponential function domain range",
  "exponential curve",
  "exponential growth rate"
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
  title: `The Conceptual Shift`,
  content: `The expression $2^5$ is a computation — it takes a fixed base and a fixed exponent and produces the number $32$. The expression $x^2$ is a [polynomial](!/algebra/polynomials) — the base varies while the exponent stays at $2$.

The expression $2^x$ is something different. The base is locked at $2$ and the exponent $x$ is free to be any real number. As $x$ changes, $2^x$ traces out a curve: $2^0 = 1$, $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^{-1} = \\frac{1}{2}$, $2^{1/2} = \\sqrt{2}$.

This is the defining feature of an exponential function: a constant base raised to a variable exponent. The function $f(x) = a^x$, with $a > 0$ and $a \\neq 1$, assigns to every real number $x$ a positive output determined by the [laws of exponents](!/algebra/powers/exponent-rules/).

The shift from "evaluate $a^n$ for a specific $n$" to "study $a^x$ as $x$ ranges over all reals" is the transition from arithmetic to function behavior — from individual calculations to a complete curve.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Basic Shape`,
  content: `The graph of $f(x) = a^x$ takes one of two forms, depending on whether the base is greater than $1$ or between $0$ and $1$.

When $a > 1$, the function grows. For large negative values of $x$, $a^x$ is close to zero — positive but tiny. At $x = 0$, the function passes through $(0, 1)$ because $a^0 = 1$. As $x$ increases, $a^x$ rises with accelerating steepness. The curve climbs slowly at first, then explosively.

When $0 < a < 1$, the function decays. The curve is a mirror image — high on the left, passing through $(0, 1)$, and falling toward zero on the right. Each step to the right multiplies by a fraction, shrinking the output.

The point $(0, 1)$ lies on every exponential graph, regardless of the base. This is a direct consequence of the [zero exponent rule](!/algebra/powers/zero-powers): $a^0 = 1$ for any positive $a$.

The larger the base (when $a > 1$), the steeper the growth. The function $10^x$ rises far more aggressively than $2^x$. The closer the base is to $1$ from either side, the flatter the curve — $1.01^x$ grows, but barely.`,
  before: ``,
  after: ``,
  link: '',
},


obj3: {
  title: `Key Properties`,
  content: `Every exponential function $f(x) = a^x$ with $a > 0$ and $a \\neq 1$ shares the same structural properties.

The domain is all real numbers. Every real $x$ — positive, negative, zero, rational, [irrational](!/algebra/powers/irrational-exponents) — produces a well-defined output, because the base is positive.

The range is $(0, \\infty)$. The output is always positive — never zero, never negative. No matter how far left the curve extends, it approaches the horizontal axis but never reaches it.

The horizontal asymptote is the line $y = 0$. For $a > 1$, the curve approaches zero as $x \\to -\\infty$. For $0 < a < 1$, it approaches zero as $x \\to +\\infty$. In neither case does the function touch the axis.

The function is one-to-one. When $a > 1$, it is strictly increasing — different inputs always produce different outputs. When $0 < a < 1$, it is strictly decreasing. This is the property that makes [exponential equations](!/algebra/powers/exponential-equations) and [inequalities](!/algebra/powers/exponential-inequalities) solvable: $a^x = a^y$ implies $x = y$.

There is no x-intercept. Since $a^x > 0$ for all $x$, the graph never crosses the horizontal axis.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Exponential vs Power Functions`,
  content: `The expressions $x^2$ and $2^x$ look similar on paper but behave in fundamentally different ways. In $x^2$, the variable is the base — this is a power function, a [polynomial](!/algebra/polynomials). In $2^x$, the variable is the exponent — this is an exponential function.

For small positive values of $x$, the polynomial can dominate. At $x = 2$, $x^2 = 4$ while $2^x = 4$ — they are equal. At $x = 3$, $x^2 = 9$ while $2^x = 8$ — the polynomial is still ahead.

But exponential growth eventually overtakes any polynomial, no matter the degree. At $x = 10$, $x^2 = 100$ while $2^x = 1024$. At $x = 20$, $x^2 = 400$ while $2^x = 1{,}048{,}576$. The gap does not just widen — it accelerates.

This holds for polynomials of any degree. The function $2^x$ eventually surpasses $x^{10}$, $x^{100}$, even $x^{1000}$. Exponential growth multiplies by a fixed factor at each step, while polynomial growth adds a fixed power. Repeated multiplication always wins in the long run.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Euler's Number $e$`,
  content: `Among all possible bases for an exponential function, one holds a privileged position: the irrational number $e \\approx 2.71828$.

The function $f(x) = e^x$ is called the natural exponential function. Its defining property is that the rate at which it grows at any point equals the value of the function at that point. At $x = 0$, the function equals $1$ and is growing at rate $1$. At $x = 1$, the function equals $e \\approx 2.718$ and is growing at rate $\\approx 2.718$. The output and the growth rate are always identical.

No other base has this property. The function $2^x$ grows at a rate proportional to its value, but not equal to it — a correction factor is needed. The function $3^x$ overshoots. Only $e^x$ achieves exact self-replication of value and rate.

This property makes $e^x$ central to calculus, differential equations, compound interest calculations at continuous rates, and mathematical modeling across the sciences. The full development of why $e$ takes this value and what follows from it belongs to those subjects — but its origin lies here, in the extension of exponentiation to all real numbers.`,
  before: ``,
  after: ``,
  link: '',
},


obj6: {
  title: `Where to Go Next`,
  content: `This page marks the boundary of the powers section and the beginning of several deeper topics that build on exponential functions.

**Logarithms** are the inverse operation of exponentiation. If $a^x = b$, then $x = \\log_a(b)$. Every law of exponents has a corresponding logarithmic identity, and the two subjects are inseparable. Logarithms will be covered in their own dedicated section.

**Transformations of exponential functions** — shifts, reflections, stretches — modify the basic curve $a^x$ into forms like $3 \\cdot 2^{x-1} + 5$. These belong to the broader study of function transformations.

**Calculus of exponential functions** — derivatives and integrals of $a^x$ and $e^x$ — represents one of the most elegant chapters in mathematics, where the self-replicating property of $e^x$ reaches its full expression.

**Applications** draw on all of the above. Compound interest, population growth, radioactive decay, cooling processes, and probability distributions all rest on exponential functions — and on the exponent framework developed across this entire section, from the first definition of $a^n$ as repeated multiplication to the continuous curve of $a^x$ for all real $x$.`,
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
  title: "When the Exponent Becomes the Variable",
  content: `Everything in this section so far has treated the exponent as a known quantity — a specific number, whether [natural](!/algebra/powers/natural-exponents), [negative](!/algebra/powers/negative-exponents), [rational](!/algebra/powers/rational-exponents), or [irrational](!/algebra/powers/irrational-exponents). The base was computed and the exponent told you what to do with it. Exponential functions reverse that relationship: the base is fixed and the exponent roams freely across all real numbers, turning a single arithmetic operation into a function with a distinctive shape and remarkable properties.`
}



const faqQuestions = {
  obj1: {
    question: "What is an exponential function?",
    answer: "An exponential function has the form f(x) = aˣ where a > 0 and a ≠ 1. The base a is constant and the exponent x is the variable. This is different from power functions like x² where the base varies. Examples: 2ˣ, 10ˣ, eˣ."
  },
  obj2: {
    question: "What is the difference between exponential growth and decay?",
    answer: "When the base a > 1, the function grows (increases as x increases). When 0 < a < 1, the function decays (decreases as x increases). Both pass through (0, 1) since a⁰ = 1 for any positive base."
  },
  obj3: {
    question: "What are the domain and range of exponential functions?",
    answer: "The domain is all real numbers — any x value works. The range is (0, ∞) — outputs are always positive, never zero or negative. The graph approaches but never touches the x-axis (horizontal asymptote at y = 0)."
  },
  obj4: {
    question: "Why does every exponential function pass through (0, 1)?",
    answer: "Because a⁰ = 1 for any positive base a. This is the zero exponent rule. No matter what base you choose (as long as it's positive and not 1), raising it to the power 0 gives 1."
  },
  obj5: {
    question: "What is the difference between exponential and power functions?",
    answer: "In a power function like x², the variable is the base. In an exponential function like 2ˣ, the variable is the exponent. Exponential functions eventually grow faster than any polynomial, no matter how high the degree."
  },
  obj6: {
    question: "Why does exponential growth beat polynomial growth?",
    answer: "Exponential growth multiplies by a fixed factor at each step, while polynomial growth adds a fixed power. At x=10: x² = 100 but 2ˣ = 1024. At x=20: x² = 400 but 2ˣ ≈ 1 million. Repeated multiplication always wins long-term."
  },
  obj7: {
    question: "What is Euler's number e?",
    answer: "e ≈ 2.71828 is a special irrational number. The function eˣ has a unique property: its growth rate at any point equals its value at that point. This makes eˣ fundamental in calculus, differential equations, and continuous compound interest."
  },
  obj8: {
    question: "Why is e^x called the natural exponential function?",
    answer: "Because eˣ is the only exponential function where the rate of change equals the function value itself. At x=0, eˣ=1 and grows at rate 1. At x=1, eˣ≈2.718 and grows at rate ≈2.718. No other base has this self-replicating property."
  },
  obj9: {
    question: "What is the horizontal asymptote of an exponential function?",
    answer: "The line y = 0 (the x-axis). For a > 1, the curve approaches 0 as x → -∞. For 0 < a < 1, it approaches 0 as x → +∞. The function gets arbitrarily close to zero but never equals zero."
  },
  obj10: {
    question: "Are exponential functions one-to-one?",
    answer: "Yes. Exponential functions are strictly monotonic — either always increasing (when a > 1) or always decreasing (when 0 < a < 1). Different inputs always produce different outputs, so aˣ = aʸ implies x = y."
  },
  obj11: {
    question: "How does the base affect the steepness of an exponential graph?",
    answer: "The larger the base (when a > 1), the steeper the growth. 10ˣ rises much faster than 2ˣ. The closer the base is to 1, the flatter the curve — 1.01ˣ grows very slowly. Similarly for decay: 0.1ˣ falls faster than 0.9ˣ."
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Exponential Functions",
    "description": "Understand exponential functions f(x) = aˣ: growth vs decay, domain and range, horizontal asymptotes, comparison with polynomials, and Euler's number e.",
    "url": "https://www.learnmathclass.com/algebra/powers/exponential-functions",
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
      "name": "Exponential Functions"
    },
    "teaches": [
      "Definition of exponential functions f(x) = aˣ",
      "Exponential growth vs exponential decay",
      "Domain, range, and horizontal asymptote",
      "Exponential vs power functions",
      "Euler's number e and the natural exponential",
      "One-to-one property of exponentials",
      "Graph behavior based on base value"
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
        "name": "Exponential Functions",
        "item": "https://www.learnmathclass.com/algebra/powers/exponential-functions"
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
//         title: "Exponential Functions | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/exponential-functions",
//          name: "name"
//       },
        
//        }
//     }


return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Exponential Functions: Growth, Decay & Euler's e | Learn Math Class",
      description: "Understand exponential functions f(x) = aˣ: growth vs decay, domain and range, horizontal asymptotes, comparison with polynomials, and Euler's number e.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/exponential-functions",
      name: "Exponential Functions"
    },
  }
}
   }

// export default function ExponentialFunctionsPage({seoData,sectionsContent , introContent}) {
export default function ExponentialFunctionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Exponential Functions</h1>
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
