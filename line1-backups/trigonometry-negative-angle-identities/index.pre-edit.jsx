// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NegativeAngleExplorer from '../../../../app/components/trigonometry/identities/negative-angle/NegativeAngleExplorer'


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
//         url: "/trigonometry/visual-tools/negative-angle-identities",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'20px'}}>Negative Angle Trigonometric Identities</h1>
//    <br/>
//    <NegativeAngleExplorer/>
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
import NegativeAngleExplorer from '../../../../app/components/trigonometry/identities/negative-angle/NegativeAngleExplorer'


export async function getStaticProps(){

  const keyWords = [
    'negative angle identities',
    'negative angle formulas',
    'sin negative theta identity',
    'cos negative theta identity',
    'tan negative theta identity',
    'csc sec cot negative angle',
    'even odd trig functions',
    'odd function sine',
    'even function cosine',
    'negative angle proof',
    'reflection unit circle',
    'trigonometric parity',
    'interactive negative angle',
    'derive negative angle identities',
    'trig identity calculator'
  ]

    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`• **Negative angle identity** — a formula relating a trig function evaluated at $-\\theta$ to the same function at $\\theta$.
• **Even function** — satisfies $f(-x) = f(x)$. Its graph is symmetric about the y-axis. $\\cos$ and $\\sec$ are even.
• **Odd function** — satisfies $f(-x) = -f(x)$. Its graph is symmetric about the origin. $\\sin$, $\\tan$, $\\csc$, $\\cot$ are odd.
• **Reflection across the x-axis** — the geometric operation taking the terminal point $P = (\\cos\\theta, \\sin\\theta)$ to $P' = (\\cos\\theta, -\\sin\\theta)$, which is the terminal point of $-\\theta$.
• **Parity** — whether a function is even or odd, summarized in the **Parity** column of the formula table.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Switching Between Functions`,
      content:`Six tabs at the top let you select which negative-angle identity to study: $\\sin(-\\theta)$, $\\cos(-\\theta)$, $\\tan(-\\theta)$, $\\csc(-\\theta)$, $\\sec(-\\theta)$, $\\cot(-\\theta)$.

How selection changes the view:
• $\\sin$ and $\\cos$ open the **geometric proof** scene showing the reflection $P \\to P'$ on the unit circle.
• $\\tan$, $\\csc$, $\\sec$, and $\\cot$ open the **derived identity card** with the algebraic chain.
• The active tab is highlighted in deep blue.
• The URL updates with $?negFn=...$ so links you share preserve the selected function.

Clicking any row of the **formula table** at the bottom also jumps to that function.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Adjusting the Angle θ`,
      content:`Each view exposes a slider for the angle $\\theta$ in degrees, between $15°$ and $75°$.

What changes as you slide:
• On geometric scenes, $P$ moves along the upper unit circle and $P'$ follows below as its mirror image.
• The coordinate readouts at $P$ and $P'$ update in real time.
• The verification cards at the bottom recompute both $\\sin\\theta$ and $\\sin(-\\theta)$ (or $\\cos\\theta$ and $\\cos(-\\theta)$) at the new $\\theta$.

Sweep the slider to see that $\\sin(-\\theta)$ and $-\\sin\\theta$ track together (odd behavior), while $\\cos(-\\theta)$ and $\\cos\\theta$ stay identical (even behavior).`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Playing Through a Geometric Proof`,
      content:`When $\\sin$ or $\\cos$ is active, an animated proof unfolds in three steps. A toolbar gives you control:

• **Reset** — return to step 0 with a blank scene.
• **Prev** / **Next** — step one stage at a time.
• **Play** / **Pause** — advance automatically.
• **Speed selector** — $0.5\\times$, $1\\times$, $1.5\\times$, $2\\times$.

The three steps are: (1) place $P$ at angle $\\theta$, (2) reflect across the x-axis to produce $P'$ at angle $-\\theta$, (3) read off the identity from the coordinates of $P'$.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Geometric Scene`,
      content:`The SVG shows the unit circle with two terminal points:

• **P** at angle $\\theta$ above the x-axis, with coordinates $(\\cos\\theta, \\sin\\theta)$.
• **P&apos;** at angle $-\\theta$ below the x-axis, with coordinates $(\\cos\\theta, -\\sin\\theta)$.

Reflection across the x-axis is the key operation:
• Preserves the **x-coordinate** — so $\\cos(-\\theta) = \\cos\\theta$ (even).
• Flips the sign of the **y-coordinate** — so $\\sin(-\\theta) = -\\sin\\theta$ (odd).

A comparison overlay highlights the shared horizontal foot and the equal-magnitude, opposite-sign vertical legs.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Working with Derived Identities`,
      content:`Selecting $\\tan(-\\theta)$, $\\csc(-\\theta)$, $\\sec(-\\theta)$, or $\\cot(-\\theta)$ opens a different card layout. Instead of a unit-circle picture, it shows the **algebraic derivation** as a chain of equations.

Layout of the derived card:
• A short intro explains which earlier identity the current one rests on.
• **Jump buttons** link directly to the geometric proofs of $\\sin(-\\theta)$ or $\\cos(-\\theta)$.
• A multi-line derivation block shows each manipulation with a brief side note.
• Verification cards confirm both sides match numerically.

Two derived identities preserve sign ($\\sec$, like $\\cos$, is even); four flip sign ($\\tan$, $\\csc$, $\\cot$, like $\\sin$, are odd).`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Reading the Formula Table`,
      content:`A reference table beneath every scene lists all six negative-angle identities at once:

• **Function** column — the trig function with $-\\theta$ argument.
• **Identity** column — the right-hand side.
• **Parity** column — labels each as **even** or **odd**.
• **Value** column — the numeric value at the current $\\theta$.
• **Source** column — labels each as **geometric** ($\\sin$, $\\cos$) or **via X** for derived ones.

Click any row to make that function active. The current row gets a deep-blue left border and tinted background.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Verifying Identities Numerically`,
      content:`Every scene includes two metric cards that compute the function at $+\\theta$ and at $-\\theta$ for the active row.

Example for $\\sin$:
• Left card shows $\\sin\\theta$.
• Right card shows $\\sin(-\\theta)$.

For odd functions, the two values are equal in magnitude and opposite in sign. For even functions, they are identical. Sweeping the slider while watching the cards is a fast empirical check across all $\\theta$, and the formula table mirrors this across all six functions at once.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Geometric Proofs: sin(-θ) and cos(-θ)`,
      content:`The two foundational identities come from reflecting the terminal point across the x-axis.

**sin(-θ) = -sin θ** — reflection flips the y-coordinate:
$$P = (\\cos\\theta, \\sin\\theta) \\;\\to\\; P' = (\\cos\\theta, -\\sin\\theta)$$
Since the y-coordinate of $P'$ is $\\sin(-\\theta)$ by definition, $\\sin(-\\theta) = -\\sin\\theta$. Sine is **odd**.

**cos(-θ) = cos θ** — reflection preserves the x-coordinate. The x-coordinate of $P'$ equals the x-coordinate of $P$, which is $\\cos\\theta$. Therefore $\\cos(-\\theta) = \\cos\\theta$. Cosine is **even**.

For full coverage with proofs in all quadrants, see the **negative angle identities theory page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Derived Identities: tan, csc, sec, cot`,
      content:`The four remaining identities follow from the two geometric ones:

**tan(-θ) = -tan θ** (odd) — $\\tan = \\sin/\\cos$:
$$\\tan(-\\theta) = \\frac{\\sin(-\\theta)}{\\cos(-\\theta)} = \\frac{-\\sin\\theta}{\\cos\\theta} = -\\tan\\theta$$

**csc(-θ) = -csc θ** (odd) — reciprocal of an odd function is odd: $\\csc(-\\theta) = 1/\\sin(-\\theta) = -1/\\sin\\theta = -\\csc\\theta$.

**sec(-θ) = sec θ** (even) — reciprocal of an even function is even: $\\sec(-\\theta) = 1/\\cos(-\\theta) = 1/\\cos\\theta = \\sec\\theta$.

**cot(-θ) = -cot θ** (odd) — reciprocal of tangent: $\\cot(-\\theta) = 1/\\tan(-\\theta) = -1/\\tan\\theta = -\\cot\\theta$.

For full derivations, see the **trigonometric identities page** and the **reciprocal identities page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Why Negative Angle Identities Matter`,
      content:`These identities reveal the symmetry structure of trigonometric functions:

• **Graph symmetry** — the parity rules predict whether each graph is symmetric about the y-axis (even) or about the origin (odd) without plotting points.
• **Simplification** — replace any $f(-\\theta)$ with $\\pm f(\\theta)$ instantly, halving the cases to consider.
• **Fourier series** — even functions expand into cosines only, odd functions into sines only.
• **Integration** — odd integrands over symmetric intervals like $[-a, a]$ integrate to zero.
• **Solving equations** — paired solutions $\\theta$ and $-\\theta$ are predictable from parity.

For applications and examples, see the **trigonometric identities applications page**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts and Tools`,
      content:`Continue exploring with these connected resources:

• **Pythagorean Identities** — companion identities relating $\\sin^2$ and $\\cos^2$.
• **Double Angle Identities** — formulas for $\\sin(2\\theta)$, $\\cos(2\\theta)$ that combine with parity rules.
• **Half Angle Identities** — formulas for $\\sin(\\alpha/2)$ and friends.
• **Sum and Difference Identities** — additive companions; combine with parity for full flexibility.
• **Unit Circle** — geometric setup for the reflection used in this tool.
• **Trigonometric Functions Graphs** — see the parity visually in each function's graph.`,
      before:``,
      after:``,
      link:'',
    },

  }


  const faqQuestions = {
    obj1: {
      question: "Which negative angle identities does the explorer cover?",
      answer: "All six standard identities: sin(-theta) = -sin theta, cos(-theta) = cos theta, tan(-theta) = -tan theta, csc(-theta) = -csc theta, sec(-theta) = sec theta, and cot(-theta) = -cot theta. Each has its own tab with either a geometric proof or an algebraic derivation."
    },
    obj2: {
      question: "Which trig functions are even and which are odd?",
      answer: "Cosine and secant are even, meaning f(-theta) equals f(theta). Sine, tangent, cosecant, and cotangent are odd, meaning f(-theta) equals minus f(theta). The Parity column of the formula table labels each one."
    },
    obj3: {
      question: "How is sin(-theta) = -sin theta proved geometrically?",
      answer: "Place the terminal point P of angle theta on the unit circle, then reflect across the x-axis to obtain P prime, which is the terminal point of -theta. The reflection flips the y-coordinate but preserves the x-coordinate, so sin(-theta) equals -sin theta and cos(-theta) equals cos theta."
    },
    obj4: {
      question: "Why is secant even but cosecant odd?",
      answer: "A reciprocal preserves parity. Cosine is even, so secant equal to 1 over cosine is also even. Sine is odd, so cosecant equal to 1 over sine is odd. The same logic makes tangent odd and cotangent odd."
    },
    obj5: {
      question: "Can I verify an identity at a specific angle?",
      answer: "Yes. Move the theta slider to the angle you want, then read the two metric cards near the bottom. They show the function value at plus theta and at minus theta. For odd functions the signs differ, for even functions they match. The formula table does the same for all six functions at once."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Negative Angle Identities Explorer",
      "description": "Explore and verify all six negative-angle (even/odd) trigonometric identities with animated geometric proofs, algebraic derivations, and live numeric checks.",
      "url": "https://www.learnmathclass.com/trigonometry/visual-tools/negative-angle-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six tabs covering sin, cos, tan, csc, sec, and cot negative-angle identities",
        "Animated reflection proofs for sin(-theta) and cos(-theta) on the unit circle",
        "Algebraic derivation cards for tan, csc, sec, and cot with jump-to-source buttons",
        "Theta slider from 15 to 75 degrees with live updates",
        "Play, pause, step, reset, and speed controls for the animation",
        "Live verification cards comparing values at plus and minus theta",
        "Formula table summarizing identities, parity, values, and proof sources",
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
          "name": "Negative Angle Identities",
          "item": "https://www.learnmathclass.com/trigonometry/visual-tools/negative-angle-identities"
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
        title: "Negative Angle Identities: Even & Odd Trig | Learn Math Class",
        description: "Explore all six negative-angle trig identities. Animated reflection proofs for sin and cos, algebraic derivations for tan, csc, sec, cot. Live numeric verification.",
        hubDescription: "Negative-Angle identities explorer covering all six trigonometric functions. Animated reflection proofs derive sin(-θ) = -sin θ and cos(-θ) = cos θ from a point and its mirror image across the x-axis on the unit circle, while algebraic derivation cards handle tan, csc, sec, and cot. A live formula table and verification cards label each function's parity (even or odd) and confirm every identity numerically.",
        category: "Identities",
        keywords: keyWords.join(", "),
        url: "/trigonometry/visual-tools/negative-angle-identities",
        name: "Negative Angle Identities Explorer"
      },

       }
    }
   }

export default function NegativeAngleIdentitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections=[
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'20px'}}>Negative Angle Trigonometric Identities</h1>
   <br/>
   <NegativeAngleExplorer/>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   /> */}
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
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}