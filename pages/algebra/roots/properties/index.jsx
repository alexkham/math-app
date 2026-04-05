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
  "properties of radicals",
  "even index radicals",
  "odd index radicals",
  "principal root",
  "square root of x squared",
  "sqrt x^2 equals absolute value",
  "radical domain restrictions",
  "negative radicand",
  "cube root negative number",
  "radical sign behavior",
  "even and odd roots",
  "principal root convention",
  "radical properties",
  "nth root properties",
  "radical absolute value"
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
    title: `Even Index Radicals`,
    content: `Square roots, fourth roots, sixth roots — any radical with an even index — require non-negative radicands in the real number system.

$$\\sqrt{16} = 4, \\quad \\sqrt[4]{81} = 3, \\quad \\sqrt[6]{64} = 2$$

No real number, when raised to an even power, produces a negative result. Positive numbers raised to even powers give positives. Negative numbers raised to even powers also give positives. Zero raised to any positive power gives zero.

Therefore $\\sqrt{-9}$ has no real value. No real number squares to $-9$.

$$\\sqrt{-9} \\quad \\text{is not a real number}$$

Even-index radicals also produce only non-negative outputs. The principal root convention guarantees this: $\\sqrt{25} = 5$, not $-5$. Both 5 and $-5$ square to 25, but the radical symbol returns only the non-negative root.

This restriction affects the domain of [radical functions](!/algebra/roots/functions) with even index: only non-negative inputs are allowed. It also determines when [complex numbers](!/complex-numbers) become necessary.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Odd Index Radicals`,
    content: `Cube roots, fifth roots, seventh roots — any radical with an odd index — accept all real numbers as radicands.

$$\\sqrt[3]{27} = 3, \\quad \\sqrt[3]{-27} = -3, \\quad \\sqrt[5]{-32} = -2$$

A negative number raised to an odd power remains negative. Therefore every negative number has a real odd root.

$$(-3)^3 = -27 \\quad \\Longrightarrow \\quad \\sqrt[3]{-27} = -3$$

Odd-index radicals preserve sign. Positive radicands yield positive roots. Negative radicands yield negative roots. Zero yields zero.

There is no ambiguity requiring a principal root convention for odd indices. Every real number has exactly one real cube root, one real fifth root, and so on. The radical simply returns that unique value.

This means [radical functions](!/algebra/roots/functions) with odd index have domain all real numbers. No restrictions, no need for [complex numbers](!/complex-numbers) to handle negative inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Principal Root Convention`,
    content: `For even-index radicals, multiple real numbers satisfy the defining equation. Both 4 and $-4$ are square roots of 16, since both square to 16.

The principal root convention resolves this ambiguity: the radical symbol denotes the non-negative root.

$$\\sqrt{16} = 4$$

This is not a choice between equally valid answers. It is a definition that makes the radical symbol unambiguous. Without it, $\\sqrt{16}$ would have two values, and expressions like $\\sqrt{16} + 1$ would be meaningless — which value is intended?

When both roots are needed, explicit notation indicates this:

$$x^2 = 16 \\quad \\Longrightarrow \\quad x = \\pm\\sqrt{16} = \\pm 4$$

The $\\pm$ symbol signals that both positive and negative roots apply. This notation appears frequently when [solving radical equations](!/algebra/roots/equations).

Odd-index radicals need no such convention. Each real number has exactly one real odd root, so no ambiguity exists.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `The Identity for Even Roots`,
    content: `A critical identity governs even-index radicals of powers:

$$\\sqrt{x^2} = |x|}$$

This is not $x$. It is the absolute value of $x$.

When $x = 5$: $\\sqrt{5^2} = \\sqrt{25} = 5 = |5|$. Correct.

When $x = -5$: $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$. Also correct.

If the identity were $\\sqrt{x^2} = x$, then $\\sqrt{(-5)^2}$ would equal $-5$. But square roots are non-negative by the principal root convention. The result must be 5, not $-5$.

The general form:

$$\\sqrt[n]{x^n} = |x| \\quad \\text{when } n \\text{ is even}$$

This absolute value appears when [simplifying radicals](!/algebra/roots/simplifying) with variables. Whenever an even root extracts a variable raised to an odd power, absolute value may be required.

$$\\sqrt{x^6} = |x^3| = |x|^3$$

