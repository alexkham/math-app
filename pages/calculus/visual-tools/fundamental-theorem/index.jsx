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
//    <FunctionFTC/>
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

• **F(x)** — toggles the dashed accumulator curve. Off, the picture reduces to a classical *area under f* view without the FTC overlay.

• **area** — toggles the shaded fill. Off, the two function curves remain but the area visualization is gone.

The legend below the graph updates to show only the visible layers.

The **Accent color** picker at the bottom recolors the highlight throughout — slider track, verdict border, key labels — useful for screenshots or personal preference.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is the FTC`,
      content: `The **Fundamental Theorem of Calculus** is the bridge between the two central operations of calculus: differentiation (slope of a curve) and integration (area under a curve). It says the two operations are *inverses* of each other.

The theorem has two parts, both essential.

**Part 1** establishes that if you define a function by integrating $f$ from a fixed lower bound up to a moving upper bound, the derivative of that function recovers $f$. Symbolically, if $F(x) = \\int_a^x f(t)\\, dt$, then $F'(x) = f(x)$.

**Part 2** uses Part 1 to give a practical way to compute definite integrals: pick *any* antiderivative $G$ of $f$, and the integral $\\int_a^b f(t)\\, dt$ equals $G(b) - G(a)$.

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

This is the reason the accumulator is sometimes called the *integral function* — it shows that integration produces a function whose derivative is the original integrand. Differentiation undoes integration, point by point.

In the tool, you can verify this visually. Pick any $x$, note the slope of the $F$ curve there (use the rate at which the dot is climbing), and compare it to the height of $f$ at the same $x$. They match.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Part 2 - Evaluation`,
      content: `**FTC Part 2.** If $f$ is continuous on $[a, b]$ and $G$ is *any* antiderivative of $f$ (so $G'(x) = f(x)$ everywhere on the interval), then

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
        subCategory: ""
      },

    }
  }
}

export default function FTCVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Fundamental Theorem of Calculus</h1>
      <br/>
      <FunctionFTC/>
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