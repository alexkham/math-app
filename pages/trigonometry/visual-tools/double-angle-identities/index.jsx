// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import DoubleAngleExplorer from '../../../../app/components/trigonometry/identities/double-angle/DoubleAngleExplorer'
// import SiblingsNav from '../../../../app/components/SiblingsNav'



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
//         url: "/trigonometry/visual-tools/double-angle-identities",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     // {
//     //     id:'0',
//     //     title:sectionsContent.obj0.title,
//     //     link:sectionsContent.obj0.link,
//     //     content:[
//     //       sectionsContent.obj0.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'20px'}}>Double Angle Trigonometric Identities</h1>
//    <br/>
//    <SiblingsNav
//       bg="#fafaf7"
//   color="#2c5d99"
//   activeColor="#143a66"
//   activeBg="#dde9f7"
//    >
//    <DoubleAngleExplorer/>
//    </SiblingsNav>
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
import DoubleAngleExplorer from '../../../../app/components/trigonometry/identities/double-angle/DoubleAngleExplorer'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import SiblingsNavStandalone from '../../../../app/components/SiblingsNavStandalone'
import doubleAngleDiagrams from '../../../../app/components/trigonometry/identities/double-angle/doubleAngleDiagrams'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'



export async function getStaticProps(){

  const keyWords = [
    'double angle identities',
    'double angle formulas',
    'sin 2 theta identity',
    'cos 2 theta identity',
    'tan 2 theta identity',
    'csc 2 theta',
    'sec 2 theta',
    'cot 2 theta',
    'double angle proof',
    'trigonometric identities visualizer',
    'interactive double angle',
    'derive double angle formulas',
    'trig identity calculator',
    'isosceles triangle bisector proof',
    'double angle geometric proof'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Double-angle identity** — a formula expressing a trig function of $2\\theta$ in terms of trig functions of $\\theta$.
• **Geometric proof** — a derivation that uses a drawing (an isosceles triangle, two radii, a bisector) rather than algebra.
• **Bisector** — a line that splits an angle into two equal halves. In this tool, $OM$ bisects the apex angle $2\\theta$.
• **Reciprocal identity** — a function written as $1/\\text{(another function)}$. $\\csc = 1/\\sin$, $\\sec = 1/\\cos$, $\\cot = 1/\\tan$.
• **Derived identity** — one obtained by combining or rearranging others. $\\tan(2\\theta)$, $\\csc(2\\theta)$, $\\sec(2\\theta)$, $\\cot(2\\theta)$ all follow from the formulas for $\\sin(2\\theta)$ and $\\cos(2\\theta)$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`A row of six tabs at the top lets you select which double-angle identity to study: $\\sin(2\\theta)$, $\\cos(2\\theta)$, $\\tan(2\\theta)$, $\\csc(2\\theta)$, $\\sec(2\\theta)$, $\\cot(2\\theta)$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the [geometric proof](!#geometric-proofs-sin2-and-cos2) scene with a step-by-step animation.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the [derived identity card](!#derived-identities-tan2-csc2-sec2-cot2) with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?fn=...$, so links you copy preserve the selected function.

You can also click any row of the **formula table** at the bottom to jump directly to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle θ`,
      content:`Each view exposes a slider for the base angle $\\theta$ in degrees, between $10°$ and $80°$.

What changes as you slide:
• On geometric scenes, the SVG triangle resizes and reshapes in real time.
• The number readout next to the slider shows the exact degree value.
• The verification cards at the bottom recompute both sides of the identity using the new $\\theta$.

Slow sweeps near $45°$ are useful for seeing how the relationships behave in the most symmetric case, while values near the extremes ($10°$ or $80°$) show how the same identities still hold for narrow and wide triangles.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Playing Through a Geometric Proof`,
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in [six steps](!#sine-proof-step-1-setup). A toolbar gives you control:

• **Reset** — return to step 0 with a blank scene.
• **Prev** / **Next** — step through one stage at a time.
• **Play** / **Pause** — advance automatically.
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, or $2\\times$.

Each step adds one geometric element (radii, triangle fill, bisector, half-angles, leg labels, final metrics). The right-hand panel logs each step's name and rationale, so you can stop and re-read at any point.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two radii $OA$ and $OB$ of length $1$ meeting at the center $O$ with angle $2\\theta$ between them.

Elements that appear across the steps:
• **Red arc** at $O$ — the apex angle, labeled $C = 2\\theta$.
• **Indigo chord** $AB$ — the base of the isosceles triangle.
• **Blue segment** $OM$ — the [perpendicular bisector](!#sine-proof-step-3-bisect), equal to $\\cos\\theta$.
• **Half-angles** at $O$ — each labeled $\\theta$ once the bisector is drawn.
• **Half-chord labels** — each labeled $\\sin\\theta$ on segments $MA$ and $MB$.

A small right-angle mark appears at $M$ when the perpendicular bisector becomes visible.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan(2\\theta)$, $\\csc(2\\theta)$, $\\sec(2\\theta)$, or $\\cot(2\\theta)$ opens a different card layout. Instead of a triangle, the page shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which earlier identity the current one rests on.
• **Jump buttons** link directly to the [geometric proofs](!#geometric-proofs-sin2-and-cos2) of the source identities.
• A multi-line derivation block shows each manipulation with a brief side note.
• Verification cards confirm both sides match numerically.

This split keeps the geometric ideas isolated to two functions and treats the other four as quick algebraic consequences.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six identities at once:

• **Function** column — the name of the trig function with $2\\theta$ argument.
• **Identity** column — the right-hand side of the formula.
• **Value** column — the numeric value computed at the current $\\theta$.
• **Source** column — labels each identity as **geometric** ($\\sin$, $\\cos$) or **via X** for derived ones.

Click any row to make that function active. The current selection gets a deep-blue left border and a tinted background, making it easy to track context.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards near the bottom that compute both sides of the active identity at the current $\\theta$.

Example for $\\sin(2\\theta)$:
• Left card shows $\\sin(2\\theta)$.
• Right card shows $2\\sin\\theta\\cos\\theta$.

The two numbers always match (within rounding to three decimals). Sweeping the slider while watching the cards is a fast empirical check that the identity holds for every angle, not just the one in the picture. The formula table mirrors this behavior across all six functions simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proofs: sin(2θ) and cos(2θ)`,
      content:`The two foundational identities are proved by drawing an isosceles triangle with two unit radii.

[sin(2θ) = 2 sin θ cos θ](!#the-sine-double-angle-identity) — area is computed two ways:
$$\\text{area} = \\tfrac{1}{2}\\sin(2\\theta) = \\sin\\theta\\cos\\theta$$
Multiplying by $2$ gives the identity.

[cos(2θ) = 1 - 2 sin²θ](!#the-cosine-double-angle-identity) — the law of cosines gives $|AB|^2 = 2 - 2\\cos(2\\theta)$, while the half-chord computation gives $|AB|^2 = 4\\sin^2\\theta$. Equating the two yields the result.

For full coverage of these proofs and equivalent forms, see the **double angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan(2θ), csc(2θ), sec(2θ), cot(2θ)`,
      content:`The four remaining identities follow directly from the first two:

[tan(2θ)](!#the-tangent-double-angle-identity) — from $\\tan = \\sin / \\cos$:
$$\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$

[csc(2θ)](!#the-cosecant-double-angle-identity) — reciprocal of $\\sin(2\\theta)$:
$$\\csc(2\\theta) = \\frac{1}{2\\sin\\theta\\cos\\theta}$$

[sec(2θ)](!#the-secant-double-angle-identity) — reciprocal of $\\cos(2\\theta)$:
$$\\sec(2\\theta) = \\frac{1}{1 - 2\\sin^2\\theta}$$

[cot(2θ)](!#the-cotangent-double-angle-identity) — reciprocal of $\\tan(2\\theta)$:
$$\\cot(2\\theta) = \\frac{1 - \\tan^2\\theta}{2\\tan\\theta}$$

For step-by-step derivations of each, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Double-Angle Identities Matter`,
      content:`Double-angle identities show up across mathematics and physics:

• **Integration** — $\\sin^2\\theta$ and $\\cos^2\\theta$ become integrable after substituting $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ or $2\\cos^2\\theta - 1$.
• **Equation solving** — equations mixing $\\sin\\theta$ with $\\sin(2\\theta)$ collapse to single-angle equations after substitution.
• **Wave physics and signal processing** — sums of sinusoids reduce via these formulas, separating frequency components.
• **Geometry and circular motion** — relating arc, chord, and apothem in regular polygons uses $\\sin(2\\theta)$ and $\\cos(2\\theta)$ directly.

For applications and worked examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Pythagorean Identities** — $\\sin^2\\theta + \\cos^2\\theta = 1$ and its companions.
• **Sum and Difference Identities** — $\\sin(\\alpha \\pm \\beta)$ and $\\cos(\\alpha \\pm \\beta)$, from which double-angle identities follow as the case $\\alpha = \\beta$.
• **Half-Angle Identities** — solve the double-angle formulas backward to express $\\sin(\\theta/2)$ and $\\cos(\\theta/2)$.
• **Unit Circle** — geometric setup for every identity in this tool.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as $\\theta$ varies.
• **Triangle Explorer** — interactive triangles with built-in law of sines and law of cosines.`,
      before:``,
      after:``,
      link:'',
    },

    obj12:{
      title:`The Sine Double-Angle Identity`,
      content:`The identity $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ is proved geometrically in the explorer by computing the area of one isosceles triangle two different ways.`,
      before:``,
      after:`The proof runs through six stages: [setup](!#sine-proof-step-1-setup), [area the first way](!#sine-proof-step-2-area-first-way), [bisect](!#sine-proof-step-3-bisect), [read off the legs](!#sine-proof-step-4-read-off-the-legs), [area the second way](!#sine-proof-step-5-area-second-way), and [equate](!#sine-proof-step-6-equate).

This identity is the source of two others in the tool: [cosecant's](!#the-cosecant-double-angle-identity) formula is its reciprocal, and [tangent's](!#the-tangent-double-angle-identity) numerator comes from it.`,
      link:'',
    },
    obj13:{
      title:`The Cosine Double-Angle Identity`,
      content:`The identity $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$ falls out of measuring the chord $AB$ two ways — once by the law of cosines, once through the half-chords.`,
      before:``,
      after:`The proof's six stages: [setup](!#cosine-proof-step-1-setup), [law of cosines](!#cosine-proof-step-2-law-of-cosines-on-triangle-oab), [bisect](!#cosine-proof-step-3-bisect), [read off the half-chord](!#cosine-proof-step-4-read-off-the-half-chord), [square the chord](!#cosine-proof-step-5-square-the-chord), and [equate](!#cosine-proof-step-6-equate).

Substituting $\\sin^2\\theta = 1 - \\cos^2\\theta$ gives the equivalent forms $2\\cos^2\\theta - 1$ and $\\cos^2\\theta - \\sin^2\\theta$. In the tool, [secant's](!#the-secant-double-angle-identity) identity is this one inverted, and [tangent's](!#the-tangent-double-angle-identity) denominator comes from it.`,
      link:'',
    },
    obj14:{
      title:`The Tangent Double-Angle Identity`,
      content:`Tangent needs no new geometry: it is sine over cosine, so its double-angle formula follows algebraically from the two proved identities.`,
      before:``,
      after:`$$\\tan(2\\theta) = \\frac{\\sin(2\\theta)}{\\cos(2\\theta)} = \\frac{2\\sin\\theta\\cos\\theta}{\\cos^2\\theta - \\sin^2\\theta} = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$

The last step divides numerator and denominator by $\\cos^2\\theta$ — the move that turns a sine-and-cosine expression into a pure tangent one. The formula fails where $\\tan\\theta = \\pm 1$ ($\\theta = 45°$), exactly where $2\\theta = 90°$ makes $\\tan(2\\theta)$ undefined. Its own reciprocal gives [cotangent's](!#the-cotangent-double-angle-identity) formula; its ingredients come from [sine](!#the-sine-double-angle-identity) and [cosine](!#the-cosine-double-angle-identity).`,
      link:'',
    },
    obj15:{
      title:`The Cosecant Double-Angle Identity`,
      content:`Cosecant is the reciprocal of sine, so its double-angle formula is one substitution away from the geometric result.`,
      before:``,
      after:`$$\\csc(2\\theta) = \\frac{1}{\\sin(2\\theta)} = \\frac{1}{2\\sin\\theta\\cos\\theta}$$

The formula is undefined wherever $\\sin(2\\theta) = 0$ — within the tool's $10°$–$80°$ slider range that never happens, so the verification cards always agree. The source identity is [sine's](!#the-sine-double-angle-identity), reachable from the card's jump button.`,
      link:'',
    },
    obj16:{
      title:`The Secant Double-Angle Identity`,
      content:`Secant inverts cosine, so the double-angle version inverts the cosine identity.`,
      before:``,
      after:`$$\\sec(2\\theta) = \\frac{1}{\\cos(2\\theta)} = \\frac{1}{1 - 2\\sin^2\\theta}$$

It diverges where $\\cos(2\\theta) = 0$, i.e. at $\\theta = 45°$ — sweep the slider there and watch both verification cards blow up together, which is itself a check that the two sides agree. The source identity is [cosine's](!#the-cosine-double-angle-identity).`,
      link:'',
    },
    obj17:{
      title:`The Cotangent Double-Angle Identity`,
      content:`Cotangent is the reciprocal of tangent, so its formula is the tangent identity flipped upside down.`,
      before:``,
      after:`$$\\cot(2\\theta) = \\frac{1}{\\tan(2\\theta)} = \\frac{1 - \\tan^2\\theta}{2\\tan\\theta}$$

Flipping exchanges the roles of the zeros and the poles: cotangent diverges where [tangent](!#the-tangent-double-angle-identity) is zero and vanishes where tangent diverges. Because tangent itself was derived, cotangent sits two steps from the geometry — resting ultimately on [sine](!#the-sine-double-angle-identity) and [cosine](!#the-cosine-double-angle-identity).`,
      link:'',
    },
    obj18:{
      title:`Sine Proof, Step 1: Setup`,
      content:`The [sine proof](!#the-sine-double-angle-identity) opens with two radii $OA$ and $OB$ of length $1$ meeting at the center $O$ with angle $2\\theta$ between them. Together with the chord $AB$ they form an isosceles triangle.`,
      before:``,
      after:`Everything the proof needs is already in this picture: a triangle whose apex angle is the double angle we want, built from sides whose length we know exactly.`,
      link:'',
    },
    obj19:{
      title:`Sine Proof, Step 2: Area, First Way`,
      content:`The triangle's area comes from the standard formula: half the product of two sides times the sine of the included angle. With $OA = OB = 1$ meeting at $2\\theta$:`,
      before:``,
      after:`$$\\text{area} = \\tfrac{1}{2} \\cdot 1 \\cdot 1 \\cdot \\sin(2\\theta) = \\tfrac{1}{2}\\sin(2\\theta)$$

This is the left-hand side of the identity in disguise — one honest measurement of the shaded region.`,
      link:'',
    },
    obj20:{
      title:`Sine Proof, Step 3: Bisect`,
      content:`Drop $OM$ perpendicular to the chord $AB$. Because the triangle is isosceles, $OM$ bisects the apex: two half-angles of $\\theta$ at $O$, and two congruent right triangles.`,
      before:``,
      after:`The small square at $M$ marks the right angle — the key that unlocks the next step, since right triangles are where $\\sin\\theta$ and $\\cos\\theta$ live as plain side lengths.`,
      link:'',
    },
    obj21:{
      title:`Sine Proof, Step 4: Read Off the Legs`,
      content:`In right triangle $OMA$ the hypotenuse is $OA = 1$ and the angle at $O$ is $\\theta$. Its legs are therefore exactly the basic ratios:`,
      before:``,
      after:`$$MA = \\sin\\theta \\qquad OM = \\cos\\theta$$

No approximation, no extra construction — with a unit hypotenuse, opposite and adjacent legs ARE sine and cosine.`,
      link:'',
    },
    obj22:{
      title:`Sine Proof, Step 5: Area, Second Way`,
      content:`Each right triangle has legs $\\sin\\theta$ and $\\cos\\theta$, so each has area $\\tfrac{1}{2}\\sin\\theta\\cos\\theta$. The two congruent halves together give:`,
      before:``,
      after:`$$\\text{area} = 2 \\cdot \\tfrac{1}{2}\\sin\\theta\\cos\\theta = \\sin\\theta\\cos\\theta$$

The same shaded region as [step 2](!#sine-proof-step-2-area-first-way), measured a second, independent way.`,
      link:'',
    },
    obj23:{
      title:`Sine Proof, Step 6: Equate`,
      content:`Two measurements of one area must agree:`,
      before:``,
      after:`$$\\tfrac{1}{2}\\sin(2\\theta) = \\sin\\theta\\cos\\theta \\;\\;\\Longrightarrow\\;\\; \\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$$

The verification cards below the scene confirm it numerically at every slider position — both sides always match to three decimals.`,
      link:'',
    },
    obj24:{
      title:`Cosine Proof, Step 1: Setup`,
      content:`The [cosine proof](!#the-cosine-double-angle-identity) starts from the same figure as sine's: radii $OA$ and $OB$ of length $1$ with apex angle $2\\theta$ at the center.`,
      before:``,
      after:`This time the target of the measurement will not be the triangle's area but the length of the chord $AB$.`,
      link:'',
    },
    obj25:{
      title:`Cosine Proof, Step 2: Law of Cosines on Triangle OAB`,
      content:`Apply the law of cosines to the triangle, with the apex angle $2\\theta$ between the two unit sides:`,
      before:``,
      after:`$$|AB|^2 = 1^2 + 1^2 - 2 \\cdot 1 \\cdot 1 \\cdot \\cos(2\\theta) = 2 - 2\\cos(2\\theta)$$

The chord's squared length now contains $\\cos(2\\theta)$ — the quantity the proof is hunting.`,
      link:'',
    },
    obj26:{
      title:`Cosine Proof, Step 3: Bisect`,
      content:`Drop the perpendicular bisector $OM$: it lands on the midpoint $M$ of the chord and splits the apex into two half-angles of $\\theta$.`,
      before:``,
      after:`Same construction as in the [sine proof](!#sine-proof-step-3-bisect), used here for a different purpose — to measure the chord instead of the area.`,
      link:'',
    },
    obj27:{
      title:`Cosine Proof, Step 4: Read Off the Half-Chord`,
      content:`Right triangle $OMA$ has hypotenuse $1$ and angle $\\theta$ at $O$, so the half-chord is $MA = \\sin\\theta$ — and the full chord is twice that:`,
      before:``,
      after:`$$AB = 2\\sin\\theta$$

A second, completely independent expression for the same chord the law of cosines measured.`,
      link:'',
    },
    obj28:{
      title:`Cosine Proof, Step 5: Square the Chord`,
      content:`Square the half-chord result to match the form of step 2:`,
      before:``,
      after:`$$|AB|^2 = (2\\sin\\theta)^2 = 4\\sin^2\\theta$$

Both routes now express $|AB|^2$ — one through $\\cos(2\\theta)$, one through $\\sin^2\\theta$.`,
      link:'',
    },
    obj29:{
      title:`Cosine Proof, Step 6: Equate`,
      content:`Set the two expressions for $|AB|^2$ equal and solve:`,
      before:``,
      after:`$$2 - 2\\cos(2\\theta) = 4\\sin^2\\theta \\;\\;\\Longrightarrow\\;\\; \\cos(2\\theta) = 1 - 2\\sin^2\\theta$$

As with sine, the verification cards keep both sides in numerical agreement across the whole slider range.`,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which double-angle identities does the explorer cover?",
      answer: "All six standard identities: sin(2 theta), cos(2 theta), tan(2 theta), csc(2 theta), sec(2 theta), and cot(2 theta). Each has its own tab and its own derivation view, either geometric or algebraic."
    },
    obj2: {
      question: "Why do only sin and cos get geometric proofs?",
      answer: "Sine and cosine are the foundational identities. Once you have them, tangent comes from sine over cosine, and cosecant, secant, and cotangent are reciprocals. The tool reflects this structure by limiting geometric proofs to sin and cos and treating the other four as algebraic consequences."
    },
    obj3: {
      question: "How do I follow the animated proof?",
      answer: "Use the toolbar below the diagram. Play steps through all six stages automatically. Prev and Next move one stage at a time. The speed selector switches between 0.5x, 1x, 1.5x, and 2x. The right panel describes each step in order."
    },
    obj4: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the theta slider to the angle you want, then read the two metric cards near the bottom of the scene. They show the values of both sides of the identity, computed independently. The formula table at the bottom does the same for all six functions at once."
    },
    obj5: {
      question: "What does the source column of the formula table mean?",
      answer: "It tells you how each identity was obtained. Sine and cosine are labeled geometric because they are proved directly from a triangle. Tangent is labeled via sin and cos, while cosecant, secant, and cotangent are labeled via their reciprocal partners."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Double Angle Identities Explorer",
      "description": "Explore and verify all six double-angle identities (sin, cos, tan, csc, sec, cot) with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/double-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot double-angle identities",
        "Animated step-by-step geometric proofs for sin(2 theta) and cos(2 theta)",
        "Algebraic derivation cards for tan, csc, sec, and cot with jump-to-source buttons",
        "Theta slider from 10 to 80 degrees with live updates",
        "Play, pause, step, reset, and speed controls for the animation",
        "Live verification cards comparing both sides of each identity",
        "Formula table summarizing all six identities, values, and proof sources",
        "URL query parameter sync so links preserve the active function"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Double Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/double-angle-identities"
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


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // scene + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    sinOverview: demoUnitFrame({ svg: doubleAngleDiagrams.sin.overview, caption: 'The complete sine proof, frozen',
      text: 'The area of one isosceles triangle computed two ways: &#189;&#8202;sin&#8202;2&#952; must equal sin&#8202;&#952;&#8202;cos&#8202;&#952;.' }),
    cosOverview: demoUnitFrame({ svg: doubleAngleDiagrams.cos.overview, caption: 'The complete cosine proof, frozen',
      text: 'The chord AB measured twice &#8212; law of cosines against half-chords &#8212; forcing cos&#8202;2&#952; = 1 &#8722; 2&#8202;sin&#178;&#952;.' }),
    tan: demoUnitFrame({ svg: doubleAngleDiagrams.tan, caption: 'tan(2&#952;), derived',
      text: 'Three algebraic lines: sine over cosine, substitute both proved identities, divide through by cos&#178;&#952;.' }),
    csc: demoUnitFrame({ svg: doubleAngleDiagrams.csc, caption: 'csc(2&#952;), derived',
      text: 'One substitution into the reciprocal: 1 over the sine identity.' }),
    sec: demoUnitFrame({ svg: doubleAngleDiagrams.sec, caption: 'sec(2&#952;), derived',
      text: 'The cosine identity inverted &#8212; with poles wherever cos&#8202;2&#952; = 0.' }),
    cot: demoUnitFrame({ svg: doubleAngleDiagrams.cot, caption: 'cot(2&#952;), derived',
      text: 'The tangent formula flipped upside down: zeros and poles exchange places.' }),
    sinStep1: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[0], caption: 'Step 1: the isosceles setup',
      text: 'Two unit radii meeting at 2&#952;, joined by the chord AB.' }),
    sinStep2: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[1], caption: 'Step 2: area, first way',
      text: 'Half the product of the unit sides times sin&#8202;2&#952; shades the whole triangle.' }),
    sinStep3: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[2], caption: 'Step 3: the bisector',
      text: 'OM splits the apex into two &#952; halves and makes two congruent right triangles.' }),
    sinStep4: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[3], caption: 'Step 4: legs as ratios',
      text: 'A unit hypotenuse means the legs are literally sin&#8202;&#952; and cos&#8202;&#952;.' }),
    sinStep5: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[4], caption: 'Step 5: area, second way',
      text: 'Two congruent halves, each &#189;&#8202;sin&#8202;&#952;&#8202;cos&#8202;&#952; &#8212; together sin&#8202;&#952;&#8202;cos&#8202;&#952;.' }),
    sinStep6: demoUnitFrame({ svg: doubleAngleDiagrams.sin.steps[5], caption: 'Step 6: equate',
      text: 'The two area measurements meet: sin&#8202;2&#952; = 2&#8202;sin&#8202;&#952;&#8202;cos&#8202;&#952;.' }),
    cosStep1: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[0], caption: 'Step 1: same setup, new target',
      text: 'The same unit triangle &#8212; but now the chord AB is the thing to measure.' }),
    cosStep2: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[1], caption: 'Step 2: law of cosines',
      text: '|AB|&#178; = 2 &#8722; 2&#8202;cos&#8202;2&#952;, straight from the apex angle.' }),
    cosStep3: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[2], caption: 'Step 3: the bisector',
      text: 'OM lands on the midpoint M, halving the apex into two &#952; angles.' }),
    cosStep4: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[3], caption: 'Step 4: the half-chord',
      text: 'MA = sin&#8202;&#952;, so the whole chord is 2&#8202;sin&#8202;&#952;.' }),
    cosStep5: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[4], caption: 'Step 5: square it',
      text: '(2&#8202;sin&#8202;&#952;)&#178; = 4&#8202;sin&#178;&#952; &#8212; the second expression for |AB|&#178;.' }),
    cosStep6: demoUnitFrame({ svg: doubleAngleDiagrams.cos.steps[5], caption: 'Step 6: equate',
      text: 'The two chord measurements force cos&#8202;2&#952; = 1 &#8722; 2&#8202;sin&#178;&#952;.' }),
  };

  const explanations = {
    sin: { steps: [
      `Two radii OA and OB of length 1, meeting at center O with angle 2θ between them. With chord AB they form an isosceles triangle. [Full treatment](!#sine-proof-step-1-setup) · [The sine identity](!#the-sine-double-angle-identity)`,
      `Area = ½ · side · side · sin(included angle). With OA = OB = 1 meeting at 2θ: area = ½ sin(2θ). [Full treatment](!#sine-proof-step-2-area-first-way) · [The sine identity](!#the-sine-double-angle-identity)`,
      `Drop OM perpendicular to AB. It splits 2θ into two halves of θ and the triangle into two congruent right triangles. [Full treatment](!#sine-proof-step-3-bisect) · [The sine identity](!#the-sine-double-angle-identity)`,
      `In right triangle OMA: hypotenuse OA = 1, angle at O is θ. So MA = sin θ and OM = cos θ. [Full treatment](!#sine-proof-step-4-read-off-the-legs) · [The sine identity](!#the-sine-double-angle-identity)`,
      `Each right triangle has area ½ · sin θ · cos θ. Two of them sum to sin θ · cos θ. [Full treatment](!#sine-proof-step-5-area-second-way) · [The sine identity](!#the-sine-double-angle-identity)`,
      `½ sin(2θ) = sin θ · cos θ, so sin(2θ) = 2 sin θ · cos θ. [Full treatment](!#sine-proof-step-6-equate) · [The sine identity](!#the-sine-double-angle-identity)`,
    ] },
    cos: { steps: [
      `Two radii OA and OB of length 1, meeting at center O with angle 2θ between them. [Full treatment](!#cosine-proof-step-1-setup) · [The cosine identity](!#the-cosine-double-angle-identity)`,
      `|AB|² = 1 + 1 − 2cos(2θ) = 2 − 2cos(2θ). [Full treatment](!#cosine-proof-step-2-law-of-cosines-on-triangle-oab) · [The cosine identity](!#the-cosine-double-angle-identity)`,
      `Drop OM perpendicular to AB. M is the midpoint of AB. [Full treatment](!#cosine-proof-step-3-bisect) · [The cosine identity](!#the-cosine-double-angle-identity)`,
      `In right triangle OMA: hypotenuse = 1, angle at O = θ. So MA = sin θ and AB = 2 sin θ. [Full treatment](!#cosine-proof-step-4-read-off-the-half-chord) · [The cosine identity](!#the-cosine-double-angle-identity)`,
      `|AB|² = (2 sin θ)² = 4 sin²θ. [Full treatment](!#cosine-proof-step-5-square-the-chord) · [The cosine identity](!#the-cosine-double-angle-identity)`,
      `2 − 2cos(2θ) = 4 sin²θ  ⟹  cos(2θ) = 1 − 2 sin²θ. [Full treatment](!#cosine-proof-step-6-equate) · [The cosine identity](!#the-cosine-double-angle-identity)`,
    ] },
    tan: { content: `Tangent is sine over cosine. So once we have sin(2θ) and cos(2θ), tan(2θ) follows directly. [Full treatment](!#the-tangent-double-angle-identity)` },
    csc: { content: `Cosecant is the reciprocal of sine. So csc(2θ) = 1 / sin(2θ). [Full treatment](!#the-cosecant-double-angle-identity)` },
    sec: { content: `Secant is the reciprocal of cosine. So sec(2θ) = 1 / cos(2θ). [Full treatment](!#the-secant-double-angle-identity)` },
    cot: { content: `Cotangent is the reciprocal of tangent. So cot(2θ) = 1 / tan(2θ). [Full treatment](!#the-cotangent-double-angle-identity)` },
  };


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
         stateUnits,
          seoData: {
        title: "Double Angle Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six double-angle identities: sin, cos, tan, csc, sec, cot. Animated geometric proofs, algebraic derivations, and live numeric verification.",
        hubDescription: "Double-Angle identities explorer covering all six trigonometric functions. Animated geometric proofs derive sin(2θ) and cos(2θ) from a bisected isosceles triangle, while algebraic derivation cards handle tan(2θ), csc(2θ), sec(2θ), and cot(2θ) with one-click jumps back to their source proofs. A live formula table and verification cards confirm each identity numerically as you sweep the angle.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/double-angle-identities",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="24" fill="none" stroke="#B5D4F4" stroke-width="1.2"/><line x1="14" y1="38" x2="66" y2="38" stroke="#B5D4F4" stroke-width="0.8"/><line x1="40" y1="12" x2="40" y2="64" stroke="#B5D4F4" stroke-width="0.8"/><line x1="40" y1="38" x2="61.19" y2="26.73" stroke="#B5D4F4" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="40" y1="38" x2="53.42" y2="18.10" stroke="#FAC775" stroke-width="1.9"/><path d="M 50 38 A 10 10 0 0 0 48.83 33.31" fill="none" stroke="#B5D4F4" stroke-width="1.1"/><path d="M 56 38 A 16 16 0 0 0 48.94 24.74" fill="none" stroke="#FAC775" stroke-width="1.3"/><circle cx="61.19" cy="26.73" r="2.4" fill="#B5D4F4" stroke="#185FA5" stroke-width="1"/><circle cx="53.42" cy="18.10" r="3" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><text x="51" y="35" font-family="Georgia,serif" font-size="6" fill="#B5D4F4" text-anchor="middle" font-style="italic">&#952;</text><text x="60" y="21" font-family="Georgia,serif" font-size="7" fill="#FAC775" text-anchor="middle" font-style="italic">2&#952;</text><text x="40" y="74" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">sin 2&#952;</text></svg>`,
        name: "Double Angle Identities Explorer"
      },

       }
    }
   }

