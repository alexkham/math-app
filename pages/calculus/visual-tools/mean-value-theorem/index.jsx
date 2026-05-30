// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionMVT from '../../../../app/components/functions/mvt/FunctionMVT'


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
//         url: "/calculus/visual-tools/mean-value-theorem",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Mean Value Theorem</h1>
//    <br/>
//    <FunctionMVT/>
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
import FunctionMVT from '../../../../app/components/functions/mvt/FunctionMVT'


export async function getStaticProps(){

  const keyWords = [
    'mean value theorem',
    'MVT',
    'mean value theorem calculator',
    'mean value theorem visualizer',
    'Rolles theorem',
    'secant slope',
    'average rate of change',
    'instantaneous rate of change',
    'tangent parallel to secant',
    'f prime equals secant slope',
    'MVT applications',
    'mean value theorem examples',
    'interactive MVT tool',
    'derivative theorem',
    'calculus theorems'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Mean Value Theorem (MVT)** — if $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \\in (a, b)$ where $f'(c) = (f(b) - f(a)) / (b - a)$.

**Secant line** — the straight line through the two interval endpoints $(a, f(a))$ and $(b, f(b))$. Its slope is the average rate of change of $f$ on $[a, b]$.

**Tangent line at c** — the straight line touching the curve at $(c, f(c))$ with slope $f'(c)$. The MVT guarantees at least one such tangent is parallel to the secant.

**Average rate of change** — $(f(b) - f(a)) / (b - a)$, the change in output divided by the change in input on the interval.

**Instantaneous rate of change** — $f'(c)$, the rate of change at a single point.

**Rolle&apos;s theorem** — the special case of the MVT when $f(a) = f(b)$. The secant is horizontal, so the MVT promises an interior $c$ with $f'(c) = 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Quadratic** family $f(x) = x^2$ loaded on the interval $[-2, 2]$. You see three things on the graph:

• The solid blue curve of $f$.

• A deep-blue secant line connecting $(-2, 4)$ to $(2, 4)$. Its slope is $0$.

• A light-blue tangent at $c = 0$, parallel to the secant (also slope $0$). The midpoint of the interval, exactly as the theorem predicts for a parabola.

Dashed vertical gray lines mark $a$ and $b$. The boxed card below the graph reports the secant slope, the number of $c$ values found, and the value of $f'$ at each $c$.

To explore, drag the **left endpoint a** and **right endpoint b** sliders to set any interval, or switch families in the left panel to see how the number of $c$ values can change.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Function Families`,
      content: `Six families are organized into two groups in the left panel, each tagged with the typical number of $c$ values you can expect.

**Polynomial:**

• **Identity** $f(x) = x$ — every point is a $c$. The function is its own secant.

• **Quadratic** $f(x) = x^2$ — exactly one $c$, always at the midpoint $(a + b)/2$.

• **Cubic** $f(x) = x^3$ — up to two $c$ values, depending on whether the interval crosses the inflection point.

**Transcendental:**

• **Sine** $f(x) = \\sin x$ — multiple $c$ values on a long enough interval. Defaults to $[0, 2\\pi]$.

• **Cosine** $f(x) = \\cos x$ — similar; defaults to $[0, \\pi]$.

• **Exponential** $f(x) = e^x$ — exactly one $c$. Because $f' = f = e^x$ is strictly increasing, $f'(c) = m$ has a unique solution.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The a and b Sliders`,
      content: `The **left endpoint a** and **right endpoint b** sliders set the interval. As you drag either:

• The dashed vertical lines at $a$ and $b$ follow.

• The dark markers at $(a, f(a))$ and $(b, f(b))$ snap to the new endpoints.

• The secant line rotates to match the new endpoints.

• The $c$ finder re-runs, redrawing every interior tangent parallel to the new secant.

• The numeric cards update.

If you set $a > b$, the tool transparently swaps them — only the interval matters, not the order. If the interval shrinks below a tiny threshold, the tool waits until you give it a real interval to work with.

The **Reset** button next to **Parameters** returns the interval to the family&apos;s default.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Three Result Cards`,
      content: `The boxed card below the graph displays three quantities side by side:

• **Secant slope** — the value $(f(b) - f(a)) / (b - a)$, the average rate of change on $[a, b]$. This is the target slope every interior tangent must match.

• **c values found** — the count of $c$ values in $(a, b)$ where $f'(c)$ equals the secant slope, with their numeric values listed below.

• **f&apos;(c) at each c** — the derivative evaluated at each $c$. These numbers should all equal the secant slope above (modulo numerical rounding).

The MVT guarantees the count is at least one. Depending on the function and interval, you may see exactly one (parabola, exponential) or several (sine on a wide interval, cubic crossing its inflection point). The cubic on a symmetric interval $[-2, 2]$ produces two $c$ values, mirrored around the origin.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Per-c Detail Rows`,
      content: `When there is more than one $c$, the tool lists each in its own row below the cards. Each row shows:

• A small label tag — **c**, or **c₁**, **c₂**, **c₃** when numbered.

• The numerical value of $c$.

• The value of $f'(c)$ at that $c$.

• A reminder of the secant slope, for direct comparison.

The reason these rows matter: the MVT only guarantees at least one $c$, but the actual count depends on how oscillatory or curved the function is on the interval. A cubic on $[-2, 2]$ yields two; a sine on $[0, 2\\pi]$ can yield two as well. Each tangent is drawn on the plot in the same light-blue color, all parallel to the secant — a family of parallel lines that visually confirms the theorem.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel lets you hide individual layers:

• **f(x)** — toggles the function curve.

• **secant** — toggles the deep-blue secant line.

• **tangent at c** — toggles every light-blue tangent line at each $c$. Useful when there are several and you want to focus on just the secant.

• **a, b lines** — toggles the dashed vertical reference lines at the interval endpoints.

Any combination is valid. The legend below the graph updates to show only the visible layers.

The **Accent color** picker at the bottom recolors the highlight throughout the tool — useful for screenshots or personal preference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is the MVT`,
      content: `The **Mean Value Theorem** is one of the central results of differential calculus. It connects the global behavior of a function (its average rate of change over an interval) with its local behavior (its instantaneous rate of change at a single point).

**Statement.** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c$ in $(a, b)$ such that

$$f'(c) = \\frac{f(b) - f(a)}{b - a}.$$

The right side is the slope of the secant line from $(a, f(a))$ to $(b, f(b))$. The left side is the slope of the curve at $c$. The theorem says these two slopes match at some interior point — equivalently, the tangent at $c$ is parallel to the secant.

For the full proof and an extended theoretical treatment, see the **mean value theorem** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `The Speedometer Intuition`,
      content: `The simplest way to internalize the MVT is the driving metaphor.

You drive $100$ kilometers in exactly one hour. Your **average speed** is $100$ km/h. The MVT says that at some instant during the trip, your speedometer read *exactly* $100$ km/h. You cannot average $100$ km/h without hitting $100$ km/h at some moment.

Mapping back: position is $f$, time is $x$, the interval is $[a, b] = [\\text{start}, \\text{end}]$, average speed is the secant slope, and instantaneous speed is $f'(c)$. The MVT guarantees there is a $c$ in the trip where instantaneous speed equals average speed.

This is the reason the theorem deserves the word "value" — at some interior point the rate of change *takes on the value* of the average rate of change. The intuition extends to any quantity that changes over a smooth interval.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Rolle's Theorem`,
      content: `**Rolle&apos;s theorem** is the special case of the MVT when the function&apos;s values at the endpoints are equal.

**Statement.** If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \\in (a, b)$ with $f'(c) = 0$.

The secant slope is zero whenever $f(a) = f(b)$, so the MVT immediately gives $f'(c) = 0$ — a horizontal tangent somewhere inside. To see this in the tool, pick the Quadratic family and set $a = -1$, $b = 1$. Both endpoints give $f = 1$, the secant is horizontal, and the tangent at $c = 0$ is horizontal too.

Rolle&apos;s theorem is the geometric kernel of the MVT, and historically came first. It is also the workhorse behind most existence proofs in calculus: if a function has the same value at two points, its derivative must vanish somewhere between them.

For deeper coverage, see the **Rolle&apos;s theorem** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Derivatives** — the slope of the tangent at $c$. The MVT relates this local quantity to a global quantity (the secant slope). See the **derivative visualizer**.

**Rolle&apos;s theorem** — the special case of the MVT when the endpoint values agree.

**Cauchy mean value theorem** — a generalization to two functions simultaneously. Used to prove L&apos;Hôpital&apos;s rule.

**L&apos;Hôpital&apos;s rule** — for indeterminate limits of the form $0/0$ or $\\infty/\\infty$. A direct application of the Cauchy MVT.

**Increasing and decreasing functions** — the MVT proves that $f' > 0$ on an interval implies $f$ is strictly increasing there. One of the most useful consequences.

**Constant function theorem** — if $f' = 0$ everywhere on an interval, then $f$ is constant. Comes directly from the MVT.

**Antiderivatives** — two antiderivatives of the same function differ by a constant. Proved by the constant function theorem above.

**Visual tools for calculus** — limits, continuity, derivatives, FTC, Riemann sums.`,
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
      question: "What is the Mean Value Theorem?",
      answer: "The Mean Value Theorem says that if a function f is continuous on a closed interval from a to b and differentiable on the open interval inside, then there is at least one point c strictly between a and b where the derivative f prime of c equals the average rate of change of f on the interval. Geometrically, the tangent to the curve at c is parallel to the secant line connecting the two endpoints."
    },
    obj2: {
      question: "What are the hypotheses required for the MVT to apply?",
      answer: "Two conditions: f must be continuous on the closed interval from a to b, and f must be differentiable on the open interior of that interval. Continuity at the endpoints is required, but differentiability is only required strictly between them. Functions with sharp corners or vertical tangents can fail differentiability and dodge the conclusion of the theorem."
    },
    obj3: {
      question: "How is the MVT related to Rolle's theorem?",
      answer: "Rolle's theorem is the special case of the MVT where the function has the same value at both endpoints. The secant slope is then zero, so the MVT guarantees a point c in the interior with derivative zero, meaning a horizontal tangent. Rolle's theorem is historically the first form, and the general MVT is proved from it."
    },
    obj4: {
      question: "Can there be more than one c that satisfies the MVT?",
      answer: "Yes. The theorem only guarantees at least one such c, but a function can have several. For a quadratic on any symmetric interval there is exactly one c at the midpoint. For a cubic on a symmetric interval around its inflection point there are two. For trigonometric functions on a wide enough interval there can be several. The tool finds every c numerically and draws each tangent."
    },
    obj5: {
      question: "Why is the MVT important?",
      answer: "The MVT links the average rate of change of a function over an interval to its instantaneous rate of change at some interior point. It is the engine behind many key results in calculus, including the proof that a function with positive derivative is strictly increasing, the proof that two antiderivatives differ only by a constant, and the proof of L'Hopital's rule for indeterminate limits."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Mean Value Theorem Visualizer",
      "description": "Interactive tool that finds every interior point c where the tangent on f is parallel to the secant from a to b, demonstrating the Mean Value Theorem on six function families.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/mean-value-theorem",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Plot a smooth function with a secant from a to b and tangent at every interior c that satisfies the MVT",
        "Set the interval endpoints a and b with independent sliders",
        "Numerical c-finder that locates every interior solution of f prime of c equals the secant slope",
        "Six function families covering polynomial and transcendental smooth functions",
        "Per-c detail rows showing c, f prime of c, and the matching secant slope",
        "Toggle the function curve, secant, tangents, and endpoint reference lines independently",
        "Accent color picker for the live highlight"
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
      "keywords": "mean value theorem, MVT, mean value theorem calculator, mean value theorem visualizer, Rolles theorem, secant slope, average rate of change, instantaneous rate of change, tangent parallel to secant, f prime equals secant slope, MVT applications, mean value theorem examples, interactive MVT tool, derivative theorem, calculus theorems"
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
          "name": "Mean Value Theorem Visualizer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/mean-value-theorem"
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
        title: "Mean Value Theorem Visualizer | Learn Math Class",
        description: "Visualize the Mean Value Theorem. Set any interval [a, b] and watch the tool find every interior point c where the tangent is parallel to the secant.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/mean-value-theorem",
        name: "Mean Value Theorem Visualizer",
        hubDescription: "Draw a secant between any two points on a smooth curve and the tool finds every interior c where the tangent has matching slope — the parallel-tangent guarantee at the heart of the Mean Value Theorem. Six function families illustrate the single-c, multi-c, and exact-midpoint cases.",
        category: "Derivatives",
        subCategory: ""
      },

    }
  }
}

export default function MeanValueTheoremVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Mean Value Theorem Visualizer</h1>
      <br/>
      <FunctionMVT/>
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