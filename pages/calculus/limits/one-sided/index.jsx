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
  "one-sided limits",
  "left-hand limit",
  "right-hand limit",
  "limit from the left",
  "limit from the right",
  "x approaches a minus",
  "x approaches a plus",
  "one-sided limit notation",
  "piecewise function limits",
  "jump discontinuity",
  "one-sided limit examples",
  "evaluate one-sided limits",
  "vertical asymptote one-sided",
  "one-sided continuity"
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
    title: `Left-Hand Limits`,
    content: `
The left-hand limit uses a minus superscript:

$$\\lim_{x \\to a^-} f(x)$$

This notation means $x$ approaches $a$ through values strictly less than $a$. You move along the $x$-axis from the left, getting closer to $a$ but never reaching or passing it.

Alternative notations include $\\lim_{x \\to a-} f(x)$ and $\\lim_{x \\uparrow a} f(x)$. Some texts describe this as approaching "from below" since smaller $x$-values lie below $a$ on the number line.

The left-hand limit asks: as $x$ increases toward $a$, what value does $f(x)$ approach?
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Right-Hand Limits`,
    content: `
The right-hand limit uses a plus superscript:

$$\\lim_{x \\to a^+} f(x)$$

This notation means $x$ approaches $a$ through values strictly greater than $a$. You move along the $x$-axis from the right, getting closer to $a$ but never reaching or passing it.

Alternative notations include $\\lim_{x \\to a+} f(x)$ and $\\lim_{x \\downarrow a} f(x)$. Some texts describe this as approaching "from above" since larger $x$-values lie above $a$ on the number line.

The right-hand limit asks: as $x$ decreases toward $a$, what value does $f(x)$ approach?
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `The Connection to Two-Sided Limits`,
    content: `
The [two-sided limit](!/calculus/limits/two-sided) exists if and only if both one-sided limits exist and are equal:

$$\\lim_{x \\to a} f(x) = L \\quad \\Longleftrightarrow \\quad \\lim_{x \\to a^-} f(x) = L \\;\\text{ and }\\; \\lim_{x \\to a^+} f(x) = L$$

One-sided limits decompose the two-sided limit into its directional components. Checking whether a two-sided limit exists often begins with computing the one-sided limits separately.

If the one-sided limits exist but differ, the two-sided limit does not exist. If either one-sided limit fails to exist (due to oscillation or unbounded behavior), the two-sided limit also fails.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Piecewise Functions`,
    content: `
Functions defined by different formulas on different intervals require one-sided limit analysis at the boundaries between pieces.

Consider:

$$f(x) = \\begin{cases} x^2 & x < 2 \\\\ 3x - 2 & x \\geq 2 \\end{cases}$$

At $x = 2$, the left-hand limit uses the formula $x^2$:

$$\\lim_{x \\to 2^-} x^2 = 4$$

The right-hand limit uses the formula $3x - 2$:

$$\\lim_{x \\to 2^+} (3x - 2) = 4$$

Since both one-sided limits equal $4$, the two-sided limit exists and equals $4$. If the formulas had produced different values, the two-sided limit would not exist.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Jump Discontinuities`,
    content: `
A [jump discontinuity](!/calculus/limits/continuity) occurs when both one-sided limits exist but differ. The function "jumps" from one value to another at the point.

The floor function $\\lfloor x \\rfloor$ provides a standard example. At any integer $n$:

$$\\lim_{x \\to n^-} \\lfloor x \\rfloor = n - 1$$

$$\\lim_{x \\to n^+} \\lfloor x \\rfloor = n$$

The left-hand limit gives the integer below, while the right-hand limit gives the integer itself. The function jumps by $1$ at each integer. No two-sided limit exists at these points because the one-sided limits disagree.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `One-Sided Limits at Vertical Asymptotes`,
    content: `
Near a vertical asymptote, one-sided limits typically equal $+\\infty$ or $-\\infty$. The sign can differ depending on the direction of approach.

For $f(x) = \\dfrac{1}{x - 2}$:

$$\\lim_{x \\to 2^-} \\frac{1}{x - 2} = -\\infty$$

$$\\lim_{x \\to 2^+} \\frac{1}{x - 2} = +\\infty$$

From the left, $x - 2$ is a small negative number, so the reciprocal is a large negative number. From the right, $x - 2$ is a small positive number, so the reciprocal is a large positive number.

The [limits and infinity](!/calculus/limits/infinity) page covers infinite limits in detail.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `One-Sided Limits and Square Roots`,
    content: `
Expressions involving square roots often force one-sided analysis due to domain restrictions.

The expression $\\sqrt{4 - x}$ requires $4 - x \\geq 0$, meaning $x \\leq 4$. At $x = 4$, only the left-hand limit is meaningful:

$$\\lim_{x \\to 4^-} \\sqrt{4 - x} = 0$$

Similarly, $\\sqrt{x - 4}$ requires $x \\geq 4$, so at $x = 4$, only the right-hand limit applies:

$$\\lim_{x \\to 4^+} \\sqrt{x - 4} = 0$$

Domain boundaries naturally restrict limits to one side.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Evaluating One-Sided Limits`,
    content: `
The same [techniques](!/calculus/limits/evaluating) used for two-sided limits apply: direct substitution, factoring, rationalizing. The difference lies in tracking which side you approach from.

Sign analysis becomes critical. For the expression $\\dfrac{|x|}{x}$:

$$\\lim_{x \\to 0^+} \\frac{|x|}{x} = \\frac{x}{x} = 1$$

$$\\lim_{x \\to 0^-} \\frac{|x|}{x} = \\frac{-x}{x} = -1$$