export default function DoubleAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {


  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'switching-between-functions',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'adjusting-the-angle',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'playing-through-a-geometric-proof',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'reading-the-geometric-scene',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'working-with-derived-identities',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'reading-the-formula-table',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'verifying-identities-numerically',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'geometric-proofs-sin2-and-cos2',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'derived-identities-tan2-csc2-sec2-cot2',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'why-double-angle-identities-matter',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'related-concepts-and-tools',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'the-sine-double-angle-identity',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'u-sinOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['sinOverview'] }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-cosine-double-angle-identity',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key={'u-cosOverview'} dangerouslySetInnerHTML={{ __html: stateUnits['cosOverview'] }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'the-tangent-double-angle-identity',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div key={'u-tan'} dangerouslySetInnerHTML={{ __html: stateUnits['tan'] }} />,
          sectionsContent.obj14.after,
        ]
    },
    {
        id:'the-cosecant-double-angle-identity',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
          <div key={'u-csc'} dangerouslySetInnerHTML={{ __html: stateUnits['csc'] }} />,
          sectionsContent.obj15.after,
        ]
    },
    {
        id:'the-secant-double-angle-identity',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'u-sec'} dangerouslySetInnerHTML={{ __html: stateUnits['sec'] }} />,
          sectionsContent.obj16.after,
        ]
    },
    {
        id:'the-cotangent-double-angle-identity',
        title:sectionsContent.obj17.title,
        link:sectionsContent.obj17.link,
        content:[
          sectionsContent.obj17.content,
          <div key={'u-cot'} dangerouslySetInnerHTML={{ __html: stateUnits['cot'] }} />,
          sectionsContent.obj17.after,
        ]
    },
    {
        id:'sine-proof-step-1-setup',
        title:sectionsContent.obj18.title,
        link:sectionsContent.obj18.link,
        content:[
          sectionsContent.obj18.content,
          <div key={'u-sinStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep1'] }} />,
          sectionsContent.obj18.after,
        ]
    },
    {
        id:'sine-proof-step-2-area-first-way',
        title:sectionsContent.obj19.title,
        link:sectionsContent.obj19.link,
        content:[
          sectionsContent.obj19.content,
          <div key={'u-sinStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep2'] }} />,
          sectionsContent.obj19.after,
        ]
    },
    {
        id:'sine-proof-step-3-bisect',
        title:sectionsContent.obj20.title,
        link:sectionsContent.obj20.link,
        content:[
          sectionsContent.obj20.content,
          <div key={'u-sinStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep3'] }} />,
          sectionsContent.obj20.after,
        ]
    },
    {
        id:'sine-proof-step-4-read-off-the-legs',
        title:sectionsContent.obj21.title,
        link:sectionsContent.obj21.link,
        content:[
          sectionsContent.obj21.content,
          <div key={'u-sinStep4'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep4'] }} />,
          sectionsContent.obj21.after,
        ]
    },
    {
        id:'sine-proof-step-5-area-second-way',
        title:sectionsContent.obj22.title,
        link:sectionsContent.obj22.link,
        content:[
          sectionsContent.obj22.content,
          <div key={'u-sinStep5'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep5'] }} />,
          sectionsContent.obj22.after,
        ]
    },
    {
        id:'sine-proof-step-6-equate',
        title:sectionsContent.obj23.title,
        link:sectionsContent.obj23.link,
        content:[
          sectionsContent.obj23.content,
          <div key={'u-sinStep6'} dangerouslySetInnerHTML={{ __html: stateUnits['sinStep6'] }} />,
          sectionsContent.obj23.after,
        ]
    },
    {
        id:'cosine-proof-step-1-setup',
        title:sectionsContent.obj24.title,
        link:sectionsContent.obj24.link,
        content:[
          sectionsContent.obj24.content,
          <div key={'u-cosStep1'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep1'] }} />,
          sectionsContent.obj24.after,
        ]
    },
    {
        id:'cosine-proof-step-2-law-of-cosines-on-triangle-oab',
        title:sectionsContent.obj25.title,
        link:sectionsContent.obj25.link,
        content:[
          sectionsContent.obj25.content,
          <div key={'u-cosStep2'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep2'] }} />,
          sectionsContent.obj25.after,
        ]
    },
    {
        id:'cosine-proof-step-3-bisect',
        title:sectionsContent.obj26.title,
        link:sectionsContent.obj26.link,
        content:[
          sectionsContent.obj26.content,
          <div key={'u-cosStep3'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep3'] }} />,
          sectionsContent.obj26.after,
        ]
    },
    {
        id:'cosine-proof-step-4-read-off-the-half-chord',
        title:sectionsContent.obj27.title,
        link:sectionsContent.obj27.link,
        content:[
          sectionsContent.obj27.content,
          <div key={'u-cosStep4'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep4'] }} />,
          sectionsContent.obj27.after,
        ]
    },
    {
        id:'cosine-proof-step-5-square-the-chord',
        title:sectionsContent.obj28.title,
        link:sectionsContent.obj28.link,
        content:[
          sectionsContent.obj28.content,
          <div key={'u-cosStep5'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep5'] }} />,
          sectionsContent.obj28.after,
        ]
    },
    {
        id:'cosine-proof-step-6-equate',
        title:sectionsContent.obj29.title,
        link:sectionsContent.obj29.link,
        content:[
          sectionsContent.obj29.content,
          <div key={'u-cosStep6'} dangerouslySetInnerHTML={{ __html: stateUnits['cosStep6'] }} />,
          sectionsContent.obj29.after,
        ]
    },

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Double Angle Trigonometric Identities</h1>
   <br/>
   {/* <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   > */}
<div style={{ display: 'grid', gridTemplateColumns: '100px minmax(0, 1fr)', gap: 8,alignItems: 'start' }}>
  <SiblingsNavStandalone 
  // bg="#fafaf7"
  // color="#2c5d99"
  // activeColor="#143a66"
  // activeBg="#dde9f7"

  bg="#ffffff"
  color="#64748b"
  activeColor="#4F46E5"
  activeBg="#eef2ff"
  />
  <DoubleAngleExplorer explanations={explanations}/>
</div>
   {/* <SiblingsNavStandalone
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
 
   />
  
   <DoubleAngleExplorer/>
  */}
   {/* </SiblingsNav> */}
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
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
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}