// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionDerivativeLocal from '../../../../app/components/calculus/visualizers/FunctionDerivativeLocal'


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
//         url: "/calculus/visual-tools/average-rate-of-change",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Average Rate of Change</h1>
//    <br/>
//    <div style={{transform:'scale(0.95)',width:'80%',margin:'auto'}}>
//    <FunctionDerivativeLocal explanations={explanations}/>
//    </div>
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
import FunctionDerivativeLocal from '../../../../app/components/calculus/visualizers/FunctionDerivativeLocal'
import functionDerivativeLocalDiagrams from '../../../../app/components/calculus/visualizers/functionDerivativeLocalDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'average rate of change calculator',
    'average rate of change visualizer',
    'secant slope interactive',
    'secant to tangent visualizer',
    'derivative as limit visual',
    'average rate of change formula',
    'instantaneous rate of change',
    'derivative visualizer',
    'local max min derivative',
    "Fermat's theorem visualization",
    'delta y over delta x',
    'slope of secant line',
    'interactive calculus tool',
    'derivative geometric meaning',
    'calculus visual tools'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Average rate of change** — the slope of the line through two points on a function's graph, measuring how much the output changes per unit of input across an interval.

**Secant line** — the straight line that passes through two distinct points on a curve. Its slope equals the average rate of change between those points.

**$\\Delta x$** — the change in the input, computed as $x_2 - x_1$.

**$\\Delta y$** — the change in the output, computed as $f(x_2) - f(x_1)$.

**Derivative** — the instantaneous rate of change at a single point, defined as the limit of the average rate of change as $\\Delta x \\to 0$.