When $x > 0$, the absolute value $|x| = x$. When $x < 0$, the absolute value $|x| = -x$. The direction of approach determines which case applies.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `One-Sided Continuity`,
    content: `
A function can be [continuous](!/calculus/limits/continuity) from one side without being continuous from the other.

Continuous from the left at $a$:

$$\\lim_{x \\to a^-} f(x) = f(a)$$

Continuous from the right at $a$:

$$\\lim_{x \\to a^+} f(x) = f(a)$$

Full continuity at $a$ requires both. On a closed interval $[a, b]$, continuity means: continuous on the open interval $(a, b)$, continuous from the right at $a$, and continuous from the left at $b$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Applications of One-Sided Limits`,
    content: `
One-sided limits appear throughout calculus and its applications.

## Endpoint Behavior

On closed intervals, function behavior at endpoints can only be examined from one direction. The limit from within the interval captures the boundary behavior.

## Classifying Discontinuities

Determining whether a discontinuity is a jump, removable, or infinite requires comparing one-sided limits to each other and to the function value.

## Piecewise Models

Real-world models often switch formulas at threshold values—tax brackets, shipping rates, material phase changes. One-sided limits detect whether the transition is smooth or abrupt.

## One-Sided Derivatives

A function may have different instantaneous rates of change from the left and right at a corner point. One-sided derivatives capture this asymmetry.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


 const introContent = {
   id:"intro",

  title: `Approaching From One Direction`,

  content: `
Sometimes a function behaves differently depending on which side you approach from. A piecewise function may follow one formula for $x < a$ and a different formula for $x > a$. A rational function may blow up to $+\\infty$ on one side and $-\\infty$ on the other. In these situations, one-sided limits become essential.

The left-hand limit examines behavior as $x$ approaches $a$ through values less than $a$. The right-hand limit examines behavior through values greater than $a$. Each direction gets its own answer, and those answers need not agree.

One-sided limits serve as the building blocks for two-sided limits. The two-sided limit exists precisely when both one-sided limits exist and match. When they differ, the one-sided limits capture the full story that a single two-sided limit cannot tell.
`
};

const faqQuestions = {
  obj1: {
    question: "What is a left-hand limit?",
    answer: "A left-hand limit, written lim(x→a⁻) f(x), examines function behavior as x approaches a through values strictly less than a. You move along the x-axis from the left, getting closer to a but never reaching it.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a right-hand limit?",
    answer: "A right-hand limit, written lim(x→a⁺) f(x), examines function behavior as x approaches a through values strictly greater than a. You move along the x-axis from the right, getting closer to a but never reaching it.",
    sectionId: "2"
  },
  obj3: {
    question: "How do one-sided limits relate to two-sided limits?",
    answer: "The two-sided limit exists if and only if both one-sided limits exist and are equal. If the left-hand and right-hand limits differ, or if either fails to exist, the two-sided limit does not exist.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you find limits of piecewise functions?",
    answer: "At boundaries between pieces, evaluate each one-sided limit using the formula that applies on that side. For example, at x = 2 where f(x) = x² for x < 2 and f(x) = 3x−2 for x ≥ 2, use x² for the left limit and 3x−2 for the right limit.",
    sectionId: "4"
  },
  obj5: {
    question: "What is a jump discontinuity?",
    answer: "A jump discontinuity occurs when both one-sided limits exist but differ. The function 'jumps' from one value to another at that point. The floor function ⌊x⌋ has jump discontinuities at every integer, jumping by 1 each time.",
    sectionId: "5"
  },
  obj6: {
    question: "How do one-sided limits behave at vertical asymptotes?",
    answer: "Near vertical asymptotes, one-sided limits typically equal +∞ or −∞, and the sign can differ by direction. For f(x) = 1/(x−2), the left limit at x = 2 is −∞ while the right limit is +∞.",
    sectionId: "6"
  },
  obj7: {
    question: "Why do square roots require one-sided limits?",
    answer: "Square root expressions have domain restrictions. For √(4−x), the domain requires x ≤ 4, so at x = 4 only the left-hand limit is meaningful. Domain boundaries naturally restrict limits to one side.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you evaluate one-sided limits?",
    answer: "Use the same techniques as two-sided limits—direct substitution, factoring, rationalizing—but track which side you approach from. Sign analysis is critical: for |x|/x, the left limit at 0 is −1 while the right limit is +1.",
    sectionId: "8"
  },
  obj9: {
    question: "What is one-sided continuity?",
    answer: "A function is continuous from the left at a if lim(x→a⁻) f(x) = f(a), and continuous from the right if lim(x→a⁺) f(x) = f(a). Full continuity requires both. On closed intervals, endpoints use one-sided continuity.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "One-Sided Limits",
    "description": "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
    "url": "https://www.learnmathclass.com/calculus/limits/one-sided",
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
      "name": "One-Sided Limits"
    },
    "teaches": [
      "Left-hand limit notation and meaning",
      "Right-hand limit notation and meaning",
      "Connection between one-sided and two-sided limits",
      "Evaluating limits of piecewise functions",
      "Jump discontinuities and vertical asymptotes",
      "One-sided continuity on closed intervals"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "One-Sided Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/one-sided"
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
//         title: "One-Sided Limits | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/calculus/limits/one-sided",
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
      title: "One-Sided Limits: Left & Right Approach | Learn Math Class",
      description: "Learn one-sided limits: left-hand and right-hand limit notation, piecewise functions, jump discontinuities, vertical asymptotes, and one-sided continuity.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/one-sided",
      name: "One-Sided Limits"
    },
  }
}
   }

// export default function OneSidedPage({seoData,sectionsContent , introContent}) {


export default function OneSidedPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>One-Sided Limits</h1>
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
