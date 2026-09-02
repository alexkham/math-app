// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionNewtonMethod from '../../../../app/components/calculus/visualizers/FunctionNewtonMethod'


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
//         url: "/calculus/visual-tools/newtons-method",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Newtons&apos;s Method</h1>
//    <br/>
//    <FunctionNewtonMethod explanations={explanations}/>
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
import FunctionNewtonMethod from '../../../../app/components/calculus/visualizers/FunctionNewtonMethod'
import functionNewtonMethodDiagrams from '../../../../app/components/calculus/visualizers/functionNewtonMethodDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    "Newton's method visualizer",
    'Newton-Raphson method',
    "Newton's method calculator",
    "Newton's method interactive",
    "Newton's method step by step",
    'root finding visualizer',
    'tangent line root finding',
    'quadratic convergence',
    "Newton's method failure modes",
    'Newton method critical point',
    'iterative root finder',
    "Newton's method examples",
    'f over f prime iteration',
    "Newton's method cubic",
    'numerical root finding'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Newton's method** (also called Newton-Raphson) — an iterative algorithm for approximating a root of a differentiable function by repeatedly following the tangent line down to the x-axis.

**Iterate** — one of the values $x_0, x_1, x_2, \\ldots$ produced by repeatedly applying the Newton step.

**Newton step** — the update rule $x_{n+1} = x_n - f(x_n) / f'(x_n)$, the x-intercept of the tangent line at $(x_n, f(x_n))$.

**Initial guess** — the starting value $x_0$ from which the iteration begins. Its position relative to the root and to any critical points determines whether the method succeeds.

**Quadratic convergence** — near a simple root the error roughly squares at each step, so the number of correct digits roughly doubles per iteration.