**Local maximum / minimum** — an interior point where the function reaches a peak or valley relative to nearby values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `The visualizer shows the cubic function $f(x) = \\frac{1}{3}x^3 - x$ together with two sample points labeled $P_1$ and $P_2$. The straight line connecting them is the **secant line**, and its slope is the average rate of change between the two points.

The interface is split into two parts. The left panel holds the graph, four scenario buttons, and a row of numeric readouts. The right panel is a tabbed sidebar with three views: **Computation**, **Meaning**, and **Theory**.

There are two ways to drive the tool:

- **Drag** $P_1$ or $P_2$ along the curve to place them anywhere you like. The slope, $\\Delta x$, and $\\Delta y$ all update in real time.
- **Pick a scenario** to play a guided animation that moves the points into a textbook configuration and walks through every measurement step by step.

Use dragging to explore freely; use scenarios to learn what each configuration is telling you.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Choosing Among the Four Scenarios`,
      content: `Four buttons sit below the graph, each tied to a color theme and a short narrated animation.

- **Ascending** (blue) — places both points on the left wing where the curve is climbing. The secant slope comes out positive.
- **Descending** (red) — places the points on either side of the middle interval where the curve is falling. The slope is negative.
- **Local max** (amber) — straddles the peak at $x = -1$. The animation continues with two extra **tighten** steps that bring the points together symmetrically, shrinking the slope toward zero.
- **Local min** (teal) — does the same around the valley at $x = 1$, with the slope approaching zero from the other side.

Click **Reset** to clear the scenario and return $P_1$ and $P_2$ to their default positions for free dragging. While an animation is running, dragging is temporarily disabled so the scripted sequence can play out without interference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Computation Tab`,
      content: `The Computation tab breaks the slope calculation into three highlighted sections that light up as the animation reaches them.

- **The two points** — shows the coordinates $(x_1, f(x_1))$ and $(x_2, f(x_2))$ for the current positions of $P_1$ and $P_2$.
- **Step 1 — horizontal and vertical change** — computes $\\Delta x = x_2 - x_1$ and $\\Delta y = f(x_2) - f(x_1)$ with the actual numbers substituted in.
- **Step 2 — average rate of change** — divides $\\Delta y$ by $\\Delta x$ to produce the secant slope $m = \\Delta y / \\Delta x$.

Each formula box dims while its quantity has not yet been revealed in the animation, so the panel mirrors the geometry on the canvas. Drag the points freely and all three blocks recalculate continuously, giving a live numeric companion to the visual.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Meaning and Theory Tabs`,
      content: `The **Meaning** tab opens automatically once an animation finishes. It shows a colored verdict card that names the configuration — ascending, descending, local maximum, or local minimum — and explains what the sign of the slope says about the function on that interval. A second card underneath gives the deeper reason: why the sign tells you about monotonicity, or why a zero slope at a peak is necessary but not sufficient on its own.

The **Theory** tab is always available and holds four reference blocks:

- **Definition** — the formal limit definition of the derivative.
- **Sign and monotonicity** — the connection between the sign of $f'$ and whether the function is increasing or decreasing.
- **Fermat's theorem** — why smooth local extrema force $f'(c) = 0$.
- **On this function** — what each of these statements looks like for the specific cubic shown.

Use Meaning for interpretation of the current scenario; use Theory for the underlying rules that apply to any differentiable function.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Tips for Exploring the Curve`,
      content: `A few patterns are worth trying once you have the controls in hand.

- **Sweep through the interval** — keep $P_1$ at a fixed position and slide $P_2$ across the curve. Watch the slope readout flip sign as $P_2$ crosses the local max and local min.
- **Shrink the interval manually** — place $P_1$ and $P_2$ very close to each other near $x = -1$. The slope approaches zero, mirroring what the tighten animation does automatically.
- **Compare equal intervals** — put both points on the left wing, then on the right wing. Both readings are positive, but the magnitudes differ because the curve steepens away from the origin.
- **Cross the inflection** — straddle $x = 0$ symmetrically. Over $[-a, a]$ the average rate works out to $\frac{a^2}{3} - 1$, so it is always negative and climbs toward $-1$ as the interval shrinks. The Descending scenario uses $a = 0.55$ and reads $-0.90$.

The bottom-of-graph readouts and the formulas in the Computation tab stay synchronized, so any drag is immediately reflected in the arithmetic.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `What is the Average Rate of Change?`,
      content: `The **average rate of change** of a function $f$ over an interval $[x_1, x_2]$ is the slope of the secant line joining the points $(x_1, f(x_1))$ and $(x_2, f(x_2))$. It measures, on average, how many units the output gains or loses for each unit gained in the input.

The formula is:

$$\\text{Average rate of change} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$

Geometrically, this is rise over run — exactly the slope formula from algebra applied to two points selected on the curve. It is the discrete, interval-based counterpart of the derivative, which deals with an infinitesimal interval.

