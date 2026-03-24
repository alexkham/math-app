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
  "graph analysis derivatives",
  "first derivative test",
  "second derivative test",
  "critical points calculus",
  "concavity",
  "inflection points",
  "increasing decreasing functions",
  "curve sketching",
  "optimization calculus",
  "related rates",
  "local maximum minimum",
  "tangent line equation",
  "extrema derivatives",
  "concave up concave down"
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
    title: `The Derivative at a Point`,
    content: `
The value $f'(a)$ is a number—the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. A positive value means the function is increasing at that instant. A negative value means it is decreasing. A value of zero means the graph is momentarily flat.

The magnitude $|f'(a)|$ measures steepness. A derivative of $10$ at a point means the function is climbing steeply; a derivative of $0.01$ means it is nearly flat. The sign gives direction; the size gives intensity.

At points where $f'(a)$ does not exist—corners, cusps, vertical tangents, or discontinuities—the function has no well-defined instantaneous rate of change. These points require separate treatment under [differentiability](!/calculus/derivatives/differentiability).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Tangent Lines`,
    content: `
The tangent line to $f$ at $x = a$ passes through $(a, f(a))$ with slope $f'(a)$. Its equation in point-slope form is:

$$y - f(a) = f'(a)(x - a)$$

This line is the best linear approximation to $f$ near $x = a$. For values of $x$ close to $a$, the tangent line and the curve are nearly indistinguishable. This is the geometric foundation of [linear approximation](!/calculus/derivatives/differentials).

The normal line at the same point is perpendicular to the tangent. If $f'(a) \\neq 0$, its slope is $-1/f'(a)$. If $f'(a) = 0$, the tangent is horizontal and the normal is vertical.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Increasing and Decreasing Functions`,
    content: `
The sign of $f'$ on an interval determines the direction of $f$ on that interval.

If $f'(x) > 0$ for all $x$ in an open interval $(a, b)$, then $f$ is strictly increasing on $(a, b)$: larger inputs produce larger outputs. If $f'(x) < 0$ on $(a, b)$, then $f$ is strictly decreasing: larger inputs produce smaller outputs.

The proof relies on the [Mean Value Theorem](!/calculus/derivatives/rules). For any two points $x_1 < x_2$ in $(a, b)$, there exists $c$ between them with $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. If $f'(c) > 0$ and $x_2 - x_1 > 0$, then $f(x_2) - f(x_1) > 0$, confirming $f$ is increasing.

To find where a function increases or decreases: solve $f'(x) = 0$ and identify where $f'$ is undefined, then test the sign of $f'$ in each resulting interval.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Critical Points`,
    content: `
A critical point of $f$ is a value $x = c$ in the domain of $f$ where either $f'(c) = 0$ or $f'(c)$ does not exist.

Critical points are the only candidates for local extrema. If $f$ has a local maximum or minimum at $c$, then $c$ must be a critical point. This is Fermat's theorem: a local extremum at an interior point requires the derivative to vanish or fail to exist.

The converse is false. The function $f(x) = x^3$ has $f'(0) = 0$, so $x = 0$ is a critical point, but $f$ has no extremum there—it increases through the origin. A critical point is a candidate that must be tested further.

Finding critical points is the first step in any extremum or optimization problem. The subsequent tests—first derivative test and second derivative test—classify what happens at each candidate.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The First Derivative Test`,
    content: `
The first derivative test classifies a critical point $c$ by examining how $f'$ changes sign around it.

If $f'$ changes from positive to negative at $c$—the function rises then falls—then $f$ has a local maximum at $c$. If $f'$ changes from negative to positive—the function falls then rises—then $f$ has a local minimum at $c$. If $f'$ does not change sign—positive on both sides or negative on both sides—then $c$ is neither a maximum nor a minimum.

The test works even when $f'(c)$ does not exist, as long as $f$ is continuous at $c$. It requires checking the sign of $f'$ in an interval immediately to the left and immediately to the right of $c$. No information about $f''$ is needed, making this test universally applicable among derivative-based classification methods.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `The Second Derivative Test`,
    content: `
When $f'(c) = 0$ and $f''(c)$ exists, the second derivative test provides a quicker classification.

If $f''(c) > 0$, the graph is concave up at $c$, and the horizontal tangent sits at the bottom of a cup: $f$ has a local minimum at $c$. If $f''(c) < 0$, the graph is concave down, and the horizontal tangent sits at the top of a cap: $f$ has a local maximum at $c$.

