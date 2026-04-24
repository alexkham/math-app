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
  "continuity calculus",
  "continuous function definition",
  "types of discontinuities",
  "removable discontinuity",
  "jump discontinuity",
  "infinite discontinuity",
  "intermediate value theorem",
  "IVT calculus",
  "continuous at a point",
  "continuity on interval",
  "limit equals function value",
  "oscillating discontinuity",
  "continuous functions list",
  "discontinuity types calculus",
  "IVT root finding"
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
    title: `The Intuitive Idea`,
    content: `
A continuous function has no breaks in its graph. You can trace the curve without lifting your pen. The function value at each point matches what the surrounding values predict.

Intuitively, small changes in input produce small changes in output. There are no surprises—no sudden jumps, no missing points, no explosions to infinity.

This matches everyday experience. Temperature varies continuously throughout the day. Position changes continuously as you walk. Discontinuities—sudden jumps or gaps—signal something unusual: a switch being flipped, a boundary being crossed.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Formal Definition`,
    content: `
A function $f$ is continuous at $x = a$ if three conditions hold:

**1.** $f(a)$ is defined — the function has a value at $a$

**2.** $\\lim_{x \\to a} f(x)$ exists — the [two-sided limit](!/calculus/limits/two-sided) exists

**3.** $\\lim_{x \\to a} f(x) = f(a)$ — the limit equals the function value

All three conditions must hold. The single equation

$$\\lim_{x \\to a} f(x) = f(a)$$

encapsulates all three: the right side requires $f(a)$ to exist, the left side requires the limit to exist, and the equality requires them to match.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Continuity on Intervals`,
    content: `
A function is continuous on an open interval $(a, b)$ if it is continuous at every point in that interval.

For closed intervals $[a, b]$, the definition adjusts at endpoints where only one direction of approach is available:

- Continuous on $(a, b)$
- Right-continuous at $a$: $\\lim_{x \\to a^+} f(x) = f(a)$
- Left-continuous at $b$: $\\lim_{x \\to b^-} f(x) = f(b)$

[One-sided continuity](!/calculus/limits/one-sided) handles the boundaries where the domain restricts approach to a single direction.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Types of Discontinuities`,
    content: `
Discontinuities are classified by which condition fails and how.

**Removable discontinuity:** The limit exists, but $f(a)$ is undefined or $f(a) \\neq \\lim_{x \\to a} f(x)$

**Jump discontinuity:** Both one-sided limits exist but differ

**Infinite discontinuity:** At least one one-sided limit is $\\pm\\infty$

**Oscillating discontinuity:** The limit fails to exist due to oscillation

Each type reveals different information about the function's behavior and determines whether the discontinuity can be "fixed."
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Removable Discontinuity`,
    content: `
A removable discontinuity occurs when the limit exists but differs from the function value (or the function is undefined).

Consider:

$$f(x) = \\frac{x^2 - 1}{x - 1}$$

For $x \\neq 1$, this simplifies to $x + 1$. The limit as $x \\to 1$ is $2$. But $f(1)$ is undefined—division by zero.

The graph shows a hole at $(1, 2)$. The discontinuity is removable because redefining $f(1) = 2$ fills the hole and makes the function continuous.

Removable discontinuities are "accidents" that can be repaired with a single point adjustment.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Jump Discontinuity`,
    content: `
A jump discontinuity occurs when both [one-sided limits](!/calculus/limits/one-sided) exist but are unequal:

$$\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$$

The function "jumps" from one value to another at $x = a$.

The floor function $\\lfloor x \\rfloor$ jumps at every integer. At $x = 2$:

$$\\lim_{x \\to 2^-} \\lfloor x \\rfloor = 1 \\qquad \\lim_{x \\to 2^+} \\lfloor x \\rfloor = 2$$

No single value of $f(2)$ can equal both one-sided limits. The discontinuity cannot be removed—the gap is intrinsic to the function's definition.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Infinite Discontinuity`,
    content: `
An infinite discontinuity occurs when the function blows up—at least one one-sided limit equals $\\pm\\infty$.

For $f(x) = \\dfrac{1}{x}$ at $x = 0$:

$$\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty \\qquad \\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$$

The graph has a [vertical asymptote](!/calculus/limits/infinity) at $x = 0$. No finite value can serve as $f(0)$ because the function escapes to infinity from both sides.

Infinite discontinuities mark points where the function is fundamentally unbounded.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Oscillating Discontinuity`,
    content: `
An oscillating discontinuity occurs when the function oscillates without settling, preventing the limit from existing.

The classic example is $f(x) = \\sin(1/x)$ at $x = 0$. As $x \\to 0$, the argument $1/x \\to \\pm\\infty$, causing sine to oscillate between $-1$ and $1$ infinitely often.

No single value $L$ works because the function repeatedly swings away from any candidate. The limit does not exist—not because of a jump or blowup, but because of uncontrolled oscillation.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Continuous Functions — The Standard Library`,
    content: `
Many familiar functions are continuous on their entire domains:

- **Polynomials:** continuous everywhere

- **Rational functions:** continuous except where the denominator is zero

- **Trigonometric functions:** $\\sin x$, $\\cos x$ continuous everywhere; $\\tan x$, $\\sec x$, etc. continuous where defined

- **Exponential functions:** $e^x$, $a^x$ continuous everywhere

- **Logarithmic functions:** $\\ln x$, $\\log_a x$ continuous on $(0, \\infty)$

- **Root functions:** $\\sqrt[n]{x}$ continuous on their domains

For these functions, [evaluating limits](!/calculus/limits/evaluating) reduces to direct substitution.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Combinations of Continuous Functions`,
    content: `
Continuity is preserved under standard operations. If $f$ and $g$ are continuous at $a$, then so are:

$$f + g \\qquad f - g \\qquad f \\cdot g \\qquad \\frac{f}{g} \\;(\\text{if } g(a) \\neq 0)$$

Compositions also preserve continuity: if $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \\circ g$ is continuous at $a$.

These [limit rules](!/calculus/limits/rules) carry over directly to continuity, since continuity is defined in terms of limits.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `The Intermediate Value Theorem (IVT)`,
    content: `
