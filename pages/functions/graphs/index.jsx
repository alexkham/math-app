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

  const keyWords=['graphing functions','function graphs','coordinate plane','plotting functions','x-intercept','y-intercept','reading graphs','sketching functions','graph interpretation','key features of graphs','types of curves','function graph examples','vertical line test','graph of a function']

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
    title: `The Coordinate Plane`,
    content: `The coordinate plane is the stage on which functions are graphed. Two perpendicular number lines — the horizontal $x$-axis and the vertical $y$-axis — intersect at the origin $(0, 0)$ and extend infinitely in all directions.

Every point in the plane is identified by an ordered pair $(x, y)$. The first coordinate gives the horizontal position: positive to the right of the origin, negative to the left. The second coordinate gives the vertical position: positive above the origin, negative below.

The axes divide the plane into four quadrants. Quadrant I contains points where both coordinates are positive. Quadrant II has negative $x$ and positive $y$. Quadrant III has both coordinates negative. Quadrant IV has positive $x$ and negative $y$.

Plotting a point means locating it on this grid. To plot $(3, -2)$, move $3$ units right from the origin, then $2$ units down. The point lies in Quadrant IV.

This framework provides the canvas for every function graph. The $x$-axis represents input, the $y$-axis represents output, and the curve connecting plotted points shows how output depends on input.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Graph of a Function`,
    content: `The graph of a function $f$ is the set of all points $(x, f(x))$ where $x$ is in the [domain](!/functions/domain). Each point pairs an input with its corresponding output, and the complete collection of such points forms a curve in the plane.

For $f(x) = x^2$, the graph includes $(0, 0)$, $(1, 1)$, $(2, 4)$, $(-1, 1)$, $(-2, 4)$, and infinitely many other points. Connected together, they form the familiar parabola opening upward.

The graph is a visual encoding of the function's behavior. Inputs run along the horizontal axis; outputs are measured vertically. To find $f(3)$ from the graph, locate $x = 3$ on the horizontal axis, move vertically to the curve, and read the $y$-coordinate of that point.

Because a function assigns exactly one output to each input, the graph has a definitive property: every vertical line intersects it at most once. This is the vertical line test — if a vertical line crosses a curve twice, that curve does not represent a function.

The graph transforms abstract relationships into geometric objects. Increasing behavior appears as a rising curve. Decreasing behavior appears as a falling curve. Symmetry, periodicity, and boundedness become visible patterns.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Sketching Graphs from Equations`,
    content: `Given a function's equation, the most direct way to produce its graph is point plotting: choose input values, compute outputs, plot the resulting points, and connect them with an appropriate curve.

For $f(x) = x^2 - 4x + 3$, build a table of values:

| $x$ | $f(x)$ |
|-----|--------|
| $0$ | $3$ |
| $1$ | $0$ |
| $2$ | $-1$ |
| $3$ | $0$ |
| $4$ | $3$ |

Plot these five points and connect them with a smooth parabola. The curve passes through $(1, 0)$ and $(3, 0)$, reaches a minimum at $(2, -1)$, and opens upward.

Choosing strategic points improves efficiency. Include $x = 0$ to find the $y$-intercept. Solve $f(x) = 0$ to find $x$-intercepts. For quadratics, find the vertex. For rational functions, identify asymptotes. For periodic functions, capture at least one full period.

Recognizing the function type anticipates the shape. Linear equations produce lines. Quadratics produce parabolas. Cubics produce S-curves. Familiarity with [function families](!/functions/families) reduces guesswork — the shape is known in advance, and plotting confirms the specific position and scale.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Sketching Graphs from Tables`,
    content: `When a function is given as a table of input-output pairs rather than an equation, the graph emerges by plotting each pair and making reasonable connections.

A table provides discrete data:

| $x$ | $f(x)$ |
|-----|--------|
| $-2$ | $5$ |
| $0$ | $1$ |
| $2$ | $-3$ |
| $4$ | $1$ |
| $6$ | $5$ |

Plot the points $(-2, 5)$, $(0, 1)$, $(2, -3)$, $(4, 1)$, $(6, 5)$. If the function is continuous, connect them with a smooth curve. If the function is discrete — defined only at those specific inputs — leave the points unconnected.

Tables reveal exact values at sampled points but conceal behavior between samples. The function might oscillate wildly between listed values, or it might follow a simple pattern. Without additional information, connecting points assumes the simplest plausible behavior.

Context guides interpretation. A table of daily temperatures suggests a continuous underlying process; connecting points makes sense. A table of annual profits at year-end suggests discrete data; plotting only the given points may be more appropriate.

Tables cannot capture every feature — a maximum might occur between listed points, and asymptotes might lurk where no data exists. Graphs from tables are approximations, constrained by the data provided.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Reading Function Values from Graphs`,
    content: `A graph answers questions about function values through geometric reading rather than algebraic calculation.

To find $f(a)$ for a specific input $a$: locate $a$ on the horizontal axis, draw a vertical line to the curve, and read the $y$-coordinate of the intersection point. That $y$-value is $f(a)$.

To find all $x$ such that $f(x) = b$ for a specific output $b$: locate $b$ on the vertical axis, draw a horizontal line to the curve, and read the $x$-coordinates of all intersection points. Each intersection gives a solution.

The first question has at most one answer — a function produces exactly one output per input. The second question may have zero, one, or many answers — multiple inputs can share the same output.

Precision depends on the graph's scale and clarity. Reading $f(2)$ from a carefully drawn graph might yield $f(2) = 3.7$, but the true value might be $3.71$ or $3.68$. Graphs provide estimates; equations provide exact values.

Graphs also answer qualitative questions directly. Is $f(3)$ positive or negative? Check whether the point at $x = 3$ lies above or below the $x$-axis. Is $f(2) > f(5)$? Compare the heights of the graph at those two inputs.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Intercepts`,
    content: `Intercepts are points where the graph crosses the coordinate axes. They anchor the graph to recognizable positions.

The $y$-intercept is the point where the graph crosses the vertical axis. At this point, $x = 0$. To find it algebraically, evaluate $f(0)$. The $y$-intercept is $(0, f(0))$.

A function has at most one $y$-intercept, since $x = 0$ produces at most one output. If $0$ is not in the domain, the function has no $y$-intercept.

The $x$-intercepts are points where the graph crosses the horizontal axis. At these points, $y = 0$. To find them algebraically, solve $f(x) = 0$. Each solution $x = c$ gives an $x$-intercept $(c, 0)$.

A function can have zero, one, or many $x$-intercepts. The parabola $f(x) = x^2 + 1$ has none — it never touches the $x$-axis. The parabola $f(x) = x^2$ has exactly one, at the origin. The sine function has infinitely many, at every integer multiple of $\\pi$.

The $x$-intercepts are the zeros of the function, and finding them is equivalent to solving the equation $f(x) = 0$. This connection makes intercepts central to both graphing and equation-solving.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Identifying Key Features Visually`,
    content: `Beyond intercepts, graphs reveal features that characterize a function's behavior.

Peaks are local high points — places where the graph rises to a summit and then descends. These are local maxima. Valleys are local low points — places where the graph descends to a trough and then rises. These are local minima. Together, peaks and valleys are the turning points of the graph.

The absolute maximum is the highest point on the entire graph; the absolute minimum is the lowest. These may occur at turning points or at the endpoints of a restricted domain. Some functions have no absolute extrema — a line extends forever in both directions without reaching a highest or lowest point.

Asymptotes are lines the graph approaches but never reaches. A vertical asymptote appears where the function blows up toward infinity; the graph rises or falls steeply, getting arbitrarily close to a vertical line. A horizontal asymptote describes end behavior — the graph levels off toward a fixed height as $x$ extends toward infinity.

Holes are single missing points — places where the graph is undefined but the surrounding curve continues smoothly. Holes appear as open circles on carefully drawn graphs and correspond to removable discontinuities in the function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Types of Curves`,
    content: `Different [function families](!/functions/families) produce different characteristic shapes. Recognizing these shapes enables faster graphing and deeper understanding.

Lines come from linear functions $f(x) = mx + b$. They have constant slope, no curvature, and extend infinitely in both directions.

Parabolas come from quadratic functions $f(x) = ax^2 + bx + c$. They open upward when $a > 0$, downward when $a < 0$, and have a single vertex where the curve turns.

S-curves come from cubic functions. They feature one inflection point where the curve changes from bending one way to bending the other. Both ends extend to infinity, in opposite directions.

Hyperbolas come from simple rational functions like $f(x) = 1/x$. They have two separate branches, one in Quadrants I and III, the other reflected. Vertical and horizontal asymptotes frame the curve.

Half-curves come from radical functions like $f(x) = \\sqrt{x}$. They begin at a starting point and extend in one direction, curving gently.

Waves come from trigonometric functions. They oscillate periodically, rising and falling in regular cycles that repeat forever.

Growth and decay curves come from exponential functions. They rise rapidly toward infinity or decay toward zero, always staying on one side of the horizontal axis.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Graphing Technology`,
    content: `Graphing calculators and software automate the plotting process. Enter the function's equation, and the tool generates the graph instantly.

Setting the viewing window determines what portion of the graph is visible. The default window may miss important features — a function with zeros at $x = 100$ and $x = -100$ will appear flat if the window shows only $-10 \\leq x \\leq 10$. Adjusting the window to capture all relevant behavior is essential.

Trace features allow reading coordinates of points on the graph. Moving along the curve displays the $x$ and $y$ values at each position. This answers questions like "what is $f(2.5)$?" directly.

Built-in tools find intercepts, maxima, minima, and intersections. These calculations may be numerical approximations rather than exact answers, but they provide valuable information quickly.

Technology has limitations. It cannot show true asymptotic behavior — only increasingly steep curves within the finite window. It cannot reveal holes unless the software is designed to indicate them. Resolution limits mean that rapid oscillations may appear as solid bands.

Technology is a tool for exploration and verification, not a replacement for understanding. Knowing what a graph should look like allows checking whether the technology is showing something meaningful or misleading.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Graph Interpretation`,
    content: `Reading a graph is not just about extracting numbers — it is about understanding what the function does.

Shape reveals behavior. A graph that rises from left to right represents an increasing function. A graph that oscillates represents periodic behavior. A graph that levels off toward a horizontal line represents bounded end behavior.

The [domain](!/functions/domain) appears as horizontal extent. Where does the graph exist? Where are there gaps or asymptotes?

The [range](!/functions/range) appears as vertical extent. How high does the graph reach? How low? Are there values of $y$ the graph never attains?

Symmetry appears as visual balance. A graph symmetric about the $y$-axis represents an [even function](!/functions/properties). A graph symmetric about the origin represents an odd function.

Comparing graphs reveals relationships between functions. Two functions with the same shape but different positions differ by a [transformation](!/functions/transformations). Two functions that intersect share common solutions.

Graphs translate between the algebraic and the visual. The equation $f(x) = x^2 - 4$ states a rule; its graph shows a parabola crossing the $x$-axis at $\\pm 2$ and reaching a minimum at the origin. Both descriptions capture the same function, and fluency in reading both strengthens understanding of each.`,
    before: ``,
    after: ``,
    link: '',
  },

}

