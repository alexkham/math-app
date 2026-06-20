// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionTangentLine from '../../../../app/components/calculus/visualizers/FunctionTangentLine'


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
//         url: "/calculus/visual-tools/tangent-line",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Tangent Line</h1>
//    <br/>
//    <FunctionTangentLine/>
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
import FunctionTangentLine from '../../../../app/components/calculus/visualizers/FunctionTangentLine'


export async function getStaticProps(){

  const keyWords = [
    'tangent line',
    'tangent line calculator',
    'tangent line equation',
    'derivative as slope',
    'find tangent line',
    'tangent line at a point',
    'point-slope form',
    'linearization',
    'tangent line visualizer',
    'slope of tangent',
    'tangent to a curve',
    'interactive tangent tool',
    'tangent line formula',
    'horizontal tangent',
    'critical points'
  ]


  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Tangent line** — The straight line that touches $f$ at the single point $P = (c, f(c))$ with the same slope as the curve at that point: slope $= f'(c)$.

**Slope of the tangent** — Equal to the derivative $f'(c)$. This is the geometric meaning of the derivative.

**Point-slope form** — The standard equation: $y - f(c) = f'(c)(x - c)$, or equivalently $y = f(c) + f'(c)(x - c)$.

**Linearization** — Another name for the tangent line equation written as a function: $L(x) = f(c) + f'(c)(x - c)$. It is the best linear approximation of $f$ near $c$.

**Critical point** — A point where $f'(c) = 0$ (horizontal tangent) or where $f'$ is undefined. Candidates for local maxima and minima.

This widget uses the cubic $f(x) = \\frac{1}{3}x^3 - x$, whose derivative is $f'(x) = x^2 - 1$. Horizontal tangents sit at $x = \\pm 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The visualizer shows the cubic $f(x) = \\frac{1}{3}x^3 - x$ with a draggable point $c$ on the x-axis. $P = (c, f(c))$ lifts vertically from $c$ to the curve, and the tangent line through $P$ extends in both directions with slope $f'(c)$.

Drag $c$ left or right to move the point along the x-axis. The dashed drop line, the highlighted $P$, and the tangent line all update in real time, along with the live readouts below the canvas: $c$, $f(c)$, $f'(c)$, and the tangent slope.

For a guided walkthrough, click one of the four scenario buttons at the bottom: Positive slope, Negative slope, Local max, or Local min. Each runs a six-step animation explaining what the tangent at that $c$ tells you about the curve.

The Reset button clears the active scenario and returns $c$ to its default position.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Drag Mode vs Scenario Mode`,
      content: `Two interaction styles share the same canvas.

**Free drag** — Grab the $c$ marker on the x-axis and slide it anywhere in the visible range. The tangent line pivots in real time as the slope $f'(c) = c^2 - 1$ changes. This is the fastest way to feel how the tangent rotates: drag through $c = -1$ or $c = 1$ and watch the tangent flatten exactly at the critical points where $f' = 0$.

**Scenario animation** — Click any of the four scenario buttons to lock $c$ to a specific value and play the six-step explanation. The full color theme of the visualizer changes to match: blue for positive slope, red for negative slope, amber for the local max, teal for the local min.

Starting a scenario interrupts dragging. Once an animation completes, you can still drag $c$ — doing so clears the scenario tint and returns the visualizer to neutral.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Running the Four Scenarios`,
      content: `**Positive slope** sets $c = -1.7$, where $f'(-1.7) = 1.89 > 0$. The tangent line tilts upward to the right, matching the curve&apos;s ascending behavior on the left wing of the cubic.

**Negative slope** sets $c = 0.4$, where $f'(0.4) = -0.84 < 0$. The tangent line tilts downward to the right, matching the curve&apos;s descending behavior across the middle interval between the local max and local min.

**Local max** sets $c = -1$, where $f'(-1) = 0$. The tangent line is horizontal, parallel to the x-axis. Chevron arrows on the curve show the slope flipping from positive on the left to negative on the right — the signature of a local maximum.

**Local min** sets $c = 1$, where $f'(1) = 0$. The tangent line is horizontal. Chevron arrows show the slope flipping from negative on the left to positive on the right — the signature of a local minimum.

Each scenario takes a few seconds across the six animation phases.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Following the 6-Step Animation`,
      content: `Each scenario plays the same six phases, labeled in a banner at the top of the canvas:

Step 1 — Identify the region near $c$. A shaded band highlights the interval the analysis covers.

Step 2 — Mark the point $c$ on the x-axis. The marker animates into position from wherever it was previously.

Step 3 — Lift to the curve: $P = (c, f(c))$. A dashed drop line connects $c$ on the axis to $P$ on the curve.

Step 4 — Evaluate the slope $f'(c)$. The Computation tab highlights the substitution $f'(c) = c^2 - 1$.

Step 5 — Draw the tangent through $P$ with slope $f'(c)$. The tangent line extends outward from $P$, and a floating label shows the numerical slope value.

Step 6 — Write the tangent equation: $y = f(c) + f'(c)(x - c)$. The Computation tab displays the equation with the numerical values substituted in.

When the animation finishes, the right-side panel switches automatically to the Meaning tab.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Using the Computation Tab`,
      content: `The Computation tab walks through the tangent line construction algebraically, with the active step highlighted in the scenario color.

**The point of tangency** — Shows the current values of $c$ and $f(c)$. These are the coordinates of $P$.

**Step 1 — Slope from the derivative** — Substitutes $c$ into $f'(x) = x^2 - 1$ to give the numerical slope $f'(c)$. The colored result is the slope of the tangent.

**Step 2 — Point-slope form** — Plugs $c$, $f(c)$, and $f'(c)$ into the formula $y - f(c) = f'(c)(x - c)$. The expanded slope-intercept form $y = mx + b$ is shown directly below, with $b$ computed from $f(c) - f'(c) \\cdot c$.

You can switch to Computation at any time during free drag — the displayed equation always reflects the current $c$, so it updates as you move the marker.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Using the Meaning and Theory Tabs`,
      content: `**Meaning** explains what the current tangent reveals about the curve, with a verdict card themed to the active scenario. Positive and negative slope cards describe the curve&apos;s direction at $c$; max and min cards highlight the horizontal tangent and the connection to Fermat&apos;s theorem. A "why" note adds context — for example, clarifying that a horizontal tangent alone is necessary but not sufficient for a maximum or minimum. The Meaning tab opens automatically when a scenario animation finishes.

**Theory** provides the formal background in five blocks: the definition of the tangent line and its point-slope equation, the derivative as the slope of the tangent, the tangent as the best linear approximation (linearization), horizontal tangents and critical points (including Fermat&apos;s theorem), and a worked breakdown of how the slope $f'(c) = c^2 - 1$ behaves across the specific cubic used in this widget.

Switch tabs at any time without interrupting the canvas.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Tangent Line?`,
      content: `A **tangent line** to a function $f$ at $x = c$ is the unique straight line that passes through $P = (c, f(c))$ and matches the curve&apos;s direction at $P$. "Matches the direction" is made precise by the slope: the tangent has slope equal to $f'(c)$, the derivative of $f$ evaluated at $c$.

The defining equation in point-slope form is:

$y - f(c) = f'(c)(x - c)$

Or equivalently:

$y = f(c) + f'(c)(x - c)$

This is the **best linear approximation** of $f$ near $c$. Any other line through $P$ would diverge from $f$ faster as $x$ moves away from $c$, because it would have the wrong slope. The tangent shares both the value and the first derivative of $f$ at $c$.

For a deeper treatment with proofs and worked examples, see the **tangent line theory page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Derivative as Slope and the Point-Slope Form`,
      content: `The derivative $f'(c)$ is **defined geometrically** as the slope of the tangent line at $c$. Algebraically, it is the limit of secant slopes:

$f'(c) = \\lim_{h \\to 0} \\frac{f(c+h) - f(c)}{h}$

Each secant is a chord of $f$ passing through $(c, f(c))$ and a nearby point $(c+h, f(c+h))$. As $h$ shrinks toward zero, those secants rotate toward a single limiting line — the tangent at $c$. Its slope is $f'(c)$.

To **write the tangent equation**, you only need two pieces of information: a point on the line and its slope. The point is $(c, f(c))$, the slope is $f'(c)$, and point-slope form is the standard way to combine them:

$y - f(c) = f'(c)(x - c)$

The same line can also be written as the **linearization** $L(x) = f(c) + f'(c)(x - c)$ — a useful viewpoint for approximation and Taylor series.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Horizontal Tangents and Critical Points`,
      content: `When $f'(c) = 0$, the tangent line at $c$ is **horizontal**. Such a point is called a **critical point** of $f$.

Critical points are candidates for local maxima and local minima. **Fermat&apos;s theorem** guarantees the connection in the other direction: if $f$ has a local extremum at an interior point $c$ where $f'$ exists, then $f'(c) = 0$. So every smooth interior extremum has a horizontal tangent.

The reverse is not automatic. A horizontal tangent alone only says that the curve is momentarily flat at $c$. It might be a local maximum, a local minimum, or an inflection point with a flat tangent. Examples:

- $f(x) = -x^2$ has a horizontal tangent at $0$, and it is a local maximum
- $f(x) = x^2$ has a horizontal tangent at $0$, and it is a local minimum
- $f(x) = x^3$ has a horizontal tangent at $0$, but no extremum — $0$ is an inflection point with a flat tangent

To classify a critical point, examine the sign change of $f'$ across $c$ or use the second derivative test. See the **critical points page** for the full procedure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Derivative** — The fundamental operation: rate of change of $f$ at a point, defined as the limit of secant slopes.

**Average rate of change** — The slope of a secant line over an interval; the discrete cousin of $f'(c)$.

**Linearization** — The tangent line viewed as a function $L(x) = f(c) + f'(c)(x - c)$, used for approximation.

**Critical points** — Where $f'(c) = 0$ or is undefined; the starting set for finding extrema.

**First derivative test** — Sign analysis of $f'$ to classify critical points as maxima, minima, or neither.

**Inflection points** — Points where the second derivative changes sign and the tangent crosses the curve.

**Newton&apos;s method** — Numerical root-finding algorithm that iteratively follows tangent lines back to the x-axis.

**Taylor series** — Higher-order generalization of linearization, using all derivatives at $c$.`,
      before: ``,
      after: ``,
      link: '',
    },

    // obj11–obj15 left for future expansion
    // obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    // obj15: { title: ``, content: ``, before: ``, after: ``, link: '' },

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is a tangent line?",
      answer: "A tangent line to a function f at the point where x equals c is the unique line that passes through the point P with coordinates (c, f(c)) and has slope f-prime of c. It touches the curve at P and matches the curve's direction there, giving the best straight-line approximation of f near c."
    },
    obj2: {
      question: "How do you find the equation of a tangent line?",
      answer: "Compute f(c) for the y-coordinate of the point of tangency. Then compute the derivative f-prime of c for the slope. Plug both into point-slope form: y minus f(c) equals f-prime of c times the quantity x minus c. Rearrange to slope-intercept form if needed."
    },
    obj3: {
      question: "What is the slope of the tangent line at a point?",
      answer: "The slope of the tangent line at x equals c is exactly f-prime of c, the derivative of f evaluated at c. This is the geometric meaning of the derivative: the rate of change of f at the single point c, equal to the slope of the line that best fits the curve there."
    },
    obj4: {
      question: "What does a horizontal tangent line mean?",
      answer: "A horizontal tangent line means the slope is zero, which means f-prime of c equals zero. The point c is then called a critical point. It is a candidate for a local maximum, a local minimum, or an inflection point with a flat tangent. The first or second derivative test classifies which one."
    },
    obj5: {
      question: "How is the tangent line related to the derivative?",
      answer: "The derivative f-prime of c is defined as the limit of the slopes of secant lines as the second point slides into c. Geometrically, the secant lines rotate toward a single limiting line — that line is the tangent, and its slope is f-prime of c. So the derivative literally is the slope of the tangent."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Tangent Line Visualizer at a Point",
      "description": "Drag c on f(x) = (1/3)x^3 - x to see the tangent line and equation y = f(c) + f'(c)(x - c). Positive, negative, max, and min slopes animate step by step.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/tangent-line",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable point c on the x-axis with live readouts of c, f(c), f-prime(c), and the tangent slope",
        "Four animated scenarios — Positive slope, Negative slope, Local max, and Local min — each running a six-step sequence from region selection to the tangent equation",
        "Color-coded tangent line and floating slope label that update in real time as c moves",
        "Computation panel showing the step-by-step derivation of the tangent equation, from f-prime(c) = c^2 - 1 through point-slope form to slope-intercept form",
        "Meaning panel with scenario-specific verdict cards, color-themed for positive (blue), negative (red), max (amber), and min (teal) slopes",
        "Theory panel covering the formal definition, the derivative as slope, linearization, and Fermat's theorem on horizontal tangents at critical points",
        "Direction-arrow overlay on max and min scenarios showing the slope sign change across the local extremum"
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
          "name": "Calculus",
          "item": "https://www.learnmathclass.com/calculus"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/calculus/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Tangent Line",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/tangent-line"
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
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         seoData: {
           title: "Tangent Line Visualizer & Equation | Learn Math Class",
           description: "Drag c on f(x) = (1/3)x^3 - x to see the tangent line and equation y = f(c) + f'(c)(x - c). Positive, negative, max, and min slopes animate step by step.",
           keywords: keyWords.join(", "),
           url: "/calculus/visual-tools/tangent-line",
           name: "Tangent Line Visualizer at a Point",
           hubDescription: "Drag point c along the cubic f(x) = (1/3)x^3 - x to see the tangent line drawn through P = (c, f(c)) with slope f'(c). Four pre-built scenarios animate the six analysis steps for positive slopes, negative slopes, local maxima, and local minima, then write the tangent in point-slope form.",
           category: "Calculus",
           subCategory: "Derivatives"
         }
       }
    }
   }

export default function TangentLineVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
    // obj11–obj15 slots reserved for future expansion
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
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.webApplication)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Tangent Line</h1>
   <br/>
  <div style={{transform:'scale(0.9)',width:'80%',margin:'auto'}}>
   <FunctionTangentLine/>
   </div>
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
          //  "#f2f2f2"
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