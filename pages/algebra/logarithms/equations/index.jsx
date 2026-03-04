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
  "logarithmic equations",
  "solve log equations",
  "log equation examples",
  "solving exponential equations with logarithms",
  "logarithm equation solver",
  "how to solve log equations",
  "extraneous solutions logarithms",
  "domain restrictions logarithms",
  "log equals constant",
  "combining logarithms to solve",
  "one-to-one property logarithms",
  "exponential equation logarithm",
  "log x equals",
  "ln equation solving",
  "logarithmic equations step by step"
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
    title: `Basic Form: Logarithm Equals a Constant`,
    content: `The simplest logarithmic equation has the form $\\log_a(x) = k$, where $k$ is a constant.

Convert to exponential form using the definition: $\\log_a(x) = k$ means $a^k = x$.

Example: Solve $\\log_2(x) = 5$.
$$x = 2^5 = 32$$

Example: Solve $\\log_3(x) = -2$.
$$x = 3^{-2} = \\frac{1}{9}$$

Example: Solve $\\ln(x) = 4$.
$$x = e^4 \\approx 54.598$$

When the argument is an expression, solve the resulting equation:

Example: Solve $\\log_5(2x - 1) = 2$.
$$2x - 1 = 5^2 = 25$$
$$2x = 26$$
$$x = 13$$`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Logarithms on Both Sides`,
    content: `When the same logarithm base appears on both sides, apply the one-to-one property: if $\\log_a(M) = \\log_a(N)$, then $M = N$.

Example: Solve $\\log_4(3x + 2) = \\log_4(x + 10)$.
$$3x + 2 = x + 10$$
$$2x = 8$$
$$x = 4$$

Verification: $\\log_4(3(4) + 2) = \\log_4(14)$ and $\\log_4(4 + 10) = \\log_4(14)$. Both arguments are positive, and the equation holds.

Example: Solve $\\ln(x^2) = \\ln(9)$.
$$x^2 = 9$$
$$x = \\pm 3$$

Check both: $\\ln((-3)^2) = \\ln(9)$ works, and $\\ln((3)^2) = \\ln(9)$ works. Both solutions are valid.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Combining Logarithms`,
    content: `When multiple logarithms appear, use the [rules](!/algebra/logarithms/rules) to condense them into a single logarithm, then apply previous techniques.

Example: Solve $\\log_2(x) + \\log_2(x - 2) = 3$.

Condense using the product rule:
$$\\log_2(x(x - 2)) = 3$$
$$\\log_2(x^2 - 2x) = 3$$

Convert to exponential form:
$$x^2 - 2x = 2^3 = 8$$
$$x^2 - 2x - 8 = 0$$
$$(x - 4)(x + 2) = 0$$
$$x = 4 \\text{ or } x = -2$$

Check domain: $x = 4$ gives $\\log_2(4) + \\log_2(2)$, both defined. $x = -2$ gives $\\log_2(-2)$, undefined. Reject $x = -2$.

Solution: $x = 4$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Domain Restrictions`,
    content: `Every argument of every logarithm in the original equation must be positive. Identify these restrictions before solving.

For $\\log_a(f(x))$ to be defined, $f(x) > 0$.

Example: In $\\log_3(x - 5) + \\log_3(x + 1) = 2$, the restrictions are:
$$x - 5 > 0 \\implies x > 5$$
$$x + 1 > 0 \\implies x > -1$$

The intersection is $x > 5$. Any solution must satisfy $x > 5$.

Solving:
$$\\log_3((x-5)(x+1)) = 2$$
$$(x-5)(x+1) = 9$$
$$x^2 - 4x - 5 = 9$$
$$x^2 - 4x - 14 = 0$$
$$x = \\frac{4 \\pm \\sqrt{16 + 56}}{2} = \\frac{4 \\pm \\sqrt{72}}{2} = 2 \\pm 3\\sqrt{2}$$

Since $3\\sqrt{2} \\approx 4.24$, we have $x \\approx 6.24$ or $x \\approx -2.24$. Only $x = 2 + 3\\sqrt{2}$ satisfies $x > 5$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Extraneous Solutions`,
    content: `Extraneous solutions arise when algebraic manipulation produces values that violate the original equation's domain. Always substitute back into the original equation.

Example: Solve $\\log(x) + \\log(x - 3) = 1$.

$$\\log(x(x-3)) = 1$$
$$x(x-3) = 10$$
$$x^2 - 3x - 10 = 0$$
$$(x-5)(x+2) = 0$$
$$x = 5 \\text{ or } x = -2$$

