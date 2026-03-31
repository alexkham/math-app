import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  'radical rules',
  'product rule radicals',
  'quotient rule radicals',
  'power rule radicals',
  'nested radicals',
  'radical of a radical',
  'simplifying radicals rules',
  'radical exponent connection',
  'radical domain restrictions',
  'radical common errors',
  'combining radicals',
  'radical index rules',
  'radical properties algebra',
  'rational exponents and radicals'
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

 const sectionsContent = {

  obj1: {
    title: `Product Rule`,
    content: `The radical of a product equals the product of the radicals, provided both radicals share the same index.

$$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$$

This rule works in both directions. A single radical can split:

$$\\sqrt{12} = \\sqrt{4 \\cdot 3} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}$$

Or separate radicals can combine:

$$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = 6$$

The rule derives from exponent laws. In [rational exponent](!/algebra/roots/rational-exponents) notation:

$$(ab)^{1/n} = a^{1/n} \\cdot b^{1/n}$$

This is the power of a product rule from [powers](!/algebra/powers), applied to fractional exponents.

For even indices, both $a$ and $b$ must be non-negative when working in real numbers. Attempting to compute $\\sqrt{-2} \\cdot \\sqrt{-8}$ as $\\sqrt{16} = 4$ produces an error. Negative radicands under even roots require [complex number](!/algebra/roots/complex) treatment.

The product rule is essential for [simplifying radicals](!/algebra/roots/simplifying) — factoring out perfect powers relies on splitting the radical.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Quotient Rule`,
    content: `The radical of a quotient equals the quotient of the radicals.

$$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}, \\quad b \\neq 0$$

A fraction under a radical splits into a radical over a radical:

$$\\sqrt{\\frac{49}{16}} = \\frac{\\sqrt{49}}{\\sqrt{16}} = \\frac{7}{4}$$

The reverse direction combines:

$$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$$

The rule derives from exponents:

$$\\left(\\frac{a}{b}\\right)^{1/n} = \\frac{a^{1/n}}{b^{1/n}}$$

This is the power of a quotient rule from [powers](!/algebra/powers), extended to [rational exponents](!/algebra/roots/rational-exponents).

The quotient rule is essential for rationalizing denominators in [simplifying radicals](!/algebra/roots/simplifying). When a radical appears in a denominator, this rule helps restructure the expression.

For even indices, $a \\geq 0$ and $b > 0$ are required. The denominator must also be nonzero regardless of index.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Power Rule`,
    content: `When a power sits under a radical, the exponent and index interact:

$$\\sqrt[n]{a^m} = a^{m/n}$$

The exponent $m$ becomes the numerator; the index $n$ becomes the denominator. This directly connects radicals to [rational exponents](!/algebra/roots/rational-exponents).

The same result can be computed by taking the root first, then raising to the power:

$$\\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$$

Both approaches yield identical results:

$$\\sqrt[3]{8^2} = 8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$$

$$\\sqrt{16^3} = 16^{3/2} = \\left(\\sqrt{16}\\right)^3 = 4^3 = 64$$

When the exponent and index share a common factor, the radical simplifies:

$$\\sqrt[6]{a^4} = a^{4/6} = a^{2/3} = \\sqrt[3]{a^2}$$

The index reduced from 6 to 3 by canceling the common factor 2. This technique appears frequently in [simplifying radicals](!/algebra/roots/simplifying).

For even indices with variables, absolute values may be needed. The [properties of radicals](!/algebra/roots/properties) page addresses when $\\sqrt{x^2} = |x|$ rather than simply $x$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Radical of a Radical`,
    content: `When one radical contains another, the indices multiply:

$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$

The nested structure collapses into a single radical whose index is the product.

$$\\sqrt{\\sqrt{16}} = \\sqrt[2 \\cdot 2]{16} = \\sqrt[4]{16} = 2$$

Verification: $\\sqrt{16} = 4$, and $\\sqrt{4} = 2$. The result matches.

$$\\sqrt[3]{\\sqrt{64}} = \\sqrt[6]{64} = 2$$

Verification: $\\sqrt{64} = 8$, and $\\sqrt[3]{8} = 2$. Correct.

In exponent notation, this rule becomes transparent:

$$\\left(a^{1/n}\\right)^{1/m} = a^{1/(mn)}$$

This is the power of a power rule from [powers](!/algebra/powers) — multiply the exponents. Since $\\frac{1}{n} \\cdot \\frac{1}{m} = \\frac{1}{mn}$, the indices multiply.

Nested radicals sometimes appear in [simplifying](!/algebra/roots/simplifying) problems and when solving certain [radical equations](!/algebra/roots/equations). Recognizing the pattern allows immediate simplification.`,
    before: ``,
    after: ``,
    link: '',
  },

 obj5: {
    title: `When Rules Apply`,
    content: `The radical rules have restrictions. Ignoring them leads to errors.

The indices must match. The product and quotient rules require the same index on all radicals involved:

$$\\sqrt{a} \\cdot \\sqrt[3]{b} \\neq \\sqrt[?]{ab}$$

To multiply radicals with different indices, convert to [rational exponents](!/algebra/roots/rational-exponents), find a common denominator, then proceed.

For even indices, radicands must be non-negative in real numbers. The [properties of radicals](!/algebra/roots/properties) page details how even and odd indices differ. This restriction applies across all the rules: the product rule requires both factors to be non-negative, the quotient rule requires a non-negative numerator and a positive denominator, and the power rule requires a non-negative base whenever the index is even.

Odd roots, by contrast, accept negative radicands and preserve the sign:

$$\\sqrt[n]{-a} = -\\sqrt[n]{a} \\quad (n \\text{ odd})$$

For example, $\\sqrt[3]{-27} = -\\sqrt[3]{27} = -3$. The negative sign passes through the radical freely when the index is odd.

Violating the even-index restrictions does not merely give a wrong answer — it produces expressions that have no real value. The expression $\\sqrt{-4}$ requires [complex numbers](!/algebra/roots/complex) to interpret.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Common Errors`,
    content: `Certain mistakes appear repeatedly when working with radical rules.

Distributing a radical over addition:

$$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$$

This is false. The radical of a sum is not the sum of radicals. Check with numbers: $\\sqrt{9 + 16} = \\sqrt{25} = 5$, but $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$.

Mishandling different indices:

$$\\sqrt{2} \\cdot \\sqrt[3]{2} \\neq \\sqrt[5]{4}$$

Indices do not simply add. Converting to exponents: $2^{1/2} \\cdot 2^{1/3} = 2^{5/6} = \\sqrt[6]{2^5}$. The correct approach requires [rational exponent](!/algebra/roots/rational-exponents) techniques.

Ignoring domain restrictions:

$$\\sqrt{-3} \\cdot \\sqrt{-3} \\neq \\sqrt{9} = 3$$

The left side has no real value. Each factor is non-real. The product rule cannot be applied because the restriction $a, b \\geq 0$ fails. This error is addressed in [radicals and complex numbers](!/algebra/roots/complex).

Dropping absolute values:

$$\\sqrt{x^2} = |x|, \\quad \\text{not } x$$

When $x$ might be negative, the absolute value is essential. The [properties of radicals](!/algebra/roots/properties) page explains why.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Applying the Rules`,
    content: `The radical rules enable systematic simplification. Factoring a radicand and applying the product rule extracts values from under the radical:

$$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$$

Extracting perfect powers, rationalizing denominators, reducing indices, and combining like radicals all follow from the rules on this page. The complete toolkit for these techniques appears in [simplifying radicals](!/algebra/roots/simplifying), and methods for adding, subtracting, and multiplying radical expressions are covered in [operations with radicals](!/algebra/roots/operations). These rules also underpin solving [radical equations](!/algebra/roots/equations), where isolating and eliminating radicals requires systematic application of these identities.`,
    before: ``,
    after: ``,
    link: '',
  },

}

  const introContent = {
  id: "intro",
  title: "Predictable Patterns",
  content: `Radicals follow rules. A product under a radical splits into a product of radicals. A quotient under a radical splits into a quotient of radicals. Nested radicals collapse into a single radical with a combined index.

These patterns are not arbitrary — they derive from the connection between radicals and exponents. Every radical rule corresponds to an exponent law. Understanding why the rules work prevents misapplication and reveals when restrictions apply.`
}


