// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionDerivative from '../../../../app/components/functions/derivative/FunctionDerivative'


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
//         url: "/calculus/visual-tools/derivative",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Derivative</h1>
//    <br/>
//    <FunctionDerivative explanations={explanations}/>
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
import FunctionDerivative from '../../../../app/components/functions/derivative/FunctionDerivative'
import functionDerivativeDiagrams from '../../../../app/components/functions/derivative/functionDerivativeDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'derivative',
    'derivative visualizer',
    'derivative calculator',
    'tangent line',
    'slope of tangent',
    'derivative graph',
    'f prime',
    'instantaneous rate of change',
    'derivative of x squared',
    'derivative of sine',
    'derivative of exponential',
    'interactive derivative tool',
    'critical points',
    'inflection points',
    'derivative geometric meaning'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Derivative** — the instantaneous rate of change of $f$ at a point, written $f'(x)$ or $\\frac{df}{dx}$. Equal to the slope of the tangent line to $f$ at that point.

**Tangent line** — the straight line that just touches the curve of $f$ at a single point, sharing the same slope as $f$ there. Its slope is $f'(x_0)$.

**f prime as a function** — the derivative $f'$ is a function of $x$ in its own right. Its value at any $x$ is the slope of $f$ at that same $x$.

**Critical point** — a value of $x$ where $f'(x) = 0$ or $f'(x)$ is undefined. Local maxima and minima of $f$ live at critical points.

**Inflection point** — a value of $x$ where $f$ changes concavity. These are extrema of $f'$ (where $f''$ would be zero).

**Closed-form derivative** — an exact symbolic formula for $f'$, like $\\frac{d}{dx}[x^2] = 2x$ or $\\frac{d}{dx}[\\sin x] = \\cos x$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Quadratic** family $f(x) = x^2$ already loaded and the probing point $x_0$ parked at $1$. You see three things at once on the graph:

• The solid blue curve of $f$.

• The dashed deeper-blue curve of $f'$.

• A light-blue tangent line touching $f$ at $x_0$.

A faint vertical dashed line drops through both curves at $x_0$, so you can read off $f(x_0)$ and $f'(x_0)$ on the same vertical slice. The boxed card below the graph shows both numbers plus the tangent slope — all three are pictures of the same derivative value.

To explore quickly, drag the **point x₀** slider in the left panel, or click any of the **Jump to** buttons to snap onto roots, extrema, or inflection points.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Function Families`,
      content: `Seven families are organized into two groups in the left panel.

**Polynomial:**

• **Identity** — $f(x) = x$, $f'(x) = 1$. The constant derivative is the baseline case.

• **Quadratic** — $f(x) = x^2$, $f'(x) = 2x$. The derivative is the line through the origin with slope $2$.

• **Cubic** — $f(x) = x^3$, $f'(x) = 3x^2$. The derivative is a parabola; the origin is an inflection point of $f$.

**Transcendental:**

• **Sine** — $f(x) = \\sin x$, $f'(x) = \\cos x$. Two waves locked a quarter-period out of phase.

• **Cosine** — $f(x) = \\cos x$, $f'(x) = -\\sin x$. Same shape, shifted the other way.

• **Exponential** — $f(x) = e^x$, $f'(x) = e^x$. The function and its derivative are the same curve.

