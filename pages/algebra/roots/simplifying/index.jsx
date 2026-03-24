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
  "simplify radicals",
  "simplifying square roots",
  "rationalize denominator",
  "simplest radical form",
  "factor out perfect squares",
  "simplify cube roots",
  "rationalizing binomial denominator",
  "conjugate radical",
  "simplify radicals with variables",
  "reduce radical index",
  "perfect square factors",
  "radical simplification",
  "simplify nth roots",
  "rationalize square root denominator",
  "simplify radical expressions"
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
    title: `What Simplest Form Means`,
    content: `A radical is in simplest form when three conditions hold:

No perfect power factors remain under the radical. The radicand contains no factor that could be extracted.

No fractions appear under the radical. A radical of a fraction should be rewritten as a fraction of radicals.

No radicals appear in denominators. Denominators are rationalized — rewritten without radical signs.

$$\\sqrt{72} \\quad \\text{is not simplified — 36 is a perfect square factor}$$

$$\\sqrt{\\frac{3}{4}} \\quad \\text{is not simplified — fraction under radical}$$

$$\\frac{5}{\\sqrt{3}} \\quad \\text{is not simplified — radical in denominator}$$

These criteria define the target. The techniques that follow show how to reach it.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Factoring Out Perfect Powers`,
    content: `To simplify a radical, identify perfect power factors in the radicand and extract them.

For square roots, find perfect square factors:

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$$

For cube roots, find perfect cube factors:

$$\\sqrt[3]{54} = \\sqrt[3]{27 \\cdot 2} = \\sqrt[3]{27} \\cdot \\sqrt[3]{2} = 3\\sqrt[3]{2}$$

For $n$th roots, find perfect $n$th power factors:

$$\\sqrt[4]{48} = \\sqrt[4]{16 \\cdot 3} = \\sqrt[4]{16} \\cdot \\sqrt[4]{3} = 2\\sqrt[4]{3}$$

The process uses the product rule from [radical rules](!/algebra/roots/radical-rules). Factor the radicand, separate into two radicals, simplify the perfect power.

When multiple perfect power factors exist, extract them all:

$$\\sqrt{200} = \\sqrt{100 \\cdot 2} = 10\\sqrt{2}$$

Recognizing perfect powers quickly — 4, 9, 16, 25, 36, 49, 64, 81, 100 for squares; 8, 27, 64, 125 for cubes — speeds the work.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Simplifying with Variables`,
    content: `Variables under radicals follow the same process: extract perfect powers.

$$\\sqrt{x^6} = x^3$$

The exponent 6 divides evenly by the index 2, so the entire power extracts.

$$\\sqrt{x^7} = \\sqrt{x^6 \\cdot x} = x^3\\sqrt{x}$$

The exponent 7 does not divide evenly. Separate into the largest even power (6) and the remainder (1).

$$\\sqrt[3]{y^{10}} = \\sqrt[3]{y^9 \\cdot y} = y^3\\sqrt[3]{y}$$

For cube roots, extract the largest multiple of 3.

The general rule: divide the exponent by the index. The quotient is the extracted power; the remainder stays under the radical.

$$\\sqrt[n]{x^m} = x^{\\lfloor m/n \\rfloor} \\cdot \\sqrt[n]{x^{m \\mod n}}$$

When the index is even, absolute values may be needed. The [properties of radicals](!/algebra/roots/properties) page explains when $\\sqrt{x^2} = |x|$ rather than $x$. A common convention assumes all variables are positive, avoiding absolute value complications.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Combined Numerical and Variable Simplification`,
    content: `Most expressions combine numbers and variables. Simplify each part.

$$\\sqrt{50x^5} = \\sqrt{25 \\cdot 2 \\cdot x^4 \\cdot x} = 5x^2\\sqrt{2x}$$

Factor 50 into $25 \\cdot 2$. Factor $x^5$ into $x^4 \\cdot x$. Extract the perfect squares.

$$\\sqrt[3]{-128a^7b^4} = \\sqrt[3]{-64 \\cdot 2 \\cdot a^6 \\cdot a \\cdot b^3 \\cdot b}$$

$$= -4a^2b\\sqrt[3]{2ab}$$

The negative radicand is fine for odd index — cube roots handle negatives naturally, as explained in [properties](!/algebra/roots/properties).

Organize work systematically: factor the coefficient, factor each variable's power, extract what divides evenly, leave remainders under the radical.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Rationalizing Monomial Denominators`,
    content: `A radical in the denominator violates simplest form. Rationalizing removes it.

For a square root denominator, multiply by that square root over itself:

$$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$$

The denominator becomes $\\sqrt{3} \\cdot \\sqrt{3} = \\sqrt{9} = 3$, a rational number.

For higher roots, multiply to create a perfect power under the radical:

$$\\frac{2}{\\sqrt[3]{5}} = \\frac{2}{\\sqrt[3]{5}} \\cdot \\frac{\\sqrt[3]{25}}{\\sqrt[3]{25}} = \\frac{2\\sqrt[3]{25}}{\\sqrt[3]{125}} = \\frac{2\\sqrt[3]{25}}{5}$$

The cube root of 5 needs two more factors of 5 to become $\\sqrt[3]{125} = 5$.

General principle: multiply by $\\sqrt[n]{a^{n-k}}$ where $k$ is the current power of $a$ under the radical. This creates $\\sqrt[n]{a^n} = a$ in the denominator.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Rationalizing Binomial Denominators`,
    content: `When the denominator is a sum or difference involving a square root, multiply by the conjugate.

The conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$. Their product eliminates the radical:

$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$$

This is the difference of squares pattern.

$$\\frac{3}{2 + \\sqrt{5}} = \\frac{3}{2 + \\sqrt{5}} \\cdot \\frac{2 - \\sqrt{5}}{2 - \\sqrt{5}} = \\frac{3(2 - \\sqrt{5})}{4 - 5} = \\frac{3(2 - \\sqrt{5})}{-1}$$

$$= -3(2 - \\sqrt{5}) = -6 + 3\\sqrt{5}$$

When both terms are radicals:

$$\\frac{1}{\\sqrt{7} + \\sqrt{3}} = \\frac{\\sqrt{7} - \\sqrt{3}}{(\\sqrt{7})^2 - (\\sqrt{3})^2} = \\frac{\\sqrt{7} - \\sqrt{3}}{4}$$

Conjugates also appear in [operations with radicals](!/algebra/roots/operations) for simplifying products and in [radical equations](!/algebra/roots/equations) for isolating terms.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Rationalizing Higher-Index Denominators`,
    content: `Binomial denominators with cube roots or higher require different patterns.

For cube roots, use the sum or difference of cubes:

$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$

$$(a - b)(a^2 + ab + b^2) = a^3 - b^3$$

To rationalize $\\frac{1}{\\sqrt[3]{2} + 1}$, let $a = \\sqrt[3]{2}$ and $b = 1$:

$$\\frac{1}{\\sqrt[3]{2} + 1} \\cdot \\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}$$

The denominator becomes:

$$(\\sqrt[3]{2})^3 + 1^3 = 2 + 1 = 3$$

The result:

$$\\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{3}$$

These patterns are algebraically intensive. Converting to [rational exponents](!/algebra/roots/rational-exponents) sometimes offers a cleaner path.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Reducing the Index`,
    content: `Sometimes the index of a radical can be reduced by finding common factors with the radicand's exponent.

$$\\sqrt[6]{x^4} = x^{4/6} = x^{2/3} = \\sqrt[3]{x^2}$$

The index dropped from 6 to 3 because 4 and 6 share a common factor of 2.

$$\\sqrt[4]{a^2} = a^{2/4} = a^{1/2} = \\sqrt{a}$$

The fourth root of a square is just a square root.

Converting to [rational exponents](!/algebra/roots/rational-exponents) makes this process mechanical: write the exponent as a fraction, reduce it, convert back if desired.

$$\\sqrt[8]{y^6} = y^{6/8} = y^{3/4} = \\sqrt[4]{y^3}$$

Index reduction is a form of simplification — smaller indices are generally preferred when mathematically equivalent.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Simplification Strategy`,
    content: `A systematic approach prevents missed simplifications.

First, factor the radicand completely — both numbers and variables. Identify all perfect power factors relative to the index.

Second, extract perfect powers using the product rule from [radical rules](!/algebra/roots/radical-rules).

Third, check for index reduction by examining whether the radicand's exponents share a common factor with the index.

Fourth, rationalize any denominators — monomial or binomial — to eliminate radicals from the bottom.

Fifth, verify the result meets all three criteria: no perfect power factors, no fractions under radicals, no radicals in denominators.

This process prepares expressions for [operations](!/algebra/roots/operations) and for solving [radical equations](!/algebra/roots/equations). Two expressions that appear different may simplify to the same form, revealing them as equal.`,
    before: ``,
    after: ``,
    link: '',
  },

}

 const introContent = {
  id: "intro",
  title: "Reducing to Simplest Form",
  content: `A radical in simplest form has no perfect powers hiding under the radical sign, no fractions beneath it, and no radicals in any denominator. Achieving this form requires factoring, applying radical rules, and sometimes rationalizing.

Simplification is not cosmetic. Simpler forms reveal structure, enable comparison, and prepare expressions for further operations. Two radicals that look different may be identical once simplified.`
}



