import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=[
    'analyzing functions',
    'function behavior',
    'intervals of increase and decrease',
    'local extrema',
    'absolute extrema',
    'end behavior of functions',
    'function symmetry',
    'positive and negative intervals',
    'function analysis',
    'domain and range from graph',
    'even and odd functions',
    'periodic functions',
    'interpreting function graphs',
    'comparing function representations'
  ]

  // •

//   • First item
// • Second item


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
    title: `Systematic Function Analysis`,
    content: `Analyzing a function means building a complete description of its behavior — not just isolated facts, but a coherent picture of how the function acts across its entire [domain](!/functions/domain).

A systematic approach prevents overlooking important features. Begin with domain and [range](!/functions/range) — what goes in and what comes out. Identify intercepts — where the function crosses the axes. Describe intervals of increase and decrease — where the function rises and falls. Locate extrema — the highest and lowest points. Note symmetry, periodicity, end behavior, and any discontinuities.

Each piece of information constrains the picture. Knowing the domain sets the stage. Knowing the range bounds the output. Knowing where the function increases and where it decreases reveals its overall shape. Knowing the extrema identifies the critical points.

The result is a profile of the function that captures its essential character. Two functions with identical profiles behave identically; differences in profiles reveal differences in behavior.

Analysis applies equally to functions given by equations, [graphs](!/functions/graphs), tables, or verbal descriptions. The questions remain the same — only the methods for answering them change.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Reading Domain and Range from Graph`,
    content: `The [domain](!/functions/domain) of a function appears on a graph as horizontal extent — the set of $x$-values for which the curve exists.

Scan the graph from left to right. Where does it begin? Where does it end? Does it extend infinitely in either direction? Arrows indicate unbounded continuation; endpoints indicate boundaries.

A solid dot at an endpoint means the endpoint is included in the domain. An open dot means the endpoint is excluded. Vertical asymptotes mark $x$-values where the function is undefined — the domain excludes these points and may split into separate intervals.

The [range](!/functions/range) appears as vertical extent — the set of $y$-values the graph actually reaches.

Scan the graph from bottom to top. What is the lowest point? The highest? Does the graph extend infinitely upward or downward? Horizontal asymptotes suggest bounds the function approaches but may not reach.

Express both domain and range in interval notation. A graph existing for all $x$ except $x = 2$, with $y$-values spanning from $-3$ up to but not including $5$, would have domain $(-\\infty, 2) \\cup (2, \\infty)$ and range $[-3, 5)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Intervals of Increase and Decrease`,
    content: `A function is increasing on an interval if larger inputs produce larger outputs. Moving right along the graph, the curve rises. A function is decreasing on an interval if larger inputs produce smaller outputs. Moving right, the curve falls.

Formally, $f$ is increasing on an interval if whenever $a < b$ in that interval, $f(a) < f(b)$. It is decreasing if $f(a) > f(b)$.

To identify these intervals from a graph, trace the curve from left to right. Note where it rises and where it falls. The intervals are expressed using $x$-values only — they describe portions of the domain, not the range.

For $f(x) = x^2$, the graph falls as $x$ moves from $-\\infty$ toward $0$, then rises as $x$ moves from $0$ toward $\\infty$. The function is decreasing on $(-\\infty, 0)$ and increasing on $(0, \\infty)$.

A function is constant on an interval if it produces the same output throughout. The graph is a horizontal segment over that interval.

Turning points mark transitions between increasing and decreasing behavior. At a turning point, the function switches direction — rising then falling, or falling then rising. These are candidates for local extrema.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Intervals Where Positive, Negative, or Zero`,
    content: `A function is positive where its output is greater than zero. On the graph, these are intervals where the curve lies above the $x$-axis.

A function is negative where its output is less than zero. On the graph, these are intervals where the curve lies below the $x$-axis.

A function equals zero at its $x$-intercepts — the points where the curve crosses the horizontal axis. These points separate positive and negative intervals.

For $f(x) = x^2 - 4$, the zeros occur at $x = -2$ and $x = 2$. The parabola opens upward, so it dips below the axis between the zeros and rises above the axis outside them. The function is positive on $(-\\infty, -2) \\cup (2, \\infty)$ and negative on $(-2, 2)$.

This analysis connects to solving inequalities. Asking "where is $f(x) > 0$?" is the same as asking "for which $x$ is the graph above the axis?" Asking "where is $f(x) \\leq 3$?" becomes "where is the graph at or below the horizontal line $y = 3$?"

Sign analysis matters in applications. Positive profit versus negative profit. Above sea level versus below. Growth versus decline. The sign of the function carries meaning beyond mere arithmetic.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Locating Extrema from Graph`,
    content: `Extrema are the high and low points of a function — the peaks and valleys where the output reaches notable values.

A local maximum occurs at $x = c$ if $f(c)$ is greater than or equal to all nearby function values. On the graph, this appears as a peak — the curve rises to a high point and then descends. The value $f(c)$ is the local maximum value.

A local minimum occurs at $x = c$ if $f(c)$ is less than or equal to all nearby function values. On the graph, this appears as a valley — the curve descends to a low point and then rises.

The absolute maximum (or global maximum) is the largest value the function achieves anywhere on its domain. The absolute minimum is the smallest value. These may coincide with local extrema or may occur at endpoints of a restricted domain.

To locate extrema from a graph, identify all peaks and valleys. Read the $y$-coordinate of each — these are the extreme values. Then determine which, if any, is the absolute highest or lowest.

Not every function has absolute extrema. The function $f(x) = x$ on $(-\\infty, \\infty)$ has no maximum or minimum — it extends without bound in both directions. But on a closed interval $[0, 5]$, it has absolute minimum $0$ at $x = 0$ and absolute maximum $5$ at $x = 5$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Identifying Symmetry`,
    content: `Symmetry in a function's graph reveals algebraic structure and simplifies analysis.

A function has even symmetry if its graph is symmetric about the $y$-axis. Folding the graph along the vertical axis produces a perfect match — the left side mirrors the right. Algebraically, $f(-x) = f(x)$ for all $x$ in the domain.

Examples of even functions: $f(x) = x^2$, $f(x) = |x|$, $f(x) = \\cos(x)$. Each satisfies $f(-x) = f(x)$.

A function has odd symmetry if its graph is symmetric about the origin. Rotating the graph $180°$ around the origin produces the same curve. Algebraically, $f(-x) = -f(x)$ for all $x$ in the domain.

Examples of odd functions: $f(x) = x^3$, $f(x) = x$, $f(x) = \\sin(x)$. Each satisfies $f(-x) = -f(x)$.

Most functions have neither symmetry. The function $f(x) = x^2 + x$ is neither even nor odd: $f(-x) = x^2 - x$, which equals neither $f(x)$ nor $-f(x)$.

Recognizing symmetry halves the graphing work. For an even function, graphing the right half determines the left. For an odd function, graphing one quadrant determines the opposite quadrant.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Identifying Periodicity`,
    content: `A function is periodic if its values repeat at regular intervals. The graph shows a pattern that cycles endlessly — the same shape appearing again and again as $x$ increases.

The period is the length of one complete cycle — the smallest positive number $p$ such that $f(x + p) = f(x)$ for all $x$ in the domain.

The sine function has period $2\\pi$: the wave from $x = 0$ to $x = 2\\pi$ repeats identically from $x = 2\\pi$ to $x = 4\\pi$, and so on forever.

To identify the period from a graph, find two consecutive peaks (or valleys, or any matching points) and measure the horizontal distance between them. That distance is the period.

The amplitude of a periodic function measures the vertical extent of oscillation — half the distance from the maximum to the minimum value. For $f(x) = \\sin(x)$, the amplitude is $1$, since the function oscillates between $-1$ and $1$.

Periodicity appears in modeling cycles: daily temperatures, sound waves, seasonal patterns, alternating current. Any phenomenon that repeats regularly suggests a periodic function model.

Non-periodic functions never repeat exactly. The exponential function $f(x) = 2^x$ grows without cycling back. Linear functions, polynomials, and logarithms are all non-periodic.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `End Behavior from Graph`,
    content: `End behavior describes what happens to $f(x)$ as $x$ moves toward positive or negative infinity — the far right and far left of the graph.