• **Logarithm** — $f(x) = \\ln x$, $f'(x) = 1/x$. Only defined for $x > 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The x₀ Slider`,
      content: `The **point x₀** slider sweeps the probing point from $-5$ to $+5$ in steps of $0.05$. As you drag:

• The tangent line moves along $f$, always touching at the new $x_0$.

• The dashed vertical link line follows.

• The marker dot on $f$ at $(x_0, f(x_0))$ slides along with it.

• The marker dot on $f'$ at $(x_0, f'(x_0))$ slides with it too — at the same height as the tangent slope.

• The three numeric cards below update live.

The whole point of the slider is to make the connection between the tangent slope and the height of $f'$ feel concrete. Pick a steep part of $f$ — the tangent tilts hard, and $f'$ flies far from zero. Pick a flat part — the tangent goes horizontal, and $f'$ touches zero.

The **Reset** button next to the **Parameters** label returns $x_0$ to the family&apos;s default starting position.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Jump-to Points of Interest`,
      content: `Below the graph is a row of buttons grouped into three categories — the three kinds of special points worth visiting:

• **Roots of f** — where $f(x) = 0$. The curve of $f$ crosses the x-axis here. For $x^2$ that&apos;s only $x = 0$; for $\\sin x$ it&apos;s every multiple of $\\pi$.

• **Extrema of f** — where $f'(x) = 0$. The tangent goes horizontal; $f$ has a local max or min. For $x^2$ that&apos;s $x = 0$ (the minimum at the origin).

• **Inflections** — where $f''(x) = 0$, equivalently extrema of $f'$. The concavity of $f$ flips, and $f'$ is at its own local max or min. For $x^3$ that&apos;s $x = 0$.

Clicking any button snaps $x_0$ to that exact location, so you can hop between landmarks without fighting the slider for a clean number.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the At-The-Point Card`,
      content: `The boxed card below the graph displays the three quantities at $x_0$ side by side:

• **f(x₀)** — the height of the function at $x_0$. Where the function value lives.

• **f&apos;(x₀)** — the height of the derivative curve at the same $x_0$. The slope of $f$ there.

• **Tangent slope** — the slope of the tangent line you see on the plot. Identical to $f'(x_0)$.

The middle and right entries are always the same number. That repetition is the whole pedagogical point: the derivative, the height of $f'$, and the slope of the tangent are three pictures of one quantity.

Skim across the row as you slide $x_0$. The left number tells you what $f$ is doing; the middle and right tell you, in stereo, how fast it&apos;s changing.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel lets you hide any of the three layers when one of them is in the way:

• **f(x)** — toggles the solid curve of the original function. Off, you see just $f'$ and the tangent, which is sometimes useful when the function curve is busy.

• **f&apos;(x)** — toggles the dashed derivative curve. Off, the picture reduces to the classical **tangent line at a point** without the derivative-as-function overlay.

• **tangent** — toggles the tangent line at $x_0$. Off, you see just the two function curves and their link line.

The toggles are independent — any combination is valid. The legend below the graph updates to show only the visible curves. The **Accent color** picker at the bottom recolors the active highlight throughout the tool.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is a Derivative`,
      content: `The **derivative** of $f$ at the point $x_0$ measures how fast $f$ changes when the input changes a tiny bit. Formally:

$$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$$

The fraction inside the limit is the **slope of the secant line** through the two nearby points $(x_0, f(x_0))$ and $(x_0 + h, f(x_0 + h))$. As $h$ shrinks to zero, the secant slope approaches the **slope of the tangent line** to $f$ at $x_0$ — the derivative.

When the derivative exists at every $x$ in some interval, the collection of values $f'(x)$ forms a new function $f'$, called the **derivative function** of $f$.

For the full theory of derivatives and limit-based definitions, see the **derivatives** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Geometric Meaning - The Tangent Line`,
      content: `The geometric picture: the **tangent line** to $f$ at $x_0$ is the straight line that just barely touches the curve at one point, sharing the same direction as $f$ there. Its slope is $f'(x_0)$, and it passes through $(x_0, f(x_0))$. The point-slope form gives:

$$y = f(x_0) + f'(x_0)(x - x_0)$$

This is also the **best linear approximation** to $f$ near $x_0$ — for inputs close to $x_0$, the tangent line predicts $f$ accurately.

Three things to look for as you slide $x_0$ across the graph:

• Steep parts of $f$ — the tangent tilts hard; $f'$ is far from zero.

• Flat parts of $f$ — the tangent goes horizontal; $f'$ is at zero.

• Maxima and minima of $f$ — exactly where $f'$ crosses zero.

For deeper coverage of the tangent line and its applications, see the **tangent line** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `From f to f Prime`,
      content: `The derivative isn&apos;t just one number at one point — it&apos;s a whole new function. As $x$ varies, the slope of the tangent to $f$ at $x$ varies too, tracing out a curve. That curve is the **derivative function** $f'(x)$.