**Critical point** — a point where $f'(x) = 0$. Starting near a critical point makes the tangent nearly horizontal and breaks Newton's method.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `The visualizer shows the cubic function $f(x) = x^3 - 2x - 5$ together with its single real root $\\alpha \\approx 2.0946$, marked by a small triangle below the x-axis.

The interface has two parts. The left panel holds the graph, three scenario buttons, the **Step** and **Reset** controls, and a row of numeric readouts. The right panel is a tabbed sidebar with three views: **Computation**, **Meaning**, and **Theory**.

There are three ways to drive the tool:

- **Pick a scenario** to animate a preset starting point through a sequence of Newton iterations.
- **Drag $x_0$** along the x-axis to place your own starting guess.
- **Click Step** to advance one Newton iteration at a time from your custom $x_0$.

The four readouts under the graph — current iteration index $n$, current iterate $x_n$, function value $f(x_n)$, and the absolute error $|x_n - \\alpha|$ — update live as the animation progresses.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Choosing a Preset Scenario`,
      content: `Three buttons sit below the graph, each pinned to a starting value and a label describing what happens next.

- **Direct hit** ($x_0 = 3$) — starts on the right side of the root in the smooth basin. Each tangent step pulls the guess sharply toward $\\alpha$ and the error collapses within a few iterations.
- **Crosses over** ($x_0 = -1$) — starts on the wrong side of the curve. The first tangent crosses zero and the iterate lands in positive territory, after which the method converges normally.
- **Stalls** ($x_0 = 0.85$) — starts very close to a critical point at $x = \\sqrt{2/3} \\approx 0.816$ where $f'$ is tiny. The tangent comes out nearly horizontal, the correction $f / f'$ blows up, and $x_1$ flies off the chart.

The third scenario is the failure mode worth studying carefully. Click **Reset** at any time to clear the current scenario and return $x_0$ to its default position for free dragging.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Stepping Manually from a Custom Start`,
      content: `To run Newton's method from your own starting point, click **Reset** first if a preset scenario is active.

Then:

- **Drag the blue dot on the x-axis** to move $x_0$ wherever you want it. The drop line shows the corresponding point $(x_0, f(x_0))$ on the curve.
- **Click Step** to play one full Newton iteration. The animation marks the current point, draws the tangent, slides down to the new x-intercept, and lifts back to the curve.
- **Click Step again** to run the next iteration from the updated guess. Each click advances exactly one step, so the convergence (or divergence) unfolds at your own pace.

After every step the History table in the Computation tab grows by one row and the live readouts update. The Step button is only available when no preset scenario is running.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Animation`,
      content: `Every Newton iteration is broken into five visible phases. A banner at the top of the graph names the current phase, so the geometry on screen lines up with the algebra in the side panel.

- **Mark** — the current guess $P_n$ on the curve pulses briefly to draw attention.
- **Tangent** — the blue tangent line at $P_n$ extends across the canvas.
- **To axis** — a marker slides along the tangent down to where it meets the x-axis, locating the next iterate $x_{n+1}$.
- **To curve** — a dashed line lifts from $x_{n+1}$ up to the curve, locating $P_{n+1}$.
- **Settle** — a brief pause before the next iteration begins.

Past iterations fade so the latest step stays prominent. The triangle below the axis marks the true root $\\alpha$, giving you a visual target to compare each iterate against. If the animation halts with a red banner, the iteration has hit a failure mode and an arrow indicates where the off-chart iterate landed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Computation Tab`,
      content: `The Computation tab is the numeric companion to the animation. It has three sections that update together with the geometry.

- **Iteration formula** — the Newton step $x_{n+1} = x_n - f(x_n) / f'(x_n)$, shown once as the algorithm's definition.
- **Current step** — the live values for the running iteration: $f(x_n)$, $f'(x_n)$, the correction $f / f'$, and the resulting $x_{n+1}$. The two outputs are highlighted in blue.
- **History** — a compact table with one row per iteration so far, showing $n$, $x_n$, $f(x_n)$, and $|x_n - \\alpha|$. The active row is highlighted; failed rows appear in red.

The History table is where quadratic convergence becomes obvious: when the method succeeds, the error column drops by a factor that itself grows at every step.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading the Meaning and Theory Tabs`,
      content: `The **Meaning** tab opens automatically once an iteration sequence finishes. It shows a colored verdict card explaining what happened.

- **Converged** (blue) — the iteration reached the root. The card explains quadratic convergence and quotes the final error.
- **Stalls** (red) — the iteration failed. The card identifies the value of $f'(x_0)$ as the culprit and shows where $x_1$ landed.

A second card underneath gives the underlying reason — for success, the asymptotic error formula; for failure, why a small derivative makes the correction blow up.

The **Theory** tab is always available and holds five reference blocks: the definition, the geometric derivation of the Newton step from the tangent equation, the quadratic-convergence statement near a simple root, three common failure modes (flat tangent, cycles, divergence), and a summary of what each statement looks like for the specific cubic on screen.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is Newton's Method?`,
      content: `**Newton's method**, also called the **Newton-Raphson method**, is an iterative algorithm for approximating a root of a differentiable function $f$. Starting from an initial guess $x_0$, each iteration replaces the current guess with the x-intercept of the tangent line at that point:

$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$

Geometrically, the step is the algebraic version of "follow the tangent at $(x_n, f(x_n))$ down to where it crosses the x-axis." When $f$ is smooth and the starting guess is close enough to a simple root, this sequence converges very rapidly to that root.

For broader coverage of iterative root finders, see the **root finding overview page**, and for the underlying geometry, see the **tangent line page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why It Converges Quadratically`,
      content: `Near a simple root $\\alpha$ — where $f(\\alpha) = 0$ and $f'(\\alpha) \\neq 0$ — let the error at step $n$ be $e_n = x_n - \\alpha$. A Taylor expansion of $f$ around $\\alpha$ gives:

$$e_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} \\, e_n^2$$

The new error is proportional to the square of the previous error. In practical terms, the number of correct digits roughly doubles at each iteration. Bisection, by contrast, halves the error per step, so its correct-digit count grows only linearly.

This explains the dramatic drop in the History table's error column when Newton succeeds, and why Newton's method is the workhorse for high-precision root finding. A handful of iterations from a good starting point routinely produces machine-precision accuracy.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `When Newton's Method Fails`,
      content: `Newton's method can break down in three common ways.

- **Flat tangent** — if $f'(x_n)$ is small relative to $f(x_n)$, the correction $f / f'$ blows up and the next iterate lands far from the root. The Stalls scenario shows this directly: at $x_0 = 0.85$ the derivative $f'(x_0) \\approx 0.165$ is too small, and $x_1$ is sent off the chart.
- **Cycles** — for certain functions and starting points the iteration becomes periodic. A classic example is $f(x) = x^3 - 2x + 2$ with $x_0 = 0$, which oscillates between $0$ and $1$ forever.
- **Divergence** — for slowly growing functions like $\\arctan(x)$, starting too far from the root makes $|x_n|$ grow without bound rather than converge.

Production root finders defend against these failures by bracketing the root with bisection until the iterate enters a known basin of attraction, by capping the step size, and by falling back to a slower but more reliable method when Newton misbehaves.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Related concepts:**

- **Tangent line** — the geometric object Newton's method follows at each step.
- **Derivative** — required to compute the Newton step; the method breaks down where $f'$ vanishes.
- **Quadratic convergence** — the rate at which Newton refines a simple root.
- **Bisection method** — a slower but more robust root finder that always converges when given a sign-changing bracket.
- **Secant method** — a derivative-free cousin of Newton's that replaces $f'(x_n)$ with a finite-difference estimate.
- **Fixed-point iteration** — the abstract framework that contains Newton's method as a special case.

**Related tools:**

- **Bisection method visualizer** — watch a bracket shrink to a root one halving at a time.
- **Secant method visualizer** — see how a secant line approximates the tangent.
- **Tangent line visualizer** — explore the tangent on its own as the point of tangency moves.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Direct Hit: Four Steps from x₀ = 3`,
      content: `The Direct hit scenario starts at $x_0 = 3$, to the right of the root and well inside the smooth basin where $f' $ is large. Four iterations are enough to reach the root to four decimal places.

- $x_0 = 3$ — $f = 16$, $f' = 25$, error $9.1 \\times 10^{-1}$
- $x_1 = 2.36$ — $f = 3.4243$, $f' = 14.709$, error $2.6 \\times 10^{-1}$
- $x_2 = 2.127197$ — $f = 0.3711$, $f' = 11.575$, error $3.3 \\times 10^{-2}$
- $x_3 = 2.095136$ — $f = 0.006527$, $f' = 11.169$, error $5.9 \\times 10^{-4}$

Read the error figures downward: roughly $10^{-1}$, then $10^{-1}$, then $10^{-2}$, then $10^{-4}$. The exponent doubles once the guess is close enough, which is quadratic convergence doing its work.`,
      before: ``,
      after: `Geometrically the run is uneventful, and that is the point. Every tangent in the picture is steep — $f'$ never drops below 11 after the first step — so each correction $f / f'$ is small and lands the next guess close by. The faded trail shows the iterates bunching up near $\\alpha$ rather than spreading out.

The next step, had the animation continued, would put the error near $10^{-7}$. That is the practical shape of the [quadratic convergence](!#quadratic-convergence) result: a handful of steps from a decent starting guess, and no benefit in asking for more.`,
      link: '',
    },
    obj12: {
      title: `Crosses Over: One Tangent Throws the Guess Across the Root`,
      content: `The Crosses over scenario starts at $x_0 = -1$, on the far side of the curve where $f(-1) = -4$ and $f'(-1) = 1$. That slope is shallow compared with the function value, so the correction is large:

$x_1 = -1 - \\frac{-4}{1} = 3$

The first tangent hurls the guess from $-1$ all the way to $3$, straight past the root at $\\alpha \\approx 2.0946$. From there the run is identical to the direct hit — the same four iterates, the same error collapse.`,
      before: ``,
      after: `The overshoot is not a failure. Newton has no notion of which side of the root it is on; it only follows the tangent to the axis. Landing on the opposite side is common and usually harmless, as here, where the crossover happens to deposit the guess in the good basin.

What makes the difference is the ratio $f / f'$, not the sign of anything. At $x_0 = -1$ that ratio is $-4$, large enough to jump the root but not large enough to escape the region. Push the start a little further left and the same mechanism throws the iterate somewhere far less convenient — which is exactly what the [stalling scenario](!#stalls-near-a-critical-point) does with a shallow slope instead of a distant start.`,
      link: '',
    },
    obj13: {
      title: `Stalls: What Happens Near a Critical Point`,
      content: `The Stalls scenario starts at $x_0 = 0.85$, deliberately close to the critical point $x = \\sqrt{2/3} \\approx 0.8165$ where $f'$ vanishes. The numbers there are lopsided:

$f(0.85) = -6.0859$, $f'(0.85) = 0.1675$

The correction is the quotient of those two, $-36.33$, so

$x_1 = 0.85 - (-36.33) = 37.18$

The tangent leaves $P_0$ almost horizontally and travels a very long way before meeting the axis. The tool stops there and draws an arrow off the right edge, because $x_1 = 37.18$ is far outside the visible window.`,
      before: ``,
      after: `Nothing about this is a defect in the method — it is the formula behaving exactly as written. The step size is $f / f'$, and any denominator near zero makes that quotient enormous no matter how ordinary the numerator is.

The practical rule follows directly: **starting points near critical points of $f$ are unsafe for Newton**, and so are iterates that happen to land near one mid-run. From $x_1 = 37.18$ the method would in fact recover — $f'$ is huge out there, so the guess marches back down — but it would burn a dozen steps doing what a better start achieves in four. Other ways the method can break down are collected under [when Newton's method fails](!#when-newtons-method-fails).`,
      link: '',
    },
    obj14: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
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
      svg: functionNewtonMethodDiagrams.idle,
      caption: 'Manual start, frozen at x0 = 3',
      text: 'Nothing has run yet: just the draggable x0 on the axis, the drop line up to P0 on the curve, ' +
        'and the grey marker at the root &alpha; &asymp; 2.0946. Every Step click adds one tangent to this picture.',
    }),
    fast: demoUnitFrame({
      svg: functionNewtonMethodDiagrams.fast,
      caption: 'Direct hit, frozen after 4 iterations',
      text: 'Four tangents, each steep enough to keep its correction small. The P-markers crowd together as they ' +
        'approach &alpha;, and the final iterate x3 = 2.095136 is already correct to three decimals.',
    }),
    cross: demoUnitFrame({
      svg: functionNewtonMethodDiagrams.cross,
      caption: 'Crosses over, frozen after 5 iterations',
      text: 'The leftmost tangent, at x0 = -1, is the shallow one: it carries the guess clear across the root to ' +
        'x1 = 3. The remaining four steps repeat the direct-hit run exactly.',
    }),
    flat: demoUnitFrame({
      svg: functionNewtonMethodDiagrams.flat,
      caption: 'Stalls, frozen at the failing step',
      text: 'f&prime;(0.85) = 0.1675 makes the tangent nearly horizontal, so it meets the axis at x1 = 37.18 - far ' +
        'off the right edge, which is what the red arrow marks. The frame is the step itself, before the tool clears it.',
    }),
  }


  /* ---- panel explanations, hoisted out of the component (Line 1) ----
     FunctionNewtonMethod keys its verdict by outcome, not by scenario:
     meaning.{success|fail} only. Both converging scenarios therefore share the
     success entry, so its link line points at both of their sections. Raw HTML
     (rendered through dangerouslySetInnerHTML, so anchors are <a href="#slug">),
     {iters}/{plural}/{finalErr}/{x0}/{dfx0}/{xnext} are substituted live, and
     var(--v*) themes blue for success, red for failure. Anything omitted keeps
     the component's built-in default. */
  const STR = (t) => `<strong style="color:var(--vDeep)">${t}</strong>`
  const LNK = (slug, label) => `<a href="#${slug}" style="color:var(--vDeep);font-weight:600">${label}</a>`

  const explanations = {
    meaning: {
      success: {
        note:
          `For a simple root &alpha;, e<sub>n+1</sub> &asymp; |f&Prime;(&alpha;) / (2f&prime;(&alpha;))| &middot; e<sub>n</sub><sup>2</sup>. ` +
          `Each correct digit roughly produces two more on the next step &mdash; far faster than bisection&apos;s linear halving. ` +
          `Learn more about ${LNK('direct-hit', 'the direct hit')} and ${LNK('crosses-over', 'the crossover start')} ` +
          `&middot; ${LNK('preset-scenarios', 'all three scenarios')}`,
      },
      fail: {
        note:
          `The correction f / f&prime; blows up whenever f&prime; is small relative to f. ` +
          `Starts near ${STR('critical points')} of f (where f&prime; &asymp; 0) are unsafe for Newton. ` +
          `Learn more about ${LNK('stalls-near-a-critical-point', 'the stall')} ` +
          `&middot; ${LNK('preset-scenarios', 'all three scenarios')}`,
      },
    },
  }


  const faqQuestions = {
    obj1: {
      question: "What is Newton's method?",
      answer: "Newton's method, also called Newton-Raphson, is an iterative algorithm for approximating a root of a differentiable function f. Starting from an initial guess x_0, each iteration replaces the current value with the x-intercept of the tangent line to f at that point. The update rule is x_(n+1) = x_n - f(x_n) / f'(x_n)."
    },
    obj2: {
      question: "How does Newton's method work geometrically?",
      answer: "At the current guess x_n, draw the tangent line to the curve y = f(x). Where that tangent crosses the x-axis is the next guess x_(n+1). Repeating this process slides the iterates along tangent intercepts toward a point where the function value is zero, which is a root of f."
    },
    obj3: {
      question: "How fast does Newton's method converge?",
      answer: "Near a simple root, Newton's method converges quadratically. The error at the next step is roughly proportional to the square of the current error. In practical terms, the number of correct digits roughly doubles per iteration once the iterates are close enough to the root."
    },
    obj4: {
      question: "When does Newton's method fail?",
      answer: "Newton's method can fail in three ways. First, if f'(x_n) is small, the correction f / f' becomes very large and the next iterate lands far from the root. Second, certain starting points produce periodic cycles rather than convergence. Third, for slowly growing functions like arctan, the iterates can diverge instead of converging."
    },
    obj5: {
      question: "How is Newton's method different from bisection?",
      answer: "Bisection requires only a sign change on an interval and halves that interval at every step, giving linear convergence. Newton's method requires a differentiable function and a good starting guess, but converges quadratically when it works. Bisection is robust but slow; Newton is fast but can fail or diverge."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Newton's Method Visualizer",
      "description": "Step through Newton's method on f(x) = x^3 - 2x - 5. Drag x0, run scenarios for fast convergence, crossover, or a stalling failure near a critical point.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/newtons-method",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag the initial guess x_0 along the x-axis to set any starting point for Newton's method",
        "Step button advances exactly one Newton iteration so the user controls the pace",
        "Three preset scenarios: a direct hit, a slow crossover, and a stalling failure caused by a near-horizontal tangent",
        "Five-phase animation per iteration: mark the current guess, draw the tangent, slide to the x-axis, lift back to the curve, settle",
        "Computation tab shows the live values of f, f-prime, the correction, and the next iterate, plus a growing history table with the error column",
        "Meaning tab gives a verdict card explaining quadratic convergence on success or diagnosing the failure mode on failure",
        "Theory tab presents the definition, the geometric derivation, quadratic convergence, common failure modes, and the specific cubic on screen"
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
          "name": "Newton's Method",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/newtons-method"
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
           title: "Newton's Method Visualizer | Learn Math Class",
           description: "Step through Newton's method on f(x) = x^3 - 2x - 5. Drag x0, run scenarios for fast convergence, crossover, or a stalling failure near a critical point.",
           keywords: keyWords.join(", "),
           url: "/calculus/visual-tools/newtons-method",
           name: `Newtons Method Visualizer`,
           hubDescription: "Drag a starting guess x₀ along the x-axis for f(x) = x³ − 2x − 5 and watch each Newton step draw its tangent, drop to the x-axis, and lift back to the curve. Three preset scenarios show a direct hit, a slow crossover, and a stalling failure when x₀ lands near a critical point where the tangent goes nearly horizontal.",
           category: "Calculus",
           subCategory: "Derivatives",
           svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="56" x2="76" y2="56" stroke="#B5D4F4" stroke-width="0.9"/><line x1="64" y1="56" x2="64" y2="36.8" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2.5,2"/><line x1="44" y1="56" x2="44" y2="51.2" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="2.5,2"/><path d="M 24 56 Q 47 56 70 30.6" fill="none" stroke="#85B7EB" stroke-width="1.8"/><line x1="64" y1="36.8" x2="44" y2="56" stroke="#FAC775" stroke-width="1.6"/><line x1="44" y1="51.2" x2="34" y2="56" stroke="#EF9F27" stroke-width="1.6"/><circle cx="64" cy="36.8" r="2.8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="44" cy="51.2" r="2.6" fill="#EF9F27" stroke="#854F0B" stroke-width="1"/><circle cx="24" cy="56" r="3" fill="#97C459" stroke="#27500A" stroke-width="1.2"/><text x="64" y="66" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">x&#8320;</text><text x="44" y="66" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">x&#8321;</text></svg>`
         }
       }
    }
   }

export default function NewtonsMethodVisualizer({seoData, sectionsContent, stateUnits, explanations, faqQuestions, schemas}) {

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
    plain('obj2', 'preset-scenarios'),
    stateRow('obj11', 'direct-hit', 'fast'),
    stateRow('obj12', 'crosses-over', 'cross'),
    stateRow('obj13', 'stalls-near-a-critical-point', 'flat'),
    stateRow('obj3', 'manual-stepping', 'idle'),
    plain('obj4', 'reading-the-animation'),
    plain('obj5', 'the-computation-tab'),
    plain('obj6', 'the-meaning-and-theory-tabs'),
    plain('obj7', 'what-is-newtons-method'),
    plain('obj8', 'quadratic-convergence'),
    plain('obj9', 'when-newtons-method-fails'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-30px'}}>Newton&apos;s Method</h1>
   <br/>
   <div style={{transform:'scale(0.9)',width:'80%',margin:'auto'}}>
   <FunctionNewtonMethod explanations={explanations}/>
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