Check $x = 5$: $\\log(5) + \\log(2)$ — both defined, sum equals $\\log(10) = 1$. Valid.

Check $x = -2$: $\\log(-2)$ — undefined. Extraneous.

The squaring, factoring, or combining steps do not "create" these solutions — they were always algebraic solutions to the transformed equation. The domain restrictions eliminate them.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Equations Requiring Substitution`,
    content: `Some equations have a quadratic structure in the logarithm. Substitution simplifies the algebra.

Example: Solve $(\\log_2(x))^2 - 5\\log_2(x) + 6 = 0$.

Let $u = \\log_2(x)$:
$$u^2 - 5u + 6 = 0$$
$$(u - 2)(u - 3) = 0$$
$$u = 2 \\text{ or } u = 3$$

Back-substitute:
$$\\log_2(x) = 2 \\implies x = 4$$
$$\\log_2(x) = 3 \\implies x = 8$$

Both satisfy $x > 0$. Solutions: $x = 4$ and $x = 8$.

Example: Solve $\\ln(x) + \\frac{6}{\\ln(x)} = 5$.

Let $u = \\ln(x)$:
$$u + \\frac{6}{u} = 5$$
$$u^2 + 6 = 5u$$
$$u^2 - 5u + 6 = 0$$
$$(u-2)(u-3) = 0$$

Back-substitute: $x = e^2$ or $x = e^3$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Solving Exponential Equations via Logarithms`,
    content: `When an exponential equation cannot be solved by matching bases, take the logarithm of both sides.

Example: Solve $3^x = 7$.

No integer power of $3$ equals $7$. Take logarithms:
$$\\log(3^x) = \\log(7)$$
$$x \\cdot \\log(3) = \\log(7)$$
$$x = \\frac{\\log(7)}{\\log(3)} \\approx \\frac{0.845}{0.477} \\approx 1.771$$

Either $\\log$ or $\\ln$ works — the ratio is identical.

Example: Solve $5^{2x+1} = 12$.

