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
  "logarithmic graphs",
  "graph of log x",
  "log function graph",
  "logarithm transformations",
  "vertical asymptote logarithm",
  "log graph domain range",
  "how to graph logarithms",
  "ln x graph",
  "log base 2 graph",
  "logarithm graph shifts",
  "logarithmic function transformations",
  "log graph key points",
  "inverse exponential graph",
  "graphing log functions",
  "logarithm vertical stretch"
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
    title: `The Basic Shape`,
    content: `The graph of $y = \\log_a(x)$ for $a > 1$ rises slowly from left to right. Starting from extreme negative $y$-values near the $y$-axis, the curve crosses through $(1, 0)$, continues through $(a, 1)$, and extends upward without bound as $x$ increases.

The curve is concave down throughout — it bends toward the $x$-axis. Growth slows as $x$ increases: the gap between $\\log_a(10)$ and $\\log_a(100)$ equals the gap between $\\log_a(1)$ and $\\log_a(10)$. Each multiplication of $x$ by $a$ adds exactly $1$ to the output.

For $0 < a < 1$, the shape mirrors vertically. The curve descends from upper left toward lower right, still passing through $(1, 0)$ but now through $(a, 1)$ where $a < 1$ means this point lies to the left of $x = 1$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Domain and Range on the Graph`,
    content: `The domain $(0, \\infty)$ appears as the horizontal extent of the graph. The curve exists only for $x > 0$ — nothing appears on or to the left of the $y$-axis.

The range $(-\\infty, \\infty)$ appears as the vertical extent. The curve spans all $y$-values, extending upward and downward without bound.

No horizontal asymptote exists. As $x \\to \\infty$, the function continues increasing (for $a > 1$) or decreasing (for $0 < a < 1$), never leveling off. This contrasts with exponential functions, which have horizontal asymptotes.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `The Vertical Asymptote`,
    content: `The line $x = 0$ is a vertical asymptote for every logarithmic function.

As $x \\to 0^+$:
$$\\lim_{x \\to 0^+} \\log_a(x) = -\\infty \\quad \\text{for } a > 1$$
$$\\lim_{x \\to 0^+} \\log_a(x) = +\\infty \\quad \\text{for } 0 < a < 1$$

The graph approaches the $y$-axis but never touches or crosses it. For $a > 1$, the curve plunges downward as it nears the asymptote. For $0 < a < 1$, the curve rises upward.

Under horizontal transformations, the asymptote shifts. The function $y = \\log_a(x - h)$ has vertical asymptote at $x = h$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Key Points`,
    content: `Three points anchor any logarithmic graph:

$(1, 0)$: Every logarithm satisfies $\\log_a(1) = 0$. This point lies on every logarithmic curve regardless of base.

$(a, 1)$: Every logarithm satisfies $\\log_a(a) = 1$. For $y = \\log_2(x)$, this is $(2, 1)$. For $y = \\log_{10}(x)$, this is $(10, 1)$. For $y = \\ln(x)$, this is $(e, 1) \\approx (2.718, 1)$.

$(1/a, -1)$: Since $\\log_a(1/a) = \\log_a(a^{-1}) = -1$. For $y = \\log_2(x)$, this is $(0.5, -1)$.

When sketching, plot these points first. The curve passes through all three, approaching the vertical asymptote as $x \\to 0^+$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Effect of Base on Shape`,
    content: `The base controls both direction and steepness.

For $a > 1$: the function increases. Larger bases produce flatter curves. The graph of $y = \\log_{10}(x)$ rises more slowly than $y = \\log_2(x)$ because base $10$ requires larger $x$-values to achieve the same output.

For $0 < a < 1$: the function decreases. The graph of $y = \\log_{1/2}(x)$ is the reflection of $y = \\log_2(x)$ across the $x$-axis. In general, $\\log_{1/a}(x) = -\\log_a(x)$.

Comparing [common and natural](!/algebra/logarithms/common-natural) logarithms: $\\ln(x)$ rises faster than $\\log(x)$ because $e < 10$. The natural logarithm reaches output $1$ at $x = e \\approx 2.718$, while the common logarithm reaches $1$ at $x = 10$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Horizontal Shifts`,
    content: `The function $y = \\log_a(x - h)$ shifts the graph horizontally by $h$ units.

When $h > 0$, the shift is rightward. The vertical asymptote moves from $x = 0$ to $x = h$. The point $(1, 0)$ moves to $(1 + h, 0)$.

When $h < 0$, the shift is leftward. The asymptote moves to $x = h$ (a negative value), and the domain becomes $x > h$.