If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then $f(c) = k$ for some $c$ in $(a, b)$.

$$f(a) < k < f(b) \\quad \\Longrightarrow \\quad f(c) = k \\text{ for some } c \\in (a, b)$$

Continuous functions hit every intermediate value—no skipping. The graph cannot jump from $f(a)$ to $f(b)$ without passing through every height in between.

This theorem guarantees existence. It says a $c$ exists but does not tell you where or whether it is unique.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Using IVT to Locate Roots`,
    content: `
A sign change guarantees a root. If $f$ is continuous on $[a, b]$ with:

$$f(a) < 0 \\quad \\text{and} \\quad f(b) > 0$$

then $f(c) = 0$ for some $c \\in (a, b)$.

**Example:** Show that $x^3 - x - 1 = 0$ has a solution in $(1, 2)$.

Let $f(x) = x^3 - x - 1$.

$$f(1) = 1 - 1 - 1 = -1 < 0$$
$$f(2) = 8 - 2 - 1 = 5 > 0$$

Since $f$ is continuous and changes sign, IVT guarantees a root between $1$ and $2$.

The bisection method refines this: repeatedly halve the interval, keeping the half where the sign change occurs, to approximate the root to any desired precision.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
    id:"intro",
  title: `Where Limits Meet Function Values`,
  content: `
A function is continuous at a point when its limit there equals its actual value. No gap, no jump, no missing point—the function does exactly what its nearby behavior predicts.

This simple requirement has profound consequences. Continuous functions behave predictably: you can evaluate limits by direct substitution, the graph has no breaks, and values change gradually rather than abruptly.

Discontinuities occur when something fails. The function might be undefined at the point, the limit might not exist, or the limit might exist but differ from the function value. Classifying what goes wrong reveals the nature of the break and whether it can be repaired.
`
};

