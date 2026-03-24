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
  "special limits calculus",
  "limit sin x over x",
  "sin x divided by x limit",
  "limit e^x minus 1 over x",
  "definition of e limit",
  "1 minus cos x over x",
  "trigonometric limits",
  "exponential limits",
  "logarithmic limits",
  "limits to memorize",
  "squeeze theorem limit",
  "growth rate comparison limits",
  "indeterminate form 0/0",
  "fundamental limit calculus",
  "ln(1+x) over x limit"
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
    title: `Why Memorize Special Limits?`,
    content: `
Special limits resist direct computation. Substitution yields indeterminate forms, and algebraic manipulation alone cannot resolve them without circular reasoning or advanced tools.

Their values come from geometric arguments, series expansions, or the definitions of the functions involved. Once established, these limits become permanent tools in the calculus toolkit.

Memorizing them provides immediate payoff:

- Faster problem-solving when these forms appear
- Building blocks for evaluating more complex limits
- Foundation for understanding derivatives of transcendental functions
- Recognition of patterns that guide algebraic manipulation
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `The Fundamental Trigonometric Limit`,
    content: `
$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

This limit requires $x$ measured in radians. Direct substitution gives $0/0$, revealing nothing.

The standard proof uses the unit circle. For small positive $x$, three quantities satisfy:

$$\\sin x < x < \\tan x$$

Dividing by $\\sin x$:

$$1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x}$$

Taking reciprocals and applying the [Squeeze Theorem](!/calculus/limits/rules):

$$\\cos x < \\frac{\\sin x}{x} < 1$$

As $x \\to 0$, $\\cos x \\to 1$, so $\\dfrac{\\sin x}{x}$ is squeezed to $1$.

This limit determines the derivative of $\\sin x$: the fact that $(\\sin x)' = \\cos x$ depends entirely on this result.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Related Trigonometric Limits`,
    content: `
Several limits follow from the fundamental trigonometric limit.

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$

$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$$

$$\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$$

The last follows by taking the reciprocal: if $\\dfrac{\\sin x}{x} \\to 1$, then $\\dfrac{x}{\\sin x} \\to 1$ as well.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Deriving (1 − cos x)/x = 0`,
    content: `
Start with the expression and multiply by the conjugate:

$$\\frac{1 - \\cos x}{x} \\cdot \\frac{1 + \\cos x}{1 + \\cos x} = \\frac{1 - \\cos^2 x}{x(1 + \\cos x)} = \\frac{\\sin^2 x}{x(1 + \\cos x)}$$

Rewrite as a product:

$$= \\frac{\\sin x}{x} \\cdot \\frac{\\sin x}{1 + \\cos x}$$

As $x \\to 0$:

$$\\frac{\\sin x}{x} \\to 1 \\qquad \\frac{\\sin x}{1 + \\cos x} \\to \\frac{0}{2} = 0$$

Therefore:

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 1 \\cdot 0 = 0$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `The Natural Exponential Limit`,
    content: `
$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$

Direct substitution gives $0/0$. This limit defines the derivative of $e^x$ at $x = 0$:

$$\\frac{d}{dx} e^x \\bigg|_{x=0} = \\lim_{h \\to 0} \\frac{e^{0+h} - e^0}{h} = \\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$

The exponential function is the unique function satisfying $f'(x) = f(x)$ with $f(0) = 1$. This limit is the cornerstone of that property.

An equivalent form:

$$\\lim_{h \\to 0} \\frac{e^h - 1}{h} = 1$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Related Exponential Limits`,
    content: `
For any base $a > 0$:

$$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$$

When $a = e$, this reduces to the natural exponential limit since $\\ln e = 1$.

For the natural logarithm:

$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$

This can be seen by substituting $u = \\ln(1 + x)$, so $e^u = 1 + x$ and $x = e^u - 1$. As $x \\to 0$, $u \\to 0$:

