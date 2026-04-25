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
  "differentiability",
  "differentiable function",
  "differentiability vs continuity",
  "when is a function differentiable",
  "corner derivative",
  "cusp calculus",
  "vertical tangent",
  "one-sided derivative",
  "non-differentiable function",
  "differentiability definition",
  "left-hand right-hand derivative",
  "differentiability implies continuity",
  "derivative does not exist",
  "piecewise function differentiable"
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

  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }

const sectionsContent = {
  obj1: {
    title: `The Definition of Differentiability`,
    content: `
A function $f$ is differentiable at $x = a$ if the limit

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

exists and is finite. This is a two-sided [limit](!/calculus/limits/two-sided): the difference quotient must approach the same finite value whether $h \\to 0^+$ or $h \\to 0^-$.

Geometrically, differentiability at $a$ means the graph of $f$ has a well-defined, non-vertical tangent line at $(a, f(a))$. The secant lines through $(a, f(a))$ and nearby points converge to a single line regardless of the direction of approach.

If the limit does not exist, or if it equals $\\pm\\infty$, or if $f(a)$ itself is undefined, then $f$ is not differentiable at $a$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Differentiability Implies Continuity`,
    content: `
If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The proof is direct.

Rewrite $f(x) - f(a)$ as

$$f(x) - f(a) = \\frac{f(x) - f(a)}{x - a} \\cdot (x - a)$$

As $x \\to a$, the first factor approaches $f'(a)$ (which exists by assumption) and the second factor approaches $0$. Their product approaches $f'(a) \\cdot 0 = 0$, so $\\lim_{x \\to a} f(x) = f(a)$.

This establishes a hierarchy: differentiability is a stronger condition than continuity. Every differentiable function is continuous, but the reverse implication fails. The functions that are continuous but not differentiable at a point form a significant and instructive class.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Corners`,
    content: `
A corner occurs when the left-hand and right-hand derivatives both exist as finite numbers but disagree.

$$\\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h} \\neq \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$

The graph makes a sharp turn at $x = a$—two distinct tangent directions meeting at a single point. The function is continuous at $a$ (no break in the graph), but the two-sided limit of the difference quotient fails to exist because the one-sided limits differ.

The standard example is $f(x) = |x|$ at $x = 0$. The left-hand derivative is $-1$ and the right-hand derivative is $+1$. The graph forms a V-shape, and no single straight line can serve as a tangent. More generally, any piecewise linear function with a slope change at a junction has a corner there.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Cusps`,
    content: `
A cusp occurs when both one-sided derivatives are infinite but with opposite signs. As $h \\to 0^+$, the difference quotient approaches $+\\infty$ (or $-\\infty$), and as $h \\to 0^-$, it approaches the opposite.

The graph comes to a sharp point where the curve doubles back on itself with vertical tangent directions from both sides. Unlike a corner, the slopes do not stay finite—they blow up.

The standard example is $f(x) = x^{2/3}$ at $x = 0$. The derivative $f'(x) = \\frac{2}{3}x^{-1/3}$ tends to $+\\infty$ from the right and $-\\infty$ from the left. The graph has a pointed tip at the origin, sharper than any corner. The function is continuous at $x = 0$, but the infinite and opposing slopes prevent differentiability.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Vertical Tangents`,
    content: `
A vertical tangent occurs when the two-sided limit of the difference quotient exists but equals $+\\infty$ or $-\\infty$. Both sides agree on the direction—unlike a cusp—but the slope is infinite.

The standard example is $f(x) = x^{1/3}$ at $x = 0$. The derivative formula $f'(x) = \\frac{1}{3}x^{-2/3}$ gives $f'(x) \\to +\\infty$ as $x \\to 0$ from either side. The graph passes smoothly through the origin with no sharp point, but the tangent line there is the vertical line $x = 0$.

A vertical tangent line has undefined slope, so the derivative does not exist in the usual sense. The function is continuous and the graph is smooth, yet the rate of change is unbounded at that point. This is the mildest form of non-differentiability—the geometry is clean, but the numerical value of the derivative is not finite.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Discontinuities`,
    content: `
If $f$ is not [continuous](!/calculus/limits/continuity) at $a$, then $f$ is not differentiable at $a$. Since differentiability implies continuity, any discontinuity automatically rules out differentiability.

At a jump discontinuity, the function leaps from one value to another. No tangent line can bridge the gap. At an infinite discontinuity (vertical asymptote), the function blows up—there is no point $(a, f(a))$ through which a tangent could pass. At a removable discontinuity, the limit exists but either $f(a)$ is undefined or differs from the limit; redefining $f(a)$ to equal the limit restores continuity and may restore differentiability.

Discontinuities are the most straightforward obstruction to differentiability. The other failure modes—corners, cusps, vertical tangents—are subtler because the function is continuous at the problematic point.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `One-Sided Derivatives`,
    content: `
The left-hand derivative of $f$ at $a$ is

$$f'_-(a) = \\lim_{h \\to 0^-} \\frac{f(a + h) - f(a)}{h}$$

and the right-hand derivative is

$$f'_+(a) = \\lim_{h \\to 0^+} \\frac{f(a + h) - f(a)}{h}$$

The two-sided derivative $f'(a)$ exists if and only if both one-sided derivatives exist, are finite, and are equal: $f'_-(a) = f'_+(a)$.

One-sided derivatives appear naturally at endpoints of closed intervals, where only one direction of approach is available. They also arise at boundaries of piecewise functions, where different formulas govern the left and right sides. Checking whether the one-sided derivatives match at a boundary is the standard test for differentiability of a piecewise-defined function.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Differentiability on Intervals`,
    content: `
A function is differentiable on an open interval $(a, b)$ if it is differentiable at every point in $(a, b)$. No endpoint conditions are needed because open intervals exclude their endpoints.

On a closed interval $[a, b]$, the convention is: $f$ is differentiable on $(a, b)$ and possesses a right-hand derivative at $a$ and a left-hand derivative at $b$. This mirrors the definition of [continuity on a closed interval](!/calculus/limits/continuity) and ensures that derivative-based theorems—the Mean Value Theorem, Rolle's Theorem—apply on $[a, b]$.

For piecewise functions defined on adjacent intervals, differentiability at each interior boundary requires two conditions: continuity at the boundary (the pieces connect) and agreement of the one-sided derivatives (the pieces connect smoothly). Continuity alone is not sufficient—$f(x) = |x|$ is continuous at $x = 0$ but not differentiable there.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Pathological Examples`,
    content: `
The gap between continuity and differentiability extends further than isolated points. The Weierstrass function, constructed in 1872, is continuous at every real number but differentiable at none. Its graph is an infinitely jagged curve with no smooth segments anywhere.

This is not an isolated curiosity. Entire families of continuous-but-nowhere-differentiable functions exist, and they arise naturally in fractal geometry and stochastic processes. Brownian motion paths, for instance, are almost surely continuous everywhere and differentiable nowhere.

These examples demonstrate that differentiability is a genuinely restrictive condition. Continuity guarantees an unbroken graph; differentiability demands a smooth one. Most "natural" functions in calculus—polynomials, trigonometric functions, exponentials—are differentiable on their entire domains, which can create the false impression that differentiability is routine. The pathological cases reveal that smooth behavior is special, not default.
`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: `intro`,
  title: `When the Derivative Exists — and When It Does Not`,
  content: `
Differentiability is not automatic. The [limit definition](!/calculus/derivatives) requires a specific limit to exist and be finite, and many functions fail this requirement at certain points. A corner produces two competing slopes. A cusp sends the slope to infinity from both sides. A vertical tangent gives an infinite slope. A discontinuity removes the foundation entirely.

Each failure mode has a distinct geometric signature, and recognizing them is essential for correctly applying derivative-based analysis. Differentiability also relates precisely to [continuity](!/calculus/limits/continuity): every differentiable function is continuous, but continuous functions need not be differentiable. The gap between these two properties is wider than it first appears.
`
};


const faqQuestions = {
  obj1: {
    question: "What is the definition of differentiability?",
    answer: "A function f is differentiable at x = a if the limit of the difference quotient exists and is finite: f'(a) = lim(h→0) [f(a+h) - f(a)]/h. This two-sided limit must approach the same finite value from both directions.",
    sectionId: "1"
  },
  obj2: {
    question: "Does differentiability imply continuity?",
    answer: "Yes, if f is differentiable at a, then f is continuous at a. The proof shows that f(x) - f(a) = [difference quotient] × (x - a), which approaches 0 as x→a. However, the converse is false—continuous functions need not be differentiable.",
    sectionId: "2"
  },
  obj3: {
    question: "What is a corner in calculus?",
    answer: "A corner occurs when both one-sided derivatives exist as finite numbers but are unequal. The graph makes a sharp turn—two distinct tangent directions meeting at one point. Example: f(x) = |x| at x = 0 has left derivative -1 and right derivative +1.",
    sectionId: "3"
  },
  obj4: {
    question: "What is a cusp?",
    answer: "A cusp occurs when both one-sided derivatives are infinite with opposite signs. The graph comes to a sharp point where the curve doubles back with vertical tangent directions from both sides. Example: f(x) = x^(2/3) at x = 0.",
    sectionId: "4"
  },
  obj5: {
    question: "What is a vertical tangent?",
    answer: "A vertical tangent occurs when the two-sided limit of the difference quotient exists but equals ±∞. Both sides agree on direction, but the slope is infinite. Example: f(x) = x^(1/3) at x = 0 has a vertical tangent line x = 0.",
    sectionId: "5"
  },
  obj6: {
    question: "Why are discontinuous functions not differentiable?",
    answer: "Since differentiability implies continuity, any discontinuity automatically rules out differentiability. At jumps, the function leaps with no bridging tangent. At infinite discontinuities, there's no point through which a tangent could pass.",
    sectionId: "6"
  },
  obj7: {
    question: "What are one-sided derivatives?",
    answer: "The left-hand derivative is lim(h→0⁻) [f(a+h) - f(a)]/h and the right-hand derivative is lim(h→0⁺) of the same. The two-sided derivative exists if and only if both one-sided derivatives exist, are finite, and are equal.",
    sectionId: "7"
  },
  obj8: {
    question: "What does it mean for a function to be differentiable on an interval?",
    answer: "On an open interval (a,b), differentiable means differentiable at every point. On a closed interval [a,b], the function must be differentiable on (a,b) with a right-hand derivative at a and left-hand derivative at b.",
    sectionId: "8"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Differentiability",
    "description": "Understand differentiability: definition, relationship to continuity, and why derivatives fail at corners, cusps, vertical tangents, and discontinuities. One-sided derivatives explained.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/differentiability",
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
      "name": "Differentiability"
    },
    "teaches": [
      "Definition of differentiability",
      "Differentiability implies continuity",
      "Corners, cusps, and vertical tangents",
      "When derivatives fail to exist",
      "One-sided derivatives",
      "Differentiability on intervals"
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
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Differentiability",
        "item": "https://www.learnmathclass.com/calculus/derivatives/differentiability"
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


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Title | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/url",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Differentiability: Corners, Cusps & Continuity | Learn Math Class",
      description: "Understand differentiability: definition, relationship to continuity, and why derivatives fail at corners, cusps, vertical tangents, and discontinuities. One-sided derivatives explained.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/differentiability",
      name: "Differentiability"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Differentiability</h1>
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
