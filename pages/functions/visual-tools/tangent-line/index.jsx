// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import TangentLine from '../../../../app/components/functions/tangent/TangentLine'

// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
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


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/functions/visual-tools/tangent-line",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Tangent Line Visualizer</h1>
//    <br/>
//    <TangentLine/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import TangentLine from '../../../../app/components/functions/tangent/TangentLine'

export async function getStaticProps(){

  const keyWords = [
    'tangent line visualizer',
    'tangent line at a point',
    'derivative visualizer',
    'point-slope form tangent',
    'slope-intercept form tangent',
    'tangent line equation',
    'instantaneous rate of change',
    'tangent line calculator',
    'secant to tangent',
    'critical point visualizer',
    'interactive derivative',
    'tangent of function',
    'visualize derivative',
    'f prime x slope',
    'tangent line undefined corner vertical',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with ten base function families. In the center sits the **plot panel**, with the chosen function $f(x)$ drawn in blue and its **tangent line** at the chosen point drawn in amber. On the right is the **info panel** with two tabs — a live explanation of the current state and a general theory tab about tangents.

Below the plot, the centerpiece of the tool is the **tangent point card**: an amber-bordered block containing the $x_0$ slider, the current values of $x_0$, $y_0$, and slope $m$, and the tangent equation written in both point-slope and slope-intercept forms.

The page launches with the quadratic family and $x_0 = 1$. Drag the $x_0$ slider and the tangent line slides along the curve in real time, the equations recalculate, and the info panel updates with the new slope and intercept.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Base Function`,
      content: `The picker on the left lists ten base functions, with sine and cosine grouped under "Trigonometric". Each entry shows a small shape glyph and the family name:

• Polynomial: **Identity** ($x$), **Linear (2x)**, **Quadratic** ($x^2$), **Cubic** ($x^3$)
• Algebraic: **Reciprocal** ($1/x$), **Square root** ($\\sqrt{x}$), **Absolute** ($|x|$)
• Transcendental: **Exponential** ($e^x$), **Logarithmic** ($\\ln x$)
• Trigonometric: **Sine**, **Cosine**

Click any entry to switch. The transformation parameters $a$, $k$, $b$, $h$ reset to defaults and $x_0$ returns to its default value, so you always start each family from a clean slate. The picker covers the most pedagogically important functions for studying derivatives — including deliberately tricky ones (absolute value's corner, square root's vertical tangent) that demonstrate when the tangent fails to exist.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Transforming the Base Function`,
      content: `Below the function picker, four sliders apply the standard affine transformations to the chosen base $f(x)$:

• **$a$ — vertical scale** (stretches, compresses, or reflects across the $x$-axis)
• **$k$ — vertical shift**
• **$b$ — horizontal scale**
• **$h$ — horizontal shift**

The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. Its derivative — and therefore the slope $m$ of the tangent at any $x_0$ — follows the chain rule: $g'(x) = a \\cdot b \\cdot f'(b(x - h))$.

Transformations are most useful here for two reasons. First, they let you keep the same function family while moving features around — drag the parabola's vertex to wherever you want it, then study tangents near that vertex. Second, they let you build a function whose tangent at the default $x_0 = 1$ is something specific you want to see.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Dragging $x_0$ — the Tangent Point`,
      content: `The $x_0$ slider lives at the top of the **tangent point card** below the plot, and it is the tool's primary interaction. Drag it to move the point of tangency along the curve from $-10$ to $+10$.

As you drag, four things change at once in real time:

• The point of tangency slides along the blue curve
• The amber tangent line pivots to match the new slope
• The tangent equations rewrite themselves with the new $x_0$, $y_0$, and $m$
• The info panel's "Explanation" tab updates with the new numerical values

A green "**critical point**" badge appears next to the function name whenever the slope $m$ is effectively zero — flagging local extrema as you sweep across them. A red "**tangent undefined**" badge appears whenever $x_0$ lands at a corner, vertical tangent, or outside the function's domain.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Tangent Equation Card`,
      content: `The lower half of the tangent point card displays the tangent line in two equivalent forms:

$$\\text{Point-slope:} \\quad y = m(x - x_0) + y_0$$

$$\\text{Slope-intercept:} \\quad y = mx + (y_0 - m \\cdot x_0)$$

Both forms are computed automatically from the current $x_0$, $y_0$, and $m$. Point-slope form makes the connection to the derivative obvious: this is the line through $(x_0, y_0)$ with slope $f'(x_0)$. Slope-intercept form is what you would simplify to in a homework problem and what graphing software typically expects.

The slope $m$ appears in the card header, and special cases are handled cleanly. When $m = 0$, both forms collapse to $y = y_0$ — the horizontal tangent at a critical point. When $x_0 = 0$, the parenthesized $(x - x_0)$ in point-slope form simplifies to just $x$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Applied Chip Strip and Visibility Toggles`,
      content: `Below the tangent equation card sit two horizontal strips.

The **Applied** strip shows seven chips: four for the transformation parameters $a$, $k$, $b$, $h$, and three for the tangent-specific values $x_0$, $y_0$, $m$. Active (non-default) parameters glow blue; the tangent values are color-coded amber for the $x$-axis quantities and blue for $y_0$. The chip strip is a scannable summary of the entire current state — useful for screenshots, classroom display, and step-back verification when sliders have been dragged far from defaults.

The **Show** strip below has two toggle buttons, one each for the function $f$ and the tangent line. Click a button to hide that curve from the plot. Hiding $f$ leaves the tangent line alone in the plot window, useful for verifying that the equation in the card is in fact the line drawn. Hiding the tangent leaves only the function, useful for cleanly observing where you want to place $x_0$ next.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Info Panel`,
      content: `The side info panel has two tabs:

• **Explanation** — reads the current state. Shows the symbolic forms of $f(x)$ and $f'(x)$, the numerical values of $x_0$, $y_0$, $m$, and the $y$-intercept of the tangent, and renders the tangent equation in both forms. When $x_0$ is at a critical point ($m \\approx 0$), an extra note explains that this is a candidate for a local extremum. When the tangent is undefined, a different note explains why and suggests sliding $x_0$ to a smooth part of the curve.

• **Concepts** — general theory of tangent lines independent of the current state. Covers the secant-to-tangent limit definition, the relationship between the slope of the tangent and the derivative, the two equivalent forms of the equation, and the three ways the tangent can fail to exist (corners, vertical tangents, points outside the domain).

The Explanation tab is the right place to look when you want to know *what is happening right now*; the Concepts tab is the right place for *why it works that way in general*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What the Tangent Line Is`,
      content: `At any smooth point on a curve, the **tangent line** is the unique straight line that touches the curve at that point and matches its direction. Its slope is the function's **instantaneous rate of change** at that point — the **derivative** $f'(x_0)$.

The tangent emerges as the limit of **secant lines**. Pick two points on the curve, $(x_0, f(x_0))$ and $(x_0 + \\Delta x, f(x_0 + \\Delta x))$. The line through them has slope

$$\\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

As $\\Delta x \\to 0$ the second point slides into the first and the secant rotates into the tangent. Its slope becomes

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$

This is the definition of the derivative. Every tangent line you see in the visualizer is the geometric realization of this limit at the chosen $x_0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `When the Tangent Fails to Exist`,
      content: `Not every point on every curve has a tangent. The visualizer flags three failure modes with a red "tangent undefined" badge:

• **Corners** — the absolute value function $|x|$ at $x = 0$ has a sharp V; the slope jumps from $-1$ to $+1$ with no single line that fits both sides. The left and right derivatives exist but disagree.
• **Vertical tangents** — the square root function $\\sqrt{x}$ at $x = 0$ has a tangent whose slope is infinite. A vertical line cannot be written in the form $y = mx + b$, so the equation forms break down even though the geometric line exists.
• **Outside the domain** — the logarithm $\\ln x$ has no values at $x \\leq 0$, so there is no curve there to be tangent to. The reciprocal $1/x$ similarly has no value at $x = 0$.

In all three cases the derivative does not exist at the affected point. Sliding $x_0$ across one of these points lets you watch the badge appear and the equation card reset — a concrete tour of the differentiability failures discussed in introductory calculus.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Derivative** — the function $f'(x)$ whose value at any $x$ equals the slope of the tangent at that point. The tangent line at $x_0$ is the geometric realization of $f'(x_0)$.

**Secant Line** — the line through two distinct points on the curve; the tangent emerges as the secant's limit as the two points merge.

**Critical Points** — points where the derivative is zero or undefined; candidates for local maxima, minima, and saddle points.

**Differentiability** — the property of having a well-defined derivative at a point. The visualizer's three "tangent undefined" cases are the three standard failures.

**Linear Approximation** — using the tangent line as a substitute for the function near $x_0$, the basis of Newton's method and Taylor series.

**Function Transformations** — the companion visualizer for $a$, $k$, $b$, $h$ alone, without the tangent overlay.

**Functions Families Gallery** — companion gallery of the same base functions seen here, useful as a prerequisite for understanding what each family looks like before studying its tangents.

**Inverse Functions** — reflecting a graph across $y = x$; tangent lines of inverse functions are related by reciprocal slopes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: { title:``, content:``, before:``, after:``, link:'' },
    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Tangent Line Visualizer do?",
      answer: "It draws the tangent line to any function at any chosen x value. Pick a base function from ten families, optionally transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, then drag the x₀ slider to move the point of tangency. The tangent line follows in real time and its equation appears in both point-slope and slope-intercept forms below the plot."
    },
    obj2: {
      question: "What are the two forms of the tangent line equation?",
      answer: "Point-slope form is y = m(x − x₀) + y₀, where m is the slope, x₀ and y₀ are the coordinates of the point of tangency. Slope-intercept form is y = mx + b where b is the y-intercept y₀ − m·x₀. Both describe the same line; point-slope makes the construction obvious while slope-intercept is the canonical simplified form."
    },
    obj3: {
      question: "How is the slope of the tangent related to the derivative?",
      answer: "They are the same thing. The slope of the tangent line to f at x₀ is by definition the value of the derivative f'(x₀). The visualizer computes the slope directly from the symbolic derivative of the transformed function and shows it as m in the tangent point card."
    },
    obj4: {
      question: "Why does the visualizer say tangent undefined sometimes?",
      answer: "Three situations produce no well-defined tangent: corners like the absolute value at x = 0 where the slope jumps discontinuously; vertical tangents like the square root at x = 0 where the slope is infinite; and points outside the domain like the logarithm at x ≤ 0 where the function itself has no value. In all three cases the derivative does not exist and the equation forms break down."
    },
    obj5: {
      question: "What is a critical point?",
      answer: "A critical point is an x value where the derivative is zero or undefined. The visualizer flags zero-slope points with a green badge as you slide x₀ across local maxima or minima of the curve. Critical points are the candidate locations for local extrema, and identifying them is the first step in optimization problems."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Tangent Line Visualizer",
      "description": "Interactive tangent line visualizer. Pick a function, transform it, and drag the point of tangency to see the tangent line and its equation update in real time.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/tangent-line",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Ten base functions including identity, polynomial, reciprocal, exponential, logarithmic, square root, absolute value, sine, and cosine",
        "Affine transformation sliders for vertical scale, vertical shift, horizontal scale, and horizontal shift",
        "Draggable x₀ slider that moves the point of tangency along the curve in real time",
        "Tangent line equation displayed in both point-slope and slope-intercept forms",
        "Live readouts of x₀, y₀, slope m, and y-intercept",
        "Critical point badge that highlights candidate extrema as you sweep x₀",
        "Tangent undefined badge for corners, vertical tangents, and points outside the domain",
        "Side info panel with state-specific explanation tab and general theory concepts tab"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/functions/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Tangent Line Visualizer",
          "item": "https://www.learnmathclass.com/functions/visual-tools/tangent-line"
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


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Tangent Line Visualizer | Derivative & Slope at a Point",
        description: "Visualize the tangent line to any function at any x₀. Drag the tangent point, transform the function, and read both forms of the tangent equation in real time.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/tangent-line",
        name: "Tangent Line Visualizer",
        hubDescription: "Drag the x₀ slider and watch the tangent line follow the curve in real time. Pick a base function — linear, quadratic, cubic, reciprocal, exponential, logarithmic, square root, absolute, sine, cosine — apply affine transformations, and read both the point-slope and slope-intercept forms of the tangent equation alongside the slope m = f'(x₀). Critical points and undefined-tangent failures are flagged automatically.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function TangentLineVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  ]

  return (
    <>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Tangent Line Visualizer</h1>
      <br/>
      <TangentLine/>
      <br/>
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br/>
      <br/>
      <br/>
      {/* <IntroSection
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}