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
• $\\sin$ and $\\cos$ open the **geometric proof** scene with a step-by-step animation.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the **derived identity card** with the algebraic chain.
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
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in six steps. A toolbar gives you control:

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
• **Blue segment** $OM$ — the perpendicular bisector, equal to $\\cos\\theta$.
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
• **Jump buttons** link directly to the geometric proofs of the source identities.
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

**sin(2θ) = 2 sin θ cos θ** — area is computed two ways:
$$\\text{area} = \\tfrac{1}{2}\\sin(2\\theta) = \\sin\\theta\\cos\\theta$$
Multiplying by $2$ gives the identity.

**cos(2θ) = 1 - 2 sin²θ** — the law of cosines gives $|AB|^2 = 2 - 2\\cos(2\\theta)$, while the half-chord computation gives $|AB|^2 = 4\\sin^2\\theta$. Equating the two yields the result.

For full coverage of these proofs and equivalent forms, see the **double angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan(2θ), csc(2θ), sec(2θ), cot(2θ)`,
      content:`The four remaining identities follow directly from the first two:

**tan(2θ)** — from $\\tan = \\sin / \\cos$:
$$\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$

**csc(2θ)** — reciprocal of $\\sin(2\\theta)$:
$$\\csc(2\\theta) = \\frac{1}{2\\sin\\theta\\cos\\theta}$$

**sec(2θ)** — reciprocal of $\\cos(2\\theta)$:
$$\\sec(2\\theta) = \\frac{1}{1 - 2\\sin^2\\theta}$$

**cot(2θ)** — reciprocal of $\\tan(2\\theta)$:
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
      "name": "Interactive Double Angle Identities Explorer",
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




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Double Angle Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six double-angle identities: sin, cos, tan, csc, sec, cot. Animated geometric proofs, algebraic derivations, and live numeric verification.",
        hubDescription: "An interactive double-angle identities explorer covering all six trigonometric functions. Animated geometric proofs derive sin(2θ) and cos(2θ) from a bisected isosceles triangle, while algebraic derivation cards handle tan(2θ), csc(2θ), sec(2θ), and cot(2θ) with one-click jumps back to their source proofs. A live formula table and verification cards confirm each identity numerically as you sweep the angle.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/double-angle-identities",
        name: "Interactive Double Angle Identities Explorer"
      },

       }
    }
   }

export default function DoubleAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'20px'}}>Double Angle Trigonometric Identities</h1>
   <br/>
   {/* <SiblingsNav
      bg="#fafaf7"
  color="#2c5d99"
  activeColor="#143a66"
  activeBg="#dde9f7"
   > */}
   <DoubleAngleExplorer/>
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