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
  "negative exponents",
  "negative exponent rule",
  "a^-n = 1/a^n",
  "zero exponent",
  "a^0 = 1",
  "reciprocal exponent",
  "negative power",
  "simplify negative exponents",
  "exponent rules negative",
  "what is a negative exponent",
  "negative exponent examples",
  "how to solve negative exponents",
  "exponent quotient rule",
  "multiplicative inverse exponent",
  "laws of exponents negative"
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
  title: `Motivation: Extending the Pattern`,
  content: `The quotient rule for [natural exponents](!/algebra/powers/natural-exponents) states that $\\frac{a^m}{a^n} = a^{m-n}$ when $m > n$. But the left side of that equation makes sense even when $m = n$ or $m < n$ — the fraction $\\frac{a^3}{a^3}$ and the fraction $\\frac{a^2}{a^5}$ are both perfectly well-defined as long as $a \\neq 0$.

When $m = n$, the left side gives $\\frac{a^n}{a^n} = 1$, while the right side gives $a^{n-n} = a^0$. If the rule is to hold, then $a^0$ must equal $1$.

When $m < n$, the left side produces a fraction. The expression $\\frac{a^2}{a^5} = \\frac{1}{a^3}$ by cancellation, while the right side gives $a^{2-5} = a^{-3}$. If the rule is to hold, then $a^{-3}$ must equal $\\frac{1}{a^3}$.

Neither definition is a choice. Both are forced by the requirement that the quotient rule — already established for natural exponents — continues to work when the exponent crosses zero into negative territory.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `The Zero Exponent`,
  content: `For any nonzero $a$:

$$a^0 = 1$$

The quotient rule provides one proof: $a^0 = a^{n-n} = \\frac{a^n}{a^n} = 1$. But the same conclusion emerges from a purely numerical pattern. The powers of $3$ descend by a factor of $3$ at each step: $3^3 = 27$, $3^2 = 9$, $3^1 = 3$. Continuing the pattern — dividing by $3$ each time — gives $3^0 = 1$. The same sequence works for any nonzero base: $5^0 = 1$, $(-7)^0 = 1$, $(0.01)^0 = 1$.

The restriction $a \\neq 0$ is essential. The expression $0^0$ sits at the intersection of two conflicting patterns. Following $a^0 = 1$ suggests $0^0 = 1$. Following $0^n = 0$ suggests $0^0 = 0$. Since both patterns have equal claim and produce different answers, $0^0$ is left undefined — or, in certain contexts, assigned a value by convention depending on the application, most commonly $1$ in combinatorics and series.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Definition of Negative Exponents`,
  content: `For any nonzero $a$ and any natural number $n$:

$$a^{-n} = \\frac{1}{a^n}$$

A negative exponent produces the reciprocal of the corresponding positive power. The expression $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. The expression $5^{-1} = \\frac{1}{5}$. The expression $10^{-4} = \\frac{1}{10000} = 0.0001$.

This definition is not arbitrary — it is the only one compatible with the product rule. The product $a^3 \\cdot a^{-3}$ must equal $a^{3+(-3)} = a^0 = 1$. For that to hold, $a^{-3}$ must be the value that multiplies with $a^3$ to give $1$ — which is $\\frac{1}{a^3}$.

When the base is itself a fraction, the reciprocal interpretation applies in full. The expression $\\left(\\frac{1}{3}\\right)^{-2}$ means the reciprocal of $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$, which is $9$. Equivalently, $\\left(\\frac{1}{3}\\right)^{-2} = 3^2 = 9$. A negative exponent on a fraction flips it before raising to the positive power.`,
  before: ``,
  after: ``,
  link: '',
},

obj4: {
  title: `Double Negatives and Reciprocals`,
  content: `The reciprocal interpretation extends cleanly to fractions and nested negatives.

A negative exponent on a fraction inverts it:

$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$

The expression $\\left(\\frac{2}{5}\\right)^{-3} = \\left(\\frac{5}{2}\\right)^3 = \\frac{125}{8}$. The negative exponent flips the fraction, and the positive exponent that remains is applied normally.