Example: $y = \\log_2(x - 3)$ has asymptote at $x = 3$, passes through $(4, 0)$ and $(5, 1)$, and has domain $x > 3$.

Example: $y = \\ln(x + 2)$ has asymptote at $x = -2$, passes through $(-1, 0)$ and $(e - 2, 1)$, and has domain $x > -2$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Vertical Shifts`,
    content: `The function $y = \\log_a(x) + k$ shifts the graph vertically by $k$ units.

When $k > 0$, the shift is upward. When $k < 0$, the shift is downward.

The vertical asymptote remains at $x = 0$ — vertical shifts do not affect the asymptote location. The domain remains $x > 0$.

Key points shift accordingly: $(1, 0)$ becomes $(1, k)$, and $(a, 1)$ becomes $(a, 1 + k)$.

Example: $y = \\log_3(x) + 2$ passes through $(1, 2)$ and $(3, 3)$, with asymptote still at $x = 0$.

Example: $y = \\ln(x) - 1$ passes through $(1, -1)$ and $(e, 0)$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Stretches and Compressions`,
    content: `The function $y = c \\cdot \\log_a(x)$ stretches or compresses the graph vertically.

When $|c| > 1$, the graph stretches away from the $x$-axis. When $0 < |c| < 1$, the graph compresses toward the $x$-axis.

The point $(1, 0)$ remains fixed — multiplying zero by any constant gives zero. The point $(a, 1)$ moves to $(a, c)$.

Example: $y = 2\\log_2(x)$ passes through $(1, 0)$ and $(2, 2)$. The graph is stretched vertically by factor $2$.

Example: $y = \\frac{1}{2}\\ln(x)$ passes through $(1, 0)$ and $(e, 0.5)$. The graph is compressed vertically by factor $1/2$.

The asymptote remains at $x = 0$, and the domain remains $x > 0$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Reflections`,
    content: `Reflections flip the graph across an axis.

$y = -\\log_a(x)$: reflection across the $x$-axis. The point $(a, 1)$ becomes $(a, -1)$. An increasing logarithm becomes decreasing, and vice versa. This is equivalent to changing the base: $-\\log_a(x) = \\log_{1/a}(x)$.

$y = \\log_a(-x)$: reflection across the $y$-axis. The domain changes from $x > 0$ to $x < 0$. The asymptote moves from $x = 0$ to $x = 0$ (still the $y$-axis, approached from the left). The point $(a, 1)$ becomes $(-a, 1)$.

Example: $y = -\\log_2(x)$ passes through $(1, 0)$, $(2, -1)$, and $(4, -2)$.

Example: $y = \\log_2(-x)$ passes through $(-1, 0)$, $(-2, 1)$, and has domain $x < 0$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Writing Equations from Graphs`,
    content: `To determine the equation of a transformed logarithmic graph:

Step 1: Identify the vertical asymptote. If at $x = h$, the function includes $(x - h)$ as the argument.

Step 2: Find a point on the graph, typically where the curve crosses a convenient location. Use this to determine the base or verify it.

Step 3: Check for vertical stretch/compression by comparing the vertical distance between known points.

Step 4: Check for vertical shift by noting if $(1 + h, k)$ lies on the curve for $k \\neq 0$.

Example: A graph has asymptote at $x = 2$, passes through $(3, 0)$ and $(4, 1)$.

Asymptote at $x = 2$ suggests $y = \\log_a(x - 2)$. The point $(3, 0)$ confirms: $\\log_a(3 - 2) = \\log_a(1) = 0$. The point $(4, 1)$ gives: $\\log_a(2) = 1$, so $a = 2$.

Equation: $y = \\log_2(x - 2)$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Inverse Relationship with Exponential Graphs`,
    content: `The graphs of $y = \\log_a(x)$ and $y = a^x$ are reflections of each other across the line $y = x$.

Every point $(p, q)$ on the logarithmic curve corresponds to a point $(q, p)$ on the exponential curve. The curves intersect the line $y = x$ at the same location only if $a^c = c$ for some $c$.

Asymptote correspondence:
- The exponential $y = a^x$ has horizontal asymptote $y = 0$
- The logarithm $y = \\log_a(x)$ has vertical asymptote $x = 0$

Domain and range exchange:
- $a^x$: domain $(-\\infty, \\infty)$, range $(0, \\infty)$
- $\\log_a(x)$: domain $(0, \\infty)$, range $(-\\infty, \\infty)$