Four possibilities exist for each direction:

The function may increase without bound: $f(x) \\to \\infty$. The graph rises indefinitely.

The function may decrease without bound: $f(x) \\to -\\infty$. The graph falls indefinitely.

The function may approach a finite limit: $f(x) \\to L$. The graph levels off toward a horizontal asymptote at $y = L$.

The function may oscillate without settling: $f(x)$ bounces between values without converging. The graph fluctuates as $x$ extends.

To read end behavior from a graph, examine the far left and far right. Does the curve rise, fall, level off, or oscillate?

For polynomials, end behavior depends on the leading term. The function $f(x) = -2x^3 + 5x^2 - x + 1$ behaves like $-2x^3$ for large $|x|$: rising on the left, falling on the right.

For rational functions, end behavior depends on the degree comparison. A horizontal asymptote indicates a finite limit; no horizontal asymptote indicates unbounded behavior.

End behavior anchors the overall shape of the graph, constraining what happens far from the origin.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Interpreting Real-World Function Graphs`,
    content: `When a function models a real-world situation, every feature of the graph carries meaning beyond pure mathematics.

The axes represent physical quantities with units. A graph of distance versus time has distance (meters, miles, kilometers) on the vertical axis and time (seconds, hours) on the horizontal. Reading the graph means interpreting coordinates as physical measurements.

