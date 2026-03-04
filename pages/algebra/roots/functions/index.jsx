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
  "radical functions",
  "square root function",
  "cube root function",
  "graph square root",
  "graph cube root",
  "domain of radical functions",
  "radical function transformations",
  "nth root function",
  "square root graph",
  "inverse of radical function",
  "radical function domain and range",
  "parent radical function",
  "transforming square root functions",
  "radical function examples",
  "graphing radical functions"
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
    title: `The Square Root Function`,
    content: `The parent square root function is:

$$f(x) = \\sqrt{x}$$

For each non-negative input, it returns the principal square root.

Domain: $[0, \\infty)$ — only non-negative inputs allowed, following the [properties of radicals](!/algebra/roots/properties).

Range: $[0, \\infty)$ — outputs are non-negative by the principal root convention.

Key points on the graph:

$$(0, 0), \\quad (1, 1), \\quad (4, 2), \\quad (9, 3), \\quad (16, 4)$$

The graph starts at the origin and rises to the right. It increases throughout its domain but the rate of increase slows — the curve bends downward, concave down.

The function is one-to-one. It passes the horizontal line test and has an inverse.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Graph of the Square Root Function`,
    content: `The square root graph has a distinctive shape: it begins at a point and curves gradually upward to the right.

At $x = 0$, the graph has an endpoint — no values exist to the left.

As $x$ increases, $\\sqrt{x}$ increases, but each additional unit of input produces less additional output. From $x = 0$ to $x = 1$, the output increases by 1. From $x = 1$ to $x = 4$, only another 1. From $x = 4$ to $x = 9$, another 1.

$$\\sqrt{100} = 10, \\quad \\sqrt{10000} = 100$$

Multiplying the input by 100 only multiplies the output by 10.

The curve is the upper half of a parabola lying on its side. This connection becomes clear when considering inverse functions — the square root is the inverse of squaring restricted to non-negative values.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The Cube Root Function`,
    content: `The parent cube root function is:

$$f(x) = \\sqrt[3]{x}$$

Unlike the square root, it accepts all real inputs.

Domain: $(-\\infty, \\infty)$ — any real number has a real cube root.

Range: $(-\\infty, \\infty)$ — outputs span all real numbers.

Key points:

$$(-8, -2), \\quad (-1, -1), \\quad (0, 0), \\quad (1, 1), \\quad (8, 2)$$

The graph passes through the origin and extends in both directions. Negative inputs yield negative outputs; positive inputs yield positive outputs. The function preserves sign, consistent with [properties](!/algebra/roots/properties) of odd-index radicals.

The cube root function is also one-to-one, with the cubing function as its inverse.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Graph of the Cube Root Function`,
    content: `The cube root graph has an S-like shape, though gentler than a cubic.

At $x = 0$, the graph passes through the origin — not an endpoint but an inflection point where concavity changes.

For $x > 0$, the curve rises but flattens as $x$ increases. For $x < 0$, it falls but flattens as $x$ decreases toward negative infinity.

The function is symmetric about the origin:

$$f(-x) = -f(x)$$

This is odd symmetry. Reflecting the graph across both axes leaves it unchanged.

Growth is slow. Large inputs produce relatively modest outputs:

$$\\sqrt[3]{1000} = 10, \\quad \\sqrt[3]{1000000} = 100$$

Cube roots tame large numbers, compressing wide ranges into narrower ones.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `General Nth Root Functions`,
    content: `The pattern extends to any positive integer index:

$$f(x) = \\sqrt[n]{x}$$

For even $n$ (fourth root, sixth root, etc.):

Domain: $[0, \\infty)$

Range: $[0, \\infty)$

Shape resembles the square root — starts at origin, rises to the right, concave down.

Higher even indices produce flatter curves. The fourth root rises more slowly than the square root.

For odd $n$ (fifth root, seventh root, etc.):

Domain: $(-\\infty, \\infty)$

Range: $(-\\infty, \\infty)$

Shape resembles the cube root — S-curve through origin, odd symmetry.

Higher odd indices produce flatter curves. The fifth root is flatter than the cube root.

All $n$th root functions are one-to-one and serve as inverses to the corresponding power functions, with domain restrictions for even indices.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Domain of Radical Functions`,
    content: `When the radicand is an expression, solve for valid inputs.

$$f(x) = \\sqrt{x - 3}$$

The radicand $x - 3$ must be non-negative:

$$x - 3 \\geq 0 \\quad \\Rightarrow \\quad x \\geq 3$$

Domain: $[3, \\infty)$.

