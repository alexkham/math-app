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
  "exponential equations",
  "solve exponential equation",
  "matching bases",
  "variable in exponent",
  "2^x = 8",
  "exponential equation examples",
  "solve for x in exponent",
  "exponential equation methods",
  "substitution exponential equation",
  "quadratic in exponential form",
  "rational exponent equations",
  "negative exponent equations",
  "extraneous solutions exponential",
  "exponential vs polynomial equation",
  "how to solve exponential equations"
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
  title: `What is an Exponential Equation`,
  content: `An exponential equation is any equation in which the variable appears in an exponent. The equation $2^x = 16$ is exponential — the unknown $x$ controls how many times the base is applied. The equation $3^{2x-1} = 27$ is exponential. The equation $5 \cdot 4^x = 320$ is exponential.

What makes these equations distinct from polynomial equations is the position of the variable. In $x^3 = 8$, the variable is the base and the exponent is a fixed number — this is a polynomial equation, solved by taking a [root](!/algebra/powers/rational-exponents). In $2^x = 8$, the base is fixed and the exponent is the variable — this is an exponential equation, and roots alone will not solve it.

The distinction matters because the techniques are entirely different. Polynomial equations are solved by factoring, applying the quadratic formula, or extracting roots. Exponential equations require rewriting expressions using the laws of exponents, matching bases, or — when those approaches fail — logarithms.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Method 1: Matching Bases`,
  content: `The simplest exponential equations yield to a single principle: if two powers of the same base are equal and the base is positive and not equal to $1$, then their exponents must be equal.

$$a^x = a^y \\implies x = y \\qquad (a > 0,\\; a \\neq 1)$$

For $2^x = 8$, recognize that $8 = 2^3$. The equation becomes $2^x = 2^3$, so $x = 3$.

The method extends to cases where the connection between bases is less obvious. The equation $4^x = 8$ involves different bases, but both are powers of $2$: $4 = 2^2$ and $8 = 2^3$. Rewriting gives $(2^2)^x = 2^3$, which by the power of a power rule becomes $2^{2x} = 2^3$. Matching exponents: $2x = 3$, so $x = \\frac{3}{2}$.

The equation $9^{x+1} = 27$ works the same way. Both bases are powers of $3$: $9 = 3^2$ and $27 = 3^3$. Rewriting: $(3^2)^{x+1} = 3^3$, giving $3^{2(x+1)} = 3^3$. So $2(x+1) = 3$, and $x = \\frac{1}{2}$.

The key skill is recognizing when two numbers share a common base. Familiarity with small powers — $2, 4, 8, 16, 32$; $3, 9, 27, 81$; $5, 25, 125$ — makes this recognition faster.`,
  before: ``,
  after: ``,
  link: '',
},

obj3: {
  title: `Method 2: Using Laws to Simplify`,
  content: `Some exponential equations require algebraic manipulation before the bases can be matched. The [laws of exponents](!/algebra/powers/laws) provide the tools for restructuring these expressions.

Consider $2^{x+1} + 2^x = 12$. The term $2^{x+1}$ can be rewritten using the product rule: $2^{x+1} = 2^x \cdot 2^1 = 2 \cdot 2^x$. The equation becomes $2 \cdot 2^x + 2^x = 12$.

Now $2^x$ is a common factor: $2^x(2 + 1) = 12$, which simplifies to $3 \cdot 2^x = 12$, so $2^x = 4 = 2^2$, giving $x = 2$.

Consider $3^{2x} - 4 \cdot 3^x + 3 = 0$. The term $3^{2x}$ equals $(3^x)^2$, so the equation is quadratic in $3^x$. But before reaching for substitution, notice that the laws transformed the original into a form where standard techniques apply — the exponent rules did the heavy lifting.

The general strategy is to express every exponential term in the equation as a power of a single base or as a product involving a single exponential expression. Once the equation has a single exponential unknown, isolation becomes straightforward.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Equations with Rational and Negative Exponents`,
  content: `Not every equation with exponents has the variable in the exponent. Some place the variable in the base while the exponent is a fixed [rational](!/algebra/powers/rational-exponents) or [negative](!/algebra/powers/negative-exponents) number. These are solved by inverting the exponent.

The equation $x^{2/3} = 4$ asks: what value of $x$, when raised to the power $\\frac{2}{3}$, gives $4$? To isolate $x$, raise both sides to the reciprocal power $\\frac{3}{2}$:

$$x = 4^{3/2} = (\\sqrt{4})^3 = 2^3 = 8$$

The equation $x^{-2} = 9$ translates to $\\frac{1}{x^2} = 9$, so $x^2 = \\frac{1}{9}$, giving $x = \\pm\\frac{1}{3}$.

The equation $x^{3/4} = 27$ is solved by raising both sides to the power $\\frac{4}{3}$: $x = 27^{4/3} = (\\sqrt[3]{27})^4 = 3^4 = 81$.

The reciprocal exponent works because $(a^{m/n})^{n/m} = a^1 = a$ by the power of a power rule. The exponent and its reciprocal undo each other, leaving the base isolated.`,
  before: ``,
  after: ``,
  link: '',
},