const faqQuestions = {
  obj1: {
    question: "What does it mean for a function to be continuous?",
    answer: "A continuous function has no breaks in its graph—you can trace it without lifting your pen. Intuitively, small changes in input produce small changes in output, with no sudden jumps, missing points, or explosions to infinity.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the formal definition of continuity at a point?",
    answer: "A function f is continuous at x = a if three conditions hold: f(a) is defined, the two-sided limit exists, and the limit equals the function value. The equation lim(x→a) f(x) = f(a) encapsulates all three requirements.",
    sectionId: "2"
  },
  obj3: {
    question: "How is continuity defined on a closed interval?",
    answer: "On [a,b], the function must be continuous on the open interval (a,b), right-continuous at a (limit from right equals f(a)), and left-continuous at b (limit from left equals f(b)). Endpoints use one-sided continuity.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the types of discontinuities?",
    answer: "The four types are: removable (limit exists but doesn't equal f(a)), jump (one-sided limits exist but differ), infinite (at least one one-sided limit is ±∞), and oscillating (limit fails to exist due to oscillation).",
    sectionId: "4"
  },
  obj5: {
    question: "What is a removable discontinuity?",
    answer: "A removable discontinuity occurs when the limit exists but the function is undefined or has a different value at that point. It appears as a hole in the graph and can be 'fixed' by redefining the function value to equal the limit.",
    sectionId: "5"
  },
  obj6: {
    question: "What is a jump discontinuity?",
    answer: "A jump discontinuity occurs when both one-sided limits exist but are unequal. The function 'jumps' from one value to another. The floor function has jump discontinuities at every integer, jumping by 1 each time.",
    sectionId: "6"
  },
  obj7: {
    question: "What is an infinite discontinuity?",
    answer: "An infinite discontinuity occurs when at least one one-sided limit equals ±∞. The function has a vertical asymptote at that point. For f(x) = 1/x at x = 0, both one-sided limits are infinite with opposite signs.",
    sectionId: "7"
  },
  obj8: {
    question: "What is an oscillating discontinuity?",
    answer: "An oscillating discontinuity occurs when the function oscillates without settling, preventing the limit from existing. The classic example is sin(1/x) at x = 0, which oscillates infinitely between -1 and 1 as x approaches 0.",
    sectionId: "8"
  },
  obj9: {
    question: "Which standard functions are continuous?",
    answer: "Polynomials are continuous everywhere. Rational functions are continuous except where the denominator is zero. Trig functions, exponentials, logarithms, and roots are continuous on their domains. For these, limits can be evaluated by direct substitution.",
    sectionId: "9"
  },
  obj10: {
    question: "Are combinations of continuous functions continuous?",
    answer: "Yes. If f and g are continuous at a, then f+g, f−g, f·g, and f/g (when g(a)≠0) are continuous at a. Compositions are also continuous: if g is continuous at a and f is continuous at g(a), then f∘g is continuous at a.",
    sectionId: "10"
  },
  obj11: {
    question: "What is the Intermediate Value Theorem?",
    answer: "If f is continuous on [a,b] and k is any value between f(a) and f(b), then f(c) = k for some c in (a,b). Continuous functions hit every intermediate value—the graph cannot skip from f(a) to f(b) without passing through every height in between.",
    sectionId: "11"
  },
  obj12: {
    question: "How do you use IVT to find roots?",
    answer: "If f is continuous on [a,b] with f(a) < 0 and f(b) > 0 (or vice versa), IVT guarantees f(c) = 0 for some c between a and b. A sign change means a root exists. The bisection method refines this by repeatedly halving the interval.",
    sectionId: "12"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Continuity",
    "description": "Learn continuity in calculus: formal definition, types of discontinuities (removable, jump, infinite, oscillating), continuous functions, and the Intermediate Value Theorem for finding roots.",
    "url": "https://www.learnmathclass.com/calculus/limits/continuity",
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
      "name": "Continuity in Calculus"
    },
    "teaches": [
      "Formal definition of continuity at a point",
      "Continuity on open and closed intervals",
      "Types of discontinuities: removable, jump, infinite, oscillating",
      "Standard continuous functions and their domains",
      "Combinations and compositions of continuous functions",
      "Intermediate Value Theorem and root finding"
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
        "name": "Continuity",
        "item": "https://www.learnmathclass.com/calculus/limits/continuity"
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
//         title: "Continuity of Limits | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/calculus/limits/continuity",
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
      title: "Continuity: Definition, Types & IVT | Learn Math Class",
      description: "Learn continuity in calculus: formal definition, types of discontinuities (removable, jump, infinite, oscillating), continuous functions, and the Intermediate Value Theorem for finding roots.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/continuity",
      name: "Continuity"
    },
  }
}
   }

// export default function ContinuityPage({seoData,sectionsContent , introContent}) {
export default function ContinuityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Continuity of Limits</h1>
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