Intercepts have contextual meaning. The $y$-intercept often represents an initial condition — the value when the process begins. The $x$-intercepts may represent when a quantity reaches zero: when the tank empties, when the population vanishes, when the object hits the ground.

Increasing and decreasing intervals describe change. A rising profit curve means revenue is growing. A falling temperature curve means cooling is occurring. The steepness indicates the rate of change — steeper means faster.

Extrema represent optimal or critical values. Maximum profit. Minimum cost. Peak concentration of medicine in the bloodstream. These points often answer the central question of an application.

End behavior predicts long-term trends. Does population stabilize or explode? Does temperature approach equilibrium? Does concentration decay to zero?

Units matter throughout. The statement "the maximum occurs at $x = 4$" is incomplete without knowing that $x$ represents hours and the maximum value is $120$ milligrams per liter.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Comparing Functions Across Representations`,
    content: `The same function can appear as an equation, a table, or a graph. Each representation reveals different aspects most clearly.

The equation $f(x) = 2x^2 - 8$ shows algebraic structure. The coefficient $2$ indicates vertical stretch. The constant $-8$ shifts the vertex down. Solving $f(x) = 0$ gives the zeros exactly: $x = \\pm 2$.

A table of values shows specific input-output pairs:

| $x$ | $f(x)$ |
|-----|--------|
| $-2$ | $0$ |
| $-1$ | $-6$ |
| $0$ | $-8$ |
| $1$ | $-6$ |
| $2$ | $0$ |

The table confirms the zeros, shows the minimum at $x = 0$, and reveals the symmetry between negative and positive inputs.

The graph shows shape at a glance: a parabola opening upward, vertex at $(0, -8)$, crossing the axis at $\\pm 2$, symmetric about the $y$-axis.

Converting between representations tests understanding. Can you sketch the graph from the equation? Can you write the equation from the graph? Can you fill in missing table entries from either?