The qualitative correspondence between $f$ and $f'$:

• $f$ increasing $\\Leftrightarrow$ $f' > 0$ (curve of $f'$ above the x-axis).

• $f$ decreasing $\\Leftrightarrow$ $f' < 0$ (curve of $f'$ below the x-axis).

• $f$ has a local max or min $\\Leftrightarrow$ $f'$ crosses zero.

• $f$ concave up $\\Leftrightarrow$ $f'$ increasing.

• $f$ concave down $\\Leftrightarrow$ $f'$ decreasing.

• $f$ has an inflection point $\\Leftrightarrow$ $f'$ has a local max or min.

Sliding $x_0$ through the tool with both curves visible makes this dictionary visible at every step.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Limits** — the foundation derivatives are built on. The derivative is defined as a limit of secant slopes.

**Continuity** — every differentiable function is continuous, though not the other way around. The absolute value function is continuous at $0$ but not differentiable there.

**Differentiation rules** — power rule, product rule, quotient rule, chain rule. The mechanical toolkit for computing derivatives without going back to the limit definition.

**Second derivative** — the derivative of $f'$ itself, written $f''$. Measures concavity and acceleration.

**Critical points and optimization** — finding where $f'(x) = 0$ to locate maxima and minima. The basis of single-variable optimization.

**Mean Value Theorem** — guarantees that on a smooth interval the average slope equals the instantaneous slope at some point.

**Integrals** — the inverse operation. Integration recovers $f$ from $f'$ up to a constant.

**Visual tools for calculus** — other interactive visualizers covering limits, continuity, Riemann sums, and integrals.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Identity: a Constant Derivative`,
      content: `$f(x) = x$ is the straight line through the origin at 45 degrees, and its derivative is the constant $f'(x) = 1$. On the graph that shows up as a horizontal dashed line sitting at height 1 — the same value no matter where $x_0$ goes.