When the resulting exponent is even, the absolute value is unnecessary since even powers are already non-negative:

$$\\sqrt{x^4} = x^2 \\quad \\text{(no absolute value needed)}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `The Identity for Odd Roots`,
    content: `Odd-index radicals behave more simply:

$$\\sqrt[n]{x^n} = x \\quad \\text{when } n \\text{ is odd}$$

No absolute value appears. The odd root returns the original value, preserving sign.

$$\\sqrt[3]{8} = 2, \\quad \\sqrt[3]{-8} = -2$$

$$\\sqrt[3]{x^3} = x \\quad \\text{for all real } x$$

This makes [simplifying radicals](!/algebra/roots/simplifying) with odd index more straightforward. Variables come out without absolute value concerns.

$$\\sqrt[3]{x^9} = x^3$$

$$\\sqrt[5]{y^{15}} = y^3$$

The distinction between even and odd indices is essential when variables are involved. Assuming all variables are positive removes the absolute value issue for even indices — a common simplifying assumption stated explicitly in problems. Without that assumption, absolute values must be tracked.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Domain and Range by Index`,
    content: `The index determines the domain and range of [radical functions](!/algebra/roots/functions).

For even index $n$:

$$f(x) = \\sqrt[n]{x}$$

Domain: $[0, \\infty)$ — only non-negative inputs allowed.

Range: $[0, \\infty)$ — only non-negative outputs produced.

For odd index $n$:

$$f(x) = \\sqrt[n]{x}$$

Domain: $(-\\infty, \\infty)$ — all real numbers allowed.

Range: $(-\\infty, \\infty)$ — all real numbers produced.

When the radicand is an expression, solve for valid inputs:

$$f(x) = \\sqrt{x - 3}$$

The radicand $x - 3$ must be non-negative: $x - 3 \\geq 0$, so $x \\geq 3$.

Domain: $[3, \\infty)$.

$$g(x) = \\sqrt[3]{x - 3}$$

No restriction on the radicand for odd index.

Domain: $(-\\infty, \\infty)$.

These domain considerations carry into [operations](!/algebra/roots/operations) and [equations](!/algebra/roots/equations) involving radicals.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Sign Behavior Summary`,
    content: `The sign of a radical depends on the radicand and the index.

When $a > 0$:

$$\\sqrt[n]{a} > 0 \\quad \\text{for all } n$$

Positive radicands always yield positive roots, regardless of index.

When $a = 0$:

$$\\sqrt[n]{0} = 0 \\quad \\text{for all } n$$

Zero yields zero.

When $a < 0$ and $n$ is odd:

$$\\sqrt[n]{a} < 0$$

Negative radicands yield negative roots for odd indices.

When $a < 0$ and $n$ is even:

$$\\sqrt[n]{a} \\quad \\text{is not a real number}$$

No real even root of a negative number exists. This is where [complex numbers](!/complex-numbers) enter.

Understanding sign behavior prevents errors in [simplifying](!/algebra/roots/simplifying) and [operations](!/algebra/roots/operations). It also explains why extraneous solutions arise when [solving radical equations](!/algebra/roots/equations) — squaring both sides can introduce negative values where only non-negative values are valid.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Connection to Rational Exponents`,
    content: `Every property of radicals translates to [rational exponents](!/algebra/roots/rational-exponents).

$$\\sqrt[n]{a} = a^{1/n}$$

The domain restrictions are identical. For even $n$, the expression $a^{1/n}$ requires $a \\geq 0$. For odd $n$, any real $a$ is permitted.

The absolute value identity becomes:

$$(x^n)^{1/n} = |x| \\quad \\text{when } n \\text{ is even}$$

$$(x^n)^{1/n} = x \\quad \\text{when } n \\text{ is odd}$$

The [radical rules](!/algebra/roots/radical-rules) correspond directly to exponent laws:

$$\\sqrt[n]{ab} = (ab)^{1/n} = a^{1/n} \\cdot b^{1/n} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$

Working in exponent notation often simplifies algebraic manipulation, especially when combining expressions with different indices. Converting to a common denominator in the exponents enables operations that would be awkward in radical form.

The properties established here — domain restrictions, sign behavior, absolute value requirements — apply equally whether the expression is written with a radical or a fractional exponent.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Even and Odd",
  content: `The index of a radical determines its behavior. Even-index radicals accept only non-negative radicands and produce only non-negative outputs. Odd-index radicals accept any real number and preserve sign.

