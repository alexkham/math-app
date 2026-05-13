// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import SiblingsNavStandalone  from '../../../../app/components/SiblingsNavStandalone'
// import HalfAngleExplorer from '../../../../app/components/trigonometry/identities/half-angle/HalfAngleExplorer'


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
//         url: "/trigonometry/visual-tools/half-angle-identities",
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
//    <h1 className='title' style={{marginTop:'20px',marginBottom:'0px'}}>Half Angle Trigonometric Identities</h1>
//    <br/>
//       <div style={{ display: 'grid', gridTemplateColumns: '100px minmax(0, 1fr)', gap: 8,alignItems: 'start' }}>
//          <SiblingsNavStandalone 
//          // bg="#fafaf7"
//          // color="#2c5d99"
//          // activeColor="#143a66"
//          // activeBg="#dde9f7"
       
//          bg="#ffffff"
//          color="#64748b"
//          activeColor="#4F46E5"
//          activeBg="#eef2ff"
//          />
//           <HalfAngleExplorer/>
//        </div>

 
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
import SiblingsNavStandalone  from '../../../../app/components/SiblingsNavStandalone'
import HalfAngleExplorer from '../../../../app/components/trigonometry/identities/half-angle/HalfAngleExplorer'


export async function getStaticProps(){

  const keyWords = [
    'half angle identities',
    'half angle formulas',
    'sin alpha over 2 identity',
    'cos alpha over 2 identity',
    'tan alpha over 2 identity',
    'csc half angle',
    'sec half angle',
    'cot half angle',
    'half angle proof',
    'half angle calculator',
    'trigonometric identities visualizer',
    'interactive half angle',
    'derive half angle formulas',
    'bisected isosceles triangle proof',
    'half angle geometric proof'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Half-angle identity** — a formula expressing a trig function of $\\alpha/2$ in terms of trig functions of $\\alpha$.
• **Geometric proof** — a derivation that uses a drawing (an isosceles triangle, two radii, a perpendicular bisector) rather than algebra.
• **Bisector** — a line that splits an angle into two equal halves. Here, $OM$ bisects the apex $\\alpha$ into two angles of $\\alpha/2$.
• **Reciprocal identity** — a function written as $1/\\text{(another)}$. $\\csc = 1/\\sin$, $\\sec = 1/\\cos$, $\\cot = 1/\\tan$.
• **Derived identity** — one obtained by combining or rearranging others. $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, and $\\cot(\\alpha/2)$ all follow from the formulas for $\\sin(\\alpha/2)$ and $\\cos(\\alpha/2)$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`Six tabs at the top let you pick which half-angle identity to study: $\\sin(\\alpha/2)$, $\\cos(\\alpha/2)$, $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, $\\cot(\\alpha/2)$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the **geometric proof** scene with a step-by-step animation.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the **derived identity card** with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?halfFn=...$, so links you copy preserve the selected function.

Clicking any row of the **formula table** at the bottom also jumps to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle α`,
      content:`Each view exposes a slider for the **base angle $\\alpha$** in degrees, between $20°$ and $160°$. The half angle is then $\\alpha/2$, ranging from $10°$ to $80°$.

What changes as you slide:
• On geometric scenes, the SVG triangle resizes and the apex $\\alpha$ updates immediately.
• The number readout shows the current value of $\\alpha$.
• The verification cards recompute both sides of the identity at the new $\\alpha/2$.

Sweep through several values to confirm each identity is not a coincidence at one angle but a true equality.`,
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
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, $2\\times$.

Each step adds one geometric element (radii, triangle fill, bisector, half-angles, leg labels, final metrics). The right-hand panel logs each step with its name and reasoning.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two radii $OA$ and $OB$ of length $1$ meeting at the center $O$ with angle $\\alpha$ between them.

Elements that appear across the steps:
• **Red arc** at $O$ — the apex angle $\\alpha$.
• **Indigo chord** $AB$ — the base of the isosceles triangle.
• **Blue segment** $OM$ — the perpendicular bisector, equal to $\\cos(\\alpha/2)$.
• **Half-angles** at $O$ — each labeled $\\alpha/2$ once the bisector is drawn.
• **Half-chord labels** — $\\sin(\\alpha/2)$ on segments $MA$ and $MB$.

A small right-angle mark appears at $M$ when the perpendicular bisector becomes visible.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan(\\alpha/2)$, $\\csc(\\alpha/2)$, $\\sec(\\alpha/2)$, or $\\cot(\\alpha/2)$ opens a different card layout. Instead of a triangle, it shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which earlier identity the current one rests on.
• **Jump buttons** link directly to the geometric proofs of the source identities.
• A multi-line derivation block shows each manipulation with a brief side note.
• Verification cards confirm both sides match numerically.

This split keeps the geometric ideas isolated to two functions and treats the other four as algebraic consequences.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six identities at once:

• **Function** column — the name of the trig function with $\\alpha/2$ argument.
• **Identity** column — the right-hand side of the formula.
• **Value** column — the numeric value at the current $\\alpha/2$.
• **Source** column — labels each identity as **geometric** ($\\sin$, $\\cos$) or **via X** for derived ones.

Click any row to make that function active. The current row gets a deep-blue left border and tinted background.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards that compute both sides of the active identity at the current $\\alpha$.

Example for $\\sin(\\alpha/2)$:
• Left card shows $\\sin(\\alpha/2)$.
• Right card shows $\\sqrt{(1 - \\cos\\alpha)/2}$.

The two numbers always match (within rounding to three decimals). Sweeping the slider while watching the cards is a fast empirical check that the identity holds for every $\\alpha$, not just the one in the picture. The formula table mirrors this across all six functions simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proofs: sin(α/2) and cos(α/2)`,
      content:`The two foundational identities are proved by drawing an isosceles triangle with two unit radii.

**sin(α/2)** — apply the law of cosines and equate with the squared chord:
$$|AB|^2 = 2 - 2\\cos\\alpha = (2\\sin(\\alpha/2))^2$$
Solving gives $\\sin(\\alpha/2) = \\sqrt{(1 - \\cos\\alpha)/2}$.

**cos(α/2)** — from Pythagoras in the half-triangle, $\\cos^2(\\alpha/2) = 1 - \\sin^2(\\alpha/2)$. Substituting the sin half-angle identity:
$$\\cos(\\alpha/2) = \\sqrt{(1 + \\cos\\alpha)/2}$$

For full coverage and equivalent forms (including sign choices by quadrant), see the **half angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan(α/2), csc(α/2), sec(α/2), cot(α/2)`,
      content:`The four remaining identities follow directly from the first two:

**tan(α/2)** — from $\\tan = \\sin/\\cos$ applied to the half angle:
$$\\tan(\\alpha/2) = \\sqrt{\\frac{1 - \\cos\\alpha}{1 + \\cos\\alpha}}$$

**csc(α/2)** — reciprocal of $\\sin(\\alpha/2)$:
$$\\csc(\\alpha/2) = \\sqrt{\\frac{2}{1 - \\cos\\alpha}}$$

**sec(α/2)** — reciprocal of $\\cos(\\alpha/2)$:
$$\\sec(\\alpha/2) = \\sqrt{\\frac{2}{1 + \\cos\\alpha}}$$

**cot(α/2)** — reciprocal of $\\tan(\\alpha/2)$:
$$\\cot(\\alpha/2) = \\sqrt{\\frac{1 + \\cos\\alpha}{1 - \\cos\\alpha}}$$

For step-by-step derivations and alternative forms, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Half-Angle Identities Matter`,
      content:`Half-angle identities are essential whenever a problem asks for a trig function at an angle that is not on the unit circle but is half of one that is.

• **Exact-value computation** — find $\\sin 15°$, $\\cos 22.5°$, $\\tan 75°$ from $\\sin 30°$, $\\cos 45°$, $\\cos 150°$.
• **Integration** — the Weierstrass substitution $t = \\tan(\\alpha/2)$ converts rational trig integrals into rational functions of $t$.
• **Equation solving** — reduce equations mixing $\\sin\\alpha$ and $\\sin(\\alpha/2)$ to single-argument form.
• **Geometry** — apothems, chord lengths, and inscribed-polygon side lengths all use half-angle formulas.

For applications and worked examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Double Angle Identities** — companion formulas for $\\sin(2\\theta)$, $\\cos(2\\theta)$, and beyond.
• **Pythagorean Identities** — $\\sin^2\\theta + \\cos^2\\theta = 1$ and its companions, used in the cos half-angle proof.
• **Sum and Difference Identities** — base relations from which double- and half-angle identities are derived.
• **Unit Circle** — geometric setup for every identity in this tool.
• **Trigonometric Functions Graphs** — see how $\\sin$, $\\cos$, $\\tan$ and their reciprocals evolve as the angle varies.
• **Triangle Explorer** — interactive triangles with built-in law of sines and law of cosines.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which half-angle identities does the explorer cover?",
      answer: "All six standard identities: sin(alpha/2), cos(alpha/2), tan(alpha/2), csc(alpha/2), sec(alpha/2), and cot(alpha/2). Each has its own tab and its own derivation view, either geometric or algebraic."
    },
    obj2: {
      question: "Why do only sin and cos get geometric proofs?",
      answer: "Sine and cosine are the foundational half-angle identities. Tangent is sin over cos, and cosecant, secant, and cotangent are reciprocals of sin, cos, and tan. The tool limits geometric proofs to sin and cos and treats the other four as algebraic consequences."
    },
    obj3: {
      question: "How is sin(alpha/2) proved geometrically?",
      answer: "Draw an isosceles triangle with two unit radii meeting at angle alpha. The chord length squared is 2 minus 2 cos alpha by the law of cosines, and also equals 4 sin squared (alpha/2) from the bisected half-chord. Equating gives sin(alpha/2) equal to the square root of (1 minus cos alpha) over 2."
    },
    obj4: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the alpha slider to the angle you want, then read the two metric cards near the bottom. They show the values of both sides of the identity, computed independently. The formula table at the bottom does the same for all six functions at once."
    },
    obj5: {
      question: "What does the source column of the formula table mean?",
      answer: "It tells you how each identity was obtained. Sine is labeled geometric. Cosine is via sin (proved using the sin half-angle and Pythagoras). Tangent is via sin and cos. Cosecant, secant, and cotangent are via their reciprocal partners."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Half Angle Identities Explorer",
      "description": "Explore and verify all six half-angle identities (sin, cos, tan, csc, sec, cot) with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/half-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot half-angle identities",
        "Animated step-by-step geometric proofs for sin(alpha/2) and cos(alpha/2)",
        "Algebraic derivation cards for tan, csc, sec, and cot with jump-to-source buttons",
        "Alpha slider from 20 to 160 degrees with live updates",
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
          "name": "Half Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/half-angle-identities"
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
        title: "Half Angle Identities: Interactive Proofs | Learn Math Class",
        description: "Explore all six half-angle identities: sin, cos, tan, csc, sec, cot. Animated geometric proofs, algebraic derivations, and live numeric verification.",
        hubDescription: "An interactive half-angle identities explorer covering all six trigonometric functions. Animated geometric proofs derive sin(α/2) and cos(α/2) from a bisected isosceles triangle, while algebraic derivation cards handle tan(α/2), csc(α/2), sec(α/2), and cot(α/2) with one-click jumps back to their source proofs. A live formula table and verification cards confirm each identity numerically as you sweep α from 20° to 160°.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/half-angle-identities",
        name: "Interactive Half Angle Identities Explorer"
      },

       }
    }
   }

export default function HalfAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'20px',marginBottom:'0px'}}>Half Angle Trigonometric Identities</h1>
   <br/>
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
          <HalfAngleExplorer/>
       </div>


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
   {/* <ScrollUpButton/> */}
   </>
  )
}