$$\\ln(5^{2x+1}) = \\ln(12)$$
$$(2x+1)\\ln(5) = \\ln(12)$$
$$2x + 1 = \\frac{\\ln(12)}{\\ln(5)}$$
$$2x = \\frac{\\ln(12)}{\\ln(5)} - 1$$
$$x = \\frac{1}{2}\\left(\\frac{\\ln(12)}{\\ln(5)} - 1\\right) \\approx 0.271$$`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Exponentials on Both Sides`,
    content: `When exponential expressions with different bases appear on both sides, logarithms bring down both exponents.

Example: Solve $2^{x+3} = 5^{x-1}$.

Take logarithms:
$$\\ln(2^{x+3}) = \\ln(5^{x-1})$$
$$(x+3)\\ln(2) = (x-1)\\ln(5)$$

Expand:
$$x\\ln(2) + 3\\ln(2) = x\\ln(5) - \\ln(5)$$

Collect $x$ terms:
$$x\\ln(2) - x\\ln(5) = -\\ln(5) - 3\\ln(2)$$
$$x(\\ln(2) - \\ln(5)) = -\\ln(5) - 3\\ln(2)$$
$$x = \\frac{-\\ln(5) - 3\\ln(2)}{\\ln(2) - \\ln(5)} = \\frac{\\ln(5) + 3\\ln(2)}{\\ln(5) - \\ln(2)}$$

Numerically: $x = \\frac{1.609 + 2.079}{1.609 - 0.693} = \\frac{3.688}{0.916} \\approx 4.026$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Choosing Common or Natural Logarithm`,
    content: `When taking logarithms to solve exponential equations, either base produces the same answer.

For $3^x = 7$:
$$x = \\frac{\\log(7)}{\\log(3)} = \\frac{\\ln(7)}{\\ln(3)} = \\log_3(7)$$

All three expressions are equal by the change of base formula.

Practical considerations:

- If the base is $e$, use $\\ln$: solving $e^{2x} = 5$ gives $2x = \\ln(5)$, no division needed.

- If the base is $10$, use $\\log$: solving $10^{x-1} = 50$ gives $x - 1 = \\log(50)$.

- Otherwise, either works. Choose based on calculator availability or notational preference.

The expressions $\\log(7)/\\log(3)$ and $\\ln(7)/\\ln(3)$ compute to identical decimal values.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
  title: `Isolating the Variable Inside the Logarithm`,
  content: `Equations containing [logarithms](!/algebra/logarithms) require techniques that exploit the definition and [properties](!/algebra/logarithms/properties) of logarithmic functions. Converting to exponential form, applying the one-to-one property, and using [logarithm rules](!/algebra/logarithms/rules) to combine expressions — these methods reduce logarithmic equations to algebraic ones. Every solution must be verified against domain restrictions, as the solving process can introduce extraneous values.`,
};


const faqQuestions = {
  obj1: {
    question: "How do you solve log(x) = k?",
    answer: "Convert to exponential form using the definition: log_a(x) = k means x = a^k. For example, log₂(x) = 5 gives x = 2⁵ = 32. For ln(x) = 4, x = e⁴ ≈ 54.6.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve equations with log on both sides?",
    answer: "Use the one-to-one property: if log_a(M) = log_a(N), then M = N. For log₄(3x+2) = log₄(x+10), set 3x+2 = x+10 and solve to get x = 4.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you combine logarithms to solve an equation?",
    answer: "Use logarithm rules to condense multiple logs into one. For log₂(x) + log₂(x-2) = 3, combine to log₂(x(x-2)) = 3, then convert: x² - 2x = 8.",
    sectionId: "3"
  },
  obj4: {
    question: "What are domain restrictions in logarithmic equations?",
    answer: "Every argument of every logarithm must be positive. For log(x-5) + log(x+1), you need x-5 > 0 AND x+1 > 0, so x > 5. Check all solutions against these restrictions.",
    sectionId: "4"
  },
  obj5: {
    question: "What are extraneous solutions in log equations?",
    answer: "Extraneous solutions are algebraic solutions that violate domain restrictions. For log(x) + log(x-3) = 1, solving gives x = 5 or x = -2, but x = -2 makes log(-2) undefined, so reject it.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you solve (log x)² - 5log(x) + 6 = 0?",
    answer: "Use substitution: let u = log(x). Solve u² - 5u + 6 = 0 to get u = 2 or u = 3. Back-substitute: log(x) = 2 gives x = 100, log(x) = 3 gives x = 1000.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you solve exponential equations like 3^x = 7?",
    answer: "Take logarithms of both sides: log(3^x) = log(7), so x·log(3) = log(7). Divide: x = log(7)/log(3) ≈ 1.771. Either log or ln gives the same answer.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you solve 2^(x+3) = 5^(x-1)?",
    answer: "Take ln of both sides: (x+3)ln(2) = (x-1)ln(5). Expand, collect x terms on one side, and solve. This gives x = (ln5 + 3ln2)/(ln5 - ln2) ≈ 4.03.",
    sectionId: "8"
  },
  obj9: {
    question: "Does it matter if I use log or ln to solve equations?",
    answer: "No. For 3^x = 7, both log(7)/log(3) and ln(7)/ln(3) give the same decimal answer. Use ln when the base is e, log when base is 10, otherwise either works.",
    sectionId: "9"
  },
  obj10: {
    question: "Why must you always check solutions in log equations?",
    answer: "Algebraic manipulation can produce values that make original logarithms undefined. Substituting back into the original equation catches these extraneous solutions before reporting the final answer.",
    sectionId: "5"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithmic Equations",
    "description": "Learn to solve logarithmic equations: convert to exponential form, use one-to-one property, combine logs, handle domain restrictions, and solve exponential equations with logs.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/equations",
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
      "name": "Logarithmic Equations"
    },
    "teaches": [
      "Converting logarithmic equations to exponential form",
      "One-to-one property for equal logarithms",
      "Combining logarithms using rules",
      "Domain restrictions and checking solutions",
      "Identifying extraneous solutions",
      "Substitution for quadratic-type log equations",
      "Solving exponential equations using logarithms"
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
        "name": "Logarithmic Equations",
        "item": "https://www.learnmathclass.com/algebra/logarithms/equations"
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
//         title: "Logarithmic Equations | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/logarithms/equations",
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
      title: "Logarithmic Equations: Solving Methods & Examples | Learn Math Class",
      description: "Learn to solve logarithmic equations: convert to exponential form, use one-to-one property, combine logs, handle domain restrictions, and solve exponential equations with logs.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/equations",
      name: "Logarithmic Equations"
    },
  }
}
   }

// export default function EquationsPage({seoData,sectionsContent , introContent}) {
export default function EquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Logarithmic Equations</h1>
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