For deeper coverage of slopes, see the **slope theory page**, and for the move from intervals to instants, see the **derivative as a limit page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `From Secant Slope to Derivative`,
      content: `Holding $P_1$ fixed at a point $c$ and sliding $P_2$ toward it makes the interval $\\Delta x$ shrink. The secant line connecting the two points rotates as it shrinks, and in the limit it becomes the **tangent line** at $c$. The slope of that tangent line is the value of the derivative $f'(c)$.

The formal statement is the limit definition of the derivative:

$$f'(c) = \\lim_{\\Delta x \\to 0} \\frac{f(c + \\Delta x) - f(c)}{\\Delta x}$$

So the derivative is the average rate of change over a vanishing interval — an instantaneous rate. The Local max and Local min scenarios visualize this collapse directly: the slope readout falls toward zero as the two points squeeze together around the extremum.

For the full treatment see the **derivative theory page** and the **limit definition page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Sign of the Derivative and Monotonicity`,
      content: `On any interval where $f$ is differentiable, the sign of $f'$ controls whether $f$ is increasing or decreasing.

- If $f'(x) > 0$ for every $x$ in the interval, then $f$ is **strictly increasing** there.
- If $f'(x) < 0$ for every $x$ in the interval, then $f$ is **strictly decreasing** there.

For the cubic in the visualizer, $f'(x) = x^2 - 1$. This is positive when $|x| > 1$ and negative when $|x| < 1$, which is exactly what the Ascending and Descending scenarios are showcasing: the left and right wings climb, and the middle section falls.

This connection is the practical engine of curve sketching — the sign chart of $f'$ tells you the monotonicity intervals of $f$. For the rigorous statement and proof, see the **monotonicity theorem page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Local Extrema and Fermat's Theorem`,
      content: `**Fermat's theorem** states that if $f$ has a local maximum or local minimum at an interior point $c$ and $f'(c)$ exists, then $f'(c) = 0$. Points where the derivative is zero or undefined are called **critical points**.

The intuition matches what the Local max and Local min scenarios animate: just before a peak the function is rising, just after it the function is falling, and a continuous slope must pass through zero in between. The same argument with the signs reversed applies to a valley.

A zero derivative on its own does not guarantee an extremum — it only certifies a horizontal tangent. To confirm a maximum or minimum, check that $f'$ actually changes sign at $c$ (the **first derivative test**) or that $f''(c)$ has the right sign (the **second derivative test**).

For deeper coverage, see the **critical points page** and the **extrema classification page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Related concepts:**

- **Slope formula** — the algebraic origin of the average rate of change.
- **Derivative** — the limit of the average rate of change as the interval shrinks to a single point.
- **Tangent line** — the limiting position of the secant line as the two points coincide.
- **Monotonicity** — the property of being increasing or decreasing, controlled by the sign of $f'$.
- **Critical points** — points where the derivative is zero or undefined, the candidates for local extrema.
- **Mean value theorem** — guarantees that on a closed interval the derivative somewhere equals the average rate of change.

**Related tools:**

- **Function derivative visualizer** — explore the derivative as a function in its own right.
- **Tangent line visualizer** — see the tangent line rotate as the point of tangency moves.
- **Limit visualizer** — watch a quantity approach a limit from both sides.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Ascending: a Positive Average Rate`,
      content: `The Ascending scenario puts $P_1$ at $x = -2.05$ and $P_2$ at $x = -1.35$, both on the left wing where the cubic is climbing. The two coordinates are $f(-2.05) = -0.8217$ and $f(-1.35) = 0.5299$, so

$\text{slope} = \frac{0.5299 - (-0.8217)}{-1.35 - (-2.05)} = \frac{1.3516}{0.70} = 1.93$

A positive average rate, and the chevrons along the shaded band all point uphill to confirm it.`,
      before: ``,
      after: `The number $1.93$ is not the derivative at any particular point — it is the *average* over the whole interval. Compare it with the two endpoint derivatives, $f'(-2.05) = 3.20$ and $f'(-1.35) = 0.82$: the average sits between them, as the mean value theorem promises it must.

That is the honest reading of any secant slope. It reports the net change per unit of $x$ across the interval and says nothing about what happened inside. Shrink the interval and the average converges on a single instantaneous rate, which is the move traced in [from secant slope to derivative](!#from-secant-to-derivative).`,
      link: '',
    },
    obj12: {
      title: `Descending: a Negative Average Rate`,
      content: `The Descending scenario straddles the middle interval symmetrically, $P_1$ at $x = -0.55$ and $P_2$ at $x = 0.55$. Because $f$ is an odd function the two heights are exact opposites, $f(-0.55) = 0.4945$ and $f(0.55) = -0.4945$, so

$\text{slope} = \frac{-0.4945 - 0.4945}{1.10} = \frac{-0.9891}{1.10} = -0.90$

The chevrons run downhill through the whole band, matching the sign.`,
      before: ``,
      after: `On $(-1, 1)$ the derivative $f'(x) = x^2 - 1$ is negative everywhere, so every secant drawn inside that interval comes out negative too. There is no way to pick two points in this band and get a rising average.

This scenario also gives the cleanest view of the symmetric case: over $[-a, a]$ the average rate is exactly $\frac{a^2}{3} - 1$. At $a = 0.55$ that is $-0.90$, the value on screen; as $a$ shrinks the reading climbs toward $-1$, which is $f'(0)$.`,
      link: '',
    },
    obj13: {
      title: `Closing In on the Local Maximum`,
      content: `The Local max scenario starts wide, with $P_1$ at $-1.45$ and $P_2$ at $-0.55$ straddling the peak at $x = -1$, then plays two extra tighten steps that pull the points inward symmetrically. The slope readout collapses as it goes:

- $[-1.45,\ -0.55]$ — slope $0.0675$
- $[-1.25,\ -0.75]$ — slope $0.0208$
- $[-1.08,\ -0.92]$ — slope $0.0021$

The frozen picture below is the last of the three, where the two points sit almost on top of each other and the secant has flattened to nearly horizontal.`,
      before: ``,
      after: `Each tightening cuts the slope by roughly a factor of ten, and the limit is $f'(-1) = 0$. That is the derivative being constructed in front of you: not defined at a point out of nowhere, but reached as the limit of averages over ever-shorter intervals.

The chevrons explain why the slope has to vanish. They point uphill to the left of $-1$ and downhill to the right, so a symmetric interval collects a rise and a matching fall that very nearly cancel. What is left over is second-order small, which is why the numbers fall so much faster than the interval width does.`,
      link: '',
    },
    obj14: {
      title: `Closing In on the Local Minimum`,
      content: `The Local min scenario is the same procedure around the valley at $x = 1$: start at $[0.55,\ 1.45]$, then tighten to $[0.75,\ 1.25]$ and $[0.92,\ 1.08]$.

Because $f$ is odd and the intervals are mirror images, the slopes are identical to the maximum case — $0.0675$, then $0.0208$, then $0.0021$ — heading for $f'(1) = 0$.`,
      before: ``,
      after: `The chevrons are the part that differs. Here they point downhill on the approach and uphill on the way out, so the sign change runs negative → positive. That ordering is the whole difference between a valley and a peak; the vanishing slope on its own cannot tell them apart, as [Fermat's theorem](!#extrema-and-fermats-theorem) makes precise.

Both extrema also demonstrate the limitation of a single secant reading. A slope of $0.0021$ would look like "barely rising" if you did not know where the points were, when in fact the curve falls and then rises across the interval. Average rates hide everything that happens between their endpoints.`,
      link: '',
    },
    obj15: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    }

  }



  /* ---- frozen-state demonstration units (Line 1) ---- */
  const stateUnits = {
    idle: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.idle,
      caption: 'Free drag, frozen at the default pair',
      text: 'No scenario running: P1 at x = -1.40 and P2 at x = -0.40, the positions Reset returns to. ' +
        'The secant reads m = -0.11 - very slightly falling, because the interval straddles the peak unevenly.',
    }),
    asc: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.asc,
      caption: 'Ascending, frozen at the end of the run',
      text: 'Both points on the rising left wing, &#916;x = 0.70 and &#916;y = 1.35, so the secant slope is ' +
        '+1.93. Every chevron in the shaded band points the same way the secant does.',
    }),
    desc: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.desc,
      caption: 'Descending, frozen at the end of the run',
      text: 'A symmetric interval about the origin: &#916;y = -0.99 over &#916;x = 1.10 gives -0.90. ' +
        'The band covers (-1, 1), where the derivative is negative at every single point.',
    }),
    max: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.max,
      caption: 'Local max, frozen after both tighten steps',
      text: 'The final pair, [-1.08, -0.92]. The points have closed to within 0.16 of each other and the ' +
        'secant has flattened to m = 0.00 - the limit being f&prime;(-1) = 0.',
    }),
    min: demoUnitFrame({
      svg: functionDerivativeLocalDiagrams.min,
      caption: 'Local min, frozen after both tighten steps',
      text: 'The mirror image at [0.92, 1.08], with the same flattened secant. The chevrons reverse: down ' +
        'on the approach, up on the way out.',
    }),
  }


  /* ---- panel explanations, hoisted out of the component (Line 1) ----
     Shape follows FunctionDerivativeLocal's own override contract:
     meaning.{asc|desc|max|min}.{badge|title|text|notePill|note}, raw HTML
     (rendered through dangerouslySetInnerHTML, so anchors are <a href="#slug">).
     Free dragging has no entry of its own - the component classifies the live
     slope into one of these four. Anything omitted keeps the built-in default. */
  const STR = (t) => `<strong style="color:var(--scDeep)">${t}</strong>`
  const MORE = (slug, label) =>
    ` <a href="#${slug}" style="color:var(--scDeep);font-weight:600">Learn more about ${label}</a>` +
    ` &middot; <a href="#the-four-scenarios" style="color:var(--scDeep);font-weight:600">the four scenarios</a>`

  const explanations = {
    meaning: {
      asc: {
        note: `For this f, the left wing (x &lt; −1) and right wing (x &gt; 1) are both ascending. ` +
          `There, ${STR('f&apos;(x) = x² − 1 &gt; 0')} — exactly what the positive secant slope is approximating.` +
          MORE('ascending-interval', 'a positive average rate'),
      },
      desc: {
        note: `On the middle interval (−1, 1), ${STR('f&apos;(x) = x² − 1 &lt; 0')}. ` +
          `The function falls steadily from the local max down to the local min — and every secant inside this interval has negative slope.` +
          MORE('descending-interval', 'a negative average rate'),
      },
      max: {
        note: `A zero derivative alone doesn&apos;t prove a maximum — only that the curve is momentarily flat. ` +
          `It&apos;s the ${STR('change of sign of f&apos;')} (positive → negative) that confirms it&apos;s a maximum. ` +
          `On this curve, that happens precisely at x = −1.` +
          MORE('closing-in-on-a-maximum', 'closing in on the maximum'),
      },
      min: {
        note: `Zero slope alone is necessary but not sufficient. The sign change of f&apos; ` +
          `(negative → positive) is what confirms a minimum. On this curve, that happens at x = 1.` +
          MORE('closing-in-on-a-minimum', 'closing in on the minimum'),
      },
    },
  }


  const faqQuestions = {
    obj1: {
      question: "What is the average rate of change of a function?",
      answer: "The average rate of change of a function f on the interval from x_1 to x_2 is the slope of the secant line connecting the points (x_1, f(x_1)) and (x_2, f(x_2)). It equals the change in output divided by the change in input. The value measures how much the function rises or falls per unit change in x across that interval."
    },
    obj2: {
      question: "How do you calculate the average rate of change?",
      answer: "Pick two x-values, compute the corresponding y-values, take the difference of the y-values, and divide by the difference of the x-values. The result is the slope of the line through the two points on the graph. A positive value means the function rose across the interval, and a negative value means it fell."
    },
    obj3: {
      question: "How does the average rate of change relate to the derivative?",
      answer: "The derivative at a point is the limit of the average rate of change as the second point slides toward the first. Geometrically, the secant line rotates into the tangent line as the interval shrinks. The derivative is therefore the instantaneous rate of change, while the average rate of change is its discrete approximation over a finite interval."
    },
    obj4: {
      question: "What does the sign of the average rate of change tell you?",
      answer: "A positive average rate of change means the function ended higher than it started across the interval. A negative value means it ended lower, and zero means the endpoints have the same height. In the limit, the sign of the derivative determines whether the function is increasing or decreasing at a point."
    },
    obj5: {
      question: "Why does the derivative equal zero at a smooth local maximum or minimum?",
      answer: "Just before a local maximum the function is increasing, and just after it the function is decreasing, so the derivative changes from positive to negative. By continuity it must pass through zero at the peak. The same argument with the signs reversed gives a zero derivative at a local minimum. This is Fermat's theorem."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Average Rate of Change Visualizer",
      "description": "Drag two points on a cubic curve to see the secant slope, rise over run, become the derivative. Walk through ascending, descending, max, and min cases.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/average-rate-of-change",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag two sample points along a cubic curve to update the secant slope in real time",
        "Animated walkthroughs for ascending, descending, local max, and local min configurations",
        "Computation tab shows the slope calculation broken into points, deltas, and ratio",
        "Meaning tab interprets the sign of the slope and connects it to monotonicity",
        "Theory tab presents the limit definition of the derivative and Fermat's theorem",
        "Tighten animation for the max and min scenarios visualizes the slope tending to zero",
        "Live numeric readouts for both point coordinates and the secant slope"
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
          "name": "Average Rate of Change",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/average-rate-of-change"
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
         stateUnits,
         explanations,
         faqQuestions,
         schemas,
         seoData: {
           title: "Average Rate of Change Visualizer | Learn Math Class",
           description: "Drag two points on a cubic curve to see the secant slope, rise over run, become the derivative. Walk through ascending, descending, max, and min cases.",
           keywords: keyWords.join(", "),
           url: "/calculus/visual-tools/average-rate-of-change",
           name: "Average Rate of Change Visualizer",
           hubDescription: "Drag two sample points along the cubic curve f(x) = ⅓x³ − x to watch the secant slope Δy/Δx update in real time. Four animated scenarios — ascending, descending, local max, and local min — walk through the geometry that turns the average rate of change into the derivative, with synchronized computation, meaning, and theory panels.",
           category: "Calculus",
           subCategory: "Derivatives",
           svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="0.9"/><line x1="12" y1="8" x2="12" y2="64" stroke="#B5D4F4" stroke-width="0.9"/><path d="M 24 44.47 L 58 44.47 L 58 16.07" fill="none" stroke="#C0DD97" stroke-width="1" stroke-dasharray="2.5,2"/><path d="M 16 56 Q 43 14 70 14" fill="none" stroke="#85B7EB" stroke-width="1.8"/><line x1="20" y1="47.81" x2="62" y2="12.73" stroke="#FAC775" stroke-width="1.6"/><circle cx="24" cy="44.47" r="2.8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="58" cy="16.07" r="2.8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><text x="41" y="51" font-family="Georgia,serif" font-size="7" fill="#C0DD97" text-anchor="middle" font-style="italic">&#916;x</text><text x="65" y="32" font-family="Georgia,serif" font-size="7" fill="#C0DD97" text-anchor="middle" font-style="italic">&#916;y</text></svg>`
         }
       }
    }
   }

export default function AverageRateOfChangeVisualizer({seoData, sectionsContent, stateUnits, explanations, faqQuestions, schemas}) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections=[
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-four-scenarios'),
    stateRow('obj11', 'ascending-interval', 'asc'),
    stateRow('obj12', 'descending-interval', 'desc'),
    stateRow('obj13', 'closing-in-on-a-maximum', 'max'),
    stateRow('obj14', 'closing-in-on-a-minimum', 'min'),
    plain('obj3', 'the-computation-tab'),
    plain('obj4', 'the-meaning-and-theory-tabs'),
    stateRow('obj5', 'exploring-freely', 'idle'),
    plain('obj6', 'what-is-average-rate-of-change'),
    plain('obj7', 'from-secant-to-derivative'),
    plain('obj8', 'sign-and-monotonicity'),
    plain('obj9', 'extrema-and-fermats-theorem'),
    plain('obj10', 'related-concepts'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Average Rate of Change</h1>
   <br/>
   <div style={{transform:'scale(0.95)',width:'80%',margin:'auto'}}>
   <FunctionDerivativeLocal explanations={explanations}/>
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