$$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = \\lim_{u \\to 0} \\frac{u}{e^u - 1} = 1$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `The Definition of e`,
    content: `
The number $e$ emerges from limits:

$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$

Equivalently, using discrete notation:

$$\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$

Another form with $x \\to 0$:

$$\\lim_{x \\to 0} (1 + x)^{1/x} = e$$

The value is $e \\approx 2.71828$. This limit arises naturally in compound interest: if interest is compounded $n$ times per year at annual rate $100\\%$, the growth factor over one year is $(1 + 1/n)^n$, which approaches $e$ as $n \\to \\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Limits Involving Logarithms`,
    content: `
Logarithms grow slowly—slower than any positive power of $x$.

$$\\lim_{x \\to 0^+} x \\ln x = 0$$

This is a $0 \\cdot (-\\infty)$ form. As $x \\to 0^+$, $x$ vanishes while $\\ln x \\to -\\infty$. The factor $x$ wins: the product approaches $0$.

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$$

As $x \\to \\infty$, both numerator and denominator grow, but $x$ grows faster than $\\ln x$. The ratio vanishes.

More generally, for any $n > 0$:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0$$

Logarithms lose to any positive power.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Growth Rate Comparisons`,
    content: `
As $x \\to \\infty$, functions grow at different rates. The hierarchy:

$$\\text{logarithmic} \\ll \\text{polynomial} \\ll \\text{exponential}$$

Specifically:

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{for any } n > 0$$

$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad \\text{for any } n$$

$$\\lim_{x \\to \\infty} \\frac{x^n}{a^x} = 0 \\quad \\text{for any } a > 1 \\text{ and any } n$$

Exponentials dominate polynomials, which dominate logarithms. These comparisons determine which terms control behavior in [limits at infinity](!/calculus/limits/infinity).
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Using Special Limits`,
    content: `
Rewrite expressions to match known forms.

## Example 1

$$\\lim_{x \\to 0} \\frac{\\sin 5x}{3x}$$

Rewrite to expose the standard form:

$$= \\frac{5}{3} \\cdot \\lim_{x \\to 0} \\frac{\\sin 5x}{5x} = \\frac{5}{3} \\cdot 1 = \\frac{5}{3}$$

## Example 2

$$\\lim_{x \\to 0} \\frac{e^{4x} - 1}{x}$$

Factor out the coefficient:

$$= 4 \\cdot \\lim_{x \\to 0} \\frac{e^{4x} - 1}{4x} = 4 \\cdot 1 = 4$$

## Example 3

$$\\lim_{x \\to 0} \\frac{\\tan x}{x} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} = 1 \\cdot 1 = 1$$

Recognizing patterns and factoring to match special limits streamlines computation.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
   id:"intro",

  title: `Limits Worth Memorizing`,
  content: `
Certain limits appear so frequently in calculus that recognizing them on sight saves considerable effort. Each of these limits yields an indeterminate form under direct substitution—typically $0/0$—yet each has a definite, well-established value.

These special limits are not mere curiosities. The limit $\\dfrac{\\sin x}{x} \\to 1$ underlies the derivatives of all trigonometric functions. The limit $\\dfrac{e^x - 1}{x} \\to 1$ defines what makes the exponential function special. The limit $(1 + 1/x)^x \\to e$ provides one definition of $e$ itself.