The case $n = 1$ gives the simplest form of the reciprocal: $a^{-1} = \\frac{1}{a}$. This notation appears throughout algebra and beyond — $a^{-1}$ is the standard way to write the multiplicative inverse of $a$.

A negative exponent in the denominator moves the expression to the numerator. The fraction $\\frac{1}{a^{-n}}$ equals $a^n$, since taking the reciprocal of a reciprocal returns the original. Similarly, $\\frac{a^{-2}}{b^{-3}} = \\frac{b^3}{a^2}$ — each negative exponent crosses the fraction bar and becomes positive.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Verifying the Laws Still Hold`,
  content: `The definition $a^{-n} = \\frac{1}{a^n}$ was chosen to preserve the laws of exponents. Verification confirms that each rule carries through without exception.

The product rule: $a^{-2} \\cdot a^{-3}$ should equal $a^{-2+(-3)} = a^{-5}$. Computing directly: $\\frac{1}{a^2} \\cdot \\frac{1}{a^3} = \\frac{1}{a^5} = a^{-5}$. The rule holds.

Mixed signs: $a^3 \\cdot a^{-5}$ should equal $a^{3+(-5)} = a^{-2}$. Computing directly: $a^3 \\cdot \\frac{1}{a^5} = \\frac{a^3}{a^5} = \\frac{1}{a^2} = a^{-2}$. The rule holds.

Power of a power: $(a^{-2})^3$ should equal $a^{(-2)(3)} = a^{-6}$. Computing directly: $(a^{-2})^3 = a^{-2} \\cdot a^{-2} \\cdot a^{-2} = \\frac{1}{a^2} \\cdot \\frac{1}{a^2} \\cdot \\frac{1}{a^2} = \\frac{1}{a^6} = a^{-6}$. The rule holds.

This is the central point. Negative exponents were not defined by intuition or analogy — they were defined as the unique values that make the algebraic machinery work. Every law that held for [natural exponents](!/algebra/powers/natural-exponents) continues to hold for all integers, because the definition was engineered to guarantee exactly that.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Worked Examples`,
  content: `Simplify $4^{-2}$. Applying the definition: $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$.

Simplify $\\frac{x^3}{x^7}$. The quotient rule gives $x^{3-7} = x^{-4} = \\frac{1}{x^4}$. Both forms — $x^{-4}$ and $\\frac{1}{x^4}$ — are correct; context determines which is preferred.

Simplify $(2a^{-3})^2$. Distribute the exponent: $2^2 \\cdot (a^{-3})^2 = 4a^{-6} = \\frac{4}{a^6}$.

Simplify $\\frac{a^{-2}b^3}{a^4b^{-1}}$. Handle each variable separately. For $a$: $a^{-2-4} = a^{-6}$. For $b$: $b^{3-(-1)} = b^{3+1} = b^4$. The result is $a^{-6}b^4 = \\frac{b^4}{a^6}$.

Simplify $\\left(\\frac{x^{-1}}{y^2}\\right)^{-3}$. The negative exponent flips the fraction: $\\left(\\frac{y^2}{x^{-1}}\\right)^3 = \\left(\\frac{y^2 \\cdot x}{1}\\right)^3 = (xy^2)^3 = x^3y^6$.