If $f''(c) = 0$, the test is inconclusive. The point might be an extremum or an inflection point—further analysis is required. In this case, fall back to the first derivative test or examine [higher-order derivatives](!/calculus/derivatives/higher-order).

The second derivative test is faster than the first derivative test when $f''$ is easy to compute, but it cannot handle critical points where $f'$ does not exist.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Concavity`,
    content: `
Concavity describes how the slope of $f$ changes, not whether the function rises or falls but how it bends while doing so.

If $f''(x) > 0$ on an interval, the derivative $f'$ is increasing there: the slope gets steeper (or less negative). The graph bends upward—concave up. Visually, the curve lies above its tangent lines.

If $f''(x) < 0$ on an interval, the derivative $f'$ is decreasing: the slope gets less steep (or more negative). The graph bends downward—concave down. The curve lies below its tangent lines.

A function can be increasing and concave down simultaneously—rising but decelerating, like a ball thrown upward before reaching its peak. Concavity and direction are independent properties controlled by $f''$ and $f'$ respectively.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Inflection Points`,
    content: `
An inflection point is a point where the concavity of $f$ changes—from concave up to concave down, or the reverse.

At an inflection point, $f''$ must either equal zero or fail to exist. However, $f''(c) = 0$ alone does not guarantee an inflection point. The function $f(x) = x^4$ has $f''(0) = 0$, but the concavity does not change at $x = 0$—the graph is concave up on both sides. The sign of $f''$ must actually switch across the point.

To locate inflection points: find where $f''(x) = 0$ or $f''$ is undefined, then verify that $f''$ changes sign. On the graph of $f'$, inflection points of $f$ correspond to local extrema of $f'$—the slope of $f$ reaches a peak or trough and reverses direction.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Curve Sketching`,
    content: `
Curve sketching assembles all derivative information into a complete picture of a function's graph.

The process begins with preliminary analysis: domain, intercepts, symmetry (even, odd, periodic), and asymptotes. Vertical asymptotes arise where the function is undefined; horizontal asymptotes come from [limits at infinity](!/calculus/limits/infinity).

First derivative analysis determines where $f$ increases and decreases, and locates all local extrema. Second derivative analysis determines concavity intervals and inflection points. End behavior—the function's direction as $x \\to \\pm\\infty$—frames the overall shape.

Combining these elements produces a qualitative sketch without plotting individual points. The derivative framework reveals structure that pointwise computation alone would miss: a function might appear flat in a table of values while the derivatives expose a subtle extremum nearby.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Optimization`,
    content: `
Optimization finds the absolute maximum or minimum value of a function, often on a specified interval or subject to constraints.

On a closed interval $[a, b]$, the Extreme Value Theorem guarantees that a continuous function attains both an absolute maximum and an absolute minimum. The candidates are the critical points inside $(a, b)$ and the endpoints $a$ and $b$. Evaluate $f$ at each candidate; the largest value is the absolute maximum, the smallest is the absolute minimum.

Applied optimization problems translate a real scenario into a function of one variable. The steps are: identify the quantity to optimize, express it as a function of a single variable, determine the feasible domain, find critical points within that domain, and compare values at critical points and endpoints.

The derivative identifies candidates; the context determines which candidate solves the problem. Checking that a critical point is actually a maximum (or minimum) rather than merely a critical point is an essential final step.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Related Rates`,
    content: `
Related rates problems involve two or more quantities that change simultaneously with respect to a common variable, usually time $t$. A known rate of change in one quantity determines an unknown rate of change in another, connected through an equation.

The method uses [implicit differentiation](!/calculus/derivatives/techniques) with respect to $t$. Start with an equation relating the variables—geometric, physical, or algebraic. Differentiate both sides with respect to $t$, applying the chain rule to every variable that depends on $t$. Substitute known values and known rates, then solve for the unknown rate.

Setting up the relationship correctly is the critical step. The equation must hold at all times, not just at the particular instant in question. Constants can be substituted only after differentiation—replacing a variable with a fixed value before differentiating eliminates its rate of change from the equation.
`,
    before: ``,
    after: ``,
    link: '',
  },
};

