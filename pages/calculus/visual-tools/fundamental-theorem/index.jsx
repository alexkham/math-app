// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionFTC from '../../../../app/components/functions/ftc/FunctionFTC'


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
//         url: "/calculus/visual-tools/fundamental-theorem",
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Fundamental Theorem of Calculus</h1>
//    <br/>
//    <FunctionFTC explanations={explanations}/>
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
import FunctionFTC from '../../../../app/components/functions/ftc/FunctionFTC'
import functionFTCDiagrams from '../../../../app/components/functions/ftc/functionFTCDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'fundamental theorem of calculus',
    'FTC',
    'fundamental theorem of calculus visualizer',
    'definite integral',
    'antiderivative',
    'area under a curve',
    'accumulator function',
    'integral and derivative inverse',
    'F prime equals f',
    'integration and differentiation',
    'definite integral calculator',
    'FTC part 1',
    'FTC part 2',
    'interactive integral tool',
    'signed area integral'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Fundamental Theorem of Calculus (FTC)** — the statement that differentiation and integration are inverse operations. Has two parts: Part 1 says the derivative of an accumulator function equals the integrand; Part 2 gives a way to compute definite integrals using antiderivatives.

**Integrand** — the function $f(t)$ being integrated. The curve whose area you are accumulating.

**Accumulator function** — the function $F(x) = \\int_a^x f(t)\\, dt$. It returns the signed area under $f$ from a fixed lower bound $a$ to the moving upper bound $x$.

**Antiderivative** — any function $G$ with $G'(x) = f(x)$. Antiderivatives differ by a constant; the accumulator is one specific antiderivative pinned by $F(a) = 0$.

**Definite integral** — the signed area $\\int_a^b f(t)\\, dt$. Computed via Part 2 as $G(b) - G(a)$ for any antiderivative $G$.

**Signed area** — area counted positively where $f > 0$ and negatively where $f < 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The page opens with the **Quadratic** family $f(t) = t^2$ loaded, the lower bound $a$ parked at $0$, and the upper bound $x$ at $2$. You see three things together on the graph:

• The solid blue curve of $f$ (the integrand).

• The dashed deep-blue curve of $F$ (the accumulator).

• The shaded region between $f$ and the t-axis from $a$ to $x$.

Two thin vertical lines mark $a$ and $x$ on the t-axis. Marker dots sit on $f$ and $F$ at the upper bound $x$.

The boxed card below the graph displays three numbers: the shaded **area**, the height $F(x)$, and the value $f(x) = F'(x)$. The first two always match. The third is the slope of $F$ at $x$.

To explore quickly, drag the **upper bound x** slider and watch every part of the picture update at once.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Function Families`,
      content: `Six families are organized into two groups in the left panel, each shipped with a closed-form antiderivative.

**Polynomial:**

• **Identity** — $f(t) = t$, $F(x) = x^2/2 - a^2/2$. The simplest case where signed area depends on whether $x > a$ or $x < a$.

• **Quadratic** — $f(t) = t^2$, $F(x) = x^3/3 - a^3/3$. The power rule in its cleanest form.

• **Cubic** — $f(t) = t^3$, $F(x) = x^4/4 - a^4/4$. Odd integrand; useful for seeing how negative regions cancel positive ones.

**Transcendental:**

• **Sine** — $f(t) = \\sin t$, $F(x) = -\\cos x + \\cos a$. Periodic accumulator with bounded swings.

• **Cosine** — $f(t) = \\cos t$, $F(x) = \\sin x - \\sin a$. Same period; accumulator is a sine.

• **Exponential** — $f(t) = e^t$, $F(x) = e^x - e^a$. The accumulator grows the same way the integrand does.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The a and x Sliders`,
      content: `The **lower bound a** slider sets the fixed starting point of integration. By construction $F(a) = 0$ — the accumulator passes through zero exactly at $x = a$. Move $a$ and the whole $F$ curve shifts vertically; the integrand $f$ is unaffected.

The **upper bound x** slider sweeps the moving endpoint:

• The right edge of the shaded region tracks $x$ in real time.

