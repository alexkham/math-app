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
  "operations with radicals",
  "adding radicals",
  "subtracting radicals",
  "multiplying radicals",
  "dividing radicals",
  "like radicals",
  "conjugate radicals",
  "radical operations",
  "combine radicals",
  "multiply square roots",
  "add square roots",
  "radical expressions operations",
  "simplify radical expressions",
  "FOIL radicals",
  "squaring radicals"
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
  obj0: {
  title: `Key Terms`,
  content: `
## Combining Radicals
 
- [Like Radicals](!/algebra/definitions#like_radicals) — radicals with the same index and radicand; only like radicals can be added or subtracted
- [Conjugate](!/algebra/definitions#conjugate) — a binomial with the sign between terms reversed; its product with the original eliminates the radical
 
## Rules Used
 
- [Product Rule (Radicals)](!/algebra/definitions#product_rule_(radicals)) — multiplying radicals with the same index
- [Quotient Rule (Radicals)](!/algebra/definitions#quotient_rule_(radicals)) — dividing radicals with the same index
- [Rational Exponent](!/algebra/definitions#rational_exponent) — used to multiply radicals with different indices by finding a common denominator
- [Simplest Form](!/algebra/definitions#simplest_form) — simplify each radical before attempting to add or subtract`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},

  obj1: {
    title: `Like Radicals`,
    content: `Like radicals share the same index and the same radicand. Only like radicals can be added or subtracted.

$$3\\sqrt{5} \\text{ and } 7\\sqrt{5} \\quad \\text{are like radicals}$$

$$\\sqrt{3} \\text{ and } \\sqrt{5} \\quad \\text{are not like — different radicands}$$

$$\\sqrt{2} \\text{ and } \\sqrt[3]{2} \\quad \\text{are not like — different indices}$$

The concept parallels like terms in algebra. Just as $3x$ and $7x$ can combine but $3x$ and $7y$ cannot, radicals combine only when their radical parts match exactly.

Recognizing like radicals sometimes requires [simplification](!/algebra/roots/simplifying) first. Two radicals that appear different may become like after simplifying.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Adding and Subtracting Like Radicals`,
    content: `To add or subtract like radicals, combine the coefficients and keep the radical unchanged.

$$3\\sqrt{5} + 7\\sqrt{5} = 10\\sqrt{5}$$

$$8\\sqrt[3]{2} - 3\\sqrt[3]{2} = 5\\sqrt[3]{2}$$

$$\\frac{1}{2}\\sqrt{7} + \\frac{3}{4}\\sqrt{7} = \\frac{5}{4}\\sqrt{7}$$

Unlike radicals cannot be combined:

$$\\sqrt{2} + \\sqrt{3}$$

This expression is already in simplest form. No further reduction is possible.

When radicals appear unlike but can be simplified to like form:

$$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$$

Always [simplify](!/algebra/roots/simplifying) each radical before attempting to add or subtract.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Multiplying Radicals with the Same Index`,
    content: `When radicals share the same index, multiply the radicands and keep the index.

$$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$$

This is the product rule from [radical rules](!/algebra/roots/radical-rules).

$$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$$

$$\\sqrt[3]{4} \\cdot \\sqrt[3]{2} = \\sqrt[3]{8} = 2$$

When coefficients are present, multiply them separately:

$$3\\sqrt{2} \\cdot 4\\sqrt{5} = 12\\sqrt{10}$$

$$(2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$$

Multiplication often produces results that can be [simplified](!/algebra/roots/simplifying):

$$\\sqrt{6} \\cdot \\sqrt{8} = \\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Multiplying Radicals with Different Indices`,
    content: `When indices differ, the product rule does not apply directly. Convert to [rational exponents](!/algebra/roots/rational-exponents), find a common denominator, then proceed.

$$\\sqrt{2} \\cdot \\sqrt[3]{2} = 2^{1/2} \\cdot 2^{1/3}$$

Find a common denominator for the exponents:

$$= 2^{3/6} \\cdot 2^{2/6} = 2^{5/6} = \\sqrt[6]{2^5} = \\sqrt[6]{32}$$

Alternatively, convert both radicals to the same index first:

$$\\sqrt{2} = \\sqrt[6]{2^3} = \\sqrt[6]{8}$$

$$\\sqrt[3]{2} = \\sqrt[6]{2^2} = \\sqrt[6]{4}$$

$$\\sqrt[6]{8} \\cdot \\sqrt[6]{4} = \\sqrt[6]{32}$$

Both methods reach the same result. The exponent approach is often more efficient for complex expressions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Dividing Radicals`,
    content: `Division follows the quotient rule from [radical rules](!/algebra/roots/radical-rules):

$$\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$

$$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$$

$$\\frac{\\sqrt[3]{54}}{\\sqrt[3]{2}} = \\sqrt[3]{\\frac{54}{2}} = \\sqrt[3]{27} = 3$$

With coefficients:

$$\\frac{12\\sqrt{15}}{4\\sqrt{3}} = \\frac{12}{4} \\cdot \\sqrt{\\frac{15}{3}} = 3\\sqrt{5}$$

When indices differ, convert to [rational exponents](!/algebra/roots/rational-exponents):

$$\\frac{\\sqrt{8}}{\\sqrt[3]{4}} = \\frac{2^{3/2}}{2^{2/3}} = 2^{3/2 - 2/3} = 2^{9/6 - 4/6} = 2^{5/6} = \\sqrt[6]{32}$$

If the result leaves a radical in the denominator, [rationalize](!/algebra/roots/simplifying) to achieve simplest form.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Conjugates`,
    content: `The conjugate of a binomial expression reverses the sign between terms.

Conjugate of $a + \\sqrt{b}$ is $a - \\sqrt{b}$.

Conjugate of $\\sqrt{a} - \\sqrt{b}$ is $\\sqrt{a} + \\sqrt{b}$.

The key property: multiplying conjugates eliminates radicals.

$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$$

$$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$$

These are difference of squares patterns.

$$( 3 + \\sqrt{2})(3 - \\sqrt{2}) = 9 - 2 = 7$$

$$(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3}) = 7 - 3 = 4$$

Conjugates are essential for [rationalizing denominators](!/algebra/roots/simplifying) and appear in solving certain [radical equations](!/algebra/roots/equations).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Expanding Products with Radicals`,
    content: `Binomials containing radicals expand using the distributive property, just like algebraic binomials.

$$(2 + \\sqrt{3})(4 - \\sqrt{3})$$

Apply FOIL:

$$= 2 \\cdot 4 + 2 \\cdot (-\\sqrt{3}) + \\sqrt{3} \\cdot 4 + \\sqrt{3} \\cdot (-\\sqrt{3})$$

$$= 8 - 2\\sqrt{3} + 4\\sqrt{3} - 3$$

$$= 5 + 2\\sqrt{3}$$

Squaring a binomial:

$$(\\sqrt{5} + \\sqrt{2})^2 = (\\sqrt{5})^2 + 2\\sqrt{5}\\sqrt{2} + (\\sqrt{2})^2$$

$$= 5 + 2\\sqrt{10} + 2 = 7 + 2\\sqrt{10}$$

Common error: $(a + \\sqrt{b})^2 \\neq a^2 + b$. The middle term $2a\\sqrt{b}$ must not be forgotten.

These expansions appear frequently in [radical equations](!/algebra/roots/equations) when both sides are squared.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Squaring Radical Expressions`,
    content: `Squaring eliminates square roots:

$$(\\sqrt{x})^2 = x$$

$$(3\\sqrt{5})^2 = 9 \\cdot 5 = 45$$

For binomials, expand fully:

$$(\\sqrt{x} + 3)^2 = x + 6\\sqrt{x} + 9$$

$$(\\sqrt{x + 1} - 2)^2 = (x + 1) - 4\\sqrt{x + 1} + 4 = x + 5 - 4\\sqrt{x + 1}$$

When solving [radical equations](!/algebra/roots/equations), squaring both sides is the primary technique for eliminating radicals. The expressions above show what results from squaring — and why squaring a binomial with a radical does not fully eliminate the radical unless conjugates are involved.

Squaring can also introduce extraneous solutions. Any solution must be checked in the original equation, as detailed in the [equations](!/algebra/roots/equations) page.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Operations Strategy`,
    content: `A systematic approach to radical operations:

Before adding or subtracting, [simplify](!/algebra/roots/simplifying) each radical to identify like radicals.

Before multiplying or dividing, check whether indices match. If they do, apply the product or quotient rule. If not, convert to [rational exponents](!/algebra/roots/rational-exponents).

After any operation, simplify the result. Multiplication often creates perfect power factors. Division may leave radicals in denominators requiring rationalization.

When expanding products, apply distributive property carefully. Track each term. Combine like radicals at the end.

These operations prepare expressions for solving [radical equations](!/algebra/roots/equations) and for analyzing [radical functions](!/algebra/roots/functions). Fluency here makes those topics more accessible.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Combining Radical Expressions",
  content: `Radicals can be added, subtracted, multiplied, and divided — but each operation has its own requirements. Addition and subtraction work only with like radicals. Multiplication and division follow the radical rules but require matching indices.

Mastering these operations transforms complicated expressions into simpler ones and prepares the ground for solving equations where radicals appear.`
}


const faqQuestions = {
  obj1: {
    question: "What are like radicals?",
    answer: "Like radicals have the same index and the same radicand. For example, 3√5 and 7√5 are like radicals. √3 and √5 are not like (different radicands), and √2 and ∛2 are not like (different indices).",
    sectionId: "1"
  },
  obj2: {
    question: "How do you add or subtract radicals?",
    answer: "Only like radicals can be added or subtracted. Combine the coefficients and keep the radical unchanged: 3√5 + 7√5 = 10√5. Simplify each radical first to identify like radicals.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you multiply radicals?",
    answer: "For radicals with the same index, multiply the radicands: √a · √b = √(ab). For example, √3 · √12 = √36 = 6. Multiply coefficients separately: 3√2 · 4√5 = 12√10.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you multiply radicals with different indices?",
    answer: "Convert to rational exponents, find a common denominator, then multiply. For √2 · ∛2: write as 2^(1/2) · 2^(1/3) = 2^(3/6) · 2^(2/6) = 2^(5/6) = ⁶√32.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you divide radicals?",
    answer: "For same-index radicals, divide the radicands: √a/√b = √(a/b). For example, √50/√2 = √25 = 5. Rationalize if a radical remains in the denominator.",
    sectionId: "5"
  },
  obj6: {
    question: "What is a conjugate in radical expressions?",
    answer: "The conjugate reverses the sign between terms. The conjugate of a + √b is a − √b. Multiplying conjugates eliminates radicals: (a + √b)(a − √b) = a² − b.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you expand (√a + √b)²?",
    answer: "Use the binomial square formula: (√a + √b)² = a + 2√(ab) + b. Don't forget the middle term 2√(ab). For (√5 + √2)² = 5 + 2√10 + 2 = 7 + 2√10.",
    sectionId: "7"
  },
  obj8: {
    question: "What happens when you square a radical expression?",
    answer: "Squaring eliminates square roots: (√x)² = x and (3√5)² = 9·5 = 45. For binomials like (√x + 3)², expand fully: x + 6√x + 9. The radical may survive in binomials.",
    sectionId: "8"
  },
  obj9: {
    question: "Can you add √2 + √3?",
    answer: "No, √2 + √3 cannot be simplified further. They are unlike radicals (different radicands). The expression is already in simplest form.",
    sectionId: "2"
  },
  obj10: {
    question: "Why are conjugates useful?",
    answer: "Conjugates eliminate radicals when multiplied: (√7 + √3)(√7 − √3) = 7 − 3 = 4. This is essential for rationalizing denominators and solving some radical equations.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Operations on Roots",
    "description": "Learn operations with radicals: adding, subtracting, multiplying, and dividing radical expressions. Includes conjugates, expanding products, and squaring radicals.",
    "url": "https://www.learnmathclass.com/algebra/roots/operations",
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
      "name": "Radical Operations"
    },
    "teaches": [
      "Identifying like radicals",
      "Adding and subtracting radicals",
      "Multiplying radicals with same index",
      "Multiplying radicals with different indices",
      "Dividing radicals",
      "Using conjugates",
      "Expanding products with radicals",
      "Squaring radical expressions"
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
        "name": "Operations on Roots",
        "item": "https://www.learnmathclass.com/algebra/roots/operations"
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
      title: "Operations on Radicals: Add, Subtract, Multiply, Divide | Learn Math Class",
      description: "Learn operations with radicals: adding, subtracting, multiplying, and dividing radical expressions. Includes conjugates, expanding products, and squaring radicals.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/operations",
      name: "Operations on Roots"
    },
  }
}
   }

// export default function OperationsPage({seoData,sectionsContent , introContent}) {


export default function OperationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Operations on Roots</h1>
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
    <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