const faqQuestions = {
  obj1: {
    question: "What are the main rules for radicals?",
    answer: "The main radical rules are the product rule (√(ab) = √a · √b), the quotient rule (√(a/b) = √a / √b), the power rule (ⁿ√(aᵐ) = a^(m/n)), and the nested radical rule (ᵐ√(ⁿ√a) = ᵐⁿ√a). Each rule requires matching indices and derives from corresponding exponent laws.",
    sectionId: "1"
  },
  obj2: {
    question: "Can you distribute a radical over addition?",
    answer: "No. √(a + b) does not equal √a + √b. For example, √(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7. The product and quotient rules apply to multiplication and division only, never to sums or differences.",
    sectionId: "6"
  },
  obj3: {
    question: "How do you simplify nested radicals?",
    answer: "When one radical contains another, multiply the indices. For example, √(√16) = ⁴√16 = 2. In exponent form, (a^(1/n))^(1/m) = a^(1/(mn)), which shows why the indices multiply.",
    sectionId: "4"
  },
  obj4: {
    question: "When do radical rules not apply?",
    answer: "Radical rules require matching indices for the product and quotient rules. For even indices, radicands must be non-negative in real numbers. Radicals with different indices cannot be directly combined — they must first be converted to rational exponents with a common denominator.",
    sectionId: "5"
  },
  obj5: {
    question: "How are radical rules connected to exponent laws?",
    answer: "Every radical rule corresponds to an exponent law. The product rule comes from (ab)^(1/n) = a^(1/n) · b^(1/n), the quotient rule from (a/b)^(1/n) = a^(1/n) / b^(1/n), and the nested radical rule from (a^(1/n))^(1/m) = a^(1/(mn)). Rational exponents unify all radical operations.",
    sectionId: "3"
  }
}


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": seoData.name,
//     "description": seoData.description,
//     "url": `https://www.learnmathclass.com${seoData.url}`,
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Radical Rules"
//     },
//     "teaches": [
//       "Product rule for radicals",
//       "Quotient rule for radicals",
//       "Power rule and rational exponent connection",
//       "Nested radical simplification",
//       "Domain restrictions for radical rules",
//       "Common errors when applying radical rules"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Algebra",
//         "item": "https://www.learnmathclass.com/algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Roots",
//         "item": "https://www.learnmathclass.com/algebra/roots"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": seoData.name,
//         "item": `https://www.learnmathclass.com${seoData.url}`
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Radical Rules",
    "description": "Learn radical rules: product rule, quotient rule, power rule, and nested radicals. Understand restrictions, common errors, and connections to exponent laws.",
    "url": "https://www.learnmathclass.com/algebra/roots/radical-rules",
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
      "name": "Radical Rules"
    },
    "teaches": [
      "Product rule for radicals",
      "Quotient rule for radicals",
      "Power rule and rational exponent connection",
      "Nested radical simplification",
      "Domain restrictions for radical rules",
      "Common errors when applying radical rules"
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
        "name": "Radical Rules",
        "item": "https://www.learnmathclass.com/algebra/roots/radical-rules"
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
      title: "Radical Rules: Product, Quotient & Power | Learn Math Class",
      description: "Learn radical rules: product rule, quotient rule, power rule, and nested radicals. Understand restrictions, common errors, and connections to exponent laws.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/radical-rules",
      name: "Radical Rules"
    },
  }
}
   }

export default function RadicalRulesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Radical Rules</h1>
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
