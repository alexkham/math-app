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
//    <FunctionMVT explanations={explanations}/>
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
import functionMVTDiagrams from '../../../../app/components/functions/mvt/functionMVTDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


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

You drive $100$ kilometers in exactly one hour. Your **average speed** is $100$ km/h. The MVT says that at some instant during the trip, your speedometer read **exactly** $100$ km/h. You cannot average $100$ km/h without hitting $100$ km/h at some moment.

Mapping back: position is $f$, time is $x$, the interval is $[a, b] = [\\text{start}, \\text{end}]$, average speed is the secant slope, and instantaneous speed is $f'(c)$. The MVT guarantees there is a $c$ in the trip where instantaneous speed equals average speed.

This is the reason the theorem deserves the word "value" — at some interior point the rate of change **takes on the value** of the average rate of change. The intuition extends to any quantity that changes over a smooth interval.`,
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
      title: `Identity: Every Point Is a c`,
      content: `$f(x) = x$ on $[-2, 2]$. The endpoints are $(-2, -2)$ and $(2, 2)$, so the secant slope is

$m = \frac{2 - (-2)}{2 - (-2)} = 1$

and $f'(x) = 1$ everywhere. The theorem asks for a point where $f'(c) = m$, and here **every** point in the interval qualifies.`,
      before: ``,
      after: `The MVT promises *at least one* $c$, never exactly one, and this family is the reason that wording matters. The tool's solver reports several hundred solutions on this interval — one per sample step — because there is genuinely no place where the condition fails.