In each case, the laws reduce the expression step by step. Negative exponents are not obstacles — they are instructions to take reciprocals, and they simplify by the same rules that govern every other exponent.`,
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
  title: "What Happens Below Zero",
  content: `The [natural exponent](!/algebra/powers/natural-exponents) definition — multiply the base by itself $n$ times — has no way to handle $a^0$ or $a^{-3}$. There is no such thing as multiplying a number by itself zero times or negative three times. Yet the [laws of exponents](!/algebra/powers/laws) demand that these expressions have values, and they leave no room for choice about what those values must be.`
}


const faqQuestions = {
  obj1: {
    question: "What is a negative exponent?",
    answer: "A negative exponent indicates the reciprocal of the base raised to the positive exponent. For any nonzero a and natural number n: a^(-n) = 1/a^n. For example, 2^(-3) = 1/2³ = 1/8.",
    sectionId: "3"
  },
  obj2: {
    question: "Why is anything to the power of 0 equal to 1?",
    answer: "The quotient rule forces it: a^n / a^n = a^(n-n) = a^0, and any number divided by itself equals 1. Alternatively, the pattern 3³=27, 3²=9, 3¹=3 continues to 3⁰=1 by dividing by 3 each step.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you simplify negative exponents?",
    answer: "Move the term with negative exponent across the fraction bar and make the exponent positive. For example, a^(-2) = 1/a², and 1/b^(-3) = b³. In fractions, a^(-2)/b^(-3) = b³/a².",
    sectionId: "4"
  },
  obj4: {
    question: "What is 0^0?",
    answer: "0^0 is undefined or context-dependent. Following a^0 = 1 suggests 0^0 = 1. Following 0^n = 0 suggests 0^0 = 0. In combinatorics and series, 0^0 = 1 by convention; in calculus, it's left indeterminate.",
    sectionId: "2"
  },
  obj5: {
    question: "Do the laws of exponents work with negative exponents?",
    answer: "Yes. The definition a^(-n) = 1/a^n was specifically chosen to preserve all exponent laws. Product rule: a^(-2) · a^(-3) = a^(-5). Power rule: (a^(-2))³ = a^(-6). All laws hold for integer exponents.",
    sectionId: "5"
  },
  obj6: {
    question: "What does a^(-1) mean?",
    answer: "a^(-1) equals 1/a, the multiplicative inverse of a. This is the standard notation for reciprocals throughout algebra. For example, 5^(-1) = 1/5 and x^(-1) = 1/x.",
    sectionId: "4"
  },
  obj7: {
    question: "How do you handle a negative exponent on a fraction?",
    answer: "A negative exponent on a fraction flips it: (a/b)^(-n) = (b/a)^n. For example, (2/5)^(-3) = (5/2)³ = 125/8. The negative exponent inverts, then the positive exponent applies.",
    sectionId: "4"
  },
  obj8: {
    question: "Why can't 0 have a negative exponent?",
    answer: "0^(-n) = 1/0^n = 1/0, which is division by zero. This is undefined. Zero as a base works only for positive exponents, where 0^n = 0.",
    sectionId: "3"
  },
  obj9: {
    question: "How do you simplify expressions like x³/x⁷?",
    answer: "Use the quotient rule: x³/x⁷ = x^(3-7) = x^(-4) = 1/x⁴. Both x^(-4) and 1/x⁴ are correct; which form to use depends on context.",
    sectionId: "6"
  },
  obj10: {
    question: "What is the difference between negative base and negative exponent?",
    answer: "A negative base like (-2)³ = -8 means multiply -2 by itself. A negative exponent like 2^(-3) = 1/8 means take the reciprocal. They are independent: (-2)^(-3) = 1/(-2)³ = -1/8.",
    sectionId: "3"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Negative Exponents",
    "description": "Learn negative exponents and zero exponents: definitions, rules, and examples. Understand why a^(-n) = 1/a^n and a^0 = 1 through the quotient rule and pattern extension.",
    "url": "https://www.learnmathclass.com/algebra/powers/negative-exponents",
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
      "name": "Negative Exponents"
    },
    "teaches": [
      "Definition of negative exponents as reciprocals",
      "Why a^0 = 1 for any nonzero a",
      "The quotient rule extension to negative exponents",
      "Simplifying expressions with negative exponents",
      "Negative exponents on fractions",
      "Verification that exponent laws hold for integers",
      "The special case 0^0"
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
        "name": "Negative Exponents",
        "item": "https://www.learnmathclass.com/algebra/powers/negative-exponents"
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
//         title: "Negative Exponents Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/negative-exponents",
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
      title: "Negative Exponents: Rules, Definition & Examples | Learn Math Class",
      description: "Learn negative exponents and zero exponents: why a^(-n) = 1/a^n and a^0 = 1. Step-by-step examples for simplifying expressions with negative powers.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/negative-exponents",
      name: "Negative Exponents"
    },
  }
}
   }

// export default function NegativeExponentsPage({seoData,sectionsContent , introContent}) {

export default function NegativeExponentsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Negative Exponents</h1>
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