$$g(x) = \\sqrt{5 - 2x}$$

$$5 - 2x \\geq 0 \\quad \\Rightarrow \\quad x \\leq \\frac{5}{2}$$

Domain: $(-\\infty, \\frac{5}{2}]$.

$$h(x) = \\sqrt[3]{x + 4}$$

Odd index — no restriction on the radicand.

Domain: $(-\\infty, \\infty)$.

These domain calculations use the same principles as [simplifying](!/algebra/roots/simplifying) expressions and solving [radical equations](!/algebra/roots/equations). The index determines whether restrictions apply.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Transformations`,
    content: `Radical functions transform like any function family.

Vertical shift: $f(x) = \\sqrt{x} + k$

Shifts the graph up if $k > 0$, down if $k < 0$. Range becomes $[k, \\infty)$.

Horizontal shift: $f(x) = \\sqrt{x - h}$

Shifts the graph right if $h > 0$, left if $h < 0$. Domain becomes $[h, \\infty)$.

Vertical stretch or compression: $f(x) = a\\sqrt{x}$

Stretches if $|a| > 1$, compresses if $|a| < 1$.

Reflection over the $x$-axis: $f(x) = -\\sqrt{x}$

The graph flips upside down. Range becomes $(-\\infty, 0]$.

Reflection over the $y$-axis: $f(x) = \\sqrt{-x}$

The graph reflects horizontally. Domain becomes $(-\\infty, 0]$.

Combined example:

$$f(x) = 2\\sqrt{x - 1} + 3$$

Start at $(1, 3)$, stretched vertically by factor 2, rising to the right.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Inverse Relationship with Power Functions`,
    content: `Radical functions and power functions are inverses.

The square root function $f(x) = \\sqrt{x}$ is the inverse of $g(x) = x^2$ when $g$ is restricted to $x \\geq 0$.

$$f(g(x)) = \\sqrt{x^2} = x \\quad \\text{for } x \\geq 0$$

$$g(f(x)) = (\\sqrt{x})^2 = x \\quad \\text{for } x \\geq 0$$

The cube root function $f(x) = \\sqrt[3]{x}$ is the inverse of $g(x) = x^3$ with no restriction needed.

$$f(g(x)) = \\sqrt[3]{x^3} = x \\quad \\text{for all real } x$$

$$g(f(x)) = (\\sqrt[3]{x})^3 = x \\quad \\text{for all real } x$$

Graphically, inverse functions reflect across the line $y = x$. The parabola $y = x^2$ and the square root curve are mirror images across this diagonal.

The identity $\\sqrt{x^2} = |x|$ from [properties](!/algebra/roots/properties) explains why the restriction $x \\geq 0$ is needed for the square function. Without it, the square function is not one-to-one and has no inverse.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Finding Inverses of Radical Functions`,
    content: `To find the inverse of a radical function, swap $x$ and $y$, then solve.

$$f(x) = \\sqrt{x - 5}, \\quad x \\geq 5$$

Write as $y = \\sqrt{x - 5}$.

Swap: $x = \\sqrt{y - 5}$

Solve: $x^2 = y - 5$, so $y = x^2 + 5$

The inverse is $f^{-1}(x) = x^2 + 5$, with domain $x \\geq 0$ (matching the range of the original).

$$g(x) = \\sqrt[3]{2x + 1}$$

Swap: $x = \\sqrt[3]{2y + 1}$

Cube: $x^3 = 2y + 1$

Solve: $y = \\frac{x^3 - 1}{2}$

The inverse is $g^{-1}(x) = \\frac{x^3 - 1}{2}$, valid for all real $x$.

The connection between [rational exponents](!/algebra/roots/rational-exponents) and roots makes these inverse relationships algebraically natural. Roots undo powers; powers undo roots.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Graphing Strategy`,
    content: `To graph a transformed radical function:

Identify the parent function based on the index.

Determine the domain by setting the radicand appropriately — non-negative for even index, unrestricted for odd.

Find the starting point (for even index) or the center point (for odd index) after applying shifts.

Plot additional points using the transformed function.

Sketch the curve, respecting concavity — down for even index, changing at inflection for odd index.

Example: $f(x) = -\\sqrt{x + 2} + 4$

Parent: $\\sqrt{x}$

Domain: $x + 2 \\geq 0$, so $x \\geq -2$

Starting point: $(-2, 4)$

Reflected over $x$-axis, so the curve descends to the right.

Additional point: $x = 2$ gives $f(2) = -\\sqrt{4} + 4 = -2 + 4 = 2$