Different questions favor different representations. "What is $f(3)$?" is fastest from the equation. "Is the function increasing at $x = 1$?" is clearest from the graph. "What is the exact output when input is $-1$?" may be easiest from a table that includes that value.

Fluency means moving freely among all three, recognizing the same function in each form.`,
    before: ``,
    after: ``,
    link: '',
  },

}


 const introContent = {
  id: "intro",
  title: "Reading a Function's Behavior",
  content: `A function does more than assign outputs to inputs — it behaves. It rises and falls, reaches peaks and valleys, approaches limits, crosses thresholds. Analyzing a function means describing this behavior systematically: where the function increases, where it decreases, where it achieves its extreme values, and how it acts at the boundaries of its domain.

The tools for analysis come from both algebra and geometry. The equation reveals structure; the [graph](!/functions/graphs) reveals shape. Together they answer the essential question: what does this function actually do?`
}



  const faqQuestions = {
    q1: {
      question: "What does it mean to analyze a function?",
      answer: "Analyzing a function means building a complete description of its behavior across its entire domain. This includes identifying the domain and range, finding intercepts, describing intervals of increase and decrease, locating extrema, noting symmetry, and describing end behavior. The result is a profile that captures the function's essential character."
    },
    q2: {
      question: "How do you identify intervals of increase and decrease from a graph?",
      answer: "To identify intervals of increase and decrease, trace the curve from left to right. Where the curve rises, the function is increasing; where it falls, the function is decreasing. These intervals are expressed using x-values only. For example, f(x) = x² is decreasing on (-∞, 0) and increasing on (0, ∞). Turning points mark the transitions between increasing and decreasing behavior."
    },
    q3: {
      question: "What is the difference between local and absolute extrema?",
      answer: "A local maximum or minimum occurs where the function value is greater or lesser than all nearby values — these are the peaks and valleys of the graph. An absolute maximum or minimum is the largest or smallest value the function achieves anywhere on its entire domain. Absolute extrema may coincide with local extrema or occur at the endpoints of a restricted domain."
    },
    q4: {
      question: "How do you determine if a function is even or odd?",
      answer: "A function is even if its graph is symmetric about the y-axis, which means f(-x) = f(x) for all x in the domain. Common examples include f(x) = x² and f(x) = cos(x). A function is odd if its graph is symmetric about the origin, meaning f(-x) = -f(x). Examples include f(x) = x³ and f(x) = sin(x). Most functions have neither type of symmetry."
    },
    q5: {
      question: "What is end behavior and how do you read it from a graph?",
      answer: "End behavior describes what happens to f(x) as x approaches positive or negative infinity — the far right and far left of the graph. To read it, examine whether the curve rises, falls, levels off toward a horizontal asymptote, or oscillates as it extends in each direction. For polynomials, end behavior is determined by the leading term; for rational functions, it depends on the degree comparison between numerator and denominator."
    }
  }

  const seoData = {
    title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
    description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
    keywords: keyWords.join(", "),
    url: "/functions/analyzing",
    name: "Analyzing Functions"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": "https://www.learnmathclass.com" + seoData.url,
      "keywords": keyWords.join(", "),
      "dateModified": new Date().toISOString(),
      "datePublished": "2024-01-15",
      "inLanguage": "en-US",
      "teaches": [
        "Systematic function analysis including domain, range, and intercepts",
        "Identifying intervals of increase, decrease, and constancy from graphs",
        "Locating local and absolute extrema from function graphs",
        "Determining function symmetry: even, odd, or neither",
        "Reading end behavior and identifying horizontal asymptotes",
        "Analyzing positive, negative, and zero intervals of a function"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": "https://www.learnmathclass.com/functions/analyzing"
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    }
  }

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
        description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
        keywords: keyWords.join(", "),
        url: "/functions/analyzing",
         name: "Analyzing Functions"
      },
       }
    }
   }

export default function AnalyzingFunctionsPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas
}) {


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Analyzing Functions</h1>
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