Geometrically the secant, the curve and every tangent are the same line, which is why the picture looks so bare. A straight function has nothing to deviate from its own average rate, so the "somewhere the instantaneous rate equals the average rate" guarantee is satisfied trivially and everywhere at once.`,
      link: '',
    },
    obj12: {
      title: `Quadratic: Rolle's Theorem in Disguise`,
      content: `$f(x) = x^2$ on $[-2, 2]$. Because the parabola is symmetric about the origin, the two endpoint heights are equal — $f(-2) = f(2) = 4$ — so the secant is horizontal:

$m = \frac{4 - 4}{2 - (-2)} = 0$

Solving $f'(c) = 2c = 0$ gives the single solution $c = 0$.`,
      before: ``,
      after: `Equal endpoint values is exactly the hypothesis of [Rolle's theorem](!#rolles-theorem), which is the special case of the MVT where $f(a) = f(b)$ and the conclusion becomes $f'(c) = 0$. This family is the MVT and Rolle's theorem being the same statement.

The location of $c$ is not a coincidence either. For any interval $[a, b]$ on a parabola, the mean value point is the midpoint $\frac{a+b}{2}$ — a property of quadratics specifically, not something the theorem promises in general. Drag the endpoints and watch $c$ track the middle.`,
      link: '',
    },
    obj13: {
      title: `Cubic: Two Solutions at Once`,
      content: `$f(x) = x^3$ on $[-2, 2]$ runs from $-8$ to $8$, so

$m = \frac{8 - (-8)}{4} = 4$

Solving $f'(c) = 3c^2 = 4$ gives $c = \pm\frac{2}{\sqrt{3}} \approx \pm 1.1547$ — two solutions, both inside the interval, and the tool draws a tangent at each.`,
      before: ``,
      after: `Two parallel tangents, one on either side of the origin, both matching the secant's slope of 4. This is the clearest demonstration that the theorem's "at least one" is not merely cautious phrasing.

Between the two solutions the curve is shallower than the secant — at the origin the tangent is flat — and outside them it is steeper. The mean rate of 4 gets attained on the way down to that flat spot and again on the way back up.`,
      link: '',
    },
    obj14: {
      title: `Sine: a Full Period With a Flat Secant`,
      content: `$f(x) = \sin(x)$ on $[0, 2\pi]$ starts and ends at zero, so the secant is horizontal again:

$m = \frac{0 - 0}{2\pi} = 0$

Solving $\cos(c) = 0$ on $(0, 2\pi)$ gives $c = \frac{\pi}{2} \approx 1.5708$ and $c = \frac{3\pi}{2} \approx 4.7124$ — the peak and the trough.`,
      before: ``,
      after: `Another Rolle's-theorem configuration, and the two solutions are precisely the turning points of the wave. That is what a horizontal tangent means for a sine: nothing else on a full period has zero slope.

The lesson worth carrying is about the net-versus-total distinction. The function travels up to 1, down to $-1$ and back, yet its average rate of change over the interval is exactly zero, because average rate only ever compares the endpoints. All that motion cancels in the numerator.`,
      link: '',
    },
    obj15: {
      title: `Cosine: a Secant That Is Not Flat`,
      content: `$f(x) = \cos(x)$ on $[0, \pi]$ falls from $1$ to $-1$, so this time the secant genuinely slopes:

$m = \frac{-1 - 1}{\pi} = -\frac{2}{\pi} \approx -0.6366$

Solving $-\sin(c) = -\frac{2}{\pi}$ gives two solutions, $c \approx 0.6901$ and $c \approx 2.4515$, placed symmetrically about $\frac{\pi}{2}$.`,
      before: ``,
      after: `This is the first family where the tangents are visibly tilted rather than horizontal, which makes the actual claim of the theorem easier to see: three parallel lines, one secant and two tangents, all at slope $-0.64$.

The symmetry of the two solutions about the midpoint reflects the symmetry of $\sin$ about $\frac{\pi}{2}$ on this interval. The cosine descends fastest at the middle and more gently at both ends, so the average steepness is achieved once on the way in and once on the way out.`,
      link: '',
    },
    obj16: {
      title: `Exponential: Where the Average Rate Is Attained`,
      content: `$f(x) = e^x$ on $[0, 1]$ climbs from $1$ to $e$, so

$m = \frac{e - 1}{1} \approx 1.7183$

Since $f' = f$, solving $e^c = e - 1$ gives $c = \ln(e - 1) \approx 0.5413$ — a single solution, slightly right of the midpoint.`,
      before: ``,
      after: `That offset is the interesting part. For the parabola the mean value point sat exactly at the midpoint; here it does not, and it never will. Because $e^x$ is convex, the function spends more of the interval below its average slope and less above it, which pushes the crossing point past the middle.

The value $\ln(e - 1)$ also has a neat reading: it is the point where the height of the curve equals the average rate of change across the whole interval — a coincidence available only to a function that is its own derivative.`,
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
     core's generateSVG - see app/components/functions/frozenSvg.js. Each state
     uses that family's own defaultInterval and the c values the tool's solver
     returns for it. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionMVTDiagrams[key], caption, text })

  const stateUnits = {
    identity: unit('identity', 'Identity on [-2, 2], frozen',
      'Secant, curve and tangents all coincide, because f&prime; is 1 everywhere and the secant slope is ' +
      'also 1. The solver returns hundreds of valid c values here; the frozen picture keeps four of them, ' +
      'which looks identical since every tangent is the same line.'),
    quadratic: unit('quadratic', 'Quadratic on [-2, 2], frozen',
      'Equal endpoint heights make the secant horizontal, so the single tangent at c = 0 is horizontal too. ' +
      'This is the Rolle configuration.'),
    cubic: unit('cubic', 'Cubic on [-2, 2], frozen',
      'Three parallel lines at slope 4: the secant, plus tangents at c = -1.1547 and c = +1.1547. ' +
      'Two solutions, both drawn.'),
    sine: unit('sine', 'Sine on [0, 2&pi;], frozen',
      'A full period returns to its starting height, so the secant is flat and the two tangents sit at the ' +
      'crest and the trough - c = &pi;/2 and c = 3&pi;/2.'),
    cosine: unit('cosine', 'Cosine on [0, &pi;], frozen',
      'The first family with a genuinely tilted secant, at slope -0.6366. The two tangents are parallel to ' +
      'it, placed symmetrically about the midpoint.'),
    exponential: unit('exponential', 'Exponential on [0, 1], frozen',
      'One tangent, at c = 0.5413, matching the secant slope e - 1 = 1.7183. Note it sits right of the ' +
      'interval midpoint rather than on it.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionMVT had no explanations prop; one was added additively and defaults
     to null, so the panel is unchanged when nothing is passed. Content is
     markdown - InfoPanel renders it through processContent, so anchors use the
     normal [text](!#slug) form. */
  const note = (body, slug, label) =>
    `### Where this leads\n\n${body} See [${label}](!#${slug}) or compare [all six families](!#the-function-families).`

  const explanations = {
    identity: note('A constant derivative means every point of the interval satisfies the theorem at once.', 'every-point-is-a-c', 'the identity family'),
    quadratic: note('Equal endpoint values make this the Rolle case, with c at the midpoint.', 'rolles-theorem-in-disguise', 'the quadratic family'),
    cubic: note('Two values of c satisfy the condition here, which is why the theorem says at least one.', 'two-solutions-at-once', 'the cubic family'),
    sine: note('A full period has a flat secant, and the two solutions are the crest and the trough.', 'a-full-period', 'the sine family'),
    cosine: note('A tilted secant with two parallel tangents - the theorem in its least degenerate form.', 'a-secant-that-is-not-flat', 'the cosine family'),
    exponential: note('One solution, and it sits right of the midpoint because the exponential is convex.', 'where-the-average-rate-is-attained', 'the exponential family'),
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
      stateUnits,
      explanations,
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
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="0.9"/><line x1="12" y1="8" x2="12" y2="64" stroke="#B5D4F4" stroke-width="0.9"/><path d="M 16 56 Q 43 14 70 14" fill="none" stroke="#85B7EB" stroke-width="1.8"/><line x1="20" y1="50" x2="64" y2="14.52" stroke="#FAC775" stroke-width="1.6" stroke-dasharray="3,2"/><line x1="30" y1="34.96" x2="56" y2="14.01" stroke="#97C459" stroke-width="1.8"/><circle cx="20" cy="50" r="2.6" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="64" cy="14.52" r="2.6" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="42" cy="25.29" r="3.2" fill="#97C459" stroke="#27500A" stroke-width="1.2"/><text x="42" y="72" font-family="Georgia,serif" font-size="8" fill="#C0DD97" text-anchor="middle" font-style="italic">c</text><text x="68" y="42" font-family="Georgia,serif" font-size="10" fill="#C0DD97" text-anchor="middle">&#8741;</text></svg>`
      },

    }
  }
}

export default function MeanValueTheoremVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    stateRow('obj11', 'every-point-is-a-c', 'identity'),
    stateRow('obj12', 'rolles-theorem-in-disguise', 'quadratic'),
    stateRow('obj13', 'two-solutions-at-once', 'cubic'),
    stateRow('obj14', 'a-full-period', 'sine'),
    stateRow('obj15', 'a-secant-that-is-not-flat', 'cosine'),
    stateRow('obj16', 'where-the-average-rate-is-attained', 'exponential'),
    plain('obj3', 'the-a-and-b-sliders'),
    plain('obj4', 'the-three-result-cards'),
    plain('obj5', 'the-per-c-detail-rows'),
    plain('obj6', 'display-toggles'),
    plain('obj7', 'what-is-the-mvt'),
    plain('obj8', 'the-speedometer-intuition'),
    plain('obj9', 'rolles-theorem'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Mean Value Theorem Visualizer</h1>
      <br/>
      <FunctionMVT explanations={explanations}/>
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