Knowing these limits transforms difficult calculations into straightforward applications. When a complicated expression can be massaged into a form matching one of these patterns, the work is essentially done.
`
};


const faqQuestions = {
  obj1: {
    question: "Why should you memorize special limits?",
    answer: "Special limits resist direct computation—substitution yields indeterminate forms. Their values come from geometric arguments or series expansions. Memorizing them speeds problem-solving, provides building blocks for complex limits, and forms the foundation for derivatives of transcendental functions.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the limit of sin(x)/x as x approaches 0?",
    answer: "The limit of sin(x)/x as x approaches 0 equals 1, with x measured in radians. This result is proven using the Squeeze Theorem and the unit circle inequality sin(x) < x < tan(x). This limit determines the derivative of sin(x).",
    sectionId: "2"
  },
  obj3: {
    question: "What is the limit of (1 - cos x)/x as x approaches 0?",
    answer: "The limit of (1 - cos x)/x as x approaches 0 equals 0. This is derived by multiplying by the conjugate (1 + cos x)/(1 + cos x), converting to sin²x, then using the fact that sin(x)/x → 1 while sin(x)/(1 + cos x) → 0.",
    sectionId: "4"
  },
  obj4: {
    question: "What is the limit of (e^x - 1)/x as x approaches 0?",
    answer: "The limit of (e^x - 1)/x as x approaches 0 equals 1. This limit defines the derivative of e^x at x = 0 and is the cornerstone of the property that the exponential function equals its own derivative.",
    sectionId: "5"
  },
  obj5: {
    question: "How is the number e defined using limits?",
    answer: "The number e can be defined as lim(x→∞)(1 + 1/x)^x = e, or equivalently lim(n→∞)(1 + 1/n)^n = e. This limit arises from compound interest: compounding n times per year at 100% annual rate gives growth factor (1 + 1/n)^n, approaching e ≈ 2.71828.",
    sectionId: "7"
  },
  obj6: {
    question: "What is the limit of x·ln(x) as x approaches 0+?",
    answer: "The limit of x·ln(x) as x approaches 0+ equals 0. Although this is a 0·(-∞) form where x vanishes while ln(x) → -∞, the factor x dominates and the product approaches 0. Logarithms lose to any positive power.",
    sectionId: "8"
  },
  obj7: {
    question: "How do logarithms, polynomials, and exponentials compare in growth rate?",
    answer: "As x → ∞, the growth hierarchy is: logarithmic ≪ polynomial ≪ exponential. Specifically, ln(x)/x^n → 0 and x^n/e^x → 0 for any n. Exponentials dominate polynomials, which dominate logarithms.",
    sectionId: "9"
  },
  obj8: {
    question: "How do you use special limits to evaluate other limits?",
    answer: "Rewrite expressions to match known forms. For example, lim(sin 5x)/(3x) = (5/3)·lim(sin 5x)/(5x) = 5/3·1 = 5/3. Factor coefficients to expose the standard pattern, then apply the memorized result.",
    sectionId: "10"
  },
  obj9: {
    question: "What is the limit of (a^x - 1)/x as x approaches 0?",
    answer: "For any base a > 0, the limit of (a^x - 1)/x as x approaches 0 equals ln(a). When a = e, this reduces to 1 since ln(e) = 1. This generalizes the natural exponential limit to arbitrary bases.",
    sectionId: "6"
  },
  obj10: {
    question: "What is the limit of ln(1+x)/x as x approaches 0?",
    answer: "The limit of ln(1+x)/x as x approaches 0 equals 1. This can be proven by substituting u = ln(1+x), which transforms the limit into u/(e^u - 1), and as x → 0, u → 0, giving the result 1.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Special Limits in Calculus",
    "description": "Master special limits: sin(x)/x, (e^x-1)/x, definition of e, logarithmic limits, and growth rate comparisons. Essential limits to memorize for calculus.",
    "url": "https://www.learnmathclass.com/calculus/limits/special",
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
      "name": "Special Limits"
    },
    "teaches": [
      "The fundamental trigonometric limit sin(x)/x = 1",
      "Related trigonometric limits including (1-cos x)/x",
      "The natural exponential limit (e^x - 1)/x = 1",
      "Definition of e as a limit",
      "Logarithmic limits and growth rate comparisons",
      "Techniques for applying special limits to evaluate other limits"
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
        "name": "Special Limits",
        "item": "https://www.learnmathclass.com/calculus/limits/special"
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
//         title: "Special Cases with Limits | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/calculus/limits/special",
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
      title: "Special Limits: sin(x)/x, e^x, and More | Learn Math Class",
      description: "Master special limits: sin(x)/x, (e^x-1)/x, definition of e, logarithmic limits, and growth rate comparisons. Essential limits to memorize for calculus.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/special",
      name: "Special Limits in Calculus"
    },
  }
}

}

// export default function SpecialPage({seoData,sectionsContent , introContent}) {
export default function SpecialPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Special Limits</h1>
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