Graphing both functions on the same axes with the line $y = x$ demonstrates this inverse relationship visually. The symmetry confirms that each function undoes the other.`,
    before: ``,
    after: ``,
    link: '',
  },
};

  const introContent = {
  id: "intro",
   title: `Visualizing the Inverse of Exponentials`,
  content: `The graph of $y = \\log_a(x)$ has a characteristic shape: a curve passing through $(1, 0)$, approaching a vertical asymptote at $x = 0$, and extending infinitely in both vertical directions. The base determines whether the curve rises or falls, and transformations shift, stretch, and reflect the basic shape. Understanding these graphs reinforces the [properties](!/algebra/logarithms/properties) of logarithms and provides geometric insight into [inequalities](!/algebra/logarithms/inequalities).`,
}


const faqQuestions = {
  obj1: {
    question: "What is the basic shape of a logarithmic graph?",
    answer: "For base > 1, the graph rises slowly from left to right, passing through (1, 0) and (a, 1), with a vertical asymptote at x = 0. The curve is concave down throughout. For base between 0 and 1, the graph descends instead.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the domain and range of a logarithmic function?",
    answer: "Domain is (0, ∞) — only positive x-values. Range is (-∞, ∞) — all real y-values. The graph exists only to the right of the y-axis and extends infinitely up and down.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the vertical asymptote of log(x)?",
    answer: "The line x = 0 (the y-axis) is the vertical asymptote. As x approaches 0 from the right, log(x) approaches negative infinity for bases > 1. The graph never touches or crosses x = 0.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the key points on any logarithmic graph?",
    answer: "Three key points: (1, 0) since log_a(1) = 0 always; (a, 1) since log_a(a) = 1; and (1/a, -1) since log_a(1/a) = -1. Plot these first when sketching.",
    sectionId: "4"
  },
  obj5: {
    question: "How does the base affect the logarithmic graph?",
    answer: "Larger bases produce flatter curves that rise more slowly. For base > 1, the function increases. For 0 < base < 1, the function decreases (equivalent to reflecting across the x-axis).",
    sectionId: "5"
  },
  obj6: {
    question: "How do you shift a logarithmic graph horizontally?",
    answer: "y = log_a(x - h) shifts the graph h units right if h > 0, or |h| units left if h < 0. The vertical asymptote moves from x = 0 to x = h. Domain becomes x > h.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you shift a logarithmic graph vertically?",
    answer: "y = log_a(x) + k shifts the graph k units up if k > 0, or |k| units down if k < 0. The vertical asymptote stays at x = 0. The point (1, 0) moves to (1, k).",
    sectionId: "7"
  },
  obj8: {
    question: "How do you find the equation of a logarithmic graph?",
    answer: "Identify the vertical asymptote (gives the horizontal shift h), find where the curve passes through to determine the base, and check for vertical stretches or shifts by comparing key points.",
    sectionId: "10"
  },
  obj9: {
    question: "How are logarithmic and exponential graphs related?",
    answer: "They are reflections of each other across the line y = x. Every point (p, q) on y = log_a(x) corresponds to (q, p) on y = a^x. Their domains and ranges are swapped.",
    sectionId: "11"
  },
  obj10: {
    question: "What does y = -log(x) look like?",
    answer: "Reflection across the x-axis. The graph still passes through (1, 0) but now descends instead of rising. The point (a, 1) becomes (a, -1). Equivalent to log_{1/a}(x).",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Logarithmic Graphs",
    "description": "Learn to graph logarithmic functions: basic shape, domain/range, vertical asymptotes, key points, transformations (shifts, stretches, reflections), and inverse relationship with exponentials.",
    "url": "https://www.learnmathclass.com/algebra/logarithms/graphs",
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
      "name": "Logarithmic Graphs"
    },
    "teaches": [
      "Basic shape of logarithmic curves",
      "Domain and range visualization",
      "Vertical asymptotes",
      "Key points for graphing",
      "Effect of base on graph shape",
      "Horizontal and vertical shifts",
      "Stretches, compressions, and reflections",
      "Writing equations from graphs",
      "Inverse relationship with exponential graphs"
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
        "name": "Logarithmic Graphs",
        "item": "https://www.learnmathclass.com/algebra/logarithms/graphs"
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
//         title: "Logarithmic Graphs | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/logarithms/graphs",
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
      title: "Logarithmic Graphs: Transformations & Key Features | Learn Math Class",
      description: "Learn to graph logarithmic functions: basic shape, domain/range, vertical asymptotes, key points, transformations (shifts, stretches, reflections), and inverse relationship with exponentials.",
      keywords: keyWords.join(", "),
      url: "/algebra/logarithms/graphs",
      name: "Logarithmic Graphs"
    },
  }
}
   }

// export default function GraphsPage({seoData,sectionsContent , introContent}) {


export default function GraphsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Logarithmic Graphs</h1>
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