const introContent = {
  id: "intro",
  title: "Functions Made Visible",
  content: `An equation describes a function algebraically. A graph describes it visually. The graph of a function is the collection of all points $(x, f(x))$ plotted in the coordinate plane — a picture that reveals at a glance what the algebra might take pages to explain.

From a graph, the shape of a function becomes immediate. Where does it rise? Where does it fall? Where does it cross the axes? Where does it reach its highest or lowest points? These questions, difficult to answer from a formula alone, become matters of simple observation once the function is drawn.`
}




  const faqQuestions = {
    q1: {
      question: "What is the graph of a function?",
      answer: "The graph of a function is the set of all points (x, f(x)) plotted in the coordinate plane, where x is in the domain. Each point pairs an input with its corresponding output, forming a curve that visually encodes the function's behavior. Because a function assigns exactly one output to each input, every vertical line intersects the graph at most once."
    },
    q2: {
      question: "How do you find the x-intercepts and y-intercept of a function graph?",
      answer: "The y-intercept is found by evaluating f(0), giving the point (0, f(0)) where the graph crosses the vertical axis. The x-intercepts are found by solving f(x) = 0; each solution x = c gives an x-intercept at (c, 0). A function has at most one y-intercept but can have zero, one, or many x-intercepts."
    },
    q3: {
      question: "How do you sketch a function graph from an equation?",
      answer: "The most direct method is point plotting: choose input values, compute the corresponding outputs, plot the resulting points, and connect them with a smooth curve. Including strategic points such as the y-intercept, x-intercepts, and the vertex or turning point improves efficiency. Recognizing the function family in advance — linear, quadratic, cubic, etc. — allows you to anticipate the shape before plotting."
    },
    q4: {
      question: "What key features can you identify from a function graph?",
      answer: "A graph reveals intercepts, local maxima and minima (peaks and valleys), the absolute maximum and minimum, vertical and horizontal asymptotes, and any holes (removable discontinuities). The domain appears as the horizontal extent of the graph and the range as the vertical extent. Symmetry about the y-axis indicates an even function, while symmetry about the origin indicates an odd function."
    },
    q5: {
      question: "What are the main types of curves produced by different function families?",
      answer: "Linear functions produce straight lines, quadratics produce parabolas, and cubic functions produce S-shaped curves with an inflection point. Rational functions like 1/x produce hyperbolas with asymptotes, radical functions produce half-curves starting from a fixed point, trigonometric functions produce periodic waves, and exponential functions produce rapid growth or decay curves that stay on one side of the horizontal axis."
    },
  }

  const seoData = {
    title: "Graphs of Functions | Learn Math Class",
    description: "Learn how to graph and analyze functions. Covers the coordinate plane, plotting techniques, intercepts, key features, types of curves, and graph interpretation.",
    keywords: keyWords.join(", "),
    url: "/functions/graphs",
    name: "Graphs of Functions",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "The coordinate plane and how to plot points using ordered pairs",
        "How to read and interpret the graph of a function",
        "Sketching function graphs from equations and tables",
        "Finding x-intercepts, y-intercepts, and key features of graphs",
        "Identifying types of curves produced by different function families",
        "Using graphs to interpret domain, range, symmetry, and end behavior"
      ]
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
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": faqQuestions.q1.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q1.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q2.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q2.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q3.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q3.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q4.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q4.answer }
        },
        {
          "@type": "Question",
          "name": faqQuestions.q5.question,
          "acceptedAnswer": { "@type": "Answer", "text": faqQuestions.q5.answer }
        },
      ]
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Graphs of Functions | Learn Math Class",
        description: "Learn how to graph and analyze functions. Covers the coordinate plane, plotting techniques, intercepts, key features, types of curves, and graph interpretation.",
        keywords: keyWords.join(", "),
        url: "/functions/graphs",
         name: "Graphs of Functions"
      },
       }
    }
   }

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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Graphs of Functions</h1>
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