obj5: {
  title: `Equations Reducible to Simpler Form`,
  content: `Some exponential equations disguise a familiar structure. The equation $4^x - 3 \cdot 2^x + 2 = 0$ looks intimidating, but a substitution reveals a quadratic hiding underneath.

Since $4^x = (2^2)^x = (2^x)^2$, let $t = 2^x$. The equation becomes:

$$t^2 - 3t + 2 = 0$$

This [factors](!/algebra/polynomials/factoring) as $(t - 1)(t - 2) = 0$, giving $t = 1$ or $t = 2$.

Substituting back: $2^x = 1$ gives $x = 0$, and $2^x = 2$ gives $x = 1$. Both solutions are valid.

The substitution works whenever the equation involves two exponential terms where one exponent is double the other — $a^{2x}$ and $a^x$, or $a^{4x}$ and $a^{2x}$. The doubled exponent creates a perfect square under substitution, converting the exponential equation into a polynomial one.

More complex examples follow the same pattern. The equation $9^x + 2 \cdot 3^x - 15 = 0$ becomes $t^2 + 2t - 15 = 0$ with $t = 3^x$, factoring as $(t + 5)(t - 3) = 0$. Since $3^x > 0$ for all real $x$, the solution $t = -5$ is rejected, leaving $3^x = 3$ and $x = 1$.`,
  before: ``,
  after: ``,
  link: '',
},

obj6: {
  title: `Checking Solutions`,
  content: `Exponential equations demand verification, because the solving process can introduce values that fail in the original equation.

Domain validity is the first check. The base of an exponential expression must be positive when the exponent is irrational, and nonzero when the exponent is negative. Any solution that violates these conditions is extraneous and must be discarded.

The substitution method introduces the most common source of false solutions. When $t = a^x$ is used, only positive values of $t$ are valid — because $a^x > 0$ for any positive base $a$ and any real $x$. A quadratic in $t$ may produce a negative root, but that root has no corresponding real value of $x$.

Squaring both sides of an equation — sometimes necessary when rational exponents are involved — can also generate extraneous solutions. The equation $x^{1/2} = -3$ has no real solution, since a square root is non-negative. But squaring gives $x = 9$, which does not satisfy the original equation.

Substituting each candidate back into the original equation is the reliable final step. If the left side equals the right side, the solution stands. If not, it is discarded — regardless of how cleanly the algebra produced it.`,
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
  title: "Solving for the Exponent",
  content: `In a [polynomial](!/algebra/polynomials) equation like $x^2 = 9$, the unknown is the base and the exponent is fixed. In an exponential equation, the roles reverse — the base is known and the unknown sits in the exponent. The equation $2^x = 8$ asks not "what number squared gives $9$?" but "how many times must $2$ be multiplied by itself to reach $8$?" That shift demands a different set of solving techniques, all grounded in the [laws of exponents](!/algebra/powers/laws).`
}

