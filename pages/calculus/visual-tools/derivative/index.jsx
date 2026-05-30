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
//    <FunctionDerivative/>
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

• **f&apos;(x)** — toggles the dashed derivative curve. Off, the picture reduces to the classical *tangent line at a point* without the derivative-as-function overlay.

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

The fraction inside the limit is the *slope of the secant line* through the two nearby points $(x_0, f(x_0))$ and $(x_0 + h, f(x_0 + h))$. As $h$ shrinks to zero, the secant slope approaches the **slope of the tangent line** to $f$ at $x_0$ — the derivative.

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
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
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


  const introContent = {
    id: "intro",
    title: "",
    content: ``
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
        subCategory: ""
      },

    }
  }
}

export default function DerivativeVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [
        sectionsContent.obj9.content,
      ]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [
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
      <FunctionDerivative/>
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