const faqQuestions = {
  obj1: {
    question: "What does simplest radical form mean?",
    answer: "A radical is simplified when: (1) no perfect power factors remain under the radical, (2) no fractions appear under the radical, and (3) no radicals appear in denominators.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you simplify √72?",
    answer: "Factor out perfect squares: √72 = √(36·2) = √36·√2 = 6√2. Find the largest perfect square factor (36), separate using the product rule, then simplify.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you simplify √(x⁷)?",
    answer: "Divide the exponent by the index: 7÷2 = 3 remainder 1. Extract the quotient: √(x⁷) = √(x⁶·x) = x³√x. The largest even power extracts; the remainder stays.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you rationalize 5/√3?",
    answer: "Multiply by √3/√3: (5/√3)·(√3/√3) = 5√3/3. The denominator becomes √3·√3 = 3, eliminating the radical.",
    sectionId: "5"
  },
  obj5: {
    question: "How do you rationalize 1/(2+√5)?",
    answer: "Multiply by the conjugate: [1/(2+√5)]·[(2−√5)/(2−√5)] = (2−√5)/(4−5) = (2−√5)/(−1) = −2+√5. Conjugates eliminate radicals via difference of squares.",
    sectionId: "6"
  },
  obj6: {
    question: "What is the conjugate of a+√b?",
    answer: "The conjugate is a−√b. When multiplied: (a+√b)(a−√b) = a²−b. This difference of squares pattern eliminates the radical.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you rationalize cube root denominators?",
    answer: "Multiply to create a perfect cube: 2/∛5 becomes (2·∛25)/(∛5·∛25) = 2∛25/∛125 = 2∛25/5. Need two more factors of 5 to make ∛125 = 5.",
    sectionId: "5"
  },
  obj8: {
    question: "How do you reduce the index of a radical?",
    answer: "Find common factors between index and exponent: ⁶√(x⁴) = x^(4/6) = x^(2/3) = ∛(x²). The index drops from 6 to 3 because gcd(4,6) = 2.",
    sectionId: "8"
  },
  obj9: {
    question: "How do you simplify √(50x⁵)?",
    answer: "Factor completely: √(50x⁵) = √(25·2·x⁴·x) = 5x²√(2x). Extract perfect squares from both coefficient (25) and variable (x⁴).",
    sectionId: "4"
  },
  obj10: {
    question: "What are the steps to simplify any radical?",
    answer: "1) Factor the radicand completely. 2) Extract perfect powers. 3) Check for index reduction. 4) Rationalize any denominators. 5) Verify all three criteria are met.",
    sectionId: "9"
  }
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Simplifying Radicals",
    "description": "Learn to simplify radicals: factor perfect powers, simplify with variables, rationalize monomial and binomial denominators, reduce indices, and achieve simplest form.",
    "url": "https://www.learnmathclass.com/algebra/roots/simplifying",
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
      "name": "Simplifying Radicals"
    },
    "teaches": [
      "Criteria for simplest radical form",
      "Factoring out perfect powers",
      "Simplifying radicals with variables",
      "Rationalizing monomial denominators",
      "Rationalizing binomial denominators using conjugates",
      "Rationalizing higher-index denominators",
      "Reducing radical indices",
      "Systematic simplification strategy"
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
        "name": "Simplifying Radicals",
        "item": "https://www.learnmathclass.com/algebra/roots/simplifying"
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
//         title: "Simplifying Roots Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/roots/simplifying",
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
      title: "Simplifying Radicals: Rationalize & Reduce | Learn Math Class",
      description: "Learn to simplify radicals: factor perfect powers, simplify with variables, rationalize monomial and binomial denominators, reduce indices, and achieve simplest form.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/simplifying",
      name: "Simplifying Radicals"
    },
  }
}
   }

// export default function SimplifyingPage({seoData,sectionsContent , introContent}) {
export default function SimplifyingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Simplifying Roots</h1>
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