const faqQuestions = {
  obj1: {
    question: "What is an exponential equation?",
    answer: "An exponential equation has the variable in the exponent, like 2ˣ = 16 or 3^(2x-1) = 27. This differs from polynomial equations like x³ = 8 where the variable is the base. The position of the variable determines which solving techniques apply."
  },
  obj2: {
    question: "How do you solve exponential equations by matching bases?",
    answer: "Rewrite both sides as powers of the same base, then set exponents equal. For 2ˣ = 8: since 8 = 2³, the equation becomes 2ˣ = 2³, so x = 3. This works because aˣ = aʸ implies x = y when a > 0 and a ≠ 1."
  },
  obj3: {
    question: "How do you solve 4^x = 8?",
    answer: "Convert both to powers of 2: 4 = 2² and 8 = 2³. The equation becomes (2²)ˣ = 2³, which simplifies to 2^(2x) = 2³. Match exponents: 2x = 3, so x = 3/2."
  },
  obj4: {
    question: "What if the bases cannot be matched?",
    answer: "When no common base exists (like 2ˣ = 5), logarithms are required. Take log of both sides: x·log(2) = log(5), so x = log(5)/log(2). This topic is covered in the logarithms section."
  },
  obj5: {
    question: "How do you solve equations with rational exponents like x^(2/3) = 4?",
    answer: "Raise both sides to the reciprocal power. For x^(2/3) = 4: raise to power 3/2 to get x = 4^(3/2) = (√4)³ = 2³ = 8. The reciprocal exponent undoes the original."
  },
  obj6: {
    question: "How do you solve x^(-2) = 9?",
    answer: "Rewrite as 1/x² = 9, so x² = 1/9, giving x = ±1/3. Negative exponents mean reciprocals, so isolate the positive exponent first, then solve normally."
  },
  obj7: {
    question: "How do substitution and quadratic methods work for exponential equations?",
    answer: "When an equation has a^(2x) and a^x terms, substitute t = aˣ. For 4ˣ - 3·2ˣ + 2 = 0: since 4ˣ = (2ˣ)², let t = 2ˣ. Get t² - 3t + 2 = 0, factor to (t-1)(t-2) = 0, giving t = 1 or t = 2, so x = 0 or x = 1."
  },
  obj8: {
    question: "Why do exponential equations sometimes have no solution?",
    answer: "Because aˣ > 0 for any positive base and real exponent. The equation 2ˣ = -4 has no solution since 2ˣ is always positive. Similarly, when substitution gives a negative value for t = aˣ, that root must be rejected."
  },
  obj9: {
    question: "What are extraneous solutions in exponential equations?",
    answer: "Solutions that emerge from algebra but don't satisfy the original equation. Substitution can produce negative t values (invalid since aˣ > 0). Squaring can introduce false roots. Always substitute answers back into the original equation to verify."
  },
  obj10: {
    question: "What's the difference between exponential and polynomial equations?",
    answer: "In exponential equations (2ˣ = 8), the variable is in the exponent. In polynomial equations (x³ = 8), the variable is the base. They require completely different solving techniques: matching bases vs taking roots or factoring."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Exponential Equations",
    "description": "Learn to solve exponential equations: matching bases, using exponent laws, substitution for quadratic forms, rational and negative exponent cases, and checking for extraneous solutions.",
    "url": "https://www.learnmathclass.com/algebra/powers/exponential-equations",
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
      "name": "Exponential Equations"
    },
    "teaches": [
      "What makes an equation exponential",
      "Matching bases method",
      "Using laws of exponents to simplify",
      "Equations with rational and negative exponents",
      "Substitution to reveal quadratic structure",
      "Identifying and rejecting extraneous solutions",
      "Domain validity checks"
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
        "name": "Exponential Equations",
        "item": "https://www.learnmathclass.com/algebra/powers/exponential-equations"
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
//         title: "Exponential Equations Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/powers/exponential-equations",
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
      title: "Exponential Equations: Solve for the Exponent | Learn Math Class",
      description: "Learn to solve exponential equations: matching bases, using exponent laws, substitution for quadratic forms, rational and negative exponent cases, and checking for extraneous solutions.",
      keywords: keyWords.join(", "),
      url: "/algebra/powers/exponential-equations",
      name: "Exponential Equations"
    },
  }
}
   }

// export default function ExponentialEquationsPage({seoData,sectionsContent , introContent}) {
export default function ExponentialEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Exponential Equations</h1>
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