• The marker dots on both curves slide to the new $x$.

• The numeric card updates with the new area, the new $F(x)$, and the new $f(x)$.

Try setting $a = 0$ and dragging $x$ from $0$ rightward. The shaded area grows as $x$ grows, and the height of the $F$ curve climbs by exactly the same amount.

The **Reset** button next to the **Parameters** label restores the family&apos;s default $a$ and $x$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Shaded Area`,
      content: `The shaded region between the integrand $f$ and the t-axis from $a$ to $x$ is the visual heart of the tool. Its signed area is what the definite integral $\\int_a^x f(t)\\, dt$ computes.

A few things to notice as you slide $x$:

• When $f > 0$ on the interval, the shaded area is positive and grows.

• When $f < 0$, the shaded area is negative — the integrand sits below the t-axis, and the integral subtracts that contribution.

• When the integrand crosses zero, the accumulator $F$ momentarily stops growing. A flat spot of $F$ — and a local maximum or minimum — sits exactly there.

• When $a = x$, the shaded region collapses to a single point. Area is zero; $F(a) = 0$ by definition.

• Sliding $x$ to the left of $a$ flips the orientation, and the area enters with the opposite sign.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the At-The-Point Card`,
      content: `The boxed card below the graph displays the three quantities at the moving point $x$:

• **Area** — the signed area of the shaded region from $a$ to $x$. Computed directly as $\\int_a^x f(t)\\, dt$.

• **F(x)** — the height of the accumulator curve at $x$. Computed from the closed-form antiderivative.

• **f(x) = F&apos;(x)** — the value of the integrand at $x$, equal to the slope of $F$ at $x$.

The first two numbers are always equal by construction — that&apos;s how $F$ is defined.

The third number is the punchline of Part 1 of the FTC: the slope of the accumulator at $x$ is exactly the integrand evaluated at $x$. Differentiation undoes integration.

Read the row as you slide: left tells you the area piling up, middle tells you the same area as a height, right tells you how fast that pile is growing.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Display Toggles`,
      content: `The **Display** section in the left panel hides individual layers when one is in the way:

• **f(t)** — toggles the integrand curve. Off, you see just the accumulator and the shaded area outline.

• **F(x)** — toggles the dashed accumulator curve. Off, the picture reduces to a classical **area under f** view without the FTC overlay.

• **area** — toggles the shaded fill. Off, the two function curves remain but the area visualization is gone.

The legend below the graph updates to show only the visible layers.

The **Accent color** picker at the bottom recolors the highlight throughout — slider track, verdict border, key labels — useful for screenshots or personal preference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is the FTC`,
      content: `The **Fundamental Theorem of Calculus** is the bridge between the two central operations of calculus: differentiation (slope of a curve) and integration (area under a curve). It says the two operations are **inverses** of each other.

The theorem has two parts, both essential.

**Part 1** establishes that if you define a function by integrating $f$ from a fixed lower bound up to a moving upper bound, the derivative of that function recovers $f$. Symbolically, if $F(x) = \\int_a^x f(t)\\, dt$, then $F'(x) = f(x)$.

**Part 2** uses Part 1 to give a practical way to compute definite integrals: pick **any** antiderivative $G$ of $f$, and the integral $\\int_a^b f(t)\\, dt$ equals $G(b) - G(a)$.

For full coverage of proofs and applications, see the **fundamental theorem of calculus** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Part 1 - The Accumulator`,
      content: `**FTC Part 1.** If $f$ is continuous on $[a, b]$ and $F(x) = \\int_a^x f(t)\\, dt$ for $x$ in $[a, b]$, then $F$ is differentiable on $(a, b)$ and

$$F'(x) = f(x).$$

The intuition: push $x$ a little further right by $\\Delta x$. The shaded area grows by a thin strip of width $\\Delta x$ and height roughly $f(x)$. So $\\Delta F \\approx f(x) \\cdot \\Delta x$, which means $F'(x) = f(x)$ in the limit.

This is the reason the accumulator is sometimes called the **integral function** — it shows that integration produces a function whose derivative is the original integrand. Differentiation undoes integration, point by point.