const introContent = {
  id: `intro`,
  title: `Reading Functions Through Their Derivatives`,
  content: `
A function's graph carries information about direction, curvature, turning points, and long-run behavior. The derivative extracts this information systematically. Where the derivative is positive, the function rises. Where it is negative, the function falls. Where it equals zero, something potentially interesting happens—a peak, a valley, or a momentary pause.

The second derivative adds depth. It determines whether the graph bends upward or downward, distinguishing between a function that accelerates and one that decelerates. Together, the first and second derivatives provide a complete toolkit for analyzing the shape of any differentiable function.

This page develops the full framework: from the derivative at a single point through tangent lines, monotonicity, extrema, concavity, inflection points, curve sketching, optimization, and related rates.
`
};



const faqQuestions = {
  obj1: {
    question: "What does the derivative at a point tell you?",
    answer: "The value f'(a) gives the slope of the tangent line at (a, f(a)). Positive means the function is increasing at that instant; negative means decreasing; zero means momentarily flat. The magnitude |f'(a)| measures steepness.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the equation of a tangent line?",
    answer: "The tangent line to f at x = a has equation y − f(a) = f'(a)(x − a). It passes through (a, f(a)) with slope f'(a). This line is the best linear approximation to f near x = a.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you find where a function is increasing or decreasing?",
    answer: "If f'(x) > 0 on an interval, f is strictly increasing there. If f'(x) < 0, f is strictly decreasing. Find where f'(x) = 0 or is undefined, then test the sign of f' in each resulting interval.",
    sectionId: "3"
  },
  obj4: {
    question: "What is a critical point?",
    answer: "A critical point is a value x = c in the domain of f where f'(c) = 0 or f'(c) does not exist. Critical points are the only candidates for local extrema. However, not every critical point is an extremum.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the first derivative test?",
    answer: "The first derivative test classifies critical points by sign changes. If f' changes from positive to negative at c, f has a local maximum. If f' changes from negative to positive, f has a local minimum. No sign change means no extremum.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the second derivative test?",
    answer: "When f'(c) = 0: if f''(c) > 0, f has a local minimum (concave up); if f''(c) < 0, f has a local maximum (concave down). If f''(c) = 0, the test is inconclusive—use the first derivative test instead.",
    sectionId: "6"
  },
  obj7: {
    question: "What is concavity?",
    answer: "Concavity describes how f bends. If f''(x) > 0, the graph is concave up—slopes are increasing and the curve lies above its tangent lines. If f''(x) < 0, the graph is concave down—slopes are decreasing.",
    sectionId: "7"
  },
  obj8: {
    question: "What is an inflection point?",
    answer: "An inflection point is where concavity changes—from concave up to concave down or vice versa. At such points, f'' must equal zero or be undefined, and f'' must actually change sign across the point.",
    sectionId: "8"
  },
  obj9: {
    question: "What is curve sketching?",
    answer: "Curve sketching combines derivative analysis to graph a function: find domain, intercepts, asymptotes; use f' to determine increasing/decreasing intervals and extrema; use f'' to determine concavity and inflection points; analyze end behavior.",
    sectionId: "9"
  },
  obj10: {
    question: "How do you solve optimization problems?",
    answer: "On a closed interval, evaluate f at all critical points and endpoints—the largest value is the absolute maximum, smallest is the absolute minimum. For applied problems, express the quantity to optimize as a function of one variable first.",
    sectionId: "10"
  },
  obj11: {
    question: "What are related rates problems?",
    answer: "Related rates involve quantities changing simultaneously with respect to time. Write an equation relating the variables, differentiate implicitly with respect to t, substitute known values and rates, then solve for the unknown rate.",
    sectionId: "11"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Graph Analysis with Derivatives",
    "description": "Complete guide to analyzing graphs with derivatives: critical points, first and second derivative tests, concavity, inflection points, curve sketching, optimization, and related rates.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/graph-analysis",
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
      "name": "Graph Analysis with Derivatives"
    },
    "teaches": [
      "Tangent lines and derivative at a point",
      "Increasing and decreasing functions",
      "Critical points and extrema tests",
      "Concavity and inflection points",
      "Curve sketching techniques",
      "Optimization and related rates"
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
        "name": "Graph Analysis with Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/graph-analysis"
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
  //       title: "Graph Analyzis with Derivatives | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/graph-analysis",
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
      title: "Graph Analysis with Derivatives: Extrema & Curves | Learn Math Class",
      description: "Complete guide to analyzing graphs with derivatives: critical points, first and second derivative tests, concavity, inflection points, curve sketching, optimization, and related rates.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/graph-analysis",
      name: "Graph Analysis with Derivatives"
    },
  }
}
   }
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Graph Analyzis with Derivatives</h1>
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