The graph starts at $(-2, 4)$ and curves downward to the right.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Radicals as Functions",
  content: `When the radicand contains a variable, the radical becomes a function. Each input produces an output through the root operation. The index determines which inputs are valid and what shape the graph takes.

Square root functions and cube root functions are the most common, but the patterns extend to any index. Understanding these functions connects radicals to the broader study of function behavior.`
}


const faqQuestions = {
  obj1: {
    question: "What is the domain of the square root function?",
    answer: "The domain of f(x) = √x is [0, ∞) — only non-negative inputs are allowed. The radicand must be non-negative for real outputs. The range is also [0, ∞).",
    sectionId: "1"
  },
  obj2: {
    question: "What does the square root function graph look like?",
    answer: "The graph starts at the origin (0,0), curves upward to the right, and is concave down. It's the upper half of a sideways parabola. Key points: (0,0), (1,1), (4,2), (9,3).",
    sectionId: "2"
  },
  obj3: {
    question: "What is the domain of the cube root function?",
    answer: "The cube root function f(x) = ∛x has domain (-∞, ∞) — all real numbers. Odd-index roots accept any real input, including negative numbers. The range is also all real numbers.",
    sectionId: "3"
  },
  obj4: {
    question: "What does the cube root function graph look like?",
    answer: "The graph has an S-like shape passing through the origin. It extends in both directions, with negative inputs giving negative outputs. It has odd symmetry: f(-x) = -f(x).",
    sectionId: "4"
  },
  obj5: {
    question: "How do you find the domain of a radical function?",
    answer: "For even-index radicals (square root, fourth root), set the radicand ≥ 0 and solve. For √(x-3), require x-3 ≥ 0, so x ≥ 3. Odd-index radicals have no restrictions.",
    sectionId: "6"
  },
  obj6: {
    question: "How do transformations affect radical functions?",
    answer: "Vertical shift: √x + k shifts up/down. Horizontal shift: √(x-h) shifts right/left. Vertical stretch: a√x. Reflection: -√x flips over x-axis, √(-x) flips over y-axis.",
    sectionId: "7"
  },
  obj7: {
    question: "What is the inverse of the square root function?",
    answer: "The inverse of f(x) = √x is g(x) = x² (restricted to x ≥ 0). They reflect across y = x. Composing gives f(g(x)) = √(x²) = x for x ≥ 0.",
    sectionId: "8"
  },
  obj8: {
    question: "How do even and odd index radical functions differ?",
    answer: "Even-index functions (√x, ⁴√x) have domain [0,∞), start at a point, and curve upward. Odd-index functions (∛x, ⁵√x) have domain (-∞,∞), pass through the origin with S-shape symmetry.",
    sectionId: "5"
  },
  obj9: {
    question: "How do you find the inverse of a radical function?",
    answer: "Swap x and y, then solve for y. For f(x) = √(x-5): swap to get x = √(y-5), square both sides to get x² = y-5, so f⁻¹(x) = x² + 5 with domain x ≥ 0.",
    sectionId: "9"
  },
  obj10: {
    question: "Why does the square root graph curve downward (concave down)?",
    answer: "Each additional unit of input produces less additional output. From 0 to 1, output increases by 1. From 1 to 4, only another 1. The rate of increase slows, creating concave-down curvature.",
    sectionId: "2"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Radical Functions",
    "description": "Learn radical functions: square root and cube root graphs, domain and range, transformations, inverse relationships with power functions, and graphing strategies.",
    "url": "https://www.learnmathclass.com/algebra/roots/functions",
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
      "name": "Radical Functions"
    },
    "teaches": [
      "Square root function definition and graph",
      "Cube root function definition and graph",
      "General nth root functions",
      "Domain of radical functions",
      "Transformations of radical functions",
      "Inverse relationship with power functions",
      "Finding inverses of radical functions",
      "Graphing strategy for radical functions"
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
        "name": "Radical Functions",
        "item": "https://www.learnmathclass.com/algebra/roots/functions"
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
//         title: "Radical Functions Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/roots/functions",
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
      title: "Radical Functions: Graphs, Domain & Transformations | Learn Math Class",
      description: "Learn radical functions: square root and cube root graphs, domain and range, transformations, inverse relationships with power functions, and graphing strategies.",
      keywords: keyWords.join(", "),
      url: "/algebra/roots/functions",
      name: "Radical Functions"
    },
  }
}
   }

// export default function FunctionsPage({seoData,sectionsContent , introContent}) {
export default function FunctionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Radical Functions</h1>
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