At $x_0 = 1$ the readings are $f(x_0) = 1$ and $f'(x_0) = 1$. The tangent to $f$ is the line itself, because a straight line is its own best linear approximation everywhere.`,
      before: ``,
      after: `Drag $x_0$ anywhere and the tangent never tilts. That is what a constant derivative means: the rate of change does not depend on position.

The two curves are worth comparing as objects rather than as pictures. $f$ is a line with slope 1; $f'$ is a line with slope 0. Differentiating dropped the degree by one, which is the pattern the [quadratic](!#the-quadratic) and [cubic](!#the-cubic) families continue.`,
      link: '',
    },
    obj12: {
      title: `Quadratic: a Derivative That Grows Linearly`,
      content: `$f(x) = x^2$ has $f'(x) = 2x$ — a parabola paired with a straight line through the origin.

At $x_0 = 1$: $f(x_0) = 1$ and $f'(x_0) = 2$. The tangent on the parabola climbs at slope 2, and the dot on $f'$ sits at height 2. Those are the same number seen two ways, which is the whole point of showing both curves at once.`,
      before: ``,
      after: `The sign structure is easy to read here. $f'(x) = 2x$ is negative for $x < 0$, zero at the origin, positive for $x > 0$ — so the parabola falls, levels off, then rises. The single zero of $f'$ marks the single turning point of $f$.

Notice also that $f'$ crosses zero rather than merely touching it. That crossing is what makes the origin a genuine minimum instead of a flat spot, a distinction the cubic makes vivid by failing it.`,
      link: '',
    },
    obj13: {
      title: `Cubic: a Flat Spot That Is Not an Extremum`,
      content: `$f(x) = x^3$ has $f'(x) = 3x^2$, an upward parabola that touches zero at the origin and is positive everywhere else.

At $x_0 = 1$: $f(x_0) = 1$ and $f'(x_0) = 3$. Slide $x_0$ to the origin and the tangent goes flat — but the curve does not turn around.`,
      before: ``,
      after: `This is the standard counterexample to "zero derivative means extremum". At $x = 0$ the tangent is horizontal, yet $f' \ge 0$ everywhere, so the function never stops increasing. It merely pauses.

What distinguishes this from the quadratic is that $f'$ touches the axis without crossing it. No sign change, no turning point. The rule that actually classifies a critical point is the sign change of $f'$, not the zero itself.`,
      link: '',
    },
    obj14: {
      title: `Sine: the Derivative Is a Quarter Turn`,
      content: `$f(x) = \sin(x)$ has $f'(x) = \cos(x)$ — the same wave, shifted left by $\pi/2$.

At $x_0 = 1$: $f(x_0) = 0.84$ and $f'(x_0) = 0.54$. The sine is still climbing at that point, though it is slowing down as it nears its peak at $\pi/2 \approx 1.571$.`,
      before: ``,
      after: `The shift is the most useful thing to see here. Every peak of $\sin$ lines up with a zero of $\cos$ going downward, every trough with a zero going upward, and the steepest parts of the sine sit exactly where the cosine reaches $\pm 1$.

Differentiating four times returns you to where you started: $\sin \to \cos \to -\sin \to -\cos \to \sin$. Each step is another quarter turn, which is why trigonometric derivatives cycle rather than simplify.`,
      link: '',
    },
    obj15: {
      title: `Cosine: the Same Wave With a Sign`,
      content: `$f(x) = \cos(x)$ has $f'(x) = -\sin(x)$. Same shape as the sine family, but the minus sign matters.

At $x_0 = 1$: $f(x_0) = 0.54$ and $f'(x_0) = -0.84$. The cosine is descending there — it peaked at the origin and is on its way down to its zero at $\pi/2$.`,
      before: ``,
      after: `Compare this with the [sine family](!#sine) directly: the readings swap roles and one of them picks up a minus. That is not a coincidence but the quarter-turn rule applied one step further along the cycle.

The negative sign is also the reason the second derivative of $\cos$ is $-\cos$ — the function equals the negative of its own second derivative, which is exactly the differential equation that makes sine and cosine describe oscillation.`,
      link: '',
    },
    obj16: {
      title: `Exponential: Its Own Derivative`,
      content: `$f(x) = e^x$ has $f'(x) = e^x$. The two curves coincide exactly, so the solid and dashed lines lie on top of each other across the whole graph.

At $x_0 = 1$: $f(x_0) = 2.72$ and $f'(x_0) = 2.72$. Both dots land at the same height, and they will do so wherever $x_0$ goes.`,
      before: ``,
      after: `This is the defining property of $e^x$, not a curiosity of it. Any function satisfying $f' = f$ has to be $Ce^x$ for some constant $C$, and requiring $f(0) = 1$ pins down $C = 1$. That is one legitimate way to define the number $e$ in the first place.

Geometrically it says the height of the curve is its own slope: at height 2.72 the tangent rises at 2.72 per unit. Growth proportional to current size is exactly what compound interest, population models and radioactive decay all express.`,
      link: '',
    },
    obj17: {
      title: `Logarithm: a Derivative That Blows Up`,
      content: `$f(x) = \ln(x)$ has $f'(x) = 1/x$, and both are defined only for $x > 0$ — the left half of the graph is empty for this family.

At $x_0 = 1$: $f(x_0) = 0$ and $f'(x_0) = 1$. The logarithm crosses the x-axis at 1, and it does so at slope exactly 1.`,
      before: ``,
      after: `Watch what happens as $x_0$ moves toward zero. The logarithm plunges without bound, and $1/x$ climbs without bound alongside it — the curve gets steeper and steeper with no limiting slope. Move the other way and both flatten out: at $x = 5$ the slope is already down to $0.2$.

That contrast is worth holding next to the [exponential](!#the-exponential), which is the inverse function. Where $e^x$ grows faster than any polynomial, $\ln x$ grows slower than any positive power of $x$ — and the reciprocal derivative is precisely why.`,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     SVGs come from the tool's own scene description, serialised through the
     core's generateSVG - see app/components/functions/frozenSvg.js. Every state
     is frozen at the component's initial x0 = 1. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionDerivativeDiagrams[key], caption, text })

  const stateUnits = {
    identity: unit('identity', 'Identity, frozen at x0 = 1',
      'f is the 45-degree line, f&prime; the flat dashed line at height 1. The tangent lies exactly on f, ' +
      'because a straight line is its own tangent everywhere.'),
    quadratic: unit('quadratic', 'Quadratic, frozen at x0 = 1',
      'The parabola with its derivative drawn as the line f&prime;(x) = 2x. At x0 = 1 the tangent slope is 2 ' +
      'and the dashed line passes through height 2 - the same number in two places.'),
    cubic: unit('cubic', 'Cubic, frozen at x0 = 1',
      'f&prime;(x) = 3x&sup2; sits entirely above the axis apart from a single touch at the origin. That touch ' +
      'without a crossing is why x&sup3; has a flat spot but no turning point.'),
    sine: unit('sine', 'Sine, frozen at x0 = 1',
      'Two waves a quarter period apart. The marker on f&prime; reads 0.54 while f reads 0.84 - the sine is ' +
      'still rising, but slowing as it approaches its peak.'),
    cosine: unit('cosine', 'Cosine, frozen at x0 = 1',
      'The same pair with the roles swapped and a sign attached: f reads 0.54 and f&prime; reads -0.84. ' +
      'The dashed curve is below the axis wherever the cosine is falling.'),
    exponential: unit('exponential', 'Exponential, frozen at x0 = 1',
      'Solid and dashed curves coincide across the whole frame, and both markers land at 2.72. ' +
      'This is the graph of a function equal to its own derivative.'),
    logarithm: unit('logarithm', 'Logarithm, frozen at x0 = 1',
      'Nothing is drawn left of the y-axis: both ln x and 1/x are undefined there. At x0 = 1 the log crosses ' +
      'zero while its derivative reads exactly 1.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionDerivative had no explanations prop; one was added additively and
     defaults to null, so the panel is unchanged when nothing is passed. Content
     is markdown - InfoPanel renders it through processContent, so anchors use
     the normal [text](!#slug) form. */
  const note = (body, slug, label) =>
    `### Where this leads\n\n${body} See [${label}](!#${slug}) or compare [all seven families](!#the-function-families).`

  const explanations = {
    identity: note('A constant derivative: the slope never changes, so the tangent never tilts.', 'the-identity-function', 'the identity family'),
    quadratic: note('A derivative that grows linearly, crossing zero exactly where the parabola turns.', 'the-quadratic', 'the quadratic family'),
    cubic: note('A derivative that touches zero without crossing it - a flat spot, but no extremum.', 'the-cubic', 'the cubic family'),
    sine: note('Differentiating shifts the wave by a quarter period.', 'sine', 'the sine family'),
    cosine: note('The same quarter turn, one step further along the cycle, which is where the minus sign comes from.', 'cosine', 'the cosine family'),
    exponential: note('The two curves coincide: this function is its own derivative.', 'the-exponential', 'the exponential family'),
    logarithm: note('Defined only for x > 0, with a slope that grows without bound as x approaches zero.', 'the-logarithm', 'the logarithm family'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a derivative?",
      answer: "The derivative of a function f at a point is the instantaneous rate of change of f at that point. Geometrically, it equals the slope of the line that just barely touches the curve of f at the point, called the tangent line. It is defined as the limit of secant slopes as the spacing between two points on the curve shrinks to zero."
    },
    obj2: {
      question: "How does the derivative relate to the tangent line?",
      answer: "The derivative at a point is exactly the slope of the tangent line to the curve at that point. If you know f at the point and the derivative there, you can write the tangent line using point-slope form, and that line is the best straight-line approximation to f near the point."
    },
    obj3: {
      question: "What is the difference between f and f prime?",
      answer: "The function f gives the output value at each input. The derivative f prime is a separate function whose value at any input is the slope of f at that same input. They live on the same axes but track different quantities: f tracks height, f prime tracks how fast that height is changing."
    },
    obj4: {
      question: "Where on f does f prime equal zero?",
      answer: "f prime equals zero exactly at the critical points of f, which are typically local maxima, local minima, or saddle points. At these points the tangent line is horizontal, so the slope is zero. Locating roots of f prime is the standard first step in finding the extrema of f."
    },
    obj5: {
      question: "What does an inflection point look like in terms of f prime?",
      answer: "An inflection point of f is a place where the curve changes concavity, from curving up to curving down or vice versa. In terms of f prime, an inflection point of f is exactly a local maximum or local minimum of f prime. The second derivative would be zero there."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Derivative Visualizer",
      "description": "Interactive tool that plots a function, its derivative, and the tangent line at a movable point, with snap-to buttons for roots, extrema, and inflection points.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/derivative",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Plot a function alongside its derivative and a tangent line at a movable probing point",
        "Slide the probing point across the graph and watch f, f prime, and the tangent stay in sync",
        "Choose from seven function families covering polynomial and transcendental cases",
        "Snap to roots of f, extrema of f, and inflection points with one click",
        "Numeric card displays f at the point, f prime at the point, and the tangent slope",
        "Toggle the function curve, derivative curve, and tangent line independently",
        "Closed-form derivatives for every built-in family, no numerical approximation needed"
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
      "keywords": "derivative, derivative visualizer, derivative calculator, tangent line, slope of tangent, derivative graph, f prime, instantaneous rate of change, derivative of x squared, derivative of sine, derivative of exponential, interactive derivative tool, critical points, inflection points, derivative geometric meaning"
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
          "name": "Derivative Visualizer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/derivative"
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
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Derivative Visualizer & Tangent Line Tool | Learn Math Class",
        description: "Visualize the derivative as the slope of a tangent line. Move x0 across f and watch f-prime match the tangent slope live across common functions.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/derivative",
        name: "Derivative Visualizer",
        hubDescription: "Move x0 along the graph and watch three pictures of one number lock together — the slope of the tangent on f, the height of f-prime at x0, and the numeric derivative value. Snap directly to roots, extrema, and inflection points to see why each one matters.",
        category: "Derivatives",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="17" x2="40" y2="57" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.75"/><line x1="10" y1="34" x2="76" y2="34" stroke="#B5D4F4" stroke-width="0.8"/><path d="M 14 30 Q 40 6 66 14" fill="none" stroke="#85B7EB" stroke-width="1.7"/><line x1="28" y1="17.69" x2="52" y2="10.31" stroke="#FAC775" stroke-width="1.5"/><circle cx="40" cy="14" r="2.6" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><line x1="8" y1="39" x2="76" y2="39" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="3,2.5"/><line x1="10" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="0.8"/><line x1="14" y1="50" x2="66" y2="70" stroke="#97C459" stroke-width="1.7"/><circle cx="40" cy="60" r="2.6" fill="#97C459" stroke="#27500A" stroke-width="1"/><text x="11" y="13" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" font-style="italic">f</text><text x="11" y="49" font-family="Georgia,serif" font-size="8" fill="#C0DD97" font-style="italic">f&#8242;</text></svg>`
      },

    }
  }
}

export default function DerivativeVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-function-families'),
    stateRow('obj11', 'the-identity-function', 'identity'),
    stateRow('obj12', 'the-quadratic', 'quadratic'),
    stateRow('obj13', 'the-cubic', 'cubic'),
    stateRow('obj14', 'sine', 'sine'),
    stateRow('obj15', 'cosine', 'cosine'),
    stateRow('obj16', 'the-exponential', 'exponential'),
    stateRow('obj17', 'the-logarithm', 'logarithm'),
    plain('obj3', 'the-x0-slider'),
    plain('obj4', 'jump-to-points-of-interest'),
    plain('obj5', 'the-at-the-point-card'),
    plain('obj6', 'display-toggles'),
    plain('obj7', 'what-is-a-derivative'),
    plain('obj8', 'the-tangent-line'),
    plain('obj9', 'from-f-to-f-prime'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Derivative Visualizer & Tangent Line Tool</h1>
      <br/>
      <FunctionDerivative explanations={explanations}/>
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
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}