This distinction shapes everything — which inputs are valid, which outputs are possible, whether absolute values appear when simplifying, and how radical functions behave. Every property on this page traces back to whether the index is even or odd.`
}



const faqQuestions = {
  obj1: {
    question: "Can you take the square root of a negative number?",
    answer: "Not in the real number system. Even-index radicals (square root, fourth root, etc.) require non-negative radicands. √(−9) has no real value. Complex numbers are needed for even roots of negative numbers.",
    sectionId: "1"
  },
  obj2: {
    question: "Can you take the cube root of a negative number?",
    answer: "Yes. Odd-index radicals accept any real number. ∛(−27) = −3 because (−3)³ = −27. Odd roots preserve sign: negative inputs yield negative outputs.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the principal root?",
    answer: "For even-index radicals, both positive and negative values satisfy the equation (e.g., ±4 are square roots of 16). The principal root convention defines the radical symbol to return only the non-negative root: √16 = 4.",
    sectionId: "3"
  },
  obj4: {
    question: "Why does √(x²) equal |x| and not x?",
    answer: "The principal root is always non-negative. When x = −5: √((−5)²) = √25 = 5 = |−5|. If it equaled x, we'd get −5, but square roots can't be negative. The absolute value ensures correctness.",
    sectionId: "4"
  },
  obj5: {
    question: "Does ∛(x³) equal x or |x|?",
    answer: "For odd-index radicals, ∛(x³) = x with no absolute value. Odd roots preserve sign and every real number has exactly one real odd root. ∛(−8) = −2, not |−2|.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the domain of f(x) = √x?",
    answer: "Domain is [0, ∞) — only non-negative inputs allowed. Range is also [0, ∞). For √(x−3), the radicand must be non-negative: x−3 ≥ 0, so x ≥ 3.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the domain of f(x) = ∛x?",
    answer: "Domain is (−∞, ∞) — all real numbers. Odd-index radicals have no input restrictions. Any real number has a real cube root, fifth root, etc.",
    sectionId: "6"
  },
  obj8: {
    question: "When is √(x⁴) equal to x² vs |x²|?",
    answer: "√(x⁴) = x² with no absolute value needed because x² is always non-negative. Absolute value is only required when the resulting exponent is odd: √(x⁶) = |x³| = |x|³.",
    sectionId: "4"
  },
  obj9: {
    question: "What happens when you square both sides of a radical equation?",
    answer: "Squaring can introduce extraneous solutions because the principal root is always non-negative but squaring allows negative values. Always check solutions in the original equation.",
    sectionId: "7"
  },
  obj10: {
    question: "How do radical properties connect to rational exponents?",
    answer: "ⁿ√a = a^(1/n). All properties translate: domain restrictions, sign behavior, and absolute value rules apply equally to both notations. (x^n)^(1/n) = |x| for even n, = x for odd n.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Properties of Roots",
    "description": "Learn radical properties: even vs odd index behavior, principal root convention, domain restrictions, √(x²) = |x| identity, sign behavior, and connection to rational exponents.",
    "url": "https://www.learnmathclass.com/algebra/roots/properties",
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
      "name": "Radical Properties"
    },
    "teaches": [
      "Even index radical restrictions",
      "Odd index radical behavior",
      "Principal root convention",
      "The identity √(x²) = |x|",
      "Odd root identity ∛(x³) = x",
      "Domain and range by index",
      "Sign behavior of radicals",
      "Connection to rational exponents"
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
        "name": "Roots",
        "item": "https://www.learnmathclass.com/algebra/roots"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Properties of Roots",
        "item": "https://www.learnmathclass.com/algebra/roots/properties"
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
      title: "Properties of Radicals: Even & Odd Index, Principal Root | Learn Math Class",
      description: "Learn radical properties: even vs odd index behavior, principal root convention, domain restrictions, √(x²) = |x| identity, sign behavior, and connection to rational exponents.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/properties",
      name: "Properties of Roots"
    },
  }
}
   }

// export default function PropertiesPage({seoData,sectionsContent , introContent}) {
export default function PropertiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Properties of Roots</h1>
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