In the tool, you can verify this visually. Pick any $x$, note the slope of the $F$ curve there (use the rate at which the dot is climbing), and compare it to the height of $f$ at the same $x$. They match.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Part 2 - Evaluation`,
      content: `**FTC Part 2.** If $f$ is continuous on $[a, b]$ and $G$ is **any** antiderivative of $f$ (so $G'(x) = f(x)$ everywhere on the interval), then

$$\\int_a^b f(t)\\, dt = G(b) - G(a).$$

This is the practical workhorse of integration. Without it, computing a definite integral would mean summing the areas of infinitely many thin rectangles. With it, you find an antiderivative — usually by reversing a differentiation rule — and evaluate at the endpoints.

For example, to compute $\\int_0^2 t^2\\, dt$:

• Find an antiderivative: $G(t) = t^3/3$ works.

• Evaluate at the endpoints: $G(2) - G(0) = 8/3 - 0 = 8/3$.

That&apos;s exactly what the tool reports when you load the Quadratic family with $a = 0$ and $x = 2$.

For deeper coverage of integration techniques and antiderivative tables, see the **integration techniques** page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Definite integrals** — the area under a curve between two specific bounds. The output of the FTC&apos;s Part 2 evaluation.

**Indefinite integrals** — the family of antiderivatives, written $\\int f(x)\\, dx = G(x) + C$. The constant $C$ disappears in any definite integral.

**Riemann sums** — the construction that defines the integral as a limit of rectangle-area sums. The FTC turns this limit into a finite computation. See the **Riemann sum visualizer**.

**Antiderivative rules** — power rule, exponential rule, trig integrals. The reverse direction of the differentiation rules.

**Substitution and integration by parts** — techniques for finding antiderivatives of more complicated integrands.

**Improper integrals** — integrals where the bounds are infinite or the integrand is unbounded. The FTC still applies after a limiting process.

**Derivatives** — the inverse operation. The FTC is the explicit statement of that inverse relationship.

**Visual tools for calculus** — other interactive visualizers covering limits, continuity, derivatives, and Riemann sums.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Identity: Area That Grows Like a Triangle`,
      content: `With $f(t) = t$, $a = 0$ and $x = 2$, the shaded region is a right triangle of base $2$ and height $2$, so its area is $2$ — and the accumulator reads $F(2) = 2$ to match.

Geometry gives the whole answer here without any integration: $F(x) = \frac{1}{2} \cdot x \cdot x = \frac{x^2}{2}$, a parabola. The dashed F curve on the graph is exactly that parabola.`,
      before: ``,
      after: `This family is the cleanest illustration of Part 1. Differentiate the area function and you get $\frac{d}{dx}\left(\frac{x^2}{2}\right) = x$, which is the integrand you started with. The slope of the dashed curve at any $x$ equals the height of the solid one at that same $x$.

It also shows why a straight integrand produces a curved accumulator. Area accrues faster as $x$ grows, because each new sliver is taller than the last — so F bends upward even though f does not.`,
      link: '',
    },
    obj12: {
      title: `Quadratic: the Tool's Opening State`,
      content: `$f(t) = t^2$ from $a = 0$ to $x = 2$. The shaded area works out to

$\int_0^2 t^2\,dt = \frac{2^3}{3} = \frac{8}{3} \approx 2.667$

and $F(2)$ reads the same. Note that $f(2) = 4$ while $F(2) = 2.667$: the two markers sit at different heights, and they are measuring different things.`,
      before: ``,
      after: `That difference is the point most worth pinning down. $f(x)$ is a **height** — how tall the integrand is at $x$. $F(x)$ is an **accumulated area** — everything collected between $a$ and $x$. They share an $x$ and nothing else.

What connects them is the slope. The dashed F curve is steepest where the solid f curve is tallest, and $F'(2) = f(2) = 4$ exactly. Reading the two curves that way — heights on one, slopes on the other — is what makes [Part 1](!#part-1-the-accumulator) visible rather than symbolic.`,
      link: '',
    },
    obj13: {
      title: `Cubic: a Faster Integrand, a Faster Accumulator`,
      content: `$f(t) = t^3$ on $[0, 2]$ gives

$\int_0^2 t^3\,dt = \frac{2^4}{4} = 4$

with $f(2) = 8$. The accumulator is $F(x) = x^4/4$, which climbs steeply once past $x = 1$.`,
      before: ``,
      after: `Integrating raises the degree by one, every time: $t$ accumulates to $x^2/2$, $t^2$ to $x^3/3$, $t^3$ to $x^4/4$. That is the power rule running backwards, and the three polynomial families lay it out in order.

There is a detail the negative side of the graph makes visible. For $x < 0$ the cubic is below the axis, so area accrues *negatively* — yet $F(x) = x^4/4$ is positive there. No contradiction: with $x < 0 = a$ the integral runs backwards, and the two sign reversals cancel. The [signed area](!#the-shaded-area) discussion covers the bookkeeping.`,
      link: '',
    },
    obj14: {
      title: `Sine: an Accumulator That Turns Around`,
      content: `$f(t) = \sin(t)$ from $0$ to $2$. The area comes to

$\int_0^2 \sin(t)\,dt = -\cos(2) + \cos(0) \approx 1.416$

with $f(2) \approx 0.909$. Here $F(x) = 1 - \cos(x)$, a shifted cosine wave.`,
      before: ``,
      after: `The interesting behaviour is just past $x = \pi$. There the sine drops below the axis, each new sliver of area is negative, and the accumulator stops rising and begins to fall — even though it is still positive.

That turning point is Part 1 again, read in reverse: F has a maximum exactly where $f$ crosses zero going downward, because $F' = f$ and a maximum needs $F' = 0$. Every zero of the integrand is a critical point of the accumulator.`,
      link: '',
    },
    obj15: {
      title: `Cosine: Where the Two Curves Swap Roles`,
      content: `$f(t) = \cos(t)$ on $[0, 2]$ accumulates to

$\int_0^2 \cos(t)\,dt = \sin(2) - \sin(0) \approx 0.909$

while $f(2) = \cos(2) \approx -0.416$ — the integrand has already gone negative, though the accumulated total is still comfortably positive.

The accumulator is $F(x) = \sin(x)$, so this family draws a cosine and a sine on the same axes.`,
      before: ``,
      after: `Compare this state against the sine family and the pairing becomes obvious: there the integrand was $\sin$ and the accumulator a shifted $\cos$; here the integrand is $\cos$ and the accumulator is $\sin$. Differentiation and integration walk the same cycle in opposite directions.

The negative readings also make the sign convention concrete. Between $\pi/2$ and $2$ the shaded region lies below the axis and is subtracted, which is why the total of $0.909$ is smaller than the area of the visible region above the axis alone.`,
      link: '',
    },
    obj16: {
      title: `Exponential: Accumulator and Integrand Almost Coincide`,
      content: `$f(t) = e^t$ from $0$ to $2$ gives

$\int_0^2 e^t\,dt = e^2 - 1 \approx 6.389$

against $f(2) = e^2 \approx 7.389$. The two differ by exactly $1$, and they will differ by exactly $1$ at every $x$.`,
      before: ``,
      after: `That is the signature of the exponential. Since $F(x) = e^x - e^0 = e^x - 1$, the accumulator is the integrand shifted down by one unit — the two curves on screen are parallel in the vertical sense, never converging or diverging.

It follows directly from $f' = f$. The only functions whose accumulated area matches their own height, up to a constant, are the exponentials, and the constant here is fixed by the starting point: $F(a) = 0$ always, so at $a = 0$ the offset must be $e^0 = 1$.`,
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
     core's generateSVG - see app/components/functions/frozenSvg.js. All six
     states use the component's defaults: a = 0, x = 2. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: functionFTCDiagrams[key], caption, text })

  const stateUnits = {
    identity: unit('identity', 'Identity, frozen at a = 0, x = 2',
      'The shaded region is a triangle of area 2, and the dashed accumulator passes through height 2 at ' +
      'x = 2. A straight integrand gives a parabolic F.'),
    quadratic: unit('quadratic', 'Quadratic, frozen at a = 0, x = 2',
      'Two markers at different heights on the same vertical: f(2) = 4 is a height, F(2) = 2.667 is an ' +
      'accumulated area. The slope of the dashed curve there is 4, not 2.667.'),
    cubic: unit('cubic', 'Cubic, frozen at a = 0, x = 2',
      'f(2) = 8 with an accumulated area of 4. F(x) = x&#8308;/4 climbs sharply past x = 1, and stays ' +
      'positive on the left of the axis even though the integrand is negative there.'),
    sine: unit('sine', 'Sine, frozen at a = 0, x = 2',
      'Area 1.416 collected so far, with the integrand at 0.909 and falling. Past x = &pi; the shaded ' +
      'slivers go negative and the dashed accumulator turns back down.'),
    cosine: unit('cosine', 'Cosine, frozen at a = 0, x = 2',
      'The integrand has already gone negative at -0.416 while the running total is still +0.909. ' +
      'The accumulator here is exactly sin(x) - the two curves are the familiar pair, swapped.'),
    exponential: unit('exponential', 'Exponential, frozen at a = 0, x = 2',
      'f(2) = 7.389 against F(2) = 6.389 - a gap of exactly 1, and the same gap at every x, because ' +
      'F(x) = e&#739; - 1 is the integrand shifted down one unit.'),
  }


  /* ---- per-family panel notes, passed into the component (Line 1) ----
     FunctionFTC had no explanations prop; one was added additively and defaults
     to null, so the panel is unchanged when nothing is passed. Content is
     markdown - InfoPanel renders it through processContent, so anchors use the
     normal [text](!#slug) form. */
  const note = (body, slug, label) =>
    `### Where this leads\n\n${body} See [${label}](!#${slug}) or compare [all six families](!#the-function-families).`

  const explanations = {
    identity: note('A triangular area, so F is a parabola - the simplest case where geometry alone gives the answer.', 'area-that-grows-like-a-triangle', 'the identity family'),
    quadratic: note('f(x) is a height and F(x) an accumulated area; they share an x and nothing else.', 'the-opening-state', 'the quadratic family'),
    cubic: note('Integrating raises the degree by one, every time.', 'a-faster-integrand', 'the cubic family'),
    sine: note('Once the integrand dips below the axis the accumulator turns around - every zero of f is a critical point of F.', 'an-accumulator-that-turns-around', 'the sine family'),
    cosine: note('Integrand and accumulator swap roles here, which is differentiation and integration walking the same cycle in opposite directions.', 'where-the-curves-swap-roles', 'the cosine family'),
    exponential: note('Accumulator and integrand differ by exactly 1 at every x, which is what f = f&prime; forces.', 'accumulator-and-integrand-coincide', 'the exponential family'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is the Fundamental Theorem of Calculus?",
      answer: "The Fundamental Theorem of Calculus is the statement that differentiation and integration are inverse operations. It has two parts: the first says that the derivative of an accumulator function recovers the integrand, and the second says that a definite integral can be evaluated by finding any antiderivative and subtracting its values at the two endpoints."
    },
    obj2: {
      question: "What does F prime of x equals f of x mean geometrically?",
      answer: "It means the slope of the accumulator curve F at any point x is exactly the height of the integrand curve f at that same x. Where f is positive, F climbs. Where f is zero, F is flat. Where f is large, F climbs steeply. The two curves are linked: one is the running area, the other is the rate at which that area is being added."
    },
    obj3: {
      question: "How do you compute a definite integral using the FTC?",
      answer: "Find any antiderivative G of the integrand f, then evaluate G at the upper bound and subtract its value at the lower bound. The result is the definite integral from the lower bound to the upper bound. For example, to integrate t squared from zero to two, take the antiderivative t cubed over three and compute eight over three minus zero, which gives eight over three."
    },
    obj4: {
      question: "What is the difference between Part 1 and Part 2 of the FTC?",
      answer: "Part 1 builds a new function as the accumulated integral and proves that its derivative is the original integrand. Part 2 goes the other direction: it uses Part 1 to compute the value of a specific definite integral by evaluating any antiderivative at the two endpoints. Part 1 is the theoretical link; Part 2 is the practical evaluation tool."
    },
    obj5: {
      question: "Why is the FTC important?",
      answer: "Without the FTC, computing a definite integral would require summing infinitely many thin rectangles, which is impractical. The FTC reduces this to finding a single antiderivative and evaluating at two points. It also explains why integration and differentiation are studied together: they are not separate topics but two sides of one operation."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Fundamental Theorem of Calculus Visualizer",
      "description": "Interactive tool that plots a function alongside its integral accumulator and the shaded area between them, demonstrating both halves of the Fundamental Theorem of Calculus.",
      "url": "https://www.learnmathclass.com/calculus/visual-tools/fundamental-theorem",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Plot an integrand alongside its accumulator F equal to the integral from a to x of f",
        "Shaded region under the integrand updates in real time as the upper bound x moves",
        "Separate sliders for the lower bound a and the moving upper bound x",
        "Six function families with closed-form antiderivatives covering polynomial and transcendental cases",
        "Numeric card showing the signed area, the value of F at x, and the slope F prime at x",
        "Toggle the integrand, the accumulator, and the shaded area independently",
        "Live demonstration that F prime of x equals f of x at every point"
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
      "keywords": "fundamental theorem of calculus, FTC, fundamental theorem of calculus visualizer, definite integral, antiderivative, area under a curve, accumulator function, integral and derivative inverse, F prime equals f, integration and differentiation, definite integral calculator, FTC part 1, FTC part 2, interactive integral tool, signed area integral"
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
          "name": "Fundamental Theorem of Calculus Visualizer",
          "item": "https://www.learnmathclass.com/calculus/visual-tools/fundamental-theorem"
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
        title: "Fundamental Theorem of Calculus Tool | Learn Math Class",
        description: "Visualize the Fundamental Theorem of Calculus. Slide x to grow the shaded area under f and watch F(x) and the slope F-prime equal to f update live.",
        keywords: keyWords.join(", "),
        url: "/calculus/visual-tools/fundamental-theorem",
        name: "Fundamental Theorem of Calculus Visualizer",
        hubDescription: "See both halves of the Fundamental Theorem of Calculus on one graph — slide x to grow the shaded area under f and watch the accumulator F match the area exactly, while the slope of F at every x equals f at the same point.",
        category: "Integrals",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 14 62 L 14 52 Q 34.47 23.35 54 23.55 L 54 62 Z" fill="#FAC775" fill-opacity="0.5"/><path d="M 14 52 Q 44 10 72 30" fill="none" stroke="#FAC775" stroke-width="1.8"/><line x1="54" y1="62" x2="54" y2="23.55" stroke="#854F0B" stroke-width="1.3"/><line x1="10" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="1"/><text x="54" y="70" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">x</text><text x="40" y="78" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">A&#8242;(x) = f(x)</text></svg>`
      },

    }
  }
}

export default function FTCVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    stateRow('obj11', 'area-that-grows-like-a-triangle', 'identity'),
    stateRow('obj12', 'the-opening-state', 'quadratic'),
    stateRow('obj13', 'a-faster-integrand', 'cubic'),
    stateRow('obj14', 'an-accumulator-that-turns-around', 'sine'),
    stateRow('obj15', 'where-the-curves-swap-roles', 'cosine'),
    stateRow('obj16', 'accumulator-and-integrand-coincide', 'exponential'),
    plain('obj3', 'the-a-and-x-sliders'),
    plain('obj4', 'the-shaded-area'),
    plain('obj5', 'the-at-the-point-card'),
    plain('obj6', 'display-toggles'),
    plain('obj7', 'what-is-the-ftc'),
    plain('obj8', 'part-1-the-accumulator'),
    plain('obj9', 'part-2-evaluation'),
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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Fundamental Theorem of Calculus</h1>
      <br/>
      <FunctionFTC explanations={explanations}/>
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